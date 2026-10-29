---
title: "Hvordan får vi en simuleret studerende til at opføre sig som en rigtig lærende?"
created: "2026-10-02T08:36:18-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/making-simulated-students-behave-like-learners
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Du har en demo på torsdag. Den simulerede studerende i den bommer et brøkstykke, får ét hint og producerer derefter det rigtige svar med den rigtige forklaring. Nogen i lokalet spørger, hvorfor en kæmpende elev ville gøre det, og du har ikke et svar.

Inden næste demo har du brug for så meget klarhed: at prompte en model til at spille studerende producerer lyden af en lærende. Det, der producerer adfærden, er en begrænsning på, hvad simulatoren ved, struktur i turene og validering mod optegnelser fra rigtige lærende. Kun 3 % af de studier, der simulerer lærende, validerer deres simulator efter brug, så ingen vil tjekke det for dig.

## Den korte version

**1.** Skriv ned, hvilke lærende du ikke simulerer, og sæt den sætning, hvor dine brugere kan læse den.

**2.** Test overbevisningstilstanden, ikke prosaen. Spørg, hvad simulatoren siger efter en korrektion.

**3.** Begræns viden med vilje: angiv den epistemiske tilstand, eller fjern viden.

**4.** Script interaktionen tur for tur. En bedre personaprompt retter ikke drift.

**5.** Bedøm adfærdsmæssig troskab og vejledningsresponsivitet hver for sig, mod optegnelser fra rigtige lærende.

## Beslut, hvilket spørgsmål simulatoren besvarer

Tre opgaver bliver klumpet sammen under »simuleret studerende«, og de kræver forskelligt maskineri. At øve en lærer eller en vejleder kræver en partner, der opfører sig plausibelt under pres. At revidere, hvordan en AI behandler forskellige lærendeprofiler, kræver dækning af de profiler, du bekymrer dig om. At forudsige udfald for et kursus kræver en fordeling af lærende snarere end ét overbevisende individ. En simulator bygget til den første opgave vil skuffe dig på den tredje, og evidensen nedenfor bliver ved med at skelne dem.

## Navngiv de lærende, du ikke dækker

Det mest nyttige fund for enhver, der er ved at stole på en simulator, handler om dækning. Tolv lærere, der vejledte LLM-studerende, rapporterede om overkomplekst sprog, manglende følelser, unaturlig opmærksomhed og uforklarede vidensspring, og simulationerne repræsenterede kun én af fire kvadranter af virkelig elevadfærd ([[llm-student-simulation-teacher-insights|Martynova et al., 2026]]). Den kvadrant, de dækkede, var den nemmeste at simulere.

Det betyder noget, fordi næsten ingen tjekker. Kun 3 % af de studier, der simulerer lærende, validerer deres simulator efter brug. Bygger du en og springer valideringen over, er du i det overvældende flertal, og du er også grunden til, at den statistik bliver ved med at være citerbar.

## Begræns, hvad simulatoren ved

En kapabel model kan ikke nemt foregive at være en delvis vidende. Forskningen kalder det **kompetenceparadokset**: bredt kapable modeller, der bliver bedt om at efterligne delvist vidende lærende, producerer urealistiske fejlmønstre og læringsdynamikker.

Driften har en retning, og den peger på de lærende, der mest har brug for at blive simuleret. Mod elevidéer hentet fra 49 NGSS-alignede naturfagslektioner holdt seks modeller de fleste idéer inden for det forventede vidensomfang og cirka to tredjedele på eller under det tilsigtede læseniveau, og skød derefter over præcis der, hvor den lærende var yngst. Idéer fra grundskole og mellemtrin overskred oftere det tilsigtede klassetrins vidensomfang og læseniveau, og korpusset hældede mod bredere ræsonnement, mere teknisk ordforråd og færre usikkerhedsmarkører (»måske«, »det ser ud til«) end de virkelige lektionsidéer ([[llm-simulating-student-scientific-thinking-2026|Nguyen og Cao, 2026]]).

To noter fra det studie. Modelvalg er ikke endimensionelt, da et system, der matcher lektionsidéer tæt, stadig kan skyde dem over klassetrinnet. Og reparationen er ofte instruktionsmæssig: en eksplicit re-prompt på klassetrinsniveau løftede de fleste modeller tilbage i intervallet.

