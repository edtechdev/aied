---
name: wiki-consolidate-duplicate-pages
description: "Merge two duplicate wiki article pages into one."
category: research
---

# Wiki Page Consolidation (duplicate-article merge)

Use when two wiki pages in `<WIKI>` cover the **same source article** and must become ONE page. Recurring the maintainer rule (verbatim): **"Every research paper or article should only have one corresponding article summary page. There should be no duplicate pages for any article."** This skill is the consolidation layer; it is distinct from plain deletion (where back-links are STRIPPED) — here back-links are REPOINTED to the surviving canonical slug.

## When to use
- Two `articles/<a>.md` and `articles/<b>.md` pages reference the **same** source: identical `sources: ['raw/papers/<x>.md']` frontmatter, same DOI, or same source_url. This is the duplicate signal.
- One page is a topic/synthesis spin-off of another (e.g. an "X effectiveness review" page whose content is really the underlying Zerkouk/other review) that should not exist as a separate article.
- the maintainer says "consolidate the two" or flags a duplicate article page.

## Workflow

1. **Confirm they are the same article** before touching anything: same `sources:` file, same DOI/source_url. If the two slugs share a raw source, they are duplicates. Also grep the other page's title/DOI in the wiki to confirm no third duplicate exists.

2. **Choose the canonical page** = the one carrying the **real article title** (and generally the richer / more-referenced one). The other page gets deleted.

3. **Merge unique content** from the page being deleted into the canonical page BEFORE deleting. Look for what the loser has that the winner lacks (a synthesis-with-wiki-evidence table, numbered "Implications for the Field" points, concrete quantitative data, extra `— descriptor`s). Insert these into the canonical body; add `— descriptor`s to any Connected Concepts that lack them; bump `updated` to a full ISO `-04:00` timestamp.

4. **Delete** the non-canonical `articles/<slug>.md`.

5. **Repoint ALL back-links** from the deleted slug → the canonical slug. Because both pages described the same article, a global `str.replace(deleted_slug, canonical_slug)` across every `.md` file is semantically correct. Iterate `os.walk`, excluding `.git`, `dist`, `raw`, `node_modules`, and `log.md`.

6. **Fix duplicate entries** the repoint creates: any page that already had the canonical slug AND the deleted slug now holds two identical `- [[canonical]]` lines. Dedupe exact-duplicate lines in every changed file (count with `Counter` on `line.strip()`; keep the first).

7. **Fix self-links** the repoint creates: the canonical page itself may now contain `[[canonical-slug]]` — from what was originally a link to the deleted page — in its Connected lists or narrative. Remove the Connected-list self-entry; reword narrative self-mentions to a related concept (e.g. `[[meta-analysis-systematic-review|systematic-review literature]]`) rather than the page's own slug.

8. **Fix index.md + journal.md**: each had a separate entry per page. Remove the deleted page's line/entry — in `journal.md` identify it by its distinct **title line** (e.g. the loser's topic title), NOT by a greedy regex that can over-match and delete the canonical entry too. Keep the canonical's entry. Decrement BOTH `**Total pages:**` and `**Total entries:**` by **1** (only one page was deleted, not two). If the greedy regex removed the canonical journal entry as well, re-add it under its `## {created-date}` section and re-bump the count back up.

9. **Verify** (before build):
   - No dangling references to the deleted slug anywhere (exclude `log.md`).
   - No duplicate `- [[canonical]]` lines in any file.
   - No self-links on the canonical page.
   - 0 broken links across all touched pages (every `[[target]]` resolves to `concepts/` ∪ `articles/` filenames ∪ `conceptRedirects.ts`).
   - index/journal counts match.

10. **Build, commit, push, verify live**: regen llms files + `npm run build` (green) → commit (mention "consolidate duplicate pages") → push → wait ~55s → `gh run list` BOTH workflows green → curl the deleted URL for **404** and the canonical URL for **200**. A green build does NOT mean the deletion is live — verify the 404.

## Pitfalls
- **Greedy journal regex deletes BOTH entries.** If you match journal entries by a regex over the shared canonical-slug block, it can swallow the canonical entry plus the deleted one. Prefer matching on the loser's unique title line. After any edit, re-check the canonical entry still exists in journal.md.
- **Self-links appear only AFTER the repoint**, not before. The canonical page is the one that self-references — always re-scan it post-repoint.
- **Duplicate list-lines appear only AFTER the repoint.** Pages that linked to both pages now double up. Dedupe after repointing, not before.
- **Count decrement is −1, not −2.** index/journal held 2 entries for 2 pages; deleting 1 page removes 1 entry. Verify the header count equals the actual number of `- [[...]]` / `- ◐ [[...]]` lines after editing.
- **`log.md` is history** — it may keep a plain-text mention of the deleted slug; that's fine, leave it.
- **Raw source shared** — both pages point to the same `raw/papers/<x>.md`; do NOT delete the raw (the canonical page still needs it).

## Support / relationship
This skill is the consolidation companion to the user-owned `wiki-article-deletion` (plain delete + strip back-links) and `wiki-inline-links` (linking pass). Run the inline-linking HARD GATE (see `wiki-inline-links`) on the canonical page after merging, plus `check_list_formatting.py`, before build.
