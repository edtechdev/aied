---
title: "RUCAI"
created: "2026-11-27T15:40:00-05:00"
updated: "2026-11-27T15:40:00-05:00"
type: resource
summary: "A self-hosted, MIT-licensed course AI application that lets teachers build a workspace from their own readings, query it through source-grounded chat, and publish password-protected student instances."
url: https://github.com/RUC-Digital-Media-Lab/RUCAI
source_code: https://github.com/RUC-Digital-Media-Lab/RUCAI
author: "RUC Digital Media Lab"
author_url: https://github.com/RUC-Digital-Media-Lab
resource_type: [application]
access: [free]
license: "MIT"
last_verified: "2026-11-27"
foundations: [teacher-role, human-ai-collaboration]
technology: [rag, llm, conversational-ai, open-source]
audience: [instructors, instructional designers, administrators, educational technology developers]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
reviewed_by: [editor]
connected_concepts: [rag, conversational-ai, teacher-role, open-source, llm, human-ai-collaboration]
---

**RUCAI** is a self-hosted course AI application for teachers who want a chat interface grounded in their own course materials. A teacher creates a course workspace, uploads PDF and DOCX readings, asks questions against those materials, and publishes password-protected student instances from a selected corpus. The application is MIT-licensed and runs on institution-controlled infrastructure, with local model serving through Ollama.

## What you can do with it

The workflow follows the teaching task rather than a generic chat window. A teacher configures a course prompt, ingests readings asynchronously, and gets answers with sources displayed for inspection. Published student instances freeze a bounded set of course material and a prompt snapshot, so later teacher-side edits do not silently change what students see. The default setup uses bge-m3 for embeddings and gemma3:12b for chat, both served locally, with PostgreSQL and pgvector storing courses, documents, chunks, messages, and student instances. A small FastAPI application serves both the teacher and student interfaces, and the repository includes deployment helpers for an Ubuntu VM.

## Who it is for

Instructors who want a [[rag|retrieval-augmented]] assistant bounded to their own readings, instructional designers who need a course-level workspace rather than a document pile, and campus technology staff evaluating a [[conversational-ai|chat interface]] that can be hosted locally. Administrators should read the deployment notes before promising it as a service, because the institution remains responsible for model hosting, access control, and copyright review.

## Notes and caveats

This is research software from a pilot teaching context, not a turnkey campus service. Running it requires Python, PostgreSQL with pgvector, Ollama or a compatible endpoint, and enough CPU or GPU memory for the chosen chat model; the MIT license covers the code, not the hardware or model operations. The repository has a v1.0.0 release and no stars when checked on 27 November 2026, and its own README warns that operators must decide which materials may be uploaded, how long data is retained, and who may access student instances. The application also cannot stop users from copying text into other systems, so course policy and institutional guidance still carry that risk.

## Connected Concepts

[[rag]], [[conversational-ai]], [[teacher-role]], [[open-source]], [[llm]], [[human-ai-collaboration]]
