---
title: "“If we are good friends, AI doesn't spy so much”: Children's knowledge and misconceptions of AI safety"
created: "2026-09-18T12:35:00-04:00"
updated: "2026-09-18T12:35:00-04:00"
type: article
foundations: [misconceptions, ai-literacy]
technology: [conversational-ai, generative-ai]
ethics: [privacy, ai-misuse-learning-harm]
stakeholders: [learners, parents-and-families]
methods: [qualitative-research]
research_method: [interviews, thematic analysis, qualitative]
level: [elementary, k 12]
audience: [educators, learners, researchers]
page_kind: [evaluation]
sources: ['raw/papers/children-ai-safety-misconceptions-2026.md']
confidence: high
---

> **Synthesis:** Leisten, Moffat, Caruana and Cross establish a baseline of what children actually know about AI safety, combining a survey of 71 children aged 10–16 (36 female, 35 male, *M*age = 12.90, *SD* = 2.24) from a rural German comprehensive school with six focus groups (n = 36, *M*age = 12.47) drawn from two rural German secondary schools, using the [[open-source]] social robot Blossom as a tangible embodiment of [[ai-literacy|AI]] that children could talk about concretely. Foundational AI knowledge rose reliably with age (β = 0.17, 95% CI [0.05, 0.28]; mean 4.41 of 6), but attitudes did not: ratings of AI safety's importance (*M* = 2.51) and of AI's current safety (*M* = 2.77) clustered at the midpoint of the 1–4 scale with no detectable age or knowledge effect. Thematic analysis showed children reasoning competently about data collection, permanence, hacking, phishing, dependency and physical risk, while carrying consequential misconceptions — that an emotional bond with a robot reduces surveillance ("Maybe if they are good friends he doesn't spy so much"), that AI's knowledge can be deleted at the press of a button, and that hacking leads to kidnapping. The authors read age differences as a [[qualitative-research|qualitative]] shift from personal/physical to structural/societal reasoning, and argue that exposure alone does not produce a critical safety perspective.

## Key Findings

1. **AI knowledge increases with age; safety attitudes do not.** Mean knowledge was 4.41 of 6 (SD = 1.13), positively associated with age (β = 0.17, SE = 0.06). Importance of AI safety (M = 2.51, SD = 0.58) and current safety of AI (M = 2.77, SD = 0.78) hovered at the 1–4 scale midpoint, with no evidence of change by age or prior [[ai-literacy|AI knowledge]].
2. **Children were better at spotting false statements than true ones.** They scored significantly higher on identifying wrong items (Q4–6) than correct items (Q1–3; t(71) = -6.05, p < .001), performing worst on "describes the capacities of a computer", "can solve problems and take decisions" and "can think exactly like a human" — the last being the misconception that AI thinks as people do.
3. **Data collection awareness was real and experience-grounded.** Children described unobtrusive recording ("The company [Amazon] can record your voice and [...] also the other calls when someone is with you", 10–11y), targeted advertising after an overheard conversation, and re-identification by a [[conversational-ai|chatbot]] that listed data the user had not known was held.
4. **The central misconception links [[trust|friendliness]] to privacy.** A 12–13-year-old's "Maybe if they are good friends he doesn't spy so much" captures the error that a personal relationship with a robot reduces surveillance; the authors call this a potentially dangerous perceptual bias specific to embodied AI and warn it also implies a "friendly" system is inherently safe.
5. **Data permanence was only partly understood.** Children grasped that "what is there once stays forever" and that device data outlives the device, yet some believed AI's knowledge can be deleted with a button, and one child recounted a peer's surprise that deleting a YouTube video did not delete a screen recording.
6. **Misuse was discussed through concrete, sometimes improbable threats.** Hacking and phishing dominated and were read through personal experience ("Hello, dad, can I have 300 Euros from you?", 12–13y), with younger children linking hacking to breaking in or kidnapping, while deepfakes — flagged by the authors as arguably the more probable risk — were raised only occasionally.
7. **Children wanted restriction, control and adult accountability.** Mainly among those aged 12+, proposals included enforced time and information limits, age gates ("so that you don't let the robots get to 5-year-olds [...] because they have no idea"), camera switches, selective data retention, consent prompts before data sharing, independent IT oversight, and a clear line of responsibility running from the company that ships the robot to teachers and parents.
8. **Embodied AI carries risks and benefits for children simultaneously.** Children named dependency and isolation (a robot as "the best friend", reduced outdoor play, fewer friendships), malfunction and electric shock, but also learning support in maths and writing, a protective cushion, and a robot that intervenes when a child reaches for a kitchen knife.

## What the study did and who took part

