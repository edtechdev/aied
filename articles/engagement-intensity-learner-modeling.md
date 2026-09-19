---
title: Engagement Intensity as a Learner-Modeling Signal for Adaptive AI Ethics Instruction
created: "2026-06-18T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [student-engagement]
technology: [adaptive-learning, llm, personalized-learning]
stakeholders: [student-experience]
ethics: [ethics]
research_method: [survey, quantitative]
audience: [researchers, instructors]
level: [higher ed]
sources: ['raw/papers/2606.18548.md']
confidence: medium
---

> **Synthesis:** This study investigates whether simple intake measures can serve as learner-modeling signals for adaptive AI ethics instruction. Drawing on data from 93 bioscience graduate and postdoctoral trainees enrolled in a required [[research-methods-aied|research]] ethics course, the authors compare three candidate intake features — self-reported LLM usage frequency, self-rated LLM familiarity, and prior [[ai-education|AI education]] — against five baseline perception outcomes: accuracy trust, evaluation capability, complex-task trust, [[cognitive-offloading|over-reliance]] risk, and training interest. The results position simple behavioral engagement measures as promising, lightweight inputs for profiling learners before instruction begins, with direct relevance for [[personalized-learning]] and [[adaptive-learning]] design.

## Key Findings

- **Usage frequency** showed Holm-corrected associations with **all five** baseline perception outcomes, making it the most consistent intake signal of the three tested.
- **Self-rated LLM familiarity** was associated with three of the five outcomes, serving as a secondary indicator.
- **Prior AI education** (coursework or workshop attendance) was associated with **none** of the five outcomes, questioning its value as an intake measure.
- The association pattern was **threshold-like at the lower end of the scale** rather than a uniform gradient across all five outcomes, and was most visible for training interest and accuracy trust.
- The authors conclude that simple pre-instruction behavioral signals can inform lightweight intake profiling for adaptive AI ethics education, supporting [[ai-literacy]] development in graduate research training.

## Study Design & Method

The study surveyed 93 bioscience graduate students and postdoctoral trainees enrolled in a required research ethics course before instruction began. Three candidate intake features were compared across five baseline perception outcomes using statistical models with Holm correction for multiple comparisons. The five outcomes were treated as facets of distinct constructs from prior work on [[trust-calibration|trust calibration]] and AI literacy — accuracy trust, evaluation capability, complex-task trust, over-reliance risk, and training interest — rather than as indicators of a single latent dimension.

## What this means for practice

- **Instructors.** Profile learners with the cheapest signal available: self-reported LLM usage frequency showed associations with all five baseline perceptions — accuracy trust, evaluation capability, complex-task trust, over-reliance risk and training interest — after Holm correction, making it the most consistent of the three intake measures tested.
- **Instructors.** Use self-rated familiarity as a secondary check rather than the primary one: it tracked three of the five outcomes, and the pattern was threshold-like at the low end of the scale rather than a smooth gradient, appearing most clearly for training interest and accuracy trust.
- **Administrators and curriculum designers.** Do not spend intake budget on prior AI coursework or workshop attendance as a segmentation label: it was associated with none of the five outcomes (largest H = 5.06, minimum Holm-adjusted p = .524, effect sizes below .19), and the finding held under both three-group and collapsed two-group coding.
- **Researchers.** Read the null as informative for learner modeling: with the sample dominated by learners reporting no prior AI education (44.1%), behavior and self-perception separated baseline perceptions more sharply than credentials did, which points to where adaptive AI ethics instruction should start.

## Limitations

- **Cross-sectional design.** Directionality cannot be established: engagement may shape perceptions, perceptions may shape engagement, or both may reflect upstream factors such as disciplinary norms or dispositional openness.
- **Self-report measures.** Usage frequency was self-reported on a Never-to-Daily scale rather than observed behavior, and both predictors and outcomes relied on self-report, so response styles such as acquiescence or extremity bias could contribute to the associations.
- **Coarse coding of prior AI education.** The null result for prior AI education should be read carefully, since AI literacy spans multiple competencies and the coding of prior education was relatively coarse.

## Connected Concepts

- [[personalized-learning]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[affective-tutoring]]
- [[bias-mitigation]]
- [[affective-computing]]
- [[knowledge-tracing]]
- [[trust-calibration]]
- [[cognitive-offloading]]
- [[ethics]]
- [[higher-ed]]
- [[student-engagement]]
- [[self-report-measures]]

## Connected Articles

- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[llm-psychometric-calibration-cdp]] — Aligning LLM-Simulated and Human Examinees for Psychometric Calibration: A Cognitive Diagnostic Profiling Approach
- [[ai-learning-tools-engineering-education-needs]] — Designing Needs- and Attention-Aware AI Learning Tools for Engineering Education: Insights from Psychological Outcomes
- [[vibe-coding-programming-process-visualizer]] — From Idea to Classroom in Days: Using "Vibe Coding" to Create a Programming Process Visualizer from IDE Activity Logs
- [[student-math-competence-clustering]] — Archetypes or ability? Clustering for modeling student mathematical competence
- [[llm-student-misconception-identification]] — What Don't You Understand? Using Large Language Models to Identify and Characterize Student Misconceptions About Challenging Topics

## Citation

Yongkyung Oh, Lynn Talton, Alex Bui (2026). [Engagement Intensity as a Learner-Modeling Signal for Adaptive AI Ethics Instruction](https://arxiv.org/abs/2606.18548).
