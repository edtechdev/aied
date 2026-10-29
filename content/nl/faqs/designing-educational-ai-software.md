---
title: "Wat zijn best practices en tips voor het ontwerpen van doeltreffende educatieve AI-software?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T14:57:54-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Uw team heeft een werkende prototypetutor en over drie weken een demo voor een schoolbestuur. Of een partnerschool heeft u gevraagd een chatinterface op haar cursuslezer te zetten, en iemand zegt dat het een klus van twee weken is. Of een inkoopreviewer heeft de veiligheidssectie teruggestuurd met één regel: wat hebt u precies getest?

Het antwoord is smaller dan de meeste productspecificaties veronderstellen. Educatieve AI werkt als een begrensde deskundige onder menselijk toezicht: vermogen beperkt tot een afgebakend domein, gegrond in door de docent goedgekeurde inhoud in plaats van in modelgeheugen, medeontworpen met de docenten en lerenden die haar gebruiken, geëvalueerd op aanhoudende interactie over meerdere beurten. Die laatste clausule is degene die de meeste teams overslaan. Pedagogische schade verscheen in elk model dat in de onderstaande benchmark werd getest, en de faalpercentages stegen van 17,7% bij interacties van één beurt naar 77,8% in gesprekken over meerdere beurten.

## De korte versie

**1.** Schrijf op wat het systeem beslist en wat een docent beslist. Die grens wordt de architectuur.

**2.** Evalueer interactie over meerdere beurten, met aandacht voor de discipline, tegen een echt curriculum, niet losse prompts tegen een algemene veiligheidsrubriek.

**3.** Grond antwoorden in goedgekeurde inhoud, en houd de verifiërende component gescheiden van de conversationele.

**4.** Behandel elke inzending van een student als niet-vertrouwde invoer, ook wanneer het systeem die beoordeelt.

**5.** Bouw de pogingsdrempel, het escalatiepad en de override door de docent voordat de pilot begint.

**6.** Zet toegankelijkheid en uitgesplitste rechtvaardigheidstoetsing in de specificatie in plaats van in de backlog.

## Bepaal wat het systeem mag zijn

