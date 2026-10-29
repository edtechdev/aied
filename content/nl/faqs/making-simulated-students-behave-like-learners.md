---
title: "Hoe laten we een gesimuleerde student zich gedragen als een echte lerende?"
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
updated: "2026-10-29T14:57:55-04:00"
translation_of: faqs/making-simulated-students-behave-like-learners
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

U hebt donderdag een demo. De gesimuleerde student erin mist een breukenoefening, krijgt één hint en produceert dan het juiste antwoord met de juiste uitleg. Iemand in de zaal vraagt waarom een worstelende lerende dat zou doen, en u hebt geen antwoord.

Voor de volgende demo hebt u dit helder nodig: een model vragen om een student te spelen levert het geluid van een lerende op. Wat het gedrag oplevert, is een beperking op wat de simulator weet, structuur in de beurten, en validatie tegen gegevens van echte lerenden. Slechts 3% van de studies die lerenden simuleren, valideert de simulator na gebruik, dus niemand zal dit voor u controleren.

## De korte versie

**1.** Schrijf op welke lerenden u niet simuleert, en zet die zin waar uw gebruikers hem lezen.

**2.** Toets de overtuigingstoestand, niet het proza. Vraag wat de simulator zegt na een correctie.

**3.** Beperk kennis bewust: specificeer de epistemische toestand, of verwijder de kennis.

**4.** Script de interactie beurt voor beurt. Een betere personaprompt lost drift niet op.

**5.** Scoor gedragstrouw en responsiviteit op sturing afzonderlijk, tegen gegevens van echte lerenden.

## Bepaal welke vraag de simulator beantwoordt

Er worden drie taken samengevat onder “gesimuleerde student”, en ze vragen verschillend instrumentarium. Een leraar of tutor laten oefenen vraagt een partner die onder druk geloofwaardig handelt. Controleren hoe een AI met verschillende leerlingprofielen omgaat vraagt dekking van de profielen die u belangrijk vindt. Uitkomsten voorspellen voor een cursus vraagt een verdeling van lerenden en niet één overtuigend individu. Een simulator die voor de eerste taak is gebouwd, zal u bij de derde teleurstellen, en het bewijs hieronder blijft ze uit elkaar houden.

## Benoem de lerenden die u niet dekt

De nuttigste bevinding voor wie op het punt staat een simulator te vertrouwen, gaat over dekking. Twaalf leraren die bijles gaven aan LLM-studenten meldden te complexe taal, ontbrekende emotie, onnatuurlijke aandacht en onverklaarde kennissprongen, en de simulaties vertegenwoordigden slechts één van vier kwadranten van werkelijk studentgedrag ([[llm-student-simulation-teacher-insights|Martynova et al., 2026]]). Het kwadrant dat ze dekten, was het gemakkelijkste om te simuleren.

Dat is van belang omdat bijna niemand controleert. Slechts 3% van de studies die lerenden simuleren, valideert de simulator na gebruik. Bouwt u er een en slaat u validatie over, dan zit u in de overgrote meerderheid, en bent u ook de reden dat dat cijfer citeerbaar blijft.

## Beperk wat de simulator weet

Een capabel model kan niet gemakkelijk doen alsof het gedeeltelijk weet. Onderzoek noemt dit de **competentieparadox**: breed capabele modellen die gevraagd wordt gedeeltelijk kundige lerenden na te bootsen, produceren onrealistische foutpatronen en leerdynamiek.

De drift heeft een richting, en ze wijst naar de lerenden die simulatie het meest nodig hebben. Tegen studentideeën uit 49 NGSS-conforme wetenschapslessen hielden zes modellen de meeste ideeën binnen de verwachte kennisscope en ongeveer twee derde op of onder het streefniveau voor lezen, en schoten ze juist daar voorbij waar de lerende het jongst was. Ideeën voor het basisonderwijs en de onderbouw van het voortgezet onderwijs overschreden vaker de kennisscope en het leesniveau van het doeljaar, en het corpus neigde naar breder redeneren, technischer vocabulaire en minder onzekerheidsmarkeringen (“misschien”, “het lijkt erop”) dan de echte lesideeën ([[llm-simulating-student-scientific-thinking-2026|Nguyen en Cao, 2026]]).

Twee opmerkingen bij dat onderzoek. Modelkeuze is niet eendimensionaal, want een systeem dat lesideeën dicht benadert, kan ze nog steeds boven het leerjaar plaatsen. En de reparatie is vaak onderwijskundig: een expliciete herprompt op leerjaarniveau bracht de meeste modellen terug binnen bereik.

## Specificeer de toestand, of neem de kennis weg

