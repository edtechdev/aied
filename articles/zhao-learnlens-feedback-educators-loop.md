---
title: "LearnLens: Personalised, Curriculum-Grounded AI Feedback with Educators in the Loop"
created: "2026-08-15T16:09:27-04:00"
updated: "2026-08-24T20:50:00-04:00"
type: article
tags: [ai-feedback-quality, feedback, llm, generative-ai, stem-education, student-modeling, human-in-the-loop-ai, curriculum-design, teacher-role, educational-nlp]
discipline: [stem education]
audience: [teacher role]
category: [curriculum design]

sources: ['raw/papers/zhao-learnlens-feedback-educators-loop.md']
confidence: high
---

## Core Finding

**LearnLens is a modular, LLM-based system that generates personalised, curriculum-aligned feedback in science education by combining error-aware assessment, a topic-linked memory chain, and an educator-in-the-loop interface.** Zhao et al. (2025) report that this architecture produces high-quality scoring (MSE 3.19, 8–13% below any baseline) while keeping latency (~11.4s) and cost ($0.0099/request) competitive, and that teachers rated it strongly for usability, curriculum relevance (4.4/5), and scientific accuracy (4.3/5).

## Three Core Components

LearnLens is designed as a dual-interface system serving both teachers and students, built around three components that each target a shortcoming of prior AI-feedback systems.

### 1. Error-Aware Assessment Module
The "Assessor" maps each student answer onto a curriculum-aligned mark scheme of weighted key concepts, awarding **partial credit** when a concept is detected even if the final answer is wrong. It **decouples conceptual understanding from writing quality**: grammatical and typographical issues are captured by a separate expression-quality flag and excluded from the numerical grade. A self-reflection mechanism is triggered when a direct "grade-this-answer" prompt score diverges from the concept-matching score, and the transparent weighting of concepts is said to ease disputes and remove the "black box" impression.

### 2. Curriculum-Grounded Generation (Chain-of-Concept)
Rather than similarity-based retrieval, the system organises past assessments by curriculum topics into a **topic graph** and confines retrieval to the topic subgraph for a query — an explicit departure from traditional RAG. Each question is decomposed into sub-question nodes labelled with curriculum topics; retrieval is confined to the topic subgraph and ranked by a FAISS-based ranker. The authors argue this reduces cross-topic noise and improves relevance, producing pedagogically coherent feedback aligned to learning objectives. A safety-aligned model filters harmful, biased, or otherwise inappropriate language post-generation.

### 3. Educator-in-the-Loop Interface
Teachers can monitor student performance, review and revise feedback through a conversational interface, propagate edits across an entire quiz, and select embedded **verifiers** that score feedback on Scientific Accuracy, Clarity (accessible to GCSE-level students), and Specificity. A verification-and-revision loop iterates until all criteria meet a threshold (min_i r_i ≥ τ) or the iteration limit is reached, returning the highest-scoring feedback; verification uses a *separate* foundation model from the generator to mitigate model-family bias. Importantly, teacher intervention is treated as a signal of dissatisfaction that triggers allocation of additional computational resources for deeper reflection — prioritising feedback quality and user trust over speed.

