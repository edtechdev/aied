---
title: Temporal Smoothness Doubly Robust Learning for Debiased Knowledge Tracing
created: 2026-05-13
updated: 2026-05-13
type: article
tags: [knowledge-tracing, learning-analytics, personalized-learning, intelligent-tutoring, student-experience]
sources: ['raw/papers/2605.05958.md']
confidence: medium
---

> **Zhan, P., Chen, W., Chen, W., Pan, S., Cai, R. (2026)** — arXiv preprint.
## Analysis

This paper addresses a critical but under-examined issue in KT systems: **selection bias** from non-random exercise recommendations. Prior KT methods train on observed logs using standard empirical risk, producing biased mastery estimates that compound errors in downstream recommendation loops. The proposed **Temporal Smoothness Doubly Robust (TSDR)** framework combines a propensity model with an error imputation model, regularized for temporal smoothness.

The doubly robust property ensures the estimator remains unbiased if *either* the propensity or imputation model is correct. This connects to [[personalized-learning]] by ensuring adaptive recommendations are not systematically biased toward high-engagement students.

## Connected Concepts

- [[personalized-learning]]
## Connected Articles


## Citation

Zhan et al. (2026). [Temporal Smoothness Doubly Robust Learning for Debiased Knowledge Tracing](https://arxiv.org/abs/2605.05958). arXiv:2605.05958. arXiv preprint.
