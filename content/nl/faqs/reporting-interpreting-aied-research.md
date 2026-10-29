---
title: "Wat zijn de beste praktijken voor het rapporteren en interpreteren van onderzoek naar AI in het onderwijs?"
created: "2026-09-16T15:05:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
updated: "2026-10-29T14:57:55-04:00"
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Uw concept heeft een opvallend getal in de samenvatting, en een reviewer heeft net gevraagd wat de controlegroep feitelijk deed. Of u bent zelf de reviewer, met een meta-analyse in handen waarvan het gepoolde effect 0,67 is en waarvan de methodensectie anderhalve pagina beslaat. Of uw afdeling schrijft richtlijnen over hoe medewerkers AI-onderzoek moeten rapporteren en wil iets specifiekers dan 'volg de standaarden'.

Zes weglatingen beslissen de meeste van deze gevallen: welk AI-systeem is gebruikt, waarvoor het was geconfigureerd, welke pedagogische rol het speelde, of mensen de uitvoer ontwierpen of beoordeelden, wat de uitkomstmaat werkelijk vastlegde, en wat de auteurs deden aan vertekening, kosten en beperkingen. 'Niet te beoordelen' is het eerlijke oordeel wanneer ze ontbreken, en dat is een ander oordeel dan 'weerlegd'.

## De korte versie

**1.** Beschrijf de AI als een behandeling, niet als een leverancier. Model, versie, configuratie, prompts, rol, en wie de uitvoer ontwierp of beoordeelde.

**2.** Benoem de pedagogische onderbouwing en de actieve vergelijking. Een productnaam is geen methode, en onderwijs zoals gebruikelijk is geen eerlijke controle.

**3.** Zorg dat de maatstaf bij de bewering past, inclusief of de uitkomst vertraagd en zonder hulp is gemeten.

**4.** Rapporteer de onzekerheid die uw analyse werkelijk heeft: afhankelijke effecten, variantie tussen studies, predictie-intervallen, subgroepgroottes, publicatievertekening.

**5.** Valideer elk geautomatiseerd oordeel, met een benoemde gouden standaard en een benoemde scheidsrechter.

**6.** Rapporteer de tegenwichten: governance, rekekenkosten, uw eigen AI-gebruik, nulresultaten, en alleen citaties die u hebt gecontroleerd.

## Beschrijf de AI als een behandeling die iemand kan nabouwen

Dit is de controle waarop de meeste inzendingen zakken. Het RAISE-kader (*Reporting AI Studies in Education*, Allison 2026) is een checklist van 30 items over tien thematische domeinen, en de diagnostische bewering ervan is specifiek: inzendingen laten routineus weg welk model is gebruikt, hoe het was geconfigureerd, welke rol het speelde en of menselijke actoren de uitvoer ontwierpen of beoordeelden. Reviewers blijven dan achter met vier onbeantwoordbare vragen. Wat deed de AI precies? Was die noodzakelijk? Is dit reproduceerbaar? Zijn de leerclaims geloofwaardig?

RAISE loopt van onderwijsrechtvaardiging via specificatie op API-niveau, interactie tussen lerende en AI, toegankelijkheid en culturele passendheid, deelnemers en setting, menselijke betrokkenheid, ontwerp, ethiek, transparantie en reproduceerbaarheid, tot beperkingen. De bijbehorende Ethics and Risk Matrix dekt risico's voor de [[agency|autonomie]] van de lerende, [[equity-in-ai-education|rechtvaardigheid]], data[[governance|beheer]] en algoritmische transparantie. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah en Gašević (2026)]] bieden een gestroomlijnd alternatief. TEP-AIED vouwt transparantie, ethiek en pedagogiek in een onderling afhankelijke structuur, levert een richtlijntabel die aan zeven papersecties is gekoppeld, en vraagt auteurs een subsectie in de methode toe te voegen met de titel 'Transparency, Ethics, and Pedagogy Considerations'. Hun reden is praktisch: RAISE is alomvattend en te fijnmazig voor routineus empirisch gebruik. De openbaarmaking valt onder [[ai-use-disclosure|openbaarmaking van AI-gebruik]] en is wat beweringen over [[privacy|privacybescherming]] en [[ethics|ethiek]] controleerbaar maakt.

