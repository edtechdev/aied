---
name: wiki-journal-update
description: "Use when regenerating the AIEd wiki journal.md."
category: research
---

# Wiki Journal Page Update (journal.md)

Regenerating `journal.md` in the AI Ed Wiki (`<WIKI>/journal.md`) is a frequent, error-prone step. This skill pins down the **exact on-disk format** and the **safe regeneration procedure** so the page never ships with truncated date headers, quoted titles, or a stale stub-skip that drops real pages.

## THE FORMAT (Astro-era, authoritative)

`journal.md` is regenerated from scratch every ingestion batch (NEVER append-only). Exact structure — **one entry line per page**:

```
# Journal

Last updated: <YYYY-MM-DD> | Total entries: <N>

## <YYYY-MM-DD>
- 📄 [[article-slug]] — Article Display Title
- 📄 [[another-article]] — Another Title

## <YYYY-MM-DD>
- 📘 [[concept-slug]] — Concept Display Title
```

### Non-negotiables
1. **Date headers are `## YYYY-MM-DD`** — the full 10-char date (`## 2026-09-01`), derived from `created[:10]` with any surrounding quotes stripped first. NO leading `"` quote, NO truncation. A header like `## "2026-09-0` is a BUG (introduced by accidentally quoting + slicing the date).
2. **Icons:** articles `📄`, concept pages `📘`. No other icons.
3. **Single-line entries:** each entry is ONE line `- {icon} [[{slug}]] — {title}` with an em-dash (`—`, U+2014) separator. There is NO separate two-line `  - Title` form.
4. **Titles are plain** — NOT wrapped in quotes.
5. **Grouping:** group entries by `created` date, sort date-groups newest-first (`2026-09-01` before `2026-08-31`).
6. **Within a date group:** sort alphabetically by slug, lowercase.
7. **Header count:** `Total entries: N` = number of `- ` entry lines (articles + concepts). Must equal the sum of included pages, which must equal the on-disk file count (`len(articles/*.md) + len(concepts/*.md)`).
8. **Which pages are included — ALL of them.** This wiki has **NO stub pages**: every article and concept file is a real, fully-authored page that lives in `index.md` and on the site. Include every `type: article` page and every `type: concept` page. **Do NOT skip pages that have `sources: []` or omit `sources:`** — an empty `sources:` field on an article just means it has no raw/ source pointer (many fully-authored articles lack one); it is NOT a stub and MUST be in the journal. (A prior skill note said to skip empty-`sources` concepts as "low-confidence stubs" — that is obsolete: there are no such stub pages in the current wiki, and applying the skip silently dropped real articles from the journal.)

## Common failure modes (all observed)

- **Quoted/truncated date headers** `## "2026-09-0`: caused by running `created[:10]` on a quoted timestamp (`created: "2026-09-05T06:04:05-04:00"`) — the slice keeps the leading `"`. **Always strip quotes first**: `created.strip().strip('"').strip("'")[:10]`.
- **Two-line vs single-line regression**: a regenerator emitting the old two-line `- 📄 [[slug]]` + `  - Title` form drifts from the committed single-line convention. Always diff the regenerated file against the previous commit's format.
- **Stale stub-skip dropping real pages**: a regenerator that skips empty-`sources` pages (treating them as stubs) silently removes fully-authored articles from the journal — the journal count then falls below the index/site file count. There are no stubs; include everything.

## Safe Regeneration (inline Python)

Run via `execute_code` (prefer Python `open()`/`os` for all file I/O — NOT `hermes_tools`/`agent_tools` `read_file`, which returns an incompatible dict). Never run a `regenerate-journal-html.py` that targets the retired pre-Astro HTML pipeline.

```python
import os, re, yaml
from collections import defaultdict
from datetime import date

WIKI = "<WIKI>"          # or /home/doug/wiki
EM = "\u2014"            # em dash — DO NOT use a hyphen
TODAY = date.today().isoformat()

def parse_fm(content):
    m = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not m: return {}
    try:
        d = yaml.safe_load(m.group(1))
        if isinstance(d, dict): return d
    except Exception: pass
    return {}

entries = []  # (created_date, slug, icon, title)
for sub, icon in (('articles', '\U0001F4C4'), ('concepts', '\U0001F4D8')):  # 📄 📘
    for fn in sorted(os.listdir(os.path.join(WIKI, sub))):
        if not fn.endswith('.md'): continue
        slug = fn[:-3]
        fm = parse_fm(open(os.path.join(WIKI, sub, fn), encoding='utf-8').read())
        if fm.get('type') not in ('article', 'concept'): continue
        # Include EVERY page — there are no stubs. Strip quotes from created BEFORE slicing.
        created = str(fm.get('created', '')).strip().strip('"').strip("'")[:10]
        title = str(fm.get('title', slug)).strip().strip('"').strip("'")
        entries.append((created, slug, icon, title))

groups = defaultdict(list)
for e in entries: groups[e[0]].append(e)
dates = sorted(groups.keys(), reverse=True)

lines = ['# Journal', '', 'Last updated: %s | Total entries: %d' % (TODAY, len(entries)), '']
for d in dates:
    lines.append('## %s' % d)
    for _, slug, icon, title in sorted(groups[d], key=lambda x: x[1].lower()):
        lines.append('- %s [[%s]] %s %s' % (icon, slug, EM, title))
    lines.append('')

with open(os.path.join(WIKI, 'journal.md'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))
print('journal.md regenerated:', len(entries), 'entries')
```

