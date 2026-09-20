---
title: "Using AI-Generated Feedback to Improve Critical Thinking and Writing Proficiency"
created: "2026-08-10T09:10:02-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
foundations: [ai-education, critical-thinking]
pedagogy: [scaffolding]
technology: [generative-ai]
assessment: [automated-assessment, feedback]
methods: [quantitative-research]
research_method: [longitudinal study]
level: [k 12]
sources: ['raw/papers/2608.05177.md']
confidence: high
discipline: [writing education]
audience: [instructors, teachers, instructional designers]
---

> **Synthesis:** This study developed the Writing Improvement and Smart Evaluation Agent (WISE Agent), an [[ai-feedback-quality|AI feedback]] tool targeting textual logic and perspective biases in student essays. A three-month intervention with 260 Chinese sixth-grade students found structural optimizations in critical thinking dimensions rather than a uniform increase in total scores. Lower-performing students advanced in evidence selection while higher-performing students excelled in perspective diversification, suggesting WISE Agent serves as an effective [[scaffolding|cognitive scaffold]] for incremental critical thinking development through personalized feedback loops.

## Key Findings

1. The WISE Agent intervention produced no statistically significant gain in aggregate critical thinking disposition scores (t=-0.854, p=0.394, Cohen's d=0.054), yet catalyzed significant structural reorganization across sub-dimensions rather than a linear leap.
2. Truth-seeking (t=-5.138, p<0.001) and CT [[self-efficacy|Self-confidence]] (t=-3.038, p=0.003) rose significantly, while Cognitive Maturity declined (t=2.358, p=0.019) — a "de-centering" the authors attribute to multidimensional feedback challenging students' initial epistemic overestimation.
3. Developmental trajectories diverged by proficiency: high-level students improved critical thinking by 18%, intermediate by 12%, and low-level by 8%, with the low-level cohort showing a time-lag effect in which thinking gains preceded writing gains.
4. Feedback operated asymmetrically — structured writing scaffolds for lower performers to standardize evidence selection, and counter-questioning heuristics for high performers to expand multiple perspectives and dialectical analysis — consistent with adaptive [[feedback]] responding to [[prior-knowledge|learners' prior knowledge]].

## Background

Writing is positioned as a cognitive process that reconstructs implicit thought into explicit logic, providing a pathway for developing [[critical-thinking|logical reasoning]] and dialectical analysis. Yet traditional writing [[feedback]] is often lagged, confined to surface-level evaluation, and constrained by heavy grading burdens and experiential disparities among teachers. The authors argue that [[generative-ai|Generative AI]] (GenAI) breakthroughs open possibilities for dynamic, scalable [[scaffolding|cognitive scaffolds]], but note that current [[research-methods-aied|research]] frequently positions AI as a mere linguistic accuracy editor, overlooks elementary students in critical cognitive transitions, and lacks clarity on differentiated impact mechanisms across baseline proficiency levels. The study draws on [[distributed-cognition|distributed cognition theory]] and writing-to-learn [[pedagogy|pedagogical]] frameworks to inform both system design and evaluation.

## The WISE Agent Intervention

The Writing Improvement and Smart Evaluation Agent (WISE Agent) is an AI feedback tool built on the Coze platform and powered by a DeepSeek [[llm|Large Language Model]]. It operates in a closed-loop workflow: handwritten manuscripts are processed through standardized OCR and image-stitching, the model acts as a "Senior Primary Teacher" delivering [[qualitative-research|qualitative]], tier-based assessments with actionable scaffolds (e.g., [[prompt-engineering|prompting]] sensory details or counterarguments), and students revise independently before teacher review. With an average correction cycle of 40 seconds, the system sharply improves feedback timeliness relative to manual methods while maintaining reliability through predefined rubrics and standardized prompts refined in pilot testing (N=120).

## Methods and Measures

The three-month intervention involved 260 Chinese sixth-grade students (aged 11–13) in a naturalistic classroom setting, each completing seven themed essays from the national Grade 6 Chinese textbook. Students were stratified into three proficiency cohorts using pre-test scores from a validated critical thinking disposition scale (Cronbach's α=0.935, KMO=0.883): High-Level (27%, n=70), Middle-Level (46%, n=119), and Low-Level (27%, n=71). Assessment operationalized the California Critical Thinking Disposition Inventory (CCTDI) framework into a customized writing rubric, mapping dispositions such as Open-mindedness, Truth-seeking, Inquisitiveness, and Systematicity onto indicators like perspective diversification, evidence sourcing, argumentation depth, and textual organization — refined through two rounds of expert synthesis with pedagogy specialists and senior language teachers.

## Results

Paired-sample t-tests and effect-size calculations in SPSS 26.0 confirmed homogeneity of variance (p=0.32) and showed that, while aggregate scores rose only marginally, sub-dimension analysis revealed significant reorganization. The decline in Cognitive Maturity is interpreted through the Dunning-Kruger effect: as students engaged with multi-dimensional perspectives, their initial "naive optimism" was corrected toward a more sober recognition of cognitive complexity. Longitudinal analysis combining [[quantitative-research|quantitative]] tracking with thematic methods found high-level students exhibiting high stability (coefficients of variation 0.02–0.04), while low-level students showed stage-based fluctuation and a time-lag effect. The asymmetric adaptation suggests intelligent feedback should be tuned to proficiency: structured scaffolds for evidence selection in lower performers versus counter-questioning heuristics for dialectical expansion in higher performers.

## What this means for practice

- **Instructors.** Judge AI feedback on sub-dimensions rather than aggregate scores: aggregate [[critical-thinking]] disposition did not move significantly (t=-0.854, p=0.394, Cohen's d=0.054) while Truth-seeking (t=-5.138, p<0.001) and CT [[self-efficacy|Self-confidence]] (t=-3.038, p=0.003) did.
- **Instructors.** Expect Cognitive Maturity to fall before it rises — the decline (t=2.358, p=0.019) tracked students recognizing cognitive complexity they had previously overestimated — and avoid reading that dip as intervention failure.
- **Designers.** Tune feedback to proficiency: structured scaffolds for evidence selection with lower performers, counter-questioning heuristics for dialectical expansion with high performers, who improved 18% versus 12% (intermediate) and 8% (low).
- **Designers.** Cap feedback density to avoid over-scaffolding, since the time-lag effect in lower-performing students suggests high-density feedback may induce cognitive overload.
- **Instructors.** Keep the loop human: the WISE Agent works as a formative heuristic mediator rather than a corrective editor, and the authors call for pairing AI-driven [[scaffolding]] with teacher-led review to mitigate the [[learning-gains|Matthew Effect]].

## Limitations

- No randomized control group: the authors state curriculum constraints precluded it, leaving a three-month intervention with 260 sixth-grade students (aged 11–13) at a single public primary school in China.
- The headline aggregate result is null — no statistically significant gain in total critical thinking disposition scores — so the study's claims rest on sub-dimension shifts.
- The authors state the three-month duration was short for internalizing complex cognitive habits and recommend quasi-experimental designs to test long-term scalability.
- Proficiency cohorts were assigned from pre-test scores alone (High 27%, n=70; Middle 46%, n=119; Low 27%, n=71), and the tool's rubrics and prompts were refined in a pilot of N=120 in the same setting.
## Connected Concepts
- [[critical-thinking]]
- [[automated-assessment]]
- [[scaffolding]]
- [[writing-education]]
- [[ai-feedback-quality]]
- [[k-12]]

## Connected Articles

- [[genai-teacher-feedback-comparison]]
- [[repeated-ai-writing-feedback-semester]]
- [[foxglove-writing-feedback-experts-llms]]

## Citation

Zhu, Q., Zhai, X., Zou, Y., & Gao, C. (2026). [*Using AI-Generated Feedback to Improve Critical Thinking and Writing Proficiency*](https://arxiv.org/abs/2608.05177).
