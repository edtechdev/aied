---
title: "Studying Circular Motion with an AI-Generated Smartphone Physics Lab"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
pedagogy: [online-teaching-and-learning]
technology: [generative-ai, personalized-learning]
research_method: [experiment, mixed methods]
discipline: [physics education, stem education, science education]
sources: ['raw/papers/2607.28352.md']
confidence: high
audience: [teachers, instructors]
page_kind: [framework]
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

The measurement application, SmartPhysics: Rotation Lab, is a single self-contained HTML file that runs in any modern mobile browser and requires no installation. It was generated through a conversational session with the Claude AI assistant (Anthropic) from a structured natural-language prompt, following the workflow the authors introduced earlier. The application accesses both the DeviceOrientation API and the raw gyroscope data through standard browser Web APIs. The orientation angles are not a separate hardware component but are produced via internal sensor fusion, integrating the physical gyroscope's rate measurements with accelerometer data; reading both APIs therefore tests the internal consistency between integrated software output and raw sensor readings. The sampling rate and buffer length are adjustable, plots support zoom and pan, and data can be exported as CSV files and screen captures as PNG images for [[quantitative-research|quantitative]] analysis. The complete generation prompt is provided as supplementary material, giving educators a replicable template adaptable to other sensor-based experiments. This illustrates how [[learning-design|instructional design]] can now shape the instrumentation itself, a form of [[personalized-learning|personalization]] of the measurement experience around the specific activity.

## Results: Uniform Circular Motion

For UCM, fitting the angular position from the orientation API to θ(t) = ωt + θ0 yields ω = 6.110(5) rad/s with R² = 0.9999, confirming the excellent linear behavior expected. The gyroscope gives a mean ω = 6.10(8) rad/s, differing by only 0.1% and confirming the internal consistency of the browser's sensor-fusion pipeline. As a fully independent external check, video analysis with Tracker gives ω = 6.13(2) rad/s (R² = 0.9986), in agreement with both smartphone measurements to better than 0.5%.

## Results: Uniformly Accelerated Circular Motion

For UACM, with the hanging mass attached, the angular position follows the expected quadratic dependence; fitting to θ(t) = ½αt² + ω₀t + θ₀ yields α = 7.58(2) rad/s² with R² ≈ 1. The gyroscope data increase linearly in time, and a linear fit gives α = 7.614(8) rad/s² (R² = 0.9999), a difference of only 0.5% between the two smartphone determinations. Video analysis with Tracker, fitting the angular position to the same quadratic model, gives α = 7.56(2) rad/s², so the maximum discrepancy among the three methods is below 1% — a very solid experimental validation of the laboratory.

## Conclusions

The same simple setup allows both uniform and uniformly accelerated circular motion to be studied using only a smartphone as the measuring instrument, verifying the kinematic equations of rotation and letting students appreciate how mobile Web APIs process raw inertial measurements. Beyond kinematic verification, the pedagogical value lies in software customization: instructors can remove distracting features and focus [[student-engagement|student attention]] exclusively on the relevant variables. Because angular-velocity measurements depend on rotation rate rather than spatial position, slight off-center placement introduces no systematic error. The application was generated entirely by AI from natural-language instructions, so instead of adapting classroom activities to existing software, instructors can design software around their own [[pedagogy|pedagogical objectives]] using AI as a programming tool — drastically reducing development time and removing the need for advanced programming skills. Smartphones thus cease to be mere data-acquisition devices and become complete experimental platforms that record, display, and export results in real time. This is a low-cost, easily reproducible route to [[experiential-learning|hands-on]] experiments in [[stem-education]], supported by video-analysis triangulation and a design ethos grounded in [[human-ai-collaboration|human–AI collaboration]].

## What this means for practice

- **Instructors.** Generate a lab tailored to your own activity instead of adapting the lesson to a precompiled sensor app: SmartPhysics: Rotation Lab was produced as a single self-contained HTML file from one conversational prompt to an AI assistant, with no manual programming, and runs in any modern mobile browser.
- **Instructors.** Strip the interface down to the pedagogical variables you want students to attend to — calibration menus and unused channels can be omitted so attention stays on θ and ω, which is a step toward [[teacher-ai-competency|teacher AI competency]] without [[computational-thinking|programming expertise]].
- **Instructors.** Have students cross-check each result across independent channels: the orientation API (ω = 6.110(5) rad/s) and the raw gyroscope (mean ω = 6.10(8) rad/s) agreed to 0.1%, and video analysis with Tracker (ω = 6.13(2) rad/s) agreed to better than 0.5%.
- **Instructors.** Reuse the same low-friction rotating platform for both uniform and uniformly accelerated motion by changing only how it is set into operation — α = 7.58(2) rad/s² from the orientation API against 7.614(8) rad/s² from the gyroscope, with all three methods agreeing to below 1%.
- **Administrators.** Treat no-code generation as an [[equity-in-ai-education|equity]] and cost lever: it removes both the programming barrier and commercial-software licensing, leaving a smartphone and a simple platform as the only requirements for customized [[physics-education|physics]] experiments.

## Limitations

- **Instrument validation, not an efficacy study:** the paper reports measurements from a single low-friction rotating platform driven first by hand and then by a hanging mass, so it establishes measurement agreement rather than learning gains.
- **No human participants:** no students or teachers used the lab in this study, so claims about focused attention, engagement, and reduced development time are argued from the design rather than measured in a classroom.
- **Device and sensor dependence:** accuracy rests on the browser's sensor-fusion pipeline and on one device's orientation API and gyroscope readings, so the sub-1% agreement figures cannot be assumed for every handset or browser.
- **The prompt template is validated only for this lab:** it is supplied as supplementary material and proposed as adaptable to other sensor experiments, but no second experiment is evaluated here.

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

Suñer, J. Ll., Muñoz-Pérez, F. M., Castro-Palacio, J. C., Monsoriu, J. A., Monteiro, M., Stari, C., & Martí, A. C. (2026). [*Studying circular motion with an AI-generated smartphone physics lab*](https://arxiv.org/abs/2607.28352).
