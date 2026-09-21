---
title: "Dynamic Learning Solutions: A System for Personalized Educational Video Generation"
created: "2026-09-15T10:30:00-04:00"
updated: "2026-09-19T07:04:04-04:00"
type: article
pedagogy: [video-education]
technology: [adaptive-learning, generative-ai, multimodal, personalized-learning, rag]
ethics: [multilingual-learning]
sources: ['raw/papers/personalized-educational-video-generation-2026.md']
confidence: high
research_method: [system development, user study]
discipline: [science education, math education]
audience: [instructors, learners]
level: k 12
---

> **Synthesis:** Dynamic Learning Solutions is an end-to-end pipeline that turns a student-uploaded textbook PDF into a narrated, animated video answer to that student's question. A [[rag|retrieval-augmented generation]] stage built on LangChain indexes the document in Chroma with GPT4All MiniLM-L6 embeddings, retrieves context and writes a multi-scene script with explicit "visuals of" prompts; Stable Diffusion renders each scene, DynamiCrafter animates it, Google Text-to-Speech narrates it, and MoviePy assembles the synchronised result behind a Streamlit interface. The pipeline is tuned for NCERT textbooks — the standardized Indian school books — with regex cleaning of page furniture and figure-reference handling, and it supports English-to-Hindi, Kannada, Tamil and Telugu narration. The authors report a demonstration to students and teachers who preferred the video explanations to plain text, but the evaluation is [[qualitative-research|qualitative]] only: no retrieval accuracy, no correctness measure and no [[learning-gains]] data are reported.

## Key Findings
1. The system converts a user-uploaded PDF and a natural-language query into a complete educational video, with the RAG stage producing both a scenes file for narration and a prompts file for image generation from one retrieval pass.
2. Retrieval is deliberately optimized for NCERT structure: page headers such as "SCIENCE 8", keyword boxes and summary sections such as "WHAT YOU HAVE LEARNED" are stripped by regular-expression cleaning before chunking, which the authors state reduces embedding noise and improves retrieval relevance.
3. Figure references following NCERT patterns such as "Fig 8.1" or "Fig 5.2" are detected by pattern matching, and the surrounding caption text is extracted into separate figure documents that are indexed alongside normal text chunks so diagram explanations can be surfaced when queries reference figures.
4. The authors claim this structure-aware pipeline improves retrieval precision and contextual grounding over a baseline generic RAG pipeline, but present no comparative retrieval measurements to support the claim.
5. Two interchangeable [[llm]] backends are offered — Groq's llama-3.1-70b-versatile and locally served Ollama llama3.2 — both configured with temperature 0 for consistent, low-variance output.
6. Stable Diffusion was hard-coded layer by layer in PyTorch rather than called as a black box, a design choice the authors justify as improving [[explainable-ai|interpretability]] and control over visual generation, and it operates in compressed latent space to keep resource demands low.
7. DynamiCrafter supplies text-guided animation of the generated stills using video diffusion priors and a dual-stream architecture, adding motion and transitions while preserving the original image quality and temporal consistency.
8. Google TTS narrates each scene and computes speech duration so scene length can be matched to narration; MoviePy loops or trims each animated clip to fit, then exports a single synchronised video file.
9. Multilingual output is generated through Google Translate plus gTTS for English-to-Hindi, Kannada, Tamil and Telugu, giving the same visual content multiple narrated language tracks.
10. In the user demonstration, students and teachers responded positively, reported that the explanations were easier to follow than plain text, and teachers described the video format as a useful supplement to textbooks — but no participant count, instrument or [[quantitative-research|quantitative]] result is given.

## Pipeline Architecture
The system is modular and sequential: upload and index, query, retrieve and script, generate images, animate, narrate, assemble. The RAG layer is organized into input, processing and output stages. PyPDFLoader parses the document and can accept text plus embedded images; GPT4All's MiniLM-L6 model produces the embeddings; Chroma stores them persistently so previously processed documents stay available across sessions, which the authors highlight as supporting incremental document updates. The generation stage passes retrieved chunks to the LLM under a system prompt instructing it to answer in the clear explanatory register of an NCERT [[teacher-role|teacher]], keeping outputs grounded in the textbook and away from structural noise.

