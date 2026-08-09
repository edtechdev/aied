---
title: Multi-Agent Systems for Instructional Design
created: 2026-05-08
updated: 2026-05-08
type: article
tags: [agentic-ai, ai-literacy, human-in-the-loop, k-12, pedagogical-safety, agentic-ai-ecosystems-higher-education, human-in-the-loop-ai, faculty-development-genai, metacognition]
sources: ['raw/papers/2508.16659.md']
confidence: high
---

> **Wang et al. (2025)** address a critical problem: **60% of K-12 teachers** now use AI for teaching tasks, but most lack the expertise to prompt effectively for high-quality instructional materials.

> Embedding the Knowledge–Learning–Instruction (KLI) framework into multi-agent systems to act as sophisticated instructional designers for K-12 educators.

## The Prompting Gap in K-12 Education

**Wang et al. (2025)** address a critical problem: **60% of K-12 teachers** now use AI for teaching tasks, but most lack the expertise to prompt effectively for high-quality instructional materials.

### The Problem
- **Commercial LLMs** (ChatGPT, Gemini) lack embedded pedagogical theory
- **Simple prompts** produce shallow, misaligned, or inconsistent materials ("a mile high and an inch deep")
- **Advanced prompt engineering** requires time/expertise most teachers don't have

### The Solution
Shift pedagogical expertise from **user's prompt** to **LLM's internal architecture** by embedding learning sciences principles directly into multi-agent systems.

## Three Systems Compared

| System | Architecture | KLI Integration | Teacher Preference |
|--------|--------------|-----------------|-------------------|
| **SAS** (Single-Agent) | Baseline: simple "Generate learning activity" prompt | None (naive) | Lowest: "needs lots of editing" |
| **MAS-Roles** | 5-agent sequential pipeline (KC → Learning → Instruction → Design → Feedback) | Embedded in agent roles | Middle: "generic, impersonal" |
| **MAS-CMD** | 3-agent collaborative with conquer-merge discussion (Behaviorist, Constructivist, Aesthetic personas) | Collaborative discussion | **Highest: "fantastic, creative, classroom-ready"** |

## Key Findings

### Quantitative Results (QM K-12 Rubric)
- **Small differences:** Statistical significance only on criterion 5.2 (p = .014)
- **Low expert agreement:** Fleiss' κ ≈ 0 (poor to slight agreement across all criteria)
- **Trend:** MAS-CMD > SAS > MAS-Roles (but not always statistically significant)

### Qualitative Results (20 Practicing Teachers)
**MAS-CMD praised for:**
- **Creativity:** "Fantastic ideas," "so creative"
- **Real-world context:** Urban planning theme made geometry "meaningful"
- **Completeness:** Included worksheets, exit tickets, teacher dialogue

**Common critique:** Pacing issues ("a lot to unpack," needs to be "broken up into some days")

### Efficiency Trade-off
| System | Time (s) | Tokens (k) | Requests |
|--------|-----------|-------------|----------|
| SAS | 25 ± 16 | ~3.4 | 1 |
| MAS-Roles | ~75 | ~24 | 5 |
| MAS-CMD | 272 ± 168 | ~71.6 | 13 |

**Finding:** Highest quality requires ~11× more tokens and ~10× more time than baseline.

## Knowledge–Learning–Instruction (KLI) Framework

The KLI framework (Koedinger et al., 2012) aligns three elements:
1. **Knowledge Components (KCs):** Facts, concepts, principles, procedures
2. **Learning Processes:** Memory/fluency, induction/refinement, understanding/sense-making
3. **Instructional Principles:** Spacing, testing, worked examples, prompted self-explanation

**Embedding KLI into MAS:**
- **MAS-Roles:** Sequential pipeline where each agent embodies one KLI component
- **MAS-CMD:** Collaborative discussion among agents with different pedagogical personas

## Connection to Existing Work

### vs. [[principled-ai-education|Principled AI Education]]
- Both emphasize: **augment, don't displace** learning sciences with AI
- KLI framework operationalizes "educational goals → learning models → technology"
- **Complementary:** Principled AI sets the framework; this paper implements it via MAS

### vs. [[agentic-workflows-education|Agentic Workflows]]
- **Multi-agent collaboration:** MAS-CMD's conquer-merge discussion exemplifies agentic **planning + reflection**
- **Teacher as beneficiary:** Unlike agentic tutoring (where students interact with agents), here agents serve *teachers* as instructional design assistants
- **Scalability:** MAS offers "scalable path for creating high-quality educational content"

### vs. [[teachbench-llm-teaching-evaluation|TeachBench]]
- **Complementary paradigms:** TeachBench evaluates *teaching ability*; this paper *designs instructional materials*
- **Both use agents:** TeachBench (teacher-student agents); this paper (instructional designer agents)
- **Both find:** Raw solving ≠ pedagogical quality; structured frameworks needed

## Implications for AI in Education

### For Tool Developers
- **Embed pedagogy:** Don't rely on teachers to "prompt in" pedagogical quality
- **Multi-agent > single-agent:** Collaborative discussion produces more creative, contextual outputs
- **Trade-off awareness:** Highest quality requires computational cost; offer tierd options

### For K-12 Educators
- **Beyond chatbots:** Specialized MAS tools can provide "print-ready" materials
- **Teacher remains central:** AI as "instructional partner," not replacement
- **Time savings:** Weekly AI users save ~5.9 hours/week; quality tools amplify this

### For Researchers
- **Evaluation challenge:** Low expert agreement (κ ≈ 0) suggests need for better rubrics
- **Quality ≠ rubric scores:** Teachers' qualitative preferences didn't always match statistical significance
- **KLI as design principle:** Learning sciences frameworks can be operationalized in AI architectures

## Connected Concepts

- [[agentic-ai-ecosystems-higher-education]]
- [[ai-literacy]]
- [[faculty-development-genai]]
- [[formative-assessment]]
- [[human-in-the-loop-ai]]
- [[metacognition]]

## Connected Articles

- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[lecturaagents-multi-agent-teaching]] — LecturaAgents: A Multi-Agent Framework for Adaptive Personalized AI-Assisted Learning and Embodied Teaching
- [[principled-ai-education]] — Principled AI in Education
- [[teachbench-llm-teaching-evaluation]] — TeachBench - Evaluating LLM Teaching Ability
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-education-global-capacity]] — What AI in Education Needs Next: Lessons from Youth Leaders Across Five Countries
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-ethics-education-public-discourse]] — A Longitudinal Analysis of Public Discourse on AI Ethics in Education Using Twitter Data
- [[ai-fatigue-academic-contexts]] — Defining AI Fatigue in Academic Contexts: Dimensions, Indicators, and a Stage-Based Model Using Grounded Theory

## Citation

John, A.W.J.X.R.H.X.S. (2026). [*Multi-Agent Systems for Instructional Design*](https://arxiv.org/abs/2508.16659)
