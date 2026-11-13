---
connected_resources: [clarity, writing-rhetoric-studies-in-the-loop]
title: Writing
created: "2026-08-09T10:44:35-04:00"
updated: "2026-11-13T00:25:09-05:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading]
pedagogy: [metacognition]
assessment: [ai-feedback-quality, automated-essay-scoring, peer-assessment]
discipline: [language learning, writing education]
level: [higher ed]
connected_faqs: [writing-instruction-ai-best-practices, developing-ai-tutor]
confidence: high
reviewed_by: [editor]
---

> **Writing** — the use of AI tools for writing instruction, [[assessment]], [[feedback]], and the study of how [[generative-ai|generative AI]] reshapes the writing process itself. Writing education is one of the most AI-affected domains, because LLMs excel at the very activities writing instruction centers on — text generation, revision, and evaluation. [[research-methods-aied|Research]] in this area spans [[automated-assessment|automated scoring]], AI feedback quality, writing-process support, second-language writing, academic integrity, and the deeper question of how AI changes what it means to write and to be a writer.

## Questions to Consider

- If writing is a way of thinking rather than only a product, what happens in your thinking that a finished AI-produced paragraph simply erases?
- A common framing is 'AI as a tool' or, at the opposite extreme, 'AI as a threat to authorship.' A third view is available: writing as a human-AI entanglement where agency is distributed. Which of these framings matches your own experience of writing with or without AI — and what does each framing imply for how you'd teach?
- Research found that delegating *deeper* layers of writing — reasoning and argumentative logic — harms your independent writing more than delegating surface layers like grammar. Think about your last AI-assisted piece of writing. Which layer did you actually delegate, and what does that predict about what you can now do on your own?
- AI writing feedback is not language-neutral: personalizing feedback with a student's race, language, or disability can shift it in stereotype-aligned ways, such as overpraising or withholding critique. If you've received or given 'personalized' AI feedback, how would you detect that a tool was softening its critique for some learners?
- The design guidance here is 'coaching, not composing' — have AI ask questions and critique outlines, but require the learner to produce prose first. Why might letting the learner draft before the AI intervenes protect ownership and judgment in ways a tool that writes the draft could not?
- One finding: students often say 'it's OK because…' to rationalize AI use, moving the issue from plagiarism policing toward ethics and AI literacy. If you were designing a writing course, how would you build honesty and [[ethics|ethical]] judgment about AI into it, rather than relying on detection or punishment?

## Introduction

Writing is not merely output but a cognitive, social, and rhetorical process. This is why AI's impact on writing education is so consequential and contested: AI can be a [[scaffolding|scaffold]] that helps students draft, revise, and receive feedback they otherwise wouldn't get, but it can also displace the [[cognitive-offloading|cognitive work]] — and the human audience — that make writing a learning activity. The research consistently frames AI in writing as a *human-centered complement* to, rather than a replacement for, the social and cognitive processes of writing. Where the focus is **English specifically** — [[english-education|English for Academic Purposes (EAP)]] and English language [[teacher-role|teaching]] (EFL/ESL/L2) — see the dedicated [[english-education]] concept page, which distinguishes English-specific and academic-register research from general writing and general language learning.

### How AI in writing education appears in the research

- **Automated essay scoring:** [[automated-essay-scoring]] systems like [[choi-anchor-aes-prompting-2025|anchor-based AES]] and [[aiawe-automated-writing-evaluation|AIAWE]] evaluate student writing at scale, raising questions about [[assessment-validity|construct validity]] and the reduction of writing to measurable features. For short argumentative writing (about 150–200 words) in Spanish, AI scoring agreement varies sharply by rubric dimension ([[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al., 2026]]): structure- and register-oriented items — introduction, conclusion, register, nominal agreement, subject–verb agreement — reached moderate chance-corrected agreement with human raters in the 2025 edition, while micro-level linguistic items (vocabulary, syntax, punctuation, connectors, argumentation) stayed in the fair-to-slight range. This suggests LLM assistance is most defensible for macro-level discourse features, and that low-level language conventions should keep deterministic tooling or [[human-in-the-loop-ai|human review]].
- **A quality-dependent tilt.** Out-of-the-box GPT and Llama graders agreed weakly with human raters (QWK 0.17–0.28 versus 0.72 between two humans), overscoring short, underdeveloped essays and underscoring longer, stronger ones for minor surface errors ([[llms-do-not-grade-essays-like-humans-2026|Mathew et al. (2026)]]).

- **Score more samples, not bigger models.** In a Grades 3–6 universal-screening study, LLM comparative-judgment scores converged with researcher rubrics (r = .59–.73) and averaging the three screening waves raised criterion validity (β = .68–.74 for ELA scale, AUC = .82–.86 for proficiency), while greater model capability or cost added little ([[llm-comparative-judgment-writing-screening-2026|Mercer & Reed (2026)]]).

