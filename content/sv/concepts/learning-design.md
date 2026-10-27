---
title: "Lärandedesign"
created: "2026-10-27T17:23:22-04:00"
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks, learning-design-wiki]
translation_of: "concepts/learning-design"
source_updated: "2026-10-27T08:20:32-04:00"
updated: "2026-10-27T17:23:22-04:00"
translation_note: "*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

> **Lärandedesign** (även kallat *instruktionsdesign*) - den systematiska processen att skapa effektiva lärupplevelser genom analys av lärandebehov och genom design, utveckling, implementering och utvärdering av undervisningsmaterial och aktiviteter. AI förändrar lärandedesign genom att automatisera innehållsskapande, möjliggöra [[adaptive-learning|adaptiva lärandestigar]], stödja datadriven iteration och förstärka - snarare än ersätta - instruktionsdesignerns roll.

## Frågor att fundera över

- Tänk på en kurs eller lektion som du har upplevt eller designat. Var slutade "vad som ska läras ut" (kursplanen) och var började "hur det ska läras ut" (lärandedesignen) - och hur samspelade de två?
- Ett vanligt antagande är att bättre AI-flyt automatiskt ger bättre pedagogiskt innehåll. Sidan bemöter detta med evidens för att det är den explicita pedagogiska strukturen - inte enbart AI-flyt - som avgör lärandeeffekten. Var har du sett imponerande output som misslyckades med att undervisa?
- Om ett AI-verktyg kan generera en hel kurs från en prompt, vilka mänskliga beslut blir då viktigare snarare än mindre? Sidan hävdar att AI förstärker snarare än ersätter instruktionsdesignerns roll - hur skulle den förstärkta rollen se ut?
- Vissa instruktionsdesignmodeller som ADDIE används som stela, linjära steg. Men sidan behandlar dem som iterativa, flexibla planeringsheuristiker. När kan det underminera en bra design att följa en process alltför bokstavligt?
- Sidan visar att pedagogiskt förankrad promptning - till exempel ett femstegsramverk grundat i lärandeteori - avsevärt förbättrade högre ordningens utfall. Om du byggde en AI-handledare, vad skulle du koda in i ett explicit designlager så att dess undervisningsstrategi förblir spårbar och reproducerbar?

## Introduktion

Lärandedesign bygger bron mellan AI:s förmågor och effektiv pedagogik. Där [[curriculum-design]] handlar om *vad* som ska läras ut på programnivå, handlar lärandedesign om *hur* det ska läras ut på kurs- och lektionsnivå. Artiklarna i denna kunskapsbas utforskar både AI som verktyg för lärandedesigners och lärandedesignprinciper för att bygga effektiva [[intelligent-tutoring|AI-handledningssystem]].

Vad det designarbetet innebär i praktiken är i sig en empirisk fråga. [[tang-chatbots-learning-design-2026|Tang m.fl. (2026)]] kodade 1 378 turer mellan designer och chattbot från fem novisa lärandedesigners som arbetade med en chattbot inbäddad i ett designverktyg, och fann att dialogen klustrade kring avsedda lärandemål och pedagogiskt angreppssätt snarare än innehållsgenerering. Designerna återvände upprepade gånger till målen som en avstämning av samstämmighet medan de omvandlade kursplanskomponenter till konkreta uppgifter, och assistentens roll skiftade mellan faser, från att förtydliga begrepp till att stödja uppgiftsdesign till att köra en verifieringsomgång före en deadline. Designstöd handlar, enligt denna evidens, mindre om att producera material än om att hålla designavsikten sammanhängande.

Lärandeanalys och generativ AI stödjer olika delar av designen: över 11 fokusgrupper vid ett australiskt universitet samförekom analysdiskursen mest med kontext och problemlösning på kursnivå (0,32), medan GenAI-diskursen centrerades kring bedömningsdesign (0,26) och design för elevers självbestämmande (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen m.fl. (2026)]]).

### Centrala forskningsteman

