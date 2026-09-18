---
title: "The Influence of Generative AI Usage Styles on Creative Self-Beliefs: Findings from a Longitudinal Study in Design Education"
created: "2026-09-18T14:20:00-04:00"
updated: "2026-09-18T14:20:00-04:00"
type: article
foundations: [design-thinking, human-ai-collaboration, learner-identity]
pedagogy: [creativity, self-efficacy, student-engagement]
technology: [generative-ai, llm]
methods: [quantitative-research]
research_method: [longitudinal, quantitative, survey]
level: [higher ed]
audience: [researchers, educators, learning designers]
page_kind: [evaluation]
discipline: [design education]
sources: ['raw/papers/genai-usage-styles-creative-self-beliefs-2026.md']
confidence: high
---

> **Synthesis:** Okamoto and Inasaka ask whether generative AI use changes Creative Self-Beliefs (CSB) in design education, and whether any effect depends on how AI is used rather than whether it is used at all. Sixty-four third-year students in a Display Design Theory and Practice course completed three hand-drawn design sprints under three conditions, no AI (Assignment 1), mandatory AI (Assignment 2) and optional AI (Assignment 3), with CSB measured at four time points (T0–T3) as Creative Self-Efficacy (CSE) and Creative Personal Identity (CPI). Using AI was not associated with CSB gains: mean CSE moved from 3.79 to 3.94 and CPI from 4.60 to 4.77, but a mixed-effects model found no significant time, group or interaction effects on CSE and only a marginal T3 effect on CPI (β = 0.34, p = .063). Style mattered instead: students who valued asking AI for feedback (ΔCSE +0.72, p = .018) or summarising meaning (+0.88, p = .031) gained more, while delegating idea generation to AI did not separate them at all. Students overwhelmingly read AI as a way to finish tasks faster, not as a creativity aid. The takeaway is that AI's route to creative self-belief runs through reflective, feedback-oriented use rather than through handing creative work over.

## Key Findings

