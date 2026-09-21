---
title: "Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning"
created: "2026-08-03T04:33:04-04:00"
updated: "2026-09-19T07:42:07-04:00"
type: article
foundations: [agentic-ai]
pedagogy: [desirable-difficulties, learning-theories, metacognition, scaffolding, sociocultural-learning]
technology: [human-in-the-loop-ai, llm]
assessment: [formative-assessment]
research_method: [theoretical analysis]
sources: ['raw/papers/2606.04543.md']
confidence: high
audience: [instructional designers]
page_kind: [framework]
---
> **Synthesis:** Education AI is shifting from passive [[conversational-ai|chatbots]] to **proactive [[agentic-ai|agents]]** that initiate and pursue goals. This offers [[personalized-learning|personalization]] but risks undermining **learner [[agency]] and cognitive effort** and can tip into what the authors call *[[cognitive-surrender]]*. The paper walks each of six [[pedagogy|pedagogical]] principles through what agentic initiative does to it, and proposes design responses — [[desirable-difficulties|intentional friction]], dynamic [[scaffolding]], [[human-in-the-loop-ai|human-in-the-loop]] oversight, and considered AI utilization.

> Woollaston, Flanagan, Wijerathne & Ogata (2026, AIED HAI-Agency Workshop) review six established pedagogical principles through the lens of **proactive agentic AI** and articulate the central tension: the more an agent automates, the less cognitive work the learner does. Their design response — **[[desirable-difficulties|intentional friction]], dynamic [[scaffolding]], [[human-in-the-loop-ai|human-in-the-loop]] oversight, and considered AI utilization** — is a principled guardrail for the knowledge base's agentic-education literature.

## The tension: automation vs. learning

Agentic systems, operating within the broader digital ecosystem of an educational application, exhibit three core behavioral traits: **autonomy** (functioning without continuous human intervention), **proactiveness** (initiating goal-directed actions), and **reactiveness** (adapting to changing contexts such as user input, other agents, or the digital environment). A key functional advantage is the ability to use external tools — databases, APIs, microservices — while leveraging persistent memory for cross-session continuity and multi-agent communication. While **productive cognitive offloading** (delegating routine mental tasks to external tools) can free working memory for higher-order reasoning, the authors warn it frequently shifts into **cognitive surrender**, where the learner abdicates intellectual [[agency]] and lets the AI perform the critical synthesis and analysis the student should be doing. The paper walks each of six pedagogical principles through what agentic initiative does to it:

| Principle | Agentic-AI risk |
|---|---|
| [[prior-knowledge|Prior knowledge activation]] | Agents pre-fetching content bypass the retrieval practice that activates prior knowledge; algorithmic generalizations may also misjudge what a learner knows |
| [[collaborative-learning]] | Agent initiative crowds out peer negotiation and role-taking |
| [[problem-based-learning]] | Goal-directed agents resolve problems before learners grapple with them |
| [[formative-assessment]] | Agent-generated [[feedback]] pre-empts learners' own [[self-assessment]] loops |
| [[scaffolding]] | Automated scaffolds stay static instead of being dynamically withdrawn (fading) |
| [[metacognition]] | Agent initiation displaces the learner's own planning, monitoring, evaluation |

Beyond the table, the paper flags two further risks of proactive initiative: **[[bias-mitigation|algorithmic bias]] and cultural misalignment** — AI agents may make flawed inferences about prior knowledge from incomplete or biased training data and often lack the nuanced local cultural competence of a human [[teacher-role|teacher]], producing stereotypical or tone-deaf connections that alienate rather than engage learners.

## Key Findings

