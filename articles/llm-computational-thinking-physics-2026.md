---
title: Using LLMs to Detect Growth in Computational Thinking in Introductory Physics
created: "2026-08-07T04:33:04-04:00"
updated: "2026-08-24T04:38:01-04:00"
type: article
tags: [llm, computational-thinking, physics-education, stem-education, assessment, higher-ed, automated-assessment, problem-solving]
research_method: [experiment]
discipline: [physics education, stem education]
level: [higher ed]
category: [assessment]

sources: ['raw/papers/2608.06200.md']
confidence: medium
---

> **Synthesis:** Savage, Shanker, Michlitsch & Rebello (2026) investigate using [[llm|LLMs]] to evaluate students' written explanations of computational physics problems at scale. Establishing a human-coded baseline grounded in [[computational-thinking|CT]] literature, they found significant growth in Data Practices and Computational Problem-Solving Practices. The LLM successfully mirrored human evaluations for these constructs, but both human raters and the LLM struggled with more complex constructs like Systems Thinking. This work demonstrates that [[llm|LLMs]] offer a viable, scalable method for assessing [[computational-thinking|computational thinking]] in large-enrollment [[physics-education|physics]] courses.

As computation becomes more central to [[physics-education|physics education]], scalable methods to assess authentic [[computational-thinking|computational thinking (CT)]] are critically needed. This study establishes a human-coded baseline grounded in CT literature, identifies significant pre/post growth in Data Practices and Computational Problem-Solving Practices, and demonstrates that an [[llm|LLM]] can mirror human evaluations — scaling CT assessment across large datasets. Notably, both human raters and the LLM struggled with more complex constructs like Systems Thinking, revealing the limits of current [[automated-assessment|automated]] approaches.

## Key Findings

1. Students in a computationally intensive introductory [[physics-education|physics]] course showed large, statistically significant [[learning-gains|growth]] in Data Practices (p < 0.001, d = 1.03) and moderate growth in Computational Problem-Solving (d = 0.52) and Systems Thinking (d = 0.45), as coded by human raters grounded in the Weintrop [[computational-thinking|CT]] taxonomy.
2. An [[llm|LLM]] mirrored human evaluations for well-defined constructs (Data Practices κ = 0.90, Modeling & Simulation κ = 0.78) and reproduced the same growth trends when scaled across the full 936-student dataset (over 2,800 responses).
3. Both human raters and the LLM struggled with multi-component constructs like Systems Thinking (κ ≈ 0.48–0.51), indicating the difficulty stems from construct complexity rather than a model deficiency.
4. A [[assessment-validity|ceiling effect]] on Modeling & Simulation Practices (pre-instruction mean 1.62 out of 2) masked growth on the simulation-design prompt, showing some items lack sensitivity to instructional growth.

## Background

The [[ai-education|American Association of Physics Teachers]] frames computation as the "third pillar" of physics alongside experiment and theory. Yet integrating computation into introductory courses means fostering [[computational-thinking|computational thinking (CT)]] — moving students from superficial programming toward authentic sensemaking — which is difficult to measure. Historically, [[physics-education|physics education]] research relied on multiple-choice instruments that excel at identifying broad performance trends but cannot capture students' mental models and reasoning. Written explanations offer a richer window into cognition, but evaluating open-ended responses at scale is resource-intensive and requires many hours of qualitative coding to reach acceptable inter-rater reliability.

This assessment challenge has intensified as [[generative-ai|generative AI]] lets students bypass the cognitive effort of algorithmic design. To evaluate complex written work at scale, the authors turn to recent work showing AI can rate written responses, identify misconceptions, and assist in generating [[feedback]]. Rather than evaluating code correctness, they deploy a custom-prompted LLM to categorize how participants frame and reason through computational physics problems.

## Methods

The assessment was anchored in the taxonomy developed by Weintrop et al., which categorizes CT in math and science into four domains: Data Practices, Computational Problem-Solving Practices, Modeling and Simulation Practices, and Systems Thinking Practices. Systems Thinking — the ability to define system boundaries and synthesize micro-level interactions into macro-level behavior — was integrated into all three open-ended prompts alongside other practices. The instrument was iteratively refined by experts to ensure [[assessment-validity|construct validity]], with questions requiring simultaneous application of physics concepts and specific CT practices.

