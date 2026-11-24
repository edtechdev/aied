---
title: "Operational gains without detectable critical change: measurement lessons from a pilot study with a generative artificial intelligence assistant in higher education"
created: "2026-11-24T10:25:00-05:00"
updated: "2026-11-24T10:25:00-05:00"
type: article
authors: ["Anonymous"]
venue: "EdArXiv preprint"
evidence_context: educational
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [generative-ai]
assessment: [self-report-measures, educational-measurement, assessment-validity]
methods: [quantitative-research]
discipline: [learning sciences]
level: [higher ed, undergraduate]
audience: [researchers, instructors, assessment designers, administrators]
page_kind: [evaluation]
research_method: [survey]
sources: ["raw/papers/operational-gains-critical-change-chatgpt-assistant-higher-ed-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** This anonymized pilot study (2026) follows first-year students at a Chilean university through a Critical Thinking course in which a ChatGPT-based personalized assistant supported independent work, and reports how a [[self-report-measures|self-perception questionnaire]] behaved. Operational digital literacy, measured by a four-action checklist, rose at the cohort level (+0.37 actions, p = .006; mean 3.03 to 3.40), with the artificial-intelligence action reaching 100% endorsement after seven students added it. Critical digital literacy, measured by nine Likert items, showed no detectable change (+0.36 on a 3–15 core, 95% CI [−0.24, 0.96]). Scores at the two administrations were nearly uncorrelated, so the results are read as cohort-level shifts rather than individual learning gains, and students who did not return had lower initial scores. The contribution is methodological: a demonstration that an intervention can show a gain on one literacy measure while the instrument intended to capture deeper change remains unmoved.

*Pilot pre–post design in a first-year Critical Thinking course at Universidad de los Andes, Chile. A self-perception questionnaire was administered in April and June 2025 to 135 and 93 students respectively, yielding 92 matched pairs. Analyses included exact McNemar tests, paired Wilcoxon signed-rank tests, Wilson confidence intervals, and sensitivity checks.*

## Key Findings

- **Operational literacy rose.** The four-action index increased from a mean of 3.03 to 3.40, a shift of +0.37 actions (95% CI [+0.10, +0.64]; Wilcoxon p = .006; dz = 0.29), driven by more students reporting they could search and share information online, manage cloud documents, and use AI tools.
- **The AI action reached everyone.** Endorsement of using artificial intelligence tools reached 100%: seven students added it between administrations and none withdrew it.
- **Critical literacy did not move detectably.** The three-item information-search self-efficacy core shifted from 11.79 to 12.15 on a 3–15 range (+0.36; 95% CI [−0.24, +0.96]; Wilcoxon p = .150; dz = 0.12), and alternative composites ranged from dz = 0.03 to 0.08.
- **One subdimension moved in the same direction but not robustly.** Collaboration through digital technologies rose by 0.25 scale points (unadjusted p = .020; Holm-adjusted p = .120) and moved the same way in every sensitivity cell.
- **Test–retest stability was essentially absent.** Correlations across administrations were +.09 for the core, −.02 for the nine-item total, −.13 for the operational index, and a mean per-item ρ of .00; one item held at 52% endorsement at both time points while 48 of 92 students changed their answer, 24 in each direction.
- **Attrition was structural.** Every medical student returned while all 43 non-returners came from four of the other seven disciplines, raising medicine's share from 49% of April respondents to 72% of the paired sample, and non-returners had lower initial scores on both dimensions.

## What the two literacy measures captured

The study separates operational digital literacy — knowing how to perform specific actions — from critical digital literacy, which covers evaluative and self-regulatory capacities such as information-search self-efficacy, digital collaboration, reflection and improvement, planning and evaluation of one's own learning, and review of digital resources. The distinction is the point. An assistant embedded in a course plausibly changes what students know how to do, and the checklist detected exactly that. Whether it changes how they judge and regulate their own digital activity is a different question, and the Likert instrument found no movement.

The authors lean on the null rather than around it. They test alternative composites, remove repeat submitters and straight-line responders, and report that no specification overturns the null. They also report the power floor: with 92 pairs at α = .05, 80% power corresponds to about dz = 0.29, which is where the operational effect sits, leaving no margin for smaller effects and making any detected effect at that floor likely to overstate the true change.

## Why the instability matters

The most consequential finding is not either mean but the near-zero correlation between the two administrations. If a questionnaire intended to measure an individual's literacy produces unrelated scores two months apart, then pre–post change scores on it describe cohort-level shifts rather than individual growth. The authors illustrate the mechanism with one item: endorsement of "use of MS Office tools" was identical at both administrations, yet almost half the students reversed their answer, in both directions. That is noise, not learning.

This reframes the whole pilot. The operational gain is real in the sense that more students reported knowing how to do more things, but the instrument cannot say which individuals gained or whether the gain persisted. For [[educational-measurement|measurement practice]], the implication is that self-report checklists and multi-item scales need evidence of test–retest stability before they are used to evaluate interventions. [[assessment-validity|Validity]] claims should rest on stability, not only on content coverage.

The attrition pattern compounds the problem. Because non-returners started lower, the paired sample is a selected group; the authors are explicit that paired estimates are unbiased for completers but limited in how far they generalize. Combined with a design that cannot rule out maturation, repeated measurement, concurrent coursework, regression to the mean, or demand characteristics, the study offers a disciplined account of what a small pilot can and cannot claim.

## What this means for practice

- **Instructors.** Do not read a rise in students' self-reported capability as evidence of deeper critical literacy. Ask separately what learners can do and how they judge what they find.
- **Assessment designers.** Establish test–retest stability for any literacy instrument before using it to measure change; a scale whose scores correlate at zero across two months cannot support individual gain claims.
- **Researchers.** Report power floors and attrition composition. A small pilot that detects an effect only at its minimum detectable size should be described as a signal, not an estimate.
- **Administrators.** Treat embedded AI assistants as capable of changing operational habits quickly; the harder question of critical judgment needs separate, longer measurement.

## Limitations

- The design is a single-group pre–post pilot with 92 matched pairs, so maturation, repeated measurement, concurrent coursework, regression to the mean, and demand characteristics cannot be ruled out.
- The questionnaire's test–retest correlations are essentially zero, which undermines individual-level interpretation and may reflect measurement error rather than genuine change.
- Power is thin: 80% power at 92 pairs corresponds to dz = 0.29, and the operational effect sits at that floor.
- Attrition was structural rather than random; all non-returners came from four of seven non-medicine disciplines, and they had lower baseline scores on both dimensions.
- The intervention was integrated into one course with one assistant, so the findings speak to that setting and instrument rather than to generative AI in higher education generally.
- The manuscript is anonymized, and the data are not publicly available under the approved ethics protocol, which limits independent verification.

## Citation

Anonymous. (2026). [Operational gains without detectable critical change: measurement lessons from a pilot study with a generative artificial intelligence assistant in higher education](https://osf.io/preprints/edarxiv/ztdj6_v1/). *EdArXiv preprint.*
