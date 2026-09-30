---
connected_resources: [openmaic]
title: Simulation
created: "2026-08-12T21:20:35-04:00"
updated: "2026-09-30T09:59:35-04:00"
type: concept
pedagogy: [active-learning, experiential-learning]
technology: [adaptive-learning, pedagogical-agent, reinforcement-learning]
confidence: high
reviewed_by: [editor]
---

> **Simulation** — the use of modeled environments, agents, or scenarios to support learning through practice and feedback in contexts that are safe, repeatable, and often otherwise inaccessible. Simulations let learners act, make errors, and see consequences without real-world cost, and are increasingly powered by AI and agent-based modeling.

## Questions to Consider

- Recall a time you learned something by doing it in a safe, low-stakes environment — a lab, a mock exercise, a flight or game simulator. What made that practice effective, and what might be lost if the simulation were too realistic or not realistic enough?
- The page argues simulations let learners make errors and see consequences 'without real-world cost.' What do you think is gained, and what might be lost, when the cost of a mistake drops to nearly zero?
- If an AI can simulate patients, students, or conversation partners for practice, where would you draw the line between valuable rehearsal and practice that fails to transfer to real human interaction?
- Why might a learner's awareness of a simulation's limits — its [[trust|trustworthiness]] — matter as much as how faithfully it models reality?
- How could the same simulation technology that helps someone learn also mislead them, and what would you need to know to tell those two outcomes apart?

## Introduction

Simulation sits at the core of [[experiential-learning|experiential]] and [[active-learning]] [[pedagogy|pedagogies]]. It provides the deliberate practice, [[productive-failure|productive failure]], and [[feedback|feedback loops]] that build skill and judgment. AI has transformed simulation in two ways: it powers more realistic and adaptive simulated environments, and it generates [[simulating-students|simulated learners]], patients, or interlocutors that make practice scalable. Behavioral evidence shows that *how* learners engage with a simulation varies systematically rather than uniformly: tracing online learners building ecological models in VERA, [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] classified [[student-engagement|engagement]] into Observation (frequent runs and parameter adjustment with little model building), Construction (hands-on building with little simulation), and Exploration (full construct–parameterize–simulate cycles), with Explorers producing the most complex and diverse models and observation-heavy learners largely copying existing ones — an argument for designing simulation environments that push learners toward full-cycle activity.

### AI and simulation

- **AI-powered environments:** adaptive simulations adjust difficulty and scenarios to a learner's state, linking to [[adaptive-learning]] and [[reinforcement-learning]]-based coaching.

- **Prompt-generated simulations put a bespoke lab within reach.** Instructors can generate browser-run models of the topic a course needs from a reusable prompt template (sliders, animation, time-dependent graphs), validating each twice - technically, then against the known analytical solution - instead of accepting the closest published simulation ([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion et al., 2025]]).

- **Automating the human counterpart.** [[astra-atco-training-simulator|Chew et al. (2026)]] replace the specialist human role-players who staff air-traffic-control simulations with autonomous [[llm|LLM]] sim-pilots, removing a training-capacity bottleneck; their fine-tuned speech pipeline cut word error rate on Singaporean-accented aviation speech from 107.80% to 23.45%, though all evaluations were component-level with no trainee cohort run.

- **Adversarial simulators as training partners.** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] pairs a policy agent with LLM patient simulators built to behave adversarially across a 57K-case scenario pipeline; training against them cut missed red-flag rates by about a third, and blinded clinicians preferred the trained agent in 87.6% of side-by-side comparisons.

- **Encode missing case states explicitly.** A multi-agent standardized-patient system keeps intent recognition, case-grounded response generation and post-session evaluation separate, distinguishing four kinds of missing information — clinically negative, unknown to the patient, not yet assessed, and absent from the case — because collapsing them into "normal" injects unsupported clinical facts ([[medeasy-ai-standardized-patients|Gao et al. (2026)]]).
- **Simulated agents:** AI can simulate patients (for medical training), students (for [[teacher-role|teacher]] practice), or conversation partners, making high-stakes interpersonal practice accessible and repeatable. In [[teacher-education|teacher education]], [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang and Zhang (2025)]] built *Student GPT*, a custom ChatGPT [[conversational-ai|chatbot]] that role-played a [[k-12|middle school]] student holding common ratio-reasoning [[misconceptions]], giving preservice [[math-education|mathematics]] teachers affordable, content-specific practice at diagnosing student thinking — and used an [[affective-computing|Affective]], Communicative, Technical (ACT) coding framework to systematically assess the simulated student's role-play strengths (clarity, relevance, error consistency) and authenticity weaknesses (teacher-like tone, role confusion).