Script generation is the hinge of the pipeline. Each scene the model writes contains narration, a visual description and a "visuals of" line, and those "visuals of" sentences are extracted with regex into prompts.txt, ordered by scene, to drive image generation. The separation matters: the same retrieved context feeds two downstream modalities, and the intermediate script file makes the video reproducible and inspectable.

| Stage | Component | Role |
|---|---|---|
| Index | PyPDFLoader, GPT4All MiniLM-L6, Chroma | Parse, embed and persistently store chunks and figure documents |
| Retrieve and script | LangChain RAG, Groq llama-3.1-70b-versatile or Ollama llama3.2 | Answer the query and emit multi-scene script plus visual prompts |
| Image | Hard-coded Stable Diffusion in PyTorch | Render one contextually relevant still per scene |
| Animation | DynamiCrafter | Add text-guided motion and transitions to each still |
| Narration | Google TTS with Google Translate | Synthesize timed, multilingual voiceover |
| Assembly | MoviePy, Streamlit | Match scene length to narration and export the final video |

## Where the System Fits in Multimedia Learning
The paper positions itself inside the [[video-education]] and [[multimodal]] tradition, citing Sync-DRAW, Text2Video-Zero, PALP, Make-A-Video, CogVideo, ModelScope and zero-shot multi-speaker TTS, and explaining what each contributes: prompt alignment for faithful visual prompts, cross-frame attention for temporal continuity, recurrent attention with a VAE for frame-to-frame consistency, and pre-trained image models for scene generation without paired text-video training data. The synthesis rationale is that static textbook material often fails to convey complex concepts, while automatically generated narration plus animation plus textbook-aligned visuals can serve diverse learning preferences.

The personalized component is thin in the technical sense — one video per user query, grounded in that user's uploaded document — but its [[pedagogy|pedagogical]] claim is sharper: the visual script follows the textbook's own explanatory style, so the output stays aligned with what the class is studying rather than drifting into generic web explanations. For [[k-12]] [[science-education]] and [[math-education]], where NCERT-style figure references and worked examples structure the [[curriculum-design|curriculum]], that alignment is the design bet.

The multilingual layer is the [[equity-in-ai-education|equity]]-facing element. Narration can be synthesized directly or generated through translation, producing MP3 audio compatible across platforms, and the authors frame this (with [[multilingual-learning]] support and accurate timing) as making content accessible to learners across Indian language communities. Future work points two directions: upgrading the linear fixed-chunk retriever to an [[agentic-ai|agentic]] RAG architecture with large-context embeddings for multi-step reasoning and cross-chapter synthesis, and replacing standard TTS with generative, context-aware audio whose pacing adapts to the complexity of the material in order to reduce learners' [[cognitive-offloading]] risk from overly dense narration.

## Evidence Gaps and Limitations
The evaluation is the weakest part of the paper. Results consist of a successful generated video per query and a qualitative demonstration to a group of students and teachers; there is no reported sample size, no instrument, no comparison condition and no measure of whether comprehension improved relative to reading the textbook. Claims such as improved engagement are supported by participant sentiment rather than measurement, so the study should be read as a feasibility demonstration of the [[generative-ai]] pipeline rather than as evidence of instructional effectiveness.

Three further boundaries follow from the design. First, the retrieval optimization is explicitly NCERT-specific — headers, summary boxes and figure-numbering conventions of those books — so the authors themselves note the system performs best when users upload content from those textbooks, and behavior on other publishers' material is untested. Second, the "better than generic RAG" claim is asserted without a baseline comparison, so the contribution of the cleaning and figure-extraction steps is unquantified. Third, the pipeline inherits the reliability profile of its generative components: Stable Diffusion images can misrender scientific diagrams or text inside figures, DynamiCrafter motion is guided but not verified against the [[physics-education|physics]] or mathematics being taught, and there is no described step for checking that the narration and visuals are factually correct. The hard-coded Stable Diffusion implementation improves interpretability of the generation process, not correctness of the output.

