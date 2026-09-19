---
title: "The Role of Implicit and Explicit Demographic Signals in Large Language Model-based Student Assessment"
created: "2026-09-16T09:40:00-04:00"
updated: "2026-09-19T10:14:00-04:00"
type: article
technology: [educational-nlp, llm]
assessment: [assessment-validity, automated-essay-scoring, formative-assessment]
ethics: [bias-mitigation, equity-in-ai-education]
sources: ['raw/papers/demographic-signals-llm-student-assessment-2026.md']
confidence: high
research_method: [experiment, quantitative]
level: [higher ed, k 12]
audience: [assessment designers, instructors, researchers]
discipline: [learning sciences]
methods: [ai-ed-evaluation]
---

> **Synthesis:** Rooein, Benedetto and Hovy run a controlled counterfactual audit of demographic sensitivity in six instruction-tuned [[llm|LLMs]] across three educational tasks — [[automated-essay-scoring|Automated Essay Scoring]] (AES), [[formative-assessment|Formative Feedback]] (FF) and metalinguistic question answering (QA) — holding each task input fixed while varying only the demographic context. Explicit personas (25 attributes from the AI Gap dataset) and implicit signals (ten-prompt conversation histories) both move model behavior, producing 192,480 inference calls. Most models are comparatively stable under explicit conditioning in AES, where the largest shift is Llama-70B scoring +1.57 points above its own default under implicit conditioning (p < 0.001), but open-ended tasks show systematic differences in readability, length and sentiment. The headline implication is a split verdict for [[assessment]]: invariance is required in high-stakes scoring, some adaptation may be pedagogically legitimate in instruction, and current models cannot reliably separate task-relevant information from demographic cues — a direct threat to [[assessment-validity|validity]] and [[equity-in-ai-education|equity]].

## Research Questions and Experimental Design

