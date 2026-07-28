---
title: "DebugTracker: Lightweight Process Evidence for Classroom Debugging"
created: 2026-07-08
updated: 2026-07-08
type: concept
tags: [programming-its, learning-analytics, formative-assessment, cs-education, higher-ed, feedback-loop]
sources: [raw/papers/2607.05871.md]
confidence: high
---

# DebugTracker: Lightweight Process Evidence for Classroom Debugging

**Jiatong Liu et al. (2026)** — The University of Hong Kong. arXiv.

📄 [Full text (arXiv)](https://arxiv.org/abs/2607.05871)

Debugging exercises are usually graded from final code and test outcomes, which hide *how* students reproduced failures, formed hypotheses, inspected evidence, edited code, and verified fixes. The authors present **DebugTracker**, a Visual Studio Code extension that records lightweight debugging-process evidence for classroom tasks. It separates uncoached Evaluation Mode traces from coached Training Mode traces, stores append-only JSONL events, and exports timeline and Markdown reports for human review, capturing test commands, debugger metadata, student checkpoints, source snapshots, optional image evidence, human labels, and optional AI-assisted practice feedback. The largely language-agnostic prototype was validated across Python, TypeScript, and Java with 16 automated checks and an 11-case manual trial matrix spanning packaged VSIX installation on three operating systems.

## Key Contributions
- **Process over product:** Surfaces the hidden debugging workflow, moving assessment beyond final artifacts toward [[formative-assessment]] of process.
- **Coached vs uncoached modes:** Distinguishes Training from Evaluation traces, enabling differentiation of guidance effects in [[programming-its]].
- **Lightweight, language-agnostic capture:** VS Code-standard mechanisms reduce instructor setup burden, supporting [[cs-education]] at scale.
- **AI-assisted practice feedback:** Optional automated feedback loops tie into [[feedback-loop]] research.
- **Learning analytics:** Append-only event logs feed [[learning-analytics]] on how students debug, informing [[student-experience]] design.

## Related Pages
- [[programming-its]] — Intelligent tutoring for programming and debugging
- [[learning-analytics]] — Process-evidence analytics from IDE events
- [[formative-assessment]] — Assessing debugging process not just outcomes
- [[cs-education]] — Classroom debugging instruction
- [[feedback-loop]] — AI-assisted practice feedback
- [[student-experience]] — How students experience debugging tasks

## Citation
**APA:** Liu, J., Yao, X., Zhang, Z., & Tian, Y. (2026). *DebugTracker: Lightweight Process Evidence for Classroom Debugging*. arXiv:2607.05871.
