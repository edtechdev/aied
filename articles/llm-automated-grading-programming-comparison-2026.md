---
title: "A systematic comparison of Large Language Models for automated assignment assessment in programming education: Exploring the importance of architecture and vendor"
created: "2026-08-16T10:55:19-04:00"
updated: "2026-08-16"
type: article
tags: [programming-education, automated-assessment, llm, cs-education, assessment]

sources: ['raw/papers/llm-automated-grading-programming-comparison-2026.md']
confidence: high
---

> **Synthesis:** Jukiewicz (2026) presents the first large-scale, side-by-side comparison of 18 contemporary [[llm|Large Language Models]] for [[automated-assessment|Automated Grading]] of programming assignments, grading 6,081 complete question–answer pairs collected across four years of an introductory Python course for cognitive science students (~6,500 raw records, empty submissions removed). The models spanned four vendors — Anthropic (claude-3-5-haiku, claude-sonnet-4, claude-opus-4-1), DeepSeek (deepseek-chat, deepseek-reasoner), Google (gemini-2.0-flash-lite/flash, gemini-2.5-flash-lite/flash/pro), and OpenAI (gpt-4.1-nano/mini, gpt-4.1, gpt-4o-mini, gpt-4o, gpt-5-nano/mini, gpt-5) — queried via a standardized Chain-of-Thought prompt that requires each model to solve the problem itself, compare with the student submission, and return a grade of 0 (incorrect), 0.5 (almost correct), or 1 (correct) under default API parameters. Statistical analyses — grade distributions, means and standard deviations, Spearman rank correlations, Cohen's κ, Conover post-hoc tests with Holm/Holm–Šidák correction, and clustering — revealed systematic differences in grading strictness ([[learning-gains|mean scores]] from 0.290 for gpt-4.1-nano to 0.608 for claude-haiku-3.5), with models from the same vendor clustering together (e.g., gpt-5-family ρ ≈ 0.80–0.89, Gemini family ρ ≈ 0.79–0.83). Full-scale flagship models consistently outperformed their smaller "mini"/"nano" counterparts, yet even the best model achieved only moderate agreement with human teacher grades. The author concludes that model choice is not neutral and argues for careful selection, transparent metrics, and a human-in-the-loop approach.

## Key Findings

**Large-scale comparison.** Eighteen [[llm]] from four vendors were compared on 6,081 graded student submissions, the first such large-scale side-by-side [[assessment]] of contemporary models, including the GPT-5 family and Claude Opus 4.1 released in 2025.

**Grading-style divergence.** Models split along a lenient–restrictive continuum: gpt-4o, gpt-4o-mini, and claude-haiku-3.5 awarded the most maximum (1.0) scores (lenient), while deepseek-reasoner and gpt-4.1-nano were dominated by failing (0.0) grades (restrictive); claude-sonnet-4 and gemini-2.0-flash-lite used the intermediate (0.5) category heavily. Mean grades ranged from 0.290 (gpt-4.1-nano) to 0.608 (claude-haiku-3.5).

**Vendor clustering.** Spearman correlations (≈0.55–0.89) were highest within vendor families — gpt-5-mini/gpt-5/gpt-5-nano (ρ ≈ 0.80–0.89), the Gemini family (ρ ≈ 0.79–0.83), and gpt-4.1 vs. gpt-4.1-mini (ρ ≈ 0.85) — suggesting shared algorithmic approaches. Models deviating most in style (claude-haiku-3.5, gpt-4.1-nano) correlated only 0.55–0.68 with others.

**Agreement is weaker than correlation.** Cohen's κ ranged widely (≈0.20–0.74), always below the corresponding Spearman coefficients: within-family κ peaked around 0.74 (gpt-5 vs. gpt-5-mini) and 0.68 (gpt-4.1 vs. gpt-4.1-mini), while deviant models rarely exceeded κ ≈ 0.30. Models thus share overall grading tendencies but diverge on point-by-point scores.

**Scale matters.** Full-scale flagship models consistently outperformed their smaller "mini" and "nano" counterparts in alignment with human grades.

**Limited human alignment.** Despite strong internal agreement among models, alignment with the human teacher's grades remained limited — even the best-performing model achieved only moderate reliability, underscoring the need for human oversight in [[cs-education]] deployment.

**Implication.** The choice of LLM architecture and vendor materially affects grading outcomes in [[cs-education]], a key consideration for [[automated-assessment|Automated Grading]] and [[assessment]] design; the author recommends careful model selection, transparent reporting, and a human-in-the-loop approach.

## Connected Concepts

- [[cs-education]]
- [[automated-assessment]]
- [[llm]]
- [[assessment]]

## Connected Articles

- [[gpt-human-rater-essay-assessment-2026]] — GPT vs. human raters in essay assessment
- [[llm-formative-feedback-systematic-review-2026]] — LLM-generated formative feedback
- [[aaiwa-ai-authentic-assessment-metacognition-2026]] — AI-mediated authentic assessment
- [[microbit-robotics-machine-learning-teacher-training-2026]] — Micro:bit robotics in teacher training

## Citation

Jukiewicz, M. (2026). [*A systematic comparison of Large Language Models for automated assignment assessment in programming education: Exploring the importance of architecture and vendor*](https://doi.org/10.1016/j.caeo.2026.100364). *Computers and Education Open*, 100364. https://doi.org/10.1016/j.caeo.2026.100364
