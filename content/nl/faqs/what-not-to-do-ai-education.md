---
title: "Wat moeten onderwijsprofessionals vermijden met AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-11T06:20:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

De meeste adviezen over AI in het onderwijs zeggen wat u kunt proberen. Deze pagina verzamelt de praktijken waarvan het bewijs zegt dat u ermee moet stoppen, geordend naar de rol die ermee zou moeten stoppen. Onjuiste overtuigingen komen elders aan bod: de [[addressing-common-misconceptions-ai-education|FAQ over misverstanden]] behandelt ze, en de conceptpagina [[misconceptions]] legt uit waarom ze blijven bestaan. Wat onderzoek nog niet kan vertellen, hoort bij [[limitations-in-aied-research|beperkingen van AIEd-onderzoek]]. Wat hier volgt is de stap na de overtuiging: wat mensen doen, wat het kost en wat u in plaats daarvan kunt doen.

Drie fouten keren bij elke rol terug.

1. **Substitutie.** Een tool verricht het denkwerk dat de lerende had moeten doen, en de output wordt beoordeeld alsof de lerende het heeft gedaan. Het essay dat wordt ingeleverd is een verslag van wat het model kan, niet van wat de student kan.
2. **Onverdiend bewijs.** Een signaal dat goedkoop te verzamelen is, zoals zelfvertrouwen, vloeiendheid, betrokkenheid of een voltooiingspercentage, wordt behandeld als bewijs voor iets wat het niet kan aantonen. Een dashboard kan veertig minuten in een tutorsesessie melden; het kan niet melden of iemand de abc-formule heeft geleerd.
3. **Structuur die aan aansporing wordt overgelaten.** Van een waarschuwing, een beleidszin of een training wordt gevraagd het werk te doen dat interfaceontwerp, toetsontwerp of governance moet doen. De syllabus zegt dat u AI verantwoord moet gebruiken, en de tutor overhandigt bij de eerste prompt nog steeds het afgewerkte antwoord.

## De korte versie

**1.** Beoordeel, citeer of promoot nooit een output als bewijs voor de bekwaamheid die haar heeft voortgebracht.

**2.** Verzamel elke keer de ongesteunde meting naast de ondersteunde.

**3.** Behandel vloeiendheid, zelfvertrouwen en betrokkenheid als kenmerken van gebruik, niet als leren.

**4.** Leg de waarborg in de werkstroom, niet in een waarschuwing.

**5.** Ga ervan uit dat alle gegevens die de tool kan zien, worden bewaard, gecombineerd en ooit in een datalek belanden.

**6.** Als een claim met een demo komt maar niet met een vergelijking, is het marketing.

## Voor docenten

**Certificeer output niet als bekwaamheid.** Een gepolijste inlevering is bewijs van een gepolijste inlevering. Als een student een literatuuronderzoek inlevert waarvan u de bronnen tegen niets uit de cursus kunt controleren, en de toets niet kan onderscheiden wat die student zonder hulp kan, is de toets gestopt met meten wat het diploma beweert ([[assessment-validity]], [[authentic-assessment]]). De oplossing is een herontwerp van de taak; een strengere erecode doet dat niet.

**Gebruik een detectorscore niet als bewijs van wangedrag.** In een gecontroleerde studie van 642 gepubliceerde samenvattingen markeerden detectors 38–80% van richtlijnconforme lichte AI-bewerking en 9–15% van onbewerkt menselijk schrijfwerk, terwijl zij minder dan 4% vingen van herschrijvingen die door een humaniseringsdienst waren gehaald ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Een onafhankelijke benchmark vond dat geen van 14 commerciële tools 80% accuratesse haalde, en simpel parafraseren halveert zelfs dat ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Bij realistische basispercentages overtreffen fout-positieven de terechte treffers ([[should-we-use-ai-detectors]]). Een detector kan een gesprek beginnen; hij kan er geen beëindigen.

**Voeg geen AI toe aan een toets die u niet hebt herontworpen.** Een tool vastschroeven op een taak die voor ongesteunde prestatie is ontworpen, levert precies de score-inflatie op die het verlies verbergt, met huiswerk omhoog en tentamen omlaag. Vraag bij elke beoordeelde taak wat de ongesteunde versie zou laten zien, en repareer eerst de taak ([[reducing-ai-misuse]]). Als het huiswerkopgavenblad en de toets in de les dezelfde vaardigheid toetsen, meet slechts een van de twee de student.

