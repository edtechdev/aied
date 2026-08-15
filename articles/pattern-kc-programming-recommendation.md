---
title: Automated Recommendation of Programming Learning Content Using Pattern-based Knowledge Components
created: 2026-07-09
updated: 2026-08-15
type: article
tags: [knowledge-tracing, personalized-learning, adaptive-learning, intelligent-tutoring, programming-its, rag, generative-ai]
sources: ['raw/papers/2607.05409.md']
confidence: high
---

Introductory programming instruction relies on hands-on practice and short learning activities to support mastery of foundational concepts. Although many such learning resources exist, organizing and linking these items in instructionally meaningful ways is challenging without time-intensive expert curation. This study investigates the use of pattern-based Knowledge Components (KCs) to automatically identify code-based learning resources targeting similar concepts. In our approach, pattern-based KCs are extracted from each code sample, and related activities are identified by measuring similarity between the KC sets associated with each activity. By leveraging alignment at the level of semantically important programming patterns, this method supports contextually appropriate and pedagogically useful recommendations. We evaluate our approach on an expert-organized corpus of introductory Python materials in which instructors grouped items into bundles based on conceptual similarity. Results show that our pattern-based KC approach retrieves resources that align with this expert organization, and outperformed representative KC- and embedding-based baselines across standard ranking evaluations. Overall, the framework supports targeted, concept-oriented guidance for programming learners and can help instructors organize, bundle, and recommend instructional content at scale.

Pattern-based Knowledge Components extracted from code samples enable automatic, instructionally-meaningful recommendation of programming practice activities; on an expert-bundled Python corpus the approach beats KC- and embedding baselines, helping instructors organize and recommend content at scale.

This work connects to core wiki themes: [[knowledge-tracing]] [[personalized-learning]] [[adaptive-learning]] [[intelligent-tutoring]] [[programming-its]]. It highlights how generative-AI tooling is reshaping both what learners do and how educators structure support, reinforcing the need for design that preserves authentic engagement rather than enabling shallow bypass.

## Connected Concepts

- [[knowledge-tracing]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[programming-education]]
- [[cs-education]]
## Connected Articles

- [[programming-its]]
## Citation

Hoq, Pitts, Duan, Narayanan, Hassany, Lan, Brusilovsky & Akram (2026). [Automated Recommendation of Programming Learning Content Using Pattern-based Knowledge Components](https://arxiv.org/abs/2607.05409). arXiv:2607.05409. CSEDM Workshop 2026 (arXiv preprint).
