---
title: "A Unified Response Framework for Questions and Tutoring Dialogues"
created: "2026-10-16T09:20:00-04:00"
updated: "2026-10-16T09:20:00-04:00"
type: article
sources: ['raw/papers/unified-irt-framework-question-tutoring-dialogue-2026.md']
confidence: high
page_kind: [framework, evaluation]
research_method: [experiment]
level: [k 12]
audience: [instructors, learners, researchers, software developers]
discipline: [math education]
pedagogy: [scaffolding]
technology: [intelligent-tutoring, knowledge-tracing, student-modeling, educational-nlp, llm]
assessment: [item-response-theory, automated-assessment, formative-assessment, educational-measurement]
methods: [quantitative-research]
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-16"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Student models for [[online-teaching-and-learning|online learning]] platforms are built almost entirely on responses to standalone questions. [[knowledge-tracing|Knowledge tracing]] tracks ability over time and [[item-response-theory]] calibrates item difficulty, but neither looks inside the [[intelligent-tutoring|tutoring dialogues]] that increasingly accompany practice, where a tutor's intermediate questions expose exactly which step a student can and cannot do. Duan, Woodhead, Miller-Vedam and Lan propose URF-QD, which identifies the mathematical subtasks tutors pose mid-dialogue, rewrites each into a self-contained question with GPT-5.4, and models original questions and dialogue subtasks on one shared IRT scale through a text-based difficulty encoder and a dynamic [[student-modeling|student ability]] state. A relative-order regularizer converts tutor moves — scaffold after struggle, push for rigor — into soft constraints on the difficulty of consecutive subtasks. On the Eedi and Khan Academy [[math-education|math]] datasets it beats strong baselines on question difficulty and response correctness prediction, recasting dialogue turns as fine-grained [[formative-assessment|formative assessments]], and it supports a preliminary tutor [[benchmark]].

## Key Findings

1. URF-QD puts original-question responses and tutor-posed dialogue subtasks on one shared 1PL IRT scale, and it leads all four difficulty-prediction metrics on both the Eedi and Khan Academy datasets.
2. On Eedi it reduces difficulty-prediction MSE by 7.7% over the strongest baseline and improves PCC and SCC by 6.5% and 8.0%, reaching MSE 0.350, PCC 0.458, and SCC 0.447.
3. On Khan Academy it reaches MSE 0.270, MAE 0.409, and PCC 0.446 over five-fold cross validation, improving all three over its original-question-only counterpart.
4. Adding dialogue subtasks plus relative-order regularization lifts Eedi response-correctness AUC and accuracy by 6.3% and 4.5% (AUC 0.637, accuracy 0.598); Khan Academy reaches AUC 0.598, accuracy 0.676, and F1 0.798.
5. Difficulty-order satisfaction rises from 0.699 with no regularization to 0.899 at λ = 1, showing tutor moves constrain the learned subtask difficulties.
6. GPT-5.4 reaches a macro-F1 of 0.754 for tutor move annotation against human labels, and 85.5% of rewritten subtasks are judged both self-contained and faithful to the original mathematical demand.

## A shared scale built from rewritten subtasks

The pipeline starts where dialogue data is messiest. Every tutor turn followed immediately by a student turn becomes a candidate subtask; GPT-5.4 then decides, from the full [[conversational-ai|dialogue]], whether the turn poses an explicit mathematical task and whether the student attempts it, and only turns passing both tests are kept. Each survivor is rewritten into a concise standalone question that resolves back-references while preserving its demand, and the student's response is labeled correct or incorrect using the LLM annotation protocol of Scarlatos et al., which reported Cohen's κ = 0.722 against expert annotations versus κ = 0.719 between human annotators. Rewritten subtasks then look like original questions: a frozen Qwen3.5-4B encoder mean-pools task text into a 2560-dimensional embedding, a three-layer MLP head predicts a scalar difficulty, and a recurrent [[knowledge-tracing]] state updated after each response projects a dynamic ability, combined in a 1PL logistic response function. Because difficulty comes from [[educational-nlp|question text]] rather than a per-item parameter, unseen and student-specific subtasks can be calibrated at all.

## Tutor moves as difficulty supervision

