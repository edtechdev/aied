---
title: "Multimodal Item Parameter Estimation using Simulated Response Probabilities"
created: "2026-08-12T12:37:38-04:00"
updated: "2026-09-19T10:43:18-04:00"
type: article
technology: [llm, multimodal, student-modeling]
assessment: [automated-assessment, educational-measurement, item-response-theory, psychometrically-aware-ai]
audience: [software developers]
sources: ['raw/papers/2608.10154.md']
confidence: high
discipline: [math education]
page_kind: [evaluation]
---

> **Synthesis:** This paper fine-tunes a multimodal large language model (Qwen3.5-based) to reconstruct multiple-choice model (MCM) and three-parameter logistic (3PL) item characteristic curves. By learning to reproduce students' systematic error patterns across a range of ability levels, the LLM implicitly captures underlying response probabilities and can approximate item difficulty on held-out test items directly from predicted option probabilities.

## Key Findings

1. **LLMs can learn IRT curves implicitly.** A multimodal LLM prompted and fine-tuned to replicate choice probabilities across a corpus of image-and-text multiple-choice items, conditioned on labeled ability levels, learns the response patterns encoded in 3PL and MCM curves.
2. **Direct difficulty estimation.** Item difficulty on a held-out test set can be approximated directly from the model's predicted option probabilities, without explicit parameter-fitting.
3. **Multimodal relevance.** Because items contain both image and text stimuli, the approach extends IRT-style estimation to multimodal assessment items.

## Background

Item difficulty parameters are essential for judging whether an [[assessment]] accurately measures student knowledge, differentiates between students, and identifies specific [[cognitive-diagnosis|learning gaps]]. Field-testing to obtain these parameters is expensive and labor-intensive, and it carries a security risk. Prior work has therefore explored [[machine-learning]] approximations to item parameters, including two distinct [[llm]]-based approaches: treating the question stimulus as input to a fine-tuned model in a regression framework, and using LLMs as [[simulating-students|simulated respondents]] who answer the stimulus so that parameters can be read off their choices. This paper pursues the simulated-respondent route.

The work builds on the [[item-response-theory]] tradition. The three-parameter logistic (3PL) model and the multiple-choice model (MCM) both incorporate a non-zero lower asymptote to account for guessing, unlike the Nominal Response Model and two-parameter logistic model whose probability of a correct response approaches zero as ability decreases. Because the items used here mix textual and visual content, the authors extend prior single-modality reconstructions to the [[multimodal]] setting, applying the framework to a large corpus of [[math-education|mathematics]] items.

## Method

**Data.** The dataset comprises 4,848 items generated from 970 [[automated-question-generation|item models]], where each item consists of a stimulus plus four options and may carry an image component for either. Stimulus and option images are combined into a single input image. Items are split by item model into train, development, and test sets to avoid conflation. There are 13.88 million responses, with each respondent's ability level independently derived from a larger calibrated dataset.

**Response modeling.** The probability that a student of ability θ answers an item correctly is modeled with the 3PL equation, whose discrimination, difficulty, and guessing parameters are fit by minimizing the negative log-likelihood with an L2 regularizer using L-BFGS-B. The MCM generalizes this to model the probability of choosing each of the K options, capturing the strength of distractors.

**Discrete ability modeling.** Following the prior framework, ability values are binned into L categories, each associated with a descriptive label (from "Foundational" through "Elite mastery"). Each interval maps to a vector of option probabilities, yielding an L×K matrix. Instead of evaluating curves at a point, the interval is associated with the expected value of the response function under a normal ability prior, which is used to reconstruct the MCM and 3PL parameters.

**Language modeling.** The models are the 4-billion- and 9-billion-parameter Qwen3.5 variants, multimodal and built on a hybrid transformer architecture. They are tuned with parameter-efficient methods such as LoRA and QLoRA, applied conservatively to the Gated Attention components given known training instabilities. Data are formatted as system/user/assistant chat turns conditioning on ability level, correct answer, and item/option text. The assistant text is truncated so the model produces a vector of next-token probabilities, and the training loss is the mean squared error between those probabilities and the target option probabilities. Baselines are encoder-only regression models (MathBERT, MetaMath) that map stimulus to IRT parameters directly. Metrics are Pearson correlation, root mean squared error, and quadratic weighted kappa (QWK) over descriptive difficulty labels.