**AI-assisterat innehållsskapande** är den mest direkt transformativa tillämpningen. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** presenterar en sexfasarkitektur som integrerar generativ AI med LaTeX och Python för att automatisera framställning av [[stem-education|STEM]]-material, validerad över 8 moduler och 28 projektkontexter med elevkvalitetsbetyg på 8,5-9,9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** använder ett multiagentramverk strukturerat kring ADDIE-modellen, med rollbaserade agenter (undervisande fakultet, instruktionsdesigner, kurskoordinator) som samarbetar för att generera kompletta kursmaterial. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** tillhandahåller en strukturerad pipeline för adaptiv [[pedagogy|pedagogisk]] [[video-education|videogenerering]] grundad i kurskorpora, och visar att explicit pedagogisk struktur - inte bara AI-flyt - är avgörande för generering av pedagogiskt innehåll. Plattformar för [[generative-ai|generativ AI]] kan också förkroppsliga lärandedesignprinciper i innehållet de producerar: [[ai-modeling-problem-generation-platform-2026|en AI-driven plattform för att generera matematiska modelleringsproblem]] kombinerade etablerade designprinciper med [[prompt-engineering|retrieval-augmented generation]], utvecklad genom ADDIE-ansatsen för att producera pedagogiskt förankrade uppgifter och rekommendationer som konventionella innehållsgeneratorer saknar. Ändå förmedlas utbytet av sådan AI-assisterad innehålls- och lektionsgenerering av lärarens egen expertis: [[choi-teacher-ai-interaction-lesson-design-2026|Choi m.fl. (2026)]] fann att erfarna lärare kritiskt anpassar AI-genererade lektionsidéer till elever och kontext (ompromptning och utveckling av output), medan noviser tenderar att acceptera AI-förslag direkt - så det pedagogiska värdet av AI-innehållsverktyg beror på lärarens erfarenhet och AI-skicklighet, inte på verktyget ensamt. En systematisk genomgång av [[wang-teacher-ai-co-design-review-2026|lärar-AI-samdesign av lärandeuppgifter]] (Wang, Liu & Islam 2026) bekräftar mönstret i skala över 28 studier (2015-2025): GenAI används främst för lektionsplanering, promptgenerering och kreativ idégenerering, och det dominerande samarbetsläget är AI som assistent/innehållsgenerator snarare än en fullvärdig meddesigner - med effektivitet, responsivitet, [[creativity]] och [[equity-in-ai-education|rättvisa]] återkommande som affordanser. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] skärper fyndet om lärarnas expertis för design av gruppaktiviteter: erfarna lärare producerar rikare, mer synergistiska och bättre ZPD-anpassade rollarkitekturer i AI-designade kooperativa aktiviteter än noviser, oavsett AI-vana, och ramar in "pedagogisk promptkompetens" som den hävstång som förvandlar AI-output till effektivt [[collaborative-learning|differentierat grupplärande]].

Ailaförsöket sätter en siffra på planeringstiden för detta mönster. Lärare i dess randomiserade grundskolor lade 2,51 timmar i veckan på att förbereda lektioner med verktyget mot 3,32 timmar utan det, men medianläraren planerade bara 21% till 40% av lektionerna från grunden, vilket är det fall ett verktyg för att planera från grunden adresserar ([[roy-aila-lesson-planning-teacher-choices-2026|Roy m.fl., 2026]]).

Där genererat material kommer till korta är kursplaneanpassningen: sju matematiklärare bedömde AI-genererade produktiva-misslyckande-problem som nära mänskliga i övergripande kvalitet (M = 17,19 mot 17,43 av 25) men lägre i kursplaneförankring (M = 2,57 mot 3,29), så genererade problem behövde fortfarande redigeras för längd, läsnivå och visualiseringar ([[rhaimi-productivemath-2025|Rhaimi m.fl. (2025)]]).

