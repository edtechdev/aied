---
title: "From Automation to Engagement: Teaching Academics’ Future Plans for AI in Higher Education"
created: "2026-11-18T05:30:00-05:00"
updated: "2026-11-18T05:30:00-05:00"
type: article
evidence_context: educational
published: "2026-10-14"
page_kind: [synthesis]
research_method: [survey, thematic analysis]
level: [higher ed]
audience: [faculty developers, administrators, researchers]
foundations: [ai-literacy, academic-integrity]
technology: [generative-ai]
institutions: [educational-policy-ai]
ethics: [ethics]
confidence: medium
sources: ['raw/papers/sheridan-teaching-academics-genai-plans-2026.md']
source_url: "https://doi.org/10.53761/2gwdn219"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-18"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Sheridan et al. (2026) surveyed teaching academics in 20 disciplines across 24 countries about how [[generative-ai|generative AI]] would change [[higher-ed|higher education]] teaching and what they intended to do with it. Respondents described a split experience: the same tool that could cut marking and preparation time might also raise workload in the short term, erode human judgment, and produce material nobody had checked. Trust in output, [[academic-integrity|academic integrity]], and access to [[ai-literacy|AI literacy]] training divided them as sharply as enthusiasm did, and many described [[educational-policy-ai|institutional policy]] as absent, ad hoc, or consumed by misconduct concerns. The design limits what the answers can support. These are open-ended self-reports of intention, gathered once, with no observation of what anyone actually did in a classroom, so the paper documents how academics talk about their plans rather than whether those plans survived a semester.

## Key Findings

1. **GenAI was welcomed first as time, and time was the most-coded theme.** Efficiency and Automation drew 737 comments, 215 of them answering the plans question (Q2) and 195 the features question (Q4). As one respondent put it: “GenAI has the potential to free up educators' time to focus on more meaningful interactions with students” (Q1,141).
2. **The same efficiency was read as an ethical risk.** Ethics and Authenticity drew 326 comments, 97 from the infrastructure-and-culture question (Q3) and 81 from the resistance question (Q5). They objected to substituting machine output for their expertise — “(GenAI) lacks authenticity. Students are paying for my knowledge; they should get my knowledge” (Q4,364) — and some named rules that let staff use tools students were punished for using (Q3,304).
3. **Quality concerns were about reliability, not capability.** Quality carried 424 comments, 108 in Q4 and 98 in Q5, mostly about bias, inaccuracy, and hallucinations of unknown frequency: “AI also has its own limitations in terms of accuracy and so that also reduces its trustworthiness” (Q3,279).
4. **Customized learning was a promise respondents volunteered, not a worry they raised.** It accounted for 197 comments — 74 in Q4, 56 in Q1, but only 3 in Q3 and 3 in Q5. Personalization appears where academics were asked what the technology could do — “This technology could also facilitate the development of adaptive learning platforms that adjust to students' progress in real-time” (Q4,200) — and almost vanishes when they were asked what got in the way.
5. **Institutional policy and practice was the densest theme in any single answer set.** Of 305 comments, 196 came from the 472 responses to Q3, which asked about infrastructure, resources, workload, and culture. The complaint is not hostility to rules but their absence: “There is no coherent policy on the use of GenAI in my institution currently” (Q3,299).
6. **A minority read the change in sociocultural terms, and those answers were the bleakest.** Sociocultural Implications drew 217 comments, 84 in Q1 and 88 in Q3, including predictions that universities “will use it as an excuse to lay off academics and professors” (Q1,384) and fears of a coarsening of thought: “I feel it leads to intellectual stagnation both on the parts of educators and students” (Q2,378).

## What the study did

The data come from an online Qualtrics questionnaire with five open-ended questions, each written to elicit one part of the Theory of Planned Behavior: Q1 on how GenAI might affect the future of academic teaching, Q2 on future plans, Q3 on infrastructure, resources, workload, and culture, Q4 on features that could assist teaching, and Q5 on the reservations of the resistant. Response counts differed: Q1 n = 431, Q2 n = 495, Q3 n = 472, Q4 n = 419, and Q5 n = 411.

