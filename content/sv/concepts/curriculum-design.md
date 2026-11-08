---
title: "Kurrikulumdesign"
created: "2026-06-02T10:44:35-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks, learning-commons]
updated: "2026-11-08T07:46:14-05:00"
translation_of: "concepts/curriculum-design"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

> **Kurrikulumdesign** — processen att planera och strukturera vad som undervisas över kurser, program och institutioner, inklusive lärandemål, innehållssekvensering, bedömningsstrategier och färdighetsprogression. I AI-eran måste kurrikulumdesign balansera grundläggande kunskaper mot nya AI-kompetenser och avgöra inte bara vad eleverna lär sig utan hur de lär sig att arbeta med och kritiskt utvärdera AI-verktyg.

## Frågor att fundera över

- Kurrikulumdesign frågar vad eleverna ska lära sig på programnivå, medan lärandedesign frågar hur på kursnivå. När AI omformar en disciplin, vilket av dessa två lager tycker du bör förändras först?
- I takt med att [[generative-ai|generativ AI]] automatiserar arbete på implementationsnivå menar en del att kursplaner måste förskjutas mot systemdesign, abstraktion och [[critical-thinking|kritisk utvärdering]]. Vad tror du att eleverna skulle förlora om färdigheter på låg nivå tonades ned?
- Omedesign av kursplaner i AI-eran ramas ofta in som en balans mellan verktygsflyt och grundläggande kunskaper. Var har du sett den balansen tippa för långt åt ena hållet?
- SAIL-ramverket behandlar AI-kompetens som strukturerad över åldrar och utformad för att hantera djupare "digitala klyftor" bortom enbart tillgång. Hur skiljer sig det att bädda in AI-kompetens i en hel kursplan från att lägga till en enda AI-kurs?
- Om varje disciplin nu behöver AI-kompetenser inbäddade i sig, vem ansvarar för kursplaneförändringen — lärare, program eller institutioner — och vad behöver pedagoger för att lyckas med den?
- En kursplan är en sekvens av färdigheter över år, inte bara en lista av ämnen. Hur förändrar den längre vyn huruvida en "AI-kompetensenhet" faktiskt fäster?

## Introduktion

Kurrikulumdesign handlar om utbildningens *vad* på programnivå och kompletterar [[learning-design|lärandedesign]] som handlar om *hur* på kursnivå. Artiklarna i denna kunskapsbas utforskar hur AI omformar kursplaner över discipliner — från mjukvaruutveckling till arkitektur till grön utbildning — och hur pedagoger designar kursplaner som bäddar in AI-kompetens utan att offra disciplinära grunder.

### Centrala forskningsteman

**Omedesign av kursplaner för AI-eran** är den centrala utmaningen. **[[reshaping-cs-education-genai|Lee m.fl.]]** syntetiserade fynd från internationella workshopar om att omforma grundutbildningen i [[cs-education|datavetenskap]] och hävdade att i takt med att GenAI automatiserar programmering på implementationsnivå måste kursplanerna förskjutas mot systemdesign, abstraktion och kritisk utvärdering — samtidigt som detaljer på låg implementationsnivå tonas ned. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** formaliserade Agentic Software Engineering som en egen disciplin med en 21-modulers kursplan inriktad på "avsiktens utveckling" och den utövarkunnskap som krävs för att hantera [[agentic-ai|AI-agenter]]. Båda kopplar till [[ai-literacy]] och [[scaffolding|strukturering]].

Genom att granska förändringen som systemisk snarare än additiv triangulerar [[rewriting-curriculum-genai-pedagogy-2026|Sabani m.fl. (2026)]] en [[meta-analysis-systematic-review|scoping-genomgång]], bibliometrisk kartläggning av 209 poster, 36 artiklar och tio intervjuer med akademiska ledare till fem förskjutningar — bland annat att kunskapsöverföring viker för kapacitetsutveckling och lokal experimentering för institutionell styrning.

**Kartläggning och analys av kursplaner** använder AI för att förstå befintliga kursplaner. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng m.fl.]]** analyserade 23 kursplaner från AI-assisterade mjukvaruutvecklingskurser, identifierade gemensamma teman — [[prompt-engineering|promptteknik]], kodgranskning med AI, [[ethics|etiska överväganden]] — och härledde designvägledning som betonar balansen mellan verktygsflyt och grundläggande kunskaper. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** tillämpar komputationella metoder för att jämföra datavetenskapskursers struktur mellan institutioner.

