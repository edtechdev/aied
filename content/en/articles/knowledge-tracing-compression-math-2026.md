---
title: "Compressing student history in mathematics knowledge tracing"
created: "2026-10-14T09:30:00-04:00"
updated: "2026-10-14T09:30:00-04:00"
type: article
sources: ['raw/papers/knowledge-tracing-compression-math-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [math education]
level: [k 12]
audience: [researchers, educational technology developers]
technology: [knowledge-tracing, student-modeling]
pedagogy: [prior-knowledge]
methods: [quantitative-research, benchmark]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-14"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This study asks how complicated a representation of a student's past performance must be to predict the next response, using 1,927,265 [[math-education|mathematics]] responses from 8,996 Finnish students and evaluating every model on students entirely excluded from fitting. A [[knowledge-tracing|knowledge tracing]] baseline that used item identity alone reached an AUC of .8362; adding one dynamically updated measure of recent performance, expressed relative to [[item-response-theory|item difficulty]], raised it to .8669 — recovering 93.5% of the gain achieved by a query-conditioned transformer at .8690. Expanding the explicit [[student-modeling|learner state]] to 50 dimensions lifted that share to 97.1%, while a 128-dimensional transformer over a common history summary reached .8687. The authors conclude that knowing whether a student recently performed above or below expectation captures most of what richer sequence representations buy for next-response prediction, so [[adaptive-learning|adaptive systems]] can often get near-transformer accuracy from a single, interpretable number. Because the split holds out entire students and reserves test outcomes until after model selection, the compression estimate is not an artifact of leakage.

## Key Findings

1. The data were 1,927,265 mathematics responses from 8,996 Finnish students, and evaluation was conducted on students entirely excluded from model fitting.
2. Item-identity prediction alone achieved an AUC of .8362; adding one recency-weighted measure of performance relative to item expectation raised AUC to .8669.
3. That single scalar recovered 93.5% of the AUC improvement between the item-only baseline and a query-conditioned transformer (.8690); at 50 dimensions the share rose to 97.1%.
4. A 128-dimensional transformer using a common summary of student history achieved an AUC of .8687, exceeding the one-dimensional recency model by .0019 and the selected 50-dimensional explicit state by .0007.
5. Returns diminished sharply after the first dimension: moving from item-only to the recency scalar added .0307 AUC, whereas the next 49 dimensions together added only .0012.
6. The same ordering appeared for log loss, though differences among the richer models were somewhat larger; the recency scalar reproduced about 90.0% of the transformer's log-loss reduction, and the 50-dimensional state about 94.2%.
7. Transformer outputs were sensitive to fitting: across five runs the query-conditioned model averaged .8690 (SD = .0011; range = .8673–.8699), and one of the five runs scored lower in AUC than the 50-dimensional explicit model.

## What the models kept, and what they threw away

For anyone building or procuring a learner model, the useful question this paper answers is not which architecture wins but how much of a student's history is actually worth retaining. The authors line up representations that preserve progressively more information: a beta-smoothed [[benchmark|baseline]] using item identity alone, a single student state variable in two flavors (a cumulative aggregate of preceding residual performance, and a recency version that down-weights older observations), nested explicit states of increasing dimensionality, and two transformers that learn directly from the response sequence.

The scalar models are deliberately austere. Each student is summarized at a given moment by one number capturing whether they have recently performed better or worse than the difficulty of the items they encountered would predict. As the authors put it, such a state cannot preserve a detailed record of which items were answered correctly or incorrectly — it can only capture recent performance relative to expectation. The recency variant weights an observation a timestamp groups in the past by w(a) = 0.5^(a/h), with the half-life h and shrinkage chosen on validation log loss; the selected values were h = 5 timestamp groups and λ = 10. States were updated only after a complete timestamp group had been predicted, so the number available for a target group contained no information from outcomes within that group.

## Where the gain comes from, and where it stops

The practical takeaway is the shape of the curve, not its peak. Item identity already carries information about item difficulty, and the first student-specific quantity does most of the remaining work. Adding dimensions beyond it improves prediction only marginally: AUC moved from .8669 at k = 1 to .8674 at k = 5, .8675 at k = 10, .8681 at k = 50, and .8682 at k = 100. The 100-dimensional model had the best test performance in the explicit sequence, but dimensionality was selected on validation log loss, and validation favored k = 50, so the 50-dimensional state was retained as the selected multidimensional model.

The transformers extend the pattern rather than break it. The single-summary transformer pooled preceding history into a common 128-dimensional representation before the target item was introduced, so the same summary predicted every item in the current timestamp group; the query-based transformer let the target item attend directly to encoded previous responses, so the same history could provide different information for different items. Allowing each item to query the history produced the highest mean performance — .8690 across five runs — but the margin over the scalar was .0019 in AUC and over the 50-dimensional state .0007. The authors read this as consistent with prior evidence that greater model complexity does not always produce substantially better knowledge tracing.

## Why the comparison is credible

Two design choices give the numbers their weight. First, the split is by student, not by response: 6,296 training students (1,333,735 responses), 1,346 validation students (289,558 responses), and 1,354 test students (303,972 responses), with no student appearing in more than one sample. Test outcomes were reserved until after hyperparameter and model selection, which used validation log loss. Second, the authors handle the environment's timestamp structure carefully. The 1,927,265 scored responses formed 291,272 student-by-timestamp groups, and 99.45% of responses belonged to groups containing more than one response; responses within a group were treated as simultaneous, each response was predicted using only earlier timestamp groups, and groups were never split.

The framing also matters for how the result should travel. The paper compares models that differ both in how much of the preceding history they retain and in whether that history's representation can depend on the target item, and the authors are candid that the model sequence establishes that the recency signal was sufficient for most of the predictive gain, not why the learning histories had this structure. Different complexities may still pay off for purposes the comparison did not evaluate — the authors position the trade-off as computational cost and interpretability on one side and unexplored uses on the other.

## What this means for practice

- **Instructors.** Treat recent relative performance as a meaningful signal about where a student stands right now — a student performing below expectation on recent material is the case a learner model flags most strongly.
- **Developers.** Before adding sequence-model complexity to a knowledge-tracing pipeline, benchmark a single recency-weighted state variable relative to item difficulty; in these data it recovered 93.5% of the strongest transformer's AUC gain.
- **Developers.** Reserve transformer capacity for cases where its small measured advantage justifies the cost, and log loss is where the richer models separate most, so choose the metric that matches the deployment decision.
- **Developers.** Because model-fit variation was comparable in magnitude to the gaps between the strongest models, run multiple seeds and report the spread before claiming one architecture beats another; here one of five query-conditioned runs fell below the 50-dimensional explicit model.
- **Researchers.** Use the held-out-by-student split and the timestamp-group treatment of simultaneous responses as a template, since evaluating on unseen students and preventing same-group leakage is what makes the compression estimate trustworthy rather than inflated.

## Limitations

- The results concern one predictive task in one digital mathematics environment — ViLLE Learning Paths — which determines which items students encounter, how responses are grouped into submissions, and the temporal structure available to the models; other learning environments may produce different results.
- Items were defined by exercise and question position rather than externally validated mathematical concepts, so the results concern prediction from these interaction histories rather than the structure of mathematical knowledge.
- Of the 3,022 items, 64 appearing in the test data were unseen during training, so predictions for those items could not use item-specific information learned from training data.
- The models were evaluated only by predicting subsequent responses within the same learning environment; the analyses do not show whether the scalar or multidimensional states predict independent assessments of mathematical knowledge.
- Differences among the strongest models were small relative to variation across fits: the query-conditioned transformer's five runs averaged .8690 with SD = .0011, and the authors state this describes stochastic variation across model fits rather than sampling uncertainty.
- The authors disclose that [[generative-ai|ChatGPT]] 5.6-6.0 was used to first-draft and edit the manuscript and to generate code for the statistical analyses, so the tooling behind the reported pipeline is a 2026-era model generation.

## Citation

Lahtinen, O., & McMullen, J. (2026). [*Compressing student history in mathematics knowledge tracing*](https://osf.io/z2s8n). EdArXiv preprint.
