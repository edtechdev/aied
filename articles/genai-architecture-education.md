---
title: "Gen-AI-tecture: using generative AI to support architectural students in design tasks"
created: "2026-05-21T04:33:04-04:00"
updated: "2026-08-24T10:30:00-04:00"
type: article
tags: [generative-ai, higher-ed, student-experience, creative-thinking, ai-literacy, personalized-learning, equity, professional-training, educational-measurement, constructivist]
sources: ['raw/papers/2605.21361.md']
confidence: high
---

Kapsalis (2026) presents one of the first empirical studies of generative AI integration in architectural design education, using a locally executed, discipline-specific tool within a mixed-methods focus-group design. The study addresses three objectives: creativity impact, inclusivity enhancement, and employability preparation. Results showed enhanced creative fluency, broadened participation across diverse learner profiles, and strengthened student confidence in AI-supported workflows.

This work extends the [[generative-ai]] education literature beyond text-based domains (coding, writing) into visual-spatial design disciplines. The finding that gen-AI tools broadened participation is particularly significant for [[equity-in-ai-education]] research — students who traditionally struggled with manual drafting or 3D modeling gained new entry points. This connects to [[ai-literacy]] discussions about AI as an [[accessibility]] tool and [[personalized-learning]] frameworks that emphasize multiple pathways to competence.

The emphasis on locally executed (non-cloud) AI is also noteworthy for [[educational-measurement]] and [[privacy]]-conscious deployment. The study operationalizes [[constructivist]] principles by positioning AI as a tool for learner-led meaning-making within human-AI networks. For [[faculty-development]], the paper provides evidence-based guidance on gen-AI integration in studio-based disciplines, an area where the [[stanford-evidence-base-ai-k12-2026]] and related literature have been thin.

## Synthesis

> The Gen-AI-tecture study shows that a bespoke, locally executed image-generation workflow can act as a constructionist "microworld" for architectural ideation rather than a mere image generator. Its convergent mixed-methods evidence — statistically strong correlations between questionnaire subscales and reflexive qualitative indices — indicates the tool most robustly expanded students' creative search space, operated as a modest equalising mechanism for inclusive participation, and built immediate AI-handling confidence while leaving longer-term employability transfer more uncertain. The work demonstrates how a domain-specific, human-in-the-loop GenAI tool can operationalise [[constructivist]], [[universal-design-for-learning|UDL]] and connectivist principles within a studio pedagogy, extending largely text-focused AI-education research into the visual-spatial domain.

## Key Findings

1. Creativity: students reported strongly enhanced idea generation (A1 = 4.5) and experimentation (A2 = 4.2), with the creative subscale correlating strongly with qualitative indices of divergent exploration (ρ = .76 for "more ideas than usual", ρ = .79 for "experimenting beyond usual repertoire"), though refinement of final decisions (A3 = 3.7) was less uniformly supported.
2. Inclusivity: the workflow operated as a modest equalising mechanism — inclusivity items clustered high (3.8–4.1) and correlated strongly with feeling the session was "approachable/welcoming" (ρ = .74) and "keeping up regardless of prior AI use" (ρ = .81), with students less confident in drawing or with limited AI experience reporting they did not feel disadvantaged.
3. AI-handling and employability: in-session procedural confidence rose (C1 = 3.7, C2 = 3.5), but confidence in transferring these skills beyond the studio was markedly lower (C3 = 2.6), exposing a gap requiring sustained, curriculum-level provision.
4. Engagement: students produced roughly 80 images per session (~10 each) with acceptance rates above 60%, and used all three operation modes substantively — a modest preference for text-only prompting (Mode A) combined with continued reliance on reference-image and hybrid modes.

## Background and Research Gap

The paper situates itself in a literature that has largely studied generic AI platforms rather than bespoke, discipline-specific tools aligned with architectural workflows and studio cultures. Prior work documents steep learning curves, fragmented toolchains and unpredictable outputs, pointing to the need for scaffolded training and explicit studio protocols. Survey evidence cited in the paper notes that nearly 70% of architecture students already use AI tools independently despite over 95% reporting no formal AI education, while the RIBA's 2025 "AI Report" finds over half of practices now integrate AI into projects — foregrounding employability stakes and the case for embedding [[ai-literacy]] into design education.

## The Intervention: A Local, Discipline-Specific Workflow

The Gen-AI-tecture intervention centres on a bespoke image creation-and-editing workflow implemented as a localised ComfyUI node-based system, powered by the Flux 1 Kontext (dev) diffusion model fine-tuned via Low Rank Adaptation (LoRA) on the InteriorNet dataset of 20 million interior shots. The tool offers three modes — text-driven (A), reference-image-driven (B), and hybrid (C) — using in-painting to edit masked regions while preserving scale, perspective and context. Pedagogically it aligns with [[constructivist]] principles and [[universal-design-for-learning|UDL]] by supporting learning-by-doing and multiple means of representation and expression, lowering technical barriers while still requiring reflection, judgement and iteration in line with studio pedagogy.

