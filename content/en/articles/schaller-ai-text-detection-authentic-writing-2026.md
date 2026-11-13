---
title: "Detecting AI-Authored Text in Authentic Student Writing: Evidence from PISA 2025"
created: "2026-11-10T18:19:20-05:00"
updated: "2026-11-10T18:30:00-05:00"
type: article
page_kind: [evaluation]
research_method: [secondary analysis, experiment]
evidence_context: educational
discipline: [writing education, english education]
level: [secondary]
audience: [instructors, researchers, assessment designers]
sources: ['raw/papers/schaller-ai-text-detection-authentic-writing-2026.md']
source_url: "https://arxiv.org/abs/2611.12487"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [academic-integrity, limitations-in-aied-research]
pedagogy: [student-ai-interaction]
technology: [generative-ai, llm, educational-nlp]
assessment: [ai-detection, assessment-validity]
methods: [benchmark]
institutions: []
ethics: []
---

> **Synthesis:** [[ai-detection|AI-text detectors]] are usually validated on essays written entirely by a human or entirely by a model, from prompts a researcher designed. Schaller and colleagues test the harder case with the PISA 2025 FLA writing study, in which 2,429 German 15-year-olds wrote English argumentative essays with and without a gpt-4o-mini chatbot while keystrokes, clipboard events and chat turns were logged, so every character of the final essay can be traced to a student or to the model. Both detectors — a feature-based XGBoost model and a classifier over frozen Llama-3.1-8B embeddings — separate AI from human text at macro-F1 up to 0.96 for texts and 0.95 for sentences. The difference that matters is what each relies on. The feature-based detector depends on [[educational-nlp|lexical complexity]], which one student-style rewriting prompt removes (AI recall 0.92 → 0.60), while the embedding detector keeps whole-text recall at or above 0.94. Locating AI material sentence by sentence, and AI use that leaves no copied text in the essay, remain unsolved.

## Key Findings

1. **Provenance replaces condition-based labeling.** Keystroke, clipboard and chat logs let the authors trace every character, so labels record what actually reached the essay: 1,134 of 1,981 chat essays contain traceable AI material.
2. **Both detectors separate AI from human text at text level.** Macro-F1 reached 0.95 for XGBoost on 85 interpretable features and 0.96 for the frozen-embedding classifier, below shared-task scores above 0.98 on researcher-prompted essays.
3. **Sentence level separates the two systems.** XGBoost fell to macro-F1 0.88 while the embedding classifier held 0.95 — the level at which partial AI use would have to be located.
4. **Mixed and untraceable use does not fit the binary.** Text written after chatbot use with no copied or retyped material was read as human in 94.6% (XGBoost) and 94.7% (RFCN) of cases.
5. **The feature-based detector leans on lexical complexity.** Form features carry 74.4% of its SHAP importance, average word length alone 19.5%, and content features lose 0.17 macro-F1 when transferred across tasks.
6. **Spelling is not the shortcut.** Student texts carried 4.36 misspellings per 100 words against 0.72 for chatbot output, yet correcting or inserting them moved XGBoost by at most 0.01 macro-F1.
7. **A single prompt removes the form signal.** Rewriting AI texts to sound like a 15-year-old cut XGBoost's AI recall from 0.92 to 0.60 with gpt-4o-mini and to 0.41 with Qwen3-14B.

## What the writing sessions actually record

The data come from 4,091 writing sessions by 2,429 15-year-olds in German [[k-12|secondary schools]], collected alongside the PISA 2025 assessment on two argumentative tasks taken from the MEWS study. Each student wrote one essay per task, one with unrestricted access to a gpt-4o-mini-based [[conversational-ai|chatbot]] and one without, in sessions limited to 30 minutes, with condition and task order randomized. Because keystrokes, pastes and chat interactions were logged, a post-chat sentence whose characters are at least 90% AI-sourced is labeled AI and one with any AI share above zero MIXED; an essay is AI if at least half its sentences are AI, MIXED if it contains one such sentence. POTENTIAL_INFLUENCE covers material written after the student first opened the chatbot but containing no copied or retyped output — the case that [[ai-use-disclosure|disclosure]] regimes are meant to capture. Access and outcome diverge: 1,889 of 1,981 chat essays involved chatbot use, but only 1,134 contain AI material in the final text. The authors describe the release as a [[benchmark]] of authentic student essays carrying provenance-based labels at both levels; the experimental subset is 3,303 essays by 2,204 students and 44,133 sentences.

