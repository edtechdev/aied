---
title: "SWIM: Student Writing Simulation via Proficiency-Conditioned Generation"
created: "2026-09-19T21:07:40-04:00"
updated: "2026-09-19T22:08:08-04:00"
type: article
technology: [llm, generative-ai, simulating-students, student-modeling, pedagogical-llm-training, reinforcement-learning]
assessment: [automated-essay-scoring, assessment]
methods: [quantitative-research]
research_method: [experiment]
discipline: [writing education]
level: [k 12]
audience: [researchers, software developers]
page_kind: [evaluation]
sources: ['raw/papers/2609.03215.md']
confidence: high
---

> **Synthesis:** Do, Kontak and Sachan ask whether an [[llm]] can be made to write like a student at a chosen proficiency level. They call the problem Student Writing [[simulation]] (SWIM) and formalize it as proficiency-conditioned essay generation. Given a writing prompt and a target trait-score profile from the ASAP/ASAP++ [[automated-essay-scoring]] corpus, a generator must produce an essay matching that profile. The paper compares three families of methods under one shared interface: rubric-grounded [[prompt-engineering]] (contrastive trait prompting and score-level rubric lookup, with five-shot variants), supervised fine-tuning on real score-essay pairs, and [[reinforcement-learning]] with a Proficiency Alignment Reward (PAR) from a frozen multi-trait AES verifier. Fidelity is measured as Quadratic Weighted Kappa (QWK) between the target profile and the AES-predicted profile of the generated essay.
> The headline result is a supervision hierarchy. Prompting gives limited and uneven control: Claude Sonnet-4.6 reaches 0.577 average trait QWK and GPT-5.4 only 0.422, while open-weight Qwen models sit near zero. SFT reaches 0.474 and 0.428 on Qwen2.5-7B and Qwen3-4B, and GRPO with PAR pushes those to 0.618 and 0.674.
> The residual gap is behavioral realism. Prompting over-predicts proficiency and generates over-long essays, and no method reproduces authentic low-proficiency spelling, casing and grammar. For [[writing-education]], the study argues that faithful [[simulating-students]] of writers needs explicit supervision plus a reward aimed at the whole trait profile.

## Key Findings

1. **Prompting alone gives limited and unequal proficiency control.** The best prompting configuration reaches 0.577 average trait-level QWK for Claude Sonnet-4.6 (SRLP with five-shot examples) and 0.422 for GPT-5.4, while Qwen2.5-7B-Instruct stays near zero under prompting (0.153 at best, SRLP + 5-shot; 0.007 naive).
2. **Score-specific rubric lookup tends to beat coarse trait contrasts.** Across both proprietary models, SRLP generally outperformed contrastive trait prompting, and adding five-shot exemplar essays improved both strategies consistently.
3. **Prompting steers what students write but not how they write.** Across all eight prompting configurations, content-oriented traits aligned far better than form-oriented ones; Claude's best setting scored 0.695 on content-oriented traits against 0.458 on form-oriented traits, with Conventions the weakest trait in every setting.
4. **SFT from real score-essay pairs lifts alignment far beyond prompting on the same backbone.** On the shared comparison fold, Qwen2.5-7B-Instruct SFT scored 0.501 average trait QWK versus 0.036 for CTP + 5-shot and 0.153 for SRLP + 5-shot; across five folds it reached 0.474±0.023 while Qwen3-4B reached 0.428±0.062.
5. **GRPO with PAR improves every trait and every prompt.** Average trait-level QWK rose to 0.618±0.005 for Qwen2.5-7B-Instruct and 0.674±0.060 for Qwen3-4B, gains of +0.144 and +0.246 over SFT, with prompt-level gains of +0.131 and +0.243.
6. **The gains hold under independent evaluators.** Re-scoring with a DeBERTa-based scorer gave 0.598 for GRPO against 0.479 for SFT, and an evaluation-only verifier gave 0.647 against 0.501, closely tracking the original 0.618 against 0.474.
7. **Prompting collapses proficiency variation toward the top.** Zero-shot generations had a mean normalized Overall score of 0.74 with 25% at the maximum, against 0.58 for real students, 0.57 for SFT and 0.53 for GRPO.
8. **Trained models recover realistic essay length without length supervision.** Median length was 304 words under prompting, close to human 167 words for SFT (158) and GRPO (141).
9. **Low-proficiency linguistic form is not reproduced.** For low targets, grammar errors per 100 words were 1.04 in real essays but 0.16 for SFT and 0.00 for GRPO, while Claude CTP overshot on casing (12.57 versus 0.65 real) and spelling (6.31 versus 4.22).
10. **Prompt 8 is the exception where prompting wins.** With only 723 essays and roughly 650-word responses, GRPO trained models fell below Claude Sonnet with SRLP, and no method showed memorization (0.00% of generations exceeded ROUGE-L 0.7 against training essays).

