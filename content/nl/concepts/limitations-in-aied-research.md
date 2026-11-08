---
title: "Beperkingen in AIED-onderzoek"
created: "2026-08-15T09:18:04-04:00"
type: concept
foundations: [ai-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, educational-measurement]
research_method: [literature review]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, research-methods-aied]
updated: "2026-11-08T07:16:46-05:00"
translation_of: "concepts/limitations-in-aied-research"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

> **Beperkingen in AIED-onderzoek** — de terugkerende zwakheden en beperkingen die bepalen hoeveel vertrouwen we in bevindingen over AI in het onderwijs kunnen stellen, en hoe lezers ze moeten interpreteren. Ze snijden dwars door individuele studies heen: methodologische beperkingen (generaliseerbaarheid, steekproefomvang, validiteit, zelfrapportage), het snelheidsprobleem (AI en bevindingen verouderen snel terwijl publicatie achterloopt), beperkingen in de onderzoekspraktijk (reproduceerbaarheid, FAIR-praktijken, propriëtaire tools) en zwak gebruik van theorie. Methodologische grenzen zijn meetbaar in plaats van impressionistisch: in een kritische review van 80 HCI-studies naar [[critical-thinking|kritisch denken]] met AI voerden 42 (52%) geen controlegroep uit en leunde het grootste deel van de rest op zelfrapportage, dus de positieve bevindingen van het veld rusten op ontwerpen die het effect van AI niet kunnen scheiden van gewone reflectie ([[critical-review-critical-thinking-hci-research-ai-2026]]). De codering van uitkomsten is op dezelfde manier ongelijk: een systematische review van 103 studies in het hoger onderwijs verdeelde haar corpus in een viertrapsuitkomsttypologie en plaatste 56% ervan in één voorwaardelijk patroon, waarin vertrouwen en motivatie stegen zonder een bijbehorende winst in duurzame competentie ([[generative-ai-higher-education-systematic-review-2026]]). Het erkennen van deze grenzen is essentieel om de literatuur kritisch te lezen en sterkere studies te ontwerpen.

## Vragen om over na te denken

- Hoeveel zou u een kop als 'AI-tutoring verhoogt het leren met 30%' vertrouwen als u hoorde dat die uit 30 studenten in één cursus aan één instelling kwam? De pagina markeert generaliseerbaarheid en kleine steekproeven als terugkerende grenzen — wat zou u willen weten voordat u op één enkele bevinding handelt?
- Een opvallende beperking is het 'snelheidsprobleem': AI evolueert sneller dan bevindingen worden gepubliceerd, dus een studie naar één modelgeneratie beschrijft mogelijk al een verouderd systeem. Hoe zou dit het vertrouwen moeten veranderen dat u in AI-onderwijsonderzoek stelt?
- Veel studies leunen op [[self-report-measures|zelfgerapporteerde]] houdingen en gebruik, die vertekend zijn — mensen overschatten hun competentie en rapporteren misbruik te weinig. Heeft u ooit een enquête over uw eigen vaardigheden of gedrag beantwoord op een manier die niet met de werkelijkheid overeenkwam? Waarom wijken perceptiegebaseerde maten zo vaak af van objectieve prestaties?
- De pagina merkt op dat bekende kaders zoals de taxonomie van Bloom vaak worden gelezen als strikte ladders, en dat zelfs breed gebruikte theorieën zoals de [[cognitive-offloading|cognitieve belasting]]stheorie ter discussie zijn gesteld. Wanneer hebt u meegemaakt dat een theorie als vaststaande waarheid werd aangevoerd in een context waar haar eigen bewijs juist betwist was?
- Het meeste AI-onderzoek leunt op propriëtaire, ondoorzichtige modellen waarvan u de data en updates niet kunt inspecteren. Als u niet kunt verifiëren welk model precies een resultaat produceerde, hoeveel kunt u dan bouwen op beweringen die erop rusten — en wat zou bevindingen reproduceerbaarder maken?
- Als u docent of ontwerper bent zonder tijd om primair onderzoek te lezen, hoe beslist u dan welke AI-beweringen betrouwbaar genoeg zijn om uw praktijk te veranderen — gegeven dat de literatuur versnipperd, voorlopig en voor onderzoekers geschreven is?

