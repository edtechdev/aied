---
title: "Learning design"
created: "2026-10-27T17:08:04-04:00"
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks, learning-design-wiki]
translation_of: concepts/learning-design
source_updated: "2026-10-27T08:20:32-04:00"
updated: "2026-10-27T17:08:04-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

> **Learning design** (ook wel *instructioneel ontwerp* genoemd) - het systematische proces van het creëren van effectieve leerervaringen door de analyse van leerbehoeften en het ontwerpen, ontwikkelen, implementeren en evalueren van lesmaterialen en -activiteiten. AI transformeert learning design door contentcreatie te automatiseren, [[adaptive-learning|adaptieve leerpaden]] mogelijk te maken, datagedreven iteratie te ondersteunen en de rol van de onderwijsontwerper te versterken in plaats van te vervangen.

## Vragen om over na te denken

- Denk aan een cursus of les die u hebt meegemaakt of ontworpen. Waar hield 'wat er onderwezen moet worden' (curriculum) op en waar begon 'hoe je het onderwijst' (learning design) - en hoe werkten die twee op elkaar in?
- Een gangbare aanname is dat betere AI-vaardigheid automatisch betere onderwijsinhoud oplevert. Deze pagina weerspreekt dat met bewijs dat juist expliciete pedagogische structuur - en niet alleen AI-vaardigheid - bepaalt hoe effectief er wordt geleerd. Waar hebt u indrukwekkende output gezien die er niet in slaagde iets te onderwijzen?
- Als een AI-tool een volledige cursus uit één prompt kan genereren, welke menselijke beslissingen worden dan belangrijker in plaats van minder belangrijk? De pagina betoogt dat AI de rol van de onderwijsontwerper versterkt en niet vervangt - hoe zou die versterkte rol eruitzien?
- Sommige instructional-designmodellen zoals ADDIE worden gebruikt als starre, lineaire stappen. Maar de pagina behandelt ze als iteratieve, flexibele planningsheuristieken. Wanneer kan het te letterlijk volgen van een proces een goed ontwerp ondermijnen?
- De pagina laat zien dat pedagogisch onderbouwd prompten - bijvoorbeeld een vijfstappenraamwerk gebaseerd op leertheorie - de uitkomsten van hogere orde significant verbeterde. Als u een AI-tutor zou bouwen, wat zou u dan in een expliciete ontwerplaag vastleggen zodat de lesstrategie traceerbaar en reproduceerbaar blijft?

## Introductie

Learning design slaat een brug tussen de mogelijkheden van AI en effectieve pedagogie. Waar [[curriculum-design]] op programmaniveau gaat over *wat* er onderwezen moet worden, gaat learning design over *hoe* je dat op cursus- en lesniveau onderwijst. De artikelen in deze kennisbank verkennen zowel AI als hulpmiddel voor onderwijsontwerpers als learning-designprincipes voor het bouwen van effectieve [[intelligent-tutoring|AI-tutoring]]-systemen.

Wat dat ontwerpwerk in de praktijk inhoudt, is zelf een empirische vraag. [[tang-chatbots-learning-design-2026|Tang et al. (2026)]] codeerden 1.378 beurten tussen ontwerper en chatbot van vijf beginnende onderwijsontwerpers die werkten met een chatbot die in een ontwerptool was ingebouwd, en vonden dat de dialoog zich concentreerde op beoogde leeruitkomsten en pedagogische aanpak in plaats van op contentgeneratie. Ontwerpers kwamen herhaaldelijk terug op uitkomsten als een controle op alignment terwijl ze curriculumelementen omzetten in concrete taken, en de rol van de assistent verschoof per fase: van het verduidelijken van termen naar het ondersteunen van taakontwerp naar het uitvoeren van een verificatieronde vlak voor een deadline. Ontwerpondersteuning gaat, op dit bewijs, minder over het produceren van materiaal dan over het samenhangend houden van de ontwerpintentie.

Learning analytics en generatieve AI ondersteunen verschillende delen van het ontwerp: over 11 focusgroepen aan één Australische universiteit kwam analytics-discours het vaakst samen voor met context en probleemoplossing op cursusniveau (0,32), terwijl GenAI-discours zich centreerde rond beoordelingsontwerp (0,26) en ontwerpen voor zelfbepaling van studenten (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]]).

### Belangrijkste onderzoeksthema's

