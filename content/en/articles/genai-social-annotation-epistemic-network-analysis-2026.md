---
title: "Unpacking student interactions in GenAI-assisted social annotation: An epistemic network analysis of cognitive and social presence"
created: "2026-09-27T07:48:25-04:00"
updated: "2026-09-27T07:48:25-04:00"
type: article
sources: ['raw/papers/genai-social-annotation-epistemic-network-analysis-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: [language learning]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
foundations: [ai-education, human-ai-collaboration]
pedagogy: [collaborative-learning, community-of-inquiry, scaffolding, student-engagement]
technology: [generative-ai, llm]
assessment: [learning-gains, self-report-measures]
methods: [quantitative-research, network-analysis]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Pan, Lai, Guo and Lin (2026) ask what changes when a conversational agent joins a shared reading text. In a quasi-experimental design, 63 Chinese undergraduate students from two classes worked through five reading tasks in five consecutive weeks on the social annotation platform CollaboRead. One class (N = 33) annotated with a [[generative-ai|GenAI]] chatbot (GPT-4o mini) that scaffolded both cognitive presence and social presence; the other (N = 30) annotated without it. The GenAI-assisted class reported higher cognitive engagement and emotional engagement and scored higher on reading performance, with no significant difference in behavioral engagement. Epistemic network analysis of the logs showed the assisted class tying social presence to integration and resolution, yet the benefit was uneven: high-achieving groups wove the scaffolding into their discourse far more than low-achieving groups, which stayed in a self-referential loop.

## Key Findings

1. **GenAI scaffolding lifted engagement and reading performance.** Mann-Whitney U-tests indicated that GenAI-assisted social annotation (GASA) significantly enhanced students' cognitive engagement, emotional engagement and reading performance.
2. **Behavioral engagement did not move.** No significant difference was found, which the authors attribute to a chatbot built for cognitive and social scaffolding rather than for directing behavior, on a platform that did not monitor annotation frequency.
3. **The two conditions' networks separated on one axis only.** Group differences were significant on the X-axis (U = 25.00, p = 0.01, r = 1.00; experimental median 0.16, control median -0.15) but not the Y-axis (U = 13.00, p = 1.00, r = 0.04).
4. **GenAI tied social presence to high-level cognitive work.** In the experimental class, social presence indicators showed a strong connection to integration and resolution; without GenAI support, social presence was linked more to triggering and exploration.
5. **High-achieving groups used the chatbot far more.** They initiated 1407 feedback requests across 2319 annotations (60.7%), whereas the low-achieving group initiated 737 feedback requests across 2167 annotations (34.0%).
6. **Low-achieving groups stayed inside their own conversation.** They showed stronger connections among open communication, exploration and integration than high-achieving groups: a self-referential loop that weakly leveraged the scaffolding.

## How the study was designed

Two intact classes of Chinese undergraduate English majors took part, 63 students in total: experimental N = 33 and control N = 30. Both worked through five reading tasks in five consecutive weeks on CollaboRead; only the experimental class had the GPT-powered chatbot, which scaffolded cognitive presence through monitoring and personalized suggestions and social presence through vocatives and expressions of acknowledgment. Data came from collaborative reading engagement surveys, reading performance scores and platform logs of annotations and chatbot interactions. Content analysis coded the logs for cognitive and social presence indicators from the [[community-of-inquiry]] framework, and [[network-analysis|epistemic network analysis]] modeled which indicators co-occurred and how strongly. Comparisons used Mann-Whitney U-tests, and the experimental class was split by median reading performance.

## What the network analysis showed

Epistemic network analysis renders each group's discourse as a graph of co-occurring codes. The experimental class's network pulled social presence together with integration and resolution; the control class linked social presence more to triggering and exploration. The X-axis separated the classes significantly (U = 25.00, p = 0.01, r = 1.00; medians 0.16 and -0.15) while the Y-axis did not (U = 13.00, p = 1.00, r = 0.04; medians 0.06 and 0.00). The authors read this as GenAI elevating collaborative learning beyond initial ideation toward deeper synthesis and problem solving, attributing it to idea-oriented feedback that prompts evaluation and refinement rather than offering solutions, which they argue counters [[metacognition|metacognitive laziness]].

## Who benefited, and who did not

The aggregate gains hide a split inside the experimental class. High-achieving groups showed relatively stronger connections between AI social presence and open communication, and more interconnections among AI social presence, group cohesion, AI resolution and student resolution. Their 1407 feedback requests across 2319 annotations (60.7%) contrast with 737 requests across 2167 annotations (34.0%) in the low-achieving group, and a Mann-Whitney U-test on this split likewise reported a significant X-axis difference (U = 25.00, p = 0.01, r = 1.00). Low-achieving groups exchanged ideas in a closed loop that made weak use of the scaffolding. The authors conclude that returns to GenAI support depend on how effectively learners can act on it, which puts [[agency]] and [[ai-literacy]] at the center of the design problem rather than the model.

## What this means for practice

- **Instructors.** Decide which presence the assistant is meant to support: the class that had scaffolding for both reported higher cognitive engagement and emotional engagement.
- **Instructors.** Configure GenAI feedback to prompt evaluation and refinement of students' own annotations rather than to hand over solutions.
- **Instructors.** Track equity inside groups. The 60.7% against 34.0% gap in feedback requests shows a scaffold can sit unused by the students who need it most.
- **Designers and administrators.** Build the surrounding supports, not just the assistant: learner agency and [[ai-literacy|AI literacy]] shape whether GenAI suggestions are acted on.
- **Designers.** If behavioral engagement is a target, instrument for it: the platform did not monitor annotation or response frequency, and no behavioral engagement difference was found.

## Limitations

- The sample was 63 predominantly female English majors at the intermediate proficiency level, so generalizability is limited; gender and disciplinary background are documented moderators of students' engagement with AI tools.
- Collaborative engagement was measured by self-report, which is open to subjective bias and insufficient to capture actual interaction patterns.
- The intervention consisted of five reading tasks in five consecutive weeks: an intense design that may have boosted the observed effects and introduced a novelty effect.
- The coding scheme permitted multiple social presence indicators per annotation but at most one cognitive presence code, and because network edge weights come from co-occurrence frequencies this may produce relatively stronger social presence connections. The high and low performer comparison also used a median split over few groups, and teaching presence was not measured.

## Citation

Pan, M., Lai, C., Guo, K., & Lin, C.-H. (2026). [Unpacking student interactions in GenAI-assisted social annotation: An epistemic network analysis of cognitive and social presence](https://doi.org/10.1111/bjet.70088). *British Journal of Educational Technology*.