---
title: "The Generative Artificial Intelligence Literacy Scale (GAILS): Development, Validation, and Measurement Invariance Across Sex and Occupational Status Groups"
created: "2026-09-18T14:20:00-04:00"
updated: "2026-09-18T14:20:00-04:00"
type: article
foundations: [ai-literacy]
assessment: [educational-measurement, self-report-measures, assessment]
methods: [quantitative-research]
research_method: [instrument development, quantitative, survey]
level: [higher ed, adult learning]
audience: [researchers, assessment designers, educators]
page_kind: [evaluation]
sources: ['raw/papers/gails-generative-ai-literacy-scale-2026.md']
confidence: high
---

> **Synthesis:** Zhang, Qi, He, Feng and Ji argue that the fast-growing family of AI literacy instruments measures general AI knowledge rather than the interactional competencies generative AI actually demands: prompt formulation, iterative refinement, output verification, and responsible handling of generated content. Their Generative Artificial Intelligence Literacy Scale (GAILS) responds with 34 Likert items, cut from an initial pool of 43 through a five-expert Delphi review and a seven-person pilot, then validated in 341 North American adults (38.42% students, 61.58% workforce) split into an exploratory half (n = 171) and a confirmatory half (n = 170). Exploratory factor analysis returned three factors, Adaptive Operational Skills, Responsible GenAI Literacy, and Critical Evaluation & Autonomous Use, explaining 66.9% of the variance with every loading above .50; confirmatory fit was acceptable (CFI = 0.967, TLI = 0.965, SRMR = 0.058, RMSEA = 0.087) and internal consistency high (α = 0.973, 95% CI [0.968, 0.978]). The decisive contribution is scalar invariance across female and male respondents and across student and workforce groups, which licenses the mean comparisons the field has mostly lacked. The takeaway: the GAILS is a self-report measure of perceived GenAI competence that can compare groups, not an objective test of what people can do.

## Key Findings

