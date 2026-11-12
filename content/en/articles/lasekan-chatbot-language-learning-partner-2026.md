---
title: "From chatbot to language-learning partner: learner–LLM configuration, affordances, and regulatory demands in foreign language learning"
created: "2026-11-12T08:20:00-05:00"
updated: "2026-11-12T08:20:00-05:00"
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
verified: [citation, numbers, links]
foundations: [ai-literacy, agency]
pedagogy: [self-directed-learning, self-regulated-learning, student-ai-interaction]
technology: [conversational-ai, speech-and-voice-technologies, personalized-learning]
assessment: [feedback]
ethics: [hallucination-risk, privacy]
---
> **Synthesis:** Learners who post publicly about using [[llm|large language models]] for [[language-learning|foreign-language learning]] describe them less as chatbots than as configurable [[pedagogy|pedagogical]] partners, where configuration — role, modality, activity — shapes both benefit and failure mode. A content analysis of 117 first-person posts and comments from 80 pseudonymous participants across seven public forums and X found the interlocutor role in 65.0% of records and at least two roles in 65.8%. Voice tracked conversation and pronunciation; text tracked vocabulary. More orchestrated configurations reported more [[personalized-learning|personalization]] (70.8% vs. 15.1%) and convenience (75.0% vs. 36.6%), yet 43.6% of accounts also reported a breakdown that clustered around the function the learner depended on. The authors call this an AI-mediated regulatory process while insisting the corpus records reported practice, not measured proficiency or [[self-regulated-learning|self-regulation]].

## Key Findings

1. **Eight pedagogical roles, interlocutor dominant.** The interlocutor role appeared in 65.0% of records (n = 76), language explainer in 27.4% (n = 32), corrective coach in 26.5% (n = 31), lexical coach in 26.5% (n = 31), input scaffold in 20.5% (n = 24), learning manager/customizer in 17.1% (n = 20), practice designer/evaluator in 16.2% (n = 19), and pronunciation/voice coach in 6.8% (n = 8).
2. **Role construction was usually multifunctional.** Mean roles per record was 2.06 (median = 2); 65.8% contained at least two. The most frequent pairs were interlocutor + corrective coach (n = 17), interlocutor + lexical coach (n = 16), corrective coach + language explainer (n = 16), and language explainer + lexical coach (n = 15). At participant level, 78.8% of the 80 identifiers showed interlocutor use.
3. **Modality tracked pedagogy.** Text chat appeared in 84 accounts (71.8%). Comparing the 81 text-only with the 15 voice-only records, voice was associated with conversation practice (100.0% vs. 55.6%, q = 0.007) and pronunciation (33.3% vs. 2.5%, q = 0.007), while text was associated with vocabulary learning (34.6% vs. 0.0%, q = 0.024). At participant level the pronunciation (1.9% vs. 33.3%, p = 0.003) and vocabulary (39.6% vs. 0.0%, p = 0.006) associations held; conversation fell to p = 0.054.
4. **Orchestration went with personalization and convenience.** Twenty-four records met the orchestration criterion against 93 that did not. Personalization appeared in 70.8% of orchestrated accounts versus 15.1% (OR ≈ 13.7, q < 0.001); convenience in 75.0% versus 36.6% (OR ≈ 5.21, q = 0.007). Orchestrated records averaged 3.29 perceived benefits against 1.96 (p = 0.001).
5. **The activity-breadth difference was partly definitional.** Orchestrated records averaged 3.54 activities against 1.90 (p < 0.001, rank-biserial r = 0.655), but four learning-management activities defined orchestration and were also counted. Excluding them, the gap narrowed to 2.25 versus 1.90 and lost significance (U = 1,319.5, p = 0.154, r ≈ 0.18).
6. **Breakdowns were function-specific.** Fifty-one records (43.6%) contained at least one concern: accuracy/language reliability 12.8% (n = 15), access/privacy/system constraints 12.0% (n = 14), pedagogical sustainability 12.0% (n = 14), interaction/continuity 10.3% (n = 12), and voice/technical reliability 5.1% (n = 6). Writing correction carried 38.7% any-concern with accuracy the principal pattern, conversation 46.1% with sustainability, and pronunciation 62.5% with access plus voice reliability.
7. **Favorable evaluations outran evidence of learning.** Of the 117 accounts, 74 (63.2%) were positive and 30 (25.6%) mixed; 80 (68.4%) called the LLM helpful without specifying measurable improvement, only 12 (10.3%) reported improvement, and one learner switched to human support.

## How the corpus was built

The study is a retrospective observational content analysis of naturally occurring public discourse. Retrieval began with 323 forum and X records; 15 duplicates were removed, leaving 308 unique records, of which 226 concerned LLM-supported human-language learning and 117 contained explicit first-person evidence of use for learning or teaching. Those 117 records, representing 80 pseudonymous participant keys, are the analytical sample. The post or comment, not the person, is the unit of analysis, so record-level percentages describe the collected discourse rather than prevalence among learners.

Coverage was uneven by design. Of the 117 records, 101 (86.3%) came from forums — LingQ (n = 38), Readlang (n = 36), Forobeta (n = 12), Hacker News (n = 8), Chinois Tips (n = 3), Practice Portuguese (n = 3), and the OpenAI Community (n = 1) — and 16 (13.7%) from X. The source frame ran from 1 January 2023 to 31 August 2026, though X data came from a recent-search window collected on 31 August 2026; Reddit and YouTube were excluded for lack of authorized access.

