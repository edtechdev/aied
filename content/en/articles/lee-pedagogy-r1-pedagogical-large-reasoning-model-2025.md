---
title: "Pedagogy-R1: Pedagogical Large Reasoning Model and Well-balanced Educational Benchmark"
created: "2026-09-24T03:04:26-04:00"
updated: "2026-09-24T03:04:26-04:00"
type: article
sources: ['raw/papers/lee-pedagogy-r1-pedagogical-large-reasoning-model-2025.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
foundations: [teacher-role]
pedagogy: [scaffolding, metacognition]
technology: [llm, generative-ai, machine-learning, pedagogical-llm-training, prompt-engineering]
ethics: [legal-issues-and-risks]
research_method: [system development, design and evaluation study, thematic analysis]
discipline: [learning sciences]
audience: [researchers, educational technology developers]
level: [k 12, higher ed]
page_kind: [evaluation]
---

> **Synthesis:** Lee and colleagues (2025) argue that fluency in answering is not the same as reasoning like a teacher, and that large reasoning models, strong in mathematics and programming, had barely been adapted to education. They present Pedagogy-R1, 1.5B and 7B models instruction-tuned on pedagogically filtered outputs distilled from a QwQ-32B teacher, plus Chain-of-Pedagogy (CoP) prompting, a pedagogical rewrite of the request to reason step by step. The Well-balanced Educational Benchmark then tests that training across five dimensions: subject knowledge, pedagogical knowledge, knowledge tracing, essay scoring, and real-world teacher decision-making. On the pedagogical dimensions the small tuned models beat larger baselines, including a 31.34 point gain in decision-making for the 7B model, while conceding subject knowledge; every language model still trails classical knowledge tracing models sharply. The reasoning traces supply the caution: without CoP, no self-questioning or meta-evaluation appeared at all, and about 65 percent of thought tokens were filler.

## Key Findings

- **Pedagogically filtered tuning lifts the pedagogical dimensions.** Pedagogy-R1-7B beats its instruction-tuned baseline by 6.49 points in pedagogical knowledge, 8.75 in essay scoring, and 31.34 in decision-making.
- **Subject knowledge is the trade-off.** The same model falls 2.49 points in subject knowledge, and both tuned sizes sit near 24 to 27 percent against 45.96 for o4-mini.
- **Reasoning models still trail knowledge tracing specialists.** DKT and AKT reach 77.55 and 79.31 AUC, while every language model tested lands between roughly 49 and 65.
- **CoP changes reasoning style, not just correctness.** Self-questioning and planning codes rise and rubric-heavy reflection falls, while one CoP-distilled variant gains 33.11 accuracy points in knowledge tracing.
- **Without CoP, metacognition is absent.** No self-questioning or meta-evaluation codes appeared across any of the 42 baseline traces, and both surfaced only sparsely once pedagogical prompting was applied.
- **Most reasoning tokens were filler.** About 65 percent were coded as noise, mainly repeated item stems and generic remarks, and underthinking ran high in essay scoring and pedagogy.

## Training a pedagogical reasoning model

The pipeline follows DeepSeek-R1's distillation recipe with a pedagogical filter. The researchers held out 80 percent of benchmark items, sampled 5,000 seeds, and had QwQ-32B generate teacher responses; only responses verified correct survived, yielding 1,948 training examples. Those examples instruction-tuned two distilled students, DeepSeek-R1-Distill-Qwen-1.5B and its 7B sibling, producing Pedagogy-R1-1.5B and Pedagogy-R1-7B, with CoP-distilled variants trained separately. CoP is a single deliberate change: replace please reason step by step with a request to consider the pedagogical step by step, selected through GPT-assisted proposals and manual inspection, and applied both to steer inference and to frame teacher rationales. Evaluation uses zero shot, five shot on suffixed splits, one pass without self-consistency, temperature 0.6 to 0.7, and a fixed seed.

## The Well-balanced Educational Benchmark

WBEB exists because earlier educational benchmarks mostly measured content knowledge, ignoring feedback, scaffolding, and classroom discourse. Its five dimensions mix public and newly curated sources. Subject knowledge uses 805 multiple-choice items translated from Chinese junior high exams. Pedagogical knowledge uses 292 such items from Korean teacher certification exams, cleaned by OCR and translated, and these stay internal because the exams are copyright restricted; released models are trained without them. Knowledge tracing adds three sequence datasets of 3,146, 5,000, and 3,992 samples in zero-shot and five-shot forms. Essay scoring uses 3,462 essays from a 2024 Kaggle competition, and decision-making draws on 1,660 anonymized fourth and fifth grade math transcripts from the NCTE study, available only under data-sharing agreements.

## What the evaluation and traces showed

Pedagogy-R1-7B posted the best results in decision-making at 54.76 percent, pedagogical knowledge at 31.67, and essay scoring at 15.83, while the 1.5B model reached 30.60 in pedagogical knowledge and 52.57 AUC. Gains against plain instruction tuning were large, but a frontier model still led overall and knowledge tracing stayed the weakest dimension. The reasoning analysis measured how models spent thought tokens: counts were usually higher for wrong answers, and knowledge tracing consumed the most. CoP reduced tokens and underthinking in subject knowledge but sometimes raised both elsewhere. Two researchers coded 42 traces against Schon's reflection categories using a ten-code book, double-coding 33 percent; a model coded the rest. Filler loops and scarce meta-evaluation are as much the story as the scores.

## What this means for practice

- **Treat pedagogical alignment as a training target, not a prompt trick.** Most of the reported gain came from filtering training data, not scaling.
- **Read small tuned models as viable for narrow teaching tasks.** The decision-making and feedback gains arrive at 1.5B to 7B parameters, which matters for cost.
- **Do not read reasoning traces as explanations.** Filler loops occupied roughly two thirds of thought tokens, so trace length is not evidence of judgment.
- **Keep knowledge tracing with specialized models.** LLM next-token prediction remained far behind DKT and AKT, with no reason to displace them.

## Limitations

- **Restricted evaluation data.** The pedagogical knowledge items cannot be released, so that WBEB dimension cannot be reproduced independently, though released models were trained without them.
- **Machine-coded qualitative results.** Most traces were model-coded with no reported human agreement analysis; manual double-coding covered 14 of 42 traces.
- **Narrow coverage and one pass.** Five dimensions with modest item counts, single runs, and no test of other languages or grade bands.

## Connected Concepts

- [[benchmark]]
- [[pedagogical-llm-training]]
- [[prompt-engineering]]
- [[knowledge-tracing]]
- [[automated-essay-scoring]]
- [[scaffolding]]
- [[metacognition]]
- [[teacher-role]]
- [[llm]]
- [[legal-issues-and-risks]]
- [[ai-ed-evaluation]]

## Connected Articles

- [[cdpk-pedagogy-benchmark-llms]] — Benchmarking the Pedagogical Knowledge of Large Language Models
- [[lee-openlearnlm-benchmark-educational-llms-2026]] — OpenLearnLM Benchmark: A Unified Framework for Evaluating Knowledge, Skill, and Attitude in Educational Large Language Models
- [[elbench-education-llm-benchmark-2026]] — ELBench: A Multi-Dimensional Benchmark for Education-Facing Large Language Models

## Citation

Lee, U., Lee, J., Bae, J., Jeong, Y., Koh, J., Lee, G., Lee, G., Ahn, T., & Kim, H. (2025). [*Pedagogy-R1: Pedagogical Large Reasoning Model and Well-balanced Educational Benchmark*](https://doi.org/10.1145/3746252.3761133). Proceedings of the 34th ACM International Conference on Information and Knowledge Management (CIKM 2025), November 10-14, 2025, Seoul, Republic of Korea, ACM.