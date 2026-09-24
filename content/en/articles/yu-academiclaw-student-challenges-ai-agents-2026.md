---
title: "AcademiClaw: When Students Set Challenges for AI Agents"
created: "2026-09-24T02:26:28-04:00"
updated: "2026-09-24T05:18:25-04:00"
type: article
sources: ['raw/papers/yu-academiclaw-student-challenges-ai-agents-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
foundations: [agentic-ai, human-ai-collaboration, limitations-in-aied-research]
pedagogy: [problem-solving, student-ai-interaction]
technology: [llm, machine-learning, reinforcement-learning, open-source]
ethics: [guardrails, privacy]
research_method: [system development, experiment]
discipline: [cs education]
audience: [researchers, software developers]
level: [undergraduate, graduate]
page_kind: [evaluation]
---

> **Synthesis:** Yu and colleagues introduce AcademiClaw, a bilingual benchmark of 80 long-horizon academic tasks contributed by university students from their own coursework, research, competitions, and personal projects. Undergraduates submitted problems a mainstream [[agentic-ai|AI agent]] had already failed, and expert review distilled 230 candidates into 80 tasks spanning 25+ professional domains, from olympiad mathematics and linguistics to [[reinforcement-learning|reinforcement learning]] and full-stack debugging, with 16 tasks requiring CUDA GPUs. Each task runs in an isolated Docker sandbox with the scoring rubric withheld, and evaluation combines six techniques on rubrics of three to six dimensions summing to 100 points, joined to a five-category [[guardrails|safety audit]]. Across six frontier models run through OpenClaw, the best passes only 55 percent, 23 tasks defeat every model, spending is uncorrelated with score, and models settle into distinct behavioral phenotypes.

## Key Findings

- **Tasks came from students.** Undergraduates submitted 230 problems they had already seen defeat a mainstream agent; review kept 80, split 49 English and 31 Chinese.
- **Six categories, 16 needing CUDA GPUs.** Research and analysis (21), ML and AI engineering (17), software engineering (17), STEM reasoning (11), language and creativity (7), applied work (7).
- **Each task runs in an isolated Docker sandbox** with a two-layer image hierarchy; the rubric stays hidden and only agent-created files reach scoring.
- **Scoring draws on six techniques.** Rubrics hold three to six dimensions summing to 100 points, spanning pattern matching, code execution, LLM-as-judge, vision assessment, browser testing, and structured outputs; pass is 75.
- **The best model passed only 55 percent.** Claude Opus 4.6 led on average score (71.9) and tied Sonnet 4.6 on pass rate; 23 of 80 tasks (28.8 percent) defeated all six models, and 8 drew every model below 50.
- **Token spending bought no quality.** Across 480 model-task evaluations, consumption and score were uncorrelated (r = -0.03), so the biggest spenders gained nothing.

## Scope and how the tasks were chosen

The task pool is bottom-up: each contributor confirmed at least one mainstream agent had failed the task. Submissions followed a fixed layout: a natural-language prompt, optional reference materials, a programmatic rubric, and metadata declaring expected deliverables. Experts reviewed each candidate for prompt clarity, rubric correctness, reproducibility, difficulty calibration, and coverage balance. Of 230 submissions, 150 were removed, rubric defects the largest cause (57), then prompt ambiguity (34), difficulty mismatch (28), coverage balancing (18), and infeasibility (13). The 80 tasks are natively bilingual, not translated, and the data, code, and scaffolding are released in the [AcademiClaw repository](https://github.com/GAIR-NLP/AcademiClaw).

## Evaluation machinery

Pattern matching inspects structure through regular expressions and AST parsing; code execution compiles agent programs and runs unit tests; an LLM-as-judge scores open-ended reports on a 0 to 100 scale; a vision LLM compares rendered graphics against references; Playwright drives agent-built web apps headlessly; structured-output validation checks JSON schemas, CSV values, BibTeX, and spreadsheet cells. The judge was chosen by pilot study: on 25 stratified outputs, Claude Sonnet 4.5 and GPT-5.2 best matched human annotations (0.93 and 0.91), and GPT-5.2's lower per-call cost made it the unified judge. A rule-based auditor scores the tool-call trajectory for destructive operations, information leakage, boundary compliance, privilege escalation, and supply-chain risk.

## What the diagnostics revealed beyond pass rates

Cross-category variation (26.3 points) far exceeds cross-model variation (8.8 points): what a task tests matters more than which model attempts it. STEM reasoning was hardest, averaging 50.6 with no model above 61.5, and competition tasks devastated every model: the International Linguistics Olympiad task averaged 17.3, and all six scored exactly 25 on React and FastAPI debugging. Rankings were category-dependent; GPT-5.4 swung 34.3 points between its best and worst categories. High-variance tasks exposed sharper boundaries: a family tree from One Hundred Years of Solitude separated models by 90 points, and a TensorFlow-to-PyTorch migration produced one catastrophic zero.

## What this means for practice

- **Benchmark agents on your own students' hard problems.** Problems that defeated a mainstream agent in a real course are more diagnostic than researcher-designed proxies.
- **Read category profiles, not headline averages.** One overall score conceals a 26.3-point spread between the easiest and hardest domains.
- **Do not equate effort with capability.** GPT-5.4 spent the fewest tokens (525K, 240 seconds per task) yet placed third, while Gemini 3.1 Pro burned 5.4 times as many for no quality gain; plan for reasoning depth rather than activity.
- **Treat boundary compliance as the live safety risk.** Privilege escalation was uniformly controlled, but workspace boundary violations drove nearly all divergence; most models scored above 80 on the safety audit, Gemini 3.1 Pro the outlier at 74.9, and only aggregate statistics are public.

## Limitations

- **Single institution and single discipline.** Contributors were computer science undergraduates in one Large Language Model Technologies course at Shanghai Jiao Tong University, a primarily Chinese context.
- **Reproduction is hardware-dependent.** The 16 GPU-intensive tasks need specialized hardware.
- **Single-attempt evaluation.** Each model got one try per task, so multi-trial and feedback-based protocols remain future work.
- **Incomplete model coverage.** Six models were tested, leaving recent releases and other providers unmeasured, and results are snapshots tied to one framework and judge.

Open questions remain: does the ceiling move under iterative refinement or multi-agent collaboration, do results hold outside China, could the benchmark extend to K-12 or professional training, and what does the token-quality disconnect mean for tutoring billed by token?

## Connected Concepts

- [[agentic-ai]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[reinforcement-learning]]
- [[guardrails]]
- [[pedagogical-llm-training]]
- [[math-education]]
- [[prompt-engineering]]
- [[human-in-the-loop-ai]]
- [[open-source]]

## Connected Articles

- [[chen-teacharena-language-agents-realistic-teaching-2026]] - An agent benchmark built on teaching tasks
- [[persistent-ai-agents-academic-research]] - Persistent agents in academic work
- [[ba-ai-agents-cscl-review-2026]] - AI agents in collaborative learning
- [[agentic-ai-education-scoping-review]] - Scoping review of agentic AI
- [[ai-tutor-behavioral-evaluation]] - Tutor effectiveness from 10,000 submissions
- [[ai-generated-feedback-higher-ed]] - AI feedback in university education
- [[scheu-mobile-chatbot-journaling-motivation-2026]] - Journaling chatbot for motivation

## Citation

Yu, J., Lu, P., Si, W., Lu, H., Wu, J., Tao, K., and 71 other authors (2026). [*AcademiClaw: When Students Set Challenges for AI Agents*](https://arxiv.org/abs/2605.02661). arXiv:2605.02661. https://doi.org/10.48550/arXiv.2605.02661