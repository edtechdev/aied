---
title: Learning Environments as Systems
created: "2026-11-23T11:20:00-05:00"
updated: "2026-11-23T11:20:00-05:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [learning-theories, activity-theory-aied, sociocultural-learning, distributed-cognition]
technology: [learning-analytics, generative-ai, adaptive-learning]
methods: [research-methods-aied, design-based-research, network-analysis, ai-ed-evaluation]
institutions: [governance, educational-policy-ai, change-management, institutional-ai-infrastructure]
level: [higher ed, k 12]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
connected_concepts: [ai-education, learning-design, curriculum-design, learning-theories, activity-theory-aied, sociocultural-learning, distributed-cognition, situated-learning, research-methods-aied, design-based-research, ai-ed-evaluation, change-management, governance, educational-policy-ai, institutional-ai-infrastructure, technology-acceptance-model, network-analysis, learning-analytics, feedback, assessment, agency, human-ai-collaboration, teacher-role, educational-development, critical-thinking, computational-thinking, theories-and-frameworks, learning-sciences, student-engagement, metacognition, shadow-ai]
connected_articles: [teeni-control-ai-by-design-human-learning-2026, mishra-control-vs-agency-history-2025, leveraging-complex-systems-leading-for-transformative-change, new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of, gnadlinger-educator-perspectives-its-design-2026, assessment-feedback-trilemma-model-2026, trikonet-trivalence-co-creativity-2026, pandey-davies-he-governance-administrative-ai-2026, ai-higher-ed-service-delivery-systematic-review-2026, nyale-ai-integrated-workplaces-digital-capability-2026, metacognitive-learning-scenarios-taxonomy, in-the-loop-educational-ai-learning-sciences-2026, videla-why-education-cannot-be-automated-2026, watson-generative-ai-meaning-mediating-infrastructure-2026, zhao-genai-literacy-administrative-work-2026, learner-agency-ai-simulation-2026, cheeseman-human-in-the-loop-humanness-higher-ed-2026, activity-theory-teachers-adoption-ai-sem-2026]
---

> **Learning environments as systems** — the stance that treats a learning environment as a **multi-level system** — learner and task, course, institution, policy — whose parts interact, so that a tool, intervention or policy introduced at one level produces effects at the others. It is used two ways: as an *analytical* stance, to choose and justify the level a study measures, and as a *design* stance, to plan an intervention whose consequences cross levels. The claim it makes is that level choice is a theoretical decision rather than a sampling convenience, and that effects observed at one level are often produced at another. It draws on a family of systems traditions — general systems theory and [[mishra-control-vs-agency-history-2025|cybernetics]], [[leveraging-complex-systems-leading-for-transformative-change|complexity theory]], socio-technical systems, [[activity-theory-aied|activity theory]], actor-network theory and connectivism — which agree on the parts-and-interactions picture while disagreeing about what a system is for.

## Questions to Consider

- A chatbot is introduced in one course and outcomes improve there but not across the program. Which level produced the effect, and which level did the evaluation measure?
- Is a teacher's resistance to an AI tool a property of the teacher, the course, or the institution? What would each answer imply about what you change?
- [[teeni-control-ai-by-design-human-learning-2026|Te'eni and colleagues]] require a separate control-feedback loop at every system level. Where in your setting would such a loop be missing?
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rienties and colleagues]] ran six design-based-research cycles over 18 months before claiming an effect at the Open University. What does that timeline tell you about the level at which educational AI changes?
- A dashboard reports to a teacher but offers no way to act on what it shows. Is that a feedback loop? What is missing?
- [[leveraging-complex-systems-leading-for-transformative-change|Dawson and Pardo]] treat generative AI as a complexity problem rather than a rollout problem. What in your institution decides whether a successful pilot spreads or dies?

## Introduction

Most research on AI in education is written at one level. A study measures learners, or a course, or an institution, and the level usually arrives as a methodological convenience: that is who was available, that is what the instrument reaches, that is where the budget sits. The stance described here treats that choice as a theoretical one. A learning environment is a system of nested levels — a learner working on a task, a course carrying expectations and assessment, an institution with rules and workload, a policy environment setting what is permitted and funded — and these levels interact. Something introduced at one level propagates to others, and something observed at one level may have been produced at another.