1. **The sample is small, one course, four waves.** One hundred and twenty third-year undergraduates took the course, but only the 64 who completed all four questionnaires (T0 before Assignment 1, then T1–T3 after each sprint) entered the analysis, split at T3 into an optional-use group (n = 30) and a non-use group (n = 34).
2. **AI use on its own predicted nothing.** In the mixed-effects model with participant random effects, CSE showed no significant main effect of group (β = −0.25, p = 0.48), of time (T1–T3 all p ≥ 0.26) or of their interaction; CPI showed only a marginal T3 main effect (β = 0.34, p = .063) with a non-significant group effect (β = 0.03, p = 0.94).
3. **Gains were explained by baseline, not by AI.** Regressing change scores (T3−T0) on AI use and baseline showed AI use non-significant (ΔCSE β = −0.22, p = .40; ΔCPI β = −0.35, p = .15), while baseline T0 scores carried significant negative coefficients (β = −0.40 and −0.56, both p < .001), a ceiling effect rather than a treatment effect.
4. **Descriptively, belief rose after the phase when AI was optional.** Mean CSE was 3.79 (T0), 3.82 (T1), 3.72 (T2) and 3.94 (T3), and mean CPI 4.60, 4.57, 4.57 and 4.77, with the dip at T2, when AI use was compulsory, instead of the rise.
5. **Non-users gained more than users.** Non-users rose from CSE 3.90 to 4.11 and CPI 4.59 to 4.93 across T0–T3, while AI users moved only from 3.66 to 3.74 on CSE and stayed flat on CPI (4.61 to 4.59); users also started lower, suggesting students with weaker initial CSE were likelier to take up AI when it became optional.
6. **Students valued AI for ease, not for creativity.** A Mann–Whitney U comparison found a significant difference only for "I find it easier to proceed with tasks when using ChatGPT" (4.12 vs 5.17, W = 284.5, p = .0017); perceived usefulness for one's own creativity (4.50 vs 4.90, p = .249) and intention to continue use (p = .320) did not differ.
7. **Idea generation dominated the reported usage styles.** At T2, participants picked idea generation 69.9%, organising premises 36.9%, research 31.1%, question generation 25.2%, requesting feedback 23.3%, summarising meaning 19.4% and role-playing 9.7%; among T3 users idea generation stayed top at 66.7%, role-playing rose from 11.1% to 23.1% and question generation fell from 25.0% to 5.1%.
8. **Feedback-seeking predicted persistence with AI.** Comparing T2 usage categories against continued use at T3 with Pearson's chi-square, only "requesting feedback" was significant (χ²(1) = 4.35, p = .037), selected by 36.1% of continued users against 14.8% of those who stopped.
9. **Two usage styles separated the CSE gains.** Among T3 users, ΔCSE was higher for those who rated requesting feedback useful (+0.72, Cliff's δ = 0.50, p = .018, n = 11) and summarising meaning (+0.88, δ = 0.57, p = .031, n = 6), with every other style non-significant; for ΔCPI only idea generation (+0.71, p = .052) and summarising meaning (+0.77, p = .080) reached marginal levels.

## How the study distinguishes AI usage styles

The design rests on the argument that "use versus non-use" is the wrong independent variable for a technology that can be an idea generator, a search substitute, a feedback partner or a meaning-making interlocutor. The authors measure styles with a multiple-response item asking which of seven uses students found helpful, labelled A to G: idea generation, organising premises, role-playing, question generation, requesting feedback, research and summarising meaning. Each option maps to an AI usage guideline distributed in class before Assignment 2, so the categories are the pedagogy's own vocabulary rather than a survey scale.

CSB itself is measured with an established eight-item instrument, three items for CSE ("I am good at coming up with new ideas") and five for CPI ("I think I am a creative person"), each on a 7-point Likert scale. A separate three-item attitudes scale taps perceived usefulness for creativity, ease of task progression and intention to continue. Because the authors work from a [[creativity|mini-c]] view of creativity as personally meaningful interpretation rather than socially recognised production, they read a framing statement about everyday creativity to students before every wave, following evidence that framing shifts whether creativity is seen as malleable.

## The longitudinal design and sample

The setting is a single third-year course at Chiba Institute of Technology in which students ran design sprints: thirty minutes generating textual idea seeds, sixty minutes developing at least five into concepts with visual representations, then refining one into a presentation panel, all hand-drawn. Assignment 1 (October 2023) prohibited AI, Assignment 2 (23 October 2023) required it, and Assignment 3 (11 December 2023) left it optional. This sequencing is what lets the paper separate mandatory exposure from voluntary uptake, and it is why belief dips at T2 and rises at T3 in the descriptive series.

Attrition is substantial and structural: 120 students participated, 64 completed all four surveys, so the analysed picture is the committed half of the cohort. Analyses run in R include mixed-effects models with participant random effects, the Mann–Whitney U test for attitudes, McNemar's test for within-user change in usage styles between T2 and T3, chi-square for style-to-continuation links, and per-style comparisons of change scores with Cliff's δ as effect size. Qualitative free-text responses at T3 supplement the numbers.

## Results: AI use versus AI usage style

The study's headline is a null on use and a signal on style. Whether a student used generative AI, and whether the class was required to, did not explain movement in [[self-efficacy|creative self-efficacy]] or creative personal identity; the only near-miss was a marginal CPI main effect at T3. Within the subgroup of users, however, the students who treated AI as something to interrogate rather than something to consult gained more CSE. This is the paper's [[human-ai-collaboration]] finding in concrete form: AI positioned as an evaluator of one's own ideas sits differently in the creative process than AI positioned as a generator of them.

The negative association the authors report is about delegation, not about AI as such. Idea generation, the most-used style by a wide margin, produced no CSE difference (+0.11, p = .41) and only a marginal CPI difference, and delegating the generative part of the work to AI is precisely what the students who stopped using it described resisting, with comments such as "I wanted to try doing it on my own" and "I wanted to test my own creativity". The [[feedback]] and summarising styles, by contrast, keep the student as the author of the idea and put AI in the role of revisiting, reinterpreting and strengthening it.

## Interpretation: ease of use is not creative self-belief

The authors read the attitude results as the interpretive key. Students endorsed AI as making tasks easier far more strongly than they endorsed it as improving their own creativity, so a productivity gain and a self-belief gain appear to be different constructs that the same tool affects unequally. That reading connects to Bandura's account of [[self-efficacy]]: an outcome supports efficacy beliefs only when it is attributed to one's own action and felt to be under one's control, and a tool that behaves indeterminately and produces output automatically makes that attribution harder. Drawing on Ueno's account of tool use, they suggest generative AI had not yet been internalised as a tool in the way a hammer is, so its output was not internalised as the user's own creativity.

The causal caution is explicit. The style–CSE associations rest on 6 to 11 students per category, the study is one course and roughly eleven weeks, and the design cannot separate the effect of a style from the disposition of students who choose it. Their preferred framing is that AI functions as a supportive element under specific relational conditions rather than a cause of change, and that CPI is simply less malleable in the short term, consistent with earlier longitudinal work showing CSE and CPI change slowly and reciprocally.

## Implications for design educators, and the study's limits

For design teaching the practical message is that banning, requiring and permitting AI are all weaker levers than shaping what students do with it. If feedback requests and meaning summarisation are the styles associated with gains, then a course can teach them deliberately: have students put their own draft in front of AI and ask what it undermines, and have them restate and re-interpret their material, instead of treating AI as a faster search box or an idea vending machine. The paper also implies that [[learner-identity]] work, helping students see themselves as the author of the idea, belongs in AI integration alongside tool training, and that students who opt out for reasons of creative ownership are a signal worth listening to rather than a compliance problem.

The limits are set out by the authors and should constrain how far the numbers travel. Everything is self-report, measured with eight Likert items asked four times; attrition cut the sample by nearly half; the setting is a single design course in one institution, with real but limited transfer to other disciplines and levels; the per-style subgroups are small and the analyses are exploratory; the window is too short for the human–AI relationship to have stabilised; and the whole design is correlational, so no result licenses a causal claim about AI and [[creativity]]. The authors' own forward agenda is longer [[research-methods-aied|longitudinal work]] that adds perceived control and sense of agency over AI, and the wider caution for the field, captured in [[limitations-in-aied-research|work on AIED limitations]], is that output quality and self-perception are not interchangeable outcomes.

## Connected Concepts

- [[creativity]] — the outcome domain, framed through the mini-c view of personally meaningful novelty
- [[self-efficacy]] — CSE and creative personal identity as the two measured components of creative self-belief
- [[student-engagement]] — the persistence question the paper asks about sustained voluntary AI use
- [[design-thinking]] — the design sprint pedagogy and hand-drawn workflow in which the study ran
- [[design-education]] — the single-course disciplinary setting and its transferability limits
- [[generative-ai]] — the technology whose use styles were compared
- [[llm]] — conversational systems such as ChatGPT supplying the usage options
- [[human-ai-collaboration]] — AI as feedback partner and meaning-making interlocutor rather than search substitute
- [[learner-identity]] — creative personal identity and the attribution of output to oneself
- [[agency]] — perceived control over the creative process as the proposed explanatory mechanism
- [[feedback]] — requesting feedback from AI as the usage style most clearly tied to CSE gains
- [[limitations-in-aied-research]] — small subgroups, attrition and correlational design in AIED evidence

## Connected Articles

- [[t2i-competence-paradox-2026]] — Ease, risk and creative identity among art and design students using text-to-image AI
- [[rana-genai-design-thinking-2025]] — Generative AI inside design thinking pedagogy, on creativity and ethical reasoning
- [[think-first-chatgpt-later-2026]] — Sequence of human and AI work and its effect on independent creativity
- [[ai-ive-pbl-vocational-design-creativity-2026]] — Design creativity in AI-enabled project-based learning environments
- [[genai-creativity-k12-scoping-review-2026]] — Scoping review mapping generative AI against creativity outcomes
- [[misiejuk-cognitive-offloading-prompting-2026]] — Longitudinal analysis of how students' prompting strategies shift over time
- [[ai-collaborative-learning-skills-impacts]] — Impacts of AI-supported collaboration on creativity and critical thinking
- [[chatgpt-critical-creative-thinking-review]] — Review of ChatGPT's effects on critical and creative thinking
- [[longitudinal-ai-usage-ethics-policy-teacher-education-2026]] — Longitudinal evidence on AI usage, ethics and policy in higher education
- [[self-efficacy-tutoring-learning]] — Measuring self-efficacy change as an outcome of AI and tutor support

## Citation

Okamoto, R., & Inasaka, A. (2026). [*The Influence of Generative AI Usage Styles on Creative Self-Beliefs: Findings from a Longitudinal Study in Design Education*](https://osf.io/preprints/psyarxiv/sak29_v1). Manuscript, Saitama Institute of Technology and Chiba Institute of Technology.
