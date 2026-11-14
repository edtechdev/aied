---
title: "From chatbot to language-learning partner: learner–LLM configuration, affordances, and regulatory demands in foreign language learning"
created: "2026-11-12T06:36:55-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
page_kind: [evaluation, framework]
research_method: [secondary analysis]
evidence_context: educational
level: [adult learning]
audience: [instructors, learners, researchers]
discipline: [language learning]
sources: ['raw/papers/lasekan-chatbot-language-learning-partner-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1995850"
source_depth: full text
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, agency]
pedagogy: [self-directed-learning, self-regulated-learning, student-ai-interaction]
technology: [conversational-ai, speech-and-voice-technologies, personalized-learning]
assessment: [feedback]
ethics: [hallucination-risk, privacy]
---
> **Synthesis:** Learners who write publicly about using a [[llm|large language model]] to study a language describe something more deliberate than chatting: they treat it as a [[language-learning|language learning]] partner, give it a role, choose a mode, and aim it at a task. Across 117 first-person accounts, the commonest setup was a conversation partner, often paired with a corrector or explainer; voice users practiced speaking while text users worked on vocabulary and writing. Learners who planned, set memory and tracked progress reported more [[personalized-learning|personalization]] and convenience, and also more breakdowns, concentrated where they leaned on the tool: accuracy in correction, continuity in conversation, reliability in speech. The authors frame this as a [[self-regulated-learning|self-regulation]] demand the learner must meet, and caution that the accounts record described [[pedagogy|practice]], not measured proficiency.

## Key Findings

1. **Learners used the model as a conversation partner first.** The interlocutor role appeared in 65.0% of accounts, with explainer, corrector, vocabulary coach, scaffold, planner and pronunciation coach appearing behind it.
2. **Most learners combined several roles in one setup.** The typical account named about two, and the commonest pairs married conversation with correction or explanation rather than keeping one function separate.
3. **The mode matched the task.** Voice records were about speaking and pronunciation; text records spread across vocabulary, writing correction, grammar explanation, reading support and exercise generation.
4. **Planning and memory went with more perceived benefit.** Accounts showing study planning, memory customisation, resource recommendation or progress monitoring reported personalization and convenience far more often than those that did not, and counted more distinct benefits.
5. **The activity-breadth advantage was partly circular.** Accounts with explicit management behavior listed more activities, but four of those activities were the definition of that behavior; with them set aside, the gap shrank and lost significance.
6. **Breakdowns followed the function the learner depended on.** 43.6% of accounts reported at least one concern: accuracy in correction, continuity in open conversation, and access plus voice reliability in pronunciation work.
7. **Enthusiasm outran evidence of learning.** Most accounts were positive and most called the tool helpful without describing measurable improvement; few reported improvement, and one learner went back to human support.

## How the corpus was built

The study is a retrospective observational content analysis of naturally occurring public discourse, not an experiment or a survey. Retrieval began with 323 forum and social-media records; after duplicates were removed, 308 unique records remained, of which 226 concerned LLM-supported human-language learning and 117 contained explicit first-person evidence of use for learning or teaching. Those 117 records, representing 80 pseudonymous participant keys, form the analytic sample. The post or comment, not the person, is the unit of analysis, so record-level percentages describe the collected discourse rather than prevalence among learners.

Coverage is uneven by design. Most records came from dedicated language-learning forums — LingQ, Readlang, Forobeta, Hacker News, Chinois Tips, Practice Portuguese and the OpenAI Community — and 16 from X. The source window runs from 1 January 2023 to 31 August 2026, though X data came from a recent-search window collected on a single day; Reddit and YouTube were excluded for lack of authorized access.

Coding was structured and multi-label: 16 activities became the eight roles, and concern codes became five breakdown domains. Primary coding and translation ran through an LLM pipeline, and a stratified 60-record sample was independently recoded by a second model. Agreement between the two models was generally high but uneven across fields, and the confidence scores the pipeline assigned are a model's [[self-assessment|self-assessment]] rather than a calibrated accuracy estimate. No independent human coding was conducted.

## What learners configured, and what the configuration cost

