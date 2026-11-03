import { useEffect, useRef, useState } from "react";
import { stationsOn, milestones, lineById, type LineId, type Station } from "../data/career";
import { useLanguage } from "../context/LanguageContext";

// Time-scaled route map. 2019–2023 is compressed; 2024 onward is where the lines live.
const W = 1200;
const H = 380;
const AXIS_Y = 350;
const TRUNK_Y = 230;
const LINE_Y: Record<LineId, number> = { dimensi: 90, dharmais: 170, origin: TRUNK_Y, navitek: 300, web3: 300 };
const DRAW_ORDER: LineId[] = ["web3", "navitek", "dharmais", "dimensi"];
const DELAY: Record<LineId, number> = { origin: 0, dharmais: 150, web3: 300, dimensi: 450, navitek: 600 };

const now = new Date();
const NOW = now.getFullYear() + now.getMonth() / 12;
const END = Math.max(2027, NOW + 0.2);

const scale: [number, number][] = [
  [2019, 48],
  [2023, 222],
  [2024, 330],
  [END, 1170],
];

const x = (year: number) => {
  for (let i = 1; i < scale.length; i++) {
    const [y0, x0] = scale[i - 1];
    const [y1, x1] = scale[i];
    if (year <= y1) return x0 + ((year - y0) / (y1 - y0)) * (x1 - x0);
  }
  return scale[scale.length - 1][1];
};

const X_NOW = x(NOW);
const EDGE = W - 10;

const spread = (n: number, a: number, b: number) =>
  n === 1 ? [(a + b) / 2] : Array.from({ length: n }, (_, i) => a + ((b - a) * i) / (n - 1));

// Where the Dimensi branch crosses the Dharmais line; no station or label may sit on it.
const CROSS_X = x(lineById("dimensi").from) - (LINE_Y.dharmais - LINE_Y.dimensi);

const stopXs = (id: LineId, n: number, a: number, b: number) => {
  if (id !== "dharmais") return spread(n, a, b);
  const before = Math.ceil(n / 2);
  return [...spread(before, a, CROSS_X - 64), ...spread(n - before, CROSS_X + 78, b)];
};

const geometry = (id: LineId) => {
  const line = lineById(id);
  const y = LINE_Y[id];
  const dy = Math.abs(y - TRUNK_Y);
  const x0 = x(line.from);
  const ended = line.to !== null;
  const x1 = ended ? x(line.to!) : X_NOW + 6;
  const stops = stationsOn(id).filter((s) => s.onMap !== false);
  const xs = stopXs(id, stops.length, x0 + 40, ended ? x1 - 34 : X_NOW - 46);
  return { line, y, dy, x0, x1, ended, stops, xs, junction: x0 - dy, track: `M${x0 - dy} ${TRUNK_Y} L${x0} ${y} H${x1}` };
};

const reduceMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface Props {
  solo: LineId | null;
  setSolo: (id: LineId | null) => void;
}

interface Peek {
  station: Station;
  left: number;
  top: number;
  below: boolean;
}

// A two-car set in the line colour: runs the line once after the draw-in and stops at "now".
const Train = ({ path, color, dur, begin, k }: { path: string; color: string; dur: number; begin: number; k: number }) => (
  <g opacity={0}>
    <g transform={`scale(${k})`}>
      <rect x={-30} y={-5.5} width={27} height={11} rx={4} fill={color} />
      <rect x={-1} y={-5.5} width={29} height={11} rx={5.5} fill={color} />
    </g>
    <set attributeName="opacity" to="1" begin={`${begin}s`} fill="freeze" />
    <animateMotion dur={`${dur}s`} begin={`${begin}s`} fill="freeze" rotate="auto" path={path} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.45 0 0.2 1" />
  </g>
);

