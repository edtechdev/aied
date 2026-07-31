---
source_url: https://arxiv.org/abs/2605.01097
ingested: 2026-05-07
sha256: cbccc5ec5e20d381bb3f5f11e9325dc180085c2bbc00022dc2a00471ea517da4
---

# Interpretable Difficulty-Aware Knowledge Tracing in Tutor-Student Dialogues

**Source:** arXiv:2605.01097v1
**Authors:** Shuyan Huang, Alexander Scarlatos, Jaewook Lee, Andrew Lan (UMass Amherst)
**Date:** 1 May 2026

---

## Problem & Motivation

Existing dialogue-based Knowledge Tracing (KT) suffers from two gaps:

1. **Ignored question difficulty:** Prior work relies solely on student knowledge states, leading to inaccurate predictions when tutors scaffold or increase task difficulty.
2. **Opaque latent representations:** High-dimensional LLM embeddings lack interpretability, undermining tutor trust.

---

## Proposed Framework

An **interpretable difficulty-aware conversational KT framework** built on Llama-3.1-8B-Instruct. It explicitly models **student ability (θ)** and **tutor-turn difficulty (d)** at each dialogue turn, combined via **Item Response Theory (IRT)**.

### Three-Module Architecture

1. **Knowledge Estimator**
   Extracts next-token logits for vocabulary tokens "GOOD" and "BAD":
   `θ = z^GOOD − z^BAD`

2. **Difficulty Estimator**
   Extracts logits for "HARD" and "EASY":
   `d = z^HARD − z^EASY`

3. **IRT-based Predictor**
   Uses a 1PL (Rasch) model with learnable scalar α:
   `p(correct) = 1 / (1 + exp(−α(θ − d)))`

---

## Experimental Setup

### Datasets
- **QATD2k** (real-world, Eedi math platform): 1,573 train / 393 test dialogues
- **MathDial** (simulated, GPT-3.5 student + crowd tutor): 2,235 train / 588 test

### Baselines
- Deep learning: DKT, DKVMN, SAINT, AKT, simpleKT
- LLM-based: LLMKT

## Key Results

| Model | QATD2k Acc | QATD2k AUC | MathDial Acc | MathDial AUC |
|-------|------------|------------|--------------|--------------|
| DKT | 60.19 | 54.73 | 59.75 | 63.14 |
| DKVMN | 58.24 | 51.79 | 56.42 | 60.64 |
| SAINT | 60.71 | 53.76 | 59.80 | 63.22 |
| AKT | 60.88 | 54.39 | 59.75 | 63.37 |
| simpleKT | 61.62 | 56.24 | 58.94 | 61.90 |
| LLMKT | 64.24 | 64.89 | 68.64 | 75.99 |
| **Ours** | **64.29** | **65.25** | **68.82** | **76.59** |

LLM-based methods substantially outperform deep learning models.

## Key Insight

> "This formulation provides interpretability since both student knowledge and task difficulty are explicitly represented as meaningful cognitive quantities."

> **Note:** This extraction was truncated by the web extraction service.