## Angiv tilstanden, eller fjern viden

Hvis modellen ved for meget, kan du navngive den tilstand, den bør være i, eller trække den viden fra, den ikke bør have.

**Beting på en epistemisk tilstand.** En træningsfri ramme bygger hver studerendes kognitive prototype fra en [[knowledge-graph|vidensgraf]] og scorer beam-search-kandidater mod den og rapporterer en forbedring i simulationens nøjagtighed på 100 % ([[simulating-students-diverse-cognitive-levels-2025|Wu et al., 2025]]). Dens kvalitet stiger med den studerendes kognitive niveau, så svagere lærende forbliver det svære tilfælde, hvilket er uheldigt, givet at de normalt er pointen. At modellere kognitiv dynamik snarere end en statisk persona går længere: CogEvolutions ICAP-baserede tilstandsopdateringer nåede R²LC = 0,92, hvor statiske agenter når 0,45, og kollapsede til 0,58 uden dens ICAP-modul ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang et al., 2026]]).

**Fjern viden.** At undertrykke 16 målrettede videnskomponenter i Mistral-7B sænkede nøjagtigheden fra cirka 0,75 ved et glemselsforhold på 10 % til under 0,5 ved 40 %, mens basismodellen holdt sig nær 0,85. Den undertrykte viden viste sig genoprettelig gennem superviseret genindlæring og coach-guidet dialog ([[simulating-novice-students-machine-unlearning-2026|Song, Guo og Lin, 2026]]). Det er det tætteste, man kommer på at fremstille en novice direkte, og genopretteligheden bliver en funktion, hvis du vil have simulatoren til at lære i løbet af en session.

## Script turene, ikke personaen

Personastabilitet viser sig at være et interaktionsdesignproblem snarere end et modelvalgsproblem. Ved at krydse fem LLM'er med tre promptdesigns og fire ADHD-intensitetsprofiler eliminerede scriptede, opgaveforankrede interaktioner observatørvurderet adfærdsdrift, med op til 97 % mod uscriptet dialog. Uden eksplicitte personainstrukser hældede baseline-elevrepræsentationen mod høje ADHD-symptomer ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase og Leins, 2026]]).

Hvis din simulator driver, så se på, hvad du beder den gøre tur for tur, før du skifter model eller omskriver beskrivelsen af den studerende.

## Bedøm to ting, ikke én

StudentSim kræver, at to egenskaber holder sammen: **adfærdsmæssig troskab**, hvor godt simulatoren matcher en studerendes egne svar, og **vejledningsresponsivitet**, hvor pålideligt den opdaterer sig mod det, vejlederens guidance peger på. Dens benchmark støber offentlige lærendekorpora (skak, andetsprogligt engelsk skrivning, matematik) om til en protokol pr. studerende, hvor enhver simulator tilpasses og scores på tilbageholdte optegnelser. Domænespecifik tilstandssporing kom svagt ud på responsivitet, og prompt-only LLM-rollespil kom svagt ud på troskab ([[studentsim-llm-student-simulators|Yang et al., 2026]]). En simulator kan bestå den ene test og fejle den anden, så rapportér begge.

Som proof of concept producerede en frossen StudentSim brugt som belønning i en skakvejleder-[[reinforcement-learning|forstærkningsindlærings]]-loop vejledere, som eksperter vurderede som mere præcise, bedre styrede og mere personaliserede end dem, der blev trænet mod en frontier-LLM-simulatorbelønning eller helt uden RL. En god simulator kan være træningssignalet såvel som målingen.

Troskab på handlingsniveau har sin egen grænse. Elevsimulatorer gengiver observerbare handlinger uden den latente ræsonnering bag dem, og [[inside-llm-student-simulator-reasoning-2026|INSIDE]] finjusterer modeller til at generere en intern dialog før hver handling og når den højeste overensstemmelse mellem genereret ræsonnering og rigtige kodeændringer på 51,8 % på kendte problemer og 57,9 % på usete, uden at miste handlingstroskab (Niousha et al., 2026). Hvis du vil vide, hvorfor din simulerede studerende gjorde noget, er det ikke nok at matche handlingen.

## Valider mod rigtige lærende, og rapportér baseline

To sammenligninger viser, hvad validering koster.

