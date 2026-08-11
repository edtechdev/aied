---
title: "VETTING: A dual-LLM framework for in-loop safety verification via policy isolation in educational AI"
created: 2026-06-03
updated: 2026-08-07
type: article
tags: [pedagogical-safety, k-12, llm, generative-ai]
sources: ['raw/papers/caeai-vetting-safety.md']
confidence: medium
---

> **Synthesis:** VETTING: A dual-LLM framework for in-loop safety verification via policy isolation in educational AI

## Key Findings

- VETTING is a dual-LLM architecture that separates response generation from policy verification: a generator LLM produces responses and a separate verifier LLM checks them against safety policies at runtime.
- In an in situ deployment with 151 middle school students in a writing activity, VETTING achieved precision of .943, recall of .913, and an F1 score of .928 for safety violation detection.
- The deployment was associated with an estimated 91.2% reduction in inappropriate content exposure, at the cost of a 19.6% increase in token usage (628,011 tokens).
- The work documents a taxonomy of student boundary-testing behaviors observed during authentic classroom use.
- Policy isolation keeps policy specifications hidden during interaction, making circumvention attempts monitorable and auditable rather than embedded in prompts.
- An open-source Python implementation of the framework is available.

## Study Design & Method

Educational AI systems increasingly rely on large language models to support student writing and inquiry, yet enforcing safety and instructional constraints during open-ended, multi-turn interaction remains challenging. Existing approaches commonly embed such constraints within conversational prompts or rely on static filtering; over time these approaches may become sensitive to user interaction, making it difficult to monitor and audit when students are able to circumvent or otherwise attempt to violate the measures. VETTING instead separates response generation from policy verification and applies explicit policy checks at runtime, illustrated through a grounded instantiation that enforces instructional and safety constraints without exposing policy specifications during interaction. Evaluation combined analysis of student–AI interaction behavior, human audit of verification outcomes, and characterization of computational overhead in a middle school writing activity.

## Implications for AI in Education

Policy-isolated runtime verification supports the analysis and management of educational AI behavior under authentic classroom use. Because safety checks are explicit and separate from generation, instructors and developers gain an auditable record of when and how students attempt to violate constraints — and the documented taxonomy of boundary-testing behaviors can inform both system design and classroom guidance. The measured trade-off (a large reduction in inappropriate content exposure for a modest increase in token usage) gives practitioners a concrete cost-benefit estimate for this class of architecture. For [[pedagogical-safety]] in [[k-12]] settings, VETTING offers a template that complements human oversight rather than replacing it, and its open-source implementation lowers the barrier to adopting verifier-based safeguards in [[human-in-the-loop-ai]] deployments.

## Connected Concepts

## Connected Articles


## Citation

Li, H., Zhang, S., & Botelho, A. F. (2026). [*VETTING: A dual-LLM framework for in-loop safety verification via policy isolation in educational AI*](https://doi.org/10.1016/j.caeai.2026.100646).
