---
title: "Personalizing Student-Agent Interactions Using Log-Contextualized Retrieval-Augmented Generation (RAG)"
created: "2026-10-24T06:25:00-04:00"
updated: "2026-10-24T06:25:00-04:00"
type: article
authors: [Clayton Cohn, Surya Rayala, Caitlin Snyder, Joyce Horn Fonteles, Shruti Jain, Naveeduddin Mohammed, Umesh Timalsina, Sarah K. Burriss, Ashwin T S, Namrata Srivastava, Menton Deweese, Angela Eeds, Gautam Biswas]
pub_date: 2025-05-22
venue: "AIED 2025 Workshop on Epistemics and Decision-Making in AI-Supported Education"
url: https://arxiv.org/abs/2505.17238
foundations: [human-ai-collaboration, agentic-ai]
pedagogy: [scaffolding, collaborative-learning]
technology: [rag, llm, pedagogical-agent]
ethics: [hallucination-risk]
research_method: [system development, user study]
discipline: [science education, cs education]
level: [secondary]
audience: [researchers, educational technology developers, instructional designers]
sources: ['raw/papers/cohn-lc-rag-log-contextualized-retrieval-2025.md']
confidence: high
methods: [mixed-methods-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-24"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Cohn and colleagues (2025) address a specific failure of [[rag|retrieval-augmented generation]] in classrooms: retrieval assumes the student's words resemble the knowledge base, and [[collaborative-learning|collaborative talk]] rarely does. Students say "put that position block there," not "initializing the truck's position variable," so a discourse-only retriever pulls something unrelated, which their own example shows by retrieving a passage about a 1990s cartoon from a physics and computing textbook. Their fix, log-contextualized RAG, has an [[llm|LLM]] write a short summary of each segment of collaborative work that combines what students said with what they did in the environment, and retrieves on that summary instead of on the raw words. In an eight-week study with 24 high school sophomores working in pairs in C2STEM, they built 216 segments from 18 consented students, generated paired embeddings from the summaries and from the raw discourse for five embedding models, and compared 1,080 retrieved chunks with a GPT-4o judge across three prompt templates. LC-RAG won in four of five embedding models, from 0.403 to 0.620 as win rates, retrieved a tighter set of chunks (167 unique against 267), and helped most where talk was thinnest. It lost in one model, and the reason is the study's most instructive finding: the summaries became so specific to the Truck Task that they no longer matched a general textbook. Their agent, Copa, then paired log-contextualized retrieval with GPT-4o and a fifteen-chunk knowledge base, and students in a classroom study and two focus groups found it epistemically valuable while becoming frustrated that it would not simply give answers.

## Key Findings

- **Log-contextualized summaries beat discourse-only retrieval in four of five embedding models.** Win rates against the baseline were 0.620 for microsoft-e5-large, 0.482 for voyage-3-lite, 0.444 for voyage-3-large and 0.403 for OpenAI text-embedding-3-large, against 0.218 for text-embedding-3-small, where the baseline won.
- **The retrieval also became more precise.** LC-RAG pulled 167 unique chunks from a knowledge base of 7,386, where the baseline pulled 267, which matters when a wrong chunk becomes a wrong hint.
- **Gains were largest in the task contexts where talk carries the least.** Averaged across the five models, LC-RAG won 45% of Initializing Variables segments against the baseline's 33%, and 46% against 38% for Updating Variables Each Simulation Step, while Conditional Statements and Updating Under Conditions differed by only one or two points.
- **One model reversal points at contextual over-fitting.** With OpenAI's small embedding model the summaries were too C2STEM-specific to match a knowledge base of general physics and computing text, so the contextualization that helped elsewhere hurt here; the authors note the qualitative comparison showed both retrievers pulling irrelevant chunks, which locates the problem in an untargeted knowledge base rather than in retrieval.
- **Evaluation rested on an LLM judge that was itself checked.** GPT-4o compared 1,080 pairs blind, with chain-of-thought justifications, three prompt templates aggregated by majority vote and randomized chunk order. Two authors then hand-scored 80 sampled pairs, reaching quadratic weighted kappa of 0.49, which the authors report as moderate agreement rather than as validation.
- **Copa changed two things at once, which weakens the causal claim.** For the agent study the knowledge base shrank to 15 task-specific chunks and the summarization became agentic: the LLM compared the student's model to an expert version, diagnosed the expressed problem, and named what to retrieve. Both changes plausibly contributed to what students then saw.
- **Students valued the guidance and wanted it to stop being guidance.** All focus group participants said their interactions supported their problem-solving and that its information was accurate, and all said they would trust it in future work. Several were frustrated that it did not give straight answers, and some assumed its suggestions were correct and grew upset when a suggestion made their model worse, reverting to trial and error.
- **The authors name the design tension rather than resolving it.** A peer agent that offers fallible suggestions protects epistemic agency and invites productive failure, but students who expect a chatbot to answer directly read that design as a malfunction.

## How the pipeline worked

Segments were cut by task context rather than by time, using abstract syntax tree changes from the environment log: a new segment starts whenever students move to a different part of the model, so each segment stays inside one computational idea. Conditional Statements was the most common (77 segments, averaging 790 characters of talk) and Updating Variables Each Simulation Step the least (36 segments, 443 characters). GPT-3.5-Turbo, chosen for cost and performance, summarized each segment from its discourse plus that context, and two researchers validated every summary against the raw data before it was used.

The knowledge base was two open high school textbooks, one for physics and one for computing, and the comparison held the knowledge base and the segment fixed while varying only how the query was formed. That is the study's clean element: the independent variable is the query representation, not the retriever, the model, or the corpus.

## What this means for practice

- **Teams building tutors on classroom logs.** The cheap version of this intervention is a summarization step between the student and the retriever, and it does not require fine-tuning or a bespoke model.
- **Anyone choosing an embedding model by benchmark score.** The model that lost here is a strong general-purpose embedding model, and it lost because its queries were well contextualized against a corpus that was not. Corpus scope and query scope have to be matched deliberately.
- **Designers of peer-style agents.** The frustration students reported is a design signal, not a bug report: an agent that prompts reasoning will be read as broken by students who expect answers, so the framing has to arrive before the first interaction.
- **Evaluation design.** A single LLM judge with one prompt would have been easy and is demonstrably fragile; three templates, randomized order and a hand-scored subsample at moderate agreement is a floor, not a gold standard.

## Limitations

- There is no ground truth for retrieval relevance: the primary outcome is an LLM judge's win rate, and the human check reached only 0.49 quadratic weighted kappa on 80 pairs.
- The agent study is not controlled. Copa combined a smaller knowledge base with agentic summarization, and it was evaluated by classroom discussion, storyboards and focus groups rather than against a comparison condition.
- The sample is small and narrow: 18 consented students out of 24 for retrieval, 18 students across the agent study and focus groups, one task, one environment, two schools' worth of curriculum.
- LC-RAG needs environment logs in a form an LLM can interpret, which the authors list as a transfer condition rather than an assumption they have tested elsewhere.
- No learning outcome is reported for any condition, so the case for Copa rests on what students said about it.

## Citation

Cohn, C., Rayala, S., Snyder, C., Fonteles, J. H., Jain, S., Mohammed, N., Timalsina, U., Burriss, S. K., Ashwin T S., Srivastava, N., Deweese, M., Eeds, A., & Biswas, G. (2025). [*Personalizing Student-Agent Interactions Using Log-Contextualized Retrieval-Augmented Generation (RAG)*](https://arxiv.org/abs/2505.17238). In *AIED 2025 Workshop on Epistemics and Decision-Making in AI-Supported Education*.
