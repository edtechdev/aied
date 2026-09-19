---
title: "SCAN: A Decision-Making Framework for Task Assignment with Generative AI"
created: "2026-09-18T12:05:00-04:00"
updated: "2026-09-18T12:05:00-04:00"
type: article
foundations: [cognitive-offloading, human-ai-collaboration]
pedagogy: [metacognition, sociocultural-learning, self-regulated-learning, scaffolding]
technology: [generative-ai]
ethics: [ai-sycophancy]
stakeholders: [professional-training, lifelong-learning]
research_method: [theoretical analysis]
level: [higher ed]
audience: [educators, students]
page_kind: [framework]
sources: ['raw/papers/scan-framework-task-assignment-generative-ai-2025.md']
confidence: high
---

> **Synthesis:** Tsim and Gutoreva propose SCAN, a human-centric decision-making framework that tells a learner how to assign a task to [[generative-ai|generative AI]]. It takes Vygotsky's [[sociocultural-learning|Zone of Proximal Development]] and Flavell's [[metacognition]] and adds a fourth zone, "known to GenAI", the general knowledge a model holds about a task regardless of who is asking. Intersecting that zone with the learner's three development zones yields SCAN's core components: Substitute, Complement, Aid and Non-negotiable. The authors then work the framework through two settings, knowledge workers under a supervisor model and students running a [[self-regulated-learning|self-regulated]] metacognitive loop, and link it to [[cognitive-offloading]], [[ai-sycophancy|sycophancy]], the automation–augmentation–collaboration triad, and upskilling versus deskilling. Its most usable contribution is a decision table: proneness to offloading and sycophancy is high in Substitute, medium in Aid and low in Complement, because task-specific [[prior-knowledge|knowledge]] is what lets a learner monitor and challenge the model. It matters because it converts a vague worry about over-reliance into an assignable, per-task judgment, and it gives upskilling a direction of travel (S→A→C) that learners and instructors can observe.

## Key Findings

1. **SCAN adds a fourth zone to the ZPD.** Alongside "known to learner", "unknown to learner" and the ZPD itself, the framework adds "known to GenAI" — general, trained knowledge that lets a model complete a task with a generic rather than a specific approach. Visualised as a Venn diagram, the added circle carves Vygotsky's three zones into four sub-zones, labelled S, C, A and N, and is the paper's foundational move.
2. **The four sub-zones are defined by intersections, not by task content.** Substitute sits where the learner has no task-specific knowledge and GenAI does (potential development ∩ known to GenAI); Complement sits where the learner and GenAI both have relevant knowledge (actual development ∩ known to GenAI); Aid sits inside the ZPD where the learner has some knowledge but cannot finish alone; Non-negotiable is the ZPD when the scaffold is a more knowledgeable human, not AI.
3. **Two scenario applications.** For knowledge workers SCAN becomes an explicit pre-delegation protocol, the supervisor–subordinate relationship of Jablin, where the human curates goals, constraints and evaluation criteria while AI supplies breadth. For students it becomes a three-step requirement: classify every subtask S/C/A/N, justify it with a short metacognitive note, and keep an audit trail of prompts, drafts and human revisions.
4. **Metacognition is the engine, and it is a cycle.** The authors borrow a three-part structure — real-time evaluation during the task, reflection after it, and learning consolidated into the next task — so that assignment at time t informs assignment at t+1. The cycle is what makes SCAN dynamic rather than a static rule set, and it is the mechanism by which the framework "evolves with a learner".
5. **Offloading and sycophancy rise and fall with the sub-zone.** The paper's Table 1 reports Complement low on both, Aid medium on both, Substitute high on both. The explanation is task-specific knowledge: a learner who already knows the material can verify an evidence-based response and counter-argue, whereas a learner in Substitute cannot tell a sycophantic agreement from a correct answer.
6. **Automation, augmentation and collaboration are a continuum.** Substitute tempts automation, Aid instantiates augmentation, Complement promotes collaboration, and the authors insist the modes differ by locus of control and epistemic responsibility rather than by tool sophistication. They propose a reversible delegation principle — capability threshold tests, provenance guarantees, and a human veto with cost-aware rollback — plus organisational [[guardrails]] such as sycophancy hardening, offloading budgets on Substitute time, and periodic learning-preserving checkpoints inside automated pipelines.
7. **Upskilling is modelled as task migration.** With tasks counted as S, C, A and N, the authors define KL values (S over the total, A over the total, C over the total) and set upskilling as (A at t+1 − S at t+1) > 0 followed by (C at t+1 − A at t+1) > 0, i.e. a deliberate drift from Substitute to Aid to Complement through [[retrieval-spacing-interleaving|spaced practice]], error tagging and explain-back prompts. Deskilling runs the other way, Complement to Aid, as the learner's role shifts from production to evaluation, and the authors expect such tasks to oscillate between Aid and Complement.
8. **The framework is offered as a starting point, with a normative floor.** [[human-in-the-loop-ai|Human-in-the-loop]] control, [[agency]] and responsibility stay with the learner, the Non-negotiable zone is described as a boundary that resists erosion by capability creep, and the stated long-term objectives are [[lifelong-learning]] and hybrid intelligence rather than task speed.

