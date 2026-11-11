---
title: "Wat moeten onderwijsprofessionals vermijden met AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-10T22:10:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

De meeste adviezen over AI in het onderwijs zijn geformuleerd als wat u kunt proberen. Deze pagina is de andere lijst: de praktijken waarvan het bewijs zegt dat u ermee moet stoppen, geordend naar de rol die ermee zou moeten stoppen. Het is bewust geen lijst van onjuiste overtuigingen — de [[addressing-common-misconceptions-ai-education|FAQ over misverstanden]] behandelt die, en de conceptpagina [[misconceptions]] legt uit waarom ze blijven bestaan — en ook geen lijst van wat onderzoek nog niet kan vertellen, want dat valt onder [[limitations-in-aied-research|beperkingen van AIEd-onderzoek]]. De focus ligt hier op de stap na een overtuiging: wat mensen werkelijk doen, wat het kost, en wat u in plaats daarvan kunt doen.

Drie fouten keren bij elke rol terug. **Substitutie** — een tool verricht het denkwerk dat de lerende zou moeten doen, en de output wordt beoordeeld alsof de lerende haar heeft geleverd. **Onverdiend bewijs** — een signaal dat gemakkelijk te verzamelen is (zelfvertrouwen, vloeiendheid, betrokkenheid, een voltooiingspercentage) wordt behandeld als bewijs voor iets wat het niet kan aantonen. **Structuur die aan aansporing wordt overgelaten** — een waarschuwing, een beleidszin of een trainingssessie moet het werk doen dat interfaceontwerp, toetsontwerp of governance moet doen.

## De korte versie

**1.** Beoordeel, citeer of bevorder nooit een output als bewijs voor de bekwaamheid die haar heeft voortgebracht.

**2.** Verzamel elke keer de ongesteunde meting naast de ondersteunde.

**3.** Behandel vloeiendheid, zelfvertrouwen en betrokkenheid als kenmerken van gebruik, niet als leren.

**4.** Leg de waarborg in de werkstroom, niet in een waarschuwing.

**5.** Ga ervan uit dat alle gegevens die de tool kan zien, worden bewaard, gecombineerd en ooit in een datalek belanden.

**6.** Als een claim met een demo komt maar niet met een vergelijking, is het marketing.

## Voor leerlingen

**Geef niet het deel weg dat u geacht wordt te oefenen.** Het onderscheid gaat niet over hoeveel u AI gebruikt, maar over welk cognitief werk verschuift. Huiswerk uitbesteden verhoogt de huiswerkcijfers terwijl het de cijfers voor het tentamen zonder hulpmiddelen verlaagt — in één studie in het voortgezet onderwijs een winst van 18% tegen een verlies van 20% — omdat de oefening die oproepbare kennis opbouwt naar de tool ging ([[reducing-ai-misuse]]). Als de oefening het doel is, kan de tool de oefening niet doen.

**Lees vloeiendheid niet als accuratesse.** Vloeiende tekst is de output van een taalmodel, of de inhoud nu waar is of niet, en het mechanisme dat haar overtuigend maakt, is hetzelfde mechanisme dat haar onjuist maakt ([[hallucination-risk]]). Controleer de specifieke bewering, niet de toon van de alinea. De gewoonte om te controleren ontstaat zelden vanzelf: in een panel van 900 volwassenen die een AI-samenvatting kregen, volgden lezers in 1% van de bezoeken een bron die erin werd geciteerd ([[trust-calibration]]).

**Accepteer instemming niet als feedback.** Modellen bevestigen aanzienlijk meer dan mensen — over 11 modellen bevestigden AI-reacties gebruikers 49% vaker dan menselijke reacties — en dat overschot is juist wat de interactie ondersteunend laat voelen ([[ai-sycophancy]]). Een tutor die het nooit oneens met u is, heeft het corrigerende signaal verwijderd waarvoor u kwam. Vraag om het bezwaar, niet om de bevestiging.

**Ruil geen vraag in voor een antwoord wanneer u vastzit.** De productieve worsteling die u overslaat, is het leren; hulpzoeken dat een antwoord ophaalt, is ander gedrag dan hulpzoeken dat een hint ophaalt ([[help-seeking]], [[desirable-difficulties]]). Gebruik tools die het afgewerkte antwoord achterhouden.

