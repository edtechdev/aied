---
title: "LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework"
created: "2026-05-15T04:33:04-04:00"
updated: "2026-09-12T03:05:00-04:00"
type: article
tags: [automated-assessment, higher-ed, stem-education, llm, generative-ai, feedback, assessment-validity, formative-assessment, open-source]
audience: [instructors, software developers]
research_method: [program evaluation]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2605.05410.md']
confidence: high
---

> **Synthesis:** LaTA is a privacy-preserving autograder that grades LaTeX homework with a locally hosted open-weight reasoning model (gpt-oss:120b on a single Mac Studio), so no student work leaves the instructor's machine — the FERPA problem that blocks most [[automated-assessment|automated grading]] deployments disappears rather than being managed. Deployed across a full 200-student mechanical-engineering course, its instructor-confirmed error rate held at roughly 0.02-0.04% per rubric line item, and the author reports better exam performance and large self-assessed confidence gains against his previous traditionally graded cohort. The paper is notable for how carefully it refuses to over-claim: the exam gain bundles three changes at once, and the author says so explicitly rather than attributing it to the autograder.

## Overview

Upper-division STEM coursework with derivations is expensive to grade: a term of assignments and exams routinely consumes hundreds of TA hours of first-pass grading. The obvious fix — send student work to a commercial LLM API — runs into FERPA and institutional data-governance rules, because student educational records end up at a third-party provider. LaTA takes the other route: run an [[open-source|open-weight]] reasoning model on hardware the instructor owns, and use instructor-authored rubrics with reference solutions to keep the grading decision interpretable and auditable.

The paper is a deployment and program-evaluation study rather than a benchmark. Its contribution is showing that the local route can carry a *full-replacement* deployment at real course scale — every submission of every homework graded by the pipeline, not a subset — while keeping the cost, privacy, and reliability story honest.

## Study Design & Method

- **System architecture.** A four-stage pipeline (ingest → segment → grade → report) grading LaTeX-native submissions against YAML rubrics with binary per-item scoring and instructor-authored reference solutions. A regex segmenter splits top-level chunks and falls back to gpt-oss:20b when it cannot; the grader is gpt-oss:120b, with responses validated against a strict Pydantic schema and prompts that wrap student text in untrusted-input delimiters.
- **Hardware and cost.** All inference ran on one Apple Mac Studio (M3 Ultra, 256 GB unified memory) in the instructor's lab, with gpt-oss:120b and gpt-oss:20b the only active models. Cost is $0 marginal per assignment; per-submission grading took 1-3 minutes, aggregating to 4-8 hours of wall-clock time per homework set for the whole cohort.
- **Course and enrolment.** ME 373 at Oregon State University, Winter 2026: eight homework sets across weeks 1-9 with an enrolment of about 200 students. Homework submitted in LaTeX and graded end-to-end by LaTA; instructor rubric authoring took 30-60 minutes per homework once the binary decomposition was internalised.
- **Corrections and disputes (two tiers).** Tier 1 was a per-assignment corrections pass: 90% of students submitted corrections, and because corrections mode regrades the entire resubmission rather than a diff, a student who fixed one problem also had the rest regraded. Tier 2 was a Gradescope regrade request handled by the instructor — roughly 5-10 requests per assignment across the quarter.
- **Evidence streams (three, deliberately triangulated).** Operational data plus a regrade audit; an anonymous post-term student survey (N = 159) with Likert items and free responses; and a quasi-experimental between-cohort exam comparison against the same instructor's Winter 2025 cohort.
- **Comparison cohorts.** Winter 2026 enrolment 200 with 182 sitting the final exam, against Winter 2025 enrolment 181 with 157 sitting the final. Same instructor, textbook, weekly schedule, and exam structure; about two-thirds of exam problems were held identical and the replacement third was judged slightly harder, which the author treats as biasing the comparison *against* the new cohort. No inferential statistics are reported for this comparison, by design.
- **Confidence instrument.** Block 1 measured pre/post confidence on four course-level learning objectives with 5-point Likert items, collected as a single-administration *retrospective pre-test*. Because the survey was anonymous, pre and post distributions were treated as independent and tested with Mann-Whitney U rather than a paired test.

