---
title: "Know When to Trust: Making AI Scoring More Reliable for Educational Assessment"
created: "2026-09-18T12:05:00-04:00"
updated: "2026-09-18T12:05:00-04:00"
type: article
assessment: [automated-assessment, automated-essay-scoring, assessment-validity, psychometrically-aware-ai]
technology: [llm, generative-ai]
foundations: [ai-literacy]
methods: [quantitative-research]
ethics: [trust-calibration]
research_method: [instrument development, quantitative, educational measurement]
level: [higher ed]
audience: [assessment professionals, assessment designers, researchers]
page_kind: [evaluation]
sources: ['raw/papers/know-when-to-trust-ai-scoring-reliability-2026.md']
confidence: high
---

> **Synthesis:** Organisciak and Acar test three drop-in adjustments to [[llm|LLM]]-based [[automated-assessment|automated scoring]], each compatible with models already in use: reading the model's own token-level self-confidence, computing a probability-weighted mean over its top-n predicted scores instead of taking its single best guess, and averaging multiple models into an ensemble. The evaluation ground is originality scoring of the Alternative Uses Test, a [[creativity|divergent thinking]] task, using a corpus of 27,217 responses from 2,039 participants (20,202 after de-duplication) previously assembled by the authors, with the average of human rater judgements as ground truth, plus a figural replication on 2,216 drawings. All three techniques produced statistically significant gains. Confidence was a reliable predictor of error (β = -0.602, p < .001), and flagging the least confident fifth of responses for [[human-in-the-loop-ai|human review]] lifted the fine-tuned GPT-3.5 model from r = 0.781 to r = 0.822 while removing roughly 80% of manual effort. Weighted probabilistic scoring raised that model to r = 0.816, and combining it with confidence-based exclusion reached r = 0.846 (RMSE = 0.4848). A two-model ensemble reached r = 0.823. The takeaway for [[assessment-validity|assessment validity]] is that [[trust|trustworthiness]] can be measured and priced per response, not assumed globally.

## Key Findings

1. **Model self-confidence tracks scoring error.** Token log probabilities converted back to probabilities act as a per-response confidence estimate, and a mixed-effects regression with random intercepts for item (N = 21,210) shows absolute error falling as confidence rises (β = -0.602, p < .001). The mechanism is closest in spirit to standard error of measurement in Classical [[educational-measurement|Test Theory]]: an uncertainty figure attached to each individual score rather than to the instrument as a whole.
2. **Selective human review buys reliability cheaply.** Discarding lower-confidence judgements improved every model monotonically as more were excluded. In the realistic operating point where the least confident 20% are sent for manual rescoring, the fine-tuned GPT-3.5 model moved from r = 0.781 (RMSE = 0.5990) to r = 0.822 (RMSE = 0.5544), GPT-3.5-davinci from 0.774 to 0.809, and prompted GPT-4o from 0.607 to 0.656, cutting manual scoring work by about 80%.
3. **Weighted probabilistic scoring recovers information the argmax throws away.** Averaging the top five predicted scores weighted by their probabilities raised fine-tuned GPT-3.5 from r = 0.781 to r = 0.816 and lowered RMSE from 0.5990 to 0.5235; GPT-3-davinci reached its best RMSE of 0.5210, with gains also appearing for prompted GPT-4o and GPT-4o-mini despite their lower baselines. Returns diminish quickly past roughly five contributors.
4. **Confidence and weighted scoring stack.** Combining the two on the same low-confidence exclusion scenario pushed the GPT-3.5 model to r = 0.846 with RMSE = 0.4848, well beyond either technique alone.
5. **Ensembles improve on the best member, not just the average.** Simple arithmetic averaging of fine-tuned GPT-3-davinci and GPT-3.5 reached r = 0.823 (RMSE = 0.4978) at five contributors, against r = 0.816 for the strongest single model; every pairwise fine-tuned combination beat its components, and a three-model ensemble (r = 0.803) matched but did not exceed the best pair.
6. **Cross-architecture ensembling worked in the visual domain too.** Averaging AuDrA (convolutional, r = 0.802) with Ocsai-Drawings (vision transformer, r = 0.846) on 2,216 figural responses produced r = 0.849 (RMSE = 0.0812), a modest but significant gain over the stronger component.
7. **The techniques are near-free in compute.** Weighted scoring and confidence extraction reuse log probabilities already computed in the forward pass but normally discarded, and a randomised API [[benchmark]] found logprob-returning calls between 1.7% and 5.7% faster, i.e. indistinguishable from latency noise. Only ensembling multiplies inference cost, roughly doubling API calls for two models, though calls can be issued in parallel.

