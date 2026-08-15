---
title: Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement
created: 2026-07-29
updated: 2026-08-15
type: article
tags: [self-regulated-learning, generative-ai, higher-ed, student-experience, engagement-metrics, efficacy-study, scaffolding, metacognition, llm]
sources: ['raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md']
confidence: high
---

## Summary

A **randomized 2×2 full-factorial field experiment** (N = 179 German university students, 22 days of app use, 12-week follow-up) testing two design principles for a **mobile chatbot-based learning journaling system** aimed at keeping students motivated to maintain reflective learning journals — a known pain point (rapid decline in motivation/engagement after brief use). The two principles: (1) an **example-based built-in course** (7 days, one SRL topic per day, time-gated, modeled example responses) and (2) an **LLM-based journaling assistant** (GPT-3.5-turbo-1106) that scaffolds entries by summarizing drafts, asking clarifying follow-up questions, and generating alternative first-person formulations.

## Design & method

- **Groups:** Baseline (B, n=53) | Assistant (A, n=53) | Course (C, n=52) | Course+Assistant (CA, n=52); stratified randomization (gender, age, LIST-K SRL scales).
- **Measures:** Intrinsic Motivation Inventory (IMI: enjoyment, perceived choice, pressure, competence, effort); LIST-K (SRL: cognition, metacognition, internal/external resource strategies) at pre/post/12-week follow-up; **behavioral engagement = characters written per journal prompt** (7,286 responses; 1,904 entries; mean 10.64 entries/student).
- Engagement analyses: multiple regression + mixed-effects robustness check; outliers trimmed (top 1% and single-word messages removed → 5,181 messages, M = 71.87 chars).

## Key findings

### Intrinsic motivation (H1/H2)
- **Course → motivation: SUPPORTED.** Small significant effect on enjoyment (η² = 0.03, F(1,153) = 4.81, p < .05) and perceived competence (η² = 0.04, F(1,154) = 5.77, p < .05). No effect on perceived choice or pressure.
- **Assistant → motivation: NOT SUPPORTED.** No significant effect on enjoyment (p = .67) or competence (p = .95); no interaction between features. Even usage-days analysis found no competence effect (t = 1.95, p = .054).

### Behavioral engagement (H3/H4)
- **Both features SUPPORTED.** Regression on characters written: Assistant B = 18.32***, Course B = 22.95***, with a significant **negative interaction** (Course×Assistant B = −15.21***) — mean message lengths B 51.21 → A 71.25 / C 79.26 / CA 83.04.
- **Distinct mechanisms:** the course's effect was *constant* (unrelated to course days completed), while the **assistant formed a positive feedback loop** — more assistant use predicted longer messages over time (B = 6.20 per assistant day, p < .001), echoing the social-cognitive modeling account (Schunk): the assistant's model adapts, the course's static examples do not.

### Course benefit is temporary
- Course users were far more likely to be "early" writers (OR = 3.45, p < .001) — less reliant on the 9 PM notification — but **significantly fewer reached 10+ journal days** (OR = 0.38, p < .001): most completed the 7-day course, journaled one more day, then stopped. Static one-off scaffolding stimulates early activity but does not sustain it.

### SRL development
- All groups (including baseline) significantly increased cognitive and metacognitive strategy use from pre to 12-week follow-up (p < .05) — the structured prompting concept itself supported SRL, unlike earlier structured-journal studies.
- 32 of 97 users reported the auto-generated summaries helped them reflect on prior entries (an unprompted purpose).

## Implications

- For reflective-learning-tool design: pair one-off course-style scaffolding with **recurring/adaptive support** (follow-up prompts, phase-specific guidance, timely interventions) to sustain engagement; the LLM assistant is the more promising candidate for durable engagement dynamics, but needs to be used (only 55.9% used it post-onboarding — a self-selection caveat).
- Engagement measured as text length only; cognitive engagement/reflection quality untested. Implementation is a single instantiation; seasonal/semester effects possible; long-term effects beyond 3 weeks unverified.

## Connected Concepts

- [[generative-ai]]
- [[higher-ed]]
- [[metacognition]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[student-experience]]
- [[llm]]
- [[motivation]]
- [[engagement-metrics]]
- [[feedback-loop]]
## Connected Articles

- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams

## Citation

Scheu, S., Loeffler, S. N., & Maedche, A. (2026). Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement. [*International Journal of Educational Technology in Higher Education*](https://doi.org/10.1186/s41239-026-00589-7), 23, 15
