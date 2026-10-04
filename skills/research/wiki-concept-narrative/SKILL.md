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

**Accumulation is the exception to the skip rule (maintainer rule 2026-10-02).** A second study on a claim the page already carries is not automatically a skip. When two or more articles make the same point, cite them **together in one place** rather than restating the claim, and judge whether the accumulation strengthens the case: independent studies in different task types, populations or years make a finding stronger than one, and the page should read that way. What still does not qualify is a citation that changes nothing in its sentence — a bare duplicate reference added to pad a page.

**A `no_change` dismissal is a claim of prior coverage and must carry its evidence.** For every candidate you dismiss, actually grep THAT page for the finding's own subject matter and record what the search returned (`grep 'productive friction' in desirable-difficulties -> 21 hits`). A dismissal you cannot back with a matching line is not valid: either integrate, or write that you did not verify it. Never reason about claim classes in the abstract — asserting "that page already carries this" when the page never mentions the topic is the failure this guards against, and it produced a batch on 2026-10-02 whose nine articles were dismissed against discipline pages that carried none of their subject matter (0 hits for Bengali/low-resource on `physics-education`, 0 for SQL and no adoption content at all on `cs-education`).

**A generic page does not cover a discipline page.** A finding about physics, writing, computing, design or maths teaching belongs on that discipline's page even when its claim class (benchmarks, feedback, detection, adoption) is carried elsewhere. Grep the discipline page for the study's OWN subject matter by name — the object it taught (SQL, ERDs, physics problem sets), the population, the setting — before concluding there is nothing to add.

## What to do

0. **Run the significance screen BEFORE writing anything (2026-09-15).** For each candidate (article, concept) pair, answer the delete test first: if the inserted sentences were deleted, would the page lose something it does not already have? Only pairs that pass get an edit. Do not enrich broadly and audit afterwards: a post-hoc audit costs roughly the same token and review budget again, and every insertion that survives un-reviewed stays on the site. Read the article's findings and the target section's existing coverage before proposing any sentence. A screen over ~6 candidate pages takes minutes; auditing ~35 already-edited pages took 10 reviewers. **Leaving a page untouched is a valid, expected outcome.**

1. **Identify the article's target concepts** from its `## Connected Concepts` list and its narrative body (which concepts does it actually speak to / extend?).
2. **For each target concept, check whether the article's findings are already woven into the concept page's NARRATIVE** — not just present as a Connected Articles/back-link entry. Grep the concept page body (frontmatter through `## Connected Concepts`) for the article's slug or title.
3. **If the findings are NOT in the narrative**, add them: a sentence or two synthesizing the finding into the concept's existing story — usually as a new themed bullet or an extension of an existing paragraph (e.g. a "Key research themes" bullet, or a new paragraph under the relevant subsection). Integrate the *contribution* (what the finding adds to the concept), not just a mention.
4. **Bump the concept's `updated:` timestamp** to a full ISO `-04:00` value in the same edit (concept-page edits that leave `updated:` stale hide the page from "Recently Updated" / RSS).
5. **Re-run the check for ALL articles added that day**, not just the most recent one. The user explicitly wants the whole day's batch rechecked (articles ingested earlier the same day may have been back-linked but never narrative-integrated).
6. **Run the HARD GATE** on every touched page before build: `skills/research/wiki-inline-links/scripts/inline_link_scan.py <WIKI> <slugs>` and `skills/research/wiki-inline-links/scripts/check_list_formatting.py <WIKI> <slugs>` (both live in the wiki-inline-links skill, NOT in `tooling/scripts/`, and both are page-scoped: pass slugs, never `--all`). Note that the inline-link scan only PROPOSES links for text it finds unlinked; its proposals on a page you touched may predate your edit, so apply only what your own insertion warrants, or leave it to the gate suite. Original: `inline_link_scan.py <WIKI> <slugs> --apply` and `check_list_formatting.py <WIKI> <slugs>` (verify concept slugs exist first; do NOT regenerate the llms dumps, they are explicit-request-only), then `npm run build`, commit+push, and verify deploy with `gh run list` + curl HTTP 200.

   **The US-English gate must run on the CONCEPT pages you wove into, not only on the article page.** A weave is new prose on the concept page, and `check-us-english.py <article-page>` never reads it: the miss passes every per-article check and every `--changed` pass whose commit is already in, surfacing only in a full-site run. On 2026-10-04 a weave wrote `judgement` into `teacher-ai-competency.md` and it rode through two commits before gate 11 caught it. Run `python3 tooling/scripts/check-us-english.py <each touched page>` — the article *and* every concept page in the weave — before committing, or run the full-site gate before any push.

   **The Connected-list dash is the weave's own formatting risk.** A weave that adds a `## Connected Articles` entry must prefix it with `- `; a bare `[[slug]] — text` line renders as a paragraph, not a list item, and nothing else on the page reveals it. `check_list_formatting.py` now flags it (added 2026-10-04 after 13 concept pages carried one), so run that gate on the touched pages rather than trusting the entry to look right in markdown.