## Verification (HARD — do NOT trust the script's count alone)

After regeneration, run these checks:

```python
import os, re
j = open('<WIKI>/journal.md', encoding='utf-8').read()
lines = j.split('\n')
# 1. Every date header is full & unquoted (exactly 13 chars: '## ' + 10-char date)
bad_hdr = [l for l in lines if l.startswith('## ') and (l.startswith('## "') or len(l) != 13)]
assert not bad_hdr, bad_hdr
# 2. Entries are single-line with an em-dash; no wrapped-quote titles
wrapped = re.findall(r'^- .*\[\[[^\]]+\]\] \u2014 ".*"$', j, re.M)
assert not wrapped, wrapped
# 3. Count reconciliation: Total entries == number of entry lines == on-disk file count
m = re.search(r'Total entries: (\d+)', j)
entry_lines = len(re.findall(r'^- .*\[\[', j, re.M))
assert m and int(m.group(1)) == entry_lines, (m.group(1), entry_lines)
n_files = len([f for f in os.listdir('<WIKI>/articles') if f.endswith('.md')]) \
        + len([f for f in os.listdir('<WIKI>/concepts') if f.endswith('.md')])
assert entry_lines == n_files, (entry_lines, n_files)
# 4. New slugs present
for s in ['my-new-slug']:
    assert '[['+s+']]' in j, s
print('journal verification OK:', entry_lines, 'entry lines ==', n_files, 'files')
```

Also run the **list-formatting gate** after writing journal.md:
```bash
python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py <WIKI> --all
```
Expect `Scanned N page(s). Defects: 0`.

## Order in the pipeline
Regenerate `journal.md` in Phase-1 ingestion (research-wiki skill) AFTER creating article/concept pages and adding reciprocal links, BEFORE `index.md` and the Astro build. Then regenerate `index.md`, `public/llms.txt`/`llms-full.txt` (`python3 tooling/scripts/generate-llms-files.py`), then `npm run build`.

## index.md — same regen family, same discipline
`index.md` is regenerated alongside journal.md every batch and is subject to the SAME format-regression class. Do NOT treat it as an append-only file — collect all slugs+titles from `articles/` AND `concepts/` (NOT faqs — FAQ slugs are not listed in the ## Concepts list), sort alphabetically by slug (lowercase), and rewrite the whole file.

Exact format (Astro-era, verified against committed batch):
```
# Index

Last updated: <YYYY-MM-DD>

Articles: <A> | Concepts: <C> | FAQs: <F>

## Concepts

- [[slug]] — Title        <- plain title, NO wrapping quotes
- [[another-slug]] — Another Title
```
Non-negotiables:
1. **Header** has `Last updated: <YYYY-MM-DD>` on its own line, then `Articles: <A> | Concepts: <C> | FAQs: <F>` (counts from `os.listdir`), then `## Concepts`.
2. **Title line is `- [[slug]] — Title` with NO surrounding quotes** (em-dash separator, matching the journal).
3. **One `## Concepts` section** listing articles + concepts only (alphabetical). FAQ slugs are counted in the header but are NOT entries in this list.
4. **`Total pages` reconciliation:** the number of `- [[` lines must equal `len(articles/*.md) + len(concepts/*.md)`, and the header `Articles`/`Concepts` counts must match those `os.listdir` counts. New-article presence check: the just-ingested slug MUST appear after regen.

## Pitfalls
- **Truncated date headers**: `## "2026-09-0` is a bug. Header must be `## 2026-09-01` (13 chars: `## ` + 10-char date). Never prefix a `"`; strip quotes from `created` before slicing.
- **Fully-quoted titles**: `— "Title"` wrapped entirely in quotes is a bug. Title line must be `— Title`. Note: some titles GENUINELY begin with a quote (e.g. `"Should I Tell My Teacher?"...`) — only flag titles fully wrapped in a matching quote pair.
- **Two-line entries are wrong**: the format is one line per page (`- 📄 [[slug]] — Title`). Do not emit the legacy two-line `- 📄 [[slug]]` + `  - Title` form.
- **NO stub-skip**: there are no stub pages in this wiki. Include every article and concept. Empty/omitted `sources:` is NOT a stub signal — it merely means the page has no raw/ source pointer.
- **Don't run `regenerate-journal-html.py`** — that targets the retired pre-Astro static generator. Use inline Python.
- **`yaml` may be unavailable in cron** — coerce `created`/`title`/`sources`/`tags` with `str()` and guard `None`; strip quotes defensively before slicing dates.
- **Always diff against the previous commit's format** before committing, so a format regression (truncated headers / quoted titles / two-line drift) is caught.

## Repository mirror
This skill is mirrored in the AI Ed Wiki repo at `skills/research/wiki-journal-update/`. Keep the installed copy (`~/.hermes/skills/research/wiki-journal-update/`) and the repo copy in sync after every edit (they differ only in path literals: the repo copy uses `<WIKI>` placeholders; the installed copy uses `/home/doug/wiki`).
