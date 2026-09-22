---
title: "Powerful Learning with Emerging Technology"
created: "2026-09-22T04:05:00-04:00"
updated: "2026-09-22T04:05:00-04:00"
type: article
published: "2025-11"
foundations: [learning-design, theories-and-frameworks, ai-literacy, educational-development]
pedagogy: [metacognition, productive-failure, creativity, collaborative-learning, self-regulated-learning, scaffolding]
technology: [generative-ai, adaptive-learning, personalized-learning, multimodal]
ethics: [privacy, explainable-ai, accessibility, inclusive-learning, equity-in-ai-education]
methods: [qualitative-research]
audience: [educational technology developers, software developers, instructors, instructional designers, learners]
level: [k 12, higher ed]
research_method: [interviews, literature review]
page_kind: [framework]
source_url: https://digitalpromise.org/powerful-learning/powerful-learning-with-emerging-technologies/
sources: ['raw/papers/powerful-learning-with-emerging-technology-2025.md']
confidence: high
connected_resources: [playlab]
connected_faqs: [designing-ai-into-learning, designing-educational-ai-software]
---

> **Synthesis:** This Digital Promise report is a design framework rather than a study: a landscape scan — 59 expert interviews and focus groups, a review of 238 articles, and a mapping of 30 existing edtech frameworks — condensed into three principles that emerging technology for learning should satisfy. **Evidence-Based** asks products to apply research, measure learning meaningfully, and be built with the people who hold relevant expertise. **Learner-Centered** asks for [[agency]], [[metacognition]] and [[accessibility]] by design, with [[privacy]], [[explainable-ai|explainability]] and fairness treated as safety obligations rather than features. **Skill-Building** asks that tools develop the durable human capacities — [[critical-thinking]], [[creativity]], [[collaborative-learning|collaboration]] — instead of completing the thinking on the learner's behalf. Each principle carries practices and strategies for both developers and educators, illustrated by product spotlights the publisher explicitly labels as illustrations rather than endorsements.

### Overview

Digital Promise frames the report as guidance for "developers, educators, and learners" on designing and implementing emerging technologies — a category the authors leave deliberately open, noting that the research they cite comes from studies of existing tools such as [[generative-ai]] while the framework is written for tools that do not exist yet. The stated motivation is a division of labor: technology should absorb work that is repetitive or procedural and leave the human parts of learning intact, an argument the conclusion makes directly when it insists that "humans are centered in the design of these tools so that emerging technology enhances human capabilities, rather than replacing or diminishing them."

The framework is therefore a specification for [[learning-design]], with the unusual feature that it addresses vendors and instructors in the same document. A practice tells both audiences what the principle looks like; a strategy tells them what to do about it, either in product design or in implementation. Its claims are normative and its examples are drawn from commercial products, and the report is candid about both: the spotlights carry a disclaimer on the companion web page that they are "not an endorsement of products or their efficacy."

### Key Findings

1. **The framework rests on a three-part landscape scan, not on outcome data.** Expert interviews were the primary source — 59 researchers, practitioners and field experts in interviews and focus groups, coded inductively into 23 themes — supported by a review of 238 articles and a mapping of 30 existing edtech frameworks to find overlap and gaps.
2. **Three principles organize everything: Evidence-Based, Learner-Centered, Skill-Building.** The companion framework document presents each as a hierarchy of one principle, several practices, and actionable strategies, and the authors ask that the recommendations be applied across principles rather than picked from individually.
3. **Evidence-Based includes measurement and collaboration, not only research citation.** "Apply Research" (leverage [[learning-theories|learning theories]], integrate research-based instructional practices) sits beside "Use Meaningful Measures" (define learning outcomes, plan for iterative product improvement) and "Leverage Relevant Expertise" (collaborate with experts throughout development, co-design with educators and learners).
4. **Learner-Centered is specified as agency, metacognition and accessibility.** Agency means choice, relevance and purpose; metacognition means designing for [[productive-failure|productive struggle]] and [[self-regulated-learning|reflection]]; accessibility means [[assistive-technology|assistive technologies]], [[multimodal|multimodality]] and support for translanguaging — with [[multilingual-learning|translanguaging]] treated as a design requirement rather than a translation feature.
5. **Safety is woven in as three spotlights tied to specific practices.** [[privacy]] attaches to agency and requires collecting only necessary learner data and securing it; [[explainable-ai|explainability]] attaches to metacognition and asks tools to tell users when AI is generating [[feedback]] or content and let them customize it; fairness attaches to accessibility and asks that outputs not create or perpetuate stereotypes.
6. **Skill-Building targets the human capacities AI could erode.** The report asks tools to [[inquiry-based-learning|foster inquiry]], teach learners to understand and evaluate [[ai-literacy|emerging technologies]], scaffold [[creativity]] rather than producing content for the learner, and preserve human-to-human connection alongside AI-mediated [[collaborative-learning|collaboration]].
7. **The developer-facing advice pushes back on software-first thinking.** The report's closing expert quote — from Amira Learning's chief AI scientist — argues that teams should "start with a strong [[pedagogy|pedagogical]] framework" and work out where AI helps, warning that LLMs out of the box do not do the guided part of instruction well.

### What the framework asks for

