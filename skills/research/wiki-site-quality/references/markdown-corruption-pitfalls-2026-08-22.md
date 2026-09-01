# Markdown corruption pitfalls: escaped char codes + broken list numbering

Two content-quality defects that recur when PDF-extracted text lands in article/concept markdown. Both render as visible page bugs and are easy to fix once detected.

## 1. Escaped character codes in narrative bodies

PDF-extracted text sometimes keeps **literal escape sequences** instead of rendered characters. Most common:

| Literal in file | Intended character |
|---|---|
| `\u2014` | `—` (em-dash) |
| `\u00e1` / `\u00e9` / `\u00ed` etc. | `á` / `é` / `í` (accented letters) |
| `\n` or `\n\n` | paragraph break (real blank line) |
| `\u201c` / `\u201d` | curly quotes |

They render as visible backslash text on the page, usually in the first narrative paragraph(s) (the synthesized body under the frontmatter), and often inside the same paragraph as the real prose.

**Detect across the WHOLE wiki, not just the file you were asked to fix:**

```bash
grep -rlP '\\u[0-9a-fA-F]{4}|\\n|\\t|\\r' articles/ concepts/
```

**Fix:** replace each literal code with the real character (`\u2014` → `—`, `\u00e1` → `á`), and turn literal `\n\n` into an actual blank line (paragraph break). Do NOT "repair" the token into anything else — the codes are unambiguous.

**Verify:** re-run the grep; confirm `NONE FOUND`. Treat the reported article as only the first hit — this session found 4 articles affected (data-annotations-pedagogical-hints, cross-cultural-student-perceptions-genai-computing, metacognitive-awareness-experiential-vs-instructional, credential-cognitive-stewardship-ai-assessment) when the user only flagged one.

## 2. Ordered-list numbering broken (every item shows as `1.`)

In CommonMark, a **blank line between numbered list items breaks the ordered list into separate lists**, so every item restarts at `1.` instead of numbering 1,2,3… . Symptom: an article's "Key Findings" numbered list renders as 1,1,1,1 instead of 1-5.

**Cause:** the authoring step inserted a blank line between each `N. ` item.

**Fix:** remove the blank lines between consecutive numbered items so they form one contiguous list.

**Detect other occurrences across the wiki:**

```bash
grep -rlP '^\d+\. .*\n\n^\d+\. ' articles/ concepts/
```

Same blank-line rule applies to any markdown list meant to be continuous (bulleted lists are also affected but the "every item shows 1" symptom is specific to ordered lists).

## Lesson
When enriching/repairing one article, always run the wiki-wide grep for the defect class — the reported file is rarely the only one, and the maintainer corrects under-counts.