Agreement is a property of the texts, not the scorer: [[automated-scoring-marketing-posts-agreement-2026|Li (2026)]] scored 60 student marketing posts with deterministic rules, an [[llm|LLM]] and an equal-weight hybrid — the LLM led at ICC(2,1) = .435 while the hybrid's .266 retained the rules' negative bias — and adding 15 low-quality anchors lifted the LLM to .846.

- **Writing feedback:** [[ai-feedback-quality|AI feedback quality]] research ([[genai-teacher-feedback-comparison|GenAI vs. teacher feedback]], [[care-full-feedback-genai|care-full feedback]], [[repeated-ai-writing-feedback-semester|repeated AI feedback]]) examines whether AI feedback improves writing and how it compares to human feedback. The PAIRR model ([[pairr-ai-peer-review-2025|Peer and AI Review + Reflection]]) combines AI with [[peer-assessment]] and finds AI feedback is most useful in a human-centered process. An 8-week quasi-experiment with 61 Chinese L2 writers ([[teacher-vs-ai-peer-feedback-l2-writing-2026|Tang et al., 2026]]) gives that human-centered claim a concrete shape: teacher feedback delivered far more items (316 versus 185 in the first task) and re-prioritized toward organization and argumentation, but its posted-revision advantage gave way from 4.06 to 2.73 points once a second task demanded structural change, while [[peer-assessment|AI-assisted peer feedback]] held a narrower, steadier focus and edged ahead (3.89 points, with a task-2 revision mean of 89.82 against the control's 88.35 — a small difference that did not reach significance). Neither mode moved syntactic complexity, so the authors argue for a hybrid "AI-Peer-Teacher" division of labor: AI for error marking and content guidance, peers for negotiating revisions, teachers for complex syntax and argumentation.
- **Pairing AI with peer feedback raises engagement and writing scores.** In a 10-week Chinese EFL course, adding ChatGPT feedback before peer review lifted behavioral, affective and cognitive engagement (partial η2 of 0.28 to 0.32) and improved all four IELTS writing dimensions, most on task [[learning-gains|achievement]] (d = 1.41) and lexical resource (d = 1.28) ([[ai-peer-feedback-l2-writing-engagement-2026|Liu (2026)]]).
- **AI feedback does not adapt to writing stages the way teachers do.** [[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al. (2026)]] found the teacher changed significantly on five feedback focus types between draft stages — Praise rising from 26.9% initially to 84.9% in final drafts — while the closest model moved on three types and the smallest on none, and no model reproduced the teacher's differentiation of higher- and lower-performing students.

- **Revision and dialogic positioning:** Where most writing-feedback research asks whether a revision improved the text, [[zhao-ji-appraisal-human-ai-revisions-2026|Zhao and Ji (2026)]] ask what stance the revised text takes. Coding 168 EFL argumentative essays with Appraisal Theory — first drafts, revisions after [[peer-assessment|peer feedback]], and ChatGPT-4 revisions of the same drafts — they found the three conditions statistically indistinguishable in how much Engagement language they used, but differently configured: peer-feedback revisions became more contractive (more Counter and Endorse, less Entertain), while the AI revisions kept a more balanced Contract/Expand mix that combined stronger counter-claiming with continued hedging. Their reading is that an AI revision is most useful as a contrast text students compare against their own revision rather than as a model answer, and that [[ai-feedback-quality|AI feedback]] on argumentation can improve prose while quietly closing down the writer's dialogic space — a dimension no current rubric captures.

- **Writing process support and agency:** [[agency-gap-ai-writing|Agency gap research]] and [[ai-writing-support-stage-ownership-2026|stage-ownership research]] explore how AI changes the writing process from planning to revision, and how students' [[agency]] is affected when AI participates at different stages.
- **Reasoning must connect to revision.** Maike, a Socratic chatbot that diagnoses arguments and targets questions without generating essay text, produced more idea-level dialogue (56% vs 44% of turns) than a control chatbot ([[favero-thinking-not-writing-chatbot-2026|Favero et al. (2026)]]). Transitions from discussed ideas to edits were positively associated with score gains, with about 40% of the 65 secondary students improving their essays.

- **Posthumanist perspectives:** [[posthumanist-ai-literacy-2025|A posthumanist approach to AI literacy]] reframes writing as a human-AI entanglement in which [[agency]] is distributed, challenging both uncritical anthropomorphization of AI and its dismissal as a mere tool — a relational rather than transactional view of AI literacy.

- **L2 / [[multilingual-learning|multilingual]] writing:** [[self-referential-l2-writing-llm-assessment|L2 writing assessment]], [[genai-linguistic-diversity-academic-writing|linguistic diversity research]], and [[ai-writing-support-stage-ownership-2026|stage-ownership research]] address how AI supports (or constrains) second-language and multilingual writers, including the risk of reinforcing Standard Academic English norms. The youngest L2 sample in the research comes from a nine-week GenAI-supported opinion-writing program with 301 Grade 5 and 6 students in Eastern China ([[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]). It raised ideal L2 writing self and academic buoyancy and improved rubric-scored language use while leaving organization and total scores unchanged, so AI support moved specific dimensions of writing rather than writing ability as a whole.

- **Bias in personalized feedback (Marked Pedagogies):** [[marked-pedagogies-linguistic-bias-writing-feedback|Tan et al. (2026)]] show that [[llm]] writing-feedback tools are not language-neutral: personalizing feedback with a student's race, ethnicity, ELL designation, learning disability, achievement, or motivation systematically shifts feedback in stereotype-aligned ways — including positive feedback bias and feedback withholding bias (overuse of praise, less substantive critique, assumptions of limited ability) for students marked by race, language, or disability, even when the essay is identical. This makes "[[personalized-learning|personalization]]" itself a bias vector that writing-feedback tools must audit and control.

- **Academic integrity:** Survey evidence complicates the policing frame directly: among 504 sociology students ([[student-genai-use-views-writing|Kuznetsov et al., 2026]]), 65 percent had used GenAI for coursework but only 3 percent to generate assignment text and 2 percent to produce a full draft, while fear of an academic offense was the second most common concern (28 percent) and roughly a quarter reported no guidance at all (19 percent) or guidance they found unclear. On this evidence the writing-education problem is ambiguity about permitted use, not widespread text generation. [[nash-preservice-teachers-classroom-ai-policies-2026|Nash and Burriss (2026)]] show how such ambiguity is produced at the classroom level. Coding 27 [[teacher-education|preservice]] English language arts teachers' own classroom [[educational-policy-ai|AI policies]], they found that 26 of 27 permitted some [[generative-ai|generative AI]] use but overwhelmingly on teacher-specified terms, with 22 of 27 allowing AI for ideation and brainstorming while disallowing AI composition of sentences, paragraphs or papers. Limits were rarely operationalized — one participant allowed AI "to get your thinking started" and declared "this is where the line should be drawn" without saying where — and many policies simultaneously prohibited submitting AI text and held students responsible for the AI text they submitted, a contradiction that leaves students unable to comply. Twenty-two of the 27 policies were silent on reading altogether, ceding AI-supported comprehension work to no guidance at all.
- **The boundary moves with the assignment, not the tool.** Across 192 practice records, editing was Responsible in 21 of 22, while drafting was Responsible in 11, Contested in 9 and Problematic in 13, so the assessed capability rather than the tool sets the category ([[tie-responsible-genai-use-academic-writing-review-2026|Tie, Gil Ortega and Zhao (2026)]]). Just four studies defined a boundary, designed an intervention around it and tested whether decisions aligned.

- **Policy diverges across five sites.** Interviewing 20 undergraduates, Kim and colleagues locate five distinct sites of AI policy — faculty intention, formal policy, student interpretation, self-policy, and practice — and catalogue 23 rationalizations, mostly ad hoc and post hoc, explaining why rules at one site rarely shape behavior at another ([[student-rationalization-ai-writing|Kim et al. (2026)]]).
- **Grading is where the guidance runs out.** In interviews with 24 university writing professors across the Chinese Mainland, Hong Kong, Macau and Singapore, six reported no institutional rule on whether they may grade student work with AI at all, and the consequence was colleagues who refuse on principle sitting beside colleagues who already do it ([[wu-lam-genai-writing-assessment-professors-2026|Wu and Lam (2026)]]).
- **Compliance can mask absent inquiry (academic erasure).** From 49 educator accounts, [[academic-erasure-complexity-ai-writing-2026|Nwagboso & Atuba (2026)]] name *academic erasure* — fluency that satisfies every surface criterion while bypassing the epistemic labor of argument — and trace its driver to assessment culture, where rubrics rewarding polish make AI use the rational response rather than misconduct.
- **The largest randomized test of structured ChatGPT writing support is in EFL.** [[wardat-chatgpt-efl-writing-rct-2026|Wardat and Akour (2026)]] randomized 300 Jordanian undergraduates across four universities and measured a 9.964-mark adjusted advantage over conventional instruction (partial η2 = 0.545), with no delayed post-test.

### Writing as thinking

Because writing is a cognitive process, AI-in-writing research connects to [[cognitive-offloading]] (does AI writing support bypass thinking?), [[metacognition]] (does AI feedback improve [[self-assessment]]?), [[self-regulated-learning]] (do students regulate their use of AI feedback?), and [[ai-literacy]] (can students evaluate AI-generated writing critically?). The [[critical-thinking-genai-scaffolding|critical-thinking scaffolding]] and [[ai-feedback-critical-thinking-writing-2026|AI feedback for critical thinking]] research show that the [[pedagogy|pedagogical]] value of AI in writing depends on whether it prompts reflection and judgment rather than answer-replacement.

Essay authorship tracked prompt volume in a synthesis task — 80% of the text written by the learner in the minimal-prompting cluster against 2% in the heaviest — while connective density correlated negatively with [[prior-knowledge|prior knowledge]] rather than prompt count (r = -.30, p = 0.007; [[cognitive-offloading-llm-synthesis-writing|Poquet et al., 2026]]).

A two-wave validation with Chinese EFL learners (EFA N = 305; CFA N = 342) separates six regulatory dimensions and adds *environmental regulation* — checking generated content, filtering suggested resources, and limiting reliance — a facet existing L2 writing scales had not carried ([[genai-srl-l2-writing-scale-2026|Wang, Zhang and Zhang (2026)]]).

[[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] sharpens this with a **layer-sensitive** account of [[cognitive-offloading|cognitive offloading]] in GenAI-assisted academic writing: delegating *deeper* layers (reasoning, argumentative logic) carries a stronger negative association with independent no-AI writing quality and [[critical-thinking|higher-order thinking]] than delegating surface layers (grammar, vocabulary). Open AI collaboration yielded the best supported product but the worst independent outcomes, while bounded support with reflection preserved competence — evidence that GenAI writing support is not uniformly harmful but its effect depends on which cognitive layer students delegate.

- **Gating AI output on prior engagement moves effort back to the writer.** With 398 participants, [[engage-to-unlock-productive-friction-genai-2026|Su et al. (2026)]] found writers composed for 28.02 minutes against 23.26 with an open [[conversational-ai|chatbot]], then evaluated passages faster (17.41 vs 22.21 minutes) at equal accuracy and no extra task time. Where Chen locates the cost in *which layer* is delegated, this design decides *when* the model may speak at all.

[[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]] extend this thinking to *multimodal* composing by younger writers. Having 60 [[k-12|Grade 5]] students externalize their narratives as AI-generated images and short videos produced sustained [[self-report-measures|self-reported]] gains in interpretation, analysis, evaluation, and explanation — the facets multimodal resemiotisation exercises — but **no gain in inference**. Making meaning visually explicit lowered the demand to infer implicit meaning from text, exactly the offloading mechanism Chen describes; only structured peer discussion restored occasions for inference. The study cautions that [[multimodal|multimodal AI]] composing helps young writers reflect on clarity and coherence while potentially skimming off the inferential work that text-only writing preserves — a design consideration for writing instructors pairing AI [[visualization|visuals]] with peer [[peer-assessment|feedback]].

A dimension-specific pattern recurs across this literature, and it is a useful diagnostic. In the primary-level L2 writing program, emotional and behavioral [[student-engagement|engagement]] rose while cognitive and metacognitive engagement did not, and the authors name diminished self-monitoring during writing as an explicit risk of GenAI support ([[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]). Enjoyment and on-task activity are therefore not evidence that deeper processing is happening — the same distinction the offloading research draws when it asks which layer of cognitive work a student has delegated.

A 2026 [[meta-analysis-systematic-review|meta-analysis]] ([[genai-writing-performance-meta-analysis-2026|Teng, 2026]]) of 11 study-level effects drawn from 31 studies reinforces the diagnosis from the opposite direction. It reports a large average advantage for GenAI-supported writing instruction (g = 0.80) but heterogeneity high enough that a new implementation could plausibly show no benefit at all, and the only robust moderator was risk-of-bias classification rather than any pedagogical feature — study quality, not teaching design, explained most of the variance. The same synthesis finds GenAI consistently stronger on lower-order features (grammar, lexical diversity, sentence fluency) while higher-order effects on argumentation and coherence remain inconsistent, which is precisely the layer gap at the center of the design problem.

### Designing AI writing support: coaching, not composing

Because writing has no single correct answer, AI writing tools require a different design from answer-verifiable tutors. The design guidance (see the worked **AI writing coach** example in the FAQ on [[developing-ai-tutor|Designing an AI Tutor]]) centers on preserving authorship and [[evaluative-judgment|evaluative judgment]] rather than producing finished text:

- **Track writing capabilities, not just essay scores.** A writing coach's [[student-modeling|learner model]] can track argument (thesis specificity, claim–evidence alignment, counterargument), organization, evidence integration, revision, and style — so feedback targets capabilities that persist across essays.
- **Ground feedback in the assignment.** Retrieve the actual prompt, rubric, course readings, citation and genre conventions, and AI-use policy so feedback references the specific assignment rather than inventing generic expectations.
- **Treat writing stages differently.** AI involvement at planning reduces perceived ownership less than at drafting, and AI-generated drafting produces the largest ownership decrease. So a coach can ask questions and critique outlines at planning while requiring the learner to produce prose first at drafting.
- **Make feedback prioritized and reflective.** Each round can offer one strength to preserve, one high-impact issue, one question requiring the writer's judgment, and one concrete revision goal — and the coach should ask learners to evaluate whether they agree with a suggestion, developing [[evaluative-judgment|evaluative judgment]] rather than obedience.
- **Preserve authorial voice and guard against homogenization.** The coach should distinguish errors, clarity issues, rhetorical choices, and style preferences — and not automatically "correct" the latter, especially for [[multilingual-learning|multilingual]] writers and non-standard rhetorical styles.
- **Teach the process, not only the tool.** A five-week process–genre unit that built planning, genre analysis and revision around AI-supported multimodal writing raised all three outcomes in a 32-student seventh-grade quasi-experiment (informative text r = 0.66; multimodal r = 0.84; AI-assisted writing r = 0.86) ([[gunay-ozden-process-genre-ai-writing-2026|Günay and Özden, 2026]]).

Two recent syntheses qualify how well this design guidance is followed in practice. A review of 23 empirical customization studies ([[customizing-ai-writing-pedagogy-systematic-review-2026|Luo, 2026]]) finds that although goals have moved toward writing processes and higher-order skills, the dominant technical route remains [[prompt-engineering|prompt engineering]] (13 of 23 studies) aimed at optimizing output quality, with [[learning-theories|learning theory]] confined to the interface so the system behaves "largely theory-agnostic" — a mismatch that helps explain the [[cognitive-offloading|overreliance]] and superficial revision the same studies report. Its reframing is to treat customization as architecture rather than wording: sequencing stages, withholding answers, and building in revision loops. A structured five-part workflow tested over 11 weeks with 53 Saudi EFL undergraduates ([[human-ai-collaboration-academic-writing-2026|Alshehri et al., 2026]]) shows the alternative in practice — students frame problems and design prompts, draft, revise, verify claims and citations against scholarly databases, and regulate their own reliance, logging what they accept or reject and why. Writing proficiency and digital [[critical-thinking|critical thinking]] rose together in that condition (15.23 versus 11.91 and 89.84 versus 56.18 at posttest) while the no-AI control barely moved, though the single-site, partly [[self-report-measures|self-reported]] result is a preliminary upper bound rather than an established effect.

Screening 51 second-language studies of GenAI feedback found that writing-quality measures were often unrelated to the feedback the model had been asked for, and that pairing AI with teacher feedback beat either source alone ([[genai-l2-written-feedback-scoping-review-2026|Crosthwaite & Sun (2026)]]). Those studies are overwhelmingly English, at 46 of the 51, with Chinese and Arabic the dominant learner first languages.

This coaching-not-composing stance is the writing-domain expression of the overarching "[[coach-not-crutch-ai-writing|coach over crutch]]" boundary: identify the cognitive activity that produces learning (planning, drafting, evaluating, revising) and design the AI to support it without taking it away from the learner.

### Connections

Writing education connects to [[automated-essay-scoring]], [[ai-feedback-quality]], [[academic-integrity]], [[cognitive-offloading]], [[ai-literacy]], [[language-learning]], [[formative-assessment]], [[peer-assessment]], [[metacognition]], [[self-regulated-learning]], and [[higher-ed]]. It is a domain where AI's capabilities and risks are both highly visible, making it a rich site for studying how AI transforms pedagogy, [[assessment]], and the very nature of authorship and [[agency]].

## What GenAI demands of the task

Al Nafjan (2026) proposes the Rigor–Commitment Alignment Framework (RCAF), which locates engagement in the writing task and the teaching around it rather than in the tool ([[al-nafjan-genai-eap-writing-engagement-2026]]). Academic rigor is the demand a task places on sustained cognitive effort and disciplinary reasoning, and the framework splits it into cognitive demand, epistemic authenticity, and performance accountability. Teacher commitment is defined narrowly, as commitment to students' learning enacted through instructional responsiveness, relational support, and [[scaffolding|critical scaffolding]], not as a trait a teacher has or lacks. The author is explicit that the RCAF is propositional and has not been empirically validated, so it is a design vocabulary for writing programs rather than a tested effect.

For task design the claim is that rigor and commitment interact rather than add. High demand with thin support is predicted to push students toward concealment and detection games, while warmth without demand lets fluent output pass for learning. Only the high-demand, high-support configuration is predicted to produce deep engagement, with [[evaluative-judgment|evaluative judgment]] doing the work of deciding when output is useful, insufficient, or misleading. Because GenAI can produce acceptable academic prose, the framework gives writing assessment a specific obligation: require visible drafting and revision so that performance stays tied to the thinking it is supposed to represent.

## Implications for writing instructors

- **Frame AI as a complement, not a replacement, for the writing process.** The research consistently treats AI as a scaffold for drafting, revision, and feedback while protecting the cognitive work and human audience that make writing a learning activity — [[coach-not-crutch-ai-writing|coaching over crutch]].
- **Make GenAI something students interrogate rather than submit.** In Alam and Jackson's first-year business-analyst module, GenAI was permitted inside boundaries that barred submitted generated text and AI-formatted reference lists, and where students used it some contested counterarguments and rejected drafts rather than accepting them. The authors read the tool as well fitted to counterarguments, alternative structures and language fixes, and poorly fitted to the judgment and appraisal of evidence the assessment was trying to grade ([[alam-process-oriented-collaborative-essays-2026|Alam & Jackson, 2026]]).
- **Use AI feedback within a human-centered process.** [[pairr-ai-peer-review-2025|PAIRR]] finds AI feedback is most useful combined with peer review and reflection; design feedback loops that keep the instructor and peer audience central.
- **Students want the human at the high-stakes end.** [[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli et al. (2026)]] found 81.7 percent of 93 undergraduates preferred human scoring for a final paper worth 40 percent of the grade, trusted AI for grammar and mechanics but not [[creativity|creative]] writing, and wanted AI scoring reviewed by a human.
- **Audit automated feedback for bias.** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]] shows LLM feedback shifts in stereotype-aligned ways when personalized with student attributes — monitor for positive/withholding bias, and be explicit that personalization can be a bias vector.
- **Guard the cognitive work of writing.** Watch for [[cognitive-offloading|over-reliance]] that bypasses planning, revision, and self-assessment; use AI at chosen stages ([[ai-writing-support-stage-ownership-2026|stage-based ownership]]) to protect student agency.

- **Design for empowerment rather than enforcement.** A PLS-SEM study of 327 Chinese EFL undergraduates
  ([[empowerment-ai-assisted-deep-revision-efl-writing-2026|Li & Zhang, 2026]]) tested the two levers writing instructors actually
  hold and found only one of them works. AI [[prompt-engineering|prompting]] literacy strongly predicted perceived competence,
  psychological safety, and [[motivation|intrinsic motivation]], and all three psychological needs partially mediated its link to
  deep revision engagement, with intrinsic motivation the strongest single driver of deep revision. External mandates had no direct
  effect at all. The practical translation is that requiring deep revision does not produce it — the enforcing requirement may be
  needed to make revision happen at all, but the depth comes from building students' prompting capability and the intrinsic
  motivation and psychological safety that follow from it.

- **Address academic integrity constructively.** Move from policing AI use toward building [[ai-literacy]] and ethical-use framing that lets students use AI without unintentional misconduct.

- **Detection is not an integrity strategy for writing.** [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] argue detector scores cannot meet the balance-of-probabilities standard integrity cases require and that the human-or-AI dichotomy misreads work created *with* rather than *by* AI, recommending institutions move budget from detection and surveillance toward [[assessment|assessment design]] and [[ai-literacy]].

- **"Feedback and the grade are independent outputs."** They are not, and the order matters: told a grade that contradicted the work, **all 22** benchmark models wrote feedback whose tone followed the told grade, and for **eight** the shift per point was at least as large as the shift that came with the work's quality. The measure is a word rule validated on tutoring replies, so it reads tone rather than substance. [[porcaro-ai-grading-benchmark-2026|Produce or check the grade before the feedback is written]].

- **"Anonymous marking is only a fairness gesture."** It is also an experimental control, and removing it moved marks. Answers graded with a true or swapped attainment label in the prompt differed by **0.28 to 0.75 points** on a ten-point scale on every model tested, and the shift ran through the student description rather than the work (pooled **rho = +0.84**). A grader told the student's record is not marking the essay alone. [[porcaro-ai-grader-reliability-2026|Withholding learner context is the automated equivalent of anonymous marking]].

- **"Asking for a paragraph and asking for an essay are the same kind of help."** Trace data separates them. Across **361 logged messages** from **77** college essay writers, requests that handed over planning, drafting and revision at once were the largest category: **137** such queries from more than half the participants. Within it, **20** asked for a whole essay, and **15 of the 77 (19.5%)** submitted essays with no typed words of their own. Asking for a paragraph around an idea was the smallest category, at **10** participants. [[jelson-students-chatgpt-essay-writing-2026|Coding every query against the writing process]] shows what a finished essay cannot.

The most complete classroom account of that redesign is the PAIRR deployment. [[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman et al. (2026)]] report 13 sections of 10 writing-intensive courses and 654 students in 2024, spanning developmental writing, first-year composition, professional writing and STEM writing courses. Students read about language models first, then exchanged peer feedback, and only then prompted a chatbot for rubric-driven feedback. The prompt said "Do not rewrite my paper for me." The authors' argument for the sequence is what the course can control: a model positioned as one peripheral voice cannot take over the draft without the instructor's rubric noticing.

- **Separate ideation from expression.** Webb-Davies, Ratner and Bassett propose an ungraded, observed capture of reasoning — speech, notes or a map — before a graded submission written at home with AI permitted, on the argument that prose production and disciplinary reasoning are separable constructs ([[webb-davies-voice-first-written-assessment-2026|Webb-Davies et al., 2026]]).

- **Assess the process, not only the essay.** Winstone, Gravett and Elkington propose keeping the task and adding windows into how it was built — drafts, logs, reflection on decisions — with rubric language that credits revision and error; their worked example shortens a 2,500-word essay to 1,500 words plus 1,000 words of process evidence so marking stays flat ([[black-box-assessment-winstone-2026|Winstone et al., 2026]]).

## Common Misconceptions

**"AI writing support is just faster writing."** Writing is a process of thinking, not only an output, which is why AI can displace the very mental work that makes it a learning activity. The design guidance that follows is *coaching, not composing*: have the system question and critique outlines while the learner produces the prose. A tool that generates the draft has removed the thinking the assignment existed to develop, however good the draft is.

**"Better writing assessment needs a bigger model."** It needs more samples. In a Grades 3–6 universal-screening study, LLM comparative-judgment scores converged with researcher rubrics at **r = .59–.73**, and averaging the **three** screening waves raised criterion validity to **β = .68–.74** — an improvement from design rather than scale. Reaching for a larger model when the reliability problem is sampling is the wrong lever.

**"AI feedback and peer feedback are substitutes."** They combine. In a 10-week Chinese EFL course, adding ChatGPT feedback *before* peer review lifted behavioral, affective and cognitive engagement (partial η² of **0.28 to 0.32**) and improved writing scores across the board. The sequencing is doing work — the AI pass readied students for the peer pass rather than replacing it.

**"Students act on AI feedback when it is offered."** Uptake is selective. [[biology-undergraduates-ai-enabled-feedback-scientific-writing-2026|Weston and Long (2026)]] tracked two undergraduate [[biology-education|biology]] teams revising a proposal introduction against instructor-built AI feedback: 10 of 22 comments were addressed, deletions outnumbered additions, and the comments requiring students to judge coherence or claim support were ignored entirely.

**"A model can stand in for the teacher's feedback pattern."** It has not done so in the evidence. Tracking one teacher across draft stages found significant movement on **five** feedback focus types — with *Praise* rising from **26.9%** in initial drafts to **84.9%** in final ones — while the closest model moved on three and the smallest on none, and no model replicated the pattern. Teacher feedback reallocates emphasis by draft stage; model feedback tends to hold its distribution. Treating the second as equivalent loses the trajectory.

## Connected Concepts

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[academic-integrity]]
- [[cognitive-offloading]]
- [[ai-literacy]]
- [[language-learning]]
- [[higher-ed]]
- [[metacognition]]
- [[llm]]
- [[generative-ai]]
- [[formative-assessment]]
- [[peer-assessment]]
- [[self-regulated-learning]]
- [[student-experience]]
- [[feedback-literacy]]
- [[feedback]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[assessment]]
- [[agency]]
- [[reflection]]

## Connected Articles
- [[favero-thinking-not-writing-chatbot-2026]] — Thinking Is Not Writing: Designing AI Chatbots to Connect Reasoning and Revision

- [[gunay-ozden-process-genre-ai-writing-2026]] — A 32-student quasi-experiment: process–genre instruction raised informative, multimodal and AI-assisted writing (Günay & Özden 2026)
- [[wu-lam-genai-writing-assessment-professors-2026]] — 24 writing professors on grading with AI: benefits for feedback, drift in scores, no institutional rule
- [[genai-l2-written-feedback-scoping-review-2026]] — 51-study scoping review: prompt transparency gaps and why AI plus teacher beats either alone
- [[nash-preservice-teachers-classroom-ai-policies-2026]] — Preservice teachers' classroom AI policies: tensions and entanglements
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[llm-comparative-judgment-writing-screening-2026]] — Validity of Large Language Model Comparative Judgment for Universal Writing Screening
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Layer-sensitive cognitive offloading in GenAI-assisted writing (Chen 2026)
- [[coach-not-crutch-ai-writing]] — AI writing tools can improve writing skill despite reducing effort (Lira et al. 2025)
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[pairr-ai-peer-review-2025]] — Peer and AI Review + Reflection (PAIRR)
- [[posthumanist-ai-literacy-2025]] — A Posthumanist Approach to AI Literacy
- [[choi-anchor-aes-prompting-2025]] — Anchor-Based Automated Essay Scoring
- [[aiawe-automated-writing-evaluation]] — AIAWE: Automated Writing Evaluation
- [[agency-gap-ai-writing]] — The Agency Gap in AI-Supported Writing
- [[ai-writing-support-stage-ownership-2026]] — From Planning to Revision: AI Writing Support at Different Stages
- [[genai-teacher-feedback-comparison]] — Comparing Generative AI and Teacher Feedback
- [[student-rationalization-ai-writing]] — "It's OK Because...": The Wild West of Student Rationalization
- [[care-full-feedback-genai]] — Care-Full Feedback Approaches
- [[self-referential-l2-writing-llm-assessment]] — Self-Referential L2 Writing Assessment
- [[becerra-aicofe-feedback-2026]] — AI Peer Feedback Systems
- [[repeated-ai-writing-feedback-semester]] — Student Evaluation of Repeated AI Feedback
- [[ai-feedback-critical-thinking-writing-2026]] — Using AI-Generated Feedback to Improve Critical Thinking
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: linguistic biases in personalized automated writing feedback
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education (Bassett et al. 2026)
- [[academic-erasure-complexity-ai-writing-2026]] — Academic erasure: the disappearance of complexity under AI-supported writing
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — Multimodal AI composing and critical thinking in primary writing (Lu et al. 2027)
- [[student-genai-use-views-writing]] — Student use of and views on GenAI for writing (Kuznetsov, Sheely & Baker 2026)
- [[genai-writing-program-primary-l2-motivation-engagement]] — A GenAI-supported writing program for primary L2 motivation, engagement and performance (Lu et al. 2026)
- [[automated-scoring-marketing-posts-agreement-2026]] — Agreement and error in automated scoring of student marketing posts
- [[empowerment-ai-assisted-deep-revision-efl-writing-2026]] — Prompting literacy and intrinsic motivation drive deep revision while external mandates have no direct effect (Li & Zhang 2026)
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[teacher-vs-ai-peer-feedback-l2-writing-2026]] — Teacher feedback vs. AI-assisted peer feedback as heterogeneous L2 scaffolds in an 8-week quasi-experiment (Tang et al. 2026)
- [[genai-writing-performance-meta-analysis-2026]] — Meta-analysis of GenAI writing performance: large pooled effect, fragile magnitude, methodology over pedagogy (Teng 2026)
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — Systematic review of AI writing customization and the theory–design mismatch (Luo 2026)
- [[human-ai-collaboration-academic-writing-2026]] — Structured human–AI collaboration in academic writing and digital critical thinking (Alshehri et al. 2026)
- [[zhao-ji-appraisal-human-ai-revisions-2026]] — Human and AI revisions of the same draft take different dialogic stances: peer feedback closes dialogic space, AI revision keeps it balanced (Zhao & Ji 2026)
- [[engage-to-unlock-productive-friction-genai-2026]] — Engage-to-Unlock: gating AI output on prior engagement redistributed effort to writing without costing time or accuracy (N = 398)
- [[genai-srl-l2-writing-scale-2026]] — A six-dimension GenAI-SRL scale for L2 writing, with environmental regulation (tool governance) as a distinct dimension
- [[ai-peer-feedback-l2-writing-engagement-2026]] — Pairing AI with peer feedback raises engagement and writing scores
- [[when-students-prefer-ai-scoring-feedback-2026]] — Students want the human at the high-stakes end
- [[biology-undergraduates-ai-enabled-feedback-scientific-writing-2026]] — Biology Undergraduates' Use of AI-Enabled Feedback to Revise Scientific Writing: Recipience and Barriers (Weston and Long 2026)

