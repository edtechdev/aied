---
title: "The Socratic trap: Benchmarking the capacity of large language models to generate strategic misconceptions in computer science education"
created: "2026-09-18T05:09:00-04:00"
updated: "2026-09-18T05:09:00-04:00"
type: article
foundations: [misconceptions, critical-thinking, ai-literacy]
pedagogy: [socratic-method, cognitive-psychology, prior-knowledge]
technology: [llm, generative-ai, educational-nlp, prompt-engineering]
assessment: [automated-question-generation, educational-measurement]
methods: [benchmark, ai-ed-evaluation]
stakeholders: [learners, educational-technology-developers]
ethics: [hallucination-risk, trust-calibration, guardrails]
research_method: [benchmark, quantitative]
discipline: [cs education]
level: [higher ed]
audience: [researchers, instructors, assessment designers]
sources: ['raw/papers/milicevic-socratic-trap-strategic-misconceptions-2026.md']
confidence: high
---

> **Synthesis:** Miličević and colleagues introduce SocraticTrap-CS, a publicly available benchmark that asks whether open-weight [[llm|language models]] can be made to produce what they call Socratic traps: explanations that are fluent, authoritative and pedagogically plausible while resting on a subtle, domain-specific error. A single structured prompt per concept elicited a correct explanation, an overt hallucination and a strategic [[misconceptions|misconception]] from seven models across 35 core CS concepts, and three domain experts annotated the resulting 722 complete triplets blind, reaching almost perfect agreement (Fleiss' κ = 0.9487). Six of the seven models produced an expert-confirmed strategic misconception for 91% or more of prompted concepts, rated moderately to highly persuasive (M = 3.71 on a five-point scale). The authors conclude that the risk to learners sits in [[hallucination-risk|plausible conceptual error]] rather than obvious factual failure, and that their rates measure a capability under adversarial prompting, not the prevalence of such errors in ordinary use.

## Key Findings

1. **When explicitly asked, almost every model could build a Socratic trap.** Of the 241 prompted strategic-misconception segments, 221 (91.7%) were confirmed as strategic by expert majority vote; 18 (7.5%) were judged actually correct and 2 (0.8%) overtly hallucinated. Gemma 2, Ministral 8B and Qwen3 235B reached a perfect 100% confirmation rate, followed by Llama 3.3 70B (97.1%, 34/35), DeepSeek-R1 70B (96.8%, 30/31) and Llama 4 Scout (91.4%, 32/35).
2. **One model broke the pattern, and the authors are not sure why.** Mistral 7B, the smallest model tested, reached only 57.1% (20/35). A one-way ANOVA showed significant differences between models (F(6, 234) = 14.97, p < 0.001, η² = 0.277), and Tukey HSD tests put Mistral 7B significantly below all six others (all p < 0.001, Cohen's d from 0.84 against Llama 4 Scout to 1.21 against Gemma 2, Ministral 8B and Qwen3 235B) while no other pair differed (all p > 0.74). It may be genuinely less prone to this failure or simply worse at the instruction-following task of constructing a subtle error while staying coherent; the design cannot separate the two.
3. **No CS subfield was safer than another.** Domain rates clustered narrowly: Algorithms 95.8%, Computer Networks 93.8%, Operating Systems 91.8%, Programming Languages and Paradigms 89.6% and Databases 87.5% (48 to 49 responses per domain, SD 19.98 to 33.07). The difference was not significant (F(4, 236) = 0.68, p = 0.608, η² = 0.011), and the model × domain interaction was also non-significant (F(24, 206) = 0.99, p = 0.475), so model rankings held across [[cs-education|subjects]]. The authors note that seven concepts per domain leaves this test underpowered.
4. **Conceptual errors dominated, and logical errors were absent.** Of the 221 confirmed misconceptions, 147 (66.5%) were conceptual and 74 (33.5%) factual, with no purely logical errors identified. DeepSeek-R1 70B was the only model where factual errors outnumbered conceptual ones (16 versus 14, 53.3%), while Ministral 8B showed the strongest conceptual bias (30 of 35, 85.7%); the association was significant (χ²(6) = 13.84, p = 0.031). Domain differences were larger: Programming Languages was 83.7% conceptual against Computer Networks at 46.7% (χ²(4) = 16.31, p = 0.003).
5. **Persuasiveness was moderate to high and strongly model-dependent.** On a five-point scale the corpus mean was M = 3.71 (SD 0.64, Mdn = 3.67, IQR [3.33, 4.33], range [2.3, 5.0]), and even the minimum rating exceeded the scale midpoint. Model identity explained 43% of the variance in persuasiveness (F(6, 214) = 26.90, p < 0.001, η² = 0.430), the largest effect in the study, with Qwen3 235B highest (M = 4.17) and Mistral 7B lowest (M = 2.95).
6. **Frequency and severity dissociate.** Qwen3 235B and Ministral 8B pair a perfect rate with the top two persuasiveness scores, the worst case for classroom deployment, while Llama 4 Scout generates traps often (91.4%) but less convincingly (M = 3.18), so risk ranking is not a simple capability ranking.

## How the benchmark was built

SocraticTrap-CS covers 35 concepts, seven per domain, representing the undergraduate curriculum under the ACM/IEEE Computer Science Curricula 2023 guidelines: Algorithms and Data Structures, Programming Languages and Paradigms, Databases, Computer Networks, and Operating Systems. Candidates were collected from syllabi at three European universities, then filtered for documented student misconceptions in the CS education literature and for authoritative, verifiable definitions in peer-reviewed sources. Named concepts include Dijkstra's algorithm, hash tables, lexical scope and closures, type inference, ACID properties, the CAP theorem, CIDR subnetting and deadlock conditions.

Generation used one [[prompt-engineering|prompt template]] per concept, submitted once to each model, requiring three demarcated outputs labelled [CORRECT], [OBVIOUS] and [STRATEGIC]: a technically accurate explanation pitched at a first-year student, an obviously wrong answer, and an authoritative but subtly inaccurate one. The template was piloted on five concepts with Mistral 7B and validated on three held-out concepts; no system prompts, few-shot examples or chain-of-thought instructions were used and generation parameters stayed at model defaults. Seven [[llm|open-weight models]] ran locally via Ollama, from 7B to 235B parameters and five organisations: Mistral 7B and Ministral 8B (Mistral AI), Gemma 2 27B (Google DeepMind), LLaMA 3.3 70B and LLaMA 4 Scout, a 16 × 17B mixture-of-experts (Meta AI), DeepSeek-R1 70B (DeepSeek AI) and Qwen3 235B (Alibaba DAMO). A script parsed 245 responses into 735 segments; DeepSeek-R1's internal reasoning tags defeated the parser on four concepts, leaving 31 rather than 35 triplets and 722 in total.

Three domain experts, all faculty with at least five years of CS research and teaching experience, annotated every segment against a three-class schema (correct, overt hallucination, strategic misconception) blind to the generating model, the concept and the prompted intent, after calibration on 30 pilot responses. Because annotators judged content rather than intent, prompted misconceptions that were accurate (18) or too obviously wrong (2) were reclassified, which the authors present as a strength: the corpus records what models produced, not what they were asked for. Agreement was near-perfect (Fleiss' κ = 0.9487, SE = 0.0101, z = 93.55, p < 0.001; 96.6% of triplets fully agreed, 3.4% partially, none in complete disagreement). Every confirmed misconception was tagged with an error type, following Chi's distinction between false beliefs, flawed mental models and incorrect reasoning, and rated for persuasiveness on a five-point scale.

## What the rates do and do not mean

The paper stresses that its central metric measures adversarial instruction-following, not disposition: because models were told to produce a misconception, the rate is a conservative upper bound on capability rather than a base rate for ordinary study sessions. The capacity still matters, since a student's poorly framed question can act as an adversarial prompt, and the paper's illustrative conceptual error has a model claim Dijkstra handles negative weights after first running Bellman-Ford to remove negative cycles.

Two further caveats travel with the numbers. Persuasiveness was rated by experts estimating what might convince a first-year student; no students were tested, so the study measures no deception, belief change or learning outcome. And the corpus contains only open-weight models chosen for reproducibility, so GPT-4o, Claude and Gemini were excluded and the findings do not transfer automatically to the proprietary assistants students actually use. The absence of logical errors carries two readings: models may be good at maintaining local coherence from whatever premises they hold, dressing a wrong conceptual foundation in valid reasoning, or the logical/conceptual boundary may be too soft to annotate reliably.

## Implications for teaching, assessment and AI literacy

For the authors, the dominance of conceptual errors reframes the [[ai-literacy]] problem. Verifying individual facts is insufficient when the error lies in the relationship between correct statements; students need conceptual verification strategies and mental-model validation, and instructors need to anticipate the fault lines their subject shares with documented human misconceptions. Work by Qian and Lehman on introductory programming misconceptions and by Sorva on mental models of program execution is invoked here: the traps LLMs generate track the same difficulties that already make these topics hard, so a model can entrench an error a student was already forming.

Because error types varied by domain while frequencies did not, the paper recommends domain-sensitive countermeasures rather than a universal policy. Programming-heavy courses, where 83.7% of traps were conceptual, call for reasoning-focused checks; networking courses, where 46.7% were conceptual and factual errors were the majority, call for cross-referencing against authoritative protocol specifications.

The assessment implication is that [[automated-question-generation]] and AI-authored explanations need evaluation on pedagogical trustworthiness, not correctness alone. A model accurate on most items but reliably persuasive when wrong is not safe in an [[intelligent-tutoring]] pipeline, and the three-part profile (misconception rate, mean persuasiveness, error type distribution) is offered as a template for that audit. The authors also point to the fluency paradox at the centre of the results: the qualities that make a model attractive as a tutor, coherence, polish and instruction-following, are the same qualities that make its errors convincing, so capability gains should not be assumed to improve educational reliability. The practical consequence is a need for automated detection of strategic misconceptions, ideally hybrid classifiers with retrieval or symbolic verification, and for [[guardrails]] that assume confident wrongness will occur.

## Limitations

The authors list four further constraints. The benchmark is confined to computer science, and disciplines with different epistemic structures may show different misconception dynamics. All annotators came from one institutional context, which may bias category boundaries despite the high agreement. Model selection was limited to open weights for reproducibility. And DeepSeek-R1's reasoning tags produced parsing failures that cost four concepts. They propose extending the corpus to other STEM and non-STEM fields, testing novice versus expert susceptibility, measuring conceptual change after repeated exposure, and building real-time detectors.

## Connected Concepts

- [[misconceptions]] — the paper extends the misconception literature from human learners to model-generated errors
- [[hallucination-risk]] — Socratic traps are framed as a subtler category than overt hallucination
- [[llm]] — seven open-weight models benchmarked on their capacity to produce pedagogically plausible errors
- [[generative-ai]] — generative fluency is the mechanism that makes confident wrongness persuasive
- [[cs-education]] — all 35 concepts come from the undergraduate CS curriculum
- [[benchmark]] — SocraticTrap-CS is a publicly released annotated benchmark corpus
- [[educational-nlp]] — expert annotation with Fleiss' kappa establishes a new annotated text category
- [[socratic-method]] — the trap is named for the risk that apparently tutorial questioning misleads
- [[intelligent-tutoring]] — the deployment setting the authors warn about
- [[automated-question-generation]] — AI-authored explanations and items need pedagogical trustworthiness checks
- [[critical-thinking]] — conceptual verification beyond fact-checking is the proposed learner skill
- [[cognitive-diagnosis]] — error-type labels give diagnostic information about the nature of each failure
- [[prior-knowledge]] — novice learners lack the domain knowledge to detect subtle conceptual errors
- [[trust-calibration]] — fluency and authority raise the perceived credibility of subtly wrong explanations

## Connected Articles

- [[correct-answer-trap-misconceptions]] — Related work on how plausible wrong answers arise and persist
- [[correct-answer-trap-ai-tutor]] — The same trap pattern in AI tutoring practice
- [[llm-misconception-difficulty-easy-trap]] — LLMs and easy-to-overlook misconception items
- [[llm-student-misconception-identification]] — Automatically detecting misconceptions in learner work
- [[student-misconceptions-conditionals-loops-taxonomy]] — Catalogued human misconceptions in introductory programming
- [[socratic-ai-physics-tutor-taxonomy-2026]] — A taxonomy of tutoring moves by a Socratic AI tutor in physics
- [[elbench-education-llm-benchmark-2026]] — A related benchmark for evaluating LLMs on educational tasks
- [[citation-errors-hallucinations-computing-education-2026]] — Fabricated references and hallucinated content in computing education

## Citation

Miličević, M., Rovis, M., Karlović, R., Baressi Šegota, S., Mrzljak, V., Lorencin, I., & Etinger, D. (2026). [*The Socratic trap: Benchmarking the capacity of large language models to generate strategic misconceptions in computer science education*](https://doi.org/10.3390/info17070706). *Information*, 17(7), 706.