**Pedagogiskt förankrad AI-handledning** tillämpar instruktionsdesignprinciper på AI-systemdesign. **[[didactical-teacher-assistant-dimensional-modeling|Brisson m.fl.]]** byggde en didaktiskt driven [[llm]]-lärarassistent där handledningsstrategin kodas i ett explicit externt lager - vilket gör innehållsurval och didaktisk strukturering spårbar och reproducerbar, och direkt adresserar ogenomskinlighetsproblemen i [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou m.fl.]]** visade att ett femstegs [[prompt-engineering|promptningsramverk]] grundat i generativ [[learning-theories|lärandeteori]] avsevärt förbättrade högre ordningens kognitiva utfall, vilket visar att instruktionsvägledning - inte bara tillgång till AI - avgör lärandeeffekten. Båda kopplar till [[scaffolding]] och [[intelligent-tutoring]].


**Ramverk och utvärdering** tillhandahåller strukturerade angreppssätt. **[[bridging-instructional-design-framework-math]]** och **[[cotal-formative-assessment-scoring-2026|CoTAL]]** demonstrerar [[human-in-the-loop-ai|human-in-the-loop]]-designprinciper. **[[genai-mindtool-generative-learning]]** positionerar AI som ett "mindtool" - en kognitiv partner som utvidgar snarare än ersätter elevens tänkande - och tillämpar instruktionsdesignteori direkt på AI-integration. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** tillämpar principerna för Universal Design for Learning för att skapa en tillgänglig AI-tankepartner för pedagoger, och kopplar instruktionsdesign till [[inclusive-learning]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate-Inquire-Reflect) är ett uppgiftsstrukturerande ramverk för kognitivt aktiverad AI-användning som avgränsar AI:ns bidrag så att förutsägelse, tolkning och utvärdering förblir elevens - en AI-specifik anpassning av undersökningscykler grundad i [[self-regulated-learning]], Cognitive Load Theory och [[human-ai-collaboration]]. Som komplement till dessa designramverk erbjuder [[dohn-boundary-object-classifying-genai-learning-activities-2026|Dohn m.fl.:s (2026) taxonomi]] en *klassificering* snarare än en designmetod: sex kategorier (lärandemål, innehåll, representationsformat, epistemiskt [[student-engagement|engagemang]], social design, artefakter) som låter designers och [[research-methods-aied|forskare]] beskriva, jämföra och föreställa sig GenAI-lärandeaktiviteter genom att göra explicit varför, vad, hur, med vad och med vem elever engagerar sig i GenAI - byggd som ett gränsobjekt genom postdigital dialog. Ramverk för smarta klassrum utvidgar detta till [[teacher-education|lärarutbildning]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao och Wang (2026)]] föreslår ett tredimensionellt ramverk för smart utbildning - lärandeeffektivitet, informations- och kommunikationsteknik (IKT) och klassrumsorganisation - och instansierar det i en [[math-education|matematik]]kurs på avancerad nivå som integrerar [[automated-assessment|automatisk bedömning]], individualiserade rekommendationer och multi-[[ai-feedback-quality|AI-feedback]] över stadier före, under och efter lektion. Ett kvasi-experiment visade signifikanta förbättringar av elevernas förmåga att formulera precisa, professionellt förankrade undervisningsmål, vilket gav den överförbara **D-T-E-modellen** (Disciplinary Demand-Technological Empowerment-Evaluation Loop) - [[discipline-specific-aied|disciplinspecifik]] vägledning för [[educational-development|lärarutbildare]] som vill flytta smartutbildningskoncept in i praktisk instruktionsdesignpraktik.

