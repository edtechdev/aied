---
title: Explainable Artificial Intelligence in Education (XAI-ED)
created: 2026-05-21
updated: 2026-05-21
type: article
tags: [intelligent-tutoring, learning-analytics, bias-mitigation, equity, privacy, metacognition, teacher-role, student-experience, adaptive-learning, ai-literacy]
sources: ['raw/papers/khosravi-xai-education-2022.md']
confidence: high
---

> **Khosravi, Buckingham Shum, Chen, Conati, Tsai, Kay, Knight, Martinez-Maldonado, Sadiq & Gašević (2022)** — Computers and Education: Artificial Intelligence, 3, 100074.
📄 DOI: 10.1016/j.caeai.2022.100074 | [PDF](raw/papers/khosravi-xai-education-2022.pdf)

## Core Contribution

This paper introduces **XAI-ED**, a framework for explainable AI that is purpose-built for education. It argues that while XAI in education shares common ground with broader XAI (accountability, fairness, privacy), education has *distinctive needs*: learning data is noisy at many levels, explanations can directly support metacognition and self-regulated learning, and different stakeholders need fundamentally different kinds of explanations.

## The XAI-ED Framework — Six Aspects

### 1. Stakeholders
XAI in education must serve multiple audiences — learners, teachers, administrators, parents, researchers, developers, and policymakers — each with different explainability requirements. A learner needs to understand *why* a hint was given; a teacher needs to understand *which* students are at risk and *why*; a developer needs to debug model behavior. This connects to [[teacher-role]] and [[student-experience]] research on multi-stakeholder design.

### 2. Benefits
Explanations serve multiple purposes in educational contexts:
- **Trust** — building confidence in AI-driven recommendations and assessments
- **Fairness** — detecting and mitigating algorithmic [[bias-mitigation]]
- **Debugging** — helping developers and researchers identify model flaws
- **Usability** — making AI interfaces more transparent and actionable
- **Learning** — explanations as *pedagogical tools* that support [[metacognition]]
- **Regulatory compliance** — GDPR right to explanation and similar mandates ([[privacy]], [[regulation]])
- **Adoption** — reducing resistance to AI tools among educators

### 3. Approaches for Presenting Explanations
The paper catalogs multiple explanation modalities: visual (heatmaps, decision trees), textual (natural language), example-based (counterfactuals, nearest neighbors), feature importance rankings, rule extraction, and model simplification. The key insight is that the optimal approach depends on the stakeholder and the pedagogical context — an insight directly relevant to [[scaffolding]] design and [[intelligent-tutoring]] interface research.

### 4. Classes of AI Models
The framework maps explanation approaches to model types:
- **White-box** (decision trees, linear models, rule-based systems) — inherently interpretable
- **Black-box** (neural networks, ensemble methods) — require post-hoc explanation methods
- **Glass-box** — newer approaches that balance accuracy with transparency

This taxonomy connects to the [[adaptive-learning]] literature's ongoing tension between model complexity and interpretability.

### 5. Human-Centred Design
Explanations are not purely technical artifacts — they are communication acts. The interface must be designed for the specific stakeholder's cognitive needs, not just optimized for technical accuracy. This aligns with [[ai-literacy]] research showing that technical transparency without pedagogical framing often fails to support actual understanding.

### 6. Potential Pitfalls
The framework identifies risks specific to educational XAI:
- **Explanation overload** — too much information overwhelms users, undermining the benefit
- **Misleading explanations** — post-hoc explanations may not reflect actual model reasoning
- **Confirmation bias** — users may selectively attend to explanations that confirm existing beliefs
- **Over-trust** — explanations can create false confidence in flawed systems, connecting to [[over-reliance]]
- **Gaming the system** — students may exploit explanations to circumvent learning, a known risk in [[intelligent-tutoring]]

## Four Case Studies

### OnTask — Instructor-Facing Learning Analytics
A learning analytics platform that provides instructors with interpretable student risk indicators. XAI-ED applied to surface the rules and features driving each risk flag, enabling instructors to make informed interventions. Demonstrates the [[teacher-role]] shift toward data-informed decision-making.

### OATutor — Adaptive Tutoring System
An open-source ITS where XAI explains mastery predictions and hint selections to both students and instructors. Connects to [[intelligent-tutoring]] and [[adaptive-learning]] research on transparency in automated instruction.

### SRES — Student-Facing Recommender
A learning resource recommender that explains *why* specific resources are suggested based on the learner's knowledge state and goals. Supports [[self-regulated-learning]] by making the recommendation logic visible and actionable.

### CLA (Connected Learning Analytics) — Multimodal Collaboration
Analytics for collaborative learning environments that surface group dynamics and individual contributions. XAI helps students and instructors understand team interaction patterns — connecting to [[collaborative-learning]] and [[learning-analytics]] research.

## Significance for AIED

The XAI-ED framework has become a foundational reference in AIED, cited across the [[ai-k12-evidence-base]], [[ai-tutor-safety-harms]], and [[ai-literacy]] literatures. It bridges the gap between technical XAI research (which often ignores pedagogical context) and educational practice (which often treats AI as a black box). The framework's emphasis on *distinctive educational needs* anticipates later work on [[pedagogical-safety]] and [[human-in-the-loop-ai]] design.

## Connected Concepts

- [[adaptive-learning]]
- [[ai-literacy]]
- [[bias-mitigation]]
- [[learning-analytics]]
- [[metacognition]]
- [[pedagogical-safety]]
- [[regulation]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[student-experience]]
- [[teacher-role]]

## Connected Articles

- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[fair-explainable-edu-recommendations]] — Fair and explainable educational recommendations with a hybrid Graph-GRU framework
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
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming

## Citation

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). Explainable Artificial Intelligence in education. [*Computers and Education: Artificial Intelligence, 3*](https://doi.org/10.1016/j.caeai.2022.100074), 100074
