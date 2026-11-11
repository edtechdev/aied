---
title: "Prevalence and correlates of GenerativeAI chatbot use for mental health concerns in higher education students"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T11:30:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
audience: [researchers, instructors, administrators]
sources: ['raw/papers/thulin-chatbot-mental-health-students-2026.md']
source_url: "https://doi.org/10.1016/j.chb.2026.109221"
source_depth: full text
confidence: high
foundations: [ai-literacy]
technology: [generative-ai, conversational-ai]
ethics: [equity-in-ai-education]
level: [higher ed, undergraduate]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Thulin (2026) asked 809 bachelor's-level students aged 18–24 at one large public U.S. university, drawn from the 2024–2025 Healthy Minds Study, whether they had used a general-purpose [[conversational-ai|chatbot]] for mental health reasons. 15.4% had. In weighted logistic regression, use was higher among students with greater perceived need for help (OR=1.44), more barriers to clinical care (OR=1.53), greater trust in AI for mental health information (OR=9.26) and Asian racial identity (OR=2.87), and lower among students with more [[ai-literacy|AI knowledge]] (OR=0.81). Diagnosis, suicidal ideation, past-year treatment, stigma and informal help-seeking were not independently associated. Because the survey is cross-sectional, it maps who turns to chatbots, not whether the conversations help.

## Key Findings

1. **About one in six students used a chatbot for mental health.** 15.4% of the weighted sample reported generative AI use for mental health information or advice (n=134 of 809). Users averaged 2.62 (SD=1.05) on the reversed 1–6 frequency scale, corresponding to "several times a week"; the full sample averaged 1.25 (SD=0.65), between "never" and "less than several times a week".
2. **Perceived need and access barriers were independently associated with use.** Each one-unit increase in perceived need for help raised the odds of use (OR=1.44, 95% CI [1.08, 1.93], p=.014), and each additional reported barrier to clinical services raised them further (OR=1.53 [1.10, 2.12], p=.012). Users reported a mean of 1.44 barriers (SD=1.44) against 1.08 (SD=1.12) in the full sample.
3. **Trust in AI was the strongest correlate.** A one-unit increase on the 0–3 trustworthiness scale was associated with 9.26 times the odds of use (95% CI [5.28, 16.24], p<.001). Mean trust was 0.79 (SD=0.59) overall and 1.17 (SD=0.58) among users, a favorable shift inside a sample the authors describe as largely considering generative AI untrustworthy.
4. **Lower AI knowledge predicted use.** Each additional correct answer on the six-item knowledge measure was associated with 19% lower odds of use (OR=0.81 [0.69, 0.94], p=.007). The sample averaged 4.77 correct (SD=1.56); users averaged 4.63 (SD=1.51).
5. **Asian students had nearly three times the odds of use.** After adjustment, students identifying as Asian had an odds ratio of 2.87 [1.26, 6.54] (p=.012) against White students; 28.9% of users identified as Asian against 16.0% of the sample.
6. **Clinical history and stigma did not survive adjustment.** Lifetime diagnosis (OR=0.42 [0.17, 1.02], p=.056), past-year suicidal ideation (OR=0.98 [0.41, 2.38], p=.970), past-year treatment (OR=1.31 [0.38, 4.50], p=.670), informal help-seeking (OR=0.91 [0.45, 1.81], p=.780), perceived stigma (OR=0.80 [0.60, 1.07], p=.127) and personal stigma (OR=0.98 [0.60, 1.61], p=.943) were null in the multivariable model. Perceived stigma had been associated at the bivariate level (OR=1.41 [1.11, 1.79], p=.005).
7. **Which barrier mattered depended on treatment status.** Among students who had received therapy or medication in the past year, use was associated with cost (OR=2.66 [1.09, 6.48], p=.031), insufficient time (OR=3.03 [1.40, 6.56], p=.005) and fear of mistreatment because of identity (OR=6.42 [1.02, 40.59], p=.048). Among those without past-year treatment, privacy concerns were (OR=5.09 [1.52, 17.09], p=.008).

## What the study did

The data come from the 2024–2025 Healthy Minds Study, an annual web-based modular survey of mental health and service use in [[higher-ed|higher education]]. One large public university opted into a broader Artificial Intelligence module containing the chatbot item. Of 12,000 randomly selected students invited from that institution, 2071 participated (17.3%) in the main module, and 953 were randomly selected to complete the AI module. The analytic sample was restricted to 925 bachelor's-level students and then to 896 aged 18–24, because other program and age cells were too small; 809 had complete data after 53 (5.92%) were dropped for missing or "no answer" on the chatbot item and 34 (3.8%) for missing independent variables. Participants with and without complete data did not differ by race (X2 = 11.57, p = .12) or gender (X2 = 4.10, p = .13).