**AI-ondersteunde contentcreatie** is de meest direct transformerende toepassing. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** presenteert een architectuur in zes fasen die generatieve AI integreert met LaTeX en Python om de productie van [[stem-education|STEM]]-materialen te automatiseren, gevalideerd over 8 modules en 28 projectcontexten met kwaliteitsoordelen van studenten van 8,5-9,9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** gebruikt een multi-agentraamwerk opgebouwd rond het ADDIE-model, met rolgebaseerde agenten (docententeam, onderwijsontwerper, cursuscoördinator) die samenwerken om complete cursusmaterialen te genereren. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** biedt een gestructureerde pipeline voor adaptieve [[pedagogy|pedagogische]] [[video-education|videogeneratie]] op basis van cursuscorpora, en laat zien dat expliciete pedagogische structuur - niet alleen AI-vaardigheid - essentieel is voor het genereren van onderwijsinhoud. [[generative-ai|Generatieve AI]]-platforms kunnen learning-designprincipes ook belichamen in de inhoud die ze produceren: [[ai-modeling-problem-generation-platform-2026|een AI-platform voor het genereren van wiskundige modelleeropgaven]] combineerde gevestigde ontwerpprincipes met [[prompt-engineering|retrieval-augmented generation]], ontwikkeld via de ADDIE-aanpak om pedagogisch onderbouwde taken en aanbevelingen te produceren die conventionele contentgeneratoren missen. Toch wordt de opbrengst van zulke AI-ondersteunde content- en lesgeneratie bemiddeld door de expertise van de leraar zelf: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] vonden dat ervaren leraren door AI gegenereerde lesideeën kritisch aanpassen aan leerlingen en context (opnieuw prompten en de output uitwerken), terwijl beginners de neiging hebben AI-suggesties direct over te nemen - de pedagogische waarde van AI-contenttools hangt dus af van de ervaring en AI-vaardigheid van de leraar, niet van de tool alleen. Een systematisch review van [[wang-teacher-ai-co-design-review-2026|co-design van leertaken door leraar en AI]] (Wang, Liu & Islam 2026) bevestigt het patroon op schaal over 28 studies (2015-2025): GenAI wordt vooral gebruikt voor lesplanning, promptgeneratie en creatieve ideeontwikkeling, en de dominante samenwerkingsvorm is AI als assistent/contentgenerator in plaats van een vollediger co-ontwerper - waarbij efficiëntie, responsiviteit, [[creativity|creativiteit]] en [[equity-in-ai-education|gelijkwaardigheid]] terugkeren als affordances. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] scherpt de bevinding over leraarexpertise aan voor het ontwerp van groepsactiviteiten: ervaren leraren produceren rijkere, meer synergetische en beter op de zone van naaste ontwikkeling afgestemde rolarchitecturen in door AI ontworpen samenwerkingsactiviteiten dan beginners, ongeacht hun bekendheid met AI, en kaderen "pedagogische promptgeletterdheid" als de hefboom die AI-output omzet in effectief [[collaborative-learning|gedifferentieerd groepswerk]].

De Aila-studie hangt een getal aan dat patroon voor planningstijd. Leraren op de gerandomiseerde basisscholen in dat onderzoek besteedden 2,51 uur per week aan lesvoorbereiding met de tool tegen 3,32 uur zonder, maar de mediane leraar plande slechts 21% tot 40% van de lessen vanaf nul, wat precies het geval is dat een tool-vanaf-nul adresseert ([[roy-aila-lesson-planning-teacher-choices-2026|Roy et al., 2026]]).

Waar gegenereerde materialen tekortschieten, is de aansluiting op het curriculum: zeven wiskundeleraren beoordeelden door AI gegenereerde productief-falen-opgaven bijna gelijk aan menselijke op algehele kwaliteit (M = 17,19 tegen 17,43 van 25) maar lager op curriculumsluiting (M = 2,57 tegen 3,29), zodat gegenereerde opgaven nog bewerkt moesten worden voor lengte, leesniveau en beeldmateriaal ([[rhaimi-productivemath-2025|Rhaimi et al. (2025)]]).

