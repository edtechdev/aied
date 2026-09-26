---
name: wiki-article-deletion
description: "Delete wiki article + strip all back-links, fix audit count."
category: research
---

# Wiki Article Deletion

Use when the user asks to **delete an article page** in the AI-ed research wiki (`<WIKI>`) — typically because it's **not open access** and therefore can't be legitimately enriched, or is not wanted. Recurring pattern for the maintainer: he reviews enriched/backlog pages and deletes the paywalled/non-OA ones. The hard rule is "an article should not be in the wiki unless its full text is saved to `raw/papers/`" — so a non-OA (paywalled) article that can't be fetched is a deletion candidate. This skill is the **deletion + cleanup layer**; distinct from `wiki-article-quality` (repair/enrich), `wiki-inline-links` (linking), `research-wiki` (ingestion). **Companion to Connected-list trimming** (Pitfall #7): deleting an article means removing it from every Connected Articles list that referenced it.

## Workflow

1. **Locate all references** to the slug across the wiki (exclude `.git`, `dist`, `raw`, `node_modules`). Iterate all `.md` files and collect every file containing the slug:
   ```python
   for root,dirs,files in os.walk(wiki):
       if ".git" in root or "dist" in root or "raw" in root or "node_modules" in root: continue
       for f in files:
           if f.endswith(".md") and f != "log.md":   # log.md is historical plain-text — LEAVE it
               if slug in open(os.path.join(root,f)).read(): hits.append(...)
   ```
   Typical refs: `index.md`, `journal.md`, `AUDIT-abstract-only-articles.md`, several `content/en/articles/*.md`, several `content/en/concepts/*.md`.

2. **Classify each reference as narrative vs list-line.** For each occurrence, check whether it sits on a Connected-list line (`ln.lstrip().startswith("- [[")`) or in body narrative. Use: `pre.endswith("- [[") or '\n- [[' in pre[-8:]` to detect list membership.

3. **Delete the article file + raw source.** `content/en/articles/<slug>.md` and `raw/papers/<slug>.md` (the raw is gitignored so its deletion is invisible to git — still remove it).

4. **Remove list-lines** from every `.md` file (except `log.md`): drop any line whose `lstrip().startswith("-")` and contains the slug. This covers `index.md`, `journal.md`, and Connected Articles lines in articles + concepts. `AUDIT-abstract-only-articles.md` rows start with `|` not `-`, so handle separately (drop rows starting with `|` that contain the slug).

5. **Repair narrative citations** (the subtle part). A deleted article is often cited *in prose* as `[[slug|Author et al.]]` or `[[slug|concept phrase]]` as a named example (e.g. "**Codify** applies Socratic ITS principles...", "A conceptual framework ([[slug|Doyle & Swisher]]) uses..."). Removing only the link leaves a dangling citation or a broken sentence. Handle each in context:
   - If the citation is a **named example bullet/sentence** describing the deleted paper's finding → remove the whole bullet/sentence.
   - If it's an **inline citation attached to a claim** → remove the citation and, if the claim is now unsupported, rephrase to keep the prose coherent (e.g. "shows X [[slug]]" → "shows X" if X is still general, or drop the clause).
   - If it's a **"See [[slug]]"** pointer → drop just that link.
   - If it's one item in a parenthetical list of examples → drop only that item.
   - Check for `\n\n` adjacency: removing a bullet often leaves a double blank line — collapse it.

