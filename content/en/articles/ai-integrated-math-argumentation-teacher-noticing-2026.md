---
title: "Supporting mathematical argumentation in AI-integrated lessons: networking instrumental orchestration and teacher noticing"
created: "2026-10-20T09:20:00-04:00"
updated: "2026-10-20T09:20:00-04:00"
type: article
sources: ['raw/papers/ai-integrated-math-argumentation-teacher-noticing-2026.md']
confidence: high
published: 2026-10-19
page_kind: [framework]
research_method: [case study]
discipline: [math education]
level: [secondary, k 12]
audience: [instructors, curriculum designers, faculty developers, researchers]
pedagogy: [collaborative-learning, socratic-method, scaffolding, student-ai-interaction, student-engagement, pedagogy]
technology: [learning-analytics, visualization, human-in-the-loop-ai, generative-ai, edtech-platform]
assessment: [formative-assessment, feedback]
methods: [design-based-research, qualitative-research]
foundations: [teacher-ai-competency, teacher-role, tpack, learning-design]
institutions: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-20"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Lee, Park, and Lee (2026) report a teaching experiment with one experienced Korean secondary [[teacher-role|teacher]], "Kim," to show how a teacher supports collective mathematical argumentation in an [[edtech-platform|AI-integrated classroom]]. The environment, built on the [[generative-ai|ChatGPT]]-4o API, analyzed students' written responses against teacher-specified criteria and surfaced both the responses and the AI analyses on a teacher [[learning-analytics|dashboard]]. Networking instrumental orchestration with [[teacher-ai-competency|teacher noticing]], the authors identified four whole-class orchestrations — Spot-and-share, Sherpa-at-work, Discuss-the-screen, and Explain-the-screen — across 47 orchestrations and 22 argumentation episodes in four lessons. The analysis shows that noticing is not a passive read of AI output: Kim attended to the validity of students' warrants, [[scaffolding|scaffolded]] further elaboration when a warrant was weak, and reorganized contributions into a developing argument. The paper argues that [[collaborative-learning|collective argumentation]] does not emerge spontaneously but requires this kind of selective, in-the-moment teacher work.

## Key Findings
1. Four whole-class orchestrations — Spot-and-share, Sherpa-at-work, Discuss-the-screen, and Explain-the-screen — recurred across the four 50-minute lessons, forming orchestration chains in which each type supported collective argumentation differently.
2. Across the four lessons the analysis identified 47 whole-class orchestrations and 22 argumentation episodes, and selected four consecutive episodes from Task 4–2 to trace how argument components were elicited and refined.
3. All four attending foci were centered on warrants (valid, incorrect, comparable, and irrelevant to the developing argument), which teacher Kim used to decide which critical responses to share and in what order.
4. In Spot-and-share, Kim used in-the-moment AI-generated analyses to select critical responses, sharing S8's incorrect but substantial warrant before S16's contrasting one rather than the responses the AI judged to meet all criteria.
5. In Sherpa-at-work, an incorrect or insufficient warrant prompted restating and pressing the student to elaborate, whereas a valid warrant prompted summarizing the idea and inviting the class to evaluate it.
6. In Discuss-the-screen, Kim evaluated how prior contributions bore on the developing argument, elicited backing or rebuttal, and repositioned an earlier student backing as data in a new argument.
7. In Explain-the-screen, Kim confirmed the validity of students' contributions, presented additional data, and posed questions that guided the class toward a shared conclusion — which the authors frame as focusing rather than funneling.

## Four whole-class orchestrations in an AI-integrated lesson

The study's first research question asked what whole-class orchestrations and noticing foci characterize the teacher's support for [[collaborative-learning|collective argumentation]]. In the AI-integrated environment, students submitted answers through the platform and ChatGPT-4o analyzed them on teacher-specified criteria, with the dashboard displaying responses and analyses during instruction. Four orchestrations emerged. Spot-and-share (the distinctive one) involved selecting and sharing critical responses from the dashboard in real time, unlike the pre-planned Spot-and-show it resembles. Sherpa-at-work began with the teacher asking a student — the "sherpa" — to explain work displayed on the screen. Discuss-the-screen centered whole-class discussion on displayed content, and Explain-the-screen had the teacher explain mathematical ideas using that content. Each orchestration combined a different didactical configuration and exploitation mode, and together they formed chains that carried a single argument across the lesson.

