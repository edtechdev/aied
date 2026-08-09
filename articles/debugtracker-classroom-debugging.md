---
title: "DebugTracker: Lightweight Process Evidence for Classroom Debugging"
created: 2026-07-08
updated: 2026-07-08
type: article
tags: [programming-its, learning-analytics, formative-assessment, cs-education, higher-ed, feedback-loop, student-experience]
sources: ['raw/papers/2607.05871.md']
confidence: high
---

> **Jiatong Liu et al. (2026)** — The University of Hong Kong. arXiv.

**Jiatong Liu et al. (2026)** — The University of Hong Kong. arXiv.

Debugging exercises are usually graded from final code and test outcomes, which hide *how* students reproduced failures, formed hypotheses, inspected evidence, edited code, and verified fixes. The authors present **DebugTracker**, a Visual Studio Code extension that records lightweight debugging-process evidence for classroom tasks. It separates uncoached Evaluation Mode traces from coached Training Mode traces, stores append-only JSONL events, and exports timeline and Markdown reports for human review, capturing test commands, debugger metadata, student checkpoints, source snapshots, optional image evidence, human labels, and optional AI-assisted practice feedback. The largely language-agnostic prototype was validated across Python, TypeScript, and Java with 16 automated checks and an 11-case manual trial matrix spanning packaged VSIX installation on three operating systems.

## Key Contributions
- **Process over product:** Surfaces the hidden debugging workflow, moving assessment beyond final artifacts toward [[formative-assessment]] of process.
- **Coached vs uncoached modes:** Distinguishes Training from Evaluation traces, enabling differentiation of guidance effects in [[programming-its]].
- **Lightweight, language-agnostic capture:** VS Code-standard mechanisms reduce instructor setup burden, supporting [[cs-education]] at scale.
- **AI-assisted practice feedback:** Optional automated feedback loops tie into [[feedback-loop]] research.
- **Learning analytics:** Append-only event logs feed [[learning-analytics]] on how students debug, informing [[student-experience]] design.

## Connected Concepts

- [[formative-assessment]]
- [[learning-analytics]]
- [[student-experience]]

## Connected Articles

- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[adhd-video-segmentation-computing-education]] — Leveling the Playing Field: Temporal Video Segmentation for Individuals with ADHD in Computing Education
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
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

Liu, J., Yao, X., Zhang, Z., & Tian, Y. (2026). [DebugTracker: Lightweight Process Evidence for Classroom Debugging](https://arxiv.org/abs/2607.05871). arXiv:2607.05871.
