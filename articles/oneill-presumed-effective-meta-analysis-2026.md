---
title: "Presumed Effective: The Manufacturing of an Evidence Base for AI-in-Education Through Flawed Meta-Analysis"
created: "2026-09-05T12:00:00-04:00"
updated: "2026-09-16T14:48:35-04:00"
type: article
foundations: [academic-integrity, ai-education, limitations-in-aied-research]
technology: [generative-ai]
assessment: [assessment-validity, learning-gains, peer-assessment]
connected_faqs: [reporting-interpreting-aied-research]
research_method: [secondary analysis, meta-analysis, research methods]
level: [k 12, higher ed, adult learning]
page_kind: [synthesis, evaluation]
sources: ['raw/papers/oneill-presumed-effective-meta-analysis-2026.md']
confidence: high
audience: [researchers, policymakers, institutions]
methods: [ai-ed-evaluation, meta-analysis-systematic-review, research-methods-aied]
institutions: [educational-policy-ai]
---

> **Synthesis:** O'Neill (2026) subjects 14 peer-reviewed [[meta-analysis-systematic-review|meta-analyses]] that claim AI, GenAI, or ChatGPT improves education to a forensic [[research-methods-aied|methodological]] audit, and finds that none provided a valid basis for the claims it advanced. The most basic failures are conceptual: all but two of the meta-analyses define the treatment as a tool rather than a [[pedagogy|pedagogical]] intervention, and multidimensional outcomes are pooled as though their dimensions were interchangeable. An evidentiary audit of 59 vetted primary studies found that 61% of the randomly selected studies were problematic, most often because the outcome measured did not match the meta-analysis claim. Reported [[limitations-in-aied-research|heterogeneity]] was high in every meta-analysis that provided I², no moderator analysis met the minimum subgroup size, and no meta-analysis offered a valid and sufficient accounting of publication bias. O'Neill argues these failures point to failed editorial and reviewer gatekeeping rather than isolated errors, and recommends mandatory data transparency for meta-analyses together with stronger peer review and retraction practice.

## Key Findings

1. **Audit design.** The study is a forensic methodological audit of 14 peer-reviewed meta-analyses, published after 1 January 2023, whose abstracts claim that AI or a specific AI technology affected education, academic performance, academic achievement, learning outcomes, learning performance, or higher-order thinking. It combines structured document analysis of those meta-analyses, an evidentiary audit of 59 primary studies (46 randomly selected plus 13 targeted for a priori suspicion), and a targeted citation-uptake analysis of two of the meta-analyses.
2. **No coherent construct.** All but two meta-analyses defined the treatment as a tool such as ChatGPT or GenAI, and a product name is not a pedagogy: treating exposure to ChatGPT as a common intervention is comparable to meta-analyzing the effects of "paper." Outcomes such as academic achievement bundled test scores, homework quality, motivation, self-efficacy, attitudes, and engagement into a single pooled estimate, and 11 of the 14 meta-analyses set no population boundary, so "students" spanned children through medical trainees.
3. **Primary-study vetting.** Of the 46 randomly selected primary studies, 28 (61%) presented validity concerns, and all 13 targeted studies were problematic. The most common concerns were dependent-variable mismatch (n = 15), independent-variable mismatch (n = 11), experimental design problems (n = 7), data extraction problems (n = 6), absence of a control group (n = 6), and nonrandom group assignment (n = 6).
4. **Contaminated studies passed quality screening.** Alneyadi and Wardat (2023) cite six articles about ChatGPT dated before ChatGPT existed, attach an incorrect DOI, and report η² = .0403 as "greater than 0.14"; it was included by six of the meta-analyses, including four of the five that applied formal primary-study quality metrics. The companion Alneyadi and Wardat (2024), included by three meta-analyses, reports η² = 1.374, which is impossible because η² cannot exceed 1.
5. **Statistical independence was widely violated.** Twelve of the 14 meta-analyses treated multiple effect sizes drawn from the same primary study as independent, for example describing "a total of 86 independent studies in 22 publications" (Doo & Park, 2026) or "65 independent studies" (Sun & Zhou, 2024). This inflates the apparent amount of evidence, underestimates standard errors, narrows confidence intervals, distorts the pooled mean, and makes significance and moderator effects easier to obtain.
6. **Heterogeneity was high and left unresolved.** Reported heterogeneity was high in every meta-analysis that supplied I² (range 77.2% to 94.4%), and 12 of the 13 reported values exceeded 80%. Only four meta-analyses reported global τ², and only two reported prediction intervals, both of which included zero. Because I² is precision-dependent, O'Neill notes that these statistics do not by themselves indicate the absolute dispersion of true effects, and the missing τ² and prediction intervals are what leave the pooled means uninterpretable.
7. **Moderator analysis was underpowered and confounded.** No meta-analysis met the baseline recommendation that the smallest subgroup include at least ten studies; five included subgroups with only a single study and three others had subgroups as small as two studies, which cannot meaningfully explain heterogeneity. Twelve violated the independence assumptions of their own moderator tests, none attempted to minimize confounding among correlated characteristics, and eight evaluated more than five moderator variables (some as many as 13) without any adjustment to the critical value for Type I error.
8. **Publication bias was never validly assessed.** All 14 meta-analyses attempted an assessment, but none provided a valid and sufficient accounting. Egger's test was used by 10 and Begg's test alone by one; 10 of those 11 tests violated independence assumptions. The critical value was always set at p < .05, and applying the recommended p < .10 would have classified five additional tests as significant. Discredited fail-safe N metrics were used in six meta-analyses and were the only quantification attempt in three of them, and negative low-power tests were reported as proof that no bias existed. Only Liu et al. (2025) made valid calculations assessing publication bias.
9. **A cascade of errors produced a concrete policy recommendation.** Liu et al. (2025) and Sun and Zhou (2024) treated study sample size as class size and mis-extracted the Ji et al. (2023) primary study, whose tables list numbers of students (N = 36) while the group is the unit of analysis (N = 8). The miscalculated effect size was placed in the wrong sample-size subgroup and drove the shared finding that 21 to 40 students is the ideal intervention size for ChatGPT/GenAI, on which basis both meta-analyses recommended that interventions be designed for that number of students.
10. **Flawed evidence circulates as authority.** The audited meta-analyses appeared in journals published by Springer Nature, Wiley, SAGE, Taylor & Francis, MDPI, and Athabasca University, and had accumulated 2,467 combined citations by 25 July 2026. Wang and Fan (2025) circulated for 351 days and accrued more than 500 citations before being retracted on 22 April 2026; of 20 post-retraction citing papers sampled, 12 (60%) cited it as authoritative evidence that AI improves learning and none acknowledged the retraction. Lee and Kwon (2024) was misread as evidence that AI integration improves learning in 8 of 14 sampled citing papers (57%), with only 2 (14%) citing it appropriately.
11. **The problem is systemic, not isolated author error.** Elementary validity failures recurred across peer-reviewed journals from major publishers, including some of the highest impact venues in the field, which shifts the concern to the reliability of editorial screening, peer review, and journal standards for AIED meta-analysis. O'Neill recommends requiring full data transparency (search protocols, selection decisions, coded characteristics, extracted statistics, effect-size calculations, and analytic code) and restructuring review so that prior publication of a meta-analysis is not treated as evidence of reviewer competence and at least one reviewer vets a subset of primary studies, alongside COPE-compliant retraction practice with visible retraction notices and citation records.

