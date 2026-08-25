---
title: Can LLMs Effectively Simulate Human Learners? Teachers' Insights from Tutoring LLM Students
created: "2026-08-06T04:33:04-04:00"
updated: "2026-08-22T19:45:00-04:00"
type: article
tags: [llm, student-simulation, teacher-training, dialogue-tutoring, k-12, authenticity, llm-evaluation, community-of-inquiry, scaffolding, knowledge-tracing]
sources: ['raw/papers/llm-student-simulation-teacher-insights.md']
confidence: high
---

> **Synthesis:** Semi-structured interviews with 12 teachers who tutored [[simulating-students|LLM-simulated students]] (MathDial dataset) reveal key authenticity gaps: overly complex language, lack of emotions, unnatural attentiveness, and logical inconsistency. The study categorizes four real-world student behavior types along scaffolding and presence dimensions, and provides design guidelines for building higher-fidelity LLM student simulations.

## Methodology

Martynova et al. interviewed 12 teachers who had extensively interacted with [[simulating-students|LLM-simulated students]] during collection of the MathDial [[intelligent-tutoring|dialogue tutoring]] dataset. The study used a mixed-method approach grounded in two frameworks:

- **Community of Inquiry (CoI)** — capturing social and cognitive presence in learning interactions
- **[[scaffolding|Scaffolding theory]]** — effective teaching through graduated support

Teachers tutored [[llm|LLM]] students in [[k-12|K-12]] [[math-education|math]] problem-solving dialogues, then rated realism and described deviations from authentic student behavior.

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

1. **Diverse personalities** — model Big Five personality traits to produce varied engagement levels and emotional responses
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

- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[ai-in-the-wild-college]] — AI in the Wild: A Large Scale Analysis of Authentic Interactions of College Students with Generative AI
- [[ai-interlocutor-l2-spoken-dialogue]] — What Changes When the Interlocutor Is an AI? Interactional Fluency and Linguistic Uptake in L2 Spoken Dialogue

## Citation

Learners?, C.L.E.S.H., Students, T.I.F.T.L., Daheim1,2, D.M.J.M.N., Sachan1, Ö.N.Y.X.Z.M., Fraser, E.Z.T.D.S., many, L.L.M.O., & aims, F.B.H.L.S.A.P.U.T.S. (2026). [*Can LLMs Effectively Simulate Human Learners? Teachers' Insights from Tutoring LLM Students*](https://aclanthology). Innovative Use of NLP for Building Educational Applications) **DOI:** https://aclanthology
