---
title: "Science Literacy: Generative AI as Enabler of Coherence in the Teaching, Learning, and Assessment of Scientific Knowledge and Reasoning"
created: "2026-10-23T22:41:00-04:00"
updated: "2026-10-23T22:41:00-04:00"
type: article
foundations: [human-ai-collaboration]
pedagogy: [inquiry-based-learning, scaffolding]
technology: [generative-ai, llm]
assessment: [formative-assessment, authentic-assessment, assessment-validity]
ethics: [culturally-relevant-pedagogy, privacy, bias-mitigation, ethics]
research_method: [theoretical analysis]
discipline: [science education]
level: [k 12, higher ed]
audience: [instructors, curriculum designers, assessment designers, researchers]
page_kind: [framework]
sources: ['raw/papers/zhai-science-literacy-generative-ai-coherence-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Zhai, Pellegrino, Rojas, Park, Nyaaba, Cohn, and Biswas (2026) argue that [[generative-ai|generative AI]]'s contribution to [[science-education|science education]] depends less on model capability than on whether it can make curriculum, instruction and assessment coherent with one another, and they propose a [[human-in-the-loop-ai|human-in-the-loop]] architecture for doing so. The chapter first redefines science literacy for a world in which AI participates in scientific work: Vision I for competence in science careers, Vision II for science in everyday and civic life, and Vision III for knowledge and action at community and societal levels, with the Framework and Next Generation Science Standards read as a balance of the first two. Its central claim is that the discipline's familiar failures, tests that reward recall of terminology, [[assessment-validity|assessments]] that do not measure what the [[curriculum-design|curriculum]] asks teachers to teach, are failures of coherence rather than of effort, and that AI can supply the connective tissue only under three principles: human oversight and agency, co-adaptive intelligence, and contextual responsiveness. They formalize that as four interlocking layers, data infrastructure, model development, pedagogical interface and human governance, and illustrate each with prototypes already running: a [[culturally-relevant-pedagogy|culturally responsive]] lesson planner that interviews teachers rather than answering them, a scorer for a [[chemistry-education|chemistry]] performance task, and analytics that segment student inquiry. The chapter's value is a specification of what a coherent system would have to be, delivered with the admission that almost none of it has yet been validated at scale.

## Key Findings

- **Coherence is named as the problem, not capability.** The chapter faults science education for curriculum, instruction and assessment that pull in different directions, and treats AI as valuable only insofar as it aligns them; a stronger model applied to an incoherent system reproduces the incoherence faster.
- **Three visions of science literacy organize the goal.** Vision I covers what science careers require, Vision II what everyday life and society require, and Vision III what communities and societies need collectively. The Framework and NGSS documents sit between the first two, while the third, which the chapter ties to democracy, civic engagement and issues such as vaccination and climate, is the least served by current standards and assessments.
- **Science literacy can be aggregated.** Following a 2016 National Research Council report, the chapter distinguishes literacy at the individual, community and societal levels, where community and societal literacy are distributed across people and depend on collective agency rather than on any one person's knowledge.
- **Three principles govern any defensible framework.** Human oversight and agency keeps interpretation and [[ethics|ethical]] judgment with people; co-adaptive intelligence expects humans and tools to refine each other through feedback loops; contextual responsiveness makes the system answer to disciplinary norms, learner diversity and local phenomena.
- **Four architectural layers do the design work.** Data infrastructure covers sourcing and stewardship, including data justice, consent and alignment of the data with the actual logic of scientific inquiry; model development covers what is built and validated; the pedagogical interface covers how teachers and students meet the system; and [[governance|human governance]] covers who decides.
- **Each pathway, teaching, learning and assessment, has a working prototype.** The culturally responsive lesson planner with an interactive semi-automated prompt architecture makes teachers answer targeted questions about context and culture before it drafts; the AI-Scorer for a Gas Filled Balloons chemistry task scores five three-dimensional performance expectations and returns four teacher-facing dashboard views; inquiry analytics segment student activity for reflection.
- **The chapter is explicit about what is missing.** Long-term effects on epistemic agency, whether learners develop appropriate skepticism toward computational output, and whether AI-supported inquiry helps or hinders students by language, culture or cognitive profile are named as open questions rather than settled ones.

## The coherence argument

The chapter's diagnosis runs through the standards: a science education that asks students to explain phenomena and design investigations, assessed by tests that reward recall of facts and terminology, teaches everyone involved which of the two is real. That gap is not a failure of individual teachers, and the chapter's point is that AI makes it newly repairable, because the same system that generates a lesson can generate the performance task that matches it and the scoring that reads the task, provided a human stays in the loop at each step.

The coherence claim has teeth because the layers are interdependent. Data that encodes authentic inquiry lets a model recognize an explanation rather than a keyword; a model that recognizes explanations lets an interface show a teacher where reasoning broke; and a governance layer that assigns responsibility is what keeps any of this accountable. Skip a layer and the system degrades to a faster version of the misalignment it was meant to fix.

## The framework in practice

The three prototypes are the chapter's evidence that the architecture is buildable, and they differ in what they automate. In the lesson planner, the AI's first move is interrogation: it asks the teacher about content, students' cultural assets and classroom context, then drafts from those answers, which turns [[scaffolding]] of the teacher's design judgment into the product rather than the by-product. In the scorer, AI handles the fine-grained analysis of a hands-on task and a teacher decides what to do with the result, guarding the judgment step explicitly. The inquiry [[learning-analytics|analytics]] are the least formed of the three and the most dependent on the human loop, since segmenting behavior only helps if the teacher can interpret the segments.

## What this means for practice

- **Curriculum designers.** Write the assessment and the instruction together; the chapter's argument is that AI will make an existing misalignment visible and fast, not that it will supply the alignment by itself.
- **Assessment designers.** Prefer tasks where the AI's output can be checked against a rubric a human authored, and keep the interpretive step with the teacher, as the scorer does when it hands over dashboards instead of grades.
- **Instructors.** Treat a generated lesson as a first draft that a dialogue with the tool can improve, since the planner works by asking questions rather than by producing a finished artifact.
- **Institutions and governance leads.** The fourth layer is the one with the least technical apparatus and the most consequence: consent, data stewardship, and who may act on an AI judgment are decisions, not settings.

## Limitations

- This is a conceptual chapter, so the framework's three principles and four layers are argued rather than tested; nothing here is a trial of the architecture against an alternative.
- The prototypes it cites are demonstrations built by the chapter's own authors or close collaborators, described from the design side with no independent evaluation of their effect on students' science literacy.
- The coherence claim assumes curriculum, instruction and assessment can be aligned in the first place, which the chapter asserts more than demonstrates for systems outside the NGSS-style framework it discusses.
- Its scope is K-16+ science education, and the authors themselves name the generalizability to other disciplines as future work rather than a finding.

## Citation

Zhai, X., Pellegrino, J. W., Rojas, M., Park, J., Nyaaba, M., Cohn, C., & Biswas, G. (2026). [*Science Literacy: Generative AI as Enabler of Coherence in the Teaching, Learning, and Assessment of Scientific Knowledge and Reasoning*](https://arxiv.org/abs/2603.06659) [Preprint]. In *The Handbook of Generative AI in Education: Implications for Research and Practice* (in press).
