# Collection · Constellation — Production Spec v1

**Status:** Geometry B locked · production freeze · July 30, 2026  
**Product:** El Retrato (Reading the Practice)  
**Stage:** Collection (after section III · Voice)  
**Feeling:** Emergence — “These belong together.”  
**Audience for this doc:** Gen Spark / system documentation · implementation handoff  

**Related:** Archive = Return (locked). Exhibition = Regard (locked). Opening letter and Closing letter locked. Do not reuse Archive composition, room, or typography module for Collection.

**Geometry anchor B (locked):** Related without arranged. A was too detached; C began to feel composed. Do not reopen proximity study. Do not add labels, connectors, hierarchy, alignment systems, or visual grouping devices. Relationship from proximity alone.

**Freeze gate:** No Collection design changes without a documented QA failure. Preference and polish are not QA failures.

---

## 0. One sentence

Collection is the first moment a portrait begins to emerge — through **proximity alone**, from **2–3 exact participant fragments**, with no explanation of why they belong together.

---

## 1. Emotional job

| Stage | Says | Feeling |
|-------|------|---------|
| **Archive** | “I said this.” / “I received this.” | Return |
| **Collection** | “I said all of this.” / “These belong together.” | **Emergence** |
| **Exhibition** | “I stayed with this.” | Regard · `EXHIBITION.md` |

**Target participant feeling (never stated by the UI):**  
*“I didn’t realize these thoughts belonged to the same person.”*

The system never says that. The system never interprets, summarizes, categorizes, or comments. The likeness appears because the words sit in the same room.

---

## 2. Direction lock

**Primary direction: Constellation.**

**Rejected as primary: Shared Baseline** (creates a *chorus*, not emergence).

| Do | Do not |
|----|--------|
| Fragments feel as if they simply **landed** in the same room | Make it more dramatic, artistic, or asymmetrical-for-effect |
| Relationship via proximity, spacing, placement, rhythm | Curated / designed / poster energy |
| Exact words only | Interpretation, summary, AI insight, commentary |
| Equal dignity among fragments | Featured fragment, hierarchy of importance |
| One continuous field | Cards, tiles, masonry, Pinterest, dashboard, quote wall |

**Preserve the study’s restraint.** Strength comes from under-design, not from more art direction.

---

## 3. What Collection is / is not

### Is
- 2–3 held **portrait-eligible** textarea answers from the Voice section (`sectionId: 'voice'`), exact text after trim
- Boundary / metadata / operational Voice answers (e.g. brand naming, “never sound like”) are never Collection fragments
- One field (the “room”) where fragments coexist
- Emergence through spatial relationship
- Continuous with the writing voice of the intake (Cormorant Garamond), **not** Archive’s EB Garamond Return Plate

### Is not
- A second Return Plate
- A dark room + pale leaf ceremony
- An exhibition caption
- A labeled “COLLECTION” moment
- A feed, list, stacked cards, or carousel (especially on mobile)

---

## 4. Content rules (non-negotiable)

1. **Exact participant words only** — mechanical trim; no paraphrase.  
2. **No interpretation / summary / categorization / commentary / AI insight.**  
3. **No hierarchy of importance** — no featured fragment, no size-as-meaning, no “hero” quote.  
4. **No cards, labels, numbering, quote marks as decoration.**  
5. **No masonry / Pinterest / dashboard energy.**  
6. **Eligibility** (same Portrait data layer as Archive):
   - `textarea` only  
   - non-empty after trim  
   - length ≤ `portraitMaxChars` (180)  
7. **Stage gate:** `minFragments: 2`, `maxFragments: 3`. If fewer than 2 eligible fragments from Voice → **skip** Collection screen entirely.  
8. **Selection order:** deterministic by `questionN` ascending (writing order). Do not rank by “meaning.”  
9. **Integrity:** never truncate, hyphenate for fit, or crop text. If a fragment cannot fit the field at the minimum viable size, it must not be mangled — prefer skip that fragment only if it fails eligibility upstream; in-composition, shrink type within Collection type rules (see §7) equally in spirit (no single fragment singled out as “the important one”).

---

## 5. Room (the field)

Collection’s room is **not** Archive’s void + leaf.

| Token | Value | Note |
|-------|-------|------|
| Field base | `#EAE4DA` → `#E2DBD0` soft vertical | Warm paper field |
| Soft focus | Radial `#F1EBE2` ~42% 38% | Felt light, not a spotlight on one quote |
| Ink | `#1F1C18` | Same family as Archive ink; not pure black |
| Secondary ink | `rgba(31,28,24,0.72)` | Allowed for length/rhythm only — **not** for “less important” meaning |

