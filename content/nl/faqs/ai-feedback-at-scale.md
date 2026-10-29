---
title: "Hoe kan AI mij helpen betere feedback te geven op schaal?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T14:57:54-04:00"
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Het is week zes. U hebt een stapel concepten, een rubric waarin u gelooft, en een groeiend vermoeden dat een derde van uw commentaar wordt gescand en vergeten. Een collega noemt een hulpmiddel dat nu binnen het uur commentaar op elk concept geeft. De vakgroepvergadering wil een antwoord: is dit een verbetering, of een snellere manier om tekst te produceren die niemand leest?

Kort antwoord voor een collega: AI-feedback verdient haar plaats op dekking, tijdigheid en consistentie, binnen een smalle band. Taalwerk op het niveau van correctiewerk en rubricgestuurde eerste commentaarronde zijn het automatiseren waard. Bereik is het goedkope deel. In een cluster-gerandomiseerd experiment met 1.176 eerstejaarsstudenten versloegen reflectieve en hybride ontwerpen directe AI-kritiek op uitgestelde [[transfer-of-learning|transfer]] zonder AI. In een gerandomiseerd essay-experiment met 70 studenten leverde beter beoordeelde AI-feedback geen betere herzieningen op dan die van een ervaren docent. Wat een student met een opmerking doet, beslist de uitkomst, en [[feedback-literacy|feedbackgeletterdheid]] scheidt de studenten die ervan profiteren van degenen die kopiëren.

## De korte versie

**1.** Beslis wat als winst telt voordat u iets pilot, namelijk kwaliteit van herzieningen en uitgestelde prestaties zonder hulp, niet de vloeiendheid van het commentaar.

**2.** Sorteer uw eigen commentaar in correcties op taalniveau en oordelen op het niveau van beoordeling. Alleen de eerste categorie komt in aanmerking voor automatisering.

**3.** Zet de bronnen in fasen. Zelfevaluatie eerst, feedback van medestudenten tweede, AI-kritiek derde. Twee bronnen naast elkaar produceren passieve overname.

**4.** Geef het model uw rubric en laat het stap voor stap redeneren. Een kale instructie produceert generieke output.

**5.** Houd de definitieve boodschap, de toon en alles wat een dossier wordt bij een mens.

**6.** Begroot de uren die u aan schrappen en kalibreren besteedt, en vergelijk ze met de uren die u hebt vrijgemaakt.

## Beslis wat als winst telt voordat u iets pilot

De verleidelijke maatstaf is de kwaliteit van wat het model schrijft. Het is ook de maatstaf die misleidt.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] randomiseerden 70 studenten die in het Perzisch betogende essays schreven in drie groepen. Chain-of-thought-prompting produceerde significant hoger beoordeelde feedback (M = 12,90) dan zero-shot-prompting (M = 11,25, p = 0,01) en dan een ervaren menselijke docent (M = 11,20, p = 0,008). De chain-of-thought-groep herzag haar essays niet significant meer dan de groep met docentfeedback, die vergelijkbare winst behaalde. Betere opmerkingen, dezelfde herzieningen. Is uw succescriterium de kwaliteit van het commentaar, dan leest die studie als een winst. Is het wat er in het essay veranderde, dan niet.

Twee andere signalen flatteren een pilot die slecht loopt, dus zet ze vooraf vast. Tevredenheid van studenten is er één. In de universiteitsbrede pilot in Deakin die wordt gerapporteerd door [[tubino-adachi-ai-automated-feedback-literacy|Tubino en Adachi (2022)]] gingen positieve gemiddelde beoordelingen samen met door studenten gemelde fouten, dus een enquête met lachende gezichten is geen bewijs van nauwkeurigheid. Gebruik is het andere. Het hulpmiddel in Deakin was optioneel, en het gebruik lag gemiddeld op ongeveer 13% van de bachelorstudenten en 12% van de masterstudenten, terwijl bijna 4.000 studenten toegang hadden. Proactieve, sterk presterende studenten gebruikten het vaker. Dat is wat het beschikbaar stellen van een hulpmiddel oplevert.

