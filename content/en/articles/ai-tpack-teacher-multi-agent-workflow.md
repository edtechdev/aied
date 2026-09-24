---
title: "Modeling AI-TPACK in Practice: Insights from Teachers'' Multi-Agent Workflow Design"
created: "2026-05-17T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
foundations: [agentic-ai, ai-literacy, educational-development, teacher-role, teacher-ai-competency]
pedagogy: [scaffolding]
technology: [generative-ai, rag]
methods: [mixed-methods-research]
audience: [faculty developers, instructors]
sources: ['raw/papers/2605.13906.md']
confidence: medium
level: [teacher education, k 12]
page_kind: [framework]
---

> **Synthesis.** Analyzing behavioral logs from 61 in-service teachers designing multi-agent instructional workflows on the no-code CocoFlow platform, this study clusters teachers into three archetypes — Systematic Optimizers, Prolific Creators, and Passive Observers — and shows through artifact and interview analysis that [[tpack|AI-TPACK]] integration is not the possession of discrete knowledge domains but a dynamic interplay of systems thinking, [[pedagogy|pedagogical]] beliefs, and self-efficacy. The findings argue that supporting teachers' transition from AI consumers to AI designers demands differentiated, adaptive [[scaffolding]] responsive to cognitive-behavioral diversity.

## Key Findings

1. K-means clustering (κ=3) of 8,718 platform actions from 61 [[k-12]] teachers identified three behavioral archetypes: Systematic Optimizers (configuration-intensive iterative refinement), Prolific Creators (template-based rapid prototyping), and Passive Observers (browsing-anchored, hesitant creation).
2. Effective [[tpack|AI-TPACK]] integration emerges from a dynamic interplay of systems thinking, pedagogical beliefs, and self-efficacy — not merely from possessing separate technological, pedagogical, and content knowledge domains.
3. AI-TPACK sophistication aligned with behavior: systemic pedagogical visions required iterative refinement (Optimizers), instrumental approaches enabled rapid prototyping (Creators), and polarized expert-novice profiles produced unstable integration (Observers).
4. Findings call for differentiated scaffolding plus adaptive platform support that identifies teacher profiles via behavioral analytics and fades as teachers move from template replication toward systemic innovation.

## Introduction: Teachers as AI Designers

No-code platforms that let teachers assemble multi-agent systems are shifting educators from [[ai-education|AI consumers]] to AI designers. Yet this shift demands [[computational-thinking|"architectural thinking"]] — coordinating specialized agents around pedagogical goals — a competency that traditional [[tpack]] inadequately captures, since [[generative-ai|generative AI]]'s conversational nature differs fundamentally from prior educational [[ai-technologies|technologies]]. The AI-TPACK framework extends TPACK with AI-specific domains such as understanding AI affordances and [[prompt-engineering]]. Prior [[research-methods-aied|research]] on teachers' AI-TPACK relied on self-report surveys, treated teachers as a homogeneous group, and lacked explanatory models linking observable design behavior to cognitive-[[affective-computing|affective]] factors. This study addresses those gaps with objective, process-oriented [[learning-analytics|design log data]] across three research questions: behavioral patterns (RQ1), AI-TPACK manifestations in artifacts (RQ2), and their cognitive underpinnings (RQ3).

## Methods: Behavioral Logs, Artifacts, and Interviews

Sixty-one K-12 in-service teachers from a coastal city in Southern China attended a two-day district-wide [[educational-development|professional development]] workshop, each producing one functional multi-agent workflow on CocoFlow, a no-code platform built on "low floor and wide walls" principles. Teachers connected specialized AI agents (content tutors, feedback providers) with functional tool nodes through sequential, conditional, or parallel logic, configuring agent behavior via natural-language prompts. A [[mixed-methods-research|mixed-methods]] explanatory sequential design was used. First, K-means clustering in R of action-type distributions (elbow method, silhouette 0.389) plus Markov transition matrices characterized each cluster's workflow dynamics. Second, guided by the AI-TPACK framework as an a priori coding scheme, two-stage thematic analysis (Braun & Clarke) examined design artifacts (n=15, inter-rater Cohen's κ=0.81) across AI-TK, AI-TPK, AI-TCK, and AI-TPACK, alongside semi-structured interviews (n=12) probing cognition, pedagogical beliefs, and self-efficacy.

## Three Behavioral Archetypes

Cluster 1 (n=18) was configuration-intensive: Content Configuration dominated (32.5%) with editing and testing rates 3–4× higher than other clusters, and Markov analysis revealed bi-directional Testing–Configuration loops — a tightly coupled refinement cycle. These Systematic Optimizers iteratively refined complex multi-agent architectures. Cluster 2 (n=35) balanced creation and browsing (Object Creation 25.2%, Browsing Own Content 27.1%), with Template Cloning transitioning to Object Creation at nearly twice the rate of other clusters (0.684) and sustained Creation self-loops (0.458) — the Prolific Creators, rapidly prototyping pragmatic tools via scaffolding. Cluster 3 (n=8) was browsing-dominant (29% Browsing Own Content) with the lowest editing rate (1.7%) and high Template Cloning self-loops (0.482), indicating hesitant creation followed by validation-seeking rather than sustained production — the Passive Observers.

## AI-TPACK Manifestations in Workflow Designs

