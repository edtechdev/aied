---
title: "Experimental Evidence on the Learning Impact of Generative AI"
created: "2026-10-03T12:08:19-04:00"
updated: "2026-10-03T12:08:19-04:00"
type: article
sources: ['raw/papers/2607.08849.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [science education]
level: [undergraduate]
audience: [instructors, researchers, administrators]
pedagogy: [student-ai-interaction, scaffolding]
technology: [generative-ai, llm, conversational-ai]
assessment: [learning-gains]
methods: [rct]
foundations: [human-ai-collaboration, cognitive-offloading, academic-integrity]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-03"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Whether [[generative-ai|generative AI]] builds or erodes human capital has been tested mostly with customized tools — scaffolds, [[guardrails]], hidden tutoring prompts — or in workplace settings that measure productivity rather than learning. Contractor and Reyes ran a randomized experiment at Middlebury College in which [[higher-ed|undergraduates]] studied an unfamiliar topic in proctored, in-person sessions and wrote an analytical essay with or without a standard off-the-shelf [[conversational-ai|chatbot]]. [[learning-gains|Learning]] was measured by unaided knowledge tests and essays immediately and again about a week later. AI access raised immediate test scores, the gain persisted, and how students used the tool — [[scaffolding|augmentation]] versus automation — decided whether the benefit survived its removal.

## Key Findings

1. In a randomized experiment with 211 undergraduates at Middlebury College in Spring 2025, access to an off-the-shelf ChatGPT (GPT-4o) account raised immediate unaided test scores by 6.7 percentage points, or 0.27 SD (p = 0.034); the complier-adjusted estimate was 10.0 pp, or 0.40 SD (p = 0.036).
2. The gain persisted roughly one week later: treated students scored 5.1 pp higher than control students (p = 0.027), about 76 percent of the Session One effect and standardized again at 0.27 SD, and were 12.2 pp more likely to answer at least 60 percent of questions correctly.
3. Gains concentrated in the middle of the distribution — 8.0 pp more likely to reach 40 percent correct (p = 0.098) and 9.6 pp more likely to reach 60 percent (p = 0.133) — with little movement at the 80 percent threshold or at perfect scores.
4. Total learning time did not change (control students averaged 32.6 minutes by platform records, 34.3 by self-report), but its composition shifted: treated students spent about 5.3 pp less of the phase producing text and correspondingly more time reading and searching for information.
5. Of treated AI users, 49 percent were classified from their conversation logs as [[scaffolding|augmentation]] users (AI works with the student) and 32 percent as automation users (AI does the work); automation users spent about 17 percent less time on research activities (p = 0.034) and 8 percent less time overall (p = 0.045).
6. Automation users gained far more on essay quality while AI was available (0.54 SD, p = 0.029, against 0.05 SD for augmentation users), but that advantage disappeared once AI was removed (0.02 SD), while augmentation users retained a positive though imprecise essay effect (0.22 SD) and larger test-score gains (0.29 SD, p = 0.061).
7. The authors benchmark their 0.27 SD effect against a 0.10 SD median across 747 educational [[rct|RCTs]], while stressing that their estimates hold time-on-task fixed and do not imply that ordinary AI adoption raises learning.

## What the experiment isolates

The design targets the criticism that most AI-and-learning experiments study a tool students cannot actually open. Treated students used a dedicated ChatGPT account with no scaffolding, guardrails, or [[teacher-role|teacher]]-designed hints; control students were proctored to prevent AI use and could work only from Wikipedia and the library site, both of which were also open to the treated group. Both groups learned the same unfamiliar topic and wrote the same kind of analytical essay.

Because the sessions were proctored and in-person, treatment assignment could be enforced rather than [[self-report-measures|self-reported]], and compliance was checked through direct observation, conversation logs, and self-reports. Students completed unaided tests and essays in the same session and again about a week later (a mean of 6.951 days), which separates what they learned from what the tool did on their behalf. The authors note their design measures learning per unit of time, and that only 5 percent of students reported looking up the topic between sessions and fewer than 1 percent studied it.

## Retention, and what the essays show

Session Two, written without AI, is where the study's two headline patterns separate. Test performance faded in both groups, but treatment differences largely held. Essay quality behaved differently: while students had AI access, quality changed little, and [[ai-detection|AI-detection]] traces rose by 12.3 pp over a control mean of 12.8 percent (p = 0.019). Once AI was removed, those traces collapsed to zero (p = 0.991) and quality improved instead in style and relevance — the delayed gain the abstract reports.

The authors read that divergence as evidence that the [[writing-education|writing]] benefit came from changed behavior rather than from AI-produced text. Their mechanism analysis points the same way: treated students reported greater enjoyment and allocated less of the learning phase to drafting, redirecting time to reading and searching, with 57 percent using AI chiefly to explain concepts. Total time-on-task did not move, which the authors contrast with workplace studies where AI cuts completion time by much more.

## Augmentation, automation, and how students used the tool

Because usage varied, the paper classifies each ChatGPT conversation as augmentation, automation, mixed, or other with an [[llm]] reader, and validates the labels three ways. Automation users leaned on AI for drafting and editing while augmentation users asked it to explain concepts; [[ai-detection|Pangram]] flagged 53.6 percent of automation users' text as AI-generated against 20.9 percent for augmentation users.

The split predicts who kept the learning. In Session One, automation users' essay-quality advantage was large, consistent with AI writing the text rather than teaching the student, and their test-score gain was smaller (0.33 SD) than augmentation users' (0.44 SD). By Session Two, automation users' essay effect was indistinguishable from zero and their test-score effect attenuated to 0.19 SD (p = 0.330), while augmentation users still showed 0.29 SD test gains. The authors conclude that the automation trade-off is not inevitable: gains persist when students use AI to scaffold their own effort rather than substitute for it.

## What this means for practice

- **Instructors.** Judge AI use by what it displaces, not whether it appears. Students in this study who asked the chatbot to explain concepts kept their test-score advantage unaided; those who had it draft their prose lost the essay advantage the moment access ended. Design tasks and prompts that pull students toward explanation rather than delegation.
- **Instructors.** Expect the benefit in the middle of the distribution. AI access moved students from the lower-middle toward competent performance while the strongest students hardly moved, so it is better suited to bringing a cohort to a floor than to stretching the top.
- **Faculty developers.** Treat the augmentation distinction as a teachable skill rather than a rule to police. The authors note that how students choose between augmentation and automation is endogenous to the incentives they face, which makes [[assessment|assessment design]] part of the intervention.
- **Institutions.** Note where the effect came from: unchanged time-on-task with a reallocation toward reading and searching. If campus AI use mainly saves time, the learning gain documented here does not automatically follow, because the study's design removed the choice of how long to work.

## Limitations

- The experiment ran at a single institution in Spring 2025 with ChatGPT (GPT-4o) as the tool. Capabilities, interfaces, and student familiarity have moved since, so the effect size describes that tool vintage rather than any chatbot in use today.
- The setting fixed time-on-task in a proctored lab session with few competing demands, and the authors state plainly that this is why they found no effect on total learning time. In ordinary coursework students choose how long to spend, which is precisely the margin their design removes.
- Follow-up was about one week; the paper reports no longer-term retention, and the two other studies it cites with positive retention effects used a comparable horizon.
- The augmentation and automation labels come from an LLM classifying conversation logs, not from students' intentions. The authors validate them behaviorally, but the classification is a research construct rather than something an instructor could read off a transcript.

## Citation

Contractor, Z., & Reyes, G. (2026). [Experimental Evidence on the Learning Impact of Generative AI](https://arxiv.org/abs/2607.08849). arXiv preprint arXiv:2607.08849.
