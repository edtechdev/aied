---
title: "The Tutoring Effectiveness Index: Predicting LLM Math Tutor Quality from Four Conversation Signals"
created: 2026-06-01T04:33:04-04:00
updated: 2026-08-15
type: article
tags: [intelligent-tutoring, llm, benchmark, efficacy-study, automated-grading, formative-assessment, reinforcement-learning]
sources: ['raw/papers/2605.30666.md']
confidence: high
---

> **Authors:** Shim Jaechang, Unggi Lee (2026) — CIKM 2026

# The Tutoring Effectiveness Index (TEI)

## What It Is

TEI is a **training-free, judge-free index** that selects the best tutoring response from multiple LLM candidate outputs using only four internal conversation signals — no RL training, no external judge model, no reward model required.

## How It Works

TEI combines four signals computed during decoding with fixed weights:

- **V (Verify ratio)**: Regex over thinking trace counting Schoenfeld Verification keywords ("let me check", "verify", "double-check")
- **M̃ (Math-step density)**: Regex on visible output, min-max normalized within candidate pool
- **Q (Ends-question rate)**: Regex detecting if tutor turn ends with a question
- **D (Deep-reasoning gate)**: Binary, fires if ≥40% of tokens have JSD below threshold

Formula: `TEI(y) = 1.0·V + 0.75·M̃ - 1.0·Q + 0.5·1[DTR ≥ 0.4]`

The signs matter more than magnitudes: reward verification and math content, penalize ending with questions, small bonus for deep reasoning.

## Key Results

- TEI@8 raises improvement rate on pre-incorrect scenarios from **59.0% to 81.9%** (+22.9 pp) on frozen DeepSeek-R1-8B, with no training
- TEI@4 achieves 75.7%, beating both Random@4 (58.6%) and DTR@4 (61.2%)
- Feature ablation: dropping Verify costs -0.054 AUC, dropping Math-steps costs -0.036, dropping Deep-reasoning gate costs only -0.009
- TEI@8 costs 4.1× tokens of greedy (16,334 vs 3,984), about half of self-consistency

## The Alignment Tax

The paper quantifies severe degradation from pedagogical GRPO fine-tuning:
- Thinking length drops from 1,764 to 119 words/turn (−93%)
- Content-Knowledge accuracy falls by −71% relative
- Pedagogical-Knowledge accuracy falls by −80% relative
- Student Δ Solve Rate crosses from +0.180 to **−0.012** — the aligned tutor becomes detrimental

## Why It Matters

TEI demonstrates that simple lexical and structural signals can effectively steer a frozen LLM to be a much better math tutor without any training. This is especially valuable when RL fine-tuning is shown to catastrophically degrade tutoring quality. The approach is cost-effective and immediately deployable on frozen models.

## Open Questions

- Does TEI generalize to non-math tutoring domains (writing, science, language)?
- Can the fixed weights be optimized per-domain without losing the training-free property?
- How does TEI interact with different base model architectures and sizes?

## Connected Concepts

- [[socratic-method]]
- [[automated-question-generation]]
- [[ai-ed-evaluation]]
- [[open-source]]
- [[pedagogical-llm-training]]
- [[automated-assessment]]
- [[adaptive-learning]]
- [[human-in-the-loop-ai]]
- [[reinforcement-learning]]
- [[llm]]
- [[math-education]]

## Connected Articles

- [[learning-by-chatting-genai-impact]]
- [[aaai2026-prompting-literacy-k12]]
- [[academiclaw-student-agent-benchmark]]
- [[access-not-enough-ai-tutoring-2026]]
- [[adaptive-pretesting-retention]]
- [[agent-voice-accents-k12-group-learning]]
- [[agentic-ai-education-scoping-review]]
- [[agentic-ai-pedagogical-best-practice-2026]]
- [[agentic-workflows-education]]
- [[agents-that-teach-incidental-learning]]
## Citation

Shim, J., & Lee, U. (2026). [The Tutoring Effectiveness Index: Predicting LLM Math Tutor Quality from Four Conversation Signals](https://arxiv.org/abs/2605.30666). arXiv:2605.30666.