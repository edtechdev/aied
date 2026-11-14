# Duplicate article pages: detection, survivor choice, retarget

The repo rule is one summary page per source. Detection fails more often than resolution does,
so this note is ordered by where the time goes.

## Detection

Three signals, strongest first:

1. **The same `sources:` path** in both frontmatters — an unambiguous duplicate.
2. **An identical normalized `title:` with the same authors and year**, even when `sources:`
   differ. Two ingests of the same paper archive it twice (`raw/papers/<arxiv-id>.md` beside
   `raw/papers/<author-year-slug>.md`), so the shared-raw-source test reads false while the pages
   describe the same work. Normalize case and punctuation before comparing.
3. **The same DOI or `source_url`** in the citation block.

Before choosing, count inbound links for both slugs:
`grep -rl <slug> content --include=*.md | wc -l`. Locale copies inflate the count by ~30 per citing
concept, which is exactly the work the choice determines.

## Choosing the survivor

Weight the signals in this order, because later steps cost more than earlier ones:

1. inbound links (repointing is the expensive part);
2. a `sources:` entry pointing at a raw file that exists (the loser's archive can then go too);
3. body length and practitioner usefulness;
4. concept weaves already citing it.

When the signals disagree — the short page is the more-linked one — follow links first and carry
the richer page's content over before deleting it.

## If the loser adds nothing

A short re-ingest of a paper the corpus already covers in depth has no unique content. Skip the
merge: delete the page and retarget, do not manufacture paragraphs to justify the file.

## Retarget

- Replace the slug in every citing file under `content/*/concepts/` and `content/*/articles/`.
  Each locale keeps its own copy of a concept page, so one citation becomes thirty edits.
- Bump `updated` on every file touched and report **both** counts (files edited, references
  rewritten). A sweep reporting 3 files against 38 references stopped early, and the untouched
  locales keep linking a 404.
- Exclude `raw/`, `drafts/` and `dist/`: the paper's own text names the old slug and must keep
  doing so, and drafts are staging.
- Dedupe any file that now cites the survivor twice, and re-scan the survivor for self-links.

## Close-out

- Delete the loser's `raw/papers/` copy only when the survivor points at its own raw file.
- Remove the loser's block from the machine-local `concept-screen.yaml`; the gate counts articles,
  so a stale block keeps a dead slug alive and can be inherited by a later page reusing the slug.
- Regenerate the llms dumps, build, and verify live: the deleted route must 404, the survivor 200,
  and the citing concept page must link the survivor (grep the rendered HTML for both slugs and
  expect a positive count for one and zero for the other).
