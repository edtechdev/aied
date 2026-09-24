---
title: "Cognitive Agent Compilation for Explicit Problem Solver Modeling"
created: "2026-09-24T02:29:10-04:00"
updated: "2026-09-24T03:04:28-04:00"
type: article
sources: ['raw/papers/moon-cognitive-agent-compilation-problem-solver-modeling-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
foundations: [theories-and-frameworks, limitations-in-aied-research]
pedagogy: [problem-solving, cognitive-psychology, misconceptions, prior-knowledge]
technology: [intelligent-tutoring, student-modeling, knowledge-tracing, llm, simulating-students]
ethics: [explainable-ai]
research_method: [system development]
discipline: [biology education, learning sciences]
audience: [researchers, software developers]
page_kind: [framework]
---
> **Synthesis:** Moon, Rosé, and Stamper (2026) propose Cognitive Agent Compilation (CAC), in which a strong teacher language model compiles problem-solving knowledge into an explicit target agent rather than leaving it latent in weights. The agent attempts a problem using only its declared knowledge base, the teacher inspects the trace for missing knowledge components or misapplied strategies, then injects corrective knowledge as inspectable artifacts before the agent retries until both answers and process constraints hold. CAC separates knowledge representation, problem-solving policy, and verification and update rules so that behavior can be attributed to declared structure. The proof of concept uses small, zero-shot models throughout. On 27 biology problems the agent accumulated 188 declarative memory entries at a mean of 3.1 iterations per problem, then stalled on the 28th after 150 iterations. CAC is offered as a bounded, inspectable problem-solving model, not a validated learner model.

## Key Findings

- **A teacher model compiles knowledge rather than tutoring directly.** It reads the target-agent specification, current knowledge base, and failed trace, then authors new declarative memory items in the required format.
- **The cycle is failure driven.** Corrective knowledge is injected against diagnosed missing knowledge components or misconception triggers, and the agent retries until answers and process constraints are satisfied.
- **LLMs cannot simulate not knowing.** Models struggle to suppress knowledge generation, making them poor proxies for student learners, and expertise alone does not confer teaching skill. CAC declares what the system assumes a learner knows.
- **Everything in the prototype is small and untuned.** The executor, the retrieval model, and the teacher all ran zero-shot without fine-tuning.
- **Retrieval broke down after 27 compiled problems.** The knowledge base reached 188 declarative memory entries at 3.1 iterations per problem before the run ended at problem 28.
- **Two failure modes dominate the discussion.** Prior knowledge lets a capable executor answer without the compiled structure, and the fan effect degrades retrieval as items share overlapping cues.

## Three separated parts, and the teacher that compiles them

The framework's central claim is that a problem-solving agent should not be one opaque model. CAC separates knowledge representation, the explicit knowledge base whose items carry a natural language description plus the goal state and working memory state in which they apply, from problem-solving policy, the rules deciding whether to set a subgoal, apply retrieved knowledge, or answer, and from verification and update rules, which decide when a trace counts as successful and what corrective knowledge is added. The teacher reads the failed trace and the current knowledge base, uses knowledge base inference and similarity scoring tools, and submits new declarative memories that accumulate monotonically. Because corrections arrive as readable items such as rules or restructured retrieval entries rather than weight updates, an educator can inspect what the system assumes the learner knows and revise it.

## An early proof of concept built from small models

The authors call this an early proof of concept, not a validated system. The cognitive agent uses Qwen2.5-2B as its executor, embedding-gemma at 300M parameters for similarity retrieval, and gemma-3-27b-it run locally at 4-bit quantization as the teacher, all under zero-shot prompting. Problems came from OLI_Biology in the CMU DataShop, chosen for its dependence on declarative memory and its logged student interactions. A fully deterministic controller, such as ACT-R style production rules, would be predictable but hard to extend beyond a narrow problem space, while a small language model widens the reachable space and reintroduces a residual black-box component whose prior knowledge cannot be fully inspected. Fewer parameters do not make the executor explainable; they change how much latent capacity remains.

## What the prototype failure modes show

Three problems surfaced. First, prior knowledge works against the framework: a model large enough answers correctly without the cognitive structure, while a model too small cannot follow rigid instructions. Second, the fan effect: as the knowledge base grew, similarity retrieval stopped surfacing newly added items, so the agent stalled and sometimes retrieved irrelevant knowledge, a pattern consistent with deceptive overgeneralization. Third, collaborative cheating, where the teacher handed the agent the final answer and bypassed the intended process; answer-specific items like that can be filtered out because they do not generalize. Two questions stay open: how faithfully a teacher compiles its own knowledge into a bounded agent, and whether the approach extends past a single discipline.

## What this means for practice

- **Treat the knowledge base as the unit of review.** Corrections are readable items, so educators can inspect and edit what the system assumes a learner knows.
- **Scale retrieval deliberately.** Similarity search stopped surfacing new items as the base grew, so a more selective mechanism is needed before the base expands.
- **Test whether success depends on compiled knowledge.** Removing a core item and re-running the problem shows whether the executor leans on prior knowledge instead.
- **Do not read this prototype as a learner model.** No student data was used, and goals such as predicting resolvability from knowledge states stay untested.

## Limitations

- **No validation against students.** Design targets such as simulating problem solving under restricted knowledge are criteria, not established capabilities.
- **Dependence on the specific models.** Six sub-1B models could not follow the structured instructions, so the prototype settled on a single 2B executor.
- **An unresolved black-box remainder.** Knowledge ablation against answer persistence and downstream knowledge tracing are proposed tests, not evidence that what stays latent is small enough for educational use.

## Connected Concepts

- [[adaptive-learning]]
- [[agentic-ai]]
- [[explainable-ai]]
- [[knowledge-tracing]]
- [[llm]]
- [[misconceptions]]
- [[pedagogical-llm-training]]
- [[personalized-learning]]
- [[prior-knowledge]]
- [[problem-solving]]
- [[student-modeling]]

## Connected Articles

- [[agentic-workflows-education]]
- [[deceptive-overgeneralization-adaptive-learning-2026]]
- [[huang-interpretable-knowledge-tracing-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[neural-symbolic-knowledge-tracing]]
- [[nie-personavlm-long-term-personalization-2026]]
- [[prober-ai-inquiry-writing]]
- [[simulating-students-llm-review-2026]]

## Citation

Moon, H., Rosé, C., & Stamper, J. (2026). [*Cognitive Agent Compilation for Explicit Problem Solver Modeling*](https://arxiv.org/abs/2605.07040). Accepted to AIED 2026 Blue Sky. arXiv:2605.07040. https://doi.org/10.48550/arXiv.2605.07040
