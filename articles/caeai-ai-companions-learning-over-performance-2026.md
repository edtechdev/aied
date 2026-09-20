---
title: "Building AI Companions that Prioritise Learning over Performance"
created: "2026-09-19T21:07:40-04:00"
updated: "2026-09-19T21:07:40-04:00"
type: article
foundations: [ai-education, framing-ai-use-for-students, cognitive-offloading, agentic-ai, teacher-role]
pedagogy: [self-regulated-learning, metacognition, productive-failure, scaffolding, transfer-of-learning]
technology: [llm, generative-ai, conversational-ai, pedagogical-agent, adaptive-learning, student-modeling]
ethics: [trust-calibration, equity-in-ai-education, explainable-ai, privacy, inclusive-learning]
stakeholders: [learners, teacher-ai-competency, educational-technology-developers]
institutions: [governance, change-management]
research_method: [position paper]
audience: [researchers, designers, instructors, institutions, policymakers]
page_kind: [framework]
sources: ['raw/papers/caeai2026-ai-companions-learning-over-performance.md']
confidence: high
---

> **Synthesis:** The argument of this position paper is that the problem with generative [[ai-education|AI in education]] is not weak [[prompt-engineering|prompting]] but a design objective: general-purpose models are built and tuned for task completion, so the better they get at helping, the more reliably they absorb the cognitive work through which capability develops. The paper responds not with another set of [[guardrails]] but with a definition and a design framework for [[agentic-ai|AI learning companions]], deliberately distinguishing companionship from assistance. It identifies three limits of prompt-level scaffolds that explain why they produce near-null learning effects, derives eight design commitments from them, organises those commitments into [[pedagogy|pedagogical]], adaptive and responsible design foundations, then reads five real deployments against the framework and finds that the adaptive loop, durable-learning evidence and inclusivity are where current systems fall short.

## Key Findings

1. The paper frames the central tension as learning versus performance: systems optimised for immediate task completion can improve output while weakening the cognitive, [[metacognition|metacognitive]] and self-regulatory processes that produce durable capability, a dynamic the authors describe as the learning-performance paradox.
2. Prompt-level remedies are characterised as insufficient for three structural reasons: they are reactive rather than proactive, reaching only learners who already recognise that they need help; they are largely stateless with respect to [[prior-knowledge|prior knowledge]], goals, confidence and [[misconceptions]]; and they operate at the level of individual tasks rather than across a [[curriculum-design|curriculum]] or over time.
3. The authors distinguish assistance from companionship: assistance helps with the task at hand, while companionship participates in the learner's development over time. A friendly tone, occasional questions and refusal to give direct answers do not by themselves produce companionship, since such a system can remain reactive, prompt-bound and weakly persistent.
4. The stakes are extended beyond formal education to professional formation: if generative AI absorbs the routine but effortful work through which novices once built expertise, tasks get completed while the developmental experience is bypassed, with recent evidence that workers delegate routine tasks to AI and in some cases replace peer or subordinate interaction with AI assistance.
5. An AI [[pedagogical-agent|learning companion]] is defined as a pedagogically grounded, adaptive and responsibly designed AI-mediated learning partner embedded in authentic learning environments and designed to support durable learning across diverse learner populations, with the term offered as a design and relational construct rather than a claim about machine intention or personhood.
6. Eight design commitments follow from that definition: pedagogically grounded, adaptive, responsibly designed, character-based presence, agency-preserving, embedded in authentic learning environments, learning-centred and inclusive.
7. The commitments are operationalised through three foundations, each with four components: a pedagogical foundation (deep and interactive learning, guided [[scaffolding]], learning to learn and higher-order learning, contextual learning), an adaptive foundation framed as capture, model, adapt and evolve, and a responsible design foundation covering security, transparency, accountability and inclusion.
8. Five case studies written by researchers who led or contributed to the tools are analysed against the framework: Khanmigo, the RiPPLE student co-creation and peer [[edtech-platform|learning platform]], CodeHelp for scaffolded programming support, the JeepyTA teaching assistant for course discussion, and Recast, a university platform for educator-designed dialogic assistants.
9. The cross-case synthesis finds the pedagogical foundation relatively mature but realised through different mechanisms, the adaptive foundation the most uneven with RiPPLE closest to persistent longitudinal learner modelling and CodeHelp and JeepyTA adapting only within sessions, and responsible design shaped by context rather than following one technical pattern.
10. Agency preservation emerges as the strongest shared commitment and inclusivity the least realised: several tools provide scale, privacy, availability or multilingual interaction, but explicit design for diverse learner needs remains limited. Recognisable AI character is fully evident only in Khanmigo and RiPPLE.
11. The research agenda names five priorities: evidence of durable learning rather than proximal indicators such as engagement, helpfulness or task completion; richer persistent learner models including metacognitive development; interaction strategies that preserve agency and [[desirable-difficulties|productive struggle]]; responsible design treated as a research object rather than a compliance layer; and inclusion and [[equity-in-ai-education|equity]] placed at the centre of companion design.

## Why the definition carries the argument

The paper's analytic move is to refuse the shortcut of calling any educationally prompted model a companion. Its definition is assembled from two prior traditions that it argues were each incomplete: general-purpose generative models, which bring conversational flexibility, scale and cross-domain reach but are organised around assistance, and earlier educational agents and [[intelligent-tutoring|tutoring systems]], which contribute companion roles, [[community-of-inquiry|social presence]], dialogue, learner modelling, feedback, [[adaptive-learning|adaptivity]], and the transparency tradition of open learner models and [[explainable-ai|explainable AI]] in education, together with [[bias-mitigation|algorithmic fairness]] work in education, but were limited by bounded domains, scripted interaction, authoring cost and system-led models of support that constrained [[agency|learner agency]].

