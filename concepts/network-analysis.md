---
title: Network Analysis
created: "2026-08-22T01:40:00-04:00"
updated: "2026-08-22T01:40:13-04:00"
type: concept
tags: [network-analysis, research-methods-aied, learning-analytics, knowledge-graph]
research_method: [network analysis, research methods, methodology, epistemic network analysis, social network analysis, transition network analysis]
confidence: high
---

> **Network analysis** — the family of research methods that model entities (people, concepts, actions, or codes) as **nodes** connected by **edges** representing relationships or transitions, then analyze the structure and dynamics of the resulting network to reveal patterns invisible to frequency counts or pairwise comparisons. In AI-in-education research, network analysis is used to map interaction patterns between learners and AI tools, model how knowledge or discourse elements co-occur, and trace temporal sequences of behavior. It includes distinct variants — **Epistemic Network Analysis** (ENA, modeling the co-occurrence of codes/constructs), **Social Network Analysis** (SNA, modeling relationships between people), and **Transition Network Analysis** (TNA, modeling temporal sequences of states) — each of which operationalizes "learning as connection" in a different way.^[[tracing-genai-literacy-interaction-patterns]]^[[penny-transition-network-analysis-efl-writing-2026]]^[[misiejuk-cognitive-offloading-prompting-2026]]

Network analysis methods share a core premise: that the structure of connections — not just their presence or frequency — carries meaning. Rather than asking "how much of X occurred," they ask "how are elements connected, and what does that connectivity reveal about [[metacognition|cognition]], [[collaborative-learning|collaboration]], or learning processes?" This makes them especially valuable in AI-in-education, where researchers increasingly want to understand the *process* of learner–AI interaction (how learners navigate [[feedback]], dialogue, and revision) rather than only the product (final scores, error rates).

## Variants used in the wiki's corpus

- **Epistemic Network Analysis (ENA)** — the most common variant in the wiki (discussed in ~24 articles). ENA models the co-occurrence of codes or constructs within segments of discourse or activity, producing networks that show which ideas, skills, or epistemic actions tend to be connected in a given context. It is used to compare how different groups (e.g., high- vs. low-literacy learners, human vs. AI collaborators) structure their cognition.^[[tracing-genai-literacy-interaction-patterns]]^[[hao-human-ai-collaborative-problem-solving-cognition]]
- **Social Network Analysis (SNA)** — models relationships between people (learners, teachers, agents) to reveal collaboration structures, influence, centrality, and community. Useful for studying [[collaborative-learning|collaborative]] and peer learning.^[[misiejuk-cognitive-offloading-prompting-2026]]
- **Transition Network Analysis (TNA)** — models temporal sequences of discrete states (e.g., learner actions in a tutoring session) as a directed network, quantifying the probability of moving between states. TNA is used to reveal behavioral loops, pathways, and uptake dynamics in learner–AI interaction.^[[penny-transition-network-analysis-efl-writing-2026]]

These differ from a **[[knowledge-graph]]**, which is a data structure for representing and reasoning over facts (an ontology/triple store), not an analytical method for studying process or relationship structure.

## Network analysis in AI-in-education research

Network methods are used across the wiki's evidence base to answer questions that aggregate metrics cannot:

- **Open the "black box" of learner–AI interaction.** TNA reveals the *process* — the behavioral loops and pathways learners take when using AI tools (e.g., a "revision loop" vs. a "chat loop" in [[conversational-ai|chatbot]]-scaffolded [[writing-education|writing]]) rather than just final output.^[[penny-transition-network-analysis-efl-writing-2026]]
- **Compare cognitive structuring across groups.** ENA shows how different groups connect constructs differently — e.g., how [[metacognition]] co-occurs with delegation vs. human reasoning in human–AI collaboration, revealing different collaboration modes.^[[hao-human-ai-collaborative-problem-solving-cognition]]
- **Trace AI-literacy and interaction signatures.** ENA on interaction logs identifies distinct patterns of [[llm|LLM]] use (iterative strategic refinement vs. linear commands), distinguishing learner [[ai-literacy|proficiency]] and development.^[[tracing-genai-literacy-interaction-patterns]]
- **Analyze discourse and framing.** ENA is applied to qualitative and [[multimodal]] data (e.g., YouTube frames of ChatGPT in education) to reveal the structure of public or disciplinary discourse.^[[youtube-frames-chatgpt-education]]
- **Complement self-report and product metrics.** Because network methods use observed behavioral data, they can expose discrepancies between what learners claim and what they actually do — a recurring finding in the wiki's feedback-uptake literature.

## Methodological considerations

- **Coding is the foundation.** All network variants depend on reliably coding raw data (utterances, events, relationships) into discrete nodes/codes; automated LLM-based coding is increasingly used but requires human validation (e.g., Fleiss' κ of 0.70–0.71 in TNA studies).^[[penny-transition-network-analysis-efl-writing-2026]]
- **Network-level metrics summarize structure.** Density, reciprocity, centralization, and in-/out-strength describe whether interaction is random or organized around "gravitational" hubs, and how reciprocal the exchange is.
- **Statistical comparison is needed for group differences.** Chi-squared tests or permutation testing are used to establish that observed network differences (e.g., by proficiency) are not due to chance.
- **Interpret with care.** Node granularity (e.g., a coarse "chat" node) can obscure intent; automated classification carries some ambiguity; and cross-sectional network structure does not establish causality.

## Implications for AI-in-education research

1. **Prefer process methods over product-only metrics.** To evaluate whether AI tools support learning, model how learners actually engage (uptake, dialogue, revision) with sequence/network methods rather than relying on final scores alone.
2. **Use ENA to compare cognitive structuring.** When asking how different learners or modes (human vs. AI) structure their reasoning, ENA provides a direct, visual comparison of co-occurrence networks — a technique well-suited to [[student-modeling|student modeling]] of how learners connect ideas.
3. **Validate automated coding.** With large log datasets, [[llm|LLM]]-based classification is powerful but must be checked against human coding (report inter-rater agreement) before interpreting network structure.
4. **Design for differentiation.** Network analysis often reveals that the *same* AI tool produces different interaction patterns across learner subgroups — informing adaptive design rather than one-size-fits-all evaluation.

## Connected Concepts

- [[learning-analytics]]
- [[knowledge-graph]]
- [[meta-analysis-systematic-review]]
- [[student-modeling]]
- [[student-engagement]]
- [[collaborative-learning]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[feedback]]

## Connected Articles

- [[penny-transition-network-analysis-efl-writing-2026]] — TNA of learner-chatbot interactions in scaffolded EFL writing
- [[tracing-genai-literacy-interaction-patterns]] — ENA of GenAI literacy interaction patterns
- [[hao-human-ai-collaborative-problem-solving-cognition]] — ENA of human-AI collaborative problem solving
- [[misiejuk-cognitive-offloading-prompting-2026]] — Cognitive offloading and prompting (SNA/network methods)
- [[youtube-frames-chatgpt-education]] — ENA of YouTube frames of ChatGPT in education
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing (ENA)

- [[dai-chatbots-problem-posing-primary-2026]] — GenAI chatbots and problem posing in primary science
