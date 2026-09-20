---
title: "Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs"
created: "2026-06-16T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [teacher-role]
technology: [learning-analytics, llm]
assessment: [automated-assessment, formative-assessment]
methods: [benchmark]
stakeholders: [student-experience]
audience: [instructors, learners]
level: [higher ed, k 12]
sources: ['raw/papers/2606.13684.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** Evaluates cross-dataset generalization of ML/DL methods and LLMs for automatic Bloom's taxonomy classification of assessment questions across five datasets. Supervised ML/DL models degraded substantially on unseen datasets, while LLMs with tailored prompting (in-context examples + course-specific action verbs) showed stable performance. A lightweight UI was developed for instructors to classify large question banks, with [[usability-research|usability]] study indicating low workload and high usability.

- LLMs with tailored prompting generalize better than supervised models for cross-dataset Bloom's taxonomy classification of assessment questions.

## Key Findings

- The study evaluated cross-dataset generalization of existing [[reinforcement-learning|machine learning]] and deep learning methods and of LLMs for automatic Bloom's taxonomy classification of assessment questions across five datasets.
- Supervised ML/DL models, which had reported strong within-dataset results in prior work, degraded substantially on unseen datasets, leaving real-world generalizability unclear.
- LLMs were more stable across datasets, suggesting a robust alternative across diverse educational contexts.
- The best [[prompt-engineering|prompting strategy]] combined in-context examples with course-specific action verbs.
- Based on the best strategy, a lightweight UI was developed to support instructors in automatically classifying large question banks; a usability study indicated low workload and high usability.

## Study Design & Method

The motivation is practical: Bloom's taxonomy supports the systematic design, analysis, and alignment of instructional activities and assessments, but manually classifying assessment questions is time-consuming, especially for large item banks or repeated course offerings. The study compares two families of approaches — supervised ML/DL models and prompted LLMs — under cross-dataset conditions, moving beyond the within-dataset evaluations that dominated prior work. Because labeling is subjective and teacher-dependent, the authors also assessed how prompting strategies could be tailored (in-context examples, course-specific action verbs), and they validated the instructor-facing tooling with a usability study.

## What this means for practice

- **Instructors.** Build the classification prompt from your own course materials: the best-performing strategy combined example questions per Bloom level with the course-specific action verbs extracted from them, reaching weighted F1-scores up to 0.84 with GPT-5.
- **Instructors.** Do not deploy a Bloom labeler trained on another institution's dataset without re-validating it: models trained on a single dataset lost an average of 0.28 weighted F1 when applied to unseen datasets.
- **Instructors.** Route large question banks through the lightweight CSV/Excel tool instead of labeling by hand: in the usability study (N = 50), participants reported low workload (mental demand 2.32, effort 2.46, frustration 1.68 on a 1–5 scale) and mean SUS 78.2 (SD = 14.07).
- **Researchers.** Report cross-dataset conditions alongside within-dataset accuracy when evaluating [[educational-nlp|educational NLP]] models, since within-dataset strength did not predict portability here.

## Limitations

- The usability study drew N = 50 participants recruited via Prolific who used the interface for 10 minutes on one of their real courses; the authors state that feedback from real instructors is still needed for practical deployment.
- The cross-dataset comparison tested only a subset of ML and DL models and a limited set of LLMs; the authors call for more models, particularly open-source alternatives, to assess robustness and cost-effectiveness.
- Five datasets are the entire evidence base, and transfer depends on direction: one dataset pair lost only 0.04 weighted F1 against an average cross-dataset decrease of 0.28.

## Connected Concepts

- [[automated-assessment]]
- [[benchmark]]
- [[educational-nlp]]
- [[formative-assessment]]
- [[llm]]
- [[teacher-ai-competency]]
- [[teacher-role]]

## Connected Articles

- [[teacher-authored-prompts-student-ai-dialogue]] — Teacher-Authored Prompts for Configuring Student-AI Dialogue: K-12 Classroom Implementation
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated Grading of Linux/Bash Examinations Using Large Language Models
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — Mind the Trust Gap: Identifying (Mis)alignments in Teacher-Student Views Toward Control and Agency in K-12 Classroom AI
- [[evaluating-interactivity-automated-assessment-ai-generated-explorable-explanations]] — Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable Explanations

## Citation

Abdolali Faraji, Mohammadreza Molavi, Zohreh Rasoulkhani, Mohammadreza Tavakoli, Gábor Kismihók (2026). [Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs](https://arxiv.org/abs/2606.13684). AIED 2026.
