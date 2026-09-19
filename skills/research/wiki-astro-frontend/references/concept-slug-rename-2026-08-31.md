# Concept slug rename — validated procedure + pitfalls (2026-08-31)

Validated renaming `instructional-design`→`learning-design` and `faculty-development`→`educational-development` (display titles also changed to "Learning Design" / "Educational Development"). Beyond the base steps in the SKILL.md "Concept slug renames" section, these hard-won details apply:

## Anchor the replace regex on the exact slug token
- In content, replace `[[old` only when IMMEDIATELY followed by `]]` or `|`, so you never corrupt ARTICLE slugs that merely contain the token as a prefix (e.g. `[[curriculum-as-code-instructional-design-2026]]` is a real article and must survive):
  - links: `re.compile(r'\[\['+old+r'(?=\]\]|\|)')`
  - tags: `re.compile(r'(?<=\s|\[)'+old+r'(?=\s*[,)\]])')`
- Post-check that NO `[[old` (followed by `]]`/`|`) and NO old tag token remains in any concepts/ articles/ faqs/ file.
- Use `git mv` so git records the rename.

## `tooling/concept-index.md` canonical list is ALPHABETICAL
- Naive in-place replace leaves the renamed entry out of order. Remove the old line and re-insert the new line at its correct alphabetical slot (e.g. `educational-development` before `educational-measurement`; `learning-design` before `learning-gains`).
- Also append the OLD→NEW mapping to the `## Merged / absorbed` map — the redirect list and this merge map must stay in sync.

## `conceptRedirects.ts` syntax pitfall
- It's a TS object. Append each entry as `'old': 'new',` INSIDE the object before the closing `};`. This session a sloppy append left a stray duplicate `}` then `};` → `npm run build` failed with `Left side of comma operator...` / `';' expected`. Remove any duplicate closing brace.

## Sync the scanner alias dict to BOTH copies
- Change the KEY `'old': [` → `'new': [` in BOTH `<AGENT>/research/wiki-inline-links/scripts/inline_link_scan.py` (repo) AND `<AGENT>/<AGENT>/research/wiki-inline-links/scripts/inline_link_scan.py` (active) — they drift. KEEP the alias phrases (they legitimately name the old term).

## Synonym-of-old-term preference (the maintainer changed mid-task)
- the maintainer first asked to keep a note about the old synonym term, then corrected to REMOVE the standalone `*Note: this concept is also commonly referred to as...*` paragraph while KEEPING the inline `(also known as *old term*)` in the lead blockquote. FINAL: fold the synonym into the lead — `> **New Title** (also known as *old term*) — ...` — and do NOT add a separate note paragraph.
- Update the umbrella page's `[[new|old label]]` piped links to the new label and its narrative mentions of the old term (e.g. `[[learning-design|instructional designers]]` → `[[learning-design|learning designers]]`).

## Homepage links
- If the concept appears in the homepage `index.astro` "essential concepts" prose list (both did this session), update BOTH `href` (`/aied/concepts/<new>`) and the visible label.

## The slug lives in more places than the `concepts:` entry (2026-09-19)

Renaming `evaluative-judgement` → `evaluative-judgment` surfaced three holders the earlier checklist missed. Sweep the whole registry, not just the concept block:

- **`concepts.registry.yaml` holds the slug twice**: once as the `concepts:` key and once as an item in a `sections:` group. Rename the key and run `gen-concept-artifacts.py` — if the sections item is left stale the generated sidebar keeps the old slug and `check_concepts.py` reports the registry inconsistent.
- **`journal.md` lists concept pages by slug** (`- 📘 [[evaluative-judgement]] — Evaluative Judgment`), so the rename touches the journal too, alongside `index.md`.
- **The inline-link scanner's alias dictionary keys are slugs, not phrases**: change the KEY (`'old': [...]` → `'new': [...]`) in BOTH the repo and installed copies of `inline_link_scan.py`, and any `never_link`/REJECT entry that names the slug (e.g. `('assessment literacy', 'evaluative-judgement')`). Keep the alias phrases — they legitimately name the old term.

Also worth knowing: when the change is only a spelling variant (not a synonym), do NOT add a "formerly *Old Term*" note to the lead blockquote — readers saw the same words before and after. Add the note only when the visible term itself changed.
