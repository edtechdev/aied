---
title: Automated Recommendation of Programming Learning Content Using Pattern-based Knowledge Components
created: "2026-07-09T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
technology: [adaptive-learning, generative-ai, intelligent-tutoring, knowledge-tracing, personalized-learning, rag]
methods: [benchmark]
audience: [software developers]
sources: ['raw/papers/2607.05409.md']
confidence: high
discipline: [cs education]
---

> **Synthesis:** Introductory programming instruction relies on hands-on practice and short learning activities to support mastery of foundational concepts. Although many such learning resources exist, organizing and linking these items in instructionally meaningful ways is challenging without time-intensive expert curation. This study investigates the use of pattern-based Knowledge Components (KCs) to automatically identify code-based learning resources targeting similar concepts. In our approach, pattern-based KCs are extracted from each code sample, and related activities are identified by measuring similarity between the KC sets associated with each activity. By leveraging alignment at the level of semantically important programming patterns, this method supports contextually appropriate and pedagogically useful recommendations. We evaluate our approach on an expert-organized corpus of introductory Python materials in which instructors grouped items into bundles based on conceptual similarity. Results show that our pattern-based KC approach retrieves resources that align with this expert organization, and outperformed representative KC- and embedding-based baselines across standard ranking evaluations. Overall, the framework supports targeted, concept-oriented guidance for programming learners and can help instructors organize, bundle, and recommend instructional content at scale.

Pattern-based Knowledge Components extracted from code samples enable automatic, instructionally-meaningful recommendation of programming practice activities; on an expert-bundled Python corpus the approach beats KC- and embedding baselines, helping instructors organize and recommend content at scale.

This work connects to core knowledge base themes: [[knowledge-tracing]] [[personalized-learning]] [[adaptive-learning]] [[intelligent-tutoring]] [[programming-its]]. It highlights how [[generative-ai]] tooling is reshaping both what learners do and how educators structure support, reinforcing the need for design that preserves authentic [[student-engagement|engagement]] rather than enabling shallow bypass.

## What this means for practice

- **Instructors.** Let clustering propose candidate bundles instead of hand-linking every item: agglomerative clustering on the knowledge vectors reached an Adjusted Rand Index of 0.605 at a 0.6 distance threshold with 63 clusters.
- **Instructors.** Spot-check ranked recommendations rather than reviewing the whole repository: pattern-based KCs reached Top-5 accuracy of 0.89 for worked-example retrieval and 0.90 for challenge retrieval, against 0.87–0.88 for the strongest baselines.
- **Designers.** Keep IDF reweighting in the [[personalized-learning|knowledge vector]] construction: removing it cost 10 percentage points of mAP on worked-example retrieval (0.82 to 0.72).
- **Researchers.** Validate explanation fidelity through instructor judgments before leaning on the highlighted rationales, since the highlights trace attention weights rather than compared subtrees.

## Limitations

- The evaluation uses the PCEX repository only: 123 programs across 13 topics and 49 bundles, which the authors state is small enough to constrain both KC discovery and evaluation sensitivity.
- Relevance is defined as membership in the same expert-defined bundle, so an instructionally useful item outside that bundle counts as a miss.
- The first step of the KC extraction pipeline uses topic labels for training, so the approach does not apply directly to unlabeled corpora.
- No classroom study was run; the authors note the work does not yet measure problem-solving performance, time-to-solution, or transfer when recommendations are available.

## Connected Concepts

- [[knowledge-tracing]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[cs-education]]
- [[recommender-systems-and-learning-paths]]
## Connected Articles

- [[programming-its]]
## Citation

Hoq, Pitts, Duan, Narayanan, Hassany, Lan, Brusilovsky & Akram (2026). [Automated Recommendation of Programming Learning Content Using Pattern-based Knowledge Components](https://arxiv.org/abs/2607.05409). CSEDM Workshop 2026 (arXiv preprint).