Viktningen förändrar vad en kursplaneanalys rapporterar: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath m.fl. (2026)]] lät GPT-o3-mini fördela 100% över sju företagskompetenser för var och en av 48 bedömningsuppgifter, med Krippendorffs alpha på 0,81 mot expertvikter, men överensstämmelsen blev negativ för kompetenser som beskrivningarna aldrig uttryckligen anger (-0,19).

**Modulär struktur överlever aktuellt innehåll.** Ett mönster återkommer där fältet rör sig snabbare än granskningscykeln: en stabil kärna av [[ai-literacy|AI-kompetens]], kritisk värdering, biasdetektering och [[ethics|etik]], med specialitetsinnehåll och lokalt tillgängligt verktygsinnehåll kopplat som moduler och reviderat var sjätte till tolfte månad ([[bursic-ai-residency-education-curriculum-2026|Bursic m.fl. (2026)]]). [[medical-education|Läkarutbildning]] på avancerad nivå är det angivna fallet, men principen generaliserar: programmet förbinder sig till kompetenser som överlever verktygsomsättning och schemalägger det verktygsspecifika lagret för utbyte.

**Integrering av AI-kompetens** bäddar in AI-kompetenser över discipliner. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** tillhandahåller ett strukturerat ramverk för AI-kompetens som är tillämpligt över alla åldrar och utbildningsstadier och hanterar [[digital-divide|digitala klyftor]] på andra och tredje nivån. **[[tracing-genai-literacy-interaction-patterns]]** undersöker hur AI-kompetens utvecklas genom interaktionsmönster. **[[hingle-collaborative-ai-literacy-2025]]** utforskar samarbetsinriktade angreppssätt för att utveckla kursplaner i AI-kompetens och kopplar till [[collaborative-learning|samarbetslärande]].

LearnAI visar hur en inbäddad version ser ut: ett brett exponeringslager av korta presentationer inom 18 befintliga kurser över fem discipliner (293 studenter), kombinerat med frivilliga en-till-en-samskapandesessioner som leds av utbildade grundstudenthandledare, så att elever med blandad förmåga möter AI-uppgifter på sin egen nivå ([[learnai-just-in-time-ai-cocreation-university-2026|Qu m.fl. (2026)]]).

Integreringen i praktiken släpar efter ramverken. [[critical-media-literacy-education-2026|Santos-Albardía m.fl. (2025)]] fann att bara 13,8% av tillfrågade utbildnings- och journalistikstudenter uppgav att deras kursarbete behandlade kritisk medieanalys, mot 97,8% som bedömde det som viktigt, och deras expertintervjuer spårade gapet till [[teacher-education|lärarutbildning]] som prioriterar tekniska och instruktionella färdigheter framför medieutbildning.

En PRISMA-genomgång av 39 STEAM-studier (2016–2025) fann en parallell obalans i AI-kompetenselement: implementationerna utvecklade tekniska kompetenser — grundläggande AI-begrepp, [[computational-thinking|komputationellt tänkande]], [[statistics-and-data-science-education|datakompetens]] — men underutvecklade etisk medvetenhet, kreativ fantasi och att skapa, hantera och designa med AI, så det praktiska svaret är att granska varje enhet mot dem ([[niri-steam-ai-literacy-review-2026|Niri m.fl., 2026]]).

[[student-experience|Elevrösten]] är en annan designinput: 84% av 166 sistaårsstudenter i företagsekonomi ville att GenAI skulle undervisas i deras kurser och 85% såg det som avgörande för anställningsbarhet, medan bara 7% hade lärt sig om det från sitt universitet ([[rook-plumb-genai-curricula-student-insights-2026|Rook & Plumb (2026)]]).

En genomgång av 42 studier om [[ai-education|AI-utbildning]] före universitetet finner att kursplanerna rör sig från tekniskt innehåll mot kompetensbaserade modeller byggda på ramverk som AI4K12 och Five Big Ideas in AI, med [[ai-literacy]] behandlad som en ämnesövergripande kompetens medan standardiserade instrument för att bedöma den fortfarande saknas ([[caruana-pre-university-ai-education-slr-2026|Caruana m.fl. (2026)]]).