Recruitment ran on two tracks: emails and newsletters to the authors' professional networks, which produced a snowball sample, and invitations through the Prolific platform. Eligibility required teaching in a college or university within the previous five years. The sample covered 20 disciplines and 24 countries, was 63% female, and leaned early career: 315 respondents (60%) reported five years or less of teaching experience. Five independent teaching academics reviewed the questions for face validity.

Analysis followed Braun and Clarke's six-phase reflexive thematic analysis. Five authors coded independently with short descriptive labels; one collated and clustered overlapping codes into candidate themes; the team refined and named them by consensus. A single researcher then assigned each answer to one category so the team could count theme frequencies. TPB supplied sensitizing concepts for organizing beliefs, norms, and control perceptions rather than a predictive model, and the authors are explicit that institutional conditions decide whether an intention ever becomes a behavior.

## Where the policy-practice gap shows

The gap is not that academics wanted no rules. It is that they could not find the ones they had. Respondents described policy as hazy and ad hoc (Q3,191), said “Many lecturers currently play it by ear” (Q3,299), and improvised around “a few beacons of hope in my institution” (Q3,191) because no official structure existed to join.

Infrastructure and money came second. One long answer itemized what GenAI requires — GPUs or TPUs, storage, licenses, cloud services, technical support staff — and noted that institutions without them may struggle with slow processing speeds and high upgrade costs (Q3,283). Third came time and training: “I have received some minimal training to this point, but the continued cuts in professional development and travel makes it less likely that I can get the training I need or the time to be able to think about how I might use it” (Q3,472). The same respondent noted that “most resources in this area go to academic integrity issues” — institutions fund misconduct policing before capability.

What participants wanted must be read off their complaints, since the questionnaire never asked them to rank remedies: a coherent policy, a body to answer the open questions (Q3,299), training with time attached, funded tools and support staff, and room to experiment.

## What this means for practice

- **Academic developers.** Build [[educational-development|development]] capacity around the decisions academics face — when to trust an output, what to disclose, which tasks to delegate — and schedule the thinking time respondents said they lacked. A workshop that adds a tool without adding an hour solves nothing.
- **Institutional leaders.** Publish one policy on what is permitted, name who answers the questions it leaves open, and fund licenses and support staff before announcing a strategy. Absence of policy produces improvisation, unevenly distributed.
- **Course teams.** Treat GenAI as selective, not universal. The paper recommends integrating it where it strengthens a specific learning outcome rather than mandating it across a program, and keeping judgment about feedback, standards, and relational work with the person who knows the students.
- **Researchers.** The next study needs observation rather than another intention survey: classroom artifacts, redesigned assessments, and longitudinal tracking of which beliefs survive the next model release.

## Limitations

- Intentions, not behavior. The questionnaire captured what academics said they planned; nothing was observed, and TPB predicts that intention becomes action only where control is sufficient — the condition respondents said they lacked.
- Self-selected sample. Snowball recruitment through the authors' networks plus a Prolific panel, with 53% of respondents in Australia and 63% female, cannot represent teaching academics in general.
- Uneven response counts and multiple coding. Answers per question ranged from 411 to 495, Q5 drew mainly those with reservations, and Table 3 category counts exceed respondent counts because one answer could carry several themes.
- No agreement statistic. Five researchers coded independently and resolved differences by consensus, but no inter-rater reliability figure is reported, so theme boundaries rest on team judgment.
- A fast-moving object. Data were collected in 2025, before the tools and policies now in use, and rapid change shortens the life of the beliefs on which intentions are built.

## Citation

Sheridan, L., Wentworth, I., Middleton, R., Duursma, E., Moss, S., Nikolic, S., Jones, R., & Ros, M. (2026). [*From Automation to Engagement: Teaching Academics’ Future Plans for AI in Higher Education*](https://doi.org/10.53761/2gwdn219). *Journal of University Teaching and Learning Practice, 23*(4).
