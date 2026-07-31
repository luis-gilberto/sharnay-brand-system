# Question Architecture Audit · El Retrato

**Status:** Minimum set **implemented** (Q12 revise · Voice Q24 · Exists Q25). Optional third Voice not shipped.  
**Date:** 2026-07-31  
**Source:** `reading-the-practice/index.html` · `QUESTIONS` + Portrait stage gates  

**Not in scope:** Archive / Collection / Exhibition visuals · letter layouts · chrome · CSS · choreography  

---

## Diagnosis (primary question)

**Is skipping caused by eligibility being too strict, or by Voice / Exists lacking portrait-positive textareas?**

### Verdict: **B — Voice and Exists lack portrait-positive textareas.**

Eligibility is doing the right job.

| Stage | Section gate | minFragments | Eligible textareas today | Result |
|-------|--------------|--------------|--------------------------|--------|
| Archive | `work` | 1 | Q1, Q2, Q3 | Can run |
| Collection | `voice` | 2 | **none** | Always skips |
| Exhibition | `exists` | 1 | **none** | Always skips |

Voice textareas today:

| # | Role | Why it cannot feed Collection |
|---|------|-------------------------------|
| Q9 | metadata | Brand naming (“Sharnay” / “Sharnay Photography”) |
| Q13 | boundary | Anti-value (“never sound like” → e.g. “Cheap”) |

Exists textareas today:

| # | Role | Why it cannot feed Exhibition |
|---|------|-------------------------------|
| Q21 | operational | Logo / color / typeface assets |
| Q22 | operational | What’s live (links, surfaces) |
| Q23 | operational | What’s locked (domain, print runs) |

**Loosening eligibility to let Q9 / Q13 / Q21–23 into Portrait would recreate the “Cheap” attribution failure.** Do not do that.

There *is* portrait-positive material elsewhere (Q8, Q12 intent, Q15, Q19), but Collection/Exhibition only read their section. That is stage architecture, not over-strict tagging.

**Q12** (“Three words… about working with you”) is portrait-positive in intent, but `type: list3` and `portraitEligible: false` under the textarea rule — so it never becomes a fragment today.

---

## 1. Full question architecture audit

Legend for feed columns: **Y** = should feed when eligible · **N** = must not · **—** = not this stage’s section (held only if eligible, unused by that stage’s gate)

| # | sectionId | EN prompt | ES prompt | type | role | eligible | stages | Intended job | Likely answer | Arch | Coll | Exh | Recommendation |
|---|-----------|-----------|-----------|------|------|----------|--------|--------------|---------------|------|------|-----|----------------|
| 1 | work | What kind of photography leads? | ¿Qué tipo de fotografía va al frente? | textarea | portrait | true | A/C/E | Lead genre / position | Short reflective genre | Y | — | — | keep as is |
| 2 | work | What kind of work do you want more of? | ¿De qué tipo de trabajo quieres más? | textarea | portrait | true | A/C/E | Aspiration | Desire / direction | Y | — | — | keep as is |
| 3 | work | What do you do that another good photographer… does not? | ¿Qué haces tú que no hace otra buena fotógrafa…? | textarea | portrait | true | A/C/E | Differentiation | Philosophy / difference | Y | — | — | keep as is |
| 4 | work | …photograph you would stand by… | …foto… por la que responderías… | textarea | operational | false | [] | Signature image pointer | Filename / title | N | N | N | keep but mark portrait-ineligible |
| 5 | people | Who is actually hiring you? | ¿Quién te está contratando…? | textarea | operational | false | [] | Client reality | Demo / segment | N | N | N | keep ineligible |
| 6 | people | What do they believe about photographers…? | ¿Qué creen sobre las fotógrafas…? | textarea | operational | false | [] | Assumption to correct | Client fears (can be negative) | N | N | N | keep ineligible (not participant identity) |
| 7 | people | Where do people find you now? | ¿Dónde te encuentra la gente ahora? | multi | operational | false | [] | Channel mix | Channels / order | N | N | N | keep ineligible |
| 8 | people | What makes someone choose you over someone cheaper? | ¿Por qué te eligen… más barato? | textarea | portrait | true | A/C/E | Value in their words | Values / proof language | — | — | — | keep as is (held; not Voice/Exists) |
| 9 | voice | Is the brand Sharnay, or Sharnay Photography? | ¿La marca es Sharnay o Sharnay Photography? | textarea | metadata | false | [] | Naming choice | Identifier | N | N | N | keep ineligible |
| 10 | voice | How is it said aloud? | ¿Cómo se dice en voz alta? | text | metadata | false | [] | Pronunciation | Phonetic metadata | N | N | N | keep ineligible |
| 11 | voice | Do you write as yourself, or does the studio speak? | ¿Escribes como tú misma, o habla el estudio? | choice | metadata | false | [] | Voice POV | Choice + optional note | N | N | N | keep ineligible (choice ≠ fragment) |
| 12 | voice | Three words… about the experience of working with you. | Tres palabras… trabajar contigo. | list3 | portrait* | false | [] | Desired qualities | 3 quality words | N* | **Y if fixed** | N | **revise: make portrait-eligible textarea** (see §3) |
| 13 | voice | …never want the brand to sound like? | …nunca querrías que sonara la marca? | textarea | boundary | false | [] | Anti-voice | Rejected words (“Cheap”) | N | N | N | **keep ineligible** — strategy only |
| 14 | feel | How much color does this brand get? | ¿Cuánto color le toca…? | choice | operational | false | [] | Color system buy-in | Choice + note | N | N | N | keep ineligible |
| 15 | feel | Is your work warm or cool? | ¿Tu trabajo es cálido o frío? | textarea | portrait | true | A/C/E | Temperature of work | Reflective feel | — | — | — | keep as is (not Voice/Exists) |
| 16 | feel | Three brands… that feel right… | Tres marcas… | pairs3 | portrait* | false | [] | Taste references | Brand + why | N | N | N | keep out of Portrait (structured; why lines useful in export) |
| 17 | feel | What are you tired of seeing in photography branding? | ¿De qué estás harta…? | textarea | boundary | false | [] | Anti-brand | Avoid list | N | N | N | keep ineligible |
| 18 | physical | What do clients actually receive…? | ¿Qué reciben tus clientas…? | textarea | operational | false | [] | Delivery today | Logistics | N | N | N | keep ineligible |
| 19 | physical | What could that moment be? | ¿Qué podría ser ese momento? | textarea | portrait | true | A/C/E | Desired experience | Aspiration | — | — | — | keep as is (not Voice/Exists) |
| 20 | physical | Realistic budget for printed pieces? | ¿Presupuesto… impresas? | choice | operational | false | [] | Print budget | Range | N | N | N | keep ineligible |
| 21 | exists | Logo, color, or typeface… worth keeping? | ¿Logo, color o tipografía… conservar? | textarea | operational | false | [] | Asset retention | Asset notes | N | N | N | keep ineligible |
| 22 | exists | What is currently live? | ¿Qué está activo ahora? | textarea | operational | false | [] | Live surfaces | Links / list | N | N | N | keep ineligible |
| 23 | exists | Is anything locked? | ¿Hay algo que ya no se pueda mover? | textarea | operational | false | [] | Constraints | Domain / print locks | N | N | N | keep ineligible |

