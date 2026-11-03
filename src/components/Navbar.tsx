import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLocalStorage } from "react-use";
import { useLanguage } from "../context/LanguageContext";

const items = [
  { key: "nav.map", id: "map" },
  { key: "nav.lines", id: "lines" },
  { key: "nav.timetable", id: "about" },
  { key: "nav.contact", id: "contact" },
];

type Theme = "light" | "dark";

// A new key on purpose: the old site stored "darkMode", and light is now the default.
const THEME_KEY = "theme";

const Navbar = () => {
  const [theme, setTheme] = useLocalStorage<Theme>(THEME_KEY, "light");
  const isDark = theme === "dark";
  const { lang, setLang, t } = useLanguage();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#0D1014" : "#F8FAFB");
  }, [isDark]);

  // scrollspy: the section crossing 40% of the viewport owns the pill
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
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

  // Theme switch: the new theme grows as a circle out of the button (View Transitions);
  // browsers without it get a short colour cross-fade instead.
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = isDark ? "light" : "dark";
    const root = document.documentElement;
    const apply = () => {
      root.classList.toggle("dark", next === "dark");
      flushSync(() => setTheme(next));
    };
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };

    if (reduce || !doc.startViewTransition) {
      if (!reduce) {
        root.classList.add("theme-fade");
        window.setTimeout(() => root.classList.remove("theme-fade"), 450);
      }
      apply();
      return;
    }

    const box = e.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    doc.startViewTransition(apply).ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 700, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  };

  const iconBtn = "glass-btn inline-flex items-center justify-center w-10 h-10 rounded-full";

  return (
    <header className="fixed top-3 inset-x-0 z-50 px-3">
      <nav className="glass relative max-w-[62rem] mx-auto h-14 pl-2 pr-2 flex items-center justify-between gap-3 rounded-full" aria-label="Main">
        <a href="#home" className="flex items-center gap-2.5 shrink-0 rounded-full pr-2" aria-label="Naufal Aziz, home">
          <span className="w-10 h-10 rounded-full bg-ink text-on-ink grid place-items-center font-bold text-sm">NA</span>
          <span className="heading text-[1.05rem] hidden sm:inline">Naufal Aziz</span>
        </a>

        <ul className="hidden md:flex items-center gap-0.5">
          {items.map((item) => (
            <li key={item.key} className="relative">
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="glass-pill absolute inset-0 rounded-full"
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
                  aria-hidden="true"
                />
              )}
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={`relative z-10 block px-4 py-2 rounded-full font-semibold text-[0.95rem] transition-colors ${
                  active === item.id ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            aria-label={t("nav.lang")}
            className="glass-btn relative h-10 rounded-full flex items-center p-1 text-sm font-bold"
          >
            <span className={`relative z-10 w-9 text-center py-1 rounded-full transition-colors ${lang === "en" ? "text-on-ink" : "text-ink-2"}`}>EN</span>
            <span className={`relative z-10 w-9 text-center py-1 rounded-full transition-colors ${lang === "id" ? "text-on-ink" : "text-ink-2"}`}>ID</span>
            <span
              className={`absolute top-1 bottom-1 w-9 rounded-full bg-ink transition-transform duration-300 ease-out ${lang === "id" ? "translate-x-9" : ""}`}
              aria-hidden="true"
            />
          </button>
          <button type="button" onClick={toggleTheme} aria-label={t("nav.theme")} className={iconBtn}>
            <span className="relative w-[1.125rem] h-[1.125rem]">
              <Sun
                className={`absolute inset-0 w-full h-full transition-all duration-500 ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}
              />
              <Moon
                className={`absolute inset-0 w-full h-full transition-all duration-500 ${isDark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
              />
            </span>
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

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass md:hidden mt-2 max-w-[62rem] mx-auto rounded-[1.75rem] origin-top"
          >
            <ul className="px-5 py-4">
              {items.map((item, i) => (
                <li key={item.key} className="relative">
                  <a href={`#${item.id}`} onClick={() => setOpen(false)} className="flex items-center gap-4 py-3 heading text-2xl">
                    <span
                      className={`relative z-10 w-5 h-5 rounded-full border-4 border-ink shrink-0 ${active === item.id ? "bg-ink" : "bg-ground"}`}
                      aria-hidden="true"
                    />
                    {t(item.key)}
                  </a>
                  {i < items.length - 1 && <span className="absolute left-[0.5rem] top-[2.1rem] w-1 h-[2.6rem] bg-ink" aria-hidden="true" />}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
