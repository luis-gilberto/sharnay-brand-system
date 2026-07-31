# El Retrato — System Specification

**Product surface:** Reading the Practice (`reading-the-practice/`)  
**Status:** Living system document — consolidates locked direction through July 30, 2026  
**Canonical runtime:** `reading-the-practice/index.html`  
**Canonical HTML specification:** `reading-the-practice/EL-RETRATO.html` (corrective package, Jul 2026)  
**Runtime patch record:** `reading-the-practice/EL-RETRATO-RUNTIME-PATCHES.md`

This Markdown document remains a working summary. Where it conflicts with `EL-RETRATO.html`, the HTML specification is authoritative.

---

## Production freeze · Jul 30, 2026

**No further Portrait design work.**

The following surfaces are **locked**. Do not redesign, refine, restyle, or reopen them without a **documented QA failure** (broken layout, illegible type, wrong state logic, or accessibility defect with reproduction steps). Preference, taste, exploration, and “polish” are not QA failures.

| Surface | Lock | Do not revisit |
|---------|------|----------------|
| Archive | Return Plate · visually locked | Leaf, fragment typography, plate composition, Archive chrome intensity |
| Collection | Geometry B · locked | Proximity study, slot templates, constellation composition |
| Exhibition | Gaze · locked | Meeting line, bands, field silence, Gaze composition |
| Opening letter | Copy + Una carta room · locked | Letter body copy, paper room, album, signature treatment |
| Closing letter | Carta de cierre · locked | Success / error states, mobile menu for Cierre, colophon, signature |

**Allowed without reopening design:** bilingual orientation strings, mobile place/menu orientation, naming collisions outside locked stages, navigation labels, and other non-Portrait journey seams — only when they do not alter the locked surfaces above.

**Arc (locked meaning):** Archive = Return · Collection = Emergence · Exhibition = Regard.

---

## 0. Canonical definition

**Spanish:** El Retrato es un sistema editorial para descubrir, leer y encuadrar una práctica o un encargo creativo.

**English:** El Retrato is an editorial system for discovering, reading, and framing a creative practice or engagement.

It serves people examining their own creative practice, and creative professionals using it with clients as part of a more personal and specific discovery and creative-briefing process. It is **not** only for photographers.

Inside Reading the Practice, El Retrato also **holds** eligible words the participant wrote, then **returns** them unchanged at defined Portrait stages — without improving, summarizing, interpreting, or exhibiting them as campaign copy.

### Brand naming lock

The organization is always named exactly **LG Studio** (ES/EN). Never “the studio,” “Studio,” “el estudio,” or similar when referring to the LG Studio entity. Generic photographic uses of “studio/estudio” remain unchanged.

---

## 1. Core philosophy

| Statement | Meaning in product |
|-----------|-------------------|
| We hold what she wrote | Exact text only; mechanical trim at most |
| We do not improve it | No paraphrase, ranking by “meaning,” or editorial rewrite |
| Archive is return, not storage | The emotional event is *your words came back unchanged* |
| The words are the only artifact | Interface, institution, and labels nearly disappear |
| Recognition, not display | She should feel received — not processed or presented |

**Rejected metaphors for Archive:** mirror-as-cleverness, testimonial quote, museum-wall poster, card UI, “ARCHIVO” as hero title.

**Locked Archive metaphor:** **Return Plate** (recto leaf in a dark room).

**Sequence of feeling:**

1. The words remain.  
2. The words return.  
3. The person recognizes themselves.

---

## 2. Relationship to Reading the Practice

Reading the Practice is the bilingual editorial intake (EN/ES). El Retrato is a **layer inside it**, not a separate app.

| Layer | Role |
|-------|------|
| Intake sequence | Letter → rooms/questions → send → closing |
| Orientation | Where you are + time remaining (not a progress checklist) |
| Unified chrome | Brand · place/time · progress hairline |
| El Retrato (Portrait) | Hold fragments → reveal on Archive / Collection / Exhibition stages |
| Archive Typography v1 | How a single returned fragment is set on the Return Plate |

