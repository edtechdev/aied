---
title: "ProPACT: Pair Programming with AI"
created: "2026-07-29T04:33:04-04:00"
updated: "2026-08-26T15:35:00-04:00"
type: article
tags: [collaborative-learning, cs-education, adaptive-learning, rag, intelligent-tutoring]
audience: [software developers]
research_method: [system development, experiment]
discipline: [cs education]

sources: ['raw/papers/golrang-propact-pair-programming-2026.md']
confidence: medium
---

> **ProPACT** (Proactive AI-Driven Adaptive Collaborative Tutor) is an AI-driven adaptive tutoring system for pair programming that **treats collaboration itself as the object of instruction.** Unlike individual-centric, reactive systems, it models *dyadic* learning states in real time and intervenes *before* collaborative breakdowns occur, using multimodal sensing and predictive forecasting.

## Key Findings

1. **Significant performance gains from proactive feedback.** Dyads receiving ProPACT feedback achieved substantially higher debugging success (*t*[49.96] = −13.51, *p* < .0001) and completed tasks more efficiently (*t*[44.70] = 4.39, *p* < .0001) compared to the no-feedback control condition.
2. **Dyadic sensing enables predictive intervention.** ProPACT constructs a multimodal dyadic learner model from Joint Visual Attention (JVA — cosine similarity of gaze distributions over 30-second windows), Joint Mental Effort (JME — cross-recurrence quantification of pupil-diameter signals), and individual Mental Effort (IPA from pupillary fluctuations). An XGBoost-based forecaster predicts sub-optimal collaboration states up to **30 seconds in advance.**
3. **Five-tier adaptive feedback hierarchy works.** The system escalates through minimally intrusive scaffolds: (A1) do nothing when collaboration is productive; (A2) temporarily enable GitHub Copilot when cognitive strain rises; (A3) show a gaze-awareness tool highlighting the partner's visual focus; (A4) issue unobtrusive dialogue prompts to re-align mental effort; and (A5) provide directive task-based hints only as a last resort. Signals are discretized against a normalized resting baseline using a ±2SD criterion (High / Average / Low).
4. **Post-intervention gains in collaborative regulation.** Beyond task-level improvements, dyads showed sustained increases in JVA and JME after the intervention, indicating that the system fostered durable collaborative skills rather than just providing momentary assistance.

## Implications

ProPACT represents a shift from *individual* to *dyadic* learner modeling in [[intelligent-tutoring]]. By treating the pair — not the person — as the unit of analysis, it addresses a long-standing gap in [[collaborative-learning]] support. Traditional ITS architectures focus on individual cognition; ProPACT demonstrates that multimodal signals (gaze, pupil dilation) can be fused to model the health of a collaborative process in real time.

The proactive forecasting approach is a departure from reactive feedback paradigms common in [[adaptive-learning]]. By predicting breakdowns 30 seconds ahead, ProPACT avoids the latency inherent in "detect-then-respond" architectures, allowing scaffolds to arrive *before* students experience frustration or disengagement. This has implications for [[student-engagement|engagement metrics]] and real-time classroom orchestration.

For [[cs-education]] specifically, ProPACT validates that AI-assisted pair programming can improve both task outcomes and collaborative skill development. The system's integration with [[collaborative-ai-tutoring]] workflows suggests a future where AI tutors monitor not just what students produce (code), but *how* they work together.

The gaze-awareness tool (A3) is a particularly novel intervention: rather than providing didactic content, it surfaces the partner's attentional focus as a lightweight nudge toward shared attention. This aligns with [[multimodal-ai-tutoring]] research emphasizing non-verbal channels for learning support.

## Connected Concepts

- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[collaborative-learning]]
- [[student-modeling]]
- [[multimodal]]
## Connected Articles

- [[collaborative-ai-tutoring]] — Collaborative AI Tutoring
- [[multimodal-ai-tutoring]] — Multimodal AI Tutoring in STEM
- [[clara-collaboration-literacy-dashboard]] — CLARA: An AI-Augmented Analytics Dashboard for Collaboration Literacy
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms

## Citation

Golrang, A., Sharma, K., Dehaen, S., & Viberg, O. (2026). [*ProPACT: A Proactive AI-Driven Adaptive Collaborative Tutor for Pair Programming*](https://arxiv.org/abs/2605.02703).
