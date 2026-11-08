---
title: "Drivers and academic outcomes of generative AI use among university students in Benin"
created: "2026-11-08T09:30:00-05:00"
updated: "2026-11-08T09:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [survey]
evidence_context: educational
level: [higher ed]
audience: [instructors, administrators, researchers]
sources: ['raw/papers/gouroubera-genai-benin-2026.md']
source_url: "https://doi.org/10.1016/j.caeo.2026.100431"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-08"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [cognitive-offloading, academic-integrity, ai-literacy]
pedagogy: [motivation, self-regulated-learning]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [global-south, digital-divide]
---

> **Synthesis:** Gouroubera and colleagues (2026) ran a cross-sectional [[quantitative-research|survey]] of 633 students at eight universities in Benin and modeled the drivers and outcomes of [[generative-ai|generative AI]] use in one partial least squares model built on expectancy-value theory and [[technology-acceptance-model|UTAUT]]. Use was near-universal — 92.3% used GenAI for academic work at least twice a week — and the strongest driver was academic workload (β = 0.384, p < 0.001), not a belief about the tool: time pressure and [[motivation|motivational]] sensitivity to rewards or quality each added a small path, while age, gender and education added none. Heavier use went with better self-reported academic performance (β = 0.429) but also with more procrastination (β = 0.525), a [[self-regulated-learning|self-regulation]] cost, and more self-perceived memory decline (β = 0.415), which the authors read as [[cognitive-offloading|cognitive offloading]]; 81% were unaware or unsure whether AI text could count as plagiarism. The distinction that matters: the gain and both costs come from the same [[self-report-measures|self-report]] instrument at one time point, so the study documents an ambivalent experience of use, not a causal trade-off. It also shows first-level access saturating in a [[global-south|Global South]] system while [[digital-divide|second-level divides]] and [[ai-literacy|AI literacy]] went unmeasured — including the [[academic-integrity|integrity]] norm most students could not state.

## Key Findings

1. **GenAI use is close to universal.** Of 633 students, 92.3% used GenAI for academic work at least twice a week; 30.9% four times and 10.1% more than five times.
2. **Academic workload is the dominant driver.** Academic Workload → GenAI use was β = 0.384 (p < 0.001), against Time Pressure β = 0.129 (p = 0.015), Sensitivity to Quality β = 0.129 (p = 0.006) and Sensitivity to Rewards β = 0.112 (p = 0.040). The four drivers explain R² = 0.446 of the variance in use.
3. **The demographic gradient is absent.** Age (β = −0.024, p = 0.531), gender (β = 0.072, p = 0.268) and education (β = −0.029, p = 0.423) were non-significant, contrary to prior research.
4. **Use moves with perceived gain and cost at once.** Academic Performance β = 0.429 (f² = 0.225), Procrastination β = 0.525 (f² = 0.380) and Self-Perceived Memory Decline β = 0.415 (f² = 0.208), all p < 0.001. Procrastination is the largest path.
5. **Workload's path to outcomes runs through use.** Indirect effects were 0.165 for Academic Performance, 0.160 for Self-Perceived Memory Decline and 0.203 for Procrastination, all p < 0.001.
6. **Integrity awareness lags adoption.** 81% were unaware or unsure whether GenAI content could count as plagiarism, or how to cite it; 19% were aware.

## Why workload, not usefulness, is the strongest driver

The theoretical setup promises a motivational explanation. Expectancy-value theory supplies utility value, attainment value and perceived cost; UTAUT supplies performance expectancy, effort expectancy and facilitating conditions. Both predict that workload and deadlines push students toward the tool.

The estimates rank the constructs differently. The strongest path is a contextual pressure, Academic Workload at β = 0.384, while the two motivational sensitivities closest to attainment and utility value sit at the bottom of the block, at β = 0.112 and β = 0.129. The effect sizes disagree: Sensitivity to Rewards has the largest f² (0.209) with the smallest coefficient, and with VIF up to 2.768 the predictors share enough variance that their order should not be read finely. What survives is the gap between workload and everything else.

The authors read use as a coping response to limited institutional support and constrained educational infrastructure. The setting fits: support services and connectivity are uneven, while a phone-based tool needs no institutional provisioning. That also explains the null demographics — when pressure is general and the tool is free at the point of use, adoption stops sorting by age, gender or degree.

The implication cuts against acceptance research's reflex. If use followed perceived usefulness or effort expectancy, the lever would be awareness or interface design; here 92.3% already use the tool, and the condition producing use is the assignment load.

What the design cannot show is whether workload is cause or accounting: students who already delay may report heavier workload, and the construct is four items about feeling overloaded, not an audited count.

## A benefit and two costs, measured by the same instrument

