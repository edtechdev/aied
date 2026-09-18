---
title: "Rubric-Guided Generative AI for Scalable Creativity Assessment in Educational Games"
created: "2026-09-18T14:00:00-04:00"
updated: "2026-09-18T14:00:00-04:00"
type: article
assessment: [assessment, automated-assessment, ai-feedback-quality, educational-measurement]
pedagogy: [creativity, game-based-learning, project-based-learning]
technology: [generative-ai, llm, multimodal]
methods: [quantitative-research]
research_method: [instrument development, quantitative, benchmark]
discipline: [science education]
level: [k 12, secondary]
audience: [researchers, assessment designers, learning designers, educators]
page_kind: [evaluation]
sources: ['raw/papers/rubric-guided-genai-creativity-assessment-games-2026.md']
confidence: high
---

> **Synthesis:** Scoring [[creativity]] at scale is difficult for a structural reason: the construct is defined as producing something both novel and appropriate, and the established instruments either decontextualise it into divergent-thinking tests or price themselves out of routine use, since the Consensual Assessment Technique needs several expert raters per artefact. Rahimi, Li, Esmaeiligoujar and Ercan ask whether a rubric-guided [[llm|large language model]] can close that gap inside a real game. GPT-4o rated 421 student-designed levels from [[physics-education|Physics]] Playground against the same seven-dimension rubric two educational experts had used, under three prompt conditions that varied only the input modality. Given both the level image and its structured JSON data, the model reached r = .74 against the averaged human scores, compared with only r = .61 when the rubric was withheld; a single call was about as consistent as averaging three independent runs (ρ = .74 versus .71, RMSE 1.9 versus 2.1). The takeaway is that the leverage sits in [[prompt-engineering|rubric design]] and multimodal input rather than model choice: a validated rubric turns hundreds of scored game levels into a scalable, unobtrusive measure of student creativity, while dropping the image specifically destroys the model's grip on aesthetics and humour.

## Key Findings

1. **A rubric-guided GPT-4o tracked expert judgements on 421 authentic artefacts.** In [[game-based-learning|Physics Playground]], a 2D game where players build physics machines to guide a ball to a balloon, college students used the built-in level editor to design levels and then selected their most creative designs; each was saved as both an image and a structured JSON file. GPT-4o scored every level against the same seven-item rubric as the human raters, reaching a total-score correlation of r = .74 (95% CI [.69, .79]).
2. **The rubric, not the model, did most of the work.** Prompting with the validated creativity rubric produced strong agreement (r = .74); scores generated without it showed only moderate agreement (r = .61). Rubric text and output format were held constant across conditions, so the comparison isolates the rubric's contribution to [[assessment-validity|validity]].
3. **Multimodal input was the strongest condition.** Supplying both the level image and its structured JSON data produced the closest correspondence with human ratings. Removing the image reduced the model's ability to detect nuanced creative details such as aesthetics and humour, indicating that creativity in visual-spatial artefacts cannot be captured through structured data alone.
4. **Agreement was very uneven across rubric dimensions.** Object elaboration was strongest (.73 [.68, .78]), followed by line elaboration and aesthetics (.64 each) and humour and surprise (.57). The weakest dimensions were title creativity (.35 [.26, .44]) and solvability, where correlations were low and sometimes non-significant (.24, .35, and −.01 in the three conditions; the last marked p > .05).
5. **A single call was about as reliable as averaging three.** Comparing one model run with the average of three independent runs gave ρ = .74 versus .71 with RMSE 1.9 versus 2.1 on the rubric total, so repeated sampling bought little over a single [[automated-assessment|automated]] pass.
6. **Larger architectures scored better.** Comparing related models on the same task gave GPT-4o > GPT-4o-mini > GPT-4.1-nano, with overall correlations of approximately .71, .62 and .41 respectively — the smallest model tracked human judgement only weakly.
7. **Human ground truth was an averaged expert judgement.** Two educational experts independently rated each level on a 0–2 scale per dimension, for a maximum total of 13; their per-dimension scores were averaged to form the reference standard against which the model was compared.

## The rubric and how it makes creativity scoreable