**Pedagogisch onderbouwde AI-tutoring** past instructional-designprincipes toe op het ontwerp van AI-systemen. **[[didactical-teacher-assistant-dimensional-modeling|Brisson et al.]]** bouwden een didactisch gestuurde [[llm]]-leraarassistent waarin de tutoringstrategie in een expliciete externe laag is vastgelegd, waardoor contentselectie en didactische structurering traceerbaar en reproduceerbaar worden en de bezwaren over ondoorzichtigheid in [[rethinking-scaffolding-llm-tutors]] direct worden geadresseerd. **[[instructional-guidance-genai-learning|Hou et al.]]** toonden aan dat een vijfstappenraamwerk voor [[prompt-engineering|prompten]] op basis van generatieve [[learning-theories|leertheorie]] de cognitieve uitkomsten van hogere orde significant verbeterde, wat laat zien dat instructieve begeleiding - en niet alleen toegang tot AI - bepaalt hoe effectief er wordt geleerd. Beide sluiten aan bij [[scaffolding]] en [[intelligent-tutoring]].

**Raamwerken en evaluatie** bieden gestructureerde benaderingen. **[[bridging-instructional-design-framework-math]]** en **[[cotal-formative-assessment-scoring-2026|CoTAL]]** demonstreren ontwerpprincipes met [[human-in-the-loop-ai|human-in-the-loop]]. **[[genai-mindtool-generative-learning]]** positioneert AI als een "mindtool" - een cognitieve partner die het denken van de leerling uitbreidt in plaats van vervangt - en past instructional-designtheorie rechtstreeks toe op AI-integratie. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** past de principes van Universal Design for Learning toe om een toegankelijke AI-gesprekspartner voor onderwijsprofessionals te creëren, en verbindt instructional design met [[inclusive-learning]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate-Inquire-Reflect) is een taakstructurerend raamwerk voor cognitief geactiveerd AI-gebruik dat de bijdrage van de AI begrenst zodat voorspellen, interpreteren en evalueren bij de leerling blijven - een AI-specifieke aanpassing van inquiry-cycli op basis van [[self-regulated-learning]], cognitieve belastingstheorie en [[human-ai-collaboration]]. Als aanvulling op deze ontwerpramwerken biedt de [[dohn-boundary-object-classifying-genai-learning-activities-2026|taxonomie van Dohn et al. (2026)]] een *classificatie* in plaats van een ontwerpmethode: zes categorieën (leerdoel, inhoud, representatievorm, epistemische [[student-engagement|betrokkenheid]], sociaal ontwerp, artefacten) waarmee ontwerpers en [[research-methods-aied|onderzoekers]] GenAI-leeractiviteiten kunnen beschrijven, vergelijken en verbeelden door expliciet te maken waarom, wat, hoe, waarmee en met wie leerlingen met GenAI omgaan - opgebouwd als boundary object via postdigitaal dialoog. Raamwerken voor slimme klaslokalen breiden dit uit naar [[teacher-education|lerarenopleiding]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao en Wang (2026)]] stellen een driedimensionaal raamwerk voor slim onderwijs voor - effectiviteit van leren, informatie- en communicatietechnologie (ICT) en klasorganisatie - en passen het toe in een [[math-education|wiskunde]]-mastercursus die [[automated-assessment|geautomatiseerde scoring]], gepersonaliseerde aanbevelingen en meervoudige [[ai-feedback-quality|AI-feedback]] integreert over de fasen voor, tijdens en na de les. Een quasi-experiment toonde significante winst in het vermogen van studenten om precieze, professioneel onderbouwde instructiedoelen te formuleren, wat het overdraagbare **D-T-E-model** opleverde (Disciplinary Demand-Technological Empowerment-Evaluation Loop) - [[discipline-specific-aied|vakspecifieke]] begeleiding voor [[educational-development|lerarenopleiders]] die concepten van slim onderwijs naar de praktijk van instructioneel ontwerp willen brengen.

