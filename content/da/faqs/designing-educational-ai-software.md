---
title: "Hvad er bedste praksis og tips til at designe effektiv pædagogisk AI-software?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Dit team har en fungerende prototypetutor og en demonstration for et skoledistrikt om tre uger. Eller en partnerskole har bedt jer om at lægge en chatgrænseflade oven på sin kursuslæser, og nogen siger, at det er en opgave på to uger. Eller en indkøbsanmelder har sendt sikkerhedsafsnittet tilbage med én linje: hvad har I helt præcist testet?

Svaret er snævrere, end de fleste produktspecifikationer antager. Pædagogisk AI fungerer som en afgrænset ekspert under menneskeligt opsyn: kapacitet begrænset til et defineret domæne, forankret i undervisergodkendt indhold frem for i modellens hukommelse, samdesignet med de lærere og studerende, der bruger den, og evalueret på vedvarende interaktion over flere ture. Det sidste led er det, de fleste teams springer over. Pædagogisk skade optrådte i hver model, der blev testet i benchmarken nedenfor, og fejlraten steg fra 17,7 % i interaktioner over én tur til 77,8 % i samtaler over flere ture.

## Den korte version

**1.** Skriv ned, hvad systemet beslutter, og hvad en lærer beslutter. Den grænse bliver arkitekturen.

**2.** Evaluer fagligt opmærksom interaktion over flere ture mod en rigtig læseplan, ikke enkelte prompter mod en generisk sikkerhedsrubrik.

**3.** Forankr svarene i godkendt indhold, og hold verifikationskomponenten adskilt fra den samtalende komponent.

**4.** Behandl enhver studerendes aflevering som ubetroet input, også når systemet bedømmer den.

**5.** Byg forsøgsspærringen, eskaleringsvejen og lærerens overstyring, før piloten starter.

**6.** Sæt tilgængelighed og opdelt ligestillingstest i specifikationen i stedet for i backloggen.

## Beslut, hvad systemet må være

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert og kollegers deltagende designstudie]] med seks lærere i ungdomsuddannelsen korrigerer antagelsen om, at pædagogisk AI bør være en autonom agent. Da lærerne blev bedt om at prototypere klassens [[conversational-ai|chatbots]] på papir, beskrev hver enkelt en afgrænset ekspert langs to dimensioner. Myndighedsgrænser holdt lærerne i kontrol, fordi ansvaret for studerendes læring og sikkerhed ikke kan uddelegeres. Ekspertisegrænser afspejlede, at AI'en mangler kontekstuel viden om den enkelte studerende, om klassens dynamik og om institutionelle normer.

Den arkitektur, de skitserede, havde fire komponenter (afgrænsning af indhold, præsentation af indhold, tilpasning til den studerende og [[teacher-role|lærerens]] opsyn) oven på tre beskyttende lag: domænegrænser, der begrænser omfanget, indholdsfiltrering, der muliggør sikker [[personalized-learning|personalisering]], og lærerens overstyring i tvetydige sager. Uddelegeringen var selektiv. Afbildet på Gagnés ni undervisningshændelser tog lærerne imod AI til at præsentere indhold, levere øvelsesopgaver og give [[formative-assessment|formativ]] [[feedback]], og de afviste den til at fastsætte mål eller gennemføre [[summative-assessment|summativ]] [[assessment|bedømmelse]].

To standardvalg hører i samme specifikation: forankr systemet i eksplicitte læringsmål, og justér det mod venlige, men korrekte svar frem for mod enighed med den, der skriver. En tutor, der smigrer for et forkert svar, har lært den studerende, at svaret var rigtigt.

Én detalje er billig nu og dyr senere: disse lærere ønskede adfærdstransparens, synlige grænser og usikkerhedssignaler frem for forklaringer af modellens ræsonnement. Alle seks bad om fuld logning af samtaler, realtidsalarmer og overstyringsmulighed, formuleret som professionelt ansvar snarere end som mistillid. Design til det i den første sprint, fordi det at eftermontere logning i en tutor, der er bygget til at føles usynlig, er en omskrivning.

## Test det i samtale, ikke på én tur

Syntesen om [[pedagogical-safety|Pædagogisk sikkerhed]] argumenterer for, at konventionel sikkerhedstestning er utilstrækkelig for undervisning. Et system kan undgå giftigt indhold og stadig gøre skade ved at afsløre svar for villigt, forstærke [[misconceptions|misopfattelser]], undertrykke refleksion, fremme afhængighed eller drive væk fra undervisningsmålene.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]]-[[benchmark|benchmarken]] sætter tal på det. På tværs af hver model, der blev testet, fra 3,8B åbne modeller til GPT-5-mini, var [[pedagogy|pædagogisk]] skade universel, skala forbedrede ikke sikkerheden pålideligt, og fejlraten eskalerede fra 17,7 % i interaktioner over én tur til 77,8 % i samtaler over flere ture. Overtrædelsesmønstrene varierede med faget. Dens taksonomi med 11 dimensioner og 48 delrisici dækker kognitive, epistemiske, [[metacognition|metakognitive]], [[motivation|motivations- og affektive]], udviklingsmæssige og ligestillingsmæssige samt undervisningsjusteringsmæssige kategorier, og den fungerer som tjekliste i design såvel som som testpakke.

