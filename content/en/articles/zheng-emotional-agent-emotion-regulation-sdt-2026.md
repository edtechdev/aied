---
title: "From emotion regulation to academic success: A self-determination theory-based emotional agent-mediated approach"
created: "2026-11-15T08:45:00-05:00"
updated: "2026-11-15T08:45:00-05:00"
type: article
pedagogy: [self-determination-theory, motivation, well-being]
technology: [pedagogical-agent, affective-computing, generative-ai]
assessment: [learning-gains]
methods: [quantitative-research]
sources: ['raw/papers/zheng-emotional-agent-emotion-regulation-sdt-2026.md']
source_url: "https://doi.org/10.1111/bjet.70083"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [quasi-experiment]
discipline: [information technology]
level: [primary education, k 12]
audience: [instructors, educational technology developers, researchers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-15"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Zheng and colleagues (2026) built an emotional agent, EmoAgent, that detects a student's emotional state and supplies regulation strategies on top of the cognitive support a conventional [[pedagogical-agent|pedagogical agent]] provides, grounding the design in [[self-determination-theory|self-determination theory]]'s autonomy, competence, and relatedness needs. An eight-week quasi-experiment compared it with an SDT-based conventional agent in an Information Technology course: 173 sixth graders in four classes, 87 using the emotional agent and 86 the conventional one. The emotional-agent group scored significantly higher on [[learning-gains|academic achievement]], reported more positive and fewer negative emotional experiences, and process mining showed the agent moved students' emotional trajectories from negative toward positive. Negative emotion was significantly and negatively associated with achievement, and the emotional-agent condition moderated that association.

## Key Findings
1. **Achievement favored the emotional agent.** The SDT-based emotional-agent approach significantly outperformed the SDT-based conventional agent on academic achievement across the eight weeks.
2. **Emotional experience diverged by condition.** Students with the emotional agent reported positive emotional experiences, while the conventional-agent group reported more negative ones.
3. **Negative emotion tracked achievement, and the agent moderated it.** Negative emotion was significantly negatively associated with academic achievement, with the emotional-agent approach moderating that association.
4. **Process mining showed the trajectory shift.** Sequential analysis of the interaction logs traced students' regulation from negative toward positive emotional states during the course.
5. **The comparison isolates emotional support.** Both conditions used an SDT-based agent, so the difference is the emotion sensing, recognition, feedback, and regulation layer rather than the presence of an agent.

## What the emotional layer added

The design is unusually clean for an agent study, because both arms received an SDT-based agent. The control was not a no-agent condition but a conventional agent offering learning supports without considering emotional factors, which means the measured difference belongs to the affective layer specifically. That matters for how the result should be read: it is not evidence that agents help, which is already well established, but evidence that adding [[affective-computing|affect sensing]] and regulation strategies to an agent that already works changes both how students feel and what they achieve. The authors situate the design in SDT's claim that meeting autonomy, competence, and relatedness needs activates intrinsic [[motivation|motivation]], which in turn regulates academic emotion — the agent is the delivery mechanism for that sequence, not a new theory of it.

## Why sixth graders in an IT course

The population choice is doing work the paper does not overstate. Sixth graders are at an age where emotional responses to difficulty and failure are still strongly shaping whether a student persists with a technical subject, and an Information Technology course presents frequent, visible errors. A conventional agent that only corrects those errors addresses the cognitive problem while leaving the emotional one untouched, which is exactly the condition the study found produced more negative emotional experience. The process-mining result is the more interesting half: it shows the emotional agent's effect as a *trajectory* rather than a post-test difference, which is the kind of evidence the [[well-being|well-being]] literature in education rarely has.

## From affect to achievement

The moderation finding is the paper's causal claim: negative emotion predicted lower achievement, and the emotional-agent condition weakened that relationship. That is a stronger statement than a correlation between mood and grades, because it identifies the intervention as a buffer. It is also where the evidence is thinnest. Emotion was sensed and classified by the system under study, so the measure and the treatment share a source, and achievement was the only distal outcome tracked. Whether the buffer extends past the eight weeks, or to subjects where the emotional stakes differ, is not something this design can answer.

## What this means for practice
- **Instructors.** Treat emotional support as part of the tutoring design rather than a separate pastoral add-on; the achievement difference here came from adding an affective layer to an otherwise identical agent.
- **Educational technology developers.** Instrument affect detection and regulation strategies into agents that already deliver cognitive support, since the conventional agent alone produced more negative emotional experience.
- **Researchers.** Use process-level traces rather than end-of-course [[self-report-measures|affect surveys]] to show how regulation changes during a course.

## Limitations
- Four intact classes were assigned whole to condition, so class and [[teacher-role|teacher]] effects are confounded with the emotional agent.
- The sample was 173 sixth graders in one [[primary-education|primary]] school's Information Technology course, limiting generalization to other ages and subjects.
- Emotion was sensed and classified by the system under study, so measurement and treatment share a source.
- Achievement was the only distal outcome; motivation, well-being, and retention were not tracked after the eight weeks.

## Citation

Zheng, X.-L., Lyu, Z.-Y., Wang, S.-Y., Wang, F., Kong, X., Hwang, G.-J., & Tu, Y.-F. (2026). [*From emotion regulation to academic success: A self-determination theory-based emotional agent-mediated approach*](https://doi.org/10.1111/bjet.70083). *British Journal of Educational Technology, 57*(6), 1521–1563.
