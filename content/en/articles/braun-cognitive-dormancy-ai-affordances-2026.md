---
title: "Cognitive dormancy: Supplanting structured learning with AI affordances"
published: "2026"
created: "2026-10-29T10:05:00-04:00"
updated: "2026-10-29T10:05:00-04:00"
type: article
technology: [generative-ai]
foundations: [ai-literacy, educational-development]
methods: [quantitative-research]
research_method: [experiment]
discipline: [learning sciences, language learning, math education]
audience: [instructors, faculty developers, policymakers]
level: [higher ed, adult learning]
page_kind: [evaluation, framework]
sources: ['raw/papers/braun-cognitive-dormancy-ai-affordances-2026.md']
source_url: "https://doi.org/10.1016/j.chbah.2026.100406"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-29"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Braun (2026) reports a preregistered experiment (N = 317) in which adults learned new content from conventional worksheets or from a general-purpose AI assistant grounded in those same worksheets, and she models the difference with a Bayesian structural equation model. The headline result is a negative effect of AI use on deep processing that is carried entirely by an indirect chain rather than a direct one, and a strong, unmediated increase in disorganization. The paper is notable less for the direction of its findings than for its honesty about them: the first link of the mediating chain ran opposite to the author's own hypothesis, so the mechanism she recovered is not the mechanism she predicted. From this she builds the cognitive dormancy model, an argument that certain learning environments suspend active processing by design rather than by the failings of the learner.

## Key Findings
1. Participants were randomized to an AI condition (n = 147) or a worksheet condition (n = 170) after 447 began the survey; the final sample averaged 24.47 years (SD = 7.37) and spanned 18 to 61. The study was preregistered on the Open Science Framework, and the paper reports its deviations from that plan in an appendix.
2. Learning materials were 45 worksheets drawn from the upper secondary curriculum in German, mathematics and English. The AI arm used Gemini 2.5 Pro served through Vertex AI with retrieval-augmented generation over the worksheet set, so the model could reach only the assigned page, at a temperature of 0.7.
3. For deep processing, the total effect was negative but not practically meaningful (median = −0.22, 95% credible interval [−0.50, 0.06], probability of direction .933), and the direct effect, though credible, was likewise small (−0.17, [−0.36, 0.02]). The damage travelled through an indirect path instead, with a serial indirect effect of −0.0480 ([−0.1350, 0.0065], pd = .958).
4. That serial path opened with a result the author did not predict. The AI condition reduced [[cognitive-offloading|cognitive offloading]] rather than raising it (−0.27, [−0.58, 0.04], pd = .959), offloading then predicted [[critical-thinking|critical thinking]] positively (0.24, [0.09, 0.41], pd = .999), and critical thinking in turn predicted deep processing strongly (0.78, [0.65, 0.94], pd = 1.000). The preregistered mechanism was therefore rejected while a different chain produced the same end state.
5. The hypotheses about surface processing failed. There was no credible direct (0.14) or serial increase, and the only credible indirect path was an unpredicted negative one running through offloading (−0.134, [−0.306, 0.018], pd = .959).
6. Disorganization carried the clearest result in the study: a positive total effect of 0.84 ([0.47, 1.21], pd = 1.000) and a direct effect of 0.77 ([0.41, 1.15]), with neither mediation path credible, so the AI condition disorganised learners without needing a chain to explain it.
7. The model explained 85 percent of the variance in deep processing, 41 percent in surface processing and 27 percent in disorganization, with 29 percent for critical thinking and 9 percent for cognitive offloading, all estimated as Bayesian R squared from a model that includes each outcome's own baseline score.

## An experiment built to catch a state, not a trait
The design turns on a distinction the paper holds throughout, between what a learner generally does and what they do in this task. Item stems for every mediator and outcome were rewritten so that baseline items asked about general study habits ("In general, I...") and post items asked about the task just completed ("In this task, I..."). Scales were adapted from established instruments: cognitive offloading from Gerlich (2025), critical thinking from the Motivated Strategies for Learning Questionnaire, and disorganization, deep processing and surface processing from Elliot, McGregor and Gable (1999), with achievement goals from the Achievement Goal Questionnaire-Revised entered as covariates so that pre-existing motivational differences would not be read as effects of the tool.

