---
title: "From Heuristics to Analytics: Forecasting Effort and Progress in Online Learning"
created: 2026-05-20
updated: 2026-05-22
type: article
tags: [intelligent-tutoring, learning-analytics, engagement-metrics, k-12, efficacy-study, benchmark, scaffolding, rag, ai-tutoring, metacognition]
sources: ['raw/papers/2605.12788.md']
confidence: high
---

> **Qiu, Thomas, Guo, Aleven & Borchers (2026)** — EDM 2026.
## Overview

This paper tackles a core ITS challenge: predicting when students will disengage so tutors can intervene before it's too late. It introduces **engagement forecasting** as a supervised prediction task with two complementary targets: minutes practiced per week (effort) and new skills mastered per week (progress).


**Benchmarking 15 predictors on 425 middle-school students:**
- Feature-based models (regressions, decision trees, neural networks) reduce **MAE by 22–33%** compared to heuristic baselines
- Percentile heuristics (adapted from prior behavioral domains) systematically **overpredict** — they assume past behavior continues, missing disengagement signals
- Feature-based models better track actual practice trajectories week-to-week

**Distinct predictive signatures for effort vs. progress:**
- **Effort forecasting** driven primarily by **recent activity features** (how much the student practiced recently)
- **Progress forecasting** depends more on **learner-state** and **content difficulty** signals (what the student knows and how hard the material is)

**Human validation:** Semi-structured interviews with 8 college tutors confirmed that tutors reason differently about effort goals vs. progress goals, mirroring the model's feature importance patterns. This strengthens the case for practical deployment.

## Implications for Intelligent Tutoring Systems

This work shifts ITS analytics from reactive to **predictive**. Instead of flagging disengagement after it happens, engagement forecasting enables:
- **Proactive tutor-learner goal setting** with data-driven weekly targets
- **Early warning systems** that surface at-risk students before they fall behind
- **Differentiated intervention** based on whether effort or progress is the primary concern

The finding that effort and progress have distinct predictive signatures is practically important. A student practicing diligently but struggling with difficult content needs different support than one who is simply not logging in. Current ITS dashboards often conflate these signals; engagement forecasting disentangles them.

## Connections to the ITS Research Landscape

This paper extends the [[ai-tutor-effectiveness-review]] findings on what makes ITS effective by adding a temporal prediction layer. Where prior work evaluates whether tutoring works on average, engagement forecasting asks *when* it works and *for whom* — connecting to the personalized intervention paradigm in [[collaborative-ai-tutoring]].

The focus on middle-school students (N=425) aligns with the [[ai-k12-evidence-base]], which calls for more rigorous K-12 efficacy studies. The EDM 2026 venue, combined with [[genai-tutor-engagement-patterns]], suggests engagement analytics is becoming a recognized subfield within educational data mining.

## Methodological Contribution

The paper establishes a **reproducible benchmark** for engagement forecasting, with clearly defined prediction targets, a documented feature set, and public interaction log data. This is significant for the [[benchmark]] landscape in AIED, where many systems are evaluated on proprietary data with incomparable metrics.

## Connected Concepts

- [[learning-analytics]]

## Connected Articles

- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-metacognition-stem-review]] — AI Tools Scaffolding Metacognition in STEM
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[collaborative-ai-tutoring]] — Collaborative AI Tutoring
- [[genai-tutor-engagement-patterns]] — Not All Students Engage Alike: Multi-Institution Patterns in GenAI Tutor Use
- [[physiological-signals-exam-outcomes-ml]] — Leveraging Physiological Signals to Predict Exam Outcomes with Machine Learning
- [[simulating-learner-task-selection]] — Simulating Learners' Task-Selection Strategies and System Constraints in Mastery Learning
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice

## Citation

Qiu, E. S., Thomas, D. R., Guo, B., Aleven, V., & Borchers, C. (2026). [From Heuristics to Analytics: Forecasting Effort and Progress in Online Learning.](https://arxiv.org/abs/2605.12788) arXiv:2605.12788. EDM 2026.
