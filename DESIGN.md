---
name: Naufal Aziz
description: A career drawn as a KRL Jabodetabek route map, time-scaled, one coloured line per job.
colors:
  ground: "#f8fafb"
  surface: "#eef1f4"
  ink: "#121417"
  ink-2: "#4c525b"
  rule: "#dfe2e5"
  on-ink: "#fbfbfa"
  on-line: "#ffffff"
  line-dimensi: "#0a64b8"
  line-navitek: "#0b7a3d"
  line-dharmais: "#d21a2e"
  line-web3: "#7a4a2b"
  ground-night: "#0d1014"
  surface-night: "#161a20"
  ink-night: "#eceef1"
  ink-2-night: "#a5acb6"
  rule-night: "#272d36"
  line-dimensi-night: "#4a97e6"
  line-navitek-night: "#2bb566"
  line-dharmais-night: "#f2485a"
  line-web3-night: "#c4855c"
  board-night: "#0f1216"
  board-paper: "#e9ecef"
  board-dim: "#a9b0b9"
  signal-amber: "#ffb21e"
  led-housing: "#100c07"
  night: "#0e1014"
  night-dark: "#050607"
  night-ink: "#eef0f2"
typography:
  display:
    fontFamily: "Bonbance, BDO Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 10vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "0.01em"
  display-section:
    fontFamily: "Bonbance, BDO Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "0.01em"
  display-platform:
    fontFamily: "Bonbance, BDO Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "0.01em"
  display-wordmark:
    fontFamily: "Bonbance, BDO Grotesk, system-ui, sans-serif"
    fontSize: "clamp(5rem, 20.5vw, 22rem)"
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: "0.01em"
  headline:
    fontFamily: "BDO Grotesk, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "BDO Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  body:
    fontFamily: "BDO Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  lead:
    fontFamily: "BDO Grotesk, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.375
  label-badge:
    fontFamily: "BDO Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.02em"
    fontFeature: "tnum"
  label-chip:
    fontFamily: "BDO Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
  label-board:
    fontFamily: "BDO Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.12em"
rounded:
  pill: "999px"
  sm: "0.6rem"
  md: "0.75rem"
  lg: "1rem"
  board: "1.25rem"
  panel: "1.5rem"
  poster: "2rem"
spacing:
  gutter: "1rem"
  stop-indent: "4rem"
  stop-gap: "4rem"
  stop-gap-compact: "2.5rem"
  section: "5rem"
  section-wide: "6rem"
  page-max: "80rem"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-line-hover:
    backgroundColor: "{colors.surface}"
  line-badge:
    backgroundColor: "{colors.line-dimensi}"
    textColor: "{colors.on-line}"
    typography: "{typography.label-badge}"
    rounded: "{rounded.pill}"
    padding: "0 0.6rem"
    height: "1.75rem"
  tech-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.label-chip}"
    rounded: "{rounded.pill}"
    padding: "0 0.7rem"
    height: "1.75rem"
  platform-sign:
    backgroundColor: "{colors.line-dimensi}"
    textColor: "{colors.on-line}"
    padding: "2.5rem 1rem"
  departure-board:
    backgroundColor: "{colors.board-night}"
    textColor: "{colors.board-paper}"
    rounded: "{rounded.board}"
  led-display:
    backgroundColor: "{colors.led-housing}"
    textColor: "{colors.signal-amber}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.75rem"
  button-night:
    backgroundColor: "{colors.night-ink}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "3.25rem"
  night-terminus:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-ink}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "2.5rem"
  fab-chat:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.pill}"
    size: "3.5rem"
  fab-top:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "2.75rem"
  chat-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.75rem"
---

# Design System: Naufal Aziz

## Overview

**Creative North Star: "The Commuter Line Map"**

The whole site is a KRL Jabodetabek route diagram. One ink person-line runs left to right along a time axis; every job is a coloured line that leaves it at its real start month, carries its products as stations, and either ends at a terminus bar or keeps running past "now". Everything else is station furniture: line badges, platform signs, a strip map down each line, a departure board, an in-car amber LED passenger display, and a night terminus where the running lines arrive. The visitor reads a network, not a portfolio grid.

Density is calm and wide: a cool white ground, big poster type, thick strokes, and generous vertical travel between stops. Colour is never decoration; each hue is a line, and a line's colour only appears where that line is present. Depth is soft and physical (lifted pills, screenshots, boards) over a flat ground. Motion belongs to the network: tracks draw in once, trains run once and stop at "now", a pulse rings the now-station, lines solo on hover or focus.

