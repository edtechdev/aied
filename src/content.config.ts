import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { resolve } from 'path';

const articlesDir = resolve(process.cwd(), 'articles');
const conceptsDir = resolve(process.cwd(), 'concepts');
const faqsDir = resolve(process.cwd(), 'faqs');

// Keep `created`/`updated` as the ORIGINAL frontmatter string (e.g.
// "2026-08-16T20:02:54-04:00"). We must NOT pass them through `z.date()`
// + `toISOString()`, which would shift an Eastern-evening timestamp to the
// next calendar day in UTC. The full timestamp string is used for sorting
// (sidebar, RSS) and date-grouping (journal), all of which read the date
// part via `.split('T')[0]`.
const timeField = z
  .union([z.date(), z.string()])
  .transform(v => (v instanceof Date ? v.toISOString() : String(v)));

// Optional structured metadata fields (added 2026-08-29 tag migration).
// `tags` is the concept vocabulary; these hold non-concept metadata that was
// formerly mixed into `tags`. Inert until surfaced in the UI / facets.
const structField = z.any().transform(v => Array.isArray(v) ? v.map(String) : []);
const structuredMeta = {
  research_method: structField.optional(),
  discipline: structField.optional(),
  audience: structField.optional(),
  level: structField.optional(),
  category: structField.optional(),
};

const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: articlesDir }),
  schema: z.object({
    title: z.string(),
    created: timeField,
    updated: timeField.optional().transform(v => v ?? ''),
    tags: z.any().transform(v => Array.isArray(v) ? v.map(String) : []),
    sources: z.any().transform(v => Array.isArray(v) ? v.flat().map(String) : []),
    confidence: z.string().catch('medium').transform(v =>
      ['high', 'medium', 'low'].includes(v) ? v : 'medium'
    ),
    connected_faqs: z.any().transform(v => Array.isArray(v) ? v.map(String) : []).optional(),
    ...structuredMeta,
  }),
});

const concepts = defineCollection({
  loader: glob({ pattern: '*.md', base: conceptsDir }),
  schema: z.object({
    title: z.string(),
    created: timeField,
    updated: timeField.optional().transform(v => v ?? ''),
    tags: z.any().transform(v => Array.isArray(v) ? v.map(String) : []),
    confidence: z.string().catch('medium').transform(v =>
      ['high', 'medium', 'low'].includes(v) ? v : 'medium'
    ),
    connected_faqs: z.any().transform(v => Array.isArray(v) ? v.map(String) : []).optional(),
    ...structuredMeta,
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '*.md', base: faqsDir }),
  schema: z.object({
    title: z.string(),
    created: timeField,
    updated: timeField.optional().transform(v => v ?? ''),
    tags: z.any().transform(v => Array.isArray(v) ? v.map(String) : []),
    weight: z.number().catch(0).transform(v => Number.isFinite(v) ? v : 0).optional(),
    ...structuredMeta,
  }),
});

export const collections = { articles, concepts, faqs };
