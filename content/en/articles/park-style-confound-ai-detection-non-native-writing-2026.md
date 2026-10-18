---
title: "Style as a Confound: False Positives in AI Detection of Non-Native Academic Writing"
created: "2026-10-18T13:56:00-04:00"
updated: "2026-10-18T13:56:00-04:00"
type: article
sources: ['raw/papers/2608.26710.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers, administrators]
foundations: [academic-integrity]
technology: [generative-ai, llm, machine-learning]
assessment: [ai-detection, assessment-validity]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-18"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Park, Jeong and Kim (2026) turn a professional academic editing service into a natural experiment for [[ai-detection|AI-text detection]]: each of 135,389 document pairs holds authorship, topic and content fixed while changing only the language, because a native-speaker editor revised a manuscript written by a non-native English speaker. Across 13 off-the-shelf detectors, false-positive rates on human-written academic text span the whole range from 0.0% to 100.0%, and the token-statistics family flags almost everything — Log-rank 100.0%, GLTR 99.9%. More consequentially, the same edits move detectors in opposite directions: MAGE becomes 10.7 percentage points less likely to cry AI and RADAR 4.7 points less likely, while Fast-DetectGPT rises 4.6 points and LastDE+ 5.8 points, with the size of the shift tracking how heavily the editor revised. The authors therefore read detector output as a mixture of provenance and language-quality signals, which makes professionally edited, non-native-authored work a systematically flagged population.

## Key Findings

1. The design isolates style from authorship. 135,389 original-and-edited manuscript pairs from a commercial academic English editing service (2018–2025), spanning more than 40 disciplines, were scored by 13 publicly available detectors in off-the-shelf configurations.
2. Baseline false-positive rates occupy the entire possible range. On pre-ChatGPT manuscripts (2018–2022), where any AI classification is by construction a false positive, rates for human-written texts ran from 0.0% to 100.0%.
3. Token-statistics detectors flag nearly all human academic prose. Before editing they labeled 100.0% of documents (Log-rank), 99.9% (GLTR), 99.8% (Log-likelihood) and 99.8% (Entropy) as AI-generated.
4. The other families split widely. Classifier-based detectors ranged from 93.1% (RoBERTa) and 88.3% (RADAR) to 16.7% (MAGE), while zero-shot detectors ranged from 25.2% (Fast-DetectGPT) and 19.9% (LastDE+) down to 0.0% (Binoculars).
5. Editing pushes identical text in both directions. MAGE moved −0.108 in score and −10.7 percentage points in false positives, RADAR −0.037 and −4.7, BiScope −0.019 and −0.5, against Fast-DetectGPT at +0.032 and +4.6, LastDE+ at +0.027 and +5.8, and RoBERTa at +0.017 and +1.7.
6. The shift scales with editing intensity. MAGE's mean score change runs from −0.032 in the weakest editing quintile to −0.214 in the strongest, with correlations of −0.193 for MAGE and −0.418 for BiScope, while Entropy (+0.343) and Log-rank (+0.293) move toward AI as revision grows; explanatory power stays modest (R2 ≤ 0.041).
7. Fluency, not meaning, drives the score. Edit-token ratio correlates with score shift at +0.286 for statistical detectors and −0.089 for supervised ones, and function-word and syntactic ratios track shifts more closely than semantic content, so a flag may signal polished English rather than machine authorship.

## Editing as a natural experiment

Previous evidence on [[bias-mitigation|detector bias]] came from comparing writer populations, which the authors argue is uninterpretable: non-native and native writers differ in topic, domain, purpose and individual style all at once. Editing supplies the control that population comparison lacks. Every record contains the same manuscript twice — once as written by a non-native English speaker, once as revised by a native-speaker editor — so a score difference cannot be attributed to content or authorship. The service's 25-page protocol requires meaning preservation and human editorial judgment, permits AI only as a supplementary grammar check, and explicitly prohibits AI rewriting or stylistic generation, which matters because it keeps a machine's fingerprints from entering the edited text. Editing was substantial yet content-preserving: a median of 196 edit units per document (mean 463) against a median length change of only 6.5 words.

## Thirteen detectors, no agreement

The paper's first result is that the question "do detectors flag non-native academic writing?" has no single answer, because the tools disagree about the same documents. Three families were run: token-statistics detectors (Log-rank, Log-likelihood, Entropy, GLTR), zero-shot likelihood-ratio detectors (Fast-DetectGPT, LastDE+, DetectLLM-LRR, DiVeye, BiScope, Binoculars) and supervised classifiers (RoBERTa, MAGE, RADAR). On the pre-ChatGPT subset, where human authorship is certain, token-statistics tools flagged effectively everything while Binoculars flagged nothing. The authors draw two conclusions. First, a detector's behavior follows its method rather than the text: token predictability misreads fluent academic writing as machine output, while likelihood-ratio approaches are far more conservative. Second, since the same human documents can be classified as predominantly AI-generated by one system and human by another, the outputs cannot be read as measurements of a [[assessment-validity|shared underlying quantity]].

## The same edits move scores in opposite directions

Because each pair is one document in two versions, the editing effect is cleanly attributable to language. It is also incoherent across tools. Classifier-based detectors moved toward human after editing, most strongly MAGE at −0.108 in mean score and −10.7 percentage points in false-positive rate, then RADAR and BiScope. Most token-statistics detectors moved the other way, toward AI, and the zero-shot family split, with BiScope negative and Fast-DetectGPT and LastDE+ positive. Intensity amplifies rather than reverses these tendencies: detectors that read refinement as evidence of human authorship became more permissive as revisions accumulated, and those that read it as evidence of machine assistance became more restrictive, a pattern that held in both the pre- and post-ChatGPT subsets though with smaller magnitude after 2022. The interpretation the authors offer is that editing reduces token-level perplexity and raises predictability, which statistical detectors read as machine-like, while supervised classifiers respond to higher-level patterns.

## What the scores are measuring

The linguistic analysis points at form rather than content. Grammar, syntactic and edit-token ratios correlate positively with score shifts for statistical detectors and negatively for supervised ones, and among lexical measures it is the function-word ratio — a fluency feature — that correlates positively across every family, while type-token ratio correlates negatively. The authors' summary is that detectors respond to how polished the English is at least as much as to who or what produced it, and that the weakening of the editing effect after ChatGPT suggests contemporary human writing has come to resemble the text detectors were trained on. This is why they frame the finding as identifying style as a confounding variable rather than as separating origin from style: the study establishes that a widely used proxy for misconduct moves with editorial quality, which bears on both fairness for [[multilingual-learning|non-native writers]] and the reliability of any process that treats a score as evidence.

## What this means for practice

- **Administrators.** Do not treat a detector score as evidence of [[academic-integrity|misconduct]] for internationally authored work: on identical human-written manuscripts, some deployed detectors flagged every document, and others flagged none of the same texts.
- **Instructors.** If a detector is used at all, calibrate it on your own students' writing before relying on it, because the false-positive rate that matters is the one measured on that population rather than the vendor's headline figure.
- **Assessment professionals.** Treat linguistic polish as a construct-irrelevant signal: a single copy-edit can move the same manuscript from "mostly AI-generated" to "human-written" depending on which tool reads it.
- **Researchers.** Report per-detector false-positive rates and the direction of the editing effect, measured on human text before and after editing, instead of one accuracy figure for "AI detection".

## Limitations

- The manuscripts are predominantly by non-native English-speaking researchers; the authors state the results may not generalize to student essays, journalism, creative writing or social media, which have different linguistic characteristics.
- The corpus contains no AI-generated texts put through comparable editing, so the design cannot fully separate text origin from writing style, and it remains unknown whether editing affects human and AI text differently.
- Treating 2018–2022 as pre-ChatGPT assumes minimal [[generative-ai|generative-AI]] influence in those years; the assumption underlies every baseline rate reported.
- Absolute false-positive rates depend on each detector's thresholding and normalization, even though one consistent protocol was applied to make the comparisons possible.
- The feature analyses are correlational, and the authors state they cannot establish causal mechanisms for any individual linguistic feature; editing intensity also explains little variance (R2 ≤ 0.041).
- The data come from one commercial editing service with its own 25-page house protocol, and editorial practice may have shifted across the 2018–2025 collection window.

## Citation

Park, H., Jeong, G. & Kim, B. (2026). [*Style as a Confound: False Positives in AI Detection of Non-Native Academic Writing*](https://arxiv.org/abs/2608.26710). arXiv:2608.26710. EMNLP 2026.
