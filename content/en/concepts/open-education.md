---
title: "Open Education"
created: "2026-10-28T18:40:00-04:00"
updated: "2026-10-28T21:15:00-04:00"
type: concept
technology: [open-source, generative-ai]
pedagogy: [active-learning, collaborative-learning]
foundations: [curriculum-design]
institutions: [educational-policy-ai, governance]
ethics: [equity-in-ai-education]
audience: [instructors, administrators, policymakers, curriculum designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [okstate-ai-oer-case-studies-doers-2026]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
---

> **Open education** — the movement and the practice of teaching with openly licensed content, and the pedagogy that treats students as producers of it rather than consumers. Its two artifacts are the open educational resource and the open pedagogical assignment; its license is what makes reuse lawful, and its claim is that both lower cost and widen authorship. Generative AI now presses on all three: it collapses the cost of making content, it muddies who authored a remixed resource, and it gives institutions a cheap alternative to the commons they were asked to fund.

## Questions to Consider

- If a model can draft a course unit in minutes, what still justifies the license, the attribution trail, and the review process that open content carries with it?
- A resource can be open by license and closed in practice: the file is downloadable but the course around it assumes a lab, a language, or a connection students do not have. Which openness are you measuring when you report adoption?
- Open pedagogy asks students to publish their work. Who owns what a student makes with a generative tool, who consents to its release, and who carries the cost when it is wrong?
- Teacher AI literacy predicts open teaching practice, but the relationship weakens as institutional support rises. What does that inversion imply about training programs built on the assumption that support only helps?
- If AI-generated text is not copyrightable, is a machine-written textbook automatically open, and what does that do to the case for public funding of OER?

## Introduction

Open education is not open source, and the confusion costs both. Open source is about **artifacts a developer ships and licenses**, principally code, model weights and datasets, so that a system can be licensed, audited, modified and redeployed. Open education is about **what a teacher assigns and what a student produces**, and its licensing exists to let a second institution substitute, translate, remix or correct a resource without asking permission. The two share a legal machinery (Creative Commons, in education; permissive software licenses, in code), a production model (volunteer and grant-funded communities), and now a shared antagonist in generative AI, whose capacity to produce the artifact nearly free unsettles the economic case for both.

They differ where it matters. An open-source release is judged by whether the system can be rebuilt and inspected. An open resource is judged by whether a teacher with different students, a different language and a different budget can actually use it, which is a pedagogical claim rather than a technical one, and which is why open education has always carried a practice argument alongside its licensing argument. [[deimann-rethinking-openness-ai-2026|Deimann and Lukács (2026)]] make the sharpest version of that point: after twenty-five years of openness advocacy, the institutional regime in the middle of education was left intact, because the movement concentrated on declarations and niche projects.

The AI-era literature in this knowledge base is therefore about three things at once: the resource, the practice, and whether either survives when generation is nearly free. On the resource, the questions are who makes it, who licenses it, and whether an AI-written one counts. On the practice, they are what open pedagogy asks of students and whether it teaches them anything measurable.

### What openness actually covers

An open educational resource is content released under a license that permits reuse, revision, remixing and redistribution. Everything else in the field is downstream of that permission and of the obligation to attribute it. [[gonzalez-miy-active-learning-mentoring-ai-oer-2026|González Miy (2026)]] shows what the obligation looks like in a small project: eleven participants working online for two weeks produced a six-page site, a chatbot, a manual and five video tutorials, released under CC BY-NC-SA, and the resulting package scored high on transparency while scoring only medium on licensing, replicability, adaptability and accessibility. Open in name, partially open in use.

The licensing literature is granular because the failures are granular. [[ryu-developing-ai-literacy-oer-2026|Ryu (2026)]] builds a seven-principle rubric for reviewing openly licensed AI literacy material from a purposive corpus of sixteen core papers, a seventeen-paper extension and thirty-six targeted references. [[atenas-oer-digital-public-goods-2026|Atenas, Farrow, Caldwell, Costello and Havemann (2026)]] argue that the unit of governance should move from the resource to the infrastructure that hosts it, since a commons of individual files without a maintained platform is a fragmentation problem rather than a commons.

### Generation collapse and the digital public goods turn

Course production is where the shift is already measurable: [[mooc-to-maic|MAIC]] reports collapsing MOOC production from roughly \$25,000 and 60 hours per course to under \$2 and 30 minutes with LLM-driven multi-agent generation. If production cost approaches zero, the argument that OER saves money loses its force, and what remains is licensing freedom, verifiability and quality assurance.

 [[tlili-double-edged-sword-oer-generative-ai-2026|Tlili, Farrow, Bozkurt, Amiel, Wiley and Downes (2026)]] organize that shift around five framing questions and reach an unsettling legal reading. Because the United States Copyright Office treats prompts alone as insufficient for authorship, a purely AI-generated resource may fall into the public domain and qualify, on a strict reading, as open by default. Their term for the opposite failure is openwashing, where an artifact is presented as open while its training data, its pipeline or its license is not. The authorship question is also a legal question before it is a licensing one, and [[legal-issues-and-risks|the legal and copyright side]] runs through misconduct as much as through ownership.

The policy response in this literature is to reclassify. Atenas and colleagues propose treating OER as digital public goods, which moves the remedy from producing more content to building publicly governed, non-commercial infrastructure. They measure that infrastructure against the ROAM-X principles and the FAIR data standards, and describe a landscape already holding over two billion openly licensed works and 303 Internet Universality Indicators. That is a defensible redirection of a movement that spent two decades on content production.

The institutional case for openness is also made on autonomy. [[panda-editorial-digital-transformation-open-education-2026|Panda (2026)]] argues in an editorial that digital transformation in open and flexible learning is pedagogic transformation rather than technology adoption, and that a technology earns credence only when it aligns with an appropriate pedagogy in a local context. [[rodes-paragarino-oer-generative-ai-framework-2026|Rodés-Paragarino and Atenas (2026)]] turn that into a seven-pillar framework for responsible integration of OER and generative AI, built from a documentary analysis plus expert validation and a participatory workshop with 81 participants in Bilbao in December 2025.

### Open pedagogy and the practice turn

Open pedagogy moves the student from consumer to contributor: an assignment produces something that is published, licensed and reusable. [[clinton-lisell-open-pedagogy-ai-tools-2026|Clinton-Lisell (2026)]] provides the field's cleanest test of the idea. Two sections of an introductory child development course updated the same textbook, one of them with generative AI tools. Across 113 assignments, students in both sections reported growing information literacy skill, and the gain was statistically indistinguishable between them: a time effect of F(1, 84) = 47.30, p < 0.001, partial η2 = 0.36, against a time by section interaction of F(1, 84) = 0.04, p = 0.85. The AI section completed more work and scored slightly lower, 174.73 against 173.86 out of 180.

Practice has a maturity literature of its own. [[duan-open-educational-practices-evolution-2026|Duan (2026)]] screened 540 records to fourteen models of open educational practice under PRISMA 2020, compared them on three dimensions, and concluded that generative AI sits underneath established models rather than displacing them, an argument the paper locates against TPACK. [[ahmadfard-interactive-oer-review-2026|Ahmadfard (2026)]] reaches a similar conclusion about interactivity in a structured review running from 1970: interactive features are a design argument more than a demonstrated effect, and the strongest effect sizes it reports are borrowed from earlier physics education work rather than measured in OER.

Two further studies show how quickly the practice layer becomes a governance layer. [[patino-ai-international-cooperation-open-education-2026|Patiño, Martínez-Pérez, Ramírez-Montoya and Miranda (2026)]] document a UNESCO and ICDE residency of 110 participants from 13 countries in 10 teams, but their survey base is 72 responses from 54 institutions with no response rate, which is thin support for a roadmap aimed at the UN 2030 Agenda. And [[guo-teachers-ai-literacy-open-education-practices-2026|Guo, Lu and Gao (2026)]] surveyed 512 teachers across 30 Chinese provinces on whether AI literacy translates into open teaching practice, finding an indirect path through innovative behavior of 0.218 at low institutional support that falls to a non-significant 0.042 at high support.

### Equity, sustainability and the Global South

The equity argument for open content is the oldest one: a resource without a price cannot be priced out. It is also the one most easily asserted and least often tested. The AI-era versions are more careful. Atenas and colleagues frame OER as a lever for marginalized communities and for meaningful participation in data collection, while warning that over-reliance on generated resources risks devaluing human creativity and judgment. Tlili and colleagues name the mechanisms by which generation degrades that lever: translation error, training-data bias, and a hallucination loop in which generated content is recycled into the corpora that train the next model.

Sustainability enters twice, as funding and as energy. The digital public goods argument is essentially a sustainability argument: a fragmented commons of grant-funded files does not outlive its grants, whereas publicly governed infrastructure might. The environmental case appears in the wider openness literature and in this knowledge base's [[sustainability]] concept, where the reporting of model inference cost is treated as an obligation of open practice rather than an afterthought.

The [[global-south|Global South]] dimension is where the evidence thins most. The batch's non-Western cases are real but few: a Latin American cooperation residency, Chinese open-university teachers, and a framing of infrastructure as the precondition for participation. Claims that openness automatically redistributes capacity are not supported by these studies, and several of them say so.

### Where writing and recommendation systems meet the argument

Two papers in this batch are about production systems rather than policy. [[peng-personalized-recommendation-oer-2026|Peng (2026)]] develops a hybrid deep recommender for OER and reports 93.6 percent accuracy, 92.5 percent precision, 91.0 percent recall and a 90.2 F1 score on 2,400 interaction records. Its own comparison table shows a BERT4Rec baseline at 90.8 F1 with equal recall, and the dataset section leaves user count, item count and sparsity as placeholders. The modeling claim is modest; the pattern is familiar, in that an advance over a strong baseline is smaller than the headline.

The second is a reminder that a generative system can be open and its content closed. OATutor pairs an MIT codebase with CC BY OpenStax algebra texts, which means the licenses of code and content have to be kept compatible by design. That single technical obligation is the clearest practical form of the open source and open education relationship: different objects, same legal machinery, and a compatibility constraint that falls on whoever assembles both.

## Common Misconceptions

**"Open education and open source are the same openness."** They share licensing machinery and a production model and they are not interchangeable. Open source is a claim about a buildable, inspectable system; open education is a claim about a usable, adaptable teaching resource. A school can run entirely open-source software over a closed textbook, and many do.

**"Open means free to the student, which is the whole benefit."** Cost is the measurable half. The other half is permission: a resource that may be revised is one a second institution can fix, translate and localize. Studies in this batch report completion and satisfaction far more often than adaptation, which is why the adaptation claim remains largely untested.

**"AI makes content so cheap that OER is obsolete."** The opposite reading is available and better supported. If generation is nearly free, the scarce goods become the license, the attribution trail, the review process and the maintained platform. That is why this literature converges on governance and infrastructure rather than on production.

**"Adding AI tools to an open assignment improves the learning."** The one quasi-experimental test here found perceived skill growth in both arms with no detectable difference between them, alongside higher completion and marginally lower scores in the AI section. AI changed what students produced and did not change what they reported learning.

## Connected Concepts

- [[open-source]]
- [[legal-issues-and-risks]]
- [[regulation]]
- [[generative-ai]]
- [[educational-policy-ai]]
- [[governance]]
- [[equity-in-ai-education]]
- [[curriculum-design]]
- [[active-learning]]
- [[collaborative-learning]]
- [[authentic-assessment]]
- [[sustainability]]
- [[global-south]]
- [[ai-literacy]]
- [[digital-divide]]
- [[accessibility]]
- [[change-management]]

## Connected Articles

- [[tlili-double-edged-sword-oer-generative-ai-2026]] — Five framings for OER once generative AI enters production (Tlili et al., 2026)
- [[atenas-oer-digital-public-goods-2026]] — OER as digital public goods and the argument for governed infrastructure (Atenas et al., 2026)
- [[deimann-rethinking-openness-ai-2026]] — Why twenty-five years of openness left the institutional middle intact (Deimann and Lukács, 2026)
- [[clinton-lisell-open-pedagogy-ai-tools-2026]] — Open pedagogy with and without AI tools in two course sections (Clinton-Lisell, 2026)
- [[duan-open-educational-practices-evolution-2026]] — Fourteen models of open educational practice and where AI sits in them (Duan, 2026)
- [[guo-teachers-ai-literacy-open-education-practices-2026]] — Teacher AI literacy and open teaching practice across 30 Chinese provinces (Guo et al., 2026)
- [[rodes-paragarino-oer-generative-ai-framework-2026]] — A seven-pillar framework for responsible OER and AI integration (Rodés-Paragarino and Atenas, 2026)
- [[gonzalez-miy-active-learning-mentoring-ai-oer-2026]] — Mentoring and AI-OER production in a virtual laboratory (González Miy, 2026)
- [[ryu-developing-ai-literacy-oer-2026]] — A seven-principle rubric for reviewing AI literacy OER (Ryu, 2026)
- [[ahmadfard-interactive-oer-review-2026]] — Interactivity in OER as a design argument rather than a finding (Ahmadfard, 2026)
- [[patino-ai-international-cooperation-open-education-2026]] — International cooperation in open education as an instrumental case (Patiño et al., 2026)
- [[peng-personalized-recommendation-oer-2026]] — A hybrid recommender for OER against a stronger baseline than claimed (Peng, 2026)
- [[panda-editorial-digital-transformation-open-education-2026]] — Digital transformation in open learning as pedagogic transformation (Panda, 2026)