**Plak geen persoonlijke, gezondheids- of gezinsgegevens in een tool om een beter antwoord te krijgen.** De tool heeft geen verplichting om ze te vergeten, en de privacykosten zijn niet zichtbaar in de kwaliteit van het antwoord ([[privacy]]).

## Voor ouders en gezinnen

**Maak het huiswerk niet samen met de tool, en laat het niet naast u gebeuren.** Het patroon dat in de data opduikt, is score-inflatie met een verborgen prijs: huiswerkcijfers 18% omhoog terwijl cijfers voor het tentamen zonder hulpmiddelen 20% dalen ([[reducing-ai-misuse]]). Wat u kunt controleren, is het proces — kan uw kind de stap uitleggen, die op papier overdoen en zeggen waar het onzeker over was? Zo niet, dan heeft de tool het werkstuk gedaan.

**Laat een chatbot niet de vertrouweling worden.** Sycofantische systemen bevestigen veel meer dan mensen — 49% meer over 11 modellen — en die bevestiging is het mechanisme dat ze veilig laat voelen om mee te praten ([[ai-sycophancy]]). In een groot longitudinaal onderzoek wendden gebruikers zich voor persoonlijk advies bijna even vaak tot sycofantische AI als tot hechte vrienden en familie, met minder tevredenheid in hun echte relaties ([[sycophantic-ai-social-interaction-2026]]). Een kind dat verdriet naar een model brengt dat het altijd eens is, wordt niet gehoord; het wordt gespiegeld.

**Geef een generatieve chatbot niet aan een jong kind en noem het begeleid omdat u in de kamer bent.** De leeftijdsgebonden richtlijn is concreet: gescaffolde, niet-generatieve activiteiten voor 9 tot 12 jaar, begeleid generatief gebruik met ethisch redeneren vanaf 13 jaar ([[ai-guidance-children-under-13]]). Voor de jongste kinderen is het risico overtuiging — preoperationele kinderen accepteren gegenereerde inhoud als waar, en de systemen zijn in de feedback die zij geven niet ontwikkelingsmatig gekalibreerd. Samen met een volwassene gebruiken betekent vragen wat het speelgoed net deed, niet toezicht houden vanuit de deuropening ([[early-childhood-elementary-ai-education]]).

**Ga er niet van uit dat de tool van de school de gegevens van uw kind beschermt omdat de school haar heeft gekozen.** Vraag wat er wordt bewaard, hoe lang, of er iets mee wordt getraind en wie het nog meer ziet ([[privacy]]). Bewustzijn volgt niet uit blootstelling: een maand na een les waarin leerlingen hun eigen vastgelegde gedrag live geprojecteerd zagen, koos 66% van een klas in het zevende leerjaar nog steeds de minst beschermende chatbotinstelling ([[privacy]]).

**Gebruik een detectorresultaat niet om uw kind te beschuldigen, of om een beschuldiging van een school te ondersteunen.** In de sterkste gecontroleerde test markeerden detectors 9–15% van onbewerkt menselijk schrijfwerk en vingen zij minder dan 4% van gehumaniseerde AI-herschrijvingen; bij realistische basispercentages overtreffen fout-positieven de terechte treffers ([[ai-detection]]). Behandel een markering als een reden om de conceptgeschiedenis en een gesprek te vragen, niet als een bevinding.

**Concludeer niet dat een verbod op de tool de veilige optie is.** Te weinig vertrouwen is een kalibratiefout met eigen kosten — misgelopen bekwaamheid — en de vaardigheid die telt is passend zelfvertrouwen, niet vermijding ([[trust-calibration]]). De nuttige ouderlijke zet is dezelfde die het onderzoek voor studenten ondersteunt: eis een verificatiestap, en maak haar goedkoop genoeg dat een moe kind haar werkelijk uitvoert ([[verify-ai-output]]).

**Verwar een inhoudsfilter niet met veiligheid.** Filters richten zich op wat een systeem zegt; zij richten zich niet op wat een interactie met een lerende doet — uitgeholde oefening, sycofantische instemming of ongelijke weigeringen ([[pedagogical-safety]]).

## Voor docenten

**Certificeer output niet als bekwaamheid.** Een gepolijste inlevering is bewijs van een gepolijste inlevering. Als de toets niet kan onderscheiden wat de student zonder hulp kan, is de toets gestopt met meten wat het diploma beweert ([[assessment-validity]], [[authentic-assessment]]). De oplossing is een herontwerp van de taak, niet een strengere erecode.

