---
title: "Exploring Teachers' Instrumental Orchestration and Roles in High School Mathematics Classes Using AI-Based Digital Tools"
created: "2026-10-04T05:12:00-04:00"
updated: "2026-10-04T05:12:00-04:00"
type: article
sources: ['raw/papers/teachers-instrumental-orchestration-ai-math-2026.md']
confidence: medium
page_kind: [framework]
research_method: [case study]
discipline: [math education]
level: [secondary]
audience: [instructors]
pedagogy: [student-engagement, scaffolding]
technology: [generative-ai, learning-analytics, adaptive-learning]
assessment: [feedback, formative-assessment]
methods: [qualitative-research]
foundations: [teacher-role, teacher-ai-competency, human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A study of six high school mathematics lessons taught with AI-based digital tools found that the classical vocabulary for describing how teachers manage classroom technology no longer covers everything teachers do. Alongside the four established orchestration types, three new ones appeared — monitoring a dashboard, correcting the AI, and mediating between the AI and the class — and the [[teacher-role|teacher]]'s content and ethical roles became most visible precisely when he was handling AI-generated [[feedback]].

## Key Findings

1. Analyzing six lessons by one experienced high school mathematics teacher produced 46 episodes, segmented at each point where the teacher switched tools, and each episode was named for its lesson and tool.
2. Four established instrumental orchestration types still applied: technical support, explain-the-screen, guide-and-explain, and spot-and-show.
3. Three orchestration types emerged that the existing framework does not name: dashboard-monitoring, AI-correcting, and AI-mediating.
4. The teacher's roles shifted by orchestration type and included [[pedagogy|pedagogical]], AI-technological, content-related, ethical, and knowledge-transmitter roles.
5. Content-related and ethical roles were most prominent when the teacher intervened in AI-generated feedback — correcting a wrong judgment, or explaining to students why the AI was wrong.
6. The authors read those corrections as an opportunity rather than only a failure: a teacher publicly flagging and fixing an AI error models critical acceptance of AI, which they treat as a form of [[ai-literacy|AI literacy]] teaching.

## How the lessons were captured

The study observed an experienced high school mathematics teacher over six lessons on rational and irrational functions with first-year high school students, taught across two weeks in December 2025. The teacher was not a casual user: he had led AI-based instruction at his school and had already switched tools after finding their limits — moving away from an initial AI courseware because he could not monitor the whole class at once, and adding a tool that could evaluate process rather than only answers. At the time of the study he ran OneNote, the national AI Digital Education Materials, and Snorkl in parallel, on the reasoning that no single tool meets a lesson's purpose alone.

Three data sources were combined: video recordings of the six lessons, screen recordings from the teacher's tablet, and a roughly 90-minute semi-structured interview. The tablet recordings mattered because the classroom camera could not capture what the teacher was reading and showing from the dashboard and the tool interface. Analysis used directed content analysis, taking the established orchestration typology as the starting framework while allowing new categories to emerge, and the unit of analysis was the episode — a stretch of lesson between tool switches.

## Three types the framework did not have

The four inherited types describe a teacher handling a tool that does what it is told: demonstrating features, explaining what is on screen, guiding work, or spotting and displaying a student's solution. AI-based tools change the object of that management, because the tool acts on its own. Dashboard-monitoring covers the teacher reading live [[learning-analytics|analytics]] on individual students and adjusting what happens next. AI-correcting covers the teacher overriding or repairing the tool's judgment — necessary because AI recognition of handwritten mathematics is unreliable, and a correct solution can be marked wrong. AI-mediating covers the teacher positioning the AI's output for the class, including telling students how much weight to give it.

That last pair is where the roles concentrate. When the teacher intervened in AI-generated feedback, the analysis found his content-related and ethical roles at their most prominent: he was not merely operating software but adjudicating mathematical correctness and setting norms for how AI output should be treated. The authors note the double edge explicitly. Inaccurate feedback can confuse students and seed [[misconceptions]]; but a teacher who names the error out loud turns it into a lesson about checking machine output, which they read as AI literacy instruction arising naturally inside the mathematics lesson.

## What this means for practice

- **Instructors.** Plan for the tool to be wrong. Handwritten mathematics and graphs are exactly where AI recognition fails, so budget class time for adjudicating feedback rather than assuming it lands correctly, and say out loud why you are overriding it — students learn something from the correction itself.
- **Instructors new to AI-based tools.** The teacher in this study reached his setup by abandoning tools that did not fit: he left an AI courseware when it stopped him seeing the whole class, and added a process-capable tool when answer-only scoring was not enough. Expect to run more than one tool, and to change your mind about which.
- **Faculty developers and instructional coaches.** The new orchestration types are observable behaviors and make a workable observation rubric: does the teacher read the dashboard and act on it, does the teacher catch and correct AI errors, does the teacher frame what the AI said for the class?
- **Administrators.** Dashboard-monitoring only exists if the tool surfaces class-level and student-level data in a usable interface, and AI-correcting only exists if the teacher has authority to override the tool's judgment. Both are procurement and policy decisions as much as teaching ones.
- **Researchers.** The framework extension is testable. Replicate the episode-based analysis with teachers of different experience, technology confidence and school level, and with different tools, to see which of the three new types are properties of AI-based tools and which are properties of this teacher.

## Limitations

- This is a single-teacher case study, and the authors state that generalization is constrained by it.
- The participating teacher had unusually high technical skill and experience leading AI-based instruction, which the authors say may have produced the AI-correcting and AI-mediating types — so those types may depend on the teacher as much as on the tool.
- Only two AI-based tools were observed, the national AI Digital Education Materials and Snorkl, and the authors note that tools differ enough that other environments may show other orchestration patterns.
- The evidence comes from six lessons in one unit (rational and irrational functions) over two weeks, chosen partly because graph and symbolic recognition are hard for AI — a setting that maximizes the chance of observing correction behavior.
- Role categories were derived through [[qualitative-research|qualitative]] content analysis of one teacher's practice, so they describe what was observed in these episodes rather than a validated taxonomy.

## Citation

Noh, Y. H., & Kim, H. (2026). [Exploring Teachers' Instrumental Orchestration and Roles in High School Mathematics Classes Using AI-Based Digital Tools](https://doi.org/10.63311/mathedu.26.6525). *The Mathematical Education, 65*(2), 309–335.