Weet het model te veel, dan kunt u de toestand benoemen waarin het zou moeten zijn of de kennis aftrekken die het niet zou mogen hebben.

**Conditioneer op een epistemische toestand.** Een trainingsvrij kader bouwt het cognitieve prototype van elke student op uit een [[knowledge-graph|kennisgraaf]] en scoort beam-search-kandidaten daartegen, met een gerapporteerde verbetering van 100% in simulatienauwkeurigheid ([[simulating-students-diverse-cognitive-levels-2025|Wu et al., 2025]]). De kwaliteit stijgt met het cognitieve niveau van de student, dus zwakkere lerenden blijven het moeilijkste geval, wat jammer is gezien zij meestal het punt zijn. Cognitieve dynamiek modelleren in plaats van een statische persona gaat verder: de op ICAP gebaseerde toestandsupdates van CogEvolution bereikten R²LC = 0,92 waar statische agenten 0,45 halen, en zakten naar 0,58 zonder de ICAP-module ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang et al., 2026]]).

**Verwijder de kennis.** Het onderdrukken van 16 gerichte kenniscomponenten in Mistral-7B verlaagde de nauwkeurigheid van ongeveer 0,75 bij een vergeetratio van 10% naar onder 0,5 bij 40%, terwijl het basismodel rond 0,85 bleef. De onderdrukte kennis bleek herstelbaar via supervisie-herleren en door een coach begeleide dialoog ([[simulating-novice-students-machine-unlearning-2026|Song, Guo en Lin, 2026]]). Dit komt het dichtst bij het rechtstreeks vervaardigen van een beginner, en de herstelbaarheid wordt een voordeel als u wilt dat de simulator tijdens een sessie leert.

## Script de beurten, niet de persona

Personastabiliteit blijkt een ontwerpprobleem van de interactie en niet van de modelkeuze. Bij het kruisen van vijf LLM's met drie promptontwerpen en vier ADHD-intensiteitspersona's elimineerden gescripte, taakverankerde interacties de door waarnemers beoordeelde gedragsdrift, tot 97% ten opzichte van ongescripte dialoog. Zonder expliciete personainstructies helde de basisrepresentatie van studenten naar veel ADHD-symptomen ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase en Leins, 2026]]).

Drijft uw simulator, kijk dan beurt voor beurt naar wat u hem vraagt te doen voordat u van model wisselt of de beschrijving van de student herschrijft.

## Scoor twee dingen, niet één

StudentSim vereist dat twee eigenschappen samengaan: **gedragstrouw**, hoe goed de simulator overeenkomt met de eigen reacties van een student, en **responsiviteit op sturing**, hoe betrouwbaar hij zich bijstelt naar waar de sturing van de tutor naartoe leidt. De benchmark giet openbare lerendencorpora (schaken, schrijven in het Engels als tweede taal, wiskunde) in een protocol per student waarop elke simulator wordt gefit en gescoord op achtergehouden gegevens. Domeinspecifieke toestandsregistratie kwam zwak uit op responsiviteit, en rollenspel met alleen een LLM-prompt kwam zwak uit op trouw ([[studentsim-llm-student-simulators|Yang et al., 2026]]). Een simulator kan de ene toets halen en de andere falen, dus rapporteer beide.

Als proof of concept leverde een bevroren StudentSim, gebruikt als beloning in een [[reinforcement-learning|versterkend leer]]-lus voor een schaaktutor, tutors op die experts nauwkeuriger, beter gestuurd en persoonlijker vonden dan tutors die waren getraind tegen een beloning van een frontier-LLM-simulator of helemaal zonder RL. Een goede simulator kan zowel het trainingssignaal als de meting zijn.

Trouw op actieniveau heeft haar eigen grens. Simulators van studenten reproduceren waarneembare acties zonder het latente redeneren erachter, en [[inside-llm-student-simulator-reasoning-2026|INSIDE]] fine-tunet modellen om voor elke actie een interne dialoog te genereren, met de hoogste overeenstemming tussen gegenereerd redeneren en echte codebewerkingen op 51,8% bij bekende problemen en 57,9% bij ongeziene, zonder verlies van actietrouw (Niousha et al., 2026). Vindt u het belangrijk waarom uw gesimuleerde student iets deed, dan is de actie matchen niet genoeg.

## Valideer tegen echte lerenden en rapporteer de nulmeting

Twee vergelijkingen laten zien wat validatie kost.

