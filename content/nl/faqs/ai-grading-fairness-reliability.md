---
title: "Kan ik AI gebruiken om het werk van studenten eerlijk en betrouwbaar te beoordelen?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

U hebt een rubric waar u in gelooft, meer inleveringen dan uren, en een hulpmiddel dat een score plus een paar zelfverzekerde alinea's teruggeeft in de tijd die het kost om één essay te lezen. U probeert het op werk dat u al hebt beoordeeld. De helft van de scores lijkt te kloppen. Eén is vreemd ruim, één vreemd streng, en u kunt nog niet zeggen of dat aan het hulpmiddel ligt of aan het essay.

Kort antwoord voor een collega: AI-beoordeling verdient een plaats als gecontroleerde assistent of als tweede lezer, bij taken waarop u ze hebt gecontroleerd tegen werk dat u al hebt nagekeken. Overeenstemming draagt niet over van het ene beoordelingstype naar het andere. In een farmacie-examen met zestien studenten vonden [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] bijna perfecte overeenstemming bij objectieve itemtypes en onbetrouwbare overeenstemming bij open vragen. In drie Engelse universiteiten vond [[opraise-automated-marking-ai-assessment-2026|het OpRaise-project]] dat AI en menselijke beoordelaars het tussen 35% en 65% van de tijd eens waren over de graadband, afhankelijk van de instelling, met cijfers die naar het midden werden samengedrukt. Een vloeiende rechtvaardiging is geen bewijs dat uw criteria zijn toegepast. Of het resultaat [[assessment-validity|geldig is voor uw beslissing]] is een lokale vraag die u zelf moet beantwoorden, en [[human-in-the-loop-ai|een mens blijft verantwoordelijk]] voor alles wat een geregistreerd cijfer wordt.

## De korte versie

**1.** Benoem de rol voordat u iets uitvoert: feedbackassistent, tweede lezer of primaire beoordelaar. Ze vragen een verschillende hoeveelheid bewijs.

**2.** Begin met de rol met de minste gevolgen die uw echte probleem oplost. Als een deterministische antwoordsleutel volstaat, voegt een LLM risico toe in plaats van waarde.

**3.** Kalibreer op werk dat u al hebt beoordeeld, inclusief sterke, zwakke, grensgeval- en ongebruikelijk opgebouwde inleveringen. Gemakkelijke voorbeelden bewijzen niets.

**4.** Houd de kalibratieset en de testset gescheiden, anders meet u hoe goed u het hulpmiddel hebt afgestemd op bekende essays.

**5.** Rapporteer exacte overeenstemming, scoreverschillen en de richting van de vertekening, geen correlatie. Controleer vooral de slaag- en zakgrenzen.

**6.** Vertel studenten welke rol het hulpmiddel speelt, wie het cijfer bepaalt en hoe ze om herziening kunnen vragen.

## Bepaal wat de AI mag doen

Drie regelingen worden „AI-beoordeling” genoemd en ze brengen verschillende verplichtingen met zich mee.

Een **feedbackassistent** schrijft conceptcommentaar of markeert mogelijke omissies die u kunt accepteren, herschrijven of weggooien. Het risico blijft beperkt tot de kwaliteit van het commentaar, en u leest alles voordat het een student bereikt. Een **tweede lezer** stelt criteriumscores voor of markeert meningsverschillen om uw eigen beoordeling te structureren. De fouten moeten nuttig zijn, niet louter fout: een markering die u terugstuurt naar een inlevering die u achteloos zou hebben nagekeken, is de moeite waard. Een **primaire beoordelaar** produceert scores die geregistreerde cijfers worden. Dat is de regeling die het bewijs in deze kennisbank niet ondersteunt, behalve in smalle, lokaal gevalideerde gevallen.

Kies de laagste trede die uw werkelijke beperking aanpakt. Als uw beoordelingslast voortkomt uit het controleren van een vaste antwoordsleutel, is gewone deterministische scoring transparanter en beter controleerbaar dan een taalmodel, en de farmaciestudie suggereert dat het voordeel van het LLM bij objectieve items deels een artefact was van het tijdens de beoordeling krijgen van de juiste antwoorden. Bewaar het model voor werk dat interpretatie vraagt, en controleer die interpretatie dan.

[[automated-assessment|Geautomatiseerde beoordeling]] omvat de bredere machinerie van scoring, moderatie en feedbackgeneratie. Deze pagina gaat over de oordeelsvraag eronder.

## Wat het bewijs werkelijk laat zien

