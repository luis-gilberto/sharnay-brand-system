# Exhibition · Gaze — Production Spec v1

**Status:** Gaze locked · production freeze · July 30, 2026  
**Product:** El Retrato (Reading the Practice)  
**Stage:** Exhibition (after section VI · What Already Exists)  
**Audience:** Gen Spark / system documentation · implementation handoff  

**Related:**  
- Archive = Return Plate (leaf) — locked  
- Collection = Constellation (proximity) — geometry B locked  
- Opening letter / Closing letter — locked  
- Discovery study: `exhibition-regard-specimen.html` (A Distance · B Stillness · **C Gaze selected**)

**Freeze gate:** No Exhibition / Gaze design changes without a documented QA failure. Preference and polish are not QA failures.

---

## 0. One sentence

Exhibition is the moment when **one exact participant sentence holds attention without assistance** — a **condition of looking** (regard), not a room, display, or museum metaphor.

---

## 1. Emotional job

| Stage | Feeling (never stated by UI) | Discovery |
|-------|------------------------------|-----------|
| **Archive** | “I received this.” | Medium: **the leaf** |
| **Collection** | “These belong together.” | Relationship: **proximity** |
| **Exhibition** | **“I stayed with this.”** | Condition: **attention remaining** |

The system does not elevate, celebrate, or explain the sentence.  
The system **removes everything that competes** with the sentence.

---

## 2. Direction lock

**Primary direction: Gaze (C).**

**Useful but not primary:**  
- A Distance — proved air can generate regard  
- B Stillness — proved restraint can sustain regard  

**C revealed the medium:** attention.

| Do | Do not |
|----|--------|
| Let the gaze be **felt**, not drawn | Literal sightlines, graphic axes, targets, frames, focal markers |
| One fragment, exact words | Interpretation, summary, commentary, emphasis |
| Conversational meeting with language | Display / poster / caption / wall energy |
| Clear the field of competition | Institutional titles, metadata, labels, quote marks |
| Minimum composition for staying | Layout gimmicks that announce “Gaze” |

---

## 3. What Exhibition is / is not

### Is
- **1** held **portrait-eligible** textarea answer from section `exists` (deterministic: lowest `questionN`)
- Exact text after mechanical trim
- A quiet field where attention can remain
- Continuous with intake voice: **Cormorant Garamond 400**
- Feeling: *I stayed with this*
- Boundary / metadata / operational answers never become Exhibition fragments

### Is not
- A room that must be “designed” as architecture
- A museum, gallery, caption, plaque, or wall
- A second Return Plate (no leaf, no EB Garamond, no dark ceremony)
- A Collection of one (no constellation of a singleton)
- Quote graphics, pull-quotes, or editorial hierarchy inside the sentence

---

## 4. Content rules (non-negotiable)

1. Exact participant words only.  
2. No interpretation / summary / categorization / commentary / system voice.  
3. No labels, titles, metadata, or institutional language on the field.  
4. No quote marks added by the system.  
5. No emphasis, bold, italic, color shift, or size change **within** the sentence.  
6. No visual devices that explain regard (rules under text, brackets, sightline strokes, crosshairs, frames).  
7. Eligibility: `textarea`, non-empty trim, ≤ `portraitMaxChars` (180).  
8. Stage gate: `minFragments: 1`, `maxFragments: 1`. If none eligible → **skip**.  
9. Selection: lowest `questionN` in `sectionId: 'exists'`. Never rank by “meaning.”  
10. Never truncate, hyphenate, ellipsis, or crop text.

---

## 5. The field (not a room metaphor)

Exhibition’s field exists only to **stop competing**. It is atmosphere for attention, not a set piece.

| Token | Value | Note |
|-------|-------|------|
| Field | `#E8E2D7` | Quieter than Collection’s multi-fragment paper; not Archive void |
| Soft air | Radial `#F0EBE3` at ~50% 40%, very low contrast | Felt light, **not** a spotlight on the text |
| Ink | `#0D0D0D` at ~0.88 α | Present; not soft “caption grey” |
| Tone | `light` | |

No leaf. No plate shadow-as-card. No wall. No caption rule.

**Chrome (in-app):** brand + time only — **no** “Exposición” / Exhibition place label on the field or as hero. Same silence pattern as Archive’s refusal of “ARCHIVO.”

---

## 6. Composition — the minimum for gaze

**Question answered by v1:**  
*What is the minimum amount of composition required for a sentence to hold the gaze?*

**Answer (locked):**

1. One continuous field filling the stage between chrome.  
2. One sentence.  
3. **Meeting line:** the sentence block sits on a vertical band slightly **above** optical center (more air below than above) — face-to-face posture, not a drawn axis.  
4. **Conversational measure** (~22–36ch by length) — you meet language; you do not scan a wall.  
5. **Reading-scale type** — never Archive monumental scale; never caption micro-scale.  
6. Horizontal centering of the block; left-aligned text within the block.  
7. Nothing else.

Implementation uses an invisible **1fr / auto / 1.35fr** row grid (desktop). The middle row holds the sentence. This is scaffolding for posture — **not** a graphic system announced on screen.

### 6.1 Desktop

| Property | Value |
|----------|-------|
| Field | 100% of stage; `min-height: 0`; `overflow: hidden` |
| Grid | `grid-template-rows: 1fr auto 1.35fr` |
| Sentence row | row 2; `justify-self: center` |
| Side inset | ≥ 8% viewport when needed; prefer `ch` measure to do the work |
| Scroll | **None** — Portrait system rule |

### 6.2 Mobile (≤720px wide or narrow stage)

Same posture. Compress, do not invent a second layout language.