## How the task and methods are defined

SWIM takes a writing prompt plus a target proficiency profile and asks a generator to produce an essay that both addresses the prompt and displays writing behavior consistent with that profile. The profile is a vector of rubric traits, such as Overall, Content, Organization, Word Choice, Sentence Fluency, Conventions, Prompt Adherence, Language and Narrativity, each with a prompt-specific integer range. The same textual input format is used everywhere: a system instruction to simulate a student, a trait-score block, the task prompt and source text, and a constraint to emit essay text without mentioning scores or rubric language. Because the interface is shared, the three methods differ only in how the generator is obtained. Alignment is checked by a frozen lightweight multi-trait AES verifier (ArTS, mean trait QWK 0.710 and prompt-level QWK 0.722 in these experiments) that maps an essay and prompt to predicted trait scores. Reported QWK is computed between the target profile and that AES-predicted profile, and the verifier is never updated, so improvements reflect the generator rather than co-adaptation with its evaluator.

## What the results show

The results describe how much supervision proficiency control requires. Rubric grounding helps at the margin, but prompting remains a weak instrument even for strong proprietary models: the best proprietary setting reaches 0.577 average trait QWK, and an open-weight 7B model under CTP + 5-shot is functionally unaligned at 0.036. Direct supervision from authentic score-essay pairs moves the same backbone to 0.501 on that fold and 0.474 across five folds. Reward optimization then adds a step change, with GRPO + PAR reaching 0.618 and 0.674 and improving all nine traits rather than a favored few. The paper attributes this breadth to PAR scoring agreement with the entire target profile, which forces the policy to coordinate several writing dimensions at once. Two corpus-level distributions support the reading that training changes behavior rather than just scores: SFT (0.57) and GRPO (0.53) match the human overall-score distribution (0.58) where prompting concentrates at 0.74, and trained essay lengths (158 and 141 words) land near the human median of 167.

## Where simulation still fails

Profile alignment and behavioral realism come apart on the lower end of the proficiency range. Under low-proficiency targets, Claude CTP reproduces roughly the right aggregate grammar error rate but simulates weakness through excessive casing and spelling errors and much simpler syntax, while SFT and GRPO recover syntactic structure yet generate unrealistically clean surface text: 0.16 (SFT) and 0.00 (GRPO) grammar errors per 100 words against 1.04 for real essays. The gap narrows at high proficiency, with SFT's grammar gap falling from 84% below the real rate at low targets to 5% below it at high targets. The authors connect this to the fluency prior of instruction-tuned models, which are optimized to be grammatical and well formed, making authentic disfluency hard to imitate. A second failure is prompt-level: Prompt 8, the longest responses with the smallest training set (723 essays, about 650 words), is the one setting where prompting beats both trained models, pointing to data scarcity and long-form generation as bottlenecks. The paper also warns that score alignment is not behavioral realism, since the AES proxy cannot fully replace expert judgment.

## Method

The work is an experiment on ASAP/ASAP++, a trait-score-annotated corpus of eight writing prompts covering argumentative, narrative and source-dependent tasks, with prompt sizes from 723 to 1,805 essays and prompts tied to prompt-specific traits and score ranges. The Style and Voice traits are excluded because each appears under a single prompt. SFT and GRPO follow a five-fold cross-validation protocol, while prompting methods are reported on a single fold because of the cost of long-form generation. SFT fine-tunes Qwen2.5-7B-Instruct and Qwen3-4B with QLoRA adapters on real score-essay pairs, and GRPO starts from the SFT checkpoint, sampling four essays per prompt, group-normalizing PAR advantages and updating the policy with a clipped PPO objective; the SFT checkpoint serves as the KL reference. PAR is a dense per-sample score, the mean trait-normalized closeness between target and predicted trait values, chosen because exact-match rewards are sparse across traits and QWK is defined only over batches. All experiments run on a single NVIDIA H100, about one hour per SFT epoch and eight hours per GRPO epoch.

