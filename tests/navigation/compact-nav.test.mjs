import test from 'node:test';
import assert from 'node:assert/strict';
import {
  sectionAnchor,
  conceptContext,
  facetConceptSlugs,
  compactFaqs,
  orderFaqsForSidebar,
} from '../../src/lib/compactNav.ts';

const sections = [
  {
    heading: 'Learning and instruction',
    groups: [
      { label: 'Core pedagogies', items: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] },
      { label: 'Later group', items: ['k', 'l'] },
    ],
  },
  {
    heading: 'AI in the disciplines',
    groups: [{ label: 'Subject areas', items: ['math', 'nursing'] }],
  },
];

test('section anchors are stable, lower-case slugs', () => {
  assert.equal(sectionAnchor('AI in the disciplines'), 'ai-in-the-disciplines');
  assert.equal(sectionAnchor('  Equity, ethics, and responsible use  '), 'equity-ethics-and-responsible-use');
});

test('concept context keeps the current concept separate and bounds nearby links', () => {
  const hit = conceptContext(sections, 'e', 4);
  assert.ok(hit);
  assert.equal(hit.group, 'Core pedagogies');
  assert.equal(hit.nearby.length, 4);
  assert.ok(!hit.nearby.includes('e'));
  assert.deepEqual(hit.nearby, ['c', 'd', 'f', 'g']);
});

test('concept context clamps at group edges and returns null for unknown concepts', () => {
  const first = conceptContext(sections, 'a', 3);
  assert.deepEqual(first?.nearby, ['b', 'c', 'd']);
  const last = conceptContext(sections, 'j', 3);
  assert.deepEqual(last?.nearby, ['g', 'h', 'i']);
  assert.equal(conceptContext(sections, 'missing'), null);
});

test('facet concepts dedupe in field and authored order and drop invalid slugs', () => {
  const data = {
    foundations: ['valid', 'missing'],
    pedagogy: ['second', 'valid'],
    technology: ['third'],
  };
  const got = facetConceptSlugs(
    data,
    (slug) => ['valid', 'second', 'third'].includes(slug),
    8,
  );
  assert.deepEqual(got, ['valid', 'second', 'third']);
  assert.deepEqual(facetConceptSlugs(data, () => false), []);
});

test('compact FAQs prefer connected FAQs, then ranked fallback, without duplicates', () => {
  const faqs = [
    { slug: 'one', title: 'One' },
    { slug: 'two', title: 'Two' },
    { slug: 'three', title: 'Three' },
  ];
  assert.deepEqual(
    compactFaqs(faqs, ['three', 'missing', 'one'], 2).map((f) => f.slug),
    ['three', 'one'],
  );
  assert.deepEqual(
    compactFaqs(faqs, [], 5).map((f) => f.slug),
    ['one', 'two', 'three'],
  );
});

test('FAQ sidebar order uses weight then creation date', () => {
  const faqs = [
    { slug: 'low', data: { weight: 1, created: '2026-01-01' } },
    { slug: 'newer', data: { weight: 5, created: '2026-02-01' } },
    { slug: 'older', data: { weight: 5, created: '2026-01-15' } },
  ];
  assert.deepEqual(
    orderFaqsForSidebar(faqs).map((f) => f.slug),
    ['older', 'newer', 'low'],
  );
});
