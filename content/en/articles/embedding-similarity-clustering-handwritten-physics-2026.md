---
title: "Testing the validity of embedding-based similarity and clustering for handwritten physics solutions"
created: "2026-10-23T08:02:28-04:00"
updated: "2026-10-23T08:02:28-04:00"
type: article
sources: ['raw/papers/10.1103_sdnj-cjst.md']
confidence: medium
research_method: [secondary analysis, experiment]
methods: [quantitative-research, benchmark, ai-ed-evaluation]
discipline: [physics education]
level: [higher ed]
technology: [educational-nlp, machine-learning, llm, generative-ai]
assessment: [assessment-validity, automated-assessment]
audience: [instructors, researchers, assessment designers, educational technology developers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
---

> **Synthesis:** This study asks an [[assessment-validity]] question that most work on [[educational-nlp|text embeddings]] in education skips: not whether student solutions can be clustered, but whether the geometry of the embedding space preserves the distinctions a rubric actually grades. Tauschhuber and Kortemeyer took 992 handwritten student-problem solutions from a high-stakes engineering thermodynamics exam at ETH Zurich, transcribed them under five rubric-blind representations with GPT-5.4, embedded them with nine mechanisms, and compared pairwise similarity and hierarchical clusters against human scores. The signal was real but small — best weighted Spearman correlation 0.198 — and clusters were score-enriched rather than score-equivalent, with a best useful-cluster score standard deviation of 2.547 points against 3.866 before clustering. A synthetic Carnot-engine set suggests why: the embeddings organized statements by wording rather than by physics, behaving, in the authors' phrase, like novices rather than experts. The conclusion is bounded and useful — embeddings can support exploratory organization and [[human-in-the-loop-ai|human-in-the-loop]] review of [[physics-education|physics]] solutions, but they are not an unsupervised basis for [[automated-assessment|grading]].

## Key Findings
1. **Embedding similarity tracked score similarity, weakly.** The best weighted Spearman correlation was 0.198 (hybrid structured transcription with qwenMath7B), and the best weighted Pearson was 0.243.
2. **Even the most similar pairs were not score-equivalent.** Binned by similarity percentile, the highest-similarity pairs kept mean score differences close to the random-pair baseline of 1.0, never approaching zero.
3. **Clusters were score-enriched, not score-pure.** The best configuration placed 73.1% of responses in useful clusters with a weighted score standard deviation of 2.547 points, versus 3.866 unpartitioned and a weighted range of 7.142 versus 17.255.
4. **How the handwriting was represented mattered more than which model embedded it.** Best useful-cluster SD fell from 2.878 for ASCII verbatim and 2.797 for LaTeX to 2.547 for formula narrative, while the 10 best pairwise conditions sat in a narrow 0.177 to 0.198 band.
5. **A toy Carnot-engine set exposed surface-feature clustering.** With five correct statements and three closely worded flawed variants each, centered-cosine layout grouped each correct statement with its wording twins instead of with other correct statements or the same flaw family.
6. **The design crossed 5 representations with 9 embedding mechanisms.** It covered 252 consenting students of the 434 who sat the exam, 3041 pages of solutions, 85 rubric items, and 992 student-problem solutions after one corrupted embedding file was excluded.

## What the study actually validated, and against what
The target of validation is narrow by design, and the paper is careful about it. Human-assigned scores served as the external criterion; they entered only after transcription, embedding, similarity computation, and clustering were finished, so no score information could leak into the grouping. The transcription model — GPT-5.4 — was kept rubric-blind: it saw only the visible student artifact, was given no official solution, mark scheme, or score, and was told not to solve, correct, or grade. That isolates whether out-of-the-box embedding geometry itself carries grading-relevant structure from the easier question of whether a model can apply a rubric when handed one. The five representations deliberately vary interpretive distance, from ASCII verbatim through LaTeX and two narrative forms to a fixed-section hybrid, so representation becomes an experimental variable. The nine mechanisms span hosted general-purpose embeddings, retrieval and matching adapters at three quantization levels each, and two math-specialized Qwen models. What is tested is a pipeline of [[educational-nlp|embedding]] plus clustering, not a grading system.

## How weak the alignment was, in numbers
The pairwise result states the paper's central finding most clearly. Across all conditions, higher embedding similarity did correspond to smaller score gaps. But the effect never became decisive: best Spearman correlations ran from 0.142 for literal ASCII to 0.198 for hybrid structured, with medians between 0.130 and 0.160. The authors read these as descriptive effect sizes, not inferential estimates, because each response appears in many pairs. Clustering, the more demanding test, told the same story. Under a useful-cluster rule (at least five responses per cluster, at least 70% coverage, k from 2 to 80), the best configuration — formula narrative with the Jina retrieval Q8 model, centered cosine, complete linkage — reached a weighted useful-cluster SD of 2.547 points and a weighted range of 7.142 points. That beats the 3.866-point SD of the unpartitioned response sets, but it is far from score purity, and selected k values were large: the method carved many small neighborhoods, not a few rubric categories. Both analyses describe a space that is score-enriched but not score-equivalent.

## Why surface form beat physics: the Carnot toy set
The synthetic experiment shows why. The authors wrote five fully correct statements of the work done by a Carnot engine, each differently formulated, then generated three closely worded variants of each that introduced one recurring conceptual flaw: a Celsius-ratio error, a reversed ratio, and a rejected-heat confusion. So two groupings compete: the "statement pair," shared wording, and the "flaw family," shared misconception. Semantic clustering should recover the flaw family; surface clustering recovers the pair. With oai3large embeddings, the centered-cosine layout grouped each correct statement with its three wording twins, not with other correct statements or its flaw family. Centering sharpened the surface organization rather than the conceptual one, which explains why ordinary and centered cosine barely differed against scores: both organized by the wrong features. The authors connect this to the classic expert-novice finding in [[physics-education|physics education research]]: experts categorize by principle, novices by surface feature, and the embeddings, in this limited respect, behave like novices. That diagnosis bears on using embeddings to surface [[misconceptions]] or code [[problem-solving]] strategies at scale.

## What the failure does and does not rule out
The paper's scope is restricted to unsupervised similarity and clustering of pretrained representations. Supervised classifiers, rubric-aware prompting, task-specific fine-tuning, and direct LLM grading are outside the test, and the discussion concedes a supervised or rubric-aware system may score better. Nor does the result imply that clusters are useless: mixed-score clusters can still support browsing a large response set, selecting exemplars for grader calibration, flagging unusual solutions, and batching work for human review. The distinction the article keeps returning to is between organizing responses and defining grading categories — a cluster is a hypothesis requiring external evidence, not a finding. The future work follows: validate neighborhoods against item-level rubric scores, error categories, or human-coded strategies rather than total scores, since one problem score flattens conceptual, mathematical, representational, and numerical components that embeddings might track differently; compare unsupervised embeddings against direct LLM comparison and supervised baselines; and tie validity evidence to the intended use, because exploratory research, formative feedback, grading assistance, and [[summative-assessment|summative scoring]] demand different kinds and levels of it.

## What this means for practice
- **Instructors.** Use embedding clusters to sort and browse a large stack of handwritten solutions before grading — grouping similar-looking work into review batches — but assign every score yourself; do not treat cluster membership as evidence that two solutions deserve the same mark.
- **Assessment designers.** Budget for the representation decision: a structured or narrative transcription that makes formulas, diagrams, and apparent method explicit preserved more grading-relevant structure than verbatim ASCII, so specify the transcription protocol as part of the assessment pipeline rather than as a preprocessing afterthought.
- **Researchers.** Report embedding similarity against an external criterion before claiming it measures conceptual similarity, and treat a high-similarity neighborhood as a hypothesis; the Carnot set shows a layout can look convincingly organized while tracking wording rather than physics.
- **Educational technology developers.** Build the human review step into the product: a cluster view, an exemplar picker, and an outlier flag are supported by this evidence; an auto-score from embedding proximity is not.

## Limitations
- The data come from a single high-stakes engineering thermodynamics exam at one institution (ETH Zurich), so results may differ for other physics topics, lower-stakes assessments, typed solutions, conceptual explanations, or different rubric structures.
- Participation was opt-in in a high-stakes setting: 252 of the 434 students who sat the exam consented, and the approved protocol (Study 2023-N-286) barred linking participation to demographics or scores, so selection effects cannot be checked.
- Human scores are an operational representation of the construct, not a perfect ground truth, which caps how strongly any alignment could be interpreted.
- Transcription by GPT-5.4 put a model-mediated layer between the handwritten artifact and the embedding; rubric-blind is not knowledge-free, and the narrative conditions involved genuine interpretation, so the advantage of narrative representations may partly reflect model inference rather than preserved student reasoning.
- The clustering results are optimistic by construction: k was chosen retrospectively by minimizing the useful-cluster SD with reference to the scores, so the reported quality is a best-case diagnostic rather than a deployable procedure.
- One corrupted embedding file removed a Problem 4 response from every condition, reducing the analysis set from 993 to 992 student-problem solutions.

## Citation
Tauschhuber, M., & Kortemeyer, G. (2026). [*Testing the validity of embedding-based similarity and clustering for handwritten physics solutions*](https://doi.org/10.1103/sdnj-cjst). Physical Review Physics Education Research 22, 020147 (2026).
