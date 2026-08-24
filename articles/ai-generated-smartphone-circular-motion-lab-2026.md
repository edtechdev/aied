---
title: "Studying Circular Motion with an AI-Generated Smartphone Physics Lab"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-24T04:38:27-04:00"
type: article
tags: [physics-education, mobile-learning, generative-ai, content-generation, stem-education, personalized-learning]
sources: ['raw/papers/2607.28352.md']
confidence: high
---

> **Synthesis:** Suñer et al. (2026) show that a fully customized, browser-based rotation laboratory can be generated entirely through natural-language prompting of an AI assistant, with no manual coding. Most [[physics-education|smartphone physics]] experiments rely on precompiled sensor apps whose interfaces cannot be tailored to a specific activity, and customized labs previously required programming knowledge beyond most teachers. Using the AI-generated lab with a simple rotating platform, they characterize uniform circular motion (UCM) and uniformly accelerated circular motion (UACM), validating sensor measurements against independent video analysis with Tracker. The work connects [[physics-education]], mobile learning, and [[generative-ai]] content creation.

## Key Findings

1. A single self-contained HTML file (SmartPhysics: Rotation Lab) was generated entirely through a conversational [[prompt-engineering|natural-language prompt]] to the Claude AI assistant, with no manual programming, and runs in any modern mobile browser.
2. Using a low-friction rotating platform, the lab characterizes both uniform circular motion (UCM) and uniformly accelerated circular motion (UACM) simply by changing how the platform is set into operation.
3. The orientation-API (sensor-fusion) channel and the raw gyroscope channel agree internally to better than 0.5%, and both agree with independent video analysis (Tracker) to better than 1%.
4. In [[active-learning|active]] physics instruction, instructors can eliminate distracting commercial-software features (calibration menus, unneeded channels) and design the interface around the pedagogical variables (θ and ω) they want students to focus on.
5. Because angular-velocity measurements depend on rotation rate around the z-axis rather than spatial position, the setup is robust to off-center smartphone placement, avoiding systematic error.

## Customizing Smartphone Labs Without Code

Smartphones have become a standard measurement instrument in the [[physics-education|physics laboratory]], with built-in accelerometers, gyroscopes, magnetometers, and cameras used to investigate mechanics. A recurring limitation is that most experiments rely on precompiled sensor apps whose interfaces cannot be tailored to a specific activity, and until recently creating customized smartphone laboratories required programming knowledge beyond most physics teachers. This paper extends the authors' prior approach for acoustic experiments to show that a fully customized, browser-based rotation laboratory can be generated entirely through natural-language prompting of an AI assistant, with no manual coding — positioning [[generative-ai]] as a programming tool rather than a content-generation aid.

## AI-Generated, Browser-Based Lab

The measurement application, SmartPhysics: Rotation Lab, is a single self-contained HTML file that runs in any modern mobile browser and requires no installation. It was generated through a conversational session with the Claude AI assistant (Anthropic) from a structured natural-language prompt, following the workflow the authors introduced earlier. The application accesses both the DeviceOrientation API and the raw gyroscope data through standard browser Web APIs. The orientation angles are not a separate hardware component but are produced via internal sensor fusion, integrating the physical gyroscope's rate measurements with accelerometer data; reading both APIs therefore tests the internal consistency between integrated software output and raw sensor readings. The sampling rate and buffer length are adjustable, plots support zoom and pan, and data can be exported as CSV files and screen captures as PNG images for quantitative analysis. The complete generation prompt is provided as supplementary material, giving educators a replicable template adaptable to other sensor-based experiments. This illustrates how [[instructional-design|instructional design]] can now shape the instrumentation itself, a form of [[personalized-learning|personalization]] of the measurement experience around the specific activity.

## Results: Uniform Circular Motion

