---
title: "Enhancing Teachers' AI Competency: A Professional Development Intervention Study Based on Intelligent-TPACK Framework"
created: "2026-10-07T13:20:00-04:00"
updated: "2026-10-08T15:10:00-04:00"
type: article
foundations: [tpack, teacher-ai-competency, educational-development]
pedagogy: [metacognition, self-efficacy]
technology: [ai-technologies, generative-ai]
assessment: [self-report-measures]
ethics: [ethics]
methods: [quantitative-research, mixed-methods-research]
research_method: [quasi-experiment, interviews]
discipline: [learning sciences]
level: [higher ed]
audience: [faculty developers, instructors, administrators, researchers]
page_kind: [evaluation]
sources: ['raw/papers/intelligent-tpack-pd-intervention-hongkong-2025.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-07"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Tan, Cheng and Ling (2025) ran a six-month professional development program built on the Intelligent-TPACK framework with 64 university teachers in Hong Kong, comparing them against 61 colleagues who received no systematic training. The program raised overall AI competency by roughly half a standard deviation (Cohen's d = −.521), and the gain was concentrated in technical and technological-pedagogical knowledge rather than in the integrated or ethical domains. Their second finding is the unusual one: some teachers in *both* groups scored lower after the program than before it, and follow-up interviews read those declines as [[metacognition|metacognitive]] recalibration — a shift from unconscious to conscious incompetence, in the pattern the Dunning–Kruger effect predicts — rather than as lost skill. Attendance predicted gains (β = .407) while self-perceived participation did not (β = .049), and the authors argue that a self-report instrument can record real growth as a falling score.

## Key Findings

1. **The program produced a moderate gain in self-reported AI competency.** Gain scores (post-test minus pre-test) were M = 1.74 (SD = 4.96) in the experimental group against M = −.21 (SD = 1.68) in the control group, t(123) = −2.911, p = .004, Cohen's d = −.521 (95% CI [−.88, −.16]), Hedges' g = −.52 — just over half a standard deviation.
2. **After adjusting for baseline, the effect held but was smaller.** ANCOVA with pre-test total as covariate found the experimental group higher on the post-test, F(1, 122) = 6.872, p = .010, partial η² = .053 — 5.3% of post-test variance — for an adjusted difference of .58 points on the total score.
3. **Baseline competency dominated the outcome.** Pre-test scores predicted post-test scores at F(1, 122) = 226.859, p < .001, partial η² = .650, and the full model explained R² = .651 (adjusted R² = .645) of the variance in post-test scores.
4. **The group trajectories diverged over time.** Mixed ANOVA found a significant Time × Group interaction, Pillai's Trace = .064, F(1, 123) = 8.48, p = .004, partial η² = .064: the experimental group moved from 19.44 (SD = 5.73) to 21.18 (SD = 5.97), while the control group went from 20.81 (SD = 6.24) to 20.60 (SD = 6.10). The main effect of Time was small but significant (F(1, 123) = 5.18, p = .025, partial η² = .040) and the between-subjects Group effect was not significant (F(1, 123) = .15, p = .700, partial η² = .001).
5. **Gains were largest in technical knowledge and smallest in integrated knowledge.** AITK rose from 3.92 (SD = 1.21) to 4.43 (SD = 1.18), a relative gain of 12.8% (t(63) = 3.856, p < .001, d = .48, ΔM = .50). AITPK followed (t(63) = 2.615, p = .011, d = .33, ΔM = .37) and AITPACK was significant but smallest (t(63) = 2.108, p = .039, d = .26, ΔM = .29). Ethical awareness stayed comparatively stagnant.
6. **Attendance predicted growth; the feeling of participating did not.** Adding attendance rate and self-perceived participation in a second regression step raised explanatory power (ΔR² = .165, ΔF(2, 58) = 6.194, p = .004, adjusted R² = .161). Attendance was a strong positive predictor (β = .407, p = .001, roughly .41 SD of gain per SD of attendance); self-perceived participation was not (β = .049, p = .692).
7. **Negative gain scores appeared in both groups.** Teachers in the experimental and control groups both contained cases scoring lower at post-test, and interviews attributed the pattern to metacognitive recalibration rather than decline — a mechanism the authors connect to the Dunning–Kruger effect.
8. **Background variables explained little.** Discipline, years of teaching experience and professional title had limited predictive power; professional title was at most marginally negative (β = −.253, p = .051), hinting that more senior teachers benefited slightly less.

## Why technical knowledge moved before pedagogy

The dimensional ordering cuts against the usual assumption that an intervention transfers evenly across a competency framework. Technical knowledge about what AI tools do responds quickly to workshop-based instruction, while the transfer of those affordances into subject teaching (AITPK, ΔM = .37) and their integration with content (AITPACK, ΔM = .29) lag behind. The authors' explanation is that technical knowledge is learned directly, whereas pedagogical transformation requires the affordance to be re-established across many teaching contexts, which takes longer than a single program. The pattern sits in tension with [[tpack|TPACK]] evidence from intact-course designs, where quasi-experimental gains have landed in the integrated domains instead — a difference the authors do not test, and one that [[self-report-measures]] cannot settle. Where both agree is the endpoint: ethical awareness moved least of all, so a program can raise technical fluency and leave [[ethics|ethical judgment]] where it started.

## Attendance is behavioral investment; self-perceived engagement is not