Ved at benchmarke ni simulationsmetoder mod syv referencebaserede metrics på 382 tilbageholdte dialoger fra det største offentlige korpus af rigtige elev-vejleder-matematikdialoger kom promptning bagud for finjustering på dialoghandlinger (0,4998 mod 0,6840), ROUGE-L (0,1648 mod 0,3212) og cosinuslighed (0,5460 mod 0,7390). Den bedste testede metode, præferenceoptimering på en 8B-model, slog kun marginalt superviseret finjustering og var dårligere på fejl, og en menneskelig evaluering med tre vejledere gengav den rangorden ([[simulated-students-tutoring-dialogues-2026|Scarlatos et al., 2026]]). Toppen af denne rangstige ligger tæt på midten, så den baseline, du rapporterer, afgør, hvor imponerende dit eget tal ser ud.

SWIM er den klareste sammenligning af promptning, finjustering og forstærkningsindlæring, fordi den scorer hvert genereret essay mod en måltrækprofil i stedet for at bedømme det impressionistisk. Rubrikforankret promptning gav begrænset kontrol selv for stærke proprietære modeller, med et bedste gennemsnitligt træk-QWK på 0,577 (Claude Sonnet) og 0,422 (GPT-5.4) og nær nul for en åben 7B-model. Superviseret finjustering på rigtige score-essay-par nåede 0,474 ± 0,023 for den 7B-model. GRPO med en belønning afledt af automatisk essay-scoring nåede 0,618 ± 0,005, med gevinster der holdt på to uafhængige scorere, som policyen aldrig blev trænet imod ([[swim-student-writing-simulation-2026]]).

Promptning producerede også en idealiseret population snarere end en realistisk: gennemsnitlig normaliseret samlet score 0,74 mod 0,58 for rigtige studerende, og en medianlængde på 304 ord mod 167. De trænede modeller genskabte de menneskelige score- og længdefordelinger uden nogen længdesupervision. Én ting forblev svær: autentisk lavkompetent form. Trænede modeller genskabte syntaks, men skrev for få stave- og grammatikfejl, mens promptning simulerede svaghed gennem overfladisk korruption, stavefejl sprøjtet ud over ellers kompetent prosa.

Overfladisk realisme er en svag test i begge retninger. I et blindet studie fejlklassificerede ekspertannotatorer 164 af 196 (83,7 %) LLM-genererede Java-besvarelser som menneskeskrevne, fordi fejlene funktionelt var umulige at skelne fra autentiske, og overensstemmelsen med rigtige fejl faldt derefter, efterhånden som opgavens sværhedsgrad steg ([[simulating-students-java-programming-errors-llms|Keramati et al., 2026]]). På tværs af syv modeller fra 4B til 120B parametre flippede simulatorerne til det korrekte svar med næsten ensartede rater, uanset hvilken feedback de fik, så outputlighed siger intet om overbevisningstilstanden bag det. Træning mod **Selective Flip Score** løftede troværdigheden med op til +0,56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar og Sachan, 2026]]).

## Tjek, om en beskrivelse ville gøre det

Før du bygger en kohorte, så tjek den billigere mulighed. Til at evaluere en online læringsoplevelse, før studerende engagerer sig, forudsige frafald og gennemførelse og give designfeedback klarede en enkelt »beskrivende« webagent, der går gennem lektionen og producerer en rig beskrivelse af oplevelsen, sig bedre end direkte at simulere en population af studerende.

De simulerede studerende i den sammenligning viste langt mindre adfærdsmæssigt spænd end rigtige lærende: på tværs af 100 agenter på fem testlektioner gengav de kun cirka 4 % af de stier, rigtige studerende tog, mens de kostede væsentligt mere compute. Describe-then-predict-pipelinen opnåede den bedste forudsigelse af frafaldsfordelingen på et massivt globalt CS1-kursus, med en gennemsnitlig JSD på 0,060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell og Piech, 2025]]).

Den grænse, den trækker, er praktisk. At simulere en fordeling af studerende kan være unødvendigt eller kontraproduktivt, når målet er udfaldsforudsigelse eller designkritik. Simulation tjener sine omkostninger hjem, når det er vigtigt at dække reel variation blandt lærende, såsom at revidere en AI's behandling af forskellige profiler eller give en lærer noget at øve sig imod.