**Behandel betrokkenheid niet als leren.** Tijd aan de taak, tevredenheid, het volume van hulpzoeken en chatactiviteit zijn allemaal gemakkelijk te instrumenteren en allemaal verenigbaar met helemaal geen leren. In een 3 × 2-experiment met 186 deelnemers die civiele zaken beoordeelden op een LLM-platform, leverde een waarborg die het wisselen naar een onjuiste AI-positie terugbracht van 42–60.5% naar 5.7–8.2% binnen de sessie geen meetbaar leereffect op (β = 0.03, p = 0.18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Het gedrag veranderde; de leermaat niet ([[student-engagement]]).

**Vertrouw niet op een waarschuwing waar de interface zou kunnen beperken.** Een tutor die het afgewerkte antwoord kan produceren, zal het onder tijdsdruk produceren, wat de syllabus ook zegt. De waarborg die werkt, is ingebouwd in de interactie ([[reducing-ai-misuse]], [[pedagogical-safety]]). Het eindantwoord onthouden bij de eerste twee pogingen is een ontwerpbeslissing; studenten vragen het niet te vragen is een verzoek.

**Plak geen studentenwerk, IEP's, disciplinaire dossiers of herleidbare concepten in een consumententool.** Dataminimalisatie is een ontwerpbeslissing die u namens de student neemt, of u erover hebt nagedacht of niet ([[privacy]]). Het gratis chatbotaccount dat een vraag beantwoordt over het gedragsplan van een student, is ook een kopie van dat plan op de server van iemand anders.

## Voor leerlingen

**Geef niet het deel weg dat u geacht wordt te oefenen.** Stel dat de opdracht een essay van vijf alinea's is: u plakt de prompt in een chatbot, neemt het concept dat hij teruggeeft en levert het in. Wat u inlevert is een verslag van wat het model kan. De vraag is welk cognitief werk verschuift, niet hoeveel AI u gebruikt. Huiswerk uitbesteden verhoogt de huiswerkcijfers terwijl het de cijfers voor het tentamen zonder hulpmiddelen verlaagt: over 26,811 middelbare scholieren die 30 maanden werden gevolgd, stegen de huiswerkcijfers met 18% en daalden de tentamencijfers met 20% binnen zes maanden ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei en Wu, 2026]]). De oefening die oproepbare kennis opbouwt, ging naar de tool ([[reducing-ai-misuse]]). Als de oefening het doel is, kan de tool de oefening niet doen.

**Lees vloeiendheid niet als accuratesse.** Vloeiende tekst is de output van een [[llm|taalmodel]], of de inhoud nu waar is of niet, en het mechanisme dat haar overtuigend maakt, is hetzelfde mechanisme dat haar onjuist maakt ([[hallucination-risk]]). Controleer de specifieke bewering, niet de toon van de alinea. Die gewoonte ontstaat zelden vanzelf: in een passief volgpanel van 900 Amerikaanse volwassenen die een AI-samenvatting kregen, volgden lezers in 1% van de bezoeken een bron die erin werd geciteerd ([[trust-calibration-chatbots-design-problem-2026|Jaidka en Cai, 2026]]). Als uw opdracht drie bronnen vereist, opent u alle drie.

**Accepteer instemming niet als feedback.** Modellen bevestigen aanzienlijk meer dan mensen: over 11 modellen bevestigden AI-reacties gebruikers 49% vaker dan menselijke reacties, en dat overschot is wat de interactie ondersteunend laat voelen ([[ai-personal-coach-review-benefits-risks-2026|Potel en Kumashiro, 2026]]). Een tutor die het nooit met u oneens is, heeft het corrigerende signaal verwijderd waarvoor u kwam ([[ai-sycophancy]]). Vraag om het bezwaar, niet om de bevestiging: "Wat is er mis met dit argument, en wat zou een scepticus zeggen?"

**Ruil geen vraag in voor een antwoord wanneer u vastzit.** De productieve worsteling die u overslaat, is het leren. Hulpzoeken dat een antwoord ophaalt, is ander gedrag dan hulpzoeken dat een hint ophaalt ([[help-seeking]], [[desirable-difficulties]]). Gebruik tools die het afgewerkte antwoord achterhouden, en vraag om de volgende stap in plaats van de oplossing.

**Plak geen persoonlijke, gezondheids- of gezinsgegevens in een tool om een beter antwoord te krijgen.** De tool heeft geen verplichting om ze te vergeten, en de privacykosten zijn niet zichtbaar in de kwaliteit van het antwoord ([[privacy]]). Een betere prompt vraagt niet om uw diagnose, uw adres of de namen van uw gezin.

## Voor ouders en gezinnen

**Maak het huiswerk niet met de tool, en laat het ook niet naast u gebeuren.** Het patroon in de data is score-inflatie met een verborgen prijs: in hetzelfde panel van 30 maanden stegen de huiswerkcijfers met 18% terwijl de cijfers voor het tentamen zonder hulpmiddelen met 20% daalden ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei en Wu, 2026]]). Een kind dat perfect huiswerk mee naar huis brengt en een proefwerk over een hoofdstuk niet haalt, laat u precies deze kloof zien. Wat u kunt controleren, is het proces. Kan uw kind de stap uitleggen, één opgave op papier overdoen en zeggen bij welk deel het onzeker was? Zo niet, dan heeft de tool de opdracht gedaan.

