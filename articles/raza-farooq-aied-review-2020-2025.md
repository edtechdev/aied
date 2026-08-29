---
title: "Review of Artificial Intelligence in Education from 2020 to 2025"
created: "2025-10-31T08:44:33-04:00"
updated: "2026-08-24T12:30:00-04:00"
type: article
tags: [ai-education, meta-analysis-systematic-review, personalized-learning, generative-ai, learning-analytics, intelligent-tutoring, ai-literacy, adaptive-learning]
research_method: [systematic review]
sources: ['raw/papers/raza-farooq-aied-review-2020-2025.md']
confidence: high
---

> **Synthesis:** Raza & Farooq (2025) content-analyze 100+ peer-reviewed AI-in-education studies from 2020–2025, the era of mainstream [[llm|LLMs]] and [[generative-ai|generative AI]]. They organize the literature into three interrelated layers — the *genome* layer (evaluation practices, leadership capacity, low-friction tools, shared norms, algorithmic schemas), the *cognitive* layer (predictive analytics, [[personalized-learning|personalized learning]] via a measure–model–adapt loop, [[multimodal]] sensing, discourse and affect analysis), and the *symbiotic* layer (end-to-end [[edtech-platform|learning platforms]], smart classrooms, process automation, GenAI copilots). Across studies they summarize effects on learning, engagement, teacher workload, and adoption, and distill three forward trends: (1) [[human-ai-collaboration|human–AI co-orchestration]] as the default classroom pattern; (2) [[privacy|privacy-preserving]], edge/federated AI for sensitive student data; and (3) [[authentic-assessment|authentic, continuous assessment]] via [[multimodal]] analytics and generative simulations. The core message is practical: invest first in people and workflows ("plumbing"), then in models that earn trust, and only then in platforms that scale what already works.

## Three-Layer Framework

This review reads the last five years of AI-in-education through a three-layer lens that moves from preconditions, to mechanisms, to systems:

- **Genome Layer:** The foundational elements — instructional customs, [[assessment|evaluation practices]], [[teacher-ai-competency|leadership capacity]], low-friction digital tools, and shared algorithmic schemas that underpin AI in education. This is the answer to *what must be true before more sophisticated systems work reliably.*
- **Cognitive Layer:** Instructional mechanisms including [[personalized-learning|personalized learning]] via measure-model-adapt loops, predictive analytics, [[multimodal]] sensing, and discourse and [[affective-computing|affect analysis]].
- **Symbiotic Layer:** End-to-end implementations including [[edtech-platform|learning platforms]], smart classrooms, automation of processes, and [[generative-ai|generative AI]] copilot systems that facilitate teaching and learning.

This structure lets the authors evaluate studies on more than effect size: whether results are **actionable** (who does what, when), **credible** (transparent and fair), and **durable** (likely to hold under real constraints).

## Key Findings