## The data and the scoring task

The study reuses the corpus compiled by Organisciak et al. (2023): 27,217 Alternative Uses Test responses from 2,039 participants across eight earlier studies, de-duplicated to 20,202 responses and split 80% test, 15% training and 5% validation, with no further data preparation. Ground truth is the average of human rater judgements on originality, the criterion the earlier literature singles out as the most consequential for creative potential. The scoring task is deliberately reframed as classification: models are fine-tuned to emit a score on a 1.0–5.0 scale scaled tenfold, so that each prediction is a single token drawn from 41 possible classes. Fine-tuning used OpenAI's parameter-efficient API with base models GPT-3.5-turbo-0125, text-davinci-003 and text-babbage-002, all at temperature 0.0; four general models (GPT-4o, GPT-4o-mini, GPT-4.1 and GPT-4.1-mini) were also evaluated in few-shot prompted form, the accessible baseline a practitioner would actually meet. Because models predict one token, the paper's confidence apparatus rests on a constrained problem, which the authors flag repeatedly as a favourable condition rather than an incidental one.

## Improvement one: reading the model's own confidence

Generative models compute a probability distribution over vocabulary at each step; APIs expose the top few tokens with their log probabilities. Taking the top token's probability as a confidence signal, the authors show that low-confidence predictions are systematically the ones where automated scoring diverges from human consensus. Diagnostic value comes from two directions at once. Confidence predicts error at the response level, and it is moderately correlated with human rater disagreement (r = -0.379, p < .001 for Ocsai/GPT-3.5), meaning the model tends to waver precisely where human judges waver. That partial alignment points to a mix of aleatoric uncertainty, irreducible disagreement about what counts as creative, and model-specific error, and it supports a workflow where confidence governs routing to human review rather than a blanket judgment about the tool. The authors note the AUT's practical ceiling here: individual raters agree with the multi-rater consensus at about r = 0.88, so automated scores near r = 0.85 are operating close to the task's own measurement limit.

## Improvement two: weighted probabilistic scoring

The second technique exploits an architectural mismatch. LLMs predict tokens, not numbers, so [[quantitative-research|quantitative]] scoring has been described as solving equations with a typewriter. When such a model scores a response "3.0", the alternative it nearly chose might be 2.5 rather than 2.9, which looks like a failure to understand numerical proximity. Weighted probabilistic scoring treats the whole distribution as belief rather than noise, taking a probability-weighted mean over the top n candidate scores; composite confidence is simply the probability mass those candidates cover. The worked example is telling: for a paperclip used to "remove grout", human judges assigned 2.5, prompted GPT-4o's top choice was 2.2, its second choice 2.6 was nearly as likely, and the judges' value sat tenth in the ranking. The weighted average over the distribution returned exactly 2.5. This connects the method to the logic of [[item-response-theory|item response theory]], where a probability distribution over possible responses is modelled rather than a single best guess, and it is the technique that most directly increases scores' fidelity for [[psychometrically-aware-ai|psychometrically aware]] applications.

## Improvement three: ensembles

Ensembling mirrors the psychometric practice of improving reliability through multiple raters, and generalizability theory is invoked as the analogue. The LLM case is not obvious in advance, because models sharing an architectural lineage and training corpus may err in correlated ways and so contribute little diversity. Empirically they did contribute: every pairwise combination of fine-tuned models outperformed both members, with RMSE reductions of 0.044 to 0.051 against the components' own average, and the davinci-plus-GPT-3.5 pairing at five weighted contributors gave the study's best verbal result, r = 0.823 with RMSE = 0.4978. The three-model ensemble did no better than the best two, indicating model quality dominates quantity. The figural test extends the result across paradigms, where averaging a convolutional network with a vision transformer edged out the stronger system. The gain is small in absolute terms, and the authors present it as evidence of complementarity rather than as a reason to prefer ensembles to a better single model.

## Where reliable scoring broke down

