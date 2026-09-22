---
title: "Typology of Generative AI Tools for Education"
created: "2026-09-22T02:52:00-04:00"
updated: "2026-09-22T04:10:00-04:00"
type: article
published: "2026-01-30"
foundations: [ai-education, ai-literacy, agency]
pedagogy: [creativity, pedagogy]
technology: [generative-ai, llm, ai-technologies, multimodal]
methods: [quantitative-research]
ethics: [equity-in-ai-education]
audience: [instructors, instructional designers, curriculum designers, faculty developers, educational technology developers]
level: [primary education, secondary, higher ed]
research_method: [survey]
page_kind: [framework]
source_url: https://osf.io/preprints/edarxiv/4eqrk_v1/
sources: ['raw/papers/typology-generative-ai-tools-education-2026.md']
confidence: high
connected_resources: [gemini-notebook]
connected_faqs: [study-with-ai, ai-save-instructor-time]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-22"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** This typology is a usage census of [[generative-ai]] in education rather than a study of its effects. A late-2025 [[self-report-measures|questionnaire]] reached 211 [[teacher-role|educators]] across nine countries, who nominated the tools they actually used inside nine pre-defined categories; a tool survived into the final list only if two or more educators named it, and only if it was publicly available with a free version. Fifty tools cleared that bar, ordered within each category from most to least reported. The value for readers is the short list itself, not a verdict: it shows where educator attention has concentrated — general-purpose [[conversational-ai|chat assistants]], media generation, document-grounded research tools, and a thinner layer of classroom-specific tutoring and teacher-facing tools — while the criteria that make it usable also build in its biases.

### Overview

The 2026 Typology of Generative AI Tools for Education continues a series the same lead author began with the Typology of Web 2.0 Learning Technologies (2015) and the Typology of Free Web-based Learning Technologies (2020), each of which mapped the educational technology landscape of its moment. This iteration keeps the form of the earlier typologies — categories, named tools, one-line descriptions, links — and changes the subject to systems that generate text, images, audio, video, slides and study materials on request. Its stated purpose is informed, critical tool selection: the authors treat finding a tool as the beginning of integration rather than the end of it, and they place the deciding judgment with educator [[agency]] and [[ai-literacy|AI literacy]] rather than with the list itself.

Two design decisions shape everything in the list. The first is the unit of evidence: educators were asked which tools they used per category, so the typology records *nomination frequency*, not adoption rates, [[learning-gains|learning gains]] or satisfaction. The second is an access filter: only [[edtech-platform|platforms]] that were publicly available and offered some free functionality were eligible, which is why the list is dominated by freemium products and contains no institution-licensed-only systems. The authors are explicit that the list is neither exhaustive nor stable, and that the classification reflects each tool's most common educational use case rather than its full capability set.

### Key Findings

1. **The typology is built from educator nominations, not measurement.** 211 completed responses from nine countries, spanning elementary school, [[k-12|high school]] and [[higher-ed|higher education]], produced 50 tools across nine categories; the inclusion threshold was two or more independent nominations.
2. **Multi-purpose tools break the categories.** ChatGPT appears in three categories (general-purpose [[llm|large language models]], image creation, and presentation generation) and Canva, Copilot and Curipod each appear twice, so the nine categories describe typical use rather than product identity.
3. **Free access was an inclusion criterion, not an afterthought.** The authors required publicly available platforms with a free tier, and note that the sector runs on a freemium model in which advanced features, storage and higher limits sit behind a subscription — often with age restrictions that decide whether students can use a tool at all.
4. **Document-grounded research tools form the most coherent cluster.** The research and study category is led by tools that answer questions over sources the user supplies — NotebookLM, Elicit, SciSpace, Humata, Heuristi and Research Rabbit — rather than general-purpose search.
5. **AI tutoring is present but not consolidated.** The tutoring and [[conversational-ai|chatbot]] category is the smallest of the teaching-facing groups, led by Khanmigo and otherwise populated by subject- or classroom-specific systems (Cogniti, TutorAI, Class Companion, Trellis, MathGPT), a different picture from the general-purpose assistants at the top of the list.
6. **Presentation generation attracted the most distinct products.** Ten tools appear in that category, from prompt-to-deck generators (Gamma, Presentations.AI, Beautiful.AI, Storyd) to educator-specific slide makers (Chalkie, Curipod) and the AI design features built into Canva and PowerPoint.
7. **The authors expect the framework to grow.** They anticipate more categories and more tools per category, single out AI coding tools as a likely future addition for teachers, and argue for working *with* generative AI rather than adopting a fear-based posture, while keeping [[human-in-the-loop-ai|human judgment]] and [[pedagogy|pedagogical]] expertise central.

