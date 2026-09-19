---
title: "A Framework for Evaluation of Large Language Models in Essay Assessment: Reliability, Alignment, and Causal Reasoning"
created: "2026-09-01T09:45:00-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
technology: [educational-nlp, llm]
assessment: [assessment-validity, automated-essay-scoring]
research_method: [benchmark]
audience: [researchers, assessment designers]
level: [higher ed]
sources: ["raw/papers/llm-essay-assessment-framework-reliability-2026.md"]
confidence: high
discipline: [writing education, language learning]
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** Liu, Ye, and Yan (2026) present a comparative analysis of five LLMs (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, and DeepSeek R1) in the assessment of long [[language-learning|English]] essays authored by non-native speakers in [[higher-ed|higher education]]. Drawing on LLM-generated scores for 60 essays, the analysis examines (a) intra-model reliability across repeated scoring runs, (b) the degree of alignment between model outputs and expert human ratings, and (c) causal feature dependencies that clarify how linguistic characteristics influence model scoring behavior. Findings reveal substantial variation: some models achieved near-perfect reproducibility and strong alignment with human raters, whereas others displayed inconsistency, score compression, or systematic underestimation. Causal discovery analysis uncovered distinct evaluative heuristics, with most models prioritizing lexical precision and fluency, while others emphasized syntactic complexity or cross-domain integration.

## Key Findings

- A comparative analysis of five LLMs (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, DeepSeek R1) in assessing long English essays by non-native speakers.
- Substantial variation across models: some achieved near-perfect reproducibility and strong human alignment, while others showed inconsistency, score compression, or systematic underestimation.
- Causal discovery analysis uncovered distinct evaluative heuristics, with most models prioritizing lexical precision and fluency, while others emphasized syntactic complexity or cross-domain integration.
- The study establishes model-specific reliability profiles and application contexts.
- Findings provide empirical benchmarks and practical guidance for the responsible use of LLMs in educational writing assessment.

## What this means for practice

- **Assessment designers.** Build model-specific reliability profiles from repeated scoring runs instead of assuming reproducibility; across the five evaluated models, behavior ranged from near-perfect consistency to score compression and systematic underestimation.
- **Assessment designers.** Keep [[human-in-the-loop-ai|expert human ratings]] in the loop for consequential decisions and audit prompt sensitivity before deployment rather than treating an LLM score as final.
- **Researchers.** Use causal feature analysis to explain why a model scores as it does, so [[assessment-validity|validity]] and [[bias-mitigation|fairness]] claims rest on mechanism rather than on correlation.
- **Instructors.** Report which model produced a score and under what prompt, since the same essay can receive different evaluations across models and repeated runs.

## Limitations

- The dataset contained only 60 essays (1,500–2,500 words, M = 1,941, SD = 324) from non-native English speakers, a scope the authors state may limit generalizability.
- A single standardized rubric and one fixed prompting template were applied to all five models, so prompt-induced variability was deliberately controlled rather than measured, leaving the influence of prompt wording untested.
- The comparison covers a fixed set of five models evaluated at one point in time, so the reported reliability profiles may not hold as model versions change.
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