## Two detectors with different dependencies

Both were adapted from top-ranked systems in the 2025 shared task on [[writing-education|academic essay]] authenticity. The feature-based detector follows Indurthi and Varma, representing each text with the 85-feature NELA set (Style 50, Complexity 7, Bias 8, Affect 9, Moral 11) and classifying with XGBoost. The [[llm|embedding]] detector follows Jiao and colleagues, truncating input to 1,024 tokens, averaging last-layer hidden states of a frozen Llama-3.1-8B into a 4,096-dimensional vector, and training only a small convolutional network on top. At text level the two are near-identical, at macro-F1 0.95 and 0.96 (accuracy 0.95 and 0.97), well below the 0.986 and 0.999 those systems reached on fully generated essays. [[explainable-ai|SHAP]] attribution shows why they diverge: form accounts for 74.4% of the feature model's importance, average word length alone for 19.5%, so its notion of AI authorship is largely "longer words, more punctuation, higher readability". Content features transfer badly, dropping 0.29 macro-F1 when trained on one task and tested on the other, while the full feature set stays within 0.02 in both directions.

## Where robustness stops

Spelling, the cue instructors report using, is nearly irrelevant: student writing in the text-level test set carried 4.36 misspellings per 100 words against 0.72 for chatbot output, and the manipulations moved those rates to 0.01 and 5.06. Across those manipulations XGBoost stayed within 0.01 macro-F1, and the embedding classifier lost 0.02 at text level and up to 0.03 at sentence level, with inserted errors flipping 86 sentences toward human and none in reverse. A student-style rewrite is far more effective. Rewriting every AI text with gpt-4o-mini using a plain STUDENT prompt dropped XGBoost's AI recall from 0.92 to 0.60; an INFORMED prompt listing the distinguishing properties took it to 0.39, and Qwen3-14B rewrites to 0.41 and 0.33. The embedding classifier was unaffected on whole texts (AI recall 0.94 or above across both prompts and both rewrite models) but not on sentences, where its recall fell from 0.94 to 0.59–0.90. Text-level detection therefore answers whether an essay was produced with a chatbot, not where inside it the AI material sits — which is the question an [[assessment-validity|assessment]] decision actually needs answered.

## What this means for practice

- **Instructors.** Do not confront a student over a whole-text score. The same essay moves from detected to undetected under one rewriting prompt, so treat a flag as a prompt to inspect drafts and process evidence, not as a finding.
- **Administrators.** Keep detector output out of [[academic-integrity|misconduct]] decisions: the authors state it should not be standalone evidence, and the untraceable class is invisible to both systems by construction.
- **Researchers.** Report text and sentence level separately, and report what the detector relies on: sentence-level macro-F1 of 0.95 can coexist with AI recall of 0.59 after rewriting.

## Limitations

- Gold labels rest on manually set thresholds — a 90% AI-character share for AI sentences, 0.85/0.90 similarity for retyped text — and varying them changes at most 1% of sentences.
- Provenance cannot capture AI material a student paraphrased heavily or drew on only for ideas, so POTENTIAL_INFLUENCE is a residual class.
- All AI text came from gpt-4o-mini, and every writer was a 15-year-old EFL student in Germany on two argumentative tasks.
- The text-level test set is small: 96 AI and 169 human texts, plus 31 MIXED test texts.
- Evasion was simulated with prompts, not observed; the authors note students may edit output by hand.

## Citation

Schaller, N.-J., Jansen, T., Köller, O., & Horbach, A. (2026). [*Detecting AI-Authored Text in Authentic Student Writing: Evidence from PISA 2025*](https://arxiv.org/abs/2611.12487). arXiv:2611.12487.
