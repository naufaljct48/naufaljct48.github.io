import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ScrollToTopButton = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label={t("footer.top")}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-[5.75rem] right-5 sm:right-6 z-40 w-11 h-11 rounded-full grid place-items-center bg-ground text-ink border-2 border-ink shadow-[0_0_0_2px_var(--ground)] transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
