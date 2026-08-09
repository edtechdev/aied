---
title: "CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback"
created: 2026-08-03
updated: 2026-08-03
type: article
tags: [formative-assessment, automated-grading, human-in-the-loop, prompt-engineering, benchmark, ai-ed-evaluation, assessment-validity, llm]
sources: ['raw/papers/cotal-formative-assessment-scoring-2026.md']
confidence: high
---

> 1. **Evidence-Centered Design (ECD)** — assessments and rubrics aligned to curriculum goals from the start 2. **Human-in-the-loop prompt engineering** — labelled examples and prompts refined iteratively with educators 3. **Chain-of-thought (CoT) prompting + active learning** — teacher and student feedback loops refine questions, rubrics, and LLM prompts across iterations

# CoTAL: Formative Assessment Scoring with Human-in-the-Loop Prompt Engineering

> Cohn, Ashwin T S, Mohammed & Biswas (2026) introduce **CoTAL** (Chain-of-Thought Prompting + Active Learning): an LLM grading pipeline that couples Evidence-Centered Design with human-in-the-loop prompt engineering and iterative teacher/student feedback refinement. It improves GPT-4's scoring by **up to 38.9% over a non-prompt-engineered baseline** and generalises across science, computing, and engineering — direct evidence that prompt-engineering quality, not model choice, is often the binding constraint in [[automated-grading]].

## How it works

1. **Evidence-Centered Design (ECD)** — assessments and rubrics aligned to curriculum goals from the start
2. **Human-in-the-loop prompt engineering** — labelled examples and prompts refined iteratively with educators
3. **Chain-of-thought (CoT) prompting + active learning** — teacher and student feedback loops refine questions, rubrics, and LLM prompts across iterations

## Findings

- **Up to +38.9% scoring performance** over a non-prompt-engineered baseline (no labelled examples, no CoT, no iterative refinement)
- Gains demonstrated **across domains**: science, computing, engineering (the generalisation question most grading papers ignore)
- **Teachers and students rate CoTAL effective** at scoring and explaining responses
- Their feedback yields insights that improve grading accuracy and explanation quality

## Connected Concepts

- [[ai-ed-evaluation]]
- [[assessment-validity]]
- [[automated-grading]]
- [[formative-assessment]]
- [[prompt-engineering]]

## Connected Articles

- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[ai-in-the-wild-college]] — AI in the Wild: A Large Scale Analysis of Authentic Interactions of College Students with Generative AI
- [[ai-interlocutor-l2-spoken-dialogue]] — What Changes When the Interlocutor Is an AI? Interactional Fluency and Linguistic Uptake in L2 Spoken Dialogue
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base

## Citation

Cohn, C., Ashwin T S, Mohammed, N., & Biswas, G. (2026). [CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback](https://arxiv.org/abs/2504.02323). arXiv:2504.02323. Under review, Computers and Education: Artificial Intelligence.
