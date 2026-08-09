---
title: "Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation"
created: 2026-05-27
updated: 2026-05-27
type: concept
tags: [prompt-engineering, generative-ai, llm, higher-ed, scaffolding, formative-assessment, multimodal, student-experience, ai-literacy, intelligent-tutoring]
confidence: high
---

**Jim Salsman (2026)** — arXiv preprint. cs.CL; cs.HC.

## Overview

SlidesQAQA is a Flask-based system that extracts text and rendered images from PDF lecture slides and processes them through a four-stage [[llm]] pipeline: **window planning** (segment extraction), **deck synthesis** (cross-slide reasoning), **slide annotation** (per-slide question generation), and **reconciliation** (deck-level revision to reduce redundancy and improve coverage). The key innovation is joint reasoning about slide modality and pedagogical role, with a bounded question budget that forces prioritization of important content.

## How It Works

Unlike earlier [[automated-question-generation]] systems that generate questions slide-by-slide in isolation, SlidesQAQA reasons across the entire presentation. This enables **deck-level scaffolding** — questions build on each other across the slide sequence, matching the intended instructional flow. The reconciliation stage filters non-instructional slides and revises draft annotations to eliminate redundancy, producing structured JSON output with deck-level goals, section structure, slide summaries, question sets, and evaluation scores.

## Comparison to Related Systems

This approach contrasts with [[generate-then-validate-question-gen]] frameworks by front-loading pedagogical reasoning rather than post-hoc validation. Where [[ai-generated-slides-student-perception]] research has shown that AI-generated slide content can be perceived as lower quality, SlidesQAQA focuses on question quality rather than slide generation itself. It also differs from [[aissa-slides-analysis]] systems that analyze slides for accessibility rather than pedagogical question extraction.

## Pedagogical Design

The bounded question budget per slide forces the system to make pedagogical decisions about what content merits a question — an implicit form of [[scaffolding]] that prioritizes key concepts. Initial experiments on two technical lecture decks demonstrated successful filtering of non-instructional slides and generation of pedagogically coherent questions for visually complex content. This has implications for [[formative-assessment]] automation at scale.

## Implications for AIED

SlidesQAQA represents a practical step toward AI systems that understand pedagogical structure rather than just processing content. Its [[multimodal]] approach — jointly processing text and rendered images — addresses a known weakness of text-only question generation systems. For [[higher-ed]] instructors managing large courses, automated pedagogical question generation from existing slide materials could dramatically reduce the burden of creating formative assessments.

## Connected Concepts

- [[adaptive-learning]]
- [[adaptive-learning-systems]]
- [[adaptive-virtual-patient-psychotherapy-training]]
- [[administrator]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[agentic-ai]]
- [[agentic-workflows]]
- [[ai-assistance-reduces-persistence]]
- [[ai-ed-evaluation]]
- [[ai-education]]
- [[ai-literacy]]
- [[ai-tutoring]]
- [[assessment-validity]]
- [[automated-grading]]

## Connected Articles

- [[ai-literacy-power-knowledge]] — AI Literacy: An Exercise in Power-Knowledge
- [[genai-policies-higher-ed-computing]] — A Comparative Analysis of Institutional and Course Generative AI Policies within Higher Education: Implications for I...
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[multiagent-classroom-dual-process-physics-teachers-2026]] — A multi-agent AI classroom based on dual-process reasoning hazards: a pilot with prospective physics teachers
- [[metacognitive-learning-scenarios-taxonomy]] — A Taxonomy of Metacognitive Learning Scenarios in Professional Contexts: Integrating Systems Theory with Empirical Co...
- [[liang-genai-systematic-review-human-ai-2026]] — A systematic review of generative AI in education: Empirical insights from a human–AI interaction perspective
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[automated-presentation-coaching]] — A Survey of Automated Presentation Coaching: Systems, Methods, and Open Challenges
- [[ai-literacy-legal-translation-2026]] — AI Literacy for Legal Translation: Developing Digital Resilience
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[gaide-vibe-coding-k12-teachers]] — A Guiding Framework for K-12 Teachers in Creating AI-powered Learning Technologies through Vibe Coding
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[tool-invariant-framework-agentic-ai]] — A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI
- [[brookings-ai-students-report]] — A New Direction for Students in an AI World: Prosper, Prepare, Protect
- [[aissa-slides-analysis]] — AISSA: AI-based Student Slides Analysis Tool for Academic Presentations
- [[genai-usage-design-students-survey]] — A study of GenAI usage by Design Students: Analysis of Survey Results and Journals of AI practices at the Politecnico...
- [[ai-ethics-education-public-discourse]] — A Longitudinal Analysis of Public Discourse on AI Ethics in Education Using Twitter Data
- [[ai-peer-feedback-systems]] — AI Peer Feedback Systems
- [[institutional-change-framework-ai]] — A Framework for Institutional Change in the Age of AI
- [[teacher-ai-adoption-confidence]] — AI Adoption Among Teachers: Insights on Concerns, Support, Confidence, and Attitudes
- [[teaching-feedback-classification-benchmark]] — A Durability and Cross-Language Transfer Benchmark for a Validated Teaching-Feedback Classification Protocol
- [[llm-tts-dialogue-lesson-generation]] — A Semi-Automated System for Generating Dialogue-Based TTS Lessons Using Large Language Models: An Exploratory Study o...
- [[ai-generated-slides-student-perception]] — AI-Generated Slides: Are They Good? Can Students Tell?
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[llm-intervention-design-cs-review]] — A review of intervention designs of LLM Integration in Undergraduate Computer Science Education
