---
title: "AI-Enhanced Interview Success: Eye-Tracking and Cognitive Flexibility in College Students with ADHD"
created: "2026-11-12T18:00:00-05:00"
updated: "2026-11-12T18:00:00-05:00"
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
verified: [citation, numbers]
---

> **Synthesis:** Wilder and Stratchan ran 46 college students with ADHD through a structured interview [[simulation|simulation]] on the Big Interview platform while a Tobii eye tracker recorded where they looked, then tested whether NIH cognitive measures predicted its performance tier. Bronze-tier participants spent significantly more of the receptive language phase fixated on content than higher tiers (mean difference -0.02876, t(45) = -2.046, p = 0.047), while fixation on the interviewer and interviewee did not separate the groups. In a binary logistic regression collapsing Gold and Silver against Bronze, NIH Dimensional Card Sorting was the only significant predictor (β = -0.065, SE = 0.024, p = 0.006, Exp(B) = 0.937, 95% CI [0.895, 0.982]); inhibition, list sorting, and self-reported [[self-regulated-learning|self-regulated learning]] were not.

## Key Findings

1. **The sample was 46 students at a single university.** Forty-six students with diagnosed ADHD were recruited through special education, student disability, and career services channels at a major southeastern U.S. university; 75.5% were registered with student accessibility services, and the mean age was 21.49.
2. **Content fixation separated the tiers.** The Bronze group spent more time on the content area of interest during the receptive language phase (M difference = -0.02876, SD = 0.01406, t(45) = -2.046, p = 0.047), which the authors describe as comprehending the question instead of engaging the interviewer.
3. **Gaze at the people did not separate the tiers.** Neither interviewer fixation (M difference = -0.3183, t(45) = 0.617, p = 0.540) nor interviewee fixation (M difference = -0.4445, t(45) = -1.274, p = 0.209) differed significantly, and the authors call the engagement difference a trend.
4. **Cognitive flexibility was the one significant predictor.** In the logistic model, NIH Dimensional Card Sorting carried β = -0.065, SE = 0.024, Wald = 7.487, p = 0.006, Exp(B) = 0.937, 95% CI [0.895, 0.982], which the authors interpret as lower task-switching scores accompanying poorer interview performance.
5. **Inhibition did not predict tier.** The NIH Flanker test was null in the same model (β = 0.012, SE = 0.033, Wald = 0.139, p = 0.710, Exp(B) = 1.012, 95% CI [0.949, 1.080]).
6. **Self-reported self-regulation did not predict tier either.** The MSLQ Metacognition Self-Regulation subscale was null (β = -0.385, SE = 0.380, Wald = 1.024, p = 0.312, Exp(B) = 0.681, 95% CI [0.323, 1.434]), as was NIH List Sorting (β = -0.050, SE = 0.032, Wald = 2.495, p = 0.114, Exp(B) = 0.951, 95% CI [0.893, 1.012]).
7. **The model rests on a collapsed, small sample.** Gold and Silver were merged into one high-performing group to preserve power at N = 46, the constant was 10.843 (SE = 4.953, Wald = 4.793, p = 0.029), and the effect sizes the methods promise appear in neither results table.

## How the simulation was built

Participants completed screening, consent, ADHD verification, and cognitive assessments, then eye-tracking calibration in iMotions 10.1.1 before entering a "dream job" interview simulation on Big Interview. The platform scores content quality, formulation, and delivery and sorts candidates into Gold, Silver, and Bronze tiers, from well-articulated to needing significant development. Three data streams were joined: the platform tier, gaze from a Tobii Pro Fusion tracker sampling at 60 to 1200 Hz, and standardized cognitive scores.

The battery mixed performance and self-report. The NIH Flanker Inhibition and Sustained Attention Test measured executive function and attention control, with scores ranging from 85 to 115. The MSLQ Metacognition Self-Regulation subscale measured strategy use through 12 items on a 7-point Likert scale; NIH Dimensional Card Sorting supplied the task-switching measure, and NIH List Sorting supplied working memory. Analyses ran in SPSS version 29 after checks for normality, independence, and multicollinearity, using t-tests for fixation and binary logistic regression for prediction, with Gold and Silver collapsed because the cells were too small for three outcomes.

Recruitment ran through [[special-education]] departments, student disability services, and career services at one institution, so the design reads as a campus [[higher-ed|higher education]] study rather than a hiring study. The authors frame it as [[career-development-and-readiness|career readiness]] and treat [[neurodiversity]] as a design constraint rather than a deficit.

## What the eye tracker added, and what it did not

