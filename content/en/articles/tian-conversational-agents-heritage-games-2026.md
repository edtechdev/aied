---
title: "Exploring the Role of Conversational Agents in Immersive Cultural Heritage Serious Games: A User Study of Agent Interaction Styles"
created: "2026-11-27T16:30:00-05:00"
updated: "2026-11-27T16:30:00-05:00"
type: article
published: "2026-11-08"
sources: ['raw/papers/tian-conversational-agents-heritage-games-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment, user study]
discipline: []
level: []
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

> **Synthesis:** Tian and colleagues built an immersive archaeology game about the ancient Zhongshan Kingdom and tested whether [[conversational-ai]] agents with different styles improved [[usability-research|user experience]] and learning. Forty-eight participants were randomly assigned to no agent, a warm Companion, a direct Instructional agent, or a Friendly Mentor that used questions and moderate prompts. All three agent conditions scored higher than the no-agent condition on overall user experience and each of its six dimensions, while the styles did not differ reliably from one another. Knowledge scores showed favorable trends, especially for Companion and Friendly Mentor, but were treated as supplementary. Cognitive load was higher, not lower, in two agent conditions, and behavioral logs showed no significant differences. An exploratory player-type match appeared only in user experience. The clearest lesson is that responsive conversational support matters more than a particular persona.

## Key Findings
1. **Agent presence was the main effect.** All three agent styles improved overall user experience compared with playing without an agent.
2. **No single style consistently won.** Differences among Companion, Instructional, and Friendly Mentor were not consistently significant across outcomes.
3. **Knowledge trends favored two styles.** Post-test scores and gains were higher on average with Companion and Friendly Mentor than with no agent.
4. **Cognitive load did not fall.** Two agent conditions produced higher load scores, consistent with extra processing rather than reduced burden.
5. **Behavioral logs were unchanged.** Task completion, areas visited, dialog turns, hint requests, and artifact views did not differ significantly.
6. **Affective results were inconclusive.** Positive affect change approached significance and negative affect change did not.
7. **Player-type matching was exploratory.** A matched player-type and agent-style subgroup reported better user experience, but no parallel advantage appeared for learning or load.

## What the study built and tested

The prototype, Retrace: Ancient Zhongshan, reconstructed a palace, workshops, and a royal mausoleum from archaeological reports on the Zhongshan capital site in present-day Pingshan County, Hebei Province. The no-agent version offered static text panels. Companion used a warm, empathetic, encouraging tone; Instructional gave concise, structured task guidance; and Friendly Mentor used questions and moderate prompts to balance exploration and support. All versions ran on the same Unity engine and hardware with identical rendering, task flow, and interaction methods.

The agent architecture shared a Deepseek v4 flash [[llm|foundation model]] across natural-language understanding, user-state tracking, emotion perception, dialog management, and response generation. Styles differed only in tone, templates, and affective strategy. Standardized knowledge and navigation replies used retrieved templates from a knowledge base reviewed by the local cultural heritage authority; nonstandard affective replies used [[rag|retrieval-augmented]] passages with a fixed persona prompt, followed by natural-language-inference consistency checking. Independent development tests, separate from the 48 experimental participants, reported 77.3% intent-classification accuracy and 75.9% weighted F1 on 22 samples, 90.5% accuracy on a 21-sample emotion task, and a 100.0% Top-3 retrieval hit rate on a 15-item knowledge base. Adaptive style switching was built into the architecture but was not used in the experiment.

The between-subjects study had 12 participants per condition: 24 men and 24 women aged 19–23 years, with a mean age of 21.13. Bartle player types were 13 Achievers, 13 Explorers, 10 Socializers, and 12 competitively oriented Killers, measured before the experiment and treated as an exploratory grouping variable. After standardized training, each participant explored for 20 minutes. Outcomes included a knowledge test, the 26-item User Experience Questionnaire, a Cognitive Load Questionnaire, the Positive and Negative Affect Schedule, behavioral logs, and three supplementary interviews.

## What the outcomes showed

Overall user experience differed sharply: no agent 3.78 ± 0.13, Companion 5.60 ± 0.26, Instructional 5.64 ± 0.30, and Friendly Mentor 5.66 ± 0.32, F(3,44) = 148.204, p < 0.001, partial η² = 0.910. Tukey tests placed each agent condition above the control, but not consistently above each other. The same overall advantage appeared for attractiveness, perspicuity, efficiency, dependability, stimulation, and novelty.

Knowledge post-test scores were 65.17 ± 13.87, 80.00 ± 14.46, 76.58 ± 9.13, and 79.50 ± 10.29 across the four conditions, F(3,44) = 3.901, p = 0.015, partial η² = 0.210. Knowledge gains were 33.75 ± 13.65, 49.50 ± 15.63, 46.75 ± 11.80, and 51.50 ± 10.52, F(3,44) = 4.505, p = 0.008, partial η² = 0.235. The authors call these favorable trends rather than proof that every style improved learning, because the behavioral logs provide no supporting process evidence.

Cognitive load moved in the opposite direction from a load-reduction account: Companion scored 2.60 ± 0.27 and Friendly Mentor 2.54 ± 0.29, versus 2.11 ± 0.19 for Instructional and 2.14 ± 0.26 for no agent, F(3,44) = 12.318, p < 0.001, partial η² = 0.456. The combined agent mean of 2.42 ± 0.33 exceeded the control mean of 2.14 ± 0.26, Welch's t(23.47) = 2.955, p = 0.007. Positive affect change gave F(3,44) = 2.596, p = 0.064, and negative affect change gave F(3,44) = 0.844, p = 0.477. No behavioral-log measure differed significantly. Matched player-type and agent-style subgroups differed in user experience, 5.99 ± 0.15 versus 5.46 ± 0.13, Welch's t = 10.294, p < 0.001, but the authors restrict this to an experiential signal.

## What this means for practice
- **Instructors.** Prioritize dependable, context-sensitive conversational support before investing in finely differentiated personas.
- **Instructors.** Pair gains in experience with checks of what learners actually understood, since knowledge and log results were less robust than questionnaire results.
- **Curriculum designers.** Connect agent explanations to visible artifacts and current tasks rather than adding longer explanations indiscriminately.
- **Educational technology developers.** Control dialog length and timing, offer layered detail, and let users postpone explanations when visual demand is high.
- **Researchers.** Test retention, transfer, and dynamic style adaptation with larger samples and a genuine accessibility evaluation.

## Limitations
- The sample was only 48 participants, with 12 per condition, limiting analyses of player-type matching and learning mechanisms.
- Styles were fixed; participants never experienced dynamic switching between them.
- Player type relied primarily on [[self-report-measures|self-report]], and behavioral logs were nonsignificant, so the proposed process mechanism is unverified.
- Only three participants were interviewed, and their comments served interpretation rather than independent confirmation.
- The study did not recruit or analyze participants with disabilities and performed no formal accessibility conformance testing.
- The paper is an expanded version of a conference study, and no delayed learning measures were collected.

## Citation
Tian T, Tan S, Ren X and Li J (2026) Exploring the Role of Conversational Agents in Immersive Cultural Heritage Serious Games: A User Study of Agent Interaction Styles. Information 17:1117. https://doi.org/10.3390/info17111117
