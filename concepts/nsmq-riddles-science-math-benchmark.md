---
title: "NSMQ Riddles: A Benchmark of Scientific and Mathematical Riddles for Quizzing Large Language Models"
created: 2026-05-08
updated: 2026-05-11
type: concept
tags: [benchmark, stem-education, k-12, llm, efficacy-study]
sources: [raw/papers/2605.07051.md]
confidence: medium
---

# NSMQ Riddles: Educational Benchmark from Ghana

## Core Contribution

Boateng et al. (2026) introduce **NSMQ Riddles**, a benchmark of 1.8K scientific and mathematical riddles drawn from 11 years of Ghana's **National Science and Maths Quiz** — a live TV competition for senior secondary school students. This is one of the first AI benchmarks originating from the **Global South** for educational evaluation.

## Why It's Distinctive

Unlike standard [[benchmark]] datasets (MMLU, GSM8K), NSMQ Riddles:
- Features **progressive clue revelation** — early clues are vague (worth more points), testing incremental reasoning
- Covers **biology, chemistry, physics, and math** at the high school level
- Evaluates models against **human student performance** in a competitive format
- Represents African educational content, addressing geographic bias in [[ai-k12-evidence-base]]

The benchmark found that even state-of-the-art models (GPT-5.4, Gemini 3.1 Pro, Claude Opus 4.6) **underperform the best student contestants**, highlighting gaps in LLM scientific reasoning.

## Connections to Wiki

This benchmark connects to [[teachbench-llm-teaching-evaluation]] as another syllabus-grounded evaluation framework, but from a Global South perspective. It complements the [[educational-vlm-evaluation]] work on DrawEduMath by providing a text-based STEM reasoning benchmark. The focus on competitive quizzing connects to [[automated-question-generation]] research and [[civic-education-ai-lesson-plans]] concerns about AI-generated educational content quality.

The finding that LLMs lag behind top human students on these riddles reinforces [[tutoring-specific-vs-general-ai]] concerns — general LLMs may not match specialized educational needs, especially in non-Western contexts.

## Open Questions

- How well do [[pedagogical-llm-training]] approaches like EduQwen perform on NSMQ compared to general LLMs?
- Can the benchmark be extended to other African and Global South educational systems?
- What does the clue-progression format reveal about LLM reasoning vs. retrieval?

## Citation

al, A.G.B.N.I.S.J.E., and, N.R.A.B.O.S., Large, M.R.F.Q., Models, L., Yeboah3,4, P.A.J.A.M.K.T., and, W.E.A.K.M.N.S.Y., Kumbol2,3, V., & Zurich, E. (2026). [*NSMQ Riddles: A Benchmark of Scientific and Mathematical Riddles for Quizzing Large Language Models*](https://arxiv.org/abs/2605.07051)

## Related Pages
- [[benchmark]]
- [[ai-k12-evidence-base]]
- [[teachbench-llm-teaching-evaluation]]
- [[educational-vlm-evaluation]]
- [[tutoring-specific-vs-general-ai]]
- [[automated-question-generation]]
- [[pedagogical-llm-training]]
- [[civic-education-ai-lesson-plans]]
- [[stem-education]]
- [[k-12-ai-education]]