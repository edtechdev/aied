---
title: "Effects of an AI-VR enhanced flipped classroom on English achievement, metacognitive self-regulation, and learning motivation among EFL learners: the moderating role of technological literacy"
created: "2026-10-25T00:00:00-04:00"
updated: "2026-10-25T00:00:00-04:00"
type: article
authors: ["Shao, J.", "Tang, S.", "Ju, J."]
published: "2026"
venue: "Scientific Reports"
source_url: https://doi.org/10.1038/s41598-026-58444-8
foundations: [ai-education, learning-design, theories-and-frameworks, limitations-in-aied-research]
pedagogy: [active-learning, experiential-learning, metacognition, motivation, scaffolding, self-determination-theory, self-regulated-learning, situated-learning]
technology: [educational-nlp, multimodal, pedagogical-agent, prompt-engineering, simulation, virtual-and-augmented-reality, visualization]
assessment: [assessment-validity, educational-measurement, learning-gains, oral-assessment, self-report-measures]
methods: [design-based-research, quantitative-research]
ethics: [differential-effects-across-learner-groups, equity-in-ai-education, privacy]
research_method: [instrument development, quasi-experiment, system development]
discipline: [english education, language learning]
level: [k 12, primary education]
audience: [instructors, instructional designers, researchers]
page_kind: [evaluation]
sources: ['raw/papers/shao-ai-vr-flipped-classroom-efl-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
---

> **Synthesis:** Shao, Tang, and Ju (2026) built an integrated [[virtual-and-augmented-reality|desktop VR]] and [[pedagogical-agent|AI companion]] environment and tested it against a traditional video-based [[active-learning|flipped classroom]] with 60 fifth-grade Chinese EFL learners in two intact classes over four weeks. Grounded in [[self-determination-theory|Self-Determination Theory]] and [[self-regulated-learning|Self-Regulated Learning]] theory, the quasi-experiment found a robust large effect on English achievement (η2p = 0.252, Hedges' g = 0.96, 95% CI [0.43, 1.49]), alongside effects on metacognitive self-regulation and learning motivation that reached conventional significance but did not survive multiple-comparison adjustment. The central result is that technological literacy moderated all three outcomes, so the affective and metacognitive benefits concentrated among learners with above-average literacy while the achievement advantage was comparatively uniform.

## Key Findings

- **Achievement is the one robust main effect.** Controlling for pretest scores, ANCOVA on posttest achievement gave F(1, 57) = 19.192, p < 0.001, η2p = 0.252, ω2 = 0.233, and Hedges' g = 0.960 with a 95% CI of [0.432, 1.488]. Adjusted means were 67.714 (SE = 1.437) for the AI-VR group and 61.419 (SE = 1.437) for the control group on the 100-point test. This was the only main effect to survive Holm-Bonferroni adjustment, and the authors describe η2p = 0.252 as a large effect by Cohen's conventions.
- **Motivation and metacognition are reported as preliminary.** Posttest autonomous motivation (RAI) gave F(1, 57) = 4.44, p = 0.040, η2p = 0.072, g = 0.528, 95% CI [0.020, 1.037], with adjusted means of 1.33 against -1.06. Posttest metacognitive self-regulation gave F(1, 57) = 5.09, p = 0.028, η2p = 0.082, g = 0.456, 95% CI [-0.050, 0.962], with adjusted means of 3.371 against 3.134. Both confidence intervals touch or cross zero and neither survived adjustment, so the paper presents them as directional evidence pending replication.
- **Technological literacy moderated all three outcomes, robustly.** The Group by literacy interactions survived adjustment: motivation (b = 0.88, SE = 0.25, t = 3.48, p = 0.001, β = 0.313, ΔR2 = 0.093), metacognition (b = 0.51, SE = 0.17, t = 3.11, p = 0.003, β = 0.352, ΔR2 = 0.117), and achievement (b = 7.82, SE = 2.88, t = 2.72, p = 0.009, β = 0.169, ΔR2 = 0.027).
- **The pattern is conditional rather than universal.** At low literacy (-1 SD) the groups did not differ on motivation (b = -0.68, p = 0.636) or metacognition (b = -0.05, p = 0.709). At the mean, motivation favored the AI-VR group (b = 2.82, p = 0.004) while metacognition only approached significance (b = 0.19, p = 0.064). At high literacy (+1 SD) the advantage was largest (b = 7.20 and b = 0.61, both p < 0.001).
- **Achievement was the most evenly distributed benefit.** At the 16th percentile of literacy the group difference was only marginally significant (b = 3.13, p = 0.061), while at the 50th and 84th percentiles it was highly significant (b = 6.30 and b = 9.46, both p < 0.001). The authors read this as the achievement advantage being comparatively uniform across the literacy range, with magnitude amplified at the top.
- **Moderation boundaries are directional, not precise thresholds.** Johnson-Neyman point estimates were TL = -1.28 for motivation (bootstrap 95% CI [-3.271, 0.854]), TL = -0.12 for metacognition ([-0.567, 0.278]), and TL = -0.37 for achievement ([-0.806, -0.125]). Only the achievement interval excludes zero.

## Study Design

### Participants, setting, and assignment

60 fifth-grade students aged 10 to 11 (Mage = 10.5) came from two intact administrative classes at a public primary school in Hefei, Anhui Province, China, split 30 and 30. The paper describes the assignment inconsistently: it states the classes were randomly assigned using a computer-generated random sequence, and elsewhere that two parallel classes were selected and assigned by coin toss. The same instructor taught both conditions. Pretest differences were not significant on any outcome: RAI t(58) = -0.527, p = 0.600; metacognitive self-regulation t(58) = 0.870, p = 0.388; achievement t(58) = -1.361, p = 0.179. A G*Power 3.1 analysis set f = 0.40, α = 0.05, and power = 0.80, requiring 52 participants.

### The intervention

The study ran four weeks: pretest and baseline in week 1, a two-week intervention in weeks 2 to 3, and posttest in week 4. Both groups watched identical pre-class videos. The experimental group then used the AI-VR application for situational exploration and dialogue with the AI companion, while the control group completed equivalent paper-based worksheets. In class both followed the same standardized flow, and experimental students could re-enter the scenarios for language production and immediate feedback. The experimental group alone received a 20-minute familiarization session at the end of week 1, using content unrelated to the target unit.

### The technology

The system was built on the Wancai VR platform as desktop, non-immersive VR navigated by mouse and keyboard, chosen over head-mounted displays for cost, cybersickness, and supervision reasons. Three modules made up the architecture: a Language Content Module organizing content into task-oriented 3D scenarios such as classrooms, shops, and parks; an Interactive VR Scenario Module handling navigation, event triggering, and object interaction; and an AI Learning Companion Module embedding a virtual character backed by [[educational-nlp|NLP]] models constrained through [[prompt-engineering|prompt engineering]]. No underlying model was fine-tuned; the team used scripted dialogue configuration plus prompts, and iterated the build through [[design-based-research|Design-Based Research]] cycles in real classrooms.

### Instruments

Motivation came from a revised SRQ-A, 16 items across four subscales on a 5-point scale, with subscale α from 0.78 to 0.89, analyzed as a Relative Autonomy Index (RAI) = (2 x Intrinsic) + Identified - Introjected - (2 x External). Metacognitive self-regulation came from a revised MSLQ subscale, 12 items, 5-point, α = 0.832, with reverse-coded items rewritten positively for young readers. Achievement used a researcher-developed 25-item, 100-point test (20 written items for 80 points, 5 listening and speaking items for 20 points) with S-CVI/Ave = 1.00 on both parallel forms, written α = 0.836, inter-rater r = 0.87 on the oral section, and a pretest correlation of r = 0.598 with the prior-semester final examination. The new AI-VR Technological Literacy Scale had 8 items in two 4-item subscales (VR Operational Literacy, AI Interaction Literacy), α = 0.872 overall and 0.84 and 0.82 for the subscales.

### Analysis and fidelity

All analysis used IBM SPSS 26.0 with Hayes' PROCESS macro Model 1 for moderation, plus a Holm-Bonferroni step-down adjustment across six primary inferential tests. Twelve lessons were observed (six per condition, 40 minutes each) by the first author; all scripted steps were implemented and time allocation matched at 10, 20, and 10 minutes across the three phases.

## What this means for practice

- **Instructors.** Assess technological literacy before deploying an AI-VR environment. At -1 SD on the literacy scale this study detected no motivational or metacognitive benefit, so a class-wide rollout may hand the affective gains to students who were already ready. Treat the achievement result as the safer promise and the motivation and metacognition results as unproven at this sample size, rather than reporting all three as established effects.
- **Instructional designers.** Build tiered onboarding and adaptive scaffolding that adjusts interface complexity and prompt frequency by literacy, since the authors identify extraneous load from interface manipulation as the mechanism that suppresses benefits for lower-literacy learners.
- **Instructional designers.** Keep the desktop form factor. The paper chose non-immersive VR deliberately for cost, health, and supervision reasons in primary schools, and its spatial affordances were still enough to support the reported gains.
- **Researchers.** Use factorial designs that vary AI feedback and VR contextualization independently, run delayed posttests to separate novelty from durable learning, and validate the literacy scale with confirmatory factor analysis in a sample of at least 300 participants.
- **Researchers.** Do not treat the Johnson-Neyman thresholds as cut-points. Two of the three bootstrap intervals span zero at n = 60.

## Limitations

- Sixty students in two intact classes at one school, with convenience sampling, limits the generalizability of every effect estimate. The intervention bundled AI feedback and VR contextualization into one package, so the independent contribution of either technology is unknown.
- Class-level assignment, partial instructor blinding (the instructor knew which class used the system), and a single-observer fidelity check without inter-rater reliability or discourse-level coding leave expectancy and delivery confounds partly open.
- Novelty effects are unmeasured: the two-week window and the experimental-only 20-minute familiarization session may have inflated short-term gains.
- The achievement test's two parallel forms were judged equivalent by blueprint control, matching S-CVI values, and expert review, but no statistical equivalence test was run, and the A to B order was not counterbalanced.
- The literacy scale has four items per subscale, a provisional two-factor structure with no confirmatory factor analysis, and it was administered before system exposure, so it measures prospective self-efficacy rather than demonstrated proficiency.
- Omega-squared values were smaller than partial eta-squared, reflecting the upward bias of η2p in small samples, and the authors state that all inferential claims are preliminary pending replication.

## Citation

Shao, J., Tang, S., & Ju, J. (2026). [*Effects of an AI-VR enhanced flipped classroom on English achievement, metacognitive self-regulation, and learning motivation among EFL learners: the moderating role of technological literacy*](https://doi.org/10.1038/s41598-026-58444-8). *Scientific Reports, 16*, 58444.