For UCM, fitting the angular position from the orientation API to θ(t) = ωt + θ0 yields ω = 6.110(5) rad/s with R² = 0.9999, confirming the excellent linear behavior expected. The gyroscope gives a mean ω = 6.10(8) rad/s, differing by only 0.1% and confirming the internal consistency of the browser's sensor-fusion pipeline. As a fully independent external check, video analysis with Tracker gives ω = 6.13(2) rad/s (R² = 0.9986), in agreement with both smartphone measurements to better than 0.5%.

## Results: Uniformly Accelerated Circular Motion

For UACM, with the hanging mass attached, the angular position follows the expected quadratic dependence; fitting to θ(t) = ½αt² + ω₀t + θ₀ yields α = 7.58(2) rad/s² with R² ≈ 1. The gyroscope data increase linearly in time, and a linear fit gives α = 7.614(8) rad/s² (R² = 0.9999), a difference of only 0.5% between the two smartphone determinations. Video analysis with Tracker, fitting the angular position to the same quadratic model, gives α = 7.56(2) rad/s², so the maximum discrepancy among the three methods is below 1% — a very solid experimental validation of the laboratory.

## Conclusions

The same simple setup allows both uniform and uniformly accelerated circular motion to be studied using only a smartphone as the measuring instrument, verifying the kinematic equations of rotation and letting students appreciate how mobile Web APIs process raw inertial measurements. Beyond kinematic verification, the pedagogical value lies in software customization: instructors can remove distracting features and focus [[student-engagement|student attention]] exclusively on the relevant variables. Because angular-velocity measurements depend on rotation rate rather than spatial position, slight off-center placement introduces no systematic error. The application was generated entirely by AI from natural-language instructions, so instead of adapting classroom activities to existing software, instructors can design software around their own [[pedagogy|pedagogical objectives]] using AI as a programming tool — drastically reducing development time and removing the need for advanced programming skills. Smartphones thus cease to be mere data-acquisition devices and become complete experimental platforms that record, display, and export results in real time. This is a low-cost, easily reproducible route to [[experiential-learning|hands-on]] experiments in [[stem-education]], supported by video-analysis triangulation and a design ethos grounded in [[human-ai-collaboration|human–AI collaboration]].

## Implications

- **For teachers and [[teacher-role|instructor workflow]]:** AI-generated browser labs let a single teacher produce tailored experiments without [[computational-thinking|programming expertise]], shifting the bottleneck from technical skill to [[instructional-design|pedagogical intent]] — a meaningful step toward [[teacher-ai-competency|teacher AI competency]].
- **For [[physics-education]] practice:** the same low-friction setup supports both UCM and UACM, and the multi-channel design (orientation API, raw gyroscope, Tracker) offers students a concrete model of [[inquiry-based-learning|inquiry]] and validation through triangulation.
- **For [[generative-ai]] in STEM education:** the paper demonstrates a replicable [[prompt-engineering|prompt template]] as shareable supplementary material, showing how [[llm|LLM]]-driven content generation can produce working, browsable scientific instruments rather than text alone.
- **For equity and [[scaffolding|scaffolded learning]]:** eliminating the programming barrier and commercial-software costs makes customized sensor experiments more accessible, enabling [[personalized-learning|activity-tailored]] labs in [[stem-education|STEM classrooms]] with modest hardware.

## Connected Concepts

- [[physics-education]]
- mobile learning
- [[generative-ai]]
- [[stem-education]]
- [[personalized-learning]]
- [[scaffolding]]
- [[teacher-role]]

## Connected Articles

- [[fouad-bentley-trust-utility-gap-physics-2026]]
- [[becker-chatgpt-typology-physics-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[retrieval-augmented-tutoring-algorithm-kite]]
- [[multiagent-classroom-dual-process-physics-teachers-2026]]

## Citation

Suñer, J. Ll., Muñoz-Pérez, F. M., Castro-Palacio, J. C., Monsoriu, J. A., Monteiro, M., Stari, C., & Martí, A. C. (2026). [*Studying circular motion with an AI-generated smartphone physics lab*](https://arxiv.org/abs/2607.28352). arXiv:2607.28352.
