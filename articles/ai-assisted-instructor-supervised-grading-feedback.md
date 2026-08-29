---
title: "AI-assisted, instructor-supervised grading and feedback in higher education: Design and evaluation of an end-to-end pipeline"
created: "2026-08-23T08:07:04-04:00"
updated: "2026-08-23T15:00:00-04:00"
type: article
tags: [automated-assessment, llm, feedback, formative-assessment, higher-ed, human-in-the-loop-ai]
research_method: [design-based research]
level: [higher ed]
sources: ['raw/papers/ai-assisted-instructor-supervised-grading-feedback.md']
confidence: high
---

> **Synthesis:** Cruz, da Silva, and Mamede (2026) present the design, deployment, and evaluation of a GPT-4o-based grading and [[feedback]] pipeline for a Master's-level Information Systems Project Management course, developed using Design Science Research. The artefact orchestrates submission collection (Google Forms), rubric-based scoring with rubric-linked qualitative feedback (OpenAI GPT-4o via a Cloud Function), and analytics storage (BigQuery) across six consecutive case-study assignments, with the AI grader supplementing rather than replacing [[teacher-role|instructor]] grading. Across 362 submissions from 66 students, the AI reproduced the instructor's mark within a pre-specified 0.5-point tolerance in 83% of cases (MAE 0.31), achieved only moderate chance-corrected agreement (ICC 0.49), and showed a small conservative bias. The pipeline operated at EUR 0.55 per student per assignment and delivered feedback within 24 hours, supporting [[llm]]s as scalable assistants for [[formative-assessment]] under a supplement-not-replacement design.

## Key Findings

- Across 362 submissions from 66 students, the AI reproduced the instructor's mark within the 0.5-point tolerance in 83% of cases, with a mean absolute error of 0.31 points and a small systematic bias of −0.16 points (95% CI [−0.19, −0.12]).
- Chance-corrected agreement, ICC(2,1) = 0.49 (95% CI [0.33, 0.61]), was moderate at best, spanning the poor-to-moderate range; range restriction (instructor grades 2.75–5.0) attenuated the coefficient.
- Among 112 survey responses (31% response rate), about 80% rated the feedback useful and 77% accurate; an automated corpus analysis found 99.7% of records met Shute's Elaborated Feedback criteria with high lexical diversity.
- The pipeline operated at EUR 0.55 per student per assignment and delivered feedback within 24 hours, deployed as an instructor supplement under GDPR safeguards.

## Assessment as a Formative Constraint

The paper situates AI-assisted grading within the chronic constraints of [[higher-ed|higher-education]] assessment: timely, criterion-referenced feedback is among the highest-impact [[pedagogy|pedagogical]] interventions, yet massified cohorts force multi-week delays, inter-rater inconsistency, and feedback compressed to brief phrases. Shute's taxonomy distinguishes Knowledge of Results (KR), Knowledge of Correct Response (KCR), and Elaborated Feedback (EF) — the most pedagogically valuable yet the most resource-intensive to deliver at scale, which is precisely where LLM assistance becomes attractive. First-generation [[automated-essay-scoring|automated essay scoring]] relied on surface features (word count, syntactic variety) with moderate human correlations, while LLMs such as GPT-4o interpret open-ended responses, apply rubric criteria, and generate explanatory feedback. Notably, the study reports a substantial gap between offline [[benchmark]] agreement (r = 0.92 on 150 historical scripts) and live-deployment agreement (r = 0.57), empirically illustrating that offline benchmarks can over-estimate how an LLM grader behaves in authentic, instructor-supervised use.

## Design and Solution Requirements

Seven mandatory requirements anchor the design: (A) rubric-aligned accuracy within 0.5 points for the majority of submissions; (B) actionable feedback of three rubric-linked comments (a specific strength, a concrete improvement step, and a pitfall to avoid); (C) 24-hour turnaround; (D) instructor oversight and configurability with override before publication; (E) transparency and bias control via full prompt-response logging and outlier flagging; (F) cost-effective scalability; and (G) GDPR-compliant data handling. The tolerance of 0.5 points is tied to the instrument's own resolution: the rubric anchors descriptors at integer points and grades are released at half-point resolution, so 0.5 is the largest discrepancy that cannot move a submission across an anchor band. A separate 0.8-point outlier-review trigger escalates submissions for human attention before AI feedback is released, and in this deployment escalated 11 of 362 submissions (3.0%).

