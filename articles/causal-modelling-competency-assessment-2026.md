---
title: "Causal Modelling of Support Interventions for Student Competency Assessment"
created: "2026-08-27T09:14:00-04:00"
updated: "2026-08-27T09:14:00-04:00"
type: article
tags: [educational-measurement, student-modeling, assessment, item-response-theory, learning-analytics, adaptive-learning]
research_method: [psychometrics]
sources: ['raw/papers/causal-modelling-competency-assessment-2026.md']
confidence: high
---

> **Synthesis:** Mangili, Antonucci, and Cabañas (2026) advocate adopting a structural causal modelling approach to [[educational-measurement|educational assessment]], moving beyond probabilistic belief updating toward a framework that explicitly supports interventional and counterfactual reasoning. They propose a protocol for constructing such a model and analyze the practical relevance of forms of reasoning inaccessible to standard associative models — including explicit modelling of interventions such as hints and related counterfactual scenario analysis. Although the protocol requires structural equations to be elicited from experts, the necessary information is purely logical and does not rely on probabilistic, less-tenable assumptions. They illustrate the approach using data from an assessment employing complex tasks designed to measure compulsory-school student algorithmic skills.

## Key Findings

1. The paper advocates a structural causal modelling framework for [[student-modeling|student competency assessment]], moving beyond standard probabilistic (associative) belief updating.
2. The framework explicitly supports interventional reasoning (e.g., modelling the effect of hints) and counterfactual scenario analysis, which standard item-response-theory-style models cannot express.
3. A concrete protocol is proposed for constructing the causal model, with structural equations elicited from domain experts using purely logical information.
4. Applied to compulsory-school algorithmic-skills assessment, the approach demonstrates identifiable and practically relevant interventional/counterfactual queries alongside group-level inferences.
5. An expert-elicited causal model is more interpretable and supports explicit causal reasoning even where a purely data-driven approach might have comparable predictive accuracy.

## The Causal Assessment Framework

Traditional empirical assessment is grounded in psychometric models such as [[item-response-theory]], which relate student competence levels to performance on assessment tasks but support only associative reasoning. The authors propose replacing the probabilistic updating framework with structural causal models that encode the generative process behind student responses, enabling questions of the form "what would happen if a student received a hint?" (intervention) or "would this student have succeeded had they not received support?" (counterfactual). This is directly relevant to [[formative-assessment]] and [[adaptive-learning]], where support interventions such as hints are central, and to [[learning-analytics]] pipelines that seek to evaluate the causal effect of instructional actions rather than mere correlation.

## Implications for AI in Education

By making interventions and counterfactuals explicit, causal assessment models align with the needs of [[intelligent-tutoring|intelligent tutoring]] and adaptive systems that must decide whether and how to intervene. The approach complements correlational [[learning-analytics]] by distinguishing the effect of a support action from the prior competence it targets, supporting more principled [[assessment]] design and interpretation. It also connects to the broader movement toward causal and interpretable methods in [[ai-education|AI in education]], where explainability of student models matters for [[teacher-role|educator]] trust and for fair, valid decisions.

## Connected Concepts

- [[educational-measurement]]
- [[student-modeling]]
- [[assessment]]
- [[formative-assessment]]
- [[item-response-theory]]
- [[learning-analytics]]
- [[adaptive-learning]]
- [[psychometrically-aware-ai]]

## Connected Articles

- [[cotal-formative-assessment-scoring-2026]] — Cotal: Formative Assessment Scoring
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable Knowledge Tracing
- [[cognitive-load-transfer-knowledge-tracing-2026]] — Cognitive Load and Transfer in Knowledge Tracing
- [[trust-reliance-ai-education-2026]] — Trust and Reliance in AI Education
- [[bandit-driven-llm-essay-scoring-2026]] — Bandit-Driven Prompt-Selection for Low-Cost LLM Essay Scoring

## Citation

Mangili, F., Antonucci, A., & Cabañas, R. (2026). [*Causal modelling of support interventions for student competency assessment*](https://arxiv.org/abs/2608.24632).
