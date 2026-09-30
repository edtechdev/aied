---
title: "A Capability–Decision Model of teacher readiness for AI integration in teaching"
created: "2026-09-30T14:20:00-04:00"
updated: "2026-09-30T14:20:00-04:00"
type: article
sources: ['raw/papers/10.3389_feduc.2026.1897632.md']
confidence: high
published: "2026"
page_kind: [framework]
research_method: [position paper]
level: [teacher education, k 12]
audience: [instructors, faculty developers, administrators, policymakers, researchers]
foundations: [tpack, teacher-ai-competency, teacher-role, theories-and-frameworks, theory-development-aied]
pedagogy: [social-norms-ai-use, self-efficacy, professional-training]
technology: [generative-ai, technology-acceptance-model, prompt-engineering, llm]
assessment: [evaluative-judgment, self-report-measures, assessment-validity]
methods: [quantitative-research, research-methods-aied, mixed-methods-research]
institutions: [educational-policy-ai, governance, change-management]
ethics: [digital-divide, equity-in-ai-education, global-south, ethics]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Mnguni presents the Capability–Decision Model for AI Integration Readiness (CDM-AIR), a conceptual contribution with no data of its own. The paper argues that studies which bolt [[tpack|TPACK]] and belief-based adoption frameworks together as parallel predictors suffer construct overlap, ambiguous causal ordering and weak intervention guidance, then proposes an ordered alternative: AI-TPACK capability sits upstream and informs attitude and perceived behavioral control, while the Theory of Planned Behavior supplies the proximal decision pathway to intention and behavior. Contextual facilitating conditions enter as antecedents of [[social-norms-ai-use|subjective norm]] and perceived behavioral control and as moderators of the control–behavior link. The model specifies thirteen hypotheses in five [[parents-and-families|families]], states boundary conditions on AI co-agency, and declares the empirical patterns that would disconfirm it; its most important qualification is that it has not yet been tested.

## Key Findings

1. **The diagnosis is construct overlap.** When TPACK is measured by [[self-report-measures|self-report]] and perceived behavioral control is measured as efficacy or control belief, both may capture generalized confidence rather than distinct constructs (Scherer et al., 2018; Bandura, 1997).
2. **Causal ordering is left undecided in additive models.** Capability plausibly shapes attitude and control beliefs, but an additive specification cannot adjudicate whether perceived ability informs attitude, attitude inflates self-rated competence, or both reflect common-method halo.
3. **The interventionist consequence is the sharpest.** When TPACK, attitude and control all significantly predict intention, a ministry or program has no basis for ranking training, awareness campaigns or infrastructure, or for predicting which lever moves enacted practice.
4. **The proposed architecture orders capability upstream.** AI-TPACK capability predicts perceived behavioral control (H6) and attitude (H7), which with subjective norm (H2) predict intention (H1, H3), which predicts behavior (H4); capability moderates the intention–behavior path (H12).
5. **Context is structural, not background.** Facilitating conditions predict subjective norm (H8) and perceived behavioral control (H9) and moderate the control–behavior link (H13); they are modeled as antecedent and boundary condition rather than as a parallel covariate.
6. **The paper commits to being falsifiable.** Four disconfirmation conditions are named — mediation failure, discriminant collapse, moderation nullity and context redundancy — and reporting against them, not per-path significance, is what the author says would let the model accumulate evidence.

## The three limitations the model answers

CDM-AIR is built against a recurring pattern in the literature: studies that combine TPACK-family knowledge constructs with belief-based adoption frameworks such as the Theory of Planned Behavior, the [[technology-acceptance-model|Technology Acceptance Model]] or UTAUT, specifying them as concurrent predictors within a single layer. The author reads representative examples (Joo et al., 2018; Wangdi et al., 2023; Al-Abdullatif, 2024; Runge et al., 2025) as evidence that three problems recur.

First, construct overlap: when [[tpack|TPACK]] is self-reported and perceived behavioral control is measured as [[self-efficacy]] or control belief, the two may both index general confidence. Second, causal ambiguity: additive specifications cannot tell whether perceived ability informs attitude or attitude inflates competence ratings. Third, and most consequential for practice, undifferentiated models leave interventionists without a target, which the author argues matters most in resource-constrained systems where misallocated investment carries high opportunity costs.

The evidence is inherited, not generated: it cites a [[mixed-methods-research|mixed-methods]] study of 325 in-service teachers across 26 countries in which [[pedagogy|pedagogical]] knowledge mediates the conversion of technical knowledge into generative-[[ai-literacy|AI competence]] (Mohebi and ElSayary, 2026), and comparative work in which intention correlated with subjective norm at ρ = .144 and perceived behavioral control at ρ = .149 but with behavioral beliefs at ρ = .331 (Mnguni et al., 2024b). Those studies motivate the model; they do not test it.

