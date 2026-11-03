// Tech label → brand icon in /public/icons (from thesvg.org). Labels without a logo render as plain text.
const slugs: Record<string, string> = {
  "Laravel": "laravel",
  "Laravel 13": "laravel",
  "MySQL": "mysql",
  "Flutter": "flutter",
  "Dart": "dart",
  "Next.js": "nextjs",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "PostgreSQL": "postgresql",
  "Prisma": "prisma",
  "Claude API": "claude",
  "Python": "python",
  "FastAPI": "fastapi",
  "OpenCV": "opencv",
  "React": "react",
  "React Native": "react",
  "Expo": "expo",
  "Three.js": "threejs",
  "Tailwind CSS": "tailwindcss",
  "Livewire": "livewire",
  "Vue 3": "vue",
  "Nuxt 3": "nuxt",
  "Solana": "solana",
  "IPFS": "ipfs",
  "Rust": "rust",
  "WordPress": "wordpress",
  "Elementor": "elementor",
  "Yoast SEO": "yoast",
  "Express.js": "express",
  "Bootstrap 5": "bootstrap",
  "CodeIgniter": "codeigniter",
  "Gemini": "google-gemini",
  "Gemini API": "google-gemini",
  "Gemini Live API": "google-gemini",
  "Docker": "docker",
  "Linux VPS": "linux",
  "Caddy": "caddy",
  "Git": "git",
  "shadcn/ui": "shadcn-ui",
  "SQLite": "sqlite",
  "PowerShell": "powershell",
  "Bash": "gnu-bash",
  "OWASP API Top 10": "owasp",
  "Bugcrowd": "bugcrowd",
  "HackerOne": "hackerone",
  "Intigriti": "intigriti",
};

// Logos drawn in black; inverted in dark mode so they stay visible.
const inkLogos = new Set(["prisma", "rust", "express", "threejs", "shadcn-ui", "expo", "caddy", "owasp", "hackerone", "intigriti"]);
// Logos drawn in white; inverted in light mode instead.
const paperLogos = new Set(["nextjs"]);

export const techIcon = (label: string) => {
  const slug = slugs[label];
  if (!slug) return null;
  const tone = inkLogos.has(slug) ? "dark:invert" : paperLogos.has(slug) ? "invert dark:invert-0" : "";
  return { src: `/icons/${slug}.svg`, tone };
};
