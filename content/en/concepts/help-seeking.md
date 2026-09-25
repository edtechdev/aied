---
title: Help-Seeking
created: "2026-08-06T10:20:04-04:00"
updated: "2026-09-25T09:57:33-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [help-seeking, metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring, llm]
connected_faqs: [reducing-over-reliance, study-with-ai]
audience: [learners]
level: [higher ed, k 12]
confidence: high
reviewed_by: [editor]
---

> **Help-Seeking** — the learner's process of recognizing a need for assistance and strategically requesting it, and how that process plays out in AI-supported learning environments. In [[ai-education|AI in education]], help-seeking is central to whether AI tools support or undermine learning: the *quality* of help-seeking (when, how, and what learners ask for) strongly shapes outcomes, and AI tutors, hints, and [[pedagogy|pedagogical]] agents are designed precisely to elicit productive help-seeking rather than answer-seeking.([[lak2026-hint-button-unproductive-use]])([[ai-fallibility-warning-help-seeking]])

## Questions to Consider

- When you get stuck, do you tend to ask for a direct answer or for guidance that helps you figure it out yourself? What do you think each choice does to what you actually retain?
- Research shows students often intend to learn with AI but default to asking for the answer — an 'intention-behavior gap' linked to worse performance. Why might good intentions so easily collapse into answer-seeking?
- A persistent 'hint button' can turn a learning task into a copying exercise by signaling that help is always there. Can you recall a time when having help too easily available made you skip the thinking you needed to do?
- One study found that simply warning students an AI could make mistakes actually increased their help-seeking. How might healthy skepticism change how students engage with a tutor versus blind trust?
- Struggling students are often the least likely to seek help unprompted. If the students who most need support don't reach out, how should AI tools and instructors respond?
- The page proposes delaying hints and moving the design question from 'whether' to 'how' to provide help. What would a well-designed help experience look like for your learners — and what would make them actually take it up?

## Introduction