Production entry: `index.html` (self-contained HTML/CSS/JS). Supporting modules live under `assets/archive-typography/`. Gen Spark source package: `assets/archive_typography_system/` at repo root.

---

## 3. Stages of The Portrait

Three custody stages, inserted after specific sections:

| Stage | After section | Fragments shown | Emotional job |
|-------|---------------|-----------------|---------------|
| **Archive** | I · The Work (`work`) | **1** (most recent eligible from that section) | Return — one leaf, words only |
| **Collection** | III · Voice (`voice`) | **2–3** (writing order) | **Emergence** — Constellation; proximity alone. Spec: `COLLECTION.md` |
| **Exhibition** | VI · What Already Exists (`exists`) | **1** (deterministic: lowest question number in section) | Regard — Gaze; attention remaining · Spec: `EXHIBITION.md` |

**Eligibility (all stages):**

- Portrait enabled (`ENGAGEMENT.portraitEnabled`)
- Field type is `textarea`
- Non-empty after trim
- Length ≤ `portraitMaxChars` (**180**)

**Hard content rule:** empty / too long / not textarea → never held. If a stage has fewer than `minFragments`, the portrait screen is **skipped**.

**Skip / select logic** lives in `isPortraitEligible`, `upsertPortraitFragment`, `selectPortraitFragments`, `shouldSkipPortrait`.

---

## 4. Orientation v1 (rooms + threshold + time)

Orientation replaced the retired **Reading Line** (section TOC / locus strip). Reading Line must not return in the hamburger or top chrome.

### 4.1 Rooms

Mapped to section `room` + `seedMinutes`:

| Room (ES) | Room (EN) | Seed minutes |
|-----------|-----------|--------------|
| Introducción | Introduction | 24 |
| Origen | Origin | 20 |
| Práctica | Practice | 15 |
| Color y sensación | Color and Sensation | 9 |
| Lo físico | The Physical | 5 |
| Lo que ya existe | What Already Exists | 2 |

Place names align with chapter identity so they do not collide with section III (“The Name and the Voice”) or the Closing Letter label (“Cierre”).

### 4.2 Two elements

1. **Place (chapter name)** — where you are in the reading  
2. **Time remaining** — approximate minutes left in the session (`~ N min restantes` / `~ N min left`)

Time recalculates at **chapter start** from typing pace (`useTimeRemaining`), floored to whole minutes, capped by the room seed, never shows seconds. Below one minute → singular “1 min”. At zero → show nothing.

### 4.3 RoomThreshold

Between rooms: full-viewport black field `#0D0D0D`, static stack:

- Prefix: “Entrando a” / “Entering” (mono, gold `#C8A96A`)
- Room name: Cormorant italic
- Time: mono, muted cream

Finale thresholds (send / last interlude / Closing Letter) never announce Portrait stage names (Archive / Collection / Exhibition).

Timing: **400 ms** fade in → **800 ms** hold → **400 ms** fade out (1600 ms total).  
`prefers-reduced-motion: reduce` → 300 ms crossfade of place/time only, no black field.  
`aria-live` announces entry + minutes.

### 4.4 Where place appears today

Place + time live in **unified top chrome** (`chrome-top__place`), not a second RoomHeader franja under the masthead (that dual band was retired).

On **Archive Return Plate**: chrome shows **brand + time only** — no “Archivo” / stage title. The leaf carries the revelation.

---

## 5. Unified top chrome

**Composition:**

```
[ Brand ]                    [ Chapter | ~ N min restantes ]
─────────────────────────────────────────────────────────────
[============== progress hairline ==========================]
```

| Element | Behavior |
|---------|----------|
| Brand | Desktop: mark + “Sharnay Photography”. Mobile: mark (+ hamburger when menu ships) |
| Place | Chapter / screen title when appropriate |
| Time | Orientation estimate when in a room |
| Separator `|` | Only when time is visible |
| Progress rule | Hairline fill from answered questions (`answeredCount / QUESTIONS.length`) — procedural, not gamified |

