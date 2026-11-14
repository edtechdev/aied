---
title: "Prevalence and correlates of GenerativeAI chatbot use for mental health concerns in higher education students"
created: "2026-11-11T07:43:25-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Most students who take a mental health question to a general-purpose [[conversational-ai|chatbot]] are not choosing a gadget over a therapist on a whim. They are improvising around care they cannot easily reach. In a survey of undergraduates at one large public university, 15.4% had used a chatbot for a [[well-being|mental health]] reason, and use rose with felt need for help and with each additional barrier to care. It was highest among students with the most [[trust|trust]] in AI and the least knowledge about it. Diagnosis, suicidal thoughts, prior treatment and stigma did not predict use on their own. Chatbot use here reads as an access signal, and the students most exposed to it are the least equipped to judge what it tells them.

## Key Findings

1. **15.4% of students had used a chatbot for a mental health reason.** The behavior is common enough to count as ordinary student practice rather than a fringe experiment, and frequent users turned to it several times a week rather than once in a crisis.
2. **Use tracked unmet need, not diagnosis.** Students who felt they needed help, and those who reported more barriers to clinical care, were the likelier users. A lifetime diagnosis, recent suicidal thoughts and past treatment made no independent difference, which points at access rather than severity.
3. **Trust in AI was the strongest single correlate.** Students who rated AI trustworthy for mental health information were far more likely to use it for that purpose. Trust and use were measured on the same topic at the same moment, so the two probably reinforce each other rather than one simply causing the other.
4. **Students who knew least about AI used it most.** Each additional correct answer on a short [[ai-literacy|AI knowledge]] test lowered the odds of use. The people most exposed to a system's errors were the least equipped to notice them.
5. **Asian students were substantially more likely to use chatbots.** The difference held after accounting for need, barriers, trust, knowledge and clinical history. The authors offer no mechanism, so it is a pattern to investigate rather than something to explain away.
6. **Stigma did not behave as expected.** General attitudes toward treatment were unrelated to use once other factors were accounted for. Specific worries — privacy, cost, time, fear of being mistreated — were what separated users from non-users.
7. **Which barrier mattered depended on whether the student was already in care.** Cost, time and fear of identity-based mistreatment tracked use among students who had recently received treatment; privacy concerns tracked it among those who had not.

## What the study did

The data come from the 2024–2025 Healthy Minds Study, an annual web-based modular survey of mental health and service use in [[higher-ed|higher education]]. One large public university added a module on artificial intelligence. Of 12,000 randomly selected students invited there, 2071 completed the main survey and 953 were randomly assigned the AI module; after restricting the sample to bachelor's-level students aged 18–24 and dropping incomplete cases, 809 remained. Weighted to the institution, 15.4% reported using [[generative-ai|generative AI]] "for matters related to mental health (e.g., identifying symptoms, ideas for treatment, etc.)" — 134 students. The item was one of eight purposes on a six-point frequency scale, collapsed to yes or no, so the study records that a student turned to a chatbot, not what happened in the conversation.

Trust was two items about mental health information and decisions, scored from low to high. [[ai-literacy|AI knowledge]] was six objective items adapted from a Pew Research Center survey. Perceived need, diagnosis, suicidal ideation, past-year treatment, nine barriers to clinical services, informal help sources and two stigma measures came from the main module, most as single items. Analyses were weighted for non-response by gender, race, academic level and grade point average. Students dropped for missing data did not differ from the analyzed sample by race or gender.

## An access story more than a stigma story

The authors read the results through the Integrated Behavioral Model of Mental Health [[help-seeking|Help Seeking]], in which structural, environmental and belief-level determinants shape intention and then behavior. On that account, chatbots are not mainly a technology-adoption phenomenon. They are one more node in a help-seeking process that practical conditions either open or close. A student who recognizes a problem and cannot get to a clinic has an obvious reason to open a free, immediate, private chat window, and the two proximal correlates — a felt need for help and a count of barriers to care — fit that reading. The authors note the direction is ambiguous: use might also push a student toward care, after which barriers become salient.

Trust carried by far the largest association in the model, at 9.26 times the odds of use for each point on the trust scale, but the paper is careful about it. Trust and use were measured in the same domain at the same time, which inflates their association, and students may have come to trust the tool because earlier interactions helped. The authors explicitly warn against reading the odds ratio as evidence that trust causes use.

The knowledge result is the more uncomfortable one. Each additional correct answer on the six-item measure was associated with 19% lower odds of use, and emerging adults have been found to be poor at identifying chatbot-generated falsehoods. The measure tapped general AI knowledge, not the skill of judging a mental health claim, and direction cannot be established here.

One group difference the authors report but do not explain is racial: Asian students had 2.87 times the odds of use after adjustment, and they made up a larger share of users than of the sample. The paper offers no mechanism, and the estimate rests on a modest number of students, so it is best read as a question for campus services rather than a finding about culture.

Stigma behaved unlike the hypothesis. Perceived stigma was associated with use only before adjustment, personal stigma was unrelated throughout, and the authors suggest perceived stigma may overlap with perceived need, barriers and trust. Situation-specific concerns such as privacy or fear of identity-based mistreatment may matter more than general attitudes toward treatment. The exploratory barrier split supports that: cost, time and fear of mistreatment tracked use among students already in treatment, while privacy concerns tracked it among students who were not. Gender and financial hardship, both predicted to matter, were unrelated in every model.

## What this means for practice

- **Instructors:** Treat chatbot use as ordinary background behavior rather than a fringe practice. 15.4% had used one for a mental health reason, and the likeliest users knew least about AI. Teach students to verify AI-generated mental health information, to recognize the limits of general-purpose systems, and to know which situations require professional or emergency support, without presenting chatbots as either uniformly harmful or clinically adequate.
- **Administrators:** Read chatbot prevalence as a signal about service access. Use rose with each additional barrier, so cost, scheduling, privacy and identity-based mistreatment are the levers that plausibly reduce reliance on general-purpose tools.
- **Designers:** Do not read user trust as [[trust-calibration|calibrated trust]]. Trust was low even among users, and the students with the least AI knowledge were the most likely to be using the tool.
- **Researchers:** Test the direction of these associations. This survey cannot say whether need and barriers lead to chatbot use, whether use changes perceptions of need, or where in a help-seeking sequence the chatbot sits.

## Limitations

The sample is undergraduate students at one 4-year public institution, which limits generalization to community colleges, 2-year institutions, art schools and older learners; the authors note the sample is racially diverse and includes notable representation of students with a non-binary or other gender identity. Most constructs are single [[self-report-measures|self-report]] items, which invites recall and social desirability bias, and the chatbot and trust items were written by the study PI with limited psychometric validation. The binary outcome discards frequency, duration and content, so the study cannot say whether any interaction was beneficial, neutral or harmful. The barrier comparisons are exploratory, stratified and bivariate, with sparse cells — the identity-mistreatment estimate rests on few students and carries a wide interval. Residual confounding from technology use, digital literacy and reasons for use is possible, and no causal claim is available from a cross-sectional survey.

## Citation

Thulin, E. J. (2026). [*Prevalence and correlates of GenerativeAI chatbot use for mental health concerns in higher education students*](https://doi.org/10.1016/j.chb.2026.109221). Computers in Human Behavior, 187, 109221.
