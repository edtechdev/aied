---

title: The Assistance Dilemma - Learning to Teach via Multi-Turn Reinforcement Learning
created: "2026-10-10T13:50:00-04:00"
updated: "2026-10-10T13:50:00-04:00"
type: article
technology: [llm, intelligent-tutoring, reinforcement-learning, pedagogical-agent]
pedagogy: [scaffolding, desirable-difficulties]
audience: [researchers, software developers]
level: [higher ed]
sources: ['raw/papers/assistance-dilemma-2026.md']
confidence: medium
methods: [benchmark]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This paper addresses what it calls the "assistance dilemma": [[llm|large language models]] trained to answer questions are natively poor at teaching, and [[reinforcement-learning|reinforcement learning]] against a simulated student is a promising fix — but existing RL-trained tutors reward the student's success on the tutored problem with the tutor's words still in context, so the reward is easiest to raise by simply telling the answer, requiring a tuned penalty to discourage telling. Drawing on [[learning-sciences|learning sciences]], the authors introduce a masked near-transfer post-test: the student is tested on an unseen variant of the tutored problem with the tutor's utterances masked, so the reward can rise only through what the student wrote in its own turns. This discourages [[cognitive-offloading|cognitive offloading]] by the student and lets the continuous penalty be replaced by two binary reward gates — factual correctness of the tutor response, and no solution handover. A leave-one-out ablation shows the learning-gain reward on its own does not separate teaching from telling: the gates reduce solution handover while the near-transfer post-test improves out-of-domain [[transfer-of-learning|transfer]].

Using these reward designs the authors develop EDUARDO, a multi-turn RL recipe for training LLM tutors, and train 4B, 9B, 14B and 27B models from two distinct architectures. The post-trained EDUARDO-27B matches Gemini 3.1 Pro on MathTutorBench and Claude Opus 4.8 on TutorMoments at 2.4–6.2× fewer thinking tokens than frontier models, which matters for interactive [[intelligent-tutoring|tutoring]]. Notably, without being named in the reward, the model more than doubles its use of the push-for-justification [[teacher-role|teacher]] move, while support fading (for example, assigning independent work) — whose payoff lies beyond a single-problem dialog episode — is trained out. The result is both a performance claim and a cautionary tale about reward shaping: what the reward horizon cannot see, the model stops doing.

The design is a concrete contribution to how we train and evaluate [[pedagogical-agent|pedagogical agents]]. The central methodological move — measuring the student's post-dialog performance on a masked variant, so the reward reflects the student's own constructed understanding rather than the tutor's leftover hints — offers a template for any [[simulating-students|simulated-student]] training or [[ai-feedback-quality|feedback]] evaluation where "did the student actually learn?" is the question. It connects to [[scaffolding]] and the long-studied trade-off between assistance and productive struggle, giving an operational form to a construct that [[desirable-difficulties|desirable difficulties]] research has described but rarely trained against.

## What this means for practice

- **AI tutor developers and researchers.** When training a tutoring model against a simulated student, do not reward the student's success on the tutored problem with the tutor's words still in context — that reward is trivially satisfiable by revealing the answer. Test the student afterward on a masked variant and gate the reward on the student's own turns.
- Separate "teaching" from "telling" with two explicit gates rather than one tuned penalty: a factual-correctness gate on the tutor's response and a no-solution-handover gate. The ablation shows the gates, not the raw learning-gain reward, are what actually reduce handover.
- Expect a single-problem reward horizon to eliminate behaviors whose payoff is delayed, such as fading support and assigning independent work. If fading matters, the reward must extend beyond the current episode; otherwise the model will quietly stop fading even when nothing penalizes it.
- Weigh thinking tokens as a cost in interactive tutoring. EDUARDO-27B reached frontier-comparable performance at 2.4–6.2× fewer thinking tokens, which is the difference between a tutor that feels responsive in conversation and one that does not.

## Limitations

- The entire evaluation runs against simulated students, so the study does not show that a tutor trained and measured this way produces [[learning-gains|learning gains]] in real students; the near-transfer gains are properties of the [[simulation]], not observed human outcomes.
- MathTutorBench and TutorMoments are [[math-education|mathematics]] tutoring [[benchmark|benchmarks]], so the recipe's performance and the disappearance of support fading have not been demonstrated outside mathematical tutoring dialogues.
- Support fading being "trained out" is presented as a limitation of the reward horizon, but the paper does not fix it within the reported recipe — it flags the behavior and leaves multi-episode reward shaping to future work.
- The results compare against specific frontier models (Gemini 3.1 Pro, Claude Opus 4.8) as of the writing, so the "matches frontier" claim is time-bound to those baselines and may not hold as models improve.

## Citation

Macina, Jakub, Manu Kapur, and Mrinmaya Sachan (2026). [The Assistance Dilemma - Learning to Teach via Multi-Turn Reinforcement Learning](https://arxiv.org/abs/2610.06446). arXiv preprint.
