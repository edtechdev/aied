# Mobile header + mid-turn steering lessons (2026-09-01)

## Workflow correction: READ follow-up messages before commit/push
While editing the header for mobile, the agent committed and pushed (`git push origin main`, deploy started via GH Actions) WITHOUT reading the maintainer's follow-up messages that arrived mid-turn (out-of-band steering) — he corrected: **"Do not commit until you read the follow-up messages."**

Durable rule for frontend edit→deploy work:
- If any out-of-band / follow-up user message appears mid-turn, read it BEFORE `git commit` + `git push`. the maintainer frequently refines his ask in follow-ups, and pushing the wrong direction deploys it (GH Actions auto-deploys on push).
- When the ask is ambiguous or the user's real complaint differs from the literal first message (here: literal ask was "one row on mobile", real complaint was **header too tall vertically on Firefox mobile**), pause and confirm direction before committing. Do not let an interpretation ride to deployment.

## Header CSS structure (ground truth, for future mobile-header work)
All in `src/layouts/BaseLayout.astro`. Header markup: `.container` > `.header-left` (nav-toggle hamburger + sidebar-toggle + `.brand-link`), `.header-search` (pagefind-searchbox), `nav.header-icons` (Chat/Search/FAQ/Journal icon links).

Mobile behavior lives in the `@media (max-width: 640px)` block (~line 353):
- `header .container { flex-wrap: wrap; order: 3; flex-basis: 100% }` on `.header-search` — i.e. on phones the search box wraps to a SECOND full-width row, making the header two rows tall.
- `.brand-full` hidden, `.brand-short` ("AIEd KB") shown under `@media (max-width: 600px)`.

Reference header pattern: a single `flex nowrap` row (h-16), nav collapses on mobile, and search stays as a compact inline item (icon+trigger) instead of dropping to its own row — the pattern the maintainer points to for "one row on mobile."

## STATUS: unresolved (do not treat as proven fix)
The agent changed mobile to `flex-wrap: nowrap` + let `.header-search` shrink inline + hid the redundant Search header icon (`[title="Search"]`). This compiled and deployed but was **not confirmed by the maintainer** as the desired result — his actual concern was vertical height, and he floated keeping search on a second row. Re-check with the maintainer before assuming single-row-nowrap is the accepted outcome. Verify the deploy (`gh run list`) if this change is kept.
