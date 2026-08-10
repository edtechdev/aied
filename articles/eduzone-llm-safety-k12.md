---
title: "EduZone: A Framework for Evaluating LLM Safety for K-12 Students and Teachers"
created: 2026-08-04
updated: 2026-08-04
type: article
tags: [llm, k-12, pedagogical-safety, ai-tutor-safety-harms, benchmark, ai-governance-education]
sources: ['raw/papers/2608.02024.md']
confidence: high
---

> **EduZone is an automated evaluation framework that generates contextually grounded adversarial interactions to probe LLM safety in K-12 education, revealing that models are more vulnerable to education-specific harms and dynamic multi-turn conversations than existing guardrails address.**

**Junyeong Park, Jieun Han, Haneul Yoo, So-Yeon Ahn, Jinsung Yoon, Alice Oh** — arXiv (cs.CY / cs.AI) preprint, 2026 (KAIST, Google Cloud AI Research, NYU).

## Synthesis

Combines student- and teacher-facing LLM usage contexts with fine-grained curriculum concepts and 6 risk categories / 28 subcategories spanning conventional and education-specific harms.

Builds adversarial interactions in three settings: single-turn requests, static multi-turn conversations, and dynamic multi-turn conversations.

Evaluates ten LLMs across four safety levels: refusal, safe assistance, risky assistance with safety guidance, and fully risky assistance.

Results show greater vulnerability to education-specific risks and dynamic multi-turn interactions; existing safety guardrails fail to adequately address these risks.

## Connected Concepts

## Connected Articles


## Citation

Junyeong Park, Jieun Han, Haneul Yoo, So-Yeon Ahn, Jinsung Yoon, Alice Oh (2026). [EduZone: A Framework for Evaluating LLM Safety for K-12 Students and Teachers](https://arxiv.org/abs/2608.02024). arXiv:2608.02024. arXiv (cs.CY / cs.AI) preprint.
