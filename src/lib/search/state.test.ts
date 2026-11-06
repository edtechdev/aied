// src/lib/search/state.test.ts
// Unit tests for the pure URL-state module. Run with: node --test src/lib/search/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  ALLOWED_FACETS,
  LIMITS,
  canonicalUrl,
  decodeLegacyFilters,
  emptyState,
  hasState,
  normalizeState,
  stateFromSearchParams,
  stateToSearchParams,
  statesEqual,
} from './state.ts';

const b64 = (s: string) => Buffer.from(s, 'utf-8').toString('base64');

test('parses new-style repeated parameters', () => {
  const r = stateFromSearchParams('?q=feedback&page_type=faq&level=higher+ed&audience=instructors');
  assert.equal(r.state.query, 'feedback');
  assert.deepEqual(r.state.filters.page_type, ['faq']);
  assert.deepEqual(r.state.filters.level, ['higher ed']);
  assert.deepEqual(r.state.filters.audience, ['instructors']);
});

test('round-trips new-style state through serialization', () => {
  const state = { query: 'feedback', filters: { page_type: ['faq'], level: ['higher ed'] } };
  const params = stateToSearchParams(state, new URLSearchParams(''));
  assert.equal(params, '?q=feedback&page_type=faq&level=higher+ed');
  const back = stateFromSearchParams(params);
  assert.deepEqual(back.state, state);
});

test('accepts unicode, plus signs and ampersands without corruption', () => {
  const r = stateFromSearchParams('?q=r%C3%A9f%C3%A9rence+%26+cheating&page_type=faq');
  assert.equal(r.state.query, 'référence & cheating');
});

test('decodes a legacy f base64 payload', () => {
  const payload = b64(JSON.stringify({ page_type: ['faq'], level: ['higher ed'] }));
  const r = stateFromSearchParams(`?q=x&f=${encodeURIComponent(payload)}`);
  assert.deepEqual(r.state.filters, { page_type: ['faq'], level: ['higher ed'] });
});

test('new-style values take precedence over legacy values per facet', () => {
  const payload = b64(JSON.stringify({ page_type: ['concept'], level: ['k-12'] }));
  const r = stateFromSearchParams(`?page_type=faq&f=${encodeURIComponent(payload)}`);
  assert.deepEqual(r.state.filters.page_type, ['faq']);
  assert.deepEqual(r.state.filters.level, ['k-12']);
});

test('rejects malformed base64 and malformed JSON with a notice', () => {
  const r1 = stateFromSearchParams('?f=%21%21%21not-base64%21%21%21');
  assert.deepEqual(r1.state.filters, {});
  assert.ok(r1.notices.some((n) => n.includes('could not be decoded')));
  const r2 = stateFromSearchParams(`?f=${encodeURIComponent('bm90LWpzb24=')}`); // base64("not-json")
  assert.deepEqual(r2.state.filters, {});
  assert.ok(r2.notices.some((n) => n.includes('invalid shape') || n.includes('decoded')));
});

test('drops legacy payloads over the size bound', () => {
  const big = 'x'.repeat(LIMITS.legacyPayloadBytes + 1);
  const r = stateFromSearchParams(`?f=${big}`);
  assert.deepEqual(r.state.filters, {});
  assert.ok(r.notices.some((n) => n.includes('too large')));
});

test('deduplicates values and removes empties', () => {
  const r = stateFromSearchParams('?page_type=faq&page_type=faq&page_type=&page_type=concept');
  assert.deepEqual(r.state.filters.page_type, ['faq', 'concept']);
});

test('ignores unknown facet keys from legacy payloads', () => {
  const payload = b64(JSON.stringify({ not_a_facet: ['x'], page_type: ['faq'], constructor: ['y'] }));
  const r = stateFromSearchParams(`?f=${encodeURIComponent(payload)}`);
  assert.deepEqual(Object.keys(r.state.filters), ['page_type']);
});

test('caps query length', () => {
  const long = 'a'.repeat(LIMITS.query + 50);
  const r = stateFromSearchParams(`?q=${long}`);
  assert.equal(r.state.query.length, LIMITS.query);
  assert.ok(r.notices.some((n) => n.includes('truncated')));
});

test('caps values per facet and drops over-budget selections across facets', () => {
  const many = Array.from({ length: LIMITS.perFacet + 5 }, (_, i) => `v${i}`);
  const r = stateFromSearchParams(many.map((v) => `page_type=${v}`).join('&'));
  assert.equal(r.state.filters.page_type.length, LIMITS.perFacet);
});

test('filter-only URL parses with an empty query', () => {
  const r = stateFromSearchParams('?page_type=resource');
  assert.equal(r.state.query, '');
  assert.deepEqual(r.state.filters.page_type, ['resource']);
  assert.ok(hasState(r.state));
});

test('empty state serializes to empty string', () => {
  const qs = stateToSearchParams(emptyState(), new URLSearchParams(''));
  assert.equal(qs, '');
});

test('preserves unrelated parameters and drops legacy search keys', () => {
  const preserve = new URLSearchParams('utm_source=x&f=stale&q=old');
  const qs = stateToSearchParams({ query: 'new', filters: {} }, preserve);
  assert.equal(qs, '?utm_source=x&q=new');
});

test('normalizeState trims, dedupes and filters unknown facets', () => {
  const n = normalizeState({ query: '  hi  ', filters: { page_type: ['faq', 'faq'], bogus: ['x'] } });
  assert.deepEqual(n, { query: 'hi', filters: { page_type: ['faq'] } });
});

test('statesEqual compares queries and filter sets order-insensitively', () => {
  const a = { query: 'x', filters: { page_type: ['faq', 'concept'] } };
  const b = { query: 'x', filters: { page_type: ['concept', 'faq'] } };
  assert.ok(statesEqual(a, b));
  assert.ok(!statesEqual(a, { query: 'y', filters: a.filters }));
  assert.ok(!statesEqual(a, { query: 'x', filters: { page_type: ['faq'] } }));
});

test('ALLOWED_FACETS includes reserved and topic facets', () => {
  for (const f of ['page_type', 'page_kind', 'discipline', 'level', 'audience', 'research_method', 'pedagogy', 'technology', 'ethics']) {
    assert.ok(ALLOWED_FACETS.includes(f), f);
  }
});
