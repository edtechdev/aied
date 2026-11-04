---
title: "Generative artificial intelligence reshapes university students’ sustainable use of academic information resources: mixed evidence from behavioral logs and perceptual survey data"
created: "2026-11-04T15:00:00-05:00"
updated: "2026-11-04T15:00:00-05:00"
type: article
sources: ['raw/papers/huang-genai-academic-information-resources-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey, longitudinal study]
discipline: [library and information science]
level: [higher ed, undergraduate, graduate]
audience: [librarians, administrators, researchers]
technology: [generative-ai, learning-analytics]
foundations: [ai-literacy, academic-integrity]
pedagogy: [self-regulated-learning]
methods: [mixed-methods-research]
assessment: [self-report-measures]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** One Chinese university paired 368 student questionnaires with a nine-year record of 3.2 million print-loan transactions and platform statistics for its digital library. The survey found that [[generative-ai|substitutive GenAI use]] — having AI write whole passages — was weakly negatively associated with intention to keep using print, β = −0.100. The loan logs found no level or trend change at the January 2023 breakpoint. Students' [[self-report-measures|self-reports]] and their borrowing behavior told different stories, and the paper is most useful read as a study of that gap.

## Key Findings

1. The design is a convergent [[mixed-methods-research|triangulation]]: 368 valid questionnaires collected in 2026, roughly 3.2 million print-loan records covering 2017–2025, and digital-platform usage statistics from 2021 through the first half of 2026. The three sources were analyzed independently and compared only at the interpretation stage.
2. Respondents could not be linked to the logs under the institution's data-governance rules, so the behavioral data corroborate the research propositions in aggregate and cannot validate individual-level structural paths.
3. Annual print loans fell from 406,120 in 2017 to 46,339 in 2025; unique borrowers fell from 30,033 to 7,278, and loans per borrower from 13.5 to 6.4.
4. The interrupted time-series model (107 months) put the baseline decline at 535.6 books per month before GenAI existed, *p* < 0.001. The pandemic breakpoint produced a level change of −9,248.8, *p* = 0.001, and a slope change of 511.3, *p* = 0.004.
5. At the January 2023 GenAI breakpoint the level change was 1,167.4, *p* = 0.504, and the slope change −159.6, *p* = 0.300. Re-estimating with March 2023, September 2023 and January 2025 as breakpoints left both estimates non-significant.
6. In the survey, deep-reading demand predicted print continuance intention at β = 0.908, 95% CI [0.756, 1.136], *f*² = 0.949. Auxiliary GenAI use predicted digital continuance intention at β = 0.844, 95% CI [0.652, 1.026], *f*² = 0.490, but not print continuance intention, β = 0.038, *p* = 0.631.
7. Substitutive use was negatively associated with print continuance intention, β = −0.100, *p* = 0.024, *f*² = 0.104, and unrelated to digital continuance intention, β = −0.030, *p* = 0.470. Task–channel fit did not moderate anything, β = 0.053, *p* = 0.473.
8. Platform-embedded AI features recorded 326,449 operations in 2025, 0.10% of the total, and 766,246 in the first half of 2026, 0.53%, while traditional operations rose from 279,834,736 in 2021 to 317,332,412 in 2025.

## A divergence the design was built to find

The paper's contribution is not a number but a comparison. Two bodies of evidence were collected for the same propositions and kept apart until the end. Table 10 sets them side by side across four claims: that AI substitutes for digital resources, that AI substitutes for print, that digital and AI channels are integrating, and that print retains a logic of persistence. The pattern is consistent. Where the survey saw substitution of print, the logs saw nothing. Where the survey saw digital–AI integration, the platform saw embedded features that almost nobody used.

That separation is a methodological argument about [[higher-ed|higher education]] research. Almost all of the existing evidence on whether students are abandoning library resources for [[conversational-ai|chatbots]] comes from cross-sectional questionnaires, which cannot distinguish a change in attitude from a change in behavior. Logs can, but only at the level of the institution, and only for the behavior the library happens to record. Neither source settles the question alone.

Reading the divergence is therefore the analytic task the reader has to do, and the authors are explicit that the comparison is proposition-level. A survey path and a monthly loan series are not two measurements of one quantity. They are two descriptions of an ecosystem, taken from different heights.

## Why substitution did not reach the circulation desk

The authors offer two explanations, and they are not equally comfortable. The first is social desirability and an attitude–behavior gap: students may overstate how much AI has changed what they actually do. The second is a time lag, in which attitudes move before aggregate behavior and micro-level substitution has not yet accumulated into a visible institutional trend.

The trend data make the second explanation harder to lean on and easier to specify. Print borrowing was already collapsing before ChatGPT existed. The fitted baseline decline of 535.6 loans per month describes a decade-long retreat that no AI narrative explains. The pandemic then cut the level sharply, −9,248.8 loans, and the recovery slope, 511.3 per month, only slowed the fall. The 2025 total, 46,339, sits far below the 2024 total of 80,027 even though the fitted slope change after 2023 was not statistically significant. A single year can sit inside the noise a segmented model absorbs, but it is the number to watch if the lag hypothesis is to be tested rather than asserted.

The digital side is a different shape. AI-feature operations existed only from 2025, and their share, 0.10% then 0.53%, is consistent with a new functional layer being adopted inside an existing platform rather than displacing it. Traditional operations never fell; they rose. At the platform level, this looks less like substitution and more like a channel added on top of a channel.

## Reading the survey paths for what they are

The [[educational-measurement|measurement]] section is unusually candid, and it changes how the digital-channel numbers should be read. Perceived convenience of digital resources and auxiliary GenAI use correlated at HTMT = 0.968, with a bootstrap interval of [0.912, 1.015]. The Fornell–Larcker criterion failed for the pair, and the first factor in Harman's test explained 64.4% of the variance. The authors say plainly that this sample did not empirically distinguish the two constructs.

The consequence is that β = 0.993 for the convenience-to-auxiliary-use path, and the indirect association of 0.838 through it, measure overlap as much as mechanism. R² = 0.986 for auxiliary use is a symptom rather than a finding. Four constructs — substitutive use, task–channel fit, and both continuance intentions — were measured with single items, so the H4 to H7 paths describe specific behaviors and intentions rather than validated constructs. The structural model itself fits well, χ² = 119.581 on 54 degrees of freedom, CFI = 0.981, RMSEA = 0.058, but fit does not repair [[assessment-validity|discriminant validity]].

What survives this scrutiny is the print side, where the constructs separate cleanly. Deep-reading demand is associated with wanting to keep using print at β = 0.908 with a large effect size, and substitutive use is associated with a small reduction at β = −0.100. That is a coherent story about what print is for: sustained reading that a generated paragraph does not replace. It is also the story the [[self-regulated-learning|resource-selection]] framing predicts, with [[cognitive-offloading|cognitive offloading]] explaining why auxiliary use supports existing channels while content generation bypasses them.

The one substantive puzzle is that [[ai-literacy|AI literacy]] never enters the model. The authors recommend it as a practical response and as a variable for future work, and the distinction between auxiliary and substitutive use is exactly the kind of judgment an [[academic-integrity|integrity]]-oriented literacy [[curriculum-design|curriculum]] would have to teach. The data here can separate the two behaviors in a questionnaire but cannot say whether students know the difference.

## What this means for practice

- **[[librarians|Librarians]].** Do not plan collections around an AI-replacement scenario the logs do not show. Print demand is falling, but it is falling on a trend that started before GenAI, and 7,278 borrowers still took out 6.4 books each in 2025. The case for print space rests on the deep-reading association, not on defending a share.
- **Library and platform managers.** Treat embedded AI features as an evaluation criterion, not yet as a service. At 0.53% of platform operations, the features are a trial layer; instrumenting them properly now is cheaper than retrofitting analytics later.
- **Teaching and integrity staff.** Target the auxiliary/substitutive boundary explicitly. The survey's one significant negative association with print attaches to generating whole passages, so guidance that distinguishes "use AI to find and understand" from "use AI to produce" maps onto the only substitution signal the study found.
- **Researchers and institutional analysts.** Do not substitute a survey for a log, or a log for a survey. This design's value came from collecting both, analyzing them separately, and reporting where they disagreed instead of reconciling them into one story.

## Limitations

- Single institution: one research-intensive Chinese university and its own resource environment, so parameter estimates are not benchmarks for other libraries.
- The survey is cross-sectional and observational; every path is an association, and omitted-variable bias cannot be excluded because student status and discipline were collected but not entered as covariates.
- Perceived convenience of digital resources and auxiliary GenAI use failed discriminant validity, HTMT = 0.968, and common method bias cannot be ruled out at 64.4% first-factor variance, so the digital-channel paths are within-channel associations rather than mechanisms.
- Four constructs were single-item measures, which limits any claim about their reliability and validity.
- The behavioral data are aggregate records that cannot be linked to individual respondents, so the two evidence streams are compared at the level of propositions, not people.
- The observation window contains the COVID-19 pandemic and its aftermath; the model includes an explicit pandemic interruption, but concurrent policy changes cannot be fully excluded, and January 2023 is a prespecified analytical breakpoint for early GenAI diffusion rather than a measured adoption date.

## Citation

Huang, Z., Song, X., Zhuang, J., & Xiao, S. (2026). [Generative artificial intelligence reshapes university students’ sustainable use of academic information resources: mixed evidence from behavioral logs and perceptual survey data](https://doi.org/10.3389/fpsyg.2026.2002741). *Frontiers in Psychology, 17*, 2002741.
