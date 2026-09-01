# Sidebar / TOC moves, renames, and label changes (validated 2026-08-31)

Recurring maintainer requests are to **move a concept between sidebar sections** (with or without a rename) or **rename a sidebar group label**. All three were exercised repeatedly on 2026-08-31. The canonical reorg doc is `src/data/conceptIndex.ts`; the EPUB/PDF TOCs are ALSO generated from it, so offline exports must be regenerated on any move.

## Three request variants (all common)
1. **Rename + move** (e.g. "Misconceptions about AI"): change title, move slug between groups, and often broaden the concept body.
2. **Pure move** (no rename): just relocate the slug in `conceptIndex.ts` (examples that session: `ai-use-disclosure` → Equity/ethics>Ethics-and-responsibility; `prompt-engineering` → AI-technologies>Models-and-techniques; `technology-acceptance-model` → People>Institutions-and-systems; `guardrails`+`privacy` → Ethics-and-responsibility; `learning-analytics` → Learner-modeling-and-adaptive-systems; `critical-thinking` → Cross-cutting-themes; `critical-pedagogy` → Learning-and-instruction>Core-pedagogies).
3. **Group-label rename** (e.g. "Teachers" → "Instructors"): change the `label:` string only; item slugs unchanged.

## Steps for ANY variant
1. **`src/data/conceptIndex.ts`** — remove the slug from the old group's `items:` array AND add it to the new group's array (each slug must appear exactly once across the whole file). For a label rename, edit only the `label:` string. `src/data/conceptIndex.ts` is the single source for the left sidebar AND the EPUB/PDF TOCs.
2. **`concepts/ai-education.md` umbrella narrative** — this page mirrors the sidebar section headings and must stay in sync: move the concept's mention to the matching `## section` bullet/paragraph; for a label rename update the umbrella's `**Label:**` bullet (e.g. `**Teachers:**` → `**Instructors:**`); update the `## Connected Concepts` descriptor if the old label reads differently. Bump the page's `updated` (full ISO).
3. **Regenerate `llms.txt`/`llms-full.txt`** (`python3 tooling/scripts/generate-llms-files.py`) — the generator sorts concepts by sidebar order, so a move changes the LLM-file order.
4. **Regenerate the offline EPUB/PDF** (`python3 tooling/build-epub.py`) — `build-epub.py` parses `conceptIndex.ts` for its chapter/group structure, so a move or label change MUST be followed by regenerating + committing `public/aied.epub` + `public/aied.pdf`, or the offline TOCs drift out of sync with the site sidebar. (Easy to forget — the site build alone won't catch it.)
5. **Verify in the built HTML** — after `npm run build`, check `dist/index.html` (or the live page): the slug sits inside the new group's nav block (after that group's label `<div>`) and is ABSENT from the old group's block. Verify programmatically rather than eyeballing: `h.find('<NewLabel></div>')` then check the slug substring in that slice, and the inverse for the old label.
6. **Commit the .astro/.ts + content + llms + epub/pdf together** in one commit. Only the files you touched should appear in `git status` — if many unrelated files are dirty, a concurrent ingester cron may be running (see `concurrent-git-worktree-safety`); commit only your files.

## Naming conventions to keep
- Prefer clean, class-level labels; the maintainer renamed "Teachers" → "Instructors" (2026-08-31) — use "Instructors" for educator stakeholder groups.
- When a concept's slug stays the same but its grouping changes, do NOT rename the slug — only edit `conceptIndex.ts` membership (renaming a slug breaks inline links/redirects; see `wiki-concept-page-design`).

## Cross-linking note (moves often pair with link fixes)
When the maintainer asks "shouldn't X link to Y concept?", treat it as a bidirectional-link check: add the reciprocal link on the target concept page too (one-way links are flagged). E.g. an article about course-policy co-design should link `[[educational-policy-ai]]` (not `[[governance]]`) for "policy-making", and `educational-policy-ai` should list the article back in its Connected Articles.
