---
title: "Improving AI-assisted grading reliability through explicit rubric and prompt engineering"
created: "2026-11-20T09:15:00-05:00"
updated: "2026-11-20T09:15:00-05:00"
type: article
pedagogy: []
technology: [generative-ai, llm, prompt-engineering]
assessment: [automated-assessment, assessment-validity]
methods: [quantitative-research]
discipline: [engineering education]
level: [graduate]
audience: [instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/deepshikha-ai-grading-rubric-prompt-engineering-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1968847"
source_depth: full text
confidence: medium
evidence_context: educational
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-20"
    agent: hermes-agent
---

> **Synthesis:** Deepshikha and Singh (2026) asked whether the way [[assessment|assessment criteria]] are specified, rather than the capability of the model, drives the disagreement that appears when [[llm|large language models]] mark student work. They re-marked the complete cohort of 40 [[graduate-education|graduate]] [[engineering-education|engineering]] laboratory reports on electrochemical energy storage with GPT-5 in two configurations: an original [[rubrics|rubric]] and prompt permitting implicit inference and compensatory partial credit, then a revised rubric and zero-assumption prompt that quantified error hierarchies and restricted credit to demonstrated evidence. Agreement with the single educator reference improved on every measure reported: the intraclass correlation rose from 0.818 to 0.928, the mean AI-educator difference fell from +1.625 to +1.041 marks, and reports differing by more than 10 marks dropped from four to none. The same model, marking the same scripts, produced tighter agreement once the rules were explicit. The authors are careful: rubric and prompt changed together, calibration drew on discrepancies in the same 40 reports, and one marker supplied the reference, so the finding supports in-sample concordance, not validity.

## Key Findings

- **Explicit rules drove the gain, not model capability.** The same GPT-5 configuration raised absolute agreement from ICC(2,1) = 0.818 to 0.928 after the rubric and prompt were rewritten; scripts were unchanged.
- **Bias and case-level scatter both fell.** The mean AI-educator difference narrowed from +1.625 to +1.041 marks, and the SD of the 40 paired differences contracted from 6.531 to 4.368 marks.
- **Large errors disappeared.** Four pre-calibration reports exceeded a 10-mark gap (EC02 at −18, EC10 and EC12 at +16, EC16 at +18); afterwards none did, the largest gap 8 marks.
- **Rank ordering tightened too.** The model reproduced the educator's ordering, not only mark levels.
- **Proportional bias resolved.** Differences correlated with score level before calibration but not after, matching the convergence in dispersion.
- **Penalties were quantified.** Calculation errors drew −20% to −40%, incorrect formulas at least −50%, missing components zero marks, and comparative claims without numerical support were capped at ≤40%.

## What the pre-calibration run revealed

The [[automated-assessment|automated grading]] configuration paired a criterion-referenced rubric with qualitative descriptors and a standing instruction to apply high academic standards, leaving room for implicit inference and compensatory partial credit. On the surface it worked: Pearson's r was 0.838, Spearman's ρ 0.789, and ICC(2,1) 0.818. The failure sat in the tail. Four of 40 reports diverged by more than 10 marks — one 18 marks below the educator, three between 16 and 18 above — and the 95% limits of agreement ran from −11.175 to +14.425 marks. A Bland–Altman check found proportional bias: paired differences correlated with score level at r = −0.337 (p = 0.033), so the model was lenient at the bottom and severe at the top, coinciding with a compressed AI distribution (SD 9.866 against 11.978).

## How the rubric and prompt were recalibrated

Calibration targets came from a qualitative reading of the discrepant cases. The authors made calculation-validity rules explicit, so invalid units, inconsistent derivations, or implausible values left uncorrected could trigger caps and could not be offset by a correct formula. Bands were tightened around the pass boundary, higher partial-credit bands requiring internally consistent calculations. Mandatory outcomes such as the LED series calculation and the energy and power density derivation could not be recovered elsewhere. Conceptual understanding was separated from procedural documentation, so valid reasoning earned credit even when arithmetic was incomplete, and conflicting evidence was flagged rather than averaged. These targets produced the zero-assumption [[prompt-engineering|marking prompt]]: calculation errors −20% to −40%, incorrect formulas at least −50%, missing components zero.

## What changed, and what stayed constant

Task, outcomes, scripts, and educator marks were held fixed, so the comparison is between two specifications applied to identical work. Absolute agreement rose from ICC(2,1) = 0.818 to 0.928 and rank agreement from ρ = 0.789 to 0.902. The mean difference narrowed from +1.625 to +1.041 marks, and the spread of the 40 paired differences contracted from 6.531 to 4.368, the more informative change: average bias was small, but case-level scatter was not; Cohen's dz barely moved (0.249 to 0.238). Limits of agreement tightened to −7.519 to +9.602, and the calibrated distribution came closer to the educator's (SD 11.327 against 11.978). Before calibration, dropping four reports had raised ICC to 0.904; afterwards none met the threshold.

## Agreement is not validity

The authors are explicit that none of this establishes [[assessment-validity|validity]]. Agreement was computed against one educator's marks and no second marker was available, so the reliability of the human reference could not be estimated. Calibration targets were derived from the same 40 reports later used for evaluation, making the post-calibration figures in-sample and possibly fitted to this dataset. Rubric and prompt changed together, so the design cannot separate error hierarchies, band anchors, evidence rules, and the zero-assumption instruction. And although no gap exceeded 10 marks, several reports still differed by more than 5, which matters for a student on a pass or progression boundary. The defensible claim is narrower than the headline: explicit specification improved concordance with one marker's pattern, in one STEM module.

## What this means for practice

- **Instructors.** Write the error hierarchy before the first [[generative-ai|GenAI]] run — percentage penalties for calculation and formula errors, zero for missing components — rather than asking a model to apply high standards and infer your thresholds.
- **Instructors.** Award credit only for reasoning explicitly demonstrated, and forbid inferring missing steps; that combination removed the four reports that had drifted by more than 10.
- **Administrators.** Fund educator time for rubric and prompt calibration as assessment-design work; model choice changed nothing here, since one GPT-5 configuration produced both results.
- **Learning designers.** Send cases near a threshold, cases with gaps above 5 marks, and cases with conflicting evidence to an educator, since aggregate agreement does not protect a student at a boundary.

## Limitations

- One module, one cohort of 40 reports, one AI system, and one educator marker; model dependence is untested because only GPT-5 was evaluated.
- Calibration targets came from the same 40 reports used for post-calibration evaluation, so the improvement is in-sample and may reflect fitting to this dataset.
- No second independent marker was available, so the educator reference's own reliability could not be estimated and interchangeability between AI and human judgment remains unestablished.
- Each report was marked once per condition, so model stochasticity is unmeasured; the study assessed agreement, not whether marks validly represent intended outcomes.

## Citation

Deepshikha, D., & Singh, N. (2026). [*Improving AI-assisted grading reliability through explicit rubric and prompt engineering*](https://doi.org/10.3389/feduc.2026.1968847). Frontiers in Education, 11, 1968847.
