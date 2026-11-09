---
title: "Generative AI literacy and administrative staff's innovative work behavior: the context of vocational colleges in Northeastern China"
created: "2026-11-09T09:05:00-05:00"
updated: "2026-11-09T09:05:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey]
evidence_context: educational
level: [higher ed]
audience: [administrators, faculty developers]
sources: ['raw/papers/zhao-genai-literacy-administrative-work-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1891298"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy]
pedagogy: []
technology: [generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
institutions: [change-management]
ethics: []
---

> **Synthesis:** Zhao, Jiang, Phakdeephirot, Numtong and Wang (2026) surveyed 765 administrative staff at [[vocational-education|vocational colleges]] in Liaoning, Jilin and Heilongjiang to ask whether [[ai-literacy|generative AI literacy]] relates to their innovative work behavior. The population matters: respondents were non-academic administrators in academic affairs, student services, finance, human resources and related offices, not teachers or students, so nothing here describes classroom practice. The instrument split literacy into five dimensions (basic operational skills, prompt engineering, quality evaluation, innovative application, and compliance and ethical awareness) and modeled two parallel pathways, perceived dynamic capabilities and AI knowledge-sharing participation, plus moderation by organizational structure. All five dimensions were positively associated with the outcome, with standardized direct estimates from 0.102 to 0.200. Indirect estimates ranged from 0.025 to 0.040 through dynamic capabilities and from 0.041 to 0.059 through knowledge sharing, all with 95% confidence intervals excluding zero. A separate composite-score regression found that organizational structure positively moderated all five associations. The data are cross-sectional and [[self-report-measures|self-reported]], so the paper reports associations, not effects.

## Key Findings

1. **All five literacy dimensions were positively associated with innovative work behavior.** Standardized direct estimates ran from β = 0.102 for basic operational skills to β = 0.200 for innovative application ability, and every path was significant (p ≤ .012).
2. **Different dimensions led different paths.** Quality evaluation ability had the largest estimate toward perceived dynamic capabilities (β = 0.238), prompt engineering toward AI knowledge-sharing participation (β = 0.228), and innovative application toward behavior (β = 0.200).
3. **Both intermediate constructs were associated with the outcome.** Perceived dynamic capabilities reached innovative work behavior at β = 0.168 and AI knowledge-sharing participation at β = 0.259.
4. **Indirect estimates were small but consistent.** Across 5,000 bootstrap resamples, standardized indirect effects ranged from 0.025 to 0.040 through dynamic capabilities and from 0.041 to 0.059 through knowledge sharing; all 95% bias-corrected intervals excluded zero.
5. **Organizational structure moderated all five associations.** Coefficients ran from B = 0.087 (innovative application) to B = 0.156 (prompt engineering), p ≤ .015, and slopes were nonsignificant one standard deviation below the structure mean.
6. **The sample was 765 administrative staff in 15 colleges.** Screening 832 submissions removed 18 ineligible respondents, 21 with over 20% missing responses, 12 duplicates and 16 straight-line or fast completions; no response rate could be calculated.

## What the model tests

The questionnaire adapted existing scales rather than building new ones: 17 items for the five literacy dimensions from Liu et al. (2025), 15 for perceived dynamic capabilities from Kump et al. (2018), 7 for AI knowledge-sharing participation from Zhao et al. (2021), 9 for organizational structure from Chen and Chang (2012), and 22 for innovative work behavior from Gkontelos et al. (2022), all on five-point Likert scales. Three theories carry separate parts of the model rather than one merged framework: dynamic capabilities theory for the perceived-adaptability pathway, the knowledge-based view for knowledge circulation, and sociotechnical systems theory for the structural boundary condition. The authors stress that both organizational constructs are respondent perceptions, and that the outcome is self-reported idea generation, promotion, realization and sustainability rather than objective productivity. They position the work against a literature concentrated on teaching and [[teacher-ai-competency|teacher AI competency]], leaving administrative processes unstudied.

## Direct, indirect, and conditional estimates

The structural model fit well: χ²/df = 1.343, RMR = 0.040, RMSEA = 0.021, and CFI, TLI, GFI, AGFI, NFI and IFI all above 0.90. Measurement held at the dimension level, with Cronbach's alpha from 0.793 to 0.904, composite reliability from 0.797 to 0.905, and average variance extracted from 0.552 to 0.704. All 17 direct paths stayed positive and significant under CR2 cluster-robust standard errors (p ≤ .041), and all five interactions held (p ≤ .028). The indirect estimates are modest, and the authors decline to rank the pathways: knowledge-sharing estimates were generally larger, but no test of the difference was performed. They also omit total-effect and mediated-proportion statistics because the unrounded software output was unavailable, and they call the coefficient rankings descriptive. Every indirect estimate is a cross-sectional association, not evidence that either construct transmits an effect over time.

## Reading the moderation result

Organizational structure combined nine items covering formalization and centralization, and no centralization item was reverse-coded, so higher scores meant higher perceived formalization and centralization together. The composite interacted positively with every literacy dimension, strongest for prompt engineering (B = 0.156) and weakest for innovative application (B = 0.087). At one standard deviation below the mean the literacy-behavior slopes were nonsignificant; at the mean and one standard deviation above they were significant, with Johnson–Neyman thresholds between −0.905 and −0.369 standard deviations. Because the score merges two components, the result cannot show which drives the moderation, and the authors say it is not a case for increasing centralization. Their narrower reading is procedural clarity plus preserved discretion. Two design limits: composite scores leave measurement error in the product terms unmodeled, and the regression excluded both mediators, so the interactions do not describe moderation of the SEM's mediator-adjusted paths.

## What this means for practice

- **Administrators.** Treat the five dimensions as separate professional-development targets rather than one AI training block: reliable use, prompt design, output verification, workflow application, and compliance.
- **Administrators.** Build the sharing infrastructure the second pathway describes: shared prompt and case repositories, output-evaluation guidance, cross-departmental learning, and responsible-use protocols.
- **Faculty developers.** Weight prompt engineering and output verification: prompt engineering had the largest estimate toward knowledge sharing (β = 0.228), quality evaluation the largest toward perceived adaptability (β = 0.238).
- **Institutional leaders.** Do not read the positive structure interaction as a case for centralizing decisions: the authors' reading is procedural clarity plus preserved discretion, and the composite cannot separate the two components.

## Limitations

- The design is cross-sectional and single-source, so temporal order is unknown; staff who already innovate may subsequently build stronger AI literacy and share more.
- The convenience sample covers 15 vocational colleges, five per province, recruited for accessibility and willingness, so regional representativeness is not supported.
- All constructs are self-reported at one time point. Harman's test put the first factor at 27.1% of variance and the single-factor CFA fit poorly (CFI = 0.424), which the authors treat as evidence only that one factor did not dominate.
- Demographic, institutional and AI-use variables were not entered as controls, so differences tied to use frequency, position, department or institution type remain unadjusted.
- Organizational structure was modeled as a higher-order formalization-centralization composite, so component effects are not identified; 15 colleges are too few for a multilevel model.

## Citation

Zhao, L., Jiang, S., Phakdeephirot, N., Numtong, K., & Wang, H. (2026). [*Generative AI literacy and administrative staff's innovative work behavior: The context of vocational colleges in Northeastern China*](https://doi.org/10.3389/feduc.2026.1891298). *Frontiers in Education, 11*, Article 1891298.
