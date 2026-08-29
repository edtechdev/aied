---
title: Help-Seeking
created: "2026-08-06T10:20:04-04:00"
updated: "2026-08-28T09:10:00-04:00"
type: concept
tags: [help-seeking, intelligent-tutoring, student-experience, metacognition, higher-ed, llm, generative-ai, ai-literacy, k-12, scaffolding, self-regulated-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: high
---

> **Help-Seeking** — the learner's process of recognizing a need for assistance and strategically requesting it, and how that process plays out in AI-supported learning environments. In AI in education, help-seeking is central to whether AI tools support or undermine learning: the *quality* of help-seeking (when, how, and what learners ask for) strongly shapes outcomes, and AI tutors, hints, and pedagogical agents are designed precisely to elicit productive help-seeking rather than answer-seeking.^[[lak2026-hint-button-unproductive-use]]^[[ai-fallibility-warning-help-seeking]]

Help-seeking is a well-established construct in learning research, closely tied to [[self-regulated-learning]] and [[metacognition]]: it requires learners to monitor their own understanding, recognize a gap, decide help is needed, and formulate an effective request. With the rise of generative AI tutors, help-seeking has taken on new importance — and new failure modes. Learners often *intend* to use AI for learning but default to asking for direct answers, a gap that research in this wiki documents across domains and age groups.^[[regulating-ai-tutor-adolescent-srl]]^[[guided-llm-scaffolding-independent-learning]]

## Productive vs. unproductive help-seeking

The central distinction in the literature is between help-seeking that supports learning and help-seeking that bypasses it.

### Unproductive help-seeking behaviors

Research in this wiki identifies concrete, observable patterns of unproductive help-seeking, especially in [[intelligent-tutoring|intelligent tutoring systems]]:

- **Premature hint requests** — requesting help before making any solution attempt. Even uncertain students learn more by attempting first.^[[lak2026-hint-button-unproductive-use]]
- **Superficial hint reading** — advancing through hints too rapidly to read them (flagged at a ~4 words/second benchmark), often jumping straight to the bottom-out hint that reveals the answer.^[[lak2026-hint-button-unproductive-use]]
- **Answer-seeking over learning-seeking** — asking the AI to produce the answer rather than to explain or guide. In a study of 98 Grade-9 students using a GenAI tutor, interactions were dominated by instrumental requests with almost no monitoring or evaluation of their own learning — despite students having chosen scaffolded support beforehand. This **intention-behavior gap** was associated with *lower* post-test performance and higher extraneous cognitive load.^[[regulating-ai-tutor-adolescent-srl]]
- **Struggling students are least likely to seek help unprompted** — the engagement side of help-seeking. In [[one-click-away-khanmigo-two-year-school-experiment-2026|a two-year Khanmigo RCT (Oreopoulos & Low 2026)]], even with free access and mandatory practice time, the median struggling student messaged the AI tutor in only ~17% of mistake sessions, mostly with bare answers or clicks — consistent with the economics-of-education finding that initiative-dependent interventions reach fewest of the students who would benefit most. [[virtual-tutoring-computer-assisted-learning-takeup-2026|TWiK (Oreopoulos et al. 2026)]] shows take-up is highly responsive to reducing friction (first-session take-up rose 45%→83% after simplifying enrollment), but entry ≠ sustained participation (attendance stayed intermittent).

### Why unproductive help-seeking hurts learning

The **affordance perspective** explains a key mechanism: when an interface makes help constantly and saliently available (e.g., a persistent "hint button"), it signals to learners that help is always there, creating an unintended affordance that can collapse the task into a copying exercise. Rapidly accessing bottom-out hints circumvents the active schema construction that learning requires.^[[lak2026-hint-button-unproductive-use]]

### The quality of help-seeking is measurable

Two simple, interpretable indicators — premature hint requests and superficial hint reading — are computable from standard tutoring logs and are consistently associated with reduced learning gains across semesters, even after controlling for prior knowledge. This makes them practical for [[learning-analytics]] dashboards and real-time intervention, unlike complex machine-learned "gaming the system" detectors.^[[lak2026-hint-button-unproductive-use]]

## Designing AI systems to promote productive help-seeking

### Scaffolding how students ask

Explicit training in **reasoning-focused help-seeking** — requesting stepwise hints and verification rather than final answers — produces better outcomes than uncritical reliance. In a quasi-experimental undergraduate statistics study, guided LLM access (with training on reasoning-oriented help-seeking) led to stronger independent performance and better self-assessment calibration than unrestricted LLM access. The lesson: **LLM access alone is an incomplete intervention**; the design challenge is to scaffold *how* students use AI so it functions as a reasoning partner rather than an answer-getting tool.^[[guided-llm-scaffolding-independent-learning]]

### Calibrating trust through transparency

A classroom experiment with 252 students found that **warning students about AI fallibility increased help-seeking** in a math tutoring system. Transparency about potential system errors improved learners' engagement with the system — connecting help-seeking to [[trust-calibration]] and [[hallucination-risk]].^[[ai-fallibility-warning-help-seeking]]

### Rethinking hint and scaffold delivery

Rather than removing help, research recommends re-engineering how it is delivered:

- **Delayed hint availability** — requiring minimum engagement time or solution attempts before hints (especially bottom-out hints) are accessible.^[[lak2026-hint-button-unproductive-use]]
- **Moving from *whether* to *how*** — the key design question is how to structure hint delivery aligned with productive-struggle principles, not whether to provide hints at all.^[[lak2026-hint-button-unproductive-use]]

### The uptake problem in LLM tutors

Real-world students frequently **bypass a chatbot's [[scaffolding]]** — not necessarily harmfully, but often because there is a mismatch between the chatbot's pedagogical framing and the student's own learning goals. Evaluation pipelines must therefore measure not just whether a tutor scaffolds, but whether students *take up* that scaffolding, rather than assuming they will.^[[rethinking-scaffolding-llm-tutors]]

## Help-seeking and self-regulated learning

Help-seeking is an integral part of [[self-regulated-learning]]: productive help-seeking requires learners to monitor understanding, judge when help is needed, and select appropriate sources. In GenAI contexts, this becomes even more demanding, since students must also exercise agency over the AI and maintain epistemic vigilance rather than deferring to it. Research in this wiki supports the need for [[scaffolding|scaffolds]] that promote more agentic and epistemically proactive AI use, and highlights the risk of [[cognitive-offloading|Over-Reliance]] and [[cognitive-offloading]] when help-seeking degrades into unconditional answer-seeking.^[[regulating-ai-tutor-adolescent-srl]]^[[guided-llm-scaffolding-independent-learning]]

### LLM-mediated help-seeking as a four-stage process

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et al. (2026)]] show that, in everyday STEM study, LLM help-seeking is not a single act but a layered, context-dependent process with four stages: (1) *deciding whether help is needed* — students try tasks independently first to preserve learning value; (2) *choosing whom to ask* — ChatGPT as a low-barrier first step, then peers for conceptual negotiation, then instructors for complex or high-stakes issues; (3) *determining the type of help* — from hints and explanations to scaffolding problem-solving, streamlining routine work, and extending learning; and (4) *judging the help received* — exercising selective trust and verifying AI outputs against coursework or with humans. Crucially, students favored **instrumental help-seeking** (enhancing understanding) over **executive help-seeking** (obtaining solutions), a distinction that the authors propose adapting into new SRL-for-LLM measurement items.

