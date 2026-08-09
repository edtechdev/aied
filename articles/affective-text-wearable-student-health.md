---
title: A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
created: 2026-05-17
updated: 2026-05-17
type: article
tags: [affective-computing, student-experience, higher-ed, learning-analytics, affective-tutoring, llm]
sources: ['raw/papers/2605.14360.md']
confidence: medium
---

> **Tamunotonye Harry, Johanna Hidalgo, Matthew Price, Yuanyuan Feng, Kathryn Stanton, Connie Tompkins, Peter Sheridan Dodds, Mikaela Irene Fudolig, Laura Bloomfield, Christopher Danforth (2026)** — University of Vermont and collaborators. arXiv:2605.14360 [cs.HC]. Submitted to ACM IMWUT.

# Brief Affective Text and Wearable Sensing for Student Health Monitoring

## Key Findings

In a year-long study of 458 university students (3,610 person-waves) using Oura rings for passive physiological sensing, researchers examined whether **ultra-brief affective text prompts** (median 3-word responses to "what concerns you most?") could enrich the interpretation of wearable data. Using NLP methods spanning dictionary-based (LIWC), general pretrained embeddings, and domain-adapted models:

- **Academic concern framing** was associated with lower physical activity
- **Emotional exhaustion language** was associated with poorer sleep quality and lower heart rate variability (HRV)
- **General pretrained embeddings outperformed** domain-adapted models for most health outcomes
- **Domain adaptation** showed relative advantage only for autonomic nervous system measures
- **Affective dimensions** (emotional register) were consistently associated with outcomes across all NLP methods — *how* students express concerns matters more than *what* they are concerned about

## Methodological Significance

The finding that emotional register rather than topical content carries predictive signal has implications for [[engagement-assessment-video]], [[genai-tutor-engagement-patterns]], and other work that analyzes student language for learning signals. It suggests that **simple affective prompts at minimal burden** may be more scalable than complex topic classification for educational well-being systems.

## Connection to AI Campus Well-Being

This study provides empirical grounding for the kind of affective monitoring infrastructure imagined in [[ai-campus-wellbeing-tools]]. While Tang's framework proposes integrated AI tools (TigerGPT, AURA, PsychoGPT) for campus well-being, Harry et al. demonstrate that even ultra-brief, low-burden text prompts — analyzed with standard NLP — can surface meaningful psychological signals tied to physiological outcomes.

## Implications for Learning Analytics

The dissociation between topic and affect aligns with [[multimodal-ai-feedback-learning]] research showing that *how* students interact with AI systems often matters more than *what* they produce. For [[learning-analytics]] dashboards and early-warning systems, this suggests tracking emotional tone in student communications may be more predictive than categorizing concern topics.

## Connected Concepts

- [[affective-tutoring]]
- [[learning-analytics]]
- [[student-experience]]

- [[affective-computing]]
- [[higher-ed]]
- [[llm]]
## Connected Articles

- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[engagement-assessment-video]] — Engagement Assessment in Video Learning
- [[epistemic-emotions-collaborative-problem-solving]] — Ordered Network Analysis of Epistemic Emotions during Collaborative Problem Solving
- [[genai-tutor-engagement-patterns]] — Not All Students Engage Alike: Multi-Institution Patterns in GenAI Tutor Use
- [[multimodal-ai-feedback-learning]] — LLM-based Multimodal AI Feedback Produces Equivalent Learning and Better Student Perceptions than Educator Feedback
- [[physiological-signals-exam-outcomes-ml]] — Leveraging Physiological Signals to Predict Exam Outcomes with Machine Learning
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis

## Citation

Harry, T., Hidalgo, J., Price, M., Feng, Y., Stanton, K., Tompkins, C., Dodds, P. S., Fudolig, M. I., Bloomfield, L., & Danforth, C. (2026). [A formative study of brief affective text as a complement to wearable sensing for longitudinal student health monitoring](https://arxiv.org/abs/2605.14360). arXiv:2605.14360 [cs.HC]. Submitted to ACM IMWUT.
