---
title: "From Heuristics to Analytics: Forecasting Effort and Progress in Online Learning"
created: "2026-05-20T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [intelligent-tutoring, learning-analytics, engagement-metrics, k-12, efficacy-study, benchmark, scaffolding, rag, ai-tutoring, metacognition]
sources: ['raw/papers/2605.12788.md']
confidence: high
---

## Overview

This paper tackles a core ITS challenge: predicting when students will disengage so tutors can intervene before it's too late. It introduces **engagement forecasting** as a supervised prediction task with two complementary targets: minutes practiced per week (effort) and new skills mastered per week (progress).

**Benchmarking 15 predictors on 425 middle-school students:**
- Feature-based models (regressions, decision trees, neural networks) reduce **MAE by 22–33%** compared to heuristic baselines
- Percentile heuristics (adapted from prior behavioral domains) systematically **overpredict** — they assume past behavior continues, missing disengagement signals
- Feature-based models better track actual practice trajectories week-to-week

**Distinct predictive signatures for effort vs. progress:**
- **Effort forecasting** driven primarily by **recent activity features** (how much the student practiced recently)
- **Progress forecasting** depends more on **learner-state** and **content difficulty** signals (what the student knows and how hard the material is)

**Human validation:** Semi-structured interviews with 8 college tutors confirmed that tutors reason differently about effort goals vs. progress goals, mirroring the model's feature importance patterns. This strengthens the case for practical deployment.

## Implications for Intelligent Tutoring Systems

This work shifts ITS analytics from reactive to **predictive**. Instead of flagging disengagement after it happens, engagement forecasting enables:
- **Proactive tutor-learner goal setting** with data-driven weekly targets
- **Early warning systems** that surface at-risk students before they fall behind
- **Differentiated intervention** based on whether effort or progress is the primary concern

The finding that effort and progress have distinct predictive signatures is practically important. A student practicing diligently but struggling with difficult content needs different support than one who is simply not logging in. Current ITS dashboards often conflate these signals; engagement forecasting disentangles them.

## Connections to the ITS Research Landscape

This paper extends the [[ai-tutor-effectiveness-review]] findings on what makes ITS effective by adding a temporal prediction layer. Where prior work evaluates whether tutoring works on average, engagement forecasting asks *when* it works and *for whom* — connecting to the personalized intervention paradigm in [[collaborative-ai-tutoring]].

The focus on middle-school students (N=425) aligns with the [[stanford-evidence-base-ai-k12-2026]], which calls for more rigorous K-12 efficacy studies. The EDM 2026 venue, combined with [[genai-tutor-engagement-patterns]], suggests engagement analytics is becoming a recognized subfield within educational data mining.

## Methodological Contribution

The paper establishes a **reproducible benchmark** for engagement forecasting, with clearly defined prediction targets, a documented feature set, and public interaction log data. This is significant for the benchmark landscape in AIED, where many systems are evaluated on proprietary data with incomparable metrics.

## Connected Concepts

- [[math-education]]
- [[help-seeking]]
- [[transfer-of-learning]]
- [[adaptive-learning]]
- [[human-in-the-loop-ai]]
- [[affective-tutoring]]
- [[student-engagement]]
- [[learning-analytics]]
- [[ai-tutoring]]
- [[engagement-metrics]]

## Connected Articles

- [[ai-tutor-effectiveness-review]]
- [[collaborative-ai-tutoring]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[genai-tutor-engagement-patterns]]
## Citation

Qiu, E. S., Thomas, D. R., Guo, B., Aleven, V., & Borchers, C. (2026). [From Heuristics to Analytics: Forecasting Effort and Progress in Online Learning.](https://arxiv.org/abs/2605.12788) arXiv:2605.12788. EDM 2026.
