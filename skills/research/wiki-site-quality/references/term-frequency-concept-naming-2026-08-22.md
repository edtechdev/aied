# Term-frequency corpus analysis to decide concept naming & page-creation (2026-08-22)

## When to use

The maintainer asks "which term is more common in the wiki" to decide (a) whether a concept
page is warranted, or (b) what to name/canonicalize a concept that has several overlapping
labels (e.g. desirable difficulties vs. cognitive friction vs. productive friction vs.
cognitive offloading).

## Method

Run `grep -ril "<term>"` (file count) AND `grep -rio "<term>" | wc -l` (total occurrences)
over each directory separately — articles/, concepts/, raw/papers/ — because the three have
very different signal value:

```bash
cd <WIKI>
for t in "desirable difficult" "cognitive friction" "productive friction" "productive struggle" "cognitive offloading"; do
  echo "== $t =="
  echo "  articles: $(grep -ril "$t" articles/ | wc -l) files / $(grep -rio "$t" articles/ | wc -l) hits"
  echo "  concepts: $(grep -ril "$t" concepts/ | wc -l) files"
  echo "  raw:      $(grep -ril "$t" raw/papers/ | wc -l) files"
done
```

Use the case-insensitive `-i` flag so capitalized sentence-openings are counted too.

## Interpreting the numbers (key insight)

- **raw/papers/** counts what the *scholarly literature itself* calls the thing. This is the
  strongest signal for the **canonical/label** choice: it reflects authors' own terminology.
  E.g. "desirable difficulties" (Bjork's term) appeared in 18 raw papers even though it was
  rare in the wiki's own synthesized prose.
- **articles/ + concepts/** counts what the *wiki's own writing* calls it day-to-day. This
  signals the **operative/synonym** terms readers encounter. E.g. "productive struggle"
  (31 article hits) and especially "cognitive offloading" (59 files) dominated the wiki's
  synthesized text even when the source literature used "desirable difficulties."
- When the scholarly term differs from the wiki's common prose, keep the scholarly term as
  the page slug (it's authoritative) but list the prose synonyms in the lead and in the
  scanner/alias tables so both resolve.

## Page-creation decision

A term qualifies for its own concept page when it appears in **>= 3 articles** (maintainer's
threshold), even if it only currently appears inline inside other concept pages. Confirm by
counting `grep -rli` across articles/ AND check no existing concept page already covers it
(`ls concepts/ | grep`). Report the file-count, the top articles, and which existing concept
pages already discuss it inline before recommending create-vs-leave-unlinked.

## Real examples from this session

- "prior knowledge" → 19 articles, covered inline in 7 concept pages → created
  `concepts/prior-knowledge.md`.
- "network analysis" family → ENA in 24 articles, TNA/SNA in 1 each → created umbrella
  `concepts/network-analysis.md` (ENA/TNA/SNA variants, distinct from the data-structure
  `knowledge-graph`).
- desirable-difficulties vs cognitive friction vs productive friction vs cognitive offloading:
  article counts 4/4/4/59 → kept `desirable-difficulties` as the authoritative slug (matches
  the scholarly term in 18 raw papers) but registered the synonyms so all resolve.