Bij het benchmarken van negen simulatiemethoden tegen zeven referentiegebaseerde maatstaven op 382 achtergehouden dialogen uit het grootste openbare corpus van echte wiskundedialogen tussen student en tutor, bleef prompten achter bij fine-tuning op dialooghandelingen (0,4998 tegen 0,6840), ROUGE-L (0,1648 tegen 0,3212) en cosinusgelijkenis (0,5460 tegen 0,7390). De beste geteste methode, preferentie-optimalisatie op een 8B-model, versloeg supervisie-fine-tuning slechts marginaal en was slechter op fouten, en een menselijke evaluatie met drie tutors reproduceerde die rangorde ([[simulated-students-tutoring-dialogues-2026|Scarlatos et al., 2026]]). De top van deze ladder zit dicht bij het midden, dus de nulmeting die u rapporteert bepaalt hoe indrukwekkend uw eigen cijfer lijkt.

SWIM is de duidelijkste vergelijking van prompten, fine-tuning en versterkend leren, omdat het elk gegenereerd essay scoort tegen een doelprofiel van kenmerken in plaats van het impressionistisch te beoordelen. Op rubrieken gegrond prompten gaf beperkte controle, zelfs voor sterke propriëtaire modellen, met een beste gemiddelde kenmerk-QWK van 0,577 (Claude Sonnet) en 0,422 (GPT-5.4), en bijna nul voor een open 7B-model. Supervisie-fine-tuning op echte paren van score en essay bereikte 0,474 ± 0,023 voor dat 7B-model. GRPO met een beloning afgeleid van geautomatiseerde essaybeoordeling bereikte 0,618 ± 0,005, waarbij de winst standhield bij twee onafhankelijke beoordelaars waarop het beleid nooit was getraind ([[swim-student-writing-simulation-2026|SWIM]]).

Prompten leverde ook een geïdealiseerde populatie op in plaats van een realistische: gemiddelde genormaliseerde totaalscore 0,74 tegen 0,58 voor echte studenten, en een mediane lengte van 304 woorden tegen 167. De getrainde modellen herstelden de menselijke verdelingen van score en lengte zonder enige supervisie op lengte. Eén ding bleef moeilijk: authentieke vorm op laag vaardigheidsniveau. Getrainde modellen herstelden de syntaxis maar schreven te weinig spelfouten en grammaticale fouten, terwijl prompten zwakte simuleerde via oppervlakkige corruptie, spelfouten uitgestrooid over verder competente tekst.

Oppervlakkig realisme is in beide richtingen een zwakke toets. In een geblindeerde studie classificeerden deskundige annotatoren 164 van 196 (83,7%) door een LLM gegenereerde Java-inzendingen verkeerd als door mensen geschreven, omdat de fouten functioneel niet te onderscheiden waren van authentieke, en de overeenstemming met echte fouten daalde vervolgens naarmate de moeilijkheid van het probleem steeg ([[simulating-students-java-programming-errors-llms|Keramati et al., 2026]]). Over zeven modellen van 4B tot 120B parameters sloegen simulators met vrijwel gelijke snelheid om naar het juiste antwoord, ongeacht de feedback die ze kregen, dus gelijkenis van de uitvoer zegt niets over de overtuigingstoestand erachter. Trainen tegen de **Selective Flip Score** verhoogde de trouw met tot +0,56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar en Sachan, 2026]]).

## Controleer of een beschrijving zou volstaan

Controleer de goedkopere optie voordat u een cohort bouwt. Voor het evalueren van een online leerervaring voordat studenten beginnen, het voorspellen van uitval en afronding en het geven van ontwerpfeedback, overtrof één “beschrijvende” webagent die de les doorloopt en een rijke beschrijving van de ervaring produceert het rechtstreeks simuleren van een populatie studenten.

De gesimuleerde studenten in die vergelijking vertoonden veel minder gedragsbereik dan echte lerenden: over 100 agenten op vijf testlessen reproduceerden ze slechts ongeveer 4% van de paden die echte studenten namen, terwijl ze aanzienlijk meer rekenkracht kostten. De pijplijn van beschrijven-dan-voorspellen behaalde de beste voorspelling van de uitvalsverdeling op een massieve wereldwijde CS1-cursus, met een gemiddelde JSD van 0,060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell en Piech, 2025]]).

De grens die dat trekt is praktisch. Een verdeling van studenten simuleren kan onnodig of contraproductief zijn wanneer het doel voorspelling van uitkomsten of ontwerpkritiek is. Simulatie verdient haar kosten wanneer het dekken van werkelijke variatie tussen lerenden ertoe doet, zoals het controleren van hoe een AI met uiteenlopende profielen omgaat of een leraar iets geven om tegen te oefenen.

## Wat bouwers hier verkeerd doen