## Study Design and Methods

The study adopts a focus-group, mixed-methods design with two groups (n = 8 each) of Level 3–5 architecture students at the University of Derby, purposively sampled for diversity in academic level, international status, declared disability, gender and prior digital-design familiarity. Sessions followed a stepwise 90-minute structure: warm-up and consent, a two-phase design task (Phase A create a master bedroom via Mode A; Phase B edit a living/dining room via Modes B/C), then a reflexive discussion and a post-session usability questionnaire. Data collection combined an eleven-item Likert "Usability Evaluation" questionnaire and semi-structured discussion, analysed convergently — reflexive thematic analysis in NVivo (Braun & Clarke framework) plus descriptive statistics and Spearman's ρ rank-order correlations with Holm-adjusted p-values to test convergent validity between quantitative and qualitative indices. Around one-third of the sample declared a disability, including almost one-fifth reporting a specific learning difficulty, reflecting the project's inclusive focus.

## Creativity Findings

The creative-skills subscale produced some of the highest scores. Students described expanded ideation — "normally I would stop after two or three options, but with the AI I felt I could quickly push five or six quite different room layouts before choosing one" — and stylistic experimentation across atmospheres and textures they would not usually draw. A3 (refinement) was more nuanced, with some students noting the AI helped them spot unconsidered combinations while others felt it could distract with details that did not fit the concept. The strong convergent correlations position the workflow as a cognitive artefact and "more knowledgeable other" that supports [[metacognition|metacognitive]] talk about design moves and trade-offs.

## Inclusivity Findings

Inclusivity-oriented items clustered in the upper-mid range, with students describing the tool as levelling: "Normally my rough sketches do not look like what is in my head, but here the AI helped me show the idea without needing perfect linework." The workflow reduced anxiety in crit-type situations and was experienced not as a bolt-on accommodation but as part of the "normal" design process — consistent with [[universal-design-for-learning|UDL]]'s proactive, whole-cohort framing and with AI as an [[assistive-technology]] for disabled and [[neurodiversity|neurodivergent]] learners. The paper contrasts this with literature warning that AI can exacerbate inequities, arguing that a carefully scaffolded, locally controlled workflow can enable students to "keep up" irrespective of prior AI or drawing experience.

## AI-Handling, Employability and Limitations

Students developed procedural confidence — "Seeing the mask, prompt and seed together helped me think of the AI as another tool in the workflow, not a magic black box" — but expressed uncertainty about transferring these skills professionally ("I am not yet sure I could explain the technical side confidently in an interview"). The study acknowledges limitations: a small, purposively sampled single-institution cohort; a single 90-minute exposure reliant on self-report; and a workflow fine-tuned for residential interiors that may not generalise to other design typologies or less supported environments. The paper calls for larger, multi-cohort, longitudinal and co-designed studies.

## Implications

- **For [[instructional-design]] and studio pedagogy:** a locally run, human-in-the-loop GenAI workflow can expand students' creative search space and lower barriers to high-quality visual output without replacing design thinking, positioning AI as a visual co-pilot rather than an opaque generator.
- **For [[equity-in-ai-education|equity]] and [[inclusive-learning]]:** discipline-specific tools embedded in UDL-informed session design can act as a modest equalising mechanism, reducing anxiety in crits and supporting learners with weaker drafting or visualisation skills and those with declared disabilities.
- **For [[curriculum-design]] and [[professional-training]]:** the low C3 score signals that building transferable AI-handling competencies requires sustained, curriculum-level provision rather than single sessions; AEC employers increasingly expect such skills.
- **For [[ai-literacy]] and [[agency]]:** making prompts, masks and seeds legible foregrounds procedural understanding and preserves learner authorship, supporting ethical, transparent and critically reflective AI use.

## Connected Concepts

- [[generative-ai]]
- [[equity-in-ai-education]]
- [[ai-literacy]]
- [[personalized-learning]]
- [[educational-measurement]]
- [[constructivist]]
- [[faculty-development]]
- [[creativity]]
- [[higher-ed]]
- [[student-experience]]
- [[design-thinking]]
## Connected Articles

- [[stanford-evidence-base-ai-k12-2026]]
## Citation

Timo Kapsalis (2026). [Gen-AI-tecture: using generative AI to support architectural students in design tasks](https://arxiv.org/abs/2605.21361). Submitted to Journal of Architectural Education.
