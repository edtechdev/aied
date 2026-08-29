---
title: "Balancing Teacher and Student Agency: Co-Orchestration Tool Design Supporting Real-Time Dynamic Pairing"
created: "2026-05-21T04:33:04-04:00"
updated: "2026-08-24T12:00:00-04:00"
type: article
tags: [intelligent-tutoring, teacher-role, student-experience, k-12, human-in-the-loop-ai, collaborative-learning, self-regulated-learning, scaffolding]
audience: [teacher role, student experience]
level: [k 12]
sources: ['raw/papers/2605.18761.md']
confidence: high
---

> **Synthesis.** Yang et al. (2026) use participatory speed dating with 17 teachers and 13 students to map how control and [[agency]] should be distributed across the three stages of *dynamic pairing* — before, during, and after pairing students between individual and [[collaborative-learning]] modes. They frame findings within a hybrid-control design space and recommend **structured teacher guidance early, with progressively increasing student autonomy as activities unfold**. Neither teachers nor students wanted full control: both groups favored *shared* decision-making, converging on a "ready to collaborate" mechanism for timing and on teacher-led pairing with limited student role/partner input. The result is an actionable principle for human–AI co-orchestration tools in K-12 classrooms.

## Key Findings

1. Both stakeholders rejected extreme control allocations: full teacher control risks eroding [[student-engagement]] and [[self-regulated-learning]], while full student control risks chaotic [[student-engagement|classroom dynamics]], unproductive pairings, and added teacher workload — validating a [[human-ai-collaboration]] middle ground.
2. For collaboration *timing*, both teachers and students ranked "When students are ready" (a "Ready to collaborate" button) highest, converging on a shared-control mechanism that preserves teacher oversight while respecting student readiness and [[self-directed-learning]].
3. For partner/role assignment, students preferred *structured teacher guidance* ("Teacher decides" ranked highest), while teachers favored a balanced "Teacher assigns, student chooses role" — both groups converged on shared decision-making that pairs teacher authority with limited student input.
4. For collaboration *content*, teachers favored "Teacher proposes, students decide" while students favored "Students propose, teacher decides"; both groups ranked full "Student choice" least preferred, citing immaturity and the risk of avoiding productive challenge.
5. For *productive collaboration*, teachers favored automated supervision ("System detects keywords") while students favored "Get help from NPC" automated assistance — both embraced [[human-in-the-loop-ai]] support to monitor collaboration quality and reduce instructor burden.
6. Teacher preferences were consistently more unanimous than student preferences (higher Kendall's W across challenges), reflecting a more stable conception of [[teacher-role]] and classroom management goals.

## The Tension in Real-Time Dynamic Pairing

The study addresses a core tension in AI-augmented classrooms: how to balance teacher orchestration with student [[agency]] during dynamic transitions between individual and [[collaborative-learning]] work. In the study context, individual learning means solving mathematics problems inside an [[intelligent-tutoring]] system, while collaborative learning takes the form of [[learning-by-teaching|peer tutoring]] within the system, where one student assumes the Solver role and the other acts as Tutor by providing hints and corrective [[feedback]]. Real-time [[learning-analytics]] — tracking mastery via [[knowledge-tracing|Bayesian Knowledge Tracing]] and metacognitive states — feed a teacher-facing orchestration tool that suggests when to pair, unpair, and reassign partners.

Prior research establishes the pedagogical value of combining individual and collaborative modes, with students making fewer errors and requesting fewer hints when instruction integrates both. Yet existing orchestration frameworks focus on teacher–AI or system-level distributions of control, leaving a gap in understanding how [[stakeholders]] *perceive* hybrid control across the different stages of a co-orchestration tool. The authors frame this through the theoretical hybrid-control lens of Eshel and Kohavi, which treats teacher and student control not as a zero-sum tradeoff but as two independent dimensions — student control and opportunities for [[self-directed-learning]] — that both groups can exercise simultaneously. This connects [[scaffolding]] theory to social-organizational support, extending it from individual learning support to classroom-level coordination.

## Study Approach: Participatory Speed Dating

The researchers used participatory speed dating (PSD), a design method that combines storyboarding with rapid, structured evaluation to gather feedback from multiple [[stakeholders]] early in the ideation phase. Across two phases — idea co-generation with 5 participants and idea evaluation with 25 — 74 design ideas were generated and narrowed to 34 representative solutions spanning varied levels of hybrid control. A [[mixed-methods-research|mixed-method analysis]] triangulated quantitative ranking data (means, standard deviations, and Kendall's W agreement coefficients) with qualitative reasoning from affinity diagramming of participants' verbalized justifications.

The design process was organized around the three stages of the pairing process and seven "How Might We" challenges: **before pairing** (preparing for collaboration, choosing the right start time), **during pairing** (assigning roles and partners, selecting content, ensuring productivity), and **after pairing** (smooth transitions, evaluating collaboration to inform future pairings). This three-stage design space offers a structured lens for evaluating other orchestration tools, complementing [[ai-tutor-behavioral-evaluation]]'s focus on individual tutor performance with classroom-level coordination metrics.

## Preferences by Stage

**Before pairing.** Students valued quizzes, personality tests, and direct ways to share preferences with teachers to help the system understand their strengths and improve pairing — prioritizing a "good partner" over knowing the rules. Teachers, by contrast, preferred data-driven methods such as pairing rules and academic quizzes, distrusting personality tests as scientifically weak ("more noise than useful information"). Teachers leaned on experience and [[teacher-role|classroom management skills]] for factors like personality compatibility and social-emotional needs rather than standardized assessments.

**During pairing.** For timing, both groups favored "When students are ready," with students appreciating autonomy at their own pace and teachers valuing a signal they could act on. For partners and roles, students supported teacher-led control (citing teachers' better knowledge of skills and history), while teachers favored giving students some role choice to boost [[motivation]] and engagement. For content, both groups converged on hybrid options — "Teacher proposes, students decide" (teachers) and "Students propose, teacher decides" (students) — and both ranked full student choice lowest out of concern that students might avoid [[desirable-difficulties|challenge]] or lack maturity. For productivity, automated supports were favored by both, differing on whether assistance should supervise (teachers) or assist (students).

**After pairing.** The two challenges in this stage address ensuring smooth transitions back to [[self-regulated-learning|individual learning]] and evaluating collaboration outcomes to improve future pairings — underscoring that orchestration is an ongoing, iterative loop rather than a one-time event.

## Implications

For the design of analytic-based classroom orchestration tools, the findings argue for a **phased, graduated-autonomy model**: begin with structured teacher guidance to establish classroom order and pairing quality, then progressively cede control to students as activities unfold and as learners demonstrate readiness and self-regulation. The convergence of both stakeholders on shared-control options — rather than either pole — is the central design signal: hybrid control tools should treat teacher authority and student autonomy as complementary dimensions, per the Eshel–Kohavi framing, rather than as a zero-sum tradeoff.

For [[k-12]] practitioners and system designers, the study validates concerns that AI systems optimizing for efficiency can erode student [[agency]] and [[self-regulated-learning]] and can undermine teacher professional judgment. Practical guidance includes implementing a "ready to collaborate" signal to sequence transitions, offering limited student choice over roles and content within teacher-set parameters, and embedding automated supervision and assistance to sustain productive collaboration without overloading instructors. For researchers, the three-stage, multi-stakeholder design-space method offers a template for eliciting hybrid-control preferences in other orchestration contexts, and it bridges the [[collaborative-learning]] and [[human-in-the-loop-ai]] communities that have often addressed agency questions separately.

## Connected Concepts

- [[intelligent-tutoring]]
- [[scaffolding]]
- [[teacher-role]]
- [[collaborative-learning]]
- [[human-in-the-loop-ai]]
- [[k-12]]
- [[self-regulated-learning]]
- [[agency]]
- [[human-ai-collaboration]]
## Connected Articles

- [[ai-tutor-behavioral-evaluation]]
## Citation

Kexin Bella Yang, Menghan Liu, Liyi Xu, Nikol Rummel, Vincent Aleven (2026). [Balancing Teacher and Student Agency: Co-Orchestration Tool Design Supporting Real-Time Dynamic Pairing](https://arxiv.org/abs/2605.18761). Accepted at CSCW 2026, to appear in PACM HCI.
