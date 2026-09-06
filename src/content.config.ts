import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

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

// ==== Editorial validation (2026-09-05) ====
// `tags` must be real concept slugs. `concepts/` is committed (unlike raw/),
// so we derive the authoritative slug set at load time from the concepts dir.
const CONCEPT_SLUGS = new Set(
  readdirSync(conceptsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.slice(0, -3)),
);

// `sources` must be a raw/papers/<slug>.md path — NOT an external URL (a DOI,
// landing page, or bare http link). The schema validates FORMAT only: raw/ is
// gitignored and therefore absent in CI, so a filesystem existence check would
// pass locally but break the GitHub Actions build. Existence of the raw file is
// instead enforced by the pre-build lint (inline_link/check tooling).
const rawSourcePath = z
  .string()
  .refine(p => /^raw\/papers\/[a-zA-Z0-9._-]+\.md$/.test(p), {
    message: "sources entries must be 'raw/papers/<slug>.md' paths, not URLs",
  });

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
    tags: z
      .array(z.string())
      .refine(arr => arr.every(slug => CONCEPT_SLUGS.has(slug)), {
        message: 'tags must be real concept slugs',
      }),
    sources: z.array(rawSourcePath),
    confidence: z.enum(['high', 'medium', 'low']),
    source_url: z.string().optional(),
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
    tags: z
      .array(z.string())
      .refine(arr => arr.every(slug => CONCEPT_SLUGS.has(slug)), {
        message: 'tags must be real concept slugs',
      }),
    confidence: z.enum(['high', 'medium', 'low']),
    source_url: z.string().optional(),
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
    tags: z
      .array(z.string())
      .refine(arr => arr.every(slug => CONCEPT_SLUGS.has(slug)), {
        message: 'tags must be real concept slugs',
      }),
    weight: z.number().catch(0).transform(v => Number.isFinite(v) ? v : 0).optional(),
    source_url: z.string().optional(),
    ...structuredMeta,
  }),
});

export const collections = { articles, concepts, faqs };