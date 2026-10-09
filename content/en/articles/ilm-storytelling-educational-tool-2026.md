---
title: "ILM: An AI-Powered Storytelling Educational Tool"
created: "2026-10-09T09:30:00-04:00"
updated: "2026-10-09T09:30:00-04:00"
type: article
foundations: [ai-education]
pedagogy: [storytelling-in-education]
technology: [educational-nlp, knowledge-graph, rag, generative-ai, llm]
assessment: [automated-question-generation, automated-assessment, feedback]
methods: [ai-ed-evaluation]
ethics: [multilingual-learning, culturally-relevant-pedagogy]
sources: ['raw/papers/ilm-storytelling-educational-tool-2026.md']
confidence: high
research_method: [system development]
level: [k 12]
audience: [instructors, researchers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-09"
    agent: hermes-agent
---

> **Synthesis:** ILM is an interactive platform for teaching "Stories of the Prophets" — Islamic prophetic narratives — to children and young adults, built by Mohammed, Serour, and Lahnala at McMaster University. It pairs a [[knowledge-graph|Knowledge Graph]] Constructor Engine, which extracts entities and relations from educator-approved Arabic narratives using a four-expert Arabic NER ensemble and a two-stage relation pipeline, with a [[rag|retrieval-augmented]] generator that drafts multiple-choice and open-ended comprehension questions from the source passages. Answering is split by representation: knowledge-graph questions are scored deterministically against graph triples, while open-ended answers are judged by [[generative-ai|Gemini]] acting as an [[llm|LLM-as-a-judge]] against retrieved passages under a benefit-of-the-doubt policy. A separate, manually verified Quranic enrichment layer adds source-supported relations. The paper is a feasibility demonstration, not an efficacy study: it reports architecture and design, and explicitly defers learner-outcome evaluation to future work.

## Key Findings
1. ILM keeps two independent knowledge representations — a story-specific knowledge graph and a passage-retrieval pipeline — so factual recall and comprehension are assessed by different mechanisms rather than one shared model.
2. The KG Engine runs a four-expert nested NER ensemble (AraBERTV2, CAMELBERT-Mix, MARBERTV2, and a span-based AraBERTv2 expert) and retains a mention only when at least two experts produce an exact-span match.
3. Relation extraction is two-stage: an AraBERT binary classifier first finds related entity pairs, then a WOJOOD-scheme relation classifier labels them, and an NLI model resolves the top-5 candidate relations against the original text.
4. Although the pipeline extracts from the full WOJOOD ontology, the learner-facing application exposes just nine controlled predicates: child_of, father_of, sibling_of, sent_to, thrown_into, taken_to, imprisoned_in, appointed_over, and reunited_with.
5. Retrieval chunks are embedded with Cohere's embed-multilingual-v3.0 into 1024-dimensional vectors; Gemini 3.6 Flash then generates questions from the top k = 3 chunks, with Jaccard (≥ 0.6) and embedding-similarity (> 0.78) checks flagging duplicates.
6. Open-ended answers are graded by Gemini as an LLM-as-a-judge against retrieved passages, under a benefit-of-the-doubt policy that marks an answer correct whenever the passages lack evidence to establish that it is wrong.
7. A separate Quranic enrichment layer, derived from the Tanzil Quran Text (Simple-Clean v1.1), adds manually verified relations such as interpreted_for, tempted, and summoned, kept apart from the nine-predicate educational ontology.

## Two representations of the same story
ILM's design bet is that a narrative can be modeled twice: once as a structured [[knowledge-graph]] of entities and relations, and once as an unstructured passage corpus for retrieval. The KG Engine processes each educator-approved Arabic paragraph through named entity recognition, story-scoped entity linking, candidate-pair generation, relation extraction, and semantic resolution — an [[educational-nlp|Arabic NLP]] pipeline rather than a generic one. Entities are stored as canonical records; relations are validated against their endpoints and stored with provenance, including the supporting paragraph, the original prediction, and any semantic-resolution rule applied. The graph is kept in sync with the content: when an editor modifies a paragraph, the KG records tied to it are retracted and the paragraph is reprocessed. This yields a clean separation between the deterministic knowledge used for quizzes and the flexible retrieval used for comprehension questions.

## Deterministic scoring versus LLM judgment
The platform's two question types are graded differently, and the distinction matters for [[assessment-validity]]. Knowledge-graph questions are generated from graph triples and evaluated without a language model: answers are normalized and matched against canonical graph values and registered aliases, so multiple-choice correctness follows directly from the corresponding entity or relation. Open-ended questions work differently. The learner's question is embedded to retrieve the top k = 3 chunks from the same story and language, and those passages, the learner's answer, and a reference answer are handed to Gemini for evaluation. The retrieved passages are the only evidence the judge may use, and a benefit-of-the-doubt policy marks an answer correct whenever the passages cannot establish that it is wrong. The judge also returns learner-facing [[feedback]], prompted to be encouraging and never to mention passages, sources, or evaluation.

## Arabic, multilingual, and Quranic design choices
Several design decisions target the Arabic and [[multilingual-learning|multilingual]] setting that the paper's related-work section identifies as underserved. Entity extraction leans on Arabic-specific transformers — AraBERTV2, CAMELBERT-Mix, and MARBERTV2 — with XLM-R used as a complementary "safe-addition" component for mentions the ensemble does not sufficiently support, and Arabic text is normalized before embedding and retrieval to reduce surface-form variation. Translations are maintained per paragraph and indexed as retrieval chunks only after [[human-in-the-loop-ai|human review]], preserving a direct mapping from retrieved content back to its source paragraph. A separate Quran enrichment layer, derived from the Tanzil Quran Text (Simple-Clean v1.1, CC BY 3.0), is manually verified against the source and stored with its verses. The authors keep entity representation conservative — limited to what the source explicitly supports — to distinguish verified Quranic knowledge from automatically extracted narrative knowledge.

## What this means for practice
- **Instructors.** Use the two question types deliberately: knowledge-graph questions are deterministic and good for factual recall and for grading without a model, while retrieval-based open-ended questions exercise comprehension and need a language model to score.
- **Instructors.** Approve narratives before they enter the pipeline — the KG Engine only processes educator-approved content, and keeping the graph synchronized when a paragraph changes is what keeps quiz answers canonical.
- **Instructional designers.** Reuse the grounding pattern: ILM's generator is instructed to write questions solely from the retrieved passages, and post-generation checks (Jaccard ≥ 0.6 within a chunk, embedding similarity > 0.78 across the story) flag near-duplicates for manual review.
- **Assessment designers.** Weigh the benefit-of-the-doubt judge policy carefully. Marking an answer correct whenever the retrieved passages cannot prove it wrong avoids penalizing learners for evidence the judge never saw, but it trades strictness for fairness.
- **Researchers.** Note the deliberate narrowing to nine predicates from the full WOJOOD extraction scheme; decide up front which relations your learner activities actually require rather than exposing the whole ontology.

## Limitations
- The paper is a feasibility demonstration, not an efficacy study: no learner-outcome data, sample, or controlled comparison is reported, and formal empirical studies with children and educators are listed as future work.
- The system is evaluated on a single story; the authors state the current study is limited by its evaluation on one story and plan to expand the corpus and evaluate across different texts.
- Automatically extracted relations and [[automated-question-generation|generated questions]] may contain errors; the authors mitigate this through approved content, human review, and source-verified Quranic enrichment rather than automated guarantees.
- The learner-facing quiz exposes only nine of the WOJOOD ontology's predicates, and the Quranic enrichment layer is excluded from deterministic quiz generation — so [[automated-assessment|automated assessment]] covers a deliberately narrow slice of each narrative.
- Question generation and answer evaluation both rely on Google's Gemini 3.6 Flash, and retrieval uses Cohere's embed-multilingual-v3.0; the paper reports no comparison against alternative models or an ablation of the pipeline's components.

## Citation
Mohammed, S., Serour, A., & Lahnala, A. (2026). [ILM: An AI-Powered Storytelling Educational Tool](https://arxiv.org/abs/2610.12064). *arXiv preprint*.
