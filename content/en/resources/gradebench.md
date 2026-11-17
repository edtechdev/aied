---
title: "GradeBench"
created: "2026-11-17T08:20:00-05:00"
updated: "2026-11-17T08:20:00-05:00"
type: resource
summary: "A public leaderboard for frontier models grading real handwritten university STEM answers against the rubric items the instructor selected."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

GradeBench asks a narrow, useful question about [[automated-assessment|automated assessment]]: given a student's handwritten answer, the instructor's rubric, a reference solution and the rubric items the instructor actually selected, does a frontier model select the same items? The gold labels are real instructor and TA rubric selections from exams and quizzes, not re-graded model output.

## What you can do with it

Read the leaderboard before trusting any grading vendor's accuracy claim, and read the task construction before trusting the leaderboard. The benchmark holds 464 tasks drawn from 125 questions across 45 university courses at more than ten institutions, restricted to free-response exam and quiz items that a professor or TA reviewed line by line, and skewed toward partial credit — full-marks and zero-marks tasks are capped at 5% each because models find those easy.

The current leaderboard tops out well below human agreement: the best model reaches 57.3% exact rubric match, and the site plots accuracy against cost per 1,000 answers, where a model 0.8 points behind costs about a seventh as much. That cost axis is the practically useful part, since grading is a volume operation.

For a second, independently built instrument, see the [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) from the Learning Design Alliance, which is packaged as an open repository rather than a hosted leaderboard and is summarized in [[porcaro-ai-grading-benchmark-2026|Porcaro's study]].

## Who it is for

Instructors deciding whether to let a grading tool release marks unreviewed, assessment professionals writing procurement requirements, and researchers who need a rubric-level target rather than an essay-scoring correlation.

## Notes and caveats

GradeBench is published by Pensive, a commercial AI grading platform, so the benchmark and the product share an owner; the task construction is documented and defensible, but treat the framing as the vendor's. It covers STEM exams with rubrics of at least four items, which excludes essays, short answers and discussion posts — the formats where most humanities grading happens. Exact rubric match is a strict metric: two graders can disagree on an item and both be right about the student. The scores describe model versions available in November 2026 and will move.

## Connected Concepts

- [[automated-assessment]] — the practice the benchmark measures
- [[assessment-validity]] — the criterion a leaderboard score is a proxy for
- [[benchmark]] — the wider class of instruments this belongs to