## Inleiding

AI in het onderwijs is een snel bewegend, heterogeen veld, en de bewijsbasis draagt een kenmerkende set beperkingen die onderzoekers, professionals in de praktijk en beleidsmakers moeten wegen wanneer ze een bevinding gebruiken. Sommige daarvan deelt het veld met de bredere [[learning-sciences|leerwetenschappen]] en de psychologische literatuur; andere worden versterkt of uniek gemaakt door de aard van AI zelf. Deze pagina ordent ze in vier doorsnijdende gebieden.

## Methodologische beperkingen

De pagina over [[research-methods-aied|onderzoeksmethoden]] van de kennisbank detailleert de sterke en zwakke punten van elk ontwerp. Verschillende grenzen keren in meerdere ontwerpen terug en verdienen bijzondere aandacht:

- **Generaliseerbaarheid.** Bevindingen uit één cursus, instelling, discipline of nationale context zijn mogelijk niet overdraagbaar. Kleine, gelegenheids- of steekproeven binnen één instelling beperken de externe validiteit; resultaten met één AI-tool strekken zich zelden uit tot een andere tool of context.

- **Crossnationale overtuigingsvergelijkingen dragen een meetrisico.** Een enquête onder 1,405 [[k-12]]-docenten in vijf landen gebruikte geautomatiseerde machinevertaling zonder terugvertaling of toetsing van meetinvariantie en mat bezorgdheid over [[academic-integrity|plagiaat]] en [[creativity|creativiteit]] met één item, zodat de landcontrasten niet als gelijkwaardige constructen kunnen worden gelezen ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu et al. (2026)]]).
- **De stringens van een synthese is een andere as dan de stringens van primaire studies.** Een meta-analyse kan aan haar eigen inclusiecriteria voldoen en toch studies bundelen die verschillen in ontwerp, implementatietrouw en uitkomstmaat, zonder een van die dimensies te wegen: [[ai-supported-instruction-stem-meta-analysis-2026|Doğan en collega's (2026)]] zeggen ronduit dat ze geen formeel instrument voor kwaliteitsbeoordeling gebruikten en de inclusiecriteria als de stringensdrempel behandelden, zodat een quasi-experimentele studie en een gerandomiseerde even zwaar bijdroegen aan de gebundelde [[stem-education|STEM]]-schatting. Dezelfde review toont een verwant rapportagegevaar: haar heterogeniteit wordt weergegeven als I² = 82.98% onder een fixed-effectmodel en I² = 15.75% onder het random-effectsmodel, wat betekent dat lezers die één heterogeniteitscijfer zonder model overnemen niet kunnen zien hoe inconsistent het corpus werkelijk is. Beoordeel een synthese op hoe ze omging met afhankelijke effectgroottes, kwaliteit en heterogeniteit, niet alleen op of ze een zoekprotocol volgde.

- **Het zoekontwerp bepaalt de kopgetallen van een synthese.** In een scopingreview van 195 [[teacher-education|lerarenopleidings]]studies waren digitale competentie en [[tpack|TPACK]] expliciete zoekdescriptoren terwijl onderwijsontwerp en beoordeling geen vergelijkbare descriptor hadden, dus de gerapporteerde 46.5% en 1.9% kenmerken het corpus dat de zoekopdracht opleverde in plaats van het veld ([[digital-competence-ai-responsive-pedagogy-2026|Patiño Hernández et al. (2026)]]).
- **Kleine steekproefomvang.** Veel AIED-studies hebben te weinig power — te weinig deelnemers om betekenisvolle effecten betrouwbaar te detecteren of om de sterke beweringen te dragen die er soms uit worden getrokken.
- **Data-augmentatie kan de kopmetriek fabriceren.** In een geautomatiseerde essayscorer waarvan de trainingspartitie het werk van 83 studenten bevatte, verhoogden gegenereerde antwoorden op niveau 1 — sjablonen, afkapping, verwijdering van trefwoorden — de Focus-overeenstemming met +0.346 quadratisch gewogen kappa vanaf een basislijn van 0.028, dus het sterkste ordinale signaal rustte op tekst die geen student had geschreven ([[automated-essay-scoring-critical-thinking-physics-2026|Firdausi et al. (2026)]]).
- **Eindscores kunnen het bestudeerde fenomeen verbergen.** In een PRISMA-review van 103 [[higher-ed|hoger-onderwijs]]studies rapporteerde 56% winst die afhankelijk was van scaffolding of verificatie, en nulverschillen in cijfers gingen vaak samen met echte veranderingen in het proces — meer debuggen, meer controlecycli — dus cijfers alleen kunnen niet vertellen of [[generative-ai|GenAI]] de praktijk versterkte of uitholde ([[hawi-genai-higher-ed-uses-outcomes-risks-2026|Hawi en Samaha (2026)]]).

- **Validatieontwerp kan het kopgetal fabriceren.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara en Halloluwa (2026)]] benchmarkten vijftien modellen op EEG-gebaseerde vertrouwdheid en laten zien dat standaard gestratificeerde kruisvalidatie temporele lekkage toelaat en tot 0.9853 F1 rapporteert, terwijl trial-onafhankelijke Group K-Fold-validatie de piek terugbrengt tot 0.6038 F1 — nog steeds boven kans, maar ver van het geciteerde resultaat.
- **Benchmarks kunnen de fouten leveren die ze rapporteren.** Deskundige herbeoordeling van 250 afgekeurde natuurkunde-items schreef 238 (95.20%) toe aan benchmark- of beoordelaarsfouten en slechts 12 (4.80%) aan echte modelfouten, dus de gemeten foutmarge van een model kan niet onder de foutmarge van het instrument zakken.([[frontier-models-physics-benchmark-audit-2026|Ansari et al. (2026)]])
- **Validiteit en meting.** [[assessment-validity|Constructvaliditeit]] is vaak dun: proxy's voor "leren", "[[student-engagement|betrokkenheid]]" of "geletterdheid" lopen sterk uiteen, en instrumenten zijn niet altijd gevalideerd voor de populatie of het construct dat wordt bestudeerd. [[benchmark|Benchmark]]-nauwkeurigheid is niet gelijk aan onderwijseffectiviteit.
- **Zelfrapportage en enquêtedata.** Een groot deel van het corpus leunt op zelfgerapporteerde houdingen, motivatie en gebruik. Zelfrapportage is onderhevig aan bias — respondenten overschatten competentie, rapporteren [[ai-misuse-learning-harm|misbruik]] te weinig en beoordelen hun eigen gedrag verkeerd — dus perceptiegebaseerde maten wijken vaak af van objectieve prestaties (zie [[ai-literacy-assessment-misalignment]] en [[educational-measurement|onderwijsmeting]]).
- **Context- en validatierapportage kunnen over een literatuur worden gekwantificeerd.** Een PRISMA-ScR-review van 421 studies naar NLP op docentenevaluatiecommentaren vond het land onopgelost in 221 studies, ééninstellingsbereik in 232 van 284 opgeloste gevallen (81.7%), externe validatie in 33 (7.8%) en interbeoordelaarsovereenstemming in 54 (12.8%) ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher en da Silva (2026)]]).
- **Rapportagerijkheid is meetbaar, en het methodetype voorspelt haar.** In 888 artikelen over reviewautomatisering rapporteerde 38.0% van de software- en productartikelen sinds 2023 geen evaluatie tegen 9.3% van de LLM-artikelen, en 52% van 118 LLM-artikelen met alleen positieve resultaten markeerde nog steeds een onvervulde betrouwbaarheidsdrempel — het patroon achter de vijf openbaarmakingstiers van PRISMA-LLM ([[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta en Lin (2026)]]).
- **Standaardiseren binnen elke dataset kan een verkeerde voorstelling van de spreiding verbergen.** Wanneer synthetische onderwijscohorten werden gestandaardiseerd naar hun eigen spreiding, werd het feit dat hun weekstructuur 2.6 tot 4.9 keer minder varieerde dan die van de echte cohorten onzichtbaar voor de gerapporteerde statistieken — routinematige voorbewerking, in de woorden van de auteurs geen hypothetische zorg ([[synthetic-educational-data-structural-fidelity-2026|Inoue en Yasutake, 2026]]).

