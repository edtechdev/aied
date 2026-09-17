---
title: "Presenting Your AI in Education Research with Rigor: The TEP-AIED Model"
created: "2026-09-01T09:45:00-04:00"
updated: "2026-09-16T14:48:35-04:00"
type: article
tags: [research-methods-aied, ai-ed-evaluation, generative-ai, ethics, theory-development-aied, limitations-in-aied-research, ai-use-disclosure, assessment-validity]
foundations: [limitations-in-aied-research, theory-development-aied]
technology: [generative-ai]
assessment: [ai-ed-evaluation, assessment-validity, research-methods-aied]
ethics: [ai-use-disclosure, ethics]
connected_faqs: [reporting-interpreting-aied-research]
research_method: [theoretical analysis]
audience: [researchers]
level: [higher ed]
category: [framework]
sources: ['raw/papers/tep-aied-model-reporting-2026.md']
confidence: high
---

> **Synthesis:** Hwang, Xie, Wah, and Gasevic (2026) propose the TEP (Transparency-Ethics-Pedagogy)-[[ai-education|AIED]] model, a three-dimensional framework for designing and reporting [[research-methods-aied|research on AI in education]]. Their argument is that the field's existing guidance is fragmented: the human-centered responsible AI framework of Fu and Weng (2024) is ethics-centric, the pedagogical considerations framework of Topali et al. (2025) is pedagogy-centric for authentic [[k-12]] settings, and the RAISE reporting checklist of Allison (2026) is comprehensive but too granular for routine empirical use. Against that, TEP-AIED folds three interdependent dimensions into one structure, requiring specification of [[ai-technologies|AI system]] characteristics, prompts, and learner-AI interaction, proactive [[ethics]] covering data governance, [[bias-mitigation|risk mitigation]], [[equity-in-ai-education|equity]] and [[accessibility]], and explicit pedagogic grounding through learning objectives, theoretical alignment, and learner preparation for appropriate [[student-ai-interaction|AI use]]. The authors supply a guideline table mapped to seven paper sections, and ask authors to add a Method subsection titled "Transparency, Ethics, and Pedagogy Considerations of Using AI". The model is meant to be consulted at the design stage, not at manuscript preparation, and it speaks most directly to experimental and intervention-based studies while still informing [[qualitative-research|qualitative]], [[design-based-research|design-based]], and system-development work. Its distinctive claim is that [[pedagogy]] sits at the center of [[ai-ed-evaluation|AIED evaluation]]: AI is a tool whose educational value depends on instructional embedding, not on the tool itself.

## Key Findings

