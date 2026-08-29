---
title: "Code to Learn with Generative AI: A Theoretically Grounded Framework for Artifact Construction in Upper-Secondary Education"
created: "2026-08-24T05:36:00-04:00"
updated: "2026-08-24T05:36:00-04:00"
type: article
tags: [generative-ai, learning-theories, computational-thinking, self-regulated-learning, k-12, cs-education]
research_method: [theoretical analysis]
discipline: [cs education]
level: [k 12]
sources: ['raw/papers/code-to-learn-genai-artifact-construction-2026.md']
confidence: medium
---

> **Synthesis.** Gousopoulos (2026) proposes Code-to-Learn with Generative AI (CtL-GenAI), a conceptual framework for upper-secondary students aged roughly 15 to 18 who build software with AI to learn a domain (physics, environmental science) rather than to learn programming itself. It deliberately synthesises [[constructivist|constructionism]], cognitive load theory, [[self-regulated-learning|self-regulated learning]], the ICAP model of cognitive engagement, and sociocultural [[scaffolding]]. Its organising claim is that *the AI writes the code, but the student writes the model* — the student retains authorship of the specification, the conceptual structure, verification against the world, and interpretation of results, while delegating only syntax and boilerplate. This is operationalised as six design principles and a five-phase instructional cycle (Frame, Specify, Co-construct, Validate, Reflect and Share), with an ICAP-based diagnostic for classifying student–AI interaction.

## Key Findings

1. Existing policy, [[ai-education|AI-literacy]], and computing-education frameworks tell schools *how much* AI to allow, *what* to know about AI, or *how* AI affects learning to program — but none tells a science or technology teacher how to design a single task in which a student builds software with AI and learns the domain. CtL-GenAI occupies that gap.
2. Five theories converge on one mechanism: constructionism justifies why building matters, cognitive load theory specifies which parts are safe to delegate (incidental/syntax) and which must be protected (germane), [[self-regulated-learning|self-regulated learning]] and ICAP explain how to keep the learner cognitively active, and [[scaffolding]] explains why AI support must fade over time.
3. The framework yields six design principles — Problem or Concept First, Student as Specifier, Glass-Box Prompting, Verify Against the World, Productive Friction, and Scaffold Fading and Reflection — enacted through a five-phase cycle where Specify and Validate carry most of the conceptual (germane) load.
4. When the AI can produce the artifact, the artifact cannot be the assessment: evaluation relocates to the specification, the validation reasoning, and the reflection — evidence of the student's model rather than the product — which also defuses academic-integrity anxiety.

## The Framing Problem: From Prohibiting AI to Designing With It

The paper opens by rejecting the dominant question — whether students may use AI in school — in favour of a design question: how a lesson can be arranged so that building something with AI leaves the student knowing more physics, or more about a local problem, than before. This framing is motivated by field evidence that unguarded AI access raises short-term performance but leaves learners worse off once the tool is withdrawn (the "crutch effect" of Bastani et al., 2025), alongside studies of novice programmers showing faster completion but signs of over-reliance and weaker transfer without the tool. The author's argument is that AI neither inherently helps nor harms learning; whether it helps depends almost entirely on how the activity around it is designed — and this is true for [[k-12|K–12]] students learning a subject through [[generative-ai|GenAI]]-assisted construction, a group distinct from the computer-science students on whom the "vibe coding" literature has concentrated.

## Theoretical Foundations

The framework grounds each design decision in a specific theory rather than citing theories decoratively:

- **[[constructivist|Constructionism]]** answers why students build code at all: understanding is constructed most robustly when learners make something public and personally meaningful (Papert, 1980). GenAI changes the economics of construction by lowering the entry cost, but the artifact teaches only to the extent the learner retains authorship of the underlying model.
- **Cognitive load theory** distinguishes intrinsic, extraneous, and germane load, yielding a sorting rule — *delegate the incidental, protect the germane*. Offloading syntax frees working memory, but offloading the processing that constitutes learning is corrosive.
- **[[self-regulated-learning|Self-regulated learning]]** frames prompting, judging output adequacy, and revising as acts of forethought, monitoring, and reflection — making AI-assisted tasks a natural site for self-regulation, but only if metacognitive support is designed in.
- **The ICAP framework** provides a precise vocabulary to rank cognitive engagement from passive (copying output) through active and constructive to interactive (critiquing, generating alternatives, arguing with the model), with observable indicators teachers can use in the moment.
- **[[scaffolding]] and the zone of proximal development** frame the AI as a more-capable partner whose help is calibrated and, crucially, withdrawn — the theoretical answer to the crutch effect, treating fading as a design requirement rather than an afterthought.