## Length, flow and audience (maintainer rule 2026-09-30)

A weave is a contribution, not a summary of the article. The maintainer's instruction: "try to
keep the length from getting overly long. Check that the writing flow of the concept page is
clear, too, and not redundant or overly complicated."

- **1–2 sentences. Target ≤ 55 words. Hard maximum 3 sentences / 70 words.** If you need more,
  you are narrating the study rather than its distinguishing point: cut to the finding and what
  it means.
- **Lead with the finding, not the study.** "Generated difficulty labels track surface form
  (ρ = 0.90) but correlate with empirical difficulty at only ρ = 0.06" beats "A study of 378
  items found that…". Name the number only when the number is the point.
- **Match the anchor's local style** — bullet (bold lead-in + period) where the section uses
  bullets, plain paragraph where it uses paragraphs.
- **Flow**: the sentence must read as a continuation of the anchor. Do not restate the anchor's
  claim in different words and do not re-explain the concept; if the page already says it, the
  verdict is **drop**.
- **Audience: instructors and educational developers first**, then educational software
  developers, administrators, and researchers. Write for the practitioner deciding what to do,
  not for a literature review.
- **Never write a derived number.** A sum or difference the source does not state is fabricated
  even when the arithmetic is right: a weave reported "197 declaration requirements" where the
  source gave 117 satisfied and 80 false declarations, and another wrote "d ≤ 0.05" where the
  source reported per-outcome values (0.050, 0.020, 0.015). Report the source's own figures.

`tooling/scripts/check-concept-prose.py --changed` enforces the mechanical half of this: it
fails on an added sentence that repeats one already on the page (≥ 80% shared content words) or
runs past 55 words, and warns when the narrative grows by more than 15%. It judges ADDED lines
only — the corpus contains long sentences written before the rule existed, so a whole-page rule
would fail forever and teach nothing. It is wired into the scoped gate pass.

## Running a batch weave

Backlogs are large (the 2026-09-30 backfill was 1,245 bare pairs across 577 articles), so the
work fans out to subagents. The shape that worked, and the reasons for each part:

1. **Children return JSON verdicts; they never write files.** One child per batch of ~45 pairs,
   each returning `{article, concept, verdict, reason, insert_after, text}`. Nine children editing
   the same concept pages concurrently would collide; a single applier applying verdicts in
   sequence cannot. Put "do NOT edit any file" in the brief and in the task prompt.
2. **The brief carries the bar and an expected skip rate.** State the significance test, the
   delete test, the length limits and the audience. Children will insert for every listed pair
   unless told the expected outcome is often "drop".
3. **Validate the whole batch before applying any of it.** The applier checks that every expected
   pair has exactly one verdict, that no pair was invented, that `insert_after` is verbatim and
   unique, that each weave links its article, and that length limits hold. All-or-nothing, dry
   run first.
