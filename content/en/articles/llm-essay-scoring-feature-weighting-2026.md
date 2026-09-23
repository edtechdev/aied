---
title: "Opening the Blackbox of LLM-Based Automated Essay Scoring: Insights into Feature Weighting Patterns and Score Validity"
created: "2026-09-01T09:45:00-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
technology: [educational-nlp, llm]
assessment: [assessment-validity, automated-essay-scoring]
methods: [benchmark]
audience: [researchers, assessment designers]
level: [higher ed]
sources: ["raw/papers/llm-essay-scoring-feature-weighting-2026.md"]
confidence: high
discipline: [writing education, language learning]
page_kind: [evaluation]
---

> **Synthesis:** Wang, Chen, Huang, and Lai (2026) systematically compare the scoring behavior of three LLMs (Qwen, GPT, and Gemini) with human raters on [[language-learning|English]] essays written by non-native learners. Analyzing sixteen textual features, they find strong overall alignment but distinct feature weighting patterns: the LLMs placed greater emphasis on grammatical accuracy, lexical sophistication, and syntactic complexity, while human raters prioritized content completeness and visual presentation with greater tolerance for minor linguistic errors. Across proficiency levels, human raters exhibited a more stable scoring framework, while LLMs showed larger cross-group shifts — placing more weight on language errors for low-proficiency students and increasingly rewarding linguistic sophistication for high-proficiency students.

## Key Findings

- Three LLMs (Qwen, GPT, Gemini) showed strong overall score alignment with human raters but distinct feature weighting patterns.
- LLMs emphasized grammatical accuracy, lexical sophistication, and syntactic complexity; human raters prioritized content completeness and visual presentation.
- Human raters exhibited a more stable scoring framework across proficiency levels; LLMs showed larger cross-group shifts.
- LLMs placed more weight on language errors for low-proficiency students and increasingly rewarded linguistic sophistication for high-proficiency students.
- LLMs integrated multiple features when scoring, with integration patterns varying by proficiency level.

## What this means for practice

- **Assessment designers.** Position the LLM as a secondary rater rather than a substitute — appropriate for first-round [[automated-essay-scoring|essay scoring]] in low-stakes contexts, with borderline essays flagged and routed to teachers.
- **Instructors.** Constrain prompts to state acceptable error tolerance and to suppress automatic rewards for syntactic complexity, protecting low-proficiency writers from over-penalization.
- **Assessment designers.** Score content fulfillment and language quality through separate channels so that surface accuracy does not dictate the final judgment.
- **Researchers.** Audit feature-weighting patterns by proficiency group before reusing a model across student populations, because LLM weights shifted more across groups than human raters' weights did.

## Limitations

- The corpus comprised 505 exam-oriented essays from Grade 11 students in a single Chinese province, restricting generalizability across proficiency levels, genres, and cultural contexts.
- The writing task was short and narrowly defined by standardized examination purposes, which may amplify task completion and surface linguistic form while limiting observable variation in organization and cohesive device use.
- The sample size is moderate, which the authors state limits statistical power for finer subgroup analyses and robustness checks, and the linear models used may oversimplify complex judgment.
## Connected Concepts
- [[automated-essay-scoring]]
- [[llm]]
- [[educational-nlp]]
- [[assessment-validity]]
- [[writing-education]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]

## Connected Articles
- [llm-essay-assessment-framework-reliability-2026] — framework for evaluating LLMs in essay assessment
- [llms-do-not-grade-essays-like-humans-2026] — LLMs do not grade essays like humans
- [ai-scoring-language-bias-physics] — language bias in AI-based scoring
- [choi-anchor-aes-prompting-2025] — anchor-paper prompting for AES

## Citation
Wang, M., Chen, Y., Huang, X., & Lai, Y. (2026). [Opening the blackbox of LLM-based automated essay scoring: Insights into feature weighting patterns and score validity](https://doi.org/10.1016/j.caeai.2026.100568). *Computers and Education: Artificial Intelligence, 10*, 100568.
