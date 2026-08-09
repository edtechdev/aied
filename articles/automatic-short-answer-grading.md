---
title: Automatic Short Answer Grading with LLMs
created: 2026-05-07
updated: 2026-05-07
type: article
tags: [automated-grading, llm, formative-assessment, feedback-loop, higher-ed, learning-analytics, human-in-the-loop-ai, automated-assessment]
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

- [[formative-assessment]]
- [[human-in-the-loop-ai]]

## Connected Articles

- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-peer-feedback-systems]] — AI Peer Feedback Systems
- [[ai-scoring-language-bias-physics]] — AI-based scoring systematically underestimates conceptual understanding of linguistically weak students' explanations...
- [[automated-formative-assessments-a-level-sciences]] — The Effect of High-Frequency, Automatically-marked Formative Assessments on Student Outcomes in A-Level Sciences
- [[cong-confidence-asag-2026]] — Confidence-Aware Automatic Short Answer Grading
- [[cross-dataset-bloom-question-classification]] — Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework
- [[llm-automated-assessment-student-self-explanations]] — Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education
- [[psyscore-essay-scoring-zpd-feedback]] — PsyScore: A Psychometrically-Aware Framework for Trait-Adaptive Essay Scoring and ZPD-Scaffolded Feedback
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading
- [[short-answer-scoring-quality-degradation]] — Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specifi...
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[tutoring-specific-vs-general-ai]] — Tutoring-Specific vs. General-Purpose AI in Education
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development

## Citation

Leibniz, A.D., |, S.M., entropy, Q.W.H.V.N.S., calibration, C.R.F.T.P.S.F., & Brier), E.S.P.A.R.M. (2026). [*Automatic Short Answer Grading with LLMs*](https://arxiv.org/abs/2605.00200)
