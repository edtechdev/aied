
title: "AI as Anchor: How Interview Sequencing Relates to the Appropriation of Synthetic Stakeholder Voices in Design Education"
created: "2026-11-18T09:30:00-05:00"
updated: "2026-11-18T09:30:00-05:00"
type: article
pedagogy: [experiential-learning, project-based-learning]
technology: [generative-ai, llm, simulating-students]
methods: [qualitative-research]
sources: ['raw/papers/mokryn-ai-anchor-synthetic-stakeholders-2026.md']
source_url: "https://arxiv.org/abs/2611.22740"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [case study, interviews, thematic analysis]
discipline: [design education]
level: [higher ed]
audience: [instructors, researchers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-18"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Mokryn, Ayalon, Dines and Shaer (2026) ran a single-semester field study in one design course at the University of Haifa and Wellesley College in which eight teams (N = 21, 19 undergraduate and two graduate students) built an AI-Simulated Stakeholder (AIS) from an [[llm|LLM]], evaluated it through peer review, and then interviewed both the AIS and a human stakeholder in one of two fixed orders. The order mattered for how the synthetic voice was used rather than for whether it was trusted at all. Teams that interviewed the AIS first described it as a broad, often [[simulating-students|stereotypical]] frame that human interviews later narrowed or corrected; teams that interviewed the human first used the AIS mainly to validate and revisit concerns already grounded in lived experience. Across both conditions students called the AIS an "anchor", but its position in the sequence changed what the anchor did. Final designs carried design elements corresponding to 39 of 43 prominent human-derived pain points (90.7%) against 22 of 32 AIS-derived ones (68.8%), and students treated hesitation, contradiction and emotion in human accounts as marks of authenticity rather than as noise.

## Key Findings

1. **AIS output was broad, plausible and quickly judged generic.** Half the groups called AIS answers general and sometimes stereotypical, and several noted that it returned the expected answer rather than the unusual detail they were hunting for.
2. **Humans supplied the specificity the AIS could not.** Human stakeholders named games, described a year-and-a-half process, expressed frustration and contradicted themselves, and students read those features as evidence of lived experience.
3. **Sequence shaped the role, not the amount, of AIS use.** AIS-first teams used the synthetic voice as a provisional frame to rehearse questions; human-first teams used it afterwards to check whether themes recurred.
4. **Human-derived concerns travelled further into the final designs.** Correspondence with a final design element was found for 90.7% of prominent human-derived pain points and 68.8% of prominent AIS-derived ones, with 12 pain points shared by both sources.
5. **Students trusted AIS only after corroboration.** Several groups said they did not trust AI responses "until they're corroborated by a real interview", and subtle internal contradictions in AIS replies surfaced only on close inspection.
6. **AIS responses arrived pre-packaged as problem–solution pairs.** Students noted that the AIS reformulated pain points into tidy fixes, which sometimes helped but sometimes misrepresented the raw experience and delayed the team.

## How teams built and judged the synthetic stakeholder

All teams constructed, peer-reviewed and evaluated their AIS before the sequencing condition was assigned, using a shared five-dimension [[rubrics|rubric]] covering credibility, consistency, completeness, clarity and empathetic depth. Students mostly used ChatGPT, generally through its free web interface, and several teams hit practical limits early: one group asked the model for prompt advice, and another discovered that its persona could not keep its own name consistent across turns. The peer review, run with De Bono's Six Thinking Hats, surfaced the recurring failure the study is about. Fact-oriented reviewers found gaps in evidentiary grounding; emotion-focused reviewers found surface plausibility without emotional authenticity; critical reviewers found overgeneralisation and stereotyping, and pushed teams to recognize diversity inside the stakeholder group they had flattened.

That evaluation produced a shared vocabulary without producing equivalent personas, which the authors treat as a limit on causal claims: differences between teams cannot be attributed to sequence alone.

## Two sequences, two jobs for the anchor

In the AIS-first condition the synthetic interview functioned as a rehearsal: students described narrowing prompts, asking for specificity and filtering verbose answers, and they said the experience showed them whether their questions could elicit anything substantive. One student reported that the AIS "included several points we hadn't thought of ourselves". The human interview then did the redirecting work, supplying the contradictions and non-obvious priorities that unsettled the team's initial framing.

In the human-first condition the order reversed the job. Teams confronted contradiction, emotion and contextual detail from the outset, identified what mattered, and then turned to the AIS to revisit themes, check recurrence and explore variations. Students in this condition described the AIS as an anchor for comparison rather than as a source of discovery, with one exception in which deliberately contrasting demographics surfaced an additional pain point.

## What the synthetic voice could not carry

The [[qualitative-research|qualitative]] contrast is consistent across the corpus: AIS answers were polished, confident and solution-oriented, while human accounts were hesitant, repetitive and emotionally intense. Students did not treat that roughness as a defect. They treated it as a signal that the account came from someone who had lived the problem, which is precisely the [[trust-calibration|credibility calibration]] that a synthetic persona cannot earn on fluency alone. The authors read this as an argument for keeping direct [[stakeholders|stakeholder]] engagement in design workflows and for treating [[human-ai-collaboration|human–AI collaboration]] as complementary rather than substitutive, a position that matters for [[experiential-learning|experiential learning]] in [[design-education|design education]] where the point of the interview is the encounter.

## What this means for practice

- **Instructors.** Sequence the human interview first when the goal is discovery, and use a synthetic stakeholder afterwards for rehearsal and validation rather than as a substitute for the encounter.
- **Instructors.** Ask teams to annotate which final design elements trace to which source, so the carry-through of human versus synthetic input becomes visible in the critique rather than assumed.
- **Curriculum designers.** Build the AIS-evaluation rubric into the assignment before students interview anyone; the peer review was where stereotyping and evidentiary gaps were caught.
- **Researchers.** Treat interview order as a design variable in studies of AI-mediated user research, because it changed the reported function of the same tool.

## Limitations

- **One course, 21 students.** Nineteen undergraduates and two graduate students in a single academic course at one institution, with no pre-course measure of prior experience with design methods, generative AI or personas.
- **Sequence was confounded with refinement.** Human-first teams could revise their AIS using what they had just heard, so the comparison captures interview order plus the information available during AIS development.
- **Model and prompting varied by team.** Most teams used ChatGPT through the free web interface, but prompts, background information and revision practices differed, so findings cannot be attributed to a specific model or feature.
- **Prominence was inferred, not measured.** Pain points were classified as prominent from repetition or expressed intensity, and AIS output is repetitive by nature while human accounts are emphatic.
- **Selective post-course evidence.** Only three of 21 students took part in the post-course sessions, all from AIS-first teams, so those accounts support no cross-condition claim.
- **No design-quality outcome.** The analysis did not assess downstream design quality, implementation success or stakeholder satisfaction.

## Citation

Mokryn, O., Ayalon, O., Dines, N., & Shaer, O. (2026). [*AI as Anchor: How Interview Sequencing Relates to the Appropriation of Synthetic Stakeholder Voices in Design Education*](https://arxiv.org/abs/2611.22740). International Journal of Human-Computer Interaction. arXiv:2611.22740.
