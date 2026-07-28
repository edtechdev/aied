---
source_url: https://arxiv.org/abs/2605.04131
ingested: 2026-05-07
sha256: 948389d525843185f96f7a5296fe8b839425da146b2a6418d0689944a4095859
---

# A Dialogue-Based Framework for Correcting Multimodal Errors in AI-Assisted STEM Education

**Authors:** Akshay Syal, Lawrence Swaminathan Xavier Prince, Evin Gultepe, Nik Bear Brown, Srinivas Sridhar

---

## Executive Summary

- **Text-only baseline:** Three major public LLMs achieved near-ceiling accuracy (**96%**, 95% CI [0.93, 0.98]) on 100 OpenStax physics problems with no statistically significant differences between models.
- **Multimodal baseline:** Accuracy dropped substantially to **74%** (95% CI [0.66, 0.82]) on 44 image-rich physics problems, a phenomenon the authors term the **Multimodal Interference Effect**.
- **Error taxonomy:** Four failure modes were identified—Visual Processing, Context Misinterpretation, Mathematical Computation, and Hybrid—with **Visual Processing Errors being the most prevalent** in multimodal settings.
- **Intervention:** A simple, zero-retraining, three-step structured multimodal dialogue corrected **82% of all errors** (95% CI [0.655, 0.932]) and **100% of Visual Processing Errors** (17/17 across all models), raising post-intervention multimodal accuracy to **95%** (95% CI [0.904, 0.983]).

---

## 1. The Problem: Multimodality as an Equity Barrier

> *"Just as the internet democratized access to information, artificial intelligence is now democratizing access to personalized instruction."*

While LLMs show promise for personalized STEM tutoring, their effectiveness is hindered by inconsistent processing of multimodal content (graphs, diagrams, schematics, tables). Students working on image-rich problems—who often most need expert guidance—receive less reliable support, risking educational inequities. Existing solutions rely on fine-tuning or specialized benchmarks, requiring GPU hours, domain datasets, or proprietary access that under-resourced institutions lack.

This study isolates **prompt-based interventions** for general-purpose, publicly accessible models, asking:

> *"Can the benefits of structured reasoning and strategic prompting be realized through intervention strategies alone, applied to general-purpose publicly-available models, without requiring specialized training?"*

---

## 2. Methods

### 2.1 Dataset
- **Source:** OpenStax University Physics, Volume I (Mechanics).
- **Text-only:** 100 problems serving as a baseline.
- **Multimodal:** 44 problems including graphs, diagrams, tables, or visual equations essential to the solution. Problems requiring graphical output were excluded.
- Answer keys were drawn from OpenStax; a physics PhD adjudicated non-straightforward cases.

### 2.2 Models Evaluated
Three widely accessible, vision-integrated LLMs were tested for multimodal tasks:
- **GPT-5**
- **Claude Sonnet-4.5**
- **Gemini-3 Pro Preview**

For the text-only baseline, reasoning-optimized variants (e.g., Claude Opus 4.1) were used to isolate core physics reasoning independent of visual inputs.

> *"All models were accessed between 09/2025 and 02/2026."*

### 2.3 Baseline Prompts
**Text-only interface prompt:**
> *"I will ask you to solve physics questions. You must solve them and then give me the final answer at the end. Are you ready?"*

**Multimodal API prompt:**
> *"You are an expert physics professor. Solve the problem and all sub-parts step-by-step. For each part: write the key equation, then substitute numbers, then compute. State assumptions if needed. Round your calculations to 2 decimal places. Be precise and concise — no extra commentary."*

Model state was reset between questions to prevent leakage.

### 2.4 Error Taxonomy (Empirically Derived)

| Code | Category | Definition |
|------|----------|------------|
| **V** | **Visual Processing Errors** | *"Failures to accurately extract information from graphs, diagrams, or images."* |
| **C** | **Context Misinterpretation** | *"Incorrect assumptions about problem approaches or application of wrong physics concepts."* |
| **M** | **Mathematical Computation Errors** | *"Incorrect calculations, unit errors, or computational logic failures."* |
| **H** | **Hybrid Errors** | *"Combinations of the above."* |

*Note: Computation errors appeared only in text-only problems; Visual and Hybrid errors appeared only in multimodal problems.*

### 2.5 Intervention Protocol: Structured Multimodal Dialogue
A three-step dialogue designed as pedagogical scaffolding:

1. **Elicit visual description:**
   > *"Describe what you observe in the figure/graph"*

2. **Correct misidentified observable elements:**
   Researcher input restricted strictly to observable visual properties (e.g., clarifying the direction of a force vector or a graph intercept) **without providing physics principles or formulas**.

3. **Re-prompt for solution:**
   > *"Solve the problem"*

### 2.6 Evaluation
Independent multi-model LLM-judge evaluated correctness.

> **Note:** This extraction was truncated by the web extraction service. The full paper likely contains additional statistical details, discussion, and future work sections.
