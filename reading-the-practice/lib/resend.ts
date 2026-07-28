import { Resend } from 'resend';

let resend: Resend | null = null;

function getResend(): Resend {
  if (resend) return resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('Missing RESEND_API_KEY');
  resend = new Resend(key);
  return resend;
}

export type IntakeMailFields = {
  clientName: string;
  clientEmail: string | null;
  language: string;
  submittedAt: string;
  answeredCount: number;
  questionCount: number;
  /** Plain-text body of the full intake, already formatted. */
  formattedIntake: string;
};

/**
 * Notify the studio that a Reading the Practice submission landed.
 * Server-only. Do not call from the browser.
 *
 * Phase 1: kept as the notification abstraction but NOT invoked by /api/intake.
 * Re-enable from the API only after database persistence is verified.
 */
export async function sendIntakeNotification(fields: IntakeMailFields): Promise<void> {
  const from = process.env.FROM_EMAIL;
  const to = process.env.TO_EMAIL;

  if (!from) throw new Error('Missing FROM_EMAIL');
  if (!to) throw new Error('Missing TO_EMAIL');

  const emailLine = fields.clientEmail || '(not provided)';
  const subject = `Reading the Practice — New submission from ${fields.clientName}`;

  const text = [
    'Reading the Practice',
    'New submission',
    '',
    `Client: ${fields.clientName}`,
    `Email: ${emailLine}`,
    `Language: ${fields.language}`,
    `Submitted: ${fields.submittedAt}`,
    `Answered questions: ${fields.answeredCount} of ${fields.questionCount}`,
    '',
    '— Full intake —',
    '',
    fields.formattedIntake
  ].join('\n');

  const { error } = await getResend().emails.send({
    from,
    to,
    subject,
    text
  });

  if (error) {
    throw new Error(error.message || 'Resend failed to send');
  }
}
