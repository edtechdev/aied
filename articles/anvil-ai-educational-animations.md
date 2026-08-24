---
title: "ANVIL: Analogies and Videos for Lecturers"
created: "2026-05-21T04:33:04-04:00"
updated: "2026-08-24T04:41:11-04:00"
type: article
tags: [generative-ai, llm, instructional-design, higher-ed, cs-education, teacher-role, multimodal]
sources: ['raw/papers/2605.16295.md']
confidence: high
---

Noviello, Birillo, and Migut (2026) present ANVIL, an end-to-end multimodal generation pipeline for educational content — one of the first systems to automate the full journey from concept definition to rendered instructional animation. The four-stage pipeline (analogy generation, screenplay compilation, animation code generation with automated repair) represents a significant advance in AI-generated [[instructional-design]] materials.

ANVIL's evaluation approach is methodologically notable: rather than relying solely on automated metrics, the authors ground quality assessment in teacher evaluations and then use those findings to guide scalable automated screening. The LLM-based evaluator for analogy quality and fidelity-to-screenplay proxy for video assessment offer a replicable framework for evaluating [[generative-ai]] educational outputs at scale — addressing a key challenge identified in benchmark and efficacy-study literature.

The positive educator response to perceived value and usability suggests that AI-generated instructional content may be crossing a threshold of practical classroom utility. This connects to the [[teacher-role]] discussion: ANVIL positions AI as a content-generation assistant that amplifies rather than replaces instructor expertise. The focus on CS education also complements the [[cs-education]] literature on AI tools, though ANVIL's architecture is domain-agnostic and could generalize to [[stem-education]] broadly. For [[faculty-development]], tools like ANVIL lower the production barrier for high-quality instructional media, potentially democratizing access to professional-grade educational animations.

## Synthesis

> ANVIL is an open-source, multimodal generative system that automates the end-to-end creation of analogy-based instructional animations for computer science. Given a concept definition, it generates a textual analogy (Textual Layer), compiles it into a structured visual screenplay with defined elements (Screenplay Layer), produces executable manim code (Code Layer), and applies a bounded agentic repair loop to recover from code-generation failures. Rather than relying on automated metrics alone, ANVIL grounds its quality assessment in expert teacher evaluations, then uses those findings to design modality-specific automation: an LLM-based judge screens analogy quality at scale, while a visual-language-model fidelity proxy audits whether rendered videos preserve the intended screenplay. A qualitative user study with educators reveals that ANVIL is valued as a creative collaborator that supports early-stage lesson planning, but that adoption depends on instructor control, editability, and guardrails against pedagogical mismatch. Educators rated most generated analogies and animations as adequate, and the system reliably carried forward intended scene and element structure, with fine-grained action dynamics as the primary remaining failure mode.

## Key Findings

