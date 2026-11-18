---
name: corpus-text-sweep-safety
description: "Use when a spelling or term sweep touches a whole corpus."
category: research
version: 1.0.0
author: AI agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [editorial, corpus, find-replace, gates, spelling]
    related_skills: [wiki-inline-links, wiki-link-integrity, wiki-editorial-conventions]
---

# Corpus-Wide Text Sweeps

A correction like "counseling has one L" means every occurrence in a corpus of thousands of pages, in prose and headings, without touching the regions where the same string is a *name* rather than a word. The sweep itself is trivial; the damage is what a naive `str.replace` does to identifiers.

## When to Use

- The user corrects a spelling, a product name, an acronym expansion, or a term of art across the corpus.
- A style rule (US English, house capitalization) needs to be applied retroactively.
- Any global find/replace over `content/`, `docs/`, or a docs-as-code tree.

## Procedure

1. **Inventory before editing.** Count occurrences and list the files, including case variants — a lowercase replace leaves `Counselling` and `COUNSELLING` behind, and a checker that reports "clean" afterwards will be reporting on the wrong subset:
   ```bash
   grep -ro "counsell[a-zA-Z]*" content/en | awk -F: '{print $2}' | sort | uniq -c
   ```
2. **Mask the protected regions before replacing.** In a wiki/markdown corpus these are: YAML frontmatter, wikilink TARGETS (`[[slug|` and `[[slug]]`), `## Citation` blocks (a published title is quoted, never respelled), and path-valued frontmatter such as `sources: ['raw/papers/…']`. Sweep the prose, leave the identifiers alone.
3. **Sweep case-insensitively, or enumerate the forms.** Replace the lowercase, capitalized, and plural forms explicitly; verify with a second pass over the same regex.
4. **Re-run the project's own checkers, and close the gap if there is one.** If the spelling checker passed *before* the sweep, its dictionary was missing the pair — add it (`"counselling": "counseling"` …) in the same change, so the next occurrence is caught by the tool instead of by the user. A user-reported spelling is usually a checker-coverage bug, not a one-off typo.
5. **Run the full gate suite**, then a targeted link check: grep for slugs containing the changed word and confirm every `[[…]]` written after the sweep still resolves.

## Pitfalls

- **A respelling sweep silently breaks wikilink targets.** `str.replace('counselling','counseling')` also rewrites `[[rudolph-llm-simulated-counselling-clients-2026|…]]`, so the label still reads right, the build still passes, and the link 404s. Mask targets, or afterwards diff every `[[…]]` target against the page set.
- **Case variants defeat a lowercase sweep.** Fixing the lowercase word and shipping leaves the capitalized one; always grep the stem (`counsell`) rather than the exact form you replaced.
- **Never respell inside a citation or a title.** Quoted work keeps its own spelling — journal titles, chapter titles, publisher names. If the sweep changes a Citation block, the citation is now wrong about the source.
- **A changed line with a statistic is re-verified by the grounding gate.** Rewriting prose on a line that carries a number re-opens that number: a page stating a source's `0.0833` as "8.3%" fails a string-based grounding check. Quote the source's own precision, or leave the numeric sentence untouched.
- **Bulk replace inside the frontmatter rewrites the page title.** `title:` is often the exact string being swept; check the final frontmatter of every touched page for a mangled title.

## Verification checklist

- Occurrence count for the old form is 0, for the new form equals the old count.
- No `[[…]]` target changed (compare the set of targets before and after).
- Frontmatter parses; titles intact; citation blocks byte-identical.
- Project checkers pass, and the dictionary now covers the pair.
- Full gate suite green; page/word counts unchanged apart from the swept words.