**Ontwerpen voor bereik.** Halani's raamwerk met zeven hefbomen vraagt voor elke cursuscontext welke daarvan nog werken wanneer de student alleen met AI is; structurele ingrepen zoals veranderen wat het cijfer certificeert, of taken die niet kunnen worden voltooid zonder het denken, reiken verder dan studenten vertellen dat het proces ertoe doet ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Begrens de tool om het denken te beschermen.** Een negentiendaags ontwerp voor argumentatief schrijven zette chatbots in die door de leraar waren afgebakend, vragen stellen en weigeren leerlingenproza te genereren, en vier middelbare scholieren groeiden van passieve AI-consumenten naar beoordelaars die output tegenspraken - strategische begrenzing, niet onbeperkte generativiteit, liep gelijk op met de winst ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Rubriekgestuurd prompten als ontwerpkeuze.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] toonden aan dat de rubriek functioneert als een bemiddelende interface tussen menselijke pedagogische intentie en machine-inferentie: beoordelingscriteria behandelen als herzienbare ontwerpobjecten - in plaats van vaste instrumenten - en ze iteratief samen met het LLM aanscherpen verhoogde de overeenstemming tussen LLM en mens over ontwerpwerk van studenten van 54,75% naar 81,25%. Rubrieken die voor LLM's worden ontworpen, moeten precisie en flexibiliteit in balans houden - te vaag nodigt uit tot vrije interpretatie, te star reduceert het model tot patroonherkenning - en rolbewust prompten (docent, peerreviewer, subsidiebeoordelaar) leverde onderscheiden evaluatieve feedback op. Dit positioneert rubriekontwerp als een concrete learning-designpraktijk om het evaluatiegedrag van AI vorm te geven, waarbij human-in-the-loop-toezicht essentieel blijft.

