import test from 'node:test';
import assert from 'node:assert/strict';
import { toPagefindFilters } from './pagefind.ts';

test('single filter values are passed as strings', () => {
  assert.deepEqual(toPagefindFilters({ page_type: ['faq'], level: ['higher ed'] }), {
    page_type: 'faq',
    level: 'higher ed',
  });
});

test('multiple values within one facet become an OR (any) filter', () => {
  assert.deepEqual(toPagefindFilters({ page_type: ['faq', 'concept'] }), {
    page_type: { any: ['faq', 'concept'] },
  });
});

test('facets stay ANDed by being separate keys in the same object', () => {
  assert.deepEqual(
    toPagefindFilters({ page_type: ['faq', 'concept'], level: ['higher ed'] }),
    { page_type: { any: ['faq', 'concept'] }, level: 'higher ed' },
  );
});

test('values are trimmed, deduplicated, and empty values dropped', () => {
  assert.deepEqual(toPagefindFilters({ page_type: [' faq ', 'faq', ''] }), {
    page_type: 'faq',
  });
});

test('empty filter state produces no options object', () => {
  assert.equal(toPagefindFilters({}), undefined);
  assert.equal(toPagefindFilters({ page_type: [] }), undefined);
});
