---
source_url: https://arxiv.org/abs/2603.00883
ingested: 2026-05-07
sha256: 6d598d2d8ef9ead70c2a46c3d7d69e39668808b649c3bf0d37c2adbf14782c5d
---

# Knowledge without Wisdom: Measuring Misalignment between LLMs and Intended Impact

**Authors:** Michael Hardy, Yunsung Kim (Stanford University)
**arXiv:** 2603.00883v2
**Submitted:** 1 Mar 2026 | Revised: 20 Apr 2026
**Categories:** cs.LG (primary), cs.AI, cs.CY, stat.AP

> **Core Thesis:** LLMs can exhibit strong internal agreement and apparent competence on downstream tasks while failing to align with the *intended impact*—the real-world outcome the task is meant to serve. This gap between "knowledge" (benchmark performance) and "wisdom" (true alignment with goals) is especially dangerous in high-stakes, high-noise domains like education.

## Abstract

LLMs increasingly excel on AI benchmarks, but doing so does not guarantee validity for downstream tasks. This study contrasts LLM alignment on benchmarks, downstream tasks, and, importantly the intended impact of those tasks. We evaluate the performance of leading LLMs on difficult-to-verify tasks of the teaching and learning of schoolchildren. Across all LLMs, inter-model behaviors on disparate tasks correlate higher than they do with expert human behaviors on target tasks. These biases shared across LLMs are poorly aligned with downstream measures of teaching quality and often negatively aligned with the intended impact of student learning outcomes. Further, we find multi-model ensembles, both unanimous model voting and expert-weighting by benchmark performance, further exacerbate misalignment with learning. We measure that selection of LLM and/or prompting strategy only reliably accounts for 15% of all measured misalignment error and that variation in misalignment error is shared across LLMs, suggesting that common pretraining accounts for much of the misalignment in these tasks.

## Methodology

### Data
- **NCTE Main Study:** ~350 4th/5th-grade math teachers, US; anonymized transcripts of video-recorded lessons.
- **Downstream tasks:** 7 classroom observation dimensions from two real-world instruments:
  - **MQI** (Mathematical Quality of Instruction): EXPL (explanations), REMED (remediation of errors), SMQR (student questioning), LANGIMP (imprecision in language).
  - **CLASS** (Classroom Assessment Scoring System): CLBM (behavior management), CLINSTD (instructional dialogue), CLPC (positive climate).
- **Intended impact:** Value-added measures (VAMs) of student achievement gains, stacked across two assessments for reliability.

### Models
- **16 leading LLMs:** GPT-3.5, GPT-4, o1, Gemini 2.5 Pro, LearnLM, DeepSeek-V3/R1, Claude, Qwen, Mistral, Llama 4, plus encoder baselines.
- **3 prompting strategies per task:** Base prompt (simple rating), Chain-of-thought (step-by-step reasoning), RAG-like (additional rubric details).
- LLMs output ordinal ratings (1-3 or 1-7) on each task for each transcript.

### Alignment Measures
- **Dependence:** Bias-corrected squared distance correlation (dCor²) to capture non-linear relationships.
- **Directional alignment:** Kendall's τ — treats LLM ratings and outcomes as Thurstonian indicators, comparing pairwise ordering (e.g., "Does LLM X say lesson i > lesson j? Does expert Y / student learning Z agree?").
- Three alignment levels contrasted: benchmark → downstream task (expert ratings) → intended impact (student VAMs).

## Key Findings

### 1. Strong Behavioral Homogeneity Among LLMs
- LLM-LLM agreement (distance correlation) is consistently much higher than LLM-human agreement, both within-task and cross-task.
- Even within a single model, inter-task correlations are high — models rely on a shared latent heuristic of "good teaching," not fine-grained constructs humans distinguish.
- Attributed to shared autoregressive pretraining on Internet text lacking authentic classroom discourse.

### 2. Proxy Alignment ≠ Impact Alignment
- Some models align moderately with expert human ratings, but alignment with student learning gains (VAM) is often negative or near zero.
- Human raters show faint but positive signal with VAM (τ ≈ 0.11–0.14), confirming a real connection.
- Smaller models or reasoning-enhanced variants (DeepSeek-R1, o1) did not improve alignment.

### 3. Ensembling Worsens Misalignment
- Pedagogy-expertise weighted ensemble (weighted by MMLU Education scores): no improvement.
- Unanimous voting ensemble (only segments where all models agree): no improvement.
- Both strategies further exacerbate misalignment with learning.

### 4. Error Decomposition: 15% Model/Prompt, 85% Shared
- Selection of LLM and/or prompting strategy accounts for only ~15% of total misalignment error.
- Variation is shared across LLMs → common pretraining is the dominant source.
- Implies that prompt engineering, model selection, and ensembling are all weak levers for fixing educational alignment.

## Implications
- Benchmark-centric evaluation is insufficient for high-stakes real-world applications like education.
- Shared pretraining data/objectives embed systematic biases invisible in standard benchmarks but harmful in practice.
- Practitioners should measure alignment with intended impact directly, not rely on proxy metrics.
- Findings especially relevant for high-noise contexts with ambiguous or delayed ground truth (education, healthcare, policy).
