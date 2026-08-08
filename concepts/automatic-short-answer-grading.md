---
title: Automatic Short Answer Grading with LLMs
created: 2026-05-07
updated: 2026-05-07
type: concept
tags: [automated-grading, llm, formative-assessment, feedback-loop, higher-ed, learning-analytics]
confidence: medium
sources: [raw/papers/cong-confidence-asag-2026.md]
---
# Automatic Short Answer Grading with LLMs

> Zero-shot LLMs perform strongly on ASAG without task-specific fine-tuning, but **model-based confidence signals alone are insufficient** for reliable uncertainty quantification. A hybrid framework combining epistemic (model-derived) and aleatoric (dataset-derived) uncertainty significantly improves selective grading and calibration.^[[cong-confidence-asag-2026]]
> **Source:** [Automatic Short Answer Grading with LLMs](https://arxiv.org/abs/2605.00200)


## Why Confidence Matters

Automatic Short Answer Grading (ASAG) is never perfect. Upper bounds on accuracy arise from:
- Linguistic variability in student responses
- Ambiguity in scoring criteria
- Inherent disagreement among human graders

Reliable confidence estimates are therefore essential for **human-in-the-loop review**—flagging uncertain cases for teacher attention rather than auto-grading everything.^[[cong-confidence-asag-2026]]

## Three Model-Based Confidence Strategies

All generated with `gpt-oss-20b` at temperature 0.1:

| Strategy | Mechanism | Edge Case Failure |
|---|---|---|
| **Verbalizing** | Prompt model to self-report confidence in [0,1] | Overconfident on ambiguous but plausible phrasings |
| **Latent** | Softmax log-likelihood of predicted label token | Underconfident when label token probabilities are flat |
| **Consistency** | Sample 5 predictions at varying temperatures; measure agreement | Fails when model is consistently wrong |

All three, when used in isolation, miss **aleatoric uncertainty**—ambiguity intrinsic to the data itself.^[[cong-confidence-asag-2026]]

## Aleatoric Uncertainty via Semantic Clustering

To capture data-level ambiguity:

1. **Embed** student responses with `all-MiniLM-L6-v2`
2. **Cluster** via agglomerative hierarchical clustering (Ward linkage) on a 10% calibration subset
3. **Quantify** within-cluster label heterogeneity via normalized Shannon entropy
4. **Assign** test responses to nearest cluster centroid

High-entropy clusters indicate inherently ambiguous responses (e.g., partially correct, underspecified, or stylistically unusual).^[[cong-confidence-asag-2026]]

## Hybrid Confidence Fusion

Feature vector per response: `[s^verb, s^lat, s^cons, s^alea, token_length]`

- **Classifier:** Random Forest (500 trees) trained on human labels
- **Calibration:** Platt scaling via 5-fold CV to yield calibrated probability p ∈ [0,1]

**Result:** Hybrid confidence with aleatoric uncertainty outperforms all single-source approaches on selective prediction metrics (AUROC, AUARC) and reliability metrics (ECE, MCE, Brier).^[[cong-confidence-asag-2026]]

## Implications for Human-in-the-Loop Assessment

- **Selective grading:** Flag low-confidence responses for human review; auto-grade high-confidence responses
- **Teacher dashboards:** Display confidence alongside grades to support triage
- **Fairness:** Aleatoric uncertainty may reveal systemically ambiguous scoring criteria that need rubric revision

## Relationship to Tutoring-Specific Design

ASAG confidence estimation is complementary to [[tutoring-specific-vs-general-ai|tutoring-specific feedback]]: while tutoring tools generate formative scaffolds, grading tools must manage summative uncertainty. Both require explicit epistemic humility—acknowledging when the model should defer to human judgment.^[[cong-confidence-asag-2026]]

## Citation

Leibniz, A.D., |, S.M., entropy, Q.W.H.V.N.S., calibration, C.R.F.T.P.S.F., & Brier), E.S.P.A.R.M. (2026). *Automatic Short Answer Grading with LLMs*

## Related Pages
- [[rubric-aware-grading-rec-cbm]] — 2 of 8 papers in May 28 scan
  - [[llm-automated-assessment-student-self-explanations]] — Binary classification of student self-explanations using LLMs vs. semantic similarity (2026)
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[lata-ferpa-compliant-local-llm-autograder]] — Extends ASAG to upper-division STEM with reference solutions
- [[short-answer-scoring-quality-degradation]] — Complements confidence-aware grading with quality-conditioned analysis
- [[ai-peer-feedback-systems]] — AICoFe's multi-LLM approach to formative feedback generation
- [[ai-k12-evidence-base]] — Broader evidence landscape
- [[formative-assessment]] — Confidence-aware ASAG for practice vs. summative distinction
- [[human-in-the-loop-ai]] — Epistemic uncertainty as trigger for human escalation
- [[cross-dataset-bloom-question-classification]] -- LLMs with tailored prompting generalize better than supervised models for cross-dataset Bloom taxonomy classification
- [[psyscore-essay-scoring-zpd-feedback]] -- PsyScore: A Psychometrically-Aware Framework for Trait-Adaptive Essay Scoring and ZPD-Scaffolded Feedback
- [[automated-formative-assessments-a-level-sciences]] — Automating the marking of handwritten mock exams enables much higher formative-assessment frequency 
- [[ai-scoring-language-bias-physics]]