Generative AI, on this account, does not resolve those limitations so much as raise the stakes: because a companion draws on largely opaque training corpora and captures rich open-ended dialogue, what earlier narrow systems could treat as refinements become preconditions for trustworthy use. The eight commitments are assembled as the union of what each tradition lacked, which is why the adaptive foundation is defined as four operations over the learner rather than as a feature list, and why the responsible design foundation appears as a design foundation rather than as an appendix about compliance.

The authors also spend care on what they are not claiming. Companion is a design and relational construct, not a claim that AI possesses care, understanding or the capacity to accompany a person; continuity resides in the design, governance and educational purpose of the system rather than in the model. Nor is the companion meant to substitute for educators and peers, since the same technical system can be deployed either to strengthen educational relationships or to reduce investment in them.

## What the case studies expose

Reading five deployments against the framework turns an abstract agenda into a gap analysis. The pedagogical foundation is where tools already converge, and the recurring design decision they identify is which forms of cognitive work remain with the learner: Khanmigo and CodeHelp withhold the direct solution, RiPPLE moves students into authoring and peer review, JeepyTA embeds support inside course discussion and formative feedback, and Recast supports educator-designed assistants for reflection and role-play.

The adaptive foundation is where they diverge most, and persistent longitudinal adaptivity is named as the clearest gap between current implementations and the fuller vision. That diagnosis connects directly to work on [[student-modeling]] and [[knowledge-tracing]], which supply the machinery for exactly the cross-session learner state the case studies lack.

Responsible design appears everywhere but in different sociotechnical forms: conversation visibility and parent or [[teacher-role|teacher]] oversight in a [[k-12]] platform, an [[learning-analytics|analytics]] dashboard reflecting a university position that accountability means knowing how its AI tools are used, instructor configurability and [[human-in-the-loop-ai|human review]] in course-bound assistants, and explainable learner modelling with human-gated decisions in the co-creation platform. The paper's point is that these are context-sensitive arrangements, not interchangeable templates.

## What this means for practice

- Judge an educational AI by what cognitive work it leaves with the learner, and by whether it can act before the learner asks for help rather than only after.
- Treat persistent learner state as the design target, since in-session and task-local adaptation is the norm and the framework's clearest gap.
- Evaluate against delayed retention, transfer, conceptual change and metacognitive growth instead of engagement, helpfulness or completion metrics.
- Decide the institutional conditions of use, including oversight, data governance and whether the tool strengthens or substitutes for teaching relationships, before deployment rather than after.
- Plan for learners who do not ask for help, and for those who over-rely on it, since proactive initiation and monitoring support are separate capabilities.

## Limitations

- The framework is a conceptual synthesis supported by illustrative rather than comparative evaluation; the cross-case ratings are authored judgments by people involved in the tools, not blind or independent assessments.
- Five case studies, concentrated in university and platform deployments led by the authors' networks, cannot represent the diversity of educational AI, particularly non-English and low-resource settings.
- The paper proposes what companions should be measured against but reports no new outcome data on durable learning, so the learning-performance paradox remains supported by other studies rather than tested here.
- The eight commitments are normative and largely unfalsifiable in their current form; the paper does not specify thresholds at which a system would count as meeting each one.
- Implementation cost, institutional incentive structures and teacher workloads are named as context but not analysed in depth, leaving the adoption side of responsible design underdeveloped.
- Scope conditions are stated broadly, and the framework's applicability to [[early-childhood-elementary-ai-education|early childhood]], vocational and [[special-education|special education]] settings is not examined.

## Connected Concepts

- [[cognitive-offloading]] — the mechanism by which performance gains mask capability atrophy
- [[agentic-ai]] — companions as persistent, proactive systems rather than answer services
- [[framing-ai-use-for-students]] — how institutions frame what AI is for shapes what tools get built
- [[pedagogical-agent]] — the earlier tradition the paper absorbs and extends
- [[adaptive-learning]] — the adaptive foundation, and the gap in persistent adaptation
- [[student-modeling]] — the learner state a companion must maintain across sessions
- [[productive-failure]] — the effort the design must protect rather than optimise away
- [[self-regulated-learning]] — planning, monitoring and evaluation as companion design targets
- [[metacognition]] — the paper's proposal for metacognitive onloading
- [[transfer-of-learning]] — the durable-learning outcome current systems rarely measure
- [[explainable-ai]] — transparency from open learner models, now a precondition
- [[equity-in-ai-education]] and [[inclusive-learning]] — the least realised commitment
- [[trust-calibration]] — learner trust as a design responsibility, not a by-product
- [[governance]] — institutional purposes and incentives as part of responsible design

## Connected Articles

- [[teachlm-post-training-llms-education]] — post-training approaches that make a system persist in a pedagogical role
- [[educlaw-bench-pedagogical-llm-agents-2026]] — what pedagogical agents actually know about pedagogy when tested
- [[yasir-llm-tutoring-agents-2026]] — tutoring agents evaluated against adaptive support criteria
- [[ai-advice-suppresses-ikt-suspension-2026]] — learners who stop recognising what they do not know when assisted
- [[pramod-agentic-ai-motivational-pathways-2026]] — how agentic AI use relates to motivational pathways

## Citation

Khosravi, H., Gašević, D., Sadiq, S., Yan, L., Lodge, J. M., Tangen, J. M., Denny, P., DiCerbo, K., Buckingham Shum, S., & Baker, R. S. (2026). [Building AI Companions that Prioritise Learning over Performance](https://doi.org/10.1016/j.caeai.2026.100680). *Computers and Education: Artificial Intelligence*.
