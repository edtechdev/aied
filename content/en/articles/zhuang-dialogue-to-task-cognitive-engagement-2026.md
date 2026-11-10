---
title: "From Dialogue to Task: How Cognitive Engagement With Generative Artificial Intelligence"
created: "2026-11-10T18:30:00-05:00"
updated: "2026-11-10T18:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [process-outcome modeling, secondary analysis]
evidence_context: educational
level: [higher ed]
audience: [instructors, researchers, learning analytics designers]
sources: ['raw/papers/zhuang-dialogue-to-task-cognitive-engagement-2026.md']
source_url: "https://arxiv.org/abs/2611.11435"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [human-ai-collaboration]
pedagogy: [icap-framework, student-ai-interaction, student-engagement, help-seeking]
technology: [generative-ai, learning-analytics]
assessment: [peer-assessment]
methods: [quantitative-research]
institutions: []
ethics: []
---

> **Synthesis:** Zhuang, Bakharia, Gašević and Khosravi (2026) ask what the shape of a student's conversation with an embedded AI companion says about what the student does next. On RiPPLE, a [[higher-ed|university]] learning platform, three task-specific companions served 1,681 students across 40 courses — Crea during resource creation, Modi during peer moderation, Praxie during practice. Coding 829 complete threads with a dialogue-oriented [[icap-framework|ICAP]] scheme, they found Passive (37.4%) and Active (27.1%) [[student-ai-interaction|dialogue]] dominating overall but shifting by task: 59.0% Passive under moderation, 41.7% Active under practice, and the largest Constructive and Interactive shares under creation. First-order Markov models of 2,969 task sequences placed that dialogue inside the workflow, and regression models tied dialogue features to re-engagement and peer-rated quality. The result is a dissociation worth holding onto: composing your own message was associated with more returns to the task, deeper [[student-engagement|cognitive engagement]] with better artifacts, and return frequency with neither — which makes [[learning-analytics|analytics]] that count prompts a poor proxy for either.

## Key Findings
1. **Passive and Active dialogue predominated.** Across 829 coded threads, Passive accounted for 37.4% and Active 27.1% (535 threads, 64.5%), against 14.0% Constructive, 13.3% Interactive and 8.2% off-task.
2. **Task context shifted the mix.** Passive ran 59.0% under peer moderation and 33.3% under practice, Active 41.7% under practice, while resource creation held the largest Constructive (19.3%) and Interactive (21.6%) shares; Cramér's V = 0.294.
3. **Deeper engagement less often ended the session.** Constructive and Interactive threads were less frequently followed directly by session termination, by −0.14 and −0.17 in Creation and by −0.30 and −0.33 in Moderation.
4. **Composing your own message was associated with more returns.** Among Passive Creation sequences, those with student-composed messages showed 0.44 more dialogue-to-task transitions than template-only ones (1.39 vs 0.95; Holm-adjusted p = .002).
5. **Depth, not frequency, tracked artifact quality.** Constructive/Interactive sequences were more likely to earn a higher peer rating (POR = 2.12, p = .029; expected ratings 4.33 vs 4.08), while transitions per standard deviation were not (POR 0.91 and 0.78).
6. **In practice, fewer further attempts but better ones.** After an incorrect attempt, AI dialogue within 30 seconds was associated with lower continuation (OR = 0.37) but higher next-attempt correctness among continuers (OR = 2.78); joint recovery was uncertain (OR = 1.72).

## One platform, three companions, four modes

RiPPLE runs a cycle in which students create learning resources such as multiple-choice questions, notes, flashcards and worked examples, evaluate and moderate peers' resources, then practice on them. [[generative-ai|Generative AI]] entered each stage through a companion with a job: Crea gave formative feedback on structure, clarity and topical alignment during creation; Modi helped students phrase constructive reviews during moderation; Praxie offered conceptual explanations during practice. Each was a task-embedded [[scaffolding|scaffolding]] agent rather than a general [[conversational-ai|chatbot]], and each request carried the current task context — resource type, topic, content or practice state.

Students could open a companion at any point and could also submit predefined conversation-starter templates, and the platform logged whether each prompt was template-generated or student-composed. That distinction later carried information the engagement coding did not. Data came from routine use between June 2025 and June 2026 across 40 courses spanning computer science, medicine, business and economics, social sciences, mathematics, and languages and applied linguistics.

## What the coding counted

The [[student-ai-interaction|student-AI]] coding adapts [[icap-framework|ICAP]] to conversations rather than utterances, with the complete thread as the unit of analysis and one mutually exclusive label per thread: off-task, Passive, Active, Constructive or Interactive. On-task threads take the highest clearly evidenced mode, following the ordering Interactive > Constructive > Active > Passive, and higher modes require substantive student contribution — AI text alone cannot lift a thread. Off-task threads stayed in the RQ1 denominator and were dropped from everything downstream.

