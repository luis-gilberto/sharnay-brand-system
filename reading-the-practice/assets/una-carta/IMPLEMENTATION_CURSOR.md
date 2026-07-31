# Cursor · Implementation brief
## Una carta · Screen 01 of Reading the Practice

> Paste this file into Cursor as the primary instruction.
> The source of truth is `una-carta.html`.
> Do not redesign, do not reinterpret, do not "improve" restraint.

---

## Objective

Integrate the letter screen into the Reading the Practice codebase. The screen is fully specified. This is the first screen of the intake and establishes visual precedents for every subsequent screen (Rooms, Questions, Thresholds, Archive Return Plate, Collection).

---

## Required reading (in this exact order, before you write any code)

1. `una-carta.html` — the design source of truth. Study it. Do not skip.
2. `una-carta-tokens.css` — the tokens + component styles ready for framework integration.
3. This file — the directive brief.

If any file is missing, stop and ask.

---

## The Portrait system rule (applies to every screen you'll build after this one)

**No scrolling. Anywhere. Ever.**

This is not an ergonomic preference. It is a **single-viewport rule** (non-negotiable layout rule / viewport integrity rule). Every screen in the Portrait experience must fit in a single viewport at every supported viewport size, from 320×568 (small phone) to 2560×1440 (large desktop).

Implementation:
```css
html, body { height: 100%; overflow: hidden; }
.app       { height: 100vh; overflow: hidden; }
.stage     { min-height: 0; overflow: hidden; }
```

`min-height: 0` on grid containers is the critical line. Without it, CSS grid children pretend to expand to `min-content` and force a scrollbar.

**If content doesn't fit, use height-based media queries to compress rhythm — NEVER add scroll.**

---

## The DOM structure (non-negotiable layout rule)

```html
<div class="app">
  <header class="chrome-top" style="--progress: 3%">
    <div class="chrome-top__row">
      <a class="brand" href="#" aria-label="Sharnay Photography">
        <img class="brand__lockup" src="{cloudinary logo url}" alt="Sharnay Photography">
      </a>
      <div class="chrome-top__place">Una carta</div>
    </div>
    <div class="chrome-top__rule" aria-hidden="true"></div>
  </header>

  <main class="stage">
    <section class="letter">
      <p class="letter__eyebrow">Una carta</p>
      <h1 class="letter__greeting">Hola chamakis,</h1>
      <div class="letter__body">
        <p>Gracias por confiarme tu práctica.</p>
        <!-- ... seven paragraphs total ... -->
      </div>
      <div class="letter__signature">
        <p class="letter__signature-name">Luis Gilberto</p>
        <span class="letter__signature-tag">LG Studio</span>
      </div>
    </section>

    <aside class="album">
      <svg class="album__hex" viewBox="0 0 340 340" aria-hidden="true">
        <polygon points="170,20 296,90 296,250 170,320 44,250 44,90"
                 fill="none" stroke="#0d0d0d" stroke-width="1" opacity="0.55"/>
      </svg>
      <div class="album__photos">
        <figure class="photo">
          <div class="photo__frame">
            <img src="{cloudinary luis url}" alt="Luis, infancia" loading="eager">
          </div>
          <figcaption class="photo__caption">
            <span>Luis</span><span class="dot">·</span><span class="year">1985</span>
          </figcaption>
        </figure>
        <figure class="photo"><!-- Erika, 1988 --></figure>
      </div>
      <div class="album__note">
        <p>Mucho antes de que esto fuera el trabajo de alguno de los dos.</p>
      </div>
    </aside>
  </main>

  <footer class="chrome-bottom"><!-- ... --></footer>
</div>
```

- Class names are **locked**. Do not rename.
- The `--progress` custom property on `.chrome-top` drives the hairline width. Screen 01 = `3%`.
- `data-preset` etc are for Archive typography, not here.

---

## Typography · three families, no substitutes

| Family | Purpose | Weight |
|---|---|---|
| **Cormorant Garamond** | Body serif · greeting fallback | 400 only |
| **IBM Plex Mono** | Eyebrows · captions · CTA · nav | 400 · 500 |
| **Meddon** | Greeting · signature (script) | 400 |

**Meddon must not silently fall back to Cormorant italic.**
- Preload strategy: `<link rel="preload">` and delay mount until `document.fonts.ready`.
- Or self-host with `font-display: block` (not `swap`).
- If Meddon fails to load, block the render — do not FOUT to Cormorant italic. The greeting is the emotional anchor of the screen; the wrong font breaks it.

---

## Cloudinary asset URLs (verbatim)

Do not modify the transforms.

**Logo (Sharnay Photography lockup):**
`https://res.cloudinary.com/dogtoagya/image/upload/v1784930337/SharnayPhotography_white_logo_jeww77.png`
- Ships as pure white PNG.
- Apply `filter: brightness(0) saturate(100%)` in light-chrome contexts (this screen).
- In dark-chrome contexts (Archive Return Plate, film separators) leave unfiltered.

**Luis, 1985:**
`https://res.cloudinary.com/dogtoagya/image/upload/c_thumb,g_face,z_0.72,ar_4:5,w_760/e_contrast:14/e_grayscale/e_tint:100:3d3327:f5f1e8/q_auto:good/v1785229771/photo_2026-07-28_02-06-47_o0guyw.jpg`

**Erika, 1988:**
`https://res.cloudinary.com/dogtoagya/image/upload/c_thumb,g_face,z_0.62,ar_4:5,w_760/e_brightness:-13/e_contrast:28/e_grayscale/e_tint:100:3d3327:f5f1e8/q_auto:good/v1785229771/photo_2026-07-28_02-06-54_ca2aaq.jpg`

