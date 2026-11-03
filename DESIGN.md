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
    fontSize: "clamp(3.25rem, 13vw, 6rem)"
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
  panel: "1.75rem"
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
    backgroundColor: "rgb(248 250 251 / 0.55)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-line-hover:
    backgroundColor: "rgb(248 250 251 / 0.85)"
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
    backgroundColor: "#ffffff"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "3.25rem"
  night-terminus:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-ink}"
  icon-button:
    backgroundColor: "rgb(248 250 251 / 0.5)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "2.5rem"
  fab-top:
    backgroundColor: "rgb(248 250 251 / 0.5)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "3rem"
  nav-capsule:
    backgroundColor: "rgb(248 250 251 / 0.58)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "3.5rem"
    width: "62rem"
---

# Design System: Naufal Aziz

## Overview

**Creative North Star: "The Commuter Line Map"**

The whole site is a KRL Jabodetabek route diagram. One ink person-line runs left to right along a time axis; every job is a coloured line that leaves it at its real start month, carries its products as stations, and either ends at a terminus bar or keeps running past "now". Everything else is station furniture: line badges, platform signs, a strip map down each line, a departure board, an in-car amber LED passenger display, and a night terminus where the running lines arrive. The visitor reads a network, not a portfolio grid.

Density is calm and wide: a cool white ground, big poster type, thick strokes, and generous vertical travel between stops. Colour is never decoration; each hue is a line, and a line's colour only appears where that line is present. Depth is soft and physical (lifted pills, screenshots, boards) over a flat ground; controls and the nav are glass, so the map and lines stay visible through them. Motion belongs to the network and follows the reader: the route map draws itself once it is on screen and its trains run once to "now", each line's strip rail fills as you read down it and stations light up when the train reaches them, board names are unveiled with a wipe, and the departure board flaps its rows down. A pulse rings the now-station, and lines solo on hover or focus. Without motion permission everything simply sits in its final state.

Dark mode is a night platform, not an inverted page: ground goes to deep blue-black, ink to near-white, line colours brighten so they still read as the same lines. The departure board, the LED display and the terminus footer are night objects in both themes.

**Key Characteristics:**
- A time-scaled route map is the signature, in its own section straight after a full-screen station-board hero; everything else (sections, nav, contact) reuses its vocabulary.
- One colour per line, applied through a single scoped line-colour variable.
- Bonbance condensed poster type for station-board names; BDO Grotesk for every label, body and control.
- Round-capped thick strokes, 45 degree bends, ground-filled dots with ink rings, pill shapes for everything interactive.
- One glass control family: ink glass primary, clear glass secondary, clear glass round controls and a floating glass nav capsule.
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
- **Platform White** (ground; night: ground-night): page ground, the fill of every station dot and interchange capsule, and (at 48%) the glass of the station peek card.
- **Concourse Grey** (surface; night: surface-night): the timetable section band and the screenshot frame behind loading images.
- **Track Ink** (ink; night: ink-night): text, station rings, the person-line (origin line), the ink-glass primary pill, and (at 12 to 22%) the hairline rings of glass controls.
- **Timetable Grey** (ink-2; night: ink-2-night): secondary text, chip text, year axis labels.
- **Rail Rule** (rule; night: rule-night): hairlines, chip borders, screenshot borders, the year axis.
- **On Ink / On Line** (on-ink, on-line): text on ink pills and on line-colour fills. On-line is white by day, ground-dark by night.
- **Board Night / Board Paper / Board Dim** (board-night, board-paper, board-dim): the departure board's own palette; constant across themes.
- **LED Housing** (led-housing): the warm-black bezel behind the dot matrix.
- **Night / Night Ink** (night, night-ink; night-dark replaces night under the dark theme): the terminus footer's ground, and its text, person-line and terminal ring. Inside it, secondary text uses Board Dim, and the line tracks use the night line values (`--night-dimensi` and siblings, equal to the dark-theme line colours) so the lines read the same on the night block in both themes.

