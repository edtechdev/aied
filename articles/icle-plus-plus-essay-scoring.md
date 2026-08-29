---
title: "ICLE++: Modeling Fine-Grained Traits for Holistic Essay Scoring"
created: "2026-07-31T04:33:04-04:00"
updated: "2026-08-10"
type: article
tags: [automated-essay-scoring, automated-assessment, benchmark, educational-measurement, formative-assessment, higher-ed, llm, writing-education]
audience: [software developers]
research_method: [benchmark, educational measurement]
discipline: [writing education]
level: [higher ed]

sources: ['raw/papers/2607.27671.md']
confidence: high
---
Introduces ICLE++, a new annotated corpus of persuasive student essays that addresses critical limitations of the dominant ASAP benchmark in [[automated-essay-scoring]] research. Unlike ASAP — used by virtually all recent AES models but limited to U.S. grade 7–10 native-English essays — ICLE++ provides both holistic scores and fine-grained trait-specific annotations, enabling evaluation of cross-corpus generalization, multi-trait scoring, and cross-prompt scoring. The authors demonstrate that models trained on trait-specific annotations transfer better across corpora than those trained on holistic scores alone, making ICLE++ a foundational resource for the next generation of AES research.
## Key Contributions
- **New annotated corpus:** ICLE++ provides persuasive student essays annotated with holistic scores and multiple trait-specific scores, filling a gap left by the field's over-reliance on ASAP
- **Cross-corpus generalization:** Models trained on ASAP often fail to generalize to other corpora (e.g., TOEFL essays by English learners, essays written without time constraints) — ICLE++ enables systematic evaluation of this transfer
- **Trait-level scoring advances:** Fine-grained trait annotations support multi-trait scoring and cross-prompt scoring, moving AES beyond single holistic score prediction
- **Addresses ASAP limitations:** ASAP's confounding variables — essay length as a proxy for quality in timed settings, native-speaker-only population — are well-documented; ICLE++ provides a complementary benchmark
## Implications for AI in Education
ICLE++ strengthens the [[automated-essay-scoring]] research ecosystem by providing a second major annotated corpus that can test whether AES advances generalize beyond ASAP. This connects directly to [[assessment-validity]] concerns: if models trained on one corpus fail on another, their scores are not valid measures of writing quality. The trait-specific annotations also enable more diagnostically useful AES — rather than a single score, systems can report strengths and weaknesses across specific writing dimensions, supporting [[formative-assessment]] and connecting to psychometric frameworks like [[item-response-theory]].
The work complements [[psyscore-essay-scoring-zpd-feedback]]'s psychometrically-aware trait scoring and [[choi-anchor-aes-prompting-2025]]'s finding that prompting-based AES with anchor papers approaches human reliability. While Choi et al. show what prompting can achieve holistically, ICLE++ provides the annotated data needed to evaluate whether trait-level scoring generalizes — a question also explored by [[self-referential-l2-writing-llm-assessment]] for L2 learners. The cross-corpus generalizability question likewise connects to [[ai-scoring-language-bias-physics]]'s finding that AI scoring systematically underestimates linguistically diverse students, and to [[aiawe-automated-writing-evaluation]]'s demonstration that open-source models can achieve strong AES performance on specific datasets.
## Connected Concepts
- [[automated-essay-scoring]]
- [[automated-assessment]]
- [[writing-education]]
- [[benchmark]]
- [[formative-assessment]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[item-response-theory]]
- [[higher-ed]]
## Connected Articles
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[choi-anchor-aes-prompting-2025]]
- [[ai-scoring-language-bias-physics]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]
## Citation

Shengjie Li, Vincent Ng (2026). [ICLE++: Modeling Fine-Grained Traits for Holistic Essay Scoring](https://arxiv.org/abs/2607.27671).
