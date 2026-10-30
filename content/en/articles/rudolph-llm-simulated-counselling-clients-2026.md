---
title: "Comparing Human Role-Players and LLM-Simulated Clients in Online Counselling Training: An Analysis of Counselling Patterns"
created: "2026-10-30T09:54:00-04:00"
updated: "2026-10-30T09:54:00-04:00"
type: article
published: "2026-10-29"
sources: ['raw/papers/rudolph-llm-simulated-counselling-clients-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: []
level: [higher ed]
audience: [instructors, researchers, instructional designers]
pedagogy: [professional-training, problem-solving]
technology: [simulating-students, simulation, conversational-ai]
assessment: [assessment-validity]
methods: [quantitative-research]
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-30"
    agent: hermes-agent
source_depth: full text
verified: [citation, quotes, links]
---

> **Synthesis:** Rudolph, Steigerwald and Albrecht (2026) compare what novice counselors actually do when their client is a person and when it is a language model. They analyzed 64 chat-based human-human role-plays and 74 human-LLM conversations with the GeCCo category system at sentence level, using a transformer classifier rather than manual coding. The differences are systematic and interpretable: LLM clients disclosed the problem embedded in their prompt more readily, which moved sessions to problem-solving faster (17.63% of counselor behavior against 10.67% with human clients), and counselors responded by leaning on factual reflection instead of facilitative moderation. The paper reads this as both a promise and a caution for [[simulating-students|simulated clients]] in [[professional-training]]: the simulation is standardized and available, and it trains a subtly different conversation.

## Key Findings
1. **The datasets are comparable in scale.** Sixty-four chat-based human-human counselling sessions from a social-work degree program and 74 human-LLM conversations recorded on a training platform based on VirCo.
2. **One model was used deliberately.** All simulated clients were Mistral's Mixtral 8x7B at 4-bit quantization, chosen to hold the model constant and to keep sentence counts comparable with the human data.
3. **Simulated clients reach the problem faster.** Because the LLM discloses the problem embedded in its prompt rather than circling it, counselors reached Problem-Solving in 17.63% of coded behavior against 10.67% for human clients.
4. **Sessions ended more formally.** Closing formalities appeared in 11.95% of counselor behavior with LLM clients against 5.95% with humans, which the authors attribute to the structured conversational patterns LLMs produce.
5. **Counsellor style shifted with the client.** With human clients, counselors used more facilitative moderation as the client elaborated the problem; with LLM clients they relied more on factual reflection, because there was less to elaborate.
6. **Human clients do the clarification work the LLM skips.** The paper's interpretation is that the elaborative problem clarification typical of human clients is what elicits active moderation, so a client that arrives pre-clarified removes the practice opportunity.
7. **Coding was automated.** Classification used a GBERT Large classifier over the GeCCo taxonomy, whose fifth layer carries 40 distinct counselor categories.

## Why the category system matters

Counselling training is a domain where "did the trainee do the thing" is unusually well specified. GeCCo gives a hierarchical scheme for both counselor and client moves, so a session can be described as a distribution over behaviors rather than as a holistic impression. That is what makes a comparison between human and simulated clients possible at all: the question is not whether the session felt real but whether the distribution of counselor behavior changed.

The paper's answer is that it did, in a direction that follows from what an LLM client is. A prompt contains the presenting problem; a person contains a reluctance to state it. The model discloses, the person withholds and elaborates, and the trainee's behavior follows the client.

## The training trade-off

Standardization is the standard argument for [[simulation]], and it is a real one: a simulated client is available at any hour, presents the same difficulty every time, and can be scripted to a learning objective. The paper's evidence supports the availability claim and complicates the equivalence claim.

If simulated clients consistently skip the clarification phase, then a curriculum built mainly on them trains counselors on the second half of a session. The skill that goes unpracticed — eliciting a reluctant account — is the one that human role-players provide inside a [[professional-training|training]] program by being human. That is a design constraint, not a refutation: the authors point to fine-tuning, preference optimization and more representative conversational data as ways to close the gap.

## What the comparison cannot settle

The analysis rests on a classifier rather than on human annotation, and the authors name this first among their limitations: a transformer model may miss nuance that a trained coder would catch, particularly in emotional register. The categories analyzed were also coarse relative to the taxonomy's full depth.

Both datasets are role-plays, so neither is a real counselling session, and the human comparison is not a gold standard of authenticity but a different simulation with a person in the client role. The finding is therefore about how two training formats differ, which is the question a program actually faces.

## What this means for practice

- **Instructors.** Use simulated clients for repetition and human role-players for the clarification phase. The evidence here is that the two formats exercise different parts of a session, so substituting one for the other narrows the curriculum.
- **Instructional designers.** Script the withholding. If a simulated client is prompted with the problem fully stated, it will disclose it; a prompt that makes the client reluctant to name the issue restores the practice the human client provides.
- **Instructors.** Watch for reflection replacing moderation. A trainee whose sessions are dominated by factual reflection with an LLM client may be adapting to the tool rather than learning the skill.
- **Researchers.** Annotate a subsample by hand. Automated classification makes corpus-scale comparison feasible, and a human-coded validation subset is what would establish that the category differences are real.

## Limitations

- Analysis relied on automated classifiers (GBERT Large) rather than manual annotation, which the authors state may miss subtle nuance in conversational dynamics.
- Both corpora are role-play scenarios rather than real counselling sessions, so the findings describe simulated environments.
- The analysis focused primarily on a coarse categorisation level (level 3) of the GeCCo taxonomy, leaving finer distinctions unexamined.
- A single model (Mixtral 8x7B, 4-bit) supplied every simulated client, so the comparison is between one LLM and one group of human role-players.
- The human-human corpus came from one social-work degree program while the LLM corpus came from training-platform recordings, so setting and recruitment differ between the two conditions.

## Citation

Rudolph, E., Steigerwald, P., & Albrecht, J. (2026). [*Comparing Human Role-Players and LLM-Simulated Clients in Online Counselling Training: An Analysis of Counselling Patterns*](https://arxiv.org/abs/2610.40563). arXiv:2610.40563.
