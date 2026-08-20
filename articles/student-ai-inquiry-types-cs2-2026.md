---
title: "Analysis of Types of Inquiries in Student-AI Interaction: A case study of two CS2 tasks"
created: "2026-08-20T02:55:00-04:00"
updated: "2026-08-20T02:55:00-04:00"
type: article
tags: [student-ai-interaction, cs-education, llm, prompt-engineering, higher-ed, student-experience, learning-analytics, generative-ai, intelligent-tutoring, cognitive-offloading]
sources: ['raw/papers/2608.17919.md']
confidence: high
---

> **Synthesis:** This study analyzes the **types of questions** students ask generative AI systems during programming problem solving, classifying 830 interactions of CS2 students across two tasks using the Graesser et al. 18-type inquiry taxonomy via a few-shot classifier. It finds that a small subset of question types accounts for the majority of student inquiries, and that the types of questions students ask change substantially as a task progresses — evidence that [[student-ai-interaction|student-AI interaction]] is not static but evolves with task demands. The work connects [[cs-education]], [[prompt-engineering]], and [[learning-analytics]] to the under-explored question of what students actually ask AI, with implications for [[intelligent-tutoring]] design and the cognitive character of [[cognitive-offloading|over-reliance]] on AI.

## Key Findings

- **Skewed inquiry distribution**: a small subset of the 18 question types accounts for most student inquiries, suggesting students rely on a narrow repertoire of question forms when interacting with AI.
- **Task-dependent evolution**: the types of questions students ask change substantially as the task progresses and differ across the two programming tasks.
- **Methodological contribution**: a few-shot learning approach for automatically classifying student-AI interactions into the Graesser et al. taxonomy, reusable for [[learning-analytics]] and large-scale study of [[student-ai-interaction]].
- **Context**: analysis of 830 interactions from CS2 students across two programming tasks.

## Why Inquiry Type Matters

Despite the importance of questioning in learning, students rarely ask enough questions in the classroom — yet they interact extensively with generative AI for learning and problem solving. Understanding **what kinds of questions** students pose to AI systems is therefore central to characterizing the actual learning work happening in [[student-ai-interaction]]. The authors leverage the established Graesser et al. taxonomy (18 question types) to move beyond coarse "how much AI do students use" measures toward a fine-grained account of the cognitive and epistemic character of those interactions.

The finding that students lean on a small subset of question types, and that this shifts with task progress, has direct design implications: [[intelligent-tutoring]] and AI-learning systems can be built to invite a wider, more productive range of inquiry, and instructors can scaffold question-asking to counter a narrow, habitual interaction style. It also informs debates about [[cognitive-offloading]] — whether students are posing deep, well-formed questions or shallow requests that delegate the cognitive work.

## Connections to AI in Education

This is a measurement and characterization study in the [[cs-education]] domain. It complements research on [[prompt-engineering]] by studying real student prompts as they naturally occur in CS2 problem solving, and it feeds [[learning-analytics]] pipelines that aim to infer learning behavior from AI interaction logs. For [[teacher-role|instructors]], the taxonomy offers a lens for noticing when students' questioning patterns are narrow or shallow and for designing interventions that broaden inquiry.

## Connected Concepts
- [[student-ai-interaction]]
- [[cs-education]]
- [[prompt-engineering]]
- [[llm]]
- [[generative-ai]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[student-experience]]
- [[higher-ed]]
- [[metacognition]]

## Connected Articles
- [[dura-llm-cs2]] — Demystify, Use, Reflect, Assess (DURA): LLM Integration in CS2
- [[student-llm-interaction-taxonomy-review-2026]] — Student-LLM Interaction Taxonomy Review
- [[teacher-authored-prompts-student-ai-dialogue]] — Teacher-Authored Prompts in Student-AI Dialogue
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Constructing Epistemic AI Literacy
- [[icap-cognitive-engagement-llm-agents]] — ICAP Cognitive Engagement with LLM Agents

## Citation

Amoozadeh, M., & Alipour, A. (2026). [*Analysis of Types of Inquiries in Student-AI Interaction: A case study of two CS2 tasks*](https://arxiv.org/abs/2608.17919). arXiv:2608.17919 [cs.HC, cs.AI].
