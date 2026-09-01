# Session notes: duplicate-H1 root cause, license-note removal, single-bracket links (2026-08-21)

## 1. Duplicate H1 on Astro article pages — root cause

`src/pages/articles/[slug].astro` renders `<h1>{frontmatter title}</h1>` from the layout
(line ~158) and then SKIPS the markdown body's `# H1` line ONLY when that body line
**exactly equals** the parsed frontmatter `title` (line ~62: `trimmed.slice(2).trim() === pageTitle`).

If the body H1 is a *shortened or differently-punctuated* version of the frontmatter
`title` (e.g. dropping a subtitle clause), the two don't match and **two `<h1>` elements
render** on the page. A green build does NOT catch it.

**Rule:** the body `# H1` must be byte-identical to the frontmatter `title`. Verify before build:

```python
import yaml, re
txt = open(p).read()
fm = yaml.safe_load(re.match(r'^---\n(.*?)\n---', txt, re.DOTALL).group(1))
body_h1 = next(line[2:].strip() for line in txt.split('\n') if line.startswith('# '))
assert fm['title'] == body_h1, f"body H1 mismatch: {fm['title']!r} vs {body_h1!r}"
```

Observed on `ai-advice-suppresses-ikt-suspension-2026`: frontmatter title carried a long
subtitle clause but the body H1 used the short form.

## 2. Removing license-note messages from article pages

The maintainer asked to strip "License note: ... CC BY-ND/NC..." messages. They appear in
several shapes:
- plain paragraph: `**License note:** ...`
- blockquote: `> **License note:** ...`
- blockquote-with-emoji: `> ⚠️ **License note:** ...`  ← a regex for `> **License note:**` FAILS here because the `⚠️` sits between `>` and `**`.
- inline fragment appended to a synthesis paragraph: `⚠️ Published under **CC BY-ND 4.0** (no-derivatives) — flagged in the wiki log.`
- `*Note: The source is published under a CC BY-ND 4.0 (no derivatives) license; content has been summarised rather than adapted.*` (zhou-style)

**Robust removal:**
1. Strip any line containing `License note:` regardless of leading emoji/blockquote:
   `re.sub(r'(?m)^[ \t]*(>?[ \t]*\S*License note:[^\n]*\n)(\n?)', '', text)`
2. String-replace the exact `> ⚠️ **License note:** ...` full lines (the emoji form defeats the regex above too).
3. Remove inline `⚠️ Published under ...` fragments and `*Note: The source is published under ...` lines.
4. Collapse `\n{3,}` → `\n\n` and trim trailing blank lines.

Do NOT strip license text that is part of an APA citation line (e.g. `(CC BY-ND 4.0)` at the
end of a citation) unless the user explicitly asks — that is citation metadata, not a note.

## 3. Single-bracket malformed inline links

Hand-written article bodies occasionally emit a single-bracket `[slug]` (e.g. `[ai-literacy]`,
`[cognitive-offloading]`, `[self-efficacy]`) instead of `[[slug]]`. The broken-link check on
`[[...]]` doesn't catch it (it's not a `[[` pair), and it renders as a plain `[...]` literal.

**Detection regex** on the narrative body:
```python
mal = re.findall(r'(?<!\[)\[(ai-literacy|cognitive-offloading|self-efficacy|assessment|...)(?!\[)', narrative)
```
Watch especially for parenthetical lists of related concepts written with single brackets.

## 4. Non-education papers strongly applicable to education

When the user sends a paper that is not education-specific but clearly applies to AI-in-
education (e.g. a general human-judgment/psychology study), ingest it but add an explicit
"## Why this matters for education" section in the article body that maps the mechanism to
assessment/homework/tutoring/information-seeking and links relevant concept pages. State
in the reply that it is non-education but applicable.
