# Sidebar tabs, icons, and page-type badges

Session-derived detail for the left sidebar tab control and page-type badges in the
AIEd KB Astro frontend (`<WIKI>`). the maintainer iterates on these directly.

## Sidebar tabs (Concepts / FAQs / Starred)
The left sidebar in `src/layouts/BaseLayout.astro` is a 3-tab control:
- **Concepts** (default) — the `conceptIndex` taxonomy.
- **FAQs** — `<FaqSidebarList />`, ordered by `created` ascending (matches FAQ index).
- **Starred** — `<StarredPages />`.

### Markup & state
- Tab buttons live in BaseLayout `<aside class="sidebar">`: `<button role="tab" data-sidebar-tab="concepts|faqs|starred" aria-selected aria-controls>`.
- Selected tab persisted to localStorage key `aied:sidebar-tab`; sidebar collapse to `aied:sidebar-collapsed` (inline `<script>` blocks at bottom of BaseLayout).
- Icons: Concepts = lightbulb, FAQs = question mark, Starred = star, all `stroke="currentColor"` so they inherit light/dark header-icon colors. Header-matching size = **22px**.
- Mobile (<1024px): labels hidden via `@media (max-width:1023px){ .sidebar-tab span{display:none} }`; icons only.
- Tab styling: vertical divider `.sidebar-tab + .sidebar-tab{ border-left:1px solid var(--card-border-color) }`; selected tab gets tinted bg `color-mix(in srgb, var(--primary) 10%, transparent)`, primary text, `box-shadow: inset 0 -2px 0 var(--primary)` accent bar.

## Pitfall: icon size vs sidebar width
Hard tension between "narrower sidebar" and "22px icon + text label". At 22px icons the sidebar needs **≥16.5rem** for "Concepts" to sit beside its icon. Narrower → either icons-only on desktop or smaller icons. Pre-check before choosing a width:
- Sidebar width = first column of the `grid-template-columns` in the `@media (min-width:1024px)` rule (17rem→16.5rem) and `(min-width:1280px)` (adds 19rem right rail).
- Per-tab content = `(W*16px − 2×containerPad − gaps − 2px border)/3 − 2×tabHpad`. Fit vs `iconWidth + gap + boldTextWidth('Concepts')`.
- Measure text with PIL `ImageFont`, **Liberation Sans Bold** (Arial-metric; realistic worst case for the `system-ui`/SF/Segoe UI/Roboto stack). DejaVu over-reports width.

## Pitfall: verifying scoped Astro output
Astro scopes selectors/markup with `data-astro-cid-*`. Grep the built CSS/HTML for the scoped form (e.g. `.sidebar-tab[data-astro-cid-z4jru4n3]{...}`), not bare selectors — bare greps give false negatives.

## Page-type badges
`src/pages/concepts/[slug].astro` and `src/pages/faqs/[slug].astro` render a `page-type-badge` line above `<h1>`. Now inline SVG (lightbulb for concepts, question mark for FAQs) with `stroke="currentColor"` — NOT emojis (was `🏷️ Concept` / `❓ FAQ`). Keep icon-based + `currentColor`.

## FAQ list separators
- Main `/aied/faq` index page: items already use subtle `border-bottom:1px solid var(--card-border-color)` line separators (not bullets).
- Sidebar `FaqSidebarList.astro`: same `border-bottom` separator style; `:last-child{border-bottom:none}`.

## NOTE (curator)
`SKILL.md` for wiki-astro-frontend is at/over the 100KB limit. It needs consolidation (move inline detail into references/) before any SKILL.md body edits can land. This file is the model for that split.
