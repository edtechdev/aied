---
title: "Making argumentative work visible in GenAI-mediated assessment: An exploratory LLM simulation and questionnaire study in university ideological and political education"
created: "2026-11-01T08:06:18-05:00"
updated: "2026-11-04T23:05:00-05:00"
type: article
sources: ['raw/papers/liu-argumentative-work-visible-genai-assessment-2026.md']
confidence: medium
page_kind: [framework]
research_method: [experiment, survey]
discipline: [writing education, humanities education]
level: [higher ed]
audience: [assessment designers, instructors, researchers]
technology: [generative-ai, llm]
assessment: [assessment-validity, evaluative-judgment, process-oriented-assessment]
foundations: [academic-integrity, critical-thinking]
ethics: [ai-use-disclosure]
methods: [quantitative-research, mixed-methods-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** If polished prose no longer evidences the argumentative work behind it, the assignment has to require that work in the open. This study crossed three task formats — position essay, evidence-integration memorandum, and follow-up-and-revision [[writing-education|defense]] — with three [[generative-ai|AI-use]] scenarios, had a model produce 148 texts under each combination, and scored them on five features of argumentative composition. The scenario mattered most: texts written under disclosure, verification and revision instructions averaged 3.32 on the rubric against 2.67 for simulated no-AI writing. Task format decided which argumentative feature was available at all — position essays averaged 2.63, memoranda 3.16 and defenses 3.10.

## Key Findings

1. Texts were generated with DeepSeek-V3.1 through the official API (deepseek-chat endpoint) between 18 and 24 March 2026, at temperature 0.70, top-p 0.90, 2,200 maximum output tokens, with browsing, retrieval, [[rag|RAG]] and tool calling disabled, yielding 148 scored texts.
2. The design crossed three task formats with three AI-involvement scenarios and three thematic domains; scenario conditions were simulated no-AI, responsible collaboration (disclose, verify, explain model-assisted revisions) and concealed ghostwriting.
3. AI-use scenario produced the largest differences: responsible collaboration *M* = 3.32 (*n* = 54), concealed ghostwriting *M* = 2.93 (*n* = 44) and simulated no-AI *M* = 2.67 (*n* = 50).
4. Those contrasts were large — *d* = −1.13, 95% CI [−1.54, −0.72] for responsible collaboration against no-AI, and *d* = 0.88, 95% CI [0.46, 1.30] against concealed ghostwriting — while no-AI and ghostwriting differed only weakly, *d* = −0.39, 95% CI [−0.80, 0.02].
5. By task, evidence-integration memoranda scored 3.16 and follow-up-and-revision defenses 3.10 against 2.63 for position essays, and position essays were the format that varied most across the three scenarios.
6. Dimension-level scores show where the leverage sits: source–claim linkage and counterargument handling were both *M* = 2.26 under simulated no-AI and rose when the task or the instructions demanded them, whereas contextual grounding stayed comparatively high (3.48 no-AI, 4.11 responsible collaboration, 3.82 ghostwriting).
7. Two raters scored all 148 texts on the five-dimension TRASI — process visibility, source–claim linkage, contextual grounding, counterargument handling and revision-rationale clarity — after roughly two hours of training and two calibration rounds on 20 pilot texts.
8. A [[assessment|questionnaire]] of 268 respondents, each evaluating one of 27 stimuli, distinguished the same task functions: memoranda rated highest for source–claim linkage, defenses highest for counterargument response and revision explanation.

## Simulating the task instead of the student

This is a task-[[retrieval-spacing-interleaving|pretesting]] design, not a learning study, and reading it as the latter would be a mistake. The texts are model outputs under controlled prompts, so the paper cannot say what students learn; it can say what a given assignment format and a given set of AI-use instructions will cause a capable model to produce, and therefore what the resulting artifact can and cannot evidence.

That is a useful thing to know before an assignment is set. If a format's output looks the same whether or not the writer did the argumentative work, the format cannot distinguish the two, and no [[ai-detection|detection]] tool repairs a design flaw. The TRASI rubric operationalises the distinction into five features so the comparison is about argumentation rather than about how convincing the prose reads.

The second stage adds the evaluator's view. Respondents — 174 [[higher-ed|undergraduates]], 49 graduate students, 37 university teachers and 8 others — saw the task instructions, the text and background information, but not the condition labels, and their judgments tracked the task functions the rubric measured.

## Task structure works as an externalisation constraint

The cleanest result is that the formats differ in which argumentative feature they make unavoidable. A position essay asks for a judgment and reasons; a writer can supply those from prior belief and never touch a source. An evidence-integration memorandum requires multiple supplied sources, a link from each source to a claim, and a justification for source selection, so source–claim linkage becomes structurally necessary. A defense adds standardized follow-up questions and a revision that addresses objections and explains any change in judgment, which makes [[critical-thinking|counterargument handling]] and revision rationale non-optional.

That is why the position essay varied most across scenarios: with nothing requiring evidence or challenge, an AI-authored essay and a student-authored one can converge on the same surface. The memorandum and defense narrowed the scenario gap because the task itself carried the requirement.

For [[assessment-validity|assessment validity]], this reframes the design question. Rather than asking which format best resists AI, ask which argumentative decisions the format forces a writer to document — and then grade those decisions.

## Disclosure instructions did work, but only for the texts that followed them

Responsible collaboration scored highest of the three scenarios, which is a statement about what happened when the prompt required disclosure, verification and explanation of model-assisted revisions: the resulting text carried more visible argumentative work. Concealed ghostwriting scored below simulated no-AI, so the artifact under concealment looked worse on this rubric, not better.

The authors are careful about what this means. It is not a detection claim — the study does not test whether an evaluator could identify a ghostwritten text, and the questionnaire's AI-transparency ratings are elicited judgments rather than accuracy measures. It is a design claim: [[ai-use-disclosure|disclosure and verification requirements]] change what the model produces when it is following instructions, and an assignment that requires them gets a more inspectable artifact from honest users.

The complementary move is the one the paper ends on: build assessment around the argumentative decisions a writer must document — source choice, comparison of reasons, response to objections, explanation of revision — because those are the parts that survive when the prose no longer proves authorship.

## What this means for practice

- **Assessment designers.** Choose the format for the evidence it forces, not for the prose it elicits. A memorandum or a defense makes source use and revision visible in the artifact; a position essay does not, and it is where AI-written and student-written work converge most in this study.
- **Instructors.** Put disclosure, verification and explanation of model-assisted revisions in the assignment instructions. Under those instructions the model produced its highest-scoring texts here, and the requirement is also what a reader can inspect.
- **Integrity officers.** Do not treat scoring differences as detection. This study shows what artifacts look like under each scenario, not whether a reader can tell them apart, so a policy resting on evaluator intuition is unsupported by this evidence.
- **Researchers.** Use model simulation to pretest task formats before running a student study; it surfaces which formats can distinguish argumentative work cheaply, and it is a complement to, not a substitute for, student data.

## Limitations

- The texts are model-generated under controlled prompts, not student writing, so the study speaks to what tasks elicit from a model rather than to what students learn or produce.
- One model (DeepSeek-V3.1) at one configuration generated every text, so the artifact profiles are specific to that model's behavior in March 2026.
- The evidence comes from one disciplinary and national setting — university ideological and [[civic-and-political-education|political education]] in China — and three thematic domains within it.
- TRASI is an author-developed five-dimension rubric; two raters with roughly two hours of training scored the corpus, so the construct is new rather than established.
- The questionnaire sample was recruited from one university's course, year-level, graduate-student and faculty groups, with each respondent evaluating a single artifact.
- The study does not test detection accuracy, so nothing here supports claims about identifying AI-assisted work in practice.

## Citation

Liu, S., & Liu, W. (2026). [Making argumentative work visible in GenAI-mediated assessment: An exploratory LLM simulation and questionnaire study in university ideological and political education](https://doi.org/10.3389/fpsyg.2026.1908308). *Frontiers in Psychology, 17*, 1908308.