### Named Rules
**The Line Owns Its Colour Rule.** A line colour appears only on things that belong to that line: its track, badge, platform sign, strip, current-stop fill, screenshot-switcher selection (the active index fills with the line colour; inactive indexes are clear glass) and link underline. Components read one scoped variable (`--line`) set on the line's container; they never hard-code a line hue. The only multi-line uses are keys to the whole network (the legend and the terminus footer's converging lines).

**The Night Board Rule.** The departure board, the LED displays and the night terminus footer stay dark in light and dark themes alike. Amber lives only on them (inside the footer: the LED, the contact-board labels and text selection).

## Typography

**Display Font:** Bonbance Bold Condensed (with BDO Grotesk, system-ui)
**Body Font:** BDO Grotesk, Regular 400 / Medium 500 / DemiBold 600 / Bold 700 (with system-ui, sans-serif)

**Character:** A tall condensed poster face lettering the station boards, against a plain Indonesian grotesk doing the map labels, body and UI. Self-hosted in `public/fonts`; the pairing is an owner commitment.

### Hierarchy
- **Display** (Bonbance 700, clamp(3.25rem, 13vw, 6rem), 0.94): the name in the hero; the footer's closing headline uses the same face at clamp(3.25rem, 9vw, 6rem), max 12ch.
- **Display Section** (Bonbance 700, clamp(2.75rem, 7vw, 5.5rem), 0.94): section titles (lines, timetable), max about 14ch.
- **Display Platform** (Bonbance 700, clamp(2.5rem, 6.5vw, 5rem), 0.94): the line name on each platform sign.
- **Display Wordmark** (Bonbance 700, clamp(5rem, 20.5vw, 22rem), 0.8): the oversized name closing the footer, cut by the bottom edge. Once per page.
- **Headline** (BDO Grotesk 700, 1.25rem to 2.25rem by breakpoint, 1.08, -0.01em): station (product) names in the strip map; sub-section heads (1.5rem to 2.25rem).
- **Title** (BDO Grotesk 700, 1.125rem to 1.25rem, 1.08): nav wordmark (1.05rem), peek-card headers, station plate names.
- **Body** (BDO Grotesk 400, 1.0625rem, 1.625; 0.975rem on phones): station descriptions, capped at 62ch; bio at 1.125rem, 60ch. The hero now-line sets 1rem, 1.125rem from `sm`.
- **Lead** (BDO Grotesk 400, 1.0625rem on phones to 1.375rem from `sm`, 1.375): the hero positioning line in ink-2, max 36rem. The footer lead runs 1.125rem to 1.25rem at 1.625 in Board Dim, max 34rem.
- **Label** (BDO Grotesk, 0.8125rem): badges at 700 with 0.02em tracking; chips at 500. Board column heads and the footer contact-board labels 0.75rem 700, uppercase, 0.12em. Small meta (legend names, copyright) at 0.875rem. Route map station names (14.5 units) and milestone labels (14 units) set at 600; year axis labels at 500.

**Known deviations (off-ramp, carried by the build, not part of the ramp):** nav links at 0.95rem (Navbar); some strip meta at 0.975rem (Projects); hero buttons shrinking to 0.9rem on phones (Hero); the footer headline's 9vw slope against the hero's 10vw (Footer); the terminus label as a 22-unit SVG text (Footer). New surfaces snap to the ramp above rather than copy these.

### Named Rules
**The Tabular Timetable Rule.** Every date, year, count and switcher index sets in tabular numerals.

**The Poster Name Rule.** Bonbance is for names on boards (person, sections, lines, line roundels) and nothing smaller than about 1.6rem. Running text, labels and controls are always BDO Grotesk.

**The Board Caps Rule.** Uppercase is reserved for transit hardware: the LED display, the departure board's column heads and the footer contact board's field labels. No other uppercase labels.

## Layout

A single column centred at 80rem with 1rem side gutters. Sections open with 5rem of vertical space (6rem from `sm`) and divide with a rule hairline; the timetable sits on a full-width concourse-grey band.

