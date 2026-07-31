---
title: "Ensuring Reliability in Programming Knowledge Tracing: A Re-evaluation of Attention-augmented Models and Experimental Protocols"
created: 2026-05-13
updated: 2026-05-13
type: concept
tags: ["knowledge-tracing-irt", "automated-grading", "benchmark", "learning-analytics"]
sources: [raw/papers/2605.04727.md]
confidence: medium
---

# Ensuring Reliability in Programming Knowledge Tracing: A Re-evaluation of Attention-augmented Models and Experimental Protocols

**Kim, J., Kim, H. (2026)** — ITS 2026 (Springer LNCS).

📄 [Full text (arXiv)](https://arxiv.org/abs/2605.04727)

## Analysis

This ITS 2026 paper challenges claims about attention-augmented Programming Knowledge Tracing (PKT) superiority. The authors identify three critical protocol flaws: **attention dimension misconfiguration**, **temporal causality violations** (ignoring ServerTimestamp), and **hyperparameter leakage** across CV folds. When controlled, the gap between attention-enhanced models and standard DKT narrows significantly.^[2605.04727](raw/papers/2605.04727.md)

This reinforces [[ground-truth-reliability-aied]] by showing that experimental protocol flaws can produce misleading performance claims. It also has implications for [[benchmark]] design in educational AI, arguing for standardized evaluation frameworks. The CodeWorkout dataset protocol serves as a template for [[programming-its]] research.

## Related Pages

- [[knowledge-tracing-irt]] — Controlled re-evaluation of PKT protocol reliability
- [[benchmark]] — Standardized evaluation protocol for programming knowledge tracing
- [[programming-its]] — Reliability considerations for PKT at ITS 2026
- [[learning-analytics]] — Protocol fixes for temporal causality and hyperparameter leakage
- [[ground-truth-reliability-aied]] — Attention-dimension misconfiguration as reliability threat

## Citation

**APA:** Kim & Kim (2026). *Ensuring Reliability in Programming Knowledge Tracing: A Re-evaluation of Attention-augmented Models and Experimental Protocols*. arXiv:2605.04727. ITS 2026 (Springer LNCS).
