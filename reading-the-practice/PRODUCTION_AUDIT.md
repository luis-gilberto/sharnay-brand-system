# PRODUCTION_AUDIT.md

Reading the Practice · Architectural Audit  
Source of truth: `reading-the-practice/`  
Auditor role: senior software architect joining an existing, approved application  
Date: 28 July 2026  

**Status of this document:** Read-only findings. No production infrastructure has been implemented. No application files were modified for this audit.

---

## 1. High-level architecture

Reading the Practice is a **single-page, client-only editorial application**.

It is not a multi-page site, not a form framework, and not a SPA framework app. It is three runtime files plus static assets:

| Layer | File | Role |
| --- | --- | --- |
| Document shell | `index.html` | Fixed chrome, stage, film backdrop, paper surface, print container, toast, a11y live region |
| Presentation | `styles.css` | Design tokens, panels, film system, paper texture, motion, print stylesheet |
| Application | `app.js` | Content, screen sequence, state, rendering, navigation, export, print |

There is **no build step**, **no package manager**, **no framework**, and **no server-side runtime** in the application itself. Hosting today is static (Netlify publishes the folder as-is; `netlify.toml` at the repo root only sets publish directory and cache headers).

**Runtime model**

1. Browser loads `index.html`.
2. `app.js` runs inside an IIFE.
3. Content arrays assemble a linear `SCREENS` list.
4. State is hydrated from `localStorage` (or an in-memory fallback).
5. `render()` writes HTML into `#stage` for the current screen (or review mode).
6. User input mutates `state` and is persisted locally.
7. Closing, review, JSON export, and print are all still client-side. **Nothing is submitted to a backend today.**

**Experience shape**

An approved linear narrative:

Opening (film) → Letter (paper) → six sections of questions (paper), each closed by a film interlude → Send chapter (paper, file pickers) → Closing (film) → optional Review / Export / Print.

Bilingual EN/ES throughout. Language can change mid-session without losing answers.

---

## 2. Folder structure

```
reading-the-practice/
├── index.html                          Canonical document shell
├── styles.css                          Canonical presentation
├── app.js                              Canonical application logic + content
├── README.md                           Product and authoring documentation
├── robots.txt                          Disallow all crawlers
├── type-specimen.html                  Design record (handwriting selection); not loaded by the app
├── reading-the-practice-standalone.html  Shareable single-file bundle; derivative, not source
├── assets/
│   ├── images/                         Graded film frames, childhood pair, client mark
│   ├── fonts/                          Playwrite US Trad (runtime) + rejected candidates (record)
│   ├── specimens/                      Visual design records (screenshots)
│   └── icons/                          Reserved; empty except .gitkeep
```

**Runtime vs record**

| Loaded by the experience | Not loaded at runtime |
| --- | --- |
| `index.html`, `styles.css`, `app.js` | `type-specimen.html` |
| `assets/images/film-*.jpg` | Extra Playwrite / script fonts except US Trad |
| `assets/images/letter-*.jpg` | `assets/specimens/*` |
| `assets/images/sharnay-logo.png` | `reading-the-practice-standalone.html` |
| `assets/fonts/playwrite-us-trad.woff2` | |

The standalone HTML is a **distribution artifact** of the multi-file app. Productionization should treat the three-file app as canonical and regenerate any bundle from it if needed.

---

## 3. Important files

### `index.html` (~68 lines)

Fixed structure only. Does not contain questions or answers.

- `#paper` — paper tooth overlay (hidden on film screens)
- `#backdrop` — two `.backdrop__layer` slots + `.backdrop__scrim` for cinematic cross-fade
- `#app` — `#chrome-top`, `#stage`, `#chrome-bottom`
- Bottom chrome: language toggle, Save and continue later, Return to the beginning, Back, Continue
- `#print-doc` — off-screen print tree
- `#announcer`, `#toast` — polite live regions

### `styles.css` (~1278 lines)

Sectioned presentation system (00–18): tokens, reset, chrome, panels, type, controls, paper, film backdrop, opening / letter / interlude / question / send / closing / review, toast, reduced motion, small screens, print.

Visual decisions live here: paper grain, film scrims, hand typography, layout breakpoints, print rules. Treat as locked for productionization unless a bug blocks shipping.

### `app.js` (~1963 lines)

Single IIFE. Logical sections:

| Section | Contents |
| --- | --- |
| 01 Engagement | `ENGAGEMENT` (client, studio, storage key, mark paths, titles) |
| 02 UI strings | `UI` bilingual interface labels |
| 03 Photography helpers | `CDN`, `film()`, `KIDS` |
| 04 Sections | `SECTIONS` (six chapters + interludes + films) |
| 05 Questions | `QUESTIONS` (twenty-three) |
| 06 Requests | `REQUESTS` (three send-chapter asks) |
| 07 Copy | `COPY` (letter, opening, closing, send, pair note) |
| 08 Screen sequence | Assembles `SCREENS`, `CLOSING_INDEX` |
| 09 State | localStorage / memory, `save()`, hydration |
| 10 Helpers | chrome measure, escape, dates, toast, captions |
| 11 Answers | get/set/migrate/answerText |
| 12 Fields | field markup + bind/commit |
| 13 Screen renderers | opening, letter, interlude, question, send, closing, review |
| 14 Render | film resolve/show/preload, `render()`, chrome, announce |
| 15 Navigation | goTo / next / back / toBeginning / resume / review / language |
| 16 Export & print | `buildExport()`, `exportJSON()`, `buildPrintDoc()`, `printIntake()` |
| 17 Events | clicks, file change, keys, beforeunload |
| 18 Start | initial `render()` |

### Content source of truth (inside `app.js`)

Questions and intent also live in `../docs/discovery.md` for the brand engagement, but **the running app’s content is the arrays in `app.js`**. Any production content sync must treat those arrays as live truth unless a deliberate content pipeline is approved later.

---

## 4. Current data flow

```
ENGAGEMENT / UI / SECTIONS / QUESTIONS / REQUESTS / COPY
        │
        ▼
   SCREENS[]  (opening, letter, [interlude + questions]×6, send, closing)
        │
        ▼
   state { index, mark, lang, answers, files, completed, timestamps }
        │
        ├──► localStorage[ENGAGEMENT.storageKey]
        │
        ├──► render() → #stage HTML
        │         ├── bindField() for questions
        │         ├── file inputs update state.files (names only)
        │         └── showFilm() for photographic screens
        │
        └──► on demand:
                  buildExport() → JSON download
                  buildPrintDoc() → #print-doc → window.print()
                  renderReview() → overlay mode on #stage
```

**Answer storage shape**

- Keyed by question number `q.n` in `state.answers`.
- Structured types (`choice`, `multi`) store **option indices**, not display strings, so language switches preserve selection.
- Older label-based values are migrated on read via `migrate()`.

**File storage shape**

- `state.files[selection | printed | loved]` = array of **file name strings only**.
- Binary file contents are never read into state and never transmitted.

---

## 5. Current submission flow

**There is no network submission.**

What exists today as a “finish” path:

1. User reaches the Send chapter (`kind: 'send'`).
2. Optionally picks files (names recorded).
3. Presses Finish / Continuar (`data-act="next"`).
4. `goTo(CLOSING_INDEX)` runs.
5. On first arrival at closing: `state.completed = true`, `state.completedAt = ISO timestamp`, then `save(true)`.
6. Closing screen offers:
   - Review my answers
   - Export a copy (JSON)
   - Print or save as PDF

Delivery mechanisms today are **manual**: the client exports or prints; the studio is not notified automatically.

This is intentional and documented in `README.md` §10.

---

## 6. Current persistence strategy

| Concern | Behavior |
| --- | --- |
| Key | `ENGAGEMENT.storageKey` → `lgs.reading-the-practice.sharnay.v1` |
| Primary store | `localStorage` |
| Fallback | In-memory `memoryStore` if storage is blocked |
| Autosave | Debounced ~260ms on answer changes |
| Immediate save | Screen change, language change, file pick, Save later, beforeunload, completion |
| Scope | One browser, one origin/machine |
| Resume | Restores `index`, answers, files names, lang, mark, completion |
| Clear | Manual `localStorage.removeItem(...)` |

**Not persisted:** review mode flag (session-only), film cache, toast state, uploaded bytes.

---

## 7. Current export strategy

### JSON (`exportJSON` / `buildExport`)

Produces a structured object:

- Document metadata (title, client, studio, language, timestamps, counts)
- Sections → questions → `{ number, question, answer, raw }`
- File selections by request title and name list
- Explicit note that files are names only

Download via `Blob` + temporary `<a download>`. Safari/`file://` fallback opens a new tab with escaped JSON text.

Filename pattern: `reading-the-practice-sharnay-{lang}-{YYYY-MM-DD}.json`

### Print (`printIntake` / `buildPrintDoc`)

Builds a clean editorial document into `#print-doc`. `@media print` hides the interactive app and shows the print tree. Uses browser print dialog (PDF save is user-driven). Client mark appears here and on review.

### Review (`openReview`)

Not a separate route. `reviewMode = true` re-renders `#stage` as the review document with Edit response → `goTo(questionScreenIndex(n))`.

---

## 8. Dependencies

**Runtime application dependencies: none.**

No npm, no CDN frameworks, no analytics SDKs, no auth SDKs.

**Optional network at runtime (already designed):**

| Resource | Purpose | Required? |
| --- | --- | --- |
| Local `assets/images/*` | Primary film / letter / logo sources | Preferred |
| Cloudinary URLs on frames / kids / mark | Fallback if local file missing | Optional |
| Self-hosted `playwrite-us-trad.woff2` | Handwriting | Preferred (swap font-display) |

