---
title: Automated Essay Scoring
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, llm, prompt-engineering]
assessment: [assessment, automated-assessment]
discipline: [writing education]
level: [higher ed, k 12]
confidence: high
reviewed_by: [editor]
---

> **Automated Essay Scoring (AES)** — the use of AI to evaluate and score written essays, spanning traditional statistical approaches, fine-tuned language models, and increasingly accessible [[llm]]-based prompting strategies. AES [[research-methods-aied|research]] in this knowledge base covers scoring accuracy, fairness and bias, psychometric validity, and practical [[accessibility]] for educators.

## Questions to Consider

- Automated Essay Scoring has moved from traditional statistical models to LLM-based prompting. A key tension on this page is between accuracy and accessibility — fine-tuned models score well but are impractical for most educators. Which would you prioritize in your own context, and why?
- A major finding is that simply including exemplar essays in the prompt brings LLM-human agreement close to human-human reliability — and a cheaper model can match a more expensive one. What does this suggest about how much of AES quality is the model versus how it's prompted?
- The page warns that AI scoring can systematically underestimate students from linguistically diverse backgrounds. Before reading, if you saw an AI give a lower score to a non-native speaker's essay, would you have assumed it was a 'bias problem' or just 'the score'? What would change how you respond?
- A self-referential approach assesses L2 writers by comparing their writing to their own prior work rather than to native-speaker norms. How does the choice of comparison baseline change what a score means — and which students might it treat more fairly?
- AES intersects with formative assessment when used for feedback rather than grading. When would a machine's feedback on an essay be genuinely useful to a developing writer, and when might it flatten the kinds of [[qualitative-research|qualitative]] feedback a human editor would give?

## Introduction

Automated Essay Scoring has a long history in educational technology, from early statistical models to modern LLM-based approaches that can evaluate essays holistically without large pre-scored datasets. The key tension in AES research is between accuracy and accessibility — while fine-tuned models achieve strong results, they are resource-intensive and impractical for most educators.

- **[[zhang-races-consistent-essay-scoring-llms-2026|Zhang et al.]]** RACES uses reward alignment to make LLM essay scoring both accurate and consistent, addressing a core AES validity concern.

## Key research themes

**Prompting-based AES** has emerged as the most accessible approach. The **[[choi-anchor-aes-prompting-2025|Choi et al. anchor paper study]]** shows that including exemplar essays in prompts brings LLM-human agreement close to human-human reliability, with GPT-4o mini achieving comparable results to GPT-4o at lower cost. This connects to broader [[prompt-engineering]] research and makes AES feasible for [[teacher-role|teacher]] use.

**Psychometric and trait-level scoring** moves beyond holistic scores. **[[psyscore-essay-scoring-zpd-feedback|PsyScore]]** provides a psychometrically-aware framework for trait-adaptive scoring with [[sociocultural-learning|ZPD]]-grounded feedback. **[[icle-plus-plus-essay-scoring|ICLE++]]** models fine-grained traits for holistic essay scoring, advancing the precision of automated evaluation.
- **Dimension-level trait scoring is bounded by the data behind each dimension.** [[automated-essay-scoring-critical-thinking-physics-2026|Firdausi et al. (2026)]] trained one classifier per dimension of Ennis's FRISCO critical-thinking framework on 106 Indonesian eleventh-grade physics essays (83 for training, 23 for testing, with three teacher raters agreeing at kappa 0.78–0.84 on every dimension). Agreement concentrated on expression rather than reasoning: quadratic weighted kappa reached 0.763 for Clarity and 0.728 for Situation but only 0.374 for Focus, 0.332 for Reason and 0.227 for Inference. The ordinal signal was manufactured rather than observed — synthetic level-1 essays (template generation, degradation to 20–40% of original length, keyword removal) plus LLM paraphrase lifted Focus by +0.346 kappa off a 0.028 baseline — and one configuration reached 0.652 accuracy with near-zero or negative kappa, so accuracy is not a usable selection criterion in ordinal AES.

