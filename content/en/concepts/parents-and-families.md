---
title: Parents and Families
created: "2026-09-16T14:29:36-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: concept
foundations: [ai-literacy]
technology: [conversational-ai]
ethics: [digital-divide, equity-in-ai-education]
connected_faqs: [ai-guidance-children-under-13]
confidence: medium
audience: [instructors, policymakers, researchers]
level: [preschool, primary education, secondary, k 12]
reviewed_by: [editor]
---

> **Parents and families** — the household as a stakeholder in [[ai-education|AI in education]]: the caregivers who tutor their children at home, choose and pay for tools, supervise or fail to notice what those tools do, and receive whatever their school communicates about AI. The page collects the evidence on AI-mediated parent–child [[intelligent-tutoring|tutoring]] and [[conversational-ai|conversational]] companions used in the home, on the handoffs between home and school, on parents' own [[ai-literacy]], and on the [[equity-in-ai-education|equity]] consequences of home devices, connectivity and cost. Its scope is the family as an actor — what families do with AI, what reaches them from school, and what the research does and does not establish about the results.

## Questions to Consider

- [[paratutor-parent-child-tutoring|Luo et al. (2026)]] found that generic [[llm]] assistance reduced the parent's tutoring role, while a role-separated interface preserved it. If you were designing a tool for a parent and child to use together, what would you protect the parent from, and what would you hand them?
- In [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu's (2026)]] data, homework scores rose 18% while [[summative-assessment|closed-book exam]] scores fell 20% within six months. What does a parent actually see happening at home, and what would they need to be told to notice the difference?
- [[k12-teachers-ai-companion-literacy-2026|Xiao et al. (2026)]] found teachers naming parents as primarily responsible for children's relationships with AI companions while describing those same parents as unaware or overstretched. Is that a reasonable assignment of responsibility, and what would it take to make it real?
- [[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos, Dong and Low (2026)]] nearly doubled first-session attendance by removing family-facing paperwork. In your own school or program, which parts of the home-facing process exist for the family's benefit and which exist for the institution's?
- [[family-school-autonomy-support-genai-2026|Fan, Li and Zhang (2026)]] treat family–school coordination as an untested hypothesis rather than an established practice. If it has never been tested, on what evidence does the advice your school currently gives to parents rest?
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|MacCallum, Parsons and Mohaghegh (2026)]] describe second- and third-level digital divides that persist after devices have been supplied. What would closing the skills and outcomes gaps look like in a household, as opposed to a classroom?

## Introduction

A large share of children's time with AI happens outside the classroom, in a setting the research literature mostly treats as background. Work on tutoring and learning outcomes is usually school-based, while work on family guidance is usually advisory rather than tested, so families are simultaneously the target of a great deal of guidance about [[ethics|responsible AI]] use and the subject of very little evidence about whether that guidance works.

This page treats the household as an actor in its own right. It covers AI-mediated parent–child tutoring, the companion and reading tools children meet at home, what schools do and do not tell families about AI use, parents' own [[ai-literacy]] and what is known about their views, and the access and cost conditions under which families use these tools. Where the evidence is thin, the page says so rather than filling the gap.

## Parents as co-educators at home

The clearest design evidence on home tutoring comes from [[paratutor-parent-child-tutoring|Luo et al. (2026)]], who built ParaTutor for the Chinese home-tutoring context after a [[formative-assessment|formative]] study of how parents help with math word problems. That formative work identified recurring failures: parents struggle to understand the structure of the problem, often lack the content knowledge to support it, and run into communication difficulties that break shared understanding. The design response was role separation — parents received tutoring guidance through [[agentic-ai|multi-agent]] chatbots while children received visual grounding for the problem itself, with phase-gated support to stop dyads jumping to answers. In an evaluation with 23 parent–child dyads (children aged 10–12) across four conditions, generic [[llm]] assistance tended to displace the parent's role, whereas the role-separated interface kept parents delivering and adapting support while children stayed in the reasoning. The authors' implication is context-specific: in [[math-education]], where model accuracy is limited, children should not be interacting with the model independently.

[[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos, Dong and Low (2026)]] treat the household as a procedural actor, and their results are as much about family behavior as about tutoring. Their [[rct|randomized trial]] with the Toronto District School Board placed human virtual tutors over Khan Academy practice for struggling Grade 4–8 students. In Year 1, only about 45% of [[teacher-role|teacher]]-nominated students attended even one session, with families lost at each handoff: invitation, interest, account creation on a [[edtech-platform|third-party platform]], matching, showing up. In Year 2, inviting families directly through their own teacher for a fixed weekly time and handling enrollment and scheduling on the family's behalf raised first-session take-up to 83%. Weekly attendance still hovered near two-fifths, mostly intermittent absence rather than dropout; practice rose about 17 minutes a week, and the intent-to-treat effect on the topic test was 0.055 SD, with report-card marks up about 0.08 SD. Removing friction changed who showed up, not how much anyone sustained.

## Companions and reading tools in the home

