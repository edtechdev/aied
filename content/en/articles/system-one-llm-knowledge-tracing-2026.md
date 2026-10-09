---
title: "Can a System-One LLM Perform Knowledge Tracing When Few or No Learners Are Logged?"
created: "2026-10-09T09:30:00-04:00"
updated: "2026-10-09T09:30:00-04:00"
type: article
sources: ['raw/papers/system-one-llm-knowledge-tracing-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers, educational technology developers, assessment designers]
foundations: [ai-education]
technology: [knowledge-tracing, llm, learning-analytics, educational-nlp, student-modeling, generative-ai]
assessment: [educational-measurement, assessment-validity]
methods: [benchmark, ai-ed-evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-09"
    agent: hermes-agent
---

> **Synthesis:** Knowledge tracing — predicting whether a learner will answer the next item correctly — has long depended on logs from many learners, leaving a new course or platform without a usable model. Lee and Park (2026) ask whether an off-the-shelf System-One [[llm|LLM]], which returns a probability for a typed question in a single pass instead of generating text, can close that cold-start gap. On seven public datasets, Jev with no data from the target platform reaches a mean AUC of .706, above the best of 28 deep [[knowledge-tracing|knowledge tracing]] models trained on 8 learners (.689) and above the System-Two Thinking-KT (.650) on all seven datasets at about 1/100 of its API cost. Adding 64 knowledge-component-matched examples and a similar-learner statistic (JevKT) raises this to .722 and keeps the lead until supervised deep KT catches up between 64 and 128 learners. The gain comes from the model rather than the prompt format: three other LLMs reading the byte-identical request fall below it on every dataset. The result reframes the [[learning-analytics|learning analytics]] cold start as a question about what a model already knows, not how much a platform has logged.

## Key Findings
1. With no target-platform data, Jev0-shot reaches .706 mean AUC across seven datasets, above the best of 28 deep KT models trained on 8 learners (.689) and above Thinking-KT (.650) on all seven.
2. Adding 64 KC-matched examples and a similar-learner statistic (JevKT) lifts the mean to .722 and beats deep KT by +.033 AUC at N=8 on 7/7 datasets.
3. JevKT stays significantly ahead up to 16 training learners and ahead on average up to 64; supervised deep KT catches up between 64 and 128 learners.
4. One Jev pass costs \$886 per million predictions at 325 ms, about 1/5 of Thinking-KT's \$4,360; Jev0-shot costs \$44 and beats Thinking-KT at roughly 1/100 its cost.
5. The single-pass probability is far better calibrated: Jev0-shot ECE .084 against Thinking-KT's .253 and LOKT's .209, whose ten-sample vote frequencies can take only eleven values.
6. For new learners the lead holds from their first interactions (.714 vs .691 at positions 2-5), but on unseen items with all learners logged deep KT is ahead (.729 vs JevKT's .713).
7. Three other LLMs behind the same typed interface — GPT-4o-mini (.680), Gemini-2.5-Flash-Lite (.670) and DeepSeek-V4-Flash (.626) — fall below Jev on all seven datasets.

## Method and evidence

The study poses KT to a frozen System-One model as one typed question: given a serialized [[student-modeling|learner state]] (the last H=25 interactions), return the probability of "yes" to whether the learner answers the next item correctly. Jev0-shot uses that state alone; JevKT adds k=64 solved examples from training learners whose items share a knowledge component with the target and a similar-learner statistic (the first-attempt accuracy on the target item of the n=20 most similar training learners). The input recipe was selected on a development split with the rule fixed before test. Seven public datasets are used — ASSIST2009, NIPS34, XES3G5M, DBE-KT22, Algebra2005, Junyi and ASSIST2017 — split 80/20 at the learner level, with N∈{8,16,32,64,128,256,all} nested subsets over 5 seeds and 2,000 targets per dataset. Baselines are the best of 28 pyKT deep models chosen on test in every cell (which favors deep KT), plus prompted and trained LLM-based KT.

## Why the gain is the model, not the format

Two controls separate the model from the prompt. When the identical serialized input is read by Jev instead of Qwen3.5-9B, AUC rises in all 35 cells (7 datasets × 5 conditions), for example from .727 to .776 with the JevKT input, and on the state alone Jev reaches .761 against .752. A typed one-pass head on the same Qwen weights is worse than the plain readout (.630 vs .688), and distilling Jev into those weights does not beat it. Three other LLMs queried through TypeSafe's official System-One adapter — GPT-4o-mini, Gemini-2.5-Flash-Lite and DeepSeek-V4-Flash — are below Jev on every dataset (paired bootstrap, p<.01). Contamination checks find no sign of memorization: relabelling IDs changes Jev0-shot AUC by at most .012, never significantly, and on six synthetic datasets generated after the model release JevKT is still at or above the best deep KT model at N=8.

## Where the advantage ends

The lead decays as learners are logged, and the crossover is the paper's central boundary. JevKT is ahead of the best deep KT model by +.033, +.023 and +.016 mean AUC at N=8, 16 and 32 (on 7/7, 7/7 and 7/7 datasets); the mean difference falls to +.004 at N=64 and turns to −.002 at N=128. The lead is Holm-significant on 7/7 datasets at N=8, 6/7 at N=16, 3/7 at N=32 and 2/7 at N=64. Because the best deep KT model is selected on test in every cell, these margins are conservative. The setting matters: on unseen items with every training learner available, the best deep KT model is ahead (.729; JevKT is better on 1/7 datasets), so the System-One advantage comes from having few learners, not from unseen items.

## What the logged learners add

JevKT combines the model's prior, which Jev0-shot measures alone, with evidence from the logged learners. At N=8 the prior alone reaches .706, the similar-learner statistic alone .595, and both together .722, against .689 for the best deep KT model. At N=16 the statistic alone raises Jev0-shot from .706 to .729, 64 KC-matched shots alone to .724, and both together to .730 — so the statistic carries almost all of the gain and the shots add to it clearly only on DBE-KT22. The evidence adds +.016 AUC to Jev, significant on 2/7 datasets. Reasoning, by contrast, does not help: on the Qwen3.5-9B backbone of Thinking-KT, budgets of 1024 and 2048 tokens are never significantly better than the same model without reasoning, and one Jev pass beats Thinking-KT on all seven datasets by +.038 to +.073 AUC.

## What this means for practice

- **Instructors.** Treat a single-pass System-One probability as usable when a course has few or no logged learners: Jev0-shot reaches .706 with no target-platform data, and the paper's own [[ethics]] note still asks that predictions support, not replace, instructor decisions.
- **[[educational-technology-developers|Educational technology developers]].** Do not wait for a training corpus before shipping a prediction: a new course can be served immediately at \$44 per million predictions, whereas deep KT must be retrained for every course and platform.
- **Assessment designers.** Budget for the crossover, not the headline: the System-One lead is significant up to 16 learners and gone by 128, so plan to switch to a supervised model once a course accumulates enough learners.
- **Researchers.** Report [[educational-measurement|calibration]] alongside AUC: Thinking-KT's ten-sample vote frequencies produce an ECE of .253 against .084 for a single Jev pass, and a System-Two pipeline can cost \$4,360 per million predictions while losing on all seven datasets.

## Limitations

- The finding rests on one closed System-One model; no other commercial System-One model is available, so generality is tested only with other LLMs behind the official adapter, a Jev-distilled student (JEV-9B, .687 at N=0) and the [[open-source]] Laya (.536, near chance).
- Jev's training data are unknown; the contamination checks find no evidence of memorization but cannot rule it out, and only one Jev version (jev-1.13-20260917) is available, so drift across versions cannot be measured.
- The prompted System-Two baselines run on Qwen3.5-9B, so the conclusion that reasoning does not help applies to this backbone; a larger reasoning model may behave differently.
- Deep KT baselines use default hyper-parameters in the main comparison (a validation-tuned run does not change the conclusion), and F1 is threshold-sensitive on the low-base-rate ASSIST17 dataset.
- Cost comparisons favor the deep KT baselines: DLKT runs at under \$1 per million predictions on a rented RTX 3090, but its limit is data, since it must be retrained for every course and needs logged learners to train on.

## Citation

Lee, U., & Park, H. (2026). [Can a System-One LLM Perform Knowledge Tracing When Few or No Learners Are Logged?](https://arxiv.org/abs/2610.11135). arXiv preprint.
