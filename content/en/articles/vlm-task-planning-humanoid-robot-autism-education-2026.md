---
title: Visual Task Modeling and Automated Planning for Humanoid Robots in Education of Individuals with Autism Spectrum Disorder
created: "2026-10-21T09:30:00-04:00"
updated: "2026-10-21T09:30:00-04:00"
type: article
sources: ['raw/papers/vlm-task-planning-humanoid-robot-autism-education-2026.md']
confidence: high
published: "2026-10-19"
page_kind: [evaluation]
research_method: [system development]
discipline: [cs education]
level: [special education]
audience: [instructors, educational technology developers, researchers]
pedagogy: [embodied-learning, scaffolding, problem-solving]
technology: [educational-robotics, multimodal, llm, generative-ai, prompt-engineering]
assessment: []
methods: [ai-ed-evaluation]
foundations: [teacher-role]
ethics: [assistive-technology, neurodiversity, inclusive-learning, accessibility]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-21"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** In [[educational-robotics|robot-assisted education]] a robot must understand how a task is completed before it can guide a student through it. This paper presents a solver that uses a [[multimodal|vision–language model]] to read photographs of a Shoebox Task — a visually structured activity used in the education of individuals with [[neurodiversity|autism]] spectrum disorder — and to plan actions a Nao humanoid can execute or demonstrate. Its two additions over earlier work are a PDDL validator that forces regeneration when the [[llm|large language model]] falsely refuses, and an image-comparison step that detects a sequence of executed actions rather than a single action. Across six Shoebox Tasks and ten runs per task, ChatGPT-4o responded in 8.5 s to 12.0 s and ChatGPT-5 in 40.7 s to 86.4 s, with comparable correctness. The evaluation covers the solver alone — no students participated — so the results support claims about plan generation, not about learning.

## Key Findings
1. **The planner is the model itself.** No external PDDL planner: a photograph, a general PDDL domain, an example problem and analysis rules yield a problem instance with the action plan as a comment.
2. **Both model versions were accurate on initial task models.** Across six tasks and ten runs each, ChatGPT-4o produced one semantic error, one incorrect action plan and one refusal; ChatGPT-5 produced one semantic error and one naming inaccuracy.
3. **Response time, not correctness, separated the models.** ChatGPT-4o answered in 8.5 s to 12.0 s; ChatGPT-5 required 40.7 s to 86.4 s, approximately six times longer on average.
4. **Three of six tasks ran clean under both versions.** Three out of six tasks were completed without any errors in all ten runs with each model.
5. **One symbol was misread persistently.** In the shapes-angles task all ten ChatGPT-4o runs labeled the object and target marked with a hexagon as a pentagon, yet the correct goal configuration was still inferred.
6. **Accuracy fell with task size.** Tasks with up to four items and four targets were solved successfully; in one larger task, three empty slots among nine were repeatedly misidentified as additional items.
7. **Failures concentrated in state updates.** For nine-item tasks several failures involved incorrect plan updates, and refusals were the only source of invalid PDDL output.

## From photograph to plan
The system is a perception–analysis–action loop in Python, driven by a Vision–Language Model. Its inputs are a start image, a general PDDL domain file, an example problem file, and a prompt of analysis rules. The [[llm|model]] detects which objects are movable and which are static containers, then infers the intended distribution of objects from the visual structure alone. The domain defines three object types — items, initial container, and targets — and two Pick&Place actions: *move to target*, which transfers an item to its designated target, and *move to container*, which returns a misplaced item. Objects get deterministic names built from a descriptive label and an index (for example, blue ball 3), which is what lets the solver track them across state updates. Generated files are validated against the domain, but [[guardrails|false-positive refusals]] such as "I'm sorry, I can't assist with that" cause validation failure, and the request is simply repeated.

