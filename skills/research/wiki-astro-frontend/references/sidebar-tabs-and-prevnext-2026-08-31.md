# Sidebar tabs (icons + width), page badges, and PrevNextNav (2026-08-31)

Session-scoped detail for the tabbed left sidebar, page-type badges, and the
previous/next pagination feature. The durable rules live in SKILL.md; this file
holds the exact CSS/measurements that took iteration to land.

## Sidebar tab icons + narrow sidebar

the maintainer asked to narrow the desktop sidebar and add icons to the three tabs:
lightbulb (Concepts), question-mark (FAQs), star (Starred), styled with
`stroke="currentColor"` so they follow header-icon light/dark colors.

- Desktop sidebar grid column: `16.5rem` (was `17rem`) at BOTH breakpoints
  (`1024px` = 16.5rem + 1fr; `1280px` = 16.5rem + 1fr + 19rem).
- Tab icons: 22px inline SVG (match the 22px header icons), `flex-shrink:0`.
- Tab sizing: `font-size:0.7rem`, `gap:0.2rem`, `padding:0.4rem 0.15rem`,
  `white-space:nowrap`. Tabs are `flex:1` + `display:inline-flex`.
- **Width budget (measured with PIL, Liberation Sans-Bold ~ Arial/metrics):**
  at 16.5rem, available per-tab content space ≈ 80.4px (after container
  padding 0.2rem×2, border 2px, tab padding 0.15rem×2, gap 0). "Concepts"
  needs icon22 + gap + text ≈ 76.1px → ~4px headroom. This is the narrowest
  sidebar that fits icon+label for the widest tab ("Concepts").
  - 22px icons force the sidebar to stay at ~16.5rem to keep labels.
  - To go narrower (e.g. 15rem): hide labels on desktop too (icons-only) or
    shrink icons to ~18px. the maintainer was offered both, chose 22px + 16.5rem.
- Mobile (`<1024px`): hide labels, icons only —
  `@media (max-width:1023px){ .sidebar-tab span{display:none}; .sidebar-tab{padding:.45rem .5rem} }`.

## Tab-control styling

- `.sidebar-tabs`: `gap:0` (not 0.25rem) so adjacent tabs touch; padding `0.2rem`;
  background `color-mix(in srgb, var(--card-background-color) 55%, transparent)`.
- Divider between tabs: `.sidebar-tab + .sidebar-tab { border-left:1px solid var(--card-border-color) }`.
- Selected tab: `color:var(--primary); background:color-mix(in srgb,var(--primary) 10%,transparent); box-shadow:inset 0 -2px 0 var(--primary)` (accent bar underneath).
- Hover: `color:var(--primary); background:color-mix(in srgb,var(--primary) 6%,transparent)`.

## Page-type badges → SVG icons

Replaced emoji badges at the top of concept/FAQ pages:
- concept `[slug].astro`: `🏷️ Concept` → lightbulb SVG + `Concept`
- faqs `[slug].astro`: `❓ FAQ` → question-mark SVG + `FAQ`
Inline SVG, `stroke="currentColor"`, `width:16 height:16`,
`style="display:inline-block;vertical-align:-0.15em;margin-right:0.3rem"`.
Keep the badge glyphs in sync with the sidebar tab icons (same lightbulb/question).

## PrevNextNav — previous/next pagination

New `src/components/PrevNextNav.astro` + `src/lib/nav.ts` (`buildNavItems()`).
Rendered once in `BaseLayout.astro` after `<slot/>` in the `.middle` column:
```astro
<PrevNextNav items={navItems} currentUrl={Astro.url.pathname} />
```
- `buildNavItems(conceptMap, sidebarFaqs)` = home → use-with-AI → concepts in
  `conceptIndex` order → FAQ intro → FAQs by `created` ascending. This mirrors
  the EPUB/PDF TOC exactly (`tooling/build-epub.py` + `wiki-epub-export`).
- Component locates current page by `normalizePath(url)` (strip trailing slash)
  and renders two `<a class="pn-cell">` boxes (prev/next) OR nothing if the
  current page isn't in the sequence (article pages get no nav automatically).
- Blume-style: bordered cards, arrow + "Previous"/"Next" caption (uppercase,
  muted), adjacent page title; hover = primary border + tint.
- Layout: `display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-top:3rem;
  border-top:1px solid var(--card-border-color)`. Single column `@media (max-width:640px)`.
- Empty side (home = no prev, last FAQ = no next) renders an empty `<span class="pn-cell pn-empty">`
  with a dashed border to keep the two-box symmetry. Earlier single-box iteration
  was replaced with the empty-cell approach for symmetry.

## Astro component-scoping pitfall (StarredPages heading)

When a child component needs BaseLayout's shared styles (e.g. `.sidebar-heading`,
`.sidebar-count`), those classes are scoped to BaseLayout's own `data-astro-cid`
and do NOT reach elements inside a child component. Fix: define LOCAL classes in
the child component (e.g. `.starred-heading`, `.starred-count`) and style them
inside the child's own `<style>`. Verified: the built CSS carries the child's
scope id (`.starred-heading[data-astro-cid-kmbfthem]`), not BaseLayout's.

## Static verification (no live preview)

The browser tool blocks `localhost`/private addresses, so after `npm run build`
verify by grepping the built output:
- Grid width: `grep -o 'grid-template-columns:16.5rem[^;]*' dist/_astro/*.css`
- Tab icons: `grep -o 'data-sidebar-tab="concepts"[^>]*><svg[^>]*width="22"' dist/index.html`
- Mobile labels hidden: `grep -o '@media (width<=1023px){.sidebar-tab[^}]*span[^}]*}'` the css
- PrevNext on a concept: `grep -o 'class="prevnext"' dist/concepts/ai-education/index.html`
  then the prev/next labels; confirm an article page (`dist/articles/*/index.html`) has none.
- Badges: `grep -o 'page-type-badge[^>]*>.*Concept' dist/concepts/<slug>/index.html`
  and confirm no `🏷️ Concept` / `❓ FAQ` emoji remain: `grep -rl '🏷️ Concept\|❓ FAQ' dist/`.
Note built elements get `data-astro-cid-*` attrs appended, so when grepping built
HTML for exact class strings use partial patterns (attribute order/extra attrs vary).
Use `search_files` (respects gitignore) or target `dist/` paths explicitly.
