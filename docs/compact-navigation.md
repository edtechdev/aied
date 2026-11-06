# Compact navigation and shared page metadata

Implementation note for the compact-navigation slice of the November 2026 site
optimization plan. It is intentionally limited to the page shell: content,
taxonomy, search, URLs and the offline-release path are unchanged.

## Baseline and change

Baseline is the last committed build-size report available before this branch
(`8ad1139bdbd12e89410f08aa6493f7b44258979f`). The comparison build is the final
local branch build; both have the same 11,888-page corpus. The report's commit
field records when it was generated, not a corpus difference.

| Measure | Baseline | After | Change |
|---|---:|---:|---:|
| Published bytes | 2,070,889,441 | 1,425,396,957 | −645,492,484 (−31.2%) |
| HTML bytes | 1,798,456,557 | 1,284,685,319 | −513,771,238 (−28.6%) |
| Sidebar region bytes | 603,896,430 | 87,089,783 | −516,806,647 (−85.6%) |
| Sidebar bytes per page (mean) | ~63,400 | ~9,147 | |
| English HTML median | 130,177 | 87,097 | −43,080 |
| English HTML p95 | 166,190 | 123,625 | −42,565 |
| Arabic HTML median | 197,447 | 134,719 | −62,728 |
| Bengali HTML median | 230,923 | 162,880 | −68,043 |
| Urdu HTML median | 206,144 | 145,100 | −61,044 |

The published-byte comparison includes a separate 132 MB reduction from the
earlier release migration: the old `dist` still held local AI-export files that
are no longer part of the Pages artifact. The navigation-specific saving is the
HTML/sidebar row, not the full published delta. No totals from nested shell
regions are added together.

## What changed

- **Compact concept panel.** Ordinary pages now render ten strand links to the
  existing `/concepts/` anchors instead of the complete concept tree. The
  complete taxonomy remains on the localized concepts index; no second
  taxonomy or destination was created.
- **Bounded context.** A concept page shows its current concept, its registry
  group, and at most eight nearby concepts in registry order. An article, FAQ or
  resource shows at most eight concepts from its existing typed facets, labelled
  as concepts rather than as a hierarchy. Missing or invalid facet targets are
  dropped.
- **Five-FAQ tab.** The FAQ tab shows at most five FAQs, preferring the page's
  `connected_faqs`, then the existing weight/date ranking, with a link to the
  full FAQ index. The complete list remains on the FAQ page.
- **Per-locale route JSON.** `StarredPages` no longer embeds the locale's full
  translated-route list in every page (`data-translated`, ~79 MB across the
  corpus). It fetches `/translated-routes/<locale>.json` lazily; the default
  starred entries are still server-rendered and link to localized pages.
- **Direct starred title lookup.** The layout resolves only the four
  `DEFAULT_STARRED` titles from collection maps instead of constructing the
  full 2,035-entry title map on every page. The existing `/titles/<locale>.json`
  endpoint is unchanged.
- **Promise caches.** `localizedTitles` and `localizedFields` cache the in-flight
  per-locale promise for the production build; a rejected promise is removed.
  Development bypasses the cache so a content edit is visible without restarting.
- **No-JavaScript fallback.** A `<noscript>` row links to the concepts index,
  FAQ index and search, so useful navigation remains available on narrow screens
  when the drawer script cannot run.

## Validation

- `npx astro check`: 0 errors, 0 warnings, 73 pre-existing hints (432 files).
- `npm run test:nav` (`node --experimental-strip-types --test tests/navigation/compact-nav.test.mjs`): 5/5.
- Built output checks: all 9,520 ordinary pages emit exactly ten compact strand
  links; 0 pages contain `data-translated`; the concepts index has ten section
  anchors matching the sidebar hrefs; context lists are bounded; the FAQ panel
  has five entries; `/translated-routes/{en,fr,ar,bn}.json` exists.
- A full production build completed with 11,882 pages and Pagefind indexed all
  11,888 pages. The size report is `reports/build-size/summary.md`.

## Deferred

Stage A's full build-data profiling and Stage B's broader inline-script
extraction were not attempted in this slice. The new caches are deliberately
small and local; no general caching framework, client-side router, taxonomy
change, search change, release rebuild or deployment was introduced. The
existing 600 MB warning / 750 MB blocking budget is unchanged and enforcement
remains off.
