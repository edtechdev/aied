---
title: "RUCAI: An open-source, local-first AI teaching assistant for course planning and classroom support"
created: "2026-11-27T02:15:00-05:00"
updated: "2026-11-27T02:15:00-05:00"
type: article
published: "2026-06-09"
sources: ['raw/papers/henriksen-rucai-local-first-teaching-assistant-2026.md']
confidence: medium
evidence_context: educational
page_kind: [design case]
research_method: [system development]
discipline: []
level: [higher ed]
audience: [instructors, faculty developers, educational technology developers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Henriksen (2026) describes RUCAI, an [[open-source]] teaching assistant that runs on institution-controlled infrastructure and keeps every answer tied to the course documents a [[teacher-role|teacher]] uploaded. The contribution is architectural: the course, not the chat prompt, is the persistent object; a three-tier extraction pipeline ingests heterogeneous readings; intent-aware retrieval selects how much source material a question needs; and a publish-to-student step freezes a bounded corpus and prompt snapshot for classroom use. The paper reports informal pilot observations from two course-planning contexts, not a controlled evaluation. It shows that the system could decline questions its sources did not cover, but it does not establish effects on teacher workload or student learning.

## Key Findings

1. **RUCAI treats the course as the software object.** Teachers configure a workspace with requirements, readings and learning outcomes, then publish restricted student instances from it.
2. **Retrieval is organized by question type.** A narrow factual question and a cross-text comparison use different retrieval scopes, and retrieved chunks are grouped under canonical sources before generation.
3. **Ingestion degrades gracefully.** Born-digital PDFs, scanned PDFs and DOCX files move through a three-tier extraction pipeline with word-based chunking.
4. **The stack is locally deployable.** FastAPI, PostgreSQL with pgvector, and Ollama-served models keep materials and inference on infrastructure the institution controls.
5. **The pilot was small and [[qualitative-research|qualitative]].** Two course-planning contexts were used, one with six assigned readings; the system's refusal to answer outside its corpus was observed in workshop use.
6. **No formal comparison was run.** Citation accuracy, teacher utility and student learning outcomes are named as future evaluation work, not measured results.

## What the system does

RUCAI is built around a teacher-only workspace in which course descriptions, readings and notes are uploaded and then used as the sole grounding for chat. The teacher can ask synthesis questions across texts, develop exercises, and then publish a student-facing instance whose corpus and prompt constraints are frozen; later teacher-side edits do not silently change a published instance. The paper argues that this matters in humanities and text-centered social [[science-education|science teaching]], where the interpretive work is the reading itself and a generic [[conversational-ai|chatbot]]'s unattributed fluency is a poor fit.

Five layers make this work: a FastAPI application and web interface; PostgreSQL with pgvector for metadata and embeddings; Ollama serving a local embedding model and chat model; an ingestion pipeline using direct PDF extraction with OCR fallbacks; and chat/retrieval logic that classifies intent, expands queries and normalizes citations. Chunks are word-based, with an 800-word window and 100-word overlap. The system is MIT-licensed, and the authors point to the repository at [github.com/RUC-Digital-Media-Lab/RUCAI](https://github.com/RUC-Digital-Media-Lab/RUCAI) rather than treating the software as a commercial product.

The comparison with general-purpose tools is deliberately operational rather than benchmark-based: RUCAI is positioned against flat document workspaces and cloud copilots on data sovereignty, course-level semantics and citation traceability, not on a claim that its answers are more accurate.

## What the pilot showed

The paper reports two course-planning contexts: a humanities seminar with six assigned readings, comprising three born-digital PDFs, two scanned PDFs and one DOCX file, and a course-redesign workflow in which a teacher revised a description against new mandatory objectives. The reported observation is behavioral: when a question exceeded the uploaded corpus, RUCAI said that the retrieved texts did not address it, rather than generating an unsupported answer, without special setup by the teacher. The authors frame this as workflow validation of a pilot-stage system; the development cycle was iterative, practice-led and qualitative, with workshop feedback from humanities and social science teachers.

That boundary is worth holding onto. A system that reliably says "the retrieved texts do not address this directly" is a useful design result, but it is not evidence that students learn more from constrained chat, that teachers save time, or that citations are faithful under classroom load. The paper names comparative evaluation of citation accuracy, teacher utility and learning outcomes as future work.

## What this means for practice

- **Instructors.** A source-grounded assistant is most useful where the reading list is the course; ask what a tool does when the corpus runs out before judging its fluency.
- **Faculty developers.** A publish-to-student snapshot keeps the teacher's working materials private while giving students a bounded space; that separation is worth specifying in any local AI deployment.
- **Instructional designers.** Frozen course context is a design choice with a cost: later teacher edits do not reach an already published student instance.
- **Researchers.** Treat a pilot observation as a hypothesis about workflow, not an effect size; the paper itself calls for comparative evaluation.
- **IT and governance leads.** Local-first deployment moves the burden to institutional decisions about [[privacy|data protection]], copyright and review of course materials, not away from them.

## Limitations

- **No controlled evaluation.** The paper makes implementation and workflow claims; citation accuracy, teacher utility and student learning were not measured comparatively.
- **Small qualitative pilot.** Two contexts and a workshop-derived design cycle cannot show how the system behaves across disciplines or at scale.
- **Governance remains local work.** Data protection rules such as GDPR, copyright and text-and-data-mining policies need institutional review before deployment with course materials.
- **Export risk persists.** Nothing in the architecture prevents a teacher or student from copying materials or generated responses into another AI platform; [[assessment|assessment design]] has to account for that.
- **Interpretive labour is not removed.** The authors describe the system as supporting evaluation of course texts, not replacing the teacher's judgment about interpretation.

## Citation

Henriksen, F. (2026). [RUCAI: An open-source, local-first AI teaching assistant for course planning and classroom support](https://doi.org/10.1017/chr.2026.10038). *Computational Humanities Research, 2*, e16.
