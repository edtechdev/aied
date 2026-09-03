---
title: Intelligent Tutoring
created: "2026-08-09T07:47:05-04:00"
updated: "2026-09-03T15:00:00-04:00"
connected_faqs: [ai-agents-support-students-instructors, developing-ai-tutor]
type: concept
tags: [intelligent-tutoring, adaptive-learning, scaffolding, student-modeling, knowledge-tracing, feedback, higher-ed, k-12, stem-education]
discipline: [stem education]
level: [higher ed, k 12]
confidence: high
---

> **AI tutoring / intelligent tutoring** — the use of AI to provide personalized, adaptive, scalable instructional support: from classical Intelligent Tutoring Systems (ITS) that model student knowledge, adapt instruction, and scaffold [[problem-solving]], to conversational and agent-based tutors built on [[llm|LLMs]]. Effectiveness hinges on [[pedagogy|pedagogical]] design ([[scaffolding]], feedback quality, autonomy balance) rather than the model alone — see [[measuring-llm-tutors-teach-vs-solve]] and [[socratic-method]].

## Questions to Consider

- An AI tutor's effectiveness is said to hinge on pedagogical design — scaffolding, feedback quality, the balance of autonomy and guidance — rather than on the underlying model. If you had to pick, which design choice most determines whether a student actually learns?
- Classical ITS are praised for precision and transparency but criticized for inflexibility, while LLM tutors are flexible but can hallucinate or bypass learning. Where do you think the right balance lies, and why?
- Large-scale field evidence found students tried an AI tutor but rarely used it productively — engaging it in only a fraction of their mistake sessions, often with bare answers. Why might students get access to a powerful tutor yet not use it in ways that help them learn?
- The page contrasts traditional ITS that model a learner and adapt instruction with open-ended conversational tutors. What is gained and lost when a tutor can hold a natural conversation but doesn't know exactly why it made a decision?
- One study found AI created a 'productive slowdown' — more time per question — but only improved learning when embedded in a mastery workflow that made mistakes consequential. What does that suggest about structuring effort so it pays off?
- If hint design can inadvertently enable students to bypass learning, what would a well-designed hint system look like that supports struggle without giving away the answer?

## Introduction

AI tutoring encompasses the use of artificial intelligence — particularly [[llm|large language models]] and structured Intelligent Tutoring Systems — to provide personalized, adaptive, and scalable instructional support to learners. AI tutors take many forms: conversational tutors that engage in Socratic dialogue, scaffolded feedback systems that guide problem-solving, [[adaptive-learning|adaptive learning platforms]] that personalize content sequencing, and agent-based tutors that maintain long-term [[student-modeling|learner models]]. The effectiveness of AI tutoring depends critically on pedagogical design choices — scaffolding, [[ai-feedback-quality|feedback quality]], and the balance between [[agency|autonomy]] and guidance — rather than on the underlying model alone.

Historically, **[[mishra-control-vs-agency-history-2025|Mishra et al.]]** locate ITS within AIED's lineage from 1960s-70s expert systems and Anderson's ACT/ACT-R cognitive tutors, whose structured control contrasted with Papert's [[constructivist|constructionism]].

## ITS in the learner-modeling family

Intelligent tutoring is the classic *application-side* member of the [[student-modeling|learner modeling and adaptive instruction]] family. Its canonical architecture — domain model, [[student-modeling|student model]], and pedagogical model — is precisely the "model a learner, then adapt instruction" pipeline the family describes. ITS consume the learner representations produced by [[knowledge-tracing]] and [[cognitive-diagnosis]] to select problems and scaffold guidance, which is why tutoring is so tightly coupled to those modeling methods. Within the family, ITS sits alongside [[adaptive-learning|adaptive learning]] (the real-time adaptation mechanism) and [[personalized-learning|personalized learning]] (the broader goal) as the platforms that turn learner models into instruction.

## ITS vs. LLM-based tutoring