Families more often meet AI as a companion app than as a tutoring system. [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]] compared a fixed "student peer" companion (Whisper with GPT-3.5) against experienced homeroom teachers in book-talk sessions with 19 elementary students in Taoyuan, Taiwan — 12 in Grade 4 and seven in Grade 5, four sessions each. Students spent significantly more time with the AI, yet contributed a markedly lower proportion of words and sentences; for Grade 5 the share was less than a third of what they produced with the teacher, a pattern the paper calls conversational dominance. The companion was effective at eliciting factual recall and significantly weaker than the teacher at [[prompt-engineering|prompting]] emotional and future-oriented reflection — an affective ceiling. Liao's response is a role-adaptive framework in which one companion occupies Student Peer, Teacher Assistant and Parent Advisor roles, the last extending discussion into the home. The diagnosis behind it is a support vacuum: most companion designs stay focused on the student–AI dyad and give teachers and parents no defined place.

Two early-childhood papers bear on what reaches the home. [[creative-project-approach-ai-early-childhood-2025|Yang, Li and Lee (2025)]] argue that physical, [[embodied-learning|embodied]] agents are developmentally preferable to screens for young children, but warn that generative social robots can fabricate content that preoperational children accept as truth, lack developmental calibration in their [[feedback]], and carry cost and access barriers that widen the [[digital-divide]]. [[ai-play-framework-early-childhood-2026|Malallah et al. (2026)]] take a different route with the same age group: their unplugged, [[game-based-learning|play]]-based AI-Play framework was implemented through a family-centered Hour of Code event, with parent surveys and child reflection sheets used to gauge engagement and [[usability-research|usability]] for at-home replication. They report high engagement and emerging understanding that AI learns from examples.

## Home–school communication and transparency

What schools tell families about AI, and what families tell schools, is largely unstudied; the clearest findings concern the absence of a channel. In scenario-based interviews with 33 US [[k-12]] teachers, [[k12-teachers-ai-companion-literacy-2026|Xiao et al. (2026)]] found that decisions to intervene turned on jurisdiction rather than perceived harm. Their visibility test drew the boundary at the school door: use in class or on an assigned tool sat inside the teacher's role, while use at home entered it only through observable effects such as withdrawal, falling grades or isolation — absent those, teachers described watching and informal documentation rather than action. The Parent scenario was named most concerning by 10 of 33 teachers, 17 said a teacher should get involved and 11 answered "it depends". Parents were named first as the party primarily responsible for children's relationships with AI companions, then described as unaware or overstretched. The authors call this a jurisdictional vacancy and warn that without an established curricular claim, the adults with the most consistent access to children default to surveillance and referral. Counselors, parents and students were not interviewed.

[[family-school-autonomy-support-genai-2026|Fan, Li and Zhang (2026)]] make the coordination problem explicit. Reviewing the guidance literature, they observe that it pushes risk management onto families and schools while treating their coordination as established, and they formalize three competing models — additive, synergistic and compensatory — noting that the synergistic version embedded in most guidance has no supporting evidence. Their proposed test is a factorial trial contrasting family-only, school-only, coordinated and usual-practice guidance. On the family side they carry over a [[self-determination-theory]] distinction between dependent offloading, where core thinking is delegated, and autonomous offloading, where AI [[scaffolding|scaffolds]] while the learner keeps epistemic [[agency]]; immediate performance is identical in both cases, which is why maladaptive use is hard for a parent to see.

The same invisibility appears in achievement data. [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu (2026)]] followed 26,811 Chinese secondary students in grades 7–12 over 30 months and found that [[generative-ai|generative AI]] adoption raised homework scores by 18% and cut completion time by 30% while lowering closed-book exam scores by 20% within six months, with entrance-exam drops of 18% and 24% emerging only after about two years. About 81% of users showed a homework-outsourcing pattern, while AI users who spent as much homework time as non-users scored similarly on exams. The authors' recommendation is addressed to the adults around the child: monitor inputs such as homework time and effort rather than outputs such as homework scores. They caution that closer parental monitoring is itself one of the unobservables distinguishing the non-outsourcing group.

## Parents' own AI literacy and advocacy

