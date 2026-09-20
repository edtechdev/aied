---
title: "DebugTracker: Lightweight Process Evidence for Classroom Debugging"
created: "2026-07-08T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
technology: [intelligent-tutoring, learning-analytics]
assessment: [feedback, formative-assessment]
stakeholders: [student-experience]
research_method: [system development]
discipline: [cs education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2607.05871.md']
confidence: high
---

> **Synthesis:** Debugging exercises are usually graded from final code and test outcomes, which hide *how* students reproduced failures, formed hypotheses, inspected evidence, edited code, and verified fixes. The authors present **DebugTracker**, a Visual Studio Code extension that records lightweight debugging-process evidence for classroom tasks. It separates uncoached Evaluation Mode traces from coached Training Mode traces, stores append-only JSONL events, and exports timeline and Markdown reports for [[human-in-the-loop-ai|human review]], capturing test commands, debugger metadata, student checkpoints, source snapshots, optional image evidence, human labels, and optional AI-assisted practice feedback. The largely language-agnostic prototype was validated across Python, TypeScript, and Java with 16 automated checks and an 11-case manual trial matrix spanning packaged VSIX installation on three operating systems.

- **Process over product:** Surfaces the hidden debugging workflow, moving assessment beyond final artifacts toward [[formative-assessment]] of process.
- **Coached vs uncoached modes:** Distinguishes Training from Evaluation traces, enabling differentiation of guidance effects in [[programming-its]].
- **Lightweight, language-agnostic capture:** VS Code-standard mechanisms reduce instructor setup burden, supporting [[cs-education]] at scale.
- **AI-assisted practice feedback:** Optional automated feedback loops tie into [[feedback|Feedback Loop]] [[research-methods-aied|research]].
- **Learning analytics:** Append-only event logs feed [[learning-analytics]] on how students debug, informing [[student-experience]] design.

## What this means for practice

- **Instructors.** Separate coached practice from graded work explicitly: Training Mode adds process prompts and hints, while Evaluation Mode disables prompts, solution hints, and after-session feedback and marks its reports as assessment traces.
- **Instructors.** Grade from the exported timeline and Markdown report instead of final code alone, so the reproduce–observe–hypothesize–edit–verify chain is visible.
- **Instructors.** Require a checkpoint at each stage — a timestamped failure observation, hypothesis, or verification note — since those checkpoints are what make the process reviewable.
- **Researchers.** Use the append-only JSONL events for [[learning-analytics]] on how students debug, without imposing a single prescribed workflow.
- **Designers.** Keep capture task-scoped and privacy-conscious: DebugTracker records task-relevant metadata rather than full keystroke replay and installs from a VSIX with no extra services.

## Limitations

- Validation covers implementation correctness only: 16 automated checks and an 11-case manual trial matrix over Python, TypeScript, and Java, plus packaged VSIX installation on three operating systems.
- The authors state that this validation does not yet demonstrate usefulness in a real classroom; the study measuring review time, inter-rater agreement, and feedback specificity is planned, not reported.
- The three language tasks deliberately share one intended bug, so the cross-language evidence comes from a single debugging chain.
- Debugger evidence depends on the relevant VS Code language extension, so capture is not fully language-agnostic.

## Connected Concepts

- [[formative-assessment]]
- [[cs-education]]
- [[feedback]]
- [[learning-analytics]]
- [[student-experience]]
- [[computational-thinking]]

## Connected Articles

- [[programming-its]]

## Citation

Liu, J., Yao, X., Zhang, Z., & Tian, Y. (2026). [DebugTracker: Lightweight Process Evidence for Classroom Debugging](https://arxiv.org/abs/2607.05871).
