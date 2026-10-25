# Bulk Translation Waves

How to translate a large set of pages into another locale with parallel subagents and
verify the result before committing. This file holds the translation-wave procedure and
its pitfalls; SKILL.md keeps the always-on translation rules (labels vs slugs, number
conventions, frontmatter fields).

## The defect classes a wave produces

All four are invisible in a green `npm run build`, so every page must be checked
mechanically before it is committed.

1. **Output-ceiling truncation.** A child spends its token budget mid-page and writes a
   truncated file — sometimes *inventing* a `[truncated]` marker at a point where the
   English source is complete. Restore the passage from the English source.
2. **Slug typo.** A child writes a slug that is nearly right (`...-engagement` for the
   live `...-engagement-2026`). It ships as a broken link.
3. **Dropped frontmatter key.** `connected_resources` is the usual casualty; the page
   builds fine and silently unlinks the resources the English page wires up.
4. **Heading collision.** English `## Connections to related concepts` and
   `## Connected Concepts` are different headings; rendering both with the locale's
   single Connected label makes the body section match the renderer's connected-list
   matcher and lose its styling.

## Verification script (run over every page of the wave)

Compare each translated page against `content/en/<kind>/<slug>.md`:

- **slug multiset equality** — `Counter(re.findall(r"\[\[([^\]|]+)", text))` on both
  sides; a *set* difference is a defect, a *count* difference is usually a duplicate
  inline mention and is acceptable.
- **heading skeleton equality** — `re.findall(r"^(#{2,3}) ", body)` must match in order,
  depth and count.
- **frontmatter key parity** — every English key except `title`, `updated` and
  `reviewed_by` must be present; facet values must be byte-identical.
- **`source_updated` equals the English `updated`** — this is what keeps the staleness
  gate green.
- **the standard machine-translation notice line is present** in the body.
- **no truncation marker** — grep for the locale's word plus `[truncated]`, then confirm
  against the English source that the sentence really is truncated there.

## Detecting a summary instead of a translation

Char-ratio does NOT work: Chinese renders roughly 0.45 English characters per character,
so a faithful page and an abridged one both look short.

Use **statistics coverage** instead: collect the English page's multi-digit statistics
(`\d+\.\d+` plus `\b\d{2,3}(?:,\d{3})*\b`, excluding 4-digit years) and measure how many
appear in the translated body. A real translation is ≥0.98; a compressed page drops them.

Three locale renderings are legitimate and must be cleared by reading the English
context, not counted as misses:

| English | Locale rendering |
|---|---|
| `24/7 access` | 全天候访问 |
| `3.2M ALEKS interactions` | 320 万次 ALEKS 交互 |
| `Grade 10 chemistry` | 十年级化学 |

The same care applies to vocabulary hits: 截断 is a real technical word (a truncated
distribution tail, a proficiency cutoff, a truncated BERT) as well as the marker of a
broken file.

## Briefing the children

- Give each worker an explicit slug list and a pointer to a brief file that carries the
  frontmatter template, the verbatim-slug rule, the number conventions and the banned
  operations (no `git`, no build, no gate scripts, no files outside its targets).
- **Tell the child to write each page in ONE `write_file` call and stop.** The output
  ceiling is the mechanism behind every truncation defect; a child that re-reads or
  re-polishes a finished page spends the budget the next page needed. State that a
  complete plain page beats a polished half-page.
- Balance load by English word count, not page count, and keep a worker under ~8 large
  pages (~25k English words).
- Order the queue by inbound links so the pages readers actually arrive at exist first.

## Two gate truths this workflow depends on

- **`check-translated-headings.py` treats any trailing section as invented drift**, which
  makes a faithfully-translated `## Citation` fail. The English source ends
  `... Connected Articles / Citation`, so the gate is wrong, not the page. Strip exactly
  one trailing Citation section (English `Citation` or the locale's label) before
  comparing closing headings — then **prove the fix in both directions**: an invented
  trailing heading must still FAIL, and a dropped connected section must still FAIL.
- **`run-gates.py --changed` never sees a translated page** (it filters to the English
  locale by design), so its empty result is not evidence a translation passed.
