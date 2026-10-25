---
title: "Design and Evaluation of an Agent-Based Digital-Twin-Inspired Simulation for Metacognition Research in Higher Education"
created: "2026-10-25T08:30:00-04:00"
updated: "2026-10-25T08:30:00-04:00"
type: article
published: "2026"
page_kind: [evaluation]
research_method: [design and evaluation study, instrument development]
discipline: [learning sciences]
level: [higher ed]
audience: [researchers, instructional designers, instructors]
foundations: [ai-literacy, educational-development, interpreting-and-applying-aied-research, limitations-in-aied-research, theory-development-aied]
pedagogy: [metacognition, self-regulated-learning, self-determination-theory, scaffolding, transfer-of-learning, desirable-difficulties, student-ai-interaction]
technology: [simulation, simulating-students, student-modeling, pedagogical-agent, generative-ai, llm, machine-learning, ai-technologies]
assessment: [assessment, feedback, self-assessment, process-oriented-assessment, learning-gains]
methods: [design-based-research, usability-research, quantitative-research]
institutions: [change-management, governance]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups, trust]
confidence: medium
sources: ['raw/papers/agent-based-digital-twin-metacognition-2026.md']
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Guo (2026) builds and internally evaluates AMERT-D, an agent-based "simulation-based digital twin" framework that operationalizes the five-level AMERT model of [[metacognition]] — self-awareness, self-monitoring, [[self-assessment|self-evaluation]], [[self-regulated-learning|self-regulation]], and self-transfer — inside a NetLogo simulation. Using Design and Development Research, the author synthesized the framework, had its conceptual content reviewed by 12 experts through a modified Delphi process (Round Two Kendall's W = 0.82, p < 0.001), and then ran instructional scenarios for 150 ticks repeated 50 times each, with a Graph [[machine-learning|Neural Network]] check confirming that outputs stayed distinguishable across four computational learner archetypes (89% classification accuracy). The hybrid scenario (instructor feedback, [[peer-assessment|peer feedback]], high task complexity) produced the highest weighted AMERT mean (3.86) and a modeled 38% transition rate to self-transfer, and instructor feedback was associated with a 38% decrease in the modeled metacognitive gap. The author is explicit throughout that every number is a model-generated hypothesis, not an observation of real students.

## Key Findings

1. **Five metacognitive levels became dynamic variables.** Self-awareness, self-monitoring, self-evaluation, self-regulation, and self-transfer were coded as continuous scores from 0 to 100, each with static attributes set at initialization and dynamic attributes updated each tick.
2. **Progression is threshold-based.** An agent moves up a level only when its current score reaches the uniform threshold of 60, it has accumulated the required ticks (30 for A→M, 40 for M→E, 50 for E→R, 60 for R→T), and a readiness signal from external feedback is present.
3. **The hybrid scenario scored highest.** Weighted AMERT averages were 3.86 for hybrid, 3.24 for instructor feedback, 2.56 for peer feedback, and 2.18 for the base scenario, with a significant scenario effect [F(4,245) = 28.63, p < 0.001, η² = 0.32].
4. **Self-transfer showed the strongest scenario sensitivity.** Transition rates to Level T were 38% hybrid, 24% instructor feedback, 8% peer feedback, and 2% base, with associations for instructor feedback strength (OR = 2.84, p < 0.001) and task complexity (OR = 1.56, p = 0.02).
5. **Uniform intervention widened the gap between archetypes.** The metacognitive gap between the deep and low-effort profiles grew from 1.88 (base) to 2.41 (hybrid), which the author calls a mathematically expected consequence of the threshold mechanism and aligns with the Matthew Effect.
6. **Task complexity showed an inverted-U.** Moderate complexity (0.4–0.6) stimulated metacognitive growth while high complexity (≥ 0.8) inhibited it, consistent with [[cognitive-offloading|Cognitive Load Theory]], and peer feedback alone did not outperform the base scenario.
7. **The internal check is coherence, not realism.** The Graph Neural Network classified agents by profile with 89% accuracy and a mean consistency score of 0.85, which the author states only confirms that the model's outputs preserve the distinguishability of its inputs.

## The framework and its theoretical basis

The AMERT model (Willison et al., 2024) arranges metacognition hierarchically, so that self-regulation cannot be expected before self-awareness and self-monitoring are cultivated, and it adds self-transfer as a level earlier models omitted. Guo argues the model's weakness is that it describes states rather than the process of moving between them, and that this static character is what makes complex metacognition models nearly impossible to falsify in real classrooms. The study therefore turns to agent-based simulation, where each learner is an autonomous agent with heterogeneous cognitive and metacognitive profiles, and to the "simulation-based digital twin" framing, which the author distinguishes from a data-driven digital twin: no physical counterpart, no real-time synchronization, and no bidirectional coupling are present here.

Implementation used NetLogo 6.4.0 with four computational archetypes — deep, surface, low-effort, and general — defined by [[prior-knowledge|prior knowledge]], [[self-efficacy]], effort allocation, initial AMERT values, and monitoring accuracy. The instructional strategy layer models instructor feedback in directive and facilitative modes with adaptive strength (strength × (1 − self-efficacy/100)), peer feedback as the mean performance of agents within an interaction radius, and task complexity as a continuous 0 to 1 slider. Three [[feedback|feedback loops]] connect the layers: an internal loop following Winne and Hadwin's four phases, an external loop for instructor and peer calibration, and a developmental loop linking accumulated self-regulation to transfer. Parameters were chosen a priori from theory, expert feedback, and pilot simulations, because no student data were available to fit them.

## What the simulation produced

Five scenarios were run for 150 ticks with 50 repetitions each. The hybrid scenario combined active instructor feedback, active peer feedback, and constant high task complexity of 0.8, and it outperformed every other scenario. Learner profiles responded differently: the deep archetype showed the largest gain with instructor feedback (a 42% increase over base), the surface archetype improved substantially with instructor feedback (from 1.84 to 2.96) but barely changed with peer feedback alone, and the low-effort archetype was least responsive, remaining below 2.31 even in the hybrid scenario with effort allocation declining over time. A two-way ANOVA found a significant profile-by-scenario interaction [F(9,980) = 15.42, p < 0.001, η² = 0.11].

The sensitivity analysis identified the self-awareness threshold as the most influential parameter (S = 1.24), with instructor feedback strength next (S = 0.89 for weighted AMERT, S = −0.76 for metacognitive gap reduction) and the number of students minimal (S < 0.15). A two-way interaction analysis across five threshold levels by five feedback strengths showed a synergistic pattern at moderate settings and diminishing returns at extremes [F(16, 1,225) = 4.87, p < 0.001, partial η² = 0.06]. The author reports that [[qualitative-research|qualitative]] patterns held across thresholds: the widening gap appeared at threshold 40 (1.52 to 1.98), 60 (1.88 to 2.41), and 80 (2.14 to 2.67), while the transition rate to Level T ranged from 49% at threshold 50 to 25% at threshold 70 against 38% at the baseline of 60.

## Why the results must be read as hypotheses

The paper is unusually explicit about the boundary of its claims, and that boundary is the substantive finding for a reader. All observations come from simulated agents governed by theory-derived rules: the p-values and effect sizes quantify robustness to stochastic initialization across 50 runs, not sampling variability from a [[learners|learner population]], and the authors state that effect sizes describe properties of the computational model, not of educational reality. Expert content review, face review, internal consistency checking, and sensitivity analysis evaluate the framework and its computation, but none demonstrates that simulated trajectories correspond to actual human learning. [[assessment-validity]] from future calibration with real classroom data, which the author lists as the next step.

This places the study inside the [[simulating-students|simulated-students]] and [[simulation]] literature as a hypothesis-generating instrument rather than an [[assessment]] of learners, and it makes the equity pattern the most consequential output. Because agents start with different parameters and progression depends on cumulative mastery, uniform interventions necessarily produce diverging outcomes, so the model predicts that without differentiated support, standardized intervention may exacerbate pre-existing disparities. The author frames this as consistent with [[differential-effects-across-learner-groups|differential effects across learner groups]] and [[equity-in-ai-education]], while insisting it is a model-generated prediction requiring empirical testing. The candidate indicator termed metacognitive resilience — stability of higher-order metacognitive scores under increasing complexity — is likewise offered as a construct to investigate, not a validated trait: under the dynamic complexity scenario, phase three at complexity 0.9 brought an 18% drop in self-regulation and a 32% increase in metacognitive gap.

## What this means for practice

- **[[teacher-role]]** Treat these simulated results as hypotheses, not guidance: the modeled "sweet spot" — thresholds challenging enough to require effort but achievable enough that feedback can guide progression — is a design question to test in your own classroom, not a finding to apply directly.
- **Researchers.** Treat agent-based models as hypothesis generators with an explicit scope statement: report which claims are model-generated, and separate internal coherence checks from external validity rather than letting a classification accuracy stand in for realism.
- **Researchers.** Calibrate parameters against longitudinal classroom data before generalizing magnitudes; the reported transition rate to Level T ranged from 25% to 49% across threshold values in this same model.
- **Instructional designers.** Use the threshold-and-feedback interaction as a design hypothesis to test, and keep task complexity moderate: the modeled inverted-U shows high complexity inhibiting the metacognitive work it was meant to prompt.
- **Faculty developers.** Surface the equity implication explicitly: a uniform intervention can widen gaps between stronger and weaker learners, so pair it with differentiated support rather than assuming it lifts everyone.

## Limitations

- All results come from simulated agents under theory-derived rules; no student participants, educational records, or identifiable personal information were involved, and no classroom data were used to fit the parameters.
- Peer feedback was modeled quantitatively as the average performance of neighboring agents, so the null finding for peer feedback alone is a mathematically expected consequence of the architecture rather than an informative result about authentic peer interaction.
- The framework is a simulation-based digital twin without a physical counterpart, real-time synchronization, or bidirectional coupling, so it is not a data-driven digital twin despite the terminology.
- The self-awareness threshold of 60 was theoretically derived and expert-verified rather than empirically validated, and it was the most influential parameter (S = 1.24), so [[quantitative-research|quantitative]] magnitudes are contingent on the baseline parameterization.
- The Delphi panel of 12 experts was not constructed to be representative of international scholars, the study assumes an undergraduate context, and the sensitivity analysis covered only one-way and two-way variation rather than global methods such as Sobol indices or the Morris method.

## Citation

Guo, C. (2026). [Design and evaluation of an agent-based digital-twin-inspired simulation for metacognition research in higher education](https://doi.org/10.3389/fpsyg.2026.1914901). *Frontiers in Psychology*, *17*.
