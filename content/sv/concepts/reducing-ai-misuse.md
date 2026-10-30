---
title: Att minska AI-missbruk
created: "2026-10-27T17:23:18-04:00"
connected_faqs: [reduce-ai-cheating, should-we-use-ai-detectors, designing-ai-into-learning, addressing-common-misconceptions-ai-education, course-ai-policy, reducing-over-reliance]
type: concept
foundations: [academic-integrity, ai-literacy]
pedagogy: [metacognition, motivation, scaffolding, self-regulated-learning]
technology: [generative-ai, prompt-engineering]
assessment: [assessment]
confidence: high
translation_of: concepts/reducing-ai-misuse
source_updated: "2026-10-25T14:15:00-04:00"
updated: "2026-10-27T17:23:18-04:00"
translation_note: "*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

> **Att minska AI-missbruk**: de designmässiga, [[pedagogy|pedagogiska]] och [[educational-policy-ai|politiska]] hävstängerna som hindrar elever från att ersätta sitt eget [[cognitive-offloading|kognitiva arbete]] med [[generative-ai|generativ AI]] och i stället leder dem mot [[ethics|etisk]], produktiv användning. Effektiva angreppssätt sorteras efter genomslag snarare än popularitet, och den starkaste evidensen talar för **strukturella hävstänger** (verktygets [[guardrails|skyddsräcken]] och omformning av bedömningen) som förändrar miljön så att missbruk blir svårare, oavsett elevens motivation, framför **bildande hävstänger** som bygger på att bygga varaktig kapacitet och [[framing-ai-use-for-students|elevens medverkan]].

## Frågor att fundera över

- Elever som lägger ut sina hemuppgifter på AI kan se sina hemuppgiftspoäng *stiga* medan poängen på [[summative-assessment|salstentamen]] *faller*. Innan du läser: varför kan prestation och lärande divergera så skarpt, och vad säger gapet om vad "framgång" med AI egentligen betyder?
- Sidan rangordnar insatser efter kausal evidens och räckvidd, och placerar *strukturella* hävstänger (verktygets skyddsräcken, omformning av bedömningen) över *bildande* (att [[teacher-role|undervisa]] i god praxis), just därför att strukturella hävstänger verkar oavsett elevens motivation. Håller du med om att det är bättre att förändra miljön än att förändra sinnena? Vilken risk finns med vart och ett?
- En handledande "tips-inte-svar"-tutor tog bort den lärandeskada som en oskyddad tog, trots att båda verkade hjälpsamma. Tänk på ett lärverktyg du sett som ger svar alltför beredvilligt. Var går gränsen mellan ett tips som stöttar och ett svar som ersätter, och kan du formulera den innan du läser?
- Den starkaste åtgärden inkluderar omformning av bedömningen: oassisterade tentamina i klassrummet, muntliga försvar, processartefakter, resonemang belönat över ytlig flyt. Hur skulle du känna inför att gå en kurs som betygsätts så, och säger den känslan dig något om varför denna hävstång är både effektiv och impopulär?
- Ramverk för AI-deklarationer som tvingar elever att koppla sin användning till kognitiva steg (planering kontra innehållsgenerering) flyttar betoningen från övervakning till professionell praktik. Tror du att sådan reflektion genuint bygger bättre omdöme, eller lär den bara eleverna att beskriva missbruk mer skickligt?
- Sätt ett mål innan du läser: identifiera en konkret förändring i din egen kurs eller ditt eget arbetsflöde som skulle göra AI-missbruk svårare, och en som skulle göra produktiv användning lättare. Vilken av sidans nivåer skulle var och en tillhöra?

## Introduktion

Begreppet vilar på evidensen att AI-missbruk aktivt skadar varaktigt lärande, det prestations- och lärandegap som dokumenteras i [[ai-misuse-learning-harm]], samtidigt som det blåser upp den omedelbara prestationen. Insatserna riktar sig därför mot mekanismerna bakom skadan: svarskopiering, [[cognitive-offloading]], urholkad motivation och förskjutet lärande. De utesluter inte varandra; ett robust angreppssätt kombinerar ett strukturellt golv med bildande kapacitetsbyggande.

### Varför strukturella hävstänger betyder mest

