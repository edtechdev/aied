---
title: "Access before readiness: constructing and stress-testing a Digital Infrastructure Coverage Index"
created: "2026-09-29T09:15:00-04:00"
updated: "2026-09-29T09:15:00-04:00"
type: article
sources: ['raw/papers/digital-infrastructure-coverage-index-indian-schools-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [secondary analysis]
level: [primary education, secondary]
audience: [policymakers, administrators, researchers]
foundations: [computational-thinking, ai-education, curriculum-design]
institutions: [educational-policy-ai, governance]
ethics: [digital-divide, equity-in-ai-education, global-south]
assessment: [educational-measurement]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-29"
    agent: hermes-agent
---

> **Synthesis:** Agray (2026) builds a Digital Infrastructure Coverage Index from the three SDG 4.a.1-aligned items in UDISE+ 2024–25 — a functional computer for [[pedagogy|pedagogical]] purposes, an internet facility and functional electricity — for all 36 States and Union Territories (1,471,473 schools), as India introduces [[computational-thinking]] and artificial intelligence from Class 3. The measure is coherent (α = 0.83) and its ordering survives 15 specifications (Spearman ρ ≥ 0.94), 10,000 Monte Carlo draws, simulated misclassification, an independent national survey and the next census round. Nationally 618,789 schools (42.1%) lack a pedagogical computer, 537,486 (36.5%) no internet and 119,412 (8.1%) no functional electricity: devices and connectivity, never electrification, bind. The sharpest lesson for [[educational-measurement]] is that a widely cited ICT-laboratory functionality rate fails every scale diagnostic because its denominator is selected on the outcome. Coverage is a precondition, not readiness, so the index speaks to the [[digital-divide]], [[equity-in-ai-education]] and the [[global-south]], not to pedagogy.

## Key Findings

1. Three UDISE+ items form one coherent dimension: Cronbach's α is 0.83, a single principal component explains 76.7% of the variance, and inter-item correlations run from 0.57 to 0.72.
2. The ordering survives 15 named specifications (Spearman ρ never below 0.94), 10,000 Monte Carlo draws (median ρ = 0.967) and misclassification of up to 10 per cent (mean ρ = 0.991).
3. Devices bind and electricity does not: 618,789 schools (42.1%) lack a pedagogical computer against 119,412 (8.1%) without functional electricity, the weakest facility in no State.
4. At least 141,428 schools (9.6%) have a connection but nothing to connect, and eleven units show more than 40 points of imbalance between their best and worst facility.
5. The program-based ICT-laboratory rate correlates only 0.17 with the index, has sampling adequacy 0.47 and loads 0.95 on a second component, so it cannot be composited.

## Constructing the index

The construct is deliberately narrow: the proportion of a jurisdiction's schools holding each of the three physical preconditions for screen-based instruction, from UDISE+ Table 2.5 on a common denominator and a common date. The index is the distance-to-target arithmetic mean of the three percentages, DICI = (I1 + I2 + I3)/300, so 1 means universal coverage and 1 − DICI the mean shortfall. Because arithmetic aggregation compensates fully, every score is reported beside its binding constraint and its imbalance. Equal weights are normative — no facility substitutes for another in a plugged classroom — and coincide with the data-driven component weights to within two hundredths. Every value was transcribed twice, by hand and by parsing the PDF text layer; all 216 values used match and all 23 columns sum to the printed India row. The [[quantitative-research]] protocol follows the OECD/JRC handbook in full.

## Levels and the binding constraint

Across the 36 units the unweighted mean coverage is 68.1% for pedagogical computers, 69.2% for internet and 90.2% for functional electricity; school-weighted national figures are 57.9%, 63.5% and 91.9%. The 10.1-point computer gap arises because small, well-provisioned Union Territories count as heavily as Uttar Pradesh in an unweighted mean. In absolute terms 618,789 schools lack a pedagogical computer, 537,486 lack internet and 119,412 lack electricity, and five States — Uttar Pradesh, Bihar, West Bengal, Rajasthan and Madhya Pradesh — hold 61.9% of the national computer deficit. Crossing the index level with its balance yields a four-way typology for sequencing investment: Consolidate, Targeted, Sequenced and Full-stack build. The fourteen Sequenced units hold 61.9% of India's schools, and the marginal facility differs within them — devices first in Bihar, connectivity first in West Bengal. For [[k-12]] [[curriculum-design]], rollout is an infrastructure question.

## Robustness and validation

Across fifteen specifications varying normalization, weighting, aggregation and indicator definition, Spearman's ρ never falls below 0.94 and Kendall's τ below 0.82; only the fully non-compensatory minimum-pillar index and the removal of computers or internet move any unit by more than eight places. In the Monte Carlo experiment the median ρ is 0.967, weights account for 55.7% of the variance in ρ, and adjacent mid-table units are frequently indistinguishable. All four pre-specified associations carry the expected sign and survive Holm correction: retention grades 1–8 (r = 0.73), retention 1–10 (r = 0.75), log per-capita income (r = 0.56) and secondary dropout (r = −0.48, but −0.13 when school-weighted). The post hoc PARAKH 2024 check corroborates the ordering, r = 0.77 for internet and 0.74 for computers, though agreement on levels is weak and weakest among the largest States. All inferences are ecological, so [[educational-policy-ai]] sequencing should not read them causally.

## What this means for practice

- **Instructors.** Check the device before planning any plugged activity: 42.1% of schools (618,789) lack a functional pedagogical computer, so plan the unplugged fallback as the default.
- **Administrators and institutions.** Sequence devices before connectivity: at least 141,428 schools have a connection and nothing to connect, and the binding facility differs across the fourteen Sequenced units.
- **Policymakers.** Target absolute deficits, not rates: the unweighted State mean overstates computer coverage by 10.1 points, and selecting the 139 districts with the largest non-functional laboratory backlog captures 59.5% of it against 39.1% under a below-50% rate rule.

## Limitations

- The unit of analysis is the State: with n = 36 all inferences are ecological and only correlations above about 0.45 are detectable at 80% power, so non-significant differences are inconclusive.
- The indicators are binary presence flags, so the index cannot distinguish one working computer from a laboratory, nor an internet facility from a connection fast enough for a classroom.
- The data are [[self-report-measures|self-reported]] and aggregated, so random misclassification was tested but systematic State-level conventions cannot be; Meghalaya's figure of 28.1% functional electricity awaits field verification.

## Citation

Agray, S. K. (2026). [*Access before readiness: constructing and stress-testing a Digital Infrastructure Coverage Index for Indian schools as artificial intelligence and computational thinking enter the curriculum from Class 3*](https://osf.io/7yzns)