The hero is a full first screen (min-height 100svh; 5.5rem top padding, 8rem from `sm`): from `md` a two-column grid (text, then the portrait station poster at 17rem, 21rem from `lg`) centred in the space, with the LED passenger display pinned along the bottom. The text runs name, positioning line, the now-line (DPS badge plus Dimensi Software, PT Dimensi Pratama Sukses from `sm`), then the ink and line buttons with the "available" dot. On phones the station board leads: a full-width 16:11 poster (1.75rem corners, the cutout portrait standing at the right, the ink name plate bottom-left) sits above the H1, and the LED closes the screen at a 3px pitch (4px from `sm`). There is no map in the hero.

The route map has its own section (`#map`) straight after the hero: a Display Section heading with a right-aligned hint (hidden on phones), the line legend, then the map. The map is a 1200-wide SVG drawn to a piecewise time scale (2019 to 2023 compressed, 2024 onward wide) and always fits its column; it never scrolls sideways. When its column is narrower than 720px it switches to compact mode: strokes, dots, rings and capsules scale by 2.2, station names and milestone labels drop out (each product is listed in the Lines section), year labels grow, the "you are here" tag moves below-left of the marker, and the peek card is disabled.

Each line is an article: a full-bleed platform sign, then a vertical strip map. Stops indent 4rem from the strip and are spaced 4rem apart (2.5rem on the compact origin line). A stop with screenshots splits 5fr text and 7fr image from `lg`; on phones the image comes first. Content-heavy split rows (timetable, stops) use the same 5:7 ratio. The timetable never scrolls sideways: on phones the From and Until columns hide and each row folds its dates under the role as "from → until" (a lucide arrow in Board Dim, the running end in amber). The skills legend stacks each group name above its chips on phones, sets them side by side (8.5rem name column) from `sm`, and runs two legend columns from `lg`.

The footer is a full-bleed night block: the terminus diagram (1200 by 190, edge to edge), then a 7fr / 5fr grid from `lg` (closing headline and pill left, LED and contact board right), a copyright bar on a white-at-10% hairline, and the wordmark cut by the bottom edge.

The nav floats as a glass capsule 0.75rem from the top, 3.5rem tall, max 62rem wide and centred; scroll padding is 5rem. The sticky LED next-station display docks under it (4.6rem from the top) only while the Lines section is in view.

## Elevation & Depth

Flat ground, lifted objects. The page, platform signs and strips are flat; objects you could pick up (the ink pill, the portrait panel, screenshots, the departure board) carry soft two-layer ambient shadows: a tight contact shadow plus a long, negatively spread drop. There are no hard offset shadows. Controls and the station peek card are glass: a translucent ground with backdrop blur and saturation, an inset hairline ring and a white top-edge highlight, so they stay legible over any line colour, screenshot or the map. Every glass surface has a dark variant (white at 6 to 12% over the night ground, dimmer highlights, deeper drops), and the nav falls back to a solid ground where backdrop-filter is unsupported.

