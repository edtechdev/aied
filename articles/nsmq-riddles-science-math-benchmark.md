---
title: "NSMQ Riddles: A Benchmark of Scientific and Mathematical Riddles for Quizzing Large Language Models"
created: "2026-05-08T04:33:04-04:00"
updated: "2026-08-28T00:00:00-04:00"
type: article
tags: [benchmark, stem-education, k-12, llm, pedagogical-llm-training, automated-question-generation, ai-education]
audience: [software developers]
research_method: [benchmark, experiment]
discipline: [stem education]
level: [k 12]
sources: ['raw/papers/2605.07051.md']
confidence: medium
---

> Boateng et al. (2026) introduce **NSMQ Riddles**, a benchmark of 1.8K scientific and mathematical riddles drawn from 11 years of Ghana's **National Science and Maths Quiz** — a live TV competition for senior secondary school students. This is one of the first AI benchmarks originating from the **Global South** for educational evaluation.

## Core Contribution

Boateng et al. (2026) introduce **NSMQ Riddles**, a benchmark of 1.8K scientific and mathematical riddles drawn from 11 years of Ghana's **National Science and Maths Quiz** — a live TV competition for senior secondary school students. This is one of the first AI benchmarks originating from the **Global South** for educational evaluation.

## Why It's Distinctive

Unlike standard benchmark datasets (MMLU, GSM8K), NSMQ Riddles:
- Features **progressive clue revelation** — early clues are vague (worth more points), testing incremental reasoning
- Covers **biology, chemistry, physics, and math** at the high school level
- Evaluates models against **human student performance** in a competitive format
- Represents African educational content, addressing geographic bias in [[stanford-evidence-base-ai-k12-2026]]

The benchmark found that even state-of-the-art models (GPT-5.4, Gemini 3.1 Pro, Claude Opus 4.6) **underperform the best student contestants**, highlighting gaps in LLM scientific reasoning.

## Connections to Wiki

This benchmark connects to [[teachbench-llm-teaching-evaluation]] as another syllabus-grounded evaluation framework, but from a Global South perspective. It complements the [[drawedumath-vlm-struggling-students-2026]] work on DrawEduMath by providing a text-based STEM reasoning benchmark. The focus on competitive quizzing connects to [[automated-question-generation]] research and [[civic-education-ai-lesson-plans]] concerns about AI-generated educational content quality.

The finding that LLMs lag behind top human students on these riddles reinforces [[stanford-evidence-base-ai-k12-2026]] concerns — general LLMs may not match specialized educational needs, especially in non-Western contexts.

## Open Questions

- How well do [[pedagogical-llm-training]] approaches like EduQwen perform on NSMQ compared to general LLMs?
- Can the benchmark be extended to other African and Global South educational systems?
- What does the clue-progression format reveal about LLM reasoning vs. retrieval?

## Connected Concepts

- [[automated-question-generation]]
- [[pedagogical-llm-training]]
- [[benchmark]]
- [[stem-education]]
- [[k-12]]
- [[equity-in-ai-education]]
- [[culturally-relevant-pedagogy]]
- [[ai-ed-evaluation]]
## Connected Articles

- [[stanford-evidence-base-ai-k12-2026]]
- [[teachbench-llm-teaching-evaluation]]
- [[drawedumath-vlm-struggling-students-2026]]
- [[civic-education-ai-lesson-plans]]
- [[elbench-education-llm-benchmark-2026]]
## Citation

Boateng, G., Ibrahim, N. D., John, S., et al. (2026). [*NSMQ Riddles: A Benchmark of Scientific and Mathematical Riddles for Quizzing Large Language Models*](https://arxiv.org/abs/2605.07051).