### How the typology was built

A Generative AI Pedagogies and Technologies Questionnaire was distributed internationally, predominantly through professional education networks on LinkedIn and Facebook. Respondents were given the nine categories and asked to nominate the specific tools they used within each; an additional "Other Miscellaneous" category captured anything that did not fit. 211 educators completed it, from nine countries and across elementary, high school and higher education. The response dataset is published alongside the typology.

Two filters were then applied: a tool had to be reported by more than one educator (frequency greater than one), and the platform had to be publicly available with a free version. Fifty unique tools met both conditions. Within each category, tools are listed from most to least frequently reported. The authors describe the frequency threshold as a way to separate tools with some real traction from individual experiments. This is the same design logic as the two earlier typologies, which were also built from self-reported educator use rather than from procurement data or platform telemetry — a continuity that matters when the resulting list is read as a picture of the field.

### The nine categories

- **General-purpose [[llm|large language models]]** — ChatGPT, Microsoft Copilot, Google Gemini (formerly Bard), Claude, Perplexity, DeepSeek. Conversational systems for [[learning-design|lesson planning]], content creation, explanation, question answering and dialogue.
- **Image creation tools** — Canva AI tools, Adobe Firefly, DALL·E, Midjourney, ChatGPT's DALL·E integration, Copilot, Stable Diffusion. Text-to-image generation for materials, posters and illustrations, including one [[open-source]] model that can run locally.
- **Audio and music generation tools** — Suno, ElevenLabs, Audiobox, Udio, Stable Audio. Song and music generation, [[speech-and-voice-technologies|voice synthesis]] and sound effects for videos, podcasts and language work.
- **Video generation tools** — Sora, Veo, FlexClip, HeyGen, Fliki, Clipchamp. Text-to-video generation alongside editors and avatar tools that assemble [[video-education|instructional video]].
- **Presentation generation tools** — Gamma, Presentations.AI, Beautiful.AI, Canva, Designer in PowerPoint, Storyd, Chalkie, ChatGPT, Curipod, Prezi. The largest category in the typology, spanning prompt-to-deck generators, educator-specific slide makers and AI design features inside existing software.
- **Research and study tools** — NotebookLM, Elicit, SciSpace, Humata, Heuristi, Research Rabbit. Document-grounded question answering, summarization and literature discovery.
- **AI tutoring and chatbot tools** — Khanmigo, Cogniti, TutorAI, Class Companion, Trellis, MathGPT. [[intelligent-tutoring|Tutoring]] and classroom support systems, several of them [[socratic-method|Socratic]] in design.
- **Custom education tools** — Diffit, Magic School, Brisk, EduAide, Curipod, Wayground (formerly Quizizz). Teacher-facing platforms for [[personalized-learning|differentiated readings]], lesson materials, [[assessment|assessments]] and [[feedback]].
- **Other miscellaneous tools** — Character.AI, Skybox AI, MasterpieceX. Role-play characters, 360-degree scene generation for immersive settings, and 3D model creation.

### Cross-cutting patterns

