---
title: Metacognition
created: "2026-05-07T10:44:35-04:00"
updated: "2026-08-19T09:54:41-04:00"
type: concept
tags: [metacognition, self-regulated-learning, formative-assessment, k-12, higher-ed, scaffolding, generative-ai, llm, student-experience, ai-literacy]
confidence: high
---

> Metacognition — thinking about one's own thinking — is both a target of AI education research (can AI tools develop students' metacognitive skills?) and a risk factor (AI completing tasks may suppress metacognitive practice).^[[stanford-evidence-base-ai-k12-2026]]^[[scheu-mobile-chatbot-journaling-motivation-2026]]

Metacognition in education refers to learners' awareness, monitoring, and regulation of their own cognitive processes:

- **Metacognitive knowledge:** Understanding what one knows, what strategies are available, and when to deploy them
- **Metacognitive regulation:** Planning, monitoring, and evaluating one's own learning in real time

Within [[self-regulated-learning]] frameworks, metacognition is the central mechanism that enables learners to adapt strategies, recognize confusion, and seek help appropriately.^[[scheu-mobile-chatbot-journaling-motivation-2026]]

## How AI Tools Affect Metacognition

### The Suppression Risk (Stanford SCALE, 2026)

When AI completes reasoning tasks for students — solving math problems, writing essays, generating code — the student loses practice in monitoring their own understanding and selecting strategies.^[[stanford-evidence-base-ai-k12-2026]]

Key findings:
- **Kosmyna et al. (2025):** Students who used AI essay assistance were **83% unable to recall quotes** from their own essays, vs. 11% for non-AI users — indicating they did not engage with the content during production.
- **Stadler et al. (2024):** General-purpose AI reduced cognitive load but produced **lower-quality reasoning** vs. traditional search, suggesting metacognitive engagement was displaced.
- **Lehmann et al. (2025):** General AI for programming harmed understanding for low-prior-knowledge students — the students most in need of metacognitive scaffolding received answers instead.

### The Augmentation Opportunity (Scheu et al., 2026)

When AI is designed to support reflection rather than replace it, metacognition can be strengthened:

- **Learning journals** are a classic metacognitive practice: by reflecting on learning processes, students increase awareness of their cognition
- **Structured prompts** that ask students to self-explain, evaluate strategies, or identify knowledge gaps preserve metacognitive demand
- The **example-based course** in Scheu et al.'s chatbot increased **perceived competence** (a metacognitive self-evaluation) even when the LLM assistant alone did not

## The Engagement–Motivation Distinction

Scheu et al. (2026) found a critical split:

| Dimension | LLM Assistant Effect | Course Effect |
|---|---|---|
| **Intrinsic motivation** (willingness to engage) | **No effect** | **Positive** |
| **Behavioral engagement** (amount written) | **Increasing over time** ([[feedback|feedback loop]]) | **Constant positive** |

This suggests that **metacognitive support and [[motivation]] are not identical**. The LLM assistant's [[scaffolding]] of journal entries increased how much students wrote (behavioral engagement) but did not make them *want* to write more (intrinsic motivation).^[[scheu-mobile-chatbot-journaling-motivation-2026]]

## The Beliefs-vs-Experiences Distinction

[[cognitive-offloading-metacognitive-review-2026|Guo & Ye (2026)]] offer a theoretically sharper account of how metacognition governs strategy selection, distinguishing two components that operate in different phases:

- **Metacognitive beliefs** — stable, self-referential self-conceptions stored in long-term memory (e.g., beliefs about one's memory capability, or the reliability of a tool). These anchor strategy choices *before* task initiation.
- **Metacognitive experiences** — dynamic, task-specific feelings (perceived difficulty, confidence, mental workload) that drive belief *updating* during task execution.

This distinction yields the principle of **timing-component matching**: feedback that targets beliefs (e.g., comparative rankings) is most effective in the pre-task preparation phase, whereas feedback that targets experiences (e.g., immediate correctness indicators) is most effective during task execution. Abstract ranking feedback can become separated from — or overridden by — the task-specific experiences that dominate immediate decision-making, explaining why some feedback interventions fail to change behavior. This gives educators a phase-contingent rationale for designing metacognitive scaffolds around AI tools: calibrate beliefs before use, provide immediate task-specific feedback during use.

### Calibration is trainable: prediction + feedback

[[metacognitive-training-optimal-cognitive-offloading-2026|Ngai & Gilbert (2026)]] provide direct causal evidence that metacognitive calibration is a *trainable* skill. In two preregistered experiments (N=164, N=416), **just five practice trials pairing a performance prediction with veridical feedback** improved calibration and reduced bias. A four-group additive design isolated the causal component: **making predictions alone was ineffective; adding performance feedback drove the improvement; explicitly labeling over-/underconfidence added nothing further**. Critically, the improvement acted on *absolute* calibration — raising confidence in the underconfident and lowering it in the overconfident — so it corrected miscalibration in both directions rather than shifting everyone one way (which is why signed/directional effects were null). This strengthens the "experiences not beliefs" account above and shows the *minimum viable metacognitive training*: prediction + immediate, task-specific feedback.

## Implications for Tool Design

1. **Preserve the "friction" of thinking:** If AI writes the reflection, the student does not build metacognitive skill. Journaling assistants should scaffold, not author.
2. **Model metacognitive language:** The example-based course worked partly because it exposed students to proficient models' metacognitive self-talk.
3. **Separate support for motivation vs. skill:** Metacognitive skill development (course-structured) and productivity enhancement (AI-assisted) may require different design strategies.

## Connected Concepts

- [[self-directed-learning]]
- [[self-regulated-learning]]
- [[ai-literacy]]
- [[scaffolding]]
- [[cognitive-offloading]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[student-experience]]
- [[formative-assessment]]
- [[prompt-engineering]]
- [[agentic-ai]]
- [[human-in-the-loop-ai]]
- [[authentic-assessment]]
- [[learning-theories]]
## Connected Articles
- [[ai-communities-of-inquiry-2026]]
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — Metacognitive training facilitates optimal cognitive offloading (Ngai & Gilbert 2026)
- [[cognitive-offloading-metacognitive-review-2026]] — Meta-cognitive insights into cognitive offloading: mechanisms, interventions, and educational implications (Guo & Ye 2026)
- [[critical-thinking-paradox-genai-learning-2026]] — The critical-thinking paradox in GenAI-integrated learning
- [[llms-text-linguistics-teaching-2026]] — LLMs in text linguistics teaching
- [[idea-framework-metacognitive-genai-2026]] — The IDEA framework for metacognitively regulated GenAI use
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — Fostering Sustainable Learning via Embodied Intelligence (E3-HOT)
- [[voicu-ai-interpretive-cognition-ssh-2026]]
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond detection: redesigning authentic assessment in an AI-mediated world (Kickbusch et al. 2025)
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[metacognitively-discordant-completion-genai-2026]]

- [[ai-adoption-training-public-sector]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[ai-learning-companions-framework]]
- [[ai-making-us-stupid]]
- [[ai-metacognition-stem-review]]
- [[ai-powered-materials-discovery-ai-literacy]]
- [[ai-tutor-safety-harms]]
- [[aied-unfinished-mission-bypass]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[buggy-genai-code-student-responses]]
- [[chatgpt-critical-creative-thinking-review]]
- [[code-review-genai-cs1]]
- [[codify-socratic-programming-tutor]]
- [[cognitive-offloading-speedup-illusion]]- [[probing-ai-generated-physics-solutions-2026]]

- [[student-rationalization-ai-writing]] — Student rationalization of AI use in academic writing (Kim et al. 2026)
- [[ai-cognitive-partner-co-regulation-learning]]
- [[ensemble-cognition-philosophy-ai-education]]
- [[genai-educational-outcomes-meta-analysis]]
- [[hao-human-ai-collaborative-problem-solving-cognition]]

- [[tutoring-specific-vs-general-ai]] — General-purpose AI suppresses metacognition by completing reasoning
- [[young-people-learning-generative-ai-rapid-review-2026]] — Miscalibration gap and metacognitive inequity with GenAI
- [[generative-ai-reduced-study-time-math]] — Shift from deliberate offloading to passive dependency
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of Types of Inquiries in Student-AI Interaction