Insatser kan sorteras efter **kausal evidens × strukturell räckvidd × skalbarhet × [[sustainability|hållbarhet]]**. På den grunden rangordnas de två *strukturella* hävstängerna högst, eftersom de verkar oavsett om eleverna väljer rätt beteende: de begränsar miljön i stället för att bero på inre motivation. De *bildande* hävstängerna är nödvändiga men bara verksamma när eleverna är med på dem, så de behandlas som den andra nivån trots sitt konceptuella löfte. [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher och Calderon (2025)]] lyfter det strukturella argumentet en nivå, behandlar styrning snarare än elevbeteende som den bindande restriktionen och föreslår ett ramverk med 130 indikatorer för integritet så att akademiska styrelser kan se om bedömningen är autentisk, om eleverna är kända individuellt av de lärare som bedömer dem, och om integritet ingår i introduktion och mottagande. Deras reformer riktar sig mot styrningsarkitekturer, personal samt [[ai-technologies|teknik och resurser]], och de föreslår att [[guardrails|red teaming]] lånas från cybersäkerheten för att blotta bedömningens sårbarheter innan eleverna hittar dem, en påminnelse om att det strukturella golvet upprätthålls av institutioner som behöver både informationen och viljan att upprätthålla det.

### Nivå 1: direkt bevisad minskning av lärandeskada

**Skyddsräcken i AI-verktygets design ("tips-inte-svar" och [[scaffolding|stödstrukturer]]).** I kunskapsbasens starkaste kausala resultat visade ett fält-[[rct|RCT]] att en oskyddad ChatGPT-liknande tutor höjde prestationen i assisterad övning med **48 %** men sänkte poängen på oassisterad tentamen med **17 %**, medan en handledande tutor (tips i stället för svar, plus lärarframtagen probleminformation) tog bort skadan helt. Detta förhindrar mekaniskt det svarskopierande "kryckbeteende" som ligger bakom skadan. Aktiviteterna omfattar handledning med tips i stället för svar, att förse promptar med korrekta lösningar och vanliga [[misconceptions|missuppfattningar]], och att kräva ett elevförsök innan AI-utdata visas.

**Att hålla inne svaret skyddar under sessionen utan att bygga färdigheten.** [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo m.fl. (2026)]] höll inne den aggregerade ståndpunkten i en [[agentic-ai|multiagent]]-debatt och sänkte bytet till en felaktig AI-ståndpunkt från 42 till 60,5 % ner till 5,7 till 8,2 %, men fann ingen lärandeeffekt inom sessionen (β = 0,03, p = 0,18): skyddsräcket höll så länge det fanns på plats och lämnade det oassisterade omdömet orört.

**Omformning av bedömningen (AI-resistenta och oassisterade mått).** Eftersom skadan av missbruk är bedömningsberoende (den syns i övervakade, låsta och oassisterade mått men blåser upp vanligt betygsatt kursarbete), gör en förändring av vad som räknas som prestation både att missbruk avskräcks och att det syns. Aktiviteterna omfattar oassisterade tentamina i klassrummet och muntliga försvar, krav på processartefakter (utkast, reflektioner, annoterat resonemang), belöning av resonemang framför ytlig flyt, och utpekade AI-fria zoner. [[ivory-psychology-assessment-integrity-2026|Ivory m.fl. (2026)]] ger kravet på processartefakter ett konkret instrument: obligatorisk versionshistorik och reproducerbara analysdokument, så att en misstänkt inlämning kan granskas som en tidslinje över hur arbetet växte fram, och mängden fabricerat material som en elev skulle behöva generera stiger långt bortom vad utläggningen sparar dem. Fältevidens i stor skala understryker detta: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei, & Wu (2026)]] fann att utläggning av hemuppgifter höjde hemuppgiftspoängen med 18 % medan poängen på låst tentamen *sjönk* med 20 %, precis den signal som oassisterade, övervakade mått är utformade att fånga, och studien rekommenderar att låsta tentamina på plats viktas tyngre. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall och Parapadakis (2025)]] ger samma logik sin mest uttalade formulering om situationsbaserat brottsförebyggande, och hävdar att felet tillhör bedömningar som en modell kan besvara övertygande snarare än eleverna, och rapporterar ett fall där 25 förebyggande tekniker tillämpade på en australisk affärsvetenskaplig capstone-kurs (spårade elevinteraktioner, rödflaggning av alltför expert arbete, slumpmässig omfördelning av team, veckovisa övervakade prov i klassrummet, nedtagningsanmälningar för kursmaterial som elever publicerat) enligt uppgift skar missförfarandefallen från 183 till 27 inom ett år. Deras rekommendationer är motiverande snarare än utredande: höj bedömningens upplevda ändamål, bygg [[self-efficacy]], och öka den upplevda sociala kostnaden av fusk, med författarnas varning att bara en eller två av de tre kommer att misslyckas, understött av fem disciplinspecifika omformningar som förvandlar tidsbegränsade problemlösningstentamina till öppna [[problem-solving|problemlösnings]]uppgifter med en skriftlig reflektion över elevens egen process, summativa uppsatser till [[collaborative-learning|kollaborativa]] arkivforskningsprojekt, och [[eportfolio|portföljer]] till iterativa kamratgranskade designprocesser.

