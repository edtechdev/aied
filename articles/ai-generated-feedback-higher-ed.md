---
title: "Artificial intelligence and feedback in university education: effectiveness and student perceptions"
created: "2026-07-19T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm, rag]
assessment: [feedback, formative-assessment, learning-gains]
stakeholders: [student-experience]
research_method: [quasi-experiment]
audience: [learners, instructors]
level: [higher ed]
sources: ['raw/papers/tandf-2026-ai-generated-feedback-higher-ed.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** This quasi-experimental study directly compares **AI-generated feedback** (two LLMs: **GPT-o4-mini** and **DeepSeek R1**) with **expert human-teacher feedback** in a project-based university course (Assessment & Learning, third-year Primary [[teacher-education|Teacher Education]], University of Padua). The central question is not "is AI feedback worse?" but *under what [[pedagogy|pedagogical]] conditions* AI feedback can be a credible, educationally meaningful component of formative assessment. The answer the authors land on: **feedback effectiveness depends less on its source than on the pedagogical architecture in which it is embedded** — strong assessment literacy and explicit, shared criteria make AI feedback comparable to teacher feedback.
## Method (key parameters)
- **Design:** 47 student groups (N = 238; 146 attending, 92 non-attending) randomly assigned to one of three feedback conditions — DeepSeek R1 (16 groups), expert human teacher (16), GPT-o4-mini (15). Unit of analysis = group (4–5 students each) to preserve independence.
- **Task:** Two-stage project (PRE then POST), evaluated with a shared analytic rubric (0–30 points) co-constructed with students.
- **AI [[prompt-engineering|prompt design]]:** Both LLMs were given all course materials plus an assignment brief, the pedagogical framework, and the co-constructed rubric via a **Retrieval-Augmented Generation (RAG)** setup; instructed to act as a university professor and give objective, justified, actionable formative feedback. The rubric + an exemplar functioned as a "calibration device" that transferred the teacher's evaluative expectations into the AI.
- **Analyses:** Wilcoxon signed-rank (PRE–POST), Kruskal–Wallis across sources, robust linear models (HC3) for attendance moderation, and — crucially — **non-inferiority and equivalence tests** (Welch-adjusted 90% CIs, pre-specified margin ±1 point on the 30-point scale), because non-significant differences don't imply practical equivalence.

## Key Findings

### RQ1 — Feedback improves performance regardless of source
Across all 47 groups, project performance rose significantly from PRE to POST (Wilcoxon W = 1081, p < 0.001, rank-biserial rrb = 0.77 — a large effect); mean score +3.9 points (23.81 → 27.70), with post-test scores converging near the ceiling (median 28).

### RQ2 — No significant difference between feedback sources
Post-feedback scores did **not** differ by source (Kruskal–Wallis H(2) = 1.91, p = 0.384, ε² = 0.042); gain scores likewise non-significant (H(2) = 0.74, p = 0.690). Pairwise Hodges–Lehmann contrasts all had CIs spanning zero.

### RQ3 — Attendance doesn't matter
Robust linear model: no main effect of attendance (F(1,41) = 1.52, p = 0.225), no source × attendance interaction (F(2,41) = 0.97, p = 0.389).

### RQ4 — AI feedback is practically comparable to teacher feedback
| Comparison (AI − Teacher) | Mean diff | 90% CI | Non-inferior? | Equivalent? |
| --- | --- | --- | --- | --- |
| **GPT-o4-mini** vs Teacher | +0.23 | [−0.46, 0.91] | **Yes** | **Yes** |
| **DeepSeek R1** vs Teacher | +0.56 | [−0.05, 1.18] | **Yes** | No (upper bound exceeds +1) |

Same pattern on baseline-adjusted gains (DIFF_ADJ). **GPT-o4-mini met both non-inferiority and full equivalence**; **DeepSeek R1 met non-inferiority** (practically comparable, but with more uncertainty).

### Student perceptions — equally positive across sources
Validated 19-item questionnaire (N = 200; scales: perceived mastery α = 0.81, positive emotions α = 0.85, negative emotions α = 0.73). Students were **blind** to feedback source. No significant differences across conditions on any scale:
- Perceived mastery: M ≈ 4.14–4.22 (high)
- Positive emotions: M ≈ 3.99–4.21
- Negative emotions: M ≈ 1.22–1.39 (low)
- Overall satisfaction: ~98% (DeepSeek 97.5%, teacher 94%, GPT-o4-mini 100%) — analyzed descriptively due to ceiling.

AI-generated feedback was experienced as acceptable and supportive, comparable to teacher feedback.

## Interpretation: Source vs. Architecture
The authors' core argument: **feedback works as a systemic, relational process, not a function of who (or what) produces it.** In this study both AI and teacher feedback were anchored to the *same explicit rubric and student co-constructed exemplar*, which made criteria transparent and gave the AI an "interpretative anchor" usually tacit in human grading. It is the **teacher's assessment literacy** — encoded in the rubric and exemplar — that calibrated the AI, not the model alone. Thus [[generative-ai|generative AI]] is best seen as a **support for teachers with strong assessment literacy** (scaling timeliness/consistency) rather than an autonomous replacement. The study explicitly warns against over-reliance and unequal access, and calls for maintaining teacher oversight and students' critical [[student-engagement|engagement]].

## What this means for practice

- **Instructors.** Co-construct the assessment rubric and an exemplar with students, then supply both to the AI: this [[rag|retrieval-augmented]] set-up anchored GPT-o4-mini and DeepSeek R1 to the same 0–30 criteria used to judge student work, and GPT-o4-mini came out both non-inferior and equivalent to expert teacher feedback (+0.23 points, 90% CI [−0.46, 0.91]).
- **Instructors.** Use AI feedback to scale timeliness and consistency while retaining teacher oversight: [[generative-ai|generative AI]] in this study is support for teachers with strong assessment literacy, not an autonomous replacement.
- **Faculty developers.** Train assessors to make criteria explicit before introducing AI feedback — the calibration device was the rubric and exemplar, not the model, which is why the same architecture worked with two different LLMs.
- **Instructors.** Tell students when feedback is machine-generated and prompt them to engage critically with it; students were blind to source yet rated AI and teacher feedback comparably, and the authors flag over-reliance and unequal access as risks even in a positive-result study.
- **Researchers.** Treat this as a well-controlled data point (randomized, blind, equivalence-tested) that AI-generated feedback can match expert teacher feedback for [[project-based-learning|project-based learning]] when criteria and assessment literacy are high, complementing [[ai-feedback-quality]] and [[ai-learning-companions-framework]] work and bracketing [[ai-education|AIED]] design-dependence alongside the PNAS [[rct]] on unguarded AI tutoring.

## Limitations
- **Ceiling effect:** 91% of groups scored ≥27/30 (SD = 0.95) — limits sensitivity of post-test comparisons; equivalence rests mainly on adjusted-gain analyses.
- **Small group-level N = 47** → wide CIs; modest source differences can't be fully ruled out.
- **No prior-AI-experience data** collected; single course / discipline (Primary Teacher Education); **student assessment literacy not measured** (treated as a hypothesis, not tested).

## Connected Concepts

- [[ai-literacy]]
- [[formative-assessment]]
- [[higher-ed]]
- [[rag]]
- [[scaffolding]]
- [[student-experience]]
- [[generative-ai]]
- [[llm]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[learning-gains]]
- [[cognitive-offloading]]
## Connected Articles

- [[genai-teacher-feedback-comparison]] — Comparing Generative AI and teacher feedback: student perceptions of usefulness and trustworthiness
- [[learner-centered-feedback-ai]] — Enhancing learner-centered feedback with AI: teachers' practices and perceptions
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of generative AI
- [[repeated-ai-writing-feedback-semester]] — Student Evaluation of Repeated AI Feedback Across a Semester of Writing
- [[ai-learning-companions-framework]] — Building AI Companions that Prioritize Learning over Performance
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails can harm learning: Evidence from high school mathematics

## Citation

Grion, V., Doria, B., Agostini, D., & Slaviero, G. (2026). [*Artificial intelligence and feedback in university education: effectiveness and student perceptions*](https://www.tandfonline.com/doi/full/10.1080/02602938.2026.2697962). *Assessment & Evaluation in Higher Education*.
