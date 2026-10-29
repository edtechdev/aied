---
title: "Hoe kan AI helpen bij onderwijsonderzoek?"
created: "2026-10-05T11:23:36-04:00"
weight: 72
type: faq
connected_faqs: [evaluating-ai-interventions-methods, reporting-interpreting-aied-research, research-gaps-aied, equity-ethics-pedagogical-safety-research]
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, ai-assisted-educational-research]
assessment: [assessment-validity, educational-measurement]
ethics: [ai-use-disclosure, hallucination-risk, privacy]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed]
page_kind: [evaluation]
confidence: medium
updated: "2026-10-29T14:58:40-04:00"
translation_of: faqs/how-can-ai-assist-with-educational-research
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

Uw coauteur wil een alinea in de methodesectie over de AI-tools die het team gebruikte. Of de stapel te screenen literatuur is groter dan de deadline toelaat. Of een reviewer heeft beleefd gevraagd of een mens de transcripten heeft gelezen, en u weet niet zeker wat het eerlijke antwoord is.

Het korte antwoord voor die vergadering: AI kan het zoeken, een eerste screeningronde, de triage bij het coderen en het schrijven op zich nemen, en ze kan geen verantwoordelijkheid dragen voor wat het project concludeert. Bepaal welke taken ervoor openstaan voordat het project begint, verifieer output tegen een menselijke standaard met een met naam genoemde persoon die beslist, en log genoeg zodat een buitenstaander kan reconstrueren wat er is gebeurd. De meeste teams merken dat de uren voor verificatie en logging werk toevoegen in plaats van wegnemen.

## De korte versie

**1.** Schrijf op welke onderzoekstaken AI mogen gebruiken en welke niet, voordat de eerste zoekopdracht loopt. Sorteer op belangen in plaats van op tool.

**2.** Zet de automatisering op screening. Houd data-extractie, reconciliatie en synthese bij mensen.

**3.** Leg het codeboek en de rubriek vast voordat een geautomatiseerde ronde de data aanraakt.

**4.** Bepaal wat verificatie betekent en wie ervoor tekent. Overeenstemming tussen een model en een codeur is een gelijkenismaat, geen kwaliteitsresultaat.

**5.** Verifieer elke referentie met de hand, auteurs eerst, zodra AI het schrijven heeft aangeraakt.

**6.** Log prompts, modelversies en corpusversies, en begroot de uren daarvoor.

## Bepaal wat AI mag aanraken voordat het project begint

De beslissing over de reikwijdte hoort in het projectdossier in plaats van in iemands geheugen. In [[dai-chan-responsible-genai-research-ai-literacy-2026|de focusgroepstudie van Dai en Chan (2026)]] kalibreerden onderzoekers die erover hadden nagedacht hun gebruik naar belangen en intellectuele centraliteit: zwaarder op procedureel werk met lage belangen, voorzichtig waar de wetenschappelijke bijdrage centraal stond. Zevenentwintig van de 28 postdoctorale onderzoekers in die studie hadden GenAI ergens in de workflow gebruikt, inclusief academisch schrijven en vertalen, dus voor de meeste teams is de vraag waar de grens ligt in plaats van of er een grens is.

Schrijf de grens als een lijst met een oordeel per taak: literatuur zoeken, abstracts screenen, extractie, kwalitatieve codering, statistische analyse, schrijven, referentieopmaak. Lees die studie als een kaart van wat onderzoekers rapporteerden te doen. Het is een focusgroepverslag, geen effectiviteitsresultaat.

## Zet de automatisering op screening en houd synthese in het team

Systematische reviews zijn waar automatisering het verst is gevorderd. Tools zoals ASReview, SWIFT-Review, Covidence, AIScreenR en MetaMate verlichten de procedurele last vooral bij het screenen van abstracts, terwijl data-extractie, reconciliatie en synthese bij menselijke reviewers bleven in het ene team dat zijn workflow rapporteerde ([[scaffolding-systematic-reviews-2026|Wang et al., 2026]]).

Het meeste voordeel komt uit twee ontwerpbeslissingen. Schrijf beslissingsregels voor grensgevallen voordat het screenen begint, en houd een categorie „misschien” met een gedeeld beslissingslog, zodat hetzelfde oordeel op hetzelfde soort record wordt toegepast. Zonder dat log divergeren de regel van de tweede reviewer en die van de eerste stilzwijgend, en de exclusielijst is niet meer reproduceerbaar.

