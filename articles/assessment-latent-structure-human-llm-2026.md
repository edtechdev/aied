---
title: "Do Assessment Instruments Measure the Same Thing for Humans and LLMs? A Latent Structure Analysis"
created: "2026-08-18T09:25:00-04:00"
updated: "2026-08-18T09:25:00-04:00"
type: article
tags: [assessment-validity, educational-measurement, psychometrically-aware-ai, item-response-theory, ai-ed-evaluation, llm, higher-ed, generative-ai]
sources: ['raw/papers/assessment-latent-structure-human-llm-2026.md']
confidence: high
---

> **Synthesis:** Strugatski, Zeinfeld, and Alexandron (2026) ask whether assessment instruments measure the same underlying constructs for humans and LLMs, arguing that validity-based inference from LLM performance on human-designed exams requires similarity in the latent structure of responses. Using a case study across two STEM instruments — a high-school chemistry diagnostic and the quantitative-reasoning section of a university entrance exam — they compare human response data with responses from six multimodal LLMs (OpenAI GPT-4o/GPT-5.2, Google Gemini 1.5 Pro/3 Pro, Anthropic Claude 3.5 Sonnet/4.5) using [[educational-measurement|exploratory factor analysis]], factor congruence, and resampling. They find systematic differences between human and LLM factor structures — LLM–human similarity reliably fell below the human–human baseline across both instruments. The findings call into question the [[ai-ed-evaluation|validity of evaluation practices]] that use educational assessments to make generalizable claims about AI capabilities.

## The validity condition for LLM evaluation

A common approach to evaluating LLMs is to administer assessment instruments designed to measure skills and competencies in humans — standardized exams, diagnostics, entrance tests — and treat performance as evidence about the LLM's underlying ability on the same constructs. From a [[assessment-validity|validity]] perspective, however, such inferences require that the relationship between observed performance and the underlying construct, established for humans, also holds for LLMs. A necessary condition for transferring score interpretations is *similarity in the latent structure* of responses to the assessment. This study directly tests that condition.

## Method: comparing latent structures

The authors adopt a case study design across two educational contexts: (1) a high-school chemistry diagnostic completed by several hundred Grade 11–12 students, and (2) a standalone quantitative-reasoning section from a high-stakes university entrance examination. LLM responses were generated from six multimodal models across three families. Because the assessments included figures, formulas, and visual content, multimodal input was required. The analysis combined:

- **Exploratory factor analysis (EFA)** to extract latent factor structures from each group's responses;
- **Factor congruence** to quantify similarity between human and LLM structures, using a matching algorithm (Hungarian method on absolute congruence) repeated over resamples;
- **Resampling baselines** comparing LLM–human (LH) congruence against the human–human (HH) congruence distribution as the empirical baseline of expected structural agreement.

## Key findings

- **Systematic structural differences:** Across both instruments, humans and LLMs produced substantially different factor structures — LLM–human similarity remained considerably lower than human–human similarity, measured via mean matched factor congruence. This was consistent across instruments and choices of the number of factors.
- **Factor retention diverges:** Parallel analysis retained different numbers of factors for humans vs. LLMs in both datasets (e.g., in Chemistry humans consistently retained five factors while LLMs most often retained four; in Quantitative Reasoning humans retained 7–8 vs. LLMs' five). The Kaiser criterion happened to match within each instrument, but parallel analysis revealed the divergence.
- **HH baseline is itself variable:** Human–human similarity was far from perfect — distributions were broad rather than concentrated near 1.0 — so the main result is the *consistent gap* between HH and LH matching, not perfect human reproducibility.
- **Implication:** Established assessment instruments may capture substantially different constructs in humans and LLMs, so performance on them is weak evidence for claims about LLM abilities on the same skills the instruments were designed to measure in humans.

## Significance for psychometrically aware AI

This paper contributes a *validity-oriented framework* for comparing latent structures across humans and LLMs, complementing the wiki's work on [[psychometrically-aware-ai|psychometrically aware AI]]. It shows that even when an LLM scores well on an exam, the score may not be interpretable the way a human score is — because the [[item-response-theory|latent construct structure]] is different. This is a deeper form of [[assessment-validity]] concern than raw score comparisons: it applies to [[educational-measurement]] practices, [[ai-ed-evaluation|AI evaluation]] using human benchmarks, and any [[automated-assessment|AI-based assessment]] that assumes human validity evidence transfers. For [[benchmark|LLM benchmarks]] built from human assessments, the implication is that benchmark scores may index a different underlying structure for the AI than for the humans the items were normed on.

## Connected Concepts
- [[assessment-validity]]
- [[educational-measurement]]
- [[psychometrically-aware-ai]]
- [[item-response-theory]]
- [[ai-ed-evaluation]]
- [[llm]]
- [[generative-ai]]
- [[benchmark]]
- [[automated-assessment]]
- [[higher-ed]]

## Connected Articles
- [[llm-psychometric-calibration-cdp]] — Aligning LLM-simulated and human examinees for psychometric calibration
- [[llm-item-difficulty-prediction]] — Cognitive evaluation of LLM item-difficulty prediction
- [[jin-glat-genai-literacy-assessment]] — GLAT: IRT-validated GenAI literacy test
- [[llm-difficulty-calibration-programming-exams-2026]] — From evaluated models to evaluation aids
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams
- [[coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene]] — Coauthorship integrity and reconceptualising assessment validity
- [[ground-truth-reliability-aied]] — Modernizing ground truth in AIED evaluation

## Citation
Strugatski, A., Zeinfeld, L., & Alexandron, G. (2026). [*Do Assessment Instruments Measure the Same Thing for Humans and LLMs? A Latent Structure Analysis*](https://arxiv.org/abs/2608.15630). arXiv:2608.15630 [cs.HC].