No plate shadow as a “card.” Optional soft ambient shadow on the whole stage frame in specimens only; in-app the field fills the stage between chrome like other light screens.

**Chrome (in-app):** brand + time only — same silence pattern as Archive. **Never** “Colección” / Collection as hero or field title.

**Tone:** `light` (not Archive dark).

---

## 6. Desktop production composition (Constellation v1)

**Viewport intent:** One composition, no vertical page scroll if possible. Fragments share one field between top and bottom chrome.

### 6.1 Slot model (2 and 3 fragments)

Positions are **templates**, not free random art. Slight irregularity is baked into the template so it feels landed, not algorithmically scattered each load.

**Three-fragment template (default) · geometry B:**

| Slot | Top | Left | Max measure | Optical size |
|------|-----|------|-------------|--------------|
| 1 (earliest `questionN`) | 26% | 16% | ~24ch | 100% (base) |
| 2 | 40.5% | 33.5% | ~30ch | 100% |
| 3 (latest) | 57% | 16.5% | ~26ch | ~92% optical (length/rhythm only) |

**Two-fragment template · geometry B (canonical pair / production reference):**

| Slot | Top | Left | Max measure |
|------|-----|------|-------------|
| 1 | 34.5% | 17.5% | ~26ch |
| 2 | 49.5% | 31.5% | ~30ch |

**Rules:**
- Absolute placement inside `.collection-field` (`position: relative`).  
- Fragments are `position: absolute` with `max-width` in `ch`.  
- No equal column grid. No shared baseline band (that was Shared Baseline — rejected).  
- Overlap of bounding boxes: avoid; keep ≥ ~4% field gap between boxes.  
- Empty space is intentional — especially upper-right and lower-right air. Do not “fill the composition.”

### 6.2 Rhythm
Irregular vertical intervals in the 3-frag B template (≈14.5% then ≈16.5% of field height between slot tops). Closer than the original study spread, still irregular — not a list rhythm. Do not equalize.

---

## 7. Typography rules

| Property | Value |
|----------|-------|
| Family | Cormorant Garamond (intake voice) — **not** EB Garamond |
| Weight | 400 only |
| Style | Roman by default; no italic for emphasis inside fragments |
| Color | `#1F1C18` (slot 3 may use 0.72 α only when length > ~90 chars — optical, not semantic) |
| Tracking | −0.01em |
| Line-height | 1.36–1.40 |
| Base size (desktop) | `clamp(1.15rem, 1.55vw, 1.42rem)` |
| Alignment | Left |
| Hyphenation | Off |
| Quote marks | None added by the system |
| Labels | None |

**No hierarchy of meaning via type.** Size differences exist only to keep long lines from dominating the field optically — never to feature a “best” answer.

---

## 8. Spacing system

Use field percentages + `ch` measures, not card padding.

| Token | Role |
|-------|------|
| `--c-slot-n-top / left` | Placement template |
| `--c-measure-short` | ~24ch |
| `--c-measure-mid` | ~26–28ch |
| `--c-measure-long` | ~30ch |
| `--c-gap-min` | Minimum clearance between fragment boxes (~1.25rem or 4% of field) |
| Field padding | Desktop: none required beyond slot insets; Mobile: 8–10% side inset via slot lefts |

Do not wrap fragments in padded boxes. The only “container” is the field.

---

## 9. Fragment length handling

Upstream already caps at 180 characters.

| Length (chars) | Behavior in field |
|----------------|-------------------|
| ≤ 48 | Short measure (~22–24ch); may sit in slot 1 or 3 comfortably |
| 49–120 | Mid/long measure (~28–30ch); prefer mid/right-leaning slots |
| 121–180 | Long measure; slightly smaller optical size (~92–96% of base); never truncate |

**Assignment of which fragment goes to which slot:** by **writing order** (`questionN`), not by length. Length only affects measure/size within the assigned slot.

If after placement a fragment overflows the field bounds: shrink that fragment’s font in 1px steps to a floor of **17px**. If still overflowing, reduce `max-width` by 2ch steps to a floor of **20ch**. Never ellipsis. Never clip.

---

## 10. Mobile behavior (critical)

### Problem
A naive stack becomes a **feed / vertical list / cards**. That destroys emergence.

### Solution: **Compressed constellation** — not a list

On viewports ≤ 720px (or when the field is portrait-narrow):

1. **Keep one continuous field** filling the stage (same warm field, no cards).  
2. **Keep distinct horizontal offsets** — fragments must not share the same left edge.  
3. **Keep irregular vertical rhythm** — unequal gaps (e.g. 1.35em / 2.1em / 1.6em equivalent via % tops).  
4. **Do not** full-width block each fragment. Max-width ~78–86% of field, left offsets vary (8% / 18% / 10%).  
5. **Do not** use separators, numbers, or swipe carousels.  
6. **Prefer one viewport:** scale type down (`clamp(1.05rem, 4.2vw, 1.22rem)`); use geometry B compressed tops.  
7. If content still exceeds the chrome gap: allow **soft scroll of the field only**, with no snap points and no item chrome — it must still read as one room, not a feed. Prefer avoiding this via compression first.

