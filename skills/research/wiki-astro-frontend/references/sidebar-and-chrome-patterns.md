# Sidebar tabs, prev/next nav, PWA install, and chrome patterns (2026-08-31)

## Sidebar tab icons + width tradeoff
the maintainer wanted icons on the Concepts/FAQs/Starred tabs (lightbulb / question-mark / star) in the same style + light/dark colors as the header buttons, and a narrower sidebar.

- **Icon SVGs use `stroke="currentColor"`** so they inherit the tab color and match the header buttons in both themes. Reuse the exact header SVGs (same `viewBox`, `stroke-width`), sized **22px** to match header icons exactly.
- **22px icons + a text label need a ~16.5rem sidebar column** — that's the floor while keeping the word "Concepts" next to its icon. Original `17rem` → `16.5rem` grid column in BOTH `@media` breakpoints of `.docs-layout`.
- **Mobile icons-only:** `@media (max-width:1023px)` hides the `<span>` labels and shows only icons (bump tab `padding` for touch targets). The tab `<button>` is `display:inline-flex; gap:0.2rem; white-space:nowrap`.
- **Fit-sizing BEFORE shipping** (avoids shipping an overflowing label): measure text width with PIL `ImageFont.truetype('<path>/LiberationSans-Bold.ttf', px)` — Liberation Sans is Arial-metric, the realistic worst-case for the site's `system-ui` stack (SF Pro/Segoe UI/Roboto all ≤ Arial width). Then: `available_per_tab = (colWidth − 2*contPad − 2*contGap − border) / 3 − 2*tabHPad`; require a few px headroom. Treat font-proxy widths as approximate (cf. the cairosvg fallback-Arial pitfall).

## Starred pane → flush like the Concepts pane
the maintainer wanted the Starred sidebar pane visually like Concepts: top "★ Starred" no longer collapsible, subsections (Concepts/FAQs/Articles) stay collapsible + expanded by default.
- Convert the outer `<details>`/`<summary>` to a static `<div class="sidebar-heading starred-heading">` (bold title + bottom border), matching the Concepts heading.
- **Astro scope gotcha:** the child component (`StarredPages.astro`) cannot reuse `BaseLayout`'s `.sidebar-heading`/`.sidebar-count` classes — Astro scopes each component's `<style>` to its OWN `data-astro-cid-*`, so parent classes never match child elements. Define LOCAL classes (`.starred-heading`, `.starred-title`, `.starred-count`) inside `StarredPages.astro`. (Same root cause as the existing "Astro scoped-CSS does not cross component boundaries" pitfall.)
- Add a live starred count: an element `[data-starred-count]` filled from `starredStore.get().length` in the render fn.

## Prev/next page navigation (PrevNextNav.astro + src/lib/nav.ts)
the maintainer asked for prev/next boxes at the bottom of home, use-with-AI, every concept, the FAQs intro, and each FAQ — using the SAME linear order as the EPUB/PDF table of contents. Two bordered cards with arrow caption + adjacent title, stacked on mobile.
- **Order (mirror of EPUB/PDF TOC):** home → use-with-AI → every concept in `conceptIndex` (flattened section→group→items) → FAQs intro → each FAQ ascending by `created`.
- `src/lib/nav.ts` exports `buildNavItems(conceptTitles, faqsSortedByCreated)` + `normalizePath`. `PrevNextNav.astro` finds the current URL in the list, renders prev/next (or nothing if not in the list — so article pages get NO nav automatically).
- **Wired into `BaseLayout.astro`** (after `<slot/>` in `.middle`), so every page using the layout gets it for free; article pages are simply absent from the sequence. `currentUrl={Astro.url.pathname}`.
- Style: `.prevnext` grid 2 cols (1 col under 640px), `.pn-cell` bordered cards using `--card-background-color`, hover → `--primary`; `.pn-empty` dashed placeholder.

## PWA install prompt → deferred bottom banner (InstallPrompt.astro)
the maintainer asked to suppress/soften Chrome's mobile install popup. Chrome's native install mini-infobar is **browser-rendered and cannot be suppressed or repositioned by code** once the manifest is installable.
- **Working approach:** capture `beforeinstallprompt` and `e.preventDefault()` (stops the native auto-infobar), hold the deferred prompt, and show a subtle themed banner pinned bottom-center. Tapping "Install" fires the deferred prompt; dismiss persists `localStorage['aied:install-dismissed']='1'` so it stops nagging; `appinstalled` hides it for good. iOS Safari (no `beforeinstallprompt`) never shows the banner.
- Component is `src/components/InstallPrompt.astro`, rendered at the end of `<body>` in `BaseLayout.astro`.
- Key buttons: `[data-ip-install]`, `[data-ip-close]`; need `width:auto` override on buttons (Pico forces `width:100%` on `button`).
- **Not possible:** fully suppressing the prompt while keeping the manifest installable; repositioning the native infobar; preventing Chrome re-surfacing install UI in the browser menu.

## Site name / header branding (2026-08-31)
- Site = **"AI in Education Knowledge Base"** for `<h1>`, meta description, `<title>` suffix, `og:site_name`, RSS titles, JSON-LD `name`. Header shows **"AIEd Knowledge Base"** by default, swapping to **"AIEd KB"** below 600px.
- Header uses two spans (`.brand-full` default, `.brand-short` `display:none`; `@media (max-width:600px)` swaps them). PWA manifest already had long `name` + `short_name:'AIEd KB'`.
- The JSON-LD WebSite/Organization canonical name and PWA manifest were already the full long name — only header spans, `<title>`, og:site_name, RSS, and logo `alt` needed changes.
