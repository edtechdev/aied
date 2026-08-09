---
title: "EduGuard: A Safe RAG-Based LLM Tutor for Programming Education"
created: 2026-07-20
updated: 2026-07-20
type: article
tags: [llm, generative-ai, intelligent-tutoring, stem-education, over-reliance, hallucination-risk, feedback-loop, benchmark, pedagogical-llm-training, rag]
sources: ['raw/papers/2607.15738.md']
confidence: high
---

> **Hossain, S. M. A., Shayoni, R. K., Mridha, M. F., & Shin, J. (2026)** — arXiv:2607.15738 (cs.CY).
EduGuard is a retrieval-augmented generation (RAG) tutoring framework that directly confronts the safety and pedagogical failures of unrestricted LLM tutors in introductory programming. Unrestricted tutors hallucinate, contradict course policy, reveal complete solutions, and foster passive dependence; EduGuard counters these with query understanding, instructor-approved course retrieval, pedagogical-strategy selection, rubric-aware generation, claim-level verification, and explicit overreliance control. The design maps onto the [[ai-tutor-safety-harms]] taxonomy and directly targets [[hallucination-risk]] and [[over-reliance]] in deployed tutors.

To make evaluation provenance explicit the authors build BILearn-CS, a 600-query instructor-authored, TA-validated benchmark spanning concept questions, debugging, misconceptions, assignment support, code-mixed Bangla-English queries, and adversarial direct-answer prompts, then validate on a public CS50-style forum set and a small n=10 pre/post-test pilot. This contributes a rare benchmark for safe tutoring and extends the [[programming-its]] and [[llm-feedback-programming-classroom]] literature with a verifier-separated architecture (DeBERTa-v3-large-MNLI as an architecturally separate claim verifier) that improves on [[structured-llm-feedback-programming]] baselines and GPT-4o-mini and Llama Socratic tutors. The work is also a concrete instance of [[pedagogical-llm-training]] where safety and pedagogy are baked into the generation pipeline rather than retrofitted.

## Connected Concepts

- [[pedagogical-llm-training]]

- [[generative-ai]]
- [[llm]]
- [[rag]]
## Connected Articles

- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[didactical-teacher-assistant-dimensional-modeling]] — A didactical-driven teacher assistant for a dimensional modeling course
- [[llm-feedback-programming-classroom]] — LLM-Generated Feedback in Introductory Programming: A Classroom Study
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams

## Citation

Hossain, S. M. A., Shayoni, R. K., Mridha, M. F., & Shin, J. (2026). [EduGuard: A Safe RAG-Based LLM Tutor for Programming Education](https://arxiv.org/abs/2607.15738). arXiv:2607.15738.
