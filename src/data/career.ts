export type Lang = "en" | "id";
export type Text = Record<Lang, string>;
export type LineId = "dimensi" | "navitek" | "security" | "dharmais" | "web3" | "origin";

export interface Line {
  id: LineId;
  code: string;
  name: Text;
  org: string;
  role: Text;
  from: number; // decimal year, drives the route map
  to: number | null; // null = still running
  period: Text;
}

export interface Station {
  id: string;
  line: LineId;
  name: string;
  short?: string; // label on the route map when the name is long
  desc: Text;
  tech: string[];
  images?: string[];
  link?: string;
  stores?: { label: string; url: string; icon: string }[];
  onMap?: boolean; // default true
}

export const LINKEDIN = "https://linkedin.com/in/naufal-aziz";
export const GITHUB = "https://github.com/naufaljct48";
export const EMAIL = "naufaljct48@gmail.com";

export const lines: Line[] = [
  {
    id: "dimensi",
    code: "DPS",
    name: { en: "Dimensi Line", id: "Lin Dimensi" },
    org: "Dimensi Software · PT Dimensi Pratama Sukses",
    role: { en: "Full-Stack Developer · lead of Dimensi HRIS", id: "Full-Stack Developer · lead Dimensi HRIS" },
    from: 2025 + 7 / 12,
    to: null,
    period: { en: "Aug 2025 – now", id: "Agu 2025 – sekarang" },
  },
  {
    id: "navitek",
    code: "NVK",
    name: { en: "Navitek Line", id: "Lin Navitek" },
    org: "Navitek (Navigasi Teknologi Nusantara)",
    role: { en: "Founder & Product Engineer · part-time", id: "Founder & Product Engineer · paruh waktu" },
    from: 2026,
    to: null,
    period: { en: "Jan 2026 – now", id: "Jan 2026 – sekarang" },
  },
  {
    id: "security",
    code: "SEC",
    name: { en: "Security Line", id: "Lin Security" },
    org: "Independent · Bugcrowd · HackerOne · Intigriti · YesWeHack",
    role: { en: "Security researcher · authorized bug bounty", id: "Security researcher · bug bounty resmi" },
    from: 2025,
    to: null,
    period: { en: "2025 – now", id: "2025 – sekarang" },
  },
  {
    id: "dharmais",
    code: "DMS",
    name: { en: "Dharmais Line", id: "Lin Dharmais" },
    org: "RS Kanker Dharmais (National Cancer Center)",
    role: { en: "Full-Stack Developer · on-site", id: "Full-Stack Developer · on-site" },
    from: 2024,
    to: 2026 + 5 / 12,
    period: { en: "Jan 2024 – Jun 2026", id: "Jan 2024 – Jun 2026" },
  },
  {
    id: "web3",
    code: "W3",
    name: { en: "Web3 Line", id: "Lin Web3" },
    org: "Enclavium (DAO) · DreamsHive",
    role: { en: "Blockchain & Full-Stack Developer · remote", id: "Blockchain & Full-Stack Developer · remote" },
    from: 2024 + 9 / 12,
    to: 2025 + 10 / 12,
    period: { en: "Oct 2024 – Nov 2025", id: "Okt 2024 – Nov 2025" },
  },
  {
    id: "origin",
    code: "UR",
    name: { en: "Origin Line", id: "Lin Asal" },
    org: "Raharja University · earlier & side work",
    role: { en: "B.Sc. Information Systems, GPA 3.70/4.00", id: "S1 Sistem Informasi, IPK 3,70/4,00" },
    from: 2019,
    to: null,
    period: { en: "2019 – 2023, then side projects", id: "2019 – 2023, lalu proyek sampingan" },
  },
];

