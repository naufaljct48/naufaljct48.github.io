import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { lines, stationsOn, type Line, type Station } from "../data/career";
import { useLanguage } from "../context/LanguageContext";
import TechChip from "./TechChip";

const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");

const Shot = ({ station }: { station: Station }) => {
  const { t } = useLanguage();
  const [i, setI] = useState(0);
  const images = station.images!;

  return (
    <figure className="w-full">
      <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-rule bg-surface shadow-[0_1px_2px_rgb(0_0_0/0.06),0_18px_40px_-28px_rgb(0_0_0/0.45)]">
        <img
          src={images[i]}
          alt={`${station.name} screenshot ${images.length > 1 ? i + 1 : ""}`.trim()}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {images.map((_, n) => (
            <button
              key={n}
              type="button"
              onClick={() => setI(n)}
              aria-pressed={n === i}
              aria-label={`${t("lines.shot")} ${n + 1}`}
              className="tnum w-8 h-8 rounded-full text-sm font-bold border-2 transition-colors"
              style={
                n === i
                  ? { background: "var(--line)", borderColor: "var(--line)", color: "var(--on-line)" }
                  : { borderColor: "var(--rule)", color: "var(--ink-2)" }
              }
            >
              {n + 1}
            </button>
          ))}
        </div>
      )}
    </figure>
  );
};

const Stop = ({ station, compact, current }: { station: Station; compact: boolean; current: boolean }) => {
  const { t, pick } = useLanguage();
  const hasShot = !!station.images?.length;

  const text = (
    <div className="min-w-0">
      <h4 className={`heading ${compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-[2.25rem]"}`}>{station.name}</h4>
      <p className={`mt-3 text-ink-2 leading-relaxed max-w-[62ch] ${compact ? "text-[0.975rem]" : "text-[1.0625rem]"}`}>
        {pick(station.desc)}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech">
        {station.tech.map((tech) => (
          <TechChip key={tech} label={tech} />
        ))}
      </ul>
      {station.link && (
        <a
          href={station.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 font-semibold underline decoration-2 hover:decoration-[3px]"
          style={{ textDecorationColor: "var(--line)" }}
        >
          {t("lines.visit")} {host(station.link)}
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>
      )}
      {station.stores && (
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {station.stores.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[0.6rem] transition-transform duration-200 hover:-translate-y-0.5"
              aria-label={`${station.name} · ${s.label}`}
            >
              {/* official store badges; Google's PNG carries its own padding */}
              <img src={s.icon} alt={s.label} className={s.icon.endsWith(".png") ? "h-[3.65rem] -m-[0.55rem]" : "h-10"} />
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div id={station.id} className={`strip-stop ${compact ? "pb-10" : "pb-16"}`}>
      <span className="strip-dot" data-current={current || undefined} aria-hidden="true" />
      {!hasShot ? (
        text
      ) : compact ? (
        <div className="grid sm:grid-cols-[minmax(0,1fr)_14rem] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-5 sm:gap-8 lg:gap-12 items-start [&>figure]:max-sm:order-first [&>figure]:lg:max-w-[22rem]">
          {text}
          <Shot station={station} />
        </div>
      ) : (
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 lg:gap-12 items-start">
          {text}
          <Shot station={station} />
        </div>
      )}
    </div>
  );
};

const LineBlock = ({ line }: { line: Line }) => {
  const { t, pick } = useLanguage();
  const running = line.to === null;
  const compact = line.id === "origin";

  const stops = stationsOn(line.id);

  return (
    <article id={`line-${line.id}`} className="mt-20 sm:mt-28" style={{ ["--line" as string]: `var(--line-${line.id})` }}>
      {/* platform sign, full bleed in the line colour */}
      <header className="platform px-4 py-8 sm:py-10">
        <div className="max-w-page mx-auto flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="roundel max-sm:!w-14 max-sm:!h-14 max-sm:!text-xl">{line.code}</span>
            <h3 className="display text-[clamp(2.5rem,6.5vw,5rem)]">{pick(line.name)}</h3>
          </div>
          <dl className="grid grid-cols-[auto_auto] gap-x-6 gap-y-1 text-[0.975rem] sm:text-base">
            <dt className="sr-only">{t("about.org")}</dt>
            <dd className="col-span-2 font-bold text-lg leading-snug">{line.org}</dd>
            <dt className="sr-only">{t("about.role")}</dt>
            <dd className="col-span-2">{pick(line.role)}</dd>
            <dd className="tnum font-semibold mt-2">{pick(line.period)}</dd>
            <dd className="tnum font-semibold mt-2">
              {stops.length} {t("lines.stations")}
              {line.id !== "origin" && <> · {running ? t("lines.running") : t("lines.ended")}</>}
            </dd>
          </dl>
        </div>
      </header>

      <div className="px-4 pt-10 sm:pt-12">
        <div className="max-w-page mx-auto strip" data-running={running || undefined} style={{ ["--strip-end" as string]: "0.3rem" }}>
          {stops.map((s, i) => (
            <Stop key={s.id} station={s} compact={compact} current={running && line.id !== "origin" && i === stops.length - 1} />
          ))}
          {!running && <div className="terminus" aria-hidden="true" />}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="lines" className="pt-20 sm:pt-28 pb-12 border-t border-rule">
      <div className="max-w-page mx-auto px-4">
        <h2 className="display text-[clamp(2.75rem,7vw,5.5rem)] max-w-[14ch]">{t("lines.title")}</h2>
        <p className="mt-5 max-w-[46rem] text-lg text-ink-2 leading-relaxed">{t("lines.subtitle")}</p>
      </div>
      {lines.map((line) => (
        <LineBlock key={line.id} line={line} />
      ))}
    </section>
  );
};

export default Projects;
