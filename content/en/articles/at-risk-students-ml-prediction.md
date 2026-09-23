---
title: Analysis and Prediction of At-Risk Students Using Machine Learning Algorithms
created: "2026-06-23T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
technology: [learning-analytics, llm, machine-learning, student-modeling]
research_method: [secondary analysis]
level: [higher ed]
sources: ['raw/papers/2606.20617.md']
confidence: medium
audience: [administrators, institutions]
page_kind: [evaluation]
methods: [rct, benchmark]
---

> **Synthesis:** Gheisari and Salarian (2026) apply supervised [[reinforcement-learning|machine learning]] classification to identify at-risk students before they withdraw from higher education programs. The study evaluates Logistic Regression, Random Forest, Support Vector Machines (SVM), and K-Nearest Neighbors (KNN) using [[learning-gains|academic performance]], demographic data, and enrollment records. Logistic Regression and linear SVM achieved the highest predictive accuracy, demonstrating ML's capability to detect at-risk students for proactive intervention. This [[learning-analytics]] [[research-methods-aied|research]] contributes to [[student-modeling]] for dropout-reduction in [[higher-ed]] contexts, providing a data-driven foundation for strategic retention decisions and connecting to the broader [[ai-adoption-training-public-sector]] discussion on AI-supported institutional decision-making.

## Key Findings

- Supervised ML classification (Logistic Regression, Random Forest, SVM, K-Nearest Neighbors) identifies at-risk students before they withdraw from higher education.
- Models use academic performance, demographic, and enrollment data to predict dropout risk.
- Logistic Regression and linear SVM achieved the highest predictive accuracy among the four algorithms tested.
- The approach provides a data-driven foundation for proactive, targeted retention interventions.

## What this means for practice

- **Administrators.** Use the risk score as a triage signal for retention outreach, not as a verdict: Logistic Regression and SVM (Linear Kernel) both reached 99% accuracy, but the work positions prediction as a tool for strategic, proactive retention rather than an automatic decision about a student.
- **Administrators.** Budget for the data pipeline before the model. Joining the three SISTC sources produced 2,405 records, and cleaning for complete, relevant information left only 1,027, so retention analytics depends on keeping enrollment and performance records complete at the source.
- **Instructors.** Watch total subjects failed during the term. It carried a coefficient of −5.013e+13 in the Logistic Regression model and is described as strongly correlated with dropout risk, making it an in-term marker for deciding whom to contact.
- **Administrators.** Audit fairness before flags drive action. The authors warn that underrepresented nationalities, genders, or visa types may cause students to be inaccurately flagged as at-risk, and they name fairness audits as future work rather than a completed step — so pair any rollout with the [[privacy]], [[equity-in-ai-education]], and transparency safeguards the paper calls for.
- **Researchers.** Re-test the fitted feature weights on another cohort before generalizing: visa type (1.239e+15), nationality (Pakistani, 6.087e+14), course name (Master of IT, 2.322e+14), total subjects failed (−5.013e+13), and study duration (1.691e+13) all come from one institution's records.

## Limitations

- Every model was trained and evaluated on a single institution's records: three SISTC data sources joined to 2,405 records and cleaned to 1,027, with no external validation cohort, so the 99% accuracies for Logistic Regression and linear SVM are site-specific.
- The cleaned dataset is imbalanced — 716 withdrawn/canceled against 311 graduated/completed — and the target collapses several distinct statuses into that binary, which bears on how the reported 0.99 precision and recall should be read.
- Several nationality groups contain a single student in the clean data (German 1, Ghanaian 1, Hong Konger 1, Uzbek 1), and the authors state that such underrepresentation may produce wrong predictions for students inaccurately flagged as at-risk.
- The study predicts withdrawal and cancellation but tests no intervention: there is no control group or retention trial, so it supports claims about classification accuracy, not about whether flagged students actually stay.

## Connected Concepts

- [[learning-analytics]]
- [[student-modeling]]
- [[higher-ed]]
- [[student-engagement]] — early-warning signals of withdrawal
- [[equity-in-ai-education]] — avoiding bias in risk scoring
- [[ai-ed-evaluation]] — evaluating the predictive validity of the models
- [[privacy]] — handling sensitive student and enrollment data
- [[educational-measurement]] — using academic performance data to estimate risk
## Connected Articles

- [[ai-adoption-training-public-sector]]
- [[trace-course-grade-prediction-2026]] — Course-grade prediction from learning traces
## Citation

Soheila Gheisari, Hamid Salarian (2026). [Analysis and Prediction of At-Risk Students Using Machine Learning Algorithms](https://arxiv.org/abs/2606.20617).
