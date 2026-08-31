---
title: "ARPG+: a simulation-based study of real-time coaching for educational LLM prompting"
created: "2026-08-23T14:00:00-04:00"
updated: "2026-08-23T14:00:00-04:00"
type: article
tags: [prompt-engineering, llm, metacognition, cognitive-offloading, self-regulated-learning, generative-ai, learning-design, human-ai-collaboration]
research_method: [system development]
category: [instructional design]
sources: ['raw/papers/ye-arpg-real-time-coaching-llm-prompting-2026.md']
confidence: high
---

> **Synthesis:** Ye and colleagues present ARPG+, a real-time coaching system that teaches students how to prompt [[llm|large language models]] (LLMs) effectively, grounding its design in cognitive load theory and the zone of proximal development. The system senses when learners struggle, delivers calibrated just-in-time interventions, and fades support as skills develop, tracking learner capability with uncertainty quantification and diagnosing prompt quality across six dimensions. Evaluation with LLM-based simulated learners showed prompt quality increases 143% beyond unguided practice and independence reaches 91% of final interactions versus 59% under fixed support, generalizing to other domains without retraining. The authors are explicit that all results are [[simulation]]-based and that classroom validation is the necessary next step.

## Core Finding

Prompting is a learnable, transferable metacognitive skill, and principled real-time coaching can improve prompt quality, accelerate learning, prevent cognitive overload, and foster durable autonomy — but effective [[scaffolding]] must be able to stop helping, fading support as competence emerges to avoid dependency and metacognitive laziness. The design directly responds to the "autonomy paradox" in which generative-AI support that never withdraws hollows out the self-[[regulation]] that makes learning durable.

## Operationalizing Learning Theory

ARPG+ converts abstract [[pedagogy|pedagogical]] constructs into calibratable, real-time decision variables. Cognitive load theory is instantiated through proxies for intrinsic, extraneous, and germane load aggregated into a bounded overload-risk signal; the zone of proximal development becomes a dynamic ability estimate with an uncertainty-aware moving boundary; and a normalized Struggle Index quantifies interactional friction from editing and pausing behaviours. Prompt quality is represented as a six-dimensional vector — structural completeness, semantic clarity, contextual grounding, task specificity, constraint explicitness, and output conventions — enabling fine-grained diagnosis and longitudinal tracking rather than holistic scoring.

## Dual-Process Architecture and Scaffolding

A lightweight-deep dual architecture ensures fast responsiveness for routine interactions (50ms fast path) while reserving richer analysis for critical moments (300ms deep path). Coaching is cast as a constrained sequential decision process in which an information-theoretic selector optimizes [[feedback]] content and granularity to maximize expected uncertainty reduction while bounding cognitive overload risk. A dynamic scaffolding-density schedule with exponential decay and periodic skill probes prevents pseudo-mastery: ablations show removing scaffolding drops independence from 0.915 to 0.662, and removing reinforcement primarily harms retention.

## Simulated Evidence and Limitations

Across simulated learners, ARPG+ improved prompt quality by 143% beyond unguided practice, achieved 91% independence in late-session interactions versus 59% under fixed support and 71% under linear decay, and generalized across five additional domains (code writing, data analysis, [[creativity|creative]] design, [[writing-education|academic writing]], business communication) with 93.8% average retention. The authors are careful to frame this as system feasibility and simulation-based performance, not educational effectiveness, noting that simulated agents lack the affective, motivational, and interpersonal dynamics of real students and that [[equity-in-ai-education|equity]]-relevant dimensions (first-generation status, second-[[language-learning|language learning]], neurodivergence, cultural variation in [[help-seeking]]) remain unaddressed. A three-phase classroom validation agenda is laid out.

## Relevance to the knowledge base

This paper advances the knowledge base's understanding of [[prompt-engineering]] as a teachable skill rather than a mere technique, and its treatment of fading support directly addresses the knowledge base's concerns about [[cognitive-offloading]] and [[ai-misuse-learning-harm|AI-driven autonomy erosion]]. By operationalizing [[self-regulated-learning]], [[metacognition]], and [[learning-design]] in a real-time coaching loop, it demonstrates how [[human-ai-collaboration]] can be engineered to build rather than erode learner [[agency]]. Its explicit honesty about simulation-based limits is a model for evaluating [[generative-ai]] learning tools.

## Connected Concepts

- [[prompt-engineering]]
- [[llm]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[generative-ai]]
- [[human-ai-collaboration]]
- [[learning-design]]
- [[agency]]

## Connected Articles

- [[prompting-teachability-novice-personas-lbt-2026]]
- [[prompt-privilege-equitable-ai-access-2026]]
- [[think-first-chatgpt-later-2026]]
- [[jost-llm-programming-education-learning-outcomes]]

## Citation

Ye, P.-G., Mo, K., Long, Y., Liu, M., Sang, H., & Zheng, J. (2026). [*ARPG+: a simulation-based study of real-time coaching for educational LLM prompting*](https://doi.org/10.1186/s41239-026-00606-9). *International Journal of Educational Technology in Higher Education*.
