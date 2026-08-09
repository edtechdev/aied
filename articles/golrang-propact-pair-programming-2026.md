---
title: "ProPACT: Pair Programming with AI"
created: 2026-07-29
updated: 2026-07-29
type: article
tags: [pair-programming, collaborative-learning, cs-education, adaptive-learning-systems, rag, adaptive-learning, ai-tutoring]
sources: ['raw/papers/golrang-propact-pair-programming-2026.md']
confidence: medium
---

> **ProPACT** (Proactive AI-Driven Adaptive Collaborative Tutor) is an AI-driven adaptive tutoring system for pair programming that **treats collaboration itself as the object of instruction.** Unlike individual-centric, reactive systems, it models *dyadic* learning states in real time and intervenes *before* collaborative breakdowns occur, using multimodal sensing and predictive forecasting.

**Authors:** Anahita Golrang, Kshitij Sharma, Simon Dehaen, Olga Viberg · arXiv:2605.02703 · Within-subjects experiment with 26 pair-programming dyads (52 CS/Engineering students)

## Key Findings

1. **Significant performance gains from proactive feedback.** Dyads receiving ProPACT feedback achieved substantially higher debugging success (*t*[49.96] = −13.51, *p* < .0001) and completed tasks more efficiently (*t*[44.70] = 4.39, *p* < .0001) compared to the no-feedback control condition.

2. **Dyadic sensing enables predictive intervention.** ProPACT constructs a multimodal dyadic learner model from Joint Visual Attention (JVA — cosine similarity of gaze distributions over 30-second windows), Joint Mental Effort (JME — cross-recurrence quantification of pupil-diameter signals), and individual Mental Effort (IPA from pupillary fluctuations). An XGBoost-based forecaster predicts sub-optimal collaboration states up to **30 seconds in advance.**

3. **Five-tier adaptive feedback hierarchy works.** The system escalates through minimally intrusive scaffolds: (A1) do nothing when collaboration is productive; (A2) temporarily enable GitHub Copilot when cognitive strain rises; (A3) show a gaze-awareness tool highlighting the partner's visual focus; (A4) issue unobtrusive dialogue prompts to re-align mental effort; and (A5) provide directive task-based hints only as a last resort. Signals are discretized against a normalized resting baseline using a ±2SD criterion (High / Average / Low).

4. **Post-intervention gains in collaborative regulation.** Beyond task-level improvements, dyads showed sustained increases in JVA and JME after the intervention, indicating that the system fostered durable collaborative skills rather than just providing momentary assistance.

## Implications

ProPACT represents a shift from *individual* to *dyadic* learner modeling in [[intelligent-tutoring-systems]]. By treating the pair — not the person — as the unit of analysis, it addresses a long-standing gap in [[collaborative-learning]] support. Traditional ITS architectures focus on individual cognition; ProPACT demonstrates that multimodal signals (gaze, pupil dilation) can be fused to model the health of a collaborative process in real time.

The proactive forecasting approach is a departure from reactive feedback paradigms common in [[adaptive-learning-systems]]. By predicting breakdowns 30 seconds ahead, ProPACT avoids the latency inherent in "detect-then-respond" architectures, allowing scaffolds to arrive *before* students experience frustration or disengagement. This has implications for [[engagement-metrics]] and real-time classroom orchestration.

For [[cs-education]] specifically, ProPACT validates that AI-assisted pair programming can improve both task outcomes and collaborative skill development. The system's integration with [[collaborative-ai-tutoring]] workflows suggests a future where AI tutors monitor not just what students produce (code), but *how* they work together.

The gaze-awareness tool (A3) is a particularly novel intervention: rather than providing didactic content, it surfaces the partner's attentional focus as a lightweight nudge toward shared attention. This aligns with [[multimodal-ai-tutoring]] research emphasizing non-verbal channels for learning support.

## Connected Concepts

- [[adaptive-learning-systems]]

- [[adaptive-learning]]
- [[ai-tutoring]]
- [[rag]]
## Connected Articles

- [[collaborative-ai-tutoring]] — Collaborative AI Tutoring
- [[multimodal-ai-tutoring]] — Multimodal AI Tutoring in STEM
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[adhd-video-segmentation-computing-education]] — Leveling the Playing Field: Temporal Video Segmentation for Individuals with ADHD in Computing Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-learning-companions-framework]] — Building AI Companions that Prioritise Learning over Performance
- [[ai-learning-transfer]] — AI Learning Transfer
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — Exploring Fraction Comprehension and Interest in Elementary Education Through AI-Powered Personalized Learning
- [[ai-stem-bibliometric-trends]] — Why does AI unlock new possibilities in STEM education? A Bibliometric Analysis of Trends and Future Agenda
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[ai-vocational-education-training-review]] — Artificial intelligence in vocational education and training: A systematic review of educational purposes, theoretica...
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[astra-atco-training-simulator]] — ASTRA: A Scalable Next-Generation ATCO Training Simulator with Autonomous Simpilots
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated Grading of Linux/Bash Examinations Using Large Language Models
- [[behaviorally-adaptive-visual-diversion-assessment-2026]] — Behaviorally Adaptive Visual Diversion for Inclusive and Resilient Digital Assessment Delivery
- [[buggy-genai-code-student-responses]] — When AI Is Wrong on Purpose: How Students Respond to Buggy GenAI Code
- [[chat-debugging-llm-hardware-education-2026]] — WIP: Chat-Debugging: Large Language Model as a Hardware Debugging Assistant
- [[clara-collaboration-literacy-dashboard]] — CLARA: An AI-Augmented Analytics Dashboard for Collaboration Literacy

## Citation

Viberg, A.A.G.K.S.S.D.O., students), S.D.W.E.W.P.D.C., ME)?, H.D.P.I.D.R.P.J., |, S.D.M., & |, I.F.T.T.C.F. (2026). [*ProPACT: Pair Programming with AI*](https://arxiv.org/abs/2605.02703)
