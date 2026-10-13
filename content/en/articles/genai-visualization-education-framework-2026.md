---
title: "Constructing Meaning, Not Just Charts: A Cognitive–Instructional Framework for Generative AI Usage in Visualisation Education"
created: "2026-10-13T09:08:48-04:00"
updated: "2026-10-13T09:08:48-04:00"
type: article
sources: ['raw/papers/genai-visualization-education-framework-2026.md']
confidence: medium
page_kind: [framework]
research_method: [literature review]
discipline: [learning sciences]
level: [higher ed]
audience: [instructional designers, instructors]
foundations: [agency, ai-literacy]
technology: [generative-ai, visualization]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-13"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Learning to build a data [[visualization]] is now an educational goal in its own right, but [[generative-ai|generative AI]] lets learners produce a polished chart or infographic from a natural-language prompt without doing the analytic and encoding work that makes the artifact educational. This conceptual paper names that gap the process–output divide and reframes infographics and data visualizations as cognitive–instructional systems whose value lies in their construction — a process the authors run across three interlinked functions (thinking, learning, communication) and cross with five learner-centered design layers. Its evidence base is two systematic reviews conducted by the author team, one on information design and [[learning-sciences|the learning sciences]] and one on generative AI in visualization education; the second yields a classification of AI systems by [[pedagogy|pedagogical]] orientation, in which systems that engage learners in reasoning — [[scaffolding|scaffolded interaction]] rather than output generation — have stronger evidence of comprehension and [[self-regulated-learning|self-regulation]] gains. An agency principle, operationalized as transparency, invitation, and fading, distinguishes tools that scaffold the learner's cognitive work from those that substitute for it, and the authors argue that preserving the learner's reasoning is a matter of [[agency]] and dignity, not only instructional efficiency.

## Key Findings

1. The paper synthesizes two systematic reviews — one on information design and the learning sciences, one on Generative AI in visualization education — because each holds only one half of the relationship between construction and learning.
2. The second review classifies AI visualization systems into three pedagogical archetypes; the scaffolded-interaction archetype, where learners reason under guidance, rests on the largest and most rigorous body of work, including randomized and quasi-experimental evidence.
3. Output-focused systems, such as natural-language-to-visualization pipelines and automated dashboard explanation, are supported mainly by [[usability-research|usability]] and satisfaction measures, while epistemic-transparency systems rest largely on studies of expert users rather than learners.
4. The first review screened five databases and coded evidence through the five ADDIE stages, finding gains in comprehension, retention, engagement, [[critical-thinking|higher-order thinking]], strongest in structured and guided environments, but almost no measurement of long-term effects.
5. The framework crosses a three-function thinking–learning–communication process with five learner-centered design layers, organized by an agency line: does the tool keep the learner performing the cognitive work, or perform it for them?
6. Three properties operationalize the agency principle — transparency, invitation, and fading — and the authors argue their presence or absence, not the sophistication of the underlying model, decides whether a tool teaches or merely produces.
7. Evidence supports these layers: proactive agents that pose scaffolding questions produced larger and more durable comprehension gains than agents that only answer queries, and theory-grounded dashboards improved self-regulation at some cost in cognitive load.

## Why Charts Are Not Meaning

Learning to construct a data [[visualization]] is now an educational goal in its own right: students across science, business, health, engineering, and the social sciences are taught to analyze data and represent it visually. Those decisions — what to show, which encoding to choose, how to frame the representation — are the substance of visualization literacy, and [[generative-ai|generative AI]] has changed how they get made. [[llm|Large language models]] and [[multimodal]] systems can now produce a finished chart or interactive dashboard from a natural-language prompt, removing a barrier that once excluded many learners from understanding and creating visualization at all. The authors argue this creates a pedagogical tension rather than a simple gain. Because deep learning arises from [[desirable-difficulties|productive struggle]] and iterative design, a learner who never weighs why a bar chart suits a comparison better than a pie chart obtains a good output but does none of the reasoning. They call this the process–output divide and frame it as a question of [[agency]] and dignity: is the human still the author of meaning, or a consumer of meaning made elsewhere?

## Two Systematic Reviews, One Evidence Base

This is a conceptual contribution. It conducts no new literature search; its argument rests on two systematic reviews run by the author team. The first asked how infographics and information graphics function within educational settings, searching five databases — Scopus (62 records), Google Scholar (63), ERIC (51), the ACM Digital Library (139), and Web of Science (6) — through the [[meta-analysis-systematic-review|PRISMA]] identification, screening, eligibility, and inclusion stages. Of the 321 records identified, 138 were removed by the inclusion and exclusion criteria, 80 more during screening, and 77 on relevance and study quality, leaving a final corpus of 26 studies supplemented by foundational theoretical works. Analysis ran through the ADDIE model and a 5W+1H coding scheme. The second review queried Scopus for the three-way intersection of [[generative-ai|generative AI]], data visualization, and education from 2019 to May 2026. It returned 321 records; 12 duplicates were removed, abstract screening excluded 247, and full-text review excluded 22 more (ten on substantive grounds, twelve proceedings-level entries), leaving 38 studies plus 2 supplementary conceptual references — a final pool of 40.

