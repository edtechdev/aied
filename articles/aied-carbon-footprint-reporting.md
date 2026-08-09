---
title: "The Environmental Cost of LLMs in AIED: Reporting and Practices"
created: 2026-06-11
updated: 2026-06-11
type: article
tags: [llm, generative-ai, efficacy-study, policy-maker, privacy, ethics, open-source, ai-education]
sources: ['raw/papers/2606.11215.md']
confidence: high
---

> **Sabrina C. Eimler, Lukas Erle, Daniel Flood, Aditi Haiman, Luca Häckert, André Helgert, Lachlan McGinness, Büsra Yapici**

**Sabrina C. Eimler, Lukas Erle, Daniel Flood, Aditi Haiman, Luca Häckert, André Helgert, Lachlan McGinness, Büsra Yapici**

## Summary

LLM usage has become pervasive in the [[ai-k12-evidence-base|AIED]] community, but the computational and environmental costs of deploying these models remain almost entirely unreported. This paper systematically reviews the AIED 2025 conference proceedings and finds that while most projects use LLMs, nearly none report computational resources or discuss environmental impacts as an ethical concern.

## Key Findings

- **Widespread usage, invisible costs:** A review of all AIED 2025 conference papers reveals an "LLM adoption without disclosure" pattern — most projects use LLMs, but fewer than a handful report resource consumption or carbon footprint.
- **No standardised reporting:** There is no established procedure in the AIED community for measuring or disclosing the computational expense or environmental cost of LLM-based systems.
- **Open-source methodology proposed:** The paper introduces a standardised, open-source method with two components:
  1. **Software tools** for measuring carbon footprint on both local and cloud hardware.
  2. **An easy-to-use formula** for estimating computational expense of frontier LLMs, even when exact parameter counts are unknown (common with proprietary models).
- **Ethical imperative:** The paper argues that failing to report environmental costs is itself an ethical concern — aligning with broader calls for [[ai-tutor-safety-harms|responsible AI]] and [[principled-ai-education|transparency]] in educational technology.

## Implications for AIED

### For Researchers
- Adopt the proposed measurement tools to include carbon footprint alongside performance metrics in future publications.
- Conferences should consider requiring environmental impact disclosure in review checklists, similar to ethics statements.

### For Developers
- When deploying LLM-based educational tools, quantify and report computational expense so institutions can factor environmental costs into procurement decisions.
- Consider efficiency-accuracy tradeoffs: smaller, fine-tuned models may achieve comparable educational outcomes at a fraction of the environmental cost.

### Connection to Broader AIED Themes
- The lack of reporting parallels the [[ground-truth-reliability-aied|ground truth reliability crisis]] in AIED — in both cases, essential contextual information goes unreported, undermining the field's ability to aggregate evidence and make informed decisions.
- The [[ai-tutor-safety-harms|ethics of AI in education]] must expand beyond bias and privacy to include environmental sustainability.
- Institutional [[ai-k12-evidence-base|adoption decisions]] should weigh environmental costs alongside learning gains and implementation costs.

## Connected Articles

- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[educational-llm-alignment]] — Educational LLM Alignment
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education
- [[principled-ai-education]] — Principled AI in Education
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams

## Citation

Eimler, S. C., Erle, L., Flood, D., Haiman, A., Häckert, L., Helgert, A., McGinness, L., & Yapici, B. (2026). [The Environmental Cost of LLMs in AIED: Reporting and Practices](https://arxiv.org/abs/2606.11215). arXiv:2606.11215.