**Hosting / tooling outside the app (already present in repo):**

- Netlify static publish (`netlify.toml` at brand-system root)
- No Vercel project, no Supabase, no Resend wiring in this folder

**Browser APIs used**

`localStorage`, `Blob`, `URL.createObjectURL`, `window.print`, `ResizeObserver` (with resize fallback), `Image` probing, File input API (names only), `beforeunload`.

---

## 9. Risks to productionization

| Risk | Why it matters | Severity |
| --- | --- | --- |
| No server of record | Answers exist only on the client device | Critical for production use |
| File names ≠ files | Studio cannot receive the thirty–fifty photographs through the app | Critical for Send chapter |
| Single-device resume | New phone/laptop = empty intake unless export was done | High |
| Completion is local only | Studio is not notified when she finishes | High |
| Storage quota / private mode | Rare; already degraded gracefully, but progress can be lost | Medium |
| Cloudinary as fallback | Fine for resilience; production should not depend on it for privacy-critical payloads | Medium |
| `buildExport()` note hardcodes “prototype does not transmit” | Must update copy when submission exists | Low (copy) |
| Standalone HTML can drift | Sharing an stale bundle vs multi-file source | Medium if both are distributed |
| Duplicate subject frames (`film-people` / `film-exists`) | Known editorial risk; not a blocker for infra | Content / brand |
| No auth / no magic link | Anyone with the URL can open a blank intake; that may be desired, but is a product decision | Product |
| CORS / cookie / SameSite later | Irrelevant today; becomes relevant the moment APIs are added | Planning |

**Non-risks (do not “fix” by rewriting)**

- Vanilla JS architecture
- Inline HTML string rendering
- Absence of React/Next
- Editorial pacing and lack of progress bars
- Paper / film visual system

---

## 10. Recommended integration points

Prefer **surgical hooks** at existing function boundaries. Do not insert a parallel app.

| Concern | Best hook | Why |
| --- | --- | --- |
| Payload shape | `buildExport()` | Already the canonical structured snapshot |
| “Finished” moment | `goTo()` when `index === CLOSING_INDEX` and `completed` flips true | Already the completion gate |
| Explicit submit (if product wants a button) | Closing actions row beside export/print, calling the same payload builder | Keeps closing as the acknowledgment surface |
| Answer sync (optional draft) | `save(immediate)` after writeStore | Mirror local persistence; never replace it |
| File upload | `stage` `change` handler for `input[type=file]` | Already owns `state.files` |
| Review/edit | Existing `data-act="edit"` | No change needed for backend |
| Notifications | After successful server accept of submission | Studio email, not client UX rewrite |
| Session identity | New thin ID in `state` (e.g. `intakeId`) created once | Allows server rows without accounts |

**Anti-pattern:** replacing `render()`, `SCREENS`, or CSS film/paper systems with a new front-end stack.

---

## 11. Files that should NEVER be modified

(For productionization workstreams. Content edits and approved visual revisions are separate.)

| File / area | Reason |
| --- | --- |
| `styles.css` (visual rules) | Approved presentation; production adapts around it |
| `index.html` structure and class names | Chrome, stage, backdrop, print shell are the contract `app.js` and CSS depend on |
| Film grade / crop strings in `film()` calls | Authored photographic language |
| Handwriting treatment (salutation/signature only) | Explicit design decision |
| `type-specimen.html`, `assets/specimens/*`, unused font candidates | Design record, not runtime |
| Question wording wholesale “cleanup” | Discovery-approved voice |
| Progress bars / gamification / submission celebration patterns | Explicitly rejected product language |

If a production hook requires a change inside `app.js`, keep it to **named call sites** (save, goTo completion, file change, export) rather than structural rewrites.

---

## 12. Files that are safe to extend

| Target | How |
| --- | --- |
| New files alongside the app | e.g. `api-client.js` loaded after `app.js`, or Vercel `/api/*` outside this folder |
| `app.js` at integration seams only | Thin calls into a new module; preserve renderers |
| `ENGAGEMENT` fields | Add production config keys (endpoint base URL, intake id) without changing UX strings |
| `buildExport()` | Add `intakeId`, `submittedAt`, upload receipts — extend, don’t reshape casually |
| Hosting config | `netlify.toml` / future `vercel.json` at repo root |
| `robots.txt` | Already conservative; fine to keep |
| README | Document production behavior when approved |

**Safe but careful:** `index.html` may gain one `<script src="…">` for an API client **after** `app.js` only if the client exposes a documented hook. Prefer not touching HTML if a same-file minimal patch to `app.js` is clearer.

---

## 13. Where a production API should connect

Recommended primary endpoint responsibility:

**Accept a completed (or draft) intake payload matching `buildExport()`**, optionally with upload references.

Suggested call moments:

1. **Primary:** first transition to closing (`goTo` completion branch).  
2. **Secondary (optional):** debounced draft sync from `save(true)` for multi-device resume.  
3. **Tertiary:** explicit “Send to LG Studio” on closing if product wants a conscious submit distinct from arrival.

API should:

- Idempotently upsert by `intakeId`
- Store answers JSON
- Store file object keys / URLs after upload
- Return acceptance + receipt the UI can toast

Do **not** require the API for basic navigation or local writing. Local-first must remain true if the network fails mid-session.

---

## 14. Where Supabase should integrate

Supabase is appropriate **behind** the API (or via signed policies), not as a browser-direct rewrite of the app.

| Supabase surface | Role |
| --- | --- |
| Postgres table `intakes` | Row per session: client slug, language, status, `payload` jsonb, timestamps |
| Postgres table `intake_files` (or storage paths on the row) | Metadata for selection / printed / loved |
| Storage bucket | Actual binaries for the three request keys; private; signed upload URLs |
| Auth | Prefer studio-side service role in serverless functions; client needs no end-user accounts unless magic-link resume is approved later |
| RLS | Lock client browser away from other intakes; prefer server-mediated access |

**Browser should not** get a service-role key. Prefer Vercel functions as the only writer using the service role, or tightly scoped anon policies with signed upload URLs.

Natural mapping:

- `buildExport()` → `intakes.payload`
- `state.files` names → enriched with storage paths after upload
- `ENGAGEMENT.storageKey` stays for local UX; server id is additional

---

## 15. Where Resend should integrate

Resend belongs **only on the server**, after a successful intake write.

| Trigger | Email |
| --- | --- |
| Intake marked completed / submitted | Notify Luis / LG Studio with summary + link to admin/read view or attached JSON |
| Optional | Confirmation to Erika if product wants it (not required by current closing copy) |

Do not send email from the browser. Do not couple Resend to every `save()` draft.

Payload for the email template can be derived from `buildExport()` fields already: client name, answered count, completion time, language, file name lists.

---

## 16. Where Vercel serverless functions should integrate

Vercel (or equivalent) should host **static files + thin API**, without rewriting the front end.

Suggested functions (names illustrative):

| Function | Purpose |
| --- | --- |
| `POST /api/intake` | Create/upsert intake from `buildExport()` (+ intakeId) |
| `POST /api/intake/:id/files` | Issue signed upload URL(s) for a request key |
| `POST /api/intake/:id/complete` | Mark complete, fan out Resend, finalize |
| `GET /api/intake/:id` | Studio-only read (auth protected) — not needed for client UX |

**Front-end attachment:** one small client module calling these endpoints from the hooks in §10–13.

**Static hosting note:** The app already runs on Netlify. Production may stay on Netlify Functions, or move static+API to Vercel. The audit does not require changing host; it requires that **functions adapt to this app**. If Vercel is the chosen API plane while Netlify serves static, that split is workable but operationally heavier than one host.

---

## Appendix A · Screen inventory (canonical sequence)

Built in `app.js` §08:

1. Opening (film)  
2. Letter (paper)  
3. For each of 6 sections: Interlude (film) → N questions (paper)  
4. Final interlude before send (film, `sectionIndex: null`)  
5. Send (paper)  
6. Closing (film)  

Review is not a screen index; it is a mode.

Approx length: **34 indexed screens** + review mode. Twenty-three questions. Six sections. Three file requests.

---

## Appendix B · Field type system

| Type | Storage | UI |
| --- | --- | --- |
| `textarea` / `text` | string | `.write` |
| `list3` | string[3] | three singles |
| `pairs3` | [name, why][3] | paired fields |
| `choice` | `{ choice: index\|null, note }` | radios + note |
| `multi` | `{ choices: number[], note }` | checkboxes + note |

`heavy: true` on strategically important questions (3, 14, 17): spacing only.

---

## Appendix C · Motion and accessibility (do not regress)

- Panel enter: opacity + slight translate (~page timing tokens)
- Film drift: slow scale on live backdrop layer
- Film cross-fade via dual layers
- `prefers-reduced-motion` disables drift / shortens transitions
- Keyboard: Enter / Ctrl-Enter advance rules; arrows when not in fields; Escape closes Why note
- Skip link, focus on `#stage`, aria-live announcer, toast

---

## Appendix D · What “productionization” must not mean

- Migrating to React, Next.js, or another SPA framework
- Rebuilding the intake as Typeform-like software
- Replacing the film/paper alternation
- Adding progress gamification
- Treating localStorage removal as the first task (it remains the offline/session backbone)

Production means: **durable studio receipt, real file delivery, notification, and hosting hardening** — around this application.

---

*End of audit. Awaiting approval before any modifications.*
