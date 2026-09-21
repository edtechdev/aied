---
title: Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs
created: "2026-06-10T07:38:00-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, student-modeling]
research_method: [system development]
audience: [instructors, researchers, software developers]
level: [higher ed]
confidence: high
page_kind: [evaluation]
sources: ['raw/papers/2606.10736.md']
---

Large online courses field thousands of questions to conversational AI teaching assistants, yet those logs are rarely treated as measurement instruments. Medhat, Park, Thajchayapong, and Goel (Georgia Institute of Technology) convert them into curriculum-grounded diagnostics: each question is classified into a curriculum topic with a few-shot text classifier, and topic volumes are read against a prerequisite [[knowledge-graph|knowledge graph]] extracted from the course's own lesson materials. The premise is that students rarely struggle with one topic in isolation — the cause often lies in an unconsolidated upstream prerequisite — so the analytic unit is the topic, not the question. The authors frame the result as a low-cost complement to [[knowledge-tracing]].

> **Synthesis:** Rather than demanding an item bank or per-question correctness judgment, this work mines a byproduct that already exists — help-seeking behavior toward a [[conversational-ai|conversational AI]] teaching assistant — and maps it onto instructor-auditable curriculum structure. The parts are modest individually (GPT-4 extraction, a FastFit classifier, a survey correlation); the assembled argument is that aggregate question volume is a usable proxy for where a cohort struggles, and that the prerequisite graph becomes a diagnostic scaffold rather than a design artifact.

## Key Findings
1. A few-shot FastFit classifier maps student questions to 43 labels (42 topics plus an abstention class) at 80.0% accuracy, macro F1 = 0.669, on a 70-question gold set.
2. FastFit slightly beats GPT-4 used directly under the same closed-label prompt (0.786 accuracy / 0.654 macro F1) and stays reproducible across runs.
3. Topic-level question volume correlates significantly with self-reported difficulty across 28 matched topics (Spearman's ρ = 0.491, p = 0.008).
4. The label space comes from a GPT-4-extracted prerequisite graph of 54 topic nodes and 47 directed edges built from 26 lesson PDFs.
5. Of the 54 topics, 42 receive a training label, counts are long-tailed (median = 5, max = 89, min = 1), and 12 topics are never predicted.
6. The 14 misclassified gold items split into surface-keyword traps (7/14), adjacent reasoning topics (5/14), and vague or abstention misfires (2/14).

## Building the prerequisite graph

An instructor with domain expertise used GPT-4 on 26 lesson PDFs from a graduate-level AI course at a US R1 university in three stages: topic extraction, where each lesson's teachable units were listed with one-sentence definitions; boundary consolidation, where near-identical topics were merged but textbook-distinct ones — Case-Based Reasoning versus Analogical Reasoning — were kept apart; and edge extraction, where GPT-4 judged each candidate pair and ambiguous or bidirectional responses were discarded. The graph contains 54 topic nodes and 47 directed edges, such as Semantic Networks → Frames. The authors defend it on the grounds that only unambiguous judgments survive and that representative edges match textbook lesson ordering, while declining to claim it is the unique correct structure. Its edges are also where future per-student gap signals are meant to propagate.

## Classifying student questions (H1)

The evaluation draws on 1,340 question events from 164 students, filtered to 1,046 unique student-authored questions. GPT-4 labeled that pool under a closed-label protocol enumerating all 54 topics, forcing either a single best topic or the literal string unknown. Of the 54 nodes, 42 received a training label, giving an effective output space of 43 labels; because counts are long-tailed, the abstention class was downsampled from 464 to 80 examples, yielding a balanced pool of 737 items. On the 70-question gold set, FastFit reaches 80.0% accuracy and macro F1 = 0.669 (weighted F1 = 0.856), ahead of GPT-4 direct, and is preferred for reproducible predictions.

## Validating against self-reported difficulty (H2)

The comparison uses an instructor-authored mid-semester Qualtrics survey with 280 respondents, which predates and is independent of the graph extraction; 28 topics were matched across the two instruments, after excluding 8 survey topics with no graph counterpart and 18 graph topics with no survey entry. Across those 28 topics, question volume correlates significantly with reported difficulty: Spearman's ρ = 0.491, p = 0.008. Analogical Reasoning generates the most assistant questions (89 events) and is the fifth most-reported difficulty topic (19.3% of respondents); Generalization (33 events) and Constraint Propagation (28 events) rank highly on both. Rank agreement is strong for 14 of 28 topics (|Δ| ≤ 3), moderate for 9, outlying for 5 — but the signal is aggregate, not per-student.

## What this means for practice

- **Instructors.** The pipeline turns passively logged assistant interactions into topic-level difficulty signals with no additional student burden, and the ranking can be checked against independent survey evidence before anyone acts on it. The envisioned use is a cohort-wide instructor dashboard.
- **Researchers.** Topics are preferred over questions deliberately: per-question correctness assessment in free-form questions is a multi-hop reasoning problem current LLMs handle unreliably, while topic-level aggregation is more robust to classifier noise and matches instructor granularity.
- **Software developers.** The pipeline avoids an item bank and a Bayesian skill model, reusing existing chat logs; the signal could be routed back to the assistant as prerequisite-review suggestions or surfaced through the LMS as student-specific recommendations.

## Limitations

- One graduate-level AI course at a US R1 university: 1,340 question events from 164 students, with H1 measured on a 70-question gold set the authors call small relative to the 43 target classes.
- The [[knowledge-graph|prerequisite graph]] is GPT-4 output — 54 nodes and 47 edges from 26 lesson PDFs — and the authors do not claim it is the unique correct structure; 12 topics are never predicted, and 8 survey topics plus 18 graph topics were dropped from the H2 comparison.
- Both measures are proxies: a 20% classification error rate injects label noise concentrated in topics with overlapping vocabulary, which the authors say likely attenuates the correlation, and the survey counterpart is self-reported difficulty, not a learning outcome.
- No live deployment was tested; propagation of per-student gaps along prerequisite edges and a closed-loop dashboard study are future work.

## Connected Concepts

- [[student-modeling]]
- [[learning-analytics]]
- [[knowledge-graph]] — the GPT-4-extracted prerequisite curriculum graph
- [[knowledge-tracing]] — complementary modeling of topic difficulty vs. mastery
- [[llm]] — few-shot classification and graph extraction
- [[generative-ai]] — powering the underlying language models
- [[intelligent-tutoring]] — conversational AI teaching assistants
- [[scaffolding]] — diagnostic support for instructor decision-making
- [[recommender-systems-and-learning-paths]]
## Connected Articles

- [[huang-interpretable-knowledge-tracing-2026]]
- [[didactical-teacher-assistant-dimensional-modeling]] — Dimensional modeling of teaching assistants
## Citation

Medhat, Y., Park, J., Thajchayapong, P., & Goel, A. K. (2026). [*Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs*](https://arxiv.org/abs/2606.10736).