**Laat een chatbot niet de vertrouweling worden.** Sycofantische systemen bevestigen veel meer dan mensen, 49% meer over 11 modellen, en die bevestiging is wat ze veilig laat voelen om mee te praten ([[ai-personal-coach-review-benefits-risks-2026|Potel en Kumashiro, 2026]]). In een groot longitudinaal onderzoek wendden gebruikers zich voor persoonlijk advies bijna even vaak tot sycofantische AI als tot hechte vrienden en familie, met minder tevredenheid in hun echte relaties ([[sycophantic-ai-social-interaction-2026]]). Een kind dat verdriet naar een model brengt dat het altijd eens is, wordt niet gehoord. Het wordt gespiegeld. Als uw kind met een chatbot praat over een vriendschap of een verlies, is dat het moment om te vragen wie het nog meer heeft verteld.

**Geef een generatieve chatbot niet aan een jong kind en noem het begeleid omdat u in de kamer bent.** De leeftijdsgebonden richtlijn is concreet: gescaffolde, niet-generatieve activiteiten voor 9 tot 12 jaar, begeleid generatief gebruik met ethisch redeneren vanaf 13 jaar ([[ai-guidance-children-under-13]]). Voor de jongste kinderen gaat het risico over overtuiging. Preoperationele kinderen accepteren gegenereerde inhoud als waar, en de systemen zijn in de feedback die zij geven niet ontwikkelingsmatig gekalibreerd. Samen met een volwassene gebruiken betekent naast het kind zitten en vragen wat het speelgoed net deed, niet toezicht houden vanuit de deuropening ([[early-childhood-elementary-ai-education]]).

**Ga er niet van uit dat de tool van de school de gegevens van uw kind beschermt omdat de school haar heeft gekozen.** Vraag wat er wordt bewaard, hoe lang, of er iets mee wordt getraind en wie het nog meer ziet ([[privacy]]). Bewustzijn volgt niet uit blootstelling: een maand na een les waarin een klas uit het zevende leerjaar haar eigen vastgelegde gedrag live geprojecteerd zag, koos 66% van de 47 leerlingen nog steeds de minst beschermende chatbotinstelling ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Zet de vragen schriftelijk bij de school neer, en vraag de antwoorden schriftelijk.

**Gebruik een detectorresultaat niet om uw kind te beschuldigen, of om een beschuldiging van een school te ondersteunen.** In een gecontroleerde studie van 642 gepubliceerde samenvattingen markeerden detectors 9–15% van onbewerkt menselijk schrijfwerk en vingen zij minder dan 4% van gehumaniseerde AI-herschrijvingen ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Bij realistische basispercentages overtreffen fout-positieven de terechte treffers ([[ai-detection]]). Behandel een markering als een reden om de conceptgeschiedenis en een gesprek te vragen, niet als een bevinding.

