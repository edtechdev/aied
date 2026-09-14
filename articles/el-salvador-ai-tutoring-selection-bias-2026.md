---
title: "How much selection would be enough? Bounding the learning claim of El Salvador's artificial intelligence tutoring pilot"
created: "2026-09-14T09:12:54-04:00"
updated: "2026-09-14T09:12:54-04:00"
type: article
tags: [educational-policy-ai, assessment-validity, learning-gains, bias-mitigation, quantitative-research, educational-measurement, intelligent-tutoring, global-south]
sources: ['raw/papers/el-salvador-ai-tutoring-selection-bias-2026.md']
confidence: high
---

> **Synthesis:** Restrepo Morales and colleagues convert a contested policy headline into a bounding problem in [[educational-measurement]], asking how much student selection would suffice to reproduce El Salvador's reported AI-tutoring results if the programme had produced no [[learning-gains]] at all. Using only two published PISA 2025 figures — the national mean and the share of students at Level 2 — they recover the dispersion of the Salvadoran achievement distribution and find that the top 5.50% of it equals the German [[math-education|mathematics]] average with zero gain, a modest filter that voluntary participation can plausibly produce. Taken at face value the claim implies 1.29 international standard deviations, or about 6.5 years of schooling in one year, roughly 3.5 times the largest [[intelligent-tutoring]]-adjacent effect documented in a middle income country. Because the pilot drew 7.0 students per school against 25.4 in the national survey and published no baseline, the design leaves selection and genuine learning observationally equivalent — an [[assessment-validity]] failure of inference rather than of the technology. The authors close with a six-item reporting standard for school-level assessments used as system evidence, and with the warning that a qualification placed four posts away from the claim it qualifies does not travel with it.

## Key Findings

1. To reproduce the German mathematics average of 475 points with a learning gain of exactly zero, the assessed group would have to be the top 5.50% of the Salvadoran distribution; the corresponding fractions are 17.16% in reading and 11.73% in science, and 4.22%, 14.43% and 10.99% against the Swedish means.
2. The claim taken at face value implies a gain of 129 PISA points in mathematics against Germany, which is 1.29 international standard deviations, 2.02 standard deviations of the Salvadoran distribution itself, and about 6.45 years of schooling at the OECD convention of 20 points per year.
3. The mean and the Level 2 share identify the standard deviation: 63.78 in mathematics (mean 346.00, 12.28% at Level 2 or above), 76.85 in reading (mean 366.00, 29.47%) and 63.76 in science (mean 385.00, 35.02%), against the Level 2 cut scores of 420.07, 407.47 and 409.54.
4. The pilot evaluation assessed 1,198 students in 171 schools, or 7.0 students per school, while the PISA 2025 national sample assessed 7,073 students in 278 schools, or 25.4 per school — 3.6 times fewer per school than the national survey, against a PISA within-school standard of 42 eligible students.
5. The frontier of observationally equivalent pairs shows that a fully representative assessed group implies the full 129-point gain, the top half implies 78.11 points (0.78 SD), the top quarter 47.92 points (0.48 SD), and the top 15% only 29.86 points (0.30 SD), which sits at the upper edge of the documented literature.
6. Robustness checks keep the conclusion intact: skewness raises the required selection from 5.46% under normality to 7.19% at a shape parameter of 1.5; a scaled Student distribution with 5 degrees of freedom raises it to 10.11%; varying the identified standard deviation by plus or minus 20% moves it between 1.49% and 11.56%; and the weakest defensible [[benchmark]] (OECD average minus 20 points) requires 12.13%.
7. Only 0.2% of Salvadoran 15-year-olds reach Level 5 or 6 in science, reading or mathematics, so a group whose mean matched the German average would have to come from a nationally near-empty tail; 81.9% of students in the most disadvantaged quarter of the ESCS index score below Level 2 in science against 42.1% in the most advantaged quarter.
8. The xAI agreement to deploy Grok-based tutoring was announced on 11 December 2025, roughly six months into a twelve-month pilot and about six months before the June 2026 assessment, so the component with the shortest exposure would have to carry an unmeasured share of the gain; the World Bank's USD 501 million AprendES programme was approved only on 31 March 2026.

