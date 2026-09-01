# Header nav (2026-08-21)

The top `<header>` in `src/layouts/BaseLayout.astro` contains three things:
the brand link, the Pagefind search box, and a **"Use with AI" button**.

## The "Use with AI" button

- Markup: `<a href="/aied/ai" class="header-use-ai">Use with AI</a>` — placed as
  the last child of `header .container` (after `.header-search`).
- CSS class `.header-use-ai`: filled primary pill — `flex-shrink:0`,
  `padding:0.45rem 0.95rem`, `font-size:0.9rem`, `font-weight:600`,
  `color:#0b1220`, `background:var(--primary)`, `border-radius:8px`,
  `white-space:nowrap`. Hover: `background:var(--primary-hover)`.
  (This overrides `header a { color:white }` for the dark text on the filled pill.)

## Canonical URL

- The button (and the footer nav link) point to **`/aied/ai`** — NO trailing slash
  (matches `trailingSlash: 'never'` in `astro.config.mjs`).
- `/aied/use-with-ai` is NOT a real page — it is only a `redirects` source in
  `astro.config.mjs` (`'/use-with-ai': '/aied/ai'`) that 301s to `/aied/ai`.
  Always link to `/aied/ai`.
- The page file is `src/pages/ai.astro` (title "Use This Wiki with Your Own AI Assistant").
