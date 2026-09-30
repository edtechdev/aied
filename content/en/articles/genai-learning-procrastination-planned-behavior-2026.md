---
title: "GenAI Use and GenAI-Assisted Learning Procrastination in University Students: The Roles of Planned Behavior Constructs and Learning GenAI Anxiety"
created: "2026-09-30T13:46:53-04:00"
updated: "2026-09-30T13:46:53-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071256.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
discipline: [learning sciences]
level: [higher ed, undergraduate]
audience: [instructors, researchers, faculty developers]
foundations: [ai-education, theories-and-frameworks, cognitive-offloading]
pedagogy: [self-regulated-learning, anxiety-and-stress, motivation, social-norms-ai-use, self-efficacy]
technology: [generative-ai, technology-acceptance-model]
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

> **Synthesis:** Li, Huang and Cui surveyed 1243 undergraduates at three "Project 985" universities in Beijing with a cross-sectional questionnaire (5–9 March 2026) and tested a [[technology-acceptance-model|Theory of Planned Behavior]] extension in which students' use of GenAI (SUG) is linked to GenAI-assisted learning procrastination (GALP) through behavioral attitude, subjective norm, perceived behavioral control and behavioral intention, with learning GenAI anxiety (LGA) moderating the intention–procrastination link. Every hypothesized direct path was significant: SUG was negatively associated with GALP (β = −0.195, p < 0.001) and positively associated with all four TPB constructs, and the model explained 71.6% of the variance in GALP. The distinguishing construct is GALP itself: unnecessary delay in initiating or completing GenAI-supported learning despite a genuine intention to use it — an intention–behavior gap, not general academic procrastination and not deliberate non-use. The most important qualification is the cross-sectional design, which supports conditional associations rather than causal evidence.

## Key Findings

- **More frequent GenAI use went with less procrastination in using GenAI.** SUG → GALP was negative (b = −0.176, β = −0.195, p < 0.001), and the standardized total association was −0.278 (p < 0.001).
- **All four TPB constructs were negatively associated with GALP.** Behavioral intention (β = −0.137), behavioral attitude (β = −0.164), subjective norm (β = −0.171) and perceived behavioral control (β = −0.331), each p < 0.001; perceived behavioral control carried the largest standardized coefficient.
- **The belief constructs ran through intention.** SUG was positively associated with attitude (β = 0.692), subjective norm (β = 0.508), perceived behavioral control (β = 0.617) and intention (β = 0.297); attitude (β = 0.273), subjective norm (β = 0.116) and perceived behavioral control (β = 0.219) were positively associated with intention. Every indirect path was significant, with a total indirect association of −0.086 (p < 0.01) that accounted for approximately 30.9% of the total association.
- **Learning GenAI anxiety amplified the intention–procrastination link.** The BI × LGA interaction was significant (b = −0.137, 95% CI [−0.172, −0.102], p < 0.001). At low anxiety the BI–GALP slope was not significant (b = 0.006, SE = 0.052, p = 0.915); at mean anxiety it was (b = −0.131, SE = 0.043, p = 0.002), and at high anxiety it was stronger (b = −0.268, SE = 0.040, p < 0.001).
- **The model accounted for a large share of variance.** R² = 0.585 for behavioral intention and R² = 0.716 for GALP; structural fit was χ²/df = 2.95, CFI = 0.929, TLI = 0.922, RMSEA = 0.040, SRMR = 0.032.

## What GALP measures, and why the construct matters

GALP is defined as the unnecessary delay in initiating or completing the use of GenAI to support learning tasks — daily assignments, final-term assignments and examination preparation — despite holding a genuine intention to use the technology and being aware of the potential costs of delay. The authors draw a deliberate line between this and two other things: general academic procrastination, and the reasoned non-use of GenAI for [[pedagogy|pedagogical]], integrity or task-fit reasons. The three GALP items keep the distinction explicit (for example, "Although I plan to use GenAI for my daily assignments, I often unnecessarily put it off, even though I know it may cost me later"). Every construct was specified against the same focal behavior, so attitude, norms, control and intention refer to GenAI-assisted task completion rather than to [[generative-ai]] use in general.

