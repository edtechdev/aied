---
name: discipline-evidence-audit
description: "Use when judging a discipline's coverage or page split."
category: research
---

# Auditing a discipline's evidence

Use when the user asks why a discipline is missing from a concept page, whether a cluster page should
split, or whether "there is nothing on X" is true. The corpus is an AI-in-education wiki organized by
discipline, so these questions arrive constantly and the wrong answer is expensive: it either deletes a
real literature from the map or creates a page that restates what a cluster page already says.

Complements `source-duplicate-triage` and `paper-batch-ingestion` (ingest mechanics) and
`corpus-claim-verification` (general coverage claims). This skill is the discipline-specific scan.

## The scan

Do not answer from the concept page itself. A clustering page summarises what its author read; the
evidence may be filed under a different discipline and never reach it.

```python
pat = re.compile(r'(sociology|psychology)\s+(students?|courses?|majors?|instructors?|'
                 r'curricul\w*|classroom\w*|education|undergraduates?|programs?|teaching|'
                 r'department\w*)', re.I)
```

Run it over `content/en/articles/*.md`, print the hit count plus a snippet of each page's synthesis
blockquote, then classify:

- **Anchoring**: the study's sample, setting or intervention is that discipline ("504 sociology
  students", "a semester-long R course for psychology undergraduates").
- **Passing**: the field appears in a citation, a framework list, or an author affiliation
  (`Crompton & Burke, 2023`). Not evidence.
- **Lens**: the discipline supplies theory rather than setting (`cognitive psychology` used to explain
  load). Belongs on the theory page, not the discipline page.

A bare word count is not a substitute: hundreds of pages mention "psychology" and most of it is the
adjective "psychological".

## The facet blind spot

The `discipline:` enum in `src/content.config.ts` has no value for psychology or social science, so a
study of psychology students is filed under whatever it actually studies — `writing education`,
`learning sciences`, `assessment`. Never answer a discipline-coverage question by filtering the
`discipline:` facet, and never conclude a discipline is absent because its facade has no value.

## Course-level versus sampled

This is the split that decides the page, and it is not a volume count.

- **Course-level**: the study examines the course, curriculum, assessment or training pathway
  (assessment redesign in a psychology unit; an AI tutor inside a psychology statistics course;
  trainee attitudes toward a clinical tool).
- **Sampled**: the discipline supplies the participant pool for a generic question (continued use,
  feedback literacy, cheating perception). Real evidence, but it argues nothing about teaching the
  discipline.

The bar is the precedent page, not a number. A discipline earns a standalone page when course-level
work exceeds what the cluster page can carry while still making its cluster argument; the cluster page
then keeps a short summary plus a wikilink (hub-plus-deep-dive is the house pattern), and the sampling
studies stay where they argue something.

Worked outcome: psychology had about a dozen studies, six of them course-level, while its cluster page
argued sociology — page created. Sociology had five (three surveys, two course cases) — stayed in the
cluster page.

## Executing the split

1. Registry item under the right sidebar group (`concepts.registry.yaml` → `sections/groups/items`),
   plus a `title` and `aliases` entry.
2. `python3 tooling/scripts/gen-concept-artifacts.py`, then `check_concepts.py` for consistency.
3. Point the cluster page and the disciplines router at it in prose; a new page reachable only from the
   sidebar is half-wired.
4. Bump `updated` on every page whose narrative changed, including the router — the bump gate reads the
   narrative diff, not the link list.

## Pitfalls

- **Absence claims age fast.** "Sociology has nothing" was true of the page and false of the corpus.
  Re-run the scan before repeating an absence claim, and when you were wrong, say which claim was wrong
  and what the scan showed.
- **Do not name a discipline in a scope sentence you never return to.** If the page defines the cluster
  to include psychology and sociology, the body owes each a paragraph or an explicit "thin, and here is
  what exists"; otherwise a reader files it as an omission.
- **A bold lead-in is its own sentence to the prose gate.** `**Psychology: sampled more often than
  studied.**` followed by a sentence saying the same thing reports as a 100% duplicate
  (`check-concept-prose.py`). Make the lead-in a label, not a claim.
- **Author the new page's facets from the enums, not from vocabulary.** A discipline page often has no
  honest `discipline:` value; omit the field rather than inventing one. `simulation` is a technology
  concept, `self-efficacy` a foundations concept, and `clinical educators` is not in the audience enum.
- **Adding the page makes its slug a screen candidate** for every article that now names it; record
  those decisions in `concept-screen.yaml` or the screen gate fails on the next batch.
