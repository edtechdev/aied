---
name: wiki-page-deepening
description: "Use when asked to genuinely deepen, enrich, enhance, or update a wiki concept, article, or FAQ page. Playbook for real content value: mine raw sources for specifics, weave into the narrative (never append-only), add practical tips/examples/implications, cross-link bidirectionally, run the HARD GATE, and ship verified."
category: research
---

# Wiki Page Deepening / Enrichment

"How to make a page *better*, not just bigger." When the user says **"can you update and enhance and enrich this [concept/article/FAQ] page"**, they want genuine depth — specific findings, numbers, mechanisms, and practical takeaways — woven into the page's narrative, not a wall of padding or a stray section tacked onto the end.

This skill is the end-to-end playbook. It draws on the sibling skills (`research-wiki`, `wiki-inline-links`, `wiki-site-quality`, `wiki-concept-narrative`) — load those alongside it when they apply.

## When to use

- User asks to enrich/enhance/deepen/update a specific concept, article, or FAQ page (often with a URL).
- User says they want to "explore and apply the concept further" and asks for tips, examples, implications.
- User wants a page's narrative deepened as part of ingesting an article that contributes to it.

## The core principle: depth over volume

A genuinely enriched page contains **information the reader could not get by skimming** — exact effect sizes, interaction percentages, study-design detail, the mechanism that explains a surprising result, the specific prompt that made a system work, the concrete implication for an instructor or developer. It does **not** contain generic exhortations ("AI is transforming education…") or restated summaries.

**Before editing, mine the raw source.** Every wiki article has a full-text source at `raw/papers/<slug>.md` (the `sources:` frontmatter field names it). Read it in full. Extract:

