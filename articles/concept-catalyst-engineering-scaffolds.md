---
title: Creating Learning Scaffolds for Engineering Design Using Concept Catalyst
created: "2026-05-21T04:33:04-04:00"
updated: "2026-08-24T12:00:00-04:00"
type: article
tags: [llm, scaffolding, k-12, stem-education, teacher-role, generative-ai, learning-design]
research_method: [system development, case study]
discipline: [stem education]
audience: [instructors]
level: [k 12]
category: [instructional design]
sources: ['raw/papers/2605.20511.md']
confidence: high
---

> Concept Catalyst is a web-based LLM tool that helps K-12 teachers rapidly build scaffolding questions for Engineering Design Challenges without the open-endedness of a chat interface. It walks teachers through three non-linear stages — **Summarize** (decompose a design challenge into a paragraph), **Conceptualize** (highlight, drag, and connect key concepts in a visual graph), and **Synthesize** (attach concepts to question groups and generate five editable scaffold questions each). The tool is entirely teacher-facing: it keeps every decision with the teacher, using the LLM only to generate suggestions that teachers can accept, reject, or modify, thereby reducing preparation time and [[cognitive-offloading|cognitive load]] while preserving [[teacher-role|teacher agency]] and supporting reflective practice around the Engineering Design Process.

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

## Implications

Concept Catalyst models a collaborative division of labor between teacher and AI that has broad implications for [[learning-design|instructional design]] and [[ai-education|AI in education]]. By structuring generation around visual concept mapping and teacher review, it positions the LLM as a suggestion engine rather than an autonomous author, keeping the [[human-in-the-loop-ai|human in the loop]] and aligning with [[ai-tpack-teacher-multi-agent-workflow|TPACK-based frameworks]] that situate AI within teachers' existing professional practice.

The tool's focus on [[teacher-role|teacher agency]] offers a template for reducing workload in [[curriculum-design|curriculum design]] and [[project-based-learning|project-based learning]] without eroding professional judgment. Its iterative, non-linear three-stage flow supports reflective practice — a lever known to improve teaching — and its visual [[knowledge-graph]] interaction makes abstract conceptual structure tangible. At the same time, the authors acknowledge structural limitations: access to AI-supported tools remains disproportionate across socio-economic classes, a concern that connects to broader questions of [[equity-in-ai-education|equity]] and [[digital-divide|the digital divide]]. As LLM-based tooling matures, the teacher-as-editor model here points toward more trustworthy [[trust|human-AI collaboration]], though [[hallucination-risk|reliability]] and equitable access remain open challenges for classroom deployment.

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
