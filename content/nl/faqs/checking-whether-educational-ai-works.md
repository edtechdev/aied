---
title: "Hoe weten we of een educatieve AI correct werkt en niet alleen goed scoort?"
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
updated: "2026-10-29T14:57:54-04:00"
translation_of: faqs/checking-whether-educational-ai-works
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Het evaluatierapport van een leverancier komt binnen met een getal bovenaan: overeenstemming met menselijke beoordelaars, 0,84. Of uw pilot eindigt vrijdag en het bewijs bestaat uit een tevredenheidsenquête plus een benchmarkregel die uit de release notes van het model is gekopieerd. In de vergadering vraagt iemand of het systeem werkt, en u hebt een cijfer dat klinkt als een antwoord.

Het korte antwoord: de scores die u het vaakst ziet, meten gelijkenis, en gelijkenis is een zwakkere bewering dan 'dit leert' of zelfs 'deze feedback is leesbaar'. Bepaal wat elk getal mag bewijzen, scoor elke uitvoer die uw systeem produceert, en verander nauwkeurigheid in een regel met een drempel, een persoon en een besparing eraan vast. Een getal waar niemand iets mee kan, is geen bewijs.

## De korte versie

**1.** Schrijf een zin die benoemt wat u belangrijk vindt, en kies dan een maatstaf die dat ding leest. Woordoverlap vertelt u niet of de redenering klopt.

**2.** Evalueer elke uitvoer apart. Een sterke beoordelingsscore zegt niets over de feedbackmodule ernaast.

**3.** Laat een persoon ongeveer vijftig uitvoeren beoordelen en vergelijk die beoordelingen met uw automatische controle. Waar de twee het oneens zijn, is de controle het ding dat wordt getest.

**4.** Vervang 'nauwkeurigheid 0,84' door een regel: onder dit vertrouwen leest een mens het antwoord. Rapporteer de drempel, het aandeel werk dat die bespaart, en waartoe de overeenstemming werd.

**5.** Test veiligheid over hele gesprekken, en controleer elke gesimuleerde student voordat u vertrouwt wat die over uw tutor zegt.

## Bepaal wat het getal mag bewijzen

Twee families van getallen domineren deze literatuur. Beide meten hoe dicht uw uitvoer bij iets anders ligt, en dat is een zwakkere bewering dan juistheid.

**Gelijkenisscores** (ROUGE en BLEU) vergelijken de formulering van het antwoord van uw systeem met de formulering van een referentieantwoord. Een model dat iets schrijft dat dicht bij de verwachte tekst ligt, scoort goed, zelfs wanneer zijn redenering fout is, of wanneer een student het juiste antwoord kan bereiken langs een route die niets leert.

**Overeenstemmingsscores** (QWK, quadratic weighted kappa) meten hoe dicht de cijfers van het model bij die van een mens liggen. Een model kan de beoordelaar op het eindcijfer evenaren en toch fout zitten over het waarom, en het waarom is het deel waarvan een student leert.

Een student kan een fout antwoord bereiken langs een verkeerde route die op een juiste lijkt, en geen enkele gelijkenisscore merkt dat. Als redeneren is wat u belangrijk vindt, moet de maatstaf dat lezen: een rubric die door een persoon wordt toegepast, of een controle die voor die specifieke stap is geschreven.

De cursusassistent voor Linear Control Systems rapporteert dit op de juiste manier. De beste configuratie haalde een gelijkenisscore van **0,4093** tegen referentieantwoorden, waarbij de verbetering betrouwbaar boven nul lag, en de auteurs zeggen ronduit dat de getallen formulering en formaat meten ([[lora-finetuned-control-systems-course-qa-2026|verslag over de cursusassistent Linear Control Systems]]). De score is weinig indrukwekkend en het artikel is toch nuttig, omdat het zegt wat de score dekt.

## Scoor elke uitvoer apart

In het WrAFT-project haalde een fijngetuned model een overeenstemmingsscore van **0,84** met menselijke beoordelaars over 360 achtergehouden TOEFL-opstellen. Dat is een sterk resultaat voor beoordelen. Het model van hetzelfde project dat was getraind om feedback te schrijven, leverde uitvoer op die afgekapt en onparsebaar was, terwijl het simpelweg prompten van een ander model feedback opleverde die docenten prefereerden ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT-project]]).

De kennisbank bevat dezelfde fout in een tweede vorm: een implementatie waarvan de beoordelingsmodule goed scoorde en waarvan de feedback midden in een zin afgekapt en onleesbaar aankwam. Niets in het kopcijfer zei dat.

Dus lijst de uitvoeren op die uw systeem produceert, en geef elk ervan een eigen maatstaf en een eigen slaagvoorwaarde. Beoordelen, feedbacktekst, het kiezen van hints en weigeringen om veiligheidsredenen falen op verschillende manieren, en een score op moduleniveau kan niet voorbij zijn eigen module kijken.

## Zet een mens waar het model onzeker is

Een correlatie vertelt u dat het model meestal gelijk heeft. Die vertelt u niet wat u moet doen in de gevallen waarin het dat niet heeft. Het resultaat met vertrouwenroutering is het schoonste sjabloon in de kennisbank, en het is kort genoeg om te kopiëren.

