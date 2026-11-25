---
title: "The relationship between LLM usage and critical thinking among college students: the mediating role of task assessment"
created: "2026-11-25T09:16:00-05:00"
updated: "2026-11-25T09:16:00-05:00"
published: "2026-11-24"
type: article
authors: ["Tao Qu", "Ruizhe Chen"]
venue: "Frontiers in Psychology, 17"
evidence_context: educational
foundations: [critical-thinking, cognitive-offloading]
pedagogy: [self-regulated-learning, motivation, student-ai-interaction]
technology: [llm, generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
level: [higher ed, undergraduate]
audience: [instructors, researchers, administrators]
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
sources: ["raw/papers/qu-llm-usage-critical-thinking-task-assessment-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Qu and Chen (2026) separate two ways college students use [[llm|large language models]] — explanatory use, where the model is a scaffold for understanding, and generative use, where it supplies the work product — and ask how each relates to [[critical-thinking]] through the value and cost students assign to their academic tasks. Surveying 517 [[higher-ed|college]] students across five tiers of Chinese higher education, they find a clear split. Explanatory use was strongly associated with higher task value and, through it, with higher critical thinking; generative use raised perceived cost sharply and had no detectable total association with critical thinking, because a small positive route through task value and a negative route through task cost canceled each other out. The finding that cuts against the [[cognitive-offloading|offloading]] intuition is the direction of the cost effect: handing work to a model did not reduce the burden students felt, it moved the burden to prompting, checking and reconciling output.

## Key Findings
- **Explanatory use was associated with critical thinking, directly and through task value.** Task value carried more than half of the total association, which was substantial in a cross-sectional model.
- **Generative use had no detectable total association with critical thinking.** A small positive path through task value and a negative path through task cost offset one another.
- **Generative use raised perceived task cost rather than lowering it.** The strongest path from generative use in the model ran to cost, contradicting the expectation that delegating work relieves cognitive demand.
- **Explanatory use left cost untouched.** The path from explanatory use to task cost was negligible and non-significant, suggesting the clarity gained offset the extra effort.
- **Value, not cost, carried the association with critical thinking.** Task cost had only a small negative direct association with critical thinking and was essentially uncorrelated with it overall.
- **The two usage patterns were only weakly related.** Students can be high on both, low on both, or high on one and low on the other, which is why the study treats them as separate dimensions rather than a single scale of AI use.

## The model and what it tested

The study adapts scales for explanatory use, generative use, task value, task cost and critical thinking, with acceptable internal consistency (α from 0.70 to 0.80) and a five-factor confirmatory model showing acceptable absolute fit. Structural equation modeling with 5,000 bootstrap resamples tested the mediation, and a heterogeneity analysis split students into four usage profiles by median splits on the two usage dimensions.

The estimates are large for a cross-sectional survey. Explanatory use predicted task value at β = 0.707 and critical thinking at β = 0.305, with a total effect of 0.705; the indirect path through task value was 0.400, or 56.74% of the total. Generative use predicted task cost at β = 0.561 and task value at 0.119, with a negative indirect path through cost of −0.043 and a total effect on critical thinking of −0.048 that was not significant. Task value predicted critical thinking at 0.565.

## Why the cost result matters

The theoretical expectation was that [[cognitive-offloading|offloading]] the production of an assignment would reduce the demands of the task. The data say the opposite: students who hand the work to the model report more cost, not less. The authors' explanation is that the work transfers rather than disappears — prompt construction, output verification, consistency repair and stylistic integration all remain with the student, and none of them is graded.

That is a useful corrective for practice, because it predicts where students will be tempted to give up the verification too. If the cost of checking is what the model has added, a student under time pressure has an incentive to accept output unread, which is the behavior the critical-thinking literature treats as acceptance rather than evaluation. The explanatory-use path shows the alternative: students who ask for explanations and follow-ups report more task value and higher critical thinking, and no extra cost.

## What a cross-sectional design can and cannot show

All measures are self-reported and collected at one point in time, so the mediation is a description of covariation fitted to a theory rather than a demonstrated causal sequence. The authors state this directly: only longitudinal data can establish whether explanatory use precedes task value, which precedes critical thinking. Reverse ordering is equally compatible with these estimates, and a student who already reasons well may choose explanatory use.

Two measurement problems are also reported rather than buried. The measurement model's incremental fit indices fell below conventional thresholds, and latent correlations among explanatory use, task value and critical thinking exceeded 1.00, which indicates limited discriminant validity among the three constructs. Removing three reverse-worded items with negative loadings left the central findings unchanged, and the authors retained the full scales on that basis. A reader should treat the three constructs as overlapping in this sample rather than cleanly separable.

## What this means for practice

- **Instructors.** Design tasks that require explanation-seeking rather than output production. The usage pattern associated with critical thinking was asking for reasoning, follow-ups and comparisons, not asking for the answer.
- **Assessment designers.** Expect verification cost and grade for it. If checking AI output is unassessed, students facing a deadline are being asked to absorb the cost privately.
- **Administrators.** Write AI policy around usage patterns rather than tool permission. A blanket allowance and a blanket ban both miss the distinction the data turn on.
- **Researchers.** Measure usage patterns separately. Treating AI use as one frequency variable will average an association with critical thinking against a null one.

## Limitations

- Cross-sectional self-report data from 517 students at Chinese universities; no causal ordering is established and all five constructs are measured by questionnaire.
- Latent correlations among explanatory use, task value and critical thinking exceeded 1.00, and incremental fit indices (CFI 0.828, TLI 0.815) fell below conventional thresholds, indicating limited discriminant validity.
- The sample is entirely Chinese, and the authors note that cultural norms around authority and technology attitudes may shape the patterns.
- Discipline was not analyzed, and task difficulty, grading weight and AI-permission rules vary widely within and across disciplines.
- The heterogeneity analysis used median splits, which the authors acknowledge can lose statistical power and create artificial group boundaries.

## Citation

Qu, T., & Chen, R. (2026). [The relationship between LLM usage and critical thinking among college students: the mediating role of task assessment](https://doi.org/10.3389/fpsyg.2026.1993114). *Frontiers in Psychology, 17*.
