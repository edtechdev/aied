---
title: "Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development"
created: "2026-07-08T04:33:04-04:00"
updated: "2026-08-28T15:00:00-04:00"
type: article
tags: [agentic-ai, cs-education, generative-ai, higher-ed, llm, cognitive-offloading, professional-training, self-regulated-learning, ai-literacy, rag]
audience: [teacher role]
research_method: [theoretical analysis]
discipline: [cs education]
level: [higher ed]

sources: ['raw/papers/2607.06101.md']
confidence: high
---

> **Synthesis:** Mehra et al. (2026) warn that as AI coding agents absorb substantial implementation work, developers lose the informal, effortful problem-solving through which software engineering expertise historically accumulated — a form of [[situated-learning|incidental learning]] that will not return on its own. They frame the accumulating understanding gap as **Knowledge Debt**, a developer-level analogue of Technical Debt incurred when agents execute changes the developer cannot fully explain. Rather than layering formal instruction onto the workflow, they propose six design principles (Contextual, Grounded, Ambient, Selective, Adaptive, Closed-Loop) and operationalize them in **SHIELD**, a multi-agent system that surfaces out-of-band, contextual learning moments drawn from the coding agent's own reasoning — without disrupting developer flow.

## Background: Incidental Learning at Risk

AI coding agents have moved from experimental tools to core components of modern software engineering. According to industry reports, approximately **42% of all committed code is now AI-generated or AI-assisted**, projected to reach 65% by 2027. While this yields measurable productivity gains, a more subtle shift is underway: as humans offload cognitive tasks to tools, the underlying capability tends to diminish — the same pattern seen with GPS eroding spatial memory or spell-check weakening spelling. In a controlled study, developers who used AI assistance scored **17% lower** on a subsequent comprehension assessment than those who completed the same tasks without AI, and developers who fully delegated coding showed the steepest decline in skill formation.

Historically, a developer encountering a problem would search, read explanations, weigh alternatives, and write a fix they could understand — absorbing surrounding concepts (unfamiliar APIs, architectural choices, trade-offs) along the way. Today the same developer pastes an error into an agent and receives a working fix in seconds, often without understanding how or why it works. What is lost is not formal training but **incidental learning**: the unintended acquisition of knowledge that occurs as a byproduct of effortful problem-solving. Over-reliance on agentic coding lets unpracticed skills atrophy silently, leaving developers able to build with AI but increasingly unable to debug, adapt, or extend that work on their own.

## Key Findings

- **[[cognitive-offloading|Over-reliance]] erodes expertise.** Delegating coding to autonomous agents short-circuits the problem-solving pathway that traditionally built software engineering expertise, risking silent skill atrophy and accruing a developer-level analogue of Technical Debt.
- **Knowledge Debt is a novel framing.** The concept extends Technical Debt to the developer's understanding gap when agent-generated changes outpace comprehension; like Technical Debt, it compounds silently and surfaces only when independent capability is required, at which point repayment through relearning is costly.
- **Incidental learning must be designed back in.** The authors argue it will not re-emerge on its own and must be consciously engineered into developer–agent interactions so that Knowledge Debt is continuously repaid rather than allowed to accumulate.
- **Six design principles guide the effort.** Contextual, Grounded, Ambient, Selective, Adaptive, and Closed-Loop define what any learning-aware development system must do.
- **SHIELD operationalizes the principles.** A multi-agent system leverages the AI coding agent's own reasoning to surface contextual, out-of-band learning moments without disrupting developer flow.

## The Six Design Principles

Any approach that embeds incidental learning into human-agent interaction should satisfy six early design principles:

