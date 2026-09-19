# Brief: add the practice and limitations sections to article pages

Handed to a worker for each batch of article pages. `<WIKI>` stands for the knowledge base root, which is the
directory this file lives in (three levels up from `tooling/prompts/`). Paths in the batch list files are
already absolute, so the only substitution is `<WIKI>`.

## Your assignment

Read the batch list file you were given. Each line names one page, the section(s) it needs, and the path of that
paper's saved full text. Every path was verified to exist when the list was written. If a listed page does not
exist, report it and skip it rather than substituting another page.

## Before you write

Check whether the page already carries an OLDER heading covering the same ground: `## Implications`,
`## Implications for AI in Education`, `## Implications for practice`, `## Limits`,
`## Limits and Open Questions`. If it does, MERGE that section's substance into the canonical section and
delete the legacy heading. Do not add a second section that repeats it, and do not drop anything substantive.

## What to add

1. `## What this means for practice` — 3-5 bullets, each an imperative action an educator could take, derived
   from a finding in that paper. Lead the first bullet with a bold audience label, normally `**Instructors.**`.
   Add further labels (`**Faculty developers.**`, `**Administrators.**`, `**Researchers.**`, `**Designers.**`)
   only where the paper supports a genuinely distinct implication for that audience, and match the labels to the
   page's `audience:` frontmatter. No hedging; one or two sentences per bullet.
2. `## Limitations` — 2-4 bullets, each tied to a CONCRETE fact about this study: sample size and recruitment,
   single site or single course, self-report measures, a very short intervention, no control group, benchmark
   contamination, author-stated threats to validity, the measurement itself. A bullet with no number and no
   specific fact is a defect. If the paper gives no basis, omit the section and say why. For a conceptual or
   position paper, describe what its design can and cannot support rather than inventing sample statistics.

## Placement (mandatory)

`... last body section ...` then `## What this means for practice` then `## Limitations` then
`## Connected Concepts` then `## Connected Articles` then `## Citation`. If the page already has
`## Limitations`, insert practice immediately before it. If it already has practice, add only `## Limitations`,
immediately after it. Each canonical heading must appear exactly once.

## How to work

- Full text may run 50k-250k characters, and some files are named by arXiv id rather than by slug. Do not read
  it whole: use grep or python to locate the method, results, discussion and any stated-limitations passages,
  then read only those regions.
- Every number you write must appear in that full text. Never invent or approximate a figure. A source may
  print a decimal without a leading zero (`.97` for 0.97).
- Read each page first, and do not restate its body content in the new bullets.
- Change nothing else: no rewriting existing prose, no touching frontmatter, the Connected lists or the
  citation. Do not touch `index.md`, `journal.md` or `log.md`, and no other page.
- US English: behavior, modeling, judgment, organization, analyze; gray not grey; modeled not modelled.
- Inline `[[wikilinks]]` in the new bullets only to slugs that exist — check with `os.path.exists` under
  `<WIKI>/concepts/`, `<WIKI>/articles/` or `<WIKI>/faqs/`.
- Do not run the site build or any gate script.
- Some saved full texts are very long (100,000+ characters). Do not read a whole file: search it for the
  method, results, discussion and limitations passages with `grep -n` or a Python regex, then read those
  ranges. Reading a large source end to end is what makes a batch run past its time limit.
- Write nothing outside the article pages you were assigned. Do not create, edit or delete files in the
  queue directory, do not rewrite your assignment list, and do not leave helper scripts behind.

## Report

Per page, tersely: slug, section(s) added or merged, bullet count, and anything you judged too substantive to
drop. Name any blocker instead of working around it.

## Turn economy

Reads and greps here return in well under a second; the time limit is spent on model turns, which can run to minutes. Batch aggressively: read every assigned page in one turn, read or search the sources you need in the next, write all the edits in the turn after that. Do not re-read anything you have already read.

## Write as you go

One worker used 42 turns exploring: checking audience facets, testing whether wikilink slugs exist, reading source
regions across seven pages, and drafting every page in its head. When the limit arrived it had written nothing.

Draft and patch one page, then move to the next. A page on disk with four grounded bullets beats seven pages planned
in detail. Two shortcuts that remove most of the exploration:

- The audience labels you need are in the page's own `audience:` frontmatter. Read it; do not survey other pages to
  infer the convention.
- Link only concepts you have already seen in the page's existing Connected Concepts or body text. You then never
  need a separate turn to test whether a slug resolves.
