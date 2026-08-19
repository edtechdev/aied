---
title: Generative AI Can Harm Teaching
created: "2026-08-03T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [faculty-development, teacher-role, generative-ai, k-12, student-experience, cognitive-offloading, cognitive-offloading, rct, teacher-ai-competency, rag]

sources: ['raw/papers/genai-can-harm-teaching-rct-2026.md']
confidence: high
---

> The null average performance effect masks strong offsetting heterogeneity — and the exam had severe ceiling compression (control mean 89.2/100, 47% ≥ 95), which also limits power. The belief reversal is striking: it contradicts "familiarity breeds acceptance" and suggests an arc from initial awe at AI's instant responses to awareness of its unintended effects.

> Sungu, Lira & Duckworth (2026) ran one of the first large-scale RCTs of a teacher-facing generative AI tool and found it can *harm* students: providing teachers an AI teaching assistant **reduced student intrinsic motivation by 0.11 SD** and — among lower-performing teachers — **cut student achievement by 0.13 SD**. The pattern is a **principal–agent problem**: teachers (agents) gain labor savings from AI delegation while students (principals) bear the cost of displaced relational teaching and scaffolding.

## The experiment

- **538 teachers across 24 Turkish K-12 schools** randomized at school-department level; analytical sample 193 teachers / 2,816 students / 14,198 student-course observations
- Treatment: custom **GPT-4o chatbot** with Turkish Ministry of Education curriculum database + 1-hour training (one arm added weekly usage-stat reminders); control = business-as-usual
- Pre-registered; ITT; semester-length (spring 2025)

## Results

| Outcome | Average effect | Heterogeneity |
|---|---|---|
| Student intrinsic motivation | **−0.111 SD** (p=.015) | Heavy baseline AI users: −0.182 (p=.015); light users: −0.052 (ns) |
| Student confidence | −0.090 SD (p=.097) | Lower-performing teachers: −0.183 (p=.012); higher: −0.022 (ns) |
| Academic performance | −0.019 SD (ns, ceiling-compressed) | **Below-median teachers' students: −0.129 (p=.005)**; above-median: +0.054 (ns) |
| Teacher beliefs about AI's effect on learning | +0.126 SD (ns) | Heavy prior users became *more pessimistic* (−0.379); light users *more optimistic* (+0.458) |

The null average performance effect masks strong offsetting heterogeneity — and the exam had severe ceiling compression (control mean 89.2/100, 47% ≥ 95), which also limits power. The belief reversal is striking: it contradicts "familiarity breeds acceptance" and suggests an arc from initial awe at AI's instant responses to awareness of its unintended effects.

## Why the harm happens: usage patterns

- **66% of teacher conversations were teaching-material production** (lecture prep 32%, homework/exam 22%, syllabus 9%); only 16% instructional support; 18% general
- **Shallow use: median 2 prompts, mean 4.7 messages** per session — teachers accepted outputs with minimal iteration
- Interpretation: **task delegation, not pedagogical collaboration** — the tool was a generator of finished artifacts rather than an iterative partner, limiting the pedagogical reflection that separates augmentation from substitution

## Connected Concepts

- [[generative-ai]]
- [[k-12]]
- [[student-experience]]
- [[teacher-ai-competency]]
- [[teacher-role]]
- [[rag]]
- [[motivation]]
- [[cognitive-offloading]]

## Connected Articles

- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: redesigning authentic assessment in an AI-mediated world
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of generative AI
- [[genai-expertise-pathways-sysadmin]] — Unanticipated Effects of Generative AI on Expertise Pathways and Performance Perception in System Administration
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming

## Citation

Sungu, Lira & Duckworth (2026). [*Generative AI Can Harm Teaching*](https://ssrn.com/abstract=7007339)
