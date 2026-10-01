---
title: "Simulating Novice Students Using Machine Unlearning and Relearning in Large Language Models"
created: "2026-10-01T18:37:01-04:00"
updated: "2026-10-01T18:37:01-04:00"
type: article
sources: ['raw/papers/2603.26142.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment, system development]
discipline: [cs education]
audience: [researchers, software developers, educational technology developers]
technology: [simulating-students, llm, pedagogical-agent, intelligent-tutoring, educational-nlp]
methods: [quantitative-research, qualitative-research]
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [learning-by-teaching, misconceptions]
assessment: [process-oriented-assessment]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Song, Guo, and Lin (2026) attack a specific failure of [[simulating-students|simulated students]] built by [[prompt-engineering|prompting]]: because [[llm|LLMs]] are broadly capable, an agent told to "act like a novice" still produces expert-level explanations, so it drifts above the knowledge level it is supposed to occupy. Their alternative is to change what the model *knows* rather than how it is asked to behave. Using machine unlearning on 2,074 Python multiple-choice questions, they selectively suppress 16 targeted knowledge components in Mistral-7B-Instruct, producing an agent whose accuracy falls from about 0.75 at a 10% forgetting ratio to below 0.5 at 40%, while the unmodified base model holds near 0.85. The suppressed knowledge is not destroyed: the agent recovers a measurable portion of it through both supervised relearning and coach-guided dialogue, and a worked dialogue shows an incorrect mental model of Python exception chaining being corrected rather than an answer merely being swapped. The authors position the method as infrastructure for [[learning-by-teaching|learning by teaching]] and for assessing students by how well they teach.

## Key Findings

1. Machine unlearning produced a controllable novice state: as the forgetting ratio rose from 10% to 50%, the unlearned model's accuracy and F1 declined monotonically, dropping from roughly 0.75 at 10% to below 0.5 from 40% onward, measured across five random seeds.
2. The base model stayed flat across every condition — about 0.85 accuracy and 0.77 F1 — so the degradation is attributable to the unlearning procedure rather than evaluation noise.
3. Relearning worked in both forms tested. Supervised fine-tuning on the forgotten questions and coach-guided dialogue both improved performance at every ratio, showing the knowledge was suppressed rather than erased.
4. Recovery was incomplete and got worse with depth: the gap to the base model widened at 30–50% forgetting, and the F1 gap was larger than the accuracy gap, indicating that deeper conceptual inconsistencies persisted.
5. Interactive teaching beat static relearning. Coach-guided dialogue produced consistently higher F1 and progressive gains, most clearly at 10–30% forgetting, which the authors read as reconstruction of missing conceptual links rather than answer memorization.
6. Relearning dynamics depended on how much had been forgotten: agents at 10% recovered within the early interaction rounds, while 30% and 50% agents showed prolonged low-accuracy plateaus, sporadic correct responses, and delayed improvement.
7. A dialogue-level example showed conceptual change rather than answer alignment — before instruction the agent chose the option treating Python's `raise ... from ...` as a security mechanism for hiding errors, and after feedback it chose the correct option with an accurate explanation of exception chaining.
8. The authors propose a second use for the setup: [[process-oriented-assessment|process assessment]], where a student's understanding is inferred from how well they support the novice agent's learning rather than from their own test performance.

## Building a novice by removing knowledge

The starting point is a mismatch between what [[simulating-students|student simulation]] needs and what prompting delivers. A prompt-level role assignment leaves the underlying model fully capable, so the simulated student can answer at a level its persona should not reach, which undermines the credibility of any [[learning-by-teaching]] study built on it. The authors instead treat novice-ness as a property of the weights: they apply machine unlearning to Mistral-7B-Instruct-v0.3 with LoRA, using an intervention-based forgetting loss guided by a teacher distribution (KL divergence β = 0.1, retention strength 1.0, 20 epochs, learning rate 1e-4, batch size 8, LoRA rank 8 and α 32). The teacher distribution replaces each correct answer with three plausible incorrect alternatives.

The data are 2,074 Python multiple-choice questions spanning 22 concept categories, drawn from public sources and supplemented with generated items for underrepresented concepts. The split is two-level, which is the design choice that makes the experiment interpretable: knowledge components are ranked by question count, with the top 70% (16 components, 1,823 questions) designated as unlearning targets and the remaining 30% (6 components, 251 questions) retained to keep general language and task performance stable. Within the target set, questions divide into 10%, 50%, and 40% portions, giving a retain set of 441 samples, a forget set of 903, and a test set of 730, with the forget set accumulated progressively to vary unlearning strength.

## Relearning, and what it reveals

Two relearning paths were tested. The static path fine-tunes the unlearned model on the original question–answer pairs, with cross-entropy computed only over answer tokens so that improvement reflects recovered knowledge rather than familiarity with question wording. The interactive path deploys the unlearned model as a teachable agent in a three-agent setting: the agent answers and explains, a judge agent scores correctness and explanation quality, and a coach agent powered by DeepSeek-V3.2 supplies corrective feedback and explanations, after which the dialogue history is used to LoRA the student model before it re-attempts the question. Both paths improved on the unlearned baseline at every ratio; neither restored the base model's performance. The interactive path was the stronger of the two, and the qualitative traces show why the authors find this encouraging — the agent's errors before instruction look like partial misconceptions rather than random noise, which is the behavior a tutor is supposed to learn to handle.

## What this means for practice

- **Researchers building simulated students.** Treat knowledge state as something to construct, not just to request. Prompting a capable model to act like a novice is not the same as giving it a novice's knowledge, and this paper offers a working alternative with released code ([[benchmark]], [[ai-ed-evaluation]]).
- **Researchers studying [[learning-by-teaching]].** A teachable agent whose knowledge can be dialed to a target level makes instructional effects measurable: the protégé effect depends on the agent having something real to learn.
- **Assessment designers.** The process-assessment proposal is worth testing directly: inferring a student's understanding from the quality and consequences of their teaching moves — explanation quality, responsiveness to error, pedagogical decision-making — rather than from their own answers ([[process-oriented-assessment]]).
- **Educational technology developers and faculty developers.** Because the same method yields agents at several knowledge levels, it could supply practice partners for tutors and teachers rehearsing how to respond to varied learner needs, which is hard to arrange at scale with role-play.

## Limitations

- **One domain, one format, one model.** All experiments use Python multiple-choice questions on Mistral-7B-Instruct, so generalization to other subjects, open-ended tasks, or other architectures is untested; the authors plan to extend to mathematics and to Qwen3-4B-Instruct.
- **Unlearning is not the whole learner.** The method operates on knowledge representations and does not capture affective or social factors in human learning, so the simulated novice is a knowledge-state approximation rather than a model of a student.
- **No human study yet.** The educational payoff is argued rather than demonstrated: whether the approach improves real learning outcomes or reflects authentic teaching practices remains untested, and the authors name human studies as the necessary next step ([[limitations-in-aied-research]]).
- **Baselines are not yet compared.** The paper does not benchmark against prompt-based simulation (zero-shot or few-shot) on the same task, which is the comparison its central claim most needs.

## Citation

Song, J., Guo, Z., & Lin, J. (2026). [*Simulating Novice Students Using Machine Unlearning and Relearning in Large Language Models*](https://arxiv.org/abs/2603.26142). arXiv preprint.