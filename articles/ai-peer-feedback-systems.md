---
title: AI Peer Feedback Systems
created: 2026-05-07
updated: 2026-05-07
type: article
tags: [edtech-platform, feedback-loop, formative-assessment, teacher-role, higher-ed, learning-analytics, llm, rag, ai-tutoring, metacognition]
sources: ['raw/papers/becerra-aicofe-feedback-2026.md']
confidence: medium
---

> Peer feedback develops critical reflection and evaluative judgment, yet:

> Student peer feedback is often superficial or inconsistent. **AICoFe** (AI-based Collaborative Feedback) uses a multi-LLM pipeline (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) to generate diverse perspectives on student presentations, but the critical design feature is **teacher-in-the-loop mediation**—educators curate and compose final feedback before delivery.^[[becerra-aicofe-feedback-2026]]

## The Problem

Peer feedback develops critical reflection and evaluative judgment, yet:
- Students have limited **feedback literacy**
- Generated comments are often superficial or lack actionability
- Quality is inconsistent across evaluators

AI-generated feedback alone risks replacing shallow peer comments with shallow AI comments. AICoFe addresses this by treating AI as a **draft generator**, not a final deliverer.

## System Architecture

**Four components:**^[[becerra-aicofe-feedback-2026]]

| Module | Purpose |
|--------|---------|
| **Visualization** | Role-specific dashboards (student, teacher, evaluator) |
| **Management** | Hybrid SQL + MongoDB data infrastructure |
| **Feedback Generation** | Multi-LLM pipeline synthesizing rubric scores + qualitative comments |
| **Recording** | Video/audio capture of student presentations (opt-in, GDPR-compliant) |

## The Multi-LLM Pipeline

Three independently fine-tuned models receive:
- Quantitative rubric scores
- Validated qualitative observations from evaluators
- Rubric level descriptions
- Instructional materials for the assessed skill

Each model produces an independent draft. The diversity of models is intentional—GPT, Gemini, and Llama have different stylistic biases and blind spots; teacher curation selects the best fragments.^[[becerra-aicofe-feedback-2026]]

## Teacher-in-the-Loop Mediation

The Teacher Dashboard is the central mediation interface:

- **Inspect** scores, comments, and videos from all evaluators
- **Review** drafts from all three LLMs
- **Compose** final feedback by selecting individual sentences or paragraphs from AI outputs
- **Visual legend** shows proportion of content contributed by each LLM
- **Track** extent of teacher modification/curation
- **Audio review** via text-to-speech for long comments

This preserves pedagogical authority while reducing teacher workload.^[[becerra-aicofe-feedback-2026]]

## Transparency & Analytics

- **Feedback history log:** Every sent feedback entry displays LLM contribution proportions and teacher modification levels
- **Dual purpose:** Supports (1) teacher reflection on curation patterns and (2) large-scale analysis of how teacher mediation shapes feedback quality

## Student Experience

- View video recordings of own presentations
- Complete self-evaluations using the same rubric
- See visual comparisons of self vs. external evaluations
- Receive **teacher-curated** (not raw AI) feedback
- Rate perceived agreement and usefulness^[[becerra-aicofe-feedback-2026]]

## Relationship to Human-in-the-Loop AI

AICoFe represents a **human-centered AI** paradigm for education: AI augments rather than replaces human judgment. This contrasts with fully automated grading or feedback systems that remove the teacher from the loop. The key insight is that **pedagogical authority resides with the teacher**, and AI's role is to expand the range and depth of actionable comments they can craft.^[[becerra-aicofe-feedback-2026]]

## Connected Articles

- [[aicode-collaborative-feedback-system]] — AICoFe: Implementation and Deployment of an AI-Based Collaborative Feedback System for Higher Education
- [[becerra-aicofe-feedback-2026]] — AICoFE: AI-Powered Feedback System
- [[codify-socratic-programming-tutor]] — Codify: An Intelligent Socratic Tutoring System for Programming Education
- [[humanlike-ai-collaborative-writing]] — It Felt a Bit Eerie": Exploring Humanlike Interactions During Collaborative Writing with an Artificial Agent
- [[llm-reasoning-traces-metacognition]] — Explaining Too Much? Understanding How Large Language Model Reasoning Traces Influence Performance and Metacognition
- [[mindcopilot-llm-co-writing]] — MindCopilot: Towards Formalizing and Evaluating Granular Human-LLM Co-Writing
- [[moodle-ai-tutoring-deep-learning]] — From Surface Learning to Deep Understanding: A Grounded AI Tutoring System for Moodle
- [[multimodal-ai-feedback-learning]] — LLM-based Multimodal AI Feedback Produces Equivalent Learning and Better Student Perceptions than Educator Feedback
- [[psyscore-essay-scoring-zpd-feedback]] — PsyScore: A Psychometrically-Aware Framework for Trait-Adaptive Essay Scoring and ZPD-Scaffolded Feedback
- [[sequenced-ai-feedback-learning]] — Assessing the Impact and Underlying Pathways of Sequenced AI Feedback on Student Learning
- [[student-perception-ai-use-collaboration]] — Students' Perception Accuracy of Partners' AI Use and its Relation to Collaboration Performance
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
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

## Citation

Summer, V.A.A.L.S.A., |, M.P., |, M.R.L.A.D.F., |, M.H.D.I.M., |, G.M.M.P.F.P.F.S., |, M.V.C.O.S.P., 3.1, M.U.G.G.F.L., & providers, P.A.D.A.B.T.T.C.L. (2026). [*AI Peer Feedback Systems*](https://arxiv.org/abs/2605.04740)
