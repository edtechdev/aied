---
title: "Reconceptualizing outdoor geoscience learning for the generative AI era: a human-centered instructional model"
created: "2026-10-09T09:30:00-04:00"
updated: "2026-10-09T09:30:00-04:00"
type: article
foundations: [human-ai-collaboration, cognitive-offloading, agency, teacher-role, theory-development-aied]
pedagogy: [inquiry-based-learning, experiential-learning, situated-learning, scaffolding, misconceptions]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [process-oriented-assessment, evaluative-judgment]
methods: [design-based-research, research-methods-aied]
ethics: [equity-in-ai-education, accessibility, trust-calibration]
research_method: [theoretical analysis]
discipline: [science education]
audience: [instructors, researchers, curriculum designers]
page_kind: [framework]
sources: ['raw/papers/geoscience-field-learning-genai-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-09"
    agent: hermes-agent
---

> **Synthesis:** Choi (2026) argues that [[generative-ai|generative AI]] poses a problem for outdoor geoscience learning that existing field-learning frameworks do not capture: the system does not merely add a tool but reorganizes the epistemic work of inquiry, influencing what learners notice and whether they interpret field evidence themselves. Extending Novelty Space and established accounts of technological mediation, the Hypothesis and Theory article distinguishes support, mediation, and substitution by asking who performs the observation, initial interpretation, and adjudication. Its central hypothesis is conditional — GenAI augments [[agency|epistemic agency]] when it arrives after direct observation and an initial learner interpretation, is restricted to generating questions and candidate explanations, and is adjudicated against field evidence — and it is decomposed into six testable propositions. A six-stage human-centered model and a thought experiment at a basalt outcrop show how [[inquiry-based-learning|field inquiry]] could be sequenced. Because the article is conceptual, it offers a falsifiable research agenda rather than evidence of improved learning.

## Key Findings

1. **Field-first sequencing (P1).** Learners who examine and record field evidence before receiving GenAI interpretations are predicted to produce more specific observations and use more local field evidence than learners given AI interpretations before observation.
2. **Initial human interpretation (P2).** Recording a learner-owned interpretation before consulting GenAI is predicted to increase epistemic agency and reduce AI anchoring; the recorded commitment makes later anchoring detectable and provides a baseline for assessing conceptual change.
3. **Three mechanisms of reorganization.** GenAI affects inquiry through attentional pre-structuring (features named as salient before learners survey the site), interpretive anchoring (a fluent initial response narrowing the range of explanations), and authority transfer (citing the system's answer instead of the evidential warrant).
4. **Support, mediation, substitution.** The model classifies a use by who performs the observation, initial interpretation, and adjudication; substitution is flagged when any one of three task-level criteria is met, and a single lesson may contain all three modes.
5. **The six-stage model.** Preparation, evidence recording, initial interpretation, dialogic challenger, human evidence-based adjudication, and reflective synthesis with epistemic accounting — Stages 4 and 5 form a recursive challenger–adjudication loop rather than a fixed line.
6. **Six propositions with disconfirmation conditions.** P1–P6 each specify a comparison condition, an observable indicator, and a finding that would challenge the claim; the six operational constructs include observation specificity, field-evidence use, AI anchoring, epistemic agency, adjudication quality, and epistemic accounting.
7. **The Auraji thought experiment.** Ten [[k-12|middle school]] learners and one teacher at a basalt outcrop; Stages 2–5 fit within a single class period of about 50 min, with adjudication occupying about 15 min, comparable to the time the earlier teacher-explanation lesson spent at the same outcrop.

## From tool novelty to epistemic reorganization

Choi's central move is to treat GenAI not as a more capable field tool but as a source of epistemic reorganization. Earlier digital tools — geographic information systems, databases, virtual field trips — changed representation and access while leaving interpretation visibly human; a generative model can produce a natural-language account that competes with the learner's own interpretation and resembles the language of warranted explanation. The article identifies three mechanisms, drawing on anchoring (Tversky and Kahneman, 1974), confirmation bias, and automation bias: attentional pre-structuring, interpretive anchoring, and authority transfer. None requires the output to be false. This reframes the familiar [[cognitive-offloading|offloading]] worry for [[situated-learning|situated]], evidence-bound settings: the question is not whether learners can operate the tool but whether the system is taking over work the learner should perform. [[generative-ai|GenAI]] can also reorganize productively, introducing friction, contrast, and alternative possibilities without settling the meaning of the evidence.

## The six-stage model and its propositions

The model keeps the pre-field, field, and post-field structure but differentiates the epistemic work inside it. Stage 1 manages novelty and sets the AI-use rules; Stage 2 requires a specific, non-AI evidence record; Stage 3 requires an explicit, learner-owned interpretation; Stage 4 prompts the system as a dialogic challenger for alternatives and discriminating observations; Stage 5 requires claim-level acceptance, revision, rejection, or suspension tied to recorded evidence; Stage 6 produces a best-supported explanation plus an epistemic account of who contributed what. Stages 4 and 5 form a recursive loop that can send learners back to the site or their records. The design extends rather than replaces Novelty Space and retains the temporal logic of [[experiential-learning|experiential learning]] and [[inquiry-based-learning|inquiry cycles]], while making the dependencies explicit: initial interpretation must precede generated alternatives, and adjudication must follow them. Five design principles and seven boundary conditions mark where the model is not expected to hold.

## Evidence as the constraint, and the validation agenda

Field evidence functions as an epistemic constraint that applies equally to learner-, peer-, teacher-, and AI-generated explanations; fact-checking against external sources is not equivalent to adjudication, because a textbook-correct statement can still fail to explain the present outcrop. Six propositions translate the design into comparisons — field-first versus AI-first, interpretation-before-AI versus no baseline, challenger versus answer prompts, claim-level adjudication versus general verification, mediating versus substitutive use, and orchestrated versus unstructured use — each with indicators and disconfirmation conditions. The proposed instruments (observation specificity, field-evidence use, AI anchoring, epistemic agency, adjudication quality, epistemic accounting) require validation, and the agenda combines controlled comparisons with [[design-based-research|design-based research]], discourse analysis, and longitudinal [[teacher-education]] work. Because a polished report can conceal copying while a less fluent one may show strong evidence use and justified uncertainty, the model aligns [[assessment]] with reasoning pathways rather than final artifacts — an argument for [[process-oriented-assessment|process-oriented assessment]].

## What this means for practice

- **Instructors.** Sequence GenAI after observation and a recorded initial interpretation, and treat that ordering as an instructional condition you set, not a default the tool decides.
- **Instructors.** Constrain prompts to alternatives, counterquestions, and discriminating observations, and reframe any definitive answer the system supplies as a candidate claim to be checked.
- **Instructors.** Ask "which observation made you accept that?" in the moment, require claim-level decisions linked to recorded evidence, and do not accept the model's own self-check as independent verification.
- **Curriculum designers.** Separate learner observations, initial interpretations, GenAI candidates, adjudication decisions, and final accounts in worksheets and interfaces, and design the closing task so learners must attribute contributions and state uncertainty.
- **Researchers.** Record model identity, version, and configuration as part of the treatment description, because system properties such as confident versus hedged language moderate the predicted effects.

## Limitations

- The article is theoretical: it is a Hypothesis and Theory contribution that proposes a model and does not provide evidence that the model improves learning.
- No learner data are reported. The illustrative episode at the Auraji pillow lava site is a thought experiment; its setting and time structure draw on earlier field teaching in which no GenAI was used, and the GenAI exchanges are composed for illustration.
- The propositions and the proposed indicators remain untested and require validation, including the intercoder-agreement target (κ ≥ .70) proposed for coding observation specificity and relevance.
- The synthesis was purposeful rather than systematic, so it integrates explanatory traditions and cannot estimate the prevalence or effectiveness of GenAI practices.
- The model may reflect geoscience-specific assumptions about evidence, spatial reasoning, and historical inference, and should not be generalized to other disciplines without examining how evidence functions there.
- GenAI systems change rapidly; the article notes that [[multimodal]] functions and reliable access to verified local datasets could alter the balance among support, mediation, and substitution.

## Citation

Choi, Y.-S. (2026). [Reconceptualizing outdoor geoscience learning for the generative AI era: a human-centered instructional model](https://doi.org/10.3389/feduc.2026.1963429). *Frontiers in Education, 11:1963429*.
