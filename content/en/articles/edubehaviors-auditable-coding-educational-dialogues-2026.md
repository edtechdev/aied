---
title: "EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues"
created: "2026-09-24T09:11:53-04:00"
updated: "2026-09-24T09:11:53-04:00"
type: article
published: "2026-09-22"
sources: ['raw/papers/edubehaviors-auditable-coding-educational-dialogues-2026.md']
confidence: high
page_kind: [framework]
research_method: [experiment, system development]
discipline: [math education, learning sciences]
level: [k 12]
audience: [researchers, assessment designers, educational technology developers]
foundations: [theories-and-frameworks, limitations-in-aied-research, teacher-role]
technology: [educational-nlp, llm, open-source, human-in-the-loop-ai]
assessment: [educational-measurement, assessment-validity]
methods: [qualitative-research, quantitative-research, benchmark]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Direct [[llm]] [[prompt-engineering|prompting]] has become a default way to annotate educational dialogue, but a single construct label hides the reasoning that produced it. EduBehaviors splits the job in two: language models judge a bank of human-readable *assertions* about each utterance — observable behaviors such as "utterance is spoken by a student" — and a transparent classifier maps those binary judgments into the construct label. On the expert-labeled TalkMoves mathematics corpus the approach reaches a macro-F1 of 0.673 with Cohen's κ of 0.688, beating published direct-prompting baselines while trailing a fine-tuned RoBERTa classifier. For [[educational-measurement]] this reframes model annotation as an auditable chain of evidence rather than an opaque label, though the authors concede that cross-model agreement is a proxy for assertion quality, not proof of it.

## Key Findings

1. **Best configuration is competitive with direct prompting.** The top setting reaches macro-F1 0.673 with Cohen's κ 0.688, against a published prompting maximum of 0.61 macro-F1 and 0.58 κ, and 0.76 macro-F1 for fine-tuned RoBERTa-base.
2. **One schema rested on 221 assertions.** A panel of five language models annotated 74 corpus-derived, 48 construct-derived, and 100 automatic "contains the word X" assertions across 10 sessions and 3,217 [[teacher-role|teacher]] utterances from the 566-transcript TalkMoves corpus.
3. **Agreement filtering helped the strongest annotators.** Requiring Krippendorff's α of at least 0.5 kept 33 of 74 corpus-derived and 11 of 48 construct-derived assertions, and median cross-model agreement was only 0.401.
4. **Keyword counts alone carry little signal.** A words-only baseline using the 100 automatic assertions scored 0.339 macro-F1 and κ 0.328, far below every configuration that also used learned behavioral assertions.
5. **Per-class performance is uneven.** For the best configuration, per-class F1 ranged from 0.432 on the Revo talk move to 0.932 on None, so reviewers see where a schema fails.
6. **Two tools ship with the paper.** EduBehaviors-Studio is a self-hosted, bring-your-own-key app for iterating on assertions, and EduBehaviors-kit packages 49 pretrained [[open-source]] encoder classifiers for reuse.

## The framework: assertions separated from interpretation

EduBehaviors formalizes annotation as a decomposable schema. Given a set of utterances and a label space, an *assertion* is a binary-valued function over utterances, and a schema pairs a set of assertions with a rule that maps every combination of assertion values into the label. That makes the schema an instance of a concept bottleneck model: intermediate human-readable judgments become explicit inputs to the prediction rather than hidden inside one prompt. The authors argue this buys three properties that direct [[educational-nlp|LLM annotation]] lacks. Inspectability, since a reviewer can see which behaviors fired for an utterance and whether a disagreement comes from a misread behavior or from a rule that encodes the construct badly. Calibration and tunability, since ordinary [[machine-learning]] classifiers can be calibrated and their thresholds adjusted to trade precision against recall. And reuse, because a behavior measured once — whether a teacher asks a question — can feed different rules for focusing questions, funneling questions, responses to student mistakes, or relationship building.

## Generating assertions and triaging them

