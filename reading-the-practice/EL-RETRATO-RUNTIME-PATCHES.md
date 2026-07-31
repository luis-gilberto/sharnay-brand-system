# El Retrato · runtime corrective patches

Applied to `reading-the-practice/index.html`. Every selector, function and path
below was read out of the supplied production runtime, not assumed. The patched
file ships alongside this document; this is the record of what changed and why,
for review before it reaches Cursor.

Section numbers use the **corrected** specification numbering: Exhibition is
§15, Closing letter is §16.

Conventions preserved: CRLF line endings throughout, all 12 embedded base64
assets byte-identical, `node --check` clean.

---

## 1 · Improvised mark removed · §05, §11

**Found:** a `var APERTURE` constant holding an inline six-blade SVG, plus
`.film__aperture` CSS. The constant was already orphaned — `filmCaption` had
stopped calling it — but both were still shipping.

**Removed:** the constant and both CSS rules. Replaced with a comment recording
the prohibition so it is not reintroduced.

**Verified:** `APERTURE`, `film__aperture` → 0 occurrences.

The runtime was already correct on mark *usage*: `assets/images/sharnay-logomark.png`
in `#meta-left`, in the menu sheet head, and via `ENGAGEMENT.clientMark`, with
`clientMarkRemote` pointing at `logoMark_flbfm4.png`. No change needed there.

---

## 2 · Brand lockup · §06.7

**Found:** the live class is `.brand__mark` inside `.brand`, fixed at 22×22px,
with `body.is-film / .tone-dark / .is-title` applying `filter: brightness(0) invert(1)`.
Two further rule sets, `.chrome__mark` and `.mark--title`, existed in CSS but were
referenced nowhere in markup or JS.

**Removed:** `.chrome__mark` and `.mark--title` entirely (dead). The print rule
`.chrome__mark, .mark--title { display: none }` was retargeted to `.brand__mark`,
which is the class that actually renders.

**Added** (new stylesheet section 21):

```css
.brand { align-items: baseline; gap: 12px; }

.brand__mark {
  display: block; width: auto; height: 56px; max-width: 360px;
  object-fit: contain; flex: 0 0 auto; opacity: 0.96; align-self: center;
}

body.is-film .brand__mark,
body.tone-dark .brand__mark,
body.is-title .brand__mark { width: auto; height: 56px; filter: none; opacity: 0.96; }

body:not(.is-film):not(.tone-dark):not(.is-title) .brand__mark { filter: brightness(0); }
```

**Cascade order — this was the defect in the previous draft.** Height-driven
rules come first, width-driven second, so a phone or tablet always resolves last
and the two ladders cannot contradict each other:

```css
@media (max-height: 800px) { ... height: 50px; }
@media (max-height: 680px) { ... height: 44px; }
@media (max-width: 1024px) { ... height: 46px; }
@media (max-width:  720px) { ... height: 40px; }
```

`--chrome-h` steps with it — 92 / 86 / 80 / 82 / 74 — because a 22px mark was
sitting in a 70px head and a 56px mark will not.

**Measured, all six conditions:**

| viewport | expected | got |
|---|---|---|
| 1920×1080 | 56 | 56 |
| 1440×780 | 50 | 50 |
| 1280×640 | 44 | 44 |
| 1024×1366 | 46 | 46 |
| 768×1024 | 46 | 46 |
| 390×844 | 40 | 40 |

`filter: none`, `opacity: 0.96` confirmed in film mode at every step.

**On the paper-mode filter.** §6.7 forbids a filter *in film mode*. It says
nothing about paper. The asset is a single PNG serving both tones, so on a cream
ground it needs `brightness(0)` or, if it ships cream as the specification
states, it is invisible there. This is a tone correction for a light ground, not
a recolour of the brand, and it is now recorded in §6.7.

---

## 3 · Bilateral colophon · §16.6

