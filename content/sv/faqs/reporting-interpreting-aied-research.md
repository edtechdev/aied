---
title: "Vilka är bästa praxis för att rapportera och tolka forskning om AI i utbildning?"
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
updated: "2026-10-29T17:10:58-04:00"
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Ditt utkast har en rubriksiffra i sammanfattningen, och en granskare har just frågat vad kontrollgruppen faktiskt gjorde. Eller du är granskaren, med en metaanalys i handen vars poolade effekt är 0,67 och vars metodavsnitt är en och en halv sida. Eller din institution skriver vägledning för hur personalen ska rapportera AI-studier och vill ha något mer specifikt än ”följ standarderna”.

Sex utelämnanden avgör de flesta av dessa fall: vilket AI-system som användes, vad det var konfigurerat att göra, vilken pedagogisk roll det spelade, om människor utformade eller granskade dess output, vad utfallsmåttet faktiskt fångade, och vad författarna gjorde åt bias, kostnad och begränsningar. ”Obedömbart” är den ärliga domen när de saknas, och det är en annan dom än ”motbevisat”.

## Kortversionen

**1.** Beskriv AI:n som en behandling, inte som en leverantör. Modell, version, konfiguration, prompter, roll och vem som utformade eller granskade outputen.

**2.** Namnge den pedagogiska grunden och den aktiva jämförelsen. Ett produktnamn är inte en metod, och undervisning som vanligt är inte en rättvis kontroll.

**3.** Se till att måttet matchar påståendet, inklusive huruvida utfallet mättes fördröjt och utan hjälp.

**4.** Rapportera den osäkerhet analysen faktiskt har: beroende effekter, varians mellan studier, prediktionsintervall, delgruppsstorlekar, publikationsbias.

**5.** Validera varje automatiserat omdöme, med en namngiven guldstandard och en namngiven bedömare.

**6.** Rapportera motvikterna: styrning, beräkningskostnad, din egen AI-användning, nollresultat och bara de referenser du har kontrollerat.

## Beskriv AI:n som en behandling någon skulle kunna bygga om

Det här är kontrollen som de flesta inlämningar misslyckas med. RAISE-ramverket (*Reporting AI Studies in Education*, Allison 2026) är en checklista med 30 punkter över tio tematiska domäner, och dess diagnostiska påstående är specifikt: inlämningar utelämnar rutinmässigt vilken modell som användes, hur den konfigurerades, vilken roll den spelade och huruvida mänskliga aktörer utformade eller granskade dess output. Granskarna lämnas då med fyra obesvarbara frågor. Vad gjorde AI:n egentligen? Var den nödvändig? Är detta replikerbart? Är lärandepåståendena trovärdiga?

RAISE löper från pedagogisk motivering via API-nivåspecifikation, interaktion mellan inlärare och AI, tillgänglighet och kulturell passform, deltagare och miljö, mänskligt engagemang, design, etik, transparens och reproducerbarhet, till begränsningar. Dess följedokument Ethics and Risk Matrix täcker risker för inlärarens [[agency|autonomi]], [[equity-in-ai-education|likvärdighet]], data[[governance|styrning]] och algoritmisk transparens. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah och Gašević (2026)]] erbjuder ett strömlinjeformat alternativ. TEP-AIED fogar samman transparens, etik och pedagogik till en ömsesidigt beroende struktur, levererar en riktlinjetabell mappad mot sju artikelavsnitt och ber författare lägga till ett metodunderavsnitt med titeln ”Transparency, Ethics, and Pedagogy Considerations”. Deras skäl är praktiskt: RAISE är omfattande och för finkornigt för rutinmässig empirisk användning. Redogörelsen hör under [[ai-use-disclosure|redovisning av AI-användning]] och är det som gör påståenden om [[privacy|integritet]] och [[ethics|etik]] kontrollerbara.