**Design för räckvidd.** Halahanis ramverk med sju hävstänger frågar, för varje kursmiljö, vilka av dem som fortfarande verkar när eleven är ensam med AI; strukturella drag som att ändra vad betyget intygar, eller uppgifter som inte kan slutföras utan tänkandet, når längre än att säga till elever att processen spelar roll ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Begränsa verktyget för att skydda tänkandet.** En nio veckor lång design för argumenterande skrivande sekvenserade läraravgränsade chattbotar som ställer frågor och vägrar generera elevers prosa, och fyra gymnasieelever gick från passiva AI-konsumenter till utvärderare som tog emot och motsatte sig output - strategisk begränsning, inte obegränsad generativitet, följde vinsterna ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Bedömningsmatrisstyrd promptning som designhävstång.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar m.fl. (2026)]] visade att bedömningsmatrisen fungerar som ett förmedlande gränssnitt mellan mänsklig pedagogisk avsikt och maskinell inferens: att behandla bedömningskriterier som reviderbara designartefakter - snarare än fasta instrument - och iterativt samförfina dem med LLM:en höjde LLM-människa-överensstämmelsen om elevers designarbete från 54,75% till 81,25%. Bedömningsmatriser konstruerade för LLM:er måste balansera precision och flexibilitet - alltför vagt inbjuder till fri tolkning, alltför stelt reducerar modellen till mönstermatchning - och rollmedveten promptning (lärare, kamratgranskare, anslagsgranskare) gav distinkt utvärderande feedback. Detta positionerar matriskonstruktion som en konkret lärandedesignpraktik för att forma AI:s utvärderingsbeteende, med mänsklig tillsyn i loopen fortfarande avgörande.

**AI-agenter för instruktionsdesign** utvidgar fältet in i [[agentic-ai|agentisk AI]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** är det första standardiserade, teoriförankrade riktmärket för att utvärdera LLM-baserade instruktionsdesignagenter - dess kontextmatris med 25 795 scenarier (51 kontextvariabler x 33 ISD-delmoment från ADDIE) visar att agenter förankrade i klassiska ISD-ramverk (ADDIE, Dick & Carey, Rapid Prototyping ISD) presterar bättre än teorifria agenter, vilket empiriskt validerar att instruktionsdesign är en strukturerad disciplin snarare än en generisk promptuppgift. Agenter är inte bara *byggare* av designer utan också *kritiker* av dem: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]] använder en enda autonom webbagent som navigerar en flerstegslektion online som en elev för att utvärdera en lärandedesign *innan* riktiga elever möter den - dess beskrivning av elevupplevelsen förutsäger var noviser hoppar av och lyfter fram handlingsbar designfeedback, och överträffar varje baslinje och till och med en simulerad elevkohort i en global CS1-kurs. Detta ramar in agentisk utvärdering före lansering som ett billigt komplement till mänsklig designiteration. **[[wang-multi-agent-systems-learning-designers-2025]]** och **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** utforskar multiagentramverk som orkestrerar rollbaserade agenter kring instruktionsdesignmodeller, medan **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** undersöker hur lärare och agenter gemensamt tillämpar teknologisk-pedagogisk-ämneskunskap. Detta arbete kopplar instruktionsdesign till [[benchmark|benchmarking]], [[ai-ed-evaluation]] och design av [[curriculum-design|kursplaner]] i skala.

### Kopplingar till närbesläktade begrepp

Lärandedesign är [[ai-education|AI i utbildningen]]s brodisciplin - den kopplar [[curriculum-design]] (vad som ska läras ut) med [[scaffolding]] (hur elever stöds), [[educational-development]] (hur pedagoger förbereds) och [[generative-ai]] (verktygen själva). Den är tätt kopplad till [[teacher-role]] eftersom AI-verktyg omformar vad lärandedesigners och lärare gör, och till [[ai-literacy]] eftersom effektiv AI-integration kräver att pedagoger förstår AI:s förmågor och begränsningar. Designarbete utmynnar ytterst i en *aktivitetsordning*: [[pedagogical-patterns|pedagogiska mönster]] katalogiserar de beprövade ordningarna av drag, så att en designer kan avgöra var i en lektion AI hör hemma, inte bara vad som ska ingå. [[learning-sciences|lärandets vetenskaper]] är forskningsfältet bakom dessa principer: där denna sida täcker den professionella praktiken att skapa lärupplevelser, studerar lärandets vetenskaper den praktiken och dess designer empiriskt och genererar de kognitiva, motivationella och sociala principer som lärandedesign sedan operationaliserar.

### Hur lärandedesign avgör lärandeeffekter