\* Intent is portrait-positive; current type blocks eligibility.

---

## 2. Specific diagnosis

### Eligibility too strict?

**No.** Tagging Q9/Q13/Q21–23 as ineligible is correct.

- Q13 “Cheap” must never sit near identity fragments in Collection.
- Q9 naming is metadata, not reflective voice.
- Q21–23 are assets/logistics, not regard material.

### Voice / Exists lacking portrait-positive textareas?

**Yes.** That is the cause of Collection/Exhibition skip.

| Section | Portrait-positive textarea count | Need |
|---------|----------------------------------|------|
| Voice | **0** | ≥2 for Collection (`minFragments: 2`) |
| Exists | **0** | ≥1 for Exhibition (`minFragments: 1`) |
| Work | 3 | Archive OK |

Secondary note: Q8 / Q15 / Q19 are eligible but **section-gated out** of Collection/Exhibition. Fixing that would mean changing stage content sources (product architecture), not merely eligibility tags. Prefer filling Voice/Exists instead of widening gates.

---

## 3. Recommended minimum question changes

**Goal:** smallest change so Collection can get 2–3 Voice fragments and Exhibition can get 1 Exists fragment — without rewriting the questionnaire or changing flow order.

**Do not** reopen eligibility for boundary/metadata/operational.

### Change A — Revise Q12 (Voice) · type + copy

Convert `list3` → `textarea` so it can become one Portrait fragment (keeps the same job: desired experience qualities).

| Field | Proposed |
|-------|----------|
| EN prompt | What do you want people to feel when they work with you? |
| ES prompt | ¿Qué quieres que sienta la gente al trabajar contigo? |
| Helper EN | A sentence is enough. Not about the pictures — about you. |
| Helper ES | Una frase basta. No sobre las fotos: sobre ti. |
| type | `textarea` |
| portraitRole | `portrait` |
| portraitEligible | `true` |
| portraitStages | `['archive','collection','exhibition']` (Collection uses it via `voice`) |
| Why Collection | Reflective desired feeling — safe near other Voice fragments |
| Answer shape | Short reflective sentence (“Calm. Clear. Looked after.”) |

Removes three micro-fields; one held sentence is enough for Collection slot 1.

### Change B — Add one new Voice textarea (after Q12, before Q13)

Positive counterpart to boundary Q13 — without replacing Q13.

| Field | Proposed |
|-------|----------|
| EN prompt | How should your work sound when it speaks? |
| ES prompt | ¿Cómo debería sonar tu trabajo cuando habla? |
| Helper EN | Warm, quiet, direct, precise — use your words. |
| Helper ES | Cálido, quieto, directo, preciso — con tus palabras. |
| type | `textarea` |
| portraitRole | `portrait` |
| portraitEligible | `true` |
| portraitStages | `['archive','collection','exhibition']` |
| Why Collection | Claimed voice/tone — identity, not rejection |
| Answer shape | Tone language (“quiet and sure”, “close, not loud”) |

