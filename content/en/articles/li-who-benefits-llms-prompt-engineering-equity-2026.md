---
title: "Who benefits from LLMs? Prompt engineering competence and equity in higher education"
created: "2026-11-01T08:06:18-05:00"
updated: "2026-11-01T08:06:18-05:00"
type: article
sources: ['raw/papers/li-who-benefits-llms-prompt-engineering-equity-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey, experiment]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers, administrators, researchers]
technology: [llm, prompt-engineering]
foundations: [ai-literacy]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
pedagogy: [student-ai-interaction]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Two linked studies ask where the benefit of [[llm|large language models]] actually accrues. In a survey of 380 Chinese undergraduates, [[prompt-engineering|prompt engineering competence]] correlated strongly with perceived academic gains (*r* = .793) but only weakly with perceived [[equity-in-ai-education|educational inequity]] (*r* = −.131), and family digital capital worked largely *through* competence rather than alongside it. A second, within-subject experiment then showed that a five-component prompt scaffold — Role, Goal, Input, Process, Output — raised rated output quality from 3.318 to 4.603 across four model families and four task types, which is what makes competence teachable rather than a fixed endowment.

## Key Findings

1. Stage 1 surveyed 407 Chinese undergraduates who had used LLMs and analyzed 380 who passed the attention check; 35.3% were computer-science or CS-related majors, and gender was balanced (48.7% male, 48.9% female).
2. Prompt engineering competence (PEC) was strongly associated with perceived academic gains, *r* = .793, *p* < .001, and only weakly, negatively associated with perceived educational inequity, *r* = −.131, *p* = .010.
3. Family digital capital sat below the scale midpoint in this sample, and its association with perceived academic gains was largely indirect through PEC rather than direct.
4. Gaming experience and a planning/independent-work tendency explained substantial variance in PEC alongside background resources — experience and disposition mattered as much as household capital.
5. Stage 2 ran 400 matched basic-versus-refined prompt comparisons across four higher-education task types (situational, problem-based, [[project-based-learning|project-based]], reflective learning) and four model families, generating 800 outputs rated on seven quality dimensions by two human experts and an LLM rater.
6. Refined prompts improved overall quality from *M* = 3.318 to *M* = 4.603, a paired difference of Δ = +1.285, 95% CI [1.255, 1.315], with nonparametric tests agreeing.
7. Gains were largest where structure was previously missing: use of provided materials +1.546, role and context consistency +1.341, actionability and improvement orientation +1.320, structure and format compliance +1.285.
8. Every model family improved under the scaffold, from +1.161 (OpenAI) to +1.436 (Claude), and models with lower baseline quality gained more — a lower-baseline, larger-marginal-return pattern.

## Two stages, two kinds of evidence, one argument

The design is deliberately asymmetric. Stage 1 is a cross-sectional survey and can only show association; the authors are candid that all its constructs were [[self-report-measures|self-reported]] by the same respondents at one time point, which is the classic common-method-variance setup. Stage 2 is a within-subject experiment over 400 matched prompt pairs, which can show that changing one thing — prompt structure — changes rated output quality.

Put together, the two stages argue that the variable which converts access into benefit is a competence, and that the competence has a trainable core. The survey supplies the equity framing: if PEC is what turns an account into a learning gain, then a population that differs in PEC differs in what the same free tool is worth to them. The experiment supplies the leverage: a [[scaffolding|scaffold]] that specifies role, goal, inputs, process constraints and output format reliably lifts output quality, including on models that start weaker.

That second point is the one an institution can act on. It is also the point the paper is careful not to overclaim: rated output quality is not student learning.

## Competence, not access, is where the gap opens

The digital-divide framing usually separates who has the tool from who does not. This study finds a second gap inside the connected population: [[digital-divide|household digital capital]] operated mostly through PEC, so two students with the same model available could differ in what they got from it because they prompt differently.

The predictors of PEC are the interesting part for teaching. Gaming experience and a planning/independent-work tendency carried substantial variance — both are dispositions and habits rather than purchases, and both are plausibly shaped by schooling. A [[ai-literacy|digital literacy]] curriculum that treats prompting as a technical trick misses that; the dispositions that predicted competence here are closer to planning, self-direction and persistence than to knowing keywords.

The equity association itself is small and should not be oversold. Perceived inequity correlated only −.131 with PEC, and the three-item inequity scale had modest internal consistency (α = .66), so the paper's claim is better read as "competence is a plausible pathway" than "competence closes the gap".

## A scaffold you can teach in one lesson

The Role–Goal–Input–Process–Output structure is the practical artifact. It is short enough to teach in a single workshop and specific enough to be checked: who the model should act as, what the learning goal is, what material it may use, what process constraints apply (including no-fabrication instructions), and what the output should look like.

The dimension-level results say why it works. The scaffold barely helped contextual grounding, which was already acceptable, and helped most where basic prompts leave the model guessing — using supplied materials, holding a role consistently, producing actionable output, and complying with format. Those are precisely the failures students attribute to "the AI not understanding", and they are addressable in the prompt.

The cross-model robustness matters for institutions that cannot standardise on one vendor. If the benefit depended on one model's idiosyncrasies, a scaffold would be a fragile policy; here all four families improved, with the weakest baseline gaining most.

## What this means for practice

- **Instructors.** Teach prompt structure explicitly, not prompting as a knack. A five-component prompt — role, goal, inputs, process constraints, output format — is checkable [[feedback]] material, and in this experiment it lifted rated quality on every model tested.
- **Curriculum designers.** Put prompt competence in the assessed [[curriculum-design|curriculum]] rather than in optional study-skills advice. If competence mediates who converts access into gain, leaving it informal reproduces the gap the tool was supposed to close.
- **[[administrator|Administrators]] and policymakers.** Count competence, not licenses. Provisioning the same model to everyone does not equalise benefit when household capital works through skill; measure and teach the skill.
- **Researchers.** Treat rated output quality and learning as different outcomes. The experiment here measures what the model produced, not what the student learned, and the next study needs the learning measure.

## Limitations

- Stage 1 constructs were all self-reported at one time point, so common-method variance threatens the observed associations; Stage 2 does not rule it out for Stage 1.
- The perceived-inequity scale had only three items and modest internal consistency (α = .66), limiting precision on the small PEC–inequity association.
- Stage 2 rated output quality rather than student learning or equity outcomes; whether prompt scaffolds improve learning remains untested.
- Stage 1 drew 380 Chinese [[higher-ed|undergraduates]] recruited through university online forums and student communities, so associations may differ across cultural, institutional and national contexts.
- The four task types and four model families were selected to represent common academic situations, not sampled from the population of tasks or models students meet.
- Ratings combined two human experts and an LLM rater into aggregated scores, so the outcome is a composite judgment rather than a purely human one.

## Citation

Li, Z., Liu, Y., Jiang, J., Zhang, Z., Li, Z., & Chen, W. (2026). [Who benefits from LLMs? Prompt engineering competence and equity in higher education](https://doi.org/10.1186/s41239-026-00633-6). *International Journal of Educational Technology in Higher Education, 23*(1), 58.