- **The automation–learning tension is structural.** The more an agent automates a task, the less [[cognitive-offloading|cognitive effort]] the learner expends — so unconstrained automation can convert productive offloading into cognitive surrender that suppresses deep processing, focus, and [[critical-thinking|critical thinking]].
- **Six best-practice principles are each individually at risk.** Prior-knowledge activation, [[collaborative-learning]], [[problem-based-learning]], [[formative-assessment]], [[scaffolding]], and [[metacognition]] each degrade in characteristic ways when agents take the initiative (e.g., pre-fetching bypasses retrieval practice; automated scaffolds fail to fade).
- **Friction can be designed in, not avoided.** The paper reframes productive struggle as a design target rather than an obstacle, echoing [[desirable-difficulties]] theory.
- **Dynamic fading is the antidote to static scaffolding.** [[scaffolding|Scaffolds]] should adapt and be withdrawn as [[self-regulated-learning|competence grows]].
- **Oversight and intentionality are prerequisites.** [[human-in-the-loop-ai|Human-in-the-loop]] control over agent initiation, plus purposeful, pedagogically justified AI use, keeps automation aligned with learning rather than replacing it.

## Design recommendations

1. **Intentional friction** — deliberately preserve productive struggle instead of maximizing smoothness (cf. [[desirable-difficulties]]: difficulty that supports learning)
2. **Dynamic scaffolding** — [[scaffolding|scaffolds]] that adapt and fade as competence grows (cf. [[self-regulated-learning|self-regulation]])
3. **Human-in-the-loop oversight** — learners and educators retain control over agent initiation ([[human-in-the-loop-ai]])
4. **Considered AI utilization** — purposeful, pedagogically justified agent use rather than maximal automation

## What this means for practice

- **Instructional designers.** Design [[desirable-difficulties|friction]] into the agent's task loop rather than optimizing for smoothness — for example, have it ask the learner to explain how a known hobby connects to a new concept instead of drawing the connection for them.
- **Instructional designers.** Specify fading rules before deployment, requiring real-time analytics that distinguish temporary task completion from durable mastery so [[scaffolding|scaffolds]] are withdrawn rather than persisting.
- **Designers.** Put the teacher inside the agent's execution loop via escalation protocols, adjustable purpose and guardrails, and mid-session state interruptibility, instead of relegating educators to passive observers of chat logs.
- **Designers.** Apply the SAMR model feature by feature: avoid agent support that only substitutes or augments an existing task and reserve the capability for tasks it genuinely modifies or redefines.

## Limitations

- This is a conceptual theoretical synthesis of six principles, not an empirical study: it reports no learner data, intervention, or outcome measures, so the implementation matrix is a design proposal rather than evidence that these strategies improve learning.
- The "learning examples" in the matrix are illustrative rather than observed classroom cases, and the application of the six principles to agentic systems is argued rather than tested.
- The recommendations — friction, dynamic fading, teacher-in-the-loop architecture, usage restraint — carry no implementation-cost, feasibility, or adoption evidence, so they remain untested design hypotheses.
- The named failure modes (cognitive surrender, learners gaming reflective checkpoints, learned helplessness) are drawn from prior literature and not measured in an agentic deployment here.

## Connected Concepts

- [[agentic-ai]]
- [[desirable-difficulties]]
- [[prior-knowledge]]
- [[formative-assessment]]
- [[metacognition]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[human-in-the-loop-ai]]
- [[collaborative-learning]]
- [[self-regulated-learning]]
- [[agency]]

- [[llm]]
- [[agentic-ai]]
- [[desirable-difficulties]]
- [[prior-knowledge]]
- [[formative-assessment]]
- [[metacognition]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[human-in-the-loop-ai]]
- [[collaborative-learning]]
- [[self-regulated-learning]]
- [[agency]]

- [[llm]]
- [[cognitive-surrender]]

## Connected Articles

- [[measuring-llm-tutors-teach-vs-solve]] — Measuring Whether LLM Tutors Teach or Solve: A Diagnostic for Educational Impact
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[genai-can-harm-teaching-rct-2026]] — Generative AI Can Harm Teaching
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[tool-invariant-framework-agentic-ai]] — A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of generative AI

## Citation

Woollaston, S., Flanagan, B., Wijerathne, I., & Ogata, H. (2026). [*Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning*](https://arxiv.org/abs/2606.04543).