De uitkomstmaat die standhoudt is kwaliteit van herzieningen plus uitgestelde prestaties zonder AI. Meerdere inleveringen op dezelfde dag zijn een bruikbaar spoor van de vraag of een student überhaupt iets deed. Ze zijn geen bewijs dat er iets is geleerd.

## Sorteer uw commentaar voordat u het automatiseert

Neem uw laatste set opmerkingen en deel ze in tweeën: correcties op zinnen, en oordelen over denken. Die splitsing vertelt u wat u kunt automatiseren, en ze is smaller dan leveranciers suggereren.

De pilot in Deakin liep in 2021 met de AI-tool voor geautomatiseerde feedback van FeedbackFruits in 29 vakken en met bijna 4.000 studenten. De tool werkt op tekstkenmerken op microniveau: zinslengte, interpunctie, grammatica, tekststructuur. Dat ondersteunt de fase van correctiewerk, waarin de docent de parameters instelt, de student het hulpmiddel zelfstandig gebruikt, en de feedback op tijd komt om bruikbaar te zijn. De taakverdeling is wat schaalbaar is, niet het model.

Commentaar op het niveau van oordeel is waar de faalwijzen zitten. [[learner-centered-feedback-ai|Aldino et al. (2026)]] verzamelden problemen aan de kant van docenten bij 21 docenten in het hoger onderwijs: inconsistente toon (n = 7), mogelijke onjuiste informatie (n = 5) en vertrouwensproblemen (n = 5). Hun herzieningsinspanning ging naar het schrappen van overdreven lof en generieke suggesties in plaats van naar het toevoegen van inhoud. Die lijst is uw reviewtaak, en daar gaan de uren naartoe.

## Zet de bronnen in fasen in plaats van ze te stapelen

Het sterkste ontwerpbewijs komt uit een multisite, cluster-gerandomiseerd, longitudinaal veldexperiment: 1.176 eerstejaarsstudenten in 48 groepen aan 4 universiteiten en in 3 [[stem-education|bèta]]domeinen, op groepsniveau gerandomiseerd naar condities met alleen medestudenten, directe GenAI, reflectieve GenAI en hybride ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

De reflectieve conditie vroeg zelfevaluatie vóór AI-kritiek. De hybride reeks liep van zelfevaluatie, dan feedback van medestudenten, dan GenAI-kritiek. Hybride leverde de grootste winst in argumentatiekwaliteit en het duidelijkste voordeel bij conceptueel leren. Reflectief en hybride leverden beide sterkere overname van feedback en meer [[self-regulated-learning|zelfgestuurd leren]] dan directe GenAI, en beide presteerden beter dan die conditie op uitgestelde transfer zonder AI. Directe GenAI verhoogde de onmiddellijke argumentatiekwaliteit wel boven die van feedback van medestudenten, dat is het voordeel ervan, en dat ging gepaard met zwakkere transfer.

Het mechanisme verklaart waarom de volgorde meer uitmaakt dan het hulpmiddel. Directe kritiek nodigt uit tot passieve overname: de student leest een oordeel en past het toe. Reflectieve en hybride ontwerpen dwingen de student de opmerking te interpreteren, tegen criteria te leggen, de relevantie te beoordelen en dan te herzien. Onderwijswaarde hangt minder af van toegang tot AI dan van de vraag of de feedbackomgeving [[agency|handelingsvermogen van de lerende]] en [[evaluative-judgment|evaluatief oordeel]] tijdens het herzien behoudt.

Feedback van medestudenten verdient haar eigen plaats in de reeks. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen en Yan (2026)]] lieten twee parallelle Engelse klassen (N = 118 eerstejaarsstudenten in China; GenAI n = 56, medestudenten n = 62) drie cycli van zelfbeoordeling doorlopen in één semester. GenAI-scaffolding verbeterde de feedbackgeletterdheid licht maar significant ten opzichte van peerreview door medestudenten (ANCOVA p = 0,049, ηp² = 0,03). Studenten in de GenAI-groep verfijnden prompts iteratief en verifieerden of betwistten onnauwkeurige output. Studenten in de peergroep kozen bronnen op sociale gemakkelijkheid en hun evaluatieve oordeel raakte vertekend door vriendschapsbias. Peerreview behield een eigen waarde voor publieksbewustzijn, en daarom stellen de auteurs meerfasige ontwerpen voor met anonieme feedback van medestudenten in plaats van vervanging.