Oppervlakkig realisme is het doel. Een misclassificatiepercentage van 83,7% voor machinaal geschreven code en vrijwel gelijkmatig omklappen van antwoorden over zeven modellen zeggen beide dat een menselijke beoordelaar die de uitvoer leest de eigenschap die u claimt niet kan zien. Toets in plaats daarvan de reactie op een correctie.

Een betere personaprompt lost drift op. Gescripte, taakverankerende beurten sneden de door waarnemers beoordeelde drift met tot 97% weg over vijf modellen en drie promptontwerpen. Het ontwerp van de beurten deed het werk.

Een sterker basismodel dicht het competentiegat. Een sterk propriëtair model scoorde 0,422 op kenmerk-QWK onder prompten, terwijl een gefinetuned 7B-model 0,474 bereikte, en dezelfde vergelijking over zes modellen schoot het ergst voorbij op de jongste leerjaren. Modelkeuze ruilt de ene trouwas tegen de andere in.

Validatie betekent dat een collega een transcript las en vond dat het klonk alsof het klopte. Het Java-resultaat laat zien hoe ver dat oordeel reikt. Validatie betekent achtergehouden gegevens van echte lerenden en een nulmeting die u kunt benoemen.

Een populatie simuleren is de grondige optie. Over 100 agenten dekten de simulaties ongeveer 4% van de paden die echte studenten namen, tegen aanzienlijk meer rekenkracht dan de beschrijvende agent.

## Wat er op u afkomt

**“Leraren konden onze simulator niet van een student onderscheiden.”** In de geblindeerde Java-studie classificeerden deskundige annotatoren 83,7% van de machinale inzendingen als menselijk. Dat meet de annotatoren, en het laat de overtuigingstoestand ononderzocht.

**“Fine-tuning valt buiten ons bereik.”** Beperk de claim dan tot wat prompten ondersteunt, en zeg dat. Prompten zette een plafond van 0,577 voor het sterkste geteste model en bijna nul voor een open 7B-model, en het leverde een geïdealiseerde scoreverdeling op.

**“We hebben geen toegang tot gegevens van echte lerenden.”** Het protocol van StudentSim is gebouwd op openbare lerendencorpora in schaken, schrijven in een tweede taal en wiskunde. Openbare gegevens beperken wat u over uw eigen populatie kunt claimen, en ze geven u een nulmeting, wat het ding is dat de meeste rapporten weglaten.

**“GRPO versloeg supervisie-fine-tuning, dus we moeten met RL trainen.”** Dat deed het, met 0,618 tegen 0,474. Vorm op laag vaardigheidsniveau bleef in beide gevallen moeilijk, met te weinig spelfouten en grammaticale fouten, en in een aparte benchmark versloeg preferentie-optimalisatie fine-tuning slechts marginaal en verloor ze op fouten. Controleer van welke eigenschap uw toepassing afhangt.

**“De zwakste lerenden zijn een klein deel van onze gebruikers.”** Zij zijn voor elke methode op deze pagina het moeilijkste geval, en de dekkingsbevinding zegt dat de simulaties zich in het gemakkelijkste kwadrant clusteren. Wordt uw simulator gebruikt om conclusies te trekken over worstelende studenten, dan hoort dat gat in het verslag.

## Wat u deze week kunt doen

**1.** Schrijf de dekkingszin: welke lerenden deze simulator niet representeert. Zet hem in de README en in de demonotities.

**2.** Voeg één probe toe aan uw testset die de simulator corrigeert en controleert of hij fout blijft.

**3.** Vervang vrije personachat in één flow door taakverankerende beurten, en vergelijk de drift.

**4.** Scoor één bestaande simulator tegen achtergehouden echte gegevens op zowel trouw als responsiviteit, en rapporteer de twee getallen apart.

**5.** Draai de check met de beschrijvende agent op de vraag die u werkelijk beantwoord wilt hebben voordat u een cohort financiert.

## Waar u verder kunt gaan

[[simulating-students|Gesimuleerde studenten]] is de volledige conceptpagina. [[checking-whether-educational-ai-works|Nagaan of onderwijs-AI werkt]] behandelt het evalueren van de systemen die u tegen een simulator toetst, en [[making-ai-better-at-supporting-learning|AI beter maken in het ondersteunen van leren]] behandelt de trainingsmethoden achter de fine-tuningresultaten hier. [[addressing-common-misconceptions-ai-education|Veelvoorkomende misvattingen over AI in het onderwijs wegnemen]] behandelt de vraag of gesimuleerde studenten in onderzoek voor echte lerenden kunnen staan.
