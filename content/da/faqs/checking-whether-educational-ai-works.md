---
title: "Hvordan ved vi, at en pædagogisk AI fungerer korrekt og ikke bare scorer godt?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/checking-whether-educational-ai-works
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

En leverandørs evalueringsrapport lander med ét tal i toppen: enighed med menneskelige bedømmere, 0,84. Eller dit pilotprojekt slutter på fredag, og evidensen består af en tilfredshedsundersøgelse plus en benchmarklinje kopieret fra modellens udgivelsesnoter. I mødet spørger nogen, om systemet virker, og du har et tal, der lyder som et svar.

Det korte svar: de scorer, du oftest ser, måler lighed, og lighed er en svagere påstand end »dette underviser« eller endda »denne feedback er læsbar«. Beslut, hvad hvert tal må bevise, scor hvert output, dit system producerer, og forvandl nøjagtighed til en regel med en tærskel, en person og en besparelse knyttet til. Et tal, ingen kan handle på, er ikke evidens.

## Den korte version

**1.** Skriv én sætning, der navngiver det, du bekymrer dig om, og vælg så et mål, der læser den ting. Ordoverlap fortæller dig ikke, om ræsonneringen er rigtig.

**2.** Evaluer hvert output separat. En stærk bedømmelsesscore siger intet om feedbackmodulet ved siden af.

**3.** Lad en person vurdere omkring halvtreds outputs, og sammenlign de vurderinger med din automatiske kontrol. Hvor de to er uenige, er kontrollen det, der er under test.

**4.** Erstat »nøjagtighed 0,84« med en regel: under denne konfidens læser et menneske svaret. Rapportér tærsklen, den andel af arbejdet den sparer, og hvad enigheden blev.

**5.** Test sikkerhed over hele samtaler, og tjek enhver simuleret studerende, før du stoler på, hvad den siger om din tutor.

## Beslut hvad tallet må bevise

To familier af tal dominerer denne litteratur. Begge måler, hvor tæt dit output ligger på noget andet, hvilket er en svagere påstand end korrekthed.

**Lighedsscorer** (ROUGE og BLEU) sammenligner ordlyden af dit systems svar med ordlyden af et referencesvar. En model, der skriver noget tæt på den forventede tekst, scorer højt, selv når dens ræsonnering er forkert, eller når en studerende kan nå det rigtige svar ad en vej, der ikke lærer noget.

**Enighedsscorer** (QWK, quadratic weighted kappa) måler, hvor tæt modellens karakterer ligger på et menneskes. En model kan ramme bedømmeren på den endelige karakter og samtidig tage fejl af hvorfor, og hvorfor er den del, en studerende lærer af.

En studerende kan nå et forkert svar ad en forkert vej, der ligner en rigtig, og ingen lighedsscore bemærker det. Hvis ræsonnering er det, du bekymrer dig om, skal målet læse den: en rubrik anvendt af en person, eller et tjek skrevet til netop det trin.

Assistenten til kurset i lineære styresystemer rapporterer det rigtigt. Dens bedste konfiguration nåede en lighedsscore på **0,4093** mod referencesvar, med forbedringen målt pålideligt over nul, og forfatterne siger klart, at tallene måler ordlyd og format ([[lora-finetuned-control-systems-course-qa-2026]]). Scoren er ikke imponerende, og artiklen er stadig nyttig, fordi den siger, hvad scoren dækker.

## Scor hvert output separat

I WrAFT-projektet nåede en finjusteret model en enighedsscore på **0,84** med menneskelige bedømmere på tværs af 360 tilbageholdte TOEFL-opgaver. Det er et stærkt resultat for bedømmelse. Samme projekts model, trænet til at skrive feedback, producerede output, der var afkortet og ikke kunne parses, mens det blot at prompte en anden model gav feedback, som lærerne foretrak ([[wraft-automated-writing-evaluation-argumentative-2026]]).

Vidensbasen bærer den samme fejl i en anden form: en udrulning, hvis bedømmelsesmodul scorede godt, og hvis feedback ankom afskåret midt i en sætning og ulæselig. Intet i overskriftstallet sagde det.

Så list de outputs, dit system producerer, og giv hvert af dem sit eget mål og sin egen beståelsesbetingelse. Bedømmelse, feedbacktekst, hintvalg og sikkerhedsafvisninger fejler på forskellige måder, og en score på modulniveau kan ikke se ud over sit eget modul.

## Sæt et menneske der, hvor modellen er usikker