De strukturella hävstängerna har en verkställighetsarm, och dess evidensbas är svagare än dess räckvidd antyder. [[munoz-misconduct-allegation-evidence-2026|Munoz m.fl. (2026)]] kodade 1 162 missförfarandefall med generativ AI och fann att den evidens som oftast åberopades vid anklagelsepunkten ([[ai-detection|detektor]]utdata, likhetsrapporter, AI-typiska innehållsmönster) hade det svagaste bevisvärdet, medan antagningshandlingar, observerat examensbeteende och oberoende verifierade påhittade referenser var starkast; eftersom institutionella procedurer inte anger någon minsta evidensnivå hade evidenskvaliteten inget tillförlitligt samband med utgången i fallen, och elever vars fall vilade på tunn evidens hade i praktiken bara överklaganden. [[wright-transcription-not-generation-2026|Wright (2026)]] visar en andra kostnad av samma oprecision: förbud som formuleras kring "generativ AI" snarare än kring funktion fångar verktyg som bara konverterar formatet på arbete eleven redan författat, så enbart transkriptionsanvändning kan bestraffas som otillåtet förfarande, en överinkludering som drabbar funktionsnedsatta och [[equity-in-ai-education|rättvise]]utsatta [[learners]] hårdast och inte gör något för [[assessment-validity|validiteten]]. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana, Mtshali och Mchunu (2026)]] tillägger att [[remote-proctoring|distansövervakad examination]], den mest spridda integritetskontrollen, grundar sitt avskräckningsargument på hur elever säger att de känner snarare än på minskat otillåtet förfarande, och påför ångest, koncentrationsförlust och infrastrukturrelaterat utanförskap som inte visas bli besvarat av mindre missbruk. [[li-genai-assessment-language-equity-2026|Li (2026)]] tillför regeldimensionsen: eftersom samma gränssnitt utför tillåten språklig redigering och förbjuden substantiell textproduktion, påför odifferentierade GenAI-regler kohortskeva efterlevnadskostnader på elever som använder engelska som ytterligare språk, så den mer försvarbara förebyggande åtgärden är en ändamålsbaserad gräns mellan stöd och substitution förankrad i bedömningskonstruktet, med kalibrerad deklaration, proportionalitet i steg över tröskel-, evidens- och sanktionsbeslut, och designhävstänger (etappvisa inlämningar, kort konstruktanpassad muntlig verifiering, kritikbaserade frågor) som gör arbetet detekteringen inte kan. Förebyggande måste också täcka rättaren själv: [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026)]] red team-utvärdering fann att två av fem indirekta promptinjektionsstrategier inbäddade i en inlämningsfil höjde en underkänd uppsats till godkänt utan att upptäckas, med rapporterade framgångsfrekvenser på 100 % och 94 %, så där AI-verktyg betygsätter elevarbete hör [[human-in-the-loop-ai|mänsklig granskning]], tydligare separation mellan instruktioner och inlämnat innehåll samt resilienstestning till det strukturella golvet snarare än till en valfri nivå.

### Nivå 2: starkt ramverksstöd, hög potential

**Stöttade användningssekvenser: tänk först, AI sedan, reflektera sist.** Åtta designprinciper för att integrera LLM:er utan att tränga undan [[critical-thinking|kritiskt tänkande]]: bevara kognitiv friktion, positionera AI som en provisorisk tankepartner snarare än en auktoritet, bädda in utvärderingskontrollpunkter, kräva [[metacognition|metakognitiv]] journalföring och promptloggar, och balansera AI-medierade med AI-fria faser. Den korrelationella evidensen (självständigt arbete före AI ger starkare resultat) är stark; det är den pedagogiskt fullständiga versionen av nivå 1.