Het voordeel van Gu et al. was klein, en zij lazen het als reëel maar niet op zichzelf transformerend. Scaffolding door de docent, promptrichtlijnen en werkbladen deden het ondersteunende werk.

## Geef het model een rubric en laat het dan zijn stappen tonen

Rubricgestuurde generatie is het automatiseerbare deel.

De kwaliteitswinst bij Farrokhnia et al. kwam van een chain-of-thought-prompt die het model door een stapsgewijze evaluatie tegen een argumentatierubric leidde, niet van een kale instructie om feedback te geven. Gu et al. gaven hun GenAI-groep ChatGPT-4o met vooraf getrainde rubrics en promptrichtlijnen, en dat maakte de output controleerbaar tegen vastgelegde criteria. In beide gevallen is de prompt waar uw criteria het systeem binnenkomen, en is het redeneerspoor wat u laat zien of het model ze heeft toegepast.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson en Yan (2025)]] maken promptkwaliteit het scharnier van het hele proces. Vage prompts leveren generieke, onbruikbare output, en gegenereerde opmerkingen kunnen verzonnen, vertekend of overlappend zijn, wat het evaluatieve oordeel teruglegt bij de lezer. Kalibratie is nog scherper. Bij Farrokhnia et al. hing de kwaliteit van GenAI-feedback significant samen met de sterkte van het eerste concept van een student, terwijl de kwaliteit van docentfeedback dat niet deed. De docent kalibreerde consistenter. Volume is schaalbaar. Kalibratie niet.

## Houd het laatste woord en het dossier bij een mens

[[becerra-aicofe-feedback-2026|Becerra, Palma en Cobos (2026)]] beschrijven AICoFE, dat drie afzonderlijk fijngetunede modellen (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) over rubricscores en kwalitatieve observaties laat lopen om onafhankelijk commentaar op het concept te produceren. De docent stelt daarna de definitieve boodschap samen door zinnen of alinea's te selecteren, met een legenda die laat zien welk model wat bijdroeg. Het model schrijft het concept. De docent levert, en het product wordt ondertekend door één persoon die het concept heeft gelezen.

Aldino et al. vinden hetzelfde patroon van ondersteunen en dan verifiëren in de gewone praktijk. De machine learning-component markeerde het vaakst „Voldoet aan het leerdoel” als ontbrekend (20 van de 21 docenten hadden het weggelaten; 16 accepteerden de markering) en „Relatie tussen student en docent” (14 hadden het weggelaten; 12 accepteerden). Docenten beslisten over elke suggestie op basis van professioneel oordeel, en dat is het punt van hen in de lus zetten.

Twaalf van de 21 docenten bij Aldino et al. maakten verdere herzieningen op zinsniveau, en het dominante patroon was het kalibreren van toon: lof afzwakken (f = 11), suggesties verwijderen (f = 9), aanmoediging verwijderen (f = 8). Herzieningen clusterden in de relationele dimensie, vooral de relatie tussen student en docent (f = 24). Ze beschermden authenticiteit en professionele stem, en dat werk laat zich niet automatiseren.

## Leer studenten de opmerking te lezen

