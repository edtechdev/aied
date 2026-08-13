---
title: What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction
created: 2026-05-20
updated: 2026-05-20
type: article
tags: [language-learning, llm, generative-ai, benchmark, scaffolding, formative-assessment, writing-education, rag, open-source, k-12]
sources: ['raw/papers/2605.14257.md']
confidence: high
---

# What Makes Words Hard? Vocabulary Difficulty Prediction at BEA 2026

🔗 [Code](https://github.com/adno/vocabulary-difficulty)

## Overview

This paper presents two complementary approaches to predicting vocabulary difficulty for language learners, achieving state-of-the-art results in the BEA 2026 Shared Task. The work advances both the accuracy and explainability of NLP systems for educational applications.

## Key Findings

**Dual-model architecture:**
1. **Black-box LLM** fine-tuned with a soft-target loss function → Pearson r > 0.91, achieving the top shared task result in the open track
2. **Explainable model** → r > 0.77, outperforming fine-tuned encoder baselines while providing interpretable feature-level insights

**What makes words hard?** Beyond genuine production difficulty (word frequency, length, concreteness), the analysis reveals that:
- **Spelling difficulty** significantly impacts vocabulary item difficulty
- **Test item construction** (how items are presented) affects measured difficulty independent of the words themselves
- These factors are particularly pronounced in the British Council's Knowledge-based Vocabulary Lists (KVL)

## Educational Applications

Vocabulary difficulty prediction directly supports **adaptive language learning systems**, enabling:
- Personalized vocabulary sequencing based on predicted difficulty
- Diagnostic assessment of learner vocabulary gaps
- Generation of appropriately leveled reading materials

This connects to [[llm-children-reading-story-generation]], which uses LLMs for generating leveled educational content. The explainable model's insights about item construction also inform the design of [[formative-assessment]] instruments.

## Technical Innovation

The **soft-target loss function** for LLM fine-tuning on rating (regression) tasks is notable. Traditional fine-tuning uses hard classification targets; adapting LLMs to predict continuous difficulty scores required a custom loss. This technique may generalize to other educational NLP tasks requiring nuanced ordinal or continuous predictions, relevant to [[self-referential-l2-writing-llm-assessment]] and [[cyberscholar-genai-writing-feedback]].

## Benchmark Context

BEA (Building Educational Applications) is the premier venue for NLP-for-education research. This shared task establishes a new benchmark for vocabulary difficulty prediction with open-source code, encouraging reproducible research in a domain where educational impact depends on reliable, interpretable models.

## Connected Concepts

- [[formative-assessment]]
## Connected Articles

- [[llm-children-reading-story-generation]]
- [[self-referential-l2-writing-llm-assessment]]
- [[cyberscholar-genai-writing-feedback]]
## Citation

Nohejl, A., Wu, X., Ide, Y., Riera Machin, M. A., Chang, Y.-N., & Yanaka, H. (2026). [What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction.](https://arxiv.org/abs/2605.14257) arXiv:2605.14257. BEA 2026.
