---
title: Metacognition
created: "2026-05-07T10:44:35-04:00"
updated: "2026-09-03T09:14:00-04:00"
type: concept
tags: [metacognition, self-regulated-learning, formative-assessment, k-12, higher-ed, scaffolding, generative-ai, llm, student-experience, ai-literacy]
audience: [learners]
level: [k 12, higher ed]
confidence: high
---

> Metacognition — thinking about one's own thinking — is both a target of [[ai-education|AI education]] [[research-methods-aied|research]] (can AI tools develop students' metacognitive skills?) and a risk factor (AI completing tasks may suppress metacognitive practice).([[stanford-evidence-base-ai-k12-2026]])([[scheu-mobile-chatbot-journaling-motivation-2026]])

## Questions to Consider

- 'Metacognition' is thinking about your own thinking — knowing what you know, monitoring yourself, and adjusting your strategies. When you study or solve a problem, how aware are you in the moment of whether you actually understand versus just recognizing the material?
- A striking finding: students who used AI essay assistance were often unable to recall quotes from their own essays, because they hadn't engaged with the content during production. When a tool produces the output, what practice is the learner losing — and is that practice important?
- The page frames metacognition as both a target (can AI build it?) and a risk (can AI suppress it?). Could the same AI tool either strengthen or weaken a learner's metacognition depending on how it's designed or used? What determines which way it goes?
- Structured prompts that ask students to self-explain, evaluate strategies, or identify gaps preserve metacognitive demand, while AI that simply completes tasks displaces it. If you were designing an AI study tool, what would you build so that it invites reflection instead of replacing it?
- The page finds that whether AI use is metacognitively rich depends on the learner's motivation and stance as much as on the technology. Have you ever used a tool in a shallow way and then realized you learned nothing — and what was different about times you used it deeply?

## Introduction

Metacognition in education refers to learners' awareness, monitoring, and [[regulation]] of their own cognitive processes:

- **Metacognitive knowledge:** Understanding what one knows, what strategies are available, and when to deploy them
- **Metacognitive regulation:** Planning, monitoring, and evaluating one's own learning in real time

Within [[self-regulated-learning]] frameworks, metacognition is the central mechanism that enables learners to adapt strategies, recognize confusion, and seek help appropriately.([[scheu-mobile-chatbot-journaling-motivation-2026]])

How learners actually deploy metacognition around AI is shaped by more than the tool itself: [[cui-motivation-roles-metacognitive-genai-2026|Cui et al.]] find that student motivation and the interaction role they adopt shape their metacognitive [[student-engagement|engagement]] with [[generative-ai|GenAI]] — meaning whether AI use is metacognitively rich depends on the learner's stance as much as on the technology.

## How AI Tools Affect Metacognition

### The Suppression Risk (Stanford SCALE, 2026)

When AI completes reasoning tasks for students — solving math problems, writing essays, generating code — the student loses practice in monitoring their own understanding and selecting strategies.([[stanford-evidence-base-ai-k12-2026]])

Key findings:
- **Kosmyna et al. (2025):** Students who used AI essay assistance were **83% unable to recall quotes** from their own essays, vs. 11% for non-AI users — indicating they did not engage with the content during production.
- **Stadler et al. (2024):** General-purpose AI reduced cognitive load but produced **lower-quality reasoning** vs. traditional search, suggesting metacognitive engagement was displaced.
- **Lehmann et al. (2025):** General AI for programming harmed understanding for low-[[prior-knowledge]] students — the students most in need of metacognitive scaffolding received answers instead.

### The Augmentation Opportunity (Scheu et al., 2026)

When AI is designed to support reflection rather than replace it, metacognition can be strengthened:

- **Learning journals** are a classic metacognitive practice: by reflecting on learning processes, students increase awareness of their cognition
- **Structured prompts** that ask students to self-explain, evaluate strategies, or identify knowledge gaps preserve metacognitive demand
- The **example-based course** in Scheu et al.'s [[conversational-ai|chatbot]] increased **perceived competence** (a metacognitive self-evaluation) even when the [[llm]] assistant alone did not

## The Engagement–Motivation Distinction

Scheu et al. (2026) found a critical split:

| Dimension | LLM Assistant Effect | Course Effect |
|---|---|---|
| **Intrinsic motivation** (willingness to engage) | **No effect** | **Positive** |
| **Behavioral engagement** (amount written) | **Increasing over time** ([[feedback|feedback loop]]) | **Constant positive** |

This suggests that **metacognitive support and [[motivation]] are not identical**. The LLM assistant's [[scaffolding]] of journal entries increased how much students wrote (behavioral engagement) but did not make them *want* to write more (intrinsic motivation).([[scheu-mobile-chatbot-journaling-motivation-2026]])

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

AI may alter the **metacognitive threshold** for deciding one knows enough to answer: [[ai-advice-suppresses-ikt-suspension-2026|Marcoccia et al. (2026)]] found that mere access to AI advice suppressed people's willingness to suspend judgment under uncertainty, even with wrong advice and accuracy incentives — an effect that survived unsolicited AI output and monetary stakes.

Proactive [[agentic-ai|agentic AI]] can displace the learner's own metacognitive loop: [[agentic-ai-pedagogical-best-practice-2026|Woollaston et al. (2026)]] argue that when agents pre-fetch, initiate, and self-correct, the agent's planning, monitoring, and evaluation replace the learner's, removing the retrieval practice and self-monitoring that [[desirable-difficulties|desirable difficulties]] and metacognitive training depend on.

