---
title: "Methodologies for Improving the Quality of AI Tutoring in K-12 Education"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
pedagogy: [student-engagement]
technology: [intelligent-tutoring, llm, personalized-learning, edtech-platform]
research_method: [experiment]
level: [k 12]
sources: ['raw/papers/2608.11259.md']
confidence: high
audience: [instructional designers, software developers, researchers]
---

> **Synthesis:** Udeshi et al. (2026), the team behind **Khanmigo** (Khan Academy's [[k-12]] AI tutor, launched 2023), describe the metrics they use to measure AI tutoring quality and student engagement, along with the live experiments that have moved those metrics. Because LLMs are opaque black boxes, they argue robust evaluation and live experimentation are essential. Grounded in a theory of action linking access to [[intelligent-tutoring|AI tutoring]] → [[student-engagement|cognitive engagement]] → skill acquisition → transfer to [[assessment|standardized assessment]], they treat quality as an engineerable property measured on a proximal-to-distal metric chain. They report that continuous "hill climbing" through live experimentation — over 40 experiments in the five months before the paper — cumulatively improved [[learning-gains|next-item correctness]] by 10% and cognitive engagement by 14%. Accepted at [[ai-education|AIED]] 2026, it connects to [[intelligent-tutoring]], [[research-methods-aied]], and [[ai-ed-evaluation]] literatures.

## Key Findings

1. Khan Academy runs AI tutoring quality improvement as a measurable engineering loop: a causal "theory of action" linking access to a high-quality tutor → cognitively engaged interaction → skill acquisition → transfer to standardized test performance, motivating a chain of metrics from proximal engagement quality to distal learning transfer.
2. Primary metrics are sensitive to change and act as leading indicators: **next-item correctness** for the Exercise surface (near transfer measured on items attempted independently) and **cognitive engagement** for Tutor Me (grounded in the [[icap-framework|ICAP framework]], scored by an [[llm|LLM]] judge calibrated against human [[pedagogy|pedagogical]] experts, F1 0.83).
3. Live experiments, not offline evals, are the engine of improvement: over 40 experiments in five months yielded cumulative gains of 10% on next-item correctness and 14% on cognitive engagement, with individual changes such as limiting Math Agent guidance cutting "giving away the final answer" by 85.5% and migrating to GPT-4.1 cutting it by 96.66%.
4. Offline evaluation is retained as a smoke test before shipping, but live experiments are preferred for "hill climbing" because primary metrics depend on user actions that single-turn offline evals cannot compute and small datasets (O(100)) saturate quickly.

## A Theory of Action for AI Tutoring Quality

Khan Academy's approach rests on an explicit causal chain: access to a high-quality [[intelligent-tutoring|AI tutor]] should promote [[student-engagement|cognitively engaged]] interactions; cognitive engagement, in turn, predicts skill acquisition; and skill acquisition should generalize to performance on [[assessment|standardized assessments]]. This theory of action justifies a metric hierarchy spanning proximal measures of engagement quality to distal measures of learning transfer — a framework broadly resonant with [[educational-measurement]] and [[transfer-of-learning]] concerns in the field.

## Product Surfaces

The paper focuses on the two [[edtech-platform|Khan Academy platform]] surfaces students use most for tutoring. **Exercise** provides skill-based practice with sets of typically 4 or 7 questions (numeric, multiple choice, matching, graphing), immediate corrective [[feedback]] after submission, static step-by-step hints, worked examples, and an AI tutor that can discuss the correct answer and solution after a student's own attempt. **Tutor Me** lets students bring outside problems for help, classifying each request as procedural math, general math or science, essay writing, or general [[humanities-education|humanities]]; for math problems it uses a reasoning LLM (o3-mini) to generate a solution and step-by-step [[scaffolding|hints]] for the tutor to reference.

## Measurement: Offline Datasets and Live Metrics

Metrics are one of the only scalable ways to reliably measure tutoring quality in a large, complex AI tutor. Measurement comes in two forms. **Offline evaluation datasets** estimate the impact of proposed changes before running live experiments, letting the team iterate on [[prompt-engineering|prompts]] and raise the odds of live gains. Notable datasets include an "Exercise gives away final answer" set (63 data points built by sampling production completions, running an LLM judge, and filtering to cases where a human expert agreed) and a "Tutor Me input classification" set (794 data points). **Live metrics** support "hill climbing" — incrementally improving Khanmigo — and are deliberately sensitive to change, moving after one to two weeks of experimentation. All metrics use threads as the unit of analysis, and most experiments are thread-diverted (a user may see different conditions across threads).

**Primary metrics** are the key outcomes the team will not compromise: *next-item correctness* (the percentage of times a student, after using Khanmigo during an Exercise, correctly attempts the next item in the same session independently — capturing [[transfer-of-learning|near transfer]]) and *cognitive engagement* (grounded in the [[icap-framework|ICAP framework]]'s Passive/Active/Constructive/Interactive levels; an LLM judge distinguishes passive answer-seeking from [[self-regulated-learning|self-explaining]] and inference-making, with F1 0.83).

**Secondary metrics** are tracked and improved but may be compromised for primary gains, including time-to-first-token latency (p50), time-to-full-response latency (p50), math error (an LLM judge, F1 0.61), tutor giving away the final answer pre-submission (F1 0.77), behavioral engagement (turns per conversation), and text complexity ([[educational-measurement|Flesch-Kincaid grade level]] and words per response). **Guardrail metrics** — error percentage and number of one-or-more-turn threads — quickly flag experiments that should be shut down.

## Infrastructure: Workflows and AI Components

Each Khanmigo feature is defined as a chat-based workflow with its own system prompt, [[guardrails]], and configurable steps before generating a final response; the primary guardrail is moderation of student input. A Python **Math Agent** runs student math in a sandbox (NumPy, SymPy) to reduce LLM math mistakes. The lowest-level building block is an "AI Component" — a generic function, usually an LLM call, routed through a single entry point that provides standardized logging, tracing, offline-eval compatibility, and declarative input overrides. Because the entry point of any workflow is itself an AI Component, experiments can add, remove, or replace whole workflow steps. This architecture — plus a shared overrides spec used by both offline eval specs and the GrowthBook feature-flag live-experiment platform — lets the team move fluidly from offline evaluation to live experimentation, an approach of interest to [[agentic-ai]] and [[ai-ed-evaluation]] practice.

## Live Experiments

The team highlights several experiments that significantly moved their metrics, with all point estimates adjusted for LLM-judge error via a rectifier.

**Reducing latency.** Making the Math Agent response concise (under ~50 words) cut time-to-full-response latency by 32.7% while raising behavioral engagement 4.65%. Disabling the Math Agent for non-math conversations (using a deterministic course-domain check) cut latency ~6% and lifted engagement ~2.6%. Limiting the Math Agent's verbose guidance cut giving-away-the-final-answer by 85.5% and latency by 7.85%, though cognitive engagement dropped 18.09% — observationally because reducing answer giveaways increased passive answer seeking, a theme tied to [[cognitive-offloading]] and the [[help-seeking|assistance dilemma]].

**Adapting to student knowledge.** Providing the tutor with an AFPM mastery estimate (Unfamiliar → Attempted → Familiar → Proficient → Mastered, computed from practice history) cut giving-away-the-answer by 55.16% and text complexity by 5.59%. Supplying the AFPM level of pre-requisite skills — instructing the tutor to have students review weak pre-requisites and provide worked examples — raised next-item correctness 2.74%, echoing [[prior-knowledge]] and [[student-modeling]] concerns.

**Model selection.** Newer models are not always strict improvements, so live experiments guide migration. Moving the main Exercise completion from GPT-4o to GPT-4.1 cut giving-away-the-answer by 96.66% and raised behavioral engagement 9.93%; migrating the Math Agent cut nothing harmful while raising next-item correctness 3.41% and cognitive engagement 19.29%; and swapping the Tutor Me classifier to a more compact GPT-4.1-mini cut time-to-first-token latency 14.40% while raising cognitive engagement 11.79%.

## Lessons Learned

The authors draw several practitioner lessons. Offline evals are best reserved as development smoke tests: primary metrics depend on user actions unavailable in single-turn evals, representative datasets are hard to maintain (PII-stripping, drift), and small datasets saturate quickly (>80% with wide confidence intervals). Live experiments overcome these limits and are the current engine of hill climbing. They also note that primary metrics improve over the US holidays (more motivated, voluntary users versus obligated in-school use), that students rapidly adapt to cheat-prevention changes — coaxing answers and causing a seesawing giving-away-answer metric — and that intuition often does not match outcomes, so rapid experimentation is essential.

## What this means for practice

- **Designers.** Run live, thread-diverted experiments instead of relying on offline evaluation: the primary metrics depend on user actions that single-turn offline evals cannot compute, and the platform's O(100) datasets saturate above 80% with confidence intervals too wide to measure further lift.
- **Designers.** Budget for the whole metric chain, treating proximal engagement quality and near-transfer next-item correctness as leading indicators and reserving the offline datasets as a pre-ship smoke test and prompt-iteration loop.
- **Researchers.** Treat LLM-judge metrics as measured with error — cognitive engagement F1 0.83, math error F1 0.61, tutor gives away the final answer F1 0.77 — and apply prediction-powered rectification rather than reporting raw judge output.
- **Designers.** Expect students to adapt and monitor for it: after the team cut answer giveaways by 85.5% and 96.66%, students found new ways to coax answers, producing a seesawing metric that needs guardrail monitoring.
- **Designers.** Personalize with mastery data and mind the trade-offs: supplying an AFPM mastery level cut answer giveaways 55.16% and pre-requisite levels raised next-item correctness 2.74%, whereas limiting Math Agent guidance cut answer giveaways 85.5% but dropped cognitive engagement 18.09% — the [[help-seeking|assistance dilemma]] in operational form.

## Limitations

- These are internal platform experiments rather than a controlled trial: conditions are thread-diverted, so one user can appear in different conditions across threads, and there is no external comparison group.
- The headline metrics are platform-internal and short-horizon — next-item correctness measures near transfer on a new item in the same session, and the link from skill acquisition to standardized assessment rests on external work (Eames et al., 2026), not on the experiments reported here.
- The reported gains are confounded by user mix: primary metrics rose during US Thanksgiving and Christmas because holiday users are voluntary and more motivated, while in-school use is teacher-obligated.
- Three reported metrics depend on LLM judges — cognitive engagement at F1 0.83, math error at F1 0.61, and giving away the final answer at F1 0.77 — and the authors note that students' counter-strategies erode gains after a change ships.

## Connected Concepts

- [[intelligent-tutoring]]
- [[k-12]]
- [[llm]]
- [[personalized-learning]]
- [[research-methods-aied]]
- [[student-engagement]]
- [[edtech-platform]]
- [[student-experience]]
- [[prompt-engineering]]

## Connected Articles

- [[oatutor-open-source-adaptive-tutor-2023]]
- [[genai-tutor-engagement-patterns]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[correct-answer-trap-ai-tutor]]
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]]
- [[access-not-enough-ai-tutoring-2026]]
- [[tutoring-effectiveness-index]]
- [[deeptutor]]

## Citation

Udeshi, T., Khazenzon, A., Khan, K., Breen, N., Corwin, R. J., DiGiano, C., Weatherholtz, K., & Zaluski, M. (2026). [*Methodologies for improving the quality of AI tutoring in K-12 education*](https://arxiv.org/abs/2608.11259). In Artificial Intelligence in Education (AIED 2026), LNCS vol. 16582. Springer.