**Concludeer niet dat een verbod op de tool de veilige optie is.** Te weinig vertrouwen is een kalibratiefout met eigen kosten, namelijk misgelopen bekwaamheid, en de vaardigheid die telt is passend vertrouwen, niet vermijding ([[trust-calibration]]). De nuttige ouderlijke zet is dezelfde die het onderzoek voor studenten ondersteunt: eis een verificatiestap, en maak haar goedkoop genoeg dat een moe kind haar werkelijk uitvoert ([[verify-ai-output]]). Vragen naar de bron die een chatbot gebruikte kost een minuut; de chatbot verbieden kost de oefening.

**Verwar een inhoudsfilter niet met veiligheid.** Filters richten zich op wat een systeem zegt. Zij richten zich niet op wat een interactie met een lerende doet: uitgeholde oefening, sycofantische instemming of ongelijke weigeringen ([[pedagogical-safety]]).

## Voor onderwijs- en faculteitsontwikkelaars

**Geef geen tooltraining en noem het AI-geletterdheid.** Een sessie over [[prompt-engineering|prompten]] leert de interface van een product. [[ai-literacy|AI-geletterdheid]] is het vermogen om te beoordelen wanneer de tool gebruikt moet worden, wat zij doet en wat gecontroleerd moet worden. Docenten die de knoppen leren zonder het oordeel, vertrekken met zelfvertrouwen en zonder kalibratie ([[teacher-ai-competency]]). Een workshop die eindigt met iedereen die een lesplan kan genereren, en niemand die kan zeggen wanneer dat plan niet gebruikt moet worden, heeft de interface onderwezen.

**Geef geen eenmalige professionalisering en verwacht dat de praktijk verandert.** Het bewijs over [[professional-training|professionele ontwikkeling]] is consistent over duur en follow-up: losse bijeenkomsten veranderen het zelfgerapporteerde zelfvertrouwen, zelden het gedrag in de klas, en de winst in zelfvertrouwen kan de afwezigheid van verandering maskeren ([[educational-development]]). Een sessie van twee uur in augustus, zonder follow-up in oktober, is een interventie op zelfvertrouwen.

**Negeer het toetssysteem dat u in stand laat niet.** Docenten nemen de praktijk die u leert alleen over als de toetsing waaraan zij worden gehouden haar niet bestraft. Een workshop over AI-bestendig taakontwerp naast een ongewijzigd tentamenregime leert docenten dat de training decoratief is.

**Demonstreer niet het onkritische gebruik dat u juist afraadt.** Een tool demonstreren door voor de faculteit een lesplan te genereren, zonder verificatiestap, leert het publiek dat de output het product is. Genereer het voor hun ogen, en markeer dan de twee beweringen die gecontroleerd moeten worden.

**Accepteer een leveranciersdemo niet als bewijs van effectiviteit.** De claim die u beoordeelt, gaat over leren, en een demo toont bekwaamheid. Vraag om ongesteunde uitkomsten, resultaten per subgroep en veiligheidstests over meerdere beurten ([[checking-whether-educational-ai-works]]).

## Voor ontwikkelaars van onderwijssoftware

**Optimaliseer niet de maatstaf die gemakkelijk te loggen is.** Sessieduur, aantal berichten en tevredenheidsscores verbeteren onder vrijwel elke verandering; leren vaak niet. Hetzelfde team dat een waarborg uitlevert, kan een dashboard uitleveren dat interactievolume beloont, en die twee wijzen in tegengestelde richtingen ([[learning-analytics]], [[student-engagement]]). Als uw succescriterium berichten per sessie is, hebt u een product gebouwd dat studenten beloont voor blijven in de chat.

**Lever geen detector uit zonder validatiestudie tegen het construct.** Een benchmark van vijftien EEG-modellen haalde 0.9853 F1 onder gestratificeerde kruisvalidatie; trial-onafhankelijke Group K-Fold, die de trialgrenzen respecteert, bracht de piek terug naar 0.6038 tegen een kansniveau van 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara en Halloluwa, 2026]]). Een glimlachdetector kan *negatief* uitvallen tegen door waarnemers beoordeelde empathie, omdat hij de context mist die een menselijke beoordelaar wel heeft ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publiceer het validatieprotocol naast het belangrijkste cijfer.