**AI-agenten voor instructioneel ontwerp** breiden het veld uit naar [[agentic-ai|agentieke AI]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** is de eerste gestandaardiseerde, theoretisch onderbouwde benchmark voor het evalueren van LLM-gebaseerde instructional-designagenten - de Context Matrix met 25.795 scenario's (51 contextvariabelen × 33 ISD-substappen uit ADDIE) laat zien dat agenten die op klassieke ISD-raamwerken zijn gebaseerd (ADDIE, Dick & Carey, Rapid Prototyping ISD) beter presteren dan theorievrije agenten, wat empirisch bevestigt dat instructioneel ontwerp een gestructureerde discipline is en geen generieke prompttaak. Agenten zijn niet alleen *bouwers* van ontwerpen maar ook *critici* ervan: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]] gebruiken één autonome webagent die een meerstaps online les als een student doorloopt om een learning design te evalueren *voordat* echte leerlingen ermee aan de slag gaan - de beschrijving van de leerlingervaring voorspelt waar beginners afhaken en levert bruikbare ontwerpfeedback op, en presteert beter dan elke baseline en zelfs dan een gesimuleerd cohort studenten in een wereldwijde CS1-cursus. Dit kadert agentische evaluatie vóór de lancering als een goedkope aanvulling op menselijke ontwerpiteratie. **[[wang-multi-agent-systems-learning-designers-2025]]** en **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** verkennen multi-agentraamwerken die rolgebaseerde agenten rond instructional-designmodellen orkestreren, terwijl **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** onderzoekt hoe leraren en agenten samen technologisch-pedagogisch-inhoudelijke kennis toepassen. Dit werk verbindt instructional design met [[benchmark|benchmarking]], [[ai-ed-evaluation]] en het ontwerp van [[curriculum-design|curriculum]] op schaal.

### Verbanden met verwante concepten

Learning design is de bruggediscipline van [[ai-education|AI in het onderwijs]] - het verbindt [[curriculum-design]] (wat je onderwijst) met [[scaffolding]] (hoe je leerlingen ondersteunt), [[educational-development]] (hoe je onderwijsprofessionals voorbereidt) en [[generative-ai]] (de tools zelf). Het is nauw gekoppeld aan [[teacher-role]] omdat AI-tools veranderen wat onderwijsontwerpers en leraren doen, en aan [[ai-literacy]] omdat effectieve AI-integratie vereist dat onderwijsprofessionals de mogelijkheden en beperkingen van AI begrijpen. Ontwerpwerk komt uiteindelijk neer op een *orde van activiteiten*: [[pedagogical-patterns|pedagogische patronen]] catalogiseren de beproefde opeenvolgingen van stappen, zodat een ontwerper kan beslissen waar AI in een les thuishoort in plaats van alleen wat erin moet. De [[learning-sciences|leerwetenschappen]] zijn het onderzoeksveld achter deze principes: waar deze pagina de professionele praktijk van het creëren van leerervaringen behandelt, bestuderen de leerwetenschappen die praktijk en haar ontwerpen empirisch en genereren ze de cognitieve, motivationele en sociale principes die learning design vervolgens operationaliseert.

### Hoe learning design de leerwinst bepaalt

Learning design is de hefboom die beslist of AI [[learning-gains|leerwinst]] oplevert of slechts door AI opgeblazen prestatie. Het bewijs in de kennisbank is hierin consistent: **dezelfde AI-tool levert grote winst of netto schade op, afhankelijk van hoe de leerervaring eromheen is ontworpen.** [[instructional-guidance-genai-learning|Hou et al.]] toonden aan dat een vijfstappenraamwerk voor prompten op basis van leertheorie de cognitieve uitkomsten van hogere orde significant verbeterde, terwijl toegang tot AI alleen dat niet deed; de raamwerken [[genai-mindtool-generative-learning|mindtool]] en [[airis-cognitively-activated-ai-physics-2026|AIRIS]] behouden het cognitieve werk van de leerling zodat duurzame winst (en niet taakefficiëntie) het resultaat is. Ontwerpkeuzes die [[learning-gains]] beschermen - scaffolding die een poging van de student vereist, [[formative-assessment]] met onafhankelijke uitkomstmaten, en pedagogische structuur die de leerling de handelende partij laat blijven - weerspiegelen de bevinding van het veld (zie [[learning-gains]]) dat AI een sterke winst is wanneer het coacht en schade wanneer het antwoordt. Omgekeerd vallen slecht ontworpen AI-geïntegreerde lessen ten prooi aan de [[cognitive-offloading|prestatie-leerkloof]], waarin schijnbaar succes geen leren verbergt.

### Praktische begeleiding voor ontwerpers en ontwikkelaars

Voor onderwijsontwerpers, cursusontwikkelaars en ingenieurs die AI-ondersteunde leerervaringen bouwen, vertaalt het bewijs in de kennisbank zich in bruikbare praktijk. Eén grens is het markeren waard voordat de praktijken zelf aan bod komen: learning design zoals deze pagina het beschrijft is het ontwerp van een cursus voor een bekende groep, terwijl dezelfde principes ingebakken in een product dat veel cursussen zullen gebruiken - gegeven door mensen die de ontwerper nooit zal ontmoeten - het werk is van [[educational-technology-developers]], waar standaardwaarden, configureerbaarheid en documentatie pedagogisch gewicht dragen:

**Veranker AI-generatie in een gestructureerd instructiemodel.** AI-content is maar zo goed als de pedagogische structuur erachter - expliciete structuur, niet AI-vaardigheid, bepaalt de kwaliteit. Ontwerp rond een erkend model (ADDIE, Dick & Carey, rapid prototyping) en leg pedagogische beslissingen expliciet vast in plaats van erop te vertrouwen dat het model ze afleidt.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Neem naast een instructiemodel ook een raamwerk op principeniveau op.** Een model op cursusniveau structureert één ontwerp; een gepubliceerd raamwerk zet de criteria waaraan veel ontwerpen zouden moeten voldoen. Een voorbeeld dat de moeite van het volledig lezen waard is, is *Powerful Learning with Emerging Technology* van Digital Promise, dat zijn begeleiding organiseert onder drie principes - Evidence-Based, Learner-Centered, Skill-Building - elk uitgewerkt in praktijken en strategieën, en dat [[privacy]], [[explainable-ai|verklaarbaarheid]] en eerlijkheid aan specifieke praktijken verbindt als veiligheidsverplichtingen in plaats van als optionele extra's.([[powerful-learning-with-emerging-technology-2025]])
**Stem de AI-configuratie af op de taak, niet op geavanceerdheid.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] onderscheidt vier lagen - prompt, context, harnas en geverifieerde lus - en past een principe van minimaal toereikende lagen toe: gebruik de minst complexe configuratie die een verifieerbaar resultaat kan opleveren, want extra orkestratie brengt coördinatie-, verificatie-, privacy- en begripskosten met zich mee.

