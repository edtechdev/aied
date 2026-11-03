---
title: "ClickSight: An LLM Framework for Interpreting Student Clickstreams Through Learning Strategies"
published: "2026-11-01"
created: "2026-11-03T09:30:00-05:00"
updated: "2026-11-03T09:30:00-05:00"
type: article
sources: ['raw/papers/radmehr-clicksight-clickstream-learning-strategies-2026.md']
source_url: "https://arxiv.org/abs/2611.02021"
confidence: high
page_kind: [framework]
research_method: [system development]
level: [higher ed]
audience: [learning analytics designers, researchers, instructors]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-03"
    agent: hermes-agent
source_depth: full text
technology: [llm, learning-analytics]
pedagogy: [self-regulated-learning]
methods: [ai-ed-evaluation]
---

> **Synthesis:** Radmehr, Tran, Shved, Güreş, Singla and Käser built ClickSight, a staged [[llm|LLM]] pipeline that reads a student's [[learning-analytics|clickstream]] and reports adherence to learning strategies defined in the literature, with the evidence for each judgment preserved. Evaluated across two learning environments, 365 students and 12 model backbones, the best configuration produced complete and comprehensible interpretations every time and overall quality of 0.945 in PharmaSim and 0.735 in Beer's Law Lab. Reasoning-tuned models were more consistent than instruction-tuned ones, and feeding the pipeline quantitative guidance extracted from the trace improved the strategies that depend on exact counts.

## Key Findings

1. **Interpretations were always complete and clear.** Across both environments and all three prompting methods, completeness and comprehensibility scored 1.000; differences concentrated in correctness and justifiedness.
2. **A staged pipeline beat simple prompting where the data were harder.** In Beer's Law Lab, Chain-of-Prompts reached an overall score of 0.735 against 0.704 for zero-shot and 0.702 for chain-of-thought, and both gaps were significant.
3. **The easy environment left little room for improvement.** In PharmaSim all three methods scored above 0.92 overall (0.938, 0.924, 0.945), with no criterion differing significantly by prompting method.
4. **Reasoning configurations were more consistent than instruction-tuned ones.** Across 12 model backbones spanning Qwen3, GPT-OSS and GPT families, thinking variants held quality more reliably within family comparisons.
5. **Correctness, not justification, was the weak link.** Justifiedness exceeded correctness in Beer's Law Lab under all three methods, meaning interpretations supported the wrong adherence level with evidence the student had actually produced.
6. **External guidance helped quantitative strategies.** Providing clickstream-extracted guidance improved interpretation quality for strategies that require precise counts from the trace.
7. **Evaluation used an LLM judge calibrated to human ratings.** Quality was scored on a four-criterion rubric, including a judge whose agreement with human expert labels was checked rather than assumed.

## What the framework does

ClickSight does not classify behavior with a bespoke feature set. It takes a set of learning strategies specified from the literature, finds strategy-relevant evidence in the clickstream, assesses adherence for each strategy–aspect pair, and generates an interpretation grounded in the actions it cited. That structure is the paper's answer to the transfer problem in [[learning-analytics|learning analytics]]: hand-built features for one environment do not move to another, while a literature-defined strategy plus trace evidence is at least portable in principle.

Keeping the evidence attached to each judgment is what makes the output auditable. An instructor can see which actions supported a claim about, say, help-seeking or systematic exploration, rather than receiving a label with no provenance.

## Where the quality difference comes from

The gap between PharmaSim and Beer's Law Lab is the paper's most informative result. PharmaSim's behavior is apparently easy to read off the trace, so model and prompting choice barely matter. In Beer's Law Lab, correctness drops to roughly 0.78–0.82 and the pipeline's staging buys a measurable gain, because the task requires assembling evidence across actions rather than pattern-matching a single event.

The correctness–justifiedness gap points at the same issue from the other side: a model can construct a coherent, evidence-cited account that reaches the wrong conclusion. For anyone deploying this kind of interpretation, that is the failure mode to design against — a plausible narrative is not a correct one.

## What the evaluation supports

The rubric is a quality judgment by an LLM judge calibrated against human expert ratings, not a comparison against ground-truth adherence labels on every pair. The paper is explicit that justifiedness is assessed against the adherence level the interpretation states, which is why the two criteria can diverge.

Coverage of model families is unusually broad for this literature — 12 backbones — but the environments are two, both simulation-based, and the strategies were predefined by the authors.

## What this means for practice

- **Ask for evidence, not labels.** A strategy interpretation that names the actions behind each judgment can be checked by an instructor; a bare classification cannot.
- **Test the pipeline in your own environment before trusting the ranking.** Performance ranged from near-ceiling to mid-0.70s across two tasks in one study, so environment difficulty dominates.
- **Watch for well-argued wrong answers.** Justifiedness above correctness means the failure mode is a confident, evidence-cited misreading, which is harder to spot than an unsupported claim.
- **Use reasoning-capable models for this work.** Thinking variants were more consistent than instruction-tuned ones of the same family across the model comparison.

## Limitations

- **Two simulation environments.** PharmaSim and Beer's Law Lab are both structured simulations; transfer to open-ended or LMS-scale clickstreams is untested.
- **LLM-judged quality.** The rubric is scored by a judge calibrated against human ratings, not by expert labeling of every strategy–aspect pair.
- **Author-defined strategy set.** Strategies and aspects were specified in advance from the literature, so the framework's coverage is bounded by that choice.
- **Justifiedness and correctness were scored against different references.** An interpretation can be judged well-justified while assigning the wrong adherence level, which limits what the overall score means.

## Citation

Radmehr, B., Tran, L., Shved, E., Güreş, F. B., Singla, A., & Käser, T. (2026). [*ClickSight: An LLM Framework for Interpreting Student Clickstreams Through Learning Strategies*](https://arxiv.org/abs/2611.02021). arXiv:2611.02021 [cs.AI].
