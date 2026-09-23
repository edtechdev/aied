---
title: "Using Gemini and LuaLaTeX to transcribe physics videos into PDF/UA-2 and ISO 32005 math-accessible PDFs"
created: "2026-08-24T09:10:00-04:00"
updated: "2026-09-19T09:11:03-04:00"
type: article
technology: [generative-ai, llm, multimodal]
ethics: [accessibility, universal-design-for-learning]
research_method: [system development]
discipline: [physics education]
sources: ['raw/papers/gemini-lualatex-physics-video-transcription-2026.md']
confidence: high
audience: [instructors, institutions]
level: [higher ed]
---

> **Synthesis:** Looney and Duston (2026) present a mostly automated workflow built from freely available tools that turns instructional physics videos into math-accessible PDF transcripts. Guided by carefully crafted system instructions, a [[multimodal]] [[generative-ai|Gemini model]] in the AI Studio environment both listens to the audio track and watches the video (sampling one frame per second), transcribing all board-written or screen-presented equations into LaTeX and weaving them into the verbal flow or descriptive segments. Gemini's output is pasted into a prewritten, SE-tagging-enabled LuaLaTeX preamble and compiled locally; the resulting PDFs routinely compile without errors and pass PDF/UA-2 and ISO 32005 validation. This addresses an [[accessibility]] gap for [[special-education|blind and low-vision students]] and supports [[inclusive-learning|inclusive]] [[physics-education]] by making equation-heavy [[llm|AI]] transcription a practical, reproducible alternative to manual accessible-math transcription.

## The Accessibility Problem

Well-made [[video-education|instructional videos]] expand access to mathematically intensive [[stem-education|STEM]] content and enable interactive [[pedagogy|pedagogies]], but they pose a major barrier for [[special-education|blind and low-vision students]]. Educational institutions face legal and [[ethics|ethical]] mandates to provide accessible materials under the Americans with Disabilities Act (ADA), the Web Content Accessibility Guidelines (WCAG), and the unified PDF/UA-2 and ISO 32005 standards. Translating a multi-channel, multi-sensory experience—in which an instructor simultaneously speaks, gestures, and writes complex [[math-education|mathematics]]—into a single-channel, screen-readable format is structurally and technically formidable. Existing tools fall short for this specific task: Mathpix Snip and Purdue's ink2html transcribe written math or images of math to LaTeX but lack audio capability; Equatio can transcribe dictation or screenshots but not both simultaneously; AudioTTo pairs Faster-Whisper speech transcription with Gemini but relies on separate slides; and VoiceMath is a [[human-in-the-loop-ai|human-in-the-loop]] application largely restricted to collaborators. The authors—who together maintain roughly 300 instructional physics videos—needed a free, widely available, mostly automated system that integrates audio and visual information, resolves gestural referents, and embeds mathematics directly into a math-accessible transcript.

## The Transcription Workflow

The pipeline pairs Google Gemini in the AI Studio environment with LuaLaTeX. Gemini was chosen for its generous free tier and its ability to both listen to the video's audio track and watch the video track, sampling one frame per second by default; a YouTube URL option expedites processing when creators allow embedding. The transcribing model, guided by the authors' system instructions, produces LaTeX output in which all board-written mathematical expressions are transcribed into LaTeX math and incorporated into the verbal flow or presented in descriptive segments that also describe graphs, diagrams, and pedagogically important actions. This LaTeX output is appended to a prewritten shell document whose SE-tagging-enabled preamble is compiled by a LuaLaTeX engine. Since November 2025, LuaLaTeX has stably implemented automated Structure Element (SE) tagging, allowing the same semantic and structural information found in accessible HTML plus MathML to be embedded into the PDF tagging tree. Compilation is validated using PDFix Desktop Lite, which tests for both PDF/UA-2 and ISO 32005 compliance; because fully compliant PDFs can fail out-of-date tools, an up-to-date PDF-Association-approved checker is recommended.

## Evaluation and Findings

