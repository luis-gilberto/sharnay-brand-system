/**
 * Build helper: publish the canonical VLS HTML as this project's index.html.
 * Does not create a divergent source copy in git — only a build output.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(
  dir,
  '..',
  'reading-the-practice',
  'Sharnay_Photography_Visual_Language_System_v1.3_ES-EN.html'
);
const dest = path.join(dir, 'index.html');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  const stat = fs.statSync(dest);
  console.log('Copied canonical VLS → index.html (' + stat.size + ' bytes)');
} else if (fs.existsSync(dest)) {
  // CLI upload of this folder alone: use prebuilt index.html
  console.log('Canonical path not in deploy bundle; using prebuilt index.html');
} else {
  console.error('Canonical VLS missing and no prebuilt index.html:', src);
  process.exit(1);
}
