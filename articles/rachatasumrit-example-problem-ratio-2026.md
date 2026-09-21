---
title: Evidence and Theory for why the Best Example-Problem Ratio To Optimize Learning Gain Depends on Knowledge Content
created: "2026-09-03T14:03:50-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
pedagogy: [cognitive-psychology, desirable-difficulties, learning-theories, prior-knowledge, problem-solving, transfer-of-learning]
technology: [intelligent-tutoring]
assessment: [learning-gains]
sources: ['raw/papers/rachatasumrit-example-problem-ratio-2026.md']
confidence: high
research_method: [experiment, process-outcome modeling]
discipline: [math education, learning sciences]
audience: [researchers, instructional designers]
page_kind: [synthesis]
---

> **Synthesis:** **Evidence and Theory for why the Best Example-Problem Ratio To Optimize Learning Gain Depends on Knowledge Content** — Rachatasumrit, Koedinger & Carvalho (2025) resolve an apparent contradiction between cognitive-science recommendations to maximize [[problem-solving|practice testing]] and to study more worked examples by showing the optimal example–problem ratio is a **content–treatment interaction**. In a human experiment, pure retrieval practice produced better [[learning-gains|learning]] of verbatim facts while example-integrated practice (alternating study and practice) produced better learning of generalizable skills, and an executable computational model of learning (the Apprentice Learner framework) with a memory mechanism reproduced this cross-over interaction. The work advances the [[learning-theories|KLI framework]] by grounding it in an executable theory that distinguishes the [[cognitive-psychology|cognitive]] [[prior-knowledge|memory]] processes behind the testing effect from the inductive processes behind the worked-example effect.

## Key Findings

- **The optimum example–problem ratio is content-dependent, not universal.** A 2×2 between-subjects experiment (95 participants) manipulated knowledge content (verbatim facts vs. generalizable skills, using geometry-area materials) and training schedule (practice-only EPPP vs. example-integrated EPEP). Results showed a statistically reliable content–treatment interaction (β = 0.41, *p* = .038, *d* = 0.38): pure practice yielded higher learning gains for facts, whereas alternating examples and practice yielded higher gains for skills.
- **Retrieval/practice testing benefits verbatim fact learning.** Practice testing improves memory-retrieval processes — consistent with [[desirable-difficulties|retrieval practice]] — strengthening verbatim associations in a way that example study alone does not, and no interaction with retention interval was found for this effect.
- **Studying examples benefits generalizable skill learning.** Because a skill must be induced and generalized to novel inputs, worked examples support the selective encoding and [[prior-knowledge|generalization]] needed to acquire the skill; pure practice risks strengthening spuriously correlated features and functions rather than the correct general rule.
- **The KLI framework explains the interaction.** The [[learning-theories|Knowledge-Learning-Instruction (KLI)]] framework (Koedinger et al., 2012) classifies [[prior-knowledge|knowledge components]] by whether their conditions and responses are constant (facts) or variable (skills), linking constant facts to memory processes and variable skills to induction and refinement processes. The observed interaction is thus a predicted content–treatment interaction rather than a contradiction.
- **The Apprentice Learner (AL) model provides an executable explanation.** Simulated learners built in the AL framework were given the same four conditions as humans. AL agents *with* a memory-and-forgetting mechanism (modeled on ACT-R activation) reproduced the human cross-over interaction; agents *without* memory did not, showing that practice confers its benefit by delaying forgetting, while examples supply information needed for [[problem-solving|skill induction]].
- **Computational error analysis isolates the mechanisms.** Inspecting simulated learners' internal states, AL made more memory-based (retrieval-failure) errors under high example-to-problem ratios and more induction-based errors under practice-only training — evidence that example study supports induction of correct mental constructs while practice testing primarily delays forgetting of acquired constructs.
- **Testing effects do not automatically transfer to novel application.** Reviewing prior literature, the authors note retrieval-practice gains frequently fail to extend to unfamiliar problems (strengthening memory for procedures without enhancing use in new contexts), which is why practice must be paired with examples for generalizable [[transfer-of-learning|skill learning]].
- **Implications for [[learning-design|instructional design]] and AI tutoring.** The finding that more practice is not always better argues that [[intelligent-tutoring]] and [[math-education|content]] sequencing should adapt the example–problem ratio to the knowledge component being learned — memory-oriented content warrants retrieval practice, while induction-oriented skills warrant integrated worked examples.

