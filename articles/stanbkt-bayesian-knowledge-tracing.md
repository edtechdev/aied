---
title: 'StanBKT: Rethinking Parameter Estimation in Bayesian Knowledge Tracing'
created: 2026-05-25
updated: 2026-05-25
type: article
tags: [intelligent-tutoring, learning-analytics, adaptive-learning, benchmark, open-source]
sources: [raw/papers/2605.23048.md]
confidence: high
---

# StanBKT: Rethinking Parameter Estimation in Bayesian Knowledge Tracing

**Siddhartha Pradhan, Yanping Pei, Morgan Lee, Puyuan Zhang, Erin Ottmar, Adam C. Sales (2026)** — Worcester Polytechnic Institute. *arXiv preprint (cs.HC, cs.CY, stat.AP, stat.ME)*.

StanBKT introduces an open-source Python package for Bayesian Knowledge Tracing (BKT) that moves beyond traditional expectation-maximization (EM) point estimates to full Bayesian inference via Stan. The package supports **four estimation methods** (Hamiltonian Monte Carlo, variational inference, Pathfinder, and optimization), **three model variants** (standard, grouped, and hierarchical BKT), and provides posterior predictive inference with visualization utilities. Evaluated on the ASSISTments 2020 dataset, all methods achieve comparable predictive performance while trading off speed vs. posterior fidelity. A key demonstration shows how posterior inference enables **principled comparison of learning, forgetting, guessing, and slipping parameters** across experimental conditions in an educational intervention involving perceptual cue manipulations.

For [[intelligent-tutoring]] systems, this represents a significant methodological advance. Traditional BKT implementations produce point estimates that obscure uncertainty and prevent reliable condition comparisons — critical for A/B testing adaptive interventions. The hierarchical modeling support is particularly valuable for [[adaptive-learning-systems]] where student-level variation must be modeled. Compared to [[neural-symbolic-knowledge-tracing]] approaches, StanBKT preserves the interpretable hidden Markov structure of BKT while adding uncertainty quantification. For [[knowledge-tracing-irt]] comparisons, the Bayesian framework provides natural extensions unavailable in IRT. The work complements [[mbp-kt-meta-behavioral-knowledge-tracing]] by offering a complementary probabilistic modeling framework. As an [[open-source]] tool, StanBKT lowers the barrier for [[learning-analytics]] researchers to adopt Bayesian methods in educational data mining.

## Related Pages
- [[knowledge-tracing-irt]] — StanBKT extends BKT beyond IRT's point-estimate limitations
- [[intelligent-tutoring]] — Open-source Bayesian student modeling for ITS
- [[learning-analytics]] — Uncertainty quantification enables principled parameter comparison
- [[mbp-kt-meta-behavioral-knowledge-tracing]] — Bayesian framework complements meta-behavioral KT approaches
- [[neural-symbolic-knowledge-tracing]] — Interpretable probabilistic alternative to neural KT methods
- [[adaptive-learning-systems]] — Posterior inference enables adaptive interventions

## Citation

Siddhartha Pradhan, Yanping Pei, Morgan Lee, Puyuan Zhang, Erin Ottmar, Adam C. Sales (2026). [StanBKT: Rethinking Parameter Estimation in Bayesian Knowledge Tracing](https://arxiv.org/abs/2605.23048). arXiv:2605.23048. arXiv preprint (cs.HC, cs.CY, stat.AP, stat.ME).
