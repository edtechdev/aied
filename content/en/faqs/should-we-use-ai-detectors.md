---
title: "Should We Use AI Detectors?"
created: "2026-09-17T09:21:00-04:00"
updated: "2026-10-31T10:05:00-04:00"
connected_faqs: [redesign-assessment-ai-era, course-ai-policy, reduce-ai-cheating, addressing-common-misconceptions-ai-education]
weight: 85
foundations: [academic-integrity]
assessment: [ai-detection, assessment-validity]
ethics: [equity-in-ai-education, trust, privacy, ai-use-disclosure]
level: [higher ed]
audience: [instructors, administrators, assessment professionals]
institutions: [educational-policy-ai, governance]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-31"
    agent: hermes-agent
---

A detector score comes back flagged on a submission you have already read twice, or a colleague wants the tool switched on before the next essay deadline, or an integrity panel asks you to defend a finding that rests on a percentage. Someone in the room will say the score is only one piece of evidence. What you are deciding is narrower than the argument that follows it: whether this number can carry weight in a misconduct process at all, and what you will put in its place if it cannot.

The short answer you can repeat in the meeting: a detector score cannot ground a finding, because it cannot be validated against ground truth, cannot be cross-examined, and does not meet the balance of probabilities. Its errors repeat in patterns, and they fall hardest on honest editors and on students writing in a second language. Ask instead whether a student can demonstrate understanding of what they submitted, and fund that capacity.

## The short version

**1.** Write into policy that detector output never triggers a consequence, never stands alone, and never grounds a finding. Put it in the policy document itself, where a panel can find it after the memo is gone.

**2.** Replace "did you use AI?" with "can you show me you understand this?" Use a short conversation, an early draft, or a recorded explanation.

**3.** Put one authenticated or unaided step into every high-stakes task, sized to the marking capacity you actually have.

**4.** Ask the vendor for error rates in writing, then try to reproduce them on your own submissions. Vanderbilt tried this and disabled the tool.

**5.** Move the money from a detection license to verification capacity and guidance. That is where the documented faculty complaint points.

## Decide whether you have a finding or a question

These are two different jobs and they run on different evidence. A finding requires evidence meeting the balance of probabilities, and a detector score does not get there on its own. It cannot be validated against ground truth, because in real submissions nobody knows how the text was produced, so validation turns circular and the false-positive and false-negative rates only mean anything inside a controlled test. The tool publishes no thresholds and no training data and permits no independent replication, which leaves a flagged student with nothing to answer and you with nothing to explain ([[bassett-ai-detectors-education-2026]], [[teichmann-detecting-undetectable-misconduct-2026]]).

Combining the score with other signals does not repair this. Linguistic markers, style comparisons, [[llm]] judgments and a student's silence still add up to less than the standard. Silence is the one to watch: students retain the right to refuse, and refusal does not tip the scales. What you can legitimately ask is whether the student can demonstrate the [[learning-gains|learning]] the [[assessment]] claims to measure, and an oral response answers it in a way a similarity score never will ([[bassett-ai-detectors-education-2026]]).

The binary is also the wrong question. Students' work is frequently created with AI, across a hybrid continuum, and policies that say "in assessment" rarely define when an assessment begins, which leaves the judgment to whoever reads the file first ([[bassett-ai-detectors-education-2026]]).

There is a reference-data problem underneath all of it. Detectors are trained and tested on pre-generative-AI human writing, and Turnitin's own validation used 700,000 pre-2019 papers. That corpus is assumed to represent current student prose, an assumption nobody has verified and one that shifts with every model release ([[bassett-ai-detectors-education-2026]]).

## Look at the accuracy numbers before you cite one

The strongest controlled test in the knowledge base examined 642 published English abstracts across four domains and two time periods. At a 0.50 threshold, two commercial detectors flagged guideline-compliant light AI editing at 38-80%, flagged unmodified 2023-25 originals at 9-15% (non-[[stem-education|STEM]] far above STEM, p<0.001), and, once text had been run through a humanizing service, caught fewer than 4% of AI-labeled rewrites, a false-negative rate above 96%. The authors call this an integrity catch-22: the students who disclose and edit lightly are the ones the tool catches, and the students who set out to evade it are not. Their recommendation is explicit, that detector scores should never serve as standalone misconduct evidence ([[karr-ai-detection-humanization-2026]]).

