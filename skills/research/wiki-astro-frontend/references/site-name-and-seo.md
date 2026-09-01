# Site name / branding + SEO (2026-08-31)

the maintainer established the canonical site name and how it surfaces across the site. There are THREE forms, used in different places:

| Form | Used in |
|---|---|
| **`AI in Education Knowledge Base`** (long, full) | SEO surface: `<title>` suffix, `og:site_name`, JSON-LD `WebSite`/`Organization` `name`, RSS feed title, PWA manifest `name`, default `title` prop in `BaseLayout` |
| **`AIEd Knowledge Base`** | Header brand (desktop, default) |
| **`AIEd KB`** | Header brand on narrow screens (`<600px`), PWA manifest `short_name`, mobile web-app title |

## Rules
- **The long full name is the canonical SEO name.** JSON-LD (`src/components/JsonLd.astro`, `siteEntities` → `WebSite` + `Organization` `.name`) uses `AI in Education Knowledge Base` — it already did, keep it that way. `og:site_name`, `<title>` suffix, and RSS titles should all use the long name, not the short forms.
- **Header brand is responsive** — show `AIEd Knowledge Base` by default, collapse to `AIEd KB` on small widths. Implementation (BaseLayout.astro): two spans inside `.brand-link`, swap via CSS:
  ```css
  .brand-short { display: none; }
  @media (max-width: 600px) {
    .brand-full { display: none; }
    .brand-short { display: inline; }
  }
  ```
  Markup: `<span class="brand-full">AIEd Knowledge Base</span><span class="brand-short">AIEd KB</span>`.
- the maintainer was unsure which short form should be mobile default; I chose **`AIEd KB`** under 600px (compact). Note this in case he later wants `AIEd Knowledge Base` on mobile or a different breakpoint.
- PWA manifest (`astro.config.mjs` `manifest`): `name: 'AI in Education Knowledge Base'`, `short_name: 'AIEd KB'` — already correct.
- `apple-mobile-web-app-title` stays the short `AIEd KB` (iOS uses it in the home-screen label).

## Deployed-verification gotchas
- Grepping built HTML for exact class strings fails because Astro appends `data-astro-cid-*` to elements (and attribute order varies). For the header spans grep partial patterns: `grep -o 'brand-full" data-astro-cid[^>]*>AIEd Knowledge Base</span>'` (works), but exact `class="brand-full">…` does NOT match built output. Use `search_files` (respects gitignore) or target `dist/` paths with partial patterns.
- Confirming the responsive rule in built CSS: `grep -o '@media (width<=600px){[^@]*brand-short[^@]*brand-full[^@]*}' dist/_astro/*.css`.
- JSON-LD name check: `grep -c 'AI in Education Knowledge Base' dist/index.html` (expect ≥2 for WebSite + Organization).

## Where each name form lives (files)
- `src/layouts/BaseLayout.astro` — `<title>{title} — AI in Education Knowledge Base</title>`, `og:site_name`, RSS `<link>` title, `apple-mobile-web-app-title='AIEd KB'`, default `title` prop = long name, header brand spans.
- `src/components/JsonLd.astro` — WebSite + Organization `.name` = long name (already correct).
- `src/pages/rss.xml.ts` + `src/pages/index.astro` RSS `title` — long name.
- `astro.config.mjs` — PWA `manifest.name` (long), `manifest.short_name` (AIEd KB).
