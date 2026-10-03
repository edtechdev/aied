---
name: wiki-concept-page-design
description: "Decide create-vs-enrich when a wiki concept page is proposed"
category: research
---

# Wiki Concept-Page Design Decisions

Use when the user asks whether to create a **new concept page** in the research wiki (e.g. "should there be a separate concept page for X?", "is Y worth a concept page?"), or when choosing between creating a page vs. enriching an existing one. Distinct from `wiki-inline-links` (per-page link enrichment) and `wiki-link-bulk-editing` (bulk link sweeps); this skill is about the **decision of whether a concept page should exist at all and how to scope it**.

## The core heuristic (the maintainer-confirmed)

**Create a dedicated concept page ONLY when there is a genuine, distinct cluster of evidence** — several articles (typically ≥4) that form a coherent topic with its own story, not covered by an existing page. For topics that are **embedded themes** spanning existing pages, **enrich an existing page instead** of spinning up a thin near-duplicate.

Confirmed examples from practice:
- **Create:** `inquiry-based-learning` (distinct pedagogy from PBL; ≥5-article cluster incl. AI-as-co-inquirer story) — the maintainer confirmed "Yes."
- **Create:** `theory-development-aied` (new-theories-of-AI cluster: generativism, epistemic co-agency, absent cognitive baseline, etc.) — the maintainer confirmed "Yes."
- **Do NOT create (enrich existing):** `problem-solving` — it's a theme embedded across `critical-thinking`, `problem-based-learning`, `inquiry-based-learning`, `math-education`, `cs-education`; a standalone page would duplicate. Fold it into `critical-thinking`.
- **Do NOT create (enrich existing):** `design-based-research` — it's a *methodology* already covered by the "Design-based research (DBR)" section inside `research-methods-aied`; a standalone page would be a near-duplicate.

## Before proposing a page: present honest tiered counts

When the user asks "how many articles do X?" as a precursor to a concept-page decision, run a real scan and report **honest, tiered counts** rather than a single inflated number. For theory/construct work, three tiers are useful:
- **Tier 1 — genuinely create/advance a named theory/construct** (the ~10-15 that would anchor the page).
- **Tier 2 — propose a conceptual framework/model** (not full theory).
- **Tier 3 — mention/extend theory loosely** (any "framework/theory/model" in passing).

Distinguish the page's scope explicitly: e.g. `theory-development-aied` covers the *process and product of theorizing* (new theories born, established theories advanced, the field's weak-theory-use problem), whereas `learning-theories` covers *applying* established theories. State this distinction to avoid overlap.

## Distinguishing "distinct cluster" from "near-duplicate"

Ask: does an existing page already cover this, even under a different name or section?
- If yes (methodology lives in `research-methods-aied`; theme lives across several pages) → **enrich existing**, don't create.
- If no (a new named construct/cluster with no conceptual home) → **create**.

Avoid thin pages: a page with no distinct evidence base, or that only restates what `learning-theories`/`pedagogy`/`research-methods-aied` already say, should be folded rather than created.

## If creating: pipeline (mirror the wiki's normal ingestion)

1. Verify all Tier-1 article slugs and related concept slugs exist before writing.
2. Write `content/en/concepts/<slug>.md` with frontmatter (created/updated ISO timestamps), a Synthesis blockquote, a **`## Questions to Consider` pre-reading section** (2-7 open questions, immediately after the blockquote — for instructors/learning designers/students/researchers/administrators/software developers; surface misconceptions, activate prior knowledge, connect to other concepts, raise equity/ethics), followed by a **`## Introduction` heading** that labels the start of the narrative body, then body sections, Connected Concepts, Connected Articles, and a **hyperlinked Citation** (title → URL, never bare — the maintainer flags missing links).
3. **Register in THREE places**, not two:
   - `concepts.registry.yaml` (repo root) — add `<slug>:` under `concepts:` with `title:` and a lowercase `aliases:` list, AND add the slug to the right group under `sections:`. This is the surface that feeds `FACET_VOCAB` (`src/data/facetVocab`), so registering there is what makes the new concept a *valid facet value* elsewhere — no separate vocabulary edit is needed.
   - `src/data/conceptIndex.ts` (sidebar, placed in the right group).
   - `tooling/concept-index.md` (canonical list, alphabetical spot).
