# Localization Correction Pass · Deliverable

**Date:** 2026-07-31  
**Scope:** Language integrity + Portrait eligibility (already present; verified)  
**Not touched:** Archive Return Plate · Collection geometry B · Exhibition Gaze · letter/closing layouts · CSS geometry · stage choreography  

---

## 1. Files changed

| File | Change |
|------|--------|
| `reading-the-practice/index.html` | User-facing copy, letter localization, film taxonomy, FOUC/aria/meta, practice→work |
| `reading-the-practice/assets/una-carta/IMPLEMENTATION_CURSOR.md` | single-viewport wording |
| `reading-the-practice/assets/una-carta/README.md` | single-viewport wording |
| `reading-the-practice/assets/archive-typography/README.md` | non-negotiable layout rule wording |
| `reading-the-practice/LOCALIZATION-CORRECTION-PASS.md` | This deliverable |

Portrait eligibility fields (`portraitRole` / `portraitEligible` / `portraitStages`) were already in `index.html` from the prior pass; QA reconfirmed.

---

## 2–3. Exact strings changed (before → after)

### Critical bleed

| ID | Before EN | After EN | Before ES | After ES |
|----|-----------|----------|-----------|----------|
| Letter salutation | Hola chamakis, (both) | Hi, | Hola chamakis, | Hola chamakis, |
| Letter close | Tu hermano, (both) | Your brother, | Tu hermano, | Tu hermano, |
| Letter alias | (El Chamako) (both) | *(omitted)* | (El Chamako) | (El Chamako) |
| Threshold FOUC | Entrando a (HTML) | *(empty until JS)* | same | set by JS: Entrando a |
| Stage aria | Reading the Practice | El Retrato | — | El Retrato (via `t(title)`) |
| Meta description | …before design… | …before the portrait… | *(none)* | Una conversación antes del retrato… |
| Editorial credit | Editorial portrait | Editorial portrait | Editorial portrait | Retrato editorial |
| Editorial by | By Erika Sharnay | By Erika Sharnay | By Erika Sharnay | Por Erika Sharnay |
| Film taxonomy/captions | EN-only | EN | EN-only | Natural ES equivalents |

### Practice / room

| ID | Before | After |
|----|--------|-------|
| Room voice | Practice / Práctica | **Voice / Voz** |
| Voice line | How the practice sounds… / Cómo suena la práctica… | How the **work** sounds… / Cómo suena el **trabajo**… |
| Voice reflection | hear the practice… / escuchar la práctica… | hear the **work**… / escuchar el **trabajo**… |
| Closing | see/reading of your practice / práctica | see/reading of your **work** / **trabajo** |
| Q1–Q2 why, Q14, requests, FAQ/About | practice / práctica (studio meaning) | work / trabajo |

### Form residue

| ID | Before | After |
|----|--------|-------|
| Field label | Your answer / Tu respuesta | **What you wrote / Lo que escribiste** |
| Review place | Review / Revisión | **Your answers / Tus respuestas** |
| Export JSON label (dead UI) | Export JSON | Download a copy / Descargar una copia |
| Begin / Comenzar | unchanged | kept (terminology map) |

### Question tone

| ID | Before | After |
|----|--------|-------|
| Q17.sub | …unkind / …cruel | …**direct** / **Sé directa, sin suavizar** |
| Q7 venue ES | venue o proveedor | **salón o proveedor** |
| Q7.why | harder working / trabajar más duro | **has to work harder** / **tiene que trabajar más** |
| Q3.sub ES | si lo traes dentro | **Si te sale, escribe un párrafo.** |
| S.feel.line | push back / me discutas | tell me if you disagree / **me digas si no estás de acuerdo** |
| Q16.sub | dismisses “Because it is clean” | vague vs specific (no condescension) |
| Q4.prompt | judged / juzgada | **stand by** / **responderías** |
| Color spelling | Colour (titles) | **Color** |

### Closing jargon

| Before | After |
|--------|-------|
| mood board | reference board / panel de referencias |

---

## 4. Updated terminology map

| EN | ES | Avoid |
|----|----|-------|
| El Retrato | El Retrato | Reading the Practice (participant-facing) |
| your work / the work | tu trabajo / el trabajo | the practice / la práctica |
| Voice (room) | Voz | Practice / Práctica |
| Chapter (film only) | Capítulo | Chapter for chrome rooms |
| Begin | Comenzar | Start reading |
| Continue | Continuar | — |
| Your answers (place) | Tus respuestas | Revisión |
| Review my answers (CTA) | Revisar mis respuestas | — |
| What you wrote | Lo que escribiste | Your answer / Tu respuesta |
| Download a copy | Descargar una copia | Export JSON as primary |
| By Erika Sharnay | Por Erika Sharnay | EN byline in ES |
| Color | Color | Colour (mixed spelling) |
| single-viewport rule | regla de un solo viewport | hard/layout/system contract |

---

## 5. Portrait eligibility map (confirmed)

| # | Role | Eligible | Stages |
|---|------|----------|--------|
| 1–3 | portrait | yes | archive, collection, exhibition |
| 4–7 | operational | no | — |
| 8 | portrait | yes | all three |
| 9–11 | metadata | no | — |
| 12 | portrait (list3) | no (not textarea) | — |
| 13 | **boundary** | **no** | — |
| 14 | operational | no | — |
| 15 | portrait | yes | all three |
| 16 | portrait (pairs3) | no | — |
| 17 | **boundary** | **no** | — |
| 18 | operational | no | — |
| 19 | portrait | yes | all three |
| 20–23 | operational | no | — |

`isPortraitEligible` requires textarea + `portraitEligible === true` + trim + ≤180.  
`normalizePortrait` drops ineligible fragments. Answers stay in review/export.

**Note:** Collection (Voice) and Exhibition (Exists) currently have zero eligible textareas → stages skip (semantic integrity). Archive (Work) still has Q1–Q3.

---

## 6. QA checklist

| Check | Result |
|-------|--------|
| ES mode letter: Hola chamakis, / Tu hermano, / (El Chamako) | Pass (code path) |
| EN mode letter: Hi, / Your brother, / no alias | Pass (code path) |
| Language switch re-renders letter via `t()` | Pass |
| Threshold FOUC: no “Entrando a” in static HTML | Pass |
| Threshold after JS uses `t(UI.enteringPrefix)` | Pass |
| Stage aria → El Retrato | Pass |
| Film credits ES: Por Erika Sharnay + ES taxonomy | Pass |
| Meta description matches live subtitle; ES on lang change | Pass |
| Q13 “Cheap” not in portrait.fragments | Pass (`_qa_portrait_eligibility.mjs`) |
| Boundary remains in answers/export/review | Pass (unchanged answer path) |
| No Archive/Collection/Exhibition geometry changes | Pass |

---

## 7. Still needs Luis approval

1. **EN letter salutation** — currently `Hi,`. Want warmer (`Hey,`) or a bilingual nickname?
2. **EN omit `(El Chamako)`** — intentional; restore as proper name in EN if desired.
3. **Begin / Comenzar** — kept; alternate CTAs if you want warmer entry.
4. **Gendered ES** (fotógrafa, clienta, harta) — left for Sharnay audience fit.
5. **Room names** Origin / Introduction / Color and Sensation — not renamed beyond Voice.
6. **Collection/Exhibition skip** until a portrait-positive textarea exists in Voice/Exists — product decision for a later content pass (not a visual redesign).

---

## Spec language

Replaced “system contract” / “hard rule” wording in Una Carta + Archive typography docs with:

- single-viewport rule  
- non-negotiable layout rule  
- viewport integrity rule  
