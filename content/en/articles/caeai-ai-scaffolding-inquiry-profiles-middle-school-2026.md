---
title: "A mixed-methods analysis of AI scaffolding patterns and student inquiry profiles in a middle-school agriculture-STEM classroom"
created: "2026-10-04T10:38:58-04:00"
updated: "2026-10-04T10:38:58-04:00"
type: article
sources: ['raw/papers/caeai-ai-scaffolding-inquiry-profiles-middle-school-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [case study, network analysis, thematic analysis]
level: [middle school, k 12]
audience: [instructors, researchers, curriculum designers]
pedagogy: [inquiry-based-learning, scaffolding, collaborative-learning, metacognition, student-ai-interaction]
technology: [generative-ai, conversational-ai]
methods: [mixed-methods-research, network-analysis, qualitative-research]
foundations: [cognitive-offloading, human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** In a rural agriculture-STEM classroom, 42 eighth-grade students in 12 groups used Aspen — a custom prompt-engineered [[conversational-ai|chatbot]] — to revise their own research questions and hypotheses. Crossing initial artifact quality against criterion-aligned revision produced four descriptive profiles the authors name Struggling, Most Improved, Perfectionists, and High Achievers. Because the two low-initial-quality profiles started alike yet diverged, the study compares them closely: [[network-analysis|Epistemic Network Analysis]] shows the Most Improved profile's Aspen responses connecting modeling and reflection with coaching and articulation, while the Struggling profile ties foundational [[scaffolding]] to irrelevant exchanges; peer talk then shows model uptake dominating the Most Improved groups against [[cognitive-offloading|cognitive offloading]] and collaborative impasse among the Struggling ones. The authors read the contrast as a design argument: a model alone is not enough, and support has to carry a full [[pedagogy|pedagogical]] cycle that links guidance, modeling, and [[metacognition|metacognitive reflection]].

## Key Findings

1. The study analyzed 42 eighth-grade students working in 12 intact groups of three to four within a 16-lesson sustainable agriculture unit at a public [[k-12|middle school]] in the rural Southeastern United States.
2. Crossing initial artifact quality with criterion-aligned revision produced four profiles: High Achievers (n = 2), Perfectionists (n = 2), Most Improved (n = 5), and Struggling (n = 3), using the rubric midpoint of 9 on a 0-18 scale as the cut point.
3. Coaching accounted for the largest share of prompt-level code presences in the Most Improved (24.6%) and High Achiever (24.1%) profiles, while Irrelevant code was most prominent in the Perfectionist (40.5%) and Struggling (24.3%) profiles.
4. In the low-initial-quality ENA contrast, prompt-level ENA coordinates differed on SVD2, U = 6139, p = .02, |r| = .17, with the Most Improved subtraction network stronger around modeling and reflection and the Struggling network strongest on the scaffolding-irrelevant edge.
5. Peer-discussion coding showed the Most Improved profile dominated by model uptake at 74.1% of coded engagement turns, whereas cognitive offloading and collaborative impasse together made up 80.8% of the Struggling profile's coded turns.
6. High Achiever interactions averaged approximately 2.42 coded support functions per prompt-level episode, compared with 1.66 for Perfectionists, even though High Achievers had fewer Aspen interactions overall (24 episodes).
7. Aspen was built as a prompt-engineered [[pedagogical-agent|pedagogical agent]] on a general-purpose GPT model through OpenAI's GPT Assistants API, not a task-specific fine-tuned model trained on student writing.

## How the study was built

The setting was a 16-lesson sustainable agriculture [[curriculum-design|curriculum]] in which groups investigated soil, air, water, and plant-growth factors around a local sustainability problem. From 90 enrolled eighth-grade students, the researchers used purposeful maximum variation sampling to select 42 students in 12 intact groups, chosen to vary by initial RQ/hypothesis quality and by observed engagement. The focal activity was the RQ and hypothesis revision phase, spread across two lessons over two weeks. Students prompted Aspen individually but were asked to share responses aloud, compare them with the inquiry criteria, and negotiate revisions in a shared project journal rather than adopting suggestions automatically.

Data came from four sources: [[group-work|group project]]-journal artifacts, time-stamped [[student-ai-interaction|AI interaction]] logs, audio-recorded peer discussions, and classroom observation notes. Artifacts were scored on a nine-criterion rubric — four RQ criteria and five hypothesis criteria, each from 0 to 2, totaling 18 — for both initial quality and criterion-aligned revision. Two coders scored 40% of artifacts, with discrepancies resolved by discussion. Aspen's responses were segmented and coded for six cognitive-[[sociocultural-learning|apprenticeship]] support moves plus an Irrelevant category, with Cohen's kappa from .80 to .90; transcript coding ran .75 to .90.

## The four artifact-revision profiles

The paper's central organizing construct is a 2 × 2 crossing of two rubric scores: initial artifact quality and criterion-aligned revision. Groups scoring at or below the rubric midpoint (0-9) were classified low on a dimension, and those above it (10-18) high. The resulting four profiles are descriptive, within-sample categories rather than validated learner types, and the authors are explicit that they do not represent strategies Aspen selected.

The names matter for reading the paper. High Achievers (G02, G07) began strong (initial scores 16, 14) and revised little (3, 2) — targeted refinement rather than restructuring. Perfectionists (G06, G10) also began strong (12, 13) but revised extensively (16, 18). Most Improved groups (G03, G04, G09, G11, G12) began weak (8, 4, 3, 6, 5) yet revised extensively (18, 10, 18, 18, 18). Struggling groups (G01, G05, G08) began weak (7, 2, 4) and stayed weak (3, 6, 6). The likeness of the two low-initial-quality profiles at the outset is what makes their divergence the study's comparison of interest.

## What the ENA networks show

Epistemic Network Analysis modeled how Aspen's coded response functions co-occurred within prompt-level episodes, treating the seven response codes as nodes and co-occurrence strength as edges. In the four-profile model, the profile means sat close together on SVD1 but separated on SVD2, with Struggling lowest and High Achievers highest — a pattern the authors caution against reading as a direct measure of achievement.

Two subtraction networks carry the interpretive weight. In the low-initial-quality contrast, the Most Improved profile showed stronger connections among modeling, reflection, coaching, and articulation, and AI-log excerpts show Aspen pairing a coached evaluation with a modeled revision and a closing reflection prompt such as "How does this sound to you? Feel free to adjust based on your thoughts!" The Struggling network instead showed its most visible edge linking scaffolding to Irrelevant, with additional edges to exploration and articulation. Because students prompted Aspen in their own words, the authors stress these are interaction-contingent patterns, not evidence of formal [[personalized-learning|personalization]].

## How groups took up the support

The [[qualitative-research|qualitative]] strand, bounded to the eight low-initial-quality groups across 16 peer-discussion transcripts, explains how structural patterns entered group talk. Model uptake dominated the Most Improved groups at 74.1% of coded engagement turns: students brought Aspen's suggestions into decisions about variables and testing conditions, as when G03 said "for independent variable, type in what she gave us, the turbidity." In the Struggling groups, cognitive offloading (34.6%) and collaborative impasse (46.2%) together reached 80.8%, with requests for better wording ("How can I make my research question more better?") alongside stalled coordination ("I don't know what to do next … What are we even testing?").

Read together, the ENA and transcript evidence support the authors' framing that the pedagogical value of AI support turns on how groups interpret and use it, not merely on what the system offers. The High Achiever and Perfectionist contrast adds a cautionary note: Perfectionists had far more irrelevant-coded responses (40.5%) yet still revised extensively, so response-code frequencies alone did not characterize the organization of support. The study cannot say how those responses contributed to the Perfectionists' revisions, since collaborative engagement was not qualitatively analyzed for the high-initial-quality profiles.

## What this means for practice

- **Instructors.** Pair any modeled formulation with a reflection prompt and a peer-evaluation step. The study's clearest contrast is that Most Improved groups met a complete pedagogical cycle — coaching, modeling, then reflection — while Struggling groups met foundational support beside off-task exchange.
- **Curriculum designers.** Build artifact revision around shared criteria and a group journal that requires students to justify changes rather than accept suggestions. The design that separated the low-initial-quality profiles ran through how groups negotiated AI input together, not through the tool alone.
- **[[learning-analytics|Learning analytics]] and tool developers.** Treat interaction traces as formative signals for teachers, not automated diagnoses. Repeated off-task or generic answer-seeking prompts can flag where a group may be confused or stalled while leaving interpretation to the [[teacher-role|teacher]].
- **Researchers.** The four profiles are descriptive and within-sample; replication needs larger, more diverse samples and methods that model nesting and sequence, since prompt-level ENA units were nested within a small number of groups.

## Limitations

- The 12 groups were purposefully selected from one rural middle-school agriculture-STEM unit, so the four profiles are descriptive, within-sample categories rather than validated or population-level profiles, and the coordinate comparisons were exploratory.
- AI-feedback exposure was neither uniform nor experimentally controlled, since students wrote their own prompts; the study cannot isolate the direction of influence or attribute profile differences solely to Aspen.
- The response coding classified pedagogical function and connections, not factual accuracy, scientific adequacy, readability, or developmental appropriateness of Aspen's messages.
- Aspen ran on a general-purpose GPT model through OpenAI's GPT Assistants API rather than a named or versioned fixed system, so its responses remained subject to variability, occasional [[hallucination-risk|hallucination]], and imperfect alignment with instructional goals; the paper names no model version and reports no data-collection window beyond the two-week activity and its 27 November 2025 receipt.
- The study did not isolate how students interpreted Aspen's combined peer-like persona and [[socratic-method|Socratic]] role, leaving open when peer-like framing supports engagement and when it blurs task expectations.
- Collaborative engagement was qualitatively analyzed only for the two low-initial-quality profiles, so it cannot explain how AI responses shaped the high-initial-quality groups' revisions.

## Citation

Kilinc, S., Aldemir, T., Misiejuk, K., Kaliisa, R., Sabanwar, V., Bicer, A., Song, D., & Yalvac, B. (2026). [A mixed-methods analysis of AI scaffolding patterns and student inquiry profiles in a middle-school agriculture-STEM classroom](https://doi.org/10.1016/j.caeai.2026.100683). *Computers and Education: Artificial Intelligence, 11*, 100683.