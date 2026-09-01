# OG link-preview image + favicon (SEO / social sharing)

Established 2026-08-19. The wiki's Astro head is **hand-rolled** (no
`@jdevalk/astro-seo-graph`). `site: 'https://edtechdev.github.io'` and
`base: '/aied'` are set in `astro.config.mjs`, so all social URLs must be absolute
`https://edtechdev.github.io/aied/...`.

## Favicon
`public/logo.svg` is already used in the header brand. In `BaseLayout.astro`
`<head>`, add:
- `<link rel="icon" type="image/svg+xml" href="/aied/logo.svg" />`
- `<link rel="apple-touch-icon" href="/aied/logo.svg" />`

## Link-preview (OG/Twitter) image
Social platforms don't reliably render SVG, so render the concept map to a PNG:
`public/og-concept-map.png` (1200px wide) generated from the *built*
`dist/index.html` via `cairosvg`. Steps + caveats in the parent SKILL.md
(`data-astro-cid` strip; cairosvg uses a wider fallback font so label-clipping
reads are approximate). Anything in `public/` is copied to `dist/` by
`npm run build` automatically.

## Head meta tags (BaseLayout `<head>`)
- Open Graph: `og:site_name`, `og:title`, `og:description`, `og:type="website"`,
  `og:url`, `og:image`, `og:image:width`, `og:image:height`, `og:image:alt`
- Twitter: `twitter:card="summary_large_image"`, `twitter:title`,
  `twitter:description`, `twitter:image`
- `og:image` / `twitter:image` value: `https://edtechdev.github.io/aied/og-concept-map.png`

## OG-image caching
X/Facebook/LinkedIn cache preview images aggressively. After changing `og:image`,
the old image persists until the platform cache refreshes — tell the maintainer to force a
re-scrape via Facebook Sharing Debugger / LinkedIn Post Inspector. A live HTTP 200
on the PNG does NOT mean previews update instantly.