## Implications

- Heterogeneity statistics should be read with their limits in mind: an I² value alone does not establish the dispersion of true effects, so pooled AI effects reported without τ² and a prediction interval should not be treated as a stable description of what AI does in classrooms.
- Institutions, funders, and policymakers should treat AIED meta-analyses as claims requiring independent methodological vetting, especially when they feed procurement, grant priorities, or [[educational-policy-ai|national AI education policy]], given that the audited corpus had 2,467 citations and was produced in high-impact venues.
- Journals and editors should require full data transparency for meta-analyses and statistical review competence, since none of the 14 audited studies would have failed had reviewers been able to reproduce effect-size extraction, dependence handling, heterogeneity, and bias tests.
- [[peer-assessment|Reviewers]] should be tasked with checking a sample of primary studies against inclusion criteria, a practice that flagged fabricated references attributed to a real researcher in the audited corpus.
- Retraction is necessary but insufficient: post-retraction citations continued uncorrected in 60% of sampled papers, so indexes, citation exports, and the citing literature need explicit retraction flags and notes.
- Researchers and students should be trained to distinguish a coherent intervention-outcome relationship from a pooled average of unlike outcomes, and to question whether a tool name such as ChatGPT can carry the causal weight that a meta-analysis places on it.
- Claims about "[[ai-education|AI in education]]" should be reframed from whether a product category works to whether a designed learning activity works, which is the question policy and practice can actually act on.

## Connected Concepts

- [[research-methods-aied]]
- [[meta-analysis-systematic-review]]
- [[limitations-in-aied-research]]
- [[ai-ed-evaluation]]
- [[ai-education]]
- [[generative-ai]]
- [[learning-gains]]

## Connected Articles

- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-meta-analysis: bias-adjusted AI effects ~1/3 of reported size
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause
- [[genai-educational-outcomes-meta-analysis]] — A large meta-analysis of generative AI's effect on educational outcomes
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Meta-analysis of AI literacy intervention effects
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails can harm learning (PNAS 2025 RCT)
- [[zhao-genai-higher-order-thinking-meta-2026]] — GenAI and higher-order thinking meta-analysis

## Citation

- O'Neill, P. E. (2026). [Presumed Effective: The Manufacturing of an Evidence Base for AI-in-Education Through Flawed Meta-Analysis](https://osf.io/preprints/edarxiv/n29zd_v3). EdArXiv preprint.
