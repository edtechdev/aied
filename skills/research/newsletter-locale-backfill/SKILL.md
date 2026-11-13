---
name: newsletter-locale-backfill
description: "Use when one newsletter series spans many locales."
version: 1.0.0
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, translation, i18n, fan-out]
    related_skills: [newsletter-localization, newsletter-locale-closeout, content-page-locale-refresh]
---

# Backfilling a newsletter series across locales

The single-issue job (translate one issue, wire its route) lives in `newsletter-localization`. This
skill covers the other shape: the series exists in a handful of languages and most locales have zero
issues, so the unit of work is *issues × locales* — four issues against twenty-odd languages.

## Decide the target tier before dispatching

Count from disk, never from memory:

```
for d in content/*/; do printf '%-4s %s\n' "$(basename $d)" "$(ls "$d/newsletters" 2>/dev/null | wc -l)"; done
```

Separate full-corpus locales (hundreds of concept pages) from partial ones (a dozen pages). A
newsletter in a partial locale links mostly to pages that do not exist in that language, so the two
tiers are a real decision — ask which tiers the user wants rather than assuming.

## Take each locale's notice from that locale

Read `translation_note` from an existing `content/<locale>/concepts/*.md` and use the most frequent
value. Never copy another language's notice. Some locales store the *italic body* form in
frontmatter, so strip surrounding `*` before reusing it. The string must appear byte-identically in
`translation_note` and as the first italic body line; the parity gate compares the two.

## One task per locale, all issues in it

- A per-issue task multiplies dispatch count by four and splits the vocabulary across children.
- A per-locale child writes each file in pieces (frontmatter, notice, intro, contents, then one section
  at a time) and reuses one terminology set across the series.
- Pin the series title in the prompt: "the same translated series name in every file, only the number
  differs". Independently translated issues otherwise arrive with four different names.

## Verify per file

For every issue, in the child and again at install:

1. Heading counts EN vs translated are equal and every `](#anchor)` resolves to a heading in the file.
2. URL multiset identical to English — same count, none retargeted.
3. `See related` line count equal to English.
4. `###` article-summary count equal to English.

These four catch the failure that matters: an issue 90% translated but missing a section still passes
a word count.

## Install and ship

1. Normalize titles from `issue:` when copying the files in (`^title:` → one series pattern per locale)
   instead of editing each file by hand.
2. Routing is generic (`newsletterTranslations` collection + `src/pages/[locale]/news/[slug].astro`), so
   new locales need files only — no code change.
3. One build after all locales land; do not rebuild per locale.
4. Check per locale: `/news/` archive lists the issues and the detail route renders the translated title.

## Pitfalls

- **A notice copied from another locale ships the wrong language.** Lift it from the target locale.
- **A drifting series title reads as unrelated newsletters** in the archive. Pin it and normalize.
- **A partial locale given a full newsletter** produces a page whose links mostly 404 in that language.
  Confirm the tier first.
- **Per-issue dispatch for a 26-locale backfill** turns 26 tasks into 104 and loses shared vocabulary.