Dark mode is a night platform, not an inverted page: ground goes to deep blue-black, ink to near-white, line colours brighten so they still read as the same lines. The departure board, the LED display and the terminus footer are night objects in both themes.

**Key Characteristics:**
- A time-scaled route map is the signature, in its own section straight after a full-screen station-board hero; everything else (sections, nav, contact) reuses its vocabulary.
- One colour per line, applied through a single scoped line-colour variable.
- Bonbance condensed poster type for station-board names; BDO Grotesk for every label, body and control.
- Round-capped thick strokes, 45 degree bends, ground-filled dots with ink rings, pill shapes for everything interactive.
- Tabular numerals on every date, count and year.

## Colors

A neutral cool-grey station palette carrying four saturated line colours, with amber reserved for signage that glows.

### Primary
- **Dimensi Line Blue** (line-dimensi; night: line-dimensi-night): the current job's line. It also serves as the system accent: focus ring, text selection, caret, the now-station pulse, and the portrait station panel.

### Secondary
- **Navitek Line Green** (line-navitek; night: line-navitek-night): the founder line. Also the "available" status dot in the hero.
- **Dharmais Line Red** (line-dharmais; night: line-dharmais-night): the hospital line, an ended line with a terminus.
- **Web3 Line Brown** (line-web3; night: line-web3-night): the contract and freelance line (Enclavium, DreamsHive), ended.

### Tertiary
- **Signal Amber** (signal-amber): lit LED dots, departure-board column heads, and the "now" value and dot on the board. Nothing else.

### Neutral
- **Platform White** (ground; night: ground-night): page ground and the fill of every station dot, interchange capsule and peek card.
- **Concourse Grey** (surface; night: surface-night): the timetable section band, button-line hover, chat bubbles and the chat input.
- **Track Ink** (ink; night: ink-night): text, station rings, the person-line (origin line), primary pills, borders on floating panels.
- **Timetable Grey** (ink-2; night: ink-2-night): secondary text, chip text, year axis labels.
- **Rail Rule** (rule; night: rule-night): hairlines, chip borders, idle icon-button borders, the year axis.
- **On Ink / On Line** (on-ink, on-line): text on ink pills and on line-colour fills. On-line is white by day, ground-dark by night.
- **Board Night / Board Paper / Board Dim** (board-night, board-paper, board-dim): the departure board's own palette; constant across themes.
- **LED Housing** (led-housing): the warm-black bezel behind the dot matrix.
- **Night / Night Ink** (night, night-ink; night-dark replaces night under the dark theme): the terminus footer's ground, and its text, person-line and terminal ring. Inside it, secondary text uses Board Dim, and the line tracks use the night line values (`--night-dimensi` and siblings, equal to the dark-theme line colours) so the lines read the same on the night block in both themes.

### Named Rules
**The Line Owns Its Colour Rule.** A line colour appears only on things that belong to that line: its track, badge, platform sign, strip, current-stop fill, screenshot-switcher selection and link underline. Components read one scoped variable (`--line`) set on the line's container; they never hard-code a line hue. The only multi-line uses are keys to the whole network (the legend, the chat panel's five-colour top stripe, and the terminus footer's converging lines).

**The Night Board Rule.** The departure board, the LED displays and the night terminus footer stay dark in light and dark themes alike. Amber lives only on them (inside the footer: the LED, the contact-board labels and text selection).

## Typography

**Display Font:** Bonbance Bold Condensed (with BDO Grotesk, system-ui)
**Body Font:** BDO Grotesk, Regular 400 / Medium 500 / DemiBold 600 / Bold 700 (with system-ui, sans-serif)

**Character:** A tall condensed poster face lettering the station boards, against a plain Indonesian grotesk doing the map labels, body and UI. Self-hosted in `public/fonts`; the pairing is an owner commitment.