**Found:** already implemented and close to compliant. `closingColophonMarkup`
builds two zones — `.closing-colophon__left` carrying the language toggle and
`.closing-colophon__note`, `.closing-colophon__right` carrying
`.closing-colophon__kind` and `.closing-colophon__by`. No `|` between
classification and byline. `filmTaxonomyLabel` joins category and subtype with
`·`. Gap 5px, within the 5–7px band.

**One defect:** `.closing-colophon__by` had no `white-space`, so "By Erika Sharnay"
could break between "By" and the name.

```css
.closing-colophon__by {
  ...
  /* SS 16.6: never splits By from the name. */
  white-space: nowrap;
}
```

**Measured at the closing screen:** two zones; note `Studio, water and hard light`;
classification `CONCEPTUAL BEAUTY · WATER STUDY`; byline `By Erika Sharnay` with
computed `white-space: nowrap`; no `|` anywhere in the colophon; no ` - ` used as
a divider.

---

## 4 · Closing composition · §16.7

**Found:** the letter already sits in `.closing-letter__column` at `min(100%, 34rem)`
against the full-bleed film backdrop, which is the "photograph right half, letter
left column" arrangement the section describes. That part needed nothing.

**The defect was the scrim.** `.backdrop__scrim` carried a fourth layer,
`linear-gradient(rgba(13,13,13,0.17), rgba(13,13,13,0.17))` — a flat wash across
the entire frame, duplicated in the ≤899px variant. That is a uniform veil, which
§06.6 and §16.7 both forbid outright. It was mine, added in an earlier pass.

**Removed** from both. **Added**, scoped to the closing only, the two localized
pools §16.7 actually specifies:

```css
body.is-closing .backdrop__scrim {
  background-image:
    radial-gradient(58% 82% at 0% 46%,
      rgba(13,13,13,0.72) 0%, rgba(13,13,13,0.34) 46%, rgba(13,13,13,0) 74%),
    radial-gradient(86% 42% at 22% 100%,
      rgba(13,13,13,0.58) 0%, rgba(13,13,13,0.2) 54%, rgba(13,13,13,0) 80%);
}
```

with a mobile variant at ≤899px. Both fall to zero over the darker parts of the
frame, so skin tone, water texture, gesture, depth separation and the night
register survive where the photograph is already dark.

---

## 5 · Language switch · §09.10

**Found:** `setLanguage(code)` sets `lang`, saves, re-renders. Fragments are held
in `state.portrait.fragments` as plain strings and rendered directly
(`fragments[0].text`, `esc(f.text)`). `t()` returns any plain string unchanged,
so no fragment can pass through a language map. The runtime was already correct.

**Hardened** rather than rewritten — the risk was a future edit, not present
behaviour:

```js
/* SS 9.10. Interface chrome and system-authored copy change language.
   Participant fragments remain exactly as originally entered: the switch
   only re-reads UI dictionaries through t(), and t() returns any plain
   string unchanged. state.answers and state.portrait.fragments are never
   re-derived, re-keyed or passed through a language map here. The fit
   cache is cleared because measurement is language dependent; the held
   text is not. */
function setLanguage(code) {
  if (code !== 'en' && code !== 'es') return;
  if (code === lang) return;
  lang = code;
  resetCollectionFit();
  save(true);
  render({ keepScroll: true, keepFocus: true });
}
```

**Measured on a live Archive stage:** UI moved `Save and continue later` →
`Guardar y seguir después`; the held fragment was byte-identical before and
after.

---

## 6 · Collection terminal overflow · §09.08

**Found: nothing.** `mountArchiveReturnPlate` exists, `fitExhibitionSentence`
exists and is wired. Collection had no fit routine at all — no 17px floor, no
20ch floor, no terminal branch. §9.8 was entirely unimplemented.

**Added** `fitCollectionFragments(root)`, and `data-frag-id` on each rendered
fragment so a specific one can be withdrawn:

```js
var collectionDropped = [];
function resetCollectionFit() { collectionDropped = []; }

function fitCollectionFragments(root) {
  var field = root.querySelector('.collection-field');
  if (!field) return [];
  /* If collection-inapp.css has not applied, the field has no measurable
     box and every fragment would read as an overflow. A stylesheet that
     failed to load must never cause participant words to be withheld, so
     measurement only runs once the field is genuinely laid out. */
  if (!field.clientWidth || field.clientHeight < 80) return [];
  ...
  // 1px steps to a 17px floor, then 2ch steps to a 20ch floor,
  // then push the id onto `failed`.
}
```

Containment is only tested for absolutely positioned slots, which is what the
constellation uses; a statically positioned paragraph has no meaningful
relationship to the field box.

`selectPortraitFragments` now excludes the dropped set in the collection branch,
which means `shouldSkipPortrait` inherits the gate for free. `render` re-resolves
once and, below `minFragments`, hands back to `goTo` with `{ skipThreshold: true }`
so the room threshold does not replay:

```js
if (dropped.length) {
  dropped.forEach(function (id) { if (id && collectionDropped.indexOf(id) === -1) collectionDropped.push(id); });
  var minFrag = screen.portrait.minFragments || 2;
  if (selectPortraitFragments(screen).length < minFrag) {
    window.setTimeout(function () { goTo(state.index, { skipThreshold: true }); }, 0);
    return;
  }
  stage.innerHTML = renderPortrait(screen);
  fitCollectionFragments(stage);
}
```

### The defect this went through first

The initial version had no layout floor. With `collection-inapp.css` absent, the
field measured zero, every fragment read as overflowing, all were dropped, the
count fell below the gate and **the entire Collection stage silently
disappeared.** It was caught by running the identical walk against the unpatched
runtime: the original reached Collection, the patched one did not. A missing
stylesheet must never withhold participant words. Hence the `clientHeight < 80`
floor and the position guard.

### Measured across four field conditions

| field | result |
|---|---|
| roomy, 520×900 | renders, no shrink, text intact at full length |
| cramped, 150×340 | shrinks 40px → 22px, stops when it fits, text intact |
| unfittable, 110×190 | both fragments dropped whole, count falls below 2, **stage skipped**, nothing clipped |
| stylesheet absent | guard holds, renders normally, nothing dropped |

---

## 7 · Persistence gate and closing states · §16.3, §16.4

**Found:** already correct and locked behind a production freeze comment dated
Jul 30. `closingSubmissionConfirmed()` returns `state.submissionStatus === 'ok'`.
`renderClosing` branches on it. No change made.

**Verified both states end to end:**

| | backend unreachable | backend confirms |
|---|---|---|
| class | `closing-letter--pending` | `closing-letter--ok` |
| signature | absent | present |
| "Tres frases…" promise | absent | present |
| primary action | `retry-submit` | `review` |
| retry visible | yes | no (menu only, `hidden`) |
| place-info | Closing / Cierre | Closing / Cierre |
| progress rail | 100% | 100% |

`readingProgressPercent()` returns 100 on the closing because it is the last
index in `SCREENS`. §16.5 satisfied without change.

---

## 8 · Dead code removed

| removed | reason |
|---|---|
| `var APERTURE` | §05, §11 |
| `.film__aperture`, `.film__aperture svg` | §05, §11 |
| `.chrome__mark` rules + 640px variant | referenced nowhere |
| `.mark--title` + its 760px variant | referenced nowhere |
| `.film--closing .closing__body / __lede / __three` | superseded by `.closing-letter__*` |
| uniform veil layer, base + mobile | §06.6, §16.7 |

---

## Applying this

The patched `index.html` ships with these changes already in it. Diff it against
your working copy before committing — the production freeze comment at §17 means
the closing region should show only the one `white-space: nowrap` line and the
`body.is-closing` scrim block, nothing else.
