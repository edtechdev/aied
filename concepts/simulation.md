---
title: Simulation
created: "2026-08-12T21:20:35-04:00"
updated: "2026-09-05T12:35:00-04:00"
type: concept
tags: [active-learning, adaptive-learning, pedagogical-agent, reinforcement-learning, experiential-learning]
confidence: high
---

> **Simulation** — the use of modeled environments, agents, or scenarios to support learning through practice and feedback in contexts that are safe, repeatable, and often otherwise inaccessible. Simulations let learners act, make errors, and see consequences without real-world cost, and are increasingly powered by AI and agent-based modeling.

## Questions to Consider

- Recall a time you learned something by doing it in a safe, low-stakes environment — a lab, a mock exercise, a flight or game simulator. What made that practice effective, and what might be lost if the simulation were too realistic or not realistic enough?
- The page argues simulations let learners make errors and see consequences 'without real-world cost.' What do you think is gained, and what might be lost, when the cost of a mistake drops to nearly zero?
- If an AI can simulate patients, students, or conversation partners for practice, where would you draw the line between valuable rehearsal and practice that fails to transfer to real human interaction?
- Why might a learner's awareness of a simulation's limits — its [[trust|trustworthiness]] — matter as much as how faithfully it models reality?
- How could the same simulation technology that helps someone learn also mislead them, and what would you need to know to tell those two outcomes apart?

## Introduction

Simulation sits at the core of [[experiential-learning|experiential]] and [[active-learning]] [[pedagogy|pedagogies]]. It provides the deliberate practice, [[productive-failure|productive failure]], and [[feedback|feedback loops]] that build skill and judgment. AI has transformed simulation in two ways: it powers more realistic and adaptive simulated environments, and it generates simulated learners, patients, or interlocutors that make practice scalable. Behavioral evidence shows that *how* learners engage with a simulation varies systematically rather than uniformly: tracing online learners building ecological models in VERA, [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] classified [[student-engagement|engagement]] into Observation (frequent runs and parameter adjustment with little model building), Construction (hands-on building with little simulation), and Exploration (full construct–parameterize–simulate cycles), with Explorers producing the most complex and diverse models and observation-heavy learners largely copying existing ones — an argument for designing simulation environments that push learners toward full-cycle activity.

### AI and simulation

