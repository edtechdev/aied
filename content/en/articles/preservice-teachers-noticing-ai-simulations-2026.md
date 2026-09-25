---
title: "Preservice mathematics teachers’ noticing in AI-based simulations: transitions among attending, interpreting, and shaping"
created: "2026-09-25T11:42:33-04:00"
updated: "2026-09-25T12:56:00-04:00"
type: article
sources: ['raw/papers/preservice-teachers-noticing-ai-simulations-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [thematic analysis]
discipline: [math education]
level: [higher ed, teacher education]
audience: [faculty developers, instructors, researchers]
foundations: [human-ai-collaboration, teacher-ai-competency, theories-and-frameworks]
pedagogy: [inquiry-based-learning, scaffolding, situated-learning, sociocultural-learning]
technology: [conversational-ai, generative-ai, llm, prompt-engineering, simulating-students, simulation]
assessment: [feedback]
methods: [mixed-methods-research, network-analysis, qualitative-research]
ethics: [multilingual-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This three-week [[simulating-students|student-simulation]] intervention studied how 17 preservice mathematics teachers moved among the dimensions of teacher noticing — attending, interpreting, shaping — while talking with [[conversational-ai|chatbot]] students about the equal sign. Coding 304 noticing statements from weekly reflections and modeling them with [[network-analysis|epistemic network analysis]] showed that noticing was organized through recurring transitions, not a fixed sequence. Interpreting and shaping were the most tightly coupled dimensions each week; attending and interpreting were least consistently linked. The strongest within-dimension transition shifted weekly — attending in Week 1, interpreting in Week 2, shaping in Week 3 — evidence, the authors argue, that noticing is [[situated-learning|situated]] and responsive to task design. For [[teacher-education]], [[generative-ai]] simulations can make that iterative coordination visible.

## Key Findings
1. Seventeen preservice mathematics teachers — seven Austrian, seven Turkish, three Uruguayan — completed the intervention; of 24 volunteers, seven submitting incomplete work or late tasks were excluded.
2. Each week followed four phases — watching a video of a student's misconception, interacting with a student chatbot, reflecting on the conversation, receiving mentor-chatbot feedback — yielding 51 cases.
3. Coding produced 304 noticing statements as the unit of analysis; Krippendorff's α was .803, above the adopted α ≥ .80 threshold.
4. Pooled agreement across the five overlapping cases was κ = 0.937 (95% CI 0.88–0.99); coders fell below their 0.85 recalibration threshold after Case 18 (κ = 0.821) and Case 27 (κ = 0.825), re-coded the disputed statements, and needed no recalibration after Cases 36, 45, and 51.
5. Within-dimension transitions dominated, but the dominant one changed weekly: attending→attending in Week 1 (dominant for six PTs), interpreting→interpreting in Week 2, shaping→shaping in Week 3.
6. In the ENA models, interpreting–shaping was the strongest co-occurrence in all three weeks (0.57, 0.54, 0.63); attending–shaping was stable (0.47, 0.46, 0.46), while attending–interpreting was weakest and most variable (0.30, 0.54, 0.23).
7. Attending→shaping transitions outnumbered attending→interpreting ones, so PTs often moved directly from noticing something to probing it.

## What teacher noticing looks like as a sequence
The study adopts the expanded learn-to-notice framing: attending, interpreting, and shaping, the last capturing teachers' construction of student-thinking opportunities. The Teacher Noticing of Rationality Framework specifies the object: students' mathematical thinking, operationalized as justifying validity, selecting appropriate tools, and communicating with grade-appropriate terminology and representations. Attending directs attention at those behaviors rather than surface correctness; interpreting assesses the validity of justifications and the coherence of communication; shaping structures the conditions under which that behavior becomes visible. The three are mutually influential and recursive, not linear; noticing is thus part of [[teacher-ai-competency|teacher competence]] and a domain-specific practice.

## How noticing moved across three weeks
Group-level transition counts showed continuity and connection. Within-dimension transitions were prominent overall, but which dimension dominated shifted weekly. Between-dimension transitions clustered around interpreting and shaping: S→I and I→S moves were frequent, which the authors read as closely linking sense-making and gaining detail, with interpretations informing [[inquiry-based-learning|inquiry]] moves that generated new material. Attending–interpreting links were less frequent and less consistently established; the ENA models agreed.

All three tasks used operational interpretations of the equal sign, but the second made the expression comparison explicit, which the authors suggest supported stronger attending–interpreting transitions; they read the weekly variation as context-sensitive reorganization, not inconsistency.

## One teacher's noticing across the three weeks
In Week 1, P4 asked the simulated student to explain the reasoning behind a solution and interpreted the reply as treating an unknown number on one side as equal to the other; mentor feedback suggested "greater attention could have been paid to the underlying reasons for the student's misunderstanding." In Week 2 the interaction turned to attending–interpreting as the student voiced an equivalence understanding ("the equal sign is saying both sides are the same, right?"). In Week 3, P4 returned to interpreting–shaping, prompting "What do you think about the equal sign? What effect does it have between the sums?"

## What the simulation design affords and constrains
Three virtual students, each paired with a targeted task and a solution video, embodied specific equal-sign misconceptions as secondary-level students aged 11–12. The environments ran on OpenAI's GPT-4o (OpenAI, 2024), each chatbot's persona, aim, recipients, themes, and chat structure set through explicit [[prompt-engineering|prompt engineering]] following Park and Choo (2024); the mentor chatbot added few-shot examples for concise feedback. Prototypes were piloted in Austria, in Spanish, and in Turkish. No calendar dates are given; the manuscript was received 30 June 2025 and published 3 June 2026, so data collection used the then-current GPT-4o.

Compared with classroom or [[video-education|video-based]] settings, where multiple events compete for attention, the simulation isolates one student interaction, and its text-based, individual nature means shaping appeared mainly as questioning and prompting rather than the participant structures of classroom shaping. LLM discourse may not reflect age-appropriate language, affect, or classroom dynamics, making [[transfer-of-learning|transfer]] difficult; the deficit-oriented design likely oriented noticing toward error detection; and the text-only format underrepresents gesture and representation.

## What this means for practice
- **Teacher educators.** Have PTs connect each interpretation to their next move; interpreting–shaping coupling kept inquiry going.
- **Simulation and task designers.** Task specificity is a design input: when the expression comparison was explicit, attending–interpreting links were strongest.
- **Program leaders.** The four-phase weekly cycle — video, chatbot interaction, reflection, mentor feedback — produced 304 coded statements across 51 cases and took about one hour (20 minutes interacting, 30 reflecting).
- **Designers balancing representation.** Build strength-based alongside deficit-based personas: misconception-first design focused engagement but oriented noticing toward error detection.
- **Researchers.** Transition counts and ENA are complementary: one shows movement between dimensions, the other which were activated together.

## Limitations
- The sample was small and uneven across countries (seven Austrian PTs, seven Turkish, three Uruguayan, from the 17 of 24 volunteers who kept the weekly schedule).
- The three-week design cannot establish the durability of noticing, and different languages may have influenced the specificity of AI responses; the authors also flag the tasks as influencing transitions.
- Deficit-oriented, text-based design bounded what was observable: shaping through participant structures or material resources was invisible, and multimodal reasoning underrepresented.
- The environments ran on GPT-4o (OpenAI, 2024), superseded by June 2026 publication, so patterns may not carry over to newer models; mentor feedback uptake was not systematically analyzed.

## Connected Concepts
- [[simulating-students]]
- [[teacher-education]]
- [[math-education]]
- [[conversational-ai]]
- [[network-analysis]]
- [[generative-ai]]
- [[llm]]
- [[simulation]]
- [[scaffolding]]
- [[situated-learning]]
- [[inquiry-based-learning]]
- [[teacher-ai-competency]]

## Connected Articles
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]] — Integrating ChatGPT in Mathematics Teacher Education: AI-Based Simulation Role-Playing to Support Practice-based Teaching
- [[hauk-student-avatars-dialogue-teacher-education-2026]] — Authentic and functional dialogue with AI-based student avatars: Evidence from a practice-based teacher education program
- [[llm-student-simulation-teacher-insights]] — Can LLMs Effectively Simulate Human Learners? Teachers' Insights from Tutoring LLM Students
- [[valid-student-simulation-llm-2026]] — Towards Valid Student Simulation with Large Language Models
- [[simulating-students-llm-review-2026]] — Simulating Students with Large Language Models: A Review of Architecture, Mechanisms, and Role Modelling in Education with Generative AI
- [[llm-student-simulation-misconception-faithfulness]] — Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators
- [[inside-llm-student-simulator-reasoning-2026]] — INSIDE the Student's Mind: Jointly Modeling Latent Reasoning and Action in LLM Student Simulators
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]] — Artificial intelligence in initial teacher training for pre-service primary school teachers in mathematics: a systematic review
- [[penny-transition-network-analysis-efl-writing-2026]] — Transition network analysis of EFL writing

## Citation
Galiç, S., Tejera, M., Parodi, S., Hohenwarter, M., & Lavicza, Z. (2026). [*Preservice mathematics teachers' noticing in AI-based simulations: transitions among attending, interpreting, and shaping*](https://doi.org/10.1007/s11858-026-01805-4). *ZDM – Mathematics Education*.