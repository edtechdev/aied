---
title: "Generative AI use and self-perceived employability among young adults in China: indirect associations through career decision-making self-efficacy and trust in generative AI"
created: "2026-11-12T06:36:55-05:00"
updated: "2026-11-12T08:20:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
evidence_context: educational
level: [higher ed, undergraduate]
audience: [instructors, administrators, researchers]
sources: ['raw/papers/yan-genai-employability-career-self-efficacy-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1985156"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [agency]
pedagogy: [self-efficacy, career-development-and-readiness]
technology: [generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [trust]
---
> **Synthesis:** Among 579 university students in China, [[generative-ai|generative AI]] use was positively associated with [[career-development-and-readiness|self-perceived employability]], and two psychological variables — career decision-making [[self-efficacy]] and [[trust|trust in GenAI]] — each carried part of that association. In a [[quantitative-research|parallel mediation model]] with controls, the standardized total effect was 0.410 (95% CI [0.322, 0.496]). The route through career decision-making self-efficacy was 0.168 and accounted for 41.03% of it; the route through trust in GenAI was 0.079 and accounted for 19.35%; a direct association of 0.162 (39.62%) survived both. The outcome is students' confidence about their employment prospects, not their demonstrated competence or their employment status, and the cross-sectional design cannot order use, belief, and perception in time.

## Key Findings

1. **Use tracked perceived employability across the whole sample.** In the main-effect model, before either mediator entered, GenAI use predicted self-perceived employability at β = 0.503 (p < 0.001), and the zero-order correlation was r = 0.455 (p < 0.01).
2. **Career decision-making self-efficacy carried the larger indirect route.** The indirect effect was 0.168 (bootstrap SE = 0.040, 95% CI [0.094, 0.250]), or 41.03% of the total effect — the strongest of the two pathways and the one that concerns confidence in the student's own decisions rather than in the tool.
3. **Trust in GenAI carried a smaller but still significant route.** Its indirect effect was 0.079 (bootstrap SE = 0.027, 95% CI [0.031, 0.137]), or 19.35% of the total effect, measured with a three-item scale whose standardized loadings ran from 0.779 to 0.824.
4. **The two routes together left a substantial direct association.** The combined indirect effect was 0.248 (bootstrap SE = 0.041, 95% CI [0.175, 0.336]), 60.38% of the total, while the direct path remained at 0.162 (bootstrap SE = 0.062, 95% CI [0.034, 0.281]) — partial, not full, statistical mediation.
5. **Average scores sat just above the scale midpoint, not near the ceiling.** On five-point scales, GenAI use averaged 3.361 (SD = 0.972), career decision-making self-efficacy 3.439 (SD = 0.775), trust in GenAI 3.265 (SD = 1.083), and self-perceived employability 3.381 (SD = 0.887); self-efficacy had the highest mean and trust the widest spread.
6. **The two mediators overlapped substantially with each other.** Career decision-making self-efficacy and trust in GenAI correlated at r = 0.534 (p < 0.01), higher than either one's correlation with GenAI use (r = 0.493 and r = 0.415 respectively), so the split between the pathways is a modeling decision as much as a psychological separation.
7. **The sample was frequent in use but early in career experience.** Of 579 respondents, 194 (33.5%) used GenAI about once a week, 163 (28.2%) two to four days a week, and 77 (13.3%) almost every day; the most common duration was 7–12 months (28.8%), and 148 respondents (25.6%) reported no work experience at all.

## How the study was built

The sample is 579 university students, 294 men (50.8%) and 285 women (49.2%), with 520 respondents (89.8%) aged 18–22; the survey covered all 31 provincial-level administrative regions of China. The instrument contained 48 items in four established measures: four items adapted from a GenAI behavioral-usage scale, the 25-item Career Decision Self-Efficacy Scale–Short Form across its five domains, a three-item trust measure covering accuracy, privacy, and nonmaleficence, and the 16-item self-perceived employability scale for university students. All responses were five-point, with confidence ratings for self-efficacy and agreement ratings for the rest.

Internal consistency ran from α = 0.844 for trust to α = 0.956 for self-perceived employability, composite reliability from 0.854 to 0.956, and average variance extracted from 0.575 to 0.643, with HTMT values from 0.415 to 0.534. The pooled measurement model fit well (χ²/df = 1.059, RMSEA = 0.010, TLI = 0.996, CFI = 0.996, SRMR = 0.028), and the structural model fit acceptably (χ²/df = 1.767, RMSEA = 0.036, TLI = 0.981, CFI = 0.985, SRMR = 0.061). An unmeasured-latent-method-factor test moved fit indices only marginally, which the author reads as no severe common-method bias. Effects came from 5,000 bias-corrected bootstrap resamples, and the model controlled for gender, age, educational background, work experience, and the frequency and duration of GenAI use — a longer list than the abstract's four controls.

## Two routes of unequal weight

The theoretical claim separates two kinds of confidence. Career decision-making self-efficacy, from social cognitive career theory, is belief in one's capacity to appraise oneself, gather occupational information, select goals, plan, and solve career problems. Trust in GenAI is belief in the competence and reliability of the system. Both could follow from using a tool that organizes career information quickly, and estimating them in parallel avoids claiming that one produces the other.

The larger pathway is the [[self-directed-learning|self-directed]] one, and that matters for [[higher-ed|higher education]]. Had it run mainly through trust, the message would be that students who believe the tool works feel better about their prospects — a promotional claim for the technology. Instead the heavier route runs through students' sense of their own decision-making, the kind of belief a career course can deliberately build. The trust route is real but modest: the findings do not show whether use precedes trust or whether trusting students simply use the tool more, nor whether reported trust is calibrated to what the system can do.

Two features deserve more scrutiny than the paper gives them. First, the two mediators correlate at r = 0.534, so the 41.03% and 19.35% shares are not estimates of two cleanly separable mechanisms; some of the variance each explains is shared, and a model with a single latent confidence factor might fit these data nearly as well. Second, the usage background variables — work experience, frequency, and duration — correlate with each other at r = 0.907 to 0.948, and all three enter as controls alongside the four-item usage scale. No collinearity diagnostic is reported, and the total effect differs between the two models presented: β = 0.503 in the main-effect model and 0.410 in the decomposition table. Neither discrepancy invalidates the pattern, but the shares describe this specification rather than fixed proportions of a causal process.

## What a perception score can and cannot show

Self-perceived employability is an appraisal of one's chances in the labor market, shaped by perceived capabilities, the reputation of one's university, the demand for one's field, and general labor-market conditions. It is not a hiring outcome or a salary. The caution is not boilerplate: a student who uses GenAI heavily may feel more prepared while having developed fewer of the skills that the feeling refers to.

The surrounding literature makes that possibility concrete. Wei et al. (2026) found positive associations between graduates' perceived employability and several dimensions of confidence in GenAI, but the indirect effects through perceived usefulness and [[technology-acceptance-model|perceived ease of use]] were not statistically significant — favorable technology evaluations do not travel through the usual acceptance channels. Work on [[critical-thinking|critical thinking]] distinguishes shallow dependence from deeper collaboration, so how a student uses the tool may matter more than whether they use it. Experimental evidence from high school mathematics shows that unguarded GenAI assistance can raise performance while the tool is present and depress it once the tool is removed. Together these mark the gap between assisted performance and independent capability that a self-report score cannot close.

The author also reports the counter-evidence directly: research among Chinese university students linking perceived GenAI impact to perceived skill devaluation and [[anxiety-and-stress|algorithmic anxiety]], and the possibility that favorable employability perceptions coexist with dependence. The coefficients describe one national sample at one point in time. They are consistent with a story in which GenAI-supported exploration builds real confidence, and equally consistent with a story in which confident students seek out more tools.

## What this means for practice

- **Career services and instructors.** Build the decision-making tasks, not just tool fluency: [[self-assessment|self-appraisal]], occupational information search, goal selection, planning, and [[problem-solving|problem solving]] are the activities the larger pathway runs through, and they are teachable without any platform.
- **Anyone teaching career preparation with GenAI.** Pair assistance with [[trust-calibration|calibrated trust]] exercises — ask students to check an AI claim about a labor market or qualification requirement against a primary source, and to say what would change their mind — because the trust measure captures belief in accuracy, privacy, and nonmaleficence, not verified reliability.
- **Administrators.** Treat self-perceived employability as a leading indicator, not an outcome, and track applications, interviews, offers, and starting salaries alongside any confidence survey.
- **Researchers.** Measure GenAI use by purpose and reliance rather than frequency alone; the four-item scale cannot distinguish career exploration from application drafting.

## Limitations

- The design is cross-sectional, so no temporal ordering or causal mediation can be established; reverse relationships are plausible, since students with greater decision-making confidence or trust may engage more actively with GenAI.
- The sample of 579 Chinese university students limits generalizability to other institutions, disciplines, regions, and national contexts; comparison with employed young adults or across countries would require measurement invariance testing first.
- All constructs were [[self-report-measures|self-reported]] in the same survey, which invites shared response tendencies and social desirability bias despite anonymous administration, partial reverse scoring, and the method-factor check.
- The three-item trust scale provides limited differentiation across tools and tasks, and dimensional indicators and item parcels may obscure item-level measurement problems.
- The overall usage measure does not distinguish frequency, duration, task purpose, or reliance patterns, so the model cannot assess dependence, skill devaluation, or algorithmic anxiety as competing pathways.
- Self-perceived employability is subjective, and unmeasured factors including [[ai-literacy|AI literacy]], socioeconomic background, and access to career support may explain the associations; following students into employment would clarify whether favorable perceptions correspond to stronger capabilities and better outcomes.

## Citation

Yan, Z. (2026). [*Generative AI use and self-perceived employability among young adults in China: indirect associations through career decision-making self-efficacy and trust in generative AI*](https://doi.org/10.3389/fpsyg.2026.1985156). *Frontiers in Psychology, 17*, 1985156. https://doi.org/10.3389/fpsyg.2026.1985156
