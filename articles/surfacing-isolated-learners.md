---
title: "Surfacing Isolated Learners with Outcome-Independent Mediation of Feedback between Teachers and Students Using AI"
created: 2026-06-01
updated: 2026-06-01
type: article
tags: [learning-analytics, teacher-role, higher-ed, student-experience, feedback-loop, ai-literacy]
sources: [raw/papers/2605.29240.md]
confidence: medium
---

# Surfacing Isolated Learners

**Authors:** Junsoo Park, Youssef Medhat, Htet Phyo Wai, Ploy Thajchayapong, Ashok K. Goel (2026) — Georgia Tech

## What It Is

An **interpretable decision layer** that ranks course topics needing instructor attention without using grades or post-hoc outcome labels. The system combines three process-level signals to identify which topics (and which students) need intervention before formal assessments.

## How It Works

Three signals feed into a topic priority score:

1. **Gap prevalence (Rₜ)**: Fraction of students showing difficulty with topic t, detected from Jill Watson interaction traces
2. **Survey disagreement (Dₜ)**: Difference between observed difficulty and student self-reports — captures blind spots
3. **Teacher friction (F)**: Unresolved instructor concerns coded from semi-structured interviews

Topic priority: `Pₜ = 0.70·Rₜ + 0.20·Dₜ + 0.10·F`

Output is a ranked set of topic priorities with per-topic decision records explaining each ranking.

## Key Results

- **Instructor alignment**: Top-5 mediated topics overlapped with instructor concerns on 3/5 topics; Spearman ρ = 0.80
- **Student difficulty alignment**: ρ = 0.46 (p = .048) — captures something beyond simple difficulty surveys
- **Isolated learner detection**: Multi-signal integration AUC = 0.96 vs. 0.91 for gap prevalence alone — identified 2 isolated learners not detected by any single signal
- **Construct validity**: Reflective thinking, help-seeking, and self-efficacy aligned with topic understanding scores

## Why It Matters

This is one of the first systems to operationalize **human-AI co-agency** in classroom settings. The interpretable outputs help teachers trust and act on AI-provided priorities when grades are not yet available. By combining multiple weak signals, the system surfaces students who would otherwise be invisible — a critical capability for equitable instruction.

## Limitations

- Single graduate CS course (n=279 surveys, n=5 instructor interviews)
- Preliminary findings — not yet generalizable across diverse contexts
- Weights set by researcher co-design, not learned from data

## Related Pages

- [[learning-analytics-dashboards]] — Extends analytics with interpretable topic prioritization
- [[teacher-ai-coagency]] — Operationalizes human-AI co-agency in classroom feedback
- [[jill-watson]] — Built on Jill Watson infrastructure for student interaction data
- [[student-modeling]] — Multi-signal integration surfaces learners invisible to single-signal models
- [[formative-feedback-systems]] — Provides outcome-independent feedback before grades are available
- [[isolated-learner-detection]] — First system to explicitly target isolated learner identification

## Citation

Park, J., Medhat, Y., Wai, H. P., Thajchayapong, P., & Goel, A. K. (2026). *Surfacing isolated learners with outcome-independent mediation of feedback between teachers and students using AI*. arXiv:2605.29240. HAI-Agency Workshop, AIED 2026.
