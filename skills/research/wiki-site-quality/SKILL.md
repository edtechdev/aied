---
name: wiki-site-quality
description: "Fix static-site bugs: dup H1, broken links, dead tags, missing tag pages, tag fragmentation, table rendering, journal date quoting."
category: research
---

# Wiki Site Quality

Apply quality fixes to a static HTML site generated from a markdown wiki. Covers structural bugs, tag system health, markdown rendering, and navigation consistency.

## When to Use

- Article pages show duplicate titles (header + body H1)
- Related Pages wikilinks 404 (double pages/ path prefix)
- Tag badges on article pages are dead span elements with no links
- Tag-filtering JavaScript silently fails on page load (race condition)
- Need consistent navigation across all pages (Home, Journal, Tags, Search)
- **Tag pages are missing or stale** — not regenerated with the static site
- **Tags are fragmented** — similar concepts spread across multiple tag names
- **Markdown tables render as raw text** instead of HTML tables
- **Journal date headers have quotes** (`## "2026-07-31"`) from unquoted frontmatter dates
- **Public repo files contain private paths** (e.g., `<WIKI>`) or cron job IDs
- **Concept counts are out of sync** — sidebar vs `tooling/concept-index.md` vs `concepts/*.md`
  (see `references/concept-count-reconciliation-2026-08-26.md` for the 3-registry reconciliation
  recipe: the `## Merged / absorbed` redirects must NOT be counted, and counts must be recomputed
  from the file tree, never carried forward)

## Procedure

Run through the fixes in order. All four are independent but collectively produce a polished site.

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

**Root cause**: The generator script at `generate-static-site.py` line ~177 computes the stripped `content` variable but then passes `page['content']` (original) to `page_template.format()`. The stripping runs silently with no effect. Fix: use the `content` variable, not `page['content']`.

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

### 3. Dead Tag Links to Clickable Badges

Convert span tags to styled anchor links pointing to `../index.html?tag=<tagname>`.

```python
tags_html = ''.join([
    f'<a href="../index.html?tag={tag}" class="tag">{tag}</a>'
    for tag in page['tags']
]) or 'No tags'
```

CSS for badge styling:
```css
a.tag {
    display: inline-block; padding: 0.15rem 0.5rem; margin: 0.15rem;
    background: var(--primary); color: var(--primary-inverse);
    border-radius: 4px; font-size: 0.8rem; text-decoration: none;
}
a.tag:hover { opacity: 0.85; }
```

### 4. Robust Tag-Filter JS (No Timing Dependency)

The naive approach uses DOMContentLoaded + setTimeout to wait for dropdown population -- a race condition. Fix: populate the dropdown AND apply the URL param in a single synchronous IIFE.

```javascript
function filterByTag(tag) {
    document.querySelectorAll('.page-item').forEach(function(item) {
        if (!tag) { item.style.display = ''; return; }
        var tags = (item.getAttribute('data-tags') || '').toLowerCase();
        item.style.display = tags.includes(tag.toLowerCase()) ? '' : 'none';
    });
    if (tag) {
        var url = new URL(window.location);
        url.searchParams.set('tag', tag);
        window.history.replaceState({}, '', url);
    }
    showActiveTag(tag);
}

function showActiveTag(tag) {
    var el = document.getElementById('active-tag-badge');
    if (!el) {
        el = document.createElement('div');
        el.id = 'active-tag-badge';
        el.style.cssText = 'margin:0.5rem 0; padding:0.5rem 1rem; background:var(--primary); color:var(--primary-inverse); border-radius:6px; display:inline-block;';
        var h = document.querySelector('.section-header h2');
        if (h) h.parentNode.insertBefore(el, h.nextSibling);
    }
    el.innerHTML = tag
        ? 'Filtered by tag: <strong>' + tag + '</strong> <a href="?" style="color:var(--primary-inverse);margin-left:0.5rem;opacity:0.7;">clear</a>'
        : '';
}

// Single synchronous IIFE
(function() {
    var select = document.getElementById('tag-filter');
    var tags = new Set();
    document.querySelectorAll('.page-item').forEach(function(item) {
        (item.getAttribute('data-tags') || '').split(',').forEach(function(t) {
            var trimmed = t.trim();
            if (trimmed) tags.add(trimmed);
        });
    });
    Array.from(tags).sort().forEach(function(tag) {
        var opt = document.createElement('option');
        opt.value = tag; opt.textContent = tag;
        select.appendChild(opt);
    });
    var params = new URLSearchParams(window.location.search);
    var tagParam = params.get('tag');
    if (tagParam) { select.value = tagParam; filterByTag(tagParam); }
})();
```

