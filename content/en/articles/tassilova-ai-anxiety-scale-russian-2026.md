---
title: "Psychometric properties of the Russian version of the artificial intelligence anxiety scale: dimensionality, measurement invariance, and person-centered profiles"
created: "2026-11-09T09:35:00-05:00"
updated: "2026-11-09T10:20:00-05:00"
type: article
page_kind: [evaluation]
research_method: [instrument development]
evidence_context: educational
level: [undergraduate, higher ed]
audience: [researchers, assessment professionals, instructors]
sources: ['raw/papers/tassilova-ai-anxiety-scale-russian-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1982434"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
pedagogy: [anxiety-and-stress]
assessment: [educational-measurement, self-report-measures, psychometrically-aware-ai]
methods: [latent-profile-analysis]
---
> **Synthesis:** The 23-item, eight-dimension Artificial Intelligence Anxiety Scale does not survive translation into Russian intact. Tassilova and colleagues gave the [[self-report-measures|self-report scale]] to 877 [[higher-ed|undergraduates]] at ten universities in Kazakhstan (n = 514) and Russia (n = 363), split the sample into exploratory (n = 439) and confirmatory (n = 438) halves, and could not recover the original structure: four dimensions describing societal and existential threats collapsed into one. The eight-factor model had the best conventional fit (χ2 = 221.59, df = 142, CFI = .976, RMSEA = .036) but was rejected because four factor correlations exceeded .85, the highest .884, and the Fornell-Larcker criterion failed in nine of 28 pairs. Removing three items produced a 20-item, five-factor solution with acceptable fit (χ2(160) = 312.26, CFI = .953, TLI = .945, RMSEA = .047, SRMR = .043), and a bifactor model showed that about 92% of reliable total-score variance belongs to one general factor (ωH = .875 against ωtotal = .954). Score the total, not the subscales, and treat [[anxiety-and-stress|AI anxiety]] in this population as one continuous intensity.

## Key Findings

1. **The eight-dimensional structure did not replicate.** Forcing eight factors in exploratory analysis grouped existential risk, ethical deviance, artificial consciousness, and lack of transparency into a single factor; two of the Tucker fit indices between subsamples stayed below .85.
2. **Fit and discriminant validity pointed in opposite directions.** The eight-factor model led on conventional indices (CFI = .976, RMSEA = .036) while four factor correlations exceeded .85 and nine of 28 Fornell-Larcker pairs failed, so model choice rested on discriminant validity rather than fit.
3. **A 20-item, five-factor model was retained after removing three items.** It fit acceptably in the confirmatory half (CFI = .953, TLI = .945, RMSEA = .047, SRMR = .043) and better in the exploratory half (CFI = .967, TLI = .961, RMSEA = .039, SRMR = .041), with the 20-item alpha at .940.
4. **The general factor dominates.** Bifactor indices were ωH = .875, ωtotal = .954, and a ratio of .918, meaning roughly 92% of reliable total-score variance is attributable to the general factor; specific-factor ωHS values ran .166 to .407, too low to support subscale scoring.
5. **Invariance held for gender, only partially for country.** Strict invariance held across gender (ΔCFI −.004 at the residual step); country reached metric (ΔCFI −.002) and partial scalar after freeing one intercept, AIAS_05 (CFI = .948, ΔCFI −.007).
6. **One country comparison is indeterminate, not merely biased.** The two-item Algorithmic Unfairness dimension reversed direction depending on which intercept was freed (+0.191 favoring Kazakhstan against −0.505 favoring Russia), and freeing both left the latent mean unidentified.
7. **Familiarity, not formal training, predicted profile membership.** Familiarity carried odds ratios of .65 to .72 across comparisons; having taken a course, workshop, or training was not significant in any (p = .22 to .56), and the model's pseudo R2 was .04.

## Two instruments with one name, and a Russian gap

"Artificial intelligence anxiety scale" names two different instruments in this literature, and the paper opens on that problem. Wang and Wang's version has 21 items across four dimensions — learning, job loss, sociotechnical blindness, and AI framing — and anchors most applied work and meta-analyses. Li and Huang's version, the one adapted here, has 23 items across eight dimensions and was derived from integrated fear acquisition theory rather than an inductive item pool. Because the dimensions and contents differ, findings from one do not transfer to the other, and independent psychometric evidence for the eight-dimensional form is thin. Russian is the working language of instruction across much of post-Soviet higher education, and no validated Russian-language AI anxiety scale existed. The sample ran from 999 raw responses to 877 after excluding participants with zero within-person variance on all 23 items, meaningless entries in country or university fields, and two missing ages. Adaptation followed translation, back-translation, expert reconciliation, and a cognitive pretest with 20 students; the authors note it falls short of the full TRAPD protocol.

## From eight factors to five

The exploratory analysis could not reproduce eight dimensions even when eight were forced. Lack of transparency split in two, with part of its items joining existential risk, ethical deviance, and artificial consciousness. Three items left the scale, each on a combination of empirical indicators and content. AIAS_04 had a single-factor loading of .229, an item-total correlation of .241, and an intercept difference across countries of 1.808 — about nine times the median item value of 0.195 — and reads as a normative judgment where the rest of the scale expresses anxiety. AIAS_08 loaded almost equally on job substitution and learning (.344 and .339); AIAS_13 kept a principal loading of .26 while spreading its variance across five factors. The decisions were [[psychometrically-aware-ai|psychometrically]] explicit, weighing pattern loadings and their gap from the next-highest loading, communalities, item-total correlations, item-level KMO values, and conceptual content together. The surviving five factors separate anxieties about privacy, algorithmic treatment, job replacement, and one's own learning from a broad societal-existential dimension of ten items — proximal-personal concerns on one side, distal-social on the other. That distinction is the paper's substantive claim about why the original eight did not hold, offered as a hypothesis for replication.

## Scoring, invariance, and what the profiles are not

Bifactor modeling answers the scoring question directly: the item set is dominated by one general factor, and the three dimensions that could be modeled as specific factors retain too little residual variance to justify separate scores — most starkly societal-existential threat at ωHS = .166. Two-item factors could not be tested this way at all, so separate scoring is neither supported nor ruled out for them — a question of [[educational-measurement|measurement]] design, not statistics alone. Invariance testing then shows what a short factor costs. Across countries, freeing the AIAS_05 intercept lifted CFI to .948; the two items in that factor diverge in opposite directions between countries (4.22 in Russia against 3.59 in Kazakhstan, then 3.24 against 2.92), so no group comparison on algorithmic unfairness is reported. The four longer dimensions were unaffected by any specification. The [[latent-profile-analysis|latent profile analysis]] returned four profiles, but the level component accounted for 48.5 times as much between-profile variation as shape, and the information criterion did not support four profiles: BIC selected six in 96.2% of 500 bootstrap replications. The profiles are cross-sections of a continuum, not types.

## What this means for practice

- **Researchers.** Compute bifactor indices before comparing subscale scores, and test measurement invariance before any cross-country claim. In this sample a single item's intercept was enough to reverse the direction of a country difference inside one dimension.
- **Assessment professionals.** Score the Russian form as a total, and do not report its five dimensions as separate scales. A two-item factor that diverges between groups cannot support a group comparison at all.
- **Instructors.** Read a student's AI anxiety score as a position on one severity continuum, not as a diagnosis of a specific fear. The person-centered analysis found intensity ordering, with no qualitatively distinct anxiety types to match against a student.

## Limitations

- Country, gender, and field of study overlap almost completely: the Kazakhstan subsample is 87.5% women and 58.0% social sciences, the Russian subsample 52.6% men and 64.2% engineering, so differences cannot be attributed to any one of them.
- Item removals were decided sequentially, and the confirmatory subsample was consulted more than once, so the confirmatory fit is reported as internal [[assessment-validity|validation]] rather than independent confirmation.
- The four-profile solution is not supported by information criteria: BIC kept decreasing beyond four profiles in every model family, and 96.2% of bootstrap replications selected six.
- The software offered only maximum likelihood for latent profile analysis, with no robust correction, although Mardia's multivariate kurtosis coefficient was significant (b₂ₚ = 40.71, z = 10.10, p < .001).
- The bifactor model produced one negative residual variance (a Heywood case), so the omega indices derived from it should be read with that in mind.
- The design is cross-sectional, the sample is a convenience sample reached through the authors' institutional affiliations, and the study was not pre-registered.

## Citation

Tassilova, N. A., Kozgambayeva, G. B., Issabek, B. K., Berechikidze, I. A., Korzhuev, A. V., & Frolova, S. V. (2026). [*Psychometric properties of the Russian version of the artificial intelligence anxiety scale: dimensionality, measurement invariance, and person-centered profiles*](https://doi.org/10.3389/feduc.2026.1982434). *Frontiers in Education*. https://doi.org/10.3389/feduc.2026.1982434
