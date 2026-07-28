---
source_url: https://arxiv.org/abs/2604.26962
ingested: 2026-05-07
sha256: 36a0228aa7c0fe8389e31c59f871022c04515666cd7126492b23f3ec07af95ab
---
# DeepTutor: Towards Agentic Personalized Tutoring

**Authors:** Bingxi Zhao, Jiahao Zhang, Xubin Ren, Zirui Guo, Tianzhe Chu, Yi Ma, Chao Huang  
**arXiv:** 2604.26962  
**Submitted:** 10 Apr 2026  
**Code:** https://github.com/HKUDS/DeepTutor

## Abstract

Education represents one of the most promising real-world applications for Large Language Models (LLMs). However, conventional tutoring systems rely on static pre-training knowledge that lacks adaptation to individual learners, while existing RAG-augmented systems fall short in delivering personalized, guided feedback. To bridge this gap, we present DeepTutor, an agent-native open-source framework for personalized tutoring where every feature shares a common personalization substrate.

## Core Architecture & Contributions

### 1. Hybrid Personalization Engine
- Combines static knowledge grounding with dynamic multi-resolution memory
- Distills interaction history into a continuously evolving learner profile

### 2. Closed Tutoring Loop
- Bidirectionally couples two components:
  - Citation-grounded problem solving
  - Difficulty-calibrated question generation

### 3. Personalization Substrate Capabilities
- Supports collaborative writing
- Enables multi-agent deep research
- Provides interactive guided learning
- Ensures cross-modality coherence across all features

### 4. TutorBot: Proactive Multi-Agent Layer
- Deploys tutoring capabilities through extensible skills
- Offers unified multi-channel access
- Provides a consistent experience across platforms
- Moves beyond reactive interfaces to proactive tutoring

## Evaluation

| Benchmark | Purpose |
|-----------|---------|
| **TutorBench** *(new)* | Student-centric benchmark with source-grounded learner profiles and a first-person interactive protocol; measures adaptive tutoring from the learner's perspective |
| **5 authoritative benchmarks** | Evaluate foundational agentic reasoning abilities |

Key Results: DeepTutor improves personalized tutoring quality while maintaining general agentic reasoning abilities.

## Key Insights
- DeepTutor is agent-native and open-source, designed so that every feature shares a common personalization substrate rather than bolting personalization onto reactive tools.
- The framework aims to provide guided feedback (not just retrieval-augmented answers) by tightly coupling problem solving with calibrated question generation.
- The evaluation protocol emphasizes a first-person, student-centric perspective on adaptive tutoring effectiveness.