Feedbackgeletterdheid is een voorwaarde, en ze is ongelijk verdeeld.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths en Lodge (2026)]] lieten 32 psychologiestudenten een essaytaak van 25 minuten uitvoeren met schermopname en onbeperkte toegang tot ChatGPT, en lieten hen de opname daarna terugkijken in een video-gestimuleerd interview. Feedbackgeletterdheid was de enige significante positieve voorspeller van het essaycijfer (β = 0,46, p = 0,017). Frequentie van GenAI-gebruik, [[trust|betrouwbaarheid van de bron]] en [[prior-knowledge|voorkennis]] voorspelden de prestatie niet, een punt dat [[feedback-futures-genai|Zhan, Wood, Carless en Yan (2026)]] ook maken in hun redactionele inleiding bij het themanummer. Minder dan een derde van de studenten vergeleek AI-output met een andere internetbron. De helft sprak van bewust vermijden van AI vanwege [[academic-integrity|academische integriteit]] of omdat ze het essay in hun eigen woorden wilden. De meesten vroegen om feedback op taakniveau, die slecht overdraagt naar andere taken.

De uitersten zijn zichtbaar in het paar IELTS-schrijvers dat Zhan et al. beschrijven. Een student met lage geletterdheid schreef een vage prompt, kreeg generieke feedback, vertrouwde die of kopieerde haar te veel over, en ging er oppervlakkig mee om. Een student met hoge geletterdheid schreef een criteriumgerichte prompt, ging in gesprek, controleerde bronnen en volgde herzieningen. Het verschil was instructie en gewoonte, niet toegang tot het hulpmiddel.

Zeg studenten rechtstreeks dat opmerkingen van een model verzonnen, vertekend of overlappend kunnen zijn, en dat de student de herziening bezit. Kader de output als een conceptoordeel dat beoordeeld moet worden in plaats van een antwoord dat gekopieerd moet worden. Vraag dan om de vergelijking, want minder dan een derde van de studenten maakt die uit zichzelf.

## Wat docenten hier verkeerd doen

Meer opmerkingen betekenen meer feedback. Opmerkingen zijn goedkoop te produceren en duur om te verwerken, en de beperking zit aan de kant van de student in de lus. De hoger beoordeelde AI-opmerkingen van Farrokhnia et al. leverden niet meer herziening op dan opmerkingen van de docent.

Een beter model lost de generieke output op. De fouten van de tool in Deakin waren scopefouten: kenmerken op zinsniveau, een smalle band van correctiewerk. Zhan et al. plaatsen de oplossing in de prompt, de rubric of de mens, niet in een groter model. Het paar IELTS-schrijvers is de demonstratie: hetzelfde hulpmiddel, andere gewoonten, andere resultaten.

Het beschikbaar stellen van het hulpmiddel is de interventie. Het gebruik lag op ongeveer 13% van de bachelorstudenten en 12% van de masterstudenten toen het hulpmiddel optioneel was. De rest van de ontwerpvraag is wat er gebeurt voor de andere 87%.

De tijdwinst is automatisch. Gevraagd wat de AI-feedbacktool hun opleverde, noemden 21 docenten tijdwinst slechts zelden (n = 2). Ze noemden reflectie (n = 14), verbeterde taal en structuur (n = 11) en het identificeren van ontbrekende componenten (n = 10) veel vaker. Bewerken (f = 32) en verwijderen (f = 27) domineerden hun herzieningswerk, met toevoegen zeldzaam (f = 8). Wat verschijnt is een concept en een diagnostische prompt. Wat ook verschijnt is review-, kalibratie- en verificatiewerk. [[ai-save-instructor-time|De werklastvraag]] is degene die het vaakst wordt weggemoffeld, en GenAI herverdeelt het werk van docenten in plaats van het weg te nemen.

Tevredenheidscijfers vertellen u dat de opmerkingen nauwkeurig zijn. In de pilot in Deakin gingen positieve gemiddelde beoordelingen samen met door studenten gemelde fouten. Neem een steekproef van de output naast uw eigen lezing van dezelfde concepten en noteer waar het model generiek, fout of vleiend was.

## Wat er op u afkomt

**„AI-feedback is niet persoonlijk.”** Vaak waar, en het is de reden om het laatste woord bij een mens te houden. AICoFE bestaat omdat generiek modelproza niet is wat een student zou moeten ontvangen: de docent selecteert, bewerkt en ondertekent de definitieve boodschap. De 21 docenten bij Aldino et al. herschreven de toon om dezelfde reden. Personalisering is in dit ontwerp uw taak, en het model doet het voorbereidende werk.

