---
title: "The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions"
created: "2026-06-23T04:33:04-04:00"
updated: "2026-09-17T02:30:30-04:00"
type: article
technology: [llm, student-modeling]
assessment: [automated-assessment, formative-assessment]
research_method: [benchmark]
level: [k 12]

sources: ['raw/papers/2606.23205.md']
confidence: medium
discipline: [math education]
audience: [instructors, assessment designers]
---

> **Synthesis:** Imran and Bulathwela (2026) identify the 'correct answer trap' — automated feedback systems that judge only answer correctness reinforce rather than address [[misconceptions]] when students reach the right answer through flawed reasoning. Using 20,964 real student responses from the Eedi mathematics platform, they find fine-tuned classifiers detect only 57% of hidden misconceptions (standard ML interventions did not improve this), while open-weight reasoning models reach 84% but at a false-alarm-to-true-detection ratio of roughly 8:1 at realistic prevalence. They propose a graduated assessment rubric separating answer correctness from method validity, and a detect-verify-escalate pipeline that routes uncertain cases to diagnostic follow-up questions. Two deployment modes are offered: a teacher dashboard for review queue filtering, and an autonomous tutor where flags trigger low-cost [[formative-assessment]] follow-up. This work directly addresses [[student-modeling]] gaps in [[intelligent-tutoring]] systems and has implications for [[automated-assessment|Automated Grading]] in [[k-12]] [[math-education|math education]].

## What this means for practice

- **Instructors.** Judge the method as well as the answer. A fine-tuned classifier caught only 57.4% of correct-answer misconceptions despite 100% recall on wrong answers, so a correct answer paired with flawed reasoning can pass unnoticed when feedback checks correctness alone.
- **Designers.** Audit the item bank for questions that can be answered correctly while holding a key misconception: two questions accounted for 71% of the hidden misconceptions in this dataset, and variant problems where the suspected procedure yields a wrong answer are the recommended probe.
- **Instructors.** Route uncertain reasoning to a short diagnostic follow-up question rather than to yourself. At 1.6% prevalence even 83.6% detection leaves only 10.9% positive predictive value — roughly 8 false alarms per genuine detection — while asking a student to explain their reasoning is good formative practice either way.
- **Designers.** Keep a mark scheme in the prompt. Removing it left Gemma 4's misconception detection unchanged but raised the false-positive rate against students with correct reasoning from 18.0% to 25.4% (p < 0.001), so the mark scheme's job is protecting accurate students, not improving detection.

## Limitations

- All findings come from 15 mathematics questions on one platform, and the 61 true-misconception cases in the 3,702-response test set are concentrated in 2 items, so detection rates rest on a narrow band of content.
- Hidden misconceptions are measured at 1.6% prevalence, and student explanations average 16 words, which leaves many cases genuinely indeterminate — the graduated rubric's "needs clarification" category exists for that ambiguity rather than for a model failure.
- The diagnostic follow-up is a proof of concept: follow-up questions were generated for 7 TM instances and no student responses to them have been collected.
- Both deployment modes — the teacher dashboard review queue and the autonomous tutor — are proposed configurations with no classroom trial and no measured effect on teacher workload.

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
- [[correct-answer-trap-ai-tutor]] — Catching The Correct Answer Trap: Characterizing AI Tutor Blind Spots When Analyzing Student Reasoning

## Citation

Moiz Imran, Sahan Bulathwela (2026). [The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions](https://arxiv.org/abs/2606.23205). AIED PEAF 2026 Workshop