Artifact analysis (n=15, five per cluster) organized findings by AI-specific dimensions. **AI-TK** ranged from functional use to architectural mastery: Creators built straightforward configurations like an "Equation Solver Assistant," while Optimizers' "Essay Grading System" coordinated four agents — a Content Analyzer, Language Reviewer, Feedback Synthesizer, and Revision Tutor — via conditional branching, consciously engaging with multi-agent integration and even requesting capabilities (e.g., image recognition) beyond platform constraints. Observers bifurcated: 2 of 5 encoded precise logic in detailed prompts, while 3 of 5 relied entirely on defaults. **AI-TPK** diverged sharply: Optimizers positioned AI as systemic learning companions providing continuous, sustained [[scaffolding]] aligned with [[constructivist]] principles, while Creators adopted instrumental pedagogy — AI amplified specific teaching strategies such as embedding concepts in narrative to boost [[student-engagement|engagement]] — and Observers' high-capability subset designed differentiated pathways. **AI-TCK** showed deep disciplinary encoding among Optimizers (uploaded rubrics and writing standards driving multi-dimensional feedback), targeted application among Creators (e.g., "Sentence Structure Analyzer"), and polarized precision-versus-absence among Observers. **AI-TPACK** integration distinguished clusters most clearly: Optimizers achieved cohesive systemic designs where technical architecture served pedagogical intent grounded in disciplinary expertise; Creators displayed pragmatic enhancement, with depth contingent on external scaffolding (supported teachers produced sophisticated workflows, independent designers created feature-stacking designs); Observers exhibited unstable integration — expert-level coherence coexisting with surface-level configurations.

## Cognitive, Affective, and Competency Underpinnings

Interviews revealed systematic differences beneath the behavioral patterns. Systematic Optimizers demonstrated sophisticated AI-TK centered on multi-agent integration — one teacher described "coordinating logic between agents" as the hardest part — combined with constructivist AI-TPK, high technical [[self-efficacy]], and externalization of barriers to platform limits. Prolific Creators showed functional but not architectural AI-TK, low self-efficacy ("we're quite weak in technology"), instrumentally pragmatic AI-TPK, and extreme support-dependence, explaining their template-seeded rapid prototyping. Passive Observers displayed polarized cognition mirroring their design dichotomy: high-capability teachers critiqued platform constraints such as "lacking open API access," while low-capability teachers felt "completely clueless," with both sharing positive attitudes yet extreme support-dependence. This polarization implies that behavioral patterns alone insufficiently predict AI-TPACK capacity — cognitive-affective factors must be considered.

## Connection to Agentic AI in Education

The multi-agent workflow framing positions this work at the intersection of [[agentic-ai]] and teacher professional learning. As [[chen-teacharena-language-agents-realistic-teaching-2026]] establishes [[benchmark|benchmarks]] for what agent tutors should do, this study addresses the complementary question: **how should teachers learn to design and orchestrate those agents?** The findings also resonate with [[agentic-workflows-education]] and [[wang-multi-agent-systems-learning-designers-2025]], which explore how educators author and govern multi-agent systems in classroom contexts.

## What this means for practice

- **Faculty developers.** Diagnose teacher archetypes before designing the workshop: the 61 teachers' platform logs split into Systematic Optimizers (n = 18), Prolific Creators (n = 35), and Passive Observers (n = 8), and each group needs a different scaffold.
- **Faculty developers.** Give Optimizers advanced system-design frameworks, documentation, and open architectural affordances such as API access; give Creators pedagogical frameworks, exemplar repositories, and modular reusable components; and give Observers structured templates, explicit modeling, guided practice, and confidence-building exercises with real-time assistance.
- **Faculty developers.** Identify profiles from behavioral analytics rather than a self-report survey, then fade support deliberately so teachers move from template replication through pragmatic application toward systemic innovation.
- **Faculty developers.** Budget for sustained on-site facilitation when running a multi-agent authoring workshop: the Creators' rapid prototyping depended on continuous guidance, and the Observers' browsing-anchored hesitation reflected support-dependence rather than disinterest.
- **Faculty developers.** Do not read activity logs as a capacity measure: within the Passive Observer cluster, high-capability teachers who critiqued the platform's missing API access and teachers who felt "completely clueless" produced the same browsing-dominant pattern.

## Limitations

- The sample is 61 K-12 teachers who volunteered for a single two-day district-wide workshop in one coastal Chinese city, each producing exactly one multi-agent workflow on one platform (CocoFlow), so nothing in the design shows whether archetypes persist or whether the designs reach classrooms.
- The artifact analysis covered only 15 workflows, five per cluster, and semi-structured interviews covered 12 teachers — a small, non-random subset of the clusters (inter-rater Cohen's κ = 0.81 for the artifact coding).
- Clustering used K-means on action-type distributions with a silhouette of 0.389, a modest separation that does not establish the three archetypes as natural kinds.
- No student outcome or classroom implementation data were collected; the study measures design behavior and self-reported cognition, not teaching effectiveness.

## Connected Concepts

- [[teacher-ai-competency]]
- [[educational-development]]
- [[agentic-ai]]
- [[tpack]]
- [[self-efficacy]]
- [[scaffolding]]
## Connected Articles

- [[teacher-ai-adoption-confidence]]
- [[teachingcoach-chatbot-instructor-guidance]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
## Citation

Sun, Y., Xin, H., Li, S., Niu, Q., Chai, C. S., Huang, L., & Chen, G. (2026). [*Modeling AI-TPACK in practice: Insights from teachers' multi-agent workflow design*](https://arxiv.org/abs/2605.13906).