## Tracking the actions a student has already performed
The action plan is an unordered set, so the robot cannot assume the student worked through it in sequence. After one or more actions, a new photograph is captured and the model receives the latest PDDL file, the image of the previous configuration, and the image of the current configuration. It re-identifies objects under the strict naming rules, checks whether the new state is valid, decides which planned actions were executed, removes them from the remaining plan, and updates the predicates; an invalid state is reported as a failure. On the Nao v5 humanoid each action maps either to robot manipulation or to [[scaffolding|robot-guided instruction]] — the robot acts as a [[teacher-role|teacher]], suggesting the next step, demonstrating an action, or alerting the student to an incorrect one. Manipulation mode covers easily grasped objects such as balls and cubes; tasks needing fine manipulation, such as coins, run in voice-guidance mode.

## What the experiments measured
This is a [[research-methods-aied|system-development]] study and says so: experiments covered exclusively the solver component — the visual analysis, the generated task model and its PDDL instances, and the validity of the action plan — and all suggested actions were executed manually, without robot assistance. No students or classrooms took part, so nothing here measures [[learning-gains|learning outcomes]], engagement, or behavior. Images were captured with a mobile phone and uploaded through a web interface, and the solver used the OpenAI Python API with ChatGPT-4o and ChatGPT-5 at default parameters. Six Shoebox Tasks based on matching colors, shapes, and numbers, each involving three or four items, were tested over ten iterations, and every run was scored against four criteria: semantic errors, inaccurate names, syntactic errors, and model refusals. The results are an evaluation of the solver rather than of instruction.

## Where accuracy breaks down
Task size decided the outcome. Tasks with up to four items and four targets — matching by color, shape, number, or symbol — were solved successfully, with one exception: the task where three coins marked with triangle, square, and hexagon had to be matched to three targets marked by pair (number of angles, symbol). There the hexagon was repeatedly misclassified as a pentagon, yet the goal configuration was still inferred correctly because the other two coins were classified correctly. Tasks containing five to nine items generally produced a correct initial model and action plan, but errors became more frequent during state updates, especially for tasks containing nine items: in one task the initial container consisted of nine slots holding six coins, and the three empty slots were repeatedly misidentified as additional items. In some failures executed actions were not identified; in others the actions were detected but not removed from the plan.

## What this means for practice
- **Instructors.** Photograph the task before the session and after each student action, then let the solver compare the two images — the interval is the only input from which it can tell which steps were completed and alert an incorrect one.
- **Educational technology developers.** Validate generated PDDL against the domain and re-request on refusal instead of surfacing the error; refusals were the only source of invalid output here, and correct results usually followed one or two retries.
- **Researchers.** Scope claims to tasks of up to four items and to the two model versions tested; failures cluster above that size.

## Limitations
- **No learner study.** Experiments covered only the solver component, with all actions executed manually and without robot assistance, and no students participated, so no learning, engagement, or behavioral outcome is reported.
- **One robot platform, and not its own camera.** The interface was implemented for a Nao v5 humanoid, and the Nao's onboard camera is not used: images come from a mobile phone or a PC-connected camera.
- **Small run counts.** Six tasks of three or four items were tested over ten iterations each, and the broader set of five to nine items is smaller still, so failure counts rest on a handful of runs.
- **One task family.** Only Shoebox Tasks were covered, up to nine objects with each target matching exactly one item; fine-motor tasks were excluded, and manipulation mode was restricted to easily grasped objects.
- **Tool generation and vintage.** Results come from ChatGPT-4o and ChatGPT-5 via the OpenAI Python API at default settings with no explicit temperature or reasoning configuration; the paper states no data-collection window, so the numbers compare those two model versions only.

## Citation
Kudlackova, L. (2026). [*Visual Task Modeling and Automated Planning for Humanoid Robots in Education of Individuals with Autism Spectrum Disorder*](https://doi.org/10.1109/AICCONF69182.2026.11600719). 2026 4th Cognitive Models and Artificial Intelligence Conference (AICCONF), 1-6.