Dialogue supplies a signal that plain response data does not: the tutor's next action reveals how hard the next task should be. Coding the [[pedagogy|pedagogical]] transition between consecutive subtasks, the authors use scaffold-after-struggle moves (an incorrect response followed by a simpler, more concrete task) to require bj,k < bj,k−1, and push-for-rigor moves (a correct response followed by a request for justification, derivation, or proof) to require the reverse, both as hinge-loss penalties added at weight λ. This turns [[scaffolding]] and rigor-pushing into free supervision for subtask difficulty, which has no ground-truth labels of its own. The effect is visible in the satisfaction rates: at λ = 0, 0.699 of annotated pairs obey the implied ordering, and at λ = 1 the rate is 0.899, rising further to 0.912 and 0.914 at λ = 3 and λ = 10. An ablation on Eedi confirms that removing the rewrite or the regularization both degrade difficulty prediction, while removing the regularizer barely changes response correctness (AUC 0.640 without it versus 0.637 with it).

## Evidence from two tutoring platforms

The evaluation spans two [[math-education|math]] platforms. Eedi contributes dialogues between real students and human tutors — after processing, 588 students, 3,689 questions, 1,775 dialogues, and 152,280 question-answering records, yielding 4,175 subtask instances of which 467 are scaffold-after-struggle and 48 push-for-rigor. Khan Academy contributes student exchanges with an AI tutor — 136 students, 3,423 questions, 1,800 dialogues, and 56,529 question-answering records, giving 4,996 subtask instances, 549 scaffold-after-struggle and 21 push-for-rigor. Both datasets are anonymized and cover Algebra, Geometry, and Number. Results are averaged over five-fold cross validation, splitting by problem for difficulty prediction and by student for correctness prediction, and URF-QD is compared against kNN Mean, Random Forest, and ICL kNN plus a supervised Diff SFT baseline, and against DKT, DKT (Joint), AKT, and simpleKT for correctness. The consistent gains across a human-tutored and an AI-tutored corpus are the paper's strongest [[quantitative-research|evidence]] that subtask responses carry information about student knowledge and question difficulty.

## Benchmarking tutors and linking difficulty to outcomes

The framework also supports analyses beyond prediction. On Eedi, the authors compute the mean gap between a student's estimated ability θ and the difficulty b of each tutor-posed subtask, and relate it to the correctness of the student's next eligible original question: across 553 dialogues from 327 students and 514 next-question responses, the linear fit has a slope of 0.613 with a p-value of 0.001, so easier subtasks relative to ability precede higher subsequent correctness. Extending this to tutor behavior, they prompt GPT-5.4 to generate the next tutoring task and standalone rewrite, producing 2,994 paired human-versus-LLM subtask comparisons across 916 dialogues; all but one of the 21 human tutors with at least 20 comparisons pose easier subtasks on average than the [[llm|LLM]] tutor, an advantage of 1.11 percentage points for the human tutor (p = 0.006). This motivates a proposed [[benchmark]] for whether a tutor poses tasks at the right difficulty, complementing MathTutorBench and TutorMoments, which the authors note rely on LLM-as-a-judge rather than psychometric models.

## What this means for practice

- **Instructors.** Read the dialogue, not only the answer: a wrong multiple-choice response can hide a correct scaffolded calculation and a surviving gap in justification.
- **Software developers.** Calibrate dialogue subtasks from their text instead of assigning a fresh parameter per item, so student-specific tasks still land on the same [[adaptive-learning|adaptive]] difficulty scale as the original question bank.
- **Researchers.** Treat tutor moves as labeled difficulty orderings — scaffold-after-struggle pairs and push-for-rigor pairs are supervision you already collect, and they raised order satisfaction from 0.699 to 0.899.
- **Curriculum designers.** Audit where a tutor's next task sits relative to student ability; the paper's 0.613 slope links larger ability-minus-difficulty gaps to higher correctness on the following question.
- **Learners.** Expect intermediate tutor questions to count: responses to them update the ability estimate that chooses what comes next.

## Limitations

- The Khan Academy dataset is not publicly available and only a subset of the Eedi dataset is accessible, and the authors report no other dataset at the granularity the framework needs.
- Neither dataset provides ground-truth question difficulty labels; reference labels come from fitting a 1PL IRT model to observed original-question responses, so they depend on that model's assumptions.
- The framework is restricted to the 1PL IRT model and binary response-correctness labels, which the authors note may not fully capture the complexity of student knowledge.
- Push-for-rigor moves are rare — 48 versus 467 scaffold-after-struggle pairs in Eedi and 21 versus 549 in Khan Academy — and the paper attributes lower annotation agreement (Fleiss's κ = 0.591) and lower F1 (0.674) for that move partly to this imbalance.
- Demographic information is unavailable in both anonymized datasets, so disparities across student populations cannot be evaluated.

## Citation

Duan, Z., Woodhead, S., Miller-Vedam, M., & Lan, A. (2026). [*A Unified Response Framework for Questions and Tutoring Dialogues*](https://arxiv.org/abs/2610.19532). arXiv preprint arXiv:2610.19532 (cs.CL).
