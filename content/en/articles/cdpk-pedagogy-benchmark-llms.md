---
title: "Benchmarking the Pedagogical Knowledge of Large Language Models"
created: "2026-08-15T15:31:07-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
foundations: [teacher-role, teacher-ai-competency]
technology: [llm]
assessment: [educational-measurement]
pedagogy: [professional-training]
audience: [instructors, software developers]
level: [k 12, special education]
page_kind: [evaluation]
sources: ['raw/papers/cdpk-pedagogy-benchmark-llms.md']
confidence: high
methods: [ai-ed-evaluation, benchmark]
---

> **Synthesis:** Lelièvre et al. (2025) introduce **[The Pedagogy Benchmark](https://www.fab-ai.org/initiatives/ai-for-education/edtech-quality/benchmarks?benchmark=CDPK)**, two multiple-choice [[benchmark|benchmarks]] that evaluate [[llm|large language models]] on their understanding of *[[pedagogy|teaching]]* rather than content knowledge: **Cross-Domain Pedagogical Knowledge (CDPK)** and **[[special-education|Special Educational Needs & Disability]] (SEND)** pedagogy. Both are built on a curated set of questions from professional [[teacher-ai-competency|teacher-development]] exams by the Chilean Ministry of Education's Education Quality Agency and CP EIP, translated from Spanish. Across **97 models**, CDPK accuracy ranged from 28% (Llama-3.2 1B) to 89% (Gemini 2.5 Pro). The authors analyze accuracy vs. inference cost (the Pareto "value frontier") and vs. model size, charting rapid progress over 18 months, and provide online leaderboards for interactive exploration.

## Key Findings

- **The Pedagogy Benchmark** (CDPK + SEND) tests pedagogical knowledge — [[teacher-role|teaching]] strategies, [[assessment]] methods, and specialist SEND pedagogy — using genuine Chilean teacher-exam questions, curated for cross-cultural validity.
- **Wide spread across 97 models:** CDPK 28%–89%; SEND 29%–86%. Closed-source reasoning models dominate the top 10; open-weight DeepSeek R1 reached 86.65%.
- **Reasoning helps:** most top performers are inference-time chain-of-thought/thinking models, indicating reasoning improves performance even on knowledge-style benchmarks.
- **Cost–accuracy value frontier:** at \$0.10/M input tokens, CDPK accuracy rose from ~50% (Apr 2024) → 70% (Nov 2024) → 82% (Jun 2025). Open Qwen-3 8B at 3.5¢ now nearly matches the best April-2024 closed model (76%) at >400x lower cost.
- **Estimated human baseline ≈ 50%** (from 25,000+ Chilean teachers, 2017–2021) — many LLMs now exceed this estimate on CDPK.
- **Efficiency frontier by size:** performance drops sharply below ~8B parameters; smaller models excel mainly in the least-challenging (Technology/General) categories, while top models are more versatile across subjects.
- **Knowledge ≠ practice:** the benchmarks measure pedagogical *knowledge* only; they cannot capture classroom management, teacher–student relationships, or [[motivation|motivating learners]].

## What this means for practice

- **Instructors.** Choose a model for the pedagogical job with the cost–accuracy value frontier rather than by leaderboard rank: the gap between first and second place on CDPK is under 1%, while at roughly 10 cents per million input tokens accuracy climbed from about 50% (April 2024) to 82% (June 2025).
- **Instructors.** Treat a high CDPK score as a starting point for selecting tools, not as evidence of teaching judgment: the estimated human baseline of about 50% comes from 25,000+ Chilean teachers, and knowledge benchmarks cannot cover classroom management, teacher–student relationships, or motivating learners.
- **Designers.** Benchmark your candidate models before shipping a lesson-planning, assessment-support, or professional-learning tool, since accuracy across 97 models spreads from 28% to 89% on CDPK and 29% to 86% on SEND.
- **Designers.** Test small on-device models where connectivity and hardware are limited: Liquid AI's LFM-7B reached 61% for 1¢ per million tokens and Gemma-3n E4B 64%, though performance drops sharply below roughly 8B parameters.
- **Administrators.** Pair deployment with [[human-in-the-loop-ai|human-in-the-loop]] review wherever a model's pedagogical knowledge score approaches or passes the human baseline, to avoid [[cognitive-offloading|over-reliance]] and an illusion of expertise among teachers.

## Limitations

- Rank order is not resolvable at the top: with bootstrap confidence intervals and repeated runs, the difference between the first- and second-place models is less than 1%, though differences across the full range are robust.
- Every question comes from a single source — the Chilean Ministry of Education's teacher-development exams — and all items were translated from Spanish into English, so pedagogical priorities valued elsewhere and translation nuance may be misrepresented; comparable exams from other countries were not openly licensed.
- One standardized few-shot prompt (three fixed examples) was used for all 97 models, a setting the authors note may handicap reasoning models, which have a separate output space.
- The benchmarks are static multiple-choice knowledge items: they cannot test generating a lesson plan, differentiating materials, or scaffolding a student turn by turn, and because CDPK and SEND results correlate highly the authors cannot be certain they isolate pedagogical knowledge rather than general MCQ ability; the ~50% human figure is an estimate from whole exams, not question-level data.

## Connected Concepts

- [[benchmark]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[teacher-role]]
- [[teacher-ai-competency]]
- [[professional-training]]
- [[k-12]]
- [[special-education]]
- [[llm]]
- [[ai-literacy]]
- [[educational-policy-ai]]
- [[open-source]]

## Connected Articles

- [[teachbench-llm-teaching-evaluation]] — TeachBench: evaluating LLM teaching ability
- [[teaching-monster-pck-benchmark-2026]] — Teaching Monster Challenge: benchmark of pedagogical content knowledge
- [[eduagentbench-agent-teaching-benchmark]] — EduAgentBench: agent teaching benchmark
- [[elbench-education-llm-benchmark-2026]] — ELBench: education LLM benchmark
- [[tutoring-effectiveness-index]] — The Tutoring Effectiveness Index

## Citation

Lelièvre, M., Waldock, A., Liu, M., Valdés Aspillaga, N., Mackintosh, A., Ogando Portelo, M. J., Lee, J., Atherton, P., Ince, R. A. A., & Garrod, O. G. B. (2025). [*Benchmarking the pedagogical knowledge of large language models*](https://arxiv.org/abs/2506.18710v1). Leaderboard: The Pedagogy Benchmark.
