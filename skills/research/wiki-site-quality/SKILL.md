---
name: wiki-site-quality
description: "Fix static-site bugs: dup H1, broken links, typed facet metadata, table rendering, journal date quoting."
category: research
---

# Wiki Site Quality

Apply quality fixes to a static HTML site generated from a markdown wiki. Covers structural bugs, typed metadata health, markdown rendering, and navigation consistency.

## When to Use

- Article pages show duplicate titles (header + body H1)
- Related Pages wikilinks 404 (double pages/ path prefix)
- **Typed metadata is wrong or missing**: a facet field holds a slug from the wrong registry section, one concept appears in two facet fields on a page, or a page carries no typed value at all (see section 3)
- Need consistent navigation across all pages (Concepts, FAQ, Search, Journal, RSS)
- **Legacy tag machinery has reappeared**: a `tags:` line in frontmatter, a tag chip in a template, or a `tags/` directory or tag-filter dropdown being re-added (retired, see section 3)
- **Markdown tables render as raw text** instead of HTML tables
- **Journal date headers have quotes** (`## "2026-07-31"`) from unquoted frontmatter dates
- **Public repo files contain private paths** (e.g., `<WIKI>`) or cron job IDs
- **Concept counts are out of sync** — sidebar vs `tooling/concept-index.md` vs `concepts/*.md`
  (see `references/concept-count-reconciliation-2026-08-26.md` for the 3-registry reconciliation
  recipe: the `## Merged / absorbed` redirects must NOT be counted, and counts must be recomputed
  from the file tree, never carried forward)

## Procedure

Run through the fixes in order. They are independent but collectively produce a polished site.

### 1. Duplicate H1 Titles

The page template puts the title as h1 in header, but the markdown body also renders `# Title` as an h1. Strip the body H1 using title-based matching.

```python
import re
content = page['content']
# Strip YAML quotes from title before escaping — YAML "Foo" renders as Foo in body H1
clean_title = page['title'].strip().strip('"').strip("'")
escaped_title = re.escape(clean_title)
content = re.sub(r'<p><h1>' + escaped_title + r'</h1></p>', '', content, count=1)
# Fallback: generic first-H1 removal if exact match fails
if content == page['content']:
    content = re.sub(r'(<p>)?<h1>[^<]+</h1>(</p>)?', '', content, count=1)
```

**Root cause (historical, pre-Astro generator)**: the generator computed a stripped `content` variable and then passed the original `page['content']` to its template, so the stripping ran silently with no effect. The lesson still holds for any renderer: a transform you compute but never hand to the template changes nothing, and the defect shows on every page. The current pipeline is `src/lib/markdown.ts` plus the markdown renderer, so check there first.

**Why title-based:** Some pages have blockquotes or source links before the H1. Matching against the actual title string catches it wherever it appears. YAML-quoted titles (`"Title"`) must have quotes stripped because the markdown renderer drops them.

### 2. Broken Wikilinks (Double Path Prefix)

The wikilink converter produces `[title](pages/slug.html)`. But since all pages are in the SAME pages directory, the browser resolves as `pages/pages/slug.html`.

```python
# Before (broken):
md_text = re.sub(r'\[\[([^\]|]+)\|([^\]]+)\]\]', r'[\2](pages/\1.html)', md_text)
md_text = re.sub(r'\[\[([^\]]+)\]\]', r'[\1](pages/\1.html)', md_text)

# After (correct):
md_text = re.sub(r'\[\[([^\]|]+)\|([^\]]+)\]\]', r'[\2](\1.html)', md_text)
md_text = re.sub(r'\[\[([^\]]+)\]\]', r'[\1](\1.html)', md_text)
```

Bulk fix existing files: `re.sub(r'href="pages/([^"]+\.html)"', r'href="\1"', html)`

### 3. Tags Are Retired: Typed Facet Metadata Instead (DONE 2026-09-17)

The site used to carry a per-page `tags:` list of concept slugs, and a whole layer was built on it: tag chips on article pages, a tag-filter dropdown driven by `data-tags` attributes, a generated `tags/` directory plus a `tags.html` cloud, and a periodic tag-consolidation job that merged near-duplicate tags (`higher-education` into `higher-ed`, `automated-essay-scoring` into `automated-grading`, `cognitive-load-theory` into `cognitive-offloading`, and so on).

