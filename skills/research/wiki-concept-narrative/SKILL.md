---
name: wiki-concept-narrative
description: "Weave new article findings into AI-ed concept narratives."
category: research
---

# Wiki Concept-Narrative Integration

Use when working in the AI-in-education research wiki (`<WIKI>`) and a new article is ingested, enriched, or its findings touch one or more existing concept pages. This is the maintainer's **standing rule** (2026-08-25), separate from and in ADDITION to back-linking.

## The rule (verbatim)

> "Remember when you add a new article, check if it's findings significantly contribute to one or more concepts. If so, integrate it's contribution to the narrative of the concept page. Recheck if that needs to be done for any articles added today."
>
> "Update the skills and cron job to include this step of updating concept narratives when an article makes a significant contribution to the concept."

## What to do

0. **Run the significance screen BEFORE writing anything (2026-09-15).** For each candidate (article, concept) pair, answer the delete test first: if the inserted sentences were deleted, would the page lose something it does not already have? Only pairs that pass get an edit. Do not enrich broadly and audit afterwards: a post-hoc audit costs roughly the same token and review budget again, and every insertion that survives un-reviewed stays on the site. Read the article's findings and the target section's existing coverage before proposing any sentence. A screen over ~6 candidate pages takes minutes; auditing ~35 already-edited pages took 10 reviewers. **Leaving a page untouched is a valid, expected outcome.**

1. **Identify the article's target concepts** from its `## Connected Concepts` list and its narrative body (which concepts does it actually speak to / extend?).
2. **For each target concept, check whether the article's findings are already woven into the concept page's NARRATIVE** — not just present as a Connected Articles/back-link entry. Grep the concept page body (frontmatter through `## Connected Concepts`) for the article's slug or title.
3. **If the findings are NOT in the narrative**, add them: a sentence or two synthesizing the finding into the concept's existing story — usually as a new themed bullet or an extension of an existing paragraph (e.g. a "Key research themes" bullet, or a new paragraph under the relevant subsection). Integrate the *contribution* (what the finding adds to the concept), not just a mention.
4. **Bump the concept's `updated:` timestamp** to a full ISO `-04:00` value in the same edit (concept-page edits that leave `updated:` stale hide the page from "Recently Updated" / RSS).
5. **Re-run the check for ALL articles added that day**, not just the most recent one. The user explicitly wants the whole day's batch rechecked (articles ingested earlier the same day may have been back-linked but never narrative-integrated).
6. **Run the HARD GATE** on every touched page before build: `inline_link_scan.py <WIKI> <slugs> --apply` and `check_list_formatting.py <WIKI> <slugs>` (verify concept slugs exist first), then `generate-llms-files.py`, `npm run build`, commit+push, and verify deploy with `gh run list` + curl HTTP 200.

## Pitfalls

- **Back-linking ≠ narrative integration.** A reciprocal Connected Articles entry (or the article's own Connected Concepts list) does NOT satisfy this rule. The finding must appear in the concept's prose.
- **Never enrich a page just to show progress.** A batch that edits every candidate page has almost certainly padded. When 35 pages enriched by one automated batch were audited (2026-09-15), 17 of 56 insertions were marginal and 13 of those were list-entry-only: the article had been added to Connected Articles with none of its findings conveyed in prose. Say explicitly in subagent prompts that zero edits on a page is an acceptable result.
- **When auditing or pruning insertions, target only the new text.** Diff lines contain whole rewritten lines, so a verdict of "remove this line" can delete pre-existing prose and wikilinks. Verify every removal string against the pre-edit revision (`git show <pre-edit-commit>:<path>`) and cut the minimal new span. In the 2026-09-15 audit, 4 of 19 removal strings were over-broad and would have stripped pre-existing content, including a page's synthesis blockquote and two Connected-Articles-adjacent bullets.
- **Don't create new concept pages as a side effect of integration.** If a concept doesn't exist, link to the closest existing concept rather than creating one unrequested. If the user explicitly asks whether a concept page is warranted (e.g. early-childhood/elementary AI education), assess the article cluster and confirm with the user before creating (a cluster of ~7 primary articles justifies a new page; a sub-theory of an existing concept usually does not).
- **Achievement-goal / goal-setting theory** is a sub-theory of motivation — keep it folded into the `motivation` / `student-engagement` / `learning-theories` narratives unless a dedicated page becomes warranted by volume.

## Relationship to other wiki skills

The wiki skills (`research-wiki`, `wiki-inline-links`, `wiki-faq-pages`, `wiki-article-quality`, and the rest of `research/wiki-*`) are **user-owned / protected** — they cannot be patched by a curator-managed agent. This skill exists to carry the maintainer's narrative-integration rule that belongs alongside them. Recommend `agent curator adopt <name>` if the user wants these rules merged into the protected skills.

## Support files
- (none yet)