En korrelation fortæller dig, at modellen som regel har ret. Den fortæller dig ikke, hvad du skal gøre i de tilfælde, hvor den ikke har. Resultatet med konfidensbaseret routing er den reneste skabelon i vidensbasen, og den er kort nok til at kopiere.

Konfidens viste sig at være et pålideligt advarselstegn: når modellen var usikker, var den mere tilbøjelig til at tage fejl (**β = -0,602, p < 0,001**). Holdet sendte de mindst sikre **20 %** af svarene til et menneske. Den ene regel hævede enigheden med menneskelige karakterer fra **0,78 til 0,82** og skar det manuelle bedømmelsesarbejde med omkring **80 %** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Se på, hvad rapporten indeholder: en tærskel, en person og en besparelse. »Enighed 0,84« indeholder ingen af dem, og det er derfor, det er svært at handle på og let at diskutere.

## Tjek din automatiske kontrol mod et menneske

Mange hold bruger nu en anden model til at bedømme den første. Ordningen er rimelig, og den anden model har ikke automatisk ret.

En undersøgelse, hvor en frontiermodel skrev hints til et [[intelligent-tutoring|intelligent tutorsystem]], fandt, at omkring **35 %** af dem var for generelle, forkerte eller gav svaret væk, og at modellens egne automatiserede kvalitetstjek var uenige med menneskelig vurdering om, hvilke der var dårlige ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Praktisk version: tag en stikprøve på omkring halvtreds outputs, lad en person vurdere dem, og sammenlign det med din kontrols vurderinger. Hvor de to divergerer, har du lært noget om kontrollen. Gem stikprøven og uenighedstabellen, for den er også det artefakt, der svarer en bedømmer, som spørger, hvordan du ved det.

## Mål selve størrelsen, når opgaven tillader det

Den reneste løsning er at træne modellen på den samme størrelse, du har tænkt dig at måle. En finjusteret model blev trænet til at genskabe testopgavers statistiske egenskaber: hvor svær hver opgave er, hvor godt den skelner stærkere fra svagere studerende. Den lærte de mønstre i stedet for at få dem fortalt ([[multimodal-item-parameter-estimation-2026]]). Fordi målet var en egenskab ved selve bedømmelsen, kunne evalueringen handle om den egenskab i stedet for om ordlyd.

Rapportér udviklingen såvel som slutpunktet. SWIM's skrivesimulator offentliggjorde hvert trins score side om side: rubrikbaseret prompting **0,577**, finjustering **0,474 ± 0,023**, reinforcement learning **0,618 ± 0,005** ([[swim-student-writing-simulation-2026]]). En læser kan se ud fra den tabel, om træningen gjorde noget. Et enkelt sluttal kan ikke fortælle dem det, og det skjuler et trin, hvor den finjusterede model gjorde det dårligere end prompten.

## Sammenlign med noget uden for dit projekt

Få en baseline først, også en billig. Kursusassistentens model uden forankring scorede under en almindelig søgning på nøgleord, hvilket er den slags resultat, der ændrer køreplanen og koster en dag at finde.

En ekstern benchmark fortæller dig derefter, om dit tal overhovedet er noget værd. På CDPK-pædagogikbenchmarken nåede EduQwen **96,52 %** mod Gemini-3 Pro's **90,55 %** ([[singh-eduqwen-pedagogical-rl-2026]]). Pedagogy Benchmark, bygget på rigtige læreres efteruddannelseseksamener og dækkende **97 modeller**, fandt nøjagtighed fra **28 % til 89 %** ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

På en opgave om undervisning spændte modellerne fra dårlige til gode, så et benchmarkresultat placerer dit system et sted inde i et bredt interval.

## Test sikkerhed over en hel samtale

Det meste sikkerhedstest tjekker en enkelt udveksling. De skader, der betyder noget i tutoring, akkumulerer. SafeTutors fandt, at selv modeller bygget specifikt til undervisning forringes over en lang samtale og kan afsløre svar, de burde tilbageholde ([[hazra-safetutors-pedagogical-safety-2026]]).

Kør tjekket på tværs af hele samtaler, og skriv testturene med vilje: den studerende, der tager fejl, den der bliver ved med at presse på, den der prøver at tale modellen ud af dens rolle. En tutor, der holder i ti ture og folder i den ellevte, fejler den test, der betyder noget, og en suite pr. svar vil score den som ren.

## Tjek den simulerede studerende, før du stoler på den

