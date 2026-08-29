---
title: Pedagogies and Teaching Strategies
created: "2026-08-19T17:45:00-04:00"
updated: "2026-08-25T11:30:00-04:00"
connected_faqs: [designing-ai-into-learning]
type: concept
tags: [pedagogy, instructional-design, ai-education, higher-ed, k-12]
confidence: high
---
> **Pedagogies and teaching strategies** — the methods and approaches educators use to teach and facilitate learning, and the umbrella concept for the wiki's coverage of how teaching happens (in contrast to [[learning-theories]], which explains how learning happens). In AI in education, pedagogy is central because the choice of teaching strategy shapes how AI tools are deployed: the same generative-AI tool can be a [[scaffolding|scaffold]] under one pedagogy, a [[socratic-method|Socratic]] interlocutor under another, or an answer-generator under a third. The wiki documents individual pedagogies and treats them as the instructional lens through which AI's design and classroom use are evaluated.

Pedagogy and teaching strategy concern *how* educators teach — the activities, structures, and methods that organize learning — while [[learning-theories]] explains the underlying mechanisms of *how learning happens*. The two are complementary: a pedagogy operationalizes one or more theories, and the wiki treats pedagogy as the bridge from theory to classroom practice. Every AI tool embeds pedagogical assumptions about the desired instructional interaction, whether the designer states them or not.

## The pedagogy landscape

The wiki documents a rich set of individual teaching strategies and pedagogies, organized into families:

- **Student-centered and active approaches.** [[active-learning]] (students engaged in doing and thinking rather than passively receiving), [[project-based-learning]] (learning through extended projects), [[experiential-learning]] (learning through direct experience), and [[learning-by-teaching]] (learning by explaining to others).
- **Collaborative and social approaches.** [[collaborative-learning]] (learning through group work), [[sociocultural-learning]] (learning through social participation and mediation), and [[socratic-method|Socratic questioning]] (learning through guided dialogue and questioning).
- **Experience-based approaches.** [[experiential-learning]] (learning through direct experience and reflection), [[situated-learning]] (learning in authentic contexts), and [[embodied-learning]] (learning through physical/embodied interaction).
- **Structured and guided approaches.** [[scaffolding]] (temporary, fading support), [[instructional-design]] (systematic design of instruction), [[self-regulated-learning]] (learners directing their own learning), and [[sociocultural-learning]] (including structured, teacher-guided sociocultural support).
- **Online and distance pedagogies.** [[online-teaching-and-learning|Online teaching and learning]] is itself a pedagogical context, not just a delivery channel: the medium shapes which strategies are viable ([[active-learning]] rethought for asynchronous forums, [[collaborative-learning]] via digital discussion, [[intelligent-tutoring|tutoring agents]] replacing face-to-face interaction). In this medium, AI raises both new opportunities (scalable personalization, always-on support) and new risks ([[academic-integrity|academic integrity]], [[cognitive-offloading|cognitive offloading]]), making pedagogical intent decisive.
- **Motivation and engagement approaches.** [[game-based-learning]] (learning through games), [[self-determination-theory]] (supporting autonomy, competence, relatedness), and [[motivation]]-oriented strategies.
- **[[equity-in-ai-education|equity]]-conscious pedagogies.** [[culturally-relevant-pedagogy|Culturally relevant pedagogy]], [[universal-design-for-learning|Universal Design for Learning]], [[critical-pedagogy]], and [[inclusive-learning]] ensure strategies serve diverse learners.

## How pedagogy appears in AI in education

The wiki's research examines pedagogy at the intersection of AI and teaching in several ways:

- **AI as a pedagogical agent.** AI tools embody pedagogies — a [[intelligent-tutoring|tutor]] built on [[socratic-method|Socratic questioning]] prompts learners to reason, while an answer-generating chatbot may default to direct provision (see [[reducing-ai-misuse]] on why the pedagogical stance matters). The [[agentic-ai|agentic AI]] literature shows that grounding agents in instructional-design theory outperforms raw prompting.
- **Pedagogy determines AI's effect.** A recurring finding is that *how* AI is used matters as much as *whether* it is used. [[instructional-guidance-genai-learning|Instructional-guidance research]] and [[generative-ai-guardrails-harm-learning|guardrailed-tutor RCTs]] show the same AI can harm or help depending on the pedagogical wrapper (hints vs. answers, structured vs. open use).
- **Teaching strategies for AI literacy.** Teaching students *to use AI well* is itself a pedagogical task — [[ai-literacy]] and [[reducing-ai-misuse]] research develops strategies (think-first/AI-second/reflect, AI-declaration, calibration training) that belong to this umbrella.
- **Pedagogy in teacher practice.** [[teacher-role]] and [[teacher-ai-competency]] examine how teachers adopt AI within their existing pedagogical repertoire, and [[pedagogical-llm-training]] / [[pedagogical-agent]] study AI tools trained to follow pedagogical principles.

## Relationship to learning theories

