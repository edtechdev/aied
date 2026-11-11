---
title: "AI-supported data analysis boosts student motivation and reduces stress in physics education"
created: "2026-11-11T07:36:30-05:00"
updated: "2026-11-11T08:09:35-05:00"
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
verified: [citation, numbers, links]
---

> **Synthesis:** Henze and colleagues (2026) randomly assigned 50 student teachers at the University of Cologne to analyze thread- and spring-pendulum data with either *ExperiMentor*, a custom GPT-4o chatbot, or *Microsoft Excel*, on identical guided tasks. Both groups gained from the 31-item pre-test to the 39-item post-test, and an ANCOVA found no significant difference between them: the group factor accounted for a partial η² below 0.01 in every model, and the pooled Hake index was g = 0.02. The AI group nevertheless reported far more [[student-engagement|engagement]] and enjoyment and less stress, with negative emotional experience at 0.64 against 1.56. The authors attribute that gap less to AI than to the [[feedback|feedback]] the chatbot supplied and Excel did not, making [[scaffolding|scaffolding]] the likely mechanism.

## Key Findings

1. **The tool did not change how much students learned.** Both groups improved from pre-test to post-test: the Excel group from M = 7.72 to M = 8.96 (p = 0.04, rank-biserial correlation −0.54) and the AI group from M = 7.64 to M = 9.92 (p < 0.01, −1). An ANCOVA controlling for pre-test scores found no group effect: the group × measurement interaction was p = 0.39 for the total score, and the group factor accounted for a partial η² below 0.01 in every model.
2. **Within-group gains were uneven across domains.** In the Excel group only data evaluation improved significantly (p < 0.01, −0.78); thread pendulum (p = 0.60) and spring pendulum (p = 0.32) did not. The AI group improved on spring pendulum (p < 0.01, −0.8) and data evaluation (p < 0.01, −0.86), with thread pendulum borderline (p = 0.05, −0.53).
3. **Normalized gains were small in both conditions.** The pooled Hake index was g = 0.02; by group it was 0.02 for AI and 0.01 for Excel. Domain values ran from −0.004 (Excel, thread pendulum) to 0.02.
4. **The AI group reported a much better emotional experience.** Positive emotional learning experience averaged 2.26 against 1.74 (p = 0.01, −0.392), negative emotional learning experience 0.64 against 1.56 (p < 0.01, 0.717), and motivation 2.28 against 1.56 (p < 0.01, −0.0584).
5. **Students also rated the AI method as more effective and preferred it.** Method effectiveness was 2.52 against 1.88 (p < 0.01, −0.459) and perception of methods 2.44 against 1.68 (p < 0.01, −0.65). Method comparison, which asked students to weigh the AI approach against Excel, was 1.04 against 1.89 (p < 0.01, 0.646).
6. **The groups did not differ on difficulty or perceived learning.** Challenges averaged 0.93 against 1.13 (p = 0.33, Cohen's d = 0.294), and perceived learning gains 1.38 against 1.26 (p = 0.66, −0.07). The affective gap therefore did not track how hard the task felt.
7. **The groups began equivalent.** On all nine pre-test technology-commitment and interest items, no comparison reached significance (every p ≥ 0.17), so the post-test differences are not explained by prior attitudes toward technology or data analysis.

## What the study did

The sample was 50 student teachers at the University of Cologne: 33 male and 17 female, aged 19–37 years (M = 24.04), 35 in a Bachelor of Arts program and 15 in a Master of Education program. Participants chose seats at random from pre-prepared workstations loaded with one of the two tools, with the software hidden during selection, and took the pre-test before they knew their group. The Excel group (n = 25) and the AI group (n = 25) completed the same paper task sheets: one thread-pendulum experiment to determine gravitational acceleration and one spring-pendulum experiment to calculate the spring constant.

*ExperiMentor* was built on GPT-4o through the OpenAI GPT Creator and used between June and August 2024. Its system prompt had three parts. It demanded an identification code before any pedagogical exchange, so chat logs could be linked to survey data. It defined the model as a mentor rather than a solver and suppressed direct answer-giving, offering explanations, formulas and hints only on request or when it detected an error. It also forced a step-by-step rhythm: after each analytical step the chatbot paused, displayed intermediate results and asked the student "What should we do next?" Students saw outputs such as results and visualizations, with optional code previews, but never worked in the code environment itself.

The Excel group received a spreadsheet with the measurements already entered and could edit it freely, but could not search for help outside Excel and the printed sheets. The AI group received the same spreadsheet and could transfer, copy or upload the table into the chat. The intervention was monitored, the groups were seated apart and participants were told not to discuss the tasks, although the authors concede that some contact in the shared room was possible.

Performance was scored on single-choice items covering thread-pendulum physics, spring-pendulum physics and data analysis competencies. Because the Shapiro-Wilk test indicated non-normal distributions throughout, within-group change was tested with two-sided Wilcoxon signed-rank tests and effect sizes were reported as rank-biserial correlations. Between-group comparison used an ANCOVA with pre-test score as the covariate and equal group sizes of 25. The authors report that the group × measurement interaction was non-significant in every model but that higher-order interactions involving the covariate were significant in all models, so full homogeneity of regression slopes was not satisfied and they ask for the ANCOVA to be read with caution. Emotional and motivational items were analyzed with Wilcoxon rank-sum tests.

## Why the affective gap appeared

The authors read the learning results through cognitive load theory and Vygotsky's zone of proximal development. Excel's interface, with its manual data manipulation, is described as imposing extraneous load that consumed working memory which could otherwise have gone to germane processing; *ExperiMentor*, acting as a more knowledgeable other, could lower that load and keep the task inside the learner's zone with immediate, contextual guidance. The same frame explains why the thread-pendulum domain moved least: it requires abstract conceptual reasoning that neither tool scaffolded well.

The emotional results are read through self-determination theory. The chatbot's responsiveness is said to support autonomy, competence and relatedness, while Excel's static sheet offered no adaptive feedback and left students handling technical operations and conceptual understanding at once. That is also the study's central confound, and the authors state it plainly: the comparison is between a tool that responded and a tool that did not, not between AI and no AI. The motivational advantage may therefore come from adaptive feedback that could in principle be delivered without AI at all. They also name novelty as a partial explanation, and describe an affective-cognitive dissonance in which students feel more competent and supported without scoring higher on the objective test. Because the paper task sheets scaffolded both conditions, the authors suggest that the presence of structure, rather than the tool, may be what kept performance comparable.

## What this means for practice

- **Instructors:** do not expect a chatbot to raise test scores in a single guided session. In this study it did not, and the honest measure is an unaided post-test rather than how supported students felt while working.
- **Designers:** the features implicated here are conversational and structural, not model-specific: a mentor-not-solver prompt, stepwise pauses that force the student to choose the next move, and feedback tied to the student's own data. Excel users also preferred the AI method, which the authors attribute partly to the reduced manual calculation it required.
- **Researchers:** affect and achievement need separate measurement, because they moved in opposite directions. A control that offers the same feedback without generative AI would separate interactivity from the model, and the chatbot's scientific outputs need systematic validation, which this study did not perform.
- **Administrators:** satisfaction and perceived effectiveness will favor the AI tool even when learning is unchanged, so procurement decisions based on student ratings alone will overstate the benefit.

## Limitations

Fifty student teachers from one university, most of them in bachelor programs, form a small and homogeneous sample, and the intervention lasted a single session, so the study captures early effects rather than sustained learning. The closed-ended pre- and post-tests may miss conceptual change or transfer, and the emotional measures are self-report, with no separation of intrinsic from extrinsic motivation. Most importantly, the conditions differed in more than the tool: the Excel group had no feedback beyond written instructions while *ExperiMentor* answered, hinted and visualized, so the affective contrast confounds AI with interactivity. The authors did not systematically validate the chatbot's scientific correctness, and the shared room allowed some cross-group contact.

## Citation

Henze, J., Lademann, J., Becker-Genschow, S., & Bresges, A. (2026). [*AI-supported data analysis boosts student motivation and reduces stress in physics education*](https://doi.org/10.3389/feduc.2026.1719670). Frontiers in Education, 11:1719670. https://doi.org/10.3389/feduc.2026.1719670
