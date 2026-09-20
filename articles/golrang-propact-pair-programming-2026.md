---
title: "ProPACT: A Proactive AI-Driven Adaptive Collaborative Tutor for Pair Programming"
created: "2026-07-29T04:33:04-04:00"
updated: "2026-09-20T03:43:02-04:00"
type: article
pedagogy: [collaborative-learning, metacognition, scaffolding, sociocultural-learning]
technology: [adaptive-learning, intelligent-tutoring, rag, affective-tutoring, learning-analytics]
assessment: [formative-assessment]
audience: [software developers, instructional designers, instructors, edtech designers]
research_method: [system development, experiment]
discipline: [cs education]
sources: ['raw/papers/golrang-propact-pair-programming-2026.md']
confidence: medium
level: [higher ed]
---

> **Synthesis:** **ProPACT** (Proactive AI-Driven Adaptive Collaborative Tutor) is an adaptive tutoring system for pair programming that treats **collaboration itself as the object of instruction.** Unlike individual-centric, reactive systems, it builds a real-time model of *dyadic* learning from [[multimodal]] sensing and intervenes *before* collaborative breakdowns occur. Three signals define that model: Joint Visual Attention (JVA), Joint Mental Effort (JME), and individual Mental Effort (ME), each discretized against a resting baseline using a ±2SD criterion. An XGBoost forecaster predicts sub-optimal collaboration states up to 30 seconds ahead, driving a five-tier [[scaffolding]] hierarchy that escalates from doing nothing to a directive hint only as a last resort. In a within-subjects study with 26 dyads (52 CS and engineering students), ProPACT feedback produced higher debugging success, faster debugging, and greater feedback uptake than a no-feedback control, with post-intervention gains in JVA and JME suggesting durable collaborative [[regulation]]. The work reframes the unit of [[intelligent-tutoring|tutoring]] as the pair rather than the person.

## Key Findings

1. **Proactive feedback lifts performance.** Dyads receiving ProPACT feedback achieved higher debugging success (*t*[49.96] = −13.51, *p* < .0001) and finished debugging faster (*t*[44.70] = 4.39, *p* < .0001) than the no-feedback control.
2. **Dyadic sensing enables prediction.** JVA (gaze-distribution cosine similarity over 30-second windows), JME (cross-recurrence of pupil signals), and ME (Index of Pupillary Activity) feed one model that forecasts sub-optimal states 30 seconds ahead.
3. **A five-tier hierarchy delivers minimally intrusive help.** Escalation runs A1 (do nothing), A2 (GitHub Copilot), A3 (gaze-awareness cue), A4 (dialogue prompt), A5 (directive hint), used only when signals show rising breakdown risk.
4. **Collaborative skill gains persist.** Beyond immediate task outcomes, dyads showed post-intervention increases in JVA and JME, indicating that the system scaffolded durable collaborative [[regulation]] rather than providing momentary assistance.
5. **Support is graduated, not answer-giving.** ProPACT mimics a skilled pair-programming mentor, structuring collaboration within each pair's [[sociocultural-learning|zone of proximal development]] rather than giving solutions, and partners must monitor their own [[metacognition]].
6. **Boundaries of the evidence.** The 52-student within-subjects design cannot show whether better dyadic regulation transfers to unsupervised pair work, and deployment depends on eye-tracking hardware, limiting [[learning-gains]] claims.

## The Dyadic Learner Model

ProPACT treats the pair, not the individual, as the unit of [[student-modeling|learner modeling]]. Three signals are captured continuously during pair programming and discretized against a normalized resting baseline into High, Average, and Low bins using a ±2SD criterion:

| Signal | Description | Measurement |
|--------|-------------|-------------|
| **JVA** (Joint Visual Attention) | Shared attentional focus | Cosine similarity of gaze distributions over 30-second windows |
| **ME** (Mental Effort) | Individual [[cognitive-offloading|cognitive load]] | Index of Pupillary Activity (IPA) over 10-second windows |
| **JME** (Joint Mental Effort) | Cognitive effort synchrony | Cross-recurrence of synchronized ME signals |

Fusing gaze and pupillary channels lets the system estimate how well a pair coordinates attention and effort — a signal unavailable to single-learner [[adaptive-learning|adaptive systems]].

## Proactive Forecasting and the Feedback Hierarchy

An XGBoost model predicts JVA, JME, and ME over a 30-second horizon, and a rule-based [[pedagogy|pedagogical]] hierarchy converts those forecasts into the least intrusive support warranted, fading help when collaboration is productive and escalating only when risk rises:

