---
name: wiki-batch-primary-weaves
description: "Use when a source batch needs primary concept weaves."
category: research
---

# Primary concept weaves after a batch

Use when several sources are ingested together, especially when the batch also creates a new cross-cutting concept page. The article pages are not finished until each article is screened against its own primary concept pages, not only against the page created in the same batch.

## Procedure

1. **Finish the article pages and any new page first.** A batch can legitimately create one new umbrella page, but that page is a synthesis, not a substitute for the existing process, theory, discipline and domain pages.
2. **Run an article-first pass.** For each new article, name its primary concept page(s) from its findings and facets, independent of any page created in the batch. Typical homes are a process page (`intelligent-tutoring`), a theory page (`distributed-cognition`), a discipline page (`nursing-education`, `legal-education`, `business-education`, `medical-education`), or a domain page (`social-emotional-learning`). One to three pages per article is the normal range; more is usually annotation.
3. **Apply the significance test before weaving.** The finding must change what the primary page says: a new mechanism, a quantified gap the page only asserts, a counterexample, or a different axis. A page that would only gain another example, a corroborating citation, or a name does not qualify. Record `no_change` with page-specific grep evidence rather than inventing a contribution.
4. **Weave the contribution, not the citation.** Add one or two sentences in the section where the claim belongs, link the article inline, and add the `## Connected Articles` entry only when the narrative carries it. Bump the concept page's `updated:`.
5. **Record every integrated page, not just the new one.** In `concept-screen.yaml`, `integrated` must list every page whose prose changed, and each needs `<concept> ("<term>" N): was missing <gap>`. A screen that lists only the batch's new page while the article's primary page is untouched will pass the presence check and fail the user's actual question.
6. **Verify the screen record against the article set.** `check-concept-screen.py --changed` derives slugs from changed article files; after the articles are committed it can report no pages even though the screen record changed. Run `check-concept-screen.py <slug> ...` with the batch slugs explicitly, then the scoped gates, `astro check`, and the real concept/article routes.

## Pitfalls

- **The new page becomes a gravity well.** Once a cross-cutting page exists, it is tempting to route every article through it. That is padding in reverse: the new page may cite a study as context while the study's primary contribution belongs on a discipline or process page. Check the article's own findings before recording `no_change` elsewhere.
- **A context mention is not an integration.** Being named in the new page's background section does not mean the article's finding is on its primary page. The prose, not the existence of a link, is the evidence.
- **Do not over-correct in the other direction.** Every article does not belong on every adjacent page. Use the significance test and accept empty `integrated` lists for articles that genuinely add nothing.
- **`no_change` reasons need page evidence.** For a declared discipline or level page, write `slug ('keyword' N)` from that page; a dismissal without a count is a claim nobody checked.
- **Do not fix a duplicate by rewording the same point.** `check-concept-prose.py` compares added prose to the page; if a new misconception bullet repeats the introduction, remove the redundant bullet rather than cycling synonyms.
