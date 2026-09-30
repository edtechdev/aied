---
title: "K-12 in-service teachers' beliefs about generative AI in classrooms: insights from the United States, India, Qatar, Colombia, and the Philippines"
created: "2026-09-30T14:20:00-04:00"
updated: "2026-09-30T14:20:00-04:00"
type: article
sources: ['raw/papers/10.3389_feduc.2026.1929017.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey]
level: [k 12]
audience: [instructors, administrators, policymakers, researchers, faculty developers]
foundations: [ai-literacy, teacher-ai-competency, academic-integrity, theories-and-frameworks, limitations-in-aied-research]
pedagogy: [self-determination-theory, motivation, creativity, professional-training, self-efficacy]
technology: [generative-ai, technology-acceptance-model]
assessment: [assessment, self-report-measures]
methods: [quantitative-research, research-methods-aied]
institutions: [educational-policy-ai]
ethics: [trust, global-south, multilingual-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** A cross-sectional survey of 1,405 in-service K-12 teachers in the United States (n = 539), India (n = 316), Qatar (n = 284), Colombia (n = 165) and the Philippines (n = 101), framed by [[self-determination-theory]] and attribution theory and analyzed with three multiple regressions. AI Readiness (B = .59), institutional support (B = .16) and behavioral use of [[generative-ai]] (B = .14) predicted positive beliefs about GenAI's instructional value, and that model explained 50% of the variance (R² = .50). The same predictors explained only 7% and 6% of the variance in [[academic-integrity|plagiarism]] and [[creativity]] concern, which instead tracked national context and education level, and AI Readiness reversed sign in the creativity model (B = .18). The central qualification: the design is cross-sectional and [[self-report-measures|self-reported]], so no causal direction is established and the two concern models leave most variance unaccounted for.

## Key Findings

- **AI Readiness dominated positive beliefs, and the model explained half their variance.** AI Readiness predicted Positive AI Impact Beliefs at B = .59, 95% CI (.52, .66), p < .001 (β = .47) within a model at R² = .50; a sensitivity analysis dropping [[technology-acceptance-model|perceived usefulness]] and relevance from the readiness composite still found a significant association (B = .15, p < .001).
- **Institutional support and prior use contributed independently of readiness.** Perceived school encouragement predicted positive beliefs at B = .16, 95% CI (.11, .21), p < .001, and Behavioral Use of GenAI at B = .14, 95% CI (.11, .18), p < .001, consistent with a competence–relatedness–enactment cycle.
- **Concerns ran on a structurally separate track.** The same predictors explained only R² = .07 of plagiarism concern and R² = .06 of creativity concern. In the plagiarism model, only Qatari residence (B = .45, 95% CI (.25, .65), p < .001) and lower education level (B = −.13, 95% CI (−.21, −.06), p < .001) were significant; AI Readiness was not (B = .07, ns).
- **Readiness reversed direction for creativity.** Higher AI Readiness predicted *greater* creativity concern (B = .18, 95% CI (.07, .28), p < .01), as did behavioral use (B = .08, 95% CI (.02, .14), p < .01), while higher formal education predicted less (B = −.14, 95% CI (−.22, −.06), p < .01).
- **Countries diverged by outcome, not by overall enthusiasm.** Indian teachers reported more positive beliefs than U.S. teachers (B = .27, p < .001) and lower creativity concern (B = −.23, p < .05); Qatar stood apart only on plagiarism concern. Country descriptives put Positive AI Impact Beliefs at 4.21 in India, 4.01 in Qatar and 3.57 in the United States, and institutional support highest in Qatar (M = 4.46) and India (M = 4.00).
- **English proficiency behaved counterintuitively.** [[teacher-role|Teacher]] English Proficiency correlated near zero with positive beliefs (r = −.03, ns) yet emerged as a negative coefficient in the regression (B = −.11, 95% CI (−.16, −.06), p < .001), which the authors read as a suppression effect and explicitly caution against interpreting substantively.

## How the study was done

The authors fielded a 40-item Qualtrics survey of in-service K-12 teachers between January and May 2025, drawn from commercial panels in each country and presented in English (United States), Hindi (India), Arabic (Qatar), Spanish (Colombia) and Filipino (Philippines). Of 1,505 responses, 98 were excluded for missing country (n = 95) or residence outside the five focal countries (n = 3), and two more were removed in data-quality screening, yielding N = 1,405. The sample spanned grade bands at 5.6% [[early-childhood-elementary-ai-education|early childhood]], 27.0% elementary, 22.8% [[k-12|middle school]] and 44.6% high school, with the modal age group at 36–45 years and female representation ranging from 45.2% in Qatar to 74.6% in the United States.

Four composites were built as row means of Likert-type items: Positive AI Impact Beliefs (3 items, α = .83), AI Readiness (4 items, α = .72), Behavioral Use of GenAI (3 items, α = .88) and Teacher English Proficiency (2 items, α = .93). Institutional support, plagiarism concern and creativity concern were each single items, which precludes reliability estimation. The analysis used three multiple regressions with country fixed effects (reference group: United States), unstandardized coefficients reported throughout; missing data fell below 5% and was handled by listwise deletion, and all variance inflation factors fell below 2.5. Because the survey was cross-sectional and self-reported, the authors state that causal inference is precluded.

## Where the country differences sit

Across all three models, country of residence jointly explained significant variance after individual-level predictors were controlled: omnibus tests were significant for Positive AI Impact Beliefs, F (4, 1,183) = 6.25, p < .001; Plagiarism Concern, F (4, 1,145) = 6.05, p < .001; and Creativity Concern, F (4, 1,166) = 3.39, p = .009. The specific contrasts were narrow, however: India differed from the United States on positive beliefs and creativity concern, and Qatar on plagiarism concern, while Colombia and the Philippines did not differ significantly from the United States on any of the three outcomes.

The descriptive pattern is that Qatar combined the highest institutional support (M = 4.46) with the highest plagiarism concern (M = 2.42, against 1.89 in the United States) and the highest creativity concern (M = 2.57, against 2.32 in the United States). India combined high positive beliefs with the lowest creativity concern (M = 2.19). Teacher English Proficiency was lowest in Colombia (M = 2.61), reflecting the linguistic diversity of the sample. The authors read the Qatar profile as consistent with a context where AI use is actively encouraged yet monitored for integrity risks, and the India profile as a more optimistic orientation, but they note that direct measurement of policy and culture variables was beyond the study's scope.

## What this means for practice

- **Do not treat readiness training as a solution to concern.** The predictors that explained 50% of the variance in positive beliefs explained only 6%–7% of the variance in plagiarism and creativity concern, so tool demonstrations, use cases and confidence-building address one track and leave the other untouched.
- **Add a structured attribution strand to [[educational-development|professional development]].** The authors recommend helping teachers examine whether they attribute plagiarism to stable features of the technology or to addressable factors in [[assessment|assessment design]], and whether they attribute creativity loss to GenAI itself or to how tasks are currently structured.
- **Design creativity-preserving and integrity-supportive tasks.** Use GenAI as a brainstorming scaffold rather than a drafting replacement, require ideation, authentic voice and iterative revision, and pair this with context-specific [[prompt-engineering|prompt design]], oral and [[process-oriented-assessment|process-based assessment]], and explicit norms for transparency.
- **Calibrate professional development to the national policy signal.** In high-integrity-enforcement settings such as Qatar, programs that ignore the institutional plagiarism discourse will not reduce concern and may increase distrust; language access should be treated as a first-order priority rather than an add-on.
- **[[benchmark]] teacher AI beliefs as part of system monitoring.** The divergent India and Qatar profiles show that no single national strategy fits all contexts, and that individual readiness is the strongest individual-level lever available to policy.

## Limitations

- The data are cross-sectional and self-reported, so no causal direction is established and common method bias is possible; null effects for readiness and support in the concern models are informative but not evidence of causal independence.
- Plagiarism concern and creativity concern were each measured by a single survey item, which precludes reliability estimation, and the concern models leave more than 93% of the variance unexplained by the predictors measured here.
- Survey translations were produced by Qualtrics' automated machine translation rather than back-translation or expert bilingual review, formal measurement invariance testing across language groups was not conducted, and cross-national comparisons should therefore be interpreted with caution.
- Country fixed effects are coarse proxies for policy environments, enforcement norms and infrastructure, and the Colombia (n = 165) and Philippines (n = 101) subsamples are small enough that their country-level estimates warrant caution; the study also did not test whether country moderates the individual-level relationships.

## Citation

Xiu, R. L., Aguilar, S. J., Macías, A. J., Shikanova, A., Al-Sulaiti, R., Junjunia, M., & Jebril, S. T. (2026). [K-12 in-service teachers' beliefs about generative AI in classrooms: insights from the United States, India, Qatar, Colombia, and the Philippines](https://doi.org/10.3389/feduc.2026.1929017). *Frontiers in Education*, 11, 1929017.