The authors tested their v6m system instructions and preamble on 16 videos spanning lightboard, whiteboard, and screencast formats across introductory physics topics, produced by two [[teacher-role|faculty]] members. The single-shot transcriptions of videos 1-8 and 10-16 compiled without errors and passed the PDFix PDFUA-2-ISO32005 validation test, while video 9 required a second attempt after an improperly wrapped inline-math expression). Verbal transcription accuracy was judged very good: the expert-transcriptionist persona pushes Gemini toward lightly cleaned verbatim, while visual context helps it resolve mumbles. Mathematical accuracy was strong—Gemini often corrects obvious board-written errors (e.g., fixing closed-integral notation in Gauss's law) and can handle Dirac notation, quantum-mechanics material, and Maxwell's equations. Gemini occasionally makes nonhuman notation changes, such as using uppercase V for velocity or substituting 𝚤̂, 𝚥̂, and k̂ for unit vectors, but these are easily corrected with follow-up prompts. A detailed subscript framework distinguishes math-coded single-character subscripts from text-coded multi-letter labels so screen readers read them appropriately, and un-stacks vertically stacked board-written subscripts for robustness. Visual descriptions of graphs and diagrams were weaker, reflecting the inherently [[qualitative-research|qualitative]] nature of such content, though the authors report a striking case where Gemini transcribed a physically correct 0.5 kg mass from visual evidence alone despite the presenter saying "5 kg." A neo-minimalist instruction-set experiment found that minimalist prompts can pass validation but proved unreliable for consistently clean output.

## Significance and Implications

The authors argue their workflow likely exceeds an expert human transcriber with a degree in physics and LaTeX/MathML command—and vastly exceeds what most instructors can produce manually—at a far smaller time cost. They note that LuaLaTeX-produced SE-tagged PDFs deliver the same technical mathematical accessibility as HTML plus MathML in a more stable and portable format that can be posted anywhere. The publicly available supplementary materials include the full v6m system instructions, the preamble shell document, all test LaTeX sources and compiled PDFs, and the neo-minimalist experiment files, enabling others to use, adapt, study, and extend the framework. The authors recommend modest [[governance|institutional]] investment in centralized LuaLaTeX expertise to reduce the cost of widespread accessible transcription, and envision a future one-button system producing a compiled PDF or editable LaTeX source. The work also carries practical caveats: free-tier AI Studio data may be used for [[pedagogical-llm-training|model training]], so protected or proprietary content must be excluded, and a local TeX Live installation is currently required because web-based Overleaf's free tier times out on the rigorous SE-tagging compilation.

## What this means for practice

- **Instructors.** Reuse the authors' v6m configuration instead of writing your own instructions: with the publicly shared system instructions and SE-tagging-enabled preamble, the single-shot transcriptions of videos 1–8 and 10–16 compiled without errors and passed the PDFix PDF/UA-2 and ISO 32005 validation test, with only video 9 requiring a second attempt, whereas minimalist prompts passed validation but proved unreliable for consistently clean output.
- **Instructors.** Compile with a stable, modern LuaLaTeX engine and check the finished PDF with an up-to-date, PDF-Association-approved validator, since fully compliant files can fail out-of-date checkers.
- **Instructors.** Expect to review two weak spots and fix them with follow-up prompts: the workflow substitutes nonhuman notation such as uppercase V for velocity and the unit-vector forms 𝚤̂, 𝚥̂, and k̂, and its descriptions of graphs, diagrams, and presenter gestures are markedly weaker than its equation transcription.
- **Administrators.** Fund a modest, centralized LuaLaTeX/TeX Live capability: the authors recommend institutional investment to reduce the cost of widespread accessible transcription, and the pipeline currently needs a modern local TeX distribution because web-based Overleaf's free tier times out on the rigorous SE-tagging compilation.
- **Administrators.** Keep protected or proprietary recordings out of the free-tier Google AI Studio workflow, because free-tier submitted content may be used for model training.

## Limitations

- The evaluation rests on 16 videos, two of them purpose-built test videos, all produced by the two authors and concentrated on introductory physics topics; the authors state this "surely does not encompass the full diversity of the space of introductory physics videos."
- Testing of higher-level mathematics and physics transcription was limited, and while the system instructions make special provisions for coding SI units they contain no special instructions for English units, so generalized-capability claims rest on four videos (3, 5, 10, and 14).
- Visual descriptions of graphs, diagrams, and presenter interactions were markedly weaker than equation transcription; in the second half of the transcription of video 15, the presenter's interactions with graphs were difficult to fully understand from the transcript alone.
- The workflow depends on free-tier Google AI Studio, where submitted content may be used for model training, and on a local TeX Live installation, because web-based Overleaf's free tier timed out on the SE-tagging compilation.

## Connected Concepts

- [[accessibility]] — the core goal of producing screen-readable math-accessible PDFs
- [[physics-education]] — the domain of the transcribed instructional videos
- [[generative-ai]] — Gemini powers the transcription workflow
- [[universal-design-for-learning]] — accessibility-by-construction framing for video-based STEM learning
- [[multimodal]] — Gemini integrates audio and visual information from video
- [[llm]] — the underlying transcription engine
- [[assistive-technology]] — screen readers are the target consumers of the accessible PDFs
- [[inclusive-learning]] — accessible transcripts support diverse learners
- [[special-education]] — the blind and low-vision students the system is designed to support

## Connected Articles

- [[ludia-udl-ai-thought-partner-2026]] — UDL-aligned AI tool design in education
- [[llm-computational-thinking-physics-2026]] — LLMs applied to physics education
- [[hashmi-socratic-physics-chatbot-2025]] — AI chatbot for physics learning
- [[multimodal-affective-its-presentation]] — multimodal AI in an intelligent tutoring context
- [[learnlm-improving-gemini-learning]] — improving learning outcomes with Gemini models

## Citation

Looney, C. W., & Duston, C. L. (2026). [*Using Gemini and LuaLaTeX to transcribe physics videos into PDF/UA-2 and ISO 32005 math-accessible PDFs*](https://arxiv.org/abs/2608.20733).
