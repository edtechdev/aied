---
title: "Integrating Topic Modeling and LLM Prompt Engineering into a Human-driven Approach to Analyze Interview Transcripts"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/ober-prompt-engineering-interview-transcripts-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [thematic analysis]
audience: [researchers, assessment designers]
level: [k 12]
technology: [llm, prompt-engineering, human-in-the-loop-ai]
methods: [qualitative-research, ai-assisted-educational-research]
foundations: [human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Ober, Courey and Flor build a hybrid, [[human-in-the-loop-ai|human-in-the-loop]] framework that combines grounded human coding, topic modeling, and [[llm|LLM]] prompt engineering to analyze interview transcripts at scale, then demonstrate it on six semi-structured focus groups with 13 U.S. middle and high school teachers discussing how communication and digital literacy should be conceptualized and assessed in competency-based education. Two GPT-4 implementations, ChatGPT-4o and Copilot, labeled the data-derived topics with only minor differences — 33.3% of communication cluster labels and 43.8% of digital literacy labels were identical, with average cosine similarities between 0.835 and 0.880 — and no hallucinations surfaced under [[human-in-the-loop-ai|human review]]. The teachers framed communication as multimodal, digital literacy as a fluid skill, and both as difficult to assess in standardized formats. The study is an empirical demonstration of [[ai-assisted-educational-research|AI-assisted qualitative research]]: it documents the design, the sample, and the stability of machine-generated labels rather than comparing the framework against alternatives.

## Key Findings

1. **A three-strand framework held together across the full pipeline.** Preliminary human coding using grounded-theory approaches produced six high-level themes; SentenceBERT embeddings clustered by Affinity Propagation yielded 78 first-level clusters and 32 H-clusters for communication and 79 and 32 for digital literacy; LLM prompting generated labels for each cluster; and a final mapping step folded the data-derived codes into a refined codebook.

2. **Human review removed talk that was not thematic.** 18 H-clusters for communication and 16 for digital literacy were dropped because they captured conversational filler ("What?", "Okay", "Right, exactly") rather than distinct meanings, leaving 14 meaningful H-clusters for communication and 16 for digital literacy.

3. **Two GPT-4 models labeled the topics consistently.** ChatGPT-4o and Copilot produced identical labels for 33.3% (7 out of 21) of the communication H-clusters analyzed and 43.8% (7 out of 16) of the digital literacy ones; average cosine similarity between the models was 0.835 for communication labels and 0.827 for their descriptions, and 0.848 and 0.880 for digital literacy labels and descriptions.

4. **The codebook became more structured and more complete.** Version 2 added a "teaching" category, separated prioritization of whole skills from subskill prioritization, and made social and contextual dimensions explicit, replacing general terms such as "definitions" with actionable questions.

5. **Teachers described both skills with stable themes.** Communication was framed as multimodal — speaking, listening, writing, presenting — with audience awareness central, while digital literacy was framed as fluid, turning on information evaluation, digital citizenship, and critical thinking in an age of misinformation and AI-generated content.

## A human-driven hybrid framework

The framework runs in stages, each documented so the process is reproducible. Transcripts from the six focus groups — each with 2-4 middle or high school instructors, teaching experience ranging from one year to 32 years — were manually cleaned, corrected for speaker attribution, and cut into sentences, the unit of analysis. Sections were tagged by skill (communication as "COM", digital literacy as "DL") and by issue (framework, assessment design). A grounded-theory pass produced the Version 1 codebook of six preliminary themes, from reactions to skills frameworks to shifts in social and cultural contexts affecting skills assessment.

Topic modeling then converted each sentence into a dense vector with SentenceBERT and clustered the embeddings with Affinity Propagation, chosen because it does not require pre-specifying the number of clusters. The algorithm produced 78 first-level clusters and 32 H-clusters for communication, and 79 and 32 for digital literacy. Sentences whose cosine similarity to their nearest neighbor fell below 0.5 were excluded as thematic outliers, and each cluster was summarized by a centroid vector and representative "bestwords" — words whose embeddings sat closest to the centroid. When the team reviewed the H-clusters by hand, 18 for communication and 16 for digital literacy carried no distinct meaning, mostly backchannel phrases such as "What?", "Okay", "Right, exactly", and "Yeah, I would agree", and were dropped, leaving 14 and 16 meaningful H-clusters respectively.

The final stage mapped the human-derived codebook onto the clusters using additional LLM prompts, turning the exploratory Version 1 into the more analytic Version 2. General terms became actionable questions, new categories such as "teaching" were added, prioritization of whole skills was separated from subskill prioritization, and social and contextual dimensions were made explicit; redundant codes were combined or restructured.

## Consistent labels from two GPT-4 models

For labeling, the team adapted a prompting strategy from Barany et al. (2024) and built structured prompts for two commercially accessible GPT-4 models: ChatGPT-4o (OpenAI) and Copilot (Microsoft, powered by GPT-4). Using two implementations of the same model family was deliberate — it tests consistency where the underlying architecture is identical but the interface differs, and it keeps the method within reach of educational researchers without specialized infrastructure. Default commercially available settings were used and documented — temperature 1, top-p 1, and zero frequency and presence penalties — so that other teams can replicate the labeling step.

The two models produced largely consistent output. Of the H-clusters analyzed, 33.3% (7 out of 21) of the communication labels and 43.8% (7 out of 16) of the digital literacy labels were identical across models. Average cosine similarity between the models' labels and descriptions was 0.835 and 0.827 for communication, and 0.848 and 0.880 for digital literacy. Differences were mostly minor phrasing, with the core meaning preserved. The research team reviewed every label for accuracy, relevance, and alignment with the underlying sentence examples and bestwords, and observed no clear instances of hallucination — fabricated content not grounded in the data.

## What teachers said about the two skills

Teachers emphasized that both skills need clear definitions framed in pedagogically relevant ways. For communication, the concept was described as inherently multimodal, spanning speaking, listening, writing, and presenting, with audience awareness and social-emotional dimensions integral to the definition; vague or "squishy" frameworks drew criticism. For digital literacy, teachers stressed a fluid skill shaped by the rapid evolution of digital tools, organizing the definition around information evaluation, digital citizenship, and critical thinking, and they treated it as especially urgent in an age of misinformation and AI-generated content.

Assessment loomed large in the conversations. Teachers described formats from script writing and oral presentations to comparative evaluations of sample tasks for communication, and video-based assessments, task comparisons, and performance-based evaluation tools for digital literacy — and they valued authentic, contextualized activities that mirror real use. At the same time they voiced concerns about validity, subjectivity, and feasibility: tone, audience alignment, and emotional intelligence are hard to capture in standardized formats, and digital literacy assessments that reward critical reasoning and ethical use of tools are difficult to design, especially when student digital fluency varies widely.

Disciplinary and contextual variation ran through the accounts. STEM teachers emphasized technical precision while humanities teachers prioritized audience adaptation, pointing to the need for discipline-specific assessment rubrics. Students were described as uneven: strong engagement with tools but weaker performance evaluating sources or handling digital ethics. And teachers situated both skills in shifting contexts — heavy texting and social media use, the rapid rise of AI tools, and curricula that lag behind technological change.

## What this means for practice

- **Qualitative researchers.** Run the three strands as a pipeline rather than choosing between them: human coding supplies the construct anchor, topic modeling provides the thematic structure, and LLM labeling scales the naming step; document model versions, prompts, and default parameters — as this paper does with temperature 1, top-p 1, and zero frequency and presence penalties — so the labeling step is replicable.
- **Teams using LLMs for coding.** Treat human review of LLM labels as the quality gate, not a formality: the team's review of all labels found no clear hallucinations in the two GPT-4 outputs, and the framework's stability claim rests on that review rather than on the models' agreement alone, since two same-family models can share the same blind spots.
- **Assessment designers in competency-based education.** Teachers consistently wanted [[assessment|assessments]] that are authentic, embedded in content-based tasks, and sensitive to developmental progression, and doubted that standardized formats can capture tone, audience alignment, or ethical use of digital tools — so performance-based measures that reflect real instructional contexts fit what educators already believe.
- **Professional development leads.** Discipline shapes expectations: STEM teachers emphasized technical precision while humanities teachers prioritized audience adaptation, so communication-assessment rubrics and exemplars should be developed per discipline rather than shared generically, and hybrid analysis of teacher talk can surface those differences at scale.

## Limitations

- The sample is small and skewed — 13 teachers, 54% from the Northeast and 69% female, with experience spanning one year to 32 years — so the substantive themes are not generalizable, and the authors call for testing the framework across more diverse contexts and content areas.
- Both LLMs share the GPT-4 architecture, which limits the diversity of interpretive perspectives and leaves room for anchoring biases or model-specific artifacts; the authors list alternative architectures, confidence scoring, and prompt variation as future work.
- The design includes no comparative conditions — no human-only or AI-only coding arm — so claims that the hybrid approach improves on alternatives remain conceptual rather than empirically validated in this study.
- Topic modeling outputs are sensitive to parameter tuning and can struggle with short or ambiguous text segments, and human judgment still carries the interpretive load, which reintroduces the subjectivity the framework aims to contain.

## Citation

Ober, T. M., Courey, K. A., & Flor, M. (2026). *Integrating Topic Modeling and LLM Prompt Engineering into a Human-driven Approach to Analyze Interview Transcripts*. *Journal of Educational Data Mining*, 18(1), 156-179.
