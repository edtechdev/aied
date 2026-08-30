---
title: "From Prompting to Epistemic Proactivity: Temporal Trajectories of Student-AI Interaction in Mathematics Learning"
created: "2026-06-30T04:33:04-04:00"
updated: "2026-08-22T17:55:00-04:00"
type: article
tags: [ai-literacy, k-12, metacognition, stem-education, student-experience, self-regulated-learning, llm, scaffolding, math-education]
research_method: [survey]
discipline: [stem education, math education]
audience: [learners]
level: [k 12]
sources: ['raw/papers/2606.28472.md']
confidence: high
---

> **Synthesis:** Abdelghani, Kaiser & Murayama (2026) trace how 112 Grade-9 ([[k-12]]) students' interactions with a general-purpose [[llm|LLM]] [[intelligent-tutoring|math tutor]] evolve over a practice session, identifying a trajectory from superficial prompting toward what they term **epistemic proactivity** — the active, self-directed pursuit of conceptual understanding through AI dialogue. The key contribution is temporal: **static** summaries of AI use (whole-session prompt functions, request types, modeling stages, behavioral diversity) did *not* predict AI-free post-test performance, but **temporal** shifts toward epistemically proactive interaction *did*. This developmental framework is a significant contribution to [[ai-literacy]] research, reframing productive AI use not as a binary skill but as a capacity that matures through scaffolded practice.

## Key Findings

1. **Static measures don't predict learning.** Whole-session summaries of AI use — prompt functions, request types, modeling stages, and behavioral diversity (Shannon entropy) — did not predict AI-free post-test performance after controlling for prior knowledge. What a student does on average tells you little about whether they learned.
2. **Temporal trajectory predicts learning.** Three temporal indicators captured whether interaction shifted toward proactive or reactive orientations from the early to the late phase of the session. The **help-seeking (HS) proactivity shift** (β = .250, p = .009) and **mathematical proactivity shift** (β = .209, p = .031) significantly predicted post-test performance beyond prior knowledge (β = .435), in a model with R²adj = .300. The regulation shift showed a positive but non-significant trend (β = .154, p = .090).
3. **Direction, not magnitude, matters.** A sensitivity check using absolute values of the temporal shifts found them non-significant — post-test performance was associated with the *direction* of students' temporal development (toward proactive vs. reactive), not the amount of behavioral change.
4. **Reactive drift is common.** Across the session, students moved away from understanding-oriented activity toward task work and answer verification: UNDERSTAND fell from 63% to 26% while WORK rose 25%→38% and VALIDATE rose 1%→12%. Help-seeking shifted toward verification (χ² = 17.6, p = .041).
5. **Trajectory groups differ in learning.** A median split on the all-productive composite yielded two groups statistically indistinguishable at baseline (pre-test p = .306) but significantly different on post-test (p = .014): students whose interaction shifted toward proactive orientations (more monitoring, understanding-oriented help-seeking, constructive math work) performed better; those who stayed answer-requesting and moved toward verification/validation performed worse.

## Study design

The study examined [[k-12|Grade-9]] students using a web-based LLM tutor on a **[[math-education|mathematical-modeling]] (MM)** task — an open-ended practice setting where the goal was to improve understanding and prepare for a later independent assessment, not to complete a specific task. 112 students participated; 97 completed both AI-free pre- and post-tests. Pre- and post-test items were drawn from the IQB VERA mathematics item pool, targeting the same modeling concepts with different items to avoid practice effects. Average post-test performance was M = 53.20% (SD = 26.40%).

Student turns were coded along three dimensions hypothesized to capture epistemically proactive AI use: **self-regulated learning (SRL) functions** (plan/monitor/evaluate vs. request), **help-seeking content** (conceptual/procedural vs. verification/answer-seeking), and **mathematical-modeling activity** (understand/structure/mathematize/work vs. interpret/validate). Each turn was assigned a normalized within-session position (turn index ÷ total turns), splitting into early (< .5) and late (≥ .5) phases.

## The epistemic proactivity construct

The paper defines **epistemically proactive AI use** as the ability to sustain higher-level learning behaviors in AI-supported environments: using [[metacognition|metacognitive]] knowledge and monitoring, strategically allocating cognitive effort, and applying pragmatic knowledge of [[help-seeking]] strategies — leading to more agentic, effortful, and learning-oriented engagement with AI. This goes beyond operational prompting skills (writing clear instructions, specifying output formats, asking sophisticated questions) that dominate AI training in education. A well-formed prompt can still elicit an answer poorly aligned with the learner's understanding, reduce cognitive engagement, or replace agency with passive information seeking.

The construct connects GenAI use to established theories of [[self-regulated-learning|SRL]] and help-seeking. SRL theory emphasizes setting goals, monitoring understanding, evaluating progress, and adapting behavior over time; short-circuiting this by moving directly to task implementation may compromise learning. Help-seeking research distinguishes high-quality forms (requesting explanations or hints while preserving responsibility) from answer-oriented forms that bypass learning-relevant effort. In AI-supported learning, these processes become visible in students' conversational traces.

The work is a [[theory-development-aied|theory-building]] contribution, offering a domain-specific, process-sensitive account of how students regulate AI use — moving beyond the aggregate/survey approaches that dominate GenAI-in-education research.

## Implications for AI tutor design and classrooms

**For AI tutor design,** systems should monitor how learner interaction develops *over time*, not only whether individual prompts are high quality. Tutors could detect reactive trajectories (repeated requesting, increasing verification, validation without further math work) and trigger targeted [[scaffolding]]. Crucially, a temporal perspective prevents premature scaffolding: isolated answer-seeking or verification is not necessarily problematic if embedded in a broader trajectory that includes conceptual, procedural, or constructive work. Scaffolding should respond to patterns of interaction, not single prompts out of context. This requires modeling the domain's knowledge components and epistemic practices — the study used Blum's framework for mathematical modeling.

**For classroom practice,** teachers should guide students in remaining epistemically proactive while using AI: identifying knowledge gaps before starting, explaining AI responses in their own words, checking whether a response addresses their original uncertainty, and completing transfer steps without AI support. Teachers should help students distinguish tasks that can be safely delegated to AI from those requiring preserved epistemic responsibility — for example, delegating routine computation is less problematic once students have engaged with underlying concepts, but relying on AI to validate answers may reduce opportunities for monitoring and evaluating one's own reasoning. Student–AI interactions can also become a source of diagnostic information for teachers, revealing how learning strategies develop, where students seek support, and which domain-specific steps they engage with or avoid.

The study is correlational (temporal indicators are not causal mechanisms), and the interaction was short, but it offers a process-sensitive complement to the knowledge base's [[cognitive-offloading|over-reliance]] and [[student-ai-interaction]] threads — showing that *how* AI use unfolds over time matters for learning as much as *whether* or *how much* it occurs.

## Connected Concepts

- [[math-education]]
- [[ai-literacy]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[stem-education]]
- [[k-12]]
- [[student-experience]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[help-seeking]]
- [[learning-analytics]]
- [[student-ai-interaction]]
- [[theory-development-aied]]

## Connected Articles

- [[kar-mathbuddy-affective-math-tutoring-2025]] — MathBuddy: affective math tutoring
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — AI-powered personalized learning in elementary fractions

## Citation

Abdelghani, R., Kaiser, P., & Murayama, K. (2026). [From Prompting to Epistemic Proactivity: Temporal Trajectories of Student-AI Interaction in Mathematics Learning](https://arxiv.org/abs/2606.28472). (cs.CY).
