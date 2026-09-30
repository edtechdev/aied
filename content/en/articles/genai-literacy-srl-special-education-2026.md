---
title: "GenAI literacy and GenAI-assisted self-regulated learning behaviors: the roles of learning agency and challenge emotions"
created: "2026-09-30T10:34:15-04:00"
updated: "2026-09-30T10:34:15-04:00"
type: article
sources: ['raw/papers/10.3389_fpsyg.2026.1902668.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
level: [undergraduate, higher ed, special education, teacher education]
audience: [instructors, faculty developers, researchers]
foundations: [ai-literacy, agency]
pedagogy: [self-regulated-learning, student-engagement]
technology: [generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Yang, Liu, Zhao and Wang surveyed 434 [[special-education|special education]] undergraduates in China who had prior experience with [[generative-ai|generative AI]], measuring [[ai-literacy|GenAI literacy]], [[agency|learning agency]], challenge emotions (playfulness, flow, excitement, arousal) and GenAI-assisted [[self-regulated-learning|self-regulated learning]] behaviors (SRLB) in a cross-sectional online questionnaire. A serial mediation model estimated in lavaan with 5,000 bootstrap resamples supported all four hypotheses: GenAI literacy was positively associated with SRLB directly and indirectly through learning agency, through challenge emotions, and through the two in sequence. The association ran mainly through learning agency (B = 0.345) rather than challenge emotions alone (B = 0.061), and the direct association stayed significant, indicating partial mediation. The design is cross-sectional, so no causal direction is established, and the sample is a specific population, which bounds how far the estimates generalize.

## Key Findings

1. **GenAI literacy was positively associated with GenAI-assisted self-regulated learning behaviors.** The total effect was B = 0.701 (SE = 0.067, 95% CI [0.564, 0.830], β = 0.471), and the direct association remained significant after accounting for the mediators, B = 0.219 (SE = 0.079, 95% CI [0.062, 0.376], β = 0.148).
2. **Learning agency carried the largest indirect pathway.** The indirect association of GenAI literacy with SRLB through learning agency was B = 0.345 (SE = 0.058, 95% bootstrap CI [0.234, 0.461], β = 0.232).
3. **Challenge emotions mediated too, but the effect was small.** The indirect association through challenge emotions was B = 0.061 (SE = 0.032, 95% bootstrap CI [0.001, 0.126], β = 0.041) — the paper itself calls it "relatively small in magnitude," and its confidence interval sits just above zero.
4. **The serial pathway through learning agency and then challenge emotions was significant.** B = 0.075 (SE = 0.023, 95% bootstrap CI [0.030, 0.122], β = 0.050), consistent with the authors' reading that [[agentic-ai|agentic]] and affective processes are interconnected rather than independent.
5. **Regression coefficients along the chain.** GenAI literacy was associated with learning agency (B = 0.529, SE = 0.028, β = 0.671, p < 0.001); learning agency was associated with challenge emotions (B = 0.380, SE = 0.107, β = 0.230, p < 0.001); GenAI literacy was associated with challenge emotions after accounting for learning agency and covariates (B = 0.165, SE = 0.083, β = 0.126, p = 0.048); learning agency (B = 0.653, SE = 0.103, β = 0.346, p < 0.001) and challenge emotions (B = 0.372, SE = 0.047, β = 0.326, p < 0.001) were each associated with SRLB.
6. **Total indirect effect.** B = 0.481 (SE = 0.064, 95% bootstrap CI [0.359, 0.607], β = 0.324), so the mediated pathways together accounted for most of the total association, but not all of it.
7. **Gender was a covariate worth noting, cautiously.** Female students reported higher learning agency and lower challenge emotions than male students after controlling for GenAI literacy and year of study, but with 396 of 434 participants female (91.2%), the authors warn the gender effects should be interpreted cautiously.

## How the study was done

A convenience sample of full-time special education undergraduates with prior GenAI experience was recruited from universities in Shaanxi, Sichuan, Yunnan and Hainan provinces; data were collected between May and June 2025 through Wenjuanxing and WeChat. Of 503 [[self-report-measures|questionnaires]] collected, 434 valid responses were retained (86.3%). The sample was 396 female (91.2%) and 38 male (8.8%); by year, 77 (17.7%) were first-year, 79 (18.2%) second-year, 261 (60.1%) third-year and 17 (3.9%) fourth-year.

Four self-report instruments were used, all with acceptable reliability: GenAI literacy (25 items across four dimensions, 7-point scale, Cronbach's α = 0.885), learning agency (34 items across 10 factors, 5-point scale, α = 0.942), challenge emotions (4 items covering playfulness, flow, excitement and arousal, 5-point scale, α = 0.865) and GenAI-assisted SRLB (11 items adapted from the Self-Control Schedule, 7-point scale, α = 0.911). All four constructs were assessed by self-report in the same survey, which is one of the limitations the authors flag.

The four-factor measurement model fit was CFI = 0.852, TLI = 0.838, RMSEA = 0.077 and SRMR = 0.075 — the authors acknowledge the incremental fit indices were below conventional [[benchmark|benchmarks]], though the four-factor model consistently fit better than merged alternatives (for example, combining learning agency with SRLB worsened fit, Δχ²(3) = 297.31, p < 0.001). HTMT values ranged from 0.313 to 0.767, all below the 0.85 threshold. Harman's single-factor test produced a first factor accounting for 25.747% of variance; the common latent method factor model attributed on average 4.86% of variance to the method factor (median = 3.38%). VIFs ranged from 1.079 to 1.934.

## What this means for practice

- **Teach GenAI literacy as judgment, not tool operation.** The authors' practical recommendation is that developing GenAI literacy should go beyond showing students how to operate GenAI tools and should include understanding their capabilities and limitations, critically evaluating outputs, and deciding when and how to use them in learning.
- **Give learners real choices about GenAI.** Because the strongest indirect pathway ran through learning agency, the authors point to providing opportunities for students to make choices about how GenAI is incorporated into their learning, rather than positioning them as passive recipients of AI-generated support.
- **Treat students' emotional experience as part of the picture.** Challenge emotions were a significant (if small) mediator, so activities and guidance that support both meaningful learner involvement and positive emotional experiences in GenAI-supported learning deserve attention.
- **Keep the boundary in view.** These associations come from one cross-sectional survey of special education undergraduates in four Chinese provinces, so treat them as hypotheses about mechanism to test in your own setting, not as evidence that raising GenAI literacy will raise self-regulated behavior.

## Limitations

- **The cross-sectional design limits causal and temporal interpretation.** The paper states this directly: the serial ordering of learning agency and challenge emotions was theoretically specified rather than established by the data, which cannot by itself determine temporal or causal ordering. Longitudinal or experimental studies are needed.
- **The population is specific.** The sample was limited to special education undergraduates from four provinces in China (Shaanxi, Sichuan, Yunnan and Hainan), which the authors say may restrict generalizability, and it was predominantly female (91.2%), which may have reduced the precision of the estimated gender effects.
- **All constructs were self-reported in one survey.** The authors note that common method bias and some conceptual and measurement overlap among GenAI literacy, learning agency and GenAI-assisted SRLB cannot be completely excluded, and participants' frequency of GenAI use was not assessed.
- **Measurement model fit was less than optimal.** The four-factor model's incremental fit indices fell below conventional benchmarks even though it outperformed merged alternatives.

## Citation

Yang, J., Liu, X., Zhao, W., & Wang, T. (2026). [GenAI literacy and GenAI-assisted self-regulated learning behaviors: the roles of learning agency and challenge emotions](https://doi.org/10.3389/fpsyg.2026.1902668). *Frontiers in Psychology*, 17, 1902668.