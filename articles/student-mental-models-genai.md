---
title: Uncovering Students' Mental Models of Generative Artificial Intelligence
created: "2026-07-14T04:33:04-04:00"
updated: "2026-09-03T05:00:57-0400"
type: article
tags: [student-experience, ai-literacy, generative-ai, metacognition, higher-ed, human-ai-collaboration, academic-integrity]
research_method: [survey, mixed methods, qualitative]
discipline: [engineering education, information technology]
audience: [learners, instructors]
level: [higher ed]
sources: ['raw/papers/2607.11692.md']
confidence: high
---

> **Synthesis:** Ganguly, Garika, and Johri (2026) elicit 64 undergraduate concept maps of [[generative-ai|generative AI]] from a required technology-ethics course and identify five distinct mental-model categories — technical-process based, educational-tool based, transitional, consequence-aware, and integrated. The authors find that students do **not** hold a unified mental model of GenAI, and that declarative ("what") knowledge dominates while procedural ("how") and conditional ("when and why") knowledge remain sparse — only nine maps integrate all three. Because technical literacy and [[ethics|ethical]] awareness appear to develop separately, the authors argue that [[ai-literacy]] [[curriculum-design|curriculum]] and GenAI guidelines must actively bridge these domains rather than assume a surface familiarity with tools will translate into responsible, calibrated use.

## Mental models as a lens on GenAI use

A mental model is an internal cognitive framework for reasoning and decision-making about a system, constructed from an individual's experiences and perceptions. In educational-technology contexts, mental models shape how learners make sense of new tools, decide whether and how to use them, and develop durable behavioral patterns. The authors note that students already use [[generative-ai|GenAI]] (ChatGPT, Claude, GitHub Copilot) for academic work — improving drafts, generating ideas, completing tasks — and that short-term performance gains (e.g. higher essay scores) can mask discrepancies between what students *believe* GenAI can do and how they actually deploy it. Such mismatches produce unintended policy violations, missed opportunities for productive [[student-engagement|engagement]], or resistance to [[governance|institutional]] rules that feel disconnected from how students understand the tool.

Prior research on GenAI adoption has largely measured *what students know* through tests and surveys, or tracked tool adoption and skill development — approaches that capture surface knowledge but rarely expose the underlying cognitive structures students use to reason about AI. This study instead treats mental models as a learnable, researchable object, connecting to the wiki's treatment of AI understanding as a [[metacognition|metacognitive]] skill.

## Study design: concept mapping as an elicitation method

The authors leveraged **concept mapping** as a primary elicitation technique, treating each map as an "expressed model" that externalizes a student's internal conceptual framework. Concept maps are well suited to probing abstract constructs — technical mechanisms, ethical values — that are difficult to verbalize, and can reveal [[misconceptions]] that structured interviews might miss.

- **Sample:** 86 undergraduate students in a required technology-ethics course within the IT curriculum at George Mason University. As part of an assignment, students created a concept map representing their understanding of GenAI plus a brief written explanation; no further constraints were imposed so as not to bias their thinking.
- **Processing:** Of 86 students, 15 did not submit, yielding 71 maps. Two [[research-methods-aied|researchers]] independently scored maps holistically on **comprehensiveness, organization, and correctness** (a 1–3 rubric with plus/minus gradations, per Besterfield-Sacre et al. 2004), mapped to a 9-point scale and grouped into four levels. Eight maps fell into the lowest (Level 1) category; two were retained as exceptional despite weak structure, so six were excluded — leaving **64 concept maps** for analysis.
- **Analysis:** Two complementary approaches — (1) frequency coding of core components via a 16-code inductive codebook, and (2) **hierarchical clustering** of how concepts co-occur and connect across maps — surfaced recurring structures in students' understanding (RQ1). A [[qualitative-research|qualitative]] pass coded each map for **declarative, procedural, and conditional** knowledge (RQ2).

## Five mental models of GenAI

Hierarchical clustering of the concept maps revealed **five recurring categories** of student mental models:

