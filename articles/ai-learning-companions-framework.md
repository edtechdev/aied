---
title: Building AI Companions that Prioritise Learning over Performance
created: "2026-05-09T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [adaptive-learning, llm, personalized-learning]
research_method: [theoretical analysis]
audience: [learners]
sources: ['raw/papers/2605.04816.md']
confidence: high
page_kind: [framework]
---

> **Synthesis:** A design framework for [[llm]]-powered educational agents that prioritize durable learning over short-term task performance. Introduced by Khosravi et al. (2026), AI learning companions are defined as adaptive, pedagogically informed agents integrated into learning environments — distinct from both task-oriented LLMs and simple prompted tutors. The framework rests on three interrelated foundations ([[pedagogy|pedagogical]], adaptive, and responsible design) and argues that the LLMs now entering education were "built for work, not for learning," requiring a fundamental reconceptualization rather than a tweak to [[prompt-engineering|prompting strategy]].

## Definition
A design framework for LLM-powered educational agents that prioritize durable learning over short-term task performance. Introduced by Khosravi et al. (2026), AI learning companions are defined as adaptive, pedagogically informed agents integrated into learning environments — distinct from both task-oriented LLMs and simple prompted tutors. The framework is built on three interrelated foundations: a pedagogical foundation (how students learn *with* AI), an adaptive foundation (how AI learns *about* students), and a responsible design foundation (transparency, accountability, inclusivity, security).

## Key Findings
1. LLMs expose a learning–performance paradox: they demonstrably improve short-term task outputs ([[writing-education|writing quality]], coding speed, analysis) while simultaneously undermining durable learning — including [[cognitive-offloading|cognitive growth]], [[transfer-of-learning|knowledge transfer]], and [[metacognition|metacognitive development]].
2. The LLMs entering education were "built for work, not for learning": their design logic (optimizing output quality, minimizing cognitive effort, treating each interaction as independent) is precisely what makes them unsuitable as learning tools without deliberate redesign.
3. The framework defines AI learning companions across three foundations — pedagogical (deep interactive learning, guided [[scaffolding]], learning to learn, contextual learning), adaptive (a continuous Capture–Model–Adapt–Evolve cycle), and responsible design (security, transparency, accountability, inclusion) — and illustrates them through five case studies across diverse contexts, levels, and tool designs.
4. Prompt-based [[guardrails]] (e.g. study modes, [[socratic-method|Socratic]] prompting) can mitigate some negative effects of direct LLM use but are largely reactive, stateless, and task-scoped, making them unlikely to match the learning benefits historically associated with [[intelligent-tutoring|Intelligent Tutoring Systems (ITSs)]].
5. A necessary shift is required away from task-oriented LLMs toward deliberately developed companions that preserve [[productive-failure|productive struggle]], adapt to learners, and foster durable understanding, metacognitive growth, and learner agency.

## The Learning-Performance Paradox
LLMs demonstrably improve task outputs (writing quality, code correctness, analysis speed), but this can create a paradox: students who produce better work with AI may learn less. This mirrors and extends the [[llm-fallacy-misattribution]] phenomenon where users misattribute AI-assisted outputs to their own competence. The framework addresses the question posed by [[transfer-of-learning]]: do AI-assisted gains persist when the tool is removed?

The paradox arises from a well-documented mechanism: [[cognitive-offloading]]. When students rely on AI for sensemaking, planning, monitoring, and evaluation, they reduce [[student-engagement|engagement]] in the very processes that make [[self-regulated-learning]] effective — producing a form of "metacognitive laziness." The most compelling evidence comes from a large randomized experiment in high-school [[math-education|mathematics]] in which students given an AI assistant improved [[problem-solving]] during learning but suffered significant harm to durable, independent learning once the AI was removed. The same pattern appears in [[misconceptions|misconception]] correction: personalized AI dialogue produced larger immediate belief reductions than textbook refutation, but the conditions converged by the two-month follow-up, showing that engagement and confidence did not translate into durable learning advantage.

## AI for Work vs. AI for Learning
The paper formalizes a nine-dimension contrast between AI designed for professional productivity and AI designed for learning. In work contexts, AI performs or co-performs the cognitive task, interactions are transactional and stateless, and success is measured by output quality and efficiency; errors are inefficiencies to be eliminated. In learning contexts, AI must instead scaffold and challenge the learner to produce their own understanding, interactions must be developmental and cumulative, and success is measured by retention, transfer, and metacognitive growth; errors are diagnostic signals. The key failure modes differ accordingly: AI for work fails when productivity gains mask skill atrophy, while AI for learning fails when task scores improve while knowledge retention declines. Design intent follows directly: AI for work minimizes friction and provides direct answers, whereas AI for learning must deliberately withhold direct answers and preserve [[productive-failure|productive struggle]] as the mechanism through which durable understanding is built. This reorientation is grounded in [[distributed-cognition|augmentation and distributed cognition]] for work but [[constructivist|constructivism]] and [[self-regulated-learning]] for learning.

## Three Foundations

