---
title: "Latent Profile Analysis"
created: "2026-09-20T12:39:59-04:00"
updated: "2026-09-20T12:39:59-04:00"
type: concept
methods: [quantitative-research, research-methods-aied]
confidence: high
---

> **Latent profile analysis (LPA)** — a person-centered method that sorts a sample into unobserved subgroups (profiles) when each case is described by several variables at once. It is the continuous-indicator member of the mixture-modeling family; its sibling **latent class analysis (LCA)** applies the same logic to categorical indicators. Both ask a different question from the [[quantitative-research|variable-centered]] models that dominate AI-in-education research: not "how much does X predict Y on average" but "how many different kinds of learner, [[teacher-role|teacher]], or manager hide inside that average." In this knowledge base the method shows that one AI tool lands very differently across subgroups — five ethical-awareness profiles among Ghanaian undergraduates, six readiness typologies among Ukrainian education managers, four [[generative-ai|ChatGPT]]-acceptance profiles among Taiwanese pre-service teachers.

## Questions to Consider

- A study reports that students' average comfort with AI is 3.8 out of 5. What might that average conceal if one group is enthusiastic and another quietly resistant?
- LPA models continuous scores; LCA models categories. If you code interview responses as "mentions [[cognitive-offloading|overreliance]]: yes/no," which do you need?
- A five-profile solution reports entropy of 0.816; a four-profile rival scores 0.929 but describes the data less richly. Which would you publish?
- Profiles are descriptive, not causal. If a "Resistant Skeptics" profile shows high ease of use but low intention to adopt, what does that support, and what does it not?

## Introduction

Most AI-in-education evidence is variable-centered: it estimates average relationships, and averages assume homogeneity. Person-centered methods instead take the person as the unit of analysis and ask how many distinct configurations of attributes exist in the sample. LPA belongs to that family, and its payoff here is that it converts learner diversity from a rhetorical claim into a measurable finding: when close to a quarter of undergraduates sit in the two lowest ethical-awareness profiles despite a comfortable sample mean, differentiation stops being a design preference.

## What the method does, and when it is the right tool

LPA assumes the sample is drawn from a mixture of subgroups, each with its own means and variances on the indicators. The researcher supplies the indicators and the number of groups; the algorithm estimates each case's probability of membership and assigns by highest probability, returning a mean profile per group, a size per profile, and a summary of how cleanly cases separate. Which member of the family you use follows the indicators, not the research question:

- **LCA — categorical indicators.** Becker and colleagues converted coded response categories from 1,189 physics students' open answers into indicator variables and retained two classes: Pragmatic Users (70 percent) and Skeptical Non-Users (30 percent); because an unmentioned topic counts as "no endorsement," the authors flag zero-inflation in the analysis dataframe.
- **LPA — continuous indicators** such as scale scores and construct means. Chen and colleagues profiled 128 Taiwanese pre-service teachers on five [[technology-acceptance-model|TAM]]/UTAUT2 constructs; Acquah and colleagues profiled 509 Ghanaian undergraduates on three ethical-awareness dimensions; Schweder and colleagues profiled 2,464 students on [[motivation|motivational]] need satisfaction.
- **Latent (profile) transition analysis** extends the family over time, estimating profiles per wave and the probability of moving between them. Liang and colleagues tracked 2,086 students' AI learning motivation across a year; Wu followed 457 Japanese-language learners over three waves, the maladaptive profile shrinking from 26.48 to 17.74 percent.

Ordinary clustering ([[machine-learning|k-means]] and hierarchical) pursues the same person-centered intent but partitions cases by geometric distance rather than estimating a probability model. Reach for LPA or LCA when the question concerns subgroups — whether "the learner" is a fiction at your sample's level of aggregation, and whether subgroups differ in shape as well as level. Do not reach for it when you need an average treatment effect: a five-profile solution inside a [[rct|randomized trial]] of an [[intelligent-tutoring|adaptive tutor]] predicted posttest differences (partial η² = .27) but found no condition × profile interaction (ps ≥ .198).

## How the corpus uses it

Three uses recur.

- **Establishing heterogeneity before designing for it.** Kremen and colleagues' survey of 395 Ukrainian education managers used person-centered LCA to show that "the manager" is a fiction: six typologies run from Competency-constrained (25.6 percent, willing but unskilled) to Barrier-free skeptics (highest readiness yet 74 percent AI distrust), and the authors read them as a mandate for differentiated training.
- **Recovering subgroups an aggregate hides.** Acquah and colleagues retained five ethical-awareness profiles from Comprehensive Very High (26.1 percent) to Low Ethical Awareness (4.5 percent, beneficence 2.06), the two lowest together covering close to a quarter of the sample. Chen and colleagues found that Resistant Skeptics reported high perceived ease of use but very low behavioral intention — the corpus's clearest demonstration that the ease-of-use/intention paradox is invisible to a mean-level model.
- **Profiling calibration rather than level.** The teacher AI-literacy study applied LPA to the agreement between [[self-report-measures|self-report]] and objective measures, yielding six profiles: overestimation, underestimation, alignment, and a low/low group concentrated among teachers without prior [[ai-literacy|AI literacy]] experience. Here profiles describe a pattern across instruments, not a score band.

