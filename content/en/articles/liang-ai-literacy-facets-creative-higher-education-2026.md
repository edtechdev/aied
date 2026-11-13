---
title: "AI literacy facets in creative higher education: associations with learning performance and academic well-being"
published: "2026-10-30"
created: "2026-11-02T09:12:23-05:00"
updated: "2026-11-02T10:15:00-05:00"
type: article
sources: ['raw/papers/liang-ai-literacy-facets-creative-higher-education-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1959457"
confidence: high
page_kind: [evaluation]
research_method: [survey]
discipline: [design education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
source_depth: full text
foundations: [ai-literacy]
pedagogy: [creativity, well-being]
assessment: [learning-gains]
ethics: [ethics]
methods: [quantitative-research]
---

> **Synthesis:** Liang, Liu, Wang and Zhang (2026) treat [[ai-literacy]] as six functionally different facets — knowledge, awareness of affordances and limitations, operational ability, critical reflection, ethical awareness, and emotional adaptability — and ask which facet carries which outcome. In a cross-sectional survey of 475 design students across Europe, Asia, and Australia, analyzed with PLS-SEM, AI knowledge sits upstream of the other facets, while perceived [[learning-gains|learning performance]] runs through a "recognize–reflect–produce" chain of awareness, reflection, and tool use. The distinctive result concerns [[ethics|ethical awareness]]: it predicted [[well-being|academic well-being]] (β = 0.324) but not learning performance (β = 0.082, p = .077). For [[design-education]], the study argues that [[creativity|creative]] studio work with [[generative-ai]] needs reflective and ethical [[scaffolding]], not tool training alone. The authors read the split as evidence that ethics operates through normative clarity — authorship, fairness, bias, and disclosure — rather than as a direct performance lever, and they recommend knowledge-first sequencing, process documentation, and clearer AI-use norms for studio teaching.

## Key Findings

1. AI knowledge was the upstream resource, predicting AI awareness (β = 0.813), operational ability (β = 0.803), and ethical awareness (β = 0.790) at p < .001, but critical reflection far more weakly (β = 0.257).
2. The model explained 77.6% of the variance in perceived learning performance and 77.3% in academic well-being, with SRMR = 0.038 — same-source cross-sectional associations, not causal effects.
3. In the recognize–reflect–produce chain, AI awareness predicted critical reflection (β = 0.450), reflection predicted performance (β = 0.304), and operational ability predicted both reflection (β = 0.209) and performance (β = 0.247).
4. Emotional adaptability was the strongest direct predictor of perceived learning performance (β = 0.322) and also predicted academic well-being (β = 0.245).
5. Ethical awareness predicted academic well-being (β = 0.324) but not learning performance (β = 0.082, p = .077) — the only unsupported hypothesis among the thirteen tested.
6. Indirect paths split the same way: knowledge to ethics to well-being was significant (β = 0.256), the parallel route to performance was not (β = 0.065), and perceived performance predicted well-being (β = 0.380).

## Six facets, one instrument

The instrument was assembled by adapting dimensions from existing AI-literacy frameworks rather than adopting a single validated scale, and the measurement work is reported in unusual detail. Retained indicator loadings ran from 0.839 to 0.902, Cronbach's alpha from 0.842 to 0.921, and average variance extracted from 0.735 to 0.788. Three items were dropped: ETH2 and ETH3 because they loaded below 0.70 and overlapped with broader [[academic-integrity]] concerns, and AWA3 because it drifted toward [[evaluative-judgment|evaluative judgment]] of outputs rather than awareness of them. That deletion shows how thin the boundary is between recognizing what AI is doing and judging what it produced. Discriminant validity held by the heterotrait–monotrait criterion, every value below 0.90, yet correlations among reflection, emotional adaptability, performance, and well-being stayed high enough that the authors interpret the structural paths cautiously. A single aggregate score would have hidden the distinctions the study exists to test.

## The recognize–reflect–produce route

The performance half of the model borrows from [[self-regulated-learning]] and [[metacognition]]: awareness monitors what the tool is doing, operational ability enacts revisions, and [[critical-thinking|critical reflection]] supplies the judgment that connects production to learning. That chain held, with awareness the stronger antecedent of reflection and reflection the stronger antecedent of perceived performance. The authors read it against cognitive load — fluent tool use frees attention for comparison and revision rather than accumulating more polished outputs — and the coefficient pattern supports the claim that operational ability matters partly through reflection, not only directly. Predictive relevance was adequate across endogenous constructs, with Q² values from 0.457 to 0.580. Collinearity was unproblematic, with inner VIF values from 1.214 to 2.531 against a threshold of 3.0, and full collinearity VIF values below 3.3 screened out severe common method bias. NFI of 0.877 fell just short of the familiar 0.90 criterion.

## Why ethics lands on well-being

The non-significant ethical-awareness path to performance is the paper's most interesting negative result, and the authors resist explaining it away. Once operational ability, critical reflection, and emotional adaptability are in the model, knowing the rules about authorship and disclosure does not by itself raise perceived task quality. What ethical awareness appears to buy students is normative clarity: a sense that their AI use is legitimate, fairly assessed, and consistent with course expectations. In studio critique, where the question of how much assistance counts as one's own is genuinely unsettled, that clarity is an experiential good in its own right. The significant knowledge-to-ethics-to-well-being path carries this interpretation; its insignificant counterpart to performance closes the loop. The authors concede a timing problem, since ethical understanding may pay off in responsible practice over a longer horizon than a single-term survey can observe.

## What this means for practice

- **Instructors.** Teach how generative systems work before intensive tool practice, because conceptual knowledge carried the largest coefficients in the model and every other facet depended on it.
- **Instructors.** Require process evidence — prompts, rejected outputs, revision rationales — and assess the justification of AI use rather than its volume or the polish of the final artifact.
- **Program designers.** Publish authorship, disclosure, privacy, and acceptable-assistance rules before assignments open; ethical clarity tracked well-being, not marks, so it will not show up in grades.
- **Instructors.** Normalize failed outputs and repeated [[prompt-engineering|prompting]] as ordinary iteration, since emotional adaptability was the strongest direct predictor of perceived learning performance in a sample where uncertainty is structural to the work.

## Limitations

- The design is a single cross-sectional [[self-report-measures|self-report]] survey of 475 design students, with no intervention, so every path is an association.
- Learning performance was perceived quality, task achievement, and [[self-assessment|self-evaluation]] rather than grades, instructor ratings, or [[eportfolio|portfolio]] review.
- Recruitment was non-probabilistic through course channels, mailing lists, and peer forwarding, and the authors limit generalization beyond design-related programs.
- Several constructs stayed empirically close — the highest heterotrait–monotrait value involved performance and well-being — and NFI at 0.877 missed the 0.90 benchmark.

## Citation

Liang, Z., Liu, Y., Wang, C., & Zhang, X. (2026). [*AI literacy facets in creative higher education: associations with learning performance and academic well-being*](https://doi.org/10.3389/feduc.2026.1959457). *Frontiers in Education, 11*, 1959457.
