---
title: "Beyond Display: From Dynamic Representation to Generative Representational Activity with Large Language Models"
created: "2026-09-28T09:20:00-04:00"
updated: "2026-09-28T09:20:00-04:00"
type: article
sources: ['raw/papers/beyond-display-generative-representational-activity-2026.md']
confidence: medium
published: "2026"
page_kind: [framework]
research_method: [theoretical analysis]
discipline: [math education]
level: [k 12, higher ed]
audience: [instructors, researchers, curriculum designers]
pedagogy: [problem-solving]
technology: [llm, visualization, conversational-ai]
foundations: [ai-education, computational-thinking]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-28"
    agent: hermes-agent
---

> **Synthesis:** Adu-Gyamfi asks what, if anything, [[llm|large language models]] add to the history of computational [[math-education|mathematical representation]], and answers with a distinction rather than a new stage. Dynamicity concerns how representational states change and how mathematical relations are maintained across those changes; generativity concerns how states can be specified and computationally instantiated. Treating generativity as a sixth stage of dynamicity therefore conflates two axes. The paper names the configuration that is genuinely new *generative representational activity*: comparatively open discourse specifies mathematical objects, relations, constraints or representational operations, a computational system instantiates a candidate external representation, and that representation remains available for recursive re-specification through later discourse. Its sharpest consequence is evidentiary — a correct-looking product establishes neither that the requested relation was realized nor that the learner coordinated it.

## Key Findings
- **Generativity is not a sixth stage of dynamicity.** Dynamicity describes how representational states change and how relations are computationally maintained across those changes; generativity describes how states can be specified and instantiated, so the two answer different questions.
- **Neither component is historically new.** Calculators, graphing systems, computer algebra, spreadsheets and microworlds already generated representational states, and natural-language mathematical input and free-form computational systems predate contemporary language models.
- **The definition has three necessary parts.** Open discourse must specify mathematically consequential properties or operations, a system must instantiate a candidate representation, and the representation must remain addressable as an object of subsequent discussion.
- **Discursive specification is not [[prompt-engineering|prompt engineering]].** What counts is whether the discourse articulates the object represented, the relation maintained, what may vary, what must stay invariant, or which conversion is requested.
- **Four moments must be separated.** Specification, computational execution, mathematical coordination and warrant identify different accomplishments; asking a model to convert a graph to an equation and receiving the right equation establishes execution, not coordination.
- **Generation does not entail representational fidelity.** In dynamic geometry an invariant can be preserved because its dependency is explicitly constructed, whereas in generative activity a linguistic request to preserve a relation is not itself a constraint-preserving mechanism.
- **A research program, not a verdict.** The paper sets four problems — separating computational translation from representational coordination, generated representational ensembles, meta-representational activity, and mixed computational ecologies — and requires studies to record the division of representational work.

## Method and Evidence
This is a theoretical analysis. The author builds a historical comparison across graphing systems, dynamic geometry environments, microworlds, earlier natural-language [[intelligent-tutoring|tutors]] and Wolfram|Alpha, arguing that each countercase already supplied either computational generation or natural-language input but not the combination with recursive re-specification. The argument draws on representation theory and on Moreno-Armella, Hegedus and Kaput's account of the movement from static to dynamic mathematics, using Ainsworth's account of multiple representations to frame the coordination problem. One illustrative episode is analyzed, in which learners iterated prompts until a conversational system produced a three-dimensional representation while some structural features remained unresolved; the author reads it as showing that recursive re-specification is observable without assuming any single representation was mathematically adequate. No experimental design, sample or outcome measure is reported.

## Why the distinction changes what counts as evidence
The paper's central claim is about evidence rather than about error. Where generative assistance is available, a correct final product cannot show whether the learner specified the relation, the system inferred or executed it, the learner coordinated it, or the relation was independently warranted. That matters because natural-language mathematical specification is often underdetermined: expressions such as "same shape," "grows faster" or "keep the rate" can refer to different formal relations depending on context, and the system must resolve the ambiguity when producing a candidate. Generative activity therefore does not displace formalization; it creates an additional site at which the movement from informal specification to precise condition can be examined. For representational competence, the consequence is that students might complete graph-to-equation or table-to-graph tasks successfully with generative assistance while showing little change in unaided [[transfer-of-learning|translation]], which is why the author wants designs able to distinguish target production from explanation of source-target relations.

## What this means for practice
- **Instructors.** Ask students to say which moment of the work they performed rather than judging the product: have them state the relation they requested, the invariants they intended, and the grounds on which they accepted the representation the system produced.
- **Assessment designers.** Treat a correct-looking generated representation as insufficient evidence of [[problem-solving|representational competence]] and require the coordination step to be made visible, for example by comparing an unassisted translation with a generated one.
- **Curriculum designers.** Treat informal specification as a teachable object: the gap between "make it steeper" and a precise condition on slope is where formalization work now happens, so it belongs in tasks rather than in the prompt.
- **Educational technology developers.** Do not present a generated representation as an authority on the relation it was asked to preserve; the paper's point is that a linguistic request is not a constraint-preserving mechanism, so fidelity has to be established by inspection.

## Limitations
- The paper is a theoretical analysis and reports no experimental design, sample, or outcome measure, so its claim that generative environments may externalize a design-critique cycle is framed as a research problem rather than as a demonstrated effect.
- The single illustrative episode is used to show that recursive re-specification is observable, not that learners coordinated the relations involved; the author states that improvement in the generated product does not establish coordination.
- The historical countercases are conceptual comparisons rather than empirical tests, and the argument that graphing systems, dynamic geometry and earlier tutors each lacked one element rests on the author's reading of those literatures.
- The manuscript is posted as a preprint and has not been peer reviewed, and the four proposed research problems are stated without instruments, coding schemes or study designs, so the program is not yet operational.

## Citation
Adu-Gyamfi, K. (2026). [Beyond Display: From Dynamic Representation to Generative Representational Activity with Large Language Models](https://doi.org/10.21203/rs.3.rs-10706749/v1). Research Square (preprint).