---
title: "What are notable gaps in the research literature on AI in Education?"
created: "2026-08-24T14:10:00-04:00"
updated: "2026-08-24T16:10:00-04:00"
type: faq
tags: [ai-ed-evaluation, research-methods-aied, limitations-in-aied-research, learning-gains, equity-in-ai-education, higher-ed]
research_method: [research methods, literature review, learning analytics]
level: [higher ed]
category: [ai ed evaluation]
---

# What are notable gaps in the research literature on AI in Education?

Several notable gaps recur across the [[ai-education|AI in Education]] knowledge base. They are less about whether AI *can* do useful educational tasks and more about whether we have strong, generalizable evidence that particular designs improve learning, for whom, and under what conditions.

## 1. Too few strong causal and longitudinal studies

Much AIED research still relies on cross-sectional surveys, small quasi-experiments, [[design-based-research|design-based research]], or short-term deployments. Randomized studies are comparatively difficult and expensive to run in authentic classrooms, and long-term follow-up is uncommon.

This leaves important questions about retention, transfer, dependency, and sustained changes in [[pedagogy|teaching practice]] unresolved. The wiki's [[research-methods-aied|Research Methods in AIED]] page identifies this tension directly: the most causally rigorous studies are often the least ecologically authentic, while real-world deployments frequently provide weaker causal evidence.

## 2. Immediate performance is measured more often than durable learning

[[generative-ai|Generative AI]] can improve the quality or speed of work students complete while producing little improvement — or sometimes deterioration — when the same learners must perform independently. The field therefore needs more delayed, unassisted assessments of retention and transfer rather than relying on AI-assisted coursework, productivity, satisfaction, or [[student-engagement|engagement]] as proxies for learning.

See [[learning-gains|Learning Gains]] and [[ai-ed-evaluation|AI Ed Evaluation]].

## 3. Measurement remains inconsistent and sometimes weak

Constructs such as "[[ai-literacy|AI literacy]]," "engagement," "[[critical-thinking|critical thinking]]," "trust," "[[personalized-learning|personalization]]," and even "learning" are operationalized differently across studies. Many measures depend heavily on self-report, even though learners and educators can misjudge their own competence and AI use. [[benchmark]] performance creates a related problem: an AI system may perform well on a technical benchmark without improving classroom learning.

The wiki's [[limitations-in-aied-research|Limitations in AIEd Research]] page highlights [[assessment-validity|construct validity]], unvalidated instruments, and self-report as cross-cutting weaknesses.

## 4. Results often do not generalize well

Many studies involve one university, one course, one instructor, one discipline, or a convenience sample. An intervention that works with programming students using one particular model may not work in writing, [[medical-education|medicine]], secondary education, or a different cultural context. Even findings about the same task can change when the underlying model changes. Better multisite, cross-disciplinary, replication-oriented studies are therefore needed.

See [[limitations-in-aied-research|Limitations in AIEd Research]].

## 5. Equity is underexamined relative to adoption and effectiveness

We know considerably more about whether students accept AI than about how its benefits and harms are distributed. The wiki identifies open questions around socioeconomic access, paid versus free models, disability, linguistic diversity, cultural relevance, rural infrastructure, and differences in who gains educational value from AI.

The [[equity-in-ai-education|Equity]] synthesis distinguishes access, representation, and outcomes as separate equity problems. This gap is particularly visible outside dominant Global North contexts: a review of 75 studies of GenAI in [[global-south|Global South]] [[higher-ed|higher education]] found **equity received the least research attention**, alongside limited geographic representation, stakeholder imbalance, and insufficient evidence on long-term outcomes.

See [[nguyen-genai-global-south-review-2026|Perceptions of Generative AI in Global South: A Scoping Review]].

## 6. We need much better evidence about mechanisms

Asking "Does AI improve learning?" is increasingly too broad. Research needs to establish *why* particular forms of AI support help or harm: for example, whether hints preserve [[productive-failure|productive struggle]], whether answer provision causes [[cognitive-offloading]], how [[feedback]] changes [[self-regulated-learning|self-regulation]], and how human support modifies AI effects.

The knowledge base increasingly suggests that effects are **design-contingent**, not properties of "AI" in general. The same broad technology can support meaningful learning when configured as a scaffold and undermine it when configured as an answer generator.

## 7. Human–AI collaboration needs more study than AI-alone performance

A substantial amount of research still evaluates what an AI model can accomplish independently. Educational practice is instead usually a sociotechnical system involving students, teachers, peers, curricula, assessments, and [[governance|institutional]] rules. Important unanswered questions include how responsibilities should be divided between humans and AI, when teachers should intervene, how [[scaffolding]] should fade, and how AI affects learner and teacher [[agency]].

## 8. Teacher implementation and institutional conditions are comparatively understudied

Technical capability does not guarantee adoption or pedagogical transformation. Research needs to examine [[curriculum-design|curriculum]] fit, instructor workload, [[faculty-development|professional development]], [[educational-policy-ai|institutional policy]], governance, procurement, and support structures over time.

A broad higher-education [[meta-analysis-systematic-review|systematic review]] in the knowledge base specifically identifies **longitudinal and experimental research, equity-focused research, and [[discipline-specific-aied|discipline-specific]] studies** as priorities, while noting that institutional investment in AI infrastructure is only weakly related to genuine pedagogical transformation.

## 9. Theory use is often weak or disconnected from implementation

AIED systems regularly invoke ideas such as [[constructivist|constructivism]], personalization, or learner-centeredness without clearly specifying the learning mechanisms the technology is supposed to activate. The wiki describes a recurring **"constructivism in name, [[behaviorism]] in practice"** problem: systems may be described as supporting active construction while actually delivering drill, answers, or reinforcement.

Stronger studies should specify a mechanism, design around it, and measure outcomes that the theory actually predicts.

See [[learning-theories|Learning Theories]].

## 10. Reproducibility is unusually difficult

Studies often omit exact prompts, model versions, settings, code, or sufficient methodological details. Proprietary models may change silently, making an intervention difficult to reproduce even when researchers report it carefully. The rapid evolution of models compounds this problem: by the time a study appears in print, the system examined may already be obsolete.

These reproducibility, FAIR-practice, proprietary-tool, and "speed problem" concerns are central themes in [[limitations-in-aied-research|Limitations in AIEd Research]].

## Overall takeaway

Taken together, the field's biggest research need is not simply **more studies of AI use**. It is more research that asks:

> **Which educational design, for which learners, in which context, through which mechanism, produces which durable outcomes — and at what cost or risk?**

That means stronger combinations of classroom randomized controlled trials and quasi-experiments, longitudinal follow-up, validated performance measures, [[qualitative-research|qualitative]] mechanism studies, equity-focused sampling, explicit learning theory, and transparent reporting.

The AI in Education knowledge base therefore portrays AIED as a rapidly maturing field, but one where the strength of technological innovation still frequently exceeds the strength of the educational evidence behind it.
