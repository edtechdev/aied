---
title: "Less stress, better scores, same learning: The dissociation of performance and learning in AI-supported programming education"
created: "2026-10-17T07:22:26-04:00"
updated: "2026-10-17T07:22:26-04:00"
type: article
sources: ['raw/papers/10.1016_j.caeai.2025.100537.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
audience: [instructors, curriculum designers, educational technology developers, administrators, institutions]
level: [higher ed, undergraduate]
discipline: [cs education]
foundations: [human-ai-collaboration, cognitive-surrender, cognitive-offloading, framing-ai-use-for-students, agency]
pedagogy: [cognitive-psychology, motivation, scaffolding, self-determination-theory, problem-solving, productive-failure]
technology: [generative-ai, llm, intelligent-tutoring]
assessment: [assessment-validity, learning-gains, automated-assessment, ai-feedback-quality, educational-measurement]
methods: [rct, quantitative-research]
institutions: [educational-policy-ai]
ethics: [trust-calibration]
ai_assist:
  - model: "deepseek/deepseek-v4.1-flash"
    role: drafting
    date: "2026-10-17"
    agent: hermes
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Bassner, Lenk-Ostendorf, Beinstingel, Wasner and Krusche (2026) ran a three-arm [[rct|randomized controlled trial]] in a [[higher-ed|Technical University of Munich CS1]] course: 275 students worked a 90-minute Java concurrency exercise with either Iris (a tutor giving calibrated hints and withholding full solutions), unrestricted [[generative-ai|ChatGPT]], or traditional web resources. Exercise scores separated sharply — 71.84% for ChatGPT against 29.85% for the no-AI control, with Iris at 57.50% — while conceptual knowledge gains did not differ at all (0.83, 0.71 and 0.85 points, time × group p = .773). Both AI conditions cut frustration and [[cognitive-offloading|extraneous load]]; only Iris raised [[motivation|intrinsic motivation]]. The tool students rated as more helpful and easier was also the one that most reduced germane processing.

## Key Findings

1. **Performance improved; learning did not.** Exercise performance differed strongly by condition (F = 29.69, ηg² = .179, p < .001, with ChatGPT 2.4 times the control's score), but the pre–post knowledge [[assessment]] showed only a main effect of time (F = 88.23, ηg² = .042, p < .001), no group effect (p = .311) and no time × group interaction (p = .773); code comprehension likewise did not differ (1.36, 1.43 and 1.18 out of 3, F = 2.01, p = .136).
2. **No extra time was spent.** Exercise duration was statistically equivalent across conditions (88.16, 90.93 and 91.28 minutes; p = .142), so AI assistance produced more completed work inside the same 90-minute window rather than more time on task.
3. **The two AI tools produced different score distributions.** ChatGPT users clustered at the top of the performance range, control users at the bottom, while Iris users spread across the whole range — preserving individual differences that unrestricted assistance flattened.
4. **Both tools reduced frustration to the same degree.** Frustration was 3.13 (ChatGPT) and 3.21 (Iris) against 4.09 for the control (F = 23.41, p < .001), with no difference between the AI groups (p = .886).
5. **Only scaffolded assistance raised intrinsic motivation.** Iris scored significantly above the control (2.82 vs 2.42, p < .001) while ChatGPT did not (2.64 vs 2.42, p = .076).
6. **Intrinsic load stayed constant while germane and extraneous load fell.** Intrinsic load did not differ (p = .080); both AI groups reported lower germane load (3.56 and 3.83 vs 4.28, p < .001) and lower extraneous load (3.13 and 3.31 vs 3.86, p < .001), with the larger reductions in the ChatGPT group (germane d = −0.77, extraneous d = −0.87).
7. **Students preferred the tool that reduced their cognitive processing most.** ChatGPT was rated easier to use (p = .003), its [[feedback]] more helpful (p = .004), its query understanding better (p = .011) and its help with exercise problems more effective (p < .001), and its users reported greater perceived improvement in conceptual understanding (p = .001) — precisely the group with the largest drop in germane load. Overall AI experience leaned toward Iris without reaching significance (p = .059).

## How the dissociation is explained

The authors resist reading the null learning result as "AI prevents learning": their interpretation is that AI helps students *complete constant-difficulty tasks* rather than teaching them directly. A conventional exercise is a binary outcome — students with enough background knowledge succeed, the rest struggle fruitlessly — so assistance that partially compensates for a knowledge gap lets more students engage with material that would otherwise be out of reach. Combined with the unchanged duration, their reading is that students processed more material but less deeply per unit. They also list the alternatives they cannot rule out: 90 minutes may be too short for differential processing to consolidate into measurable knowledge differences, and the learning measures may simply lack the sensitivity to detect differences that existed. The consequence they draw is about [[assessment-validity|assessment]]: if exercise scores can rise without commensurate understanding, performance-based scores stop being a reliable indicator of learning.

## Making a task easy versus making it approachable

The motivational split is the paper's design lesson. Both tools reduced frustration, but only Iris improved intrinsic motivation, and the authors attribute the difference to how each removes difficulty: ChatGPT answers by revealing solutions, while Iris scaffolds interaction with the problem. Read through [[self-determination-theory|self-determination theory]], both support competence (tasks get finished), but hint-based assistance preserves [[agency|autonomy]] by requiring students to construct their own understanding, whereas direct answers displace the autonomous [[problem-solving]] that would have produced it. Their formulation is that the design choice is between removing all barriers and selectively removing the unnecessary ones while keeping those that promote growth — the same distinction between [[scaffolding|scaffolded]] assistance and answer delivery that the cognitive-load results echo.

## The comfort trap, and why satisfaction is the wrong metric

Finding 4 is that students systematically preferred the restrictive-disclosure tool: the one that felt more helpful and easier was the one that most reduced learning-related processing, while the tool with better cognitive engagement and a motivational advantage scored lower on perceived helpfulness. The authors call this the comfort trap and connect it to the literature on metacognitive illusions — fluency is misread as evidence of learning, and satisfaction ratings have near-zero correlation with objective outcomes. They add a mechanism worth noting: if [[metacognition|metacognitive]] monitoring is itself a form of germane load, then reducing that load may impair the very judgment students use to decide which tool helps them. Their practical conclusion is to stop treating student satisfaction as the primary metric for evaluating educational AI.

## How the trial was set up

452 students began 90-minute sessions in an [[cs-education|introductory programming]] course; systematic quality controls on the logs left 275 participants (Iris 91, ChatGPT 88, control 96), a 39.2% attrition rate that was roughly balanced across arms (57.1%, 60.7% and 64.9% retention). Assignment was random, seeded from university IDs, and baseline checks on gender, programming experience and age found equivalent groups. Participants implemented a parallel sum with threading in Java, with exercise performance taken from auto-graded test coverage in the learning-management logs, knowledge from identical pre- and post-items, code comprehension from a three-item task, and motivation, frustration and three cognitive-load components from validated five-point scales. The exercise, tutor script, survey items, pseudonymized dataset and analysis code are released, and the configuration was fixed across all 35 sessions.

## What this means for practice

- **Instructors.** Decide which outcome you are buying. If the goal is completion and lower frustration, either tool works; if it is conceptual understanding, neither demonstrated an advantage over traditional resources on these measures, so plan a separate activity that forces retrieval and explanation rather than assuming the exercise does it.
- **Assessment designers.** Move credit toward process evidence — tests, diffs, short rationales — so the pedagogically desirable path is also the easiest route to points, and reserve [[summative-assessment|summative]] weight for code reading, debugging, explanation and delayed or [[transfer-of-learning|transfer]] items that resist a delivered solution.
- **Tool designers.** Withholding the answer is the feature that kept intrinsic motivation alive while still cutting frustration and extraneous load. Default to hint-first assistance with gated escalation, and treat an ease-of-use score as a warning sign rather than a success metric.
- **Institutions.** For [[educational-policy-ai|AI policy]], the finding reframes the question from whether to permit AI to how to design it: [[intelligent-tutoring|scaffolded tutors]] sat between a ban and unrestricted access, holding the motivational benefit while avoiding the perception trap.

## Limitations

- No delayed testing, so nothing here speaks to retention or the durability of any learning effect; the null learning result is a short-term result.
- The learning measures were narrow — six conceptual questions and a three-item code-comprehension task scored out of 3 — with no new-context or code-writing task, so the null findings need cautious interpretation.
- Two-item intrinsic and germane cognitive-load subscales limit reliability assessment; the authors report the caution explicitly and rest their cognitive-load claims on converging items.
- 39.2% of the initial 452 participants were excluded by data cleaning; the authors argue the retention was balanced enough to suggest random rather than differential attrition.
- Single introductory course at one university, a single 90-minute session per participant, and AI tools whose capabilities change — the authors note exact replication may become impossible as model versions shift, which is why they release materials for conceptual replication.

## Citation

Bassner, P., Lenk-Ostendorf, B., Beinstingel, R., Wasner, T., & Krusche, S. (2026). [*Less stress, better scores, same learning: The dissociation of performance and learning in AI-supported programming education*](https://doi.org/10.1016/j.caeai.2025.100537). *Computers and Education: Artificial Intelligence, 10*, Article 100537.
