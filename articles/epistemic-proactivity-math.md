---
title: "From Prompting to Epistemic Proactivity: Temporal Trajectories of Student-AI Interaction in Mathematics Learning"
created: "2026-06-30T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [llm]
stakeholders: [student-experience]
research_method: [process-outcome modeling, learning analytics]
discipline: [stem education, math education]
audience: [learners]
level: [k 12]
sources: ['raw/papers/2606.28472.md']
confidence: high
---

> **Synthesis:** Abdelghani, Kaiser & Murayama (2026) trace how 112 Grade-9 ([[k-12]]) students' interactions with a general-purpose [[llm|LLM]] [[intelligent-tutoring|math tutor]] evolve over a practice session, identifying a trajectory from superficial [[prompt-engineering|prompting]] toward what they term **epistemic proactivity** — the active, [[self-directed-learning|self-directed]] pursuit of conceptual understanding through AI dialogue. The key contribution is temporal: **static** summaries of AI use (whole-session prompt functions, request types, modeling stages, behavioral diversity) did *not* predict AI-free post-test performance, but **temporal** shifts toward epistemically proactive interaction *did*. This developmental framework is a significant contribution to [[ai-literacy]] [[research-methods-aied|research]], reframing productive AI use not as a binary skill but as a capacity that matures through scaffolded practice.

## Key Findings

1. **Static measures don't predict learning.** Whole-session summaries of AI use — prompt functions, request types, modeling stages, and behavioral diversity (Shannon entropy) — did not predict AI-free post-test performance after controlling for [[prior-knowledge|prior knowledge]]. What a student does on average tells you little about whether they learned.
2. **Temporal trajectory predicts learning.** Three temporal indicators captured whether interaction shifted toward proactive or reactive orientations from the early to the late phase of the session. The **help-seeking (HS) proactivity shift** (β = .250, p = .009) and **mathematical proactivity shift** (β = .209, p = .031) significantly predicted post-test performance beyond prior knowledge (β = .435), in a model with R²adj = .300. The [[regulation]] shift showed a positive but non-significant trend (β = .154, p = .090).
3. **Direction, not magnitude, matters.** A sensitivity check using absolute values of the temporal shifts found them non-significant — post-test performance was associated with the *direction* of students' temporal development (toward proactive vs. reactive), not the amount of behavioral change.
4. **Reactive drift is common.** Across the session, students moved away from understanding-oriented activity toward task work and answer verification: UNDERSTAND fell from 63% to 26% while WORK rose 25%→38% and VALIDATE rose 1%→12%. Help-seeking shifted toward verification (χ² = 17.6, p = .041).
5. **Trajectory groups differ in learning.** A median split on the all-productive composite yielded two groups statistically indistinguishable at baseline (pre-test p = .306) but significantly different on post-test (p = .014): students whose interaction shifted toward proactive orientations (more monitoring, understanding-oriented help-seeking, constructive math work) performed better; those who stayed answer-requesting and moved toward verification/validation performed worse.

## Study design

The study examined [[k-12|Grade-9]] students using a web-based LLM tutor on a **[[math-education|mathematical-modeling]] (MM)** task — an open-ended practice setting where the goal was to improve understanding and prepare for a later independent assessment, not to complete a specific task. 112 students participated; 97 completed both AI-free pre- and post-tests. Pre- and post-test items were drawn from the IQB VERA mathematics item pool, targeting the same modeling concepts with different items to avoid practice effects. Average post-test performance was M = 53.20% (SD = 26.40%).

Student turns were coded along three dimensions hypothesized to capture epistemically proactive AI use: **self-regulated learning (SRL) functions** (plan/monitor/evaluate vs. request), **help-seeking content** (conceptual/procedural vs. verification/answer-seeking), and **mathematical-modeling activity** (understand/structure/mathematize/work vs. interpret/validate). Each turn was assigned a normalized within-session position (turn index ÷ total turns), splitting into early (< .5) and late (≥ .5) phases.

## The epistemic proactivity construct

The paper defines **epistemically proactive AI use** as the ability to sustain higher-level learning behaviors in AI-supported environments: using [[metacognition|metacognitive]] knowledge and monitoring, strategically allocating cognitive effort, and applying pragmatic knowledge of [[help-seeking]] strategies — leading to more agentic, effortful, and learning-oriented [[student-engagement|engagement]] with AI. This goes beyond operational prompting skills (writing clear instructions, specifying output formats, asking sophisticated questions) that dominate AI training in education. A well-formed prompt can still elicit an answer poorly aligned with the learner's understanding, reduce cognitive engagement, or replace agency with passive information seeking.

The construct connects [[generative-ai|GenAI]] use to established theories of [[self-regulated-learning|SRL]] and help-seeking. SRL theory emphasizes setting goals, monitoring understanding, evaluating progress, and adapting behavior over time; short-circuiting this by moving directly to task implementation may compromise learning. Help-seeking research distinguishes high-quality forms (requesting explanations or hints while preserving responsibility) from answer-oriented forms that bypass learning-relevant effort. In AI-supported learning, these processes become visible in students' conversational traces.

The work is a [[theory-development-aied|theory-building]] contribution, offering a [[discipline-specific-aied|domain-specific]], process-sensitive account of how students regulate AI use — moving beyond the aggregate/survey approaches that dominate GenAI-in-education research.

## What this means for practice

- **Instructors.** Build explicit AI routines into lessons: have students name their knowledge gaps before opening the tutor, restate AI responses in their own words, check whether the answer addressed their original uncertainty, and finish the transfer step with the AI switched off.
- **Instructors.** Teach students which domain steps to keep for themselves. Delegating routine computation is less problematic once students have engaged with the underlying concepts, but leaning on the tutor to validate answers removes the monitoring and evaluating they would otherwise do on their own reasoning.
- **Instructors.** Read student–AI transcripts as diagnostic evidence rather than chat logs. They show whether a student is stuck understanding the real-world situation, constructing a model, or carrying out the mathematical work, and where the student seeks support.
- **Designers.** Monitor how a student's interaction develops over time instead of scoring individual prompts. Reactive trajectories — repeated requesting, growing verification, validation without further mathematical work — are the signal worth acting on, and this is also where [[cognitive-offloading|over-reliance]] on AI first becomes visible.
- **Designers.** Avoid premature scaffolding. Isolated answer-seeking or verification is not necessarily a problem inside a broader productive trajectory, so trigger [[scaffolding]] on patterns of interaction rather than single prompts, and model the domain's knowledge components — as this study did with Blum's framework for [[math-education|mathematical modeling]] — so the response fits the epistemic step the student is on.

## Limitations

- 112 [[k-12|Grade-9]] students were recruited from three public German Gymnasium schools, but only 97 completed the post-AI-interaction assessment that the analysis depends on.
- The study is correlational by design: the authors state that the temporal indicators cannot be interpreted as causal mechanisms, only as predictors of post-test performance.
- Interaction was confined to a single short session embedded in one regular mathematics lesson, with pre- and post-test items drawn from the IQB VERA pool; the authors call for longitudinal replication of these [[student-ai-interaction]] findings.
- Coding reliability was uneven, with only moderate agreement on some dimensions, especially the mathematical-modeling steps — the dimension that carried one of the two significant temporal predictors.

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
