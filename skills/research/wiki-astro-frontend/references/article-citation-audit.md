# Article citation & frontmatter quality audit

A reusable workflow for cleaning up `articles/*.md` files across the wiki. the maintainer
flags articles whose citation is mangled, whose header mentions "arXiv" as a
standalone source, or whose tags are duplicated. Run this as a class-level sweep
when he says "clean up / fix any other articles like this one."

## The audit — deterministic scans (run via `execute_code`/Python, not grep)

Scan every `articles/*.md`; for each, pull the `## Citation` block and frontmatter.

### 1. Mangled citations (garbage in the author field)
The worst failures look like:
`Tschisgale", A.S.F.P.L., Leibniz, P.E., to, E.A.S.A.H.L.Q.S.N.C.L., & frequently, T.C.S.I.P.T.A.P.P.T. (2026)…`
— stray initials runs, institution names ("Leibniz", "Georgia", "Computing"), or
title-fragment words mashed into the author position.

Detect on the author portion (text before ` (YYYY)`, markdown links stripped) with
targeted regexes, NOT a broad "bad-punct" check (which false-positives ~900 legit pages):
- opening quote in the author run: `"\s*[A-Z]\.\s*[A-Z]\.`
- `& (frequently|preprint|university|the|to|and|in|of)\b`
- `preprint, [A-Z]\.`
- `, to, [A-Z]\.`
- 5+ initials in a row: `[A-Z]\.\s*[A-Z]\.\s*[A-Z]\.\s*[A-Z]\.\s*[A-Z]\.`
- orphan `\bpreprint\b` / `\bfrequently\b` / `,\s*to,\s*[A-Z]\.` / `P\.E\.,`

**Fix:** read the article's `sources:` raw file under `raw/papers/`, find the REAL
authors (frontmatter `authors:`, a `**Authors:**` line, or the paper byline near the
top). Rewrite APA: `Lastname, F. M., & Lastname2, F. (2026). [*Exact title from frontmatter*](source_url).`
Hyperlink ONLY the italicized title; `et al.` after ~6 authors; `&` before the last.
Use the raw file's `source_url:` as the link if present, else keep the existing URL.

### 2. Redundant arXiv text after the hyperlinked title
Many citations append `arXiv:2607.28210.` (or `(arXiv:xxxx)` / `. arXiv preprint
arXiv:xxxx.` / `arXiv:xxxx [cs.CY; cs.AI]`) AFTER the `](url)`. The URL already
identifies arXiv, so strip it but KEEP any real venue that follows (e.g.
"Accepted at CSCW 2026", "EDM 2026", journal/book titles).

Strips (order matters, re-run to convergence):
- `\.\s*arXiv:\d{4}\.\d{4,5}\s*\.?\s*$`  (trailing)
- `\s*\(?arXiv:\d{4}\.\d{4,5}\)?`         (parenthetical, mid-line)
- `\.\s*arXiv preprint arXiv:\d{4}\.\d{4,5}\.?\s*`
- `\.\s*arXiv:\d{4}\.\d{4,5}\s*\[[^\]]*\]\s*`  (with category brackets)
- then clean double periods `\.{2,}` → `.` and `\s{2,}` → space, ensure one trailing period.

**PITFALL — do NOT over-strip or you damage the citation:** a broad first pass removed
`[arXiv:ID](url)` link-labels and left broken `Title.(https…)` with a stray period and
a dead link. Always re-audit after a sweep for: `\.\s*\(https` / `\w\.\(https`
(missing space+broken link), `\.\.` (double period), `[,;]\s*\.`. Fix by rebuilding the
line as `[Title](url).` with the correct author prefix. Prefer small, precise regexes
over one sweeping replace, and re-audit immediately after.

### 3. Duplicate tags
`tags: [a, b, c, b]` — dedupe preserving order. Simple set-dedup in Python.

### 4. Missing Citation section entirely
Some articles have no `## Citation`. Add APA citation using the authors from the raw
byline (e.g. `Marquez-Carpintero, L., Lopez-Sellers, A., & Cazorla, M. (2025).`).

### 5. "arXiv mentioned near the top" (header region)
The specific problem the maintainer flagged was a STANDALONE `**Source:** arXiv:2607.28210
(physics.ed-ph, July 2026)` line inside the opening blockquote. That is wrong — remove
it. **Do NOT** touch the conventional `**Authors:** … — arXiv preprint (2026)` venue
descriptor used by most arXiv articles, which is the established, accepted format.
Detect the standalone pattern with: a line starting exactly `**Source:**` AND containing
`arXiv`.

## General rules
- **Bump `updated:`** to a full quoted ISO timestamp on every article you edit so the
  sidebar "Recently Added/Updated" refreshes (e.g. `"2026-08-28T00:00:00-04:00"`).
- **Only touch the Citation section, the `tags:` line, and `updated:`** — leave the
  body, top blockquote, and Connected sections alone.
- **Never fabricate authors/titles/URLs** — always pull them from the raw source file.
- **Parallelize:** 32 mangled citations fixed cleanly by 4 `delegate_task` subagents
  (8 each) with a precise prompt + `output_schema`; they each self-verified. Delegate
  when the batch is large and mechanical.
- After the sweep, re-run the full audit to confirm 0 remaining issues, then
  `npm run build`, verify `dist/`, commit, push, and confirm the Deploy workflow.
