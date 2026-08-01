---
title: Agentic Education with AI Coding Assistants
created: 2026-05-08
updated: 2026-05-08
type: concept
tags: [agentic-ai, agentic-workflows, generative-ai, higher-ed, scaffolding, stem-education]
sources: [raw/papers/2604.17460.md]
confidence: medium
---
> 📄 Full text: [arXiv:2604.17460](https://arxiv.org/abs/2604.17460) · [local](raw/papers/2604.17460.md)




# Agentic Education with AI Coding Assistants

> Using agentic AI workflows (Claude Code) to teach AI coding tools — structured pedagogy for tool mastery.

## The Gap in AI Coding Education

**Naboulsi (2026)** identifies a paradox: **AI coding assistants proliferate rapidly, but pedagogical frameworks for learning them remain scarce**.

### Current State
Learners face:
- **Fragmented resources:** Blog posts, video tutorials, trial-and-error
- **Documentation-to-practice gap:** Tool docs ≠ pedagogical structure
- **No progression scaffold:** Jump from "hello world" to "production use" without intermediate structure

## Agentic Workflow Pedagogy

The paper presents a framework for teaching **Claude Code** (agentic coding assistant) using **Claude Code itself** — recursive/agentic education.

### Pedagogical Structure
| Phase | Focus | Agentic Capability |
|-------|-------|-------------------|
| **Tool familiarization** | Basic commands, setup | Single-turn interactions |
| **Task decomposition** | Breaking problems into agentic steps | Multi-step planning |
| **Autonomous execution** | Letting agent run, monitoring | Self-correction, iteration |
| **Meta-cognition** | When to use (and not use) agentic workflows | Strategic tool selection |

## Connection to Agentic Workflows in Education

This operationalizes [[agentic-workflows-education]] for a specific tool:
- **Reflection:** Agent reflects on its own code/approach
- **Planning:** Decomposes tasks before execution
- **Tool use:** Uses file I/O, shell, other tools
- **Multi-agent:** Could extend to peer-agent collaboration (cf. [[collaborative-ai-tutoring]])

## Implications

### For CS Education
- **Agentic literacy:** Learning *how to direct* AI agents is a new learning objective
- **Scaffolded autonomy:** Progressive release of agentic control (teacher-guided → student-directed)
- **Meta-cognitive skill:** Knowing when agentic approaches help vs. hinder learning

### For ITS Design
- **Teach tool + teach with tool:** Agentic systems can be *both* tutor and tutee
- **Recursive pedagogy:** Advanced agents can teach novice users (and novice agents)
- **Transfer concerns:** Does learning with Claude Code transfer to other agentic tools?

## Related Pages
- [[computational-thinking-ai-agent-creation]] — No-code agent creation vs. coding assistants for CT development
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: tests agentic AI on real student coding/research tasks — directly relevant to education coding workflows
- [[genai-meta-analysis-programming-learning]] — Synthesis frames individual studies on teaching coding with AI agents
- [[human-ai-co-mentorship]] — human mentors + AI tools co-mentoring in project-based learning
- [[agentic-workflows-education]] — Four-paradigm framework (reflection, planning, tool use, multi-agent)
- [[collaborative-ai-tutoring]] — Agentic collaboration (ProPACT pair programming)
- [[programming-its]] — ITS for programming (SCRIPT for Python)
- [[ai-literacy]] — Learning to use AI tools effectively
- [[metacognition]] — Strategic tool selection and self-regulation
- [[lecturaagents-multi-agent-teaching]] — LecturaAgents
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Constructing Epistemic AI Literacy: Detecting Epistemic Aims and Processes in St

## Sources
- Naboulsi (2026). *Agentic Education: Using Claude Code to Teach Claude Code*. arXiv:2604.17460. [PDF](https://arxiv.org/pdf/2604.17460)
- [[agents-that-teach-incidental-learning]] — Knowledge Debt and "agents that teach" design principles