### Hierarchy
- **Display** (Bonbance 700, clamp(3.25rem, 10vw, 6rem), 0.94): the name in the hero; the footer's closing headline uses the same face at clamp(3.25rem, 9vw, 6rem), max 12ch.
- **Display Section** (Bonbance 700, clamp(2.75rem, 7vw, 5.5rem), 0.94): section titles (lines, timetable), max about 14ch.
- **Display Platform** (Bonbance 700, clamp(2.5rem, 6.5vw, 5rem), 0.94): the line name on each platform sign.
- **Display Wordmark** (Bonbance 700, clamp(5rem, 20.5vw, 22rem), 0.8): the oversized name closing the footer, cut by the bottom edge. Once per page.
- **Headline** (BDO Grotesk 700, 1.25rem to 2.25rem by breakpoint, 1.08, -0.01em): station (product) names in the strip map; sub-section heads (1.5rem to 2.25rem).
- **Title** (BDO Grotesk 700, 1.125rem to 1.25rem, 1.08): nav wordmark, peek-card and chat headers, station plate names.
- **Body** (BDO Grotesk 400, 1.0625rem, 1.625; 0.975rem on phones): station descriptions, capped at 62ch; bio at 1.125rem, 60ch. The hero now-line sets 1rem, 1.125rem from `sm`.
- **Lead** (BDO Grotesk 400, 1.125rem on phones to 1.375rem from `sm`, 1.375): the hero positioning line in ink-2, max 36rem. The footer lead runs 1.125rem to 1.25rem at 1.625 in Board Dim, max 34rem.
- **Label** (BDO Grotesk, 0.8125rem): badges at 700 with 0.02em tracking; chips at 500. Board column heads and the footer contact-board labels 0.75rem 700, uppercase, 0.12em. Small meta (legend names, chat subtitle, copyright) at 0.875rem.

**Known deviations (off-ramp, carried by the build, not part of the ramp):** chat bubbles at 0.95rem (Chatbot); nav links and some strip meta at 0.975rem (Navbar, Projects); hero buttons shrinking to 0.9rem on phones (Hero); the footer headline's 9vw slope against the hero's 10vw (Footer); the terminus label as a 22-unit SVG text (Footer). New surfaces snap to the ramp above rather than copy these.

### Named Rules
**The Tabular Timetable Rule.** Every date, year, count and switcher index sets in tabular numerals.

**The Poster Name Rule.** Bonbance is for names on boards (person, sections, lines, line roundels) and nothing smaller than about 1.6rem. Running text, labels and controls are always BDO Grotesk.

**The Board Caps Rule.** Uppercase is reserved for transit hardware: the LED display, the departure board's column heads and the footer contact board's field labels. No other uppercase labels.

## Layout

A single column centred at 80rem with 1rem side gutters. Sections open with 5rem of vertical space (6rem from `sm`) and divide with a rule hairline; the timetable sits on a full-width concourse-grey band.

The hero is a full first screen (min-height 100svh; 7rem top padding, 8rem from `sm`): from `md` a two-column grid (text, then the portrait station poster at 17rem, 21rem from `lg`) centred in the space, with the LED passenger display pinned along the bottom. The text runs name, positioning line, the now-line (DPS badge plus Dimensi Software, PT Dimensi Pratama Sukses from `sm`), then the ink and line buttons with the "available" dot. On phones the poster becomes a 4.5 by 5.5rem station board beside the name. There is no map in the hero.

The route map has its own section (`#map`) straight after the hero: a Display Section heading with a right-aligned hint (hidden on phones), the line legend, then the map. The map is a 1200-wide SVG drawn to a piecewise time scale (2019 to 2023 compressed, 2024 onward wide) and always fits its column; it never scrolls sideways. When its column is narrower than 720px it switches to compact mode: strokes, dots, rings and capsules scale by 2.2, station names and milestone labels drop out (each product is listed in the Lines section), year labels grow, the "you are here" tag moves below-left of the marker, and the peek card is disabled.

Each line is an article: a full-bleed platform sign, then a vertical strip map. Stops indent 4rem from the strip and are spaced 4rem apart (2.5rem on the compact origin line). A stop with screenshots splits 5fr text and 7fr image from `lg`; on phones the image comes first. Content-heavy split rows (timetable, stops) use the same 5:7 ratio.

The footer is a full-bleed night block: the terminus diagram (1200 by 190, edge to edge), then a 7fr / 5fr grid from `lg` (closing headline and pill left, LED and contact board right), a copyright bar on a white-at-10% hairline, and the wordmark cut by the bottom edge.

The nav is fixed at 4rem tall; scroll padding is 5rem. The sticky LED next-station display docks under the nav only while the Lines section is in view.

## Elevation & Depth

Flat ground, lifted objects. The page, platform signs and strips are flat; objects you could pick up (the ink pill, the portrait panel, screenshots, the peek card, the chat panel, the departure board) carry soft two-layer ambient shadows: a tight contact shadow plus a long, negatively spread drop. There are no hard offset shadows. Floating panels add a 2px ink border so they read as signage, not cards. Floating buttons carry a ground-coloured outline so they stay legible over any line colour or the night footer.

