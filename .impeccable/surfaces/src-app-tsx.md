---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

# Surface: portfolio landing (single page, src/App.tsx)

Mode: Experience (the work leads from the first viewport), with one Persuade action: connect on LinkedIn.
Audience: recruiters skimming + business owners looking for a builder. Proof: live products, real numbers from the Nov 2026 resume.
Constraints: keep EN/ID toggle, profile photo, dark/light toggle (light default); chatbot removed by the owner. Fonts pinned by the owner: Bonbance (display) + BDO Grotesk (text), replacing Bricolage Grotesque on 3 Nov 2026 because it read too tight. Brand icons from thesvg.org.
Build path: code-led (no image generation in this harness).

## Direction contract

THESIS: The career is a commuter rail map, time-scaled: a person-line (ink) runs from Raharja 2019 to now, and every job is a coloured KRL line that branches off at its real start month, carries its products as stations, and either terminates or keeps running past "now". Refuses the dev-portfolio default of hero + bento skills + same-size project cards.

OWN-WORLD: KRL Jabodetabek route-diagram language. Cool white ground (dark mode: night platform #0D1014), ink #121417. Full palette of line colours as roles: Dimensi blue, Navitek green, Dharmais red, Web3 brown, ink for learning/earlier work. Thick round-capped strokes, 45° bends only, white station dots with ink rings, interchange capsules, line badges as solid pills, terminus bars. Bonbance for station-board display type; BDO Grotesk (Indonesian grotesk) for map labels, body and UI; tabular numerals for every date. Real brand SVG logos on tech chips.

STORY: Visitor reads who (name, role, current company) on the first screen, then sees the whole career as one map, solos a line to understand it, clicks a station to jump to that product with its screenshot, reads the departure-board timetable, and arrives at the night terminus to connect on LinkedIn.

FIRST VIEWPORT: Full first screen (100svh): H1 "Naufal Aziz" in Bonbance left with clear room under the navbar, one-line positioning, "Now at Dimensi Software (PT Dimensi Pratama Sukses)" with the DPS badge, primary "Connect on LinkedIn" ink pill + Download CV; cutout portrait on a Dimensi-blue station board right (DPS badge + Tangerang name plate). The in-car LED passenger display ("NOW: DIMENSI SOFTWARE > NEXT STATION: YOUR TEAM") is pinned at the bottom of the screen. The time-scaled route map is the very next section (#map): full map with names on desktop; under 720px it compacts to fit the column (thicker strokes, names hidden) and never scrolls sideways. "You are here" lives on the map.

FORM: KRL route map + in-car strip map for sections (pick card, my rank 1 of 7), seed key cbbec649. Signature interaction: line solo on hover/focus + draw-in on load; sections use a vertical strip map whose stations are the products.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Recorded adaptations (after first review and owner feedback "kurang, gak berasa jago frontend/desain")
- "You are here" lives on the map's now-station, not on the photo panel: the map is the thesis and the marker must sit on the time axis. The photo panel became a station board (line badge + Tangerang name plate).
- Raises added: in-car LED passenger display (canvas dot matrix) above the map and as a sticky next-station display through the Lines section; trains running on the live lines; station preview cards on hover; interchange capsules where lines leave the person line; latest stop on running lines filled and ringing; full-bleed platform-sign headers per line; departure-board timetable; the contact close as the person line arriving at "Your team".
- SiKetik belongs to the Dharmais line (owner correction).
- Finish review round 2: multi-trip card removed (faked physical chip, duplicate CTA); LED rebuilt on a 5x7 bitmap face with passenger copy; trains run once and park; store links use the official badges; PHP, Filament and Go chips are text-only. Verdict: all scored fixes resolved.
- 3 Nov 2026 (owner): company is Dimensi Software (PT Dimensi Pratama Sukses); codes DPS / NVK / DMS; hero is a full screen with the LED at its foot and the map moved to its own section with no sideways scroll; footer rebuilt as a night terminus block (converging lines into "Your team", departure-board contacts, oversized wordmark) after footer.design references.
- 3 Nov 2026 (owner): one glass button family (ink glass primary, clear glass secondary, glass round controls, Apple-style glass nav); phone hero leads with a full-width station-board poster; timetable folds dates under the role on phones; chatbot removed; EMR is PHP + CodeIgniter.