Reviews have stopped trying to rank the tools at all. A systematic review of 90 studies published between 2020 and 2026 reports that false-positive rates vary so widely across tools and evaluation settings that direct quantitative comparison is impossible, naming algorithmic and language bias, limited contextual understanding, surface-level linguistic features and insufficiently diverse training data among the causes ([[maghami-ai-detection-false-positives-2026|Maghami, Ho and Camilleri (2026)]]). The remedies it names are procedural rather than technical: transparent detection practice, human review, AI literacy, clear institutional policy and an accessible appeal route.

An independent [[benchmark]] reaches the same place from a different direction. None of 14 tools reached 80% accuracy, and simple paraphrasing, minor editing or a humanizing service roughly halves even that performance. At realistic base rates, false positives outnumber true positives ([[teichmann-detecting-undetectable-misconduct-2026]]).

Catch rates on wholesale generation are worse than the headline error rates suggest. In a covert field study, researchers injected wholly AI-generated submissions into a live online [[summative-assessment|examination]] system across five psychology modules: 94% went undetected, and the AI work on average outscored the real students. Contract cheating had already shown the same structural problem, since it leaves no reliable trace to find ([[teichmann-detecting-undetectable-misconduct-2026]]).

Accuracy also moves with the task. When researchers tested whether [[generative-ai|generative AI]] can detect its own output, results were dependable for programming and longer reflective writing and poor for short answers, where the model often rated its own text as more human-like than authentic student work. Minor prompt variations sharply reduced accuracy ([[llm-detecting-llm-generated-content-education]]). A threshold that holds for one assignment will fail on another, and you will not know which until the appeal.

Then there is expiry. A 2026 study reframes detection as an adaptation problem: a [[ren-test-time-adaptation-ai-text-detection-2026|black-box rewriting attack]] dropped the commercial detector Pangram to a balanced accuracy of 63.5% and an AI recall of 27.0%, and a detector trained on Llama 3.3 70B Instruct reached only 55% recall on abstracts from a newer model. Test-time adaptation recovered to 94.4% balanced accuracy and 99% recall on that same text, which is the encouraging half. The same paper shows what the fix costs: as simulated LLM adoption spreads, a fixed supervised detector's recall on human text decays from 85.9% to 73.4% across the decade. Its expiry condition is stated bluntly, that balanced accuracy cannot exceed half of one plus the total-variation distance between the human and AI distributions, so convergence of the two would defeat every learning-based detector. A validated score holds until the models move, and they move every few months ([[ren-test-time-adaptation-ai-text-detection-2026]]).

The comparison also depends on the task the reader is given. In a controlled design where 30 pre-2022 article introductions were rewritten across five plausible conditions, blinded human raters scored 19% overall, indistinguishable from chance, while three commercial detectors separated the same five conditions (p < 0.001 for all) yet agreed only weakly with one another on the absolute score, ICC 0.57 to 0.95 ([[cheng-ai-detection-tools-humans-2025|Cheng et al. (2025)]]). That task asked raters to place text among five editing conditions rather than to pass a yes-or-no judgment on one student's essay, so it does not overturn the marker studies below, but it removes any comfort that a human in the room is the reliable instrument.

And the machine has never clearly beaten a careful reader. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall and Parapadakis (2025)]] report machine detection of AI or paraphrased text at roughly 80% against 78.4% for human reviewers, and cite evidence that AI-generated text has passed as human-authored in up to 80% of cases. That margin disappears into the error band the human already brings, which is too thin to ground a finding ([[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]]).

## Work out whose work the error lands on

The features detectors read as signals of AI, meaning long-token density, academic word frequency and uniform style, are also features of competent second-language writing. Misclassification therefore follows language background rather than conduct, which makes this an [[equity-in-ai-education|equity]] question before it is a technical one ([[teichmann-detecting-undetectable-misconduct-2026]]).

That skew shows up outside English too. A [[kazakh-ai-text-detectors-2026|benchmark of 3,811 passages whose pre-ChatGPT authorship is provable]] found that five English-trained public detectors run as released flag 81.4% of human Kazakh passages (TMR RoBERTa) and 79.6% of published Kazakh student essays (Desklib DeBERTa), with 25.5% for Fakespot, and that recalibrating them to a 1% false-positive rate catches at most 1.3% of machine text in exchange. The study's own caveat matters when you quote it: the human passages are public pre-ChatGPT text as found rather than student essays, so its educational rates are the least certain figures it reports ([[kazakh-ai-text-detectors-2026]]).

