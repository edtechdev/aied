---
title: "MindCopilot: Towards Formalizing and Evaluating Granular Human-LLM Co-Writing"
created: 2026-05-25
updated: 2026-05-25
type: article
tags: [feedback-loop, higher-ed, human-in-the-loop, llm, writing-education, human-in-the-loop-ai]
sources: ['raw/papers/2605.23535.md']
confidence: high
---

> **Youqing Fang, Yinhao Tang, Yanan Sun, Jiangning Liu, Ziyi Wang, Xun Zhao, Bin Liu, Weiming Zhang, Kuikun Liu, Wenwei Zhang, Kai Chen (2026)** — University of Science and Technology of China / Shanghai AI Laboratory. *IJCAI 2026*.

MindCopilot introduces a formal framework for evaluating human-LLM co-writing that shifts from output-only metrics (BLEU, ROUGE) to **interaction-aware evaluation**. The paper models co-writing as a **Human-in-the-Loop Markov Decision Process (HiL-MDP)**, where writing is a sequence of granular decisions: accept, edit, or reject each AI suggestion. The **Co-Writing Fidelity Suite** introduces two novel metrics — **Hierarchical Acceptance Rate** (quantifying acceptance across granularity levels) and **Knowledge-aware Editing Distance** (measuring cognitive effort of editing suggestions). Evaluated across 1,688 queries from 16 writing domains, with a 30-participant validation study.

For [[writing-education]], this represents a paradigm shift. Traditional automated writing evaluation focuses on final text quality, missing the process-level decisions that constitute real learning. The HiL-MDP framework aligns with process-oriented writing pedagogy — capturing where students accept, modify, or reject AI suggestions provides rich diagnostic information beyond what a final essay grade reveals. The work connects to [[cyberscholar-genai-writing-feedback]] and [[structured-llm-feedback-programming]] by establishing that interaction structure (when/how suggestions appear) significantly affects user behavior. For [[ai-peer-feedback-systems]], the acceptance/editing metrics offer a template for evaluating collaborative feedback workflows. Accepted to IJCAI 2026, this work bridges [[human-in-the-loop-ai]] theory with practical writing tool design, advancing [[llm]]-based educational technology beyond static quality assessment toward dynamic interaction modeling.

## Connected Concepts

- [[human-in-the-loop-ai]]
- [[llm]]
- [[writing-education]]

- [[higher-ed]]
## Connected Articles

- [[ai-peer-feedback-systems]] — AI Peer Feedback Systems
- [[cyberscholar-genai-writing-feedback]] — Generative AI Feedback, English Writing and Teacher Rubrics: A Multiple-Case Study of CyberScholar
- [[humanlike-ai-collaborative-writing]] — It Felt a Bit Eerie": Exploring Humanlike Interactions During Collaborative Writing with an Artificial Agent
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis

## Citation

Youqing Fang, Yinhao Tang, Yanan Sun, Jiangning Liu, Ziyi Wang, Xun Zhao, Bin Liu, Weiming Zhang, Kuikun Liu, Wenwei Zhang, Kai Chen (2026). [MindCopilot: Towards Formalizing and Evaluating Granular Human-LLM Co-Writing](https://arxiv.org/abs/2605.23535). arXiv:2605.23535. IJCAI 2026. - [[humanlike-ai-collaborative-writing]] — Anthropomorphic design choices amplify both benefits and costs of AI co-writing