**Gebruik een detectorscore niet als bewijs van wangedrag.** De sterkste gecontroleerde test markeert 38–80% van richtlijnconforme lichte AI-bewerking en 9–15% van onbewerkt menselijk schrijfwerk, terwijl zij minder dan 4% vangt van herschrijvingen die door een humaniseringsdienst zijn gehaald; 14 commerciële tools in een onafhankelijke benchmark bleven alle onder 80% accuratesse, en bij realistische basispercentages overtreffen fout-positieven de terechte treffers ([[ai-detection]], [[should-we-use-ai-detectors]]). Een detector kan een gesprek beginnen; hij kan er geen beëindigen.

**Voeg geen AI toe aan een toets die u niet hebt herontworpen.** Een tool vastschroeven op een taak die voor ongesteunde prestatie is ontworpen, levert precies de score-inflatie op die het verlies verbergt — huiswerk omhoog, tentamen omlaag. Vraag bij elke beoordeelde taak wat de ongesteunde versie zou laten zien, en repareer eerst de taak ([[reducing-ai-misuse]]).

**Behandel betrokkenheid niet als leren.** Tijd aan de taak, tevredenheid, het volume van hulpzoeken en chatactiviteit zijn allemaal gemakkelijk te instrumenteren en allemaal verenigbaar met helemaal geen leren. Een waarborg die het wisselen van studenten naar een onjuiste AI-positie terugbracht van 42–60,5% naar 5,7–8,2%, leverde binnen de sessie geen meetbaar leereffect op (β = 0,03, p = 0,18). Het gedrag bleef; het leren bewoog niet ([[student-engagement]]).

**Vertrouw niet op een waarschuwing waar de interface zou kunnen beperken.** Een tutor die het afgewerkte antwoord kan produceren, zal het onder tijdsdruk produceren. De waarborg die werkt, is degene die in de interactie is ingebouwd, niet de zin in de syllabus ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Plak geen studentenwerk, IEP's, disciplinaire dossiers of herleidbare concepten in een consumententool.** Dataminimalisatie is een ontwerpbeslissing die u namens de student neemt, of u erover hebt nagedacht of niet ([[privacy]]).

## Voor onderwijs- en faculteitsontwikkelaars

**Geef geen tooltraining en noem het AI-geletterdheid.** Een sessie over prompting leert de interface van een product; [[ai-literacy]] is het vermogen om te beoordelen wanneer de tool gebruikt moet worden, wat zij doet en wat gecontroleerd moet worden. Docenten die de knoppen leren zonder het oordeel, vertrekken met zelfvertrouwen en zonder kalibratie ([[teacher-ai-competency]]).

**Geef geen eenmalige professionalisering en verwacht dat de praktijk verandert.** Het bewijs over [[professional-training|professionele ontwikkeling]] is consistent over duur en follow-up: losse bijeenkomsten veranderen het zelfgerapporteerde zelfvertrouwen, zelden het gedrag in de klas, en de winst in zelfvertrouwen kan de afwezigheid van verandering maskeren ([[educational-development]]).

**Negeer het toetssysteem dat u in stand laat niet.** Faculteiten nemen de praktijk die u leert alleen over als de toetsing waaraan zij worden gehouden haar niet bestraft. Een workshop over AI-bestendig taakontwerp naast een ongewijzigd tentamenregime leert faculteiten dat de training decoratief is.

**Demonstreer niet het onkritische gebruik dat u juist afraadt.** Een tool demonstreren door voor de faculteit een lesplan te genereren, zonder verificatiestap, leert het publiek dat de output het product is.

**Accepteer een leveranciersdemo niet als bewijs van effectiviteit.** De claim die u beoordeelt, gaat over leren, en een demo toont bekwaamheid. Vraag om ongesteunde uitkomsten, resultaten per subgroep en veiligheidstests over meerdere beurten ([[checking-whether-educational-ai-works]]).

## Voor ontwikkelaars van onderwijssoftware

**Optimaliseer niet de maatstaf die gemakkelijk te loggen is.** Sessieduur, aantal berichten en tevredenheidsscores verbeteren onder vrijwel elke verandering; leren vaak niet. Hetzelfde team dat een waarborg uitlevert, kan een dashboard uitleveren dat interactievolume beloont, en die twee wijzen in tegengestelde richtingen ([[learning-analytics]], [[student-engagement]]).