4. Add **back-links** from connected concept pages + Tier-1 articles (they should link back to the new concept).
4b. **Announce the concept up the hierarchy** (user rule, 2026-09-30, extended same day). Every new concept page must ALSO be:
   - **mentioned on the `ai-education` meta umbrella page**, and
   - **woven into the narrative of EVERY relevant umbrella page** — a sentence in the prose, not merely an entry in that page's Connected Concepts list.
   For `pedagogical-patterns` the weave targets are `pedagogy` (its sub-umbrella) and `learning-design` (the closest adjacent umbrella), plus the `ai-education` mention.
   A Connected-Concepts listing alone does not satisfy this; the rule exists because a new node that nothing links *narratively* is orphaned in the reader's path.
   **Do not stop at one umbrella.** Identify each page whose existing narrative would be incomplete or misleading without the new concept, and weave into all of them — a new concept usually has more than one conceptual parent (this page's own "closely connected" list is the guide).
5. Add tasteful **inline links** in the new page's narrative; run the inline-link scan; fix same-text pipes `[[x|x]]` immediately.
6. **Verify** (self-links, heading links, same-text pipes, balanced brackets, broken slugs vs concepts∪articles∪redirects) — must PASS.
7. Regenerate `llms*.txt` (explicit request only), update `log.md`, `npm run build`, commit+push, **verify deploy via `gh run list`** (green build ≠ deployed).

## Narrow sub-concept inside an umbrella (naming-collision trap)

When a proposed concept is a **narrower slice of an existing broader page** and the names would read as near-synonyms, do not just create the new page — this collides. Worked example (`accessibility` cluster, the maintainer-confirmed 2026-08-23):
- Desired: distinguish narrow **Accessibility** (can everyone perceive/operate the *format*: captions, alt text, transcripts, contrast, keyboard/screen-reader compat, WCAG) from the broader umbrella **Accessible Learning** (design education across all learner variability) and from **Special Education** (diagnosed-disability instruction) and **Universal Design for Learning** (proactive framework).
- **Step 1 — rename the umbrella** so its name stops colliding. the maintainer: "Accessible Learning should be renamed then so don't confuse it with Accessibility." → renamed `accessible-learning` → **`inclusive-learning`**.
- **Step 2 — the umbrella page must delineate the sub-pages.** the maintainer: "Ensure the umbrella page delineates the different sub-pages." Add a comparison table right after the Synthesis blockquote: each concept → its core question → typical focus. Also state how they combine (e.g. "UDL prevents barriers; accessibility removes format barriers; assistive tech is the tool layer; special ed is the instructional domain; the umbrella holds them together").
- **Step 3 — cross-cut concepts connect to the whole cluster.** the maintainer: "and equity or whatever should connect to all this, too." Add the cross-cut concept (equity-in-ai-education) to each sub-page's Connected Concepts AND add each sub-page to the cross-cut concept's Connected Concepts (reciprocal). Fix any piped links where the cross-cut label was mis-piped to the wrong target (e.g. `[[inclusive-learning|accessibility]]` → `[[accessibility]]`).

See `references/sub-concept-within-umbrella.md` for the full constellation table, the three verbatim corrections, and the grounding articles.
See `references/historical-concept-page.md` for the history-of-aied pattern (create-a-history-concept, the required "recent impact of generative AI" section, and the broad-vs-narrow terminology rule).

### Concept-rename workflow (when you rename an umbrella)
1. `git mv`/`os.rename` `content/en/concepts/<old>.md` → `content/en/concepts/<new>.md`; update frontmatter `title:`.
2. **Move the translated copies to the same slug too.** A concept is identified by slug across every locale, so `content/<locale>/concepts/<old>.md` must be renamed as well or that locale's page is orphaned from the concept. Update its `translation_of:` to the new slug. If the English page was also rewritten, leave the translation's `source_updated` at the OLD timestamp on purpose: that is what makes the staleness gate report it as needing retranslation instead of falsely claiming it is current.
3. Replace the old slug everywhere (articles, concepts, faqs, all locales, `src/`, `tooling/`) — use a scripted sweep, then grep to confirm **zero** remaining occurrences. Expect a wide blast radius: a well-linked concept page appears in ~120 files.
4. **Register the 301 redirect in `concepts.registry.yaml`'s `redirects:` block, NOT in `src/data/conceptRedirects.ts`.** That file is generated (`// GENERATED FILE - do not edit by hand` / `Source: concepts.registry.yaml (the redirects: block)`), so a hand-added entry is silently overwritten by the next `gen-concept-artifacts.py` run. Add it to the registry, regenerate, then confirm the entry appears in the generated file.
5. **Regenerate the derived views** rather than hand-editing them: `python3 tooling/scripts/gen-concept-artifacts.py` writes `src/data/conceptIndex.ts` (sidebar), `src/data/facetVocab.ts`, `tooling/concept-index.md` and `conceptRedirects.ts` from the registry. Check with `--check` (all five files must report `ok`).
6. Move the registry entry to its **alphabetical** home, update `title:`, and extend `aliases:` to the new topic words — verifying each candidate phrase is free of collisions first, since a phrase can belong to only one concept.
7. Fix piped display labels that still say the old title (e.g. `[[new-slug|Accessible Learning]]` → `[[new-slug|Inclusive Learning]]`). Also re-read labels for **ambiguity** the rename exposes: "Pedagogical training" reads as *teacher* training, and one article was found linking mathematics teacher training to the model-training page. Retarget those (`teacher-ai-competency`) rather than relabelling.
8. Re-read the renamed page's body for awkward leftovers from the mass replace (stray "Accessible learning" mid-sentence) and tighten.
9. Verify in the BUILT output, not the source: the new page renders with its title, the old URL still resolves to a page reading `Redirecting to: /aied/concepts/<new>/`, and the sidebar shows the new title.
10. Expect the prose gate to complain when you are done. A rename sweep rewrites every line carrying the slug, and a line-based gate treats those as freshly added — see the `check-concept-prose.py` fixes (retargeted links are not new prose; deleted pages are skipped; untracked pages are checked) before you go shortening pre-existing sentences.

### Splitting a concept page: check whether the seam exists
Before agreeing to split a page in two, test whether the boundary the user is proposing is real. A worked case (2026-10-02, "should training/post-training and fine-tuning be separate pages?"): supervised fine-tuning **is** the first stage of post-training, so the proposed seam cuts through a single stage, and every strong anchor ran both halves in one pipeline (RL-SFT-RL, SFT-then-GRPO, mixed post-training). Splitting would have double-homed most of the evidence base. Also check length before treating size as the motive: median concept page in this corpus is ~2,000 words with the longest at ~9,200, so a 2,300-word page is not oversized. Recommend one page with the two halves as distinct sections, and say why.

## Pitfalls
- **Enriching existing is the default.** Users prefer a well-enriched existing page over a redundant new one. Only create when the cluster is genuinely distinct.
- **Watch name collisions with an existing umbrella.** If the new narrow concept's name could be mistaken for the existing broader page, rename the broader page (confirm the new name with the user first via a short choice list) rather than leaving two confusable names.
- **A new sub-concept still needs its own page even when the umbrella already covers the territory** — the umbrella is the *relationship hub*; the sub-concept is the operational slice. Keep both, cross-linked, with the umbrella explicitly delineating them.
- **Recommend `hermes curator adopt research-wiki`** for durable concept-page workflow details — that skill is user-owned and its full ingestion/enrichment rules can't be edited here.
