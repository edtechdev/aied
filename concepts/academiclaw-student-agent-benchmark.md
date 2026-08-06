---
title: 'AcademiClaw: When Students Set Challenges for AI Agents'
created: 2026-05-11
updated: 2026-05-11
type: concept
tags: [benchmark, higher-ed, llm, generative-ai, student-experience]
sources: [raw/papers/2605.02661.md]
confidence: high
---

# AcademiClaw: Student-Sourced AI Agent Benchmark

**Yu, Lu, Si et al. (77 authors, 2026)** — Shanghai Jiao Tong University, SII, GAIR. Open-source benchmark.

## Core Contribution

**AcademiClaw** is a bilingual benchmark of **80 complex, long-horizon tasks** sourced from university students' real academic workflows — homework, research projects, competitions, and personal projects — that they found current AI agents unable to solve. It extends the OpenClaw ecosystem beyond assistant-level tasks into academic-level agent evaluation.

## Benchmark Design

### Task Sourcing & Curation
- **230 student-submitted candidates** → rigorous expert review → 80 final tasks
- Tasks are *authentic*: real problems students couldn't solve with current AI agents
- **25+ professional domains**: olympiad-level math, linguistics, GPU-intensive RL, full-stack system debugging
- **16 tasks require CUDA GPU execution** — testing hardware-accelerated AI capabilities

### Execution & Scoring
- Each task runs in an **isolated Docker sandbox**
- Scored by **multi-dimensional rubrics** using 6 complementary techniques
- **Independent 5-category safety audit** provides behavioral analysis beyond task completion
- Bilingual (Chinese/English)

### Key Results
- **6 frontier models** tested
- **Best pass rate: 55%** — no model exceeds this
- Sharp capability boundaries across task domains
- Divergent behavioral strategies between models
- **Disconnect between token consumption and output quality** — more tokens ≠ better results

## Why This Matters for AI in Education

AcademiClaw flips the evaluation paradigm: instead of researchers designing artificial benchmarks, **students define what AI agents should be able to do**. This aligns evaluation with real educational needs:

1. **Authentic task validity**: Tasks reflect genuine academic workflows, not synthetic proxies
2. **Capability gap diagnosis**: The 55% ceiling reveals where AI agents still fail students
3. **Token-output disconnect**: Challenges the assumption that more compute solves academic problems — relevant to AI tutoring cost/benefit analysis
4. **Safety in academic contexts**: The 5-category safety audit surfaces risks specific to educational AI deployment

## Connection to the Wiki

- **[[teachbench-llm-teaching-evaluation]]**: Both are benchmarks evaluating AI in educational contexts — TeachBench for teaching quality, AcademiClaw for academic task completion
- **[[agentic-education-coding]]**: AcademiClaw tests agentic capabilities directly relevant to coding education workflows
- **[[ai-k12-evidence-base]]**: AcademiClaw's rigorous multi-dimensional evaluation methodology models best practices for AI-in-education benchmarks
- **[[educational-vlm-evaluation]]**: Shares the theme of evaluating AI capabilities on educationally-relevant tasks, complementing DrawEduMath's VLM focus
- **[[benchmark]]**: Directly contributes to the wiki's benchmark concept — AcademiClaw as an exemplar of student-sourced evaluation
- **[[programming-its]]**: Many AcademiClaw tasks involve programming; the benchmark provides a diagnostic framework for what programming ITS agents need to handle
- **[[automated-grading]]**: The 6-technique rubric approach connects to automated assessment methodology
- **[[ai-learning-transfer]]**: The capability boundary findings raise transfer questions — if frontier models struggle with academic tasks, how well do AI tutoring systems transfer?

## Limitations

- Contributor pool concentrated at a single institution (SJTU) — limits cultural and disciplinary diversity
- GPU-intensive tasks (16/80) require specialized hardware, limiting reproducibility
- Bilingual but primarily Chinese university context
- Safety audit releases aggregate statistics only, not full violation traces

## Open Questions

- How would the 55% pass rate change with iterative refinement or multi-agent collaboration?
- Would results differ at non-Chinese universities with different academic workflows?
- Can the benchmark be adapted for K-12 or professional training contexts?
- What does the token-output disconnect imply for AI tutoring systems that bill by token usage?

## Source

- [https://arxiv.org/abs/2605.02661](https://arxiv.org/abs/2605.02661)

## Related Pages

- [[multimodal-ai-tutoring]] — Multimodal AI capabilities tested in academic contexts
- [[collaborative-ai-tutoring]] — Agent collaboration strategies relevant to AcademiClaw task types
- [[pedagogical-llm-training]] — Training pipelines that could target AcademiClaw capability gaps
- [[ai-tutor-behavioral-evaluation]] — Behavioral evaluation axis for AI tutors complements AcademiClaw's safety audit

## Citation

**APA:** Yu, J., Lu, P., Si, W., ... & Liu, P. (2026). *AcademiClaw: When Students Set Challenges for AI Agents*. arXiv:2605.02661.
