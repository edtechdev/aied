# Static Site Export Bugs — Session Notes

Session: 2026-07-28, AI in Education Wiki (540 pages, deployed to GitHub Pages at edtechdev/aied).

## Bug 0: Journal Not Visible on Home Page

The generator's inline index template was a bare filterable list — no hero, no stats, no journal. The journal.html page existed but was only reachable via a secondary link.

**Fix:** Created `templates/index-template.html` with hero section, stats, and collapse-able journal entries from the last 14 days. Placeholders: `__WIKI_TITLE__`, `__TOTAL__`, `__TAG_COUNT__`, `__TAG_OPTIONS__`, `__PAGES_LIST__`, `__SEARCH_INDEX__`, `__DATE__`.

## Bug 1: Duplicate H1 Titles

494 of 540 pages had the title twice. The template put `<h1>{title}</h1>` in `<header>`, and the markdown body started with `# Title` which rendered as another `<h1>`.

First attempt (naive regex): `re.sub(r'(<main class="container">)<p><h1>[^<]*</h1></p>', r'\1', html, count=1)`. This only fixed pages where the H1 was the VERY FIRST element after `<main>`. Pages with preamble (blockquotes, source links, arXiv citations) before the H1 were missed — the H1 appeared as the second or third `<p>` element.

**Robust fix:** Match against the actual page title using `re.escape()`:
```python
escaped_title = re.escape(page['title'])
content = re.sub(r'<p><h1>' + escaped_title + r'</h1></p>', '', content, count=1)
```

Also, titles with quotes (`"Student Experience with AI"`) in the YAML frontmatter get quoted-stripped in the template but carry quotes in the markdown body, so a simple text-match for the H1 content failed on those pages. Title-based matching with `re.escape()` handles this.

## Bug 2: Dead Tag Links

Tags were `<span class="tag">tagname</span>` — zero interactivity. The home page had a tag filter dropdown but zero article pages linked to it.

**Fix:** `<a href="../index.html?tag={tag}" class="tag">{tag}</a>` with pill-badge CSS.

## Bug 3: Broken Wikilinks

`process_wikilinks()` produced `[title](pages/slug.html)`. From a page at `pages/ai-literacy.html`, this resolved to `pages/pages/slug.html` — 404.

**Fix:** Bare slug links: `[title](slug.html)`. Since all pages are in the same `pages/` directory, no path prefix is needed.

## Bug 4: Tag Filter JS Race Condition

Tag links navigated to `index.html?tag=X` successfully (HTTP 200), but the filter silently did nothing — all 540 entries remained visible. 

**Root cause:** The JS used `DOMContentLoaded` + `setTimeout(50ms)` to wait for the dropdown IIFE to populate options, but the IIFE hadn't finished. The dropdown had no matching option, `select.value = tagParam` silently failed, and `filterByTag` was never called.

**Fix:** Single synchronous IIFE that populates the dropdown AND applies the URL param in one execution block — no timers, no event listeners. Added a visible "Filtered by tag: X" badge so the filter state is always obvious.

**Browser compatibility:** Used `function` declarations and `var` (no arrow functions, no `const`/`let`) for maximum compatibility with GitHub Pages' serving environment.

## Generator Script Patches

File: `scripts/generate-static-site.py` (in the research-wiki skill)

1. Page template: added `a.tag` CSS, Journal nav link, footer Home link
2. `process_wikilinks()`: `pages/\1.html` → `\1.html`
3. Tag rendering: `<span class="tag">` → `<a href="../index.html?tag=..." class="tag">`
4. H1 stripping: title-based with `re.escape()`
5. Placeholder replacement: added `__DATE__`

## GitHub Pages Deployment Notes

- `.nojekyll` at repo root is REQUIRED, otherwise Jekyll tries to process the static HTML
- CDN caches aggressively — verify fixes on `raw.githubusercontent.com` first
- After push, CDN takes 1-2 minutes to refresh
- The API endpoint `api.github.com/repos/edtechdev/aied/pages` returned 404 until Pages was enabled in repo settings

## Wiki Metadata Audit (same session)

- Fixed 6 pages with leading-dash tags (`- over-reliance` → `over-reliance`)
- Normalized daily digest tags: `timeline` → `daily-digest`, removed redundant `daily`
- Fixed 34 triple-bracket links (`[[[...]]]` → `[[...]]`)
- Removed 3 accidental wikilinks (`[[confidence: high]]`, `[[confidence:low]]`, `[[selectively]]`)
- Created 42 stub pages for missing concept targets
- Rebuilt index.md (540 pages) and journal.md (363 entries)
