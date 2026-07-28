-- Reading the Practice · Phase 1
-- Run once in the Supabase SQL editor.

create table if not exists public.reading_practice_submissions (
  id uuid primary key,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status text not null,
  client_name text,
  client_email text,
  experience_version text,
  language text,
  payload jsonb not null
);

create index if not exists reading_practice_submissions_created_at_idx
  on public.reading_practice_submissions (created_at desc);

-- Phase 1 writes only through the service role in Vercel.
-- Lock the table down for the anon key until a dashboard exists.
alter table public.reading_practice_submissions enable row level security;

-- No policies for anon/authenticated: service role bypasses RLS.