1. **Transparency, Ethics, and Pedagogy are three interdependent dimensions, not three separate checklists.** The three are described as mutually reinforcing, with each one doing work that surfaces issues in the others. The model positions itself as a streamlined and integrative alternative that reduces complexity while keeping conceptual rigor.
2. **The model is built on the specific limits of three named existing frameworks.** Fu and Weng (2024) provide a strong ethical foundation (fairness, accountability, privacy, stakeholder responsibility) but remain primarily ethics-centric and "less explicit about how such principles translate into concrete research design and reporting practices in AIED". Topali et al. (2025) foreground pedagogical grounding and contextualization in authentic K-12 settings, emphasizing theoretical alignment ([[scaffolding]], [[self-regulated-learning|self-regulated learning]], [[formative-assessment|formative]] feedback rather than technological novelty) and contextual sensitivity ([[curriculum-design|curriculum]] constraints, [[teacher-role|teacher]] expertise, student diversity, institutional infrastructure), but this framework "is largely pedagogically oriented and does not systematically integrate transparency or procedural reporting requirements". The RAISE framework of Allison (2026), a comprehensive checklist covering technical, pedagogical, and ethical aspects of AI-supported interventions, is faulted because "its breadth and granularity may make it complex and less accessible for routine empirical applications".
3. **It answers two documented methodological failures in GenAI research.** Weidlich et al. (2025) hold that claims about ChatGPT's effects on learning are undermined by insufficiently specified treatments, poorly matched or weakly described control conditions, and outcome measures that do not validly represent learning, and they note that ChatGPT is a tool rather than a pedagogy. Yan et al. (2025) argue that GenAI research often fails to distinguish immediate task performance from learning as a durable change in knowledge and capability, calling for attention to retention, transfer, delayed recall, and the cognitive and metacognitive processes beneath learning.
4. **Transparency, part one: document the system, the workflow, and the prompts.** The guidelines require interface screenshots (or a schematic) of the AI tool; a description of student workflow steps stating when and where AI is used; and specification of the prompts or guidance given to learners, placed in an appendix when the illustration is long. For an adopted system, report the model or system name, version, and provider (the paper's own example is "ChatGPT 3.5 by OpenAI"). For a newly developed system, report system architecture, design rationale, training data, training process, algorithmic configuration, test data, and validation process.
5. **Transparency, part two: comparison conditions must be explicitly constructed.** In a (quasi-)experimental study, authors must clearly define the treatment condition and the comparison or control condition, including how AI use differs across conditions and which instructional activities are held constant. A related requirement is specification of the intended learning objectives, research hypotheses, and justifications in the Introduction.
6. **Ethics, part one: formal approval is the floor, not the ceiling.** The guidelines require reporting of ethical approval and informed consent procedures, then, where applicable, data governance (data sharing, storage, retention, anonymization) and risk mitigation strategies for bias, [[hallucination-risk|hallucination]], harmful outputs, and overreliance.
7. **Ethics, part two: equity, accessibility, and the openness of data.** Authors must explain equity and accessibility measures covering language, disability support, and access gaps, and provide justification when those measures are not applicable. They must also explain why the data or benchmarks used are significant and broad, and, where those materials are not open-source, explain the data used and why it is unavailable, in line with the data sharing policy of most well-recognized journals. Links to source code, tools, datasets, or benchmarks are strongly encouraged though not mandatory, with reasons required when privacy, licensing, or institutional restrictions prevent sharing.
8. **Pedagogy, part one: objectives, hypotheses, theory, and the AI's instructional role.** The Introduction must specify learning objectives, state the research hypotheses and their justifications, address the learning challenge the study tackles, and identify the [[learning-theories|learning theories]] or instructional principles guiding the AI-supported intervention. It must also explain the instructional role assigned to the AI (tutor, feedback agent, co-writer) and the targeted form of learning. Where teachers are present, the model expects attention to their role: modeling appropriate AI use such as demonstrating how to prompt or evaluate outputs, monitoring student-AI interactions, and scaffolding critical engagement with AI-generated content. AI is positioned as a tool embedded within teacher-guided instructional processes rather than a replacement for pedagogical decision-making.
9. **Pedagogy, part two: learners must be oriented before the intervention.** The guidelines require reporting how learners were prepared for appropriate AI use, including the intended role of AI, acceptable versus unacceptable practices, and strategies for verifying and reflecting on AI-generated outputs. The Experimental process section must then describe the detailed procedures through which participants used AI to reach the learning goals, including the sequence of activities, the prompts and interactions, and how AI use was embedded in the instructional process.
10. **Pedagogy, part three: say whether you measured performance, retention, or transfer.** The guidelines require authors to specify whether outcomes assess performance, retention, or transfer, and to justify outcome measures aligned with the stated objectives (conceptual understanding, transfer, self-regulated learning). Generalization to data unseen during learning and outside the domain studied is treated as important to demonstrate the validity of learning. The Discussion must additionally explain the significant innovations made, whether on the AI or the educational side, and whether the results generalize to a broader domain.
11. **Disclosure under Transparency does ethical and pedagogical work at the same time.** The paper's worked example: disclosing prompts, system settings, and learner-AI interaction processes not only improves interpretability and reproducibility but also helps researchers identify ethical risks such as bias, hallucination, or overreliance, while enabling pedagogical reflection on whether the AI support aligns with the intended learning objectives and level of [[student-engagement|learner engagement]]. The stated goal is that researchers "explain how AI meaningfully contributes to learning processes and outcomes in helping learners think critically from diverse angles, rather than completing the learning tasks for learners".
12. **The model comes with a reporting template and a lifecycle instruction.** Authors are asked to add a subsection to the Method or Research Design section titled "Transparency, Ethics, and Pedagogy Considerations of Using AI", which states that the study was designed and reported following TEP-AIED guidelines and then addresses transparency (tool, version, provider, instructional workflow, prompts, differences between treatment and comparison conditions), ethics (approval, consent, anonymization, storage, management of hallucination, bias, and overreliance risks, accessibility and equity), and pedagogy (learning objectives, hypotheses, underpinning theories, the instructional role of AI, and how learners were oriented toward acceptable use and verification of outputs). The guidelines are to be consulted during research design rather than only at manuscript preparation. The authors position the model as particularly applicable to experimental and intervention-based AIED studies, where clarity of system configuration, learner-AI interaction, and [[learning-design|instructional design]] directly affects internal and external validity, while its principles can also inform qualitative, design-based, and system-development research.

## Implications for AI in Education

- Reporting standards for AIED should be usable while a study is being designed, not only while a manuscript is being written. TEP-AIED's guideline table is organized under seven paper sections (Learning approach; Adopted system or system development; Participants; [[governance|AI Governance]] and Risk Considerations; Introduction; Experimental process; Discussion), which makes them checkable at the stage when design decisions can still change.
- AI use disclosure becomes a substantive methodological obligation rather than an ethics footnote. Naming the model, version, and provider; showing the interface; describing the prompt given to learners; and stating which instructional activities are held constant are the conditions under which a finding about AI can be interpreted or replicated at all, which places [[ai-use-disclosure]] alongside [[benchmark|benchmarking]] and [[open-source]] norms in the field's evidence infrastructure.
- The ethical dimension is framed as design work rather than compliance paperwork: data governance, mitigation of bias, hallucination, harmful outputs, and overreliance, plus equity and accessibility measures that cover language, disability support, and access gaps, and a justification when such measures are judged not applicable.
- Pedagogy carries the most weight in the model. Because AI is treated as a tool whose value depends on instructional embedding, an AIED study has to show objectives, theory, and the AI's assigned role, and it has to show that learners were oriented toward acceptable and unacceptable practices and toward verifying and reflecting on AI output. That orientation step is where [[ai-literacy]], [[metacognition]], and [[cognitive-offloading]] concerns become measurable study components rather than background commentary.
- Outcome vocabulary matters: distinguishing performance effects from retention and transfer follows directly from the critiques of Weidlich et al. (2025) and Yan et al. (2025), and it bears on [[assessment-validity]], [[transfer-of-learning]], and how [[learning-gains]] are claimed.
- Reviewers, editors, and journal policy can operationalize the model cheaply, since it asks for a named Method subsection and for explanations when code, data, or benchmarks cannot be shared. This gives [[peer-assessment]] a checklist that fits inside existing article structures instead of a separate reporting instrument.
- Scope limits should be respected: the authors present TEP-AIED as most applicable to experimental and intervention-based studies, and as informative rather than directly prescriptive for qualitative, design-based, and system-development research, where the same dimensions may need different evidence.

## Connected Concepts

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[theory-development-aied]]
- [[limitations-in-aied-research]]
- [[ethics]]
- [[generative-ai]]
- [[ai-use-disclosure]]
- [[assessment-validity]]
- [[transfer-of-learning]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[governance]]
- [[teacher-role]]
- [[student-ai-interaction]]
- [[ai-literacy]]
- [[benchmark]]
- [[open-source]]
- [[peer-assessment]]

## Connected Articles

- [[genai-higher-education-systematic-review-2026]] — systematic review of GenAI in higher education
- [[access-not-enough-ai-tutoring-2026]] — randomized field study of human support plus AI tutoring
- [[raise-framework-ai-education-reporting-2026]] — RAISE: a 30-item, ten-domain reporting checklist for AI-in-education studies (Allison 2026)

## Citation

- Hwang, G.-J., Xie, H., Wah, B. W., & Gasevic, D. (2026). [Presenting your AI in education research with rigor: The TEP-AIED model](https://doi.org/10.1016/j.caeai.2026.100598). *Computers and Education: Artificial Intelligence, 10*, 100598.
