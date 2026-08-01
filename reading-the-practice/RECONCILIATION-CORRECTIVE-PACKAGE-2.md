# Reconciliation Report · corrective-package-2 → canonical

**Date:** 2026-07-31  
**Canonical:** `reading-the-practice/`  
**Incoming:** `reading-the-practice/corrective-package-2/` (left **untouched**)  
**Deployable ZIP:** `el-retrato-final-deployable-package.zip`  
**Commit/push/deploy/Supabase:** **not done** (awaiting approval)

---

## 1. Reconciliation table (every file in corrective-package-2)

| Incoming path | Canonical path | Differ? | Newer by content | Meaningful differences | Decision | Why |
|---------------|----------------|---------|------------------|------------------------|----------|-----|
| `corrective-package-2/index.html` | `index.html` | Yes | **Neither alone** — merge | Claude: logomark-only chrome, `module-fallback`, VLS chrome comments; also divergent question copy. Canon: approved Q12/Q24/Q25, privacy consent, localization, FAQ, API intake, portrait eligibility | **MERGE** | Adopt Claude chrome/VLS/fallback; retain Canon product/runtime |
| `corrective-package-2/el-retrato-system-specification.html` | `EL-RETRATO.html` | Yes | **Claude** (VLS-citing spec + asset contract) | Canon still had “Brand lockup” duplication; Claude cites VLS + three masters | **ADOPT Claude** → also wrote `el-retrato-system-specification.html` | Appearance authority split |
| `corrective-package-2/Sharnay_Photography_Visual_Language_System_ES-EN.html` | *(none — new)* | N/A | **Claude** | Only HTML VLS in repo; cover line present | **ADOPT Claude** as new canonical | Required appearance authority |
| `corrective-package-2/el-retrato-runtime-patches.md` | `EL-RETRATO-RUNTIME-PATCHES.md` | No (identical SHA) | Same | — | **RETAIN canonical** + alias `el-retrato-runtime-patches.md` for ZIP name | Identical |
| `corrective-package-2/el-retrato-informe.md` | `EL-RETRATO.md` | Yes | **Different documents** | Informe = Spanish ops brief; `EL-RETRATO.md` = English living system + freeze map | **RETAIN `EL-RETRATO.md`** + **ADOPT informe as sibling** `el-retrato-informe.md` | Do not overwrite English system doc |

---

## 2. Exact changes integrated into canonical project

| Change | File |
|--------|------|
| Inserted Claude `<style id="module-fallback">` before module CSS links | `index.html` |
| Removed `.brand__type` from static chrome markup | `index.html` |
| `updateChrome` now injects **logomark only** + VLS citation comment | `index.html` |
| Product-chrome comments: “Brand lockup” → “Sharnay logomark / logomark in product chrome” | `index.html` |
| Replaced `EL-RETRATO.html` with Claude spec; fixed stale “mark and wordmark breathe” bullet → logomark clear-space wording | `EL-RETRATO.html` |
| Wrote deploy name alias of spec | `el-retrato-system-specification.html` |
| Added VLS HTML (approved cover line) | `Sharnay_Photography_Visual_Language_System_ES-EN.html` |
| Added Spanish informe sibling | `el-retrato-informe.md` |
| Alias of identical runtime patches for ZIP naming | `el-retrato-runtime-patches.md` |

**Preserved from canonical (not overwritten by Claude):**

- Q12 / Q24 / Q25 approved portrait architecture copy  
- `portraitEligible` / boundary / metadata / operational rules  
- Localization (`Hi,` / `Your brother,` / Voice room / work≠practice)  
- Privacy consent, info sheet, FAQ, `privacy.html` links  
- `submitUrl: '/api/intake'` and submission behavior  
- All module CSS + local images  

---

## 3. Canonical files retained instead of Claude’s versions