**[[ai-literacy|AI-kompetens]] och [[prompt-engineering|promptkompetens]] med medveten övning och omedelbar [[feedback]].** En [[k-12]]-modul med scenariobaserad promptövning och en [[llm]]-automaträttare förbättrade den faktiska promptfärdigheten och höjde tilltron till att använda AI för lärande med **10,4 %**, där 87 % uppgav att de lärt sig använda AI ansvarsfullt. Påvisade färdighetsvinster; den öppna frågan är om de omvandlas till [[learning-gains|läranderesultat]] längre fram. Den hanterar också [[equity-in-ai-education|rättvise]]gapet i tidigare AI-tillgång.

**Strukturerade ramverk för AI-deklarationer.** Att ersätta generiska "jag använde AI"-kryssrutor med [[discipline-specific-aied|domänspecifika]] deklarationer som kopplar användningen till kognitiva steg (strukturell planering kontra innehållsgenerering) tvingar fram reflektion över lärprocessen och klargör gränsen mellan acceptabel assistans och otillåtet förfarande, vilket flyttar betoningen från övervakning till professionell praktik.

Bildande hävstänger ser annorlunda ut igen när integritet behandlas som en praktik att lära ut snarare än en regel att verkställa. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] hävdar att detekterings- och verifieringsbaserade integritetsregimer är felanpassade till GenAI-förstärkt arbete, och omramar integritet som pedagogisk praktik som utövas genom [[evaluative-judgment|evaluativt omdöme]]: elevens förmåga att väga alternativ, motivera akademiska val och ta ansvar under osäkerhet, gjord synlig genom artefakter som annoterade beslutsspår, dokumenterad verifiering, muntligt försvar och versionshistorik från utkast till utkast, med detektering nedgraderad till ett kompletterande lager i stället för den primära infrastrukturen. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa och Mezgebu (2026)]] finner samma öppning från elevernas sida: över 27 intervjuer vid ett etiopiskt [[higher-ed|universitet]] var användningen nära nog universell, de flesta deltagare tillskrev GenAI högre resultat, och den skarpaste klagomålet gick åt andra hållet: AI-användare fick högre betyg än flitiga självständiga arbetare, vilket deltagarna beskrev som demotiverande. Författarna drar slutsatsen att elevernas övertygelser förutsäger etisk användning starkare än institutionella regler gör, så medvetenhet, tydlig policy och omformning av bedömningen måste komma samtidigt, vilket är sidans bildande nivå formulerad som ett villkor: kapacitetsbyggande förändrar beteende bara genom [[framing-ai-use-for-students|elevens medverkan]] åtföljd av ett strukturellt golv. [[ji-student-voices-academic-integrity-scoping-2026|Jis (2026)]] [[meta-analysis-systematic-review|scopingöversikt]] av 38 studier av elevröster ger den fältnivåmässiga versionen av samma slutsats: de granskade studierna konvergerar mot en förskjutning från retrospektiv detektering till proaktivt etiskt resonemang, mot att undervisa AI-etik och AI-plagiering i [[curriculum-design|läroplanen]] snarare än i enstaka [[ai-literacy|kompetens]]pass, och mot detaljerade riktlinjer som samskapas av ledning, lärare och elever, eftersom otydlig vägledning läses som tyst tillåtelse snarare än som försiktighet. Jis egen tolkning är att ägarskap och moraliskt resonemang motiverar elever mer än rädsla för straff, och att elever varken är passiva mottagare av GenAI eller förövare utan moralisk begränsning utan moraliska aktörer som arbetar i en gråzon: denna nivås premiss, formulerad som ett resultat.

### Nivå 3: lovande, lägre direkt kausal evidens

**Metakognitiva och självbedömande insatser.** Reflekterande journaler, promptloggar och kalibreringsträning bygger upp den "frånvarande kognitiva baslinjen" hos AI-infödda elever som inte kan lokalisera sin egen kognitiva gräns eftersom AI-genererad flyt maskerar den. Konceptuellt centralt men ännu inte kausalt prövat.

**Omformning av motivationen.** Eftersom AI:s tillgänglighet urholkar [[motivation|autonom motivation]] ("varför anstränga sig?"), riktar en omstrukturering av uppgifter kring mål som AI inte kan uppfylla och kring [[agency|elevens handlingskraft]] direkt mot den urholkning av uthållighet som förstärker den direkta skadan.

**Kritisk AI-kompetens.** En makt-kunskap-inramning som lär elever att ifrågasätta, utmana och delta i [[governance|AI-styrning]] snarare än att konsumera den. Långsiktig, rättviseorienterad och strukturell i sina ambitioner, även om lärandeeffekterna till stor del är oprövade.

