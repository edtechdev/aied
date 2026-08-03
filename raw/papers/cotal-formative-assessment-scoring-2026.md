---
source_url: https://arxiv.org/abs/2504.02323
ingested: 2026-08-03
sha256: 54f49ed6404ac1be1b48f4ab761ff18c726db79e4ca46ec36654f74783004170
---

# CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback

Clayton Cohn, Ashwin T S, Naveeduddin Mohammed, Gautam Biswas. arXiv:2504.02323 [cs.CL]. Submitted to Computers and Education: Artificial Intelligence (under review). v4, 9 Jun 2026.

## What it is

Chain-of-Thought Prompting + Active Learning (CoTAL): an LLM-based approach to formative assessment scoring that:
1. Leverages **Evidence-Centered Design (ECD)** to align assessments and rubrics with curriculum goals
2. Applies **human-in-the-loop prompt engineering** to automate response scoring
3. Incorporates **chain-of-thought (CoT) prompting** and **teacher and student feedback** to iteratively refine questions, rubrics, and LLM prompts

## Findings

- CoTAL improves GPT-4's scoring performance **across domains** (science, computing, engineering) — gains of **up to 38.9%** over a non-prompt-engineered baseline (no labeled examples, no CoT, no iterative refinement)
- **Teachers and students judge CoTAL effective** at scoring and explaining responses
- Their feedback produces valuable insights that enhance grading accuracy and explanation quality

## Relevance

Addresses the generalisation gap in LLM-based grading: prompt-engineering approaches rarely tested across domains. Human-in-the-loop refinement + ECD alignment is the key to portable, defensible automated scoring with usable feedback.