Læs eskaleringstallet som en udtalelse om din testplan. En tutor, der består tusind prober over én tur, kan fejle i fire samtaler ud af fem, når en studerende presser på eller spørger for tredje gang. Byg rammen til flere ture, før demonstrationen.

## Forankr indholdet, og adskil verifikatoren

Forankring er en arkitekturbeslutning. [[eduguard-safe-rag-llm-tutor|EduGuard]], en sikker [[rag|søgningsforstærket]] tutor til [[cs-education|indledende programmering]], parrer undervisergodkendt kurssøgning med en arkitektonisk adskilt påstandsverifikator, eksplicit kontrol af [[cognitive-offloading|overafhængighed]] og en benchmark med 600 forespørgsler skrevet af undervisere, der spænder over misopfattelser, fejlsøgning, forespørgsler med blandet kode og adversariske prompter, der beder om direkte svar. Den forbedrede sig i forhold til GPT-4o-mini og Llama-[[socratic-method|sokratiske]] tutorbaselines.

Det overførbare er adskillelsen: komponenterne, der verificerer, samtaler ikke, og benchmarken indeholder prompter, der er skrevet for at trække svar ud snarere end for at kontrollere høflighed. [[hallucination-risk|Hallucinationsrisiko]] dækker den fejlmåde, som godkendt søgning skal begrænse.

## Behandl studerendes arbejde som ubetroet input

Den trusselsmodel, som de fleste designtips udelader, sidder inde i det artefakt, der bedømmes. [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026) adversariske red-team-evaluering]] testede, om studerende kunne manipulere en LLM-baseret bedømmer gennem promptinjektion i deres afleveringer, og manipulationen virkede: injektioner, der instruerer, omformulerer eller spiller en rolle over for bedømmeren, flytter karakteren uden at ændre arbejdet.

Hold rubrikken og instruktionerne uden for den studerendes kontekstvindue, fjern eller markér instruktionslignende indhold, lad aldrig en aflevering sætte sine egne kriterier, og hold en menneskelig beslutning på enhver konsekvensrig karakter. En bedømmer, der læser sine instruktioner i den tekst, den vurderer, har givet rubrikken videre til kandidaten.

## Stilladsér arbejdet i stedet for at fuldføre det

Et system, der svarer, afslutter den tænkning, det blev købt til at understøtte. To ting hører i opgaven: en forsøgsspærring, så intet output vises, før den studerende forpligter sig på noget, og en [[human-in-the-loop-ai|menneskelig eskaleringsvej]] med en navngivet modtager, som for et klasseværelsesprodukt betyder læreren, i en form en lærer kan handle på. [[scaffolding|stilladsning]] og det [[socratic-method|sokratiske]] mønster er produktversionerne af det, en lektionsplan gør i hånden; [[developing-ai-tutor|udvikling af en AI-tutor]] dækker diagnosticering, hinttrapper og feedback i detaljer.

## Sæt tilgængelighed og ligestilling i specifikationen

Tilgængelighedskrav er konkrete nok til en sprint: betjening med tastatur, kompatibilitet med skærmlæsere, undertekster og transskriptioner, passende kontrast, brugbare tekstalternativer og kompatibilitet med hjælpe-[[ai-technologies|teknologier]]. AI-genererede tilgængelighedsfunktioner skal stadig kvalitetstjekkes. Se [[accessibility|tilgængelighed]].

Ligestillingstest bør undersøge hele pipelinen og opdele adfærden efter sprog, handicap, kultur og andre relevante kendetegn hos de studerende i stedet for at stole på samlet nøjagtighed. Et system, der scorer godt i gennemsnit og dårligt for én gruppe, har sendt fejlen videre til netop den gruppe. Se [[bias-mitigation|bias-begrænsning]] og [[equity-in-ai-education|Ligestilling]].

## Design sammen med dem, der skal bruge det

[[ko-hughes-vsd-student-centered-its-2026|Ko og Hughes]] anvendte værdifølsomt design på et [[intelligent-tutoring|intelligent tutorsystem]] sammen med studerende og undervisere på et community college, en gruppe der historisk er blevet udeladt af design af læringsplatforme. De fandt værdikonflikter, der skal håndteres snarere end løses: transparens over for fortolkbarhed, [[privacy|privatliv]] over for undervisningsindsigt og [[agency|studerendes agens]] over for systemstyret [[scaffolding]]. De studerende foretrak kollaborative, menneskeliggjorte forklaringer frem for rå modeltransparens, og prototypen kodede 16 værdijusterbare funktioner på tværs af [[explainable-ai|forklarlig AI]], human-in-the-loop og privatlivskontroller.

