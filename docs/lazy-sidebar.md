# Lazy left-sidebar taxonomy

Experiment on branch `sidebar-lazy-taxonomy`. It keeps the compact first paint
from `site-nav-optimization` and makes the complete concept tree and FAQ list
available on demand.

## Design

- The concept panel still renders ten strand headings, but each is now a native
  `<details>` disclosure. Its body is empty until opened.
- Opening a strand fetches `/taxonomy/<locale>.json` once, then inserts that
  strand's groups and links. The response is cached by the browser; opening a
  second strand reuses the same request.
- Selecting the FAQ tab fetches the same response and replaces the five-item
  teaser with the authored FAQ sections from `/faq`; each section expands to its
  questions. The teaser remains the fallback if the request fails.
- FAQ and concept links use the same compact list typography as the starred
  panel: 0.85rem, 1.4 line height, 0.22rem/0.6rem padding, no card borders, and
  an 8% tint on hover.
- The local concept list uses the existing localized “Connected concepts”
  wording, so an article page no longer shows a second heading called
  “Concepts” beneath the Concepts tab.
- The full taxonomy is not in the page HTML: initial pages contain ten empty
  disclosure bodies and five FAQ links, not the 230 concepts or 44 FAQs.
- The endpoint is generated for every configured locale and uses the same
  registry, localized titles, headings, and FAQ comparator as the server-rendered
  sidebar.

## Measured cost

Compared with the compact-navigation build (`1,348,018,672` published bytes,
`1,207,306,916` HTML bytes):

| Measure | Compact | Lazy |
|---|---:|---:|
| Published bytes | 1,348,018,672 | 1,399,635,430 |
| HTML bytes | 1,207,306,916 | 1,257,390,921 |
| Taxonomy JSON files | 0 | 33 (one per locale) |
| HTML pages | 11,888 | 11,888 |

The lazy branch adds about **51.6 MB published / 50.1 MB HTML** over the compact
shell. That is the price of restoring access to the complete lists: ten
disclosures, the grouped FAQ sections, the bundled loader, and about 25–34 KB of
taxonomy JSON per locale. It remains roughly **541 MB smaller in HTML** than the
original full-sidebar build (`1,798,456,557` bytes), because the complete tree is
still absent from every page.

The measurement includes the inline loader that Astro emits into each page
(~2.2 KB). Moving that module to an external shared asset would recover part of
the difference; that is a separate Stage B change.

## Validation

- `npx astro check`: 0 errors, 0 warnings, 73 pre-existing hints (434 files).
- Full production build: 11,882 pages; Pagefind indexed 11,888.
- 33 taxonomy responses, each with 10 sections, 230 concepts and 44 FAQs.
- Every emitted concept and FAQ href resolves in the built site. On partially
  translated locales, the endpoint falls back to the English page instead of
  inventing a missing locale URL.
- Browser check: opening the first strand rendered 4 groups / 28 links; opening
  the FAQ tab rendered ten section disclosures, the first open with its two
  questions; opening the second section brought the rendered FAQ-link count to 6.
- FAQ and concept link computed styles matched the starred list: 15.3px font,
  3.96px × 10.8px padding, 21.42px line height, no border.
- Arabic page retained `dir="rtl"`, loaded `/aied/taxonomy/ar.json`, and rendered
  Arabic group and concept titles with localized hrefs.

## Deferred

- The taxonomy response is not service-worker-cached. If it is unavailable, the
  strand stays empty and the FAQ teaser remains; the page-level concepts link
  and FAQ link still work.
- No full-list preloading, search integration, or removal of the existing
  `/concepts/` index. No deployment or push.
