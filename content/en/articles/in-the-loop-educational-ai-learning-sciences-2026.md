---
title: "Rethinking \"In-The-Loop\" Approaches in Educational AI: A Learning Sciences Perspective"
created: "2026-10-14T09:30:00-04:00"
updated: "2026-10-14T09:30:00-04:00"
type: article
sources: ['raw/papers/in-the-loop-educational-ai-learning-sciences-2026.md']
confidence: medium
page_kind: [synthesis]
research_method: [position paper]
level: [higher ed]
audience: [researchers, instructional designers]
technology: [human-in-the-loop-ai, learning-analytics]
foundations: [theories-and-frameworks]
discipline: [learning sciences]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-14"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Pande (2026) argues that the usual debate about [[human-in-the-loop-ai|in-the-loop]] educational AI asks the wrong question. The critical issue is not whether humans participate sufficiently, but how the educational loop is rendered actionable: when teaching and learning are organized around cycles of data capture, computational interpretation and probable response, [[pedagogy|pedagogical]] action is reconfigured around what systems can detect, compare and act upon. Drawing on [[learning-analytics]] and [[learning-sciences|learning sciences]] perspectives, the paper contends that actual enactments rely on epistemically simplified proxies that shape what counts as evidence, constrain interpretation, redistribute [[agency]], and impose system-defined temporality on learning. In [[assessment]], this risks a drift from prediction toward a kind of determinism that normalizes data [[cognitive-offloading|overreliance]] and trajectory-prescription. The paper stresses that these tensions persist even when humans remain in the loop or systems become more automated, because they arise from the loop's own commitments to closure and actionability. It is a conceptual position piece, not an empirical study, and it ends with a research agenda and design implications rather than findings.

## Key Findings

1. The critical question is not how much humans participate in educational AI, but how the educational loop is rendered actionable, because that determines what counts as evidence.
2. Organizing learning around data capture, computational inference and probable response reconfigures pedagogical action around what systems can detect, compare and act upon, rather than around interpretation.
3. Human-in-the-loop and AI-in-the-loop framings do not prescribe pedagogical stances; they present learning as monitorable and optimizable while sidelining the relational and interpretive work of teaching.
4. Pre-interpreted representations — risk alerts, engagement classifications, model-flagged [[misconceptions]], generated feedback — perform an initial layer of interpretation before a teacher or student acts.
5. Learning analytics foreground countable aspects of learning such as frequency, duration and error patterns, so decisions rest on partial abstractions that obscure embodied, affective and socio-relational dimensions.
6. At scale these proxies harden into actionable categories: prediction drifts toward prescription, and real-time alerts impose a system-defined tempo that may conflict with pedagogical pacing.
7. The tensions are structural rather than a shortfall of oversight, because the upstream commitments that make a loop runnable — proxies, comparability, time-sensitive response — remain intact.

## From cybernetics to the classroom

The paper begins by tracing how "in-the-loop" terminology traveled from engineering and cybernetic traditions into educational AI, where human-in-the-loop (HITL) historically described arrangements in which human interpretation supervises a computational model, and AI-in-the-loop (AITL) describes configurations in which AI takes an active role inside the loop. Educational adoptions emphasize structured cycles of observation, interpretation and corrective action, and recent work operationalizes learning environments as closed-loop systems that monitor learner states, compute responses and regulate subsequent action, often in real time. Policy and competency frameworks, from UNESCO to the EU's DigComp, prescribe retaining human oversight and keeping teachers [[teacher-role|in control]] of AI-enhanced pedagogies. The paper's point is that this lineage carries an unnoticed commitment: to make a loop runnable at scale, complex teaching must be transformed into identifiable, actionable forms, which establishes what becomes visible, what counts as evidence and which actions appear warranted.

## The loop as an epistemic commitment

