---
title: "Enabling Multi-Agent Systems as Learning Designers: Applying Learning Sciences to AI Instructional Design"
created: "2026-05-08T04:33:04-04:00"
updated: "2026-09-20T08:28:24-04:00"
type: article
foundations: [agentic-ai, ai-literacy, educational-development]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai]
ethics: [pedagogical-safety]
research_method: [system development]
audience: [faculty developers]
level: [k 12]
sources: ['raw/papers/2508.16659.md']
confidence: high

---

> **Synthesis:** Embedding the [[learning-theories|Knowledge–Learning–Instruction (KLI) framework]] into [[agentic-ai|multi-agent systems]] to act as sophisticated [[learning-design|instructional designers]] for [[k-12|K-12]] educators. Wang et al. (2025) move [[pedagogy|pedagogical]] expertise from the user's [[prompt-engineering|prompt]] to the [[llm|LLM's]] internal architecture, comparing a single-agent baseline (SAS) against two multi-agent designs (MAS-Roles, MAS-CMD). Rubric scores showed only small, mostly insignificant differences across systems, yet 20 practicing [[teacher-role|teachers]] strongly preferred the collaborative MAS-CMD's outputs as "fantastic, creative, classroom-ready" — at a cost of ~11× more tokens and ~10× more time than baseline. The study is a working demonstration that [[learning-theories|learning sciences]] frameworks can be operationalized directly in AI architectures to produce more creative, contextually relevant materials.

## The Prompting Gap in K-12 Education

**Wang et al. (2025)** address a critical problem: **60% of K-12 teachers** now use [[generative-ai|AI]] for teaching tasks, but most lack the expertise to [[prompt-engineering|prompt]] effectively for high-quality [[learning-design|instructional materials]].

### The Problem
- **[[llm|Commercial LLMs]]** (ChatGPT, Gemini) lack embedded [[learning-theories|pedagogical theory]]
- **Simple prompts** produce shallow, misaligned, or inconsistent materials ("a mile high and an inch deep")
- **Advanced [[prompt-engineering|prompt engineering]]** requires time/expertise most teachers don't have

### The Solution
Shift pedagogical expertise from **user's prompt** to **LLM's internal architecture** by embedding [[learning-theories|learning sciences]] principles directly into [[agentic-ai|multi-agent systems]].

## Three Systems Compared

| System | Architecture | KLI Integration | Teacher Preference |
|--------|--------------|-----------------|-------------------|
| **SAS** (Single-Agent) | Baseline: simple "Generate learning activity" prompt | None (naive) | Lowest: "needs lots of editing" |
| **MAS-Roles** | 5-agent sequential pipeline (KC → Learning → Instruction → Design → Feedback) | Embedded in agent roles | Middle: "generic, impersonal" |
| **MAS-CMD** | 3-agent collaborative with conquer-merge discussion ([[behaviorism|Behaviorist]], [[constructivist|Constructivist]], Aesthetic personas) | Collaborative discussion | **Highest: "fantastic, creative, classroom-ready"** |

## Key Findings

### Quantitative Results (QM K-12 Rubric)
- **Small differences:** Statistical significance only on criterion 5.2 (p = .014)
- **Low expert agreement:** Fleiss' κ ≈ 0 (poor to slight agreement across all criteria)
- **Trend:** MAS-CMD > SAS > MAS-Roles (but not always statistically significant)

### Qualitative Results (20 Practicing Teachers)
**MAS-CMD praised for:**
- **[[creativity|Creativity]]:** "Fantastic ideas," "so creative"
- **Real-world context:** Urban planning theme made geometry "meaningful"
- **Completeness:** Included worksheets, [[formative-assessment|exit tickets]], teacher dialogue

**Common critique:** Pacing issues ("a lot to unpack," needs to be "broken up into some days")

### Efficiency Trade-off
| System | Time (s) | Tokens (k) | Requests |
|--------|-----------|-------------|----------|
| SAS | 25 ± 16 | 3,376 ± 1,601 | 1.00 ± 0.00 |
| MAS-Roles | 77 ± 45 | 22,497 ± 7,157 | 5.4 |
| MAS-CMD | 272 ± 168 | 71,638 ± 25,222 | 13.00 ± 0.00 |

**Finding:** MAS-CMD traded the highest rubric scores for substantially greater latency and usage: 272 ± 168 s, ~71.6k tokens and 13 requests, against 25 ± 16 s, ~3.4k tokens and one request for the single-agent baseline.

## Knowledge–Learning–Instruction (KLI) Framework

The KLI framework (Koedinger et al., 2012) aligns three elements:
1. **Knowledge Components (KCs):** Facts, concepts, principles, procedures — the goals of learning
2. **Learning Processes:** Memory/fluency, induction/refinement, understanding/[[metacognition|sense-making]]
3. **Instructional Principles:** [[desirable-difficulties|Spacing, testing]], worked examples, prompted [[self-regulated-learning|self-explanation]]