**Official mark:** `assets/images/sharnay-logomark.png` (Cloudinary `logoMark_flbfm4`). Do not improvise aperture SVGs.

**Mobile menu (locked intent):** language + volver (+ quiet chapter). **No Reading Line / section jump TOC.**

---

## 6. Full-bleed chapter separators (film interludes)

Interlude / film chapter screens are **edge-to-edge photography**, type on film — not inset cards.

Locked credit language pattern (specimen / film):

- Label: **Capítulo** (not “Siguiente”)
- Title may break across two lines (e.g. “Color y” / “Sensación”)
- Credit: `EDITORIAL PORTRAIT | By Erika Sharnay` — “By Erika Sharnay” in sentence case, no tracking shout
- Credit aligns with subhead, not the footer

Film ↔ paper alternation remains the structural rhythm of the intake: work fills the room, then leaves so she can write.

---

## 7. Archive · Return Plate (composition lock)

### 7.1 What Archive is

- Dark room (radial void)
- Pale leaf / paper
- Participant fragment only
- Institution nearly invisible

### 7.2 What Archive is not

- ARCHIVO hero title  
- “De lo que escribiste”  
- Explanatory / instructional / interpretive copy  
- Metadata, accession numbers, custody language  
- Quote-mark decoration, pull-quote poster type  
- Cards, borders, exhibition wall copy  

### 7.3 Layout lock — Variation A · Returned Low

- Large paper field  
- Fragment anchored **left 12% · bottom 12%** (last line sits on that floor across presets)  
- Massive empty space above is intentional — returned, not mounted  

### 7.4 Motion

Quiet fade of the fragment (~700 ms) once the leaf is present. No character-by-character reveal. No bounce. Containing view owns transitions; typography module does not own page choreography.

---

## 8. Archive Typography System v1 (Gen Spark)

**Source of truth:** `assets/archive_typography_system/README.md`  
**In-app copy:** `reading-the-practice/assets/archive-typography/`  
**Wired into:** Archive stage render in `index.html` (`mountArchiveReturnPlate`)

### 8.1 Emotional anchor

**Preset B** — 32px EB Garamond 400, line-height 1.28, tracking −0.002em.  
Every other preset is tuned so different lengths produce the **same feeling**: returned, present, worthy of attention, not exhibited.

### 8.2 Presets

| Preset | Chars | Size | LH | Tracking | Measure |
|--------|------:|-----:|---:|---------:|--------:|
| A₀ Micro | 0–21 | 52px | 1.06 | −0.012em | ~24ch |
| A Short | 22–48 | 42px | 1.14 | −0.006em | ~28ch |
| B Medium (anchor) | 49–120 | 32px | 1.28 | −0.002em | ~30ch |
| C Long | 121–150 | 23px | 1.4 | +0.001em | ~42ch |
| C₁ Dense | 151–180 | 20px | 1.5 | +0.002em | ~46ch |

`n > 180` → **reject before render**.

### 8.3 Invariants

- Room + paper `#F6F2EB` + ink `#1F1C18`  
- EB Garamond **400 only** — no italic, no other family on the fragment  
- Natural wraps only — no forced `<br>`, no hyphenation  
- No emphasis inside the sentence  
- Only font-size, line-height, letter-spacing, max-width adapt per preset  

### 8.4 Hard rule (non-negotiable)

If any character is cut, cropped, hyphenated, or unreadable → **illegal for Archive**.

Legal responses only:

1. Shrink font-size **1px at a time** until the fragment fits the leaf  
2. If it still overflows at **16px** → reject (clear leaf; do not render)

Never truncate. Never hyphenate. Never crop for aesthetics. Fragment integrity precedes visual calibration.

### 8.5 Runtime flow (production)

