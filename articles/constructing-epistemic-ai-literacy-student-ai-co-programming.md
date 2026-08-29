---
title: "Constructing Epistemic AI Literacy: Detecting Epistemic Aims and Processes in Student-AI Co-Programming"
created: "2026-07-03T04:33:04-04:00"
updated: "2026-08-22T07:08:19-04:00"
type: article
tags: [ai-literacy, cs-education, student-ai-interaction, scaffolding, higher-ed, automated-assessment, llm, learning-analytics, formative-assessment]
discipline: [cs education]
level: [higher ed]
sources: ['raw/papers/2607.00211.md']
confidence: high
---Epistemic thinking — understanding how knowledge is constructed and justified — plays a central role in [[ai-literacy]], particularly when students co-program with generative AI. This paper introduces a framework for detecting epistemic aims and processes in [[student-experience]] during programming activities. The analysis reveals that students engage in question construction, AI output evaluation, and solution integration as distinct epistemic processes. These findings inform [[scaffolding]] design for programming education and connect to broader discussions of [[agentic-education-coding]] where students maintain agency while leveraging AI assistance.

## Key Findings

- The paper introduces the conceptual framework of Epistemic AI Literacy (EAIL), reframing AI literacy as a process-oriented epistemic phenomenon that emerges through dynamic human-AI interactions, drawing on the AIR framework of epistemic aims, ideals, and reliable epistemic processes.
- Using a large dialogue dataset of human-AI co-programming, the study identifies observable dimensions of epistemic aims (mastery-oriented aims) and epistemic processes (outsourcing, explanation seeking, verification seeking, prompt monitoring, and epistemic justification).
- A subset of interactions was manually annotated to ground the constructs, which then informed scalable automatic labeling using complementary approaches — few-shot prompting and regex-based scripts — applied interactively.
- Results reveal a prevalent lack of EAIL: 78.8% of student-GenAI interactions relied on non-mastery-oriented aims and less reliable epistemic strategies such as outsourcing and verification-seeking.
- Only 11.1% of interactions showed high epistemic engagement, where mastery-oriented aims were coupled with advanced strategies like epistemic justification in a more reliable epistemic process.
- While GenAI facilitates task success, robust epistemic performance and genuine learning rarely emerge without deliberate instructional and design support.

## Study Design & Method

The study operationalizes epistemic constructs that are normally hard to observe. Epistemic aims and processes were detected in student-AI co-programming interaction data, with manual annotation of a subset grounding the constructs. Complementary automated approaches — few-shot prompting with large language models and regex-based scripts — were then used interactively to label the full dataset at scale, providing a path from small-scale qualitative insight to large-scale measurement. The design responds to a limitation identified in a 2022 UNESCO report: AI education has typically taken a technology-oriented approach, ignoring the human and in-depth ethical questions of how AI is actually used in practice.

## Implications for AI in Education

The finding that most student-GenAI interactions exhibit weak epistemic engagement — outsourcing and verification-seeking rather than mastery-oriented aims with justification — suggests that mere access to AI tools does not produce learning-oriented use. For [[scaffolding]] design in programming education, the work points to interventions that prompt students to construct questions, evaluate AI outputs, and justify their integration decisions, supporting the development of [[metacognition]] and [[self-regulated-learning]] alongside technical skill. The EAIL framework also connects AI literacy to epistemic practice in [[cs-education]]: curricula should cultivate the processes by which learners decide what to trust and why, rather than only measuring whether tasks are completed.

## Connected Concepts
- [[critical-thinking]]
- [[cs-education]]
- [[generative-ai]]
- [[human-ai-collaboration]]

- [[ai-literacy]]
- [[student-experience]]
- [[scaffolding]]
- [[theory-development-aied]] — Theory Development in AI in Education
## Connected Articles

- [[agentic-education-coding]]
## Citation

Mengqian Wu (2026). [Constructing Epistemic AI Literacy: Detecting Epistemic Aims and Processes in Student-AI Co-Programming](https://arxiv.org/abs/2607.00211).
