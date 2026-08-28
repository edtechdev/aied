---
title: "The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions"
created: "2026-06-23T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [formative-assessment, llm, automated-assessment, k-12, student-modeling]

sources: ['raw/papers/2606.23205.md']
confidence: medium
---

Imran and Bulathwela (2026) identify the 'correct answer trap' — automated feedback systems that judge only answer correctness reinforce rather than address misconceptions when students reach the right answer through flawed reasoning. Using 20,964 real student responses from the Eedi mathematics platform, they find fine-tuned classifiers detect only 57% of hidden misconceptions (standard ML interventions did not improve this), while open-weight reasoning models reach 84% but at a false-alarm-to-true-detection ratio of roughly 8:1 at realistic prevalence. They propose a graduated assessment rubric separating answer correctness from method validity, and a detect-verify-escalate pipeline that routes uncertain cases to diagnostic follow-up questions. Two deployment modes are offered: a teacher dashboard for review queue filtering, and an autonomous tutor where flags trigger low-cost [[formative-assessment]] follow-up. This work directly addresses [[student-modeling]] gaps in [[intelligent-tutoring]] systems and has implications for [[automated-assessment|Automated Grading]] in [[k-12]] math education.

## Connected Concepts

- [[formative-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[k-12]]
- [[misconceptions]]
- [[math-education]]
- [[llm]]
## Connected Articles

- [[automated-formative-assessments-a-level-sciences]] — The Effect of High-Frequency, Automatically-marked Formative Assessments on Student Outcomes in A-Level Sciences
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated Grading of Linux/Bash Examinations Using Large Language Models
- [[teacher-authored-prompts-student-ai-dialogue]] — Teacher-Authored Prompts for Configuring Student-AI Dialogue: K-12 Classroom Implementation
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From Answer Generators to Reasoning Facilitators: Designing AI Tutors for Mathematical Reasoning in High-Stakes Environments
- [[cross-dataset-bloom-question-classification]] — Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs
- [[correct-answer-trap-ai-tutor]] — Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning

## Citation

Moiz Imran, Sahan Bulathwela (2026). [The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions](https://arxiv.org/abs/2606.23205). AIED PEAF 2026 Workshop