Lärare och arbetsgivare var överens om betydelsen av bara en av 26 AI-färdigheter — att sätta realistiska förväntningar på AI-förstärkt arbete — och bara tre av de 26 undervisades av hälften eller fler av lärarna, vilket är rapportens bevis för ett kompetensgap mellan högre utbildning och arbetsgivare ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

Design av maskininlärningsaktiviteter i K-12 stannar på ytan: en genomgång bakom ICE-T-ramverket fann att osynlig användning, knappinteraktion och modelldistribution står för nästan 60% av kodade handledda aktiviteter, att öppen skapande förekom bara två gånger, och att tekniska och samhälleliga perspektiv samförekom i bara cirka 3% av aktiviteterna ([[icet-ml-education-trust-2026|Haritz m.fl., 2026]]).

**[[discipline-specific-aied|Domänspecifik]] kursplaneinnovation** tillämpar kurrikulumdesign på specifika fält. **[[genai-architecture-education]]** utforskar hur generativ AI omformar [[pedagogy|pedagogiken]] i arkitektonisk design. **[[talebzadeh-ai-green-education-2026]]** undersöker AI-integrering i kursplaner för grön utbildning. **[[connected-ai-lesson-planning-vietnam]]** och **[[llm-cultural-relevance-k12]]** behandlar [[culturally-relevant-pedagogy|kulturellt relevant kurrikulumdesign]].

**Bädda in AI i disciplinen i stället för vid sidan av den.** En AI-kursplan i tre nivåer (introduktion, tillämpning, avancerad) fogade in [[machine-learning|maskininlärning]] i befintliga termotekniska ämnen över en kurs på 39,1 timmar i stället för att lägga till valbara datavetenskapskurser, vilket undvek extra belastning för maskinteknologstudenter och frigjorde kursplan, data och kod öppet ([[mechanical-engineering-ai-curriculum-2026|Li m.fl. (2026)]]).

Ett journalistikfall visar den värderingsförst-varianten: en triadisk struktur av värderingar–processer–kompetenser flyttade eleverna från enbart mänsklig rapportering till AI-integrerat arbete, ändå uppgav 8 av 9 (89%) förtroende för etiska beslut medan enkätsvar om författarskap och bias tydde på bara ytlig förståelse ([[ying-genai-journalism-assessment-2026|Ngu och Weller (2026)]]).

**[[governance|Institutionella]] ramverk** hanterar kursplaneförändring i skala. **[[finkelstein-principled-ai-education-2025]]** och **[[finkelstein-principled-ai-education-2025]]** tillhandahåller principer för att integrera AI i utbildningsprogram. **[[ai-adoption-training-public-sector]]** undersöker hinder för att anta AI-kursplaner inom offentlig utbildning.

**Sekvensering av AI över programmet.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli m.fl.]] föreslår ett "håll tillbaka, förstärk sedan"-ramverk som sekvenserar generativ AI på programnivå: håll tillbaka ett generativt verktyg medan en förmåga formas, och återställ det sedan för att förstärka förmågan när eleven kan styra det och bedöma dess avkastning. Styrt av ett kriterium för formande kontra avlastning (huruvida ett arbetsstycke bygger en förmåga eller bara passerar den genom verktyget) kopplar ramverket kurrikulumdesign till [[cognitive-offloading|kognitiv avlastning]], [[self-regulated-learning|självreglerat lärande]] och [[academic-integrity|akademisk integritet]], med svårförfalskade kontrollpunkter vid varje övergång från tillbakahållande till förstärkning.

Hävstången för de högsta nivåerna är inte mer kursarbete: över 89 sponsrade capstoneprojekt var avancemanget från [[career-development-and-readiness|arbetsmarknadsberedskap]] nivå 6 till 7 villkorat av branschintegrerad erfarenhet — co-op-program och Manufacturing Extension Partnership-projekt — så examina behöver arbetsintegrerat lärande i stället för ännu en teknisk valbar kurs ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith m.fl. (2026)]]).

