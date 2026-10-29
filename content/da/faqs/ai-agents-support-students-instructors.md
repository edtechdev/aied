---
title: "Hvordan kan AI-agenter støtte studerende og undervisere?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
updated: "2026-10-29T12:23:32-04:00"
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

En leverandørdemo varer fyrre minutter. Agenten læser pensum, skriver kladde til næste uges quiz, markerer tre studerende, der ikke har åbnet læsestoffet, og tilbyder at sende dem en mail. Din prorektor vil have en beslutning om licens inden månedens udgang.

En [[agentic-ai|agent]] planlægger, kalder værktøjer, holder kontekst, deler arbejdet i delopgaver og tilpasser sig hen over flere ture, og det er mere, end en [[conversational-ai|chatbot]] gør. De roller på studentsiden og på undervisersiden, som det åbner for, er reelle. Evidensen viser ikke, at mere autonomi giver mere læring: i den ene direkte sammenligning her stod en agent og en chatbot lige. Læg autonomien der, hvor et menneske kontrollerer outputtet, behold planlægningen hos den lærende, og mål undervisningskvaliteten op imod jeres egen rubric.

## Den korte version

**1.** Navngiv opgaven, før du vælger produktet.

**2.** Start på undervisersiden, hvor en underviser allerede gennemser arbejdet.

**3.** Behandl øget autonomi som en omkostning, indtil evidensen siger noget andet.

**4.** Behold planlægningen og vurderingen hos den lærende, for det er dem, opgaven findes for at opbygge.

**5.** Mål agenten op imod jeres rubric, og planlæg en uassisteret kontrol, før piloten slutter.

## Vælg opgaven, før du vælger agenten

[[agentic-workflows-education|Agentiske arbejdsgange i uddannelse]] navngiver fire tilbagevendende kapaciteter: refleksion, planlægning, værktøjsbrug og samarbejde mellem flere agenter. Hver af dem tilføjer en omkostning ved siden af muligheden, i [[explainable-ai|fortolkelighed]], koordinering, [[trust-calibration|tillid]], svartid og tilsyn.

Rollerne på studentsiden går fra [[adaptive-learning|adaptiv]] vejledning og studieplanlægning over [[formative-assessment|formativ]] feedback, guidet [[problem-solving|problemløsning]] og generering af øvelser til anbefalinger om forudsætninger og reflekterende [[metacognition|metakognitiv]] [[prompt-engineering|promptning]]. Rollerne på undervisersiden dækker udvikling af materiale, [[automated-question-generation|spørgsmålsgenerering]] og validering, triage af feedback, kursus[[learning-analytics|analyser]], undervisningsdesign, hentning af ressourcer og orkestrering af specialiserede underagenter.

To af dem er sikrere tidligt, fordi begge producerer et artefakt, som et menneske læser, før de studerende gør: en spørgsmålsgenerator parret med en validator, og kladdeskrivning som en underviser redigerer.

## Start der, hvor et menneske allerede kontrollerer arbejdet

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], det første [[rct|randomiserede kontrollerede forsøg]] med et menneske-AI-system i live-vejledning, gav novicvejledere realtidsvejledning hentet fra erfarne vejlederes ræsonnement, på tværs af 900 vejledere og omkring 1.800 studerende. Studerende hos vejledere med adgang havde 4 procentpoint større sandsynlighed for at mestre emner, stigende til 9 point blandt de lavest vurderede vejledere, hvis studerende indhentede dem hos bedre vurderede vejledere i kontrolgruppen. Det kostede omkring 20 dollar per vejleder om året, og en analyse af mere end 550.000 vejledningsbeskeder viste, at vejledere skiftede fra at give svar til at stille styrende spørgsmål. Det er AI, der forstærker [[teacher-role|læreren]].

Agenten underviste ikke den studerende. Den fodrede et menneske midt i samtalen, og mennesket besluttede, hvad der skulle siges. Et menneske i loopet og et resultat tæt på arbejdet er det, der gør resultatet overførbart til et andet kursus.

## Antag ikke, at mere autonomi køber mere læring

[[ilieva-agentic-genai-higher-education-2026|En undersøgelse af 130 studerende på et e-handelskursus]] fandt, at både [[generative-ai|generative AI]]-chatbots og agenter blev vurderet højere end traditionel [[online-teaching-and-learning|e-læring]] på læring og [[personalized-learning|personalisering]], uden signifikant forskel mellem chatbot og agent. Mere autonomi, ingen merværdi på de mål.

Undersøgelsens rammeværk behandler agenter som afgrænsede, menneskeovervågede læringspartnere, hvor mål, kontrolpunkter og endelige beslutninger er overladt til mennesker. [[beyond-agent-label-agentic-ai-governance-2026|Ud over agentlabelen]] gør det til en [[governance|styringsregel]]: autonomi bør ikke overstige evidensens modenhed eller styrken af ansvarlig menneskelig kontrol, og evidensen er stærkest på artefaktniveau, svagest på varig [[learning-gains|læring]] og [[equity-in-ai-education|ligestilling]].

