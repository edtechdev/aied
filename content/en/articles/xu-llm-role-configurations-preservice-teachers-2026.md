---
title: "LLM Role Configurations in Preservice Teacher Collaborative Inquiry: Differences in AI Literacy, Cognitive Load, and Discussion Dynamics"
created: "2026-11-20T09:15:00-05:00"
updated: "2026-11-20T09:15:00-05:00"
type: article
pedagogy: [collaborative-learning, community-of-inquiry]
technology: [llm, conversational-ai]
foundations: [ai-literacy]
discipline: [teacher education]
methods: [mixed-methods-research, quantitative-research, network-analysis]
level: [higher ed]
audience: [instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/xu-llm-role-configurations-preservice-teachers-2026.md']
source_url: "https://doi.org/10.3390/educsci16111981"
source_depth: full text
confidence: medium
evidence_context: educational
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-20"
    agent: hermes-agent
---

> **Synthesis:** Xu, Lu and Yang (2026) ask a design question that most of the [[ai-literacy|AI literacy]] literature answers with presence or absence: given the same model, does the *role* it is assigned change what [[teacher-education|preservice teachers]] learn and how they talk? They ran a quasi-experiment with 210 third-year biological sciences majors in four intact classes at a university in western China, assigning each class to No-LLM, a General [[llm|LLM]] with no system prompt, a Supportive LLM prompted to supply perspectives and information, or a Challenging LLM prompted to raise counterarguments, all on DeepSeek-V3. AI literacy and cognitive load were self-reported before and after three 40-minute online discussions, and 6,164 chat messages were coded against the [[community-of-inquiry|Community of Inquiry]] framework and analyzed with [[network-analysis|Ordered Network Analysis]]. Supportive produced the highest adjusted AI literacy and the lowest mental load and effort, while Challenging produced the densest idea integration and facilitation at the highest cost in mental effort. The General condition, the everyday default, was weakest on nearly every measure and the only class whose AI ethics score fell.

## Key Findings

- **The Supportive role produced the highest adjusted AI literacy.** Adjusted posttest overall AI literacy was significantly higher under Supportive than under General LLM, *F*(3, 174) = 2.76, *p* = 0.044, η² = 0.05.
- **Unguided use subtracted ethics rather than adding it.** In the General LLM class, [[ethics|AI ethics]] was the only dimension to fall from pretest to posttest, *t*(40) = −2.28, *p* = 0.028, *d* = −0.36.
- **Evaluation split the role conditions.** On adjusted AI evaluation, both the General and the Challenging conditions scored below Supportive, *F*(3, 174) = 3.50, *p* = 0.017, η² = 0.06.
- **Load followed each role's demands.** Mental load ran 2.40 under General and 2.37 under Challenging against 1.99 under Supportive and 2.00 with no LLM, *F*(3, 186) = 8.13, *p* < 0.001, η² = 0.12.
- **The Challenging role roughly doubled integration density.** Integration codes reached 33.80% of messages under Challenging, approximately 1.6 to 1.9 times the per-message density of the other three conditions.
- **Facilitation moved the same way.** Facilitating Discourse rose from 1.32% of messages with no LLM to 15.37% under Challenging, and teaching presence totaled 30.33% there against 14.43% without a model.
- **Support broadened the talk without connecting it.** The Supportive network showed more TE → EX and EX self-transitions, while Challenging showed more OC → IN → FD sequences produced largely by the operator.

## One model, two prompts, four classes

The role manipulation was deliberately thin. All three LLM conditions ran DeepSeek-V3 at a temperature of 0.7 through the Chatbox platform; only the system prompt differed in interaction orientation. Both role prompts carried the same discussion context, task goals and response constraints, including a ceiling of 200 Chinese characters per reply. The General condition carried no system prompt at all and depended entirely on how group members phrased their questions, which makes [[prompt-engineering|prompting]] itself the treatment in that class.

Each class divided into eight groups of six or seven, each choosing one operator per round to forward, copy or paraphrase model output into a QQ group chat. Three rounds ran a month apart, following the triggering event, exploration, integration and resolution phases of [[collaborative-learning|collaborative learning]]. The design is [[mixed-methods-research|mixed-methods]] in practice: questionnaire scales, human coding of discourse and a network model of code transitions.

## Integration and facilitation moved together

Coded frequencies show a condition that pushed discussion work into the open. Integration codes made up 33.80% of Challenging messages against 17.70%, 21.70% and 18.38% elsewhere; facilitation made up 15.37% against 1.32% with no model; social presence totaled 90.18% of messages against 39.64% under General. The authors read the OC → IN → FD sequence as the operator connecting members' ideas by questioning their views: [[scaffolding|scaffolding]] performed by a peer through a model rather than an instructor.

Supportive behaved differently. It carried teaching-presence codes at 18.12% and exploration at 33.49%, with more TE → EX transitions and more EX self-transitions, meaning groups kept opening new angles and rarely closed them. The No-LLM class posted the highest exploration density (39.44%) and the highest resolution density (3.07%) but the lowest triggering density (3.41%): without external provocation, talk stayed exploratory.

## The cheap role and the expensive one

Mean cognitive load stayed below 3 on a 5-point scale in every condition, so the differences are relative. Mental effort ran 2.59 under General, 2.44 under Challenging, 2.16 with no model and 1.97 under Supportive, *F*(3, 186) = 7.63, *p* < 0.001. The authors are careful about what that effort means for the Challenging class: paired with the strongest integration patterns, it plausibly reflects germane processing on the intended task rather than waste.

The low load under Supportive is the more ambiguous result. It may indicate effective support, or it may indicate offloading onto a model that supplied ready perspectives. The General condition had no output-length constraint and may have added processing demands that the role prompts removed, so every comparison bundles role with other prompt-level choices.

## Ethics did not develop on its own

No dimension of AI ethics improved in the No-LLM, Supportive or Challenging classes, and it declined under General. The authors' explanation is curricular rather than technical: the three discussion topics concerned [[teacher-role|teacher roles]], student thinking and teacher–student relationships, and never systematically raised algorithmic bias, privacy, fairness, hallucinations or accountability. Ethical literacy was expected to arrive as a by-product of technical discussion and did not, consistent with the meta-analytic finding they cite that AI literacy interventions gain most on knowledge and least on ethics.

Supportive scored above General on ethics at *F*(3, 174) = 3.25, *p* = 0.023, η² = 0.05. Reading the groups' final positions, the authors found participants reaching for overdependence and the irreplaceability of emotional connection while showing little awareness of bias or data privacy.

## What this means for practice

- **Teacher educators.** Treat role configuration as [[curriculum-design|curriculum content]], not a tool setting. A short system prompt moved cognitive load and integration density more than the presence of the model did.
- **Instructors.** Sequence the roles rather than picking one: support while groups are still exploring, challenge once positions are forming. The study compared conditions, not stages, so pilot the sequence and watch mental effort.
- **Learning designers.** Put an output-length ceiling on every configuration. The only condition without one was also the highest-load and lowest-literacy condition.
- **Researchers.** Stop treating “using an LLM” as a single treatment. Assign configurations within classes and label whether a message came from a person or a model.

## Limitations

- One intact class sat in each condition (n = 53, 53, 52, 52), so condition and class membership are confounded and the authors describe the comparisons as observed differences among classes.
- The General condition had no system prompt and no response-length limit, so it confounds role instructions with contextual grounding and output constraints rather than isolating role.
- Model output reached the chat through a student operator, and forwarded content was not distinguished from the operator's own words, so some discourse patterns may be properties of the model.
- The sample is one university in western China, biological sciences majors only, 158 of the students reporting demographics female against 30 male; rural and urban access differences were not assessed.
- Outcomes rest on self-reported [[self-report-measures|scales]] (α = 0.70 to 0.80) and human-coded [[network-analysis|network models]], with three coding categories below κ = 0.70 that the authors flag as low-prevalence.

## Citation

Xu, X., Lu, G., & Yang, Q. (2026). [*LLM Role Configurations in Preservice Teacher Collaborative Inquiry: Differences in AI Literacy, Cognitive Load, and Discussion Dynamics*](https://doi.org/10.3390/educsci16111981). Education Sciences, 16(11), 1981.