Key: no arrow functions or const/let (broad compat), synchronous (no race), visible badge with clear button.

### Nav Consistency

All pages: Home, Journal, Tags, Search.

```html
<nav><ul>
    <li><a href="../index.html">Home</a></li>
    <li><a href="../journal.html">Journal</a></li>
    <li><a href="../tags.html">Tags</a></li>
    <li><a href="../search.html">Search</a></li>
</ul></nav>
```

### 5. Tag Page Generation

**The `generate-static-site.py` script does NOT automatically generate tag pages.** Tag pages must be explicitly generated by grouping all collected pages by tag and writing an HTML file per tag. Without this, the `tags/` directory is either empty or contains stale one-off pages that don't reflect current article tags.

Add this section after the individual page generation loop in `generate-static-site.py`:

```python
# ---- Generate tag pages ----
tags_output_dir = os.path.join(OUTPUT_PATH, 'tags')
os.makedirs(tags_output_dir, exist_ok=True)

# Group pages by tag
tag_to_pages = {}
for page in pages:
    for tag in page['tags']:
        if tag not in tag_to_pages:
            tag_to_pages[tag] = []
        tag_to_pages[tag].append(page)

# For each tag, extract concept summary if a matching concept page exists
for tag, tag_pages in sorted(tag_to_pages.items()):
    summary_html = ""
    concept_path = os.path.join(WIKI_PATH, 'concepts', f'{tag}.md')
    if os.path.exists(concept_path):
        with open(concept_path) as f:
            concept_text = f.read()
        # Extract first paragraph after frontmatter (skip H1 title)
        fm_end = concept_text.find('---', 4)
        if fm_end > 0:
            body = concept_text[fm_end+3:].strip()
            lines = body.split('\n')
            paragraphs = []
            in_p = False
            for line in lines:
                stripped = line.strip()
                if stripped.startswith('# '): continue
                if stripped == '':
                    if in_p: break
                    continue
                in_p = True
                paragraphs.append(stripped)
            first_para = ' '.join(paragraphs)
            if len(first_para) > 500:
                first_para = first_para[:500] + '...'
            if first_para:
                first_para = re.sub(r'\[\[([^\]]+)\]\]', r'<a href="../pages/\1.html">\1</a>', first_para)
                summary_html = f'<div class="concept-summary">{first_para}</div>'
    
    # Generate article cards with snippets and cross-tags
    # Then write tag page HTML...
```

**Tag page template** should include:
- Navigation: Home, Journal, Tags, Search
- Concept summary (from matching concept page, if exists)
- Article count
- Article cards: title link, content snippet (first 250 chars), cross-tag badges

Also generate **`tags.html`** — a tag cloud index page listing all tags with article counts.

### 6. Tag Consolidation

Tags naturally fragment over time as different articles use slightly different names for the same concept. Regular consolidation keeps the tag system usable.

**Detection — find fragmentation candidates:**

```python
# Tags with shared prefixes and low usage are merge candidates
# Example: 'teacher-ai-competency' (1 article) + 'teacher-competency' (3) → 'teacher-professional-development'
# Signs: 2+ tags sharing a prefix root, individual counts < 5, parent tag exists
```

**Common consolidation patterns to watch for:**
- `higher-education` → `higher-ed` (plain duplicates)
- `teacher-ai-competency` / `teacher-competency` / `teacher-development` → `teacher-professional-development`
- `automated-essay-scoring` / `automated-assessment` → `automated-grading`
- `stem` → `stem-education`
- `ai-classroom` / `ai-era` / `ai-in-education` → `ai-education`
- `cognitive-load-theory` → `cognitive-offloading`
- `socratic-ai-dialogue` / `dialogue` → `socratic-method`
- **Page slugs used as tags**: e.g. `agentic-workflows-education` used as a tag on another page — this creates a tag page that collides with the actual article page. Replace with the concept-level tag instead.

**Procedure:**
1. Build a merge map: `{old_tag: canonical_tag}`
2. For each concept page, replace old tags with canonical tags
3. Sort tags alphabetically after replacement
4. Remove stale tag HTML files that no longer map to any active tag
5. Create concept stubs for high-value tags (5+ articles) that have no matching concept page — so their tag page gets a summary

### 7. Markdown Table Rendering

The naive `md_to_html()` function doesn't handle markdown tables — they render as raw `|...|` text inside `<p>` tags.

