---
title: "Adaptivity Makes Feedback Effective: Evidence From AI-Generated Feedback on Children's Plans"
created: "2026-09-18T13:20:00-04:00"
updated: "2026-09-18T13:20:00-04:00"
type: article
assessment: [feedback, formative-assessment, ai-feedback-quality, automated-assessment]
technology: [generative-ai, llm]
pedagogy: [scaffolding, self-regulated-learning, metacognition]
methods: [rct, quantitative-research]
research_method: [experiment, quantitative, mixed methods]
level: [elementary, k 12]
audience: [educators, researchers, learning designers]
page_kind: [evaluation]
sources: ['raw/papers/ai-feedback-adaptivity-children-plans-2026.md']
confidence: high
---

> **Synthesis:** Does AI-generated feedback work because it adapts to the learner, or merely because it is immediate, fluent and encouraging? Sukjaitham, Schaaf, Brod and Breitwieser isolate that question by pitting [[llm|LLM]]-generated feedback against high-quality expert-written generic guidance that carries the same principles, structure, tone and length but never refers to the child's own plan. In a preregistered within-subjects experiment, 155 German fifth- and sixth-graders (M = 12.08 years) wrote the "if" component of six if-then plans and revised each one after support, each child receiving three adaptive and three generic trials in individually randomised order. Plan quality, scored 0 to 5 against five binary criteria, moved modestly with generic guidance (median 2 to 3) but jumped from a median of 2 to 5 with adaptive feedback, and the condition-by-time interaction was significant. Children also rated adaptive [[ai-feedback-quality|feedback quality]] as more helpful (r = .67) and more motivating (r = .74), and trial-level perceptions predicted the size of revision gains. The takeaway is that response-contingent [[feedback|adaptivity]] is not a decorative bonus layered on good [[formative-assessment|formative feedback]]: it is a separable, measurable ingredient of feedback effectiveness, and one worth protecting explicitly when [[generative-ai|generative AI]] is deployed at scale.

## Key Findings

