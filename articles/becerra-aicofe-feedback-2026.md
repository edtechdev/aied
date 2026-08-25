---
title: "AICoFE: AI-Powered Feedback System"
created: "2026-07-29T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [ai-ed-evaluation, feedback, student-experience, human-in-the-loop-ai, higher-ed, learning-analytics, formative-assessment]

sources: ['raw/papers/becerra-aicofe-feedback-2026.md']
confidence: medium
---

> **AICoFE** (AI-based Collaborative Feedback) is a multi-LLM feedback generation system for higher education that combines independently fine-tuned language models with **teacher-in-the-loop mediation**, producing diverse feedback perspectives while preserving pedagogical authority through Learning Analytics dashboards.

## Key Findings

1. **Multi-LLM diversity improves feedback quality.** AICoFE uses three independently fine-tuned LLMs (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) to generate diverse feedback perspectives from the same input data — quantitative rubric scores, validated qualitative observations, rubric level descriptions, and instructional materials. Each model produces independent drafts that the teacher can inspect and curate.
2. **Teacher mediation is central, not an afterthought.** Rather than automating feedback end-to-end, the system positions educators as active curators. The teacher dashboard enables instructors to compose final feedback by **selecting individual sentences or paragraphs** from AI outputs, with a visual legend indicating the proportion of content contributed by each LLM. This preserves pedagogical judgment while reducing feedback workload.
3. **Dual-purpose transparency supports both practice and research.** The system tracks the extent of teacher modification and curation, serving simultaneously as (a) a reflection tool for individual instructors examining their curation patterns, and (b) a dataset for large-scale analysis of the teacher mediation role in AI-assisted feedback.
4. **Role-specific dashboards close the feedback loop.** The student dashboard provides access to video recordings of presentations, self-evaluation rubrics, visual comparisons of self vs. external evaluations, teacher-curated AI feedback, and the ability to rate perceived agreement and usefulness — completing a full assessment-for-learning cycle.

## System Architecture

| Module | Purpose |
|--------|---------|
| **Visualization** | Role-specific dashboards (student, teacher, evaluator) |
| **Management** | Hybrid SQL + MongoDB data infrastructure (traceability + semi-structured feedback versions) |
| **Feedback Generation** | Multi-LLM pipeline synthesizing rubric scores + qualitative comments |
| **Recording** | Video/audio capture of student presentations (opt-in, GDPR-compliant) |

The system treats AI as a **draft generator**, not a final deliverer — educators curate and compose the final feedback before it reaches students, so AI augments rather than replaces peer and teacher judgment.

## Implications

AICoFE addresses a critical tension in [[ai-feedback-quality]]: the trade-off between efficiency and pedagogical authority. By adopting a [[human-in-the-loop-ai]] architecture rather than full automation, it demonstrates that AI can accelerate feedback workflows without displacing the teacher's interpretive role. This aligns with emerging best practices in [[ai-feedback-quality]] research, which increasingly emphasizes teacher agency over raw automation.

The multi-LLM pipeline is a practical response to the observation that different models excel at different dimensions of feedback — tone, specificity, actionability. Rather than selecting a single "best" LLM, AICoFE treats model diversity as a feature, surfacing complementary perspectives that the teacher can synthesize. This approach parallels work in  that leverages multiple AI-generated perspectives for richer formative assessment.

The [[learning-analytics]] component of AICoFE is notable for its role-specific design: teacher and student dashboards serve fundamentally different functions within the same platform, and the system's transparency features (source attribution, curation tracking) support both reflective practice and [[learning-analytics]] at scale.

For [[higher-ed]] institutions facing growing assessment loads, AICoFE models a path where AI-assisted feedback scales without sacrificing the relational and interpretive dimensions of effective [[formative-assessment]].

## Connected Concepts

- [[formative-assessment]]
- [[higher-ed]]
- [[human-in-the-loop-ai]]
- [[learning-analytics]]
- [[ai-ed-evaluation]]
- [[student-experience]]
- [[ai-feedback-quality]]
- [[feedback]]
## Connected Articles

- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
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
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams

## Citation

Becerra, Á., Palma, A., & Cobos, R. (2026). [*AICoFe: AI-Based Collaborative Feedback System for Higher Education*](https://arxiv.org/abs/2605.04740). arXiv:2605.04740.
