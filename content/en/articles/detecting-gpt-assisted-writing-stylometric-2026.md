---
title: "Detecting GPT-Assisted Writing Using Interpretable Stylometric Features"
created: "2026-09-23T09:13:42-04:00"
updated: "2026-09-23T09:13:42-04:00"
type: article
published: "2026-09-22"
sources: ['raw/papers/detecting-gpt-assisted-writing-stylometric-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [writing education]
level: [higher ed]
audience: [instructors, researchers]
technology: [machine-learning, llm, educational-nlp]
assessment: [ai-detection, assessment-validity, educational-measurement]
methods: [quantitative-research, research-methods-aied]
ethics: [explainable-ai, bias-mitigation, differential-effects-across-learner-groups]
foundations: [academic-integrity, reducing-ai-misuse, limitations-in-aied-research]
connected_faqs: [should-we-use-ai-detectors]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
---

> **Synthesis:** This study asks whether nine interpretable stylometric features, computed from submitted text alone, can support [[ai-detection|detection]] of [[generative-ai|ChatGPT-assisted]] student [[writing-education|writing]]. The data are 180 samples from 90 participants who wrote the same prompts twice, once unaided and once paraphrasing GPT-generated content. Eight [[machine-learning|classifiers]] were trained on 72 participants and tested on 18 unseen ones, using 250-word windows and a median-probability rule for document-level calls. Random Forest reached an ROC-AUC of 0.870 and an F1-score of 0.842 on 36 held-out documents, but flagged 4 of 18 independently authored documents as GPT-assisted. [[explainable-ai|SHAP]] attribution puts the weight on lexical features, especially hapax ratio and non-stopword ratio. The authors present this as decision support for [[academic-integrity]] review, not proof of misconduct.

## Key Findings
1. **Interpretable features carry real signal.** Random Forest reached an ROC-AUC of 0.870 (95% CI 0.747–0.981) and F1 0.842 on 36 held-out documents from 18 unseen participants.
2. **The false positives are the headline risk.** Four of 18 independently authored documents were flagged as GPT-assisted (22.2%, 95% CI 9.0–45.2%) and two GPT-assisted documents were missed (11.1%, 95% CI 3.1–32.8%).
3. **Lexical features did most of the work.** Feature-group ablations showed lexical features carried most of the discriminative signal, then part-of-speech features, while Sentence-Length Variability alone performed near chance.
4. **GPT-assisted text was more lexically diverse.** It scored higher on type-token ratio (0.65 vs. 0.60), hapax ratio (0.51 vs. 0.44), word entropy (6.94 vs. 6.74) and non-stopword ratio (0.64 vs. 0.59).
5. **Disjoint users and fixed windows guard against inflated scores.** Training drew on 72 participants (144 samples, 595 windows), testing on 18 (36 documents, 127 windows), in 250-word windows with a 125-word stride.
6. **SHAP ranked hapax ratio highest.** Hapax Ratio was most influential, followed by non-stopword ratio, noun ratio, adverb ratio and type-token ratio; adjective ratio contributed least.
7. **Document length explains part of the pattern.** Independently authored responses averaged 620 words (SD = 198) against 515 (SD = 155), and a word-count-only classifier reached ROC-AUC 0.68 under cross-validation.

## What the nine features measure
The detector rests on nine window-level [[educational-measurement|measures]]: type-token ratio, hapax legomena ratio, word entropy, non-stopword ratio, noun, verb, adjective and adverb ratios, and sentence-length variability, computed through a [[educational-nlp|text-analysis]] pipeline of quanteda, udpipe's English EWT part-of-speech model, and a 175-word Snowball stop list. Across the 90 participants, GPT-assisted responses were lexically richer and more noun-heavy: type-token ratio 0.65 against 0.60, hapax ratio 0.51 against 0.44, word entropy 6.94 against 6.74, noun ratio 0.27 against 0.24. Independently authored text ran higher on adverb ratio (0.05 against 0.04) and sentence-length variability (14.67 against 13.07).

## Windows, disjoint users, and the leakage problem
Because participants wrote under both conditions, a random split could put one person's texts on opposite sides and leak author style into evaluation. Working from the IIITD-BU (Paraphrased) dataset of [[higher-ed|university]] students in a course on [[llm|large language models]], they kept every window from a participant in one fold and held 18 people out entirely. Documents became 250-word windows with a 125-word stride and 50% overlap, yielding 722 windows, 508 of them full 250-word windows. Window probabilities were combined by median and thresholded at 0.50. Tuning used 30 Bayesian optimization iterations on training data only; among eight classifiers Random Forest ranked first at validation ROC-AUC 0.838, k-Nearest Neighbors last at 0.763.

## How the model fails, and what the SHAP values explain
The median rule misclassified six of the 36 held-out documents: four false positives with medians from 0.636 to 0.920, and two false negatives at 0.495 and 0.151. Across train-test ratios from 60/40 to 80/20 the mean FPR moved to 12.4%–15.8% and the mean FNR to 23.7%–24.8%, which the authors read as evidence that one small test set carries substantial uncertainty. Wilson and bootstrap intervals keep the uncertainty visible without making a 36-document estimate [[assessment-validity|valid]] for high-stakes decisions. SHAP importance put hapax ratio first, then non-stopword ratio, noun ratio, adverb ratio and type-token ratio. A correctly flagged window scored 0.947 against 0.077 for an independently authored one, and a local explanation covers one window, never the document-level aggregation.

## What a detection score can and cannot decide
A 22.2% false positive rate is a problem about people, not metrics: each false positive is independently authored work accused of GPT assistance, a decision that can affect grades and disciplinary action. The authors therefore frame the model as decision support that should trigger contextual review rather than replace [[teacher-role|instructor]] assessment, student testimony, or [[legal-issues-and-risks|due process]], which puts [[human-in-the-loop-ai|human review]] at the center of any workflow. They report no evaluation across [[differential-effects-across-learner-groups|demographic or language-background groups]] and so draw no [[bias-mitigation|fairness]] conclusions, studied only the paraphrase form of assistance, and call for external validation before institutional use. Against 57% of U.S. college students reporting at least weekly AI use in coursework, the paper states its [[limitations-in-aied-research|limitations]] as plainly as its results.

## What this means for practice
- **Instructors.** Treat a GPT-assisted prediction as a reason to ask about process, not as evidence: 4 of 18 independently authored documents were flagged here, so request drafts or a conversation first.
- **Administrators.** Do not adopt stylometric detection as an automated misconduct screen; a 22.2% false positive rate with a 95% CI of 9.0%–45.2% rules out standalone use, so fund review capacity instead.
- **Researchers.** Replicate on other institutions, tasks, languages and student populations and report subgroup error rates, since this study estimated none for demographic or language-background groups.

## Limitations
- The sample is 90 participants from one course on large language models at one institution in India, writing on one topic under one assistance setting: paraphrasing GPT output.
- The headline estimate rests on 36 documents from 18 participants, so intervals are wide (FPR 9.0%–45.2%; FNR 3.1%–32.8%) and error rates shifted under alternative train-test splits (mean FNR 23.7%–24.8%).
- Writing condition is confounded with session order, because every participant completed the independent session first.
- Other forms of AI assistance — brainstorming, editing, or generating text without paraphrase — were not evaluated.

## Connected Concepts
- [[ai-detection]]
- [[academic-integrity]]
- [[explainable-ai]]
- [[machine-learning]]
- [[assessment-validity]]
- [[writing-education]]
- [[llm]]
- [[generative-ai]]
- [[educational-measurement]]
- [[quantitative-research]]
- [[bias-mitigation]]
- [[differential-effects-across-learner-groups]]
- [[legal-issues-and-risks]]
- [[limitations-in-aied-research]]
- [[human-in-the-loop-ai]]

## Connected Articles
- [[bassett-ai-detectors-education-2026]] — Heads We Win, Tails You Lose: AI Detectors in Education
- [[karr-ai-detection-humanization-2026]] — Why AI Detection Fails for Academic Integrity
- [[van-vlasselaer-ai-detector-reliability-2026]] — Who wrote this? Evaluating the reliability of AI detection tools in higher education
- [[hadra-ai-detector-accuracy-efl-2026]] — Evaluating the accuracy and reliability of AI content detectors in academic contexts
- [[teichmann-detecting-undetectable-misconduct-2026]] — Detecting the Undetectable? Reassessing Academic Misconduct Procedures in the Era of Generative AI
- [[detecting-llm-generated-text-latent-prompt]] — Once a Response, Always a Response: Detecting LLM-generated Text via Latent Prompt Restoration
- [[llm-detecting-llm-generated-content-education]] — Distinguishing Artificial from Authentic: Evaluating LLMs for Detecting LLM-Generated Content
- [[kirsanov-beyond-detection-ai-online-assessments-2026]] — Beyond Detection: How Students Use—and Hide—AI in Online Assessments and What Authentic Tasks Can Do About It

## Citation
Kumar, R., Siddiqui, N., & Fuchsberger, A. (2026). [Detecting GPT-Assisted Writing Using Interpretable Stylometric Features](https://arxiv.org/abs/2609.26687). arXiv:2609.26687.