---
title: "LearnMate^2: Design and Evaluation of an LLM-powered Personalized and Adaptive Support System for Online Learning"
created: "2026-05-15T04:33:04-04:00"
updated: "2026-09-16T17:12:13-04:00"
type: article
foundations: [agentic-ai]
pedagogy: [metacognition, scaffolding]
technology: [adaptive-learning, generative-ai, llm, personalized-learning]
audience: [software developers]
research_method: [system development]
level: [higher ed]
sources: ['raw/papers/2605.06257.md']
confidence: medium
page_kind: [framework]
---

> **Synthesis:** LearnMate^2 addresses the **personalization gap** in online learning: while online platforms offer widespread access, they lack the personalized guidance that characterizes effective [[intelligent-tutoring]] systems. The system provides three core capabilities:

1. **Personalized study plans** — tailored learning paths based on individual learner profiles
2. **Real-time contextual assistance** — in-context support during learning sessions via [[conversational-ai-tutors-framework]]
3. **Adaptive learning activities** — dynamic tasks responding to learner performance, implementing [[adaptive-learning]] principles

**Iterative development and evaluation:**
- **Preliminary study (n=24)** assessed effectiveness, informed system refinements
- **Comparative evaluation (n=16)** against a state-of-the-art online learning platform plus an LLM
- **Results:** LearnMate^2 improved both [[learning-gains|learning outcomes]] and [[usability-research|user experience]] vs. the baseline

The study demonstrates that LLM-powered [[personalized-learning]] can bridge the guidance gap in open online education. This connects to the broader [[adaptive-learning]] literature and extends findings from learnmate2-llm-adaptive-learning prior iterations. The system's integration of study planning, real-time assistance, and adaptive activities represents a more holistic approach than single-function AI tools, aligning with the [[agentic-ai]] vision of integrated educational AI.

The work also contributes to understanding how [[scaffolding]] can be implemented at scale in digital environments, complementing [[ai-metacognition-stem-review]] findings on [[metacognition|metacognitive]] support tools.

## What this means for practice

- **Instructors.** Adopt the full closed-loop workflow rather than a single feature: in the 16-participant comparison, the combined system produced significantly higher quiz scores than Khan Academy with Gemini-2.5 Pro (Quiz 1 M=13.375 vs 10.875, p=.0126; Quiz 2 M=7.875 vs 5.875, p=.0012).
- **Designers.** Compare a new supplement against what students already do — the baseline here was an online platform paired with a general-purpose LLM, not the bare platform, so a measured advantage over Khan Academy alone would overstate the benefit.
- **Instructors.** Prioritize real-time contextual assistance if you can pilot only one component: StudyMate was the only feature with significantly higher System Usability Scale scores (p=.0148).
- **Designers.** Plan for sustained engagement beyond a single [[scaffolding|scaffolded]] session — participants asked for reminder notifications, and the studying and [[adaptive-learning|adaptation]] components are built for longer-term use than a 1.5-hour study can test.

## Limitations

- The evaluation draws on only 40 participants (24 in the preliminary study, 16 in the final study) in a single-session, within-subjects design of roughly 1.5 hours.
- All course materials came from Khan Academy's World History Project, so the findings may not transfer to STEM or other knowledge types.
- Outcomes rest on learner-reported perceptions and quiz performance rather than expert assessment of the quality of generated plans and responses.
- The baseline paired Khan Academy with Gemini-2.5 Pro rather than a platform with built-in LLM support such as KhanMigo, so the advantage over integrated systems is untested.
## Connected Concepts

- [[adaptive-learning]]
- [[agentic-ai]]
- [[personalized-learning]]
- [[scaffolding]]
- [[generative-ai]]
- [[higher-ed]]
- [[llm]]
- [[metacognition]]
- [[intelligent-tutoring]]
## Connected Articles

- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors: Integrating Tutoring Best Practices and Targeted Technologies to Produce Scalab...
- [[ai-metacognition-stem-review]] — AI Tools Scaffolding Metacognition in STEM

## Citation

Wang, X. J., Lee, C. P., & Mutlu, B. (2026). [LearnMate^2: Design and evaluation of an LLM-powered personalized and adaptive support system for online learning](https://arxiv.org/abs/2605.06257).