## Method: Recovering a National Distribution from Two Published Figures

The exercise is deliberately prior to attribution. Rather than asking whether the artificial intelligence tutor caused the improvement, the authors ask how much selection of students would be needed to generate the announced result if the programme did nothing. This is a bounding question in the tradition of partial identification, and its virtue is that it can be answered with public data alone — no microdata, no technical report, no access to the unpublished assessment file. A bound of this kind cannot show that a programme failed; it can only show what the published evidence is able to support.

The step that makes the bound computable is small but consequential for [[educational-measurement]]. OECD publishes two figures for every participating system: the mean score and the share of students reaching proficiency Level 2 or above. Under a distributional assumption these two numbers jointly identify the dispersion, because the Level 2 cut score — 420.07 points in mathematics, 407.47 in reading, 409.54 in science — sits at a known distance from the mean once the tail share is known. For El Salvador's PISA 2025 results this yields standard deviations of 63.78, 76.85 and 63.76, all well below the international benchmark of 100. The required selection is then the upper-tail fraction whose mean equals the benchmark. Using the inverse Mills ratio for a normal variate, the authors solve numerically for the fraction q* that equates the selected mean to the German or Swedish average. The 2025 rather than 2022 reference distribution is used deliberately, since the 2025 survey ran after the pilot began and any genuine effect is already embedded in it, shrinking the gap selection must explain. The parametric commitment is checked rather than asserted: every calculation is repeated under a skew-normal and a scaled Student distribution, with location and scale calibrated so that the published mean and Level 2 share are matched at each parameter value.

## Evidence: How Little Selection Would Be Enough

The central result is that the selection required is modest. Against Germany's mathematics average, the upper 5.50% of the Salvadoran distribution has a mean equal to the benchmark with no learning whatsoever — a cut score of 447.93, or 1.60 standard deviations above the national mean. Against reading the figure is 17.16% and against science 11.73%. Reading requires roughly three times the mathematics selection because it has both a higher national mean and a wider identified distribution, placing the benchmark closer to the middle of the distribution. A single selection rule applied across subjects would therefore not produce equally "comparable to Germany" results.

Placing the claim against the impact evaluation literature sharpens the stakes. Kraft's median effect across causal studies of education interventions is about 0.10 standard deviations; intensive human tutoring pools at about 0.37; and the median intelligent tutoring system effect in Kulik and Fletcher's review is about 0.66, drawn mostly from short, closely supervised studies in high income settings. The largest effect ever documented for technology-aided [[adaptive-learning|adaptive instruction]] in a middle income country — Mindspark in Delhi — is 0.37 standard deviations over about four and a half months. The Salvadoran claim, at 1.29 standard deviations, is about 3.5 times that figure and roughly twice the largest median any [[meta-analysis-systematic-review|meta-analysis]] of [[intelligent-tutoring]] has reported, and it is asserted for a whole cohort in an operating public system rather than for a supervised trial. Because each study's effect size is divided by its own dispersion, the same gap is reported in three metrics: 129 points, 1.29 international standard deviations and 2.02 national standard deviations.

Selection and [[learning-gains]] are not mutually exclusive, and the published information cannot separate them: a fully representative assessed group implies the full 129-point gain, the top half implies 78.11 points, the top quarter 47.92 points, and the top 15% just 29.86 points, or 0.30 standard deviations, which is at the top of the historical distribution but no longer outside it. A genuine effect at the edge of what the literature has ever recorded, combined with the kind of self-selection volunteering routinely produces, reproduces the announced result exactly — and a programme effect of zero reproduces it equally well. Modelling school-level advantage, a 20-point advantage loosens the requirement to the top 11.0%, while allowing 30% of variance to lie between schools pulls it back to about 5.3%; across all combinations the requirement stays between 2.0% and 20.2%.

