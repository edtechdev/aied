---
title: Ordered Network Analysis of Epistemic Emotions during Collaborative Problem Solving
created: "2026-07-28T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
pedagogy: [problem-solving]
technology: [affective-computing, affective-tutoring, human-in-the-loop-ai, learning-analytics, llm]
research_method: [learning analytics]
sources: ['raw/papers/2607.23317.md']
confidence: high
audience: [researchers, learning analytics designers]
---

> **Synthesis:** Anindho, Venkatesha, Ocumpaugh and Blanchard apply Ordered [[network-analysis|Network Analysis]] to trace how epistemic emotions such as confusion and frustration persist and transition during co-[[situated-learning|situated]] collaborative [[problem-solving|problem solving]]. The work advances affect-aware [[learning-analytics|learning analytics]] by modeling the temporal ordering of emotional states rather than static frequencies, informing when interventions should trigger in [[affective-tutoring]] systems and [[multimodal]] detectors like [[multimodal-affective-its-presentation]]. It grounds affect dynamics in [[collaborative-learning]] contexts, complements sensor-based approaches like [[affective-text-wearable-student-health]] and video-based [[engagement-assessment-video]].

## Key Findings

- Ordered Network Analysis traces how epistemic emotions such as confusion and frustration persist and transition during co-situated collaborative problem solving.
- Modeling the temporal ordering of emotional states (rather than static frequencies) reveals how affect unfolds over time.
- The analysis informs when interventions should be triggered in [[affective-tutoring]] systems.
- The approach complements sensor-based ([[affective-text-wearable-student-health]]) and video-based ([[engagement-assessment-video]]) affect detection by grounding emotions in collaborative-learning contexts.

## What this means for practice

- **Designers.** Trigger affect-aware responses on ordered trajectories of confusion and frustration rather than isolated signals or summary frequencies, because the models show short-range persistence and directional transitions instead of instantaneous states.
- Distinguish productive struggle from disengagement in collaborative tasks: slower groups showed sustained confused–conflicted connections, while faster groups showed frequent but fleeting disengagement that may indicate one or two members carrying the work.
- Treat probe-caught and self-caught reports as different measurements — probe-caught networks showed stronger self-loops around curiosity, optimism, and confusion, whereas self-caught reports clustered around frustration, surprise, and conflict — and log which mechanism produced each report.
- Timestamp every affect report and preserve the raw event sequence, since the analysis depends on ordering within a moving window rather than on totals.
- **Researchers.** Triangulate retrospective cued-recall reports with physiological or behavioral signals, because recall bias and temporal imprecision feed directly into the modeled ordering of affective states.

## Limitations

- The study has 27 participants organized into 9 groups of three, recruited from within the authors' own department, with a disproportionately male sample (18 of 27), which the authors flag as limiting generalizability.
- Affective states were drawn from a fixed set of seven predefined labels (confused, curious, frustrated, disengaged, optimistic, surprised, conflicted) reported during retrospective cued-recall, so the analysis inherits recall bias and temporal imprecision.
- Reporting mechanisms were imbalanced (64% probe-caught versus 36% self-caught), which the authors note may influence the relative density of connections between states.
- All nine groups solved the Weights Task correctly, so the study carries no measure of learning or solution quality and cannot relate affective structure to performance.

## Connected Concepts

- [[affective-tutoring]]
- [[collaborative-learning]]
- [[affective-computing]] — computational modeling of emotional states
- [[learning-analytics]] — affect-aware analytics of learning processes
- [[social-emotional-learning]] — emotional regulation during joint problem solving
- [[student-engagement]] — affective engagement during collaboration
- [[multimodal]] — integrating sensors, video and network-based affect evidence
## Connected Articles

- [[multimodal-affective-its-presentation]]
- [[affective-text-wearable-student-health]]
- [[engagement-assessment-video]]
- [[kar-mathbuddy-affective-math-tutoring-2025]] — An affective approach to math tutoring
## Citation

Sifatul Anindho, Videep Venkatesha, Jaclyn Ocumpaugh, Nathaniel Blanchard (2026). [Ordered Network Analysis of Epistemic Emotions during Collaborative Problem Solving](https://arxiv.org/abs/2607.23317).
