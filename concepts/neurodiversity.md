---
title: Neurodiversity
created: "2026-08-12T21:20:35-04:00"
updated: "2026-09-19T06:35:00-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-guidance-children-under-13, ai-disabled-neurodivergent-learners]
audience: [learners, instructors, instructional designers]
level: [special education, higher ed, k 12]
confidence: high
---

> **Neurodiversity** — the framing that neurological differences such as autism, ADHD, dyslexia, and dyspraxia are natural variations in [[cognitive-psychology|human cognition]] rather than deficits to be corrected. In education, a neurodiversity-affirming approach designs learning environments that accommodate and leverage these differences rather than forcing conformity to a single cognitive norm.

## Questions to Consider

- The page frames neurodiversity as neurological differences being natural variations rather than deficits to fix. How does that shift in framing change what 'helping' a learner with autism, ADHD, or dyslexia should look like in your own setting?
- Consider a generative AI tool that produces long text-heavy responses. Which neurodivergent learners might it help, and which might it disadvantage—and can you think of design choices that would tip the balance either way?
- AI that reduces [[cognitive-offloading|cognitive load]] can support learners who struggle with executive function or social expectations, yet AI that encourages dependency may undermine them. Where do you draw the line between support and over-reliance for a specific learner?
- The page warns that AI tools which assume a dominant communication style can recapitulate equity gaps. Can you recall a time a 'one-size-fits-all' tool or classroom assumed everyone learned the same way, and what it overlooked?
- How might a learner's neurotype change how their behavior signals are interpreted in learning analytics? What risk arises when AI reads [[student-engagement|engagement]] or struggle without knowing how a particular brain works?
- The strongest evidence on this page is for a general design change that helped everyone and closed a gap, not for a tool built for one diagnosis. Why might universal changes outperform diagnosis-gated ones — and what does that imply about how you would spend a limited accessibility budget?

## Introduction

The neurodiversity paradigm shifts the goal of [[special-education]] and [[accessibility]] work from "fix the learner" to "adapt the environment." It overlaps with [[universal-design-for-learning]] and [[inclusive-learning]] but emphasizes affirming identity and strength-based design over accommodation-as-compensation.

In the AI era this framing becomes a design test rather than a slogan. [[generative-ai|Generative AI]] offers real promise for neurodivergent learners — alternative means of engagement, representation and expression, support for executive function, and reduced extraneous load — and real risk, since tools that assume a dominant communication style, gate support behind a formal diagnosis, or encourage dependency can disadvantage exactly the learners they claim to serve. This page maps what the evidence actually shows, category by category, and where it runs out.

## What the research covers

Two reviews define the shape of the field, and both describe fragmentation rather than consolidation.

[[assistive-tech-neurodivergent-higher-ed-review-2026|A PRISMA-ScR scoping review (Rempel et al., 2026)]] searched five databases and a decade of publication (2015–2025), screening 766 records down to 40 empirical studies of digital assistive technologies for neurodivergent students in [[higher-ed|higher education]]. The field has reorganized around [[generative-ai|generative AI]] — 15 of the 40 studies — with immersive formats second at 11. Its central critique is a design critique: individual accommodation and neurotype-specific tools organized around formal diagnosis cannot address functional differences that cut across neurotypes, so it recommends universal design and participatory development instead. It also notes that the most immersive tools are the least scalable.