Direct evidence on what parents know, fear and ask for is thin, and parents mostly appear in the literature as reported by others. The parents in [[all-girls-genai-makerspace-gender-equity-2026|Liu et al.'s (2026)]] critical case study of an all-girls makerspace were interviewed alongside girls and practitioners, and reported that girls often "got scared" and spoke less in mixed-gender settings. In [[k12-teachers-ai-companion-literacy-2026|Xiao et al. (2026)]], the companion literacy teachers sketched was shared work across counselors, parents, platforms and policymakers, sequenced as an age-graded spiral, with parents named first and then described as already carrying more than they could. Parents appear in the AI-Play evaluation through surveys of activity usability rather than through accounts of their own understanding.

What a parent would need in order to take part in any of this is defined, in effect, by AI literacy frameworks built for schools. [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|MacCallum, Parsons and Mohaghegh (2026)]] designed SAIL to be age-agnostic, treating its Level 1 competencies — understanding and exploring AI — as essential for all ages, which places adults in the same progression as children rather than as its instructors. Families also occupy a formal role in research itself: [[raise-framework-ai-education-reporting-2026|Allison (2026)]] asks authors to report participant context and socio-demographic characteristics, [[accessibility]] and cultural fit, and ethical review, consent and data [[governance]] — the obligations through which a family's consent, data and context become visible at all.

## Access and equity across families

Cost and connectivity shape what families can use before any question of pedagogy arises. In the makerspace study, [[all-girls-genai-makerspace-gender-equity-2026|Liu et al. (2026)]] document both a cost barrier and a design barrier: the free image generator Playground dropped its free functions for a paid "pro" tier the under-resourced nonprofit could not absorb, and the tools accepted only English prompts, disadvantaging girls without English confidence. [[creative-project-approach-ai-early-childhood-2025|Yang, Li and Lee (2025)]] flag cost and access as widening the [[digital-divide]]. The take-up result in [[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos, Dong and Low (2026)]] is an equity result as well as a design one: the families lost in Year 1 were lost to administrative steps, and the intervention that recovered them was built around the family's own teacher and a fixed weekly slot.

[[family-school-autonomy-support-genai-2026|Fan, Li and Zhang (2026)]] name the measurement conditions that make blanket family advice unsafe: instruments for AI literacy, dependence and [[cognitive-offloading|overreliance]] were largely developed in single-country or specialized university samples, and most studies are cross-sectional and [[self-report-measures|self-reported]]. SAIL's [[equity-in-ai-education|equity]] argument applies in the household register as well: supplying a device addresses only the first of the three divides, and the skills and outcomes gaps persist regardless of who owns the hardware.

## What the evidence does and does not show

The strongest family-facing results in this knowledge base concern behavior rather than learning. Reducing household-facing friction raised first-session attendance from about 45% to 83% in one trial, and take-up remained the binding constraint even then. The same trial produced small and imprecise outcome gains, while the largest [[learning-gains|achievement]] study reports large negative effects concentrated among students who outsourced homework, a pattern the authors partly attribute to parental monitoring they could not measure directly. Neither finding isolates what parents do from what schools or tools do.

What is missing is more conspicuous. Parents' own accounts are rare: the teachers in [[k12-teachers-ai-companion-literacy-2026|Xiao et al. (2026)]] excluded parents from their sample by design, and the parents who do appear are interviewed as one voice among girls, practitioners or teachers. There is no direct evidence here about how families learn a school's [[educational-policy-ai|AI policy]], what they are told about monitoring or disclosure, or how they respond to it, and family–school coordination has been theorized rather than tested. Home-tutoring designs such as ParaTutor have been evaluated with 23 dyads in one national context, and companion comparisons rest on 19 students in one school.

**Relationship to other pages.** [[stakeholders]] is the short overview of the whole stakeholder set, with families listed as an audience not yet covered in depth; this page is that depth. [[early-childhood-elementary-ai-education]] covers the developmental and [[pedagogy|pedagogical]] domain for young learners across school and home; this page follows the family across ages, from preschool play activities to secondary homework. [[ai-use-disclosure]] covers whether learners tell others that they used AI; this page covers the adjacent question of whether that information reaches the adults at home, and what families are told about school AI use.

## Connected Concepts

- [[stakeholders]] — the umbrella page for audiences and actors in AI in education
- [[early-childhood-elementary-ai-education]] — the developmental domain where home and family use is most studied
- [[ai-use-disclosure]] — disclosure practices and the question of what reaches families
- [[ai-literacy]] — parents' own competencies and the school-built frameworks that define them
- [[equity-in-ai-education]] — how benefits and burdens distribute across households
- [[digital-divide]] — access, skills and outcomes layers as they apply at home
- [[conversational-ai]] — the dominant form AI takes in family settings
- [[self-determination-theory]] — autonomy support as the frame for family guidance
- [[cognitive-offloading]] — dependent versus autonomous offloading, and why parents cannot see the difference
- [[intelligent-tutoring]] — the model behind AI-mediated parent–child tutoring

## Connected Articles

- [[paratutor-parent-child-tutoring]] — role-separated LLM support for 23 parent–child dyads in Chinese home math tutoring
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — fixed peer-role companion versus teacher with 19 elementary students in Taiwan
- [[family-school-autonomy-support-genai-2026]] — review treating family–school coordination as an untested hypothesis
- [[raise-framework-ai-education-reporting-2026]] — reporting obligations covering consent, participant context and equity of access
- [[k12-teachers-ai-companion-literacy-2026]] — 33 teachers on jurisdiction, parents and children's relationships with AI companions
- [[ai-play-framework-early-childhood-2026]] — unplugged AI literacy tested through a family-centered Hour of Code event
- [[all-girls-genai-makerspace-gender-equity-2026]] — parents among interviewees; tool cost and language barriers in informal settings
- [[creative-project-approach-ai-early-childhood-2025]] — physical agents for young children, with cost, access and privacy caveats
- [[demir-akar-ai-media-literacy-children-2026]] — school program on data privacy, safe communication and media ethics in 36 fourth graders
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — take-up rose from 45% to 83% when family-facing steps were removed
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — homework outsourcing, exam declines and the case for monitoring inputs
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]] — age-agnostic AI literacy levels and the three-level digital divide
