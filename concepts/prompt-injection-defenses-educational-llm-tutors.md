---
title: "Evaluating Prompt Injection Defenses for Educational LLM Tutors: Security-Usability-Latency Trade-offs"
created: 2026-05-15
updated: 2026-05-15
type: concept
tags: [intelligent-tutoring, llm, generative-ai, regulation, hallucination-risk]
sources: [raw/papers/2605.06669.md]
confidence: medium
---

# Evaluating Prompt Injection Defenses for Educational LLM Tutors: Security-Usability-Latency Trade-offs

Evaluating Prompt Injection Defenses for Educational LLM Tutors: Security-Usability-Latency Trade-offs
**Maiorano (2026)** — arXiv cs.CR/cs.AI.
📄 [Full text (arXiv)](https://arxiv.org/abs/2605.06669)

## Summary

This paper addresses a fundamental tension in educational LLM deployment: tutors must be both **secure** (resist prompt injection attacks) and **usable** (not block legitimate educational interactions). The author presents a systematic evaluation methodology using a **480-query benchmark** (369 injection, 111 benign) with statistically rigorous comparison.

**Defense methods compared:**

| Method | Bypass Rate | False Positive Rate | Latency |
|--------|-------------|---------------------|---------|
| Proposed Multi-Layer Pipeline | 46.34% | **0.00%** | **2.50ms** |
| Prompt Guard (Meta) | 38.48% | 3.60% | — |
| NeMo Guardrails (NVIDIA) | **0.0%** | 16.22% | 1.3s |

**The proposed pipeline** combines deterministic pattern filters, structural validation, contextual sandboxing, and session-level behavioral checks. Its design prioritizes **pedagogical usability** — zero false positives means no legitimate student queries get blocked, an essential requirement for [[intelligent-tutoring]] systems where interruptions harm learning.

**NeMo Guardrails** blocks all attacks but incorrectly flags ~16% of benign requests — a rate that would seriously degrade the [[student-experience]] in real tutoring sessions. **Prompt Guard** provides middle-ground performance.

The framework enables **evidence-based guardrail selection** under institutional risk and usability requirements. This directly connects to [[ai-tutor-safety-harms]] concerns and the emerging field of [[pedagogical-safety-rl]]. The latency dimension is particularly important for real-time [[conversational-ai-tutors-framework]] where response delays degrade engagement.

The paper highlights that **educational settings have unique requirements**: false positives are more costly than in general-purpose chatbots, because blocking a student's learning interaction carries pedagogical harm. This aligns with findings in [[eduframetrap-llm-sycophancy-educational-safety]] that educational safety requires domain-specific benchmarks.

## Related Pages
- [[ai-tutor-safety-harms]] — Safety harms in AI tutoring systems
- [[pedagogical-safety-rl]] — Pedagogical safety in RL
- [[intelligent-tutoring]] — Intelligent tutoring systems
- [[conversational-ai-tutors-framework]] — Conversational AI tutoring
- [[eduframetrap-llm-sycophancy-educational-safety]] — Sycophancy as safety risk
- [[student-experience]] — Student experience with AI
- [[regulation]] — AI regulation in education

## Citation
**APA:** Maiorano, A. C. (2026). *Evaluating prompt injection defenses for educational LLM tutors: Security-usability-latency trade-offs*. arXiv:2605.06669.
