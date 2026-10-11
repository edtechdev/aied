---
title: Balancing teacher and student agency in co-orchestration tools for real-time dynamic pairing
created: "2026-10-10T18:36:00-04:00"
updated: "2026-10-10T18:36:00-04:00"
type: article
foundations: [agency]
technology: [intelligent-tutoring, knowledge-tracing]
pedagogy: [collaborative-learning, student-engagement, self-regulated-learning]
audience: [educational technology developers, software developers, researchers, instructional designers]
level: [k 12]
sources: ['raw/papers/yang-balancing-teacher-student-agency-2026.md']
confidence: high
research_method: [user study]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This paper maps how 17 teachers and 13 students want control distributed across a teacher-facing [[intelligent-tutoring|intelligent tutoring]] co-orchestration tool that dynamically pairs students for collaborative problem-solving. Using participatory speed dating (74 co-generated design ideas narrowed to 34 storyboarded hybrids, ranked by all 30 participants with verbalized reasoning), the authors build an agency design space along a teacher-dominated-to-student-dominated axis for seven [[teacher-role|orchestration]] challenges spanning before/during/after pairing. The headline finding is a *temporal gradient*: both stakeholder groups prefer strong teacher control in preparation and initiation, then progressively value hybrid and student control as the activity unfolds — full student control is never preferred by either group. Teachers and students align on hybrid control for content selection, monitoring, transitions, and evaluation, but *diverge* on pairing timing (teachers want more control; students want readiness signaling) and partner selection (the exact inverse — students trust teacher choice, teachers want student voice). The practical recommendation is stage-sensitive agency: structured teacher guidance early, progressively increasing [[agency|student autonomy]] later, with bounded student proposals validated by teacher-facing [[learning-analytics|analytics]] rather than free-form mid-activity override requests.

The theoretical contribution is treating teacher and student control as independent dimensions rather than a zero-sum trade-off (after Eshel & Kohavi 2003): hybrid control means *both* groups can exercise high control simultaneously. The empirical contribution is the design space itself — 32 of the 34 ideas mapped onto a challenge × agency grid, with Kendall's W agreement coefficients per group — which turns "balance agency" into a concrete set of ranked design options per decision point. Notably, several "obviously desirable" autonomy mechanisms (students rejecting partners, switching assignments) rank *last* for teachers and near-last for students, because both groups anticipate gaming and social rather than learning-driven choices. Conversely, "save progress and resume" is the strongest cross-group consensus — abrupt, teacher-timed stops were universally disliked. The design implications generalize beyond this tool: make upcoming actions visible to students (previews, countdowns, advance notice) to build agency grounded in anticipation rather than control; accept *structured, bounded* student input (partner constraints, readiness signals) rather than real-time override; and let system-generated collaboration data — not subjective ratings — anchor future pairing decisions, since both groups distrust rating-based systems (friends rate high; rivals rate low) while both trust objective statistics.

## Key findings

- **A temporal gradient in control preference.** Both groups preferred stronger teacher control in pre-pairing preparation (C1: "quiz for pairing" 1.7 students / "pairing rules" 2.5 teachers) and increasingly favored hybrid or student control in during- and post-collaboration stages (C4 content, C5 monitoring, C6 transitions, C7 evaluation all showed green hybrid bubbles).
- **Full student control was never preferred** by either group — the rightmost column of the design space is uniformly yellow. Student-initiated requests to change partners or assignments ranked last or near-last for both stakeholders, viewed as disruptive and gameable.
- **Cross-group alignment:** hybrid control for content selection (teachers: "Teacher proposes, students decide" 1.6; students: "Students propose, teacher decides" 1.83 — both hybrid), automated collaboration support (NPC help 2.0/1.7; keyword detection 1.5 teachers), and progress-preserving transitions ("Save progress and resume" 1.6/1.3).
- **The two divergences are mirror images.** Timing: teachers preferred "Teacher decides" (2.1) over student-decided timing, fearing chaos and schedule disruption; students preferred readiness self-signaling ("When students are ready" 1.2) to avoid rushing. Partners: students ranked "Teacher decides" first (1.9), citing teachers' knowledge of skills and friendship-distraction risks; teachers preferred "Teacher assigns, student chooses role" (2.2) — each group wanting the *other* to hold more control here.
- **Objective data over subjective ratings for evaluation.** Students' top choice was teacher pairing based on collaboration statistics (1.4); teachers preferred mutual rating (1.5); both ranked "students rate" last. Distrust of ratings was explicit: "students might rate their friends really high to be paired again, even if they won't be productive" (S7).
- **Teachers were the more unanimous group** in most challenges (Kendall's W teachers 0.424–0.748; students 0.108–0.702, with lowest agreement on C5 productivity monitoring), suggesting teachers share a coherent classroom-management prior that student preferences lack.
- **NPC/automated support filled a real gap.** Both groups valued NPC help as a backup when teachers are unavailable (shy students, teacher bandwidth), though both flagged overuse and effectiveness concerns.

## What this means for practice

- **For developers of teacher-facing orchestration tools:** don't offer a single control dial — offer *stage-dependent* defaults. Structure (teacher-led) for preparation and initiation; hybrid proposals for content, monitoring, transitions, and evaluation. The paper's design space is directly reusable as a feature-priority map.
- **Design for "agency by anticipation":** previews, countdowns, and advance notice of upcoming actions give students preparedness without handing them control — the consensus "save progress and resume" pattern (both groups' top choice) is the concrete instance.
- **Accept bounded proposals, not free override.** Student partner-constraints or readiness signals submitted *before* pairing, filtered through teacher-facing analytics, satisfy the student-voice demand teachers acknowledged while protecting classroom manageability.
- **Ground future pairing in system data, not ratings.** Both groups trusted objective collaboration statistics; both distrusted peer ratings as gameable. If ratings are collected, pair them with system data and teacher adjudication, never stand alone.
- **For researchers:** the PSD method (co-generate 74 ideas → curate 34 storyboards → rank + reason) is a transferable protocol for multi-stakeholder control questions in educational AI, and the agency spectrum × challenge-stage grid is a reusable visualization.

## Limitations

- Small, self-selected sample (17 teachers, 13 students; Phase 2 n=25) recruited via snowballing — not representative of districts, and participant motivation may skew toward tooling enthusiasts.
- All contexts are U.S.-based; the study's math-algebra tutoring ecosystem (MATHia + peer tutoring + BKT) is one specific configuration, and conclusions may not transfer to non-STEM or non-ITS domains.
- Storyboard-based evaluation (PSD) measures *stated preference* for designs, not enacted behavior in real classrooms; the paper explicitly notes regions of the design space (e.g., C1 with full student control) remain unmapped.
- Qualitative clustering is single-study with three coders; quantitative rankings are ordinal means without formal significance testing across groups — the alignment/divergence claims are descriptive.
- Audio-transcript accuracy of the Zoom caption pipeline was manually corrected, so coding depends on cleaned transcripts.

## Citation

Yang, K. B., Liu, M., Xu, L., Rummel, N., & Aleven, V. (2026). Balancing teacher and student agency: Co-orchestration tool design supporting real-time dynamic pairing. *Proceedings of the ACM on Human-Computer Interaction*, 10(6), Article CSCW054. https://doi.org/10.1145/3816902