Vertrouwen bleek een betrouwbaar waarschuwingssignaal: wanneer het model onzeker was, zat het vaker fout (**β = -0,602, p < 0,001**). Het team stuurde de minst zekere **20%** van de antwoorden naar een mens. Die ene regel verhoogde de overeenstemming met menselijke cijfers van **0,78 naar 0,82** en sneed het handmatige beoordelingswerk met ruwweg **80%** terug ([[know-when-to-trust-ai-scoring-reliability-2026|studie naar de betrouwbaarheid van AI-scoring]]).

Kijk wat het rapport bevat: een drempel, een persoon en een besparing. 'Overeenstemming 0,84' bevat geen van die drie, en daarom is het moeilijk om ernaar te handelen en gemakkelijk om erover te twisten.

## Controleer uw automatische controle tegen een persoon

Veel teams gebruiken nu een tweede model om het eerste te beoordelen. De opzet is redelijk en het tweede model heeft niet automatisch gelijk.

Een studie waarin een frontiermodel hints schreef voor een [[intelligent-tutoring|intelligent tutorsysteem]] vond dat ruwweg **35%** ervan te algemeen was, onjuist, of het antwoord weggaf, en dat de eigen automatische kwaliteitscontroles van het model het oneens waren met het menselijke oordeel over welke slecht waren ([[reddig-maclellan-personalized-feedback-llm-2026|Reddig en MacLellan]]).

Praktische versie: neem een steekproef van ongeveer vijftig uitvoeren, laat een persoon ze beoordelen, en vergelijk dat met de beoordelingen van uw controle. Waar de twee uiteengaan, hebt u iets geleerd over de controle. Bewaar de steekproef en de onenigheidstabel, want dat is ook het artefact dat een reviewer antwoordt die vraagt hoe u het weet.

## Meet de grootheid zelf wanneer de taak dat toelaat

De schoonste oplossing is het model trainen op dezelfde grootheid die u wilt meten. Een fijngetuned model werd getraind om de statistische eigenschappen van toetsvragen te reproduceren: hoe moeilijk elk item is, hoe goed het sterkere van zwakkere studenten scheidt. Het leerde die patronen in plaats van ze te horen te krijgen ([[multimodal-item-parameter-estimation-2026|studie naar het schatten van itemparameters]]). Omdat het doel een eigenschap van de toetsing zelf was, kon de evaluatie over die eigenschap gaan in plaats van over formulering.

Rapporteer de ontwikkeling en niet alleen het eindpunt. De schrijfsimulator SWIM publiceerde de score van elke fase naast elkaar: prompten met een rubric **0,577**, fijn tunen **0,474 ± 0,023**, reinforcement learning **0,618 ± 0,005** ([[swim-student-writing-simulation-2026|SWIM]]). Een lezer kan aan die tabel zien of de training iets deed. Een enkel eindgetal kan dat niet vertellen, en het verbergt een fase waarin het fijngetunede model slechter deed dan de prompt.

## Vergelijk met iets buiten uw project

Zoek eerst een basislijn, ook een goedkope. Het model van de cursusassistent zonder grounding scoorde onder een gewone zoekopdracht op trefwoorden, wat het soort resultaat is dat de roadmap verandert en een dag kost om te vinden.

Een externe benchmark vertelt u vervolgens of uw getal überhaupt ergens goed voor is. Op de CDPK-pedagogiekbenchmark haalde EduQwen **96,52%** tegen **90,55%** van Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026|Singh et al.]]). De Pedagogy Benchmark, gebouwd uit echte examens voor de professionele ontwikkeling van docenten en **97 modellen** omvattend, vond nauwkeurigheid van **28% tot 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

Op een taak over lesgeven liepen modellen van slecht tot goed, dus een benchmarkresultaat plaatst uw systeem ergens binnen een brede bandbreedte.

## Test veiligheid over een heel gesprek

De meeste veiligheidstests controleren een enkele uitwisseling. De schade die bij tutoring ertoe doet, hoopt zich op. SafeTutors vond dat zelfs modellen die speciaal voor lesgeven zijn gebouwd, achteruitgaan over een lang gesprek en antwoorden kunnen onthullen die ze zouden moeten achterhouden ([[hazra-safetutors-pedagogical-safety-2026|SafeTutors]]).

Voer de controle uit over volledige gesprekken, en schrijf de testbeurten bewust: de student die het fout heeft, degene die blijft aandringen, degene die het model uit zijn rol probeert te praten. Een tutor die tien beurten standhoudt en bij de elfde omvalt, zakt voor de test die ertoe doet, en een suite per antwoord zal hem als schoon scoren.

## Controleer de gesimuleerde student voordat u die vertrouwt

Gesimuleerde studenten genereren in plaats van echte werven maakt evaluatie veel goedkoper. Een gesimuleerde student is ook een meetinstrument, en dat kan fout zijn op de manieren waarop instrumenten fout zijn: te meewerkend, te vloeiend, te snel geneigd een hint te accepteren.

