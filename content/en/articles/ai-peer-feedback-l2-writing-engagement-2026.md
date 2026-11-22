---
title: "AI-peer integrated feedback in second language writing classes: exploring students' engagement and writing performance"
created: "2026-09-30T10:33:58-04:00"
updated: "2026-09-30T10:33:58-04:00"
type: article
sources: ['raw/papers/10.3389_fpsyg.2026.1871951.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [quasi-experiment, interviews, thematic analysis]
discipline: [language learning, writing education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers, assessment designers, researchers]
foundations: [ai-education, human-ai-collaboration, teacher-role, ai-literacy, limitations-in-aied-research]
pedagogy: [student-engagement, scaffolding, sociocultural-learning, self-efficacy, metacognition, collaborative-learning, motivation]
technology: [generative-ai, llm]
assessment: [peer-assessment, feedback, feedback-literacy, ai-feedback-quality, learning-gains]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Liu ran a 10-week [[feedback|feedback]] intervention inside a 12-week Advanced English Writing course with 122 Chinese EFL students, comparing an experimental group (n = 61) that received AI-plus-peer integrated feedback against a control group (n = 61) that received conventional [[peer-assessment|peer feedback]] only. The study used a quasi-experimental pretest-posttest design with intact-class allocation, and measured outcomes through pre- and post-writing tests, five writing assignments, engagement [[self-report-measures|questionnaires]], plus semi-structured interviews and [[reflection|reflective journals]] from 16 focal students in each group. The experimental group reported significantly higher behavioral, affective, and cognitive [[student-engagement|engagement]] and outperformed the control group across all four IELTS writing dimensions, with the largest effects on task achievement and lexical resource. Because classes were allocated intact at a single institution and the sample was gender-imbalanced, the gains cannot be attributed causally, and the absence of a delayed post-test leaves their durability unmeasured.

## Key Findings

- **Engagement rose on all three dimensions.** After controlling for pretest scores, the experimental group's adjusted posttest means exceeded the control group's on affective, behavioral and cognitive engagement by roughly a point on the questionnaire scale, while the control group stayed essentially flat.
- **Writing performance improved on all four dimensions.** With the composite pretest writing score as covariate, group and writing dimension both had significant effects, and the experimental group's IELTS-band gains were larger than the control group's on task achievement, coherence and cohesion, lexical resource, and grammatical range and accuracy.
- **The gains were uneven across dimensions.** The group × writing dimension interaction was significant, with the largest between-group effects on task achievement and lexical resource, smaller effects on coherence and cohesion and grammatical range and accuracy, and only those two pairwise contrasts reaching significance.
- **The groups were comparable at baseline.** Independent-samples t-tests found no significant pretest differences on any of the three engagement dimensions or any of the four writing dimensions.
- **The interviews and journals converged on three themes.** The [[qualitative-research|qualitative]] data were coded into improved affective engagement, active behavioral processing, and deep cognitive engagement with AI-peer integrated feedback. Experimental-group students described a wider repertoire of revision operations — correction, substitution and addition — where control-group students predominantly confined themselves to direct correction or no correction. One experimental-group participant said the feedback "enabled me to deploy a broader repertoire of revision operations, ranging from minor corrections to substantial rewriting of entire sentences", and another described using the AI iteratively: "This AI enabled me to revise the essay as many times as I wanted before finally submitting it. It was just like having a personal tutor helping me improve." Control-group students reported more interpretive difficulty, as in "I sometimes found it hard to understand peer comments on sentence structure, especially when the feedback was vague or lacked explanation."

## How the study was run

Participants were English majors recruited by convenience sampling from three intact classes at a university in southern China; two classes (A and B) were combined into the experimental group (n = 61) and a single intact class (C) of 61 students formed the control group (n = 61). They were enrolled in a 12-week Advanced English Writing course of two 45-min sessions per week, taught by the same instructor (a master's degree in applied linguistics with 4 years of teaching experience). The participants averaged 20.2 years of age (SD = 0.77), comprised 98 female and 24 male students, and their overall English proficiency corresponded to Level B2 on the CEFR as indicated by their average CET-4 scores.

In Week 1 all participants completed an argumentative-essay pretest and an initial engagement questionnaire; the intervention ran from Week 2 to Week 11 with five writing sessions at two-week intervals; and in Week 12 participants completed the posttest and the second questionnaire while focal students took part in interviews and kept reflective journals. The experimental group submitted each draft to [[generative-ai|ChatGPT]]-4 (GPT-4, web interface) run with default parameters (temperature = 0.7, top_p = 1.0), interacting with it for approximately 30 min using standardized prompts covering task achievement, coherence and cohesion, lexical resource, and grammatical range and accuracy; they then took part in a peer review of 30 min of individual evaluation followed by 15 min of small-group discussion (groups of 2–4 students). The control group conducted peer review without AI support, spending approximately 60 min on independent evaluation and revision using the same [[rubrics|rubric]], followed by 15 min of small-group discussion, and revised exclusively on peer feedback.

Engagement was measured with a 5-point Likert questionnaire developed from Ellis's (2010) three-dimensional framework. An exploratory factor analysis yielded a three-factor solution of 16 items accounting for 73.2% of total variance (KMO = 0.86, p < 0.001), with Cronbach's α of 0.81, 0.77 and 0.79 for the affective, behavioral and cognitive subscales; a confirmatory factor analysis confirmed the structure (χ2/df = 1.83, CFI = 0.96, TLI = 0.95, RMSEA = 0.059, SRMR = 0.045) with loadings of 0.56–0.81 and AVE (0.52–0.58) and CR (0.78–0.81) above recommended [[benchmark|benchmarks]]. Writing was scored on IELTS Task 2 band descriptors on a 9-point scale by two independent raters across 244 written compositions, with 20% of scripts double-rated at inter-rater coefficients of r = 0.86 (task achievement), 0.81 (coherence and cohesion), 0.82 (lexical resource) and 0.80 (grammatical range and accuracy). Interview and journal data were translated and coded inductively, with inter-coder reliability of 90.12% for affective, 91.22% for behavioral and 91.06% for cognitive engagement, and textual analysis of the drafts reached 92.21% agreement for feedback focus and 90.13% for revision operations. Because classes were allocated intact, the study computed intra-class correlation coefficients, which were uniformly low (affective 0.041, behavioral 0.033, cognitive 0.047, task achievement 0.052, coherence and cohesion 0.038, lexical resource 0.044, grammatical range and accuracy 0.049), justifying the ANCOVA approach. The engagement analyses used three separate ANCOVAs with a Bonferroni-corrected alpha of 0.017.

## What this means for practice

- **Instructors.** Sequence the two sources rather than treating them as alternatives: the design gave [[ai-feedback-quality|AI feedback]] first and peer feedback second, which let students offload surface-level corrections to the AI and reserve higher-order content and organization for peer discussion.
- **Instructors.** Standardize the AI prompts around the assessment rubric. The study supplied a core prompt and limited supplementary prompts to the same four dimensions, and periodically reviewed students' ChatGPT interaction logs for [[prompt-engineering|prompting]] quality — a manageable way to keep a hybrid workflow consistent across a large class.
- **Instructors.** Expect the strongest movement where AI is analytically strong. Task achievement and lexical resource showed the largest effects (d = 1.41 and 1.28), while coherence and cohesion improved least and grammatical range and accuracy depends on procedural knowledge that a brief intervention cannot build.
- **[[curriculum-design|Curriculum]] designers.** Build the workflow into the syllabus with training on both the rubric and the AI tool; the study trained students on the rubric and on peer feedback before the intervention and treated AI-peer integrated feedback as a supplement to, not a replacement for, existing practice.

## Limitations

- The quasi-experimental design used intact-class allocation at a single institution and a gender-imbalanced sample, which may constrain generalizability; the author calls for individual-level random assignment, multiple instructors, and more diverse, gender-balanced sampling.
- No delayed post-test was administered, so the study cannot say whether the observed writing improvements endure.
- Participants had limited prior exposure to AI-assisted feedback tools, raising the possibility that the positive outcomes partly reflect a novelty effect.
- The design precludes definitive causal claims about mediating processes; the author suggests structural equation modeling with larger samples to test potential mediators such as [[feedback-literacy|feedback literacy]].

## Citation

Liu, W. (2026). [AI-peer integrated feedback in second language writing classes: exploring students' engagement and writing performance](https://doi.org/10.3389/fpsyg.2026.1871951). *Frontiers in Psychology*, 17, 1871951.