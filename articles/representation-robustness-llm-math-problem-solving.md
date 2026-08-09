---
title: Representation Robustness under Executable Reasoning Constraints in Large Language Models for Mathematical Problem Solving
created: 2026-07-24
updated: 2026-07-24
type: article
tags: [llm, stem-education, benchmark, assessment-validity, llm-cognitive-diagnosis-handwritten-math, reinforcement-learning, rag]
sources: ['raw/papers/2607.20520.md']
confidence: high
---

> **Nath, Graf, Zhang & Zapata-Rivera (2026)** — UC Santa Cruz; ETS Research Institute; University of Michigan. HCI International 2026.
This study probes how sensitive [[llm]] mathematical problem solving is to the surface representation of an item — a question with direct bearing on [[assessment-validity]] when LLMs are used for scoring or tutoring in [[stem-education]]. Systematically varying representationally equivalent formulations (story problems, word-equations, symbolic equations, and isomorphic paraphrases) across 5 contemporary LLMs, the authors find substantial representational sensitivity: models frequently flip correctness across equivalent formulations, and even subtle paraphrase-level changes degrade performance despite preserved mathematical structure. A second, code-augmented condition constraining models to externalize reasoning as executable Python reveals strong latent capability in weak models but does not uniformly improve robustness — instead failures shift from opaque reasoning errors to protocol and execution violations. The work cautions that treating formulations as interchangeable conflates reasoning errors with interface failures, complicating [[llm-math-tutoring]] and diagnostic uses like [[llm-cognitive-diagnosis-handwritten-math]]. It connects to measurement concerns in [[reinforcement-learning-measurement-model-assessment]] and to reasoning scaffolds in [[epistemic-proactivity-math]].

## Connected Concepts

- [[assessment-validity]]
- [[llm]]
- [[llm-cognitive-diagnosis-handwritten-math]]

- [[rag]]
- [[reinforcement-learning]]
## Connected Articles

- [[epistemic-proactivity-math]] — From Prompting to Epistemic Proactivity: Temporal Trajectories of Student-AI Interaction in Mathematics Learning
- [[reinforcement-learning-measurement-model-assessment]] — Reinforcement Learning Measurement Model
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-generated-instructional-videos-computing-ed]] — Student Perceptions and Preferences Regarding AI-Generated Instructional Videos in Computing Education
- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[ai-in-the-wild-college]] — AI in the Wild: A Large Scale Analysis of Authentic Interactions of College Students with Generative AI
- [[ai-interlocutor-l2-spoken-dialogue]] — What Changes When the Interlocutor Is an AI? Interactional Fluency and Linguistic Uptake in L2 Spoken Dialogue
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-learning-assistants-higher-ed-large-scale]] — Using AI-based Learning Assistants in Higher Education: A Large-Scale Descriptive Analysis
- [[ai-learning-companions-framework]] — Building AI Companions that Prioritise Learning over Performance
- [[ai-learning-tools-engineering-education-needs]] — Designing Needs- and Attention-Aware AI Learning Tools for Engineering Education: Insights from Psychological Outcomes

## Citation

Nath, Graf, Zhang & Zapata-Rivera (2026). [Representation Robustness under Executable Reasoning Constraints in Large Language Models for Mathematical Problem Solving](https://arxiv.org/abs/2607.20520). arXiv:2607.20520. HCI International 2026.
