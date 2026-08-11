---
title: "Ensuring Reliability in Programming Knowledge Tracing: A Re-evaluation of Attention-augmented Models and Experimental Protocols"
created: 2026-05-13
updated: 2026-05-13
type: article
tags: [knowledge-tracing, automated-grading, benchmark, learning-analytics]
sources: ['raw/papers/2605.04727.md']
confidence: medium
---

> **Kim, J., Kim, H. (2026)** — ITS 2026 (Springer LNCS).
## Analysis

This ITS 2026 paper challenges claims about attention-augmented Programming Knowledge Tracing (PKT) superiority. The authors identify three critical protocol flaws: **attention dimension misconfiguration**, **temporal causality violations** (ignoring ServerTimestamp), and **hyperparameter leakage** across CV folds. When controlled, the gap between attention-enhanced models and standard DKT narrows significantly.

This reinforces [[ground-truth-reliability-aied]] by showing that experimental protocol flaws can produce misleading performance claims. It also has implications for benchmark design in educational AI, arguing for standardized evaluation frameworks. The CodeWorkout dataset protocol serves as a template for [[programming-its]] research.

## Connected Concepts

## Connected Articles

- [[ground-truth-reliability-aied]]
- [[programming-its]]
## Citation

Kim & Kim (2026). [Ensuring Reliability in Programming Knowledge Tracing: A Re-evaluation of Attention-augmented Models and Experimental Protocols](https://arxiv.org/abs/2605.04727). arXiv:2605.04727. ITS 2026 (Springer LNCS).
