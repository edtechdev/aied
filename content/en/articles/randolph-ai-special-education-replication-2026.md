---
title: "Replicating and expanding the use of artificial intelligence to support special education practice: a mixed-methods investigation"
created: "2026-11-27T05:44:00-05:00"
updated: "2026-11-27T05:44:00-05:00"
type: article
published: "2026-08-17"
sources: ['raw/papers/randolph-ai-special-education-replication-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
discipline: []
level: [higher ed]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Randolph and colleagues replicated and expanded earlier work on [[generative-ai|ChatGPT]] support for writing individualized education program (IEP) goals. In a counterbalanced scenario study, 111 [[higher-ed|undergraduates]] and [[graduate-education|graduates]] from four universities wrote goals alone and with AI, and the goals were scored with the R-GORI rubric and SMART criteria. AI-assisted goals received slightly higher mean ratings in simple comparisons, but the main effect of condition was not significant in mixed-effects models that accounted for repeated measures within participants. Benefits appeared stronger for less confident writers, and completing the AI condition first was associated with later independent writing. Expert, participant and AI ratings agreed only weakly in absolute terms. Participants described AI broadly as useful but conditional on professional knowledge, verification, individualization and privacy safeguards.

## Key Findings
1. **Mean comparisons favored AI assistance.** Participants and ChatGPT rated AI-assisted goals slightly higher than independently written goals on the goal-quality rubric, and ChatGPT also favored them on SMART criteria.
2. **The effect did not survive the stronger model.** Once repeated measures within participants were modeled, the main effect of condition on participant self-ratings was not statistically significant, and condition did not interact with scenario.
3. **Less confident writers benefited more.** Exploratory models found that the gap between AI-assisted and independent goals was larger among participants who reported lower comfort writing IEP goals.
4. **Order may have carried over.** Participants who saw the AI condition first had a different pattern of condition differences, consistent with the prompt template or generated goal serving as a model for later independent writing.
5. **Ratings were not interchangeable.** Absolute agreement between participant self-ratings and ChatGPT scores was poor, and agreement between expert raters and ChatGPT was low, even though ratings were often within one point.
6. **Participants endorsed AI conditionally.** The most frequent coded theme treated AI as a benefit for drafting and workload, but respondents repeatedly required professional knowledge, accuracy checks and individualization.
7. **Human authority remained the norm.** Participants raised privacy, FERPA and HIPAA concerns and argued that educators, not the tool, must make final decisions about students' goals.

## Design and measures

The study replicated Waterfield and colleagues' scenario-based survey with adaptations to free AI tools, instructions, analysis and the addition of SMART criteria. Participants came from special education and related fields at four universities in the United States and included both pre-service and in-service practitioners. Of 155 responses, seven declined consent and 37 were incomplete; 111 complete responses remained. Participants reported living in 8 states, with 71 in Texas. Forty-two indicated they were current practitioners, 65 had never been certified and five had been certified in the past.

Each participant wrote one IEP goal for each of two student scenarios: a sixth-grade student with attention deficit hyperactivity disorder and a specific learning disability in mathematics, and a fourth-grade student with a specific learning disability in reading. Scenario order and condition order were randomized. In the participant-only condition, goals were written without support. In the participant-plus-AI condition, participants completed a structured template and pasted it with a prompt into ChatGPT; at the time of data collection this was GPT-5.3 Instant. After writing, participants rated their own goals with six R-GORI criteria on a binary scale, giving each goal a possible score of 0–6. The authors later scored all goals with the same R-GORI criteria and with five SMART criteria, scored 0–5, using ChatGPT EDU GPT-5.5. Two randomly assigned authors also scored goals with the R-GORI.

Analysis paired direct mean comparisons with linear mixed-effects models that included condition, scenario and their interaction, with participant as a random intercept. Open-ended responses were coded inductively in Taguette; the codebook contained 11 codes ranging from 3 to 101 references.

## What the numbers show

On participant self-ratings, AI-assisted goals scored higher than participant-only goals (M = 5.26 versus M = 4.89), t(208.35) = 2.46, p = 0.015, 95% CI [0.07, 0.67]. ChatGPT's R-GORI scores showed the same pattern (M = 5.13 versus M = 4.68), t(217.97) = 3.41, p < .001, 95% CI [0.19, 0.70], as did its SMART scores (M = 4.22 versus M = 3.33), t(205.88) = 6.15, p < .001, 95% CI [0.60, 1.17].

The mixed-effects model told a more cautious story. For participant self-ratings, condition was not significant (b = −0.25, SE = 0.21, p = 0.237), the condition-by-scenario interaction was not significant (b = −0.23, SE = 0.33, p = 0.490), and the reading scenario scored only slightly higher than the mathematics scenario (b = 0.41, SE = 0.21, p = 0.054). Exploratory models found a condition-by-order interaction (b = 0.63, SE = 0.25, t(108) = 2.46, p = .015) and a condition-by-comfort interaction (b = 0.33, SE = 0.12, t(108) = 2.64, p = .009). Comfort level itself did not predict ratings (b = −0.04, SE = 0.10, p = .720).

Agreement was weak in absolute terms. Participant self-ratings and ChatGPT R-GORI scores had an intraclass correlation of .13, although agreement within one point ranged from 59%–89%. Expert raters and ChatGPT had ICC = .21, with experts scoring about −1.27 points lower on average; exact agreement was 17% and agreement within one point was 50%.

Qualitatively, AI as a benefit appeared 101 times, followed by professional knowledge (n = 24), reviewed for accuracy (n = 21), AI as a disadvantage (n = 20), ethical use and policy (n = 20), individualization (n = 19), prompt generation (n = 14), unsure or neutral (n = 10) and [[cognitive-offloading|overreliance]] (n = 3). Participants described [[prompt-engineering|prompt quality]] as decisive and said a goal may score well on a [[rubrics|rubric]] yet still miss the individual student.

## What this means for practice

- **Instructors.** Treat AI as a scaffold for structure and wording, not as a source of finished goals; require a review against student data before any goal is used.
- **Instructors.** Teach explicit prompt development, since participants said output quality depends on how specifically the student's information and criterion are supplied.
- **Instructors.** Preserve independent practice: demonstrate mastery of goal writing without AI before allowing drafted goals to be submitted.
- **Faculty developers.** Use AI-generated examples as models in teacher preparation, while checking whether exposure actually improves later unaided writing.
- **Institutions.** Set rules about what student information may be entered into AI tools, who reviews the output and who remains accountable for the final [[special-education|special education]] document.

## Limitations

- **Analytic inconsistency.** Group-level t tests favored AI, but the mixed-effects model on participant self-ratings did not find a significant main effect of condition.
- **Carryover from order.** Completing the AI condition first exposed participants to a template and generated goal before independent writing, complicating causal interpretation.
- **Restricted measurement.** The six-item R-GORI subset and SMART criteria emphasize observable, measurable features and may miss instructional relevance and genuine individualization.
- **Weak rater agreement.** Poor absolute agreement among participants, authors and ChatGPT limits confidence in precise score comparisons.
- **Scenario and sample limits.** Hypothetical cases from four universities with mostly novice goal writers do not represent real IEP teams, experienced practitioners, protected student data or long-term skill retention.

## Citation

Randolph, K. M., Quinn, S. E., Sears, J. A., Howorth, S. K., Howerter, C. S., and Merry, K. E. (2026). [Replicating and expanding the use of artificial intelligence to support special education practice: a mixed-methods investigation](https://doi.org/10.3389/feduc.2026.1916444). *Frontiers in Education, 11*, 1916444.
