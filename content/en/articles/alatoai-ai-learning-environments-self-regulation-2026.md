---
title: "Exploring the Impact of AI-Based Learning Environments on Student Self-Regulation and Adaptive STEM Learning"
created: "2026-09-25T20:37:23-04:00"
updated: "2026-09-25T21:52:24-04:00"
type: article
published: "2026"
foundations: [critical-thinking]
pedagogy: [metacognition, self-regulated-learning, transfer-of-learning]
technology: [adaptive-learning]
assessment: [educational-measurement]
methods: [network-analysis, mixed-methods-research]
research_method: [instrument development, interviews, network analysis]
discipline: [science education, stem education]
level: [secondary]
audience: [researchers, instructors, educational technology developers]
page_kind: [evaluation]
sources: ['raw/papers/alatoai-ai-learning-environments-self-regulation-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** This study asks how AI-supported STEM environments shape secondary students' [[self-regulated-learning|self-regulation]], and which [[metacognition|metacognitive]] components best predict adaptive STEM performance. Working with 649 secondary students in Saudi Arabia (338 male, 311 female; mean age 15.99 years) who learned through the national Madrasati platform, the authors built and validated the AI-STEM-MLCS, a 45-item instrument with four dimensions: AI-based metacognitive awareness (AMA), AI-enhanced self-regulated learning (ASRL), [[transfer-of-learning|cognitive transfer and adaptability]] (CTA), and creative and critical AI-STEM reasoning (CCAR). Confirmatory factor analysis supported this four-factor structure with excellent fit (CFI = 0.983, RMSEA = 0.019), and every subscale showed strong internal consistency (McDonald's ω = 0.888–0.905). Network analysis placed CTA and ASRL at the structural center of the meta-learning network, and regression modeling showed the four dimensions predicted 68% of the variance in self-regulated learning performance, with AMA strongest. The authors conclude that AI feedback supports STEM learning mainly by strengthening metacognitive awareness and strategic transfer, and caution that the scale's Saudi-specific validation limits direct transfer of its structure and coefficients.

## Key Findings

- 649 secondary students in Saudi Arabia completed the AI-STEM-MLCS; 45 items across four subscales survived expert review and factor analysis.
- Confirmatory factor analysis on a 324-student subsample supported the four-factor model (CFI = 0.983, TLI = 0.982, RMSEA = 0.019, SRMR = 0.044).
- Subscale reliability was strong (McDonald's ω = 0.888–0.905; Cronbach's α = 0.887–0.904), with two-week test-retest stability at ICC = 0.751–0.900.
- The four dimensions explained 68% of the variance in self-regulated learning scores (R² = 0.68, F[4, 55] = 31.74, p < 0.001).
- AI-based metacognitive awareness was the strongest predictor (β = 0.38, p < 0.001), followed by cognitive transfer and adaptability (β = 0.29, p = 0.008).
- Creative and critical AI-STEM reasoning did not predict the behavioral criterion (β = 0.14, p = 0.135); networks showed dense positive edges with CTA and ASRL central.

## Building the AI-STEM-MLCS

The study used an exploratory sequential [[mixed-methods-research|mixed methods]] design in Saudi Arabia in 2025, following an eight-step scale development procedure. A systematic literature review generated 35 items, and online interviews with 20 secondary students (9 female, 11 male; 30 to 37 minutes each) added 32, yielding 131 codes, 15 initial categories, 8 subcategories and 4 overarching dimensions. After removing seven overlapping items the pool held 50 items. A panel of 10 experts then applied content validity ratios (items at or above 0.62 retained) and content validity indices (I-CVI at or above 0.78; S-CVI/Ave at or above 0.90), removing five items. The final 45-item instrument uses a 5-point Likert format and includes four reverse-scored items to limit acquiescence bias.

## Psychometric structure and reliability

Data adequacy was satisfactory (KMO = 0.865; Bartlett's test χ² = 5468.85, p < 0.0001), and the sample split into subsamples of n = 325 and n = 324. Exploratory factor analysis recovered four factors explaining 41.06% of the variance in total: AMA (eigenvalue 5.01, 11.93%), CTA (4.64, 11.05%), ASRL (4.11, 9.79%) and CCAR (3.48, 8.28%); three items loading below 0.40 were dropped. Confirmatory factor analysis supported both first-order and second-order models, the latter indicating a single higher-order meta-learning capability. Against the AI-SSRSML Scale, correlations ranged from r = 0.35 to 0.83 (p < 0.01), with total scores correlated at r = 0.83.

## What predicts adaptive STEM learning

The regression model was significant (F[4, 55] = 31.74, p < 0.001) and explained 68% of the variance in self-regulated learning performance. AMA contributed most (β = 0.38, p < 0.001), followed by CTA (β = 0.29, p = 0.008) and ASRL (β = 0.21, p = 0.040); CCAR was not significant (β = 0.14, p = 0.135). Multicollinearity was not a concern (VIF below 2), and inter-factor correlations ranged from r = 0.41 to 0.63. The authors read CCAR through the revised Bloom's taxonomy: evaluation and creation surface in distal outcomes such as reasoning quality rather than in proximal self-regulation indices. Their practical claim is that [[intelligent-tutoring|AI tutoring]] and [[adaptive-learning|adaptive]] feedback raise adaptive STEM performance mainly by prompting learners to monitor, recalibrate and reuse strategies.

## The network view of self-regulation

Exploratory graph analysis modeled dimensions as nodes in a Gaussian graphical model estimated through the graphical LASSO, with communities detected by Walktrap. Edge weights ranged from approximately 0.40 to 0.64, and no weak or negative associations were retained. The strongest links joined growth mindset endorsement and metacognitive planning (r = 0.64), CTA and ASRL (r = 0.63), ASRL and motivational resilience (r = 0.61), and motivational resilience and self-monitoring and reflection (r = 0.60). [[network-analysis|Network analysis]] serves here as a structural check rather than causal evidence: the dense, positive pattern supports convergent validity and shows that the two instruments capture related but non-redundant aspects of learning with AI.

## What this means for practice

- Treat metacognitive awareness as the primary lever: activities that make students examine errors and compare AI responses with their own reasoning carried the largest predictive weight.
- Require strategy revision and reuse across problem contexts, since transfer and adaptability was the second strongest predictor of adaptive performance.
- Use the scale's dimensions as a diagnostic to locate strengths and gaps across meta-learning rather than reporting one global score.
- Assess [[critical-thinking|critical and creative reasoning]] with reasoning-quality or creative problem-solving tasks, not behavioral self-regulation measures.

## Limitations

- All 649 participants were Saudi secondary students using Madrasati, so the structure and coefficients may not generalize; the authors argue power distance may inflate AMA and ASRL endorsement while attenuating CCAR.
- Measurement invariance was not tested and the scale was administered in Arabic, so cross-cultural comparison requires translation, back-translation and multi-group factor analysis.
- It is a [[self-report-measures|self-report]] measure, capturing perceived capability rather than observed strategy use during AI interaction.
- The regression and correlation analyses report small degrees of freedom (F[4, 55]; n = 60 for the correlations) despite a 649-student validation sample, so the weights are provisional.

## Connected Concepts

- [[metacognition]]
- [[self-regulated-learning]]
- [[transfer-of-learning]]
- [[adaptive-learning]]
- [[educational-measurement]]
- [[network-analysis]]
## Connected Articles

- [[banihashem-ai-srl-systematic-mapping-review-2025]] — maps the AI and self-regulated learning literature that this instrument was built to serve.
- [[ai-metacognition-three-level-meta-analysis-2026]] — meta-analytic evidence on whether AI promotes metacognition, the mechanism the AMA factor targets.
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — classroom evidence on an adaptive AI STEM program, complementing this scale's measurement focus.
- [[aigc-affordance-student-self-regulation-2026]] — examines how generative AI affordances relate to student self-regulation in a different educational level and system.

## Citation

Alatoai, Ataallh Aodh; Alshahri, Ali Saleh. (2026). *[Exploring the Impact of AI-Based Learning Environments on Student Self-Regulation and Adaptive STEM Learning](https://doi.org/10.1002/jcal.70297)*. Journal of Computer Assisted Learning, 42, e70297. https://doi.org/10.1002/jcal.70297