---
name: wiki-journal-update
description: "Use when regenerating the AIEd wiki journal.md."
category: research
---

# Wiki Journal Page Update (journal.md)

Regenerating `journal.md` in the AI Ed Wiki (`<WIKI>/journal.md`) is a frequent, error-prone step. This skill pins down the **exact on-disk format** and the **safe regeneration procedure** so the page never ships with truncated date headers or quoted titles again.

## THE FORMAT (Astro-era, authoritative)

`journal.md` is regenerated from scratch every ingestion batch (NEVER append-only). Exact structure:

```
# Journal

Last updated: <YYYY-MM-DD> | Total entries: <N>

## <YYYY-MM-DD>          <- full date, NO quotes, NO truncation
- 📄 [[article-slug]]
  - Article Display Title (plain, NO surrounding quotes)
- 📄 [[another-article]]
  - Another Title

## <YYYY-MM-DD>
- 📘 [[concept-slug]]
  - Concept Display Title
```

### Non-negotiables
1. **Date headers are `## YYYY-MM-DD`** — the full 10-char date (`## 2026-09-01`), derived from the `created` frontmatter field (take `created[:10]`). NO leading `"` quote, NO truncation. A header like `## "2026-09-0` is a BUG (introduced by accidentally quoting + slicing the date).
2. **Icons:** articles `📄`, concept pages `📘`. No other icons.
3. **Title line:** two-space indent, then the `title` verbatim, **NOT wrapped in quotes**. `  - Title` (correct) vs `  - "Title"` (bug).
4. **Grouping:** group entries by `created` date, sort date-groups newest-first (`2026-09-01` before `2026-08-31`).
5. **Within a date group:** sort alphabetically by slug, lowercase.
6. **Header count:** `Total entries: N` = number of `- ` entry lines (articles + concepts). Must match the sum of included pages.
7. **Which pages are included:** ALL `type: article` pages, PLUS concept pages — but SKIP only concept pages with explicit empty/null `sources:` (real low-confidence stubs). Include umbrella concepts that OMIT the `sources:` field entirely. (Batch-4 refined rule: 1016 📄 + 183 📘 = 1199 entries.)

## What the batch-4 bug was (2026-09-01)
The batch-4 regeneration wrote `## "2026-09-0` (leading quote + date truncated to 10 chars incl. the quote) and `  - "Title"` (quoted titles). The correct prior format (batch-3, commit `ec53ea8b`) used `## 2026-09-01` and `  - Title`. **Always diff the regenerated file against the previous commit's format before committing.**

## Safe Regeneration (inline Python)

Run via `execute_code` (prefer Python `open()`/`os` for all file I/O — NOT `agent_tools.read_file`, which returns an incompatible dict). Never run a `regenerate-journal-html.py` that targets the retired pre-Astro HTML pipeline.

```python
import os, re, yaml
from collections import defaultdict
from datetime import date

WIKI = "<WIKI>"
TODAY = date.today().isoformat()

def as_list(v):
    if v is None: return []
    if isinstance(v, str):
        s = v.strip()
        if s in ('', 'null', '[]'): return []
        return [x.strip().strip("'\"") for x in s.strip('[]').split(',') if x.strip()]
    if isinstance(v, list): return [str(x) for x in v]
    return [str(v)]

def parse_fm(content):
    m = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not m: return {}
    try:
        d = yaml.safe_load(m.group(1))
        if isinstance(d, dict): return d
    except Exception: pass
    d = {}
    for line in m.group(1).split("\n"):
        if ':' in line:
            k, _, v = line.partition(":")
            d[k.strip()] = v.strip()
    return d

def load(slug, d):
    with open(os.path.join(WIKI, d, slug + '.md'), encoding='utf-8') as f:
        return f.read()

entries = []  # (date, slug, type, title)
for fn in sorted(os.listdir(os.path.join(WIKI, 'articles'))):
    if not fn.endswith('.md'): continue
    slug = fn[:-3]
    fm = parse_fm(load(slug, 'articles'))
    if fm.get('type') != 'article': continue
    created = str(fm.get('created', ''))[:10]
    title = str(fm.get('title', slug))
    entries.append((created, slug, 'article', title))

for fn in sorted(os.listdir(os.path.join(WIKI, 'concepts'))):
    if not fn.endswith('.md'): continue
    slug = fn[:-3]
    fm = parse_fm(load(slug, 'concepts'))
    if fm.get('type') != 'concept': continue
    # Skip real stubs (explicit empty/null sources). Include umbrella (sources omitted).
    if 'sources' in fm and not as_list(fm.get('sources')):
        continue
    created = str(fm.get('created', ''))[:10]
    title = str(fm.get('title', slug))
    entries.append((created, slug, 'concept', title))

groups = defaultdict(list)
for e in entries:
    groups[e[0]].append(e)

dates = sorted(groups.keys(), reverse=True)
icon = {'article': '\U0001F4C4', 'concept': '\U0001F4D8'}  # 📄 📘

lines = ['# Journal', '', 'Last updated: %s | Total entries: %d' % (TODAY, len(entries)), '']
for d in dates:
    lines.append('## %s' % d)
    for _, slug, typ, title in sorted(groups[d], key=lambda x: x[1].lower()):
        lines.append('- %s [[%s]]' % (icon[typ], slug))
        lines.append('  - %s' % title)
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
bad_hdr = [l for l in lines if l.startswith('## ') and (l.startswith('## \"') or len(l) != 13)]
assert not bad_hdr, bad_hdr
# 2. No WRAPPED titles. A title that GENUINELY begins with a quote
#    (e.g. '"Should I Tell My Teacher?" ...') is legitimate; only flag lines
#    FULLY wrapped in matching quotes (  - "..." ).
wrapped = re.findall(r'^  - \"(.*)\"$', j, re.M)
assert not wrapped, wrapped
# 3. Count reconciliation: Total entries == number of entry lines
m = re.search(r'Total entries: (\d+)', j)
entry_lines = len(re.findall(r'^- .*\[\[', j, re.M))
assert m and int(m.group(1)) == entry_lines, (m.group(1), entry_lines)
# 4. New slugs present
for s in ['my-new-slug']:
    assert '[['+s+']]' in j, s
print('journal verification OK:', entry_lines, 'entry lines')
```

