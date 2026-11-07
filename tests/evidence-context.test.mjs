import test from 'node:test';
import assert from 'node:assert/strict';

import {
  EVIDENCE_CONTEXTS,
  evidenceContextNote,
} from '../src/lib/evidenceContext.ts';

test('the controlled values are exactly the three editorial contexts', () => {
  assert.deepEqual([...EVIDENCE_CONTEXTS], ['educational', 'non_educational', 'mixed']);
});

test('a direct education study gets no extrapolation note', () => {
  assert.equal(evidenceContextNote('educational'), null);
});

test('a legacy page with no context gets no invented classification', () => {
  assert.equal(evidenceContextNote(undefined), null);
  assert.equal(evidenceContextNote(null), null);
  assert.equal(evidenceContextNote(''), null);
  assert.equal(evidenceContextNote('not-a-value'), null);
});

test('a non-educational study gets the classroom-outcome boundary note', () => {
  const note = evidenceContextNote('non_educational');
  assert.ok(note);
  assert.match(note.title, /outside educational settings/i);
  assert.match(note.body, /not directly measured classroom outcomes/i);
});

test('a mixed study gets a distinct note', () => {
  const note = evidenceContextNote('mixed');
  assert.ok(note);
  assert.match(note.title, /educational and non-educational/i);
  assert.notEqual(note.body, evidenceContextNote('non_educational')?.body);
});
