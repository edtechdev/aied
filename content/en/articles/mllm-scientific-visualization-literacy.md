---
title: Benchmarking Multimodal Large Language Models for Scientific Visualization Literacy
created: "2026-07-17T04:33:04-04:00"
updated: "2026-09-20T03:45:11-04:00"
type: article
foundations: [ai-literacy]
technology: [generative-ai, llm, visualization, open-source]
assessment: [formative-assessment]
audience: [researchers, software developers]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2607.15176.md']
confidence: high
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** [[multimodal]] large language models (MLLMs) are increasingly used to interpret visualizations, yet most evaluations remain chart-centric and offer limited insight into **scientific [[visualization]] (SciVis) literacy**. This study [[benchmark|benchmarks]] six MLLMs (three closed-source, three [[open-source]]) on a standardized SciVis literacy assessment — 49 items spanning 18 scientific visualizations, 8 techniques, and 11 task types — and compares model performance against data from 485 human participants.

Results show MLLMs do **not** exhibit uniform SciVis literacy. Gemini is the strongest model overall, exceeding the human mean on several evaluated subsets, while all open-source models fall below the human baseline. Performance is highly uneven across techniques and tasks: models do best on scientific illustration, search, and spatial understanding, but struggle on texture-based and integration-based visualizations and on fine-grained [[quantitative-research|quantitative]] estimation. For [[stem-education]], this delineates where AI can responsibly support interpretation of scientific figures versus where it remains unreliable. The work contributes a reusable benchmark methodology and underscores that current [[generative-ai]] multimodal systems should not be treated as substitutes for human [[ai-literacy]] in reading scientific visualizations — a finding relevant to assessment design in [[higher-ed]] and to [[formative-assessment]] of visualization competence.

## What this means for practice

- **Instructors.** Assign multimodal model interpretation where the benchmark shows real strength — scientific illustration, visual search, and spatial understanding — and require human verification for texture-based and integration-based visualizations and for fine-grained quantitative estimation.
- **Instructors.** Do not let students outsource the reading of scientific figures: only Gemini-3.1-Pro-Preview exceeded the human mean (88.6% vs. 75.9% overall), while every open-weight model fell below it (Qwen3.5-9B 68.8%, InternVL3.5-8B 64.3%, LLaVA-OneVision-1.5-8B-Instruct 64.1%).
- **Researchers.** Reuse the SVLAT item design — 49 items spanning 18 scientific visualizations, 8 techniques, and 11 task types — as a shared evaluation target, and report per-technique and per-task accuracy rather than one aggregate score.
- **Software developers.** Budget for a closed frontier model when scientific-figure comprehension is the requirement: GPT-5.4 and Claude-Opus-4.6 had to be scored on animation items by frame extraction, and Claude was the lowest scorer of all models and humans on those items (59.3%).
- **Researchers.** Treat these numbers as dated by model generation. The authors' conclusion is that current systems are selectively capable rather than broadly literate, so re-run the benchmark before relying on any vendor claim.

## Limitations

- The evaluation rests on a single [[benchmark]] (SVLAT) and a single standardized prompt format, with each model run 10 times, so results do not generalize to other SciVis instruments, prompt formulations, or tool-use settings.
- Some task categories are represented by only one or two items, which limits the reliability of per-task estimates and may not capture the range of difficulty within those tasks.
- GPT-5.4 and Claude-Opus-4.6 were evaluated on animation items via frame extraction because their APIs did not support direct video input at the time, so their animation scores — including Claude's 59.3% — partly reflect that extraction method.
- The open-source comparison is limited to lightweight 8-9B models, and the human reference is the 485 non-expert participants of the original SVLAT tryout rather than a matched expert sample.

## Connected Concepts

- [[stem-education]]
- [[generative-ai]]
- [[ai-literacy]]
- [[higher-ed]]
- [[formative-assessment]]
- [[benchmark]]
- [[multimodal]]
- [[llm]]
## Connected Articles

- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework
- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[llm-psychometric-calibration-cdp]] — Aligning LLM-Simulated and Human Examinees for Psychometric Calibration: A Cognitive Diagnostic Profiling Approach
- [[authentic-products-authenticated-processes-2026]] — From authentic products to authenticated processes: authentic assessment in AI-rich higher education

## Citation

Patrick Phuoc Do, Chau M. Ta, Chaoli Wang (2026). [Benchmarking Multimodal Large Language Models for Scientific Visualization Literacy](https://arxiv.org/abs/2607.15176).
