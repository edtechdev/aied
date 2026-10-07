---
title: "Responsible Institutional Analytics: Interpreting Bias with AI Support"
created: "2026-10-07T09:30:00-04:00"
updated: "2026-10-07T09:30:00-04:00"
type: article
foundations: [theories-and-frameworks, human-ai-collaboration]
pedagogy: [scaffolding, metacognition]
technology: [learning-analytics, generative-ai, rag]
methods: [qualitative-research, network-analysis, usability-research]
institutions: [governance]
ethics: [bias-mitigation, explainable-ai, trust]
research_method: [case study]
level: [higher ed]
audience: [administrators, learning analytics designers, instructors]
page_kind: [framework]
sources: ['raw/papers/factria-responsible-institutional-analytics-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-07"
    agent: hermes-agent
---

> **Synthesis:** Institutional analytics dashboards inform decisions across a university, yet their indicators are shaped by data limitations, analytical choices, and contextual factors that readers often overlook. This paper introduces FACTRIA, a framework that organizes those biasing factors into four areas — the analytics pipeline, institutional context, course-level characteristics, and demographics — and operationalizes it in a [[generative-ai]] chatbot that uses framework-bound [[rag]] to prompt reflection rather than supply answers. In a qualitative think-aloud study with 11 [[stakeholders]] across four authentic analytics cases, participants addressed an average of 1.41 relevant sub-factors without the chatbot and 3.45 with it, and a transition network analysis showed the assistant's reflective prompts driving the change. The authors present the work as a proof of concept for supporting more responsible, context-aware interpretation of [[learning-analytics]].

## Key Findings
1. FACTRIA organizes the factors that condition responsible interpretation of institutional analytics into four areas — the analytics pipeline, institutional context, course characteristics, and demographics — each broken into specific sub-factors.
2. In a think-aloud study with 11 stakeholders (4 male, 7 female) at a Spanish [[higher-ed|university]], participants addressed an average of 1.41 sub-factors per case without the chatbot and 3.45 with it (p < .001, Cohen's d = 2.15).
3. The increase held when only each participant's first assigned case was analyzed (1.73 to 3.55, d = 4.49) and only their second case (1.09 to 3.36, d = 1.7866), both p < .001.
4. Transition network analysis coded the assistant's moves as reflection prompts (46), validations (40), explanations (26), and interpretation prompts (20), while the most prominent user move was sharing insight (84 instances).
5. Ten of 11 participants rated the chatbot 4 or 5 out of 5 for meaningful support in contextualizing data; the overall System Usability Scale score was 70.84 ± 16.39, above the conventional good-usability threshold.
6. Case narratives show participants moving from direct readings — treating a lower box plot as a "weaker course" or a high interaction count as course quality — toward conditional interpretations involving aggregation, class size, workload, and indicator definitions.
7. Reading the framework beforehand was not enough: even after reviewing FACTRIA, participants' initial interpretations considered only about 1.5 of the relevant factors on average.

## The FACTRIA framework
FACTRIA — the Framework of Factors in the Analytical process and the data Context for Responsible Institutional Analytics — synthesizes scattered evidence on biasing factors into four categories. Pipeline factors cover data quality and the choice of analysis and [[visualization]] techniques and their assumptions. Institutional factors cover academic units, an institution's educational framework, and university modality. Course factors cover class size and course level, [[learning-design]], students' workload, and student performance — for instance, satisfaction scores that penalize larger classes penalize [[teacher-role|instructors]] for factors beyond their control. Demographic factors cover gender, age, and language, where non-native accents can lower evaluations without any measured difference in learning. FACTRIA is framed as a flexible, extensible framework that scaffolds reflection rather than prescribing decisions.

## A chatbot that prompts, not answers
The FACTRIA-aware chatbot is a web-based [[llm]] system grounded in the framework through [[rag]] and a deterministic state machine that cycles users through the factors relevant to a given visualization. It supplies on-demand definitions of terms such as "weighted grade" or the Shannon index, then asks questions that guide reasoning instead of offering conclusions — an approach the authors describe as [[scaffolding]] for reflective [[metacognition]]. This distinguishes it from [[conversational-ai]] tools that generate explanations, such as VizChat and Chat-LAD, by targeting critical reflection at the institutional level rather than explanation alone. It keeps a human in the loop ([[human-in-the-loop-ai]]): the system supports interpretation but explicitly declines to recommend decisions, and the authors flag the risks of automation bias and uncritical acceptance ([[human-ai-collaboration]]).

## What the study found
The qualitative think-aloud study ([[qualitative-research]]), coded by two researchers (Cohen's k = 0.76), recorded 11 stakeholders interpreting four real analytics cases, first without and then with the chatbot. Participants began with narrow, visually driven readings. In one case a lecturer read gender gaps in satisfaction scores as a direct portrayal of bias before the chatbot prompted them to weigh sample sizes and student–professor gender interactions. In another, a participant moved from judging courses "simply weaker" to considering class size and workload. The [[network-analysis|transition network analysis]] showed the assistant's prompts structuring the exchange while users stayed in an interpretive mode, generating their own reasoning; a [[usability-research|System Usability Scale]] questionnaire recorded the usability results.

## Reading bias responsibly
Responsible interpretation, on this account, means accounting for the factors that condition what a visualization can legitimately support. Aggregate views protect [[privacy]] but can obscure discrimination at finer grain; institutional and demographic contexts shape indicators such as [[student-experience|student satisfaction]] and dropout risk, which varies by discipline. The framework addresses a gap left by higher-level governance frameworks such as DELICATE and SHEILA, which operate at the institutional level ([[governance]], [[educational-policy-ai]]), and by visualization-literacy tools such as CALVI that focus on graphical features. FACTRIA instead specifies the factors a reader should weigh at the moment of interpretation, aiming to surface implicit assumptions and keep claims proportionate to evidence — connections to [[bias-mitigation]], transparency, and [[trust]] in analytics.

## What this means for practice
- **Instructors.** Before acting on a dashboard indicator about teaching or a course, ask what aggregation level it uses, how large the underlying sample is, and how class size, workload, and learning design could shape it.
- **Administrators.** Embed factor-aware guidance directly in analytics tools, since contextual cues at the point of interpretation help prevent premature conclusions and support more transparent, evidence-aligned decisions.
- **Learning analytics designers.** Build guided, framework-bound reflection prompts rather than explanatory answers, and provide on-demand definitions of domain terms so less-experienced users can read the visualization.

## Limitations
- The sample was 11 participants, each engaging with two of four cases, so observations per case were limited; the authors treat the study as exploratory and emphasize case-level results over comparative ones.
- Conditions were not counterbalanced: all participants read FACTRIA and interpreted without the chatbot before interpreting with it, so chatbot effects cannot be fully separated from growing familiarity by the second case.
- Possible automation bias and over-reliance on chatbot guidance were not measured.
- Think-aloud data may show reactivity effects, and verbalized reasoning is treated as evidence of expressed sense-making rather than comprehension.
- The study ran at a single Spanish university, and the authors present it as a proof of concept, noting FACTRIA may need adaptation across institutional contexts.

## Citation
Marques, F., Ortiz-Beltrán, A., Amarasinghe, I., & Hernández-Leo, D. (2026). [Responsible Institutional Analytics: Interpreting Bias with AI Support](https://arxiv.org/abs/2610.07205). arXiv:2610.07205.