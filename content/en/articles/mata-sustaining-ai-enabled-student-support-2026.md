---
title: "Sustaining AI-enabled student support: A four-year implementation and impact study"
created: "2026-09-27T22:30:00-04:00"
updated: "2026-10-01T20:36:14-04:00"
type: article
sources: ['raw/papers/mata-sustaining-ai-enabled-student-support-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [experiment, longitudinal study]
level: [higher ed, undergraduate]
audience: [administrators, institutions, researchers]
foundations: [ai-education]
pedagogy: [self-directed-learning, help-seeking]
technology: [conversational-ai, generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research, rct, mixed-methods-research]
institutions: [change-management, educational-policy-ai]
ethics: [equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Mata, Russell, and Page study CSUNny, a non-generative [[conversational-ai]] text-messaging chatbot at California State University, Northridge, a large urban public university. This is a working paper from the Annenberg Institute at Brown University (EdWorkingPaper No. 26-1409), not a peer-reviewed article. The design pairs system observation and discussions with administrators against a four-year [[rct]] that followed two undergraduate cohorts (N = 8,708) through eight semesters — an example of [[mixed-methods-research]] in [[ai-education]]. The study asks what it takes for an institution to sustain centralized chatbot communication, how receptive students remain over time, and what impact the tool has on outcomes across college. The verdict splits: impacts concentrate in [[student-support-and-success|completion of time-sensitive administrative tasks]] such as early course registration, while academic performance and persistence show no detectable effects.

## Key Findings

- **Centralized ownership and flexible communication were the conditions for sustainability.** CSUN engaged Mainstay in 2018 to build a university-specific chatbot, jointly overseen by the Office of Undergraduate Studies and the Office of the Registrar, with one communication specialist writing every campaign for a consistent voice. Flexibility let the team absorb the COVID-19 shock: campaign volume rose from 72 in AY2019-20 to a peak of 101 in AY2020-21.
- **Students stayed receptive over four years.** Annual opt-out rates never exceeded 4%, most opt-outs came early in the fall, and a single April 2023 campaign that explicitly named the opt-out option drew about 2% of its targeted group. Average active engagement on interactive campaigns was roughly 5%, though one spring check-in campaign reached nearly 46%.
- **Task completion moved.** After a July 31, 2018 registration reminder, treated students were 34 percentage points more likely to enroll by August 16 (2 percentage points by September 15). Early Start reminders produced 11 percentage points more registration by June 7 and 20 percentage points by June 22.
- **Academic outcomes did not.** No statistically significant treatment effect appeared on enrollment by semester sequence, graduation by the fourth year (control mean 0.190), units enrolled, earned or cumulatively earned, or term and cumulative GPA. At N = 8,708 the study was powered to detect effects of 0.05 standard deviations or larger.
- **The campaign mix drifted toward general messaging.** CSUN sent an average of 78 campaigns per academic year; targeted campaigns fell from 36% in AY2018-19 to 6% in AY2022-23 (30 campaigns to fewer than five), while informative campaigns rose to 55% by AY2022-23.

## What made the program survive four years

Mata, Russell, and Page trace durability to organizational choices rather than to the technology. Because the channel is centrally operated rather than distributive like email, where to house it mattered: the Office of the Registrar, which tracks matriculation and enrollment and already contacts newly admitted students, sat at the center of the collaboration and data-flow diagram — a [[change-management]] decision as much as a technical one. One communication specialist wrote every campaign to hold a consistent voice, and other team members monitored responses to shape later outreach and the knowledge base.

Cross-unit coordination supplied the targeting. Because student data is not centralized at CSUN, a FAFSA reminder required Financial Aid to identify non-filers and the Registrar to pass that subset to the chatbot team. The same friction explains the drift toward broad campaigns: customization demanded interoffice data sharing that was burdensome to sustain. Human labor stayed inside the loop — the non-generative AI answered questions matched to a pre-programmed, university-approved knowledge base and flagged the rest for an administrator, whose reply was added back into the knowledge base. The authors argue this human component is what reaches students who are hard to engage by email or phone, a point they tie to [[equity-in-ai-education]].

## Why task completion moves while performance and persistence do not

The impact results separate what a reminder can do from what it cannot. A registration or Early Start nudge acts on a single, dated, binary decision that a student controls and the institution can observe within days, which is why those effects are large and immediate. Persistence and GPA are cumulative outcomes shaped by instruction, finances, employment, family circumstances and prior preparation, and the authors conclude that communication through a tool like this, on its own, may be insufficient to change them.

The nulls are precise rather than underpowered, which pushes against a sample-size explanation. Early registration still carries value even without [[learning-gains]]: it supports institutional planning for staffing and space and may help students organize time and financial aid. The authors frame universities as socio-technical systems, so implementing a communication technology is as much an organizational challenge as a technological one — a claim with [[educational-policy-ai]] implications they expect to apply to [[generative-ai]] tools adopted later, though the tool studied here was non-generative.

## What this means for practice

- **Administrators.** Settle the administrative home first. A central office was essential both for enacting and sustaining the intended goals of chatbot communication and for coordinating data flow across the offices holding the information the tool needed.
- **Administrators.** Budget staff time, not only licensing: a designated communication specialist, a team that reads responses, and administrators who answer flagged questions are what kept the knowledge base accurate.
- **Institutions.** Treat data access as infrastructure and design the evaluation alongside the campaign. Targeting FAFSA reminders required data sharing that was burdensome, and in most cases the necessary data could not be retrieved afterward, so most targeted campaigns went unevaluated.
- **Institutions.** Keep the message mix flexible and the tone human: campaigns were tailored to students' status, phrased differently across the year, intentionally upbeat, and free of threatened consequences.
- **Researchers.** Measure passive engagement, not only active replies. Opt-out rates below 4% alongside roughly 5% active engagement suggest that conclusions about sustained engagement depend on whether a study counts direct interaction only or also students who act on information without texting back.

## Limitations

- Data silos blocked evaluation of most targeted campaigns: the team could not readily access certain data elements, so the authors could not report effects for FAFSA filing reminders or most other targeted outreach.
- Spillover cannot be tested or adjusted for. During the pandemic, treated students may have shared chatbot messages with control-group peers, and the design does not let the authors correct estimates for any resulting attenuation.
- The setting is one institution. CSUN's student population may differ from others', though the authors argue the coordination, data-sharing and sustainability challenges are likely to apply more widely.
- The technology is non-generative. Lessons about coordination, data governance and engagement are offered as likely relevant to generative AI tools, but no generative system was tested.

## Citation

Mata, C., Russell, E., & Page, L. C. (2026). [Sustaining AI-enabled student support: A four-year implementation and impact study](https://doi.org/10.26300/b0dp-sn77) (EdWorkingPaper No. 26-1409). Annenberg Institute at Brown University.