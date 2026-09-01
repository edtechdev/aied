# Concept Merge — Duplicate-Accumulation Pitfall (2026-08-18)

Surfaced during the third merge of the day (`block-programming` → `cs-education`, after
`programming-education` → `cs-education` had already run). Complements
`concept-merge-workflow.md` and `concept-merge-pitfalls-2026-08-18.md`.

## Problem: successive merges into the SAME canonical accumulate duplicate links

When multiple concepts are merged into one canonical over time, hub/connected pages that
listed each absorbed slug separately become duplicated after each rewrite. Seen in
`concepts/discipline-specific-aied.md`:

- Before any merge the line read `[[cs-education]] / [[programming-education]] /
  [[block-programming]]`.
- After the programming-education merge: `[[cs-education]] / [[cs-education]] /
  [[block-programming]]`.
- After the block-programming merge: `[[cs-education]] / [[cs-education]] / [[cs-education]]`
  (a triple pointing at one page).
- The same file also carried a pre-existing double `- [[cs-education]]` in its
  `## Connected Concepts` list, left over from the earlier merge.

## Rule

After EVERY merge's link-rewrite pass, grep the canonical slug across hub pages and collapse
duplicates:

```bash
grep -n "<canonical>" concepts/discipline-specific-aied.md concepts/ai-education.md
```

Watch for:
- `[[canonical]] / [[canonical]]` or `[[canonical]] / [[canonical]] / [[canonical]]` in a
  prose/connections line → collapse to one `[[canonical]]`.
- Duplicate `- [[canonical]]` bullet lines in `## Connected Concepts` → dedupe.
- Self-referential links on the canonical page ITSELF (its own body prose linking the absorbed
  slug, which now resolves to itself) → convert to `[[canonical|display]]` or drop.

`concepts/ai-education.md`, `concepts/discipline-specific-aied.md`, and the canonical page's
own Connected Concepts/Articles are the usual spots. A single bare `- [[canonical]]` entry is
the correct end state.
