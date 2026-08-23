---
title: Instructional Design with AI
created: "2026-08-09T07:47:05-04:00"
updated: "2026-08-23T11:00:00-04:00"
type: concept
tags: [instructional-design, curriculum-design, faculty-development, scaffolding, generative-ai, ai-literacy, higher-ed, teacher-role]
confidence: high
---

> **Instructional Design** — the systematic process of creating effective learning experiences through the analysis of learning needs and the design, development, implementation, and evaluation of instructional materials and activities. AI is transforming instructional design by automating content creation, enabling [[adaptive-learning|adaptive learning]] paths, supporting data-driven iteration, and augmenting — rather than replacing — the instructional designer's role.

Instructional design bridges AI capabilities and effective pedagogy. Where [[curriculum-design]] addresses *what* to teach at the program level, instructional design addresses *how* to teach it at the course and lesson level. The articles in this wiki explore both AI as a tool for instructional designers and instructional design principles for building effective [[intelligent-tutoring|AI tutoring]] systems.

### Key research themes

**AI-assisted content creation** is the most directly transformative application. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** presents a six-phase architecture integrating Generative AI with LaTeX and Python to automate STEM materials creation, validated across 8 modules and 28 project contexts with student quality ratings of 8.5-9.9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** uses a multi-agent framework structured around the ADDIE model, with role-based agents (Teaching Faculty, Instructional Designer, Course Coordinator) collaborating to generate complete course materials. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** provides a structured pipeline for adaptive pedagogical video generation grounded in course corpora, demonstrating that explicit pedagogical structure — not just AI fluency — is essential for educational content generation.

**Pedagogically grounded AI tutoring** applies instructional design principles to AI system design. **[[didactical-teacher-assistant-dimensional-modeling|Brisson et al.]]** built a didactically-driven [[llm|LLM]] teacher assistant where tutoring strategy is encoded in an explicit external layer — making content selection and didactic structuring traceable and reproducible, directly addressing opacity concerns in [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou et al.]]** demonstrated that a five-step prompting framework grounded in Generative Learning Theory significantly improved higher-order cognitive outcomes, showing that instructional guidance — not just AI access — determines learning effectiveness. Both connect to [[scaffolding]] and [[intelligent-tutoring]].

**Frameworks and evaluation** provide structured approaches. **[[bridging-instructional-design-framework-math]]** and **[[cotal-formative-assessment-scoring-2026|CoTAL]]** demonstrate human-in-the-loop design principles. **[[genai-mindtool-generative-learning]]** positions AI as a "mindtool" — a cognitive partner that extends rather than replaces learner thinking — directly applying instructional design theory to AI integration. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** applies Universal Design for Learning principles to create an accessible AI thought partner for educators, connecting instructional design to [[accessible-learning]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate–Inquire–Reflect) is a task-structuring framework for cognitively activated AI use that bounds the AI's contribution so that prediction, interpretation, and evaluation remain the learner's — an AI-specific adaptation of inquiry cycles grounded in [[self-regulated-learning]], Cognitive Load Theory, and [[human-ai-collaboration]].

