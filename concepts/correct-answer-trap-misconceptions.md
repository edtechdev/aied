---
title: "The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions"
created: 2026-06-23
updated: 2026-06-23
type: concept
tags: [formative-assessment, llm, automated-grading, k-12, student-modeling]
sources: [raw/papers/2606.23205.md]
confidence: medium
---

# The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions

**Moiz Imran, Sahan Bulathwela (2026)** — AIED PEAF 2026 Workshop

Imran and Bulathwela (2026) identify the 'correct answer trap' — automated feedback systems that judge only answer correctness reinforce rather than address misconceptions when students reach the right answer through flawed reasoning. Using 20,964 real student responses from the Eedi mathematics platform, they find fine-tuned classifiers detect only 57% of hidden misconceptions (standard ML interventions did not improve this), while open-weight reasoning models reach 84% but at a false-alarm-to-true-detection ratio of roughly 8:1 at realistic prevalence. They propose a graduated assessment rubric separating answer correctness from method validity, and a detect-verify-escalate pipeline that routes uncertain cases to diagnostic follow-up questions. Two deployment modes are offered: a teacher dashboard for review queue filtering, and an autonomous tutor where flags trigger low-cost [[formative-assessment]] follow-up. This work directly addresses [[student-modeling]] gaps in [[intelligent-tutoring]] systems and has implications for [[automated-grading]] in [[k-12]] math education.

## Related Pages
- [[correct-answer-trap-misconceptions]] -- This page

## Citation

Moiz Imran, Sahan Bulathwela (2026). [The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions](https://arxiv.org/abs/2606.23205). arXiv:2606.23205. AIED PEAF 2026 Workshop