6. **Bump `updated`** on every page you touched (articles + concepts) to a current full ISO timestamp. (the maintainer's standing rule — stale `updated` hides pages from "recently updated".)

7. **Fix the audit count** in `AUDIT-abstract-only-articles.md`. After removing rows, recount data rows precisely: lines starting with `| ` and NOT starting with `| ---` (exclude the header `| Article page |` and separator `|---|`). Update BOTH header mentions: `## The N prematurely-ingested articles` and `These **N wiki articles`. **Never hand-count** — the number drifts (multiple deletions/enrichments per session).

8. **Verify — no dangling references.** Re-walk the wiki for the slug (excluding `log.md`, which is allowed to keep historical plain-text entries). Expect ZERO hits in active pages. Then check **link integrity** on every touched page: no broken targets (link resolves to `content/en/concepts/` ∪ `content/en/articles/` filenames ∪ `conceptRedirects.ts`). A common post-deletion break: pages that cited the deleted article still link to its slug.

9. **Build, commit, push, verify live.** Regen llms files + `npm run build` (must be green) → commit (mention "audit N→M") → push → wait ~55s → `gh run list` BOTH workflows green → curl the deleted article URL for **404** (and touched pages for 200). A green build does NOT mean the deletion is live — verify the 404.

## Withdrawal of a page whose claim is retired (distinct from a paywall deletion)

When the reason is not "can't be sourced" but "the claim no longer holds" — the study's tool
generation is superseded, a retraction, a field consensus that moved — the cleanup differs from the
workflow above in four ways (exercised 2026-09-19 on a GPT-3.5-era comparison withdrawn the same day
it was ingested):

- **No redirect.** A paywall deletion and a rename redirect are about reaching the same content by
  another path; here the content itself is what was rejected, so a 301 just carries the outdated
  finding to a new address. Let the URL 404.
- **Remove the narrative weave, not only the links.** A page ingested that same day is likely woven
  into concept pages by *prose sentences*, not just Connected-list lines (the ingestion rule asks for
  a narrative weave). Grep every concept page for the slug, delete the added sentence or bullet, and
  where a paragraph mixed the withdrawn study with a surviving source, rewrite it so the survivor
  stands alone rather than leaving a one-clause orphan.
- **`log.md` gets a NEW entry; the old one gets a marker.** Unlike link lines, a same-day ingest entry
  that describes a page now deleted will mislead the next reader. Append a fresh dated entry giving
  the reason, and add a short "WITHDRAWN the same day — see the entry above" marker to the historical
  bullet. Do not rewrite the history entry's substance, and do not touch older entries.
- **Recount what the removal changes**: `index.md` article count, `journal.md` total entries, and any
  audit file's total; then confirm the deleted URL returns 404 and every touched page 200.

## Pitfalls

- **Deploy latency false-negative.** Right after push, the deploy workflow may still be in progress; the deleted URL can still return **200** from the not-yet-updated site. Check `gh run list` first — if deploy is still running, wait, then re-curl. Do NOT conclude "not deleted" from an immediate 200.
- **`log.md` is history, not a link.** A plain-text entry like `429| - Concept: <slug>` in `log.md` is historical record — leave it. Only the index/journal/audit/active-page links get stripped.
- **Narrative-vs-list misclassification.** Some pages cite the article in prose AND list it in Connected Articles. Both must be handled. The `pre.endswith("- [[")` heuristic catches list membership; check the full surrounding text for prose mentions too (a bare `[[slug]]` mid-sentence).
- **Raw source may not exist.** Some articles (esp. the "prematurely-ingested" abstract-only backlog) have NO `raw/papers/` file. That's fine — just delete the article; nothing to remove in raw.
- **Batch deletions accumulate.** the maintainer often deletes several articles across a session. After each, the audit count drops; fix the count once per deletion (or once at the end recounting all rows).
- **Do the removal in one pass, and only then assert the slug is gone.** A page that was ingested hours earlier carries the slug in two different places — the woven prose *and* a Connected Articles line — so an assertion placed after the prose cut but before the list cut fails on a page you actually cleaned. Cut the paragraph and the list line, collapse the blank lines (`\n{3,}` -> `\n\n`), then assert.
- **A withdrawal requested the same session still removes the narrative weave.** The prose a concept pass wrote hours earlier is not grandfathered in: delete the bullet or paragraph the paper produced, and where a paragraph mixed it with a surviving source, keep the survivor and drop the deleted paper's clauses. Cognitive-psychology is the exception to watch: keep a general description of a framework the paper merely *applied* (CTML, CLT) and cut only the paper-specific half.
- **An emptied journal date group needs `\n\n+`, not `\n\n`.** Deleting the last entries under a date heading leaves the heading with one extra blank line, so an anchored `^## <date>\n\n(?=## )` substitution silently does not match and the assertion that follows fails after the files are already written. Remove the group with `\n\n+` and re-check that the body still starts at the previous date.
- **Recount every total the removal changes**: `index.md`'s `Articles:` line, `journal.md`'s `Total entries`, and the llms files (`generate-llms-files.py` — articles changed, so this one is in scope even though resources are excluded). Then confirm the deleted URL returns **404** live.
- **The offline EPUB and PDF are not exempt.** They are committed artifacts and the standing rule is rebuild-on-request only, so a deletion leaves `public/aied.epub` and `public/aied.pdf` still carrying the removed pages. Say so explicitly in the report and offer the rebuild; do not rebuild them unasked.

## Connected-list trimming (companion to deletion)

the maintainer also asks to **trim overlong Connected Articles/Concepts lists** to only highly-related items (recurring; the same pages that accumulate back-links accumulate uncurated alphabetical dumps). See the fuller guidance in `wiki-article-quality` Pitfall #6. Fast rule: article-page Connected Articles lists should be **~8 or fewer** highly-related items with a `— descriptor` on each; trim alphabetical back-link dumps (often 25+ items, many unrelated) down to the articles sharing the paper's specific mechanism/thread. Ordered by relevance, not alphabetically. A deletion naturally requires removing the deleted slug from every list that had it.