[[reichert-human-centered-llm-chatbot-design-teachers-2026|De participatieve ontwerpstudie van Reichert en collega's]] met zes docenten uit het voortgezet onderwijs corrigeert de aanname dat educatieve AI een autonome agent zou moeten zijn. Gevraagd om op papier [[conversational-ai|chatbots]] voor de klas te prototypen, beschreef elke docent een begrensde deskundige langs twee dimensies. Autoriteitsgrenzen hielden docenten in controle, omdat verantwoordelijkheid voor het leren en de veiligheid van studenten niet kan worden gedelegeerd. Expertisegrenzen weerspiegelden het gebrek aan contextuele kennis van de AI over individuele studenten, klassendynamiek en institutionele normen.

De architectuur die zij schetsten had vier componenten (afbakening van inhoud, presentatie van inhoud, aanpassing aan de student, [[teacher-role|toezicht door de docent]]) op drie beschermende lagen: domeingrenzen die de reikwijdte beperken, inhoudsfiltering die veilige [[personalized-learning|personalisering]] mogelijk maakt, en override door de docent voor dubbelzinnige gevallen. Delegatie was selectief. Geprojecteerd op Gagné's negen gebeurtenissen van instructie verwelkomden docenten AI voor het presenteren van inhoud, het aanleveren van oefenopgaven en het geven van [[formative-assessment|formatieve]] [[feedback]], en weigerden ze die voor het vaststellen van doelen of het afnemen van [[summative-assessment|summatieve]] [[assessment|toetsing]].

Twee standaardinstellingen horen in dezelfde specificatie: lijn het systeem uit op expliciete leerdoelen, en stem het af op vriendelijke maar correcte antwoorden in plaats van op instemming met wie er ook typt. Een tutor die een fout antwoord vleit, heeft de student geleerd dat het antwoord juist was.

Eén detail is nu goedkoop en later duur: deze docenten wilden gedragstransparantie, zichtbare grenzen en signalen van onzekerheid, meer dan uitleg over de redenering van het model. Alle zes vroegen om volledige gesprekslogging, realtime meldingen en de mogelijkheid tot override, gekaderd als professionele verantwoordelijkheid in plaats van wantrouwen. Ontwerp dat in de eerste sprint, want logging achteraf inbouwen in een tutor die onzichtbaar moest aanvoelen, is een herschrijving.

## Test het in gesprek, niet in één beurt

De synthese over [[pedagogical-safety|pedagogische veiligheid]] betoogt dat conventionele veiligheidstests onvoldoende zijn voor onderwijs. Een systeem kan toxische inhoud vermijden en toch schade veroorzaken door antwoorden te vroeg weg te geven, [[misconceptions|misvattingen]] te versterken, reflectie te onderdrukken, afhankelijkheid te bevorderen of van instructiedoelen af te drijven.

De [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]]-[[benchmark]] zet daar cijfers bij. Over elk getest model, van open-weight modellen met 3,8B parameters tot GPT-5-mini, was [[pedagogy|pedagogische]] schade universeel, verbeterde schaal de veiligheid niet betrouwbaar, en escaleerden de faalpercentages van 17,7% bij interacties van één beurt naar 77,8% in gesprekken over meerdere beurten. De schendingspatronen verschilden per vak. De taxonomie met 11 dimensies en 48 subrisico's bestrijkt cognitieve, epistemische, [[metacognition|metacognitieve]], [[motivation|motivationeel-affectieve]], ontwikkelings- en rechtvaardigheidscategorieën en categorieën van instructieve aansluiting, en ze werkt als ontwerpchecklist én als testset.

Lees het escalatiecijfer als een uitspraak over uw testplan. Een tutor die duizend probes van één beurt doorstaat, kan vier van de vijf gesprekken falen zodra een student tegensputtert of een derde keer vraagt. Bouw de testomgeving voor meerdere beurten voordat de demo er is.

## Grond de inhoud en scheid de verificateur

Gronden is een architectuurbeslissing. [[eduguard-safe-rag-llm-tutor|EduGuard]], een veilige [[rag|retrieval-augmented]] tutor voor [[cs-education|inleidend programmeren]], koppelt door de docent goedgekeurde cursusretrieval aan een architectonisch gescheiden claimverificateur, expliciete controle op [[cognitive-offloading|overmatige afhankelijkheid]], en een door de docent geschreven benchmark van 600 queries over misvattingen, debuggen, queries met gemengde talen en adversariële prompts die rechtstreeks om antwoorden vragen. Het verbeterde op GPT-4o-mini en op Llama [[socratic-method|socratische]] tutorbaselines.

Het overdraagbare deel is de scheiding: de componenten die verifiëren, converseren niet, en de benchmark bevat prompts die zijn geschreven om antwoorden te ontlokken in plaats van om beleefdheid te controleren. [[hallucination-risk|Hallucinatierisico]] bestrijkt het faalmechanisme dat goedgekeurde retrieval hoort te begrenzen.

## Behandel studentwerk als niet-vertrouwde invoer

Het dreigingsmodel dat de meeste ontwerpadviezen weglaten, zit in het artefact dat wordt beoordeeld. [[humble-prompt-injection-ai-grading-red-team-2026|Humble's (2026) adversariële red-teamevaluatie]] testte of studenten een op een LLM gebaseerde beoordelaar konden manipuleren via promptinjectie in hun inzendingen, en de manipulatie werkte: injecties die de beoordelaar instrueren, herkaderen of een rol laten spelen, verschuiven de score zonder het werk te veranderen.

Houd de rubriek en de instructies buiten het contextvenster dat de student beheerst, strip of markeer instructieachtige inhoud, laat een inzending nooit haar eigen criteria vaststellen, en houd een menselijke beslissing op elk cijfer met gevolgen. Een beoordelaar die zijn instructies leest uit de tekst die hij beoordeelt, heeft de rubriek aan de kandidaat gegeven.

## Scaffold het werk in plaats van het te voltooien

Een systeem dat antwoordt, beëindigt het denken waarvoor het is gekocht. Twee dingen horen in de ticket: een pogingsdrempel, zodat er geen output verschijnt voordat de student iets vastlegt, en een [[human-in-the-loop-ai|menselijk escalatiepad]] met een genoemde bestemming, wat voor een klasproduct de docent betekent, in een vorm waar een docent iets mee kan. [[scaffolding]] en het [[socratic-method|socratische]] patroon zijn de productversies van wat een lesplan met de hand doet; [[developing-ai-tutor]] behandelt diagnose, hintladders en feedback in detail.

## Zet toegankelijkheid en rechtvaardigheid in de specificatie

Toegankelijkheidseisen zijn concreet genoeg voor een sprint: bedienbaarheid met het toetsenbord, compatibiliteit met schermlezers, ondertiteling en transcripten, passend contrast, bruikbare tekstalternatieven en compatibiliteit met ondersteunende [[ai-technologies|technologieën]]. Door AI gegenereerde toegankelijkheidsfuncties hebben nog steeds kwaliteitscontrole nodig. Zie [[accessibility]].

Rechtvaardigheidstoetsing moet de hele pijplijn onderzoeken en gedrag uitsplitsen naar taal, beperking, cultuur en andere relevante kenmerken van lerenden, in plaats van te vertrouwen op gemiddelde nauwkeurigheid. Een systeem dat gemiddeld goed scoort en voor één groep slecht, heeft het falen bij die groep afgeleverd. Zie [[bias-mitigation]] en [[equity-in-ai-education|Rechtvaardigheid]].

## Ontwerp met de mensen die het gaan gebruiken

[[ko-hughes-vsd-student-centered-its-2026|Ko en Hughes]] pasten waardegevoelig ontwerp toe op een [[intelligent-tutoring|intelligent tutoring systeem]] met studenten en docenten van een community college, een groep die historisch buiten het ontwerp van leerplatforms is gehouden. Ze vonden waardespanningen om te beheren in plaats van op te lossen: transparantie tegenover interpreteerbaarheid, [[privacy]] tegenover instructief inzicht, en [[agency|agency van de student]] tegenover door het systeem geleide [[scaffolding]]. Studenten verkozen collaboratieve, vermenselijkte uitleg boven ruwe modeltransparantie, en het prototype codeerde 16 waardegerichte functies over [[explainable-ai]], human-in-the-loop en privacycontroles.

[[wang-teacher-ai-co-design-review-2026|De review van Wang, Liu en Islam]] over 28 empirische studies voegt een vocabulaire toe om tools te kiezen. [[generative-ai|Generatieve AI]] wordt vooral gebruikt voor lesvoorbereiding, het genereren van prompts en creatieve ideevorming, waarbij AI veel vaker optreedt als assistent of inhoudsgenerator dan als medeontwerper, met vier affordances, efficiëntie, responsiviteit, [[creativity|creativiteit]] en [[equity-in-ai-education|rechtvaardigheid]], die docenten kunnen gebruiken om te beoordelen welke tool bij welk ontwerpprobleem past.

Beide studies behandelen ontwerp als [[human-in-the-loop-ai|human-in-the-loop]] [[human-ai-collaboration|samenwerking]] en als [[usability-research|bruikbaarheidsonderzoek]] in plaats van als voorlichting. Beide vonden dat belanghebbenden eisen naar boven brachten die geen enkele nauwkeurigheidsbenchmark zou vangen, wat het praktische argument is om voor die sessies te betalen: de eisen waaraan u anders in de pilot zou moeten voldoen.

## Wat ontwerpteams verkeerd doen

Veiligheid betekent inhoudsmoderatie. Schade in een educatief product komt vaak aan als een behulpzaam antwoord op het verkeerde moment. SafeTutors vond pedagogische schade in elk getest model en een falen dat opliep tot 77,8% over een gesprek, wat geen categorie is die inhoudsfilters zijn gebouwd om te zien.

Een groter model lost de pedagogiek op. Schaal verbeterde de veiligheid niet betrouwbaar over het bereik van open-weight modellen met 3,8B parameters tot GPT-5-mini.

Een goede retrievalindex betekent dat de inhoud geregeld is. EduGuard koppelt retrieval aan een aparte verificateur en test adversariële prompts die rechtstreeks om antwoorden vragen, omdat gegronde retrieval nog steeds een pad naar te veel onthulling overlaat.

De docent is het vangnet. Alle zes docenten in de ontwerpstudie vroegen om logging, meldingen en override als voorwaarde van professionele verantwoordelijkheid. Een supportticket is geen override.

Toegankelijkheid is een latere ticket. Ze staat in de specificatie of ze wordt een herschrijving, en gegenereerde alt-tekst en ondertiteling hebben nog steeds een menselijke controle nodig.

## Wat er op u afkomt

**„We kunnen geen evaluatieomgeving bouwen voor de lancering.”** Bouw een kleine. De eerste claim die u nodig hebt, is wat er over vijf beurten gebeurt. Neem 40 echte curriculumvragen, voer elk uit als een gesprek van vijf beurten met een student die de hint weerstaat, en scoor tegen de 11 dimensies. Dat is een verdedigbare veiligheidssectie en het past in een sprint.

**„Docenten willen prompts bewerken, en we kunnen niet garanderen wat zij schrijven.”** Beperk dan het oppervlak dat ze bewerken. De systeemprompt blijft van u; doelen, goedgekeurde inhoud, de hintladder en het escalatiecontact zijn van hen. De architectuur van de begrensde deskundige bestaat zodat de configuratie binnen een bereik blijft dat u kunt testen.

**„Onze benchmarkscores zijn hoog.”** Nauwkeurigheid op antwoorden van één beurt voorspelt geen gedrag over een gesprek, en de benchmark die het tweede meet, vond 77,8% falen in settings met meerdere beurten over elk model dat hij testte. Rapporteer beide getallen, of het eerste wordt gelezen als het tweede.

**„Volledige logging is een privacyprobleem.”** Dat is het, wat vraagt om doelbinding in plaats van afwezigheid. Log wat een docent nodig heeft om te handelen, minimaliseer de rest, beperk de toegang, en zeg in het product wat wordt bewaard en hoe lang.

## Wat u deze week kunt doen

**1.** Schrijf de autoriteitsgrens op één pagina: wat het systeem beslist, wat de docent beslist, en wat u in een inkoopreview zou verdedigen.

**2.** Zet de taxonomie met 11 dimensies om in een testplan en voer dat uit over meerdere beurten op 40 echte vragen uit één cursus.

**3.** Scheid de verificateur van de generator in het ontwerpdocument, ook als de eerste build ze in één proces draait.

**4.** Voeg de pogingsdrempel, de escalatiebestemming en de override door de docent toe aan de wachtrij, met namen erbij.

**5.** Zet de toegankelijkheidslijst en één uitsplitsingseis in de acceptatiecriteria van deze release.

## Waar u verder kunt gaan

[[developing-ai-tutor]] behandelt de bouw, en [[designing-ai-into-learning]] behandelt de pedagogische standaardinstellingen eromheen. Voor de vraag of het ding werkt zodra het is uitgerold, zie [[checking-whether-educational-ai-works]]; voor de veiligheidsconcepten achter het testplan, [[pedagogical-safety]] en [[hallucination-risk]]; voor de inkoopcontext, [[legal-issues-and-risks]].