Pedagogies and learning theories are closely linked: each pedagogy operationalizes one or more theories. For example, [[project-based-learning]] operationalizes [[constructivist]] and [[experiential-learning|experiential]] theories; [[socratic-method]] draws on [[sociocultural-learning]] and [[metacognition]]; [[scaffolding]] stems from the [[sociocultural-learning|Zone of Proximal Development]]. The wiki treats [[learning-theories]] as the conceptual foundation and this page as the instructional-practice umbrella — see also [[instructional-design]], which concerns the systematic process of selecting and sequencing strategies.

## Learning gains across pedagogical strategies

Different pedagogical strategies produce different kinds and sizes of [[learning-gains|learning gains]], and the wiki's evidence lets us compare them:

- **Active and experiential strategies** generally produce stronger durable learning than passive reception, though they feel more effortful — [[active-learning]], [[experiential-learning]], [[project-based-learning]], and [[learning-by-teaching]] build understanding through doing. [[generative-ai-reduced-study-time-math|Research]] shows that strategies preserving effortful practice (rather than AI shortcutting it) protect [[learning-gains]].
- **Structured, guided strategies** ([[scaffolding]], [[self-regulated-learning]], [[instructional-design]]) produce reliable but more modest gains — the guardrail evidence ([[generative-ai-guardrails-harm-learning|PNAS 2025]]) shows hint-not-answer scaffolding preserves learning that unguarded answer-giving destroys.
- **[[game-based-learning|Game-based learning]]** produces engagement and skill gains that are real but often modest and context-dependent — [[genai-educational-outcomes-meta-analysis|meta-analytic evidence]] finds game-assisted GenAI shows no significant added benefit over other formats, so games are best used for motivation and practice, not as a shortcut to gains.
- **Collaborative and sociocultural strategies** ([[collaborative-learning]], [[sociocultural-learning]]) show gains mediated by interaction quality, increasingly studied with AI as a partner or peer.
- **Socratic and dialogue-based strategies** ([[socratic-method]]) target higher-order thinking and reasoning — gains that are harder to measure than skill gains but central to [[critical-thinking]].

The key cross-cutting finding, consistent with the wiki's [[learning-gains]] research, is that **the strategy's effect on learning depends more on how it preserves learner effort and productive struggle than on which label it carries** — any pedagogy, even a "good" one, fails if AI is configured to bypass the cognitive work it was meant to elicit (see [[cognitive-offloading]], [[desirable-difficulties]]).

## Implications for AI in education

- **Select pedagogy deliberately with AI:** the teaching strategy determines whether an AI tool supports or undermines learning, so pedagogical intent should drive AI tool selection and configuration.
- **Keep learner agency central:** active, Socratic, and scaffolding pedagogies preserve the productive struggle and [[agency]] that AI can otherwise erode (see [[cognitive-offloading]], [[desirable-difficulties]]).
- **Design AI to enact good pedagogy:** AI agents and tutors should be grounded in established instructional frameworks, not default answer-generation.
- **Teach with and about AI:** pedagogies should both use AI to teach and teach learners how to use AI responsibly.

## Connected Concepts

- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[learning-theories]]
- [[learning-gains]]
- [[instructional-design]]
- [[active-learning]]
- [[collaborative-learning]]
- [[project-based-learning]]
- [[experiential-learning]]
- [[game-based-learning]]
- [[socratic-method]]
- [[scaffolding]]
- [[learning-by-teaching]]
- [[self-regulated-learning]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[critical-pedagogy]]
- [[teacher-role]]
- [[teacher-ai-competency]]
- [[ai-literacy]]
- [[curriculum-design]]
- [[higher-ed]]
- [[k-12]]

## Connected Articles
- [[wang-zhang-pedagogical-partnerships-genai-2026]] — Pedagogical partnerships with generative AI

- [[ai-communities-of-inquiry-2026]]
- [[ai-distance-education-systematic-review-2026]]
- [[instructional-guidance-genai-learning]] — How instructional guidance shapes GenAI learning effects

- [[generative-ai-guardrails-harm-learning]] — Guardrailed (hint-not-answer) tutoring eliminates the exam penalty
- [[agentic-ai-pedagogical-best-practice-2026]] — The automation-vs-learning tension in agentic AI
- [[jeon-isd-agent-bench-2026]] — Grounding agents in instructional-design theory
- [[pedagogical-llm-training]] — AI tools trained to follow pedagogical principles
- [[ai-tpack-teacher-multi-agent-workflow]] — Teacher TPACK and multi-agent workflows
- [[edurev-100741-tpack-genai-review]] — Systematic review of GenAI in student learning from a TPACK perspective
- [[ai-learning-tools-engineering-education-needs]] — AI learning tools in engineering education
- [[fowlin-operationalizing-learning-principles-ai]] — Operationalizing learning principles with AI
- [[learnlm-improving-gemini-learning]] — LearnLM: pedagogical instruction following
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[zuo-instructor-power-genai-writing-2026]] — Power relations perceived by college instructors grappling with GenAI in writing (Zuo, Xu & Dunning 2026)
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI and Instructional Design Practice: A Systematic Review (Kibar & Ilgaz 2026)

- [[generative-ai-mediational-agent-sociocultural-2026]] — Generative AI as a mediational agent
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Instructional approaches in AI literacy interventions
