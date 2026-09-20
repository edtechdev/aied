---
title: "Assisting the grading of a handwritten general chemistry exam with artificial intelligence"
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
technology: [human-in-the-loop-ai, llm, multimodal]
assessment: [automated-assessment, educational-measurement, item-response-theory, summative-assessment]
ethics: [trust]
sources: ['raw/papers/cvengros-grading-handwritten-chemistry-ai-2026.md']
confidence: high
research_method: [case study]
discipline: [chemistry education]
audience: [assessment professionals, instructors, faculty developers]
level: [higher ed]
page_kind: [evaluation]
---

> **Synthesis:** **Assisting the grading of a handwritten general chemistry exam with artificial intelligence** — Cvengros and Kortemeyer report a case study in which a multimodal, reasoning-capable [[llm|LLM]] graded a 296-student, handwritten general chemistry final exam page-by-page against rubric images, finding high agreement with human teaching-assistant scores for textual answers and chemical reaction equations but unreliable performance for drawing and graphing tasks. The authors develop confidence-filtering strategies — partial-credit thresholds, [[item-response-theory|IRT]]-based risk thresholds, and problem-type exclusion — that convert raw AI scoring into a selective accept/deferral policy for [[human-in-the-loop-ai|human oversight]]. The work demonstrates a practical path toward [[automated-assessment]] of open-ended, [[multimodal]] handwritten work in [[chemistry-education|chemistry]] and, more broadly, [[science-education]].

## Key Findings

- **High run-to-run reliability on total scores:** Across five independent runs, the AI grader achieved ICC(A,1) = 0.967 (single run) and ICC(A,5) = 0.993 (averaging five runs), with a 95% repeatability coefficient of 5.33 points on the 60-point scale; item-level agreement was lower (ICC(A,1) = 0.836) but summed stably.
- **Question type strongly determines reliability:** Textual (short and long answer) and chemical reaction questions were graded most reliably (highest normed F1), whereas drawing and especially graphing tasks performed worse than random, in part because background grids visually distract AI vision; [[multimodal|multimodal AI]] still struggles with scientific diagrams and chemical structure interpretation.
- **Total-score agreement exceeds per-item agreement:** AI vs. TA regression on total scores reached R² = 0.91 even though per-problem R² ranged 0.61–0.85, because item-level over- and under-scoring partially cancel when summed (a Spearman–Brown aggregation effect) — but systematic biases do not cancel.
- **Score compression effect:** AI-vs-TA regressions show a small positive intercept with slope < 1.0, i.e., the AI is a "timid grader" — slightly generous at the low end and conservative at the top, narrowing score spread.
- **Grade-boundary agreement:** At whole-point resolution, exact-match agreement beyond chance was low (Cohen's κ = 0.096) but ordinal agreement was strong (weighted κw = 0.865), indicating discrepancies were predominantly small.
- **Selective automation via confidence filters:** A partial-credit threshold (e.g., ≥50%) suppresses the student-harm (under-credit) mode while auto-accepting roughly half the items; an [[item-response-theory|IRT]]-based Bayesian risk filter achieves similar alignment with lower human workload; excluding drawing/graphing problems is the most straightforward operational rule.
- **Cost and workload:** AI grading cost ~\$100 (32.15M tokens) versus ~\$3,500 for 16 TAs × 5 hours; because only about half of results were deemed trustworthy, the AI-assisted scenario cost roughly \$1,225 — the main benefit is sustaining open-ended exam questions under rising enrollments rather than guaranteed cost savings.
- **Oversight and governance are essential:** The authors argue a uniform "grade everything" approach is not defensible for [[summative-assessment|high-stakes]] use, that false positives (AI awarding points for wrong answers) can go undetected because students rarely contest them, and that [[educational-policy-ai|regulatory frameworks]] designating AI in educational assessment as high-risk mandate documented [[human-in-the-loop-ai|human oversight]].

## What this means for practice

- **Instructors.** Exclude drawing and graphing items from AI grading. Those formats performed at or below chance (normed F1 = 0.13 for drawing and −0.098 for graphing, worse than random for graphing), partly because background grids visually distract the vision model, while textual and reaction answers graded most reliably.
- **Instructors.** Adopt selective deferral rather than whole-exam automation: a partial-credit threshold of at least 50% suppressed the student-harm (under-credit) mode while auto-accepting roughly half the items, and excluding drawing and graphing is the most straightforward operational rule.
- **Assessment professionals.** Do not read strong total-score agreement as item-level accuracy. AI-versus-TA regression reached R² = 0.91 on totals while per-problem R² ranged 0.61–0.85, exact agreement at grade boundaries was low (Cohen's κ = 0.096; weighted κw = 0.865), and the AI acts as a "timid grader" that is generous at the bottom and conservative at the top.
- **Instructors.** Explain the deferral rule to students in plain terms: the Bayesian risk filter matched human workload while producing comparable alignment, but the authors note its [[item-response-theory|IRT]]-style logic is harder to justify to non-technical audiences than a partial-credit threshold.
- **Faculty developers.** Build oversight into the workflow, not around it. The authors judge a uniform "grade everything" policy indefensible for [[summative-assessment|high-stakes]] use and call for re-validation whenever the model, prompt, rubric, or exam format changes.

## Limitations

- Human grades were not independently double-scored. The study used the course's routine one-rater-per-item TA workflow as the reference standard, so the authors describe their labels as "an operational reference standard rather than a replicated consensus," leaving residual rater error possible.
- The 0.1% TA error estimate derives from the roughly one-third of students who inspected their exams — a self-selected group likely to be suspicious of the grading or near a grade boundary.
- Findings are specific to one general-chemistry final at one institution, administered and graded in German, using GPT-o4-mini with a single prompt and rubric presentation (296 of 459 students consented); the authors note performance drops for less well-represented languages and that results are a snapshot tied to a model version.
- No student perception data were collected. Trust, fairness, and willingness to accept outcomes are inferred from related literature rather than surveyed, and consenting students may differ systematically from those who declined.

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