Also run the **list-formatting gate** after writing journal.md:
```bash
python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py <WIKI> --all
```
Expect `Scanned N page(s). Defects: 0`.

## Order in the pipeline
Regenerate `journal.md` in Phase-1 ingestion (research-wiki skill) AFTER creating article/concept pages and adding reciprocal links, BEFORE `index.md` and the Astro build. Then regenerate `index.md`, `public/llms.txt`/`llms-full.txt` (`python3 tooling/scripts/generate-llms-files.py`), then `npm run build`.

## index.md — same regen family, same discipline
`index.md` is regenerated alongside journal.md every batch and is subject to the SAME format-regression class. Do NOT treat it as an append-only file — collect all slugs+titles from `articles/`, `concepts/`, AND `faqs/`, sort alphabetically by slug (lowercase), and rewrite the whole file.

Exact format (Astro-era, verified against known-good batch-3 commit `ec53ea8b`):
```
# Index

Last updated: <YYYY-MM-DD> | Total pages: <N>

Articles: <A> | Concepts: <C> | FAQs: <F>

## Concepts

- [[slug]] — Title        <- plain title, NO wrapping single-quotes
- [[another-slug]] — Another Title
```
Non-negotiables:
1. **`Total pages: N` = ACTUAL file count** = len(articles/*.md) + len(concepts/*.md) + len(faqs/*.md). In the 09853 batch that was 1017+183+16 = 1216.
2. **Title line is `- [[slug]] — Title` with NO surrounding quotes.** The batch-4 regression wrapped titles in single quotes (`— 'Title'`); the correct batch-3 convention is plain `— Title`. Escape only inner literal quotes; do not add a wrapping pair.
3. **One `## Concepts` section**, alphabetically mixing articles + concepts + FAQs (no separate per-type sections; FAQ slugs are listed here too).
4. New-article presence check: the just-ingested slug MUST appear after regen.

## What the batch-4 bug was, continued (2026-09-01)
The batch-4 regen regressed BOTH derived catalogs in the same session: journal.md got truncated `## "2026-09-0` headers + quoted titles, and index.md got `'Title'`-wrapped entries. Both were correct in batch-3. **So the "always diff against the previous commit's format before committing" discipline applies to index.md just as much as journal.md** — a batch that silently changes BOTH files' conventions is the tell that a regen script regressed.

Run the list-formatting gate after index.md too (`check_list_formatting.py --all`), and verify counts reconcile (index `Total pages` should match the on-disk file count from `os.listdir`, and the built page count from `npm run build`).

## Pitfalls
- **Truncated date headers**: `## "2026-09-0` is a bug. Header must be `## 2026-09-01` (13 chars: `## ` + 10-char date). Never prefix a `"`.
- **Fully-quoted titles**: `  - "Title"` wrapped entirely in quotes is a bug. Title line must be `  - Title`. Note: some titles GENUINELY begin with a quote (e.g. `"Should I Tell My Teacher?"...`) — only flag lines fully wrapped in matching quotes.
- **`sources:` nuance**: skip ONLY `sources: []`/`null` (real stubs). Umbrella concepts that omit `sources:` entirely MUST be included — filtering on "no sources" silently drops them.
- **Don't run `regenerate-journal-html.py`** — that targets the retired pre-Astro static generator. Use inline Python.
- **`yaml` may be unavailable in cron** — the regex fallback in `parse_fm` handles it; coerce `sources`/`tags` elements with `str()` to avoid float errors.
- **Always diff against the previous commit's format** before committing, so a format regression (truncated headers / quoted titles) is caught.