Coding was structured and multi-label: 16 activities became the eight roles, and concern codes became five breakdown domains. Primary coding and translation ran through an LLM pipeline (GPT-5 mini); a stratified 60-record sample was independently recoded by a second model (Claude Sonnet 4.6). Exact agreement was 90.0% for in-scope classification, 75.0% for evidence type, 90.0% for first-person use, 83.3% for stance, 90.0% for reported outcome, and 95.0% for promotional status; mean Jaccard agreement ranged from 0.610 for benefits to 0.942 for target languages. Mean model-assigned coding confidence was 0.852 (median = 0.86, minimum = 0.70), a [[self-assessment]], not a calibrated accuracy estimate. No independent human coding was conducted.

## What learners configured, and what the configuration cost

The paper's central distinction is between a technological capability and a pedagogical affordance. A model can generate language; that capacity becomes vocabulary support only when a learner configures it as a lexical coach and uses it for definitions, examples, or practice. Pedagogical identity is thus partly built by the user, separating a general-purpose LLM from computer-assisted language learning applications built around fixed functions. The same system appears as partner, explainer, corrector, lexical assistant, scaffold, and planner, often within one account.

Modality is the second axis, and results are framed as alignment rather than neutrality. All 18 voice-chat records involved conversation practice and 33.3% involved pronunciation; text-chat accounts spread across conversation (57.1%), vocabulary (34.5%), writing correction (32.1%), grammar explanation (28.6%), reading support (15.5%), and exercise generation (15.5%). The authors concede that learners may choose voice because they intend to speak, so modality is bound up with intention rather than independently producing the activity. Multimodality, they argue, should be judged by how well modes fit specific linguistic demands, not by how many a system offers — a point that lands on [[speech-and-voice-technologies|speech and voice technologies]] as much as on [[conversational-ai|conversational AI]] design.

The third axis is orchestration: whether an account shows an explicit learning-management behavior — study planning, memory customization, resource recommendation, or assessment/progress monitoring. Orchestrated configurations reported more benefits, and the personalization and convenience contrasts survived aggregation to the 80 participant identifiers (83.3% vs. 17.7%, p < 0.001; 77.8% vs. 37.1%, p = 0.003). All seven memory-customization accounts named both. Activity breadth correlated with benefit breadth across the corpus (Spearman's ρ = 0.565, p < 0.001) and not with concern breadth (ρ = 0.054, p = 0.567).

Breakdowns are the paper's corrective to affordance talk. The authors describe an affordance–breakdown duality: immediate correction depends on correction accuracy, personalization on system and contextual continuity, oral practice on speech reliability, and open-ended conversation on structure it may erode. The domains were not mutually exclusive, and the activity profiles are exploratory — memory customization showed the highest concern rate at 85.7% but on only 7 records, with a Wilson interval of [48.7%, 97.4%]. The framework runs from goal through role, modality and activity, affordance realization, monitoring, breakdown detection, and regulatory demand to possible reconfiguration. It is recursive rather than linear, and a map of where demands arise rather than proof that learners met them.

## What this means for practice

- **Instructors.** Teach configuration, not just access: which role for which task, which modality fits conversation versus grammar or vocabulary work, and how to notice when a configuration has stopped serving the goal.
- **Language-program designers.** Build monitoring into tasks that depend on correction accuracy. Writing correction and grammar explanation were the activities most associated with accuracy concerns, and learners are poorly placed to detect a wrong correction in a language they do not yet command.
- **Learners.** Treat personalization as a maintenance obligation rather than a feature. Memory customization produced the highest concern rate in the study, though on only 7 records, so configurations promising the most continuity also demand the most checking when context or platform conditions change.
- **Researchers and evaluation teams.** Pair self-report with process evidence. The corpus cannot show whether learners recognized a breakdown or adapted to it, so claims about [[metacognition|metacognitive]] gain need logs, think-alouds, or validated [[self-regulated-learning|self-regulation]] measures, not retrospective posts.

## Limitations

- The sample is purposive and platform-uneven: forums supplied 101 of 117 records, Reddit and YouTube are absent, and the authors say the results are not prevalence estimates for language learners.
- Voluntary-publication bias is unaddressed by design; learners who post publicly may differ from those who do not, and unusually positive or negative experiences are likelier to be reported.
- Platform composition compounds it: LingQ and Readlang contributors belong to dedicated language-learning communities and may differ from general LLM users.
- All practices are [[self-report-measures|self-reported]] and retrospectively reconstructed; no behavior was observed, no proficiency was tested, and perceived helpfulness or reported improvement cannot establish [[learning-gains|learning effectiveness]].
- Psychological [[self-regulated-learning|self-regulation]], metacognition, motivation, and adaptive responses such as verification, reprompting, or modality switching were not measured, so the framework identifies regulatory demands rather than documenting regulatory competence.
- Coding and translation were done by LLMs with no independent human coding; cross-model agreement (Jaccard 0.610 for benefits) shows consistency between two models, not correctness against expert judgment, and several activity subgroups are small (memory customization n = 7, pronunciation n = 8, exercise generation n = 14) with wide confidence intervals.

## Citation

Lasekan, O. A., Godoy Pena, M. T., & Mathew, B. S. (2026). [*From chatbot to language-learning partner: learner–LLM configuration, affordances, and regulatory demands in foreign language learning*](https://doi.org/10.3389/fpsyg.2026.1995850). *Frontiers in Psychology, 17*, 1995850. https://doi.org/10.3389/fpsyg.2026.1995850