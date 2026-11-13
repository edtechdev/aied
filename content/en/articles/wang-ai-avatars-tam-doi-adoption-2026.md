---
title: "Understanding users' intention to adopt AI avatars in online learning: an integrated model of TAM and DOI"
created: "2026-11-10T18:42:04-05:00"
updated: "2026-11-10T18:45:00-05:00"
type: article
sources: ['raw/papers/wang-ai-avatars-tam-doi-adoption-2026.md']
source_url: "https://doi.org/10.1057/s41599-026-08991-2"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [survey, structural equation modeling]
methods: [quantitative-research]
level: [higher ed]
audience: [instructors, instructional designers, administrators]
technology: [ai-avatars-and-synthetic-instructors, technology-acceptance-model, personalized-learning]
pedagogy: [student-ai-interaction]
assessment: [feedback]
ethics: [trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Wang, Yang, Dai, and Jung (2026) ask what makes learners willing to adopt [[ai-avatars-and-synthetic-instructors|AI avatars]] in online courses, and answer with a 653-respondent survey modeled as a combined [[technology-acceptance-model|TAM]]–DOI structural equation model. Four perceived design features — [[personalized-learning|personalization]], [[ai-feedback-quality|feedback quality]], transparency, and interactivity — are modeled as antecedents of five evaluations (observability, relative advantage, perceived usefulness, perceived ease of use, and [[trust]]), which in turn feed attitude and intention to adopt. Every hypothesized path is positive and significant, the model explains 38.9% of the variance in adoption intention, and transparency → trust is by far the strongest link in the model (β = 0.542). The practical reading is that trust, not feature count, is the hinge: transparency buys trust, and trust plus perceived usefulness carry intention.

## Key Findings

1. **Transparency is the strongest design lever, and it works through trust.** Perceived transparency predicts trust at β = 0.542 and observability at β = 0.329, the two largest coefficients in the model; trust in turn predicts attitude (β = 0.217) and intention to adopt (β = 0.196).
2. **Personalization, feedback, and interactivity mostly buy usefulness and ease of use, not trust.** Personalization predicts perceived usefulness (β = 0.259) and ease of use (β = 0.288); feedback quality predicts ease of use (β = 0.298) and relative advantage (β = 0.289); interactivity's paths are the weakest of the four features (β = 0.181 to 0.212).
3. **Intention is carried by relative advantage and usefulness more than by attitude alone.** Relative advantage → intention is β = 0.267 and perceived usefulness → intention is β = 0.247, while attitude → intention is β = 0.126 — the smallest of the direct paths to adoption.
4. **The integrated model explains a moderate share of intention.** R² = 0.389 for intention to adopt, 0.365 for attitude, 0.450 for perceived usefulness, and only 0.294 for trust, which leaves most of the trust variance unexplained.
5. **Age and occupation move intention; the usual controls do not.** Older respondents reported lower adoption intention (β = −0.113), education- or technology-sector respondents higher (β = 0.088); gender, education level, weekly online study time, prior avatar experience, and familiarity with AI in education were all null.
6. **"AI avatar" here means an interactive agent, not a visual body.** The questionnaire defined avatars as AI-powered virtual agents that interact in real time, give feedback, and simulate human communication, and it deliberately measured interaction and functional qualities rather than embodiment or appearance.

## Why adoption, not effectiveness, is the question

Most work on AI avatars in [[online-teaching-and-learning|online learning]] examines whether they improve instruction or how to build them; far less examines whether learners will accept them, and why. The authors frame the gap as a missing account of how specific design characteristics reach users' evaluative judgments — trust, perceived value, perceived control — rather than a missing account of outcomes. That framing matters for [[student-ai-interaction|student–AI interaction]]: a feature that is pedagogically sound can still fail if learners cannot see what it does or do not trust it.

Their answer is to combine two theories that are usually applied separately. [[technology-acceptance-model|TAM]] supplies the use-related evaluations — perceived usefulness and perceived ease of use leading to attitude and intention — but says little about how an innovation's visible benefits or social novelty enter the judgment. DOI theory supplies innovation-related evaluations, relative advantage and observability, but says little about individual usability and trust. Because an AI avatar is simultaneously a learning tool and a new kind of educational medium, the authors argue both sets of evaluations are in play at once.

## Four design features, five evaluations

The model places perceived personalization, feedback quality, transparency, and interactivity upstream, and lets each connect to a subset of observability, relative advantage, perceived usefulness, and perceived ease of use. Transparency additionally gets a path to trust, on the reasoning that a system which explains its scope, data use, and decision logic gives users a stable basis for confidence.

The estimates sort the features into two groups. Personalization and feedback are broad-spectrum: both reach observability, relative advantage, ease of use, and usefulness with coefficients between 0.204 and 0.298. Interactivity is narrower and weaker, reaching relative advantage (β = 0.184), ease of use (β = 0.181), and usefulness (β = 0.212) but not observability or trust. Transparency is specialized: it is the only design feature modeled into trust, and it has the largest single effect in the study.

A conceptual distinction the paper is careful about: transparency is what the designer communicates about how the system works, while observability is what the user actually sees of the results in their own use. The two are measured separately and both are predicted by transparency, but only observability sits in the DOI pathway toward attitude.

## Trust as the hinge, and what the model leaves open

Trust is modeled as the outcome that converts system qualities into willingness to adopt, and the results support that role: trust predicts attitude and intention, and transparency predicts trust far more strongly than any other design feature predicts anything. The authors read this as evidence that trust is not a byproduct of technical performance but a design target in its own right, and they recommend that avatars communicate their functional scope and support logic consistently enough for users to form stable expectations.

The weaker half of the story is how much remains unexplained. Trust has the lowest R² in the model (0.294), so transparency and the other features account for less than a third of its variance; the paper does not test [[privacy]] concerns, [[bias-mitigation|algorithmic bias]], or institutional [[governance]], which it lists as outside scope. And because every hypothesized path came out positive and significant, the study offers no disconfirming result to show which parts of the framework might be wrong.

## What this means for practice

- **Design for transparency before adding features.** State the avatar's functional scope, what it does with learner data, and how it reaches its responses, and keep those explanations consistent across interactions — this is the path with the largest estimated association with trust in the study.
- **Make outcomes visible, not just mechanisms explainable.** Observability is about learners seeing progress and results from their own use, so surface what changed after an interaction rather than only describing how the system works.
- **Use personalization and feedback to carry perceived usefulness and ease of use.** Adapt prompts and feedback to learner progress, keep task guidance concise, and cut unnecessary interaction steps.
- **Measure trust alongside intention when piloting an avatar.** The model treats trust as a design outcome with its own antecedents, and in this sample it was the least-explained construct, so a pilot that only tracks satisfaction will miss it.
- **Do not assume uniform uptake.** Younger respondents and those in education or technology roles reported higher intention; plan onboarding for older and non-technical learners rather than treating adoption as one audience.

## Limitations

- The design is cross-sectional and single-source: all constructs come from one [[self-report-measures|self-report]] survey administered at one point, so the directional paths are theoretically motivated associations, not causal effects, and reciprocal relations (for example between trust, usefulness, and attitude) are not modeled. The authors acknowledge this.
- Sampling was purposive and non-random, restricted to respondents with prior experience of AI-based or digital learning platforms, and the paper does not report the sample's country; the questionnaire labeled the concept with the Chinese term "AI化身". Generalization to less digitally experienced populations is untested.
- The four design features are users' perceptions, not manipulated system properties. Nothing in the study shows that changing a design changes adoption; it shows that learners who perceive more transparency also report more trust.
- Model fit is acceptable but marginal on two indices: SRMR = 0.081 against the conventional below-0.08 criterion, and AGFI = 0.886 against the usual 0.90, both described by the authors as satisfactory.
- Every hypothesized path was supported, which leaves the framework without a failed prediction; combined with trust's R² of 0.294, that suggests the model is better at ordering associations than at bounding them.

## Citation

Wang, R., Yang, L., Dai, M., & Jung, J. (2026). [*Understanding users' intention to adopt AI avatars in online learning: an integrated model of TAM and DOI*](https://doi.org/10.1057/s41599-026-08991-2). Humanities and Social Sciences Communications, 13, 1943.
