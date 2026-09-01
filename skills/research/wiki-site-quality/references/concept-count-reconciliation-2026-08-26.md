# Reconciling concept counts: sidebar vs canonical index vs actual files (2026-08-26)

## The three registries drift independently

Concepts live in THREE places that silently fall out of sync, and a user may ask "does the
left sidebar match the actual number of Concepts on the site?" — **verify with code, never
assume, and never count by hand.**

1. `concepts/*.md` — the actual concept pages (ground truth).
2. `src/data/conceptIndex.ts` — the **left sidebar**. Its `items` arrays group slugs by
   section (e.g. "Learning theories and processes", "Institutions and systems").
3. `tooling/concept-index.md` — the canonical/alias reference, with a `## Canonical concepts`
   list and a **separate `## Merged / absorbed` section** for redirects.

## Real incident (2026-08-26)

A concept page existed and was indexed but had been **forgotten from the sidebar**
(`conceptIndex.ts`), so the sidebar under-counted (171) vs the actual 172 concept pages.
Separately, `tooling/concept-index.md` was missing 3 real concepts, listed 2 redirects as if
they were pages, and its "Total concepts" header was stale (156 vs true 172).

## Verification recipe (run in code, not by eye)

```python
import os, re
# 1. actual files (ground truth)
actual = set(f[:-3] for f in os.listdir("concepts/") if f.endswith(".md"))
# 2. sidebar slugs — grep all single-quoted slug tokens from conceptIndex.ts
ts = open("src/data/conceptIndex.ts").read()
index_slugs = set(re.findall(r"'([a-z0-9-]+)'", ts))
# 3. canonical entries in concept-index.md — ISOLATE the ## Canonical concepts section
#    so the ## Merged / absorbed redirects are NOT counted as concepts.
body = open("tooling/concept-index.md").read()
body = body.split("## Canonical concepts", 1)[1].split("## Merged", 1)[0]
canonical = set(re.findall(r'^\- \*\*`([a-z0-9-]+)`\*\*', body, re.M))
```

Then assert **all three are equal**: `actual == index_slugs == canonical`.
Report the diff as `on disk NOT in sidebar` and `sidebar slugs with no file`; fix until both
are empty.

## Key points

- **The sidebar (`conceptIndex.ts`) is the authoritative answer** to "how many concepts does
  the site show." The `.ts` sidebar and the `.md` canonical index are SEPARATE registries and
  must each be reconciled independently — fixing one does not fix the other.
- **The `## Merged / absorbed` section is NOT a count of concepts.** Those slugs (e.g. `mooc`,
  `blended-learning`) are redirects into `online-teaching-and-learning`, confirmed via
  `src/data/conceptRedirects.ts`. Exclude them from the total AND from the canonical list.
- **Never carry a header count forward.** "Total concepts:" in concept-index.md and
  index.md's "Total pages:" (which = articles + concepts + FAQs) both drift; recompute from
  the actual file tree, not from the prior header value.
- **On ANY add / remove / rename**, update ALL THREE places (page file + sidebar + canonical
  .md + redirects where applicable), not just the page file — this is the root cause of the drift.

## Fix for an out-of-sync canonical .md

When adding a concept to `tooling/concept-index.md`, insert the `- **`slug`** — Title` line in
the alphabetical spot in the `## Canonical concepts` section, and set the `**Total concepts:**`
header to the true count computed from `concepts/*.md`. Leave the `## Merged / absorbed`
redirects untouched (they are intentionally not counted).