## Results

The fine-tuned Qwen3.5-9B attains a Pearson correlation of 0.85 on the difficulty parameter, exceeding both regression baselines—MathBERT (0.68) and MetaMath (0.75)—by a clear margin, with an RMSE of 0.55 after a linear development-set correction. Discretized into five difficulty bands, the model reaches a QWK of 0.835, versus 0.692 for MetaMath and 0.625 for MathBERT. The simulated-respondent framing recovers difficulty-relevant signal that direct stimulus-to-parameter regression does not capture.

## Discussion

Recovery is uneven across parameters, and this is informative. The guessing parameter c is recovered at a correlation of 0.48 where baselines are far lower—evidence the approach captures genuine response behavior rather than surface features of the stimulus, since a model that merely reads the question cannot easily infer how often low-ability students are drawn to a particular distractor. Conversely, the discrimination parameter a is recovered weakly, plausibly because ability is discretized into intervals and because of the regression-based correction. Several design choices bound the results: LoRA is applied only to attention layers, and every mapping from responses to parameters introduces approximation error, so the reported correlations are best read as lower bounds on what the framing can achieve under tighter modeling assumptions.

## What this means for practice

- **Developers.** Fine-tune a multimodal model as a [[simulating-students|simulated respondent]] rather than regressing the stimulus straight onto parameters: the tuned Qwen3.5-9B reached a Pearson correlation of 0.85 on difficulty against 0.68 for MathBERT and 0.75 for MetaMath.
- **Developers.** Keep the fine-tuning parameter-efficient and narrow — LoRA was applied only to the Gated Attention components, adapting roughly a quarter of the layers a conventional transformer would expose, which was enough for the headline result.
- **Assessment designers.** Read the guessing parameter as the sign that real response behavior was captured: c was recovered at a correlation of 0.48 where the regression baselines were far lower, something a model that only reads the question cannot easily infer about how often low-ability students pick a given distractor.
- **Assessment designers.** Report difficulty to educators in the five descriptive bands, where the model reached a QWK of 0.835 against 0.692 for MetaMath and 0.625 for MathBERT, rather than in raw b values that [[item-response-theory|IRT]] consumers must translate themselves.
- **Researchers.** Treat discrimination as the unsolved parameter before building on this: a was recovered weakly (0.31 for Qwen3.5-9B), most plausibly because ability was discretized into intervals and a regression-based correction applied to the raw estimates, and nothing here shows the method transfers beyond [[math-education|mathematics]] items.

## Limitations

- The 4,848 items were generated from 970 item models and split by item model, so the held-out set tests new items of known kinds rather than item types the corpus never contained; the reported difficulty RMSE of 0.55 is also quoted only after a linear development-set correction.
- Each respondent's ability level was derived independently from a larger calibrated dataset rather than from the study's own sample of examinees, so the whole reconstruction rests on how well that reference ability distribution matches any new population.
- The tuning touched only part of the model and the reconstruction only part of the curve: LoRA was applied to the Gated Attention components (about a quarter of the layers a conventional transformer would expose), the Gated DeltaNet layers were left untouched after known training instabilities, and ability was discretized into intervals rather than treated as continuous, which the authors link to weak recovery of the discrimination parameter a at 0.31.
- The work is presented as a technical proof-of-concept on [[math-education|mathematics]] items with image-and-text stimuli; no other subject, item format, or student population is tested, and the authors call for broader validation rather than claiming general transfer.

## Connected Concepts

- [[item-response-theory]]
- [[educational-measurement]]
- [[psychometrically-aware-ai]]
- [[student-modeling]]
- [[automated-assessment]]
- [[llm]]
- [[multimodal]]
- [[knowledge-tracing]]

## Connected Articles

- [[ai-assessment-scale-reform]] — AI assessment scale reform
- [[ai-assessment-human-tutors]] — AI assessment compared with human tutors
- [[socratic-tests-conversational-assessment]] — Conversational assessment
- [[tutoring-effectiveness-index]] — Tutoring effectiveness index

## Citation

Ormerod, C., & Kim, Y. (2026). [*Multimodal item parameter estimation using simulated response probabilities*](https://arxiv.org/abs/2608.10154).