## What this means for practice

- **Instructional designers.** Set the example-to-problem ratio from the knowledge type being taught. In the experiment, practice-only training produced higher [[learning-gains|learning gains]] for verbatim facts while example-integrated training produced higher gains for generalizable skills (content–treatment interaction: β = 0.41, *p* = .038, *d* = 0.38).
- **Instructional designers.** Do not apply a single "practice as much as possible" rule across a course. The paper resolves the contradiction between that guidance and the worked-example recommendation by showing the optimum depends on whether the knowledge component is a constant fact or a variable skill.
- **EdTech designers.** Build ratio selection into adaptive sequencing: [[intelligent-tutoring|tutors]] should shift toward retrieval practice for memory-oriented content and toward worked-example support for induction-oriented skills rather than holding the mix constant.
- **Instructional designers.** When the target is [[transfer-of-learning|transfer]], pair practice with examples. Retrieval practice can strengthen memory for solution procedures without improving learners' ability to apply them to unfamiliar problems.
- **Researchers.** Model the mechanism, not only the outcome: the Apprentice Learner agents reproduced the human crossover only once a memory-and-forgetting mechanism modeled on ACT-R activation was added, and error analysis showed retrieval-failure errors rose under higher example-to-problem ratios while induction errors rose under practice-only training.

## Limitations

- The human experiment recruited 103 participants through Mechanical Turk for a session of roughly 20 minutes paying $3.00; 8 were excluded for failing to complete the task, leaving 95 across four conditions (n = 20 to 32), and no demographic information was collected.
- The study tested a single short lab task — calculating the area of four geometric shapes — so it is evidence about one content domain and material set, with a power analysis that targeted a moderate interaction effect of f = 0.35 at 85% power.
- The retention interval was not controlled: it varied with how quickly each participant answered 30 trivia questions, and the authors included its duration as a covariate precisely because prior work shows the benefit of practice is moderated by retention-interval length.
- The simulated agents received binary corrective feedback after practice trials while the human participants completed retrieval trials without feedback; the authors argue this is unlikely to change the comparison, citing reliable testing effects under no-feedback conditions, but the two conditions were not identical.

## Connected Concepts

- [[learning-gains]]
- [[problem-solving]]
- [[transfer-of-learning]]
- [[desirable-difficulties]]
- [[prior-knowledge]]
- [[cognitive-psychology]]
- [[learning-theories]]

## Connected Articles

- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist?
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive Scaffolding for Cognitive Engagement in an Intelligent Tutoring System
- [[lak2026-hint-button-unproductive-use]] — Revisiting the Hint Button: Unproductive Hint Use and Learning Outcomes in ITS
- [[oatutor-open-source-adaptive-tutor-2023]] — OATutor: An Open-source Adaptive Tutoring System
- [[genai-performance-vs-learning]] — Distinguishing performance gains from learning when using generative AI
- [[zhang-tutormoments-2026]] — When Help is Unhelpful: Evaluating AI Tutors for Productive Struggle

## Citation

Rachatasumrit, N., Koedinger, K. R., & Carvalho, P. F. (2025). [Evidence and Theory for why the Best Example-Problem Ratio To Optimize Learning Gain Depends on Knowledge Content](https://doi.org/10.1007/s40593-025-00511-8). *International Journal of Artificial Intelligence in Education, 35*, 3645–3667.
