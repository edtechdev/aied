---
title: "When Help is Unhelpful: Evaluating AI Tutors for Productive Struggle"
created: 2026-08-08
updated: 2026-08-08
type: article
tags: [intelligent-tutoring, scaffolding, llm, llm-evaluation, k-12, math-education, benchmark, ai-tutoring, teacher-role, over-reliance]
sources: ['raw/papers/zhang-tutormoments-2026.md']
confidence: high
---

> **Synthesis:** Zhang et al. (2026) introduce TutorMoments, a replay-based evaluation framework that tests whether LM tutors adapt their pedagogical actions to context — scaffolding when support is needed, pushing for rigor when students are ready, and avoiding over-scaffolding. Evaluating 462 teacher-annotated transcripts from grades 2-7 math tutoring, they find frontier models default toward over-helpfulness at the expense of productive struggle. The paper argues that AI optimized for helpfulness may be misaligned with the pedagogical goal of providing the right help at the right moment.

**Zhang, A., Ross, A., Patel, K., Bernado, J., Bowie, R., Ribeiro, A. T., Halper, D., Valayaputtur, H., Andreas, J., Loeb, S., Lucy, L., Lo, K., & Knight, R. (2026)** — Allen Institute for AI, UW, MIT, Stanford, Step Up Labs. Preprint.

## Summary

TutorMoments evaluates whether LM tutors select instructional actions appropriate to the pedagogical demands of specific learning moments. Expert math teachers annotate key decision points in authentic tutoring transcripts: scaffolding-appropriate moments (student needs support) and rigor-appropriate moments (student is ready for challenge). The framework then replays these moments to test whether LMs select appropriate tutor moves. Findings show minimally prompted LMs frequently over-scaffold and rarely push for rigor; evaluation-aware prompting improves adaptability but behavior concentrates into a narrow set of tutor moves. The dataset includes 462 transcripts from 198 students in grades 2-7 interacting with 173 human tutors, with 1,500+ teacher-annotated key moments.

## Key Findings

- Minimally prompted frontier LMs default toward over-scaffolding — being "helpful" rather than pedagogically adaptive
- LMs rarely push for rigor even when students are ready for challenge
- Evaluation-aware prompts substantially improve adaptability but reveal large cross-model differences
- Tutor behavior concentrates into a narrow set of moves, lacking the diversity of human tutor strategies
- Framework operationalizes productive struggle, zone of proximal development, and desirable difficulties as evaluation criteria

## Connections

This work connects to: [[intelligent-tutoring]][[scaffolding]][[llm-evaluation]][[math-education]][[benchmark]][[teacher-role]][[over-reliance]][[k-12]]

## Connected Concepts

- [[k-12]]
- [[scaffolding]]
- [[teacher-role]]

## Connected Articles

- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[ai-education-global-capacity]] — What AI in Education Needs Next: Lessons from Youth Leaders Across Five Countries
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose

## Citation

Zhang, A., Ross, A., Patel, K., Bernado, J., Bowie, R., Ribeiro, A. T., Halper, D., Valayaputtur, H., Andreas, J., Loeb, S., Lucy, L., Lo, K., & Knight, R. (2026). [When Help is Unhelpful: Evaluating AI Tutors for Productive Struggle](https://example.com/tutormoments-preview.pdf).
