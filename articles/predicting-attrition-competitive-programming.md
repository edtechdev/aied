---
title: "Predicting Student Attrition in Competitive Programming: A Large-Scale Study Integrating Survey Insights and Global Behavioral Logs"
created: "2026-09-02T09:00:00-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
pedagogy: [motivation, self-efficacy, student-engagement]
technology: [learning-analytics, personalized-learning]
assessment: [assessment]
sources: ['raw/papers/predicting-attrition-competitive-programming.md']
confidence: high
research_method: [learning analytics, survey, quantitative]
discipline: [cs education]
audience: [educators, learning analytics designers, institutions]
level: [higher ed]
page_kind: [evaluation]
---

> **Synthesis:** A dual-layer predictive framework for understanding student [[student-engagement|attrition]] in [[cs-education|competitive programming]], combining large-scale Codeforces behavioral logs (n = 1,816 after filtering and balancing) with a multi-institutional psychographic survey from 10 universities in Bangladesh (n = 64 for predictive modeling).

### Behavioral findings: what precedes attrition

The behavioral analysis confirmed that true attrition is preceded by an **83.71% reduction in contest participation** and consistent underperformance on skill-related metrics. The authors also validate a **Skill-Application Paradox**: students who stop report higher theoretical confidence than their active peers yet exhibit significantly weaker practice habits (significant at *p* < .001 for upsolving habit and peer circle density). This disconnect between self-reported confidence and actual practice behavior is a distinctive [[self-efficacy]] signal for [[learning-analytics|early-warning]].

### Predictive modeling

Machine learning benchmarks demonstrated that a **Soft-Voting Ensemble** achieved the strongest performance on the behavioral dataset (CV F1 = 0.737, Test Recall = 0.769), while **Random Forest** led on the survey dataset (CV F1 = 0.924, interpreted as a localized exploratory pilot). An engineered **Intensity Ratio** ranked as the third most predictive Codeforces feature, capturing independent practice effort beyond raw activity counts.

### Early Warning System proof of concept

Applied as a proof-of-concept Early Warning System, the survey-trained model identified four high-risk active students whose behavioral profiles corroborated the model's predictions. This demonstrates the feasibility of flagging at-risk students from mixed survey and behavioral signals.

## What this means for practice

- **Instructors.** Track practice habits rather than stated confidence. Students who stopped reported higher theoretical confidence than their active peers while their upsolving habit and peer-circle density were significantly weaker (*p* < .001), so a [[self-efficacy|confidence]] signal alone will mislead you.
- **Instructors.** Act on abrupt drops in contest participation — true attrition was preceded by an 83.71% reduction — and pair experienced with newer participants while monitoring students who show irregular engagement after extended breaks.
- **Designers.** Build early-warning dashboards on behavioral telemetry, including engineered indicators such as the Intensity Ratio, rather than survey responses alone: the survey model's CV F1 = 0.924 was trained on only 64 students and overstates generalizability.
- **Administrators.** Treat the four flagged students as a proof of concept, not a deployment. Fund longitudinal validation over a 2–3 month window before such [[learning-analytics|risk flags]] inform high-stakes decisions about real students.

## Limitations

- The survey data are small (n = 73 collected, n = 64 used for predictive modeling) and limited to ten universities in Bangladesh, which the authors note may not generalize to other academic or cultural contexts.
- Attrition is a proxy: the Codeforces labels use an inactivity threshold that cannot distinguish genuine dropout from temporary academic breaks.
- Retrospective recall bias is a stated limitation: upsolving habit and thought-quit were reported by stopped students after they disengaged, which may systematically inflate the apparent separation between active and stopped cohorts on self-reported measures, and both datasets are observational, permitting no causal conclusions.
- The Early Warning System ran over only 22 active students with no follow-up data, so it is unverified whether the four flagged high-risk individuals actually attrited or declined.

## Connected Concepts
- [[cs-education]]
- [[learning-analytics]]
- [[self-efficacy]]
- [[motivation]]
- [[student-engagement]]
- [[assessment]]
- [[personalized-learning]]
- [[student-modeling]]
- [[self-report-measures]]

## Connected Articles
- [[ai-writes-code-student-writes-model-2026]] — AI Writes Code, Student Writes Model
- [[ai-literacy-equity-programming-policy]] — AI Literacy, Equity and Programming Policy
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual Tutoring and Computer-Assisted Learning Take-Up
- [[affective-text-wearable-student-health]] — Affective Text and Wearable Student Health

## Citation
Ruhan, A. I., Naeem, G. M., Rafi, R. I., Mim, S. A., Opi, N. B., Chowdhury, D. F., & Sadi, M. R. K. (2026). [Predicting Student Attrition in Competitive Programming: A Large-Scale Study Integrating Survey Insights and Global Behavioral Logs](https://arxiv.org/abs/2608.28618). arXiv:2608.28618.
