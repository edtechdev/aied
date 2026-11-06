---
title: "Human-AI Collaboration for Qualitative Analysis in Participatory Design: Refining the Writing Analytics Tool"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/potter-participatory-design-writing-analytics-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [design and evaluation study]
audience: [instructors, educational technology developers, researchers]
level: [higher ed]
discipline: [writing education]
foundations: [human-ai-collaboration]
technology: [educational-nlp, generative-ai, human-in-the-loop-ai, llm, rag]
methods: [ai-assisted-educational-research, design-based-research, mixed-methods-research, qualitative-research]
assessment: [feedback, formative-assessment]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Potter, Serhan, Patne, Öncel, Ahmed, Arner, Islam, Roscoe, Allen, Crossley and McNamara report a participatory design cycle for the Writing Analytics Toolkit (WAT), an open-source platform that provides [[formative-assessment|formative feedback]] on student writing. Nine experienced college writing instructors evaluated the alpha version of WAT Classroom (WAT-C) in two focus group sessions, and the team analyzed the transcripts with a hybrid [[human-ai-collaboration|human-AI]] workflow in which GPT-4o generated inductive codes and preliminary themes inside a secure, retrieval-augmented platform that researchers then reviewed, critiqued and refined. Focus group themes and a post-session survey converged on four design priorities — clearer, more concise feedback, increased instructor customization, reduced administrative burden, and a simplified user interface — which directly informed revisions including a redesigned feedback display, customizable metric targets, [[learning-analytics|LMS]] integration and a streamlined layout. The study is an empirical, [[design-based-research|design-based research]] case of [[ai-assisted-educational-research|LLM-assisted qualitative analysis]] in which the model accelerated early coding but redistributed rather than removed researcher labor.

## Key Findings

1. **Nine instructors evaluated the alpha tool.** Nine college writing instructors with 97 cumulative years of teaching (average 9.4 years, ranging from 1 to over 20 years) participated in two roughly two-hour focus group sessions held over consecutive days via Zoom, each with two breakout rooms.
2. **The transcripts were segmented for the model.** To respect GPT-4o's approximate 10,000-token limit, the team split the focus group data into 17 topic-based files ranging from about 324 to 5,758 words each, processed through Arizona State University's secure CreateAI Chat platform, a [[rag|retrieval-augmented]] system operating at a fixed temperature of 0.5.
3. **The hybrid workflow produced four refined themes.** GPT-4o generated initial codes, definitions and quotations under a structured, chain-of-thought prompt framework; three core researchers re-coded the transcripts independently, two external researchers validated the full transcripts, and the team consolidated four themes: improving metric and feedback clarity, instructor customization and flexibility, integration with existing tools, and interface improvements for pedagogical impact.
4. **The model required substantial human oversight.** GPT-4o occasionally excluded or reworded quotations even when prompted to return verbatim excerpts, so all quotations were reviewed and contextualized by researchers; the model did not hallucinate new quotations, and every excerpt traced to the source data.
5. **The workflow redistributed labor rather than saving it.** The model accelerated early-stage coding, but verification, contextualization and triangulation added review layers, so the AI-assisted analysis did not reduce the overall analytic workload.
6. **Instructors rated descriptive analytics above predictive scores.** Development of Ideas received the highest mean usefulness rating of the advanced metrics (4.75, SD 2.05), followed by Academic Focus (4.25) and Varied Sentence Structure (4.22), while Word Concreteness (2.67) rated lowest and the predictive quality scores rated lowest overall, with Overall Quality Score at 2.33 (SD 1.22).
7. **Customization was the most valued affordance.** Uploading personalized rubrics rated highest at 4.56 (SD 1.51) and assigning multiple drafts 4.44 (SD 0.88), while creating summary writing tasks rated lowest at 2.00 (SD 1.50).
8. **Adoption intentions were modest.** Instructors rated the likelihood that WAT would improve student outcomes at 3.33 (SD 1.41) and likelihood of using WAT at 3.00 (SD 1.58), and the lowest rating, 2.56 (SD 0.73) for effect on instructional time, signaled workload concern.

## Two focus group sessions with nine instructors

The study was a second, refinement-oriented phase of participatory design built on an earlier cycle in which instructors had co-developed WAT-C's interface and chosen descriptive rather than predictive metrics. Participants were recruited at a large public university in the southwestern United States and each taught entry-level English writing courses. The alpha version of WAT-C generated analytics in three categories for persuasive and source-based essays — basic analytics such as word count, a holistic overall score on a 1–6 scale, and 13 advanced [[educational-nlp|NLP]]-derived metrics such as Sophisticated Wording, Development of Ideas, and Sentence Cohesion — plus a holistic quality score for summaries. Each advanced metric was presented on a five-level continuum with clickable explanations, revision suggestions and examples, and written feedback organized in a Why–When–How structure that states the rationale for the feedback, when the writing behavior is appropriate, and concrete revision strategies.