### The Pedagogical Foundation: Students Learn with AI
Drawing on the [[higher-ed|Higher Education]] Learning Framework (HELF), this foundation derives four principles for companion design. **Deep and interactive learning** exploits the [[desirable-difficulties|generation effect, testing effect, and desirable difficulties]] — what matters is not whether a companion presents information well but whether it makes the student do the thinking; companions should prompt generation and retrieval rather than provision, shifting across roles as tutor, peer, or novice. **Guided scaffolding** situates tasks in the [[sociocultural-learning|Zone of Proximal Development]], balancing challenge with support so that difficulty becomes "an engine of growth," while attuning to learners' [[affective-computing|emotional states]] (curiosity, anxiety, frustration) and reframing confusion as a learning opportunity. **Learning to learn and higher-order learning** cultivates [[metacognition|metacognitive awareness]] and [[critical-thinking|higher-order thinking]] (analysis, synthesis, evaluation, creation), notably through metacognitive calibration — comparing expressed confidence against actual performance — and teach-back strategies that connect to [[learning-by-teaching]]. **Contextual learning** situates knowledge in [[situated-learning|authentic contexts]], drawing on [[experiential-learning|Kolb's experiential learning cycle]] and threshold concepts, and scaffolds the development of disciplinary identity and belonging.

### The Adaptive Foundation: The AI Learns about the Student
This foundation resolves the statelessness of current LLM applications by organizing adaptivity into a continuous four-stage cycle. **Capture** records learners' digital footprints, including rich, open-ended learner–AI dialogues and generative metadata that reveal epistemic frames and cognitive engagement (connecting to [[learning-analytics]] and [[multimodal|multimodal learning analytics]]). **Model** builds a multi-dimensional learner model from cognitive, affective, and behavioral data, combining LLM interpretation with established algorithms such as [[knowledge-tracing]], memory modeling, and engagement detection ([[student-modeling]]); it proposes hybrid architectures where LLMs handle content interpretation while probabilistic models handle longitudinal integration, and anticipates [[reinforcement-learning|Reinforcement Learning from Human Learning (RLHL)]]. **Adapt** harmonizes personalized guidance with shared [[regulation]], distinguishing the macro-level outer loop (task selection and sequencing) from the micro-level inner loop (step-by-step support), and — critically — shifting from adaptivity done *to* the learner toward adaptivity done *with* the learner as a co-regulator. **Evolve** closes the loop through design-loop adaptivity, treating instructional decisions as hypotheses to be tested via controlled experiments and multi-armed bandits, with [[simulating-students|simulated learners]] and [[generative-ai|generative AI]] as co-designers of new instructional strategies.

### The Responsible Design Foundation: AI Acts with Integrity
Because learning companions are highly personalized and embedded, their influence extends beyond technical optimization. The framework organizes responsible practice around four commitments: **security**, protecting learner privacy, data, and digital [[well-being]] through lawful data practices ([[privacy]]); **transparency**, making AI processes, reasoning, and data flows visible and explainable through [[student-modeling|Open Learner Models]] and learning analytics dashboards ([[trust]]); **accountability**, retaining meaningful human oversight and preserving learners' rights to question AI-supported decisions ([[governance]], [[human-in-the-loop-ai]]); and **inclusion**, ensuring companions are fair, accessible, and responsive to diverse learners, abilities, languages, and contexts ([[equity-in-ai-education]], [[inclusive-learning]], [[accessibility]]).

## Case Studies
The framework is validated across five diverse educational contexts, levels, and tool designs, revealing both the promise and current limitations of existing tools. The case studies span the pedagogical, adaptive, and responsible design foundations, showing how each principle translates into concrete companion behavior and where current systems fall short. The framework calls for a deliberate shift from task-optimized LLMs toward companions that foster durable understanding, metacognitive growth, and learner agency — connecting directly to [[self-regulated-learning]], [[metacognition]], and [[agency]].

## What this means for practice

- **Designers.** Withholding the answer is the design: a companion that minimizes friction and supplies direct answers reproduces AI for work, and the framework's case is that durable understanding comes from preserved productive struggle rather than from faster output.
- **Designers.** Make adaptivity persistent and co-regulatory. Stateless prompting cannot accumulate a learner model, so implement the Capture–Model–Adapt–Evolve cycle with learner-visible models and let students share control of regulatory choices rather than performing planning and monitoring on their behalf.
- **Instructors.** Evaluate companions against delayed retention and transfer, not task scores. The large high-school mathematics experiment cited here found AI-assisted practice improved performance during learning while harming independent performance after the assistant was removed.
- **Researchers.** Build retention and transfer measures into evaluation frameworks as standard rather than afterthought; the paper identifies this as the most important open direction, alongside persistent learner modeling that does not compromise privacy or agency.
- **Administrators.** Treat security, transparency, accountability, and inclusion as procurement preconditions, not add-ons — the framework places them on the same footing as the pedagogical and adaptive foundations.

## Limitations

- This is a design framework, not an empirical test of one: it is built from literature synthesis and five case studies, with no controlled comparison of companion designs and no measurement of learning outcomes.
- The five case studies were "each authored by researchers who led or made significant contributions to the tools described", so they are developer accounts rather than independent evaluations.
- The adaptive foundation is aspirational. The paper states that persistent adaptivity "remains largely emerging across most cases", so the Capture–Model–Adapt–Evolve cycle is a design target rather than demonstrated practice.
- Evidence about durability is absent by the authors' own account: they call for delayed retention and transfer to be built into evaluation frameworks, which means the claim that companions support durable learning has not yet been tested against those outcomes.

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
- [[nie-personavlm-long-term-personalization-2026]]
- [[hazra-safetutors-pedagogical-safety-2026]]
## Citation

Khosravi, H., Gasevic, D., Sadiq, S., Yan, L., Lodge, J., Tangen, J., Denny, P., & DiCerbo, K. (2026). [*Building AI Companions that Prioritise Learning over Performance*](https://arxiv.org/abs/2605.04816)
