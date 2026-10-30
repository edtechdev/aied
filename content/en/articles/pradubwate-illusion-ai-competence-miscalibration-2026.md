---
title: "The Illusion of AI Competence: A Conceptual Review of Cross-Dimensional Miscalibration in Generative AI Use"
created: "2026-10-30T06:09:00-04:00"
updated: "2026-10-30T06:09:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/pradubwate-illusion-ai-competence-miscalibration-2026.md']
confidence: low
page_kind: [framework]
research_method: [literature review]
discipline: []
level: []
audience: [researchers, instructors, instructional designers, administrators]
pedagogy: [metacognition, self-regulated-learning, scaffolding]
technology: [generative-ai, llm, conversational-ai]
assessment: [self-assessment, assessment, assessment-validity, feedback]
methods: []
institutions: []
ethics: [hallucination-risk, ai-use-disclosure, trust, trust-calibration]
foundations: [ai-literacy, cognitive-offloading, cognitive-surrender, critical-thinking]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-30"
    agent: hermes-agent
source_depth: full text
verified: [citation, quotes, links]
---

> **Synthesis:** Pradubwate (2026) argues that the familiar worry about AI overconfidence has been measured in the wrong place. The paper separates AI competence into three dimensions that give different feedback: operational competence (AI-O), the procedural fluency of prompting and iterating, which returns immediate and unambiguous signals; evaluative competence (AI-E), the capacity to judge whether an output is accurate, which returns delayed, sparse or absent signals; and domain-task competence (DT), the knowledge to do the task unaided, which is deferred to assessment or real-world consequence. The illusion of AI competence is then defined narrowly as a calibration failure in which gains in AI-O are misread as evidence of gains in AI-E and DT. That reframing separates it from the Dunning-Kruger effect, where the deficit and the misjudgement sit on the same dimension, and it makes the phenomenon falsifiable, since the three dimensions can be measured separately. The paper is a structured but non-exhaustive conceptual review with no data of its own, organized into eight search arms including one built to find disconfirming evidence.

## Key Findings

1. **The construct is disaggregated into three dimensions rather than one.** AI-O is skill-like, rapidly acquired and highly observable because a prompt either returns a usable artifact or does not. AI-E depends on external verification and is only weakly self-signaling, because users rarely receive unambiguous feedback about an evaluation they failed to perform. DT is what credentialing is supposed to certify.
2. **The mechanism is a bifurcation at cognitive offloading.** Offloading raises the user's sense of understanding, since a satisfactory explanation is now available and cognitively accessible, while the processing that would produce durable understanding declines. The paper's sharpest point is that only the first effect is experienced: the second is a non-event, and users cannot experience elaboration they did not perform.
3. **The disconfirming arm is what makes the framework conditional rather than deterministic.** Evidence gathered deliberately against the thesis shows [[generative-ai|generative AI]] supporting calibration when configured to question rather than answer, or to critique rather than produce. Darvishi et al. (2024) also found that self-regulation gains under AI scaffolding did not persist once the scaffolding was removed, which the paper reads as dependency rather than internalisation.
4. **A single study carries the strongest demonstration of divergence.** Bastani et al. (2024), a field experiment in secondary mathematics, found students with unrestricted access to a GPT-4 tutor performed better during practice but worse than controls on a later unassisted examination, with the deficit eliminated in a version built with pedagogical safeguards. The paper treats that as assisted performance separating from retained competence, and separating by design.
5. **The self-correcting path depends on the weakest dimension.** Detected fabrications reduce [[trust|trust]] and puncture inflated confidence, but detection is an AI-E capacity, so the loop closes only for users with enough domain knowledge to notice errors. Users without it do not detect, and their confidence goes unchecked.
6. **Two falsifiable implications are offered instead of propositions.** TI-1 holds that if the illusion is driven by fluency-cue misattribution, calibration error should vary with interface design, with larger AI-O to AI-E transfer on low-friction conversational interfaces than on those showing uncertainty, source attribution or deliberate friction. TI-2 holds that immediate objective feedback on output accuracy should attenuate the gap more effectively than later instruction about AI limitations.
7. **Two earlier claims are withdrawn by the author.** A general link between lower foundational AI knowledge and larger confidence gaps is judged under-determined and guilty of conflating the three dimensions, and a claim that metacognitive confrontation beats prompt-optimization training is withdrawn for lacking a direct comparative trial. Both are reframed as open questions.

## What the review is, and what it is not

The paper is explicit that it demonstrates nothing. It is a conceptual review with eight thematic search arms, screened by a single reviewer without a pre-registered protocol or formal quality appraisal, and the author states that findings should be read as a structured argument supported by evidence rather than as a systematic estimate of the literature. The strongest direct evidence for the perceived-understanding mechanism comes from internet search rather than generative AI, and the extension to chatbots is described as theoretically motivated inference.

Its central claim about interfaces is also the one most dependent on evidence it does not have. The design literature on cognitive forcing functions shows that friction reduces overreliance on AI recommendations, but those studies did not measure self-assessed competence, so the prediction in TI-1 is genuinely open rather than confirmatory.

The contribution is a vocabulary and a measurement agenda. Naming AI-O, AI-E and DT separately turns the vague claim that users are overconfident into a testable claim about transfer between dimensions, and it explains why most AI literacy assessment cannot detect the problem: published instruments rely largely on self-report, which is the measure the framework predicts to be compromised.

## What this means for practice

- **Instructors**: A curriculum built only around prompting, tool selection and workflow integration strengthens the dimension whose success signals drive the faulty inference while leaving evaluation untouched. Teaching evaluation as the primary skill, with error-detection exercises on outputs seeded with plausible fabrications, targets the dimension that ordinary use never gives feedback on.
- **Instructors**: Telling students about the risk is unlikely to work, because the illusion is sustained by an absence in the student's own experience. Students need to encounter their own miscalibration where the discrepancy is unambiguous.
- **Assessment designers**: Measure the dimensions apart. Unassisted performance belongs alongside AI-assisted performance in the same course, and evaluative competence should be assessed through verification tasks with known ground truth rather than through confidence ratings.
- **Instructional designers**: Interface features are the highest-leverage point the review identifies, through calibrated uncertainty display, source attribution, selective friction on high-stakes queries and forcing functions. The obstacle named is incentives rather than feasibility, since each of these reduces the fluency that drives adoption.
- **Researchers**: The immediate need is an instrument battery assessing AI-O, AI-E and DT independently with confidence elicited for each, plus longitudinal designs, because single-session studies cannot address a cumulative mechanism.

## Limitations

- This is a conceptual review with no data, no sample and no measured outcomes. Its causal model is a mechanism sketch consistent with the mapped evidence, not a validated structural model, and no path coefficients are implied.
- Screening was done by a single reviewer without pre-registration or formal quality appraisal, so the "structured but non-exhaustive" label is the author's own and the evidence map is not a systematic estimate.
- The search vocabulary was theory-derived and restricted to English-language peer-reviewed sources, which likely under-retrieves work in information science, human factors and the preprint literature.
- The mechanistic chain relies on transfer from internet-search research to generative AI. The strongest evidence for perceived-understanding inflation predates current chatbots.
- The paper itself flags that the field is moving faster than the review cycle, so findings tied to specific model generations or interface conventions may not generalize forward.

## Citation

Pradubwate, R. (2026). [The Illusion of AI Competence: A Conceptual Review of Cross-Dimensional Miscalibration in Generative AI Use](https://doi.org/10.1016/j.chbah.2026.100407). *Computers in Human Behavior: Artificial Humans*. Article 100407, in press.
