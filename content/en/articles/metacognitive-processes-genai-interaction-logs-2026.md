---
title: "Mapping the Distribution and Depth of Metacognitive Processes in Generative AI-Assisted Learning: Evidence from Interaction Logs and Concurrent Think-Aloud Protocols"
created: "2026-09-30T15:10:00-04:00"
updated: "2026-09-30T15:10:00-04:00"
type: article
sources: ['raw/papers/10.3390_bs16081365.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [user study]
discipline: [learning sciences]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, researchers]
foundations: [human-ai-collaboration, limitations-in-aied-research]
pedagogy: [metacognition, self-regulated-learning, student-ai-interaction, scaffolding]
technology: [generative-ai, llm, learning-analytics]
assessment: [process-oriented-assessment, evaluative-judgment, educational-measurement]
methods: [mixed-methods-research, qualitative-research, research-methods-aied]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Li and Liu ran a descriptive, exploratory single-group study in which 79 undergraduates from 11 majors completed a 90 min instructional-design task with DeepSeek-V3 support, and applied the same two-dimensional rubric to two records of the same session: interaction logs and concurrent think-aloud speech. Each retained semantic unit received one primary operational category (planning, monitoring, or regulation) and one evidence-depth label (implicit, awareness, strategic, or reflective). In both records regulation was the most frequent primary label and monitoring the least, and depth ratings clustered at awareness and strategic. The cross-source contrasts were category-specific rather than uniform: higher-depth evidence was more common in think-aloud units for [[metacognition|monitoring]] and planning but more common in interaction-log units for regulation. The most important qualification is that these are descriptive percentage-point contrasts among retained instances, which are nested within participants and paired within individuals, so no participant-level or causal claim follows.

## Key Findings

- **Regulation was the most frequent primary label and monitoring the least, in both records.** The interaction logs held 274 retained instances (3.47 per participant): regulation 114 (41.6%), planning 97 (35.4%), monitoring 63 (23.0%). The think-aloud record held 193 retained instances (M = 2.44 per participant): regulation 76 (39.4%), planning 69 (35.7%), monitoring 48 (24.9%).
- **The pooled category profiles were similar but only descriptively so.** Regulation and planning together accounted for 77.0% of interaction-log instances and 75.1% of think-aloud instances, with monitoring at 23.0% and 24.9% respectively; the authors report no correlation or significance test because three compositional proportions that sum to one cannot be a valid convergence test.
- **Evidence-depth ratings concentrated at awareness and strategic in both sources,** while implicit and reflective evidence was comparatively uncommon. The rubric rates the explicitness and integration of evidence in a unit, not learners' latent ability.
- **Monitoring showed the largest cross-source depth contrast.** Combined strategic and reflective evidence represented 41.3% of interaction-log monitoring instances and 66.7% of think-aloud monitoring instances, 25.4 percentage points higher in the think-aloud record; reflective monitoring was rare in both.
- **Planning leaned the same way, less sharply.** Higher-depth evidence represented 49.5% of interaction-log planning instances and 59.4% of think-aloud planning instances, 9.9 percentage points higher in the think-aloud record.
- **Regulation reversed the direction.** Higher-depth evidence represented 69.3% of interaction-log regulation instances and 55.3% of think-aloud regulation instances, 14.0 percentage points higher in the interaction-log record.
- **Category assignment was consistent.** Two coders double-coded a random 20% subsample, reaching Cohen's κ = 0.90 (interaction logs) and 0.87 (think-aloud) for process category, and κ = 0.86 and 0.85 for evidence depth; separate unitization reliability was not available.

## How the two records were coded

The study used one course at one institution, a single-group task-centric design with no manipulated condition. Before the task, participants completed a 10 min think-aloud training period and a 5 min warm-up; the researcher prompted "Please keep talking" only after more than 5 s of silence. Interaction logs preserved participant-generated prompts and revisions; the think-aloud transcripts preserved concurrent speech. Unitization preceded coding: a log unit was a prompt-response exchange or separable clause serving one metacognitive function, and a verbal unit was a purposeful utterance or clause expressing a goal, judgment, procedure, or adjustment. Planning was operationalized as prospective control, monitoring as evaluative checking without an enacted change, and regulation as an observable modification after evaluation or feedback — so the three labels are mutually exclusive coding categories, not independent components of metacognition. The learner, not the GenAI system, is treated as the metacognitive agent throughout.

