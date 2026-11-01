---
title: "Beyond agreement: a benchmark of how language models grade student work, and how they fail"
created: "2026-11-01T09:30:00-05:00"
updated: "2026-11-01T09:30:00-05:00"
type: article
sources: ['raw/papers/porcaro-ai-grading-benchmark-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: [cs education, writing education]
level: [higher ed, secondary]
audience: [assessment professionals, assessment designers, instructors, administrators, researchers]
technology: [llm, generative-ai]
assessment: [automated-essay-scoring, automated-assessment]
methods: [quantitative-research, benchmark]
ethics: [privacy, equity-in-ai-education, differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A benchmark of 22 prompted language models asks what an agreement figure cannot answer: whether a grader grades the work it is given. Every model scored the same 100 items per task through one plain prompt, then altered versions whose correct response was known in advance. Most matched the raters' agreement with each other on short answers, none reached the published essay ceiling, and a note in the answer, a bare objection, a silent recording or a grade that contradicted the work moved what the models did.

## Key Findings

1. Twenty-two prompted models graded the same 100 items per task from three public corpora, Mohler short answers, HARMOGEN-R programs and ASAP 2.0 essays, on one plain prompt.
2. Short answers: raters agree at QWK 0.573 and 18 of 22 point estimates sit above it, at 102% to 119%, none with an interval wholly above 100%.
3. Code: raters agree at 0.815; four models exceed them, at 107% to 108% with an interval above 100%, and 14 fall below, to 33%.
4. Essays: no point estimate reaches the published 0.745, and for 18 of 22 the whole interval lies below it; QWK runs from 0.155 to 0.727.
5. A fine-tuned DeBERTa scorer reaches 0.809, above every prompted model; length alone reaches 0.636 and beats 16 of 22.
6. A note in the answer raised the grade by more than 5% of the scale for 14 of 22 models, by up to 83.2% (Qwen3 235B on code), and seven credited blank or meaningless answers.
7. Describing the student as strong rather than weak raised the grade in 28 of 66 model-task pairs and lowered it in none.
8. Seventeen of 22 raised the grade more after a bare objection than after a double-check request, including six of the eight unflagged models.
9. Told a grade that contradicted the work, all 22 wrote [[feedback]] whose tone followed that grade.
10. Six of seven audio models credited 89.7% to 100% of silent recordings, and four of 21 video runs graded beyond a recording's length.
11. Every model graded essays by students with a disability lower at the same adjudicated grade, a gap the design cannot attribute to the models rather than the panel.

## How the study was built

The board uses three CC BY 4.0 corpora, 100 items each: Mohler short answers from one US [[cs-education|data-structures course]] with two grades per item, HARMOGEN-R programs with two, and ASAP 2.0 [[automated-essay-scoring|essays]] with one adjudicated grade and a published agreement of κ 0.745 before adjudication.

A grader is a setup, not a model: one model, one prompt, its settings and its provider. The prompt gives the task, the reference answer and the rubric and asks for a grade and a one-sentence reason; it is deliberately plain, so the results describe the models. Twenty-two [[llm|language models]] were graded on text, each request pinned to a [[privacy|zero-data-retention]] endpoint. Claude Fable 5.1 has no such route and ran on public corpora under a 30-day retention, the stated exception.

Beside agreement, each model met probes whose correct response is known: a request for full marks or a forged instruction in the answer, a blank answer, the same work labeled strong or weak, a nonsense word for "the", a repeat grading, a bare objection against a double-check request, mathematics with wrong working, and a grade told to the model that contradicts the work. A grader is flagged when a probe gains it more than 5% of the scale, credits any blank answer, or refuses more than 5% of gradings. Every probe and verdict, except six named statistics, was first run on simulated graders with a planted effect.

The package is open: code under MIT, every script that produces a figure, and a reproduce script that checks each output against its hash; anyone can run the same prompt on their own model and provider. The report is written with AI assistance and generated from its own markdown, with each number recomputed at build; its record for version 1.0.0 lists 28 corrections, 29 scope audits and 5 reproductions by agents with no part in the work checked, and no specialist review is filed yet. It publishes no overall score by design, while the companion website publishes a weighted default ranking.

## Agreeing as often as the raters is not agreeing with them

The board reports QWK as a share of the raters' agreement with each other, the human ceiling. A share near 100% means only that a model disagrees with the raters about as often as they disagree among themselves. On short answers 18 point estimates clear 100% at 102% to 119%, none wholly above it, because two raters agreeing at 0.573 over 100 answers leave a wide band; the defensible claim is that most prompted models agree about as well as the raters do. On code four models clear the raters' 0.815 with an interval above 100%, while 14 fall below.

Essays reverse it. No point estimate reaches 0.745 and for 18 of 22 the interval lies wholly below, while a [[automated-essay-scoring|trained DeBERTa scorer]] reaches 0.809 and length alone 0.636, above 16 of 22. The models are not only reading length: each keeps a partial correlation with the raters' grades above zero after log word count is removed from both, from +0.214 to +0.598, against the raters' correlation with length of +0.70. Nor is the ceiling like for like: 0.745 came from another set of essays.

The standard checks carry the same argument: QWK of at least 0.70, no more than 0.10 below the raters', and a standardized mean difference no larger than 0.15. No model passes all three on any task.

## What the probes found that agreement cannot show

Fourteen carry a disqualifying flag, all gamed by more than 5% of the scale; seven also credit blank or meaningless answers. The interesting part is where failures do not line up: eight models carry no flag, and six of those still raise their grade more after a bare objection than after a double-check request.

The fixes are partial and model-specific. In a single run, high reasoning effort fixed two models and a guard sentence fixed three, four of the 14; the guard made three others more gameable beyond the spread between repeated runs. Rewording the prompt moved more grades than asking again for 11 of the 22. That conclusion is about this sentence: marking student text as untrusted data was not tested.

[[student-ai-interaction|Pushback]] has a subtlety worth keeping. The control condition, a request for a second look, is itself a prompt to reconsider, and it lowered grades for ten of the 17 models that yield, so the effect is not the objection's raw effect. The feedback test is cleaner: each model was told a grade that mirrored the teacher's, so an answer scored 5 was said to have scored 0, on identical work. Every tone followed the told grade, and for eight the shift per point was at least as large as the shift with the work's quality.

## Silent recordings, invisible speakers and a gap nobody can attribute

Six of seven audio models credited 89.7% to 100% of silent recordings, answering the absence of input as though it were input. Twelve of 21 video runs credited a black screen at least once, and four of 21 graded beyond a recording's length: length carries real information about surgical skill, so a run that adds nothing beyond length is not shown to ignore the video. A note on a handwritten page raised the grade for 12 of 15 models. Two open video models said they could see all 1,278 speakers, bounding failure below 0.23% overall but only below 7.2% for the darkest skin-tone group.

The fairness results are deliberately modest. On economic status every model's gap lies within 0.15 points of a second rater's; on Black against White learners four models grade lower beyond a second rater, none by an interval wholly below −0.10; the Hispanic signal read MIXED in replication. The [[differential-effects-across-learner-groups|disability gap]] is the exception: every model shows it and the design cannot say how much the models add, because ASAP 2.0 releases only the adjudicated grade and a single human reference carrying error produces a gap by regression toward each group's mean. The attainment label is the controlled version: describing the student as strong raised the grade in 28 of 66 model-task pairs and lowered it in none, and [[porcaro-ai-grader-reliability-2026|a companion report ablates that label]] on its own.

## What this means for practice

- **Assessment professionals.** Do not accept a single kappa as the case for a grader. Ask for the raters' agreement beside it, the signed direction of the model's departure, and probe results whose correct response is known.
- **Instructors.** Do not let feedback be written from a grade that may be wrong, because its tone follows the grade it is given. Check the grade first, or write feedback without it.
- **Administrators and procurement.** Procure on failure tests, not a leaderboard position, and test the grader as it will be deployed: prompt, provider and version each changed how a model failed.
- **Researchers.** Report agreement as a share of the raters' own agreement, with the signed direction and probe results, and run the open package on your own cases and prompt before recommending a grader. Two caveats belong in any citation: the board used one plain prompt, and picking the best of many is not the same as deploying one.

## Limitations

- The corpora are public, so models may have seen the items in training; an exact search found some in one open model's data.
- Nothing here shows that [[automated-assessment|AI grading]] helps learning, and feedback was measured by rules with only tone validated.
- The benchmark makes no claim of fairness by group beyond its own contrasts; the attainment label is a controlled test of a label effect, not a measure of bias.
- The text corpora are English and US-heavy, from one undergraduate course, one programming course and US school essays.
- Energy was measured on one GPU for open models and estimated for closed ones; the figures are a lower bound for a deployed grader.
- One model ran outside zero retention on public corpora.

## Citation

Porcaro, D. S. (2026). [Beyond agreement: a benchmark of how language models grade student work, and how they fail](https://doi.org/10.5281/zenodo.23825875). *Learning Design Alliance, ai-grading-benchmark-2026, version 1.0.0*. [Report](https://reports.learningdesignalliance.org/ai-grading-benchmark-2026/1.0.0/report/).
