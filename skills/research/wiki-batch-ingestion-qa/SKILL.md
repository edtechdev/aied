---
name: wiki-batch-ingestion-qa
description: "QA batch-created wiki article pages before deploy."
category: research
---

# Wiki Batch Ingestion QA

Use when a large batch of article pages was created (subagent fan-out or full-text upgrade) and must be verified before build/deploy. Complements `wiki-article-quality` (per-page repair) and `wiki-inline-links` (per-page linking); this skill is the **batch QA layer** that runs across many pages at once after bulk creation.

## When to use
- After a subagent fan-out created/upgraded ≥4 article pages.
- After a full-text upgrade of previously abstract-only pages.
- Whenever the maintainer asks to "double check" a recently ingested batch (he explicitly asks about "double header titles" and other inline-link issues).

## QA checklist (run in order, all mechanical via Python)

1. **Double-H1 header titles** — established wiki articles have NO leading `# Title` H1 (body goes straight from frontmatter into the `> **Synthesis:**` blockquote). Subagent-created pages frequently emit a duplicate H1. Detect `^#\s` at the start of the body; remove it. **If the removed H1 contained wikilinks, re-add those links into the narrative body** (they're otherwise silently lost).
2. **Links inside headings** — any `##` heading containing `[[...]]` violates the no-links-in-headings rule; remove the wikilink from the heading (keep the heading text plain).
3. **Same-text pipes** `[[slug|slug]]` → bare `[[slug]]` (regex `\[\[([a-z0-9-]+)\|\1\]\]` → `[[\1]]`).
4. **Broken slugs** — every `[[slug]]` must resolve against `concepts/` + `articles/` filenames + `conceptRedirects.ts`.
5. **Balanced brackets** — `[[` count == `]]` count per page.
6. **Citation** — hyperlink ONLY the title to the DOI (`Authors (Year). [*Title*](doi). *Journal*.`), no journal-in-link, no redundant trailing DOI, no wikilinks in citation.
7. **List-formatting gate** — `check_list_formatting.py <WIKI> --all` must report 0 defects.
8. **Scanner residuals** — re-run `inline_link_scan.py`; apply any remaining unlinked concept mentions, then confirm residuals are only already-linked / false-positive cases.
9. **Facet values sit in the right field** — `python3 tooling/scripts/validate-facets.py` must print OK. A facet slug belongs to the field whose registry section contains it, and a value of the wrong KIND fails the build: `educational-measurement` and `ai-ed-evaluation` are Research methods and evaluation (not `foundations`); `learning-analytics` is Technologies and techniques (not `methods`); `ai-anxiety-and-stress` is People (not `foundations`); `teacher-role` is Foundations (not `stakeholders`); `problem-solving`, `motivation` and `self-efficacy` are Learning and instruction; `agentic-ai` and `design-thinking` are Foundations; `personalized-learning` is Technologies. A slug must not appear in two facet fields. **Resolve each slug's section when writing the brief** (grep the registry or the generated concept index) instead of filing by intuition, and tell the writer to OMIT a field rather than guess — omitting is valid, a wrong field never is. In one 10-page batch this single omission caused five validator failures, each caught only because the writers re-ran the validator themselves.
10. **Concept-page edits passed a significance screen** — if the batch also touched `concepts/*.md`, inspect each touched page's diff. An added Connected Articles line with no matching narrative sentence is the signature of padding: the article got listed while none of its findings were conveyed. Flag every such page and either convey the finding's substance in the narrative or drop the entry. A batch must not leave "list-only" concept edits behind (the 2026-09-15 audit of one batch found 13 of 17 marginal insertions were list-only).

## Pitfall: delegating the inline-link pass to one subagent times out
For a large batch (≥10 articles), do NOT delegate the whole inline-link application to a single subagent — it spends its iteration budget reading narratives and times out (HTTP 524 / `max_iterations`) with zero edits applied. **Apply the scanner suggestions mechanically yourself** with a Python helper that operates only on the narrative body (frontmatter → `## Connected`), wraps the FIRST free occurrence of each phrase (not already inside `[[...]]`), uses `[[target]]` when display==slug else `[[target|phrase]]`, skips phrases in `##` headings, and writes back. Then fix same-text pipes and re-verify.

## Pitfall: concept-mention "false positives" in scanner residuals
When re-running the scanner, a reported suggestion is a FALSE POSITIVE if the phrase is already inside a live link — e.g. "pedagogical" inside `[[pedagogical-agent|chatbots]]`, "faculty" inside `[[faculty-development]]`, "collaboration" inside `[[human-ai-collaboration]]`. Check the phrase's `rfind("[[")`/`rfind("]]")` context before applying; skip if already linked.

## Verification before deploy
- All pages link-clean (no broken slugs, no same-text pipes, balanced brackets, no heading links, no leading H1).
- `npm run build` green; `gh run list` shows Build & Verify + Deploy both `success`; live URLs return HTTP 200 (note: articles live at `/aied/articles/<slug>/`, concepts at `/aied/concepts/<slug>/`).

## 10. Article length budget — check body words before accepting a page (maintainer-flagged 2026-09-18)

Corpus median article body is ~556 words and the 90th percentile is ~1,525, so a page far past that is a template artifact, not richness — the maintainer flagged a 1,520-word case study as too long and detail-heavy. Hold every ingested page to ~600-900 body words (frontmatter end to `## Connected Concepts`): Synthesis 150-220 words, `## Key Findings` 5-7 items of ~25-35 words each, 3-4 prose sections of ~120-180 words. Full detail stays in `raw/papers/<slug>.md`. Before accepting a page, count the body words and trim; when trimming, assert no `[[wikilink]]` target is lost (`set(re.findall(r'\[\[[^\]|]+', body))` must not shrink) and leave the Connected lists and Citation untouched. See `wiki-article-quality` pitfall 12 for the full budget and cut list.

