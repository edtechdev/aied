---
title: "Hoe controleer ik of door AI gegenereerde quiz- en examenvragen echt goed zijn?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

U vraagt twintig vragen op basis van uw hoorcollegeaantekeningen. Ze komen terug met antwoordsleutels, uitleg, moeilijkheidslabels en categorieën uit de taxonomie van Bloom, in een opgemaakt document dat af lijkt. Uw naam komt er straks op te staan.

Kort antwoord voor een collega: gegenereerde vragen zijn kandidaten, geen beoordeling. Los elke vraag zelf op, controleer wat het item van een student werkelijk vraagt, en zoek uit hoe studenten erop reageren voordat het meetelt. In de twee grootste studies in deze kennisbank is het interessante signaal niet dat generatie werkt, maar waar ze faalt. Iteratieve generatie binnen een vakspecifieke workflow leverde bruikbare multiplechoice-examens op in 71 collegeklassen ([[assessing-quality-ai-generated-exams-field-2025|Isley et al., 2025]]). In een data-science-audit van 311 ingezette vragen volgden de moeilijkheidslabels van het model bijna perfect de Blooms-niveaus die het er zelf bij had gegenereerd (Spearman ρ = 0,90), terwijl ze met wat studenten werkelijk scoorden op ρ = 0,06 zaten ([[student-llm-use-ai-question-difficulty-data-science-2026|An en Wang, 2026]]). Het label was een beschrijving van de prompt, geen meting van het item.

## De korte versie

**1.** Schrijf de leeruitkomst op en het bewijs dat een bevredigend antwoord zou leveren voordat u iets genereert.

**2.** Maak een blauwdruk, zodat u kunt zien welke uitkomsten de set bemonstert en hoe vaak.

**3.** Los elk item zelf op voordat u de sleutel vertrouwt, en lees de uitleg als een claim die gecontroleerd moet worden.

**4.** Vraag wat een student moet doen om het te beantwoorden. Een vraag die „analyseer” zegt en reproductie vraagt, is een reproductievraag.

**5.** Behandel moeilijkheidslabels als promptmetadata, niet als psychometrie.

**6.** Pilot de items en onderzoek hoe ze functioneren, en herzie dan de zwakke.

## Begin met het leren waarvan u bewijs wilt

Generatie is goedkoop genoeg dat het uitvoerformaat stilletjes de specificatie wordt. Als uw aantekeningen nette multiplechoice-items opleveren, meet u uiteindelijk of studenten tussen plausibele uitspraken kunnen kiezen, welke uitkomst het studieprogramma ook claimt.

Specificeer eerst de uitkomst, dan het bewijs dat een bevredigend antwoord zou leveren, dan de kennis die studenten wordt geacht mee te brengen. Neem het cursusmateriaal op, de misvattingen die u verwacht, toegestane hulpmiddelen en het antwoordformaat. Wilt u dat studenten bewijs interpreteren, dan moet het item interpretatie vragen, en het woord aan een definitievraag toevoegen doet dat niet. Een lang scenario kan nog steeds beantwoordbaar zijn via één bekende formule die het antwoord verraadt.

Een beoordelingsblauwdruk is een tabel van uitkomsten tegen items, en haar waarde is dat ze hiaten blootlegt voordat studenten dat doen. Ze maakt ook de afweging zichtbaar: elk item dat u uit het gemakkelijkste materiaal genereert, is een item dat u niet aan de uitkomst hebt besteed die u het meest aan het hart gaat.

## Beoordeel elk item op zes dimensies

Begin met de sleutel. Is die verdedigbaar tegen gezaghebbende cursusinhoud, en houdt de uitleg stand wanneer u haar onafhankelijk controleert? De sleutel en de uitleg komen vaak uit dezelfde gebrekkige stap, dus de ene controleren is de andere niet controleren.

Vraag dan wat het beantwoorden van het item een student werkelijk vraagt te doen tussen het lezen en het kiezen. Hier falen gegenereerde items het vaakst, en hier is het label het minst betrouwbaar.

Controleer vervolgens de afstemming: levert het antwoorden bewijs voor de beoogde uitkomst, of voor iets aangrenzends dat gemakkelijker te beoordelen is?

Lees de formulering zoals een student dat zou doen. Is de benodigde informatie aanwezig, en is ambiguïteit die niets met uw construct te maken heeft verwijderd?

Bekijk de opties en de scoringsregels samen. Zijn de afleiders plausibel en onderscheiden van elkaar en van de sleutel, en erkent de sleutel legitieme alternatieve antwoorden die uw rubric zou honoreren?