The emergence of [[llm|LLMs]] has created a productive tension in the tutoring field. Traditional Intelligent Tutoring Systems (ITS) offer precision and transparency — you know exactly why the system made a particular decision — but lack flexibility. LLM tutors offer natural dialogue and broad knowledge but can hallucinate, over-scaffold, or bypass learning entirely. Modern [[research-methods-aied|research]] increasingly explores **hybrid approaches** that combine structured ITS components with LLM flexibility. [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] demonstrate this concretely in the Apprentice Tutor College Algebra ITS: supplying GPT-4 the tutor's interface structure and Bayesian [[knowledge-tracing]] skill estimates within the prompt lifted logical-error diagnosis from 40% to 81% on factoring (and error identification overall to 87.8%) and produced ~66% error-targeted hints — direct evidence that embedding an LLM in an ITS's structured framework grounds generation, curbs hallucinated diagnoses, and yields context-aware corrective feedback, even though roughly a third of the hints remained too general, incorrect, or answer-revealing.

Intelligent Tutoring Systems represent one of the oldest and most researched areas of [[ai-education|AI in education]]. Unlike general-purpose LLM tutors, ITS traditionally use structured approaches: domain models (what to teach), [[student-modeling|student models]] (what the learner knows), and pedagogical models (how to teach). These components enable fine-grained tracking of student progress, misconception diagnosis, and adaptive sequencing.

### Key ITS research

- **[[educlaw-bench-pedagogical-llm-agents-2026|EduClaw-Bench]]** evaluates pedagogical LLM agents using [[simulating-students|simulated learners]] grounded in [[knowledge-tracing]], finding that tutoring quality depends on both the base model and adapter design.
- **[[lak2026-hint-button-unproductive-use|Hint button research]]** shows that traditional ITS hint design can inadvertently enable bypass strategies, calling for more sophisticated [[scaffolding]] approaches.
- **[[deeptutor|DeepTutor]]** provides a fully [[open-source]] agentic tutoring framework with citation-grounded tutoring and difficulty-calibrated [[automated-question-generation|question generation]].
- **[[huang-interpretable-knowledge-tracing-2026|Interpretable Knowledge Tracing]]** addresses the opacity problem by producing interpretable cognitive quantities from LLM logits.
- **Engagement and structure, not capability, are the binding constraints (large-scale field evidence):** [[one-click-away-khanmigo-two-year-school-experiment-2026|Khanmigo (Oreopoulos & Low 2026)]] — a two-year cluster [[rct]] in 18 middle schools — found 96% of students tried the AI tutor but the median engaged it in only ~17% of mistake sessions (mostly bare answers or prompt clicks), so gains (~0.06–0.08 SD) matched practice without AI. [[making-ai-tutoring-productive-mastery-math-2026|NUMI (Oreopoulos et al. 2026)]] found AI created a "productive slowdown" — more time per question and improved post-mistake recovery — but only reliably improved delayed learning when embedded in a mastery workflow that made mistakes consequential. The lesson: AI tutoring's value depends on **getting students to use it productively** and structuring it so effort pays off, more than on raw model capability.([[virtual-tutoring-computer-assisted-learning-takeup-2026]])
- **Outcome-based knowledge tracing for OBE tutors.** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] trace student mastery of Outcome-Based-Education course outcomes with a recurrent model that replaces learned concept relations with [[curriculum-design|curriculum]]-validated OBE "affinity mappings" between course and program outcomes and adds a Memory Augmented Neural Network for cross-outcome impact. It reached 89.81% AUC on live engineering-program data, beating DKT, DKVMN, EKT, and SimpleKT baselines — a mastery signal aligned to a program's own outcomes that can drive adaptive problem selection in outcome-based tutoring.
- **Validate mastery models on future sessions, not retrospective fit.** The mastery estimates an ITS uses to select problems may not generalize across time: [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan, and Carvalho (2025)]] found that BKT, BKT-with-Forgetting, and AFM reproduce learning trends only when fit retroactively to all sessions of a successive-relearning dataset — but under **time-based cross-validation** (training on one session to predict the next, the actual tutoring setting) they overestimate performance by 47–58%, fail to capture the spacing effect, and can mis-order practice conditions. Tutors relying on such tracers should be evaluated walk-forward and consider retention interval and between-session forgetting rather than assuming mastery persists.
- **Diagnosing mistakes on unstructured, handwritten-solution problems.** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur (Yin et al. 2026)]] extends ITS-style feedback to Calculated Formula Questions in an Engineering Economics course, a domain where pen-and-paper solutions lack the structured digital data that previous AI tutoring work relied on. Rather than a general-purpose LLM, each question gets its own dedicated [[machine-learning|XGBoost]] "solution diagnosis backbone" — trained on curated, random-masking-augmented graded submissions to predict instructor rubric mistake labels from students' submitted numbers alone (precision 0.81, recall 0.79) — paired with a dialogue-based interaction that iteratively requests intermediate answers only when diagnosis confidence drops below a 0.8 threshold. It is a concrete case of the knowledge base's principle that a knowledge-grounded classifier can handle solution diagnosis even where full written solutions are unavailable.