De meest directe test in de kennisbank benchmarkte gesimuleerde en gepromptde studenten tegen **382 achtergehouden dialogen** uit de grootste openbare verzameling echte wiskundedialogen tussen student en tutor, met zeven maten voor taal, gedrag en denken ([[simulated-students-tutoring-dialogues-2026|studie met gesimuleerde studenten]]). Ander werk duwt vanuit andere hoeken op realisme: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] traint modellen om zowel te handelen als te denken als studenten, en geschiedenisbewuste profielen conditioneren de simulatie op het verleden van een student in plaats van op een vast persona ([[history-aware-student-simulation|geschiedenisbewuste studentensimulatie]]).

Als uw testopstelling een gesimuleerde student is, valideer de simulator dan tegen echte transcripten voordat u die uw tutor laat beoordelen.

## Wat evaluatieteams verkeerd doen

Een hoge overeenstemmingsscore betekent dat het systeem juist is. Die betekent dat het systeem beoordeelt zoals de beoordelaar waarmee u vergeleek, op de opstellen waarop u vergeleek. De 0,84 van WrAFT kwam met feedback die niet parsebaar was.

Een getal kan voor het hele product staan. Teams leveren een dashboard met 'nauwkeurigheid 0,84' in de hoek en geen veld voor de feedbackmodule, het hintbeleid of het weigeringsgedrag. De score op moduleniveau is het gemakkelijkste getal om te berekenen en het minst informatieve ding om te rapporteren.

Een externe benchmark beslist of de tool werkt. De spreiding van 28% tot 89% op de Pedagogy Benchmark zegt dat de taalfamilie moeilijk is en ongelijk wordt bediend. Uw positie in die bandbreedte is een feit over uw model. Wat uw studenten daarna kunnen, is een ander feit.

Een model dat een model beoordeelt, is een goedkoop vervangmiddel voor menselijke beoordelingen. Het is goedkoop. Het cijfer van 35% en de onenigheid over welke hints slecht waren, beschrijven wat een beoordelaar die nooit is gecontroleerd, doorlaat.

Gesimuleerde studenten maken evaluatie gratis. Ze maken het goedkoop, en ze verplaatsen de kosten naar validatie. De vergelijking met 382 dialogen bestaat omdat het instrument gekalibreerd moest worden.

## Wat er op u afkomt

**'We hebben hier geen annotatoren voor.'** Vijftig beoordeelde uitvoeren is genoeg om te beginnen. Beoordeel ze zelf als niemand anders vrij is, en bewaar het blad.

**'Onze benchmarkscore verslaat Gemini.'** Dat doet die, op CDPK, op de prompts die die benchmark gebruikt. Zet de maat zonder hulp ernaast.

**'Onze automatische beoordelaar is het eens met onze menselijke beoordelaars.'** Dan hebt u een correlatie op een steekproef. Vraag op welke uitvoeren die het oneens was en lees die, want daar zit de fout.

**'We kunnen voor de lancering geen volledige evaluatie doen.'** Doe de goedkope drie: een uitvoer apart gescoord, vijftig uitvoeren door een persoon beoordeeld, een veiligheidsronde over de lengte van een gesprek. De dure onderdelen kunnen na de pilot volgen.

**'Het systeem is alleen een demo, dus evaluatie is voorbarig.'** Een demo is de goedkoopste plek om erachter te komen dat uw getal formulering meet. Zodra er een roadmap aan hangt, kost dezelfde ontdekking meer om ernaar te handelen.

## Wat u deze week kunt doen

**1.** Schrijf de bewering in een zin die uw evaluatie moet ondersteunen. Zet die bovenaan het evaluatiedocument.

**2.** Lijst elke uitvoer op die het systeem produceert en geef elk een rij, een maatstaf en een slaagvoorwaarde.

**3.** Haal vijftig uitvoeren eruit, beoordeel ze zelf, en zet uw beoordelingen naast die van de controle.

**4.** Bereken de vertrouwensverdeling en schrijf de routeringsregel met een getal erin, plus de naam van de persoon die leest wat eronder valt.

**5.** Voer een veiligheidsgesprek waarin de student het fout heeft, twee keer tegenstribbelt en om het antwoord vraagt.

## Waar u verder kunt gaan

[[making-ai-better-at-supporting-learning|Hoe kunnen we AI beter maken in het ondersteunen van leren binnen ons eigen vak?]] behandelt de ontwerpkant van hetzelfde probleem. [[training-ai-tutors-to-guide-rather-than-answer|AI-tutoren trainen om te begeleiden in plaats van antwoord te geven]] behandelt de trainingsroute naar tutorgdrag, en [[evaluating-ai-interventions-methods|het evalueren van AI-interventies]] is de docentgerichte versie van deze vraag, met [[reporting-interpreting-aied-research|rapporteren en interpreteren van AIEd-onderzoek]] als de onderzoeksgerichte. De methoden vallen onder [[ai-ed-evaluation|AIEd-evaluatie]] en [[llm-training-and-fine-tuning|trainen en fine-tunen van LLM's]].
