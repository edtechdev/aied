---
title: "What it takes to control AI by design: human learning"
created: "2026-11-21T12:10:00-05:00"
updated: "2026-11-21T12:10:00-05:00"
published: "2026"
type: article
authors: ["Te'eni, D.", "Yahav, I.", "Schwartz, D."]
venue: "AI & SOCIETY 41:237-250"
source_url: https://doi.org/10.1007/s00146-025-02401-y
evidence_context: non_educational
pedagogy: [lifelong-learning]
technology: [human-in-the-loop-ai, machine-learning]
assessment: [assessment-validity]
methods: [design-based-research]
ethics: [explainable-ai, trust, guardrails]
research_method: [design and evaluation study]
audience: [instructors, instructional designers, educational technology developers, administrators, researchers]
page_kind: [framework]
sources: ["raw/papers/teeni-control-ai-by-design-human-learning-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links, quotes]
---

> **Synthesis:** Te'eni, Yahav and Schwartz argue that meaningful human control over AI is a design problem, not a supervision habit. Drawing on systems theory, they set out a framework in which a human–AI system has a client, a system manager and a designer, and runs in a stable mode, where the machine decides and the human oversees, or an adaptive mode, where the two learn from each other through linked feedback loops. Control, on their account, is not a single lever but a set of control-feedback loops, one per system level and mode, all of which must align with the values of the level above. They demonstrate the framework on Fusion, a human–AI system that classifies forum messages as cybersecurity threats. In adaptive mode the expert passes insights to the model and receives the model's reasoning back, and in stable mode the model classifies autonomously and hands control back when confidence falls. The study is a design framework with a working demonstration rather than a measured evaluation, so what it establishes is a way to think about keeping humans in control and keeping them learning.

## Key Findings

- Control is designed, not assumed. The framework separates client, system manager and designer, and requires a distinct control-feedback loop for every system level and every mode of operation.
- Stable and adaptive modes do different work. Stable mode keeps a trained configuration running under human oversight; adaptive mode relearns, and it is where human learning happens.
- Reciprocal human–machine learning links the two directions: the human passes insights to the machine and receives the machine's reasoning back, so each subsystem learns from the other.
- Control must be aligned across levels. A loop that is correct at its own level can still be misaligned with the values of the level above it.
- The demonstration is a design case, not a measured evaluation. Fusion is reported as feasible and as reaching agreement between human and machine after eight iterations, with no comparative results reported.

## Control as a systems problem

The paper begins from a gap. Oversight is usually described as a human watching an AI, while the design of that watching is left implicit. Te'eni and colleagues import systems theory, Simon's *Sciences of the Artificial* and Churchman's inquiry systems, to make the control structure explicit. A human–AI system, on their account, has three roles: a client whose values the system serves, a system manager who delegates responsibilities between human and machine, and a designer who fixes the structure and the rules. Control is then not one loop but several. Each system level and each mode of operation needs its own control-feedback loop, and those loops must be aligned with the goals and values of the level above. The authors are explicit that they do not address the harder problem of aligning the goals of AI designers with the goals of clients, which they leave to regulation.

## Two modes of operation

The framework separates a stable mode from an adaptive one. In stable mode the system keeps its current configuration and performs: a [[machine-learning|trained model]] decides and a human oversees, stepping in when the model's confidence falls below a threshold or when the environment shifts. In adaptive mode the system relearns. It detects changes, revisits its goals and reallocates responsibilities between the human and the machine. The authors draw on von Bertalanffy's point that adaptation is what keeps stable operation possible, and on Simon's definition of learning as a relatively permanent change in a system's capacity to adapt to its environment. Adaptation is where human learning happens, and the paper's central claim is that it must be controlled rather than assumed.

## Reciprocal human–machine learning

For the adaptive mode the authors propose reciprocal human–machine learning: two feedback loops, one from human to machine and one from machine to human, both tied to shared knowledge representations. The human expert makes sense of new cases and passes the insight to the model; the model returns its reasoning and its classification performance. The authors implemented this as Fusion, a system that classifies forum messages as cybersecurity threats. Experts began from roughly 500 labeled messages, about 2.5 percent of them attacks, and worked through cycles in which the machine classified, explained and updated. After eight iterations the human and the machine reached agreement on mutual knowledge, at which point the system could return to stable mode. The authors report that the explainability was not optional: it was what made the human's learning possible.

## Why this may matter for education

The framework was built for critical decisions, not classrooms, and the paper does not study learners. Its value for education is the way it reframes a familiar problem. Most accounts of [[human-in-the-loop-ai|human oversight]] treat the human's presence as the safeguard; this one treats control as a designed property whose feedback loops can be missing, misaligned or one-directional. That bears on [[learning-analytics|learning analytics]] dashboards that report to a teacher without giving the teacher a way to act, on [[adaptive-learning|adaptive learning]] systems that adjust silently, and on [[automated-assessment|automated assessment]] tools whose reasoning the grader never sees. The reciprocal loop is the sharper contribution. A tool that only takes the human's input, or only gives feedback, learns in one direction, and the human's own judgment can stop developing. Read against the education literature, the paper's continual human learning is a design requirement rather than an aspiration.

## What this means for practice

- **Instructors.** Treat the feedback a tool gives you as something to act on and to question, not as a score to accept. Where a system adapts to your choices, ask what it learned from you and what you last learned from it.
- **Instructional designers.** Build the return loop first. A dashboard, tutor or grader should tell the teacher what it changed and why, so the teacher can correct it, not only read it.
- **Educational technology developers.** Design for both modes. A tool needs a stable mode that runs without constant attention and an adaptive mode that hands control back when its confidence drops or the context changes.
- **Administrators.** Ask vendors two questions before procurement: what the human can change in the system, and what the system does when it is no longer confident. A tool with no answer to either is oversight in name only.
- **Researchers.** Test whether reciprocal feedback improves human judgment over time, not only whether it improves the model. The framework supplies the design; the education evidence does not yet exist.

## Limitations

- The framework was developed for critical decision-making under high but acceptable risk, and the authors concede that keeping a human in the loop has costs that cannot always be justified.
- The paper reports no comparative results. Fusion is presented as a feasibility demonstration, so the framework's advantage over simpler oversight designs is argued, not measured.
- The demonstration used one domain, cybersecurity message classification, and a small labeled set of about 500 messages, so the design has not been shown to transfer.
- The authors assume the system is designed to serve human goals, and they say that assumption can be contested as machines become more capable.
- No educational setting, learner population or learning outcome appears anywhere in the paper. The education bridge in the previous section is an inference, and the paper offers no evidence that reciprocal feedback improves teaching or learning.

## Citation

Te'eni, D., Yahav, I., & Schwartz, D. (2026). [What it takes to control AI by design: human learning](https://doi.org/10.1007/s00146-025-02401-y). *AI & SOCIETY*, 41, 237–250.
