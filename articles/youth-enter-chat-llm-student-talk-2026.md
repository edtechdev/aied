---
title: "When Youth Enter The Chat: An Epistemic Shift in the Validation of LLM-Based Measures of Student Talk"
created: "2026-08-26T09:00:00-04:00"
updated: "2026-09-19T08:58:00-04:00"
type: article
pedagogy: [sociocultural-learning, student-ai-interaction]
technology: [learning-analytics, llm, multimodal]
ethics: [equity-in-ai-education]
research_method: [qualitative, case study]
level: [k 12]
sources: ['raw/papers/youth-enter-chat-llm-student-talk-2026.md']
confidence: high
discipline: [math education]
audience: [researchers, learning analytics designers, assessment designers]
---

> **Synthesis:** Large language models are increasingly used to measure aspects of student discourse such as talk moves, collaboration, and equity of voice at scale, but common validation practices that compare outputs against adult expert annotations with held-out sets and F1 scores may be insufficient and inequitable, particularly for racially and linguistically marginalized youth. Santos-Deonizio and colleagues argue that re-contextualizing classroom conversations and engaging youth in the [[research-methods-aied|research]] process is necessary to ensure such measures are meaningful and [[equity-in-ai-education|equitable]]. In a case study of [[multilingual-learning|multilingual]] youth in an eighth-grade math classroom, they employ participant observation, interviews, focus groups, and member checks with four focal students, revealing misalignments between students' interpretations and adult or [[llm]] framings and centering youth as epistemic authorities.

## Key Findings

1. Typical validation of [[learning-analytics|LLM-based measures]] of student talk compares outputs against adult expert annotations with F1 scores, which de-contextualizes student language.
2. These approaches are argued to be insufficient for ensuring measures are meaningful and equitable, especially for racially and linguistically marginalized youth.
3. Re-contextualizing classroom conversations and engaging youth in the research process is necessary to center the youth whose talk is being analyzed.
4. A case study of multilingual youth in an eighth-grade math classroom used participant observation, interviews, focus groups, and member checks with four focal students.
5. Findings reveal misalignments between students' interpretations and adult or LLM framings, underscoring the value of sharing epistemic authority with youth.

## What this means for practice

- **Researchers.** Treat F1 agreement with adult expert annotations as necessary but not sufficient: re-contextualizing talk-move definitions raised F1 for the Claim code by +0.104 and for the Question code by +0.23.
- **Researchers.** Bring youth into validation through member checks — participant observation, interviews, and focus groups — because students' interpretations of their own talk diverged from adult and LLM framings.
- **Designers.** Re-examine coding schemes against the local classroom context before classification; the annotation team found that disambiguating certain talk moves required context that transcripts alone did not supply.
- **Designers.** Do not expect better prompting to fix misalignment; the authors describe it as a structural limitation of applying text-based classification to complex social interaction, not a data-size problem.
- **Researchers.** Account for the environmental cost of measurement: the two annotation runs used large API-served models, so weigh smaller, locally runnable alternatives.

## Limitations

- Case study of one eighth-grade mathematics classroom with four focal students, so findings cannot be generalized from one classroom and four students; a larger or more varied sample would likely surface participation patterns not observed here.
- Participatory engagement was scoped to validation: youth gave feedback on LLM outputs and the coding scheme but did not design the coding scheme or the prompts, so fuller co-design would likely reveal mismatches the member checks missed.
- The validation set is small, and the authors flag the environmental cost of their own research — two annotation runs with large, non-locally-runnable models — as an ethical limitation.
- The framing intentionally treats learning as more than spoken contributions, and the relationship-building methods that re-contextualize a few conversations also constrain how many students and classrooms could be analyzed.

## Connected Concepts
- [[learning-analytics]]
- [[equity-in-ai-education]]
- [[sociocultural-learning]]
- [[llm]]
- [[student-ai-interaction]]
- [[multilingual-learning]]
- [[agency]]

## Connected Articles
- [[icap-cognitive-engagement-llm-agents]] — Measuring Cognitive Engagement in Collaborative Discourse
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Neuro-symbolic pedagogical alignment for classroom discourse analysis
- [[socratic-ai-physics-tutor-taxonomy-2026]] — A Bottom-Up Taxonomy of Student Discourse with a Socratic AI Physics Tutor
- [[scaffolding-critical-engagement-genai-minority-students]] — Scaffolding Critical Engagement with GenAI
- [[ai-team-teaching-talk-analytics]] — AI-Driven Analytics of Team-Teaching Talk

## Citation

Santos-Deonizio, Malamut, Martínez, & Demszky (2026). [*When Youth Enter The Chat: An Epistemic Shift in the Validation of LLM-Based Measures of Student Talk*](https://arxiv.org/abs/2608.23780).
