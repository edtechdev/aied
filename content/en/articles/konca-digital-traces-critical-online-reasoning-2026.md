---
title: "What Do Digital Traces Predict? Task Effects, Student Differences, and Critical Online Reasoning"
created: "2026-11-17T09:29:23-05:00"
updated: "2026-11-17T09:40:00-05:00"
type: article
authors: ["Konca, M.", "Mehler, A."]
published: "2026"
venue: "arXiv preprint 2611.20803"
source_url: https://arxiv.org/abs/2611.20803
evidence_context: educational
confidence: medium
assessment: [process-oriented-assessment, assessment-validity, educational-measurement]
technology: [learning-analytics, machine-learning]
methods: [quantitative-research, network-analysis]
foundations: [critical-thinking, information-and-media-literacy]
research_method: [process-outcome modeling]
discipline: [learning sciences]
level: [higher ed]
audience: [researchers, assessment designers, learning analytics designers]
page_kind: [evaluation]
sources: ['raw/papers/konca-digital-traces-critical-online-reasoning-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

> **Synthesis:** Pooling browsing traces across tasks can make [[learning-analytics|learning analytics]] look more predictive than it is. Konca and Mehler modeled 527 sessions from 424 [[higher-ed|university students]] on four open-Internet [[critical-thinking|critical online reasoning]] tasks and scored every prediction both within and across tasks. None of the twelve prespecified tests was significant, and consulted-page content carried no reliable within-task signal on a held-out task. Pooled correlations ran a median of 0.169 above their within-task counterparts, and for task-specific factual correctness the gap reached 0.415 versus 0.015 — differences between tasks rather than between students. That criterion also showed 64% student-by-task variance against 8% stable student variance. Written responses, not browsing traces, produced the strongest prediction, and [[information-and-media-literacy|information literacy]] traces predicted generic response quality only modestly once sentence embeddings replaced Coh-Metrix indices.

## Key Findings

- **Pooled correlations overstate prediction.** Across 576 configurations, pooled correlations exceeded within-task correlations by a median of 0.169, and 525 of 576 gaps stayed significantly positive after correction.
- **The gap is largest for factual correctness.** At observation-level splits, consulted-page content correlated 0.415 with task-specific factual correctness when scores were pooled across tasks, but only 0.015 within tasks.
- **The prespecified models did not transfer.** None of the twelve primary tests survived correction, and within-task page-content signals were weak or negative for response quality, correctness, and coherence.
- **Written responses did the predictive work.** Written-response features reached within-task correlations of 0.320 for generic response quality, 0.126 for factual correctness, and 0.310 for coherence, all significant before correction.
- **Factual correctness barely separates students.** Student-by-task interaction explained 64% of its variance against 8% for stable student differences; single-task generalizability was 0.10, so the criterion may not measure a durable student attribute.
- **Order added nothing beyond shuffled order.** Observed consultation order improved factual-correctness prediction over unordered features, but a permuted order performed comparably, so the ordering signal did not hold up.
- **Embeddings found a small signal.** Sentence embeddings correlated 0.150 with generic response quality at task holdout (pHolm = 0.024), yet unordered and randomized controls performed comparably, leaving the responsible trace features unidentified.

## Four Tasks, 527 Sessions

Each task asks a student to research an open question on the internet and write a justified response: health risks from cell-phone towers, mosquito-bite treatment with heat sticks, Tetra Pak recyclability, and poisoning from a traditional German dish. Of 664 rated responses, 544 from 435 students had at least one recorded page visit; requiring two analyzable content pages left 527 observations from 424 students at three German universities, 514 of them with valid scores on all three primary outcomes. The smallest task contributed 92 eligible observations, and 474 of 527 trajectories contained at least three pages. Trained student raters had scored the responses with the generic critical online reasoning [[rubrics|rubric]]. The authors formed three unweighted composites — domain-independent response quality, task-specific factual correctness, and coherence — plus an overall mean. They audited those criteria instead of revising them: a score that cannot rank students consistently across tasks cannot validate a predictor of that ranking, which makes [[assessment-validity|criterion validity]] the first question rather than the last.

## What the Models Saw

Consulted pages entered as text, not as clicks. A German adaptation of Coh-Metrix supplied 17 cohesion, lexical, and syntactic indices per page, averaged into one order-invariant vector per session. Thirty-four visit descriptors added counts, revisit rates, and topic, genre, and emotion shares; 16 order features encoded trajectory positions and displacement; 22 relational features encoded annotation agreement and page similarity. Structural blocks were contrasted against permutation controls averaged over 32 random shuffles, so a gain had to beat both the simpler model and its shuffled twin. A second feature source used 384-dimensional sentence embeddings from paraphrase-multilingual-MiniLM-L12-v2. The estimators were conventional [[machine-learning|machine learning]]: random forests with 300 trees were primary, joined by support vector regression, partial least squares, a gated recurrent unit, and a message-passing [[network-analysis|graph network]] as benchmarks. Three validation tiers separated observations, students, and whole tasks, and the metric was always a within-task Spearman correlation, weighted equally across the four tasks.

## Pooled Correlations Are Not Student Differences

The headline number is a gap. Pooling predictions and ratings across tasks raised correlations without changing a single prediction, and the median gap of 0.169 held across estimators and specifications. Standardizing outcomes within each task removed the gap almost entirely — median 0.008 — which locates the source in task-level differences in both traces and scores. The tier comparison cut the other way: withholding a whole task did not depress within-task correlations, and written-response features predicted response quality better at task holdout than at observation-level splits. What a pooled correlation measures, then, is partly a model's ability to recognize which task it is looking at. For anyone reporting one correlation between [[process-oriented-assessment|process data]] and scores, the practical implication is blunt: the number may be mostly a task classifier wearing a student-modeling label.

## The Criterion Has to Generalize Too

A predictor can only be as stable as the score it predicts. Students who completed two tasks kept their relative standing on response quality (ρ = 0.38) and coherence (ρ = 0.30), but not on factual correctness (ρ = 0.11, 95% CI [-0.07, 0.28]). The variance decomposition explains why. Factual correctness loaded 64% on student-by-task interaction and 8% on student, giving a single-task [[educational-measurement|generalizability]] coefficient of 0.10; response quality and coherence reached 0.39 and 0.40, and four tasks would lift them to 0.70. Factual correctness would need roughly 22 tasks for the same dependability. Coherence also carried a significant rater main effect of 19%, the only such effect among the primary outcomes. The audit therefore bounds what the null results mean: for factual correctness, a weak predictor and an unstable criterion cannot be told apart, while for response quality and coherence the failure is more clearly a property of the traces.

## What this means for practice

- **Assessment designers.** Report pooled and within-task correlations from identical out-of-fold predictions whenever an instrument spans tasks; a large gap means the model is reading task context rather than student skill.
- **Learning analytics designers.** Audit the outcome before the model. If stable between-student variance is not established for a criterion, a trace model built on it will rank tasks rather than learners.
- **Instructors.** Do not read page-visit dashboards as evidence of a student's reasoning; the representation omits queries, dwell time, and any judgment of source credibility.
- **Administrators.** Keep trace-based scores low-stakes and human-supervised, as the authors recommend; nothing here supports decisions about an individual student.

## Limitations

- Four tasks, one assessment framework, and three German universities; the bootstrap resamples students rather than tasks, so uncertainty from the selection of these tasks is unquantified.
- The criterion audit rests on 136 students who completed two tasks, and the stable student variance for factual correctness has a confidence interval of [0%, 20%].
- Ten percent of eligible sessions contained exactly two pages, where the relational contrast is structurally zero, and URL-based page classification is only a proxy for documents.
- The analysis plan was fixed before modeling on corrected data but after earlier analyses, so it is not an independent preregistration; held-out training sets ranged from 337 to 441 scored observations, confounding task identity with training size. The same group's rubric-level study of rater agreement shows how far apart trained raters actually stand, which bounds any model trained on their scores as a criterion ([[baumartz-rubric-aes-llm-ensembles-2026]]).

## Citation

Konca, M., & Mehler, A. (2026). [*What Do Digital Traces Predict? Task Effects, Student Differences, and Critical Online Reasoning*](https://arxiv.org/abs/2611.20803). arXiv preprint 2611.20803.
