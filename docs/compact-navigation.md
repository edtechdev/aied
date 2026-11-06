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
| Published bytes | 2,070,889,441 | 1,348,018,672 | −722,870,769 (−34.9%) |
| HTML bytes | 1,798,456,557 | 1,207,306,916 | −591,149,641 (−32.9%) |
| Sidebar region bytes | 603,896,430 | 87,089,783 | −516,806,647 (−85.6%) |
| Sidebar bytes per page (mean) | ~63,400 | ~9,147 | |
| Right-rail recent-list markup | 164,133,251 | 87,139,909 | −76,993,342 (−46.9%) |
| English HTML median | 130,177 | 79,027 | −51,150 |
| English HTML p95 | 166,190 | 115,555 | −50,635 |
| Arabic HTML median | 197,447 | 126,520 | −70,927 |
| Bengali HTML median | 230,923 | 154,614 | −76,309 |
| Urdu HTML median | 206,144 | 136,949 | −69,195 |

The published-byte comparison includes a separate 132 MB reduction from the
earlier release migration: the old `dist` still held local AI-export files that
are no longer part of the Pages artifact. The navigation-specific saving is the
HTML/sidebar/recent-list rows, not the full published delta. No totals from
nested shell regions are added together.

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
- **Eight-item right rail.** “Recently Added Pages” and “Recently Updated
  Concepts” now each render at most eight entries instead of fifteen. The
  journal remains the full reverse-chronological listing. This removed
  **77.0 MB** of repeated item markup (164.1 MB → 87.1 MB) across the 9,521
  pages that render the rail.

## Validation

- `npx astro check`: 0 errors, 0 warnings, 73 pre-existing hints (432 files).
- `npm run test:nav` (`node --experimental-strip-types --test tests/navigation/compact-nav.test.mjs`): 5/5.
- Built output checks: all 9,520 ordinary pages emit exactly ten compact strand
  links; 0 pages contain `data-translated`; the concepts index has ten section
  anchors matching the sidebar hrefs; context lists are bounded; the FAQ panel
  has five entries; all 19,042 recent-list blocks contain exactly eight items;
  `/translated-routes/{en,fr,ar,bn}.json` exists.
- A full production build completed with 11,882 pages and Pagefind indexed all
  11,888 pages. The size report is `reports/build-size/summary.md`.

## Deferred

Stage A's full build-data profiling and Stage B's broader inline-script
extraction were not attempted in this slice. The new caches are deliberately
small and local; no general caching framework, client-side router, taxonomy
change, search change, release rebuild or deployment was introduced. The
existing 600 MB warning / 750 MB blocking budget is unchanged and enforcement
remains off.