In the first session, instructors completed a scaffolded scavenger hunt through the teacher and student interfaces and then a metric-by-metric walkthrough of the 13 advanced metrics using example first and second drafts across persuasive essays, source-based essays and summaries. The second session covered the remaining metrics and closed with a discussion of what to keep, revise or remove, plus feasibility of classroom use. A post-session Qualtrics survey, grounded in the Technology Acceptance Model, asked the same nine instructors about perceived usefulness, ease of use, interpretability, behavioral intention and feasibility across five domains using 6-point Likert items and 15 open-ended questions; the instrument and the AI-generated codebooks are available in the project's Open Science Framework repository.

## A hybrid human-AI workflow for inductive coding

The analysis used a general inductive approach in which [[prompt-engineering|structured prompts]] specified the model's role as an expert qualitative researcher, defined input and output formats, and required reasoning-based steps, distinguishing open, axial and selective coding. Because CreateAI Chat does not support a system-level prompt or variable temperature, all instructions traveled in the opening user prompt, and follow-up prompts requested clearer definitions, additional examples, and participant attribution for quotations. The retrieval-augmented architecture drew on the focus group transcripts and Braun and Clarke's (2006) thematic analysis article as approved sources, constraining output to contextually grounded content.

Human validation unfolded in five stages: LLM-assisted open coding, independent re-analysis by three core researchers who had designed and facilitated the sessions, collaborative comparison and synthesis against the AI codebook, external validation by two researchers who had not participated in prompt engineering, and final consensus and consolidation of the four overarching themes. The authors report that the model occasionally excluded or reworded quotations and that outputs were shallow or inconsistently applied at times, yet it operated within the bounds of the provided dataset and did not fabricate quotations. Their overall assessment is that the LLM functioned as a structured analytic starting point — an analytic partner rather than a replacement — with human judgment determining the final themes.

## Four themes, four design revisions

The four themes each mapped to a concrete design response. Theme 1 — instructors found metrics redundant and feedback hard to parse — led to a redesigned feedback interface in which a single click opens a consolidated view with definitions, revision guidance and examples in an accordion structure, a metric taxonomy grouped into lexical, syntactic and rhetorical categories, and Information Density merged into Development of Ideas. Theme 2 — the demand for customization — produced instructor-set target values for each advanced metric during assignment creation, so teachers can mark, for example, "Academic" as the target for Academic Focus without altering the statistically grounded metric definitions. Theme 3 — workload and integration concerns — drove a Learning Tools Interoperability (LTI) integration that embeds WAT in an LMS such as Canvas with automatic gradebook pass-back, custom rubric creation linked to WAT metrics, and an exploratory chatbot prototype that translates WAT scores into revision guidance. Theme 4 — interface design — yielded a unified visual scheme replacing the previous color-coding, smaller metric containers, a collapsible side panel, and per-task progress monitoring for teachers.

## What this means for practice

- **Writing analytics developers should pretest their metric vocabularies with instructors.** Instructors rated Word Concreteness at 2.67 and chose to fold Information Density into Development of Ideas, showing that semantic overlap among metrics is a usability problem, not just a labeling question.
- **Structured feedback formats earn high marks when they stay concise.** Instructors rated feedback comments as helpful for revision at 4.11 and the Why–When–How structure at 4.11, but the reverse-coded item on adding more metric definitions scored 2.67, indicating that more detail can read as overwhelming.
- **LMS integration is an adoption precondition, not a convenience.** The lowest survey rating, 2.56 for effect on instructional time, paired with repeated requests to embed WAT in Canvas, signals that standalone tools add perceived administrative burden regardless of feedback quality.
- **Customization with guardrails satisfies both flexibility and interpretability.** Uploading personalized rubrics rated highest at 4.56, and instructors favored setting metric targets over changing definitions, preserving consistency while letting teachers communicate expectations.
- **Researchers should plan for validation stages when using LLMs for qualitative analysis.** The model accelerated open coding but required review of quotations and theme labels by the core team and two external coders, so hybrid workflows need budget for verification rather than promising time savings.

## Limitations

- The design phase captured only instructor perspectives; students, the actual recipients of the feedback, were not included, and their interpretation and revision behavior remain untested.
- Participation was a one-time, two-session engagement within a single design phase, with no re-engagement in later stages, so the process did not test sustained co-design across multiple cycles.
- No systematic metrics were captured to compare the AI-assisted workflow against a human-only baseline, so efficiency gains, error rates, and the cost of verification were not quantified.
- The sample was nine instructors at one public university teaching entry-level writing courses, and the survey analysis was limited to descriptive statistics, so the design priorities are not statistically generalizable.
- LLM-based features were not yet integrated into WAT itself during this phase; the chatbot revision assistant remains an initial prototype, and the tool's automated feedback continued to rely on the statistical metrics.

## Citation

Potter, A., Serhan, Z., Patne, N. A., Öncel, P., Ahmed, I., Arner, T., Islam, R., Roscoe, R. D., Allen, L. A., Crossley, S. A., & McNamara, D. S. (2026). Human-AI Collaboration for Qualitative Analysis in Participatory Design: Refining the Writing Analytics Tool. *Journal of Educational Data Mining*, 18(1), 113-155.