### Key ITS concepts

- **[[knowledge-tracing]]** — modeling what a student knows over time (Bayesian, deep learning, IRT-based)
- **[[cognitive-diagnosis]]** — fine-grained assessment of which knowledge components and [[misconceptions]] a learner holds; the assessment-side counterpart to [[knowledge-tracing]] that feeds the tutor's pedagogical decision
- **[[student-modeling]]** — broader learner representation including affect, engagement, and misconceptions
- **[[adaptive-learning]]** — systems that personalize content sequencing based on learner state
- **[[scaffolding]]** — providing just enough support to enable progress without giving away answers
- **[[desirable-difficulties|productive struggle]]** — letting students wrestle with difficulty rather than over-helping
- **[[feedback|feedback loops]]** — ITS feedback cycles that diagnose, guide, and verify

### Historical context

The ITS field has produced landmark systems (Cognitive Tutors, Andes, AutoTutor) and continues to evolve. The [[zerkouk-comprehensive-review-its-2025|Zerkouk et al. comprehensive ITS review]] catalogs this evolution. The tension between structured ITS and open-ended LLM tutoring is explored in [[correct-answer-trap-ai-tutor|the correct answer trap]] research and [[rethinking-scaffolding-llm-tutors|rethinking scaffolding for LLM tutors]].

### AI tutoring with LLMs: practical guidance

For instructors deploying AI tutors and developers building them, the knowledge base's findings translate into concrete practice:

**Evaluate tutors on whether they teach, not just solve.** A model that tops a solving leaderboard is not necessarily a good tutor — task-solving ability and learning-supportive behavior correlate only partially (r ≈ 0.42), and several models shift rank when scored on pedagogy. Report and scrutinize **solving and pedagogy scores separately**, and prioritize tutors that score on guiding questions, calibrated hints, and non-disclosive scaffolding over those that produce fast answers.([[measuring-llm-tutors-teach-vs-solve]])([[ai-tutoring-quality-k12-methodologies-2026]])

**Design for pedagogical structure, not frequency.** The educational payoff of AI tutoring depends on *how* the tool is used and designed, not on how often it is used. Instructor-designed tutors scoped to course objectives, learner proficiency, and a curated knowledge base outperform unstructured general-purpose [[conversational-ai|chatbot]] use.([[instructor-designed-ai-tutors-foreign-language-sdt-2026]])

**Use iterative live evaluation to keep improving.** Because LLMs are opaque, treat evaluation as the engine of improvement: instrument a small set of quality and [[student-engagement|engagement metrics]], run live experiments on models, [[prompt-engineering|prompting]], personalization, and agents, and let data drive changes — the same discipline Khan Academy applies to its [[k-12]] tutor (Khanmigo).([[ai-tutoring-quality-k12-methodologies-2026]])

**Support the learner's autonomy, competence, and relatedness.** AI tutors work best when they feel like a safe, structured practice space rather than an answer machine. Provide immediate, nonjudgmental [[feedback]]; scope the tutor to the learner's level so competence is achievable; and preserve learner agency by keeping the tutor a complement to (not a substitute for) other instruction.([[instructor-designed-ai-tutors-foreign-language-sdt-2026]])

**Guard against answer disclosure.** The central failure mode of LLM tutoring is giving the answer away, which inflates immediate performance while undermining durable learning. Use Socratic prompting, calibrated hints, and non-disclosive scaffolding — and measure outcomes on unassisted, [[transfer-of-learning|transfer]] tasks, not just in-tool performance.([[measuring-llm-tutors-teach-vs-solve]])([[socratic-method]])

**Separate diagnosis from feedback.** LLM tutors reliably confirm correct steps but over-reject valid-but-suboptimal reasoning and over-validate incorrect solutions — and accurate diagnosis does not reliably yield actionable feedback.([[yasir-llm-tutoring-agents-2026]]) The coupling also cuts the other way: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig et al. (2025)]] found GPT-4 still crafted relevant, general-but-correct feedback ~74% of the time even after misdiagnosing an error (by restating the concept or expected answer format), yet almost all factually incorrect feedback followed a wrong diagnosis — so error identification remains the crux of actionable tutoring. A hybrid architecture works best: let a knowledge-grounded classifier handle solution diagnosis while the LLM focuses on open-ended scaffolding and dialogue.

