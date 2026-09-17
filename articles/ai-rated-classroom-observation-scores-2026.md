---
title: "I code or AI code: A comparative evaluation of AI-rated scores in classroom observations"
type: article
created: "2026-09-17T09:40:00-04:00"
updated: "2026-09-17T09:40:00-04:00"
tags: [educational-measurement, automated-assessment, assessment-validity, early-childhood-elementary-ai-education, human-in-the-loop-ai, llm, ai-ed-evaluation, multimodal, teacher-role]
sources: ['raw/papers/ai-rated-classroom-observation-scores-2026.md']
confidence: high
research_method: [educational measurement]
level: [early childhood]
audience: [instructors, researchers]
category: [evaluation]
---

> **Synthesis:** Fong and colleagues tested whether a large language model can stand in for trained observers by having Perplexity's GPT-5.0 apply the full CLASS Pre-K framework to transcripts of 87 video-recorded observations from 38 classrooms across 30 Hong Kong kindergartens, then comparing its ratings with those of eight trained human raters. Agreement was moderate overall (weighted κ = 0.681) but sharply construct-dependent: the [[llm|AI]] converged with raters on the [[early-childhood-elementary-ai-education|Emotional Support]] domain and on Quality of Feedback — the one dimension built around explicit, exchange-based verbal support — and diverged wherever quality lives in nonverbal, procedural or context-dependent behaviour, above all in Classroom Organization. The divergence ran in both directions rather than one: raters scored the emotional dimensions higher than the model, while the model scored Concept Development *higher* than raters, so the AI was neither uniformly conservative nor uniformly generous. The authors read this as a ceiling rather than a verdict — transcript-based [[automated-assessment|AI scoring]] recovers some of the *relative* variation in teacher–child interaction quality without reproducing calibrated human levels — and position it as a preliminary screening tool that gives [[teacher-role|teachers]] evidence for reflection rather than a basis for high-stakes evaluation.

## The Problem: Observation Quality Built on Scarce Human Raters

Classroom observation is the standard route to [[benchmark|benchmarking]] instructional quality and to giving teachers concrete evidence about their own practice, and the Classroom Assessment Scoring System (CLASS) is one of its most widely validated instruments. CLASS operationalises developmental process-quality theory, which holds that children's learning is shaped most directly by proximal interactions with adults, and it is used both formatively — as a reflective and coaching tool — and summatively for quality assurance.

Its cost structure is the opening for automation. Observations consume time, scheduling capacity and funding; validated instruments demand intensive initial rater training and ongoing calibration and recalibration, particularly in projects with many raters; and observer fatigue produces measurement drift over long coding sessions. [[video-education|Video-based]] observation removes some of this burden — recordings can be reviewed repeatedly, and the observer's physical presence (and its Hawthorne effect) is removed — but it does not remove observer fatigue, rater bias or the calibration machinery.

Earlier automation attempts set a low ceiling. Shapsough and Zualkernan's [[machine-learning]] approach to the Stallings Classroom Snapshot reached 68.9 percent labelling accuracy, and only one of ten tested algorithms managed it. A pilot by Li et al. using multiple LLM agents achieved an 18-fold efficiency gain over human observation, but its rubric was restricted to binary present/not-present coding on two subscales. The present study raises the bar in two respects: it applies the *full* CLASS framework with its seven-point rating scale, and it asks a sharp question — to what extent do AI-rated scores align with human raters' scores? The authors hypothesised convergence in Instructional Support and its dimensions, since those are carried by instructional language, and were explicitly unsure about Emotional Support and Classroom Organization, whose interactions they expected to be only partially representable in a transcript.

## Method: What Was Rated, and By Whom

Data came from the baseline year of a larger longitudinal project on community-based interventions for children aged three to six, filmed in 62 Hong Kong kindergartens from August 2023 through the first year of kindergarten. Videos were screened for audio-visual quality and coding feasibility — classrooms with a single educator were prioritised to reduce overlapping speech, and this criterion alone excluded 83.24 percent of the footage — and, following CLASS coding requirements, recess and unstructured free play were removed. The final sample comprised 87 classroom observations of 15–20 minutes each (roughly two per classroom, about 26.5 hours of video) from 38 K1 teachers across 30 kindergartens spanning the fee range (low/subsidised n = 16, mid-range n = 7, high n = 7). Teachers averaged 10.89 years of experience (SD = 7.42); 47.4 percent were recorded as female and 52.6 percent had missing demographic data because of teacher non-reporting.