The three outcomes are not measured to the same standard. Academic Performance is a single self-reported item on a six-point scale from 1 (significantly worsened) to 6 (significantly improved), a judgment of change with no grade or artifact behind it. Procrastination is four items adapted from Choi and Moran, and Self-Perceived Memory Decline is three. The β = 0.429 performance path therefore rests on one ordinal self-rating while both costs rest on multi-item scales.

That asymmetry shapes the headline. The triad is not a trade-off among commensurable outcomes: a heavy user who feels their work improved answers both the use items and the performance item from the same self-concept, so the association can come from consistency, felt fluency, or real improvement. The paper concedes that the design cannot establish that GenAI use caused these outcomes, but the abstract still frames a dual role — a stronger claim than one self-rating can carry.

Self-perceived memory decline has a related limit. It is a belief about memory, measured by items about forgetting and feeling as though one is losing one's memory. That is a real cost, but not a retention test, and the cognitive offloading literature's claims about durable learning rest on delayed unaided performance. Reading β = 0.415 as evidence that GenAI erodes memory overstates three Likert items.

Direction is unresolved too. The largest path is procrastination at β = 0.525 (f² = 0.380), which admits a reverse reading: students who delay use GenAI to compress work at the end. That is one of at least two stories consistent with the covariance.

## What saturation does to the equity story

The demographic result is easy to overread. Age, gender and education were non-significant where 92.3% used the tool at least twice a week, which the authors attribute to smartphones and mobile internet and read as adoption transcending traditional divides. Their own qualification is better: basic access may be equalizing, while second-level divides — data affordability, network reliability, digital literacy — decide whether access converts into benefit, and this study measured none.

That qualifies how this knowledge base usually tells the Global South story, which is mostly about constraint. It is bounded hard: 85.2% public universities, 62.4% agronomic and environmental sciences, 70.3% bachelor's, non-probability recruitment. The study describes eight institutions, not Beninese higher education.

The integrity number is more actionable. 81% of students were unaware or unsure that GenAI output could count as plagiarism, or how to cite it. Adoption outran the rule roughly four to one. Where use is near-universal and the norm is not understood, integrity is a literacy problem before it is a policing problem: detection would penalize a rule most students cannot state.

## What this means for practice

- **Redesign the demand, not the attitude.** If workload drives use, staggering deadlines and staging large assignments change the condition that produces last-minute AI use. A workshop for students who already use the tool weekly has little room to move.
- **Grade process artifacts, not only products.** Because the performance outcome is a self-rating, add one task the student cannot self-assess: an unaided exercise, a short oral defense, or a graded revision log.
- **Teach the citation rule as a rule.** Give students the concrete form — what must be disclosed, how AI assistance is cited in this course, what counts as unacceptable — and test it on examples. The 81% is a norm that was never made operational for them.
- **Read perceived improvement as experience, not achievement.** Label the performance result as self-reported perceived change, and pair it with an outcome measure from a different source.
- **For administrators in low-resource systems, treat GenAI as coping infrastructure.** Prohibition without workload relief relocates use rather than removing it, and access quality — data cost, connectivity, device capability — needs measuring separately from access itself.

## Limitations

- **Cross-sectional and single-wave, with no control group.** Every path, including the mediation paths, is a covariance at one time point; the authors state the design supports association, not causation.
- **Convenience sampling, one country, eight institutions.** 633 of 645 responses were retained and no response rate is reported. 85.2% public, 62.4% agronomic, 70.3% bachelor's, 6.6% doctoral: the null for education level rests mostly on a bachelor's-versus-master's contrast.
- **Every construct is self-report.** Academic Performance is one perceived-change rating, Self-Perceived Memory Decline is perceptual, and no common-method test is reported.
- **Measurement is marginal at two points.** Three of eight GenAI items were dropped for loadings between 0.593 and 0.696, and the GenAI AVE is 0.521 against a 0.50 threshold. The HTMT between Academic Workload and Time Pressure is 0.848 against a 0.85 ceiling, so discriminant validity is weakest between the two strongest drivers.
- **Two mediation decisions do not match their intervals.** Sensitivity to Rewards → GenAI use → Academic Performance is 0.048 with a 95% CI of [−0.001; 0.094] and p = 0.044, and the procrastination path is 0.059 with [−0.001; 0.117] and p = 0.045; both are marked Accepted although the intervals include zero.
- **Explanatory power is modest and the power claim is circular.** R² runs from 0.172 to 0.446, leaving most outcome variance unexplained, and the post hoc calculation used the observed f² = 0.79 to return power of approximately 1.00 — which the authors acknowledge is descriptive rather than confirmation of adequacy.

## Citation

Gouroubera, M. W., Dosso, F., Segnon, A. C., Idrissou, L., Moumouni-Moussa, I., & Zougmoré, R. B. (2026). [*Drivers and academic outcomes of generative AI use among university students in Benin*](https://doi.org/10.1016/j.caeo.2026.100431). *Computers and Education Open, 11*, 100431.
