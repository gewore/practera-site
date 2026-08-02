---
name: Practera
description: A managed patient-contact system for dental and medical practices — phone answering, reactivation, reviews and booking in one glassy, always-on console.
colors:
  deep-harbor: "#0A1A2B"
  tidal-navy: "#102B42"
  coastal-teal: "#2FBBAD"
  deep-tide-teal: "#1E8B80"
  horizon-blue: "#3D82DC"
  deep-horizon-blue: "#2A62AC"
  sea-mist: "#F2F6FA"
  white: "#FFFFFF"
  slate-fog: "#56697D"
  pale-fog: "#8598AB"
  mist-line: "#DCE5EE"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(36px, 5.4vw, 66px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.8vw, 44px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(23px, 2.6vw, 30px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11.5px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  sm: "11px"
  md: "16px"
  lg: "20px"
  xl: "22px"
  pill: "999px"
spacing:
  sm: "20px"
  md: "28px"
  lg: "56px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "linear-gradient(180deg, {colors.coastal-teal} 0%, {colors.deep-tide-teal} 100%)"
    textColor: "#04211E"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "14px 26px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,.07)"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "14px 26px"
  button-dark:
    backgroundColor: "{colors.deep-harbor}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "14px 26px"
  card-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.slate-fog}"
    rounded: "{rounded.md}"
    padding: "24px"
  card-dark:
    backgroundColor: "linear-gradient(180deg, {colors.deep-harbor} 0%, {colors.tidal-navy} 100%)"
    textColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "40px"
---

# Design System: Practera

## Overview

**Creative North Star: "Coastal Clinical"**

Practera reads as calm, trustworthy water-and-horizon calm applied to a healthcare-adjacent B2B tool: deep navy depths (`--ink`, `--ink-2`) grounding every dark section, cut through with a single teal signal color that means "this is live and working." The palette never goes sterile clinical-white — light sections sit on a soft sea-mist paper, never stark `#FFF` alone, and every dark capsule (hero, booking, demo form) carries a radial wash of teal and horizon-blue glow instead of a flat fill, like light catching water at dusk.

The voice is warm and reassuring rather than a bare ops-console: mono-font labels, live message threads and animated stat panels exist to *prove* the service works, but the surrounding copy and the founder section carry the human, done-for-you promise. This is a system built to be believed by a practice owner who is busy and skeptical, not to impress a developer — confidence is earned through visible proof (a real call, a real review request, a live counter), not through visual noise.

**Key Characteristics:**
- Deep navy-to-teal gradient capsules alternate with soft sea-mist/white sections down the page, giving the scroll a tide-like rhythm.
- One accent color (teal) carries every "this is real / this is working" signal — animated pulse dots, progress fills, checkmarks, the primary CTA.
- Mono type (JetBrains Mono) is reserved for proof and metadata — labels, timestamps, eyebrows, fine print — never for headlines or body copy.
- Nothing has a hard corner; every surface from buttons to full page sections is rounded or pill-shaped.
- Glass (backdrop-filter blur) and soft ambient shadow do the elevation work; there are no flat drop shadows or hard borders.

## Colors

A restrained two-hue palette — navy for depth and trust, teal for signal — kept honest by a warm off-white neutral instead of stark white.

### Primary
- **Coastal Teal** (`#2FBBAD`): The single "this is working" signal. Primary CTA gradient, live-pulse dots, checkmarks, progress fills, focus rings, the "us" column in the comparison table. Always paired with **Deep Tide Teal** (`#1E8B80`) as its gradient/hover partner.

### Secondary
- **Horizon Blue** (`#3D82DC`): Never a standalone action color. Appears only alongside teal — in radial glow washes, gradient accents (stat progress bars, icon dots), and the hero's ambient light. Paired with **Deep Horizon Blue** (`#2A62AC`) as its gradient partner.

### Neutral
- **Deep Harbor** (`#0A1A2B`): The dominant dark surface — hero, booking capsule, demo form, footer, price card, dark buttons. Site's true background color for "the system at work" moments.
- **Tidal Navy** (`#102B42`): Gradient companion to Deep Harbor; every dark capsule is a two-stop navy gradient, never a flat fill.
- **Sea Mist** (`#F2F6FA`): The default light page background — a soft off-white, not stark white.
- **White** (`#FFFFFF`): Reserved for card and panel surfaces sitting *on* Sea Mist (feature art, bundle cards), giving them a subtle lift.
- **Slate Fog** (`#56697D`): Body copy on light surfaces.
- **Pale Fog** (`#8598AB`): Secondary/muted text and labels on light surfaces (captions, "no" states, fine print).
- **Mist Line** (`#DCE5EE`): The one hairline border color on light surfaces; on dark surfaces the equivalent is `rgba(255,255,255,.1–.16)`.

### Named Rules
**The One Signal Rule.** Teal is the only color allowed to mean "this is real, live, or correct." It never appears as decoration — every teal pixel is a CTA, a proof point, or a live indicator. Blue never carries this meaning on its own; it only ever appears mixed with teal as ambient glow or a two-color gradient.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif fallback)
**Body Font:** Instrument Sans (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** A bold, slightly rounded grotesque for headlines and big numbers, paired with a clean humanist sans for reading copy and a mono face for anything that reads as data or metadata. The pairing feels like a clinical intake report crossed with a modern SaaS dashboard — precise enough to be believed, warm enough to trust.

### Hierarchy
- **Display** (700, `clamp(36px, 5.4vw, 66px)`, line-height 1.08, tracking -0.03em): Hero headline only.
- **Headline** (700, `clamp(28px, 3.8vw, 44px)`, line-height 1.08, tracking -0.03em): Section `.h2` titles.
- **Title** (700, `clamp(23px, 2.6vw, 30px)`, line-height 1.08, tracking -0.02em): Feature subheads, card headers (`.feat h3`).
- **Big Figure** (700–800, 27–62px, Bricolage Grotesque, tabular numerals where numeric): Stat callouts, review counts, price figures, calculator output — the display font used for standalone numbers, not just headlines.
- **Body** (400, 15.5–18px, line-height 1.55–1.72, Instrument Sans): Paragraph copy; lede text runs up to ~56–68ch max width.
- **Label** (500, 10–12px, letter-spacing 0.06–0.13em, uppercase, JetBrains Mono): Eyebrows, tags, timestamps, fine print, form field labels.

### Named Rules
**The Mono-Means-Metadata Rule.** JetBrains Mono is used exclusively for labels, timestamps, eyebrows and fine print — anything that reads as system output or proof, never for a headline or a sentence of body copy.

## Layout

Content sits in a single `.wrap` container, `max-width: 1140px`, `padding: 0 28px` (20px under 600px) — no sidebar, no asymmetric grid; the page is a single scrolling column of alternating full-bleed sections. Sections use a generous `96px` vertical rhythm (`64px` under 640px), each separated by either a `1px` `Mist Line` hairline (light-on-light) or a hard color change into a navy gradient capsule (no border, the color shift is the divider).

Internal layouts are simple two-up or three-up grids that collapse to one column on mobile: feature rows (`1fr 1fr` → 1 column under 880px, alternating image side via `.flip`), the bundle grid (3 → 2 → 1 column), and the calculator (`1fr 380px` → 1 column under 840px). Nothing uses more than a 2–3 column grid; density stays comfortable, not dashboard-dense, matching the "console proof, not a spreadsheet" character.

Mobile carries a fixed bottom action dock (`.dock`) below 700px so the primary CTA is always reachable — the one persistent-chrome exception to the otherwise single-column scroll.

## Elevation & Depth

Layered and atmospheric, never flat and never hard-edged. Dark surfaces (nav, mobile dock, form, floating stat panels) use `backdrop-filter: blur(14px)` glass over the navy gradient, so content behind shows through softly. Every raised surface — cards, the price panel, the phone/stat mockups — carries a large-radius, low-opacity ambient shadow (`0 22–34px 44–66px -28..-34px rgba(...)`), spreading light rather than casting a hard line. Key dark sections additionally sit on radial gradient glow washes (teal and horizon-blue at low opacity, positioned off-center) that behave like ambient light rather than a decorative background image.

### Shadow Vocabulary
- **Ambient card lift** (`0 1px 2px rgba(10,26,43,.04), 0 22px 44px -28px rgba(10,26,43,.28)`): Light-surface cards (feature art, bundle cards, who card) — a whisper-thin contact shadow plus a soft, wide ambient spread.
- **Deep float** (`0 30px 60px -28..34px rgba(0,0,0,.55–.7)`): Dark-surface floating panels — phone mockup, live stat panel, price card, booking shell. Reads as hovering above the navy gradient behind it.
- **CTA glow** (`0 8px 22px -10px rgba(47,187,173,.75)`): Primary button only — a tinted teal shadow instead of neutral black, so the CTA reads as emitting its own light.

### Named Rules
**The Glow-Not-Line Rule.** Depth and separation come from blur, glow and soft shadow, never from a hard drop shadow or a heavy stroke. The one exception is the `1px` hairline (`Mist Line` light / `rgba(255,255,255,.1–.16)` dark) used for structural dividers, never for elevation.

## Shapes

Rounded-first, with no sharp corners anywhere in the system. Buttons and form inputs use `11–12px` radius; cards and panels scale from `13px` (small stat chips) through `16px` (bundle cards, comparison table) up to `20–22px` (feature art, price card, calculator shell, booking shell). Tags, pills and badges (the hero tag, nav pill states) are fully rounded at `999px`. Icon badges and status dots are always circular. Borders throughout are hairline `1px` strokes, never heavy — structure comes from radius and shadow, not from stroke weight.

### Named Rules
**The Rounded-First Rule.** Every visible container — from a 6px status dot to a full-bleed page section — resolves to a curve. A square corner anywhere in new work is a bug, not a style choice.

## Components

### Buttons
- **Shape:** 12px radius, pill-adjacent but not fully rounded (`.btn`).
- **Primary:** Teal gradient (`{colors.coastal-teal}` → `{colors.deep-tide-teal}`), near-black-teal text (`#04211E`) for contrast, inset highlight + tinted teal glow shadow. Lifts 1px and deepens its glow on hover.
- **Ghost:** Translucent white fill (`rgba(255,255,255,.07)`) with a hairline border, used only on dark backgrounds (nav, hero) as the secondary action.
- **Dark:** Solid `Deep Harbor` fill with white text, used for secondary actions on light backgrounds.
- **Focus:** 2px teal outline, 3px offset, on every variant.

### Cards / Containers
- **Corner Style:** 16px (bundle/comparison cards) to 22px (price card, calculator shell).
- **Background:** White-to-sea-mist gradient on light cards; navy gradient on dark cards (price card, stat panel).
- **Shadow Strategy:** Ambient card lift (light) or Deep float (dark) — see Elevation.
- **Border:** 1px Mist Line hairline on light cards; none on dark cards (the shadow alone separates them).
- **Internal Padding:** 24px (standard cards) to 40px (price card, who card).

### Inputs / Fields
- **Style:** Translucent white fill (`rgba(255,255,255,.07)`) with a hairline border, always on the dark demo-form surface; 11px radius.
- **Focus:** Border shifts to teal, fill brightens slightly (`rgba(255,255,255,.1)`) — no glow ring, the color shift alone signals focus.

### Navigation
- **Style:** Sticky, glass-blurred, transparent-to-navy on scroll (`.nav.stuck` solidifies the background and tightens padding once content scrolls beneath it — the one state-driven color/size change in the system). Links are translucent white, going solid white on hover; no underline.
- **Mobile:** Nav links collapse away under 860px; a fixed bottom action dock takes over as the primary navigation/CTA surface under 700px.

### Live Proof Displays (signature)
The phone-mockup message thread, the live stat panel, the review-counter and reactivation-dot art, and the calculator output are the system's signature device: staged CSS-only animation (fading/sliding bubbles, filling bars, popping stars, dot-grid fills) that makes a static page feel like it's showing a real, currently-running system. These always live inside a dark glass or gradient container and always use mono type for their metadata (timestamps, labels) and display type for their headline numbers.

## Do's and Don'ts

### Do:
- **Do** reserve teal for anything that means "this is live, correct, or the primary action" (The One Signal Rule).
- **Do** build every dark section as a two-stop navy gradient (`Deep Harbor` → `Tidal Navy`) plus a radial teal/blue glow wash, never a flat fill.
- **Do** set mono type only on labels, timestamps, eyebrows and fine print (The Mono-Means-Metadata Rule).
- **Do** round every corner — 11px minimum on interactive elements, up to 22px on large panels, 999px on pills (The Rounded-First Rule).
- **Do** use blur + soft ambient shadow for elevation, never a hard drop shadow (The Glow-Not-Line Rule).

### Don't:
- **Don't** introduce a second accent color as an alternate "primary" — blue only ever supports teal, never replaces it.
- **Don't** use stark pure-white (`#FFFFFF`) as a page background; the default light surface is Sea Mist, with white reserved for cards that need to lift off it.
- **Don't** add a square corner, heavy stroke, or flat neutral-gray drop shadow anywhere; every existing surface resolves to radius + glow.