**Mobile three-fragment template · geometry B:**

| Slot | Top | Left | Max-width |
|------|-----|------|-----------|
| 1 | 20.5% | 11% | 78% |
| 2 | 37.5% | 17.5% | 78% |
| 3 | 55% | 12% | 82% |

**Mobile two-fragment template · geometry B:**

| Slot | Top | Left | Max-width |
|------|-----|------|-----------|
| 1 | 32.5% | 13% | 80% |
| 2 | 49% | 19.5% | 76% |

**Test:** If removing horizontal offset variance makes the screen look like a Notes app list, the mobile composition has failed.

---

## 11. Edge cases

| Case | Behavior |
|------|----------|
| 0–1 eligible Voice fragments | Skip Collection screen |
| Exactly 2 | Two-slot template |
| Exactly 3 | Three-slot template |
| >3 eligible | Show first 3 by `questionN` (maxFragments) |
| `portraitEligible: false` (boundary / metadata / operational) | Not eligible — remains in answers/export/review only |
| Empty after trim | Not eligible |
| >180 chars | Not eligible (upstream) |
| Very long single token | Soften measure; no hyphenation; fit rules §9 |
| Language switch EN/ES | Re-render same slots; text swaps; placement unchanged |
| Reduced motion | No entrance choreography required; if any fade, ≤300ms opacity only — fragments do not fly into place |
| Missing fragment mid-list | Compact to 2-slot template; do not leave a hole that looks like a missing card |

---

## 12. Motion

Default: **stillness.** Fragments are already there when the screen appears (or a single quiet field fade owned by the page transition — not per-fragment animation).

Forbidden: character reveal, stagger fly-ins, parallax, hover lift, card press states.

---

## 13. Distinction from Archive (implementers)

| | Archive | Collection |
|--|---------|------------|
| Job | Return | Emergence |
| Count | 1 | 2–3 |
| Room | Dark void | Warm field |
| Object | Pale leaf / Return Plate | No leaf — field is the room |
| Type | EB Garamond 400 | Cormorant Garamond 400 |
| Anchor | Left 12% · bottom 12% on leaf | Slot templates in field |
| Module | `archive-typography` | Collection constellation (this spec) |

**Do not import** `archive-stage`, `archive-leaf`, or Archive presets into Collection.

---

## 14. Production data wiring (existing app)

- Screen: `kind: 'portrait'`, `portrait.stage: 'collection'`, after section `voice`  
- `selectPortraitFragments`: filter `sectionId === 'voice'`, sort by `questionN`, slice to `maxFragments` (3)  
- `minFragments: 2` → `shouldSkipPortrait`  
- Render: replace legacy blockquote Collection panel with constellation field markup  
- Specimen reference: `collection-v1-specimen.html`  
- Study (historical): `collection-emergence-specimen.html` (Constellation vs rejected Shared Baseline)

---

## 15. Markup sketch (production)

```html
<section class="portrait portrait--collection" data-collection-count="3">
  <div class="collection-field">
    <p class="collection-frag" data-slot="1">…exact words…</p>
    <p class="collection-frag" data-slot="2">…exact words…</p>
    <p class="collection-frag" data-slot="3">…exact words…</p>
  </div>
</section>
```

No titles, no numbers visible, no quote elements. `data-slot` is for CSS only.

---

## 16. QA checklist

- [ ] Feels emerged, not returned, not exhibited  
- [ ] No COLLECTION / custody / explanatory copy on the field  
- [ ] 2 and 3 fragment templates both land without scroll on desktop  
- [ ] Mobile still has unequal left offsets (not a flush list)  
- [ ] No cards, rules around fragments, or quote marks  
- [ ] Exact text only; language switch preserves placement  
- [ ] Skip when < 2 fragments  
- [ ] Does not reuse Archive leaf/room/type module  
- [ ] Restraint intact — does not look “more designed” than the study  

---

## 17. Versioning

Geometry **B** is the locked production anchor (Jul 30, 2026). Changes to slot templates, room color, or type family = **Collection v2** (major). Do not reopen A/B/C proximity study. Always re-validate: *does a portrait begin to emerge through proximity alone, without explanation?*

---

*Locked from Collection emergence study (Constellation selected; Shared Baseline rejected). Geometry B selected for field coherence. Archive = Return (locked). Exhibition = Regard.*