Three failure modes appear in the data. Length and elaboration are the known confounds of the AUT literature, and the paper's inherited design keeps the risk alive: semantic-distance predecessors managed only r = 0.12 (SemDis) and r = 0.26 (OCS) against human judges on individual responses even though they performed respectably in aggregate, which is exactly the kind of systematic, response-level distortion a confidence signal is meant to surface. Second, prompted general models are markedly weaker than fine-tuned ones, with GPT-4o-mini at r = 0.508 and GPT-4o at r = 0.607 against r = 0.781 for fine-tuned GPT-3.5, so the improvements here narrow a gap without closing it. Third, confidence sometimes tracks human disagreement rather than model error, which means some excluded responses are hard because the construct is genuinely ambiguous, not because the machine failed; a practitioner using exclusion for [[trust-calibration|trust calibration]] is therefore also filtering task difficulty, a point the authors note would need demographic and response-type breakdowns to assess for fairness. The paper is explicit that none of the three techniques addresses [[bias-mitigation|bias]] in the underlying models or training data, and that the correlation between confidence and accuracy may vary with task structure, response format and evaluation criteria.

## Limitations and what would not transfer

The evidence base is one task family. Divergent thinking scoring is atypical in ways that flatter these methods: it requires higher-order interpretation of open text, the ground truth is a human-defined average, and responses are short enough that the entire scoring decision collapses to a single token. Generalisation to [[automated-essay-scoring|essay scoring]], mathematical [[problem-solving|problem solving]] or knowledge testing is asserted as plausible and explicitly left untested; long-form outputs would break the joint-probability arithmetic, since an essay-length judgement means hundreds or thousands of dependent token predictions, and the authors point to sequence-level measures such as semantic entropy as the untested route forward. Architecture is a second boundary: the methods require models that generate tokens and expose log probabilities, which excludes encoder-only systems such as BERT and RoBERTa that already score some creativity tasks. Third, log probabilities are not fully stable across runs in instruction-tuned chat models, especially mixture-of-experts architectures, so confidence values will not be identical between requests even at temperature 0.0. Fourth, every result is tied to specific 2024 model versions accessed through one API preview, which fixes the comparison but dates the numbers as model generations move. Finally, the human ground truth itself is a consensus artefact, and the paper treats the r = 0.88 rater-to-consensus ceiling as the horizon against which automated scoring should be judged; measured error below that ceiling is partly disagreement with an imperfect standard rather than pure machine error, and applying these scores in high-stakes settings such as gifted identification raises [[assessment-validity|validity]] questions that improved correlation does not answer.

## Connected Concepts

- [[automated-assessment]] — the application area these three techniques improve
- [[automated-essay-scoring]] — the adjacent high-volume scoring case the paper names as untested
- [[assessment-validity]] — the standard against which correlation and error gains are read
- [[psychometrically-aware-ai]] — the framing that maps the three methods onto measurement theory
- [[item-response-theory]] — the analogue invoked for weighted probabilistic scoring over a distribution
- [[educational-measurement]] — the discipline the paper positions LLM scoring inside
- [[trust-calibration]] — confidence scores as a mechanism for deciding when to trust a machine score
- [[human-in-the-loop-ai]] — low-confidence routing as the practical design pattern
- [[llm]] — the class of models whose token probabilities are being exploited
- [[creativity]] — divergent thinking and originality as the construct under measurement
- [[bias-mitigation]] — the risk the paper concedes these techniques do not address
- [[higher-ed]] — the assessment context regulators classify as high-stakes

## Connected Articles

- [[confidence-aware-student-drawing-assessment]] — Confidence-aware scoring applied to student drawing assessment
- [[automated-scoring-marketing-posts-agreement-2026]] — Human-model agreement statistics for automated scoring of open text
- [[ground-truth-reliability-aied]] — Why the human ground truth limits how reliable AI scoring can look
- [[llms-do-not-grade-essays-like-humans-2026]] — Where LLM essay grading diverges from human graders
- [[gpt-human-rater-essay-assessment-2026]] — Direct comparison of GPT and human raters on essay assessment
- [[llm-essay-assessment-framework-reliability-2026]] — A reliability framework for LLM essay assessment
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Human review as the operational counterpart to confidence flagging
- [[assessment-latent-structure-human-llm-2026]] — Latent structure of assessment scores produced by humans and LLMs
- [[xiong-ai-educational-measurement-review-2026]] — Review of AI in educational measurement and its psychometric standing
- [[bandit-driven-llm-essay-scoring-2026]] — Combining model outputs to improve scoring quality

## Citation

Organisciak, P., & Acar, S. (2026). [*Know when to trust: Making AI scoring more reliable for educational assessment*](https://doi.org/10.3758/s13428-026-03058-1). *Behavior Research Methods*, 58(7).