En kursplanekonsekvens av modellkapaciteten är att AI-resistent design går ut i tid. Datavetenskapslärare beskrev hur de kalibrerade uppgifter mot vad modellerna ännu inte kunde göra och såg kalibreringen förfalla — en cybersäkerhetslärares problem krävde genuin [[problem-solving|problemlösning]] sju eller åtta månader tidigare och löstes sedan helt enkelt — och en facilitator uppskattade hållbarheten till ungefär en termin. Workshopens strukturella fynd är att nästan varje anpassning gjordes av en enskild lärare inom en enda kurs, utan den institutionella samordning som ett varaktigt kursplanesvar skulle kräva ([[computing-assessment-genai-workshop-report-2026|Akbar m.fl., 2026]]).

**Helkursanpassning när generativ AI är tillåten.** En omedesign 2026 av en introduktionskurs i [[physics-education|fysik]] med inriktning på kärn- och partikelfysik ([[ai-particle-physics-education-redesign-2026|Mikhasenko m.fl.]]) integrerade tre aktivitetstyper med distinkta roller — föreläsningar för begrepp och notation, övningar för standardmässig analytisk praktik, och hemarbete som en undersökande "forskningsformad" komponent av ovanligt svåra problem med flera metoder. Den rapporterade friktionen (en odeklarerad programmeringsförkunskap, otillräcklig tid att förstå snarare än bara få svar, och bristande samstämmighet mellan föreläsningar, övningar, hemarbete och [[summative-assessment|tentamen]]) illustrerar att tillåtelse av generativ AI tvingar fram anpassningsarbete över hela kursen snarare än en ändring av en uppgiftstyp; deras rekommenderade struktur behåller det AI-tillåtna undersökande arbetet som avancerade uppgifter med bonuspoäng medan den oassisterade skriftliga tentamen avgör betyget.

**Anpassningens djup, inte användningens frekvens, skiljer integrationsmönster.** Över 17 affärsmodulfall bäddade sex in GenAI systematiskt genom undervisning, lärande och bedömning (konstruktivt), nio gjorde det inkonsekvent (blandat) och två sporadiskt (ad hoc); de konstruktiva fallen rapporterade starkast engagemang, kapacitet och kursplanerelevans ([[zhou-constructive-alignment-genai-business-2026|Zhou m.fl. (2026)]]).

**Råd om konstruktiv länkning under kritisk granskning.** Där källorna ovan rapporterar om anpassning i praktiken läser [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes m.fl. (2026)]] vägledningen i sig som en diskurs. Deras [[qualitative-research|kritiska diskursanalys]] av 14 texter av grå litteratur publicerade från november 2022 till april 2025 — mest institutionella sidor och kapitel från centralt positionerade [[educational-development|enheter för lärande och undervisning]] — fann att konstruktiv länkning presenterades som ett effektivitetsproblem: generativ AI var "ett effektivt och ändamålsenligt sätt att utforma bedömningsmatriser" som kunde "effektivisera processen", antropomorfiserad som "en utbildningsexpert och assistent", en "sparringpartner" eller "en intelligent assistent inom instruktionsdesign", medan akademisk personal bara bidrog med "ämnesexpertis" och verktyget tog på sig "det tunga arbetet med att utveckla lärandemål, organisera kursinnehåll ... och anpassa kurskomponenter". Kopiera-och-klistra-promptrecept och numrerade mallar ramade in konstruktiv länkning som en standardiserbar produkt och gav tre felmoder: performativitet (anpassning som bara ser anpassad ut), utradering av situerad och kritisk kontext, och ytlig konstruktiv länkning som sammanblandar anpassning med den konstruktiva dimensionen. Deras bot omsekvenserar kurrikulumdesignens arbetsflöde — pedagoger måste förstå konstruktiv länkning tillräckligt väl för att styra, utvärdera och förkasta AI-resultat innan de delegerar någon del av den — och begränsar varje verktyg till en institutionell [[rag|retrieval-förstärkt]] agent grundad i lokal policy, bedömningsmatriser och examensmål, med en "liminal handledare"-roll som utvidgar snarare än ersätter [[educational-development|utvecklingsrelationen]].

