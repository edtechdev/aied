---
title: "How much selection would be enough? Bounding the learning claim of El Salvador's artificial intelligence tutoring pilot"
type: article
created: "2026-09-17T09:40:00-04:00"
updated: "2026-09-19T11:14:39-04:00"
technology: [intelligent-tutoring]
assessment: [assessment-validity, educational-measurement]
ethics: [equity-in-ai-education, global-south]
sources: ['raw/papers/el-salvador-ai-tutoring-selection-claim-2026.md']
confidence: high
research_method: [secondary analysis, quantitative]
level: [secondary]
audience: [policymakers, researchers, assessment professionals]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
institutions: [educational-policy-ai]
---

> **Synthesis:** When the World Bank reported in September 2026 that students in 171 Salvadoran public schools using AI tutors scored at levels comparable to Germany and Sweden, the authors of this paper declined the obvious question — does the tutor work? — and asked a prior one: how much student selection would be needed to produce that result with *no* learning at all. Working only from published PISA 2025 figures, they identify the dispersion of the Salvadoran achievement distribution from the mean and the level-2 share, then compute the top fraction of that distribution whose mean equals the [[benchmark]]: 5.5% in [[math-education|mathematics]], 11.7% in science and 17.2% in reading against the German averages. Because the pilot assessment tested 7.0 students per school against 25.4 in the national survey, that much selection is not implausible, and the published evidence therefore cannot distinguish a genuine effect from a selected sample. The paper's constructive contribution is a six-item reporting standard — baseline, sampling protocol, disaggregated scores, component exposure, overlap with the representative survey, and the qualification in the same unit as the claim — for the growing practice of using school-level [[assessment-validity|assessment]] as system-level [[educational-policy-ai|policy evidence]].

## Key Findings

1. Against the German PISA 2022 mathematics average of 475, the upper 5.5% of the Salvadoran achievement distribution has a mean of 475 with a learning gain of exactly zero; against reading the required selection is 17.16% and against science 11.73%, and against the slightly higher Swedish averages 4.22%, 14.43% and 10.99%.
2. The claim taken at face value implies a mathematics gain of 129 points — 1.29 international standard deviations, 2.02 standard deviations of the Salvadoran distribution itself, and about 6.5 years of schooling in one year — roughly 3.5 times the largest effect documented for technology-aided [[adaptive-learning|adaptive instruction]] in a middle-income country (Mindspark, India: 0.37 SD) and about twice the largest median any [[meta-analysis-systematic-review|meta-analysis]] of [[intelligent-tutoring|intelligent tutoring]] has reported (0.66 SD, Kulik & Fletcher).
3. The frontier of observationally equivalent explanations runs from a fully representative assessed group (implying the full 129-point gain) through the top half (78.1 points, 0.78 SD, 3.9 years), the top quarter (47.9 points, 0.48 SD, 2.4 years) and the top 15% (29.9 points, 0.30 SD — "at the upper end of what the intervention literature has documented but no longer outside it") down to 5.50%, where the implied gain reaches zero.
4. The pilot evaluation assessed 1,198 students across 171 schools, or 7.0 per school, against 7,073 students across 278 schools (25.4 per school) in the national PISA 2025 sample — a ratio of 3.6 to 1, and roughly a quarter of what a PISA-standard [[administrator|administration]] of 42 eligible students per school would have covered.
5. The national distribution can be recovered from two published numbers: with mean 346 and 12.28% of students at or above the level-2 cut score of 420.07 in mathematics, the implied standard deviation is 63.8 (reading 76.8, science 63.8) — well below the international standard deviation of 100, as expected for a system pressed against the floor of the scale.
6. Robustness checks move the required selection in mathematics but never close the gap: 6.32% and 7.19% under right skew, 6.20% to 10.11% under heavier-tailed Student distributions, 1.49% to 11.56% for a ±20% error in the identified standard deviation, and 6.14% or 12.13% under weaker readings of "comparable" (OECD average, OECD average minus 20 points).
7. If the 171 pilot schools were themselves above the national mean — by one year of schooling, 20 points — the required *student-level* selection rises to 11.0%, and to 5.3% once 30% of the variance is allowed to lie between schools; across every combination examined the required selection stays between 2.0% and 20.2%, inside the range voluntary participation can produce.
8. The OECD's PISA 2025 release four days later showed Salvadoran means in mathematics and reading practically unchanged from 2022, science up about 12 points, level-2 shares of 12%, 29% and 35% against OECD averages of 65%, 69% and 74%, and 0.2% of students reaching levels 5 or 6 — so a group matching the German mean would have to be drawn from a nationally near-empty tail.
9. Six items would let a reader separate the observationally equivalent states: the participating schools' baseline, the sampling protocol (eligible students, assessed students, identification rule, participation rate), disaggregated scores with standard errors, the operational date of each reform component, the overlap with the national survey sample, and the qualification in the same document, post or paragraph as the claim.
10. The disclosure asymmetry is measurable: the World Bank post carrying the claim recorded about 441,000 views against about 11,000 for the post carrying the qualification four places later in the same thread, and the President's quotation of the first post about 517,000 — evidence, the authors argue, that a qualification placed in a separate unit of communication does not travel with the claim it qualifies.