- [[tie-responsible-genai-use-academic-writing-review-2026]] — Responsible student use of generative AI in academic writing: a scoping review of boundaries, educational approaches, and evidence gaps
- [[porcaro-ai-grading-benchmark-2026]] — Beyond agreement: 22 prompted graders meet probes whose right answer is known, and most of them can be talked up (Porcaro 2026)
- [[porcaro-ai-grader-reliability-2026]] — Learner context changes an LLM grader's marks on identical work, measured in a within-item ablation on six models (Porcaro 2026, Paper VI)
- [[jelson-students-chatgpt-essay-writing-2026]] — Delegation measured from traces: 137 whole-task queries, 15 students submitting essays with no typed words (Jelson et al. 2026)
- [[al-nafjan-genai-eap-writing-engagement-2026]] — Rigor and teacher commitment as the two dimensions of GenAI-era writing engagement
- [[stillman-dear-gemini-pairr-critical-ai-literacies-2026]] — 13 sections, 10 courses, 654 students: the flagship PAIRR deployment and its feedback-only prompt
- [[alam-process-oriented-collaborative-essays-2026]] — Process-oriented collaborative essays: graded iteration and collaboration, with GenAI permitted inside boundaries (Alam & Jackson 2026)
- [[webb-davies-voice-first-written-assessment-2026]] — A two-stage written assessment that secures reasoning under observation before grading a home-written submission, with a conditional viva for unclear links (Webb-Davies, Ratner & Bassett 2026)
- [[black-box-assessment-winstone-2026]] — Black Box Assessment: process windows, error as evidence, and integrity through visibility (Winstone, Gravett & Elkington 2026)
