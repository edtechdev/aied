---
title: "Beyond Score Accuracy: Examining the Diagnostic Quality of LLM-Generated Structured Assessment in Higher Education"
created: "2026-10-08T09:15:00-04:00"
updated: "2026-10-08T09:15:00-04:00"
type: article
technology: [llm, generative-ai, human-in-the-loop-ai, prompt-engineering]
pedagogy: [misconceptions, transfer-of-learning]
assessment: [automated-assessment, formative-assessment, feedback, ai-feedback-quality, assessment-validity]
methods: [mixed-methods-research]
ethics: [trust-calibration]
research_method: [secondary analysis]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, assessment designers, researchers]
page_kind: [evaluation]
sources: ['raw/papers/llm-structured-assessment-diagnostic-quality-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-08"
    agent: hermes-agent
---

> **Synthesis:** As [[generative-ai|generative AI]] is adopted for grading in [[higher-ed|higher education]], its structured JSON outputs — multi-dimensional rubric scores plus detailed comments — create an appearance of thorough, analytic evaluation. This study of the JorGPT dataset (3,041 student responses to 50 open-ended [[cs-education|computer science]] questions) tests that appearance against human instructors across three commercial [[llm|LLMs]]. All three reach moderate-to-strong score alignment (r = 0.785–0.815), but beneath the totals the diagnostics are largely illusory: the sub-dimension scores are so tightly correlated (r = 0.82–0.99; VIF up to 44.6) that they collapse into a single construct, and the [[feedback]] rarely detects [[misconceptions]] (5–7% vs. 15.0% for instructors). The paper cautions against reading [[automated-assessment]] as an analytic rubric and argues for continued [[human-in-the-loop-ai|human oversight]].

## Key Findings

1. Total scores align moderately strongly with human grades (r = 0.785–0.815), but bias diverges sharply: DeepSeek under-grades (–0.55), Qwen is lenient (+1.28), and Gemini is near-neutral (+0.06, MAE 1.22).
2. The four rubric sub-dimensions are not independent: pairwise correlations run 0.82–0.99, and Qwen's Coverage and Justification VIFs reach 44.6 and 41.1, far above the conventional threshold of 5.
3. Multicollinearity makes the coefficients unstable — DeepSeek's Terminology coefficient turns negative (β = –0.12) despite a positive bivariate correlation (r = 0.65), a suppression effect.
4. Feedback rarely diagnoses errors in understanding: instructors flag misconceptions in 15.0% of comments versus 4.8–7.4% for LLMs, and the gap widens for low scorers (31.5% vs. 5–7% for grades 0–2).
5. Tone is uniformly positive: LLM feedback averages 0.37–0.40 sentiment with over 80% of comments positive, while instructor feedback turns negative for failing work (–0.07) and reaches +0.45 for grades 8–10.
6. Grading accuracy varies by domain (Kruskal-Wallis p < 10⁻⁶): procedural TDD & Testing is most reliable (MAE = 1.05–1.35), while Architecture and Spring Boot topics yield the largest errors (Qwen MAE = 2.36).
7. Feedback acts as a coverage checklist, offering improvement suggestions in 60–77% of low-scoring comments where instructors do so in only 3.3%.

## Score alignment and domain dependence

The three [[llm|large language models]] tracked instructor grades at r = 0.785–0.815, echoing earlier findings for [[automated-assessment]] of open-ended work. Agreement on rank hid disagreement on scale: signed bias separated the models (Friedman χ² = 3,890.1, p < .001), from DeepSeek's strictness (–0.55) to Qwen's leniency (+1.28), with Gemini near-neutral (+0.06) and lowest on MAE (1.22). Accuracy also depended on the question: across six domains grading error varied significantly (Kruskal-Wallis p < 10⁻⁶), procedural TDD & Testing being most reliable (MAE = 1.05–1.35) and design-oriented Architecture and Spring Boot least. The pattern is familiar: well-defined procedural criteria graded well, [[evaluative-judgment]] tasks poorly, because [[llm|LLMs]] are strongest where correctness criteria are unambiguous.

## Redundant sub-dimension scores

Structured JSON advertises analytic scoring across four dimensions: coverage_accuracy, justification_reasoning, terminology_clarity, and learning_transfer. They are not independent. Pairwise correlations ran 0.82–0.99, and an OLS regression predicting human grades produced Variance Inflation Factors up to 44.6, far above the threshold of 5. Coverage & Accuracy dominated every model (β = 0.61–1.08), while the others added little. Redundancy even inverts signs: DeepSeek's Terminology coefficient turned significantly negative (β = –0.12, p = 0.001) despite a positive bivariate correlation (r = 0.65). The authors read this as a threat to [[assessment-validity]]: the format resembles an analytic rubric, but the underlying [[educational-measurement]] behaves like one holistic score, so [[cognitive-diagnosis]] never happens dimension by dimension.

## Feedback that checks coverage, not understanding

A semantic-role analysis classified every comment for praise, missing content, misconception detection, and suggestions. LLMs matched instructors on coverage — 88.5% of DeepSeek comments flagged missing content versus 77.7% for teachers — but trailed on [[misconceptions|misconception]] detection (4.8–7.4% vs. 15.0%), and the gap widened for weak work: among responses graded 0–2, instructors diagnosed conceptual errors in 31.5% of comments while LLMs did so in 5–7%. The models defaulted instead to generic suggestions, present in 60–77% of low-scoring LLM feedback versus 3.3% of [[teacher-role|teacher]] comments, and to praise. For [[formative-assessment]], where naming the nature of an error matters more than flagging its presence, this is the central limitation: the [[feedback]] tells students what they omitted, not what they misunderstood.

## Tone and length

VADER sentiment averaged 0.37–0.40 for LLM feedback, with over 80% of comments rated positive, while instructor feedback averaged 0.14 and turned negative for the weakest work (–0.07 for grades 0–2, rising monotonically to +0.45 for grades 8–10). LLM tone barely moved across grade bands, so students who most need the signal that an answer is inadequate get reassurance instead, failing the tonal calibration that supports [[self-assessment]] and [[trust-calibration]]. Length followed the same shape: human feedback averaged 59 words (SD = 22.8) and grew with performance (r = 0.17, p < 10⁻²⁰), while LLM feedback averaged 23–28 words unrelated to grade. Thorough presentation is not [[ai-feedback-quality|diagnostic quality]].

## What this means for practice

- **Instructors.** Treat the sub-scores as one number: with inter-dimension r of 0.82–0.99, a low terminology score tells you nothing independent of the coverage score, so do not diagnose specific strengths from single dimensions.
- **Instructors.** Keep human review for misconception-rich material and design-reasoning topics — the models caught 5–7% of low-scorer misconceptions against 31.5% for teachers, were least accurate on Architecture and Spring Boot questions, and signal no severity through tone.
- **Assessment designers.** Use these tools as a coverage checklist for procedural knowledge, not an analytic diagnostic, and budget the human time the feedback does not replace.
- **Software developers.** Test whether explicit misconception-detection and tone-modulation instructions in the [[prompt-engineering|prompt]] change these behaviors, since the zero-shot unified schema shows the current default.

## Limitations

- The JorGPT data come from one institution and course — undergraduate software engineering at a Spanish university — so generalization to other disciplines, languages, and contexts is untested.
- Semantic-role classification used rule-based regular expressions targeting marker words (such as "confus" and "incorrect"), which may miss subtle or atypical phrasings a human coder would catch.
- Sentiment was measured with VADER, a lexicon tool built for short social-media text, which may not capture the nuanced tone of educational feedback.
- The three models (DeepSeek-chat-V3.2, Qwen-flash-2025-07-28, Gemini-2.5-flash-lite-001) are a specific generation evaluated zero-shot; newer or differently prompted models may behave differently.
- learning_transfer was excluded from the regression as binary, so the independence analysis rests on three of the four advertised dimensions.

## Citation

Zhao, X., Jiao, X., & Xu, Z. (2026). [Beyond Score Accuracy: Examining the Diagnostic Quality of LLM-Generated Structured Assessment in Higher Education](https://arxiv.org/abs/2610.09460). *arXiv preprint arXiv:2610.09460*.