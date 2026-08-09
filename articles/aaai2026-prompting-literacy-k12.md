---
title: "Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module"
created: 2026-08-06
updated: 2026-08-06
type: article
tags: [ai-literacy, prompting-literacy, k-12, llm, ai-education, scenario-based-learning, automated-grading, student-experience, rag]
sources: ['raw/papers/aaai2026-prompting-literacy-k12.md']
confidence: high
---

> **Synthesis:** An LLM-based interactive module teaches K-12 students prompting literacy through scenario-based deliberate practice with an AI auto-grader providing immediate, detailed feedback. Deployed across 11 secondary classrooms in two iterations, the module improved students' prompting skills (particularly embedding background context) and confidence in using AI for learning. The study also validates an AI-based auto-grader achieving 0.92 average accuracy and identifies True/False + open-ended questions as more effective than MCQs for assessing prompting literacy.

## Study Design

Xiao et al. designed and deployed a web-based interactive instructional system to teach **prompting literacy** to secondary-education students. The module was grounded in two learning sciences principles: **learning-by-doing** and **elaborated immediate feedback**. Students practiced prompt writing in three hypothetical learning scenarios (biology, geography, math), each paired with a unique instructional activity (extending knowledge, quiz preparation, homework struggle).

After a student writes a prompt, an **LLM-based auto-grader** (GPT-4o) evaluates it across preset dimensions and delivers immediate, detailed feedback. The pipeline mirrors authentic AI chatbot interaction: write prompt → receive AI response → get graded feedback.

Two iterations were conducted across 11 secondary classrooms:
- **Study 1** (June 2024): 111 students, 6 classrooms in East Asia
- **Study 2**: Assessment iteration follow-up with similar population

## The Auto-Grader

The AI auto-grader achieved **0.92 average accuracy** across dimensions when grading student-written prompts, using human labels as ground truth:

| Dimension | Accuracy |
|---|---|
| Relevance | 0.98 |
| Background/Context | 0.96 |
| Conciseness | 0.93 |
| Elaboration | 0.90 |
| No Direct Answer | 0.88 |
| Clarity of Purpose | 0.85 |

The lowest accuracy (Purpose, 0.85) stemmed from the auto-grader over-generating keywords or conflating Purpose with No Direct Answer criteria. The auto-grader tended to weigh heavily on some keywords while ignoring others — a known limitation of LLM-based grading.

## Key Findings

### Prompting Skill Improvement
- Students improved significantly at **embedding background/context information** in prompts (McNemar test, p = .039 from Q1 to Q3)
- Students performed well on Relevance, Conciseness, and Purpose even in the first question (ceiling effects)
- **Prior AI usage frequency was positively correlated with initial prompt quality** (r = 0.27, p = .017), suggesting an equity concern

### Confidence and Perception
- Self-reported confidence in using AI for learning **increased by 10.4%** (p < .001)
- **87% of students** reported learning AI-related knowledge (how to use AI for learning, how to ask effective questions, AI's capabilities)
- Students valued: direct AI interaction, scenario-based design, immediate comprehensive feedback, and visual elements

### Assessment Design Lessons
- **MCQs suffered from ceiling effects** — students could identify good prompts conceptually but couldn't write them effectively
- **True/False + open-ended questions** demonstrated better item difficulty and discrimination than MCQs
- None of the original MCQ items fell into the desired difficulty range [0.3, 0.7], while 60% of OE and 30% of TF questions did

## Challenges Identified

- **Productive struggles**: difficulty writing effective prompts (the core skill being taught)
- **Extraneous load**: slow AI response times, login issues, limited typing skills (22 students reported this)
- **Scenario variety**: some students wanted non-STEM scenarios
- LLM response latency disrupted the practice flow

## Design Implications

The study demonstrates that [[prompting-literacy]] can be taught effectively to K-12 students through structured practice with automated feedback. Key design principles:

1. **Scenario-based deliberate practice** with authentic AI interaction
2. **Immediate, dimension-level feedback** powered by LLM auto-grading
3. **Assessment aligned to competency** — open-ended + T/F outperform MCQs for higher-order prompting skills
4. **Addressing the digital divide** — prior AI access correlates with initial performance, underscoring the need for in-school prompting literacy instruction

## Connected Concepts

- [[ai-education]]
- [[ai-literacy]]
- [[automated-grading]]
- [[k-12]]
- [[llm]]
- [[prompting-literacy]]
- [[student-experience]]

- [[rag]]
## Connected Articles

- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-education-global-capacity]] — What AI in Education Needs Next: Lessons from Youth Leaders Across Five Countries
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose

## Citation

Module, S.T.A.A.L., Koedinger1, K.R., Mellon, C., Hua, N.T., Model, T.A.T.N.W.D.A.L., reserved, I.A.R., & education, W.A.C.H.P.F.K. (2026). [*Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module*](https://doi.org/10.1609/aaai.v40i28.36924)
