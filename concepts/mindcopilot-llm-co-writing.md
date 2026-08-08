---
title: 'MindCopilot: Towards Formalizing and Evaluating Granular Human-LLM Co-Writing'
created: 2026-05-25
updated: 2026-05-25
type: concept
tags: [feedback-loop, higher-ed, human-in-the-loop, llm, writing-education]
sources: [raw/papers/2605.23535.md]
confidence: high
---

# MindCopilot: Towards Formalizing and Evaluating Granular Human-LLM Co-Writing

**Youqing Fang, Yinhao Tang, Yanan Sun, Jiangning Liu, Ziyi Wang, Xun Zhao, Bin Liu, Weiming Zhang, Kuikun Liu, Wenwei Zhang, Kai Chen (2026)** — University of Science and Technology of China / Shanghai AI Laboratory. *IJCAI 2026*.

MindCopilot introduces a formal framework for evaluating human-LLM co-writing that shifts from output-only metrics (BLEU, ROUGE) to **interaction-aware evaluation**. The paper models co-writing as a **Human-in-the-Loop Markov Decision Process (HiL-MDP)**, where writing is a sequence of granular decisions: accept, edit, or reject each AI suggestion. The **Co-Writing Fidelity Suite** introduces two novel metrics — **Hierarchical Acceptance Rate** (quantifying acceptance across granularity levels) and **Knowledge-aware Editing Distance** (measuring cognitive effort of editing suggestions). Evaluated across 1,688 queries from 16 writing domains, with a 30-participant validation study.

For [[writing-education]], this represents a paradigm shift. Traditional automated writing evaluation focuses on final text quality, missing the process-level decisions that constitute real learning. The HiL-MDP framework aligns with process-oriented writing pedagogy — capturing where students accept, modify, or reject AI suggestions provides rich diagnostic information beyond what a final essay grade reveals. The work connects to [[cyberscholar-genai-writing-feedback]] and [[structured-llm-feedback-programming]] by establishing that interaction structure (when/how suggestions appear) significantly affects user behavior. For [[ai-peer-feedback-systems]], the acceptance/editing metrics offer a template for evaluating collaborative feedback workflows. Accepted to IJCAI 2026, this work bridges [[human-in-the-loop-ai]] theory with practical writing tool design, advancing [[llm]]-based educational technology beyond static quality assessment toward dynamic interaction modeling.

## Related Pages
- [[writing-education]] — First formal MDP model of human-LLM co-writing interaction
- [[cyberscholar-genai-writing-feedback]] — Interaction-aware metrics complement output-quality evaluations
- [[llm]] — Proactive suggestion-based co-writing shifts the interaction paradigm
- [[ai-peer-feedback-systems]] — Hierarchical acceptance rates capture granular user decisions
- [[human-in-the-loop-ai]] — Co-writing as Human-in-the-Loop Markov Decision Process
- [[structured-llm-feedback-programming]] — Behavior-centered evaluation applies beyond writing to programming

## Citation

Youqing Fang, Yinhao Tang, Yanan Sun, Jiangning Liu, Ziyi Wang, Xun Zhao, Bin Liu, Weiming Zhang, Kuikun Liu, Wenwei Zhang, Kai Chen (2026). [MindCopilot: Towards Formalizing and Evaluating Granular Human-LLM Co-Writing](https://arxiv.org/abs/2605.23535). arXiv:2605.23535. IJCAI 2026. - [[humanlike-ai-collaborative-writing]] — Anthropomorphic design choices amplify both benefits and costs of AI co-writing
