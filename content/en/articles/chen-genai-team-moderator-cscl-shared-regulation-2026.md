---
title: "Generative AI as a Team Moderator in CSCL: Adaptive Scaffolding for Shared Regulation"
created: "2026-10-25T10:05:00-04:00"
updated: "2026-10-25T10:05:00-04:00"
type: article
published: "2026"
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: [learning sciences]
level: [higher ed]
audience: [instructors, instructional designers, researchers]
foundations: [human-ai-collaboration]
pedagogy: [collaborative-learning, scaffolding, self-regulated-learning, student-engagement, sociocultural-learning]
technology: [generative-ai, pedagogical-agent, llm]
assessment: []
methods: [mixed-methods-research, network-analysis, quantitative-research]
ethics: []
confidence: high
sources: ['raw/papers/chen-genai-team-moderator-cscl-shared-regulation-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Chen et al. (2026) tested whether [[generative-ai|GenAI]] can moderate a collaborative team rather than tutor its members. Most educational GenAI in [[collaborative-learning]] is deployed as a content-oriented helper that explains and generates; the authors instead built **SSRLAgent**, an agent that scaffolds [[self-regulated-learning|socially shared regulation of learning]] (SSRL) by diagnosing a group's regulatory state and prompting accordingly. In a 16-week quasi-experiment with 64 undergraduates in China, one condition received that adaptive SSRL scaffolding and the other received static scaffolding through structured digital worksheets plus a content-support agent (KnoAgent). Across behavioral logs, discussion transcripts analyzed with epistemic network analysis, and engagement questionnaires, the adaptive group showed higher **participation equality** but not higher participation **intensity**, deeper cognitive engagement with more advanced cognitive-presence phases and more integrative solution-oriented discourse, and higher overall emotional engagement, especially feeling more relaxed and more connected with peers. The paper's claim is a role claim: GenAI can occupy the process-moderator seat in a team, not just the explainer seat.

## Key Findings

1. **Adaptive regulation scaffolding equalized participation without increasing it.** The adaptive-SSRL group showed significantly higher participation equality, while participation intensity did not differ significantly between conditions — a distributional effect rather than a volume effect.
2. **Cognitive engagement deepened.** The adaptive group reached more advanced cognitive-presence phases and produced more integrative, solution-oriented discourse patterns, read through epistemic network analysis of group discussion transcripts.
3. **Emotional engagement rose, in specified ways.** The adaptive group reported significantly higher overall emotional engagement, particularly feeling more relaxed during collaboration and more connected with peers.
4. **The intervention targeted process, not content.** Both groups received identical theoretical content, learning tasks, instructor support and weekly structure; the manipulated variable was the *kind* of SSRL scaffolding, adaptive agent versus static worksheet.
5. **A content agent was present in both conditions.** The static condition was not a no-AI control: it paired the worksheets with KnoAgent for content support, so the contrast isolates the moderator function from GenAI access as such.
6. **The design claim is about role division.** The authors argue the findings show GenAI can function as an SSRL-informed team moderator rather than a content-oriented tutor, which is a different design target from the tutoring deployments that dominate the literature.

## The design, and why the contrast is the interesting part

The study ran over 16 weeks in three phases. A preparation week introduced objectives and gave each condition its specific training; students then completed an SSRL skills questionnaire and a domain knowledge test as a pre-test. Across weeks 2 to 15 the same instructor taught the same content to both classes in face-to-face lectures, and the weekly 90-minute online session followed a fixed shape: 20 to 30 minutes of teacher-led briefing, task set-up and Q&A, then 60 to 70 minutes of group collaboration on Feishu on a series of research-design tasks such as selecting a research topic and designing an experiment. In week 16 groups submitted and presented final research reports, and students completed the emotional engagement questionnaire.

The contrast is what makes the result interpretable. Many GenAI-in-collaboration studies compare AI access against no AI access, which confounds the moderator function with the presence of a chatbot. Here both arms had an agent and both had structure; one agent adapted its regulation prompts to the group's emerging state while the other group worked from fixed worksheets. Whatever the adaptive group gained is therefore attributable to adaptivity in the regulation scaffolding rather than to GenAI per se.

Using epistemic network analysis on the discussion transcripts is also a substantive choice rather than a decoration. It lets the authors characterize the *structure* of the discourse — which regulatory moves co-occur, and how tightly — instead of counting messages. That is why "more integrative, solution-oriented" is a claim about network shape and not about word frequency.

## Participation equality versus participation intensity

The behavioral finding deserves separate attention because the two measures point in different directions, and only one moved. Participation intensity, the volume of contribution, did not differ. Participation equality, how evenly contributions were spread across group members, did.

That pattern is precisely what a [[scaffolding|regulation scaffold]] should produce if it is working as intended. A moderator that successfully draws in a quiet member and prompts a dominant one to make space does not necessarily increase total talk; it redistributes it. Had the intervention raised intensity without changing equality, the more plausible reading would have been that the agent was generating discussion rather than regulating it. The authors' framing of the agent as a moderator rather than a tutor is consistent with the measure that moved.

The limitation to hold alongside this is that equality is a distributional statistic, not a quality measure. A group can share airtime perfectly and still reason poorly, and the cognitive findings are what carry the quality claim.

## What this means for practice

- **Instructors.** Decide whether the agent's job is content or process before adopting it, because the study's intervention was a process moderator and the content-support agent was held constant across conditions rather than tested as the treatment.
- **Instructional designers.** Build the adaptivity into the regulation prompts rather than into the content delivery, since the comparison that produced the gains was adaptive versus static *regulation* scaffolding with content support present in both arms.
- **[[teacher-role]]** Keep the instructor's briefing and task set-up in the design; the intervention sat inside a structured 90-minute session with teacher-led framing, not in unstructured group time.
- **Researchers.** Use a both-arms-have-an-agent contrast when the claim is about a specific AI *function*, because an AI-versus-no-AI design cannot separate the function from the mere presence of a chatbot.
- **[[assessment|Assessment designers]].** Read participation metrics as distributional rather than qualitative, and pair them with a discourse-structure analysis if the claim is about the quality of collaborative reasoning.

## Limitations

- The quasi-experiment used two intact classes with 64 undergraduates at one Chinese university, so condition was not randomly assigned at the individual level and class-level differences cannot be fully separated from the treatment.
- The paper reports directional findings for the engagement dimensions, but the effect sizes and confidence intervals for each dimension are carried in tables rather than summarized, and no subgroup analysis by prior SSRL skill or domain knowledge is reported.
- Participation intensity did not differ, so the behavioral evidence supports a redistribution of talk rather than more of it, which bounds how strong a claim the behavioral data alone can carry.
- Emotional engagement was measured by self-report questionnaire at week 16, so it reflects students' retrospective appraisal of the collaboration rather than an observed affective process.
- Both conditions used an agent and a structured collaboration platform (Feishu), which means the findings describe adaptive-versus-static scaffolding inside an already agent-supported, platform-mediated setting and do not establish what the adaptive agent would add to unstructured group work.

## Citation

Chen, D., Zhang, Y., Luo, H., Guo, F., Lu, Y., & Guo, X. (2026). [Generative AI as a team moderator in CSCL: Facilitating students' multidimensional engagement through adaptive scaffolding for socially shared regulation of learning](https://doi.org/10.1111/bjet.70096). *British Journal of Educational Technology*, 1–30.
