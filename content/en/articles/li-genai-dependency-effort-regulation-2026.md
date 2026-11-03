---
title: "Generative AI dependency and perceived learning outcomes among university students: an indirect association involving effort regulation"
published: "2026-11-01"
created: "2026-11-03T09:20:00-05:00"
updated: "2026-11-03T09:20:00-05:00"
type: article
sources: ['raw/papers/li-genai-dependency-effort-regulation-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.2011342"
confidence: high
page_kind: [evaluation]
research_method: [survey]
level: [higher ed]
audience: [instructors, researchers, administrators]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-03"
    agent: hermes-agent
source_depth: full text
foundations: [cognitive-offloading]
pedagogy: [self-regulated-learning]
technology: [generative-ai]
assessment: [self-report-measures, learning-gains]
methods: [quantitative-research]
---

> **Synthesis:** Li, Zhang and Yang surveyed 982 students at three institutions in Guangdong and tested whether [[cognitive-offloading|generative AI dependency]] reaches [[learning-gains|perceived learning outcomes]] by eroding [[self-regulated-learning|effort regulation]]. Dependency was negatively associated with effort regulation (β = −0.257), effort regulation was positively associated with outcomes (β = 0.497), and the indirect path between them was negative and significant (β = −0.128) while the direct path was not (β = 0.041). The total association was small (β = −0.087) and stopped being significant once frequency of AI use was controlled — the authors' practical point is that how often students use [[generative-ai|generative AI]] says less than whether reliance displaces the effort they would otherwise regulate themselves. The design is cross-sectional and entirely [[self-report-measures|self-report]], so every path is an association.

## Key Findings

1. **Dependency erodes effort regulation.** GenAI dependency was negatively associated with effort regulation (β = −0.257) in a covariance-based structural model whose measurement model fit acceptably (CFI = 0.953, TLI = 0.944, RMSEA = 0.043, SRMR = 0.041).
2. **Effort regulation is the strongest predictor of perceived learning.** Effort regulation was positively associated with perceived learning outcomes at β = 0.497, more than three times the size of any other path in the model.
3. **The association runs through effort, not around it.** The indirect association via effort regulation was negative and significant (β = −0.128) under 5,000 bias-corrected bootstrap resamples, while the residual direct path was nonsignificant (β = 0.041).
4. **The headline negative effect is small.** Dependency's total association with perceived learning outcomes was β = −0.087, and after adjustment for GenAI use frequency even that small total was no longer significant, though the indirect path remained.
5. **Frequency and dependency are different constructs.** Sensitivity analyses that controlled for how often students used GenAI left the meditational pattern intact, which the authors read as evidence that problematic reliance is a quality-of-use question rather than a volume-of-use question.
6. **Common method variance was tested, not assumed away.** Harman's single-factor test put the first unrotated factor at 23.05% of variance, and a single-factor CFA fit poorly (CFI = 0.392, RMSEA = 0.149), which the authors report as no evidence of a dominant common factor.

## What dependency was measured against

The study's object is not use but *dependency-oriented* use: items ask whether students lean on GenAI in ways that displace their own work, and the authors separate that from frequency of use in the analysis rather than treating the two as interchangeable. That distinction is doing real work in the results. When use frequency entered as a covariate, the small total association between dependency and perceived learning disappeared, so the finding that survives is the pathway through effort regulation rather than a general claim that AI use costs learning.

The outcome is also a perception. Students rated their own cognitive, behavioral and affective gains on a five-point scale, which means the "learning outcomes" in the title are beliefs about learning. The authors say so directly and call for objective performance, retention and behavioral trace measures in follow-up work.

## Effort regulation as the pathway

The mechanism the model tests is ordinary [[self-regulated-learning|self-regulated learning]]: students who can sustain effort on difficult material learn more, and reliance that removes the need to sustain effort removes that benefit. The path sizes fit that story — dependency to effort regulation (β = −0.257) and effort regulation to outcomes (β = 0.497) — and the near-zero direct path suggests the association is carried almost entirely by the effort term.

For instructors the useful part is the asymmetry. Nothing in the model says AI use lowers learning; what predicts lower perceived learning is the combination of high dependency and low effort regulation, which is a pattern a course can observe and intervene on. The authors' suggestions follow from that: require students to justify AI-supported solutions, keep revision histories, and assess process evidence rather than final products alone.

## How far the design reaches

1,009 questionnaires were collected between March 20 and May 15, 2026; 982 entered the analysis after screening. Respondents came from three institutions — two general undergraduate universities and one vocational college — recruited through intact classes with instructor help, and classroom identifiers were not retained, so the authors flag possible clustering they could not model.

The measurement model was checked properly for a survey of this kind (seven factors, discriminant validity, VIFs below 5), which makes the failure mode here interpretation rather than computation: a cross-sectional covariance model cannot order dependency before effort regulation. Students who already struggle to regulate effort may be the ones who become dependent, and the authors concede the direction is theoretically motivated rather than empirically established.

## What this means for practice

- **Watch dependency, not minutes.** Use frequency alone told the authors little once dependency entered the model, so an instructor's warning sign is a student who cannot start or continue without the tool, not a student who uses it often.
- **Design for the effort you want to keep.** Ask for reasoning records, revision histories or short justifications of AI-assisted work, so the effort regulation the model rewards is visible in what students submit.
- **Assess process, not only product.** Process evidence such as drafts and reflective accounts of human–AI collaboration is the assessment change that follows from the meditational finding; final-product grading leaves the pathway unmeasured.
- **Treat dependency as an AI literacy topic.** The authors place effort regulation and responsible reliance alongside verification and ethics in literacy instruction, rather than treating literacy as technical competence alone.

## Limitations

- **Cross-sectional, single time point.** The authors state that temporal ordering cannot be established and that the dependency–effort direction is theory-informed rather than demonstrated; reciprocal relations are plausible.
- **All focal measures are self-report from one survey.** Perceived learning outcomes are students' own evaluations of gain, not evidence of learning, and common method variance cannot be excluded despite the Harman and single-factor checks.
- **Convenience sampling through intact classes.** 982 students at three institutions in one Chinese province, recruited via course instructors, with classroom identifiers dropped so the clustering could not be modeled.

## Citation

Li, S., Zhang, G., & Yang, Z. (2026). [*Generative AI dependency and perceived learning outcomes among university students: an indirect association involving effort regulation*](https://doi.org/10.3389/fpsyg.2026.2011342). Frontiers in Psychology, 17.
