---
title: "Using LLMs to Identify Indicators of Persistence from Students' Dialogues with a Pedagogical Agent"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/ober-persistence-pedagogical-agent-dialogues-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers, assessment designers, educational technology developers]
level: [middle school]
discipline: [math education]
technology: [conversational-ai, llm, pedagogical-agent]
methods: [ai-assisted-educational-research, qualitative-research]
assessment: [educational-measurement]
pedagogy: [self-regulated-learning, self-efficacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Ober, Zhang, Zapata-Rivera, Schroeder and Botelho report a secondary analysis in which eight configurations of ChatGPT4o — regular and mini models at temperatures 0, 0.3, 0.7 and 1 — coded indicators of persistence, self-efficacy, interest, perceived challenge and prior knowledge from more than 10,000 chat-log turns that 107 English-learner middle school students produced in a [[conversational-ai|conversation-based assessment]] with [[pedagogical-agent|pedagogical agents]]. Every configuration re-coded the dataset with high self-consistency (Cohen's kappa above 0.86 and percent agreement above 88%), yet alignment with two trained human coders stayed poor to fair (kappa from 0.000 to 0.419), and counts of every construct correlated negatively with task performance. The authors read these patterns as evidence that ambiguous construct definitions, not the models, are the main barrier to [[ai-assisted-educational-research|LLM-assisted coding]] in [[educational-measurement|educational measurement]].

## Key Findings

1. **The corpus.** 107 middle school students classified as English learners (mean age 12.4 years, SD 1.03; 50.68% female; 54.79% in 6th grade) produced over 10,000 turns in a conversation-based assessment of English and math; one human coder labeled 10,919 turns in full and a second labeled 2,092.
2. **The LLMs were highly self-consistent.** All eight configurations achieved Cohen's kappa above 0.86 and percent agreement exceeding 88% when re-coding the same data; ChatGPT4o at temperature 0 was the most stable (κ = 0.890, 90.52% agreement) and ChatGPT4o-mini at temperature 1 the least (κ = 0.865, 88.28%).
3. **Persistence was the hardest construct to pin down.** Within-configuration kappa ranged from 0.701 to 0.818 across configurations — the widest spread of any construct — despite the highest percent agreement rates (93.9% to 97.15%), a signature of disagreement concentrated on rare positive cases.
4. **Human-human agreement was only moderate.** The two trained coders agreed most on self-efficacy (κ = 0.886, 94.39% agreement) and less on interest (κ = 0.675) and persistence (κ = 0.514); their average kappa (0.644) sat below the best LLM-LLM average (κ = 0.856).
5. **Human-LLM alignment was poor across the board.** Cohen's kappa ranged from 0.000 to 0.419; for prior KSAs every human-LLM comparison yielded κ = 0 despite agreement between 52.22% and 83.96%, and for interest kappa went negative (as low as -0.284).
6. **More expressions of any construct went with lower scores.** Perceived challenge (r = -0.25) and persistence (r = -0.19) showed the strongest negative correlations with task performance, followed by self-efficacy (r = -0.15), prior KSAs (r = -0.14) and interest (r = -0.08), all at p < .001, and the human coders showed the same direction.

## A conversation-based assessment of English learners

The chat logs came from a conversation-based assessment (CBA) built to evaluate English and math proficiency among middle school students classified as English learners. Each student completed up to seven tasks, each presented from a first-person perspective with embedded video clips and targeted at competencies such as understanding directions, interpreting information in tables, and demonstrating proportional reasoning. Students conversed in turn-taking exchanges with three [[pedagogical-agent|pedagogical agents]] — a teacher agent and two peer agents — and the system used natural language processing to adapt the dialogue path to student input. Students produced far less language than the agents did: an average of 24.55 turns (SD 8.28) with about 7 words per turn, against the peer agents' 36.34 (SD 10.65) and 34.92 (SD 11.97) turns with roughly 15 to 17 words per turn.

## Eight LLM configurations against a human benchmark

The coding task asked each "coder" to label every turn with any of five construct-level codes: persistence, self-efficacy, interest, perceived challenge, and prior KSAs (knowledge, skills, and attitudes). Prompt and construct definitions were developed collaboratively and refined through the same iterative process used to train the humans, so the comparison would be as fair as possible. Eight LLM conditions crossed model type (ChatGPT4o versus ChatGPT4o-mini) with four temperature settings (0, 0.3, 0.7, 1), and every configuration ran the identical prompt twice — once between March 30 and April 2, 2025, and again between May 28 and 30, 2025 — so that stability could be assessed on separate occasions. Codes the models invented outside the rubric, such as "Curiosity" and "Engagement" at temperature 1, were removed before analysis. Two trained human coders with over five years of assessment experience each provided the benchmark: one coded all 10,919 turns and the other a random subset of 2,092. Chance-corrected Cohen's kappa and Krippendorff's alpha were reported alongside percent agreement, because high percent agreement can mask disagreement on the rare positive cases that carry the construct.

## Self-consistent but not human-aligned

Within-configuration reliability was the study's bright spot: every LLM configuration agreed strongly with itself across the two runs regardless of temperature (kappa from 0.865 to 0.890), and regular ChatGPT4o consistently edged out the mini model. Between configurations, pairs using the same base model agreed 3.3% to 4.0% more than cross-model pairs, and agreement fell monotonically as the temperature gap grew — deterministic settings created shared interpretive frameworks. The striking finding sat elsewhere: human coders agreed moderately with each other (average κ = 0.644) while [[llm|LLMs]] agreed more with each other (best average κ = 0.856), yet no LLM configuration came close to matching either human. Self-efficacy, the construct the authors rated highest in operational clarity, showed the best human-LLM alignment (κ up to 0.418), while perceived challenge and prior KSAs collapsed to kappa near zero, with every human-LLM comparison for prior KSAs at κ = 0 despite agreement above 52%. The asymmetry extended to interpretation: the LLMs coded questions to the agent as persistence (help-seeking as evidence), while one human coder treated "I think..." statements as persistence and the other demanded explicit statements of effort such as "let me try again" — coherent but incompatible criteria, the construct-boundary ambiguity the study set out to measure.

## Construct clarity shaped reliability

The study's distinctive contribution is mapping reliability onto a dimensional analysis of each construct — operational definition, empirical grounding, and conceptual integrity — rated by the first author. The pattern held across metrics: Krippendorff's alpha was highest for perceived challenge (α ≈ 0.603), moderate for self-efficacy (α = 0.580), and lowest for persistence (α = 0.498), tracking the constructs' theoretical coherence. Well-defined constructs behaved best at low to moderate temperatures — self-efficacy peaked for ChatGPT4o at temperature 0.7 (κ = 0.847, 92.1% agreement) — while abstract, context-dependent constructs like prior KSAs performed best with the mini model at higher temperatures, where the wider sampling captured more varied expressions. Model type stamped the outputs as strongly as temperature: ChatGPT4o-mini at temperature 1 coded 44.8% of turns as self-efficacy against 31.7% for the regular model at the same setting, so the two architectures applied systematically different thresholds. The authors warn that high self-consistency plus low human alignment should not be read as model failure; it is a diagnostic signal that the construct's operationalization lacks clarity.

## Codes tracked struggle more than success

Correlations between construct counts and students' total scores ran negative for all five constructs, contradicting theory-based expectations for self-efficacy and prior KSAs. Perceived challenge carried the strongest association (r = -0.25, p < .001), followed by persistence (r = -0.19), self-efficacy (r = -0.15), prior KSAs (r = -0.14) and interest (r = -0.08). The signal was context-dependent: in an early section of the task, self-efficacy (r = 0.33) and interest (r = 0.31) correlated positively with performance, while by a later section perceived challenge (r = -0.23) and persistence (r = -0.15) turned clearly negative — persistent expressions late in a task may mark unproductive struggle rather than adaptive engagement. The human code showed the same sign as the machines (human1's persistence counts correlated at r = -0.32), so the negative direction was not an LLM artifact. The authors close by arguing that the task is to distinguish adaptive from maladaptive persistence — strategic re-attempting from repetitive trial-and-error — and they sketch a taxonomy toward that end in supplemental materials deposited in an Open Science Framework repository.

## What this means for practice

- **Research teams using LLM coding.** Do not treat high self-consistency as validity: all eight configurations re-coded the data with kappa above 0.86 while human-LLM kappa stayed at or near zero for most constructs, so a model that agrees with itself may still not share the definition of the construct. Report chance-corrected agreement, not just percent agreement.
- **Assessment designers.** Match configuration to construct: well-defined constructs like self-efficacy coded best at moderate temperature (κ = 0.847 for ChatGPT4o at 0.7) and reached the highest human alignment (κ up to 0.418), while ambiguous constructs gained from high-temperature, mini-model settings that captured more varied expressions.
- **Developers of adaptive systems.** Counts of persistence and perceived challenge correlated negatively with performance (r = -0.19 and r = -0.25 overall), so an automated system that reacts to persistence talk as engagement would misread struggling students; code-based signals need task context to separate productive from unproductive persistence.
- **Human-LLM collaboration.** With human-human agreement (average κ = 0.644) already below the best LLM-LLM agreement (κ = 0.856), LLMs are a defensible first-pass coder, but construct ambiguity degrades both kinds of coder — human review and shared definitions remain the load-bearing part of any coding pipeline.

## Limitations

- The sample is small and specific: 107 middle school English learners in a single math-focused CBA, where short student turns (about 7 words per turn, mean 24.55 turns) made coding harder, and English learners may use non-conventional language.
- Agreement was low across nearly all coder pairs, human or machine; the authors note that high percent agreement with low kappa may reflect the prevalence paradox, where most turns receive no code and raters agree on the dominant negative category rather than on the construct.
- The LLM runs used a one-pass, prompt-driven procedure with no clarification loop, and even temperature 0 does not guarantee reproducibility across sessions, so the configurative results may not transfer to other models, prompts or platforms.
- Correlations with performance are context-dependent and descriptive, not causal, and the study does not resolve whether persistent expressions reflect difficulty experience, productive effort, or both.

## Citation

Ober, T. M., Zhang, S., Zapata-Rivera, D., Schroeder, N. L., & Botelho, A. F. (2026). *Using LLMs to Identify Indicators of Persistence from Students' Dialogues with a Pedagogical Agent*. *Journal of Educational Data Mining*, 18(1), 208-243.
