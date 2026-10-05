---
title: "What Makes Something Hard(er)? Explaining Question Difficulty in Natural Language"
created: "2026-10-05T08:15:00-04:00"
updated: "2026-10-05T08:15:00-04:00"
type: article
sources: ['raw/papers/2610.01627.md']
confidence: medium
page_kind: [synthesis]
research_method: [experiment, secondary analysis]
audience: [researchers, assessment professionals, assessment designers]
assessment: [item-response-theory, educational-measurement, automated-question-generation, psychometrically-aware-ai]
methods: [benchmark, quantitative-research]
technology: [llm, generative-ai, educational-nlp]
foundations: [theories-and-frameworks]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-05"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Difficulty decides whether a benchmark question can still tell two models apart, yet most methods return only a number. This paper tries to return an explanation instead. The authors estimate each item's difficulty with a one-parameter [[item-response-theory|IRT]] (Rasch) model fitted to the responses of a large pool of [[llm|LLMs]], then prompt Gemini-3.1-pro-preview to propose natural-language hypotheses about why one question is harder than another, cut the candidates down with L1-regularized regression on held-out questions, and score the survivors against black-box difficulty predictors. Across three [[benchmark|benchmarks]] — GSM8K, BBH-structured, and WinoGrande — the selected hypotheses predict the difficulty of unseen questions about as well as fine-tuned encoders and few-shot frontier judges, and add signal those predictors miss when supplied as extra features. A closing causal analysis edits questions toward or away from a hypothesis and finds measured accuracy moves in the expected direction. It is an LLM-evaluation and psychometrics study: every difficulty value is estimated from model responses, so it says nothing about how hard these items are for human learners.

## Key Findings

