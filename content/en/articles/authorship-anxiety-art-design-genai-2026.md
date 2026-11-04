---
title: "Uneven automation: comparing authorship anxiety and generative AI use among art and design undergraduate students"
published: "2026-11-02"
created: "2026-11-03T09:20:00-05:00"
updated: "2026-11-03T09:20:00-05:00"
type: article
sources: ['raw/papers/authorship-anxiety-art-design-genai-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1948564"
confidence: high
page_kind: [evaluation]
research_method: [survey]
discipline: [arts education, design education]
level: [higher ed]
audience: [instructors, researchers, curriculum designers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-03"
    agent: hermes-agent
source_depth: full text
pedagogy: [creativity, student-ai-interaction]
technology: [generative-ai]
foundations: [learner-identity, cognitive-offloading]
methods: [mixed-methods-research]
ethics: [ai-use-disclosure]
---

> **Synthesis:** He, Liu, Ye, Jiang, Li and Wang surveyed 2,441 [[generative-ai|generative AI]]-using students across 33 art and design institutions in China and interviewed 22 of them, asking whether [[creativity|authorship]] anxiety varies by field. It does not: authorship anxiety ranged only from 4.62 to 4.90 across seven disciplinary categories (F(6, 2,434) = 1.75, p = 0.105, η² = 0.004), and the fine-art versus pooled-design difference was d = −0.08. What differed was use — design students found GenAI more useful (d = −0.28) and used it more often (d = −0.39) — and the interviews explain the split: fine-art students grounded authorship in [[embodied-learning|embodied]] making and human imperfection, while design students located it in judgment, selection and control.

## Key Findings

1. **Authorship anxiety was flat across fields and institutions.** Means spanned 4.62 to 4.90 across seven categories, with no significant omnibus difference (F(6, 2,434) = 1.75, p = 0.105, η² = 0.004) and no detectable institution-level variance component.
2. **Fine art and design were equivalent within a narrow band, not identical.** The contrast was d = −0.08 (cluster-robust p = 0.147), meeting an equivalence bound of ±d = 0.20 (p = 0.013) but not ±0.15 (p = 0.078) or ±0.10 (p = 0.315).
3. **Design students rated GenAI more useful.** [[technology-acceptance-model|Perceived usefulness]] was higher in pooled design than in fine art (d = −0.28, cluster-robust p = 0.001, 95% CI [−0.403, −0.145]), one of only two contrasts that survived all four specifications.
4. **Design students also used it more.** [[self-report-measures|Self-reported]] use frequency was the largest fine-art/design contrast (d = −0.39), and dependency differences (d = −0.18) were weaker, reaching significance under the bootstrap interval but not the cluster-robust test (p = 0.052).
5. **Five of six constructs varied by field; authorship anxiety was the exception.** Creative agency, dependency, usefulness, [[anxiety-and-stress|AI anxiety]] and [[critical-thinking|critical evaluation]] all differed across the seven categories after Holm correction, while authorship anxiety did not.
6. **The interviews produced two distinct authorial models.** Fine-art participants tied authorship to manual practice, emotional expression and imperfection ("it cannot paint my flaws"), while design participants treated AI as an execution system and authorship as control and decision rights.
7. **The sample was large and clustered.** 2,441 students from 33 institutions, with design effects from 2.24 to 4.61 that reduced the effective sample size to between 530 and 1,089, which is why every comparison used institution-aware inference.

## Two ways of holding authorship

The paper's title concept, uneven automation, is a claim about response rather than concern: the worry about authorship is distributed evenly across art and design, but what students do about it differs. Fine-art students preserve authorship by keeping production in their hands and treating material imperfection as evidence of human contribution. Design students keep it by controlling direction, selection and revision while delegating execution — the account one participant gave, "I am the decision-maker and the user; AI is an execution system."

Neither account resists AI as such. Both redraw the line between conception and execution, and the difference tracks the labor market each field faces: design work already normalises distributed production and client constraint, while fine art sells the authenticity of the maker. That is the authors' reading, and it is presented as interpretation rather than tested mechanism.

## Measurement work that carries the argument

The study's [[quantitative-research|quantitative]] credibility rests on comparisons most survey papers skip. Measurement invariance held across fine art and design for the four focal constructs (largest |ΔCFI| = 0.001 across configural, metric and scalar models), so the non-difference in authorship anxiety is not a scale artifact. Authorship anxiety and creative agency were separated with a two-factor model that beat a one-factor specification (Δχ2(1) = 384.02, p < 0.001), which supports treating creative subjectivity as two facets.

The equivalence testing is the part worth copying: a non-significant difference is not evidence of sameness, so the authors ran two one-sided tests and reported the bound at which the groups can and cannot be called equivalent. Most papers reporting a null group difference stop at p > 0.05.

## What a reader should take from it

For [[arts-design-and-media-education|art and design education]], the practical implication is that authorship policy written as one rule for creative fields will miss how students actually work. A design program can require disclosure of AI execution while assessing selection and judgment; a fine-art program may reasonably restrict AI at the production stage while permitting it in reference generation, which is where its students already draw the line.

The caution is that the survey measured self-reported tendencies and the interviews were 22 purposively selected participants, so the two authorial models are patterns and contrasting cases, not prevalence estimates.

## What this means for practice

- **Separate the anxiety question from the use question.** Concern about authorship was universal in this sample, so an assignment policy that assumes art students resist AI and design students embrace it is aimed at the wrong variable.
- **Assess where each field locates authorship.** In design, assess selection, judgment and control over generated alternatives; in fine art, keep production-based assessment and permit AI in support tasks such as references and backgrounds.
- **State the execution/conception line explicitly.** Students in both fields already use it verbally; writing it into the brief makes the rule they are applying visible and gradeable.
- **Report equivalence properly when a difference is null.** If a program evaluates whether an [[educational-policy-ai|AI policy]] changed student attitudes across fields, a non-significant test alone will not show that the fields converged.

## Limitations

- **Cross-sectional, self-report for all six constructs.** The design cannot show whether field differences in use produce differences in authorial belief or the reverse.
- **Institutions differed greatly in size and clustering was detectable.** Design effects of 2.24 to 4.61 cut the effective sample to between 530 and 1,089, and the authors use cluster-robust and bootstrap inference to compensate.
- **The interviews were 22 purposively selected participants.** Findings from them are patterns and contrasting cases, not prevalence estimates across fields.
- **Measurement invariance was not established for AI anxiety or critical evaluation.** Contrasts on those two constructs are reported but not interpreted.

## Citation

He, H., Liu, J., Ye, Z., Jiang, H., Li, R., & Wang, Z. (2026). [*Uneven automation: comparing authorship anxiety and generative AI use among art and design undergraduate students*](https://doi.org/10.3389/fpsyg.2026.1948564). Frontiers in Psychology, 17.
