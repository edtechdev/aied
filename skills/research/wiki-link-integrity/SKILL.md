---
name: wiki-link-integrity
description: "Audit and repair malformed wiki links across locales."
category: research
version: 1.0.0
author: AI agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [wiki, wikilinks, links, audit, multilingual]
    related_skills: [wiki-inline-links, wiki-link-bulk-editing]
---

# Wiki Link Integrity (audit and repair)

Use when existing links are broken or malformed rather than missing: a user reports a mangled link, a page shows raw `[[...]]` text, a sweep turned up odd links, or you need a pre-build check that every wikilink in the corpus still resolves and is well formed. **Adding** links to pages that lack them is `wiki-inline-links`; a scripted pass that inserts one link across many pages is `wiki-link-bulk-editing`. This skill only audits and repairs what is already there.

## Procedure

1. **Audit the whole corpus, not the page you were shown.** A reported defect is almost never alone: one corrupted FAQ URL existed in 33 locales, one bad external-link label in 3, and five concept pages carried a self-link in every language (137 files), because translations copy the English body. Run `scripts/audit_link_defects.py <wiki root>` (report-only, exit 1 on defects) — it covers every locale and collection for unbalanced and nested brackets, wikilinks inside markdown link labels or URLs, wikilinks in code spans, self-links, wikilinks in frontmatter, and broken targets (validated against `content/en` slugs plus `concepts.registry.yaml` redirects). It takes 1–2 s and is worth running before every commit.
2. **Fix by class, in this order.** Balance first — an odd `[[`/`]]` count makes every later check (nesting, "is this inside a link") meaningless.
3. **Verify with the same audit script**, plus `python3 tooling/scripts/check-concept-updated-bump.py --changed` for English concept pages whose narrative changed (the sidebar and RSS sort on `updated`, and the gate fails without a bump; translations carry no `updated`).
4. Commit; publishing stays behind the preview/approval gate.

## Repair rules by class

- **Wikilink inside a markdown link — label or URL.** Keep the outer link, replace the inner wikilink with its label text, never the reverse. `[Shadow AI, [[a|Human Oversight]], …](https://doi.org/…)` truncates at the inner `]` and leaves a stray `]]`, because that `]` closes the outer label; `[Amplify GenAI](/[[ai-education|aied]]/resources/…)` ships a 404 URL. Citation titles and Further Reading entries are where this hides — their titles are already hyperlinked when a linking pass runs.
- **Nested `[[ … [[ … ]] … ]]`.** Keep the link carrying the citation (usually the outer article slug); reduce the inner one to plain text.
- **Unbalanced `[[` / `]]`.** Locate the `[[` whose next `]]` arrives after another `[[`, then close or remove it against the English source sentence. A missing `]]` usually swallows the rest of the paragraph into the label; an extra `]]` usually sits right after a citation parenthesis.
- **Wikilink inside a code span.** The expander runs on raw markdown before code spans are parsed, so a search query in backticks ships markdown-link syntax to the page and the EPUB. Use the plain term.
- **Self-links.** Unwrap a piped link to its label; replace a bare `[[own-slug]]` with the page's own `title:` (lowercase a Title-case first word when it sits mid-sentence). Re-read the sentence afterwards: translations often wrote the label as a repetition of the noun before it, which unwraps into a duplicated word.
- **Wikilinks in frontmatter.** Frontmatter never passes through the expander, so a `summary:` containing `[[a|b]]` prints the brackets literally on the page and in feeds.
- **A page linking to a sibling page that IS itself.** Retargeting is the one repair that can create a broken link while removing a self-link, so confirm the new target slug exists before writing.

## Pitfalls

- **A scan-and-append loop must keep its own cursor.** `i = raw.find('[', i)` returns **-1** at end of file, so the natural terminator `out.append(raw[i:])` appends one character and silently truncates the page — a 14 KB file becomes a 300-byte fragment that still passes a bracket-count check. Track `pos` separately (`if i < 0: out.append(raw[pos:]); break`) and assert `len(new) >= len(old) - expected_removed_chars` before writing.
- **Write a pure-unwrap invariant, then diff.** For every file touched only by link unwrapping, assert `normalize(old) == normalize(new)` where `normalize` replaces each `[[t|label]]` with `label` and each `[[t]]` with `t`. Files that fail it are the ones you edited for some other reason and must be reviewed by hand — this is what catches an unintended text change in a 180-file sweep.
- **Never assert balance without first fixing the files that are already unbalanced.** A repair script that aborts on the first unbalanced page leaves the rest of the batch half-applied; fix balance across the corpus first, or record and skip those files, and re-run the idempotent pass afterwards.
- **Do not trust the reported line alone.** The user names one link; the same bug class will be in other collections and other languages. Grep the whole `content/` tree for the class before fixing.

## Support files

- `scripts/audit_link_defects.py` — report-only audit across locales and collections; exit 1 on defects.
- `content/en` slug set plus `concepts.registry.yaml` redirects are the authority for whether a target resolves; never hardcode slug lists.
