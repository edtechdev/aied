---
title: "NSMQ Riddles: A Benchmark of Scientific and Mathematical Riddles for Quizzing Large Language Models"
created: "2026-05-08T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-education]
technology: [llm, pedagogical-llm-training]
assessment: [automated-question-generation]
audience: [software developers]
research_method: [experiment]
discipline: [stem education]
level: [k 12]
sources: ['raw/papers/2605.07051.md']
confidence: medium
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** Boateng et al. (2026) introduce **NSMQ Riddles**, a benchmark of 1.8K scientific and mathematical riddles drawn from 11 years of Ghana's **National Science and Maths Quiz** — a live TV competition for senior [[k-12|secondary school]] students. This is one of the first AI [[benchmark|benchmarks]] originating from the **[[global-south|Global South]]** for educational evaluation.

## Core Contribution

Boateng et al. (2026) introduce **NSMQ Riddles**, a benchmark of 1.8K scientific and mathematical riddles drawn from 11 years of Ghana's **National Science and Maths Quiz** — a live TV competition for senior secondary school students. This is one of the first AI benchmarks originating from the **Global South** for educational evaluation.

## Why It's Distinctive

Unlike standard benchmark datasets (MMLU, GSM8K), NSMQ Riddles:
- Features **progressive clue revelation** — early clues are vague (worth more points), testing incremental reasoning
- Covers **[[biology-education|biology]], [[chemistry-education|chemistry]], [[physics-education|physics]], and math** at the high school level
- Evaluates models against **human student performance** in a competitive format
- Represents African educational content, addressing geographic bias in [[stanford-evidence-base-ai-k12-2026]]

The benchmark found that even state-of-the-art models (GPT-5.4, Gemini 3.1 Pro, Claude Opus 4.6) **underperform the best student contestants**, highlighting gaps in [[llm]] scientific reasoning.

## Connections to Knowledge Base

This benchmark connects to [[teachbench-llm-teaching-evaluation]] as another syllabus-grounded evaluation framework, but from a Global South perspective. It complements the [[drawedumath-vlm-struggling-students-2026]] work on DrawEduMath by providing a text-based [[stem-education|STEM]] reasoning benchmark. The focus on competitive quizzing connects to [[automated-question-generation]] [[research-methods-aied|research]] and [[civic-education-ai-lesson-plans]] concerns about AI-generated educational content quality.

The finding that LLMs lag behind top human students on these riddles reinforces [[stanford-evidence-base-ai-k12-2026]] concerns — general LLMs may not match specialized educational needs, especially in non-Western contexts.

## Open Questions

- How well do [[pedagogical-llm-training]] approaches like EduQwen perform on NSMQ compared to general LLMs?
- Can the benchmark be extended to other African and Global South educational systems?
- What does the clue-progression format reveal about LLM reasoning vs. retrieval?

## What this means for practice

- **Developers.** Do not read benchmark-topping scores as instructional readiness: GPT-5.4 with high reasoning effort led the offline benchmark at 86.54% EM accuracy, yet in the real-time proxy the best LLM result of 75.64% EM accuracy and 366 points still trailed the best student teams at 78.21% EM accuracy and 377 points.
- **Developers.** Build practice items with progressive clue revelation, where earlier clues are vaguer and worth more (5 points on the first, 4 on the second, 3 thereafter), so that exercises reward incremental reasoning rather than a single retrieval step.
- **Developers.** Evaluate K-12 [[stem-education|STEM]] reasoning against a human baseline and on [[global-south|Global South]] content: NSMQ Riddles draws 1.8K riddles from 11 years of Ghana's National Science and Maths Quiz, a coverage that general benchmarks such as MMLU and GSM8K do not provide.
- **Developers.** Instrument how many clues a model needs as well as whether it answers correctly, since accuracy alone hides the difference between recognizing an answer early and arriving at it only after most of the riddle has been revealed.

## Limitations

- The real-time proxy evaluation used only one year of the NSMQ (2019) because annotations of the required metadata and compute resources were limited; the authors list more years as future work.
- That evaluation is a proxy rather than a true competition simulation: annotated audio of the contests was unavailable, and actual points depend on whether the student or the model answers first in a live round.
- The riddles appear publicly on YouTube, so contamination of model training data is possible; the authors state they did not assess it and list de-contamination analysis as future work.
- The student comparison uses retrospective real-world team performance rather than matched conditions, and only 156 riddles carried the metadata needed for the points analysis.

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