Onderwijsrechtvaardiging staat bij RAISE voorop omdat AI geen neutraal hulpmiddel is. De waarde hangt af van afstemming tussen het leerprobleem, een theoretische onderbouwing en de koppeling van doelen aan uitkomstmaten. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] vond dat op twee na alle 14 geauditeerde meta-analyses de behandeling definieerden als een hulpmiddel, ChatGPT of GenAI of 'AI' in het algemeen. Een productnaam is geen [[pedagogy|pedagogiek]]. Blootstelling aan ChatGPT als een gemeenschappelijke interventie behandelen is vergelijkbaar met een meta-analyse van de effecten van 'papier'.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] maken hetzelfde argument voor primaire studies. Bij het auditen van een deelverzameling van de vergelijkingen achter een vooraanstaande meta-analyse vonden ze dat slechts 21% een goed gedefinieerde behandeling, een controlegroep en een geldige leermaat had. De gerapporteerde effectgrootte (g = 0,7) overtrof ook die van speciaal gebouwde [[intelligent-tutoring|intelligente tutorsystemen]] (0,66), en dat verschil is een waarschuwingssignaal: een behandeling die speciaal gebouwde tutoring verslaat, is waarschijnlijk een bundel verschillende dingen onder een etiket.

De toets is een vraag: kan een bekwame lezer uw interventie uit de methodensectie alleen nabouwen en hetzelfde krijgen?

## Bepaal wat uw maatstaf u toestaat te beweren

In O'Neills bewijsaudit van 46 willekeurig geselecteerde primaire studies gaven 28 (61%) aanleiding tot validiteitszorgen. Onenigheid tussen afhankelijke variabele en constructie kwam het meest voor (n = 15), gevolgd door onenigheid tussen onafhankelijke variabele en constructie (n = 11), problemen met het experimentele ontwerp (n = 7), problemen met data-extractie (n = 6), het ontbreken van een controlegroep (n = 6) en niet-gerandomiseerde groepsindeling (n = 6). Meerdimensionale uitkomsten werden routineus gepoold alsof ze uitwisselbaar waren, waarbij toetscijfers, huiswerkkwaliteit, [[motivation|motivatie]], [[self-efficacy|vertrouwen in eigen kunnen]], attitudes en [[student-engagement|betrokkenheid]] werden samengevoegd tot een getal voor 'academische prestatie'.

Twee rapportagegewoonten voorkomen dat. Vermeld welk construct het instrument meet en dat het voor die populatie is gevalideerd; [[self-report-measures|zelfrapportagematten]] laten zien waar op perceptie gebaseerde maten van gedrag afwijken, en [[assessment-validity|toetsingsvaliditeit]] dekt constructvaliditeit. Rapporteer vervolgens een uitkomst die niet afhangt van wat de lerende gelooft over het hulpmiddel. Onmiddellijke taakprestatie ondersteund door een hulpmiddel is geen [[learning-gains|leerwinst]], en [[cognitive-offloading|cognitieve offloading]] is het mechanisme dat die twee het aannemelijkst scheidt. De [[verification-quality-reliance-calibration-genai-2026|mini-review uit 2026 van 493 records en 14 prioriteitsstudies]] vond dat geen enkele studie het succes van verificatie en de daaropvolgende afhankelijkheidsbeslissing samen mat tegen een onafhankelijk vastgestelde standaard voor uitvoerkwaliteit, en dat weinig studies verder keken dan onmiddellijke prestatie naar uitgestelde retentie of [[transfer-of-learning|transfer]].

Vermeld het plafond expliciet in de discussie. Een studie die een quiz mat die met de tool open werd gemaakt, kan een bewering over ondersteunde prestatie dragen. Die kan geen bewering dragen over wat studenten hebben geleerd, en die zin kost een regel.

## Rapporteer de onzekerheid die uw analyse werkelijk heeft

Voor syntheses: rapporteer de omgang met afhankelijke effecten, de variantie tussen studies, predictie-intervallen en de beoordeling van publicatievertekening. I² alleen doet het werk niet. O'Neill vond de gerapporteerde heterogeniteit ernstig waar die werd gegeven, van 77,2% tot 94,4% over 13 meta-analyses, met 12 boven de 80%, en nergens opgelost: geen enkele moderatoranalyse haalde de minimale subgroepgrootte van tien studies. Twaalf meta-analyses behandelden afhankelijke effectgroottes uit dezelfde studie als onafhankelijk, wat het schijnbare bewijs opblaast. Slechts vier rapporteerden de variantie tussen studies (τ²) en slechts twee een predictie-interval, en beide intervallen omvatten nul. Publicatievertekening werd nergens in de set geldig beoordeeld.

Heterogeniteitscijfers hebben hun model nodig, omdat I² afhankelijk is van precisie. [[limitations-in-aied-research|Beperkingen in AIEd-onderzoek]] documenteert een synthese met I² = 82,98% onder een fixed-effectmodel en 15,75% onder random effects. Een lezer die alleen het eerste getal krijgt, kan niet zien hoe inconsistent het corpus is. Rapporteer τ² en een predictie-interval ernaast, wat ook de conventie is die [[meta-analysis-systematic-review|de reviewliteratuur]] vraagt.

