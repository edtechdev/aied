---
title: "AI-Enhanced Interview Success: Eye-Tracking and Cognitive Flexibility in College Students with ADHD"
created: "2026-11-12T18:00:00-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
sources: ['raw/papers/wilder-adhd-ai-interview-eye-tracking-2025.md']
source_url: "https://doi.org/10.3390/educsci15020165"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [user study]
page_kind: [evaluation]
level: [higher ed, undergraduate]
audience: [researchers, instructors, educational technology developers, institutions]
discipline: [learning sciences]
foundations: [theories-and-frameworks]
pedagogy: [self-regulated-learning, career-development-and-readiness]
assessment: [assessment-validity]
technology: [sensor-and-gaze-analytics, simulation]
ethics: [assistive-technology, neurodiversity, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Wilder and Stratchan put 46 college students with ADHD through a structured interview [[simulation|simulation]] on the Big Interview platform while an eye tracker recorded where they looked, then asked whether cognitive measures predicted the platform's performance tier. Students in the lowest tier spent more of the listening phase looking at the question content; gaze at the interviewer or at themselves did not separate the tiers at all. Of the cognitive and self-report measures, only task-switching predicted tier, with slower switchers more likely to land in the bottom group. The authors read that as a comprehension bottleneck rather than a motivation problem, and it points to practicing the switch between working out a question and answering the person who asked it.

## Key Findings

1. **Interview tier tracked task-switching, not inhibition.** Only the card-sorting measure predicted which tier a student landed in. The Flanker inhibition test and the working-memory measure did not, which matters because inhibition is the executive skill advising usually worries about.
2. **Self-reported self-regulation did not predict performance.** Students' own ratings of [[self-regulated-learning|self-regulated learning]] were unrelated to tier. A student who says they prepare carefully is not therefore a student who interviews well.
3. **Lower-tier students looked at the question more than at the person.** During the listening phase, Bronze-tier students spent more of their gaze time on the content area, which the authors interpret as still working out what was asked instead of engaging with the interviewer.
4. **Eye contact did not distinguish the tiers.** Gaze at the interviewer and gaze at the interviewee were both statistically indistinguishable across tiers, which undercuts the standard coaching advice to hold eye contact.
5. **The sample is small, single-site and specific.** 46 students with diagnosed ADHD at one southeastern U.S. university, most of them registered with accessibility services and with a mean age of 21.49. It is a feasibility study of a measurement approach, not a source of norms.
6. **The tiers belong to a commercial platform.** Gold, Silver and Bronze are Big Interview's own labels, the paper never reports how that outcome was coded, and the analysis collapsed three tiers into two because the cells were too small.
7. **Reporting gaps limit what can be checked.** The fixation table prints no group means, the effect sizes the methods promise appear in neither results table, and the comparison is run on the whole sample when the question is about three tiers.

## How the simulation was built

Participants completed screening, consent, ADHD verification, and cognitive assessments, then eye-tracking calibration in iMotions before entering a "dream job" interview simulation on Big Interview. The platform scores content quality, formulation, and delivery and sorts candidates into Gold, Silver, and Bronze tiers, from well-articulated to needing significant development. Three data streams were joined: the platform tier, gaze from a Tobii Pro Fusion tracker, and standardized cognitive scores.

The battery mixed performance and self-report. The NIH Flanker Inhibition and Sustained Attention Test measured [[executive-function|executive function]] and attention control. The MSLQ Metacognition Self-Regulation subscale measured strategy use through 12 items on a 7-point scale; NIH Dimensional Card Sorting supplied the task-switching measure, and NIH List Sorting supplied working memory. Analyses ran in SPSS after checks for normality, independence, and multicollinearity, using t-tests for fixation and binary logistic regression for prediction, with Gold and Silver collapsed because the cells were too small for three outcomes.

Recruitment ran through [[special-education|special education]] departments, student disability services, and career services at one institution, so the design reads as a campus [[higher-ed|higher education]] study rather than a hiring study. The authors frame it as [[career-development-and-readiness|career readiness]] and treat [[neurodiversity|neurodiversity]] as a design constraint rather than a deficit.

## What the eye tracker added, and what it did not

The fixation result is narrower than the abstract implies. Only the receptive, listening phase was analyzed; the expressive phase, when the candidate speaks, was not. Within that window the content area produced the one contrast that held, with the lower tier looking at content more. That is consistent with a comprehension bottleneck: a candidate still working out what was asked has less attention for the person asking. It is equally consistent with reading a transcript or taking longer to decode the prompt, and the design cannot distinguish these.

The nulls carry as much weight. If interviewer gaze marked engaged interviewing, the tiers should have separated there, and they did not. The authors argue that the conventional coaching emphasis on eye contact is misplaced online and that body language, posture, and vocal delivery deserve the attention instead. That is a reasonable reading of a null, but a non-significant comparison in 46 people is weak evidence that two groups are the same.

The table withholds what a reader would want. It reports mean differences, standard deviations, t, df, and two-sided p, but no group means, so each tier's percentage of fixation time cannot be recovered. Every test carries the degrees of freedom for a two-group comparison across the whole sample, yet the question is posed about three tiers; which pair was compared is not stated. Read as [[sensor-and-gaze-analytics|gaze analytics]], the study shows the measure is feasible and that one contrast survived; it does not show a stable attentional signature of tier.

## Reading the regression: task-switching over inhibition and self-report

The regression is the stronger claim. Four predictors entered, and only card sorting cleared conventional significance, with an interval that excludes one, running from 0.895 to 0.982 on the odds-ratio scale. The association is small — the odds ratio sits at 0.937, close to unity — but the interval is tight enough to rule out no association at all.

Crucially, the measure that worked is performance-based and timed, while the two that failed, Flanker inhibition and the MSLQ self-report, are the usual proxies for interview readiness in advising. That gap is the practical finding, and it is also an [[assessment-validity|assessment validity]] problem. The outcome is a proprietary three-tier label from a practice platform, not a hiring decision or a supervisor rating. Because the paper never reports the coding of the outcome variable, the sign of the coefficients has to be read through the authors' narrative: they state that lower card-sorting scores went with poorer performance, and the reported odds ratio below one fits that only under a particular reference category.

Two cautions belong here. The model's constant is very large, a sign of a fit stretched over a small, unbalanced outcome, and the interval around the self-regulation estimate is wide enough to contain sizable effects in either direction. That null is not evidence that self-regulation is irrelevant; it is evidence that this sample could not tell.

## What this means for practice

- **Instructors and interview coaches:** Coach attention balance rather than eye contact. The tier difference sat in time spent working out the question, and the gaze-at-interviewer contrast was null, so rehearsal should practice switching between comprehending a question and responding to the person who asked it.
- **Disability services and special educators:** Add task-switching practice to interview preparation and do not rely on students' self-assessments of readiness. The timed card-sorting measure predicted tier; the self-report measure did not.
- **Designers:** Publish what the tiers mean and what they are computed from, and treat gaze as [[assistive-technology|assistive feedback]] the candidate can use rather than a scoring channel. A candidate who looks at content longer may be compensating, not disengaging.
- **Administrators:** Audit AI screening interviews for differential impact before adopting them, and offer processing time or question previews as accommodations, consistent with [[equity-in-ai-education|equitable access]].
- **Researchers:** Report group means, state the outcome coding, and publish the promised effect sizes. Without them, a reader cannot reconstruct the fixation difference or verify the regression's direction.

## Limitations

- The sample is 46 students at one southeastern U.S. university; the authors concede the small size raised Type II error risk and that findings are preliminary.
- Participants with comorbid diagnoses were not excluded, and diagnosis was established partly by self-disclosure, which the authors acknowledge may have introduced self-reporting bias.
- Volunteer bias is unaddressed beyond acknowledgment: students who dislike online interviewing are the ones most likely to have declined.
- The design is observational. Nothing was manipulated, so the study cannot show that training cognitive flexibility would improve interview performance, only that the two co-vary here.
- Reporting gaps limit what can be checked: no group means in the fixation table, no effect sizes despite the methods statement, no stated coding for the regression outcome, and two-group tests used for a three-tier question.
- Only the receptive language phase was analyzed, the expressive phase is left to future research, and the outcome is a commercial platform's tier rather than an independent rating of interview quality.

## Citation

Wilder, T. L., & Stratchan, N. E. (2025). [*Artificial Intelligence-Enhanced Interview Success: Leveraging Eye-Tracking and Cognitive Measures to Support Self-Regulation in College Students with Attention-Deficit/Hyperactivity Disorder*](https://doi.org/10.3390/educsci15020165). Education Sciences, 15(2), 165.
