---
title: Surfacing Isolated Learners with Outcome-Independent Mediation of Feedback between Teachers and Students Using AI
created: 2026-06-01
updated: 2026-06-01
type: article
tags: [learning-analytics, teacher-role, higher-ed, student-experience, feedback-loop, ai-literacy, help-seeking]
sources: ['raw/papers/2605.29240.md']
confidence: medium
---

> **Authors:** Junsoo Park, Youssef Medhat, Htet Phyo Wai, Ploy Thajchayapong, Ashok K. Goel (2026) — Georgia Tech

# Surfacing Isolated Learners

**Authors:** Junsoo Park, Youssef Medhat, Htet Phyo Wai, Ploy Thajchayapong, Ashok K. Goel (2026) — Georgia Tech

## What It Is

An **interpretable decision layer** that ranks course topics needing instructor attention without using grades or post-hoc outcome labels. The system combines three process-level signals to identify which topics (and which students) need intervention before formal assessments.

## How It Works

Three signals feed into a topic priority score:

1. **Gap prevalence (Rₜ)**: Fraction of students showing difficulty with topic t, detected from Jill Watson interaction traces
2. **Survey disagreement (Dₜ)**: Difference between observed difficulty and student self-reports — captures blind spots
3. **Teacher friction (F)**: Unresolved instructor concerns coded from semi-structured interviews

Topic priority: `Pₜ = 0.70·Rₜ + 0.20·Dₜ + 0.10·F`

Output is a ranked set of topic priorities with per-topic decision records explaining each ranking.

## Key Results

- **Instructor alignment**: Top-5 mediated topics overlapped with instructor concerns on 3/5 topics; Spearman ρ = 0.80
- **Student difficulty alignment**: ρ = 0.46 (p = .048) — captures something beyond simple difficulty surveys
- **Isolated learner detection**: Multi-signal integration AUC = 0.96 vs. 0.91 for gap prevalence alone — identified 2 isolated learners not detected by any single signal
- **Construct validity**: Reflective thinking, help-seeking, and self-efficacy aligned with topic understanding scores

## Why It Matters

This is one of the first systems to operationalize **human-AI co-agency** in classroom settings. The interpretable outputs help teachers trust and act on AI-provided priorities when grades are not yet available. By combining multiple weak signals, the system surfaces students who would otherwise be invisible — a critical capability for equitable instruction.

## Limitations

- Single graduate CS course (n=279 surveys, n=5 instructor interviews)
- Preliminary findings — not yet generalizable across diverse contexts
- Weights set by researcher co-design, not learned from data

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
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming

## Citation

Park, J., Medhat, Y., Wai, H. P., Thajchayapong, P., & Goel, A. K. (2026). *Surfacing isolated learners with outcome-independent mediation of feedback between teachers and students using AI*. arXiv:2605.29240. HAI-Agency Workshop, AIED 2026.
