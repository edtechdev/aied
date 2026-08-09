---
title: "Anchor Is the Key: Toward Accessible Automated Essay Scoring with Large Language Models Through Prompting"
created: 2026-08-09
updated: 2026-08-09
type: article
tags: [automated-essay-scoring, prompt-engineering, llm, generative-ai, assessment, higher-ed, k-12, writing-education, ai-literacy]
sources: ['raw/papers/choi-anchor-aes-2025.md']
confidence: high
---

> **Synthesis:** Choi, Tate, Ritchie, Nixon & Warschauer (2025) investigate the most practical approach to LLM-based automated essay scoring — prompting — and find that providing anchor papers (example essays with scores) significantly improves LLM-human agreement, bringing it close to human-human scoring reliability. GPT-4o mini achieves comparable results to GPT-4o at substantially lower cost, making accessible, teacher-friendly AES feasible.

## Key Findings

- **Anchor papers are critical:** Including exemplar essays in prompts dramatically improved scoring accuracy, reaching near-human reliability levels
- **Cost-effective models work:** GPT-4o mini achieved comparable results to GPT-4o at a fraction of the cost, removing barriers for educator adoption
- **Prompting beats fine-tuning for accessibility:** Unlike resource-intensive optimization methods, structured prompting is practical for teachers to use directly
- **Rubrics + anchors outperform rubrics alone:** Combining grading rubrics with anchor papers yielded the best results
- **Secondary school essays tested:** Study used argumentative essays from secondary students, demonstrating relevance for [[k-12]] contexts

## Implications

This study advances [[automated-essay-scoring]] by shifting focus from resource-intensive model optimization to accessible prompting strategies. For teachers, the finding that GPT-4o mini with anchor papers approaches human reliability means practical AES is within reach — no expensive compute, no large pre-scored essay banks. The anchor paper approach connects to [[prompt-engineering]] best practices and suggests a pathway for [[writing-education]] where teachers can calibrate AI scoring to their own assessment standards rather than relying on black-box systems.

The work complements [[psyscore-essay-scoring-zpd-feedback]] research on psychometrically-aware scoring and [[icle-plus-plus-essay-scoring]] work on fine-grained trait scoring, showing that prompt design alone — particularly anchor inclusion — can achieve strong holistic scoring. For [[ai-literacy]], this empowers educators to understand and control AES rather than treating it as an opaque tool.

## Connected Concepts

- [[automated-essay-scoring]]
- [[prompt-engineering]]
- [[writing-education]]
- [[ai-literacy]]
- [[automated-assessment]]
- [[k-12]]
- [[higher-ed]]

## Connected Articles

- [[psyscore-essay-scoring-zpd-feedback]] — PsyScore: A Psychometrically-Aware Framework for Trait-Adaptive Essay Scoring
- [[icle-plus-plus-essay-scoring]] — ICLE++: Modeling Fine-Grained Traits for Holistic Essay Scoring
- [[ai-scoring-language-bias-physics]] — AI-based scoring systematically underestimates conceptual understanding of linguistically diverse students
- [[self-referential-l2-writing-llm-assessment]] — Towards Self-Referential Analytic Assessment of L2 Writing
- [[aiawe-automated-writing-evaluation]] — AIAWE: Automated Writing Evaluation

## Citation

Choi, J., Tate, T., Ritchie, D., Nixon, N., & Warschauer, M. (2025). [*Anchor Is the Key: Toward Accessible Automated Essay Scoring with Large Language Models Through Prompting*](https://doi.org/10.35542/osf.io/cbhgz_v1). EdArXiv. doi:10.35542/osf.io/cbhgz_v1.