The regression result is the study's most immediately usable claim for [[educational-development|professional development]] design, and it is a claim about measurement as much as about motivation. Two teachers can report the same level of participation while differing in the sessions they actually attended, and only attendance tracked the competency gain. The authors read self-perceived participation as surface-level engagement and attendance as concrete behavioral investment, and they draw an institutional conclusion: attendance belongs in performance appraisal, and programs need a dual-track mechanism pairing requirements with incentives.

## Negative gains as calibration rather than decline

The most theoretically interesting result is the presence of lower post-test scores in both groups, which the conventional reading would file as attrition or measurement noise. Interview accounts pushed the authors toward a different interpretation. Two experimental-group teachers (E01, E02) described cognitive dissonance arising from hands-on work with tools that did not behave as expected — the experience of discovering exactly how much they did not know; control-group teachers (C03, C04) described recalibrating downward after comparing themselves with more expert peers. Both routes end in the same place: a pre-test score inflated by unconscious incompetence, replaced by a lower but more accurate [[self-assessment]] as competence becomes visible to the assessor.

If that reading holds, pre-test–post-test self-report designs systematically understate what an intervention achieved, because part of the gain arrives as a downward correction in the measuring instrument's own output. The authors' remedy is measurement design rather than rhetoric: competency scales should carry metacognitive anchors, including a secondary dimension capturing the respondent's *confidence in this judgment*, and programs should open with cognitive-mapping modules that surface blind spots before the first assessment.

## What the study measured, and how far the evidence reaches

The design is a quasi-experimental pre-test–post-test comparison, not a [[rct|randomized trial]]: 64 university teachers took the six-month program and 61 served as controls, with the control group receiving no systematic AI training organized by the research team while remaining free to learn about AI through news, public lectures or industry events. Baseline data were collected in November 2024 and post-test data in June 2025, placing the study squarely in the [[generative-ai|GenAI]] era. Competency was measured with Celik's (2023) Intelligent-TPACK scale across its five dimensions — AITK, AITPK, AITCK, AITPACK and ethics — on a seven-point Likert scale, with the program-reaction scale reaching Cronbach's α = 0.96.

The program itself was redesigned away from the previous seminar-only format toward blended delivery: online lectures paired with three face-to-face workshops, sequenced from simple tool use to pedagogically grounded integration, and followed by a requirement that teachers refine their instructional designs and implement them the next semester. Two assumption checks complicate the statistics in ways the paper reports rather than hides: Box's M indicated heterogeneous covariance matrices (M = 62.05, F(3, 2942853.32) = 20.32, p < .001) even though Mauchly's test confirmed sphericity (W = 1.00, p = 1.00), and Levene's test found the gain scores' variances unequal (F(1, 123) = 7.984, p = .006), with the experimental group's spread suggesting differential responsiveness to the program.

## What this means for practice

- **Faculty developers.** Expect a program to move technical knowledge first and integrated, content-specific practice later (AITK ΔM = .50 against AITPACK ΔM = .29), and plan a follow-on cycle rather than treating one six-month cohort as the end of the work.
- **Faculty developers.** Track attendance rather than self-reported engagement: attendance predicted gains (β = .407, p = .001) while self-perceived participation did not (β = .049, p = .692), so sign-in sheets carry information that satisfaction surveys do not.
- **Administrators.** Build the dual-track structure the authors recommend — attendance tied into appraisal alongside meaningful incentives — if participation is meant to be more than nominal.
- **Instructors.** Treat a falling self-assessment after AI training as a possible sign of learning. Teachers in this study reported exactly that (E01, E02, C03, C04), and the authors connect it to the Dunning–Kruger effect rather than to lost skill.
- **Researchers.** Add a confidence-in-this-judgment dimension to competency scales, and report negative gain scores instead of dropping them, because a self-report instrument that records recalibration as decline will understate the intervention.

## Limitations

- **Participation was self-selected and the design was quasi-experimental.** The 64 experimental teachers were not randomized, so baseline differences and pre-existing motivation are not fully separable from the program's effect — the authors name this as the study's main limitation.
- **Competency was measured by [[self-report-measures|self-report]] alone.** The authors state that the [[quantitative-research|quantitative]] scales could not distinguish an actual skills gap from heightened cognitive sensitivity, which is the same ambiguity that makes the negative-gain finding interpretive rather than demonstrated.
- **The negative-gain mechanism rests on a handful of interviews.** The recalibration account is supported by individual cases in both groups, not by a systematic [[qualitative-research|qualitative]] sample, and the paper does not report how many teachers scored lower or by how much.
- **The control condition was uncontrolled.** Control teachers were free to encounter AI through news, public lectures and industry events, so the comparison is against no structured training rather than against no exposure.
- **Small sample and one institution.** With 125 participants at a single Hong Kong university, and an instrumentation effect in the design that the paper itself flags through Box's M and Levene's tests, the effect sizes should be read as estimates for this context rather than as parameters for faculty development in general.
- **The program names no specific AI tools or model generations.** The intervention runs from November 2024 to June 2025 and describes tool categories rather than the products teachers used, so the technical knowledge gained cannot be tied to a particular tool vintage.

## Citation

Tan, X., Cheng, G., & Ling, M. H. (2025). [Enhancing teachers' AI competency: A professional development intervention study based on intelligent-TPACK framework](https://doi.org/10.1016/j.caeai.2025.100521). *Computers and Education: Artificial Intelligence, 9*, 100521.