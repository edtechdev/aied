---
title: "Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring"
created: "2026-06-19T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
pedagogy: [scaffolding]
technology: [adaptive-learning, intelligent-tutoring, llm, personalized-learning, prompt-engineering]
methods: [benchmark]
research_method: [system development]
audience: [learners, software developers]
level: [k 12]
sources: ['raw/papers/2606.20138.md']
confidence: high
---

> **Synthesis:** Adaptive [[llm]] tutoring with subject-aware prompt routing based on 14 [[pedagogy|pedagogical]] features. An A/B test on 656 conversations from 359 Dutch high-school students showed [[simulation]]-to-real transfer. A stochastic router achieved 28.1% exercise conversion rate vs 19.6% baseline, reducing interaction turns by ~3 (p=0.007) while maintaining pedagogical quality.

## Key Findings

- **Problem:** Static-prompt LLM tutoring systems fail to adapt across diverse academic disciplines.
- **Solution:** Subject-aware prompt routing using 14 pedagogical features extracted from transcripts; contextual bandit formulation with 20 pedagogical prompts.
- **Simulation:** Router achieves 0.694 vs 0.647/0.64 static baselines (p<0.001).
- **Real-world A/B test:** N=656 conversations, 359 Dutch high-school students. Stochastic router achieves 28.1% exercise conversion rate vs 19.6% baseline.
- **Implication:** [[prompt-engineering]] with stochastic sampling improves both efficiency and [[student-engagement|engagement]] in real-world tutoring.

## What this means for practice

- **Learners.** Move from tutoring into exercises: exercise conversion was the engagement outcome the router improved (28.1% vs 19.6%), and many students in this deployment never proceeded to formal exercises, which is why the authors could not measure immediate knowledge gain.
- **Instructors.** Expect fewer back-and-forth turns without losing pedagogical quality: the router cut interactions by around 3 turns (p = 0.007) in conversations with at least 5 turns (N = 381) while maintaining quality scores.
- **Instructors.** Pair prompt routing with monitoring on long-tail subjects, because the router drifts toward strategies that perform well across the most common subjects and left sparse subjects such as Economics or Physics without converged strategies.
- **Software developers.** Route prompts per subject rather than shipping one static prompt across disciplines: extract the 14 transcript-derived [[pedagogy|pedagogical]] features and select among the 20 pedagogical prompts, a configuration that reached 0.694 against 0.647 and 0.64 for static baselines in simulation (p < 0.001).
- **Software developers.** Sample stochastically instead of always taking the greedy-best strategy — the greedy router matched the baseline (19.1% vs 19.6% conversion), while stochastic sampling reached 28.1% in the live A/B test.

## Limitations

- The live A/B test covers 656 valid conversations (sessions filtered to turns > 1) with 359 Dutch high-school students, and the higher 28.1% conversion rate did not reach statistical significance.
- Many students did not proceed to formal exercises right after tutoring, so immediate knowledge gain could not be measured through test results.
- The router developed a bias toward strategies that perform well across the most common subjects, and real-world data sparsity in long-tail subjects (e.g., Economics or Physics) made it hard for the policy to converge on subject-specific strategies within a limited live-deployment window.
- The framework relies on a discrete pool of 20 pedagogical prompts, which prevents novel or hybrid instruction strategies, and data sparsity in the deployment constrains the statistical power of the downstream analyses and slows online convergence.

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

Chang, P.-C., Hogan, N., Plaat, A., & van der Meer, M. T. (2026). [*Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring*](https://arxiv.org/abs/2606.20138). arXiv cs.AI preprint.
