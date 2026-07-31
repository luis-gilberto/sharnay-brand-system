import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSupabase } from '../lib/supabase';
/* Resend is intentionally not invoked in Phase 1. Keep the import path and
   lib/resend.ts so notification can be wired after DB persistence is verified.
   import { sendIntakeNotification } from '../lib/resend'; */

/**
 * Canonical client payload: the object returned by buildExport() in app.js.
 * Phase 1 extends it with intakeId, experienceVersion, and optional clientEmail.
 */
type IntakePayload = {
  document?: string;
  client?: string;
  clientEmail?: string | null;
  preparedFor?: string;
  language?: string;
  preparedOn?: string;
  started?: string | null;
  completed?: boolean;
  answeredCount?: number;
  questionCount?: number;
  experienceVersion?: string;
  intakeId?: string;
  sections?: Array<{
    numeral?: string;
    title?: string;
    questions?: Array<{
      number?: number;
      question?: string;
      answer?: string;
      raw?: unknown;
    }>;
  }>;
  filesSelected?: Array<{
    request?: string;
    files?: string[];
  }>;
  note?: string;
  [key: string]: unknown;
};

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const payload = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as IntakePayload;

    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return res.status(400).json({ ok: false, error: 'Body must be the buildExport() object' });
    }

    if (!payload.client || !payload.language) {
      return res.status(400).json({ ok: false, error: 'Payload missing client or language' });
    }

    const intakeId = typeof payload.intakeId === 'string' ? payload.intakeId : '';
    if (!intakeId || !isUuid(intakeId)) {
      return res.status(400).json({
        ok: false,
        error: 'Payload must include intakeId as a UUID (generated once per local session)'
      });
    }

    const now = new Date().toISOString();
    const clientName = String(payload.client);
    const clientEmail =
      payload.clientEmail == null || payload.clientEmail === ''
        ? null
        : String(payload.clientEmail);
    const language = String(payload.language);
    const experienceVersion =
      typeof payload.experienceVersion === 'string' && payload.experienceVersion
        ? payload.experienceVersion
        : 'sharnay-1';

    const row = {
      id: intakeId,
      updated_at: now,
      submitted_at: now,
      status: 'submitted',
      client_name: clientName,
      client_email: clientEmail,
      experience_version: experienceVersion,
      language,
      payload
    };

    const supabase = getSupabase();

    /* Phase 1 write strategy: INSERT only (not upsert).
       Primary key `id` = client intakeId.
       - First write: INSERT, HTTP 201, receipt: "newly_created".
       - Duplicate (23505): SELECT only — never UPDATE, never rewrite payload.
         HTTP 200, receipt: "already_received".
       Client treats both as ok: true and shows the same completion UX. */
    const { data, error } = await supabase
      .from('reading_practice_submissions')
      .insert(row)
      .select('id, created_at, updated_at, status')
      .single();

    if (error) {
      if (error.code === '23505') {
        /* Read-only confirmation. No .update(), no payload in this path. */
        const existing = await supabase
          .from('reading_practice_submissions')
          .select('id, created_at, updated_at, status')
          .eq('id', intakeId)
          .single();

        if (existing.error || !existing.data) {
          console.error('duplicate key but row not readable', existing.error || error);
          return res.status(500).json({ ok: false, error: 'Database write failed' });
        }

        return res.status(200).json({
          ok: true,
          receipt: 'already_received',
          id: existing.data.id,
          status: existing.data.status,
          created_at: existing.data.created_at,
          updated_at: existing.data.updated_at,
          emailSent: false
        });
      }

      console.error('supabase insert failed', error);
      return res.status(500).json({ ok: false, error: 'Database write failed' });
    }

    /* Phase 1: Resend is disabled until DB persistence is verified.
       sendIntakeNotification(...) intentionally not called. */
    return res.status(201).json({
      ok: true,
      receipt: 'newly_created',
      id: data.id,
      status: data.status,
      created_at: data.created_at,
      updated_at: data.updated_at,
      emailSent: false
    });
  } catch (err) {
    console.error('POST /api/intake failed', err);
    return res.status(500).json({ ok: false, error: 'Unexpected server error' });
  }
}
