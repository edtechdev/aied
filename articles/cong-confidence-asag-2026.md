---
title: Confidence-Aware Automatic Short Answer Grading
created: 2026-07-29
updated: 2026-07-29
type: article
tags: [assessment, automated-grading, confidence, psychometrically-aware-ai, hybrid-e-assessment-semi-automated-grading, retrieval-augmented-generation, ai-ed-evaluation]
sources: ['raw/papers/cong-confidence-asag-2026.md']
confidence: medium
---

> **Confidence-Aware ASAG** — A hybrid confidence estimation framework for Automatic Short Answer Grading with LLMs that fuses model-based confidence signals (verbalized, latent, consistency-based) with dataset-derived aleatoric uncertainty via Random Forest + Platt scaling, enabling reliable selective prediction and principled human-in-the-loop review workflows.

## Key Findings

1. **Model-based confidence alone is insufficient.** Three LLM confidence signals were systematically compared — **verbalizing** (prompting the model to self-report confidence), **latent** (softmax-normalized conditional log-likelihood of the predicted label token), and **consistency-based** (agreement fraction across 5 predictions at temperatures [0.2–1.0]) — and none individually provided reliable uncertainty estimates for ASAG.

2. **Aleatoric uncertainty must be explicitly modeled.** The key innovation is modeling dataset-derived (aleatoric) uncertainty via semantic heterogeneity: student responses are embedded with all-MiniLM-L6-v2, clustered with agglomerative hierarchical clustering (Ward linkage), and within-cluster entropy quantifies inherent ambiguity. This captures the fundamental reality that some student answers are genuinely ambiguous, independent of model quality.

3. **Hybrid fusion outperforms single-source approaches.** Combining model-based signals with aleatoric uncertainty via a Random Forest classifier (500 trees) followed by Platt scaling produced the best calibration, evaluated on both selective prediction (AUROC / AUARC) and reliability (ECE / MCE / Brier score). The hybrid framework acknowledges that both epistemic and aleatoric uncertainty contribute to grading unreliability.

4. **Principled evaluation enables safe deployment.** By evaluating with selective prediction metrics rather than raw accuracy, the framework enables a practical workflow: high-confidence predictions can be auto-graded, while low-confidence cases are routed to human review. This is a more realistic deployment model than assuming perfect automation.

## Implications

This work addresses a critical gap in [[automatic-short-answer-grading]]: the gap between knowing that LLMs can grade short answers and trusting them enough to deploy in high-stakes settings. The central insight — that model confidence signals are unreliable on their own — is consistent with broader findings in [[confidence-aware-ai-assessment]] and psychometrically-aware-ai, which argue that AI assessment systems must be calibrated against human judgment uncertainty, not just accuracy.

The explicit modeling of aleatoric uncertainty is particularly important for [[automated-grading]]. In ASAG, some student responses are genuinely ambiguous even to expert human raters — this is not a model failure but a property of the task. By modeling this inherent ambiguity through semantic clustering, the framework prevents the system from overconfidently misclassifying responses that are fundamentally uncertain.

For [[human-in-the-loop-ai]] workflows in educational assessment, the selective prediction approach provides a principled mechanism for triage: rather than requiring educators to review everything (defeating the purpose of automation) or trusting the model blindly (risking harm), the confidence framework identifies exactly which responses need human attention. This has practical implications for [[short-answer-scoring-quality-degradation]] research and the design of [[hybrid-e-assessment-semi-automated-grading]] systems.

The use of [[rag]] and synthetic-data techniques for calibration could extend this framework beyond the SciEntsBank domain, enabling confidence-aware grading across diverse subject areas and languages.

## Connected Concepts

- [[ai-ed-evaluation]]
- [[automated-grading]]
- [[confidence-aware-ai-assessment]]
- psychometrically-aware-ai
- [[rag]]
- [[authentic-assessment]] — Authentic Assessment
## Connected Articles

- [[automatic-short-answer-grading]] — Automatic Short Answer Grading with LLMs
- [[short-answer-scoring-quality-degradation]] — Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specifi...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-scoring-language-bias-physics]] — AI-based scoring systematically underestimates conceptual understanding of linguistically weak students' explanations...
- [[aiawe-automated-writing-evaluation]] — AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models
- [[aicode-collaborative-feedback-system]] — AICoFe: Implementation and Deployment of an AI-Based Collaborative Feedback System for Higher Education
- [[aissa-slides-analysis]] — AISSA: AI-based Student Slides Analysis Tool for Academic Presentations
- [[authentic-products-authenticated-processes-2026]] — From authentic products to authenticated processes: authentic assessment in AI-rich higher education
- [[automated-formative-assessments-a-level-sciences]] — The Effect of High-Frequency, Automatically-marked Formative Assessments on Student Outcomes in A-Level Sciences
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated Grading of Linux/Bash Examinations Using Large Language Models
- [[becerra-aicofe-feedback-2026]] — AICoFE: AI-Powered Feedback System
- [[behaviorally-adaptive-visual-diversion-assessment-2026]] — Behaviorally Adaptive Visual Diversion for Inclusive and Resilient Digital Assessment Delivery
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: redesigning authentic assessment in an AI-mediated world
- [[calibrating-trustworthiness-llm-education-2026]] — Calibrating Trustworthiness: Co-Designing Metrics and Visualizations for Evaluating LLMs in Education
- [[code-gen]] — CODE-GEN: A Human-in-the-Loop RAG-Based Agentic AI System for Multiple-Choice Question Generation
- [[confidence-aware-student-drawing-assessment]] — Confidence-Aware Automated Assessment of Student-Drawn Scientific Models
- [[correct-answer-trap-ai-tutor]] — Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning
- [[correct-answer-trap-misconceptions]] — The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback
- [[cross-dataset-bloom-question-classification]] — Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs
- [[hybrid-e-assessment-semi-automated-grading]]
## Citation

Cong, L., Hahn, S., Gombert, S., Camus, L., Drachsler, H., & Kroehne, U. (2026). [*Confidence Estimation in Automatic Short Answer Grading with LLMs*](https://arxiv.org/abs/2605.00200). arXiv:2605.00200.