- **Door modellen gegenereerde labels zijn geen ground truth.** Waar de labels die een systeem trainen of evalueren zelf door taalmodellen worden geproduceerd, kan overeenstemming tussen annotatoren de validiteit niet vaststellen: [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] valideerden hun beweringsannotaties nooit tegen menselijke gouden labels, en de 49 encoderclassificatoren die ze vrijgeven erven die herkomst en zijn mogelijk niet geldig waar toepassingen op belangrijke dimensies verschillen. Hun schema presteerde ook strikt slechter dan de fijn afgestemde classifier die op expertgeannoteerde data was getraind (macro-F1 0.673 tegen 0.76), waardoor expertgelabelde corpora de moeite waard blijven wanneer hoge betrouwbaarheid vereist is.
- **De bewijsbasis zelf is ongelijk verdeeld.** Een scopingreview van 407 technologieondersteunde studies naar [[formative-assessment|formatieve beoordeling]] putte alleen uit Web of Science en Scopus. Ze sloot ook 61 records uit op taalcriteria, dus de geografische onevenwichtigheid die het veld rapporteert, kan deels weerspiegelen welke platforms geïndexeerd zijn ([[bulut-technology-supported-formative-assessment-2026|Bulut, 2026]]).

## Het snelheidsprobleem: AI evolueert sneller dan bevindingen

