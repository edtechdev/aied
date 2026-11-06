---
title: "Analyzing Educational Video Transcripts with LLMs: Accuracy, Named Entities, and Interpretability"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/wang-educational-video-transcripts-llm-analysis-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers, learning analytics designers, educational technology developers]
level: [k 12, higher ed]
discipline: [humanities education]
pedagogy: [video-education]
technology: [educational-nlp, llm, learning-analytics, speech-and-voice-technologies]
methods: [benchmark, ai-assisted-educational-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Wang, Pritchard and Rosenberg validate a transcript-to-entity workflow for mining educational video: they benchmark five automatic speech recognition (ASR) systems against a human reference transcript, grade GPT-4o, GPT-5.5 and an off-the-shelf spaCy transformer on a 600-token human-consensus named-entity benchmark, and apply the best-fitting model to 48 episodes of the Crash Course U.S. History series. The central result is a task-dependent trade-off: spaCy was the strongest general entity detector (all-token accuracy 0.960), while GPT-5.5 led codebook-constrained entity typing on the 41 gold-entity rows (accuracy 0.805, κ = .726), so model choice follows the downstream analytic task rather than any universal superiority. That conclusion matters for [[learning-analytics|learning analytics]] and [[ai-assisted-educational-research|AI-assisted qualitative research]], where transcript-derived text increasingly stands in for the video itself.

## Key Findings

1. **Four of five ASR systems stayed below 5% word error rate** on the benchmark sample: TurboScribe WER = 2.43%, Whisper WER = 3.42%, yt-dlp WER = 3.57%, and Otter WER = 4.16%; Vosk lagged far behind at WER = 15.32%.
2. **The corpus baseline was chosen for reproducibility, not peak accuracy.** Despite TurboScribe's strongest lexical results, the authors used yt-dlp-extracted YouTube transcripts (WER = 3.57%, MER = 3.52%, WIL = 4.89%, CER = 2.07%) because the source is open, scriptable, and suited to collecting subtitles across many videos.
3. **Human coders agreed before consensus on 588 of 600 token rows (98.0%; κ = .855)**, and on 36 of the 48 rows where either coder initially assigned an entity label (75.0%; κ = .647), which the reconciled reference then used for evaluation.
4. **On all 600 token rows, spaCy led the pack:** accuracy 0.960 and κ = .682, versus GPT-5.5 (0.938, κ = .624) and GPT-4o (0.918, κ = .462).
5. **On the 41 gold-entity rows, GPT-5.5 won the type-coding contest:** accuracy 0.805, micro F1 0.880, macro F1 0.615, weighted F1 0.879, κ = .726, against spaCy (0.634, 0.743, 0.383, 0.680, 0.488) and GPT-4o (0.537, 0.667, 0.370, 0.642, 0.398). Binary detection flipped the order: spaCy F1 = 0.734, GPT-5.5 F1 = 0.654, GPT-4o F1 = 0.521.
6. **Corpus-scale GPT-5.5 coding of the 48 transcripts found PERSON the most frequent category** (total 2,033; M = 42.35 per episode), followed by GPE (1,877; M = 39.10) and NORP (1,537; M = 32.02); coverage reached all 48 episodes for PERSON, ORG, GPE, and NORP, with EVENT in 47, LOC in 45, and LAW in 44.
7. **Topic-model conditioning changed interpretation:** a predefined K-scan from K = 3 to K = 10 with five models per K selected K = 5, and LLM reference expansion produced clearer topic separation than the ASR baseline.

## How transcript accuracy was benchmarked

The study treats transcript-derived text as the portable, searchable analytic layer for educational video while conceding that meaning also rides on visuals, gesture, and prosody. The principal dataset is the complete 48-episode Crash Course U.S. History series, chosen for its dense historical narration and frequent proper nouns. For RQ1 the authors compared five ASR routes — yt-dlp (YouTube auto-subtitles), Whisper, TurboScribe, Otter, and Vosk — against a human reference transcript using the JiWER toolkit, reporting word error rate, match error rate, word information lost, and character error rate. The pattern was clear: the four systems in common use all landed below 5% WER, while the offline lightweight option Vosk reached 15.32% WER. The authors stress that no universal WER threshold renders a transcript analysis-ready; aggregate lexical accuracy says nothing about whether the entity structure of the instructional narrative survived transcription.

The choice of yt-dlp as the corpus baseline illustrates the trade-off explicitly. TurboScribe was the most accurate in the benchmark, but the full-corpus analyses ran on yt-dlp transcripts because collecting open, scriptable subtitles scales to many videos, and its error rates were reasonably close to the stronger systems. The paper also constructed three transcript-conditioned variants of the same 48 episodes — LLM-based reference expansion, LLM-based NER-oriented correction, and a sequential coreference-plus-NER robustness condition — which raised the mean per-episode word count from 2,612.98 in the ASR baseline to 2,713.63 under coreference expansion, showing conditioning changes scale as well as content.

## LLM coding against a human consensus reference

For RQ2 the authors treated named entity recognition as an annotation problem rather than a plumbing problem. Two researchers applied a fixed seven-category codebook — PERSON, ORG, GPE, LOC, NORP, EVENT, LAW — with definitions, examples, and decision rules for ambiguous cases (titles alone are not PERSON, adjectival references are not entities unless they function as mentions, EVENT requires a specific named event). After four rounds of comparison and discussion they produced consensus labels for each token row in a 600-row benchmark, of which 41 carried an entity label. The human agreement statistics above are the article's answer to the recurring critique that LLM coding is validated against labels nobody can reproduce: first-pass agreement is reported before consensus, and the consensus reference is reported with it.

GPT-4o and GPT-5.5 each received the same codebook the humans used, and spaCy 3.8.14 with the en core web trf transformer pipeline ran as the external baseline on the identical pretokenized sequence. The two evaluation scopes tell different stories on purpose: the 559 unlabeled rows can inflate all-token performance, so the gold-entity scope isolates the rows that actually carry information. SpaCy's binary detection F1 of 0.734 exceeded both LLMs, and per-category results showed spaCy strongest for PERSON and GPE while GPT-5.5 better recovered the codebook-specific NORP and EVENT categories; LOC and LAW could not be scored because the benchmark contained no gold instances. Because the corpus-profiling task demanded distinguishing seven study-specific types rather than maximizing general detection, GPT-5.5 was selected for the full-corpus pass — a decision the comparative structure makes auditable rather than asserted.

## Corpus profiling and downstream conditioning

GPT-5.5 then coded all 48 ASR transcripts under the same fixed coding frame, producing exploratory profiles rather than gold-standard labels: counts, means, variability, and episode coverage per type. PERSON, GPE, and NORP dominated, with variability highest for PERSON, GPE, NORP, and EVENT, indicating entity density is not uniform and concentrates in historically dense or policy-heavy episodes. The authors use these profiles as navigation and sampling infrastructure: episodes dense in historical actors merit targeted human audit when the question concerns representation or framing, while lower-density episodes can support broader thematic analysis.

RQ3 asked whether transcript conditioning changes what topic models reveal. Latent Dirichlet Allocation was fit on each condition as a 48-document corpus, with a predefined K-selection protocol — candidate K values 3 to 10, five random seeds per K, scored on normalized pointwise mutual information coherence, topic diversity, and cross-seed stability via Hungarian matching with Jaccard similarity — which chose K = 5 under parsimony. Reference expansion produced clearer topic separation in the intertopic distance maps, suggesting that making referents explicit helps unsupervised models separate recurring themes; NER enhancement clarified some entity references but more conditionally, since canonical names can dominate topic terms or over-normalize ambiguous categories. The lesson the authors draw is that transcript conditioning is not uniformly beneficial: reference expansion suits narrative-structure goals, while aggressive entity normalization needs caution when the goal is recovering broader conceptual themes.

## What this means for practice

- **Researchers** should validate ASR-derived transcripts against the units their claims depend on, not aggregate word accuracy: four systems under 5% WER coexisted with spaCy failing to beat GPT-5.5 on gold-entity type coding, so WER alone cannot certify entity fidelity for representation or retrieval studies.
- **Learning analytics designers** should choose coding instruments by the downstream task and document the choice: spaCy's binary detection F1 (0.734) outranked GPT-5.5 (0.654), yet GPT-5.5 won the seven-type classification the corpus profiling required (κ = .726 on gold rows), so a single "best NER" verdict would have misled the design.
- **Tool and pipeline builders** should pair LLM coding with a human consensus benchmark and an external baseline before corpus-scale use, mirroring the article's sequence of first-pass agreement, reconciliation, and spaCy comparison, and should treat model-coded profiles as navigation aids for sampling and targeted review rather than as annotations.
- **Qualitative researchers** working with educational video can use validated entity coding to locate historically dense or policy-heavy episodes for close reading, while treating reference-expanded transcripts as the safer conditioning when thematic coherence is the goal.

## Limitations

- The entity benchmark is small and narrow: 600 token rows drawn from one scripted Reagan-era episode, with no gold instances for LOC or LAW, so per-category ordering may shift across genres, tokenization conventions, or domain-adapted baselines.
- The corpus consists of professionally produced, English-language, largely scripted videos; performance may differ for conversational classroom discourse, interviews, teacher-created, or student-produced media with more disfluencies and ambiguous references.
- Corpus-scale counts are model-coded outputs under a fixed human-defined coding frame, explicitly not full human gold-standard annotations; the authors recommend stratified human verification of the corpus profiles.
- LLM-dependent workflows carry reproducibility risk because model behavior changes across time and providers; the authors mitigate this by releasing prompts, scripts, and intermediate outputs and using deterministic settings where possible, but re-validation is required in new contexts.

## Citation

Wang, W., Pritchard, C., & Rosenberg, J. (2026). Analyzing Educational Video Transcripts with LLMs: Accuracy, Named Entities, and Interpretability. *Journal of Educational Data Mining*, 18(2), 143-168.
