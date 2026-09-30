---
title: "The Effects of Agent Type and Feedback Style on Self-Directed Learning: A Mixed-Methods Study"
created: "2026-09-30T12:34:56-04:00"
updated: "2026-09-30T12:34:56-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071069.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [experiment, thematic analysis]
discipline: [learning sciences]
level: [graduate]
audience: [instructors, instructional designers, researchers, educational technology developers]
foundations: [human-ai-collaboration, agency, limitations-in-aied-research]
pedagogy: [self-directed-learning, self-regulated-learning, metacognition, scaffolding, socratic-method]
technology: [pedagogical-agent, llm, generative-ai, technology-acceptance-model]
assessment: [feedback, ai-feedback-quality, feedback-literacy, learning-gains]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Han, Cao, Wang and Luo ran a 2 × 2 mixed factorial experiment with 51 postgraduate students in a graduate educational technology course, crossing agent type (customized vs. general-purpose) as a between-subjects factor with feedback style (Socratic vs. directive) as a within-subjects factor. Each student completed two [[learning-design|instructional design]] tasks, receiving [[socratic-method|Socratic]] feedback in Week 1 and directive feedback in Week 2, and the study combined coded interaction logs, a learning experience questionnaire, gain scores and thematic analysis of reflection reports. Customized agents produced feedback that was rated higher in accuracy and specificity, Socratic feedback was associated with stronger comprehension monitoring, and directive feedback with higher cognitive load. The most important qualification is that the two feedback styles were delivered in a fixed, non-counterbalanced sequence, so the feedback-style contrasts are condition-related patterns rather than clean causal effects.

## Key Findings

- **Customization improved the quality of the feedback itself.** Agent type showed a significant main effect on feedback accuracy (F(1,49) = 28.561, p < 0.001, η²p = 0.368) and specificity (F(1,49) = 10.492, p = 0.002, η²p = 0.176), both large or moderate effects.
- **Feedback style moved the quality dimensions of specificity and prioritization.** Directive feedback scored higher on prioritization of essential features (F(1,49) = 10.635, p = 0.002, η²p = 0.178) and on specificity (F(1,49) = 7.269, p = 0.010, η²p = 0.129). No interaction reached significance across the five [[ai-feedback-quality]] dimensions.
- **Socratic feedback was associated with more regulatory engagement.** Feedback style had significant main effects on task orientation (F(1,49) = 14.328, p < 0.001, η²p = 0.226) and comprehension monitoring (F(1,49) = 25.087, p < 0.001, η²p = 0.339), with both higher under Socratic feedback across the two agent types. Feedback regulation showed no main effect of either factor but a significant interaction (F(1,49) = 4.146, p = 0.047, η²p = 0.078).
- **Directive feedback carried a higher processing cost.** Cognitive load was the only learning-experience dimension with a significant feedback-style effect (F(1,49) = 6.222, p = 0.016, η²p = 0.113), and it was higher under directive feedback. The other eight dimensions showed no significant main or interaction effects.
- **The agent-type advantage in outcomes was conditional.** Gain scores were higher overall under Socratic feedback (F(1,49) = 15.218, p < 0.001, η²p = 0.237), and the agent-type main effect was not significant (F(1,49) = 0.961, p = 0.332, η²p = 0.019). A significant interaction emerged (F(1,49) = 4.807, p = 0.033, η²p = 0.089): under directive feedback the customized agent produced significantly higher gains than the general-purpose agent (F(1,49) = 6.843, p = 0.012, η²p = 0.123), whereas under Socratic feedback the two did not differ (F(1,49) = 0.147, p = 0.703, η²p = 0.003). Mean gain scores were 13.07 (SD = 8.37) for customized plus Socratic, 13.88 (SD = 6.28) for general-purpose plus Socratic, 11.33 (SD = 6.05) for customized plus directive and 7.67 (SD = 3.45) for general-purpose plus directive.

## How the study was built

Participants were 51 master's students (46 female, 90.2%; 5 male, 9.8%) in a fall 2025 course, after three of an initial 54 were excluded for incomplete questionnaire data. The customized agent group held 27 students and the general-purpose group 24. All four agents ran on the same model (Kimi-32K) on the Coze platform with identical interfaces and latency controls, so the manipulation was configuration rather than model: customized agents added two knowledge bases (an instructional design textbook and a seven-dimension evaluation rubric) and a fixed workflow, while general-purpose agents relied on prompts alone.

