---
title: "Trust Outranks Usefulness: Metacognitive Control and Trust in Art Students' Adoption of Generative AI"
published: "2026-10-29"
created: "2026-11-04T15:00:00-05:00"
updated: "2026-11-04T15:00:00-05:00"
type: article
sources: ['raw/papers/zhu-creative-agency-trust-genai-art-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey, experiment]
discipline: [arts education]
level: [higher ed, undergraduate, graduate]
audience: [instructors, curriculum designers, researchers]
foundations: [agency, human-ai-collaboration, theories-and-frameworks]
pedagogy: [metacognition, creativity, scaffolding]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Zhu (2026) reports two studies on how Chinese art students take up [[generative-ai|generative AI]] in studio work. Study 1 fits a [[technology-acceptance-model|UTAUT]] model with an added [[trust]] construct to cross-sectional survey data from 450 art majors in Zhejiang, and finds trust the strongest direct correlate of behavioral intention (β = 0.425), ahead of every classic acceptance path. Social influence was the strongest correlate of trust (β = 0.262), and 42.1% of its total association with intention ran through trust. [[metacognition|Metacognitive control]] carried a direct path to intention (β = 0.146) and a smaller path to trust (β = 0.099). Study 2 randomized 80 of those students to four-stage metacognitive prompts or a control task and had three blinded experts rate the resulting images: prompted students scored higher on semantic content (*d* = 0.67), visual style (*d* = 1.30) and spatial composition (*d* = 0.63). The studies converge on metacognitive control but test different outcomes, and the trust pathway exists only in the survey.

## Key Findings

1. Study 1 drew 450 valid questionnaires from art-and-design majors at eight [[higher-ed|higher education]] institutions in Zhejiang, collected April 1 to April 29, 2026, for a 98.9% valid response rate after five cases were removed for short completion times or contradictions. All 11 hypotheses were supported.
2. Trust was the largest coefficient into behavioral intention (β = 0.425, *p* < 0.001), against social influence β = 0.155, metacognitive control β = 0.146, performance expectancy β = 0.128, effort expectancy β = 0.113 and facilitating conditions β = 0.092. The model explained 59.7% of the variance in intention (R² = 0.597).
3. Every antecedent also fed trust: social influence β = 0.262, facilitating conditions β = 0.219, effort expectancy β = 0.204, performance expectancy β = 0.202, all *p* < 0.001, and metacognitive control β = 0.099, *p* = 0.042. Trust itself had R² = 0.435.
4. Mediation through trust was partial for all five antecedents, with bias-corrected confidence intervals excluding zero. Social influence's indirect effect was 0.112 of a total 0.266, the 42.1% share; metacognitive control's indirect effect was only 0.042 of 0.188, so most of its association with intention was direct.
5. Study 2 assigned 80 participants (40 per arm; 32 male, 48 female; ages 18–24, *M* = 20.35, *SD* = 1.27) to metacognitive prompts or standard instructions, then had three blinded experts score one generated image each on a 7-point scale.
6. Expert means favored the prompted group on all three dimensions and survived false-discovery-rate correction: semantic content 5.02 versus 4.62 (*d* = 0.67), visual style 5.13 versus 4.28 (*d* = 1.30) and spatial composition 4.90 versus 4.52 (*d* = 0.63).
7. Machine feature distances agreed in direction, with greater within-group dispersion for the prompted group on semantic content (0.510 versus 0.276), visual style (17.142 versus 9.979) and spatial composition (4.773 versus 4.271), permutation *p* < 0.0001, < 0.0001 and 0.001.
8. Measurement was strong on the survey side — overall α = 0.927, construct α from 0.874 to 0.909, AVE from 0.636 to 0.770, CFI = 0.981, RMSEA = 0.029 — but expert agreement in the experiment was only moderate, ICC from 0.635 to 0.692.

## Two studies, two kinds of claim

The design split matters more than the shared construct. Study 1 is a cross-sectional [[quantitative-research|structural equation model]] of stated intention, so every path in it is an association measured at one time, and the authors say so. Study 2 is a between-subjects experiment with random assignment, blinded raters and a standardized task, which buys causal leverage over one manipulable piece of metacognitive control: the situational prompts given before creation. It does not measure trust, does not test the mediation model, and its outcome is expert-rated aesthetic quality rather than creative ability.

That asymmetry is honest and also limiting. The paper's headline claim — trust as the strongest predictor of adoption — rests entirely on [[self-report-measures|self-reported]] intention from students who had already used generative AI. The experimental half says something narrower: four-stage prompts, delivered once, moved outputs away from what the model would have produced unprompted. Reading the two together as a single mechanism would overstate what was tested; the authors describe complementary triangulation and explicitly decline to claim the full pathway.

The model itself was modified in ways worth noting. Use behavior was dropped because every respondent already used generative AI in coursework, which would have produced restricted variance and ceiling effects. Facilitating conditions were redirected to intention and trust rather than to use, on the argument that hardware and training raise perceived manageability before they produce creative use.

## Why trust, and why social influence, leads

In most educational technology acceptance work, performance expectancy is the primary driver of intention. Here it ranks fourth among the antecedents, behind trust, social influence and metacognitive control. The authors read the reversal as specific to artistic creation: students are not only asking whether the tool is productive but whether it is a legitimate medium for work that carries their authorship.

The construct, however, is thinner than that framing suggests. The trust scale began as an established technology trust instrument with two added authorship items, and a pilot study of 121 students showed those two items loading on a separate factor (0.773 and 0.845) rather than on the five retained trust items. They were removed before the main analysis. Two of the five remaining items — originality and authorship, algorithmic fairness — cover art-specific concerns; the other three are functional reliability, safety and overall reliability. The authors therefore describe what they measured as primarily instrumental trust with an art-value supplement, and they warn against reading β = 0.425 as evidence of a developed art-specific trust dimension.

What the scale captures is stated confidence, not [[trust-calibration|calibration]] — whether that confidence tracks the system's actual reliability on a given task. A student can trust a model appropriately or indiscriminately, and this instrument cannot tell the two apart.

Social influence's prominence gets a more interesting reading. In traditional acceptance research it operates as [[social-norms-ai-use|normative pressure]] or imitation. The authors argue that in [[arts-design-and-media-education|art education]] it carries judgments about legitimacy, because artistic value is constructed through social negotiation and institutional recognition. When teachers and peers treat generative AI as a legitimate medium, students may revise their beliefs about what counts as authentic practice rather than merely conform. That reframes the coefficient as a claim about community standards, and it explains why the effect was larger than in general higher education samples.

## Metacognitive control as a disposition and as a prompt

The construct has four parts: planning interaction strategy before generation, monitoring whether outputs serve the goal, regulating the approach in response to [[feedback]], and maintaining explicit awareness of the human–AI division of labor. The theoretical argument for why art needs more of it is not that creative tasks are harder but that their stopping rules are unclear, so the creator must repeatedly decide what to keep, revise or discard.

Study 1 measured this as an individual difference and found the smallest antecedent path to trust in the model, β = 0.099 at *p* = 0.042, close enough to threshold that it should not carry much weight. Its path to intention, β = 0.146, was more secure and mostly direct. Study 2 manipulated only the situational layer, with prompts aligned to the same four dimensions, and produced the largest effect on visual style. The authors suggest this is where procedural guidance most plausibly moves output, because it pushes against the model's default stylistic tendencies.

The caution they attach is important. Greater within-group feature dispersion means images differed more from one another, which is a statistical property of embeddings and texture statistics, not a measure of creativity. Randomness, generation noise or stylistic drift would inflate the same numbers. Expert ratings are the primary evidence, and expert agreement was moderate, so the visual style effect in particular may shrink under reliability correction. The paper also notes that these magnitudes come from a short laboratory task with fixed keywords, one model and a 15-minute window.

## What this means for practice

- **Instructors.** Teach the process, not just the tool. Structured prompt worksheets that state creative goals before generation, revision logs that record why a prompt changed, and comparative critique of raw versus human-refined outputs all target the four dimensions the paper operationalizes, and the experimental arm suggests a single session of this is enough to shift output.
- **Curriculum designers.** [[prompt-engineering|Prompt-engineering]] tricks are the wrong unit of instruction on their own. The paper's argument is that passive acceptance of formulaic output is a metacognitive failure, so [[assessment]] should weight planning documents, iteration records and role-boundary reflections alongside the final image.
- **Program leads.** Legitimacy is a lever. Because social influence was the strongest correlate of trust, how instructors and departments frame generative AI as an acceptable medium is not incidental messaging; in this sample it was the dominant route into trust.
- **Researchers.** The obvious next instrument is a validated art-specific trust scale. With two of five items carrying value-laden content and the authorship items discarded at the exploratory stage, the field currently has no measure that separates instrumental reliability from judgments about originality, attribution and fairness.

## Limitations

- Study 1 is cross-sectional, so the ordering among metacognitive control, trust and intention is assumed by the model rather than observed. The experiment does not repair this, because it never measured trust.
- The trust scale is predominantly instrumental. The two authorship items were dropped after forming their own factor in a pilot of 121 students, leaving originality and fairness as the only art-specific content.
- Participants are art majors at higher education institutions in Zhejiang Province only; the authors flag that regional norms about authorship and institutional AI policy may change the balance between instrumental and value-based trust.
- Study 2 used 80 students, one model (Nano Banana 2, accessed as a preview build over two days in May 2026), two fixed keywords and a single 15-minute task, so the effect sizes are laboratory estimates.
- Expert reliability was moderate (ICC 0.635 to 0.692), and the rating scale measures aesthetic quality rather than [[creativity]], which the authors state directly.
- The design cannot test the collective creativity paradox, since it measured dispersion within groups rather than the distribution of outputs across independent users of one model.

## Citation

Zhu, R. (2026). [Supporting creative agency: Metacognitive control and trust in generative AI art education](https://doi.org/10.3389/fpsyg.2026.1997631). *Frontiers in Psychology, 17*, 1997631.
