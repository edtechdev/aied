---
title: "Assisting the grading of a handwritten general chemistry exam with artificial intelligence"
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-03T15:00:00-04:00"
type: article
tags: [automated-assessment, chemistry-education, llm, multimodal, summative-assessment, human-in-the-loop-ai, item-response-theory, educational-measurement, trust]
sources: ['raw/papers/cvengros-grading-handwritten-chemistry-ai-2026.md']
confidence: high
---

> **Assisting the grading of a handwritten general chemistry exam with artificial intelligence** — Cvengros and Kortemeyer report a case study in which a multimodal, reasoning-capable [[llm|LLM]] graded a 296-student, handwritten general chemistry final exam page-by-page against rubric images, finding high agreement with human teaching-assistant scores for textual answers and chemical reaction equations but unreliable performance for drawing and graphing tasks. The authors develop confidence-filtering strategies — partial-credit thresholds, [[item-response-theory|IRT]]-based risk thresholds, and problem-type exclusion — that convert raw AI scoring into a selective accept/deferral policy for [[human-in-the-loop-ai|human oversight]]. The work demonstrates a practical path toward [[automated-assessment]] of open-ended, [[multimodal]] handwritten work in [[chemistry-education|chemistry]] and, more broadly, [[science-education]].

## Key Findings

- **High run-to-run reliability on total scores:** Across five independent runs, the AI grader achieved ICC(A,1) = 0.967 (single run) and ICC(A,5) = 0.993 (averaging five runs), with a 95% repeatability coefficient of 5.33 points on the 60-point scale; item-level agreement was lower (ICC(A,1) = 0.836) but summed stably.
- **Question type strongly determines reliability:** Textual (short and long answer) and chemical reaction questions were graded most reliably (highest normed F1), whereas drawing and especially graphing tasks performed worse than random, in part because background grids visually distract AI vision; [[multimodal|multimodal AI]] still struggles with scientific diagrams and chemical structure interpretation.
- **Total-score agreement exceeds per-item agreement:** AI vs. TA regression on total scores reached R² = 0.91 even though per-problem R² ranged 0.61–0.85, because item-level over- and under-scoring partially cancel when summed (a Spearman–Brown aggregation effect) — but systematic biases do not cancel.
- **Score compression effect:** AI-vs-TA regressions show a small positive intercept with slope < 1.0, i.e., the AI is a "timid grader" — slightly generous at the low end and conservative at the top, narrowing score spread.
- **Grade-boundary agreement:** At whole-point resolution, exact-match agreement beyond chance was low (Cohen's κ = 0.096) but ordinal agreement was strong (weighted κw = 0.865), indicating discrepancies were predominantly small.
- **Selective automation via confidence filters:** A partial-credit threshold (e.g., ≥50%) suppresses the student-harm (under-credit) mode while auto-accepting roughly half the items; an [[item-response-theory|IRT]]-based Bayesian risk filter achieves similar alignment with lower human workload; excluding drawing/graphing problems is the most straightforward operational rule.
- **Cost and workload:** AI grading cost ~$100 (32.15M tokens) versus ~$3,500 for 16 TAs × 5 hours; because only about half of results were deemed trustworthy, the AI-assisted scenario cost roughly $1,225 — the main benefit is sustaining open-ended exam questions under rising enrollments rather than guaranteed cost savings.
- **Oversight and governance are essential:** The authors argue a uniform "grade everything" approach is not defensible for [[summative-assessment|high-stakes]] use, that false positives (AI awarding points for wrong answers) can go undetected because students rarely contest them, and that [[educational-policy-ai|regulatory frameworks]] designating AI in educational assessment as high-risk mandate documented [[human-in-the-loop-ai|human oversight]].

## Connected Concepts

- [[automated-assessment]]
- [[chemistry-education]]
- [[llm]]
- [[multimodal]]
- [[summative-assessment]]
- [[human-in-the-loop-ai]]
- [[item-response-theory]]
- [[educational-measurement]]
- [[science-education]]

## Connected Articles

- [[ssaho-ai-academic-integrity-review-2025]] — AI and academic integrity in assessment
- [[care-full-feedback-genai]] — Feedback and assessment with generative AI

## Citation

Cvengros, J., & Kortemeyer, G. (2026). [Assisting the grading of a handwritten general chemistry exam with artificial intelligence](https://doi.org/10.1007/s44163-026-01606-4). *Discover Artificial Intelligence*, 6, 931.
