/**
 * Host routing for Sharnay deliverables on the reading-the-practice project.
 * visualsystem.sharnayphotography.com → VLS HTML at public root (no long filename).
 * elretrato.sharnayphotography.com and default hosts → unchanged El Retrato.
 */
import { next, rewrite } from '@vercel/edge';

const VLS_HOST = 'visualsystem.sharnayphotography.com';
const VLS_FILE = '/Sharnay_Photography_Visual_Language_System_v1_3_ES-EN_accessible.html';

export const config = {
  matcher: ['/', '/index.html'],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const host = (request.headers.get('host') || '').split(':')[0].toLowerCase();

  if (host === VLS_HOST) {
    return rewrite(new URL(VLS_FILE, url));
  }

  return next();
}
