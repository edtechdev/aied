---
title: "Evolution of AI in Education: Agentic Workflows"
created: "2026-05-07T04:33:04-04:00"
updated: "2026-09-19T07:42:07-04:00"
type: article
foundations: [agentic-ai, ai-education]
technology: [adaptive-learning, human-in-the-loop-ai, intelligent-tutoring, pedagogical-llm-training]
audience: [software developers]
research_method: [benchmark]
sources: ['raw/papers/2504.20082.md']
confidence: medium
page_kind: [framework]
methods: [benchmark]
---
> **Synthesis:** Kamalov et al. (2026) propose a design framework for [[ai-education|educational AI]] systems structured around four [[agentic-ai|agentic]] paradigms — **reflection**, **planning**, **tool use**, and **multi-agent [[collaborative-learning|collaboration]]** — as a taxonomy for analyzing how [[llm|LLM]]-based AI agents operate in learning environments. They contrast these modern autonomous systems with earlier [[pedagogical-agent|embodied pedagogical agents]] and demonstrate the framework through a proof-of-concept multi-agent framework for [[automated-essay-scoring|automated essay scoring]] (MASS), whose preliminary results suggest improved consistency over stand-alone LLMs while flagging interpretability and trustworthiness as open challenges.

A design framework for [[ai-education|educational AI]] systems structured around four [[agentic-ai|agentic]] paradigms: **reflection**, **planning**, **tool use**, and **multi-agent collaboration**. Proposed by Kamalov et al. (2026) as a taxonomy for analyzing how AI agents operate in learning environments. The work positions this as a shift from early [[pedagogical-agent|embodied pedagogical agents]] (content-delivery mechanisms with limited autonomy, e.g., Johnson et al., 2000; Kim et al., 2006) toward dynamic systems that autonomously navigate complex educational workflows, adapt to learner needs in real time, and engage in sophisticated multi-agent coordination.

## Four Paradigms

### 1. Reflection
Agents evaluate their own outputs against criteria before delivering [[feedback]] to learners. Reduces immediate error propagation but adds latency and requires internal evaluators.

### 2. Planning
Agents decompose educational goals into sub-goals and sequence [[pedagogy|pedagogical]] actions. Enables structured [[intelligent-tutoring|tutoring]] but risks rigidity when learner states diverge from expected trajectories.

### 3. Tool Use
Agents invoke external resources (calculators, code interpreters, knowledge bases) to ground responses in verified information. Critical for [[stem-education|STEM]] domains where [[hallucination-risk|hallucination]] tolerance is low.

### 4. Multi-Agent Collaboration
Multiple specialized agents (e.g., question generator, validator, explainer) coordinate to produce holistic tutoring experiences. Improves consistency over stand-alone [[llm|LLMs]] but introduces orchestration complexity and interpretability challenges.

## Key Findings

- **Four paradigms form a practical taxonomy.** Reflection, planning, tool use, and multi-agent collaboration capture the dominant design patterns of modern [[agentic-ai|AI agents]] in education and map onto how agents overcome the limits of stand-alone LLMs (real-time information retrieval, dynamic task decomposition).
- **Agents outperform static LLMs.** Agentic design leverages real-time retrieval and task decomposition to reduce reliance on dated training data, outperforming stand-alone LLMs on [[benchmark]] evaluations.
- **The MASS proof of concept shows promise.** A multi-agent framework for [[automated-essay-scoring|automated essay scoring]] produced improved consistency over single-model approaches in preliminary results.
- **Trust and interpretability lag capability.** Multi-agent traces are harder to audit, and learners and [[teacher-role|teachers]] need transparency into which agent contributed what.

## Proof of Concept: MASS

Kamalov et al. implemented a **multi-agent framework for [[automated-essay-scoring|automated essay scoring]]** (MASS) as a demonstration. Preliminary results suggest improved consistency compared to single-model approaches, though the authors flag the need for deeper research into interpretability and trustworthiness.

## Challenges

- **Interpretability:** Multi-agent traces are harder to audit than single-model outputs.
- **Trustworthiness:** Learners and teachers need transparency into which agent contributed what.
- **Orchestration overhead:** Coordination cost scales non-linearly with agent count.
- **Latency:** Reflection and multi-agent negotiation introduce response delays.

## What this means for practice

- **Developers.** Pick the paradigm against the pedagogical goal rather than by default: use reflection where [[feedback]] must be verified before it reaches learners, and tool use where [[hallucination-risk|hallucination]] tolerance is low.
- **Developers.** Budget explicitly for orchestration cost and chattiness in multi-agent designs — the paper reports that coordinating agents raises token usage and processing time and that improper coordination can degrade the whole system.
- **Developers.** Surface which agent produced which part of a final score or explanation, because nested plan–tool–reflect traces turn multi-agent systems into a black box that learners and [[teacher-role|teachers]] cannot audit.
- **Researchers.** Prioritize explainable agent reasoning and cross-population transfer studies, since the authors identify transparency, fairness, and transfer across heterogeneous learner populations and [[pedagogy|pedagogical]] settings as unresolved.

## Limitations

- The MASS proof of concept rests on a single benchmark: roughly 17,000 student-written argumentative essays from ASAP 2.0 scored 1–6 on a holistic rubric, compared against only three stand-alone LLMs (GPT-4o MAE 0.6129, DeepSeek 67B 0.7345, DeepSeek 1.3B 1.6956 vs. MASS 0.5612) — a scoring-accuracy result, not evidence of instructional benefit.
- The reported consistency advantage is not uniform: Llama 3.3 70B produced a tighter error distribution (SD 0.783) than MASS (0.830), and the significance tests are reported only as p = 0.0 rather than as exact values.
- The literature synthesis screened 378 unique records down to 93 included studies, and the authors state plainly that sustainability was treated as a follow-up research priority rather than analyzed, so lifecycle cost and equity fall outside its scope.
- No learner-facing evaluation was conducted: the authors flag that transfer across learner populations and the interplay among instructors, learners, and agents remains unstudied, and the work carries no ethics, consent, or funding declarations because none applied.

## Connected Concepts

- [[adaptive-learning]]
- [[ai-literacy]]
- [[formative-assessment]]
- [[human-in-the-loop-ai]]
- [[pedagogical-llm-training]]
- [[agentic-ai]]
- [[ai-education]]
- [[authentic-assessment]] — Authentic Assessment
- [[automated-essay-scoring]]
- [[intelligent-tutoring]]
- [[human-ai-collaboration]]
- [[metacognition]]

## Connected Articles

- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[multi-agent-instructional-design]] — Multi-Agent Systems for Instructional Design
- [[eduagentbench-agent-teaching-benchmark]] — Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[teachbench-llm-teaching-evaluation]] — TeachBench - Evaluating LLM Teaching Ability
- [[golrang-propact-pair-programming-2026]] — Collaborative AI Tutoring
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[zerkouk-comprehensive-review-its-2025]] — AI Tutor Effectiveness Review
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[ai-tutor-authoring-promptdecipher]] — PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions
## Citation

Kamalov, F., Santandreu Calonge, D., Smail, L., Azizov, D., Thadani, D. R., Kwong, T., & Atif, A. (2026). [*Evolution of AI in Education: Agentic Workflows*](https://arxiv.org/abs/2504.20082v2).
