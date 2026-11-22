
title: "The TRAIL Instrument: Development and Validation of a Diagnostic Measure of Educator Trust and Readiness for Artificial Intelligence in Learning"
created: "2026-11-17T09:40:00-05:00"
updated: "2026-11-17T09:40:00-05:00"
type: article
authors: ["McGehee, N."]
published: "2026"
venue: "EdArXiv preprint"
source_url: https://osf.io/preprints/edarxiv/8xatr_v1/
doi: 10.35542/osf.io/8xatr_v1
evidence_context: educational
confidence: medium
pedagogy: [professional-training]
technology: [technology-acceptance-model, generative-ai]
assessment: [educational-measurement, assessment-validity, self-report-measures]
methods: [quantitative-research, mixed-methods-research]
institutions: [change-management]
foundations: [teacher-ai-competency]
ethics: [trust, trust-calibration]
research_method: [instrument development, survey, interviews]
level: [k 12]
audience: [administrators, researchers, faculty developers]
page_kind: [framework]
sources: ['raw/papers/mcgehee-trail-educator-trust-readiness-ai-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

> **Synthesis:** TRAIL is a 30-item instrument that measures ten conditions shaping whether educators take up [[generative-ai|generative AI]], built by operationalizing a prior meta-analytic synthesis and validated with 106 educators at a statewide virtual [[k-12|K-12]] school plus 13 interviews. The [[technology-acceptance-model|Technology Acceptance Model]] core, perceived usefulness, dominated every criterion: it was the only significant predictor of adoption intention, and each scale point was associated with nearly eightfold odds of being an active user. [[trust|Trust]] proved a separate condition with a narrow role, predicting co-creative "thought partner" use but not adoption itself, while self-efficacy predicted how deeply educators used AI rather than whether they started. Subjective norm predicted nothing, and the facilitating-conditions subscale measured general technology provision rather than the constraint that actually gated use, which was whether an educator's role contained tasks AI could perform. The evidence comes from one nonprofit organization, and its criteria are [[self-report-measures|self-reported]].

## Key Findings

- **Perceived usefulness carried every criterion.** It was the only significant predictor of adoption intention, and each scale point raised the odds of being an active user nearly eightfold.
- **Trust does a specific job.** Separable from usefulness and highly reliable, it uniquely predicted higher-order "thought partner" use — co-creating [[rubrics|rubrics]] or plans — and added nothing to whether educators adopted at all.
- **Self-efficacy governs depth, not onset.** It correlated strongly with every criterion, yet its unique effect survived only for the depth of use and vanished for adoption intention once the other conditions entered.
- **Subjective norm predicted nothing.** No association with any criterion (all |r| ≤ .11), and the null held after correction for attenuation, whose largest disattenuated value was .165.
- **Facilitating conditions measured the wrong facet.** The subscale detected a real support gap between full-time and part-time educators but no adoption: no item asked whether AI tools were sanctioned or whether the role contained AI-suited tasks.
- **Task architecture tracked use better than support did.** Educators who also taught elsewhere scored 2.84 and 2.77 on the two use-case composites against 2.07 and 1.95 for site-only colleagues.
- **Three subscales are provisional.** Subjective Norm, Disruptiveness, and Facilitating Conditions fell below the reliability criterion under the full structural model even though all three cleared it in per-construct models.

## Thirty items, ten conditions, two kinds of use

The construct set descends from the [[technology-acceptance-model|Technology Acceptance Model]] and keeps its classical core — perceived usefulness, perceived ease of use, [[self-efficacy]], subjective norm, and facilitating conditions — then adds five conditions the acceptance literature lacks: trust in AI, ethical concerns, anxiety, cost and investment, and disruptiveness. Each is measured by three items on a five-point agreement scale, short enough for a school to administer but thin for a ten-factor [[educational-measurement|measurement]] model.

Two design decisions matter for anyone who adopts it. Disruptiveness records the perceived magnitude of instructional change without valence, so a teacher can score high and adopt enthusiastically. And the behavioral criterion is an eight-item use-case taxonomy organized by cognitive delegation depth rather than by task: lower-order use has AI execute a specified task, higher-order use has it participate in instructional reasoning. Sites are told to substitute locally meaningful tasks into each stratum, which is the instrument's answer to the problem that a teacher delivering a centrally built course does not own the authoring work that AI performs best.

## What survived validation

Reliability and structure are reasonable for a first [[assessment-validity|validation]] but not clean. Seven of ten subscales cleared the .70 alpha criterion, and all ten reached omega between .752 and .947, with average variance extracted above .50. The ten-factor confirmatory model fit on two of four indices: χ²/df = 1.61 and RMSEA = .076, 90% CI [.065, .088], against CFI = .866, TLI = .838, and SRMR = .095. All 45 subscale pairs cleared discriminant validity on point estimates; two bootstrapped intervals crossed the .85 threshold.

The criterion hierarchy is the more useful contribution. Every model was evaluated by repeated 10-fold cross-validation rather than in-sample fit, and two criteria survived well enough for applied use: active-user status (AUC = .750, rising to .794 with three structural indicators) and adoption intention (R² = .451). Frequency of educational use landed at .262 and the two use-case composites at .345 and .320, which the author classifies as descriptive and developmental rather than decision-grade. A compact three-condition model using only usefulness, self-efficacy, and trust outperformed all ten conditions on every criterion.

## Trust earns its place, narrowly

Because the instrument is named for [[trust]], the author tests directly whether trust adds anything beyond usefulness. The answer is yes for one outcome. Trust predicts higher-order use after lower-order use is controlled (β = .151, p = .025), and still does with usefulness and self-efficacy added (β = .144); the reverse test fails, since trust adds nothing to lower-order use once higher-order use is in the model (β = .038, p = .582). Entered after the classical conditions, trust improves prediction of higher-order use only (ΔR² = .028, p = .029).

Its effect on adoption intention is routed entirely through usefulness (indirect = .335, 95% CI [.199, .480]; direct effect −.001), which produces a suppression effect worth knowing about: in the binary model trust carries a negative coefficient (OR = 0.38), because trust unaccompanied by a use case predicts lower odds. That is a [[trust-calibration|calibration]] signal rather than a paradox. Trust was also moderately predictable from the other conditions (R² = .403), with [[teacher-ai-competency|confidence in using AI]] entering negatively (β = −.31): more confident educators trusted the output less.

## Why the support conditions told us nothing

Two of the three facilitating-conditions items are close to meaningless here. Connectivity is a condition of employment, so the access item sat at a ceiling (M = 4.14, λ = .36); technical support is infrastructure the organization maintains anyway, so it registered general satisfaction (M = 2.96, λ = .60). Training adequacy carried the construct almost alone (M = 3.23, λ = .98). The subscale therefore measured general [[professional-training|professional learning]] provision, registering a real full-time/part-time support gap (d = 0.96) but no relation to adoption (all |r| ≤ .08).

What interviews called binding is absent from the items: sanctioned tools, clear acceptable-use guidance — raised by 9 of 13 informants including all four leaders — and above all whether the respondent's work contained tasks AI could do. The second-setting comparison is the cleanest evidence for that point, holding the person constant while varying the task architecture. Career stage sharpened it further: active use ran 63%, 88%, and 52% across early, mid, and late career (H = 13.44, p = .001, η² = .111) while trust rose monotonically, so the most trusting educators were among the least adopting.

## What this means for practice

- **Administrators.** Diagnose before buying. A high-support, low-use profile is a [[change-management|conversion]] problem, and another training initiative will not move it; a low-usefulness profile does call for role-specific demonstrations of time saved.
- **Administrators.** Separate provision from conversion in your own data. Full-time educators here reported substantially more support and no more use, which is what an investment problem and a conversion problem look like when they are measured apart.
- **Faculty developers.** Build use cases around tasks staff actually own, and check whether a centrally built curriculum has left teachers with authoring work to delegate in the first place.
- **Researchers.** Report the task architecture of any sample you survey on AI adoption, since fixed use-case items may be measuring role structure rather than readiness.

## Limitations

- Validation rests on one organization in one state, N = 106, surveyed by self-report; the author states the score distributions are reference values, not norms.
- The sample is 72.6% part-time and heavily experienced (M = 24.03 years), so it cannot characterize early-career response and is not representative of the K-12 workforce.
- Exploratory and confirmatory factor analyses ran on the same 106 cases, with a parameter-to-observation ratio near 1.1:1; the fit is consistent with the specified structure rather than a strong confirmation of it.
- Every criterion is [[self-report-measures|self-reported]], so adoption means perceived rather than observed use, and common-method variance remains a live concern despite a Harman test at 28.7%.
- The author was employed at the validation site, and the study was approved under internal research protocols rather than an IRB; measurement invariance across roles was argued from interview construal, not tested.
- The diagnostic profiles and the mid-career adoption peak were identified in this sample, and the peak was found after an initial banding returned null results.

## Citation

McGehee, N. (2026). [*The TRAIL Instrument: Development and Validation of a Diagnostic Measure of Educator Trust and Readiness for Artificial Intelligence in Learning*](https://osf.io/preprints/edarxiv/8xatr_v1/). EdArXiv preprint. https://doi.org/10.35542/osf.io/8xatr_v1
