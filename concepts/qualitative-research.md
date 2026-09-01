---
title: Qualitative Research
created: "2026-08-24T02:00:00-04:00"
updated: "2026-08-31T06:34:37-04:00"
type: concept
tags: [qualitative-research, research-methods-aied]
research_method: [qualitative, research methods, interviews, case study]
confidence: high
---

> **Qualitative research** — the family of empirical methods that study how people *experience, interpret, and make meaning* of phenomena, typically through words, observations, and artifacts rather than numbers. In [[ai-education|AI in education]], qualitative methods reveal *how* students and teachers actually experience [[generative-ai|AI tools]] — the meanings, tensions, harms, and mechanisms that standardized measures miss. Because AI-in-education is fast-moving and its effects are often mediated by context, perception, and contested constructs like [[trust]] and [[agency]], qualitative work is essential alongside [[quantitative-research|quantitative]] designs (see [[research-methods-aied]]).

## Questions to Consider

- A survey tells you 40% of students distrust an [[intelligent-tutoring|AI tutor]]; a focus group tells you *why* they distrust it. Which number feels more actionable to you, and what does the 'why' add that the percentage cannot?
- Qualitative findings are usually not statistically generalizable, yet they're often 'conceptually generalizable' — mechanisms and dynamics that transfer elsewhere. Before you read, what does it mean for a finding to be generalizable in concept but not in statistics?
- The page cautions that human–LLM coding *agreement* is not the same as coding *quality* when human consensus isn't ground truth. Have you ever treated 'two reviewers agreed' as proof something was correct? When is agreement a signal of truth, and when is it just shared error?
- If AI can now assist qualitative coding at scale, does that threaten the interpretive depth that makes qualitative research valuable, or merely automate its drudgery? How would you decide which is happening in a given study?
- Qualitative work centers under-represented voices — ethnic-minority students, skeptical nonusers — that large surveys often miss. Think of an AI-in-education claim you've heard. Whose experience of it is probably *not* captured by the headline number?
- Choose one contested construct you care about — trust, agency, or harm. Before reading, sketch how you'd study it with words and observations rather than numbers, and note what you'd lose by doing so.

## Introduction

Qualitative research is not a single method but a family organized by *what* they study and *how* evidence is gathered and analyzed. What unites them is an emphasis on meaning-making, context, and depth over breadth and causal control. Qualitative findings are typically **not** generalizable in the statistical sense, but they are often *conceptually generalizable* — revealing mechanisms, categories, and dynamics that transfer to other settings. In the knowledge base's corpus, qualitative work is prominent for studying AI acceptance, trust, harm, [[teacher-role|teaching]] practice, and learning processes.

## Major qualitative approaches

### Thematic analysis
Thematic analysis identifies, codes, and interprets patterns ("themes") across qualitative data — typically interview or focus-group transcripts, open-ended survey responses, or documents. It is the most widely used approach in the knowledge base's qualitative studies. [[fouad-bentley-trust-utility-gap-physics-2026|A study of the trust–utility gap in physics]] uses thematic analysis of student interview data to surface [[discipline-specific-aied|domain-specific]] skepticism and adoption preferences; [[genai-teacher-feedback-comparison|a comparison of GenAI vs. teacher feedback]] analyzes student perceptions of usefulness and trustworthiness; and [[ai-adult-learning-guidelines-dis2026|guidelines for adult AI learning]] derive design principles from thematic coding of expert and learner input. [[ai-changing-teaching-workflows|How AI changes teaching workflows]] relies on thematic analysis of educator accounts.

### Grounded theory
Grounded theory builds a theory *from the data* rather than testing an a priori framework, using iterative coding (open → axial → selective) until theoretical saturation. It is ideal for constructing new theory about emergent AI-in-education phenomena. [[liu-tool-tutor-crutch-programming-2026|Liu et al.]] develop a grounded theory of *tool, tutor, or crutch* — a three-mode typology of how students cognitively [[scaffolding|scaffold]] or offload onto AI in [[cs-education|programming education]] — directly theorizing [[cognitive-offloading]]. [[favero-critical-ai-tutors-empower-enslave-2025|A grounded-theory study of critical AI tutors]] examines whether such tutors empower or enslave learners. [[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design]] uses grounded analysis across a multisite study. See also [[theory-development-aied]] for how such grounded theories feed the field's theory building.