## What this means for practice

- **Model developers.** Treat proficiency control as a training problem, not a prompting trick: fine-tune on authentic score-essay pairs and add a group-relative reward over the whole trait profile, since prompting left open-weight models near zero.
- **Assessment designers and researchers.** Verify simulator gains on evaluators that never entered policy optimization, as this paper does with a DeBERTa scorer and an evaluation-only verifier, because reward-derived improvements can otherwise be adaptation to the reward model.
- **Educators using simulated writers.** Expect simulated low-proficiency students to look like weak content with clean surface form, and do not use such essays to teach error diagnosis or to calibrate feedback on spelling and grammar.
- **Administrators and developers planning corpus use.** Recognize that small, long-form prompts are where trained simulators lose to prompting, so pair any proficiency simulator with coverage checks across prompts rather than a single average.

## Limitations

- Fidelity is defined by a frozen AES verifier and QWK against AES-predicted traits; the paper states that this proxy cannot replace [[human-in-the-loop-ai|human judgment]] of whether generated essays authentically resemble student writing.
- The dataset covers eight English ASAP/ASAP++ prompts with limited proficiency distributions, so generalization to other languages, age groups, genres and rubric frameworks is untested.
- Prompting methods are evaluated on a single fold while SFT and GRPO use five, so prompting and training numbers are not measured on identical evaluation samples; the independent-evaluator check is run on one fold only, and the evaluation-only verifier is itself fit to the evaluation data, so that result is read through the relative SFT to GRPO gain.
- Proficiency is modeled as a static trait profile, and both backbones are fine-tuned through QLoRA adapters, so evolving knowledge, [[misconceptions]], motivation and writing strategies over time are outside the scope and the conclusions about the supervision hierarchy rest on two small open-weight models.

## Connected Concepts
- [[simulating-students]] — the task in question, extended here from short responses to full essays
- [[automated-essay-scoring]] — both the evaluation metric and the reward source
- [[writing-education]] — the domain and the construct being simulated
- [[pedagogical-llm-training]] — SFT and reward-based training for education-specific behavior
- [[student-modeling]] — trait profiles as the modeled student state
- [[prompt-engineering]] — rubric-grounded prompting baselines
- [[reinforcement-learning]] — GRPO with the Proficiency Alignment Reward
- [[llm]] — the generators being conditioned
- [[generative-ai]] — the technology class under study
- [[assessment]] — rubric traits and score ranges define the target
- [[quantitative-research]] — controlled comparison with five-fold cross-validation
- [[k-12]] — ASAP essays come from grade 7 to 10 writers

## Connected Articles

- [[misconception-acquisition-dynamics-llms-2026]] — the same supervision question for mathematics: what training data a simulator needs to hold an error
- [[llm-student-simulation-misconception-faithfulness]] — simulators abandon assigned errors under correction, a related realism failure
- [[simulating-students-llm-review-2026]] — the wider review of LLM-based student simulation
- [[valid-student-simulation-llm-2026]] — validity conditions that any simulator must satisfy
- [[studentsim-llm-student-simulators]] — general-purpose student simulators for tutoring interaction
- [[simulating-students-diverse-cognitive-levels-2025]] — conditioning simulators on learner level rather than writing traits
- [[inside-llm-student-simulator-reasoning-2026]] — what happens inside a simulator when it plays a learner
- [[history-aware-student-simulation]] — simulating a learner state that changes over time
- [[llms-do-not-grade-essays-like-humans-2026]] — the AES-side reliability problem that constrains this evaluation loop
- [[gpt-human-rater-essay-assessment-2026]] — human and model rater agreement on essays
- [[llm-essay-assessment-framework-reliability-2026]] — reliability framing for LLM essay scoring
- [[pecuchova-automated-grading-open-ended-genai-2026]] — automated grading of open-ended student work

## Citation

Do, H., Kontak, J., & Sachan, M. (2026). [SWIM: Student Writing Simulation via Proficiency-Conditioned Generation](https://arxiv.org/abs/2609.03215). *Findings of the Association for Computational Linguistics: EMNLP 2026*.