1. ANVIL automates the full pipeline from a CS concept definition to a rendered, executable manim animation through intermediate representations (analogy, visual elements, screenplay), with a bounded agentic diagnose–repair–verify loop (capped at 3 iterations) that recovered all 50 end-to-end runs in the robustness analysis — 76% succeeded without any repair, and without the repair agent 24% of runs would have failed to render.
2. In a rubric-based evaluation with 11 CS/SE educators across five institutions, analogies were rated highly (median Target Concept Coverage and Mapping Strength of 3–4 on a 4-point scale for most topics) and animations were typically faithful to their textual analogies, while expert agreement was concentrated on adequacy (Gwet's AC1 of 0.77 TCC, 0.75 ATA, 0.71 MS) with disagreement mostly between adjacent high scores.
3. An LLM-based analogy evaluator validated against expert judgments achieved strong agreement on collapsed adequacy labels (α = 1.00 TCC, 0.81 MS) and found that 88% of analogies met the TCC threshold and 92% met the MS threshold, supporting scalable candidate filtering.
4. A VLM-based screenplay-to-video fidelity proxy showed that videos more consistently preserved intended scene structure (94% met threshold) and element fidelity (88%) than fine-grained action dynamics (52%), identifying action execution and ordering as the primary failure mode.
5. Focus groups with 9 educators surfaced four themes: ANVIL functions as a creative collaborator rather than a content replacement; adoption requires instructor control and low-effort customization; visualizations risk pedagogical mismatch (e.g., the Stack-as-pancakes animation weakening the salience of restricted access); and the tool is best suited to supplementary or asynchronous learning with modular use.

## System Architecture

ANVIL is built as a staged, intermediate-representation pipeline designed to keep humans in the loop at the point where errors are cheapest to catch. The **Textual Layer** frames analogy generation as a source–target domain mapping problem: given a concept definition (the target domain), an LLM proposes a familiar scenario (the source domain) and constructs an explicit property-by-property mapping, grounded in Structure-Mapping Theory and constrained by a coverage requirement that every property in the definition receives a corresponding source-domain property. The **Screenplay Layer** exists because direct analogy-to-manim conversion proved unreliable, producing object overlap and inconsistent narrative structure. It decomposes the analogy into concrete visual elements (each encoded with a name, role, actions, and a manim class template, optionally reusing a curated catalog of SVG assets) and compiles a natural-language, scene-level screenplay specifying element placement, actions, state changes, and on-screen text. The **Code Layer** then combines elements and screenplay into a self-contained manim program using a fixed template with reusable utility functions.

Robustness is handled by an **agentic repair** mechanism: a bounded diagnose–repair–verify loop runs static checks (via pylint) and executes the script to surface runtime errors, feeds diagnostics to a repair LLM, and re-checks the revised output, capped at three iterations. All intermediate artifacts — analogy, elements, screenplay, scripts, and the final video — are saved for inspection and reuse, reinforcing the human-in-the-loop and [[open-source]] design philosophy.

## Human Evaluation

To assess pedagogical quality, the authors recruited 11 educators (8 university professors and 3 PhD candidates) from five institutions across three countries. They curated nine topics spanning data structures (Stack, Binary Search Tree, Hash Map), algorithms (Recursion, Linear Search, Merge Sort), and software-engineering patterns (Singleton, Observer, Model–View–Controller). Quality criteria were adapted from prior work: analogy quality used Target Concept Coverage (TCC) and Mapping Strength (MS), while animation quality used Alignment with Textual Analogy (ATA) and Visual Clarity (VC), grounded in multimedia learning and motivation theory. Ratings used a 4-point Likert scale with no neutral midpoint to force directional judgments.

Inter-rater agreement was low on fine-grained ordinal ratings (α ≤ 0.15) but concentrated between adjacent high scores; collapsing to binary adequacy labels raised exact agreement to 66.9–81.0%, and Gwet's AC1 indicated substantial agreement for TCC (0.77), ATA (0.75), and MS (0.71) with only moderate agreement on Visual Clarity (0.45). Analogies were rated "Strong" or "Very Strong" on most topics, while animation clarity generally scored 3 ("Good"). These results imply that experts broadly agree on overall adequacy while disagreeing on subjective video quality — a finding that directly shapes the automation strategy.

## Automated Evaluation

Because the human-evaluation dataset was dominated by positive examples, the authors could not fully validate an automated evaluator on it alone. They therefore introduced controlled negative examples to build a discriminative LLM-based judge for analogies. Using gpt-5.2 as judge, ANVIL extracts target properties and assigns TCC and MS labels on a 1–4 ordinal scale, averaging three independent runs. Agreement with experts was moderate on ordinal scores (α = 0.66 TCC, 0.67 MS) but perfect for TCC (1.00) and strong for MS (0.81) on collapsed adequacy labels, with 88% of analogies meeting the TCC threshold and 92% meeting the MS threshold.

For video, where subjective quality is difficult to reproduce automatically and realistic negative examples are hard to define, ANVIL adopts a proxy-based audit rather than attempting to emulate human judgment. A visual language model (gemini-3.0-pro) reconstructs an observed screenplay directly from a rendered video, segmenting it into scenes and extracting timestamps, visible entities, actions, and on-screen text using the same screenplay schema ANVIL generates. An LLM-based fidelity judge then aligns target scenes to observed segments and scores Scene, Element, and Action Fidelity. Results show that most videos preserve scene structure (94%) and elements (88%), while only 52% meet the Action Fidelity threshold — indicating that high-level "what should appear" is reliably carried forward but fine-grained temporal dynamics are not. The authors frame both measures as screening and audit tools — a scalable first step before artifacts reach teachers or students — rather than direct measures of pedagogical quality.

## User Study

Two focus groups with nine educators used a 60-minute semi-structured protocol grounded in concrete system outputs, with transcripts analyzed via inductive thematic analysis. Four themes emerged. First, educators saw ANVIL as a **creative collaborator**, not an autonomous content replacement: its core value was providing an initial metaphorical framing that could serve as a lecture icebreaker and a starting point for deeper discussion. Second, adoption depends on **instructor control and low-effort customization** — a black-box generator producing only a finished video was deemed impractical, with educators wanting to adjust objects, text, pacing, and terminology without learning manim, and several requesting natural-language refinement. Third, there is real risk of **pedagogical mismatch**: if a visualization does not preserve key constraints of the target concept, it can lead to divergent interpretations (the Stack-as-pile-of-pancakes animation weakened the sense of restricted access that defines a Stack). Fourth, utility is **context-dependent and modular**: educators preferred using ANVIL for supplementary or asynchronous learning and wanted to use only the Textual Layer to brainstorm analogies or start from a traditional explanation.

## Limitations

The expert study covered a limited set of generated materials, and agreement was stronger for coarse adequacy judgments than for fine-grained ordinal distinctions, requiring label collapsing for threshold decisions. The automated measures are LLM/VLM-based and may reflect model biases; they do not directly capture visual aesthetics or pedagogical effectiveness, and low fidelity scores may partly reflect limitations in VLM-based reconstruction. Future work aims to improve action correctness through stronger constraints and verification across the screenplay and code layers, reduce instructor effort via lightweight editing and iterative refinement, and study ANVIL in authentic teaching workflows (e.g., introductory programming courses) with downstream measures of student understanding and learner experience.

## Implications

ANVIL demonstrates a viable blueprint for scalable, human-grounded evaluation of AI-generated instructional media, pairing expert judgment with modality-specific automation — an LLM judge for screening analogies and a VLM fidelity proxy for auditing videos. This two-tier evaluation strategy offers a replicable framework for the [[ai-ed-evaluation]] literature, addressing the scalability problem that constrains expert-only quality assessment. Pedagogically, ANVIL reinforces the argument that [[generative-ai]] is best deployed as an assistive, human-in-the-loop collaborator: its value peaks when instructors can review and edit the analogy and animation before classroom use, echoing [[scaffolding]] and [[human-in-the-loop-ai]] principles. The focus-group findings on instructor control, editability, and pedagogical mismatch carry direct implications for [[teacher-role]], [[faculty-development]], and [[pedagogical-safety]] — educators will trust and adopt such tools only when they can audit and correct AI output. For [[cs-education]] and [[stem-education]] more broadly, automated analogy-to-video pipelines could substantially lower the production barrier for high-quality instructional animations, potentially improving [[student-engagement]] and [[motivation]] by making abstract concepts more concrete, while remaining attentive to the risk that flawed visualizations propagate misconceptions.

## Connected Concepts

- [[instructional-design]]
- [[generative-ai]]
- [[teacher-role]]
- [[cs-education]]
- [[stem-education]]
- [[faculty-development]]
- [[multimodal]]
- [[llm]]
## Connected Articles

- [[llm-intervention-design-cs-review]] — A review of intervention designs of LLM Integration in Undergraduate Computer Science Education
- [[talebzadeh-ai-green-education-2026]] — The Role of Artificial Intelligence in Green Education: Optimizing Teacher Workflow and Enhancing Pedagogical Design under Sustainable Development Pedagogy (SDP) Constraints
- [[genai-marketing-education-roles-2026]] — When AI Wears Many Hats: The Role of Generative Artificial Intelligence in Marketing Education
- [[concept-catalyst-engineering-scaffolds]] — Creating Learning Scaffolds for Engineering Design Using Concept Catalyst
- [[prompt-based-programming-lesson]] — Teaching Prompt-Based Programming with LLMs: A 45-Minute Lesson with Guided Practice for End-User Programmers
- [[bloom-aligned-educational-control-llms]] — From Execution to Education: A Bloom-Aligned Framework for Measuring Educational Control in LLMs

## Citation

Yuri Noviello, Anastasiia Birillo, Gosia Migut (2026). [ANVIL: Analogies and Videos for Lecturers](https://arxiv.org/abs/2605.16295). arXiv:2605.16295. arXiv:2605.16295 [cs.CY; cs.AI; cs.CL; cs.GR; cs.HC; cs.MM].
