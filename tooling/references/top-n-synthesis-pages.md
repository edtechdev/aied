# Top-N synthesis pages from a whole corpus

Use when a page is a ranked list ("the top 10 findings", "the top 10 studies", "the ten
most consequential results") and the user asks for it rebuilt, re-scoped or expanded.

## Decide what the list is a list OF

A **findings** page argues decisions. A **studies** page presents evidence. They are
different documents and the user will name which one they want.

For a studies page, each entry hangs on exactly one paper:

1. a bold, claim-led heading that names the study and year ("Plain chatbot access cut exam
   scores by 17% (Bastani et al., 2025)");
2. what the study did: design, sample, setting, comparison;
3. the numbers, taken from the article page and checked against its `## Citation`;
4. what changes for the audience that entry touches.

Renaming the headings of a findings page and keeping its paragraphs produces neither shape,
and the user can see it in the first two entries.

## Select from the whole corpus, never the ingest window

`git log --since` is the newsletter habit and it misses every anchor study older than the
window. The corpus already records its own judgment: pages link to the articles whose claims
they keep repeating.

```bash
python3 scripts/rank-articles-by-indegree.py --content content/en --top 40
python3 scripts/rank-articles-by-indegree.py --content content/en --min-confidence high --top 25
```

The ranking is a filter, not the answer. Read the synthesis and key findings of each
candidate before choosing, and prefer a randomized or national-panel design over a survey of
intentions when two studies make the same point.

## What earns a slot

- A result that contradicts a belief the reader holds, or that reprices a purchase or policy
  decision. Confirmatory restatements belong inside another entry as a sentence.
- Evidence that touches a decision at least one named audience actually makes: instructors,
  faculty developers, software developers, administrators, researchers.
- A number the reader can act on (a percentage, a sample, a threshold), grounded in the
  source page and its Citation, never re-derived from memory.

## Composition

- Keep the ranked order meaningful and say what orders it (classroom decisions first, systems
  and measurement later).
- Set every audience in `audience:` from the schema enum; a page written for five audiences
  with one `audience:` value is a metadata defect.
- Vary how each entry turns to practice. Ten closers with the same bold label ("Teaching
  implication:") read as a template.
- Close with what the evidence cannot support: where the studies were run, how long they
  follow students, which entries are preprints or working papers, and whether null results are
  rare in the literature. A stack of strong claims with no such block reads as advocacy.
- If the title promises a count, enumerate exactly that many items. No gate counts them.

## Ship

Preview first. Build, serve the page on the local preview host, send the URL, and stop. A
preview link is not approval to commit, and never approval to push; wait for an explicit
instruction for that specific commit.
