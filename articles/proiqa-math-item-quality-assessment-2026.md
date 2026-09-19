---
title: "ProIQA: A Process-Based Framework for Fine-Grained Math Item Quality Assessment"
created: "2026-09-15T11:05:00-04:00"
updated: "2026-09-19T07:04:04-04:00"
type: article
pedagogy: [problem-solving]
technology: [knowledge-graph, llm]
assessment: [assessment, automated-question-generation, educational-measurement, item-response-theory]
sources: ['raw/papers/proiqa-math-item-quality-assessment-2026.md']
confidence: high
research_method: [system development, benchmark, quantitative]
discipline: [math education]
level: [elementary, k 12]
audience: [researchers, assessment designers, software developers]
methods: [benchmark]
---

> **Synthesis:** Automatic item generation promises [[personalized-learning|personalized practice]] at scale, but the bottleneck has moved from producing items to judging whether they are any good — and ProIQA argues that judging quality from the question text alone is a category error. The framework builds a hierarchical reasoning tree for each item with an [[llm]], verifies the tree's mathematical correctness, encodes its dependency structure with a graph [[machine-learning|neural network]], and fuses that deep "solving" view with a surface [[stem-education|stem]] representation. On [[k-12]] [[math-education|mathematics]] [[benchmark|benchmarks]] it reports average gains over the second-best method of 7.5% in concept assessment, 6.3% in difficulty estimation and 19.5% in competency assessment, with reasoning-tree verification accuracy between 90.38% and 97.80%. The paper's most instructive result is a two-item case study in which a zero-shot LLM baseline mislabels the [[misconceptions|conceptual category]], inverts the competency level and reverses the difficulty ordering — the failure mode that [[automated-assessment|automated assessment]] built on surface features inherits.

## Key Findings

