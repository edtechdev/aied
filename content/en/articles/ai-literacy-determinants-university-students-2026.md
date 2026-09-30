---
title: "A Multidimensional Analysis of AI Literacy Determinants: External Resources, Digital Skills, and Psychological Profile Among University Students"
created: "2026-09-30T12:06:49-04:00"
updated: "2026-09-30T12:06:49-04:00"
type: article
sources: ['raw/papers/10.3390_bs16081448.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey]
discipline: [humanities education]
level: [higher ed, undergraduate]
audience: [instructors, faculty developers, researchers, administrators]
foundations: [ai-literacy, theories-and-frameworks, limitations-in-aied-research]
pedagogy: [self-directed-learning, prior-knowledge, anxiety-and-stress, self-efficacy]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures, assessment-validity]
methods: [quantitative-research]
ethics: [digital-divide, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Chow, To, Lam and Lau surveyed 303 undergraduates at a single liberal arts university in Hong Kong in December 2024 and January 2025, and used four-step hierarchical multiple regression to ask what external resources, prior digital competence and psychological profile each add to [[ai-literacy]] when all three are modeled together. Perceived resources and perceived [[teacher-role|teacher]] support entered first and explained 29% of the variance; digital competence added a further 3%; personal innovativeness, technology [[anxiety-and-stress|anxiety]] and growth mindset in technology added a further 6%, giving a total R² = 0.39 with all six predictors significant in the final model. The external predictors stayed significant but attenuated sharply, so institutional provision reads as necessary rather than sufficient. The design is cross-sectional and correlational, so no causal direction is established, and the sample — 46.2% social sciences and 28.4% arts — bounds the claims to humanities and social science students at one institution.

## Key Findings

- **External resources carried the largest single block, but not the whole story.** Perceived resources (β = 0.39) and perceived teacher support (β = 0.22) explained 29% of the variance in AI literacy on entry (R² = 0.29, F = 30.44, p < 0.001; ∆F (2, 298) = 58.13), supporting H1.
- **Prior digital competence added a further 3%.** Entering digital competence raised R² from 0.29 to 0.32 (∆F (1, 297) = 15.10, p < 0.001), with β = 0.26 in Model 3 and β = 0.18 in the final model, supporting H2.
- **Psychological profile added a further 6%.** Personal innovativeness (β = 0.19), technology anxiety (β = 0.15) and growth mindset in technology (β = 0.22) were each significant in the final model (R² = 0.39, F = 23.72, p < 0.001; ∆F (3, 294) = 10.93), supporting H3.
- **The external predictors attenuated but survived.** Perceived resources fell from β = 0.39 in Model 2 to β = 0.15 in Model 4, and perceived teacher support from β = 0.22 to β = 0.15; both remained significant.
- **Technology anxiety changed direction once other determinants were controlled.** Its zero-order correlation with AI literacy was negative (r = −0.14, p < 0.05), yet it predicted β = 0.15 (p < 0.01) in the full model.
- **Subdimension analyses localized that reversal to the evaluative facets.** Technology anxiety was significant for [[critical-thinking|critical evaluation]] (β = 0.14, p < 0.05) and ethical competence (β = 0.20, p < 0.001) and non-significant for technical proficiency, communication proficiency and creative application.

## What was measured and how

All constructs came from one online survey (Qualtrics) of 303 undergraduates (no exclusions), analyzed in SPSS 28 as a four-step hierarchical regression on total AI literacy: covariates (gender, grade level) first, then external resources, then digital competence, then the psychological block. AI literacy was the 25-item [[generative-ai|ChatGPT]] Literacy Scale, scored on five subscales — technical proficiency, critical evaluation, communication proficiency, creative application and ethical competence — averaged into a composite (M = 3.47, SD = 0.70, α = 0.96). External resources were perceived resources (4 items) and perceived teacher support (3 self-designed items); prior digital competence was the 28-item Students' Digital Competence Scale (M = 3.91, SD = 0.57, α = 0.93); and the psychological block comprised personal innovativeness (M = 3.81, SD = 0.74, α = 0.81), technology anxiety (M = 2.46, SD = 0.80, α = 0.93) and growth mindset in technology (M = 4.91, SD = 0.97, α = 0.74). All zero-order correlations were significant: AI literacy correlated with perceived resources at r = 0.50, perceived teacher support at r = 0.41, digital competence at r = 0.50, personal innovativeness at r = 0.48 and growth mindset in technology at r = 0.40.

The authors read the three blocks through social cognitive theory — environmental determinants (perceived resources, teacher support), enactive mastery (prior digital competence) and personal determinants split into disposition, emotion and belief (innovativeness, anxiety, growth mindset) — and through the multi-level [[digital-divide]], where resource inequalities, skill inequalities and outcome inequalities are distinct. That framing makes the incremental-variance question central: a single-domain design can show a determinant is associated with AI literacy, but only a joint model shows it adds anything to the others.

The five subdimension models were all significant, with explained variance from 0.26 to 0.32: technical proficiency (R² = 0.26, F = 12.63), critical evaluation (R² = 0.28, F = 14.04), communication proficiency (R² = 0.31, F = 16.51), creative application (R² = 0.31, F = 16.17) and ethical competence (R² = 0.32, F = 17.42), all p < 0.001. Individual predictors operated selectively. Personal innovativeness predicted technical proficiency (β = 0.26, p < 0.001), critical evaluation (β = 0.15, p < 0.05), communication proficiency (β = 0.13, p < 0.05) and ethical competence (β = 0.13, p < 0.05). Growth mindset in technology predicted four of the five subdimensions, most strongly ethical competence (β = 0.27, p < 0.001). Digital competence predicted critical evaluation (β = 0.19, p < 0.01), creative application (β = 0.17, p < 0.05) and ethical competence (β = 0.20, p < 0.01), but not technical proficiency or communication proficiency. Perceived resources predicted only communication proficiency (β = 0.22, p < 0.001) and creative application (β = 0.17, p < 0.05); perceived teacher support was significant for technical proficiency (β = 0.14, p < 0.05), communication proficiency (β = 0.14, p < 0.05) and ethical competence (β = 0.15, p < 0.05).

## What this means for practice

- **Instructors and educational developers.** Treat infrastructure and access as necessary but not sufficient: the external block explained 29% of the variance, then fell to β = 0.15 for perceived resources and β = 0.15 for perceived teacher support once learner characteristics were controlled. Pair provision with measures aimed at learners themselves.
- **Faculty developers.** Growth mindset in technology was the most consistent psychological predictor (β = 0.22 in the full model; significant for four of five subdimensions, strongest for ethical competence at β = 0.27). Because such beliefs are framed as malleable, embedding effort-and-development messages in existing courses is the broadest-reach, lowest-cost move the study supports.
- **Instructors.** Do not aim to remove technology anxiety wholesale. Its residual association with AI literacy was positive and confined to critical evaluation (β = 0.14) and ethical competence (β = 0.20), and absent from the three performance-oriented dimensions — anxious students were more attentive to what AI might get wrong, not better at operating it. Address debilitating anxiety through low-stakes introduction while preserving the disposition to scrutinize.
- **[[curriculum-design|Curriculum]] and assessment designers.** Match provision to the component it actually moves: perceived resources predicted only communication proficiency (β = 0.22) and creative application (β = 0.17), and digital competence predicted judgment-and-application facets rather than technical proficiency. Fund infrastructure as a targeted measure, not a general remedy.

## Limitations

- The design is cross-sectional and correlational, so causal direction and temporal precedence among external resources, digital competence and psychological profile cannot be confirmed; the authors note the same limitation runs through AI literacy research generally.
- Sampling was non-random and confined to one liberal arts university, with social sciences and arts students making up 74.6% of participants and female students 70.6%. Disciplinary background plausibly tracks both prior digital competence and AI literacy, so the findings characterize humanities and social science students at this institution rather than undergraduates generally, and the authors judge the associations conservative rather than inflated.
- All constructs were [[self-report-measures|self-reported]] in a single instrument at a single time point, raising the possibility of common method variance; the ChatGPT Literacy Scale measures self-perceived rather than demonstrated competence, and no marker variable or formal test of common method bias was run.
- The AI literacy instrument was developed in English and originally validated in Korean, translated into Traditional Chinese without established measurement invariance or cognitive pretesting, and the study captured the learner-perceived environment rather than observed curriculum, instruction or [[assessment|assessment design]].

## Citation

Chow, T. S., To, K., Lam, B. Y. H., & Lau, K. W. (2026). [A Multidimensional Analysis of AI Literacy Determinants: External Resources, Digital Skills, and Psychological Profile Among University Students](https://doi.org/10.3390/bs16081448). *Behavioral Sciences*, 16(8), 1448.