Discipline adds another axis. Non-STEM abstracts were flagged far above STEM ones in the 642-abstract study, which reflects the writing conventions of those fields and not their authors' conduct ([[karr-ai-detection-humanization-2026]]). Two widely used commercial tools measured 0.69 and 0.61 accuracy in one comparison, and both failed on hybrid human-AI text ([[hadra-ai-detector-accuracy-efl-2026]], [[van-vlasselaer-ai-detector-reliability-2026]]). A detector is a style test, and the style it punishes tracks language background, discipline and register. None of those is a fact about whether a student used AI, and every one of them is a fact about the student. The wider pattern is documented in [[differential-effects-across-learner-groups|Differential Effects Across Learner Groups]].

Some of the cost shows up before any hearing. Because formal processes demand detection-grade proof that is functionally unavailable, faculty end up with what one practitioner account calls "suspicion without recourse," while [[student-rationalization-ai-writing|students rationalize]] their own use and case files stall ([[best-response-student-ai-dialog-2026]]). The [[trust]] cost lands on the relationship the process depends on.

## Change the question you put to the student

Grand Canyon University moved from "Did this student use AI?" to "Can this student demonstrate understanding of what they submitted?", using short conversations, early drafts and recorded explanations, implemented institution-wide in fall 2025. The argument for it is practical: faculty are already qualified to judge understanding, and the shift hands their authority back instead of leaving them waiting for proof that will never arrive ([[best-response-student-ai-dialog-2026]]).

This also changes what a student can do with the accusation. Shown the concern and asked to explain, a student can resolve it. Shown a percentage, they can only deny it.

## Run the conversation so it survives review

Treat a verification conversation as a step in the process, with notice and a record, and it will hold up when someone reads the file a term later.

Start with notice. Tell the student what prompted the concern, in plain language, and say what the conversation is for. If the concern came from a detector score, say that, and say that the score is not a finding. Tell a student only that they are accused of cheating and the meeting becomes a defense of character rather than an account of the work.

Then ask about the work itself. Which claim were you trying to make in this section. Where did this evidence come from. Why did you organize it this way. What did you discard. A student who wrote the piece can answer these at the level of decisions. The student who did not write it will answer at the level of topic, and the difference shows up quickly without anyone needing to prove intent.

Keep the right to silence intact. Declining to answer concedes nothing, and a procedure that treats refusal as an admission will not survive an appeal. Record what was asked, what was answered, and what was declined.

Close with a decision you can state without the score. Either the student demonstrated the understanding the assessment measures, or there is a separate, substantive concern about the work that you can describe in your own words. If neither is true, the file ends there. That outcome is a normal one and should be written down as such, because a process that only ever records guilt teaches the next panel that suspicion is the same as a finding.

## Put one step in the assignment the tool cannot sit inside

Asynchronous oral assessments, built as just-in-time prompts with brief, time-limited recorded responses graded against embedded rubrics, performed comparably to in-person multiple-choice exams in one study and significantly better in another, with students reporting more active preparation and higher perceived professional relevance. For an [[administrator]], the property that matters is that this scales without proctoring ([[asynchronous-oral-assessment-2026]]).

Redesigning the task does more work than hardening the check. A case study of undergraduate economics students found only about a third reported any AI use, with disclosure rarer still, and read non-disclosure as rational caution under ambiguous policy rather than dishonesty. Those same students favored real-world, data-based tasks as the fix ([[kirsanov-beyond-detection-ai-online-assessments-2026]]). Expecting, declaring and scrutinizing AI use beats policing it, because [[authentic-assessment|authenticity]] has to be designed rather than enforced ([[beyond-detection-authentic-assessment-ai-2025]]).

Two decisions follow. Size comes first. A short oral check on every major submission is affordable in a seminar. In a lecture of three hundred, staged drafts and a sampled check on anomalous work are what survives week ten. Pick the version you can still run in the last week of term with the marking hours you have, because an authenticated step that collapses under load leaves you back with the artifact.

Points come second. If a rationale, a draft history or a reflection on a rejected AI suggestion scores nothing, it will be produced in five minutes and read by nobody, and students will optimize for the part that is graded. Give it enough weight that skipping the step costs more than doing it.

## Make disclosure the cheap choice

Vague or punitive policies drive concealment. Specific declaration frameworks tied to cognitive stages, paired with an assurance that truthful disclosure is not penalized, get more information out of students than surveillance does ([[gonsalves-student-non-compliance-ai-declarations-2025]], [[chang-should-i-tell-my-teacher-ai-disclosure-2026]]). The design question is which response your rules make easiest for the student who is tempted to hide, and a rule that treats a declaration as a confession has answered it badly.