- **Make counterfactual history a first-class feature.** SupplyNet's contextual multi-agent [[llm|LLM]] agents generate supply-chain dynamics emergent from learner decisions rather than scripted, and its branching timeline lets learners revisit earlier choices without penalty — 13 of 14 participants rated it highly for connecting decisions to performance against 3 for the baseline ([[supplynet-visual-exploratory-learning|Li et al. (2026)]]).
- **Grounded dynamics, not a prompted persona.** [[adaptive-virtual-patient-psychotherapy-training|Chen et al. (2026)]] parameterized a virtual patient's disclosure dynamics from nearly 2,000 hours of real psychotherapy transcripts, then updated the level each turn; across 1,033 turns with 20 clinicians its disclosure rose with therapist empathy and exploration while a prompt-only baseline on the same LLM stayed flat.
- **Role-play puts the learner in the part.** Where simulated agents supply the counterpart, role-play gives the learner that part instead. [[remind-robot-mediated-roleplay-antibullying-2026|Sanoubari and colleagues (2026)]] had 18 children aged 9-10 watch a bullying scene enacted by social robots, reason about each character's position, then rehearse defending by puppeteering a robotic avatar, and reported gains in perceived [[self-efficacy]] for defending plus better-calibrated beliefs about whether confronting a bully actually stops it. Their framing, robot-mediated applied drama, keeps a human facilitator in the Forum Theatre role and confines automation to narrative control, which is a useful reminder that the demanding part of role-play is the reflection rather than the machinery. [[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga and Johnson (2025)]] place role-play alongside simulation among the strategies that AI-supported online learning draws on.

- **Simulated learners:** models of student behavior let [[research-methods-aied|researchers]] and designers test tutoring systems and [[curriculum-design|curriculum]] before live deployment, grounding [[student-modeling]] and [[knowledge-tracing]].
- **Trust and fidelity:** the value of a simulation depends on how faithfully it models the real context — and on the learner's awareness of its limits, connecting to [[trust-calibration]].

- **Human-likeness is a property of the interaction, not the model.** Once both backends were rendered behind the same avatar, a text-based human-likeness advantage disappeared: participants called the commercial model natural (54% versus 22%) while communication performance was identical; voice, latency and turn-taking reshaped how the same dialogue quality was perceived ([[sophie-clinical-communication-ai-assessment-2026|Hasan et al. (2026)]]).
- **[[generative-ai|GenAI]] in simulation-based learning.** [[genai-scenario-based-healthcare-education-2026|Neto and colleagues (2026)]] [[meta-analysis-systematic-review|systematically review]] GenAI across scenario-, case-, problem-, and simulation-based learning in healthcare education, finding positive outcomes for higher-order cognitive skills but inconsistent results elsewhere, with hybrid [[human-ai-collaboration|human-AI collaboration]] outperforming fully automated approaches. [[conversational-agents-business-simulation-gaming-2026|Wenzel, Geiger, and Liening (2026)]] develop AI conversational agents for adaptive support in business simulation games, addressing the common gap of limited [[formative-assessment|formative]] feedback and structured reflection in simulation-based learning.
- **The "authenticity gap" bounds what AI simulation can replace.** In [[medical-education|clinical]] simulation, [[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al. (2026)]]'s [[mixed-methods-research|mixed-methods]] systematic review of AI-powered nursing simulation (19 studies, N=1,253) finds AI effective for cognitive knowledge and affective outcomes but inconsistent for complex psychomotor skills. Their concept of an **authenticity gap** — a learner-perceived shortfall in emotional resonance, nonverbal cue recognition, and tactile/physical examination dimensions — explains *why* AI simulation is best for highly structured objectives (foundational communication, history-taking) and should sit in a **stepped simulation continuum** that hands advanced psychomotor and emotionally complex scenarios to human-standardized patients and clinical placement. Technical instability (e.g., speech-recognition delays) can also add extraneous [[cognitive-offloading|cognitive load]] and anxiety, so fidelity and stability are themselves design levers. This parallels [[genai-scenario-based-healthcare-education-2026|Neto et al.'s]] finding that hybrid human–AI approaches outperform fully automated ones.
- **Teacher-AI co-designed simulations.** Interactive simulations that support both conceptual learning and competency development are scarce in hands-on domains, and GenAI output often lacks pedagogical validity. In [[stem-education|drone-based STEM education]], teacher-AI co-designed simulations embedded in an otherwise identical hands-on curriculum were evaluated with a quasi-experimental pretest–posttest design across 30 secondary students, examining whether simulation-supported instruction yields superior [[learning-gains|learning outcomes]] ([[simulation-assisted-drone-learning-stem-2026]]). Separately, [[agentic-ai|multi-agent]] tutoring [[benchmark|benchmarks]] such as ASTRA use simulated socially intelligent agents to study participation-balanced collaboration in [[cs-education|introductory programming]] ([[astra-multi-agent-tutoring-benchmark-2026]]).

