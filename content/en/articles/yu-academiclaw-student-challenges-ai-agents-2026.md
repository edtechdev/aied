---
title: "AcademiClaw: When Students Set Challenges for AI Agents"
created: "2026-09-24T02:26:28-04:00"
updated: "2026-09-24T02:26:28-04:00"
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

> **Synthesis:** **Synthesis:** Yu and colleagues introduce AcademiClaw, a bilingual benchmark of 80 long-horizon academic tasks that university students contributed from their own coursework, research projects, competitions, and personal projects. Rather than having researchers design tasks top-down, undergraduates submitted problems they had already tried with a mainstream [[agentic-ai|AI agent]] and found unsolvable, and expert review distilled 230 candidates into a final set spanning more than 25 professional domains, from olympiad mathematics and linguistics to [[reinforcement-learning|reinforcement learning]] and full-stack debugging, with 16 tasks requiring CUDA GPUs. Each task runs in an isolated Docker sandbox, the scoring rubric is withheld from the agent, and evaluation combines six verification techniques on rubrics of three to six dimensions that sum to 100 points, joined to a five-category [[guardrails|safety audit]]. Running six frontier models through the OpenClaw framework, the authors report that the best model passes only 55 percent of tasks, that 23 tasks defeat every model tested, that token spending is uncorrelated with score, and that models settle into distinct behavioral phenotypes.

## Key Findings

- **Tasks came from students, not researchers.** Undergraduates submitted 230 candidate problems they had already watched defeat a mainstream agent; expert review kept 80, split into 49 English and 31 Chinese tasks.
- **Six categories, 16 tasks requiring CUDA GPUs.** Research and analysis (21), ML and AI engineering (17), software engineering (17), STEM reasoning (11), language and creativity (7), and applied work (7).
- **Every task runs in an isolated Docker sandbox** built from a two-layer image hierarchy; the rubric stays hidden, and only files the agent created or modified are forwarded to scoring.
- **Scoring draws on six techniques.** Each rubric holds three to six dimensions summing to 100 points, using pattern matching, code execution, LLM-as-judge, vision LLM assessment, browser testing, and structured-output validation; pass is 75.
- **The best model passed only 55 percent of tasks.** Claude Opus 4.6 led on average score (71.9) and tied Claude Sonnet 4.6 on pass rate, while 23 of 80 tasks defeated all six models.
- **Token spending bought no quality.** Across 480 model-task evaluations, token consumption and task score were effectively uncorrelated (r = -0.03), and the largest spenders gained nothing for it.

## Scope and how the tasks were chosen

AcademiClaw's task pool is bottom-up: every task came from a real academic workflow, and each contributor had to confirm that at least one mainstream agent had failed it or needed extensive multi-turn help. Submissions followed a fixed layout with a natural-language prompt, optional reference materials, a programmatic rubric, and metadata declaring expected deliverables. Domain experts then reviewed each candidate against five criteria: prompt clarity, rubric correctness, reproducibility, difficulty calibration, and coverage balance. Of 230 submissions, 150 were removed, with rubric defects the largest cause (57), then prompt ambiguity (34), difficulty mismatch (28), coverage balancing (18), and infeasibility (13). The surviving 80 tasks are natively bilingual rather than translated, and the data, code, and scaffolding are released in the [AcademiClaw repository](https://github.com/GAIR-NLP/AcademiClaw).

## Evaluation machinery

Scoring runs on a unified 0 to 100 scale. Pattern matching inspects structure through regular expressions, keyword detection, and AST parsing; code execution compiles agent-produced programs and runs unit tests against known cases; an LLM-as-judge scores open-ended reports against a structured rubric; a vision LLM compares rendered graphics against references; Playwright drives agent-built web applications in a headless browser; and structured-output validation checks JSON schemas, CSV values, BibTeX parsing, and spreadsheet cells. The judge was itself chosen by pilot study: on 25 stratified outputs, Claude Sonnet 4.5 and GPT-5.2 matched human annotations best (correlations of 0.93 and 0.91), and GPT-5.2's lower per-call cost made it the unified judge. A separate rule-based auditor scores the tool-call trajectory across destructive operations, information leakage, boundary compliance, privilege escalation, and supply-chain risk.

## What the diagnostics revealed beyond pass rates

Real structure hides behind aggregate scores. Cross-category variation, a 26.3-point spread, far exceeds cross-model variation of 8.8 points, so what a task tests matters more than which model attempts it. STEM reasoning was hardest, averaging 50.6 with no model above 61.5, and competition problems were universally devastating: on the International Linguistics Olympiad task the mean score was 17.3, and every model scored exactly 25 on the React and FastAPI debugging task. Rankings were category-dependent, and GPT-5.4 swung 34.3 points between its best and worst categories. High-variance tasks exposed sharper boundaries: extracting a family tree from One Hundred Years of Solitude separated models by 90 points, and a TensorFlow-to-PyTorch migration produced a single catastrophic zero. Token use varied by more than fivefold yet correlated almost not at all with quality.

## What this means for practice

- **Benchmark agents on your own students' hard problems.** Tasks that defeated a mainstream agent in a real course are more diagnostic than researcher-designed proxies.
- **Read category profiles, not headline averages.** A single overall score conceals the 26.3-point spread between the easiest and hardest domains.
- **Do not equate effort with capability.** Token spend and tool-call volume predicted nothing, so plan for depth of reasoning rather than activity.
- **Treat boundary compliance as the live safety risk.** Privilege escalation was uniformly controlled, but workspace boundary violations drove nearly all divergence between models.

## Limitations

- **Single institution and single discipline.** Tasks came from computer science undergraduates at one university, so range is narrow despite the domain count.
- **Single-attempt evaluation.** Each model got one try per task, so multi-trial and feedback-based protocols remain future work.
- **Incomplete model coverage.** Six frontier models were tested, leaving recent releases and several providers unmeasured, and results are snapshots tied to one framework and judge.

## Connected Concepts

- [[agentic-ai]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[reinforcement-learning]]
- [[guardrails]]

## Connected Articles

- [[eduagentbench-agent-teaching-benchmark]] - An agent benchmark built around teaching tasks
- [[persistent-ai-agents-academic-research]] - What persistent agents mean for academic work
- [[ba-ai-agents-cscl-review-2026]] - Review of AI agents in collaborative learning

## Citation

Yu, J., Lu, P., Si, W., and 74 other authors (2026). [*AcademiClaw: When Students Set Challenges for AI Agents*](https://arxiv.org/abs/2605.02661). arXiv:2605.02661. https://doi.org/10.48550/arXiv.2605.02661