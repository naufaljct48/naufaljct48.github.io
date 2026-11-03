# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences with roughly equal weight:
- **Recruiters / HR** skimming for a full-stack hire. They decide in under a minute whether to reach out, so current role, scope of ownership, and proof of shipped production work must be legible fast.
- **Prospective freelance / product clients** (business owners) looking for a developer who can ship a whole product. They want to see real products that are live, not exercises.

## Product Purpose

Personal portfolio + web CV for Naufal Aziz Albaaqie, a Full-Stack Developer in Tangerang, Indonesia. It exists to turn a visit into a LinkedIn connection or DM (primary action), with the PDF resume download and email as secondary routes.

## Positioning

Ships production SaaS end to end, alone or as lead: web, mobile, hardware integration, payments, and AI, in regulated and money-moving domains (Indonesian payroll/tax, hospital EMR, BPOM/CPOB-certified transfusion). Also founds and runs his own products (Navitek: Clippeak, Cuanten). The proof is live products with real users, not a skills list.

## Operating Context

Visitors arrive from the PDF resume, LinkedIn, GitHub, or a shared link, on desktop and phone. Bilingual audience: English and Bahasa Indonesia.

## Capabilities and Constraints

- Stack: Vite + React 18 + TypeScript + Tailwind 3 + framer-motion + lucide-react; deployed on Vercel (also GitHub Pages script). `api/chat.js` is a Vercel function for the chatbot.
- Must keep: EN/ID language toggle (`src/context/LanguageContext.tsx`), AI chatbot (`src/components/Chatbot.tsx` + `api/chat.js`), profile photo, dark/light theme toggle.
- `public/Resume.pdf` is the downloadable resume and must match `D:\Data Pribadi\Resume - Naufal Aziz (Nov 2026).pdf`.
- No phone number on the site.

## Brand Commitments

- Typefaces (owner's explicit choice, 3 Nov 2026, replacing Bricolage Grotesque): **Bonbance** (Louna Bourdon, OFL) for display, **BDO Grotesk** (Deni Anggara / Lokal Container, OFL) for everything else. Self-hosted in `public/fonts`.
- Brand icons come from theSVG (thesvg.org), stored in `public/icons`.
- Dimensi HRIS Mobile links to both Google Play and the App Store.
- Employer naming: the company is **Dimensi Software** (legal name PT Dimensi Pratama Sukses); Dimensi HRIS is its product. Line codes: DPS (Dimensi Pratama Sukses), NVK (Navitek), DMS (Dharmais), W3, UR.
- Name: Naufal Aziz (full: Naufal Aziz Albaaqie). Handles: github.com/naufaljct48, linkedin.com/in/naufal-aziz, naufaljct48@gmail.com.

## Evidence on Hand

All facts come from the Nov 2026 resume (`public/Resume.pdf`). Numbers that may be used: 2,200+ commits on Dimensi HRIS since Jun 2026; EMR 20+ modules / 500+ healthcare users; Clippeak 400+ users in 3 months; Airis 17 tools / 172-question eval suite; SiKevin 30 min → 30 s; GPA 3.70.
Project screenshots live in `public/images/` (Dimensi HRIS, Dimensi mobile, Cuanten, Clippeak, help center, plus older projects). Photos: `public/images/naufal*.webp`.
No testimonials, client logos, or press exist; do not fabricate any.

## Product Principles

1. Proof over adjectives: lead with shipped, live products and real numbers.
2. Current role and ownership visible in the first screen.
3. One clear next step: connect on LinkedIn.
4. Bilingual parity: every visible string exists in EN and ID.

## Accessibility & Inclusion

Standard WCAG 2.2 AA; respect reduced motion.