## What the logs and the talk each made visible

The central contribution is measurement, not a ranking of categories. A learner can evaluate an output silently, verbalize a planned revision without enacting it, or revise an artifact with little accompanying speech, so a [[generative-ai]] interaction log and a concurrent verbal report leave different traces. The data are consistent with that complementarity: think-aloud speech can hold a prospective decomposition or an evaluative criterion that never reaches the next prompt, whereas the log can preserve a concise enacted revision whose rationale is never spoken. The paper explicitly declines to select a psychological mechanism — think-aloud reactivity, unitization differences, the instruction to read AI responses aloud, and possible verbatim model reading in the transcript are all live alternatives, and cognitive load and [[trust-calibration]] were not measured. It also declines to call the smaller monitoring share a monitoring deficit, because there was no non-GenAI comparison and no theory-based reference distribution. The authors frame a reciprocal monitoring-control scaffold — state a criterion, compare output against it, justify an adaptation, then re-monitor — as a design hypothesis to be tested, not an established recommendation.

## What this means for practice

- **Read process evidence as channel-conditional, not as deficiency.** A silent evaluation or an unspoken revision rationale is invisible in one record; the absence of evidence in one channel is not evidence the process did not occur. Combine low-burden interaction traces with brief learner-authored checkpoints rather than treating either record as the criterion.
- **Ask for the criterion before generation and a judgment after.** Invite learners to state a goal or evaluative criterion before [[prompt-engineering|prompting]], record a concise judgment after inspecting the output, and connect any revision to that judgment. This makes the monitoring-control link visible while leaving learners responsible for accepting, rejecting, or revising model output.
- **Fade the checkpoints on a [[scaffolding|ZPD-informed]] schedule.** Adjust or gradually reduce prompt frequency and specificity as learners demonstrate they can articulate and apply their own criteria, and treat the checkpoints as design propositions rather than prescriptions, since the task explicitly encouraged planning and revision.
- **For formative feedback, read the sequence, not the prevalence.** The useful signal is the relation among temporally linked events: a logged revision with no stated rationale can prompt "explain the basis for this change," and a verbalized discrepancy with no action can prompt "decide whether adaptation is warranted."
- **Do not score process depth as proficiency.** The evidence-depth rubric classifies wording in a semantic unit; it is not a measure of learner ability, monitoring accuracy, [[ai-literacy|AI literacy]], or [[writing-education|writing quality]], and should not support automated proficiency scoring or surveillance.

## Limitations

- The design is observational and single-group, with no control condition, no learning-outcome measure, and no product-quality measure, so causal and efficacy claims are unwarranted.
- Coded instances are nested within participants and the two sources are paired within individuals, but the archived participant-by-category matrix was unavailable; cross-source results are therefore descriptive percentage-point contrasts among retained instances, with no inferential test and no confidence intervals.
- Concurrent verbalization may have changed processing, and participants were instructed to read AI responses aloud; the archived record does not establish whether verbatim model reading was systematically removed, so the verbal corpus cannot be treated as exclusively learner-generated cognition.
- The evidence-depth rubric is a task-adapted coding device whose [[assessment-validity|construct validity]] as a general scale is unestablished, and the sample came from one institution, one course, and one instructional-design task, with most participants majoring in Preschool or [[early-childhood-elementary-ai-education|Primary Education]] and generally favorable GenAI attitudes, limiting transferability.

## Citation

Li, S., & Liu, J. (2026). [Mapping the Distribution and Depth of Metacognitive Processes in Generative AI-Assisted Learning: Evidence from Interaction Logs and Concurrent Think-Aloud Protocols](https://doi.org/10.3390/bs16081365). *Behavioral Sciences*, 16(8), 1365.