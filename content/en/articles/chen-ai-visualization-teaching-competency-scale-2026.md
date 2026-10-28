---
title: "Development and validation of the AI-empowered teacher visualization teaching competency scale"
published: "2026-10-21"
created: "2026-10-28T12:21:37-04:00"
updated: "2026-10-28T12:21:37-04:00"
type: article
foundations: [teacher-ai-competency, tpack]
pedagogy: [professional-training]
technology: [visualization, ai-technologies]
assessment: [educational-measurement, self-report-measures]
methods: [quantitative-research]
research_method: [instrument development]
level: [k 12, primary education, secondary]
audience: [faculty developers, administrators]
page_kind: [evaluation]
sources: ['raw/papers/chen-ai-visualization-teaching-competency-scale-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1994352"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Chen, Qiao, Luo, Chen and Zhang built and validated an instrument for a construct they argue existing frameworks miss: teachers' capacity to use AI to generate, judge and act on visual representations of instructional content. Drawing on [[tpack|AI-TPACK]], visual and data literacy, cognitive load theory and self-efficacy theory, they defined five dimensions and drafted 36 items from 12 teacher interviews, of which five experts removed five. A convenience sample from five western Chinese provinces returned 566 valid questionnaires, 95.8% of 591. Item analysis kept all 31 items; exploratory factor analysis on one random half (n = 283) produced five factors explaining 71.074% of variance; confirmatory factor analysis on the other half (n = 283) fitted a first-order model at chi-square/df = 2.465, CFI = 0.918, TLI = 0.910, RMSEA = 0.072 and SRMR = 0.045. Subscale alpha ran from 0.911 to 0.934, the full scale reached 0.967, and strict invariance held across gender, school type and teaching stage. It measures what teachers report they can do, in one region, with no test-retest and no observation of practice.

## Key Findings

1. Of 591 questionnaires, 566 were valid (95.8%): 170 male and 396 female, 468 public and 98 private school, and 201 primary, 201 middle and 164 high school teachers (35.5%, 35.5%, 29.0%).
2. Item analysis kept all 31 items: each separated the top and bottom 27% of scorers (t > 3.000, p < 0.001, Cohen's d above 0.80) and correlated with the total above r1 and r2 > 0.400.
3. Exploratory factor analysis on n = 283 gave KMO = 0.945 and a significant Bartlett test (chi-square = 7248.268, p < 0.001), with five factors at eigenvalues from 16.107 to 1.058, 71.074% cumulative variance and no item removed.
4. Confirmatory factor analysis on n = 283 fitted the first-order model at chi-square/df = 2.465, CFI = 0.918, TLI = 0.910, RMSEA = 0.072 and SRMR = 0.045, and the second-order model at 2.594, 0.910, 0.902, 0.075 and 0.060.
5. Subscale alpha was 0.913, 0.925, 0.934, 0.922 and 0.911, the full scale 0.967, split-half alpha 0.946 and 0.953, and Spearman-Brown 0.860.
6. Strict invariance held across gender, school type and teaching stage, with the largest change in CFI at 0.006 and in RMSEA at 0.003, against criteria of ΔCFI < 0.010 and ΔRMSEA < 0.015.
7. All five dimensions correlated with all seven TPACK dimensions from r = 0.560 to r = 0.737 (all p < 0.001).

## The five dimensions and the fit that supports them

Five dimensions sit under three parents: Design and Creation, Awareness and Interpretation and Ethics and Safety under AI technology integration, Decision-Making and Collaboration under visual instructional design, and Professional Development under AI teaching self-efficacy. The items divide 8, 7, 6, 6 and 4. Twelve interviews in Xi'an and five expert judgments produced the pool, and the EFA then reproduced the intended structure without deleting anything.

Thresholds were CFI and TLI above 0.90, RMSEA and SRMR below 0.08 and chi-square/df below 3, with WLSMV for ordinal items. Both models clear them, but only just: 0.918 and 0.910 are adequate rather than strong, and the second-order model is worse on every index. The authors argue for the hierarchy from correlations among the five latent variables (r = 0.605 to 0.812) rather than from comparative fit, the defensible version.

Discriminant validity needed that second-order model. At first order, Design and Creation correlated with Awareness and Interpretation at r = 0.812, above the square root of either dimension's average variance extracted, so Fornell-Larcker failed for that pair. The higher-order factor resolved the test, with square roots of AVE from 0.755 to 0.849 against correlations of 0.660 to 0.787.

## What strict invariance establishes, and what it does not

Invariance was tested as four nested models per grouping variable: configural, metric, scalar and strict. What that establishes is comparability of measurement: the same five-factor structure, the same pattern of loadings, comparable intercepts and residual variances, so a group mean difference can be read rather than dismissed as an artifact.

The limits matter more. No latent mean is compared, so nothing here says men and women, or primary and high school teachers, differ in competency, and nothing shows the construct means the same outside the sampled provinces. Group sizes are uneven: 98 private-school teachers carry the school-type comparison against 468 public-school teachers, and the stages are compared across 201, 201 and 164. Invariance is a property of the instrument in this sample, not a warrant for cross-cultural use.

## A validated scale of reported competency

Everything measured arrives through a Likert item. The authors concede [[self-report-measures|self-report]] is susceptible to social desirability bias. No observation, artifact or student outcome enters the validation, and the criterion is the TPACK scale, itself self-report, so criterion validity means convergence with related self-descriptions rather than with practice. Harman's single-factor test gave 27.986% in the Results and 28.478% in the Limitations, both under 40%.

## What this means for practice

For teacher educators, the scale is a diagnostic profile, not a verdict: administer it before a program, read the five subscales to see whether a teacher needs work on generation, critical interpretation, decision-making, ethics or sustained professional learning, and target the weakest. Because the scores are self-assessments, pair them with a lesson observation or a review of AI-generated materials. The items name routines worth rehearsing: prompt design for visual output, checking a generated chart against the knowledge it represents, and asking what student data left the room. Administrators should not rank schools or stages on it.

## Limitations

- A convenience sample from five western Chinese provinces, 82.7% public school, leaves generalization to eastern China or other countries untested.
- No test-retest reliability was collected and no student outcome was measured, so temporal stability and predictive validity are unknown.
- All measures, including the TPACK criterion, are self-report, so common method variance cannot be excluded.
- The school-type comparison rests on 98 private-school teachers against 468 public-school teachers, which makes that contrast fragile.

## Citation

Chen, L., Qiao, S., Luo, X., Chen, G., and Zhang, Y. (2026). [*Development and validation of the AI-empowered visualization teaching competency scale*](https://doi.org/10.3389/fpsyg.2026.1994352). *Frontiers in Psychology*, 17, 1994352.
