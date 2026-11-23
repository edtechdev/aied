---
title: "Effects of AI-assisted case discussion and virtual patient consultation on medical students’ learning outcomes"
created: "2026-11-23T11:30:00-05:00"
updated: "2026-11-23T11:30:00-05:00"
published: "2026"
type: article
authors: ["Hongli Gao", "Bing Zhao", "Xing Hu", "Chang Liu", "Dongjun Zhang", "Hongxing Zhang"]
venue: "BMC Medical Education"
evidence_context: educational
foundations: [human-ai-collaboration]
pedagogy: [case-based-learning, experiential-learning, motivation]
technology: [generative-ai, conversational-ai, simulation]
assessment: [assessment, learning-gains]
methods: [quantitative-research, rct]
research_method: [experiment]
discipline: [medical education]
level: [undergraduate]
audience: [instructors, medical educators, researchers]
page_kind: [evaluation]
sources: ['raw/papers/gao-ai-case-discussion-virtual-patient-medical-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, quotes, links]
---

> **Synthesis:** Gao and colleagues report two laboratory experiments with 207 medical undergraduates on a self-built dialogue platform running [[generative-ai|ChatGPT-4o]]. In the first, students who discussed a [[case-based-learning|depression case]] with the AI scored higher on a nine-item knowledge test than a lecture-only control group, while a peer-discussion group did not separate from either. In the second, a [[simulation|virtual patient]] configured to [[medical-education|DSM-5 depressive disorder features]] was credible enough that coders rated its fidelity and prompt adherence near the maximum, and every active condition — virtual consultation alone or in either order with case discussion — improved knowledge over the control. Ordering changed the consultation rather than the score: discussing the case before interviewing the virtual patient produced the broadest symptom coverage and the highest [[motivation|intrinsic motivation]] but the lowest empathy on the exploration dimension, while consulting first produced the narrowest coverage. The authors read the platform as a scaffold for structured questioning and diagnostic exploration rather than a route to autonomous diagnostic accuracy.

## Key Findings

- **AI case discussion beat the lecture-only control.** The AI-assisted discussion group outscored the control on the post-test, while the peer-discussion group did not differ significantly from either condition.
- **The virtual patient simulated credibly.** Two coders rated fidelity and prompt adherence close to the maximum of the scale in all three consultation conditions.
- **Every active condition improved knowledge.** Virtual consultation alone and both sequences of discussion and consultation raised post-test scores above the shared control group.
- **Sequence decided how much of the interview students covered.** Discussion before consultation addressed the most thematic categories; consultation before discussion addressed the fewest.
- **Discussion first carried the motivation benefit.** Only the discussion-then-consultation group reported significantly higher [[motivation|intrinsic motivation]] than the virtual-consultation and control groups.
- **Empathy favored consulting without prior discussion.** The virtual-consultation group scored higher on the exploration dimension of [[empathy|empathy]] than the group that discussed the case first.
- **Diagnostic accuracy remained elusive.** Most students in every condition produced no clear diagnosis, which the authors attribute to a task too demanding for novice learners.

## How the two experiments were built

The study ran two concurrent between-subjects experiments on one intelligent platform. Experiment 1 recruited 120 students through social media; one was removed for completing the questionnaire in less than three standard deviations below the mean time, leaving 119 participants aged 15–26 years (M = 18.61, SD = 1.25). Of these, 95 were first-semester first-year students with no psychiatric or clinical exposure (79.8%) and 24 came from other years (20.2%). They were randomly assigned to AI-assisted [[case-based-learning|case discussion]] (30), peer case discussion (30), or a lecture-only control (29). Experiment 2 recruited 90 students; two incomplete records left 88 participants aged 17–23 years (M = 18.53, SD = 1.11), of whom 75 were first-year (85.2%) and 13 from other years (14.8%), assigned to virtual consultation (30), discussion-then-consultation (28), or consultation-then-discussion (30). Both experiments shared the same lecture-only control.

Materials were identical across experiments: a depressive-disorders segment of a psychiatry video recorded by Harbin Medical University, a nine-item knowledge test scored out of 14 points drawn from certified psychotherapist examination questions, and an eight-item, six-point intrinsic motivation scale whose internal consistency was α = 0.944. The AI, ChatGPT-4o, played an expert who gave pedagogical guidance without revealing answers and presented one perspective at a time; in the consultation conditions it played a [[simulation|virtual patient]] named Zhang Xiaoming, configured to DSM-5 depressive-disorder features. Each activity lasted 20 minutes and the full experiment ran roughly 35–50 minutes.

## Knowledge gains and what sequence added

Pre-test scores were equivalent across Experiment 1 groups, and the analysis of covariance on post-test knowledge showed a significant main effect of group, F(2, 115) = 4.85, P = 0.009, η²p = 0.077, 95% CI [0.005, 0.177]. Bonferroni comparisons isolated the AI discussion group (M = 7.83, SD = 1.76) above the control (M = 6.31, SD = 1.37), t(115) = 3.11, Cohen's d = 0.812, 95% CI [0.164, 1.460], P = 0.007; no other pair differed. Intrinsic motivation showed no group effect, F(2, 115) = 0.3, P = 0.741, η²p = 0.005.

In Experiment 2 the pre-test scores differed across conditions, so the authors ran hierarchical regression controlling for baseline knowledge. All three active groups outscored the control: virtual consultation β = 0.29, t(112) = 2.62; discussion-then-consultation β = 0.28, t(112) = 2.60; and consultation-then-discussion β = 0.31, t(112) = 2.84, with ΔR² = .085 over the baseline model. A pre-test-by-condition interaction was significant for the discussion-then-consultation sequence (B = 0.771, t(109) = 2.50, P = 0.014), and the final model's standardized interaction was β = 0.35, t(111) = 3.53, meaning students with stronger [[prior-knowledge|prior knowledge]] gained more under that ordering. Intrinsic motivation showed a significant group effect, F(3, 112) = 3.41, P = 0.02, η²p = 0.084: the discussion-then-consultation group (M = 5.50, SD = 0.46) exceeded the virtual-consultation group (M = 5.1, SD = 0.59, P = 0.034) and the control (M = 5.12, SD = 0.56, P = 0.047).

## Consultation quality: what ordering changed

Two researchers coded consultation comprehensiveness as the number of distinct themes covered from a list of 12. The one-way ANOVA was significant, F(2, 85) = 4.21, P = 0.018, η²p = 0.090, and the discussion-then-consultation group (M = 5.79, SD = 2.13) covered more themes than the virtual-consultation group (M = 4.2, SD = 1.88), t(85) = 2,80, Cohen's d = 0.736, P = 0.019. Diagnostic accuracy did not differ (Kruskal-Wallis P = 0.088): Table 3 shows 19 no-clear-diagnosis cases in each of the virtual and discussion-first groups against 26 in the consultation-first group. Communication quality was statistically flat — coherence P = 0.052, fluency P = 0.968, proportion of in-depth questions P = 0.055. Empathy separated on the exploration dimension, F(2, 84) = 4.41, P = 0.015: the virtual-consultation group (M = 2.71, SD = 0.38) scored above the discussion-then-consultation group (M = 1.16, SD = 0.40), t(84) = 2.81, Cohen's d = 0.742, P = 0.018. Gender mattered only for emotional response, where female participants (M = 1.72, SD = 0.19) scored above male participants (M = 0.56, SD = 0.42), F(1, 84) = 6.45, P = 0.013.

## Why the discussions stayed shallow

Interaction coding used Gunawardena's interaction analysis model. Both groups concentrated in Phase I, sharing and comparing information (peer 339 against AI 167 for the core category), and a Fisher's exact test on total frequencies found the peer group interacted more, P < 0.001. The authors argue that the AI guided analysis of symptoms, causes, and diagnoses but did not push students to express divergent views, evaluate conflicting interpretations, or negotiate differences — so knowledge rose without the higher phases of co-construction. They also note the prompts may have produced overly lengthy responses and that current AI interaction can feel instrumental, which fits the null motivation result. Simulation checks supported the comparison: fidelity was 1.95 ± 0.15, 1.96 ± 0.18 and 1.97 ± 0.18 across the three conditions, with prompt adherence similarly high; inter-rater agreement was Cohen's Kappa 0.798 in Experiment 1 and 0.652 in Experiment 2.

## What this means for practice

- **Medical educators.** Put the case discussion before the patient interview when the goal is a thorough history and motivated students: the order raised coverage and intrinsic motivation relative to consulting alone, though it lowered empathy on the exploration dimension.
- **Instructional designers.** Prompt the AI to expose disagreement rather than deliver one polished perspective. Students in both discussion conditions stayed in the information-sharing phase, so a case-discussion prompt needs explicit moves that surface conflicting interpretations and require students to resolve them.
- **Clinical skills faculty.** Treat the virtual patient as communication practice, not diagnostic assessment. Most students failed to reach a clear diagnosis in every condition, so pair the simulation with a virtual tutor that guides reasoning during the interview.
- **Researchers.** Replicate with advanced students and parallel test forms. The study used the same control group in both experiments, largely identical pre- and post-tests, and a single immediate motivation measure.

## Limitations

- The lecture-only control group was shared across Experiments 1 and 2, so cross-experiment comparisons involving the control are not fully independent, and virtual consultation was not compared with standardized-patient interviews.
- The sample skewed young and female — more than 80% of participants across both experiments were female — and the authors report a gender difference on the emotional-response dimension (female M = 1.72, SD = 0.19; male M = 0.56, SD = 0.42).
- Between 63% and 87% of students failed to reach a clear diagnosis, suggesting the task exceeded novice learners; whether the effects hold for advanced medical students is untested.
- The knowledge test had relatively few items and the pre- and post-test forms were largely identical; intrinsic motivation was measured once, immediately after a 20–50 minute intervention.
- Interaction coding depended on two raters (Cohen's Kappa 0.798 in Experiment 1, 0.652 in Experiment 2), and the authors note the AI prompts were not systematically varied, so alternative prompt designs might change the results.

## Citation

Gao, H., Zhao, B., Hu, X., Liu, C., Zhang, D., & Zhang, H. (2026). [Effects of AI-assisted case discussion and virtual patient consultation on medical students’ learning outcomes](https://doi.org/10.1186/s12909-026-10901-8). *BMC Medical Education*.