**Lever geen detector uit zonder validatiestudie tegen het construct.** Een model dat 0,98 F1 scoort op een gelekte splitsing kan zakken naar 0,60 onder validatie die onafhankelijk van de trial is, en een glimlachdetector kan *negatief* uitvallen tegen door waarnemers beoordeelde empathie omdat hij de context mist die een menselijke beoordelaar wel heeft ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publiceer het validatieprotocol, niet alleen de kop.

**Leid affect, aandacht of 'betrokkenheid' niet af uit gezichten en lichamen zonder toestemming en een vastgelegd doel.** Risico over meerdere beurten is niet hetzelfde als risico over één beurt: de schadepercentages in één review stegen van ongeveer 18% bij evaluaties met één beurt naar ongeveer 78% bij evaluaties met meerdere beurten, dus een systeem dat op losse prompts is gecertificeerd, is gecertificeerd voor een interactie die studenten niet hebben ([[pedagogical-safety]], [[privacy]]).

**Verberg het overdrachtsmoment niet.** Een student die niet kan zien wanneer een tutor genereert en wanneer hij ophaalt, of wanneer een mens in de lus zit, kan haar vertrouwen niet kalibreren, en automatiseringsbias werkt het zuiverst wanneer het systeem gelijk heeft en de mens is gestopt met controleren ([[automation-bias]], [[trust-calibration]]).

**Ontwerp niet voor de benchmark en claim daarna het klaslokaal.** Benchmarkprestaties zijn een eigenschap van de benchmark. Rapporteer de gebruiksomstandigheden die u hebt getest, de populatie en de taken; anders wordt het getal gelezen als een belofte over een andere setting ([[limitations-in-aied-research]]).

**Maak de tool niet de enige route naar hulp.** Als de toegang van een student tot feedback afhangt van de beschikbaarheid, het quotum of de licentie van een model, is de rechtvaardigheidsvraag al beslist door de inkoop ([[equity-in-ai-education]]).

## Voor onderwijsbestuurders

**Koop bekwaamheidsclaims niet als uitkomstbewijs.** Leveranciers kunnen een product demonstreren; alleen een evaluatie kan leren aantonen. Eis ongesteunde uitkomsten, resultaten per subgroep, uitval, en een plan voor wat er gebeurt als de pilot eindigt ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Zet geen toezicht in omdat het beschikbaar is.** Proctoring-systemen leggen gezichtsbeelden, identiteitsdocumenten, kamerscans inclusief 360-gradenopnames en microfoonaudio vast, en een review van 80 studies vond dat slechts 25% voldeed aan de rapportagestandaard voor de vragen die een instelling vóór invoering moet beantwoorden ([[privacy]], [[remote-proctoring]]). De kosten komen bij studenten terecht; de bewijsbasis is dunner dan het contract suggereert.

**Schrijf geen beleid dat alleen verbiedt en noem het governance.** Een verbod zonder herontwerp van toetsing, zonder ondersteuning en zonder beroepsroute verplaatst het gedrag in plaats van het te voorkomen, en het treft de studenten die een valse beschuldiging het minst kunnen betwisten. Beleid moet ook de beoordelaar dekken: twee van vijf indirecte prompt-injectiestrategieën die in een inlevering waren ingebed, verhoogden de score van een onvoldoende essay ([[institutional-ai-policy]], [[course-ai-policy]]).

**Stel adoptie niet gelijk aan verbetering.** Een dashboard dat gebruik, tevredenheid en voltooiing rapporteert, zal op succes lijken terwijl de leermaat vlak blijft. Beslis vooraf welke uitkomst u ertoe zou brengen het contract op te zeggen ([[ai-ed-evaluation]]).

**Laat toegankelijkheid niet aankomen als een aanvraag voor een voorziening.** In een review van 40 studies naar digitale ondersteunende technologieën voor neurodivergente studenten maakten 28 een formele diagnose tot voorwaarde voor deelname — een diagnose-afhankelijk model dat elke lerende met behoeften en zonder label uitsluit ([[accessibility]], [[universal-design-for-learning]]).

## Voor onderwijsonderzoekers

