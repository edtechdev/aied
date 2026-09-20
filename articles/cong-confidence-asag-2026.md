---
title: "Confidence Estimation in Automatic Short Answer Grading with LLMs"
created: "2026-07-29T04:33:04-04:00"
updated: "2026-09-20T03:43:02-04:00"
type: article
technology: [rag]
assessment: [assessment, automated-assessment, psychometrically-aware-ai]
audience: [software developers]
research_method: [system development]
page_kind: [evaluation]
sources: ['raw/papers/cong-confidence-asag-2026.md']
confidence: medium
methods: [ai-ed-evaluation, benchmark]
---

> **Synthesis:** **Confidence-Aware ASAG** — A hybrid confidence estimation framework for Automatic Short Answer Grading with LLMs that fuses model-based confidence signals (verbalized, latent, consistency-based) with dataset-derived aleatoric uncertainty via Random Forest + Platt scaling, enabling reliable selective prediction and principled human-in-the-loop review workflows.

## Key Findings

1. **Model-based confidence alone is insufficient.** Three [[llm]] confidence signals were systematically compared — **verbalizing** ([[prompt-engineering|prompting]] the model to self-report confidence), **latent** (softmax-normalized conditional log-likelihood of the predicted label token), and **consistency-based** (agreement fraction across 5 predictions at temperatures [0.2–1.0]) — and none individually provided reliable uncertainty estimates for ASAG.
2. **Aleatoric uncertainty must be explicitly modeled.** The key innovation is modeling dataset-derived (aleatoric) uncertainty via semantic heterogeneity: student responses are embedded with all-MiniLM-L6-v2, clustered with agglomerative hierarchical clustering (Ward linkage), and within-cluster entropy quantifies inherent ambiguity. This captures the fundamental reality that some student answers are genuinely ambiguous, independent of model quality.
3. **Hybrid fusion outperforms single-source approaches.** Combining model-based signals with aleatoric uncertainty via a Random Forest classifier (500 trees) followed by Platt scaling produced the best calibration, evaluated on both selective prediction (AUROC / AUARC) and reliability (ECE / MCE / Brier score). The hybrid framework acknowledges that both epistemic and aleatoric uncertainty contribute to grading unreliability.
4. **Principled evaluation enables safe deployment.** By evaluating with selective prediction metrics rather than raw accuracy, the framework enables a practical workflow: high-confidence predictions can be auto-graded, while low-confidence cases are routed to human review. This is a more realistic deployment model than assuming perfect automation.

## What this means for practice

- **Designers.** Do not ship a short-answer grader on model-based confidence alone: verbalized, latent, and consistency-based signals each failed to separate correct from incorrect responses reliably.
- **Designers.** Model dataset ambiguity explicitly — embed responses with a sentence encoder such as all-MiniLM-L6-v2, cluster them, and use within-cluster entropy — before setting an auto-grade threshold.
- **Designers.** Fuse model-based signals with that aleatoric uncertainty through the Random Forest plus Platt scaling pipeline, which gave the best selective prediction and calibration on AUROC/AUARC and ECE/MCE/Brier.
- **Designers.** Route by confidence rather than reviewing everything or trusting the model: high-confidence predictions can be auto-graded while low-confidence answers go to human review.
- **Designers.** Recalibrate when the answer population or rubric changes, because the aleatoric component is a property of the dataset, not of the model.

## Limitations

- Hardware limits confined the study to one state-of-the-art open-weight model, so cross-model generalization is untested.
- Evaluation used a single dataset, SciEntsBank, and the authors call for diverse domains, model sizes, and annotation schemes before generalizing.
- Consistency-based confidence came from 5 samples per item at temperatures between 0.2 and 1.0, a narrow sampling budget for estimating instability.
- No educator study is reported, so how teachers interpret and act on confidence estimates in real grading workflows remains unknown.
## Connected Concepts

- [[ai-ed-evaluation]]
- [[automated-assessment]]
- [[psychometrically-aware-ai]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[assessment]]
## Connected Articles

- [[short-answer-scoring-quality-degradation]] — Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specifi...
- [[confidence-aware-student-drawing-assessment]] — Confidence-Aware Automated Assessment of Student-Drawn Scientific Models
- [[calibrating-trustworthiness-llm-education-2026]] — Calibrating Trustworthiness: Co-Designing Metrics and Visualizations for Evaluating LLMs in Education
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated Grading of Linux/Bash Examinations Using Large Language Models
- [[hybrid-e-assessment-semi-automated-grading]]
- [[aiawe-automated-writing-evaluation]] — AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback
- [[automated-formative-assessments-a-level-sciences]] — The Effect of High-Frequency, Automatically-marked Formative Assessments on Student Outcomes in A-Level Sciences
## Citation

Cong, L., Hahn, S., Gombert, S., Camus, L., Drachsler, H., & Kroehne, U. (2026). [*Confidence Estimation in Automatic Short Answer Grading with LLMs*](https://arxiv.org/abs/2605.00200).