Study 1 administered an online Qualtrics survey to 71 children aged 10–16 during the school day, on personal tablets, taking typically 5–10 minutes. Knowledge was measured with a six-item composite index, three true and three false statements — that AI describes a computer's capacities, stores information and learns from it, and can solve problems and take decisions, versus that it means a human can remember things, has feelings, or can think exactly like a human. The authors explicitly present this as a pilot toward future validation: internal consistency was expectedly low (KR20 = .28) and only the items on human-like thought (Q6, D = 0.32) and [[problem-solving]] capacity (Q3, D = 0.16) discriminated well. Safety and importance were rated on a 4-point scale with smiley faces. Data were analysed in R with a linear mixed-effects model for knowledge and cumulative link models for the attitude ratings.

Study 2 ran six focus groups totalling 36 children from two rural German secondary schools, banded into 10–11 years (n = 14), 12–13 years (n = 11) and 14–16 years (n = 11), each session about 43 minutes with 4–6 demographically similar participants, semi-structured and audio-recorded. The open-source 3D-printable robot Blossom appeared in four versions — bare electronics, knitted and cardboard shells, and a wooden model with ears — but stayed switched off so that no robot behaviour could bias the children. Sessions moved from prior robot experience to choosing among 12 robot pictures, then to definitions of [[generative-ai|AI and LLMs]] and prompts on responsibility, safety improvement, data protection, suitability for younger children, [[llm]] supervision, attachment and malfunction. Data were analysed with Braun and Clarke's reflexive thematic analysis in MaxQDA, from German transcripts into English, and the authors note that their own psychological and human–robot interaction backgrounds shaped theme generation. Written parental consent was obtained for under-16s and additional written consent from those aged 14 and above.

## What children understood correctly

Children's reasoning about [[privacy|data privacy]] was substantive. They described companies recording voice traffic, servers aggregating everything a robot perceives, the camera that may not actually be off, and external owners and IT staff able to reach recordings: "If you talk about something private, you don't want the robot to hear it. [...] The people who are responsible for [the robot] also hear these recordings" (10–11y). They knew the data is durable and portable — "It's then collected in [a] huge server. And then every robot in the world will have all the data at some point" (14–16y) — and drew accurate parallels to smartphones and even GPS trackers left in cars by dealers. Older children understood that platforms differ in security quality, that not all systems are equally trustworthy, and that a robot's own camera should be switchable off. They also articulated a nuanced [[agency|control]] preference: retention for family conversation but not for learning use alone, access limited to oneself and immediate family, and explicit consent prompts before data is passed on for evaluation.

Their accounts of risk were balanced by recognition of benefit. They saw AI supporting maths and writing, protecting children with a cushion, and notifying parents or emergency services during a fire or break-in when a child is home alone. They also insisted on respectful treatment and appropriate expectations of robots: children "need to know that [robots] can't do everything that is expected of them [...] And that you still treat them normally, just like a human being."

## Misconceptions and perceptual biases

The misconception patterns are specific and quoted directly in the paper. The relational-privacy belief is the headline: "Maybe if they are good friends he doesn't spy so much" (12–13y). Alongside it sits the deletion belief — that AI's knowledge can be removed at the press of a button (14–16y) — and a misreading of permanence grounded in personal experience: "My parents always say that once it's on the internet, it's always there", answered by "Huh, but I took it down from YouTube" and corrected by a peer invoking a screen recording. On misuse, younger children connected hacking to physical harm — "It could also be hacked, or someone else could be spying on you, and then they break in or kidnap you" (10–11y) — and phishing was interpreted through half-understood texts they had received themselves. Physical-risk reasoning was vivid but not AI-specific: "The wifi radiates into the brain, which is not good. That's what my father always says" (10–11y), alongside the fear of a large robot that "suddenly kicks [...] or it hits me. 'Sorry, error in the system'".

Older children were not immune. Their structural reasoning was more sophisticated, but one 12–13-year-old's recommendation to buy "from a safe company or from a safe manufacturer, because [...] there are a lot of, I always say China things [...] where it's perhaps not so safe" exposes socio-political bias substituting for security knowledge, and older children still struggled to hypothesise about probable abstract threats such as deepfakes. The authors conclude that exposure to AI does not by itself produce a critical safety perspective: risks are compounded by fundamental misconceptions about what AI is and by perceptual biases linked to AI's embodiment ([[misconceptions]] and [[ai-misuse-learning-harm|misuse]] education are therefore named as [[curriculum-design|curriculum]] priorities).

## AI literacy, trust, and what the authors recommend

The paper's core argument is that [[ai-literacy|AI literacy]] cannot be reduced to technical definitions. Knowledge rose with age yet safety attitudes stayed flat and ambivalent, which the authors explain as a qualitative shift in the *basis* of ambivalence rather than a change in its level: younger children reasoned through [[student-ai-interaction|personal and physical]] proximity, older children through mechanisms, oversight and [[regulation]]. Because ambivalence persisted across the age range, curricula must address children's shifting, age-dependent reasoning patterns, not just raise factual scores. The ambivalence also contrasts with the high concern parents express about children's AI interaction in other work, which the authors read as an invitation to bring [[parents-and-families|caregivers]] and [[teacher-role|educators]] in as [[stakeholders]] in AI safety education.