The instrument is a seven-item rubric adapted from Rahimi and Shute (2021), covering [[creativity|originality]], elaboration of lines and objects, aesthetics, humour and surprise, and title creativity, each rated 0–2 for a maximum total of 13. The dimensions map onto the definition of creativity the paper adopts in its introduction — ideas or artefacts that are both novel and appropriate, that is, original, functional and valuable — with solvability standing in for appropriateness (a level must be playable), elaboration for the investment of effort that distinguishes a designed artefact from a doodle, and aesthetics, humour and title creativity for the expressive layer that a [[science-education|science]] [[teacher-role|teacher]] might otherwise overlook.

That operationalisation is what makes the task [[llm|LLM]]-legible. Because the rubric fixes the construct, the dimensions and the scale, the model is not asked to invent a standard of creative quality; it is asked to apply an existing one and emit a structured JSON object with dimension-level and total scores. The paper positions this as the most cost-effective form of [[generative-ai|AI]]-supported assessment for educational contexts, against fine-tuning or bespoke [[pedagogical-llm-training|model training]], and it is also what allows a machine judgement to be argued with: a score can be traced to a named dimension and the rubric text that produced it.

## How the study was run

The dataset is 421 levels designed by college students in a previous study (Rahimi, 2020) after a brief tutorial, with up to two hours to build playable levels and then a self-selection step where participants nominated their most creative designs. Each level was exported as an image plus a JSON file carrying full structural data, which is what made modality comparisons possible. [[project-based-learning|Level design]] in an open-ended environment is the point: the artefacts are authentic student productions rather than responses to a standardised test item, which addresses the ecological-validity complaint against instruments such as the Torrance Tests of Creative Thinking.

Validity was assessed with Spearman's rank-order correlation (ρ) between model and human scores, with confidence intervals obtained by bootstrapping (1,000 resamples), and all correlations reported as significant at p < .001 after FDR correction except where marked otherwise. [[educational-measurement|Reliability]] was probed by comparing a single run with the average of three independent runs, and the three prompting conditions differed only in input modality while rubric text and output format stayed fixed — a design that isolates the information available to the model from the instructions it was given. This is a [[quantitative-research|quantitative]] instrument-validation study rather than an experiment with a control group; no student learning outcome was measured, and the criterion is human rating agreement rather than an external standard of creative quality.

## Where the model agreed and where it diverged

The headline is that a general-purpose model, given a rubric and the right inputs, can approximate expert ranking of creative quality across hundreds of human-generated levels. The dimension-level picture is more instructive than the total. Structural, visually inspectable properties — object elaboration, line elaboration, aesthetics — were recovered well, and the paper reads the multimodal result as evidence that visual context is indispensable: the model's performance declined when images were excluded, and specifically lost the nuance in aesthetics and humour, dimensions that have little representation in a JSON description of a level.

Where the model diverged is equally clear. Agreement was weakest on title creativity (.35 across all three conditions, remarkably stable at that low level) and on solvability, which produced correlations of .24, .35 and −.01, the last not statistically significant. Both dimensions arguably sit outside what an image-plus-structure representation carries: solvability depends on whether a physics machine actually works when run, not on how it looks, and title creativity is a verbal and cultural judgement. The paper does not report whether the model was systematically generous or harsh relative to humans — no level-bias analysis is presented — so the evidence supports rank agreement, not calibrated absolute scores; the residual spread, an RMSE of 1.9 to 2.1 points on a 13-point scale, is the nearest available indication of how far individual scores could sit from the expert value.

## Implications: the rubric is the lever, and correlation is not agreement

For assessment designers the transferable finding is that rubric-guided prompting, not model selection, produced the validity gain, and that the model's ceiling on any dimension is set by whether that dimension is visible in the supplied evidence. A [[multimodal]] pipeline is therefore a design requirement for visual-spatial artefacts, not an optimisation. The reliability result — one call performing close to the average of three — matters for cost: repeated sampling is largely unnecessary, which keeps [[automated-assessment|automated scoring]] cheap enough to run over an entire cohort's worth of student work.

