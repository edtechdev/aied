---
title: Are LLM-based Chatbots Good Enough to Support Computer Science Students in Multiple-Choice Exercises?
created: 2026-06-16
updated: 2026-06-16
type: article
tags: [higher-ed, llm, automated-grading, student-experience, stem-education, learning-analytics, k-12]
sources: ['raw/papers/2606.15919.md']
confidence: high
---

> **Markos Stamatakis, Omkar Gavali, Joshua Berger, Christian Wartena, Anett Hoppe, Ralph Ewerth (2026)** — arXiv preprint
Investigates LLM chatbots' performance on 70 MCQs for a university CS lecture on interactive visual data analysis, comparing with student performance. GPT-4o and GPT-5 significantly outperformed smaller models. A user study in two courses showed that presenting ChatGPT answers with explanations did NOT generally improve student performance.

## Key Findings

- The authors developed **70 multiple-choice questions (MCQs)** for a university lecture on interactive visual data analysis and evaluated several LLM-based chatbots using **different prompt designs**.
- **GPT-4o and GPT-5 achieved the best results**, significantly outperforming smaller models on the MCQ set.
- Chatbot performance was compared with **students' performance** on the same questions, situating model accuracy relative to learner capability.
- A **user study in two lectures** (interactive visual data analysis and computer vision) investigated how chatbot-generated answers and explanations affect students' performance.
- The user study found that **presenting ChatGPT answers together with an explanation does not improve students' performance in general** — a counterintuitive result for chatbot-assisted learning.

## Study Design & Method

The evaluation proceeded in two phases. First, a technical benchmark: multiple LLM-based chatbots solved the 70 MCQs under different prompting strategies, with results compared against students' own performance to calibrate what "good enough" means. Second, an educational user study: students in two university CS courses were given chatbot answers with explanations, and their performance was measured against conditions without such support. This two-part design separates raw model competence from actual learning impact.

## Implications for AI in Education

The headline implication is that **model accuracy does not translate automatically into student learning**: even when chatbots answer correctly, exposing students to answers plus explanations failed to improve their MCQ performance. For CS education, this cautions against treating chatbot outputs as ready-made study aids; the value of LLM support likely depends on how it is integrated into exercises and feedback. The large gap between frontier and smaller models also matters for tool selection in [[higher-ed]] and [[cs-education]] contexts, as does the finding that MCQ-style support may need to be redesigned to produce measurable gains.

## Connected Concepts

## Connected Articles


## Citation

Markos Stamatakis, Omkar Gavali, Joshua Berger, Christian Wartena, Anett Hoppe, Ralph Ewerth (2026). [Are LLM-based Chatbots Good Enough to Support Computer Science Students in Multiple-Choice Exercises?](https://arxiv.org/abs/2606.15919). arXiv:2606.15919. arXiv preprint.
