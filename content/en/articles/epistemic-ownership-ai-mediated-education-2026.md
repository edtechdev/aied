---
title: "Same Performance, Different Process: Epistemic Ownership in AI-Mediated Education"
created: "2026-10-05T10:00:00-04:00"
updated: "2026-10-05T10:00:00-04:00"
type: article
sources: ['raw/papers/epistemic-ownership-ai-mediated-education-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis, thematic analysis]
discipline: [cs education, learning sciences]
level: [higher ed]
audience: [researchers, assessment designers]
foundations: [agency, cognitive-offloading, cognitive-surrender, learner-identity, theories-and-frameworks]
pedagogy: [metacognition, self-regulated-learning, student-ai-interaction, distributed-cognition]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment, process-oriented-assessment, learning-gains]
methods: [qualitative-research, ai-ed-evaluation]
ethics: [ai-use-disclosure, ethics]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-05"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** [[generative-ai|Generative AI]] weakens a relationship between performance and learning on which educational practice has long relied: a fluent artifact no longer certifies that the student did the cognitive work the assignment was meant to develop. Fábrega examines observable traces of that work in 150 student–AI conversations drawn from a larger dataset of 2,214 conversations by 203 students, using epistemic ownership as an interpretive frame. Three dimensions can become visible in interaction — Direction, Integration, and Evaluation — while the fourth, answerability, requires separate elicitation. Direction appeared in 146 of the 150 conversations (97.3%); Integration and Evaluation rose from 37.3% and 46.0% to 90.5% each as interaction length increased. Assignment scores did not separate conversations in which all three were observed from those where one was not, so scores and interaction records turn out to carry different information about the same work.

## Key Findings
1. **Direction is nearly universal; Integration and Evaluation need interaction to appear.** Direction occurred in 146 of 150 conversations (97.3%) and in every conversation with at least five student turns, while the other two rose with length.
2. **Length amplifies observability.** Integration and Evaluation climbed from 37.3% and 46.0% across all sampled conversations to 90.5% each among the 21 conversations with at least 15 student turns.
3. **Similar performance coexists with different process.** Among scored conversations the median assignment score was 0.980 and 41.0% scored exactly 1.00, yet score contrasts across observation groups stayed small and varied in direction across thresholds.
4. **Matched pairs make the gap concrete.** Two S25 conversations both scored 1.00 over 27 and 17 turns but only one showed Evaluation; two F24 conversations both scored 0.8727 over six turns yet differed in Integration and Evaluation.
5. **Scores and traces answer different questions.** Assignment scores characterize the assessed product under grading criteria, whereas interaction records reveal how cognitive work was distributed between learner and system.
6. **Observability is partly a property of the task environment.** Programming and data-analysis tasks produce rapid external feedback — tracebacks, changed coefficients — that creates repeated opportunities for learner re-entry and thus for Integration and Evaluation.
7. **The study stops short of the full construct.** Because answerability was never elicited, the analysis establishes the condition under which justificatory dispossession matters, not individual cases of it.

## Epistemic ownership as a lens on delegation

Learning has always relied on external resources that redistribute cognitive work across learners and their environments, a point the paper takes from the extended-mind tradition of [[distributed-cognition]]. Generative AI extends this by contributing not only information but explanations, interpretations, and lines of reasoning. The paper's contribution is to ask who retains command over work produced through such a distribution. Epistemic ownership names that relation and comprises four interdependent functions: direction, integration, evaluation, and answerability. A learner has strong ownership when she can reconstruct and defend the reasoning [[embodied-learning|embodied]] in the result; strong performance can coexist with weak command when an adequate AI contribution is adopted without reconstruction — a condition the author calls justificatory dispossession. Direction has a metacognitive component, since deciding when to use external assistance depends on judgments about effort and expected performance, and the framing connects to the [[cognitive-offloading]] literature. The paper also cites experimental evidence that stronger task performance with AI can coexist with weaker knowledge or [[transfer-of-learning|transfer]] when AI use reduces [[metacognition]].

## Recovering observable process from interaction traces

