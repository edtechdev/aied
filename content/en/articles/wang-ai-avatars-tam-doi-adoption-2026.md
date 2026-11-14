---
title: "Understanding users' intention to adopt AI avatars in online learning: an integrated model of TAM and DOI"
created: "2026-11-10T18:42:04-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Learners accept an [[ai-avatars-and-synthetic-instructors|AI avatar]] when they can see what it does and believe it is on their side. In a survey of 653 people with digital learning experience, transparency — a clear account of the avatar's scope, data use and reasoning — was the strongest design feature in the model, and it worked by building [[trust|trust]] rather than by making the tool seem easier. [[personalized-learning|Personalization]] and [[ai-feedback-quality|feedback quality]] mattered too, but mostly by making the avatar seem useful and usable; interactivity mattered least. The lesson for anyone commissioning an avatar is unglamorous: explain the system consistently, show learners what changed after an interaction, and measure trust in the pilot, because trust is the least explained part of the model.

## Key Findings

1. **Transparency was the strongest lever, and it worked through trust.** Learners who found the avatar's workings clearly explained trusted it more than any other feature predicted anything, and that trust in turn predicted both attitude and intention to adopt.
2. **Personalization and feedback bought usefulness, not trust.** Both made the avatar feel useful and easy to use, and feedback also raised its perceived advantage over existing methods.
3. **Interactivity was the weakest feature.** It raised usefulness modestly but did nothing for observability or trust, so more back-and-forth is not a substitute for explaining the system.
4. **Intention followed advantage and usefulness more than attitude.** Believing the avatar was better than the alternative, and that it was useful, predicted adoption more strongly than a generally favorable attitude did.
5. **The model left trust largely unexplained.** Design features accounted for less of the variation in trust than in any other outcome, which suggests important influences — privacy, bias, institutional rules — sat outside the study.
6. **Older and non-technical respondents were less willing.** Age lowered intention and working in education or technology raised it; gender, education level, weekly study time, prior avatar experience and AI familiarity made no difference.

## Why adoption, not effectiveness, is the question

Most work on AI avatars in [[online-teaching-and-learning|online learning]] examines whether they improve instruction or how to build them; far less examines whether learners will accept them, and why. The authors frame the gap as a missing account of how specific design characteristics reach users' evaluative judgments — trust, perceived value, perceived control — rather than a missing account of outcomes. That matters for [[student-ai-interaction|student–AI interaction]]: a feature that is pedagogically sound can still fail if learners cannot see what it does or do not trust it.

Their answer is to combine two theories usually applied separately. [[technology-acceptance-model|TAM]] supplies the use-related evaluations — perceived usefulness and perceived ease of use leading to attitude and intention — but says little about how an innovation's visible benefits or social novelty enter the judgment. DOI theory supplies innovation-related evaluations, relative advantage and observability, but says little about individual usability and trust. Because an AI avatar is simultaneously a learning tool and a new kind of educational medium, the authors argue both sets of evaluations are in play at once.

## Four design features, five evaluations

The model places perceived personalization, feedback quality, transparency and interactivity upstream, and lets each connect to a subset of observability, relative advantage, perceived usefulness and perceived ease of use — the two [[technology-acceptance-model|TAM]] evaluations, alongside the two from DOI. Transparency additionally gets a path to trust, on the reasoning that a system which explains its scope, data use and decision logic gives users a stable basis for confidence.

The estimates sort the features into two groups. Personalization and feedback are broad-spectrum: both reach observability, relative advantage, ease of use and usefulness with consistently moderate coefficients. Interactivity is narrower and weaker, reaching relative advantage, ease of use and usefulness but neither observability nor trust. Transparency is specialized: it is the only design feature modeled into trust, and it has the largest single effect in the study.

A distinction the paper is careful about: transparency is what the designer communicates about how the system works, while observability is what the user actually sees of the results in their own use. The two are measured separately and both are predicted by transparency, but only observability sits in the DOI pathway toward attitude.

## Trust as the hinge, and what the model leaves open

Trust is modeled as the outcome that converts system qualities into willingness to adopt, and the results support that role: trust predicts attitude and intention, and transparency predicts trust far more strongly than any other design feature predicts anything. The authors read this as evidence that trust is not a byproduct of technical performance but a design target in its own right, and they recommend that avatars communicate their functional scope and support logic consistently enough for users to form stable expectations.

The weaker half of the story is how much remains unexplained. Trust has the lowest explained variance in the model, so transparency and the other features account for less than a third of it; the paper does not test [[privacy|privacy]] concerns, [[bias-mitigation|algorithmic bias]] or institutional [[governance|governance]], which it lists as outside scope. And because every hypothesized path came out positive and significant, the study offers no disconfirming result to show which parts of the framework might be wrong. The survey explained 38.9% of the variance in intention overall — a moderate share, not a full account.

## What this means for practice

- **Instructors:** Judge an avatar by what learners can see and check, not by its feature list. Before adopting one, ask the vendor for a plain statement of scope, data handling and response logic, and test whether students can tell what the avatar does and does not know.
- **Designers:** Design for transparency before adding features. State the avatar's functional scope, what it does with learner data and how it reaches its responses, and keep those explanations consistent across interactions — this is the path with the largest estimated association with trust in the study.
- **Designers:** Make outcomes visible, not just mechanisms explainable. Observability is learners seeing progress and results from their own use, so surface what changed after an interaction rather than only describing how the system works.
- **Administrators:** Do not assume uniform uptake. Younger respondents and those in education or technology roles reported higher intention; plan onboarding for older and non-technical learners rather than treating adoption as one audience.
- **Researchers:** Measure trust alongside intention when piloting an avatar, and report disconfirming paths. Trust was the least-explained construct here, and a pilot that only tracks satisfaction will miss it.

## Limitations

- The design is cross-sectional and single-source: all constructs come from one [[self-report-measures|self-report]] survey administered at one point, so the directional paths are theoretically motivated associations, not causal effects, and reciprocal relations (for example between trust, usefulness and attitude) are not modeled. The authors acknowledge this.
- Sampling was purposive and non-random, restricted to respondents with prior experience of AI-based or digital learning platforms, and the paper does not report the sample's country; the questionnaire labeled the concept with the Chinese term "AI化身". Generalization to less digitally experienced populations is untested.
- The four design features are users' perceptions, not manipulated system properties. Nothing in the study shows that changing a design changes adoption; it shows that learners who perceive more transparency also report more trust.
- Model fit is acceptable but marginal on two indices: SRMR = 0.081 against the conventional below-0.08 criterion, and AGFI = 0.886 against the usual 0.90, both described by the authors as satisfactory.
- Every hypothesized path was supported, which leaves the framework without a failed prediction; combined with trust's low explained variance, that suggests the model is better at ordering associations than at bounding them.

## Citation

Wang, R., Yang, L., Dai, M., & Jung, J. (2026). [*Understanding users' intention to adopt AI avatars in online learning: an integrated model of TAM and DOI*](https://doi.org/10.1057/s41599-026-08991-2). Humanities and Social Sciences Communications, 13, 1943.
