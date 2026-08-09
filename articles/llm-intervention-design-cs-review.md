---
title: A review of intervention designs of LLM Integration in Undergraduate Computer Science Education
created: 2026-07-31
updated: 2026-07-31
type: article
tags: [cs-education, generative-ai, llm, scaffolding, instructional-design, efficacy-study, prompt-engineering, higher-ed, computational-thinking, llm-in-education]
sources: ['raw/papers/llm-intervention-design-cs-review.md']
confidence: high
---

> **Author:** Anusha Vissapragada (Hult International Business School) **Source:** [EdArXiv preprint](https://osf.io/preprints/edarxiv/knhyz_v1) (2026)
**Source:** [EdArXiv preprint](https://osf.io/preprints/edarxiv/knhyz_v1) (2026)

## Key Findings

This scoping review analyzed **13 experimental studies** on LLM integration in undergraduate [[cs-education]], examining how intervention design choices shape learning outcomes. The central finding: **LLM effectiveness depends less on the model itself than on pedagogical design**.

### Three Intervention Archetypes

| Type | Studies | Results |
|------|---------|---------|
| **Task and Coding Assistant** | 8 | Mixed — Java code quality improved (p < 0.005), but broader academic performance showed no significant difference |
| **Virtual Tutor or Peer** | 3 | **All three** showed significant improvements — semester-long integrations with scaffolded feedback consistently improved [[computational-thinking]] and performance |
| **Exam and Quiz Help** | 2 | Mixed depending on implementation |

### The "Tool Frustration" Paradox

A striking finding: students using [[generative-ai]] tools **without adequate [[scaffolding]] and prompt literacy training** reported significantly higher frustration than controls (p = 0.008, median frustration 14 vs. 9), even when performance was equivalent. This mirrors concerns in the [[over-reliance]] and [[critical-engagement-code-completion]] literature — LLM access without pedagogical support can actively harm the learning experience.

### Design Patterns That Work

The review identifies four design elements that distinguish effective interventions:

1. **Sustained [[scaffolding]]**: Guided explanations, problem decomposition, and gradual reduction of support as competence grows — consistent with Vygotskian principles also discussed in [[instructional-design]].
2. **Transparent interaction patterns**: Students need to understand *how* the LLM is reasoning, not just receive answers.
3. **Explicit meta-skill instruction**: [[prompt-engineering]] literacy must be taught — students cannot intuit effective prompting strategies.
4. **Assessment redesign**: Emphasize code evaluation and prompt crafting over code generation, as also recommended in [[reshaping-cs-education-genai]].

### Language and Methodological Gaps

Java interventions showed more consistent gains; Python — despite dominance in CS1 — lacks sufficient experimental isolation. The review also documents critical methodological weaknesses: inconsistent outcome operationalization, variable control group definitions, and chronic **underreporting of effect sizes and confidence intervals** — a concern that connects to broader [[efficacy-study]] design standards.

## Relevance to AI in Education

This review is valuable because it shifts the conversation from "do LLMs work?" to "**what design choices make LLMs effective?**" The evidence strongly supports [[scaffolding]]-based approaches over simple tool access, reinforcing findings across the [[genai-meta-analysis-programming-learning]] literature. The "tool frustration" paradox is an important contribution — it suggests that poorly designed [[generative-ai]] integration can be worse than no integration at all.

For [[higher-ed]] contexts, the review provides actionable guidance: semester-long Virtual Tutor designs with structured feedback outperform short-term coding-assistant interventions. This aligns with [[code-review-genai-cs1]] work on structured feedback and the broader [[cs-education]] push toward [[computational-thinking]] over syntax mastery.

## Connected Concepts

- [[computational-thinking]]
- [[generative-ai]]
- [[higher-ed]]
- [[llm-in-education]]
- [[prompt-engineering]]
- [[reshaping-cs-education-genai]]
- [[scaffolding]]

- [[llm]]
## Connected Articles

- [[code-review-genai-cs1]] — Combating Harms of Generative AI in CS1 with Code Review Interviews and a Flipped Classroom
- [[critical-engagement-code-completion]] — To Tab or Not to Tab: Measuring Critical Engagement in AI Code Completion Tools Using Behavioral Signals and Attentio...
- [[genai-meta-analysis-programming-learning]] — A meta-analysis of the effect of generative AI on productivity and learning in programming
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
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
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education

## Citation

School), A.A.V.I.B., implementation, A.Q.H.S.M.R.D.O., & generators, P.L.A.L.C.R.T.S. (2026). *A review of intervention designs of LLM Integration in Undergraduate Computer Science Education*
