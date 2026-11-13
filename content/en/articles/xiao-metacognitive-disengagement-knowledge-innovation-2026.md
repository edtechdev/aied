---
title: "Metacognitive disengagement and knowledge innovation quality in human–AI collaboration: the mediating role of cognitive offloading and the moderating roles of task complexity and AI literacy"
created: "2026-11-04T14:09:25-05:00"
updated: "2026-11-04T16:20:00-05:00"
type: article
sources: ['raw/papers/xiao-metacognitive-disengagement-knowledge-innovation-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
level: [adult learning]
audience: [researchers, instructors, administrators]
technology: [generative-ai, llm]
assessment: [assessment-validity, self-report-measures]
pedagogy: [metacognition, creativity, self-regulated-learning, professional-training]
foundations: [cognitive-offloading, ai-literacy, human-ai-collaboration, agency]
methods: [rct]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Four [[rct|randomized between-subjects experiments]] tested whether [[generative-ai|generative AI]] assistance erodes the [[metacognition|metacognitive]] work that [[creativity|creative]] tasks demand in [[human-ai-collaboration|human–AI collaboration]]. Together they enrolled 728 adults recruited through an online panel, not students in a course and not identified employees, who completed simulated innovation proposals in product design, community services, public-space renewal and employee benefits. Higher AI assistance raised task-level metacognitive disengagement (*d* = 0.67), [[cognitive-offloading|cognitive offloading]] carried 58.0% of that effect, and experimentally raising delegation lowered expert-rated innovation quality from 4.78 to 3.95 (*d* = 0.75), with 57.8% of that drop running through disengagement. Task complexity amplified the damage; [[ai-literacy|AI literacy]] absorbed it.

## Key Findings

1. The four samples were 150, 162, 176 and 240 valid participants, 728 in total, recruited through Credamo and screened with attention checks. Mean ages ran from 28.64 to 29.41 years, and each experiment randomized participants to conditions. The paper reports sex, age and education but never states occupation or student status.
2. In Experiment 1, perceived assistance was 5.67 in the high-assistance condition against 3.85 in the low-assistance condition, *t*(148) = 8.94, *p* < 0.001, *d* = 1.46, so the manipulation held.
3. Overall task-level metacognitive disengagement was 4.82 versus 3.96, *t*(148) = 4.12, *p* < 0.001, *d* = 0.67. All three dimensions moved the same way: planning reduction 4.91 versus 4.02 (*d* = 0.64), monitoring weakening 4.76 versus 3.89 (*d* = 0.64) and reflection absence 4.80 versus 3.97 (*d* = 0.61).
4. An ANCOVA controlling for gender, age, education and AI familiarity kept the main effect, *F*(1, 144) = 16.85, *p* < 0.001, *η*² = 0.105. AI familiarity independently predicted *lower* disengagement, *F*(1, 144) = 4.32, *p* = 0.039 — the result that motivated testing [[ai-literacy|AI literacy]] as a buffer later.
5. In Experiment 2, cognitive offloading was 5.12 versus 3.87, *t*(160) = 6.83, *p* < 0.001, *d* = 1.08. The total effect of assistance on disengagement was *c* = 0.88, the indirect effect *a* × *b* = 0.51, 95% CI [0.32, 0.72], and the direct effect *c*′ = 0.37, *p* = 0.012 — partial mediation accounting for 58.0% of the total.
6. Experiment 3 manipulated delegation directly. Expert-rated innovation quality fell from 4.78 to 3.95, *t*(174) = 4.97, *p* < 0.001, *d* = 0.75, with the same pattern for novelty (4.69 versus 3.82, *d* = 0.70), usefulness (4.85 versus 4.01, *d* = 0.71) and developability (4.80 versus 4.02, *d* = 0.64).
7. In that experiment the total effect on quality was *c* = −0.83, the indirect effect through disengagement was −0.48, 95% CI [−0.68, −0.30], and the direct effect was −0.35, *p* = 0.015. Disengagement carried 57.8% of the loss, and three blinded raters agreed at ICC = 0.84.
8. Experiment 4 found no moderation of the first stage: the offloading × complexity interaction was *F*(1, 236) = 0.85, *p* = 0.358, and the offloading × literacy interaction *b* = −0.08, *p* = 0.421. Both moderators act where disengagement turns into quality.
9. Task complexity strengthened that second stage: interaction *b* = −0.34, *p* = 0.013, index of moderated mediation −0.39, 95% CI [−0.62, −0.16], with conditional indirect effects of −0.48 under low complexity and −0.87 under high complexity. Simple slopes were −0.41 and −0.75.
10. AI literacy weakened it: interaction *b* = 0.26, *p* = 0.006, index 0.30, 95% CI [0.09, 0.52], with indirect effects of −0.74 at one SD below the mean and −0.14 at one SD above. The high-literacy interval [−0.30, 0.02] includes zero.

## Who the participants were, and what that licenses

This matters before any education claim is drawn. Participants came from Credamo, an online data-collection platform, and were paid for one session. They averaged about 29 years old and roughly 55% were women, and each experiment randomized them to conditions. Nothing in the method section describes a course, a cohort, a curriculum or a workplace. The tasks were simulated proposals — a smart-home product, an urban community service, a public-space micro-renewal, an employee benefits plan — judged by three blinded experts.

So the study is neither a classroom study nor a workplace study. It is an online adult experiment with workplace-shaped tasks. The discussion addresses "knowledge workers" and "organizations", and those implications are reasonable to consider, but the data do not show that employees behave this way under real accountability, deadlines or managers. An education page should say the same: these are adults doing an innovation exercise for pay, and the finding is about task conditions rather than about a cohort of learners or a firm.

Task selection was deliberately broad — product, service, spatial and organizational problems — and raters were matched to each domain: urban planning for Experiment 3, human resource management for Experiment 4. Breadth across tasks, not people.

## Offloading versus disengagement: the distinction that carries the argument

The paper's conceptual contribution is separating a behavior from a state. [[cognitive-offloading|Cognitive offloading]] is the act of delegating cognitive work to a tool. Task-level metacognitive disengagement is the reduction of planning, monitoring and [[reflection]] over one's own thinking inside a specific AI-assisted task. A person can delegate heavily and still audit the output, or delegate moderately and stop overseeing their own reasoning. The authors measure the second with a new nine-item scale, validated on the pooled 728 cases: three-factor fit *χ*²(24) = 98.42, CFI = 0.95, RMSEA = 0.06, and an HTMT ratio of 0.61 against the offloading scale. Because the three dimensions come from [[self-regulated-learning|self-regulated learning]] research, the scale reads as a withdrawal of regulation rather than a loss of ability.

Their mechanism is a dual erosion. Offloading removes the raw material that monitoring would otherwise inspect, because the person no longer filters, structures or generates the intermediate content. It also removes the felt need to monitor, because a fluent system appears reliable enough to skip checking. Both effects point the same way, which is why the pathway is robust across four tasks.

The mediation is partial in both links: offloading carried 58.0% of the assistance effect and disengagement 57.8% of the delegation effect. The authors name untested leftovers — shifted [[self-efficacy]], weakened accountability, [[trust-calibration|trust]] — and describe the model as one real mechanism, not the only one.

## A scripted assistant, and what the design can attribute

The AI in these experiments was not a live model responding freely. Its replies came from researcher-configured prompt templates and a task-domain knowledge base, so everyone in a condition met the same interaction. The high-assistance version produced user profiles, feature directions and commentary on drafts; the low-assistance version answered factual queries briefly and offered no creative content.

That choice buys internal validity and costs ecological validity. The independent variable is the *level of assistance*, not the capability of any system. A study of GPT-class or [[agentic-ai|agentic tools]], which volunteer framings, push back or ask clarifying questions, tests something this design cannot reach. These effect sizes are not estimates of what a current [[conversational-ai|chatbot]] does to a team.

Experiments 3 and 4 have a second attribution problem the authors flag themselves. The high- and low-delegation workflows differed in delegation, in the detail of AI replies, in how much independent effort was requested, and in who was assigned responsibility for the core content. The reported effect therefore belongs to a compound workflow with delegation at its center, not to delegation alone.

## Where the damage lands

The moderated mediation result is the most usable part of the paper, because the harm is conditional, not universal. Disengagement arose at similar rates whether tasks were simple or complex — the first-stage interactions were null — but its cost to quality depended on the task and the person.

Under high complexity the indirect effect was nearly double that under low complexity (−0.87 versus −0.48), which fits the intuition that hard problems need the very monitoring that disengagement suspends. Under high AI literacy the indirect effect shrank to −0.14 and lost significance — a claim about [[critical-thinking|critical distance]], not technical skill. High-literacy participants did not necessarily offload less; they kept questioning assumptions and comparing alternatives while doing it.

The Johnson-Neyman bounds give that buffer a range. Below 2.87 on the seven-point literacy scale the negative conditional effect was significant, above 4.63 it was not. Between those values the interval straddled zero while the estimate stayed negative — a gradient, not a threshold.

## What this means for practice

- **Tool designers.** Build metacognitive triggers rather than seamless substitution: state assumptions before generation, flag what needs verification afterward, name which judgments stay human.
- **[[professional-training|Workflow and training]] designers.** Segment complex work: independent human ideation, AI-assisted expansion, then critical human integration. For simple tasks a higher share of AI generation is defensible, because the measured cost of disengagement is smaller.
- **AI literacy programs.** Teach critique, not operation. The buffer came from evaluating outputs and holding distance from them, which is trainable: identify assumptions and [[bias-mitigation|biases]], require an alternative before accepting a solution, debrief what should stay under human judgment.
- **Educators assigning AI-supported projects.** A polished, complete deliverable can coexist with abandoned planning and reflection. Assess the process — drafts, alternatives considered, a reflection memo — rather than only the artifact.

## Limitations

- All measures are task-level and immediate. The nine-item scale captures reduction within one AI-assisted task, not the cumulative decline that would matter over a term or a career; no longitudinal design was run, and participants completed one short simulated task in a single paid session.
- The AI assistant was scripted from researcher templates and a knowledge base, so findings describe assistance level, not deployed-model behavior.
- The delegation manipulation in Experiments 3 and 4 was compound, bundling response detail, requested effort and responsibility allocation with delegation itself.
- Innovation quality rests on expert ratings. Interrater reliability was good (ICC = 0.84, 0.86), but expert judgment remains partly subjective and no downstream implementation outcome was tracked.
- Offloading and disengagement were self-reported in the same questionnaire, and the authors concede the Harman tests are a weak check on common method variance.
- Occupation and student status are unreported, so neither a workplace nor a classroom population can be claimed. AI literacy was measured rather than manipulated, and no preregistration statement appears in the paper, so no intervention was tested.

## Citation

Xiao, W., Men, C.-H., & Zhang, J.-C. (2026). [Metacognitive disengagement and knowledge innovation quality in human–AI collaboration: the mediating role of cognitive offloading and the moderating roles of task complexity and AI literacy](https://doi.org/10.3389/fpsyg.2026.1975833). *Frontiers in Psychology, 17*, 1975833.
