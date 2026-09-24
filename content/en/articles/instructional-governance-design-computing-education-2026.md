---
title: "Instructional Governance by Design: A Framework for AI in Computing Education"
created: "2026-09-24T09:35:17-04:00"
updated: "2026-09-24T09:35:17-04:00"
type: article
published: "2026-08-05"
sources: ['raw/papers/instructional-governance-design-computing-education-2026.md']
confidence: high
page_kind: [framework]
research_method: [position paper]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers, software developers, curriculum designers]
foundations: [theories-and-frameworks, curriculum-design, human-ai-collaboration]
pedagogy: [self-regulated-learning, metacognition, scaffolding, student-ai-interaction]
technology: [human-in-the-loop-ai, simulating-students, pedagogical-agent]
assessment: [formative-assessment, feedback]
methods: [design-based-research, research-methods-aied]
institutions: [governance]
ethics: [guardrails]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Dickey argues that as [[generative-ai|generative AI]] moves computing instruction from scarce help to abundant, immediate, and plausible help, the design question is no longer whether AI is permitted in a course but how each tool's instructional role is configured. The paper defines instructional [[governance]] as the designed allocation of [[pedagogy|pedagogical]] authority, learner agency, human accountability, contextual boundaries, and evaluation visibility within an AI-mediated teaching interaction, and proposes a six-dimension governance profile that makes those allocations visible. Across seven tools built for computing and first-year engineering plus four published programming systems, it shows that tools sharing a model can distribute authority and accountability very differently, and that responsible scale depends on governance fit. The contribution is a shared vocabulary and [[theories-and-frameworks|framework]], not a permission policy.

## Key Findings
1. **Six dimensions define a governance profile.** Pedagogical grounding, AI instructional authority, human accountability and control, learner agency and cognitive engagement, context and boundary setting, and evaluation visibility are separable dimensions, not a strict-to-permissive continuum.
2. **Governance fit, not strictness, decides.** A forum assistant drafting the official course voice needs staff approval and edit traces; a reflection assistant is best governed by pedagogical grounding and learner agency.
3. **Instructional artifacts carry governance.** Rubrics, objectives, scenario banks, and style guides predate the AI and encode local values: GLOW anchors on an office-hour conversation rubric, CodeStylist on a course style guide.
4. **Workflow placement is a governance mechanism.** BoilerTAI treats staff approval as the core workflow between drafting and publication; BoilerSketch places TA supervision around diagrams because visuals can look authoritative while encoding a [[misconceptions|misconception]].
5. **Learner role design preserves agency.** Owlgorithm makes AI a reflection generator through [[self-regulated-learning|self-regulated learning]] prompts; CodeStylist keeps revision under student control; AI-Lab makes GenAI an object of critique.
6. **External tools confirm distinct mechanisms.** CodeHelp and CodeAid govern through guarded assistance boundaries, CodeTailor through task transformation into Parsons puzzles, BISCUIT through interface mediation staging intent before executable output.
7. **Evidence follows the profile.** One [[eportfolio|portfolio]] cannot be judged by one common outcome, so relevant evidence ranges from rubric-domain growth for GLOW to edit effort and response timeliness for BoilerTAI.

## Six Dimensions of a Governance Profile
The framework answers a design question that [[educational-policy-ai|institutional policy]] cannot reach on its own: what the AI system is allowed to do, what pedagogical commitments constrain its behavior, what work remains with students or staff, and how the interaction can be inspected and improved. Institutional rules can specify permissible use or [[academic-integrity]] requirements, but students and instructional staff actually meet AI through prompts, rubrics, approval gates, interface affordances, [[visualization|dashboards]], style guides, and [[feedback]] cycles — artifacts that determine whether the model acts as coach, simulator, drafter, evaluator, or content-generation partner. The dimensions are grounded in constructive alignment, self-regulated learning, [[metacognition]], [[tpack|technological pedagogical content knowledge]], and [[human-ai-collaboration|human-AI interaction]] constructs, and the paper positions the set as a design representation that makes role assignments visible before deployment and revisable after use.

