---
name: wiki-connected-gloss-translation
description: "Use when translating connected-list glosses to a locale."
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [i18n, translation, gloss, wiki, parity]
    related_skills: [locale-parity-audit, content-page-locale-refresh, new-page-translation]
---

# Translating connected-list glosses on locale concept pages

Use when a bucket/brief asks you to translate leftover English glosses in the connected-list
entries of EXISTING locale pages (e.g. `content/pt/concepts/<slug>.md`), keeping parity 0/0.

## What a gloss is
Entries under `## Artigos conectados` (or the locale's connected-articles heading) look like
`- [[slug]] — gloss` or `- [[slug|display]] — gloss`. The gloss is the text AFTER the em dash
`—` (U+2014). Translate it even when it looks like a paper title; that is the de/ko convention.

## Method (safe, gloss-only)
1. Read the brief + bucket JSON. Bucket gives `pages[].entries[] = {slug, gloss}` where `gloss`
   is the CURRENT English text. Baseline-run parity on every page first (must already be 0/0).
2. Extract each page's lede + `## Conceitos conectados` display labels to learn the page's own
   terminology/register before translating. Match it, don't impose your own.
3. Build a translation map keyed by `(page_slug, entry_slug)` (a slug can carry DIFFERENT glosses
   on different pages). Save it to a scratch JSON so it survives across calls.
4. Dry-run: for each entry regex `^(- \[\[<slug>(\|[^\]]*)?\]\] — )(.*)$` (re.M), assert exactly
   one match and that group(3) == bucket gloss. Preview old→new; fix any mismatch before writing.
5. Apply by SPANS ONLY: `raw = raw[:m.start(3)] + translation + raw[m.end(3):]`. This keeps the
   `- `, `[[slug]]`, any `|display`, and the ` — ` byte-identical and touches nothing else. Back up
   originals first. Skip writing a page whose entries are all proper-name keeps (no change).
6. Verify three ways: (a) line-diff backup vs new — only bucket gloss lines changed, prefixes and
   frontmatter identical, line count unchanged; (b) `python3 tooling/scripts/check-translation-parity.py
   --page <slug> --locales <loc>` still `0 failing, 0 warning(s)`; (c) re-grep each entry's line to
   confirm the intended translation is present and no listed English gloss remains.

## Keep in Latin (do NOT translate)
- Author-year parentheticals verbatim: `(An, McLaren & Stamper 2026)`, `(Yu, Liu & Zhu 2026)`.
  Translate only the description around them. A gloss may contain its OWN internal em dash +
  author-year (e.g. `Akçapınar (2026) — 44.2% ...`); preserve that internal structure too.
- Product/model/system names + acronyms: ChatGPT, LLM(s), VLM, IRT, STEM, K-12, NLP, LMS, VR,
  DINA, AutoML, GenAI, PBL, CT, SRL, HDIs, OCR, MUSE, CFES-P24, HiLLM-CD, EduClaw-Bench, etc.
- Figures as values; pt-BR decimal comma and thousands period are fine (44.2%→44,2%, 1,174→1.174).

## Proper-name glosses that STAY in English (validated vs de twins)
These whole glosses are project/product names — de keeps them, so keep them and flag as intentional
keeps, not missed translations: `Bots and Blocks`, `EduSim-LLM`, `RoboBlockly Studio`, `Teachy Mini`.
Partial keeps: `LLMs Unplugged:` (translate subtitle, keep ChatGPT), `Workforce Readiness Level`
framework, `Assessment Authentifire`, `Project Approach`. But `Pathways to Learning ...` IS
translated (de→Pfade, ko→경로): it's a descriptive title, not a name.

## pt-BR terminology that matched the corpus
aprendizagem (learning); letramento em IA / literacia de LLM multimodal (AI literacy); supervisão
(proctoring), exame supervisionado; concepções errôneas (misconceptions); rastreamento de
conhecimento; avaliação (assessment), avaliação autêntica; revisão de escopo (scoping review),
revisão sistemática, meta-análise; cadeia de pensamento (chain-of-thought); transformer lowercase;
texto para imagem (text-to-image); trabalho epistêmico (epistemic work); solucionador de problemas
(problem solver); tutoria inteligente afetiva; correção (grading); Olimpíada; cibersegurança;
ensino superior (higher ed); pensamento computacional; primeira infância (early childhood);
trabalho de campo (fieldwork); 'mão na massa' (hands-on); coaprendizagem (co-learning); agêntico
(agentic). Check de/ko twins when unsure whether a token is a name or a translatable word.

## Pitfalls
- Don't restamp `updated`/`source_updated`; the parent handles stamps centrally. Don't touch
  frontmatter, other prose, headings, or pages outside the bucket. No git/npm/astro/build.
- Key translations by (page,slug), not by slug alone — the same slug has different glosses on
  different pages (e.g. handwritten-math diagnosis is worded differently on cognitive-diagnosis
  vs multimodal).
- A naive 'no English remains' re-grep will flag the proper-name keeps; that's expected. Report
  them explicitly as de-consistent keeps so the parent doesn't read them as failures.
