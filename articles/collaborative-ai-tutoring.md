---
title: Collaborative AI Tutoring
created: 2026-05-07
updated: 2026-05-07
type: article
tags: [intelligent-tutoring, adaptive-learning, scaffolding, higher-ed, formative-assessment, learning-analytics, zone-of-proximal-development, affective-tutoring, adaptive-learning-systems, metacognition]
sources: ['raw/papers/golrang-propact-pair-programming-2026.md']
confidence: medium
---

> ProPACT constructs a real-time model of pair collaboration using three signals:

> Most adaptive learning systems are individual-centric and reactive. **ProPACT** treats **collaboration itself as the object of instruction**, intervening *before* dyadic breakdowns occur by forecasting suboptimal states up to 30 seconds in advance.^[[golrang-propact-pair-programming-2026]]

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

ProPACT exemplifies [[tutoring-specific-vs-general-ai|tutoring-specific design]]: it does not give answers but structures collaboration through graduated scaffolds (mimicking a skilled pair-programming mentor). Like the best tutoring systems, it targets the [[zone-of-proximal-development|zone of proximal development]] at the *dyadic* level—ensuring partners are neither overloaded nor under-challenged. It also preserves [[metacognition]] by requiring learners to actively monitor and regulate their collaboration.^[[golrang-propact-pair-programming-2026]]

## Implications

- **For CS education:** Real-time dyadic regulation is tractable and effective; eye tracking + ML forecasting is viable at classroom scale
- **For adaptive systems:** The "tutoring" unit need not be an individual—collaboration itself can be scaffolded
- **For transfer:** Does improved dyadic regulation transfer to unsupervised pair work? Not yet tested

## Connected Concepts

- [[adaptive-learning-systems]]
- [[affective-tutoring]]
- [[ai-literacy]]
- [[metacognition]]
- [[socratic-ai-dialogue]]
- [[zone-of-proximal-development]]

- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[learning-analytics]]
- [[scaffolding]]
## Connected Articles

- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[authentic-assessment]] — Authentic Assessment
- [[clara-collaboration-literacy-dashboard]] — CLARA: An AI-Augmented Analytics Dashboard for Collaboration Literacy
- [[engagement-forecasting-its]] — From Heuristics to Analytics: Forecasting Effort and Progress in Online Learning
- [[genai-meta-analysis-programming-learning]] — A meta-analysis of the effect of generative AI on productivity and learning in programming
- [[golrang-propact-pair-programming-2026]] — ProPACT: Pair Programming with AI
- [[icap-cognitive-engagement-llm-agents]] — Measuring Cognitive Engagement in Collaborative Discourse with an Extended ICAP Framework: Comparing Human Annotation...
- [[multi-agent-llm-social-learning]] — Beyond the AI Tutor: Social Learning with LLM Agents
- [[multimodal-learning-genai]] — Multimodal Learning with Generative AI
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[student-perception-ai-use-collaboration]] — Students' Perception Accuracy of Partners' AI Use and its Relation to Collaboration Performance
- [[tutoring-specific-vs-general-ai]] — Tutoring-Specific vs. General-Purpose AI in Education
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm

## Citation

Viberg, A.A.G.K.S.S.D.O., students), S.D.W.E.W.P.D.C., ME)?, H.D.P.I.D.R.P.J., |, S.D.M., & |, I.F.T.T.C.F. (2026). [*Collaborative AI Tutoring*](https://arxiv.org/abs/2605.02703)