## The SCAN framework: a fourth zone, four sub-zones

The framework's premise is that before any delegation a learner should "scan" the problem space, naming what she knows, what GenAI knows, and where accountability lands. Vygotsky's original zones classify the learner alone: tasks she can do unaided (actual development), tasks out of reach even with help (potential development), and the ZPD where a [[scaffolding|scaffold]] from a more knowledgeable other makes completion possible. SCAN keeps all three and overlays "known to GenAI", which separates a digital scaffold from a human one and makes the source of assistance visible in the diagram.

The four sub-zones follow from the overlaps. Substitute (S) is the intersection of the potential-development zone and known-to-GenAI: the learner has no task-specific knowledge and cannot complete the task even with help, but GenAI's general knowledge can produce a generic version of it — a large data-processing or computation job, for example. Complement (C) is the intersection of actual development and known-to-GenAI: the learner could do the task herself and therefore has the standing to delegate it and monitor the output, which is why the authors locate [[human-ai-collaboration]] there. Aid (A) sits inside the ZPD, where the learner holds partial knowledge and [[generative-ai|GenAI]] supplies the missing general knowledge as a scaffold — the augmentation case, and the "sweet spot" the paper later targets with difficulty titration. Non-negotiable (N) is ZPD in its original sense: the learner needs help but from a person, as in mentorship or career advice, because the task is normative, identity-relevant, tacit or too risky to hand over.

The paper also specifies, outside the diagram, the exclusivity conditions used to justify an assignment. A task is human-only when it is principally normative or identity-relevant (goal setting, value trade-offs, consent, accountability), rests on tacit knowledge that cannot be externalised at acceptable fidelity, or would carry unacceptable epistemic or [[ethics|ethical]] risk if automated. It is AI-only when the objective is well specified, evaluation is verifiable before the fact, failure modes are bounded and reversible, and the model demonstrably beats humans on held-out distributions with transparent provenance. Everything else is joint, meaning it contains at least one subcomponent where human framing or exception handling must be preserved and at least one where AI adds material leverage.

## Two application scenarios: knowledge workers and students

The workplace reading follows the supervisor–subordinate pattern: a supervisor judges a worker's current competence, anticipates growth, and assigns work that is not yet independently completable but is completable with guidance. SCAN supplies the decision rule for that calibration, helping the supervisor decide what stays human, what AI supports and what AI runs outright, with metacognitive checks — calibration prompts, counter-example searches, provenance inspection — pre-committed to keep [[cognitive-offloading|offloading]] and sycophancy from becoming the default. Complement and Aid carry collaboration and augmentation here; Substitute is named as the zone that "tempts automation under uncertainty".

