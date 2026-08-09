---
title: "Interactive learning dashboards: rethinking learning visualisations as engagement tools"
created: 2026-08-08
updated: 2026-08-08
type: article
tags: [learning-analytics, metacognition, llm, higher-ed, engagement-metrics, self-regulated-learning, intelligent-tutoring, pedagogical-agent, cs-education, visualization]
sources: ['raw/papers/interactive-learning-dashboards-engagement.md']
confidence: high
---

> **Synthesis:** Graf et al. (2026) transformed a conventional Learning Analytics Dashboard (LAD) into an interactive ILAD by adding an LLM-powered pedagogical agent and a Judgement of Learning (JoL) self-assessment feature. In a 5-week case study with 30 CS students across three conditions (no agent, "telling" agent, "eliciting" agent), the elicit condition produced more reflection and more accurate mastery calibration. The study bridges [[learning-analytics]] dashboard design with [[intelligent-tutoring]] principles and [[metacognition]] research, showing that how learners interact with their data matters more than simply seeing it.

## Study Design

- **30 CS students** in a university programming course, paid to regularly use the ILAD over **5 weeks**
- **3 conditions** randomized: no agent, "tell" agent (provides info about learner data), "elicit" agent (asks questions about learner data)
- ILAD extended a conventional LAD with two features:
  1. **LLM-powered pedagogical agent** with access to learning analytics and course context
  2. **Interactive Judgement of Learning (JoL)** — self-assessment required before viewing system metrics

## Key Findings

- Students in the **elicit condition** engaged in more reflection
- Elicit-condition students more **accurately judged their own mastery** (better JoL calibration)
- The "tell" agent (providing information) did not produce the same benefits — highlighting that pedagogical strategy matters, not just AI presence
- The study demonstrates how interactivity can shift LADs from static visualizations to engagement tools that promote [[metacognition|metacognitive]] processes

## Design Implications

The paper challenges the dominant LAD paradigm of "show data → hope for insight." Drawing on [[intelligent-tutoring]] research (Chi's ICAP framework), the authors argue that:

1. **Interactivity ≠ navigation** — clicking filters is not cognitive engagement; two-way dialogue is
2. **Elicitation beats telling** — asking learners to self-assess before revealing metrics drives calibration better than showing data upfront
3. **LLMs enable scalable interactivity** — the pedagogical agent can ask personalized questions at scale, bringing ITS-style dialogue to dashboard contexts

These findings connect to broader [[self-regulated-learning]] theory and the [[metacognition]] literature on judgement calibration.

## Connected Concepts

- [[higher-ed]]
- [[learning-analytics]]
- [[llm]]
- [[metacognition]]
- [[pedagogical-agent]]
- [[self-regulated-learning]]

- visualization
## Connected Articles

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
- [[agentic-workflows-education]] — Agentic Workflows in Education
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

Graf, L., Bassner, P., Anzinger, M., Dietrich, F., Krusche, S., & Poquet, O. (2026). [Interactive learning dashboards: rethinking learning visualisations as engagement tools](https://doi.org/10.1007/s10639-026-14082-1). *Education and Information Technologies*.