Measurement was not left as found. One offloading item was dropped after a standardized factor loading of −.1182 and a residual variance of 98.6 percent, residual variances were allowed to correlate where modification indices exceeded 20, and both changes were mirrored across time points. The author states plainly that these post-hoc adaptations make the revised measurement models exploratory, and the reported reliabilities, McDonald's omega from .62 to .91, are given with that caveat attached rather than glossed.

## Where the negative effect on deep processing actually sits
The paper's most careful move is decomposing a total effect that looks negligible. Read alone, −0.22 with a credible interval crossing zero is a null result. Braun argues, following Zhao, Lynch and Chen (2010), that a credible indirect effect establishes a mediation mechanism whether or not the total effect holds up, and then shows that the direct and indirect components partly cancel. The [[generative-ai|AI]] condition pushed deep processing down directly, pulled it back up through one indirect route, and pushed it down again through the serial route, so the flat total is an artifact of paths that disagree rather than an absence of effect.

Whether that argument persuades depends on the reversed first link. If AI use reduced offloading, the intended story about learners handing work over to a machine is not what the data show; what the data show is a condition that depressed critical thinking and, through it, deep processing, without raising measured offloading at all. The paper does not resolve this, and it does not pretend to. It reports the novel pathway as unpredicted and treats the original hypothesis as rejected.

## Disorganization as the effect that needs no explanation
Disorganization is where the study speaks without qualification. The AI condition raised it by roughly four fifths of a scale standard deviation, with probability of direction at 1.000 and 99.96 percent of the posterior above the region of practical equivalence, and none of the mediators moved it. Braun reads this as the environment adding load rather than removing it: a conversational system offers many paths to an answer, and choosing among them, tracking what has been asked, and deciding when to stop are all work the worksheet never demanded. That reading is consistent with a first stage in which a learner under this condition does less offloading, not more, because the task of managing the interaction consumes the capacity that offloading would have conserved.

## The cognitive dormancy model
The contribution the paper wants remembered is a name for the pattern. Cognitive dormancy describes a state, induced by a learning environment, in which metacognitive engagement is suspended: processing continues, answers arrive, and the learner's own regulation of the task goes quiet. Braun locates the cause in the affordances of general-purpose tools rather than in the learner, and draws a direct policy consequence from that placement. Teaching [[ai-literacy|AI literacy]] asks students to resist what a tool invites, which leaves the invitation in place. Regulating how general-purpose AI is integrated into learning settings, and providing external [[scaffolding|scaffolding]] around it, changes the environment itself. The conclusion is that adoption is not the variable of interest and orchestration is.

## What this means for practice
- Treat a general-purpose assistant as a different intervention from a tutoring system. The paper separates them explicitly, and its findings apply to the conversational, solution-oriented kind, which is what students reach for unprompted.
- If a task is meant to produce deep processing, do not pair it with an open-ended chat window and hope that guidance compensates. This study found the direct route to deep processing reduced even when the model was fenced to the assigned worksheet.
- Expect disorganization to rise before anything else does. A cohort using general-purpose AI on a complex task will need more structure around sequencing and stopping, not more content support.
- Design for the environment. If the affordances are the cause, then worksheet design, prompt constraints, and requirements to externalize reasoning are the levers, and asking students to be disciplined about a tool built to be frictionless is the weaker move.

## Limitations
- One model was tested, Gemini 2.5 Pro, in one configuration with retrieval augmentation over the stimulus set. The author raises the possibility that later systems with different interaction affordances produce a different state, and the study cannot speak to unconstrained chat.
- All mediator and outcome measures are self-report. Trait and state separation and item inversion reduce common-method bias but cannot eliminate it, and no behavioral or physiological data were collected.
- There was no longitudinal measurement, so temporal precedence between mediators and outcomes is not established, and the serial ordering rests on theory rather than on observed sequence.
- The 45 worksheet topics create a nested structure that a multilevel model would need to respect; sample size at the cluster level made that infeasible, so the independence assumption is partly relaxed.
- Post-hoc exclusions were substantial, and the sample was largely higher-education and adult independent learners even though the stimuli came from an upper secondary curriculum, which limits generalization to school settings.
- AI affordances were manipulated as a bundle, so interface layout, response immediacy and conversational freedom cannot be separated as the active ingredient.

## Citation

Braun, V. (2026). [*Cognitive dormancy: Supplanting structured learning with AI affordances*](https://doi.org/10.1016/j.chbah.2026.100406). *Computers in Human Behavior: Artificial Humans*.
