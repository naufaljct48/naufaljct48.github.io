import { ArrowRight } from "lucide-react";
import { lineById, timetable, certifications, skills } from "../data/career";
import { useLanguage } from "../context/LanguageContext";
import TechChip from "./TechChip";

const About = () => {
  const { t, pick } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-28 px-4 bg-surface">
      <div className="max-w-page mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16">
          <div className="min-w-0">
            <h2 data-reveal="wipe" className="display text-[clamp(2.75rem,7vw,5.5rem)]">{t("about.title")}</h2>
            <p className="mt-6 text-lg leading-relaxed max-w-[60ch]">{t("about.bio")}</p>
          </div>

          <div className="lg:pt-4 min-w-0">
            {/* departure board */}
            <div className="board">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-xs uppercase tracking-[0.12em] amber">
                    <th scope="col" className="pt-5 pb-3 pl-4 sm:pl-5 pr-3 font-bold w-14 sm:w-16">{t("about.line")}</th>
                    <th scope="col" className="pt-5 pb-3 pr-4 font-bold">{t("about.role")}</th>
                    <th scope="col" className="hidden sm:table-cell pt-5 pb-3 pr-4 font-bold text-right">{t("about.from")}</th>
                    <th scope="col" className="hidden sm:table-cell pt-5 pb-3 pr-5 font-bold text-right">{t("about.to")}</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable.map((row, ri) => {
                    const line = lineById(row.line);
                    const running = row.to.en === "now";
                    const pill =
                      line.id === "origin"
                        ? { ["--line" as string]: "#e9ecef", color: "#0f1216" }
                        : { ["--line" as string]: `var(--line-${line.id})` };
                    return (
                      <tr key={row.org + row.from} data-reveal="flap" style={{ ["--i" as string]: ri }} className="border-t border-white/10 align-top">
                        <td className="py-4 pl-4 sm:pl-5 pr-3">
                          <span className="badge" style={pill}>
                            {line.code}
                          </span>
                        </td>
                        <td className="py-4 pr-4 sm:pr-4">
                          <span className="block font-bold text-[1.0625rem] leading-snug">{row.org}</span>
                          <span className="block text-[#a9b0b9]">{pick(row.role)}</span>
                          {/* phones: the From/Until columns fold under the role */}
                          <span className="sm:hidden mt-1.5 flex items-center gap-2 tnum text-sm font-bold">
                            <span>{row.from}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#a9b0b9]" aria-hidden="true" />
                            <span className={running ? "amber" : "text-[#a9b0b9]"}>{pick(row.to)}</span>
                          </span>
                        </td>
                        <td className="hidden sm:table-cell py-4 pr-4 text-right tnum font-semibold whitespace-nowrap">{row.from}</td>
                        <td className={`hidden sm:table-cell py-4 pr-5 text-right tnum whitespace-nowrap font-bold ${running ? "amber" : "text-[#a9b0b9]"}`}>
                          {running && <span className="inline-block w-2 h-2 rounded-full bg-[#ffb21e] mr-2 align-middle" aria-hidden="true" />}
                          {pick(row.to)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <h3 className="heading text-2xl mt-12">{t("about.certs")}</h3>
            <ul className="mt-4">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-6 py-3 border-b border-rule">
                  <span>
                    <span className="font-semibold">{c.name}</span>
                    <span className="text-ink-2"> · {c.issuer}</span>
                  </span>
                  <span className="tnum font-semibold">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="heading text-3xl sm:text-4xl mt-20">{t("about.legend")}</h3>
        <dl className="mt-8 grid lg:grid-cols-2 gap-x-12">
          {skills.map((s) => (
            <div key={s.group.en} className="grid sm:grid-cols-[8.5rem_minmax(0,1fr)] gap-x-4 gap-y-2.5 py-4 border-t-2 border-ink min-w-0">
              <dt className="font-bold">{pick(s.group)}</dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <TechChip key={item} label={item} />
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
