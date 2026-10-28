---
title: "AI-Assisted Sentiment Analysis of Student Voice: A Human-Validated Comparison of Lexicon- and Transformer-Based Tools"
created: "2026-10-25T08:30:00-04:00"
updated: "2026-10-25T08:30:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/aalhe-ai-sentiment-analysis-student-voice-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: []
level: [higher ed]
audience: [assessment professionals, assessment designers, researchers]
pedagogy: []
technology: [affective-computing, educational-nlp, machine-learning, llm]
assessment: [assessment, assessment-validity, educational-measurement, self-report-measures]
methods: [qualitative-research, quantitative-research]
institutions: []
ethics: [privacy]
foundations: [limitations-in-aied-research]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** You and Horissian (2026) ask whether off-the-shelf [[affective-computing|sentiment analysis]] tools can validly classify open-ended student survey responses for institutional assessment. Coding 1,220 free-text responses from undergraduates at a private liberal arts university by hand, they compared two lexicon-based tools (TextBlob and VADER) and two transformer-based models (BERT-nlptown and RoBERTa-cardiffnlp) against that human reference standard on accuracy, macro F1, and Cohen's kappa. The best performer, BERT-nlptown, reached only moderate agreement (κ = .42) and identified roughly half of the negative responses, while the lexicon tools silently misclassified about one in five responses because their dictionaries did not recognize the words. The authors frame the result as an [[assessment-validity|validity]] argument rather than a tool ranking, and recommend lexicon-coverage diagnostics, few-shot [[prompt-engineering|prompting]], domain-specific [[llm-training-and-fine-tuning|fine-tuning]], and [[human-in-the-loop-ai|human-in-the-loop]] oversight, with any response flagging distress or safety escalated to a person regardless of model confidence.

## Key Findings

1. **No off-the-shelf tool reached agreement sufficient for unsupervised use.** On the full labeled sample (N = 1,220), accuracy ran from .63 (TextBlob) to .79 (BERT-nlptown), but Cohen's κ ran from .21 to .42, and only BERT-nlptown approached the moderate band.
2. **Lexicon coverage, not sentiment judgment, drove most lexicon errors.** TextBlob missed 21.3% of responses (n = 260) and VADER 21.6% (n = 277); 29.5% (n = 360) were missed by either tool and 13.4% (n = 164) by both, defaulting to a neutral/mixed label.
3. **The neutral/mixed class was weakest for every tool.** Per-class F1 ranged from .26 (VADER) to .37 (BERT-nlptown) on the full sample; on the 860-response lexicon-hits-only subset, VADER's neutral/mixed F1 fell to .14 and it correctly identified only 13 of the 168 ground-truth neutral/mixed responses.
4. **Transformer errors were systematic, not random.** BERT-nlptown labeled 66% of truly neutral/mixed and 31% of truly negative responses as positive, while RoBERTa-cardiffnlp assigned neutral/mixed to 23% of positive and 59% of negative responses — patterns the authors trace to product-review and Twitter training data.
5. **Even the best model missed about half the negative cases.** BERT-nlptown's negative recall was .47 on the full sample and .45 on the lexicon-hits-only subset, which the authors call problematic for institutional assessment, where detecting student dissatisfaction is operationally important.
6. **Accuracy alone misleads on an imbalanced corpus.** Manual labels were 76.5% positive (933 responses), 10.7% mixed (130), 8.0% negative (97), and 4.9% neutral (60), so the authors report macro F1 and κ alongside accuracy to avoid rewarding majority-class prediction.
7. **Human coding was consensual rather than reliability-estimated.** Following consensual [[qualitative-research|qualitative research]], the lead author coded and the second author audited; no inter-rater reliability was computed, and two pilots (n = 11 students, n = 31 community members) found Fleiss's κ = .11 and .19 on ambiguous terms.

## Validity as the frame for automated classification

The study's premise is that a sentiment label is a [[educational-measurement]] outcome, not a description, and must be validated before it is used to make decisions about students. The authors coded 1,220 free-text responses to the question "What words or phrases would you use to describe the Bucknell experience?" into four mutually exclusive categories — positive, negative, neutral, and mixed — with each response receiving exactly one label. Because all four tools output only three classes, neutral and mixed were collapsed into a single neutral/mixed category for comparison, a constraint the authors flag rather than a finding. Responses ranged from single words to 63 words, with a median of three, and the corpus was strongly skewed: 933 responses (76.5%) were positive, 130 (10.7%) mixed, 97 (8.0%) negative, and 60 (4.9%) neutral, leaving 190 (15.6%) in the merged class. Short, context-dependent answers are exactly where a dictionary approach is weakest, and the authors' pilots show why: Fleiss's κ was .11 for a student cohort (n = 11) and .19 for a community cohort (n = 31) classifying nine ambiguous comments, so "challenging" or "busy" cannot be read from wording alone.

## Lexicon coverage and the out-of-lexicon artifact

