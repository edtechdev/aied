---
title: "Supporting creativity education in the age of AI: The role of perceived exemplar source"
created: "2026-10-15T09:15:00-04:00"
updated: "2026-10-15T09:15:00-04:00"
type: article
sources: ['raw/papers/ai-exemplar-attribution-creativity-education-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
level: [higher ed]
audience: [instructors, researchers]
pedagogy: [collaborative-learning, creativity, motivation, scaffolding, student-ai-interaction, student-engagement]
technology: [generative-ai, human-in-the-loop-ai, multimodal]
assessment: [group-work, learning-gains]
methods: [quantitative-research, research-methods-aied]
ethics: [equity-in-ai-education, ethics, trust]
foundations: [agency, ai-education, critical-thinking, framing-ai-use-for-students, human-ai-collaboration, theories-and-frameworks]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-15"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Can the same idea land differently depending on who students think wrote it? This fNIRS hyperscanning experiment with 113 dyads asked whether labeling identical [[creativity]] exemplars as human- or AI-generated changes how pairs engage in group [[problem-solving]]. The exemplars were produced by ChatGPT and shown unchanged; only the stated source differed. When attributed to a person, they raised idea uniqueness during stimulation above both the AI-labeled and no-exemplar control groups, while AI attribution only increased switching among ideation pathways. Neither behavioral benefit survived withdrawal of the exemplars. Human-labeled pairs also rated the exemplars as more helpful, even though their ideas overlapped the exemplars' categories and sat at the same semantic distance as the AI group's. Neural measures tracked the split: human attribution raised interbrain synchronization in premotor and supplementary motor areas during stimulation, whereas AI attribution lowered it in the supramarginal gyrus and frontopolar cortex afterward. The study reframes perceived provenance as a social cue that shapes [[student-ai-interaction]], not merely a disclosure obligation.

## Key Findings

1. Human-attributed exemplars raised group idea uniqueness during the stimulation phase relative to pre- and post-stimulation and relative to both the AI-attribution and control groups, supporting the social-cue hypothesis.
2. AI-attributed exemplars increased pathway shift during stimulation relative to that group's own pre- and post-stimulation phases, but this temporary reorganization did not produce higher uniqueness.
3. Neither the uniqueness benefit of human attribution nor the pathway-shift effect of AI attribution persisted in the later task once exemplars were withdrawn.
4. Human-attribution dyads rated the exemplars as more helpful (M = 3.71) than AI-attribution dyads (M = 3.41), yet the groups did not differ in exemplar-category overlap or semantic distance.
5. Human attribution increased interbrain synchronization in bilateral premotor and supplementary motor cortices during stimulation; AI attribution decreased it in the left supramarginal gyrus and right frontopolar cortex from pre- to post-stimulation.
6. Group-by-phase interactions on interbrain synchronization retained significance in up to 99.85% of 10,000 dyad-level bootstrap resamples, and supramarginal-gyrus synchronization correlated with pathway shift.
7. The 226 participants (113 dyads, mean age 20.28 years) showed no group differences on pretest creativity, teamwork preference, or AI attitudes, ruling out those confounds.

## Why identical exemplars can still land differently

Creative exemplars act as retrieval cues that activate underused knowledge and redirect later search, which is why [[collaborative-learning]] sessions in [[higher-ed]] classrooms often supply examples before students generate ideas of their own. Advances in [[generative-ai]] have made such examples cheap and abundant, and with them comes a new instructional choice about whether to say where those ideas came from. The study's framing draws on social agency theory, the claim that human-like cues lead learners to treat a computing system as a social partner and process its material more deeply; source information can function as a social cue that shifts [[trust]] in the material rather than the material itself. A [[meta-analysis-systematic-review|meta-analysis]] of 33 experiments on AI-powered [[pedagogical-agent|pedagogical agents]] supports that account. Evidence on creative source labels is mixed, however: labeling word-list primes as human- or AI-generated had no overall effect except when the AI prime was low in quality, while a scripted partner generated more ideas across more categories when presented as a [[conversational-ai|chatbot]] rather than a person.

## Attributing exemplars to humans raised idea uniqueness

Two hundred forty Mandarin-speaking students were recruited as 120 dyads; seven dyads were excluded for not following instructions, leaving 226 participants (mean age 20.28 years) forming 113 dyads. Each pair sat face to face and discussed three open-ended everyday problems across pre-stimulation, stimulation, and post-stimulation phases, with fNIRS hyperscanning recording both partners continuously. During the stimulation phase the human- and AI-attribution groups received the same three ChatGPT-generated exemplar ideas, differing only in the label attached to them; the control group received nothing. Uniqueness rose in the human-attribution group from pre- to stimulation and then fell back, and during stimulation it exceeded both the control group (Cohen's d = 0.75) and the AI group (d = 0.66). Fluency never differed by group or phase. Dyads in the human-attribution group also rated the exemplars as more helpful (M = 3.71 vs. M = 3.41), a subjective advantage that appeared alongside the behavioral one.

## Pathway shifting and interbrain synchrony diverged

Attribution shaped process measures as well as outcomes. The AI group switched among ideation pathways, flexibility, persistence, and convergence, more often during stimulation than in its own pre- and post-stimulation phases, a transient reorganization that produced no gain in uniqueness. None of the three pathways showed a reliable group-by-phase interaction on its own, and exemplar-category overlap and semantic distance from the nearest exemplar were statistically indistinguishable between the labeled groups, so the human advantage looked like neither greater imitation nor greater departure. The neural record separated the conditions more sharply. Human attribution raised interbrain synchronization in bilateral premotor and supplementary motor cortices during stimulation, regions tied to action simulation, motor imagery, and prediction of a partner's contributions. AI attribution instead lowered synchronization in the left supramarginal gyrus and right frontopolar cortex from pre- to post-stimulation. Group-by-phase interactions survived resampling in up to 99.85% of 10,000 dyad-level bootstraps, and supramarginal-gyrus synchronization correlated with pathway shift, r = .52.

## A social-contextual factor in AI-supported creativity education

Attributing an exemplar to a person appears to reframe it as an intentional contribution from someone else, raising its perceived relevance and [[motivation]] to engage with it. That reading fits evidence that disclosing AI provenance lowers evaluations of otherwise comparable advice and creative writing, and it extends social agency theory from individual multimedia learning to joint ideation. Two cautions shape the educational reading. The gains were short lived, tracking the presence of the exemplars and vanishing once they were removed, which marks a performance effect rather than durable [[learning-gains]]. Group creative ideation also depends on cognitive, affective, and physical alignment among members, and the premotor findings suggest that human labeling encouraged that alignment. The authors are explicit that none of this argues for hiding AI authorship; because the exemplars were identical and openly labeled, the practical question is not whether to disclose but how to mediate. Explain why an example was chosen, and prompt [[critical-thinking]] by asking students to critique, transform, and connect it with their partner's ideas.

## What this means for practice

- **Instructors.** Label AI-generated exemplars honestly, then add the human layer a label cannot supply: say why an example was chosen and have students critique, rework, and connect it to their own ideas.
- **Instructors.** Do not lean on exemplar exposure for durable creative capacity; treat it as an in-the-moment prompt and check for transfer on a later, unsupported task of the same kind.
- **Curriculum designers.** Sequence [[group-work]] ideation so students generate their own ideas first and meet external exemplars second, for comparison and improvement rather than as a starting pool.
- **Instructors.** Expect pairs to treat the same exemplar differently by stated source, and watch whether AI-labeled material is discounted before it is evaluated on quality.
- **Researchers.** Treat perceived source attribution as a measured variable in [[human-ai-collaboration]] studies rather than a fixed background condition, and pair behavioral outcomes with process measures.

## Limitations

- Sex composition was skewed: 76.10% of dyads were female-female and only 11 were mixed-sex, so the moderating role of pair composition remains unclear.
- Only realistic presented problem tasks were used, which supports focus but limits generalization to other creative domains such as artistic or scientific production.
- Neural recording covered only the bilateral frontal and parietal regions the montage reached, so effects outside that coverage were not observed.
- No peripheral physiological measures such as heart-rate variability or electrodermal activity were collected, leaving autonomic coordination untested.
- Behavioral effects were short term, so the study cannot speak to whether source attribution influences durable creative capacity.

## Citation

Xiaoyong, S., Lu, Y., Liu, Y., Ge, Y., Ruan, Q., Jiang, K., & Lu, K. (2026). [*Supporting creativity education in the age of AI: The role of perceived exemplar source*](https://osf.io/7ukxm). PsyArXiv preprint.
