---
title: "New AI-Driven Tools for Enhancing Campus Well-being: A Prevention and Intervention Approach"
created: "2026-05-16T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
foundations: [ai-literacy]
technology: [affective-computing, generative-ai, llm, edtech-platform]
stakeholders: [administrator, student-experience]
connected_faqs: [ai-anxiety-wellbeing]
research_method: [system development]
audience: [learners, administrators]
level: [higher ed]
sources: ['raw/papers/2605.10804.md']
confidence: medium
page_kind: [framework, evaluation]
---

> **Synthesis:** This dissertation presents an integrated AI framework for campus [[well-being]] spanning prevention (improving feedback collection) and intervention (advancing mental health detection). It represents an important application of [[llm]] and [[generative-ai]] [[ai-technologies|technologies]] to [[student-experience]] that extends beyond academic learning to holistic student support in [[higher-ed]].
> On the prevention side, **TigerGPT** — a personalized survey [[conversational-ai|chatbot]] grounded in conversational design and [[student-engagement|engagement]] theory — achieved 75% [[usability-research|usability]] and 81% satisfaction, demonstrating that AI-mediated feedback collection can improve on traditional survey instruments. **AURA**, an adaptive follow-up question framework using [[reinforcement-learning|reinforcement learning]], dynamically selects question types (validate, specify, reflect, probe) to deepen responses, achieving a +0.12 mean quality gain (p=0.044, d=0.66).
> On the intervention side, **PsychoGPT** provides explainable mental health assessment built on DSM-5 and PHQ-8 guidelines — a [[affective-computing]] application that prioritizes [[medical-education|clinical]] grounding and [[explainable-ai|interpretability]] over black-box classification. The **Stacked Multi-Model Reasoning (SMMR)** architecture reduces [[hallucination-risk|hallucination risk]] by layering expert models: early layers handle localized subtasks while later layers reconcile findings, outperforming single-model solutions on the DAIC-WOZ [[benchmark]].
> The integrated framework — where adaptive survey insights flow into specialized mental health detection models — represents a novel [[edtech-platform]] architecture for campus well-being. For the [[administrator]] perspective, this work provides a concrete roadmap for universities seeking to deploy AI tools that monitor student satisfaction and detect mental health risks — areas where many institutions currently lack effective methods.
## What this means for practice

- **Administrators.** Replace the static climate survey with a conversational channel where response rates stall: TigerGPT's pilot drew 21 feedback surveys and 17 written evaluator reports, at a 75% usability rating, 81% satisfaction, and 50% of users preferring it to a traditional questionnaire.
- **Administrators.** Keep the AI advisory: route quality summaries and flagged disclosures to counseling and student-affairs staff rather than acting on model output, since the proposed framework has the preventive layer hand off to human services when warranted.
- **Administrators.** Settle consent, data retention, and escalation rules before collecting well-being disclosures, because the design keeps adaptation within a session — reacting to the present respondent rather than pooling sensitive signals across users.
- **Administrators.** Specify within-session adaptation of follow-up question types when procuring or building a campus chatbot: AURA's controlled comparison (n = 20 conversations per condition) produced a +0.12 mean gain in response quality over non-adaptive baselines (p = 0.044, d = 0.66) with 63% fewer specification prompts.
- **Administrators.** Do not treat the clinical components as deployment-ready: Psycho Analyst and SMMR were evaluated on the public DAIC-WOZ corpus and 48 psychiatric case studies, not on a live campus population.

## Limitations

- The preventive evidence is pilot-scale at a single university: 21 completed feedback surveys and 17 student evaluator reports, with the traditional questionnaire rather than a controlled alternative as the comparison.
- AURA was tested in controlled evaluations of n = 20 conversations per condition, with its priors drawn from 96 prior campus-climate conversations (467 exchanges); the dissertation notes that its exploration can be locally suboptimal in early exchanges and that the LSDE quality signal is a proxy that may reflect dataset biases.
- The mental health tools were validated on the public DAIC-WOZ dataset and 48 curated case studies, so reported performance such as Psycho Analyst's F1 of 0.929 does not establish accuracy on student disclosures in a campus service.
- The integrated prevention-to-intervention pipeline is proposed rather than deployed: no campus has run the full path from survey signals through risk detection to a service handoff.

## Connected Concepts

- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[affective-computing]]
- [[edtech-platform]]
- [[administrator]]
- [[well-being]]
- [[reinforcement-learning]]
- [[hallucination-risk]]
## Connected Articles

- [[bloom-aligned-educational-control-llms]] — From Execution to Education: A Bloom-Aligned Framework for Measuring Educational Control in LLMs
- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments
- [[ai-learning-assistants-higher-ed-large-scale]] — Using AI-based Learning Assistants in Higher Education: A Large-Scale Descriptive Analysis
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[youtube-frames-chatgpt-education]] — How YouTube Frames ChatGPT Use in Education: An Epistemic Network Analysis with Supporting Multimodal Metadata
- [[multi-site-vr-immersive-learning]] — Design and Implementation of a Real-time Multi-site Immersive Learning System Using Photon Fusion

## Citation

Tang, J. (2026). [New AI-Driven Tools for Enhancing Campus Well-being: A Prevention and Intervention Approach](https://arxiv.org/abs/2605.10804) [PhD Dissertation, University of Missouri].
