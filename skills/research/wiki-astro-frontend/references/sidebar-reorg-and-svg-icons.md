# Sidebar/TOC Reorganization & SVG Icon Consistency (2026-08-31)

Two recurring classes of frontend edits the maintainer requests. Both are quick but have
cross-file ripple effects a naive one-file edit misses.

## 1. Moving a concept between sidebar/TOC sections

The left sidebar AND the site TOC are both driven by `src/data/conceptIndex.ts`
(one `heading:` block with `groups:[{label, items:[slugs]}]`). The EPUB/PDF TOCs
are ALSO generated from this file via `tooling/build-epub.py`, so moving a slug
updates the sidebar, the site TOC, and the offline TOCs in one place.

Correct sequence (do ALL of these, not just the .ts edit):
1. **`src/data/conceptIndex.ts`** — remove the slug from its old group, add it to
the new group (keep alphabetical-ish order within the group).
2. **`concepts/ai-education.md`** — the umbrella page's narrative lists which
concepts live in which group. Update the matching bullet (e.g. the
`- **Core pedagogies:** ...` line, the `- **Ethics and responsibility:**` line, or
the `## Foundations ... cross-cutting themes` paragraph) so prose matches the
sidebar. the maintainer flags a stale narrative that contradicts the sidebar.
3. **`tooling/concept-index.md`** — only if creating a brand-new concept (add slug
alphabetically + bump `**Total concepts:** N`). For pure moves, no change here.
4. **Bump `updated`** on `ai-education.md` (and the moved concept page if its
content changed).
5. **Regen llms + offline books** so everything stays in sync:
   `python3 tooling/scripts/generate-llms-files.py` then `python3 tooling/build-epub.py`.
6. **`npm run build`**, then verify in `dist/index.html` that the slug sits under
the new group and is absent from the old one (search the HTML blocks by group label).
7. Commit, push, confirm both GH Actions workflows (Build & Verify + Deploy) green,
and curl the live site to confirm the new placement.

Gotchas:
- `git show HEAD -- <file>` to confirm a commit didn't carry unexpected churn
  (the regenerated `llms-full.txt` legitimately produces large +N/-N diffs;
  `conceptIndex.ts` should show exactly the intended line moves).
- Only rename a slug via `src/data/conceptRedirects.ts` + a full-repo sweep when
the concept's identity changes. For a pure re-grouping, KEEP the slug — renaming
breaks dozens of inline `[[slug]]` links for no benefit.
- A rename of a concept page TITLE (not slug) still requires updating the title
field + every `index.md`/`concept-index.md` display label + reciprocal Connected
Concepts descriptor labels on partner pages.

## 2. SVG page-type icon consistency (replace emoji badges)

the maintainer wants consistent Lucide-style inline SVG icons everywhere a page type is
shown, NOT emoji. The established glyphs (viewBox 0 0 24 24, stroke=currentColor,
stroke-width=2):
- **Article / document** (file-text): paths
  `M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`, `M14 2v4a2 2 0 0 0 2 2h4`,
  `M16 13H8`, `M16 17H8`, `M10 9H8`.
- **FAQ** (help-circle): `<circle cx="12" cy="12" r="10"/>`, `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,
  `<line x1="12" y1="17" x2="12.01" y2="17"/>`.
- **Concept** (lightbulb): `<line x1="9" y1="18" x2="15" y2="18"/>`,
  `<line x1="10" y1="22" x2="14" y2="22"/>`,
  `M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5z`.
- **RSS** (rss): `M4 11a9 9 0 0 1 9 9`, `M4 4a16 16 0 0 1 16 16`,
  `<circle cx="5" cy="19" r="1"/>`.

Where they live (all 2026-08-31):
- Article page-type badge: `src/pages/articles/[slug].astro` (was `📄 Research Article`
  emoji → now SVG file-text + `Research Article`).
- Concept badge: `src/pages/concepts/[slug].astro` (lightbulb + `Concept`).
- FAQ badge: `src/pages/faqs/[slug].astro` (help-circle + `FAQ`).
- Journal list items: `src/pages/journal.astro` — `{byDate[date].map(...)}` picks an
  SVG string by `item.kind` (article/faq/concept) and renders it via
  `set:html={`<span>${icon}</span> ${item.data.title}`}` on the `<a>`. (Do NOT try
  to interpolate SVG as `{icon}` in Astro — it must go through `set:html`.)
- Right-sidebar section headers: `src/components/RecentActivity.astro` `<summary>`
  — file-text for "Recently Added Articles", lightbulb for "Recently Updated Concepts".
  Only the section headers get the icon; the per-item rows inside stay text-only.
- Journal page intro: `src/pages/journal.astro` intro `<p>` gained an inline
  "Subscribe to the RSS feed" link (`/aied/rss.xml`) with the RSS SVG icon.

Style pattern for the icon SVG element (match the existing badges):
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:-0.15em;margin-right:0.3rem;">...</svg>`
(header `<summary>` uses `margin-right:0.35rem`; inline body links use `0.2rem`.)

## 3. Button-like FAQ list styling

Both the left-sidebar FAQ tab (`src/components/FaqSidebarList.astro`) and the main
FAQ page (`src/pages/faq.astro`) render each FAQ question as a rounded, bordered
button-like item separated by `gap` (not divider lines). Each `.faq-item`/
`.faq-sidebar-link` uses `border:1px solid var(--card-border-color)`,
`border-radius:6-8px`, a faint `color-mix(in srgb, var(--primary) 4%, transparent)`
background, hover raising tint + border to `var(--primary)`. This is the preferred
list treatment for FAQ questions.

## 4. Journal RSS link in intro

The journal page intro paragraph mentions visitors can subscribe to the RSS feed,
with the link text "Subscribe to the RSS feed" (styled `var(--primary)`) carrying the
RSS SVG icon, pointing at `/aied/rss.xml`.