The human benchmark was eight raters holding at least a bachelor's degree or qualified early childhood practitioner status, trained by a licensed CLASS Pre-K trainer and calibrated in two rounds of five shared videos with individualised feedback. The remaining 77 observations were coded independently by two raters each, with weighted Cohen's kappa among raters ranging from .672 to .861 and a consolidated averaged score used for analysis.

The AI rater was a prompt-engineered Perplexity GPT-5.0 model, given the CLASS framework manual to parallel the human training and then run through four cycles of a three-step routine — a case-study phase with transcripts plus human consolidated scores and notes, an independent practice coding of two new transcripts, and a feedback phase. It then scored the remaining 71 transcripts independently. Notably, the comparison used *individual observation cycles* rather than the four-to-seven-cycle classroom averages CLASS normally prescribes, because the study's aim was rater-versus-AI consistency rather than an estimate of teacher quality. Negative Climate was reverse-scored, and outliers (0.423 percent of rater data points, 0.704 percent of AI data points) were winsorised.

## Key Findings

1. Domain-level convergence appeared only for Emotional Support (r = .406, p < .001); Classroom Organization (r = .123) and Instructional Support (r = .195) were not statistically significant.
2. At the dimension level, three of four Emotional Support dimensions were significant — Positive Climate strongest at r = .438, then Teacher Sensitivity (r = .313) and Regard for Student Perspectives (r = .296) — while Negative Climate was not (r = .085), and none of the three Classroom Organization dimensions reached significance (Behavior Management .161, Productivity .029, Instructional Learning Formats .136).
3. Quality of Feedback was the only Instructional Support dimension with a significant positive correlation (r = .269, p < .05) and, alongside Language Modeling, the only one with no significant mean difference — the paper's clearest case of alignment without systematic bias.
4. Overall inter-rater agreement between consolidated human scores and AI scores was moderate: weighted κ = 0.681, 95% CI [0.646, 0.716], p < .001, with individual raters against AI ranging from .515 to .712 — a level the CLASS protocol treats as acceptable when dimensions agree to within one scale point (κ ≈ 0.60–0.75).
5. Mean differences were substantial where they existed. Raters scored the Emotional Support domain higher than AI by 0.806 points (d = 1.343), driven by Positive Climate (1.152, d = 1.523) and a very large Negative Climate gap (1.084, d = 2.732, with adjusted df because of unequal variances). Raters scored the Instructional Support domain *lower* than AI by 0.284 points (d = 0.343), driven by Concept Development (−0.406, p = .021, d = 0.392). Classroom Organization showed no domain-level difference (−0.013, p = .912), and Language Modeling approached but did not reach significance (−0.255, p = .056).
6. Negative Climate exposed a ceiling effect in human ratings that the model did not share: raters gave a 7 (maximum, meaning least negativity) in 63 of 71 observations and a score between 6 and 7 in the remaining eight, while AI scores clustered at 6 (n = 51), with 13 fives, six sevens and one four.
7. Distributionally, the two parties agreed on the level of Classroom Organization (raters 5.121 vs AI 5.134) and on Instructional Support being the weakest domain (2.937 vs 3.221), but disagreed by 0.805 points on Emotional Support (5.490 vs 4.685).

## Reading the Pattern: Verbatim Constructs Converge, Enacted Ones Do Not

The paper's central interpretive claim is structural, and it is consistent with the wider [[educational-measurement|measurement]] literature on LLM raters: convergence tracks whether the construct is carried by explicit, textually recoverable language. Quality of Feedback is operationalised through [[scaffolding]] and contingent responses — exchange-based indicators that match the pattern-recognition strengths of models trained on large text corpora — and it converged with no mean difference at all. The authors connect this to Whitehill and LoCasale-Crouch's finding that LLM predictions approximate human ratings for instructions-based support, and to evidence of AI–human convergence in feedback evaluation generally.

Emotional Support converged in rank order but not in level, and the paper offers two competing explanations that the design cannot separate. Latent nonverbal and relational cues — facial expression, tone, warmth — are simply absent from a transcript, which would make the human ratings the more valid ones; alternatively the human raters may have been biased towards overvaluing relational warmth. The dignity of this framing matters: a mean difference is not automatically an AI error.