1. **100+ peer-reviewed papers** (2020–2025) were coded with a reproducible technique/contribution/outcome scheme; the corpus skews toward higher education and the Global North, limiting generalizability.
2. **Genome layer:** successful adoption depends on formative, actionable [[feedback]] for teachers, leaders who act on evidence, tools that fit existing routines, and shared norms (e.g. [[ethics|Dignum's ART framework]]) — not on chasing advanced models.
3. **Cognitive layer:** [[learning-gains|learning gains]] are most reliable when instruction follows a measure–model–adapt loop — make learning visible, model risk or progress with interpretable models, and close the loop quickly; edge/fog and on-device computation reduce latency and keep adaptations meaningful.
4. **Symbiotic layer:** gains persist where sensing, analytics, and teacher action are tightly coupled; [[generative-ai|GenAI]] works best as a "strong junior assistant" — strong at drafts and idea generation, inconsistent at judgment — so humans must stay [[human-in-the-loop-ai|in the loop]].
5. **Three forward trends:** (1) human–AI co-orchestration with explicit handoff protocols; (2) [[privacy|privacy-preserving]], edge/federated AI for sensitive student data; (3) [[authentic-assessment|authentic, continuous assessment]] via [[multimodal]] analytics and generative simulations.

## Genome Layer: Foundations

At the genome tier, the point isn't to chase advanced models; it's to get the groundwork right. [[formative-assessment|Assessment only helps when it is folded back into teaching as a routine, not an audit]] — Huang et al. show evaluation works when instructors get usable feedback on performance, attitudes, and satisfaction rather than punitive scores. Xu extends this to the institutional layer: optimization can route resources and attention, but only if the organization is set up to act. Parapadakis offers a caution that automated survey analytics are fast yet fragile — without guardrails, speed can harden weak inferences. That is why [[teacher-ai-competency|leadership readiness]] matters: Anysiadou and Gkliati find only moderate preparedness among school leaders, while Lu shows how long-term university–industry partnerships build the muscle memory to adopt AI responsibly. The foundation isn't dashboards; it's decision pathways.

Early algorithmic work is best read as proof-of-possibility that supports, rather than drives, [[pedagogy]]. Kim and Kim and Jiang et al. show targeted gains in language tutoring and oral-English correction, while Zafari et al. note that across [[k-12]] [[stem-education|STEM]], machine learning (ML) and [[intelligent-tutoring]] dominate because they are adaptable and close to teacher needs. Leitner et al.'s ARIN-561 shows students need narrative entry points to AI concepts. Williamson names the drift toward [[learning-analytics|data-intensive "AI-based learning science"]], which raises social signals: Wen et al. capture public ambivalence about classroom [[conversational-ai|ChatGPT]], and Xie and Wang find no IQ/memory harm — useful, but not a license for overreach. Treat algorithms as [[scaffolding]]: their value rises when they disappear into better routines, not when they become the center of the lesson.

Methodological hygiene and [[ai-literacy|AI awareness]] complete the layer. Doroudi reminds us AI and the learning sciences have co-evolved; Yang et al. map the field's themes via [[network-analysis|bibliometrics and knowledge graphs]]; Saltman warns that without reflection AI can fuel teacher de-skilling and [[critical-pedagogy|neoliberal pressures]]. Studies across learners show a wide spread — low awareness among science students, positive attitudes in Indian secondary schools, optimism with shallow understanding among younger learners. Educators report openness but lack [[teacher-education|training]], which is why Dignum's ART framework (Accountability, Responsibility, Transparency) is a useful anchor. Culture beats tooling: shared language, clear principles, and basic literacy make the higher layers possible.

## Cognitive Layer: Mechanisms

At the cognitive tier, AI stops being background plumbing and starts shaping day-to-day instructional decisions. A useful reading is a **measure–model–adapt** loop: schools make learning visible, model risk or progress, then adapt instruction or supports. Prediction can turn [[assessment]] from a few high-stakes snapshots into ongoing support — Yuan's CTQAS gives teachers real-time monitoring, Pallathadka et al. predict grades (SVM reaching 88% accuracy), and early-warning work (Villegas-Ch et al.; da Conceição et al. with interpretable ML) surfaces practical [[student-modeling|dropout predictors]] like GPA, age, and attendance. Interpretable models are not "nice to have"; they are what let leaders justify and target support.

Models embedded in teaching workflows tailor content, pace, and feedback. Sun et al.'s DL-OIET improves online English via personalized recommendations; Ma et al. pair hybrid optimization with [[student-modeling|student clustering]]; Li proposes a multi-agent architecture; Han et al. use fog computing and hierarchical Q-learning for lower latency. In physical education, Li and Wang use wearable sensors for real-time feedback. The wins come from short [[feedback|feedback cycles]] and proximity: sensing, deciding, and responding near the learner reduces lag and keeps adaptations meaningful.

Without good signals, [[personalized-learning|personalization]] guesses. Chu et al. extract discourse indicators from video and find content similarity predicts dissatisfaction; Liu and Zou model live classroom interactions; Zhao and Yu's ANN supports classroom [[affective-computing|emotion recognition]]; Kim et al. show AI can especially boost [[creativity]] for lower-skill students in collaborative art. Intention matters too — using the [[technology-acceptance-model|Theory of Planned Behavior]], Chai et al. find [[self-efficacy]] is a strong predictor of intention to learn AI. Better sensing is not surveillance; it is context that lets you adapt earlier and more precisely, especially for the learners who benefit most.

Reviews and frameworks consolidate what works. Zahariev et al. chart [[adaptive-learning|adaptive assessment]] and [[intelligent-tutoring]]; Holmes et al. argue for [[human-in-the-loop-ai|human-centric AIED]]; Cheng et al. emphasize [[trust]] as a precondition. Domain critiques matter: Liu and Afzaal caution that [[educational-nlp|machine translation]] assists best with human oversight, Gray highlights fairness and surveillance risks, and Filgueiras analyzes [[governance|platformization]] and the Beijing Consensus. On the ground, [[technology-acceptance-model|adoption]] follows predictable routes — institutional AI capability correlates with better performance (Wang et al.), and Innovation Diffusion Theory explains uptake (Almaiah et al.). Classroom-facing work shows where GenAI helps and stalls: Pretorius uses prompt-design to turn GenAI into a mirror for [[metacognition|reflective practice]], while Li et al. find [[automated-assessment|ChatGPT grading]] struggles with [[critical-thinking|higher-order thinking]] relative to teachers.

## Symbiotic Layer: Systems

Here the conversation shifts from "smart components" to living systems: [[edtech-platform|platforms]], classrooms, policies, and daily academic work where humans and AI co-operate. The deeper message is about [[governance|infrastructure]]: treat AI as infrastructure — invest in data flows, teacher workflows, and oversight from day one — rather than a plug-in that chases pilots. Historical and sociotechnical readings remind us scale is path-dependent; values, incentives, and power arrangements shape outcomes.

Real deployments report gains across multi-course platforms, smart-classroom models that marry e-schoolbags with cloud analytics, virtual environments for teacher training, and targeted [[conversational-ai|chatbots]] for clinical skills. A large quasi-experiment in Russian schools shows performance and engagement lifts while flagging ethics and infrastructure issues. The gains aren't "AI magic"; they are the outcome of good plumbing plus good [[pedagogy]]. Success shows up where sensing, analytics, and teacher action are tightly coupled — if any leg is weak, results fade.

Systems stick because people find them useful and supported. Students adopt AI teaching assistants when they perceive clear utility; [[ai-literacy|AI literacy]] predicts intention to learn AI; peer networks and leadership make or break institutional adoption. [[teacher-ai-competency|Budget for the "last mile"]]: teacher time, peer champions, and role clarity — adoption follows perceived usefulness plus social proof plus support, not model accuracy alone.

On the ground, GenAI is changing work patterns. For coding, students get faster feedback and broader entry ramps than with legacy forums; faculty use GenAI to draft outcomes and assessments; course-level integrations report achievement and motivation gains when teachers curate and constrain the tools. In [[online-teaching-and-learning|distance education]], [[student-engagement|engagement]] is a force multiplier — AI helps most when learners are already leaning in. Credibility is an outcome of design, not a press release: labeling evidence as "AI-framed" can lower perceived credibility, and in assessment, efficiency claims outpace fairness guarantees. [[equity-in-ai-education|Equity-centered guidance]] focuses on who benefits, who is burdened, and how to keep classrooms human-safe; economics warn of [[digital-divide|polarization]] unless the upside is shared. National readiness varies — some systems lack the digital footing to adopt safely at scale.

## Research Trends

Looking across recent scholarship and policy roadmaps, three trajectories appear credible and consequential for the next decade, each reflecting a shift from "AI that does things to learners" toward "AI that works with learners and educators":

**1. Human–AI co-orchestration as the default classroom pattern.** Teachers and students are less likely to be replaced by AI than partnered with it. Design research on "teacher copilots" is coalescing into staged-rollout frameworks, and field deployments in low-resource contexts show measurable reductions in planning time and stress. The frontier is explicit division of labor across planning, delivery, and assessment — formalizing handoff protocols (what the copilot proposes, what the teacher accepts or edits, and how those edits update future AI behavior) and studying their effects on [[equity-in-ai-education|equity]] and learning.

**2. Privacy-preserving, on-device AI for sensitive learning data.** Compliance pressures are pushing computation closer to the learner via federated learning and compact on-device language models that run locally. The next wave will instrument edge-first architectures — [[multimodal]] sensing and feedback that never leave the classroom network, with only differentially private summaries shared upstream. Open questions include how much learning signal is lost or gained on device, and how schools govern model updates when each device adapts locally.

**3. Authentic assessment via multimodal analytics and generative simulations.** Assessment is migrating from end-of-unit tests to in-the-flow evidence captured during [[authentic-assessment|authentic tasks]]. [[multimodal|Multimodal learning analytics]] (MMLA) are maturing toward classroom-ready toolkits, while GenAI powers role-play and case simulations that elicit higher-order skills. The center of gravity shifts from "grading products" to "modeling processes" — [[formative-assessment|assessment for learning]], not just of learning.

## Limitations and Future Work

The review is a coherent three-layer synthesis across 100+ studies, but it carries real limits. Coverage is partial: it prioritizes peer-reviewed English-language education sources, underrepresenting technical venues, non-English work, and grey literature. The corpus is skewed toward higher-education and Global North settings, limiting generalizability to [[k-12|K-12]], vocational, and low-resource contexts. And many studies report learning effects but omit operational metrics — teacher time saved, implementation cost, compute and energy use — making policy translation difficult. The authors recommend stratified, region-weighted searches and a simple cost–time–quality reporting template so future work tracks total cost of ownership alongside learning and equity outcomes.

## Implications

This review offers a structured map of the AIED landscape during the [[llm|LLM]] era (2020–2025) and a practical ordering for institutions. **Invest in the genome first:** formative [[assessment]] and [[feedback]] loops, evidence-ready leaders, low-friction tools, and shared norms are preconditions; without them, sophisticated systems wobble. **Design for the measure–model–adapt loop:** favor interpretable, edge/fog and on-device models that shorten feedback cycles and keep humans [[human-in-the-loop-ai|in the loop]] where errors are costly. **Treat GenAI as a strong junior assistant**, constrained by rubrics, exemplars, and human review — strong at drafts, inconsistent at judgment. **Build assurance in from the start** with transparent criteria, auditable pipelines, and [[equity-in-ai-education|equity targets]]. The three forward trends — [[human-ai-collaboration|co-orchestration]], [[privacy|privacy-preserving edge AI]], and [[authentic-assessment|authentic continuous assessment]] — align with wider conversations in [[governance]] and institutional AI readiness, and turn promising pilots into durable, trustworthy systems.

## Connected Concepts

- [[ai-education]]
- [[personalized-learning]]
- [[generative-ai]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[multimodal]]
- [[edtech-platform]]
- [[governance]]
- [[meta-analysis-systematic-review]]
- [[human-ai-collaboration]]
- [[privacy]]
- [[authentic-assessment]]

## Connected Articles

- [[liang-genai-systematic-review-human-ai-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[genai-meta-analysis-programming-learning]]

## Citation

Raza, S. H., & Farooq, A. (2025). [*Review of Artificial Intelligence in Education from 2020 to 2025*](https://doi.org/10.35542/osf.io/6bnez_v1). EdArXiv. doi:10.35542/osf.io/6bnez_v1.
