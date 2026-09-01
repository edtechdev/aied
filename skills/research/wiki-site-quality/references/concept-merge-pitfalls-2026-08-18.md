# Concept Merge — 2026-08-18 Session Pitfalls

Two merges validated this day (`engagement-metrics` → `student-engagement`,
`programming-education` → `cs-education`). Both follow `references/concept-merge-workflow.md`.
The following are the non-obvious traps that bit or nearly bit during the second merge.

## 1. Article-slug substring trap (DO NOT rewrite these)

When the absorbed slug is a substring of an ARTICLE's slug, that file is a distinct article,
NOT a link to the concept — it must NOT be rewritten (neither its filename nor its
`sources:` / `tags:` / body beyond its own `[[...]]` wikilinks).

Example with `programming-education` → `cs-education` — these are all separate papers:
- `trio-ethnography-llm-programming-education`
- `jost-llm-programming-education-learning-outcomes`
- `chatgpt-programming-education-text-mining`
- `pattern-kc-programming-recommendation` (contains "programming" not "programming-education",
  but same class of false-positive)

**Rule**: the rewrite script must match ONLY the wikilink pattern
`re.compile(r"\[\[<absorbed>(?:\|([^\]]+))?\]\]")` → `[[<canonical>|label]]` or `[[<canonical>]]`.
Do NOT do a bare string replace of the slug across files, and do NOT touch slugs/filenames.
After the script, `grep -rn "[[<absorbed>" articles concepts` should be 0, but
`grep -rn "<absorbed>" articles` will legitimately still hit article-slug names + preserved
tags — distinguish these from wikilinks.

## 2. Concurrent-cron count drift (recompute from filesystem)

`index.md` **Total pages** / `journal.md` **Total entries** are the ACTUAL file counts, not
"previous header − 1". A cron ingest can add articles while you work.

Observed 2026-08-18: the header said **849**; the merge deleted one concept, but recounting
`ls articles/*.md | wc -l` + `ls concepts/*.md | wc -l` gave **848** because the cron had
added +2 articles since the 849 header was written. If you just decrement (849→848) you'd be
wrong for the wrong reason and likely off by the cron delta.

**Rule**: ALWAYS recompute both totals from `os.listdir`/`ls | wc -l` after the merge, and set
the header to the actual count. Bump `**Last updated:**` to today.

## 3. Schema JSON-LD can be pre-stale

`public/schema/concepts.json` + `corpus.json` may already contain stale `DefinedTerm` nodes
from an EARLIER merge that skipped them (e.g. `over-reliance`/`gamification` still present
after the 2026-08-17 merge). Only remove the in-scope absorbed node unless asked to clean the
rest. Also: if the absorbed concept was created AFTER the schema was last generated, there may
be NO node to remove at all — check with a Python scan before assuming one exists.