**Leid affect, aandacht of "betrokkenheid" niet af uit gezichten en lichamen zonder toestemming en een vastgelegd doel.** Risico over meerdere beurten is niet hetzelfde als risico over één beurt: in één pedagogische veiligheidsreview escaleerden fouten van 17.7% bij evaluaties met één beurt naar 77.8% bij evaluaties met meerdere beurten ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Een systeem dat op losse prompts is gecertificeerd, is gecertificeerd voor een interactie die studenten niet hebben ([[pedagogical-safety]], [[privacy]]).

**Verberg het overdrachtsmoment niet.** Een student die niet kan zien wanneer een tutor genereert en wanneer hij ophaalt, of wanneer een mens in de lus zit, kan haar vertrouwen niet kalibreren. [[automation-bias|Automatiseringsbias]] werkt het zuiverst wanneer het systeem gelijk heeft en de mens is gestopt met controleren ([[trust-calibration]]). Zeg in de interface wanneer een persoon het werk zal lezen.

**Ontwerp niet voor de benchmark en claim daarna het klaslokaal.** Benchmarkprestaties zijn een eigenschap van de benchmark. Rapporteer de gebruiksomstandigheden die u hebt getest, de populatie en de taken; anders wordt het getal gelezen als een belofte over een andere setting ([[limitations-in-aied-research]]).

**Maak de tool niet de enige route naar hulp.** Als de toegang van een student tot [[feedback|feedback]] afhangt van de beschikbaarheid, het quotum of de licentie van een model, is de rechtvaardigheidsvraag al beslist door de inkoop ([[equity-in-ai-education]]).

## Voor onderwijsbestuurders

**Koop bekwaamheidsclaims niet als uitkomstbewijs.** Leveranciers kunnen een product demonstreren; alleen een evaluatie kan leren aantonen. Eis ongesteunde uitkomsten, resultaten per subgroep, uitval, en een plan voor wat er gebeurt als de pilot eindigt ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Een demo toont de tutor die een probleem oplost; zij toont geen student die het volgende oplost.

**Zet geen toezicht in omdat het beschikbaar is.** Proctoring-systemen leggen gezichtsbeelden, identiteitsdocumenten, kamerscans inclusief 360-gradenopnames en microfoonaudio vast. Een review van 80 studies vond dat slechts 25% ethische kwesties aan de orde stelde, 35% de eigen dataset niet openbaar maakte en 30% niet reproduceerbaar was ([[automated-online-exam-proctoring-decade-review-2026|Malhotra en Chhabra, 2026]]). De kosten komen bij studenten terecht, en de bewijsbasis is dunner dan het contract suggereert ([[privacy]], [[remote-proctoring]]).

**Schrijf geen beleid dat alleen verbiedt en noem het governance.** Een verbod zonder herontwerp van toetsing, zonder ondersteuning en zonder beroepsroute verplaatst het gedrag in plaats van het te voorkomen, en het treft de studenten die een valse beschuldiging het minst kunnen betwisten. [[governance|Beleid]] moet ook de beoordelaar dekken: in een red-teamtest van een alledaagse beoordelingsworkflow brachten twee van vijf prompt-injectiestrategieën die in een inlevering waren verborgen, een onvoldoende essay naar een voldoende met 100% en 94% succes bij verschillende bestandstypen ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Een beleid dat studenten bindt en niet de beoordelingspijplijn is half beleid.

**Stel adoptie niet gelijk aan verbetering.** Een dashboard dat gebruik, tevredenheid en voltooiing rapporteert, zal op succes lijken terwijl de leermaat vlak blijft. Beslis vooraf welke uitkomst u ertoe zou brengen het contract op te zeggen ([[ai-ed-evaluation]]). Schrijf dat getal op voordat de pilot begint.

**Laat toegankelijkheid niet aankomen als een aanvraag voor een voorziening.** In een scopingreview van 40 studies naar digitale ondersteunende technologieën voor [[neurodiversity|neurodivergente]] studenten maakten 28 een formele diagnose tot voorwaarde voor deelname. Dat diagnose-afhankelijke model sluit elke lerende met behoeften en zonder label uit ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Voor onderwijsonderzoekers

