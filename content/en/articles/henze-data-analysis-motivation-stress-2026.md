---
title: "AI-supported data analysis boosts student motivation and reduces stress in physics education"
created: "2026-11-11T07:36:30-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/henze-data-analysis-motivation-stress-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1719670"
source_depth: full text
confidence: high
foundations: [ai-literacy]
pedagogy: [scaffolding, motivation]
technology: [generative-ai, conversational-ai]
assessment: [feedback]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Henze and colleagues randomly assigned 50 student teachers to analyze pendulum data with either a custom GPT-4o [[conversational-ai|chatbot]] or Microsoft Excel, on identical guided tasks. Both groups learned about the same amount: the chatbot gave no test-score advantage. What it did produce was a markedly better experience — more [[student-engagement|engagement]] and enjoyment, less stress — and students rated the AI method as more effective and preferred it. The authors trace that gap less to the model than to the [[feedback|feedback]] the chatbot gave and the spreadsheet could not, which makes responsive [[scaffolding|scaffolding]] the likely mechanism. The result is a caution for procurement: satisfaction and perceived effectiveness will favor the AI tool even when learning is unchanged.

## Key Findings

1. **The chatbot did not improve learning.** Both groups gained from pre-test to post-test, and the AI group's advantage disappeared once prior scores were taken into account. One guided session with a tutor-style chatbot did not raise test performance.
2. **Gains were small and uneven across topics.** Improvement was modest in both conditions and clustered in data evaluation, with the physics topics moving less consistently.
3. **The AI group felt much better while working.** They reported more positive and less negative [[social-emotional-learning|emotional experience]], and higher motivation, than the spreadsheet group.
4. **They also rated the method as more effective and preferred it.** Students judged the chatbot approach more effective than Excel and chose it, even though their test scores were the same.
5. **The task did not feel easier.** Perceived difficulty and perceived [[learning-gains|learning gains]] did not differ between groups, so the emotional gap was not simply a matter of the AI group finding the work lighter.
6. **The groups started equivalent.** Prior interest in and commitment to technology did not differ, so the affective results are not explained by students who already liked digital tools.
7. **The comparison confounds AI with responsiveness.** Excel gave no feedback beyond written instructions while the chatbot answered, hinted and visualized, so the benefit may come from adaptive feedback that need not involve AI at all.

## What the study did

The sample was 50 student teachers at the University of Cologne, most of them in bachelor programs, aged 19 to 37. Participants chose seats at random from pre-prepared workstations loaded with one of the two tools, with the software hidden during selection, and took the pre-test before they knew their group. The Excel group and the AI group completed the same paper task sheets: one thread-pendulum experiment to determine gravitational acceleration and one spring-pendulum experiment to calculate the spring constant.

*ExperiMentor* was built on GPT-4o through the OpenAI GPT Creator and used over one summer. Its system prompt had three parts. It demanded an identification code before any [[pedagogy|pedagogical]] exchange, so chat logs could be linked to survey data. It defined the model as a mentor rather than a solver and suppressed direct answer-giving, offering explanations, formulas and hints only on request or when it detected an error. It also forced a step-by-step rhythm: after each analytical step the chatbot paused, displayed intermediate results and asked the student "What should we do next?" Students saw outputs such as results and [[visualization|visualizations]], with optional code previews, but never worked in the code environment itself.

The Excel group received a spreadsheet with the measurements already entered and could edit it freely, but could not search for help outside Excel and the printed sheets. The AI group received the same spreadsheet and could transfer, copy or upload the table into the chat. The intervention was monitored, the groups were seated apart and participants were told not to discuss the tasks, although the authors concede that some contact in the shared room was possible.

Performance was scored on single-choice items covering thread-pendulum physics, spring-pendulum physics and data analysis competencies. Because the distributions were not normal, within-group change was tested with non-parametric signed-rank tests and between-group comparison used an analysis of covariance with pre-test score as the covariate. The authors report that the group-by-measurement interaction was non-significant in every model but that higher-order interactions involving the covariate were significant, so the assumption of equal regression slopes was not fully met and they ask for the covariance analysis to be read with caution. Emotional and motivational items were analyzed with non-parametric rank-sum tests.

## Why the affective gap appeared

The authors read the learning results through cognitive load theory and Vygotsky's [[sociocultural-learning|zone of proximal development]]. Excel's interface, with its manual data manipulation, is described as imposing extraneous load that consumed working memory which could otherwise have gone to germane processing; *ExperiMentor*, acting as a more knowledgeable other, could lower that load and keep the task inside the learner's zone with immediate, contextual guidance. The same frame explains why the thread-pendulum domain moved least: it requires abstract conceptual reasoning that neither tool scaffolded well.

The emotional results are read through [[self-determination-theory|self-determination theory]]. The chatbot's responsiveness is said to support autonomy, competence and relatedness, while Excel's static sheet offered no adaptive feedback and left students handling technical operations and conceptual understanding at once. That is also the study's central confound, and the authors state it plainly: the comparison is between a tool that responded and a tool that did not, not between AI and no AI. The motivational advantage may therefore come from adaptive feedback that could in principle be delivered without AI at all. They also name novelty as a partial explanation, and describe an affective-cognitive dissonance in which students feel more competent and supported without scoring higher on the objective test. Because the paper task sheets scaffolded both conditions, the authors suggest that the presence of structure, rather than the tool, may be what kept performance comparable.

## What this means for practice

- **Instructors:** Do not expect a chatbot to raise test scores in a single guided session. In this study it did not, and the honest measure is an unaided post-test rather than how supported students felt while working.
- **Designers:** The features implicated here are conversational and structural, not model-specific: a mentor-not-solver prompt, stepwise pauses that force the student to choose the next move, and feedback tied to the student's own data. Excel users also preferred the AI method, which the authors attribute partly to the reduced manual calculation it required.
- **Researchers:** Measure affect and achievement separately, because they moved in opposite directions. A control that offers the same feedback without [[generative-ai|generative AI]] would separate interactivity from the model, and the chatbot's scientific outputs need systematic validation, which this study did not perform.
- **Administrators:** Satisfaction and perceived effectiveness will favor the AI tool even when learning is unchanged, so procurement decisions based on student ratings alone will overstate the benefit.

## Limitations

Fifty student teachers from one university, most of them in bachelor programs, form a small and homogeneous sample, and the intervention lasted a single session, so the study captures early effects rather than sustained learning. The closed-ended pre- and post-tests may miss conceptual change or transfer, and the emotional measures are [[self-report-measures|self-report]], with no separation of intrinsic from [[motivation|extrinsic motivation]]. Most importantly, the conditions differed in more than the tool: the Excel group had no feedback beyond written instructions while *ExperiMentor* answered, hinted and visualized, so the affective contrast confounds AI with interactivity. The authors did not systematically validate the chatbot's scientific correctness, and the shared room allowed some cross-group contact.

## Citation

Henze, J., Lademann, J., Becker-Genschow, S., & Bresges, A. (2026). [*AI-supported data analysis boosts student motivation and reduces stress in physics education*](https://doi.org/10.3389/feduc.2026.1719670). Frontiers in Education, 11:1719670. https://doi.org/10.3389/feduc.2026.1719670
