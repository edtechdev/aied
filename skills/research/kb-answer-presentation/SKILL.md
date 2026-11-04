---
name: kb-answer-presentation
description: "Use when presenting an answer drawn from a corpus."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [knowledge-base, answer-format, coverage-claims, aied]
    related_skills: [kb-question-answering, research-wiki, wiki-inline-links]
---

# Corpus Answer Presentation

How to lay out an answer built out of a document collection — the AIEd wiki at `<WIKI>` and similar sites. Retrieval lives in `kb-question-answering` (search passes, URL scheme, link verification); this skill is the *presentation* layer and the coverage claims that go with it. The user asks for the same shape every time and sends the answer back otherwise.

## When to Use

- The user asks what a knowledge base says about a topic, which studies exist, or which pages cover something.
- Any answer whose units are pages: articles, concept pages, FAQs, resources.

Not for writing or editing pages — that is `research-wiki` / `wiki-page-deepening`.

## Answer shape

1. **Concept and FAQ anchors first.** The orientation page and the practical page go above the studies, so the reader knows the map before the evidence.
2. **Then the examples nearest the question's discipline.** Asked about math or science, open with the math-class studies, then other STEM work, then cross-cutting methodology. The user will say "math first" if this is missed, so make it the default.
3. **Each entry states the sequence or technique used and the main finding in the same breath** — one or two sentences. These are summaries of what was tested and what happened, not abstracts.
4. **A blank line between every entry.** A run-together block of studies is unread.
5. **Label the study's modality** — face-to-face, online or asynchronous, laboratory, or *not stated* — whenever the question is about classroom practice. Never infer modality from the paper's topic; write "not stated" when the synthesis block is silent.
6. **Close with the gap note**: what the corpus does not cover, plus an offer to draft the missing page.
7. **Hyperlink every page named, and verify each URL** before replying — a slug list comes back asking for links.

## Coverage claims are factual claims

Never say the corpus lacks a page without having grepped page **bodies**. Listing a collection and grepping the *filenames* for words you guessed finds only pages named the way you named them, and the page that answers the question is usually framed differently from the question.

```bash
ls content/en/concepts                       # read the whole listing once
ls content/en/faqs
# then search bodies, not names
grep -rilE '<topic vocabulary>|instructional sequence|pattern|classroom discourse' content/en/concepts content/en/faqs
```

A false gap note is worse than no gap note: it tells the user their corpus is thinner than it is. If a page does exist and you missed it, the whole answer's authority is gone.

## Pitfalls

- **Do not order by file discovery order.** Group by the facets the question implies, and put the discipline-specific examples before the general ones.
- **Do not let a summary swell into an abstract.** If an entry runs past two sentences, cut the background and keep the technique and the result.
- **Do not answer out of prior knowledge when the corpus is silent on a sub-point.** Attribute the silence, or mark the sentence as outside the corpus.
