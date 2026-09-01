---
title: "Modeling AI-TPACK in Practice: Insights from Teachers'' Multi-Agent Workflow Design"
created: "2026-05-17T04:33:04-04:00"
updated: "2026-08-28T15:00:00-04:00"
type: article
tags: [ai-literacy, educational-development, generative-ai, agentic-ai, scaffolding, teacher-role, teacher-ai-competency, rag]
research_method: [mixed methods]
audience: [faculty development, instructors]
sources: ['raw/papers/2605.13906.md']
confidence: medium
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

## Implications for Teacher Professional Development

The findings call for **differentiated scaffolding** matched to archetype and cognitive-behavioral diversity:

- **Systematic Optimizers** benefit from advanced system-design frameworks, thorough documentation, and open architectural affordances (e.g., API access).
- **Prolific Creators** thrive with pedagogical frameworks, exemplar repositories, and modular, reusable components that bridge capability gaps and enable rapid feedback.
- **Passive Observers** need structured templates, explicit modeling, guided practice, and confidence-building exercises plus real-time assistance to overcome low self-efficacy.

Second, platforms should implement adaptive support systems that use [[learning-analytics|behavioral analytics]] to dynamically identify teacher profiles and deliver personalized resources. Third, trajectories from novice to expert require progressive scaffold fading: designers must build pathways helping teachers transition from template replication (C3) through pragmatic application (C2) toward systemic innovation (C1), so that support-dependence evolves into autonomous mastery.

This connects to the [[teacher-ai-adoption-confidence]] finding that teacher confidence fully mediates [[governance|institutional]] support effects on AI adoption, and extends the [[teachingcoach-chatbot-instructor-guidance]] paradigm by arguing that coaching scaffolds must be personalized to teacher archetypes, not just content domains. It also echoes [[teacher-role]] reframing: as [[teacher-ai-competency]] shifts from tool use to agent orchestration, professional learning must address cognitive-behavioral diversity rather than technology training alone.

## Connection to Agentic AI in Education

The multi-agent workflow framing positions this work at the intersection of [[agentic-ai]] and teacher professional learning. As [[eduagentbench-agent-teaching-benchmark]] establishes [[benchmark|benchmarks]] for what agent tutors should do, this study addresses the complementary question: **how should teachers learn to design and orchestrate those agents?** The findings also resonate with [[agentic-workflows-education]] and [[multi-agent-instructional-design]], which explore how educators author and govern multi-agent systems in classroom contexts.

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
- [[eduagentbench-agent-teaching-benchmark]]
## Citation

Sun, Y., Xin, H., Li, S., Niu, Q., Chai, C. S., Huang, L., & Chen, G. (2026). [*Modeling AI-TPACK in practice: Insights from teachers' multi-agent workflow design*](https://arxiv.org/abs/2605.13906).