## The CtL-GenAI Framework

The framework has three layers: the theoretical synthesis and its central mechanism; six design principles; and a five-phase instructional cycle. The organising mechanism is a functional division of labour — the AI may generate syntax, boilerplate, and translate a specification into a running program, while the student must own four things: state the specification in their own terms, hold the conceptual model (equations, rules, causal story), verify the artifact against domain knowledge, and interpret the result.

**Six design principles:**

1. **Problem or Concept First** — every artifact serves a prior real problem or curricular concept; "build an app" is never the task. This draws on constructionism and [[project-based-learning|problem-based learning]].
2. **Student as Specifier** — the student articulates the logic in natural language (equations, rules, a labelled plan) before any code is requested, externalising the mental model so the germane work happens in the student.
3. **Glass-Box Prompting** — prompts require explanation, not only code, drawing on the [[self-regulated-learning|self-explanation]] effect to resist the passivity ICAP warns against.
4. **Verify Against the World** — the artifact is judged by domain criteria (does the body accelerate as Newton's second law predicts?), not by whether it runs, recruiting the monitoring phase of self-regulation.
5. **Productive Friction** — the design deliberately withholds AI at reserved moments (predict before you run, change a parameter by hand), using desirable difficulties that improve retention and lift engagement from passive toward constructive. Prediction is especially valuable in physics, where intuitive heuristics override prior knowledge.
6. **Scaffold Fading and Reflection** — AI support is reduced across a unit and each cycle closes with structured reflection (what did I do, what did the AI do, what do I now understand?).

**The five-phase instructional cycle** — Frame, Specify, Co-construct, Validate, Reflect and Share — is iterative rather than strictly linear; validation routinely sends a class back to re-specify. Specify and Validate are the germane phases where AI is withheld; Co-construct is where the AI absorbs extraneous load while the student steers. Two worked scenarios (an environmental monitoring application in the problem-solving strand, and a simulation of Newton's laws in the concept-learning strand) show how the framework discriminates productive from unproductive AI use.

## Implications

The framework reassigns the teacher from syntax instructor to designer of specification and validation, a more demanding but more rewarding role that aligns with cognitive-apprenticeship accounts and the [[feedback]] literature. For assessment, since the AI can produce the artifact, evaluation relocates to the specification documents, predict-then-test records, oral defences, and process portfolios — precisely what the AI cannot supply. Boundary conditions are named explicitly: reliable access to tools is assumed (uneven access can widen equity gaps), the design targets ages 15–18 who can meet the self-regulatory demands of Specify and Validate, hallucinated code is caught only if students have enough domain knowledge to detect error, and the framework asks more of teachers, so without professional learning it risks degenerating into the unguided AI use shown to harm learning. The paper closes with four testable propositions (specify-first transfer, productive-friction conceptual gains, ICAP engagement predicting gains, and scaffold fading reducing post-removal performance drops) intended to seed empirical work.

## Citation

Gousopoulos, D. (2026). [*Code to Learn with Generative AI: A Theoretically Grounded Framework for Artifact Construction in Upper-Secondary Education*](https://doi.org/10.20944/preprints202606.1139.v1). Preprints.org. Preprint, not peer-reviewed.

## Connected Concepts

- [[constructivist]] — constructionism as the framework's foundation
- [[self-regulated-learning]] — self-regulation in AI-assisted construction
- [[icap-framework]] — engagement taxonomy ranking student–AI interaction
- [[computational-thinking]] — thinking through model construction
- [[scaffolding]] — fading AI support
- [[generative-ai]] — the tool enabling artifact construction
- [[cognitive-offloading]] — the over-reliance risk the framework counters
- [[k-12]] — upper-secondary context
- [[cs-education]] — computing-education context
- [[curriculum-design]] — designing AI-infused lessons
- [[assessment]] — relocating evaluation to process, not artifact

## Connected Articles

- [[ai-writes-code-student-writes-model-2026]] — Theory + measurement programme for model authorship with GenAI
- [[competency-based-education-genai-production-2026]] — Production as a competency in the GenAI era
