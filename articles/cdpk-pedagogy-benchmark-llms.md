---
title: "Benchmarking the Pedagogical Knowledge of Large Language Models"
created: "2026-08-15T15:31:07-04:00"
updated: "2026-08-22T19:45:00-04:00"
type: article
tags: [benchmark, ai-ed-evaluation, educational-measurement, llm, teacher-role, teacher-ai-competency, professional-training, k-12, special-education]
research_method: [benchmark, educational measurement]
audience: [instructors, software developers]
level: [k 12, special education]
category: [evaluation]
sources: ['raw/papers/cdpk-pedagogy-benchmark-llms.md']
confidence: high
---

## Summary

Lelièvre et al. (2025) introduce **[The Pedagogy Benchmark](https://www.fab-ai.org/initiatives/ai-for-education/edtech-quality/benchmarks?benchmark=CDPK)**, two multiple-choice [[benchmark|benchmarks]] that evaluate [[llm|large language models]] on their understanding of *[[pedagogy|teaching]]* rather than content knowledge: **Cross-Domain Pedagogical Knowledge (CDPK)** and **[[special-education|Special Educational Needs & Disability]] (SEND)** pedagogy. Both are built on a curated set of questions from professional [[teacher-ai-competency|teacher-development]] exams by the Chilean Ministry of Education's Education Quality Agency and CP EIP, translated from Spanish. Across **97 models**, CDPK accuracy ranged from 28% (Llama-3.2 1B) to 89% (Gemini 2.5 Pro). The authors analyze accuracy vs. inference cost (the Pareto "value frontier") and vs. model size, charting rapid progress over 18 months, and provide online leaderboards for interactive exploration.

## Key Findings

- **The Pedagogy Benchmark** (CDPK + SEND) tests pedagogical knowledge — teaching strategies, [[assessment]] methods, and specialist SEND pedagogy — using genuine Chilean teacher-exam questions, curated for cross-cultural validity.
- **Wide spread across 97 models:** CDPK 28%–89%; SEND 29%–86%. Closed-source reasoning models dominate the top 10; open-weight DeepSeek R1 reached 86.65%.
- **Reasoning helps:** most top performers are inference-time chain-of-thought/thinking models, indicating reasoning improves performance even on knowledge-style benchmarks.
- **Cost–accuracy value frontier:** at $0.10/M input tokens, CDPK accuracy rose from ~50% (Apr 2024) → 70% (Nov 2024) → 82% (Jun 2025). Open Qwen-3 8B at 3.5¢ now nearly matches the best April-2024 closed model (76%) at >400x lower cost.
- **Estimated human baseline ≈ 50%** (from 25,000+ Chilean teachers, 2017–2021) — many LLMs now exceed this estimate on CDPK.
- **Efficiency frontier by size:** performance drops sharply below ~8B parameters; smaller models excel mainly in the least-challenging (Technology/General) categories, while top models are more versatile across subjects.
- **Knowledge ≠ practice:** the benchmarks measure pedagogical *knowledge* only; they cannot capture classroom management, teacher–student relationships, or [[motivation|motivating learners]].

## Implications

- Offers education-focused benchmarks to guide **model selection** for LLM-based tools (lesson-planning, assessment support, professional-learning platforms), balancing pedagogical performance against cost and deployment constraints.
- **On-device/efficient models matter for [[global-south|LMIC]] contexts** (e.g., Liquid AI LFM-7B at 61% for 1¢/Mtoken; Gemma-3n E4B at 64%) where connectivity and hardware are limited.
- As models approach/exceed human performance on knowledge benchmarks, **responsible deployment** (ethical guardrails, [[human-in-the-loop-ai|human-in-the-loop]] systems) is needed to avoid [[cognitive-offloading|over-reliance]] and illusion of expertise among teachers.
- The online leaderboard supports interactive, value-aware model comparison: https://www.fab-ai.org/initiatives/ai-for-education/edtech-quality/benchmarks

ty/benchmarks

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

## Connected Articles

- [[teachbench-llm-teaching-evaluation]] — TeachBench: evaluating LLM teaching ability
- [[teaching-monster-pck-benchmark-2026]] — Teaching Monster Challenge: benchmark of pedagogical content knowledge
- [[eduagentbench-agent-teaching-benchmark]] — EduAgentBench: agent teaching benchmark
- [[elbench-education-llm-benchmark-2026]] — ELBench: education LLM benchmark
- [[tutoring-effectiveness-index]] — The Tutoring Effectiveness Index

## Citation

Lelièvre, M., Waldock, A., Liu, M., Valdés Aspillaga, N., Mackintosh, A., Ogando Portelo, M. J., Lee, J., Atherton, P., Ince, R. A. A., & Garrod, O. G. B. (2025). [*Benchmarking the pedagogical knowledge of large language models*](https://arxiv.org/abs/2506.18710v1). Leaderboard: [The Pedagogy Benchmark](https://www.fab-ai.org/initiatives/ai-for-education/edtech-quality/benchmarks?benchmark=CDPK).
