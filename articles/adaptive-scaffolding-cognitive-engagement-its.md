---
title: "Adaptive Scaffolding for Cognitive Engagement in an Intelligent Tutoring System"
created: "2026-08-24T05:30:00-04:00"
updated: "2026-08-24T05:30:00-04:00"
type: article
tags: [intelligent-tutoring, icap-framework, adaptive-learning, scaffolding, student-engagement, reinforcement-learning, knowledge-tracing, personalized-learning]
sources: ['raw/papers/adaptive-scaffolding-cognitive-engagement-its.md']
confidence: medium
---

> **Sutapa Dey Tithi, Nazia Alam, Tahreem Yasir, Yang Shi, Xiaoyi Tian, Min Chi, and Tiffany Barnes** — arXiv preprint (2026).

## Synthesis

This study operationalizes the [[icap-framework|ICAP framework]] within an intelligent logic tutor by dynamically selecting worked examples that elicit different levels of [[student-engagement|cognitive engagement]]: *Guided* examples (active engagement, completing missing justifications) and *Buggy* examples (constructive engagement, identifying and repairing inserted errors). Two adaptive policies — a [[knowledge-tracing|Bayesian Knowledge Tracing (BKT)]] heuristic and a Deep [[reinforcement-learning|Reinforcement Learning (DRL)]] policy — are compared against a non-adaptive random baseline in a classroom study with 113 students. Both adaptive policies significantly improved posttest performance relative to control (effect size A = .58 for each), while inducing strikingly different scaffolding distributions: DRL strongly favored active Guided examples (~60% of training problems), whereas BKT's problem-type mix resembled control. The two adaptive methods diverged by prior knowledge: BKT produced the largest posttest gains for low prior-knowledge students and narrowed the achievement gap by 77.1%, while DRL yielded significantly higher posttest scores among high prior-knowledge students. The authors conclude that adapting the *type* of cognitive engagement is an effective instructional strategy, though the interpretability gap between BKT and DRL is a practical consideration.

## Key Findings

1. **Both adaptive policies outperform non-adaptive instruction.** On posttest problems, BKT (mean 72.3) and DRL (mean 72.5) both significantly outperformed the Control group (mean 65.7) with comparable effect sizes (A = .58), while the two adaptive conditions did not differ from each other — suggesting the benefit stems largely from adaptation itself rather than the specific algorithm.
2. **BKT most helped low prior-knowledge students.** Low-prior-knowledge students in the BKT condition significantly outperformed their Control counterparts (β = 9.4, p = .001), and BKT narrowed the pre-to-post achievement gap by the largest margin (77.1%, from 23.8 to 5.4).
3. **DRL most helped high prior-knowledge students.** Students in High-DRL scored significantly higher than High-Control (β = 6.81, p = .008), while High-BKT did not significantly differ from High-Control.
4. **DRL overwhelmingly preferred active Guided examples.** The DRL policy assigned ~60% Guided, 35% PS, and only 4% Buggy training problems — a distribution significantly different from both Control and BKT — while its reward function optimized for both learning and time efficiency.
5. **Adaptive policies were more time-efficient.** BKT students completed posttest problems significantly faster than Control (10.8 vs 11.8 min), and DRL produced marginally more optimal (fewer-step) solutions.

## Background: cognitive engagement, ICAP, and adaptive scaffolding

Effective [[scaffolding]] in [[intelligent-tutoring|intelligent tutoring systems]] depends on learners' [[student-engagement|cognitive engagement]]. The [[icap-framework|ICAP framework]] organizes engagement into four hierarchical modes — Passive, Active, Constructive, and Interactive — in order of increasing engagement and learning, providing a theoretically grounded foundation for designing scaffolding that varies the type of cognitive activity a student performs. Prior work shows consistent learning improvements with increased engagement, but higher engagement levels may demand more prior knowledge or additional scaffolding.

Intelligent tutors commonly use [[problem-based-learning|problem solving (PS)]], where students construct solutions independently, or worked examples, where tutors present step-by-step solutions. While worked examples reduce cognitive load for novices, detailed guidance becomes redundant as expertise develops — the expertise reversal effect — so more cognitively engaging activities benefit high-expertise students while explicit guidance helps low-expertise students. This motivates the central question of the paper: can learning be optimized by *adaptively* scaffolding cognitive engagement based on evolving student knowledge?

The authors draw on two data-driven approaches to [[personalized-learning|personalize]] this choice. [[knowledge-tracing|Bayesian Knowledge Tracing (BKT)]], a foundational [[student-modeling]] approach, estimates rule-level mastery from observed performance and is widely used to guide [[instructional-design|instructional decisions]]. Deep [[reinforcement-learning|Reinforcement Learning (DRL)]], by contrast, induces pedagogical policies by optimizing a reward signal, capturing complex temporal dependencies in [[adaptive-learning|adaptive environments]] at the cost of interpretability.

## Method

**Tutor.** The tutor is deployed in an undergraduate discrete-math course where students build multi-step propositional-logic proofs in a three-panel interface (workspace, domain-rule buttons, instructions). Students complete an introduction, a pretest, five training levels (levels 2–6, each with four problems, the last a level-end test), and a challenging posttest with isomorphic and transfer problems. Problem scores are composites (0–100) of rule accuracy, solution length, and completion time, and normalized learning gain is computed from pretest and posttest averages.

**ICAP-inspired problem types.** Three problem representations operationalize the ICAP modes. Problem Solving (PS) — independently deriving all proof steps — is treated as the interactive level, since students receive explicit stepwise accuracy feedback and can request hints. Guided worked examples present partially completed solutions organized into meaningful subgoals (following Renkl), requiring students to complete missing justifications and representing *active* engagement. Buggy worked examples present solutions with expert-inserted errors that students must identify and correct, representing *constructive* engagement.

