# Reading the Practice · Production

Phase 1 production layer for the canonical static application in this folder.

The experience (`index.html`, `styles.css`, `app.js`) is unchanged in architecture. This document covers only what was added around it: Vercel API and Supabase persistence. Resend is present as a dormant abstraction.

Governing document: `PRODUCTION_AUDIT.md`.

---

## What Phase 1 does

1. When the intake first reaches the closing screen, the browser POSTs `buildExport()` to `/api/intake`.
2. The API **INSERTs** one row in Supabase (`reading_practice_submissions`) using the session `intakeId` as the primary key.
3. Resend is **disabled** in Phase 1 (abstraction kept in `lib/resend.ts`; not called).
4. localStorage, JSON export, and print continue to work exactly as before.
5. If the POST fails, answers stay local and the closing screen offers **Retry sending to LG Studio**.

No uploads. No auth. No dashboard. No client-facing email. No LG Studio email yet.

---

## Environment variables

Copy `.env.example` to `.env.local` for local `vercel dev`, and set the same keys in the Vercel project.

| Variable | Required for Phase 1 | Used by | Purpose |
| --- | --- | --- | --- |
| `SUPABASE_URL` | Yes | API | Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | API | Server write access (never expose to the browser) |
| `SUPABASE_ANON_KEY` | No | Reserved | Unused by `/api/intake` today |
| `RESEND_API_KEY` | No (Phase 1) | Future mail | Kept in `.env.example`; not read while email is disabled |
| `FROM_EMAIL` | No (Phase 1) | Future mail | Kept for later |
| `TO_EMAIL` | No (Phase 1) | Future mail | Kept for later |

---

## How to configure Supabase

1. Create a Supabase project.
2. Open **SQL Editor** and run the contents of `sql/reading_practice_submissions.sql`.
3. Confirm the table `public.reading_practice_submissions` exists with columns:

   - `id` (uuid, primary key — client `intakeId`)
   - `created_at`, `updated_at`
   - `status`
   - `client_name`, `client_email`
   - `experience_version`, `language`
   - `payload` (jsonb — the full `buildExport()` object)

4. Copy **Project URL** → `SUPABASE_URL`.
5. Copy **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`.
6. Copy **anon** key → `SUPABASE_ANON_KEY` (optional for Phase 1).
7. Run `sql/20260731_retention_90_days.sql` to add `submitted_at`, the hard-delete purge function, retention log, and daily `pg_cron` job.
8. In Supabase → **Database → Cron Jobs**, confirm `purge-reading-practice-submissions-90d` is listed. Until that check succeeds, treat Cron activation as **PENDING**.

RLS is enabled with no anon policies. The Vercel function uses the service role, which bypasses RLS. The anonymous client must never receive SELECT, UPDATE, or DELETE on submitted participant records.

**Retention:** Original response-bearing rows are hard-deleted 90 days after `submitted_at` (fallback: `created_at`). Strategic deliverables in StrategyIQ are outside this database and are not deleted by the purge.

---

## Resend (disabled in Phase 1)

`lib/resend.ts` remains in the repo. `/api/intake` does **not** call it.

When re-enabling later: set `RESEND_API_KEY`, `FROM_EMAIL`, and `TO_EMAIL`, then invoke `sendIntakeNotification` only after a successful INSERT.

---

## Database write strategy

**INSERT only.** Not upsert. Existing rows are never updated and `payload` is never overwritten on retry.

| Case | HTTP | `receipt` | Database effect |
| --- | --- | --- | --- |
| First successful POST for an `intakeId` | **201** | `newly_created` | One new row inserted |
| Retry with the same `intakeId` after the row already exists (`23505`) | **200** | `already_received` | **Read only** — no UPDATE, payload unchanged |

The browser only checks `ok === true` (and HTTP success). Both receipts produce the same completion experience, localStorage behavior, export, and print.

Example — first insert:

```json
{
  "ok": true,
  "receipt": "newly_created",
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "submitted",
  "created_at": "2026-07-28T21:00:00.000Z",
  "updated_at": "2026-07-28T21:00:00.000Z",
  "emailSent": false
}
```

Example — duplicate retry (lost prior response):

```json
{
  "ok": true,
  "receipt": "already_received",
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "submitted",
  "created_at": "2026-07-28T21:00:00.000Z",
  "updated_at": "2026-07-28T21:00:00.000Z",
  "emailSent": false
}
```

---

## Submission flow (runtime)

```
Finish / last Continue
    → goTo(closing)
    → local completed + completedAt (unchanged local behavior)
    → render closing (existing experience)
    → submitIntake()
         → ensure intakeId
         → POST buildExport() to /api/intake
         → success: submissionStatus = ok, submittedAt set
         → failure: submissionStatus = failed, toast, Retry control
```

---

## Deployment to Vercel

**Project root must be this folder:** `reading-the-practice/`  
(so `/api/intake` and the static `index.html` share one deployment)

1. Install dependencies once locally (optional for deploy; Vercel installs on build):

   ```bash
   cd reading-the-practice
   npm install
   ```

2. In Vercel: **Add New Project** → import the Git repo.
3. Set **Root Directory** to `reading-the-practice`.
4. Framework preset: **Other**.
5. Build command: leave empty (no front-end build).
6. Output: static files in the root of this folder are served automatically; `/api/*` is compiled by Vercel.
7. Add at least `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
8. Deploy.

### CLI alternative

```bash
cd reading-the-practice
npm install
npx vercel login
npx vercel link
npx vercel env pull
npx vercel --prod
```

### Local API check

```bash
cd reading-the-practice
npm install
npx vercel dev
```

Open `http://localhost:3000`, complete the intake (or jump to closing with existing localStorage), and confirm the network call to `POST /api/intake`.

Plain `python -m http.server` serves the static app only; `/api/intake` will 404 there by design.

---

## SQL (create table)

See `sql/reading_practice_submissions.sql`.

---

## Blockers before a successful production deploy

1. Supabase project + SQL applied.
2. Vercel project with root directory `reading-the-practice` and `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` set.
3. Git remote / deploy permissions for the repo.

Resend credentials are **not** a Phase 1 blocker while email remains disabled.

Until Supabase + Vercel exist, the static experience still runs; failed submits keep local answers and show retry.