The claim is not new. It is the common thread in several bodies of work that otherwise do not cite each other. They include the systems-theory import in [[teeni-control-ai-by-design-human-learning-2026|Te'eni, Yahav and Schwartz (2026)]], the [[mishra-control-vs-agency-history-2025|history of AI in education as a history of control]], [[leveraging-complex-systems-leading-for-transformative-change|complexity leadership in education]], socio-technical readings of administrative AI ([[pandey-davies-he-governance-administrative-ai-2026|Pandey and Davies]]), and activity-theoretic and actor-network analyses of educational technology. What is missing is a page that holds the shared move in one place: **name the level, state what crosses it, and design or measure accordingly.**

The stance is deliberately instrumental: it is a way of placing an intervention or a measurement, not a competing account of learning. It claims something narrower and more operational: that the level at which you intervene, measure or govern is a decision with consequences, and that ignoring the other levels is how well-designed interventions fail quietly.

## Levels of the learning environment

Four levels recur across the literature, and they are not simply bigger versions of one another.

At the **learner-and-task level** the unit is a person interacting with material, a tool, or a model. Most of the evidence sits at this level: learners' [[agency|agency]], [[self-regulated-learning|self-regulation]], [[help-seeking|help-seeking]], the [[scaffolding|scaffolding]] a tool provides, and whether a [[feedback|feedback]] message changes what a learner does next. It is also the level at which a tool's effect is easiest to measure and hardest to attribute, because the learner arrives with [[prior-knowledge|prior knowledge]], a history with the subject, and a reason to engage or not.

At the **course level** the unit is a designed sequence: learning outcomes, activities, assessment, the rubric, the pacing, the expectations a syllabus quietly sets. This is where [[assessment|assessment design]] actually happens, and where the [[assessment-feedback-trilemma-model-2026|trilemma]] between validity, reliability and feasibility is resolved or left unresolved. [[gnadlinger-educator-perspectives-its-design-2026|Gnadlinger and Kriglstein (2026)]] show why this level is easy to under-specify: the standard blueprint for [[intelligent-tutoring|intelligent tutoring systems]] — Domain, Learner, Tutor and Interface — describes a system built for learners and leaves out the educator who has to run it. Across 21 classroom ITS studies they extracted 435 statements under five lenses, and the educator lens produced the most.

At the **institutional level** the unit is an organization: workload, rules, procurement, [[governance|governance]], the division of labor between academic and professional staff, and the infrastructure a tool must survive inside. This is where [[change-management|change]] either happens or does not, and where [[shadow-ai|shadow AI]] — tools adopted without institutional knowledge — becomes visible as a governance symptom rather than a discipline problem. [[institutional-ai-infrastructure|Institutional infrastructure]] and [[educational-policy-ai|policy]] set the constraints within which a course-level decision is made.

At the **policy level** the unit is a system of incentives and permissions: what is funded, what is regulated, what is measured and reported, and what a sector is told to optimize. [[educational-policy-ai|Policy]] frames the other three levels without usually determining any of them directly.

The analytical payoff is the interaction claim. A tool adopted at the learner level is constrained by the course's assessment design; the course is constrained by institutional workload and procurement; the institution is constrained by policy. Conversely, a policy that permits or funds a tool changes what courses can attempt, which changes what learners encounter. Effects therefore do not stay at the level where they were introduced, and a study that measures only the level of introduction can miss the mechanism entirely.

## Systems traditions the stance draws on

The stance is a bricolage, and it is worth being explicit about which tradition is being borrowed, because they differ.

**General systems theory and cybernetics.** [[teeni-control-ai-by-design-human-learning-2026|Te'eni, Yahav and Schwartz (2026)]] import systems theory — von Bertalanffy, Simon's *Sciences of the Artificial*, Churchman's inquiry systems — to make oversight explicit. A human–AI system, on their account, has three roles: a client whose values the system serves, a system manager who delegates between human and machine, and a designer who fixes structure and rules. Control is then not one loop but several: each system level and each mode of operation needs its own control-feedback loop, and those loops must be aligned with the goals and values of the level above. Their demonstration is a design case, not a measured evaluation — Fusion, a forum-message classifier, reached human–machine agreement after eight iterations with no comparative results reported. [[mishra-control-vs-agency-history-2025|Mishra and colleagues (2025)]] supply the historical warrant, tracing AI in education back through cybernetics and the Dartmouth conference and framing the field's recurring argument as control versus agency rather than tools versus no tools.

**Complexity and complex adaptive systems.** [[leveraging-complex-systems-leading-for-transformative-change|Dawson and Pardo (2026)]] argue that generative AI is precipitating a paradigmatic transformation rather than a passing fad, and that bureaucratic leadership is ill-suited to its pace, scale and sociotechnical nature. Their SPARK framework (Systems, Problem, Analysis, Research, Knowledge brokerage) operationalizes Complexity Leadership Theory to hold institutional stability and systemic innovation together, and their target is the move from isolated pilots to something that survives. The relevant transferable claim is that in a complex system, control and emergence are not opposites: the leader's job is to create the conditions under which productive emergence is possible, rather than to specify the outcome.

**Socio-technical systems.** [[pandey-davies-he-governance-administrative-ai-2026|Pandey and Davies]] read five drivers of administrative-AI adoption through socio-technical systems theory and conclude that administrative AI is a [[governance|governance]] question rather than a technical one. The tradition matters because it refuses the separation of the social from the technical: a chatbot in admissions is simultaneously a workflow change, a staffing change and a legitimacy change.

**Activity theory.** [[activity-theory-aied|Activity theory]] (CHAT) analyses learning and work as tool-mediated, object-oriented, collective activity systems made of subject, object, tools, community, rules and division of labor. Its distinctive contribution is that **contradictions within the activity system are the driving force of development**, not defects to be eliminated — which makes it a diagnostic instrument for finding where an AI tool has shifted the division of labor without anyone agreeing to the shift.

**Actor-network theory.** [[trikonet-trivalence-co-creativity-2026|TriKoNet]] treats non-human artifacts as constitutive network participants rather than as tools used by humans, and models creativity as an emergent effect of socio-technical networks — a triadic interplay of stabilization, destabilization and re-stabilization traced through problematization, interessement, enrollment and mobilization. Its contribution here is the insistence that an AI agent is an actor in the network, not an instrument of one, and that its effects appear through the network's re-stabilization rather than through its features.

**Connectivism.** Connectivism is the tradition that most directly licenses treating a learning environment as a network of nodes and links rather than as a container for individual minds.

## Using the stance in research

The research-level use of the stance is to make level choice explicit and defensible rather than incidental.

[[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rienties and colleagues (2026)]] is the clearest example of research conducted at the level it claims. Working at the Open University — 200,000+ learners across more than 50 countries — they designed, implemented and evaluated an AI digital assistant using Sharples' embedded systems approach: the tool was built into the learning environment rather than offered beside it. Six design-based-research cycles over 18 months, 498 students and 20 staff, with the finding that purpose-built generative-AI tools embedded in the environment can raise [[student-engagement|engagement]], provided development is participatory and governance is in place. The design decision to work at institution scale, and the 18-month horizon, are the argument as much as the effect size.

[[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga's systematic review]] organizes 155 studies from 2019 to 2024 across five domains — AI integration, adaptive leadership, infrastructure readiness, service-delivery transformation, and barriers to sustainability — and finds the evidence points one way: AI in higher education is associated with improvements in teaching, learning and administrative efficiency, with AI integration and digital infrastructure the strongest domains. Read as a level analysis, the review's five domains are levels of the same environment, and its finding that infrastructure readiness gates the rest is the interaction claim in aggregate form.

[[gnadlinger-educator-perspectives-its-design-2026|Gnadlinger and Kriglstein (2026)]] supply the cautionary case. Their four-model ITS blueprint is a system description with a missing actor, and their review shows the omission is systematic rather than accidental: the educator lens generated the most statements precisely because it is the least designed for. A study that specifies its system without specifying who operates it will measure the wrong thing.

[[metacognitive-learning-scenarios-taxonomy|A taxonomy of metacognitive learning scenarios]] integrates systems theory with empirical constraints into a six-node open systems model — the most literal use of the tradition, modeling the scenario itself as an open system exchanging with its environment. And [[in-the-loop-educational-ai-learning-sciences-2026|Pande (2026)]] argues that the usual in-the-loop debate asks the wrong question — not whether humans participate enough, but how the educational loop is rendered actionable, since teaching organized around cycles of data capture, computational interpretation and probable response reconfigures pedagogical action around what systems can detect.

## Using the stance in design and implementation

The design-level use is to plan for consequences at levels other than the one being changed.

[[teeni-control-ai-by-design-human-learning-2026|Te'eni and colleagues]] are the most explicit: a loop that is correct at its own level can still be misaligned with the values of the level above it. Their reciprocal human–machine learning — one loop from human to machine, one from machine to human, both tied to shared knowledge representations — is the sharpest design requirement here. A tool that only takes a teacher's input, or only returns a score, learns in one direction, and the human's judgment can stop developing. That bears directly on [[learning-analytics|learning-analytics]] dashboards that report without enabling action, on [[adaptive-learning|adaptive learning]] systems that adjust silently, and on [[automated-assessment|automated assessment]] whose reasoning the grader never sees.

[[assessment-feedback-trilemma-model-2026|Pedlow and colleagues (2026)]] work the same ground from the assessment side. Their trilemma holds that validity, reliability and feasibility cannot all be maximized at once, and their model's central design move is that the unit of design is **the system, not the task**: the trade-off is distributed across a coherent assessment system over time rather than settled inside a single instrument. That is the level claim applied to one domain — a course-level assessment regime, not an item.

[[nyale-ai-integrated-workplaces-digital-capability-2026|Nyale (2026)]] proposes a six-stage, program-level process for turning labor-market evidence into [[curriculum-design|curriculum]] change for AI-integrated workplaces, with a human decision gate at each stage that AI may inform but cannot pass. It is a conceptual framework rather than an evaluation — no sample, dataset or results — but its shape is the level claim: the unit is the program, and the gates exist to keep the loop aligned with the level above it.

[[zhao-genai-literacy-administrative-work-2026|Zhao (2026)]] shows what happens when the levels are studied separately. Surveying administrative staff in vocational colleges in Northeastern China, the study links generative-AI literacy to innovative work behavior — an individual-level finding — while the conditions that make such behavior possible sit at the institutional level. The gap between the two is where implementation fails.

[[watson-generative-ai-meaning-mediating-infrastructure-2026|Watson, Morgner and Brezovec (2026)]] argue that generative AI matters less through isolated outputs than as **meaning-mediating infrastructure**: through semantic transduction it reformats prompts, [[rubrics|rubrics]], feedback and disciplinary genres into communicatively plausible forms, changing who can be recognized as a legitimate participant. That is a systems claim about the environment rather than about the tool, and it connects the stance to [[equity-in-ai-education|equity]] — inclusion and exclusion become selective communicative processes rather than properties of individual ability.

## Connections to related concepts

[[ai-education|AI in education]] is the umbrella concept, and this stance is one of its analytical lenses. The stance is closest to [[learning-design|learning design]] and [[curriculum-design|curriculum design]] at the course level, and to [[research-methods-aied|research methods]] and [[ai-ed-evaluation|evaluation]], which decide what level a study measures. [[governance|Governance]], [[educational-policy-ai|policy]] and [[institutional-ai-infrastructure|institutional infrastructure]] own the institutional level; [[change-management|change management]] is the practice of moving an institution from one stable state to another.

Its theoretical neighbors are [[learning-theories|learning theories]] and [[theories-and-frameworks|theories and frameworks]]; [[activity-theory-aied|activity theory]], which supplies the contradiction diagnostic; [[distributed-cognition|distributed cognition]] and [[situated-learning|situated learning]], which locate cognition across people and settings; and [[network-analysis|network analysis]], which operationalizes the parts-and-interactions picture as a method.

Two boundaries are worth stating plainly. [[computational-thinking|Computational thinking]] carries **systems thinking** as one of its own practices — the ability to define system boundaries and synthesize micro-level interactions into macro-level behavior — which is a *cognitive* capacity in a learner, not a property of the environment; see that page for the student-facing evidence. And [[critical-thinking|critical thinking]] is not a systems tradition, though the two are often taught together. Keeping the environment-level stance separate from the learner-level capacity is what keeps the two from being conflated.

## Common Misconceptions

- **It is a theory of learning.** It is not. It makes no claim about what happens inside a learner, and it does not compete with [[learning-theories|learning theory]]. It is a stance about the unit of analysis and intervention, and it is compatible with several accounts of learning at once.
- **"System" just means "the platform".** A platform is one component. The stance treats the environment as the nested set of levels — learner, course, institution, policy — including the rules, workload and incentives that surround the tool.
- **The right level is the one where you have data.** Level choice is theoretical. Measuring the level you can reach and reporting it as the level at which the effect occurred is the error the stance exists to prevent.
- **A system diagram is the analysis.** Drawing the levels is the start. The claim is about interaction across levels — what crosses them, in which direction, and what it costs.
- **It only applies to large institutions.** The levels exist in a single course: the learner, the task sequence, the module's rules, the department's expectations. Scale changes the stakes, not the structure.
- **It is the same as [[change-management|change management]].** Change management is the practice of moving an organization; this is the analytical stance that tells you which levels the change has to reach and what it will disturb on the way.
