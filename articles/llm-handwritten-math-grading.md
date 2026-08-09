---
title: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs
created: 2026-05-22
updated: 2026-05-22
type: article
tags: [automated-grading, llm, stem-education, higher-ed, efficacy-study, multimodal, automated-question-generation, llm-cognitive-diagnosis-handwritten-math, ai-tutoring, formative-assessment]
sources: ['raw/papers/2605.19043.md']
confidence: high
---

> **Jacob Levine, Miguel Aenlle, Craig Zilles, Matthew West, Mariana Silva (2026)** — University of Illinois Urbana-Champaign. International Conference on AI in Education (AIED 2026).

Automated grading systems have enabled scalable assessment for many response types, but handwritten mathematics remains a barrier due to the complexity of multi-step solutions. Vision-capable large language models (LLMs) offer new opportunities here, yet their reliability in authentic instructional settings remains poorly understood.


This paper presents an empirical evaluation of a vision-capable LLM-based grader for handwritten mathematical work. Using a single LLM call that combines transcription and rubric-based evaluation, the system was tested on student work from two university STEM courses. The grader achieved high overall accuracy at the rubric-item level, with 87% of errors in the best model attributed to transcription failures rather than rubric misapplication. The authors categorize common error modes — image quality issues, hallucinated content, and incorrect handling of equivalent expressions — providing guidance for system design, prompt refinement, and deployment. This work extends the [[automated-grading]] pipeline to the previously unexplored domain of handwritten mathematics, complementing systems like [[lata-ferpa-compliant-local-llm-autograder]] that focus on typed LaTeX submissions. Unlike typed-response graders that achieve near-perfect rubric alignment, the vision pipeline introduces new failure modes around handwriting recognition that echo the diagnostic precision challenges identified in [[llm-tutoring-feedback-diagnosis-gap]]. The finding that the LLM can correctly apply instructor rubrics when transcription succeeds suggests that [[multimodal-ai-tutoring]] approaches can bridge the gap between visual input and pedagogical assessment, while remaining sensitive to the limitations documented in [[educational-vlm-evaluation]].

## Connected Concepts

- [[automated-grading]]
- [[automated-question-generation]]
- [[llm-cognitive-diagnosis-handwritten-math]]

## Connected Articles

- [[automated-formative-assessments-a-level-sciences]] — The Effect of High-Frequency, Automatically-marked Formative Assessments on Student Outcomes in A-Level Sciences
- [[educational-vlm-evaluation]] — Educational VLM Evaluation
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework
- [[llm-tutoring-feedback-diagnosis-gap]] — Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most
- [[multimodal-ai-tutoring]] — Multimodal AI Tutoring in STEM
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
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education

## Citation

Jacob Levine, Miguel Aenlle, Craig Zilles, Matthew West, Mariana Silva (2026). [Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs](https://arxiv.org/abs/2605.19043). arXiv:2605.19043. International Conference on AI in Education (AIED 2026).
