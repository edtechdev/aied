---
title: "From Queries to Conversations: Exploring AI-Based Virtual Assistant Adoption, Usability, and Impact in Engineering Education"
created: "2026-11-16T09:30:00-04:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Gupta, D.", "Camba, J. D.", "Fuerst, T.", "Zhou, J."]
published: "2026-09-30"
venue: "ASEE Computers in Education"
source_url: https://doi.org/10.18260/B4D7-9A-19836
foundations: [ai-literacy, academic-integrity]
pedagogy: [student-support-and-success, help-seeking]
technology: [rag, conversational-ai, llm, technology-acceptance-model]
methods: [mixed-methods-research, usability-research]
ethics: [trust]
research_method: [survey, structural equation modeling]
discipline: [engineering education]
level: [undergraduate, higher ed]
audience: [instructors, administrators, educational technology developers]
sources: ['raw/papers/gupta-ai-virtual-assistant-adoption-engineering-2026.md']
confidence: medium
source_depth: full text
evidence_context: educational
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Gupta and colleagues (2026) deployed a [[rag|retrieval-augmented]] virtual assistant in a first-year engineering design course of more than 800 students at a Midwestern R1 university, staffed by 12 teaching assistants against a student-to-TA ratio of roughly 67:1, where emailed help-form questions could take one to two days to answer. The bot ran for two semesters — a 16-week in-person spring and a four-week asynchronous summer — on a commercial platform built on GPT-4o with a course document index, configured by the instructor through document ingestion and a persona prompt. Help-form questions per student fell from 1.16 in Spring '24 to 0.5 in Spring '25, a 57% reduction, with raw query volume dropping from 528 to 295 while the mix of issue types stayed stable. On the survey side, a [[technology-acceptance-model|UTAUT]] model over 454 complete spring responses explained 44.3% of the variance in behavioral intention, and performance expectancy was the only construct with a strong effect (β = 0.65). Students' open-ended answers say why: 90% of the 294 users who wrote about benefits named quick query resolution, 40% named reduced dependence on TAs. Their concerns were equally consistent — 54% named inaccuracy, and 38% of non-users said they simply did not [[trust|trust]] it.

## Key Findings

- **The measurable institutional effect is a drop in help-form traffic.** Questions per student ran at 2.38 in Fall '23, 1.16 in Spring '24, and 1.29 in Fall '24; after deployment the figure was 0.5 in Spring '25, a 57% reduction against the prior spring with no change to course structure or staffing. Total help-form queries fell from 528 to 295.
- **The reduction was spread across issue types rather than concentrated in one.** From Spring '24 to Spring '25 the distribution held at a mean of 29% assignment, 33% grade, 27% software, and 11% other, which the authors read as evidence the bot handled a range of queries rather than one easy category; they single out grading as the one category that cannot be attributed to the bot alone.
- **Performance expectancy carried the adoption model.** The [[technology-acceptance-model|UTAUT]] model reached R² = 0.443 with performance expectancy at β = 0.65 (p < .05); effort expectancy, social influence, and facilitating conditions showed weak or insignificant effects once performance expectancy was in the model, supporting H1 only.
- **Social influence was close to absent.** The two social-influence items averaged 2.15 and 2.18 on a five-point scale, against 3.83 for the top performance-expectancy item and 4.15 for the item on having the knowledge to use the bot — students were not adopting because peers or the institution pressed them.
- **Intent to continue was high, and the institution acted on it.** 85% of spring respondents gave a positive response on intending to keep using the bot in the course and 88% on wanting it in other courses, and the authors report that institutional funding for the tool was extended.
- **Quick resolution dominated what students said they gained.** Of 294 users who answered the open-ended questions, 265 (90%) mentioned quick query resolution, 118 (40%) reduced dependence on TAs and instructors, 63 (21%) the value of seeing peers' previous queries on the discussion board, 39 (13%) reliable information, and 17 (6%) summarization; 9 (3%) said it was not helpful.
- **Inaccuracy is the concern that scales with use.** 159 of 294 users (54%) raised inaccuracy, 87 (30%) the bot's limited knowledge, 58 (20%) lack of trust, and 28 (10%) over-reliance, while 69 (23%) reported no concerns at all.
- **Non-use was mostly a trust decision, not an access problem.** Of 201 non-users, 77 (38%) cited lack of trust, 22 (11%) preferred asking a TA for hands-on explanation, and 18 (9%) did not know the bot existed; 124 of the non-users (62%) said they would use it as a last resort, and 37 (18%) said better accuracy on complex queries would change their mind.
- **Asynchronous students leaned on it harder.** 72% of spring students and 77% of summer students used the bot, but summer produced 114 views per user against 55 in spring, and 3.8 comments per active user against 0.7 — nearly five times the conversational engagement in the compressed online format.

