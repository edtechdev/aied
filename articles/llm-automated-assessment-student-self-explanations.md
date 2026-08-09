---
title: Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education
created: 2026-05-23
updated: 2026-05-23
type: article
tags: [llm, automated-grading, feedback-loop, stem-education, higher-ed, scaffolding, self-regulated-learning, metacognition]
sources: ['raw/papers/2605.21614.md']
confidence: medium
---

> **Lekshmi-Narayanan, Hassany & Brusilovsky (2026)** — University of Pittsburgh. arXiv preprint (cs.HC, cs.LG).

This paper presents a rigorous empirical comparison between [[llm|LLM]]-based and semantic similarity methods for [[automated-grading|automated assessment]] of student self-explanations in programming education. The task is framed as binary classification — determining whether a student's explanation of a worked-example step is correct or incorrect.

Worked examples — step-by-step problem solutions — are a well-established [[scaffolding]] technique, and their effectiveness increases when students are prompted to self-explain each step. However, manually assessing these [[self-regulated-learning|self-explanations]] doesn't scale. The prevailing approach has been to compare student responses to reference explanations using semantic similarity metrics, but recent advances in large language models raise the question of whether LLM-based scoring now outperforms these traditional methods.

The authors address a critical gap: high-quality, domain-specific datasets with balanced class distributions for automated scoring tasks. Their contribution is both methodological (a rigorous comparison framework) and empirical (which approach works better, and under what conditions).


- **Binary classification framing**: Self-explanations scored as correct or incorrect, a practical framing for real-world deployment in [[intelligent-tutoring|intelligent tutoring systems]]
- **Dataset contribution**: Domain-specific labeled data for programming self-explanations with balanced classes
- **Method comparison**: LLM-based scoring versus semantic similarity methods, with systematic evaluation
- **Practical implications**: Guidance for building [[feedback-loop|automated feedback]] systems in [[programming-its|programming education]]

## Connection to Wiki

This work extends the [[automated-grading]] landscape by addressing a specific gap: assessment of open-ended self-explanations rather than final answers or code submissions. It complements research on [[automatic-short-answer-grading]] and [[structured-llm-feedback-programming]] by focusing on the formative, metacognitive dimension of student learning rather than summative evaluation.

## Connected Concepts

- [[automated-grading]]
- [[llm]]
- [[metacognition]]
- [[scaffolding]]
- [[self-regulated-learning]]

## Connected Articles

- [[aiawe-automated-writing-evaluation]] — AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models
- [[automatic-short-answer-grading]] — Automatic Short Answer Grading with LLMs
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
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
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis

## Citation

Lekshmi-Narayanan, A.-B., Hassany, M., & Brusilovsky, P. (2026). [Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education](https://arxiv.org/abs/2605.21614). arXiv:2605.21614.
