---
title: Learning Design
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy]
reviewed_by: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: revision
    date: "2026-09-22"
    agent: hermes-agent
---

> **Learning Design** (also known as *instructional design*) — the systematic process of creating effective learning experiences through the analysis of learning needs and the design, development, implementation, and evaluation of instructional materials and activities. AI is transforming learning design by automating content creation, enabling [[adaptive-learning|adaptive learning]] paths, supporting data-driven iteration, and augmenting — rather than replacing — the instructional designer's role.

## Questions to Consider

- Think of a course or lesson you have experienced or designed. Where did 'what to teach' (curriculum) end and 'how to teach it' (learning design) begin — and how did the two interact?
- A common assumption is that better AI fluency automatically produces better educational content. The page counters this with evidence that explicit pedagogical structure — not just AI fluency — is what determines learning effectiveness. Where have you seen impressive output that failed to teach?
- If an AI tool can generate a full course from a prompt, what human decisions become more important rather than less? The page argues AI augments rather than replaces the instructional designer's role — what would that augmented role look like?
- Some instructional-design models like ADDIE are used as rigid, linear steps. But the page treats them as iterative, flexible planning heuristics. When might following a process too literally undermine good design?
- The page shows that pedagogically grounded prompting — for example, a five-step framework based on learning theory — significantly improved higher-order outcomes. If you were building an AI tutor, what would you encode in an explicit design layer so its teaching strategy stays traceable and reproducible?

## Introduction

Learning design bridges AI capabilities and effective pedagogy. Where [[curriculum-design]] addresses *what* to teach at the program level, learning design addresses *how* to teach it at the course and lesson level. The articles in this knowledge base explore both AI as a tool for learning designers and learning-design principles for building effective [[intelligent-tutoring|AI tutoring]] systems.

What that design work involves in practice is itself an empirical question. [[tang-chatbots-learning-design-2026|Tang et al. (2026)]] coded 1,378 designer-chatbot turns from five novice learning designers working with a chatbot embedded in a design tool, and found the dialogue clustered on intended learning outcomes and pedagogical approach rather than content generation. Designers returned to outcomes repeatedly as an alignment check while turning curriculum components into concrete tasks, and the assistant's role shifted across phases, from clarifying terms to supporting task design to running a verification pass before a deadline. Design support, on this evidence, is less about producing material than about keeping design intent coherent.

Learning analytics and generative AI support different parts of design: across 11 focus groups at one Australian university, analytics discourse co-occurred most with context and course-level problem-solving (0.32), while GenAI discourse centered on assessment design (0.26) and designing for student self-determination (0.15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]]).

### Key research themes

**AI-assisted content creation** is the most directly transformative application. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** presents a six-phase architecture integrating Generative AI with LaTeX and Python to automate [[stem-education|STEM]] materials creation, validated across 8 modules and 28 project contexts with student quality ratings of 8.5-9.9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** uses a multi-agent framework structured around the ADDIE model, with role-based agents (Teaching Faculty, Instructional Designer, Course Coordinator) collaborating to generate complete course materials. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** provides a structured pipeline for adaptive [[pedagogy|pedagogical]] [[video-education|video generation]] grounded in course corpora, demonstrating that explicit pedagogical structure — not just AI fluency — is essential for educational content generation. [[generative-ai|Generative AI]] platforms can also embody learning-design principles in the content they produce: [[ai-modeling-problem-generation-platform-2026|an AI-powered platform for generating mathematical modeling problems]] combined established design principles with [[prompt-engineering|retrieval-augmented generation]], developed through the ADDIE approach to produce pedagogically grounded tasks and recommendations that conventional content generators lack. Yet the payoff of such AI-assisted content and lesson generation is mediated by the teacher's own expertise: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] found that experienced teachers critically adapt AI-generated lesson ideas to students and context (re-prompting and elaborating on output), whereas novices tend to accept AI suggestions directly — so the pedagogical value of AI content tools depends on the teacher's experience and AI proficiency, not the tool alone. A systematic review of [[wang-teacher-ai-co-design-review-2026|teacher–AI co-design of learning tasks]] (Wang, Liu & Islam 2026) confirms the pattern at scale across 28 studies (2015–2025): GenAI is used mainly for lesson planning, prompt generation, and creative ideation, and the dominant collaboration mode is AI as assistant/content generator rather than a fuller co-designer — with efficiency, responsiveness, [[creativity]], and [[equity-in-ai-education|equity]] recurring as affordances. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] sharpens the teacher-expertise finding for group activity design: experienced teachers produce richer, more synergistic, better ZPD-aligned role architectures in AI-designed cooperative activities than novices regardless of AI familiarity, framing "pedagogical prompt literacy" as the lever that turns AI output into effective [[collaborative-learning|differentiated group learning]].

