---
name: kb-coverage-gap-audit
description: "Use when asked what a KB's concept map is missing."
category: research
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [wiki, concepts, coverage, audit, taxonomy]
    related_skills: [wiki-concept-page-design, wiki-ingest-orchestration, wiki-concept-narrative]
---

# Auditing a KB for missing concept pages

## When to Use

- The user asks whether the knowledge base is missing disciplines, concepts, constructs or technologies
  ("what about civic literacy?", "should history education have a page?", "any psychology concepts missing?").
- You are proposing new concept pages and need evidence rather than intuition.
- A batch of articles landed and you want to know which topics now deserve a page.

This skill decides **what is missing**. The create-vs-enrich judgment and the page-building pipeline live in
`wiki-concept-page-design`; the weave and gate mechanics live in `wiki-concept-narrative` and
`wiki-gate-suite-triage`. Read those before writing, not before measuring.

## Measure both sides, then talk

Never answer this question from knowledge of the field. A topic can feel obvious and have three articles, or
feel obscure and have fifty. Two counts decide everything.

1. **Corpus side — how many articles touch the topic.** Load every article body once and count per candidate
   with a word-boundary regex:

   ```python
   import glob, re
   texts = [open(p, encoding='utf-8').read().lower() for p in glob.glob('content/en/articles/*.md')]
   def hits(pat):
       rx = re.compile(pat)
       return sum(1 for t in texts if rx.search(t))
   hits(r'eye[- ]track|\bgaze\b|wearable|biosensor|physiological signal')
   ```

   Report the article count per candidate, never one aggregate number.
2. **Existing-page side — how much of it the natural home page already carries.** For the page that would
   plausibly own the topic, count every synonym, with `len(words)` alongside so a short page and a saturated
   one are distinguishable:

   ```python
   t = open('content/en/concepts/<home>.md', encoding='utf-8').read().lower()
   {k: t.count(k) for k in ['eye', 'gaze', 'wearable', 'biosensor', 'sensor']}, len(t.split())
   ```

   A topic with 30+ article mentions and `0` on its home page across all synonyms is a real gap. A topic with
   20+ occurrences under a different name is not.
3. **Discipline axis is separate.** Slugify each value in the `discipline:` facet vocabulary and check it
   against the concept directory. A label carrying dozens of articles with no page is a candidate; a label
   with one or two articles is not a page no matter how tidy it would make the taxonomy.
4. **Technology axis.** Do the same for the `technology:` facet labels and for the technologies named across
   article bodies; the two lists disagree often, because a facet value can be a concept page while a named
   technology is nowhere.

## Decision rules

- **Create** when the corpus count is substantial (tens of articles) and the home-page count is near zero.
- **Enrich** when the topic already lives somewhere under another name. Dismissing a candidate as covered is
  a claim about that page, so quote its count in the reply.
- **Refuse** when the corpus barely mentions it: state the count, say the page would be an empty shell, and
  name the page that is the correct home for now. A one- or two-article topic is not a page.
- **Thin-but-real** (a handful of articles on a strategically important topic): build it short, put the gap
  statement in the synthesis AND in a limitations paragraph, and set `confidence: low`. Do not let an
  interesting topic borrow credibility the corpus has not earned, and do not pad the page to look full.

## Pitfalls

- **Substring matching invents gaps.** `lms` matches inside *algorithms*, `iot` and `ai ta` inside unrelated
  words. A substring scan once reported a 97-article learning-management-system gap whose real count was 13.
  Anchor every short token (`\blms\b`, `\biot\b`) or use the longer phrase instead.
- **Synonym blindness hides existing coverage.** Testing only the exact candidate phrase declares gaps that
  are covered under the page's own wording ("culturally responsive" vs the page's `culturally-relevant-pedagogy`).
  Enumerate the synonyms of the candidate before concluding `0`.
- **Taxonomy tidiness is not evidence.** The gap that matters is where the corpus has material and the KB has
  no home for it, not where the site's nav would look more complete.
- **A facet label without a page is a fact, not a promise.** Several discipline labels have articles but no
  concept page, and some are fine that way because a broader discipline page covers the territory.
- **Recorded already-covered traps** — candidates that read like gaps and are not: `gamification` →
  `game-based-learning`; teacher professional development → `teacher-education`; graduate/doctoral →
  `education-levels` plus `higher-ed`; learning management systems → `edtech-platform`; digital literacy and
  competency frameworks → `ai-literacy`; working memory → `cognitive-psychology`; academic self-concept →
  `learner-identity`; programming education → `cs-education`; culturally responsive teaching →
  `culturally-relevant-pedagogy`. Extend this list as new dismissals are confirmed instead of re-deriving them.

## After deciding to create

Follow the pipeline in `wiki-concept-page-design`. The parts worth repeating here because they fail silently:

- Register the slug **once** in `concepts.registry.yaml` (title, aliases, and the right `sections:` group),
  then run `python3 tooling/scripts/gen-concept-artifacts.py`. `conceptIndex.ts`, `facetVocab.ts`,
  `concept-index.md` and `conceptRedirects.ts` are generated; hand edits are overwritten.
- Check each new alias against every existing title and alias (lowercase) before adding it — a phrase can
  belong to one concept only, and near-misses count.
- The page skeleton in this corpus: synthesis blockquote, `## Questions to Consider`, `## Introduction`, body
  sections, `## Common Misconceptions`, `## Connected Concepts`, `## Connected Articles` (no Citation section
  on concept pages), plus `contributors: [editor]` and an `ai_assist:` block for pages created after the
  disclosure cutoff.
- Announce the new concept up the hierarchy: a mention on the `ai-education` meta page and a narrative
  sentence in every relevant umbrella page, not just a Connected-Concepts line.

## Reporting

Give the numbers that decided each call: articles touching the topic, the home page's count across synonyms,
and the verdict. Separate "missing and worth building" from "covered under another name" from "too thin to
build", and say which umbrella pages the new pages will be woven into. The counts are the answer; the
recommendation is only credible because of them.
