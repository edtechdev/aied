---
title: "AI-enabled practice feedback and self-regulated learning among Chinese applied piano undergraduates: a three-wave cross-lagged study"
created: "2026-11-25T09:17:00-05:00"
updated: "2026-11-25T09:17:00-05:00"
published: "2026-11-23"
type: article
authors: ["Lan Mao"]
venue: "Frontiers in Psychology, 17"
evidence_context: educational
foundations: [cognitive-offloading, ai-education]
pedagogy: [self-regulated-learning, metacognition]
technology: [learning-analytics, ai-technologies]
assessment: [formative-assessment, feedback, self-assessment]
methods: [longitudinal-research, quantitative-research]
discipline: [music education]
level: [higher ed, undergraduate]
audience: [instructors, educational technology developers, researchers]
page_kind: [evaluation]
research_method: [longitudinal study, survey]
sources: ["raw/papers/mao-ai-practice-feedback-piano-self-regulated-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Mao (2026) follows 385 applied piano [[higher-ed|undergraduates]] across a semester to ask whether [[feedback|AI practice feedback]] strengthens [[self-regulated-learning]] or quietly moves the monitoring from the learner to the software. The design is unusually well suited to the question: three waves eight weeks apart, a decomposition that separates stable differences between students from change within a student, and an external criterion — the end-of-semester performance examination — so the claim does not rest on self-report alone. Both routes exist and they run in opposite directions. Feedback use predicted later self-regulated learning, and self-regulated learning predicted later feedback use, in a reciprocal pattern that appeared between students but not within them. At the same time, feedback use predicted [[cognitive-offloading|metacognitive offloading]], which predicted lower self-regulation, producing a small negative indirect path that competes with the positive direct one. Achievement tracked the net: self-regulation predicted exam scores while feedback use alone did not.

## Key Findings
- **Feedback use and self-regulation reinforced each other between students.** Each predicted the other across eight-week intervals, with similar standardized coefficients in both directions.
- **The same feedback use also predicted offloading.** The path from feedback use to [[metacognition|metacognitive]] offloading was positive and comparable in size to the self-regulation path.
- **Offloading predicted lower subsequent self-regulation.** That negative path produced a small but reliable negative indirect effect of feedback use on self-regulation.
- **Most of the action was between students, not within them.** The within-person path from feedback use to self-regulation was essentially zero, while the between-person path was clear.
- **Self-regulation predicted examination performance; feedback use did not.** The standardized association with the end-of-semester exam was positive for self-regulation and negative for offloading, with no direct path from feedback use.
- **The pattern was concentrated in later-year students.** The feedback-to-self-regulation path was significant for third- and fourth-year students and absent for first- and second-years, and the difference between the two groups was statistically reliable.

## The design that makes the claim possible

Students at three Sichuan institutions were assessed in week 2, week 10 and week 18, with 452 completing the first wave and 385 completing all three, an 85.2% retention. Weekly practice logs recorded session times and whether a digital practice tool was used, which let the authors check self-reported feedback use against behavior: the mean was 12.37 weeks of logs submitted and 83.0% of students submitted ten weeks or more. The prior semester's examination score served as a prior-achievement control, and attrition analysis found no differences between retained and lost students on any wave-one variable.

The three measures are purpose-built or adapted: six items on AI-enabled practice feedback covering score-following, audio-analysis and general-purpose assistants; twelve items on planning, monitoring and evaluating in practice, adapted from the self-regulated practice behavior inventory; and six items on [[cognitive-offloading|metacognitive offloading]], such as waiting for the application to flag a wrong note rather than noticing it while playing. Internal consistency was high at every wave for all three.

## Two pathways that compete

The cross-lagged estimates describe a genuine trade-off rather than a uniform benefit. Feedback use predicted later self-regulation at β = 0.137 and 0.139 across the two intervals, and self-regulation predicted later feedback use at 0.136 and 0.132. Feedback use also predicted offloading at 0.219 and 0.216, and offloading predicted lower self-regulation at −0.138 and −0.135. Multiplying the last two gives the negative indirect effect of −0.029, with a confidence interval that excludes zero.

The within-between decomposition is what keeps the result honest. Between students, feedback use and self-regulation were associated at 0.131; within a student over time, the same path was 0.005 and non-significant. So the reciprocal pattern describes students who use these tools more and regulate more, not a student whose self-regulation rises after a term of tool use. The one within-person path that did reach significance ran from self-regulation to later feedback use (0.141), which suggests that better self-regulators adopt the tool rather than the tool producing better regulators.

## Why the examination criterion matters

The performance examination is the study's strongest evidence because it is independent of the [[self-report-measures|questionnaires]]. Self-regulation predicted exam scores at β = 0.311 and offloading predicted lower scores at −0.116, while feedback use had no direct association (0.040). That pattern is consistent with the within-person nulls: what shows up in achievement is the learner's regulation, not the quantity of [[ai-feedback-quality|automated feedback]] they consumed.

The year-of-study difference points the same way. For first- and second-year students the feedback-to-self-regulation path was 0.058 and non-significant; for third- and fourth-years it was 0.345. One reading is that advanced students have enough internal standard to use an automated error report as an input to their own monitoring; a less experienced player may simply follow the flag. The study cannot distinguish that from a cohort difference, but it locates the group where the tool helps.

## What this means for practice

- **Instructors.** Ask what the learner does with the automated report. If practice stops when the app stops flagging, the tool is doing the monitoring the student needs to learn to do.
- **Music teachers and studio instructors.** Introduce practice-feedback tools after students have an internal standard to compare against. The first-year null suggests the tool arrives too early for learners still building one.
- **Educational technology developers.** Design the report to prompt a decision, not to replace one. A flag that says "listen again" and a flag that says "wrong" produce different monitoring behavior in the student.
- **Researchers.** Separate within-person from between-person variance in any [[longitudinal-research|longitudinal study]] of AI feedback. The pooled cross-lagged estimate here would have overstated what happens to an individual learner.

## Limitations

- All three constructs are self-reported at each wave; the achievement examination anchors the outcome, but feedback use, self-regulation and offloading remain questionnaire measures.
- One semester and three waves, spaced eight weeks apart, with no follow-up beyond week 18, so longer-term effects and the stability of the pattern are unknown.
- The sample is drawn from applied piano programs at three institutions in Sichuan, China, which limits generalization to other instruments, levels and systems.
- The year-of-study comparison is cross-sectional between cohorts, so it cannot separate developmental readiness from differences between the two groups of students.
- The cross-lagged panel model estimates prospective associations between adjacent waves, not experimental effects of feedback use on self-regulation.

## Citation

Mao, L. (2026). [AI-enabled practice feedback and self-regulated learning among Chinese applied piano undergraduates: a three-wave cross-lagged study](https://doi.org/10.3389/fpsyg.2026.2044083). *Frontiers in Psychology, 17*.
