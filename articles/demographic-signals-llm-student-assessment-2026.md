---
title: "The Role of Implicit and Explicit Demographic Signals in Large Language Model-based Student Assessment"
created: "2026-09-16T09:40:00-04:00"
updated: "2026-09-21T04:33:06-04:00"
type: article
technology: [educational-nlp, llm]
assessment: [assessment-validity, automated-essay-scoring, formative-assessment]
ethics: [bias-mitigation, equity-in-ai-education]
sources: ['raw/papers/demographic-signals-llm-student-assessment-2026.md']
confidence: high
research_method: [experiment]
level: [higher ed, k 12]
audience: [assessment designers, instructors, researchers]
discipline: [learning sciences]
methods: [ai-ed-evaluation, quantitative-research]
---

> **Synthesis:** Rooein, Benedetto and Hovy run a controlled counterfactual audit of demographic sensitivity in six instruction-tuned [[llm|LLMs]] across three educational tasks — [[automated-essay-scoring|Automated Essay Scoring]] (AES), [[formative-assessment|Formative Feedback]] (FF) and metalinguistic question answering (QA). Explicit personas (25 attributes from the AI Gap dataset) and implicit conversation histories both move model behavior across 192,480 inference calls. Most models stay stable under explicit conditioning in AES, where the largest shift is Llama-70B scoring +1.57 points above its own default under implicit conditioning (p < 0.001), but open-ended tasks show systematic differences in readability, length and sentiment — a split verdict for [[assessment]]: invariance is required in high-stakes scoring, some adaptation may be pedagogically legitimate in instruction, and current models cannot reliably separate task-relevant information from demographic cues, a threat to [[assessment-validity|validity]] and [[equity-in-ai-education|equity]].

## Research Questions and Design

The paper defines **demographic sensitivity** as systematic differences in model behavior attributable solely to demographic context with task inputs held constant — distinct from *bias*, since adaptation can be pedagogically useful while the same sensitivity harms elsewhere. Two questions organize the study: whether implicit and explicit cues systematically influence LLM behavior, and how the effect differs across educational tasks.

Tasks span distinct demands: AES (holistic scoring from 1 to 6 against expert human ratings), FF (open-ended strengths-and-weaknesses feedback on the same essays), and metalinguistic QA (open-ended answers about English, no rubric). Inputs come from Persuade 2.0 (human) and the ELQA corpus, 40 items per task; demographic context comes from the AI Gap dataset, whose real prompt histories supply 25 attributes spanning demographics, hobbies, technology use and LLM-use frequency. Filtering to users with the maximum 10-prompt history yields 490 profiles, of which 200 are subsampled. Contexts do not match the essay authors, so holding the task input fixed isolates the demographic cue.

Three conditions structure the comparison: **Model default** (task only), **Explicit (Exp)** (the profile stated as a persona description), and **Implicit (Imp)** (prior-prompt history prepended, nothing disclosed directly). Six instruction-tuned models — GPT-5-mini, GPT-5-nano, Llama 3.3 70B, Llama 3.2 3B, Qwen3 4B, Qwen3 30B — each run every task under all three conditions at temperature 0.0: 6 × 2 × [(40 × 200) × 2 + 40] = **192,480 inference calls**, conditioned by [[prompt-engineering|prompting]] and [[scaffolding|scaffolding]] rather than fine-tuning.

AES is evaluated against expert human scores; FF and QA have no references, so the authors measure readability (ARI, Flesch Reading Ease), response length, sentiment and BERTScore F1 against the default, with topic modeling to test whether sentiment tracks topical [[writing-education|composition]]. Statistics combine Lasso regression, Kolmogorov–Smirnov tests and an AES paired t-test with Bonferroni correction; an attribute counts only when significant in at least N = 10 of the 40 per-item tests for Exp and N = 5 for Imp.

## Key Findings
1. **Automated Essay Scoring tracks explicit conditioning, not implicit.** Against a human mean of 3.02 ± 1.00, Model default shows Llama-3B overscoring (+0.48) and Llama-70B underscoring (−0.52); under Exp, deviations stay modest (Llama-3B +0.55, Llama-70B −0.60) and the GPT models never shift significantly. The KS test finds significant distributional shifts **only under Exp, never under Imp** — Llama-3B D(edu₂, edu₀) = 0.65, Qwen-30B D(edu₂, edu₀) = 0.60 — so explicit sensitivity in AES is structured while the implicit channel is erratic, a nuance for [[automated-assessment|automated assessment]].
2. **The implicit channel inflates AES scores by up to +1.57 points.** Imp produces the study's starkest effect: Llama-70B inflates scores by **+1.57 points relative to its own default** (p < 0.001), attributing them to conversational content (brainstorming +0.26, writing +0.24), whereas Exp scoring effects are small and model-specific, led by Qwen-30B penalizing [[higher-ed|higher education]] (µb = −0.11).
3. **Metalinguistic QA: readability adapts explicitly, then leaks implicitly.** Education yields significant positive ARI coefficients under Exp for Llama-70B, Llama-3B, Qwen-30B and GPT-mini, so higher education draws *less* readable responses. The effect is absent under Imp, where majority-group attributes — English as a first language, Male, Christian — instead draw slightly *less* readable responses. Imp coefficients are consistently smaller (µb = 0.56 for ARI, µb = 0.51 for FRE), and KS differences scale with the gap: Llama-70B D(ses₄, ses₈) = 0.79; Qwen-30B D(edu₀, edu₂) = 0.51.
4. **Response length inverts under implicit conditioning.** Length produces more significant, larger effects under Imp: laptop users receive longer responses across four models (Qwen-4B +32.97, GPT-mini +21.20, Llama-3B +13.94, GPT-nano +12.08), as do histories mentioning writing and higher education levels (slope m = 1.20, opposite in direction to readability).
5. **Sentiment, not length, carries the equity finding.** The clearest equity concern is sentiment: higher education yields more positive sentiment for the two Llama models under Exp and, more weakly, Qwen-30B under Imp. With sentiment scored on {0, 1, 2, 3, 4} (σ = 0.07) across four education levels, the coefficient implies an average difference of about **0.3 between the lowest and highest education level** — more than four standard deviations of the metric. Several attributes reach |µb| ≥ σ_sentiment **only** under Imp (tech: Smartphone, religion: Christian, hobbies: Use social media), which the authors attribute to topical carryover from prior histories.
6. **Topic composition, semantic drift and feedback.** Clustering 2,000 simulated prompts into 15 topics shows the implicit channel is demographically entangled, with women's prompts skewing to career and resume tasks, men's to general Q&A, lower SES to factual lookup and the top SES level to finance. BERTScore F1 against the default finds a majority-culture center of gravity beyond language: English — nationality: United States is positive under Exp — so the unconditioned baseline is itself a demographic position, and age and SES flip sign between conditions (SES positive under Exp but negative under Imp for Llama-70B). Formative feedback reverses the scoring pattern: almost all significant attributes are driven by **Imp conditioning, concentrated in Llama-70B**, where writing-use-case personas (µb = +3.67) receive more readable feedback and every sentiment effect belongs to Llama-70B (usecase: Brainstorming +0.32, tech: laptop +0.24).

