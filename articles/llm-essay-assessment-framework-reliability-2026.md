---
title: "A Framework for Evaluation of Large Language Models in Essay Assessment: Reliability, Alignment, and Causal Reasoning"
created: "2026-09-01T09:45:00-04:00"
updated: "2026-09-01T09:45:00-04:00"
type: article
tags: ["automated-essay-scoring", "llm", "educational-nlp", "assessment-validity", "benchmark", "writing-education"]
research_method: ["comparative study"]
audience: ["researchers", "assessment designers"]
level: ["higher ed"]
sources: ["raw/papers/llm-essay-assessment-framework-reliability-2026.md"]
confidence: high
---

> **Synthesis:** Liu, Ye, and Yan (2026) present a comparative analysis of five LLMs (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, and DeepSeek R1) in the assessment of long [[language-learning|English]] essays authored by non-native speakers in [[higher-ed|higher education]]. Drawing on LLM-generated scores for 60 essays, the analysis examines (a) intra-model reliability across repeated scoring runs, (b) the degree of alignment between model outputs and expert human ratings, and (c) causal feature dependencies that clarify how linguistic characteristics influence model scoring behavior. Findings reveal substantial variation: some models achieved near-perfect reproducibility and strong alignment with human raters, whereas others displayed inconsistency, score compression, or systematic underestimation. Causal discovery analysis uncovered distinct evaluative heuristics, with most models prioritizing lexical precision and fluency, while others emphasized syntactic complexity or cross-domain integration.

## Key Findings

- A comparative analysis of five LLMs (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, DeepSeek R1) in assessing long English essays by non-native speakers.
- Substantial variation across models: some achieved near-perfect reproducibility and strong human alignment, while others showed inconsistency, score compression, or systematic underestimation.
- Causal discovery analysis uncovered distinct evaluative heuristics, with most models prioritizing lexical precision and fluency, while others emphasized syntactic complexity or cross-domain integration.
- The study establishes model-specific reliability profiles and application contexts.
- Findings provide empirical benchmarks and practical guidance for the responsible use of LLMs in educational writing assessment.

## Implications for AI in Education

The study provides a framework for evaluating [[llm|LLMs]] in [[automated-essay-scoring|essay assessment]] that goes beyond simple accuracy to examine reliability, human-AI alignment, and causal feature dependencies. The substantial variation across models — with some showing inconsistency, score compression, or systematic underestimation — underscores the need for model-specific reliability profiles and careful selection of LLMs for assessment contexts. For assessment designers, the causal feature analysis offers a method for understanding *why* a model scores as it does, supporting [[assessment-validity|validity]] and [[bias-mitigation|fairness]] evaluation. The study connects to [[educational-nlp]], [[benchmark]], and [[writing-education]] [[research-methods-aied|research]].

## Connected Concepts
- [[automated-essay-scoring]]
- [[llm]]
- [[educational-nlp]]
- [[assessment-validity]]
- [[benchmark]]
- [[writing-education]]
- [[bias-mitigation]]
- [[ai-ed-evaluation]]

## Connected Articles
- [llm-essay-scoring-feature-weighting-2026] — feature weighting patterns in LLM-based essay scoring
- [llms-do-not-grade-essays-like-humans-2026] — LLMs do not grade essays like humans
- [choi-anchor-aes-prompting-2025] — anchor-paper prompting for AES
- [zhang-races-consistent-essay-scoring-llms-2026] — RACES: reward-aligned consistent essay scoring

## Citation
Liu, T., Ye, L., & Yan, W. (2026). [A framework for evaluation of large language models in essay assessment: Reliability, alignment, and causal reasoning](https://doi.org/10.1016/j.caeai.2026.100565). *Computers and Education: Artificial Intelligence, 10*, 100565.