The trust problem is asymmetric. Children's inclination to anthropomorphise embodied systems ([[educational-robotics|social robots]]) coexists with near-total ignorance of the mechanisms that would justify or undermine [[trust-calibration|calibrated trust]] — hence the emotional-bond-as-privacy-guarantee error. Some older children inverted the logic usefully, treating AI's lack of feelings as a protective factor against emotional dependency, but their accounts also showed a shift toward treating friendliness itself as evidence of safety. The authors' guidelines respond directly: build foundational AI literacy while expanding children's understanding of misuse beyond physical threats to digital data risks; counter perceptual biases actively, especially the belief that an emotional bond ensures data privacy; and design for empowerment and transparency through granular, intuitive controls, ideally co-designed with children themselves so that control features double as learning. Their closing claim is that the success of educational robots "must be measured not only by its educational efficacy, but by its ability to empower children to navigate the risks of an AI-driven world critically and safely".

## Limitations

The sample is the main constraint: two rounds of rural German schooling, demographically homogeneous, native German speakers only, which limits generalisability to other countries, cultures and socioeconomic groups, and the survey sample was partly a convenience sample of children already participating in an unrelated investigation plus random break-time recruitment. The knowledge index is exploratory rather than psychometric — KR20 = .28, with several items showing low discrimination — and the child-friendly AI definition, the smiley-face answer display and the pilot nature of the instrument may all have introduced bias, so the authors do not claim it as a high-fidelity measure. The focus groups were prompted rather than spontaneous: semi-structured protocols and concrete props supported comprehension and cognitive load but mean children's responses "reflect their reasoning on prompted topics, rather than their spontaneous awareness", and prompts may have inflated the saliency of particular themes. The analysis deliberately traced a broad thematic landscape across the whole 10–16 range instead of running separate analyses per age band, so age-unique perspectives remain unexplored even though the survey confirmed knowledge differs by age; and reflexive thematic analysis is a subjective process shaped by the authors' own disciplinary backgrounds. Finally, all safety attitudes are [[self-report-measures|self-reports]] from children about hypothetical systems rather than observed behaviour with an operating AI, and the authors call for larger, more diverse samples and validated measures of objective AI knowledge as future work.

## Connected Concepts

- [[misconceptions]] — the paper's analytical core: children's incorrect models of AI capacities, privacy and misuse
- [[ai-literacy]] — the intervention the authors press for, framed as reasoning about safety rather than technical definitions
- [[privacy]] — data collection, permanence, re-identification and third-party access as children described them
- [[ai-misuse-learning-harm]] — hacking, phishing, deepfakes, identity theft and the harms children anticipated
- [[conversational-ai]] — chatbots and LLMs discussed through smartphones, ChatGPT and voice assistants
- [[generative-ai]] — the AI/LLM definitions children were given and applied to robots and chat systems
- [[educational-robotics]] — Blossom and social robots as the embodiment that shaped children's safety reasoning
- [[trust-calibration]] — friendliness misread as a safety guarantee, and the gap between trust and evidence
- [[learners]] — 10–16-year-olds as the population whose baseline knowledge is being mapped
- [[parents-and-families]] — caregivers named as co-stakeholders in AI safety education
- [[qualitative-research]] — reflexive thematic analysis of focus group transcripts as the study's interpretive method
- [[k-12]] — the schooling context and the school-wide, age-appropriate interventions the authors recommend

## Connected Articles

- [[age-tiered-ai-literacy-guidebooks-2026]] — Developmentally tiered AI literacy materials for K-12 students and teachers
- [[vahedian-children-attitudes-ai-chatbot-2026]] — Children's attitudes toward an age-tailored AI chatbot
- [[ai-toys-child-development-2026]] — How AI-enabled toys bear on child development and play
- [[demir-akar-ai-media-literacy-children-2026]] — An AI-based media literacy programme for children's critical thinking
- [[chang-co-designing-ai-youth-relational-privacy-2025]] — Co-designing classroom AI around youth relational privacy
- [[eduzone-llm-safety-k12]] — A framework for evaluating LLM safety for K-12 students and teachers
- [[child-safety-genai]] — Expert-guided, incident-grounded evaluation of child safety in generative AI
- [[hazra-safetutors-pedagogical-safety-2026]] — Safety and pedagogical harms in AI tutoring systems
- [[young-people-learning-generative-ai-rapid-review-2026]] — Rapid review of young people's generative AI use in PreK-12
- [[play-ai-pre-k-kindergarten-ai-literacy-2026]] — Play-centred AI literacy curriculum for the youngest learners

## Citation

Leisten, L. M., Moffat, R., Caruana, N., & Cross, E. S. (2026). [*“If we are good friends, AI doesn't spy so much”: Children's knowledge and misconceptions of AI safety*](https://osf.io/preprints/psyarxiv/jva7z_v1). *PsyArXiv Preprints*.