The clearest result concerns vocabulary coverage rather than sentiment judgment. TextBlob produced no lexicon match in 21.3% of responses (n = 260) and VADER in 21.6% (n = 277); in aggregate, 29.5% (n = 360) were missed by either tool and 13.4% (n = 164) by both. Under the default rules an unmatched response receives a polarity score of zero and is classified neutral/mixed regardless of its actual sentiment, which the authors describe as a silent misclassification of roughly one in five responses. The artifact is visible in the score distributions: 329 of the 1,220 responses sit on TextBlob's zero spike and 277 on VADER's, and after out-of-lexicon responses were removed the zero bins collapsed to 70 and 13. Restricting the analysis to the 860 responses with at least one in-lexicon token improved both lexicon tools sharply — TextBlob accuracy rose from .63 to .78, VADER from .69 to .83 — while the transformer models improved only modestly. The most damning figure is VADER's neutral/mixed F1, which fell from .26 on the full sample to .14 on the hits-only subset because it correctly identified only 13 of the 168 ground-truth neutral/mixed responses.

## Transformer models and domain bias

Sub-word tokenization solves coverage — neither BERT WordPiece nor RoBERTa byte-BPE produced unknown tokens in the corpus — but it introduces training-domain bias. RoBERTa-cardiffnlp was fine-tuned on approximately 124 million tweets posted between January 2018 and December 2021, while BERT-nlptown was trained on multilingual product reviews and outputs a one-to-five-star rating that the authors mapped to three classes with cut-points at 2.5 and 3.5. The error patterns follow those training domains: BERT-nlptown systematically over-predicted positive sentiment, labeling 66% of truly neutral/mixed and 31% of truly negative responses as positive, while RoBERTa-cardiffnlp over-predicted neutral/mixed, assigning that label to 23% of positive and 59% of negative responses. BERT-nlptown was the strongest tool on every metric in both conditions — accuracy .79 and macro F1 .60 on the full sample, κ = .42 — yet its negative recall was only .47 on the full sample and .45 on the lexicon-hits-only subset, so roughly half of genuinely negative responses went undetected. For institutional assessment, where an undetected complaint is the costly error, that is the number that matters.

## What assessment professionals should do

The recommendations follow directly from the measurement argument. First, run a lexicon-coverage diagnostic before deploying any dictionary-based tool on survey data, because about one in five responses in this corpus would have been silently misclassified as neutral/mixed. Second, do not assume that a model trained on social media or consumer reviews generalizes to [[higher-ed|higher education]] survey language; the systematic biases observed here reflect the linguistic patterns of the original training domains, and the authors suggest few-shot prompting and domain-specific fine-tuning as remedies. Third, report more than one metric: accuracy disproportionately rewards majority-class prediction, macro F1 emphasizes balanced performance across classes, and Cohen's κ adjusts for chance agreement, so together they give a more transparent account of classifier performance on imbalanced data. Finally, they argue for human-in-the-loop deployment in which high-confidence classifications get rapid review while low-confidence or ambiguous ones are routed to closer inspection, and any response flagging distress, [[well-being]], discrimination, or safety is escalated to a person regardless of model confidence.

## What this means for practice

- **Assessment professionals.** Before using a dictionary-based tool on survey responses, measure lexicon coverage on your own corpus: here 21.3% of responses (n = 260) had no TextBlob match and 21.6% (n = 277) no VADER match, and those responses default to a neutral/mixed label regardless of their real sentiment.
- **Assessment professionals.** Report accuracy, macro F1, and Cohen's κ together rather than accuracy alone, because the corpus was 76.5% positive (933 responses) and accuracy rewards majority-class prediction.
- **Assessment designers.** Treat a sentiment label as a measurement outcome that must be validated in your institutional context, not as a description of a student's experience; the best tool here reached only κ = .42 with human coding, and its negative recall was .47.
- **Researchers.** Separate coverage from classification when comparing tools — the lexicon-hits-only subset (n = 860) is what showed VADER's neutral/mixed F1 dropping from .26 to .14 and revealed that its apparent skill came from missing words.

## Limitations

- The study was conducted at a single institution and analyzed a single survey question, which the authors say limits generalizability to other institutional contexts or assessment domains.
- Neutral and mixed responses were collapsed into one category because the four off-the-shelf tools output only three classes, which the authors concede may have obscured the distinction between genuinely neutral text and text containing both positive and negative evaluations; 10.7% of responses were coded mixed.
- The tools were evaluated at literature-standard default thresholds and threshold tuning was deliberately excluded, so the results reflect typical practitioner use rather than optimized performance.
- Manual coding followed a consensual qualitative research process with one primary coder and one auditor and computed no inter-rater reliability, so the human reference standard is an adjudicated consensus rather than an independently estimated one.
- The corpus is strongly imbalanced toward positive sentiment (76.5% positive), which the authors note can depress κ even when observed agreement is high.

## Citation

You, W., & Horissian, K. (2026). [AI-Assisted Sentiment Analysis of Student Voice: A Human-Validated Comparison of Lexicon and Transformer-Based Tools](https://doi.org/10.61669/001c.172638). *Intersection: A Journal at the Intersection of Assessment and Learning*, *7*(5), 31–55.