**AI agents for instructional design** extend the field into [[agentic-ai|agentic AI]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** is the first standardized, theory-grounded benchmark for evaluating LLM-based instructional design agents — its 25,795-scenario Context Matrix (51 contextual variables × 33 ISD sub-steps from ADDIE) shows that agents grounded in classical ISD frameworks (ADDIE, Dick & Carey, Rapid Prototyping ISD) outperform theory-free agents, empirically validating that instructional design is a structured discipline rather than a generic prompting task. **[[multi-agent-instructional-design]]** and **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** explore multi-agent frameworks that orchestrate role-based agents around instructional-design models, while **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** examines how teachers and agents jointly apply technological-pedagogical-content knowledge. This work connects instructional design to [[benchmark|benchmarking]], [[ai-ed-evaluation]], and the design of [[curriculum-design|curriculum]] at scale.

### Connections to related concepts

Instructional design is the bridge discipline of AI in education — it connects [[curriculum-design]] (what to teach) with [[scaffolding]] (how to support learners), [[faculty-development]] (how to prepare educators), and [[generative-ai]] (the tools themselves). It is tightly coupled with [[teacher-role]] because AI tools reshape what instructional designers and teachers do, and with [[ai-literacy]] because effective AI integration requires educators to understand AI capabilities and limitations.

### How instructional design determines learning gains

Instructional design is the lever that decides whether AI produces [[learning-gains|learning gains]] or merely AI-inflated performance. The wiki's evidence is consistent on this: **the same AI tool yields large gains or net harm depending on how the learning experience is designed around it.** [[instructional-guidance-genai-learning|Hou et al.]] showed that a five-step prompting framework grounded in learning theory significantly improved higher-order cognitive outcomes, while access to AI alone did not; [[genai-mindtool-generative-learning|mindtool]] and [[airis-cognitively-activated-ai-physics-2026|AIRIS]] frameworks preserve the learner's cognitive work so that durable gains (rather than task-efficiency) result. Design choices that protect [[learning-gains]] — scaffolding that requires a student attempt, [[formative-assessment]] with unassisted outcome measures, and pedagogical structure that keeps the learner the agent — mirror the field's finding (see [[learning-gains]]) that AI is a strong gain when it coaches and a harm when it answers. Conversely, poorly designed AI-integrated lessons fall prey to the [[cognitive-offloading|performance-learning gap]], where apparent success masks no learning.

### Practical guidance for designers and developers

For instructional designers, course developers, and engineers building AI-assisted learning experiences, the wiki's findings translate into actionable practice:

**Ground AI generation in a structured instructional model.** AI content is only as good as the pedagogical structure behind it — explicit structure, not AI fluency, determines quality. Design around a recognized model (ADDIE, Dick & Carey, rapid prototyping) and encode pedagogical decisions explicitly rather than relying on the model to infer them.^[[courseblueprint-adaptive-video-generation]]^[[jeon-isd-agent-bench-2026]]^[[didactical-teacher-assistant-dimensional-modeling]]

**Use role-based multi-agent workflows for content production.** Instead of one generic prompt, orchestrate distinct agents/roles (teaching faculty, instructional designer, course coordinator) that collaborate through a defined pipeline — this mirrors how real course teams work and yields more complete materials than a single prompt.^[[instructional-agents-multi-agent-course-gen]]^[[multi-agent-instructional-design]]

**Provide instructional guidance, not just AI access.** Whether learners interact with AI directly or with AI-generated materials, guidance built on learning theory (e.g. a stepwise prompting [[scaffolding|scaffold]] grounded in generative-learning principles) drives higher-order outcomes; access alone does not. Design the learning activity around how the mind learns, and treat AI as a cognitive "mindtool" that extends thinking rather than replacing it.^[[instructional-guidance-genai-learning]]^[[genai-mindtool-generative-learning]]

**Make content traceable and reviewable.** Let a human designer review and correct AI output before it reaches learners, and structure AI generation so the pedagogical rationale (why this content, in this order) is inspectable — addressing both quality and the opacity concerns that undermine trust in AI-generated instruction.^[[bridging-instructional-design-framework-math]]^[[cotal-formative-assessment-scoring-2026]]

**Design for accessibility from the start.** Apply [[universal-design-for-learning|UDL]] principles when building AI tools and AI-generated materials so they serve diverse learners, rather than retrofitting accessibility after the fact.^[[ludia-udl-ai-thought-partner-2026]]

**Plan for the delivery medium.** Instructional design for [[online-teaching-and-learning|online teaching and learning]] is not a neutral translation of in-person design — the medium changes what scaffolding, assessment, and interaction are viable, and AI multiplies both the opportunities (scalable personalization, always-on support) and the risks ([[academic-integrity|integrity]], [[cognitive-offloading|cognitive offloading]]) designers must plan for. Design the AI's pedagogical wrapper as deliberately in online as in face-to-face contexts.

**Evaluate against a benchmark, not vibes.** If you're building an instructional-design agent, evaluate it against a standardized, theory-grounded benchmark (e.g. [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]) so you can measure whether grounding in a real ISD framework actually improves output over a generic LLM.^[[jeon-isd-agent-bench-2026]]

- **AI is reshaping instructional design practice.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] systematically review 28 studies (2020-2025) and find AI assists designers with content generation, templates, and personalization, and is conceptualized as a co-worker/collaborator/partner rather than just a tool — though pedagogical alignment and practitioner readiness remain challenges.
## Connected Concepts

- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[curriculum-design]]
- [[scaffolding]]
- [[faculty-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[accessible-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-gains]]
- [[behaviorism]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education
- [[stakeholders]] — Umbrella: people and audiences in AI education (learners, teachers, designers, administrators, policymakers)

## Connected Articles
- [[zhou-constructive-alignment-genai-business-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-communities-of-inquiry-2026]]
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning
- [[rewriting-curriculum-genai-pedagogy-2026]] — Rewriting the curriculum: GenAI-driven pedagogical change
- [[lin-llm-interactive-lesson-generation]] — Automatic LLM creation of interactive learning lessons (Lin et al. 2025)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI in higher ed: engagement + mediating role of teaching methods

- [[curriculum-as-code-instructional-design-2026]]
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[learnity-graphs-lifelong-learning-framework-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]

- [[jeon-isd-agent-bench-2026]]
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: A Framework for Cognitively Activated AI Augmentation in Physics
- [[multi-agent-instructional-design]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Designing for Reach: Seven Levers and the Student Alone with AI
- [[vargas-situated-learning-ai-review-2024]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[panciroli-ai-literacy-episodes-situated-learning]]
- [[fowlin-operationalizing-learning-principles-ai]]
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Benchmarking Multimodal LLMs for Slide Auditing
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: Just-in-Time AI Co-Creation Across Disciplines
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation

- [[botes-ai-oep-ibl-underresourced-2026]] — AI-supported OEP/RS and IBL in under-resourced contexts
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI to Support Productive Failure Problem Design
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI and Instructional Design Practice: A Systematic Review (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[guillen-curriculum-genai-teacher-competence-2026]] — Assessing Teacher Digital Competence for GenAI Curriculum Design (Guillén-Gámez 2026)