**Generering av kursplaneanpassade modelleringsuppgifter.** AI-drivna plattformar kan hantera lärares brist på tid och resurser för att designa högkvalitativa uppgifter i [[math-education|matematisk modellering]] genom att generera kursplaneanpassade problem och pedagogiska rekommendationer grundade i designprinciper och [[rag|retrieval-förstärkt]] generering — ett angreppssätt illustrerat med direkt variation i gymnasieskolans matematik ([[ai-modeling-problem-generation-platform-2026]]). Kurslitteraturen i sig är nu också ett genereringsobjekt: Sidorkin (2026) ersatte en kommersiell lärobok med veckovis AI-genererade texter i en forskarutbildningskurs i utbildningsledarskap, och även om eleverna bedömde dem som användbara och 75 procent instämde i att de lärde sig mer än i en jämförbar kurs, bar de 4 487 sidorna med loggar APA-liknande löpande hänvisningar på bara cirka 0,80 procent av sidorna och parade ett namngivet campus eller system med bestämda policypåståenden på ungefär 1,03 procent av sidorna utan verifierbar källa. Lärdomen för kursmaterial är att behandla genererade texter som utkastsproduktion under lärargranskning, att budgetera för lärararbetet med promptdesign och verifiering, och att välja ut granskade källor i assistenten i stället för att lämna källkvaliteten för eleverna att sluta sig till av kontexten.

**AI-assisterad lektionsplanering i lagret från kursplan till klassrum.** Vid den punkt där en kursplan blir en undervisad lektion jämförde [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo och Tahir (2025)]] experimentellt lärargenererade planer med ChatGPT-assisterade planer i barns [[stem-education|STEAM]]-[[arts-design-and-media-education|konstundervisning]] och fann att de AI-assisterade planerna bedömdes signifikant högre av sex expertprofessorer (median 20,5 mot 17,6, p = 0,002, stor effekt). De visar att utbytet beror på hur läraren delegerar: den rekommenderade metoden fyller innehållsluckor i en självskisserad lektion (vilket bevarar lärarens [[agency|autonomi]] i designen) i stället för att delegera hela planen. De bidrar också med en promptmall för roll–instruktioner–slutmål för reproducerbar, kvalitetskontrollerad generering — bevis för att AI-lektionsplanering är starkast när den är inbäddad i, inte ersätter, lärarens kursplanebeslut. Inom naturvetenskapsundervisningen når expertvalidering en parallell slutsats om plattformsdesign: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli och Yildirim (2026)]] lät elva specialister i [[science-education|naturvetenskapsdidaktik]] bedöma ChatGPT-4 och ett utbildningsinriktat verktyg (Teacher's Buddy) på sjätteklassplaner anpassade till Turkiets reviderade kursplan och modellen Engineering [[design-based-research|Design-Based]] Learning. Den utbildningsinriktade plattformen fick högre poäng på alla åtta kvalitetskriterier — bland annat återkopplingsintensiva stadier och kursplaneanpassning — vilket är bevis för att inbäddad pedagogisk struktur i en AI ger bättre anpassade resultat. Ändå föredrog en del experter fortfarande den allmänna planen för dess starkare social-emotionella betoning, och 7 av 11 bedömde planerna som "användbara med korrigering" snarare än direkt användbara. Valet av plattform och promptinramning, inte bara AI:n i sig, formar hur väl genererade planer anpassas till kursplanestandarder och processmodeller.

Struktur, inte promptformulering, är det som gör AI-utkast pålitliga i produktion: [[curriculum-as-code-instructional-design-2026|Paiva (2026)]]:s Curriculum-as-Code-pipeline beskärde kontexten aggressivt och genererade material sektion för sektion över 28 projektkontexter, vilket skar ned lärarnas förberedelsetid från ungefär åtta till två timmar per instruktion och lämnade inga begreppsmässiga eller matematiska [[hallucination-risk|hallucinationer]] för [[human-in-the-loop-ai|mänsklig granskning]] att fånga.

### Kopplingar till närbesläktade begrepp

Kurrikulumdesign kopplar direkt till [[learning-design]] — kursplanen definierar vad, undervisningen definierar hur. Det kopplar till [[ai-literacy]] eftersom inbäddning av AI-kompetenser är en central kursplaneutmaning, till [[teacher-role]] och [[educational-development]] eftersom kursplaneförändring kräver lärarförberedelse, och till [[scaffolding|strukturering]] eftersom välutformade kursplaner strukturerar färdighetsutveckling över kurser och år. Kopplingarna till [[higher-ed]] och [[k-12]] speglar kurrikulumdesignens relevans över utbildningsnivåer.

**Att välja ett ramverk för AI-kompetens innebär att välja ett vokabulär som ingen har korsmappat.** I en scoping-genomgång av 50 K-12-ramverk fann [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026|Kharbach m.fl. (2026)]] att kompetensdefinitionerna konvergerade mot kognitiva, affektiva, beteendemässiga, etiska och sociala dimensioner medan etiketter och konstruktioner inte stämde överens. Bara ABCE-ramverket närmade sig en gemensam mättradition, validerat i Hongkong, Shanghai och Taiwan, och progression över årskursband föreslogs upprepade gånger och testades ingenstans.

