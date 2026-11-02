---
title: "Using Machine Learning to Measure Self-Efficacy Belief Through Learners' Interaction Traces in Technology-Enhanced Learning"
published: "2026-10-30"
created: "2026-11-02T09:26:00-05:00"
updated: "2026-11-02T09:26:00-05:00"
type: article
sources: ['raw/papers/somny-ml-self-efficacy-interaction-traces-2026.md']
source_url: "https://arxiv.org/abs/2610.41900"
confidence: high
page_kind: [evaluation]
research_method: [experiment]
level: [higher ed]
audience: [learning analytics designers, researchers, instructors]
contributors: [editor]
pedagogy: [self-efficacy, motivation]
technology: [learning-analytics, machine-learning, student-modeling]
assessment: [self-report-measures]
methods: [quantitative-research]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** [[self-efficacy]] — a learner's judgment about whether they can execute what a task demands — predicts persistence, strategy choice, and performance, yet it is almost always measured with a questionnaire administered once or twice a term. Somny, Chouati, and Lefevre ask whether it can instead be inferred from behavior inside a Technology-Enhanced Learning platform. Their exploratory [[quantitative-research]] study follows 422 first-year mathematics and computer science students through a one-semester algorithms course on ASKER, collecting roughly 14,614 interaction traces and five administrations of the MSLQ's self-efficacy section. A [[machine-learning]] pipeline then classifies learners as low or not-low self-efficacy from behavior-only features, and the decisive variable turns out to be labeling rather than modeling: segmenting data by survey occasion beats splitting at the mid-term exam, and the self-efficacy subscale alone labels as well as the full instrument. The authors present the work as feasibility evidence for [[learning-analytics]], not a deployable detector.

## Key Findings

1. The corpus pairs roughly 14,614 interaction traces from 422 first-year students with five MSLQ administrations across a four-month semester, one survey per course chapter.
2. Accuracy was higher with survey-occasion splits than with a mid-term exam split, which the authors read as support for continuous monitoring of [[self-efficacy]] over sparse measurement.
3. Labeling with only the self-efficacy section of the MSLQ matched or beat labeling with the full [[motivation|motivational]] instrument, so shorter surveys need not cost labeling precision.
4. A behavior-only feature set produced strong results on its own; adding engagement and performance features sometimes reduced accuracy, making behavior the more defensible input.
5. Linear models showed the highest training accuracy but non-relevant p-values, while KNN and SVC gave the most balanced result at the 3/7 threshold; neural networks did not outperform simpler families.
6. Label supply collapsed over the term — survey participation fell from 132 to 61 learners, and only 17 of the 422 completed all five surveys, against 146 who answered at least once before and after the mid-term exam.

## A semester of traces on ASKER

The platform, ASKER, serves self-assessment exercises: matching, grouping, short open-ended questions, and multiple choice, with learners able to request fresh versions to retest understanding. Those exercise types also exist in Moodle, so the authors argue the approach is portable. Features were grouped into three hypothesized families: engagement (heavy or light platform use), behavior (actions taken while completing exercises), and performance (evidence of how well material was understood). Custom features go beyond counts — revision behavior distinguishes practicing only before an exam, only after, or both, and hesitation means selecting then deselecting an option, or lifting a card out of a response position. The [[student-modeling]] target is deliberately narrow: a binary classification of whether a learner belongs to the low self-efficacy group, defined in the descriptive analysis as a mean MSLQ score below 3 out of 7.

## Labels, not models, are the bottleneck

The design confronts a problem familiar to anyone using [[self-report-measures]]: the instrument cannot keep up with the construct. Self-efficacy shifts after grades, feedback, and comparison with classmates, yet questionnaires give static snapshots and depend on introspection. Participation declined steadily from 132 to 61 learners across the five surveys, and the authors note that learners with low self-efficacy may be exactly those who drop out, which would shrink the positive class over time. Restricting to the 17 learners who answered everything would bias results toward the most engaged students, so they instead work with the 146 who answered at least once on each side of the mid-term exam. Class imbalance is severe throughout, and the paper is candid that high accuracy can be an artifact of predicting the majority class; F1 of the low-self-efficacy class is treated as the primary indicator, and no model produced balanced F1 scores close to one.

## What the pipeline found

Models spanned several algorithm families — decision trees, linear models, KNN, SVC, ensembles, and neural networks — chosen partly for interpretability, since the aim is a trustworthy system handling personal interaction data. Results came from permutation tests with cross-validation, not bare accuracy. Three findings matter. First, temporal resolution is the lever: survey-level splits outperformed the coarser mid-term split, answering the second research question in favor of continuous monitoring. Second, behavior alone carries signal, and enriching it with engagement or performance features can hurt, which the authors connect to feeding in perceived competence that self-efficacy already shapes. Third, feature importance moves with the threshold used to define "low": dropout rate and retry-when-fail rank highly at a 4/7 cutoff but not at stricter ones, and retry-when-success is read as a possible marker of low confidence. Neural networks offered no advantage, which the authors treat as good news for explainability and cost.

## What this means for practice

- **Instructors.** Watch hesitation and retry patterns during practice, not only scores. Selecting and deselecting options, moving cards back, and retrying after success are the behaviors the models weight and appear in ordinary platform logs.
- **Learning analytics designers.** Invest in labeling cadence before model complexity. Survey-level segmentation beat a single mid-term split, so labeling resolution is the constraint to fix first.
- **Learning analytics designers.** Shorten instruments to the subscale you need. The self-efficacy section alone labeled as well as the full motivational questionnaire, which matters for voluntary participation.

## Limitations

- Data come from one four-month algorithms course at one university — 422 first-year students in mathematics and computer science — with no replication site.
- Labels are thin and unbalanced: participation fell from 132 to 61 learners across five surveys, only 17 learners completed every survey, and the authors attribute overfitting directly to the small number of completed questionnaires.
- No model achieved balanced F1 scores near one, and several configurations show accuracy inflated by majority-class prediction, so the authors state the results do not support deploying a reliable detection tool.
- The pipeline is exploratory, extracting every available feature and testing many threshold and feature-set combinations, which leaves reported p-values exposed to selection.

## Citation

Somny, M., Chouati, L., & Lefevre, M. (2026). [*Using Machine Learning to Measure Self-Efficacy Belief Through Learners' Interaction Traces in Technology-Enhanced Learning*](https://arxiv.org/abs/2610.41900). arXiv preprint arXiv:2610.41900.