const RouteMap = ({ solo, setSolo }: Props) => {
  const { t, pick } = useLanguage();
  const plate = useRef<HTMLDivElement>(null);
  const [compact, setCompact] = useState(false);
  const [peek, setPeek] = useState<Peek | null>(null);
  const [motion, setMotion] = useState(false);

  useEffect(() => setMotion(!reduceMotion()), []);

  // The map always fits its column. When the column is narrow, station names drop
  // (each product is listed in the Lines section) and strokes thicken so the diagram stays legible.
  useEffect(() => {
    const el = plate.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setCompact(e.contentRect.width < 720));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const k = compact ? 2.2 : 1; // stroke/dot scale in compact mode

  const color = (id: LineId) => `var(--line-${id})`;

  const showPeek = (s: Station, target: Element, below: boolean) => {
    if (compact || !window.matchMedia("(hover: hover)").matches || !plate.current) return;
    const box = plate.current.getBoundingClientRect();
    const dot = target.querySelector("circle")!.getBoundingClientRect();
    const cx = dot.left + dot.width / 2 - box.left;
    setPeek({
      station: s,
      left: Math.min(Math.max(cx - 140, 0), box.width - 280),
      top: below ? dot.bottom - box.top + 14 : dot.top - box.top - 14,
      below,
    });
  };

  const lineGeo = DRAW_ORDER.map(geometry);

  return (
    <div className="relative">
      <div>
        <div ref={plate} className="relative" data-compact={compact || undefined}>
          <svg
            viewBox={`0 0 ${W} ${compact ? H + 32 : H}`}
            className="route block w-full h-auto select-none"
            aria-labelledby="route-title"
            data-solo={solo ?? undefined}
            onMouseLeave={() => {
              setSolo(null);
              setPeek(null);
            }}
          >
            <title id="route-title">{t("map.label")}</title>

            {/* year axis */}
            <g className="tnum" fill="var(--ink-2)" fontSize={compact ? 30 : 13} fontWeight="500">
              <line x1={48} x2={EDGE} y1={AXIS_Y} y2={AXIS_Y} stroke="var(--rule)" strokeWidth={1.5 * k} />
              {[2019, 2023, 2024, 2025, 2026].map((yr) => (
                <g key={yr}>
                  <line x1={x(yr)} x2={x(yr)} y1={AXIS_Y - 6 * k} y2={AXIS_Y + 6 * k} stroke="var(--rule)" strokeWidth={1.5 * k} />
                  <text x={x(yr)} y={AXIS_Y + (compact ? 40 : 24)} textAnchor={yr === 2019 ? "start" : "middle"}>
                    {yr}
                  </text>
                </g>
              ))}
            </g>

            {/* person line: the ink trunk from 2019 to now, dashed into the future */}
            <g className="line-group" data-active={solo === "origin" || undefined} onMouseEnter={() => setSolo("origin")}>
              <path d={`M48 ${TRUNK_Y} H${X_NOW}`} stroke="var(--ground)" strokeWidth={15 * k} fill="none" />
              <path className="track" pathLength={1} d={`M48 ${TRUNK_Y} H${X_NOW}`} stroke={color("origin")} strokeWidth={9 * k} strokeLinecap="round" fill="none" />
              <path d={`M${X_NOW + 18 * k} ${TRUNK_Y} H${EDGE}`} stroke={color("origin")} strokeWidth={4 * k} strokeDasharray={`${2 * k} ${10 * k}`} strokeLinecap="round" fill="none" opacity={0.5} />
              {milestones.map((m, i) => {
                const mx = x(m.year);
                return (
                  <g key={m.year} className="stop" style={{ ["--delay" as string]: `${700 + i * 90}ms` }}>
                    <circle cx={mx} cy={TRUNK_Y} r={(i === 0 ? 11 : 7) * k} fill="var(--ground)" stroke="var(--ink)" strokeWidth={(i === 0 ? 6 : 4) * k} />
                    <text
                      className="map-label"
                      x={i === 0 ? mx - 6 : mx}
                      y={i === 0 ? TRUNK_Y - 22 : TRUNK_Y + 30}
                      textAnchor={i === 0 ? "start" : "middle"}
                      fontSize="14"
                      fontWeight="650"
                      fill="var(--ink)"
                     
                    >
                      {pick(m.label)}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* job lines */}
            {lineGeo.map(({ line, y, x1, ended, stops, xs, track }) => {
              const id = line.id;
              const above = y < TRUNK_Y;
              const d = DELAY[id];
              return (
                <g key={id} className="line-group" data-active={solo === id || undefined} onMouseEnter={() => setSolo(id)}>
                  <path d={track} stroke="var(--ground)" strokeWidth={15 * k} strokeLinejoin="round" fill="none" />
                  <path
                    className="track"
                    pathLength={1}
                    style={{ ["--delay" as string]: `${d}ms` }}
                    d={track}
                    stroke={color(id)}
                    strokeWidth={9 * k}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {ended ? (
                    <line
                      className="stop"
                      style={{ ["--delay" as string]: `${d + 1100}ms` }}
                      x1={x1}
                      x2={x1}
                      y1={y - 12 * k}
                      y2={y + 12 * k}
                      stroke={color(id)}
                      strokeWidth={9 * k}
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      className="stop"
                      style={{ ["--delay" as string]: `${d + 1100}ms` }}
                      d={`M${x1 + 12 * k} ${y} H${EDGE}`}
                      stroke={color(id)}
                      strokeWidth={4 * k}
                      strokeDasharray={`${2 * k} ${10 * k}`}
                      strokeLinecap="round"
                      fill="none"
                      opacity={0.6}
                    />
                  )}
                  {motion && !ended && <Train path={track} color={color(id)} dur={3.2} begin={1.7 + d / 1000} k={k} />}
                  {stops.map((s, i) => {
                    const current = !ended && i === stops.length - 1;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="stop"
                        style={{ ["--delay" as string]: `${d + 600 + i * 70}ms` }}
                        aria-label={`${s.name} · ${pick(line.name)}`}
                        onFocus={(e) => {
                          setSolo(id);
                          showPeek(s, e.currentTarget, above);
                        }}
                        onBlur={() => {
                          setSolo(null);
                          setPeek(null);
                        }}
                        onMouseEnter={(e) => showPeek(s, e.currentTarget, above)}
                        onMouseLeave={() => setPeek(null)}
                      >
                        <circle cx={xs[i]} cy={y} r={18} fill="transparent" />
                        <circle
                          className="station-dot"
                          cx={xs[i]}
                          cy={y}
                          r={8 * k}
                          fill={current ? color(id) : "var(--ground)"}
                          stroke="var(--ink)"
                          strokeWidth={4 * k}
                        />
                        <text
                          className="station-name"
                          transform={above ? `translate(${xs[i] + 3} ${y - 16}) rotate(-45)` : `translate(${xs[i]} ${y + 30})`}
                          textAnchor={above ? "start" : "middle"}
                          fontSize="14.5"
                          fontWeight="680"
                          fill="var(--ink)"
                         
                        >
                          {s.short ?? s.name}
                        </text>
                      </a>
                    );
                  })}
                </g>
              );
            })}

            {/* interchanges where each job line leaves the person line */}
            {lineGeo.map(({ line, junction }) => (
              <rect
                key={line.id}
                className="stop"
                style={{ ["--delay" as string]: `${DELAY[line.id] + 300}ms` }}
                x={junction - 15 * k}
                y={TRUNK_Y - 10 * k}
                width={30 * k}
                height={20 * k}
                rx={10 * k}
                fill="var(--ground)"
                stroke="var(--ink)"
                strokeWidth={4 * k}
              />
            ))}


            {/* you are here */}
            <g className="stop" style={{ ["--delay" as string]: "1500ms" }}>
              <circle className="now-pulse" cx={X_NOW} cy={TRUNK_Y} r={10 * k} fill="var(--line-dimensi)" />
              <circle cx={X_NOW} cy={TRUNK_Y} r={10 * k} fill="var(--ink)" stroke="var(--ground)" strokeWidth={4 * k} />
              {compact ? (
                // below the person line, left of the marker: the only clear corner at this scale
                <g>
                  <rect x={X_NOW - 236} y={TRUNK_Y + 12} width={214} height={36} rx={18} fill="var(--ink)" />
                  <text x={X_NOW - 129} y={TRUNK_Y + 38} textAnchor="middle" fontSize="23" fontWeight="700" fill="var(--on-ink)">
                    {t("map.now")}
                  </text>
                </g>
              ) : (
                <g>
                  <line x1={X_NOW} x2={X_NOW} y1={TRUNK_Y - 12} y2={TRUNK_Y - 22} stroke="var(--ink)" strokeWidth={2} />
                  <rect x={X_NOW - 62} y={TRUNK_Y - 50} width={124} height={28} rx={14} fill="var(--ink)" />
                  <text x={X_NOW} y={TRUNK_Y - 31} textAnchor="middle" fontSize="13.5" fontWeight="700" fill="var(--on-ink)">
                    {t("map.now")}
                  </text>
                </g>
              )}
            </g>
          </svg>

          {/* station preview */}
          {peek && (
            <div
              className="pointer-events-none absolute z-10 w-[280px] rounded-2xl bg-ground border-2 border-ink overflow-hidden shadow-[0_4px_8px_rgb(0_0_0/0.08),0_24px_48px_-20px_rgb(0_0_0/0.45)]"
              style={{
                left: peek.left,
                top: peek.top,
                transform: peek.below ? undefined : "translateY(-100%)",
                ["--line" as string]: `var(--line-${peek.station.line})`,
              }}
            >
              {peek.station.images?.[0] && (
                <img src={peek.station.images[0]} alt="" className="w-full aspect-video object-cover object-top border-b-2 border-ink" />
              )}
              <div className="p-3.5">
                <p className="flex items-center gap-2">
                  <span className="badge">{lineById(peek.station.line).code}</span>
                  <span className="heading text-lg">{peek.station.name}</span>
                </p>
                <p className="mt-1.5 text-sm text-ink-2 leading-snug line-clamp-2">{pick(peek.station.desc)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouteMap;