### Shadow Vocabulary
- **Ink Glass** (white top sheen gradient over ink, plus `inset 0 1px 0 rgb(255 255 255 / 0.28), inset 0 -1px 0 rgb(0 0 0 / 0.25), 0 1px 2px rgb(0 0 0 / 0.12), 0 10px 24px -10px rgb(0 0 0 / 0.45)`): the primary button; brightens its highlight, deepens and lifts 1px on hover.
- **Clear Glass** (ground at 55%, blur 16px saturate 175%, `inset 0 0 0 1.5px` ink at 16%, `inset 0 1px 0` white at 75%, a soft blue-grey drop): the secondary button.
- **Glass Control** (ground at 50%, blur 14px saturate 175%, `inset 0 0 0 1px` ink at 12%, `inset 0 1px 0` white at 70%): round controls (theme, menu, EN/ID, back-to-top, inactive screenshot indexes); the ring strengthens to 22% on hover.
- **Glass Nav** (ground at 58%, blur 20px saturate 185%, top and bottom inset highlights, `0 14px 36px -14px rgb(15 25 40 / 0.28)`, plus a 1px specular rim: a 135 degree white gradient masked to the border): the nav capsule, the mobile menu and the station peek card (thinned, see Glass Peek).
- **Glass Pill** (ground at 70%, `inset 0 1px 0` white at 90%, `0 6px 14px -6px rgb(15 25 40 / 0.3)`): the active-section pill inside the nav.
- **Screenshot** (`0 1px 2px rgb(0 0 0 / 0.06), 0 18px 40px -28px rgb(0 0 0 / 0.45)`): product screenshots.
- **Glass Peek** (Glass Nav with its rim, the ground thinned to 48%, blur 22px saturate 190%; dark: #1a1f27 at 46%): the station preview floating over the route map, the most see-through glass so the map stays readable behind it.
- **Board** (inset 1px white at 6%, plus `0 30px 60px -30px rgb(0 0 0 / 0.55)`): the departure board.
- **LED Bezel** (inset 1px white at 6%, inset `0 2px 10px rgb(0 0 0 / 0.6)`): recessed LED display.
- **Poster** (`0 2px 4px rgb(0 0 0 / 0.08), 0 30px 60px -28px rgb(10 40 80 / 0.6)`): the hero portrait poster; blue-tinted drop (the phone poster uses a shorter `0 24px 44px -26px` drop).
- **Night Pill** (white-to-#e4e7ea gradient, plus `inset 0 1px 0 rgb(255 255 255), inset 0 -1px 0 rgb(0 0 0 / 0.12), 0 1px 2px rgb(0 0 0 / 0.3), 0 14px 30px -12px rgb(0 0 0 / 0.8)`): the light LinkedIn pill on the night block.

### Named Rules
**The Lifted Object Rule.** Shadows belong to things that sit on the platform, never to the ground or to a line's own signage.

**The One Glass Rule.** Every control is glass from one family: ink glass for the one primary action, clear glass for secondary actions and round controls, the glass capsule for navigation. New controls join that family rather than adding a flat or outlined variant.

## Shapes

Everything interactive is a full pill (999px): buttons, badges, chips, nav links, the nav capsule itself, toggles, icon buttons, the "you are here" tag. Map geometry is round-capped and round-joined; branches leave the trunk at exactly 45 degrees, and labels above a line rotate -45 degrees. Station dots are circles filled with the ground and ringed in ink (4px on the map, 5px on the strip); interchanges are ground-filled capsules ringed in ink; an ended line closes with a perpendicular terminus bar, a running line fades out or continues as a dotted extension past "now". In the terminus footer, running lines bend at 45 degrees into one night-ink track ending at a capsule terminal; ended lines stop on terminus bars. Containers soften with size: 0.75rem for the LED display, 1rem for screenshots, the peek card's screenshot, the poster's name plate and the footer contact board, 1.25rem for the board, 1.4rem for the peek card itself (concentric around its 1rem screenshot inside 0.375rem of padding), 1.75rem for the phone station poster and the mobile menu panel, 2rem for the portrait poster.

## Components

### Buttons
Glass pills with a physical press; one family.
- **Shape:** full pill, 3.25rem tall, 1.4rem side padding (2.75rem tall on phones).
- **Primary (ink glass):** ink fill under a white top sheen (18% fading out by 55%), on-ink text, lucide icon at 1.25rem, Ink Glass shadow. Hover lifts 1px and deepens the shadow; active presses down 1px and scales to 0.98.
- **Line (clear glass):** translucent ground with backdrop blur, ink text, a 1.5px ink hairline ring and a lit top edge; hover thickens the ground to 85% and lifts 1px. Dark variant: white at 6% (10% on hover) with a white 14% ring.
- **Night pill:** on the night block the primary becomes a light pill (white to #e4e7ea gradient, night text, inset highlight, Night Pill shadow); hover lifts 1px.
- **Glass round controls:** 2.5rem circles (theme, menu) and the EN/ID segmented pill (a sliding ink thumb marks the language), all Glass Control.
- **Back-to-top:** a 3rem Glass Control circle, bottom-right at 1.25rem (1.5rem from `sm`), appearing after 600px of scroll.
- **Screenshot switcher:** 2.25rem tabular index circles; the active index fills with the line colour in on-line text, the rest are Glass Control in ink-2.
- **Text links:** semibold, 2px underline (line colour inside a line) thickening to 3px on hover.

### Line badges
A solid pill in the line's colour with the line code (DPS, NVK, DMS, W3, UR) in on-line text, 1.75rem tall, at least 2.5rem wide. On the departure board, the ink origin line inverts to a board-paper pill with board-night text.

### Chips
Tech chips are outline pills: 1.5px rule border, ink-2 text, 1.75rem tall, carrying the real brand SVG at 1rem height (inverted per theme where a logo is mono). Never filled, never coloured by line.

### Navigation
A floating glass capsule (Glass Nav with its specular rim), 3.5rem tall, max 62rem, 0.75rem from the top. Left: an ink "NA" roundel and the name in title type (from `sm`). Centre (from `md`): Map, Lines, Timetable, Contact as pill links in 600 weight, ink-2 turning ink on hover; a scrollspy marks the section crossing 40% of the viewport, and a Glass Pill springs to it (shared layout, stiffness 420, damping 36; instant under reduced motion). Right: the EN/ID segmented pill, theme and menu glass buttons. The mobile menu is a glass panel (1.75rem corners) that drops in under the capsule, and is itself a strip map: ink-ringed dots joined by an ink bar (the active section's dot filled), items in 1.5rem headline type.

The theme lives under the "theme" key with light as the default, applied before first paint. Switching grows the new theme as a circle out of the theme button (View Transition, 700ms, the system ease-out); browsers without View Transitions get a 400ms colour cross-fade, and reduced motion switches instantly.

### Scroll Choreography
One hook set up once by the app plus one block of CSS, all scoped under a motion permission class that the head script puts on the root element before first paint unless the visitor prefers reduced motion. Elements opt in with a reveal kind and are revealed once, the first time they enter the viewport (bottom margin -12%), never re-hidden.
- **Wipe:** a board name unveiled from the left by clip-path (1.1s), with slight overscan so ascenders and descenders are not cropped. Section titles, platform line names and the footer headline. A fully clipped element has no intersection area, so wipes are watched through their parent.
- **Pop:** the line roundel rolls in (from scale 0.4 and -120 degrees, 900ms).
- **Flap:** departure-board rows flip down, staggered 90ms by row index.
- **Draw:** the footer terminus strokes its lines in on staggered delays; terminus bars and the terminal capsule arrive late.
- **Rail:** strip rails fill with scroll and reach their stops (see Platform Sign and Strip Map). The route map has its own on-view draw.

**The Final State Rule.** Every choreographed element is authored in its final, readable state; motion only adds a start state under the motion permission class. Without it (reduced motion, or no script) nothing is hidden, clipped or waiting.

### Route Map (signature)
The time-scaled SVG network. Tracks are 9 units thick, separated from crossings by a 15-unit ground-coloured casing. The map waits undrawn until 35% of it is on screen, then draws once: tracks draw in (1.6s, staggered per line), stops fade in after them, and a two-car train in the line colour runs each live line once (3.2s, started by script 1.7s plus the line's stagger after the draw) and stops at "now". The SVG is a labelled group (role group with an aria-label, no title tooltip). Hovering or focusing a line (or its legend item, or any station) solos it: other lines drop to 12% opacity and the interchange capsules (one group) dim to 25%. Station dots grow from 8 to 10 with a 5-unit ring on hover or focus, and the focused name underlines. The latest stop on a running line fills with the line colour. "You are here" is an ink capsule tag over an ink dot with a Dimensi pulse. On hover-capable devices, outside compact mode, a glass peek card (Glass Peek, 280px wide, 1.4rem corners, 0.375rem padding around a 1rem-cornered screenshot, then badge, name in title type and a two-line description) follows the station.

### Platform Sign and Strip Map (signature)
Each line opens with a full-bleed platform sign in the line colour: a 4.5rem on-line roundel lettered in Bonbance with the line code, the line name in Display Platform type, and the org, role, period and station count. Below, a 0.625rem rounded strip runs down the left; each product is a stop with a 1.875rem ground dot ringed 5px in ink. A running line's strip fades out at the bottom; an ended line closes with a terminus bar.

With motion the strip is drawn as you read. The rail shows as a ghost at 20% opacity, and a filled rail in the line colour grows down over it (scaleY of the scroll progress) against a reading line at 62% of the viewport height. When the fill passes a stop's dot the stop is reached: the dot grows from 0.62 to full size and its ring darkens from ink at 28% to full ink (the latest stop on a running line fills only on arrival), its text slides in 1.25rem from the rail side, and its screenshot opens with a clip-path wipe from the rail (1s, 260ms behind). An ended line's terminus bar fades in as the fill reaches the end. On the platform sign the roundel rolls in and the line name wipes in.

### Departure Board and LED Display (signature)
The timetable is a board-night table with amber column heads, line badges, board-paper org names, board-dim roles and tabular dates; "now" is amber with an amber dot. With motion, rows flip down like a split-flap display (from -80 degrees about their top edge, 700ms), staggered 90ms per row. The LED display is a canvas dot matrix (5 by 7 glyphs, 9 rows, amber dots with soft glow on dim amber unlit dots) in a recessed warm-black bezel. It closes the hero at a 4px dot pitch (3px on phones), and runs at a finer 3px pitch as the sticky next-station display through the Lines section and above the footer contact board. It is static and centred when the message fits, scrolls otherwise, and never scrolls under reduced motion.

### Hero station poster
The cutout portrait stands on a Dimensi-blue poster (4:5, 2rem corners, Poster shadow), scaled up from the bottom edge. An ink name plate sits inside the bottom edge: DPS badge, "Tangerang" in title type, "Indonesia" at 0.75rem.

### Night Terminus (footer, signature)
A night block in both themes. The terminus diagram opens it: the Dimensi and Navitek lines (still running) bend at 45 degrees into the night-ink person-line and arrive at a "Your team" capsule terminal (night fill, 7-unit night-ink ring, label below); the Dharmais and Web3 lines (ended) stop short on terminus bars. Below: the closing headline in Display, the lead in Board Dim, and the light night pill to LinkedIn; beside them the footer LED and a departure-board contact list (white-at-10% hairlines, 1rem corners, 2.25rem icon discs, amber uppercase field labels over semibold values, an arrow that nudges up-right on hover). Then a copyright bar in Board Dim and the oversized wordmark in night ink, cut by the bottom edge. With motion, the diagram draws when it comes into view: each line strokes in (1.7s) on its own stagger, then the terminus bars and the "Your team" capsule arrive late (1.4s), scaling up from 0.6; the closing headline wipes in.

## Do's and Don'ts

### Do:
- **Do** set a line's colour once, as `--line` on its container, and let badges, strips, dots, platform signs and underlines read it.
- **Do** keep station dots ground-filled with ink rings; fill only the latest stop on a running line.
- **Do** bend lines at 45 degrees only, with round caps and joins.
- **Do** set every date and count in tabular numerals.
- **Do** make every control a full pill (official store badges keep their own artwork), with the 3px Dimensi blue focus ring at 3px offset.
- **Do** let the route map and the timetable fit their column; below 720px the map switches to compact mode (2.2x strokes, names hidden) and on phones the timetable folds its dates under the role, instead of scrolling sideways.
- **Do** build every new control from the glass family (ink glass, clear glass, Glass Control), with its dark variant.
- **Do** gate draw-in, trains, pulse, LED scrolling, the nav pill spring, the circular theme reveal and all scroll choreography behind reduced motion; scroll start states exist only under the motion permission class, so the default is the final state.
- **Do** build new scroll reveals from the existing kinds (wipe, pop, flap, draw, rail), revealed once on entry.
- **Do** use the real theSVG brand logo on tech chips.

### Don't:
- **Don't** use a line colour for anything that isn't that line, and don't add a line colour without a real job behind it.
- **Don't** use amber anywhere except the LED displays, the departure board and the night terminus footer.
- **Don't** set running text, labels or controls in Bonbance.
- **Don't** add uppercase tracked labels outside the board and LED hardware.
- **Don't** put shadows on the ground, platform signs or strips, and don't use hard offset shadows.
- **Don't** fall back to same-size project cards or a skills bento; products are stations on their line.
