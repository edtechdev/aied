---
title: Fair and explainable educational recommendations with a hybrid Graph-GRU framework
created: 2026-06-03
updated: 2026-08-07
type: article
tags: [ai-education, bias-mitigation, learning-analytics, personalized-learning]
sources: ['raw/papers/caeai-fair-recommendations.md']
confidence: medium
---

> **Synthesis:** Fair and explainable educational recommendations with a hybrid Graph-GRU framework

## Key Findings

- The paper introduces the **Hybrid HKG-GRU framework**, combining heterogeneous knowledge-graph embeddings with sequential (GRU) modeling to capture both the relational structure of course materials and the temporal dynamics of learner interactions.
- Evaluation on **Moodle LMS logs from 152 students, 59 resources, and approximately 150,000 interactions** achieved strong predictive performance with **HR@10 = 0.68 and MRR = 0.41**.
- The framework integrates three responsibility-oriented contributions: **multi-objective training with Group Distributionally Robust Optimization (GroupDRO)** for fairness, **Maximum Marginal Relevance (MMR) reranking** to reshape exposure patterns, and built-in **model-centric explainability** through path-based and counterfactual analyses.
- Results showed high intra-list diversity and moderate catalogue coverage, with **moderate counterfactual stability** for many learners (median CR@10 = 1.0), although catalogue-level popularity bias remained evident.
- The work addresses **popularity bias and cold-start fairness** in educational recommenders, where students with limited participation histories risk receiving less reliable support while popular resources dominate recommendation lists.

## Study Design & Method

The study targets a known failure of accuracy-focused recommenders: students with limited participation histories receive less reliable support, while highly popular resources may dominate lists and limit access to other useful materials. The hybrid architecture addresses this by modeling course-material structure and learner sequences jointly, then applying GroupDRO training to make performance robust across learner groups, MMR reranking to diversify exposure, and path-based and counterfactual explainability to make recommendations auditable.

## Implications for AI in Education

For [[personalized-learning]] platforms, the work demonstrates that fairness, diversity, and explainability can be engineered into recommenders without sacrificing predictive accuracy, which matters for [[equity]] in resource-constrained and cold-start settings. The persistence of catalogue-level popularity bias even after intervention shows that bias mitigation is partial and requires ongoing measurement. The model-centric explanations are intended to support more transparent educational recommendation, consistent with [[human-in-the-loop-ai]] oversight of automated learning-resource navigation.

## Connected Concepts

## Connected Articles


## Citation

Evangelista, E., & Bukhari, S. M. S. (2026). [*Fair and explainable educational recommendations with a hybrid Graph-GRU framework*](https://doi.org/10.1016/j.caeai.2026.100643).