1. **The comparison was deliberately fair, and [[adaptive-learning|adaptivity]] still won.** Both conditions were built from the same five principles of high-quality planning, matched on structure, tone, length and the inclusion of [[motivation|motivational]] phrases, and verified with a feedback quality rubric (Cohen's κ = .76 to 1.00 across five dimensions). Median plan quality rose from 2 to 3 under generic guidance (M = 2.14 to 3.14, SD = 1.94 to 1.70) and from 2 to 5 under [[generative-ai|LLM]]-generated adaptive feedback (M = 2.05 to 4.18, SD = 1.79 to 1.23).
2. **Adaptive feedback improved plan quality within children.** A Wilcoxon signed-rank test on pre- versus post-support plans in the adaptive condition was significant (V = 10,440, p < .001) with a large rank-based effect size (r = .86), supporting H1.
3. **Adaptive feedback improved plans more than generic guidance.** A cumulative link mixed model showed a significant condition × time interaction. Before support the conditions did not differ (estimate = 0.15, SE = 0.13, p = .241); after support plan quality was substantially higher in the adaptive condition (estimate = 1.68, SE = 0.14, p < .001), supporting H2.
4. **Children experienced the adaptive feedback as more useful.** Perceived helpfulness (means 1.41 vs 1.94 on a 0 to 3 scale) and perceived motivational impact (1.40 vs 2.00) both favoured adaptive feedback, with large rank-biserial effects (V = 6,819 and 6,229, both p < .001; r = .67 and r = .74), supporting H3.
5. **Perception tracked revision gains trial by trial.** In exploratory trial-level models, the interaction between time and perceived helpfulness (b = 0.51, p < .001) and between time and perceived motivation (b = 0.70, p < .001) was significant, with intraclass correlations of .339 and .317 justifying trial-level analysis.
6. **The target was a plan, not an essay.** Each trial presented a familiar scenario (drawing, programming, filming, dog-walking, watering plants, story writing) with a fixed goal; children authored only the "if" component, then revised it after support. Plan quality was scored 0 to 5 on five binary criteria, with inter-rater agreement of κ = .63 to .95.
7. **The sample was preregistered and adequately powered.** 155 children (51% female, M = 12.08 years, SD = 0.74) from fifth- and sixth-grade classes in central Germany took part in spring 2025, against a preregistered minimum of 90; 54.84% attended the Gymnasium track, slightly above the national average, and no participant met exclusion criteria.
8. **The field had not isolated adaptivity before.** The authors note that positive LLM feedback effects are routinely attributed to adaptation while designs compare LLM feedback with no feedback or with [[teacher-role|teacher]] feedback, leaving immediacy, linguistic quality and dialogic interactivity confounded with contingency; their design is among the first to separate response-contingent adaptation from those features.

## How the study was designed

The study is a preregistered within-subjects experiment with two factors: instructional condition (LLM-generated adaptive feedback versus non-contingent generic guidance) and time (pre-support versus post-support). Each child completed a practice trial and then six scenario-based planning trials, three under each condition, with condition assignment and scenario order randomised at the individual level. Because every child experienced both conditions, condition effects are estimated within person rather than between groups, which is what makes a modest sample sensitive enough to detect the added value of adaptivity. Children were not told that the two kinds of support differed, to reduce expectancy effects.

### Making feedback adaptive, and making the control equal

The adaptive condition was produced by GPT-4 through the OpenAI API inside a web-based feedback provider, driven by a structured multi-step [[prompt-engineering|prompt]] using chain-of-thought prompting. The prompt required the model to evaluate the child's own cue, name strengths, and propose improvement on the same five criteria used to score plans. The control was not a strawman: five prewritten generic guidance messages were authored by experts in implementation intentions and children's learning, each covering all five criteria (rotated so no child saw the same message twice), each carrying parallel motivational phrasing, and none referencing the child's actual plan. A purpose-built feedback quality rubric with five dimensions, specificity, suggestions, explanation, remarks and formulation, was applied as a manipulation check; both conditions met the predefined standard, so the decisive difference was response contingency alone.

### What the children did, and how plan quality was measured

Planning was chosen as the test case because it is a core [[self-regulated-learning|self-regulated learning]] strategy whose product is short, structured text, and because if-then implementation intentions come with explicit quality criteria. The rubric adapted from Schaaf and colleagues scores five binary properties of the situational cue: specificity, externality, salience, appropriateness and temporal precision. That yields a 0 to 5 ordinal score with diagnostic value, since each criterion names a distinct way a cue can fail. Children answered the two single-item usefulness questions (helpfulness and motivational impact) after each revision, and [[self-efficacy]] for planning was measured beforehand as an exploratory moderator.

## Results: adaptivity added value on top of good generic guidance

The preregistered hypotheses all held. Children's plans improved significantly after adaptive feedback (V = 10,440, p < .001, r = .86), the improvement was significantly larger than under matched generic guidance (post-support estimate = 1.68, SE = 0.14, p < .001, with no pre-support difference), and adaptive feedback was perceived as both more helpful (r = .67) and more motivating (r = .74). The descriptive pattern is the clearest statement of the practical size of the effect: median plan quality reached the top of the 0 to 5 scale only in the adaptive condition, and the standard deviation shrank rather than grew, so gains did not simply reflect a wider spread of responses. Generic guidance was not inert, moving the median from 2 to 3, which matters for interpretation: the study shows added value beyond well-designed non-contingent guidance rather than the difference between feedback and nothing. The exploratory trial-level models link these outcomes to perceptions, with within-person increases in perceived helpfulness and motivation predicting larger pre-to-post gains, while the preregistered test of [[self-efficacy]] as a moderator was not significant and is reported only in the supplement.

## Why adaptivity mattered: a mechanism, not a coating

The authors' proposed mechanism is perceptual and cognitive rather than stylistic. A generic message tells a child which principles matter but forces the child to work out which of those principles their own cue violates; adaptive feedback performs that diagnosis, linking evaluative information to the specific plan so the child does not have to infer relevance. That raises the perceived diagnostic value and credibility of the support, which in turn supports deeper engagement with the revision task. On this reading, perceptions of usefulness are not affective byproducts but part of the causal pathway, which is exactly what the trial-level interactions suggest. The paper is also careful about what adaptivity is not: it is not conversational interactivity, task-difficulty adjustment or a polished tone. The authors define it narrowly as response-contingent adaptation of feedback content to the learner's concrete response, and contrast this momentary alignment with older adaptivity based on stable learner traits such as [[prior-knowledge|prior knowledge]]. This framing connects the study to the taxonomy tradition of Plass and Pawar and to dynamic models of [[personalized-learning|personalisation]] in which adaptation operates on different timescales.

## What this means for formative assessment and scaffolding

For [[formative-assessment]], the result reframes a familiar implementation dilemma. Teachers' time constrains the timely, detailed, individual feedback that models such as Nicol and Macfarlane-Dick's describe, and the usual response is either generic whole-class guidance or nothing. This study suggests generic high-quality guidance is a genuine but limited substitute: it raises plan quality, yet leaves a large gap that response-contingent feedback closes. That gap is worth naming in cost terms, because a system that only automates delivery of static guidance will plateau at the generic median, while the value of an [[llm|LLM]] here comes precisely from contingent diagnosis of the child's own attempt. For [[scaffolding]], adaptivity supplies a concrete operationalisation of contingency, the property that distinguishes scaffolding from static support, on a task where the quality criteria are explicit and the response is one sentence long. It also places [[metacognition]] in the path: because children must evaluate and revise their own cue, the feedback is not transferring the answer but provoking self-evaluation, which is closer to the process-focused, self-regulatory function that [[ai-feedback-quality|feedback quality]] frameworks urge. Children aged around twelve in ordinary classrooms could act on this, which bears on [[k-12|elementary]] and lower-secondary deployment questions and on the design of [[automated-assessment|automated feedback]] that supports strategy use rather than marking answers.

## Limitations

Four constraints limit transfer. First, [[transfer-of-learning|transfer]] is unmeasured: the study captures short-term revision inside a highly structured experiment, leaving open whether adaptive feedback builds sustained planning skill, whether it works in less structured settings, and whether quality criteria must be predefined for it to bite. Second, the task was deliberately narrow, with one short cue to write and explicit rubric criteria, so more complex, ill-defined tasks may not show the same adaptivity advantage. Third, the sample is 155 children around age twelve in central Germany, over half on the Gymnasium track, so findings may not hold for other ages, tracks or cultures, and the authors flag the open question of learners underrepresented in [[pedagogical-llm-training|model training]] data. Fourth, two design features are entangled with the manipulation: prompts instructed the model to adopt a teacher-like role with academic language and an evaluative stance, so authoritative social cues may contribute to the effects alongside contingency itself, and adaptivity is operationalised only as response-contingent content adaptation, ignoring stable learner characteristics. The reliance on a single model version (GPT-4, chosen as the accessible reference model at the time) is a further dependency, since the authors tested other models only informally and model-specific behaviour is not part of the design.

## Connected Concepts

- [[ai-feedback-quality]] — the criteria set (specificity, suggestions, explanation, remarks, formulation) used to hold both conditions to equal quality
- [[automated-assessment]] — the design space of machine-generated evaluative feedback on learner work
- [[feedback]] — the parent construct, and the theoretical claim that feedback is inherently response-related
- [[formative-assessment]] — the practice this study tests at the point where teacher capacity usually fails
- [[generative-ai]] — the model class whose apparent advantage is here attributed to contingency rather than fluency
- [[llm]] — GPT-4 as the feedback generator, driven by a constrained chain-of-thought prompt
- [[metacognition]] — self-evaluation of one's own cue as the cognitive work the adaptive condition provokes
- [[motivation]] — perceived motivational impact, measured and modelled as a correlate of revision gains
- [[scaffolding]] — contingency as the defining feature the study operationalises and tests
- [[self-efficacy]] — measured as an exploratory moderator of plan quality improvement
- [[self-regulated-learning]] — planning with implementation intentions as the target strategy
- [[transfer-of-learning]] — the untested boundary between improving a plan and improving planning

## Connected Articles

- [[llm-formative-feedback-systematic-review-2026]] — systematic review of LLM-generated formative feedback across educational settings
- [[genai-feedback-design-multisite-experiment]] — comparative experiment on alternative GenAI feedback designs for argumentation
- [[genai-teacher-feedback-comparison]] — student perceptions of GenAI versus teacher feedback, usefulness and trust
- [[care-full-feedback-genai]] — the craft and relational dimensions of feedback practice under generative AI
- [[jin-genai-learning-analytics-feedback-literacy]] — learners' perceptions of AI feedback through a feedback literacy lens
- [[empowerment-ai-assisted-deep-revision-efl-writing-2026]] — psychological drivers of deep revision when AI feedback is received
- [[song-genai-learning-partner-srl-over-time-2026]] — GenAI as a self-regulated learning partner across a longer timescale
- [[bilingual-llm-lecture-companion-srl-2026]] — LLM mediation designed around self-regulated learning processes
- [[metacognitively-discordant-completion-genai-2026]] — how metacognitive judgement behaves during AI-supported completion
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — personalisation effects in elementary classrooms, the level this study samples

## Citation

Sukjaitham, S., Schaaf, M., Brod, G., & Breitwieser, J. (2026). [*Adaptivity makes feedback effective: Evidence from AI-generated feedback on children's plans*](https://doi.org/10.31234/osf.io/t2eac_v1). *PsyArXiv Preprints*. *PsyArXiv Preprints*.
