---
title: "Play and learn: gamified feedback for ultrasound-guided catheter insertion training in virtual reality"
created: "2026-11-24T09:50:00-05:00"
updated: "2026-11-24T10:15:00-05:00"
type: article
authors: ["Mohammad Raihanul Bashar", "Alejandro Olivares Hernandez", "Yahia Zine", "Anil Ufuk Batmaz"]
venue: "arXiv preprint (cs.HC)"
evidence_context: educational
pedagogy: [game-based-learning, scaffolding]
technology: [virtual-and-augmented-reality, simulation]
assessment: [formative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
discipline: [medical education]
audience: [medical educators, instructors, educational technology developers, researchers]
page_kind: [evaluation]
research_method: [user study]
sources: ["raw/papers/bashar-gamified-feedback-ultrasound-vr-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Bashar, Olivares Hernandez, Zine, and Batmaz (2026) evaluate a gamified [[virtual-and-augmented-reality|VR]] simulator for ultrasound-guided peripheral IV catheter insertion, built around goal-aligned visual and auditory [[feedback]] such as progress indicators, alignment cues, and rewards. With 24 novices, the gamified condition completed insertions faster than the standard condition (46.57 seconds versus 57.41), reported lower workload on the NASA-TLX, and rated the system higher on usability and on the Player Experience Inventory. Group differences emerged only at later levels and at post-test. With 12 experienced clinicians, the gamified condition was again faster (45 seconds versus 75) with lower mental, physical, temporal, and frustration demands. The authors argue that gamification functioned as [[formative-assessment|formative feedback]] rather than superficial motivation, serving as instructional [[scaffolding]] for novices and cognitive optimization for experts, without compromising the clinical authenticity of the task.

*Two within-subjects studies comparing a gamified and a standard VR simulator: 24 novices (power analysis d = 0.5, power = .8, α = .05) recruited by snowball sampling, and 12 experienced clinicians. Outcomes included insertion time, System Usability Scale, NASA-TLX, Player Experience Inventory, and post-session interviews.*

## Key Findings

- **Novices inserted faster with gamification.** Gamified sessions averaged 46.57 seconds against 57.41 for the standard condition.
- **The advantage appeared late, not immediately.** Groups separated at Level 3 and at post-level, but not at the earlier levels.
- **Experts were faster too.** Clinicians in the gamified condition averaged 45 seconds against 75 in the standard condition, and the advantage emerged later rather than right away.
- **Workload and usability favored gamification.** Novices reported lower effort, frustration, and temporal demand on the NASA-TLX and rated the system higher on appeal, challenge, goal clarity, enjoyment, immersion, and mastery; experts showed the same pattern on frustration, mental, physical, and temporal demand.
- **Goal clarity showed the largest novice gain.** Clarity of goals produced the strongest single difference in the Player Experience Inventory.
- **Gamification did not trade away realism.** The authors report that benefits did not compromise clinical authenticity, a common concern in medical gamification, because cues were aligned with task goals rather than added as decoration.

## What the simulator does

Peripheral intravenous catheter insertion is a high-volume procedure — over two billion catheters used annually worldwide — with first-attempt failure rates reaching 39% and catheter failure affecting 30–50% of patients through infiltration, phlebitis, occlusion, dislodgement, or hematoma. Ultrasound guidance improves success but adds perceptual-motor demands: bimanual coordination, needle-plane alignment, and reading dynamic two-dimensional images to make three-dimensional judgments. Novices struggle particularly with probe alignment, depth perception, and needle visualization, and conventional training offers limited subsurface feedback.

The simulator places learners in that perceptual situation and adds feedback aligned to each subgoal: alignment cues show whether the needle plane is correct, progress indicators mark advancement through steps, and rewards follow successful completion. This is where the design departs from both plain [[simulation]] and from typical [[game-based-learning]]. The game elements are not a layer over the task; they make the task state legible, so the learner can see what to correct. The authors describe the result as continuous formative feedback that supports [[self-regulated-learning|self-regulated learning]] — progress and alignment become observable rather than inferred.

## Two groups, two mechanisms

For novices, gamification acted as instructional scaffolding. Structured stars, alignment cues, and summaries accelerated spatial understanding and procedural sequencing; clear goals and immediate feedback reduced uncertainty and cognitive load. The fact that group differences surfaced only at Level 3 and at post-test is consistent with this reading: the support matters once the basic sequence is familiar enough that attention can shift to accuracy.

For experts, the mechanism was different. Gamification did not teach procedural knowledge; it optimized execution by reducing self-monitoring demands and stabilizing pacing. Expert completion times dropped and frustration, mental, physical, and temporal demands fell. The authors attribute the standard condition's longer times partly to lower VR familiarity and real-world habits that transferred poorly, but the workload reductions point to something beyond familiarity: perceptually salient progress cues freed attention that experts otherwise spent monitoring their own performance.

## Scope and caution

The studies are small and immediate. Twenty-four novices and twelve clinicians is enough to detect moderate effects with the analyses used, but not enough to speak about patient outcomes, retention, or transfer to the bedside. The gamification is deliberately lightweight, which limits generalization to richer designs. The anatomy was fixed to a single arm, so ecological validity is bounded. And because gamified cues do not exist in clinical practice, the authors raise a real concern: learners who rely on them may need reflection, debriefing, and fading feedback to avoid dependence and negative transfer.

The practical message is nevertheless specific. Feedback in procedural simulators should be designed around the task's subgoals, not around realism alone, and the same cues that help a novice form a mental model can help an expert perform consistently.

## What this means for practice

- **Medical educators.** Prefer simulators whose feedback tracks each subgoal — alignment, depth, needle visualization — over those that add realism without making the task state visible.
- **Simulation designers.** Align every cue with a clinical judgment; alignment guides and progress indicators succeeded here because they correspond to decisions a practitioner must make.
- **Instructors.** Plan for the transfer problem. Debrief after gamified sessions and fade cues over repeated practice so that performance does not depend on them.
- **Researchers.** Test adaptive and fading feedback, anatomical variability, and long-term retention. Immediate performance gains in a single-arm simulator settle little about clinical competence.

## Limitations

- The sample sizes are small — 24 novices and 12 clinicians — sufficient for moderate effects under the stated power analysis but not for subgroup claims.
- Only immediate performance was measured; there are no long-term learning or transfer-to-practice data.
- The simulator used a fixed single-arm anatomy, which limits ecological validity.
- The gamification was intentionally lightweight, restricting generalization to richer designs.
- Participants were compared within subjects across conditions, but the standard condition's poorer performance may partly reflect lower VR familiarity rather than the absence of gamification.
- Novice recruitment used snowball sampling, which may produce a sample more connected to the research team than the wider trainee population.

## Citation

Bashar, M. R., Olivares Hernandez, A., Zine, Y., & Batmaz, A. U. (2026). [Play and learn: gamified feedback for ultrasound-guided catheter insertion training in virtual reality](https://arxiv.org/abs/2605.00389). *arXiv preprint arXiv:2605.00389.*