Den pedagogiska motiveringen kommer först i RAISE eftersom AI inte är ett neutralt verktyg. Värdet beror på samstämmigheten mellan lärandeproblemet, en teoretisk grund och mappningen från mål till utfallsmått. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] fann att alla utom två av 14 granskade metaanalyser definierade behandlingen som ett verktyg, ChatGPT eller GenAI eller ”AI” i allmänhet. Ett produktnamn är inte en [[pedagogy|pedagogik]]. Att behandla exponering för ChatGPT som en gemensam intervention är jämförbart med att göra en metaanalys av effekterna av ”papper”.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich m.fl. (2025)]] för samma argument för primärstudier. När de granskade en delmängd av de jämförelser som ligger bakom en framträdande metaanalys fann de att bara 21 % hade en väldefinierad behandling, en kontrollgrupp och ett giltigt lärandemått. Den rapporterade effektstorleken (g = 0,7) översteg också den för specialbyggda [[intelligent-tutoring|intelligenta handledningssystem]] (0,66), och den klyftan är en varningssignal: en behandling som slår specialbyggd handledning är förmodligen en samling olika saker som bär en och samma etikett.

Provet är en enda fråga: skulle en kompetent läsare kunna bygga om din intervention enbart utifrån metodavsnittet och få samma sak?

## Bestäm vad ditt mått ger dig tillstånd att påstå

I O'Neills evidensgranskning av 46 slumpmässigt utvalda primärstudier uppvisade 28 (61 %) validitetsproblem. Missförhållande mellan beroende variabel och påstående var vanligast (n = 15), följt av missförhållande mellan oberoende variabel och påstående (n = 11), problem med experimentell design (n = 7), problem med datautvinning (n = 6), avsaknad av kontrollgrupp (n = 6) och icke-slumpmässig gruppindelning (n = 6). Flerdimensionella utfall poolades rutinmässigt som om de var utbytbara, med testresultat, hemarbeteskvalitet, [[motivation]], [[self-efficacy|self-efficacy]], attityder och [[student-engagement|engagemang]] hopfogade till en enda siffra för ”akademisk prestation”.

Två rapporteringsvanor förhindrar det. Ange vilket konstrukt instrumentet mäter och att det validerades för den populationen; [[self-report-measures|självrapporterade mått]] visar var perceptionsbaserade mått avviker från beteende, och [[assessment-validity|bedömningsvaliditet]] täcker konstruktvaliditet. Rapportera sedan ett utfall som inte beror på inlärarens uppfattning om hjälpmedlet. Omedelbar uppgiftsprestation under assistans är ingen [[learning-gains|lärandevinst]], och [[cognitive-offloading|kognitiv avlastning]] är den mekanism som mest sannolikt skiljer de två åt. [[verification-quality-reliance-calibration-genai-2026|2026 års minigenomgång av 493 poster och 14 prioriterade studier]] fann att ingen mätte verifieringsframgång och det efterföljande beroendebeslutet tillsammans mot en oberoende bedömd standard för outputkvalitet, och få tittade förbi omedelbar prestation till fördröjt bibehållande eller [[transfer-of-learning|överföring]].

Ange taket uttryckligen i diskussionen. En studie som mätte ett quiz med verktyget öppet kan stödja ett påstående om assisterad prestation. Den kan inte stödja ett påstående om vad studenterna lärde sig, och den meningen kostar en rad.

## Rapportera den osäkerhet din analys faktiskt har

För synteser, rapportera hantering av beroende effekter, varians mellan studier, prediktionsintervall och bedömning av publikationsbias. I² ensamt gör inte jobbet. O'Neill fann att rapporterad heterogenitet var allvarlig varhelst den angavs, från 77,2 % till 94,4 % över 13 metaanalyser, med 12 över 80 %, och aldrig upplöst: ingen moderatoranalys nådde minimistorleken på tio studier per delgrupp. Tolv metaanalyser behandlade beroende effektstorlekar från samma studie som oberoende, vilket blåser upp den skenbara evidensen. Bara fyra rapporterade varians mellan studier (τ²) och bara två ett prediktionsintervall, och båda intervallen inkluderade noll. Publikationsbias bedömdes inte giltigt någonstans i uppsättningen.

Heterogenitetssiffror behöver sin modell angiven, eftersom I² är precisionsberoende. [[limitations-in-aied-research|Begränsningar i AIEd-forskning]] dokumenterar en syntes på I² = 82,98 % under en fixeffektmodell och 15,75 % under slumpeffekter. En läsare som bara får den första siffran kan inte avgöra hur inkonsekvent materialet är. Rapportera τ² och ett prediktionsintervall vid sidan av, vilket också är den konvention som [[meta-analysis-systematic-review|översiktslitteraturen]] efterfrågar.

