# El Retrato · Content & Localization Audit

**Status:** Extraction only — no production copy edited  
**Source:** `reading-the-practice/index.html` (UI, COPY, SECTIONS, QUESTIONS, REQUESTS, INFO + static HTML)  
**Date:** 2026-07-31  

Participant-entered answers are out of scope. Never translate or rewrite them.

Also available as a Cursor canvas (if your build shows Canvases):  
`~/.cursor/projects/c-Users-luisg-sharnay-photography-sharnay-brand-system/canvases/el-retrato-content-localization-audit.canvas.tsx`

---

## How to open the canvas (optional)

1. In Cursor: **Command Palette** → search **Canvas** or **Open Canvas**
2. Or open the file path above from disk
3. If Canvases are not enabled in your Cursor build, use **this markdown file** instead

---

## 1. Critical language issues

1. **Spanish locked into English mode:** `Hola chamakis,` · `Tu hermano,` · `(El Chamako)` always render
2. **FOUC:** `Entrando a` hardcoded in HTML before language choice (~line 3178)
3. **Legacy a11y:** `#stage` aria-label stuck as `Reading the Practice` — never becomes El Retrato, never localized (~3184)
4. **English stuck in Spanish mode:** `Editorial portrait` · `By Erika Sharnay` · film taxonomy/captions mostly EN
5. **Practice / Práctica overload:** room name + closing + questions + FAQ
6. **Q17 tone:** “unkind” → “cruel” (harsher than EN)
7. **Meta description:** EN-only; mismatches live subtitle (“before design” vs “before the portrait”)

**Not found in user copy:** “Start reading”, “hard contract”, “layout contract”  
**Live opening CTA:** Begin / Comenzar

---

## 2. Translation issues

| Issue | Example |
|-------|---------|
| Film credits not translated | taxonomy + most captions EN in ES mode |
| Untranslated loanword | Q7 option keeps `venue` |
| Awkward ES | Q3.sub: “si lo traes dentro” |
| Literal/odd | Q7.why: “harder working” → “trabajar más duro” |
| Tone escalation | S.feel.line: push back → “me discutas” |
| EN inconsistency | Color (room) vs Colour (title/Q14) |
| Soft mismatch | S.people.line: experience → “viven el trabajo” |
| Anglicisms in ES | link, Links, foil, brief, workspace, mood board, min, premium, venue |
| Place vs action | UI.review = “Revisión” (audit-like) vs “Revisar” |

---

## 3. Tone issues

- Q4: “judged” / “juzgada”
- Q17: “unkind” / “cruel” + “harta”
- Q16.sub: teaches by dismissing weak answers
- FAQ/privacy more institutional (Supabase, StrategyIQ, AI) than the letter
- Gendered ES throughout (fotógrafa, clienta) — coherent for Sharnay; product decision
- Opening CTA “Begin” is cool/editorial vs warm guide
- `UI.yourAnswer` = “Your answer” / “Tu respuesta” — form/survey residue

---

## 4. Inconsistent terms

| Concept | Variants |
|---------|----------|
| Product | El Retrato vs Reading the Practice |
| Chapter vs Room vs Section | Capítulo on film · Room in chrome · Section unused · review “chapterAnswered” |
| Practice | Room “Practice” · “the practice” · “práctica” · “lo práctico” |
| Colour | Colour vs Color |
| Send title | “A few things to send” vs “A Few Things To Send” |
| Export | Export / Download a copy / Export JSON (dead) |
| Client | client / clienta / clients / clientas |

---

## 5. Strings gated by state

| String / surface | When shown / hidden |
|------------------|---------------------|
| Resume + “Your earlier answers are still here” | Only when mark/answers exist |
| Portrait stage names (Archive / Collection / Exhibition) | Defined but **not shown** in chrome (intentional) |
| Retry sending | Hidden when submission is `ok` |
| Closing success vs error | Mutually exclusive by submission status |
| Consent required toast | Only if Finish without privacy checkbox |
| Why / micro panels | Only questions that define them |
| HTML FOUC (`Entrando a`, EN menu stubs) | Should clear after first `updateChrome` |

---

## 6. Priority string inventory

Risk: **Critical** · **Needs rewrite** · **Needs review** · **OK**