**Do not** strip the `e_grayscale + e_tint:100:3d3327:f5f1e8` transforms. These are what give the photos their sepia tone that matches the paper texture.

---

## Paper texture (do not replace with a raster)

The body background is a **CSS-only multi-layer texture**. Do not swap for a PNG/JPG paper texture — three reasons:

1. Zero additional asset weight.
2. Resolution-independent (works on retina, 4K, print).
3. Editable in-brand — the token values (fibre color, mottle opacity, warm/cool drift) are all CSS custom properties.

The recipe is in `una-carta-tokens.css` under `.paper-surface`. Preserve every layer.

---

## Responsive breakpoints (each rebuilds the layout, does not just shrink it)

| Range | Layout |
|---|---|
| ≥ 1180px | Editorial 2-column: letter left, album right (photos stacked vertically), hexagon ghost visible. |
| 860–1180px | Compressed 2-column: album column narrows to 240px, gaps compress. |
| ≤ 860px | Single column: letter takes full width, album collapses to a horizontal band below (photos side-by-side + note with left border rule). |
| ≤ 560px | Mobile: chrome minifies (place label hidden top-right), photos shrink to 84px, dividers removed from bottom nav. |

Do NOT try to serve all sizes with one layout. Do NOT vertically stack the two photos on mobile — they must remain side-by-side.

Height-based media queries also exist: `≤820h` and `≤700h` compress vertical rhythm without changing layout structure. These are safety nets for laptops with tall browser chrome.

---

## What Cursor must NOT modify

- Preset values in `una-carta-tokens.css`.
- Class names in the DOM contract.
- Cloudinary URLs.
- The dates: **LUIS · 1985** and **ERIKA · 1988**. These are the sender's and recipient's real birth years.
- The paper texture recipe.
- The `-0.3deg` / `-0.4deg` rotations on greeting/signature.
- The amber accent color `#C8A96A`.
- The italic caption's rule anchor (`::before` above at desktop, `border-left` beside at ≤860px).
- The `--progress: 3%` value on the chrome hairline.

If a stakeholder asks to change any of the above, refuse and escalate.

---

## What Cursor MAY modify

- Import paths (adapt to module system).
- Framework component API (props, event names).
- Font-loading strategy (as long as Meddon does not FOUT to Cormorant italic).
- Cloudinary URL delivery (env variables, CDN wrapper — but the final URL must be identical).

---

## Framework-specific guidance

### React / Preact
- Build as `<Letter />` component.
- The seven body paragraphs should live as a data array — not seven hardcoded `<p>` tags in JSX.
- Font loading in a top-level `<FontLoader />` or via `next/font` — ensure Meddon blocks render.
- The chrome hairline `--progress` var comes from a parent context (progress state manager), not hardcoded to `3%`. But for Screen 01, the value IS `3%`.

### Vue / Svelte
- Same as React. Component boundary at `.app`.

### Vanilla HTML/JS
- Copy `una-carta.html` verbatim. Adapt asset paths if serving from `assets/images/` locally.

---

## Testing requirements

After integration:

1. **Font-loading test.** Programmatically block Meddon, verify the render blocks rather than FOUTs to Cormorant italic.
2. **No-scroll test.** At each of 320×568, 375×812, 768×1024, 1024×768, 1440×900, 2560×1440 — verify `document.documentElement.scrollHeight === document.documentElement.clientHeight`. No y-scroll. No x-scroll.
3. **Responsive layout test.** At each breakpoint boundary (560, 860, 1180), verify the layout switches correctly and the album collapses/expands cleanly.
4. **Cloudinary CDN test.** Verify all three URLs return 200. If any fails, the screen must render a graceful fallback (paper texture without photos) rather than broken image icons.
5. **Visual regression test.** Snapshot at 1440×900 and diff against a golden. Diff threshold: 0.1%.

---

## Deliverable checklist

Cursor: check every box before declaring the task done.

- [ ] `una-carta.html` copied verbatim OR reconstructed from `una-carta-tokens.css` with identical DOM.
- [ ] Import paths adapted.
- [ ] Three font families load correctly. Meddon blocks render if unavailable.
- [ ] `filter: brightness(0) saturate(100%)` applied to `.brand__lockup` in this light-chrome context.
- [ ] All three Cloudinary URLs load with the exact transforms specified.
- [ ] Dates read: LUIS · 1985 · ERIKA · 1988.
- [ ] Paper texture is CSS-only, not a raster asset.
- [ ] `overflow: hidden` cascade in place: html · body · .app · .stage.
- [ ] `min-height: 0` on `.stage`.
- [ ] All four breakpoint transitions clean (1180, 860, 560).
- [ ] Height-based media queries at 820 and 700 present.
- [ ] Greeting rotates `-0.3deg`, signature rotates `-0.4deg`.
- [ ] Language toggle ES/EN present, ES active by default with amber underline.
- [ ] CTA reads "Empezar a leer" in dark fill.
- [ ] Chrome hairline set to `--progress: 3%`.
- [ ] Zero console errors at each breakpoint.
- [ ] No-scroll verification passes at all 6 test viewports.

---

## When to stop and ask

- If Meddon cannot be loaded reliably in the target environment.
- If the codebase's global CSS resets clobber the letter styles.
- If a stakeholder requests dates/copy/color changes.
- If the DOM contract must be violated to fit the framework.

Do not bend the design to fit the framework. If there's tension, escalate.

---

## Success criterion

A visitor lands on Reading the Practice, sees the letter, reads it in one uninterrupted view, and does not scroll — not once — while their eye moves from "Hola chamakis" down to "Luis Gilberto" to the two childhood photographs and the italic note.

Every implementation decision defers to that outcome.
