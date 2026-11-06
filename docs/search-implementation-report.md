# Search implementation — repair report

Date: 2026-11-06

## What was repaired

- Result hydration reads `(await result.data()).excerpt`; the earlier
  implementation called a non-existent `result.excerpt()` and rendered
  title-only cards.
- Result cards show the page type and available discipline/level values.
- Multi-value facets use Pagefind compound filters (`{ any: [...] }`), giving
  OR within a facet and AND across facets.
- Empty query with filters uses `search(null, { filters })`, so filter-only
  URLs browse the matching subset.
- The search form is compact again: inline Search/Clear/Share buttons (Pico's
  global `button { width:100% }` is overridden), collapsed facet dropdowns,
  a working `More filters` disclosure, and no wall of 272 visible checkboxes.
- Load more renders only the newly hydrated batch, so results are not duplicated.
- Chips use visible facet labels (`Type: FAQ`, not `page_type: FAQ`).
- Non-English search pages show the active language and an English search link
  carrying the same query and filters.
- Article identifier metadata now includes the citation line (authors, title,
  DOI) at weight 2, restoring author lookups without weighting the whole body.
- Concept pages emit reviewed aliases from `concepts.registry.yaml` as
  `data-pagefind-meta="aliases"`; FAQ pages emit reviewed question phrasings
  from `src/data/searchAliases.ts`. Pagefind searches metadata and the adapter
  sets `metaWeights.title = 10` and `metaWeights.aliases = 10` at init, so a
  title or reviewed alias match outranks a long article that merely repeats the
  words.
- The desktop header's separate `pagefind-searchbox` component was removed.
  It was a second search UI with its own ranking, took ~8 s to paint results,
  and shrank to a 101 px field at the 1024 px desktop breakpoint. The header's
  Search icon is now the single entry point to `/aied/search/`, which owns the
  form, filters, and results.

## Measured results

Environment: local production build (`astro build`), Chromium, 11,882 pages,
Pagefind 1.5.2.

- Unit tests: 22/22 (`state.test.ts`, `pagefind.test.ts`); route predicates 4/4.
- New search JS: 13.4 KB raw / 4.4 KB gzip.
- Pagefind bundle: 118.8 MB on disk (11,057 files); 142 MB with block overhead.
- Relevance fixtures (English, top-5 unless noted): 14/14.
  All previously failing intents now land on a target: q02 cognitive offloading
  (#1), q03 AI literacy (#1), q05 AI grading FAQ (#1), q08 developing-an-AI-tutor
  FAQ (#1) and intelligent tutoring (#2), q09 AI Ed evaluation (#2). Author,
  DOI, and exact-title lookups remain #1; facet precision still returns an
  acceptable FAQ first.
- q15 browse behavior works: `page_type=resource` with no query returns
  40 resources.
- UI checks: Search/Clear/Share are 86/145/160 px wide; the primary facets are
  collapsed; 0 checkboxes are visible until a facet is opened; `More filters`
  stays collapsed until opened; excerpts and type badges render; FAQ+Concept
  returns 192 results; Load more adds 10 unique rows (20/20 unique).
- The 90% relevance target is met on the frozen English fixture set (14/14,
  100%). This is a reviewed-alias result, not semantic search: a new phrasing
  that is neither in the page title nor in a reviewed alias can still miss.

## Remaining work

- Alias coverage is finite and reviewed. New high-value question phrasings
  belong in `concepts.registry.yaml` or `src/data/searchAliases.ts`, followed by
  `python3 tooling/scripts/gen-concept-artifacts.py` and a fixture re-grade.
- Search chrome is English on non-English pages (facet legends and placeholders
  are localized). A reviewed translation pass is required before translating
  the new strings.
- Result counts by facet (`totalFilters`) are available from Pagefind but not
  displayed.
