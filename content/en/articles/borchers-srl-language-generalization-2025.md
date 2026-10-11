---
title: Large language models generalize SRL prediction to new languages within but not between domains
created: "2026-10-10T19:40:00-04:00"
updated: "2026-10-10T19:40:00-04:00"
type: article
pedagogy: [self-regulated-learning, metacognition]
technology: [llm, intelligent-tutoring, knowledge-tracing]
assessment: [process-oriented-assessment]
audience: [researchers, educational technology developers]
level: [undergraduate, graduate]
sources: ['raw/papers/borchers-srl-language-generalization-2025.md']
confidence: high
research_method: [experiment]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This paper asks whether an automated [[self-regulated-learning|self-regulated learning]] (SRL) detector — embedding-based classifiers over think-aloud transcripts (26 students, German and American universities, three tutoring systems: StoichTutor and ORCCA for chemistry, LogicTutor for formal logic) — transfers across languages. The answer is a careful yes-within, no-between: English-trained models classify German SRL utterances at ~0.8 AUC across the four Winne-and-Hadwin categories (processing information, planning, enacting, realizing errors) with only ~0.1 degradation from same-language cross-validation — except *enacting*, the category most tied to domain-specific vocabulary. But the within-domain generalization doesn't extend across instructional domains: chemistry-to-logic transfer drops to ~0.6 (matching prior US-only domain-transfer results) and enacting falls to chance (AUC ~0.5). The failure analysis is the paper's most valuable contribution: **the model resolves concepts at their everyday-web meaning, not their domain meaning** — "cancel" as cancellation vs. chemistry "kürzen"/"streichen" — so utterances whose SRL category hinges on subject-specific semantics misclassify systematically. A second failure mode is **anthropomorphization**: German students unfamiliar with StoichTutor's factor-label method addressed the tutor as a person ("Der will, dass ich Kiloliter eintrage"), utterances outside the English-trained model's distribution. A third is **hint-processing ambiguity**: models can't tell a student reading a metacognitive hint (coded as processing) from a student formulating an independent plan (coded as planning) without access to instructional context like log data. Notably, *realizing errors* is the one robust category across every transfer condition — because noticing you're wrong is not instruction-context-dependent.

The methodological stance matters: these are embedding classifiers (OpenAI text-embedding-3-small), not fine-tuned LLMs — cross-lingual transfer comes "for free" from the multilingual embedding space, which is both the mechanism and the limitation (German and English are both high-resource, well-represented languages; low-resource languages are untested and the authors flag this explicitly). The transfer-grading by scaffolding level (RQ2) yields a practical design rule: language transfer is *better* on low-scaffold platforms and when the scaffolded strategy is culturally familiar — heavy scaffolding transfers worst when it embodies an unfamiliar instructional convention. The proposed remedies map directly to the failure modes: expert dictionaries or fine-tuning for domain-term resolution; incorporating log/instructional-context data into prediction for hint disambiguation. The honest caveats: n = 26 students, think-aloud demand effects, bilingual-coded ground truth, and German/English's privileged position in LLM training corpora all bound how far these results extend.

## Key findings

- **Cross-language transfer works within domain:** AUCs ~0.8 across all four SRL categories both directions, ~0.1 below same-language cross-validation (Table 4), except enact (~0.66–0.71).
- **Cross-domain transfer fails the way prior work predicted:** ~0.6 for three categories (Table 6), enact at chance (~0.5) — language transfer adds no *further* degradation beyond domain transfer; the domain wall is the real barrier.
- **Concept resolution is the core failure:** everyday-word-to-domain-meaning mismatches ("cancel" ↔ "kürzen" as everyday "shortening") systematically break enact classification.
- **Anthropomorphization degrades transfer on heavily-scaffolded platforms:** German students addressing StoichTutor as "he" produced out-of-distribution utterances; transfer was better on the less-scaffolded ORCCA and when the strategy was familiar.
- **Hint-processing vs. plan-formulation is unresolvable without context:** models can't distinguish reading a metacognitive hint from independently planning without log data; hints differ across domains, so no domain-general fix without context.
- **Realizing errors is the invariant category:** >0.8 AUC under every language/domain/scaffolding condition — context-independent self-monitoring.

## What this means for practice

- **For SRL-detection deployments:** training language doesn't have to match deployment language within the same domain and platform family — but deploying a chemistry-trained model on a different subject is a new model, not a language variant.
- **For low-scaffold-first design:** if you want SRL sensing to generalize culturally, lower-scaffold platforms and familiar instructional strategies transfer better.
- **For multilingual systems:** expert-domain dictionaries or fine-tuning on domain terminology are the known fixes for the concept-resolution failure; machine translation alone won't handle subject-specific semantics.
- **For instrumentation:** log data (what hints fired, what was on screen) is the missing modality — transcript-only prediction hits a context ceiling no amount of language data fixes.

## Limitations

- Small sample: 26 students across two universities and three systems; think-aloud demand effects on SRL expression.
- German and English are both dominant, web-rich languages — the multilingual-embedding result may not replicate for low-resource languages, which the authors explicitly flag.
- Embedding classifiers, not instruction-tuned LLMs; whether LLM-based detectors show the same transfer profile is untested.
- Ground truth from bilingual human coders of a shared scheme — coding reliability across cultures is itself an assumption.
- Domain transfer tested only chemistry ↔ formal logic; other domain pairs may behave differently.

## Citation

Borchers, C., Zhang, J., Fleischer, H., Schanze, S., Aleven, V., & Baker, R. S. (2025). Large Language Models Generalize SRL Prediction to New Languages Within But Not Between Domains. *Journal of Educational Data Mining, 17*(2), 24–54.
