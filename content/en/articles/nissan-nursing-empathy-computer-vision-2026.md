---
title: "Detecting Nursing Students' Empathy in Video-Recorded Simulation Using Computer Vision"
created: "2026-11-10T20:45:00-05:00"
updated: "2026-11-10T20:45:00-05:00"
type: article
pedagogy: [professional-training]
technology: [machine-learning, sensor-and-gaze-analytics, simulation]
assessment: [educational-measurement, assessment-validity, self-report-measures]
sources: ['raw/papers/nissan-nursing-empathy-computer-vision-2026.md']
source_url: "https://doi.org/10.1016/j.ecns.2025.101876"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [instrument development]
methods: [quantitative-research]
discipline: [nursing education]
level: [higher ed]
audience: [medical educators, assessment designers, researchers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Nissan and colleagues (2026) tested whether computer-vision algorithms can score the [[empathy]] that nursing students display in video-recorded [[simulation|simulation]], comparing algorithm outputs with two trained observers for 37 second- to fourth-year students at Ben-Gurion University. Observer-rated body gestures correlated strongly with the Empathy in Response Inventory total (r = 0.41 to 0.63), and the physical-contact algorithm agreed moderately with four observer measures (0.46 to 0.54, p < .01). Two algorithms failed: eye contact and heatmap showed no significant association with observer ratings, and the smile algorithm correlated *negatively* with three observer measures (−0.33 to −0.37) and with total empathy (r = −0.322). The authors read the smile result as evidence that a facial action without clinical context can mean the opposite of empathy — a patient in pain, a nervous student — which is the paper's most useful contribution.

**Relevance to [[ai-education|AI in Education]]:** Automated [[educational-measurement|measurement]] of empathy would make [[simulation|simulation]]-based assessment cheaper and more scalable, but this study shows the construct and the signal diverging in ways that matter for high-stakes use. It belongs with the [[sensor-and-gaze-analytics|sensor and gaze analytics]] literature on the inferential gap between behavior and internal state.

## Key Findings

- **Observers agree with each other and with the construct.** The 12-item Empathy in Response Inventory (cognitive, affective and motivational subscales, 1–7) had α = 0.91, and the six-gesture observer scale had α = 0.93.
- **Physical contact is the one algorithm that tracked observer judgment** — moderate positive correlations of 0.46 to 0.54 with four observer-reported measures (p < .01).
- **Smiling was inversely related to rated empathy.** The smile algorithm correlated −0.33 to −0.37 with three observer measures and r = −0.322 with total empathy (p = .05).
- **Eye contact and heatmap detection did not work.** Neither algorithm showed a significant association with observer assessments of body gestures.
- **The sample was small and homogenous.** 37 students, 94.6% women, mean age 25.75, one simulation center, one scenario.

## How the study was run

Participants completed a 10–15 minute scenario with a low-fidelity mannequin playing an 80-year-old woman who had fallen at home with a suspected fracture; the script included discomfort and a need for empathic communication. Each session was recorded from two ceiling-mounted cameras and one frontal view.

Two faculty observers independently rated empathy with the Empathy in Response Inventory and rated six body gestures — eye contact, gentle touch, facial expressions, leaning forward, closeness, open body position — on a five-point scale. The computer-vision pipeline used OpenCV and MediaPipe: gaze was estimated from eye and head-pose geometry, with eye contact counted only when the gaze vector intersected the patient's head across consecutive frames; smiling was detected from facial action; physical contact and closeness were detected from body position; a heatmap summarized movement across a ceiling camera.

## Why the smile result matters

The observers were watching a patient in pain, without family present. In that context a smile can be a nervous reaction, a social formality, or a mismatch with the situation, and trained raters read it as such. The algorithm read the same facial configuration as a positive affective signal. This is the clearest demonstration in the paper that [[assessment-validity|validity]] is a property of the interpretation, not the sensor: the same pixels support opposite conclusions depending on what the rater knows about the encounter.

The eye-contact failure is a different problem. The algorithm measured gaze geometry, but observers were judging whether the student was attending to the patient in a meaningful way, which includes posture, speech and timing. A binary "looking at the head region" is a much thinner construct than "eye contact" as a communication behavior.

## What this means for practice

- **Use vision models as a second reader, not an umpire.** Physical contact detection is the strongest candidate for triage or feedback, but every algorithm here needs human calibration before it touches a grade.
- **Report the context the model cannot see.** A smile during a breaking-bad-news scenario and a smile during a greeting are not the same event, and a model without scenario context will conflate them.
- **Validate against your own raters.** The pattern of agreement and disagreement is setting-specific; a pipeline validated in one simulation center should not be assumed to transfer.
- **Prefer behavioral counts for formative feedback.** "You maintained close body position for most of the encounter" is defensible from the video; a single "empathy score" is not.

## Limitations

- Observational design with no experimental manipulation, so nothing here shows that algorithm feedback improves empathy.
- One scenario, one mannequin, one institution, and a sample that is 94.6% women, limiting generalization across cultures, scenarios and learner populations.
- The algorithms detect visible behavior only; the paper does not report inter-rater reliability for the algorithm outputs across repeated runs.
- Empathy is operationalized through observer ratings and body gestures, which are proxies for a construct that also includes verbal and cognitive components.
- The authors call for refinement and validation before deployment and describe the work as a feasibility study.

## Citation

Nissan, S., Lahan, T., Fire, M., Rappoport, N., Cohen, O., & Avraham, R. (2026). [*Detecting nursing students' empathy in video-recorded simulation using computer vision approach*](https://doi.org/10.1016/j.ecns.2025.101876). Clinical Simulation in Nursing, 110, 101876.