- **AI-powered environments:** adaptive simulations adjust difficulty and scenarios to a learner's state, linking to [[adaptive-learning]] and [[reinforcement-learning]]-based coaching.
- **Simulated agents:** AI can simulate patients (for medical training), students (for teacher practice), or conversation partners, making high-stakes interpersonal practice accessible and repeatable. In [[teacher-education|teacher education]], [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang and Zhang (2025)]] built *Student GPT*, a custom ChatGPT [[conversational-ai|chatbot]] that role-played a [[k-12|middle school]] student holding common ratio-reasoning [[misconceptions]], giving preservice [[math-education|mathematics]] teachers affordable, content-specific practice at diagnosing student thinking — and used an [[affective-computing|Affective]], Communicative, Technical (ACT) coding framework to systematically assess the simulated student's role-play strengths (clarity, relevance, error consistency) and authenticity weaknesses (teacher-like tone, role confusion).
- **Simulated learners:** models of student behavior let [[research-methods-aied|researchers]] and designers test tutoring systems and [[curriculum-design|curriculum]] before live deployment, grounding [[student-modeling]] and [[knowledge-tracing]].
- **Trust and fidelity:** the value of a simulation depends on how faithfully it models the real context — and on the learner's awareness of its limits, connecting to [[trust-calibration]].
- **[[generative-ai|GenAI]] in simulation-based learning.** [[genai-scenario-based-healthcare-education-2026|Neto and colleagues (2026)]] [[meta-analysis-systematic-review|systematically review]] GenAI across scenario-, case-, problem-, and simulation-based learning in healthcare education, finding positive outcomes for higher-order cognitive skills but inconsistent results elsewhere, with hybrid [[human-ai-collaboration|human-AI collaboration]] outperforming fully automated approaches. [[conversational-agents-business-simulation-gaming-2026|Wenzel, Geiger, and Liening (2026)]] develop AI conversational agents for adaptive support in business simulation games, addressing the common gap of limited [[formative-assessment|formative]] feedback and structured reflection in simulation-based learning.
- **The "authenticity gap" bounds what AI simulation can replace.** In [[medical-education|clinical]] simulation, [[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al. (2026)]]'s [[mixed-methods-research|mixed-methods]] systematic review of AI-powered nursing simulation (19 studies, N=1,253) finds AI effective for cognitive knowledge and affective outcomes but inconsistent for complex psychomotor skills. Their concept of an **authenticity gap** — a learner-perceived shortfall in emotional resonance, nonverbal cue recognition, and tactile/physical-examination dimensions — explains *why* AI simulation is best for highly structured objectives (foundational communication, history-taking) and should sit in a **stepped simulation continuum** that hands advanced psychomotor and emotionally complex scenarios to human-standardized patients and clinical placement. Technical instability (e.g., speech-recognition delays) can also add extraneous [[cognitive-offloading|cognitive load]] and anxiety, so fidelity and stability are themselves design levers. This parallels [[genai-scenario-based-healthcare-education-2026|Neto et al.'s]] finding that hybrid human–AI approaches outperform fully automated ones.
- **Teacher-AI co-designed simulations.** Interactive simulations that support both conceptual learning and competency development are scarce in hands-on domains, and GenAI output often lacks pedagogical validity. In [[stem-education|drone-based STEM education]], teacher-AI co-designed simulations embedded in an otherwise identical hands-on curriculum were evaluated with a quasi-experimental pretest–posttest design across 30 secondary students, examining whether simulation-supported instruction yields superior [[learning-gains|learning outcomes]] ([[simulation-assisted-drone-learning-stem-2026]]). Separately, multi-agent tutoring [[benchmark|benchmarks]] such as ASTRA use simulated socially intelligent agents to study participation-balanced collaboration in introductory programming ([[astra-multi-agent-tutoring-benchmark-2026]]).

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

## Connected Articles
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[genai-simulate-patient-history-pbl-2026]]
- [[alrazeeni-transforming-nursing-education-ai-2026]] — AI in nursing education: systematic review (simulation, assessment)

- [[adaptive-virtual-patient-psychotherapy-training]] — Adaptive Virtual Patients for Psychotherapy Training
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[astra-atco-training-simulator]] — ASTRA: ATCO Training Simulator
- [[supplynet-visual-exploratory-learning]] — SupplyNet: Visual Exploratory Learning
- [[medeasy-ai-standardized-patients]] — MedEASY: AI Standardized Patients
- [[hdr-brachytherapy-agentic-ai-simulation-2026]]
- [[residencyrl-clinical-rl-training-2026]]
- [[li-ai-science-situated-learning-teachers-2025]]
- [[ai-science-chemistry-education-systematic-review-2025]] — Systematic review of AI in science/chemistry education
- [[context-based-ai-secondary-chemistry-2026]] — Context-based 7E + AI instruction in secondary chemistry
- [[chatgpt-virtual-lab-teaching-assistant-biology-2026]] — ChatGPT as a virtual lab teaching assistant in biology
- [[educasim-cs1-instructional-practice]] — EducaSim: simulated small-group section for teacher practice

- [[genai-scenario-based-healthcare-education-2026]] — Systematic review of GenAI in scenario-based healthcare education (Neto et al. 2026)
- [[conversational-agents-business-simulation-gaming-2026]] — CAIS-GBL framework for AI conversational agents in business simulation games (Wenzel et al. 2026)
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Fine-tuned participant-specific LLM agents reproducing collaborative problem solving dialogues (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA synthetic benchmark for multi-agent tutoring and participation-balanced collaboration
- [[simulation-assisted-drone-learning-stem-2026]] — Simulation-assisted drone learning with teacher-AI co-designed scaffolds
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — AI-powered simulation in nursing: mixed methods systematic review (authenticity gap, stepped continuum)
