---
title: Are LLM-based Chatbots Good Enough to Support Computer Science Students in Multiple-Choice Exercises?
created: "2026-06-16T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
technology: [learning-analytics, llm]
assessment: [automated-assessment]
stakeholders: [student-experience]
research_method: [benchmark]
discipline: [stem education]
audience: [learners, software developers]
level: [higher ed, k 12]

sources: ['raw/papers/2606.15919.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** Investigates [[llm]] [[conversational-ai|chatbots]]' performance on 70 MCQs for a university CS lecture on interactive visual data analysis, comparing with [[learning-gains|student performance]]. GPT-4o and GPT-5 significantly outperformed smaller models. A user study in two courses showed that presenting ChatGPT answers with explanations did NOT generally improve student performance.

## Key Findings

- The authors developed **70 multiple-choice questions (MCQs)** for a university lecture on interactive visual data analysis and evaluated several LLM-based chatbots using **different prompt designs**.
- **GPT-4o and GPT-5 achieved the best results**, significantly outperforming smaller models on the MCQ set.
- Chatbot performance was compared with **students' performance** on the same questions, situating model accuracy relative to learner capability.
- A **user study in two lectures** (interactive visual data analysis and computer vision) investigated how chatbot-generated answers and explanations affect students' performance.
- The user study found that **presenting ChatGPT answers together with an explanation does not improve students' performance in general** — a counterintuitive result for chatbot-assisted learning.

## Study Design & Method

The evaluation proceeded in two phases. First, a technical [[benchmark]]: multiple LLM-based chatbots solved the 70 MCQs under different [[prompt-engineering|prompting]] strategies, with results compared against students' own performance to calibrate what "good enough" means. Second, an educational user study: students in two university CS courses were given chatbot answers with explanations, and their performance was measured against conditions without such support. This two-part design separates raw model competence from actual learning impact.

## What this means for practice

- **Learners.** Attempt the questions unaided before opening a chatbot's answer key: presenting ChatGPT answers together with an explanation did not improve performance in general, and in the computer vision course the results for students with higher prior knowledge indicate that the output may negatively affect performance.
- **Learners.** Compare a model's per-option labels against your own reasoning instead of deferring to them — the study found only limited agreement between models and students about which questions were easiest and hardest.
- **Software developers.** Do not treat frontier-model accuracy as evidence that a study tool works: GPT-4o and GPT-5 clearly outperformed smaller models on the 70 MCQs, yet exposing their answers and explanations to students produced no significant effect at α = 0.05.
- **Software developers.** Integrate model output into the exercise and its feedback rather than shipping it as a ready-made answer key, and keep visible that GPT-based models still make errors — the authors conclude that models require fine-tuning to course-specific material for educational use.

## Limitations

- Participants were recruited from two Master-level lectures at a single German university, and only approximately 30% of the students in those courses consented to take part.
- Group sizes were small — 15, 10, and 11 participants in the IVDA setting and 16, 9, and 9 in the CV setting — and the authors cite the limited sample size and the small group of participants as grounds for larger studies.
- No fixed effect was significant at α = 0.05; the closest result, the IVDA group × attempt interaction, only approached significance at p = 0.058, so the effect of chatbot output is a tendency rather than a conclusive finding.
- Perceptions came from a self-report questionnaire — most questions used five-point Likert scales ranging from 1 (strongly disagree) to 5 (strongly agree) — and the benchmark itself is 70 MCQs written for one interactive visual data analysis lecture plus additional computer vision items.

## Connected Concepts

- [[cs-education]]
- [[higher-ed]]
- [[llm]]
- [[student-experience]]
- [[benchmark]]
- [[assessment]]
- [[pedagogical-agent]]
- [[automated-question-generation]]
- [[intelligent-tutoring]]

## Connected Articles

- [[cross-dataset-bloom-question-classification]] — Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs
- [[edumirror-educational-social-dynamics]] — EduMirror: Modeling Educational Social Dynamics with Value-driven Multi-agent Simulation
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments
- [[shame-guilt-ai-regulation-computing-education]] — Stuck in a Spiral": Shame and Guilt as Social Regulators of AI Use in Computing Education
- [[evaluating-interactivity-automated-assessment-ai-generated-explorable-explanations]] — Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable Explanations

## Citation

Markos Stamatakis, Omkar Gavali, Joshua Berger, Christian Wartena, Anett Hoppe, Ralph Ewerth (2026). [Are LLM-based Chatbots Good Enough to Support Computer Science Students in Multiple-Choice Exercises?](https://arxiv.org/abs/2606.15919). arXiv preprint.