### AI tutoring as a spectrum of relational intensity

A unifying lens from [[turano-ai-tutoring-not-a-monolith-2026|the Stanford SCALE / NSSA brief (Turano et al. 2026)]] reframes AI tutoring as **not a monolith but a spectrum** defined by *relational intensity* — the depth and consistency of the human connection between student and tutor. The brief maps models from fully human-led tutoring (in-person or remote), through **human-led with AI support** (AI assists the tutor behind the scenes) and **AI-led with human support** (a human oversees and intervenes), to **AI-only tutoring** (no direct human oversight). The central finding: as direct human relationships decrease, the evidence base becomes thinner, and unresolved questions accumulate about student safety, developmental impact, and long-term efficacy.

- **AI augments, does not replace, high-impact tutoring.** The brief's core message is that AI is best used to *enhance tutor effectiveness and educator capacity* within high-impact tutoring (regular school-day sessions, small-group ratios ≤ 1:4, well-trained consistent tutors, data-driven instruction, vetted materials, strong student-tutor relationships) — not to substitute for the human-led relationship that drives [[learning-gains|learning gains]]. This aligns with the knowledge base's broader finding that pedagogically designed AI tutors outperform general-purpose chatbots ([[stanford-evidence-base-ai-k12-2026|Stanford evidence base]], [[genai-higher-education-systematic-review-2026|umbrella review]]).
- **Dosage, not model capability, is the binding constraint.** [[turano-ai-tutoring-not-a-monolith-2026|The brief]] reports that AI-led tutoring inherits the dosage evidence base (~90 minutes weekly) only when scheduled, supervised, and protected within the school day; in a study of 181,000 students on a supplemental math platform, only 5% reached the recommended minutes and 41% never logged on, with teacher/school/district factors explaining 57% of usage variance. This converges with the field-experiment evidence above ([[one-click-away-khanmigo-two-year-school-experiment-2026|Khanmigo]], [[making-ai-tutoring-productive-mastery-math-2026|NUMI]]) that engagement and integration, not raw capability, determine whether AI tutoring helps.
- **Human oversight improves engagement and alignment but not dosage.** The brief's RCTs found human check-ins raised elementary students' engagement with an AI platform but did not reach the dosage associated with gains nor improve reading achievement. The practical implication: schedule and supervise AI tutoring on the same terms as human-led tutoring, and design for enforcement of engagement — the opt-in requirement an on-device AI tutor reintroduces is exactly what live school-day tutoring eliminates.
- **The relationship is the irreducible element.** [[turano-ai-tutoring-not-a-monolith-2026|The brief]] emphasizes that AI does not yet replicate human relationships, and that relationship-building (especially consistent tutor-student pairings) improves engagement, attendance, motivation, and outcomes. Developers describe using AI's strengths rather than replacing relationships — a design stance echoed in [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] and [[kar-mathbuddy-affective-math-tutoring-2025|affective tutoring]] research.
- **Safety and privacy are non-negotiable guardrails.** For direct-to-student AI, the brief calls for strict student data privacy safeguards, [[guardrails]] on student safety, and attention to the depth of unmonitored interaction — open questions remain about AI companions' effects on developing minds and prosocial development.

This relational-intensity framing is the "not a monolith" counterpoint to the field: evaluating any AI tutor should begin by asking *which conditions of effective tutoring it reproduces, changes, or drops* — rather than asking whether "AI tutoring works" in the abstract. It ties the tutoring page to [[k-12]] policy ([[educational-policy-ai]]), [[privacy]], [[pedagogical-safety]], and the human-in-the-loop concerns throughout.

### Practical design and development guidance

**Design for learning, not just performance.** The strongest causal finding is that unguarded AI tutors raise assisted practice performance but *reduce* unassisted learning — the [[ai-misuse-learning-harm|performance–learning gap]]. Guardrail against answer-copying by scaffolding **hints instead of answers** (require a student attempt before revealing output), and verify gains on unassisted, closed-book measures rather than in-tool performance.([[generative-ai-guardrails-harm-learning]])([[genai-performance-vs-learning]])

