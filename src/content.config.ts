import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { FACET_VOCAB } from './data/facetVocab';

const articlesDir = resolve(process.cwd(), 'articles');
const conceptsDir = resolve(process.cwd(), 'concepts');
const faqsDir = resolve(process.cwd(), 'faqs');
const resourcesDir = resolve(process.cwd(), 'resources');

// Keep `created`/`updated` as the ORIGINAL frontmatter string (e.g.
// "2026-08-16T20:02:54-04:00"). We must NOT pass them through `z.date()`
// + `toISOString()`, which would shift an Eastern-evening timestamp to the
// next calendar day in UTC. The full timestamp string is used for sorting
// (sidebar, RSS) and date-grouping (journal), all of which read the date
// part via `.split('T')[0]`.
const timeField = z
  .union([z.date(), z.string()])
  .transform(v => (v instanceof Date ? v.toISOString() : String(v)));

// The date the PAPER was published, which is NOT the same as `created` (the date
// this page was ingested — see the cron prompts: created is deliberately the
// ingestion date, so a paper published last year but ingested today still shows up
// in "Recent Articles"). Kept as a string, because the precision available depends
// on the source: a journal PDF may carry a full date, arXiv gives a submission day,
// a book chapter often only a year. Accepted forms are 'YYYY-MM-DD', 'YYYY-MM' and
// 'YYYY'; anything else fails the build rather than rendering a mystery date.
const publishedField = z
  .union([z.date(), z.string()])
  .transform(v => (v instanceof Date ? v.toISOString().split('T')[0] : String(v).trim()))
  .refine(v => /^\d{4}(-\d{2}(-\d{2})?)?$/.test(v), {
    message: 'published must be YYYY, YYYY-MM or YYYY-MM-DD',
  })
  .optional();

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
// `connected_resources` is the same idea for resource pages: slugs from resources/.
const RESOURCE_SLUGS = new Set(
  readdirSync(resourcesDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.slice(0, -3)),
);
const connectedResources = z
  .any()
  .transform(v => (Array.isArray(v) ? v.map(String) : []))
  .optional()
  .refine(arr => (arr ?? []).every(slug => RESOURCE_SLUGS.has(slug)), {
    message: 'connected_resources must be existing resource slugs',
  });

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
    institutions: facetList('institutions'),
    ethics: facetList('ethics'),
    // Study design and data collection. Values that duplicate a concept page's own
    // vocabulary (benchmark, rct, meta-analysis/systematic review, qualitative and
    // quantitative research, mixed methods, design-based research, educational
    // measurement, learning analytics) were removed on 2026-09-20: those belong in
    // the concept facet fields (`methods`, `assessment`, `technology`), and having
    // both meant ~300 pages stated the same method twice in two vocabularies.
    research_method: enumList(
        'action design research',
        'bibliometric',
        'case study',
        'delphi',
        'design and evaluation study',
        'experiment',
        'instrument development',
        'interviews',
        'latent profile analysis',
        'literature review',
        'longitudinal study',
        'network analysis',
        'policy analysis',
        'position paper',
        'process-outcome modeling',
        'quasi-experiment',
        'secondary analysis',
        'structural equation modeling',
        'survey',
        'system development',
        'thematic analysis',
        'theoretical analysis',
        'user study',
    ),
    discipline: enumList(
        'arts education',
        'biology education',
        'business education',
        'chemistry education',
        'cs education',
        'design education',
        'engineering education',
        'english education',
        'environmental education',
        'humanities education',
        'information technology',
        'language learning',
        'legal education',
        'learning sciences',
        'library and information science',
        'math education',
        'medical education',
        'music education',
        'nursing education',
        'physics education',
        'science education',
        'stem education',
        'vocational education',
        'writing education',
    ),
    // Readership only: who the page is written for. The People section keeps its
    // concept pages for browsing, but it no longer backs a metadata field - the
    // retired `stakeholders` field restated this one (audience: learners beside
    // stakeholders: student-experience on 174 pages) or filed topics that belong in
    // a topic facet (teacher-ai-competency, student-experience).
    audience: enumList(
        'administrators',
        'assessment designers',
        'assessment professionals',
        'curriculum designers',
        'educational technology developers',
        'faculty developers',
        'institutions',
        'instructional designers',
        'instructors',
        'learners',
        'learning analytics designers',
        'librarians',
        'medical educators',
        'parents and families',
        'policymakers',
        'researchers',
        'software developers',
    ),
    level: enumList(
        'adult learning',
        'graduate',
        'higher ed',
        'k 12',
        'middle school',
        'preschool',
        'primary education',
        'secondary',
        'special education',
        'teacher education',
        'undergraduate',
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
    published: publishedField,
    sources: z.array(rawSourcePath),
    confidence: z.enum(['high', 'medium', 'low']),
    source_url: z.string().optional(),
    connected_faqs: connectedFaqs,
    connected_resources: connectedResources,
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
    connected_resources: connectedResources,
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
    connected_resources: connectedResources,
    ...structuredMeta,
  }),
});

// ==== Resources (2026-09-20) ====
// A resource is something a reader can go and use: a free tool, a collection of
// tools or activities, a prompt library, an instrument pack, an open format. It is
// NOT a paper — there is no study design, no citation of its own, and no claim to
// ground — so this collection deliberately drops `sources`, `research_method` and
// `page_kind`, and adds the fields that describe a link out: where it lives, what
// it is, who made it, whether the code is open, and when the link was last checked.
// The shared typed facets still apply, so a resource joins the same concept graph
// and the same search filters as articles and concept pages.
const RESOURCE_TYPES = [
    'software',
    'ai tutor',
    'agent skill',
    'prompt or gem library',
    'collection of tools',
    'collection of activities',
    'assessment instrument',
    'open format or specification',
    'ebook or guide',
    'case study collection',
    'dataset or benchmark',
];

const httpUrl = (field: string) => z
  .string()
  .refine(v => /^https?:\/\/[^\s]+$/.test(v), {
    message: `${field} must be an http(s) URL`,
  });

const resources = defineCollection({
  loader: glob({ pattern: '*.md', base: resourcesDir }),
  schema: z.object({
    title: z.string(),
    created: timeField,
    updated: timeField.optional().transform(v => v ?? ''),
    // One sentence for the /resources listing, so the index does not have to parse
    // the body.
    summary: z.string(),
    url: httpUrl('url'),
    source_code: httpUrl('source_code').optional(),
    // Who made it. Some projects publish no individual author: put the project or
    // account name and say so in the body rather than inventing a person.
    author: z.string(),
    author_url: httpUrl('author_url').optional(),
    resource_type: enumList(...RESOURCE_TYPES),
    access: enumList('free', 'free with account', 'freemium'),
    license: z.string().optional(),
    // External links rot: this is the date a person or a cron check last confirmed
    // the url resolves. The link-checking script reads it.
    last_verified: z.string(),
    connected_resources: connectedResources,
    // A resource page may point back at an FAQ it answers; optional, usually empty.
    connected_faqs: connectedFaqs,
    ...structuredMeta,
  }),
});

export const collections = { articles, concepts, faqs, resources };