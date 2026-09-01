# Content-Quality Fixes (session 2026-08-22)

Three durable content-quality bugs found and fixed while enriching articles. All are independent of the Astro build (the site builds green with these bugs present) — check for them explicitly on any enriched page.

## 1. Literal escape sequences in page bodies

PDF text extraction sometimes writes JSON/JS-style escape codes into article/concept bodies as **literal text** instead of the rendered characters. Rendered on the live page as raw `/n`, `\u2014`, etc.

Symptoms seen:
- `\u2014` instead of an em-dash `—`
- `\n\n` instead of a paragraph break (whole body stuck on one line)
- `\u00e1` instead of `á` (e.g. author name `Hern\u00e1ndez-Leo`)
- Also possible: `\t`, `\r`

Detect:
```bash
grep -rlP '\\u[0-9a-fA-F]{4}|\\n|\\t|\\r' articles/ concepts/
# per-file clean check:
grep -cP '\\u|\\n' articles/<slug>.md   # 0 = clean
```

Fix: replace each escape with the real character — `\u2014`→`—`, `\u00e1`→`á` — and split `\n\n` into an actual blank line. Scan the whole `articles/`+`concepts/` tree afterward until the grep returns nothing.

Note: the escaped code can sit inside **frontmatter** too (e.g. a `Hern\u00e1ndez-Leo` name in a Citation line within the body, or a mangled `tags:`/`sources:` line). If a build fails with a YAML parse error at a specific line, check that line for a leaked `[[link]]` or escape sequence that clobbered a frontmatter token.

Affected this session: `credential-cognitive-stewardship-ai-assessment`, `data-annotations-pedagogical-hints`, `cross-cultural-student-perceptions-genai-computing`, `metacognitive-awareness-experiential-vs-instructional`.

## 2. Ordered-list numbering broken (every item renders as `1.`)

A numbered list with **blank lines between the items** breaks CommonMark ordered lists — each `1.`/`2.`/... starts a fresh list, so every item renders as `1.` on the page.

Detect:
```bash
grep -rlP '^\d+\. .*\n\n^\d+\. ' articles/ concepts/
```

Fix: remove the blank lines so items 1..N form one continuous ordered list. (Distinct from bullet lists, where blank lines are usually fine.)

Affected this session: `credential-cognitive-stewardship-ai-assessment` Key Findings (items 1–5 separated by blank lines).

## 3. Cross-linking adjacent concept pages (reciprocal "Relationship to" sections)

When two concept pages are conceptually adjacent and one is enriched, add a reciprocal distinction on **both** pages so each explains how it relates to the other.

Example — `governance` ↔ `educational-policy-ai`:
- **Policy = the content / what is decided** — formal rules, principles, statements (what AI use is allowed, what must be disclosed, which assessment formats are permitted). A documented artifact; answers "what are the rules?"
- **Governance = the machinery / how it is decided, implemented, enforced** — the structures, norms, and accountability mechanisms that produce, carry out, monitor, and revise policy; answers "who decides, and how do the rules take effect?"
- They are interdependent: policy without governance is unenforced; governance without policy lacks direction. The practical test: a policy can be read on paper; governance is observed in whether the rule is implemented, enforced, and adapted.

Each page links the other in its body AND in Connected Concepts.

## the maintainer's "most precise concept" rule

the maintainer checks that strongly-related articles link to the **most precise** matching concept, not just a broader one. Example this session: a 30-university policy audit (`credential-cognitive-stewardship-ai-assessment`) is about institutional AI policy, so it must link `educational-policy-ai` (the precise concept), not merely the broader `governance` — even though `governance` was already a Connected Concept.