**Bias and fairness** is a critical concern. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** found that AI scoring systematically underestimates students from linguistically diverse backgrounds, highlighting the need for [[bias-mitigation]] and [[equity-in-ai-education]] considerations in AES deployment.

**Disagreement with human graders is systematic, not random.** Out-of-the-box GPT and Llama models agreed only weakly with human scores (QWK ≈ 0.17–0.28 against 0.72 between two human raters) and biased in a quality-dependent direction — higher for short, underdeveloped essays and lower for long, strong ones carrying minor surface errors ([[llms-do-not-grade-essays-like-humans-2026|Mathew et al. (2026)]]).

**L2 and self-referential assessment** explores non-native writing contexts. **[[self-referential-l2-writing-llm-assessment|Profile-based L2 assessment]]** uses a self-referential approach comparing student writing to their own prior work rather than native-speaker norms.

**[[explainable-ai|Interpretability]] and feature weighting** opens the blackbox of how LLMs actually score. **[[llm-essay-scoring-feature-weighting-2026|Wang et al. (2026)]]** compared three LLMs (Qwen, GPT, Gemini) with human raters on non-native English essays across sixteen textual features, finding strong overall alignment but distinct weighting: LLMs emphasized grammatical accuracy, lexical sophistication, and syntactic complexity, while human raters prioritized content completeness and visual presentation. Critically, LLMs shifted their weighting by proficiency level — placing more weight on language errors for low-proficiency students and increasingly rewarding linguistic sophistication for high-proficiency students — whereas human raters maintained a more stable framework. **[[llm-essay-assessment-framework-reliability-2026|Liu, Ye, and Yan (2026)]]** extend this with a five-model evaluation framework (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, DeepSeek R1) on 60 long essays, using causal discovery to reveal distinct evaluative heuristics: most models prioritized lexical precision and fluency, while others emphasized syntactic complexity or cross-domain integration, and some showed inconsistency, score compression, or systematic underestimation. Together these studies establish that AES validity depends not only on overall agreement but on *how* models weight features and whether that weighting is stable across learner subgroups — directly informing [[assessment-validity]] and [[bias-mitigation]] auditing.

**Item-type boundaries and the limits of essay grading.** In a mixed-format university exam, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]] found ChatGPT-5's concordance with faculty was substantial-to-near-perfect on objective items (CCC 0.935–1.000) but dropped sharply on open-ended responses — near-zero to negative for short-answer and only 0.341–0.854 for essay questions — and a structured rubric did not consistently improve essay agreement. This bounds AES validity: model fluency helps on well-specified items but does not carry over to holistic essay scoring, where contextual interpretation of partial-credit responses still favors [[human-in-the-loop-ai|human judgment]].

**Issue-type boundaries in diagnostic agreement.** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao and Fan (2026)]] used DeepSeek-R1 to label specific writing issues before revision and compared its labels with teacher diagnosis across three cycles (mean F1 = 0.768, SD = 0.037). Agreement was highest on locally cued issues such as vocabulary word choice (F1 = 0.824) and lowest where the issue turns on a claim–evidence relation (source use and evidence, 0.579), so agreement in a diagnostic role depends on the issue type, not only on the model or the prompt.
**A skewed rubric distribution can make aggregate scoring metrics mislead.** Automated evaluation of a rubric dimension may be a classification task with a lopsided label distribution rather than a continuous score: marking reflection level 0-3 in 1,954 Hungarian student essays, 68% of essays sat at level 3 and 1.8% at level 0, and the best shallow configuration (SMOTEBoost with Qwen3 embeddings) reached an overall score of 0.7176 averaged over accuracy, F1 and ROC-AUC against 0.6872 for the best fine-tuned transformer — yet one RidgeClassifier configuration scored 0.7131 ROC-AUC at only 0.5162 accuracy, and class balancing lowered every metric (accuracy falling from 0.6672 without it to 0.6408 with it), so the authors read model choice as a question of which metric matters, with transformers earning their place through minority-class sensitivity rather than aggregate agreement ([[reflection-level-classification-hungarian-essays-2026|Csibi et al., 2026]]).

