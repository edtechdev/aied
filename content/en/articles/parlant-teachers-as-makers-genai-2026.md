---
title: "Teachers as Makers: Generative AI, Pedagogical Artefacts and Multiple Routes into Higher Education"
created: "2026-11-27T09:13:21-05:00"
updated: "2026-11-27T09:45:00-05:00"
published: "2026-11-24"
type: article
authors: ["François Parlant"]
venue: "EdArXiv preprint"
evidence_context: educational
foundations: [human-ai-collaboration, design-thinking]
pedagogy: [constructivist, creativity, experiential-learning, productive-failure]
technology: [generative-ai, vibe-coding, visualization]
level: [higher ed]
discipline: [humanities education, legal education]
audience: [instructors, curriculum designers, software developers]
page_kind: [commentary]
research_method: [position paper, theoretical analysis]
sources: ["raw/papers/parlant-teachers-as-makers-genai-2026.md"]
confidence: low
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation]
---

> **Synthesis:** Parlant (2026) argues that the debate about [[generative-ai]] in [[higher-ed|higher education]] has confused three distinct uses: AI as a substitute for the student, AI as a production tool for the [[teacher-role|teacher]], and AI as a mode of work. The second and third, he argues, are the ones the debate overlooks. Generative AI collapses the cost of producing interactive [[pedagogy|pedagogical]] artifacts — [[visualization|visualizations]], models, [[simulation|simulations]], [[game-based-learning|games]] — so the route into understanding through manipulation and images stops being a privilege of well-resourced institutions. Working with the model also changes the register of collaboration: language becomes corrective and deictic ("no", "lighter", "not that") rather than descriptive, and cheap iteration lets tacit, felt [[evaluative-judgment|judgment]] steer a result without first passing through a verbal defense. The paper is a position piece built on five [[open-source|open-source]] artifacts and theory, not on measured learning outcomes.

## Key Findings
1. **The debate conflates three uses of AI.** Treating "AI writes the assignment" as the whole issue misses teacher production of artifacts and the mode of work those artifacts embody.
2. **Production costs collapse.** Interactive visualizations, models, simulations and games that once required substantial development become available to teachers without specialist engineering time.
3. **The working language changes.** AI-assisted design runs on corrective, deictic micro-language and cheap iteration rather than on prior verbal specification.
4. **The loop is intention, attempt, correction.** When each attempt is cheap, converging by successive rejection becomes rational, and underspecified feedback becomes a usable signal rather than a defect.
5. **The mode of work can become the mode of learning.** Artifacts built by iteration offer learners the same loop that Papert's microworlds offer — manipulation first, verbalization later.
6. **The artifacts teach their own reading.** Progressive reveal, step-by-step sequences, questions before answers and explicit verdicts are presented as the design response to the objection that visual literacy is itself unequally distributed.
7. **Prediction is the proof, not manipulation.** A student can manipulate by chance; predicting an outcome and then explaining it is offered as the assessment that anchors a made object in understanding.

## The five artifacts

The paper presents five static web applications built by the author with substantial AI assistance and published as open-source tools: perspective-grid, for comparing how viewpoints rank the same elements; capital-lab and contract-lab, for treating legal structures as manipulable systems; star-nav, a microworld for gravity; and strange-mind, for algebra through rotation. They cover philosophy, law, [[physics-education|physics]] and [[math-education|mathematics]], and they run in a browser without installation.

The cases are illustrations of the argument, not evidence for it. The author says plainly that learning outcomes have not been measured. What they demonstrate is the production claim: a teacher can build a small interactive environment for a specific conceptual difficulty without a development team. The design patterns that recur — progressive disclosure, a question before an answer, a verdict on each element — are the ones the paper says make an artifact readable rather than merely impressive.

## The strongest objection, and the answer

The obvious objection is that the barrier has moved rather than fallen. Reading a model, interpreting a diagram or understanding a simulation requires visual and modeling literacy, which is also learned and also unevenly distributed. The author accepts the objection for artifacts delivered without mediation, and answers it with artifacts that build mediation into their design: the artifact must teach its own reading, and teacher accompaniment remains essential.

A second version applies to students who build. If [[prompt-engineering|prompting]] becomes the new verbal filter, then making could reproduce the same gate it was meant to lower. The author's answer is partial: the language involved is corrective rather than argumentative, it can be taught quickly, and in the main case the teacher, not the student, writes the prompts. For student-built artifacts he concedes that [[scaffolding]] must be designed.

## What this means for practice

- **Instructors.** Build or adapt one small artifact for a concept students consistently find hard, and test whether the manipulation actually reveals the structure you want them to see.
- **Curriculum designers.** Treat teacher-made simulations and visualizations as a legitimate route into a topic, not as remedial decoration. The paper's claim is about entry points, not about replacing reading and writing.
- **Software developers.** Design for corrective iteration: fast previews, visible state, and controls that let a teacher reject a result in one action rather than specify it in advance.
- **Faculty developers.** Pair artifact-making with [[assessment|assessment design]]. If students build, the assessment has to include prediction and explanation, or the object proves nothing.

## Limitations

- This is a position paper; its claims rest on theory and the author's own design practice, not on controlled data.
- No outcome data are reported for the artifacts' effects on learning, including for students with weaker command of the logico-verbal register.
- The author built the tools discussed, so the account of AI-assisted work is reflexive and may not generalize to other designers or domains.
- The cases cover philosophy, law, physics and mathematics; disciplines whose core content is itself textual may differ.
- The [[equity-in-ai-education|equity]] objection is addressed by design argument rather than by evidence that mediated artifacts reach the students they are meant to include.

## Citation

Parlant, F. (2026). [*Teachers as Makers: Generative AI, Pedagogical Artefacts and Multiple Routes into Higher Education*](https://doi.org/10.35542/osf.io/tcdhp_v1). EdArXiv preprint.
