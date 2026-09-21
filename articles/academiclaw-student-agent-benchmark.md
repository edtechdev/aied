---
title: "AcademiClaw: When Students Set Challenges for AI Agents"
created: "2026-05-11T04:33:04-04:00"
updated: "2026-09-19T07:42:07-04:00"
type: article
technology: [generative-ai, intelligent-tutoring, llm, pedagogical-llm-training, open-source]
assessment: [automated-assessment]
audience: [learners, software developers]
level: [higher ed]
sources: ['raw/papers/2605.02661.md']
confidence: high
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** **AcademiClaw** is a bilingual [[benchmark]] of **80 complex, long-horizon tasks** sourced from university students' real academic workflows — homework, research projects, competitions, and personal projects — that they found current [[agentic-ai|AI agents]] unable to solve. It extends the OpenClaw ecosystem beyond assistant-level tasks into academic-level [[ai-ed-evaluation|agent evaluation]].
## Benchmark Design

### Task Sourcing & Curation
- **230 student-submitted candidates** → rigorous expert review → 80 final tasks
- Tasks are *authentic*: real problems students couldn't solve with current AI agents
- **25+ professional domains**: olympiad-level [[math-education|math]], linguistics, GPU-intensive [[reinforcement-learning|RL]], full-stack system debugging
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

AcademiClaw flips the evaluation paradigm: instead of researchers designing artificial [[benchmark|benchmarks]], **students define what [[agentic-ai|AI agents]] should be able to do**. This aligns evaluation with real educational needs:

1. **Authentic task validity**: Tasks reflect genuine academic workflows, not synthetic proxies
2. **Capability gap diagnosis**: The 55% ceiling reveals where AI agents still fail students
3. **Token-output disconnect**: Challenges the assumption that more compute solves academic problems — relevant to [[intelligent-tutoring|AI tutoring]] cost/benefit analysis
4. **Safety in academic contexts**: The 5-category safety audit surfaces risks specific to educational AI deployment

## What this means for practice

- **Instructors.** Test an agent against real academic tasks before putting it in front of students: on AcademiClaw's 80 tasks distilled from 230 student submissions, the best of six frontier models passed only 55%, and 23 of 80 tasks (28.8%) defeated all six.
- **Learners.** Do not treat a fluent agent answer as a solved problem on long-horizon work: eight of the 80 tasks drew every model below 50 out of 100, with olympiad-level math remaining universally unsolved.
- **Software developers.** Build evaluations on authentic task specifications — natural-language prompt, reference materials, and a rubric withheld from the agent — and score them in an isolated sandbox, as AcademiClaw does across 25+ professional domains.
- **Instructors.** Budget per task rather than per token: GPT-5.4 averaged 525K tokens and 240 seconds per task, while Gemini 3.1 Pro consumed 5.4× more tokens without a commensurate quality advantage.
- **Designers.** Audit behavior, not just completion: AcademiClaw's five-category safety audit covers unauthorized file deletion or system modification and information leakage, with most models above 80 but Gemini 3.1 Pro at 74.9.

## Limitations

- Contributor pool concentrated at a single institution (SJTU) — limits cultural and disciplinary diversity
- GPU-intensive tasks (16/80) require specialized hardware, limiting reproducibility
- Bilingual but primarily Chinese university context
- Safety audit releases aggregate statistics only, not full violation traces

## Open Questions

- How would the 55% pass rate change with iterative refinement or multi-agent collaboration?
- Would results differ at non-Chinese universities with different academic workflows?
- Can the benchmark be adapted for [[k-12|K-12]] or [[professional-training|professional training]] contexts?
- What does the token-output disconnect imply for [[intelligent-tutoring|AI tutoring]] systems that bill by token usage?

 token usage?

## Connected Concepts

- [[benchmark]]
- [[pedagogical-llm-training]]
- [[agentic-ai]]
- [[math-education]]
- [[prompt-engineering]]
- [[human-in-the-loop-ai]]
- [[open-source]]
- [[ai-ed-evaluation]]

## Connected Articles

- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[scheu-mobile-chatbot-journaling-motivation-2026]] — Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement

## Citation

Yu, J., Lu, P., Si, W., Lu, H., Wu, J., Tao, K., et al. (2026). [AcademiClaw: When Students Set Challenges for AI Agents](https://arxiv.org/abs/2605.02661).