## What Was Announced, and What Is Documented

The claim and the program are different objects, and the paper's argument concerns the inference between them. The program is a bundled education modernisation reform: structured [[pedagogy]] with class-by-class scripts, coaching for [[teacher-role|teachers]] and school directors, new materials, remedial programs, devices, connectivity and a digital platform including an AI tutor aligned to the national [[curriculum-design|curriculum]]. The claim is a statement about one group of students on one instrument on one occasion — the PISA-based Test for Schools, administered in June 2026 to 1,198 volunteer students in 171 schools, four posts before the World Bank thread's qualification that the results do not yet correspond to the whole education system.

Four documented elements are not in dispute: the instrument was PISA for Schools rather than the national PISA survey; the students were volunteers (the World Bank's own word); the figures of 171 schools and 1,198 assessed students come from the Government and the press rather than the Bank; and the baseline performance of the 171 schools has never been published. The last point is the one that makes the paper's bounding exercise necessary — a baseline would settle the question directly.

The chronology sharpens the attribution problem beyond recovery. The xAI agreement bringing a Grok-based tutoring system to more than 5,000 schools was announced on 11 December 2025, while the pilot had been running since about mid-2025 and the assessment was applied in June 2026, so the tutor was present for at most half the period the evaluation covers; the USD 501 million AprendES financing was approved on 31 March 2026, about ten weeks before the assessment. The components present throughout were the conventional ones.

## The Method: Bounding Selection Before Testing Effects

Rather than attempt attribution under assumptions, the authors import the partial-identification tradition (Manski; Lee; Horowitz & Manski) into [[ai-ed-evaluation|evaluation]] practice. Because PISA publishes both a system mean and the share of students reaching level 2, and level 2 is a fixed cut score, the two figures jointly identify the standard deviation of the achievement distribution under a distributional assumption; the required selection is then the upper-tail fraction whose mean — given by the inverse Mills ratio — equals the benchmark. Identification uses no microdata, and the level-2 share is reported for every participant and underpins the SDG 4.1.1 indicator.

Two design choices are conservative in the program's favor. Using the PISA 2025 distribution as the reference rather than 2022 embeds any genuine effect of the reform already in the baseline (with the 2022 mean of 343, the required selection is 5.95% rather than 5.50%), and reading "comparable" as equality with the German and Swedish means is the most demanding interpretation available — every weaker reading makes the selection explanation easier.

## Results: 5.5%, 11.7% and 17.2% — and the Frontier

The headline answer is that the required selection is modest and smaller than the authors expected when they began. In mathematics, the top 5.5% of Salvadoran 15-year-olds has a mean equal to the German average of 475 — a cut score of 447.9 points, 1.60 standard deviations above the national mean — with no learning gain at all. The subject differences are informative: reading needs roughly three times the selection that mathematics does because reading has both a higher national mean and a wider identified distribution, which means a single selection rule could not produce results equally "comparable to Germany" across subjects, a prediction the release of disaggregated scores would confirm or refute.

Because selection and learning are not exclusive, the paper reports the whole frontier instead of a point. A genuine effect at the top of the historical distribution — about 0.30 standard deviations, combined with the roughly 15% selection voluntary participation routinely produces — reproduces the announced result exactly. That is the honest summary: the announcement is compatible with a program effect of zero and with a very large but not unprecedented one, and no further analysis of the published information can separate the two.

## Robustness and the Instrument That Was Repurposed

The parametric commitment to normality is tested in the direction that matters for a claim living in the upper tail. Right skewness raises the required selection modestly (5.46% at zero skew to 7.19% at a shape parameter of 1.5), and heavier tails raise it more (10.11% at five degrees of freedom, heavier than any achievement distribution the authors are aware of) — in both cases making the selection explanation *easier*, not harder. The widest sensitivity range comes from the identified standard deviation itself: 1.49% at −20% and 11.56% at +20%. Only at the very low end would selection have to be a strong filter, and even then the frontier remains the relevant object.

The comparison also rests on an instrument used outside its design. PISA for Schools produces estimates for a school, not for a system, and is not administered under the national sampling frame with its response-rate standards, exclusion limits and weighting. A comparison between a school-level estimate and a country mean carries at least three unreported sources of uncertainty — the school-level sampling error, the country-mean sampling error and the linking error of the scale equating — which is the classic [[assessment-validity|validity]] distinction between a test and the inference drawn from its scores. Voluntary participation at the individual level is a well-understood source of upward bias, and in an assessment administered in schools whose administrators know the results will evaluate a flagship program, the direction of the bias is not ambiguous even if its magnitude is.

## The scaling question

The program has already expanded from 171 schools to more than 1,000, with the stated intention of reaching every public school in about 18 months and an xAI deployment covering more than 5,000 schools and a million students. The scaling literature the paper cites predicts decay: the Kenyan program that produced substantial gains under NGO implementation produced no detectable gain at government scale (Bold et al.), and effect sizes tend to fall as programs grow (Vivalt) for reasons that include site selection, population selection and dilution of implementation quality — all three of which the paper sees in this case. For Latin America the precedent is the Peruvian One Laptop per Child program, 800,000 laptops and no detectable effect on mathematics or reading: access is not instruction, and the components most likely to be producing any real gain are the structured pedagogy and coaching the headline did not mention. The risk, the authors write, is not adopting a technology that does not work but learning the wrong lesson from a reform that does.

## What this means for practice

- **Policymakers.** Publish the six items alongside any headline result, in the same document, post or paragraph as the claim: the participating schools' baseline, the sampling protocol (eligible students, assessed students, identification rule, participation rate), disaggregated scores with standard errors, the operational date of each reform component, and the overlap with the national survey sample — the qualification placed four posts later in the same thread drew about 11,000 views against about 441,000 for the claim.
- **Policymakers.** Design the evaluation before the rollout, not after: a phased expansion is a staggered-adoption design that identifies the effect without withholding the program, and the step from 1,000 schools to the whole system has not happened yet.
- **Researchers.** Read a school-level instrument for what it estimates — PISA for Schools produces estimates for a school, not a system, and carries at least three unreported sources of uncertainty against a country mean (school-level sampling error, country-mean sampling error, and the linking error of the scale equating).
- **Assessment professionals.** Bound selection from published aggregates before accepting an announced gain: a mean of 346 with 12.28% of students at or above the level-2 cut score of 420.07 implies a standard deviation of 63.8, and the top 5.5% of that distribution has a mean equal to the German average with zero learning.

## Limitations

- The outcome is unobserved: no disaggregated pilot scores have been published, so "comparable to the averages of Sweden and Germany" was operationalized as equality with those countries' 2022 means (Germany 475, 480 and 492 in mathematics, reading and science), and any lower actual score makes every required-selection figure in the paper an overestimate.
- The distributional form is an assumption: the standard deviation is identified from a published mean and level-2 share under normality, and the robustness range for the required mathematics selection runs from 1.49% at a −20% error in the identified standard deviation to 11.56% at +20%.
- The analysis uses published aggregates with no microdata, and selection is treated as a single dimension — a simplification the authors flag in a system where 81.9% of students in the most disadvantaged quarter of the economic, social and cultural status index score below level 2 in science against 42.1% in the most advantaged quarter.
- The article does not evaluate the program: it is a secondary analysis of published figures, it makes no claim that the tutor is ineffective, and the baseline of the 171 participating schools — the one figure that would remove the need for the bound — has never been published.

## Connected Concepts

- [[educational-policy-ai]] — the claim-and-qualification episode as a policy-communication problem with a proposed reporting standard
- [[assessment-validity]] — school-level instrument used to license a system-level comparison
- [[educational-measurement]] — identifying dispersion from a mean and a proficiency share; effect-size denominators
- [[ai-ed-evaluation]] — bounding what the evidence can support before asking whether a program works
- [[intelligent-tutoring]] — effect-size benchmarks against which the claimed gain is measured
- [[equity-in-ai-education]] — voluntary participation as a socio-economically structured filter
- [[global-south]] — Latin American scaling history: access is not instruction
- [[research-methods-aied]] — partial identification, robustness across distributional assumptions
- [[quantitative-research]] — an explicitly numerical treatment of a policy announcement
- [[rct]] — the phased-rollout/staggered-adoption alternative the paper recommends
- [[learning-gains]] — the gain implied by the claim versus the documented distribution of effects
- [[meta-analysis-systematic-review]] — the pooled effect sizes used as benchmarks
- [[digital-divide]] — connectivity constraints that motivate a phased rollout
- [[stakeholders]] — governments, assessment agencies and banks whose credibility carries the claim
- [[governance]] — reporting accountability for program claims used as system evidence

## Connected Articles

- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[burneo-can-edtech-close-learning-gaps-2026]] — Can EdTech Close Learning Gaps? Global Evidence from Digital Interventions
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomized Trials
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual Tutoring with Computer-Assisted Learning: An Experiment in Take-Up and Learning
- [[ai-tutoring-quality-k12-methodologies-2026]] — Methodologies for Improving the Quality of AI Tutoring in K-12 Education
- [[evaluation-age-ai-output-evidence-2026]] — Evaluation in the Age of AI: Output as Evidence of Learning
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[stanford-evidence-base-ai-k12-2026]] — The Evidence Base on AI in K-12: A 2026 Review
- [[ai-assessment-scale-reform]] — 'A bit of chaos and madness': The AI Assessment Scale and the Work of Assessment Reform

## Citation

Restrepo Morales, J. A., Rodríguez Flores, E. A., Giraldo Betancur, E. A., & Zea Restrepo, F. (2026). [*How much selection would be enough? Bounding the learning claim of El Salvador's artificial intelligence tutoring pilot*](https://osf.io/6gj9u/). OSF Preprints.
