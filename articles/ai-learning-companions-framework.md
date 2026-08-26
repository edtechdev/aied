---
title: Building AI Companions that Prioritise Learning over Performance
created: "2026-05-09T04:33:04-04:00"
updated: "2026-08-26T09:57:51-04:00"
type: article
tags: [llm, personalized-learning, adaptive-learning, metacognition, student-experience, self-regulated-learning, scaffolding]
sources: ['raw/papers/2605.04816.md']
confidence: high
---

> A design framework for LLM-powered educational agents that prioritize durable learning over short-term task performance. Introduced by Khosravi et al. (2026), AI learning companions are defined as adaptive, pedagogically informed agents integrated into learning environments — distinct from both task-oriented LLMs and simple prompted tutors. The framework rests on three interrelated foundations (pedagogical, adaptive, and responsible design) and argues that the LLMs now entering education were "built for work, not for learning," requiring a fundamental reconceptualisation rather than a tweak to prompting strategy.

# AI Learning Companions Framework

## Definition
A design framework for LLM-powered educational agents that prioritize durable learning over short-term task performance. Introduced by Khosravi et al. (2026), AI learning companions are defined as adaptive, pedagogically informed agents integrated into learning environments — distinct from both task-oriented LLMs and simple prompted tutors. The framework is built on three interrelated foundations: a pedagogical foundation (how students learn *with* AI), an adaptive foundation (how AI learns *about* students), and a responsible design foundation (transparency, accountability, inclusivity, security).

## Key Findings
1. LLMs expose a learning–performance paradox: they demonstrably improve short-term task outputs (writing quality, coding speed, analysis) while simultaneously undermining durable learning — including [[cognitive-offloading|cognitive growth]], [[transfer-of-learning|knowledge transfer]], and [[metacognition|metacognitive development]].
2. The LLMs entering education were "built for work, not for learning": their design logic (optimising output quality, minimising cognitive effort, treating each interaction as independent) is precisely what makes them unsuitable as learning tools without deliberate redesign.
3. The framework defines AI learning companions across three foundations — pedagogical (deep interactive learning, guided scaffolding, learning to learn, contextual learning), adaptive (a continuous Capture–Model–Adapt–Evolve cycle), and responsible design (security, transparency, accountability, inclusion) — and illustrates them through five case studies across diverse contexts, levels, and tool designs.
4. Prompt-based guardrails (e.g. study modes, Socratic prompting) can mitigate some negative effects of direct LLM use but are largely reactive, stateless, and task-scoped, making them unlikely to match the learning benefits historically associated with [[intelligent-tutoring|Intelligent Tutoring Systems (ITSs)]].
5. A necessary shift is required away from task-oriented LLMs toward deliberately developed companions that preserve [[productive-failure|productive struggle]], adapt to learners, and foster durable understanding, metacognitive growth, and learner agency.

## The Learning-Performance Paradox
LLMs demonstrably improve task outputs (writing quality, code correctness, analysis speed), but this can create a paradox: students who produce better work with AI may learn less. This mirrors and extends the [[llm-fallacy-misattribution]] phenomenon where users misattribute AI-assisted outputs to their own competence. The framework addresses the question posed by [[transfer-of-learning]]: do AI-assisted gains persist when the tool is removed?

The paradox arises from a well-documented mechanism: [[cognitive-offloading]]. When students rely on AI for sensemaking, planning, monitoring, and evaluation, they reduce engagement in the very processes that make [[self-regulated-learning]] effective — producing a form of "metacognitive laziness." The most compelling evidence comes from a large randomised experiment in high-school mathematics in which students given an AI assistant improved problem-solving during learning but suffered significant harm to durable, independent learning once the AI was removed. The same pattern appears in misconception correction: personalised AI dialogue produced larger immediate belief reductions than textbook refutation, but the conditions converged by the two-month follow-up, showing that engagement and confidence did not translate into durable learning advantage.

## AI for Work vs. AI for Learning
The paper formalises a nine-dimension contrast between AI designed for professional productivity and AI designed for learning. In work contexts, AI performs or co-performs the cognitive task, interactions are transactional and stateless, and success is measured by output quality and efficiency; errors are inefficiencies to be eliminated. In learning contexts, AI must instead scaffold and challenge the learner to produce their own understanding, interactions must be developmental and cumulative, and success is measured by retention, transfer, and metacognitive growth; errors are diagnostic signals. The key failure modes differ accordingly: AI for work fails when productivity gains mask skill atrophy, while AI for learning fails when task scores improve while knowledge retention declines. Design intent follows directly: AI for work minimises friction and provides direct answers, whereas AI for learning must deliberately withhold direct answers and preserve [[productive-failure|productive struggle]] as the mechanism through which durable understanding is built. This reorientation is grounded in [[distributed-cognition|augmentation and distributed cognition]] for work but [[constructivist|constructivism]] and [[self-regulated-learning]] for learning.

## Three Foundations

