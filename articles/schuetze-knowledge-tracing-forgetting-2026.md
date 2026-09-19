---
title: "Capturing Session-to-Session Dynamics of Learning and Forgetting: Testing the Limits of Knowledge Tracing Models"
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
pedagogy: [cognitive-psychology]
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, machine-learning, student-modeling]
sources: ['raw/papers/schuetze-knowledge-tracing-forgetting-2026.md']
confidence: high
research_method: [secondary analysis, process-outcome modeling]
audience: [researchers, learning analytics designers, edtech designers]
page_kind: [evaluation, framework]
---

> **Synthesis:** **Capturing Session-to-Session Dynamics of Learning and Forgetting: Testing the Limits of Knowledge Tracing Models** — Using longitudinal lab data from a successive-relearning study (Rawson et al., 2018), Schuetze, Yan, and Carvalho test whether popular [[knowledge-tracing]] models — Bayesian Knowledge Tracing, Bayesian Knowledge Tracing with Forgetting, and the Additive Factors Model — actually capture human memory and learning processes across sessions. When fit retrospectively to all sessions, the models appear to capture learning trends; but under time-based cross-validation (predicting future sessions from prior data, the realistic applied use), all of them overestimate performance, fail to account for the spacing effect, and mis-order the relative benefits of practice conditions. The authors argue this stems from a misalignment between how student models are validated and how they are deployed, calling for use- and cognitive-based validation via time-based cross-validation in [[student-modeling]] research.

## Key Findings

1. When fit to all six sessions of a multi-session successive-relearning dataset retrospectively, [[knowledge-tracing]] models ([[stanbkt-bayesian-knowledge-tracing|BKT]], BKT-Forgetting, and the Additive Factors Model) capture qualitative learning trends with acceptable fit metrics (BKT AUC 0.79; BKT-F 0.77; AFM 0.74) and beat a no-model null baseline.
2. Under **time-based cross-validation** — training on Session 1 to predict Session 2 one week later — the picture reverses: AFM, BKT, and BKT-F overestimate performance by roughly 58%, 51%, and 47% respectively and all fail to capture the theoretically predicted and empirically observed **spacing effect**, sometimes even predicting the opposite ordinal ordering across spacing conditions.
3. Extrapolating across multiple sessions (Sessions 2–6), all tested models improve as more prior data is added, but [[machine-learning|models]] without any forgetting mechanism perform about as well as the forgetting-augmented versions, suggesting forgetting is partially absorbed into other parameters (e.g., per-student intercepts in AFM) rather than genuinely modeled.
4. In some cases, having a poor model of human learning and memory performs about the same as having no model at all, because these popular models conflate high in-the-moment performance with high likelihood of long-term retention (the [[desirable-difficulties|learning-versus-performance]] distinction from [[cognitive-psychology]]).
5. BKT-F's forgetting parameter failed to improve forecasting largely because of the successive-relearning paradigm's structure: items are dropped once mastered, so practice-opportunity count correlates with item difficulty, making within-session forgetting and learning trajectories hard to translate between learners and across sessions.
6. The authors attribute apparent model success in the literature to the validation method (retroactive full-dataset fitting) and call for **time-based (walk-forward) cross-validation** and more cognitively plausible models that account for retention interval, spacing, and between-session forgetting.

## What this means for practice

- **Learning analytics designers.** Validate mastery models with time-based, walk-forward cross-validation instead of fitting the full dataset: under retrospective fitting BKT, BKT-F, and AFM looked acceptable (AUC 0.79, 0.77, 0.74), but trained on Session 1 alone they overestimated next-session performance by about 58%, 51%, and 47% respectively.
- **Learning analytics designers.** Do not assume a forgetting parameter buys long-horizon accuracy: across Sessions 2–6, the models without any forgetting mechanism performed about as well as the forgetting-augmented versions.
- **Researchers.** Test models against known cognitive effects, not only fit metrics — all three models failed to reproduce the empirically observed spacing benefit and sometimes predicted the opposite ordering of practice conditions.
- **Edtech designers.** Treat in-the-moment performance as a weak proxy for retention: the authors show these models conflate high immediate performance with a high likelihood of long-term retention, the [[desirable-difficulties|learning-versus-performance]] confusion.
- **Researchers.** Adopt use- and cognitively-based validation criteria — learning, spacing, and forgetting across sessions — as the standard for [[student-modeling|student models]] intended to forecast future learning.

## Limitations

- The analysis is a secondary analysis of one laboratory successive-relearning dataset: 88 participants learning 48 Lithuanian-English word pairs across six sessions, totaling 49,491 trials.
- The paradigm presents every item in every session, unlike tutoring systems that rarely return to content already marked mastered, so the mastery and forgetting dynamics tested here may not transfer to real ITS logs.
- Trial counts varied by dropout and by how many trials each participant needed to reach criterion (average 562, minimum 187, maximum 1,195), which makes practice-opportunity count correlate with item difficulty.
- Session 1 was excluded from the multi-session training runs because it contained additional manipulations that produced even worse model fits, so the extrapolation evidence starts from the relearning sessions alone.

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
- [[nie-personavlm-long-term-personalization-2026]] — Memory and student modeling

## Citation

Schuetze, B. A., Yan, V. X., & Carvalho, P. F. (2025). [Capturing Session-to-Session Dynamics of Learning and Forgetting: Testing the Limits of Knowledge Tracing Models](https://doi.org/10.1007/s40593-025-00508-3). *International Journal of Artificial Intelligence in Education*, 35, 3559–3578.
