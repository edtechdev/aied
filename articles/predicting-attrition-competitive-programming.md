---
title: "Predicting Student Attrition in Competitive Programming: A Large-Scale Study Integrating Survey Insights and Global Behavioral Logs"
created: "2026-09-02T09:00:00-04:00"
updated: "2026-09-02T09:10:56-04:00"
type: article
tags: [cs-education, learning-analytics, motivation, self-efficacy, student-engagement, personalized-learning, assessment]
sources: ['raw/papers/predicting-attrition-competitive-programming.md']
confidence: high
---

A dual-layer predictive framework for understanding student [[student-engagement|attrition]] in [[cs-education|competitive programming]], combining large-scale Codeforces behavioral logs (n = 1,816 after filtering and balancing) with a multi-institutional psychographic survey from 10 universities in Bangladesh (n = 64 for predictive modeling).

### Behavioral findings: what precedes attrition

The behavioral analysis confirmed that true attrition is preceded by an **83.71% reduction in contest participation** and consistent underperformance on skill-related metrics. The authors also validate a **Skill-Application Paradox**: students who stop report higher theoretical confidence than their active peers yet exhibit significantly weaker practice habits (significant at *p* < .001 for upsolving habit and peer circle density). This disconnect between self-reported confidence and actual practice behavior is a distinctive [[self-efficacy]] signal for [[learning-analytics|early-warning]].

### Predictive modeling

Machine learning benchmarks demonstrated that a **Soft-Voting Ensemble** achieved the strongest performance on the behavioral dataset (CV F1 = 0.737, Test Recall = 0.769), while **Random Forest** led on the survey dataset (CV F1 = 0.924, interpreted as a localized exploratory pilot). An engineered **Intensity Ratio** ranked as the third most predictive Codeforces feature, capturing independent practice effort beyond raw activity counts.

### Early Warning System proof of concept

Applied as a proof-of-concept Early Warning System, the survey-trained model identified four high-risk active students whose behavioral profiles corroborated the model's predictions. This demonstrates the feasibility of flagging at-risk students from mixed survey and behavioral signals.

## Connected Concepts
- [[cs-education]]
- [[learning-analytics]]
- [[self-efficacy]]
- [[motivation]]
- [[student-engagement]]
- [[assessment]]
- [[personalized-learning]]
- [[student-modeling]]

## Connected Articles
- [[ai-writes-code-student-writes-model-2026]] — AI Writes Code, Student Writes Model
- [[ai-literacy-equity-programming-policy]] — AI Literacy, Equity and Programming Policy
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual Tutoring and Computer-Assisted Learning Take-Up
- [[affective-text-wearable-student-health]] — Affective Text and Wearable Student Health

## Citation
Ruhan, A. I., Naeem, G. M., Rafi, R. I., Mim, S. A., Opi, N. B., Chowdhury, D. F., & Sadi, M. R. K. (2026). [Predicting Student Attrition in Competitive Programming: A Large-Scale Study Integrating Survey Insights and Global Behavioral Logs](https://arxiv.org/abs/2608.28618). arXiv:2608.28618.