### The Pedagogical Foundation: Students Learn with AI
Drawing on the Higher Education Learning Framework (HELF), this foundation derives four principles for companion design. **Deep and interactive learning** exploits the [[desirable-difficulties|generation effect, testing effect, and desirable difficulties]] — what matters is not whether a companion presents information well but whether it makes the student do the thinking; companions should prompt generation and retrieval rather than provision, shifting across roles as tutor, peer, or novice. **Guided scaffolding** situates tasks in the Zone of Proximal Development, balancing challenge with support so that difficulty becomes "an engine of growth," while attuning to learners' [[affective-computing|emotional states]] (curiosity, anxiety, frustration) and reframing confusion as a learning opportunity. **Learning to learn and higher-order learning** cultivates [[metacognition|metacognitive awareness]] and [[critical-thinking|higher-order thinking]] (analysis, synthesis, evaluation, creation), notably through metacognitive calibration — comparing expressed confidence against actual performance — and teach-back strategies that connect to [[learning-by-teaching]]. **Contextual learning** situates knowledge in [[situated-learning|authentic contexts]], drawing on [[experiential-learning|Kolb's experiential learning cycle]] and threshold concepts, and scaffolds the development of disciplinary identity and belonging.

### The Adaptive Foundation: The AI Learns about the Student
This foundation resolves the statelessness of current LLM applications by organising adaptivity into a continuous four-stage cycle. **Capture** records learners' digital footprints, including rich, open-ended learner–AI dialogues and generative metadata that reveal epistemic frames and cognitive engagement (connecting to [[learning-analytics]] and [[multimodal|multimodal learning analytics]]). **Model** builds a multi-dimensional learner model from cognitive, affective, and behavioural data, combining LLM interpretation with established algorithms such as [[knowledge-tracing]], memory modelling, and engagement detection ([[student-modeling]]); it proposes hybrid architectures where LLMs handle content interpretation while probabilistic models handle longitudinal integration, and anticipates [[reinforcement-learning|Reinforcement Learning from Human Learning (RLHL)]]. **Adapt** harmonises personalised guidance with shared regulation, distinguishing the macro-level outer loop (task selection and sequencing) from the micro-level inner loop (step-by-step support), and — critically — shifting from adaptivity done *to* the learner toward adaptivity done *with* the learner as a co-regulator. **Evolve** closes the loop through design-loop adaptivity, treating instructional decisions as hypotheses to be tested via controlled experiments and multi-armed bandits, with [[simulating-students|simulated learners]] and generative AI as co-designers of new instructional strategies.

### The Responsible Design Foundation: AI Acts with Integrity
Because learning companions are highly personalised and embedded, their influence extends beyond technical optimisation. The framework organises responsible practice around four commitments: **security**, protecting learner privacy, data, and digital wellbeing through lawful data practices ([[privacy]]); **transparency**, making AI processes, reasoning, and data flows visible and explainable through [[student-modeling|Open Learner Models]] and learning analytics dashboards ([[trust]]); **accountability**, retaining meaningful human oversight and preserving learners' rights to question AI-supported decisions ([[governance]], [[human-in-the-loop-ai]]); and **inclusion**, ensuring companions are fair, accessible, and responsive to diverse learners, abilities, languages, and contexts ([[equity-in-ai-education]], [[inclusive-learning]], [[accessibility]]).

## Case Studies
The framework is validated across five diverse educational contexts, levels, and tool designs, revealing both the promise and current limitations of existing tools. The case studies span the pedagogical, adaptive, and responsible design foundations, showing how each principle translates into concrete companion behaviour and where current systems fall short. The framework calls for a deliberate shift from task-optimized LLMs toward companions that foster durable understanding, metacognitive growth, and learner agency — connecting directly to [[self-regulated-learning]], [[metacognition]], and [[agency]].

## Implications
- **For design:** educational AI must be reconceptualised as a learning companion rather than a task performer — a deliberate design stance that withholds direct answers, preserves [[productive-failure|productive struggle]], and measures success by retention, transfer, and metacognitive growth rather than output quality.
- **For adaptive systems:** LLM flexibility should be fused with the learner-modelling and instructional-adaptation strengths of ITSs ([[knowledge-tracing]], [[student-modeling]]) rather than relying on stateless, reactive prompting; adaptivity should be co-regulatory, keeping the learner in control to avoid offloading metacognitive control.
- **For research:** the [[learning-gains|effects of AI tools on learning]] must be evaluated against durable, independent learning rather than short-term scaffolded performance — a caution against meta-analytic "effects in search of a cause" that measure task output instead of learning.
- **For governance and practice:** responsible design (security, transparency, accountability, inclusion) is not an add-on but a core foundation, shaping trust, equity, and human oversight as AI companions become embedded in everyday study practices.

## Connected Concepts

- [[self-regulated-learning]]
- [[metacognition]]
- [[transfer-of-learning]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[student-experience]]
- [[llm]]
- [[refutation-text]]

## Connected Articles

- [[llm-fallacy-misattribution]]
- [[llm-student-modeling-memory]]
- [[ai-tutor-safety-harms]]
## Citation

Khosravi, H., Gasevic, D., Sadiq, S., Yan, L., Lodge, J., Tangen, J., Denny, P., & DiCerbo, K. (2026). [*Building AI Companions that Prioritise Learning over Performance*](https://arxiv.org/abs/2605.04816)