Read across the nine categories, three patterns matter more than any single entry. The first is a split between tools aimed at teachers and tools aimed at teaching: the custom education category is teacher-facing by design (differentiation, materials, [[automated-assessment|grading support]], interactive lessons), while the tutoring category faces students directly and is where [[discipline-specific-aied|subject-specific]] systems have found a niche that general-purpose assistants have not displaced. The second is that media generation dominates the middle of the list. Image, audio, video and presentation tools together account for roughly half of the fifty entries, which suggests that the most widely reported use of generative [[ai-education|AI in education]] is production — making materials — rather than instruction or [[assessment]]. The third is that [[creativity]] and production tools are largely undifferentiated products, whereas the research and study cluster is defined by a shared architecture: [[rag|retrieval]] over user-supplied sources. That architectural difference is the closest the typology comes to a distinction in kind rather than in popularity.

### What the typology does not measure

Nothing in the list speaks to learning outcomes, cost of ownership, privacy terms, accessibility, or the quality of what the tools produce. Presence in the typology means two educators named a tool, which is a statement about visibility in professional networks and about the low friction of free tiers. A reader looking for evidence that a tool improves learning has to look elsewhere; a reader deciding what to pilot now has a defensible starting short list and a documented method for how it was assembled. The list is also already out of date in small ways that the authors anticipated — NotebookLM was renamed Gemini Notebook in July 2026, and Quizizz became Wayground — which is the practical cost of a snapshot format with website links.

## What this means for practice

- **Use it to build a short list, not to settle a choice.** Pick the category that matches the teaching task, take the top two or three tools, then test them against your own material before adopting anything.
- **Check access terms before class use.** "Free" in this typology means a publicly available free tier, not a free product: limits, storage and advanced features are subscription-gated, and the free tiers carry age restrictions that decide whether a tool can be given to students.
- **Prefer source-grounded tools where accuracy matters.** For study, revision and research tasks, the document-grounded tools answer over material you supplied, which makes their output checkable in a way that open-ended chat is not.
- **Re-verify names, prices and features before reuse.** A 2025 snapshot with links ages quickly, and both renames and tier changes have already occurred since the survey.
- **Treat the classification as a use case, not a product boundary.** If a tool you already have appears in a category you had not considered, the typology is evidence that other educators are using it that way, not that the tool is designed for it.

## Limitations

- **Convenience sample from professional networks.** The questionnaire was distributed mainly through LinkedIn and Facebook education networks, so the respondents are self-selected, the nine countries are not identified, and the reported frequencies are not population estimates of educator tool use.
- **Self-reported nominations set a deliberately low bar.** Two independent mentions are enough for inclusion, and the authors present the list as tools with "at least minimal traction," not as evidence of institutional adoption.
- **The free-version criterion excludes a whole class of tools.** Institution-licensed platforms, textbook-integrated assistants and tools that require a school account are absent by construction, so the typology under-represents the tools that districts and universities may actually have available.
- **The evidence is about use, not effect.** No outcome, cost, [[privacy]] or [[accessibility]] data were collected, and the authors position the list as a starting point for [[critical-thinking|critical evaluation]] rather than a recommendation.

## Connected Concepts
[[ai-education]], [[generative-ai]], [[edtech-platform]], [[ai-literacy]], [[ai-technologies]], [[llm]], [[intelligent-tutoring]], [[creativity]], [[equity-in-ai-education]], [[agency]]

## Connected Articles
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026: Exploring Effective Uses of Generative AI in Education
- [[genai-usage-design-students-survey]] — A study of GenAI usage by Design Students (Politecnico di Milano, 2025/2026)
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[ai-generated-slides-student-perception]] — AI-Generated Slides: Are They Good? Can Students Tell?
- [[generative-ai-k12-teaching-learning-systematic-review-2026]] — Generative Artificial Intelligence (GAI) in Teaching and Learning Processes at the K-12 Level: A Systematic Review

## Citation

Bower, M., Torrington, J., & Lai, J. W. M. (2026). [Typology of Generative AI Tools for Education](https://doi.org/10.35542/osf.io/4eqrk_v1). *EdArXiv preprint*.