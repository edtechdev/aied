---
title: "A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI"
created: 2026-07-19
updated: 2026-07-19
type: article
tags: [agentic-ai, ai-literacy, assessment, authentic-assessment, computational-thinking, generative-ai, higher-ed, oral-defense, over-reliance, verification]
sources: [raw/papers/arxiv-2026-tool-invariant-framework.md]
confidence: high
contested: false
---

# A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI

**Larry Engelhardt (Francis Marion University)** — *arXiv:2607.15518* [physics.ed-ph], submitted 17 Jul 2026. CC BY 4.0. doi:10.48550/arXiv.2607.15518.

📄 arXiv full text (HTML) — open access; supplement tables (task-by-task progression, oral-defense rubric) as [ancillary PDF](https://arxiv.org/src/2607.15518v1/anc/supplement_pdf.pdf).

> **Note on type:** This is a *framework / position essay* (first-person, draws on the author's teaching practice), not a controlled empirical study. Its claims are argued and illustrated, with open questions explicitly flagged as untested. It is tagged `confidence: high` for fidelity to the source and internal rigor, but the design prescriptions are the author's and largely await validation (Fall 2026 cohort).

## Summary

Agentic AI — systems that *write, run, and revise* simulation code from natural-language specs — is the latest step in a centuries-long migration of mechanical work from human to tool. Engelhardt argues that **what a learner must know is tool-invariant**: across tools (fingers → pencil → calculator → Python → agent), the requirements are stable; only their *content* and *weight* shift. The paper organizes these into **five pillars**, argues that **sensemaking/verification is now the load-bearing skill** (because AI-generated artifacts are *bespoke* and *unvalidated*, unlike socially-validated libraries), and draws the assessment consequence: **when artifacts can be generated on demand, the artifact no longer certifies the student.** The proposed response: **AI-free in-class coding quizzes** (measure white-box residue) + **oral defenses of comment-stripped, AI-assisted work** (measure orchestration), with a *verification gate* that must pass regardless of total score.

## The five pillars (tool-invariant)

1. **Inputs and outputs** — what goes in, what comes out, conditions of validity; problem posing.
2. **Method concept** — a working model of what the method does, including its knobs (step size, tolerance) and characteristic failure modes (instability, divergence, overfitting, aliasing).
3. **Terminology** — precise disciplinary vocabulary; *now an input channel*, since vague natural-language specs silently cede choices to the tool.
4. **Sensemaking** — judging whether outputs make sense and *establishing* correctness (verification/validation). Always present; becomes **load-bearing** under agentic AI.
5. **Operating the tool** — the actuation skill: once penmanship, now *directing an agent* (broad, shallow "interactional expertise" rather than narrow deep syntax).

The pillars organize into a workflow: **Specify → Predict → Delegate → Verify → Interpret; Iterate**, threaded by **calibrated reliance** (how much verification is owed, given tool + task).

## Why verification is newly load-bearing (the core argument)

Opacity was never the problem — *validation* is. A library routine (FFT, linear algebra) is opaque but **socially validated** (published algorithms, decades of testing, millions of users). An AI-generated simulation is opaque **and bespoke**: a population-of-one artifact from a stochastic process whose competence frontier is "jagged and invisible," whose failures arrive *disguised as successes* (running code, smooth plots, confident prose). The verification burden that ecosystems amortized across a community now lands on **each student, for each artifact, every time.**

**Principle of validation authority:** *delegation is safe exactly where the delegator retains the ability to validate the outputs.* A computational-physics course now exists to train validation authority. Corollary: "anyone can build software with AI" holds only where correctness is *observable in use* (dashboards, apps); a physics simulation's correctness must be *established* by disciplinary checks.

## What must remain human (non-delegables)

Posing the problem · choosing & owning the physical model/assumptions · the pre-execution prediction · specifying the checks · final epistemic responsibility ("the AI said so" is never a justification). Items 1, 2, 5 are constitutive of doing science, not claims about current AI capability, and do not weaken as models improve.

## Assessment design (the constructive response)

- **Proxy collapse:** traditional "write code → submit report" grading died because the artifact no longer certifies the student (Goodhart's law; Kortemeyer's assessment alarm). Supervised formats survive.
- **The product** is the student's ability to *explain and defend* artifacts in the discipline's language — certified, as at the Ph.D. level, by **oral defense**.
- **Two instruments:** (1) **AI-free in-class coding quizzes** in a lockdown browser (assess the white-box phase / coding residue); (2) **ten-minute oral defenses** of AI-assisted work, with code **comments stripped** beforehand so understanding can't be performed by reading borrowed narration. The defense probes, live and adaptively: walkthrough of uncommented code, plot interpretation, and *verification probes* ("why should I believe this?", "what did the AI decide that you didn't?").
- **Verification gate:** the rubric scores five dimensions (code comprehension, method understanding, physics model/terminology, interpretation, verification); the verification dimension must reach "functional" for the defense to pass, regardless of total.
- **Scalability:** honest arithmetic — ~28 contact-hours of defenses/semester for ~15 students (less than grading 15 reports, more informative); degraded modes (spot-defenses, TA-led, paired) named with costs. "It doesn't scale" is "partly the point" — a equity concern for under-resourced institutions.

## Teaching practices

- **White-box, then black-box** (Buchberger): study a method transparently (hand-code the 15-line Euler integrator, watch it fail at large dt) *before* delegating. Dissolves the "must code vs. need not code" debate — both true at different rungs.
- **Error injection:** give students subtly-wrong agent output (sign error, dt too large, wrong potential); grade the *diagnosis*. Trains reading code one didn't write.
- **Motivation over prohibition:** a guardrailed tutor (Fall 2025) helped engaged students but was useless to answer-seekers ("an unguardrailed model is two browser tabs away"). Framing: homework is the gym, not the job; AI is a forklift at the gym. Design for motivation, not bans.
- Term "**comprehension debt**" (gap between code a system contains and code its maintainers understand) imported from software engineering as a risk of AI-assisted production.

## Connections to the wiki

- A direct, discipline-specific instantiation of the [[authentic-assessment]] and [[academic-integrity]] thread already running through the wiki — its "split instrument" (AI-free quiz + oral defense) is the computational-physics cousin of Krebsbach & Cross's split-format (paper knowledge + open applied) in [[moral-panic-genai-classroom]].
- Grounds the [[over-reliance]] and [[cognitive-offloading]] concern in a concrete mechanism: agentic AI removes the *incidental* practice that built supervisory judgment, so the course must *manufacture* it (white-box + error injection).
- Speaks directly to [[agentic-literacy-debt]] (introduces "comprehension debt"; the validation-authority principle is the epistemic counterpart to literacy debt) and to [[generative-ai-guardrails-harm-learning]] (the author's own guardrailed tutor failed for unmotivated students — guardrails alone are insufficient; assessment-side design is required).
- Reinforces [[ai-literacy]] (interactional expertise, calibrated reliance) and [[computational-thinking]].

## Related Pages
- [[authentic-assessment]] — Oral defense + comment-stripped AI-assisted work as authenticity/integrity design
- [[academic-integrity]] — Proxy collapse: artifact no longer certifies student; verification-gated defense restores certification
- [[moral-panic-genai-classroom]] — Companion split-format (paper knowledge + open applied); both argue design beats ban
- [[over-reliance]] — Agentic AI removes incidental supervisory practice; course must manufacture it
- [[cognitive-offloading]] — Offloading code authorship; verification burden returns to the student
- [[agentic-literacy-debt]] — Comprehension debt; validation authority as epistemic counterpart
- [[generative-ai-guardrails-harm-learning]] — Author's guardrailed tutor failed unmotivated students; assessment design > tool guardrails
- [[ai-literacy]] — Interactional expertise; calibrated reliance as the core AI-era skill
- [[computational-thinking]] — Five pillars repackage Weintrop/Weller/Odden CT constructs, re-weighted
- [[higher-ed]] — Small-class deployment context

## Citation

Engelhardt, L. (2026). A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI. [arXiv:2607.15518](https://arxiv.org/abs/2607.15518) [physics.ed-ph]. https://doi.org/10.48550/arXiv.2607.15518
