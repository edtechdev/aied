---
title: Vibe Coding
created: "2026-09-08T01:30:00-04:00"
updated: "2026-09-08T01:30:00-04:00"
type: concept
tags: [generative-ai, llm, prompt-engineering, cs-education, computational-thinking, ai-literacy, writing-education, human-ai-collaboration, agentic-ai, teacher-role]
audience: [instructors, curriculum designers, researchers, software developers]
level: [higher ed, k 12]
confidence: high
---

> **Vibe coding** — building software by iteratively prompting a large language model and judging the resulting behavior, without directly reading or editing the underlying source code. Popularized by Andrej Karpathy in 2025 as the workflow where one "forgets the code even exists," vibe coding is the LLM-native realization of an older ambition, natural-language programming, and functions as a form of [[agentic-ai|end-user development]] in which prose becomes the primary programming interface.

## Questions to Consider

- Karpathy's original framing said you should "forget the code even exists." Before you read further, ask yourself: is not seeing the code a feature (it lowers barriers) or a risk (you cannot verify or fix what you cannot see)? What does the answer imply for who should be allowed to vibe-code?
- Research on who succeeds at vibe coding found that traditional [[cs-education|computer-science achievement]] still predicts success even when the user never touches code. If that surprises you, what hidden skill might CS training be building that prose alone does not capture?
- The same study found writing skill predicts vibe-coding performance largely *because* it produces higher-quality prompts. If prompting is really the bottleneck, is the right fix to [[prompt-engineering|teach people to prompt better]] — or to redesign tools so they demand less prose skill?
- Vibe coding is often celebrated as making "anyone" a developer. But if writing skill and CS knowledge both shape outcomes, does vibe coding widen access to building software or merely relocate the skill barrier from code to prose?
- Some developers distinguish "pure" vibe coding (never reading code) from AI-assisted coding where you review and edit what the model wrote. Where do you think genuine learning — versus [[cognitive-offloading|over-reliance]] — is more likely to happen, and why?

## Introduction

Vibe coding describes an interaction style enabled by LLM-integrated development platforms (Replit, Lovable, Cursor, and others): the user specifies a program in natural language, the model generates a working system, and the user iterates based on observed behavior rather than by editing source. The term was coined by OpenAI co-founder Andrej Karpathy in February 2025 to capture the experience of relying on the model to such an extent that "the code" fades from awareness. Vibe coding sits at the convergence of several strands this knowledge base already tracks — it is [[generative-ai|generative AI]] applied to [[cs-education|programming]], an extreme form of [[prompt-engineering|prompt-driven]] work, a concrete instance of [[human-ai-collaboration]], and the clearest route yet to [[teacher-role|non-programmers]] and end users building their own software (end-user development).

It also has deep roots. The idea of programming in ordinary language long predates LLMs — from COBOL's aspiration to be "an English-language programming system for non-professional programmers," through Donald Knuth's literate programming, to research on natural-language programming with constrained subsets of English. Only with LLMs did it become feasible to map genuinely conversational, underspecified instructions to runnable code. Vibe coding is the particular variant in which the user deliberately does not inspect or edit the generated source, relying entirely on iterative prompting and behavioral evaluation.

### Defining the construct: "pure" vs. code-visible vibe coding