The student reading is [[self-regulated-learning|self-regulated learning]] made operational. At time t the learner assesses whether she holds task-specific knowledge, prompts herself with reflective questions, locates the task in one of the four sub-zones, and proceeds; at t+1 the reflection feeds back into the next decision. Instructors operationalise it by requiring the S/C/A/N classification, the justification note, and the audit trail, which turns the [[metacognition|metacognitive]] loop into evidence a [[teacher-role|teacher]] can see. Aid-level tasks target conceptual bottlenecks with hints, exemplars or [[socratic-method|Socratic questioning]] while keeping [[desirable-difficulties|productive struggle]] intact; Complement-level tasks develop higher-order skill by having students compare multiple AI rationales against rubrics and disciplinary standards rather than imitating surface patterns. [[assessment|Assessment]] is designed around what the student can do unaided — oral defences, process [[eportfolio|portfolios]], randomised [[transfer-of-learning|transfer]] tasks — and the "Shared Self" lens frames the system as a transparent extension of the learner's cognition rather than a surrogate author.

## Cognitive offloading, sycophancy, and three modes as a continuum

Cognitive offloading is the reduction of mental effort through an external tool, and sycophancy is a model's agreement with a user's prior over the evidence. SCAN's claim is that both are functions of the sub-zone a task occupies, and therefore of the task-specific knowledge the learner brings: high in Substitute, medium in Aid, low in Complement. In Substitute the learner lacks the knowledge needed to detect an unsupported answer, so she can neither verify nor push back; in Complement the same knowledge, exercised through monitoring and counter-argument, does most of the mitigating work. The authors note that accumulating task-specific knowledge over time should also reduce sycophancy's grip, since the learner becomes progressively harder to mislead.

Read against the three decision-making modes, the sub-zones give the triad an anchor. Automation transfers initiative and intermediate decision rights; augmentation lifts human capability above what the human achieves alone; collaboration keeps deliberate human control of goals, constraints, criteria and endorsement while AI supplies breadth, structure and challenge. Because the same task can move between these modes as knowledge grows, the authors call them a continuum, and they add design guardrails to keep the slide into automation honest: risk-weighted routing that keeps normative, tacit or contested work in Non-negotiable regardless of model capability; sycophancy hardening, where systems must pass contradiction probes and stance-invariance tests before Substitute-level delegation is allowed; offloading budgets that cap Substitute time per project; and learning-preserving pipelines that re-insert short compare-and-contrast episodes into otherwise automated routines. The [[prompt-engineering|prompting]] discipline implied here is counter-argumentative rather than extractive.

## Upskilling and deskilling as migration between sub-zones

Upskilling, in SCAN's account, is the same task being identified differently over time. A recurrent task begins in Substitute, moves to Aid as the learner accumulates some task-specific knowledge, and reaches Complement when she can do it unaided and merely chooses to delegate. The paper formalises this with KL ratios — Substitute over the total number of task instances, and so on — and with transition conditions that require the Aid count to exceed the previous Substitute count, then the Complement count to exceed the previous Aid count. The [[pedagogy|pedagogical]] machinery behind the migration is ordinary but specific: spaced practice, error tagging, reflective comparison of human and AI rationales, explain-back reconstruction of the model's reasoning, and difficulty titration that keeps tasks inside Aid rather than overload (Substitute) or underload (trivial Complement). Optional BCI monitoring is floated as a sentinel that nudges rather than takes control.

Deskilling is the reverse drift, Complement to Aid, and the authors attribute it to a shift in the user's role from production to evaluation: if a learner consistently delegates a class of tasks she once performed, the practice that sustained the skill disappears, the skill erodes, and the task falls back into the zone where GenAI must carry it. Because the underlying knowledge does not vanish entirely, the paper expects such tasks to oscillate between Aid and Complement over the long run — an upskilling–deskilling paradox consistent with other work the authors cite. The proposed defence is metacognitive instrumentation: logging each task instance with a pre-use forecast, the chosen sub-zone and justification, [[student-ai-interaction|AI interaction]] traces, post-task calibration and transfer probes, so that a learner or organisation can see which knowledge is genuinely internalised and which is only being performed by the model.