- **Numbers that matter**: effect sizes (η², Cohen's d), percentages, counts (participants, items, weeks), correlation/regression coefficients, significance.
- **Design detail**: sample, task, intervention, comparison conditions, duration.
- **Mechanisms**: *why* the result happened (e.g. "the tutee's fluent correct answers gave students no error-correction practice").
- **The "so what"**: what it means for instructors, developers, researchers, students.

**Never fabricate.** Do not invent a number, DOI, URL, or research finding the source does not contain. If you cannot find a concrete value, say so qualitatively rather than inventing precision. Do not invent cross-links to pages that do not exist (verify against `concepts/`, `articles/`, `faqs/` dirs).

## Step 1 — Read before you touch anything

1. Load the relevant skills: `research-wiki`, `wiki-inline-links` (HARD GATE + link rules), and any targeted one (`wiki-concept-narrative`, `wiki-article-quality`). These encode the canonical page structures and the hard rules below.
2. Read the target page in full (`concepts/<slug>.md`, `articles/<slug>.md`, or `faqs/<slug>.md`).
3. Read the raw source in full (`raw/papers/<slug>.md` for articles).
4. **Assess**: is the page a stub, or already well-formed and well-linked? If well-formed, the task is *genuine deepening*, not format/link repair — don't waste edits rearranging what's already correct.

## Step 2 — Enrich per page type

### Article pages

Canonical structure (unchanged): frontmatter → synthesis blockquote (`> …`) → narrative body → `## Connected Concepts` → `## Connected Articles` → `## Citation` (**LAST**).

Deepen the *body* sections — typically Study Design, Key Findings, and Implications. Add the numbers and mechanisms mined in Step 1. Keep every existing section; add new `##` body sections only if they represent a genuinely distinct aspect (e.g. a dedicated "Interaction Patterns" section). Never insert content after `## Connected Concepts`.

### Concept pages

Canonical structure: synthesis → `## Questions to Consider` → `## Introduction` → narrative body → `## Connected Concepts` → `## Connected Articles`.

The user's most-requested enrichment is a **practical "Putting X into Practice" section** woven into the body (this is the "tips, examples, implications" ask). Include:

- **Design patterns + example prompts** (for LLM/teachable-agent concepts, give the exact prompt constraints that worked).
- **Tips for instructors** and **tips for developers** (separate bullet groups).
- **Implications and open questions**.

This section must be **integrated into the narrative**, not a standalone block floating between the body and `## Connected Concepts`.

### FAQ pages

Deepen the answer with concrete specifics from the underlying sources, and link related FAQs (per `wiki-faq-pages`).

## Step 3 — The HARD RULES (violating these fails the build or the review)

1. **Narrative integration, never append-only.** Weave new content into the thematically-appropriate EXISTING section. Do **not** add a standalone `##`/`###` enrichment section between the body and `## Connected Concepts`. Exception: a *deliberate full rewrite* of the whole page (rare, and only when the user asks for a rewrite or the contribution is major).
2. **No standalone source/PDF/DOI links in the body.** The source is hyperlinked ONLY via the bottom `## Citation` title→source link. No `📄 [PDF](…)`, `📄 arXiv · [PDF](…)`, `📄 [Full article](…)`, `📄 DOI: …` lines in narrative bodies. (`check_list_formatting.py` enforces this.)
3. **`## Citation` at BOTTOM, title-only hyperlink.** Never top/mid-page. Only the title is linked. Never fabricate a DOI/URL — if no public source link, leave the title unlinked.
4. **Cross-linking is bidirectional and precise.** Link the **most precise** matching concept (not the umbrella). Link SPECIFIC concepts, not umbrella pages. Both directions (article↔concept/article) must agree. Prefer `[[wikilinks]]` in Connected lists; inline links in body prose are fine when they add navigational value.
5. **Concept pages REQUIRED sections**: `## Questions to Consider` (single contiguous bulleted list, 2-7 open pre-reading questions) then `## Introduction`. If enriching a concept, refresh Questions if content changed substantially.
6. **Bump `updated`** (full ISO timestamp) in frontmatter on any significant edit — the maintainer flags stale `updated` dates.
7. **Public-repo privacy**: the repo is public. No personal names, `/home/` paths, `~/.hermes`, `blume` branding in tracked files or commit messages. Use neutral "the maintainer". (The `git-personal-info-scrub` skill has the full list.)

## Step 4 — HARD GATE before build

Run BOTH on the whole corpus (they also verify nothing else regressed):

```bash
python3 skills/research/wiki-inline-links/scripts/inline_link_scan.py . --all      # 0 broken/self/heading links, balanced brackets
python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py . --all # 0 defects; ordered lists ONE block; no body source links
```

The scanner's denylist suggestions are report-only, not defects. Apply only high-confidence links (use `--apply` per-page, then re-scan to confirm). After `--apply`, re-run list-formatting (it edits bodies).

## Step 5 — Ship and verify

1. Regenerate the llms files if page content changed: `python3 tooling/scripts/generate-llms-files.py`.
2. `npm run build` (workdir the wiki repo root) — confirm `0 errors` / `Complete`.
3. Spot-check rendered HTML for the key new content.
4. Privacy-scrub the diff: `git diff | grep -iE '/home/|~/.hermes|@gmail|mastodon|blume'` → empty (except intended path-placeholder lines).
5. Commit + push; watch CI (Build + Deploy) to green; `curl -s -o /dev/null -w "%{http_code}"` each touched live URL → 200.

## Pitfalls

- **Don't pad.** A longer page that adds nothing is a regression. If the source has little beyond what's there, say so and make only targeted improvements.
- **Don't fabricate specificity.** Vague-but-true beats precise-but-invented.
- **Don't forget bidirectional links.** One-way links are flagged in review.
- **Don't edit the `## Citation` section** while deepening (except the deliberate, in-scope citation fix).
- **Terminal cwd can drop** (exit 126) — always pass `workdir` explicitly.
- **Skill files may be pruned** — reload with `skill_view` before depending on their content.
- **The wiki runs a concurrent ingester cron** — big unexpected diffs are often that cron, not your command. Check `git status`/`git log` before mass-reverting.
