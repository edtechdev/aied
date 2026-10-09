---
title: "The learner who does not learn: when optimizing a pedagogical metric degrades LLM tutoring"
created: "2026-10-09T09:30:00-04:00"
updated: "2026-10-09T09:30:00-04:00"
type: article
foundations: [teacher-role]
pedagogy: [scaffolding, icap-framework, learning-theories]
technology: [llm, llm-training-and-fine-tuning, intelligent-tutoring, adaptive-learning, pedagogical-agent]
assessment: [assessment-validity, educational-measurement]
methods: [benchmark, ai-ed-evaluation]
sources: ['raw/papers/llm-tutor-pedagogical-metric-degradation-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-09"
    agent: hermes-agent
---

> **Synthesis:** The authors build the Pedagogical Adaptivity Index (PAI), a rubric-style metric that scores an [[llm|LLM]] tutor's instructional decisions against the conditions of a learning situation, then do what the field increasingly does: fine-tune a model against it. They audit Gemini 3.1 Pro Preview across 2,000 learner scenarios, correct its weakest cases with [[llm-training-and-fine-tuning|LoRA fine-tuning]] on an open-weights Qwen3-32B proxy, and have 31 trained educators rate the outputs blind before and after. The metric rose from +0.05 to +0.42 on the corrected cases while expert ratings fell from 4.46 to 3.03. The mechanism is structural rather than a calibration error: any metric that scores decisions independently and averages them is maximized by repeating the single best decision, and the fine-tuned model collapsed to exactly that optimum, in and out of sample. Weight analysis traced the change to the output projection, where the model memorized its training strings rather than learning to adapt. Measurement validity, the authors conclude, does not imply optimization validity.

## Key Findings

1. **The metric and the educators moved in opposite directions.** On the 30 lowest-scoring cases the mean PAI climbed from +0.05 to +0.42, a gain of +0.37, while the same cases' mean expert rating dropped from 4.46 to 3.03 (p < .00001).
2. **Controls held, ruling out rater drift.** The 8 unmodified high-PAI cases were rated 4.39 and 4.51 across the two rounds (p = .38), and a base-proxy arm matched the audited model on the metric before any training.
3. **The metric's optimum is one decision repeated.** Because each activity is scored independently against fixed conditions, the score-maximizing sequence is the single best option repeated five times; greedy fine-tuning produced fully monotone sequences in 100% of cases at ranks r = 1, 4, 8 and 16.
4. **Educators saw the monotony the metric cannot represent.** Human coders flagged monotony in 19–25% of weakest-aspect texts for corrected cases versus at most 3% for originals, and responses whose critiques named it were rated 2.2 against 3.2.
5. **The collapse generalized out of sample and killed one dimension.** On 200 unseen cases the fine-tuned model again produced monotone sequences in 100% of cases and gave all 200 learners the same cognitive task (DP2-b), whose score fell from 0.24 to 0.04 while mean PAI still rose.
6. **The correction rewrote the readout, not the reasoning.** Between 75% and 93% of the update's energy landed in the output projection, 18–30 times more per element than any transformer block, and the model reproduced 748 of 750 descriptions verbatim from a 100-phrase training bank.
7. **Restoring learner dynamics did not fix it.** When the rescoring let conditions evolve across the sequence, the corrected outputs' advantage shrank from +0.37 to +0.07 (0.34 vs. 0.27, p = .047) and never reversed, so the metric still preferred the collapsed plans.

## The metric and its blind spot

The PAI operationalizes pedagogical [[adaptive-learning|adaptivity]] through [[scaffolding]], [[icap-framework|ICAP engagement]], and other consensus dimensions of the [[learning-sciences]], as five decision points — content complexity, cognitive task, support structure, engagement mode, and disciplinary approach — each offering four ordered options. A tutor designs five activities per case and makes five selections per activity, so a response carries 25 selections. Each selection is scored against the case's conditions through eleven frozen alignment matrices, and the index aggregates as an unweighted mean up to the response PAI. In the baseline audit the audited model averaged +0.29 (SD 0.11), with 96% of cases between 0 and +0.5, and it was weakest on support structure (+0.04 above random) and cognitive task (+0.06). Crucially, the PAI scores each activity independently against conditions that stay constant across the sequence, so it has no term for whether the five activities form a trajectory — a design that encodes a learner who does not learn.

## The degenerate optimum

This structure makes the metric a separable objective, and that is what breaks it. Because every activity is judged against the same fixed conditions, there is one best option per decision point per case, and the score-maximizing plan is that option repeated five times. The corrective targets were therefore monotone by construction, and the greedily fine-tuned models learned exactly that, producing fully monotone sequences in 100% of cases at every rank. The collapse survived out of sample: on 200 unseen cases the fine-tuned model had a mean PAI of 0.42 against the base proxy's 0.30 but repeated a single option, and it gave all 200 learners the same cognitive task. The diversity-preserving arm, which corrected only one decision point per example, recovered at most about a third of the gain, so the metric's potential lies almost entirely in its degenerate region. This is Goodhart's law with a mechanism visible in the objective's algebra rather than in the optimizer.

## Where the correction landed in the weights

The mechanistic analysis explains why the correction did not improve instruction. Between 75% and 93% of the update's energy went to the output projection, the final map from hidden states to vocabulary logits, and per element that update was 18–30 times larger than any transformer block, whose 64 blocks stayed nearly uniform across depth. The fine-tuning rewrote the readout rather than reshaping the computation. The outputs show the same at the token level: for the intervention cases the corrected model produced 748 verbatim strings from the 100-phrase training bank out of 750 descriptions. Where the supervision could not be satisfied by a readout edit — the diversity-preserving adapters — more of the change migrated into the MLP blocks. Separability also held: only 4.5% of the greedy update's energy lay within the diversity-preserving subspace, and on the input side the two supervisions shared just 3.3% of their directions, so the metric gain and the collapse are distinguishable in principle.

## Validity is not optimization safety

The PAI was derived from canonical theory, its matrices were frozen before any output was scored, and it discriminated across the audit; the authors note that a standard construct-validity checklist would have judged it favorably. None of that makes it safe to optimize. [[assessment-validity|Construct validity]] is established against the distribution of existing behavior, whereas optimization drives behavior to the argmax, a region no validation exercise visits. Educators were not fooled: at baseline their ratings were unrelated to the PAI (ρ = −0.15, p = .39) and they could not distinguish the lowest-PAI cases from the highest (4.46 vs. 4.39, p = .53), a ceiling effect in which 90% of ratings were a 4 or a 5. After correction, agreement rose to α = 0.27 and the share of ratings at 4 or 5 fell to 52%, so educators converged — on the judgment that the outputs were worse. The paper's design principles for tutor [[benchmark|benchmarks]] and the broader [[ai-ed-evaluation|evaluation of AI tutors]] follow directly: verify that each conditioning variable is recoverable from the stimuli, measure adaptation as a difference, score sequence-level properties, and publish the argmax.

## What this means for practice

- **Instructors.** Treat any single-number pedagogical score with suspicion, and judge a tutoring plan by whether its activities build on each other, not by whether each step is individually well-matched to the learner.
- **Benchmark and evaluation designers.** Publish the argmax of any metric before using it as a training target; if the top-scoring output is a repeated activity or a fixed template, the metric is unsafe to optimize.
- **Developers fine-tuning tutors.** Add sequence-level diagnostics — repetition, selection entropy, grounding — that sit outside the reward and are reported alongside it, because the collapse here was visible only in withheld measures.
- **Researchers.** Separate condition recognition from instructional decision so a failure can be attributed to reading the learner or to acting on the reading.

## Limitations

- **No educators rated the base proxy.** The audited model has closed weights, so the human-evaluation causal claim rests on computational equivalence (matching metric and diversity scores) rather than on human ratings of the proxy.
- **The human evaluation is in-sample.** The 30 intervention cases sit inside the 589-case corrective training set, so educators judged the model on cases it was trained on; the behavioral collapse, by contrast, was reproduced on 200 held-out cases.
- **Two differences were confounded.** Corrected outputs differed from originals in both collapsed selections and generic descriptions drawn from a fixed bank (11.9 vs. 16.7 words; the share of description words also in the narrative fell from 0.21 to 0.03), and the design cannot fully apportion the rating decline between them.
- **The [[qualitative-research|qualitative]] coding was thin.** It was rule-based and validated by only two coders, who agreed substantially on two codes (κ = 0.65 and 0.63) but less so on the rest (κ ≤ 0.47).
- **The stimuli were synthetic and one condition was weakly encoded.** Case narratives came from grok-3-fast; the learning stage was not recovered by either model (κ = 0.16 for the audited model, 0.05 for the proxy) or by a text classifier (κ = 0.15).
- **Training seeds were not fixed.** Each condition was trained once, so differences between ranks cannot be formally separated from initialization noise, though the collapse was total at every rank.

## Citation

Domínguez Figaredo, D., & Fernández De la Cruz, R. (2026). [The learner who does not learn: when optimizing a pedagogical metric degrades LLM tutoring](https://arxiv.org/abs/2610.12125). *arXiv preprint*.