**Gebruik rolgebaseerde multi-agentworkflows voor contentproductie.** Orkestreer in plaats van één generieke prompt verschillende agenten en rollen (docententeam, onderwijsontwerper, cursuscoördinator) die via een gedefinieerde pipeline samenwerken - dit weerspiegelt hoe echte cursusteams werken en levert completere materialen op dan één prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Bied instructieve begeleiding, niet alleen toegang tot AI.** Of leerlingen nu rechtstreeks met AI of met door AI gegenereerde materialen werken, begeleiding op basis van leertheorie (bijvoorbeeld een stapsgewijze [[scaffolding|scaffold]] voor prompten op basis van generatieve-leerprincipes) leidt tot uitkomsten van hogere orde; toegang alleen niet. Ontwerp de leeractiviteit rond hoe de geest leert, en behandel AI als een cognitieve "mindtool" die het denken uitbreidt in plaats van vervangt.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Modelleer vergeten, en plan herhaling waar de verval het grootst is.** G4L representeert kennisverval met een Ebbinghaus-vergeetcurve op basis van verstreken tijd en herhalingen, en geeft prioriteit aan de eenheden die het meest vatbaar zijn voor verval in plaats van opnieuw aan te bieden wat het laatst is gescoord ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin et al. (2026) voegen een operationele stap toe om te beslissen waar AI binnenkomt: splits een activiteit uiteen in de onderdelen die je het beste onafhankelijk doet en die je het beste met AI koppelt, en houd het oordeel van de onderwijsprofessional centraal in die splitsing ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**Maak inhoud traceerbaar en controleerbaar.** Laat een menselijke ontwerper AI-output beoordelen en corrigeren voordat die leerlingen bereikt, en structureer AI-generatie zo dat de pedagogische onderbouwing (waarom deze inhoud, in deze volgorde) inspecteerbaar is - wat zowel de kwaliteit adresseert als de bezwaren over ondoorzichtigheid die [[trust]]-gegenereerd onderwijs ondermijnen.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Beoordeel door AI gegenereerde media in de scriptfase, niet na de synthese.** PedaCo legt de beoordeling door de onderwijsprofessional op het script - waar pedagogische fouten goedkoop te herstellen zijn - voordat er iets wordt gerenderd; de beoordeelde instructieve validiteit steeg van 3,07 naar 3,86, terwijl de geautomatiseerde laag na de synthese slechts twee van de vijf dimensies verbeterde ([[ai-video-dual-gatekeeping-2026|Kim, Baek en Kwak (2026)]]).

**Ontwerp vanaf het begin voor [[accessibility|toegankelijkheid]].** Pas [[universal-design-for-learning|UDL]]-principes toe bij het bouwen van AI-tools en door AI gegenereerde materialen zodat ze diverse leerlingen bedienen, in plaats van toegankelijkheid achteraf in te bouwen.([[ludia-udl-ai-thought-partner-2026]])

**Plan voor het aflevermedium.** Instructioneel ontwerp voor [[online-teaching-and-learning|online lesgeven en leren]] is geen neutrale vertaling van ontwerp voor fysiek onderwijs - het medium verandert welke scaffolding, beoordeling en interactie haalbaar zijn, en AI vermenigvuldigt zowel de kansen (schaalbare [[personalized-learning|personalisering]], ondersteuning op elk moment) als de risico's ([[academic-integrity|integriteit]], [[cognitive-offloading|cognitieve offloading]]) waarop ontwerpers moeten plannen. Ontwerp de pedagogische wrapper van de AI even bewust online als in face-to-facecontexten.

**Evalueer tegen een benchmark, niet op gevoel.** Als u een instructional-designagent bouwt, evalueer die dan tegen een gestandaardiseerde, theoretisch onderbouwde benchmark (bijvoorbeeld [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]) zodat u kunt meten of verankering in een echt ISD-raamwerk de output daadwerkelijk verbetert ten opzichte van een generiek LLM.([[jeon-isd-agent-bench-2026]])

- **AI hervormt de praktijk van instructioneel ontwerp.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] [[meta-analysis-systematic-review|reviewen systematisch]] 28 studies (2020-2025) en vinden dat AI ontwerpers helpt bij contentgeneratie, sjablonen en personalisering, en dat AI wordt geconceptualiseerd als collega, medewerker of partner in plaats van alleen als tool - hoewel pedagogische aansluiting en de paraatheid van de beroepsgroep uitdagingen blijven.

- **De gedocumenteerde activiteit is geconcentreerd in één fase van de cyclus.** In een review van 78 studies naar AI-ondersteund instructioneel ontwerp komt activiteit in de ontwerpfase voor in **74 van de 78 studies (95%)** en ontwikkeling in 44 (56%), terwijl analyse slechts 11 studies bereikt (14%), evaluatie 10 (13%) en implementatie 7 (9%) - en **geen enkele studie onderzocht AI-ondersteuning over de volledige ADDIE-cyclus**. De cyclus is een wens die de bewijsbasis niet dekt, wat van belang is voor iedereen aan wie "AI-gedreven cursusontwikkeling" als end-to-endvermogen wordt verkocht ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **Drie AI-rollen, hiërarchisch verdeeld.** *Generatief* gebruik - AI die op aanwijzing van de onderwijsprofessional ontwerpinhoud produceert - domineert met **96% van de studies**; *scaffolding*-gebruik, waarbij AI het eigen redeneren van de ontwerper structureert, komt voor in 35%; *evaluatief* gebruik, waarbij AI de kwaliteit van artefacten beoordeelt, in 21%. Het veld gebruikt AI overweldigend om dingen te maken in plaats van om zijn eigen ontwerpbeslissingen te ondervragen, wat het tegenovergestelde is van de kritische-vriendconfiguratie die het review als onderwijsbelofte aanwijst.