export const stations: Station[] = [
  // Dimensi
  {
    id: "dimensi-hris",
    line: "dimensi",
    name: "Dimensi HRIS",
    desc: {
      en: "All-in-one HR & payroll SaaS for Indonesian companies, rebuilt from legacy PHP onto Laravel 13 + Filament as a multi-tenant platform: attendance, shift and rolling rosters, leave, overtime, and payroll with PPh21 (TER & Article 17), BPJS and DJP-compliant SPT export. 2,200+ commits since June 2026, with the mobile API kept backward-compatible through the migration.",
      id: "SaaS HR & payroll lengkap untuk perusahaan Indonesia, dibangun ulang dari PHP lama ke Laravel 13 + Filament sebagai platform multi-tenant: absensi, shift dan roster bergilir, cuti, lembur, dan payroll dengan PPh21 (TER & Pasal 17), BPJS, serta ekspor SPT sesuai DJP. 2.200+ commit sejak Juni 2026, dengan API mobile tetap kompatibel selama migrasi.",
    },
    tech: ["Laravel 13", "Filament", "PHP 8.3", "MySQL", "DOKU"],
    images: ["/images/dimensi-hris.webp"],
    link: "https://dimensi.id",
  },
  {
    id: "dimensi-mobile",
    line: "dimensi",
    name: "Dimensi HRIS Mobile",
    short: "HRIS Mobile",
    desc: {
      en: "Flutter app on Google Play and the App Store: face-recognition attendance with on-device liveness checks, GPS geofencing, approvals, schedules, and employee self-service.",
      id: "Aplikasi Flutter di Google Play dan App Store: absen wajah dengan cek liveness di perangkat, geofencing GPS, persetujuan, jadwal, dan layanan mandiri karyawan.",
    },
    tech: ["Flutter", "Dart", "Face Recognition", "GPS Geofencing"],
    images: ["/images/dimensi-mobile1.webp", "/images/dimensi-mobile2.webp"],
    stores: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.dimensi.hris.mobile&hl=id", icon: "/badges/google-play.png" },
      { label: "App Store", url: "https://apps.apple.com/id/app/dimensi-hris/id6761766234?l=id", icon: "/badges/app-store-black.svg" },
    ],
  },
  {
    id: "kiosk-bridge",
    line: "dimensi",
    name: "Dimensi Kiosk Bridge",
    short: "Kiosk Bridge",
    desc: {
      en: "A central multi-tenant WebSocket-to-REST bridge in Go for face, fingerprint and card attendance machines, live since Aug 2026. Clients type a domain into the machine; the tenant is resolved from the device serial. Punches are acknowledged only after Dimensi accepts them, and the server can push clock sync, roster pull, log backfill, face enrolment and live QR decisions.",
      id: "Bridge WebSocket-ke-REST multi-tenant di Go untuk mesin absensi wajah, sidik jari, dan kartu, live sejak Agu 2026. Klien cukup ketik domain di mesin; tenant dikenali dari serial perangkat. Data absen baru di-ack setelah Dimensi menerimanya, dan server bisa mengirim sinkron jam, tarik roster, backfill log, pendaftaran wajah, dan keputusan scan QR real-time.",
    },
    tech: ["Go", "WebSocket", "REST", "AiFace devices"],
  },
  {
    id: "airis",
    line: "dimensi",
    name: "Airis",
    desc: {
      en: "An in-app AI agent (Claude) with 17 tools that read attendance, payroll, leave and request data within the user's role, search the help center, and draft import files. A number guard holds back any figure not traceable to tool data, and a 172-question eval suite tests it against the real model.",
      id: "AI agent di dalam aplikasi (Claude) dengan 17 tool yang membaca data absensi, payroll, cuti, dan pengajuan sesuai peran pengguna, mencari di pusat bantuan, dan menyiapkan file impor. Number guard menahan angka yang tidak bisa dilacak ke data tool, dan 172 pertanyaan eval mengujinya ke model asli.",
    },
    tech: ["Claude API", "Tool calling", "LLM evals", "Laravel"],
  },
  {
    id: "dimensi-help",
    line: "dimensi",
    name: "Dimensi Help Center",
    short: "Help Center",
    desc: {
      en: "help.dimensi.id: step-by-step guides, video tutorials, a 16-step setup path, release notes and support tickets for Dimensi HRIS.",
      id: "help.dimensi.id: panduan langkah demi langkah, video tutorial, alur setup 16 langkah, catatan rilis, dan tiket bantuan untuk Dimensi HRIS.",
    },
    tech: ["Laravel", "Livewire", "Tailwind CSS"],
    images: ["/images/dimensi-help.webp"],
    link: "https://help.dimensi.id",
  },
  // Navitek
  {
    id: "clippeak",
    line: "navitek",
    name: "Clippeak",
    desc: {
      en: "AI YouTube clipper for creators: finds the most viral moments in long videos, auto-crops them for TikTok, Reels and Shorts, and adds subtitles. From zero to 400+ registered users within 3 months.",
      id: "AI pemotong video YouTube untuk kreator: mencari momen paling viral di video panjang, crop otomatis untuk TikTok, Reels, dan Shorts, lalu menambah subtitle. Dari nol ke 400+ pengguna terdaftar dalam 3 bulan.",
    },
    tech: ["Next.js", "Prisma", "Python", "FastAPI", "faster-whisper", "OpenCV"],
    images: ["/images/clippeak.webp"],
    link: "https://clippeak.navitek.id",
  },
  {
    id: "cuanten",
    line: "navitek",
    name: "Cuanten",
    desc: {
      en: "AI content SaaS for Indonesian small businesses: turns a link or idea into carousels and short videos, schedules a month of posts automatically, takes QRIS payments, and exposes an MCP server so Claude and ChatGPT can create content directly.",
      id: "SaaS konten AI untuk UMKM Indonesia: mengubah link atau ide jadi carousel dan video pendek, menjadwalkan postingan sebulan otomatis, menerima pembayaran QRIS, dan punya MCP server supaya Claude dan ChatGPT bisa membuat konten langsung.",
    },
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Claude API", "MCP"],
    images: ["/images/cuanten.webp"],
    link: "https://cuanten.com",
  },
  // Dharmais
  {
    id: "emr",
    line: "dharmais",
    name: "EMR Platform",
    short: "EMR",
    desc: {
      en: "An enterprise electronic medical record application with 20+ modules used by 500+ healthcare users, including doctors and nurses, covering clinical administration, patient data and internal service workflows.",
      id: "Aplikasi rekam medis elektronik skala enterprise dengan 20+ modul yang dipakai 500+ tenaga kesehatan, termasuk dokter dan perawat, mencakup administrasi klinis, data pasien, dan alur layanan internal.",
    },
    tech: ["PHP", "CodeIgniter"],
  },
  {
    id: "atidar",
    line: "dharmais",
    name: "ATiDar",
    desc: {
      en: "Grew the Blood Management Unit's system from an early build into a BPOM/CPOB-certified blood transfusion workflow application, with machine-to-app integration for transfusion operations and inventory tracking.",
      id: "Mengembangkan sistem Unit Pengelolaan Darah dari tahap awal menjadi aplikasi alur transfusi darah bersertifikat BPOM/CPOB, dengan integrasi mesin ke aplikasi untuk operasional transfusi dan pelacakan stok.",
    },
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap 5"],
    images: ["/images/utdreg.webp", "/images/atidar.webp"],
  },
  {
    id: "ais",
    line: "dharmais",
    name: "AIS · Hospital assistant",
    short: "AIS",
    desc: {
      en: "An LLM-based assistant that gives medical staff knowledge access, workflow guidance and diagnosis-related information retrieval, built on retrieval-augmented generation.",
      id: "Asisten berbasis LLM yang memberi tenaga medis akses pengetahuan, panduan alur kerja, dan pencarian informasi terkait diagnosis, dibangun dengan retrieval-augmented generation.",
    },
    tech: ["React", "TypeScript", "Gemini API", "ChromaDB", "RAG"],
    images: ["/images/ais.webp"],
  },
  {
    id: "ais-kiosk",
    line: "dharmais",
    name: "AIS Kiosk",
    desc: {
      en: "A 3D voice-enabled AI assistant for the hospital kiosk, built with Three.js and the Gemini Live API with real-time lip-sync.",
      id: "Asisten AI 3D dengan suara untuk kiosk rumah sakit, dibangun dengan Three.js dan Gemini Live API dengan lip-sync real-time.",
    },
    tech: ["React", "Three.js", "Gemini Live API", "WebGL"],
    images: ["/images/ais1.webp", "/images/ais2.webp"],
  },
  {
    id: "sikevin",
    line: "dharmais",
    name: "SiKevin",
    desc: {
      en: "A financial and patient verification system that cut monthly service data retrieval from 30 minutes to 30 seconds.",
      id: "Sistem verifikasi keuangan dan pasien yang memangkas pengambilan data layanan bulanan dari 30 menit jadi 30 detik.",
    },
    tech: ["PHP", "Laravel", "Bootstrap 5"],
    images: ["/images/sikevin.webp"],
  },
  {
    id: "cendana",
    line: "dharmais",
    name: "Dharmais Cendana",
    short: "Cendana",
    desc: {
      en: "A mobile-first digital health app with online appointments and medical record access.",
      id: "Aplikasi kesehatan digital mobile-first dengan janji temu online dan akses rekam medis.",
    },
    tech: ["Next.js", "React", "TypeScript", "shadcn/ui"],
    images: ["/images/cendana.webp"],
  },
  {
    id: "siketik",
    line: "dharmais",
    name: "SiKetik",
    desc: {
      en: "The hospital's ethics committee information system, for managing ethics reviews digitally.",
      id: "Sistem informasi komite etik rumah sakit, untuk mengelola telaah etik secara digital.",
    },
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap 5"],
    images: ["/images/siketik.webp"],
  },
  // Web3
  {
    id: "sniper",
    line: "web3",
    name: "Solana sniper bot",
    short: "Sniper Bot",
    desc: {
      en: "For Enclavium (DAO): a Solana sniper trading bot plus a wallet tracker and a Pump.fun bundle checker for real-time on-chain analysis.",
      id: "Untuk Enclavium (DAO): bot trading sniper Solana plus wallet tracker dan pengecek bundle Pump.fun untuk analisis on-chain real-time.",
    },
    tech: ["Solana", "Web3", "Trading automation"],
  },
  {
    id: "bytelaunch",
    line: "web3",
    name: "ByteLaunch",
    desc: {
      en: "For DreamsHive: a no-code Solana SPL token deployer with IPFS metadata, multi-wallet connectivity, dynamic fees and token authority management.",
      id: "Untuk DreamsHive: deployer token SPL Solana tanpa kode dengan metadata IPFS, koneksi multi-wallet, biaya dinamis, dan pengelolaan otoritas token.",
    },
    tech: ["Nuxt 3", "Vue 3", "TypeScript", "Solana", "IPFS"],
    images: ["/images/bytelaunch.webp"],
  },
  // Security: independent research on authorized bug bounty programs (no targets or findings named)
  {
    id: "bounty-toolkit",
    line: "security",
    name: "Bounty Hunter Toolkit",
    short: "Hunter Toolkit",
    desc: {
      en: "My own operator kit for authorized bug bounty work: a 24-skill multi-agent pack (recon, access-control matrices, RBAC hierarchy checks, async surfaces, report triage), a save-point vault for checkpoints, test sessions, TOTP and a hypothesis ledger with a false-positive graveyard, and wire-level verifiers. Every engagement runs on a fail-closed scope allowlist.",
      id: "Toolkit buatan sendiri untuk bug bounty resmi: paket 24 skill multi-agent (recon, matriks access control, cek hierarki RBAC, permukaan async, triase laporan), vault save-point untuk checkpoint, sesi tes, TOTP, dan catatan hipotesis lengkap dengan kuburan false positive, plus verifier di level wire. Tiap engagement jalan di atas allowlist scope yang fail-closed.",
    },
    tech: ["Python", "SQLite", "Bash", "PowerShell", "Chrome DevTools Protocol"],
  },
  {
    id: "authz-research",
    line: "security",
    name: "Authorization & API research",
    short: "AuthZ Research",
    desc: {
      en: "Access-control testing on multi-tenant SaaS and APIs: cross-account matrices between my own test personas, IDOR and RBAC parity, OAuth and session handling, cache-key and race-condition checks. Nothing is called a finding until a deterministic oracle confirms it. Multiple reports submitted across programs.",
      id: "Pengujian access control di SaaS multi-tenant dan API: matriks lintas akun antar persona tes milik sendiri, paritas IDOR dan RBAC, penanganan OAuth dan sesi, cek cache-key dan race condition. Tidak ada yang disebut temuan sebelum dikonfirmasi oracle yang deterministik. Sudah mengirim beberapa laporan di berbagai program.",
    },
    tech: ["Access control", "IDOR", "OAuth", "Wire-level verification", "OWASP API Top 10"],
  },
  {
    id: "cve-digest",
    line: "security",
    name: "CVE Digest",
    desc: {
      en: "A CVE trend fetcher with daily volume and monthly digests, kernel sweeps and runtime version scans, to spot exposed dependencies fast.",
      id: "Pengambil tren CVE dengan volume harian dan digest bulanan, sweep kernel, dan scan versi runtime, supaya dependensi yang rentan cepat ketahuan.",
    },
    tech: ["Python", "OSV", "CVE triage"],
  },
  // Origin: earlier and side work
  {
    id: "demon",
    line: "origin",
    name: "DEMON",
    desc: {
      en: "A real-time MySQL dashboard with AI-assisted query analysis and auto-kill rules for runaway queries.",
      id: "Dashboard MySQL real-time dengan analisis query berbantuan AI dan aturan auto-kill untuk query yang membandel.",
    },
    tech: ["React", "TypeScript", "Express.js", "MySQL", "Gemini"],
    images: ["/images/demon1.webp", "/images/demon2.webp"],
    onMap: false,
  },
  {
    id: "istudy",
    line: "origin",
    name: "iStudy",
    desc: {
      en: "An education platform with modular features and Google Analytics integration.",
      id: "Platform edukasi dengan fitur modular dan integrasi Google Analytics.",
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    images: ["/images/istudy.webp"],
    link: "https://istudy.id",
    onMap: false,
  },
  {
    id: "library",
    line: "origin",
    name: "Library Management System",
    desc: {
      en: "A library management system for book and loan data.",
      id: "Sistem manajemen perpustakaan untuk data buku dan peminjaman.",
    },
    tech: ["PHP", "Laravel", "MySQL"],
    images: ["/images/LMS.webp"],
    link: "https://github.com/naufaljct48/library",
    onMap: false,
  },
  {
    id: "lookit",
    line: "origin",
    name: "LookitCCTV",
    desc: {
      en: "Company site for a CCTV installation business.",
      id: "Situs perusahaan untuk usaha pemasangan CCTV.",
    },
    tech: ["WordPress", "Elementor", "Yoast SEO"],
    images: ["/images/lookit.webp"],
    link: "https://lookitcctv.id/",
    onMap: false,
  },
  {
    id: "pdbm",
    line: "origin",
    name: "PD. Batara Membangun",
    desc: {
      en: "Site for a regional company focused on North Barito's development.",
      id: "Situs untuk perusahaan daerah yang berfokus pada pembangunan Barito Utara.",
    },
    tech: ["WordPress", "Elementor", "Yoast SEO"],
    images: ["/images/pdbm.webp"],
    link: "https://pdbm.co.id/",
    onMap: false,
  },
  {
    id: "aidoku",
    line: "origin",
    name: "Aidoku Indonesian Sources",
    desc: {
      en: "Open-source manga source library for the Aidoku reader.",
      id: "Pustaka sumber manga open-source untuk pembaca Aidoku.",
    },
    tech: ["Rust"],
    images: ["/images/aidoku.webp"],
    link: "https://github.com/naufaljct48/aidoku-community-sources",
    onMap: false,
  },
];

