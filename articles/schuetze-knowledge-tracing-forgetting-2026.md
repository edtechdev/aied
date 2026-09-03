---
title: Capturing Session-to-Session Dynamics of Learning and Forgetting
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-03T15:00:00-04:00"
type: article
tags: [knowledge-tracing, student-modeling, cognitive-psychology, learning-analytics, intelligent-tutoring, machine-learning]
sources: ['raw/papers/schuetze-knowledge-tracing-forgetting-2026.md']
confidence: high
---

> **Capturing Session-to-Session Dynamics of Learning and Forgetting: Testing the Limits of Knowledge Tracing Models** — Using longitudinal lab data from a successive-relearning study (Rawson et al., 2018), Schuetze, Yan, and Carvalho test whether popular [[knowledge-tracing]] models — Bayesian Knowledge Tracing, Bayesian Knowledge Tracing with Forgetting, and the Additive Factors Model — actually capture human memory and learning processes across sessions. When fit retrospectively to all sessions, the models appear to capture learning trends; but under time-based cross-validation (predicting future sessions from prior data, the realistic applied use), all of them overestimate performance, fail to account for the spacing effect, and mis-order the relative benefits of practice conditions. The authors argue this stems from a misalignment between how student models are validated and how they are deployed, calling for use- and cognitive-based validation via time-based cross-validation in [[student-modeling]] research.

## Key Findings

1. When fit to all six sessions of a multi-session successive-relearning dataset retrospectively, [[knowledge-tracing]] models ([[stanbkt-bayesian-knowledge-tracing|BKT]], BKT-Forgetting, and the Additive Factors Model) capture qualitative learning trends with acceptable fit metrics (BKT AUC 0.79; BKT-F 0.77; AFM 0.74) and beat a no-model null baseline.
2. Under **time-based cross-validation** — training on Session 1 to predict Session 2 one week later — the picture reverses: AFM, BKT, and BKT-F overestimate performance by roughly 58%, 51%, and 47% respectively and all fail to capture the theoretically predicted and empirically observed **spacing effect**, sometimes even predicting the opposite ordinal ordering across spacing conditions.
3. Extrapolating across multiple sessions (Sessions 2–6), all tested models improve as more prior data is added, but [[machine-learning|models]] without any forgetting mechanism perform about as well as the forgetting-augmented versions, suggesting forgetting is partially absorbed into other parameters (e.g., per-student intercepts in AFM) rather than genuinely modeled.
4. In some cases, having a poor model of human learning and memory performs about the same as having no model at all, because these popular models conflate high in-the-moment performance with high likelihood of long-term retention (the [[desirable-difficulties|learning-versus-performance]] distinction from [[cognitive-psychology]]).
5. BKT-F's forgetting parameter failed to improve forecasting largely because of the successive-relearning paradigm's structure: items are dropped once mastered, so practice-opportunity count correlates with item difficulty, making within-session forgetting and learning trajectories hard to translate between learners and across sessions.
6. The authors attribute apparent model success in the literature to the validation method (retroactive full-dataset fitting) and call for **time-based (walk-forward) cross-validation** and more cognitively plausible models that account for retention interval, spacing, and between-session forgetting.

## Connected Concepts

- [[knowledge-tracing]]
- [[student-modeling]]
- [[cognitive-psychology]]
- [[machine-learning]]
- [[learning-analytics]]
- [[intelligent-tutoring]]

## Connected Articles

- [[stanbkt-bayesian-knowledge-tracing]] — Bayesian Knowledge Tracing variants
- [[skill-acquisition-without-temporal-info]] — Modeling learner skill when temporal data is missing
- [[explainable-probabilistic-kt]] — Interpretable knowledge tracing
- [[neural-symbolic-knowledge-tracing]] — Neuro-symbolic knowledge tracing
- [[cognitive-load-transfer-knowledge-tracing-2026]] — Knowledge tracing and cognitive load
- [[llm-student-modeling-memory]] — Memory and student modeling

## Citation

Schuetze, B. A., Yan, V. X., & Carvalho, P. F. (2025). [Capturing Session-to-Session Dynamics of Learning and Forgetting: Testing the Limits of Knowledge Tracing Models](https://doi.org/10.1007/s40593-025-00508-3). *International Journal of Artificial Intelligence in Education*, 35, 3559–3578.