## Hvad udviklere får galt i byen med dette

Overfladisk realisme er målet. En fejlklassificeringsrate på 83,7 % for maskinskrevet kode og næsten ensartet svarskift på tværs af syv modeller siger begge, at en menneskelig dommer, der læser outputtet, ikke kan se den egenskab, du påstår. Test i stedet svaret på en korrektion.

En bedre personaprompt retter drift. Scriptede, opgaveforankrede ture skar observatørvurderet drift med op til 97 % på tværs af fem modeller og tre promptdesigns. Det var designet af turene, der gjorde arbejdet.

En stærkere basismodel lukker kompetencegabet. En stærk proprietær model scorede 0,422 på træk-QWK under promptning, mens en finjusteret 7B nåede 0,474, og den samme seksmodel-sammenligning skød mest over præcis på de yngste klassetrin. Modelvalg bytter én troskabsakse for en anden.

Validering betyder, at en kollega læste en transskription og syntes, den lød rigtig. Java-resultatet viser, hvor langt den dom rækker. Validering betyder tilbageholdte optegnelser fra rigtige lærende og en baseline, du kan navngive.

At simulere en population er den grundige mulighed. På tværs af 100 agenter dækkede simulationerne cirka 4 % af de stier, rigtige studerende tog, med væsentligt højere compute end den beskrivende agent.

## Hvad der vil komme imod dig

**»Lærerne kunne ikke skelne vores simulator fra en studerende.«** I det blindede Java-studie fejlklassificerede ekspertannotatorer 83,7 % af maskinbesvarelserne som menneskelige. Det måler annotatorerne, og det lader overbevisningstilstanden uundersøgt.

**»Finjustering er uden for vores teams rækkevidde.«** Så afgræns påstanden til det, promptning understøtter, og sig det. Promptning satte et loft på 0,577 for den stærkeste testede model og nær nul for en åben 7B, og den producerede en idealiseret scorefordeling.

**»Vi har ingen adgang til data fra rigtige lærende.«** StudentSims protokol er bygget af offentlige lærendekorpora i skak, andetsproglig skrivning og matematik. Offentlige data begrænser, hvad du kan påstå om din egen population, og de giver dig en baseline, hvilket er det, de fleste rapporter udelader.

**»GRPO slog superviseret finjustering, så vi bør træne med RL.«** Det gjorde den, med 0,618 mod 0,474. Lavkompetent form forblev svær i begge tilfælde, med for få stave- og grammatikfejl, og i en separat benchmark slog præferenceoptimering kun marginalt finjustering og tabte på fejl. Tjek, hvilken egenskab dit anvendelsestilfælde afhænger af.

**»De svageste lærende er en lille del af vores brugere.«** De er det sværeste tilfælde for enhver metode på denne side, og dækningsfundet siger, at simulationerne klynger sig i den nemmeste kvadrant. Hvis din simulator skal bruges til at drage konklusioner om kæmpende studerende, hører det gab i rapporteringen.

## Hvad du kan gøre i denne uge

**1.** Skriv dækningssætningen: hvilke lærende denne simulator ikke repræsenterer. Sæt den i README'en og i demonoterne.

**2.** Tilføj én probe til dit testsæt, der korrigerer simulatoren og tjekker, om den bliver ved med at tage fejl.

**3.** Erstat fri personachat i én flow med opgaveforankrede ture, og sammenlign driften.

**4.** Bedøm én eksisterende simulator mod tilbageholdte rigtige optegnelser på både troskab og responsivitet, og rapportér de to tal hver for sig.

**5.** Kør den beskrivende agent-tjek på det spørgsmål, du faktisk har brug for svar på, før du finansierer en kohorte.

## Hvor du kan gå videre

[[simulating-students|Simulerede studerende]] er den fulde konceptsida. [[checking-whether-educational-ai-works|At tjekke, om pædagogisk AI virker]] dækker evaluering af de systemer, du tester mod en simulator, og [[making-ai-better-at-supporting-learning|At gøre AI bedre til at understøtte læring]] dækker træningsmetoderne bag finjusteringsresultaterne her. [[addressing-common-misconceptions-ai-education|At håndtere almindelige misforståelser om AI i uddannelse]] tager spørgsmålet op, om simulerede studerende kan stå i stedet for rigtige lærende i forskning.
