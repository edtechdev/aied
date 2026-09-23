---
title: "Modeling and measuring graduate students’ generative AI literacy: a study based on Marzano’s taxonomy"
created: "2026-09-23T12:50:00-04:00"
updated: "2026-09-23T13:40:00-04:00"
type: article
foundations: [ai-literacy, theories-and-frameworks, critical-thinking, academic-integrity]
pedagogy: [metacognition, professional-training]
technology: [generative-ai, prompt-engineering]
assessment: [educational-measurement, self-report-measures, assessment-validity, psychometrically-aware-ai]
methods: [qualitative-research, quantitative-research, mixed-methods-research]
ethics: [ai-use-disclosure]
audience: [instructors, researchers]
level: [higher ed]
research_method: [instrument development, interviews, survey]
page_kind: [framework, evaluation]
sources: ['raw/papers/zhi-modeling-measuring-graduate-genai-literacy-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Zhi, Yang, and Huang (2026) build and test a model of [[ai-literacy|generative AI literacy]] for graduate students, organized by Marzano’s taxonomy of educational objectives. Interviews with 14 professors, analyzed through grounded theory procedures, yielded 329 raw labels that condensed into 96 initial concepts, 15 categories, and five dimensions: cognitive foundation, operational skills, higher-order thinking, metacognitive reflection, and ethical responsibility. The authors mapped those dimensions onto Marzano’s cognitive, metacognitive, and self-systems and operationalized them as a 15-item, 5-point Likert scale for graduate students. Exploratory factor analysis on half of the 308 valid questionnaires recovered the expected five factors, parallel analysis agreed, and confirmatory factor analysis on the second half showed acceptable fit, with reliability coefficients from 0.796 to 0.842. The instrument is proof of concept: it measures perceived literacy rather than performance on authentic tasks, and the authors call for multi-item and performance-based measures next.

## Key Findings

- The model has **five dimensions and 15 second-level indicators**, validated through grounded theory interviews plus questionnaire testing.
- **Interviews with 14 professors** produced 329 raw labels, condensed into **96 initial concepts, 15 categories, and five functional domains**.
- Marzano mapping: **cognitive foundation, operational skills, and higher-order thinking** in the cognitive system; **metacognitive reflection** in the metacognitive system; **ethical responsibility** in the self-system.
- Exploratory factor analysis (KMO = 0.874; Bartlett x² = 1892.567, p < 0.001) extracted **five factors explaining 83.14% of cumulative variance**, and parallel analysis agreed.
- Confirmatory factor analysis reported **CFI = 0.934, TLI = 0.919, SRMR = 0.048, and RMSEA = 0.083**; a second-order model (CFI = 0.935) supported a general literacy construct.
- Reliability was acceptable (**Cronbach’s alpha 0.796 to 0.842**; **McDonald’s omega 0.831 to 0.848**), with AVE above 0.500 and CR above 0.700.
- Each indicator uses **a single self-report item**, so the instrument measures **perceived** literacy rather than objective competence.

## Why a New Model Was Needed

The paper starts from a gap rather than a technology. Most frameworks for generative AI literacy carry a generic “college student” label, which the authors argue misses how graduate work differs in task complexity, research autonomy, and ethical responsibility. Graduate students critique literature, design experiments, and build theory, so the literacy demands placed on them go well beyond tool operation.

The second gap is theoretical. Existing models are enumerative: they list knowledge, skills, and values without explaining what each dimension does or how the parts relate. Marzano’s taxonomy supplies that logic, distinguishing the cognitive, metacognitive, and self-systems, so each component gets a functional role rather than another label.

## Building the Model from Expert Interviews

Fourteen professors with at least five years of supervising master’s or doctoral students were interviewed in November and December 2025, in sessions of 30 to 60 minutes averaging about 45 minutes, conducted in Chinese. Participants were professors spanning computer science, information science, educational technology, educational psychology, and higher education.

Coding followed grounded theory procedures, with Marzano’s taxonomy introduced only at the selective coding stage as a structural reference. Open coding condensed 329 raw labels into 96 initial concepts, axial coding produced 15 categories, and selective coding aggregated them into five domains. The authors describe the dimensions as interdependent: cognitive foundation supplies the knowledge base, higher-order thinking evaluates AI output, operational skills translate capacity into academic output, metacognitive reflection regulates use, and ethical responsibility sets normative boundaries.

## Validating the Scale

Three experts rated item relevance to establish content validity, producing I-CVI values from 0.870 to 1.000, a universal agreement S-CVI of 0.873, and an average S-CVI of 0.941. The final instrument has 15 items on a 5-point Likert scale. Questionnaires went out in January 2026 to graduate students at nine universities in Shanxi and Hubei; 317 responses were collected and 308 were valid (97.16%), split into two subsamples of 154.

The five dimensions showed moderate inter-factor correlations (r = 0.352 to 0.638), and all HTMT values fell below 0.850. The authors note the ceiling: the sample was geographically concentrated and predominantly male (79.87%), the data are cross-sectional, and each indicator rests on a single item.

## Curriculum design guidance

For graduate programs, the model works as a design checklist as much as a measurement claim. The authors recommend a tiered curriculum: early-stage students study technical principles, tool capabilities, and application scenarios, while advanced students work on [[prompt-engineering|prompt design]], multi-turn dialogue, and output processing.

For [[metacognition|metacognitive]] and ethical development, they suggest case discussions and writing workshops that push students to check the logical and factual validity of AI output, clarify human and AI task boundaries, and run a cycle of thinking, action, reflection, and optimization. They also emphasize [[professional-training|supervisor training]], since students internalize mentors’ standards, and explicit [[ai-use-disclosure|disclosure]] rules for AI-assisted writing.

## What this means for practice

- Treat the 15 indicators as a cohort-level diagnostic before designing instruction. Because the five dimensions are scored separately, a program can see whether a group of graduate students is short on cognitive foundation, operational skills, or ethical responsibility, instead of treating generative AI literacy as a single undifferentiated deficit and buying generic tool training for everyone.
- Keep apart the dimensions that look alike on paper. Cognitive foundation asks students to recognize what tools can and cannot do, while operational skills ask them to act on that recognition through prompt design, multi-turn dialogue, and output processing; higher-order thinking is where students judge whether to accept, revise, or reject AI output. A rubric that collapses these into one uses-AI-well criterion hides exactly the differences the instrument was built to separate.
- Build the reported draft-and-revise cycle into writing instruction. The higher-order thinking and output processing indicators describe a workflow in which students generate material, evaluate its logical soundness and factual reliability, then restructure and integrate it with their own argument, and the authors place that practice in case discussions and academic writing workshops where [[formative-assessment|formative feedback]] can target it.
- Read the scores as perceived capability rather than demonstrated performance, and label them that way. Each indicator rests on a single self-report item, so a high score says students believe they can do these things, not that they did them under authentic task conditions; pair the scale with performance tasks in [[authentic-assessment]] before using results for a program review or a policy claim.

## Limitations
- The model rests on professors’ normative judgments about what students ought to know, not students’ own accounts of practice, and the sample was small and predominantly male.
- Each indicator used a single self-report item, and the cross-sectional design cannot establish causal ordering among the dimensions.

## Connected Concepts

- [[ai-literacy]]
- [[theories-and-frameworks]]
- [[metacognition]]
- [[critical-thinking]]
- [[generative-ai]]
- [[academic-integrity]]
- [[educational-measurement]]
- [[self-report-measures]]
- [[assessment-validity]]
- [[psychometrically-aware-ai]]

## Connected Articles

- [[ai-literacy-instrument-development-systematic-review-2026]]: instrument development and psychometric quality
- [[ai-literacy-assessment-misalignment]]: self-reported versus objective-based measures
- [[ai-literacy-measurement-conceptual-landscape-llm-2026]]: conceptual landscape in AI literacy measurement

## Citation

Zhi, Y., Yang, W., & Huang, K. (2026). [*Modeling and measuring graduate students’ generative AI literacy: a study based on Marzano’s taxonomy*](https://doi.org/10.3389/fpsyg.2026.1883978).