Data came from an introductory calculus-based engineering physics course at a large public university that integrated computation heavily into its [[curriculum-design|curriculum]], requiring weekly labs in [[educational-robotics|Python]] via Jupyter notebooks. The [[assessment]] was administered online via the Brightspace learning management system, proctored to ensure integrity, as a pre-test in Week 1 and post-test in Week 15. A total of 936 students completed both surveys.

Three researchers independently coded an initial subset of 10 students' responses (60 responses), achieving a Fleiss' κ of 0.53 for CT practices, then resolved discrepancies through iterative discussion. Following calibration they coded 50 students (300 responses), establishing human ground truth via majority vote. For [[automated-assessment|LLM validation]], the authors used the multimodal GPT-5.4-mini API with a temperature of 0.2, feeding the model the survey image, prompt, and response. A structured [[prompt-engineering|prompt]] instructed the model to act as an expert physics education researcher and to generate structured justifications before assigning a 0–2 score. Every response was evaluated across three independent runs with a final score by majority vote, mirroring the human methodology.

## Findings

Human consensus demonstrated substantial reliability on explicit computational tasks: Modeling and Simulation (κ = 0.80), Data Practices (κ = 0.80), Physics Correctness (κ = 0.73), and Computational Problem-Solving (κ = 0.60), while Systems Thinking yielded the lowest agreement (κ = 0.51). The LLM achieved substantial agreement on well-defined practices — Data Practices (κ = 0.90, 93% agreement), Modeling & Simulation (κ = 0.78), and Computational Problem-Solving (κ = 0.69) — but lower agreement on multi-component constructs like Physics Correctness (κ = 0.53) and Systems Thinking (κ = 0.48).

When applied to the full dataset, the LLM confirmed the macroscopic trends, detecting highly significant growth (p < 0.001) on the graph-interpretation and code-tracing items, but no measurable growth on the simulation-design item. Paired t-tests on the human-graded sample showed that students grew most in Data Practices (d = 1.03), aligning with the course's lab design, with moderate gains in Computational Problem-Solving (d = 0.52) and Systems Thinking (d = 0.45). Modeling and Simulation showed no growth (d = 0.00) due to an assessment ceiling: students entered the course already able to list simulation parameters, reflecting high [[prior-knowledge|prior knowledge]].

## Limitations

Both human raters and the LLM showed lower agreement on multi-component constructs, highlighting the difficulty of assessing complex reasoning in brief written responses. The near-ceiling pre-instruction scores on Modeling and Simulation Practices meant the simulation-design prompt served mainly as an indicator of baseline knowledge rather than of new cognitive growth. The authors note that future rubrics should define Systems Thinking more explicitly, distinguishing identifying system components from explaining their interactions and consequences.

## Implications

This work positions [[llm|LLMs]] as a viable mechanism for [[formative-assessment|formative assessment]], enabling instructors to efficiently track the integration of computational and physical reasoning across large-enrollment courses where manual coding is infeasible. The finding that the LLM's lower agreement on Systems Thinking mirrors human inter-rater reliability suggests the variance stems from construct complexity, not model deficiency — supporting [[human-in-the-loop-ai|human oversight]] paired with carefully designed rubrics for highly integrated constructs. The study underscores that reliable [[computational-thinking|CT]] assessment requires both robust instrument design and explicit [[assessment-validity|rubric operationalization]], and that even automated evaluation inherits the ceiling effects of the underlying instrument.

## Connected Concepts

- [[physics-education]]
- [[computational-thinking]]
- [[stem-education]]
- [[llm]]
- [[automated-assessment]]
- [[assessment]]
- [[educational-measurement]]
- [[higher-ed]]
## Connected Articles

- [[hashmi-socratic-physics-chatbot-2025]]
- [[ai-scoring-language-bias-physics]]

## Citation

Savage, S., Shanker, A., Michlitsch, G., & Rebello, N. S. (2026). [Using LLMs to Detect Growth in Computational Thinking in Introductory Physics](https://arxiv.org/abs/2608.06200).