Where generated materials fall short is curriculum fit: seven math teachers rated AI-generated productive-failure problems close to human ones on overall quality (M = 17.19 vs 17.43 of 25) but lower on curriculum alignment (M = 2.57 vs 3.29), so generated problems still needed editing for length, reading level, and visuals ([[rhaimi-productivemath-2025|Rhaimi et al. (2025)]]).

**Pedagogically grounded AI tutoring** applies instructional design principles to AI system design. **[[didactical-teacher-assistant-dimensional-modeling|Brisson et al.]]** built a didactically-driven [[llm]] teacher assistant where tutoring strategy is encoded in an explicit external layer — making content selection and didactic structuring traceable and reproducible, directly addressing opacity concerns in [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou et al.]]** demonstrated that a five-step [[prompt-engineering|prompting]] framework grounded in Generative [[learning-theories|Learning Theory]] significantly improved higher-order cognitive outcomes, showing that instructional guidance — not just AI access — determines learning effectiveness. Both connect to [[scaffolding]] and [[intelligent-tutoring]].

**Frameworks and evaluation** provide structured approaches. **[[bridging-instructional-design-framework-math]]** and **[[cotal-formative-assessment-scoring-2026|CoTAL]]** demonstrate [[human-in-the-loop-ai|human-in-the-loop]] design principles. **[[genai-mindtool-generative-learning]]** positions AI as a "mindtool" — a cognitive partner that extends rather than replaces learner thinking — directly applying instructional design theory to AI integration. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** applies Universal Design for Learning principles to create an accessible AI thought partner for educators, connecting instructional design to [[inclusive-learning]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate–Inquire–Reflect) is a task-structuring framework for cognitively activated AI use that bounds the AI's contribution so that prediction, interpretation, and evaluation remain the learner's — an AI-specific adaptation of inquiry cycles grounded in [[self-regulated-learning]], Cognitive Load Theory, and [[human-ai-collaboration]]. Complementing these design frameworks, the [[dohn-boundary-object-classifying-genai-learning-activities-2026|Dohn et al. (2026) taxonomy]] offers a *classification* rather than a design method: six categories (Learning Objective, Content, Representation Format, Epistemic [[student-engagement|Engagement]], Social Design, Artifacts) that let designers and [[research-methods-aied|researchers]] describe, compare, and imagine GenAI learning activities by making explicit why, what, how, with what, and with whom learners engage GenAI — built as a boundary object through postdigital dialogue. Smart-classroom frameworks extend this to [[teacher-education|teacher education]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao, and Wang (2026)]] propose a three-dimensional framework for smart education — learning effectiveness, information and communication technology (ICT), and classroom organization — and instantiate it in a [[math-education|mathematics]] M.Ed. course that integrates [[automated-assessment|automated scoring]], personalized recommendations, and multi-[[ai-feedback-quality|AI feedback]] across pre-, in-, and post-class stages. A quasi-experiment showed significant gains in students' ability to formulate precise, professionally grounded instructional objectives, yielding the transferable **D-T-E Model** (Disciplinary Demand–Technological Empowerment–Evaluation Loop) — [[discipline-specific-aied|discipline-specific]] guidance for [[educational-development|teacher educators]] moving smart-education concepts into practical instructional design practice.

**Design for reach.** Halani's seven-lever framework asks of each course setting which ones still operate when the student is alone with AI; structural moves such as changing what the grade certifies, or tasks that cannot be completed without the thinking, reach further than telling students that process matters ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Constrain the tool to protect the thinking.** A nine-week argumentative-writing design sequenced teacher-delimited chatbots that ask questions and refuse to generate student prose, and four high-school students moved from passive AI consumers to evaluators who pushed back on outputs — strategic constraint, not unrestricted generativity, tracked the gains ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Rubric-guided prompting as a design lever.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] demonstrated that the rubric functions as a mediating interface between human pedagogical intent and machine inference: treating assessment criteria as revisable design artifacts — rather than fixed instruments — and iteratively co-refining them with the LLM raised LLM–human agreement on student design work from 54.75% to 81.25%. Rubrics engineered for LLMs must balance precision and flexibility — too vague invites free interpretation, too rigid reduces the model to pattern-matching — and role-aware prompting (instructor, peer reviewer, grant reviewer) yielded distinct evaluative feedback. This positions rubric engineering as a concrete learning-design practice for shaping AI evaluation behavior, with human-in-the-loop oversight remaining essential.

