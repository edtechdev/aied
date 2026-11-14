---
title: "A criminological mixed-methods analysis of university policies and strategies against AI cheating: A case study of novel deviance and cultural lag"
created: "2026-11-11T07:43:10-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors, administrators]
level: [higher ed]
sources: ['raw/papers/mcclanahan-ai-cheating-policies-cultural-lag-2026.md']
source_url: "https://doi.org/10.1016/j.chb.2026.109164"
source_depth: full text
confidence: high
foundations: [academic-integrity]
pedagogy: [social-norms-ai-use]
technology: [generative-ai, llm]
assessment: [assessment]
institutions: [educational-policy-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Universities have bet that clearer [[academic-integrity|academic integrity]] rules and harsher penalties will stop students from using [[generative-ai|generative AI]] to cheat. This vignette experiment with thousands of US and UK [[higher-ed|college students]] suggests the bet is largely misplaced. Students who believed they would be caught, or that a penalty would hurt, said they were less likely to cheat, but none of the policy and instructor cues reliably shifted those beliefs or the stated likelihood of cheating once prior behavior was accounted for. Students who had cheated before were far likelier to do it again and discounted both detection and punishment. The authors' explanation is cultural lag: the technology arrived before any shared definition of cheating, so students judge the risk of an [[assessment|assignment]] for themselves.

## Key Findings

1. **Fear of being caught deterred; the policies did not.** Perceived certainty of detection and perceived severity of punishment both predicted a lower stated likelihood of cheating. The manipulations meant to raise those perceptions — syllabus language, a professor who had caught students, warnings about lost learning, technical savvy, penalties from a failed assignment to expulsion — mostly did not move behavior once risk perceptions and past conduct were controlled.
2. **Prior behavior outweighed every experimental condition.** Students who had used AI to cheat before were several times more willing to do it again, perceived substantially less risk, and rated punishment as less severe. Past conduct is the best available predictor, which makes first offences the moment to intervene.
3. **Two cues worked only before controls.** A syllabus calling AI plagiarism with a failing course grade, and a professor described as technologically savvy who would fail the class, both reduced stated cheating in the simpler model. Both lost significance once risk perceptions and prior behavior entered, which means they were not working through the mechanism the theory expects.
4. **Most students were already non-cheaters.** 29% rated their chance of using AI at 0% whatever the scenario said. For them the policy question was moot because cheating was not an available action, so whole-sample averages understate how much the manipulations mattered to the students at risk.
5. **Students supplied their own rules.** The [[qualitative-research|qualitative]] themes ran from external consequences to internal controls such as morality, investment in learning and views of AI, and from the cost of not cheating to minimising, justifying and risk-managing their own use. Students described AI as a tutor, as outline help, or as a way to reach a word count, and did not classify any of that as cheating.
6. **Detection was discounted.** Participants described proving AI use as almost impossible, so the [[ai-detection|detection tool]] universities rely on did not register as a credible risk. A formal system that students do not believe in deters nobody.
7. **Punishment severity barely moved perceptions.** Only one condition raised perceived severity, by an amount the authors treat as negligible. Raising the stated penalty is not the same as raising the penalty students expect.

## What the study did

The design was a five (policy) by four (punishment severity) between-groups factorial survey, with 21 versions of a vignette in total: 20 experimental cells plus a control that mentioned no policy or punishment. Every participant read the same root story about a tight deadline on a challenging essay in a required major course, then saw one of five policy or practice cues: the professor saying they had caught students before, a syllabus stating that using AI is plagiarism, a professor warning that AI robs students of their education, a professor described as technologically savvy, or a professor described as non-technologically savvy. The punishment factor varied across no stated penalty, failing the assignment, failing the course, and expulsion.

Participants were 3,298 students recruited through Prolific, all at least 18 and studying in the US or UK; 58.46% were female, 41% were in graduate school, and 69.77% attended a public or state university. Data were collected in August 2025 and participants were paid a small fee. The outcomes were stated likelihood of using AI, perceived likelihood of getting caught, and perceived severity of punishment on a seven-point scale. Analysis used 11 fractional regressions with robust standard errors, entering blocks of predictors by theoretical construct, plus an inductive thematic content analysis of open-ended accounts. Of the sample, 429 students described a time they had actually used AI on an assignment when it was not allowed, and thematic saturation arrived after roughly one third of those accounts.

## Why the policies did not register

The authors' explanation is cultural lag, borrowed from Ogburn: the material practice of AI use has outrun the non-material apparatus of [[social-norms-ai-use|norms]], rules and enforcement. That produces what Moor called a policy vacuum, and students fill it with personal frameworks. The qualitative data show the mechanism repeatedly. Students called policies vague or inapplicable to their own case, then classified their use as legitimate. Because they did not define the act as cheating, the formal risk never entered the calculation.

The same novelty undermines the situational cues that deterrence depends on. For burglary, a car in the driveway or a light in the window is a widely shared signal of occupancy. For AI cheating, the paper argues, no such signal has consensus. Students doubt that AI use can be proved at all, and the authors compare their reasoning to a burglar who sees a broken camera: the formal detection system is present but not believed. One consequence is that students who do cheat learn to manage risk rather than abstain, rewriting output, paraphrasing, or spacing submissions over time so the artifact looks human.

A second mechanism is Bayesian updating. Students who cheat and are not caught lower their estimate of getting caught next time, which is why prior behavior dominates the models. The paper also notes a moral route: some students defined their use as cheating but justified it by workload, competing obligations, or the belief that everyone else was doing it.

## Where the theory holds, and where it strains

Rational choice theory survives the test in its core claim: perceived certainty and severity predict the stated likelihood of cheating, with effect sizes the authors describe as comparable to criminological work on other offences. A standard-deviation rise in perceived certainty went with an 8.57 percentage point lower stated likelihood of cheating, and the same rise in perceived severity with 6.23 points lower — differences a student would notice in a decision about one assignment. What fails is the policy transmission belt. The manipulations were supposed to raise perceived risk and thereby reduce cheating, and they did neither for most conditions.

The paper is candid that it tested only the risk side of the model. Rewards were not manipulated, and the qualitative accounts suggest they matter: students described grades as something to be saved rather than earned, which the authors read through prospect theory and loss aversion. On that reading, not using AI when a grade is already at risk is the guaranteed loss, and cheating is the gamble. That reframing, rather than another deterrence message, is the paper's most consequential theoretical suggestion.

For administrators, the practical claim is narrow but firm: blanket [[educational-policy-ai|AI policies]] assume a shared definition of cheating that the data show does not exist. The paper recommends explicit, nuanced policies, instructors telling students plainly that the university's definition differs from their own, and assignment designs that permit [[explainable-ai|transparent AI]] use where the learning objective allows it.

## What this means for practice

- **Instructors:** State the institution's definition of cheating in concrete cases rather than relying on a syllabus prohibition. Students who classify their own use as legitimate do not experience the policy as a risk, so a worked example — this is allowed, this is not, here is why — does more than a warning.
- **Administrators:** Treat a blanket ban as a message only some students will hear. The students most likely to cheat already discount detection and are the least moved by severity, so invest in making detection credible and in early response to first offences rather than in escalating stated penalties.
- **Designers:** Build assignments that make permitted AI use visible and bounded, and add oral or in-person components where the claim is individual competence. If students cannot tell where the line is, a tighter rule mostly changes how they describe what they did.
- **Researchers:** Test rewards and conformist risks alongside sanctions. This study manipulated only the risk side, and its own qualitative data point to loss aversion and perceived peer behavior as competing explanations.

## Limitations

The sample came from Prolific and is WEIRD, and the authors could not objectively verify that every participant was a student despite screening questions. The outcome is a stated intention in a hypothetical vignette, not observed cheating, so social desirability and imagination both sit between the response and the behavior, although the authors note that participants admitted past cheating in detail. Rewards were not manipulated, so the paper cannot quantify the benefit side of the rational-choice calculus. The vignette fixes one writing assignment in one course context, and the reported effects are averages across 21 conditions, which cannot show how a specific policy interacts with a specific discipline or institution.

## Citation

McClanahan, W. P., & Dickinson, T. (2026). [*A criminological mixed-methods analysis of university policies and strategies against AI cheating: A case study of novel deviance and cultural lag*](https://doi.org/10.1016/j.chb.2026.109164). Computers in Human Behavior, 187, 109164.
