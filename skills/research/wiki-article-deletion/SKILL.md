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
   Typical refs: `index.md`, `journal.md`, `AUDIT-abstract-only-articles.md`, several `articles/*.md`, several `concepts/*.md`.

2. **Classify each reference as narrative vs list-line.** For each occurrence, check whether it sits on a Connected-list line (`ln.lstrip().startswith("- [[")`) or in body narrative. Use: `pre.endswith("- [[") or '\n- [[' in pre[-8:]` to detect list membership.

3. **Delete the article file + raw source.** `articles/<slug>.md` and `raw/papers/<slug>.md` (the raw is gitignored so its deletion is invisible to git — still remove it).

4. **Remove list-lines** from every `.md` file (except `log.md`): drop any line whose `lstrip().startswith("-")` and contains the slug. This covers `index.md`, `journal.md`, and Connected Articles lines in articles + concepts. `AUDIT-abstract-only-articles.md` rows start with `|` not `-`, so handle separately (drop rows starting with `|` that contain the slug).

5. **Repair narrative citations** (the subtle part). A deleted article is often cited *in prose* as `[[slug|Author et al.]]` or `[[slug|concept phrase]]` as a named example (e.g. "**Codify** applies Socratic ITS principles...", "A conceptual framework ([[slug|Doyle & Swisher]]) uses..."). Removing only the link leaves a dangling citation or a broken sentence. Handle each in context:
   - If the citation is a **named example bullet/sentence** describing the deleted paper's finding → remove the whole bullet/sentence.
   - If it's an **inline citation attached to a claim** → remove the citation and, if the claim is now unsupported, rephrase to keep the prose coherent (e.g. "shows X [[slug]]" → "shows X" if X is still general, or drop the clause).
   - If it's a **"See [[slug]]"** pointer → drop just that link.
   - If it's one item in a parenthetical list of examples → drop only that item.
   - Check for `\n\n` adjacency: removing a bullet often leaves a double blank line — collapse it.

6. **Bump `updated`** on every page you touched (articles + concepts) to a current full ISO timestamp. (the maintainer's standing rule — stale `updated` hides pages from "recently updated".)

7. **Fix the audit count** in `AUDIT-abstract-only-articles.md`. After removing rows, recount data rows precisely: lines starting with `| ` and NOT starting with `| ---` (exclude the header `| Article page |` and separator `|---|`). Update BOTH header mentions: `## The N prematurely-ingested articles` and `These **N wiki articles`. **Never hand-count** — the number drifts (multiple deletions/enrichments per session).

8. **Verify — no dangling references.** Re-walk the wiki for the slug (excluding `log.md`, which is allowed to keep historical plain-text entries). Expect ZERO hits in active pages. Then check **link integrity** on every touched page: no broken targets (link resolves to `concepts/` ∪ `articles/` filenames ∪ `conceptRedirects.ts`). A common post-deletion break: pages that cited the deleted article still link to its slug.

9. **Build, commit, push, verify live.** Regen llms files + `npm run build` (must be green) → commit (mention "audit N→M") → push → wait ~55s → `gh run list` BOTH workflows green → curl the deleted article URL for **404** (and touched pages for 200). A green build does NOT mean the deletion is live — verify the 404.

## Pitfalls

- **Deploy latency false-negative.** Right after push, the deploy workflow may still be in progress; the deleted URL can still return **200** from the not-yet-updated site. Check `gh run list` first — if deploy is still running, wait, then re-curl. Do NOT conclude "not deleted" from an immediate 200.
- **`log.md` is history, not a link.** A plain-text entry like `429| - Concept: <slug>` in `log.md` is historical record — leave it. Only the index/journal/audit/active-page links get stripped.
- **Narrative-vs-list misclassification.** Some pages cite the article in prose AND list it in Connected Articles. Both must be handled. The `pre.endswith("- [[")` heuristic catches list membership; check the full surrounding text for prose mentions too (a bare `[[slug]]` mid-sentence).
- **Raw source may not exist.** Some articles (esp. the "prematurely-ingested" abstract-only backlog) have NO `raw/papers/` file. That's fine — just delete the article; nothing to remove in raw.
- **Batch deletions accumulate.** the maintainer often deletes several articles across a session. After each, the audit count drops; fix the count once per deletion (or once at the end recounting all rows).

## Connected-list trimming (companion to deletion)

the maintainer also asks to **trim overlong Connected Articles/Concepts lists** to only highly-related items (recurring; the same pages that accumulate back-links accumulate uncurated alphabetical dumps). See the fuller guidance in `wiki-article-quality` Pitfall #6. Fast rule: article-page Connected Articles lists should be **~8 or fewer** highly-related items with a `— descriptor` on each; trim alphabetical back-link dumps (often 25+ items, many unrelated) down to the articles sharing the paper's specific mechanism/thread. Ordered by relevance, not alphabetically. A deletion naturally requires removing the deleted slug from every list that had it.