Rabattera sedan ditt eget huvudresultat. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš m.fl. (2026)]] poolade 1 840 effektstorlekar från 67 metaanalyser och fann att när publikationsbias modelleras faller medeleffekten till ungefär en tredjedel av det publicerade medianvärdet (SMD = 0,196 mot 0,67), med ett prediktionsintervall från -1,521 till +1,908. Det intervallet spänner från betydande skada till betydande nytta för en hypotetisk ny studie. Det är den mest användbara siffran i artikeln och den som mest sannolikt faller bort ur sammanfattningen.

## Säg hur långt påståendet räcker

Rättvisa och räckvidd brister på samma sätt: en stor effekt som betyder mindre än den ser ut att göra. Elva av de 14 granskade metaanalyserna satte ingen befolkningsgräns, så ”studenter” spände från barn till medicinska praktikanter. En enda kurs, institution, disciplin eller ett enda land ger inget tillstånd till ett allmänt påstående, och resultat för ett verktyg överförs sällan till ett annat.

Tre förklaringar står för de flesta stora effekter, och var och en är rapporterbar. Nyhet är en. Extra tid på uppgiften är en annan. Den tredje är ett jämförelsevillkor som fick undervisning som vanligt i stället för en aktiv kontroll. Rapportera vad kontrollen faktiskt gjorde, hur mycket tid varje arm lade ner och hur nytt verktyget var. Ange också befolkningsgränsen, eftersom effekter skiljer sig mellan inlärargrupper och en oangiven gräns är det som låter en poolad siffra stå för dem alla; [[differential-effects-across-learner-groups|Differentiella effekter mellan inlärargrupper]] redogör för variationen.

Behandla verktyget som ett rörligt mål. Proprietära system ändras utan varsel, så ett rön är bundet till en modellversion, och den [[benchmark|benchmark]] som hänförde i en utgåva håller kanske inte i nästa. Version och åtkomstdatum hör hemma i metodavsnittet av det skälet, inte bara för reproducerbarheten.

## Validera de automatiserade omdömena

[[ai-ed-evaluation|AIEd-utvärdering]] delegerar i allt högre grad poängsättning till modeller, vilket gör valideringsförfarandet till en del av resultatet i stället för en bilaga. Khan Academys redogörelse för sina mått för sin [[intelligent-tutoring|AI-handledare]] rapporterar att kognitivt engagemang poängsätts av en [[llm|LLM]]-bedömare kalibrerad mot mänskliga pedagogiska experter på F1 0,83, och att måttförflyttningarna kom från mer än 40 levande experiment på fem månader snarare än från offlineutvärdering ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi m.fl. 2026]]). [[machines-misread-pedagogical-quality|Tseng m.fl. (2026)]] visar att oenighet mellan människa och maskin om kvaliteten på [[formative-assessment|förkunskapsfrågor]] är systematisk snarare än slumpmässig, och att operationaliseringen av bedömningsmatrisen betyder mer än att prompta med resonemanget först.

Överensstämmelse med mänskliga kodare är en annan sak än kvalitet, och att rapportera den som om den vore kvalitet är ett mål för granskarna. [[agreement-not-quality-llm-coding-verification|Liu m.fl. (2026)]] lät en oberoende expert bedöma 855 parvisa koduppsättningar blint för källa. Överensstämmelsen mellan människa och LLM låg på ett genomsnittligt Jaccard-värde av 0,30 mot 0,52 för överensstämmelse mellan människor, medan den blinda verifieraren föredrog mänsklig och maskinell kodning i praktiskt taget samma utsträckning (51,5 % mot 48,5 %, p = 0,537). Rapportera kalibreringsmålet, guldstandarden och vem som avgjorde oenigheten. De tre posterna är det som låter en läsare avgöra hur mycket vikt den automatiserade poängen kan bära.

## Redovisa kostnaderna och din egen användning

En genomgång av alla konferensartiklar från AIED 2025 fann ett mönster av LLM-användning utan redovisning: de flesta projekt använde LLM:er, och färre än en handfull rapporterade resursförbrukning eller koldioxidavtryck. Den artikeln levererar en öppen metod med mätverktyg för lokal och molnbaserad hårdvara, plus en formel för att uppskatta beräkningskostnaden för frontier-modeller vars parameterantal inte är offentliga. Dess argument är att underlåtenhet att rapportera dessa kostnader i sig är en etisk angelägenhet. Datastyrning, samtycke, tillgänglighet och kulturell passform hör till samma stycke (RAISE-punkter; [[universal-design-for-learning|universell design för lärande]], [[accessibility|tillgänglighet]]). [[equity-ethics-pedagogical-safety-research|Likvärdighet, etik och pedagogisk säkerhet i forskningen]] innehåller den fylligare behandlingen.

