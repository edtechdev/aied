---
name: wiki-link-bulk-editing
description: "Bulk-add one inline wiki link across many pages safely."
category: research
---

# Bulk Inline-Link Editing in a Markdown Wiki

Use when a task asks to add inline `[[concept]]` links to a **large set** of article/concept pages at once — e.g. "link every article that measures AI's impact on learning/achievement/grades to the Learning Gains concept," or any sweep that inserts the same wiki-link into 50+ files. This is distinct from per-page enrichment (see the user-owned `wiki-inline-links` skill); here the scale demands a scripted pass, which has a specific failure mode.

## When to use
- A standing user rule mandates a concept link on every qualifying page (e.g. the **Learning Gains rule**: *any article showing improvements in learning, achievement, grades, academic performance, test/exam scores, etc. should link to the `learning-gains` concept*).
- You must scan the whole wiki to find which pages qualify and add the link to those lacking it.
- Any bulk sweep inserting the same `[[slug]]` into many files.

## Workflow

1. **Scan for qualifying pages first (don't eyeball).** Use `execute_code` with Python `open()`/`os` over `articles/` (and concepts/ if relevant). Match outcome signals with regexes: `learning gains?`, `achievement`, `grades?`, `academic performance`, `test scores?`, `exam scores?`, `learning outcomes?`, `student performance`, `effect size`, `pre.?test`, `post.?test`, `GPA`, `mean scores?`, `mastery`. Separate **strong/general signals** (measuring an intervention effect) from **noise** (mere mention of grading/scoring/prediction: `autograder`, `essay scoring`, `grade prediction`, `exam prediction`, `rubric`) — noise-only hits should NOT get the learning-gains link. This reduces a 200+-file hit list to the genuinely qualifying set.
2. **Insert ONE link per page at the first natural outcome phrase in the narrative body.** Prefer specific phrases (`learning gains`, `achievement`, `test scores`) over bare `learning`. Piped link: `[[learning-gains|learning gains]]`. If the matched text is already exactly `learning-gains`, use bare `[[learning-gains]]`.
3. **CRITICAL — never let the script touch frontmatter.** This is the #1 failure mode (see Pitfalls). Operate ONLY on the body after the second `---` delimiter, never on the `tags:`/`sources:`/`confidence:` lines. If your regex matches keywords like `learning`, `achievement`, `mastery` that also appear inside frontmatter `tags:` lists, a naive global replace corrupts YAML.
4. **Handle files where the outcome phrase is inside a heading or existing link.** Skip headings (line starts with `#`) and skip positions already inside a `[[...]]` link (count `[[` vs `]]` before the position). After the scripted pass, manually place links in the handful of files that couldn't be auto-matched (they often need a permissive "link the word `learning`/`performance` in the synthesis" insert, or a heading-fix).
5. **Fix pre-existing link defects surfaced by the scan.** Same-text pipes `[[slug|slug]]`, heading links, broken slugs, unbalanced brackets — the full-wiki scan reveals them; fix them (the wiki convention is to repair, not leave).
6. **Verify before build:**
   - Frontmatter intact: every modified file still has `---` ... `---` (count `c.count("---") >= 2`), and NO `[[`/`]]` anywhere in the frontmatter block.
   - No same-text pipes, no heading links, no self-links, balanced brackets, no broken slugs (check against `concepts/` + `articles/` filenames + `conceptRedirects.ts`).
   - Every intended page now contains `learning-gains` in its **body** (frontmatter tags don't count).
7. **Regenerate + build + commit + push + verify deploy** per the wiki's normal pipeline. A green `npm run build` does NOT mean the deploy succeeded — check `gh run list`.

## Pitfalls
- **Scripted link insertion corrupts frontmatter (observed repeatedly).** A keyword regex like `\blearning\b` matches the word `learning` inside a `tags:` list (e.g. `tags: [..., generative-ai, learning-gains, ...]` or a `sources:` filename), and the global replace injects `[[learning-gains|...]]` mid-token — producing `person[[learning-gains|learning outcomes]]scaffolding` in a tags line, or a mangled `sources: ['raw/papers/foo[[learning-gains|achievement]]-2026.md']`, or even a broken closing `---`. The build then fails with a YAML parse error pointing at a specific file:line. **Fix: split body = content after the 2nd `---`; only insert into body; never touch the frontmatter block.** Always add a post-pass check that no `[[`/`]]` appears in any file's frontmatter, and that `c.count("---") >= 2` for every edited file.
- **Heading corruption.** If the matched phrase is the start of a heading (e.g. the article's `## Learning Gains...` section title), the link lands inside the heading (`##[[learning-gains|learning gains]]for AI...`). Skip any line starting with `#`. A heading already named "Learning Gains"/"Implications" must be preserved verbatim.
- **False positives inflate scope.** Grading/autoscoring/prediction papers mention "grades"/"scores" as the *object being assessed*, not as an outcome of an AI intervention. Don't link those — the rule is about **AI's effect on learning/achievement/grades**, not papers that scored/graded.
- **Files that fail auto-match.** Some qualifying empirical studies won't match the outcome regexes cleanly (phrase inside an existing link, or only present as "learning"/"performance" generically). For genuinely-qualifying RCTs/quasi-experiments, insert a permissive link at the first `learning`/`performance`/`achievement` occurrence in the synthesis or Key Findings.
- **A scripted global-replace can break frontmatter in files you didn't intend to edit** — always diff/track which files changed, and specifically re-scan every modified file's frontmatter for leaked `[[`.

## Umbrella concept-page coverage (user expectation)
When a bulk task links articles to a concept (like Learning Gains), the user also expects the **umbrella/theory/pedagogy concept pages** to both *discuss* and *link* that concept in their body narrative — not merely list it in Connected Concepts. For a Learning-Gains sweep, check `learning-theories`, `pedagogy`, `instructional-design`, `pedagogical-agent`, `active-learning` (and any umbrella that governs the domain) have a body paragraph explaining the relationship (e.g. "how X determines/relates to learning gains") plus the `[[learning-gains]]` link, and bump their `updated` timestamp. Verify the ones that already link actually *discuss* it in prose, not just the Connected Concepts list.

## Support files
- `scripts/scan-outcome-articles.py` — scan articles for learning/achievement/grades outcome signals, flag noise, and report which qualifying pages lack the target concept link.
