---
title: Simulating learners' task-selection strategies and system constraints in mastery learning
created: "2026-10-10T19:00:00-04:00"
updated: "2026-10-16T13:51:50-04:00"
type: article
foundations: [learning-design]
technology: [intelligent-tutoring, knowledge-tracing, adaptive-learning]
pedagogy: [mastery-learning, self-regulated-learning]
audience: [educational technology developers, software developers, researchers]
level: [k 12]
sources: ['raw/papers/noh-simulating-task-selection-2026.md']
confidence: high
research_method: [process-outcome modeling]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This paper uses simulation — 1,000 simulated learners per run, AFM + BKT parameters estimated from real MathTutor and PSLC DataShop logs — to compare nine task-selection strategies under [[mastery-learning|mastery learning]] shared control, and to test how system constraints interact with them. The headline result is the extreme outlier: the risk-averse "Minimize Worst Case Loss" strategy (choose the skill whose worst-case mastery loss is smallest) produces **30.28× overpractice** in equation-solving and 28.93× in graph-interpretation — an order of magnitude above the other seven strategies (1.73 ± 0.38 and 3.22 ± 0.05). Informed risk-aversion, in other words, is catastrophically inefficient: avoiding any chance of mastery loss means perpetually re-practicing the safest skills. System constraints fix it surgically: task-selection constraints cut Minimize Worst Case Loss overpractice to 12.88/14.46, and a problem-selection "Prefer Harder" bias cuts it to 1.98× (Cohen's d = 1.86) — while already-efficient strategies (Blocking, Interleaving, Strength/Weakness Targeting) are essentially unaffected. The design lesson is that constraint design should be *strategy-aware*: the same constraint that rescues a pathological strategy is inert for healthy ones, which makes targeted constraint design a safe, no-regret improvement to shared-control ITS.

The framework's novelty is bringing outcome-informed strategies (Maximize Usual Case, Minimize Worst Case Loss, Maximize Best Case) into the comparison — these require the simulation to project mastery under best/usual/worst-case scenarios before choosing, modeling learners who reason about outcomes rather than just current mastery. The validation chain is what makes the result trustworthy: AFM/BKT fit on real data, solution paths derived from most-frequent skill sequences, 95% BKT mastery threshold matching ITS practice, TutorShop default parameters (pinit = 0.25, plearn = 0.22, pguess = 0.2, pslip = 0.1), and the design explicitly separates between-problem skill selection from within-problem problem selection to mirror real shared-control architectures. The equity framing in the discussion is important: because learners vary enormously in strategy, a constraint that protects pathological strategies without touching efficient ones is a way to support weaker self-regulators (the risk-averse, the loss-averse) without taking anything away from strong ones — simulation-first redesign avoids exposing students to suboptimal conditions to discover this. The authors flag the next steps: motivation and self-regulated-learning models inside the simulation, and cross-domain validation.

## Key findings

- **Strategy efficiency varies by an order of magnitude.** Minimize Worst Case Loss: 30.28× overpractice (equation-solving), 28.93× (graph-interpretation). All seven other strategies: 1.73 ± 0.38 and 3.22 ± 0.05 respectively.
- **Risk-aversion is the pathology.** The worst strategy is not laziness but *informed* risk-avoidance — minimizing worst-case mastery loss means re-practicing safest skills indefinitely.
- **Constraints are strategy-specific levers.** Task-selection constraints cut the pathological strategy to 12.88/14.46×; the Prefer Harder problem-selection constraint cuts it to 1.98× (d = 1.86), while efficient strategies are unchanged across all conditions.
- **Simulation-first redesign.** The whole study demonstrates the method's value: classroom experimentation would expose students to 30× overpractice to discover the constraint that prevents it.
- **Grounded parameters.** AFM/BKT fit on real MathTutor/DataShop logs; 95% mastery threshold; TutorShop defaults; 1,000 learners per run; open-source code.

## What this means for practice

- **For ITS developers:** audit which strategies your shared-control interface enables before shipping — the interface's default framing (e.g., showing worst-case projections) may steer risk-averse learners into 30× overpractice.
- **Design constraints to be inert for good strategies:** the Prefer Harder pattern (bias problem difficulty when a skill is selected) is the template — it rescues pathological strategies and doesn't touch efficient ones.
- **For researchers:** outcome-informed strategies (best/usual/worst-case projections) are a realistic and previously unmodeled learner behavior class; the simulation harness (AFM+BKT, real-data parameters) is reusable for other shared-control questions.
- **For equity-aware design:** constraint targeting protects weak self-regulators without taxing strong ones — a no-regret improvement path for mastery learning systems.

## Limitations

- Simulation only — no classroom validation of the constraint effects on real learners; the real-data grounding is in parameters, not in demonstrated behavioral fidelity of the simulated strategies.
- Two math domains (equation-solving, graph-interpretation); the strategy ranking may be domain-dependent (Strength Targeting was second-worst in equation-solving but the ranking shifts elsewhere).
- Models only between-problem skill selection with system-side problem selection — learner-controlled problem selection and within-problem choices are out of scope.
- No motivational or metacognitive modeling (named as future work), so the strategies are cognitive heuristics without the engagement dynamics that mediate them in vivo.
- Overpractice is the efficiency metric; learning outcomes, time-to-mastery distributions, and long-term retention are not compared across strategies.

## Citation

Noh, H., Chowdhary, A., Ooge, J., Aleven, V., & Borchers, C. (2026). [*Simulating learners' task-selection strategies and system constraints in mastery learning*](https://arxiv.org/abs/2605.21613). *arXiv:2605.21613* [cs.HC].