1. **Technical-process based** — Students connect [[machine-learning|machine learning]], neural networks, and large language models to capabilities like content creation and [[multimodal]] output, and to developers/companies. The underlying technology and its generative capacity are seen as inseparable. These students "know how GenAI works" but may lack the human and societal context.
2. **Educational-tool based** — Students group [[personalized-learning|personalized learning]], administrative support, and [[accessibility]] together, perceiving GenAI primarily as something that lowers barriers, adapts to individual needs, and makes education more inclusive. Notably, this cluster sits at a **moderate distance** from the technical cluster — students who think about GenAI's educational benefits often do not connect those benefits to its technical foundations.
3. **Transitional** — Students pair productivity and efficiency with policymakers and government, beginning to move beyond individual tool use toward recognizing GenAI as a technology that needs governance. The **small size** of this cluster suggests this [[regulation|regulatory]] awareness is still limited.
4. **Consequence-aware** — Students associate [[academic-integrity|academic integrity]] (plagiarism, cheating) with long-term impacts, recognizing that decisions about GenAI use today carry implications far into the future.
5. **Integrated** — Students group ethics, privacy, [[human-in-the-loop-ai|human oversight]], and academic stakeholders together, treating responsible use as a collective, multi-stakeholder concern rather than an individual one. The presence of human oversight alongside ethics and privacy signals solution-oriented thinking. Cluster 5 merges with Cluster 4, indicating that consequence-awareness and ethical governance are two sides of the same coin in the most developed mental models.

## Wide but shallow: the dominance of declarative knowledge

Every concept map reflected **declarative** knowledge ("what GenAI is"), but far fewer showed **procedural** knowledge ("how it works", 25 maps) or **conditional** knowledge ("when and why to use it", 17 maps). The co-occurrence pattern is more revealing than the raw counts:

- **Declarative only (31 maps)** — the most common profile: rich lists of tools and categories with little process reasoning or evaluative judgment. The authors characterize this as a "wide but shallow" mental model — knowing names and applications without understanding mechanisms or appropriate-use boundaries.
- **Declarative + procedural (16 maps)** — technically oriented but not critically oriented: students can trace how GenAI works around concepts but show no evaluative or ethical judgment.
- **Declarative + conditional (8 maps)** — students can name what GenAI is and hold judgments about when/why it should be used, but cannot trace how the technology actually works.
- **All three, integrated (9 maps)** — the most sophisticated, multilayered mental models.

The authors connect this pattern to the knowledge-structure literature, noting that declarative knowledge is the most readily activated and easily assessed — particularly in novices encountering a domain for the first time. The finding that technical and social-regulatory clusters remain far apart suggests that **technical literacy and ethical awareness are developing separately** in students, and that education has yet to bridge the two.

## Implications for teaching, guidelines, and research

- **For faculty and instructors:** The five-category structure can serve as a **diagnostic framework** — identify where individual students' mental models lie and design activities that stretch thinking across cluster boundaries toward an integrated model that holds technical, educational, ethical, and governance dimensions *simultaneously*. Students focused on technical architecture may need more human/societal context; those who see GenAI purely as an educational tool may need prompting to reflect on who has access, under what conditions, and with what risks.
- **For guideline design:** Many institutional guidelines focus narrowly on academic integrity — plagiarism, disclosure, permitted use — which aligns with only one dimension of how students conceptualize GenAI. The authors argue guidelines should be **broader and more layered**, addressing not just *what* students may do but *why* responsible use matters technically, educationally, ethically, and societally — [[scaffolding|scaffolded]] to build from awareness of what GenAI is and how it works, through its educational affordances, to its long-term consequences and collective responsibilities.
- **For researchers:** The concept-map + hierarchical-clustering methodology can be extended across institutional contexts, disciplines, and student populations; longitudinal designs could track how mental models evolve over a degree program or in response to interventions; and future work should examine whether students with more integrated mental models actually make more reflective, responsible use choices. The authors frame this as a WIP study to be validated with interviews and think-aloud protocols.

## Connected Concepts

- [[cognitive-offloading]]
- [[ai-literacy]]
- [[student-experience]]
- [[human-ai-collaboration]]
- [[metacognition]]
- [[generative-ai]]
- [[higher-ed]]
- [[trust]]
- [[agency]]
- [[academic-integrity]]
## Connected Articles

- [[buggy-genai-code-student-responses]] — When AI Is Wrong on Purpose: How Students Respond to Buggy GenAI Code
- [[code-review-genai-cs1]] — Combating Harms of Generative AI in CS1 with Code Review Interviews and a Flipped Classroom
- [[bloom-aligned-educational-control-llms]] — From Execution to Education: A Bloom-Aligned Framework for Measuring Educational Control in LLMs
- [[ai-learning-assistants-higher-ed-large-scale]] — Using AI-based Learning Assistants in Higher Education: A Large-Scale Descriptive Analysis
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[chatgpt-critical-creative-thinking-review]] — ChatGPT Critical and Creative Thinking: Systematic Review

## Citation

Ganguly, A., Garika, S. S., & Johri, A. (2026). [*Uncovering Students' Mental Models of Generative Artificial Intelligence*](https://arxiv.org/abs/2607.11692). arXiv preprint.