Help-seeking is a well-established construct in learning research, closely tied to [[self-regulated-learning]] and [[metacognition]]: it requires learners to monitor their own understanding, recognize a gap, decide help is needed, and formulate an effective request. With the rise of [[generative-ai|generative AI]] tutors, help-seeking has taken on new importance — and new failure modes. Learners often *intend* to use AI for learning but default to asking for direct answers, a gap that research in this knowledge base documents across domains and age groups.([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

## Productive vs. unproductive help-seeking

The central distinction in the literature is between help-seeking that supports learning and help-seeking that bypasses it.

### Unproductive help-seeking behaviors

Research in this knowledge base identifies concrete, observable patterns of unproductive help-seeking, especially in [[intelligent-tutoring|intelligent tutoring systems]]:

- **Premature hint requests** — requesting help before making any solution attempt. Even uncertain students learn more by attempting first.([[lak2026-hint-button-unproductive-use]])
- **Superficial hint reading** — advancing through hints too rapidly to read them (flagged at a ~4 words/second benchmark), often jumping straight to the bottom-out hint that reveals the answer.([[lak2026-hint-button-unproductive-use]])
- **Answer-seeking over learning-seeking** — asking the AI to produce the answer rather than to explain or guide. In a study of 98 Grade-9 students using a GenAI tutor, interactions were dominated by instrumental requests with almost no monitoring or evaluation of their own learning — despite students having chosen scaffolded support beforehand. This **intention-behavior gap** was associated with *lower* post-test performance and higher extraneous cognitive load.([[regulating-ai-tutor-adolescent-srl]])
- **Consulting AI before any independent attempt or human source.** [[uneven-impact-generative-ai-student-learning-2026|Manikonda et al. (2026)]] measure this ordering directly as **early reliance** — consulting GenAI before independent thinking, a traditional search, or reaching an instructor — and find it associated with greater negative impact (β = .402, p = .004) as well as academic benefit (β = .301, p < .001) among 118 students in AI-related courses. The association with harm was absent at low [[ai-literacy|evaluation literacy]] and strongest at high evaluation literacy (b = .688 at +1 SD, p < .001), so students most able to judge AI output reported the most cost from consulting it first: the choice of *whom to ask first* carries a downside that skilfulness at evaluating the answer does not offset. It also shows that using AI for organizing, evaluating, and decomposing problems — **cognitive** rather than early reliance — is the pattern associated with positive impact, so the help-seeking failure mode is one of sequencing rather than of asking at all.
- **Struggling students are least likely to seek help unprompted** — the engagement side of help-seeking. In [[one-click-away-khanmigo-two-year-school-experiment-2026|a two-year Khanmigo RCT (Oreopoulos & Low 2026)]], even with free access and mandatory practice time, the median struggling student messaged the AI tutor in only ~17% of mistake sessions, mostly with bare answers or clicks — consistent with the economics-of-education finding that initiative-dependent interventions reach fewest of the students who would benefit most. [[virtual-tutoring-computer-assisted-learning-takeup-2026|TWiK (Oreopoulos et al. 2026)]] shows take-up is highly responsive to reducing friction (first-session take-up rose 45%→83% after simplifying enrollment), but entry ≠ sustained participation (attendance stayed intermittent).

### Why unproductive help-seeking hurts learning

The **affordance perspective** explains a key mechanism: when an interface makes help constantly and saliently available (e.g., a persistent "hint button"), it signals to learners that help is always there, creating an unintended affordance that can collapse the task into a copying exercise. Rapidly accessing bottom-out hints circumvents the active schema construction that learning requires.([[lak2026-hint-button-unproductive-use]])

### The quality of help-seeking is measurable

Two simple, interpretable indicators — premature hint requests and superficial hint reading — are computable from standard tutoring logs and are consistently associated with reduced [[learning-gains|learning gains]] across semesters, even after controlling for [[prior-knowledge|prior knowledge]]. This makes them practical for [[learning-analytics]] [[visualization|dashboards]] and real-time intervention, unlike complex machine-learned "gaming the system" detectors.([[lak2026-hint-button-unproductive-use]])

## Designing AI systems to promote productive help-seeking

### Scaffolding how students ask

Explicit training in **reasoning-focused help-seeking** — requesting stepwise hints and verification rather than final answers — produces better outcomes than uncritical reliance. In a quasi-experimental undergraduate statistics study, guided LLM access (with training on reasoning-oriented help-seeking) led to stronger independent performance and better self-assessment calibration than unrestricted LLM access. The lesson: **LLM access alone is an incomplete intervention**; the design challenge is to scaffold *how* students use AI so it functions as a reasoning partner rather than an answer-getting tool.([[guided-llm-scaffolding-independent-learning]])

Interaction cost is part of the same question. [[penquiry-pen-based-llm-qa-2026|Rhee et al. (2026)]] identify a **Referential Barrier** and an **Expressive Barrier** that stop pen-based learners from asking an [[llm|LLM]] anything at all: pointing at a diagram region or an equation term cannot be expressed in typed prose, and the effort of formulation lands exactly when a question is most fragile. Their Penquiry system resolves reference by snapping ink marks to document elements and expands sparse ink keywords into full queries through autocompletion; two iterative studies of 16 participants each found the cognitive and physical overhead of inquiry fell significantly. Whether lower asking cost produces *better* help-seeking or merely more of it is left open, and the authors propose temporally adaptive autocompletion — foundational verification early in a session, higher-level prompts later — as a route from reduced friction to [[scaffolding|fading support]] rather than a permanent crutch.
Scaffolding can also be delivered inside the task rather than before it. [[helpcoach-ai-help-seeking-scaffolding-2026|Jin et al. (2026)]] built HelpCoach, an add-on to chat interfaces that assesses how specifically a student asks for help and prompts a revision when a question is too vague, making the knowledge component and the scaffold type explicit. In a between-subjects study with 40 college students learning web programming, HelpCoach participants wrote a significantly higher proportion of specific questions in their first drafts than a pre-task-training baseline (57.3% versus 40.5%) and retained significantly more knowledge a week later (d = 1.100), while the third-task specificity difference was no longer significant (43.7% versus 32.1%). The authors caution that the retention gain cannot yet be attributed to more targeted chatbot replies.

A third lever on the cost of asking is *where* the help comes from. [[course-specific-rag-help-seeking-higher-ed-2026|Gray and Hobbs (2026)]] built Beacon, a course-specific [[rag|retrieval-augmented]] assistant grounded in one programming module's approved materials, and evaluated it with 15 computing students and four academics. 89% of participants rated its answers highly aligned with course materials and 66.7% said it supported rather than replaced their learning, though only around half to 60% reported gains in understanding or confidence. The motivation is the barrier this section documents: 62.5% of those students said they sometimes avoided asking for help when they needed it and 75% reported anxiety when a topic did not make sense, so a private, module-grounded channel is offered as a first rung before approaching a lecturer. The academics interviewed kept the counter-argument alive — they valued that Beacon withheld full solutions and worried that unrestricted tools let students skip a development stage — which is why the design earns its place by refusing to complete the work.

### Calibrating trust through transparency

A classroom experiment with 252 students found that **warning students about AI fallibility increased help-seeking** in a math tutoring system. Transparency about potential system errors improved learners' engagement with the system — connecting help-seeking to [[trust-calibration]] and [[hallucination-risk]].([[ai-fallibility-warning-help-seeking]])

### Rethinking hint and scaffold delivery

Rather than removing help, research recommends re-engineering how it is delivered:

- **Delayed hint availability** — requiring minimum engagement time or solution attempts before hints (especially bottom-out hints) are accessible.([[lak2026-hint-button-unproductive-use]])
- **Moving from *whether* to *how*** — the key design question is how to structure hint delivery aligned with productive-struggle principles, not whether to provide hints at all.([[lak2026-hint-button-unproductive-use]])

### The uptake problem in LLM tutors

Real-world students frequently **bypass a [[conversational-ai|chatbot]]'s [[scaffolding]]** — not necessarily harmfully, but often because there is a mismatch between the chatbot's pedagogical framing and the student's own learning goals. Evaluation pipelines must therefore measure not just whether a tutor scaffolds, but whether students *take up* that scaffolding, rather than assuming they will.([[rethinking-scaffolding-llm-tutors]])

## Help-seeking and self-regulated learning

Help-seeking is an integral part of [[self-regulated-learning]]: productive help-seeking requires learners to monitor understanding, judge when help is needed, and select appropriate sources. In GenAI contexts, this becomes even more demanding, since students must also exercise [[agency]] over the AI and maintain epistemic vigilance rather than deferring to it. Research in this knowledge base supports the need for [[scaffolding|scaffolds]] that promote more [[agentic-ai|agentic]] and epistemically proactive AI use, and highlights the risk of [[cognitive-offloading|Over-Reliance]] and [[cognitive-offloading]] when help-seeking degrades into unconditional answer-seeking.([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

### LLM-mediated help-seeking as a four-stage process

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et al. (2026)]] show that, in everyday STEM study, LLM help-seeking is not a single act but a layered, context-dependent process with four stages: (1) *deciding whether help is needed* — students try tasks independently first to preserve learning value; (2) *choosing whom to ask* — ChatGPT as a low-barrier first step, then peers for conceptual negotiation, then instructors for complex or high-stakes issues; (3) *determining the type of help* — from hints and explanations to scaffolding [[problem-solving]], streamlining routine work, and extending learning; and (4) *judging the help received* — exercising selective trust and verifying AI outputs against coursework or with humans. Crucially, students favored **instrumental help-seeking** (enhancing understanding) over **executive help-seeking** (obtaining solutions), a distinction that the authors propose adapting into new SRL-for-LLM measurement items.

In fully online [[english-education|composition]], availability of the tool is not the bottleneck. [[reed-resource-literacy-genai-composition-2026|Reed (2026)]] observed that students who struggled were not the ones without support but the ones who did not recognize when help was needed, which resource fit the task, or how to judge feedback once it arrived — and fluent [[generative-ai]] output is easily mistaken for authoritative support. Her response was to make help-seeking *structured* rather than merely available: required touchpoints that decode task demands, map resources with justification, compare feedback sources, and close the loop with reflection.

### Making behavioral context visible: TutorTrace

[[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]] tackle the behavioral precursor to help-seeking in [[cs-education|AI-assisted programming education]]: human tutors adapt to learners' observable behavior, not just their explicit requests, but AI tutors lack that context. **TutorTrace** is a dataset and pipeline that makes learners' behavioral context computable in real time from low-level IDE telemetry (four deployments, N=480; ~180K events, 13,633 behavioral segments, 27 metrics), deriving a taxonomy of learner activity *before* the first AI query, *between* consecutive queries, and *across* the session. This enables systems to classify whether a query reflects **guided** help-seeking (preceded by independent work) or **dependent** help-seeking (no independent work) — AUROC=.717 on held-out prediction — and to predict imminent queries (AUROC=.726). A preliminary classroom evaluation found that behavior-aware prompts reduced intervals between queries with no independent work from 50.0% to 20.7%. This connects [[learning-analytics]] telemetry to [[intelligent-tutoring|adaptive tutoring]], showing that behavioral context can be operationalized at scale to scaffold *how* students seek help rather than merely respond to their explicit questions.

## Implications for design and research

1. **Design help-seeking affordances deliberately.** Persistent, salient help buttons can enable bypass strategies; delay access and structure delivery to support [[desirable-difficulties|productive struggle]].([[lak2026-hint-button-unproductive-use]])
2. **Scaffold the help-seeking itself.** Train learners in reasoning-focused requests (stepwise hints, verification) rather than assuming access equals good use.([[guided-llm-scaffolding-independent-learning]])
3. **Use transparency to calibrate trust.** Warning about AI fallibility can increase appropriate help-seeking and engagement.([[ai-fallibility-warning-help-seeking]])
4. **Measure uptake, not just scaffolding.** Evaluate whether students actually engage with pedagogical framing, not only whether the tutor provides it.([[rethinking-scaffolding-llm-tutors]])
5. **Support monitoring and agency.** Help-seeking scaffolds should strengthen [[metacognition]] and [[self-regulated-learning]], guarding against [[cognitive-offloading|Over-Reliance]].

## Connected Concepts

- [[learners]] — Learners: the umbrella for the learner-side concepts
- [[self-regulated-learning]]
- [[metacognition]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[cognitive-offloading]]
- [[learning-analytics]]
- [[k-12]]
- [[higher-ed]]
- [[socratic-method]]
- [[pedagogical-agent]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[affective-tutoring]]
- [[feedback]]
- [[active-learning]]
- [[agentic-ai]]

## Connected Articles

- [[penquiry-pen-based-llm-qa-2026]] — Penquiry: A Pen-based Interactive In-situ Q&A System Leveraging LLMs
- [[tutortrace-learner-behavioral-states-2026]]
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-mediated help-seeking in STEM: layered, instrumental, and verified
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[lak2026-hint-button-unproductive-use]] — Premature hint requests and superficial hint reading predict lower learning gains in an ITS
- [[ai-fallibility-warning-help-seeking]] — Warning about AI fallibility increases help-seeking in a math tutoring system
- [[regulating-ai-tutor-adolescent-srl]] — The intention-behavior gap in adolescent GenAI help-seeking and self-regulated learning
- [[guided-llm-scaffolding-independent-learning]] — Guided LLM scaffolding improves reasoning-focused help-seeking and independent learning
- [[rethinking-scaffolding-llm-tutors]] — The scaffolding/student-uptake mismatch in real-world LLM tutor deployments
- [[surfacing-isolated-learners]] — Using AI to surface learners who need help, mediating teacher-student feedback
- [[halani-designing-for-reach-2026]] — Designing for reach: the student alone with AI and access to help
- [[uneven-impact-generative-ai-student-learning-2026]] — Early reliance: consulting GenAI before independent thought, search, or an instructor predicts both benefit and harm (Manikonda et al. 2026)
- [[reed-resource-literacy-genai-composition-2026]] — Resource literacy in online composition: the bottleneck is recognizing when help is needed (Reed 2026)
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Reducing Barriers to Academic Support: Evaluating a Course-Specific RAG System for Addressing Help-Seeking Disparities in Higher Education
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Adaptive Scaffolding Needs Contingency: An AI Tutor That Escalates and Fades on What the Learner Does
- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: Scaffolding Targeted AI Help-Seeking During Problem-Solving
