---
title: "Moodle AI Text Question Type"
created: "2026-11-12T10:05:00-05:00"
updated: "2026-11-12T18:05:00-05:00"
type: resource
summary: "An open-source Moodle question type (GPL v3) that grades free-text answers with a large language model against a per-question prompt and optional marking scheme, using OpenAI, Azure or a self-hosted Ollama model and showing the AI's feedback to a human grader."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
reviewed_by: [editor]
---

Most AI quiz integrations send every answer to a fixed grading call. This Moodle question type does the opposite: the instructor writes the rubric. Each question carries a **prompt** telling the model how to evaluate the response and an optional **marking scheme** describing how marks are awarded, so a "write a sentence in the past tense" item can specify ten marks for no errors, zero for broken grammar, and one mark off per misspelling. The model returns a mark and [[feedback|feedback]], and an instructor can see that feedback beside the response when marking by hand.

## What you can do with it

Add an AIText question to any Moodle quiz, write the prompt and marking scheme, and test prompts with an AJAX **prompt tester** in the editing form rather than cycling through preview attempts. Grading runs through two companion question behaviors (immediate and deferred) that must be installed alongside the question type, which keeps AI marking isolated from Moodle's core behaviors; existing attempts that used the legacy `interactivecountback` behavior migrate on upgrade. If the model is unreachable, grading degrades rather than erroring, so an attempt is not lost. Because the question is a native quiz type, results land in the gradebook like any other item — which is what a course team needs before it can treat [[automated-assessment|automated scoring]] as a pilot instead of a demo.

The design also puts the rubric where [[ai-feedback-quality|feedback quality]] is decided: in the prompt, written by the instructor, rather than in a vendor default. That is the honest use of the tool — criteria you can inspect and revise — though it also means the quality ceiling is the rubric, and a vague prompt produces vague marking. Institutions reach for it in the low-stakes, frequent checks that [[formative-assessment|formative assessment]] depends on, where a human would otherwise read forty short answers a night.

## Who it is for

Moodle administrators and developers who already run the site, instructors who want AI marking without a separate platform or commercial license, and researchers who need a controllable grading pipeline to study. It requires Moodle 4.5 or later and API access to a model — either OpenAI or Azure through Moodle's AI subsystem, or a self-hosted Ollama instance through Local AI Manager, which keeps student text on local infrastructure. The plugin is maintained by Marcus Green, is on the Moodle plugins marketplace, and had 33 stars and 36 forks when this page was verified.

## Notes and caveats

Open source under GPL v3 or later, but free does not mean free to run: someone pays for the model API, and the quality of marking depends on model choice and prompt design. Free-text answers leave the Moodle server when a remote provider is used, so the institution's data agreement governs what may be sent; the self-hosted Ollama route exists for sites that cannot send student work out. The repository states no published accuracy or agreement study, so the plugin should not be adopted on the assumption that LLM marking is equivalent to human marking — [[assessment-validity|validity]] has to be established locally against human scores before any grade carries weight. The companion behaviors are a hard dependency: installing the question type alone leaves questions ungradable.

## Connected Concepts

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