Lärandedesign är den hävstång som avgör om AI ger [[learning-gains|lärandeeffekter]] eller bara AI-uppblåst prestation. Kunskapsbasens evidens är entydig här: **samma AI-verktyg ger stora vinster eller nettoskada beroende på hur lärupplevelsen är designad kring det.** [[instructional-guidance-genai-learning|Hou m.fl.]] visade att ett femstegs promptningsramverk grundat i lärandeteori avsevärt förbättrade högre ordningens kognitiva utfall, medan tillgång till AI ensam inte gjorde det; ramverken [[genai-mindtool-generative-learning|mindtool]] och [[airis-cognitively-activated-ai-physics-2026|AIRIS]] bevarar elevens kognitiva arbete så att varaktiga vinster (snarare än uppgiftseffektivitet) uppstår. Designval som skyddar [[learning-gains]] - strukturering som kräver ett elevförsök, [[formative-assessment]] med oassisterade utfallsmått och pedagogisk struktur som behåller eleven som agent - speglar fältets fynd (se [[learning-gains]]) att AI är en stark vinst när den handleder och en skada när den svarar. Omvänt faller dåligt designade AI-integrerade lektioner offer för [[cognitive-offloading|prestations-inlärningsgapet]], där skenbar framgång döljer uteblivet lärande.

### Praktisk vägledning för designers och utvecklare

För instruktionsdesigners, kursutvecklare och ingenjörer som bygger AI-assisterade lärupplevelser översätts kunskapsbasens fynd till handlingsbar praktik. En gräns är värd att markera innan själva praktikerna: lärandedesign så som denna sida beskriver den är designen av en kurs för en känd kohort, medan samma principer inbakade i en produkt som många kurser - undervisade av människor designern aldrig möter - kommer att använda är arbetet för [[educational-technology-developers]], där standardinställningar, konfigurerbarhet och dokumentation bär pedagogisk vikt:


**Förankra AI-generering i en strukturerad instruktionsmodell.** AI-innehåll är bara så bra som den pedagogiska struktur som ligger bakom - explicit struktur, inte AI-flyt, avgör kvaliteten. Designa kring en erkänd modell (ADDIE, Dick & Carey, rapid prototyping) och koda pedagogiska beslut explicit i stället för att lita på att modellen sluter sig till dem.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Anta ett principramverk såväl som en instruktionsmodell.** En kursnivåmodell strukturerar en design; ett publicerat ramverk sätter de kriterier som många designer bör uppfylla. Ett exempel värt att läsa i sin helhet är Digital Promises *Powerful Learning with Emerging Technology*, som organiserar sin vägledning under tre principer - evidensbaserad, elevcentrerad, färdighetsbyggande - var och en utvecklad till praktiker och strategier, och knyter [[privacy]], [[explainable-ai|förklarbarhet]] och rättvisa till särskilda praktiker som säkerhetsförpliktelser snarare än valfria tillägg.([[powerful-learning-with-emerging-technology-2025]])
**Anpassa AI-konfigurationen till uppgiften, inte till sofistikering.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] skiljer fyra lager - prompt, kontext, sele och verifierad loop - och tillämpar en princip om minsta tillräckliga lager: använd den minst komplexa konfiguration som kan ge ett verifierbart resultat, eftersom tillagd orkestrering medför kostnader för samordning, verifiering, integritet och förståelse.

**Använd rollbaserade multiagentarbetsflöden för innehållsproduktion.** I stället för en enda generisk prompt, orkestrera distinkta agenter/roller (undervisande fakultet, instruktionsdesigner, kurskoordinator) som samarbetar genom en definierad pipeline - detta speglar hur verkliga kursteam arbetar och ger mer kompletta material än en enda prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Ge instruktionsvägledning, inte bara tillgång till AI.** Oavsett om elever interagerar direkt med AI eller med AI-genererat material, driver vägledning byggd på lärandeteori (t.ex. en stegvis promptnings[[scaffolding|struktur]] grundad i generativt-lärandeprinciper) högre ordningens utfall; tillgång ensam gör det inte. Designa lärandeaktiviteten kring hur hjärnan lär sig, och behandla AI som ett kognitivt "mindtool" som utvidgar tänkandet snarare än ersätter det.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Modellera glömska och schemalägg repetition där förfallet är störst.** G4L representerar kunskapsförfall med en Ebbinghaus-glömskekurva driven av förfluten tid och repetitioner, och prioriterar de enheter som är mest utsatta för förfall i stället för att servera om det som senast fick högst poäng ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin m.fl. (2026) tillför ett operativt drag för att avgöra var AI ska komma in: dela upp en aktivitet i de komponenter som bäst görs självständigt och de som bäst kopplas till AI, och håll pedagogens omdöme centralt i uppdelningen ([[fowlin-operationalizing-learning-principles-ai|Fowlin m.fl. (2026)]]).