1. Reasoning trees were constructed for four K-12 mathematics datasets (XES-500, XES-1600, MATH-Algebra, XES-1500) and passed an LLM verifier checking structural integrity, logical connectivity and the mathematical correctness of each rationale at rates of 94.59% (XES-500), 97.80% (Algebra), 90.38% (XES-1600) and 91.46% (XES-1500) — an average above 90%.
2. Average performance gains over the second-best algorithm were 7.5% for concept assessment, 6.3% for difficulty estimation and 19.5% for competency assessment; competency gains were the largest because that task depends most heavily on the solution path.
3. Concept assessment was reformulated as item-concept matching (a binary relevance decision against a concept's own text) rather than a fixed multi-label vector, so the same model can follow a knowledge taxonomy that changes with [[curriculum-design|curriculum]] standards.
4. Difficulty was split into coarse 5-way level classification plus a ternary pairwise ranking task (harder / tied / easier) with a margin of 0.5 on 2PL IRT difficulty parameters from historical response logs, on the argument that [[adaptive-learning|adaptive testing]] needs relative ordering more than absolute score regression.
5. Competency assessment adopted the TIMSS framework's three cognitive domains — Knowing, Applying, Reasoning — with the explicit aim of stopping generative systems from flooding a bank with items that test rote recall.
6. The process-only variant used on the TIMSS datasets (no stems available, so no tree construction and no GNN) still reached state-of-the-art competency accuracy, which the authors read as evidence that solution complexity alone carries the signal for higher-order competencies.
7. Ablations show the ordering the framework predicts: removing the process view performs worst, using a linear solution instead of a tree underperforms the tree, a naive full-text encoding of the tree degrades results by introducing noise, and collapsing node interactions through pooling loses information.
8. Stability testing found F1 varied by at most 1.5% from the mean across 1 to 4 GNN layers, and that two specialized embedding models performed near-identically while a general mathematics model (MetaMath-7B) as a frozen encoder was clearly worse (F1 0.6799 versus 0.7505 and 0.7473).
9. Error analysis found a systematic "pseudo-hierarchical" failure: an Algebra item whose full solution sat in the root node with children merely restating it was predicted as Level 2 instead of Level 5, showing that a logically correct but shallow tree offers little signal about cognitive depth.
10. A two-item case study against a zero-shot LLM (Deepseek-V3.2) had the baseline confuse a lengthy narrative item as "Reasoning" and a terse geometric item as "Knowing" — the exact reverse of expert annotation — and invert the difficulty ordering, which the authors attribute to conflating textual verbosity with cognitive demand.

## From Stem-Based to Process-Based Quality Assessment

The paper's diagnosis is that [[automated-question-generation]] solved generation faster than it solved assurance. Traditional [[assessment|item quality]] review relies on subject-matter experts or small pilot studies, which cannot keep pace with a generated item library; automated alternatives mostly target multiple-choice difficulty using readability scores, n-grams or static rubrics. Both, the authors argue, inspect the item's surface. The alternative is measured on what a human expert actually does: read the stem, then simulate the solving path to see which concepts are invoked, how many reasoning steps are involved, and what kind of mathematical thinking is required.

That reframing drives the architecture. A surface view encodes the stem through a frozen pre-trained language model; a deep view extracts solving semantics from a structured reasoning tree in which each node carries both a subproblem text and a rationale text, concatenated into a node representation and propagated along dependency edges by a multi-layer Graph Isomorphism Network. The two representations are fused for prediction heads that match concepts, rank and classify difficulty, and classify competency. The authors deliberately avoid forcing the three heterogeneous dimensions into one label space, keeping task-specific objectives on top of a shared process-enriched representation.

## Verification, Ablation and What the Numbers Support

Because the trees are LLM-generated, the pipeline includes an automated quality gate: a verifier model (Deepseek-R1) inspects every tree before it reaches training. Verification accuracy — the share of trees passing the review — ranged from 90.38% to 97.80%, which matters less as a headline result than as a statement about the ceiling on downstream quality: whatever the GNN encodes is bounded by the trees that survived. The paper notes the trees also constitute a reusable process-enhanced resource for [[educational-measurement]] and [[learning-analytics|educational data mining]].

The [[meta-analysis-systematic-review|systematic]] evidence for the process view is the ablation table, where the full model beats every variant on concept and difficulty tasks. Difficulty errors were largely ordinal — they landed on adjacent levels, consistent with the high weighted adjacent accuracy reported — which the authors treat as preservation of the difficulty structure rather than random noise. Two further confounds are acknowledged honestly: some apparent errors trace to inconsistent benchmark labels, and some to solution diversity, when the LLM builds a mathematically valid route that maps to a different concept label than the annotated ground truth (a "Chickens-and-Rabbits" item labeled Grouping Method solved via the Assumption Method).

The case study is the paper's clearest illustration of the stakes. Item A (two candles burning at different rates) and Item B (side length and area from a square's perimeter) carried concept and difficulty labels but no competency annotation, so the authors had experts annotate competency to create complete ground truth for the pair. ProIQA matched all three dimensions exactly; the zero-shot LLM baseline misclassified both concepts, labeled the template-following item "Reasoning" and the genuine geometric reasoning item "Knowing", and predicted the easier item as harder. A surface-level model reads how an item looks; the argument of this paper is that quality lies in what it demands.

## Limits and Where It Fits

Several constraints bound the claims. The evaluation is restricted to K-12 mathematics, with concept assessment drawing on subsets sampled from XES3G5M (500 and 1,600 items) and difficulty labels for the XES-1500 subset pre-estimated by a 2PL IRT fit rather than being authentic annotations. The competency result on TIMSS is produced by a process-only variant that bypasses the tree and GNN entirely, so it validates solution-text encoding rather than the full architecture. The comparison is against a strong but zero-shot LLM baseline, and against supervised encoder baselines (T-IRT, R2DE) that the authors note were not applicable to the stem-less competency datasets. Tree construction and verification cost inference time, though assessment is an offline task, so the paper argues the one-time cost does not affect deployment latency.

For practice, the framework points at a division of labor that fits [[intelligent-tutoring]] and adaptive item recommendation: machine-scale auditing of knowledge coverage, difficulty calibration and cognitive breadth, with expert judgment reserved for the cases the audit flags. The gaps it exposes are as useful as the gains — multi-dimensionally annotated open datasets remain scarce, one dataset offered no difficulty labels and another no stems, and the hardest failure mode is structural shallowness in the generated reasoning rather than outright mathematical error.