**Make hints genuinely productive, not bypassable.** Classic hint designs can enable "button-through" strategies that skip learning. Prefer hints that reveal reasoning steps incrementally (Socratic prompting) over hints that directly supply the next answer, and preserve productive struggle rather than over-helping.([[lak2026-hint-button-unproductive-use]])([[rethinking-scaffolding-llm-tutors]])

**Keep the [[human-in-the-loop-ai|human in the loop]].** Let teachers author or curate the problem sets and misconception prompts the tutor draws on, and surface the tutor's reasoning so its decisions are auditable. Interpretable [[knowledge-tracing]] and explicit, external didactic layers make LLM tutor behavior traceable and reproducible.([[huang-interpretable-knowledge-tracing-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Model the learner, not just the dialogue.** Attach structured [[student-modeling]] and [[knowledge-tracing]] components to LLM dialogue so the system can adapt difficulty and diagnose misconceptions from evidence rather than responding fluently but blindly — quality depends on both the base model and how it is adapted.([[educlaw-bench-pedagogical-llm-agents-2026]])

**Start from open tooling where possible.** Open-source agentic tutoring frameworks (e.g. [[deeptutor|DeepTutor]]) lower the barrier to a citation-grounded, difficulty-calibrated tutor you can inspect and extend.([[deeptutor]])

Effective tutoring requires continual adaptation: [[zhang-tutormoments-2026|Zhang et al. (2026)]] evaluate whether LM tutors adapt to learners' evolving understanding at teacher-annotated decision points. They find frontier models default toward over-helpfulness and rarely push for rigor, and that evaluation-aware prompting improves but does not fully solve adaptivity. A systematic view of the RL-driven branch of this adaptation comes from [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper & Lugrin (2025)]], whose review of 89 RL-in-education studies finds classical RL policies more consistently effective than Deep RL and RL adaptation delivering significant gains more often for guidance-related tasks (hints, [[feedback]]) than for content scheduling — evidence that how an ITS adapts scaffolding matters as much as which algorithm it uses.

- **[[deceptive-overgeneralization-adaptive-learning-2026|Deceptive overgeneralization (An et al. 2026)]]** shows ITS mastery stopping rules (BKT, 95% threshold) can end practice before learners learn *when to withhold* a skill: learners who overgeneralized misapplied actions on first "do-not-act" items at 61.5%–100%, and targeted refrain-practice with constraint-naming [[feedback]] reduced this to near-floor. Correctness-based mastery inference is necessary but not sufficient for ITS adaptivity.
- **Graph-based ITS for dynamic domains.** [[graph-its-adaptive-algorithms-2026|A graph-based intelligent tutoring system]] combines an Evolving Knowledge Space Graph with [[generative-ai|generative AI]] content creation and Bayesian knowledge propagation — which showed the highest knowledge gains — supporting adaptive learning in dynamic curricula.
- **Rule-integrated LLM tutoring for procedural domains.** Looi, Liu, and Sun (2026) tackle the inconsistency and pedagogical opacity of LLM tutors in primary [[math-education|mathematics]] through a design science study of a rule-guided system organized around a three-layer architecture — *diagnosis → intent selection → constrained response generation*. They formalize the distinction between **rule-guided scaffolding** (governed by auditable, replicable rules) and **ad-hoc scaffolding** (helpful moves difficult to audit or replicate). Evaluated via persona-based simulated dialogues and a classroom pilot with 40 Grade 5 students, rule-guided scaffolding improved interactional consistency, reduced premature answer-giving and early closure, and sustained cognitive engagement — while the classroom pilot surfaced interactional complexities, fragmented inputs, and attentional fluctuations that [[simulation]] missed. This is a concrete blueprint for [[guardrails|guardrailing]] [[llm|LLM]] tutors in well-defined procedural domains.
- **Multi-agent tutoring and [[automated-assessment|automated assessment]].** Multi-agent tutoring systems are being benchmarked with synthetic, trace-based evaluation. ASTRA supports alone-tutor, pair-tutor, and pair-multiagent configurations with socially differentiated agents, enabling reproducible analysis of interaction and participation balance in introductory programming. In parallel, context-aware prompting automates coding of [[collaborative-learning|collaborative problem-solving]] skills from process data, supporting large-scale tutoring assessment.

## Connected Concepts

