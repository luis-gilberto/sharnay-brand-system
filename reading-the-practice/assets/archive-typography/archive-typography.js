/**
 * Archive Typography System · v1
 * Length resolver + renderer for El Retrato · Return Plate
 *
 * Approved 2026-07-29 · production
 * See README.md for the ruleset.
 *
 * Zero dependencies. Works in any modern browser and Node ≥ 18.
 */

/* ---------------------------------------------------------------
 * Configuration — mirrors the CSS custom properties.
 * If you change these, change archive-typography.css to match.
 * --------------------------------------------------------------- */

export const PRESETS = Object.freeze({
  a0: {
    name: 'A₀',
    kind: 'Micro',
    min: 0,
    max: 21,
    size: 52,
    lineHeight: 1.06,
    tracking: -0.012,
    measureCh: 24,
  },
  a: {
    name: 'A',
    kind: 'Short',
    min: 22,
    max: 48,
    size: 42,
    lineHeight: 1.14,
    tracking: -0.006,
    measureCh: 28,
  },
  b: {
    name: 'B',
    kind: 'Medium (anchor)',
    min: 49,
    max: 120,
    size: 32,
    lineHeight: 1.28,
    tracking: -0.002,
    measureCh: 30,
  },
  c: {
    name: 'C',
    kind: 'Long',
    min: 121,
    max: 150,
    size: 23,
    lineHeight: 1.4,
    tracking: 0.001,
    measureCh: 42,
  },
  c1: {
    name: 'C₁',
    kind: 'Dense',
    min: 151,
    max: 180,
    size: 20,
    lineHeight: 1.5,
    tracking: 0.002,
    measureCh: 46,
  },
});

export const HARD_LIMIT = 180;
export const MIN_VIABLE_SIZE_PX = 16;

/* ---------------------------------------------------------------
 * resolvePreset(fragment)
 * Returns { ok: true, preset, presetKey, length }
 *      or { ok: false, reason, length }
 *
 * The resolver is the only place that decides which preset applies.
 * If it returns ok:false, the fragment MUST NOT be rendered.
 * --------------------------------------------------------------- */

export function resolvePreset(fragment) {
  if (typeof fragment !== 'string') {
    return { ok: false, reason: 'not-a-string', length: 0 };
  }

  const trimmed = fragment.trim();

  if (trimmed.length === 0) {
    return { ok: false, reason: 'empty-or-whitespace', length: 0 };
  }

  const length = trimmed.length;

  if (length > HARD_LIMIT) {
    return { ok: false, reason: 'exceeds-hard-limit', length };
  }

  // route to preset by length
  for (const key of Object.keys(PRESETS)) {
    const p = PRESETS[key];
    if (length >= p.min && length <= p.max) {
      return { ok: true, preset: p, presetKey: key, length };
    }
  }

  // If we fall through, the length routing is misconfigured.
  return { ok: false, reason: 'no-matching-preset', length };
}

/* ---------------------------------------------------------------
 * renderFragment(fragment, leafElement, options?)
 * Applies the resolved preset to the DOM.
 *
 * leafElement — must be the .archive-leaf container (already in DOM)
 * options.onReject — optional callback if the fragment is rejected
 *
 * Returns the same object shape as resolvePreset().
 * --------------------------------------------------------------- */

export function renderFragment(fragment, leafElement, options = {}) {
  if (!(leafElement instanceof Element)) {
    throw new TypeError('renderFragment: leafElement must be an Element');
  }

  const result = resolvePreset(fragment);

  if (!result.ok) {
    // Clear the leaf. Upstream is responsible for user-facing UX
    // (e.g. asking the participant to shorten their input).
    leafElement.removeAttribute('data-preset');
    const fragEl = leafElement.querySelector('.archive-fragment');
    if (fragEl) fragEl.textContent = '';
    if (typeof options.onReject === 'function') options.onReject(result);
    return result;
  }

  const fragEl = leafElement.querySelector('.archive-fragment');
  if (!fragEl) {
    throw new Error('renderFragment: leaf must contain a .archive-fragment child');
  }

  // Insert the participant's exact words. No transformation, ever.
  fragEl.textContent = fragment.trim();
  leafElement.setAttribute('data-preset', result.presetKey);

  // Hard rule: shrink in 1px steps until every character fits on the leaf.
  // Never truncate. Never hyphenate. Never crop.
  if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
    window.requestAnimationFrame(function () {
      fitFragmentToLeaf(fragEl, leafElement, result.preset.size);
    });
  } else {
    fitFragmentToLeaf(fragEl, leafElement, result.preset.size);
  }

  return result;
}

/**
 * Shrink font-size in 1px steps until the fragment fits inside the leaf.
 * If it cannot fit at MIN_VIABLE_SIZE_PX, clear and reject.
 */
export function fitFragmentToLeaf(fragEl, leafEl, startPx) {
  if (!fragEl || !leafEl) return { ok: false, reason: 'missing-elements' };
  var size = typeof startPx === 'number' ? startPx : MIN_VIABLE_SIZE_PX;
  fragEl.style.fontSize = size + 'px';

  function overflows() {
    var f = fragEl.getBoundingClientRect();
    var l = leafEl.getBoundingClientRect();
    return (
      f.top < l.top - 0.5 ||
      f.bottom > l.bottom + 0.5 ||
      f.left < l.left - 0.5 ||
      f.right > l.right + 0.5
    );
  }

  while (size > MIN_VIABLE_SIZE_PX && overflows()) {
    size -= 1;
    fragEl.style.fontSize = size + 'px';
  }

  if (overflows()) {
    leafEl.removeAttribute('data-preset');
    fragEl.textContent = '';
    fragEl.style.fontSize = '';
    return { ok: false, reason: 'cannot-fit-at-minimum', size: MIN_VIABLE_SIZE_PX };
  }

  return { ok: true, size: size };
}

/* ---------------------------------------------------------------
 * Utilities — surfaced for tests and debugging.
 * --------------------------------------------------------------- */

/** Return the preset that would apply to a given length, or null. */
export function presetForLength(length) {
  if (typeof length !== 'number' || length <= 0 || length > HARD_LIMIT) return null;
  for (const key of Object.keys(PRESETS)) {
    const p = PRESETS[key];
    if (length >= p.min && length <= p.max) return { presetKey: key, preset: p };
  }
  return null;
}

/** Sanity check: verify preset ranges are contiguous and cover 1..180. */
export function auditPresetCoverage() {
  const gaps = [];
  const overlaps = [];
  const sorted = Object.entries(PRESETS).sort(([, a], [, b]) => a.min - b.min);
  for (let i = 0; i < sorted.length; i++) {
    const [key, p] = sorted[i];
    if (i === 0 && p.min !== 0) gaps.push({ from: 0, to: p.min - 1 });
    if (i > 0) {
      const prev = sorted[i - 1][1];
      if (p.min !== prev.max + 1) {
        if (p.min > prev.max + 1) gaps.push({ from: prev.max + 1, to: p.min - 1 });
        if (p.min <= prev.max)   overlaps.push({ presets: [sorted[i - 1][0], key], at: p.min });
      }
    }
    if (i === sorted.length - 1 && p.max !== HARD_LIMIT) {
      gaps.push({ from: p.max + 1, to: HARD_LIMIT });
    }
  }
  return { ok: gaps.length === 0 && overlaps.length === 0, gaps, overlaps };
}
