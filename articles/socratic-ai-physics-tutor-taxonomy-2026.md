---
title: "A Bottom-Up Taxonomy of Student Discourse with a Socratic AI Physics Tutor"
created: "2026-08-10T09:10:02-04:00"
updated: "2026-09-19T10:56:42-04:00"
type: article
foundations: [ai-education]
pedagogy: [socratic-method]
technology: [intelligent-tutoring, llm]
research_method: [learning analytics, qualitative]
discipline: [physics education]
level: [higher ed]

sources: ['raw/papers/2608.07373.md']
confidence: high
audience: [researchers, instructional designers]
page_kind: [framework]
---

> **Synthesis:** [[llm|Large language model (LLM)]] tutors are being deployed in introductory [[physics-education|physics]] courses at a scale that produces transcript corpora far larger than traditional [[qualitative-research|qualitative coding]] can absorb. This study builds a bottom-up taxonomy of student discourse from a Socratic [[intelligent-tutoring|AI physics tutor]] deployed in introductory calculus-based mechanics. Each student turn was assigned an emergent label by an LLM coder, then consolidated into 357 categories. The top 25 categories cover roughly half of all student turns, with equation-handling and meta-procedural requests dominating. A central finding is the striking prevalence of meta-procedural turns in which students cede strategic control to the tutor — students repeatedly ask the tutor what to do next, and a tutor explicitly designed around the [[socratic-method]] ends up fielding "next step guidance" as its second-most-requested service.

## Key Findings

1. Student discourse concentrates sharply: across 221 independent sessions and 2,874 student turns, the top 25 of 357 consolidated categories cover roughly half of all turns, and categories with five or more messages account for 86%, despite no prescribed dialogue path in the tutor's design.
2. The head of the distribution is dominated by two thematic bands — equation-handling and symbolic execution (Writing Energy Equation at 8.3%, Velocity Solving, Solving for Height, Substitution and Simplification) and meta-procedural requests (Next Step Guidance at 4.4%, Requesting Solution Help, Asking for Principles, Assumptions About Problem).
3. Meta-procedural turns are the most striking result: students cede strategic control to the tutor, and "Next Step Guidance" is the second-largest discourse category even though the tutor is explicitly designed to withhold direction in favor of [[scaffolding|Socratic scaffolding]].
4. The taxonomy is absent from the top-20 categories of explicit conceptual reasoning, prediction, comparison to similar problems, or critical [[student-engagement|engagement]] — a suggestive absence that may reflect the long tail rather than true absence.
5. The automated coding pipeline (emergent LLM labeling plus embedding-based consolidation) was validated against a human-coded sample with Cohen's κ = 0.78, supporting the [[trust|trustworthiness]] of machine coding.

## Background: scaling PER to thousands of AI-mediated sessions

[[generative-ai|Large language model]] tutors have moved from thought experiment to deployment: recent [[rct|randomized trials]] find AI tutors producing [[learning-gains|learning gains]] that exceed in-class [[active-learning]], and [[conversational-ai|chatbots]] are being studied in authentic introductory courses. As these systems scale from pilots to course-wide rollouts, they generate transcript corpora that dwarf what hand-coded qualitative analysis can absorb — a single semester of a single course routinely produces tens of thousands of student turns.

Physics education research (PER) has a mature theoretical vocabulary for [[problem-solving|problem solving]] and discourse, built on [[learning-theories|expert/novice contrasts]], problem description schemas, symbolic forms, and epistemic games. But its empirical machinery was built for transcripts of dozens of students, not thousands of sessions. Before PER can evaluate whether AI tutors help students learn, a more basic question must be answered empirically: what do students actually say to an AI physics tutor, and how often?

## Method: a bottom-up coding pipeline

The study ran in an introductory calculus-based mechanics course for future engineers at a large U.S. midwestern public research university (1,508 students, Fall 2025). Students worked in [[collaborative-learning|groups of 3-5]] on a challenging recitation problem using an optional Socratic [[pedagogical-agent|AI tutor]] built with [[rag|retrieval-augmented generation]] over course materials. The system prompt instructed the model to use Socratic [[prompt-engineering|prompting]] and to scaffold conceptual setup before symbolic execution. The analyzed corpus comprises 5,513 total messages from 240 students, of which 2,874 are student turns.

### Emergent LLM discourse coding

