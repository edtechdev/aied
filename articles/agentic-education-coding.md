---
title: Agentic Education with AI Coding Assistants
created: "2026-05-08T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [agentic-ai, generative-ai, higher-ed, scaffolding, stem-education, metacognition, ai-literacy, rag, ai-tutoring]
sources: ['raw/papers/2604.17460.md']
confidence: medium
---

> AI coding assistants proliferate rapidly, but pedagogical frameworks for learning them remain scarce — a paradox at the heart of agentic coding education.

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

## Connected Concepts

- [[agentic-ai]]
- [[curriculum-design]]
- [[metacognition]]
- [[cs-education]]
- [[programming-education]]
- [[ai-literacy]]
- [[scaffolding]]

## Connected Articles

- [[agentic-workflows-education]]
- [[collaborative-ai-tutoring]]
## Citation

Naboulsi, A.Z. (2026). [*Agentic Education with AI Coding Assistants*](https://arxiv.org/abs/2604.17460)
