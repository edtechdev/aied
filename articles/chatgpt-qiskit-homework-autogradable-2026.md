---
title: "ChatGPT Solves All Tested Qiskit Homework Assignments"
created: "2026-08-24T09:10:00-04:00"
updated: "2026-08-24T09:10:00-04:00"
type: article
tags: [cs-education, academic-integrity, automated-assessment, generative-ai, assessment, llm]
sources: ['raw/papers/chatgpt-qiskit-homework-autogradable-2026.md']
confidence: high
---

> **Synthesis:** This empirical study by Kaltchenko and Tiwana (Wilfrid Laurier University) tests whether [[cs-education|introductory quantum-computing]] homework can remain [[automated-assessment|autogradable]] while still forcing students to run, review, and interpret their own results rather than banning [[generative-ai|AI]]. Three [[assessment|Qiskit assignment packages]] were built — seeded basis-state circuits, Quantum Fourier Transform (QFT) with inverse-transform recovery, and seeded Deutsch–Jozsa — each wrapped in deterrence layers (deterministic personalization, non-palindromic bitstrings, varied measurement maps, simulator execution, machine-readable JSON submissions, hidden references, circuit metrics, reflections, optional IBM Quantum execution). For each package a single fixed student-visible instance was tested in 50 separate ChatGPT sessions (150 total); all 150 final artifacts executed and passed the grader, giving each instance zero observed ChatGPT-resiliency under the study's operational definition. The analysis explains why the defenses failed — seeds changed parameters rather than task structure, expected results stayed derivable from visible logic, [[scaffolding]] exposed key steps, and hidden grading verified consistency rather than authorship — and argues that correct artifacts must be complemented by direct assessment of understanding (supervised modification, oral defense, prediction, transfer), a core concern for [[academic-integrity]] and [[llm]] use in [[physics-education]].

## Study design and the threat model

The paper frames the adversary not as a sophisticated attacker but as a **minimally engaged student**: someone who provides ChatGPT the assignment text, notebook, or student-visible files; requests a complete solution and required artifacts; runs the generated code in Jupyter or Colab; returns an exact installation or runtime error; and submits the finished work. The student never receives the hidden [[teacher-role|instructor]] solution, hidden reference functions, expected answers, or grader [[feedback]]. This models direct outsourcing rather than elaborate [[prompt-engineering]] or autonomous agents.

Operational resilience is defined as *completion resistance*, not [[ai-detection|plagiarism detection]], authorship, or learning: for each package a, observed resiliency is Ra = 1 − Ca/Na, where Na is the number of separate ChatGPT sessions and Ca is the number yielding an executed, grader-accepted completion. A session counted as correct only when the final artifact executed and passed the corresponding grader after ordinary execution and permitted error feedback. Each fixed instance was repeated in 50 separate sessions, holding assignment content constant while resampling the model interaction, so the design tests whether completion was stable rather than a one-off response — not generalization across seeds or variants.

## The three assignment packages

Three package types target distinct quantum-programming difficulties. **HW1** (seeded basis-state circuits) addresses a frequent Qiskit pitfall — count keys are displayed in classical-register order, which can differ from the order students list qubits — by having students prepare a personalized basis state, apply a seeded bit-flip mask, measure through a direct or reversed qubit-to-classical-bit map, run Aer, explain count-string ordering, and export `answers.json`. **HW2** (QFT followed by inverse-QFT) moves to a recognizable algorithmic workflow where the inverse transform recovers the input (QFT⁻¹QFT|x⟩ = |x⟩), adding circuit depth and operation counts plus an optional hardware extension — but its student-facing notebook is heavily scaffolded. **HW3** (seeded Deutsch–Jozsa) requires a seed-specific oracle rather than a textbook circuit: students classify a seeded linear oracle, build the custom oracle and complete circuit, use a personalized measurement map, run Aer, and report metrics and reflections, with an optional hardware run.

Across all three, deterrence layers include deterministic synthetic or student identifiers that regenerate a reproducible configuration, non-palindromic bit patterns, nonzero or custom masks, measurement-map variation, machine-readable JSON schemas, hidden deterministic instructor references (regenerating expected output without a per-student answer key), circuit and transpiler metrics, and reflections tied to individual results. The broader project also explored hidden instructions, canary markers, QPY semantic validation, and noisy-[[simulation]] grading, but these were not mandatory in the 150-session fixed-instance experiment and are not claimed as defeated controls.

## Results: all 150 artifacts passed

For each package, Ca = Na = 50, so Ra = 0: **150 of 150 final artifacts executed and passed the corresponding grader**, and each fixed instance had zero observed ChatGPT-resiliency. Nine sessions (three per package) were fully archived with transcripts, generated files, logs, and grader outputs under a controlled protocol — each began a new conversation, only student-visible materials were supplied, at most two follow-ups were permitted (limited to an exact runtime error or a request for an omitted required file), and the operator supplied no conceptual hint, independent code fix, expected answer, hidden reference, or grader feedback. Within those nine archived sessions every first-response artifact was already grader-passing, and no archived session required operator code edits or correction of quantum logic.