[[dabaghi-ai-dyslexia-education-review-2026|The interdisciplinary review of AI for dyslexia (Dabaghi, D'Urso and Sciarrone, 2026)]] covers 2018–2024 across 72 studies and finds AI used for detection, assistive support, and [[personalized-learning|personalization]], with those strands evolving in parallel rather than in integration, and the field driven more by technological opportunity than by consolidated educational theory. Its detection research (EEG, eye-tracking, [[machine-learning]] models) shows diagnostic promise for early intervention but often needs specialized equipment and controlled conditions, which limits use in ordinary classrooms. That is the practical test this whole strand keeps failing: support has to be embedded in the course a student is actually taking.

## Autism and ADHD in the classroom

[[neurodivergent-computing-students|A survey of 24 neurodivergent computing students (autistic and/or ADHD) and 20 neurotypical peers]], with four in-depth interviews, found significant discomfort with assignments that lack clear structure or carry ambiguous expectations — and the same structures that suit neurotypical learners in collaborative [[active-learning|active learning]] can exclude neurodivergent peers. The authors present it as preliminary and among the first studies to center neurodivergent voices in [[cs-education|computing education]], which is also a measure of how little evidence exists.

[[adhd-video-segmentation-computing-education|The video-segmentation study (Pimenova, Begel and colleagues, 2026)]] is the strongest single result on this page. Treating [[video-education|instructional videos]] as a post-hoc processing problem — segmenting them into single-instruction chunks with fixed pauses to reduce extraneous load — improved performance for everyone in a within-participants design (17 ADHD, 10 non-ADHD), and the ADHD participants' errors and hesitations fell to parity with their non-ADHD peers. An equalizing change that needs no diagnosis, no disclosure, and no separate tool is the cleanest available demonstration of [[universal-design-for-learning|Universal Design for Learning]] through automated content transformation.

## Specific learning disabilities, dyslexia, and cognitive offloading

[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] pooled 29 (quasi-)experimental studies of AI-based interventions for students with disabilities and found a medium positive overall effect (Hedge's g = 0.588, 95% CI [0.349, 0.826]) across 239 effect sizes from 41 independent samples. Two details matter more than the headline. The first is that the effect varies by disability category: students with specific learning disabilities, intellectual and developmental disabilities, or who are deaf showed a larger effect (g = 0.952) than students with autism spectrum disorder (g = 0.368), though the authors report the difference as not statistically significant. The second is publication bias: Egger's test was significant (β = 2.837, p < .001) and trim-and-fill reduced the pooled estimate to g = 0.2694, still positive. "Neurodivergent students" is not one population, and a pooled effect across categories is not a promise to any of them.

The risk side has its own literature. [[seung-basham-cognitive-offloading-swld-2026|Seung and Basham (2026)]] argue that generative AI has changed cognitive offloading from a peripheral study aid into a delegation of higher-order cognitive processes, with especially consequential implications for students with learning disabilities — the learners most likely to be offered the shortcut and least likely to be served by it if the delegated process was the point of the task.

## Executive function and reliance

[[genai-reliance-executive-functioning-2026|Klarin, Hoff and Daukantaitė (2026)]] define reliance narrowly — preferring generative AI over one's own effort or teacher support, plus difficulty initiating schoolwork without it — and test it in two Swedish community samples of adolescents (849 lower-secondary students, analytic n = 735, and 898 upper-secondary students, analytic n = 839). Executive-functioning difficulties ran through perceived usefulness and habitual use to reliance in both samples, with small indirect effects (β = .10, 95% CI [.06, .14] in the lower-secondary sample; β = .08, 95% CI [.04, .12] in the upper-secondary sample). The practical reading: the students who most need support with initiation are the ones for whom a convenient tool most easily becomes the default route rather than one option — and the effect sizes here are small enough that this is a design concern, not a diagnosis.

## Design cautions

- **Diagnosis-gated support excludes the learners it does not name.** The scoping review's critique applies directly to how AI features are deployed: if a feature is unlocked by an accommodation letter, learners with functional differences but no diagnosis never see it.
- **Tools can exclude epistemically, not just poorly.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]] argues that Anglophone, Western-centric training data marginalizes non-hegemonic ways of knowing, and puts the situation of disabled learners at the center of that critique — a warning that "inclusive" AI can still encode whose knowledge counts.
- **Behavior signals are read by systems that do not know the learner.** Interpretation of [[student-engagement|engagement]], struggle or attention in [[learning-analytics]] and [[student-modeling]] assumes a normative pattern of response; see [[differential-effects-across-learner-groups|Differential Effects Across Learner Groups]] for the fairness evidence on that assumption.
- **Dependency is a design outcome, not a learner failing.** Given the reliance pathway above, the question to ask of any AI feature is whether it substitutes for the higher-order process the assignment exists to build — the point Seung and Basham make for learning disabilities.

## Where the evidence is thin

- **Almost everything here is single-group.** The disability meta-analysis has no neurotypical comparator, so it establishes that interventions helped, not that they helped this group differently.
- **Samples are small.** Twenty-four students and four interviews in the computing study; 17 and 10 in the ADHD video study; 72 studies in the dyslexia review with the strands still uncoupled.
- **Category boundaries differ across studies,** so cross-study comparison of "the same" neurotype is limited — and the between-category differences in the meta-analysis are reported as non-significant.
- **The field's own reviewers describe it as technology-driven,** which means the intervention evidence is thin exactly where the design guidance is strongest.

## Connections

Neurodiversity connects to [[special-education]], [[inclusive-learning]], [[universal-design-for-learning]], and [[equity-in-ai-education]]. It informs both how AI is deployed for [[student-experience]] and how assessments and literacy programs are designed to be fair across cognitive variability. For how these findings sit alongside other learner groups — language, gender, socioeconomic status, geography — see [[differential-effects-across-learner-groups|Differential Effects Across Learner Groups]].

## Connected Concepts

- [[special-education]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[equity-in-ai-education]]
- [[differential-effects-across-learner-groups]]
- [[student-experience]]
- [[personalized-learning]]
- [[learning-analytics]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[student-modeling]]

## Connected Articles

- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: a scoping review of digital assistive technologies for neurodivergent students in higher education
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 studies of AI for students with disabilities, and an effect that differs by category
- [[adhd-video-segmentation-computing-education]] — Temporal video segmentation that brought ADHD participants to parity
- [[neurodivergent-computing-students]] — 24 neurodivergent computing students on structure, ambiguity, and collaboration
- [[genai-reliance-executive-functioning-2026]] — Executive-functioning difficulties, perceived usefulness, and the route to AI reliance
- [[seung-basham-cognitive-offloading-swld-2026]] — GenAI cognitive offloading for students with learning disabilities
- [[dabaghi-ai-dyslexia-education-review-2026]] — AI to help people with dyslexia in education
- [[genai-minoritized-knowledges-disability]] — Generative AI and the marginalization of minoritized knowledges
- [[tactile-statistical-graphs-accessibility]] — Tactile Statistical Graphs for Accessibility
- [[ai-learning-tools-engineering-education-needs]] — Designing Needs- and Attention-Aware AI Learning Tools