[[wang-teacher-ai-co-design-review-2026|Wang, Liu og Islams gennemgang]] af 28 empiriske studier tilføjer et ordforråd til at vælge værktøjer. [[generative-ai|Generativ AI]] bruges mest til lektionsplanlægning, promptgenerering og kreativ idégenerering, hvor AI langt oftere fungerer som assistent eller indholdsgenerator end som meddesigner, og fire handlemuligheder, effektivitet, responsivitet, [[creativity|kreativitet]] og [[equity-in-ai-education|ligestilling]], som lærere kan bruge til at vurdere, hvilket værktøj der passer til hvilket designproblem.

Begge studier behandler design som [[human-in-the-loop-ai|human-in-the-loop]]-[[human-ai-collaboration|samarbejde]] og som [[usability-research|brugbarhedsforskning]] snarere end som opsøgende arbejde. Begge fandt, at interessenter afdækkede krav, som ingen nøjagtighedsbenchmark ville fange, hvilket er det praktiske argument for at betale for sessionerne: de krav, du ellers ville møde i piloten.

## Hvad designteams tager fejl af

Sikkerhed betyder indholdsmoderering. Skade i et pædagogisk produkt ankommer ofte som et hjælpsomt svar på det forkerte tidspunkt. SafeTutors fandt pædagogisk skade i hver testet model og fejl, der steg til 77,8 % gennem en samtale, hvilket ikke er en kategori, indholdsfiltre er bygget til at se.

En større model løser pædagogikken. Skala forbedrede ikke sikkerheden pålideligt i området fra 3,8B åbne modeller til GPT-5-mini.

Et godt søgeindeks betyder, at indholdet er håndteret. EduGuard parrer søgning med en separat verifikator og tester adversariske prompter, der beder om direkte svar, fordi forankret søgning stadig efterlader en vej til for villig afsløring.

Læreren er reserveplanen. Alle seks lærere i designstudiet bad om logning, alarmer og overstyring som en betingelse for professionelt ansvar. En supportbillet er ikke en overstyring.

Tilgængelighed er en senere opgave. Den står i specifikationen, eller den bliver en omskrivning, og genereret alt-tekst og undertekster skal stadig have et menneskeligt tjek.

## Hvad du vil få igen

**»Vi kan ikke bygge en evalueringsramme før lancering.«** Byg en lille. Det første, du har brug for, er, hvad der sker over fem ture. Tag 40 rigtige spørgsmål fra læseplanen, kør hvert som en samtale over fem ture med en studerende, der modsætter sig hintet, og score mod de 11 dimensioner. Det er et forsvarligt sikkerhedsafsnit, og det passer i en sprint.

**»Lærerne vil redigere prompter, og vi kan ikke garantere, hvad de skriver.«** Så indsnævr den flade, de redigerer. Systemprompten forbliver jeres; mål, godkendt indhold, hinttrappen og eskaleringskontakten er deres. Arkitekturen med den afgrænsede ekspert findes, så konfigurationen bliver inden for et omfang, du kan teste.

**»Vores benchmark-scorer er høje.«** Nøjagtighed på svar over én tur forudsiger ikke adfærd gennem en samtale, og den benchmark, der måler det andet, fandt 77,8 % fejl i opsætninger over flere ture på tværs af hver model, den testede. Rapportér begge tal, ellers vil det første blive læst som det andet.

**»Fuld logning er et privatlivsproblem.«** Det er det, hvilket kalder på formålsbegrænsning snarere end på at lade være. Log det, en lærer har brug for at handle på, minimér resten, begræns adgangen, og sig i produktet, hvad der gemmes, og hvor længe.

## Hvad du kan gøre i denne uge

**1.** Skriv myndighedsgrænsen på én side: hvad systemet beslutter, hvad læreren beslutter, og hvilke af dem du ville forsvare i en indkøbsgennemgang.

**2.** Omdan taksonomien med 11 dimensioner til en testplan, og kør den over flere ture på 40 rigtige spørgsmål fra ét kursus.

**3.** Adskil verifikatoren fra generatoren i designdokumentet, selv om den første version kører dem i én proces.

**4.** Føj forsøgsspærringen, eskaleringsdestinationen og lærerens overstyring til køen, med navne på.

**5.** Sæt tilgængelighedslisten og ét opdelingskrav ind i denne udgivelses acceptkriterier.

## Hvor du kan gå videre

[[developing-ai-tutor|Udvikling af en AI-tutor]] dækker opbygningen, og [[designing-ai-into-learning|at designe AI ind i læring]] dækker de pædagogiske standardvalg omkring den. Om hvorvidt tingesten virker, når den er udrullet, se [[checking-whether-educational-ai-works|om pædagogisk AI virker]]; om sikkerhedsbegreberne bag testplanen, [[pedagogical-safety|pædagogisk sikkerhed]] og [[hallucination-risk|hallucinationsrisiko]]; om indkøbskonteksten, [[legal-issues-and-risks|juridiske forhold og risici]].
