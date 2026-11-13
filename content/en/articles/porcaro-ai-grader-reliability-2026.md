---
title: "Learner context changes an LLM grader's marks on identical work: a within-item ablation on six models"
created: "2026-11-01T06:33:01-05:00"
updated: "2026-11-01T09:45:00-05:00"
type: article
sources: ['raw/papers/porcaro-ai-grader-reliability-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [experiment]
discipline: [cs education, writing education]
level: [higher ed, secondary]
audience: [assessment professionals, assessment designers, instructors, administrators, researchers]
technology: [llm, generative-ai]
methods: [quantitative-research]
ethics: [privacy, differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A [[student-modeling|learner model]] shared with a grader looks like context and behaves like a bias. Told only that the same answer came from a high- or a low-attaining student, every model tested marked the high description higher: 0.28 to 0.75 points on a ten-point scale, more on whole programs, and double that when one model's reasoning was minimal. Whether the shift moved marks toward the [[teacher-role|teacher]] depended on the model, and rater agreement did not register it.

## Key Findings

1. Six models from five developers graded the same 300 short answers under a true and a swapped attainment label. All gave identical work more under the high label: L from +0.28 on Claude Opus 5.5 to +0.75 on Qwen3-235B.
2. The direction held on every model and inside each tail: in the high tail a false low label cost a strong student 0.30 to 0.79 points on work the same model marked higher with no label.
3. On short answers whose attainment could be computed, the difference was 0.28 to 0.75 points on a ten-point scale, 2.8 to 7.5% of it.
4. On 60 complete Java programs on a 14-level rubric it was larger for two of three models: 2.8 times the short-answer size on GPT-4.1-mini, 2.4 times on Qwen, 0.4 times on Gemini.
5. Reasoning was no remedy: GPT-5-mini at minimal reasoning doubled its effect from 0.52 to 1.04 points, so a false low label cost a strong student 1.16 points; more reasoning changed nothing.
6. Under RQ3, three graded examples moved Gemini's marks by the level at which they were marked: correct marks took 0.34 points off, shuffling them kept 37% of that shift, and shifting the shown marks two points moved the grade 0.39 points per point.
7. Under RQ4, grades feeding back into the learner model that supplies the label multiplied its spread by 1.066 to 1.167 over a simulated 40-item term, on fitted effects of 0.093, 0.100, 0.140 and 0.199 marks per point of label. Runaway would take 5.9 to 12.6 times each model's effect.
8. Under RQ5 the direction held across models, reasoning settings and item types, but the size did not transfer. Claude Fable 5.1, unreachable by API, graded a 100-answer subset in Claude Code on byte-identical prompts and showed the same effect, +0.31.
9. Under RQ6, on 3,000 ASAP 2.0 essays graded by two models, the high-low gap was the same for every group, every difference within 0.045 of a level. On Qwen the low label took 0.06 to 0.08 points more off [[multilingual-learning|English learners]], economically disadvantaged and disability-identified students than off peers, a [[differential-effects-across-learner-groups|group difference]] the ablation can size.
10. With no label, both models still marked English learners and disability-identified students below peers at equal human score (−0.21 to −0.32 of a level), and 68 to 87% of that gap survived correction for noise in the human score.

## How the study was built

The design is a within-item ablation: every configuration grades every drawn answer, so each answer is its own control. One block of text is added to the prompt's additional-context section, empty in the shipped configuration; the rest is identical across arms, byte for byte, and the harness imports the product's own prompt builder and schema.

Arms: a control; a previous attempt with a low or high mark, and the same attempts without the mark; the student's held-out attainment label, and the same label swapped for a paired student's; a neutral sentence of equal length (one model); and three graded examples shown correct, ungraded, shuffled, or shifted two points up or down. Attainment is the student's mean teacher grade on their other answers.

All five are public and CC BY 4.0, with location, license and SHA-256 in the release file and no corpus text shipped. JorGPT: 3,041 answers (3,031 non-empty) to 50 questions from 79 [[higher-ed|undergraduates]], 0 to 10, the only corpus with a student identifier on every answer. Mohler: 2,273 answers to 80 questions, 0 to 5, 1,727 analyzed. Menagerie: 279 Java programs on four rubric dimensions, from a [[cs-education|computer science course]], supplying the 60 complete programs. ASAP 2.0: 24,728 [[writing-education|secondary-school essays]] in grades 6, 8, 9 and 10, 1 to 6. HARMOGEN-R supplied only published marks, for the ceiling.

The models are Gemini 3.5 Flash Lite, GPT-4.1-mini, GPT-5-mini, Qwen3-235B-A22B-2507, Llama 4 Maverick and Claude Opus 5.5, from five developers, two [[open-source|open weights]]. Runs used each vendor's kit with provider defaults, and reasoning varied on two models. Claude Fable 5.1 could not be reached on OpenRouter under the account's [[privacy|zero-data-retention]] setting, so 20 Claude Code subagents graded batches of ten from the 100-answer subset, never both arms of one answer, on byte-identical prompts.

Each printed result ties to a committed analysis: the report is generated from the article's Markdown and the release's outputs, so every number links to the file and field it came from and is recomputed. Re-run panels recompute each finding from the 14,260 per-case outputs, which carry no answer text, and compare the result with the printed value as formatted text.

The source reports its own authorship: its AI-use section, signed by the author, states that the document, all code, all literature reviews and all validation checks were written by Claude Code (Claude Opus 5.5, Anthropic), and that the author's role was orchestrator, reviewer and approver.

[[porcaro-ai-grading-benchmark-2026|A companion benchmark]] scores the same graders on agreement, gaming, pushback and media.

Version history is part of the record. Version 1.0.1 corrects v1.0.0 (doi 10.5281/zenodo.23480844), whose release title was the release's own, with no analysis, number or verdict changed. Inline notes mark corrections: the runaway multiple shown as 12.5 and 11.7 until 2026-10-06 is now 12.6 and 11.8, and the minimal-reasoning effect is 0.38 SD where the paper printed 0.37.

## A learner model is meant to interpret an answer, and in the prompt it changes the mark

An [[automated-assessment|automated grader]] told what a student has already shown might read an ambiguous answer in that light, as a teacher would. What the ablation shows is a shift by tail rather than by need: a label says which tail a student is in, nothing about whether the model is already too generous or too harsh there. Gemini 3.5 Flash Lite, 0.49 points too generous on weak work, was pulled toward the teacher by the true low label, to 0.27 above. GPT-4.1-mini, Qwen3-235B and Claude Opus 5.5 already marked weak work below the teacher, and the low label made them harsher, worsening low-tail MAE by 0.07 to 0.21 points. A low mark on a previous attempt lowered the grade on identical work by 0.44 points, the same weak attempt without its mark did not (+0.14), and a high mark did not raise it. That case cannot rest on these numbers: a grade that already reflects the belief is a weaker test of it.

## The shift grows where the work is longer or the reasoning thinner

On complete programs the effect ran from 0.4 to 2.8 times its short-answer size depending on the model, so length, task and rubric are part of what is measured. The two models with the largest program effect tracked the human raters least well there, at correlations of 0.25 and 0.33. At minimal reasoning GPT-5-mini reached 1.04 points, and any reasoning restored the smaller effect: the shipped configuration is part of the instrument.

## The bias runs through the student description, not through the work

Every primary comparison holds the text fixed, so the difference cannot come from who wrote the answer or from [[item-response-theory|item difficulty]], and the effect grows with the label's value: the pooled relative slope was ρ = +0.84, excluding a fixed step. Context about the task moved the grade with the level at which examples were marked, 0.39 points per point, rather than correcting an offset.

[[assessment-validity|Agreement with a human rater]] detected none of this. On three runs the true label raised QWK by 0.029 to 0.046, no change in Pearson r was resolved, and a rescaling fitted without the label matched the label's gain at 0.038 QWK on average, consistent with marks landing nearer where the teacher puts them rather than better judgment. Withholding learner context is the equivalent of anonymous grading.

## What this means for practice

- **Assessment professionals.** Do not pass an attainment estimate or a prior attempt to a grader without an ablation: grade the same answers with and without each piece of context, and report signed error by tail beside QWK.
- **Platform and product teams.** Re-run that ablation whenever the model, the reasoning setting or the prompt changes: the effect doubled on one model at minimal reasoning, and a new version makes a new instrument.
- **Instructors.** Treat the student description as part of the instrument, not metadata: a learner model that underestimates a student costs that student up to 0.79 points on identical work, and the [[feedback]] carries it.
- **Researchers.** Report invariance beside agreement, resample the student rather than the answer, and measure group gaps at equal human score allowing for noise.

## Limitations

- Every corpus is public, English and mostly undergraduate computer science, the learner-context arms rest on one corpus with 79 students, and the previous attempts are other students' answers rather than real resubmissions.
- The prompt is one commercial grader's design, Lazuli's, with one template and one position for added context; other wordings, positions and implied descriptions were not tested.
- Models were reached through APIs whose served versions move, Gemini 3.1 Pro and GPT-5.5 were not run as graders, and Fable 5.1 ran as an agent on 100 answers with unrecorded sampling and no control arm.
- The study measures the mark, not the feedback a student reads, and claims nothing about learning outcomes; the loop result simulates four of the six models rather than a course.
- De-identified public work was processed by hosted models under the depositors' CC BY 4.0 licenses, not under consent the author obtained, no review board reviewed it, and two providers retain inputs for 55 and 30 days.

## Citation

Porcaro, D. S. (2026). [Learner context changes an LLM grader's marks on identical work: a within-item ablation on six models](https://reports.learningdesignalliance.org/ai-grader-reliability-2026/1.0.1/report/index.html). *Learning Design Alliance, ai-grader-reliability-2026, version 1.0.1*. Version 1.0.1 supersedes v1.0.0 (doi 10.5281/zenodo.23480844), and this revision carries no version DOI of its own.