- **Learner control in simulation is enacted, not granted.** A 2 × 2 experiment in a flocking simulation ([[learner-agency-ai-simulation-2026|Su, Nair and Nagashima 2026]]) gave some students parameter sliders, some an optional conversational agent and some both; every condition improved, but neither affordance produced a reliable difference once prior knowledge was controlled (p = .849 and p = .108). What predicted [[learning-gains|gains]] was where and how long learners manipulated parameters: sustained slider use in the most conceptually complex lesson was positively associated with gains, and the same behavior in the easier lesson negatively. For simulation builders the implication is that offering controls is not the intervention — helping learners decide what to change, and register what changed, is.

### Connections

Simulation connects to [[active-learning]], [[adaptive-learning]], and [[pedagogical-agent]]. It is a mechanism for experiential and [[constructivist]] learning and is amplified by AI's ability to generate adaptive, realistic practice environments.

## Connected Concepts
- [[active-learning]]
- [[adaptive-learning]]
- [[pedagogical-agent]]
- [[reinforcement-learning]]
- [[student-modeling]]
- [[constructivist]]
- [[trust-calibration]]
- [[professional-training]]
- [[chemistry-education]] — Chemistry education and AI: labs, formative assessment, LLM limits, philosophy of experimentation
- [[biology-education]] — Biology education and AI: lab teaching assistants, AI literacy in biology, critical thinking, specialized tools
- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)
- [[virtual-and-augmented-reality]] — the model, not the modality — immersive environments usually render a simulation

## Connected Articles
- [[learner-agency-ai-simulation-2026]] — Parameter control and an optional AI agent in a complex-systems simulation: gains tracked enactment, not access
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[adaptive-virtual-patient-psychotherapy-training]] — Adaptive Virtual Patients for Psychotherapy Training
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[astra-atco-training-simulator]] — ASTRA: ATCO Training Simulator
- [[supplynet-visual-exploratory-learning]] — SupplyNet: Visual Exploratory Learning
- [[medeasy-ai-standardized-patients]] — MedEASY: AI Standardized Patients
- [[remind-robot-mediated-roleplay-antibullying-2026]] — Robot-mediated role-play game for bystander intervention (applied drama)
- [[residencyrl-clinical-rl-training-2026]]
- [[genai-scenario-based-healthcare-education-2026]] — Systematic review of GenAI in scenario-based healthcare education (Neto et al. 2026)
- [[conversational-agents-business-simulation-gaming-2026]] — CAIS-GBL framework for AI conversational agents in business simulation games (Wenzel et al. 2026)
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Fine-tuned participant-specific LLM agents reproducing collaborative problem solving dialogues (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA synthetic benchmark for multi-agent tutoring and participation-balanced collaboration
- [[simulation-assisted-drone-learning-stem-2026]] — Simulation-assisted drone learning with teacher-AI co-designed scaffolds
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — AI-powered simulation in nursing: mixed methods systematic review (authenticity gap, stepped continuum)
- [[sophie-clinical-communication-ai-assessment-2026]] — Scalable AI-based clinical communication training and automated assessment
