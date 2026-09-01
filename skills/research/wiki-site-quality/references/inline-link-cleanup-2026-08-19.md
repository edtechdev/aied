# Inline-link cleanup after automated wikilink passes (2026-08-19)

## Context
Bulk-adding `[[wikilinks]]` to body narratives (a regex/sed term-replace pass over
new article/concept pages) silently introduced three kinds of corruption that
required a dedicated cleanup pass. The maintainer also pushed for MORE aggressive
inline linking, including conceptually-similar phrasing, not just exact-name matches.

## The three silent corruptions
1. **Links inside `#` headings** — `## [[active-learning|active-learning]] strategies…`
   and heading text like `## The indispensable role of [[human-in-the-loop-ai|human oversight]]`.
   Never link a heading; unlink it and keep plain text.
2. **Self-links** — a page linking to itself, most commonly footnote-style
   self-citations `^[[slug]]` at the end of a synthesis blockquote
   (15 article pages had these, e.g. `critical-thinking-biological-sciences-ai-2025`).
   Body self-links also appear (e.g. `[[learning-gains]]` on the learning-gains page,
   `[[educational-policy-ai|policy]]` on the educational-policy-ai page).
3. **Same-text pipe links** `[[slug|slug]]` (identical anchor and slug) — ugly;
   simplify to plain `[[slug]]`, and prefer a natural piped display like
   `[[active-learning|active-learning methods]]`.

A multi-line body rewrite can also merge the closing frontmatter `---` into the
synthesis blockquote (dropping the newline), breaking YAML — always split/rewrite
`fm` and `body` separately and never write from a stale body variable.

## Safe-insertion rules
- Operate only on the body BEFORE the first `## Connected` header — never
  frontmatter, never headings, never Connected lists.
- Skip any match already inside an existing `[[...]]`:
  `if before.rfind('[[') > before.rfind(']]'): return m.group(0)`.
- Never link a page to itself (`tslug == slug` → skip).
- Link only the FIRST unlinked occurrence of a term in prose; don't re-link a slug
  the page already links elsewhere.

## Conceptually-similar term map (examples the maintainer expects)
- "critical analysis"/"critical-thinking skills" → `[[critical-thinking]]`
- "human oversight"/"human mentorship" → `[[human-in-the-loop-ai]]`
- "scientific integrity" → `[[academic-integrity]]`
- "over-reliance on AI" → `[[cognitive-offloading]]`
- "educators"/"the role of educators" → `[[teacher-role]]`
- "ethical (considerations)" → `[[ethics]]`
- "biological" → `[[biology-education]]`
- "LLMs"/"large language models" → `[[llm]]`
- "AIED"/"AI in education" → `[[ai-education]]`
- "active-learning methods" → `[[active-learning]]` (piped display)

## Post-pass verification (run on every touched file)
- No `[[]]` inside headings.
- No `[[slug|slug]]` same-text links.
- No self-links (regex `[[<own-slug>` anywhere).
- No nested `[[` `[[`.
- Balanced `[[`/`]]` counts.
- Frontmatter `---` delimiter intact on its own line.
- All targets resolve against concepts/ + articles/ slugs.