| Intervention | Trigger | Intrusiveness |
|---|---|---|
| **A1: Do nothing** | MEs = AVG, JVA = H, JME = H | None (desired state) |
| **A2: GitHub Copilot** | MEs = HH or LL, or (MEs = HL and JVA = L) | Low (autocomplete) |
| **A3: Gaze-awareness tool** | JVA = Low | Low (gaze cue) |
| **A4: Dialogue prompt** | JME = Low | Medium (dialogue nudge) |
| **A5: Task-based hint** | Both MEs = High | High (directive hint) |

The gaze-awareness tool surfaces the partner's attentional focus rather than supplying content, aligning with [[multimodal-ai-feedback-learning|work on non-verbal support channels]]. The tiers embody a [[feedback]] principle: proactive, minimally intrusive nudges beat reactive correction.

## Key Results

In a within-subjects study with 26 pair-programming dyads (52 CS and engineering students), ProPACT feedback was compared against a no-feedback control. Feedback-condition dyads solved debugging tasks more often and more quickly, and followed the system's suggestions more readily (uptake: *F*[49.81] = −17.69, *p* < .0001). Post-intervention gains in JVA and JME point to improved collaborative [[regulation]] beyond immediate task completion, suggesting the scaffolding left a residue of better joint attention rather than merely speeding up one task. The authors read this as evidence that real-time dyadic regulation is tractable in realistic programming settings and that [[student-engagement|engagement]] and effort synchrony can be monitored without interrupting the work itself. Gains held for both outcome and process measures.

## Tutoring-Specific Design and Implications

ProPACT exemplifies tutoring-specific design in the sense of [[stanford-evidence-base-ai-k12-2026|evidence-based tutoring]]: it withholds answers and instead structures collaboration through graduated [[scaffolding]], positioning the system as a [[pedagogical-agent|pedagogical agent]] rather than a solution dispenser. [[metacognition]] survives because partners must notice and repair their own coordination, and the [[sociocultural-learning|sociocultural]] framing places the zone of proximal development at the level of the dyad.

For [[cs-education]], the study shows that real-time dyadic regulation is tractable and effective, and that eye tracking plus machine-learning forecasting is viable at classroom scale. For [[adaptive-learning|adaptive systems]] more broadly, the "tutoring" unit need not be an individual — collaboration itself can be scaffolded, complementing reviews such as [[ai-collaborative-learning-systematic-review]]. What remains untested is transfer: whether improved dyadic regulation carries into unsupervised pair work, where no tutor is watching.

## What this means for practice

- **Instructors.** Scaffold the pair rather than the person: monitor joint visual attention and joint mental effort and intervene before coordination breaks down, which raised debugging success (*t*[49.96] = −13.51) and speed.
- **Instructors.** Escalate help in tiers and begin from doing nothing — gaze cues and dialogue prompts before any directive hint — so partners retain the coordination work themselves.
- **Designers.** Treat collaborative state as a forecastable signal: an XGBoost model over JVA, JME, and individual mental effort predicted sub-optimal states 30 seconds ahead.
- **Designers.** Test whether cheaper signals such as interaction logs, keystroke dynamics, or webcam gaze can carry the forecasting model before planning classroom deployment, since dual eye tracking is the scaling constraint.
- **Instructors.** Verify that improved joint attention persists into pair work you do not supervise; this study could not test that transfer.

## Limitations

- Twenty-six dyads (19 female, 33 male) of undergraduate and master's students in computer science or engineering at a single European university.
- The study ran in a controlled laboratory setting with short-duration debugging tasks, which the authors say may not generalize to classroom, remote, or industrial contexts.
- The system depends on specialized sensing infrastructure — dual eye tracking and pupillometry — which poses practical and financial constraints for large-scale deployment.
- Tasks contained only logical bugs and no syntax errors, so the forecaster has not been tested on open-ended or ambiguous programming work, and transfer to unsupervised pair work is untested.
## Connected Concepts

- [[adaptive-learning]]
- [[collaborative-learning]]
- [[feedback]]
- [[intelligent-tutoring]]
- [[metacognition]]
- [[multimodal]]
- [[pedagogical-agent]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[student-modeling]]

## Connected Articles

- [[ai-collaborative-learning-systematic-review]]
- [[clara-collaboration-literacy-dashboard]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[zerkouk-comprehensive-review-its-2025]]

## Citation

Golrang, A., Sharma, K., Dehaen, S., & Viberg, O. (2026). [*ProPACT: A Proactive AI-Driven Adaptive Collaborative Tutor for Pair Programming*](https://arxiv.org/abs/2605.02703).
