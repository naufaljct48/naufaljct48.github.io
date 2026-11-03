import { createContext, useContext, useEffect, ReactNode } from "react";
import { useLocalStorage } from "react-use";
import type { Lang, Text } from "../data/career";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  pick: (text: Text) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.map": "Map",
    "nav.lines": "Lines",
    "nav.timetable": "Timetable",
    "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "nav.close": "Close menu",
    "nav.theme": "Switch light or dark",
    "nav.lang": "Bahasa Indonesia",

    "hero.description": "Full-Stack Developer shipping production SaaS end to end — web, mobile, hardware integration, payments, and AI.",
    "hero.now": "Now at",
    "hero.nowRole": "leading Dimensi HRIS",
    "hero.linkedin": "Connect on LinkedIn",
    "hero.download": "Download CV",
    "hero.available": "Available for work",
    "hero.station": "Tangerang, Indonesia",

    "led.hero": "NOW: DIMENSI SOFTWARE  >  NEXT STATION: YOUR TEAM",
    "led.at": "NOW:",
    "led.next": "NEXT:",
    "led.end": "END OF LINE",

    "map.title": "The route so far",
    "map.label": "Career route map, 2019 to now. Each coloured line is a job, each station a product.",
    "map.now": "You are here",
    "map.hint": "Hover or focus a line to isolate it. Every station jumps to its product.",
    "map.swipe": "Swipe the map",

    "lines.title": "What I've built, line by line",
    "lines.subtitle": "Each line is a place I worked; each stop is something that shipped. Ended lines close with a terminus bar.",
    "lines.stations": "stations",
    "lines.running": "Running",
    "lines.ended": "Ended",
    "lines.visit": "Visit",
    "lines.shot": "Show screenshot",

    "about.title": "Timetable",
    "about.bio": "Currently leading Dimensi HRIS at Dimensi Software (PT Dimensi Pratama Sukses) — a multi-tenant HR & payroll SaaS with a Flutter mobile app, a Go bridge for attendance machines, and Airis, an in-app AI agent. Previously built an EMR platform with 20+ modules used by 500+ healthcare users at RS Kanker Dharmais and advanced ATiDar into a BPOM/CPOB-certified blood transfusion application. On the side I run Navitek, where I built Clippeak (400+ users in 3 months) and Cuanten. I also do independent security research on authorized bug bounty programs, focused on access control and APIs.",
    "about.line": "Line",
    "about.role": "Role",
    "about.org": "Company",
    "about.from": "From",
    "about.to": "Until",
    "about.certs": "Certifications",
    "about.legend": "Map legend: skills",

    "contact.title": "Next station: your team.",
    "contact.body": "Hiring, or have a product to build? LinkedIn is the fastest way to reach me.",
    "contact.email": "Email",
    "contact.station": "Your team",
    "contact.cv": "Resume (PDF)",
    "contact.end": "END OF LINE  ·  THANKS FOR RIDING",
    "footer.built": "Built with React and Tailwind. Set in Bonbance and BDO Grotesk.",
    "footer.top": "Back to top",

  },
  id: {
    "nav.map": "Peta",
    "nav.lines": "Jalur",
    "nav.timetable": "Jadwal",
    "nav.contact": "Kontak",
    "nav.menu": "Buka menu",
    "nav.close": "Tutup menu",
    "nav.theme": "Ganti terang atau gelap",
    "nav.lang": "English",

    "hero.description": "Full-Stack Developer yang membangun SaaS produksi dari ujung ke ujung — web, mobile, integrasi hardware, pembayaran, dan AI.",
    "hero.now": "Sekarang di",
    "hero.nowRole": "memimpin Dimensi HRIS",
    "hero.linkedin": "Terhubung di LinkedIn",
    "hero.download": "Unduh CV",
    "hero.available": "Tersedia untuk bekerja",
    "hero.station": "Tangerang, Indonesia",

    "led.hero": "SEKARANG: DIMENSI SOFTWARE  >  BERIKUTNYA: TIM ANDA",
    "led.at": "SEKARANG:",
    "led.next": "BERIKUTNYA:",
    "led.end": "STASIUN AKHIR",

    "map.title": "Rute sejauh ini",
    "map.label": "Peta jalur karier, 2019 sampai sekarang. Tiap garis berwarna adalah satu pekerjaan, tiap stasiun satu produk.",
    "map.now": "Anda di sini",
    "map.hint": "Arahkan atau fokus ke satu jalur untuk menyorotnya. Tiap stasiun mengarah ke produknya.",
    "map.swipe": "Geser peta",

    "lines.title": "Yang sudah saya bangun, per jalur",
    "lines.subtitle": "Tiap jalur adalah tempat saya bekerja; tiap pemberhentian adalah sesuatu yang sudah rilis. Jalur yang selesai ditutup dengan palang terminus.",
    "lines.stations": "stasiun",
    "lines.running": "Beroperasi",
    "lines.ended": "Berakhir",
    "lines.visit": "Kunjungi",
    "lines.shot": "Tampilkan tangkapan layar",

    "about.title": "Jadwal",
    "about.bio": "Saat ini memimpin pengembangan Dimensi HRIS di Dimensi Software (PT Dimensi Pratama Sukses) — SaaS HR & payroll multi-tenant dengan aplikasi mobile Flutter, bridge Go untuk mesin absensi, dan Airis, AI agent di dalam aplikasi. Sebelumnya membangun platform EMR dengan 20+ modul yang dipakai 500+ tenaga kesehatan di RS Kanker Dharmais dan mengembangkan ATiDar menjadi aplikasi transfusi darah bersertifikat BPOM/CPOB. Di luar kantor saya menjalankan Navitek, tempat saya membangun Clippeak (400+ pengguna dalam 3 bulan) dan Cuanten. Saya juga melakukan riset security independen di program bug bounty resmi, dengan fokus access control dan API.",
    "about.line": "Jalur",
    "about.role": "Peran",
    "about.org": "Perusahaan",
    "about.from": "Mulai",
    "about.to": "Sampai",
    "about.certs": "Sertifikasi",
    "about.legend": "Legenda peta: keahlian",

    "contact.title": "Stasiun berikutnya: tim Anda.",
    "contact.body": "Sedang merekrut, atau punya produk untuk dibangun? Cara tercepat menghubungi saya lewat LinkedIn.",
    "contact.email": "Email",
    "contact.station": "Tim Anda",
    "contact.cv": "CV (PDF)",
    "contact.end": "STASIUN AKHIR  ·  TERIMA KASIH SUDAH NAIK",
    "footer.built": "Dibangun dengan React dan Tailwind. Huruf Bonbance dan BDO Grotesk.",
    "footer.top": "Kembali ke atas",

  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [stored, setLang] = useLocalStorage<Lang>("lang", "en");
  const lang = stored || "en";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => translations[lang][key] || key;
  const pick = (text: Text) => text[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLang as (lang: Lang) => void, t, pick }}>
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