Overeenstemming hangt af van het itemtype. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] beoordeelden een farmacie-examen met gemengde formats dat door 16 studenten was gemaakt en rapporteerden concordantie met de beoordeling door docenten tussen 0,935 en 1,000 voor multiplechoice, select-all-that-apply en invulvragen. Overeenstemming bij subjectieve open vragen was onbetrouwbaar. Twee details wegen zwaarder dan de kop. De juiste antwoorden werden tijdens de beoordeling verstrekt, wat de resultaten bij objectieve items flattert, en het toevoegen van een rubric verbeterde de overeenstemming niet consistent, wat de gangbare veronderstelling ondermijnt dat een goede rubric een LLM in een consistente beoordelaar verandert. Zestien studenten kunnen geen claim over uw vak dragen. De variatie binnen één examen is de overdraagbare bevinding: een systeem dat uw multiplechoicegedeelte aankan, zegt niets over uw essays.

Bandovereenstemming is matig en ongelijk. [[opraise-automated-marking-ai-assessment-2026|Het OpRaise-rapport]] onderzocht authentieke essays van bachelorstudenten psychologie en vond overeenstemming tussen AI en menselijke beoordelaars over de Britse graadband van 63% in Cambridge, 53% in Nottingham en 35% aan Manchester Metropolitan. De cijfers werden naar het midden samengedrukt, waarbij de staarten het minst nauwkeurig werden beoordeeld: een essay dat een mens 75 gaf, kreeg van elk AI-systeem meerdere punten lager, en een essay met een 50 meerdere punten hoger. Die samendrukking is de faalwijze om op te letten, want ze treft precies de studenten boven en onder in uw verdeling, terwijl het midden er goed uitziet. Dit is een projectrapport en geen peer-reviewed trial, en het is de nuttigste waarschuwing in de bewijsbasis.

Uw eigen cijfers zijn een onvolmaakte referentie. Docenten zijn het onderling oneens, en uw eerdere score op een vergelijkbaar essay is een oordeel, geen grondwaarheid. Overeenstemming met één beoordelaar stelt consistentie met die beoordelaar vast, wat niet hetzelfde is als eerlijkheid. Waar de belangen dat rechtvaardigen, gebruikt u een tweede bekwame lezer om moeilijke gevallen te beslechten, en behandelt u een meningsverschil tussen de AI en een menselijke beoordelaar als een aansporing om het werk opnieuw te lezen, niet als een uitspraak over wie gelijk heeft.

Consistentie en degelijk oordeel lopen uiteen. Een model kan bij een herhaling bijna identieke scores teruggeven terwijl het uw criteria slecht toepast, omdat herhaalbaarheid stabiliteit meet, niet validiteit. De staarten van OpRaise laten het patroon zien: het systeem was stabiel en fout over de essays die er het meest toe deden.

## Valideer de procedure voordat ze een cijfer raakt

Werk dit door op eerder beoordeelde, passend beschermde inleveringen die de antwoorden bestrijken die u werkelijk ontvangt: sterk, zwak, grensgeval, onvolledig, ongebruikelijk opgebouwd, en juiste antwoorden in een onbekende formulering.

**1. Specificeer criteria en eis bewijs.** Geef de opdracht, de rubric, de scoringsregels en voorbeelden van hoe legitieme alternatieve antwoorden punten verdienen. Vraag om beknopte rechtvaardigingen op criteriumniveau, gekoppeld aan aanwijsbare passages. Controleer die rechtvaardigingen dan zelf tegen de inlevering.

**2. Scheid kalibratie van evaluatie.** Stem af op de ene set, test op een andere. Zonder die splitsing kunt u een gevalideerde procedure niet onderscheiden van een goed passend model.

**3. Meet de beslissingen die ertoe doen.** Registreer exacte overeenstemming, de grootte en richting van scoreverschillen, en of het model systematisch hogere of lagere cijfers geeft. Onderzoek slaag- en zakgrenzen en andere gevolgenrijke grenzen apart. Een hoge correlatie kan op een systematische verschuiving rusten.

**4. Test herhaalbaarheid en gedrag per subgroep.** Herhaal een subset onder identieke instellingen. Zoek naar fouten op criteriumniveau en naar taal, opmaak of legitieme stijl die voor zwakker begrip wordt aangezien. Kleine subgroepaantallen ondersteunen voorzichtigheid, geen eerlijkheidsclaim.

**5. Schrijf de escalatieregel.** Bepaal welke gevallen altijd menselijke beoordeling krijgen en hoe meningsverschillen worden beslecht. Laat de door het model opgegeven zekerheid niet beslissen; zekerheid moet tegen waargenomen fouten worden gevalideerd voordat ze gewicht kan dragen.

**6. Bescherm de workflow.** Gebruik een goedgekeurde omgeving, minimaliseer identificerende informatie en houd rubric en instructies gescheiden van ingeleverde inhoud. Die scheiding maakt manipulatie moeilijker te verbergen. Ze maakt haar niet onmogelijk.

