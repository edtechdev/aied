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
- FAQ bodies carry weight 2, matching concepts/resources for broad queries.

## Measured results

Environment: local production build (`astro build`), Chromium, 11,882 pages,
Pagefind 1.5.2.

- Unit tests: 22/22 (`state.test.ts`, `pagefind.test.ts`); route predicates 4/4.
- New search JS: 13.4 KB raw / 4.4 KB gzip.
- Pagefind bundle: 118.8 MB on disk (11,057 files); 142 MB with block overhead.
- Relevance fixtures (English, top-5 unless noted): 9/14 (64%).
  Passing: q01, q04, q06, q07, q10, q11 (author, top-3), q12 (DOI, top-3),
  q13 (exact title, top-3), q14.
  Failing: q02 (overreliance), q03 (AI literacy), q05 (AI grading),
  q08 (build a tutor), q09 (evaluate a chatbot). Their intended concepts sit
  at ranks 11–20+; lexical search does not connect the natural-language query
  to those pages without aliases or semantic retrieval.
- q15 browse behavior now works: `page_type=resource` with no query returns
  40 resources (the fixture's specific `clarity` target is not in the first
  five, so the fixture grade is not claimed).
- UI checks: Search/Clear/Share are 86/145/160 px wide; the primary facets are
  collapsed; 0 checkboxes are visible until a facet is opened; `More filters`
  stays collapsed until opened; excerpts and type badges render; FAQ+Concept
  returns 192 results; Load more adds 10 unique rows (20/20 unique).
- The plan's 90% relevance target is **not met**. This is reported as a
  limitation, not hidden by weakening the fixture.

## Remaining work

- Relevance for natural-language educator queries needs a deliberate alias or
  concept-suggestion layer; weighting alone does not close the gap.
- Search chrome is English on non-English pages (facet legends and placeholders
  are localized). A reviewed translation pass is required before translating
  the new strings.
- Result counts by facet (`totalFilters`) are available from Pagefind but not
  displayed.