- [[scaffolding]]
- [[adaptive-learning]]
- [[cognitive-diagnosis]]
- [[llm]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[socratic-method]]
- [[personalized-learning]]
- [[self-regulated-learning]]
- [[generative-ai]]
- [[ai-education]]
- [[metacognition]]
- [[pedagogical-safety]]
- [[privacy]]
- [[educational-policy-ai]]
- [[guardrails]]
- [[k-12]]

## Connected Articles
- [[mindful-llm-math-tutoring-2026]] — Beyond Problem Solving: Large Language Models for Emotional and Reflective Support in Mathematics Learning
- [[ai-teammate-task-distribution-medical-training-2026]] — SCAN framework: rethinking AI task distribution in medical training (Tsim et al. 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Deceptive overgeneralization: adaptive mastery can stop practice before learners know when to withhold an action (An, McLaren & Stamper 2026)
- [[tutortrace-learner-behavioral-states-2026]]
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know (Stanford SCALE/NSSA brief)
- [[banihashem-ai-srl-systematic-mapping-review-2025]]
- [[mishra-control-vs-agency-history-2025]] — Traces ITS lineage from 1960s-70s expert systems to cognitive tutors
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[yasir-llm-tutoring-agents-2026]] — Benchmarking LLM feedback agents with KG ground truth (Yasir et al. 2026)
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]] — Instructor-Designed AI Tutors in University Foreign Language Education (Self-Determination Theory)
- [[measuring-llm-tutors-teach-vs-solve]] — Measuring Whether LLM Tutors Teach or Solve
- [[ai-tutoring-quality-k12-methodologies-2026]] — Methodologies for Improving the Quality of AI Tutoring in K-12 Education
- [[zhang-tutormoments-2026]] — When Help is Unhelpful: evaluating AI tutors for productive struggle
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[stanford-evidence-base-ai-k12-2026]] — Tutoring-specific vs. general-purpose AI: evidence on durable learning outcomes
- [[hazra-safetutors-pedagogical-safety-2026]] — SafeTutors and pedagogical safety
- [[kar-mathbuddy-affective-math-tutoring-2025]] — MathBuddy affective math tutoring
- [[chudziak-ai-math-tutoring-platform]] — Multi-agent AI math tutoring platform (Chudziak & Kostka 2025)
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[learnlm-improving-gemini-learning]] — LearnLM: improving Gemini for learning
- [[teachlm-post-training-llms-education]] — TeachLM: post-training LLMs with authentic learning data
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education
- [[conversational-agents-novice-programmers-scoping-2025]] — Scoping review of conversational agents for novice programmers
- [[li-dbagent-llm-educational-agent-cs-2026]] — LLM-based educational agent (DBagent) in CS education
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[cogevolution-student-cognitive-evolution-agent-2026]] — CogEvolution: generative agent simulating students' cognitive evolution
- [[tact-pedagogically-adaptive-esl-tutoring]] — TACT pedagogically adaptive ESL tutoring
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of Types of Inquiries in Student-AI Interaction
- [[ai-pedagogical-accompaniment-amico]] — AI pedagogical accompaniment (AMICO)
- [[ai-metacognition-stem-review]] — AI and metacognition in STEM
- [[llm-adaptive-programming-error-explanations-2026]] — LLM adaptive explanations of programming errors
- [[burneo-can-edtech-close-learning-gaps-2026]] — Meta-analytic evidence on AI tutoring (~0.12 sd)
- [[liu-emerging-tech-tefl-review-2026]] — ITS among EFL emerging technologies

- [[rule-integrated-llm-tutoring-primary-math-2026]] — Rule-guided vs ad-hoc scaffolding in an LLM tutoring system for primary mathematics (Looi et al. 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Smart-classroom model and D-T-E loop improving M.Ed. instructional design proficiency in mathematics (Zhu et al. 2026)
- [[ai-modelling-problem-generation-platform-2026]] — AI-powered platform generating mathematical modelling problems (ADDIE, RAG)
- [[simulation-assisted-drone-learning-stem-2026]] — Simulation-assisted drone learning with teacher-AI co-designed scaffolds
- [[studentsim-llm-student-simulators]] — StudentSim: Training LLM-based Student Simulators
- [[socratic-nuclear-ai-learning]] — Socrates went Nuclear: Comparing Interaction Strategies for AI in Learning
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
