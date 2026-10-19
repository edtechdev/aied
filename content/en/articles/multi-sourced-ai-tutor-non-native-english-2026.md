---
title: "Multi-sourced AI Tutor for Non-Native English Speaker Students"
created: "2026-10-19T09:20:00-04:00"
updated: "2026-10-19T09:20:00-04:00"
type: article
sources: ['raw/papers/multi-sourced-ai-tutor-non-native-english-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [system development, design and evaluation study]
level: [higher ed]
audience: [instructors, researchers, educational technology developers]
discipline: [cs education]
pedagogy: [scaffolding, help-seeking, student-support-and-success]
technology: [rag, llm, intelligent-tutoring, prompt-engineering, generative-ai]
methods: [ai-ed-evaluation, quantitative-research]
ethics: [equity-in-ai-education, multilingual-learning, inclusive-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-19"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Shen and colleagues present a [[rag|retrieval-augmented generation]] tutor built for a 400-student intermediate Data Science course, aimed at students who would rather ask a machine than raise a hand. The system accepts questions in Mandarin, translates them into English, extracts the specific question a student is pointing at (for example "P2 Q10"), retrieves from lecture notes, slides, worksheets, project and lab repositories, and the course website, then answers bilingually with a technical-term glossary and without revealing solutions. Evaluation used 91 Piazza posts drawn from 382 text-based posts: 83.52% of responses were judged correct and helpful, 76.92% carried high-quality translation, and question extraction reached 97.46% accuracy on programming posts. The most transferable finding is architectural rather than linguistic: numbering-only references defeat embedding and keyword search alike, so an explicit extraction stage is what makes multi-source [[llm|LLM]] tutoring work in project-based courses. All judgments came from three native Mandarin-speaking authors rating offline outputs, not from students learning with the tool.

## Key Findings

1. The pipeline answers 83.52% of 91 evaluated Piazza posts correctly and helpfully, and 76.92% of the questions receive high-quality Mandarin translation, per the abstract's summary of the full four-stage evaluation.
2. Question extraction is the load-bearing stage. Accuracy reached 97.78% for logistics, 90.74% for conceptual, 100% for environment setup, and 97.46% for programming posts, measured against the original English posts.
3. Retrieval without extraction fails on numbering-only posts: searching all materials including quizzes and exams recovered only 3 of 6 logistics, 4 of 6 conceptual, and 20 of 24 programming target questions within the top 10 results.
4. Multi-source retrieval is productive. With extraction in place, an average of 6.1, 7.7, 7.3, and 6.6 of the 10 retrieved chunks were relevant for logistics, conceptual, environment setup, and programming questions respectively.
5. Translation has to happen before retrieval: overlap between English and translated-post retrievals was 8.5, 7.0, 8.9, and 8.2 out of 10, against 7.0, 5.7, 7.5, and 6.8 for untranslated Mandarin posts.
6. Answer leakage stayed low. Direct solutions appeared in 0% of logistics, conceptual, and environment setup responses and 13.04% of programming responses, where code snippets sometimes slipped through.
7. Weak spots are mundane rather than dramatic: helpfulness fell to 61.90% on logistics posts, and correctness to 80.95%, because the model invented formatting requirements when retrieval returned no clear guidance.

## Why a bilingual tutor, and why now

The motivating problem is social as much as linguistic. The paper cites a 14% rise in international enrollment in computing programs to 298,523 during the 2022-23 academic year, with 23% of those students in mathematics and [[cs-education|computer science]] and 19% in engineering. It then leans on survey work: Polishchuk's 124 first-year engineering and agriculture students reported vocabulary and grammar difficulty and, for 85.5%, a habit of translating utterances into their native language, while 61.25% feared making mistakes. Guo's survey of 840 respondents from 86 countries found students avoiding discussion for fear of being misunderstood.

Those numbers describe a [[help-seeking|help-seeking]] problem, not only a comprehension problem. A student who follows most of a lecture may still not ask a question, because asking costs face. The authors position a non-judgmental interface as the intervention: it removes the audience, accepts the question in the language the student thinks in, and returns an answer checkable against English terminology. That is also why the glossary matters as much as the answer, since an explanation delivered only in English leaves the student unable to connect it to the lecture slide and the exam wording. Mandarin is a starting point, chosen because the authors are mainly native Mandarin speakers, and prior bilingual-instruction work cited in the paper supplies the design warrant without testing this system.

## A four-stage pipeline over many course sources

The architecture has four stages: translation, question extraction, retrieval, and response generation. A Mandarin question goes to the Microsoft Azure AI Translate API first, on the argument that translating early lets the pipeline use GPT-4's programming strength rather than depending on a Mandarin-specialized model. The component is deliberately modular.

Question extraction exists because roughly 35% of collected posts refer to work only by number, such as "P2 Q10" or "FA22 Exam 2 Q10", without restating the problem. In a data science course this matters: projects are sequences of numbered analysis tasks on a dataset, so the exact wording of task 10 carries the requirement. A Llama 3 8B model hosted on Ollama rewrites the reference into a standardized question number, and a rule-based lookup pulls the text from a question bank parsed from past exams and Canvas quizzes.

Retrieval is conventional but broad. Materials span lecture notes, slides, worksheet PDFs, readings, project and lab repositories, and course website HTML, parsed through nbconvert, pptx2md, and fitz, split with LangChain header splitters plus a recursive character splitter, embedded with text-embedding-ada-002, and stored in FAISS. The top 10 chunks are retrieved, with past exams and quizzes excluded so similar items do not crowd out lecture material.

Generation runs on GPT-4. The [[prompt-engineering|system prompt]] casts the model as a tutor for non-native speakers, forbids code snippets and direct solutions, requires source citations, asks for English and Mandarin, and requests a glossary of difficult terms. This is where [[scaffolding|scaffolding]] is enforced: in instructions, not in a separate answer check.

## What the evaluation measured

The corpus came from 620 Piazza questions in one semester, of which 238 were dropped because they contained images, leaving 382 text-based posts. The test set combined the top 15% most viewed posts with a random 10% from each category, producing 91 posts: 21 logistics, 14 conceptual, 9 environment setup, and 47 programming. Two native Mandarin-speaking authors rated outputs, with the course instructor breaking ties; Gwet's AC1 reliability came out at 94%, 85%, 83%, 67%, and 87% across the five generation metrics.

Extraction held across languages. Overlap between English and Mandarin extraction results was 98.89%, 72.22%, 100%, and 97.97% for the four categories, and between English and translated posts 95.56%, 74.07%, 100%, and 97.46%. Failures clustered where the original post contained no question number but the Mandarin or translated version still sent the extractor hunting for one.

Response quality was uneven in instructive ways. Correctness was perfect for conceptual and environment setup questions and 97.83% for programming, but 80.95% for logistics. Helpfulness ran from 61.90% on logistics to 93.33% on conceptual, and translation quality and glossary inclusion tracked each other at 71.43% and 95.24% for logistics, 86.67% each for conceptual, 77.78% each for environment setup, and 76.09% and 86.96% for programming.

## Where the pipeline strains

Two failure modes generalize beyond this course. The first is confident invention under retrieval failure: when retrieved chunks did not state a formatting rule, the model assumed one instead of saying the materials were silent. That is [[hallucination-risk|hallucination]] produced by helpfulness pressure, and it concentrates where course logistics live, in syllabus detail and submission requirements that are often poorly represented in a vector store.

The second is leakage under code-shaped questions. Zero percent of logistics, conceptual, and environment setup responses revealed solutions, but 13.04% of programming responses included parts of code snippets despite contrary instructions. A prompt-level prohibition held for prose and slipped for code, suggesting that integrity constraints expressed only in a system prompt are weaker than a post-generation check.

The authors also found that mixing assessment material into retrieval hurts. Including quizzes and exams pulled an average of 7.5 of the 10 conceptual results toward similar past questions, obscuring lecture content, which is why they reserve exam and quiz access for the extraction stage. Next steps are classroom deployment, better translated-post extraction, code-disclosure safeguards, multi-turn interaction, GPT-4o for image posts, and an interface for other instructors.

## What this means for practice

- **Instructors.** Audit how your course refers to work. If students write "P2 Q10" and nothing else, budget for a lookup layer before expecting [[rag|RAG]] to help, because retrieval alone recovered only 20 of 24 programming target questions in this evaluation.
- **Instructors.** Expect the weakest answers where your materials are thinnest. Logistics questions scored 61.90% on helpfulness, so keep syllabus and submission rules in a structured, retrievable form rather than in announcement prose.
- **Instructors.** Treat a no-answer response as a feature. The model's willingness to invent a plotting requirement is a fixable prompt and retrieval problem, but only if you check for it.
- **Developers.** Separate the language, extraction, retrieval, and generation stages so each can be evaluated and swapped. The paper's translation and retrieval components are modular by design, and its evidence shows translation before retrieval recovers relevant chunks that untranslated Mandarin loses.
- **Developers.** Enforce no-solution policies outside the prompt. Code leakage at 13.04% on programming posts occurred with explicit instructions against code, so add a post-generation filter and log any response containing a code block.

## Limitations

- This is an offline evaluation of system outputs on 91 archived Piazza posts, rated by three course authors, not a study of students using the tutor. Nothing here measures learning, retention, or whether students actually asked more questions.
- The raters are the system's designers and the course instructor, and the tie-breaker is an author. Inter-rater reliability was lowest for translation quality at 67% on Gwet's AC1, the metric most central to the bilingual claim.
- Reported summary figures do not fully reconcile. The abstract states glossaries for 64.47% of questions, while the discussion reports 87.91% of responses containing one, and Table 3 lists 95.24%, 86.67%, 77.78%, and 86.96% by category.
- Only Mandarin is supported, in a single intermediate Data Science course with 382 usable text-based posts; questions containing images were excluded from the evaluated system entirely.
- The system returns one response per post and was not tested on multi-turn dialogue, so the follow-up confusion that a real tutoring exchange would surface is outside the measured scope.

## Citation

Shen, Ai, Wang, John, & Syamkumar (2026). [*Multi-sourced AI Tutor for Non-Native English Speaker Students*](https://arxiv.org/abs/2610.22163). arXiv:2610.22163.
