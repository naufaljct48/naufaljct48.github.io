import { Download, Linkedin } from "lucide-react";
import LedBoard from "./LedBoard";
import HeroDots from "./HeroDots";
import { LINKEDIN } from "../data/career";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative isolate overflow-hidden min-h-[100svh] flex flex-col pt-[5.5rem] sm:pt-32 pb-4 sm:pb-5 px-4">
      <HeroDots />
      <div className="max-w-page w-full mx-auto flex-1 flex flex-col">
        <div className="flex-1 grid md:grid-cols-[minmax(0,1fr)_auto] gap-10 md:gap-16 items-start md:items-center">
          <div className="min-w-0">
            {/* phones: the station board leads, full width, before the name */}
            <figure className="md:hidden relative w-full aspect-[16/11] rounded-[1.75rem] overflow-hidden bg-line-dimensi mb-6 shadow-[0_2px_4px_rgb(0_0_0/0.08),0_24px_44px_-26px_rgb(10_40_80/0.6)]">
              <img
                src="/images/naufal2.webp"
                alt="Naufal Aziz"
                width={431}
                height={579}
                className="absolute bottom-0 right-[4%] h-[118%] w-auto max-w-none"
              />
              <figcaption className="absolute left-3 bottom-3 flex items-center gap-2.5 rounded-2xl bg-ink text-on-ink pl-2.5 pr-4 py-2.5">
                <span className="badge" style={{ ["--line" as string]: "var(--line-dimensi)" }}>
                  DPS
                </span>
                <span className="leading-tight">
                  <span className="block heading text-lg">Tangerang</span>
                  <span className="block text-xs opacity-75">Indonesia</span>
                </span>
              </figcaption>
            </figure>
            <h1 className="display text-[clamp(3.25rem,13vw,6rem)]">Naufal Aziz</h1>
            <p className="mt-4 sm:mt-6 max-w-[36rem] text-[1.0625rem] sm:text-[1.375rem] leading-snug text-ink-2">{t("hero.description")}</p>

            <p className="mt-4 sm:mt-6 flex items-start gap-3 text-base sm:text-lg">
              <span className="badge shrink-0" style={{ ["--line" as string]: "var(--line-dimensi)" }}>
                DPS
              </span>
              <span>
                {t("hero.now")} <strong className="font-bold">Dimensi Software</strong>
                <span className="hidden sm:inline"> (PT Dimensi Pratama Sukses)</span>, {t("hero.nowRole")}
              </span>
            </p>

            <div className="mt-6 sm:mt-9 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-ink max-sm:h-11 max-sm:px-3.5 max-sm:gap-2 max-sm:text-[0.9rem]">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
                {t("hero.linkedin")}
              </a>
              <a href="/Resume.pdf" target="_blank" rel="noopener" className="btn btn-line max-sm:h-11 max-sm:px-3.5 max-sm:gap-2 max-sm:text-[0.9rem]">
                <Download className="w-5 h-5 max-sm:hidden" aria-hidden="true" />
                {t("hero.download")}
              </a>
              <span className="hidden sm:flex items-center gap-2 pl-1 text-sm text-ink-2">
                <span className="w-2.5 h-2.5 rounded-full bg-line-navitek" aria-hidden="true" />
                {t("hero.available")}
              </span>
            </div>
          </div>

          {/* station poster: the cutout portrait on the Dimensi line colour, name plate below */}
          <figure className="spot-edge hidden md:block relative w-[17rem] lg:w-[21rem] aspect-[4/5] rounded-[2rem] overflow-hidden bg-line-dimensi shadow-[0_2px_4px_rgb(0_0_0/0.08),0_30px_60px_-28px_rgb(10_40_80/0.6)]">
            <img
              src="/images/naufal2.webp"
              alt="Naufal Aziz"
              width={431}
              height={579}
              className="absolute inset-x-0 bottom-0 w-full h-auto scale-[1.12] origin-bottom"
            />
            <figcaption className="absolute left-3.5 right-3.5 bottom-3.5 flex items-center gap-3 rounded-2xl bg-ink text-on-ink pl-3 pr-4 py-3">
              <span className="badge" style={{ ["--line" as string]: "var(--line-dimensi)" }}>
                DPS
              </span>
              <span className="leading-tight">
                <span className="block heading text-xl">Tangerang</span>
                <span className="block text-xs opacity-75">Indonesia</span>
              </span>
            </figcaption>
          </figure>
        </div>

        {/* the in-car passenger display closes the first screen */}
        <LedBoard text={t("led.hero")} pitch={3} className="sm:hidden mt-6" />
        <LedBoard text={t("led.hero")} pitch={4} className="hidden sm:block mt-10" />
      </div>
    </section>
  );
};

export default Hero;
