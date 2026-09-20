---
title: Creating Learning Scaffolds for Engineering Design Using Concept Catalyst
created: "2026-05-21T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai, llm]
research_method: [system development, case study]
discipline: [stem education]
audience: [instructors]
level: [k 12]
sources: ['raw/papers/2605.20511.md']
confidence: high
---

> **Synthesis:** Concept Catalyst is a web-based [[llm]] tool that helps [[k-12]] teachers rapidly build scaffolding questions for Engineering Design Challenges without the open-endedness of a chat interface. It walks teachers through three non-linear stages — **Summarize** (decompose a design challenge into a paragraph), **Conceptualize** (highlight, drag, and connect key concepts in a visual graph), and **Synthesize** (attach concepts to question groups and generate five editable scaffold questions each). The tool is entirely teacher-facing: it keeps every decision with the teacher, using the LLM only to generate suggestions that teachers can accept, reject, or modify, thereby reducing preparation time and [[cognitive-offloading|cognitive load]] while preserving [[teacher-role|teacher agency]] and supporting reflective practice around the Engineering Design Process.

## Key Findings

1. Concept Catalyst reduces the time teachers spend generating scaffolding questions by structuring LLM assistance around three explicit stages—Summarize, Conceptualize, and Synthesize—rather than relying on open-ended chat.
2. The tool keeps the teacher in control at every point: teachers highlight the concepts, visually link them, attach concepts to question groups, and accept, reject, or modify every generated question before it enters a question bank.
3. Visual concept mapping and knowledge-graph representations support teachers' reflective practices by making conceptual relationships tangible, an approach grounded in prior work that structured knowledge representations help integrate new information with prior knowledge.
4. Concept Catalyst is teacher-facing only; students never interact with the system, and the tool's design builds on a Wizard-of-Oz study in which teachers reported positive feedback on the efficiency, quality, and diversity of content they produced.

## Background: scaffolding in K-12 engineering education

K-12 engineering teachers use the [[engineering-education|Engineering Design Process]] to help students learn hands-on through design challenges such as constructing a bridge or a catapult. These challenges require students to break down a problem, think critically, develop an approach, and iteratively implement, evaluate, and redesign it. Writing documentation — tables, graphs, and diagrams — is a key practice for teaching the process, helping students reflect on discussions, trade-offs, and prototype failures.

To help students use documentation to iterate, teachers rely on [[scaffolding]] questions. The literature distinguishes soft scaffolding, where teachers dynamically offer support as they monitor students, and hard scaffolding, where teachers anticipate and address student needs ahead of time. Creating these scaffolds draws on teachers' professional experience but is both time-intensive and challenging: teachers must anticipate potential difficulties and tailor curriculum to students' needs, adding to an already intensive workload.

[[generative-ai]] tools hold potential to support lesson planning and assessment creation, and teachers have expressed openness to LLM-based tools designed for project-based learning tasks. While LLMs may not be reliable enough in fully automated roles, they can be used effectively under teacher oversight — motivating a collaborative system that supports [[teacher-role|teacher agency]] while benefiting students and teachers alike. Concept Catalyst is built precisely on this premise: it helps teachers, not replaces them, and its design was validated in a Wizard-of-Oz study in which teachers reported positive feedback on the efficiency, quality, and diversity of the content they wrote.

## Concept Catalyst: design and rationale

Concept Catalyst is a web-based tool that assists teachers in analyzing a design challenge and creating scaffolding questions. It prompts teachers to highlight important concepts in a paragraph summary, visually organize those concepts by how they connect, and then synthesize scaffolding questions for their students. The tool avoids the opacity of LLM-based decision making by keeping the decision-making task entirely with the teacher and employing the LLM purely as a generator of suggestions.

The interface focuses teachers' attention on the Engineering Design Process while keeping the LLM hidden behind a guided [[knowledge-graph|concept map]] interface. Concept maps and tree diagrams are structured knowledge representations that support the integration of new information with [[prior-knowledge|prior knowledge]] — a key aspect of reflection shown to improve teacher practice. Concept Catalyst is entirely teacher-facing and only outputs scaffold questions that can be printed and shared with students, who never interact with the system.

### Summarize

In the Summarize step, the teacher inputs a paragraph summary of the design challenge or uploads a unit map, which the tool processes into a roughly 200-word summary. The teacher can modify this summary, and once satisfied, clicks Continue to advance.

### Conceptualize

In the Conceptualize step, teachers highlight key concepts that students should address and then visually connect related concepts. The left half of the screen holds a Concepts Tab, with the approved summary on top and a waiting area for newly created concepts below; the right half is a Concepts Graph where teachers move concept buttons and connect them with lines. Every highlight generates a concept button, teachers can also create custom concepts with a '+' button, and they can freely explore relationships by moving and linking the buttons — an avenue for applying [[creativity]] and finding interesting interplays between concepts.

### Synthesize

In the Synthesize step, scaffolding questions are generated. The screen keeps the Concepts Graph on the right while a Questions tab hosts question groups on the left. Teachers attach any number of concepts to a question group and click 'Generate questions' to produce five questions addressing what students should consider. Teachers can generate any number of groups, accept, reject, or modify every generated question, and collect accepted questions in a question bank before saving and printing them to paper or PDF.

## What this means for practice

- **Instructors.** Decompose the challenge before writing questions: run it through Summarize to get a 200-word summary you can edit, then highlight and link the concepts students must address in Conceptualize before attaching them to a question group.
- **Instructors.** Work in question groups and review every item: attach concepts to a group, generate its five questions, and accept, reject or modify each one before it reaches the question bank and is printed.
- **Instructors.** Treat the concept graph as reflection, not drafting — moving and connecting concept buttons is where unanticipated relationships between concepts surface, and the three stages are deliberately non-linear, so revisit them as the design challenge clarifies.
- **Instructors.** Keep a non-tool route to the same [[scaffolding|scaffolds]]: the authors state that access to AI-supported tools is disproportionate across socio-economic classes, so prepare a paper-based alternative for the same activity.
- **Instructors.** Check every generated question against your own [[teacher-role|professional judgment]] before class: the authors note LLMs may not be reliable enough in a fully automated capacity, which is why the tool keeps decision-making with the teacher.

## Limitations

- This is a system-development demo and not an evaluation: the paper reports the tool's design, and the positive feedback on efficiency, quality, and diversity of content comes from an earlier Wizard-of-Oz study of the underlying framework rather than from testing Concept Catalyst as built.
- The tool is entirely teacher-facing and students never interact with the system, so the paper provides no evidence about whether the generated questions improve student learning or documentation practice.
- Claims about reduced preparation time and reduced cognitive load are design intentions rather than measurements — the paper reports no participant count, no preparation-time data, and no comparison against writing scaffold questions unaided.
- The authors name one structural constraint directly: access to AI-supported tools is disproportionate between socio-economic classes, which limits where the tool can be used equitably.

## Connected Concepts

- [[stem-education]]
- [[scaffolding]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[k-12]]
- [[learning-design]]
- [[tpack]]
- [[generative-ai]]
- [[llm]]
- [[knowledge-graph]]
## Connected Articles

- [[ai-tpack-teacher-multi-agent-workflow]]
- [[ai-tutor-authoring-promptdecipher]]
## Citation

Madhuri Singh, Gennie Mansi, Mark Owen Riedl (2026). [Creating Learning Scaffolds for Engineering Design Using Concept Catalyst](https://arxiv.org/abs/2605.20511). Accepted as Interactive Demo at ISLS 2026.
