---
title: "HACHIMI-II: From Role-Play to Learner Behavior Modeling for Faithful Student Simulation"
created: "2026-10-16T09:20:00-04:00"
updated: "2026-10-16T09:20:00-04:00"
type: article
sources: ['raw/papers/hachimi-ii-learner-behavior-modeling-student-simulation-2026.md']
confidence: high
page_kind: [framework, evaluation]
research_method: [system development, experiment, secondary analysis]
level: [k 12]
audience: [instructors, researchers, educational technology developers]
discipline: [math education]
pedagogy: [misconceptions, help-seeking, self-regulated-learning, icap-framework]
technology: [simulating-students, student-modeling, intelligent-tutoring, knowledge-tracing, generative-ai, llm, cognitive-diagnosis]
assessment: [item-response-theory, educational-measurement]
methods: [ai-ed-evaluation, research-methods-aied]
institutions: []
ethics: [hallucination-risk]
foundations: [agentic-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-16"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Simulated students let researchers evaluate tutoring systems before real learners are available, but the usual approach — prompting a large language model to role-play a student of a given level — fails in a specific way the authors call competence leakage. The model already knows the content the student is supposed to lack, so it either solves the item despite its role or inserts an error the learner would never make, and every simulated learner ends up with the model's own ability. HACHIMI-II reframes the task as third-person prediction: a [[student-modeling|student model]] built from the learner's history supplies a prior, a learner state is inferred for the current item or tutor turn, and a deterministic behavior harness compiles that state into constraints on the next action. On three [[item-response-theory|item-response]] datasets the simulated ability distribution sits 2.4–8.4× closer to the real one by Wasserstein-1 distance than the strongest baseline, and on two dialogue datasets it reproduces real errors with matching structure 1.8–5.1× more often. Ablations trace the gains mainly to the explicit learner state.

## Key Findings
1. Role-prompted simulators show competence leakage: each baseline scores near 0.50 on XES3G5M, where the real mean is 0.83, and near 0.82 on ENEM, where the real mean is 0.39.
2. HACHIMI-II cuts the Wasserstein-1 distance between simulated and real per-student accuracy to 0.039, 0.046, and 0.169 on XES3G5M, Eedi, and ENEM, 2.4–8.4× below the strongest baseline.
3. It recovers the ordering of individual learners (Spearman ρ of 0.691, 0.703, 0.668), while Direct Role-Play stays between −0.06 and 0.01.
4. On dialogue, F1 of error-state prediction is 0.561 on Eedi QATD2k and 0.464 on Khan/CoMTA, 2.3× and 2.5× the strongest baseline.
5. It reproduces 31.5% and 56.5% of real errors with all three structure labels matching, 1.8× and 5.1× the strongest baseline's rate.
6. Removing learner state inference raises simulated ENEM accuracy from 0.384 to 0.802 against a real 0.394, and grows W1 1.9–2.5× across the three item-response datasets.
7. Splitting students into thirds by real accuracy, HACHIMI-II simulates the ENEM groups at 15%, 39%, and 68% against real values of 22%, 39%, and 61%.

## Competence leakage under role prompting

Role prompting names a student's level without modeling what this particular learner knows or how they will respond to the current item or tutor turn. An aligned model has been trained to be correct and helpful and already knows the content the student is supposed to lack, so it fills the gap with its own knowledge: it solves the problem despite the assigned role, or fabricates an error at a step where the learner would not fail. The authors call the observable effect competence leakage — a failure of groundedness close to the risks catalogued under [[hallucination-risk]] — and note that others name it the competence paradox and expert knowledge leakage. Under leakage the ability level is set by the model, differences among learners largely disappear, and real [[misconceptions]] are rarely reproduced. The remedy is not a richer profile: while [[prior-knowledge|history]] and profiles enrich the description of a student, the model is still asked to act as one and still has to suppress what it knows.

## Predicting the learner instead of acting as one

HACHIMI-II changes the framing. A request to act as a weak student asks the model to suppress knowledge it holds; a request to predict what a particular learner will do next asks it to use that knowledge, because the model must know the correct solution to judge where this learner departs from it. It runs in four steps. First, a [[student-modeling|student model]] describes the learner in the third person, combining an observed profile from the visible history with a persona retrieved from HACHIMI-1M, a corpus of one million student personas. Second, a learner state predicts how the learner will handle the current item or tutor turn across four variables — reachable knowledge, active error pattern, confidence state, and local interaction move — each following an established line of research such as evidence-centered design, the [[scaffolding|zone of proximal development]], error analysis, and [[self-regulated-learning|self-regulated learning]] with [[help-seeking]]. Third, a fixed compiler turns the state into a behavior harness that restricts both the content and the form of the action. Fourth, the generator writes the action, which is checked against the harness and regenerated when it violates a constraint.

## What the simulations show

On item-response simulation HACHIMI-II gives the same outcome as the real learner on 75%, 61%, and 63% of student–item pairs on XES3G5M, Eedi, and ENEM, against at most 53%, 52%, and 48% for the baselines. Its simulated mean accuracy is 0.828, 0.593, and 0.384 against real means of 0.831, 0.574, and 0.394. The baselines give nearly the same accuracy to every learner: with the student model, Profile-C recovers the ordering of students on Eedi (ρ = 0.698), yet its simulated accuracies still cluster around a single value (W1 = 0.119). The methods separate most clearly on dialogue turns where the learner errs. Baselines answer 82–93% of those turns without any error, competence leakage at the level of a single turn, while HACHIMI-II errs on 52% of them on Eedi QATD2k and 76% on Khan/CoMTA and reaches the highest functional agreement on both datasets.

## What each component contributes

Removing one component at a time shows the three govern different parts of the behavior. The learner state counters competence leakage: without it, the simulated population moves toward the model's own competence, so on ENEM the simulated mean accuracy rises from 0.384 to 0.802 against a real 0.394, W1 grows 1.9–2.5×, and error-structure F1 falls from 0.339 to 0.136 on Eedi QATD2k and from 0.346 to 0.119 on Khan/CoMTA. This variant still builds the full student model, so the gains come from predicting the state, not the profile. The harness keeps the action consistent with the learner: removing it increases W1 from 0.039 to 0.056 on XES3G5M and from 0.169 to 0.257 on ENEM, and drops error-structure F1 from 0.339 to 0.290 on Eedi QATD2k. The persona prior sharpens the ordering of learners: without it, ρ falls from 0.691 to 0.603 on XES3G5M and from 0.668 to 0.594 on ENEM, and both functional agreement and error-structure F1 fall on the dialogue sets.

## What this means for practice

- **Instructors.** Test a hint or a worked example against a simulated learner whose [[misconceptions|predicted error]] matches your class's, rather than the generic error a role-prompted model invents.
- **Educational technology developers.** Build the simulator around inferred learner state and a compiled behavior harness instead of a role prompt, so a capable backbone becomes usable as a student without fine-tuning, and keep it out of decisions about individual learners.
- **Researchers.** Compare the simulated ability distribution with the real one, and score the error state and its structure alongside [[assessment|functional agreement]].

## Limitations

- Evaluation covers item-response correctness and the presence and structure of mathematical errors, on mathematics and natural sciences datasets only.
- Each dialogue turn is predicted from the real preceding dialogue, not from the simulator's own turns; multi-turn simulation where the student's turns form the history is left to future work.
- The judge model, GPT-5.4, was validated against three annotators over 200 turns per dimension, but its agreement with their majority label is 0.62 on error locus and 0.60 on error mechanism.
- Every method is given only 30 of the learner's earlier responses on XES3G5M and Eedi, and 20 on ENEM, all to items outside the test set.
- The datasets are public and de-identified, and the authors state each output should not be used to classify individual students.

## Citation

Jiang, Y., Tan, F., Yin, X., Leng, J., & Zhou, A. (2026). [*HACHIMI-II: From Role-Play to Learner Behavior Modeling for Faithful Student Simulation*](https://arxiv.org/abs/2610.19654). arXiv preprint arXiv:2610.19654 (cs.CL).