// Milestones on the person line (the ink trunk) of the route map
export const milestones: { year: number; label: Text }[] = [
  { year: 2019, label: { en: "Raharja University", id: "Universitas Raharja" } },
  { year: 2023, label: { en: "Graduated · GPA 3.70", id: "Lulus · IPK 3,70" } },
];

export const certifications: { name: string; issuer: string; year: number }[] = [
  { name: "Certified Application Security Engineer (Java)", issuer: "EC-Council", year: 2025 },
  { name: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding", year: 2023 },
  { name: "JavaScript (Basic)", issuer: "HackerRank", year: 2023 },
  { name: "Shopee Code League", issuer: "Shopee", year: 2022 },
];

export const timetable: { line: LineId; role: Text; org: string; from: string; to: Text }[] = [
  { line: "dimensi", role: { en: "Full-Stack Developer · PT Dimensi Pratama Sukses", id: "Full-Stack Developer · PT Dimensi Pratama Sukses" }, org: "Dimensi Software", from: "08/2025", to: { en: "now", id: "sekarang" } },
  { line: "navitek", role: { en: "Founder & Product Engineer", id: "Founder & Product Engineer" }, org: "Navitek", from: "01/2026", to: { en: "now", id: "sekarang" } },
  { line: "security", role: { en: "Security researcher (bug bounty)", id: "Security researcher (bug bounty)" }, org: "Independent", from: "2025", to: { en: "now", id: "sekarang" } },
  { line: "dharmais", role: { en: "Full-Stack Developer", id: "Full-Stack Developer" }, org: "RS Kanker Dharmais", from: "01/2024", to: { en: "06/2026", id: "06/2026" } },
  { line: "web3", role: { en: "Full-Stack Developer (contract)", id: "Full-Stack Developer (kontrak)" }, org: "DreamsHive", from: "05/2025", to: { en: "11/2025", id: "11/2025" } },
  { line: "web3", role: { en: "Blockchain Developer (freelance)", id: "Blockchain Developer (freelance)" }, org: "Enclavium (DAO)", from: "10/2024", to: { en: "10/2025", id: "10/2025" } },
  { line: "origin", role: { en: "B.Sc. Information Systems · GPA 3.70", id: "S1 Sistem Informasi · IPK 3,70" }, org: "Raharja University", from: "2019", to: { en: "2023", id: "2023" } },
];

export const skills: { group: Text; items: string[] }[] = [
  { group: { en: "Languages", id: "Bahasa" }, items: ["PHP 8+", "TypeScript", "JavaScript", "Go", "Dart", "Python", "SQL"] },
  { group: { en: "Web & SaaS", id: "Web & SaaS" }, items: ["Laravel", "Filament", "Next.js", "React", "REST APIs", "JWT", "RBAC", "Multi-tenancy"] },
  { group: { en: "Mobile", id: "Mobile" }, items: ["Flutter", "React Native", "Expo", "Play Store & App Store release"] },
  { group: { en: "AI engineering", id: "AI engineering" }, items: ["Agents & tool calling", "RAG", "LLM evals", "Hallucination guards", "MCP servers", "Voice AI"] },
  { group: { en: "Integrations", id: "Integrasi" }, items: ["DOKU Checkout", "QRIS", "Attendance machines", "Kiosk devices", "Webhooks"] },
  { group: { en: "Domain", id: "Domain" }, items: ["Indonesian payroll (PPh21 TER, BPJS, SPT)", "HR operations", "EMR & clinical workflows", "Regulated delivery"] },
  { group: { en: "Data & ops", id: "Data & ops" }, items: ["MySQL", "PostgreSQL", "Prisma", "Docker", "Linux VPS", "Caddy", "Git"] },
  { group: { en: "Web3", id: "Web3" }, items: ["Solana", "SPL tokens", "Wallets", "IPFS"] },
  { group: { en: "Security", id: "Security" }, items: ["Access control & RBAC", "IDOR / API authz", "OAuth & sessions", "Recon", "CVE triage", "EC-Council CASE (Java)", "Bugcrowd", "HackerOne", "Intigriti", "YesWeHack"] },
];

export const lineById = (id: LineId) => lines.find((l) => l.id === id)!;
export const stationsOn = (id: LineId) => stations.filter((s) => s.line === id);
