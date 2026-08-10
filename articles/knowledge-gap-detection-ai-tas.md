---
title: Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs
created: 2026-06-10
updated: 2026-06-10
type: article
tags: [knowledge-tracing, llm, student-modeling, higher-ed, learning-analytics, generative-ai, student-experience, intelligent-tutoring, ai-literacy, scaffolding]
confidence: high
sources: []
---This paper introduces a pipeline that maps student questions directed at a conversational AI teaching assistant to curriculum topics using a few-shot text classifier, grounded in a GPT-4-extracted prerequisite knowledge graph. Evaluated on 1,340 question events from 164 graduate students in an AI course, the classifier achieved 80.0% accuracy across 43 labels (42 topics + abstention). Topic-level question volume correlated significantly with student self-reported difficulty (Spearman's ρ = 0.491, p = 0.008), demonstrating that conversational AI interaction logs carry actionable signals about topic-level knowledge gaps. The work bridges [[student-modeling]] and [[learning-analytics]] by repurposing existing AI TA logs as diagnostic tools for instructors.},
Curricula that deploy AI teaching assistants generate a byproduct — student interaction logs — that can be mined for curriculum-level insights without additional assessment burden. This approach is complementary to [[knowledge-tracing-irt]] models because it captures which topics students find difficult (via question volume) rather than which skills they have mastered. The GPT-4-extracted prerequisite graph provides an interpretable curriculum structure that instructors can inspect and validate.

## Connected Concepts

- [[student-modeling]]
- [[learning-analytics]]
## Connected Articles

- [[knowledge-tracing-irt]]
## Citation

Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs
