---
title: "What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data"
created: "2026-09-24T09:35:21-04:00"
updated: "2026-09-24T09:35:21-04:00"
type: article
sources: ['raw/papers/synthetic-educational-data-structural-fidelity-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment, secondary analysis]
discipline: [learning sciences]
level: [k 12]
audience: [researchers, learning analytics designers]
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
methods: [ai-ed-evaluation, network-analysis, quantitative-research]
ethics: [privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Inoue and Yasutake (2026) test a structural alternative to the fidelity metrics used to evaluate [[privacy|privacy-preserving]] synthetic educational data: the number of connected components of a weekly proximity graph over learners. Across four annual cohorts of Japanese lower-secondary study-habit logs, the synthetic versions reproduce the level and shape of that weekly partition but vary 2.6 to 4.9 times less across the term than the real cohorts, without exception. The check is calibrated on synthetic data of known construction, and it locates a blind spot in [[ai-ed-evaluation]] that a [[learning-analytics]] platform can act on before any real data is touched.

## Key Findings

1. **Fidelity metrics miss the temporal dimension.** On the platform's pilot, an average 36% of findings reached on synthetic data were confirmed on the real data across twenty-five validation requests, while similar fidelity scores gave different confirmation rates.
2. **The temporal variation is not.** The coefficient of variation of the weekly β0 curve is 0.086 to 0.152 for the synthetic cohorts against 0.399 to 0.539 for the real ones, with no synthetic value reaching a real one at the pre-specified grid.
3. **Movement is also misplaced in time.** The synthetic cohorts raise mean study time in the year's own examination week (week 22 in 2022, week 23 otherwise), while the real cohorts rank that week ninth to fifteenth; rank correlations run from -0.22 to 0.57.
4. **The gap traces to what is disclosed.** Two of the three released study-habit statistics marginalize the same band-by-week matrix, so nothing constrains which band and week are zero together; the real excess co-occurrence of zeros runs from 1.40 to 2.57.
5. **Separability is not fidelity.** A multivariate normal generator separated from its own surrogates more sharply than the real data did, while misstating the level of β0 by between 28% and 143%.

## The structural check

The proposed quantity is β0, the number of connected components of a graph joining learners whose weekly profiles fall within a Euclidean threshold ε: high when those profiles are mutually dissimilar, low when they concentrate. Tracked across weeks it describes reorganization rather than level, which is what per-variable summary statistics never compare. The authors prefer it to alternatives because it is fixed by the graph alone, with no optimization and no random seed, unlike modularity maximization; because it stays defined when the graph is disconnected, as these graphs are, with between a seventh and a third of learners alone in a component; and because it describes the partition rather than counting edges. The surrogate comparison needs only a synthetic dataset and permutations of itself.

## The gap the metrics miss

Analyzing four annual cohorts from 2022 to 2025 of 117 to 120 learners over eighteen ISO weeks, both versions at a common working point ε = 0.68, the arrangement looks healthy under the usual comparison: partition descriptors agree closely in two of four cohorts, and the association between majority-component membership and study volume is negative in every version, from -0.97 to -0.63. The temporal picture does not hold up. The coefficient of variation of the weekly β0 curve is 0.086 to 0.152 for the synthetic cohorts and 0.399 to 0.539 for the real ones, and the two ranges do not overlap. A synthetic curve at or below 0.15 is close to flat, describing a cohort whose division into groups barely changes. The separation holds at all four thresholds on the pre-specified grid.

## Why it happens, and whether the check can be passed

Two calibrations explain the gap. Injecting all-zero learners per week moves the surrogate test proportion from 0.800 at 8.8 such learners to 0.015 at 28.8 and 0.000 at 38.8, while the real cohorts carry 18.2, 7.4, 2.1 and 4.4. The measured variation of weekly mean study time is 0.33 to 0.61 in the real cohorts against 0.12 to 0.18 in the synthetic ones, and the variation of β0 moves in step with it. The released summary explains why: a zero rate over band-by-week combinations and two entropies, one over bands and one over weeks, each marginalizing over the other axis, so nothing constrains which band and which week are zero together. On synthetic data of known construction, only a Gaussian copula reproduces the weekly values, landing within 3.5% of the real coefficient of variation; a multivariate normal separated from its own surrogates more sharply than the real data did while misstating the level of β0 by 28% to 143%.

## What this means for practice

- **Learning analytics designers.** Run the surrogate comparison before releasing a synthetic dataset: it needs only the synthetic data and permutations of itself, and it flagged three of these four cohorts without real data.
- **Researchers.** Do not read agreement on summary statistics as temporal fidelity, and fix one common working point before comparing two datasets: analyzing each side at its own threshold reversed a contrast in the authors' own earlier round.
- **Platform operators.** Check whether released statistics constrain how weeks differ: two of the three here marginalize the same band-by-week matrix, and the real cohorts' excess co-occurrence of zeros, 1.40 to 2.57, is not reproduced.
- **Course teams.** Treat claims about week-to-week change with caution: the synthetic cohorts placed their largest weekly movement in examination weeks the real cohorts ranked ninth to fifteenth of eighteen.

## Limitations

- The evidence comes from one school subject at one institution: four cohorts of 117 to 120 learners over eighteen weeks each, through one platform, and the size of the gap is not claimed to generalize.
- The surrogate removes association between learners and association among a learner's own bands at the same time, so a separation does not identify which of the two is responsible.
- Features are standardized using each dataset's own dispersion, so a generator that misstates the spread of a band is not penalized by any quantity reported here.

## Connected Concepts

- [[learning-analytics]]
- [[ai-ed-evaluation]]
- [[research-methods-aied]]
- [[educational-measurement]]
- [[quantitative-research]]
- [[network-analysis]]
- [[privacy]]
- [[machine-learning]]
- [[limitations-in-aied-research]]
- [[edtech-platform]]

## Connected Articles

- [[datacanvas-edu-synthetic-data-business-analytics-2026]] — DataCanvas-EDU: An Agentic Framework for Instructor-Guided Synthetic Data Generation in Business Analytics Education
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Privacy-Preserving Heterogeneous Multi-LLM Federated Inference for Cognitive Diagnosis
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federated and Explainable Learning Analytics for Privacy-Preserving Academic Risk Modeling Across Heterogeneous Educational Institutions
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech
- [[llm-unlearning-math-privacy]] — Balancing AI responsibility with privacy, safety, and utility: Unlearning in large language models for mathematics education
- [[temporal-smoothness-debiased-kt]] — Temporal Smoothness Doubly Robust Learning for Debiased Knowledge Tracing
- [[skill-acquisition-without-temporal-info]] — Estimating Learners' Skill Acquisition Without Temporal Information

## Citation

Inoue, H., & Yasutake, K. (2026). [What fidelity metrics miss: A structural check on synthetic educational data](https://arxiv.org/abs/2609.27265). arXiv preprint.