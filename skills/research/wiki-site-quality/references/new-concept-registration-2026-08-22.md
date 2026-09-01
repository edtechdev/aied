# Creating a new concept page + registering it for inline linking (2026-08-22)

## When a new concept page is warranted

A dedicated concept page is justified when a term is discussed in **>= 3 articles** across the
wiki (the maintainer's threshold) even if it currently only appears inline inside other concept
pages. Example: "prior knowledge" appeared in 19 articles and was covered inline inside 7 concept
pages (math-education, constructivist, help-seeking, icap-framework, simulating-students,
socratic-method, personalized-learning) but had no page of its own → create `concepts/prior-knowledge.md`.

Confirm the threshold and that no existing concept already covers it before creating.

## Full creation + registration workflow

New concept pages require FOUR registration touch-points, not just writing the .md file.
Missing any of them produces an invisible-but-broken concept (page exists, but no sidebar entry,
no linkable slug for the scanner, no phrase in the concept index):

1. **Write the page** `concepts/<slug>.md` — frontmatter (title, created, updated, type: concept,
   tags, confidence), lead blockquote `> **<Name>** — ...`, body sections, `## Connected Concepts`
   and `## Connected Articles`. Use `^[[article-slug]]` inline footnote refs for key sources and
   include those articles in Connected Articles too. Remove duplicate entries in Connected lists.

2. **Register in the sidebar** — `src/data/conceptIndex.ts`. Add the slug to the appropriate group
   list (e.g. "Learning theories and processes" for a learning-science concept, next to
   student-modeling / knowledge-tracing). The homepage concept count and sidebar MUST both reflect
   it (counts derive from this file). Keep homepage/sidebar in sync (they were 152/152 after).

3. **Add phrases** — `tooling/concept-index.md`. Insert a `- phrases: <slug>; ...` line with all
   natural-language variants / synonyms the term appears as in prose.

4. **Add ALIASES** — `scripts/inline_link_scan.py` (in the skill's scripts dir; note the live copy
   lives under `~/.hermes/skills/research/wiki-inline-links/scripts/inline_link_scan.py`).
   Add a `'<slug>': ['term', 'synonym', ...]` entry so the scanner maps prose terms → `[[slug]]`.

5. **Regenerate + build + deploy** — index.md / journal.md / llms regenerated (the new concept
   increments concept count), `npm run build`, commit, push, watch both workflows green.

## Synonym aliasing for inline linking

When a concept has near-synonyms used in prose, add ALL of them to BOTH `tooling/concept-index.md`
phrases AND the scanner ALIASES entry so the scanner auto-maps them. Real example (desirable
difficulties): `'desirable-difficulties': ['desirable difficulties', 'desirable difficulty',
'productive struggle', 'productive friction', 'cognitive friction']`. "Cognitive friction" and
"productive friction" are used as synonyms in articles and must resolve to the same concept.

## Same-text link pitfall when writing new pages

When authoring new narrative body, it's easy to emit `[[slug|slug]]` (same text both sides) —
the scanner flags it. Common cause: writing a link with an explicit display label that equals the
slug. Fix to plain `[[slug]]` when the label is identical. Always run the inline-link integrity
check (self-links, same-text, broken, heading, unbalanced brackets) on newly written pages BEFORE
build — a green build does not catch structural link defects.

## Verification

- After registering, `grep '<slug>' src/data/conceptIndex.ts` present.
- Scanner dry-run on a page mentioning the term should report `-> [[<slug>]] from: <term>`.
- After build, the concept page URL returns 200 on the deployed site.
