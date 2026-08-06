---
title: "Towards Self-Referential Analytic Assessment: A Profile-Based Approach to L2 Writing Evaluation with LLMs"
created: 2026-05-05
updated: 2026-05-11
type: concept
tags: [automated-grading, writing-education, llm, ai-education, higher-ed]
sources: [raw/papers/2605.04298.md]
confidence: medium
---

# Self-Referential L2 Writing Assessment with LLMs

## Core Contribution

Bannò, Knill & Gales (2026) propose a paradigm shift in automated essay scoring: from **inter-learner ranking** to **intra-learner profiling**. Instead of asking "how does this essay rank against others?", their self-referential framework asks "what are this specific learner's strengths and weaknesses?"

## Key Findings

Using the ICNALE GRA dataset annotated by up to 80 trained raters and calibrated with two-facet Rasch modeling:
- **LLMs outperform single human raters** at identifying relative weaknesses (negative feedback) across proficiency aspects
- **Human raters remain stronger** at identifying relative strengths (positive feedback)
- Traditional rank-based correlation metrics **mask diagnostic behavior** — high correlations can hide poor intra-learner discrimination

## Implications for AIED

This connects to [[automated-grading]] but challenges its dominant evaluation paradigm. The finding that LLMs are strong at weakness detection but weaker at strength identification has practical implications for [[formative-assessment]] design — AI might best serve as a **complementary weakness detector** while teachers focus on strengths.

The self-referential approach aligns with [[personalized-learning]] goals and the [[ai-learning-companions-framework]] emphasis on prioritizing learning over performance. It extends [[writing-education]] research on AI in composition and connects to [[automated-question-generation]] work on AI-generated assessment. The use of Rasch modeling for calibration connects to [[ground-truth-reliability-aied]] calls for more rigorous measurement in AIED.

## Connections to Wiki

- Paradigm shift from [[automated-grading]] ranking to profiling
- Aligns with [[sequenced-ai-feedback-learning]] emphasis on feedback quality over quantity
- Extends [[llm-student-modeling-memory]] to assessment contexts — profiling over time
- Complements [[human-in-the-loop-ai]] by identifying where humans vs. AI add value

## Source

- [https://arxiv.org/abs/2605.04298](https://arxiv.org/abs/2605.04298)

## Related Pages
- [[vocabulary-difficulty-prediction]] — LLM fine-tuned with soft-target loss achieves r>0.91 for vocabulary difficulty p
- [[automated-grading]]
- [[formative-assessment]]
- [[personalized-learning]]
- [[ai-learning-companions-framework]]
- [[writing-education]]
- [[ground-truth-reliability-aided]]
- [[sequenced-ai-feedback-learning]]
- [[llm-student-modeling-memory]]
- [[human-in-the-loop-ai]]
- [[language-learning]]