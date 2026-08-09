---
title: A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI
created: 2026-07-19
updated: 2026-07-19
type: article
tags: [agentic-ai, ai-literacy, assessment, authentic-assessment, computational-thinking, generative-ai, higher-ed, oral-defense, over-reliance, verification]
sources: ['raw/papers/arxiv-2026-tool-invariant-framework.md']
confidence: high
---

> **Larry Engelhardt (Francis Marion University)** — *arXiv:2607.15518* [physics.ed-ph], submitted 17 Jul 2026. CC BY 4.0. doi:10.48550/arXiv.2607.15518.

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

## Connected Concepts

- [[ai-literacy]]
- [[computational-thinking]]
- [[higher-ed]]

- [[agentic-ai]]
- [[generative-ai]]
## Connected Articles

- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[authentic-assessment]] — Authentic Assessment
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails can harm learning: Evidence from high school mathematics
- [[moral-panic-genai-classroom]] — Navigating the moral panic: encouraging appropriate use of GenAI in the classroom rather than condemning innovation a...
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...

## Citation

Engelhardt, L. (2026). A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI. [arXiv:2607.15518](https://arxiv.org/abs/2607.15518) [physics.ed-ph]. https://doi.org/10.48550/arXiv.2607.15518