**Embedding KLI into MAS:**
- **MAS-Roles:** Sequential pipeline where each agent embodies one KLI component
- **MAS-CMD:** [[collaborative-learning|Collaborative discussion]] among agents with different pedagogical personas

## Connection to Existing Work

### vs. Principled AI Education
- Both emphasize: **augment, don't displace** [[learning-theories|learning sciences]] with AI
- KLI framework operationalizes "educational goals → learning models → technology"
- **Complementary:** Principled AI sets the framework; this paper implements it via MAS

### vs. Agentic Workflows
- **[[agentic-ai|Multi-agent collaboration]]:** MAS-CMD's conquer-merge discussion exemplifies agentic **planning + [[metacognition|reflection]]**
- **Teacher as beneficiary:** Unlike agentic [[intelligent-tutoring|tutoring]] (where students interact with agents), here agents serve *teachers* as instructional design assistants
- **Scalability:** MAS offers "scalable path for creating high-quality educational content"

### vs. TeachBench
- **Complementary paradigms:** TeachBench evaluates *teaching ability*; this paper *designs instructional materials*
- **Both use agents:** TeachBench (teacher-student agents); this paper (instructional designer agents)
- **Both find:** Raw solving ≠ pedagogical quality; structured frameworks needed

## What this means for practice

- **Faculty developers.** Stop treating prompt skill as the entry requirement for pedagogical quality: 60% of surveyed public-school teachers use AI for teaching tasks, yet embedding the KLI framework inside a [[agentic-ai|multi-agent system]] moves that expertise into the architecture, so professional learning time can go to reviewing and adapting outputs instead of engineering prompts.
- **Faculty developers.** Start teachers on the collaborative MAS-CMD design when quality matters: 20 practicing teachers described its outputs as "fantastic, creative, classroom-ready" and called the sequential design's offerings generic, even though the quantitative advantage showed up only on rubric criterion 5.2 (F(2, 38) = 4.75, p = .014).
- **Faculty developers.** Put a pacing check in the review routine, since that was teachers' most common critique: generated activities were "a lot to unpack" and needed to be "broken up into some days" before classroom use.
- **Administrators.** Budget the quality–efficiency trade-off explicitly: MAS-CMD took 272 ± 168 seconds and ~71.6k tokens across 13 requests per activity against 25 ± 16 seconds and ~3.4k tokens for the single-agent baseline, so tier tool choice by the stakes of the task rather than standardizing on one system.
- **Researchers.** Do not read weak rubric agreement as evidence of no difference: overall expert agreement was −0.016 under Fleiss' κ while teacher preference in the [[qualitative-research|qualitative]] feedback was consistent, so pair rubric scoring with qualitative review when [[ai-ed-evaluation|evaluating]] creative artifacts.

## Limitations

- The study evaluated design, not implementation: 30 learning activities per system were reviewed by teachers and an LLM judge but never taught to students, so it supports claims about perceived quality, not about student [[student-engagement|engagement]] or learning outcomes.
- The human evaluation rests on 20 practicing teachers (11 math, 9 science) in U.S. secondary schools, each rating 30 activities per system; inter-rater agreement was slight to poor (criterion 5.1 κ = 0.047, 5.2 κ = 0.053, 5.3 κ = −0.030, 5.4 κ = −0.043; overall κ = −0.016).
- Only one rubric criterion separated the systems statistically (5.2: F(2, 38) = 4.75, p = .014, ηp2 = .20), and the LLM-as-a-judge companion reached a ceiling effect on criteria such as Foundational Alignment and Inclusivity, with the largest gap between systems under 7% of the scale.
- Scope is one pedagogical framework and a fixed architecture set: the comparison covers KLI with three systems generated by gemini-2.5-flash (plus gemini-2.5-pro, gemini-2.0-flash, and gemini-2.0-flash-lite variants for the rubric comparison), so other instructional design models and agentic workflows remain untested.

## Connected Concepts

- [[human-in-the-loop-ai]]
- [[formative-assessment]]
- [[metacognition]]
- [[agentic-ai]]
- [[ethics]]
- [[learning-design]]
- [[k-12]]
- [[curriculum-design]]
- [[prompt-engineering]]

## Connected Articles

- [[finkelstein-principled-ai-education-2025]]
- [[agentic-workflows-education]]
- [[teachbench-llm-teaching-evaluation]]
## Citation

Wang, J., Xiao, R., Hou, X., & Stamper, J. (2025). [*Enabling Multi-Agent Systems as Learning Designers: Applying Learning Sciences to AI Instructional Design*](https://arxiv.org/abs/2508.16659).