Divergence concentrated in Classroom Organization, whose management practices are rapid, context-sensitive and [[embodied-learning|embodied]] — spatial dynamics, movement, momentary routines — and therefore largely invisible to a text-only pipeline. The AI's *higher* scores on Concept Development are read more cautiously still: the model may have detected discourse features raters missed, or it may have applied the wrong lens to instructional exchange, especially since raters were simultaneously rating multiple dimensions. The authors note that well-trained AI models falter when evaluating classroom dialogue beyond their training scope, and call for targeted [[pedagogical-llm-training|pedagogical training]] before AI can parallel human observers on nuanced variation in [[pedagogy|teaching practice]].

The most consequential limitation is not statistical. Because the study compared single observation cycles rather than classroom averages, used one model, one framework and one cultural-developmental context (Hong Kong classrooms serving three- and four-year-olds), and excluded more than 80 percent of a larger video pool to obtain single-teacher audio, its findings describe the alignment mechanism precisely but not its generalisability. The authors state the boundary plainly: agreement being partial and conditional on the construct assessed means the results do not support AI as an independent observation system.

## Implications: Screening, Not Scoring, and Training for Both Sides

For schools with constrained human capacity, the practical proposal is a hybrid workflow: AI as a first-pass scoring and evidence-surfacing tool that directs scarce human attention where it is most needed, with raters retaining interpretive authority over emotional nuance and over professional learning. On this reading, AI outputs should be framed as evidence for reflection rather than as scores for evaluation — an [[assessment-validity|assessment-validity]] position rather than an efficiency claim.

The paper adds two under-discussed requirements to that workflow. The first is training for the humans: teachers and observers need [[ai-literacy|AI-literacy]] preparation as part of observation-focused [[educational-development|professional development]] if they are to read model output critically. The second is a research agenda the study deliberately leaves open — comparisons across multiple models, incorporation of [[multimodal]] and video signals, extension to primary and secondary settings, and alternative frameworks such as ECERS or ICALT, plus direct evaluation of whether AI-assisted workflows genuinely reduce rater workload without compromising validity. The closing formulation is worth keeping as the field's default question: not whether AI can replace classroom observation, but how AI-assisted observation can be designed so that [[teacher-role|teachers]] retain judgement where it matters and are freed from workload where the model has demonstrated reliability.

## Connected Concepts

- [[educational-measurement]] — AI–human agreement compared domain by domain on a validated observation instrument
- [[automated-assessment]] — LLM as a rater of classroom quality rather than student work
- [[assessment-validity]] — convergence is conditional on construct; agreement is not validity
- [[early-childhood-elementary-ai-education]] — the first CLASS Pre-K benchmarking of AI observation, in Hong Kong kindergartens
- [[human-in-the-loop-ai]] — AI as first-pass screening with raters retaining interpretive authority
- [[llm]] — a single prompt-engineered GPT-5.0 model, transcript-only input
- [[ai-ed-evaluation]] — validation-before-scale as the study's implicit standard
- [[multimodal]] — the missing nonverbal, spatial and tonal evidence that transcripts cannot carry
- [[teacher-role]] — observation output reframed as reflective evidence rather than evaluation

## Connected Articles

- [[melo-llm-classroom-observation-teach-2026]] — Validating AI-generated classroom observations: Reliability, accuracy, and limits of LLM-based pedagogical judgment
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[gpt-human-rater-essay-assessment-2026]] — Comparing GPT and human raters in essay assessment: Variability, bias, and the potential of LLM-based scoring
- [[automated-scoring-marketing-posts-agreement-2026]] — Agreement and error in automated scoring of student marketing posts
- [[cvengros-grading-handwritten-chemistry-ai-2026]] — Assisting the grading of a handwritten general chemistry exam with artificial intelligence
- [[ai-scoring-language-bias-physics]] — AI-based scoring systematically underestimates conceptual understanding of linguistically weak students' explanations in physics
- [[multimodal-embodied-cognition-oral-explanations-2026]] — A Multimodal Framework for Embodied Cognition in Oral Explanations
- [[teachingcoach-chatbot-instructor-guidance]] — TeachingCoach: A Fine-Tuned Scaffolding Chatbot for Instructional Guidance to Instructors
- [[ai-grading-handwritten-physics-2026]] — Large Scale AI Grading of Handwritten Physics Assessments: Score Agreement and Olympiad Team Selection Outcomes

## Citation

Fong, Y., Xiang, J., Chan, T.-Y. D., Lee, K., & Lau, E. Y. H. (2026). [*I code or AI code: A comparative evaluation of AI-rated scores in classroom observations*](https://arxiv.org/abs/2609.18274). arXiv preprint arXiv:2609.18274.