```
eligible textarea answer
  → held in state.portrait.fragments
  → Archive screen selects 1 fragment
  → renderPortrait builds:
        .portrait--archive
          .archive-stage--inapp
            .archive-leaf
              .archive-fragment[data-fragment]
  → mountArchiveReturnPlate:
        resolveArchivePreset(text)
        set data-preset + textContent
        rAF → fitArchiveFragmentToLeaf (1px shrink)
```

Tone for Archive screen: **`dark`**. Chrome: brand + time, no stage label.

Module API (ESM, also mirrored inline in `index.html`):

- `resolvePreset(fragment)`
- `renderFragment(fragment, leafElement)`
- `fitFragmentToLeaf(fragEl, leafEl, startPx)`

### 8.6 Specimens / QA

| File | Purpose |
|------|---------|
| `archive-reveal-specimen.html` | In-app chrome + all five presets live |
| `assets/archive-typography/archive-typography-reference.html` | Gen Spark side-by-side reference |
| `archive-presence-study.html` | Presence push study (Document → Artwork) |
| `archive-v2-specimen.html` | Earlier Return Plate chrome study |
| `archive-typography.test.js` | Boundary + rejection tests |

---

## 9. Collection & Exhibition

### Collection — Constellation (locked)

**Job:** Emergence — *I said all of this.* Not a second return.  
**Direction:** Constellation. **Rejected:** Shared Baseline (chorus, not emergence).  
**Full production spec for Gen Spark / implementers:** [`COLLECTION.md`](COLLECTION.md)  
**Specimen:** `collection-v1-specimen.html`  
**Study (historical):** `collection-emergence-specimen.html`

Principles (short): exact words only; no interpretation; no hierarchy; no cards/labels/numbers/quote marks; relationship via proximity, spacing, placement, rhythm only. Mobile = compressed constellation with unequal left offsets — never a feed, list, stacked cards, or carousel. Do not reuse Archive Return Plate / EB Garamond leaf.

### Exhibition — Gaze (locked)

**Job:** Regard — *I stayed with this.* Not a room. Not a display. Not a museum metaphor.  
**Direction:** **Gaze (C).** Discoveries retained: A Distance (air can generate regard), B Stillness (restraint can sustain regard).  
**Medium:** Attention remaining. The system removes competition; it does not elevate, celebrate, or explain the sentence.  
**Full production spec:** [`EXHIBITION.md`](EXHIBITION.md)  
**Module:** `assets/exhibition-gaze/exhibition-gaze.css`  
**Specimen:** `exhibition-v1-specimen.html`  
**Study (historical):** `exhibition-regard-specimen.html`

Principles (short): one exact fragment; no labels/titles/metadata/quote marks/emphasis; gaze felt not drawn (no axes, frames, sightlines, focal markers); conversational meeting measure + eye-line posture; Cormorant 400 — never Archive monumental leaf scale; chrome brand + time only. Do not reuse Archive Return Plate or Collection constellation slots.

---

## 10. Data model

```js
state.portrait = {
  version: 1,
  fragments: [
    {
      id: 'q:N',
      questionN: N,
      sectionId: 'work' | …,
      source: 'answer',
      text: '…',           // exact held text
      collectedAt: ISO,
      lang: 'en' | 'es'
    }
  ]
}
```

Also persisted with answers under `ENGAGEMENT.storageKey`. Included in export payload.  
Orientation: `state.orientation = { roomId, minutesRemaining }`.

Visit / reveal tracking for held rooms may still exist in state for thresholds; it is **not** surfaced as Reading Line UI.

---

## 11. Explicit non-goals & retired systems

| Item | Status |
|------|--------|
| Reading Line (LETTER · I–VI · ARCHIVE…) | **Retired** — do not reintroduce in chrome or hamburger |
| Dual meta + RoomHeader franja | **Retired** — one top band |
| Archive as storage / accession theater | **Rejected** |
| Interpreting or ranking answers for Exhibition meaning | **Forbidden** |
| Truncating reveal text to fit | **Forbidden** |
| Improvised aperture mark | **Rejected** — use official logomark |

Typography system does **not**: moderate content, decide worthiness, animate page transitions, or preview fragments for other surfaces.