**Gör innehållet spårbart och granskningsbart.** Låt en mänsklig designer granska och korrigera AI-output innan den når eleverna, och strukturera AI-genereringen så att den pedagogiska motiveringen (varför detta innehåll, i denna ordning) är inspekterbar - vilket adresserar både kvalitet och de ogenomskinlighetsproblem som underminerar [[trust]]-genererad undervisning.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Granska AI-genererat media i manusstadiet, inte efter syntes.** PedaCo lägger pedagoggranskning på manuset - där pedagogiska fel är billiga att rätta - innan något renderas; bedömd instruktionsvaliditet steg från 3,07 till 3,86, medan det automatiserade lagret efter syntes bara förbättrade två av fem dimensioner ([[ai-video-dual-gatekeeping-2026|Kim, Baek och Kwak (2026)]]).

**Designa för [[accessibility]] från början.** Tillämpa [[universal-design-for-learning|UDL]]-principer när du bygger AI-verktyg och AI-genererat material så att de tjänar olika elever, i stället för att eftermontera tillgänglighet i efterhand.([[ludia-udl-ai-thought-partner-2026]])

**Planera för leveransmediet.** Instruktionsdesign för [[online-teaching-and-learning|distansundervisning och -lärande]] är inte en neutral översättning av design för fysisk närvaro - mediet förändrar vilken strukturering, bedömning och interaktion som är genomförbar, och AI mångfaldigar både möjligheterna (skalbar [[personalized-learning|individualisering]], stöd dygnet runt) och riskerna ([[academic-integrity|integritet]], [[cognitive-offloading|kognitiv avlastning]]) som designern måste planera för. Designa AI:ns pedagogiska inramning lika medvetet i online- som i närundervisningskontexter.

**Utvärdera mot ett riktmärke, inte mot magkänsla.** Om du bygger en instruktionsdesignagent, utvärdera den mot ett standardiserat, teoriförankrat riktmärke (t.ex. [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]) så att du kan mäta om förankring i ett verkligt ISD-ramverk faktiskt förbättrar output jämfört med en generisk LLM.([[jeon-isd-agent-bench-2026]])

- **AI omformar praktiken för instruktionsdesign.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] [[meta-analysis-systematic-review|systematiskt granskar]] 28 studier (2020-2025) och finner att AI hjälper designers med innehållsgenerering, mallar och individualisering, och begreppsliggörs som en medarbetare/samarbetspartner/partner snarare än bara ett verktyg - även om pedagogisk samstämmighet och praktikers beredskap kvarstår som utmaningar.

- **Den dokumenterade aktiviteten är koncentrerad till en fas av cykeln.** I en genomgång av 78 studier om AI-stödd instruktionsdesign förekommer aktivitet i designfasen i **74 av 78 studier (95%)** och i utvecklingsfasen i 44 (56%), medan analys bara når 11 (14%), utvärdering 10 (13%) och implementering 7 (9%) - och **ingen studie undersökte AI-stöd över hela ADDIE-cykeln**. Cykeln är en ambition som evidensbasen inte täcker, vilket spelar roll för alla som säljs "AI-driven kursutveckling" som en heltäckande förmåga ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **Tre AI-roller, hierarkiskt fördelade.** *Generativ* användning - AI som producerar designinnehåll på pedagogens direktiv - dominerar i **96% av studierna**; *strukturerande* användning, där AI strukturerar designerns eget resonemang, förekommer i 35%; *utvärderande* användning, där AI bedömer artefaktkvalitet, i 21%. Fältet använder överväldigande AI för att tillverka saker snarare än för att ifrågasätta sina egna designbeslut, vilket är motsatsen till den kritiska vän-konfiguration som genomgången pekar ut som pedagogiskt lovande.

