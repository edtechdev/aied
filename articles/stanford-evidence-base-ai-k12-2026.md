---
title: "Stanford Evidence Base: AI in K-12 Education"
created: 2026-07-29
updated: 2026-07-29
type: article
tags: [k-12, ai-literacy, evidence, zone-of-proximal-development, k-12-ai-education, ai-tutoring, scaffolding]
sources: ['raw/papers/stanford-evidence-base-ai-k12-2026.md']
confidence: medium
---

> **Stanford Evidence Base: AI in K-12 Education** — A 2026 systematic review from the Stanford SCALE Initiative analyzing 818 papers on AI in K-12 education. The central finding is stark: only 20 studies provide strong causal evidence, and zero high-quality causal studies examine U.S. K-12 student settings. The evidence that exists reveals a consistent pattern — AI improves performance during use but gains frequently fail to persist or transfer, and general-purpose AI tools can actively harm learning outcomes compared to pedagogically designed alternatives.

**Stanford SCALE Initiative, AI Hub for Education** — Published 2026. Analysis of repository spanning through October 2025.

## Key Findings

**The Evidence Gap.** Of 818 papers in the AI Hub Research Repository, only 20 met What Works Clearinghouse (2025) standards for strong causal inference (RCTs or quasi-experimental designs). Zero high-quality causal studies examine U.S. K-12 *student* settings; very few exist for U.S. K-12 *educators*. Most causal research is international, conducted in postsecondary settings, short-term (often single 20-minute sessions), and focused on immediate outcomes. The repository grew from 28 relevant papers in January 2023 to over 800 by October 2025, but methodological rigor has not kept pace with volume.

**Immediate Gains, Uncertain Transfer.** AI significantly improves performance *while students use it* — math proofs, programming, economics exams, physics, and argumentative writing all show gains during AI-supported practice. However, effects are mixed or negative when AI is removed. Bastani et al. (2025) found high schoolers using a general-purpose chatbot for math practice performed **~17% worse** on closed-book final exams than peers with no AI access, despite higher practice grades. Chen et al. (2025) found LLM-Tutor improved homework scores but did not improve unassisted exam scores. Lehmann et al. (2025) found general-purpose AI for programming increased topics covered but harmed understanding and widened achievement gaps for low-prior-knowledge students. Kosmyna et al. (2025) found AI essay assistance led to **83% of participants failing to recall a quote** from their own essay, versus 11% for non-AI users. This pattern — performance boost during use, learning loss after removal — is the central empirical finding of the review and directly implicates [[transfer-of-learning]] as the most critical open question in AI education research.

**Easier Doesn't Mean Better.** Students consistently report greater enjoyment and reduced cognitive burden when using AI tools. However, reduced effort can undermine deeper learning. Kreijkes et al. (2026) found retention improved only when AI use was paired with traditional strategies like note-taking. Stadler et al. (2024) found general-purpose AI reduced [[cognitive-load-theory|cognitive load]] but produced lower-quality reasoning and argumentation compared to traditional search. This aligns with [[desirable-difficulties]] research: making practice easier often harms long-term retention and transfer, even when it feels better in the moment.

**Pedagogical Design Matters.** The most actionable finding: tutoring-specific tools consistently outperform general-purpose chatbots. Bastani et al. found that a tutoring-specific chatbot with pedagogical guardrails (hints, step-by-step reasoning, refusal to give direct answers) mitigated the exam score drop, while general-purpose GPT Base *caused* it. This suggests that [[ai-tutoring]] effectiveness depends critically on pedagogical design, not just model capability. The review interprets findings through a learning science framework spanning [[zone-of-proximal-development]] (general-purpose AI may operate outside the ZPD by doing work for students), the expertise reversal effect (novices need guidance, experts need independence), and [[metacognition]] (AI completing tasks reduces opportunities for students to monitor their own understanding).

**Educator Evidence.** While the student-focused causal evidence is thin, the educator evidence base is even sparser. Very few high-quality studies examine how AI affects teacher practice, workload, or professional development — a gap that is particularly concerning given the rapid push to deploy AI tools in classrooms and the documented [[genai-can-harm-teaching-rct-2026|risks of AI harming teaching quality]].

## Implications for AI in Education

This review is a watershed document for the field. It establishes that the evidence base for AI in K-12 education is not merely thin — it is *absent* for the populations and contexts where deployment is most aggressively pursued (U.S. K-12 classrooms). The finding that zero high-quality causal studies exist for U.S. K-12 students should give pause to every district administrator, edtech vendor, and policy maker advocating for rapid AI adoption.

The consistent pattern of immediate gains without durable transfer challenges the prevailing assumption that AI assistance automatically improves learning. It suggests that many AI education tools may function as **performance prosthetics** — helping students complete tasks in the moment without building the underlying knowledge that enables independent performance later. This distinction between assisted performance and genuine learning is well-established in [[rct|RCT-based education research]] but has been largely overlooked in the AI education hype cycle.

The superiority of pedagogically designed tools over general-purpose AI is actionable: it implies that simply giving students access to ChatGPT or similar chatbots is not merely suboptimal but potentially harmful. Effective AI in education requires deliberate instructional design — [[scaffolding]], [[zone-of-proximal-development|ZPD]]-aligned support, refusal to bypass student thinking, and integration with established learning activities. This connects to broader work on [[ai-pedagogical-orientation]] and the growing recognition that [[access-not-enough-ai-tutoring-2026|access to AI tutoring is not enough]] without thoughtful pedagogical integration.

For the research community, the review functions as both a wake-up call and a roadmap. It identifies urgent priorities: long-term studies with delayed post-tests, research in authentic U.S. K-12 settings, studies of educator use and impact, and research designs that disentangle assisted performance from durable learning. The [[k-12-ai-education]] field urgently needs to move beyond descriptive and technical-computational papers (which together constitute 92% of the repository) toward rigorous causal designs.

## Connected Concepts

- [[ai-tutoring]]
- [[cognitive-load-theory]]
- [[desirable-difficulties]]
- [[k-12]]
- [[k-12-ai-education]]
- [[metacognition]]
- [[rct]]
- [[scaffolding]]
- [[zone-of-proximal-development]]

- [[ai-literacy]]
## Connected Articles

- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[transfer-of-learning]] — Transfer of Learning
- [[ai-pedagogical-orientation]] — Faculty Orientations Shape Adoption of AI in Research and Teaching
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[genai-can-harm-teaching-rct-2026]] — Generative AI Can Harm Teaching
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[ai-education-global-capacity]] — What AI in Education Needs Next: Lessons from Youth Leaders Across Five Countries
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-ethics-education-public-discourse]] — A Longitudinal Analysis of Public Discourse on AI Ethics in Education Using Twitter Data
- [[ai-fatigue-academic-contexts]] — Defining AI Fatigue in Academic Contexts: Dimensions, Indicators, and a Stage-Based Model Using Grounded Theory

## Citation

Stanford SCALE Initiative, AI Hub for Education. (2026). [*The Evidence Base on AI in K-12: A 2026 Review*](https://scale.stanford.edu/sites/default/files/The%20Evidence%20Base%20on%20AI%20in%20K-12%20Report.pdf). Stanford University.