The principles are not a checklist of features; each expands into practices, and each practice into strategies that a product team or an instructor can act on. Evidence-Based runs from the theoretical (which [[learning-theories|learning theories]] a product encodes) through the procedural (how learning outcomes are defined, how [[educational-measurement|learning is measured]] and how product iterations are tested) to the social (who is in the room during development). Learner-Centered turns learner variability into an engineering requirement: [[personalized-learning|personalization]], relevance and purpose for [[agency]]; [[desirable-difficulties|productive struggle]], reflective opportunity and explained AI for [[metacognition]]; assistive technology, multimodality and translanguaging for access. Skill-Building is the shortest section and the most pointed: critical thinking is defined as the ability to use, understand and evaluate emerging technologies; creativity is protected by insisting that tools scaffold the creative process rather than complete it; collaboration is protected by designing for human connection first.

### Product spotlights and what they illustrate

The report profiles tools against its practices, and the pattern is instructive: Amira is presented as an AI reading tutor shaped by reading research, LearnLM as an example of building with domain expertise, GIANT Remix as co-design with teachers, learners and families, ST Math as [[mastery-learning|mastery-based progression]] that keeps difficulty productive, MATHia as making learner data legible to the learner, Be My Eyes as computer vision for accessibility, Kasi as multimodal expression through drawing and manipulatives, TalkingPoints as multilingual [[parents-and-families|family engagement]], Playlab as helping learners and educators use, understand and evaluate AI models, and OKO and TeachFX as collaboration-facing designs. Reading them together shows what the framework rewards — instruments that keep the learner's own thinking in the loop — and why it has little to say about products that simply accelerate output.

### A framework, not a finding

Nothing here is an effect size. The principles were derived from expert opinion and a literature landscape scan, which makes them useful as a shared vocabulary for procurement, design review and professional learning, and unreliable as evidence that any practice improves learning on its own. The report is aware of the gap and builds measurement into the framework itself — "define learning outcomes" and "plan for iterative improvements" are strategies inside the Evidence-Based principle — which puts the burden of proof on the products rather than on the framework. That is the right place for it, and it means a reader who wants to know whether a specific tool works still has to go to [[learning-gains|outcome studies]] rather than to this document.

## What this means for practice

- **Developers and designers:** treat the practices as review gates rather than a feature list — who holds pedagogical expertise on the team, which learning theory the interaction encodes, which outcome the tool will be measured against, and what the learner sees when the AI is wrong.
- **Instructors and instructional designers:** the Learner-Centered and Skill-Building strategies translate directly into classroom checks: does the tool let learners choose, does it let them struggle productively, does it scaffold creativity or replace it, and does it preserve peer-to-peer talk.
- **Procurement and evaluation:** the Evidence-Based principle is a usable questionnaire for a vendor conversation — which research base, which measures, which co-design partners — while the three safety spotlights name what to ask about privacy, explainability and fairness in the data processing agreement.
- **Anyone citing the framework:** cite it for vocabulary and shared criteria, not for efficacy; the report supplies the criteria by which a tool's own evidence should be judged.

## Limitations

- **Consensus and literature synthesis, not evidence of effect.** The principles come from 59 expert interviews and a 238-article landscape scan; no learner outcomes were measured, and the framework itself has not been tested against learning gains.
- **The expert pool spans the industry.** The publisher describes the interviewees as developers, designers, investors, researchers and practitioners, and the product spotlights are chosen by the publisher from companies in the field, so commercial interests are present in the evidence base even though the spotlights are labeled as illustrations rather than endorsements.
- **Examples skew toward [[k-12]] products in the United States.** The spotlights are largely school-facing tools from US vendors; the framework's transfer to [[higher-ed|higher education]] and to other educational systems is asserted through the strategies rather than demonstrated with cases.
- **Guidance is not falsifiable at the level of a strategy.** "Scaffold creativity" and "create opportunities for human connection" name directions for design without specifying thresholds, so two teams can satisfy the wording and build very different products.

## Connected Concepts
[[learning-design]], [[theories-and-frameworks]], [[ai-literacy]], [[educational-development]], [[agency]], [[metacognition]], [[productive-failure]], [[accessibility]], [[creativity]], [[collaborative-learning]], [[critical-thinking]], [[privacy]], [[explainable-ai]], [[equity-in-ai-education]], [[personalized-learning]], [[multimodal]]

## Connected Articles
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026: Exploring Effective Uses of Generative AI in Education
- [[typology-generative-ai-tools-education-2026]] — Typology of Generative AI Tools for Education
- [[ssail-safe-sound-ai-learning-2026]] — SSAIL: A Design Framework for Safe and Sound AI for Learning
- [[halani-designing-for-reach-2026]] — Designing for Reach: human-centered design and learner variability
- [[genai-critical-thinking-k12-design-2026]] — Generative AI and critical thinking in K-12 design
- [[haiml-human-centered-ai-metacognitive-model-2026]] — Human-centered AI and a metacognitive model of learning with AI

## Citation

Mills, K., Noakes, S., Pattenhouse, M., Shell, A., & Vollavanh, A. (2025). [Powerful Learning with Emerging Technology](https://digitalpromise.org/powerful-learning/powerful-learning-with-emerging-technologies/). *Digital Promise*.