Zet daarna een korting op uw eigen kopcijfer. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] poolde 1.840 effectgroottes uit 67 meta-analyses en vond dat het gemiddelde effect, zodra publicatievertekening wordt gemodelleerd, daalt tot ongeveer een derde van de gepubliceerde mediaan (SMD = 0,196 tegen 0,67), met een predictie-interval van -1,521 tot +1,908. Dat interval loopt van aanzienlijke schade tot aanzienlijk voordeel voor een hypothetische nieuwe studie. Het is het nuttigste getal in het artikel en degene die het vaakst uit de samenvatting verdwijnt.

## Zeg hoe ver de bewering reikt

Rechtvaardigheid en reikwijdte falen op dezelfde manier: een groot effect dat minder betekent dan het lijkt. Elf van de 14 geauditeerde meta-analyses stelden geen populatiegrens, zodat 'studenten' liepen van kinderen tot medisch specialisten in opleiding. Een enkel vak, een enkele instelling, discipline of land rechtvaardigt geen algemene bewering, en resultaten voor de ene tool dragen zelden over naar een andere.

Drie verklaringen dekken het meeste van grote effecten, en elk ervan is te rapporteren. Nieuwheid is er een. Extra tijd op de taak een andere. De derde is een vergelijkingsconditie die onderwijs zoals gebruikelijk kreeg in plaats van een actieve controle. Rapporteer wat de controle feitelijk deed, hoeveel tijd elke arm besteedde en hoe nieuw de tool was. Vermeld ook de populatiegrens, want effecten verschillen tussen groepen lerenden en een niet vermelde grens is wat een gepoold getal voor allemaal laat staan; [[differential-effects-across-learner-groups|Differentiële effecten tussen groepen lerenden]] zet de variatie uiteen.

Behandel de tool als een bewegend doel. Commerciële systemen veranderen zonder aankondiging, dus een bevinding is gebonden aan een modelversie, en de [[benchmark|benchmarktoets]] die in de ene release indruk maakte, houdt in de volgende misschien geen stand. Versie en datum van toegang horen daarom in de methodensectie, en niet alleen om reproduceerbaarheid.

## Valideer de geautomatiseerde oordelen

[[ai-ed-evaluation|AIEd-evaluatie]] delegeert het scoren steeds vaker aan modellen, wat de validatieprocedure tot onderdeel van het resultaat maakt in plaats van een bijlage. Khan Academy's verslag van de metrieken van zijn [[intelligent-tutoring|AI-tutor]] meldt dat cognitieve betrokkenheid wordt gescoord door een [[llm|taalmodel]] als beoordelaar, gekalibreerd tegen menselijke onderwijsexperts op F1 0,83, en dat de bewegingen in die metrieken uit meer dan 40 live-experimenten in vijf maanden kwamen in plaats van uit offline evaluatie ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] laten zien dat onenigheid tussen mens en machine over de kwaliteit van [[formative-assessment|pretestvragen]] systematisch is in plaats van toevallig, en dat het operationaliseren van de rubric meer uitmaakt dan prompten dat met de onderbouwing begint.

Overeenstemming met menselijke codeurs is iets anders dan kwaliteit, en die rapporteren alsof het kwaliteit is, is een doelwit voor reviewers. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] lieten een onafhankelijke expert 855 paarsgewijze codesets blind voor de bron beoordelen. De overeenstemming tussen mens en LLM kwam op een gemiddelde Jaccard van 0,30 tegen 0,52 voor overeenstemming tussen mensen, terwijl de blinde verificateur menselijke en machinale codering in niet te onderscheiden mate verkoos (51,5% tegen 48,5%, p = 0,537). Rapporteer het kalibratiedoel, de gouden standaard en wie de onenigheid beslechtte. Die drie items zijn wat een lezer laat beslissen hoeveel gewicht de geautomatiseerde score kan dragen.

## Openbaar de kosten en uw eigen gebruik

Een overzicht van alle AIED-conferentieteksten uit 2025 vond een patroon van LLM-gebruik zonder openbaarmaking: de meeste projecten gebruikten LLM's, en minder dan een handvol rapporteerde resourceverbruik of CO2-voetafdruk. Dat artikel levert een opensourcemethode met meetinstrumenten voor lokale en cloudhardware, plus een formule om de rekenkosten te schatten van frontiermodellen waarvan het aantal parameters niet bekend is. Het argument is dat het niet rapporteren van deze kosten zelf een ethische kwestie is. Gegevensbeheer, toestemming, toegankelijkheid en culturele passendheid horen in dezelfde alinea (RAISE-items; [[universal-design-for-learning|Universal Design for Learning]], [[accessibility|toegankelijkheid]]). [[equity-ethics-pedagogical-safety-research|Onderzoek naar rechtvaardigheid, ethiek en pedagogische veiligheid]] bevat de vollediger behandeling.

