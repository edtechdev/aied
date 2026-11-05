---
title: "Why is AI-generated language so hard to understand?"
created: "2026-11-05T01:50:00-05:00"
updated: "2026-11-05T01:50:00-05:00"
published: "2026-10-21"
type: article
pedagogy: [cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
assessment: [assessment-validity]
methods: [quantitative-research]
research_method: [experiment]
audience: [instructors, researchers, instructional designers]
page_kind: [evaluation]
sources: ["raw/papers/clark-ai-generated-language-readability-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
---

> **Synthesis:** Clark, Martin and Mahowald ask why recent [[llm|language model]] output reads as harder than earlier output or than human writing. They build a corpus from 14 models in three settings — multi-turn chat, coding sessions, and single-turn student-essay prompts — and measure six psycholinguistic features that the [[cognitive-psychology|processing literature]] associates with comprehension cost: low-frequency n-grams, dependency length, object relative clauses, stacked noun compounds, denominal verbs, and inanimate subjects with animate verbs. A round-trip translation through Japanese supplies a meaning-preserving paraphrase for every sentence, so a feature that thins out after paraphrasing is a stylistic choice the model made rather than a property of the content. Frontier and near-frontier models over-use rare n-grams, denominal verbs, inanimate subjects and reduced object relatives; all nine frontier and near-frontier models exceed human baselines on inanimate subjects and low-frequency n-grams, and most also run longer dependencies, more stacked nouns and more reduced object relatives in conversation. The authors attribute the pattern to post-training for math, code and reasoning, where information density is rewarded and clarity is not, and support that hypothesis with a [[reinforcement-learning|reinforcement-learning]] length-penalty experiment. The study involves no learners or classrooms; its educational bearing is that AI-written explanations, feedback and reading material carry this linguistic profile into the classroom.

## Key Findings

1. The corpus covers 14 models — Kimi K2.5, GLM 5, four Claude variants, three GPT-5.6 variants, three Olmo variants and two Llama variants — over 15 conversational seeds (10 chat, 5 coding), with chat sessions capped at 12 turns, coding sessions at 11 turns plus a closing message, and seven PERSUADE 2.0 essay assignments for the single-turn setting.
2. Round-trip translation (English to Japanese and back with NLLB-200 3.3B) is the control that separates style from content: a feature that becomes less frequent after paraphrasing is one the model chose over an available alternative that says the same thing.
3. Against that paraphrase corpus, frontier and near-frontier models over-use unattested bigrams, higher n-gram perplexity, denominal verbs, inanimate subjects and reduced object relatives, and under-use object relatives that keep an optional relativizer — a consistent preference for dropping optional words.
4. Against genre-matched human baselines (OpenSubtitles for chat, StackExchange for coding, student essays for the essay setting), all nine frontier and near-frontier models use more inanimate subjects with animate verbs and more low-frequency n-grams; most also show longer dependencies, more stacked nouns and more reduced object relatives in conversation.
5. The effects are smaller in the single-turn PERSUADE essays than in multi-turn chat and coding, which the authors read as evidence that iterated conversation creates pressure toward compression.
6. Model families diverge: Llama and Olmo base and instruct models change least under paraphrasing and sit closest to the student essays on the n-gram and verb measures, while Olmo Think patterns with the frontier models; Claude Opus 5.5 is lower than Opus 5 on 19 of 21 difficulty-linked comparisons, with non-overlapping 95% intervals in eight.
7. A GRPO length penalty raises the probability of the shorter member of syntactic alternations as the penalty grows; without KL regularization, runs at zero penalty ranged from 0% to 100% short-variant use by seed, while every run above zero converged on a categorical preference, exceeding 98% for both trained "that" alternations, and the preference transferred to unseen constructions — consistently for near-transfer alternations, and for one of four far-transfer alternations (the genitive) only without KL regularization.

## A Corpus Built for a Processing Question

The features were chosen from psycholinguistics rather than from readability formulas. Low-frequency n-grams, long syntactic dependencies, object relative clauses, stacked noun compounds, denominal verbs and inanimate subjects each have experimental support as sources of processing difficulty, so counting them in model output asks how much work a reader must do rather than how long the words are. That is a different measurement from the surface proxies in Flesch–Kincaid or Lexile scores, and this is where the paper connects to the [[assessment-validity|validity]] question that runs through [[educational-nlp|text-difficulty work]]: a formula can score two passages alike while one of them demands more syntactic and lexical processing.

The design holds semantics fixed in two ways. Genre-matched human corpora supply a baseline for what ordinary writing in that register looks like, and round-trip translation supplies a paraphrase of each model response. The paraphrase is the sharper instrument: because the bilingual pivot normalizes wording while preserving meaning, any feature the model used more often than its own paraphrase is a preference rather than a necessity.

## Which Features the Models Over-Use

Across settings, the models over-represent rare n-grams, denominal verbs, inanimate subjects and reduced object relatives, and under-represent object relatives with the relativizer — they skip optional words when they can. Stacked nouns and dependency length follow the same pattern in chat and coding but not reliably in essays, and the essay effects are smaller overall on the n-gram, dependency-length and verb measures. The authors speculate that a single prompt offers less opportunity for the iterative compression that many turns of conversation invite.

The variation across models matters for how the finding should be read. The Llama models and the Olmo base and instruct models change least under paraphrasing and are closest to student essays on the n-gram and verb measures; Olmo Think behaves like a frontier model, and within the Olmo family the effect grows from base to instruct to reasoning model. That ordering is the paper's own evidence that post-training, not pretraining, produces the shift.

## Why Post-Training May Push Toward Density

The explanatory hypothesis is that human language is optimized for communication — an efficient balance between ease of production and ease of understanding, with dependency length minimized — while post-training rewards correctness on math, code and reasoning tasks where the answer, not the explanation, is checked. If reward is verifiable and clarity is not measured, compression becomes free. The length-penalty experiment tests the mechanism directly: penalizing tokens during reinforcement learning with GRPO moves the model toward shorter syntactic alternations, including alternations it was not trained on, and the model still solves the task. The authors conclude that correctness and humanlike communication can come apart, and that the result points to remedies in how models are post-trained rather than only in how they are prompted.

## What this means for practice

- **Instructors.** Read AI-generated explanations, worked examples and feedback as drafts with a readability problem of their own: the difficulty is syntactic and lexical rather than a matter of length, so a readability score will not catch it, and simplifying a dense explanation may mean rewriting it rather than shortening it.
- **[[learning-design|Instructional designers]].** When AI produces reading material for a course, check the constructions this study names — stacked nouns, nominalized verbs, inanimate subjects, long dependencies — rather than relying on a grade-level formula alone.
- **[[educational-technology-developers|Educational technology developers]].** Screen generated content on psycholinguistic features before it reaches learners, and treat readability as something to enforce at generation or post-training time, not only to measure after the fact.
- **Researchers.** Evaluate AI-written educational text against meaning-preserving paraphrases and human baselines for the genre, so that a claim about readability distinguishes what the content required from what the model preferred.

## Limitations

- The study covers a subset of models, analyses only English, and uses a limited number of conversation seeds; the authors call for replication on larger seed sets and more model families.
- Causal claims about post-training rest on proxies: the authors cannot study the frontier models as they are post-trained, and the length-penalty experiment is a proof of concept on a smaller model.
- No learners, reading tasks or classrooms are studied, so the educational implications are about the properties of generated text rather than about measured comprehension or learning.
- The student-essay setting is single-turn and its effects are smaller, so the chat and coding results should not be generalized to all AI writing.

## Citation

Clark, T. H., Martin, M. B., & Mahowald, K. (2026). [Why is AI-generated language so hard to understand?](https://arxiv.org/abs/2610.29162). arXiv:2610.29162.
