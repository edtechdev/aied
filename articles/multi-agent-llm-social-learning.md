---
title: "Beyond the AI Tutor: Social Learning with LLM Agents"
created: 2026-05-11
updated: 2026-05-11
type: article
tags: [llm, intelligent-tutoring, scaffolding, student-experience, collaborative-ai-tutoring, agentic-ai-ecosystems-higher-education, higher-ed, ai-tutoring, agentic-ai]
sources: ['raw/papers/2604.02677.md']
confidence: high
---

> **Authors:** Harsh Kumar, Zi Kang (Jace) Mu, Jonathan Vincentius, Ashton Anderson **Year:** 2026 **Venue:** arXiv (cs.HC, cs.CY)
**Year:** 2026
**Venue:** arXiv (cs.HC, cs.CY)

## Summary

Multi-agent LLM configurations for learning. Two experiments (N=315 math, N=247 writing) — tutor+peers outperforms single tutor. Multi-model condition avoids idea homogeneity. Most AI-based educational tools adopt a one-on-one tutoring paradigm, yet decades of learning science research suggest that multi-party interaction — peer modeling, co-construction, and exposure to diverse perspectives — can produce benefits that dyadic tutoring alone cannot.

## Key Contributions

- Multi-agent LLM configurations for learning. Two experiments (N=315 math, N=247 writing) — tutor+peers outperforms single tutor. Multi-model condition avoids idea homogeneity.
- In a **convergent problem-solving study (N=315)**, participants tackled SAT-level math problems in a 2×2 design varying the presence of an LLM tutor and error-prone LLM peers (making conceptual vs. arithmetic errors); those who interacted with **both a tutor and peers achieved the highest unassisted test accuracy**, suggesting peer observation has independent learning value even when an expert is present.
- In a **divergent composition study (N=247)**, participants wrote argumentative and creative essays with no AI assistance, a single LLM (Claude or ChatGPT), or **both Claude and ChatGPT together**; while both LLM conditions improved essay quality, **only the two-agent condition avoided the idea-level homogeneity** that single-model assistance produced.
- The writing results were statistically robust: an OLS model predicting combined essay quality from condition was significant (F(2,244)=21.91, p<.0001, R²=0.152), with both LLM conditions outperforming control (Control vs. Single: Δ=0.332, t(244)=6.21, p<.0001; Control vs. Duo: Δ=0.234, t(244)=4.21, p=0.0001), while Single and Duo did not differ significantly.
- Idea homogeneity across participants was measured via bootstrapped similarity scores with permutation testing over 1,000 rounds, showing the **multi-model Duo condition restored ideational diversity to baseline levels**.

## Study Design & Method

The two experiments span the convergent-divergent spectrum of learning tasks. Experiment 1 uses a 2×2 design on SAT-level math, crossing the presence of an LLM tutor with the presence of LLM peers that make different error types, and measures unassisted test accuracy. Experiment 2 contrasts no AI, single-model, and dual-model writing conditions, scoring essay quality by rubric and computing cross-participant idea similarity. Together they test whether richer multi-agent configurations unlock collaborative and observational benefits documented in human social learning research.

## Implications for AI in Education

The findings suggest that one-on-one AI tutoring is not the only effective paradigm: **orchestrating multiple LLM agents — as peers alongside a tutor or as role-specialized collaborators — can add measurable learning value**, particularly by restoring ideational diversity that single-model assistance suppresses. For [[ai-tutoring]] and [[collaborative-learning]] system design, this points toward multi-agent configurations in which learners observe peer agents struggle, disagree, and co-construct understanding, rather than receiving authoritative answers from a single assistant.

## Connected Concepts

## Connected Articles


## Citation

Harsh Kumar et al. (2026). [Beyond the AI Tutor: Social Learning with LLM Agents](https://arxiv.org/abs/2604.02677). arXiv:2604.02677. cs.HC, cs.CY.
