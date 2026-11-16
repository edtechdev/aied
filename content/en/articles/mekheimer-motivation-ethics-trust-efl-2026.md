---
title: "Motivation, Ethics, and Trust: A Data-Informed Analysis of Generative AI's Impact on EFL Students"
created: "2026-11-16T09:00:00-04:00"
updated: "2026-11-16T09:00:00-04:00"
type: article
evidence_context: educational
authors: ["Mekheimer, M.", "Fageeh, A."]
published: "2026-01-09"
venue: "Journal of Teaching and Learning with Technology"
source_url: https://doi.org/10.14434/jotlt.v12i1.41807
foundations: [ai-literacy, theories-and-frameworks, ai-education]
pedagogy: [motivation, self-determination-theory, student-ai-interaction]
technology: [generative-ai, llm]
assessment: [self-report-measures, feedback]
ethics: [trust, bias-mitigation, ethics]
research_method: [experiment, interviews]
discipline: [english education, language learning]
level: [higher ed, undergraduate]
audience: [instructors, researchers, curriculum designers]
sources: ['raw/papers/mekheimer-motivation-ethics-trust-efl-2026.md']
confidence: medium
methods: [mixed-methods-research, quantitative-research, qualitative-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Mekheimer and Fageeh (2026) ran a 12-week pretest–posttest control-group study with 310 junior English-as-a-foreign-language students at one Egyptian university, giving 155 of them guided use of Gemini and Grammarly across two writing assignments and 25 of those students follow-up interviews. The experimental group scored higher than the control group on every post-test measure the authors report: attitudes, [[motivation|motivation]], [[trust|trust]], and all three sections of a standardized proficiency test. The finding the authors press hardest is that frequency of use, not prior proficiency or anxiety, was the only significant predictor of motivation, which they read as a democratizing effect in which gains accrue to whoever engages rather than to whoever arrives strongest. A second result complicates the usual adoption story: concerns about bias correlated positively with motivation and trust, which the authors interpret as [[ai-literacy|critical AI literacy]] growing through use rather than as a barrier to it. The interviewed students asked for a [[human-in-the-loop-ai|human-in-the-loop]] model, and the paper's practical recommendations follow their lead rather than the test scores.

## Key Findings

- **The intervention group outperformed the control group on every reported post-test scale, by large margins.** Motivation scale sums were 21.47 (SD 2.56) against 7.85 (SD 2.00), attitudes 25.52 (3.46) against 9.63 (2.24), and trust 8.54 (1.35) against 3.28 (1.05), each at t(308) beyond −38 and p < .001; the total scale score was 81.01 (9.11) against 30.14 (6.26).
- **Proficiency gains were reported on all three sections of the standardized test.** On the 100-point test the experimental group averaged 92.83 (2.49) against 56.87 (3.68), a mean difference of 35.96, t(308) = −100.79, p < .001; the writing section carried the largest gap, 46.17 against 26.16 out of 50.
- **Frequency of use was the sole significant predictor of motivation.** In a stepwise regression on the experimental group (n = 155), GenAI use frequency entered alone with β = .46, B = 1.18, SE = 0.19, t = 6.36, p < .001, F(1, 153) = 40.45, and the model explained 20.4% of variance; prior proficiency and anxiety were excluded as non-significant.
- **Transparency, fairness and trust each predicted motivation independently.** Transparency carried β = .35 (B = 0.69, p < .001), fairness β = .30 (B = 0.64, p < .001) and trust β = .18 (B = 0.34, p = .023); bias concerns were not a significant predictor in that model (β = −.02, p = .865).
- **Bias concerns behaved as an accompaniment to engagement, not an obstacle.** In the correlation matrix they were positively and substantially associated with motivation, trust and fairness, which the authors treat as evidence of critical awareness rather than resistance.
- **Interviews located the motivational mechanism in the speed and tone of the feedback loop.** Students described moving from avoiding revision to a "fix-as-you-write" approach, writing longer paragraphs, and feeling less afraid of error, which the authors map onto the competence need in [[self-determination-theory|self-determination theory]].
- **Students asked for human oversight rather than less AI.** Thematic analysis produced four themes — transparency and accountability, fairness and equity, responsible use and guidance, and the irreplaceable human educator — and the authors report that students overwhelmingly wanted GenAI to supplement rather than replace the instructor.
- **Trust is framed as the bridge between acceptance and sustained motivation.** The paper's integrated model places perceived transparency and fairness between initial [[technology-acceptance-model|technology acceptance]] and the satisfaction of autonomy, competence and relatedness, so that ethical perception is treated as a motivational variable rather than a compliance one.

## How the study was done

Participants were 310 junior-level EFL students at a large Egyptian university, randomly assigned to an experimental group (n = 155) or a control group (n = 155). Inclusion required an "upper-intermediate" score on a customized proficiency pretest and minimal prior experience with the GenAI writing tools under study. The intervention ran across a single 12-week semester. The experimental group used Gemini and Grammarly on two designated writing assignments, received a 30-minute training session on drafting, vocabulary refinement and grammar checking, and worked on personal devices with campus Wi-Fi and a technical support contact available. The control group completed the same assignments and final proficiency test using manual proofreading and [[peer-assessment|peer feedback]], without guided GenAI use. The institutional review board approved the protocol (reference BSU-FoE-003-01-20-2025) and written consent covered withdrawal at any stage.

Three instruments were used. A pretest–posttest survey measured motivation through [[self-determination-theory|SDT]] constructs, attitudes through UTAUT2 constructs, and ethical perceptions covering transparency, fairness, bias concerns and trust, on a 5-point Likert scale with construct scores summed; items were adapted from validated instruments, pilot tested with 30 students outside the sample, and returned Cronbach's alpha between .88 and .95. Semi-structured interviews were conducted with 25 purposively selected experimental-group students after the post-test, in English, audio-recorded and transcribed verbatim, with saturation reported at roughly 20 interviews and five further cases confirming thematic stability. A customized standardized English proficiency test with listening (25 points), reading (25) and writing (50) sections was administered to both groups as a post-test and benchmarked against CEFR standards.

Quantitative analysis used SPSS version 22: independent-samples t tests for post-intervention group comparisons, multiple linear regression on the experimental group to identify predictors of motivation, and Cohen's d for effect size. Qualitative data were analyzed with Braun and Clarke's six-step thematic approach, coded independently by two researchers with intercoder reliability at Cohen's κ = 0.89 and discrepancies resolved by discussion. A joint display table sets each quantitative finding beside the interview quotes that explain it.

## What this means for practice

- **Design for frequency, not for a single showcase task.** Because use frequency was the only significant predictor of motivation, the authors recommend short, repeated, low-stakes writing exercises rather than one high-stakes AI assignment; the benefit then reaches students regardless of their starting proficiency.
- **Treat ethical inquiry as part of the curriculum rather than a preamble.** Transparency, fairness and trust predicted motivation directly, and bias concerns correlated with engagement, so structured discussion of bias and fairness is a way to build [[trust-calibration|calibrated trust]] rather than a risk to be managed.
- **Keep the instructor in the loop explicitly.** Students themselves asked for this, and the authors recommend that educators interpret, contextualize and ethically frame AI feedback instead of forwarding it; that is also the cheapest defense against the overreliance the paper flags.
- **Teach verification as a routine step.** Interviewed students described the tool as useful but imperfect and stressed checking output, which the authors read as the practical form of critical AI literacy and the outcome a course should be able to name.
- **Plan for the access baseline before adopting.** The intervention depended on personal devices and campus Wi-Fi; the authors flag that in less digitally equipped settings this dependence becomes an [[digital-divide|equity constraint]] rather than a detail.

## Limitations

- All data come from a single Egyptian university, and the authors state that this restricts generalizability; no second institution or cultural setting is tested.
- The intervention lasted one semester, so the durability of the motivational and proficiency gains is unknown and a longitudinal design is called for.
- The regression models explain affective outcomes only; the paper does not trace pathways from ethical perceptions through motivation to longer-term academic performance.
- Motivation, attitudes, trust and ethical perceptions are all self-reported Likert constructs, so the large between-group differences describe how students rated themselves rather than observed classroom behavior.
- The reported statistics are internally inconsistent in places: the discussion gives proficiency means of 76.4 and 68.7 where the results table gives 92.83 and 56.87, a motivation coefficient of β = .42 where the table gives .46, and transparency and fairness coefficients of .36 and .33 where the table gives .35 and .30. The table values are the ones summarized above, but the discrepancies mean individual figures should be checked against the source before being reused.
- Reliance on personal devices and campus Wi-Fi is an equity limitation the authors name themselves, and the study does not report how much unguided AI use occurred in the control group.

## Citation

Mekheimer, M., & Fageeh, A. (2026). [*Motivation, Ethics, and Trust: A Data-Informed Analysis of Generative AI's Impact on EFL Students*](https://doi.org/10.14434/jotlt.v12i1.41807). *Journal of Teaching and Learning with Technology, 14*(Special Issue), 104–121.