**Att känna igen [[ai-sycophancy|smicker]] för att förhindra okritiskt accepterande.** Eftersom [[ai-sycophancy|smickrande]] AI bekräftar snarare än utmanar användaren är det en direkt missbruksvektor: elever som får bekräftande medhåll för felaktigt tänkande uppmuntras att ersätta sitt eget [[cognitive-offloading|kognitiva arbete]] med AI. [[contextual-sycophancy-ai-literacy|Kontextuellt smicker]] visar att AI-kompetens och promptträning minskar men inte eliminerar felloopen, så missbruksförebyggande måste para bildande igenkänningsträning med systemnivådesign för korrigerande friktion (se skyddsräckena på nivå 1).

- **[[desirable-difficulties|Produktiv friktion]] och pedagogisk funktion.** Sydneys snabböversikt hävdar att GenAI undergräver lärandet när det låter elever kringgå den kognitiva och metakognitiva friktion som krävs för att lära, och att ändamålsenligt utformade verktyg inför *produktiv friktion* (håller inne svar, begär förklaring). Den särskiljer fyra pedagogiska funktioner (lära *av*, *med*, *om* eller *genom att forma* GenAI), var och en med olika krav på handlingskraft och bedömning.([[young-people-learning-generative-ai-rapid-review-2026]])

## Vanliga missuppfattningar

**"Att undervisa elever om riskerna är den viktigaste hävstången mot missbruk."** Det är den hävstång som beror på att eleven samarbetar, vilket är varför den rangordnas under de strukturella här. Skyddsräcken och omformning av bedömningen verkar oavsett om en elev väljer rätt beteende; bildande angreppssätt verkar bara med medverkan. Distinktionen är inte moralisk utan mekanisk: en förändrad miljö begränsar beteendet direkt, medan en förändrad övertygelse måste överleva natten före deadline.

**"Om ett skyddsräcke håller under sessionen är lärandet säkrat."** Att hålla och att undervisa är separata utfall, och korpusen innehåller ett rent dubbelresultat. Att hålla inne den aggregerade ståndpunkten i en [[agentic-ai|multiagent]]-debatt sänkte elevernas byte till en felaktig AI-ståndpunkt från 42 till 60,5 % ner till 5,7 till 8,2 %, en stor skyddande effekt, men gav **ingen lärandeeffekt inom sessionen** (β = 0,03, p = 0,18). Räcken gjorde sitt jobb som räcke och blev inte till undervisning. Att designa för missbruksförebyggande är inte detsamma som att designa för lärande.

**"Att upptäcka missbruk och bestraffa det är en förebyggande strategi."** Förebyggande måste täcka rättaren själv. [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026)]] red team-utvärdering fann att två av fem indirekta promptinjektionsstrategier inbäddade i en inlämningsfil höjde betyget på en underkänd uppsats. En pipeline som upptäcker elevmissbruk men litar på ogranskat inlämnat innehåll är försvarad på bara en sida.

**"Missbruk är ett elevmotivationsproblem."** [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher och Calderon (2025)]] flyttar den bindande restriktionen en nivå upp, behandlar styrning snarare än elevbeteende som det som ska förändras och föreslår ett ramverk med 130 indikatorer för integritet. Och lärandeskadan är mätbar i skala: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei och Wu (2026)]] fann att utläggning av hemuppgifter höjde hemuppgiftspoängen med 18 % medan poängen på låst tentamen *sjönk* med 20 %, ett designfel som visar sig i precis det gap denna sida handlar om.

## Implementeringsvägledning per roll

**För lärare och kursteam**

- Börja med bedömningen, inte med policytexten. Fråga för varje betygsatt uppgift om den oassisterade versionen skulle visa det du avser att intyga, och åtgärda uppgiften först: det är hävstången som inte kräver elevens samtycke.
- Inför verktyg med tips i stället för svar där en AI-tutor finns, eftersom fält-RCT:n om handledd kontra ohandledd undervisning är den starkaste kausala evidensen på området.
- Kontrollera att din egen betygsättningspipeline står emot injicerade instruktioner i inlämnade filer innan du behandlar elevmissbruk som det enda hotet.
- Behandla AI-tillåten och oassisterad prestation som två olika mätningar; uppdelningen 18 %/20 % ovan är osynlig om du inte samlar in båda.

**För utvecklare**

