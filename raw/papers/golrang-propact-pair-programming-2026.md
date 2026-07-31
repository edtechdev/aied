---
source_url: https://arxiv.org/abs/2605.02703
ingested: 2026-05-07
sha256: 18018b6577be9ebdfeb70e2f1595582302bd341412de713dcab747029c0ea0ac
---

# ProPACT: A Proactive AI-Driven Adaptive Collaborative Tutor for Pair Programming

**Authors:** Anahita Golrang, Kshitij Sharma, Simon Dehaen, Olga Viberg
**Source:** arXiv:2605.02703
**Study Design:** Within-subjects experiment with 26 pair-programming dyads (52 CS/Engineering students)

---

## Core Innovation

ProPACT is an AI-driven adaptive tutor that **"treats collaboration itself as the object of instruction."** Unlike individual-centric, reactive systems, it models *dyadic* learning states and intervenes *before* breakdowns occur.

> "ProPACT constructs a multimodal dyadic learner model based on Joint Visual Attention (JVA), Joint Mental Effort (JME), and individual mental effort, and employs an XGBoost-based forecasting model to predict emerging sub-optimal collaboration states up to 30 seconds in advance."

---

## Research Questions

- **RQ1:** How does ProPACT affect task performance and code quality in pair programming?
- **RQ2:** How does ProPACT influence dyadic regulation processes (JVA, JME, ME)?

---

## System Architecture

### Multimodal Dyadic Learner Model

| Signal | Description | Measurement |
|--------|-------------|-------------|
| **JVA** (Joint Visual Attention) | Shared attentional focus on task-relevant objects | Cosine similarity of gaze distributions over **30-second windows**; gaze mapped to a persistent grid aligned to code structure |
| **ME** (Mental Effort) | Individual cognitive load | **Index of Pupillary Activity (IPA)** from pupil-diameter fluctuations over **10-second, non-overlapping windows** |
| **JME** (Joint Mental Effort) | Synchrony/balance of partners' cognitive engagement | Cross-recurrence quantification of synchronized ME signals |

**Discretization Rule:** All signals normalized against resting baseline and binned using a **±2SD criterion**:
- **High:** > +2SD
- **Average:** within ±2SD
- **Low:** < −2SD

### Forecasting & Decision Logic

- **Hybrid-AI framework:** XGBoost predicts JVA, JME, and ME over a **30-second horizon**; predictions are discretized and fed into a rule-based pedagogical policy.
- **Policy principle:** Prioritizes **minimally intrusive** scaffolds; escalates support only when forecasted breakdown risk increases.

### Adaptive Feedback Hierarchy

| ID | Feedback Type | Trigger Condition | Function |
|----|---------------|-------------------|----------|
| **A1** | Do nothing (Desired state) | `MEs=AVG` & `JVA=H` & `JME=H` | Maintain productive collaboration; fade support |
| **A2** | GitHub Copilot | `MEs=HH` or `LL`, or (`MEs=HL` and `JVA=L`) | Temporary AI autocomplete to relieve emerging cognitive strain |
| **A3** | Gaze-awareness tool | `JVA=Low` | Translucent colored rectangle highlighting partner's gaze region (~9 lines of code) |
| **A4** | Dialogue prompt | `JME=Low` | Unobtrusive editor prompt encouraging brief dialogue to re-align mental effort |
| **A5** | Task-based hint | Both `MEs=High` (last resort) | Directive hint targeting relevant code regions; used only when lower-intensity scaffolds fail and sustained extreme effort is detected |

---

## Empirical Evaluation

### Participants & Procedure
- **26 dyads** (19 female, 33 male); undergraduate/master's CS or engineering students
- Within-subjects design: **Control** (no feedback) vs. **ProPACT feedback** (order balanced)
- Tasks contained **only logical bugs**; no syntax errors
- Dual eye trackers individually calibrated

### Key Results

No significant order effects.

Proactive feedback significantly outperformed control:

| Measure | Statistic | Outcome |
|---------|-----------|---------|
| **Debugging success** | *t*[49.96] = **−13.51**, *p* < .0001 | Higher in feedback condition |
| **Debugging time on task** | *t*[44.70] = **4.39**, *p* < .0001 | Lower in feedback condition (more efficient) |
| **Feedback uptake** | *F*[49.81] = **−17.69**, *p* < .0001 | Higher in feedback condition |

> "Performance gains were accompanied by increased feedback uptake, indicating active engagement with the provided support."

Post-intervention gains in JVA and JME suggest improved collaborative regulation beyond task completion.

> **Note:** This extraction was truncated by the web extraction service.