**Add table parsing to `md_to_html()` in `generate-static-site.py`:**

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
- Tag filter JS race condition is the #1 silent failure -- if tag links appear to do nothing, dropdown population and URL param reading are out of sync.
- **Escaped-pipe wikilinks**: `[[slug\\|display]]` — backslash before pipe is a markdown escaping artifact. Fix with `re.sub(r'\\[\\[([^\\]|]+)\\\\|([^\\]]+)\\]\\]', r'[[\\1|\\2]]', content)`.
- **Raw-file slugs as wikilinks**: `[[becerra-aicofe-feedback-2026]]` targets a raw paper file, not a concept page. Create a stub or fix the link source.
- **Journal entries must be sorted by date**: When displaying on the home page, sort `journal_entries.sort(key=lambda x: x['date'], reverse=True)` before slicing — the file order in journal.md is not guaranteed chronological.
- GitHub Pages CDN caches aggressively -- verify fixes on raw.githubusercontent.com first, then wait 1-2 minutes for CDN refresh.
- GitHub Pages requires an empty `.nojekyll` file at repo root.
- **Quoted date values in YAML frontmatter break journal regeneration**: When a concept page has `created: "2026-07-31"` (quoted), the journal regeneration script produces `## "2026-07-31"` as a date header. The journal HTML parser regex `## \d{4}-\d{2}-\d{2}` does NOT match the quoted version, so entries under that header are silently dropped from journal.html AND the index.html journal section. **Fix**: strip quotes from the `created` value in the journal regeneration script: `created = line.split(":", 1)[1].strip().strip('"').strip("'")`. After fixing, check for existing quoted headers in journal.md with `grep '## "' journal.md` and remove the quotes. Also check for duplicate date sections (two `## 2026-07-31` headers) that result from the quoted-date entry being grouped separately, and merge them.
- **index.md header corruption from regex replacement**: When using `re.sub(r'\*\*Last updated:\*\* \S+', ...)` on index.md, the regex may consume the closing `**` of the next field (e.g., `**Total pages**`), corrupting the header line. The regex `\*\*Last updated:.*?\*\*` with non-greedy `.*?` can match across field boundaries. **Fix**: use precise patterns: `re.sub(r'\*\*Last updated:\*\* \S+', ...)` — don't use `.*?` across fields. After regeneration, verify the header line contains no `{` template placeholders, no double dates, and that the total page count matches `ls concepts/*.md | wc -l`.
- **Table `<p>` wrapping**: After table HTML is restored from placeholders, it may still be wrapped in `<p><table>...</table></p>`. Apply cleanup regex: `re.sub(r'<p><table>', r'<table>', html)` and `re.sub(r'</table></p>', r'</table>', html)`.
- **Public repo privacy**: README.md and config files committed to public GitHub repos must not contain local filesystem paths (`/home/user/...`), cron job IDs, or machine hostnames. Use relative paths and generic descriptions instead.
- **Tag/slug collision**: When a concept page slug is used as a tag on other pages (e.g., `agentic-workflows-education` as a tag), the tag page HTML and the article page HTML have the same path, causing confusion. Audit tags for page-slug values and replace them with concept-level tags (e.g., replace `agentic-workflows-education` tag with `agentic-ai`).

## Verification

1. `grep -c '<h1>' pages/*.html` -- every page should have exactly 1
2. `grep -l 'href="pages/' pages/*.html` -- should return nothing
3. `grep 'href="../index.html?tag=' pages/*.html | head -5` -- should show links
4. Visit `index.html?tag=metacognition` -- should filter and show badge
5. All pages should include Journal and Tags in the nav
6. **Tag pages**: `ls tags/*.html | wc -l` should equal the number of unique tags. Spot-check: `grep -c 'href="../pages/' tags/agentic-ai.html` should match the number of articles with that tag
7. **No quoted dates**: `grep '## "' journal.md` should return nothing
8. **No stale tag pages**: `diff <(ls tags/ | sed 's/.html$//' | sort) <(grep -rh '^tags:' concepts/ | grep -oP '\[\K[^\]]+' | tr ',' '\n' | sed "s/^ *'//;s/'$//;s/^ *\"//;s/\"$//" | sort -u)` should show no orphaned tag files
9. **Tables render**: `grep -l '<table>' pages/*.html | wc -l` -- any page with `|...|` in its source should have `<table>` in its HTML
10. **No private data**: `grep -rn '/home/' README.md arxiv-scan-config.yaml` should return nothing
