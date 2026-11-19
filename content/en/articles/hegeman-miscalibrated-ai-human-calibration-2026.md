---
title: "Miscalibrated AI improves human calibration: An alignment problem for AI-assisted Decision education"
created: "2026-11-19T09:30:00-05:00"
updated: "2026-11-19T09:30:00-05:00"
type: article
published: "2026"
confidence: medium
evidence_context: non_educational
sources: ['raw/papers/hegeman-miscalibrated-ai-human-calibration-2026.md']
source_url: "https://arxiv.org/abs/2611.23618"
source_depth: full text
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [metacognition, cognitive-psychology, transfer-of-learning]
technology: [machine-learning]
methods: [rct, quantitative-research]
ethics: [trust-calibration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
---

> **Synthesis:** Hegeman and colleagues (2026) ran a preregistered [[rct|randomized experiment]] with 300 novices who judged whether images of white blood cells were cancerous, testing whether watching an AI's probability output teaches the judgment skill of [[trust-calibration|calibration]] — expressing certainty that matches actual accuracy. One 94%-accurate model appeared in three forms: its original probabilities, which were conservative and poorly calibrated for its own accuracy; a recalibrated version, well calibrated and correspondingly certain; and bare categories. Tested afterwards without the AI, only the miscalibrated display improved participants' calibration, cutting reliability from .063 to .041 while the other two conditions held steady, and the gain was a reduction in over-extremity rather than better discrimination. The authors call this an alignment problem for AI-assisted decision education: the signal that best describes a model need not be the one that best supports a learner. It was a laboratory probability-judgment task with paid adults, not a classroom study, so it supports no claim about course learning or student outcomes.

## Key Findings

- **Only the display that was wrong for the model improved people.** Reliability (calibration error, lower is better) fell from .063 to .041 (95% HDI [.030, .053]) in the original condition.
- **The other two displays left calibration where they found it.** Categorical and recalibrated began near .06 and ended there, and did not credibly differ from each other (.005, [−.008, .018]).
- **Difference-in-differences confirmed the ordering.** The original condition improved .021 more than categorical ([−.034, −.008]) and .026 more than recalibrated ([−.039, −.013]) on the change in reliability.
- **The gain was less over-extremity, not better discrimination.** Extreme-bin responses fell from almost half to under 40% in the original arm, and resolution rose only .010, no more than elsewhere.
- **Accuracy rose about equally everywhere.** Classification accuracy climbed in all three conditions (+.026, +.038, +.030), so the calibration advantage cannot be credited to improved blast detection.
- **Certainty transferred as a level, not a map.** The exploratory Blackwell check found informativeness gains no larger in the two probability conditions than in the categorical baseline, which carried no uncertainty signal.

## What AI-assisted decision education means here

AI-assisted decision education, in the authors' usage, means using AI not to improve a particular decision but to teach the judgment skills deciding requires. This study tests its minimal form: exposure, with no instruction, no AI feedback, and no adaptation to the individual. Phase 1 gave 100 trials with ground truth; Phase 2 gave 100 trials with the AI's prediction shown after each judgment; Phase 3 gave 180 trials with no feedback and no AI, and the 120 first judgments of non-repeated stimuli carried the analysis. On every trial participants estimated the probability that a cell was a blast, with a \$4 bonus set by Brier score. The skill is [[metacognition|metacognitive]] as much as perceptual: calibration is the match between stated certainty and observed accuracy. No instructor, curriculum, or grade entered the design, and sessions averaged 56.5 minutes.

## Three displays of one model

All three conditions saw the same 94%-accurate [[machine-learning|convolutional network]], fine-tuned on human judgments and so expressing conservative certainty. Only the display changed. The original condition saw raw model probabilities, reliability .036, badly calibrated for a model almost always right. The recalibrated condition saw a monotonic correction of the same output, reliability .005, with over 80% of outputs at or below 10% or at or above 90%. The categorical condition saw blast or non-blast labels, no probability at all. By the test phase only the original arm had moved: reliability fell .020, to .041, beating categorical by .021 and recalibrated by .026 on the change. Accuracy rose about three points everywhere, and resolution showed no credible between-condition difference, so the calibration advantage was not a detection one.

## Why the miscalibrated display taught best

Novices arrived over-extreme. The linear-in-log-odds slope began between .275 and .291 in the three conditions, far below the 1 that marks no extremity bias, and almost half of responses were 10% or less, or 90% or more. A well-calibrated display for a 94%-accurate model is necessarily near-certain — at the limit, exactly 0 and 100 — so the recalibrated arm showed almost nothing but confident predictions, close to the outcome feedback that has failed to improve calibration. For learners already too sure, that models the error rather than the correction, while the conservative display demonstrated uncertainty near what their discrimination warranted. What it produced was a global rescaling, not a stimulus-level map: over-extremity shrank (slope .291 to .547) while Blackwell informativeness gained no more than in the categorical baseline.

## What a classroom claim would still need

This is adjacent research for teaching, not evidence about it. Its task is a two-alternative perceptual judgment on blood-cell images, its participants are online novices, and its AI is a manipulated stimulus rather than a deployed tutor; no course, instructor, or assessment regime appears in the design. A classroom claim would need a study run inside a course, with real stakes, measuring whether the shift survives a delay and whether it [[transfer-of-learning|transfers]] to another judgment domain where accuracy and base rates differ. It would need models beyond one CNN at one accuracy level, including [[llm|large language models]] stating verbal confidence, and displays adapted to a learner's current extremity rather than held fixed. It would also need to show that a tempered display is not misread as the model's belief — the [[governance|governance]] question the authors flag.

## What this means for practice

- **Instructors.** Treat tempered confidence as a hypothesis to test in your own course: a display that understates a strong model's certainty may reduce overconfidence more than the model's own calibrated output.
- **Instructors.** Score calibration, not only correctness. A class can improve accuracy while staying far too certain — the error this experiment moved.
- **Instructional designers.** If a tool tempers confidence for teaching, label the transformation and keep the model's calibrated probability available; the result does not license silent misreporting.
- **Researchers.** Run the course-embedded, delayed, cross-domain test before any curriculum adopts tempered confidence, and check whether students generalize the level of certainty or merely copy it.

## Limitations

- The task was a laboratory probability-judgment exercise on 300 blood-cell images: one perceptual task, not a curriculum.
- Participants were U.S. residents recruited online and paid for a single session; none were trained experts.
- Learning was measured within one session averaging 56.5 minutes, with no delayed retention test and no transfer task.
- The AI predictions were the manipulated stimulus — one CNN at one accuracy level, displayed three ways — not a deployed tutor.
- Nothing involved a classroom, a course, an instructor, or a grade; the Blackwell comparison was exploratory and read graphically.

## Citation

Hegeman, P. C., Hasan, E., Lee, E., Caplin, A., & Trueblood, J. S. (2026). [*Miscalibrated AI improves human calibration: An alignment problem for AI-assisted decision education*](https://arxiv.org/abs/2611.23618). arXiv:2611.23618.
