---
title: "'It's not approved, but many, like myself, ignore the rule': Investigating the Landscape and Consequences of Unauthorized Technology Use in Educational Institutes"
created: "2026-11-12T14:20:00-05:00"
updated: "2026-11-12T14:20:00-05:00"
type: article
sources: ['raw/papers/kelso-unsanctioned-technology-use-educational-institutes-2025.md']
confidence: medium
page_kind: [evaluation]
research_method: [survey]
discipline: [information technology]
level: [higher ed, k 12]
audience: [administrators, instructors]
foundations: [human-ai-collaboration]
technology: [generative-ai, llm]
methods: [ai-ed-evaluation]
ethics: [privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Educators acquire, install, and assign software their institutions never approved, and they do so at scale. A sequential survey of 375 K–12 and [[higher-ed|higher education]] instructors recorded 1,373 unsanctioned app citations covering 494 unique products, while a follow-up survey of 21 administrators described what those choices cost. The study's contribution is to place the instructor, not the IT department, at the center of the acquisition decision. Tools arrive through colleagues, are chosen for [[pedagogy|pedagogical]] utility and convenience, and are retained through habit and dependence even after educators observe invasive data practices. Fewer than a third know of an [[educational-policy-ai|institutional policy]], warnings change few behaviors, and administrators describe enforcement as rare, inconsistent, or absent — seven of them recommended unsanctioned tools themselves. The authors read the pattern as a [[governance]] failure rather than a knowledge deficit alone, and their recommendations follow from that reading: privacy-literate peers, workable alternatives, and enforcement paired with support.

## Key Findings

1. **Unsanctioned use is broad, not marginal.** 375 educators listed 1,373 apps and services, of which 494 were unique; 374 listed three apps, 161 listed four, and 88 listed five. K–12 respondents named 284 unique tools (top three: Google Classroom, Kahoot!, Canva) and HEI respondents named 121 (top three: [[generative-ai|ChatGPT]], Kahoot!, Canvas), with 88 apps shared between the two sectors.
2. **Discovery runs through people, not procurement.** 290 educators learned about tools from professional peers, 141 from administrators or supervisors, 100 from online search or browsing, and 100 from advertisements or sponsored content.
3. **Utility and convenience crowd out data protection.** Pedagogical utility accounted for 213 selections and functional convenience for 155; accessibility (187) and cost (164) followed, and familiarity influenced 117 participants. Only 24 of 375 named security, privacy, "secure," "safe," or "safety" as a selection criterion, though the conclusion reports 23 for the same count and the page keeps the results-section figure.
4. **Observed harm rarely ends use.** 167 educators encountered privacy- or security-invasive behavior and uninstalled the app, 108 of them in K–12. Yet 62 participants who worried that their data was being sold or shared kept the same tools, citing workflow dependence or the absence of alternatives; of those who did uninstall, only nine used a data deletion feature.
5. **Policy awareness is low and enforcement lower.** 30.3% (n = 30) of K–12 and 24.8% (n = 80) of HEI educators knew of an institutional policy covering unsanctioned use, and 22 admitted violating one. 107 received formal warnings about risk, and 33 changed their behavior in response.
6. **Institutional exposure is concrete.** Administrators named 16 serious concerns, led by data leakage (13) and privacy invasion (9). K–12 educators integrated 341 apps into institutional systems and HEI educators 116; 338 K–12 apps and 140 HEI apps required students to register with institutional credentials.
7. **Confidence in personal security does not transfer.** 96.8% scored at least 3.5 on the five-point security behavior items, yet 119 participants misunderstood "data broker" (98 of them from K–12) and 35 did not fully understand "personally identifiable information."

## The instructor is the acquisition channel

The study's framing move is definitional. [[shadow-ai|Shadow IT]] usually names software installed without IT's knowledge; here the unit is "unsanctioned technology," meaning apps, services, and devices the instructor obtained personally rather than through institutional procurement. Because sanction lists differ by institution, the same product can be approved at one campus and contraband at the next, so 494 unique tools measures local approval gaps as much as vendor popularity. Three participants still listed Edmodo, a platform that shut down in 2022 after COPPA violations and an FTC suit, and only one of the three had stopped using it. ChatGPT's terms prohibit use by anyone under thirteen, which the authors flag as a compliance problem for its presence in K–12.

Device use extends the pattern. 83% of participants used personal devices for teaching-related tasks, 93 daily and 112 several times per week. 231 downloaded institutional documents such as grade books or student records onto those devices, and 127 of that group had automatic cloud backups enabled through personal accounts — a path by which a district record set reaches a consumer cloud with no contract behind it.

## Compliance is asserted, not established

Only a minority of the sample could say whether their tools met federal requirements, and uncertainty did not change behavior. 44 participants, 21 of them in K–12, stated that at least one app was not FERPA-compliant; 55, including 23 K–12 educators, said the same for HIPAA. No participant discontinued an app over compliance doubt.

The authors checked the claims against the documents. In a manual review of the privacy policies and terms of the top 15 apps used by 52% of the sample, eight stated FERPA compliance — Blooket, Canva, Kahoot!, EdPuzzle, IXL, Prodigy, Zip Grade, ABC Mouse. Five were FERPA-compliant only when licensed institutionally: Quizlet, Khan Academy, Quizizz, Seesaw, and Padlet. Teachers Pay Teachers did not comply. That split is the paper's sharpest policy point: for five of the most-used tools, the compliance status depends on the purchase route, so an educator's private sign-up converts a compliant product into a non-compliant deployment. Three apps — Teachers Pay Teachers, IXL, and Padlet — explicitly mentioned surveilling or tracking users, and Khan Academy and Padlet said they follow COPPA only for verified student accounts.

## A permissive culture, not only a knowledge gap

Administrators did not describe a system that was failing to catch violations. They described one that had largely stopped trying. All but one reported general internal privacy policies, but enforcement was inconsistent — "There is a policy, but it needs enforcement" (A8); policies were "regularly ignored and rarely enforced" (A21). Some had not been updated in five or more years, one in over a decade; four administrators were unsure whether a formal policy existed, and one stated plainly, "There is no written policy." Seven administrators acknowledged recommending unsanctioned tools, commonly Canva, Slack, and ChatGPT, to meet demands institutional platforms could not. All but three had received instructor requests to integrate such tools, twelve said those requests triggered IT audits, and decisions varied from never accepted to accepted "most of the time." The barriers administrators named were cost, understaffing, and limited IT capacity. One reframed the whole problem: "I don't think this is a security and privacy issue—it's a governance issue."

The [[legal-issues-and-risks]] sit with the institution — FERPA liability attaches to the school, not the individual — while the productivity gain lands with the instructor. The paper calls this performance-driven rule bending, and notes that linking a breach to one educator's app choice is difficult if not impossible, so personal risk is near zero.

## Literacy predicts detection, not virtue

Educators in this sample looked like careful users by conventional measures: 96.8% scored 3.5 or higher on SeBIS, above the general-population comparison, and the mean on a three-item value-of-others'-privacy subscale was 4.57 (SD = 0.61, α = 0.91). Neither score distinguished educators who had deleted invasive apps from those who had not. What did distinguish them was conceptual knowledge. More than 93% of the 167 who uninstalled answered questions about PII and online tracking correctly, and 87% correctly defined "data broker," against 119 participants overall who misunderstood that term. The authors call this a correlation and offer a hypothesis: [[ai-literacy]] and privacy literacy let people recognize the behavior when they see it, whereas good password habits do not.

This is the argument for treating [[privacy]] as a [[curriculum-design|curriculum]] topic rather than a compliance briefing. It also explains the apparent paradox the authors dwell on — educators who value others' privacy highly, and who report secure habits, still route student data through unvetted tools. If the mechanism is invisible, the value has nothing to act on.

## What this means for practice

- **Administrators.** Treat the approval queue as a service-level commitment. Seven administrators recommended unsanctioned tools and all but three fielded integration requests, which makes a slow or opaque review process a cause of shadow use rather than a defense against it; publish decision paths and exception timelines.
- **Instructors.** Run the check before adoption rather than after. Only 24 of 375 weighed security or privacy at selection, and 62 kept tools they already distrusted, so the moment of choosing is the only leverage most educators have.
- **IT and security teams.** Enumerate the credential path first. 338 K–12 and 140 HEI apps required students to log in with institutional credentials; that is where a personal tool becomes an institutional data flow and where FERPA exposure begins.
- **[[educational-development|Professional development]] leads.** Recruit privacy champions among peers and reward them. Formal warnings reached 107 educators and moved 33; colleagues were the discovery channel for 290.

## Limitations

- Recruitment ran through Prolific, so the educator sample skews toward people comfortable with online platforms and likely more tech-savvy than the educator population at large.
- The [[administrator]] sample is 21 people recruited by email, EDUCAUSE, and two subreddits; it is small and self-selected, and the authors acknowledge that K–12 system administrators were especially hard to reach.
- Responses are [[self-report-measures|self-reported]] and retrospective, so recall bias affects accounts of past app decisions, warnings, and incidents.
- Compliance findings rest on educators' beliefs and on policy text, not on observed app behavior or independent technical audit.
- The instrument capped each educator at five apps, so 1,373 citations describe what respondents chose to list rather than a complete inventory of their tools.
- This is an arXiv preprint without peer review, and the authors note that findings may not generalize to institutions or regions underrepresented in the sample.

## Citation

Kelso, E., Soneji, A., Navid, S. Z.-U.-H., Shoshitaishvili, Y., Rahaman, S., & Hasan, R. (2025). [*"It's not approved, but many, like myself, ignore the rule": Investigating the Landscape and Consequences of Unauthorized Technology Use in Educational Institutes*](https://arxiv.org/abs/2504.12536). arXiv:2504.12536.
