---
title: "Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring"
created: "2026-06-19T04:33:04-04:00"
updated: "2026-08-14"
type: article
tags: [intelligent-tutoring, llm, k-12, personalized-learning, scaffolding, adaptive-learning, student-experience, prompt-engineering]
sources: ['raw/papers/2606.20138.md']
confidence: high
---

> **Chang, P.-C., Hogan, N., Plaat, A., & van der Meer, M. T.** (2026). arXiv cs.AI preprint.

## Overview

Adaptive LLM tutoring with subject-aware prompt routing based on 14 pedagogical features. An A/B test on 656 conversations from 359 Dutch high-school students showed simulation-to-real transfer. A stochastic router achieved 28.1% exercise conversion rate vs 19.6% baseline, reducing interaction turns by ~3 (p=0.007) while maintaining pedagogical quality.

## Key Findings

- **Problem:** Static-prompt LLM tutoring systems fail to adapt across diverse academic disciplines.
- **Solution:** Subject-aware prompt routing using 14 pedagogical features extracted from transcripts; contextual bandit formulation with 20 pedagogical prompts.
- **Simulation:** Router achieves 0.694 vs 0.647/0.64 static baselines (p<0.001).
- **Real-world A/B test:** N=656 conversations, 359 Dutch high-school students. Stochastic router achieves 28.1% exercise conversion rate vs 19.6% baseline.
- **Implication:** [[prompt-engineering]] with stochastic sampling improves both efficiency and engagement in real-world tutoring.

## Connected Concepts

- [[prompt-engineering]]
- [[intelligent-tutoring]]
- [[k-12]]
- [[personalized-learning]]
- [[scaffolding]]
- [[adaptive-learning]]

## Connected Articles

- [[ai-lms-middle-school-longitudinal]] — AI-integrated learning management system for middle school
- [[special-r1-rl-special-education]] — Special-R1: RL for special education
- [[measuring-llm-tutors-teach-vs-solve]] — Measuring whether LLM tutors teach or solve
- [[llm-judged-helpfulness-pedagogy-signal]] — LLM-judged helpfulness as a pedagogy signal

## Citation

Chang, P.-C., Hogan, N., Plaat, A., & van der Meer, M. T. (2026). [*Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring*](https://arxiv.org/abs/2606.20138). arXiv:2606.20138. arXiv cs.AI preprint.
