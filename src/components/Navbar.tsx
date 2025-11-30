import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Languages } from "lucide-react";
import { useLocalStorage } from "react-use";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isDark, setIsDark] = useLocalStorage("darkMode", true);
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.about", href: "#about" },
    { key: "nav.projects", href: "#projects" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`max-w-xl mx-auto flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 ${
            scrolled 
              ? "bg-white/90 dark:bg-dark-200/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg" 
              : "bg-white/70 dark:bg-dark-200/70 backdrop-blur-lg border border-gray-200/50 dark:border-white/5"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="font-bold text-lg text-accent shrink-0">
            NA
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100 dark:bg-white/5 rounded-xl p-1">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 transition-all"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Right buttons - always visible */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "id" : "en")}
              className="flex items-center gap-1 px-2 py-2 rounded-lg bg-gray-100 dark:bg-white/10 text-sm font-medium"
            >
              <Languages className="w-4 h-4" />
              <span className="uppercase text-xs">{lang}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-white/10"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-gray-600" />
              )}
            </button>

            {/* Hamburger - mobile only */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 bg-white dark:bg-dark-200 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors font-medium"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
