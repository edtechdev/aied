---
title: "ELBench: A Multi-Dimensional Benchmark for Education-Facing Large Language Models"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-13"
type: article
tags: [benchmark, llm-evaluation, ai-ed-evaluation, pedagogical-safety, llm, safety, generative-ai]
sources: ['raw/papers/2608.09548.md']
confidence: high
---

> **Synthesis:** Jiang et al. (2026) introduce **ELBench**, the first benchmark to evaluate education-facing LLMs on all four required dimensions — General Capability, Safety and Trustworthiness, Basic Education, and High-Level Cultivation — under a common protocol, combining curated public sources with newly synthesized safety and cultivation data. Testing nine models, they find module-level profiles are more informative than a single aggregate: the top six models are statistically indistinguishable overall yet differ substantially by module leader, and safety is anti-correlated with practical teaching (r = −0.83). The two education-specialized models lead neither education module, and all models share a systematic blind spot on High-Level Cultivation's structured-judgment task. The work connects to [[benchmark]], [[ai-ed-evaluation]], and [[ai-ed-evaluation]] frameworks.

## An Integrated Profile, Not a Single Score

A usable education-facing model must be accurate, safe under sensitive prompts, instructionally useful, and aligned with pedagogical goals at the same time. Existing benchmarks evaluate these requirements largely in isolation; ELBench is the first to assess all four as an integrated profile under a common protocol.

## Three Findings

- **Module-level profiles beat a single aggregate:** the top six models are statistically indistinguishable on overall score, yet their module leaders differ substantially; safety is anti-correlated with practical teaching (r = −0.83).

- **Chinese-developed models lead the safety module**, the most discriminative in the suite; the advantage is largest on region-specific normative content and narrows (but does not vanish) on universal-harm content.

- **Education-specialized models lead neither education module**, and on High-Level Cultivation all models converge on the same non-reference option on the structured-judgment task, favoring pedagogical style over fit to the stated goal — a systematic blind spot.

## Connected Concepts

- [[benchmark]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[generative-ai]]
- [[llm]]
- [[ai-tutoring]]
- [[research-methods-aied]]
- [[educational-measurement]]

## Connected Articles

- [[teachbench-llm-teaching-evaluation]]
- [[eduagentbench-agent-teaching-benchmark]]
- [[ai-tutor-behavioral-evaluation]]
- [[solving-vs-evaluating-genai-solutions]]
- [[nsmq-riddles-science-math-benchmark]]
- [[academiclaw-student-agent-benchmark]]
- [[knowledge-distillation-ai-tutor-evaluation]]
- [[eduframetrap-llm-sycophancy-educational-safety]]

## Citation

Jiang, Y., Zhu, X., Tan, F., Zhang, Z., Huang, K., Yu, Y., Fei, Z., Luo, Y., Li, K., Hao, H., Zhai, G., & Zhou, A. (2026). [*ELBench: A multi-dimensional benchmark for education-facing large language models*](https://arxiv.org/abs/2608.09548). arXiv:2608.09548.