**All of that is retired.** The schema in `src/content.config.ts` no longer accepts `tags`, every page lost the line, the page templates no longer render tag chips, and the JSON-LD keywords now come from the typed fields. The lessons that survive the retirement:

- **Never re-add a `tags:` line, a tag chip, a `data-tags` attribute, a tag page, or the tag-filter dropdown.** There is no tag vocabulary left to keep in sync, and a re-added `tags:` line fails the content schema. Before deleting `tags`, the 178 pages whose tags had no typed equivalent were migrated (107 level values, 52 discipline values), so nothing was dropped silently; do not try to reverse that.
- **The taxonomy is now the registry, not a flat tag list.** Every concept a page touches is named in a TYPED field: the facet fields `foundations` (Foundations of AI in education), `pedagogy` (Learning and instruction), `technology` (Technologies and techniques), `assessment` (Assessment and measurement), `methods` (Research methods and evaluation), `stakeholders` (People), `institutions` (Institutions and policy) and `ethics` (Equity, ethics, and responsible use), whose values must be concept slugs filed under THAT field's registry section; plus the phrase fields `research_method` (UI label "Study design"), `discipline`, `level`, `audience` (UI label "Intended audience") and `page_kind`. `page_kind` is the renamed, re-scoped `category`: only the three genre values (framework / synthesis / evaluation) survive, and the field answers "what kind of page is this", never "what is it about".
- **The old consolidation job is now a closed vocabulary, not a merge exercise.** A value that is not in the enum is not merged into a neighbouring one; adding a value needs grounding: 1 article for a domain, omit the field and log it; 2 to 3 articles, add the enum value with no concept page; 4 or more, create the concept page, register it in its section and integrate it. There is deliberately no catch-all value, so "nothing fits" is expressed by omitting the field.
- **There is no replacement page to generate for the old `tags/` output.** Concept pages are driven by `concepts.registry.yaml`, and the sidebar, the search filters and the Metadata table read their labels from the generated `FACET_FIELDS` in `src/data/facetVocab.ts`, where each facet's label IS its registry section heading. Adding a facet means editing `FACET_SECTIONS` in `tooling/scripts/gen-concept-artifacts.py`, never the .astro files. One consequence worth naming, because the old skill had the opposite rule: a registry section rename ("AI technologies and techniques" to "Technologies and techniques", or "Institutions and systems" to "Institutions and policy") updates the sidebar, the facets and the search filters at once, since they all read the same generated labels.
- **`tooling/scripts/validate-facets.py` is the gate that replaced `derive-facets.py`.** The old script projected the facets FROM `tags`; the fields are now authored directly and validated: every facet value must be a concept in that field's registry section, no concept may appear in two facet fields, and every page must carry at least one typed value. It is registered in `wiki.config.yaml` under `build.gates`, so run it (`python3 tooling/scripts/run-gates.py` runs every gate, and that suite is permission-gated: propose it and wait) before blaming a template.
- **Where a tag chip used to sit, the Metadata table now sits.** `src/components/MetadataTable.astro` renders every typed field at the foot of each article, concept and FAQ page: one row per field, values hyperlinked to their concept page when one exists. Facet values link directly (they ARE slugs); the phrase fields resolve through `src/data/metadataLinks.ts`, generated from the registry, so `cs education` reaches `cs-education` and `systematic review` reaches `meta-analysis-systematic-review`. Below 640px each row stacks (label, then values).
- **The race-condition lesson outlives the code.** The old tag filter populated its dropdown on `DOMContentLoaded` and read the URL parameter after a `setTimeout`, so a deep link like `?tag=metacognition` sometimes filtered nothing. If a filter reads state from the URL, populate its options and apply the parameter in ONE synchronous pass, and prefer no arrow functions or `const`/`let` for broad compatibility.

### 4. Markdown Table Rendering

The naive `md_to_html()` function doesn't handle markdown tables — they render as raw `|...|` text inside `<p>` tags.