## Vanliga missuppfattningar

- **"En [[llm|LLM]] kan kartlägga en kursplan när den väl validerats med hög reliabilitet."** GPT-o3-mini fördelade **100% över sju företagskompetenser för var och en av 48 bedömningsuppgifter** och nådde **Krippendorffs alpha på 0,81** mot expertvikter — och **överensstämmelsen** bröt samman för enskilda kompetenser. Hög övergripande reliabilitet med ojämn överensstämmelse är mönstret att kontrollera innan man litar på kartläggningen.
- **"Att bädda in AI-kompetens innebär att lägga till en kurs."** LearnAI visar den inbäddade formen: ett **bredexponeringslager av korta presentationer inom 18 befintliga kurser över fem discipliner (293 studenter)**. Exponeringen var fördelad över kursplanen i stället för samlad i en enhet.
- **"Eleverna kommer redan kunna utvärdera medier kritiskt."** Bara **13,8% av tillfrågade utbildnings- och journalistikstudenter** uppgav att deras kursarbete behandlade kritisk medieanalys, mot **97,8% som bedömde det som viktigt**. Gapet mellan att värdera en färdighet och att få den undervisad är den kursplanemässiga öppningen.

## Anslutna begrepp
- [[pedagogical-partnerships]] — Pedagogiska partnerskap
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — Samlingsbegrepp: pedagogiker och undervisningsstrategier i AI-utbildning
- [[recommender-systems-and-learning-paths]]

## Anslutna artiklar
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Viktad, expertvaliderad kompetenskartläggning för ackreditering
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Kritisk diskursanalys av vägledning om GenAI för konstruktiv länkning (McInnes m.fl. 2026)
- [[icet-ml-education-trust-2026]] — Addressing Trust in AI Systems through Education: A Didactic Perspective
- [[refrain-amplify-genai-curriculum-2026]] — Ramverket håll tillbaka–förstärk för sekvensering av GenAI (Torres-Sahli m.fl. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Projektbaserad AI-utbildningskursplan i termoteknik
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Ramverket Workforce Readiness Level för smart tillverkning i AI-eran
- [[rewriting-curriculum-genai-pedagogy-2026]] — Att skriva om kursplanen: GenAI-driven pedagogisk förändring
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — AI Skills Framework: 26 bedömningsbara färdigheter för kursplanekartläggning
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: just-in-time AI-samskapande över discipliner
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[niri-steam-ai-literacy-review-2026]] — STEAM-utbildning för AI-kompetens: systematisk genomgång
- [[caruana-pre-university-ai-education-slr-2026]] — Att förbereda elever och lärare för en AI-driven framtid: SLR om AI-utbildning före universitetet (Caruana m.fl. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-driven plattform som genererar matematiska modelleringsproblem (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI i partikelfysikundervisning: forskningsproblem och grundläggande färdigheter
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? Report from an online workshop on computing assessment in the age of generative AI
- [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026]] - kompetensramverk konvergerar mot fem dimensioner utan gemensamt vokabulär eller korsmappning
- [[bursic-ai-residency-education-curriculum-2026]] — Hinder för att integrera AI i specialistläkarutbildningens kursplaner: kvalitativa intervjuer med tolv läkarledare
