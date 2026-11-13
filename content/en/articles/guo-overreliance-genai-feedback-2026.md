---
title: "University students’ overreliance on generative AI feedback in the learning process: the effects of perceived cognitive load, cognitive offloading, and metacognitive monitoring"
created: "2026-11-04T13:24:11-05:00"
updated: "2026-11-04T15:00:00-05:00"
type: article
sources: ['raw/papers/guo-overreliance-genai-feedback-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
discipline: [learning sciences]
level: [higher ed, undergraduate]
audience: [instructors, researchers, educational technology developers]
technology: [generative-ai, llm]
assessment: [feedback, ai-feedback-quality, self-report-measures]
pedagogy: [metacognition, self-regulated-learning]
foundations: [cognitive-offloading, reducing-ai-misuse]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A survey of 600 undergraduates at one Chinese university models overreliance on [[generative-ai|generative AI]] [[feedback]] as a cognitive-resource pathway rather than a technology-acceptance one. Perceived cognitive load predicts [[cognitive-offloading]], offloading predicts overreliance, and load predicts overreliance directly as well. Splitting the sample by [[metacognition|metacognitive monitoring]] changes the mix of those pathways, not their existence: the load-to-offloading path is nearly identical in both groups, while the direct path is stronger for weaker monitors and the offloading path is stronger for stronger ones.

## Key Findings

1. The team distributed 760 [[self-report-measures|questionnaires]] through the Credamo platform and retained 600 valid responses, a valid response rate of 78.95%. Participants were undergraduates at Ningbo University with prior experience using a generative AI tool for study, and data were collected between August 1 and August 25, 2026.
2. The sample was 286 male students (47.67%) and 314 female students (52.33%), spread evenly across the four academic years. On the metacognitive monitoring item, 309 students (51.50%) formed the high group and 291 (48.50%) the low group.
3. Students reported considerable load and considerable reliance. Perceived cognitive load items averaged 3.828 to 3.853 on the five-point scale, cognitive offloading items 3.575 to 3.832, and overreliance items 3.788 to 3.987; the highest single mean was OGF1 at 3.987 (SD = 0.845), the item about accepting AI feedback without checking it.
4. Perceived cognitive load strongly predicted cognitive offloading in both groups, at β = 0.844 in the low-monitoring group and β = 0.840 in the high-monitoring group, both p < 0.001. This is the most stable relationship in the model, and the authors read it as evidence that task difficulty pushes students toward external support regardless of monitoring skill.
5. Cognitive offloading predicted overreliance at β = 0.396 (p = 0.008) in the low-monitoring group and β = 0.506 (p < 0.001) in the high-monitoring group, so the offloading-to-dependence link was stronger among students who monitor themselves more.
6. Perceived cognitive load also predicted overreliance directly, at β = 0.560 (p < 0.001) for low monitors and β = 0.419 (p < 0.001) for high monitors. The ordering reverses: students with weaker monitoring appear to move from pressure to dependence with less mediation.
7. Bootstrap mediation with 2,000 samples confirmed the indirect path in both groups: 0.335 with a bias-corrected interval of 0.069 to 0.611 for low monitors, and 0.426 with an interval of 0.149 to 0.648 for high monitors. Neither interval includes zero, and offloading is a partial rather than full mediator.
8. [[educational-measurement|Measurement]] was adequate but not clean. Cronbach's alpha was 0.772 for perceived cognitive load, 0.803 for cognitive offloading and 0.805 for overreliance; the KMO value was 0.940 and the three factors explained 65.057% of variance. In the low-monitoring group, however, the average variance extracted values were 0.487, 0.481 and 0.470, all below the conventional 0.50 threshold.

## How the model converts "cognitive pressure" into a testable chain

The framework joins Cognitive Load Theory to Cognitive Offloading Theory. Load explains why a student wants relief from mental effort; offloading explains the act of handing part of the work to an external system. Neither alone accounts for the full sequence, because load does not say why the relief takes the form of AI and offloading does not say why pressure triggers it.

The authors argue that generative AI changes the character of offloading. A calendar or a search engine stores and retrieves; a [[llm|language model]] explains, evaluates and recommends. That difference lets students transfer not just peripheral memory work but the comprehension, judgment and feedback-appraisal steps that [[higher-ed|higher education]] is supposed to build. The outcome variable is defined accordingly, as the tendency to accept, follow or judge one's work mainly by AI feedback rather than by one's own analysis.

All four constructs were measured with purpose-built items on a five-point Likert scale, since the authors judged existing scales tied to traditional tools or general technology use. Overreliance is captured by four items covering verification, decision dependence, independent thinking and external evaluation. That choice keeps the constructs close to the proposed mechanism, and it also means the dependent variable is a self-described habit rather than an observed behavior.

## What the two-group split does and does not establish

The comparison is the paper's most interesting move and its weakest inference. Students were divided by a single item asking whether they evaluate whether AI feedback matches their own understanding before accepting it, with responses of 1 or 2 labeled low and 3, 4 or 5 labeled high. A one-item grouping variable cannot represent monitoring's several components, and the authors say so.

More importantly, the groups were not compared with a formal multi-group test. The paper reports separate structural models and reads differences in path coefficients as differences between groups, while acknowledging that these are patterns rather than confirmed contrasts. The low group's offloading path, at p = 0.008, is also the least precise estimate in either model. Treat the interaction as a hypothesis about where to look, not as an established moderation.

A reporting slip makes the results harder to follow than they need to be. The hypotheses label load-to-overreliance as H1 and load-to-offloading as H3, but the results section attaches those labels the other way around. The coefficients themselves are consistent across text, tables and discussion, so the substantive story survives; the numbering does not.

One control is worth noting. Gender predicted overreliance only in the high-monitoring group, at β = 0.089 (p = 0.028), and age and self-reported use frequency were not significant in either model. Use frequency failing to predict dependence is consistent with the paper's central claim that how students use AI matters more than how often.

## What this means for practice

- **[[teacher-role|Instructors]].** Read dependence as a signal about task design before reading it as a character flaw. In this model the strongest path runs from perceived load to offloading, so a task that floods working memory will push students toward the tool whatever their monitoring habits. Sequencing complex work, or supplying partial structure, attacks the antecedent rather than the symptom.
- **Instructional designers.** Build the evaluation step into the workflow instead of assuming it. The items that define overreliance describe students accepting feedback without checking it, so a required comparison between AI commentary and the student's own draft does more than a policy statement about critical use.
- **Tool builders.** Offloading is the mechanism to instrument. A system that shows what it changed and why, and that asks the student to commit to a judgment before revealing its own, targets the mediating path rather than the direct one. That matters most for the students who monitor themselves well, since their dependence runs through offloading.
- **Researchers.** Test the moderation properly. Separate models with different coefficients are not a group comparison, and a single-item grouping variable cannot carry a claim about metacognitive skill. A validated multi-item scale plus a formal multi-group model would turn this promising pattern into a finding.

## Limitations

- The design is cross-sectional, so the model's directional chain is a set of associations; students whose load, offloading and reliance reinforce each other over a term are not observed here.
- All measures are self-reported on purpose-built items, leaving recall bias, social desirability and common-method variance unaddressed; no interaction logs, task performance or behavioral indicators were collected.
- Metacognitive monitoring is a single item used to split the sample, which cannot capture monitoring's multiple components and may misclassify students near the cut.
- The group comparison rests on differences in coefficients across separately estimated models rather than a formal test of between-group differences.
- The sample comes from one comprehensive university in Zhejiang Province, recruited through one online panel with prior AI experience as an eligibility condition; disciplinary mix, institutional context and [[learning-gains|prior achievement]] are not modeled.
- The hypothesis numbering in the results section does not match the hypotheses as stated, which complicates replication checks even though the reported coefficients agree with each other.

## Citation

Guo, Y., & Dong, P. (2026). [University students’ overreliance on generative AI feedback in the learning process: the effects of perceived cognitive load, cognitive offloading, and metacognitive monitoring](https://doi.org/10.3389/fpsyg.2026.1998976). *Frontiers in Psychology, 17*, 1998976.
