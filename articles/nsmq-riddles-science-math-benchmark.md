---
title: "NSMQ Riddles: A Benchmark of Scientific and Mathematical Riddles for Quizzing Large Language Models"
created: 2026-05-08
updated: 2026-05-11
type: article
tags: [benchmark, stem-education, k-12, llm, efficacy-study, pedagogical-llm-training, k-12-ai-education, automated-question-generation, ai-education]
sources: ['raw/papers/2605.07051.md']
confidence: medium
---

> Boateng et al. (2026) introduce **NSMQ Riddles**, a benchmark of 1.8K scientific and mathematical riddles drawn from 11 years of Ghana's **National Science and Maths Quiz** — a live TV competition for senior secondary school students. This is one of the first AI benchmarks originating from the **Global South** for educational evaluation.

# NSMQ Riddles: Educational Benchmark from Ghana

## Core Contribution

Boateng et al. (2026) introduce **NSMQ Riddles**, a benchmark of 1.8K scientific and mathematical riddles drawn from 11 years of Ghana's **National Science and Maths Quiz** — a live TV competition for senior secondary school students. This is one of the first AI benchmarks originating from the **Global South** for educational evaluation.

## Why It's Distinctive

Unlike standard benchmark datasets (MMLU, GSM8K), NSMQ Riddles:
- Features **progressive clue revelation** — early clues are vague (worth more points), testing incremental reasoning
- Covers **biology, chemistry, physics, and math** at the high school level
- Evaluates models against **human student performance** in a competitive format
- Represents African educational content, addressing geographic bias in [[ai-k12-evidence-base]]

The benchmark found that even state-of-the-art models (GPT-5.4, Gemini 3.1 Pro, Claude Opus 4.6) **underperform the best student contestants**, highlighting gaps in LLM scientific reasoning.

## Connections to Wiki

This benchmark connects to [[teachbench-llm-teaching-evaluation]] as another syllabus-grounded evaluation framework, but from a Global South perspective. It complements the [[educational-vlm-evaluation]] work on DrawEduMath by providing a text-based STEM reasoning benchmark. The focus on competitive quizzing connects to [[automated-question-generation]] research and [[civic-education-ai-lesson-plans]] concerns about AI-generated educational content quality.

The finding that LLMs lag behind top human students on these riddles reinforces [[tutoring-specific-vs-general-ai]] concerns — general LLMs may not match specialized educational needs, especially in non-Western contexts.

## Open Questions

- How well do [[pedagogical-llm-training]] approaches like EduQwen perform on NSMQ compared to general LLMs?
- Can the benchmark be extended to other African and Global South educational systems?
- What does the clue-progression format reveal about LLM reasoning vs. retrieval?

## Connected Concepts

- [[automated-question-generation]]
- [[k-12-ai-education]]
- [[pedagogical-llm-training]]

- [[ai-education]]
- [[k-12]]
- [[llm]]
## Connected Articles

- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[civic-education-ai-lesson-plans]] — AI-Generated Lesson Plans in Civic Education
- [[educational-vlm-evaluation]] — Educational VLM Evaluation
- [[teachbench-llm-teaching-evaluation]] — TeachBench - Evaluating LLM Teaching Ability
- [[tutoring-specific-vs-general-ai]] — Tutoring-Specific vs. General-Purpose AI in Education
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention

## Citation

al, A.G.B.N.I.S.J.E., and, N.R.A.B.O.S., Large, M.R.F.Q., Models, L., Yeboah3,4, P.A.J.A.M.K.T., and, W.E.A.K.M.N.S.Y., Kumbol2,3, V., & Zurich, E. (2026). [*NSMQ Riddles: A Benchmark of Scientific and Mathematical Riddles for Quizzing Large Language Models*](https://arxiv.org/abs/2605.07051)