AI verandert voortdurend, en de conclusies die uit een bepaald model of systeem worden getrokken, kunnen **snel verouderen**. Een studie naar één [[llm]]-generatie beschrijft mogelijk niet de volgende; benchmarkscores, tutoringkwaliteit en zelfs de praktische bruikbaarheid van een bevinding verschuiven naarmate modellen beter worden. Daar komt bij dat het **publicatieproces traag is** — van studieontwerp tot peer-reviewed publicatie kan een jaar of meer verstrijken — dus een gepubliceerd resultaat beschrijft mogelijk al een verouderd systeem. Reviewers en lezers moeten AIED-bevindingen daarom behandelen als voorlopige, datumgevoelige beweringen in plaats van stabiele waarheden, en recent, replicatiegericht en versie-expliciet werk verkiezen.

[[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni en Fryer (2026)]] maken de consequentie concreet voor één literatuur: omdat [[rag|RAG]]-systemen pas in november 2023 publiek beschikbaar werden, betogen zij dat bevindingen over [[intelligent-tutoring|intelligente tutoring]] van vóór 2023 — die rusten op regelgebaseerde, op trefwoorden matchende of heuristische NLP-systemen die functioneel weinig lijken op huidige grote taalmodellen — als historische context moeten worden behandeld in plaats van als direct vergelijkbaar bewijs, en ze rapporteren dat hun review geen gepubliceerde [[rct]] vond die een RAG-gebaseerde AI-[[conversational-ai|chatbot]] in het bacheloronderwijs over een volledig academisch semester onderzocht. De implicatie is dat fundamentele vragen over hoe GenAI het leren beïnvloedt, mogelijk opnieuw moeten worden gesteld tegen elke nieuwe modelgeneratie in plaats van te worden beslecht door oudere resultaten te bundelen.

## Beperkingen in de onderzoekspraktijk

Verschillende beperkingen betreffen de uitvoering en infrastructuur van het onderzoek zelf:

- **Gebrek aan reproduceerbaarheid.** Studies rapporteren vaak niet genoeg detail (prompts, modelversies, hyperparameters, data, analyscode) om resultaten door anderen te laten reproduceren of verifiëren — een bijzonder probleem gezien hoe gevoelig LLM-output is voor prompts en instellingen.
- **FAIR-onderzoekspraktijken.** Open en reproduceerbare praktijk — **F**indable, **A**ccessible, **I**nteroperable, **R**eusable data en code, preregistratie en gedeelde benchmarks — wordt ongelijk toegepast in AIED. Zwakke naleving van FAIR-principes maakt het moeilijker om studies te hergebruiken, te vergelijken en erop voort te bouwen.
- **Propriëtaire tools en modellen.** Veel onderzoek hangt af van gesloten, propriëtaire [[ai-technologies|AI-systemen]] waarvan het interne gedrag, de trainingsdata en de modelupdates ondoorzichtig zijn en zonder kennisgeving kunnen veranderen. Dit beperkt de reproduceerbaarheid, maakt exacte replicatie onmogelijk en kan bevindingen vastbinden aan de roadmap van een leverancier. Het roept ook vragen op over de onafhankelijkheid van evaluatie (zie [[ai-ed-evaluation|AIED-evaluatie]]).

## Zwak of beperkt gebruik van theorie

Een terugkerende kritiek is dat veel empirische artikelen een **beperkt of verouderd theoretisch kader** hebben. Onderzoekers kunnen:

- **Theorieën kritiekloos overnemen.** Kaders worden geleend omdat ze vertrouwd zijn, zonder hun aannames, reikwijdte of bewijsbasis volledig te betrekken.
- **Kaders verkeerd interpreteren als vaste sequenties.** Verschillende breed gebruikte kaders worden behandeld als geordende ladders die lerenden van een "laag" naar een "hoog" stadium moeten beklimmen — maar het bewijs ondersteunt niet dat je altijd onderaan begint. Bijvoorbeeld:
    - **De taxonomie van Bloom** wordt vaak gelezen als een strikte hiërarchie (herinneren → toepassen → evalueren), toch vereisen hogere-orde doelen niet eerst het inoefenen van lagere-orde doelen; taken kunnen vanaf het begin ontworpen worden om evaluatie of creatie aan te spreken (zie [[cross-dataset-bloom-question-classification]]).
    - **ADDIE** en andere onderwijsontwerpmodellen worden soms behandeld als starre lineaire fasen in plaats van de iteratieve, flexibele planningsheuristieken die ze bedoeld zijn (zie [[learning-design|Learning design]]).
- **Betwiste theorieën over het hoofd zien.** Sommige theorieën die breed in AIED worden gebruikt, zijn zelf ter discussie gesteld. **De cognitieve belastingstheorie** is bijvoorbeeld bekritiseerd en haar empirische claims zijn in eerdere studies weerlegd of betwist, toch wordt ze in nieuw AIED-werk nog steeds als een vaststaand fundament aangevoerd.

De implicatie is niet dat [[theories-and-frameworks|theorieën en kaders]] nutteloos zijn, maar dat ze moeten worden gebruikt met aandacht voor hun werkelijke bewijsbasis, hun beoogde reikwijdte en hun bekende kritiek — in plaats van als vanzelfsprekende [[scaffolding|scaffolds]] of starre procedurele sequenties.

## De crisis in het meta-analytische bewijs

Een groeiend corpus meta-onderzoek — reviews die de reviews tegen het licht houden — betoogt dat de kopbeweringen van het veld over AI-gedreven leerwinst rusten op een bewijsbasis die veel zwakker is dan ze lijkt. Drie complementaire kritieken maken de zaak met ongebruikelijke kracht:

- **Positieve-synthesebias is ernstig en kwantificeerbaar.** [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] vonden in een meta-meta-analyse op studieniveau van 1,840 effectgroottes uit 67 meta-analyses sterk bewijs van publicatiebias (alle Egger-tests *p* < .0001) en extreme heterogeniteit tussen studies (τ = 0.869). Publicatiebias-gecorrigeerde effecten waren ongeveer **een derde** van de gangbaar gerapporteerde grootte (SMD = 0.196 tegen een mediaan van 0.67 in de gepubliceerde literatuur), met een voorspellingsinterval van −1.521 tot +1.908 — van grote schade tot groot voordeel. Geen enkele subgroep naar uitkomst, veld, niveau of AI-rol liet consistente winst zien, en er was geen verschil tussen studies van vóór en na 2023. Hun oordeel: brede beweringen over gegeneraliseerde leerwinst zijn voorbarig.
- **Meta-analytische methoden worden systematisch verkeerd toegepast.** De forensische audit van [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] van 14 invloedrijke AIED-meta-analyses vond dat *geen enkele* een geldige basis voor haar beweringen bood: geen enkele had een samenhangend construct (de tool "ChatGPT" behandelen alsof het één interventie was, en toetscijfers, motivatie, [[self-efficacy|zelfeffectiviteit]] en houdingen samenvoegen tot één getal voor "[[learning-gains|academische prestatie]]"); de gerapporteerde heterogeniteit was ernstig, met I² van 77.2% tot 94.4% over de 13 meta-analyses die haar rapporteerden en 12 van die 13 boven 80%, en ze werd nooit opgelost (geen enkele voldeed aan de minimale subgroepomvang van tien studies, vijf leunden op subgroepen met één studie en drie andere op subgroepen van twee); 12 behandelden afhankelijke effectgroottes uit dezelfde studie als onafhankelijk, wat het schijnbare bewijs opblies; en geen enkele beoordeelde publicatiebias geldig (gediskwalificeerde fail-safe N-metrieken en verkeerd toegepaste Egger-tests waren gangbaar). Omdat I² precisieafhankelijk is, kan ze op zichzelf niet vaststellen hoe ver de ware effecten uiteenliggen, en de rapportage die dat zou laten zien ontbrak grotendeels: slechts vier meta-analyses rapporteerden de variantie tussen studies (τ²) en slechts twee een voorspellingsinterval, beide met nul erin. Een meerderheid (61%) van willekeurig getoetste primaire studies was problematisch, en één studie met verzonnen referenties werd door zes van de 14 meta-analyses opgenomen.
- **De "behandeling" is een black box.** [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] doen het media/methodendebat herleven om te betogen dat "ChatGPT" een tool is, geen methode — de vraag of het "het leren verbetert" is een *non sequitur*. Bij het doorlichten van een deelverzameling van de studies achter de meta-analyse van Deng et al. (2025) vonden ze dat slechts 21% van de vergelijkingen een goed gedefinieerde behandeling, een controlegroep *en* een geldige leermaat had; gerapporteerde effectgroottes (g = 0.7) overtroffen zelfs die van speciaal gebouwde [[intelligent-tutoring|Intelligent Tutoring Systems]] (0.66), een rode vlag die erop wijst dat de "behandeling" een heterogene "geheime saus" was.

De convergentie van deze drie onafhankelijke kritieken is zelf bewijs: over verschillende methoden, corpora en kaders heen komen ze tot dezelfde conclusie — dat positieve AIED-effectgroottes, vooral uit vroege meta-analyses, waarschijnlijk **publicatiebias, constructincoherentie en methodologische verkortingen** weerspiegelen, net zo goed als (of meer dan) werkelijke leerwinst. Dat betekent niet dat AI-tools geen onderwijswaarde hebben; het betekent dat het *veldniveau*-bewijs voor die waarde op dit moment opgeblazen is en dienovereenkomstig moet worden gelezen. Het verschuift ook de verantwoordelijkheid naar [[meta-analysis-systematic-review|synthesekwaliteit]]: een meta-analyse is slechts zo betrouwbaar als de samenhang van haar constructen, de onafhankelijkheid van haar effectgroottes, de adequaatheid van haar moderator- en heterogeniteitsanalyse en de validiteit van haar publicatiebiasbeoordeling — en de kritieken laten zien dat elk daarvan routineus wordt geschonden.

## De AIED-literatuur kritisch lezen

