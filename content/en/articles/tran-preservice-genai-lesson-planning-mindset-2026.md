---
title: "Preparing preservice teachers for generative AI in lesson planning: a process mining study of AI mindset and tool-only training"
created: "2026-11-24T17:10:00-05:00"
updated: "2026-11-24T19:10:00-05:00"
published: "2026-11-24"
type: article
authors: ["Phuong Thi Hanh Tran", "Luna Huynh", "Thuy-An Bien", "Belle Dang", "Andy Nguyen"]
venue: "Journal of Digital Learning in Teacher Education 42(1), 16-32"
evidence_context: educational
foundations: [ai-literacy, teacher-role]
pedagogy: [metacognition, professional-training, scaffolding]
technology: [generative-ai, llm, learning-analytics]
assessment: [rubrics]
methods: [qualitative-research, mixed-methods-research]
discipline: [teacher education]
level: [higher ed]
audience: [faculty developers, instructional designers, researchers]
page_kind: [evaluation]
research_method: [quasi-experiment, thematic analysis]
sources: ["raw/papers/tran-preservice-genai-lesson-planning-mindset-2026.md"]
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

> **Synthesis:** Tran and colleagues (2026) randomly assigned 33 [[teacher-education|preservice teachers]] to two 120-minute courses, one combining an [[ai-literacy|AI mindset]] module with hands-on tool practice and one teaching the tools alone. Every participant then planned a lesson with [[generative-ai|generative AI]] during a timed 60-minute open-exam task while screen capture recorded each action. Process mining of 753 coded events separated the groups cleanly: the mindset group ran a Reflective Iterative workflow of prompting, reading and re-prompting, while the tools-only group ran a Linear Extraction workflow that copied output into a document and stopped. The reflective pattern accompanied higher lesson-plan scores, which the authors read as evidence that teacher preparation needs disposition and regulation training rather than software instruction alone.

*A quasi-experimental comparison of 33 preservice teachers at one Vietnamese university, using qualitative content analysis of screen recordings (two coders, Cohen's kappa = 0.89) plus artifact scoring on a researcher-developed TPACK-informed rubric. No follow-up and no classroom implementation.*

## Key Findings

- **Two patterns separated the groups.** The mindset group produced what the authors call Reflective Iterative workflows, cycling between prompt, read and edit. The tools-only group produced Linear Extraction workflows that treated generated text as a finished resource.
- **The mindset group kept returning to the model.** Almost every participant opened the tool first (94.1% of cases) and read generated text before using it (94.1%, n = 84). Participants went back to the model after reading 24 times and after editing 11 times.
- **The tools-only group read once and moved on.** Nearly all read output a single time (88.2% of cases, n = 40), then copied it (n = 74) and pasted it into a document (n = 58, 94.1% of cases). Only ten loops returned to the tool across the whole cohort.
- **More activity did not mean better work.** The tools-only group logged more events, 430 against 323, yet scored lower on the finished lesson plans.
- **Artifact scores differed modestly.** On a 0-24 [[rubrics|TPACK-informed rubric]], the mindset group averaged 17.69 against 15.59 for the tools-only group. The gap reached conventional statistical significance, yet the authors call it small and fragile.
- **The statistical margin is thin.** The authors flag the p-value as close to .05 and warn it may be sensitive to sample size and variability.
- **Behaviour was visible; reasoning was not.** Trace coding shows what participants did with the tools, not why they decided to do it.

## How the two groups worked

Each participant completed the same task: build a lesson plan using any [[llm|large language model]] tool of their choice in 60 minutes under open-exam conditions. Screen capture turned every action into a timestamped event, and two independent coders classified 753 events using a scheme adapted from earlier process-mining research on multi-tool writing. Calibration over 20% of the recordings reached Cohen's kappa = 0.89 before the remaining data were coded.

Group 1 received 120 minutes covering AI pedagogy, ethics, growth mindset and human-centered instructional design, grounded in TPACK and UNESCO's AI Competency Framework for Teachers. Group 2 received 120 minutes of tool practice: prompt crafting plus guided generation of lesson plans, videos, infographics, songs, rubrics and slides.

The contrast sits in the loops. Mindset-trained participants read the model's output, then revised the prompt or the content, then returned. Tools-only participants read, copied, pasted and edited inside the document. Secondary actions such as multimedia prompting (47.1% in Group 1, 82.4% in Group 2) appeared late in the former and without triggering further cycles in the latter.

## What this means for practice

- **Teach disposition alongside operation.** A tool demonstration leaves preservice teachers extracting output; adding an AI mindset module changed how they worked with the same tools.
- **Make evaluation part of the task, not a warning.** Require preservice teachers to read generated text out loud or annotate it before they may copy anything, since reading was the behavior that distinguished the stronger group.
- **Build regulation into the exercise.** Ask for a stated quality criterion and at least one revision cycle, so the plan cannot be finished on the first generation.
- **Score the design, not the artifact.** A TPACK-informed rubric surfaced differences that event counts hid, because the weaker group produced more actions and lower-quality plans.
- **Extend this to in-service development.** The authors propose scaling the same mindset-plus-tools design beyond initial teacher education.

## Limitations

- Thirty-three participants from a single teacher education program limit generalization.
- The 60-minute, time-constrained task reflects a controlled condition rather than authentic planning over weeks.
- The TPACK-informed rubric was researcher-developed and has not been externally validated, so scores are preliminary indicators.
- The significant difference is marginal (p = .042) and may be sensitive to sample size and variability.
- The design compares group-level patterns and does not test correlations between specific interaction features and lesson quality.
- Process mining captures behavior but not the reasoning behind it; the authors call for qualitative and longitudinal follow-up.

## Citation

Tran, P. T. H., Huynh, L., Bien, T.-A., Dang, B., & Nguyen, A. (2026). [Preparing preservice teachers for generative AI in lesson planning: a process mining study of AI mindset and tool-only training](https://doi.org/10.1080/21532974.2025.2583516). *Journal of Digital Learning in Teacher Education, 42*(1), 16-32.
