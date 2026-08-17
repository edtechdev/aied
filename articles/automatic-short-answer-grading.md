---
title: Automatic Short Answer Grading with LLMs
created: "2026-05-07T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [automated-assessment, llm, formative-assessment, feedback, higher-ed, learning-analytics, human-in-the-loop-ai, automated-assessment]

sources: ['raw/papers/cong-confidence-asag-2026.md']
confidence: medium
---

> Automatic Short Answer Grading (ASAG) is never perfect. Upper bounds on accuracy arise from:

> Zero-shot LLMs perform strongly on ASAG without task-specific fine-tuning, but **model-based confidence signals alone are insufficient** for reliable uncertainty quantification. A hybrid framework combining epistemic (model-derived) and aleatoric (dataset-derived) uncertainty significantly improves selective grading and calibration.^[[cong-confidence-asag-2026]]

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

## Connected Concepts

- [[automated-essay-scoring]]
- [[human-in-the-loop-ai]]
- [[ai-feedback-quality]]
- [[ai-ed-evaluation]]
- [[automated-assessment]]
- [[automated-assessment]]
- [[assessment]]
- [[assessment-validity]]
- [[formative-assessment]]

## Connected Articles

- [[cong-confidence-asag-2026]]
- [[tutoring-specific-vs-general-ai]]
## Citation

Cong, L., Hahn, S., Gombert, S., Camus, L., Drachsler, H., & Kroehne, U. (2026). [*Confidence Estimation in Automatic Short Answer Grading with LLMs*](https://arxiv.org/abs/2605.00200). arXiv:2605.00200.
