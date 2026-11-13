---
name: published-title-verification
description: "Use when page titles must match their source."
category: research
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [titles, citations, metadata, corpus-audit, verification]
    related_skills: [paper-batch-ingestion, wiki-citation-format, wiki-article-page-skeleton]
---

# Published-title verification

A page's `title:` (and the H1 it drives) is the source's **verbatim published title** — never a headline written to
sound better. Descriptive titles read well, which is exactly why they survive review: a page can carry an invented
headline, a correct `## Citation` block, and pass every schema, facet and prose gate.

## When to Use

- Writing a new article page from a PDF, DOI, or web report.
- Auditing a corpus after a batch ingest, or after a maintainer says titles do not match the originals.
- Any time a title has been paraphrased, title-cased, truncated at its subtitle, or cut where a colon introd a
  second clause.

## Machine audit first

The citation block is usually the sourced half: its link text is the title as published. Compare, then classify.

```python
import re, glob, os, yaml
def cit_title(t):
    ci = t.find('## Citation')
    if ci == -1: return ''
    b = t[ci:]
    m = re.search(r'\[([^\]]{10,700})\]\(https?://', b)          # linked title
    if m: return m.group(1).strip().strip('*').strip()
    m = re.search(r'\*([^*]{15,700})\*', b)                       # italic (plain-text) title
    return m.group(1).strip() if m else ''

def kind(fm, ct):
    if not ct: return 'no-citation'
    if fm == ct: return 'same'
    if fm.lower() == ct.lower(): return 'case'
    strip = lambda s: re.sub(r'[^a-z0-9]', '', s.lower())
    return 'punct' if strip(fm) == strip(ct) else 'words'
```

Only the `words` class needs evidence work. A corpus of ~2,000 pages typically splits into ~73% exact, ~18% case,
~3% punctuation and ~5% word-level differences — so the word-level set is tens of pages, not hundreds.

## Fix procedure

1. **case / punct** — set `title:` to the citation text verbatim. Nothing else to decide.
2. **words** — decide per page from evidence, in this order:
   - the raw source extract (`raw/papers/<slug>.md`): its title block, running head, or journal header;
   - **Crossref** for the DOI: `curl -s https://api.crossref.org/works/<doi>` → `message.title[0]`;
   - **arXiv** for a preprint: scrape `https://arxiv.org/abs/<id>` for `<meta name="citation_title" content="…">`;
   - only then the citation link text.
   When the page title turns out to be right and the *citation* is the truncated or paraphrased side, extend the
   citation instead of degrading the title.
3. **Write titles as JSON-quoted YAML** and re-load to prove it parses:

```python
import json, re
t = re.sub(r'^title: .*$', 'title: ' + json.dumps(verbatim, ensure_ascii=False), t, count=1, flags=re.M)
yaml.safe_load(t.split('\n---', 1)[0].lstrip('---\n'))['title'] == verbatim
```

   A regex that strips or replaces quote characters mangles every title containing a quotation ("Should I Tell My
   Teacher?": …). Quote-style is data, not formatting.
4. **Do not bump `updated:`.** A mass title normalization is metadata, not new content; bumping hundreds of pages
   floods the site's what's-new feed, RSS and any newsletter that keys on it. `check-concept-updated-bump.py` scopes
   to concept narrative changes and will not demand it.
5. **Verify in bulk**, in both directions: `title == citation` for every page, and the title's first 8 words found
   in the raw extract where one exists.

## Touching the citation link text

When you replace the link text, keep everything that was inside it: authors stay outside, but venue, volume, series
and report numbers must move **out** of the link, not vanish.

```
[Title](url). *Journal of Applied Learning & Teaching*, 9(2).
[Title](url). EdWorkingPaper No. 26-1451, Annenberg Institute at Brown University.
```

Then scan every changed page's `## Citation` for venue tokens present at `HEAD:` and absent now (`Journal`,
`Proceedings`, `arXiv`, `pp.`, `Vol.`, `Report`, series names). Delegated subagents asked to "fix citation link
text" delete this detail reliably; the token scan is the only thing that catches it.

## Pitfalls

- **A PDF extract makes a correct title look wrong.** `pdftotext` letter-spacing and running heads turn titles into
  `E VALUATION OF PRE - TRAINED` or `AD4E DU`, and arXiv raws begin with `# 2610.38950 ## Full text…`. Normalize
  whitespace and case, and match on the first few words; a raw that lacks the title is not evidence of a bad title.
- **The citation itself can be the wrong side.** Truncated subtitles and paraphrased link text are common, so
  "make the page match its citation" fixes some pages and corrupts others. Resolve `words`-class pages against the
  publisher record before choosing a direction.
- **Case-only differences inside a `*italic*` citation title** are invisible to a naive reader: the page says
  Title Case while the citation (and the journal) use sentence case. Normalize, do not adjudicate.
- **Escaped quotes in frontmatter** (`title: \"…\"`) are a YAML quoting bug, not a content decision — fix them while
  auditing rather than reporting them as a special case.