## What the fairness findings mean for evaluation practice

The verdict is task-dependent — the paper's most usable contribution for [[ai-ed-evaluation|evaluation practice]]. Where scores are high-stakes, invariance is essential: an essay score should depend on quality alone. In instruction, some adaptation may be pedagogically appropriate — adjusting [[feedback]] readability to a learner's educational level — provided it does not reinforce stereotypes. The channels are not separable: explicit effects that look like useful [[personalized-learning|personalization]] coexist with effects that look like bias, and the implicit channel, which no deployment can suppress, produces larger, less predictable shifts. Demographic sensitivity is also a model property as much as a task property — GPT models stay stable in AES while Llama-70B dominates implicit effects — and lower-education responses drawing lower sentiment in QA is the compounding disadvantage [[bias-mitigation|bias mitigation]] targets.

## What this means for practice

- **Instructors.** Audit any LLM scorer for demographic sensitivity before trusting its output: attaching a plausible conversational history raised Llama-70B's scores by +1.57 points above its own default (p < 0.001), essay unchanged.
- **Instructors.** Require invariance where scores count — compare distributions across persona and history conditions before a model contributes to a grade; stability varied by model and task, not by pipeline.
- **Designers.** Log the history that conditioned each generation: it is a live input channel no deployment can suppress and produced the largest, least predictable shifts.
- **Researchers.** Test explicit and implicit conditioning as separate manipulations; conflating them misattributes effects, since age and SES coefficients flip sign.

## Limitations

- Cost-limited subsampling: 120 items (40 per task) and 200 profiles from 490 eligible AI Gap profiles; the authors call for larger datasets and more tasks.
- Tests ran per item (40 per condition) with a Bonferroni correction the authors call conservative, so the results are a lower bound.
- Majority-skewed attributes — 96% of profiles report English as their first language — make coefficients uninterpretable as group contrasts and were excluded.
- Histories come from general LLM use rather than educational use, the essay authors' true demographics differ from the conditioning profiles, and the English-only design rules out evaluating grammatical gender. The work is therefore an audit instrument, not a deployment verdict — the role [[limitations-in-aied-research|limitations-aware]] testing should play before [[generative-ai|generative AI]] is trusted with assessment at scale.

## Connected Concepts

- [[automated-essay-scoring]]
- [[automated-assessment]]
- [[equity-in-ai-education]]
- [[bias-mitigation]]
- [[assessment-validity]]
- [[formative-assessment]]
- [[feedback]]
- [[llm]]
- [[generative-ai]]
- [[ai-feedback-quality]]
- [[educational-measurement]]
- [[assessment]]
- [[educational-nlp]]
- [[ai-ed-evaluation]]
- [[evaluative-judgment]]

## Connected Articles

- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — EduFair-Bench: Pedagogical Fairness of LLM Tutors Across Student Demographics
- [[gender-bias-transfer-llm-writing]] — Contaminated Collaboration: Gender Bias Transfer in LLM-Assisted Student Writing
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: Linguistic Biases in Personalized Automated Writing Feedback
- [[gpt-human-rater-essay-assessment-2026]] — Comparing GPT and Human Raters in Essay Assessment
- [[bandit-driven-llm-essay-scoring-2026]] — Bandit-Driven Prompt Selection for Low-Cost LLM Essay Scoring
- [[llm-essay-assessment-framework-reliability-2026]] — A Framework for Evaluation of LLMs in Essay Assessment
- [[zhang-races-consistent-essay-scoring-llms-2026]] — RACES: Reward-Aligned Consistent Essay Scoring with LLMs
- [[dollinger-equitable-assessment-ai-2026]] — Reimagining Success and Failure: Equitable Assessment in an Age of AI
- [[learning-behavior-background-advantage-ai-ed]] — Learning Behavior Accounts for Background-Related Advantage in AI-Assisted Education
- [[llm-formative-feedback-systematic-review-2026]] — LLM-Generated Formative Feedback in Education: A Systematic Review

## Citation

Rooein, D., Benedetto, L., & Hovy, D. (2026). [*The Role of Implicit and Explicit Demographic Signals in Large Language Model-based Student Assessment*](https://arxiv.org/abs/2609.16993). Findings of EMNLP 2026.