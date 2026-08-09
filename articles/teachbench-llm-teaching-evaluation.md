---
title: TeachBench - Evaluating LLM Teaching Ability
created: 2026-05-08
updated: 2026-05-08
type: article
tags: [llm, benchmark, formative-assessment, personalized-learning, feedback-loop, ai-literacy, agentic-workflows]
sources: ['raw/papers/2601.21375.md']
confidence: high
---

> **Li et al. (2026)** address a critical gap: while LLMs are increasingly used as teaching assistants, their **teaching capability remains insufficiently evaluated**.

# TeachBench: Evaluating LLM Teaching Ability

> Syllabus-grounded framework for measuring LLM teaching capability via student performance improvement after multi-turn instruction.

## The Gap in LLM Evaluation

**Li et al. (2026)** address a critical gap: while LLMs are increasingly used as teaching assistants, their **teaching capability remains insufficiently evaluated**.

### Limitations of Existing Benchmarks
| Benchmark Type | Focus | Limitation |
|---------------|-------|-------------|
| **Problem-solving** (MMLU, HELM, GSM8K) | Answer correctness | Measures solver, not teacher |
| **Exam-centric** (AGIEval, C-Eval, GAOKAO-Bench) | Exam performance | Still solution-centric |
| **Tutoring dialogues** (MathDial, TutorBench) | Per-turn response quality | Misses end-to-end teaching effectiveness |

TeachBench shifts the evaluation target: **from solving to teaching**.

## Syllabus-Grounded Framework

### Core Design Principles
1. **Knowledge-centered:** Evaluation based on structured knowledge points (syllabus), not target questions
2. **Leakage-controlled:** Teacher agents restricted to knowledge points + example problems (no access to test items)
3. **Outcome-based:** Teaching effectiveness measured by **student agent's performance improvement**

### Workflow
```
Syllabus → Knowledge Tree → Teacher Agent (multi-turn instruction) → Student Agent → Performance Gain
```

## Key Findings from Gaokao Experiments

Using Chinese National College Entrance Examination (Gaokao) data across multiple subjects:

| Finding | Implication |
|---------|-------------|
| **Domain variation:** Math teaching effective (7.63pt gain with Qwen3-235B), but physics/chemistry challenging | Teaching ability is domain-specific, not generalized |
| **Example problems backfire:** Models shift to error correction vs. syllabus-grounded instruction | Current LLMs struggle with structured teaching vs. reactive problem-solving |
| **Teaching ≠ Solving:** Models good at solving aren't necessarily good at teaching | Teaching ability is a **distinct LLM behavior dimension** |

## Connection to Existing Work

### vs. [[ai-tutor-effectiveness-review|AI Tutor Effectiveness]]
- Traditional ITS effectiveness reviews focus on *human* learning outcomes with *deployed* systems
- TeachBench evaluates *model* teaching capability in *controlled* agentic settings
- Both highlight: **teaching is more than problem-solving**

### vs. [[educational-llm-alignment|Educational LLM Alignment]]
- Alignment benchmarks measure: "Does this model produce good teaching content?"
- TeachBench measures: "Does this model *improve learning* through instruction?"
- Complementary: alignment → content quality; TeachBench → instructional effectiveness

### vs. [[agentic-workflows-education|Agentic Workflows]]
- TeachBench operationalizes the **"teacher agent"** paradigm in agentic education
- Reveals current LLMs struggle with *structured pedagogical planning* (vs. reactive Q&A)
- Aligns with: agentic reflection, planning, and tool use in educational contexts

## Implications for AI in Education

### For LLM Development
- **Teaching ability as benchmark dimension:** Should be evaluated alongside reasoning, coding, etc.
- **Domain-specific training:** Models need pedagogy-grounded training, not just subject knowledge
- **Structured vs. reactive:** TeachBench exposes the gap between knowing and teaching

### For ITS Design
- **Syllabus grounding:** Effective teaching requires structured knowledge (cf. [[quantum-education-its|quantum ITS knowledge graph]])
- **Multi-turn instruction:** Teaching effectiveness emerges over *sequences* of interactions, not single turns
- **Evaluation rigor:** ITS should be evaluated on *learning gains*, not just user satisfaction

### For Benchmark Design
- **Leakage control:** Don't give models the test questions they're supposed to teach
- **Student proxies:** Fixed-capability student agents enable reproducible evaluation
- **Outcome metrics:** Performance improvement > response quality scores

## Connected Concepts

- [[ai-literacy]]
- [[formative-assessment]]

## Connected Articles

- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[eduagentbench-agent-teaching-benchmark]] — Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows
- [[educational-llm-alignment]] — Educational LLM Alignment
- [[multi-agent-instructional-design]] — Multi-Agent Systems for Instructional Design
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles: A Benchmark of Scientific and Mathematical Riddles for Quizzing Large Language Models
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[quantum-education-its]] — Quantum Education Intelligent Tutoring
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice

## Citation

Models, T.A.S.F.F.E.T.A.I.L.L. (2026). [*TeachBench - Evaluating LLM Teaching Ability*](https://arxiv.org/abs/2601.21375)
