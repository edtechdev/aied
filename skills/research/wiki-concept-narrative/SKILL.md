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

## The distinguishing test (maintainer-flagged 2026-09-23)

Revise a concept page **only** where an article makes a contribution that is BOTH significant and **distinguishing**: it must change what the page says, or add an insight the page does not already carry, and a reader must be able to tell it apart from the bullets already there. An article that provides another example of a finding the page states, a second instrument measuring a construct the page already discusses, or a replication of an existing claim does NOT qualify, however solid the study is. Skip it, record why, and insert nothing: revising a page for every article that touches it is the failure mode this test exists to prevent.

Check prior coverage before writing, not after. Grep the page's current text for the claim's operative terms (for a fading-scaffold point, `fade`/`fading`; for a literacy-scale point, `scale`/`instrument`) and read what is already there. Two of forty insertions in one batch failed this test on review: a fading-monitoring point on a page that already carried fading seven times, and a scale caveat on a page already discussing scale limits. A batch child will insert for every listed article unless the brief states the bar AND an expected skip rate.

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

The wiki skills (`research-wiki`, `wiki-inline-links`, `wiki-faq-pages`, `wiki-article-quality`, and the rest of `research/wiki-*`) are **user-owned / protected** — they cannot be patched by a curator-managed agent. This skill exists to carry the maintainer's narrative-integration rule that belongs alongside them. Recommend `hermes curator adopt <name>` if the user wants these rules merged into the protected skills.

## Support files
- (none yet)

## Pitfalls

- **A citation wrapped in parentheses can never be the subject of a sentence (2026-09-21).** A delegated brief that shows the inline form as `([[slug|label]])` reliably comes back with sentences built that way, e.g. "...mapped more broadly. ([[slug|a 2026 review of teacher AI literacy instruments]]) appraised 33 instruments..." That is a fragment with no subject, and it repeats across every page of the batch. Reserve the parenthetical form for appositives mid-sentence ("A cross-level study of AI education ([[slug|46 teachers, 2,832 students]]) found..."). When the source is the sentence's subject, link the subject itself and keep the label inside the link: `[[slug|A 2026 review of teacher AI literacy instruments]] appraised 33 instruments...`. Audit leftovers with a regex matching a parenthetical wikilink immediately followed by a reporting verb (`synthesized|developed|appraised|found|had|built|validated|examined|tested|analyzed|surveyed|reported|showed`); a mid-sentence appositive is a false positive, so read each hit's context before editing.
- **The same insertion can leave a link to the page's own slug.** Grep each edited page for `[[<its own slug>` (with `|` or `]]`) and strip the brackets rather than deleting the phrase: a self-link renders as a link back to the page the reader is already on.
- **Label the study, not the instrument, when the label is the subject.** "Thianwan and Srikoon's 2025 AI Literacy Self-Assessment Questionnaire built a 15-item measure" is wrong (an instrument did not build itself); the same sentence with the label "Thianwan and Srikoon's 2025 validation study of an AI literacy self-assessment questionnaire" is right.
