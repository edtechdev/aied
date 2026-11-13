---
name: link-layer-closeout
description: "Use when a new page or node needs its links closed out."
category: research
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [wiki, wikilinks, closeout, corpus, verification]
    related_skills: [wiki-concept-link-sweep, wiki-concept-page-design, wiki-inline-links, kb-coverage-gap-audit]
---

# Closing out the link layer for a new page

The recurring gap in a linked corpus: a page is written, the articles it cites link back to it, and the job is
called done. It is not. Readers arrive from pages nobody touched. Maintainers then find the misses by hand and
report them as "did you check where inline links can be added?" — three separate times in one corpus.

Use this when a new concept page, article page, or any new node lands and its linking must be finished, or when
the ask is "are there more inline links you can add?".

## The three layers — all three, every time

1. **Seed back-links.** The sources quoted on the new page link to it at their first mention. This is the layer
almost everyone does and the only one that feels like finishing.
2. **Umbrella weaves.** Every existing page whose narrative is incomplete without the new node gets a sentence in
   its prose *and* an entry in its `## Connected Concepts`. A Connected-Concepts entry alone is not a weave.
3. **Corpus-wide alias sweep.** Every page whose prose names the node's vocabulary but never links the slug.
   Measure it — do not infer it from the seed list. Three freshly created concepts had 133 such pages between
   them, against 26 seed articles already linked.

## Measure layer 3 before deciding its size

```python
import glob, os, re
B = 'content/en/'
pat = r'\beye[- ]track|\bgaze\b|\bwearable|\bbiosensor'      # the new node's alias vocabulary
for p in glob.glob(B + '**/*.md', recursive=True):
    t = open(p, encoding='utf-8').read()
    if not t.startswith('---') or '[[<new-slug' in t:
        continue                                                # already links, or not a page
    body_start = t.find('\n---') + 4
    cut = min([i for i in (t.find(h, body_start) for h in
               ('## Connected Concepts', '## Connected Articles', '## Citation')) if i != -1] or [len(t)])
    if re.search(pat, t[body_start:cut], re.I):
        print(p)
```

Narrative-only (stop at the Connected/Citation headings), skip pages already linking the slug, skip self.

## Curation rules for a bounded page list

When the ask is more links on a **named set** of pages, run the inline-link scanner in report mode over that list
and curate by hand. Never `--apply`: it inserts every suggestion it holds for every page passed, which is how
thousands of unrequested links land.

- **Link the phrase when it names the construct's own sense.** A 24-page list produced 329 suggestions; most were
  unusable. Skip `equity`, `bias`, `learners`, `reasoning`→`critical-thinking`, `attention`→`cognitive-psychology`,
  `agents`→`agentic-ai`, `schools`→`k-12`, `platform`, and `assessment` used as a plain word.
- **Do the specific constructs the page itself discusses**, including ones the scanner surfaces awkwardly. On an
  avatars page the phrase "simulated students" belonged to `simulating-students`, and its absence was the exact
  miss the maintainer reported by name.
- **Budget roughly 6-14 links per page.** Beyond that it reads as keyword stuffing rather than navigation.
- **Judge in sentences, not counts.** Two wrong senses in one sweep: "civic life" inside a science-literacy vision
  framework, and "civic and market principles" in a governance audit. Neither is civic education.

## Closeout checklist

- Insert **one link per page, first clean occurrence, narrative body only** — never headings, code fences,
  Connected lists or Citation.
- Bump `updated:` on every page whose prose changed; take the list from the gate output.
- Assert insertions-only by comparing per-file **link multisets** and numeric-token multisets against `HEAD:`, not
  by reading `git diff` added lines. A one-link edit re-renders its paragraph and inflates the diff.
- Run the prose gate on changed pages. It will re-judge sentences the link merely touched; see the pitfall below.
- If the corpus has an integration gate (every article listed in a page's `## Connected Articles` must appear in
  that page's narrative), run it on the NEW page too. A fresh page can list a study it never mentions anywhere in
  its body — the append-only pattern, caught by the gate and invisible to every other check.

## Pitfalls

- **A link in a table row counts as coverage, so the prose stays bare.** The scanner asks only whether the page
  links the target somewhere; a comparison-table row label satisfies it and the sentence a reader actually reads
  is never offered. Treat a table-only match as a miss for that target and link it in prose by hand.
- **Inserting a link re-renders the line, so pre-existing prose defects surface as yours.** Splitting or rewording
  prose you did not author is the wrong response: revert the link on that one page, then re-run the gate. A clean
  revert of a link-only edit is exactly two added lines (the link and `updated:`) — check `git diff --numstat`
  before restoring from `HEAD`.
- **"Those defects come from another agent's concurrent edits" is usually false.** On a creation-day sweep every
  one of 13 flagged pages sat on the sweep's own file list. Intersect the gate's page list with the sweep's list
  before accepting that explanation.
- **A reject list built from truncated display text rejects nothing.** File lists printed with fixed-width
  truncation do not match real filenames, so "rejected" pages get inserted anyway and must be restored from
  `HEAD`. Take paths from the machine-readable output (JSON proposals, `git status --porcelain`), never from a
  column you shortened for the terminal.
- **A thin corpus deserves a thin sweep.** Three links out of 29 candidates is a correct result when the rest are
  framework labels and virtue lists, not a failure to work hard enough. Report the accept rate and the reason.

## Reporting

Give the counts that decide credibility: pages measured in layer 3, links inserted per layer, accept rate against
candidates, and the verification (0 lost links, 0 lost numerals against `HEAD`). Name the rejections in
categories, not one by one.
