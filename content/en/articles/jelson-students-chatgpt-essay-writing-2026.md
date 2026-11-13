---
title: "An Empirical Study to Understand How Students Use ChatGPT for Writing Essays"
created: "2026-11-01T06:47:19-05:00"
updated: "2026-11-01T13:00:00-05:00"
type: article
sources: ['raw/papers/jelson-students-chatgpt-essay-writing-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [user study, thematic analysis]
discipline: [writing education, cs education]
level: [higher ed]
audience: [instructors, researchers, educational technology developers]
technology: [llm, generative-ai, conversational-ai, technology-acceptance-model, vibe-coding]
methods: [mixed-methods-research, qualitative-research, quantitative-research]
foundations: [academic-integrity, agency, cognitive-surrender]
pedagogy: [self-efficacy, student-ai-interaction, creativity]
assessment: [self-report-measures]
ethics: [privacy, differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Instead of asking students what they did with [[generative-ai|ChatGPT]], this study watched. Every query, keystroke and paste from 77 college essay writers was logged on an instrumented platform, so use could be coded against the writing process itself. The trace shows delegation that self-report hides: requests handing over whole passages were the most common category, one in five students submitted essays with no typed words of their own, and students with lower writing confidence queried more. Yet most still felt the essay was theirs.

## Key Findings

1. Seventy-seven US college students wrote one argumentative essay on an ACT-style automation prompt, on a platform that logged every ChatGPT query, its response, and keystroke-level editor activity including copy and paste. They sent 361 messages, 320 of which fell into the four coding categories and yielded 26 unique codes.
2. Planning queries were used by 35 of the 77 participants, Reviewing by 34, Translating by only 10, "the least common query type in our dataset".
3. All-type requests, delegating planning, translating and reviewing at once, were the most common category: 137 queries from more than 50% of participants, averaging 3.3 among those who used them.
4. Twenty participants asked for an entire essay (AL01), "the most frequently used code among all query types", and 15 (19.5%) submitted essays 100% written by ChatGPT.
5. Use was bimodal: 39 of the 77 asked at most twice, six never used the tool, and the heaviest participant submitted 27 queries.
6. K-means at K = 6 produced No Query (n = 6), Planning (16), Translating (5), Reviewing (9), All (25) and Mixed (16); Group A's queries were 95.1% All-type, Group P's 93.0% Planning, Group M's split across Planning (33.2%), Reviewing (37.6%) and All (26.1%).
7. SEWS was negatively associated with total queries (−0.258, SE 0.075, p < 0.001), carried by Translating (−0.949, SE 0.307, p < 0.01) and Reviewing (−0.588, SE 0.154, p < 0.001), with no association for Planning (−0.204, SE 0.147) or All (−0.016, SE 0.114).
8. Groups A and M carried significantly more ChatGPT-pasted words than N, P and R (significant pairs N-A, N-M, P-A, P-M and R-A), and Group A scored higher on readability: Flesch-Kincaid H(5) = 32, p < 0.001; Dale-Chall H(5) = 34, p < 0.001.
9. Perceived ownership was lower only in Group A (H(5) = 27.876, p < 0.001; pairs N-A, P-A, R-A), Groups P and R matching non-users. Total CSI did not differ, but CSI-Exploration did (H(5) = 11.110, p = .0490, N versus M) and CSI-Immersion also (H(5) = 12.463, p = .0300, P versus A).

## How the study was built

The instrument was a two-tab web application: a CodeMirror 5 editor recording insertions, deletions, selections, cuts, copies and pastes with timestamps, and an in-house ChatGPT on the default OpenAI API (model 3.5-turbo). Tabs were separate rather than side by side, because placement together "could artificially encourage their use"; the model was un-pre-prompted, so it behaved like the standard product. Nothing was blocked: students were neither encouraged nor discouraged, and no policy limited what they could ask.

Participants came from university mailing lists and Prolific, screened as US college students and entered into a raffle for a \$10 gift card at 1-in-5 odds. Of the 77, 62 were 18-24; 34 were women, 32 men and 1 nonbinary, 37 White against 24 Asian/Pacific Islander. Before writing they completed a demographic survey, the 16-item Self-Efficacy for Writing Scale (7-point Likert) and a [[technology-acceptance-model|Technology Acceptance Model]] instrument split into usefulness and ease of use; afterwards, a [[self-report-measures|perceived ownership]] questionnaire and the [[creativity]] Support Index without its Collaboration subscale. They wrote for roughly 30 minutes, against the ACT's 40-minute limit.

Two authors coded every query into Planning, Translating, Reviewing and All after Flower and Hayes, then added finer-grained inductive codes inside each category; agreement on the four categories was Cohen's κ = .89. Coders worked from the query's semantic content, not what the student later did with the response. Clustering used each participant's four-dimensional vector of query-type proportions, with a zero vector for non-users, and the elbow method on summed squared error settled K = 6. Group comparisons used Kruskal-Wallis tests with Dunn post hoc tests and Bonferroni correction, since no metric met normality.

The design cannot see the boundary between typing and thinking: words typed rather than pasted count as participant-written even if rephrased from a response, a limit the authors state in a footnote.

## A paragraph request keeps the writer inside the process; an essay request does not

For [[writing-education|writing education]], the taxonomy's sharpest edge is the one between Translating and All. A Translating query supplies an idea and asks for prose around it: "Write a final intro sentence that explains what this paper is trying to do" (P04), or "make this paragraph stronger" (P58). The student has already decided what the paragraph must say. An All query supplies the prompt and receives reasoning, structure and prose together, leaving the student to evaluate and steer. Pooling them would hide the finding: All was the largest category, while Translating was the smallest, at four codes and 10 participants.

The boundary case is instructive. P15 pasted an unfinished sentence, "Automation has been at the forefront of", and the model returned a whole essay; the coders still called it Translating, because a seed idea was present and the fragment directed what should follow. The scheme leans on the student's stated direction, not the volume of text returned. That distinction leaks: participants pasted text from Planning responses straight into their essays 14 times across seven individuals, so a query coded as ideation could supply final sentences. What separates the categories is whether the student's judgment entered before the prose existed.

## Lower writing confidence predicted more requests for text, not more requests for ideas

The [[self-efficacy]] result is narrower than the headline suggests. SEWS predicted total query count negatively: students who doubted their writing asked more often. The association ran through Translating and Reviewing, the categories tied to producing and correcting prose, and disappeared for Planning and All. The authors read that as evidence whole-essay delegation is driven by something other than confidence, "external factors such as motivation or time pressure", and note that Planning had no significant predictors at all.

Technology acceptance ran against the support-tool story. TAM did not predict total queries, but its halves diverged on All: perceived usefulness was positive (0.282, SE 0.106, p < 0.01) and perceived ease of use negative (−0.277, SE 0.103, p < 0.01). Students who thought ChatGPT useful delegated whole essays; students who found it easy to operate did not, which the authors read as a wider repertoire of uses. Age was negative for All queries (−0.127, SE 0.040, p < 0.01), and male and White participants submitted more queries overall, particularly for Reviewing.

The students most likely to lean on the tool are those least sure of their prose, and they ask for finished text and correction rather than help deciding what to argue. That is closer to [[cognitive-surrender|cognitive surrender]] than to [[scaffolding]], with [[student-ai-interaction|student-AI interaction]] narrowed to acceptance: judgment moves to the model, and the student keeps the veto.

## Vibe Writing turns composition into steering

The named mode comes from essays assembled almost entirely through the chat window. Fifteen participants typed nothing and pasted everything, but the instructive case is P74, whose 641-word essay was 87.1% ChatGPT's across 11 queries. P74's messages read as editorial directions to a writer: "just act like you're a 1900s sci-fi writer"; "That conclusion is a bit too whimsical! Channel your inner science journal." The student composes a specification and reviews drafts; the model composes the essay.

The parallel is to [[vibe-coding|Vibe Coding]], where a programmer steers an agent toward a specification instead of writing the code. Naming the mode matters because it is otherwise invisible: Vibe Writing draws on All, Planning and Reviewing queries at once, so no single code identifies it, and the queries alone, the authors stress, "cannot account for the learning impact".

Governance is where it bites. Perceived ownership fell only in Group A; Groups P and R sat at the level of students who never opened the tool. The authors call that "concerning" rather than reassuring, since a student can feel like the author of an essay whose argument was generated. Creativity split the same way: Group M, the broadest users, reported more exploration support than non-users, while Group P reported deeper immersion than Group A.

## What this means for practice

- **Instructors.** Assess [[process-oriented-assessment|process]], not only product. The trace separates a student who asked for a paragraph from one who asked for the essay and then edited it, and the second is hard to see in the submitted file. Query histories, drafts or a short [[reflection]] on use recover what the text does not carry.
- **Writing program designers.** Treat whole-essay delegation as its own category, not an extreme of editing help. It has different predictors (perceived usefulness, age) and consequences (lower ownership) than Planning or Reviewing use, so one policy line covering all "AI use" will misdescribe what students do.
- **Tool builders.** Classification at the point of use is feasible: the six personas came from a four-feature vector. A writing environment can label a request as Planning, Translating, Reviewing or All before answering, and respond differently without blocking the student.
- **Researchers.** Ownership and creativity here are self-report scores taken once, after one essay: evidence about how students felt, not about what they learned, with no learning outcome or human quality rating to anchor them.

## Limitations

- The task was a single 30-minute essay in a low-stakes online study with no grade attached; the framing, the visible ChatGPT tab and weak incentives may have amplified Vibe Writing.
- The model was an in-house build on 3.5-turbo, not the current ChatGPT, so capability and refusal behavior differ from what students meet today.
- Students wrote one essay in one session, so the clusters describe this sample and would shift in another population or task.
- Perceived ownership and creativity are self-reported, and no human rated essay quality, argument or originality.
- The 77 participants were US college students recruited by mailing list and Prolific, a narrow demographic and institutional range.
- K = 6 came from the elbow method on summed squared error plus visual inspection, an analytic choice other criteria could have replaced with a different number of personas.

## Citation

Jelson, A., Manesh, D., Jang, A., Dunlap, D., Kim, Y.-H., & Lee, S. W. (2026). [An Empirical Study to Understand How Students Use ChatGPT for Writing Essays](https://doi.org/10.1145/3772318.3791056). In *Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26)*. ACM.
