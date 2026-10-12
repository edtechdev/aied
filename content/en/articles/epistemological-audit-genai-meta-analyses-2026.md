---
title: "A Critical Epistemological Audit of Early Evidence Syntheses in Generative AI Educational Research: A Systematic Review and Meta-Analysis"
created: "2026-10-12T09:30:00-04:00"
updated: "2026-10-12T09:30:00-04:00"
type: article
foundations: [interpreting-and-applying-aied-research, limitations-in-aied-research]
technology: [generative-ai, llm]
assessment: [learning-gains, assessment-validity]
methods: [meta-analysis-systematic-review]
audience: [researchers, faculty developers, policymakers, instructors]
level: [k 12, higher ed]
page_kind: [synthesis]
research_method: [secondary analysis, literature review]
confidence: high
sources: ['raw/papers/epistemological-audit-genai-meta-analyses-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-12"
    agent: hermes-agent
---

> **Synthesis:** A wave of meta-analyses followed ChatGPT into education, each reporting an effect on learning. Fütterer and colleagues audit that first wave as evidence rather than treat it as a settled literature: they appraised five meta-analyses synthesizing 87 unique primary studies, then reconstructed the [[quantitative-research|quantitative]] base underneath them. The pooled positive effect they reproduced (g = 0.83) came with very high heterogeneity and a prediction interval spanning zero. More pointedly, of the classifiable primary studies, 79.7% measured performance and only 11.6% measured learning. The authors conclude that a single pooled estimate is not a stable account of what [[generative-ai|GenAI]] does to learning, and that the field's reporting and screening practices are what make the number look firmer than it is.

## Key Findings
1. **The wave was small and narrow.** Five meta-analyses comprising 87 unique primary studies met inclusion; only 69 primary studies could be classified by outcome, and they were overwhelmingly performance measures.
2. **Performance dominated learning by a wide margin.** Among the 69 classifiable studies, 79.7% assessed performance exclusively and only 11.6% assessed learning exclusively, so the syntheses mostly pooled scores rather than learning.
3. **The reproduced effect was positive but unstable.** Exploratory three-level random-effects modeling gave g = 0.83 (95% CI [0.68, 0.97]), with I² = 94.06% and a 95% prediction interval of [−0.75, 2.41] that crosses zero.
4. **Sensitivity analyses shrank the estimate.** Addressing small-study and selection effects markedly attenuated the pooled effect, so the headline value depends on which studies are trusted.
5. **Stronger learning studies were few and costly to keep.** Positive effects remained among stronger studies assessing learning, but applying increasingly stringent quality criteria rapidly reduced the evidence base.
6. **The meta-analyses themselves had reporting gaps.** Most searched multiple databases and examined heterogeneity and publication bias, but independent screening and coding, preregistration, open data and code, and transparent reporting were often missing.

## What the audit did

The authors did not merely appraise five papers; they rebuilt the evidence base underneath them. They extracted the primary studies each meta-analysis synthesized, re-derived the quantitative pool, and ran their own exploratory three-level random-effects models with sensitivity analyses for small-study and selection effects. That two-level design is what lets the paper separate two different problems: weaknesses in how the meta-analyses were conducted and reported, and weaknesses in the primary studies they pooled. The underlying studies carried both methodological limits and substantial conceptual heterogeneity, so the same word ("learning") often referred to different constructs across them — a source of heterogeneity no aggregation can remove.

## The performance-versus-learning distinction

The audit's sharpest contribution is the outcome tally. When nearly four in five primary studies measure performance — test scores, task accuracy, grades — and roughly one in nine measures learning as a durable change, a pooled effect size describes the former and cannot license conclusions about the latter. This is the [[educational-measurement|measurement]] critique the wiki's assessment pages make generally; here it is quantified for the GenAI literature specifically. The authors also note that their own stringent quality filter collapsed the pool, which is the honest cost of demanding better evidence: the more the analysis asks of the studies, the less there is to synthesize. Read alongside the [[meta-analysis-systematic-review|systematic review]] method, the paper is a template for auditing a synthesis wave rather than a finding about [[intelligent-tutoring|AI tutors]].

## Why it matters for how the field reports

The reported [[limitations-in-aied-research|limitations]] read as a checklist of what the first wave did not do: independent screening and coding, preregistration, open data and code, transparent reporting. None of these is exotic, and each is what would let a later reviewer check a claim rather than accept it. The paper's closing caution — that a single pooled estimate should not be read as a stable general effect — follows from the heterogeneity and the sensitivity analyses together. For readers of this corpus, that means a positive meta-analytic number about GenAI and learning is a hypothesis to scope by outcome measure, not a verdict to cite.

## What this means for practice
- **Researchers.** Report the outcome measure behind every effect: a pooled g over performance measures does not describe learning, and the distinction is invisible unless stated.
- **Researchers.** Preregister syntheses and publish screening, coding and analysis code, because those are exactly the steps the audited meta-analyses commonly left out.
- **Faculty developers and instructors.** Treat headline effect sizes for AI and learning skeptically until the outcome is specified; the prediction interval here spans zero.
- **Policymakers.** Do not read a single pooled estimate as evidence that GenAI improves learning, since the strongest learning studies were too few to support a stable conclusion.

## Limitations
- The audit covers only five meta-analyses and their 87 primary studies, so it characterizes the first synthesis wave after ChatGPT rather than the field's later evidence.
- The authors' own three-level models are described as exploratory, and their sensitivity analyses are a robustness check rather than a preregistered primary analysis.
- The reconstructed pool depends on how primary studies were classified by outcome, and 18 of the 87 studies could not be classified at all, so the 79.7% / 11.6% split rests on the classifiable subset of 69.
- As a preprint it has not yet undergone peer review, and the authors themselves used [[llm]] tools for editing and analysis code, which they declare.

## Citation

Fütterer, T., Peltzer, N., Gerjets, P., Meurers, D., Tate, T., Warschauer, M., Emslander, V., Bardach, L., Hattie, J., Sailer, M., & Kuhn, J. (2026). [A Critical Epistemological Audit of Early Evidence Syntheses in Generative AI Educational Research: A Systematic Review and Meta-Analysis](https://osf.io/47ks6). *PsyArXiv preprint*.