### Making behavioral context visible: TutorTrace

[[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]] tackle the behavioral precursor to help-seeking in [[cs-education|AI-assisted programming education]]: human tutors adapt to learners' observable behavior, not just their explicit requests, but AI tutors lack that context. **TutorTrace** is a dataset and pipeline that makes learners' behavioral context computable in real time from low-level IDE telemetry (four deployments, N=480; ~180K events, 13,633 behavioral segments, 27 metrics), deriving a taxonomy of learner activity *before* the first AI query, *between* consecutive queries, and *across* the session. This enables systems to classify whether a query reflects **guided** help-seeking (preceded by independent work) or **dependent** help-seeking (no independent work) — AUROC=.717 on held-out prediction — and to predict imminent queries (AUROC=.726). A preliminary classroom evaluation found that behavior-aware prompts reduced intervals between queries with no independent work from 50.0% to 20.7%. This connects [[learning-analytics]] telemetry to [[intelligent-tutoring|adaptive tutoring]], showing that behavioral context can be operationalized at scale to scaffold *how* students seek help rather than merely respond to their explicit questions.

## Implications for design and research

1. **Design help-seeking affordances deliberately.** Persistent, salient help buttons can enable bypass strategies; delay access and structure delivery to support productive struggle.^[[lak2026-hint-button-unproductive-use]]
2. **Scaffold the help-seeking itself.** Train learners in reasoning-focused requests (stepwise hints, verification) rather than assuming access equals good use.^[[guided-llm-scaffolding-independent-learning]]
3. **Use transparency to calibrate trust.** Warning about AI fallibility can increase appropriate help-seeking and engagement.^[[ai-fallibility-warning-help-seeking]]
4. **Measure uptake, not just scaffolding.** Evaluate whether students actually engage with pedagogical framing, not only whether the tutor provides it.^[[rethinking-scaffolding-llm-tutors]]
5. **Support monitoring and agency.** Help-seeking scaffolds should strengthen [[metacognition]] and [[self-regulated-learning]], guarding against [[cognitive-offloading|Over-Reliance]].

## Connected Concepts

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
