import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { resolve } from 'path';

const articlesDir = resolve(process.cwd(), 'articles');
const conceptsDir = resolve(process.cwd(), 'concepts');

// Keep `created`/`updated` as the ORIGINAL frontmatter string (e.g.
// "2026-08-16T20:02:54-04:00"). We must NOT pass them through `z.date()`
// + `toISOString()`, which would shift an Eastern-evening timestamp to the
// next calendar day in UTC. The full timestamp string is used for sorting
// (sidebar, RSS) and date-grouping (journal), all of which read the date
// part via `.split('T')[0]`.
const timeField = z
  .union([z.date(), z.string()])
  .transform(v => (v instanceof Date ? v.toISOString() : String(v)));

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
  }),
});

export const collections = { articles, concepts };