| Property | Value |
|----------|-------|
| Grid | `0.9fr auto 1.25fr` |
| Side padding | `clamp(1.1rem, 5vw, 1.75rem)` |
| Type | Slightly smaller clamp (see §7) |
| Measure | Same `ch` bands — face-to-face must survive |
| Scroll | Prefer none; if overflow after floor size, soft field scroll only (no snap, no chrome on the text) |

**Test:** If the screen feels like a centered quote card, a museum caption, or Archive’s leaf, composition has failed.

---

## 7. Typography behavior

| Property | Value |
|----------|-------|
| Family | Cormorant Garamond — **not** EB Garamond |
| Weight | 400 only |
| Style | Roman only |
| Alignment | Left within the centered block |
| Hyphenation | Off |
| Tracking | `0` to `−0.01em` by band |
| Quote marks | None |
| Labels | None |

### Length bands (optical only — not meaning)

Upstream caps at 180. Bands keep **meeting** feel across lengths. Do **not** jump to display sizes for short text (that is Archive’s job on the leaf).

| Band | Chars | Size (desktop) | Line-height | Measure | Tracking |
|------|-------|----------------|-------------|---------|----------|
| **S** Short | 1–48 | `clamp(1.12rem, 1.35vw, 1.28rem)` | 1.42 | 22–26ch | −0.01em |
| **M** Medium | 49–120 | `clamp(1.08rem, 1.25vw, 1.2rem)` | 1.48 | 28ch | −0.008em |
| **L** Long | 121–180 | `clamp(1.02rem, 1.15vw, 1.12rem)` | 1.52 | 32–36ch | −0.004em |

Mobile: reduce each band ~6–8% via clamp floors; keep measures.

**Hard fit rule:** If any character is cut off, shrink font-size 1px steps to a floor of **16px**. Then reduce measure by 2ch to a floor of **20ch**. Never truncate. Never ellipsis. If still illegal → reject before render (same integrity ethic as Archive; different composition).

---

## 8. Spacing system

| Token | Role |
|-------|------|
| `--ex-row-top` | `1fr` (desktop) / `0.9fr` (mobile) |
| `--ex-row-mid` | `auto` (sentence) |
| `--ex-row-bottom` | `1.35fr` / `1.25fr` — **more air below** = meeting line |
| `--ex-measure-s` | 22–26ch |
| `--ex-measure-m` | 28ch |
| `--ex-measure-l` | 32–36ch |
| `--ex-pad-inline` | mobile/side breathing |

No padded card around the sentence. No rule under the sentence. Spacing is only field air + measure.

---

## 9. Attention behavior

| Behavior | Spec |
|----------|------|
| Motion | **Still.** Sentence is already present (or inherits page opacity fade only). |
| Forbidden | Stagger, typewriter, underline draw, ken-burns, hover lift, pulse, glow |
| Competition | No secondary copy on the field; chrome silent of stage name |
| Duration | Emotional: staying. Technical: no auto-advance |
| Reduced motion | No added motion |

Regard is produced by **absence of competition** + **meeting posture**, not by animation that demands attention.

---

## 10. Distinction from Archive & Collection

| | Archive | Collection | Exhibition |
|--|---------|------------|------------|
| Feeling | I received this | These belong together | I stayed with this |
| Discovery | Leaf (medium) | Proximity (relationship) | Attention remaining (condition) |
| Count | 1 | 2–3 | 1 |
| Field | Dark void + pale leaf | Warm multi-fragment field | Quiet single-meeting field |
| Type | EB Garamond · scale by return | Cormorant · constellation | Cormorant · conversational meeting |
| Posture | Anchored on leaf (L12% · B12%) | Slots in field | Eye-line meeting band |
| Risk if confused | Exhibition as display | Exhibition as lonely constellation | Archive as quiet paper; Collection as one quote |

**Do not import** `archive-stage` / `archive-leaf` / Archive presets.  
**Do not reuse** Collection slot templates for a single fragment.

---

## 11. Production data wiring

- Screen: `kind: 'portrait'`, `portrait.stage: 'exhibition'`, after section `exists`  
- `selectPortraitFragments`: filter `sectionId === 'exists'`, sort `questionN` ascending, take first  
- `minFragments: 1` → skip if empty  
- Render: Gaze field markup (this spec)  
- Specimen: `exhibition-v1-specimen.html`  
- Study: `exhibition-regard-specimen.html` (A/B/C; C selected)  
- Module CSS: `assets/exhibition-gaze/exhibition-gaze.css`

---

## 12. Markup sketch (production)

```html
<section class="portrait portrait--exhibition" data-ex-band="M">
  <div class="exhibition-field">
    <p class="exhibition-sentence">…exact words…</p>
  </div>
</section>
```

`data-ex-band` is `S` | `M` | `L` for CSS only. No visible labels.

---

## 13. QA checklist

- [ ] Feels “I stayed with this,” not received, not emerged-as-group  
- [ ] No Exhibition / Exposición / custody title on the field  
- [ ] No frames, axes, sightlines, quote marks, emphasis  
- [ ] Desktop + mobile: one viewport, meeting line intact  
- [ ] Short text is not monumentalized (Archive trap)  
- [ ] Long text remains face-to-face, not a wall caption  
- [ ] Exact text; language switch preserves posture  
- [ ] Skip when no eligible fragment  
- [ ] Gaze is felt, not drawn  

---

## 14. Versioning

Changes to meeting-line ratios, type family, or field role = **Exhibition v2**.  
Optical band tweaks = minor.  
Always re-validate: *Does a sentence hold attention without assistance?*

---

*Locked from Regard study: C Gaze selected; A Distance and B Stillness retained as discoveries only.*