- **Mistake-based [[pedagogy]] as metacognitive training:** [[pedagogy-ai-mistakes|Hosseini (2026)]] shows that deliberately exposing students to AI-generated errors in a database design course activates metacognitive monitoring — students inspected outputs, identified errors, and revised designs rather than accepting AI output at face value. Self-reported [[ai-literacy|AI literacy]] correlated weakly and negatively with objective competency (*r*=−0.39), a calibration gap the critique-refinement cycle is designed to narrow.
- **[[productive-failure|Productive failure]] engages metacognitive monitoring.** [[kim-ai-productive-failure-adult-2026|Kim et al. (2026)]] show productive-failure-based learning activates reflection on one's own attempts; [[lukesova-clue-before-correction-2026|clue-before-correction]] tasks require learners to diagnose and correct their own errors — a metacognitive activity where AI gives clues rather than answers.
- **Self-regulation buffers offloading harm but cannot cancel it.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] shows that metacognitive regulation (self-regulated writing) attenuates the negative association between deep [[cognitive-offloading|cognitive offloading]] and independent no-AI outcomes in GenAI-assisted writing (interaction B = 0.22), but does not eliminate it — a bounded-support condition pairing delegation limits with compulsory reflection about how AI suggestions were accepted/rejected produced the strongest independent performance.
- **Explanation-seeking depth predicts task quality, not recall.** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]] shows explanation-seeking prompts (depth) in LLM interaction predict task quality but not immediate recall, interpreting the dissociation via elaboration (comprehension) vs. retrieval practice (consolidation) — and suggesting explanation-seeking correlates with metacognitive monitoring, though retrieval demands must be added for durable retention.

## Connected Concepts

- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[agentic-ai]]
- [[formative-assessment]]
- [[self-directed-learning]]
- [[ai-literacy]]
- [[problem-based-learning]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[adaptive-learning]]
- [[authentic-assessment]]
- [[student-experience]]
- [[learning-theories]]
## Connected Articles
- [[du-yuan-epistemic-dependence-2026]] — Epistemic dependence in AI-mediated learning (Du & Yuan 2026)
- [[pearls-epistemic-verification-2026]] — PEARLS framework for epistemic agency and verifying AI output (Wang 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — SCAN framework: rethinking AI task distribution in medical training (Tsim et al. 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Layer-sensitive cognitive offloading in GenAI-assisted writing (Chen 2026)
- [[lim-bannert-student-regulation-genai-chatbot-2026]] — How students regulate learning with a genAI chatbot
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-mediated help-seeking in STEM: layered, instrumental, and verified

- [[cui-motivation-roles-metacognitive-genai-2026]] — Motivation and roles in metacognitive GenAI engagement
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — Metacognitive training facilitates optimal cognitive offloading (Ngai & Gilbert 2026)
- [[cognitive-offloading-metacognitive-review-2026]] — Meta-cognitive insights into cognitive offloading: mechanisms, interventions, and educational implications (Guo & Ye 2026)
- [[idea-framework-metacognitive-genai-2026]] — The IDEA framework for metacognitively regulated GenAI use
- [[haiml-human-centered-ai-metacognitive-model-2026]] — HAIML: a human-centered AI metacognitive learning model (agency & reflective learning)
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitively discordant completion and aware pass-through of non-understanding
- [[ai-metacognition-stem-review]] — AI tools scaffolding metacognition in STEM
- [[ai-making-us-stupid]] — Is AI making us stupid? critique of cognitive offloading
- [[stanford-evidence-base-ai-k12-2026]] — Stanford Evidence Base: AI in K-12 education
- [[stanford-evidence-base-ai-k12-2026]] — General-purpose AI suppresses metacognition by completing reasoning
- [[young-people-learning-generative-ai-rapid-review-2026]] — Miscalibration gap and metacognitive inequity with GenAI
- [[generative-ai-reduced-study-time-math]] — Shift from deliberate offloading to passive dependency
- [[ai-advice-suppresses-ikt-suspension-2026]] — AI advice suppresses willingness to say "I don't know", even with wrong advice and accuracy incentives
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and pedagogical best practice: the tension between automation and learning
- [[cognitive-offloading-speedup-illusion]] — Cognitive offloading and the speedup illusion in human-AI interaction
- [[lodge-loble-cognitive-offloading-2026]] — AI, cognitive offloading and implications for education (Lodge & Loble 2026)
- [[shaw-nave-cognitive-surrender-2026]] — Tri-System Theory and cognitive surrender: how AI reshapes human reasoning (Shaw & Nave 2026)
- [[pedagogy-ai-mistakes]] — The Pedagogy of AI Mistakes: Fostering Higher-Order Thinking (Hosseini 2026)
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[lukesova-clue-before-correction-2026]] — Clue Before Correction: ChatGPT for Autonomous Language Learning
- [[critical-thinking-paradox-genai-learning-2026]] — The critical-thinking paradox in GenAI-integrated learning
- [[chatgpt-critical-creative-thinking-review]] — ChatGPT critical and creative thinking: systematic review
- [[zhao-genai-higher-order-thinking-meta-2026]] — GenAI and higher-order thinking meta-analysis
- [[student-rationalization-ai-writing]] — Student rationalization of AI use in academic writing (Kim et al. 2026)
- [[ai-cognitive-partner-co-regulation-learning]] — AI as a cognitive partner: human-AI co-regulation in learning
- [[buggy-genai-code-student-responses]] — How students respond to buggy GenAI code
- [[ai-learning-companions-framework]] — Building AI companions that prioritise learning over performance
- [[teachers-reflective-regulators-cognition-offloading]] — Teachers as reflective regulators of cognition
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance modeled as a complex adaptive system
- [[llm-adaptive-programming-error-explanations-2026]] — LLM adaptive explanations of programming errors
- [[students-perceptions-ai-tools-study-2026]] — Students’ perceptions of AI tools for study
- [[reflective-triangle-model-teacher-ai-2026]] — Reflective Triangle Model: AI as cognitive mediator

