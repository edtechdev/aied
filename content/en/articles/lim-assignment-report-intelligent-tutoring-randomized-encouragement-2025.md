---
title: "Evaluating the Effects of Assignment Report Usage on Student Outcomes in an Intelligent Tutoring System: A Randomized-Encouragement Design"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/lim-assignment-report-intelligent-tutoring-randomized-encouragement-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
audience: [instructors, researchers, learning analytics designers]
level: [k 12]
discipline: [math education, learning sciences]
technology: [intelligent-tutoring, learning-analytics, edtech-platform]
methods: [rct, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Lim, Heffernan and Sales report a randomized-encouragement design on ASSISTments, an online mathematics platform, in which teachers new to the system were randomly assigned to receive a prompt urging them to open the [[learning-analytics|assignment report]] after creating an assignment. Viewing the first-assignment report did not significantly change the proportion of students starting the next assignment or their value-added scores, but it raised the proportion who completed it, an effect confirmed by an Anderson-Rubin test that is robust to the study's weak instrument. The causal effect sat with the teachers the encouragement could actually move, those with smaller classes.

## Key Findings

1. **The prompt moved report viewing.** Among 330 teachers in the main analytic sample, 75.3% of the encouragement group viewed the first-assignment report versus 62.8% of controls, a gain of 12.5 percentage points (p = 0.0141). The first-stage F-statistic was 6.09, below the F > 10 rule of thumb, so the instrument was weak.
2. **Viewing the report raised next-assignment completion.** The Anderson-Rubin test on the proportion of students completing the second assignment was significant (F = 4.092, p = 0.044; 95% CI [0.022, 2.680]), ruling out a null effect and supporting an increase of at least 2 percentage points. The Fuller(1) point estimate of 0.577 suggested a far larger gain, which the authors read as likely inflated by the weak instrument.
3. **Starting and value-added outcomes did not move.** The Anderson-Rubin tests were not significant for the proportion starting the second assignment (F = 2.442, p = 0.119) or for value-added scores (F = 0.116, p = 0.733), and the student-level analyses of starting and completing were likewise null.
4. **Large classes had no room to be encouraged.** Teachers with more than 43 students viewed the first-assignment report at similar high rates whether encouraged or not (77% versus 75%), so the design could not identify an effect there; among teachers with fewer than 44 students, the Anderson-Rubin test on completion gave F = 7.475, p = 0.007, with a lower bound of 0.245 (at least a 24.5 percentage point increase), and students were approximately 60 percentage points more likely to complete (AR F = 44.517, p < 0.001).

## A randomized-encouragement design around a teacher prompt

A traditional RCT would assign teachers either to use the assignment report or not, but teachers keep full autonomy on ASSISTments and no one can force them to look. The study instead randomized the encouragement: using the Userflow A/B testing feature, teachers new to the platform were assigned with equal probability to a control group that saw business as usual or to an encouragement group that received a popup at the end of the assignment-creation sequence urging them to review the report. The encouragement itself was visible only to teachers and carried no instructional content, which the authors argue satisfies the exclusion restriction: any effect on students runs through report viewing.

Because not all teachers comply, the analysis is an instrumental-variable design: random assignment to encouragement is the instrument for whether a teacher viewed the first-assignment report, and two-stage least squares estimates the local average treatment effect among compliers, the teachers who could be successfully encouraged. Because the instrument proved weak, the authors lean on the Anderson-Rubin test, which keeps valid inference under weak identification without yielding a point estimate, and on the Fuller(1) minimum-bias estimator for magnitude, interpreted with caution.

The experiment ran from late August 2024 to early December 2024. Of the 2,808 teachers who logged in (1,368 control and 1,440 encouragement), 589 were new to ASSISTments and had created at least one assignment before 10 November 2024 (276 control and 313 encouragement). The main analytic sample kept 330 teachers (156 control and 174 encouragement) who created at least two non-orientation assignments; a second sample of 281 teachers (131 control and 150 encouragement) served the value-added analysis, which required non-open-response problem sets. Baseline covariates were balanced, with all absolute Cox/Hedges' g values below 0.25, and attrition fell within the What Works Clearinghouse cautious boundary for differential attrition.

## Report viewing was common but far from universal

Over the year from 1 July 2023 to 30 June 2024, 2,351 teachers assigned 121,890 assignments, yet only 65,877 (54.0%) of those assignments had their reports viewed by the assigning teacher. For assignments whose reports were viewed, the average proportions of students starting and completing were 74.6% and 62.7% respectively, against 43.0% and 31.1% when the report was not viewed. Teachers with higher proportions of viewed reports also showed higher average starting and completion rates, but the authors are explicit that these associations cannot establish causality: teacher quality and dedication may drive both report use and participation, which is exactly the endogeneity the randomized design targets.

## What viewing the report changed

The headline causal result is completion. Viewing the first-assignment report had a statistically significant positive effect on the proportion of students completing the second assignment among teachers who were successfully encouraged, according to the Anderson-Rubin test (F = 4.092, p = 0.044; 95% CI [0.022, 2.680]). The interval is wide, with an upper bound beyond the logical maximum because the analysis uses a linear probability model, but it rules out a null effect and supports a positive impact of at least 2 percentage points. The 2SLS and Fuller(1) estimates (0.635, p = 0.065, and 0.577, p = 0.044) suggest the true proportion is much higher, close to 60% of students completing, but the authors regard these as unrealistically high and likely an artifact of the weak instrument.

The probability that an individual student completed the second assignment was positive but not significant (Anderson-Rubin F = 0.125, p = 0.723), a pattern the authors tie to treatment heterogeneity by class size. Starting rates showed the opposite asymmetry: report viewing had positive but not significant effects on both the proportion of students starting the second assignment (F = 2.442, p = 0.119) and the probability of a student starting (F = 0.784, p = 0.376), possibly masked by coexisting practices such as teachers initiating assignments during class time. Value-added scores were essentially flat (F = 0.116, p = 0.733; estimates of 0.027 and 0.028), which the authors find unsurprising given that large performance gains between two assignments are unrealistic.

## Smaller classes carried the effect

Splitting teachers into thirds by student count — fewer than 22 students (113 teachers), 22 to 43 (107 teachers), and more than 43 (110 teachers) — the paper found that the top third viewed the first-assignment report at high rates regardless of condition (75% control, 77% encouragement), leaving too little variation in the instrument to support estimation. Among the bottom two-thirds (teachers with fewer than 44 students), the first-stage F-statistic was 6.98, still below the weak-instrument threshold, but the effect on completion was stronger and clearly significant: the Anderson-Rubin test on the proportion completing gave F = 7.475, p = 0.007, with a 95% confidence interval of [0.245, 2.962], an effect of at least 24.5 percentage points, and the student-level analysis showed students approximately 60 percentage points more likely to complete (F = 44.517, p < 0.001; CI [0.443, 0.856]). Teachers with large classes already rely on reports — they are likely always-takers — so averaging over them attenuated the overall estimate.

## What this means for practice

- **Platform designers.** Light-touch prompts can move report use among teachers new to a tutoring system (12.5 percentage points in the first stage) but are wasted on teachers with large classes who already view reports at rates of 75% or higher; routing encouragement toward users with the most room to change behavior is the design lesson.
- **Teachers.** Reviewing the assignment report after the first assignment is a concrete monitoring lever for completion: at least 2 percentage points more students completed the next assignment overall, and at least 24.5 percentage points more in classes with fewer than 44 students.
- **Researchers.** In randomized-encouragement and instrumental-variable designs with weak instruments, Anderson-Rubin tests should be reported alongside 2SLS, because point estimates such as the 0.577 and 0.635 completion effects can be inflated and would mislead without the AR confidence interval as anchor.
- **Evaluation practice.** Teacher-facing [[learning-analytics]] features can be tested causally at scale on a platform, and the nulls are informative: report viewing moved completion but not starting or value-added, so evaluation should measure participation and performance separately rather than expecting a single dashboard to move every outcome.

## Limitations

- The findings are specific to ASSISTments and may not generalize to other intelligent tutoring systems with different report interfaces or user populations.
- The study covers only the effect of viewing the first-assignment report on the next assignment; sustained report use is unlikely to reproduce the same gains, though it may help maintain outcomes.
- The design identifies effects only for compliers; the authors cannot estimate the effect among always-takers who already use reports or never-takers who will not, and teachers with large classes are probably overrepresented among always-takers.
- The instrument was weak (first-stage F = 6.09 overall, 6.98 in the smaller-class subsample), so while the Anderson-Rubin inference on completion is valid, the magnitude and precision of the point estimates should be read with caution.
- Attrition into the analytic samples is assumed unbiased (within the What Works Clearinghouse cautious boundary) rather than demonstrated, and after excluding the large-class third the remaining subgroups are smaller.

## Citation

Lim, W. C., Heffernan, N. T., & Sales, A. (2025). Evaluating the Effects of Assignment Report Usage on Student Outcomes in an Intelligent Tutoring System: A Randomized-Encouragement Design. *Journal of Educational Data Mining*, 17(1), 248-275.