## Implications: Attribution, Scale and a Reporting Standard

Even granting that the reported gain were entirely genuine, the design does not permit it to be attributed to the artificial intelligence tutor. The reform bundles at least six components, and the evidence base for several of them — structured [[pedagogy]] with coaching, remedial instruction matched to learner level, new materials — predates [[generative-ai|generative AI]] by two decades, with documented effects of 0.1 to 0.3 standard deviations in low and middle income countries. A bundled intervention containing three components with documented effects and one with no evaluated effect cannot serve as evidence for the fourth. The chronology makes the problem sharper: the Grok deployment was announced on 11 December 2025, roughly six months after the pilot began and about six months before the June 2026 assessment, so the component with the shortest exposure would have to carry an unknown share of an unmeasured gain.

The PISA 2025 release four days later adds a second, harder reading. El Salvador assessed 7,073 students in 278 schools, representing about 77,000 15-year-olds. National means in mathematics and reading were practically unchanged from 2022, science improved by about 12 points, and the shares reaching Level 2 were 12% in mathematics, 29% in reading and 35% in science against OECD averages of 65%, 69% and 74%. Only 0.2% of Salvadoran 15-year-olds reach Level 5 or 6. Either the survey ran too early to register system-wide effects, or it is the only representative measurement of the system during the reform and shows nearly no movement; the overlap between the two samples has not been published.

The representative measurement here was slow, expensive and audited with a disappointing result; the non-representative one was fast, cheap and unaudited with an encouraging result, and policy attention followed the second. On the platform's public view counter, the post carrying the claim recorded about 441,000 views; the post carrying the qualification, four places later in the same seven-post thread, recorded about 11,000.

The response is a six-item reporting standard for school-level assessments used as system evidence: the baseline of the participating schools; the sampling protocol (eligible students, numbers assessed, identification rule, participation rate, stated in the headline where participation is voluntary); disaggregated means and standard errors by subject; the operational date of each component in each school; the overlap with the representative survey; and the qualification placed in the same document or post as the claim. The scaling literature gives independent grounds for caution, since programmes that produced gains under non-governmental implementation have produced none at government scale, and here the expansion multiplies schools roughly thirtyfold within two years. For a region whose history includes One Laptop per Child distributing about 800,000 laptops with no detectable effect, the risk is not that El Salvador adopted a technology that does not work, but that it draws the wrong lesson from a reform whose documented ingredients its headline never mentioned. The authors deliberately decline to settle whether AI tutoring helps; their demand is that claims of this size arrive with the evidence that [[educational-policy-ai]] routinely treats as optional.

## Connected Concepts

- [[intelligent-tutoring]]
- [[educational-measurement]]
- [[learning-gains]]
- [[bias-mitigation]]
- [[assessment-validity]]
- [[educational-policy-ai]]
- [[equity-in-ai-education]]
- [[global-south]]
- [[quantitative-research]]
- [[item-response-theory]]
- [[meta-analysis-systematic-review]]
- [[ai-ed-evaluation]]

## Connected Articles

- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know
- [[burneo-can-edtech-close-learning-gaps-2026]] — Can EdTech Close Learning Gaps? Global Evidence from Digital Interventions
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: The Manufacturing of an Evidence Base for AI-in-Education Through Flawed Meta-Analysis
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Effect of Artificial Intelligence on Learning: A Meta-Meta-Analysis
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: AI Tutoring with Khanmigo in a Two-Year School Experiment
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT-generated help produces learning gains equivalent to human tutor-authored help on mathematics skills
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026
- [[stanford-evidence-base-ai-k12-2026]] — The Evidence Base on AI in K-12: A 2026 Review

## Citation

Restrepo Morales, J. A., Rodríguez Flores, E. A., Giraldo Betancur, E. A., & Zea Restrepo, F. (2026). [*How much selection would be enough? Bounding the learning claim of El Salvador's artificial intelligence tutoring pilot*](https://osf.io/preprints/edarxiv/6gj9u_v1/). EdArXiv Preprints.
