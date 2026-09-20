---
title: "Distinguishing Artificial from Authentic: Evaluating LLMs for Detecting LLM-Generated Content"
created: "2026-07-24T04:33:04-04:00"
updated: "2026-09-20T03:45:11-04:00"
type: article
foundations: [academic-integrity]
technology: [llm]
assessment: [ai-detection]
audience: [software developers]
research_method: [benchmark]
level: [higher ed]
sources: ['raw/papers/2607.20446.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** As students increasingly use [[llm]]s to draft written responses and program code, this study asks whether LLMs can reliably detect their own generated content across educational task types — programming exercises, reflective writing, and short-answer questions. Using authentic student responses alongside multiple LLM-generated variants, the authors evaluate detection under varied [[prompt-engineering|prompting]] strategies and output formats. Detection proves **highly task-dependent**: it is substantially more reliable for programming tasks and longer reflective responses, but performs poorly for short-answer questions, where LLMs frequently judge their own outputs as *more* human-like than authentic student work. Prompt framing and response verbosity strongly affect detectability in reflective writing, with minor prompt variations sharply reducing accuracy, while programming detection is comparatively robust. The results highlight both the promise and the limits of LLM self-detection for [[academic-integrity]], cautioning against standalone reliance and complementing dedicated ai-detection and [[ai-detection]] work. They connect to identity-detection challenges in [[socially-fluent-ai-identity-detection]] and student-side dynamics in [[student-rationalization-ai-writing]].

## What this means for practice

- **Software developers.** Scope detection support to the formats it can actually handle: self-detection was most reliable for the two programming tasks and longer reflective responses, and failed outright on short-answer questions where authentic student answers were judged more LLM-like than generated ones.
- **Software developers.** Ask the detector for a likelihood estimate rather than a yes/no verdict, since graded outputs separated generated from authentic work more consistently while binary decisions misclassified generated responses across most task and prompt combinations.
- **Software developers.** Never present detection output as standalone evidence in [[academic-integrity]] decisions; small prompt variations sharply reduced accuracy in reflective writing, and the authors conclude that [[ai-detection]] should not be treated as a standalone evidence source.
- **Software developers.** Report detection performance per exercise type instead of one aggregate figure, because prompting conditions differed by task and the effects cannot be compared across types.

## Limitations

- Single detector: the results reflect one LLM-based detector and may not generalize to other detection models or non-LLM approaches.
- Single course context: one 12-week first-year engineering course at the University of Auckland, so student response styles and exam formats may differ in other settings.
- The evaluations rest on four exercises with n = 201 (programming 1), 870 (programming 2), 854 (short answer), and 846 (reflection) responses from 913 unique students, compared against 1,200 GPT-4o responses generated at 100 per prompt-exercise combination, so detection is tested against synthetic rather than organic AI use.
- Preprocessing and prompt conditions were task-specific: non-code content was stripped from generated programming outputs to match student submission format, and typos were varied for textual tasks while bugs were varied for programming tasks.

## Connected Concepts

## Connected Concepts

- [[llm]]
- [[academic-integrity]]
- [[ai-detection]]
- [[generative-ai]]

## Connected Articles

- [[socially-fluent-ai-identity-detection]]
- [[student-rationalization-ai-writing]]
## Citation

Leinonen & Denny (2026). [Distinguishing Artificial from Authentic: Evaluating LLMs for Detecting LLM-Generated Content](https://arxiv.org/abs/2607.20446). arXiv preprint (cs.CL).