### Shadow Vocabulary
- **Ink Pill** (`0 1px 2px rgb(0 0 0 / 0.12), 0 8px 20px -8px rgb(0 0 0 / 0.35)`): the primary button; deepens and lifts 1px on hover.
- **Screenshot** (`0 1px 2px rgb(0 0 0 / 0.06), 0 18px 40px -28px rgb(0 0 0 / 0.45)`): product screenshots.
- **Float** (`0 4px 8px rgb(0 0 0 / 0.08), 0 24px 48px -20px rgb(0 0 0 / 0.45)`): peek card; the chat panel uses a longer variant.
- **Board** (inset 1px white at 6%, plus `0 30px 60px -30px rgb(0 0 0 / 0.55)`): the departure board.
- **LED Bezel** (inset 1px white at 6%, inset `0 2px 10px rgb(0 0 0 / 0.6)`): recessed LED display.
- **Poster** (`0 2px 4px rgb(0 0 0 / 0.08), 0 30px 60px -28px rgb(10 40 80 / 0.6)`): the hero portrait poster; blue-tinted drop.
- **Night Pill** (`0 1px 2px rgb(0 0 0 / 0.3), 0 14px 30px -12px rgb(0 0 0 / 0.8)`): the light LinkedIn pill on the night block.
- **Ground Halo** (a 2px ground spread ring outside a 2px ink border): the back-to-top button.
- **Nav on Scroll** (a rule-coloured 1px line plus a soft 24px drop): only after 12px of scroll.

### Named Rules
**The Lifted Object Rule.** Shadows belong to things that sit on the platform, never to the ground or to a line's own signage.

## Shapes

Everything interactive is a full pill (999px): buttons, badges, chips, nav links, toggles, icon buttons, inputs, the "you are here" tag. Map geometry is round-capped and round-joined; branches leave the trunk at exactly 45 degrees, and labels above a line rotate -45 degrees. Station dots are circles filled with the ground and ringed in ink (4px on the map, 5px on the strip); interchanges are ground-filled capsules ringed in ink; an ended line closes with a perpendicular terminus bar, a running line fades out or continues as a dotted extension past "now". In the terminus footer, running lines bend at 45 degrees into one night-ink track ending at a capsule terminal; ended lines stop on terminus bars. Containers soften with size: 0.75rem for the LED display and the phone station board, 1rem for screenshots, the peek card, the poster's name plate and the footer contact board, 1.25rem for the board, 1.5rem for the chat panel, 2rem for the portrait poster.

## Components

### Buttons
Confident pills with a physical press.
- **Shape:** full pill, 3.25rem tall, 1.4rem side padding (2.75rem tall on phones).
- **Primary (ink pill):** ink fill, on-ink text, lucide icon at 1.25rem, Ink Pill shadow. Hover lifts 1px and deepens the shadow; active presses down 1px and scales to 0.98.
- **Line (secondary):** 2px ink outline, ink text, transparent; hover fills concourse grey.
- **Night pill:** on the night block the primary becomes a night-ink pill with night text and the Night Pill shadow; hover goes white and lifts 1px.
- **Icon button:** 2.5rem circle, 2px rule border turning ink on hover.
- **Floating buttons:** the chat launcher is a 3.5rem ink circle with a 2px ground border and the fab shadow, lifting 2px on hover; back-to-top is a 2.75rem ground circle with a 2px ink border and a 2px ground halo, appearing after 600px of scroll.
- **Text links:** semibold, 2px underline (line colour inside a line) thickening to 3px on hover.

### Line badges
A solid pill in the line's colour with the line code (DPS, NVK, DMS, W3, UR) in on-line text, 1.75rem tall, at least 2.5rem wide. On the departure board, the ink origin line inverts to a board-paper pill with board-night text.

### Chips
Tech chips are outline pills: 1.5px rule border, ink-2 text, 1.75rem tall, carrying the real brand SVG at 1rem height (inverted per theme where a logo is mono). Never filled, never coloured by line.

### Inputs / Fields
The chat input is a concourse-grey pill, 2.75rem tall, no border. Focus is the system ring: 3px Dimensi blue outline with 3px offset. The send button is a 2.75rem ink circle, 35% opacity when disabled.