## Veelvoorkomende misverstanden

- **"AI-lesplanning geeft leraren tijd terug."** De planningstijd daalde inderdaad, van 3,32 uur per week naar 2,51 met de tool, maar **de mediane leraar plande slechts 21% tot 40% van de lessen vanaf nul**. Er werd tijd bespaard en de planning werd niet wezenlijk grondiger - de besparing werd geoogst in plaats van herinvesteerd.
- **"Co-design met AI is goed onderbouwd."** Een systematisch review van [[wang-teacher-ai-co-design-review-2026|co-design van leertaken door leraar en AI]] **bevestigt het patroon op schaal over 28 studies**, wat een consistente praktijk beschrijft in plaats van superieure uitkomsten aan te tonen.
- **"De rubriek is een vaste invoer."** De rubriek functioneert als een **bemiddelende interface tussen menselijke pedagogische intentie en machine-inferentie**: beoordelingscriteria als **herzienbaar** behandelen is wat het instrument de intentie van de onderwijsprofessional laat dragen. Een vaste rubriek draagt de standaardkadrering van de machine over aan de beoordeling.
## Verbonden concepten

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - Pedagogische partnerschappen
- [[online-teaching-and-learning]] - Online lesgeven en leren
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] - Overkoepeling: pedagogieën en lesstrategieën in AI-onderwijs
- [[stakeholders]] - Overkoepeling: mensen en doelgroepen in AI-onderwijs (leerlingen, leraren, ontwerpers, beheerders, beleidsmakers)

## Verbonden artikelen

- [[roy-aila-lesson-planning-teacher-choices-2026]] - Een gemeten besparing in planningstijd naast de bevinding dat leraren slechts 21% tot 40% van de lessen vanaf nul plannen
- [[powerful-learning-with-emerging-technology-2025]] - Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] - LA en GenAI in besluitvorming over learning design
- [[tang-chatbots-learning-design-2026]] - Chatbotgebruik in learning design: ontwerpers blijven bij uitkomsten en pedagogie in plaats van bij contentgeneratie (Tang et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] - Interactiepatronen tussen leraar en AI bij lesontwerp naar ervaring en AI-vaardigheid (Choi et al. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] - AI in het hoger onderwijs: betrokkenheid en de bemiddelende rol van lesmethoden
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] - Taxonomie (boundary object) voor het classificeren van GenAI-leeractiviteiten
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] - AI Web Agents: een autonome webagent evalueert lesontwerpen en voorspelt uitval van studenten voordat studenten beginnen (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] - AIRIS: een raamwerk voor cognitief geactiveerde AI-versterking in natuurkunde
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] - Designing for Reach: zeven hefbomen en de student alleen met AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] - When Saying No Makes Better Videos: dubbele poortwachting voor pedagogisch onderbouwde AI-contentcreatie
- [[rhaimi-productivemath-2025]] - ProductiveMath: AI ter ondersteuning van het ontwerp van productief-falen-opgaven
- [[kibar-ilgaz-ai-instructional-design-review-2026]] - AI en de praktijk van instructioneel ontwerp: een systematisch review (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] - Grafiekgebaseerde intelligente tutoring voor dynamische domeinen (2026)
- [[making-ai-annoying-constrained-writing-2026]] - AI met opzet irritant maken: begrenzing in AI-ondersteund schrijven (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] - Model voor slimme klaslokalen en D-T-E-lus die de instructional-designvaardigheid van M.Ed.-studenten in wiskunde verbetert (Zhu et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] - AI-platform dat wiskundige modelleeropgaven genereert (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] - Co-design van leertaken door leraar en AI: trends en perspectieven (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] - Architectuur van rollen in door AI ontworpen gedifferentieerde groepsactiviteiten (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] - LLM's als agenten van iteratief pedagogisch ontwerp
