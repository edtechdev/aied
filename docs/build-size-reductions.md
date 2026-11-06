# Build-size reduction candidates

This is a ranked investigation list from the first measured baseline
(2026-11-06). It is **not** an authorization to delete content or navigation.
The report deliberately avoids turning a repeated byte count into a claimed
saving: the same markup can be required for no-JS navigation, accessibility,
and locale behavior.

Measured baseline: **2,070,889,441 published bytes (2070.89 MB)**, 11,888 HTML
files. HTML is 1,798,456,557 bytes (86.8% of the site). Attributed shell regions
are 1,137,798,562 bytes (63.3% of HTML), with 761,784,761 bytes appearing beyond
the first copy of an identical region. The site is above both the 750 MB
internal blocking budget and the conservative 1 GB hosting marker; enforcement
is off pending reductions or an explicit budget decision.

## Ranked candidates

1. **Sidebar HTML duplication — 601.8 MB repeated.**
   The left navigation is rendered into every page. The English sidebar alone is
   repeated on 2,411 pages at 51,754 bytes each (124.7 MB beyond the first copy);
   translated sidebars add roughly 20–25 MB each. Investigate a compact
   server-rendered initial state plus a shared nav payload, or progressive
   disclosure that keeps a usable no-JS fallback. Do not simply remove the
   navigation.

2. **Inline scripts — 88.7 MB repeated.**
   Seven identical inline script regions recur on 9,521 pages (18.2 MB, 15.1 MB,
   14.7 MB, 13.5 MB, 11.7 MB, 10.3 MB, and 5.2 MB before deduplication).
   Moving stable behavior into one hashed, cached JS file would remove most of
   this from each HTML document while preserving behavior.

3. **Journal pages — 63.6 MB total; about 1.95 MB per locale.**
   The 33 journal pages account for 63,557,374 bytes and have a shell of only
   3,916,494 bytes; the cost is the generated article listing. Consider
   pagination, a compact index, or rendering only a bounded recent slice with
   an explicit “view all” route.

4. **Header and footer HTML — 47.3 MB repeated.**
   The header is 23.7 MB beyond the first copy (2,089 occurrences at 11,341
   bytes); the footer is 23.6 MB. These are smaller than the sidebar and inline
   scripts, but they recur on nearly every page and are candidates for a shared
   fragment without changing their visible content.

5. **AI exports — 132.0 MB.**
   `llms-full.txt` is 22.2 MB and the per-locale `llms.*-concepts.txt` files
   account for most of the remaining 109.8 MB. They are useful to agents but are
   not needed to render a page. Investigate serving them from the existing raw
   GitHub URL or a release asset rather than the Pages artifact, preserving the
   documented URLs. This needs an explicit product decision.

6. **Pagefind index — 125.0 MB.**
   The search bundle is 6.0% of published bytes. Do not remove search; first
   profile language indexes and fragment sizes, then decide whether pruning,
   splitting, or a different Pagefind configuration is worthwhile.

7. **Locale footprint — 1.92 GB outside shared output.**
   The 33 locales each carry 102–322 HTML pages. This is a content-scope
   decision, not a build-tooling change; no locale or page should be dropped
   without explicit approval. Report contributions so that decision can be
   made with numbers.

## What was not treated as a saving

- The 1.137 GB shell total is not a removable amount. It is the measured size of
  marked header, sidebar, right rail, footer, inline scripts, and inline style
  regions.
- Repeated-region bytes are exact duplicate bytes beyond the first copy. They
  overlap conceptually with per-page HTML totals and must not be added to them.
- Shared JS or CSS referenced by every page is counted once in the output tree;
  those bytes are already deduplicated by the filesystem.
- A compressed tarball measurement is not a published-byte measurement.

## Next measurement after a change

Run the reporter on a branch build with the same corpus, then compare the
baseline file. Keep the 600 MB warning and 750 MB blocking budgets fixed until
the measured result and the reduction review justify a deliberate change.