The empirical task is to identify evidence of direction, integration, and evaluation without reading epistemic ownership directly from a transcript. Because human–[[student-ai-interaction|AI interaction]] unfolds sequentially, the learner's re-entry after an AI contribution becomes the most informative locus: direction is coded when the student governs purpose, constraints, procedure, or trajectory; integration when a later action can be specifically connected to uptake, application, or transformation of a prior AI contribution; and evaluation when the learner inspects, compares, tests, corrects, or applies a criterion. The dimensions are multilabel and analytically independent, so they are never combined into an overall score, and the coding remains sequence-dependent — the same move can be direction in one place and evidence of insufficient uptake in another. The protocol was developed through iterative analysis of 40 heterogeneous conversations, reached practical saturation after 23 cases, and was tested on an independent 14-conversation pilot before being frozen. Applying it to 150 conversations drew on the [[learning-analytics]] provenance of the StudyChat dataset and used [[educational-nlp|automated coding]] under a structured output schema with manual supervision.

## Why assignment scores cannot reconstruct the process

Score data released with StudyChat report normalized course-assignment grades, and exact linkage was available for 134 of the 150 conversations. Among those, the median assignment score was 0.980 with an interquartile range of 0.073, and 41.0% scored exactly 1.00. Across minimum-turn thresholds the performance contrasts between conversations with all three dimensions observed and those missing at least one stayed small in the original scale and changed in magnitude and sometimes direction, so no systematic score difference survived. The two matched pairs show the implication concretely: identical or closely matched scores, and in the second pair identical interaction length, accompanied different observable configurations. The author is careful that this does not mean stronger participation should raise scores — generative AI can produce successful outputs even when substantial reasoning is delegated. The argument is narrower and more useful: assignment scores describe the quality of the assessed product, while interaction traces describe how that product was produced. Recovering the latter requires [[assessment]] designs that treat [[process-oriented-assessment|process evidence]], not only the product, as evidence.

## Designing for observability

The paper's design insight is that observability is partly a property of the task environment rather than of the learner. In StudyChat, executable programming and data-analysis work produces repeated external consequences — a traceback, a changed coefficient, a failed run — that create the re-entry opportunities through which integration and evaluation become visible. Activities whose consequences are less immediate may leave fewer traces. The implication for [[human-ai-collaboration|AI-mediated activities]] is not to prescribe one interaction sequence but to require students to do something with AI contributions: apply them, compare them with alternatives, inspect their consequences, diagnose problems, or justify a revision. Direction is comparatively easy to elicit because students must initiate requests and specify objectives, whereas integration and evaluation need deliberate opportunities for re-entry. The fuller construct would add answerability, which needs subsequent elicitation rather than product evidence. How process evidence should combine with product evidence, and how it bears on questions of [[academic-integrity]] and disclosure, remains an open problem for AI-mediated assessment.

## What this means for practice

- **Instructors.** Treat the interaction record as evidence alongside the artifact, and design tasks that oblige students to apply, compare, or test AI contributions — in this sample, Integration and Evaluation appeared in only 37.3% and 46.0% of conversations overall.
- **Assessment designers.** Do not infer process quality from scores: the median assignment score was 0.980 and 41.0% of scored conversations scored exactly 1.00, while matched pairs with identical scores diverged in observable participation.
- **Researchers.** Recover the process dimensions separately rather than as a composite: the coding scheme is multilabel and independent, and the paper explicitly declines to treat it as an additive measure of epistemic ownership.
- **Administrators.** Recognize that performance and process carry different information: scores characterize the product under grading criteria, while process evidence bears on whether the student retained command over the work.

## Limitations

- The data capture only activity inside the chat: absence of a coded behavior does not establish absence of the corresponding cognitive activity, which may occur outside the interaction record.
- The computational setting generates unusually visible and rapid feedback, so some forms of participation may be easier to observe here than in domains whose consequences are less immediate.
- Assignment scores measure course performance rather than learning or epistemic ownership, and the analysis is descriptive — it establishes variation, not a causal relationship.
- The sample of 150 conversations is not large enough to support population-level claims, and exact score linkage was available for only 134 of them.
- Answerability was not elicited, so the study cannot identify individual cases of justificatory dispossession.
- The analysis rests on a single dataset drawn from one course context — artificial intelligence and [[cs-education|computer science]] assignments across Fall 2024 and Spring 2025.

## Citation

Fábrega, J. (2026). [*Same Performance, Different Process: Epistemic Ownership in AI-Mediated Education*](https://arxiv.org/abs/2610.02731). arXiv:2610.02731.