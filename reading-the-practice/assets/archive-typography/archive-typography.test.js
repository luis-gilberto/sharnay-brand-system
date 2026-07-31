/**
 * Archive Typography System · v1
 * Behavioral test suite.
 *
 * Run with any modern JS test runner (Vitest, Node's built-in test, Jest).
 * Zero external assumptions — no assertions beyond `assert` from node:assert.
 */

import { strict as assert } from 'node:assert';
import {
  resolvePreset,
  presetForLength,
  auditPresetCoverage,
  PRESETS,
  HARD_LIMIT,
} from './archive-typography.js';

/* ---------------------------------------------------------------
 * Structural: preset ranges cover [1, 180] with no gaps or overlaps.
 * --------------------------------------------------------------- */
{
  const audit = auditPresetCoverage();
  assert.equal(audit.ok, true, `Preset coverage broken: ${JSON.stringify(audit)}`);
  console.log('✓ Preset coverage is contiguous 1..180 with no gaps or overlaps');
}

/* ---------------------------------------------------------------
 * Boundary tests: each preset's min and max resolve correctly.
 * --------------------------------------------------------------- */
{
  const boundaries = [
    { length: 1,   expectKey: 'a0' },
    { length: 21,  expectKey: 'a0' },
    { length: 22,  expectKey: 'a'  },
    { length: 48,  expectKey: 'a'  },
    { length: 49,  expectKey: 'b'  },
    { length: 120, expectKey: 'b'  },
    { length: 121, expectKey: 'c'  },
    { length: 150, expectKey: 'c'  },
    { length: 151, expectKey: 'c1' },
    { length: 180, expectKey: 'c1' },
  ];

  for (const { length, expectKey } of boundaries) {
    const fragment = 'x'.repeat(length);
    const result = resolvePreset(fragment);
    assert.equal(result.ok, true, `Length ${length} should resolve`);
    assert.equal(
      result.presetKey,
      expectKey,
      `Length ${length} should resolve to ${expectKey}, got ${result.presetKey}`
    );
  }
  console.log('✓ All 10 preset boundary lengths route correctly');
}

/* ---------------------------------------------------------------
 * Rejection tests: the hard rule must be enforced.
 * --------------------------------------------------------------- */
{
  const rejects = [
    { input: '',                    reason: 'empty-or-whitespace' },
    { input: '     ',               reason: 'empty-or-whitespace' },
    { input: '\n\t  \n',            reason: 'empty-or-whitespace' },
    { input: 'x'.repeat(181),       reason: 'exceeds-hard-limit' },
    { input: 'x'.repeat(500),       reason: 'exceeds-hard-limit' },
    { input: null,                  reason: 'not-a-string' },
    { input: undefined,             reason: 'not-a-string' },
    { input: 42,                    reason: 'not-a-string' },
    { input: { text: 'hi' },        reason: 'not-a-string' },
  ];

  for (const { input, reason } of rejects) {
    const result = resolvePreset(input);
    assert.equal(result.ok, false, `Input ${JSON.stringify(input)} should reject`);
    assert.equal(result.reason, reason, `Input ${JSON.stringify(input)} expected reason=${reason}, got ${result.reason}`);
  }
  console.log('✓ All 9 rejection cases produce the correct reason');
}

/* ---------------------------------------------------------------
 * Semantic: real-shape fragments route to the emotionally correct band.
 * --------------------------------------------------------------- */
{
  const samples = [
    // A₀ — micro
    ['No lo dije.',                          'a0'],   // 11 chars
    ['Todavía no sé.',                       'a0'],   // 14 chars

    // A — short
    ['Me arrepentí antes de terminar la frase.', 'a'], // 40 chars

    // B — medium (the anchor)
    ['Sé que fui injusta con ella, pero en ese momento no vi otra manera.', 'b'], // 68 chars
    ['Todavía no sé si me arrepiento de haberlo dicho, o de haber esperado tanto para decirlo.', 'b'], // 88 chars

    // C — long
    ['Todavía no sé si me arrepiento de haberlo dicho, o de haber esperado tanto para decirlo, aunque sé que algo cambió aquel día.', 'c'], // 125 chars

    // C₁ — dense
    ['Me tomó años entender que lo que yo llamaba paciencia era en realidad miedo a decir lo que pensaba, y ahora ya no sé si tengo tiempo para corregirlo del todo.', 'c1'], // 158 chars
  ];

  for (const [text, expectKey] of samples) {
    const result = resolvePreset(text);
    assert.equal(result.ok, true, `Sample should resolve: "${text}"`);
    // We assert the emotional band the sample was designed for.
    // If length happens to fall in an adjacent band, the assertion will fail
    // and we know the sample was miscategorised — not the system.
    assert.equal(
      result.presetKey,
      expectKey,
      `Expected ${expectKey} for length ${result.length}, got ${result.presetKey}. Text: "${text}"`
    );
  }
  console.log('✓ All 7 semantic samples route to the correct emotional band');
}

/* ---------------------------------------------------------------
 * Whitespace + Unicode: trim behavior and multi-byte characters.
 * --------------------------------------------------------------- */
{
  const trimmed = resolvePreset('   No lo dije nunca.   ');
  assert.equal(trimmed.ok, true);
  assert.equal(trimmed.length, 'No lo dije nunca.'.length);
  console.log('✓ Whitespace is trimmed before routing');

  // Accented chars count as one code unit in .length. Spanish diacritics OK.
  const acented = resolvePreset('Todavía no sé.');
  assert.equal(acented.ok, true);
  assert.equal(acented.length, 14);
  console.log('✓ Spanish diacritics counted correctly');
}

/* ---------------------------------------------------------------
 * presetForLength utility
 * --------------------------------------------------------------- */
{
  assert.equal(presetForLength(0),    null,  'length 0 has no preset');
  assert.equal(presetForLength(-5),   null,  'negative length has no preset');
  assert.equal(presetForLength(999),  null,  'over hard limit has no preset');
  assert.equal(presetForLength(75).presetKey, 'b', 'length 75 → B');
  console.log('✓ presetForLength returns correct results across edge cases');
}

/* ---------------------------------------------------------------
 * All tests passed.
 * --------------------------------------------------------------- */

console.log('\n' + '─'.repeat(56));
console.log('  Archive Typography System · v1 · all tests passing');
console.log('─'.repeat(56));