1. **Contextual** — learning opportunities must be tightly tied to the specific code, API, design choice, or trade-off just engaged with, illuminating the unfamiliar element directly in front of the developer rather than redirecting toward general concepts.
2. **Grounded** — decisions about what to surface must be grounded in the agent's reasoning (explanations, intermediate steps, why a decision was made, what alternatives were considered, where it was uncertain), signals that cannot be reconstructed from code artifacts alone.
3. **Ambient** — interventions should live within the developer's day-to-day environment (e.g., the IDE) through out-of-band channels like asynchronous queues, feeds, or peripheral panels, respecting flow; the developer chooses when to engage, not the system.
4. **Selective** — the system should not fire on every interaction; surfacing too frequently trains developers to ignore it, undermining the learning it aims to support.
5. **Adaptive** — interventions should be calibrated to the developer's expertise and prior exposure; what is a learning moment for a junior developer may be noise for an experienced one.
6. **Closed-Loop** — the system must verify whether learning has actually been internalized through lightweight probes or comprehension checks, using outcomes to update what to surface, deprioritize, or revisit.

## SHIELD: Agents That Teach

SHIELD (Safeguarding Human Expertise and Incidental Learning in Software Development) is a multi-agent system that operates within the developer's IDE, instrumenting the AI coding agent to emit a telemetry stream capturing what it changed, its rationale, the alternatives considered, and its confidence. Its specialized agents include:

- **Telemetry Observer Agent** — ingests the agent's reasoning trace (the Grounded principle).
- **Teachability Triage Agent** — identifies candidate concepts and checks them against a per-developer **Concept Map** (initialized from the developer's own code) plus configurable teachability signals (complexity, novelty, transferability), surfacing only genuine gaps (Selective) calibrated to expertise (Adaptive).
- **Probe Generator Agent** — crafts a targeted question to verify whether an identified gap is genuine, surfaced asynchronously through a Probe Queue so the developer answers in their own words at a time of their choosing.
- **Knowledge Assessor Agent** — evaluates the response, gauging understanding vs. partial vs. no familiarity, and updates the Concept Map.
- **Microlearning Generator Agent** — dynamically generates lightweight, contextual microlearning calibrated to the agent's action and the gap depth, surfaced through a Microlearning Feed; the architecture can also accommodate conversational agentic tutors.
- **Learning Orchestrator** — coordinates the multi-turn flow across the learning lifecycle.

A comprehension check closes the loop, refining the Concept Map and informing future triage. SHIELD is implemented as a VSCode extension using the CrewAI framework with a Neo4j graph-based Concept Map, powered by GPT-5.1, instrumented to work with Claude Code as the developer's agent. An illustrative scenario walks through a payment API webhook retry task in which the agent replaces fixed retry logic with exponential backoff and jitter — surfacing the concept behind the change as a teachable moment.

## Implications for AI in Education

- **Treat learning as a first-class design concern.** Productivity alone is an insufficient measure of AI-assisted development; learning-aware systems should make productivity and learning complementary rather than competing, a theme echoed in [[self-regulated-learning]] and [[professional-training]].
- **Designing for flow, not formal interruption.** The Ambient and Selective principles suggest that lightweight, out-of-band interventions outperform blocking, [[curriculum-design|curriculum]]-style instruction — a transferable lesson for [[ai-literacy]] and professional training in [[agentic-ai|agentic]] tools.
- **Calibrate to the learner's evolving model.** The Concept Map approach parallels [[student-modeling]]: distinguishing mastered, partially understood, and unfamiliar concepts lets interventions target genuine gaps rather than fire on everything.
- **Repay [[cognitive-offloading|Knowledge Debt]] continuously.** For [[cs-education]] and [[higher-ed]], this reframes the goal of agentic tools from task completion to sustaining human expertise, connecting to broader concerns about [[lifelong-learning|skill atrophy]] as AI absorbs implementation work.
- **Agents can teach.** The "agents that teach" vision — leveraging the agent's own reasoning as the source of learning moments — suggests [[intelligent-tutoring|pedagogical]] designs in which AI both does and explains the work.

## Connected Concepts
- [[cs-education]]
- [[human-ai-collaboration]]

- [[cognitive-offloading]]
- [[ai-literacy]]
- [[self-regulated-learning]]
- [[professional-training]]
## Connected Articles

- [[agentic-education-coding]]
- [[agentic-workflows-education]]
## Citation

Mehra, R., Suri, S., Tagadinamani, P. K., Singi, K., & Kaulgud, V. (2026). [*Agents That Teach: Towards Designing Incidental Learning Back into AI-Assisted Software Development*](https://arxiv.org/abs/2607.06101).