**Tables (historical, pre-Astro generator):** the old hand-written `md_to_html()` had no table parsing, so pipe tables rendered as literal text. The current markdown pipeline renders GFM tables natively, so this is only relevant if someone reintroduces a hand-rolled converter:

```python
# Phase 1: Convert markdown tables BEFORE other formatting
lines = html.split('\n')
i = 0
table_blocks = []
while i < len(lines):
    stripped = lines[i].strip()
    if stripped.startswith('|') and stripped.endswith('|'):
        start = i
        while i < len(lines) and lines[i].strip().startswith('|') and lines[i].strip().endswith('|'):
            i += 1
        table_lines = lines[start:i]
        if len(table_lines) >= 2:
            rows = []
            for tl in table_lines:
                cells = [c.strip() for c in tl.strip().split('|')[1:-1]]
                rows.append(cells)
            header = rows[0]
            sep = rows[1]
            is_sep = all(re.match(r'^:?-{3,}:?$', c) for c in sep)
            data_start = 2 if is_sep else 1
            data_rows = rows[data_start:]
            # Apply inline formatting to cell contents
            def fmt_cell(text):
                text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
                text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
                text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2">\1</a>', text)
                text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
                return text
            # Build <table>...</table> HTML
            # ...
        continue  # already advanced i
    else:
        i += 1

# Phase 2: Protect tables from <p> wrapping using placeholders
table_placeholders = {}
html = re.sub(r'<table>.*?</table>', replace_table, html, flags=re.DOTALL)
# ... standard markdown conversion ...
# Restore tables and unwrap from <p> tags:
html = re.sub(r'<p><table>', r'<table>', html)
html = re.sub(r'</table></p>', r'</table>', html)
```

**Add CSS table styling to the page template:**
```css
table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
th, td { padding: 0.5rem 0.75rem; border: 1px solid var(--card-border-color); text-align: left; }
th { background: rgba(0,0,0,0.04); font-weight: 600; }
tr:nth-child(even) { background: rgba(0,0,0,0.02); }
```

## Pitfalls

- Always use `re.escape()` on titles before building regex patterns. **Strip YAML quotes first** — `"Title"` in YAML becomes `Title` in HTML.
- Wikilink path fix must NOT touch nav links (nav uses ../ paths which are correct).
- **Retired: the tag-filter race condition.** With no tag system there is no tag filter to desync; the surviving lesson is generic (see section 3): a filter that reads a URL parameter must populate its options and apply the parameter in one synchronous pass.
- **Escaped-pipe wikilinks**: `[[slug\\|display]]` — backslash before pipe is a markdown escaping artifact. Fix with `re.sub(r'\\[\\[([^\\]|]+)\\\\|([^\\]]+)\\]\\]', r'[[\\1|\\2]]', content)`.
- **Raw-file slugs as wikilinks**: `[[becerra-aicofe-feedback-2026]]` targets a raw paper file, not a concept page. Create a stub or fix the link source.
- **Journal entries must be sorted by date**: When displaying on the home page, sort `journal_entries.sort(key=lambda x: x['date'], reverse=True)` before slicing — the file order in journal.md is not guaranteed chronological.
- GitHub Pages CDN caches aggressively -- verify fixes on raw.githubusercontent.com first, then wait 1-2 minutes for CDN refresh.
- GitHub Pages requires an empty `.nojekyll` file at repo root.
- **Quoted date values in YAML frontmatter break journal regeneration**: When a concept page has `created: "2026-07-31"` (quoted), the journal regeneration script produces `## "2026-07-31"` as a date header. The journal HTML parser regex `## \d{4}-\d{2}-\d{2}` does NOT match the quoted version, so entries under that header are silently dropped from journal.html AND the index.html journal section. **Fix**: strip quotes from the `created` value in the journal regeneration script: `created = line.split(":", 1)[1].strip().strip('"').strip("'")`. After fixing, check for existing quoted headers in journal.md with `grep '## "' journal.md` and remove the quotes. Also check for duplicate date sections (two `## 2026-07-31` headers) that result from the quoted-date entry being grouped separately, and merge them.
- **index.md header corruption from regex replacement**: When using `re.sub(r'\*\*Last updated:\*\* \S+', ...)` on index.md, the regex may consume the closing `**` of the next field (e.g., `**Total pages**`), corrupting the header line. The regex `\*\*Last updated:.*?\*\*` with non-greedy `.*?` can match across field boundaries. **Fix**: use precise patterns: `re.sub(r'\*\*Last updated:\*\* \S+', ...)` — don't use `.*?` across fields. After regeneration, verify the header line contains no `{` template placeholders, no double dates, and that the total page count matches `ls concepts/*.md | wc -l`.
- **Table `<p>` wrapping**: After table HTML is restored from placeholders, it may still be wrapped in `<p><table>...</table></p>`. Apply cleanup regex: `re.sub(r'<p><table>', r'<table>', html)` and `re.sub(r'</table></p>', r'</table>', html)`.
- **Public repo privacy**: README.md and config files committed to public GitHub repos must not contain local filesystem paths (`/home/user/...`), cron job IDs, or machine hostnames. Use relative paths and generic descriptions instead.
- **Retired: the tag/slug collision.** The collision was between a generated tag page and an article page sharing a path. Tags are gone and no tag pages are generated, so an article slug can no longer collide with a tag page. The lesson that generalises: any value that is also a page slug must not be used as a taxonomy key that generates its own file.

