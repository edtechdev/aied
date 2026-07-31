---
source_url: https://arxiv.org/abs/2604.13074
ingested: 2026-05-07
sha256: d1ac528f4f400a6a645ffab50e2e2226ba20865b3015acc8eecacecfc6be4e5f
---

# PersonaVLM: Long-Term Personalized Multimodal LLMs

**arXiv:** 2604.13074v1 [cs.CL] | **Date:** 20 Mar 2026  
**Authors:** Chang Nie¹, Chaoyou Fu¹, Yifan Zhang², Haihua Yang¹, Caifeng Shan¹  
**Affiliations:** ¹Nanjing University, ²ByteDance  
**Venue:** Accepted at CVPR 2026  
**Project Page:** https://personavlm.github.io/

---

## Abstract

Multimodal Large Language Models (MLLMs) serve as daily assistants for millions. However, their ability to generate responses aligned with individual preferences remains limited. Prior approaches enable only static, single-turn personalization through input augmentation or output alignment, and thus fail to capture users' evolving preferences and personality over time. In this paper, we introduce **PersonaVLM**, an innovative personalized multimodal agent framework designed for long-term personalization.

### Three Core Capabilities
1. **Remembering:** Proactively extracts and summarizes chronological multimodal memories from interactions, consolidating them into a personalized database.
2. **Reasoning:** Conducts multi-turn reasoning by retrieving and integrating relevant memories from the database.
3. **Response Alignment:** Infers the user's evolving personality throughout long-term interactions to ensure outputs remain aligned with their unique characteristics.

### Evaluation & Results
- **Benchmark:** Introduces **Persona-MME** — a comprehensive benchmark comprising **over 2,000 curated interaction cases**, designed to assess long-term MLLM personalization across **seven key aspects** and **14 fine-grained tasks**.
- **Performance (128k context):**
  - Improves baseline by **22.4%** on Persona-MME and **9.8%** on PERSONAMEM.
  - Outperforms **GPT-4o** by **5.2%** (Persona-MME) and **2.0%** (PERSONAMEM), respectively.

---

## Core Contributions

1. **PersonaVLM Framework:** An agent architecture integrating three capabilities: **(a) Remembering**, **(b) Multi-step Reasoning**, and **(c) Response Alignment**.
2. **Personalized Memory Architecture:** Features a **Personality Evolving Mechanism (PEM)** and a multi-type memory database (**Core, Semantic, Episodic, Procedural**).
3. **Persona-MME Benchmark:** 2,034 *in-situ* cases across 200 personas, evaluating 14 fine-grained tasks within 7 core aspects (Memory, Intent, Preference, Behavior, Relationship, Growth, Alignment) at **32k** and **128k** context lengths.
4. **Self-Contained Synthesis Pipeline:** 30k+ interactions across **500 unique personas** (>15% multimodal), enabling fully local training and inference with no proprietary API dependencies, eliminating privacy concerns.

---

## Architecture & Methods

### 1. Personalized Memory Architecture

| Component | Description |
|-----------|-------------|
| **User Personality Profile (P)** | Quantitative **Big Five (OCEAN)** vector **p ∈ ℝ⁵** (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism), each scored 1–5. |
| **Core Memory** | Foundational attributes (human block + persona block). Only latest version retained. |
| **Semantic Memory** | Event-independent knowledge (entities, relationships, multimodal concepts). Updated **after every turn**. |
| **Episodic Memory** | Atomic, time-stamped events with summaries, dialogue turns, and keywords. Chronologically stored. |
| **Procedural Memory** | User-centric plans, goals, recurring habits. Updated **per session**. |

**Retrieval Infrastructure:** Text memories encoded with `all-MiniLM-L6-v2` via **FAISS**; visual concepts use **Grounding DINO** for object cropping. Default top-k: **2 procedural**, **4 semantic**, **2 episodic**.

---

### 2. Two-Stage Operational Pipeline

**Response Stage** — generates aligned answers via multi-turn reasoning and targeted retrieval:

```
R_m = R(Q_m, C_m, M_{m-1})
```

Where **Q_m = (T_m, I_m, t_m)** (text, optional image, timestamp), **C_m** is recent dialogue context (acts as short-term memory for interactions within **t_s = 60 min**), and **M_{m-1}** is the memory database state.

The model iteratively decides whether to retrieve or answer. If retrieving, it emits conditions within **time period + keywords** tags; the agent performs parallel search across memory types and feeds results back until a final answer is produced.

**Update Stage** — executes asynchronously post-response:

```
(P_m, M_m) = U(Q_m, R_m, M_{m-1})
```

**Personality Evolving Mechanism (PEM):**
Infers a turn-specific personality vector **p′_m ∈ ℝ⁵**, then updates the long-term profile via **Exponential Moving Average (EMA)** with a dynamic smoothing factor:

```
p_m ← λ_m · p_{m-1} + (1 − λ_m) · p′_m

λ_m = 0.7 − 0.2 · cos( π · min(50, m) / 50 )
```

This makes early interactions highly sensitive and stabilizes over time. Updates are skipped if the inferred vector is entirely neutral (score 3). The vector is converted to a textual summary **P_m** for use in the next Response Stage.

**Memory Update Rules:**
- **Semantic:** Extracted/updated every turn.
- **Core & Procedural:** CRUD operations at session end.
- **Episodic:** Segmented by topic with summaries, keywords, and source dialogue indices.

---

### 3. Training Pipeline

**Backbone:** Qwen2.5-VL-7B

**Stage 1 — Supervised Fine-Tuning (SFT):**
- **78k samples** total (43.6% reasoning, 56.4% memory operations)
- Memory operations: personality inference (10.3%) + CRUD across four memory types (46.1%)

**Stage 2 — Reinforcement Learning (RL):**
- **5.6k samples;** uses **Group Relative Policy Optimization (GRPO)**
- Strict structured output: `<retrieve>...</retrieve>` or `<answer>...</answer>` XML tags
- Reward function: 0.4 × format + 0.1 × personality detection + 0.3 × QA accuracy + 0.2 × memory accuracy

---

## Key Results

| Model | Persona-MME (%) | PERSONAMEM (%) |
|-------|---------------|----------------|
| Base (Qwen2.5-VL-7B) | 32.76 | 24.23 |
| + Our framework | 40.11 (+22.4%) | 26.60 (+9.8%) |
| GPT-4o | 38.13 | 26.07 |

- **128k context** crucial; performance degrades significantly at 32k
- Synthetic pipeline enables no-API training (privacy-preserving)
- Qualitative examples show preference evolution tracking (e.g., beverage preference shifting from Sprite to Coca-Cola across turns)
