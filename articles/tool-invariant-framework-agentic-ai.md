---
title: A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI
created: "2026-07-19T04:33:04-04:00"
updated: "2026-08-28T15:00:00-04:00"
type: article
tags: [agentic-ai, ai-literacy, assessment, authentic-assessment, computational-thinking, generative-ai, higher-ed, language-learning, cognitive-offloading, ai-ed-evaluation]
audience: [instructors]
research_method: [theoretical analysis]
level: [higher ed]
category: [assessment, evaluation]
sources: ['raw/papers/arxiv-2026-tool-invariant-framework.md']
confidence: high
---

> **Synthesis:** Across the centuries-long migration of mechanical work from human to tool — fingers → pencil → calculator → Python → [[agentic-ai|agent]] — Engelhardt argues that what a learner must know is **tool-invariant**. Five pillars (inputs/outputs, method concept, terminology, sensemaking, operating the tool) stay stable while only their *content* and *weight* shift. Because AI-generated [[simulation|simulations]] are opaque **and bespoke** (validated by no community), [[critical-thinking|verification]] becomes the load-bearing skill and the artifact no longer certifies the student. The constructive response pairs **AI-free in-class coding quizzes** with **oral defenses of comment-stripped, AI-assisted work**, gated on a verification dimension — design prescriptions that largely await Fall 2026 cohort validation.

