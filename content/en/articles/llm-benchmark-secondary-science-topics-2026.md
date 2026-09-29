---
title: "A Benchmark for LLM's Understanding of Middle School and High School Science Topics"
created: "2026-09-29T09:15:00-04:00"
updated: "2026-09-29T09:15:00-04:00"
type: article
sources: ['raw/papers/llm-benchmark-secondary-science-topics-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [instrument development]
discipline: [science education]
level: [middle school, secondary]
audience: [instructors, researchers, educational technology developers]
foundations: [ai-education]
technology: [llm, machine-learning]
assessment: [assessment-validity, educational-measurement]
methods: [benchmark, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-29"
    agent: hermes-agent
---

> **Synthesis:** Educators choosing a [[llm|large language model]] for [[science-education|science]] teaching have had no [[benchmark]] built on the content their [[k-12|K-12]] students study. This paper supplies two: an NGSS-aligned middle school set of 1,078 items and a high school set of 1,150 items, generated with Sonnet 4.6 Thinking, quality-gated, and validated by a three-judge [[llm|LLM]] panel. Nine open-weight models answered every item three times; OSS 120b led both benchmarks at 0.98 one-shot accuracy, but OSS-20b and Nemotron 3 Nano 30b a3 matched models several times larger, and model size did not predict accuracy. Most models scored above 90%, leaving [[item-response-theory|item difficulty]] high and discrimination low — a saturation pattern that makes the authors ask whether the test is too easy. A human reviewer — a science [[teacher-role|teacher]] of grades 7–12 for 10 years — judged 236 of 240 sampled items aligned (98.3%) while flagging missing diagrams, data interpretation, and mathematical representation.

## Key Findings
1. Nine open-weight LLMs from six labs answered every item three times under one zero-shot prompt; OSS 120b ranked first on both benchmarks at 0.98 one-shot accuracy.
2. Model size did not predict performance: OSS-20b reached 0.94 and 0.96 one-shot, while Nemotron 3 Nano 30b a3 reached 0.97 on both benchmarks.
3. Most models scored above 90% on both benchmarks, and majority-vote ensembles lifted accuracy by only 1% to 5%, with no model degrading.
4. Building the 1,078 middle school and 1,150 high school items required rejecting and regenerating 4,433 and 1,770 candidate questions that failed the quality gates.
5. Item-level quality was weak: difficulty was high, discrimination low, and trivial items (95% or more correct) exceeded 90% in some standard-and-question-type cells.
6. Human review of 240 sampled items judged 236 (98.3%) aligned with their assigned NGSS standards and four (1.7%) misaligned, with no incorrect reference answers found.

## Building a standards-aligned benchmark
The ground-truth sets cover the 12 middle school and 12 high school science areas defined by the NGSS, generated with Sonnet 4.6 Thinking as question–answer pairs balanced across recall, conceptual understanding, and applied reasoning. Every candidate item passed a four-tier gate: near-duplicate removal at a rapidfuzz token-set ratio threshold of ≥ 88, a Flesch–Kincaid readability band (5.0–9.0 middle school, 5.0–13.0 high school), an item-level appropriateness check, and validation by a three-judge panel of Nemotron 3 Super 120b a12, Gemini Flash 3, and OSS 120b. Items drawing disagreement or unanimous rejection were dropped; disagreements occurred on 45 middle school and 44 high school items. The authors treat this as [[educational-measurement|educational measurement]], a question of [[assessment-validity|validity]]: a [[benchmark]] supports inferences only as far as its tasks represent the intended domain. Synthetic generation carries a reliability caveat, since candidate items and judgments both came from models.

## What the leaderboard shows
Nine open-weight models from six labs answered every question three times under one standardized zero-shot prompt, scored by a single [[llm|LLM]] judge. Most exceeded 90% on both benchmarks. The authors instead stress that small, locally deployable models held their own: OSS-20b scored 0.94 and 0.96, and Nemotron 3 Nano 30b a3 scored 0.97 on both while using fewer average tokens (433.70 middle school, 539.00 high school) than OSS-20b (556.10 and 723.60). Nemotron was significantly better than the rest at the middle school level under McNemar tests with Holm-Bonferroni corrections; at the high school level those differences were not significant. Models scoring well overall scored well across all 12 NGSS areas and all three item types, so model selection has to be deliberate rather than size-driven.

## Item quality and the saturation problem
Classical [[educational-measurement|test theory]] expects items that separate respondents; these largely did not. Mean item difficulty was high, mean item discrimination was low, and trivial items — 95% or more correct — exceeded 90% in some standard-and-question-type cells, such as HS-PS4 recall and HS-ETS1 recall, each at 1.00 difficulty. Only one question was broken (5% or fewer of the models answered correctly): an MS-LS2 recall item. The authors state plainly that their [[benchmark]] may be too easy, leaving open whether the items need improvement or secondary science has become tractable for this class of models. Because the datasets are fully synthetic, with no [[human-in-the-loop-ai|human oversight]] during item generation, they call for human-curated item comparisons, noting that text-only questions cannot exercise every NGSS [[curriculum-design|performance expectation]].

## Human review of the items
A former science teacher with 10 years of experience teaching grades 7–12 — an author who had no role in generating the items — reviewed a sample of 120 middle school and 120 high school question–answer pairs for standard alignment and reference-answer correctness. Of 240 items, 236 (98.3%) aligned and 4 (1.7%) were misaligned; 119 of 120 middle school items (99.2%) aligned, and the high school set accounted for three misalignments. No incorrect reference answers were found. The four rejected items sat close to their standard's content but omitted the primary relationship, practice, or representation the performance expectation is built around. The sample also contained no diagrams, figures, or graphs, no data interpretation tasks, and mathematical relationships expressed only in prose.

## What this means for practice
- **Instructors.** Treat model choice as a decision, not a default: OSS-20b and Nemotron 3 Nano 30b a3 matched larger models, so pilot a candidate on the science unit you teach.
- **Administrators and institutions.** Favor open-weight models sized for local hosting; the best accuracy-per-token performers run under 100b parameters and keep student data local.
- **Developers.** Use these NGSS-aligned sets as a fixed baseline when fine-tuning or building item-generation pipelines; above 90% is the floor.
- **Researchers.** Move beyond single-turn recall and conceptual items toward multi-turn, evidence-based feedback, which the authors call the missing standard.

## Limitations
- Human review covered only 120 middle school and 120 high school items out of 1,078 and 1,150; the authors say that sample is not evidence about the full dataset.
- Item metrics were poor — high difficulty, low discrimination, trivial shares above 90% in some cells — and the authors cannot separate weak items from model competence.

## Citation
Schroeder, N. L., Ambarwati, Y. E., Zhang, Y., & Zhai, C. (2026). [*A Benchmark for LLM's Understanding of Middle School and High School Science Topics*](https://arxiv.org/abs/2609.32020). arXiv.