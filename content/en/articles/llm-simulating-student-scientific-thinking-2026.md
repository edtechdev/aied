---
title: "Exploring the Capacity of Large Language Models to Simulate Students' Scientific Thinking: Insights for Responsive Teaching"
created: "2026-09-25T11:42:30-04:00"
updated: "2026-09-25T12:56:00-04:00"
type: article
sources: ['raw/papers/llm-simulating-student-scientific-thinking-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [interviews, thematic analysis]
discipline: [science education]
level: [k 12, primary education, middle school, secondary, teacher education]
audience: [instructors, curriculum designers, instructional designers, researchers, faculty developers]
foundations: [ai-literacy, curriculum-design, human-ai-collaboration, learning-design, teacher-role]
pedagogy: [inquiry-based-learning, prior-knowledge, scaffolding]
technology: [generative-ai, human-in-the-loop-ai, intelligent-tutoring, llm, prompt-engineering, simulating-students, student-modeling]
ethics: [equity-in-ai-education, pedagogical-safety]
assessment: [formative-assessment]
methods: [ai-ed-evaluation, benchmark, mixed-methods-research, qualitative-research, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Can [[llm|large language models]] stand in for a teacher's students? This two-phase study generated 8,820 simulated ideas with six models from 49 NGSS-aligned lesson plans and compared them with real-lesson ideas and with what six teachers saw. Overlap was moderate and mostly appropriate, but the models drifted most for younger students, producing reasoning that was too broad, too technical, and too certain. Teachers found them useful when the ideas triggered their own sensemaking, positioning [[simulating-students]] as a starting point for [[scaffolding|instructional planning]] rather than a finished product. The authors frame the work as evidence for [[generative-ai]]-supported [[science-education|responsive science teaching]] and [[teacher-role|teacher sensemaking]], not a replacement.

## Key Findings
1. Six LLMs generated 30 ideas per lesson from 49 lesson plans across three domains and grade bands: 1,470 per model, 8,820 total (lesson plans averaged 28, SD = 10).
2. Simulated ideas matched lesson ideas at mean cosine similarity 0.52 (SD = 0.07), inside the 0.42–0.70 band prior work accepts; every model beat Mistral-7B (0.47), Gemini-2.5-Flash highest (0.55).
3. Overall 69% of ideas sat at or below the target grade's reading level; Llama-4 best (over 80%), GPT-5-mini worst, exceeding it 0.41 more often (OR = 153, 95% CI [21.2, 1103], p < .001).
4. Overall 91% of ideas stayed within expected knowledge scope, GPT-4o and Llama-4 strongest; GPT-5-mini exceeded grade-level boundaries 0.27 more often than either (Δ proportion = −0.27).
5. Grade level, not subject, drove most gaps: elementary and middle school ideas matched lesson ideas more closely than high school ideas (β = 0.05, p = .01 both), though within-scope proportions were lower for middle school (OR = 0.14) and elementary (OR = 0.07).
6. Divergence coding found 60.54% of ideas reasoned broadly from lesson contexts, 35.71% used more technical vocabulary, 14.63% carried fewer uncertainty markers, 7.48% used analogies.
7. Six teachers found the ideas realistic and aligned with lesson objectives, most useful when they sparked sensemaking, but flagged advanced vocabulary and leading prompts.

## How the study tested six models against real lesson ideas
Phase one measured overlap, grade-level language, and knowledge scope; phase two asked how teachers judge them. The 49 lesson plans came from nine OpenSciEd units; each [[prompt-engineering|prompt]] supplied lesson context and asked for partial or incorrect student reasoning. Models: GPT-5-mini, GPT-4o, Claude Sonnet 4, Gemini 2.5 Flash, Mistral 7B, Llama-4-17B. Ideas were clustered (threshold = 0.30, similarity ≥ 0.70), scored on Flesch–Kincaid Grade Level, and scope-judged by an [[llm|LLM-as-a-judge]] (GPT-5), human-checked on 20% (κ = 0.69). Six teachers (45-minute interviews, 1–15 years' experience) assessed GPT-4o ideas for their own lessons, coded [[qualitative-research|qualitatively]].

## Similarity, readability, and scope: the three benchmarks
Similarity varied by model (χ²(5) = 218.69, p < .001), four models clustered at 0.54–0.55. Domain did not predict it (χ²(2) = 3.83, p = .15); grade did (χ²(2) = 10.94, p = .004), elementary (0.54) and middle school (0.55) above high school (0.50), β = 0.05, p = .01 both.

Language level was weakest: 69% fell at or below target grade (χ²(5) = 57.44, p < .001), Llama-4 beating Mistral-7B by 0.33 (OR = 67.57, 95% CI [10.33, 443], p < .001). Domain was flat (χ²(2) = 0.51, p = .77), grade was not (χ²(2) = 58.54, p < .001): high school OR = 160 (95% CI [31.1, 819]), middle school OR = 3.16 (95% CI [1.29, 7.74]). A grade-level revision prompt lifted most models to 83.67–95.92%, GPT-5-mini only 55.10%.

Knowledge scope was strongest, with GPT-4o and Llama-4 best; GPT-5-mini exceeded scope 0.27 more often than either and 0.22 more than Gemini-2.5-Flash. Domain did not matter (χ² = 0.06, p = .97), grade did (χ² = 17.18, p < .001): against high school, within-scope proportions fell 0.09 for middle school (OR = 0.14, 95% CI [0.03, 0.68], p = .02) and 0.16 for elementary (OR = 0.07, 95% CI [0.02, 0.33], p < .001); only GPT-5-mini showed a within-model grade effect (χ² = 9.18, p = .01). Models could not represent younger students' reasoning: a fourth-grade lesson drew "atoms move but we couldn't see shape change."

## Where simulated ideas diverged from classroom ideas
Ideas overlapped lesson concepts but reasoned less specifically from lesson contexts, evidence, and mechanisms (60.54%, by model 51.02–75.51%). Misconception substance diverged in 17.69% of ideas, technical vocabulary in 35.71%, uncertainty markers fewer than in lesson ideas (14.63%; Llama-4 24.49%, Claude 4 22.45%), analogies more common (7.48%). Table 2 reports n = 294, 49 per model.

## What teachers saw in the simulated ideas
Teachers judged outputs on authenticity and usefulness: realistic, aligned with lesson objectives, most useful when they prompted sensemaking; they valued [[scaffolding|instructional scaffolds]] for surfacing unexpected [[prior-knowledge|student ideas]]. Two found vocabulary too advanced, Sam and Alyssa found prompts overly leading, and Jan asked for "how/why, not yes/no questions."

## What this means for practice
- **Instructors.** Treat simulated ideas as a rehearsal aid, not a script; correct vocabulary and certainty before use.
- **Curriculum and instructional designers.** Validate lower-grade output against NGSS grade-band expectations: readability and scope slipped for elementary and middle school.
- **Model selection is not one-dimensional.** [[llm|Models]] strong on similarity can still overshoot grade level; Llama-4, Gemini-2.5-Flash, and GPT-4o were most balanced, GPT-5-mini weak on level and scope.
- **Teacher educators.** Pair deployment with professional development on [[human-in-the-loop-ai|refining]] [[generative-ai|AI-generated]] ideas through iterative re-prompting.
- **Administrators.** Set data-privacy rules for student information fed to [[llm|LLMs]]; over-reliance on inaccurate simulations can narrow responsiveness.

## Limitations
- Simulated ideas were never tested in real classrooms, so instructional impact is unmeasured.
- The comparison corpus was not student discourse: suggested ideas from pilot data and teacher predictions may not represent students.
- Scope relied on an [[llm|LLM-as-a-judge]] (GPT-5) scoring other models, mitigated with a human rater (κ = 0.69) and second judge (κ = 0.64); generation was zero-shot only, and one elementary teacher was interviewed.
- The lineup is superseded: submission 19 November 2025, acceptance 13 May 2026, no data-collection window, so results describe models current then.

## Connected Concepts
- [[llm]]
- [[simulating-students]]
- [[generative-ai]]
- [[science-education]]
- [[prompt-engineering]]
- [[student-modeling]]
- [[scaffolding]]
- [[prior-knowledge]]
- [[curriculum-design]]
- [[teacher-role]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[formative-assessment]]
- [[benchmark]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[equity-in-ai-education]]

## Connected Articles
- [[llm-student-simulation-teacher-insights]] — Can LLMs Effectively Simulate Human Learners? Teachers' Insights from Tutoring LLM Students
- [[llm-student-simulation-misconception-faithfulness]] — Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators
- [[simulating-students-llm-review-2026]] — Simulating Students with Large Language Models: A Review of Architecture, Mechanisms, and Role Modelling in Education with Generative AI
- [[valid-student-simulation-llm-2026]] — Towards Valid Student Simulation with Large Language Models
- [[inside-llm-student-simulator-reasoning-2026]] — INSIDE the Student's Mind: Jointly Modeling Latent Reasoning and Action in LLM Student Simulators
- [[simulating-students-diverse-cognitive-levels-2025]] — Embracing Imperfection: Simulating Students with Diverse Cognitive Levels Using LLM-based Agents
- [[prompting-teachability-novice-personas-lbt-2026]] — Prompting for Teachability: Designing Novice Personas in LLMs for Learning by Teaching Contexts
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]] — Suitability of Artificial Intelligence Supported Lesson Plans from the Perspective of Science Education Experts
- [[teachers-ai-knowledge-genai-lesson-planning-2026]] — Beyond operational skills: Teachers' AI knowledge and interactions with generative AI in lesson planning

## Citation
Nguyen, H., & Cao, J. (2026). [*Exploring the Capacity of Large Language Models to Simulate Students' Scientific Thinking: Insights for Responsive Teaching*](https://doi.org/10.1007/s10956-026-10333-5). *Journal of Science Education and Technology*.