The paper defines **demographic sensitivity** as systematic differences in model behavior attributable solely to variations in demographic context, with task-relevant inputs held constant. It distinguishes this from demographic *bias*: adaptation may be desirable in settings that require awareness of learner differences (for example, adjusting feedback for a learner's L1 or educational level), while the same sensitivity is a harm when it shifts scores or tone for reasons unrelated to quality. Two questions organize the study: RQ1) do implicit and explicit demographic cues systematically influence LLM behavior, and RQ2) how does the effect of demographic conditioning differ across educational tasks.

Three tasks were chosen to span distinct dimensions of model behavior: AES (holistic rubric-based scoring from 1 to 6, anchored to expert human ratings), FF (open-ended strengths-and-weaknesses feedback on the same essays), and metalinguistic QA (open-ended answers to English-language questions with no rubric to follow). Inputs come from Persuade 2.0 (human) for AES and FF and the ELQA corpus for QA, with 40 items randomly subsampled per task. Demographic context comes from the AI Gap dataset, which supplies real prompt histories and 25 attributes — core demographics such as age, gender, nationality, ethnicity, education and SES, alongside behavioral attributes such as hobbies, technology use and frequency of LLM usage. Filtering to users with the maximum 10-prompt history yields 490 profiles, of which 200 are randomly subsampled.

The design is explicitly a *controlled counterfactual sensitivity test*: the demographic contexts do not correspond to the actual authors of the essays or questions, and the authors state that reconstructing the true demographics of those authors is not the objective. Instead, the educational task input is held fixed while demographic context is varied. Because the (potential) signal from the educational task is constant across conditions, this isolates the effect of the demographic cue.

## Three Prompting Conditions and Six Models

Condition (I), **Model default**, gives the model only the task, establishing an unconditioned reference. Condition (II), **Explicit (Exp)**, states the demographic profile directly in the prompt as a persona description. Condition (III), **Implicit (Imp)**, prepends the user's 10 previous prompts — with model responses simulated once by GPT-5-nano and reused across all models — as conversational history, disclosing no attributes directly. Only the model's final response to the last user message is analyzed.

Six instruction-tuned models span proprietary and open-weight families and scales: GPT-5-mini, GPT-5-nano, Llama 3.3 70B, Llama 3.2 3B, Qwen3 4B and Qwen3 30B. Each model processes every task under all three conditions, giving 6 × 2 × [(40 × 200) × 2 + 40] = **192,480 inference calls**, about a third of them API-based for the proprietary models and the rest on locally deployed open-weight models via vLLM, all at temperature 0.0. Each model [[scaffolding|scaffolds]] demographic conditioning with [[prompt-engineering|prompting]] strategies rather than fine-tuning, so no model was trained on the demographic signal.

Metrics differ by task. For AES the Persuade 2.0 (human) expert score is the reference, evaluated through mean absolute error and shifts in the scoring distribution across demographic variants. For FF and QA, which have no references, the authors use linguistic metrics on the responses: Automated Readability Index (ARI) and Flesch Reading Ease (FRE), average Age of Acquisition (AoA) of response words, response length in words, BERTScore F1 against the Model default as a semantic-drift measure, and sentiment scored with an education-fine-tuned BERT classifier. Topic modeling of the prompt histories (all-MiniLM-L6-v2 embeddings, KMeans with k = 15) is used to check whether sentiment differences track topical [[writing-education|composition]] rather than demographic context alone.

## Statistical Framework

Three tests support the analysis: a regularised linear regression with an L1 (Lasso) penalty, with α set by 5-fold cross-validation and categorical effects compared to the global average; a two-sample Kolmogorov–Smirnov test for goodness of fit comparing full distributions between conditions or demographic levels; and, for AES only, a paired t-test with Bonferroni correction. Features with non-zero Lasso coefficients count as significant predictors, and effects are reported only when the absolute average regression coefficient exceeds 10% of the standard deviation of the metric concerned.

The independence problem is handled carefully. Because each of the 200 profiles appears 40 times (once per item), the 8,000 samples per condition are not independent, so instead of one test across all samples the authors run 40 separate tests — one per item — and require an attribute to be significant in at least N individual tests: N = 10 for Exp and N = 5 for Imp, the lower threshold reflecting the much subtler differences models must detect implicitly. A support threshold of 10 aggregates rare conditions into an "others" class. Bonferroni-corrected p = 0.05 is applied independently to each KS test, and the authors note the correction is conservative in the sense of Nakagawa (2004) — so the significant results that survive are likely to reflect real effects.

## Automated Essay Scoring: Explicit Stability, Implicit Inflation

The human mean score is 3.02 ± 1.00. Under Model default, Llama-3B significantly overscores relative to humans (+0.48, p < 0.01) and Llama-70B underscores (−0.52, p < 0.01). Under Exp, deviations from human ratings remain modest and mostly positive, with significant upward shifts for Llama-3B (+0.55, p < 0.01) and Qwen-4B (+0.29, p < 0.05) and a significant downward shift for Llama-70B (−0.60, p < 0.001). The GPT models are the most stable: neither Exp nor Imp personas produce significant shifts in their scores relative to human ratings.

The Imp condition produces the starkest effect in the study. Llama-70B inflates its scores by **+1.57 points relative to its own default** (p < 0.001), the largest deviation observed across all models and conditions. Regression attributes for that condition (all Llama-70B) show the model constantly overscoring on the basis of conversational content: users mentioning brainstorming (+0.26, Cnt = 24) or writing (+0.24, Cnt = 19) in their histories, "religion: Nothing" (+0.19), "hobbies: arts" (+0.18), interest in dialog technology (+0.17) and gender: Female (+0.12). Exp effects are small and concentrated in single models — Qwen-30B penalizes [[higher-ed|higher education]] levels (µb = −0.11, Cnt = 12), the largest Exp effect in scoring, and Qwen-4B shifts with LLM-use frequency (+0.04, Cnt = 15).

Distributional tests sharpen the contrast. The KS test finds significant score-distribution shifts **only under Exp, never under Imp**: for education, Llama-3B gives D(edu₂, edu₀) = 0.65 and Qwen-30B D(edu₂, edu₀) = 0.60, with effects growing across more distant ordinal levels. AES is therefore the task where explicit demographic sensitivity is at least structured and interpretable, while the implicit channel produces large but erratic shifts — an important nuance for anyone auditing [[automated-assessment|automated assessment]].

## Metalinguistic QA: Readability, Length and Sentiment

The QA task is inherently less constrained than rubric-anchored AES, and the authors anticipated larger demographic-driven variation, which the results bear out. For **readability**, ARI has σ = 1.06 and FRE behaves similarly. The Education attribute consistently yields significant positive ARI coefficients under Exp for Llama-70B, Llama-3B, Qwen-30B and GPT-mini — higher education draws *less* readable responses, indicating the models do partially adapt readability when the education level is stated explicitly. A similar but weaker effect appears for mum_education, ses and dad_education, for Llama-70B only. The same adaptation does not occur under Imp: there, users whose first language is English (GPT-mini, Llama-70B, both Qwen models), users identifying as Male (Llama-3B, GPT-nano, Qwen-4B) and Christians (Qwen-4B) receive slightly *less* readable responses — plausibly an artifact of majority-group attributes rather than genuine group contrasts. Coefficients for the Imp condition are consistently smaller, and regressing Imp effects on Exp effects gives a slope of µb = 0.56 for ARI and µb = 0.51 for FRE. KS results scale with the size of the gap: Llama-70B D(ses₄, ses₈) = 0.79 and D(ses₄, ses₇) = 0.63; Qwen-30B D(edu₀, edu₂) = 0.51, D(edu₀, edu₁) = 0.42, D(edu₁, edu₂) = 0.39. The GPT and Qwen models rarely change significantly, and when they do the coefficients are smaller than those of the two Llama models — and consistently smaller than σ_ARI.

**Response length** inverts the pattern: more significant results appear under Imp than Exp, with generally larger coefficients. Users who use laptops receive longer responses across four models (Imp: Qwen-4B +32.97, GPT-mini +21.20, Llama-3B +13.94, GPT-nano +12.08); a history mentioning writing draws longer responses too (+30.64, Qwen-30B), as does one mentioning exercise (+9.65, Llama-70B). Higher education also draws longer responses (potentially correlated with lower readability), with the same effect appearing more weakly for mum_education in Qwen-30B and Llama-70B. The least-squares slope comparing Imp to Exp effects for length is m = 1.20, the opposite direction from readability. KS test results for length are sparse, appearing only for Llama-70B under explicit conditioning and involving education (D = 0.54 ± 0.09 with support of 13 tasks; D = 0.46 ± 0.06 with support of 8).

**Sentiment** is where the paper finds its clearest equity concern in QA. Higher education yields responses with more positive sentiment for the two Llama models under Exp and, with a smaller coefficient, Qwen-30B under Imp. Since sentiment is scored on {0, 1, 2, 3, 4} with σ = 0.07 and there are four education levels, the coefficient implies an average difference of about **0.3 between the sentiment of the lowest and highest education level** — a shift of more than four standard deviations of the sentiment metric, and one the authors flag as especially problematic in the explicit case. Employment: Employed full time produces positive sentiment coefficients under both Exp (Llama-70B) and Imp (GPT-mini); SES does the same for Llama-70B explicitly and Llama-3B implicitly, both smaller under Imp. Several attributes reach |µb| ≥ σ_sentiment **only** under Imp — tech: Smartphone, religion: Christian, hobbies: Use social media — which the authors attribute to models picking up the topics of those users' prior histories, with effects not consistent across models.

## Topic Composition, BERTScore and Semantic Drift

To test whether the implicit channel is really transmitting demographics rather than just topic, the authors cluster 2,000 simulated prompts into 15 topics. The most populated are General Q&A (T0, n = 240), Career & Resume (T10, n = 185) and AI & Concept Explanation (T11, n = 179) — and the topic distributions are themselves demographically structured. Women's prompts skew to career and resume tasks (12.5%), men's to general Q&A (13.8%); younger users (25–34) show the highest share of AI/concept prompts while older users (45–54, 60+) cluster on account and admin tasks; lower SES (level 1) dominates factual lookup (24.0%) whereas the top SES level shows the strongest finance signal (23.3%); full-time employees favor career/resume, students creative writing, and self-employed users social-media content. Demographic and topical variation are thus entangled in the history channel, which is precisely why implicit effects are hard to attribute cleanly.

BERTScore F1 against the Model default captures semantic drift and again finds a majority-culture center of gravity. Beyond language: English, it is nationality: United States that shows positive coefficients under Exp for four models — evidence that the LLM default is English-centric and specifically US-centric, meaning the unconditioned baseline is itself a demographic position rather than a neutral one. Higher education also draws responses closer to the default when stated explicitly, as do lower age and higher SES. Two attributes flip sign between conditions: age has a negative coefficient under Exp for three models but a positive one under Imp for two, and SES is positive under Exp but negative under Imp for the same model (Llama-70B) in both cases — a concrete demonstration that explicit and implicit conditioning are not interchangeable manipulations of the same signal.

## Formative Feedback: Implicit Effects Dominate

The FF results reverse AES's pattern. Almost all significant attributes are driven by **Imp conditioning and are largely concentrated in Llama-70B**. For FRE, personas associated with writing use cases (µb = +3.67, Cnt = 6), hobbies such as museums or exercise (+1.93 to +1.72), religion: Christian (+1.41) and gender: Female (+1.09) all receive more readable feedback, with no corresponding Exp effect. ARI effects are sparse, with hobbies: museums or exercise reappearing for Llama-70B and GPT-nano. Response-length effects under Imp appear in Qwen-4B for behavioral attributes — brainstorming (+2.51), knowledge of dialog technology (+2.46) and digital content creation (+2.41) — and, unusually, for ethnicity: Black or African American (+1.35, Cnt = 5), the only core demographic attribute beyond technology-use patterns to emerge on this metric. Sentiment shows no Exp effects at all; under Imp, all effects are attributable exclusively to Llama-70B and span both behavioral attributes (usecase: Brainstorming +0.32, tech: laptop +0.24, usecase: Writing +0.19) and core demographics (religion: Nothing; gender: Female +0.14). The breadth of attributes confirms that Llama-70B's feedback sentiment is broadly susceptible to implicit persona context. For AoA, results are few: Qwen-4B is significant for tech: Laptop under Exp, and the largest FF distributional differences in the KS test involve father's occupation for Llama-3B (D = 0.79) and SES for Llama-70B (ses₂ vs ses₄: D = 0.78).

## What the fairness findings mean for evaluation practice
The authors' conclusion is task-dependent rather than uniform, and that is the paper's most usable contribution for [[ai-ed-evaluation|evaluation practice]]. In high-stakes evaluative settings such as scoring, demographic invariance is essential — a language learner's essay score should depend on essay quality, not on known or inferred demographics. In instructional contexts, some adaptation may be pedagogically appropriate, such as adjusting [[feedback]] readability to a learner's educational level, provided it does not reinforce stereotypes or unequal expectations. The difficulty is that the two channels are not separable in practice: the explicit effects that look like useful [[personalized-learning|personalization]] (readability tracking education level) coexist with explicit effects that look like bias, and the implicit channel — which no deployment can realistically suppress, since conversational history is always present — produces larger, less predictable shifts, including text that is systematically longer for laptop users and more positive in sentiment for higher-education users.

Three findings carry particular weight for [[equity-in-ai-education|equity]]. First, implicit effects are not smaller versions of explicit ones: readability effects shrink under Imp while length effects grow, and age and SES coefficients flip sign between conditions. Second, the study links lower-education responses to lower sentiment in QA, which is the kind of compounding disadvantage (less encouraging text for the learners who may need it most) that [[bias-mitigation|bias mitigation]] efforts target. Third, GPT-family models are the most stable in AES and rarely shift significantly in readability, while Llama-70B is the dominant site of implicit effects across tasks — so demographic sensitivity is a model property as much as a task property, and stability in a rubric-anchored task is no guarantee of stability in open-ended generation.

The limitations bound these claims honestly. Only 120 items (40 per task) and 200 profiles were used, for computational reasons; several attributes are heavily skewed toward majority groups (96% of profiles report English as their first language), which makes their coefficients uninterpretable as genuine group contrasts and caused the authors to exclude them; the prompt histories come from general LLM use rather than educational use, and the task authors' true demographics differ from the conditioning profiles, so essay-internal and history-internal signals may pull in opposite directions; and the English-only design precludes evaluating grammatical gender, which matters more in other languages. Bonferroni correction may hide real effects, so the reported significant results should be read as a lower bound on the phenomenon. These constraints frame the work as an audit instrument rather than a deployment verdict — precisely the role [[limitations-in-aied-research|limitations-aware]] sensitivity testing should play before [[generative-ai|generative AI]] is trusted with student assessment at scale.

## What this means for practice

- **Instructors.** Audit any LLM scorer for demographic sensitivity before trusting its output, because attaching a plausible conversational history raised Llama-70B's scores by +1.57 points above its own default (p < 0.001) with the essay itself unchanged.
- **Instructors.** Require invariance where scores count: run the same response under varied persona and history conditions and compare distributions before a model contributes to a grade, since stability varied by model and task rather than being a property of the pipeline.
- **Designers.** Treat conversational history as a live input channel that no deployment can suppress — it produced the largest and least predictable shifts, including inflated scores and longer responses for laptop users — and log the history that conditioned each generation so the effect can be reviewed.
- **Researchers.** Test explicit and implicit conditioning as separate manipulations rather than interchangeable ones: readability effects shrank under implicit conditioning while length effects grew, and age and SES coefficients flipped sign between the two.

## Limitations

- To limit computational cost the authors subsampled the source datasets to 120 items (40 per task) and 200 user profiles, drawn from 490 eligible AI Gap profiles, and state the work would benefit from larger datasets and additional educational tasks.
- Statistical tests were run separately per item (40 tests per condition) with Bonferroni correction that the authors describe as conservative, so the significant results reported should be read as a lower bound on the phenomenon.
- Several attributes are heavily skewed toward majority groups — 96% of profiles report English as their first language — which makes their coefficients uninterpretable as genuine group contrasts; the authors therefore excluded them.
- The implicit histories come from general LLM use rather than educational use, the true demographics of the essay and question authors differ from the conditioning profiles, and the English-only design makes grammatical gender effects impossible to evaluate.

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