**Keep Q13 as boundary / ineligible.** “Cheap” stays in answers/export/review only.

### Change C — Add one more Voice textarea (optional third slot)

Only if you want Collection’s third slot reliably filled without depending on both A+B being answered at length.

| Field | Proposed |
|-------|----------|
| EN prompt | What should stay true about your voice, even as the work grows? |
| ES prompt | ¿Qué debería seguir siendo verdad en tu voz, aunque el trabajo crezca? |
| Helper EN | One thing you would not trade away. |
| Helper ES | Una cosa que no cambiarías. |
| type | `textarea` |
| portraitRole | `portrait` |
| portraitEligible | `true` |
| portraitStages | `['archive','collection','exhibition']` |
| Why Collection | Durable identity tension / belief |
| Answer shape | Short conviction |

**Minimum for Collection:** A + B (2 eligible Voice textareas).  
**Comfortable:** A + B + C (3).

### Change D — Add one Exists textarea (before Q21)

Exhibition needs one reflective fragment from `exists` without turning asset questions into Portrait.

| Field | Proposed |
|-------|----------|
| EN prompt | What already feels true about your work, even if everything around it is unfinished? |
| ES prompt | ¿Qué ya se siente verdadero en tu trabajo, aunque todo alrededor esté sin terminar? |
| Helper EN | Not the logo or the site. The work itself. |
| Helper ES | No el logo ni el sitio. El trabajo mismo. |
| type | `textarea` |
| portraitRole | `portrait` |
| portraitEligible | `true` |
| portraitStages | `['archive','collection','exhibition']` (Exhibition selects via `exists`) |
| Why Exhibition | Regard for one true sentence about work that already exists |
| Answer shape | One reflective sentence |

**Keep Q21–Q23 operational / ineligible.**

### Explicit non-changes

| Item | Action |
|------|--------|
| Q13 boundary | Do not feed Portrait |
| Q9–Q11 metadata | Do not feed Collection/Exhibition |
| Q17 boundary | Do not feed Portrait |
| Stage section gates | Do not widen to pull Work/Feel into Collection |
| Overall flow / chapter order | Unchanged |
| Visual systems | Untouched |

---

## 4. Updated portrait eligibility map (proposed after approval)

| # | section | role | eligible | Notes |
|---|---------|------|----------|-------|
| 1–3 | work | portrait | yes | Archive supply |
| 4–7 | … | op/meta | no | — |
| 8 | people | portrait | yes | Held only |
| 9–11 | voice | metadata | no | — |
| **12** | voice | **portrait** | **yes** | **Revised textarea** |
| **12b** | voice | **portrait** | **yes** | **New: how work should sound** |
| **12c** | voice | **portrait** | **yes** | **Optional third Voice** |
| 13 | voice | boundary | no | Cheap stays out |
| 14 | feel | operational | no | — |
| 15 | feel | portrait | yes | Held only |
| 16 | feel | — | no | pairs3 |
| 17 | feel | boundary | no | — |
| 18 | physical | operational | no | — |
| 19 | physical | portrait | yes | Held only |
| 20 | physical | operational | no | — |
| **20b / 21−** | **exists** | **portrait** | **yes** | **New: what already feels true** |
| 21–23 | exists | operational | no | Unchanged |

Numbering can be `12a/12b` in docs or renumber 13+ if implemented — implementation choice later.

---

## 5. QA plan (after implementation approval)

| # | Check | Expected |
|---|--------|----------|
| 1 | Answer Voice portrait questions with 2–3 short reflective sentences | `state.portrait.fragments` includes those `questionN`s with `sectionId: 'voice'` |
| 2 | Reach Collection | Screen shows (not skipped); 2–3 fragments; Constellation unchanged |
| 3 | Answer Exists portrait question | One `exists` fragment held |
| 4 | Reach Exhibition | Screen shows; one sentence; Gaze unchanged |
| 5 | Answer Q13 with `Cheap` | In `state.answers[13]`; in review/export; **not** in `portrait.fragments`; not on any Portrait surface |
| 6 | Answer Q9 with a brand name | In answers/export; not in Collection/Exhibition |
| 7 | Answer Q21–23 with links/assets | In answers/export; not in Exhibition |
| 8 | Clear Voice portrait answers | Collection skips again (honest minFragments behavior) |
| 9 | EN/ES prompts | Warm, direct; no practice/práctica; no survey residue |

---

## 6. Summary recommendation

| Question | Answer |
|----------|--------|
| Eligibility too strict? | **No** |
| Root cause? | **Voice/Exists question set has no portrait-positive textareas** |
| Minimum fix? | Revise Q12 → textarea · add 1 Voice tone question · add 1 Exists “what already feels true” question · optional third Voice |
| Keep Q13 out? | **Yes — forever for Portrait** |

**Do not implement until approved.**
