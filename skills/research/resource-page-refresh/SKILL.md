---
name: resource-page-refresh
description: "Use when editing an existing resource page."
category: research
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [wiki, resources, editorial, links, locales]
    related_skills: [wiki-resource-pages, wiki-inline-links, content-page-locale-refresh]
---

# Refreshing an existing resource page

Revision pass for `content/en/resources/<slug>.md`: add the concept links the prose is missing, cut
detail that does not help the reader, and get the change verified and live without stalling on a
full-site build. Creating a page is `wiki-resource-pages`; this is the edit-and-ship loop.

## Procedure

1. **Read the page and the concept set before editing.** Load the whole file, then check candidate
   slugs actually exist: `os.listdir('<WIKI>/content/en/concepts')`. The link targets must
   be concepts, never the resource's own slug and never another resource.
2. **Link the prose by hand.** The inline-link scanner (`scripts/inline_link_scan.py`) only knows
   articles and concepts — for a resource slug it prints `skip <slug>: not found`. Attach a link to
   every concept the prose already names, at first mention, body only, and never inside the
   `## Connected Concepts` list. Typical resource-page candidates: the thing the tool builds
   (`knowledge-graph`), what it plugs into (`edtech-platform`), who uses it (`teacher-role`), what it
   measures (`assessment`, `feedback`, `llm`), and its licence posture (`open-source`).
3. **Gate the wiring.** `python3 tooling/scripts/check-resource-wiring.py <slug>` requires 1–3 prose
   concept links that resolve. A page whose links all live in the connected list still fails — that is
   the defect the gate exists for.
4. **Cut the incidental detail from BOTH copy locations.** Founder and leadership names, founding
   history and vendor marketing are noise to this maintainer; keep the organisation, the funder, the
   licence, the access terms and the gating caveats, which are the page's value. Grep the whole file
   for the names: they usually sit in the frontmatter `summary` as well as the opening paragraph, so a
   body-only edit leaves the summary advertising what you removed. Folding a duplicate sentence (for
   example the funder stated twice) is part of the same pass.
5. **Fix mislabelled and miscased links while you are there.** A link's label must match its target's
   sense (`[[assessment|feedback]]` sends the reader to assessment). A bare `[[feedback]]` renders the
   target's TITLE, so a lowercase prose word becomes `Feedback` mid-sentence: write
   `[[feedback|feedback]]`. `check-same-text-pipes.py` rejects only the exact-identical `[[x|x]]`, so
   a case-only pipe is legitimate.
6. **Check the locale copies.** Every resource page exists under `content/<locale>/resources/<slug>.md`;
   those translations still carry what you cut and lack what you added. `check-translation-staleness.py`
   reports thousands of pre-existing stale pages, so CI will not flag this one. Either refresh them with
   `content-page-locale-refresh` or state plainly in the reply that the locales are stale.
7. **Verify cheaply, then ship.** Confirm the concept hrefs in `dist/resources/<slug>/index.html`, run
   `check-us-english.py` and `check-ai-disclosure.py` on the page, commit and push, then `web_extract`
   the live URL and check the rendered prose and labels. Do not hold a prose edit for a full
   `npm run build` plus the fifteen-minute gate suite; build-runtime traps and the targeted checks are
   in `wiki-preview-and-release`, `references/build-runtime.md`.

## Pitfalls

- **A one-page edit must not take half an hour.** The maintainer notices. Edit, run the two or three
  page-scoped gates, commit and push immediately; the deploy workflow builds the site. Reserve the
  full gate suite for batches and structural changes.
- **Do not report success from the source file alone.** The built page is where a label or a stale
  summary shows up; read the rendered region, not a global `find()` (the sidebar repeats every concept
  href on every page, so a global hit proves nothing).
- **Removing a name is not a translation.** The English edit leaves 32 locale copies asserting the old
  text; say so rather than implying the site is uniformly corrected.
- **Do not add links to the `## Connected Concepts` list during this pass.** That list is back-link
  territory; the edit belongs in the prose.
