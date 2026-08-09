---
title: "LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework"
created: 2026-05-15
updated: 2026-05-22
type: article
tags: [automated-grading, higher-ed, stem-education, llm, generative-ai, efficacy-study, feedback-loop, assessment-validity, formative-assessment, open-source]
sources: ['raw/papers/2605.05410.md']
confidence: high
---

> LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework **Rodríguez (2026)** — Oregon State University. Submitted to Computers & Education.

LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework

## Summary

LaTA (LaTeX Teaching Assistant) is a **privacy-preserving, drop-in autograder** that addresses the core tension in educational LLM deployment: most [[automated-grading]] systems send student work to third-party APIs, violating FERPA and exposing institutions to data risk.

**System architecture:**
- **Four-stage pipeline:** Ingest → Segment → Grade → Report
- **Grading engine:** gpt-oss:120b running **entirely on local commodity hardware** (single Mac Studio)
- **Rubric format:** YAML with binary per-item scoring, comparing student work against instructor-authored reference solutions
- **Cost:** $0 marginal cost per assignment, 1-3 minutes per submission

**Real-world deployment (Winter 2026):**
- **Course:** ME 373 at Oregon State University (~200 students)
- **Grading error rate:** 0.02-0.04% per rubric line item — near-perfect accuracy
- **Operational benefit:** Enabled regrading of corrected assignments and expanded TA office hours

**Learning outcomes (vs. traditional cohort):**
- **Midterm exam:** +11% performance gain
- **Final exam:** +8% performance gain
- **Confidence gains:** Δ ≥ +1.49 Likert points on every learning objective (N=159, p < 10⁻²⁷)

These results provide strong evidence for the [[feedback-loop]] hypothesis: faster, more consistent feedback drives both learning and confidence. The deployment demonstrates that [[generative-ai]] grading can be both FERPA-compliant and pedagogically effective, addressing concerns raised in [[assessment-validity]] and [[formative-assessment]] discussions.

LaTA's success connects to the broader [[stem-education]] and [[higher-ed]] landscape, showing that [[llm]]-based grading can move beyond [[short-answer-scoring-quality-degradation]] concerns when properly designed with instructor-authored rubrics and reference solutions. The open-source, zero-marginal-cost model aligns with [[principled-ai-education]] principles.

## Connected Concepts

- [[assessment-validity]]
- [[automated-grading]]
- [[formative-assessment]]
- [[generative-ai]]
- [[higher-ed]]
- [[llm]]

- [[open-source]]
## Connected Articles

- [[automatic-short-answer-grading]] — Automatic Short Answer Grading with LLMs
- [[llm-handwritten-math-grading]] — Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs
- [[principled-ai-education]] — Principled AI in Education
- [[short-answer-scoring-quality-degradation]] — Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specifi...
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
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education

## Citation

Rodríguez, J. A. (2026). [LaTA: A drop-in, FERPA-compliant local-LLM autograder for upper-division STEM coursework](https://arxiv.org/abs/2605.05410). arXiv:2605.05410. Submitted to Computers & Education.