---

## 12. Implementation map

| Concern | Location |
|---------|----------|
| Sequence + portrait screens | `SCREENS` builder in `index.html` |
| Hold / select / skip | Portrait helpers near `ENGAGEMENT` |
| Archive render + fit | `renderPortrait` + `mountArchiveReturnPlate` |
| Collection constellation | `renderPortrait` + `assets/collection-constellation/collection-inapp.css` · `COLLECTION.md` |
| Exhibition Gaze | `renderPortrait` + `fitExhibitionSentence` + `assets/exhibition-gaze/exhibition-gaze.css` · `EXHIBITION.md` |
| Orientation | `useTimeRemaining`, `runRoomThreshold`, `setChromePlace` |
| CSS presets | `assets/archive-typography/archive-typography.css` |
| Resolver (module) | `assets/archive-typography/archive-typography.js` |
| Gen Spark handoff | `../assets/archive_typography_system/` |
| This document | `reading-the-practice/EL-RETRATO.md` |

---

## 13. Versioning

- **El Retrato** (product layer): document changes when philosophy, stages, or chrome locks change.  
- **Archive Typography**: preset values, length bands, or anchor logic → **major** (v1 → v2). Micro letter-spacing/LH for legibility → minor. Always re-validate against the emotional anchor (Preset B).
- **Collection Constellation**: slot templates / field role → major · `COLLECTION.md`.  
- **Exhibition Gaze**: meeting-line ratios / type family / field role → major · `EXHIBITION.md`. Always re-validate: *Does a sentence hold attention without assistance?*

---

## 14. How to review

1. Open preview server (`_preview-phase1.js` → `http://127.0.0.1:4191/`).  
2. `archive-reveal-specimen.html` — confirm presets + chrome.  
3. Walk chapter I textareas ≤ 180 chars → Archive screen: dark room, pale leaf, no ARCHIVO, intact text.  
4. Force a >180 answer → fragment not held; Archive skipped if none eligible.

---

## 15. Information, privacy, consent, and retention

Locked principles:

> Nada privado se convierte en material público por defecto.  
> Nothing private becomes public material by default.

> Conservar evidencia suficiente para sostener la lectura, nunca más de la necesaria.  
> Retain enough evidence to support the reading, never more than necessary.

| Surface | Route / file |
|---------|----------------|
| Sobre El Retrato / About | In-experience `#info-sheet` via drawer `data-act="about"` |
| FAQ | In-experience `#info-sheet` via `data-act="faq"` (accordion) |
| Privacy summary | In-experience `#info-sheet` via `data-act="privacy"` |
| Full Privacy Policy | `privacy.html` |
| Case-study consent model (future) | `EL-RETRATO-CASE-STUDY-CONSENT.md` |
| Submission acknowledgment | Required checkbox on send screen — not case-study consent |
| Supabase table | `public.reading_practice_submissions` |
| Retention migration | `sql/20260731_retention_90_days.sql` (**activation pending** until verified in the connected project) |
| Server submission | `POST /api/intake` (service role only; no browser SELECT/UPDATE/DELETE) |

**Raw responses vs strategic deliverables:** Original answers in Supabase are deleted within a maximum of 90 days from `submitted_at`. Briefs, readings, workspaces, and plans may remain in StrategyIQ. Only fragments needed to support a reading may remain inside those deliverables; they are not reused for other clients.

**AI-assisted processing:** Internal support for organize/summarize/analyze under human review; not for training public models; not for other clients’ work; minimum necessary information; reduce identifiers where reasonably possible. Do not name a specific AI provider unless the production workflow is verified.

**Case studies:** Prior express authorization only; never bundled into the submission privacy checkbox.

---

*Compiled from Orientation v1, Archive emergency reset → Return Plate lock, unified chrome / mobile menu direction, full-bleed chapter film locks, presence studies, Gen Spark Archive Typography System v1, and the Jul 2026 privacy / consent / retention architecture.*