Vraag ten slotte wie het item uitsluit. Leeslast, culturele context, beeldmateriaal en opmaak kunnen eisen stellen die niets met de uitkomst te maken hebben. Voor een meertalige of gehandicapte student meet een item dat snel lezen beloont iets wat u niet bedoelde, en [[differential-effects-across-learner-groups|prestaties per subgroep]] is waar dat zichtbaar wordt.

Een tweede model kan u helpen problemen te vinden, en overeenstemming tussen twee modellen is geen onafhankelijke verificatie van juistheid. Ze delen trainingsdata en faalwijzen. Los het item op, en laat dan een bekwame persoon kijken naar de items die gaan meetellen.

## Laat het moeilijkheidslabel niet beslissen

De literatuur over [[automated-question-generation|vraaggeneratie]] is nuttiger over het falen van labels dan over het succes van generatie. [[student-llm-use-ai-question-difficulty-data-science-2026|An en Wang (2026)]] onderzochten 378 door auteurs geschreven vragen in data-sciencevakken, waarvan er 311 werden ingezet bij 54 studenten, samen 7.888 antwoorden. De labels gemakkelijk, gemiddeld en moeilijk van het model correleerden met de niveaus uit de taxonomie van Bloom die het er zelf bij had gegenereerd op ρ = 0,90 en met de empirische itemmoeilijkheid op ρ = 0,06. Ruim 70% van de ingezette items werd door elke student correct beantwoord, wat bijna geen variatie liet waar een moeilijkheidslabel zelfs in principe op kon aansluiten.

Daaruit volgen twee lessen. Ten eerste is moeilijkheid een eigenschap van de interactie tussen een item en een populatie, dus geen enkel label dat vóór afname is geproduceerd, kan als gemeten waarde worden vertrouwd. Ten tweede is een bank items die iedereen correct beantwoordt geen gemakkelijke beoordeling, maar een nutteloze: ze draagt bijna geen informatie over wie wat weet.

Het positieve geval is smaller dan leveranciers claimen en de moeite waard om precies te kennen. [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] genereerden multiplechoice-examens van tien vragen voor 71 collegeklassen, ruwweg 1.200 studenten, met een lus die elk item genereert, beoordeelt en herziet op basis van het door de docent verstrekte materiaal van elk vak, en vergeleek de items daarna met door mensen geschreven examens. Dat is een workflow met een reviewer erin, per vak uitgevoerd, geen enkele prompt over generieke inhoud. De ondersteuning geldt voor de workflow onder die voorwaarden, en strekt zich niet uit tot wat hetzelfde model produceert uit een plaksel ongecorrigeerde aantekeningen.

## Doorloop een cyclus van genereren, beoordelen, piloten en herzien

Genereer tegen een blauwdruk, en vraag om de beoogde uitkomst, de sleutel, een beknopte oplossing en de misvatting die elke afleider moet vangen. De annotaties maken het ontwerp controleerbaar. Ze zijn geen bewijs dat het ontwerp deugt.

Herstel voordat u zich opstapelt. Verwijder ongedekte claims, dubbele items, toevallige aanwijzingen in de stam, meerdere verdedigbare sleutels en complexiteit die niets met het construct te maken heeft, en noteer wat u hebt veranderd, want het patroon van herstellingen vertelt u welk deel van de prompt u moet aanpakken.

Pilot waar een pilot in verhouding is. Laagrisico-oefening, of een beheerde pilot binnen de beoordeling, levert u responsdata. Vertel studenten hoe ze een ambigue of foute vraag kunnen melden en lees die meldingen, want ze zijn uw meest informatieve foutsignaal.

Onderzoek dan hoe de items functioneren: het aandeel dat correct antwoordt, welke afleiders antwoorden aantrekken, en of succes op het item samengaat met prestatie op de rest van de beoordeling. Een item waarop sterke studenten falen en zwakke slagen, is een defect en geen moeilijke vraag. In een kleine klas zijn deze statistieken instabiel, dus combineer ze met inhoudelijke beoordeling en uitleg van studenten in plaats van een percentage als uitspraak te behandelen.

Herzie, en houd het dossier bij: de goedgekeurde versie, de uitkomst die ze dient, de sleutel, de onderbouwing, de reviewnotities en de afnamegeschiedenis. Voor grote of hoogrisicobanken horen hier beoordelingsspecialisten en behoorlijke psychometrische methoden, en [[educational-measurement|expertise in meting]] is niet iets wat een zorgvuldige lezing kan vervangen.