Uw eigen gebruik van AI in het onderzoeksproces vraagt dezelfde openbaarmaking. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta en Lins PRISMA-LLM-analyse]] van 888 artikelen over reviewautomatisering laat zien hoe ongelijk die rapportage is. Sinds 2023 rapporteerde 38,0% van de software- en productartikelen helemaal geen evaluatie, tegen 9,3% van de LLM-artikelen. De gemiddelde rijkdom van de rapportage was 6,3 voor LLM-artikelen en 3,3 voor software- en productartikelen. 84,1% van het LLM-gebruik berustte op commerciële of gehoste systemen, met slechts 4,9% open gewichten. Hun kader scheidt openbaarmaking van de implementatie van gevolgsensitieve evaluatie over vijf niveaus van openbaarmaking, wat een werkbaar sjabloon is om te beschrijven wat een tool binnen een review deed.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai en Chan (2026)]] voegen het beeld van de auteurskant toe. Van 28 promovendi gebruikten 27 GenAI bij ideevorming, literatuuronderzoek, uitleg, gegevensverwerking, programmeren, [[writing-education|academisch schrijven]], redactie en vertaling, Ze stemden hun gebruik af op de inzet en de normen van hun discipline. Het beleid van hun instellingen ging over onderwijs en toetsing en niet over onderzoekspraktijk, wat de rapportagebeslissing bij de auteur laat.

## Publiceer de nul en controleer elke citatie

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] verifieerden 30 verzonnen referenties in 14 artikelen, waarbij het aantal op een technisch symposium steeg van 3 in 2025 naar 17 in 2026, of 2,3% van de proceedingsteksten van dat jaar. Door LLM ondersteund schrijven maakt een aannemelijk verzonnen citatie goedkoop te produceren, en daarom moet de controle voor indiening gebeuren en niet na acceptatie.

De tegenwichten in die audit doen ertoe wanneer u die citeert. De meeste gemarkeerde referenties waren onschuldig: 229 waren mismatches in ACM-metadata waarbij de pdf correct was, en 188 waren geldige bibliografische varianten. Het aantal verzonnen referenties is een bewuste ondergrens, en de onschuldige meerderheid is geen afrondingsfout. Verifieer elke vermelding die u niet zelf kunt controleren.

Het rapporteren van nul- en negatieve bevindingen is de andere helft van een eerlijke bewijsbasis. Bartoš et al. vonden sterk bewijs voor onderdrukte nulresultaten (elke Egger-test p < 0,0001) en extreme heterogeniteit (τ = 0,869), waarbij geen enkele subgroep naar uitkomst, vakgebied, niveau of AI-rol consistente winst liet zien. Ze vonden ook geen verschil tussen studies gepubliceerd voor en na januari 2023, wat de bewering ondermijnt dat moderne generatieve tools specifiek winst opleveren.

## Wat onderzoekers hier verkeerd doen

**'Een effectgrootte is een eigenschap van de modaliteit.'** Er valt geen effect van AI in het onderwijs te rapporteren. Op twee na alle geauditeerde meta-analyses definieerden de behandeling als een toolnaam, slechts 21% van de geauditeerde vergelijkingen had een gedefinieerde behandeling, een controle en een geldige maat, en de gepoolde g = 0,7 zat boven speciaal gebouwde intelligente tutoring op 0,66. Een effectgrootte hoort bij een ontwerp, een populatie en een meetmoment.

**'Het gepoolde gemiddelde is wat er met mijn studenten gebeurt.'** Het gemiddelde beschrijft de verzameling studies, en niets erin legt een enkel klaslokaal vast. Het voor vertekening gecorrigeerde gemiddelde is SMD = 0,196 en het predictie-interval loopt van -1,521 tot +1,908. De gerapporteerde heterogeniteit zit boven de 80% in 12 van de 13 meta-analyses, en geen enkele subgroep in de grotere pool liet consistente winst zien. Een verandering op studentniveau is uit geen van beide getallen vast te stellen.

