import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { FACET_VOCAB } from './data/facetVocab';

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
// Concept references are typed: each facet field accepts only the concept slugs of
// one registry section. `concepts/` is committed (unlike raw/),
// so we derive the authoritative slug set at load time from the concepts dir.
const CONCEPT_SLUGS = new Set(
  readdirSync(conceptsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.slice(0, -3)),
);

// `connected_faqs` must reference existing FAQ pages only (2026-09-06). faqs/
// is committed, so the authoritative set derives from the faqs dir at load time.
const FAQ_SLUGS = new Set(
  readdirSync(faqsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.slice(0, -3)),
);
// Shared schema: normalized to a string array, then every entry must be a real
// FAQ slug (matched against the faqs collection, mirroring the Sveltia CMS
// relation widget on the same field).
const connectedFaqs = z
  .any()
  .transform(v => (Array.isArray(v) ? v.map(String) : []))
  .optional()
  .refine(arr => (arr ?? []).every(slug => FAQ_SLUGS.has(slug)), {
    message: 'connected_faqs must be existing FAQ slugs',
  });

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
// These fields hold metadata that is not a concept: how the study was done, who it
// is for, what educational level, and which kind of page this is. Normalized to a controlled vocabulary (2026-09-06):
// audience/level/research_method/discipline/category are each restricted to a
// fixed enum (see content.config.ts canonical arrays), mirroring the Sveltia CMS
// select widgets. Kept lowercase space-separated so the raw token doubles as the
// human-readable PageFind facet label (search.astro facets display these verbatim).
const enumList = (...opts: string[]) => z
  .any()
  .transform(v => (Array.isArray(v) ? v.map(String) : []))
  .optional()
  .refine(arr => (arr ?? []).every(v => opts.includes(v)), {
    message: 'value must be one of the allowed options',
  });

// Facet fields: the allowed values ARE the concept slugs of one registry
// section, imported from the generated src/data/facetVocab.ts. Adding a concept
// to a registry section therefore extends the vocabulary automatically, with no
// second list to maintain.
const facetList = (facet: keyof typeof FACET_VOCAB) =>
  enumList(...FACET_VOCAB[facet]);

const structuredMeta = {
    // Typed facet fields (2026-09-17). Each mirrors one section of
    // concepts.registry.yaml, and its allowed values are exactly that section's
    // concept slugs (see src/data/facetVocab.ts, generated). This is the typed
    // layer that replaced the old per-page tag list: a facet value says which concepts a page
    // touches, a facet field says what KIND of concept it is, so the search
    // facets can ask "show me pedagogy studies" without scanning a mixed list.
    // Vocabulary drift is impossible in the direction that matters: a concept
    // added to a registry section becomes a legal value on the next build, and a
    // value of the wrong kind fails the build.
    foundations: facetList('foundations'),
    pedagogy: facetList('pedagogy'),
    technology: facetList('technology'),
    assessment: facetList('assessment'),
    methods: facetList('methods'),
    stakeholders: facetList('stakeholders'),
    institutions: facetList('institutions'),
    ethics: facetList('ethics'),
    research_method: enumList(
        'action design research',
        'benchmark',
        'bibliometric',
        'case study',
        'delphi',
        'design and evaluation study',
        'design-based research',
        'educational measurement',
        'experiment',
        'instrument development',
        'interviews',
        'learning analytics',
        'literature review',
        'longitudinal',
        'longitudinal study',
        'longitudinal survey',
        'meta-analysis',
        'mixed methods',
        'policy analysis',
        'position paper',
        'process-outcome modeling',
        'qualitative',
        'quantitative',
        'quasi-experiment',
        'randomized controlled trial',
        'research methods',
        'secondary analysis',
        'structural equation modeling',
        'survey',
        'system development',
        'systematic review',
        'thematic analysis',
        'theoretical analysis',
        'user study',
    ),
    discipline: enumList(
        'biology education',
        'business education',
        'chemistry education',
        'cs education',
        'design education',
        'engineering education',
        'english education',
        'humanities education',
        'information technology',
        'language learning',
        'learning sciences',
        'math education',
        'medical education',
        'nursing education',
        'physics education',
        'science education',
        'stem education',
        'vocational education',
        'writing education',
    ),
    audience: enumList(
        'administrators',
        'assessment designers',
        'assessment professionals',
        'curriculum designers',
        'designers',
        'edtech designers',
        'educators',
        'faculty development',
        'institutions',
        'instructional designers',
        'instructors',
        'learners',
        'learning analytics designers',
        'learning designers',
        'medical educators',
        'policymakers',
        'researchers',
        'software developers',
        'students',
        'teacher educators',
        'teachers',
    ),
    level: enumList(
        'adult learning',
        'early childhood',
        'elementary',
        'higher ed',
        'k 12',
        'secondary',
        'special education',
        'teacher training',
    ),
    page_kind: enumList(
        'framework',
        'synthesis',
        'evaluation',
    ),
};

const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: articlesDir }),
  schema: z.object({
    title: z.string(),
    created: timeField,
    updated: timeField.optional().transform(v => v ?? ''),
    sources: z.array(rawSourcePath),
    confidence: z.enum(['high', 'medium', 'low']),
    source_url: z.string().optional(),
    connected_faqs: connectedFaqs,
    ...structuredMeta,
  }),
});

const concepts = defineCollection({
  loader: glob({ pattern: '*.md', base: conceptsDir }),
  schema: z.object({
    title: z.string(),
    created: timeField,
    updated: timeField.optional().transform(v => v ?? ''),
    confidence: z.enum(['high', 'medium', 'low']),
    source_url: z.string().optional(),
    connected_faqs: connectedFaqs,
    ...structuredMeta,
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '*.md', base: faqsDir }),
  schema: z.object({
    title: z.string(),
    created: timeField,
    updated: timeField.optional().transform(v => v ?? ''),
    weight: z.number().catch(0).transform(v => Number.isFinite(v) ? v : 0).optional(),
    source_url: z.string().optional(),
    ...structuredMeta,
  }),
});

export const collections = { articles, concepts, faqs };