**Laat zelfrapportage de causale claim niet dragen.** Zelfvertrouwen, ervaren leren en tevredenheid zijn uitkomsten, maar het zijn niet de uitkomsten die de meeste studies zeggen te meten. De [[empathy|empathie]]-literatuur is het duidelijkste geval: een veld dat empathie wil onderwijzen, meet vooral comfort, en een review van 17 studies vond winst in zelfvertrouwen veel vaker dan bewijs van empathie zelf ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail en Zafira, 2026]]; [[self-report-measures]]).

**Citeer geen effect zonder het ontwerp.** In een kritische review van 80 HCI-studies naar [[critical-thinking|kritisch denken]] met AI liepen 42 (52%) zonder controlegroep ([[critical-review-critical-thinking-hci-research-ai-2026]]). Een effect dat de koppen haalt, gebaseerd op 30 studenten in één vak op één locatie, is de gangbare vorm van een kwetsbare claim ([[limitations-in-aied-research]]).

**Rapporteer heterogeniteit niet zonder het model.** Dezelfde data leveren I² = 82.98% onder een fixed-effectmodel en I² = 15.75% onder een random-effectsmodel ([[ai-supported-instruction-stem-meta-analysis-2026]]). Een geciteerde I² zonder haar model is oninterpreteerbaar ([[meta-analysis-systematic-review]]).

**Generaliseer niet vanuit één context en noem het een bevinding.** Eén vak, één instelling, één modelversie, één taal. Modelgedrag verandert met elke release, en detectors die op één generatie zijn getraind, verliezen recall op de volgende ([[research-gaps-aied]], [[ai-detection]]).

**Behandel een correlatie tussen interactie en uitkomst niet als een mechanisme.** Promptvolume meet geen cognitieve offloading. Clusters naar volume verschilden niet in de verdeling van cognitief werk, en handmatig gecodeerde dialogen vonden helemaal geen offloading in 49.6% van 125 dialogen ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Meet het werk zelf.

**Publiceer geen beperkingenalinea die vóór het onderzoek al geschreven had kunnen zijn.** Noem de specifieke bedreiging, het specifieke aantal en de claim die erdoor wordt begrensd. Dat maakt een beperking bruikbaar voor de volgende lezer ([[interpreting-and-applying-aied-research]]).

## Waarom deze bij elkaar horen

Elk item hierboven verheft een proxy tot vonnis. Het essay staat voor de schrijver, de score staat voor het wangedrag, de glimlach staat voor de empathie, en de demo staat voor het leren. De correctie is elke keer dezelfde: benoem het construct, zoek een maat die de andere kant op had kunnen uitkomen, en verzamel die naast de gemakkelijke maat.

Geen van deze waarschuwingen betekent dat de tool altijd fout is. Een detector kan een reden zijn om met een student te praten. Een chatbot kan een nuttige repetitie zijn. Een dashboard kan een aanleiding zijn om een vraag te stellen. Wat schade veroorzaakt, is de substitutie.

## Wat u deze week kunt doen

- Kies één beoordeelde taak en schrijf op wat zij zou laten zien met de tool dicht. Als het antwoord "niets anders" is, is de taak het probleem.
- Voeg één ongesteunde maat toe aan een vak dat nu alleen ondersteunde prestatie rapporteert.
- Lees het proctoring- of AI-toolcontract van uw instelling op bewaartermijnen, secundair gebruik en lekclausules, en controleer of de toestemmingstekst beschrijft wat het systeem werkelijk vastlegt.
- Vraag een leverancier om ongesteunde uitkomsten en resultaten per subgroep. Als het antwoord een demo is, hebt u uw antwoord.
- Besteed in uw volgende facultaire sessie de tweede helft aan herontwerp van toetsing in plaats van aan prompts.

## Waar u verder kunt gaan

- [[addressing-common-misconceptions-ai-education]]: de overtuigingen achter deze praktijken, en hoe u ze zonder neerbuigendheid corrigeert.
- [[limitations-in-aied-research]]: wat de bewijsbasis nog niet kan dragen.
- [[reducing-ai-misuse]]: structurele hefbomen tegen misbruik, en waarom zij het beter doen dan aansporing.
- [[pedagogical-safety]]: wat een tutor een lerende kan aandoen terwijl hij elke inhoudscontrole doorstaat.
- [[should-we-use-ai-detectors]]: het volledige detectorbewijs.
- [[checking-whether-educational-ai-works]]: hoe u een claim beoordeelt voordat u haar overneemt.