1. Difficulty is estimated, not annotated. On GSM8K (1,319 questions), BBH-structured (1,396), and WinoGrande (1,267), a 1PL IRT model is fitted to LLM response records from RouterEval — 5,000 models for GSM8K and WinoGrande, 3,811 for BBH-structured — using py-irt.
2. Used alone on unseen questions, the selected hypotheses reach R² = 0.373 on GSM8K, 0.580 on BBH-structured, and 0.090 on WinoGrande. That is the best of the compared methods on GSM8K and WinoGrande and second best on BBH-structured, where a fine-tuned RoBERTa-base reaches 0.646.
3. Used as extra features, the hypotheses raise existing predictors: +0.19 and +0.18 over the two frozen embedding models on GSM8K, and +0.11 over fine-tuned RoBERTa-base (0.362 to 0.468). On BBH-structured the gain over RoBERTa-base is small (+0.008), and on WinoGrande the hypotheses lift baselines sitting near zero to R² between 0.08 and 0.10.
4. The hypotheses describe cognitive demands rather than surface features. Examples: on GSM8K, "The problem requires multistep bookkeeping in which intermediate results feed subsequent calculations" (Cohen's d = 0.899); on BBH-structured, "The solver must order at least five entities from relational constraints or attributes" (d = 1.419); on WinoGrande, "Resolving the blank requires a multistep causal chain with an unstated intermediate state or action" (d = 0.559). The 95% confidence interval for the separation statistic had a lower bound above zero for 13 of 15 top hypotheses.
5. The pipeline runs 30 rounds of group-based and 30 rounds of pair-based generation, producing candidate pools of 376, 235, and 171 hypotheses on the three datasets that shrink to 233, 127, and 146 after deduplication and refinement. Selection uses a LASSO fitted on 100 subsamples of 75% of the verification pool.
6. Contrast construction matters. Mixing group and pair prompts beat either alone, and the best contrast strength was dataset-specific: large difficulty gaps won on GSM8K while smaller gaps won on BBH-structured, so the authors recommend the mixed strategy as the more reliable option.
7. The method also surfaced a data-quality factor: on GSM8K, one hypothesis flags items whose reference answer contains a contradiction or logical error. Such items are rare (about 1% of the data) but carry a large difficulty effect (d = 2.063).

## How difficulty is measured and explained

The method has three stages, all estimated inside a generation pool and a verification pool; the test pool is used once, for the reported metrics. Difficulty is first fitted with a one-parameter logistic (Rasch) model, so the result is a latent, continuous quantity inferred from which models answered which items correctly — closer to an explanatory item response model than to the hand-coded cognitive features of earlier work, and a data-driven relative of that [[educational-measurement|psychometric]] lineage. Contrastive groups are then built by splitting the generation pool into difficulty buckets and repeatedly drawing hard and easy questions, with a reuse penalty that pushes the sampler toward fresh contrasts. Gemini-3.1-pro-preview writes hypotheses from those contrasts; near-duplicates (cosine similarity above 0.85 under Qwen3-Embedding-4B) are merged, and Gemini-3.7-Flash then labels every remaining question as satisfying or not satisfying each hypothesis.

That binary label matrix is the bridge to prediction and to selection, and it is also where the strongest caveat sits: the entire chain — proposing hypotheses, matching questions to them, and later verifying edited questions — is carried out by LLMs, and the paper reports no human adjudication of hypothesis quality or of the match labels. The hypotheses are interpretable sentences, but their validity is established statistically (they separate hard from easy items and improve prediction) rather than by expert review.

One bibliographic wrinkle worth stating plainly: the arXiv listing title reads "Explaining Question Difficulty in Natural Language," while the paper's own heading reads "Explaining Difficulty in Natural Language." The frontmatter title and the citation below use the listing form.

## What the hypotheses actually say

Across the three benchmarks the surviving hypotheses cluster on operations the solver must perform: multi-step bookkeeping where intermediate results feed later steps, rate or ratio derivation, ordering five or more entities under relational constraints, reconstructing a full ordering, and filtering-then-counting. On WinoGrande, where the signal is weakest, the hypotheses turn on unstated intermediate causes and implicit physical or social commonsense. The paper stresses that most hypotheses concern cognitive demand rather than length or other surface features, and that the GSM8K flawed-answer items — a data-quality artifact, not a reasoning demand — illustrate how the method can expose problems in a benchmark's own labels. These are hypotheses about questions, not about the reasoning of any particular model or student.

## Does editing a question change its difficulty?

To test whether a hypothesis names a real difficulty factor rather than a post-hoc description, the authors sample 50 test questions per dataset, rewrite each so that it satisfies or violates one hypothesis while leaving the rest of the question intact, and re-measure. Increase-difficulty edits reduce mean accuracy by 15.27 percentage points on GSM8K and 23.88 points on BBH-structured; decrease-difficulty edits improve accuracy by 32.18 and 28.52 points. Question-level alignment — the share of edited questions that moved in the predicted direction — is 70.9% and 92.2% on GSM8K for increase and decrease edits, and 77.6% and 85.5% on BBH-structured. The pattern holds across model families: 14 of 17 GSM8K models and 15 of 16 BBH-structured models lose accuracy after increase edits, while 16 of 17 and 16 of 16 gain accuracy after decrease edits.

The causal claim is bounded, though, and the paper is explicit about how far it reaches. Re-estimating IRT difficulty for an edited question would require re-running thousands of models, so the authors re-ran only a subset of models, all under 30B parameters, and use accuracy as a proxy for difficulty. WinoGrande is excluded from this analysis because its difficulty signal is too weak. And because each hypothesis applies to a different set of editable questions, the paper validates only its own hypotheses here rather than comparing them against the baselines.

## What this means for practice

- **Benchmark designers and assessment designers.** The hypotheses are concrete, testable properties — "requires ordering five or more entities," "requires deriving a rate or ratio" — that can be used to generate harder or easier variants deliberately, and the causal analysis gives evidence that such edits move measured difficulty rather than merely correlating with it.
- **Instructors.** Treat this as a window onto how AI difficulty works, not on how your students learn. The difficulty values come from model responses, so nothing here licenses a claim about human item difficulty, learning gains, or classroom outcomes.
- **Assessment professionals.** The pipeline is a useful demonstration that psychometric measurement and natural-language interpretation can be combined: IRT supplies the latent quantity, and the hypotheses are scored by how much of it they explain. It is not a validated calibration procedure for human tests.
- **Researchers and evaluators.** Reuse the design — contrastive sampling by latent difficulty, selection by regularized regression on held-out items, and question editing as a causal probe — rather than the specific numbers, which are tied to particular benchmark versions and a particular set of open and frontier models.

## Limitations

- Every difficulty estimate is inferred from LLM responses, not from human test-takers, so the study speaks to how hard items are for models. It does not measure learning outcomes, effect sizes, or item difficulty for human learners.
- The causal analysis could not re-estimate IRT difficulty and fell back on accuracy as a proxy, re-ran only models under 30B, used 50 questions per dataset, and validated only the paper's own hypotheses against no baseline. WinoGrande was excluded because its difficulty signal is inherently weak.
- The whole pipeline is LLM-driven — Gemini-3.1-pro-preview proposes, Gemini-3.7-Flash labels, Qwen3-Embedding-4B deduplicates, and Gemini and Astra verify edits — and the paper reports no human review of the hypotheses or the match labels.
- Predictive performance is uneven: R² = 0.090 on WinoGrande with all baselines near or below zero. The authors note that human annotators agree with the IRT ordering on only 73.4% of item pairs, which implies an R² ceiling near 0.45 on that benchmark.
- The method is tied to its configuration — the named model checkpoints, the RouterEval response pools, and the benchmark versions used. The results describe that setup, not current practice, and the frontier models cited have since been superseded.

## Citation

Cui, P., Zheng, Q., Debelak, R., & Sachan, M. (2026). [What Makes Something Hard(er)? Explaining Question Difficulty in Natural Language](https://arxiv.org/abs/2610.01627). *arXiv preprint arXiv:2610.01627*.