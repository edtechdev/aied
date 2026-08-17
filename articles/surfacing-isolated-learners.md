---
title: Surfacing Isolated Learners with Outcome-Independent Mediation of Feedback between Teachers and Students Using AI
created: "2026-06-01T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [learning-analytics, teacher-role, higher-ed, student-experience, feedback, ai-literacy, help-seeking]

sources: ['raw/papers/2605.29240.md']
confidence: medium
---

> **Authors:** Junsoo Park, Youssef Medhat, Htet Phyo Wai, Ploy Thajchayapong, Ashok K. Goel (2026) — Georgia Tech

# Surfacing Isolated Learners

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

## Connected Concepts

- [[administrator]]
- [[equity-in-ai-education]]
- [[teacher-ai-competency]]
- [[help-seeking]]
- [[bias-mitigation]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[teacher-role]]
- [[higher-ed]]
- [[feedback]]

## Connected Articles

- [[a4l-analytics-pipeline]]
- [[aaai2026-prompting-literacy-k12]]
- [[academiclaw-student-agent-benchmark]]
- [[access-not-enough-ai-tutoring-2026]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[adaptive-pretesting-retention]]
- [[affective-text-wearable-student-health]]
- [[agency-gap-ai-writing]]
- [[agent-voice-accents-k12-group-learning]]
- [[agentic-ai-education-scoping-review]]
## Citation

Park, J., Medhat, Y., Wai, H. P., Thajchayapong, P., & Goel, A. K. (2026). [Surfacing Isolated Learners with Outcome-Independent Mediation of Feedback between Teachers and Students Using AI](https://arxiv.org/abs/2605.29240). arXiv:2605.29240.