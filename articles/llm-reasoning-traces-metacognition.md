---
title: Explaining Too Much? Understanding How Large Language Model Reasoning Traces Influence Performance and Metacognition
created: 2026-05-26
updated: 2026-05-26
type: article
tags: [llm, metacognition, student-experience, efficacy-study, over-reliance, self-regulated-learning, scaffolding]
sources: ['raw/papers/2605.25856.md']
confidence: high
---

> **Fernandes, Buschek, Tankelevitch, Kosch & Welsch (2026)** — University of Bayreuth, Microsoft Research.

# LLM Reasoning Traces & Metacognition

This preregistered between-subjects study (N=559) provides the first rigorous evidence that [[llm]] reasoning traces — increasingly common in AI interfaces — do not improve performance and can actively impair it. More critically, they create a dangerous [[metacognition|metacognitive]] blind spot: participants substantially overestimate their performance regardless of trace format.

## Key Findings
- **Summary traces** preserved task performance at the no-trace baseline while elevating trust and hedonic appeal — changing how users *feel* without helping them perform.
- **Full traces** from a verbose open-weight model actually *impaired* performance relative to answer-only baselines.
- **No trace format** supported calibrated self-evaluation — metacognitive overestimation was universal.
- **Hedonic appeal**, not trust, carried the indirect path to overestimation, consistent with a processing-fluency account: the pleasant experience of reading traces inflates confidence without improving understanding.

## Connection to AIED
These findings have profound implications for [[intelligent-tutoring]] and [[ai-peer-feedback-systems|AI feedback systems]]. If students feel more confident after seeing AI reasoning but don't actually learn better, then simply exposing AI reasoning in educational interfaces may create an [[over-reliance]] trap. The paper's recommendation — that calibration should be scaffolded by interactions that elicit users' own reasoning first — directly aligns with [[self-regulated-learning]] principles and [[cognitive-offloading-speedup-illusion|cognitive offloading research]] showing that AI use can reduce active engagement.

## Contrast with Assessment Governance
While [[genai-assessment-governance|GenAI assessment governance]] focuses on *when* to allow AI in evaluation, this paper addresses *how* AI explanations affect learning — suggesting that even well-designed AI transparency features can backfire without metacognitive scaffolding.

## Connected Concepts

- [[llm]]
- [[metacognition]]
- [[intelligent-tutoring]]
- [[over-reliance]]
- [[self-regulated-learning]]
## Connected Articles

- [[ai-peer-feedback-systems]]
- [[cognitive-offloading-speedup-illusion]]
- [[genai-assessment-governance]]
## Citation

Fernandes, D., Buschek, D., Tankelevitch, L., Kosch, T., & Welsch, R. (2026). [Explaining too much? Understanding how large language model reasoning traces influence performance and metacognition](https://arxiv.org/abs/2605.25856). arXiv:2605.25856. cs.HC.