Coding was a hybrid human-AI workflow: GPT-5.4 drafted the codebook, researchers revised it, and GPT-5.5 applied it after calibration on 200 threads against thresholds of pairwise Cohen's κ ≥ 0.60 and three-rater Krippendorff's α ≥ 0.70. The 262 threads (9.6%) flagged below 0.9 confidence were adjudicated by researchers, revising 35 labels. Because template-only threads are Passive by rule, 1,894 were excluded from the engagement description, leaving 829 threads from 577 students.

## The task decides what the dialogue can be

The distribution is what a sceptic would expect, with structure underneath. Passive and Active together accounted for 64.5% of threads, and the semantic analysis separated them from the higher modes: Passive and Active messages clustered around generic [[help-seeking|help-seeking]], task management and answer checking, whereas Constructive and Interactive messages were distinguished by disciplinary concepts and student-generated reasoning about them.

The variation by task is the useful part. Creation, where students bring their own draft, held the largest Constructive (19.3%) and Interactive (21.6%) shares and 26.0% Passive. Moderation was 59.0% Passive, 33 percentage points more than Creation — its object is a peer's resource, and students could ask the companion to supply the evaluative judgment rather than defend their own, a shift in the [[human-ai-collaboration|division of cognitive labor]]. Practice was 41.7% Active and carried the most off-task traffic (15.1%). Because each companion was tied to one task, these differences reflect task demands, companion role and platform affordances acting together, not companion effectiveness.

## Two outcomes, two different predictors

The outcome models split cleanly. Within Creation, Passive sequences containing student-composed messages produced 0.44 more dialogue-to-task transitions than template-only Passive sequences, adjusted means of 1.39 and 0.95 per artifact. On peer-rated quality the pattern reversed: student-composed messages were associated with a smaller, non-significant difference (0.12 rating points), while Constructive/Interactive sequences were more likely than Passive/Active ones to receive a higher [[peer-assessment|peer rating]], expected 4.33 against 4.08. Adding return counts to the quality models produced no association, so the depth association was not a frequency effect in disguise.

The process models explain why a count is a poor summary. Dialogue recurred throughout creation, most strongly after option construction, and automated feedback led back to dialogue more often than to any authoring state; in moderation, session termination was the most common state after dialogue. In practice the three post-error outcomes did not point one way: AI dialogue was associated with fewer further attempts, better next attempts among continuers, and a joint-recovery estimate whose interval covered the null. Higher conditional correctness is performance while support is available, and the authors say so plainly.

## What this means for practice

- **Instructors.** Stop reading prompt volume as effort, and stop reading a Passive thread as passivity. Ask what the student wrote in it and what they did after it, because a Passive thread with a self-written request behaved differently from one built from starters.
- **Instructors.** Put the student's own artifact or claim in front of the companion. Creation produced the most Constructive and Interactive dialogue because there was a draft to explain, defend and revise, and that condition is reproducible in any task.
- **Instructional designers.** Treat starters as an entry point, not a substitute. A template that asks students to name the difficulty or say what they have already considered preserves accessibility while leaving room for a student-composed message.
- **Administrators.** Commission four separate indicators rather than one engagement score — message source, engagement mode, position in the workflow, and what followed the dialogue — and report continuation and correctness separately in practice settings.

## Limitations

- All relationships are associational: students chose when and how to seek AI help, and the authors frame experimental manipulation of starters, companion prompts and timing as the required follow-up.
- The quality contrast rests on 98 artifacts (34 Passive/Active, 64 Constructive/Interactive) from 346 linked multiple-choice questions by 281 students; the message-source contrast covered 192 artifacts, only 25 of them student-composed Passive.
- Quality was peer-rated final-version quality on a five-point scale and practice performance was next-attempt correctness, both measured while AI was available; nothing here measures unaided learning.
- The Practice analysis is exploratory, from 259 eligible incorrect attempts by 166 students, and only 34 students contributed under both AI and no-AI conditions, leaving the within-person estimate imprecise.
- Logs capture RiPPLE only; assistance from external tools such as ChatGPT or Claude, which students commonly use alongside a platform, is invisible to the analysis.
- Engagement was coded by an LLM under human calibration, and agreement was lowest for Active (κ 0.62–0.66), the boundary where generic and content-specific requests meet.

## Citation

Zhuang, X., Bakharia, A., Gašević, D., & Khosravi, H. (2026). [*From Dialogue to Task: How Cognitive Engagement With Generative Artificial Intelligence Relates to Post-Dialogue Activity and Task Outcomes*](https://arxiv.org/abs/2611.11435). arXiv:2611.11435.
