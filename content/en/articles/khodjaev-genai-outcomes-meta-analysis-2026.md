---
title: "A meta-analysis of the effects of generative artificial intelligence on learning, cognitive, and linguistic outcomes"
published: "2026-10-21"
created: "2026-10-28T12:16:14-04:00"
updated: "2026-10-28T12:16:14-04:00"
type: article
foundations: [ai-education, interpreting-and-applying-aied-research]
pedagogy: [learning-theories, transfer-of-learning]
technology: [generative-ai]
assessment: [learning-gains]
methods: [meta-analysis-systematic-review]
research_method: [secondary analysis]
audience: [researchers, instructors]
page_kind: [synthesis]
sources: ['raw/papers/khodjaev-genai-outcomes-meta-analysis-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1971476"
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

> **Synthesis:** Khodjaev, Masalimova, Chistyakov and Ay (2026) pooled 68 Hedges' g effect sizes from 58 studies in a three-level random-effects model and reported a large average advantage for [[generative-ai|generative AI]] over non-AI comparison conditions, g = 0.864, 95% CI [0.720, 1.009]. The average is not the finding to take away. Heterogeneity was substantial (I² ≈ 87.9%), the 95% prediction interval [−0.213, 1.942] crosses zero, three of seven moderators cleared p < .05 uncorrected and none survived Holm correction, and PET-PEESE pushed the bias-corrected effect as low as g = 0.258. It establishes a positive average in a corpus that is short, higher-education and benchmarked against business-as-usual teaching, not the effect an instructor should expect.

## Key Findings
1. GenAI-supported instruction pooled to g = 0.864 (SE = 0.072, 95% CI [0.720, 1.009], t(57) = 11.99, p < .001) across 68 effect sizes from 58 studies and 6,941 participants.
2. Heterogeneity was substantial, Q(67) = 416.85, p < .001, I² ≈ 87.9%, and the 95% prediction interval ran from −0.213 to 1.942.
3. Outcome domain split subgroups at p < .05 (Qb = 9.45, df = 2, p = .009) but not under Holm correction (padj = .062): linguistic g = 1.102 (k = 23), learning g = 0.861 (k = 29), cognitive g = 0.535 (k = 16).
4. Educational level did the same (Qb = 6.50, p = .039, padj = .233): primary g = 1.311 on k = 7, higher education g = 0.855 (k = 50), secondary g = 0.612 (k = 11).
5. Cultural orientation showed the widest raw gap, vertical-collectivist g = 0.926 (k = 61) against horizontal-individualist g = 0.454 (k = 6), Qb = 4.11, p = .043, padj = .233, holding in two adjusted models (b = 0.413, p = .041; b = 0.500, p = .032) and failing in a third (b = 0.427, p = .115).
6. Against an active alternative pedagogy the effect was g = 0.765 (k = 32), against g = 1.014 (k = 25) for business-as-usual controls, a contrast that was not significant (Qb = 1.96, p = .161).
7. Egger's test found funnel asymmetry (t(66) = 3.16, p = .002) although trim-and-fill imputed no studies (k0 = 0); PET-PEESE gave g = 0.258 and g = 0.450, and a three-parameter selection model gave g = 0.361, 95% CI [−0.059, 0.781], p = .092.

## The corpus behind the average
The May 2026 search of Web of Science and Scopus produced 3,254 records, 189 full texts, 108 studies with computable statistics, and 58 studies once records with only affective, motivational or self-efficacy outcomes were removed. Coding agreement was kappa = 0.82, but screening of titles and abstracts was never duplicated. Composition matters: 50 effect sizes came from [[higher-ed|higher education]] samples, 57 from independent-groups comparisons, 40 from ChatGPT-based tools, and 61 from vertical-collectivist settings. Intervention duration and outcome instrument were coded and dropped for inconsistent reporting, so the two variables most likely to explain whether a gain appears enter no test.

## What the heterogeneity and the appraisal license
An I² near 88% with a prediction interval crossing zero means the confidence interval describes the precision of an average, not the range a teacher could meet. The between-study variance component sat at its boundary (τ²₃ = 0.0000, 95% CI [0.0000, 0.2808]), which they read as heterogeneity lying across outcome measures, not across studies. Reversals exist: Ji et al. (2025) found ChatGPT-assisted collaborative learning producing lower critical-thinking scores than unassisted work, and Sapan and Uzun (2024) found traditional instruction beating a ChatGPT condition in EFL writing. The pooled figure averages across them rather than contradicting them. The quality appraisal carries less than the paper implies: the method section names the nine-item JBI checklist, the results report a Cochrane RoB 2 moderator (QM(df = 1) = 2.34, p = .126), no distribution of ratings appears anywhere, and the identical statistic is given for tool type in Table 3.

## Moderators: what moved, and on how many effect sizes
Three contrasts cleared p < .05 and none cleared Holm, yet the discussion declares its educational-level hypothesis supported at padj = .233. Culture carries the most argument and the least data: six effect sizes from three countries, and no joint model could be fitted because that subgroup held no primary-level or STEM samples. Tool type (Qb = 2.34, p = .126) and experimental design (Qb = 0.01, p = .932) explained nothing, so the synthesis offers no evidence that any platform or prompting strategy produces the advantage. The pattern worth holding is the comparison condition: the advantage shrank from 1.014 against business-as-usual instruction to 0.765 against time-matched alternatives, so part of the pooled effect is the difference between having help and having none.

## What this means for practice
For instructors the reading is a boundary, not a number: nothing here predicts a given course, and the largest subgroup averages, [[language-learning|linguistic outcomes]] (g = 1.102) and language education (g = 1.059), are descriptive, not confirmed. GenAI looks strongest against no help at all and much weaker against a designed human or non-AI alternative, so a gain should not be credited to the model when the counterfactual was good teaching. Faculty developers should treat g = 0.864 as a hypothesis for their own setting and pair rollout with local measurement.

## Limitations

- The culture contrast driving the discussion rests on six effect sizes from three countries in a corpus that is 89.7% vertical-collectivist, so the horizontal-individualist average of g = 0.454 is imprecise.
- The risk-of-bias procedure changes between method and results and no rating distribution is reported, so the claim that weaker studies do not drive the estimate is unchecked.
- Eleven one-group pretest-posttest designs were pooled with 57 between-groups effects, and the 6,941 total sums across comparisons sharing participant pools, which the authors concede double-counts.
- The search covered two English-language databases, in a corpus weighted toward 2025 and 2026 publications and earlier models.

## Citation

Khodjaev, B. K., Masalimova, A. R., Chistyakov, A. A., & Ay, Y. (2026). [*A meta-analysis of the effects of generative artificial intelligence on learning, cognitive, and linguistic outcomes*](https://doi.org/10.3389/feduc.2026.1971476). *Frontiers in Education*, 11, 1971476.