Measurement used self-developed five-point scales for SUG (3 items), behavioral attitude (9), subjective norm (3), perceived behavioral control (9), behavioral intention (6) and GALP (3), plus an eight-item, seven-point learning GenAI anxiety scale adapted from the [[anxiety-and-stress|AI anxiety]] scale of Y. Y. Wang and Wang (2022). Standardized loadings ranged from 0.58 to 0.95, Cronbach's α from 0.83 to 0.95, CR from 0.83 to 0.95 and AVE from 0.44 to 0.87; the seven-factor measurement model fit acceptably (χ²/df = 3.55, CFI = 0.928, TLI = 0.922, RMSEA = 0.045, SRMR = 0.032). Multigroup confirmatory factor analysis across the four disciplinary groups supported scalar invariance. Harman's single-factor test put the first factor at 29.39% of total variance.

## How the sample and design constrain the reading

Participants were 1243 undergraduates (601 male, 642 female) recruited by voluntary response from three "Project 985" universities in Beijing; 1395 [[self-report-measures|questionnaires]] were collected, and the effective response rate was 89.10%. Mean GALP was 2.60 (SD = 0.97) on the five-point scale, and mean LGA was 3.40 (SD = 1.51) on the seven-point scale; the means of SUG, behavioral attitude, subjective norm, perceived behavioral control and behavioral intention sat slightly above the five-point midpoint (3.05, 3.08, 3.35, 3.16 and 3.08 respectively). Among the controls, only the science and engineering major showed a significant association, a negative one with perceived behavioral control (β = −0.114, p = 0.020).

The authors read the anxiety result as a "moderating catalyst": under high anxiety, intentions became more consequential rather than less, an interpretation they tie to [[self-regulated-learning]] and to the observation that procrastination does not remove the source of anxiety but postpones confronting it. They also caution that lower GALP is not a proxy for better learning — timely GenAI use may reflect [[cognitive-offloading|over-reliance]] or superficial engagement rather than genuine engagement.

## What this means for practice

- **Treat timeliness and learning quality as separate goals.** The authors state plainly that reduced GALP should not be equated with improved learning outcomes; pair any push for prompt GenAI use with [[critical-thinking|critical evaluation]] of AI output.
- **Work the belief pathways, not just the deadline.** Perceived behavioral control carried the largest negative standardized association with GALP (β = −0.331), so structured, low-stakes practice with GenAI before graded work is the lever the model points to.
- **Use peer norms deliberately.** Subjective norm, operationalized as perceived peer expectations, was negatively associated with GALP (β = −0.171); peer discussion where students share and critique their GenAI use is the corresponding move.
- **Differentiate support by anxiety level.** For high-anxiety students, low-threshold skill training and guided practice may help intention translate into timely action (high-anxiety slope b = −0.268); for low-anxiety students, where the intention–procrastination slope was not significant (b = 0.006, p = 0.915), the emphasis belongs on critical, responsible use.
- **Do not read non-use as procrastination.** Students may limit GenAI for [[academic-integrity]] or pedagogical reasons; the GALP measure deliberately excludes that reasoned choice.

## Limitations

- The design is cross-sectional, so no directional or causal claim holds; the authors note that students who procrastinate less may simply be the ones who adopt GenAI sooner, a possible reverse causality.
- The sample is confined to three elite "Project 985" universities in Beijing, so the findings should not be generalized to non-elite universities, [[vocational-education|vocational colleges]] or institutions in less developed regions.
- Voluntary response sampling leaves self-selection bias: students more interested in or familiar with GenAI may have been more likely to participate.
- The authors also flag that they did not differentiate forms of technology use or learning contexts, that lower GALP is not a learning-quality indicator, and that several scales were newly developed and need independent validation.

## Citation

Li, Z., Huang, J., & Cui, Z. (2026). [GenAI Use and GenAI-Assisted Learning Procrastination in University Students: The Roles of Planned Behavior Constructs and Learning GenAI Anxiety](https://doi.org/10.3390/bs16071256). *Behavioral Sciences*, 16(7), 1256.