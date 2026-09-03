# 2026-08-31 frontend refinements (sidebar, nav, badges, naming)

## Sidebar tabs — icons, sizing, styling
the maintainer iterated on the tabbed sidebar (see SKILL.md "Tabbed left sidebar"). Refinements landed 2026-08-31:
- **Desktop sidebar width** narrowed `17rem → 16.5rem` (both `@media(min-width:1024px)` single and `@media(min-width:1280px)` three-column `.docs-layout` grid rules).
- **Tab icons**: added an SVG to each `.sidebar-tab` — lightbulb (Concepts), question mark (FAQs), star (Starred). Icons use `stroke="currentColor"` so they inherit the same light/dark theming as the header buttons — do NOT hardcode a fill/color.
- **Icon size tension**: header buttons use 22px icons; matching them in the tabs (22px) means the label "Concepts" + icon need ~16.5rem minimum per-tab width. This is the binding constraint on how narrow the sidebar can go while keeping text labels. To go narrower, options are icons-only-on-desktop (like mobile) or dropping to ~18px icons. Verify with a font-width check before locking a width.
- **Mobile icons-only**: `@media (max-width:1023px){ .sidebar-tab span{display:none}; .sidebar-tab{padding:.45rem .5rem} }` — hides labels, shows only icons. (Astro emits `@media (width<=1023px)` in the built CSS.)
- **Tab-control styling** (2026-08-31): `.sidebar-tabs` uses `gap:0`, `.sidebar-tab + .sidebar-tab { border-left:1px solid var(--card-border-color) }` for a vertical divider between tabs; selected tab = `color:var(--primary); background:color-mix(in srgb,var(--primary) 10%,transparent); box-shadow:inset 0 -2px 0 var(--primary)` (accent bar underneath).

## Starred pane made to match the Concepts pane (2026-08-31)
Converted `StarredPages.astro` from a single collapsible `<details class="starred-pages" data-state-key="starred">` (boxed card) into a static heading + collapsible subsections, matching the Concepts pane look:
- Outer is now `<div class="starred-pages">` with a `.sidebar-heading`-style header: `★ Starred` bold title (`font-size:1.05rem;font-weight:700`) + a live count below (`0 starred`, filled by the store script into `[data-starred-count]`), both with a `border-bottom:1px solid var(--card-border-color)`. Removed the boxed border/background/card look.
- The three subsections (Concepts/FAQs/Articles) remain `<details class="starred-group" open data-state-key=...>` — collapsible and expanded by default, collapse state still persisted.
- **Astro scoping gotcha (revisited)**: a `<div class="sidebar-heading">` written INSIDE `StarredPages.astro` does NOT get `BaseLayout`'s `.sidebar-heading` styles — child components carry their own `data-astro-cid` scope. Define the heading/count classes locally inside the child (`.starred-heading`, `.starred-title`, `.starred-count`). This is the same scoped-CSS rule already in SKILL.md Pitfalls.

## Previous/Next page navigation (PrevNextNav)
the maintainer asked for prev/next boxes at the bottom of home, use-with-AI, every concept, the FAQ intro, and each FAQ page — ordered exactly like the EPUB/PDF table of contents. See `src/components/PrevNextNav.astro` + `src/lib/nav.ts`:
- **`src/lib/nav.ts`** `buildNavItems(conceptTitles, faqs)` returns the linear order: `['/aied/' AI in Education Knowledge Base] → ['/aied/ai' Use This KB with Your Own AI Assistant] → every concept in `conceptIndex` order → `['/aied/faq' Frequently Asked Questions] → each FAQ by `created` ascending`. `normalizePath()` strips trailing slash for equality.
- **`PrevNextNav.astro`** props `{items, currentUrl}`; finds current index by path, renders previous/next `<a rel=prev/next>` boxes. If the page isn't in the sequence (e.g. any `/aied/articles/*`), both prev and next are null → renders empty, so article pages get NO nav automatically. No per-template toggling needed.
- Wired into `BaseLayout.astro` after the `<slot/>` in the `.middle` column; `navItems` computed from `conceptMap` + `sidebarFaqs` (already built there).
- **Style**: two bordered cards `.pn-prev`/`.pn-next` in a `1fr 1fr` grid (stacking to `1fr` below 640px), each with an uppercase muted caption (`← Previous` / `Next →`), the adjacent page's title, `hover → primary border/tint`. Separated from content by a `border-top` + `margin-top:3rem`. First page shows only Next; last FAQ only Previous.

## Page-type badges — emoji → SVG icons (2026-08-31)
The `🏷️ Concept` (concepts) and `❓ FAQ` (faqs) emoji badges at the top of content pages were replaced with the SAME SVGs used in the sidebar tabs (lightbulb / question mark), `stroke="currentColor"` to match the muted badge text. Files: `src/pages/concepts/[slug].astro` and `src/pages/faqs/[slug].astro` (the `.page-type-badge` `<p>`). Keep them consistent with the tab icons — one icon set, `currentColor`.

## FAQ sidebar separators (2026-08-31)
`FaqSidebarList.astro` FAQ links got `border-bottom:1px solid var(--card-border-color)` + `.faq-sidebar-link:last-child{border-bottom:none}` for subtle dividers between questions. The main `/aied/faq` page ALREADY used `border-bottom` separators (not bullets) on its `<li>`s — verify before assuming a list needs bullets removed.