## Keep AGENTS.md in sync with the canonical skills

The repo's `AGENTS.md` is the public-facing agent instruction file for anyone building a similar wiki, and its page-structure templates + editorial rules DRIFT from the canonical skills (`research-wiki`, etc.). When you codify a new editorial rule or the required page structure changes, audit `AGENTS.md` in the same change — otherwise a future agent/cron follows the stale template.

Observed 2026-09-01: `AGENTS.md`'s concept template still said "exactly 4 sections" and omitted the two REQUIRED sections every real concept page has — `## Questions to Consider` (2-7 open pre-reading questions, one contiguous bulleted list) and `## Introduction`. It also carried the weak "not just its Connected Articles list" enrichment wording instead of the **NARRATIVE INTEGRATION, never append-only** rule (weave into the thematically-appropriate EXISTING section; never a standalone `##`/`###` section floating between body and `## Connected Concepts`; full rewrite only for genuinely major contributions).

Canonical concept-page structure to verify against: synthesis blockquote → `## Questions to Consider` → `## Introduction` → narrative body → `## Connected Concepts` → `## Connected Articles`. See `references/agents-md-structure-audit-2026-09-01.md`.

## Verification

1. `grep -c '<h1>' pages/*.html` -- every page should have exactly 1
2. `grep -l 'href="pages/' pages/*.html` -- should return nothing
3. **No tags anywhere**: `grep -rn '^tags:' articles/ concepts/ faqs/` should return nothing, and so should `grep -rn 'data-tags' src/`. A reappearing `tags:` line means something re-added the retired field.
4. **Typed metadata gate passes**: `python3 tooling/scripts/validate-facets.py` exits 0. Every facet value is a concept slug from that field's own registry section, no concept sits in two facet fields, and no page is left with zero typed values.
5. **Metadata table renders**: an article page shows the typed fields in a table at the foot of the page (one row per field, values linked to their concept pages), and no tag chips appear anywhere.
6. **No tags output**: `ls tags 2>/dev/null` is empty or absent, and the nav carries Chat with AI, Search, FAQ, Journal and RSS, never a Tags link.
7. **No quoted dates**: `grep '## "' journal.md` should return nothing
8. **Facet labels come from one place**: `grep -c 'FACET_FIELDS' src/data/facetVocab.ts` is at least 1, and no .astro file hard-codes a registry section heading. Adding a facet is an edit to `FACET_SECTIONS` in `tooling/scripts/gen-concept-artifacts.py`.
9. **Tables render**: `grep -l '<table>' pages/*.html | wc -l` -- any page with `|...|` in its source should have `<table>` in its HTML
10. **No private data**: `grep -rn '/home/' README.md wiki.config.yaml concepts.registry.yaml` should return nothing