At generere simulerede studerende i stedet for at rekruttere rigtige gør evaluering langt billigere. En simuleret studerende er også et måleinstrument, og det kan tage fejl på de måder, instrumenter tager fejl: for samarbejdsvillig, for flydende, for hurtig til at acceptere et hint.

Den mest direkte test i vidensbasen benchmarkede simulerede studerende og promptstyrede studerende mod **382 tilbageholdte dialoger** fra den største offentlige samling af rigtige matematikdialoger mellem studerende og tutor, med syv mål, der dækkede sprog, adfærd og tænkning ([[simulated-students-tutoring-dialogues-2026]]). Andet arbejde presser på for realismen fra andre vinkler: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] træner modeller til både at handle og tænke som studerende, og historiebevidste profiler betinger simulationen på en studerendes fortid snarere end en fast persona ([[history-aware-student-simulation]]).

Hvis dit testapparat er en simuleret studerende, skal du validere simulatoren mod rigtige transskriptioner, før du lader den bedømme din tutor.

## Det, evalueringsteams tager fejl af

En høj enighedsscore betyder, at systemet er korrekt. Det betyder, at systemet bedømmer som den bedømmer, du sammenlignede med, på de opgaver, du sammenlignede på. WrAFT's 0,84 kom med feedback, der ikke kunne parses.

Et tal kan stå for hele produktet. Hold sender et dashboard ud med »nøjagtighed 0,84« i hjørnet og intet felt for feedbackmodulet, hintpolitikken eller afvisningsadfærden. Scoren på modulniveau er det letteste tal at beregne og det mindst informative at rapportere.

En ekstern benchmark afgør, om værktøjet virker. Pedagogy Benchmarks spredning fra 28 % til 89 % siger, at opgavefamilien er svær og ujævnt betjent. Din placering i det interval er et faktum om din model. Hvad dine studerende kan bagefter, er et andet faktum.

En model, der bedømmer en model, er en billig erstatning for menneskelige vurderinger. Den er billig. Tallet 35 % og uenigheden om, hvilke hints der var dårlige, beskriver, hvad en bedømmer, der aldrig blev tjekket, lukker igennem.

Simulerede studerende gør evaluering gratis. De gør den billig, og de flytter omkostningen over i validering. Sammenligningen med 382 dialoger findes, fordi instrumentet skulle kalibreres.

## Det, du vil få igen

**»Vi har ikke annotatorer til det her.«** Halvtreds vurderede outputs er nok til at begynde. Vurder dem selv, hvis ingen andre har tid, og gem arket.

**»Vores benchmarkscore slår Gemini.«** Det gør den, på CDPK, på de prompter den benchmark bruger. Læg målet uden hjælp ved siden af.

**»Vores automatiske bedømmer er enig med vores menneskelige bedømmere.«** Så har du én korrelation på én stikprøve. Spørg, hvilke outputs den var uenig om, og læs dem, for det er der, fejlen bor.

**»Vi kan ikke køre en fuld evaluering før lancering.«** Kør de tre billige: ét output scoret separat, halvtreds outputs vurderet af en person, én sikkerhedskørsel i samtalelængde. De dyre punkter kan følge efter piloten.

**»Systemet er kun en demo, så evaluering er for tidligt.«** En demo er det billigste sted at finde ud af, at dit tal måler ordlyd. Når der først er en køreplan knyttet til det, koster samme fund mere at handle på.

## Det, du kan gøre i denne uge

**1.** Skriv den ene sætnings påstand, din evaluering skal understøtte. Sæt den øverst i eval-dokumentet.

**2.** List hvert output, systemet producerer, og giv hver en række, et mål og en beståelsesbetingelse.

**3.** Træk halvtreds outputs ud, vurder dem selv, og sæt dine vurderinger ved siden af kontrollens.

**4.** Beregn konfidensfordelingen, og skriv routingreglen med et tal i, plus navnet på den person, der læser det, der falder under.

**5.** Kør én sikkerhedssamtale, hvor den studerende tager fejl, presser igen to gange og beder om svaret.

## Hvor du kan gå videre

[[making-ai-better-at-supporting-learning|Hvordan kan vi gøre AI bedre til at understøtte læring i vores eget fag?]] dækker designsiden af samme problem. [[training-ai-tutors-to-guide-rather-than-answer]] håndterer træningsvejen til en tutoringadfærd, og [[evaluating-ai-interventions-methods]] er den underviserrettede version af dette spørgsmål, med [[reporting-interpreting-aied-research]] som den forskningsrettede. Metoderne ligger under [[ai-ed-evaluation]] og [[llm-training-and-fine-tuning]].