### 4. Student-Facing Interface (Assessor–Planner–Generator)
The student side combines three modules: the **Assessor** delivers consistent, fine-grained, partial-credit scoring (weighted sum of concept matches, robust to surface errors); the **Planner** retrieves curriculum-grounded evidence from the topic graph and analyses pupil errors and [[prior-knowledge|prior knowledge]] to select the most effective feedback strategy; and the **Generator** produces feedback via an LLM self-reflection mechanism (reasoning over the student's response and mark scheme), with a safety-aligned filter applied post-generation. This delivers timely, tailored feedback that promotes continuous learning.

## Evaluation Results

- **Teacher user study (N = 30, prior STEM teaching experience):** Mean ratings never fell below 4.1/5 across nine Likert items; ~80% called the menu "intuitive"; 75% expect results in under 15 seconds (met in >90% of local-deployment cases). Median time per assignment dropped from 10–30 minutes to under 5 minutes. A χ² test (p = 0.63) showed no significant difference in adoption intent across prior-method groups, with every cohort exceeding 65% "continue using" (automation-savvy peak 85%).
- **Agent performance (100 authentic student answers):** LearnLens scored best on MSE (3.190), correlation (0.388), exact (0.354), and ±1 (0.747) accuracy, while maintaining latency ~4× faster than QwQ-32B and cost 72% cheaper. This is achieved via a **modular pipeline**: lightweight models handle routine subtasks, while larger models are invoked only when deeper reasoning is needed, supported by vLLM serving and speculative decoding. MSE dropped 8–13% below any baseline while latency (~11.4s) was comparable to Qwen2.5-32B and cost ($0.0099/request) matched it.
- **Experience-sensitive adoption priorities:** Manual graders value speed (91%) and usability (82%) most; prompt-tool users distribute credit more evenly; other-automation users rank accuracy (88%) and reliability (75%) highest — suggesting the verifier-in-the-loop architecture addresses limitations they met elsewhere.
- **Deployment priorities:** (1) meeting the sub-15-second latency ceiling via inference batching and on-device caching; (2) adaptive onboarding that branches on prior practice (time-saving narratives vs. accuracy-safeguard demonstrations); (3) verifier transparency — exposing verifier scores to all users to bolster [[trust]].
- **Privacy:** All experiments were conducted via **local deployment** due to student data [[privacy]] concerns (evaluated models: Llama-3-8B, Qwen2.5-32B, QwQ-32B).

## Implications

This work illustrates how [[curriculum-design]] can be operationalised inside an [[llm]]-based feedback system, and how [[human-in-the-loop-ai]] oversight — via interactive teacher revision and embedded verifiers — can address the [[hallucination-risk]] and lack-of-control criticisms levelled at purely automated feedback. The topic-linked memory chain is a direct contribution to reducing retrieval noise, engaging debates around [[rag]] and [[knowledge-graph]] organisation for [[educational-nlp]]. Its focus on [[stem-education]] and GCSE science demonstrates the [[teacher-role]] in validating AI output rather than being displaced by it, supporting [[ai-feedback-quality]] and [[formative-assessment]] goals through an explicit [[feedback|Feedback Loop]].

## Connection to Existing Wiki

- **[[ai-feedback-quality]]**: Provides a concrete verifier-based framework (accuracy, clarity, specificity) for assessing generated feedback quality.
- **[[student-modeling]]**: The error-aware assessment module captures partial understanding and reasoning errors rather than binary correctness, aligning with richer student modelling.
- **[[feedback|Feedback Loop]]**: The verification-and-revision loop and educator-intervention-triggered deep reflection are core feedback-loop mechanisms.
- **[[curriculum-design]]**: Grounds feedback generation in national-curriculum-aligned mark schemes and topic structures.
- **[[rag]] / [[knowledge-graph]]**: Directly challenges similarity-based retrieval with a topic-linked memory chain (Chain-of-Concept), a relevant counterpoint to RAG-based tutors in the wiki.

## Methodological Notes

Strengths include a modular, component-level evaluation on authentic student answers and a 30-teacher usability study. Limitations acknowledged by the authors include the **lack of student evaluation** and a focus on teacher perceptions; deployment priorities are a sub-15-second latency ceiling, adaptive onboarding by user type, and verifier transparency.

## Connected Concepts

- [[ai-feedback-quality]]
- [[feedback]]
- [[llm]]
- [[generative-ai]]
- [[stem-education]]
- [[student-modeling]]
- [[human-in-the-loop-ai]]
- [[curriculum-design]]
- [[teacher-role]]
- [[educational-nlp]]
- [[formative-assessment]]
- [[rag]]
- [[knowledge-graph]]
- [[hallucination-risk]]
- [[prior-knowledge]]
- [[privacy]]

## Connected Articles

- [[sequenced-ai-feedback-learning]]
- [[care-full-feedback-genai]]
- [[learner-centered-feedback-ai]]

## Citation

Zhao, R., Bobrov, A., Li, J., Aloisi, C., & He, Y. (2025). [LearnLens: LLM-Enabled Personalised, Curriculum-Grounded Feedback with Educators in the Loop](https://arxiv.org/abs/2507.04295v4). *Proceedings of EMNLP 2025*. v4. DOI: 10.48550/arXiv.2507.04295. (CC BY-NC-ND 4.0)
