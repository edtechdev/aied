---
title: "Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs"
created: "2026-06-16T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [automated-grading, llm, formative-assessment, higher-ed, teacher-role, learning-analytics, student-experience, k-12]
sources: ['raw/papers/2606.13684.md']
confidence: high
---

Evaluates cross-dataset generalization of ML/DL methods and LLMs for automatic Bloom's taxonomy classification of assessment questions across five datasets. Supervised ML/DL models degraded substantially on unseen datasets, while LLMs with tailored prompting (in-context examples + course-specific action verbs) showed stable performance. A lightweight UI was developed for instructors to classify large question banks, with usability study indicating low workload and high usability.

- LLMs with tailored prompting generalize better than supervised models for cross-dataset Bloom's taxonomy classification of assessment questions.

## Key Findings

- The study evaluated cross-dataset generalization of existing machine learning and deep learning methods and of LLMs for automatic Bloom's taxonomy classification of assessment questions across five datasets.
- Supervised ML/DL models, which had reported strong within-dataset results in prior work, degraded substantially on unseen datasets, leaving real-world generalizability unclear.
- LLMs were more stable across datasets, suggesting a robust alternative across diverse educational contexts.
- The best prompting strategy combined in-context examples with course-specific action verbs.
- Based on the best strategy, a lightweight UI was developed to support instructors in automatically classifying large question banks; a usability study indicated low workload and high usability.

## Study Design & Method

The motivation is practical: Bloom's taxonomy supports the systematic design, analysis, and alignment of instructional activities and assessments, but manually classifying assessment questions is time-consuming, especially for large item banks or repeated course offerings. The study compares two families of approaches — supervised ML/DL models and prompted LLMs — under cross-dataset conditions, moving beyond the within-dataset evaluations that dominated prior work. Because labeling is subjective and teacher-dependent, the authors also assessed how prompting strategies could be tailored (in-context examples, course-specific action verbs), and they validated the instructor-facing tooling with a usability study.

## Implications for AI in Education

For instructors and institutions, the results suggest that LLM-based classification with tailored prompting is a more portable approach than training supervised models for Bloom's taxonomy labeling, reducing the burden of maintaining dataset-specific models. The lightweight UI demonstrates a realistic deployment path for classifying large question banks, supporting [[formative-assessment]] and [[automated-assessment]] workflows while keeping the instructor in control. The finding that supervised models do not transfer across datasets is also a cautionary lesson for [[educational-nlp]] generally: strong within-dataset results should not be assumed to generalize, and evaluation designs should include cross-dataset conditions. The work connects to [[teacher-role]] discussions about how AI can shoulder routine classification labor so that instructors focus on higher-level design and feedback.

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

Abdolali Faraji, Mohammadreza Molavi, Zohreh Rasoulkhani, Mohammadreza Tavakoli, Gábor Kismihók (2026). [Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs](https://arxiv.org/abs/2606.13684). arXiv:2606.13684. AIED 2026.