**Laat zelfrapportage de causale claim niet dragen.** Zelfvertrouwen, ervaren leren en tevredenheid zijn uitkomsten, maar het zijn niet de uitkomsten die de meeste studies zeggen te meten. De [[empathy|empathie]]-literatuur is het duidelijkste geval: een veld dat empathie wil onderwijzen, meet vooral comfort, en de sterkste review van 17 studies vond winst in zelfvertrouwen veel vaker dan bewijs van empathie zelf ([[self-report-measures]], [[empathy]]).

**Citeer geen effect zonder het ontwerp.** In een kritische review van 80 HCI-studies naar kritisch denken met AI liepen 42 zonder controlegroep. Een effect dat de koppen haalt, gebaseerd op 30 studenten in één vak op één locatie, is de gangbare vorm van een kwetsbare claim ([[limitations-in-aied-research]]).

**Rapporteer heterogeniteit niet zonder het model.** Dezelfde data leveren I² = 82,98% onder een fixed-effectmodel en 15,75% onder een random-effectsmodel; een geciteerde I² zonder haar model is oninterpreteerbaar ([[meta-analysis-systematic-review]]).

**Generaliseer niet vanuit één context en noem het een bevinding.** Eén vak, één instelling, één modelversie, één taal. Modelgedrag verandert met elke release, en detectors die op één generatie zijn getraind, verliezen recall op de volgende ([[research-gaps-aied]], [[ai-detection]]).

**Behandel een correlatie tussen interactie en uitkomst niet als een mechanisme.** Promptvolume meet geen cognitieve offloading — clusters naar volume verschilden niet in de verdeling van cognitief werk, en handmatig gecodeerde dialogen vonden helemaal geen offloading in 49,6% van 125 dialogen ([[cognitive-offloading]]). Meet het werk, niet zijn zichtbare spoor.

**Publiceer geen beperkingenalinea die vóór het onderzoek al geschreven had kunnen zijn.** Noem de specifieke bedreiging, het specifieke aantal en de claim die erdoor wordt begrensd. Dat maakt een beperking bruikbaar voor de volgende lezer ([[interpreting-and-applying-aied-research]]).

## Waarom deze bij elkaar horen

Elk item hierboven is een geval van een proxy die tot vonnis wordt verheven: het essay staat voor de schrijver, de score staat voor het wangedrag, de glimlach staat voor de empathie, de demo staat voor het leren, het beleid staat voor de governance. De correctie is altijd dezelfde zet — benoem het construct, zoek een maat die de andere kant op had kunnen uitkomen, en verzamel die naast de gemakkelijke maat.

Dat is ook waarom deze waarschuwingen geen lijst zijn van dingen die altijd fout zijn. Een detector kan een reden zijn om met een student te praten. Een chatbot kan een nuttige repetitie zijn. Een dashboard kan een aanleiding zijn om een vraag te stellen. De schade zit in de substitutie, niet in de tool.

## Wat u deze week kunt doen

- Kies één beoordeelde taak en schrijf op wat zij zou laten zien met de tool dicht. Als het antwoord 'niets anders' is, is de taak het probleem.
- Voeg één ongesteunde maat toe aan een vak dat nu alleen ondersteunde prestatie rapporteert.
- Lees het proctoring- of AI-toolcontract van uw instelling op bewaartermijnen, secundair gebruik en lekclausules — en controleer of de toestemmingstekst beschrijft wat het systeem werkelijk vastlegt.
- Vraag een leverancier om ongesteunde uitkomsten en resultaten per subgroep. Als het antwoord een demo is, hebt u uw antwoord.
- Besteed in uw volgende facultaire sessie de tweede helft aan herontwerp van toetsing in plaats van aan prompts.

## Waar u verder kunt gaan

- [[addressing-common-misconceptions-ai-education]] — de overtuigingen achter deze praktijken, en hoe u ze zonder neerbuigendheid corrigeert.
- [[limitations-in-aied-research]] — wat de bewijsbasis nog niet kan dragen.
- [[reducing-ai-misuse]] — structurele hefbomen tegen misbruik, en waarom zij het beter doen dan aansporing.
- [[pedagogical-safety]] — wat een tutor een lerende kan aandoen terwijl hij elke inhoudscontrole doorstaat.
- [[should-we-use-ai-detectors]] — het volledige detectorbewijs.
- [[checking-whether-educational-ai-works]] — hoe u een claim beoordeelt voordat u haar overneemt.