The definition of vibe coding is still in flux. Some use the term broadly to mean any AI-guided programming; others insist it refers strictly to "building software with an LLM without reviewing the code it writes." Google Cloud distinguishes a "pure" no-code version (consistent with Karpathy's definition) from a version where the user understands and refines the generated code. This distinction matters for [[research-methods-aied|research]]: a controlled study of vibe-coding proficiency requires a well-defined construct. The CHI 2026 study of predictors of vibe-coding proficiency deliberately targeted the "pure," no-code variant — participants could not view or edit the generated source, so measured performance reflected the ability to specify, refine, and debug behavior through prose and observed output alone (see [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson et al.]]).

### Who succeeds at vibe coding: evidence

A preregistered cross-sectional study (N = 100 tertiary students) provides the first controlled, participant-level evidence on which skills predict vibe-coding success. Both [[writing-education|written-communication proficiency]] (r = .29) and computer-science achievement (r = .39) significantly predicted performance on expert-vetted, GUI-oriented vibe-coding tasks, with CS achievement remaining significant after controlling for domain-general cognitive skills (partial r = .281). In a joint model CS achievement contributed roughly twice the unique variance of writing skill, but both added independent predictive value. Critically, human-graded prompt quality mediated the writing→performance link, giving response-process evidence that clear prose operates by producing better prompts. Because the environment hid the source code, CS knowledge could only help indirectly (through problem decomposition, algorithmic thinking, and mental models of control flow) — so the authors argue their CS estimate is a *lower bound* for AI-assisted programming in which users may also edit code directly ([[vibe-coding-writing-cs-achievement-2026|Thorgeirsson et al., 2026]]).

### Vibe coding as end-user development and teacher tooling

A major promise of vibe coding is that it lets non-programmers — including [[teacher-role|teachers]] and domain experts — build their own software, an LLM-era form of end-user development. A [[gaide-vibe-coding-k12-teachers|GAIDE framework study]] showed K-12 teachers (non-programmers) using vibe coding in an eight-week workshop to create AI-powered learning tools, raising their [[ai-literacy|AI literacy]] and demonstrating "learning-by-creating" as a professional-development model. In higher education, an instructor rapidly built a [[vibe-coding-programming-process-visualizer|programming-process visualizer from IDE activity logs]] via vibe coding in a matter of days, making students' programming processes visible for teaching and [[academic-integrity]] review. These cases position vibe coding not merely as a learner skill but as an authoring capability that [[educational-development|reshapes who can create educational technology]].

### Learning, agency, and the risk of over-reliance

Vibe coding reopens core questions about what is learned when AI automates implementation. Because the user does not read code, they must trust the model's behavior — which makes vibe coding a high-stakes case of the tension between [[agency]] and [[cognitive-offloading|over-reliance]] that runs through AI-assisted programming. Curricula are responding by shifting from teaching implementation toward teaching how to direct, verify, and audit AI-generated artifacts (see [[reshaping-cs-education-genai|reshaping undergraduate CS]] and [[agentic-ai|agentic software engineering]]). Vibe coding also changes the learner's epistemic position: success depends less on writing code than on expressing intent precisely and evaluating behavior against goals, competencies closer to [[computational-thinking|computational thinking]] and structured writing than to traditional syntax mastery.

### Connections to related concepts

Vibe coding connects naturally to [[prompt-engineering]] (prompt quality is the mechanism of prose-driven development), [[cs-education]] (as the domain where the technique is most used and most contested), [[computational-thinking]] (the mental modeling that predicts success even without code access), [[writing-education]] (writing becoming a programming skill), and [[agentic-ai]] (directing a model toward an artifact rather than hand-building it). It also intersects with [[ai-literacy]] and [[teacher-role]], since the ability to build one's own tools changes what teachers and learners can do. Finally, it raises [[academic-integrity]] and assessment questions identical to those AI code generation raises across computing education.

## Connected Concepts

- [[generative-ai]]
- [[llm]]
- [[prompt-engineering]]
- [[cs-education]]
- [[computational-thinking]]
- [[writing-education]]
- [[agentic-ai]]
- [[human-ai-collaboration]]
- [[ai-literacy]]
- [[teacher-role]]
- [[cognitive-offloading]]

## Connected Articles

- [[vibe-coding-writing-cs-achievement-2026]] — Computer Science Achievement and Writing Skills Predict Vibe Coding Proficiency (CHI 2026 empirical study)
- [[gaide-vibe-coding-k12-teachers]] — A Guiding Framework for K-12 Teachers in Creating AI-powered Learning Technologies through Vibe Coding
- [[vibe-coding-programming-process-visualizer]] — From Idea to Classroom in Days: Using "Vibe Coding" to Create a Programming Process Visualizer from IDE Activity Logs
- [[prompt-problems-nl-programming-mistakes]] — Understanding Student Perceptions, Mistakes, and Debugging Approaches when Solving Natural Language Programming Tasks
- [[code-to-learn-genai-artifact-construction-2026]] — Code to Learn with Generative AI: A Theoretically Grounded Framework for Artifact Construction in Upper-Secondary Education
- [[reshaping-cs-education-genai]] — Reshaping Undergraduate CS Education for Generative AI
- [[flowcode-ai-creative-coding]] — Flowcode: An AI-Powered Programming Environment for Scaffolding Iteration in Creative Computing Education