The outcome was any reported use of [[generative-ai|generative AI]] "for matters related to mental health (e.g., identifying symptoms, ideas for treatment, etc.)", asked as one of eight purposes on a six-point frequency scale (α = .85) and collapsed to yes or no. Trust was two items on mental health information and decisions (α = .81), scored 0 to 3. [[ai-literacy|AI knowledge]] was six objective items drawn from a Pew Research Center survey (α = .84), scored 0 to 6. Perceived need, lifetime diagnosis, past-year suicidal ideation, past-year treatment, nine barriers to clinical services, informal help sources and two stigma items were single items or binary indicators from the main module.

Analyses were weighted for non-response by gender, race/ethnicity, academic level and grade point average, and run in Stata 19.0. Bivariate and multivariable logistic regressions report odds ratios. The F-adjusted goodness-of-fit test was insignificant (F = 0.429, p = .920), and the authors report no moderate or high multicollinearity.

## An access story more than a stigma story

The authors read the results through the Integrated Behavioral Model of Mental Health Help Seeking, in which structural, environmental and belief-level determinants shape intention and then behavior. On that account, chatbots are not mainly a technology-adoption phenomenon. They are one more node in a help-seeking process that practical conditions either open or close. The two proximal correlates — a felt need for help and a count of barriers to care — fit that reading: a student who recognizes a problem and cannot get to a clinic has a reason to open a free, immediate, private chat window. The authors note the direction is ambiguous: use might also push a student toward care, after which barriers become salient.

Trust was the largest coefficient in the model, but the paper is careful about it. Trust and use were measured in the same domain and at the same time, which inflates their association, and students may have come to trust the tool because earlier interactions helped. The authors explicitly warn against reading the odds ratio as evidence that trust causes use. The knowledge result is the more uncomfortable one. Students who knew less about AI were more likely to use it for mental health, and emerging adults have been found to be poor at identifying chatbot-generated falsehoods. The measure tapped general AI knowledge, not the skill of judging a mental health claim, and direction cannot be established here.

Stigma behaved unlike the hypothesis. Perceived stigma was associated with use only before adjustment, and personal stigma was unrelated throughout. The authors suggest perceived stigma may overlap with perceived need, barriers and trust, and that situation-specific concerns such as privacy or fear of identity-based mistreatment may matter more than general attitudes toward treatment. The exploratory barrier split supports that: cost, time and fear of mistreatment tracked use among students already in treatment, while privacy concerns tracked it among students who were not. Gender and financial hardship, both predicted to matter, were unrelated in every model.

## What this means for practice

- **Instructors:** Treat chatbot use as ordinary background behavior, not a fringe practice: roughly one student in six had used one for a mental health reason, and the likeliest users knew least about AI. Teach verification of AI-generated mental health information, the limits of general-purpose systems, and the situations that require professional or emergency support, without presenting chatbots as either uniformly harmful or clinically adequate.
- **Administrators:** Read chatbot prevalence as a signal about service access: use rose with each additional barrier, so cost, scheduling, privacy and identity-based mistreatment are the levers that plausibly reduce reliance on general-purpose tools.
- **Designers:** Do not assume that trust in a chatbot reflects calibrated trust. Mean trust was low even among users, and the students with the least AI knowledge were the most likely users.
- **Researchers:** Test the direction of the associations. This survey cannot say whether need and barriers lead to chatbot use, whether use changes perceptions of need, or where in a help-seeking sequence the chatbot sits.

## Limitations

The sample is undergraduate students at one 4-year public institution, which limits generalization to community colleges, 2-year institutions, art schools and older learners; the authors note the sample is racially diverse and includes notable representation of students with a non-binary or other gender identity. Most constructs are single self-report items, which invites recall and social desirability bias, and the chatbot and trust items were written by the study PI with limited psychometric validation. The binary outcome discards frequency, duration and content, so the study cannot say whether any interaction was beneficial, neutral or harmful. The barrier comparisons are exploratory, stratified and bivariate, with sparse cells — the identity-mistreatment estimate rests on few students and carries a wide interval. Residual confounding from technology use, digital literacy and reasons for use is possible, and no causal claim is available from a cross-sectional survey.

## Citation

Thulin, E. J. (2026). [*Prevalence and correlates of GenerativeAI chatbot use for mental health concerns in higher education students*](https://doi.org/10.1016/j.chb.2026.109221). Computers in Human Behavior, 187, 109221.