**'Een nulresultaat betekent dat de tool niet werkt.'** Een nul is een uitspraak over een ontwerp bij een gegeven precisie, en het ontbreken van een aantoonbaar effect in een studie is een feit over die studie. De voor vertekening gecorrigeerde SMD = 0,196 kwam uit een literatuur waarin elke Egger-test significant was, dus de verdedigbare lezing van het corpus is een klein en onzeker gemiddelde. Geen enkele subgroep naar uitkomst, vakgebied, niveau of AI-rol in de grotere pool liet consistente winst zien. Het gedocumenteerde probleem in deze literatuur is onderdrukking.

**'Een studie beslecht het.'** De basispercentages pleiten anders. 61% van de gecontroleerde primaire studies had validiteitszorgen, een vak of instelling rechtvaardigt geen algemene bewering, en een commercieel systeem is een bewegend doel dat aan een modelversie is gebonden. Een enkele studie is een datapunt met een ontwerp eraan vast.

**'Hoge overeenstemming met menselijke codeurs betekent dat het model het juiste beoordeelt.'** De overeenstemming tussen mens en LLM was 0,30 tegen 0,52 voor mens-mens, en de blinde verificateur kon de twee codesets niet onderscheiden op 51,5% tegen 48,5%. Overeenstemming meet consistentie met een codeur, en kwaliteit is een aparte vraag die een gouden standaard en een scheidsrechter vraagt.

## De tegenwerpingen die u zult horen

**'Reviewers willen nieuwheid, geen methodedetail.'** Tijdschriften bewegen de andere kant op. RAISE en TEP-AIED geven redacteuren een construct om te eisen, en de methodesubsectie van TEP-AIED is een drempelarm instappunt. Methodedetail is wat een niet te beoordelen artikel verandert in een citeerbaar artikel.

**'We hebben de ruimte niet.'** De vijf niveaus van openbaarmaking zijn rapportageniveaus en geen risiconiveaus, dus de diepte van de evaluatie kan een zin of twee zijn. Versie, prompts en rol passen in een korte alinea. Kosten en governance passen in een beperkingenzin.

**'Iedereen rapporteert het zo.'** De cijfers zeggen dat de norm het probleem is: 61% van de gecontroleerde primaire studies met validiteitszorgen, 12 van de 13 meta-analyses boven de 80% heterogeniteit, 38,0% van de software- en productartikelen zonder enige evaluatie.

**'Onze tool is commercieel, dus we kunnen het model niet rapporteren.'** Rapporteer versie, datum van toegang, configuratie, de prompts die u hebt gegeven, rol en vangrails. Als de leverancier het niet wil zeggen, hoort die beperking in de beperkingen te staan als grens aan de bewering.

**'Nulresultaten rapporteren zal ons schaden.'** Onderdrukte nulresultaten zijn het gedocumenteerde mechanisme achter het voor vertekening gecorrigeerde gemiddelde van SMD = 0,196. Ze publiceren is wat uw positieve resultaat leesbaar houdt.

## Wat u deze week kunt doen

**1.** Lees uw samenvatting tegen uw methodensectie en schrap elke bewering die de methode niet kan dragen. Een zin over het plafond van de maatstaf is meestal genoeg.

**2.** Voeg de specificatieparagraaf toe: model, versie, datum van toegang, configuratie, prompts, rol, en wie de uitvoer ontwierp of beoordeelde.

**3.** Haal de τ², het predictie-interval en de beoordeling van publicatievertekening uit de bijlage naar de resultaten, of zeg ronduit dat u ze niet hebt berekend.

**4.** Schrijf de populatiegrens en de controleconditie in de ontwerpverklaring, inclusief hoeveel tijd elke arm besteedde.

**5.** Verifieer elke referentie die u niet zelf hebt gelezen, en controleer eerst het auteursveld.

## Waar u verder kunt gaan

[[research-methods-aied|Onderzoeksmethoden in AI in het onderwijs]] behandelt de ontwerpkeuzes onder deze rapportagebeslissingen, en [[limitations-in-aied-research|Beperkingen in AIEd-onderzoek]] is de catalogus van faalwijzen met de cijfers erbij. [[interpreting-and-applying-aied-research|AIEd-onderzoek interpreteren en toepassen]] is de lezerskant van hetzelfde probleem, [[does-ai-help-students-learn|het bewijs over duurzaam leren]] is wat de meeste van deze maten proberen te bereiken, [[evaluating-ai-interventions-methods|het evalueren van AI-interventies]] dekt de maten en vergelijkingsontwerpen, en [[checking-whether-educational-ai-works|of educatieve AI werkt]] is de kortere versie van de vraag. Voor de leemtes die deze literatuur niet heeft gevuld, zie [[research-gaps-aied|leemtes in het AIEd-onderzoek]].