**High-stakes deployment evidence.** Field evidence from a real high-stakes deployment ([[human-in-the-loop-ai-scoring-national-assessment-2026|Uruguay's *Acredita EB*, 2024–2025; Curi et al.]]) shows prompt-engineered GPT-5 reaching 60–80% agreement with trained human raters across a 15-item analytic Spanish rubric, roughly five percentage points below human inter-rater agreement for most items and never more than 15 points below, with run-to-run consistency above 90% for almost all items. Vocabulary, syntax and spelling were the weakest dimensions, and the spelling item had to be handed to a deterministic grammar checker (LanguageTool, 68% accuracy, 100% consistency) because token-level orthography is where the model is least stable. Prompts built for one exam edition transferred to the next with only topic-specific edits, and the AI was systematically stricter than humans — under-grading rather than over-grading. For AES design, the lesson is that prompting-based scoring can approach human agreement even in a national exam, while its remaining weakness sits at the level of low-level language conventions rather than holistic [[writing-education|writing]] quality.

Token-level confidence, probability-weighted scoring, and ensembling each improved agreement on divergent-thinking scoring — the stacked techniques reached r = 0.846 (RMSE = 0.4848), and routing only the least confident 20% of responses to human review cut manual effort by roughly 80% ([[know-when-to-trust-ai-scoring-reliability-2026|Organisciak & Acar (2026)]]).

**The human [[benchmark]], and what it can and cannot license.** [[opraise-automated-marking-ai-assessment-2026|The OpRaise study]] is the strongest test in this knowledge base of whether LLM marking is ready for routine use, and its answer turns on the benchmark rather than the model. It compared three frontier systems (Claude Opus 4.6, GPT-5.4, Gemini 3 Flash), each under 27 prompt configurations crossing rubric specificity, calibration and scoring strategy, against the moderated marks of 761 authentic Psychology essays from 125 students at three UK [[higher-ed|universities]]. Human marks were adopted as ground truth because academic judgment is the socially accepted standard, and the authors note that human markers agree only moderately with each other — which bounds how strong AI–human agreement could reasonably be demanded to be. Against that benchmark, agreement on the UK degree band ranged from **35 to 65 percent by institution** (63 percent at Cambridge, 53 percent at Nottingham, 35 percent at Manchester Metropolitan) and did not transfer between them, so the report's central recommendation is local validation on an institution's own [[assessment]] materials. Two findings generalize beyond this corpus. First, reliability and agreement pull apart: every model re-marked nearly identically (ICC 1.00, 1.00, 0.97) and the models agreed with each other more closely than with humans (three-model ICC 0.91), yet all three agreed on the degree band for only **56 percent** of submissions — self-consistency is not validity. Second, AI marks compressed toward the middle of the scale (a compression score of 0.47–0.82, with the crossover where AI and human agree on average sitting in the upper 50s to low 60s), making AI least accurate precisely at the grade boundaries that separate Firsts from Upper Seconds and passes from fails. Vocabulary range, connectives, sentence complexity and text length predicted AI marks with small but significant effects while their relationship with human marks was broadly negligible — a direct demonstration of the [[ai-scoring-language-bias-physics|linguistic-bias]] concern, and one that no prompting strategy tested removed.


**AES as a training signal rather than a judge.** Scoring models are usually studied as evaluators, but SWIM uses one as a reward function: [[swim-student-writing-simulation-2026|Do, Kontak and Sachan (2026)]] freeze a multi-trait AES verifier and score it against generated student essays, turning the predicted trait profile into a dense per-essay reward (the mean trait-normalized distance from the target profile) for GRPO, deliberately not the Quadratic Weighted Kappa metric itself, because QWK is defined over a batch of target-prediction pairs and is not a per-sample signal, while exact-match rewards are too sparse in the multi-trait setting. The gains were re-checked against a DeBERTa scorer and an evaluation-only verifier the policy never trained against (0.598 versus 0.479 for SFT, and 0.647 versus 0.501), which is the check that separates genuine proficiency control from adaptation to the reward model. For AES research this is a second validity demand: a scorer used as a training target is being optimized against, so its own trait weighting and language biases propagate into everything the generator learns - the same feature-weighting asymmetries (grammatical accuracy, lexical sophistication and syntactic complexity weighted more heavily by models than by human raters) documented elsewhere on this page, now shaping training rather than only marks.
**Scoring and feedback want different methods, so a system should separate them.** [[wraft-automated-writing-evaluation-argumentative-2026|Labib et al. (2026)]] built one TOEFL argumentative-essay system as three modules — scoring, surface-level feedback on grammar and mechanics, and deep-level feedback on organization, coherence and argumentation — instead of a single model doing all three jobs, and found that what wins on one module loses on another: supervised fine-tuning of GPT-4o on 120 of a proprietary set of 480 benchmark-scored essays, tested on the remaining 360, reached a quadratic weighted kappa of 0.84 and RMSE of 0.44 on the 0-5 scale, ahead of the Wang and Gayed (2024) baseline (QWK 0.78, RMSE 0.57), yet the same fine-tuning produced unusable output for the feedback modules, where direct prompting of Claude 3.7 was what generated teacher-approved comments.

### Connections to related concepts

AES sits at the intersection of [[automated-assessment]], [[writing-education]], and [[generative-ai]]. It connects to [[formative-assessment]] when used for feedback rather than grading, to [[feedback|Feedback Loop]] when integrated into iterative writing processes, and to [[ai-literacy]] when educators understand and calibrate AES tools. The [[assessment-validity]] and [[educational-measurement]] concepts are essential for ensuring AES scores are meaningful and fair.
- **Agreement, error and what a hybrid scorer adds.** In a small open-ended marketing-writing corpus the LLM out-scored both deterministic rules and an equal-weight hybrid on absolute agreement with human raters (ICC(2,1) .435 versus .266 and .091), with the hybrid significantly worse than the LLM alone, while score dispersion and a single near-empty response showed how strongly such estimates depend on corpus composition ([[automated-scoring-marketing-posts-agreement-2026]]).

Open systems are part of this picture too: AiAWE scores argumentative essays with a LoRA-adapted Gemma-3-27B-it, reaching QWK 0.828 and agreement within ±0.5 of the human score on 90.56% of 360 evaluation essays — and reports that model scale did not reliably predict downstream performance under LoRA adaptation ([[aiawe-automated-writing-evaluation]]).

## Connected Concepts

- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[language-learning]]
- [[educational-measurement]]
- [[k-12]]
- [[prompt-engineering]]
- [[writing-education]]
- [[ai-literacy]]
- [[assessment-validity]]
## Connected Articles
- [[reflection-level-classification-hungarian-essays-2026]] — Automatic Reflection Level Classification in Hungarian Student Essays
- [[wraft-automated-writing-evaluation-argumentative-2026]] — WrAFT: a Modularized Automated Writing Evaluation System for Argumentative Essays
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Educational Innovation through Automated Essay Scoring: A Multidimensional Framework for Evaluating Critical Thinking in High School Physics Essays
- [[opraise-automated-marking-ai-assessment-2026]] — OpRaise report: AI marking of 761 university essays across three UK universities
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[zhang-races-consistent-essay-scoring-llms-2026]] — RACES: reward-aligned consistent essay scoring with LLMs
- [[ai-scoring-language-bias-physics]]
- [[choi-anchor-aes-prompting-2025]]
- [[icle-plus-plus-essay-scoring]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — From automated scoring to learning diagnosis: a mechanism study of AI-supported formative assessment in English writing
- [[llm-essay-scoring-feature-weighting-2026]] — Feature weighting patterns in LLM-based essay scoring (Wang et al. 2026)
- [[llm-essay-assessment-framework-reliability-2026]] — Framework for evaluating LLMs in essay assessment (Liu, Ye & Yan 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Know When to Trust: self-confidence, weighted probabilistic scoring and ensembling improve LLM scoring agreement
- [[swim-student-writing-simulation-2026]] — a frozen AES verifier used as a dense training reward for a writing generator
