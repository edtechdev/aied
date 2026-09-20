---
title: "MindCopilot: Towards Formalizing and Evaluating Granular Human-LLM Co-Writing"
created: "2026-05-25T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
technology: [human-in-the-loop-ai, llm]
assessment: [feedback]
methods: [benchmark]
audience: [software developers]
discipline: [writing education]
level: [higher ed]
sources: ['raw/papers/2605.23535.md']
confidence: high
page_kind: [framework, evaluation]
---

> **Synthesis:** MindCopilot introduces a formal framework for evaluating human-LLM co-writing that shifts from output-only metrics (BLEU, ROUGE) to **interaction-aware evaluation**. The paper models co-writing as a **Human-in-the-Loop Markov Decision Process (HiL-MDP)**, where writing is a sequence of granular decisions: accept, edit, or reject each AI suggestion. The **Co-Writing Fidelity Suite** introduces two novel metrics — **Hierarchical Acceptance Rate** (quantifying acceptance across granularity levels) and **Knowledge-aware Editing Distance** (measuring cognitive effort of editing suggestions). Evaluated across 1,688 queries from 16 writing domains, with a 30-participant validation study.

For [[writing-education]], this represents a paradigm shift. Traditional [[automated-essay-scoring|automated writing evaluation]] focuses on final text quality, missing the process-level decisions that constitute real learning. The HiL-MDP framework aligns with process-oriented writing [[pedagogy]] — capturing where students accept, modify, or reject AI suggestions provides rich diagnostic information beyond what a final essay grade reveals. The work connects to [[cyberscholar-genai-writing-feedback]] and [[structured-llm-feedback-programming]] by establishing that interaction structure (when/how suggestions appear) significantly affects user behavior. For [[becerra-aicofe-feedback-2026]], the acceptance/editing metrics offer a template for evaluating collaborative feedback workflows. Accepted to IJCAI 2026, this work bridges [[human-in-the-loop-ai]] theory with practical writing tool design, advancing [[llm]]-based educational technology beyond static quality assessment toward dynamic interaction modeling.

## What this means for practice

- **Designers.** Treat acceptance and editing cost as two separate design targets rather than one quality score — the two metrics come apart across models, with GPT-5.1 achieving the highest HAR overall while Gemini-2.5-Pro attained the lowest KED.
- Log accept, edit, and reject decisions at paragraph granularity and report them by document position: paragraph-level acceptance rates rose monotonically from the front to the middle and back sections of articles across all evaluated models and interaction settings.
- Tune proactivity thresholds to writing stage and domain; acceptance rates were consistently lower in Creative than in Scientific domains, so one threshold will over-suggest or under-suggest depending on the genre.
- Model interaction history instead of treating each suggestion as stateless: moving from L1 to L2 yielded systematic gains in acceptance and reduced editing effort, and proactive collaboration lowered window switching and completion time for the 30 study participants.

## Limitations

- The offline evaluation substitutes a human simulator: user feedback is abstracted into behavioral proxies grounded in observed co-writing patterns, so HAR and KED approximate acceptance behavior rather than measuring it.
- The validation user study rests on 30 participants recruited from universities and technology companies, using a single unified LLM backend (GPT-5.1).
- The framework covers one instantiation of co-writing — proactive suggestion-based completion; the authors state that generalization to other collaborative forms, such as outlining assistance or structural critiquing, remains an open question.
- The controlled dataset contains 60 human-authored articles across 16 domains and 1,688 continuation queries, and the authors note the absence of the longitudinal user studies needed to show how writing preferences evolve.

## Connected Concepts

- [[writing-education]]
- [[human-in-the-loop-ai]]
- [[llm]]
- [[human-ai-collaboration]]
- [[ai-feedback-quality]]
- [[feedback]]
- [[automated-assessment]]
- [[academic-integrity]]
- [[agency]]
## Connected Articles

- [[cyberscholar-genai-writing-feedback]]
- [[structured-llm-feedback-programming]]
- [[becerra-aicofe-feedback-2026]]
- [[humanlike-ai-collaborative-writing]]
## Citation

Youqing Fang, Yinhao Tang, Yanan Sun, Jiangning Liu, Ziyi Wang, Xun Zhao, Bin Liu, Weiming Zhang, Kuikun Liu, Wenwei Zhang, Kai Chen (2026). [MindCopilot: Towards Formalizing and Evaluating Granular Human-LLM Co-Writing](https://arxiv.org/abs/2605.23535). IJCAI 2026.