## Vanliga missuppfattningar

- **"AI-lektionsplanering ger lärare tid tillbaka."** Planeringstiden föll, från 3,32 timmar i veckan till 2,51 med verktyget, men **medianläraren planerade bara 21% till 40% av lektionerna från grunden**. Tid sparades och planeringen blev inte väsentligt mer grundlig - besparingen ackumulerades i stället för att återinvesteras.
- **"Samdesign med AI är väl belagd."** En systematisk genomgång av [[wang-teacher-ai-co-design-review-2026|lärar-AI-samdesign av lärandeuppgifter]] **bekräftar mönstret i skala över 28 studier**, vilket beskriver en konsekvent praktik snarare än demonstrerar överlägsna utfall.
- **"Bedömningsmatrisen är en fast indata."** Bedömningsmatrisen fungerar som ett **förmedlande gränssnitt mellan mänsklig pedagogisk avsikt och maskinell inferens**: att behandla bedömningskriterier som **reviderbara** är det som låter instrumentet bära pedagogens avsikt. En fast matris överför maskinens förvalda inramning till bedömningen.
## Anslutna begrepp

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - Pedagogiska partnerskap
- [[online-teaching-and-learning]] - Distansundervisning och -lärande
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
- [[pedagogy]] - Paraply: pedagogiker och undervisningsstrategier inom AI-utbildning
- [[stakeholders]] - Paraply: människor och målgrupper inom AI-utbildning (elever, lärare, designers, administratörer, beslutsfattare)

## Anslutna artiklar

- [[roy-aila-lesson-planning-teacher-choices-2026]] - En uppmätt besparing i planeringstid vid sidan av fyndet att lärare bara planerar 21% till 40% av lektionerna från grunden
- [[powerful-learning-with-emerging-technology-2025]] - Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] - Lärandeanalys och GenAI i beslut om lärandedesign
- [[tang-chatbots-learning-design-2026]] - Chattbotanvändning i lärandedesign: designers dröjer vid mål och pedagogik snarare än innehållsgenerering (Tang m.fl. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] - Mönster i lärar-AI-interaktion vid lektionsdesign över erfarenhet och AI-skicklighet (Choi m.fl. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] - AI i högre utbildning: engagemang och undervisningsmetoders förmedlande roll
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] - Taxonomi (gränsobjekt) för att klassificera GenAI-lärandeaktiviteter
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
- [[ai-web-agents-lesson-design-2025]] - AI-webbagenter: en autonom webbagent utvärderar lektionsdesigner och förutsäger elevavhopp innan eleverna engagerar sig (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] - AIRIS: ett ramverk för kognitivt aktiverad AI-förstärkning i fysik
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] - Designing for Reach: sju hävstänger och eleven ensam med AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] - När ett nej ger bättre videor: dubbel grindvakt för pedagogiskt förankrat AI-innehållsskapande
- [[rhaimi-productivemath-2025]] - ProductiveMath: AI som stöd för design av produktiva misslyckanden
- [[kibar-ilgaz-ai-instructional-design-review-2026]] - AI och praktiken för instruktionsdesign: en systematisk genomgång (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] - Grafbaserad intelligent handledning för dynamiska domäner (2026)
- [[making-ai-annoying-constrained-writing-2026]] - Att göra AI irriterande med avsikt: begränsning i AI-stött skrivande (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] - Smartklassrumsmodell och D-T-E-loop som förbättrar instruktionsdesignfärdighet på avancerad nivå i matematik (Zhu m.fl. 2026)
- [[ai-modeling-problem-generation-platform-2026]] - AI-driven plattform som genererar matematiska modelleringsproblem (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] - Lärar-AI-samdesign av lärandeuppgifter: trender och perspektiv (Wang m.fl. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] - Rollarkitektur i AI-designade differentierade gruppaktiviteter (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] - LLM:er som agenter för iterativ pedagogisk design
