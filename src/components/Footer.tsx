import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import LedBoard from "./LedBoard";
import { LINKEDIN, GITHUB, EMAIL } from "../data/career";
import { useLanguage } from "../context/LanguageContext";

// Terminus: the lines still running bend into one track and arrive at "Your team";
// the lines that ended stop short on their terminus bars.
const Terminus = ({ label }: { label: string }) => {
  const MAIN = 96;
  const run = (y: number, color: string, bendAt: number, delay: number) => {
    const dy = MAIN - y;
    return (
      <path
        className="draw-path"
        pathLength={1}
        style={{ ["--d" as string]: `${delay}ms` }}
        d={`M-10 ${y} H${bendAt} L${bendAt + Math.abs(dy)} ${MAIN} H1060`}
        stroke={color}
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    );
  };
  const ended = (y: number, color: string, endX: number, delay: number) => (
    <g>
      <path className="draw-path" pathLength={1} style={{ ["--d" as string]: `${delay}ms` }} d={`M-10 ${y} H${endX}`} stroke={color} strokeWidth={9} strokeLinecap="round" fill="none" />
      <line className="draw-late" x1={endX} x2={endX} y1={y - 12} y2={y + 12} stroke={color} strokeWidth={9} strokeLinecap="round" />
    </g>
  );

  return (
    <svg data-reveal="draw" viewBox="0 0 1200 190" className="block w-full h-auto" aria-hidden="true">
      {ended(162, "var(--night-web3)", 430, 0)}
      {ended(130, "var(--night-dharmais)", 640, 120)}
      {run(8, "var(--night-security)", 700, 180)}
      {run(32, "var(--night-dimensi)", 780, 240)}
      {run(64, "var(--night-navitek)", 820, 360)}
      <path className="draw-path" pathLength={1} style={{ ["--d" as string]: "60ms" }} d={`M-10 ${MAIN} H1060`} stroke="#eef0f2" strokeWidth={9} strokeLinecap="round" fill="none" />
      <g className="draw-late">
        <rect x={1040} y={MAIN - 26} width={120} height={52} rx={26} fill="var(--night)" stroke="#eef0f2" strokeWidth={7} />
        <text x={1100} y={MAIN + 62} textAnchor="middle" fill="#eef0f2" fontSize="22" fontWeight="700">
          {label}
        </text>
      </g>
    </svg>
  );
};

const Footer = () => {
  const { t } = useLanguage();

  const rows = [
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/naufal-aziz", href: LINKEDIN, external: true },
    { icon: Mail, label: t("contact.email"), value: EMAIL, href: `mailto:${EMAIL}`, external: false },
    { icon: Download, label: t("contact.cv"), value: "Resume.pdf", href: "/Resume.pdf", external: true },
    { icon: Github, label: "GitHub", value: "github.com/naufaljct48", href: GITHUB, external: true },
  ];

  return (
    <footer id="contact" className="night relative overflow-hidden">
      <div className="pt-16 sm:pt-24">
        <Terminus label={t("contact.station")} />
      </div>

      <div className="px-4">
        <div className="max-w-page mx-auto pt-14 sm:pt-20 grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 lg:gap-16 items-end">
          <div>
            <h2 data-reveal="wipe" className="display text-[clamp(3.25rem,9vw,6rem)] max-w-[12ch]">{t("contact.title")}</h2>
            <p className="mt-6 text-lg sm:text-xl text-[#a9b0b9] max-w-[34rem] leading-relaxed">{t("contact.body")}</p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-9 text-[#0e1014] bg-[linear-gradient(180deg,#ffffff,#e4e7ea)] shadow-[inset_0_1px_0_rgb(255_255_255),inset_0_-1px_0_rgb(0_0_0/0.12),0_1px_2px_rgb(0_0_0/0.3),0_14px_30px_-12px_rgb(0_0_0/0.8)] hover:-translate-y-px"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
              {t("hero.linkedin")}
            </a>
          </div>

          {/* contact as a departure board */}
          <div>
            <LedBoard text={t("contact.end")} pitch={3} className="mb-4" />
            <ul className="spot-edge rounded-2xl border border-white/10 overflow-hidden">
              {rows.map((r) => (
                <li key={r.label} className="border-t border-white/10 first:border-t-0">
                  <a
                    href={r.href}
                    {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-5 py-4 transition-colors hover:bg-white/[0.04]"
                  >
                    <span className="w-9 h-9 rounded-full grid place-items-center bg-white/[0.07]">
                      <r.icon className="w-[1.05rem] h-[1.05rem]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.12em] font-bold text-[#ffb21e]">{r.label}</span>
                      <span className="block font-semibold truncate group-hover:underline underline-offset-4">{r.value}</span>
                    </span>
                    <ArrowUpRight
                      className="w-5 h-5 text-[#a9b0b9] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#eef0f2]"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-page mx-auto mt-16 sm:mt-24 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-sm text-[#a9b0b9] sm:pr-20">
          <p className="tnum">© {new Date().getFullYear()} Naufal Aziz Albaaqie · Tangerang, Indonesia</p>
          <p>{t("footer.built")}</p>
        </div>
      </div>

      {/* oversized wordmark, cut by the bottom edge like a platform name painted on the wall */}
      <p
        aria-hidden="true"
        className="display select-none whitespace-nowrap text-center leading-[0.8] text-[clamp(5rem,20.5vw,22rem)] mt-6 -mb-[0.16em] text-[#eef0f2]"
      >
        Naufal Aziz
      </p>
    </footer>
  );
};

export default Footer;