## What the teacher noticed

The framework distinguished four [[teacher-ai-competency|noticing]] practices: attending (identifying critical responses associated with argumentation), interpreting (making sense of their mathematical and argumentative significance), shaping (constructing interactions to gather more information), and responding (acting to advance students' construction or evaluation of argument components). Kim's four attending foci all centered on warrants, which she used to differentiate responses and decide which could productively advance discussion. In an interview she explained that she examined "the characteristics of students' reasoning or justification" rather than final answers. Her interpreting work fell into four categories, including identifying mathematical ideas and evaluating responses' influence on the argument. Shaping moves — restating, requesting elaboration, probing — and responding moves — providing data or backing, asking students to evaluate — were then classified by function rather than by observable form.

## Networking orchestration and noticing

The paper's central methodological claim is that instrumental orchestration and teacher noticing are complementary lenses that can be coordinated, a networking strategy that aligns compatible core elements of two theories. Instrumental orchestration supplies an intermediate-level lens: it names the didactical configuration, exploitation mode, and didactical performance that structure how the teacher organizes resources. Noticing supplies a local-level lens: it captures the teacher's in-the-moment engagement with students' argumentative contributions. Coordinating them allowed the authors to analyze teacher support both within an orchestration and across a chain of them. The analysis indicates that noticing within one orchestration can itself function as a resource guiding the teacher's decisions to move to the next, extending earlier work on orchestration chains that focused on teachers' goals and orientations. Teacher expertise here is less a fixed repertoire of moves and more the dynamic interpretation of student contributions.

## What this means for practice

- **Instructors.** Read the dashboard for warrants, not for completeness: Kim deliberately opened discussion with a response the AI marked as flawed because its substantial warrant could generate warrants and rebuttals, and she passed over responses the AI judged to meet all criteria.
- **Instructors.** Treat the same move as two different practices depending on intent: restating or questioning a student can function as shaping when it gathers more information about an argument, or as responding when it advances a shared component, so plan for which you are doing.
- **Curriculum designers.** Build tasks, like Task 4–2's comparison of guessing methods, that produce contrasting, arguable warrants the class can weigh, because [[collaborative-learning|collective argumentation]] depends on having competing warrants to examine.
- **Faculty developers.** Develop teachers' [[teacher-ai-competency|noticing]] and orchestration together, since the study's contribution is showing how in-the-moment interpretation connects to the structural choices of when to share, discuss, or explain.
- **Faculty developers.** Prepare teachers to exclude as well as include: Kim refrained from pursuing a popular but off-topic warrant to keep the class focused on the sample-size effect underlying the argument.

## Limitations

- The study is a single-case teaching experiment with one teacher, Kim, a secondary teacher with 12 years of experience who had no formal [[educational-development|professional development]] in mathematical argumentation, so the patterns are not generalizable.
- Participants were 17 volunteer tenth-grade students from one public high school in Gyeonggi Province, Korea, and four of them had high and thirteen medium levels of mathematics achievement.
- The lessons covered a single mathematical topic, informal statistical estimation, over four 50-minute lessons, so similar patterns may not emerge in other topics or AI-integrated environments.
- The foci of noticing were inferred from multiple sources — classroom video, screen recordings, artifacts, field notes, and interviews — but these data may not fully capture the teacher's cognitive processes.
- Outcomes are discourse analyses of arguments reconstructed in extended Toulmin diagrams, not measured [[learning-gains|learning gains]], so the paper reports how argumentation was facilitated rather than how much students learned.

## Citation

Lee, S., Park, J., & Lee, K.-H. (2026). [Supporting mathematical argumentation in AI-integrated lessons: networking instrumental orchestration and teacher noticing](https://doi.org/10.1007/s10649-026-10572-8). *Educational Studies in Mathematics*.