4. **Verify the artifacts, not the children's claims.** Their "verified every anchor" summary is
   a self-report. Sweep the returned prose independently for: every wikilink resolving to a real
   page; the author-year label matching the article page's own `## Citation`; every numeric token
   appearing in the article page or its raw source. That sweep is what caught both derived numbers.
5. **Override drops that are wrong.** A drop verdict is only correct when the article is absent
   from the narrative *too*. `process-oriented-assessment` named "Thapa and Lewis" five times in
   prose without ever linking them, so the list entry was legitimate and the fix was to add the
   inline link, not to delete the entry. Check the narrative for the author names before
   honouring a drop.
6. **Screen the whole candidate set, not just the listed pairs.** `check-concept-screen.py`
   requires every concept an article declares (facet fields + inline links) to be recorded as
   `integrated` or `no_change` from `concept_screen.coverage_since` onward. Without this a screen
   answers only for the pairs that were already listed and never asks whether the article
   contributes to the rest — which is how the append-only pattern survived a whole batch.
7. **Scope each wave's verdict files explicitly.** `apply_triage.py` and `verify_weaves.py` take
   `TRIAGE_OUT_FILES` (comma-separated basenames). Globbing the prefix re-reads the *previous*
   wave's verdicts and reports them as pairs that were never expected — a validation failure
   with nothing wrong in the content.
8. **Trim before applying, not after.** `check-concept-prose.py` fails any added sentence over
   55 words, so a wave with over-length drafts cannot pass the gate. Extract them from the
   verdict files, run the trim pass, merge the shortened text back in, then apply.
9. **Re-measure the backlog after every wave.** A wave that was validated but never applied
   looks exactly like a finished one until the count disagrees. The 2026-09-30 backfill sat
   one wave short of done, and the integration check — not the tooling — is what showed it
   (298 pairs still bare, exactly the size of the unapplied wave).

### Tell the children the two rules that keep getting violated

Both defects recurred across waves until they were written into the task prompt:

- **Every woven sentence must contain the inline `[[article-slug|Author (Year)]]` link.** A child
  that gives the attribution as plain prose recreates the bare-listing pattern the weave exists
  to remove, and the applier rejects it.
- **Never insert a blank line between items of an existing numbered list.** A weave that adds a
  numbered design principle to a list must join it to the list. A blank line splits the list,
  and `check_list_formatting.py` catches it after the fact.

### Checker false positives to expect

A verifier that cries wolf on correct content is worse than none, so fix the checker rather than
working around it:

- possessive labels (`Voicu's (2026)` against a citation reading `Voicu, C.-G. (2026)`);
- diacritics (`Nguyễn` vs `Nguyen`, `Habók` vs `Habok`) — fold with `unicodedata` NFKD;
- a repair that only reorders names already present in the citation is legitimate even when the
  raw source has no title page — check the raw source *or* the line being replaced;
- in number-grounding: `F(1,41)` is degrees of freedom, not 141; `678k` matches the source's
  `678,000`; `87.8` matches `0.878`; ordered-list markers and identifiers (`EDULEARN26`,
  `GPT-4o`) are not statistics.

## Pitfalls

- **A tool's declared total is a claim.** `check-concept-integration.py` reported "153 concept
  page(s) carry the article as a bare list entry" when there were 144; it was counting slugs with
  no article page (deleted or renamed) as bare-list defects. The phantom 9 sent a verification
  pass chasing pairs that did not exist. Recompute independently before acting on a count, and
  fix the tool when the count is wrong rather than working around it.
- **Judge a duplicate by position, not by string.** Two identical sentences on different lines
  are the duplicate a redundancy check exists to catch; a `prev == s` guard silently skips
  exactly that case.