**7. Leg vast wat de controle zou ontkrachten.** Bewaar het model en de versie, de prompt, de rubric en de instellingen. Een modelupdate of een rubricherziening is een reden om de representatieve controles te herhalen in plaats van continuïteit aan te nemen.

## Maak de regeling zichtbaar voor studenten

Studenten hebben er recht op te weten welke rol het hulpmiddel speelt, wie beslist en hoe ze een resultaat kunnen aanvechten. Vage openbaarmaking wekt wantrouwen; specificiteit levert een werkbare relatie op. Zoiets als: „Een goedgekeurd AI-hulpmiddel kan conceptcommentaar op rubricniveau bij uw concept schrijven. Ik lees elk commentaar na en bepaal uw cijfer. Neem contact met mij op als een commentaar uw werk verkeerd voorstelt.” Maak dat dan ook waar.

Twee faalrichtingen vragen aparte aandacht. Buitensporige aftrek is wat studenten melden, en het domineert de bezwaren. Onverdiende punten zijn de richting die onbesproken blijft en het dossier stilletjes corrumpeert. Neem steekproeven voor beide, en reken uw verificatie-uren mee wanneer u beoordeelt of de workflow u iets heeft opgeleverd.

## Wat er op u afkomt

**„Mensen zijn ook vertekend.”** Dat zijn ze, en daarom heeft de vergelijking expliciete criteria nodig in plaats van de score van één beoordelaar als standaard. De institutionele spreiding van OpRaise is hier het argument: als menselijke beoordelaars aan drie universiteiten met dezelfde systemen zulke verschillende bandovereenstemming produceerden, dan is de menselijke referentie deel van wat gespecificeerd moet worden, geen vaste meetlat.

**„De rubric maakt het objectief.”** Een rubric maakt verwachtingen expliciet. Ze toepassen blijft interpretatie, en de farmaciestudie vond dat het verstrekken van een rubric de overeenstemming niet consistent verbeterde. Wat de rubric u oplevert, is een controleerbare standaard voor de rechtvaardigingen, geen garantie voor de scores.

**„Dan zou ik alles moeten controleren, wat het doel tenietdoet.”** Voor sommige taken is dat de juiste conclusie, en dan is het antwoord: verklein de taak. Commentaar opstellen vanuit uw eigen scoringsnotities laat het oordeel bij u en haalt het typen weg. Markeringen als tweede lezer bij grensgevallen concentreren uw aandacht waar ze een uitkomst verandert.

**„Mijn collega heeft het geprobeerd en het werkte goed.”** Vraag wat die heeft gemeten. Positieve beoordelingen bestaan in deze literatuur routinematig naast fouten, en een collega die een paar redelijke outputs heeft gelezen, heeft een demonstratie uitgevoerd, geen validatie. De vraag is wat hun procedure zou doen met de essays die u het laatst zou opmerken.

## Wat u deze week kunt doen

**1.** Kies één beoordeling en schrijf de ene rol op die de AI zou spelen. Schrijf op welk bewijs u een trede hoger zou laten gaan.

**2.** Voer het uit op vijf inleveringen die u al hebt beoordeeld, gekozen om een sterke, een zwakke, een grensgeval en een met een ongebruikelijke maar legitieme structuur te bevatten.

**3.** Log elk meningsverschil met het werk en het criterium, en benoem de fouten die u onacceptabel zou vinden in plaats van louter fout.

**4.** Test of scoreverschillen in een consistente richting lopen, en controleer uw slaag- en zakgrens apart.

**5.** Schrijf de alinea voor studenten en de route naar herziening, en vergelijk uw verificatietijd met de beoordelingstijd die u hebt vermeden.

## Waar u verder kunt gaan

[[assessment-validity|Validiteit van beoordeling]] is het concept dat deze vragen beslist: of het bewijs de gevolgtrekking ondersteunt die u wilt maken. [[automated-assessment]] behandelt de technologie en haar gemeten prestatie over formats, en [[ai-feedback-at-scale]] pakt het aangrenzende probleem aan van gegenereerd commentaar en of studenten er iets mee doen.

Voor wat een cijfer zou moeten vertegenwoordigen zodra studenten AI gebruiken, inclusief vervanging van het construct en geauthenticeerd procesbewijs, zie [[redesign-assessment-ai-era|het herontwerpen van beoordeling in het AI-tijdperk]]. Voor de vraag of detectie een verdedigbaar taakontwerp kan vervangen, zie [[should-we-use-ai-detectors|of u AI-detectoren moet gebruiken]]. Voor de evaluatievraag onder alles, zie [[checking-whether-educational-ai-works|controleren of een educatieve AI werkt]].