Rather than coding against a predefined codebook, the [[research-methods-aied|researchers]] asked an LLM (GPT-5.4-mini) to read each turn and produce its own short free-text label — the LLM analog of open coding in grounded theory, letting categories emerge rather than be projected. To stabilize ambiguous single-message turns, the prompt supplied the previous four conversational turns as context. This produced 833 unique raw labels.

### Embedding-based label consolidation

The raw labels were converted to text embeddings and grouped via agglomerative clustering (average linkage, cosine distance threshold 0.40), with each resulting cluster assigned a canonical name by a second LLM call. This yielded 357 consolidated discourse categories, the top 25 covering roughly half of all messages.

### Reliability against expert coding

Following prior work on the [[trust|trustworthiness]] of machine coding, the LLM labels were validated against a human expert on a stratified random sample of 287 messages (10% of the corpus), yielding Cohen's κ = 0.78 (84% raw agreement) — substantial agreement consistent with recent PER human–machine coding studies.

## Findings: equation-handling and symbolic execution

The single largest band in the top 20 is equation-handling and symbolic execution: Writing Energy Equation, Velocity Solving, Solving for Height, Computing Heights, Centripetal Relation Setup, Substitution and Simplification, and Algebra Problem Solving together account for roughly a third of all student turns in the top 20. This is consistent with the account of equations as the central site of meaning-making in introductory mechanics and with symbolic-manipulation patterns in epistemic games. The category structure suggests symbolic work occupies the foreground in the dialogue students actually produce.

## Findings: meta-procedural requests

A second large band consists of turns in which the student does not advance the problem themselves but instead asks the tutor what to do — Next Step Guidance (the second-largest category overall), Requesting Solution Help, Asking for Principles, and Assumptions About Problem. Read in terms of epistemological framing, students appear to frame the activity as one in which the tutor is expected to direct the procedural flow and their role is to execute supplied steps. Whether this is a failure of the [[socratic-method|Socratic design]] to cue the intended frame, or a stable equilibrium students settle into, the taxonomy alone cannot resolve — but it makes the phenomenon visible and quantifiable.

## What this means for practice

- **Designers.** Add prompts that make the student name the next step before the tutor responds, since "Next Step Guidance" was the second-largest discourse category (4.4% of student turns) in a tutor built specifically to withhold direction.
- **Designers.** Design around the head of the distribution rather than the whole long tail — the top 25 of 357 categories covered roughly half of all student turns — and treat the remaining moves as something to monitor rather than to cover.
- **Researchers.** Reuse the validated pipeline (emergent LLM labeling plus embedding-based consolidation, validated at κ = 0.78 against 287 human-coded messages) to monitor discourse at course scale instead of hand-coding transcripts.
- **Researchers.** Run targeted long-tail analysis before concluding students do not reason conceptually: explicit conceptual reasoning, prediction, and comparison to similar problems were absent from the top 20 categories even though categories with five or more messages still accounted for 86% of turns.

## Limitations

- Single site, single course, single tutor: the analysis rests on 2,874 student turns from 240 students across 221 sessions in one introductory calculus-based mechanics course at a large U.S. midwestern public research university (Fall 2025) and largely around one recitation problem, so the category labels will not transfer to other content domains.
- The design is observational, with no comparison condition, and licenses no causal claim about the [[socratic-method|Socratic design]]; natural next steps are positional analysis of where categories occur within sessions and cross-tabulation against student outcomes.
- Reliability rests on a 10% expert-coded sample (287 messages, Cohen's κ = 0.78) and a single-rater coherence audit rather than a full multi-coder agreement study.
- The consolidated 357-category codebook is a snapshot of one embedding model's groupings under a fixed clustering threshold (cosine distance 0.40), so a different model or threshold would regroup the categories.

## Connected Concepts
- [[intelligent-tutoring]]
- [[socratic-method]]
- [[physics-education]]
- [[educational-nlp]]
- [[student-experience]]

## Connected Articles

- [[hashmi-socratic-physics-chatbot-2025]]
- [[becker-chatgpt-typology-physics-2026]]
- [[fouad-bentley-trust-utility-gap-physics-2026]]

## Citation

Hashmi, S. F. A., & Rebello, N. S. (2026). [*A Bottom-Up Taxonomy of Student Discourse with a Socratic AI Physics Tutor*](https://arxiv.org/abs/2608.07373).