Din egen användning av AI i forskningsprocessen behöver samma redovisning. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta och Lins PRISMA-LLM-analys]] av 888 artiklar om översiktsautomatisering visar hur ojämn den redovisningen är. Sedan 2023 rapporterade 38,0 % av artiklarna om programvara och produkter ingen utvärdering alls, mot 9,3 % av LLM-artiklarna. Genomsnittlig redovisningsrikedom var 6,3 för LLM-artiklar och 3,3 för artiklar om programvara och produkter. 84,1 % av LLM-användningen byggde på proprietära eller värdbaserade system, med bara 4,9 % öppna vikter. Deras ramverk skiljer redovisning av implementering från konsekvenskänslig utvärdering över fem redovisningsnivåer, vilket är en användbar mall för att beskriva vad ett verktyg gjorde inne i en översikt.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai och Chan (2026)]] tillför författarperspektivet. Av 28 forskarstuderande använde 27 GenAI inom idéutveckling, litteraturgenomgång, förklaring, databehandling, programmering, [[writing-education|akademiskt skrivande]], redigering och översättning. De kalibrerade användningen efter insatser och disciplinära normer. Deras institutioners policyer handlade om undervisning och bedömning snarare än forskningspraktik, vilket lämnar redovisningsbeslutet till författaren.

## Publicera nollresultaten, och kontrollera varje referens

[[citation-errors-hallucinations-computing-education-2026|Denny m.fl. (2026)]] verifierade 30 fabricerade referenser i 14 artiklar, med antalet vid ett tekniskt symposium som steg från 3 under 2025 till 17 under 2026, eller 2,3 % av årets konferensartiklar. LLM-assisterat skrivande gör en trovärdig påhittad referens billig att producera, vilket är varför kontrollen måste ske före inlämning och inte efter antagning.

Motvikterna i den granskningen spelar roll när du citerar den. De flesta flaggade referenserna var godartade: 229 var ACM-metadatamissmatchningar där PDF:en var korrekt, och 188 var giltiga bibliografiska varianter. Antalet fabricerade är en medveten nedre gräns, och den godartade majoriteten är inte ett avrundningsfel. Verifiera varje post du inte själv kan kontrollera.

Att rapportera noll- och negativa resultat är den andra halvan av en ärlig evidensbas. Bartoš m.fl. fann starka belägg för undertryckta nollresultat (varje Egger-test p < 0,0001) och extrem heterogenitet (τ = 0,869), utan att någon delgrupp för utfall, fält, nivå eller AI-roll visade konsekventa vinster. De fann inte heller någon skillnad mellan studier publicerade före och efter januari 2023, vilket undergräver påståendet att moderna generativa verktyg specifikt ger vinster.

## Vad forskare missförstår om detta

**”En effektstorlek är en egenskap hos modaliteten.”** Det finns ingen effekt av AI i utbildning att rapportera. Alla utom två av de granskade metaanalyserna definierade behandlingen som ett verktygsnamn, bara 21 % av de granskade jämförelserna hade en definierad behandling, en kontroll och ett giltigt mått, och det poolade g = 0,7 låg över specialbyggd intelligent handledning på 0,66. En effektstorlek tillhör en design, en population och ett mättillfälle.

**”Det poolade medelvärdet är vad som kommer att hända med mina studenter.”** Medelvärdet beskriver uppsättningen studier, och inget i det fastställer något enskilt klassrum. Det biasjusterade medelvärdet är SMD = 0,196 och dess prediktionsintervall löper från -1,521 till +1,908. Den rapporterade heterogeniteten ligger över 80 % i 12 av 13 metaanalyser, och ingen delgrupp i den större poolen visade konsekventa vinster. En förändring på studentnivå går inte att identifiera ur någon av siffrorna.

