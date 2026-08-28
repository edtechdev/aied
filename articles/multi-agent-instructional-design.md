---
title: Multi-Agent Systems for Instructional Design
created: "2026-05-08T04:33:04-04:00"
updated: "2026-08-28T15:00:00-04:00"
type: article
tags: [agentic-ai, ai-literacy, human-in-the-loop, k-12, pedagogical-safety, agentic-ai-ecosystems-higher-education, human-in-the-loop-ai, faculty-development-genai, metacognition]
sources: ['raw/papers/2508.16659.md']
confidence: high
---

> **Synthesis:** Embedding the [[learning-theories|Knowledge–Learning–Instruction (KLI) framework]] into [[agentic-ai|multi-agent systems]] to act as sophisticated [[instructional-design|instructional designers]] for [[k-12|K-12]] educators. Wang et al. (2025) move [[pedagogy|pedagogical]] expertise from the user's [[prompt-engineering|prompt]] to the [[llm|LLM's]] internal architecture, comparing a single-agent baseline (SAS) against two multi-agent designs (MAS-Roles, MAS-CMD). Rubric scores showed only small, mostly insignificant differences across systems, yet 20 practicing [[teacher-role|teachers]] strongly preferred the collaborative MAS-CMD's outputs as "fantastic, creative, classroom-ready" — at a cost of ~11× more tokens and ~10× more time than baseline. The study is a working demonstration that [[learning-theories|learning sciences]] frameworks can be operationalized directly in AI architectures to produce more creative, contextually relevant materials.

## The Prompting Gap in K-12 Education

**Wang et al. (2025)** address a critical problem: **60% of K-12 teachers** now use [[generative-ai|AI]] for teaching tasks, but most lack the expertise to [[prompt-engineering|prompt]] effectively for high-quality [[instructional-design|instructional materials]].

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
| SAS | 25 ± 16 | ~3.4 | 1 |
| MAS-Roles | ~75 | ~24 | 5 |
| MAS-CMD | 272 ± 168 | ~71.6 | 13 |

**Finding:** Highest quality requires ~11× more tokens and ~10× more time than baseline.

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

## Implications for AI in Education

### For Tool Developers
- **Embed pedagogy:** Don't rely on teachers to "prompt in" pedagogical quality
- **[[agentic-ai|Multi-agent]] > single-agent:** Collaborative discussion produces more creative, contextual outputs
- **Trade-off awareness:** Highest quality requires computational cost; offer tiered options balancing efficiency and quality

### For K-12 Educators
- **Beyond [[conversational-ai|chatbots]]:** Specialized MAS tools can provide "print-ready" materials
- **Teacher remains central:** AI as "instructional partner," not replacement
- **Time savings:** Weekly AI users save ~5.9 hours/week; quality tools amplify this

### For Researchers
- **[[ai-ed-evaluation|Evaluation]] challenge:** Low expert agreement (κ ≈ 0) suggests need for better rubrics
- **Quality ≠ rubric scores:** Teachers' [[qualitative-research|qualitative]] preferences didn't always match statistical significance
- **KLI as design principle:** [[learning-theories|Learning sciences]] frameworks can be operationalized in AI architectures

## Connected Concepts

- [[human-in-the-loop-ai]]
- [[formative-assessment]]
- [[metacognition]]
- [[agentic-ai]]
- [[ethics]]
- [[instructional-design]]
- [[k-12]]
- [[curriculum-design]]
- [[prompt-engineering]]

## Connected Articles

- [[principled-ai-education]]
- [[agentic-workflows-education]]
- [[teachbench-llm-teaching-evaluation]]
## Citation

Wang, J., Xiao, R., Hou, X., & Stamper, J. (2025). [*Enabling Multi-Agent Systems as Learning Designers: Applying Learning Sciences to AI Instructional Design*](https://arxiv.org/abs/2508.16659).