## How CDM-AIR is ordered

The model's two constitutive claims are the separation of capability from decision beliefs and the treatment of context as a structural antecedent of norms and control and as a boundary condition on enactment. AI-TPACK capability is defined as a second-order latent system covering AI-adapted technological knowledge, integrated pedagogical-content design knowledge, and [[evaluative-judgment|evaluative judgment]] about AI outputs, including [[prompt-engineering|prompt construction]], output interpretation and reliability checking. It does not replace the competing internal structures of AI-TPACK (Celik, 2023; Ning et al., 2024; Demir et al., 2026); the author states the model is agnostic among them and requires only that capability be conceptualized as competence and ordered upstream of beliefs.

Contextual facilitating conditions are deliberately layered, drawing on the [[digital-divide|digital divide]] literature (van Dijk, 2020), policy enactment scholarship (Ball et al., 2012) and professional capital (Hargreaves and Fullan, 2012), so that material affordances and institutional, policy and cultural systems are modeled together. The model declares one boundary condition plainly: it assumes the [[teacher-role|teacher]] remains the accountable decision-maker about whether and how [[generative-ai|AI]] enters practice. Should classroom AI become autonomous enough to adopt teachers rather than the reverse, the author concedes the Theory of Planned Behavior decision core would need replacement rather than extension.

## Measurement and falsifiability

Because the model rests on separating capability from belief, the paper's most concrete contribution is measurement guidance. Capability should not rely on self-report alone; four indicator types are proposed — lesson-design tasks, prompt-evaluation tasks seeded with errors, content-validity judgments, and classroom artifact rubrics. A worked exemplar asks a teacher to design a 40-minute Grade 10 [[biology-education|biology]] lesson segment on enzyme activity with AI-generated differentiated feedback, scored 0–3 on pedagogical alignment, justification quality and verification with ethical safeguards. Piloting such tasks takes roughly 30–40 minutes; the author recommends double-scoring a random 20% until inter-rater agreement reaches at least κ = .70.

Discriminant validity between capability and perceived behavioral control is to be judged against criteria fixed in advance: a heterotrait–monotrait ratio below .85 (Henseler et al., 2015), Fornell–Larcker comparison, and a nested-model test constraining the capability–control correlation to unity. Failure on these counts is framed as evidence against the model, not as a measurement inconvenience. The testing strategy is explicitly staged: a full structural model with two latent interactions typically needs N ≥ 400, while a study of N ≈ 250 might test the capability-to-belief bridge, the TPB core and the capability-by-intention interaction, deferring the context hypotheses to a later, adequately powered study.

## What this means for practice

- **Instructors and faculty developers.** Treat AI readiness as pedagogical capability, not tool familiarity: the worked exemplar scores whether AI use is integral to the stated learning outcome, whether the justification explains why AI beats a non-AI alternative, and whether a concrete verification routine and safeguard are present.
- **Program designers.** Measure whether the targeted mediator moved. CDM-AIR predicts that genuine capability gains show up in perceived control and attitude before they show up in intention, so post-workshop willingness is a weak evaluation criterion.
- **[[educational-development|Professional development]] leads.** Put support at the point of translation. The model predicts that intention converts to practice at a rate conditioned by capability, which favors clinically embedded coaching and co-planning during first enactment over advance-only workshops.
- **School leaders and policymakers.** Treat policy clarity, data-protection protocols and infrastructure as constitutive of readiness rather than background to it; the model predicts that confidence-building without affordances yields intention without enactment.
- **Researchers.** Use the four disconfirmation conditions as the reporting frame, and fix discriminant-validity criteria before estimation rather than inspecting them post hoc.

## Limitations

- The model has not been empirically validated; the author states that its structural plausibility still requires testing against the disconfirmation conditions, and the paper presents no data of its own.
- Causal ordering remains theoretical. Until longitudinal or quasi-experimental designs separate capability, belief, intention and behavior, the upstream placement of AI-TPACK is an argument rather than a finding.
- The model deliberately brackets AI co-agency, so it explains teachers' adoption decisions and their enactment but not the distribution of agency during human–AI instruction — a boundary the author expects to narrow as classroom AI grows more autonomous.
- Scope exclusions are acknowledged: the model is silent on student-level outcomes, may need adaptation across school phases, subjects and national policy contexts, and does not yet incorporate teacher [[anxiety-and-stress|anxiety]] about job displacement, trust or professional identity.

## Citation

Mnguni, L. (2026). [A Capability–Decision Model of teacher readiness for AI integration in teaching](https://doi.org/10.3389/feduc.2026.1897632). *Frontiers in Education*, 11, 1897632.