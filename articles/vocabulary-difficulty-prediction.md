---
title: What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction
created: "2026-05-20T04:33:04-04:00"
updated: "2026-09-19T08:49:57-04:00"
type: article
pedagogy: [scaffolding]
technology: [generative-ai, llm, rag, open-source]
assessment: [formative-assessment]
research_method: [benchmark]
discipline: [language learning, writing education]
level: [k 12]
sources: ['raw/papers/2605.14257.md']
confidence: high
audience: [researchers, edtech designers, assessment designers]
methods: [benchmark]
---

> **Synthesis:** This paper presents two complementary approaches to predicting vocabulary difficulty for language learners, achieving state-of-the-art results in the BEA 2026 Shared Task. The work advances both the accuracy and explainability of NLP systems for educational applications.

## Key Findings

**Dual-model architecture:**
1. **Black-box [[llm]]** fine-tuned with a soft-target loss function → Pearson r > 0.91, achieving the top shared task result in the open track
2. **Explainable model** → r > 0.77, outperforming fine-tuned encoder baselines while providing interpretable feature-level insights

**What makes words hard?** Beyond genuine production difficulty (word frequency, length, concreteness), the analysis reveals that:
- **Spelling difficulty** significantly impacts vocabulary item difficulty
- **Test item construction** (how items are presented) affects measured difficulty independent of the words themselves
- These factors are particularly pronounced in the British Council's Knowledge-based Vocabulary Lists (KVL)

## Educational Applications

Vocabulary difficulty prediction directly supports **adaptive [[language-learning|language learning]] systems**, enabling:
- Personalized vocabulary sequencing based on predicted difficulty
- Diagnostic assessment of learner vocabulary gaps
- Generation of appropriately leveled reading materials

This connects to [[llm-children-reading-story-generation]], which uses LLMs for generating leveled educational content. The explainable model's insights about item construction also inform the design of [[formative-assessment]] instruments.

## Technical Innovation

The **soft-target loss function** for LLM fine-tuning on rating (regression) tasks is notable. Traditional fine-tuning uses hard classification targets; adapting LLMs to predict continuous difficulty scores required a custom loss. This technique may generalize to other [[educational-nlp|educational NLP]] tasks requiring nuanced ordinal or continuous predictions, relevant to [[self-referential-l2-writing-llm-assessment]] and [[cyberscholar-genai-writing-feedback]].

## Benchmark Context

BEA (Building Educational Applications) is the premier venue for NLP-for-education [[research-methods-aied|research]]. This shared task establishes a new [[benchmark]] for vocabulary difficulty prediction with [[open-source]] code, encouraging reproducible research in a domain where educational impact depends on reliable, interpretable models.

## What this means for practice

- **Assessment designers.** Use predicted difficulty to sequence vocabulary, since the task supports personalized vocabulary sequencing, diagnostic assessment of learner gaps, and generation of leveled reading materials.
- **Assessment designers.** Treat item construction as a source of difficulty: spelling difficulty and how items present the L1 equivalent and context affected measured difficulty independently of the words, especially in the British Council's Knowledge-based Vocabulary Lists.
- **Researchers.** Adopt soft-target losses when fine-tuning models for continuous rating tasks: the LLM fine-tuned this way reached Pearson r > 0.91, while the explainable model reached r > 0.77 and still beat the fine-tuned encoder baseline.
- **Researchers.** Prefer the explainable model when a difficulty estimate must be justified, since its SHAP-based feature contributions isolate factors such as similarity to the L1 word and spelling difficulty.

## Limitations

- The soft-target fine-tuning method was tested only on the BEA 2026 shared task's KVL data; the authors note its impact may be less pronounced on smaller or noisier data and may depend on parameters such as the number of points on the scale.
- The insights from the explainable and trickiness models cannot be empirically validated, because the individual responses used to compile KVL are not publicly available.
- Part of the measured difficulty reflects the KVL test-item format itself (choosing the L1 equivalent and context) rather than word difficulty, which the authors describe as an inherent limitation of that format.
- Results are tied to model scale: performance improved with base model size up to 32B parameters, and the headline correlation comes from the largest models tested.

## Connected Concepts

- [[formative-assessment]]
- [[language-learning]]
- [[educational-nlp]]
- [[benchmark]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[scaffolding]]
## Connected Articles

- [[llm-children-reading-story-generation]]
- [[self-referential-l2-writing-llm-assessment]]
- [[cyberscholar-genai-writing-feedback]]
- [[llm-item-difficulty-prediction]]
## Citation

Nohejl, A., Wu, X., Ide, Y., Riera Machin, M. A., Chang, Y.-N., & Yanaka, H. (2026). [*What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction*](https://arxiv.org/abs/2605.14257). BEA 2026.