## How the study was done

The course is a large first-year engineering design course combining lectures with lab sections of about 25 students, built around Industry 4.0 content, parametric computer-aided design, product data management, and structured engineering-change workflows. Twelve graduate teaching assistants ran labs, graded, and answered help-form email; the authors describe the 67:1 ratio as the reason a self-service channel was worth trying.

The bot was deployed in Spring '25 and Summer '25 under a university-wide pilot, using a ready-made platform built on Azure AI GPT-4o with the text-embedding-ada-002 embedding model. Setup required two instructor inputs: uploading course materials with clear metadata so retrieval had something accurate to return, and configuring a persona prompt across seven dimensions — role, task, format, tone, audience, scope, and default message — where scope kept the bot inside the course knowledge base except for software questions, which could draw on the internet. Instructors then tested sample queries, checked boundary behavior with off-topic questions, and corrected responses during the semester, a process the authors say took hours rather than deep machine-learning expertise, with complex queries routed to TAs through help forms.

The evaluation used a convergent [[mixed-methods-research|mixed-methods]] design. Quantitative data came from platform logs and a mid-semester survey built on [[technology-acceptance-model|UTAUT]] items — three each for performance expectancy, effort expectancy, and social influence, two for facilitating conditions, and two for behavioral intention — with one negatively worded effort item reverse-coded and one social-influence item dropped from the model because students could not reasonably report on institutional decision-making. The spring survey drew 459 responses (454 complete, 77% response rate) and the summer survey 47 (41 complete, 37%); structural equation modeling ran on the spring data only, since the summer sample was too small. Qualitative data came from two open-ended prompts on benefits and concerns, analyzed by inductive content analysis into themes, with non-users also asked why they had not used it and what would change that.

## What this means for practice

- **Instructors on a large course with a thin TA bench.** Build the knowledge base before writing the persona. The paper's evidence that 57% of help-form traffic moved is inseparable from the fact that instructors uploaded and curated course documents; a bot with a polished persona and a thin index would reproduce the inaccuracy complaint that 54% of users raised.
- **Administrators deciding whether to fund a pilot.** Measure the help desk, not just satisfaction. The defensible outcome here is questions per student and total query volume against a prior term, with the issue-type mix as a check that the drop is not one easy category disappearing.
- **Educational technology developers configuring a course assistant.** Write the default message and the escalation path as part of the product, not an afterthought. The bot handled simple to intermediate queries and routed the rest to TAs by design, which is also what keeps the 38% trust objection from becoming a silent failure mode when a student's real problem goes unanswered.
- **Instructors setting expectations with students.** Say plainly that the bot can be wrong. Inaccuracy was the top concern among users and the top reason for non-use, so a disclaimer plus an editing workflow for bad answers addresses the objection students actually hold rather than the one about cheating that the paper raises mostly as future work.
- **Faculty developers planning [[ai-literacy|AI literacy]] support.** Pair the rollout with guidance on verification. The authors' own next step is exactly this: teaching students to check responses and to recognize when a query needs a human.

## Limitations

- The sample is a convenience sample from one pilot course, and the authors note that engineering and technology students may carry a predisposition toward adopting technical tools; they call for extending the pilot across the university.
- The course is unusually large, and the authors flag that a standard 25–30 student course is untested, so the workload case may not transfer.
- Several measurement problems are stated in the paper: composite reliability was low for effort expectancy (CR = 0.580), social influence (CR = 0.684), and facilitating conditions (CR = 0.501), and average variance extracted fell below the 0.50 threshold for effort expectancy (0.371) and facilitating conditions (0.437).
- The summer semester had 41 complete responses and was excluded from the [[technology-acceptance-model|structural model]], so the comparison between in-person and asynchronous modes rests on usage logs and open-ended responses rather than on a tested model.
- The study measures adoption, usage, and perception, not learning. No grade, retention, or [[learning-gains|learning outcome]] is modeled, and the help-form reduction is a workload result rather than an achievement result.
- The design has no concurrent comparison group: the semester comparison runs against prior offerings, and the authors attribute part of the grading-query reduction to the grading mechanism deployed in the same term, which they acknowledge leaves that category confounded.

## Citation

Gupta, D., Camba, J. D., Fuerst, T., & Zhou, J. (2026). [*From Queries to Conversations: Exploring AI-Based Virtual Assistant Adoption, Usability, and Impact in Engineering Education*](https://doi.org/10.18260/B4D7-9A-19836). *ASEE Computers in Education, 15*(4), 220–246.
