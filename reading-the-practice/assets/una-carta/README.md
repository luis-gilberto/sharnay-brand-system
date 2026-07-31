# Una carta · Implementation handoff
## El Retrato · Reading the Practice · Screen 01 · Letter

**Status:** Design locked · July 30, 2026
**Precedent set by this screen:** No scrolling anywhere in the Portrait experience.
**Related:** Archive Typography System v1 (separate handoff)

---

## What's in this folder

| File | Purpose |
|---|---|
| `una-carta.html` | The final HTML file, exactly as approved. This is the source of truth. |
| `IMPLEMENTATION_CURSOR.md` | Directive brief for Cursor. Read this first if you're integrating into a framework. |
| `una-carta-tokens.css` | Standalone CSS module — tokens + component styles extracted for framework integration. |
| `README.md` | You are here. |

---

## Two implementation paths

### Path A · Verbatim copy · **100% fidelity**
If the target codebase serves the intake as plain HTML/JS (self-contained `index.html`), take `una-carta.html` and integrate directly. Adapt import paths for fonts and Cloudinary image URLs; leave DOM and CSS untouched.

**Choose this if:** Reading the Practice is served from a single `index.html` file (per the El Retrato system spec, this appears to be the case).

### Path B · Framework integration · **~90% fidelity**
If Cursor is building the intake as React / Vue / Svelte components with a shared design system, use `IMPLEMENTATION_CURSOR.md` as the directive brief and `una-carta-tokens.css` as the styles module.

**Choose this if:** the codebase has typed components, a token system, a styling architecture (styled-components, CSS modules, Vanilla Extract, etc.) — and you need Una carta to live inside that.

---

## Non-negotiables that survive both paths

1. **No scrolling.** `html`, `body`, `.app`, `.stage` all have `overflow: hidden` and `min-height: 0` on the grid. This is a Portrait system rule, not an ergonomic preference.
2. **Meddon script for greeting + signature.** No fallback to Cormorant italic silently. If Meddon can't load, block render or use Homemade Apple.
3. **EB Garamond regular 400 is not used here.** Cormorant Garamond 400 is the body serif. IBM Plex Mono is the mono. Meddon is the script. Three families, no more.
4. **The two Cloudinary URLs must be used verbatim.** The Cloudinary transforms (`e_grayscale + e_tint:100:3d3327:f5f1e8`) are what give the photos their sepia — don't strip them or the album stops feeling like an album.
5. **Dates:** LUIS · 1985 · ERIKA · 1988. If asked to change, escalate — these are the sender and recipient's actual birth years.

---

## What NOT to touch

- The paper texture recipe (multi-layer background-image on body). Do not replace with a raster texture PNG — the CSS-only recipe is intentional (zero asset weight, resolution-independent, editable in-brand).
- The greeting rotation (`-0.3deg`) and signature rotation (`-0.4deg`). These are handwritten-imperfection anchors, not decoration.
- The amber accent color `#C8A96A` — matches the Portrait system's `--accent` token across Archive, Collection, and the chrome hairline.
- The italic caption's rule anchor — it's the visual thread connecting the two photos to the note. Removing it strands the note.
- The album layout at each breakpoint — the vertical stack at ≥1180px, horizontal band at ≤860px. Each is deliberate. Do not "normalize" them.

---

## Preview

Open `una-carta.html` in any modern browser. It works offline (assuming Cloudinary and Google Fonts are reachable). No build step.
