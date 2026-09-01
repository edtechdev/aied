# FAQ page type (2026-08-24)

The wiki gained a third page type beside concepts and articles. FAQs are
Q&A distillations with rich inline wikilinks, indexed by PageFind, in the
llms files, listed on the journal, and linked from a header `?` icon.

## Content collection

- Source dir: `<WIKI>/faqs/*.md` (gitignored-adjacent? NO — tracked).
- `src/content.config.ts` adds a `faqs` collection: glob `*.md` in `faqs/`,
  schema = `title`, `created`, `updated` (optional), `tags`. Uses the SAME
  `timeField` union transform as articles/concepts (keep `-04:00` string,
  never route through `z.date()`+toISOString which shifts the day).
- Add to `export const collections = { articles, concepts, faqs }`.

## Page template — `src/pages/faqs/[slug].astro`

Mirrors `articles/[slug].astro`'s markdown renderer, but the wikilink resolver
must resolve against THREE slug sets: article, concept, AND faq slugs.
```
const articleSlugs = new Set(allArticles.map(a=>a.id.replace('.md','')));
const conceptSlugs = new Set(allConcepts.map(c=>c.id.replace('.md','')));
const faqSlugs     = new Set(faqs.map(f=>f.id.replace('.md','')));
// in renderInline, pick base:
let base='/aied/concepts';
if (articleSlugs.has(page)) base='/aied/articles';
else if (faqSlugs.has(page)) base='/aied/faqs';
```
- Markup: `<article data-pagefind-filter="page_type:faq">` and put the answer
  body in a `<div data-pagefind-body>` so PageFind indexes it.
- Badge text: `❓ FAQ`. Show `created`/`updated` dates + tags like concepts.

## FAQ index page — `src/pages/faq.astro`

- `<h1>❓ Frequently Asked Questions</h1>` + a reverse-chron list of all FAQs
  linking to `/aied/faqs/<slug>/`. Route is `/aied/faq` (no trailing slash).

## Header icon

Add a question-mark `.header-icon` in `BaseLayout.astro`'s `<nav class="header-icons">`
→ `/aied/faq`, title/aria "FAQ". (Details in `references/header-nav.md`.)

## PageFind / llms / journal — all required wiring

- **PageFind**: automatic — `astro-pagefind` indexes every page with
  `data-pagefind-body` at build. No manual step. VERIFY by searching the live
  site (binary index files are compressed; grepping them for the title is NOT
  a reliable check). the maintainer confirmed FAQ shows in live search.
- **llms**: `tooling/scripts/generate-llms-files.py` — `collect()` now returns
  `(articles, concepts, faqs)`, adds a `## FAQs` section to `llms.txt` and a
  `# FAQs` section to `llms-full.txt`. Rerun after each FAQ. Header count line
  now reads "N concepts, N articles, and N FAQs".
- **journal** (`src/pages/journal.astro`): merge `faqs` into `allItems` with
  `kind:'faq'`, badge `❓`, base route `/aied/faqs`, and update the intro count
  line. Reverse-chron is inherited from the shared sort.

## Connected FAQs (conditional section on concept/article pages)

The user wants a standard bottom section "Connected FAQs" on concept and
article pages, shown ONLY when ≥1 FAQ is connected.

- **Schema**: add optional `connected_faqs` to BOTH the articles and concepts
  schemas in `content.config.ts`:
  `connected_faqs: z.any().transform(v=>Array.isArray(v)?v.map(String):[]).optional()`
- **Frontmatter** on the concept/article page: `connected_faqs: [<faq-slug>]`
  (e.g. `[top-10-findings-ai-education-instructors]`).
- **Template** (both `articles/[slug].astro` and `concepts/[slug].astro`):
  ```
  const faqs = await getCollection('faqs');
  const faqById = new Map(faqs.map(f=>[f.id.replace('.md',''),f]));
  const connectedFaqs = (page.data.connected_faqs || [])
    .map(s=>faqById.get(s))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));  // TS type guard
  ```
  Then render AFTER the body div, BEFORE SourceButtons:
  `{connectedFaqs.length>0 && (<section>…<h2>Connected FAQs</h2><ul>{…}</ul></section>)}`
  Each item: `<a href={/aied/faqs/<id>}>❓ {f.data.title}</a>`.
- **TS gotcha**: `.filter(Boolean)` does NOT narrow the map's `T|undefined`
  to `T` — `astro check` fails with `'f' is possibly 'undefined'`. Use the
  explicit type-guard arrow `(f): f is NonNullable<typeof f> => Boolean(f)`.

## FAQ body conventions

- First line `# <question>` (skipped by renderer as page-title H1).
- Rich inline wikilinks throughout the answer (concept + article + other FAQ
  slugs). Keep the aggressive-inline-links standard.
- Frontmatter: clean `title`, full ISO `-04:00` timestamps, `tags`.
- The first FAQ was "Top 10 Findings from AI in Education Research That
  Instructors Should Know About?" (`faqs/top-10-findings-ai-education-instructors.md`),
  connected to ai-education, teacher-role, and instructional-design.