- Bygg in begränsningen i gränssnittet i stället för i en varning. En tutor som kan producera det färdiga svaret kommer under tidspress att producera det färdiga svaret.
- Slut inte dig till lärande från efterlevnad av skyddsräcket. Debattresultatet visar att beteendet hölls kvar medan lärandemåtten låg stilla, så instrumentera utfall separat från interaktioner.
- Lyft missbrukssignaler till lärare som diagnostik snarare än som domar, eftersom styrningsinramningen i evidensen ligger ovanför det enskilda elevbeteendet.

**För administratörer och beslutsfattare**

- Placera den bindande restriktionen där evidensen placerar den. Indikatorer och styrningsstrukturer adresserar miljön; uppmaningar till elever adresserar den person som har minst möjlighet att förändra den institutionella designen.

## Anslutna begrepp

- [[ai-misuse-learning-harm]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[assessment]]
- [[ai-literacy]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[motivation]]
- [[prompt-engineering]]
- [[ai-sycophancy]]
- [[trust-calibration]]
- [[framing-ai-use-for-students]]
- [[cognitive-surrender]]

## Anslutna artiklar
- [[ivory-psychology-assessment-integrity-2026]] — Evidensspår i versionskontroll och reproducerbara analysdokument som avskräckning mot missbruk (Ivory m.fl. 2026)
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Att hålla inne en rekommendation förhindrade till stor del överberoende utan att bygga det omdöme det skyddar
- [[generative-ai-guardrails-harm-learning]] — GenAI utan skyddsräcken kan skada lärandet
- [[genai-performance-vs-learning]] — Att skilja prestationsvinster från lärande
- [[ai-assessment-scale-reform]] — AI Assessment Scale och bedömningsreformen
- [[critical-thinking-genai-scaffolding]] — Att stödja kritiskt tänkande med generativ AI
- [[aaai2026-prompting-literacy-k12]] — Att lära sig använda AI för lärande (K-12-modul för AI-kompetens)
- [[genai-declaration-frameworks-higher-education]] — Att strukturera transparens: ramverk för GenAI-deklarationer
- [[absent-cognitive-baseline-2026]] — Den frånvarande kognitiva baslinjen
- [[ai-literacy-power-knowledge]] — AI-kompetens: en övning i makt och kunskap
- [[contextual-sycophancy-ai-literacy]] — Den dolda kostnaden av kontextuellt smicker: en insats för AI-kompetens
- [[sycophantic-ai-social-interaction-2026]] — Smickrande AI gör mänsklig interaktion mer ansträngande och mindre tillfredsställande över tid
- [[ssaho-ai-academic-integrity-review-2025]] — Kulturbildning och omformning av bedömningen framför detekteringsövervakning
- [[young-people-learning-generative-ai-rapid-review-2026]] — Kognitiv överlämning, produktiv friktion och metakognitiv ojämlikhet
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Att ompröva muntliga tentamina som autentisk, AI-resistent bedömning
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Straffet för generativ AI i lärandet: utläggning av hemuppgifter skadar lärandet
- [[ai-overreliance-complex-adaptive-system-2026]] — AI-överberoende modellerat som ett komplext adaptivt system
- [[burneo-can-edtech-close-learning-gaps-2026]] — Skyddsräcken tog bort skadan utan att förbättra tentamenspoängen
- [[munoz-misconduct-allegation-evidence-2026]] — Vad akterna om missförfarandeanklagelser faktiskt innehåller som evidens
- [[wright-transcription-not-generation-2026]] — Alltför vidsträckta AI-regler och eleverna de fångar
- [[sharma-judgment-visible-genai-assessment-2026]] — Integritet som evaluativt omdöme snarare än efterlevnad
- [[mulisa-students-genai-integrity-perspectives-2026]] — Elever om huruvida GenAI är ett fuskverktyg eller en lärandepartner
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Vad distansövervakad examination gör med eleverna, och med rättvisan
- [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]] — Situationsbaserat brottsförebyggande mot AI-underlättat fusk: 183 till 27 fall, och fem disciplinspecifika omformningar (Leaton Gray, Edsall & Parapadakis 2025)
- [[ji-student-voices-academic-integrity-scoping-2026]] — Vad 38 studier av elevröster rekommenderar: samskapad tydlighet och bildande resonemang framför detektering (Ji 2026)
- [[li-genai-assessment-language-equity-2026]] — Var språkstöd slutar och substitution börjar för EAL-skribenter (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt injection som missbruksvektor mot AI-betygsättning (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Styrning som den bindande restriktionen för integritet: ett ramverk med 130 indikatorer (Coates, Croucher & Calderon 2025)