### Navigation
Fixed ground-coloured bar, 4rem tall, flat until scrolled. Left: an ink "NA" roundel and the name in title type. Centre (from `md`): Map, Lines, Timetable, Contact as pill links in 600 weight that fill concourse grey on hover. Right: the EN/ID segmented pill (active side ink-filled), theme and menu icon buttons. The mobile menu is itself a strip map: ink-ringed dots joined by an ink bar, items in 1.5rem headline type.

### Route Map (signature)
The time-scaled SVG network. Tracks are 9 units thick, separated from crossings by a 15-unit ground-coloured casing. Tracks draw in once (1.6s, staggered per line); stops fade in after them; a two-car train in the line colour runs each live line once and stops at "now". Hovering or focusing a line (or its legend item, or any station) solos it: other lines drop to 12% opacity. Station dots grow from 8 to 10 with a 5-unit ring on hover or focus, and the focused name underlines. The latest stop on a running line fills with the line colour. "You are here" is an ink capsule tag over an ink dot with a Dimensi pulse. On hover-capable devices, outside compact mode, a peek card (ground, 2px ink border, screenshot, badge, two-line description) follows the station.

### Platform Sign and Strip Map (signature)
Each line opens with a full-bleed platform sign in the line colour: a 4.5rem on-line roundel lettered in Bonbance with the line code, the line name in Display Platform type, and the org, role, period and station count. Below, a 0.625rem rounded strip runs down the left; each product is a stop with a 1.875rem ground dot ringed 5px in ink. A running line's strip fades out at the bottom; an ended line closes with a terminus bar.

### Departure Board and LED Display (signature)
The timetable is a board-night table with amber column heads, line badges, board-paper org names, board-dim roles and tabular dates; "now" is amber with an amber dot. The LED display is a canvas dot matrix (5 by 7 glyphs, 9 rows, amber dots with soft glow on dim amber unlit dots) in a recessed warm-black bezel. It closes the hero at a 4px dot pitch, and runs at a finer 3px pitch as the sticky next-station display through the Lines section and above the footer contact board. It is static and centred when the message fits, scrolls otherwise, and never scrolls under reduced motion.

### Hero station poster
The cutout portrait stands on a Dimensi-blue poster (4:5, 2rem corners, Poster shadow), scaled up from the bottom edge. An ink name plate sits inside the bottom edge: DPS badge, "Tangerang" in title type, "Indonesia" at 0.75rem.

### Night Terminus (footer, signature)
A night block in both themes. The terminus diagram opens it: the Dimensi and Navitek lines (still running) bend at 45 degrees into the night-ink person-line and arrive at a "Your team" capsule terminal (night fill, 7-unit night-ink ring, label below); the Dharmais and Web3 lines (ended) stop short on terminus bars. Below: the closing headline in Display, the lead in Board Dim, and the night pill to LinkedIn; beside them the footer LED and a departure-board contact list (white-at-10% hairlines, 1rem corners, 2.25rem icon discs, amber uppercase field labels over semibold values, an arrow that nudges up-right on hover). Then a copyright bar in Board Dim and the oversized wordmark in night ink, cut by the bottom edge.

## Do's and Don'ts

### Do:
- **Do** set a line's colour once, as `--line` on its container, and let badges, strips, dots, platform signs and underlines read it.
- **Do** keep station dots ground-filled with ink rings; fill only the latest stop on a running line.
- **Do** bend lines at 45 degrees only, with round caps and joins.
- **Do** set every date and count in tabular numerals.
- **Do** make every control a full pill (official store badges keep their own artwork), with the 3px Dimensi blue focus ring at 3px offset.
- **Do** let the route map fit its column; below 720px switch to compact mode (2.2x strokes, names hidden) instead of scrolling sideways.
- **Do** give floating buttons a ground-coloured outline.
- **Do** gate draw-in, trains, pulse and LED scrolling behind `prefers-reduced-motion: no-preference`.
- **Do** use the real theSVG brand logo on tech chips.

### Don't:
- **Don't** use a line colour for anything that isn't that line, and don't add a line colour without a real job behind it.
- **Don't** use amber anywhere except the LED displays, the departure board and the night terminus footer.
- **Don't** set running text, labels or controls in Bonbance.
- **Don't** add uppercase tracked labels outside the board and LED hardware.
- **Don't** put shadows on the ground, platform signs or strips, and don't use hard offset shadows.
- **Don't** fall back to same-size project cards or a skills bento; products are stations on their line.