**AI agents for instructional design** extend the field into [[agentic-ai|agentic AI]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** is the first standardized, theory-grounded benchmark for evaluating LLM-based instructional design agents — its 25,795-scenario Context Matrix (51 contextual variables × 33 ISD sub-steps from ADDIE) shows that agents grounded in classical ISD frameworks (ADDIE, Dick & Carey, Rapid Prototyping ISD) outperform theory-free agents, empirically validating that instructional design is a structured discipline rather than a generic prompting task. Agents are not only *builders* of designs but also *critics* of them: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]] use a single autonomous web agent that navigates a multi-step online lesson like a student to evaluate a learning design *before* real learners engage — its description of the student experience predicts where novices will drop out and surfaces actionable design feedback, outperforming every baseline and even a simulated cohort of students on a global CS1 course. This frames pre-launch, agentic evaluation as a low-cost complement to human design iteration. **[[wang-multi-agent-systems-learning-designers-2025]]** and **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** explore multi-agent frameworks that orchestrate role-based agents around instructional-design models, while **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** examines how teachers and agents jointly apply technological-pedagogical-content knowledge. This work connects instructional design to [[benchmark|benchmarking]], [[ai-ed-evaluation]], and the design of [[curriculum-design|curriculum]] at scale.

### Connections to related concepts

Learning design is the bridge discipline of [[ai-education|AI in education]] — it connects [[curriculum-design]] (what to teach) with [[scaffolding]] (how to support learners), [[educational-development]] (how to prepare educators), and [[generative-ai]] (the tools themselves). It is tightly coupled with [[teacher-role]] because AI tools reshape what learning designers and teachers do, and with [[ai-literacy]] because effective AI integration requires educators to understand AI capabilities and limitations. Design work ultimately resolves into an *order of activity*: [[pedagogical-patterns|pedagogical patterns]] catalogue the tested orders of moves, so a designer can decide where in a lesson AI belongs rather than only what to include. The [[learning-sciences|learning sciences]] are the research field behind these principles: where this page covers the professional practice of creating learning experiences, the learning sciences study that practice and its designs empirically and generate the cognitive, motivational and social principles that learning design then operationalizes.

### How learning design determines learning gains

Learning design is the lever that decides whether AI produces [[learning-gains|learning gains]] or merely AI-inflated performance. The knowledge base's evidence is consistent on this: **the same AI tool yields large gains or net harm depending on how the learning experience is designed around it.** [[instructional-guidance-genai-learning|Hou et al.]] showed that a five-step prompting framework grounded in learning theory significantly improved higher-order cognitive outcomes, while access to AI alone did not; [[genai-mindtool-generative-learning|mindtool]] and [[airis-cognitively-activated-ai-physics-2026|AIRIS]] frameworks preserve the learner's cognitive work so that durable gains (rather than task-efficiency) result. Design choices that protect [[learning-gains]] — scaffolding that requires a student attempt, [[formative-assessment]] with unassisted outcome measures, and pedagogical structure that keeps the learner the agent — mirror the field's finding (see [[learning-gains]]) that AI is a strong gain when it coaches and a harm when it answers. Conversely, poorly designed AI-integrated lessons fall prey to the [[cognitive-offloading|performance-learning gap]], where apparent success masks no learning.

### Practical guidance for designers and developers

For instructional designers, course developers, and engineers building AI-assisted learning experiences, the knowledge base's findings translate into actionable practice. One boundary is worth marking before the practices themselves: learning design as this page describes it is the design of a course for a known cohort, whereas the same principles baked into a product that many courses — taught by people the designer will never meet — will use are the work of [[educational-technology-developers]], where defaults, configurability and documentation carry pedagogical weight:

**Ground AI generation in a structured instructional model.** AI content is only as good as the pedagogical structure behind it — explicit structure, not AI fluency, determines quality. Design around a recognized model (ADDIE, Dick & Carey, rapid prototyping) and encode pedagogical decisions explicitly rather than relying on the model to infer them.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Adopt a principle-level framework as well as an instructional model.** A course-level model structures one design; a published framework sets the criteria that many designs should satisfy. An example worth reading in full is Digital Promise's *Powerful Learning with Emerging Technology*, which organizes its guidance under three principles — Evidence-Based, Learner-Centered, Skill-Building — each expanded into practices and strategies, and attaches [[privacy]], [[explainable-ai|explainability]] and fairness to particular practices as safety obligations rather than optional extras.([[powerful-learning-with-emerging-technology-2025]])
**Match the AI configuration to the task, not to sophistication.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] distinguishes four layers — prompt, context, harness, and verified loop — and applies a minimally sufficient layer principle: use the least complex configuration capable of a verifiable result, since added orchestration brings coordination, verification, privacy and comprehension costs.