> **Note on type:** This is a *framework / position essay* (first-person, draws on the author's [[pedagogy|teaching practice]]), not a controlled empirical study. Its claims are argued and illustrated, with open questions explicitly flagged as untested. It is tagged `confidence: high` for fidelity to the source and internal rigor, but the design prescriptions are the author's and largely await validation (Fall 2026 cohort).

## Summary

[[agentic-ai|Agentic AI]] — systems that *write, run, and revise* simulation code from natural-language specs — is the latest step in a centuries-long migration of mechanical work from human to tool. Engelhardt argues that **what a learner must know is tool-invariant**: across tools (fingers → pencil → calculator → Python → agent), the requirements are stable; only their *content* and *weight* shift. The paper organizes these into **five pillars**, argues that **sensemaking/verification is now the load-bearing skill** (because AI-generated artifacts are *bespoke* and *unvalidated*, unlike socially-validated libraries), and draws the [[assessment]] consequence: **when artifacts can be generated on demand, the artifact no longer certifies the student.** The proposed response: **AI-free in-class coding quizzes** (measure white-box residue) + **[[authentic-assessment|oral defenses]] of comment-stripped, AI-assisted work** (measure orchestration), with a *verification gate* that must pass regardless of total score.

## Key Findings

1. **Tool-invariance of the five pillars.** Competent use of any computational method at any scale requires inputs/outputs, a method concept, terminology, sensemaking, and tool operation. Content changes most for tool operation (penmanship → [[prompt-engineering|prompting]]) and least for sensemaking, but *weight* moves the other way: sensemaking becomes load-bearing under agentic AI.
2. **Terminology is now an input channel.** When a tool accepts natural language, every choice a vague specification leaves open is silently ceded to the tool — "integrate this ODE with adaptive Runge–Kutta and verify energy conservation" and "make the ball bounce right" yield categorically different artifacts.
3. **Tool operation has inverted shape.** Operating NumPy required narrow, deep skill; directing an agent requires broad, shallow "interactional expertise" (conversing, judging plausibility, directing work) across many ecosystems.
4. **Verification is newly load-bearing.** A library FFT is opaque but *socially validated*; an AI simulation is opaque and *bespoke* — a population-of-one artifact whose failures arrive disguised as successes. The verification burden ecosystems amortized now lands on each student, for each artifact, every time.
5. **Principle of validation authority.** *Delegation is safe exactly where the delegator retains the ability to validate the outputs.* "Anyone can build software with AI" holds only where correctness is observable in use (dashboards, apps); a [[physics-education|physics]] simulation's correctness must be *established* by disciplinary checks.
6. **Two-instrument assessment.** AI-free in-class coding quizzes (white-box residue) plus ten-minute oral defenses of comment-stripped AI-assisted work, scored on a five-dimension rubric with a verification gate that must reach "functional" regardless of total.

## The five pillars (tool-invariant)

1. **Inputs and outputs** — what goes in, what comes out, conditions of validity; problem posing.
2. **Method concept** — a working model of what the method does, including its knobs (step size, tolerance) and characteristic failure modes (instability, divergence, overfitting, aliasing).
3. **Terminology** — precise disciplinary vocabulary; *now an input channel*, since vague natural-language specs silently cede choices to the tool.
4. **Sensemaking** — judging whether outputs make sense and *establishing* correctness (verification/validation). Always present; becomes **load-bearing** under agentic AI.
5. **Operating the tool** — the actuation skill: once penmanship, now *directing an agent* (broad, shallow "interactional expertise" rather than narrow deep syntax).

The pillars organize into a workflow: **Specify → Predict → Delegate → Verify → Interpret; Iterate**, threaded by **calibrated reliance** (how much verification is owed, given tool + task) — a competency that threads through [[trust-calibration|trust in automation]].

## Why verification is newly load-bearing (the core argument)

Opacity was never the problem — *validation* is. A library routine (FFT, linear algebra) is opaque but **socially validated** (published algorithms, decades of testing, millions of users). An AI-generated simulation is opaque **and bespoke**: a population-of-one artifact from a stochastic process whose competence frontier is "jagged and invisible," whose failures arrive *disguised as successes* (running code, smooth plots, confident prose). The verification burden that ecosystems amortized across a community now lands on **each student, for each artifact, every time.**

**Principle of validation authority:** *delegation is safe exactly where the delegator retains the ability to validate the outputs.* A computational-physics course now exists to train validation authority. Corollary: "anyone can build software with AI" holds only where correctness is *observable in use* (dashboards, apps); a physics simulation's correctness must be *established* by disciplinary checks. This reframes [[ai-literacy]] for science as the trained capacity to specify checks and judge evidence — a form of [[metacognition]] made concrete.

## What must remain human (non-delegables)

Posing the problem · choosing & owning the physical model/assumptions · the pre-execution prediction · specifying the checks · final epistemic responsibility ("the AI said so" is never a justification). Items 1, 2, 5 are constitutive of doing science, not claims about current AI capability, and do not weaken as models improve. These map directly onto [[assessment-validity]] concerns: the inference from artifact to student collapses precisely where these human elements are delegated.

## Assessment design (the constructive response)

- **Proxy collapse:** traditional "write code → submit report" grading died because the artifact no longer certifies the student (Goodhart's law; Kortemeyer's assessment alarm). [[summative-assessment|Supervised formats]] survive.
- **The product** is the student's ability to *explain and defend* artifacts in the discipline's language — certified, as at the Ph.D. level, by **[[authentic-assessment|oral defense]]**.
- **Two instruments:** (1) **AI-free in-class coding quizzes** in a lockdown browser (assess the white-box phase / coding residue); (2) **ten-minute oral defenses** of AI-assisted work, with code **comments stripped** beforehand so understanding can't be performed by reading borrowed narration. The defense probes, live and adaptively: walkthrough of uncommented code, plot interpretation, and *verification probes* ("why should I believe this?", "what did the AI decide that you didn't?").
- **Verification gate:** the rubric scores five dimensions (code comprehension, method understanding, physics model/terminology, interpretation, verification); the verification dimension must reach "functional" for the defense to pass, regardless of total.
- **Scalability:** honest arithmetic — ~28 contact-hours of defenses/semester for ~15 students (less than grading 15 reports, more informative); degraded modes (spot-defenses, TA-led, paired) named with costs. "It doesn't scale" is "partly the point" — an [[equity-in-ai-education|equity concern]] for under-resourced institutions.

## Teaching practices

- **White-box, then black-box** (Buchberger): study a method transparently (hand-code the 15-line Euler integrator, watch it fail at large dt) *before* delegating. Dissolves the "must code vs. need not code" debate — both true at different rungs, tied to [[scaffolding]] theory.
- **Error injection:** give students subtly-wrong agent output (sign error, dt too large, wrong potential); grade the *diagnosis*. Trains reading code one didn't write — a core response to [[ai-misuse-learning-harm|over-reliance]].
- **Motivation over prohibition:** a guardrailed tutor helped engaged students but was useless to answer-seekers ("an unguardrailed model is two browser tabs away"). Framing: homework is the gym, not the job; AI is a forklift at the gym. Design for [[motivation]], not bans — echoing [[self-regulated-learning]] and [[help-seeking]] theory.
- Term "**comprehension debt**" (gap between code a system contains and code its maintainers understand) imported from software engineering as a risk of AI-assisted production, connecting to [[cognitive-offloading]].

## Implications for AI in Education

The framework reframes what a computational science course *produces*: not code, plots, or reports (now cheap and unlimited), but a student who can stand next to a result and defend it in the discipline's language. Several consequences follow for [[higher-ed]] practice. First, **AI-free conditions are now the only valid conditions for measuring coding fluency**, while orchestration of AI-assisted work must be assessed separately — the two are complementary, not competing, instruments. Second, the *verification gate* offers a transferable model for keeping [[human-in-the-loop-ai|human accountability]] at the center of AI-mediated learning, since a course with only quizzes certifies residue but never orchestration, and one with only defenses certifies orchestration on unverified foundations. Third, the equity dimension is unavoidable: if trustworthy certification requires human-scale assessment, students at institutions that cannot staff it receive systematically weaker credentials — a live challenge for [[reducing-ai-misuse|AI-use policy]] and [[governance|institutional]] [[curriculum-design]]. Finally, the framework's own closed loop — the agentic tools that broke artifact assessment were used by one professor in days to build the comment-stripping infrastructure of its replacement — illustrates how faculty [[teacher-role|roles]] and workflows may shift under agentic AI.

## Connected Concepts

- [[ai-detection]]
- [[formative-assessment]]
- [[automated-essay-scoring]]
- [[student-experience]]
- [[ai-ed-evaluation]]
- [[agentic-ai]]
- [[reducing-ai-misuse]]
- [[prompt-engineering]]
- [[authentic-assessment]]
- [[physics-education]]

## Connected Articles

- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: redesigning authentic assessment in an AI-mediated world
- [[authentic-products-authenticated-processes-2026]] — From authentic products to authenticated processes: authentic assessment in AI-rich higher education
- [[moral-panic-genai-classroom]] — Navigating the moral panic: encouraging appropriate use of GenAI in the classroom rather than condemning innovation as disruption
- [[pchl-he-framework-genai-content-creation-2026]] — From Prompts to Verified Loops: The PCHL-HE Framework for Generative AI-Assisted Educational and Research Content Creation in Higher Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[trust-reliance-ai-education-2026]] — Trust and Reliance on AI in Education: AI Literacy and Need for Cognition as Moderators

## Citation

Engelhardt, L. (2026). [*A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI*](https://arxiv.org/abs/2607.15518).