Wording does most of the work here. A declaration that asks students to tick a box and then sits unread in a submission system teaches them that disclosure is theater, and the next cohort learns it faster. A declaration attached to a stage of the work, asking what the tool was used for at that stage and what the student did with the output, gives you something you can actually read, and gives the student a reason to be accurate.

## Write the clauses that keep you out of a hearing

Exposure rarely starts as litigation. It surfaces first as an internal appeal or a regulator complaint, and the first thing tested is procedure. Natural justice requires that a student be told the allegation and given an opportunity to respond before any determination, and that opportunity is typically an investigative meeting or a panel interview whose record becomes evidence. Findings reached without that step are vulnerable even where the underlying suspicion was reasonable ([[munoz-misconduct-allegation-evidence-2026]]).

Evidence standards come second. Misconduct findings need evidence meeting the balance of probabilities, and if your case cannot be stated without the detector score, the case is weak on its face ([[bassett-ai-detectors-education-2026]]). Where the case rests on style alone, an oral verification route belongs in the procedure, not in the goodwill of the panel chair.

Scope is the third. Blanket AI bans that fail to separate transcription and OCR from generative drafting can remove an assistive tool that students with conditions affecting motor control, handwriting legibility or typing accuracy depend on, several of which have been discontinued with AI transcription filling the gap. That is legal exposure as well as imprecision ([[wright-transcription-not-generation-2026]]). Name [[assistive-technology|assistive]] and transcription tools in the policy text.

Procurement is the fourth. Detectors store student work on third-party servers, sometimes overseas under weaker [[privacy]] protections, which puts breach, retention and onward commercial use on your institution's risk register rather than the vendor's marketing page. Terms should cover retention, use for [[llm-training-and-fine-tuning|model training]], storage location, breach notification and appeal rights ([[bassett-ai-detectors-education-2026]]). The knowledge base's account of the legal exposure is in [[legal-issues-and-risks]], and it is honest about its limits: it documents procedures, evidence categories and instrument reliability, not litigated outcomes.

What lowers risk is procedural. Never treat output as standalone evidence or an automatic trigger. Document the standard your process applies. Give notice and a real chance to respond on the record. Offer verification when the case rests on style. Keep the audit trail that shows all of it happened.

## Test the wording against four cases

Policy language fails on the cases nobody pictured when it was written. Run these four through your draft before it goes to committee, and note where the text has no answer.

A student who ran a draft through a translation tool. The policy needs to say whether translation counts as AI use, and whether it counts the same for a student writing in a second language as for one writing in a first. If it is silent, the panel will improvise, and improvisation is where the equity argument starts.

Someone who used AI to outline and wrote every paragraph themselves. Under a rule that asks whether AI touched the work, this student is in the same category as one who generated the whole submission. Under a rule tied to steps, they are not, and you can say why. That difference is the construct, and the policy has to name it.

Someone who generated the text and cannot explain it. This is the case your process is built for, and it is the one that resolves without a detector score.

A student who uses transcription because typing is unreliable. Name [[assistive-technology|assistive]] tools as a separate category with their own route, so that an accommodation does not become an allegation.

## What administrators get wrong about detectors

**A vendor's published false-positive rate is a risk figure you can budget against.** Vanderbilt licensed a detector advertising a 1% false-positive rate, then tried to validate the number and could not. At 75,000 annual submissions, 1% implied roughly 750 mislabelled students. The university disabled the tool ([[teichmann-detecting-undetectable-misconduct-2026]]). A rate you cannot reproduce on your own corpus is a marketing number, and the mislabelled students are still yours to process.

**Detection deters the students who would otherwise cheat.** Deterrence runs through a detector's discrimination between hidden use and legitimate work, not its raw catch rate. When added sensitivity produces more new false positives than new true positives, stronger monitoring makes concealment relatively more attractive, so you spend credibility on students who did nothing wrong faster than you identify the ones who did ([[mohamed-temimi-assessment-imperfect-information-disclosure-2026]]). Krou et al.'s meta-analysis, cited in the same review, finds self-efficacy correlates negatively with cheating while actual ability does not correlate inversely with it at all, so capable students may cheat when they judge the assessment unfair. Detection is neither a reliable instrument nor an obvious deterrent ([[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]]).

