---
title: "Using DeepSeek's reasoning-based AI model to support written feedback practices"
created: "2026-10-25T00:00:00-04:00"
updated: "2026-10-25T00:00:00-04:00"
type: article
authors: ["Wu, C.", "Li, A. W.", "Moorhouse, B. L."]
published: "2026-06-02"
venue: "Assessing Writing"
source_url: https://doi.org/10.1016/j.asw.2026.101077
foundations: [ai-education, critical-thinking, learner-identity, limitations-in-aied-research]
pedagogy: [metacognition, scaffolding, self-efficacy, student-ai-interaction]
technology: [generative-ai, llm, open-source, prompt-engineering]
assessment: [feedback, ai-feedback-quality, formative-assessment, summative-assessment]
methods: [usability-research]
ethics: [bias-mitigation, equity-in-ai-education, multilingual-learning, trust]
research_method: [literature review, case study]
discipline: [writing education]
level: [higher ed]
audience: [instructors, researchers]
page_kind: [synthesis]
sources: ['raw/papers/wu-deepseek-reasoning-written-feedback-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
---

> **Synthesis:** Wu, Li, and Moorhouse (2026) review [[open-source|DeepSeek]], a reasoning-based [[llm|large language model]] released in January 2025, as a support for student writers' written feedback practices, combining a review of recent [[generative-ai|generative AI]] feedback research with the authors' own exploratory prompting of the tool across five feedback tasks. Their central claim is that DeepSeek's inference-time reasoning, in which the model decomposes a prompt into sub-tasks, generates chains of thought, and revises them before answering, makes the rationale behind its feedback visible in a way most LLMs do not do unless explicitly asked. They also report clear limits: weaker and less consistent handling of higher-order writing skills, limited memory across turns, and a feedback style that favors linear, Western academic organization and standardized English.

## Key Findings

- **The reasoning trace is the pedagogical payload.** DeepSeek works by decomposing a prompt into a sequence of logical sub-tasks, generating intermediate reasoning steps or chains of thought, and reflecting on and revising those steps before producing a final response, a process the authors call inference-time thinking. In the worked IELTS example the reasoning appeared before the feedback, and a follow-up request triggered a second reasoning pass that converted a vague suggestion into a concrete, expanded version of the text.
- **Feedback is specific enough to act on, but some of it stays vague.** The draft feedback pinpointed strengths and weaknesses and included revision tips, yet several comments and recommendations were general or ambiguous enough that writers would need to request clarification. The authors' own example of a vague recommendation was "Extend 1-2 ideas fully (e.g., how strict rules cause frustration, or why some rules are essential) with concrete examples."
- **Surface-level work is stronger than higher-order work.** The authors report that DeepSeek engages coherence at sentence and paragraph level, identifies grammatical errors, and suggests lexical improvements, but that its performance on argumentation, idea development, synthesis, and genre awareness is sometimes less consistent. They cite Gao et al. (2025), whose study found DeepSeek limited in offering feedback on higher-order dimensions such as organizational structure, the development of context-specific ideas, and the deepening of arguments and counterarguments.
- **Memory is the weak point across a drafting cycle.** Over multiple turns or iterative drafts, DeepSeek struggles to retain and integrate earlier exchanges, which can produce inconsistent and fragmented feedback exactly where writers need sustained, contextually informed guidance.
- **Pronoun alternation shapes how feedback feels.** The feedback shifts between second person ("you") in recommendations and third person ("the user") inside the reasoning trace. The authors read the second-person mode as direct, personalized, and agency-supporting, and the third-person mode as objective and analytical, encouraging critical self-assessment and audience awareness, while noting the shift can burden clarity.
- **The feedback style carries a discourse bias.** The chain-of-thought style tends to emphasize linear progression from cause to effect and example to consequence, which prioritizes standardized argumentative structures and conventional academic discourse. Writers whose rhetorical traditions organize text differently may find their options narrowed, and the authors connect this to GenAI homogenization that marginalizes non-standard English users and erodes emerging [[learner-identity|writing identities]].
- **Access arguments cut both ways.** As an [[open-source]] model with comparatively low compute and power requirements, DeepSeek may reach writers in contexts where proprietary tools such as ChatGPT, Gemini, and Claude are unavailable, which the authors frame as a possible [[equity-in-ai-education|equity]] gain, while cautioning that device access, GenAI literacy, and institutional support decide whether that potential is realized.

## Study Design

- **Genre:** a technology review rather than an empirical study. There are no participants, no data collection, and no dataset; the authors state that no data were used for the research described in the article.
- **Evidence base:** a narrative review of recent work on generative AI in writing feedback, drawing on large-scale surveys (Henderson et al., 2025), experimental studies (Boudouaia et al., 2024; Wu et al., 2025), comparative work on human and ChatGPT feedback (Steiss et al., 2024), and a reliability study of DeepSeek in EFL writing evaluation (Gao et al., 2025).
- **Exploratory tasks:** the authors prompted DeepSeek for five uses: identifying linguistic errors, offering vocabulary improvement suggestions, analyzing text structure, giving [[feedback]] on coherence (defined in the article as the overall logical organization and flow of ideas within a text), and giving feedback against a marking rubric.
- **Worked example:** an IELTS writing task draft, with the revision request, the step-by-step reasoning process, and the generated feedback and improvement suggestions shown in Figures 1 to 3; a follow-up request produced a second reasoning trace and a detailed elaboration on the earlier vague recommendation in Figures 4 and 5.
- **Tool profile:** DeepSeek is described as released in January 2025 and reported to have reached 125 million monthly active users worldwide by June 2025, trained on domain-specific corpora, synthetic datasets, large-scale vision-language datasets, and curated mathematical reasoning datasets, with knowledge distillation, mixed precision, sparse attention, and expert models reducing computational load without compromising performance.
- **Data handling:** anything a user inputs is automatically collected and stored on DeepSeek's servers, which states the data are protected by technical, administrative, and physical security measures; users can opt out of having their input used to train DeepSeek's models or optimize its technologies.
- **What the design cannot support:** the article reports the authors' practical experience and reasoned arguments, so there are no effect sizes, no measured writing gains, and no controlled comparison of DeepSeek against other tools.

## What this means for practice

- **Instructors.** Treat the reasoning trace as the teaching payload rather than an overhead. Because DeepSeek shows how and why it reached a suggestion, students can be asked to read the reasoning and decide whether to accept it, which the authors link to [[metacognition|metacognitive awareness]] and the internalization of writing knowledge during revision. Plan for the vague comments. Build in a follow-up turn, since asking for the concrete example turned the "extend 1-2 ideas" recommendation into a worked model of what the revision should look like. Do not let the tool carry higher-order work. Argumentation, idea development, synthesis, and genre awareness need instructor guidance or structured instructional strategies on top of automated feedback.
- **Instructors.** Keep [[human-in-the-loop-ai|human judgment]] central to [[summative-assessment|summative]] decisions. DeepSeek can generate detailed evaluative feedback and provisional scores aligned with a marking rubric, but teachers should critically review, revise, and moderate that output rather than treat it as a replacement for human assessment.
- **Assessment designers.** Triangulate revision quality with process artifacts such as drafts, revision plans, and reflective statements explaining how and why changes were made, and require students to justify the suggestions they adopt, since improved organization may reflect GenAI guidance rather than the student's own learning.
- **Teachers and faculty developers.** [[prompt-engineering|Prompt literacy]] is a prerequisite, because prompt quality shapes the quality and relevance of the feedback produced. Instructors should teach students to write prompts that elicit detailed, personalized feedback across surface-level linguistic accuracy and higher-order rhetorical concerns, and institutions should offer targeted GenAI workshops, since many language teachers report insufficient technological knowledge and a lack of systematic training.
- **Researchers.** The article calls for empirical work on the causal effects of using DeepSeek on writing quality, revision quality and quantity, feedback quality, and writing length, and on affective variables such as motivation, [[self-efficacy]], [[anxiety-and-stress|anxiety]], and attitudes toward writing.

## Limitations

- The paper is a review plus the authors' exploratory prompting of one tool. It reports no participants, no outcome data, and no statistical comparisons, so its benefit claims are reasoned arguments rather than findings.
- The worked examples come from a single IELTS-style writing task, and judgments about feedback quality are the authors' own impressions; the design cannot show how diverse writers actually respond to the reasoning trace.
- DeepSeek is not transparent about the content of its training data, and the authors note that it mimics the structure of reasoning processes rather than genuinely reasoning, which bounds how far a visible chain of thought can be trusted.
- The memory limitation is described rather than measured, and the equity argument about open-source access depends on device access, GenAI literacy, and institutional support that the paper does not assess.
- The authors close with a caution that GenAI tools can homogenize writing, reduce writers' voices, and conform texts to privileged language varieties, which they frame as grounds for cautious use rather than a problem they test.

## Citation

Wu, C., Li, A. W., & Moorhouse, B. L. (2026). [Using DeepSeek's reasoning-based AI model to support written feedback practices](https://doi.org/10.1016/j.asw.2026.101077). *Assessing Writing*, 69, 101077.