## Hoe dit er in een vak uitziet

In een inleidend sociologievak kan de uitkomst zijn: een structurele verklaring onderscheiden van een individuele. Een zwak item vraagt studenten „structureel” te definiëren, wat woordenschatherkenning meet. Een sterker kandidaat geeft een kort scenario over een gezin en een werkbeslissing, en vraagt dan welke verklaring een structurele beperking het beste identificeert, met afleiders die plausibele maar andere interpretaties vertegenwoordigen.

De docent controleert of het scenario de sleutel werkelijk ondersteunt, of geen twee opties hetzelfde idee uitdrukken, en of het antwoorden niet afhangt van terminologie die het vak nooit heeft ingevoerd. Een vervolgvraag van één regel, „welk detail ondersteunt uw keuze?”, brengt de redenering naar boven die de gekozen optie verbergt. De aanpassing is als itemptype ongetest, en haar waarde is smaller: de reviewvragen hierboven kunnen worden beantwoord voordat een item wordt afgenomen, en een slechte sleutel kan worden hersteld voordat studenten hem zien.

Voor studenten die hun eigen oefenvragen genereren, geldt dezelfde regel op hun niveau: probeer het item, controleer de uitleg tegen cursusbronnen, en breng de onoplosbare gevallen naar iemand die het vak kent. [[study-with-ai|Oefenpraktijk]] die studenten leert gegenereerde sleutels onkritisch te accepteren, leert de verkeerde gewoonte aan.

## Wat er op u afkomt

**„Het gaf een antwoord en een uitleg.”** Beide kunnen dezelfde fout herhalen, en de uitleg wekt vertrouwen juist omdat ze vloeiend is. Controleer de redenering tegen uw materiaal, niet tegen haar eigen herformulering.

**„Dit zijn maar oefenvragen.”** Oefening leert misvattingen aan wanneer foute sleutels niet worden gecorrigeerd, en studenten repeteren de fout even gretig als het juiste antwoord. Lagere inzet verandert hoeveel review in verhouding is. Het verandert niet of nauwkeurigheid ertoe doet.

**„De studenten vonden de quiz leuk.”** Plezier is bewijs over de ervaring. Een gemakkelijke quiz die iedereen comfortabel afmaakt, voelt goed en meet weinig, en de data-science-audit vond dat de populariteit van de items niet gepaard ging met enig bruikbaar moeilijkheidssignaal.

**„De rubric of de Bloom-tags laten zien dat het de uitkomsten raakt.”** Bloom-labels die door dezelfde generatiestap worden geleverd, zijn het minst onafhankelijke bewijs dat beschikbaar is. De ρ = 0,90 tegen labels en ρ = 0,06 tegen studentprestaties is precies hoe dat eruitziet wanneer het wordt gemeten.

## Wat u deze week kunt doen

**1.** Kies één uitkomst en schrijf het bewijs op dat een bevredigend antwoord zou leveren. Genereer daarna vijf items daartegen, met de vraag om de sleutel, de oplossing en de beoogde misvatting achter elke afleider.

**2.** Los alle vijf op zonder naar de sleutels te kijken, en log de items waarop u en het model het oneens zijn.

**3.** Vraag een collega de twee sterkste kandidaten te onderzoeken op afstemming en ambiguïteit, en verwijder alles wat geen van u beiden kan verdedigen.

**4.** Pilot de overlevenden met een korte vervolgvraag waarin studenten aangeven welk detail hun keuze ondersteunt.

**5.** Registreer wat u hebt veranderd en waarom, zodat de volgende batch van een betere prompt vertrekt in plaats van dezelfde.

## Waar u verder kunt gaan

[[automated-question-generation]] is de conceptpagina voor generatiemethoden en hun gemeten kwaliteit, en [[educational-measurement]] behandelt itemanalyse, betrouwbaarheid en de psychometrie waar een pilot alleen naar wijst. Beide vallen onder [[assessment-validity|validiteit van beoordeling]], de standaard die de hele cyclus dient.

De oordeelskant van hetzelfde probleem hoort bij [[ai-grading-fairness-reliability|AI-beoordeling]], want een goed item dat slecht wordt beoordeeld is niet beter dan een slecht item dat goed wordt beoordeeld. Voor de bredere vraag wat een cijfer zou moeten vertegenwoordigen wanneer studenten AI kunnen gebruiken, zie [[redesign-assessment-ai-era|het herontwerpen van beoordeling in het AI-tijdperk]].