The only failures were environmental. Eight notebook executions initially stopped at an optional `qc.draw("mpl")` call because the `pylatexenc` dependency was missing, and one HW2 grading environment lacked `qiskit-aer`; each resolved with a single permitted installation or rendering adjustment. These were dependency and visualization issues, not errors in the quantum algorithm, expected result, output schema, or reflection. Earlier exploratory runs on real IBM hardware (QPE on `ibm_marrakesh`, QFT and Deutsch–Jozsa on `ibm_kingston`) showed hardware supplied execution evidence — backend names, job identifiers, transpiled circuits, noisy counts — but did not eliminate the minimally engaged workflow, since ChatGPT generated the code and the operator returned execution data for interpretation.

## Why the deterrence layers did not stop ChatGPT

The analysis identifies four reasons the defenses failed. First, **personalization changed parameters, not the task class**: a deterministic seed prevents every student from receiving the same numeric configuration but does not create a new reasoning problem, because ChatGPT could read the visible generator, specialize the circuit to generated values, and produce a parameterized solution; non-palindromic bitstrings and reversed maps exposed careless implementations but remained explicit, rule-based transformations. Second, **scaffolding and predictability weakened execution dependence**: in HW2 the notebook exposed the complete QFT and inverse-QFT routines, the expected recovery relationship, the measurement-map calculation, and generic reflection text, so ChatGPT could complete the package without independently deriving the algorithm and could know the ideal count key before running the simulator; HW3 similarly disclosed that a zero mask is constant while a nonzero linear mask is balanced.

Third, **hidden grading is not hidden problem information**: hidden deterministic references made assignments autogradable and stopped students from reading an instructor answer file, but they did not prevent ChatGPT from deriving a correct answer from the public specification — the graders checked seeded configuration fields, expected bitstrings, ideal counts, dominant outcomes, and reflection presence or length without semantically validating every circuit or establishing independent authorship or understanding. Fourth, **machine-readable JSON and reflections created no resistance**: LLMs handle structured output well when a schema or example is supplied, and generic or result-specific reflections were generated fluently after ChatGPT had calculated or received the relevant values. The observed minor failures — missing packages, outdated Runtime syntax, occasional bit-order risk — were ordinary debugging issues that a student could paste back into the same conversation, consistent with quantum-code studies showing large gains from [[generative-ai|execution feedback]].

## Implications for engineering education

The negative result does not imply that personalization, autograding, simulator work, or hardware laboratories should be abandoned — each remains educationally and operationally valuable. The finding is that their presence in a take-home package should not be interpreted as evidence that the student independently performed the substantive work. A human-centric response distinguishes **AI-supported production** from **verified understanding**: students may use AI for syntax, setup, or debugging, while instructors directly assess whether they can explain and adapt the result. Recommended measures include a short oral defense tied to the student's own circuit and counts, a supervised modification of a qubit mapping, oracle, or input state, prediction of a new outcome before execution, a transfer task that changes the algorithmic structure rather than only the seed, semantic validation of submitted circuits where implementation is a learning outcome, and brief in-class checks connecting code, mathematics, and observed hardware noise — a [[formative-assessment|formative]] counterweight to the take-home artifact.

The study also cautions against equating more submission artifacts with stronger validity: a notebook, JSON file, transpiler statistics, QPY circuit, job identifier, and reflection can all be genuine while still assembled through an LLM-directed workflow. Assessment should specify which evidentiary claim each artifact supports — that execution occurred, that a circuit is semantically correct, or that the student understands and can transfer the concept — and correctly completed artifacts should be complemented by [[student-ai-interaction|direct assessment of conceptual understanding]]. The study is explicitly exploratory and negative, not proof that every Qiskit assignment is solvable: three fixed instances were tested at the introductory level, exact model labels and dates were preserved only for the nine archived sessions, no human participants were studied, and there was no randomized baseline or ablation isolating the effect of each deterrence layer.

## Connected Concepts

- [[cs-education]]
- [[academic-integrity]]
- [[automated-assessment]]
- [[generative-ai]]
- [[assessment]]
- [[llm]]
- [[physics-education]]
- [[formative-assessment]]
- [[prompt-engineering]]
- [[student-ai-interaction]]

## Connected Articles

- [[zhan-chapman-genai-cs-education-2026]] — Harnessing generative AI in computer science education: pedagogical innovation, ethics, and the future of assessment
- [[reshaping-cs-education-genai]] — Reshaping undergraduate computer science education in the generative AI era
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of generative AI
- [[teaching-intro-ai-course-redesign-bill-of-rights-2026]] — Teaching intro AI when the tools can do the homework
- [[ai-tools-academic-work-cheating-2026]] — Is using AI tools for academic work cheating? Student perceptions and impact on academic performance
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era

## Citation

Kaltchenko, A., & Tiwana, G. (2026). [*ChatGPT Solves All Tested Qiskit Homework Assignments*](https://arxiv.org/abs/2608.19707).