Risikoen på den lærendes side går i samme retning. En agent, der planlægger og overvåger for en studerende, fjerner den øvelse, der opbygger [[self-regulated-learning|selvregulering]], og inviterer til [[cognitive-offloading|udlicitering]]. [[agentic-ai-pedagogical-best-practice-2026|Anbefalinger for god praksis]] efterspørger bevidst friktion, [[scaffolding|stilladsning]] der fader ud, og [[human-in-the-loop-ai|menneskeligt tilsyn]]. [[desirable-difficulties|Produktiv friktion]] har fungerende eksempler. Konstruktiv-konflikt-agenter, der argumenterer imod et svagt design, forbedrede designresultater i den forskning, der blev gennemgået. [[simulating-students|Simulerede medstuderende]] understøtter [[collaborative-learning|kollaborativ læring]] og [[socratic-method|sokratisk]] udspørgen, og [[medical-education|kliniske]] [[simulation|simulationer]] lader lærende øve sig, hvor en fejl er billig.

Testen for dem alle: hvad kan den studerende bagefter, som agenten gjorde før? At overlade dømmekraften koster den studerende [[agency|øvelsen]] i at bruge den.

## Mål agenten op imod din egen vurdering

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Otte AI-undervisningsagenter udrullet på tværs af et medicinsk pensum]] blev rangeret forskelligt af platformsgenererede scorer og af en uafhængig ekspertrubric. Platformens tredjerangerede agent endte sidst på undervisningskvalitet. Platformscorer indekserer studerendes præstation, som bevæger sig af grunde, der intet har med undervisning at gøre.

Spørg, hvad et tal i et dashboard tæller, hvem der skrev rubricen bag det, og hvordan en lav score ville se ud i studerendes arbejde. [[pedagogical-safety|Pædagogisk sikkerhed]] hører til i samme gennemgang, for en kæde af [[pedagogical-agent|agenter]] gør det svært at sige, hvilken komponent der er ansvarlig, når et svar er forkert.

## Planlæg nedlukningen

Randomiserede forsøg viser, at kortvarig AI-assistance kan trykke senere uassisteret præstation, og intervallet efter tilbagetrækningen, [[cognitive-washout-ai-skill-decay-2026|kognitiv washout]], er næsten helt umålt. Syntesen bag denne side trækker på et [[meta-analysis-systematic-review|scoping review]] af 474 studier og finder arbejdet koncentreret i [[higher-ed|videregående uddannelse]], [[stem-education|STEM]], kortvarige designs og tekstbaseret vejledning, med kun et mindretal eksplicit forankret i uddannelsesteori. En pilot, der slutter, når licensen slutter, har målt det forkerte vindue.

## Hvad administratorer tager fejl af her

En agent er en opgraderet chatbot, så opgraderingen bør vise sig i resultaterne. I sammenligningen med 130 studerende slog begge AI-betingelser e-læring, og ingen af dem slog den anden.

Dashboardet rangerer undervisningskvalitet. Det rangerer studerendes præstation, og otte agenter gav en rangering, der vendte tredje- og sidstepladsen om i forhold til en ekspertrubric.

Autonomi er den funktion, man køber. Proportionalitetsreglen går den anden vej, og evidensen er tyndest, hvor autonomien er størst.

Adgang lukker ligestillingsgabet. Ulige adgang til kapable agentiske systemer kan udvide det, og en agent reproducerer bias fra træningsdata i skala.

## Hvad du vil få tilbage

**»De studerende lader den bare gøre arbejdet.«** Nogle vil, og arkitekturen afgør, hvor let det er. Agenter, der planlægger og skriver kladder for den studerende, inviterer til det. Agenter, der kræver et forsøg og derefter stiller et spørgsmål, gør ikke.

**»Leverandørens evaluering siger, at det virker.«** Spørg, hvad tallet tæller. Hvis det er platformsmålt studerendepræstation, måler det de studerende lige så meget som agenten.

**»Ingen kan sige, hvilken agent der er ansvarlig i en kæde.«** Sandt for de fleste nuværende udrulninger. Udpeg en ejer for kæden, log hvilken komponent der producerede hvilket output, og behold et menneskeligt kontrolpunkt, før noget når en studerendes registrering.

## Hvad du kan gøre i denne uge

**1.** Skriv opgaven og det resultat, du vil vurdere den på, én sætning hver, før næste leverandørsamtale.

**2.** Mål en agents output op imod jeres rubric på ti stykker ægte studerendearbejde, og gem scorerne.

**3.** Føj en dateret, uassisteret opgave med en navngiven ejer til pilotplanen.

## Hvor du kan gå videre

[[developing-ai-tutor]] dækker opbygningen på studentsiden fra mål til hjælpetrappe, og [[evaluating-ai-interventions-methods]] dækker, om det virkede. [[intelligent-tutoring]] og [[ai-literacy]] leverer det designvokabular, denne side forudsætter.
