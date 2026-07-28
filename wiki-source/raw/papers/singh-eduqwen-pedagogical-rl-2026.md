---
source_url: https://arxiv.org/abs/2604.06385
ingested: 2026-05-07
sha256: e99905d547f5b978160e8b44e5ea54ec05711a4ceeebb9b7b327e66834d894a5
---

# Application-Driven Pedagogical Knowledge Optimization of Open-Source LLMs via RL and SFT

**arXiv:** 2604.06385v1 [cs.CL] | **Date:** 7 Apr 2026  
**Authors:** Navan Preet Singh*, Xiaokun Wang*, Anurag Garikipati, Madalina Ciobanu, Qingqing Mao, Ritankar Das  
**Affiliations:** Forta, East China Normal University, Incept Labs, Titan Holdings

---

## Abstract

We present a multi-stage optimization strategy combining reinforcement learning (RL) and supervised fine-tuning (SFT) to enhance pedagogical knowledge of LLMs, producing EduQwen 32B-RL1, EduQwen 32B-SFT, and EduQwen 32B-SFT-RL2. These are application-driven open-source pedagogical LLMs built on a dense Qwen3-32B backbone. They achieve high enough accuracy on the Cross-Domain Pedagogical Knowledge (CDPK) Benchmark to establish new SOTA results across the Interactive Pedagogy Benchmark Leaderboard, surpassing significantly larger proprietary systems such as Gemini-3 Pro. These dense 32B-parameter models demonstrate that domain-specialized optimization can transform mid-sized open-source LLMs into pedagogical domain experts.

---

## Core Problem

> "LLMs are typically optimized to prioritize immediate helpfulness. This leads to a misalignment with guided learning in which the goal is not to provide the student with the answer, but rather help them get to the answer themselves."

Current benchmark scores for pedagogical knowledge range from 21% to 91%, showing a critical gap.

## Model Family

| Model | Stage | Notes |
|-------|-------|-------|
| **EduQwen 32B-RL1** | Stage 1 (RL) | Initial RL-optimized model |
| **EduQwen 32B-SFT** | Stage 2 (SFT) | Fine-tuned on synthetic data from RL1 |
| **EduQwen 32B-SFT-RL2** | Stage 3 (Optional RL) | Second round of RL refinement |

- **Backbone:** Dense Qwen3-32B (32 billion parameters)
- Dense architecture chosen over MoE because dense models proved more responsive to iterative optimization

## Three-Stage Methodology

### Stage 1: Initial RL — EduQwen 32B-RL1
- **Algorithm:** DAPO (Decoupled Advantage Policy Optimization) — selected over GRPO for stable gradients on complex pedagogical reasoning. Uses asymmetric clipping to prevent catastrophic divergence.
- **Reward model:** Prioritizes responses that *guide* learners rather than simply provide answers
- **Curriculum learning:** Progressive training by difficulty — starts simple, increases complexity
- **Hard-negative mining:** Base model tested on all questions (30 attempts each). Questions answered perfectly in all 30 attempts were excluded. Remaining 440 questions sorted by error frequency to form difficulty-ordered curriculum.
- **Extended rollouts:** Rollout length progressively increased from 5 → 8 steps for multi-step pedagogical decisions
- **Result:** 94.13% accuracy on CDPK (already SOTA)

### Stage 2: Synthetic SFT — EduQwen 32B-SFT
- RL1 model generated 40,000 synthetic responses
- Retained only correct responses, then applied gradient-based selection to keep hard examples
- Final training set: 1,050 high-quality, difficulty-ordered data points
- **Difficulty-weighted sampling:** Easy questions → one representative; hard questions → all examples retained with increased weights
- **Result:** 96.20% accuracy

### Stage 3: Final RL — EduQwen 32B-SFT-RL2
- Second DAPO round on SFT checkpoint
- **Reuses the same initial hard-negative dataset**, allowing refined model to solve originally challenging problems
- **Result:** 96.52% accuracy (definitive SOTA)

## Benchmarks & Results

- **CDPK Benchmark:** New SOTA (96.52%)
- **Interactive Pedagogy Benchmark Leaderboard:** New SOTA
- **Surpassed:** Gemini-3 Pro (90.55%) — a significantly larger proprietary system

## Key Significance
- Dense 32B open-source models outperform much larger proprietary systems through domain-specialized optimization
- Demonstrates that mid-sized open-source LLMs can become true pedagogical domain experts
- Retains transparency, customizability, and cost-efficiency for responsible educational AI deployment