### Phenomenology and phenomenography
Phenomenological approaches study the *lived experience* of a phenomenon — what it is like to learn with AI — while phenomenography studies the *qualitatively different ways* people experience and understand a phenomenon (producing "categories of description"). [[absent-cognitive-baseline-2026|The Absent Cognitive Baseline]] draws on students' lived experiences of self-assessment under AI to theorize a structural gap; [[metacognitively-discordant-completion-genai-2026|a phenomenological study]] captures the experience of completing work with AI while knowingly not understanding it; and [[genai-runaway-object-math-higher-ed|a socio-cultural, interpretive study]] analyzes how GenAI becomes a "runaway object" in [[math-education|mathematics]] academic practice.

### Discourse analysis
Discourse analysis examines how language-in-use constructs meaning, identities, and power — analyzing classroom talk, written text, or interactional sequences. [[nspa-neuro-symbolic-pedagogical-alignment-2026|NSPA]] conducts long-horizon classroom *discourse analysis* (here computationally assisted) to mitigate dialect bias in understanding classroom interaction; [[scaffolding-critical-engagement-genai-minority-students|a study of ethnic-minority preparatory students]] analyzes collaborative *discourse* in [[prompt-engineering]] tasks. Discourse analysis bridges qualitative interpretation with computational methods when combined with [[educational-nlp]].

### Observations and ethnography
Observation studies watch behavior in context; ethnography extends this to sustained, [[simulation|immersive]] study of a setting, often with the researcher as participant-observer. [[trio-ethnography-llm-programming-education|A trio-ethnography]] of LLM-supported programming education traces how students' interpretations evolve; [[zha-ai-literacy-biology-case-study|a classroom case study]] observes [[ai-literacy]] integration in [[biology-education|biology]]. Observational methods capture *actual* behavior (what learners do with AI) rather than reported behavior — complementing the self-report surveys that dominate [[educational-measurement|quantitative measurement]] of attitudes.

### Case studies
A case study is an in-depth investigation of a bounded case (a course, an institution, a single learner) using multiple data sources. [[drummond-genai-business-schools-framework-2026|A business-school case study]] generates a student-informed teaching and learning framework for GenAI; [[zha-ai-literacy-biology-case-study|a biology case study]] documents AI-literacy integration. Case studies trade breadth for depth and are strong for theory generation and transferable insight rather than generalization.

### Interviews and focus groups
Semi-structured **interviews** and **focus groups** are the primary data-collection instruments across all the above approaches. They elicit rich, contextual accounts. The knowledge base's qualitative corpus is built substantially on interviews (e.g., [[genai-expertise-pathways-sysadmin|expertise pathways]], ) and focus groups (e.g., [[t2i-competence-paradox-2026|the text-to-image competence paradox]], [[ai-adult-learning-guidelines-dis2026]]). Quality depends on careful question design, sampling for variation, and rigorous analysis.

## How qualitative research appears in the knowledge base

- **Mechanism and process.** Qualitative work reveals *why* AI helps or harms. [[same-ai-different-pathways]] uses qualitative strands to unpack mechanisms of AI-mediated learning across contexts; [[ai-tutor-safety-harms|AI tutor safety]] documents the specific [[pedagogy|pedagogical]] harms that quantitative outcome measures miss.
- **Trust, agency, and identity.** Contested, subjective constructs are often best studied qualitatively. [[t2i-competence-paradox-2026]] surfaces how art-and-design students negotiate ease, risk, and creative identity; [[genai-runaway-object-math-higher-ed]] captures AI's role in reshaping academic identity and practice.
- **Equity and under-represented voices.** Qualitative work centers perspectives often excluded from large surveys — [[scaffolding-critical-engagement-genai-minority-students|ethnic-minority students]], , [[becker-chatgpt-typology-physics-2026|skeptical nonusers]]. This connects to [[equity-in-ai-education]].
- **Typology and taxonomy building.** [[becker-chatgpt-typology-physics-2026|A qualitative typology of ChatGPT adoption]] distinguishes pragmatic users from skeptical nonusers — categories that inform later survey instrument design.

