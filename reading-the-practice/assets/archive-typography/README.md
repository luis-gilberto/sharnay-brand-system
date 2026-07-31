# Archive Typography System · v1

**Status:** Approved · production-ready · visually locked Jul 30, 2026 · production freeze  
**Effective:** July 29, 2026  
**Scope:** El Retrato · Return Plate composition only  

**In-app chrome (Archive only):** quieter transparent bars, softer brand / time / progress / nav; controls usable with hover lift. Do not extend this intensity treatment to other stages. Do not reopen leaf / fragment typography / plate composition.

**Freeze gate:** No Archive / Return Plate design changes without a documented QA failure. Preference and polish are not QA failures. Part of the Jul 30, 2026 Portrait production freeze (Archive · Collection · Exhibition · opening letter · closing letter).

---

## What this is

A responsive typographic system for rendering a single participant fragment on the Return Plate. The system's job is not visual consistency; it is **emotional consistency**. A 25-character fragment and a 180-character fragment must produce the same feeling: returned, present, worthy of attention, not exhibited.

The system does not design fragments. It **presents the fragment at the scale its length requires to preserve the feeling of return**.

---

## The emotional anchor

State **B** — 32px EB Garamond regular, line-height 1.28, tracking −0.002em, full measure. Approved as the calibration reference. Every other preset is tuned to produce this same feeling for a different length band.

---

## The five presets

| Preset | Length range (chars) | Font size | Line height | Letter-spacing | Max measure |
|---|---|---|---|---|---|
| **A₀** Micro | 0–21 | 52px | 1.06 | −0.012em | ~24ch |
| **A** Short | 22–48 | 42px | 1.14 | −0.006em | ~28ch |
| **B** Medium (anchor) | 49–120 | 32px | 1.28 | −0.002em | ~30ch |
| **C** Long | 121–150 | 23px | 1.4 | +0.001em | ~42ch |
| **C₁** Dense | 151–180 | 20px | 1.5 | +0.002em | ~46ch |

Above 180 characters, or any fragment that fails the hard rule (see below), the system **must reject before render**. Never compress. Never truncate. Never hyphenate.

---

## Invariants (do not touch)

- Room: dark radial background, identical for all presets
- Paper: `#F6F2EB`, identical for all presets
- Paper margins: identical for all presets
- Fragment anchor: left 12% · bottom 12% — the last line of the fragment always sits at the same vertical position, regardless of preset
- Typeface: EB Garamond regular 400 — no other weight, no italic, no other family
- Text color: `#1F1C18` — never pure black
- No metadata · no custody language · no labels · no ARCHIVO title
- No emphasis within the sentence (no bold, no italic, no color shift, no size change on individual words)
- No punctuation changes · no wording changes · no ellipsis insertion
- Line breaks are natural — never `<br>`, never forced, never hyphenation

The only variables that adapt per preset: **font-size, line-height, letter-spacing, max-width**.

---

## The hard rule (non-negotiable)

If any character is cut off, cropped, hyphenated, or otherwise unreadable in the target preset, the setting is **illegal for Archive**.

- Never truncate.
- Never hyphenate.
- Never crop for aesthetic effect.
- Never adjust composition to make the fragment fit.

The only legal response to overflow is: **shrink font-size in 1px steps until the fragment fits completely**. If a fragment cannot fit at the minimum viable size (16px), it is rejected before render.

Fragment integrity precedes visual calibration. Always.

---

## Length routing logic

```
0 ≤ n ≤ 21   → A₀
22 ≤ n ≤ 48  → A
49 ≤ n ≤ 120 → B
121 ≤ n ≤ 150 → C
151 ≤ n ≤ 180 → C₁
n > 180       → REJECT
```

Character count includes spaces and punctuation. Uses JavaScript `.length` on the trimmed fragment.

---

## Files in this handoff

- `archive-typography.css` — the production CSS module. Custom properties, presets, anchor logic. Import once at the app root.
- `archive-typography.js` — the length resolver. Exports `resolvePreset(fragment)` and `renderFragment(fragment, container)`. Zero dependencies.
- `archive-typography.test.js` — behavioral test suite. Covers every boundary and every rejection case.
- `archive-typography-reference.html` — a static reference page rendering all 5 presets side-by-side with representative fragments. Use for QA and visual regression.

---

## How to use it

```html
<link rel="stylesheet" href="./archive-typography.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400&display=swap" rel="stylesheet">

<!-- The room + the leaf -->
<div class="archive-stage">
  <article class="archive-leaf" data-preset="">
    <p class="archive-fragment"></p>
  </article>
</div>

<script type="module">
  import { renderFragment } from './archive-typography.js';

  const container = document.querySelector('.archive-leaf');
  const result = renderFragment("El fragmento del participante.", container);

  if (!result.ok) {
    // Handle rejection. NEVER render a rejected fragment.
    // Common cases: too long, contains illegal chars, empty after trim.
    console.error('Rejected:', result.reason);
  }
</script>
```

---

## Edge cases documented so far

*(Populated during implementation. Any behavior discovered in production that the system does not gracefully handle should be added here for future refinement.)*

- **Empty fragments** — rejected before render.
- **Fragments consisting only of whitespace** — rejected before render.
- **Fragments with a single token longer than the measure** — the resolver drops one preset step (e.g. A → A₀) rather than let the token overflow. If no preset accommodates, rejected.
- **Fragments with mixed script (Latin + emoji, Latin + CJK)** — untested. If encountered, log and flag for design review before allowing.

---

## What the system does not do

- It does not decide whether a fragment is worth showing. That is intake's job.
- It does not detect sensitive content. That is moderation's job.
- It does not compute a "preview" of the fragment for other surfaces. It renders the plate.
- It does not animate. State transitions belong to the containing view, not to typography.

---

## Versioning

Any change to preset values, length boundaries, or the anchor logic constitutes a **major version bump** (v1 → v2). Micro-adjustments to letter-spacing or line-height for legibility on a new script or platform are minor (v1.0 → v1.1).

All changes documented against the emotional anchor: does the change preserve the feeling of "returned, present, worthy of attention, not exhibited"? If yes, minor. If no, major — and the anchor itself must be re-validated.
