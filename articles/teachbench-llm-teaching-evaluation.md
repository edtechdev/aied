---
title: TeachBench - Evaluating LLM Teaching Ability
created: "2026-05-08T04:33:04-04:00"
updated: "2026-09-16T17:22:20-04:00"
type: article
foundations: [agentic-ai, ai-literacy]
technology: [llm, personalized-learning]
assessment: [feedback, formative-assessment]
audience: [researchers, instructors, software developers]
sources: ['raw/papers/2601.21375.md']
confidence: high
discipline: [math education, physics education, chemistry education]
level: [secondary]
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** While LLMs are increasingly used as [[teacher-role|teaching]] assistants, their teaching capability remains insufficiently evaluated — a critical gap in current [[ai-education|AIED]] [[research-methods-aied|research]].

> Syllabus-grounded framework for measuring [[llm]] teaching capability via student performance improvement after multi-turn instruction.

## The Gap in LLM Evaluation

**Li et al. (2026)** address a critical gap: while LLMs are increasingly used as teaching assistants, their **teaching capability remains insufficiently evaluated**.

### Limitations of Existing Benchmarks
| Benchmark Type | Focus | Limitation |
|---------------|-------|-------------|
| **[[problem-solving]]** (MMLU, HELM, GSM8K) | Answer correctness | Measures solver, not teacher |
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
| **Domain variation:** Math teaching effective (7.63pt gain with Qwen3-235B), but [[physics-education|physics]]/[[chemistry-education|chemistry]] challenging | Teaching ability is [[discipline-specific-aied|domain-specific]], not generalized |
| **Example problems backfire:** Models shift to error correction vs. syllabus-grounded instruction | Current LLMs struggle with structured teaching vs. reactive problem-solving |
| **Teaching ≠ Solving:** Models good at solving aren't necessarily good at teaching | Teaching ability is a **distinct LLM behavior dimension** |

## Connection to Existing Work

### vs. AI Tutor Effectiveness
- Traditional ITS effectiveness reviews focus on *human* [[learning-gains|learning outcomes]] with *deployed* systems
- TeachBench evaluates *model* teaching capability in *controlled* agentic settings
- Both highlight: **teaching is more than problem-solving**

### vs. Educational LLM Alignment
- Alignment [[benchmark|benchmarks]] measure: "Does this model produce good teaching content?"
- TeachBench measures: "Does this model *improve learning* through instruction?"
- Complementary: alignment → content quality; TeachBench → instructional effectiveness

### vs. Agentic Workflows
- TeachBench operationalizes the **"teacher agent"** paradigm in agentic education
- Reveals current LLMs struggle with *structured [[pedagogy|pedagogical]] planning* (vs. reactive Q&A)
- Aligns with: agentic reflection, planning, and tool use in educational contexts

## What this means for practice

- **Researchers.** Evaluate teaching as a distinct capability rather than inferring it from solving: syllabus-grounded evaluation measures whether a model improves a learner's performance, whereas [[problem-solving]] and exam-centric [[benchmark|benchmarks]] such as MMLU, GSM8K, and AGIEval score answer correctness alone.
- **Researchers.** Restrict [[teacher-role|teacher agents]] to syllabus knowledge points and example problems and hold the [[simulating-students|student agent]] fixed, so the model cannot be handed the items it is meant to teach and results stay reproducible across runs.
- **Instructors.** Do not carry a model's teaching strength across subjects: the strongest result was a 7.63-point gain in mathematics with Qwen3-235B-A22B-Instruct, while [[physics-education|physics]] and [[chemistry-education|chemistry]] showed the weakest teaching outcomes.
- **Designers.** Test whether worked examples help before attaching them to a tutor: incorporating example problems shifted models toward example-specific error correction instead of syllabus-grounded instruction.
- **Instructors.** Judge a [[intelligent-tutoring|tutoring system]] on [[learning-gains|learning gains]] accumulated over multi-turn instruction, not on per-turn response quality or user satisfaction.

## Limitations

- Teaching is measured with LLM-based student agents standing in as proxies for human learners; the authors state this controlled setting may not fully reflect the diversity and complexity of human learning behaviors.
- No human teachers were included as a baseline, so the experiments rank models against one another rather than against human instructional performance.
- The study of example-based teaching is limited to a specific interaction design; the authors note that alternative instructional protocols may produce different outcomes.
- The benchmark is built from Gaokao (Chinese National College Entrance Examination) syllabi and questions across seven subjects — Mathematics, Physics, Chemistry, Biology, History, Geography, and Politics — so the domain rankings are tied to that exam's knowledge structure.

## Connected Concepts

- [[socratic-method]]
- [[ai-ed-evaluation]]
- [[intelligent-tutoring]]
- [[benchmark]]
- [[learning-gains]]
- [[simulating-students]]

## Connected Articles

- [[zerkouk-comprehensive-review-its-2025]]
- [[educational-llm-alignment]]
- [[agentic-workflows-education]]
- [[quantum-education-its]]
## Citation

Li, Z., Song, S., Ma, J., Li, R., Zeng, Y., Li, M., et al. (2026). [*TeachBench - Evaluating LLM Teaching Ability*](https://arxiv.org/abs/2601.21375).
