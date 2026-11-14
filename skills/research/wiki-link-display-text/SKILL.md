---
name: wiki-link-display-text
description: "Normalize inline link labels so the prose reads right."
category: research
version: 1.0.0
author: AI agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [wiki, wikilinks, editorial, labels, corpus-sweep]
    related_skills: [wiki-inline-links, wiki-link-integrity, preview-and-push-gate]
---

# Inline link display text

Use when inline links *route* correctly but *read* wrong: a mid-sentence link prints a page title
instead of the word the sentence needs ("a signature Pedagogies and Teaching Strategies", "student
Learner Agency"), or a citation link prints a whole paper title. The user reports it as "the inline
link text should say 'pedagogy', not the title of the page it links to".

This is the third link class and it is not covered by the other two: `wiki-inline-links` adds links
that are missing, `wiki-link-integrity` repairs links that are broken or malformed. This one fixes
links that are well formed and badly labeled, and it is always a corpus sweep, never one page.

## Why it happens

`src/lib/markdown.ts` expands a bare wikilink as `label || titles[page] || smartTitle(slug)`.
A page's *title* is an editorial label ("Pedagogies and Teaching Strategies", "Learner Agency",
"Large Language Models (LLMs)"), so every bare `[[pedagogy]]`, `[[agency]]`, `[[llm]]` anywhere in
the narrative prints that title. One English corpus had 15,421 such links on 2,271 pages, and
every translated locale carries the same defect with a translated title.

## Procedure

1. **Audit, do not spot-fix.** For each page take the narrative only — after the frontmatter, up to
the first `## Connected`, `## Citation` or `## Further Reading` heading — and collect bare
`[[target]]` plus piped `[[target|label]]` whose label equals the target's title. Compare the
title with the natural term; anything that differs is a candidate.
2. **Resolve a label per target** (rules below), then pipe it: `[[pedagogy|pedagogy]]`,
   `[[agency|agency]]`, `[[llm|LLM]]`. Do not rewrite the sentence around the link.
3. **Apply right-to-left** within each page (collect `(start, end, replacement)` from the original
   slice, then rebuild from the end) so offsets stay valid.
4. **Run the determiner pass** (a/an) over the changed links.
5. **Verify** with the invariants below, rebuild, then run the gates (see `Gate fallout`).

`scripts/display_text_sweep.py` implements steps 1–3 with a `--dry-run` that prints one sample per
change; adapt its `OVERRIDES`/`KEEP_CASE` tables rather than hand-editing pages.

## Resolving the label: concept targets

Priority order — the first that applies wins:

1. **Registry alias that matches the slug** (`concepts.registry.yaml`, hyphens→spaces): `pedagogy`,
   `agency`, `governance`, `student modeling`, `higher education`, `LLM`.
2. **Title with its elaboration stripped** when no alias matches: drop a trailing parenthetical and
   the ` and …` tail — `Learner Modeling and Adaptive Instruction` → `learner modeling`,
   `Equity` → `equity`.
3. **Slug words** as the fallback.

Then shape the casing:

- lower-case every word except acronyms (`AI`, `LLM`, `RAG`, `RCT`, `TPACK`, `K-12`, `STEM`,
  `SAMR`, `ICAP`, `NLP`, `AIEd`);
- **keep proper nouns**: `English education`, `Global South`, `Socratic method` are names, not terms;
- capitalise the first word only at a true sentence start (start of a blockquote or paragraph, or
  after `. `, `! `, `? `). After `**Label:**` and after `(` it stays lower-case;
- an identity pipe (`[[assessment|assessment]]`) is correct and not a defect to clean up.

## Resolving the label: article targets

Read the page's `## Citation` (the heading may be followed directly by the text on the next line —
match `\n## Citation\n+(.+)`) and take the first author plus the year:

- `Author et al. (Year)` inline; `Author et al., Year` when the link already sits inside
  parentheses, so the page shows "(AlSheikh et al., 2026)" rather than "((AlSheikh et al. (2026)))";
- two authors → `A and B`;
- **guard the parse**: require the citation to start `Surname, I.` (or `Surname et al.`, or
  `Surname, Given.`). A full-name list ("Xinyi Gao, Qiucheng Wu, Lu Ding, Q. Vera Liao") otherwise
  splits at the first comma that happens to precede an initial and attributes the paper to the wrong
  person. When no pattern matches, **leave the link bare and report it** — an invented citation label
  is worse than a long title.

## Sweep invariants

Assert all of these before writing:

- **only link text changed**: strip every `[[…]]` to a placeholder in old and new and require byte
  equality of what remains;
- **targets unchanged**: the ordered list of `[[target` tokens is identical old vs new (a label pass
  must never retarget or reorder links);
- **`## Connected …` sections byte-identical** — the sweep slice ends at the heading, and this proves
  it did;
- bracket balance (`[[` count == `]]` count) per file;
- after relabelling, `\b(a|an) \[\[[a-z0-9-]+\|` finds the determiner clashes ("a LLM", "an flipped
  classroom"); fix the article by sound, not spelling ("a university", "a RAG" are right).

## Gate fallout

The per-change gates scope by *file*, so a sweep that touches every page grades the whole corpus:

- `check-concept-prose.py` treats each touched sentence as newly added prose. Canonicalise both link
  forms to `[[target]]` in its `_render_form()` (applied to both diff sides) so a label-only change is
  not a change; otherwise every pre-existing long sentence is reported against you.
- `check-concept-first-mentions.py` surfaces every pre-existing unlinked first mention on the touched
  articles (498 in one sweep). Link them, judging each in its sentence, or the backlog stays red.
- `check-concept-updated-bump.py` requires `updated` on every changed English concept page.
- `check-concept-integration.py`, `audit-article-sections.py`, `verify-number-grounding.py` and
  `check-created-dates.py` report debt that predates the sweep. Fix what the sweep caused, report the
  rest with counts; see `preview-and-push-gate` → `references/gate-suite-mechanics.md`.

## Locales

A translated page renders its *localized* title ("Pädagogiken und Lehrstrategien", "教学法与教学策略").
English labels are wrong there and a slug-derived label breaks case and gender. Derive each locale's
label from its own title (the same parenthetical/`and`-clause strip works) and treat the locale pass
as a separate wave with its own review — do not copy English labels across.

## Pitfalls

- **Do not bulk-remove identity pipes.** `[[open-source|open-source]]` is correct prose; the bare
  form prints "Open Source".
- **Do not lower-case the whole label blindly.** Every word except acronyms and proper nouns.
- **Never create a label at a link that sits inside a heading** — headings carry no links at all.
- **A bare link whose term equals its title is fine** (e.g. `K-12`): skip it rather than piping an
  identical string.
- **Sample the output in rendered form** (strip link syntax to labels) before committing; a label that
  reads badly in its sentence is invisible in a raw diff.