## Leg het codeboek vast voordat het model iets leest

[[qualitative-research|Kwalitatieve analyse]] is de fase waarin interpretatie het product is. Constructen, coderingsrubrieken en trainingsdata zijn menselijke beslissingen in plaats van modeloutput ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]), wat betekent dat het codeboek vast moet liggen voordat een geautomatiseerde ronde over het corpus loopt. Het alternatief is een coderingsschema geschreven rond wat het model toevallig naar boven bracht, en de thema's beschrijven dan de lezing van uw data door de tool.

Delegatie kan fijnmaziger zijn dan alles-of-niets. [[agreement-not-quality-llm-coding-verification|Eén blindverificatiestudie]] classificeerde 15 van 72 codeboekitems als aantoonbaar menselijke expertise vereisend, 12 als beter bediend door een model, en 16 als geschikt voor op vertrouwen gebaseerde triage. Sorteer uw eigen items zo en de arbeidsbesparing landt waar ze veilig is.

## Bepaal wat verificatie betekent en wie ervoor tekent

Hoge overeenstemming tussen een model en een menselijke codeur wordt gerapporteerd alsof ze correctheid vaststelde. Dat doet ze niet. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] lieten een onafhankelijke deskundige 855 paarsgewijze codesets blind voor de bron beoordelen. Overeenstemming tussen mens en LLM (gemiddelde Jaccard 0,30) lag ruim onder overeenstemming tussen mensen (0,52), toch gaf de blinde verificateur de voorkeur aan menselijke en machinale codering in percentages die hij niet kon onderscheiden (51,5% tegen 48,5%, p = 0,537). In sommige gevallen codeerde menselijke consensus een gedeelde bias die de verificateur verwierp ten gunste van het model.

De verificatiestap heeft dus een gouden standaard nodig die noch de output van het model is, noch de overeenstemming van de codeur ermee, plus een met naam genoemde persoon die de meningsverschillen beslechtte. Rapporteer beide. Een gelijkenisstatistiek beschrijft hoe dicht twee lezingen bij elkaar liggen, en ze zegt niets over de vraag of een van beide juist is.

## Zoek snel, en controleer daarna elke bron zelf

Generatief zoeken vat samen, beveelt aan, synthetiseert en converseeert, wat de oudere ordening loswrikt waarin het systeem lokaliseert en de lezer interpreteert ([[genai-academic-search-workshop]]). Behandel het als een ontdekkingsinstrument. Het workshopverslag bevat twee waarschuwingen: de capaciteit is ongelijk, waarbij sterk geciteerde wetenschappers ongeveer twee keer zo betrouwbaar werden gereconstrueerd als minder geciteerde collega's, en een bibliothecaris beschreef een vertrouwenskloof waarin studenten generatief zoeken te veel vertrouwden terwijl docenten het wantrouwden.

Referentieverificatie is waar dit ononderhandelbaar wordt, en de fouten clusteren in het auteursveld, precies het veld dat eer draagt. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] auditeerden 723.930 publicaties en 15.872.533 referenties en verifieerden 30 verzonnen referenties in 14 papers over informaticaonderwijs, alle uit 2025 en 2026. Zeventien van de 30 waren hybrides: een echte titel gekoppeld aan verzonnen of onjuiste auteurs. Het geverifieerde aantal bij één technisch symposium steeg van 3 in 2025 naar 17 in 2026, in 2,3% van de proceedingspapers van dat jaar. Hun totaal is bewust een ondergrens, en geautomatiseerde checkers erven de gebreken van de metadata die ze als grondwaarheid behandelen. Controleer eerst de auteurs.

## Behandel een geautomatiseerde score als een hypothese om te toetsen

Geautomatiseerde meetfuncties kunnen precies en voorspellend lijken terwijl ze ondoorzichtig blijven. [[ai-methodologies-science-education-research-2026|Martin et al.]] kaderen dit met Chang's nomische meetprobleem: het meten van een grootheid vereist een wet die haar aan iets waarneembaars relateert, en die wet kan niet worden getoetst zonder de grootheid al te kennen. AI-afgeleide meetfuncties komen voort uit trainingsdata en optimalisatie in plaats van uit de onderzoeker, dus werk aan uitlegbaarheid is van belang om te laten zien of een model semantisch begrip volgt of alleen trefwoorden.

