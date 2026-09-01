---
title: Can LLMs Effectively Simulate Human Learners? Teachers' Insights from Tutoring LLM Students
created: "2026-08-06T04:33:04-04:00"
updated: "2026-08-28T00:00:00-04:00"
type: article
tags: [llm, simulating-students, teacher-education, intelligent-tutoring, k-12, ai-ed-evaluation, community-of-inquiry, scaffolding, knowledge-tracing]
research_method: [qualitative, interviews]
audience: [learners]
level: [teacher training, k 12]
sources: ['raw/papers/llm-student-simulation-teacher-insights.md']
confidence: high
---

> **Synthesis:** Semi-structured interviews with 12 teachers who tutored [[simulating-students|LLM-simulated students]] (MathDial dataset) reveal key authenticity gaps: overly complex language, lack of emotions, unnatural attentiveness, and logical inconsistency. The study categorizes four real-world student behavior types along scaffolding and presence dimensions, and provides design guidelines for building higher-fidelity LLM student [[simulation|simulations]].

## Methodology

Martynova et al. interviewed 12 teachers who had extensively interacted with [[simulating-students|LLM-simulated students]] during collection of the MathDial [[intelligent-tutoring|dialogue tutoring]] dataset. The study used a mixed-method approach grounded in two frameworks:

- **[[community-of-inquiry|Community of Inquiry]] (CoI)** — capturing social and cognitive presence in learning interactions
- **[[scaffolding|Scaffolding theory]]** — effective [[teacher-role|teaching]] through graduated support

Teachers tutored [[llm|LLM]] students in [[k-12|K-12]] [[math-education|math]] [[problem-solving]] dialogues, then rated realism and described deviations from authentic student behavior.

## Key Findings

### Authenticity Gaps in LLM Students

| Issue | Description |
|---|---|
| Language complexity | Responses too technical, lengthy, and formal for K-12 students |
| Emotional absence | Lack of frustration, fear, embarrassment, or disengagement |
| Unnatural attentiveness | Students too engaged; never lose focus or go silent |
| Logical inconsistency | Knowledge jumps without gradual building; no forgetting |
| No question-asking | Teachers had too much control over discussion flow |

### Four Student Behavior Categories

The study classifies real-world student behaviors along two dimensions:

| | High Scaffolding Needs | Low Scaffolding Needs |
|---|---|---|
| **Social Presence** | Short/simple writing, negative emotions, disengagement | Asking questions, disagreeing with teacher |
| **Cognitive Presence** | Gradual knowledge-building, memory/forgetting | Changing tactics based on feedback |

LLMs captured the bottom-right quadrant reasonably well but failed to represent the other three categories.

## Design Guidelines

1. **Diverse personalities** — model Big Five personality traits to produce varied [[student-engagement|engagement]] levels and emotional responses
2. **Gradual knowledge building** — integrate [[knowledge-tracing|knowledge tracing]] to avoid unrealistic knowledge jumps
3. **Model forgetting** — account for memory decay over time
4. **Promote question-asking** — use context-aware triggers for the LLM student to ask questions
5. **Vary language complexity** — regulate response length, formality, and introduce age-appropriate errors
6. **Allow disengagement** — let simulated students lose focus or stay silent, providing authentic teaching challenges

## Significance

- **[[teacher-education|Teacher training]]**: more realistic [[simulating-students|LLM student simulations]] enable scalable practice for pre-service and in-service teachers
- **Validation gap**: only 3% of studies simulating learners do post-factum validation — this study provides a framework for it
- **MathDial** is the only publicly available dataset of real teacher/LLM-student interactions
- Addresses the growing trend of using unvalidated [[simulating-students|LLM simulations]] in educational contexts

onal contexts

## Connected Concepts

- [[k-12]]
- [[knowledge-tracing]]
- [[llm]]
- [[scaffolding]]
- [[simulating-students]]
- [[student-modeling]]
- [[teacher-role]]

## Connected Articles

- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring

## Citation

Martynova, D., Macina, J., Daheim, N., Yalçın, Ö. N., Zhang, X., & Sachan, M. (2026). [*Can LLMs Effectively Simulate Human Learners? Teachers' Insights from Tutoring LLM Students*](https://aclanthology.org/2025.bea-1.8).