**„Mijn studenten lezen feedback toch niet.”** Ze lezen minder dan we hopen, en het bewijs zegt dat de oplossing in het ontwerp zit en niet in het volume. De overname in de pilot in Deakin lag op ongeveer 13% en 12%. De hoger beoordeelde opmerkingen van Farrokhnia et al. leverden geen extra herziening op. Wat het verschil maakte, was een volgorde die betrokkenheid afdwingt, zelfevaluatie en dan feedback van medestudenten en dan AI-kritiek, plus drie herzieningscycli in een semester die meetbare verschillen in feedbackgeletterdheid opleverden.

**„Hier betalen studenten niet voor.”** Zorg er dan voor dat de AI niet de enige stem wordt die ze van u horen. De verdedigbare versie geeft studenten meer feedbackmomenten terwijl u uw uren besteedt aan de oordeelsintensieve delen: het laatste woord, de kalibratie, de opmerkingen die uw gezag dragen. Wat studenten bij slordige invoering verliezen is de samenhang tussen criteria, opmerkingen en uitkomst. Specificeer de complementariteit via fasering, vergelijking, bewerken en bestuur, en de tegenwerping verliest haar kracht. Laat twee bronnen naast elkaar staan en dat gebeurt niet.

**„Ik heb geen tijd om alles te reviewen wat het model schrijft.”** Review dan niet alles. Automatiseer de band waarin fouten goedkoop te vangen zijn, taalwerk op zinsniveau, en neem een steekproef van de output op oordeelsniveau naast concepten die u al hebt beoordeeld. De cijfers van Aldino vertellen u waar u moet kijken: toon, onjuiste informatie, overdreven lof, overlap.

## Wat u deze week kunt doen

**1.** Sorteer uw eigen laatste set opmerkingen in correcties op taalniveau en oordelen op beoordelingsniveau, en tel elke stapel.

**2.** Schrijf de rubricgestuurde, stapsgewijze prompt die u een model zou geven, en test die tegen drie concepten die u al hebt beoordeeld.

**3.** Neem een steekproef van de output naast uw eigen opmerkingen en noteer waar het model generiek, fout of vleiend was.

**4.** Zet één opdracht in fasen als zelfevaluatie, dan feedback van medestudenten, dan AI-kritiek, en zeg studenten dat de AI een conceptoordeel is dat ze geacht worden te betwisten.

**5.** Vraag om één vergelijking met een tweede bron of met de criteria, want minder dan een derde van de studenten doet dit uit zichzelf.

**6.** Noteer hoeveel van de definitieve feedback van het model kwam en hoeveel u hebt veranderd. De curatiegegevens van AICoFE zijn het model voor dat dossier.

**7.** Let op de splitsing tussen experts en beginners. Docenten met meer dan vijf jaar ervaring rapporteerden meer problemen met de output van de tool dan minder ervaren collega's, die de scaffolding waardeerden. Als uw ervaren collega's meer fouten zien dan u, is dat informatie over uw eigen kalibratie.

## Waar u verder kunt gaan

[[feedback]] is het overkoepelende concept voor het hele systeem: aanbod, lus, overname en beoordelingscontext. [[ai-feedback-quality|Kwaliteit van AI-feedback]] behandelt wat gegenereerde opmerkingen nauwkeurig, nuttig, tijdig en pedagogisch verantwoord maakt, en deze pagina is het praktische midden, over welke combinaties van die delen op schaal betere feedback opleveren.

Vragen over wat een cijfer moet betekenen zodra AI in het spel is, inclusief vervanging van het construct, geauthenticeerd procesbewijs en integriteitsregels, horen bij [[redesign-assessment-ai-era|het herontwerpen van beoordeling in het AI-tijdperk]] en [[assessment-validity|validiteit van beoordeling]] en niet hier. Zie voor het bijzondere geval van schrijfonderwijs [[writing-instruction-ai-best-practices|best practices voor schrijfonderwijs in de context van AI]].