Profiles then serve as an independent variable: discipline shaped membership among pre-service teachers (Cramér's V = 0.532, STEM students concentrated in Technology Pioneers), and membership predicted later [[self-efficacy]], burnout, and [[anxiety-and-stress|AI anxiety]] elsewhere in the corpus.

## Choosing the number of profiles

No single statistic selects the solution; the corpus treats retention as a judgment made from several criteria together.

- **Information criteria (BIC, AIC).** Lower is usually better, but a monotonic decline signals a problem rather than a winner. In the Ukrainian manager study BIC fell monotonically across the two- to six-class range with no clear minimum, and the authors call their six-class solution exploratory on that evidence.
- **Entropy.** A summary of classification certainty, closer to 1 meaning cleaner assignment. Chen and colleagues report 0.985 for four profiles; Acquah and colleagues report 0.816 for five profiles against 0.929 for four, and themselves suggest consolidating for a more stable grouping.
- **[[explainable-ai|Interpretability]] and profile size.** The trust-in-AI profiling study kept three clusters although the Calinski–Harabasz index preferred two, because three were interpretable, and it notes that a silhouette coefficient of 0.288 signals weak or borderline separation. Chen and colleagues warn that their smallest profile (14.06 percent of 128 cases) may be unstable, and the Ghana study's smallest profile holds only 23 students, which its authors propose merging.
- **Stability under resampling.** Bootstrap stability is the honest check on whether profiles would recur in a new sample: mean adjusted Rand index was 0.385 for the Ukrainian six-class solution but 0.989 across 100 random initializations in the trust-in-AI study — the same nominal design, very different evidential weight.
- **Bootstrap likelihood ratio tests (BLRT)** and the Lo–Mendell–Rubin test are standard companions to BIC and entropy in the wider mixture-modeling literature, but the profile studies in this knowledge base do not report them. Where a page reports only BIC and entropy, treat the class count as provisional.

Report the comparisons, not just the winner: a page that says "we retained five profiles" without the rival solution, the entropy values, and the smallest profile's size gives readers no way to judge the choice.

## Reading and reporting the results, and where they go wrong

Read a profile by its shape as well as its level. In the Ghana study the profiles differ in the configuration of autonomy, beneficence, and fairness — the largest pairs strong autonomy endorsement with lower beneficence — so two profiles can sit at similar overall levels and still call for different teaching.

Four cautions, each stated in the source pages:

1. **Profiles are descriptive.** They say who is in the sample, not why, and cross-sectional designs cannot show stability or movement (the pre-service teacher, Ghana, and physics studies). Only the longitudinal analyses — a year-long transition study and Wu's three waves — support claims about movement, and even there movement is association, not intervention effect.
2. **Membership is estimated, not observed.** Cases are assigned by highest posterior probability, so individuals near a boundary are classified with real uncertainty; low entropy and weak silhouette values mean the boundaries should be read as soft.
3. **Indicator choice defines the answer.** Profiles depend entirely on which variables enter the model, so heterogeneity the study never measures is heterogeneity it cannot find — the Ghana study collected only gender among backgrounds and therefore cannot say what predicts membership.
4. **Detected heterogeneity is not detected causation.** The tutor trial's profile × condition null is the reminder: profiling an outcome inside a trial is not a moderation test of the treatment.

## Implications for AI in education

1. **Measure heterogeneity before recommending an intervention.** Profiles in this corpus repeatedly place a quarter or more of a sample below the headline average; design for the profiles that exist rather than for the mean.
2. **Prefer person-centered methods when the deliverable is differentiation.** The pre-service teacher and manager studies both present that shift as their methodological contribution, because average predictors cannot reveal the configurations that justify differentiated support.
3. **Report retention evidence in full.** Publish BIC/AIC comparisons, entropy, profile sizes, and a stability check, and say plainly when a class count is exploratory.
4. **Treat profiles as diagnostics, not labels.** A profile is a research construct with an estimated boundary, so a tool that assigns individuals to named categories carries the caution of any [[educational-measurement|measurement]] instrument — and [[differential-effects-across-learner-groups|differential effects across learner groups]] warrant the scrutiny of any subgroup analysis.

## Connected Concepts

- [[quantitative-research]]
- [[mixed-methods-research]]
- [[research-methods-aied]]
- [[machine-learning]]
- [[learning-analytics]]
- [[student-modeling]]
- [[educational-measurement]]
- [[self-report-measures]]
- [[differential-effects-across-learner-groups]]
- [[technology-acceptance-model]]

## Connected Articles

- [[ai-ethical-awareness-ghana-students-2026]] — Five ethical-awareness profiles; entropy 0.816 (five-class) vs. 0.929 (four-class); smallest profile n = 23
- [[ai-adoption-readiness-ukraine-education-managers-2026]] — Six manager typologies; BIC monotonic across 2–6 classes; bootstrap stability mean ARI 0.385
- [[chen-preservice-teachers-chatgpt-lpa-2026]] — Four ChatGPT-acceptance profiles (entropy 0.985); ease-of-use ≠ intention paradox
- [[becker-chatgpt-typology-physics-2026]] — LCA on categorical indicators from 1,189 coded responses; zero-inflation caveat
- [[ai-literacy-assessment-misalignment]] — LPA on self-report vs. objective agreement: six calibration profiles
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Three-wave latent profile transition analysis of psychological adaptation
- [[liang-ai-learning-motivation-sdt-2026]] — Latent transition analysis of three motivation profiles over a year
- [[trust-in-ai-psychological-profiles-ml-2026]] — K-means profiles; silhouette vs. Calinski–Harabasz disagreement; ARI 0.989
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Hierarchical and k-means clustering into four GenAI adoption personas
- [[student-motivation-need-satisfaction-genai-sdt-2026]] — Person-centered LPA combined with variable-centered comparisons