## The Cognitive–Instructional Framework

The framework integrates two component models. The first treats the visual artifact as a cognitive–instructional system operating across three interlinked functions — thinking, learning, and communication — which are mutually reinforcing rather than strictly sequential and run across several representational layers at once: data, visual encoding, a textual layer, narrative structure, aesthetic choices, and the reader's context and [[prior-knowledge|prior knowledge]]. The second specifies five design layers where an AI system can intervene: [[visualization|data understanding]], visualization reasoning, adaptive [[scaffolding]], collaborative dialogue, and reflection and [[metacognition]]. Placing them together produces the framework's central move: at each point of contact the designer asks whether the tool keeps the learner performing the cognitive work or performs it for them. That question defines an agency line, which the classification of systems shows real tools cross in different directions. A worked illustration runs a district-level child-stunting task twice: a one-shot default that returns a choropleth map with none of the process axis's cognitive work, and a five-step sequence that prompts the learner to establish that stunting is a rate, weighs a choropleth against a sorted dot plot, and asks what a mean-centered color scale should represent.

## Designing for the Thinking Learner

The framework's most consequential implication is that one-shot generation should cease to be the default interaction. A framework-aligned system routes the learner through data-understanding and visualization-reasoning work first, surfaces candidate encodings with their trade-offs rather than silently committing to one, responds to where the learner actually is, and closes with a reflection prompt asking why the chosen representation serves the communicative goal. These are the operational expressions of three properties — transparency, invitation, and fading — and the authors stress they are testable: a tool either exposes its reasoning or hides it, either invites construction or constructs on the learner's behalf, either withdraws support as competence grows or holds it constant. Two findings temper the prescription. Scaffolding is not free: theory-grounded designs that improve self-regulation can simultaneously raise cognitive load, so support must be calibrated rather than uniformly heavy. And learners differ — a learner's prior [[ai-literacy|AI literacy]] moderates which form of support helps most. The prescription is therefore adaptive scaffolding rather than maximal scaffolding. The authors close with an agenda on [[equity-in-ai-education|equity]], measurement and [[transfer-of-learning|transfer]], uncertainty and epistemic cognition, and [[design-based-research|design-based]] validation.

## What this means for practice

- **Instructors.** Replace one-shot chart generation with tasks that make learners characterize the data and choose an encoding before any artifact is produced, then require a closing articulation of what the chosen representation conceals.
- **Instructors.** Ask learners to say what a variable actually measures — a rate versus a count — because that recognition is the thinking work that constrains every later encoding choice.
- **Instructional designers.** Build the interaction so the AI offers two candidate encodings with their trade-offs and poses a question rather than correcting, then fades its prompts as competence grows.
- **Developers.** Make the AI's reasoning inspectable by default, since transparency is what separates a tool that teaches from one that merely produces, and treat that default rather than an options menu as the design decision.
- **Researchers.** Measure whether visualization reasoning survives after the AI is withdrawn, because usability and satisfaction data cannot show that agency-preserving designs build durable [[learning-gains|learning gains]].

## Limitations

- It is a conceptual contribution: the framework is a proposal derived from synthesis, not a structure instantiated in a tool or tested with learners, and its claims about how agency-preserving designs support learning are theoretically motivated rather than empirically demonstrated.
- The empirical grounding is inherited from the two reviews, which necessarily excluded gray literature and work appearing after their search dates — in a field advancing as quickly as generative AI, that means conclusions about the state of the art may date rapidly.
- The second review drew on a single database, Scopus, so relevant contributions indexed only elsewhere may have been missed, and though screening and coding were shared across three reviewers its consistency cannot be reported quantitatively because no formal measure of inter-annotator agreement was computed.
- The first review's inclusion criteria excluded [[medical-education|medical education]], which limits transfer of its findings to that domain.
- The framework itself is a simplification: mapping the design layers onto the thinking–learning–communication phases imposes a tidiness on a process that is recursive rather than cleanly sequential, and the agency line is a heuristic boundary rather than a sharp empirical threshold, since real tools occupy a spectrum between scaffolding and substitution.
- The worked illustration is constructed rather than observed, and the agency principle can stand in tension with access — the paper treats agency as the default to design toward but does not claim it should override access in every case.

## Citation
Purohit, A., Kumawat, K., & Das, S. (2026). [*Constructing Meaning, Not Just Charts: A Cognitive–Instructional Framework for Generative AI Usage in Visualisation Education*](https://osf.io/preprints/edarxiv/3hv85_v1/). EdArXiv preprint.
