---
title: "BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation"
created: "2026-10-01T19:37:00-04:00"
updated: "2026-10-01T19:37:00-04:00"
type: article
sources: ['raw/papers/2602.13280.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment, system development]
discipline: [cs education]
audience: [researchers, software developers, educational technology developers]
pedagogy: [self-regulated-learning, problem-solving]
technology: [simulating-students, llm, student-modeling, knowledge-tracing, intelligent-tutoring, educational-nlp]
methods: [benchmark, ai-ed-evaluation]
foundations: [agentic-ai, ai-education, limitations-in-aied-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Wang and colleagues (2026) name a failure mode that runs through most LLM [[simulating-students|student simulation]]: **competency bias**, where a model optimizes for efficient correctness instead of the erratic, iterative struggle that characterizes a novice. Their answer is architectural rather than rhetorical. BEAGLE is a neuro-symbolic framework that imposes [[self-regulated-learning]] theory on the generator — a semi-Markov model controls when cognitive and metacognitive behaviors occur, [[knowledge-tracing|Bayesian knowledge tracing]] with explicit flaw injection creates realistic gaps and "unknown unknowns", and a decoupled Strategist/Executor split stops the model from silently fixing the errors it was supposed to make. On Python problem-solving tasks it reproduces authentic trajectories better than prompting, rule-based, and agentic baselines (DKL = 0.31 against a best baseline of 0.53), and in a human Turing test 71 raters could not tell its traces from real student data (52.8% accuracy, d′ = 0.15). The paper's sharpest result is an ablation: injecting BEAGLE's own metacognitive vocabulary into baselines never beat DKL = 0.63, and removing the symbolic controller while keeping the prompts pushed DKL to 6.81 — sequence-level student simulation, they argue, cannot be recovered by context engineering alone.

## Key Findings

1. Competency bias is the target: prompted LLMs solve the task too well to stand in for novices, and the paper measures this directly — Vanilla and chain-of-thought baselines reach 100% solve rates where real students do not.
2. BEAGLE reaches the lowest behavioral divergence from real student traces, DKL = 0.31 ± 0.05 against 0.53 ± 0.18 for chain-of-thought, 0.83 ± 0.22 for an exemplar-conditioned LLM simulator, and 0.95 ± 0.04 for rule-based SimStudent.
3. It reproduces error recurrence at 86.2 ± 21.3%, the epistemic metric that operationalizes the paper's core objective — the next error should follow the pattern real students show, not appear at random.
4. Perceptual fidelity follows: BEAGLE scores 2.44 ± 0.85 on the judge-rated realism scale against 1.64 ± 0.59 for the best baseline, and its solve rate of 10.00 ± 4.24% with 29 ± 4 steps is the profile of a struggling learner rather than a capable model.
5. In a human Turing test with 71 raters, classification accuracy between BEAGLE traces and real student traces was 52.8% — statistically equivalent to chance (d′ = 0.15, pTOST = 0.038).
6. Prompt-level fixes do not close the gap: baselines given BEAGLE's own metacognitive prompt never beat DKL = 0.63 or realism 1.64, and removing the semi-Markov controller while preserving the prompts pushed DKL to 6.81.
7. The evaluation spans four tasks — Particle Simulator (projectile motion with gravity and drag), Bouncing Ball, Inclined Plane, and an out-of-distribution Gradient Descent task — sharing 24 knowledge components (11 coding, 8 physics, 5 math), with 11 to 14 invoked per problem.
8. Results hold across six frontier backbones (Gemini 2.0/2.5/3 Flash, GPT-4o-mini, GPT-4.1-mini, Claude Haiku 4.5), with the main table run at N = 50 simulations and T = 30 steps on Gemini 2.0 Flash.

## Three mechanisms, and why the architecture matters

Each of the three components addresses a different way a simulator drifts. The semi-Markov model governs timing and transitions between cognitive and metacognitive behaviors, so the *sequence* of a struggle is generated rather than left to the model's judgment about what a learner would plausibly do next. Bayesian knowledge tracing with explicit flaw injection enforces knowledge gaps the model cannot reason its way out of, including gaps it does not know it has. The decoupled design separates high-level strategy from code generation so that the executor cannot quietly correct an intentional error — which is precisely the behavior that makes a simulated novice useless as a tutee or a test case. The ablation is what makes the argument land: if prompt injection of the same vocabulary failed while removing the symbolic controller destroyed performance, then fidelity here is a property of the control structure, not of how the model is asked to behave. This is the same lesson arriving from a different direction than the [[simulating-novice-students-machine-unlearning-2026|machine-unlearning]] route to novice states, which removes knowledge from the weights instead of constraining behavior.

## What this means for practice

- **Researchers using simulated students.** Measure sequence-level fidelity, not just answer accuracy. A simulator that solves tasks correctly is failing if the goal is to stand in for a learner, and divergence from real trajectories is the metric that catches it ([[benchmark]]).
- **Educational technology developers.** Treat the architecture as the lever. The ablation result says the same instructions that fail inside a prompted agent work when a symbolic controller enforces them, so effort belongs in the control layer.
- **Researchers training tutors on synthetic data.** Error recurrence matters more than surface realism: a tutor trained against a simulator that errs randomly learns the wrong thing, which is why the recurrence metric is included alongside style scores ([[intelligent-tutoring]]).
- **Anyone evaluating a simulation claim.** The Turing test here is calibrated and reported with a non-inferiority test rather than a bare accuracy figure, and the judge metrics carry an inter-rater agreement of κw = 0.76 — a standard worth copying ([[ai-ed-evaluation]]).

## Limitations

- **Residual competency bias on the strongest backbones.** The authors report that the bias is reduced rather than eliminated, and that capability-adaptive symbolic-control gain is the natural next step.
- **A knowledge–fluency trade-off.** Enforcing realistic knowledge gaps costs fluency, which the authors say calls for richer mastery representations rather than a better prompt.
- **Single-agent scope, and a narrow task family.** BEAGLE simulates one learner in Python programming tasks spanning physics and applied math; multi-agent classrooms and adaptive tutoring policies trained on synthetic trajectories are left to future work ([[limitations-in-aied-research]]).

## Citation

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [*BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation*](https://arxiv.org/abs/2602.13280). arXiv preprint.