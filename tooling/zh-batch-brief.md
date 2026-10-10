# ZH Translation Brief — read this file completely before starting

You translate English knowledge-base concept pages into Simplified Chinese.

Repo: `<repo root>`. For each slug assigned to you:

- READ `content/en/concepts/<slug>.md` (the source).
- WRITE `content/zh/concepts/<slug>.md` (create it; the directory may not exist yet — the write tool creates parents).

There are exactly two file operations per slug: read the EN file, write the ZH file. Nothing else.

## Hard rules (a defect in any of these fails the whole batch)

1. **Never translate a wikilink slug.** `[[ai-literacy]]` stays `[[ai-literacy]]` in Chinese, character for character.
   The slug is a routing key, not prose. Only the visible label after `|` is translated:
   `[[pedagogy|pedagogical]]` becomes `[[pedagogy|教学法]]`. A bare `[[llm]]` stays bare — do not add a label.

2. **Every `[[target]]` that appears in the English page must appear in your Chinese page, and no others.**
   Same count, same set. Missing one breaks a live link; inventing one breaks the build.

3. **The heading skeleton is copied, not redesigned.** Same number of `##` and `###` headings, same order,
   same nesting depth. Only the heading *text* is translated. Never add, merge, split or drop a heading.
   Standard section names translate as: `## Questions to Consider` → `## 值得思考的问题`,
   `## Introduction` → `## 引言`, `## Connected Concepts` → `## 关联概念`,
   `## Connected Articles` → `## 关联文章`, `### Connections` → `### 关联`.

4. **Article titles in `## Connected Articles` stay verbatim in English.** The trailing description after ` — `
   is translated; the slug and any literal paper title are not. A line with no description stays as-is:
   `- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]` is copied unchanged.

5. **Do not reorder the Connected Concepts / Connected Articles lists.** Translate in place.

6. **Frontmatter — copy every key from the English page, transforming only these:**
   - `title:` → the translated page title (Chinese, no quotes needed but quotes are fine).
   - `created:` → copy the English value verbatim.
   - `updated:` → run `date "+%Y-%m-%dT%H:%M:%S%:z"` once, use that real value.
   - `type:`, and every facet key (`foundations:`, `technology:`, `assessment:`, `ethics:`, `pedagogy:`,
     `methods:`, `institutions:`, `connected_faqs:`, `confidence:`) → copy VERBATIM. These are slug arrays
     and closed enums; translating or altering a single value breaks the build.
   - Drop `reviewed_by:` if present.
   - Add exactly these four lines after the facet keys, in this order:
     ```
     translation_of: concepts/<slug>
     source_updated: "<the English page's updated value>"
     translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
     contributors: [editor]
     ```
   - Add this `ai_assist` block as the LAST frontmatter key:
     ```
     ai_assist:
       - model: stepfun/step-5-preview:free
         role: translation
         date: "2026-10-09"
         agent: hermes-agent
     ```
   - `updated:` must be a real timestamp from the `date` command, never a value you made up.

7. **After the frontmatter**, the body starts with a blank line, then this exact italic line on its own line:
   ```
   *本页是英文页面的机器翻译，尚未经母语者审校。*
   ```
   then a blank line, then the translated body.

8. **The opening synthesis blockquote** (the `> **Bold Title** — ...` paragraph) is translated like any prose,
   keeping its `>` prefix and its internal concept links.

## Translation conventions

- **Numbers:** keep the digits and the English formatting as the source prints them (English pages use
  `48,540`, `0.94`, `51.9%`). Do not convert thousands separators or decimal marks for Chinese; the
  corpus convention is to carry the source's figures through unchanged. `%` stays a halfwidth percent sign.
- **Identifiers keep their English spelling in every locale:** model and version names (GPT-4o, Claude Sonnet 5,
  Gemini 3.1 Pro Preview, RoBERTa, qwen-max), tool names (ChatGPT, Grammarly, Padlet, Ollama), standards
  (YAML, PRISMA, IRT), and statistical notation (η², κ, R², ρ, β, g, d, α, F(2, 64), ICC(A,1)). Translate
  nothing inside these.
- **Statistics, effect sizes and p-values are reproduced exactly** — the same digits, the same
  parentheses, the same ranges (`[−0.689, 2.217]`, `0.341–0.854`).
- Author names stay in Latin script: `Karaismailoglu、Surmeli 与 Yildirim（2026）` uses the ideographic
  comma `、` between Latin names and fullwidth parentheses around the year. Citation years stay as printed.
- Translate meaning, not word order; aim for natural written Chinese (书面语), not literal calque.
- Keep the English term in parentheses on first use for technical terms with no settled Chinese rendering
  (e.g. 提示工程（prompt engineering）only if genuinely unclear; prefer the established Chinese term when one
  is already used on the existing `content/zh/concepts/ai-education.md` page).
- **Punctuation:** use fullwidth Chinese punctuation (，。、：；？！) in Chinese prose. Inside numbers,
  parentheses around years and Latin-script runs, keep halfwidth forms as shown above.

## Method

Read the whole English page first, then write the Chinese page in one `write_file` call. Do not use regex,
`sed`, `patch` or any find-and-replace to transform the file — you are authoring the Chinese text.

The write tool refuses to overwrite a file this task has not read; the target does not exist yet, so that
is not a concern. If a write is refused, read the target and retry once.

## Do NOT

- Do not run `npm run build`, `git add`, `git commit`, `git push`, or any gate script.
- Do not create, edit or delete any file other than your assigned `content/zh/concepts/<slug>.md` targets.
- Do not touch `content/en/`, any other locale, `raw/`, `pdf-sources/`, `site.config.json` or `tooling/`.
- Do not run any script at all beyond the single `date` call for the `updated:` value.
- Do not stop partway through your assigned pages to ask a question. If a passage is genuinely
  untranslatable, render it in the closest faithful Chinese and move on.

## Final answer

Report only: the list of slugs you wrote, and for each one the real `updated:` value you used. One line each.
Do not paste page content back.