The paper's central distinction is between a technological capability and a pedagogical affordance. A model can generate language; that capacity becomes vocabulary support only when a learner configures it as a lexical coach and uses it for definitions, examples, or practice. Pedagogical identity is thus partly built by the user, which separates a general-purpose LLM from computer-assisted language learning applications built around fixed functions. The same system appears as partner, explainer, corrector, lexical assistant, scaffold and planner, often within one account.

Modality is the second axis, and results are framed as alignment rather than neutrality. All 18 voice-chat records involved conversation practice and about a third involved pronunciation, while text-chat accounts spread across conversation, vocabulary, writing correction, grammar explanation, reading support and exercise generation. The authors concede that learners may choose voice because they intend to speak, so modality is bound up with intention rather than independently producing the activity. Multimodality, they argue, should be judged by how well modes fit specific linguistic demands, not by how many a system offers — a point that lands on [[speech-and-voice-technologies|speech and voice technologies]] as much as on [[conversational-ai|conversational AI]] design.

The third axis is orchestration: whether an account shows explicit learning-management behavior such as study planning, memory customisation, resource recommendation, or assessment and progress monitoring. Orchestrated configurations reported more benefits, and the personalization and convenience contrasts survived aggregation from records to the 80 participant identifiers. Activity breadth also correlated with benefit breadth across the corpus, and not with concern breadth — a pattern the authors read as learners expanding a setup that was working, rather than as breadth causing satisfaction.

Breakdowns are the paper's corrective to affordance talk. The authors describe an affordance–breakdown duality: immediate correction depends on correction accuracy, personalization on system and contextual continuity, oral practice on speech reliability, and open-ended conversation on structure it may erode. The domains were not mutually exclusive, and the activity profiles are exploratory — memory customisation showed the highest concern rate, but on only seven records, with a wide interval. The framework runs from goal through role, modality and activity, affordance realization, monitoring, breakdown detection, and regulatory demand to possible reconfiguration. It is recursive rather than linear, and a map of where demands arise rather than proof that learners met them.

## What this means for practice

- **Instructors:** Teach configuration, not just access — which role for which task, which modality fits conversation versus grammar or vocabulary work, and how to notice when a configuration has stopped serving the goal. A learner who can name the role they need can also judge whether the tool is still filling it.
- **Designers:** Build monitoring into tasks that depend on correction accuracy. Writing correction and grammar explanation were the activities most associated with accuracy concerns, and learners are poorly placed to detect a wrong correction in a language they do not yet command.
- **Learners:** Treat personalization as a maintenance obligation rather than a feature. Memory customisation produced the highest concern rate in the study, so setups that promise the most continuity also demand the most checking when context or platform conditions change.
- **Researchers:** Pair self-report with process evidence. The corpus cannot show whether learners recognized a breakdown or adapted to it, so claims about [[metacognition|metacognitive]] gain need logs, think-alouds, or validated [[self-regulated-learning|self-regulation]] measures rather than retrospective posts.

## Limitations

- The sample is purposive and platform-uneven: forums supplied 101 of the 117 records, Reddit and YouTube are absent, and the authors say the results are not prevalence estimates for language learners.
- Voluntary-publication bias is unaddressed by design; learners who post publicly may differ from those who do not, and unusually positive or negative experiences are likelier to be reported.
- Platform composition compounds it: LingQ and Readlang contributors belong to dedicated language-learning communities and may differ from general LLM users.
- All practices are [[self-report-measures|self-reported]] and retrospectively reconstructed; no behavior was observed, no proficiency was tested, and perceived helpfulness or reported improvement cannot establish [[learning-gains|learning effectiveness]].
- Psychological [[self-regulated-learning|self-regulation]], metacognition, motivation, and adaptive responses such as verification, reprompting, or modality switching were not measured, so the framework identifies regulatory demands rather than documenting regulatory competence.
- Coding and translation were done by LLMs with no independent human coding; cross-model agreement shows consistency between two models, not correctness against expert judgment, and several activity subgroups are small, with wide intervals.

## Citation

Lasekan, O. A., Godoy Pena, M. T., & Mathew, B. S. (2026). [*From chatbot to language-learning partner: learner–LLM configuration, affordances, and regulatory demands in foreign language learning*](https://doi.org/10.3389/fpsyg.2026.1995850). *Frontiers in Psychology, 17*, 1995850. https://doi.org/10.3389/fpsyg.2026.1995850