Samengenomen pleiten deze beperkingen voor een kritische lezing van AIED-onderzoek met meerdere signaalbronnen: controleer of een bevinding generaliseert en voldoende power heeft; verifieer hoe constructen zijn gemeten (en of beweringen op zelfrapportage rusten); geef de voorkeur aan recent, versie-expliciet en reproduceerbaar werk; en ondervraag het theoretische kader in plaats van vertrouwde kaders als gegeven te behandelen. Dit is het complement van zorgvuldige [[research-methods-aied|methodenkeuze]] en [[ai-ed-evaluation|evaluatie]]: goede methoden en goede evaluatie zijn noodzakelijk, maar lezen met aandacht voor beperkingen is wat bewijs omzet in verdedigbare beslissingen.

## Van onderzoek naar praktijk

Een verdere, praktische beperking is de **uitdaging om onderzoek toe te passen op [[teacher-role|lesgeven]] en onderwijsontwerp**. Professionals in de praktijk — docenten, [[stakeholders|onderwijsontwerpers]] en docentontwikkelaars — hebben vaak niet de tijd of gespecialiseerde expertise om primair onderzoek te lezen, te beoordelen en te vertalen naar concrete klasbeslissingen. De literatuur is groot, versnipperd en voor onderzoekers geschreven; bevindingen worden gerapporteerd met statistisch en methodologisch detail dat niet direct bruikbaar is; en omdat beweringen voorlopig zijn (zie het snelheidsprobleem hierboven), kan een professional in de praktijk niet simpelweg één studie voor waar aannemen. Zo ontstaat een kloof tussen wat het bewijs ondersteunt en wat de [[pedagogy|onderwijspraktijk]] werkelijk bereikt.

Het doel van deze kennisbank is die kloof helpen dichten — het gemakkelijker maken om onderzoek naar AI in het onderwijs bij te houden, te interpreteren en in de praktijk toe te passen — door open-access bevindingen te cureren tot gestructureerde, toegankelijke samenvattingen, verwant werk te verbinden via [[ai-education|conceptpagina's]], en de beperkingen te markeren die lezers moeten wegen. Ze beoogt [[interpreting-and-applying-aied-research|bewijsinformeerde praktijk]] in lesgeven en onderwijsontwerp te ondersteunen, en zo ook hiaten en vragen naar boven te halen die nieuw onderzoek en nieuwe ontwikkeling kunnen voeden. De grenzen van het onderzoek begrijpen is daarom geen doel op zich: het is wat professionals in de praktijk in staat stelt bevindingen gepast toe te passen en onderzoekers sterkere studies te laten ontwerpen die de praktijk beter dienen.

## Twee auditvalkuilen die u moet kennen

Twee specifieke rapportagepraktijken blazen een synthese op of vertekenen haar, en beide zijn zichtbaar in het gepubliceerde bestand in plaats van hypothetisch.

**Het heterogeniteitscijfer hangt af van het model, en het model wordt zelden genoemd.** De heterogeniteit van één review wordt weergegeven als **I² = 82.98% onder een fixed-effectmodel en I² = 15.75% onder het random-effectsmodel**. Die beschrijven dezelfde data. Een lezer die één heterogeniteitsgetal zonder model overneemt, heeft een technische bewering gekregen zonder interpretatie, en het verschil tussen "het meeste van de variantie is onverklaard" en "weinig van de variantie is onverklaard" is het verschil tussen het veld verwerpen en vertrouwen.

**Het koppercentage kan een artefact van de zoektermen zijn.** Een scopingreview van 195 lerarenopleidingsstudies maakte digitale competentie en [[tpack|TPACK]] tot expliciete zoekdescriptoren, terwijl onderwijsontwerp en beoordeling geen vergelijkbare descriptor hadden, dus de gerapporteerde **46.5% en 1.9%** zijn percentages die de query zelf heeft geconstrueerd. Een prevalentieclaim is slechts zo betekenisvol als de zoekopdracht erachter.

**En de basisratio is het getal dat niemand noemt.** Methodologische grenzen zijn hier meetbaar in plaats van impressionistisch: in een kritische review van 80 HCI-studies naar kritisch denken met AI voerden **42 (52%) geen controlegroep** uit en leunde het grootste deel van de rest op zelfrapportage. Wanneer meer dan de helft van de positieve bevindingen van een veld uit ontwerpen komt die het effect van AI niet van gewone activiteit kunnen scheiden, is de gepaste prior voor elke afzonderlijke bevinding scepsis, niet voorlopige aanvaarding.

## Veelvoorkomende misverstanden

- **"Beperkingensecties zijn standaardtekst."** Methodologische grenzen zijn **meetbaar in plaats van impressionistisch**: in een kritische review van **80 HCI-studies** naar kritisch denken met AI voerden **42 (52%) geen controlegroep** uit. Een precieze telling is wat de beperking bruikbaar maakt.
- **"Heterogeniteit is één getal dat u kunt citeren."** Dezelfde review toont een rapportagegevaar: heterogeniteit wordt weergegeven als **I² = 82.98% onder een fixed-effectmodel en I² = 15.75% onder het random-effectsmodel**. Dezelfde data leveren een verhaal van negen punten of van twee punten, afhankelijk van het gekozen model, dus een geciteerde I² zonder model is oninterpreteerbaar.
- **"Een groot gerapporteerd effect is het getal om te vertrouwen."** Een kop die een effect meldt op basis van **30 studenten in één cursus op één locatie** is de gangbare vorm van een kwetsbare bewering, en de telling van studies zonder controles laat zien hoe vaak die kwetsbaarheid ongerapporteerd blijft.

## Verbonden concepten

- [[interpreting-and-applying-aied-research]]
- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[benchmark]]
- [[rct]]
- [[meta-analysis-systematic-review]]
- [[ai-education]]
- [[icap-framework]]
- [[learning-design]]
- [[llm]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[theory-development-aied]] — Theorieontwikkeling in AI in het onderwijs

## Verbonden artikelen
- [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]] — AI-chatbots in het hoger onderwijs: verwachtingen vergeleken met bewijs (Thoeni & Fryer 2026)