## Key Findings

- **Reliability was high in operational terms.** Across the quarter, instructor-confirmed per-rubric-item error rates held at approximately **0.02-0.04%**, derived from the regrade audit: every submission passes through the grader three to six times, and only about 5-10 regrade requests per assignment reached the instructor.
- **The privacy claim is structural, not procedural.** No component of the grading pipeline sends student work off the machine, so the [[privacy|FERPA]] problem is removed by architecture; the paper releases the code under AGPLv3.
- **Feedback volume funded other teaching.** The TA hours released by autograding were redirected into office hours, with Winter 2026 TA office-hour coverage roughly **3×** that of Winter 2025 — an operational consequence that matters independently of grading accuracy.
- **Exam performance moved in the intended direction.** The LaTA-graded cohort outperformed the previous one by approximately **11%** on the midterm and **8%** on the final exam.
- **The exam delta is a composite effect, and the author says so.** Three changes were bundled between cohorts — LaTA autograding with LaTeX-native homework, the corrections workflow, and tripled TA office hours — and a single year of post-hoc data cannot separate them. The paper makes the composite attribution explicit and states that disentangling the three requires a multi-section or multi-year replication.
- **Confidence gains were large on every objective.** Survey responses (N = 159) showed differences of at least **+1.49 Likert points** on every stated learning objective, with p < 10⁻²⁷ on every comparison.
- **The confidence instrument has a known bias.** A retrospective pre-test avoids response-shift bias but tends to *inflate* apparent gains, and the unpaired Mann-Whitney analysis is conservative only in the p-value sense. The author argues the magnitudes should not be read as clean pre/post differences, while noting the between-cohort exam delta moves the same direction.

## Implications

Read as an existence proof rather than an effect-size estimate, the paper answers the practical question institutions actually ask about [[automated-assessment|LLM grading]]: can a locally hosted open-weight model grade a real, derivation-heavy course, at scale, all term, without a privacy exemption? The answer here is yes, with a single Mac Studio, $0 marginal cost, and an operational error rate low enough that the instructor's remaining grading work collapsed into a few dispute requests per assignment.

The design lesson is where the accuracy came from. LaTA is not more reliable because the model is better than a cloud API; it is reliable because the rubric is instructor-authored, binary per item, and anchored to reference solutions — the same conditions credited in [[short-answer-scoring-quality-degradation|work on where automated scoring degrades]]. The second lesson is the corrections workflow: regrading the whole resubmission rather than a diff restored partial credit but also re-exposed already-graded work to new errors, a design tension anyone building a corrections pass should anticipate.

The paper is also a useful model for [[ai-ed-evaluation|evaluation]] honesty in this literature. It reports three evidence streams and then declines to attribute the headline exam gain to its own tool, naming the composite-intervention confound, the single-instructor/single-course/single-year generalisation ceiling, the retrospective instrument, the unpaired analysis, and the single-coder thematic analysis as limitations. For readers comparing it with the larger [[formative-assessment|formative feedback]] literature, that restraint is what makes the throughput and error-rate numbers the trustworthy part of the result.

## Connected Concepts

- [[automated-assessment]]
- [[feedback]]
- [[generative-ai]]
- [[assessment-validity]]
- [[formative-assessment]]
- [[stem-education]]
- [[higher-ed]]
- [[llm]]
- [[privacy]]
- [[open-source]]
## Connected Articles

- [[short-answer-scoring-quality-degradation]]
- [[principled-ai-education]]
## Citation

Rodríguez, J. A. (2026). [LaTA: A drop-in, FERPA-compliant local-LLM autograder for upper-division STEM coursework](https://arxiv.org/abs/2605.05410). Submitted to Computers & Education.