**A score plus a couple of indicators adds up to a case.** It does not. The standard is evidence meeting the balance of probabilities, and scores combined with markers, style comparisons, LLM judgments or silence still fall short. One test worth applying is whether you would say the reasoning out loud in a hearing ([[bassett-ai-detectors-education-2026]]).

**A detector license costs less than redesigning the assessment.** The license is the smallest line item, and it carries data-protection exposure, procurement work, and a permanent stream of appeals built on an instrument whose error is patterned by language background. Faculty describe the experience as "suspicion without recourse," so the budget line that changes outcomes is verification capacity and guidance ([[best-response-student-ai-dialog-2026]]).

**A blanket ban protects the institution.** Over-inclusive rules can strip an accommodation and invite the discrimination argument you were trying to avoid, because the error they produce is concentrated on identifiable groups rather than spread evenly ([[wright-transcription-not-generation-2026]], [[hadra-ai-detector-accuracy-efl-2026]]).

## What will come back at you

**"Our vendor advertises a 1% false-positive rate."** Vanderbilt's licensed detector claimed exactly that, and the claim did not survive the university's attempt to validate it. Independent benchmarks put no tool above 80% accuracy ([[teichmann-detecting-undetectable-misconduct-2026]]). Ask for the validation study and the corpus it ran on, then ask to run it yourself.

**"We only use it as one piece of evidence."** The standard is evidence meeting the balance of probabilities, and a score combined with markers, style comparisons, LLM judgments or silence still does not satisfy it ([[bassett-ai-detectors-education-2026]]). If the panel would not accept the reasoning spoken aloud, the file should not contain it.

**"If we stop detecting, cheating wins."** Cheating already gets past these tools. 94% of injected AI submissions passed a live online exam unnoticed, humanizing defeats detection more than 96% of the time, and contract cheating already left no reliable trace. What detectors do catch, with measured reliability, is honest light editing and non-native prose ([[teichmann-detecting-undetectable-misconduct-2026]], [[karr-ai-detection-humanization-2026]]).

**"We only use it privately, to start a conversation."** That is the least harmful use, and it still costs something, because the students most likely to be flagged are the least likely to be misusing AI. Suspicion then lands on the wrong people before any conversation begins ([[teichmann-detecting-undetectable-misconduct-2026]]). Grand Canyon's answer was to stop starting from suspicion at all ([[best-response-student-ai-dialog-2026]]).

**"A student with nothing to hide has nothing to fear."** The 642-abstract study found compliant light editing flagged at 38-80% at a 0.50 threshold, and the Kazakh benchmark found 81.4% and 79.6% of provably human passages flagged by released detectors ([[karr-ai-detection-humanization-2026]], [[kazakh-ai-text-detectors-2026]]). A clean record offers no protection when the signal is style. That is also why the Kazakh authors flag their own educational rates as the weakest figure in the study, and why you should not quote them as a student-essay rate.

**"Can we just require a declaration and treat a missing one as guilt?"** A missing declaration is not evidence of hidden use, and treating it as one makes concealment rational. Specific frameworks tied to cognitive stages, with truthful disclosure protected from penalty, extract more information than surveillance does ([[gonsalves-student-non-compliance-ai-declarations-2025]], [[chang-should-i-tell-my-teacher-ai-disclosure-2026]]). The evidence on this page concerns what produces disclosure. It says nothing about how much cheating a declaration regime prevents.

## What to do this week

**1.** Open your misconduct procedure and find every place a detector score could trigger a step. Write one sentence that removes the trigger, and take it to whoever owns the document.

**2.** Email the vendor for the validation study behind the advertised error rate, and ask what corpus it used.

**3.** Pick your highest-stakes assignment and add one authenticated step you can mark in the time you have.

**4.** Draft the three questions you will ask a flagged student, starting with what they were trying to argue and how they checked it.

**5.** Send the procurement and accessibility clauses to the office that signs contracts, with the retention, training-use and breach terms spelled out.

## Where to go next

The design-side companion is [[reduce-ai-cheating|How Can I Reduce AI Cheating in My Course?]], and [[redesign-assessment-ai-era]] takes the assessment argument further. [[course-ai-policy]] covers how to word and communicate a course policy, and [[ai-literacy]] covers what students need to know to work with these tools without losing the work itself. The concept pages behind the argument are [[academic-integrity]], [[equity-in-ai-education]] and [[legal-issues-and-risks]]; the detection-specific clauses above are the institutional layer of [[educational-policy-ai]].
