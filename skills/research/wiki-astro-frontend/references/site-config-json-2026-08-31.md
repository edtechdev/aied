# site.config.json — single source of truth for site metadata (2026-08-31)

Refactor landed 2026-08-31: all site-wide metadata was de-duplicated out of
hardcoded strings and centralized in **`site.config.json`** at the repo root.
Both the Astro/TS site and the Python tooling read from it. Do NOT hardcode
site name / short name / URL / editor / license / colors anywhere else.

## Fields
```json
{
  "name": "AI in Education Knowledge Base",   // canonical full name (JSON-LD, <title>, og:site_name)
  "shortName": "AIEd KB",                     // PWA short_name, mobile header, install banner
  "brandName": "AIEd Knowledge Base",         // desktop header brand label
  "description": "...",
  "lang": "en",
  "url": "https://edtechdev.github.io/aied",  // FULL site root (origin + basePath)
  "basePath": "/aied",
  "repoUrl": "https://github.com/edtechdev/aied",
  "issuesUrl": "https://github.com/edtechdev/aied/issues",
  "editor": { "name": "the maintainer", "contactUrl": "https://example.com/contact" },
  "license": "CC0 1.0 Universal Public Domain Dedication",
  "theme": { "background": "#0d1418", "primary": "#15212b" }
}
```

## How the site reads it (Astro/TS)
`src/config/siteConfig.ts` wraps the JSON with a typed `SiteConfig` interface
and default-exports it. Components import:
```ts
import siteConfig from '../config/siteConfig';
```
Used by: `BaseLayout` (title, og:site_name, apple-mobile-web-app-title,
og/twitter URLs, RSS link, header brand via `brandName`/`shortName`, footer nav
+ attribution via `editor.*`/`issuesUrl`), `JsonLd.astro` + `jsonld.ts` (SITE
const, site name), `nav.ts` (home/FAQ labels + URLs via `basePath`), `rss.xml.ts`
+ `index.astro` (RSS title/site), `ai.astro` (description), `InstallPrompt`
(shortName in banner), `astro.config.mjs` (PWA manifest: name, short_name,
description, lang, start_url/scope via basePath, theme colors, icons).

JSON import requires `moduleResolution: "bundler"` (Astro's default tsconfig
provides it) — no `resolveJsonModule` flag needed.

## `astro.config.mjs` origin gotcha
Astro's `site` option must be the **origin only** (no path); Astro appends
`base` itself. `config.url` is the FULL root (origin + basePath), so strip it:
```js
const origin = siteConfig.url.replace(new RegExp(`${siteConfig.basePath}$`), '');
export default defineConfig({ site: origin, base: siteConfig.basePath, ... });
```
If you set `site: siteConfig.url` directly the sitemap URLs double the path
(`https://host/aied/aied/...`).

## How the Python tooling reads it
Each tooling script opens the JSON with `json.load` and reads the fields it
needs. Common pattern (build-epub.py defines `NAME/BASE/SITE_URL/REPO_URL/
ISSUES_URL/EDITOR_NAME/EDITOR_URL/ORIGIN`; generate-llms-files.py sets
`BASE = SITE_URL` since line ~90 builds full absolute URLs from it):
```python
import json, os
WIKI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
with open(os.path.join(WIKI, 'site.config.json'), encoding='utf-8') as _cfg:
    SITE = json.load(_cfg)
# scripts/ live one level deeper: ../../site.config.json
```
- `build-epub.py`: EPUB+PDF `--metadata title=`, Notice/copyright page HTML
  (editor name/contact, site URL, repo/issues URLs, license), article out-links.
- `generate-llms-files.py`: llms.txt/llms-full.txt absolute URL base.
- `fetch-rss-feeds.py`: RSS `User-Agent` string `Mozilla/5.0 (AIEdWiki/1.0; +{SITE_URL})`.

## Editing the config
Change ONLY `site.config.json`, then rebuild the site AND regenerate
EPUB/PDF (`python3 tooling/build-epub.py`) AND llms files
(`python3 tooling/scripts/generate-llms-files.py`) — all three read the config.

## Note on the editor field
`editor.name` / `editor.contactUrl` are the config-carried values used by the
intentional site footer credit ("contact the site developer, <Name>") and the
EPUB/PDF Notice page editor line. They're a whitelisted personal-info location
(keep them; they're the single editable source). No other tracked file should
carry the editor's name/contact directly.
