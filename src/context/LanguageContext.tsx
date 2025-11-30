import React, { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "react-use";

type Lang = "en" | "id";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.available": "Available for work",
    "hero.description": "Full-Stack Developer with expertise in AI Integration, Blockchain, and Enterprise Systems.",
    "hero.download": "Download CV",
    "hero.viewProjects": "View Projects",
    "hero.currentWork": "Currently working at",
    "hero.connect": "Connect with me",

    // About
    "about.title": "About",
    "about.me": "Me",
    "about.description": "Full-Stack Developer with expertise in AI Integration, Blockchain, and Enterprise Systems.",
    "about.role": "Full-Stack Developer",
    "about.bio": "Experienced in full-stack development using JavaScript, TypeScript, PHP, and Python. Proven track record at RS Kanker Dharmais, reducing data processing time by 98% through automation. Skilled in designing SaaS platforms (HRIS) and decentralized applications.",
    "about.experience": "Experience",
    "about.tools": "Tools & DevOps",

    // Projects
    "projects.title": "My",
    "projects.highlight": "Projects",
    "projects.subtitle": "Some of the projects I have worked on",
    "projects.all": "All Projects",
    "projects.featured": "Featured",
    "projects.technologies": "Technologies",
    "projects.view": "View Project",

    // Footer
    "footer.description": "Full-Stack Developer with passion in AI, Blockchain, and Enterprise Systems.",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.madeWith": "Made with",
    "footer.by": "by Naufal",
    "footer.builtWith": "Built with React + TailwindCSS",
  },
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.projects": "Proyek",

    // Hero
    "hero.greeting": "Halo, saya",
    "hero.available": "Tersedia untuk bekerja",
    "hero.description": "Full-Stack Developer dengan keahlian di AI Integration, Blockchain, dan Enterprise Systems.",
    "hero.download": "Unduh CV",
    "hero.viewProjects": "Lihat Proyek",
    "hero.currentWork": "Saat ini bekerja di",
    "hero.connect": "Hubungi saya",

    // About
    "about.title": "Tentang",
    "about.me": "Saya",
    "about.description": "Full-Stack Developer dengan keahlian di AI Integration, Blockchain, dan Enterprise Systems.",
    "about.role": "Full-Stack Developer",
    "about.bio": "Berpengalaman dalam pengembangan full-stack menggunakan JavaScript, TypeScript, PHP, dan Python. Rekam jejak terbukti di RS Kanker Dharmais, mengurangi waktu pemrosesan data hingga 98% melalui otomasi. Terampil dalam merancang platform SaaS (HRIS) dan aplikasi terdesentralisasi.",
    "about.experience": "Pengalaman",
    "about.tools": "Tools & DevOps",

    // Projects
    "projects.title": "Proyek",
    "projects.highlight": "Saya",
    "projects.subtitle": "Beberapa proyek yang sudah saya kerjakan",
    "projects.all": "Semua Proyek",
    "projects.featured": "Unggulan",
    "projects.technologies": "Teknologi",
    "projects.view": "Lihat Proyek",

    // Footer
    "footer.description": "Full-Stack Developer dengan passion di AI, Blockchain, dan Enterprise Systems.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.connect": "Hubungi",
    "footer.madeWith": "Dibuat dengan",
    "footer.by": "oleh Naufal",
    "footer.builtWith": "Dibangun dengan React + TailwindCSS",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useLocalStorage<Lang>("lang", "en");

  const t = (key: string): string => {
    return translations[lang || "en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang: lang || "en", setLang: setLang as (lang: Lang) => void, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
