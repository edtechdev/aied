---
title: Confidence-Aware Automatic Short Answer Grading
created: 2026-07-29
updated: 2026-07-29
type: concept
tags: [assessment, automated-grading, confidence]
sources: [raw/papers/cong-confidence-asag-2026.md]
confidence: medium
---

> **Confidence-Aware ASAG** — A hybrid confidence estimation framework for Automatic Short Answer Grading with LLMs that fuses model-based confidence signals (verbalized, latent, consistency-based) with dataset-derived aleatoric uncertainty via Random Forest + Platt scaling, enabling reliable selective prediction and principled human-in-the-loop review workflows.

**Authors:** Longwei Cong, Sonja Hahn, Sebastian Gombert, Leon Camus, Hendrik Drachsler, Ulf Kroehne · DIPF | Leibniz Institute, Goethe University Frankfurt, Chemnitz University of Technology · AIED 2026 · LLM: gpt-oss-20b · Dataset: SciEntsBank Test_UD (4,562 responses)

## Key Findings

1. **Model-based confidence alone is insufficient.** Three LLM confidence signals were systematically compared — **verbalizing** (prompting the model to self-report confidence), **latent** (softmax-normalized conditional log-likelihood of the predicted label token), and **consistency-based** (agreement fraction across 5 predictions at temperatures [0.2–1.0]) — and none individually provided reliable uncertainty estimates for ASAG.

2. **Aleatoric uncertainty must be explicitly modeled.** The key innovation is modeling dataset-derived (aleatoric) uncertainty via semantic heterogeneity: student responses are embedded with all-MiniLM-L6-v2, clustered with agglomerative hierarchical clustering (Ward linkage), and within-cluster entropy quantifies inherent ambiguity. This captures the fundamental reality that some student answers are genuinely ambiguous, independent of model quality.

3. **Hybrid fusion outperforms single-source approaches.** Combining model-based signals with aleatoric uncertainty via a Random Forest classifier (500 trees) followed by Platt scaling produced the best calibration, evaluated on both selective prediction (AUROC / AUARC) and reliability (ECE / MCE / Brier score). The hybrid framework acknowledges that both epistemic and aleatoric uncertainty contribute to grading unreliability.

4. **Principled evaluation enables safe deployment.** By evaluating with selective prediction metrics rather than raw accuracy, the framework enables a practical workflow: high-confidence predictions can be auto-graded, while low-confidence cases are routed to human review. This is a more realistic deployment model than assuming perfect automation.

## Implications

This work addresses a critical gap in [[automatic-short-answer-grading]]: the gap between knowing that LLMs can grade short answers and trusting them enough to deploy in high-stakes settings. The central insight — that model confidence signals are unreliable on their own — is consistent with broader findings in [[confidence-aware-ai-assessment]] and [[psychometrically-aware-ai]], which argue that AI assessment systems must be calibrated against human judgment uncertainty, not just accuracy.

The explicit modeling of aleatoric uncertainty is particularly important for [[automated-grading]]. In ASAG, some student responses are genuinely ambiguous even to expert human raters — this is not a model failure but a property of the task. By modeling this inherent ambiguity through semantic clustering, the framework prevents the system from overconfidently misclassifying responses that are fundamentally uncertain.

For [[human-in-the-loop]] workflows in educational assessment, the selective prediction approach provides a principled mechanism for triage: rather than requiring educators to review everything (defeating the purpose of automation) or trusting the model blindly (risking harm), the confidence framework identifies exactly which responses need human attention. This has practical implications for [[short-answer-scoring-quality-degradation]] research and the design of [[hybrid-e-assessment-semi-automated-grading]] systems.

The use of [[retrieval-augmented-generation]] and [[synthetic-data]] techniques for calibration could extend this framework beyond the SciEntsBank domain, enabling confidence-aware grading across diverse subject areas and languages.

## Related Pages

- [[automatic-short-answer-grading]] — Core ASAG paradigm for automated response evaluation
- [[confidence-aware-ai-assessment]] — Broader landscape of confidence estimation in AI assessment
- [[automated-grading]] — General approaches to AI-assisted grading
- [[human-in-the-loop]] — Architectures that route uncertain cases to human judgment
- [[psychometrically-aware-ai]] — AI systems calibrated against measurement principles
- [[short-answer-scoring-quality-degradation]] — Quality challenges in ASAG at scale
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid human-AI grading workflows
- [[ai-ed-evaluation]] — Evaluation frameworks in AI and education
