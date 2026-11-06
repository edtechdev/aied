---
title: "Data Plus Theory Equals Codebook: Leveraging LLMs for Human-AI Codebook Development"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/zambrano-llm-human-ai-codebook-development-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [design and evaluation study]
audience: [researchers]
level: [higher ed, middle school]
discipline: [learning sciences]
pedagogy: [self-regulated-learning]
technology: [llm, prompt-engineering]
methods: [qualitative-research, ai-assisted-educational-research]
foundations: [human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zambrano and colleagues evaluate whether [[llm|GPT-4o]] can build theory-grounded [[qualitative-research|qualitative codebooks]] in collaboration with human researchers. Across two studies — think-aloud data coded through [[self-regulated-learning|self-regulated learning (SRL)]] theory and Minecraft interviews coded through Hidi and Renninger's four-phase model of interest development — the model produced theory-aligned constructs, but prompt design and human refinement decided whether the result was usable. Naming the theory without supplying its papers produced the most practical codebook, a finding with direct implications for [[prompt-engineering|prompt design]] in research practice.

## Key Findings

1. **GPT-4o generated theory-aligned SRL codebooks from its knowledge base alone.** Given only the references to Zimmerman (2000) and Winne and Hadwin (1998), it proposed constructs covering all three phases of Zimmerman's cyclical model and three of the four stages of Winne and Hadwin's; only their task-definition phase was missing.
2. **Adding the data improved the codebook.** When the 955 think-aloud utterances from 15 students were included in the prompt, the Theory+Data codebook covered all phases of both models, introduced data-driven codes such as Error Identification, and dropped theory-relevant but data-absent constructs such as Imitation and Social Environment.
3. **Human refinement was still essential.** The final SRL codebook contains 11 constructs; two human coders merged overlapping GPT proposals such as Planning versus Goal Setting, Monitoring versus Evaluation, and Outcome versus Process Evaluation, and the authors found no hallucinations (GPT-invented example sentences) in this study.
4. **The interest-development context was harder.** Replicating the procedure on 144 interview transcripts from 14 middle-school students in a 5-day (15 hour) Minecraft summer camp produced codes mirroring the four phases of Hidi and Renninger's model — categories human reviewers judged too broad to apply to individual utterances.
5. **Naming the theory beat supplying the papers.** Across four prompting strategies — Atheoretical, Theory Named, Full References Given, and Papers Provided — Theory Named received the highest ratings in six of the seven dimensions rated by 5 human raters; Papers Provided won only theoretical alignment (4.60 versus 3.60) while reproducing the four model stages despite explicit instructions not to.
6. **More codes did not mean better codes.** Full References Given and Atheoretical yielded the most final constructs (14 of 15 and 13 of 15) but with less consistency across the 3 iterations each approach ran; Theory Named produced the same 11 constructs in every iteration. The final human-refined interest codebook contains 15 constructs.

## A three-step SRL codebook process

Study 1 followed three steps with GPT-4o prompted at temperature 0 and run three times per prompt. Step 1 (Theory-only) supplied the full references to two foundational SRL papers and asked for a codebook; Step 2 (Theory+Data) added the dataset itself, with every utterance in a single prompt; Step 3 (Human Refinement) had two researchers evaluate the specificity and applicability of each construct, merge overlapping codes, and drop codes the data could not support. The researchers added no constructs of their own beyond what GPT proposed.

The data were think-aloud transcripts from 14 undergraduate students and 1 graduate student who worked in three intelligent tutoring systems — Stoichiometry Tutor, ORCCA, and Logic Tutor — between February and November 2023 in the United States. Participants were 40% white, 47% Asian, and 13% multi- or biracial; 10 students took part in person at a private research university and 5 remotely at a large public liberal arts university, in 45-60 minute sessions with up to 20 minutes of thinking aloud. The corpus contains 955 utterances transcribed with Whisper.

GPT's knowledge base proved accurate: Step 1 constructs spanned Zimmerman's forethought, performance, and self-reflection phases, and Winne and Hadwin's planning, enactment, and reflection stages. Step 2 fixed the main gap — the task-definition phase — and reduced overlap, collapsing four monitoring-related constructs into one code called Monitoring and producing data-grounded codes such as Error Identification, Trial and Error, and Frustration. Step 3 still changed the result materially: Calculation & Conceptual Understanding became Domain Knowledge Recall, Understanding the Task and Task Understanding merged, and the final codebook settled at 11 constructs with examples drawn verbatim from the utterances.

## Four ways to hand a theory to a model

Study 2 shifted to interest development in the WHIMC project, where 14 middle-school students played a science-themed Minecraft environment during a 5-day summer camp in the northeastern United States in 2024. Interviews were collected with the Quick Red Fox app using Data-Driven Classroom Interviews triggered by moments of apparent interest or struggle. Because replicating the SRL procedure produced codes too broad to operationalize, the team compared four prompting approaches: Atheoretical (no theory mentioned), Theory Named (Hidi and Renninger's framework named), Full References Given (references to Hidi and Renninger 2006 and Linnenbrink-Garcia et al. 2010), and Papers Provided (the full text of both papers).

The 144 transcripts were delivered to the model in three batches of 48 interviews each, chosen to stay within the 128,000-token prompt limit. Each approach ran three times, producing 12 codebooks, which GPT then consolidated into one codebook per approach. Two authors (the first and second) mapped construct overlap against a gold-standard codebook they refined by hand, and 5 further coauthors rated each approach's codebook on seven dimensions — theoretical alignment, usefulness, clarity of definitions, alignment between definitions and examples, concreteness, exhaustiveness, and complementarity — using a 5-point Likert instrument adapted from earlier work in this line of research.

## Human ratings favored the named theory

The Theory Named approach led on six of seven dimensions: usefulness 4.40, exhaustiveness 4.40, examples 4.40, clarity 4.20, concreteness 3.80, and complementarity 3.80. Papers Provided scored highest only on theoretical alignment (4.60 versus 3.60) and lowest on concreteness (2.40 versus 3.80), because it returned the four theoretical stages — Triggered and Maintained Situational Interest, Emerging and Well-Developed Individual Interest — as codes despite instructions to avoid them; evaluators found those stages nearly impossible to distinguish in single utterances. The final human-refined codebook kept the model's Triggered Curiosity code but excluded the other stage-level codes.

Quantity did not track quality. Full References Given and Atheoretical generated more constructs overall (contributing 14 of 15 and 13 of 15 final codes) but with more iteration-to-iteration variability: Atheoretical and Papers Provided each consistently identified nine categories across their iterations, Full References Given only eight, while Theory Named produced the same 11 constructs in every iteration. Raters found the extra codes from the two losing approaches redundant or not fully actionable — Environment and Engagement With Science Concepts overlapped, and Frustration & Perseverance bundled emotions that do not always co-occur. The human-refined interest codebook consolidated 15 constructs, with Scientific Reasoning absorbing eight GPT-generated codes and Minecraft Environment Stimulus merging three overlapping environment codes.

## What this means for practice

- **Name the theory, skip the full texts.** For well-established frameworks, prompting with the theory named, without references or full papers, produced the most usable codebook: Theory Named led on usefulness (4.40 versus 3.20 for Full References Given) and concreteness (3.80 versus 2.40 for Papers Provided), whose only win was theoretical alignment (4.60).
- **Give the model the data.** Adding the corpus to the prompt removed constructs absent from the data (Imitation, Social Environment) and produced data-grounded codes such as Error Identification, so teams should construct the codebook against the actual data rather than the theory alone.
- **Keep humans in the loop for merging.** The final SRL codebook of 11 constructs and the interest codebook of 15 constructs both required human review to merge overlapping GPT codes and rename constructs, so the workflow is collaboration, not delegation.
- **Replicate before adopting.** All prompts and the codebooks GPT produced are released on OSF, so a research team can rerun the four prompting strategies on its own data before committing to the winning strategy.

## Limitations

- **Both theories are old and heavily represented in GPT's training data** — each cited over 5000 times in the last 20 years — so the results may not transfer to newer or less-cited frameworks, where supplying the full papers might become necessary.
- **The samples are small.** Study 1 rests on 15 think-aloud students and 955 utterances, Study 2 on 14 interviewees, and the evaluation instrument on 5 raters, all of whom were coauthors familiar with the four-phase model rather than independent judges.
- **Human refinement was bounded by what GPT proposed.** Researchers added no constructs of their own, and because different prompts produced different construct sets, a prompt that fails to surface a construct may keep it out of any analysis unless researchers first review the data themselves.
- **The study judged codebook quality, not coding outcomes.** Ratings measured clarity, usefulness, concreteness, and alignment; no inter-rater reliability of the final codebooks in actual use was reported, and the authors call for future work comparing codebooks created with and without LLM support.
- **Rater-level and context generalization are untested.** Results come from one model (GPT-4o), two theoretical frameworks, and one rater panel; theory structure and temporal scope may require different prompting strategies in other domains.

## Citation

Zambrano, A. F., Liu, X., Wei, Z., Ginger, J., Zhang, J., Paquette, L., Baker, R. S., Zhou, Y., Ocumpaugh, J., Borchers, C., & Barany, A. (2026). Data Plus Theory Equals Codebook: Leveraging LLMs for Human-AI Codebook Development. *Journal of Educational Data Mining*, 18(1), 25-65.