The framework prescribes two generation routes. Corpus-derived assertions come from the transcripts with no downstream task in mind and form a construct-independent library; construct-derived assertions come from a construct's coding manual with no transcripts involved. For the TalkMoves evaluation the authors prompted Claude Fable 5 with transcripts to describe what happens in each utterance, de-duplicated those descriptions into 74 corpus-derived assertions, prompted Gemini 3.1 Pro with the Teacher TalkMoves manual to produce 48 construct-derived assertions, and added 100 automatic word-presence assertions. Because no human ground truth exists at the assertion layer, faithfulness is approximated by having several models annotate each assertion and computing inter-rater reliability, discarding assertions below an agreement bar such as κ of 0.5. This underlies the paper's central diagnostic distinction: when reviewers endorse every assertion for an utterance but reject the final label, the gap is definitional and belongs to the schema, not the model.

## Performance on Teacher TalkMoves

The evaluation uses the seven Teacher TalkMoves labels of a [[k-12]] mathematics dialogue corpus with leave-one-session-out cross validation, so a held-out session is always the test set. Assertions were annotated by a panel spanning providers and sizes, including one open-weights model, and an L1-penalized logistic regression was then fitted per label with an inner validation loop choosing the regularization penalty and selection threshold. All three assertion sources contributed to accuracy: assertion schemas generally beat the best published direct prompting of a frontier model and fall short of the fine-tuned encoder trained on expert labels. Performance varied sharply by talk move, and filtering on cross-model agreement helped the strongest annotators most.

## What this means for practice

- **Researchers.** Replace single-label prompting with an assertion schema: annotate observable behaviors separately, fit a transparent classifier over them, and report per-assertion agreement, not only final κ.
- **Assessment designers.** Use an agreement filter to triage an assertion library, but treat it as screening: at a threshold of 0.5 it kept only 33 of 74 corpus-derived assertions and changed which schema won for each annotator.
- **Researchers.** Do not present cross-model agreement as validity evidence — audit assertion annotations even when agreement is high, because shared model errors survive the filter.
- **[[educational-technology-developers|Educational technology developers]].** Reuse the released encoders and pipeline when the target corpus resembles TalkMoves, but re-validate assertions on the new setting first; the pretrained classifiers encode TalkMoves behaviors trained on model-generated labels.

## Limitations

- Assertion annotations were never validated against human gold labels, so cross-model agreement cannot exclude shared errors or independently establish [[assessment-validity|construct validity]].
- All encoder classifiers in the toolkit are based on TalkMoves corpus-derived assertions trained on LLM-annotated labels, and may not be valid where applications differ in significant dimensions.
- The approach strictly underperforms the fine-tuned classifier trained on expert-annotated gold data, so such datasets remain worthwhile when high confidence is required.
- The evaluation covers 10 sessions and 3,217 teacher utterances from one K-12 mathematics corpus, and whether assertion-based coding reduces annotation and revision rounds remains an open question.

## Connected Concepts

- [[educational-nlp]]
- [[llm]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[benchmark]]
- [[human-in-the-loop-ai]]
- [[open-source]]
- [[teacher-role]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[machine-learning]]
- [[limitations-in-aied-research]]
- [[theory-development-aied]]

## Connected Articles

- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not Ground Truth
- [[llm-qualitative-coding-consensus-2026]] — How AI Coders Discuss, Disagree, and Reach Consensus: Challenges and Opportunities for LLM-Based Qualitative Coding
- [[teaching-feedback-classification-benchmark]] — A Durability and Cross-Language Transfer Benchmark for a Validated Teaching-Feedback Classification Protocol
- [[melo-llm-classroom-observation-teach-2026]] — Validating AI-generated classroom observations: Reliability, accuracy, and limits of LLM-based pedagogical judgment
- [[xiong-ai-educational-measurement-review-2026]] — A Decade of Reflection and Thematic Review on Artificial Intelligence's Impact on Educational Measurement
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise

## Citation

Bernado, Ribeiro, Beberman, and Loeb (2026). [*EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues*](https://arxiv.org/abs/2609.27043). arXiv preprint.