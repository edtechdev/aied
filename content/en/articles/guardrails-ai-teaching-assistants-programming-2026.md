---
title: "Guardrails or Roadblocks? Effects of Pedagogical Style and Context Awareness in AI Teaching Assistants for Programming"
created: "2026-09-25T09:40:00-04:00"
updated: "2026-09-25T09:40:00-04:00"
type: article
sources: ['raw/papers/guardrails-ai-teaching-assistants-programming-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, researchers]
ethics: [guardrails, pedagogical-safety, trust]
technology: [conversational-ai, intelligent-tutoring, llm, generative-ai]
pedagogy: [socratic-method, help-seeking, scaffolding, student-ai-interaction]
methods: [rct]
foundations: [cognitive-offloading]
assessment: [learning-gains]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This 2×2 [[rct|randomized controlled trial]] with 132 introductory Python students compared four [[guardrails|guardrailed]] AI teaching assistants, varying guidance style ([[socratic-method|Socratic]] questioning vs. direct instruction) and context awareness (full problem context vs. chat history only). All four were backed by GPT-4o and differed only in system prompt and supplied context. Counterintuitively, the Socratic assistant with full context — the configuration closest to [[pedagogy|pedagogical]] intuition — was rated significantly less supportive of task completion than the other three, and descriptively showed the highest interaction [[anxiety-and-stress|stress]], the highest rate of external [[llm|LLM]] use, and the lowest share of full-comprehension post-task explanations. Socratic conditions sent more queries, and no-context students wrote longer messages, doing the contextual work themselves. Only the task-completion perception gap and the two behavioral measures reached significance; stress, tool-use, and comprehension differences were descriptive. The lesson for [[cs-education]]: more [[scaffolding]] and more context are not automatically better — fit matters.

## Key Findings
1. In a 2×2 experiment with 132 introductory Python students, four GPT-4o-backed AI TAs differed only in system prompt and context; the interface was identical.
2. Students rated the Socratic + Full Context AI TA significantly lower for supporting task completion (mean rank 48.63, μ = 3.53) than the other three conditions (χ²(3) = 12.14, p = .007).
3. Comprehension support (p = .188), correct information (p = .635), and stressful interaction (p = .213) did not differ significantly, though Socratic + Full Context trended worst on stress.
4. Behavioral engagement differed significantly: query volume (χ²(3) = 13.28, p = .004) and average message length (χ²(3) = 29.96, p < .001).
5. Socratic + No Context students sent the most queries (μ = 11.1 per problem); Direct + No Context wrote the longest messages (μ = 126 characters).
6. External LLM use was reported by 15% of students (20 of 132), not significantly different by condition (p = .48), but highest in Socratic + Full Context at 23% (7 of 30).
7. Post-task comprehension was descriptive only: Direct + Full Context had the most full-comprehension responses (67%), Socratic + Full Context the fewest (48%) and the most minimal (14%).

## Study design and what was varied
Students in an introductory Python course (598 enrolled, Fall 2025) earned 0.5% extra credit for completing three tasks — one code-writing and two debugging — plus a post-survey; after exclusions for non-consent and unusable logs, 132 students formed the analytic dataset. The design crossed guidance style with context awareness; cell sizes were 37 (Direct + Full Context), 32 (Direct + No Context), 30 (Socratic + Full Context), and 33 (Socratic + No Context). The [[conversational-ai]] assistants shared one platform interface, and function names were anonymized so the chatbot could not infer the intended solution from them. Prior experience: 24% experienced or very experienced, 50% average, 25% inexperienced or very inexperienced. Most students (128 of 132) completed all three tasks, passing all test cases, with an average score of 2.98 out of 3 (σ = 0.19).

## Perceptions and interaction behavior
Perceptions used 5-point Likert items tested with Kruskal–Wallis H tests (α = .05). Only one perception difference reached significance: support for task completion (χ²(3) = 12.14, p = .007), where Socratic + Full Context scored lowest (mean rank 48.63, μ = 3.53) against Direct + Full Context (μ = 4.27), Direct + No Context (μ = 4.16), and Socratic + No Context (μ = 4.12). [[student-engagement]] diverged far more sharply. Socratic + No Context students sent the most queries (μ = 11.1 per problem), suggesting that withholding answers while lacking task knowledge forces extra back-and-forth; Direct + Full Context produced the lowest volume (μ = 4.1). Message length also varied significantly (χ²(3) = 29.96, p < .001), peaking at μ = 126 characters without context. Across the study, students sent 2,467 messages (about 6 per student per problem).

## Comprehension and the Socratic tension
Comprehension was coded from 128 non-blank post-task explanations of the matrix boundary bug: 57% full comprehension, 30% partial or impure, 11% minimal, and 2% ungaugable. These comparisons are descriptive, not inferential. Direct conditions outperformed Socratic ones (67% full comprehension for Direct + Full Context, 61% for Direct + No Context, 50% for Socratic + No Context, 48% for Socratic + Full Context), and Socratic + Full Context had the highest share of minimal-comprehension responses (14%). External [[help-seeking]] tilted the same way: 15% of students (20 of 132) reported using another LLM, not significantly different across conditions (p = .48) but highest in Socratic + Full Context at 23% (7 of 30). Coded reasons were inadequate guidance (n = 17), going in circles (n = 4), and forgetting context (n = 2); one student called the Socratic TA "super rigid" — a signal of [[cognitive-offloading]] risk when students migrate to unrestricted tools.

## What this means for practice
- **Instructors.** Match guidance style to the assignment's goal — completion, conceptual understanding, or [[desirable-difficulties|productive struggle]] — rather than assuming the more Socratic tool is better.
- **Course teams.** Integrate the assistant with the assignment environment so it sees the problem statement and current code, but treat context as a design input, not a fix; full context did not guarantee a better experience.
- **Researchers.** Compare configurations of one system rather than whole interventions, and measure perceptions, behavior, and comprehension separately, since they diverge.
- **Administrators.** Guardrails alone do not keep students on approved tools; 15% used another LLM, most often citing inadequate or inflexible guidance.

## Limitations
- The study ran in one introductory Python course at a single large US public research university (Fall 2025); the controlled setting supports internal validity but limits generalization to other contexts.
- Task comprehension was measured for only one of the three tasks (the 10×10 matrix debugging task) to reduce survey fatigue, capturing immediate comprehension rather than retention.
- Comprehension, interaction-stress, and external-LLM-use differences were descriptive only; only task-completion perceptions and the two behavioral measures were significant.
- [[qualitative-research|Qualitative]] coding involves subjectivity, mitigated by a codebook, transparent reporting, and a flowchart.

## Connected Concepts
- [[guardrails]]
- [[intelligent-tutoring]]
- [[socratic-method]]
- [[help-seeking]]
- [[cs-education]]
- [[scaffolding]]
- [[conversational-ai]]
- [[rct]]
- [[student-engagement]]
- [[cognitive-offloading]]
- [[llm]]

## Connected Articles
- [[conversational-agents-novice-programmers-scoping-2025]] — Exploring Conversational Agents for Novice Programmers: A Scoping Review
- [[llm-programming-support-governance-cs-education]] — Exploring the Design Space of LLM-Based Programming Support in CS Education: A Scoping Review through the Lens of Assistance Governance
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — The Socratic trap: Benchmarking the capacity of large language models to generate strategic misconceptions in computer science education
- [[socratic-ai-physics-tutor-taxonomy-2026]] — A Bottom-Up Taxonomy of Student Discourse with a Socratic AI Physics Tutor
- [[wang-safety-gap-productive-struggle-2026]] — The Safety Gap: Restoring Productive Struggle Through Pedagogically Aligned Generative AI
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Reducing Barriers to Academic Support: Evaluating a Course-Specific RAG System for Addressing Help-Seeking Disparities in Higher Education
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — Efficiency vs. Effectiveness: Self-Regulated Learning with LLM-Mediated Help-Seeking

## Citation
Eastwood, M., Narne, H., Hilby, J., Denny, P., Aggarwal, A., & Kapoor, A. (2026). [*Guardrails or Roadblocks? Effects of Pedagogical Style and Context Awareness in AI Teaching Assistants for Programming*](https://arxiv.org/abs/2609.29995). arXiv preprint.