The paper argues such raters can function as scalable, unobtrusive assessors that sit inside an authentic [[game-based-learning|game]] activity rather than interrupting it, and connects to the broader programme of evaluating creative products with [[educational-nlp|language models]] where human raters would be prohibitively expensive. The caution is that a strong correlation is evidence for rank ordering, not for replacing the expert. Whether a model that ranks levels correctly should also be trusted to assign a grade, give [[feedback]], or feed a [[human-in-the-loop-ai|human-reviewed]] report is a separate question that agreement statistics do not settle, and the low correlations on solvability and title creativity show that the model's coverage of a rubric is always partial.

## Limitations

The study is bounded by its context: one 2D physics game, one level-editor task, and a dataset of 421 levels drawn from an earlier study of college students, so transferability to other domains, artefact types and age groups is untested, and the paper's own framing is physics and [[science-education|science]] education's game contexts rather than a general claim. The results are tied to GPT-4o and its specific version: prompting behaviour and multimodal handling change across releases, and the model-comparison result shows that performance is not stable across a family, so the .74 figure should be read as a snapshot rather than a property of LLM-based scoring. Correlation is not agreement, and no score-level bias, calibration or absolute-error analysis is reported, so a model could rank levels in human order while displacing every score. The human criterion is two raters averaged, so their own variance is folded into the ground truth, and small differences in rater interpretation of dimensions such as humour or title creativity would cap what any model can achieve. Finally, dimension-level correlations are reported without per-dimension reliability for the human raters, and no [[qualitative-research|qualitative]] error analysis examines the levels where model and experts diverged most. These are ordinary [[limitations-in-aied-research|limitations of AIED research]] on measurement: the evidence supports rubric-guided LLMs as a screening and ranking aid at scale, and leaves their standing as a substitute for expert judgement open.

## Connected Concepts

- [[creativity]] — the construct under measurement, operationalised as novelty plus appropriateness in a designed artefact
- [[automated-assessment]] — rubric-guided LLM scoring of student products as a scalable alternative to expert panels
- [[assessment-validity]] — Spearman correlations with bootstrapped confidence intervals as the validity criterion
- [[educational-measurement]] — averaged expert ratings as ground truth, run-to-run reliability and RMSE
- [[game-based-learning]] — Physics Playground's level editor as the authentic, unobtrusive assessment context
- [[multimodal]] — image plus structured JSON as the condition that best matched human ratings
- [[llm]] — GPT-4o as the rater, with smaller models compared alongside it
- [[generative-ai]] — the capability class being tested as an assessor rather than a generator
- [[ai-feedback-quality]] — the accuracy question behind machine judgement of creative work
- [[prompt-engineering]] — rubric text and structured JSON output as the highest-leverage intervention
- [[psychometrically-aware-ai]] — correlation, reliability across runs and the correlation-is-not-agreement caveat
- [[limitations-in-aied-research]] — single game, model-version dependence and unresolved rater variance

## Connected Articles

- [[llm-computational-thinking-physics-2026]] — LLMs mirroring human coders on physics problem-solving constructs
- [[gpt-human-rater-essay-assessment-2026]] — Variability and bias when GPT and human raters score the same essays
- [[bandit-driven-llm-essay-scoring-2026]] — Cutting the cost of LLM scoring through prompt selection
- [[aiawe-automated-writing-evaluation]] — Open-source LLM writing evaluation with adapted instruction-tuned models
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]] — LLMs turned on assessment artefacts themselves
- [[ground-truth-reliability-aied]] — Improving the reliability and validity of the human criterion
- [[durable-skills-measurement-ai-teammates-2026]] — Rubric-based autorating of creativity in AI-mediated group tasks
- [[ai-ive-pbl-vocational-design-creativity-2026]] — Design creativity as an outcome in AI-enabled project-based environments
- [[rhaimi-productivemath-2025]] — The same group's generative-AI app for productive-failure teaching

## Citation

Rahimi, S., Li, H., Esmaeiligoujar, S., & Ercan, D. (2026). [*Rubric-Guided Generative AI for Scalable Creativity Assessment in Educational Games*](https://osf.io/preprints/psyarxiv/3ybw7_v1).
