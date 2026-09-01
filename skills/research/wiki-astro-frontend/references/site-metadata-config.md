# Site metadata as a single source of truth (`site.config.json`)

Established 2026-08-31: the maintainer wants site-wide metadata — full title, short name,
brand name (header label), description, lang, site URL, basePath, repo URL,
issues URL, editor name + contact, license, theme colors — held in ONE config
file that BOTH the Astro/TS site and the Python tooling read, instead of
hard-coding them in many places.

## The config file
`site.config.json` at the repo root:
- `name` — full canonical name: "AI in Education Knowledge Base" (used for
  `<title>` suffix, og:site_name, JSON-LD WebSite/Organization name, RSS title)
- `shortName` — "AIEd KB" (mobile header, PWA manifest short_name, apple-mobile
  title, install prompt)
- `brandName` — "AIEd Knowledge Base" (desktop header brand, logo alt)
- `description`, `lang`, `url` (full site root incl. basePath), `basePath` ("/aied"),
  `repoUrl`, `issuesUrl`, `editor.{name,contactUrl}`, `license`, `theme.{background,primary}`

## Reading it in TS/Astro
`src/config/siteConfig.ts` imports `site.config.json` (JSON imports work under
`moduleResolution: bundler`), casts to a `SiteConfig` interface, and is the typed
accessor. Components/TS import `siteConfig` from it, e.g.:
- `BaseLayout.astro`: title default, `<title>` suffix, og:site_name, apple title,
  brand link (brandName/shortName), footer nav (basePath, repoUrl), footer contact
  (editor name + contactUrl)
- `lib/jsonld.ts`: `SITE = siteConfig.url`
- `JsonLd.astro`: WebSite/Organization `name`
- `lib/nav.ts`: home label = `siteConfig.name`, urls built from `basePath`
- `rss.xml.ts` / `index.astro`: RSS title/site/link
- `InstallPrompt.astro`: "Install the {shortName} app"
- `astro.config.mjs`: reads the JSON directly via `readFileSync` for the PWA
  manifest; derives `origin` (strip basePath) for `site:` so sitemap URLs don't
  double the path.

## Reading it in Python tooling
`tooling/build-epub.py` loads it at top via `json.load` and binds `NAME`, `BASE`,
`SITE_URL`, `REPO_URL`, `ISSUES_URL`, `EDITOR_NAME`, `EDITOR_URL`, `ORIGIN`
(derived by stripping basePath). Used for the EPUB/PDF Notice pages, pandoc
`--metadata title=`, article/href link builders. `generate-llms-files.py` and
`fetch-rss-feeds.py` also use the site URL from it.

## Pitfalls
- **`site:` in astro.config.mjs must be the ORIGIN, not `url`** — Astro appends
  `base` itself; passing `url` (which includes `/aied`) doubles the path in
  sitemap/OG URLs. Derive origin by stripping basePath.
- `rss.xml.ts` `site:` also needs the origin (strip `/aied`).
- When changing the title/branding, edit ONLY `site.config.json`; the build picks
  it up everywhere. Run `npm run build` and grep `dist/index.html` for
  `<title>`, og:site_name, brand spans, footer name to confirm.
- Editor name is intentional attribution (site footer + EPUB/PDF Notice) — keep
  in config, not removed by the personal-info scrub (it's whitelisted).