**Adaptive policies.** The BKT-based heuristic routes lower-mastery students to Guided examples (step-by-step scaffolding) and higher-mastery students to Buggy examples (greater cognitive demand), comparing rule-specific mastery scores against thresholds computed from 721 prior students. The DRL policy is an offline Double Deep Q-Network (DDQN) formalized as a Markov Decision Process over a 74-dimensional state (mastery, temporal, and help-seeking features), with actions Buggy/Guided/PS and a reward `TestScore · (1 − ProblemTime)` that jointly optimizes learning and time efficiency; it was trained offline on 1,570 transitions from 103 prior students.

**Experiment.** In a controlled between-subjects classroom study (N = 113), students were assigned to Control (random problem type), BKT, or DRL after completing the pretest, using stratified random sampling. Analysis restricted to students completing all seven levels (36 Control, 35 BKT, 42 DRL). Because data were non-normal, the authors used mixed-effect regression plus non-parametric tests (Kruskal-Wallis, Mann-Whitney with Bonferroni correction) and probability-based effect sizes.

## Results

**RQ1 — Scaffolding distribution and time.** Total time on task was comparable across conditions (~5 hours). The DRL group's problem-type distribution differed significantly from both Control and BKT (p < .001): 35% PS, 4% Buggy, 60% Guided. Control and BKT did not differ significantly, each mixing roughly 29–44% PS, 31–33% Buggy, and 25–27% Guided.

**RQ2 — Learning outcomes.** There were no pretest differences across conditions (means ≈ 68–71). Mixed-effect regression on posttest scores (problem ID as random intercept) showed a significant effect of condition (p < .001): both BKT (A = .58, p = .005) and DRL (A = .58, p = .002) significantly outperformed Control, with no significant difference between the two adaptive policies. BKT students were significantly faster on posttest problems, and DRL yielded marginally more optimal solutions; rule accuracy did not differ across groups.

**RQ3 — Effects by prior knowledge.** Using a median split into High/Low prior-knowledge subgroups, Low-BKT students significantly outperformed Low-Control (β = 9.4, p = .001), while Low-DRL showed only a marginal increase (β = 4.8, p = .08). Within the High group, High-DRL significantly beat High-Control (β = 6.81, p = .008). Interaction terms were non-significant, indicating the adaptive advantage did not differ significantly by prior knowledge. All conditions narrowed the achievement gap, but BKT achieved the largest reduction (77.1%), largely because the Control condition failed to improve low prior-knowledge students.

## Implications

The findings demonstrate that varying the *type* of [[student-engagement|cognitive engagement]] through different problem representations can be an effective [[adaptive-learning|adaptive]] [[scaffolding]] strategy, with the [[icap-framework|ICAP framework]] supplying a principled basis for designing such adaptations. That BKT and DRL achieved comparable overall gains while adopting very different policies suggests the benefit may reside in adaptation itself rather than the specific algorithm — but the divergence raises design questions. DRL's strong preference for active (Guided) engagement over constructive (Buggy) and interactive (PS) modes, despite equivalent outcomes, questions when the cognitive cost of constructive or interactive engagement is worth it; the authors note that constructive and interactive activities may promote deeper, more [[transfer-of-learning|transferable]] learning that their time-weighted reward did not capture, potentially representing a missed pedagogical opportunity. For [[intelligent-tutoring|tutoring]] and [[instructional-design]] practice, BKT's interpretable mastery estimates let teachers and learners understand why a particular scaffolding type was chosen, whereas DRL's learned policy is opaque — an interpretability gap worth weighing in settings where system decisions should be explainable. In [[student-modeling]] and policy-induction research, the study supports treating engagement level as a legitimate, adaptive intervention dimension rather than a fixed pedagogical choice.

## Limitations

The DRL policy was trained on data from a single semester and may not generalize across learner populations, and the interventions were implemented in only one tutor, so results should be replicated in other problem-solving domains (science, math, programming). Although Guided and Buggy examples were designed to elicit active and constructive engagement, the actual cognitive effort and students' perceived difficulty of each example type remain under-characterized, and perceived difficulty may diverge from objective cognitive demands. The authors call for future work on adaptive methods that reward engagement or productive struggle rather than performance alone, and on whether constructive engagement yields benefits beyond immediate posttest performance.

## Connected Concepts

- [[adaptive-learning]]
- [[formative-assessment]]
- [[icap-framework]]
- [[instructional-design]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[learning-gains]]
- [[personalized-learning]]
- [[reinforcement-learning]]
- [[scaffolding]]
- [[student-engagement]]
- [[student-modeling]]

## Connected Articles

- [[icap-cognitive-engagement-llm-agents]] — Measuring Cognitive Engagement in Collaborative Discourse with an Extended ICAP Framework
- [[preferred-scaffolding-ai-mathematical-modelling]] — Preferred Scaffolding in AI-Assisted Mathematical Modelling
- [[pedagogical-safety-rl]] — Pedagogical Safety in Reinforcement Learning for Tutoring
- [[interactive-learning-dashboards-engagement]] — Interactive Learning Dashboards and Student Engagement

## Citation

Dey Tithi, S., Alam, N., Yasir, T., Shi, Y., Tian, X., Chi, M., & Barnes, T. (2026). [Adaptive scaffolding for cognitive engagement in an intelligent tutoring system](https://arxiv.org/abs/2602.07308). arXiv preprint arXiv:2602.07308.