## Caveats and limitations

This is a conceptual framework paper, and the authors say so: SCAN is a proposal, not a tested intervention, and no empirical study of its use is reported. The [[quantitative-research|quantitative]] parts are illustrative rather than validated — the KL ratios and transition inequalities are a way of expressing migration across sub-zones, not measurements taken from data — and the paper's supporting evidence for offloading, sycophancy and synergy is drawn from other people's findings, including the observation that human–AI synergy has rarely been demonstrated. Several proposals are explicitly speculative or offered for future work: BCI sentinels, mathematical formalisation via the "grey area" literature, and comparison of human-centric against AI-centric assignment. The framework also assumes a learner who can reliably self-assess task-specific knowledge, which is exactly the calibration the metacognitive loop is supposed to build, so its starting point and its goal partly presuppose each other.

## Connected Concepts

- [[cognitive-offloading]] — the reduction of mental effort that SCAN predicts is highest in Substitute and lowest in Complement
- [[human-ai-collaboration]] — the Complement sub-zone and the paper's reading of collaboration by locus of control
- [[metacognition]] — the three-part cycle (real-time evaluation, reflection, learning) that drives SCAN forward
- [[sociocultural-learning]] — Vygotsky's Zone of Proximal Development, the framework's first theoretical pillar
- [[self-regulated-learning]] — the student-facing scenario, where S/C/A/N classification becomes a study protocol
- [[scaffolding]] — GenAI as a digital scaffold inside Aid, contrasted with a more knowledgeable human inside Non-negotiable
- [[generative-ai]] — the general-knowledge model whose capabilities the "known to GenAI" zone represents
- [[ai-sycophancy]] — the failure mode that tracks sub-zone proneness and motivates hardening probes and offloading budgets
- [[transfer-of-learning]] — unaided transfer tasks as the assessment that distinguishes internalised skill from performed output
- [[agency]] — human control, responsibility and the reversibility of delegation into automation
- [[lifelong-learning]] — the stated long-term objective of sustaining capability across a working life with AI
- [[professional-training]] — the knowledge-worker scenario and organisational guardrails on Substitute time
- [[prior-knowledge]] — task-specific knowledge as the variable that decides which sub-zone a task occupies
- [[prompt-engineering]] — the counter-argumentative prompting practice implied by monitoring and challenging AI output

## Connected Articles

- [[seung-basham-cognitive-offloading-swld-2026]] — Measuring cognitive offloading in students with specific learning disabilities
- [[misiejuk-cognitive-offloading-prompting-2026]] — How prompting behaviour relates to offloading and learning outcomes
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Cognitive outsourcing to GenAI and what it means for assessment design
- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]] — Scaffold or shortcut: GenAI use read through self-regulated learning
- [[song-genai-learning-partner-srl-over-time-2026]] — GenAI as a learning partner and the trajectory of self-regulation
- [[absent-cognitive-baseline-2026]] — The cognitive cost of designing AI-supported tasks without a no-AI baseline
- [[critical-thinking-paradox-genai-learning-2026]] — Performance gains alongside critical-thinking losses in GenAI-assisted learning
- [[ai-teammate-task-distribution-medical-training-2026]] — Dividing tasks between human and AI teammates in professional training
- [[andragogy-cognitive-delegation-genai-2026]] — Cognitive delegation to GenAI read through adult-learning principles
- [[airis-hybrid-human-ai-cognition-2026]] — Hybrid human–AI cognition as a design target for learning systems

## Citation

Tsim, F., & Gutoreva, A. (2025). [*SCAN: A Decision-Making Framework for Task Assignment with Generative AI*](https://osf.io/preprints/psyarxiv/g5fd8_v1). *PsyArXiv Preprints*.