## Governance Profiles in a Portfolio
Seven tools built for computing and first-year engineering illustrate that governance varies with instructional function, not with the underlying model. GLOW authorizes AI [[simulation]] of student personas under an office-hour conversation rubric for GTA rehearsal; Owlgorithm governs post-submission reflection in competitive programming; BoilerTAI drafts forum responses that staff edit and approve; BoilerSketch generates diagrams reviewed by TAs; CodeStylist coaches course-specific code style; AI-Lab onboards students to responsible GenAI use; and GAIDE embeds AI content development in a reproducible instructor [[scaffolding|workflow]]. The cases are offered as design vignettes rather than a pooled intervention, and the paper stresses that "[[human-in-the-loop-ai|human in the loop]]" only becomes useful when it is specified as a concrete relation: configuring the tool, vetting outputs, editing drafts, approving publication, interpreting [[learning-analytics|analytics]], or coaching users afterwards.

## Transfer and Mechanism Composition
To test transfer beyond one institutional portfolio, the framework is applied to four published programming systems. CodeHelp and CodeAid show that [[guardrails]] are [[agency|learner-agency]] mechanisms, not merely safety features, because the help boundary defines the remaining student work; CodeAid adds that at course scale governance must cover the request space, the response space, and educator visibility, not only generated content. CodeTailor transforms assistance into a personalized Parsons puzzle, shifting the question from how much information the AI gives to what kind of learning activity it creates. BISCUIT stages generation behind an ephemeral notebook interface, demonstrating that an interface can itself be a governance mechanism. The paper treats these mechanisms as composable — rubrics, prompts, approval gates, scaffolds, style guides, and review processes can be combined — and argues the field should study governance mechanisms rather than asking whether students "use AI."

## What this means for practice
- **Instructors.** Write a governance profile for each AI tool before deployment: name the instructional function, the AI's permitted role, who approves consequential outputs, what intellectual work stays with the learner, and which traces you will inspect after use.
- **Tool builders.** Treat the interaction model as governance: choose approval gates, scaffolds, or interface mediation deliberately instead of adding a human reviewer as an afterthought.
- **[[curriculum-design|Curriculum]] designers.** Reuse artifacts that already encode local values — rubrics, style guides, scenario banks, course terminology — as the constraints that anchor AI behavior.
- **Researchers.** Evaluate tools against the evidence their profile implies rather than a single shared outcome measure, and report which governance mechanism a system implements.

## Limitations
- The portfolio cases are design vignettes from one institutional portfolio, explicitly not a single pooled intervention, and the paper reports no outcome or comparison data for them.
- The four external systems are a transfer test rather than an exhaustive taxonomy of AI tools in [[cs-education|computing education]], so the classification is illustrative.
- Governance fit is argued conceptually; the paper does not validate the six dimensions empirically or show effects on learning outcomes.

## Connected Concepts
- [[governance]]
- [[human-in-the-loop-ai]]
- [[simulating-students]]
- [[pedagogical-agent]]
- [[scaffolding]]
- [[formative-assessment]]
- [[feedback]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[student-ai-interaction]]
- [[guardrails]]
- [[learning-analytics]]
- [[cs-education]]
- [[teacher-role]]
- [[curriculum-design]]

## Connected Articles
- [[llm-programming-support-governance-cs-education]] — Exploring the Design Space of LLM-Based Programming Support in CS Education: A Scoping Review through the Lens of Assistance Governance
- [[beyond-agent-label-agentic-ai-governance-2026]] — Beyond the Agent Label: Evidence Maturity, Human Monitoring, and Governance of Agentic AI in Higher Education
- [[qian-governing-genai-higher-ed-policy-2026]] — Governing generative AI in higher education: Emerging policy approaches and support ecosystems at innovative U.S. universities
- [[llm-student-simulation-teacher-insights]] — Can LLMs Effectively Simulate Human Learners? Teachers' Insights from Tutoring LLM Students
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[llm-pedagogical-behavior-ai-tutoring-2026]] — LLM Pedagogical Behavior in AI Tutoring Interactions
- [[zhang-platform-scores-miss-ai-teaching-agents-2026]] — What Platform Scores Miss: Multidimensional Evaluation of AI Teaching Agents in Medical Education
- [[perrotta-zero-shot-governance-2026]] — Zero-Shot Governance: General-Purpose AI in Policy

## Citation
Ethan Dickey (2026). [*Instructional Governance by Design: A Framework for AI in Computing Education*](https://arxiv.org/abs/2609.26098). arXiv preprint.