- **Back-linking ≠ narrative integration.** A reciprocal Connected Articles entry (or the article's own Connected Concepts list) does NOT satisfy this rule. The finding must appear in the concept's prose.
- **Never enrich a page just to show progress.** A batch that edits every candidate page has almost certainly padded. When 35 pages enriched by one automated batch were audited (2026-09-15), 17 of 56 insertions were marginal and 13 of those were list-entry-only: the article had been added to Connected Articles with none of its findings conveyed in prose. Say explicitly in subagent prompts that zero edits on a page is an acceptable result.
- **When auditing or pruning insertions, target only the new text.** Diff lines contain whole rewritten lines, so a verdict of "remove this line" can delete pre-existing prose and wikilinks. Verify every removal string against the pre-edit revision (`git show <pre-edit-commit>:<path>`) and cut the minimal new span. In the 2026-09-15 audit, 4 of 19 removal strings were over-broad and would have stripped pre-existing content, including a page's synthesis blockquote and two Connected-Articles-adjacent bullets.
- **Don't create new concept pages as a side effect of integration.** If a concept doesn't exist, link to the closest existing concept rather than creating one unrequested. If the user explicitly asks whether a concept page is warranted (e.g. early-childhood/elementary AI education), assess the article cluster and confirm with the user before creating (a cluster of ~7 primary articles justifies a new page; a sub-theory of an existing concept usually does not).
- **Achievement-goal / goal-setting theory** is a sub-theory of motivation — keep it folded into the `motivation` / `student-engagement` / `learning-theories` narratives unless a dedicated page becomes warranted by volume.
- **A green integration gate is not evidence of real integration (2026-10-01).** `check-concept-integration.py` classifies a pair as `integrated` when the concept page's *narrative links the article anywhere*. An orphan bullet appended to the end of an unrelated section satisfies that test while being exactly the "tacked on" defect. Run the integration gate to catch bare listings — do NOT read its OK as a significance or placement verdict. In the 2026-10-01 cron audit, the gate reported 0 listed-only defects while **15 of 16 added claims sat as the last bare line of their section** (against 55% across the previous eight cron runs), 4 were duplicates or marginal and were removed, and 11 needed relocation or a bold lead-in.
- **Test significance against the page's existing classes, not just against the article.** The question is not "is this a real finding?" but "does this page already carry this claim, this mechanism, or this class of evidence — in qualitative form or with stronger designs?" A measured estimate of a class the page documents qualitatively can still be worth adding *if* it quantifies a gap ("the page asserts X; this measures X"); a correlational instance of a class the page already demonstrates causally is not. Four of sixteen additions failed on this test.
- **Test placement after weaving (2026-10-01).** A claim belongs inside the section where the argument it qualifies is actually made — tied to that argument, in that section's local style (bold lead-in where the section uses them). Two hard failure signatures: the sentence is the last bare line of a list whose topic is unrelated, and the sentence sits after a *structural* section (`## Connected Concepts`, `## Connected Articles`, `### Connections to related concepts`) rather than a content one. Check both mechanically: locate each added sentence, print its enclosing heading, and diff that heading against the article's topic.
- **Removing a weave must also remove its Connected Articles entry.** The house rule is that a concept→article link exists only when the findings are woven in, so a removal that leaves the link behind recreates the very defect (a bare listing) being fixed. Pair every removal with the list edit.

## Relationship to other wiki skills

The wiki skills (`research-wiki`, `wiki-inline-links`, `wiki-faq-pages`, `wiki-article-quality`, and the rest of `research/wiki-*`) are **user-owned / protected** — they cannot be patched by a curator-managed agent. This skill exists to carry the maintainer's narrative-integration rule that belongs alongside them. Recommend `hermes curator adopt <name>` if the user wants these rules merged into the protected skills.

## Support files
- (none yet)

## Pitfalls

- **A citation wrapped in parentheses can never be the subject of a sentence (2026-09-21).** A delegated brief that shows the inline form as `([[slug|label]])` reliably comes back with sentences built that way, e.g. "...mapped more broadly. ([[slug|a 2026 review of teacher AI literacy instruments]]) appraised 33 instruments..." That is a fragment with no subject, and it repeats across every page of the batch. Reserve the parenthetical form for appositives mid-sentence ("A cross-level study of AI education ([[slug|46 teachers, 2,832 students]]) found..."). When the source is the sentence's subject, link the subject itself and keep the label inside the link: `[[slug|A 2026 review of teacher AI literacy instruments]] appraised 33 instruments...`. Audit leftovers with a regex matching a parenthetical wikilink immediately followed by a reporting verb (`synthesized|developed|appraised|found|had|built|validated|examined|tested|analyzed|surveyed|reported|showed`); a mid-sentence appositive is a false positive, so read each hit's context before editing.
- **The same insertion can leave a link to the page's own slug.** Grep each edited page for `[[<its own slug>` (with `|` or `]]`) and strip the brackets rather than deleting the phrase: a self-link renders as a link back to the page the reader is already on.
- **Label the study, not the instrument, when the label is the subject.** "Thianwan and Srikoon's 2025 AI Literacy Self-Assessment Questionnaire built a 15-item measure" is wrong (an instrument did not build itself); the same sentence with the label "Thianwan and Srikoon's 2025 validation study of an AI literacy self-assessment questionnaire" is right.

## Recording the screen, and the gate that enforces it (2026-09-28)

The screen is only complete when its outcome is written down. For every article page created
on or after `concept_screen.since` in `wiki.config.yaml`, add one entry to
`concept-screen.yaml` at the repo root:

```yaml
- article: <slug>
  date: <YYYY-MM-DD the screen ran>
  integrated: [<concept-slug>, ...]   # pages that now carry the finding in their NARRATIVE
  no_change: [<concept-slug>, ...]    # screened, judged not to qualify
  reason: "<why, in one or two sentences>"
```

An entry with an empty `integrated:` is normal and expected — most articles add nothing
distinguishing, and the record exists so that a *skipped screen* can be told apart from a
*correct no-change* decision. The distinction is the whole point: absence of an article from
every concept narrative is the right outcome for much of the corpus, so it cannot be the
signal that something was forgotten.

`python3 tooling/scripts/check-concept-screen.py` is the gate (declared in
`build.gates`, run by `run-gates.py`). It fails on an in-scope article with no entry, on an
entry with neither an integration nor a reason, and on an entry that *claims* an integration
the named concept page does not actually contain. That last check matters: it is what stops
the record from becoming a formality anyone can satisfy by writing `integrated: [something]`
without doing the work.

**The gate is scoped `--changed` (2026-09-30), and that is why it was skipped.** It was a
global gate, so the cheap `run-gates.py --changed` pass that a normal ingestion uses listed it
under "not run" and the record was never written — the rule and the gate both existed while
the step still did not happen. It now derives the changed article slugs from git (untracked
files included, because a brand-new article is exactly the case it exists for) and runs in
every scoped pass. A companion gate, `tooling/scripts/check-concept-integration.py --changed`,
checks the other half of the rule: an article may appear in a concept's `## Connected
Articles` ONLY if that concept's narrative also carries it, so a batch that lists articles
without writing prose fails instead of looking finished.

The order that works, in one pass, before the commit: screen the pairs → write the prose →
bump `updated` → run the inline-link pass → write the `concept-screen.yaml` entry → run
`run-gates.py --changed` (gates 4 and 5 now cover this step). Do not treat the record as an
afterthought to be added once something complains; it is the deliverable that says the screen
happened.

This step was skipped for an entire day's batch before the gate existed, and again on
2026-09-30 (the prose was written, the record was not) while the gate sat outside the scoped
pass. A stated rule that was silently violated needs a check that actually runs, not a
stronger sentence.
