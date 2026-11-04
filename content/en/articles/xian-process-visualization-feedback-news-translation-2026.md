---
title: "Process visualization feedback in news translation: a controlled intervention study of human-AI interaction using multimodal process data"
created: "2026-11-01T09:05:46-05:00"
updated: "2026-11-04T16:51:25-05:00"
type: article
sources: ['raw/papers/xian-process-visualization-feedback-news-translation-2026.md']
confidence: low
page_kind: [evaluation]
research_method: [quasi-experiment, thematic analysis]
discipline: [language learning]
level: [graduate]
audience: [instructors, researchers, curriculum designers]
technology: [visualization, learning-analytics, multimodal]
pedagogy: [metacognition, self-regulated-learning, self-directed-learning]
assessment: [feedback, process-oriented-assessment, formative-assessment]
foundations: [human-ai-collaboration, limitations-in-aied-research]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Translation courses usually return a mark on a finished text. This trial gave eleven graduate students a report of their own keystrokes, pauses and source switches, drawn from logs and screen recordings, plus a structured reflection session. Against eleven classmates who received ordinary written comments, the visualized group paused more, revised for meaning more often and searched differently, and its scores rose further. The gain is modest and the sample small; the mechanism, students seeing themselves work, is the interesting part.

## Key Findings

1. Twenty-four first-year MTI students in a selective news translation course at a 985 university in China were matched into pairs on pretest (T1) scores, 90.36 (SD 4.38) against 90.45 (SD 3.45), t(20) = 0.05, p = 0.957. One experimental log was corrupted, so that student and the matched control were dropped, leaving 22 analyzed, 11 per arm.
2. Pause time proportion rose from 25.0% (SD 12.0%) to 33.4% (SD 14.5%), a mean increase of 8.4 percentage points (p = 0.011, Cohen's d = 0.61); three of the eleven moved the other way.
3. The meaning-level revision ratio rose from 18.1% (SD 6.3%) to 28.4% (SD 8.9%), a mean increase of 10.31 percentage points [95% CI 4.92%, 15.7%], t(10) = 4.259, p = 0.002, d = 1.301, while total revisions did not change significantly (1,292.91 to 1,052.36, p = 0.248).
4. Search engine time rose from a median of 15.6% to 27.7% (V = 3, p_holm = 0.020) and knowledge-based searching from 7.2% to 28.8% (V = 1, p_holm = 0.010); time before the first consultation window opened fell from 12.1% to 1.7% (p = 0.041). Machine translation use fell from 28.5% to 5.1% without reaching significance (p = 0.338), and interactive AI use stayed at a median of 0% at both points.
5. Problem-triggered pauses shifted toward textual problems (22.2% to 50.0%, p = 0.038) and extralinguistic problems (8.8% to 24.5%, p = 0.015), away from problems about the translation brief or target reader (20.8% to 2.6%, p = 0.020).
6. A mixed-design ANOVA found a Group x Time interaction, F(1, 20) = 4.94, p = 0.038, partial eta squared 0.198, on top of a Time main effect, F(1, 20) = 20.24, p < 0.001, partial eta squared 0.503. The experimental group gained a mean 5.64 points against 1.91 for the control, improving significantly itself (p < 0.001) while the control group did not (p = 0.123).
7. Thematic analysis of 22 [[reflection|reflective journals]] and six interviews produced two themes: metacognitive awareness, 54 references, covering inefficient process patterns and competency gaps, and strategic regulation, 60 references, covering external source use, text-level restructuring and changes to [[student-ai-interaction|AI interaction]].
8. Reported change in AI interaction was the thinnest subtheme. A few students described more specific prompts, which the authors read as participant-specific adjustment.

## How the study was built

The setting was one selective news translation course inside a 16-week semester at a 985 university in China; the research component occupied 8 weeks and participation was voluntary. Groups were matched on T1 quality rather than randomized, which makes the design quasi-experimental: when one experimental log was corrupted, the authors removed that student and the matched control together, preserving the pairs at the cost of two cases.

Both tasks were authentic wire copy, each allotted 70 minutes. T1 was an Associated Press feature of 1,028 words from February 2023 on a balloon incident and a canceled diplomatic trip; T2 was a Washington Post feature of 1,287 words from March 2024 on green technology and trade. The authors checked comparability with four readability indices and lexical measures and piloted the tasks with five students outside the study. Students could use whatever they normally used, including online dictionaries, DeepL, Google Translate and [[generative-ai|ChatGPT]].

Instrumentation was Inputlog 8.0 at a 2-second pause threshold, recording action time, pause time, revisions and consultation events, with a screen recorder at 15 frames per second synchronized by timestamp. The pairing is what let the authors code a pause by problem type: the log said when a student stopped, the video said what was on screen. Each report had three parts: a temporal plot of characters and pauses against task time, a consultation figure with a [[network-analysis|transition network]] of switches between resources, and a revision trajectory separating surface-level from meaning-level edits with an intensity heatmap. Delivery was one 30-minute individual session in Week 2, then five weeks of self-monitored practice on ordinary assignments; the control group received written instructor comments on accuracy, clarity and editorial quality.

Two senior news editors with more than ten years of experience rated every translation on a single holistic 0-100 scale of editorial readiness, blind to group, time point and identity. They calibrated on five T1 scripts to an intraclass correlation of 0.86 and rated all 44 translations to 0.89 [95% CI 0.84, 0.93]; each score is the mean of two ratings. The [[qualitative-research|qualitative]] strand drew on journals of about 15,000 words and transcripts of about 30,000 words from six students chosen across high, mid and low gain strata, double-coded at a kappa of .86.

Three things stayed invisible: no [[sensor-and-gaze-analytics|eye-track]]ing, so attention was inferred from pauses and screen state; a 2-second threshold that merges planning with being stuck; and no control-group log at T2.

## A product score cannot show where the revision effort went

The raters produced one number per translation, folding factual accuracy, conformity to Chinese news discourse, editorial adaptation, acceptability and handling of sensitive content into a single judgment, with no dimension scores reported. The 5.64-point gain therefore says the texts looked more publishable to two experienced editors; it does not say which criterion moved. A gain in discourse organization and a gain in political mediation would look identical here, though the process measures point at the former.

The revision data argue for [[process-oriented-assessment]] more sharply than the score does. Total revisions did not change significantly, falling from 1,292.91 to 1,052.36, while the share that were meaning-level rose by 10.31 points. Students did not edit more; they edited differently, which is precisely what a finished text erases. Two translations with the same score can sit on opposite revision histories.

## Pause time can mean planning, and it can also mean being stuck

The temporal finding is the one to read cautiously. Pause proportion rose 8.4 points with a moderate effect size, and the authors interpret it through [[metacognition]]: students stopped producing and started evaluating. One participant said the report showed a half hour spent on an opening paragraph that had felt like minutes.

The same measure fits difficulty. T2 was the longer text with more stakeholder positions, and the group consulted sources far more often, which mechanically produces idle screen time. Three of eleven paused less at T2, and no think-aloud or eye-tracking adjudicates between reflection and struggle.

The technical finding is less ambiguous and less complete than the headline. Meaning-level revisions grew but stayed a minority of all revisions at both points, and the paper's explanation is a two-month window too short to automatize deep revision under deadline pressure. That reads as attention moving ahead of habit: a first move, not a finished one.

## The process claims are within-subject; the outcome claim is between-group

The paper is explicit about the split. The between-group comparison carries the causal claim about quality, because both arms were rated twice. The T2 process measures exist only for the experimental group, so every pause, revision and search finding describes change inside one group with no concurrent baseline. [[self-regulated-learning|Self-regulated learning]] accounts predict the observed sequence, awareness then regulation, and the journals trace it, but the design cannot rule out that a matched group receiving ordinary comments would have drifted the same way over eight weeks of the same course.

[[transfer-of-learning|Transfer]] is where the evidence thins most. There is no delayed post-test, so nothing shows whether students who restructured paragraphs in Week 8 still do so in a newsroom, and editing time was not measured, so the authors decline to estimate any reduction in editorial workload. Interactive AI use is the clearest negative result: median time spent prompting a model stayed at 0%, and only a handful of students described changing how they prompted. The [[feedback]] they received was a mirror, not a [[curriculum-design|curriculum]]. It made them better at finding and comparing sources, not at holding a dialogue with a model, which suggests [[human-ai-collaboration]] needs its own instruction rather than arriving as a by-product of [[visualization]].

## What this means for practice

- **Translation and language instructors.** Inputlog already produces per-student reports from logs collected in a scheduled lab session, and the intervention was one 30-minute conversation plus a one-page log asking for three observations, one diagnosis and one action point. The reflection is not decoration: the authors argue a visualization alone is information, and comparison against the task turns it into behavior.
- **Writing and translation program designers.** Budget half an hour per student per cycle, and decide in advance what you will do with the data, because a report nobody discusses is a log file with a chart on it. Pair it with explicit AI instruction, since these students did not start prompting better merely by seeing their own tool switches.
- **Researchers.** Log the control group at both time points. Leaving the comparison arm unlogged at post-test is the single choice that turns every process finding into a within-subject claim and keeps task repetition as a live rival explanation.

## Limitations

- Eleven participants per arm, matched rather than randomized, in one course at one institution; the authors call the sample sufficient for the observed effect sizes, not for generalization.
- Process data came from the control group at T1 only, so pause, revision and consultation findings cannot be separated from repetition, genre familiarity or maturation.
- Eight weeks establishes short-term change only; no delayed post-test tests durability.
- Both groups began near 90 out of 100, which the authors flag as a possible ceiling effect on quality.
- The two perceptual themes rest on [[self-report-measures|self-report]], with no check on whether reported strategies were used unobserved.
- Effect sizes appear for the paired tests, but there is no confidence interval for the 5.64-point gain, no dimension-level ratings, and no power analysis.

## Citation

Xian, X., Guo, X., & Guo, W. (2026). [Process visualization feedback in news translation: a controlled intervention study of human-AI interaction using multimodal process data](https://doi.org/10.3389/fpsyg.2026.1893830). *Frontiers in Psychology*, 17, 1893830.