| File | Reason |
|------|--------|
| Canonical `index.html` body (questions, privacy, eligibility, localization) | Claude’s question rewrite is not the approved architecture |
| `EL-RETRATO.md` | Richer English system/freeze document; not replaceable by informe |
| `privacy.html` | Not in Claude package; production dependency |
| `assets/archive-typography/archive-typography.css` | Canon only |
| `assets/collection-constellation/collection-inapp.css` | Canon only |
| `assets/exhibition-gaze/exhibition-gaze.css` | Canon only |
| `assets/una-carta/una-carta-inapp.css` | Canon only |
| `assets/images/sharnay-logomark.png` (+ film/letter images) | Canon only |
| `EL-RETRATO-RUNTIME-PATCHES.md` | Identical to Claude |

---

## 4. Merged files and nature of each merge

### `index.html` (MERGE)
1. **Adopt Claude:** module-fallback CSS block  
2. **Adopt Claude:** logomark-only chrome (HTML + JS)  
3. **Adopt Claude:** VLS appearance-authority comments for product chrome  
4. **Retain Canon:** Q12/Q24/Q25, privacy, FAQ, eligibility, localization, API  
5. **Note:** `.brand__type` CSS rules remain as dead CSS (no markup injection); harmless

### Spec HTML (ADOPT + cleanup)
- Claude body adopted  
- One stale bullet rewritten so it does not reintroduce wordmark-in-chrome language  

### VLS / informe / patches
- VLS: full adopt (new file)  
- Informe: adopt as **new sibling**, not a replace of `EL-RETRATO.md`  
- Patches: no content merge (identical); deploy alias created  

---

## 5. corrective-package-2 untouched

Confirmed: package still contains exactly the original 5 files; VLS SHA matches the adopted copy (`46FB719F…`); runtime-patches SHA unchanged (`A414B69A…`). No writes into `corrective-package-2/`.

---

## 6. No production file points into corrective-package-2

Grep of canonical production surfaces: **no** `corrective-package-2` references in `index.html` or other production docs included in the ZIP.

---

## 7. Complete final ZIP tree

Extracts to `el-retrato/`:

```
el-retrato/
├── index.html
├── privacy.html
├── el-retrato-system-specification.html
├── Sharnay_Photography_Visual_Language_System_ES-EN.html
├── el-retrato-informe.md
├── el-retrato-runtime-patches.md
└── assets/
    ├── archive-typography/archive-typography.css
    ├── collection-constellation/collection-inapp.css
    ├── exhibition-gaze/exhibition-gaze.css
    ├── una-carta/una-carta-inapp.css
    └── images/
        ├── sharnay-logomark.png
        ├── letter-luis.jpg
        ├── letter-erika.jpg
        ├── film-opening.jpg
        ├── film-work.jpg
        ├── film-people.jpg
        ├── film-voice.jpg
        ├── film-feel.jpg
        ├── film-physical.jpg
        ├── film-exists-030.jpg
        ├── film-send.jpg
        └── film-closing.jpg
```

Excluded: `corrective-package-2/`, ZIPs, screenshots, previews, jump helpers, `.env`, keys, `node_modules`, `.git`.

---

## 8. Runtime dependency audit

| Dependency | Status |
|------------|--------|
| Four module CSS files | Present; linked from `index.html`; HTTP 200 from empty extract |
| `sharnay-logomark.png` | Present; local path; HTTP 200 |
| Film + letter local JPGs | Present; HTTP 200 for sampled |
| `privacy.html` | Present; linked; HTTP 200 |
| Google Fonts CDN | External (expected offline fallbacks exist in CSS stacks) |
| Cloudinary remote | Fallback only via `data-remote`; local files preferred |
| `POST /api/intake` | Server route — **not** in static ZIP (needs Vercel/hosting) |
| Lockup linear/stacked PNG masters | Documented in VLS/spec; **not** required by runtime chrome |

---

## 9. Empty-directory validation results

Extracted ZIP into empty temp dir and served only that folder:

| Check | Result |
|-------|--------|
| Zero missing local refs from `index.html` | **Pass** |
| `privacy.html` reachable | **Pass** (200) |
| Local logomark without Cloudinary | **Pass** (200, 84KB) |
| All four module CSS load | **Pass** (200) |
| Module-fallback present (approved modules still load and override) | **Pass** |
| VLS cover line `nacido del acto de observar` | **Pass** |
| No `corrective-package-2` refs | **Pass** |
| Q12/Q24/Q25 + privacy consent still in runtime | **Pass** |

---

## 10. Responsive validation results

Playwright headless pass against the **extracted ZIP** (all seven viewports):

| Viewport | Logomark visible | `.brand__type` count | Module CSS linked | Local 404s (app assets) | Horizontal overflow measure |
|----------|------------------|----------------------|-------------------|-------------------------|-----------------------------|
| 1440×900 | Yes | 0 | All 4 + fallback | None | No |
| 1366×768 | Yes | 0 | All 4 + fallback | None | No |
| 768×1024 | Yes | 0 | All 4 + fallback | None | No |
| 430×932 | Yes | 0 | All 4 + fallback | None* | No |
| 390×844 | Yes | 0 | All 4 + fallback | None* | No |
| 360×640 | Yes | 0 | All 4 + fallback | None | Yes (opening composition) |
| 320×568 | Yes | 0 | All 4 + fallback | None* | Yes (opening composition) |

\* Occasional `404 /cdn-cgi/rum?` from a Cloudflare Insights beacon tag inside Claude’s VLS HTML when served outside Cloudflare. Not an app asset; does not affect logomark/modules/privacy. Optional cleanup later.

**Cover line:** Present in VLS as `data-es="nacido del acto de observar."` (i18n span). Visible Spanish after VLS language toggle; English default text is the EN twin.

**Language / answers:** Runtime answers keyed by question id (`state.answers[q.n]`); language switch does not rewrite participant-authored values.

**No redesign** of the five documented content-heavy mobile screens in this pass. Narrow-width overflow on 360/320 is measured on the opening surface and was not treated as a new merge regression requiring layout work.

---

## 11. Security and privacy check

| Check | Result |
|-------|--------|
| No service-role key in browser ZIP | **Pass** |
| No `.env` / credentials in ZIP | **Pass** |
| No participant response payloads in ZIP | **Pass** |
| Privacy consent + `privacy.html` retained | **Pass** |
| API remains server-side `/api/intake` | **Pass** (not bundled as secrets) |

---

## 12. Final ZIP path and size

- **Path:** `C:\Users\luisg\sharnay_photography\sharnay-brand-system\el-retrato-final-deployable-package.zip`  
- **Size:** **5,442,057 bytes** (~5.19 MB)

---

## 13. Still requiring production access / activation

| Item | Status |
|------|--------|
| Deploy to Vercel / host | Pending your approval |
| Custom domain / DNS (`elretrato.sharnayphotography.com`) | External |
| Supabase `submitted_at` + 90-day retention migration | **Prepared earlier; Cron still PENDING — do not run in this step** |
| Server env: `SUPABASE_*`, Resend, etc. | Hosting secrets |
| Commit + push of reconciliation | **Awaiting your approval** |

---

## 14. Recommended commit message

```
feat(el-retrato): reconcile VLS authority and logomark chrome

Integrate Claude corrective-package-2 appearance authority (VLS +
spec citations + logomark-only chrome + module fallback) while
preserving canonical privacy, portrait eligibility, and Q12/Q24/Q25.
```

---

## Approved-change checklist

| # | Requirement | Status |
|---|-------------|--------|
| 1 | VLS governs appearance | Met (VLS adopted) |
| 2 | Spec governs behavior | Met (Claude spec adopted) |
| 3 | Spec cites VLS | Met |
| 4 | Chrome = official logomark only, every width | Met |
| 5 | No reconstructed mark+words lockup | Met |
| 6 | Asset contract: three masters; product uses logomark | Met in spec |
| 7 | Runtime comments → VLS appearance authority | Met |
| 8 | VLS cover line (ES) | Met |
| 9 | Responsive VLS / cover imagery | Met (Claude VLS) |
| 10 | Preserve privacy / info / review / submit from Canon | Met |