Het falen is concreet. In [[zhang-platform-scores-miss-ai-teaching-agents-2026|een evaluatie van acht AI-onderwijsagenten]] eindigde de agent die volgens de eigen score van het platform derde was, als laatste op een door deskundigen gevalideerde rubriek. Onenigheid tussen mens en machine is systematisch in plaats van willekeurig, en de operationalisering van de rubriek weegt vaak zwaarder dan het vakmanschap van de prompt ([[machines-misread-pedagogical-quality|Tseng et al., 2026]]). Voordat een geautomatiseerde score uw instrument wordt, valideert u die tegen een maat die gekoppeld is aan de bekwaamheid die u wilt bestuderen. Voor de maten zelf, zie [[evaluating-ai-interventions-methods]].

## Schrijf de methodesectie zodat een buitenstaander haar kan auditen

Adoptie is het rapporteren vooruitgelopen. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta en Lin (2026)]] analyseerden 888 papers over reviewautomatisering: sinds 2023 rapporteerde 38,0% van de software- en productpapers helemaal geen evaluatie, tegen 9,3% van de LLM-papers, en modeltoegang was overweldigend eigendom van leveranciers (84,1%). Een gunstige algemene beoordeling impliceerde ook geen geschiktheid voor delegatie, want 52% van 118 LLM-papers met alleen positieve resultaten rapporteerde nog steeds een zorg dat de workflow onder de lat bleef die haar rol vereiste. Hun PRISMA-LLM-kader scheidt openbaarmaking van de implementatie van gevolggevoelige evaluatie en behandelt zijn vijf niveaus als openbaarmakingsniveaus in plaats van risiconiveaus.

De praktische versie: noem het systeem en zijn versie, de prompts, de corpusversie, wat een mens controleerde en waar het faalde. Bewaar prompt- en antwoordlogs, want een vloeiend gegenereerde themalijst ziet er onvermijdelijk uit lang voordat haar bewijswerk is begonnen ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Begroot ook de uren. [[persistent-ai-agents-academic-research|Een casestudy van 115 dagen met één onderzoeker]] naar een persistente onderzoeksagent vond dat het sterkste patroon capaciteitsuitbreiding was in plaats van bewezen arbeidssubstitutie: naarmate geheugen en procedures zich opstapelden, groeide de omvang van gedelegeerd werk terwijl de inbreng van de mens niet kromp.

## Voer praktijkonderzoek uit met dezelfde regels op kleinere schaal

Als u docent bent en uw eigen cursus bestudeert, werkt u in de dunste streng van het corpus. [[ai-assisted-educational-research|AI-ondersteund onderwijsonderzoek]] stelt dit vast als een hiaat in plaats van een bevinding: AI-ondersteund praktijkonderzoek is plausibel wijdverbreid en bijna ongedocumenteerd, en het bewijs over reviewautomatisering en bibliometrie beslecht niet hoe een docent het eigen onderwijs zou moeten bestuderen.

Wat overdraagbaar is, is een reeks disposities:

Gebruik AI waar uw lokale setting niet de variabele is. De literatuur van uw vak doorzoeken, uw eigen opnamen transcriberen en samenvatten, en instrumenten of toestemmingsteksten opstellen, vallen daar allemaal onder.

Houd de interpretatieve stappen bij uzelf. Wat als thema telt, wat een opmerking van een student betekent en wat uw klasbewijs rechtvaardigt, zijn aan u om te bepalen, en het verslag moet zeggen welke stappen het model zette en welke u zette ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Bepaal uw criteria vooraf en houd ze zichtbaar. Een kleine lokale studie kan zich niet herstellen van een construct dat werd gedefinieerd nadat de data binnenkwamen.

Rapporteer de rol van de AI, de verificatie die u deed en de beperkingen van een ontwerp met één cursus en één onderzoeker. Een workflowverslag is geen werkzaamheidsresultaat.

Behandel het simuleren van een cohort als een gevorderde optie in plaats van een standaard. Gesimuleerde lerenden dekken doorgaans het gemakkelijkste kwadrant van echt studentgedrag en worden na gebruik zelden gevalideerd ([[simulating-students]]). Lees [[making-simulated-students-behave-like-learners]] voordat u het oordeel van een simulator vertrouwt.

## Wat onderzoekers hier verkeerd doen

Overeenstemming met een menselijke codeur betekent dat de codering juist is. Overeenstemming tussen mens en LLM was in de blinde studie 0,30 Jaccard tegen 0,52 voor mens-mens, en de blinde verificateur kon de twee coderingsbronnen niet onderscheiden bij 51,5% tegen 48,5%. Overeenstemming registreert dat twee lezers convergeerden, ook wanneer ze op dezelfde bias convergeerden.

