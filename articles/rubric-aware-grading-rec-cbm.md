---
title: "REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading"
created: 2026-05-28
updated: 2026-05-28
type: article
tags: [automated-grading, llm, formative-assessment, higher-ed, scaffolding, efficacy-study, generative-ai, ai-literacy, assessment-validity]
sources: ['raw/papers/2605.27402.md']
confidence: medium
---

> **Zhao et al. (2026)** — Arizona State University. *arXiv preprint*.
**REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models** advances the [[automated-grading]] frontier by solving a fundamental trust problem: even accurate AI graders are unusable if educators cannot verify their reasoning. Standard [[llm]]-based graders operate as black boxes, while earlier Concept Bottleneck Models (CBMs) offer interpretability but fail at modeling rubric dimensions, ordinal score semantics, and noisy human annotations. REC-CBM introduces three innovations: (1) a rubric-aware concept encoder that learns concept-specific representations aligned with actual grading rubrics, (2) an ordinal pairwise calibration objective that preserves score ordering (e.g., 'poor' < 'fair' < 'good'), and (3) a latent error-correction module that denoises concept predictions while maintaining full interpretability. Experiments demonstrate consistent improvements in both grading accuracy and concept-level reasoning faithfulness over baselines. This work directly addresses [[assessment-validity]] concerns raised in [[genai-assessment-governance]] and complements [[automatic-short-answer-grading]] by adding the interpretability dimension. The rubric-aware design aligns with [[formative-assessment]] needs and [[scaffolding]] principles, and the error-correction approach resonates with work on [[ground-truth-reliability-aied]].

## Connected Concepts

- [[ai-literacy]]
- [[assessment-validity]]
- [[automated-grading]]
- [[formative-assessment]]
- [[generative-ai]]
- [[higher-ed]]
- [[llm]]
- [[scaffolding]]

## Connected Articles

- [[automatic-short-answer-grading]] — Automatic Short Answer Grading with LLMs
- [[genai-assessment-governance]] — Generative AI as a Design Variable: An Evidence-Centered Framework for Principled Governance in STEM Assessment
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education
- [[modular-educational-llm-agency]] — Modularizing Educational LLM-Agency for Fostering Responsible Learning Assistance
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

## Citation

Chengshuai Zhao, Fan Zhang, Kumar Satvik Chaudhary, Yiwen Li, Lo Pang-Yun Ting, Ying-Chih Chen, Huan Liu (2026). [REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading](https://arxiv.org/abs/2605.27402). arXiv:2605.27402. arXiv preprint.
