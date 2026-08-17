---
title: Confidence-Aware Automated Assessment of Student-Drawn Scientific Models
created: "2026-06-19T04:33:04-04:00"
updated: "2026-08-14"
type: article
tags: [automated-grading, stem-education, formative-assessment, k-12, efficacy-study, assessment-validity]
sources: ['raw/papers/2606.20264.md']
confidence: high
---

> **Fang, L., Zhang, Y., Park, J., Wang, Z., Ma, P., & Zhai, X.** (2026). arXiv cs.AI preprint.

## Overview

A Vision Transformer (ViT) with LoRA adaptation for automated scoring of student-drawn scientific models on six NGSS-aligned middle school assessment items. A confidence-aware framework derives response-level confidence from test-time predictive distributions, enabling **selective automation**: high-confidence responses are auto-scored, uncertain cases are deferred for human review. Improves scoring reliability while supporting a practical trade-off between automated coverage and scoring risk.

## Key Findings

- **Problem:** Automated scoring of student-drawn scientific models lacks reliability indicators, leaving teachers unable to decide when to trust scores.
- **Method:** Vision Transformer (ViT) with LoRA + confidence-aware framework using test-time perturbations.
- **Dataset:** Six NGSS-aligned middle school assessment items (477-816 responses each, scored Beginning/Developing/Proficient).
- **Key innovation:** Response-level confidence enables selective automation — high-confidence auto-scored, uncertain cases deferred for human review.
- **Implication:** confidence-aware assessment enables practical triage between automation and human oversight in educational assessment.

## Connected Concepts

- [[automated-assessment]]
- [[assessment-validity]]
- [[k-12]]
- [[formative-assessment]]

## Connected Articles

- [[cong-confidence-asag-2026]] — Confidence-aware automatic short answer grading
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: rubric-aware concept bottleneck models for grading
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: FERPA-compliant local-LLM autograder

## Citation

Fang, L., Zhang, Y., Park, J., Wang, Z., Ma, P., & Zhai, X. (2026). [*Confidence-Aware Automated Assessment of Student-Drawn Scientific Models*](https://arxiv.org/abs/2606.20264). arXiv:2606.20264. arXiv cs.AI preprint.