| ID | Surface | EN | ES | Risk | Notes |
|----|---------|----|----|------|-------|
| HTML.threshold.prefix | Orientation | (Entering) | Entrando a (hardcoded) | Critical | ES FOUC before lang choice |
| HTML.main.aria | A11y | Reading the Practice | (never synced) | Critical | Legacy product name |
| ENGAGEMENT.salutation | Opening letter | Hola chamakis, | same | Critical | ES in EN mode |
| LETTER.signature | Opening letter | Tu hermano, / (El Chamako) | same | Critical | ES in EN mode |
| UI.editorialCredit | Film credits | Editorial portrait | Editorial portrait | Critical | EN in ES mode |
| UI.editorialBy | Film credits | By Erika Sharnay | By Erika Sharnay | Critical | Should be Por… |
| FILM.taxonomy | Chapter openers | FASHION DETAIL… | same EN | Critical | Not localized |
| S.voice.room | Orientation | Practice | Práctica | Critical | Collides with jargon |
| S.voice.line | Chapter opener | How the practice sounds… | Cómo suena la práctica… | Critical | práctica = exercise feel |
| COPY.closing | Closing | …the practice… | …la práctica… | Critical | practice ×2 |
| Q17.sub | Question helper | Be specific and be unkind. | Sé específica y sé cruel. | Critical | cruel > unkind |
| META.description | Document | A conversation before design… | (none) | Needs rewrite | Mismatch + EN-only |
| Q7.options.venue | Multi-select | …venue or vendor | …venue o proveedor | Needs rewrite | venue untranslated |
| Q7.why | Why | …harder working. | …trabajar más duro. | Needs rewrite | Awkward both langs |
| Q3.sub | Helper | Take a paragraph… | …si lo traes dentro. | Needs rewrite | Awkward ES |
| S.feel.line | Chapter opener | …push back. | …me discutas. | Needs rewrite | discutir = fight |
| Q4.prompt | Prompt | …judged on… | …juzgada… | Needs review | Judgment language |
| UI.yourAnswer | Field label | Your answer | Tu respuesta | Needs review | Form language |
| UI.begin | Opening CTA | Begin | Comenzar | Needs review | Not “Start reading” |
| UI.chapterLabel | Film | Chapter | Capítulo | Needs review | vs Room |
| UI.review | Review place | Review | Revisión | Needs review | Audit-like ES |
| UI.reviewPrivacyNote | Review | …Supabase… StrategyIQ… | parallel | Needs review | Tech jargon |
| ENGAGEMENT.subtitle | Opening | A conversation before the portrait. | Una conversación antes del retrato. | OK | Live dek — good |
| COPY.letter | Letter body | Thank you for trusting me… | Gracias por confiarme… | OK | Strong human tone |
| UI.portraitContinueQuiet | Portrait a11y | Continuing. | Seguimos. | OK | Does not name stages |
| UI.portraitArchive etc. | Portrait chrome | Archive / Collection / Exhibition | Archivo / Colección / Exposición | OK | Intentionally not shown |

### Questions — flags only (full prompts live in `QUESTIONS`)

| # | Flag |
|---|------|
| 1–3, 14 | “practice / práctica” in why/body |
| 3 | premium/brief jargon; awkward ES sub |
| 4 | judged / juzgada |
| 7 | venue; harder working |
| 16 | pedagogical dismissal of weak answers |
| 17 | unkind → cruel; harta |
| 18, 22 | link / Links anglicisms |

All 23 prompts/subs/options and 13 FAQ pairs exist as bilingual objects in `index.html` and were reviewed for this audit; OK items are omitted here for length.

---

## 7. Recommended rewrite candidates (not applied)

1. **Letter bilingual policy** — keep Spanish intimacy in both langs, or add EN salutation/signature
2. **Rename room “Practice”** — e.g. Voice / Name; prefer “your work” for studio meaning
3. **Q17.sub ES** — “Sé directa, sin suavizar” not “cruel”
4. **Q7** — translate venue; rewrite “harder working”
5. **Film credits** — bilingual taxonomy or credit-only in ES
6. **`#stage` aria + threshold FOUC** — El Retrato; empty threshold until JS sets language
7. **S.feel.line ES** — “quiero que me digas si no estás de acuerdo”
8. **Unify Color/Colour** and Chapter/Room glossary
9. **Meta description** — match live subtitle; add ES if needed
10. **Spec no-scroll language** — see below

---

## 8. Suggested terminology map

| EN preferred | ES preferred | Avoid |
|--------------|--------------|-------|
| El Retrato | El Retrato | Reading the Practice (participant-facing) |
| your work / the work | tu trabajo / el trabajo | the practice / la práctica (studio meaning) |
| Room (chrome place) | name only | calling chrome places “Chapter” |
| Chapter (film label only) | Capítulo | Chapter for orientation rooms |
| Begin | Comenzar | Start reading |
| Continue | Continuar | — |
| Download a copy | Descargar una copia | Export as primary label |
| Review my answers | Revisar mis respuestas | Revisión alone if audit-like |
| By Erika Sharnay | Por Erika Sharnay | EN byline in ES mode |
| venue / event space | salón / locación / espacio | venue in ES |
| single-viewport rule | regla de un solo viewport | hard contract / layout contract |
| non-negotiable layout rule | regla de layout no negociable | system contract / contract established |

---

## Spec language · single-viewport rule (not user-facing)

Found in docs such as `assets/una-carta/IMPLEMENTATION_CURSOR.md` (“system contract”, “No scrolling. Anywhere. Ever.”).

**Preferred wording for a later doc pass:**
- non-negotiable layout rule
- single-viewport rule
- established system rule
- viewport integrity rule

**Principle to preserve:** every primary experience surface fits one viewport. No scroll inside Portrait stages. No soft/field/page scroll as fallback. Resolve fit through approved rules before rendering.

---

## Lang bleed checklist

| Direction | Examples |
|-----------|----------|
| ES → EN mode | Hola chamakis, · Tu hermano, · (El Chamako) · Entrando a (FOUC) |
| EN → ES mode | Editorial portrait · By Erika Sharnay · film taxonomy/captions · Reading the Practice aria · venue · menu FOUC |

---

## Next step (when you ask)

Approve terminology map + critical rewrite list → dedicated copy pass in `index.html` (no layout/CSS changes).
