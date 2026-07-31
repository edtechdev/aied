---
title: Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs
created: 2026-06-10
updated: 2026-06-10
type: concept
tags: ["knowledge-tracing", "llm", "student-modeling", "higher-ed", "learning-analytics"]
sources: [2606.10736.md]
confidence: high
---

# Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs

**Youssef Medhat, Junsoo Park, Ploy Thajchayapong, Ashok K. Goel** — Accepted at CSEDM/EDM 2026
📄 [Full text (arXiv)](https://arxiv.org/abs/2606.10736)

This paper introduces a pipeline that maps student questions directed at a conversational AI teaching assistant to curriculum topics using a few-shot text classifier, grounded in a GPT-4-extracted prerequisite knowledge graph. Evaluated on 1,340 question events from 164 graduate students in an AI course, the classifier achieved 80.0% accuracy across 43 labels (42 topics + abstention). Topic-level question volume correlated significantly with student self-reported difficulty (Spearman's ρ = 0.491, p = 0.008), demonstrating that conversational AI interaction logs carry actionable signals about topic-level knowledge gaps. The work bridges [[student-modeling]] and [[learning-analytics]] by repurposing existing AI TA logs as diagnostic tools for instructors.},
Curricula that deploy AI teaching assistants generate a byproduct — student interaction logs — that can be mined for curriculum-level insights without additional assessment burden. This approach is complementary to [[knowledge-tracing-irt]] models because it captures which topics students find difficult (via question volume) rather than which skills they have mastered. The GPT-4-extracted prerequisite graph provides an interpretable curriculum structure that instructors can inspect and validate.

## Related Pages
- [[knowledge-tracing-irt]] — Knowledge tracing models and IRT for student modeling
- [[intelligent-tutoring]] — AI tutoring systems and adaptive instruction
- [[learning-analytics]] — Data-driven analysis of learning processes
- [[ai-literacy]] — Understanding and evaluating AI tools
- [[student-modeling]] — Representing learner knowledge and behavior
- [[cs-education]] — Computing education research and pedagogy
- [[self-regulated-learning]] — Metacognitive strategies for independent learning
- [[formative-assessment]] — Ongoing assessment to inform instruction
- [[automated-grading]] — AI-assisted evaluation of student work
- [[scaffolding]] — Instructional support that fades with competence

## Citations

**APA:** Youssef Medhat, Junsoo Park, Ploy Thajchayapong, Ashok K. Goel (2026). *Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs*. arXiv:2606.10736. Accepted at CSEDM/EDM 2026.
