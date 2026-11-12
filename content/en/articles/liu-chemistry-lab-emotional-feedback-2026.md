---
title: "A study on the synergistic effects of teacher–student interaction patterns and an AI-based emotional feedback system"
created: "2026-11-12T09:30:00-05:00"
updated: "2026-11-12T09:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [quasi-experiment, thematic analysis]
evidence_context: educational
discipline: [chemistry education]
level: [secondary, middle school]
audience: [instructors, researchers]
sources: ['raw/papers/teacher-student-interaction-emotional-feedback-ai-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1893180"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers, links]
technology: [affective-computing, affective-tutoring]
pedagogy: [inquiry-based-learning, student-ai-interaction, student-engagement]
assessment: [feedback]
methods: [mixed-methods-research, quantitative-research]
---

> **Synthesis:** Two Grade 9 [[chemistry-education|chemistry]] classes in one secondary school in eastern China spent a 16-week semester working through the same [[inquiry-based-learning|inquiry-based]] laboratory sequence — oxygen preparation, electrolysis of water, titration among them. Only one class (n = 40) worked alongside an AI emotional [[feedback|feedback]] system that read facial expressions and vocal features and issued prompts when it detected distress; the other (n = 38) had its teacher alone. The design expected continuous affective monitoring to calm the room. It did not. Laboratory anxiety rose significantly in the AI-supported class (F = 4.60, p = 0.035) and stayed flat in the control class (F = 1.28, p = 0.261), producing a significant time × group interaction (F = 5.310, p = 0.024), while sense of achievement grew only in the control class (F = 7.92, p = 0.006) against no change under the system (F = 0.63, p = 0.430). Interviews trace the rise to decisional conflict between system prompts and teacher guidance. Two intact classes, self-reported emotion, no teacher data, and no randomization mean the contrast is between two classrooms, not two treatments.

## Key Findings

1. **An anxiety-reduction tool coincided with rising anxiety.** The experimental class's laboratory anxiety increased across the semester (F = 4.60, p = 0.035); the control class's did not move (F = 1.28, p = 0.261).
2. **Achievement diverged in the opposite direction.** Sense of achievement grew in the teacher-only class (F = 7.92, p = 0.006) and showed no significant change in the AI-supported class (F = 0.63, p = 0.430).
3. **Only two of seven emotions separated.** Enjoyment, interest, frustration, helplessness, and burnout produced no significant time × group interaction, and no time main effect reached significance for any of the seven.
4. **The gap opened during the intervention.** Pretest anxiety did not differ reliably between groups (F = 3.49, p = 0.065); posttest anxiety differed sharply (F = 22.11, p < 0.001).
5. **Students could not resolve conflicting advice.** The system offered regulation strategies while the teacher offered procedure, and with no decision rule students reported indecision, added [[cognitive-offloading|cognitive load]], and reduced enjoyment.
6. **Improvement was credited outward.** Students attributed progress to system prompts rather than to their own growing regulation skill, which the authors link to the flat achievement trajectory.
7. **Teacher interaction held procedural ground.** The control class outperformed on procedural compliance and the rigor of hands-on operations, which the authors read as face-to-face guidance raising perceived control.

## What the system actually did

The intervention hardware matters, because "AI emotional feedback" names many things. The teaching system combined an emotion module with integrated cameras and voice sensors (the authors report recognition accuracy of ≥89% and response latency under 0.5 s), standard glassware and digital probes matched to the national textbook, and a dual terminal: a teacher dashboard and a student touchscreen. Emotion was measured with the AEQ-Lab, a 35-item instrument on a 6-point scale with reported Cronbach's α from 0.92 to 0.94 and confirmatory fit of CFI = 0.93, RMSEA = 0.06.

The framing is [[theories-and-frameworks|Control-Value Theory]]: achievement emotions follow from perceived control over the task and perceived value of it. The authors propose a dual-pathway model, "technology-enabled support" and "emotion-enhanced engagement," and argue the division of labor should put [[multimodal|continuous affective monitoring]] in the machine while conceptual explanation, critical thinking facilitation, and empathic [[scaffolding]] stay with the teacher. That division is the design claim the results stress-test, and the stress shows at the seam: the system supplied affect information without supplying the authority to act on it.

## Why the anxiety went up

The mechanism the interviews support is decisional conflict rather than detection failure. One student put it plainly: the system promptly flags excessive anxiety and offers concrete regulation suggestions, but the student sometimes cannot tell whether to follow the system's recommendation or the teacher's guidance, "leading to indecision." The authors read this as low agentic control — no criteria told students which signal governed — and note that the conflict raises cognitive load even for students who value the experiment highly.

Control-Value Theory does the explanatory work. High task value combined with threatened or uncertain control predicts elevated [[anxiety-and-stress|anxiety]] and weak achievement emotion, which is exactly the observed pattern. The authors add expectation inflation: if AI assistance is present, students may assume outcomes should be better, and may worry about reproducing results later in an AI-free assessment. Students also reported being overwhelmed by technical terminology and by uncertainty about how instructors would grade AI-assisted work. None of this requires the recognition model to be inaccurate; accurate detection can still leave a learner worse off when the response to detection is ambiguous.

## What the teacher supplied that the dashboard did not

Control-class interviews describe a different configuration of the same inquiry curriculum. Students emphasized step-by-step procedural instruction, thorough explanation of errors, and follow-up questions contingent on their real-time performance, and they connected that clarity to a sense of agency — one said explicit error identification made the approach "far more efficient than trial-and-error learning." Another described accepting stern criticism because the teacher's sustained attention conveyed genuine investment, which reframed evaluative input as support rather than judgment.

The authors interpret this through the same theory: clear standards, scaffolded real-time guidance, and recognition of effort raise perceived control, while interpersonal feedback affirms the value of the task and the learner's contribution and so supports internal attribution. That attribution is the hinge. When students credit their own effort and the teacher's guidance, [[self-efficacy]] and achievement emotion consolidate; when they credit a system, the same improvement does not accumulate into perceived competence. The control class's advantage in procedural compliance follows: direct affective transmission plus actionable correction keeps operational focus on the task rather than on adjudicating advice.

## What the null results tell you

Five of the seven measured emotions did not move at all: enjoyment, interest, frustration, helplessness, and burnout produced no significant interaction, and no main effect of time reached significance for any emotion. The authors flag the divergence from studies reporting that [[generative-ai|generative AI]] raises enjoyment and lowers boredom, and explain it by task type — collaborative programming versus high-stakes hands-on laboratory work with safety risk and practical-examination pressure.

Their reading is that a semester-long [[learning-design|instructional intervention]] shifts emotions tied to momentary performance appraisal, namely achievement and anxiety, while leaving the broader affective tone of a chemistry course largely intact. That bounds what any affect-aware system can be expected to deliver: if [[student-engagement|engagement]] and interest sit on slower-moving foundations, a dashboard targeting in-the-moment distress addresses a narrow slice of the affective field — and the slice it addressed here moved the wrong way.

## What this means for practice

- **Instructors.** Decide in advance, and tell students, whose signal governs when the system's regulation advice and your procedural instruction conflict; the documented harm here came from two authorities and no tie-break rule.
- **Instructors.** Keep the interpretive work with the person who can also explain the chemistry: students valued immediate face-to-face correction over system commentary, and the control class's advantage was in procedural rigor.
- **Faculty developers.** Train teachers on the interpretive logic and functional boundaries of affect feedback before deployment, since the authors' conclusion is that the system should be auxiliary and that boundary clarity is a training problem, not a software one.
- **Administrators.** Do not procure affect recognition on the promise that it reduces [[anxiety-and-stress|anxiety]]; recognition accuracy of ≥89% and sub-second latency coexisted with rising anxiety, so accuracy is not the binding constraint.
- **Researchers.** Report the teacher's side of a [[human-ai-collaboration|human-AI]] arrangement. Here every teacher-related remark came from students, and no teacher interview protocol was planned or conducted.

## Limitations

- Assignment was by intact class: two parallel Grade 9 classes from one key secondary school in eastern China, 40 and 38 students aged 14–15, with baseline equivalence asserted from pretest t-tests (p > 0.05) rather than randomization, so class, teacher, and timetable are confounded with condition.
- The intervention spanned one semester and the authors name that horizon as a limit on effect stability; there is no follow-up after it ended.
- Emotion data are primarily [[self-report-measures|self-report]] from the AEQ-Lab. Video recordings were collected but, in the authors' words, used only for observational logging — formal coded behavioral indicators were not extracted for statistical analysis.
- The qualitative strand rests on 16 students, eight per group, purposively sampled and interviewed once after the intervention (intercoder κ = 0.86), so the mechanism account is a post-hoc reading of a small subsample.
- No teacher was interviewed or surveyed; the paper states explicitly that all teacher-related remarks are students' reported perceptions of teacher behavior, which leaves the teacher's experience of operating the dashboard unmeasured.
- Only two instructional models were compared, with no variation in system design, so the study cannot say whether a different interface or a narrower affect scope would have avoided the anxiety increase.

## Citation

Liu, H.-X., Li, J., & Zhang, Y. (2026). [*A study on the synergistic effects of teacher–student interaction patterns and an AI-based emotional feedback system in secondary school chemistry laboratory classes: an intervention experiment grounded in inquiry-based instruction*](https://doi.org/10.3389/feduc.2026.1893180). *Frontiers in Education*, 11, 1893180.
