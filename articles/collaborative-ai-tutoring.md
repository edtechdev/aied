---
title: Collaborative AI Tutoring
created: "2026-05-07T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [intelligent-tutoring, adaptive-learning, scaffolding, higher-ed, formative-assessment, learning-analytics, sociocultural-learning, affective-tutoring, adaptive-learning-systems, metacognition]
sources: ['raw/papers/golrang-propact-pair-programming-2026.md']
confidence: medium
---

> ProPACT constructs a real-time model of pair collaboration using three signals:

> Most adaptive [[learning-gains|learning]] systems are individual-centric and reactive. **ProPACT** treats **collaboration itself as the object of instruction**, intervening *before* dyadic breakdowns occur by forecasting suboptimal states up to 30 seconds in advance.^[[golrang-propact-pair-programming-2026]]

## The Dyadic Learner Model

ProPACT constructs a real-time model of pair collaboration using three signals:

| Signal | Description | Measurement |
|--------|-------------|-------------|
| **JVA** (Joint Visual Attention) | Shared attentional focus | Cosine similarity of gaze distributions over 30-second windows |
| **ME** (Mental Effort) | Individual cognitive load | Index of Pupillary Activity (IPA) over 10-second windows |
| **JME** (Joint Mental Effort) | Cognitive engagement synchrony | Cross-recurrence of synchronized ME signals |

All signals are discretized against a resting baseline using **±2SD bins** (High, Average, Low).^[[golrang-propact-pair-programming-2026]]

## Proactive Forecasting Engine

- **Model:** XGBoost predicts JVA, JME, and ME over a **30-second horizon**
- **Policy:** Rule-based pedagogical hierarchy prioritizes minimally intrusive support
- **Principle:** Fade support when collaboration is productive; escalate only when breakdown risk increases

## Adaptive Feedback Hierarchy

| Intervention | Trigger | Intrusiveness |
|---|---|---|
| **A1: Do nothing** | MEs=AVG, JVA=H, JME=H | None (desired state) |
| **A2: GitHub Copilot** | MEs=HH or LL, or (MEs=HL and JVA=L) | Low (autocomplete) |
| **A3: Gaze-awareness tool** | JVA=Low | Low (visual cue highlighting partner's gaze) |
| **A4: Dialogue prompt** | JME=Low | Medium (editor prompt encouraging brief dialogue) |
| **A5: Task-based hint** | Both MEs=High (last resort) | High (directive hint) |

The hierarchy embodies the principle that **proactive, minimally intrusive scaffolds** outperform reactive, directive interventions.^[[golrang-propact-pair-programming-2026]]

## Key Results

In a within-subjects study with **26 pair-programming dyads** (52 CS/Engineering students), ProPACT feedback vs. control showed:

| Measure | Effect |
|---|---|
| **Debugging success** | Significantly higher (*t*(49.96) = −13.51, *p* < .0001) |
| **Debugging time** | Significantly lower / more efficient (*t*(44.70) = 4.39, *p* < .0001) |
| **Feedback uptake** | Significantly higher (*F*(49.81) = −17.69, *p* < .0001) |

Post-intervention gains in JVA and JME suggest improved collaborative regulation beyond immediate task completion.^[[golrang-propact-pair-programming-2026]]

## Relationship to Tutoring-Specific Design

ProPACT exemplifies [[tutoring-specific-vs-general-ai|tutoring-specific design]]: it does not give answers but structures collaboration through graduated scaffolds (mimicking a skilled pair-programming mentor). Like the best tutoring systems, it targets the [[sociocultural-learning|zone of proximal development]] at the *dyadic* level—ensuring partners are neither overloaded nor under-challenged. It also preserves [[metacognition]] by requiring learners to actively monitor and regulate their collaboration.^[[golrang-propact-pair-programming-2026]]

## Implications

- **For CS education:** Real-time dyadic regulation is tractable and effective; eye tracking + ML forecasting is viable at classroom scale
- **For adaptive systems:** The "tutoring" unit need not be an individual—collaboration itself can be scaffolded
- **For transfer:** Does improved dyadic regulation transfer to unsupervised pair work? Not yet tested

## Connected Concepts

- [[sociocultural-learning]]
- [[metacognition]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[pedagogical-agent]]
- [[student-modeling]]
- [[feedback]]
- [[multimodal]]
## Connected Articles

- [[golrang-propact-pair-programming-2026]]
- [[tutoring-specific-vs-general-ai]]
- [[ai-collaborative-learning-systematic-review]]
## Citation

Golrang, A., Sharma, K., Dehaen, S., & Viberg, O. (2026). [*ProPACT: A Proactive AI-Driven Adaptive Collaborative Tutor for Pair Programming*](https://arxiv.org/abs/2605.02703). arXiv:2605.02703.
