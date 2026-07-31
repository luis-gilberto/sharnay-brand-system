-- El Retrato · 90-day raw-response retention
-- Table in scope: public.reading_practice_submissions
-- (Phase 1: sole Supabase table holding participant answers / identifying fields / intake payloads.)
--
-- Retention clock:
--   completed submissions → submitted_at (canonical)
--   legacy rows without submitted_at → created_at
-- Drafts are not stored in Supabase in Phase 1 (localStorage only).
--
-- ACTIVATION STATUS: PENDING
-- Run this in the Supabase SQL editor for the connected production project,
-- then verify the cron job appears under Database → Cron Jobs.
-- Do not claim the job is active until that verification succeeds.
--
-- Service-role only. RLS remains enabled with no anon/authenticated policies.
-- Strategic deliverables in StrategyIQ are outside this database and are not deleted.

-- 1. Canonical submission timestamp
alter table public.reading_practice_submissions
  add column if not exists submitted_at timestamptz;

-- Backfill: treat existing rows as submitted at created_at
update public.reading_practice_submissions
set submitted_at = created_at
where submitted_at is null;

create index if not exists reading_practice_submissions_submitted_at_idx
  on public.reading_practice_submissions (submitted_at);

-- 2. Optional operational log (no answer content)
create table if not exists public.reading_practice_retention_log (
  id bigserial primary key,
  ran_at timestamptz not null default now(),
  deleted_count integer not null default 0
);

alter table public.reading_practice_retention_log enable row level security;
-- No policies: service role / cron only.

-- 3. Hard-delete cleanup (permanent; not soft-delete)
create or replace function public.purge_expired_reading_practice_submissions()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  removed integer := 0;
begin
  delete from public.reading_practice_submissions
  where coalesce(submitted_at, created_at) < (now() - interval '90 days');

  get diagnostics removed = row_count;

  insert into public.reading_practice_retention_log (deleted_count)
  values (removed);

  return removed;
end;
$$;

revoke all on function public.purge_expired_reading_practice_submissions() from public;
revoke all on function public.purge_expired_reading_practice_submissions() from anon, authenticated;

-- 4. Daily schedule via pg_cron (requires extension enabled on the project)
create extension if not exists pg_cron with schema extensions;

-- Idempotent re-schedule
select cron.unschedule(jobid)
from cron.job
where jobname = 'purge-reading-practice-submissions-90d';

select cron.schedule(
  'purge-reading-practice-submissions-90d',
  '15 6 * * *', -- 06:15 UTC daily
  $$select public.purge_expired_reading_practice_submissions();$$
);

-- 5. RLS reminder (no SELECT/UPDATE/DELETE for anon or authenticated)
-- Existing: alter table … enable row level security; with zero client policies.
-- Re-assert: do not add public policies that expose payload jsonb.