## AI and qualitative analysis

A distinctive recent development is using [[llm|LLMs]] to assist qualitative coding. The knowledge base's evidence is cautionary: [[human-vs-llm-ordered-coding]] shows LLM and human coding diverge, with errors cascading through temporal analysis; [[agreement-not-quality-llm-coding-verification|Agreement Is Not Quality]] shows that human–LLM coding *agreement* is not the same as coding *quality* when human consensus is not ground truth. LLM-assisted coding can scale and accelerate qualitative analysis, but its outputs require verification against [[human-in-the-loop-ai|human judgment]] — an important intersection of qualitative research with [[educational-nlp]] and [[ai-ed-evaluation]].

## Strengths and limitations

- **Strengths:** deep ecological and conceptual insight; surfaces unexpected phenomena, risks, and mechanisms; essential for theory-building (see [[theory-development-aied]]); captures meaning, context, and contested constructs; centers under-represented perspectives; strong for studying fast-moving phenomena where standardized measures lag.
- **Limitations:** limited statistical generalizability; interpretive and researcher-dependent (reliability concerns); small samples; weaker support for causal claims; findings can be hard to synthesize across studies; time- and labor-intensive.

Qualitative and quantitative methods are complements, not rivals — see [[research-methods-aied]] for how they contrast and triangulate, and [[mixed-methods-research|mixed methods]] for designs that combine them.

## Connected Concepts

- [[research-methods-aied]]
- [[mixed-methods-research]]
- [[quantitative-research]]
- [[theory-development-aied]]
- [[educational-measurement]]
- [[educational-nlp]]
- [[ai-ed-evaluation]]
- [[equity-in-ai-education]]
- [[trust]]
- [[agency]]
- [[cognitive-offloading]]

## Connected Articles

- [[liu-tool-tutor-crutch-programming-2026]] — Tool, Tutor, or Crutch: a grounded theory of AI-assisted programming
- [[trio-ethnography-llm-programming-education]] — A trio-ethnography of interpretation evolution in LLM-supported programming
- [[absent-cognitive-baseline-2026]] — Theorizing a structural gap in AI-native students' self-assessment
- [[t2i-competence-paradox-2026]] — The competence paradox in text-to-image GenAI use
- [[fouad-bentley-trust-utility-gap-physics-2026]] — Trust–utility gap in physics education
- [[genai-teacher-feedback-comparison]] — Comparing GenAI and teacher feedback: student perceptions
- [[ai-tutor-safety-harms]] — AI tutor safety and pedagogical harms
- [[zha-ai-literacy-biology-case-study]] — Case study of AI-literacy integration in a biology class
- [[becker-chatgpt-typology-physics-2026]] — A qualitative typology of ChatGPT adoption in physics
- [[scaffolding-critical-engagement-genai-minority-students]] — Collaborative discourse in prompt engineering among ethnic-minority students
- [[human-vs-llm-ordered-coding]] — Comparing human and LLM ordered coding of qualitative data
- [[agreement-not-quality-llm-coding-verification]] — Agreement is not quality in LLM qualitative coding
- [[same-ai-different-pathways]] — Unpacking mechanisms of AI-mediated learning across contexts
- [[drummond-genai-business-schools-framework-2026]] — Student-informed GenAI framework via case study
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Critical AI tutors: empower or enslave
- [[genai-runaway-object-math-higher-ed]] — GenAI as a runaway object in higher-education mathematics

