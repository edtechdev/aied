---
title: "Structured Questioning with Generative AI: Question Chains, Self-Regulated Learning, Metacognition, and Achievement in a Quasi-Experiment"
created: "2026-10-25T08:30:00-04:00"
updated: "2026-10-25T08:30:00-04:00"
type: article
sources: ['raw/papers/question-chain-prompting-srl-metacognition-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: [learning sciences]
audience: [instructors, instructional designers, faculty developers, researchers]
level: [higher ed, undergraduate]
pedagogy: [self-regulated-learning, metacognition, scaffolding, socratic-method, active-learning, inquiry-based-learning, student-ai-interaction]
technology: [generative-ai, llm, conversational-ai, prompt-engineering, learning-analytics]
assessment: [self-report-measures, learning-gains, assessment-validity]
methods: [quantitative-research, research-methods-aied]
institutions: []
ethics: [ai-use-disclosure]
foundations: [human-ai-collaboration, agency, critical-thinking, limitations-in-aied-research, interpreting-and-applying-aied-research]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Lin, Li, Zhu et al. (2026) test whether a [[prompt-engineering|structured questioning]] package changes how undergraduates use generative AI. In a quasi-experiment with 83 undergraduates across three intact classes in a television program production course, one class used free-form questioning while two used prescribed [[self-regulated-learning|self-regulated learning]]-oriented chains, a progressive chain that deepens one narrative pathway and a divergent chain that generates and compares alternatives. Both chain groups logged more learning-strategy and learning-monitoring behavior (χ² = 6.551, p = .038), scored higher on knowledge of cognition (F = 3.406, p = .038) [[self-regulated-learning|regulation of cognition]] (F = 3.323, p = .041), and earned higher grades (F = 3.807, p = .035). The two chains did not differ from each other on any outcome. Because the chains bundled specific, sequenced and required questions, the authors present them as an instructional package and decline to claim that chaining itself caused the gains.

## Key Findings

1. **Both question-chain groups showed far more monitored behavior.** The control group logged 33 learning-strategy instances (25.00%) and 36 learning-monitoring instances (14.46%) against 52 (39.40%) and 108 (43.37%) for the progressive group and 47 (35.60%) and 105 (42.17%) for the divergent group; the three groups differed significantly (χ² = 6.551, p = .038).
2. **The two chains did not differ from each other on behavior.** Progressive versus divergent comparison gave χ² = 0.090, p = .765, so the study found no advantage of one chain form over the other in the interaction logs.
3. **Metacognitive awareness rose in both experimental groups.** Knowledge of cognition was 3.96 (SD = 0.47) for the control group against 4.23 (SD = 0.40) and 4.24 (SD = 0.52) for the experimental groups (F = 3.406, p = .038); regulation of cognition was 3.99 (SD = 0.09) against 4.27 (SD = 0.07) and 4.25 (SD = 0.10) (F = 3.323, p = .041).
4. **Grades favored the chain groups by a few points.** The control group mean was 86.67 (SD = 2.915) against 90.50 (SD = 3.705) and 90.13 (SD = 3.182), with the control group lower than each experimental group (mean differences of −3.833, p = .015 and −3.458, p = .043) and the two chains indistinguishable (0.375, p = .808).
5. **Effects are claimed for the package, not for chaining.** The chains differed from free-form questioning in the specificity and quality of the prescribed questions, their sequence, the requirement that each question build on the previous response, the requirement to complete every step, and the wording of the reflection prompts.
6. **Reflection findings are weaker than the log findings.** Reflection subthemes are reported descriptively only, because the [[self-report-measures|reflection prompt]] differed by condition and cued some of the coded themes.
7. **The intervention was cheap and light.** Question chains required no modification of the AI system and were delivered as instruction sheets over a five-week project, which is the study's main practical claim.

## What the two chains asked students to do

The study transplants [[socratic-method|question chains]] from [[teacher-role|teacher]]-student interaction into human-AI dialogue. The progressive chain prescribed nine questions in sequence, from naming the three most central emotional conflicts of a topic to a final review of the storyboard script for logical breaks and emotional jumps, each question intended to build on the preceding AI response. The divergent chain prescribed nine rounds that begin by generating two story ideas from each of three completely different genres and end by explaining the artistic purposes of at least five of the most creative shots. Both conditions required students to follow the chain without skipping steps, which is why the authors describe the treatment as an instructional package rather than as a test of sequencing alone. The control group received eight optional example prompts that were generic, unordered, and did not require each question to build on the last.

## What the evidence can and cannot support

The design is a quasi-experiment with intact classes, so group differences may reflect class [[writing-education|composition]] rather than the treatment. No baseline measure of individual domain knowledge was administered, and metacognitive awareness was assessed only through a post-intervention [[self-report-measures|self-report]] instrument, an adapted 10-item Metacognitive Awareness Inventory with a pilot Cronbach's α of 0.824. The log analysis did not assess adherence to the prescribed sequence, completion of all steps, or dependency on preceding AI responses, so the proposed evaluative mechanism remains untested, and some coded behaviors, such as knowledge expansion and content evaluation, were partly embedded in the prescribed questions themselves. The intervention ran with a single GenAI system, [[generative-ai|DeepSeek]], during one course project, and the paper names ChatGPT and DeepSeek as the tools that have entered higher education.

## What students said about the interaction

The 83 post-task reflections were coded thematically into three core themes: enabling value of GenAI, [[human-ai-collaboration|human-AI collaboration]] strategies, and limitations of GenAI. Experimental-group students more often described GenAI as a source of creative inspiration and idea development, while control-group students more often described it as a source of information. Students in the experimental groups more frequently discussed prompt design and iterative interaction, reporting that they refined prompts as the dialogue progressed and selectively adopted AI suggestions. Control-group reflections more often raised content-quality complaints such as vagueness, formulaic responses, and limited depth, whereas experimental-group students more often noted limits in realism and emotional expression. Inter-coder agreement moved from Cohen's κ = 0.626 in the first round to 82.7% agreement (κ = 0.827) in the second. The authors report these frequencies descriptively and do not treat them as independent evidence of group differences, because each condition's reflection prompt cued different themes.

## What this means for practice

- **[[teacher-role]]** Hand students a prescribed chain of specific questions for a GenAI-supported creative task and require each question to build on the previous AI response, because both chain groups logged more learning-monitoring behavior than the control group (χ² = 6.551, p = .038).
- **Instructors.** Pick a chain form on task grounds rather than expected potency: the progressive and divergent chains did not differ on any outcome, and the study reports no difference between them on behavior, [[metacognition]], or grades.
- **Instructional designers.** Budget the chain as an [[inquiry-based-learning|inquiry]] scaffold rather than a prompt template, and expect the required sequencing and step completion to be part of the effect, since the design cannot separate them from prompt quality.
- **Faculty developers.** Treat [[self-report-measures|reflection]] evidence as corroboration, not as independent evidence: use one neutral reflection prompt across conditions if you want a comparable account of student experience.
- **Researchers.** Log the interaction and check adherence to the prescribed sequence, step completion, and dependency on preceding responses; this study's proposed evaluative mechanism remains untested without those checks.

## Limitations

- The study is a quasi-experiment with 83 undergraduates in three intact classes (28, 30, and 25) at a university in Guangzhou, China, and no baseline measure of individual domain knowledge was administered, so pre-existing differences cannot be ruled out or statistically controlled.
- The sample came from a single television program production course at one university, which the authors say may limit generalizability.
- Metacognitive awareness was measured only post-intervention by a shortened 10-item adaptation of the Metacognitive Awareness Inventory, so change over time is inferred and the shortened instrument needs further validation.
- The question chains differed from free-form questioning in specificity, sequencing, and required completion, so isolating chaining would require a condition receiving the same questions without the sequential dependency.
- The reflection prompts differed by condition and cued some of the coded themes, so the reflection findings are tentative; the authors recommend identical, neutral prompts in future work.
- The log analysis did not assess adherence to the prescribed sequence, completion of all steps, or dependency on preceding AI responses, and the intervention ran with a single GenAI system over one course project.

## Citation

Lin, X., Li, S., Zhu, Y. et al. (2026). [Effects of question-chain prompting on self-regulated learning, metacognition, and achievement in a generative AI environment](https://doi.org/10.1186/s41239-026-00632-7). *International Journal of Educational Technology in Higher Education*, *23*, 57.