The system's operational properties are, however, plausible: a fully automated text-in to video-out path, persistent vector storage supporting incremental updates, modular components that can be swapped, and no requirement for the learner to edit video. Its stated bottleneck is retrieval — the same limitation the authors identify when they propose moving to agentic RAG — and its unmeasured quantity is learning.

## What this means for practice

- **Instructors.** Spot-check generated visuals against the textbook before class: Stable Diffusion can misrender scientific diagrams or text inside figures, and no step in the pipeline checks that images and narration are factually correct.
- **Instructors.** Feed the system the book it was tuned for — the regex cleaning and figure handling target NCERT page headers, summary boxes and numbering conventions such as "Fig 8.1" — and treat retrieval as less reliable on other publishers' material.
- **Designers.** Keep the intermediate script file, which separates each scene's narration from its "visuals of" prompts, as the reviewable artifact; it is what makes the video reproducible and inspectable before a full render.
- **Designers.** Add multilingual narration deliberately as an [[equity-in-ai-education|equity]] feature — the same visuals can be narrated in Hindi, Kannada, Tamil and Telugu — but review the translated audio, since no translation-quality measure is reported.
- Treat the output as a supplement to the textbook, not a replacement, until comprehension against plain reading has actually been measured.

## Limitations

- The evaluation is a demonstration rather than a study: feedback came from "a group of students and teachers" with no reported sample size, no instrument, no comparison condition and no measure of whether comprehension improved over reading the textbook.
- The retrieval optimization is explicitly NCERT-specific, and the authors note the system performs best when users upload content from those textbooks, leaving behavior on other publishers' material untested.
- The claim that structure-aware cleaning and figure extraction raise retrieval precision over a generic RAG baseline is asserted with no comparative retrieval measurement reported.
- Output reliability is unverified: animation motion is not checked against the [[physics-education|physics]] or mathematics being taught, and the hard-coded implementation improves interpretability of the generation process rather than correctness of the content.

## Connected Concepts
- [[personalized-learning]]
- [[video-education]]
- [[multimodal]]
- [[rag]]
- [[generative-ai]]
- [[adaptive-learning]]
- [[k-12]]
- [[math-education]]
- [[science-education]]
- [[multilingual-learning]]
- [[storytelling-in-education]]
- [[visualization]]
- [[student-engagement]]
- [[cognitive-offloading]]

## Connected Articles
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[courseblueprint-adaptive-video-generation]] — CourseBlueprint: A Structured Pipeline for Adaptive Pedagogical Video Generation Grounded in Course Corpora
- [[ai-generated-instructional-videos-computing-ed]] — Student Perceptions and Preferences Regarding AI-Generated Instructional Videos in Computing Education
- [[personalized-ai-generated-videos-preference-2026]] — Students Prefer Personalized, AI-Generated Educational Videos over Non-Personalized, Human-Recorded Videos
- [[ai-guided-learning-audiovideo-2026]] — AI-Guided Learning: Research on Knowledge and Skill Acquisition Support Methods Using Deep Learning Audio-Video Processing Techniques
- [[bias-representation-text-to-image-education-2026]] — Bias and Representation in AI-Generated Text-to-Image in Education: A Systematic Review
- [[structrag-diagram-reasoning-ai-tutoring]] — Advancing diagram-based reasoning in AI tutoring systems: a structural approach for STEM education
- [[syal-multimodal-dialogue-stem-2026]] — Multimodal AI Tutoring in STEM

## Citation
Siddhanth Sridhar, Shreya Chaurasia, Baddela Sai Yaswantha Reddy, Deepak Parmar and Shylaja S S (2026). [*Dynamic Learning Solutions: A System for Personalized Educational Video Generation*](https://arxiv.org/abs/2609.14408). arXiv preprint.
