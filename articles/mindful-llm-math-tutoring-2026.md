---
title: "Beyond Problem Solving: Large Language Models for Emotional and Reflective Support in Mathematics Learning"
created: "2026-09-03T09:00:00-04:00"
updated: "2026-09-03T09:00:00-04:00"
type: article
tags: [intelligent-tutoring, math-education, generative-ai, pedagogical-agent, affective-computing, well-being, k-12, llm]
sources: ['raw/papers/mindful-llm-math-tutoring-2026.md']
confidence: high
---

> **Synthesis:** Rief et al. (2026) extend an [[intelligent-tutoring]] system for algebra — "Math with Matt" — beyond purely cognitive [[scaffolding]] by adding an LLM-driven socio-emotional layer that targets [[math-education|math]] anxiety. The mindful version pairs a [[pedagogical-agent]] chat with context-sensitive emotional support and guided breathing with mindful feedback and hint messages (not merely evaluative). In a classroom study with 252 seventh graders (42 retained after disruptions), the [[generative-ai|tool]] reduced executive state-math anxiety and improved learning overall, but no significant differences emerged between the mindful and cognitive-only conditions. However, students in the mindful condition reached comparable learning with less time and fewer requested hints — higher learning efficiency and more balanced problem solving — and rated the agent as more supportive and caring. The study positions [[llm|LLMs]] as a scalable, adaptive socio-emotional layer inside cognitive math tutoring, without requiring specialized instructor training.

## The Cognitive-Only Bias of Intelligent Tutoring

[[intelligent-tutoring|Intelligent Tutoring Systems]] (ITSs) traditionally concentrate their adaptive support on the cognitive side of learning — hints, feedback, and task sequencing — while rarely attending to the learner's emotional state during problem solving. This is a real gap because math anxiety, a fear-and-tension response to numerical and [[problem-solving]] situations, impairs working memory, lowers performance, and reduces [[student-engagement|engagement]]. State-math anxiety in particular (the context-dependent reaction that occurs while working) is negatively associated with performance. Prior [[affective-computing|affective]] interventions, such as instructor-led guided breathing at the start of class, reliably reduce anxiety but rely on trained, multi-session programs that are hard to embed in regular instruction or digital environments. The authors set out to test whether [[generative-ai|large language models]] could deliver such socio-emotional support automatically, in real time, and at scale.

## "Math with Matt": Layering Mindfulness onto Cognitive Tutoring

The system, "Math with Matt," keeps the cognitive tutoring machinery ([[personalized-learning|adaptive]] algebra hints and feedback) and adds a mindful intervention arm delivered through a [[pedagogy|pedagogical]] agent named Matt:

1. **Mindful chat** — an LLM-based chat offering context-sensitive emotional support, guided breathing exercises, and non-judgmental encouragement grounded in mindfulness principles.
2. **Mindful feedback and hints** — support messages that attend to the student's emotional experience rather than only evaluating the answer, intended to reduce [[well-being|anxiety]] and improve the learning experience.

Students interacted with one of two versions: the **Mindful** condition (with the mindfulness layer) or a **Cognitive** condition (cognitive hints and feedback only). The study was run across seven classrooms at an international school in Japan with 252 seventh graders (ages 12–13), randomly assigned within class; external disruptions (illness and a subway incident) reduced the analyzed sample to 42 students, balanced across conditions.

## Findings: Efficiency, Experience, and Emotional Support

Both versions improved students' math learning from pre- to post-test and reduced executive state-math anxiety, with no significant difference between conditions on these primary outcomes. The mindful interventions nonetheless produced a distinct pattern of results:

1. **Greater learning efficiency** — mindful-condition students reached a similar level of algebra learning with less learning time and fewer requested hints than the cognitive group.
2. **More balanced problem solving** — their solution behavior was less help-dependent, consistent with more adaptive [[self-regulated-learning|self-regulation]] during problem solving.
3. **Stronger perceived care** — students rated the single item "I feel supported by Matt" significantly higher in the mindful condition, indicating the [[pedagogical-agent|agent]] felt more supportive and caring.

The authors note that limited English proficiency among students may have masked stronger between-condition effects, since learners could not always fully comprehend the mindful language in hints and chat.

## Implications for Embedding Socio-Emotional Support in AI Tutoring

The study demonstrates the feasibility of integrating mindfulness into an ITS through LLM-based interaction: emotional scaffolding can be generated on demand, without trained instructors or fixed multi-session protocols. The pattern of equal learning with fewer hints and less time suggests the mindful layer may promote learning efficiency and self-regulated problem-solving behavior rather than merely improving how the tool "feels." Because [[generative-ai|LLM]] interactions can be localized and adapted in real time, they offer a scalable route to the kind of socio-emotional support that cognitive tutors have historically lacked — a direction with implications for [[math-education|mathematics education]], learner [[well-being]], and the design of [[k-12|classroom]] AI tutoring.

## Connected Concepts
- [[intelligent-tutoring]]
- [[math-education]]
- [[pedagogical-agent]]
- [[affective-computing]]
- [[generative-ai]]
- [[llm]]
- [[self-regulated-learning]]
- [[well-being]]
- [[k-12]]
- [[ai-education]]

## Connected Articles
- [[rhaimi-productivemath-2025]] — ProductiveMath: A Generative-AI-Powered App to Support Productive Failure Teaching
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive Scaffolding for Cognitive Engagement in an Intelligent Tutoring System
- [[epistemic-proactivity-math]] — From Prompting to Epistemic Proactivity in Mathematics Learning
- [[curiobot-llm-tutoring-exploratory-learning]] — Curiosity as Linguistic Intervention with LLM Tutoring Dialogues

## Citation
Rief, V., Hladký, M., Yoo, M., Heel, S., Sato, S., & Nagashima, T. (2026). [*Beyond Problem Solving: Large Language Models for Emotional and Reflective Support in Mathematics Learning*](https://arxiv.org/abs/2609.02611). arXiv preprint arXiv:2609.02611.
