---
title: "Comparing GPT and human raters in essay assessment: Variability, bias, and the potential of LLM-based scoring"
created: "2026-08-16T10:55:19-04:00"
updated: "2026-08-16"
type: article
tags: [automated-essay-scoring, assessment, llm, writing-education, language-learning, bias-mitigation]
audience: [software developers]
research_method: [benchmark]
discipline: [writing education, language learning]
category: [assessment]
sources: ['raw/papers/gpt-human-rater-essay-assessment-2026.md']
confidence: high
---

> **Synthesis:** Wu, Chu, and Hsu (2026) benchmark a GPT-4-based [[automated-essay-scoring]] system against 20 human raters — 10 native English-speaking (NES, from the UK) and 10 non-native English-speaking (NNES, from Taiwan, all CEFR C1+ with IELTS 8.0+) — in rating 181 university [[language-learning]] essays across three tasks (an article summary, 81 Chinese-to-English translations, and an agree/disagree prompt). Using a Many-Facet Rasch Measurement (MFRM) model fitted in FACETS 3.86.0, with GPT-4 (July 2024 build; temperature 0, top_p 1.0, max_tokens 150) prompted to score Content, Organization, Grammar, and Vocabulary on a 0–5 rubric, the study locates all 21 raters on a common logit scale. Humans varied widely in severity — from −0.70 (a lenient NNES rater) to 4.40 (a severe NES rater), with NES most severe, NNES intermediate, and GPT least severe (roughly −1.2 logits vs. NES and −0.4 to −0.5 vs. NNES) — while GPT showed near-ideal model fit (infit = 0.89, outfit = 0.93). A rater×criterion bias analysis flagged 16 effects, concentrated on Content and Organization; GPT displayed a stricter tendency on Content alone. Across criteria, GPT–human alignment was moderate (Pearson r = 0.63–0.73; ICC(A,1) = 0.58–0.63), strongest on Vocabulary and Organization and weakest on Grammar, with range compression at the upper end. The authors conclude GPT-based AES can supplement, not replace, human judgment — a calibrated consistency stabilizer whose stricter content stance needs [[prompt-engineering]] and fine-tuning.

## Key Findings

**Severity ordering and human variability.** On the common Rasch logit scale, raters spanned −0.70 (Rater 19, NNES) to 4.40 (Rater 10, NES). Group-level means showed NES as most severe, NNES intermediate, and GPT least severe; the NES–NNES gap was ~0.7 logits (t = 26.82), GPT was −1.17 logits vs. NES and −0.44 vs. NNES (all p < 0.001). Several NNES raters underfit the model (e.g., Rater 18 infit = 2.05, outfit = 2.00), whereas GPT was near-ideal (infit = 0.89, outfit = 0.93).

**Criterion-level alignment.** GPT–human agreement was moderate across all four analytic criteria (Pearson r = 0.63–0.73; ICC(A,1) = 0.58–0.63). Alignment was strongest on Vocabulary (r = 0.73, ICC = 0.60) and Organization (r = 0.71, ICC = 0.63); Grammar showed the lowest association (r = 0.63, ICC = 0.58), indicating greater divergence in sensitivity to linguistic accuracy.

**Rater×criterion bias.** Using joint thresholds (|t| > 2.0 and |bias| > 0.5), 16 rater–criterion effects were flagged, most on Content and Organization with sparse effects on Grammar and Vocabulary (unchanged after Benjamini–Hochberg correction at q < .05). NES raters were more often stricter on Content, NNES more often stricter on Organization, and GPT showed a stricter tendency on Content only.

**Range compression.** GPT's regression lines fell below the identity line across Organization, Grammar, and Vocabulary, especially at the high end, and its score spread was visibly narrower than humans' — indicating more consistent but range-compressed ratings and reduced discriminative sensitivity for very high or very low quality essays. Content yielded GPT's smallest mean error (MAE = 0.42, RMSE = 0.55).

**Calibration protocol.** All 20 human raters and GPT passed a calibration session against 30 pre-labeled sample essays drawn from a 300-essay CEFR A2–C2 pool (GPT passed on the first attempt), establishing baseline consistency before the main rating of all 181 essays within three days.

**Complementary role.** GPT-based AES is best framed not as a wholesale substitute for human judgment in [[language-learning]] and [[automated-essay-scoring|writing assessment]] but as a calibrated scoring agent and consistency stabilizer that dampens rater variability — while guarding against residual bias and promoting fairness.

## Connected Concepts

- [[automated-essay-scoring]]
- [[assessment]]
- [[llm]]
- [[writing-education]]
- [[language-learning]]

## Connected Articles

- [[llm-automated-grading-programming-comparison-2026]] — LLM grading in programming education
- [[chatgpt-academic-writing-quality-ownership-2026]] — ChatGPT in academic writing
- [[aaiwa-ai-authentic-assessment-metacognition-2026]] — AI-mediated authentic assessment
- [[llm-formative-feedback-systematic-review-2026]] — LLM-generated formative feedback

## Citation

Wu, H.-N., Chu, M.-N., & Hsu, J.-L. (2026). [*Comparing GPT and human raters in essay assessment: Variability, bias, and the potential of LLM-based scoring*](https://doi.org/10.1016/j.caeo.2026.100341). *Computers and Education Open*, 100341. https://doi.org/10.1016/j.caeo.2026.100341
