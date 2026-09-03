---
title: A Machine Learning Approach for Predicting Student Progress in Online Programming Education
created: "2026-09-03T13:50:00-04:00"
updated: "2026-09-03T13:50:00-04:00"
type: article
tags: [cs-education, learning-analytics, machine-learning, student-modeling, online-teaching-and-learning, k-12]
sources: ['raw/papers/zhang-ml-student-progress-programming-2026.md']
confidence: high
---

> **A Machine Learning Approach for Predicting Student Progress in Online Programming Education.** Zhang, Jeffries and Koprinska propose an [[machine-learning]] approach that predicts student progress at the *module* level in large-scale [[online-teaching-and-learning|online]] [[cs-education|programming]] courses: an intrinsically interpretable [[student-modeling|decision-tree model]] predicts a student's performance on the final problem of a module from content-interaction features derived from their [[learning-analytics|log data]]. Across four large-scale K-12 programming courses (~35,000 students), the glass-box decision trees delivered competitive accuracy (85–91%) against black-box models such as random forests and SVMs, while producing interpretable tree-based [[visualization|visualisations]] and slide rankings that educators found useful for intervening with at-risk learners and improving course design.

## Key Findings

- [[machine-learning]] classification on course content-interaction features yields accurate module-level predictions of student outcomes, with decision trees reaching 85.2–90.9% accuracy, precision 0.88–0.92, recall 0.78–0.98 and F1 0.83–0.92 across all four courses, substantially exceeding the majority-class baseline.
- Intrinsically interpretable decision trees performed competitively with more advanced black-box models (logistic regression, random forest, SVM), and feature selection (CFS and information-gain ratio) cut tree complexity to just 3–5 leaf nodes without degrading accuracy — supporting glass-box models over post-hoc explainers for [[online-teaching-and-learning|online]] course settings.
- Completion of prior exercises — predominantly problem slides (75% of features selected) — was the strongest predictor of module completion, consistent with the "doer effect"; interactive content slides mattered more in [[k-12|school-level]] courses where novices lack background knowledge.
- The method flags "No submission" (dropout) outcomes accurately and offers a 7–8 day prediction window before a module's deadline, giving educators a real-time opportunity to [[teacher-role|intervene]] with struggling and disengaged, at-risk students.
- Two experienced educators judged the trees and slide rankings genuinely useful for identifying where students struggle and give up, spotting slides with low pedagogical value, and surfacing behavioural differences between courses (e.g., Blockly vs. Python; beginner vs. intermediate).
- Exploratory analysis distinguished three [[student-engagement|engagement]] profiles — disengaged at-risk, disengaged-but-successful, and engaged high-performers — revealing that low content-slide completion can signal either positive or negative outcomes depending on [[prior-knowledge|student background]] and course level.

## Connected Concepts

- [[cs-education]]
- [[machine-learning]]
- [[learning-analytics]]
- [[student-modeling]]
- [[online-teaching-and-learning]]
- [[k-12]]
- [[visualization]]

## Connected Articles

- [[at-risk-students-ml-prediction]]
- [[precision-education-student-digital-twins-2026]]
- [[mejia-domenzain-ml-findings-teachers-blended-2026]]
- [[explainable-probabilistic-kt]]

## Citation

Zhang, V., Jeffries, B., & Koprinska, I. (2025). [A Machine Learning Approach for Predicting Student Progress in Online Programming Education](https://doi.org/10.1007/s40593-025-00510-9). *International Journal of Artificial Intelligence in Education*, 35, 3614–3644.
