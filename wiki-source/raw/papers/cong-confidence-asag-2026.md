---
source_url: https://arxiv.org/abs/2605.00200
ingested: 2026-05-07
sha256: a23a39b4ea85a37a58b59d2fd9dd2fd11208f9846664f5d621b801d60dc1e45b
---

# Confidence Estimation in Automatic Short Answer Grading with LLMs

**arXiv:2605.00200v1 [cs.CL]** — 30 Apr 2026
**Authors:** Longwei Cong, Sonja Hahn, Sebastian Gombert, Leon Camus, Hendrik Drachsler, Ulf Kroehne
**Affiliations:** DIPF | Leibniz Institute, Goethe University Frankfurt, Chemnitz University of Technology
**LLM Used:** `gpt-oss-20b` (open-weight)
**Venue:** AIED 2026

---

## Core Problem

Automatic Short Answer Grading (ASAG) with LLMs achieves strong zero-shot performance and synthetic feedback generation, but **no system is perfect**. Linguistic variability, ambiguous scoring criteria, and inherent human rater disagreement impose an upper bound on accuracy. **Reliable confidence estimation is essential** for safe human-in-the-loop review workflows.

> *"Model-based confidence alone is insufficient to reliably capture uncertainty in ASAG."*

---

## Key Contributions

1. **Systematic comparison** of three LLM confidence signals: **verbalizing**, **latent**, and **consistency-based**.
2. **Explicit modeling of aleatoric uncertainty** via semantic heterogeneity in embedded student-response clusters.
3. **Hybrid confidence framework** fusing model-based signals with dataset-derived uncertainty via Random Forest + Platt scaling.
4. **Principled evaluation** using selective prediction (AUROC / AUARC) and reliability analysis (ECE / MCE / Brier).

---

## Methodology

### 1. Model-Based Confidence (Epistemic Uncertainty)
Generated with `gpt-oss-20b` at temperature 0.1.

| Strategy | Mechanism |
|---|---|
| **Verbalizing** | Prompt model to self-report confidence probability in [0,1] |
| **Latent** | Softmax-normalized conditional log-likelihood of predicted label token |
| **Consistency** | Sample 5 predictions at temperatures [0.2, 0.4, 0.6, 0.8, 1.0]; measure agreement fraction |

### 2. Dataset-Derived Uncertainty (Aleatoric Uncertainty)
- Embed responses with `all-MiniLM-L6-v2`
- Agglomerative hierarchical clustering (Ward linkage) on 10% calibration subset
- Quantify within-cluster heterogeneity via normalized Shannon entropy
- Test responses assigned to nearest cluster centroid

### 3. Hybrid Confidence Fusion
Feature vector: `[s^verb, s^lat, s^cons, s^alea, token_length]`
Classifier: Random Forest (500 trees) → Platt scaling for calibration

---

## Dataset & Results
- **SciEntsBank Test_UD**: 4,562 student responses (1,917 correct; 2,645 incorrect)
- Evaluation: Selective prediction (AUROC, AUARC) + reliability (ECE, MCE, Brier)
- Hybrid confidence with aleatoric uncertainty outperforms all single-source approaches

> **Note:** This extraction was truncated by the web extraction service.
