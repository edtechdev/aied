---
title: "Context-aware prompting for collaborative problem solving skill identification"
created: "2026-09-01T14:00:00-04:00"
updated: "2026-09-01T15:00:00-04:00"
type: article
sources: ["raw/papers/context-aware-prompting-cps-skill-identification-2026.md"]
tags: ["problem-solving", "collaborative-learning", "prompt-engineering", "learning-analytics", "educational-measurement"]
confidence: medium
---

## Overview

Collaborative problem solving (CPS) is a dual-faceted [[problem-solving]] competence spanning a cognitive dimension (individual reasoning about the problem) and a social dimension (coordinating and communicating with others). To assess CPS, [[research-methods-aied|researchers]] typically collect process data from computer-mediated [[collaborative-learning]] tasks and code each logged behavior into predefined CPS skills. Traditional manual coding is labor-intensive and unsuitable for large-scale or real-time analysis, prompting a body of automated coding work. However, most existing automated methods treat each utterance as an isolated instance and overlook the natural dependencies among behaviors in a CPS dialogue — yet the same message can map to different skills depending on context (e.g., "What should we do?" is coded as goal discovery or action-communication depending on the conversation phase).

To address this, the authors propose **CAP4CPS** (Context-Aware Prompting for CPS), an automated coding framework built on [[prompt-engineering]] and [[machine-learning]] that explicitly models contextual dependencies. CAP4CPS comprises three modules: a **Context Extraction (CE)** module that separately pulls the cognitive context (a speaker's own recent dialogue, window size `w_c`) and social context (recent dialogue from other participants, window size `w_s`); a **Context-Infused Prompting (CIP)** module that concatenates these contexts with a manually designed, fixed-prompt [[llm]] template and feeds them into BERT, using the `[MASK]`-token embedding as the ability representation; and an **Ability Fusion (AF)** module that applies multi-head attention to fuse cognitive and social ability embeddings into a unified CPS competency representation used for skill prediction. The model is evaluated on two CPS datasets (Three-Resistor and Mondrian Geometric Fantasy), annotated respectively with the CPS ontology of Andrews-Todd & Kerr and the PISA 2015 framework — linking this work to [[educational-measurement]] and [[educational-nlp]].

## Key Findings

- **CAP4CPS outperforms all baselines on both datasets.** It reached Accuracy 81.04%, Weighted-F1 80.78%, and Cohen's Kappa 75.33% on Three-Resistor (besting BERT-finetune by 1.00%, 0.81%, 1.20%) and 83.27%, 83.17%, and 78.37% on Mondrian Geometric Fantasy (besting BERT-seq). Across 10 runs, gains were consistent with small standard deviations.
- **Pre-trained language models dominate older approaches.** BERT-based models (BERT-finetune, BERT-prompt, BERT-seq, CAP4CPS) all achieved Kappa above 0.70 on both datasets, whereas most N-gram-based machine-learning models (Naive Bayes, KNN, CPS-Rater) stayed below 0.70 and deep models (CNN/GRU/LSTM) failed to reach 0.70 on Three-Resistor.
- **Gains come from architecture, not just BERT representations.** Adding BERT mean-pooled embeddings boosted KNN and CPS-Rater substantially (CPS-Rater's Kappa up 66.3% on Mondrian) but degraded Random Forest, and these methods still trailed fine-tuned/prompted BERT — showing architectural design matters beyond rich semantic features.
- **Every module contributes.** Ablations showed removing context caused the largest drop, while removing the attention fusion also hurt — indicating both multi-dimensional context modeling and modeling cognitive-social interdependence matter. Removing both (w/o All) gave the weakest results.
- **Context length has a saturating effect.** Larger cognitive (`w_c`) and social (`w_s`) context windows generally improved Kappa up to a point, after which performance became robust; a short cognitive context was the most harmful, because a speaker's own utterances form a coherent narrative across multiple consecutive statements.
- **Low-frequency skills remain hard.** Error analysis showed the model misclassifies rare skills toward semantically similar, frequent ones (e.g., 30% of CRF→SSI on Three-Resistor; 38% of D1→D2, 33% of A3→B3 on Mondrian), and struggles with highly implicit expressions where literal meaning diverges from the intended skill.

## Implications for Practice

- **Automated CPS coding is viable at scale.** The demonstrated Kappa levels and robustness across two very different tasks suggest that context-aware [[automated-assessment]] can plausibly replace or pre-screen manual coding for large [[learning-analytics]] pipelines and, with further work, enable near-real-time [[feedback]] during collaborative activities.
- **Context is the key ingredient for accurate skill inference.** Designers of CPS [[assessment]] systems should treat each utterance as [[situated-learning|situated]] within the surrounding dialogue rather than coding behaviors in isolation — the core reason CAP4CPS beats context-free baselines.
- **Model cognitive and social processes separately, then fuse.** Distinguishing a speaker's own reasoning history from the team's interaction history, then combining them with attention, captures CPS's dual nature more faithfully than a single flat representation — a lesson for how to structure automated coding features.
- **Beware class imbalance and low-frequency skills.** Practitioners applying such models should expect weak performance on rare skill categories and on implicit utterances; calibration data, oversampling, or [[human-in-the-loop-ai|human review]] of rare classes remain advisable for high-stakes use.
- **Manual prompt design with fixed-prompt tuning is effective.** Incorporating dialogue context into carefully designed prompts — rather than only fine-tuning — is a promising, parameter-efficient strategy for educational text classification that mirrors how human coders read surrounding context.

## Connected Concepts

- [[collaborative-learning]]
- [[problem-solving]]
- [[prompt-engineering]]
- [[educational-measurement]]
- [[learning-analytics]]
- [[educational-nlp]]
- [[machine-learning]]
- [[llm]]
- [[automated-assessment]]

## Connected Articles

- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]] — Both target collaborative problem solving in educational settings; this paper focuses on automated CPS skill coding from process data, complementing that article's focus on scaffolding student CPS development.
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Both model participants and interaction in CPS tasks; CAP4CPS codes chat behaviors into skills via prompted language models, while that article simulates individual participants as LLM agents.
- [[assessment-team-problem-solving-computing-education]] — Both concern assessment of team problem solving; CAP4CPS contributes automated, context-aware scoring of CPS skills, which could support the assessment approaches discussed there.

## Citation

[Context-aware prompting for collaborative problem solving skill identification](https://doi.org/10.1016/j.caeai.2026.100567) — Zhu, M., Feng, L., Wang, X., & Huang, W. (2026). *Computers and Education: Artificial Intelligence*, 10, 100567.
