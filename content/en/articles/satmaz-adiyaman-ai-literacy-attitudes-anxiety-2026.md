---
title: "AI literacy is directly associated with positive attitudes and indirectly associated with negative attitudes through AI anxiety: a cross-sectional study of preservice teachers"
published: "2026-10-22"
created: "2026-10-28T12:14:20-04:00"
updated: "2026-10-28T12:14:20-04:00"
type: article
foundations: [ai-literacy, ai-education, teacher-ai-competency]
pedagogy: [anxiety-and-stress]
technology: [ai-technologies]
assessment: [self-report-measures]
methods: [quantitative-research]
research_method: [survey]
level: [teacher education, higher ed]
audience: [faculty developers, instructors]
page_kind: [evaluation]
sources: ['raw/papers/satmaz-adiyaman-ai-literacy-attitudes-anxiety-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1946898"
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

> **Synthesis:** Satmaz and Adiyaman (2026) asked whether AI anxiety statistically accounts for part of the association between preservice teachers' AI literacy and their attitudes toward AI, on the premise that favorable and unfavorable evaluations are separate dimensions. In one wave of questionnaires from 335 preservice teachers at a single faculty of education in Turkey in May 2026, AI literacy correlated 0.290 with positive attitudes and -0.150 with negative attitudes, while AI anxiety correlated 0.667 with negative attitudes and -0.012, not significant, with positive attitudes. Two PROCESS Model 4 models found a significant indirect path through anxiety for negative attitudes (B = -0.1237, 95% CI [-0.2065, -0.0398]) and none for positive attitudes (B = -0.0056, 95% CI [-0.0306, 0.0151]). Every variable was measured at once, so these paths decompose concurrent correlations; the authors' own reversed models show the data cannot say whether anxiety precedes negative attitudes or follows them.

## Key Findings

1. AI literacy correlated -0.178 with AI anxiety, 0.290 with positive attitudes, and -0.150 with negative attitudes; AI anxiety correlated 0.667 with negative attitudes and -0.012, non-significant, with positive attitudes (all others p < 0.01).
2. AI literacy was negatively associated with AI anxiety, B = -0.1775, SE = 0.0569, β = -0.169, p = 0.0020.
3. AI anxiety was strongly associated with negative attitudes, B = 0.6968, β = 0.659, p < 0.001, while the direct path from literacy to negative attitudes was not, B = -0.0328, p = 0.4790.
4. The total association between literacy and negative attitudes was B = -0.1565, p = 0.0100, and the indirect association through anxiety was B = -0.1237, 95% CI [-0.2065, -0.0398].
5. For positive attitudes, literacy retained a direct association, B = 0.2674, β = 0.303, p < 0.001, anxiety was unrelated, B = 0.0315, p = 0.4849, and the indirect association was B = -0.0056, 95% CI [-0.0306, 0.0151].
6. A direct bootstrap contrast confirmed the two indirect associations differed, B = -0.1181, BootSE = 0.0415, 95% CI [-0.2007, -0.0394].
7. Rescoring literacy on the nine non-reverse-worded items kept the indirect association significant (B = -0.0929, 95% CI [-0.1736, -0.0083]) but rendered the total association with negative attitudes non-significant (B = -0.0861, p = 0.122).

## Two dimensions, one questionnaire

The design treats positive and negative evaluations as distinct rather than opposite, following work in which the positive side reflects perceived utility and the negative side reflects anxiety and concern. Three Turkish adaptations were used: a 12-item AI literacy scale covering awareness, usage, evaluation, and ethics on a 7-point metric, a 16-item AI anxiety scale on 5 points, and a 12-item attitude scale with separate positive and negative subdimensions. Internal consistency was good for anxiety (α = 0.919) and negative attitudes (α = 0.849), acceptable for positive attitudes (α = 0.753), and weaker for literacy (α = 0.744; ω = 0.795), with two weak reverse items. With anxiety and negative attitudes correlated 0.667, the authors report HTMT = 0.746, 95% CI [0.667, 0.817], below the 0.85 criterion but sitting near it.

## What a one-wave indirect effect can carry

PROCESS Model 4 with 5,000 bootstrap resamples and prior AI training as a binary covariate produced the pattern in the title. All measures came from one questionnaire administered over three days, so the model imposes an order the data cannot verify, and the authors test that ordering directly. Specifying anxiety as predictor, literacy as mediator, and negative attitude as outcome returned a null indirect effect (B = 0.0053, 95% CI [-0.0105, 0.0259]); specifying literacy as predictor, negative attitude as mediator, and anxiety as outcome returned a significant one (B = -0.0966, 95% CI [-0.1827, -0.0133]); a third reversal with positive attitude as predictor and literacy as outcome was null. The plain reading is that anxiety and negative attitudes are entangled in a way this design cannot orient.

## A small mediator, a strong path, a fragile total effect

The models differ greatly in explanatory weight. The mediator equation accounts for 3.7% of variance in anxiety, with a standardized path of -0.169, while the negative-attitude equation accounts for 44.7%, carried by anxiety at β = 0.659. [[ai-literacy|AI literacy]] is therefore a weak predictor of anxiety and a modest direct predictor of positive attitudes, not a lever explaining much of either evaluation. One robustness check cuts further: the nine-item rescoring kept the indirect association but made the total association non-significant, so the raw link being decomposed is itself fragile. Prior AI training, reported by 96 participants (28.7%), was unrelated to anxiety or either attitude in every model, which the authors present as a limit of the measure, not evidence that training does nothing. Grade level and department were not controlled.

## What this means for practice

For instructors in [[teacher-education|teacher education]], literacy content and anxiety content are different work: coursework on how these systems operate may move favorable appraisal without touching the concerns behind unfavorable appraisal, so job replacement, privacy, bias, and loss of control need explicit treatment rather than being assumed away by competence. For program designers, the null on prior training is a prompt to specify what training contained, not a reason to drop it. None of this is demonstrated by a single-wave survey that cannot show coursework changing either evaluation.

## Limitations

- A volunteer sample from one faculty of education in Turkey; the number of students approached was not recorded, so no response rate can be calculated, and generalization beyond similar programs is untested.
- All focal variables are [[self-report-measures|self-reports]] in a single instrument, and both anxiety and negative attitudes capture negatively valenced responses to AI, with the HTMT confidence interval reaching 0.817.
- The AI literacy composite reached only α = 0.744 with two weak reverse-worded items, and the total association with negative attitudes did not survive the nine-item rescoring.
- Prior AI training was binary, and the instruments measured general AI literacy, anxiety, and attitudes rather than pedagogical AI attitudes, integration intentions, or classroom use.

## Citation

Satmaz, I., & Adiyaman, M. (2026). [*AI literacy is directly associated with positive attitudes and indirectly associated with negative attitudes through AI anxiety: a cross-sectional study of preservice teachers*](https://doi.org/10.3389/fpsyg.2026.1946898). *Frontiers in Psychology*, 17, 1946898.