1. **Three factors, not the three domains the authors started with.** EFA on the exploratory half (n = 171) supported a three-factor solution (KMO = .959; Bartlett's χ²(561) = 5,784.58, p < .001; eigenvalues 19.31, 1.92 and 1.52) accounting for 66.9% of total variance. Technical Knowledge and most Practical Skills items merged into Adaptive Operational Skills, while five critical-awareness items split off into Critical Evaluation & Autonomous Use; Responsible GenAI Literacy remained a distinct factor.
2. **Every item survived the loadings cut.** All 34 standardized factor loadings exceeded the .50 minimum (range .505 to .865), so no item was dropped at the EFA stage; the EFA model itself showed acceptable fit (CFI = 0.926, TLI = 0.909, RMSEA = 0.070, 90% CI [0.063, 0.078], SRMR = 0.031).
3. **Confirmatory fit was acceptable but mixed.** On the second half (n = 170), CFI = 0.967, TLI = 0.965 and SRMR = 0.058 met conventional cutoffs while RMSEA = 0.087, 90% CI [0.080, 0.093], sat above the ≤ .08 benchmark; the authors lean on SRMR and the incremental indices, citing Shi et al. (2020) on RMSEA with ordinal data.
4. **Reliability was high across the board.** Total-scale Cronbach's α = 0.973, 95% CI [0.968, 0.978]; by factor, α = 0.975 (Adaptive Operational Skills), 0.855 (Responsible GenAI Literacy) and 0.940 (Critical Evaluation & Autonomous Use), with composite reliabilities of 0.977, 0.962 and 0.945.
5. **Convergent validity held against two adjacent constructs.** Total GAILS correlated r = 0.809 with GenAI acceptance and r = 0.473 with GenAI trust (both p < .001); the Adaptive Operational Skills subscale was the strongest correlate of acceptance (r = 0.825) and trust (r = 0.509), while the responsible and critical factors were weaker (acceptance r = 0.638 and 0.601; trust r = 0.357 and 0.285).
6. **Scalar invariance across sex.** Configural, metric and scalar models all fit well, with metric versus configural ΔCFI = −0.001 and ΔRMSEA = 0.009, and scalar versus metric ΔCFI = 0.001 and ΔRMSEA = −0.014, both inside the Chen (2007) cutoffs. With invariance established, males scored higher on Adaptive Operational Skills (d = 0.212, z = 2.284, p = .022) but not on Responsible GenAI Literacy (p = .097) or Critical Evaluation & Autonomous Use (p = .362).
7. **Scalar invariance across occupational status, a rarer result.** Freelancers (n = 68) were pooled with employed participants to form a workforce group (n = 210) against students (n = 131); metric versus configural ΔCFI = −0.001 and ΔRMSEA = 0.011, scalar versus metric ΔCFI = 0.001 and ΔRMSEA = −0.014. Students then scored higher on Adaptive Operational Skills (d = 0.445, z = 5.424, p < .001) and Responsible GenAI Literacy (d = 0.321, z = 3.663, p < .001), with no significant difference on Critical Evaluation & Autonomous Use (p = .131).
8. **Semantic-embedding analysis partly echoed the factor solution.** Average variance extracted was 0.685, 0.738 and 0.774, all above 0.50, and Leiden clustering projected with t-SNE isolated Responsible GenAI Literacy as a cohesive cluster while nesting Critical Evaluation & Autonomous Use near Adaptive Operational Skills. Discriminant validity failed one Fornell–Larcker comparison: Factor 1's √AVE of .828 fell below its correlation with Factor 3 (.873).
9. **The sample was screened hard.** Of 468 entrants, three were removed for withholding consent and 117 failed one of two attention checks, leaving 341 adults (Mage = 39.00; 164 male, 177 female); 54.25% currently used GenAI tools, 22.58% had stopped and 23.17% had never used them.

## The construct: GenAI literacy as practical, responsible competence

The authors define GenAI literacy as "the competencies needed to understand, evaluate, and use GenAI tools effectively and responsibly", deliberately extending [[ai-literacy]] rather than restating it. General AI literacy instruments, such as Wang et al.'s (2023) ten-item scale covering awareness, use, evaluation and [[ethics]], are treated as necessary but insufficient: [[generative-ai]] use adds interactional demands — formulating and refining prompts, verifying and reworking outputs, and handling generated content responsibly — that sit closer to daily practice and carry distinctive legal and ethical weight. The framing follows policy guidance from NIST (2024) on generative-AI risk management and UNESCO (2024, 2025) on privacy, intellectual property and [[academic-integrity|academic integrity]], and converges with Annapureddy et al.'s (2025) twelve defining GenAI competencies and Ng et al.'s (2026) synthesis.

The differentiation from existing measures is the paper's stated gap. Ng et al.'s (2024) affective-behavioural-cognitive-ethical approach was built for an adolescent, [[curriculum-design|curriculum]]-oriented cohort; the GenAI Literacy Assessment Test (GLAT, Jin et al., 2025) is a 20-item multiple-choice instrument aimed at objective knowledge and task prediction among [[higher-ed]] students; earlier GenAI instruments were validated on EFL teachers in China or university students in Turkey. Liu et al. (2025) validated a workplace scale but never tested cross-group comparability. The GAILS is positioned against all of these as a multidimensional self-perception measure for a broad adult population spanning study and work.

## Development and validation sequence

Item generation began from [[meta-analysis-systematic-review|literature review]] and the authors' three initial domains, Technical Knowledge, Practical Skills and Responsible GenAI Literacy, producing a 43-item pool. Five experts in [[educational-measurement]], social and behavioural psychology, and applied AI rated each item and domain on a five-point appropriateness scale, and their quantitative ratings and written comments drove merging, deletion and rewording that left 34 items (6 technical, 19 practical, 9 responsible; item counts were deliberately unequal because the domains differ in breadth). A pilot with seven graduate students from varied disciplines, aged 18 to 44 and of differing GenAI familiarity, produced only granular wording changes, and all 34 items survived. Responses use a five-point Likert scale (1 = completely disagree to 5 = completely agree), and a total score is the average across all 34 items.

Validation drew on 341 North American adults recruited through Qualtrics and Prolific, all aged 18 or over, after removing non-consenting respondents and attention-check failures. The dataset was randomly halved: EFA on n = 171 in JASP 0.95.4 used minimum-residual extraction with oblique Promax rotation, parallel analysis for factor retention and a .50 loading cut-off; CFA on n = 170 tested the retained structure. [[quantitative-research]] of this kind trades breadth for depth of evidence about the instrument rather than about GenAI learning itself, and the paper is explicit that the sequence (item generation, expert review, pilot, EFA, CFA, invariance) followed established [[assessment-validity]] practice.

## Measurement invariance: what the tests license

The invariance analyses, run with the WLSMV estimator in the lavaan package (R 4.4.1), are the part of the paper with the fewest precedents in GenAI measurement. Four groups were examined separately — 162 male and 179 female respondents for sex, and 210 workforce against 131 student respondents for occupational status, with freelancers merged into the workforce group because n = 68 was too small to model. Within-group fit was good in every case. Imposing equality constraints on loadings (metric) and then on thresholds (scalar) produced changes well inside the ΔCFI < .010 and ΔRMSEA < .015 thresholds, so the same factor structure, loadings and item thresholds describe all groups.

That result is what makes the reported mean differences interpretable rather than artefacts of differential item functioning. Males' small advantage on Adaptive Operational Skills, and students' larger advantages on Adaptive Operational Skills and Responsible GenAI Literacy, can be read as competence differences, though the paper offers contextual readings rather than causal ones: the documented gender gap in GenAI adoption (Otis et al., 2024; Aldasoro et al., 2024) for the sex difference, and students' structured exposure to institutional guidance and integrity rules against a Canadian workforce where many employees learn alone or receive no training (Future Skills Center, 2024) for the occupational one. Practically, invariance is what lets a programme, institution or survey compare a [[higher-ed]] cohort against [[professional-training]] participants, or monitor the [[equity-in-ai-education]] gap it hypothesised, without measurement bias confounding the comparison. It is also the evidence that the instrument is not student-only.

## How the scale is used and scored

In use the GAILS is a 34-item self-report instrument, administrable in one sitting, scored as a mean across items with higher values indicating greater GenAI literacy; the three subscales can be reported separately because each represents a coherent cluster of items and each carries its own reliability. The three-factor scoring reflects what the data, not the original theory, support: operational adaptation subsumes both declarative knowledge about GenAI and hands-on task performance, Responsible GenAI Literacy captures legal and ethical awareness and compliance, and the five-item Critical Evaluation & Autonomous Use factor captures verification, bias recognition and the capacity to work without leaning on GenAI.

Two validity exercises support that reading. Construct validity rests on correlations with [[technology-acceptance-model]] constructs: literacy is conceptually separate from GenAI acceptance (willingness to adopt) and [[trust]] (perceived reliability), yet the total score tracks acceptance strongly and trust moderately, consistent with trust functioning as a determinant of adoption. The semantic-embedding exercise, using sentence embeddings, cosine similarity, Leiden community detection and t-SNE, found Responsible GenAI Literacy semantically isolated while Critical Evaluation & Autonomous Use nested inside the operational space, which the authors read as [[evaluative-judgement|evaluative judgement]] being an advanced application of [[prompt-engineering]]-era operational skill rather than a separate mental silo. Because Factor 1 and Factor 3 also overlap statistically (√AVE .828 versus r = .873, failing Fornell–Larcker), the paper retains all items and reports the three factors as related, not orthogonal, dimensions of [[critical-thinking]] in GenAI use.

## Limitations

The evidence base is narrow in ways the authors acknowledge and in ways the design implies. The sample is North American adults only, and they call for validation across cultures, ethnicities, languages and socio-economic strata; children and adolescents are absent, so no developmental comparison is possible. Construct validity is limited to GenAI trust and acceptance, leaving the nomological network thin relative to the construct's breadth, and they propose adding frequency of use, information-verification and privacy-protection behaviours. With N = 341 against 34 items, subgroup power was marginal: the freelancer group had to be collapsed into the workforce, and the imbalanced age distribution left empty response categories for some items within some age groups and blocked any ethnicity analysis.

The deeper limitation is the response format. The GAILS measures perceived competence — what people believe they can do — and the paper provides no behavioural or objective criterion against which those perceptions were checked, so over- or under-estimation is invisible in its validities, all of which are correlations with other self-reports. The fit evidence is also mixed, with RMSEA above the stated acceptable cutoff, and the manuscript's participant narrative and demographic table disagree slightly on the student count (130 versus 131) and on whether workforce means employed plus freelancers. As with all [[self-report-measures]], high reliability and clean factor structure establish internal coherence, not accuracy, and the authors are careful to frame the scale as a tool for identifying gaps and targeting support rather than for certifying capability.

## Connected Concepts

- [[ai-literacy]] — the parent construct the GAILS extends with interactional, generative competencies
- [[generative-ai]] — the tool family the scale is built to measure competence with
- [[educational-measurement]] — the EFA, CFA, reliability and invariance framework the validation uses
- [[assessment-validity]] — convergent, discriminant and cross-group validity as the paper's evidence standard
- [[self-report-measures]] — the response format and the central limitation on what the scores mean
- [[trust]] — the moderate construct-validity correlate (r = 0.473 with the total score)
- [[technology-acceptance-model]] — the adoption framework motivating the GenAI acceptance correlate
- [[prompt-engineering]] — the interactional competence at the core of Adaptive Operational Skills
- [[ethics]] — the responsible-use domain the Responsible GenAI Literacy factor operationalises
- [[privacy]] — one of the legal and data-protection concerns carried in the responsible item set
- [[critical-thinking]] — evaluation and autonomous use treated as a higher-order GenAI competence
- [[adult-learning]] — the workforce and adult sample the instrument was validated to serve

## Connected Articles

- [[competent-generative-ai-use-measures-review-2026]] — review and exploratory meta-analysis of measures for competent generative-AI use
- [[genai-assessment-literacy-scale-2026]] — a neighbouring GenAI literacy scale developed for higher education students
- [[ai-literacy-measurement-conceptual-landscape-llm-2026]] — mapping how AI literacy is conceptualised and measured across instruments
- [[ai-literacy-assessment-misalignment]] — self-reported versus performance evidence for AI literacy
- [[questionnaire-teachers-genai-uses-validation-2026]] — another GenAI-use instrument taken through design and validation
- [[air-scale-motivations-ai-reading-2026]] — development and validation of a measure of motivations for AI use
- [[ai-literacy-course-satisfaction-pbl-scale-2026]] — scale development linking AI literacy, ethics and project-based learning
- [[xiong-ai-educational-measurement-review-2026]] — a decade of AI's impact on educational measurement, reviewed
- [[llm-psychometric-calibration-cdp]] — psychometric calibration with LLM-simulated examinees

## Citation

Zhang, Y., Qi, J., He, X., Feng, Z., & Ji, F. (2026). [*The Generative Artificial Intelligence Literacy Scale (GAILS): Development, Validation, and Measurement Invariance Across Sex and Occupational Status Groups*](https://osf.io/preprints/psyarxiv/bg6pq_v2) (preprint). Department of Applied Psychology and Human Development, University of Toronto.