**Use role-based multi-agent workflows for content production.** Instead of one generic prompt, orchestrate distinct agents/roles (teaching faculty, instructional designer, course coordinator) that collaborate through a defined pipeline — this mirrors how real course teams work and yields more complete materials than a single prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Provide instructional guidance, not just AI access.** Whether learners interact with AI directly or with AI-generated materials, guidance built on learning theory (e.g. a stepwise prompting [[scaffolding|scaffold]] grounded in generative-learning principles) drives higher-order outcomes; access alone does not. Design the learning activity around how the mind learns, and treat AI as a cognitive "mindtool" that extends thinking rather than replacing it.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Model forgetting, and schedule review where decay is worst.** G4L represents knowledge decay with an Ebbinghaus forgetting curve driven by elapsed time and repetitions, and prioritizes the units most vulnerable to decay rather than re-serving whatever was scored most recently ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin et al. (2026) add an operational move for deciding where AI enters: unbundle an activity into the components best done independently and those best coupled with AI, keeping the educator's judgment central to the split ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**Make content traceable and reviewable.** Let a human designer review and correct AI output before it reaches learners, and structure AI generation so the pedagogical rationale (why this content, in this order) is inspectable — addressing both quality and the opacity concerns that undermine [[trust]]-generated instruction.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Review AI-generated media at the script stage, not after synthesis.** PedaCo puts educator review on the script — where pedagogical errors are cheap to fix — before anything is rendered; rated instructional validity rose from 3.07 to 3.86, while the automated post-synthesis layer improved only two of five dimensions ([[ai-video-dual-gatekeeping-2026|Kim, Baek and Kwak (2026)]]).

**Design for [[accessibility]] from the start.** Apply [[universal-design-for-learning|UDL]] principles when building AI tools and AI-generated materials so they serve diverse learners, rather than retrofitting accessibility after the fact.([[ludia-udl-ai-thought-partner-2026]])

**Plan for the delivery medium.** Instructional design for [[online-teaching-and-learning|online teaching and learning]] is not a neutral translation of in-person design — the medium changes what scaffolding, assessment, and interaction are viable, and AI multiplies both the opportunities (scalable [[personalized-learning|personalization]], always-on support) and the risks ([[academic-integrity|integrity]], [[cognitive-offloading|cognitive offloading]]) designers must plan for. Design the AI's pedagogical wrapper as deliberately in online as in face-to-face contexts.

**Evaluate against a benchmark, not vibes.** If you're building an instructional-design agent, evaluate it against a standardized, theory-grounded benchmark (e.g. [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]) so you can measure whether grounding in a real ISD framework actually improves output over a generic LLM.([[jeon-isd-agent-bench-2026]])

- **AI is reshaping instructional design practice.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] [[meta-analysis-systematic-review|systematically review]] 28 studies (2020-2025) and find AI assists designers with content generation, templates, and personalization, and is conceptualized as a co-worker/collaborator/partner rather than just a tool — though pedagogical alignment and practitioner readiness remain challenges.

## Connected Concepts

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] — Pedagogical Partnerships
- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
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
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education
- [[stakeholders]] — Umbrella: people and audiences in AI education (learners, teachers, designers, administrators, policymakers)

## Connected Articles
- [[powerful-learning-with-emerging-technology-2025]] — Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA and GenAI in learning design decision-making
- [[tang-chatbots-learning-design-2026]] — Chatbot use in learning design: designers dwell on outcomes and pedagogy rather than content generation (Tang et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Teacher-AI interaction patterns in lesson design across experience and AI proficiency (Choi et al. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI in higher ed: engagement + mediating role of teaching methods
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taxonomy (boundary object) for classifying GenAI learning activities
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — AI Web Agents: autonomous web agent evaluates lesson designs and predicts student dropout before students engage (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: A Framework for Cognitively Activated AI Augmentation in Physics
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Designing for Reach: Seven Levers and the Student Alone with AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI to Support Productive Failure Problem Design
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI and Instructional Design Practice: A Systematic Review (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Making AI annoying on purpose: constraint in AI-supported writing (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Smart-classroom model and D-T-E loop improving M.Ed. instructional design proficiency in mathematics (Zhu et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-powered platform generating mathematical modeling problems (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Teacher–AI co-design of learning tasks: trends and perspectives (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Architecture of roles in AI-designed differentiated group activities (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