- [[ground-truth-reliability-aied]] — Betrouwbaarheid en validiteit van ground truth in evaluatie
- [[ai-literacy-assessment-misalignment]] — Zelfgerapporteerde versus prestatiegerichte AI-geletterdheid
- [[machines-misread-pedagogical-quality]] — Waarom machines pedagogische kwaliteit verkeerd lezen
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Kritische grenzen van AI-tutors en theoriegebruik
- [[cross-dataset-bloom-question-classification]] — De taxonomie van Bloom en vraagclassificatie
- [[eeg-familiarity-automated-assessment-2026]] — Het automatiseren van beoordeling van lerenden: EEG-gebaseerde vertrouwdheidsvoorspelling
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause (media-vergelijkingskritiek)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-meta-analyse: publicatiebias-gecorrigeerde AI-effecten ~1/3 van de gerapporteerde grootte
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensische audit van 14 AIED-meta-analyses
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews
- [[frontier-models-physics-benchmark-audit-2026]] — How Good Are Frontier Models at Physics? Expert Re-Grading Reveals Broken Evaluations and Near-Saturation of Leading Benchmarks
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Inclusiecriteria als stringensdrempel, en een heterogeniteitscijfer dat met het model verandert (Doğan et al. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Een cluster-gerandomiseerde klasstudie waarvan de prestatie-uitkomst niet significant werd (Rücker & Becker-Genschow 2025)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI- en menselijke tutoring leveren gelijkwaardige GRE-leerwinst
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[synthetic-educational-data-structural-fidelity-2026]] — Wat fidelitymetrieken missen: een structurele controle op synthetische onderwijsdata

- [[digital-competence-ai-responsive-pedagogy-2026]] — Scopingreview van 195 lerarenopleidingsstudies waarin het zoekstringontwerp de gerapporteerde frequenties vormt
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Crossnationale K-12-docentenenquête: machinevertaalde items, één-item-bezorgdheidsmaten, geen invariantietoetsing
- [[hawi-genai-higher-ed-uses-outcomes-risks-2026]] — Systematische review van 103 GenAI-studies in het hoger onderwijs: 56% voorwaardelijke winst, cijfers die procesverandering maskeren (Hawi & Samaha 2026)
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Data-augmentatie kan de kopmetriek fabriceren