Feedback quality was coded on five dimensions (criteria-based relevance, specificity, accuracy, prioritization of essential features, supportive tone) at 1-5, with inter-rater reliability ICC = 0.758. Self-regulatory behaviors were coded on three dimensions (task orientation, comprehension monitoring, feedback regulation), ICC = 0.868. Learning experiences came from a questionnaire covering [[technology-acceptance-model|technology acceptance]], engagement, [[critical-thinking|critical thinking]] disposition and cognitive load, with Cronbach's α = 0.725-0.913. [[learning-gains|Gain scores]] were the difference between revised and initial instructional design drafts, scored on a 100-point rubric. Analysis used 2 × 2 mixed-design ANOVAs in SPSS 24.0, and the qualitative strand applied Braun and Clarke's [[qualitative-research|thematic analysis]] to reflection reports, yielding 16 nodes across 10 categories in three themes.

## The qualitative strand

Theme 1 held that Socratic feedback supported reflective monitoring while directive feedback was linked to overload. Follow-up [[prompt-engineering|prompting]] appeared only in the Socratic groups, and students described being guided to reason rather than told the answer. Codes for overload and resistance were more frequent in the directive groups. The authors note the tension that codes for deep logic reflection appeared in all groups, with higher frequencies in the directive groups, so deeper reflection was not exclusive to Socratic feedback.

Theme 2 found selective, [[agentic-ai|agentic]] use of feedback. Of 114 codes for critical rejection, the Socratic groups showed relatively higher frequencies; of 446 codes for complete adoption, the customized-plus-directive group accounted for 122. Students described filtering suggestions that lacked specifics and treating AI as a thinking partner rather than a substitute.

Theme 3 linked customized agents to [[trust]] and perceived credibility: codes for clear and actionable feedback were more prevalent in the customized groups, while of 68 codes on contextual deficit, the general-purpose-plus-directive group was dominant. These accounts align with the [[quantitative-research|quantitative]] accuracy and specificity advantage, and the authors read the clearer, more contextually aligned feedback as supporting stronger perceived credibility.

## What this means for practice

- **Match the feedback style to the goal.** Socratic feedback was associated with comprehension monitoring (η²p = 0.339) and directive feedback with higher cognitive load (η²p = 0.113); choose the style that fits whether you want reflection or efficient revision.
- **Invest in customization where learners act directly on suggestions.** The customized agent's advantage in gain scores appeared only under directive feedback (F(1,49) = 6.843, p = 0.012), so domain grounding pays off when explicit suggestions are meant to be implemented.
- **Do not expect better feedback to fix everything.** Customization improved accuracy and specificity but did not significantly change self-regulatory behaviors, learning experiences or outcomes overall; learners still had to interpret and apply the feedback.
- **Design for selective use.** Students rejected vague feedback and adopted specifics, so feedback that names a concrete problem and example is more likely to be taken up.
- **Watch the implementation load of directive feedback.** Multiple concrete suggestions per round were described as overloading, so pacing and prioritization matter when feedback is explicit.

## Limitations

- The sample was 51 postgraduate students from a single university and discipline with an imbalanced gender distribution (46 female, 5 male), which limits generalizability.
- The two feedback styles were administered in a fixed sequence, Socratic in Week 1 and directive in Week 2, rather than counterbalanced, so order-related influence cannot be ruled out and the style contrasts are not clean causal estimates.
- Task equivalence rested on parallel design and a shared rubric rather than independent baseline difficulty tests.
- Learning experiences came mainly from self-report [[self-report-measures|questionnaires]] and outcomes were limited to short-term task improvement, which may not reflect deeper conceptual learning, transfer or longer-term [[self-directed-learning|SDL]] development.

## Citation

Han, X., Cao, J., Wang, Z., & Luo, H. (2026). [The Effects of Agent Type and Feedback Style on Self-Directed Learning: A Mixed-Methods Study](https://doi.org/10.3390/bs16071069). *Behavioral Sciences*, 16(7), 1069.