The fixation result is narrower than the abstract implies. Only the receptive, listening phase was analyzed; the expressive phase, when the candidate speaks, was not. Within that window the content area produced the one significant contrast, with the lower tier looking at content more. That is consistent with a comprehension bottleneck: a candidate still working out what was asked has less attention for the person asking. It is equally consistent with reading a transcript or taking longer to decode the prompt, and the design cannot distinguish these.

The nulls carry as much weight. If interviewer gaze marked engaged interviewing, the tiers should have separated there, and they did not. The authors argue that the conventional coaching emphasis on eye contact is misplaced online and that body language, posture, and vocal delivery deserve the attention instead. That is a reasonable reading of a null, but a non-significant t-test at N = 46 is weak evidence that two groups are the same.

The table withholds what a reader would want. It reports mean differences, standard deviations, t, df, and two-sided p, but no group means, so each tier's percentage of fixation time cannot be recovered. All three tests carry df = 45, the value for a two-group comparison across 46 cases, yet the question is posed about three tiers; which pair was compared is not stated. Read as [[sensor-and-gaze-analytics|gaze analytics]], the study shows the measure is feasible and one contrast survived; it does not show a stable attentional signature of tier.

## Reading the regression: task-switching over inhibition and self-report

The regression is the stronger claim. Four predictors entered, and only card sorting cleared conventional significance, with a confidence interval that excludes one (0.895 to 0.982). The coefficient is small, β = -0.065, and the odds ratio of 0.937 is close to unity, but the interval is tight enough to rule out no association. Crucially, the significant measure is performance-based and timed, while the two that failed, Flanker inhibition and the MSLQ self-report, are the usual proxies for interview readiness in advising.

That gap is the practical finding, and it is also an [[assessment-validity]] problem. The outcome is a proprietary three-tier label from a commercial practice platform, not a hiring decision or a supervisor rating. The paper never reports the coding of the outcome variable, so the sign of the coefficients must be read through the authors' narrative: they state that lower card-sorting scores went with poorer performance, and the reported Exp(B) below one fits that only under a particular reference category.

Two cautions belong here. The constant, 10.843 with Exp(B) = 51,171.956, signals a model stretching to fit a small, unbalanced outcome, and the MSLQ interval, 0.323 to 1.434, is wide enough to contain sizable effects in either direction. That null is not evidence that self-regulation is irrelevant; it is evidence that this sample could not tell.

## What this means for practice

- **Interview coaches:** Coach attention balance rather than eye contact. The tier difference sat in time spent on content, and the gaze-at-interviewer contrast was null, so practice should rehearse switching between comprehending a question and responding to the person who asked it.
- **Disability services and special educators:** Add task-switching practice to interview preparation and do not rely on students' self-assessments of readiness. The performance-based card-sorting measure predicted tier; the self-report measure did not.
- **Platform designers:** Publish what the tiers mean and what they are computed from, and treat gaze as [[assistive-technology|assistive feedback]] the candidate can use rather than a scoring channel. A candidate who looks at content longer may be compensating, not disengaging.
- **Employers and institutions:** Audit AI screening interviews for differential impact before adopting them, and offer processing time or question previews as accommodations, consistent with [[equity-in-ai-education|equitable access]].
- **Researchers:** Report group means, state the outcome coding, and publish the promised effect sizes. Without them, a reader cannot reconstruct the fixation difference or verify the regression's direction.

## Limitations

- The sample is 46 students at one southeastern U.S. university; the authors concede the small size raised Type II error risk and that findings are preliminary.
- Participants with comorbid diagnoses were not excluded, and diagnosis was established partly by self-disclosure, which the authors acknowledge may have introduced self-reporting bias.
- Volunteer bias is unaddressed beyond acknowledgment: students who dislike online interviewing are the ones most likely to have declined.
- The design is observational. Nothing was manipulated, so the study cannot show that training cognitive flexibility would improve interview performance, only that the two co-vary here.
- Reporting gaps limit what can be checked: no group means in the fixation table, no effect sizes despite the methods statement, no stated coding for the regression outcome, and t-tests at df = 45 for a three-tier question.
- Only the receptive language phase was analyzed, the expressive phase is left to future research, and the outcome is a commercial platform's tier rather than an independent rating of interview quality.

## Citation

Wilder, T. L., & Stratchan, N. E. (2025). [*Artificial Intelligence-Enhanced Interview Success: Leveraging Eye-Tracking and Cognitive Measures to Support Self-Regulation in College Students with Attention-Deficit/Hyperactivity Disorder*](https://doi.org/10.3390/educsci15020165). Education Sciences, 15(2), 165.
