---
title: 'PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions'
created: 2026-05-19
updated: 2026-05-19
type: concept
tags: [intelligent-tutoring, llm, teacher-role, faculty-development, edtech-platform, ai-literacy]
sources: [raw/papers/2605.16605.md]
confidence: high
---

# PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions

**Koyama, M., Xiao, R., & Stamper, J. (2026)** — Carnegie Mellon University. arXiv preprint.

📄 [Full text (arXiv)](https://arxiv.org/abs/2605.16605)

## Key Finding
Teachers virtually never test AI tutoring bots before student deployment; PromptDecipher enforces QA as a first-class activity by letting teachers edit bot responses directly.

## Synthesis
PromptDecipher addresses a critical gap in AI tutor deployment: teacher quality assurance. A formative study revealed that educators authoring AI tutoring chatbots virtually never systematically test them before student deployment — a finding with serious implications for [[ai-tutor-safety-harms]] and educational quality. The system shifts the authoring paradigm from abstract prompt writing to direct correction-based interaction: teachers edit undesirable bot responses in a live chat preview, and an automated pipeline analyzes the correction, proposes a system prompt rewrite, and validates across test scenarios. This bridges the [[teacher-role]] gap between classroom practitioner and AI system designer — a tension also explored in [[ai-tpack-teacher-multi-agent-workflow]], which found that effective AI integration requires systems thinking beyond simple tool use. PromptDecipher's QA enforcement resonates with the [[agentic-workflows-education]] paradigm of using AI to scaffold human roles. By embedding testing into the authoring workflow, the system also mitigates the kind of diagnostic failures identified in [[llm-tutoring-feedback-diagnosis-gap]], where LLMs struggle precisely where feedback matters most.

## Citation

**APA:** J, A.K.M.X.R.S. (2026). *PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions*. practice, however, teachers rarely fulfill these roles. https://arxiv.org/abs/2605.16605

## Related Pages
- [[concept-catalyst-engineering-scaffolds]]