## Architecture, Data Protection, and Explainability

The native cloud pipeline uses Google Forms for submission, a deadline-triggered Cloud Function that prompts GPT-4o with the full rubric and exemplar answers, BigQuery for analytics, and personalised emails for dispatch. Data protection is a first-order concern across four layers: data residency (raw submissions never leave the [[governance|institutional]] Google Workspace tenant), anonymisation before egress (direct identifiers stripped; opaque study identifiers with a separate restricted linkage table), contractual and [[educational-policy-ai|policy]] controls (OpenAI API data not used for training), and retention of de-identified aggregated data. Explainability and recourse mechanisms include pre-informing students that AI is a supplementary grader, communicating per-criterion scores and three rubric-linked comments, and logging every prompt-response pair so any score can be traced and overridden.

## Grading Agreement and Systematic Behaviour

Requirement A was met in every case individually (76%–93% within tolerance) and in aggregate (83%). The AI's typical error of 0.31 points is small in absolute terms but roughly three-quarters of the instructor grade standard deviation (0.41), and the AI compresses the grading range (3.08–4.75 vs instructor 2.75–5.0), under-using the extremes of the scale. A Bland–Altman analysis confirmed a small reliable conservative bias (−0.16 points) with limits of agreement [−0.83, +0.52]; the observed lower limit coincides with the pre-specified 0.8 escalation trigger, the behaviour a triage rule should have. Criterion-level analysis shows the AI's lowest scores on Personal Opinion (C4) and highest on Scope, Structure, and Objectivity, but because no criterion-level instructor scores were collected this describes the AI's own score distribution and cannot attribute the pattern to AI severity versus genuine student weakness.

## Feedback Quality and Student Perception

Feedback quality was assessed from two complementary perspectives. From the student side, ~80% of 112 survey responses rated the feedback useful and 77% accurate, though drawn from a self-selected 31% response rate. From a reproducible automated corpus analysis (five structural indicators), the feedback showed high lexical diversity (83% unique strengths, 71% unique improvements, 83% unique points-to-avoid), cross-band dissimilarity ratios consistent with mild personalisation by performance level, 99.7% Elaborated-Feedback coverage, 99% rubric-criterion mention in improvement comments, and a negative correlation (−0.26) between AI grade and negative-tone markers. The convergence of high perceived usefulness with high structural quality is a stronger signal than either alone, although the authors note students may conflate feedback quality with feedback affect.

## Efficiency, Cost, and Practical Implications

Grading a cohort takes under an hour per case, students receive supplementary feedback the morning after the deadline, and the full semester cost ~EUR 198 (< EUR 0.55 per student per assignment). Instructor time saving is estimated at ~48 hours per semester (~89% per submission, via self-report). The authors are blunt that this accuracy profile would not license autonomous grading: a human marker performing this way would not be entrusted with the course alone. The AI's errors never reached the official record, the formative comparator is a counterfactual of weeks-late feedback, and the escalation rule surfaces discrepancies large enough to mislead. Removal of the instructor from the loop is explicitly regarded as unsupported. Future work includes testing across disciplines and course formats, [[multimodal]] extension, on-premises [[open-source]] models for stricter data residency, criterion-level instructor scoring, longitudinal learning-gain studies, and formal [[equity-in-ai-education|equity]] audits.

## Connected Concepts

- [[automated-assessment]]
- [[llm]]
- [[feedback]]
- [[formative-assessment]]
- [[higher-ed]]
- [[human-in-the-loop-ai]]
- [[teacher-role]]
- [[academic-integrity]]

## Connected Articles

- [[ai-generated-feedback-higher-ed]] — AI-generated feedback in higher education
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Instructor and AI roles in ChatGPT formative assessment
- [[llm-formative-feedback-systematic-review-2026]] — LLM formative feedback systematic review

## Citation

Cruz, L. F., da Silva, M. M., & Mamede, H. S. (2026). [*AI-assisted, instructor-supervised grading and feedback in higher education: Design and evaluation of an end-to-end pipeline*](https://doi.org/10.1016/j.caeo.2026.100411). *Computers and Education Open*.
