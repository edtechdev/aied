---
title: 'ProPACT: Pair Programming with AI'
created: 2026-07-29
updated: 2026-07-29
type: article
tags: [pair-programming, collaborative-learning, cs-education]
sources: [raw/papers/golrang-propact-pair-programming-2026.md]
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

## Citation

Viberg, A.A.G.K.S.S.D.O., students), S.D.W.E.W.P.D.C., ME)?, H.D.P.I.D.R.P.J., |, S.D.M., & |, I.F.T.T.C.F. (2026). [*ProPACT: Pair Programming with AI*](https://arxiv.org/abs/2605.02703)

## Related Pages

- [[collaborative-learning]] — Foundational paradigm for dyadic and group learning processes
- [[collaborative-ai-tutoring]] — AI systems that support multi-learner interaction
- [[intelligent-tutoring-systems]] — Broader class of adaptive instructional systems
- [[adaptive-learning-systems]] — Systems that adjust to learner state in real time
- [[cs-education]] — Context domain for pair programming interventions
- [[engagement-metrics]] — Measurement frameworks for attentional and cognitive engagement
- [[multimodal-ai-tutoring]] — AI tutors that fuse multiple sensor channels
