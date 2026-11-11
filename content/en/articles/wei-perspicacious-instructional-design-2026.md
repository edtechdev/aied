---
title: "Perspicacious: An Educational Intelligence Platform for Instructional Designers"
created: "2026-11-11T10:25:00-05:00"
updated: "2026-11-11T10:25:00-05:00"
type: article
evidence_context: educational
published: 2026-11-10
page_kind: [framework]
research_method: [user study]
audience: [instructional designers, educational technology developers, researchers]
sources: ['raw/papers/wei-perspicacious-instructional-design-2026.md']
source_url: "https://arxiv.org/abs/2611.13549"
source_depth: full text
confidence: medium
foundations: [learning-design]
assessment: [automated-question-generation, assessment]
technology: [llm, edtech-platform]
methods: [usability-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** [[automated-question-generation|Automated question generation]] and knowledge-component discovery both exist as research methods; almost none of that work reaches the [[learning-design|learning designers]] who would use it, because the methods live in scripts and notebooks. Wei, Sutton and Carvalho built Perspicacious to close that gap — one interface that takes learning objectives, generates [[assessment|assessment items]] through a generate-then-validate pipeline, and extracts knowledge components from an uploaded item bank — and tested it with eight instructional designers. The designers rated it well (mean SUS 78.8) and seven of eight expected to use it in their own work, but the study's more useful output is what they demanded before adoption: steerability, richer item formats, provenance for each generated item, and a warm start so a small job does not spend most of its time waiting. The cost model is candid too: extracting knowledge components from a 576-question bank ran US \$1.98–4.11 and took 36–158 minutes depending on the budget.

## Key Findings

1. **The platform unifies two pipelines behind one interface.** Question generation from objectives and knowledge-component extraction from an existing bank both run from a dashboard, accepting .xlsx, .csv and .json rather than the JSONL the underlying algorithm expects.
2. **Usability was strong for a first prototype.** Eight instructional designers completed both tasks in think-aloud sessions; SUS scores averaged 78.8 (SD = 10.3, range 65–92.5), a "B+" on the standard curved benchmark.
3. **Seven of eight expected to adopt it.** Participants described wanting "a system better than generic ChatGPT", whose output they said produced trivial distractors at scale requiring item-by-item revision.
4. **Cost scales with the deadline, not just the bank.** On a 576-question bank the engine cost \$1.98–4.11 and took 36–158 minutes; a fitted model over 17 production runs explained 97% of variance in completion time.
5. **Small jobs are dominated by start-up.** A 64-question bank took 21 minutes on a single instance, 92% of it waiting for the instance to start, against 13% overhead for a full course bank.
6. **[[trust|Trust]] was the stated condition for adoption.** Two participants made use conditional on trusting output, citing [[hallucination-risk|hallucination]] and wanting generation grounded in uploaded source material; the interface currently cannot show why a question was produced.
7. **Four deployment requirements came out of the study.** Steerability over difficulty, reading level and item type; expressiveness (option-specific [[feedback]], formats beyond multiple choice); provenance; and warm instances or batching for small jobs.

## How the platform and the study are built

The knowledge-component engine is Phi-2, a 2.7B-parameter model served on g2-standard-4 Vertex AI instances at US \$0.8129 per hour, with the number of instances chosen to hit a user's target completion time; the paper fits processing speed (about 0.38 seconds per batch) and fixed start-up overhead (about 19.59 minutes) from 17 jobs that processed 13 real question banks from four schools. Both engines sit inside the deployment's own cloud project, so uploaded questions do not reach a third-party service.

The user study is deliberately narrow. Eight designers from the authors' professional network used the platform for about 40 minutes in two tasks — upload eight learning objectives and get questions, then re-upload 64 of them for knowledge-component extraction — and rated clarity, usefulness and usability. It was a partial Wizard-of-Oz design: the account, upload, dashboard and notification layers were live, while the generated questions and component assignments were prepared in advance with the same pipelines. Participants were told parts of the system were simulated.

## What practitioners asked for that the research literature does not

The requirements read as a critique of how these methods are usually reported. The literature reports model quality; the designers asked for control over difficulty, reading level and question type, because their job is to hit a specification rather than to sample a distribution. They asked for formats beyond multiple choice — open-ended, scenario-based, short-answer, essay — because their courses assess with those. They asked to see why an item exists, because being unable to check provenance makes adoption a matter of faith.

The most practical finding is also the least glamorous: five participants noticed that every generated knowledge component used the verb "identify", which flattened the distinction between lower- and higher-level objectives. That is a component-extraction artifact, not a model failure in the abstract, and it is the kind of thing a designer sees immediately and a benchmark does not measure.

## What this means for practice

- **Instructional designers:** Ask for steerability rather than autonomy. The designers in this study wanted to set difficulty, reading level and item type, and treated unconstrained generation as a source of trivial distractors.
- **Educational technology developers:** Show provenance in the interface if you want institutional adoption. Trust was the explicit condition two participants set, and the prototype could not show why an item or component was produced.
- **Educational technology developers:** Design for the first small job. Start-up overhead consumed most of a 64-question run, which is exactly the scale at which a new user forms an impression.
- **Researchers:** Evaluate the workflow, not only the engine. This study's requirements — steerability, expressiveness, provenance, cost — come from users and would not appear in a benchmark of generated-item quality.

## Limitations

- Eight instructional designers recruited from the authors' professional network is a formative sample; the authors present the results as requirements rather than as an effectiveness estimate.
- The evaluation was partially Wizard-of-Oz, with questions and component assignments precomputed, so it characterizes the workflow and judgments of output, not end-to-end latency or reliability.
- Participants were not subject experts in the study's Environmental Science materials, so content accuracy was judged for plausibility rather than correctness.
- No classroom or learning-outcome data were collected; the study reports usability and perceived utility only.

## Citation

Wei, Y., Sutton, M. C., & Carvalho, P. F. (2026). [*Perspicacious: An Educational Intelligence Platform for Instructional Designers*](https://arxiv.org/abs/2611.13549). arXiv:2611.13549.
