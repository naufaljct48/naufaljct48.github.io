import { useState } from "react";
import RouteMap from "./RouteMap";
import { lines, type LineId } from "../data/career";
import { useLanguage } from "../context/LanguageContext";

const RouteSection = () => {
  const { t, pick } = useLanguage();
  const [solo, setSolo] = useState<LineId | null>(null);

  return (
    <section id="map" className="py-20 sm:py-24 px-4 border-t border-rule">
      <div className="max-w-page mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 mb-8">
          <h2 className="display text-[clamp(2.75rem,7vw,5.5rem)]">{t("map.title")}</h2>
          <p className="hidden sm:block text-ink-2 max-w-[26rem] text-right">{t("map.hint")}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-4" role="list" aria-label={t("nav.lines")}>
          {lines.map((l) => (
            <a
              key={l.id}
              role="listitem"
              href={`#line-${l.id}`}
              className="group inline-flex items-center gap-2 rounded-full pr-3 transition-opacity duration-200"
              style={{ opacity: solo && solo !== l.id ? 0.35 : 1 }}
              onMouseEnter={() => setSolo(l.id)}
              onMouseLeave={() => setSolo(null)}
              onFocus={() => setSolo(l.id)}
              onBlur={() => setSolo(null)}
            >
              <span className="badge" style={{ ["--line" as string]: `var(--line-${l.id})` }}>
                {l.code}
              </span>
              <span className="text-sm font-semibold group-hover:underline">{pick(l.name)}</span>
            </a>
          ))}
        </div>

        <RouteMap solo={solo} setSolo={setSolo} />
      </div>
    </section>
  );
};

export default RouteSection;