HITL and AITL read as frameworks for participation, but the paper treats the loop as an epistemic and operational commitment with consequences for who can interpret what. Interpretation space is pre-structured by system categories, thresholds and [[visualization|visualizations]], so by the time an educator meets a dashboard, a risk alert or [[feedback|generated feedback]], an initial layer of interpretation has already been performed upstream. The paper's Table 1 maps this across five dimensions — epistemic, interpretive agency, interactional, temporal and pedagogical purpose — using higher-education illustrations such as LMS engagement dashboards that infer participation from clickstream activity, automated writing feedback that privileges surface textual features over argument quality, and early-alert traffic-light systems that pre-interpret student trajectories. Automation bias compounds the effect, and the paper reviews work suggesting teachers' trust depends on transparency, perceived competence and meaningful agency to override, treating trust as a sociotechnical outcome rather than a stable attitude toward AI.

## Learning as spiral, loops as closure

Against the loop's operational logic the paper sets learning sciences accounts in which sometimes iteration is growth, not regression. Bruner's spiral curricula explicitly reject linear accumulation in favor of revisiting ideas repeatedly through varied representation and engagement, and [[embodied-learning|embodied]] and 4E cognition, together with dynamical systems approaches, treat understanding as emergent and only visible through time, participation and reinterpretation. On this view struggle, hesitation and open exploration are pedagogically valuable — the [[productive-failure]] literature shows learners who explore complex problem spaces before instruction can develop deeper conceptual understanding. The paper cites a psychophysiological study comparing real-time [[generative-ai]] feedback with in-person teacher feedback: learning outcomes did not differ, but students receiving AI feedback attended more to correct answers while those with teacher feedback reflected on their own thinking. Loops, by contrast, require what will be observed, how observations become comparable and which responses are probable — conditions the paper argues are met only where learning goals are stable and trajectories known.

## Beyond operability: a learning sciences agenda

The paper's closing move is to redirect research from improving loops toward asking what loop-based systems privilege, what about learning they systematically obscure or render invisible, and which educational processes should not be forced into immediate actionability. It argues that prolonged exploration without visible progress can be algorithmically indistinguishable from disengagement when only coarse proxies such as clicks, time and errors are available, and that methodologically the field needs designs not themselves shaped by loop rationality. Proposed directions include ethnographic study of AI-supported classrooms and interaction analysis of how AI-mediated feedback changes discourse and participation; longitudinal designs tracing non-linear trajectories; work connecting [[learning-design|analytics to learning design]]; and mixed programs combining analytics with interviews and observation. Design implications follow from a principle of restraint: build systems that support inquiry rather than closure, and orchestrate generative-AI feedback as a learning practice, attending to [[equity-in-ai-education|equity]] — which learners are made legible, which competences are undervalued and which trajectories are narrowed by stabilized indicators.

## What this means for practice

- **Instructors.** Judge an AI-enhanced tool by what it makes visible and what it hides: if a dashboard, alert or generated comment has already interpreted the learner, decide deliberately whether that interpretation deserves your pedagogical attention.
- **Instructors.** Defend pedagogically legitimate delay, ambiguity and exploratory struggle, and resist the expectation that every dashboard signal demands immediate intervention or outreach.
- **Researchers.** Study what loop-based systems ignore or render invisible, using ethnographic, interaction-analytic and longitudinal designs that are not themselves shaped by loop rationality.
- **Administrators.** Treat trust and agency as design outcomes rather than dispositions to be trained, and ask which learners become legible to a system and which forms of competence it undervalues.
- **Developers.** Prefer designs that support inquiry over closure — outputs that foreground uncertainty, offer multiple plausible interpretations and invite contextual explanation, rather than triage.

## Limitations

- This is a conceptual/position paper: the availability statement records that no data were collected or analyzed, so every claim is an argument or a reading of others' studies rather than a measured result.
- Its illustrative examples come from [[higher-ed|higher education]] (LMS dashboards, early-alert traffic-light systems, Signals-style programs, AI-generated feedback) and function as illustrations of the argument, not as evidence from a [[meta-analysis-systematic-review|systematic review]].
- Claims about trust, agency and feedback perceptions are drawn from cited empirical work rather than tested here; the paper does not empirically establish when loop-based approaches are or are not appropriate.
- The scope of the argument is higher education, and boundary conditions for other educational levels and settings are left undeveloped.

## Citation

Pande, P. (2026). [*Rethinking "In-The-Loop" Approaches in Educational AI: A Learning Sciences Perspective*](https://osf.io/ydzcf). EdArXiv preprint.