**”Ett nollresultat betyder att verktyget inte fungerar.”** Ett nollresultat är ett påstående om en design vid en given precision, och avsaknaden av en detekterbar effekt i en studie är ett faktum om den studien. Det biasjusterade SMD = 0,196 kom från en litteratur där varje Egger-test var signifikant, så den försvarbara läsningen av materialet är ett litet och osäkert genomsnitt. Inte heller någon delgrupp för utfall, fält, nivå eller AI-roll i den större poolen visade konsekventa vinster. Det dokumenterade problemet i den här litteraturen är undertryckning.

**”En studie avgör saken.”** Basfrekvenserna talar emot det. 61 % av de granskade primärstudierna hade validitetsproblem, en kurs eller institution ger inget tillstånd till ett allmänt påstående, och ett proprietärt system är ett rörligt mål bundet till en modellversion. En enskild studie är en datapunkt med en design kopplad till sig.

**”Hög överensstämmelse med mänskliga kodare betyder att modellen poängsätter rätt sak.”** Överensstämmelsen mellan människa och LLM var 0,30 mot 0,52 mellan människor, och den blinda verifieraren kunde inte skilja de två koduppsättningarna åt, 51,5 % mot 48,5 %. Överensstämmelse mäter konsekvens med en kodare, och kvalitet är en separat fråga som kräver en guldstandard och en bedömare.

## Invändningarna du kommer att höra

**”Granskarna vill ha nyhet, inte metoddetaljer.”** Tidskrifterna rör sig åt andra hållet. RAISE och TEP-AIED ger redaktörerna ett konstrukt att kräva, och TEP-AIED:s metodunderavsnitt är en ingång med låg friktion. Metoddetaljer är det som förvandlar en obedömbar artikel till en citerbar.

**”Vi har inte utrymmet.”** De fem redovisningsnivåerna är rapporteringsnivåer, inte risknivåer, så utvärderingens djup kan vara en eller två meningar. Version, prompter och roll får plats i ett kort stycke. Kostnad och styrning får plats i en mening om begränsningar.

**”Alla rapporterar det så här.”** Siffrorna säger att normen är problemet: 61 % av granskade primärstudier med validitetsproblem, 12 av 13 metaanalyser över 80 % heterogenitet, 38,0 % av artiklarna om programvara och produkter utan utvärdering.

**”Vårt verktyg är proprietärt, så vi kan inte rapportera modellen.”** Rapportera version, åtkomstdatum, konfiguration, de prompter du använde, roll och skyddsräcken. Om leverantören inte vill säga det, hör den begränsningen hemma i avsnittet om begränsningar som en gräns för påståendet.

**”Att rapportera nollresultat kommer att skada oss.”** Undertryckta nollresultat är den dokumenterade mekanismen bakom det biasjusterade medelvärdet SMD = 0,196. Att publicera dem är det som håller ditt positiva resultat läsbart.

## Vad du ska göra den här veckan

**1.** Läs din sammanfattning mot ditt metodavsnitt och stryk varje påstående som metoden inte kan stödja. En mening om måttets tak räcker oftast.

**2.** Lägg till specifikationsstycket: modell, version, åtkomstdatum, konfiguration, prompter, roll och vem som utformade eller granskade outputen.

**3.** Flytta τ², prediktionsintervallet och bedömningen av publikationsbias ur bilagan och in i resultaten, eller säg rakt ut att du inte beräknade dem.

**4.** Skriv in befolkningsgränsen och kontrollvillkoret i designbeskrivningen, inklusive hur mycket tid varje arm lade ner.

**5.** Verifiera varje referens du inte själv har läst, och kontrollera författarfältet först.

## Vart du går härnäst

[[research-methods-aied|Forskningsmetoder inom AI i utbildning]] täcker de designval som ligger under dessa rapporteringsbeslut, och [[limitations-in-aied-research|Begränsningar i AIEd-forskning]] är katalogen över felfall med siffrorna kopplade till sig. [[interpreting-and-applying-aied-research|Att tolka och tillämpa AIEd-forskning]] är läsarens sida av samma problem, [[does-ai-help-students-learn|evidensen om varaktigt lärande]] är det som de flesta av dessa mått försöker nå, [[evaluating-ai-interventions-methods|Att utvärdera AI-interventioner: metoder]] täcker måtten och jämförelsedesignerna, och [[checking-whether-educational-ai-works|Att kontrollera om pedagogisk AI fungerar]] är den kortare versionen av frågan. För de luckor den här litteraturen inte har fyllt, se [[research-gaps-aied|Forskningsluckor inom AIEd]].
