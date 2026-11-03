import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLocalStorage } from "react-use";
import { useLanguage } from "../context/LanguageContext";

const items = [
  { key: "nav.map", href: "#map" },
  { key: "nav.lines", href: "#lines" },
  { key: "nav.timetable", href: "#about" },
  { key: "nav.contact", href: "#contact" },
];

const Navbar = () => {
  const [isDark, setIsDark] = useLocalStorage("darkMode", false);
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !!isDark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#0D1014" : "#F8FAFB");
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const iconBtn =
    "inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-rule hover:border-ink transition-colors";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-ground transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_var(--rule),0_8px_24px_-16px_rgb(0_0_0/0.25)]" : ""
      }`}
    >
      <nav className="max-w-page mx-auto h-16 px-4 flex items-center justify-between gap-4" aria-label="Main">
        <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="Naufal Aziz, home">
          <span className="w-10 h-10 rounded-full bg-ink text-on-ink grid place-items-center font-extrabold text-sm tracking-tight">
            NA
          </span>
          <span className="heading text-lg hidden sm:inline">Naufal Aziz</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {items.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="px-3.5 py-2 rounded-full font-semibold text-[0.975rem] hover:bg-surface transition-colors"
              >
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            aria-label={t("nav.lang")}
            className="h-10 rounded-full border-2 border-rule hover:border-ink transition-colors flex items-center p-1 text-sm font-bold"
          >
            <span className={`px-2.5 py-1 rounded-full ${lang === "en" ? "bg-ink text-on-ink" : "text-ink-2"}`}>EN</span>
            <span className={`px-2.5 py-1 rounded-full ${lang === "id" ? "bg-ink text-on-ink" : "text-ink-2"}`}>ID</span>
          </button>
          <button type="button" onClick={() => setIsDark(!isDark)} aria-label={t("nav.theme")} className={iconBtn}>
            {isDark ? <Sun className="w-[1.125rem] h-[1.125rem]" /> : <Moon className="w-[1.125rem] h-[1.125rem]" />}
          </button>
          <button
            type="button"
            className={`${iconBtn} md:hidden`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("nav.close") : t("nav.menu")}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-rule bg-ground">
          <ul className="max-w-page mx-auto px-4 py-3">
            {items.map((item, i) => (
              <li key={item.key} className="relative">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 py-3 heading text-2xl"
                >
                  <span
                    className="relative z-10 w-5 h-5 rounded-full border-4 border-ink bg-ground shrink-0"
                    aria-hidden="true"
                  />
                  {t(item.key)}
                </a>
                {i < items.length - 1 && (
                  <span className="absolute left-[0.5rem] top-[2.1rem] w-1 h-[2.6rem] bg-ink" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
