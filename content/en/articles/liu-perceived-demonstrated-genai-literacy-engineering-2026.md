---
title: "Perceived and demonstrated generative AI literacy in engineering problem solving: the role of verification behavior"
published: "2026-11-04"
created: "2026-11-05T09:05:00-05:00"
updated: "2026-11-05T09:05:00-05:00"
type: article
sources: ['raw/papers/liu-perceived-demonstrated-genai-literacy-engineering-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1981428"
confidence: high
page_kind: [evaluation]
research_method: [survey]
discipline: [engineering education]
level: [higher ed, undergraduate]
audience: [instructors, assessment designers, researchers, curriculum designers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
source_depth: full text
foundations: [ai-literacy]
pedagogy: [problem-solving]
technology: [generative-ai, llm]
assessment: [assessment-validity, self-assessment, self-report-measures]
methods: [quantitative-research]
---

> **Synthesis:** Liu, Zhang and Pan gave 1,206 mechanical engineering students at three Chinese [[higher-ed|universities]] both a 20-item self-report of their [[ai-literacy|AI literacy]] and a 12-item scenario test of the same construct, then two engineering tasks, and found the two measures share about 7% of their variance (r = 0.265). [[self-assessment|Perceived competence]] is therefore not a proxy for [[assessment-validity|demonstrated competence]]. What did predict task performance was the reported frequency of verification: students who said they check AI output scored higher, verification carried roughly a third of the association between demonstrated literacy and performance, and the moderation by perceived literacy was real but tiny. For engineering instructors the actionable variable is not how capable students believe they are but whether they habitually check the output, which is a behavior a course can require.

## Key Findings

1. **Perceived and demonstrated literacy are nearly different constructs.** The two measures correlated at r = 0.265 (95% CI [0.212, 0.317]) and shared approximately 7% of their variance, so a literacy questionnaire answers a different question from a scenario test.
2. **Verification frequency was the stronger correlate of performance.** Reported verification correlated with engineering performance at r = 0.493, above demonstrated literacy at r = 0.404, and it predicted performance at b = 1.901 (β = 0.400).
3. **Verification carried about a third of the literacy–performance association.** The indirect association was 0.124 (95% CI [0.096, 0.154]), approximately 33.6% of the total 0.369, with a direct path of 0.245 remaining.
4. **Students who felt most literate verified least effectively.** The verification-by-perceived-literacy interaction was negative (b = −0.444, β = −0.050, p = 0.038), and the performed slope fell from 2.192 at low perceived literacy to 1.730 at high.
5. **The interaction is statistically real and practically negligible.** It added ΔR² = 0.0024 to an outcome model already explaining 30.4% of variance, and its confidence interval [−0.863, −0.025] approaches zero; the paper says so itself.
6. **The literacy questionnaire's subscales did not hold up.** HTMT values among the four perceived domains ran from 0.901 to 0.955 and a single-factor model also fitted well, so overall fit did not demonstrate distinct subscales.

## What was measured, and how

Demonstrated literacy was a 12-item scenario test scored 0 to 12, in which students judged engineering-specific AI outputs; performance was a two-task score on the same 0-to-12 scale; verification frequency was an eight-item [[self-report-measures|self-report]]. The mean demonstrated score was 7.412 (SD = 2.842) against a mean perceived score of 3.072 on a five-point scale — which is why the paper refuses to read the correlation as a measure of [[metacognition|metacognitive accuracy]], since the two sit on different metrics.

The measurement work is more thorough than the design requires. Invariance held across the three universities on configural, loading and intercept constraints, item proportions correct ranged from 0.449 to 0.733, and the authors test a reverse-ordered model that also produced a significant indirect association (0.030, 95% CI [0.025, 0.037]), which they report as a caution against treating their ordering as unique. A cross-sectional survey cannot order literacy, verification and performance in time.

## Why verification is the teachable variable

The practical force of the paper is the substitution it supports. Asking students whether they are good with AI produces a number uncorrelated enough with actual performance to be useless for placement, advising or grading. Asking what they do when the model returns an answer — do they check it against a source, re-run it, test it — produces the strongest correlate in the model.

The moderation result cuts the same way, and it is the finding instructors should sit with. At high reported verification, students who rated their own literacy highly performed slightly worse than students who rated themselves lower, though the effect is small enough that the authors decline to build on it. The pattern is consistent with [[trust-calibration|poorly calibrated trust]]: confidence substitutes for checking. It also fits the broader literature on [[cognitive-offloading|cognitive offloading]], where the risk is not using the tool but accepting its output without inspection.

## How far the design reaches

Three universities, one engineering discipline, one country, and a cross-sectional survey administered once. Eighteen per cent of the sample did not complete all measures and were excluded, and those excluded differed in weekly AI use (chi-square(3) = 14.86, p = 0.002) and AI course experience (chi-square(1) = 4.28, p = 0.039) — a non-random loss the authors report rather than bury. University ICCs were 0.113 for demonstrated literacy and 0.023 for performance, computed on three clusters and therefore imprecise.

The scenario test is the study's real asset and its main open question: a 12-item test with item difficulties from 0.449 to 0.733 is a short instrument, and nothing here establishes that it generalises beyond mechanical engineering tasks at these three institutions.

## What this means for practice

- **Stop surveying AI literacy and start testing it.** A self-report and a scenario test of the same construct shared 7% of their variance here, so a questionnaire cannot stand in for a demonstration when the decision matters.
- **Make verification a graded requirement.** Ask for the check itself — the source compared, the test re-run, the output corrected — rather than for a statement that the output was checked, since verification frequency is self-reported even in this study.
- **Watch the confident non-checkers.** The negative interaction is small, but the students most at risk are the ones who rate themselves highly and skip inspection, and a course can find them by grading the check rather than the answer.
- **Assessment designers.** A 12-item scenario test produced usable variance across 0 to 12; a short constructed-response instrument is a realistic alternative to a literacy scale for program-level evaluation.

## Limitations

- **Cross-sectional, single administration.** No temporal ordering between literacy, verification and performance, and the authors' own reverse model also fits, which they report.
- **All verification data are self-report.** The behavior that carries the mediation is measured by asking students how often they do it, not by observing it.
- **Three universities in one country, one discipline.** 1,206 mechanical engineering students; university effects are estimated on three clusters and are imprecise.
- **Selective attrition.** Excluded respondents differed from retained ones in weekly AI use and prior AI coursework.
- **The interaction is near the detection threshold.** With the observed residual variance, 80% power required about 0.0045 in incremental R², above the 0.0024 observed.

## Citation

Liu, X., Zhang, C., & Pan, J. (2026). [*Perceived and demonstrated generative AI literacy in engineering problem solving: the role of verification behavior*](https://doi.org/10.3389/fpsyg.2026.1981428). Frontiers in Psychology, 17.
