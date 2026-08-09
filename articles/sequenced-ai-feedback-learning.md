---
title: Assessing the Impact and Underlying Pathways of Sequenced AI Feedback on Student Learning
created: 2026-05-11
updated: 2026-05-11
type: article
tags: [feedback-loop, formative-assessment, scaffolding, generative-ai, efficacy-study, student-experience, self-regulated-learning, automated-grading, human-in-the-loop-ai, metacognition]
sources: ['raw/papers/2604.07469.md']
confidence: high
---

> **Cao, Zhao, Schunn, McLaughlin, Lin & Koedinger (2026)** — UNC Chapel Hill, CMU, U Pittsburgh, U Hong Kong. Randomized experiment (n=199).

# Sequenced AI Feedback on Student Learning

## Core Finding

**Sequenced AI feedback harms learning despite boosting engagement and positive perceptions.**

In a randomized experiment with 199 participants, the authors compared two types of AI-generated feedback:

- **Sequenced (layered)**: Encouragement → hints → correct answer, designed to promote learner autonomy
- **Non-sequenced (direct)**: Full-solution feedback immediately

Contrary to design intuition, **sequenced feedback led to significantly poorer learning performance**. The finding reveals a critical disconnect between what students *like* and what actually *helps them learn*.

## Mediation Pathways

Three causal pathways were tested via mediation analysis:

| Pathway | Mediator | Effect | Significant? |
|---------|----------|--------|:---:|
| Affective | Perceived encouragement | Positive → better learning | ✓ |
| Behavioral | Tasks needing ≥3 submissions | Negative → worse learning | ✓ |
| Cognitive | Mental effort | Neutral | ✗ |

The **positive affective pathway** (students felt more encouraged) was **completely counteracted** by the **negative behavioral pathway** (students made more resubmissions). The net effect was significantly poorer learning outcomes.

## Key Mechanisms

### Why Sequenced Feedback Backfired
- The hint-before-answer structure inadvertently encouraged **trial-and-error behavior** rather than deep processing
- Students submitted more attempts per task, indicating they were "gaming" the hint system rather than engaging in genuine problem-solving
- Higher mental effort was reported but did not translate to better learning — suggesting the effort was directed at navigating the feedback sequence rather than understanding the material

### Why Direct Feedback Worked
- Immediate corrective information eliminated the temptation to guess
- Students processed the solution rather than iterating through hints
- Lower engagement scores but higher learning outcomes

## Design Implications

This study challenges the prevailing intuition that more scaffolded, autonomy-supportive feedback is always better. Key takeaways for AI feedback system design:

1. **Engagement ≠ learning**: User satisfaction and behavioral engagement are not reliable proxies for learning gains — designers must measure learning outcomes directly
2. **Limit resubmission loops**: Systems should cap hint requests or require reflection between attempts to prevent trial-and-error gaming
3. **Strategic blending**: Consider providing direct corrective feedback first, with optional encouragement and hints available on demand rather than as a mandatory sequence
4. **Cognitive load management**: The higher mental effort induced by sequenced feedback did not aid learning — design should channel effort toward understanding rather than navigation

## Connection to Existing Wiki

This paper directly informs several threads in the wiki:

- **[[formative-assessment]]**: Direct evidence about AI-generated feedback design — sequencing that feels supportive may undermine formative goals
- **[[critical-thinking-genai-scaffolding]]**: Vendrell & Johnston's eight design principles for LLM scaffolding — this study provides empirical evidence that poorly designed scaffolding can harm learning, reinforcing the need for "cognitive friction" design
- **[[prober-ai-inquiry-writing]]**: The inverted paradigm (AI asks questions, gates suggestions) offers an alternative to sequenced feedback that may avoid the resubmission trap
- **[[self-regulated-learning]]**: Sequenced feedback was intended to promote autonomy and SRL, but the behavioral data shows it had the opposite effect — a cautionary tale for SRL-aligned AI design
- **[[metacognition]]**: The engagement-learning disconnect exemplifies the metacognitive calibration problem — students felt they were learning more with sequenced feedback when they were actually learning less
- **[[ai-peer-feedback-systems]]**: Multi-LLM collaborative feedback systems must consider feedback sequencing carefully to avoid the pitfalls identified here
- **[[pedagogy-ai-mistakes]]**: Hosseini's work on deliberately leveraging AI errors connects to the finding that easy, encouraging feedback may be less pedagogically effective than direct correction
- **[[ai-learning-transfer]]**: The learning outcome disparity between conditions raises transfer implications — do sequenced-feedback students retain less when the scaffolding is removed?

## Methodological Strengths

- **Randomized controlled design** with 199 participants — causal claims are well-supported
- **Mediation analysis** identifies *why* the effect occurs, not just *whether* it occurs
- **Multi-dimensional measurement**: learning performance, behavioral engagement (submission patterns), cognitive engagement (mental effort), and affective perceptions
- Multi-institution collaboration (UNC, CMU, Pitt, HKU)

## Open Questions

- Would results differ with longer exposure (multi-session vs. single-session study)?
- Does domain matter — would sequenced feedback work better for ill-defined problems than well-defined ones?
- Can the resubmission problem be solved by requiring reflection prompts between hint levels?
- Would a hybrid design (direct feedback + optional hints) preserve learning while maintaining positive affect?

## Connected Concepts

- [[automated-grading]]
- [[formative-assessment]]
- [[human-in-the-loop-ai]]
- [[metacognition]]
- [[self-regulated-learning]]

## Connected Articles

- [[ai-learning-transfer]] — AI Learning Transfer
- [[ai-peer-feedback-systems]] — AI Peer Feedback Systems
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[critical-thinking-genai-scaffolding]] — Scaffolding Critical Thinking with Generative AI
- [[engagement-assessment-video]] — Engagement Assessment in Video Learning
- [[generate-then-validate-question-gen]] — Generate-Then-Validate: Question Generation for Education
- [[multimodal-ai-feedback-learning]] — LLM-based Multimodal AI Feedback Produces Equivalent Learning and Better Student Perceptions than Educator Feedback
- [[pedagogy-ai-mistakes]] — The Pedagogy of AI Mistakes: Fostering Higher-Order Thinking
- [[prober-ai-inquiry-writing]] — Prober.ai: Gated Inquiry-Based Feedback via LLM-Constrained Personas for Argumentative Writing
- [[self-referential-l2-writing-llm-assessment]] — Towards Self-Referential Analytic Assessment: A Profile-Based Approach to L2 Writing Evaluation with LLMs
- [[short-answer-scoring-quality-degradation]] — Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specifi...
- [[understanding-student-effort-response-time]] — Understanding Student Effort Using Response-Time Propensities During Problem Solving
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
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named

## Citation

Cao, J., Zhao, C. Q., Schunn, C., McLaughlin, E. A., Lin, J., & Koedinger, K. R. (2026). [Assessing the Impact and Underlying Pathways of Sequenced AI Feedback on Student Learning](https://arxiv.org/abs/2604.07469). arXiv:2604.07469.
