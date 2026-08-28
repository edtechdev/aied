---
title: Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs
created: "2026-06-10T07:38:00-04:00"
updated: "2026-08-15"
type: article
tags: [knowledge-tracing, llm, student-modeling, higher-ed, learning-analytics, generative-ai, student-experience, intelligent-tutoring, ai-literacy, scaffolding]
confidence: high
sources: []
---

This paper introduces a pipeline that maps student questions directed at a conversational AI teaching assistant to curriculum topics using a few-shot text classifier, grounded in a GPT-4-extracted prerequisite knowledge graph. Evaluated on 1,340 question events from 164 graduate students in an AI course, the classifier achieved 80.0% accuracy across 43 labels (42 topics + abstention). Topic-level question volume correlated significantly with student self-reported difficulty (Spearman's ρ = 0.491, p = 0.008), demonstrating that conversational AI interaction logs carry actionable signals about topic-level knowledge gaps. The work bridges [[student-modeling]] and [[learning-analytics]] by repurposing existing AI TA logs as diagnostic tools for instructors.},
Curricula that deploy AI teaching assistants generate a byproduct — student interaction logs — that can be mined for curriculum-level insights without additional assessment burden. This approach is complementary to [[huang-interpretable-knowledge-tracing-2026]] models because it captures which topics students find difficult (via question volume) rather than which skills they have mastered. The GPT-4-extracted prerequisite graph provides an interpretable curriculum structure that instructors can inspect and validate.

## Key Findings

- A few-shot text classifier maps student questions directed at a conversational AI teaching assistant to curriculum topics, grounded in a GPT-4-extracted prerequisite knowledge graph.
- Evaluated on 1,340 question events from 164 graduate students, the classifier reached 80.0% accuracy across 43 labels (42 topics + abstention).
- Topic-level question volume correlated significantly with student self-reported difficulty (Spearman's ρ = 0.491, p = 0.008).
- The approach repurposes existing AI TA interaction logs as diagnostic tools for instructors without added assessment burden.

## Connected Concepts

- [[student-modeling]]
- [[learning-analytics]]
- [[knowledge-graph]] — the GPT-4-extracted prerequisite curriculum graph
- [[knowledge-tracing]] — complementary modeling of topic difficulty vs. mastery
- [[llm]] — few-shot classification and graph extraction
- [[generative-ai]] — powering the underlying language models
- [[intelligent-tutoring]] — conversational AI teaching assistants
- [[scaffolding]] — diagnostic support for instructor decision-making
## Connected Articles

- [[huang-interpretable-knowledge-tracing-2026]]
- [[didactical-teacher-assistant-dimensional-modeling]] — Dimensional modeling of teaching assistants
## Citation

Medhat, Y., Park, J., Thajchayapong, P., & Goel, A. K. (2026). [*Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs*](https://arxiv.org/abs/2606.10736).
