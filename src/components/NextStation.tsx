import { useEffect, useState } from "react";
import LedBoard from "./LedBoard";
import { lineById, stations } from "../data/career";
import { useLanguage } from "../context/LanguageContext";

// The in-car display follows you down the Lines section: current stop and the next one.
const NextStation = () => {
  const { t, pick } = useLanguage();
  const [current, setCurrent] = useState<string | null>(null);
  const [inLines, setInLines] = useState(false);

  useEffect(() => {
    const section = document.getElementById("lines");
    if (!section) return;
    const onScroll = () => {
      const r = section.getBoundingClientRect();
      const line = window.innerHeight * 0.3;
      setInLines(r.top < line && r.bottom > line);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const stopIo = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setCurrent(hit.target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    stations.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) stopIo.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      stopIo.disconnect();
    };
  }, []);

  const i = stations.findIndex((s) => s.id === current);
  const here = stations[i];
  const next = stations[i + 1]?.line === here?.line ? stations[i + 1] : null;
  const line = here ? lineById(here.line) : null;
  const tail = next ? `  ›  ${t("led.next")} ${next.name.toUpperCase()}` : line?.to !== null ? `  ›  ${t("led.end")}` : "";
  const text = here && line ? `${pick(line.name).toUpperCase()}  ›  ${t("led.at")} ${here.name.toUpperCase()}${tail}` : "";
  const show = inLines && !!here;

  return (
    <div
      aria-hidden={!show}
      className={`fixed top-[4.6rem] inset-x-0 z-40 px-4 pt-2 transition-all duration-300 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
      }`}
    >
      <div className="max-w-page mx-auto">{text && <LedBoard text={text} pitch={3} />}</div>
    </div>
  );
};

export default NextStation;
