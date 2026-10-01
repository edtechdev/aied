---
title: "Simulated Students in Tutoring Dialogues: Substance or Illusion?"
created: "2026-10-01T18:33:01-04:00"
updated: "2026-10-01T18:33:01-04:00"
type: article
sources: ['raw/papers/10.18653_v1_2026.acl-long.1960.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [math education]
audience: [researchers, software developers, educational technology developers]
technology: [simulating-students, intelligent-tutoring, llm, reinforcement-learning, student-modeling, educational-nlp]
methods: [benchmark, ai-ed-evaluation]
foundations: [limitations-in-aied-research, ai-education]
ethics: [bias-mitigation, differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Scarlatos, Lee, Woodhead, and Lan (2026) ask whether the [[simulating-students|simulated students]] now used to train and evaluate AI tutors actually behave like students. They formalize the task as predicting the next student turn in a real tutoring dialogue, define seven metrics spanning linguistic, behavioral, and cognitive aspects, and benchmark fine-tuned and prompted models on 382 held-out dialogues from the largest public corpus of real student–tutor math dialogues. The headline result is that [[prompt-engineering|prompting]] strategies perform poorly, and even the best method tested — [[reinforcement-learning|preference optimization]] on an 8B model — is only marginally better than supervised fine-tuning. A three-evaluator human study reproduces the automated ranking, so the finding is not an artifact of the metrics. The authors conclude that simulation quality is currently an illusion rather than a substance, and release code and annotations so others can measure it.

## Key Findings

1. Fine-tuning beat prompting on dialogue acts (0.6840 vs 0.4998 for zero-shot), [[educational-nlp|ROUGE-L]] (0.3212 vs 0.1648), and cosine similarity (0.7390 vs 0.5460), while prompting looked better only on correctness — because it mostly produced the majority class, correct answers.
2. Direct preference optimization barely outperformed supervised fine-tuning across all metrics and was *worse* on errors (0.0529 vs 0.0661 for the 8B pair), which the authors attribute to a sparse reward signal: candidate turns sampled from an already-weak model contain too few positive examples for [[reinforcement-learning|RL]] training.
3. An "oracle" prompt containing leaked information about the student's actual errors won on correctness (0.6755) and errors but remained unremarkable elsewhere — so even with a cheat sheet in the prompt, [[llm|LLM]] prompting could not beat much smaller fine-tuned models on most metrics.
4. Among prompting strategies, asking the model to reason before answering helped most (dialogue acts 0.5755 against 0.4998 for zero-shot), narrowing but not closing the gap to fine-tuning.
5. A larger 8B model beat the 3B model by small but consistent margins on every metric except errors, suggesting the difficulty is inherent to predicting student behavior rather than a matter of scale alone.
6. In a human evaluation by three experienced math tutors on 190 turns across 38 dialogues, agreement between human ratings and the automated metrics was very high — but the best methods still scored only 0.79 on dialogue acts and 0.06 on errors.
7. Ablating the reward showed that training on one metric can degrade others: optimizing correctness produced the lowest scores on most other metrics, and optimizing knowledge acquisition produced the highest scores on errors, cosine similarity, and tutor response.
8. Qualitatively, fine-tuned simulators wrote very short turns, rarely reproduced the typos and excess punctuation real students produce, and generated uniform response patterns across different students — a lack of the behavioral diversity that makes simulation useful.

## The task and its metrics

The paper begins from a problem in [[intelligent-tutoring]] research: evaluating a new tutor requires real students, which is slow and hard to scale, so many systems now train or evaluate against simulated ones — usually by simple prompting, and almost never by checking whether the simulation is any good. The authors formalize the missing task as turn-level prediction of a student utterance given the dialogue so far, then define seven reference-based metrics: dialogue acts, correctness, errors, knowledge acquisition, cosine similarity, [[educational-nlp|ROUGE-L]], and the likelihood of inducing a tutor response. The data are the Eedi math platform's corpus of real student–tutor dialogues, 1,529 for training and 382 for testing.

## What the benchmark showed

Nine methods were compared. Four were fine-tuned — supervised fine-tuning and [[reinforcement-learning|preference optimization]] on Llama 3.2 3B and Llama 3.1 8B — and five were prompted: zero-shot, an OCEAN persona, in-context learning, a reasoning variant, and the oracle. Fine-tuning won on the behavioral and linguistic metrics; prompting won on correctness for the reason above. The authors' reading is that prompting can anticipate a student's high-level behavior but cannot capture the nuances that make a turn convincing, and that the near-tie between [[reinforcement-learning|DPO]] and SFT indicates the task is genuinely hard rather than merely under-tuned.

## What the human study confirmed

Three evaluators with math teaching or tutoring experience rated 190 turns across 38 dialogues, with 20 turns shared to check agreement. Their ranking matched the automated one — preference optimization best on acts and linguistic similarity, the oracle best on correctness and errors — and agreement between human and automated scores was very high. Errors showed the weakest agreement, both because the sample is small (it is computed only on incorrect turns) and because the labels are highly imbalanced. Inter-rater agreement was very high for correctness, errors, and linguistic similarity, and only moderate for dialogue acts, driven by one label, "Math Answer", being chosen far more often than the rest (71–83% across annotators).

## The ablation: metrics are not independent

Training separate models on single-metric rewards showed that optimizing one aspect of student behavior can damage others. Training on correctness produced the best correctness but the lowest scores on most other metrics; training on knowledge acquisition produced the best errors, cosine similarity, and tutor response, yet poor correctness. Averaging rewards performed well overall but still lagged on knowledge acquisition, errors, and tutor response. The authors connect this to evidence that training on human behavioral data has unintended effects on seemingly unrelated traits, and conclude that better ways of combining metrics remain an open problem.

## What this means for practice

- **Researchers.** Measure the simulator before trusting it. The paper supplies a task definition, seven metrics, and released code and annotations ([[benchmark]]), so a claim that a simulated student is realistic can now be tested rather than asserted.
- **[[educational-technology-developers|Educational technology developers]].** Do not assume a prompted [[llm]] is a usable student proxy. Prompting underperformed substantially, and even an oracle prompt with leaked error information failed to beat small fine-tuned models on most metrics.
- **Instructors and faculty developers.** Treat simulation as a way to pre-test tutor behavior under low stakes, not as evidence that a tutor works. The authors' own ethics section recommends A/B testing with real students before deployment and evaluating any simulator across demographic groups first ([[bias-mitigation]], [[differential-effects-across-learner-groups]]).
- **Researchers planning to use simulated students.** Expect the ceiling to be low for now. Fine-tuning and [[reinforcement-learning|RL]] both outperform prompting, but the best method tested still misses the errors students actually make, which is precisely the behavior a tutor must learn to handle.

## Limitations

- **One dataset, one domain.** All experiments use a single math dialogue corpus, so generalization to other subjects or dialogue settings is untested.
- **The metrics cover less than they appear to.** Every metric is reference-based, so it needs a ground-truth student turn and cannot evaluate simulation where no real dialogues exist; affect and emotional state are not measured at all; and two metrics, knowledge acquisition and inducing tutor responses, were excluded from the human study as too subjective, leaving them without agreement evidence.
- **Proprietary models sit in the measurement loop.** The annotations and the correctness and errors metrics rely on proprietary [[llm|LLMs]]; smaller open-source models proved significantly less reliable in preliminary experiments.
- **The RL result is not explained.** That preference optimization beats supervised fine-tuning only slightly is attributed to task difficulty, but the authors state that verifying this needs more advanced RL methods ([[limitations-in-aied-research]]).

## Citation

Scarlatos, A., Lee, J., Woodhead, S., & Lan, A. (2026). [*Simulated Students in Tutoring Dialogues: Substance or Illusion?*](https://aclanthology.org/2026.acl-long.1960/). In *Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)* (pp. 42349–42385). Association for Computational Linguistics.