## What this means for practice

- **Designers.** Judge generated items on the solution path rather than the wording: encoding a verified reasoning tree lifted performance over the second-best method by 7.5% in concept assessment, 6.3% in difficulty estimation and 19.5% in competency assessment.
- **Designers.** Verify every reasoning tree before it enters the pipeline — verification accuracy ranged from 90.38% to 97.80% across datasets — and treat that pass rate as the ceiling on downstream quality, since the model can characterize only the trees that survive.
- **Designers.** Flag items whose solution sits in the root node with children that merely restate it: Algebra item 341 (Decimal Construction, Level 5) was predicted as Level 2 because a logically correct but structurally shallow tree offers limited signal about cognitive depth.
- **Researchers.** Do not substitute zero-shot [[llm]] judgment for expert annotation: the Deepseek-V3.2 baseline mislabeled a template-following item as "Reasoning" and a genuine geometric reasoning item as "Knowing", and inverted the difficulty ordering.
- **Researchers.** Reserve expert review for the items an audit flags rather than reviewing everything — the framework's intended division of labor is machine-scale checking of concept coverage, difficulty calibration and cognitive breadth, with human judgment on exceptions.

## Limitations

- **K-12 mathematics only.** All four datasets are elementary and secondary math benchmarks (XES-500, XES-1600, MATH-Algebra, XES-1500, plus TIMSS19/23), so the framework is untested on other subjects or on higher education items.
- **Pre-estimated labels and missing stems.** Concept subsets were randomly sampled from XES3G5M (500 and 1,600 items) because of computational constraints, and XES-1500 difficulty labels were pre-estimated by a 2PL IRT fit rather than being authentic expert annotations; no dataset supplies concepts, difficulty, competency and stems together.
- **The competency result bypasses the architecture.** On the TIMSS benchmarks no stems were available, so the state-of-the-art competency accuracy came from a process-only variant with no tree construction and no graph network — it validates solution-text encoding, not the full framework.
- **Baselines and label noise.** Comparison rests on a zero-shot LLM (Deepseek-V3.2) and two supervised encoders the authors note were not applicable to the stem-less datasets, and the authors acknowledge some apparent errors trace to inconsistent benchmark labels or to mathematically valid alternative solution routes.

## Connected Concepts

- [[automated-question-generation]]
- [[assessment]]
- [[math-education]]
- [[item-response-theory]]
- [[knowledge-graph]]
- [[educational-measurement]]
- [[benchmark]]
- [[problem-solving]]
- [[llm]]
- [[k-12]]
- [[personalized-learning]]
- [[automated-assessment]]
- [[cognitive-diagnosis]]
- [[adaptive-learning]]
- [[educational-nlp]]

## Connected Articles

- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the Quality of AI-Generated Exams: A Field Study
- [[item-writing-flaws-irt-difficulty-2026]] — Item-Writing Flaws and IRT Difficulty
- [[llm-item-difficulty-prediction]] — Predicting Item Difficulty with Large Language Models
- [[generate-then-validate-question-gen]] — Generate then Validate: Question Generation for Education
- [[slidesqaqa-pedagogical-question-generation]] — SlideSQaQA: Pedagogical Question Generation from Slides
- [[kt4eqg-personalized-question-generation]] — Knowledge Tracing for Educational Question Generation
- [[razavi-powers-item-difficulty-llm-2026]] — Razavi and Powers on Item Difficulty Prediction with LLMs
- [[multimodal-item-parameter-estimation-2026]] — Multimodal Item Parameter Estimation
- [[llm-difficulty-calibration-programming-exams-2026]] — Difficulty Calibration of LLM-Generated Programming Exams
- [[llm-misconception-difficulty-easy-trap]] — Easy Traps: Misconception-Based Item Difficulty

## Citation

Tong, J., Li, M., Chen, H., Jiang, Y., Ge, H., Wang, Y., & Qian, H. (2026). [*ProIQA: A Process-Based Framework for Fine-Grained Math Item Quality Assessment*](https://arxiv.org/abs/2609.15292). Findings of ICDM 2026.