Een referentiechecker vervangt het controleren van referenties. De 30 verzonnen referenties in de audit van Denny omvatten 17 hybrides waarbij de titel echt was en de auteurs niet, precies het geval dat een checker die op metadata is getraind het slechtst aankan, omdat de metadata juist het ding is dat fout is.

Een gunstige evaluatie maakt een workflow geschikt voor uw rol. Van 118 LLM-papers met alleen positieve resultaten rapporteerde 52% nog steeds een zorg dat de workflow onder de lat bleef die haar rol vereiste. Lees de diepte van de evaluatie tegen de taak die u haar geeft.

Promptvakmanschap is de belangrijkste hefboom op kwaliteit. De operationalisering van de rubriek weegt vaak zwaarder dan promptvakmanschap in overeenstemming tussen mens en machine, en de evaluatie met acht agenten rangschikte hetzelfde systeem als derde en als laatste, afhankelijk van wiens rubriek werd toegepast.

AI neemt werk uit het project. De casestudy van 115 dagen vond dat de gedelegeerde omvang groeide naarmate het geheugen van de agent zich opstapelde. Verificatie, beslissing en logging zijn de uren die daarmee groeien.

## Wat er op u afkomt

**„Mijn coauteur doet dit al en niemand heeft geklaagd.”** Dat niemand klaagt is geen bevinding over validiteit. De vraag naar openbaarmaking staat los van de kwaliteitsvraag, en het cijfer van 38,0% voor niet-geëvalueerde softwarepapers zegt dat de stilte in het veld wijdverbreid is.

**„Twee modellen waren het met elkaar eens, dus de codering ligt vast.”** Twee modellen die trainingsdata delen, delen hun fouten. De blinde verificateur in de studie van Liu gaf de voorkeur aan machinale codering bij 48,5%, en wat dat getal interpreteerbaar maakte, was een onafhankelijke rechter, niet de overeenstemming zelf.

**„We kunnen een model van een leverancier niet auditen, dus er valt niets te rapporteren.”** PRISMA-LLM vraagt om openbaarmaking van de implementatie als een niveau dat losstaat van de evaluatiediepte. Systeem, versie, prompts, wat mensen controleerden en waar het faalde, zijn allemaal rapporteerbaar voor een gesloten model.

**„De ethische commissie keurt dit nooit goed.”** Modeltoegang was eigendom van een leverancier in 84,1% van de onderzochte papers, wat betekent dat studenttekst doorgaans uw instelling verlaat. Verzamel alleen wat het onderwijsdoel nodig heeft, controleer of lerendendata de modellen van de leverancier trainen, en geef lokaal gegenereerde of synthetische data de voorkeur waar de gevoeligheid hoog is. [[equity-ethics-pedagogical-safety-research]] behandelt de verplichtingen volledig.

**„Dit zal langzamer gaan dan het met de hand doen.”** Voor een klein project is dat vaak zo. Het pleidooi ervoor berust op omvang bij schaal, en het pleidooi tegen overdrijving berust op hetzelfde verslag van 115 dagen.

## Wat u deze week kunt doen

**1.** Schrijf de takenlijst met een oordeel naast elk item, en zet die waar het hele team haar kan zien.

**2.** Voeg de beslissingsregels voor grensgevallen en het beslissingslog toe aan uw screeningprotocol voordat de volgende batch begint.

**3.** Kies één geautomatiseerde output waarop u al vertrouwt en valideer die tegen een menselijk oordeel op een steekproef die u nog niet hebt bekeken.

**4.** Lees het laatste manuscript dat u hebt ingediend en controleer elke auteursnaam in de referentielijst met de hand.

**5.** Voeg een regel „waar de AI faalde” toe aan uw methodesjabloon, zodat de gewoonte om te openbaren één keer is opgeschreven.

## Waar u verder kunt gaan

De begeleidende vragen zijn [[evaluating-ai-interventions-methods]] over hoe u een interventie meet, [[reporting-interpreting-aied-research]] over het rapporteren van het systeem en uw eigen AI-gebruik, en [[research-gaps-aied]] over waar de literatuur dun is. [[equity-ethics-pedagogical-safety-research]] behandelt studentdata, en [[ai-assisted-educational-research]] is de volledige conceptpagina achter deze.
