---
title: TeachBench - Evaluating LLM Teaching Ability
created: "2026-05-08T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [llm, benchmark, formative-assessment, personalized-learning, feedback, ai-literacy, agentic-workflows]

sources: ['raw/papers/2601.21375.md']
confidence: high
---

> While LLMs are increasingly used as teaching assistants, their teaching capability remains insufficiently evaluated — a critical gap in current AIED research.

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

### vs. AI Tutor Effectiveness
- Traditional ITS effectiveness reviews focus on *human* learning outcomes with *deployed* systems
- TeachBench evaluates *model* teaching capability in *controlled* agentic settings
- Both highlight: **teaching is more than problem-solving**

### vs. Educational LLM Alignment
- Alignment benchmarks measure: "Does this model produce good teaching content?"
- TeachBench measures: "Does this model *improve learning* through instruction?"
- Complementary: alignment → content quality; TeachBench → instructional effectiveness

### vs. Agentic Workflows
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

- [[socratic-method]]
- [[ai-ed-evaluation]]
- [[intelligent-tutoring]]
- [[benchmark]]
- [[learning-gains]]
- [[simulating-students]]

## Connected Articles

- [[ai-tutor-effectiveness-review]]
- [[educational-llm-alignment]]
- [[agentic-workflows-education]]
- [[quantum-education-its]]
## Citation

Models, T.A.S.F.F.E.T.A.I.L.L. (2026). [*TeachBench - Evaluating LLM Teaching Ability*](https://arxiv.org/abs/2601.21375)
