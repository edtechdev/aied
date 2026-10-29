---
title: "Vilka anmärkningsvärda luckor finns i forskningslitteraturen om AI i utbildning?"
created: "2026-08-24T14:10:00-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
updated: "2026-10-29T17:10:58-04:00"
translation_of: faqs/research-gaps-aied
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

En ansökningsdeadline är åtta dagar bort och bakgrundsavsnittet behöver en mening om vad det här fältet ännu inte vet. Eller så har en kollega sagt till en kommitté att AI-handledning höjer prestationerna, med hänvisning till ett tvåårigt experiment i 18 högstadieskolor, och du är personen som måste säga vad den studien kan bära. Eller så väljer du en avhandlingsfråga och varje version av den verkar redan vara gjord.

De luckor som spelar roll handlar om styrka, specificitet och tillämplighet. AI kan utföra pedagogiska uppgifter; de öppna frågorna är om en viss design ger varaktig nytta, för vem, genom vilken mekanism och under vilka villkor. Den skillnaden avgör två saker på ditt skrivbord: vad du ska studera härnäst, och vad du ska sluta hävda under tiden. [[limitations-in-aied-research|Begränsningar i AIEd-forskning]] är katalogen bakom den här sidan. Evidens om [[intelligent-tutoring|intelligenta handledningssystem]], prediktiv [[learning-analytics|analys]], [[generative-ai|generativ AI]] och autonoma agenter är inte heller utbytbara, och forskning om att använda AI för att stödja lärande skiljer sig från forskning om att lära människor om AI, vilket översikten [[ai-education|AI i utbildning]] förklarar.

## Kortversionen

**1.** Jämför AI:n mot ett starkt icke-AI-alternativ som håller läroplan, övning och stöttning konstant, och säg vad AI:n tillförde.

**2.** Mät fördröjd prestation utan stöd, och slå fast att prestation med stöd inte är en lärandevinst.

**3.** Redovisa vilken komponent i paketet som gjorde jobbet och vilken mekanism du hävdar.

**4.** Validera varje automatiserad poäng och simulerad student mot verkliga studenter, inklusive studenter utanför ditt utvecklingsurval.

**5.** Ange populationsgränsen, för ett sammanslaget medelvärde svarar inte på en rättvisefråga.

**6.** Beskriv arrangemanget så väl att någon annan skulle kunna bygga upp det igen.

## Välj en jämförelse som isolerar AI:n

Det finns rigorösa klassrumsexperiment, så ”vi behöver randomiserade prövningar” pekar inte längre ut luckan. Den skarpare frågan är om AI-komponenten tillför värde utöver extra övning, bättre material, återkoppling i tid eller mer undervisningsstöd.

[[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]] rapporterar blygsamma prestationsökningar i 18 högstadieskolor tillsammans med begränsat substantiellt engagemang med handledaren, och författarna noterar att ökningarna liknade dem man får av strukturerad övning utan AI. Det är evidens om ett infört paket, och det kan inte isolera vad AI:n inuti det tillförde.

Problemet under ytan är begreppsligt liksom empiriskt. ”ChatGPT” namnger ett verktyg, inte en metod. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich m.fl. (2025)]] granskade 19 jämförelser med ChatGPT i utbildning: bara 4 (21 %) specificerade alla tre av en replikerbar behandling, en operationaliserad kontroll och ett giltigt lärandemått (74 % väldefinierad behandling, 42 % väldefinierad kontroll, 53 % ett läranderesultat). När ny AI kommer tillsammans med nya aktiviteter, återkoppling eller gränssnittsdesign sammanblandas medium och metod, och ingen effekt tillhör AI:n.

Vad som skulle avgöra saken: jämförelser mot realistiska icke-AI-alternativ där läroplan, övningstillfällen och stöttning hålls så konstanta som möjligt, plus oberoende replikeringar över lärosäte, lärare, ämne och modell. Metoder svarar på olika frågor här. [[qualitative-research|Kvalitativt]] och [[design-based-research|designbaserat]] arbete förklarar genomförandet, medan väl utformade experiment bär de kausala påståendena, vilket [[research-methods-aied|Metoder för effektforskning]] lägger fram.

## Mät lärandet när verktyget är borta

Förbättrat arbete medan AI används är inte evidens för lärande som överlever att stödet upphör. Synteserna om [[learning-gains|lärandevinster]] och [[cognitive-offloading|kognitiv avlastning]] drar hela tiden samma gräns mellan prestation med stöd, bevarad kunskap, självständigt resonemang och transfer.

[[making-ai-tutoring-productive-mastery-math-2026|Att göra AI-handledning produktiv]] visar mätproblemet i ett randomiserat experiment med fler än 6 000 elever på högstadiet. En behärskningsregel om tre rätt i rad höjde den plattformsdefinierade framgången utan att i sig ge detekterbara lärandevinster en vecka senare. Det starkaste evidensen från fördröjt test uppträdde när AI:n satt inuti behärskningsarbetsflödet och koncentrerades på material som hade övats.

Den kvarvarande luckan handlar om kompetensbanor, och ett tillagt eftertest stänger den inte. Ingen har fastställt retention över månader, transfer mellan uppgifter, prestation efter att stödet dragits tillbaka, eller elevers träffsäkerhet i att bedöma vad de kan, och fältet har inte skilt misslyckad inlärning av en färdighet från försämring av en redan etablerad. Avlastningsforskningen behöver fortfarande visa när delegering stöder sådana banor och när den tränger undan den övning som bygger dem.

## Ta reda på vilken del av paketet som gjorde jobbet

”AI-stött lärande” buntar vanligen ihop flera förändringar: ny återkoppling, tillagd reflektion, kamratdiskussion, andra uppgiftssekvenser, förändrade bedömningsincitament. Ett paket som lyckas säger inte vilka komponenter som var nödvändiga.

[[genai-feedback-design-multisite-experiment|Människocentrerad design av GenAI-återkoppling]] är ett verkligt framsteg i den frågan. Bland 1 176 förstaårsstudenter överträffade reflekterande och hybrida designer direkt [[ai-feedback-quality|AI-återkoppling]] på fördröjd transfer utan AI. Hybridbetingelsen kombinerade självvärdering, [[peer-assessment|kamratåterkoppling]] och AI-kritik. Det skiljer hur återkoppling organiseras och används från huruvida studenterna har tillgång till återkoppling över huvud taget.

Fortfarande öppet: bidraget och timingen för inledande självständiga försök, självförklaring, kamratinsats, korrigerande återkoppling, tips och gradvis borttagning av stöttning, och hur vart och ett samspelar med [[prior-knowledge|förkunskaper]] och uppgiftens svårighet.

Teoriluckan löper parallellt. Att namnge en [[learning-theories|lärandeteori]] är inte att testa en. En studie behöver en teoretisk förutsägelse knuten till ett specifikt systembeteende och en mätbar lärandeprocess, och statistisk mediering informerar den förklaringen utan att fastställa en kausal mekanism. [[theory-development-aied|Teoriutveckling inom AI i utbildning]] och [[scaffolding|stöttning]] för argumentet vidare.

## Validera måttet innan du tolkar det

Konstrukt som engagemang, [[critical-thinking|kritiskt tänkande]], AI-kompetens och [[personalized-learning|personalisering]] mäts inkonsekvent i den här litteraturen. Självrapporter beskriver upplevelser; de kan inte stå i stället för demonstrerad kompetens. Teknisk träffsäkerhet, expertbedömd outputkvalitet och studenters lärande är tre olika utvärderingsmål. [[educational-measurement|Pedagogisk mätning]] och [[ai-ed-evaluation|Utvärdering av AI i utbildning]] behandlar dessa skillnader som grundläggande.

En lucka sitter inuti mätproblemet: [[ai-technologies|AI-system]] som används för att utvärdera andra AI-system. I [[llm-student-simulation-misconception-faithfulness|Att simulera studenter eller inställsam problemlösning?]] övergav [[simulating-students|simulerade studenter]] ofta tilldelade [[misconceptions|missuppfattningar]] efter korrigerande återkoppling, oavsett om återkopplingen tog itu med missuppfattningen, så deras svar kunde få ineffektiv undervisning att se framgångsrik ut. Riktad träning förbättrade studiens trohetsmått, och förbättring på det måttet är inte validering mot mänskligt lärande.

Det som saknas är validering av hela utvärderingskedjan, från modellbeteende till [[pedagogy|pedagogiskt]] omdöme till elevrespons till utbildningsresultat, på elever och miljöer som inte användes under utvecklingen. Mänskligt omdöme behöver samma granskning, eftersom samstämmighet mellan bedömare inte är evidens för att rätt konstrukt mättes.

## Bestäm vad en bedömning fortfarande kan intyga

AI skapar två sammankopplade bedömningsproblem: det hjälper till att producera det arbete som bedöms, och det kan påverka hur arbetet poängsätts.

Kunskapsbasens [[ai-agents-complete-lms-assessment-validity-2026|studie av AI-agenter som slutför bedömda LMS-uppgifter]] dokumenterar agenter som navigerar en levande grundutbildningskurs och slutför bedömda aktiviteter. Det visar en förmåga som utmanar antaganden om studentproducerad bevisning. Det fastställer inte hur vanlig sådan användning är, och det ogiltigförklarar inte asynkron bedömning som kategori.

Forskningsfrågan är vilka designer som fortfarande stöder försvarbara slutsatser om den lärande. [[eportfolio|Portföljer]], reflektioner, stegvisa inlämningar och aktivitetsloggar behöver valideras som bevis i stället för att antas fastställa författarskap eller förståelse. Studier bör pröva kombinationer av bevis mot oberoende observerad kompetens och samtidigt ta hänsyn till tillgänglighet, arbetsbelastning, integritet och studenters oro. [[assessment-validity|Bedömningsvaliditet]] håller detaljerna.

För [[automated-assessment|automatiserad poängsättning]] rapporterar [[llms-do-not-grade-essays-like-humans-2026|LLM:er betygsätter inte uppsatser som människor]] systematisk oenighet mellan modeller direkt ur lådan och mänskliga bedömare. Fynden är konfigurationsspecifika, och de visar varför intern konsistens inte kan bära ett validitetspåstående.

[[human-capability-test-learning-outcomes-ai-2026|Ett test av mänsklig förmåga för lärandemål i AI-eran]] föreslår att man bedömer separat vad de lärande måste göra självständigt, vad de får åstadkomma med AI och vad de måste verifiera och försvara. Det är ett ramverk som väntar på empirisk validering.

Detektion är den tydligaste återvändsgränden på området. [[karr-ai-detection-humanization-2026|Karr m.fl. (2026)]] körde två kommersiella detektorer vid τ = 0,50 över 642 publicerade engelska abstract. Riktlinjeenlig lätt AI-redigering flaggades i 38-80 %. Oförändrade original från 2023-25 flaggades i 9-15 %, med icke-[[stem-education|STEM]]-arbete långt över STEM vid p < 0,001. Efter humanisering fångade verktygen färre än 4 % av de AI-märkta omskrivningarna, en falsk negativ-frekvens över 96 %. En poäng som straffar ärlig hjälp och missar undvikande kan inte grunda en slutsats om en lärande.

## Sluta läsa kompetenspoäng som bevis på beteende

Forskning om AI-kompetensinterventioner är omfattande nog att syntetisera. [[liu-ai-literacy-interventions-meta-analysis-2026|AI-kompetensinterventioner i utbildning]] omfattar 59 studier och 7 211 deltagare, rapporterar en positiv genomsnittlig effekt och rapporterar också betydande variation med ett brett prediktionsintervall som spänner över noll. Kunskapsinriktade utfall blev starkare än färdigheter, attityder eller etik.

Den skarpare luckan är huruvida kompetensundervisning förändrar vad människor gör när de använder AI, och ännu ett kompetensramverk skulle inte stänga den. Kan de lärande känna igen ogrundade påståenden, verifiera källor, avvisa vilseledande förslag, lägga märke till olämpligt instämmande och välja när de inte ska delegera? Håller något av det under tidspress, och överförs det till obekanta system och discipliner?

Att avgöra detta kräver prestationsbaserad bedömning kombinerad med observation av faktiska beslut och fördröjd uppföljning, med begreppslig kunskap, operativ färdighet och kritiskt omdöme åtskilda i stället för sammanslagna. [[ai-literacy|AI-kompetens]] och [[trust-calibration|Tillitskalibrering]] levererar distinktionerna.

## Redovisa vilka fyndet lämnar utanför

Fynd från en kurs, ett lärosäte, ett språk eller en elevpopulation ger sällan tillstånd att fatta beslut någon annanstans, ett problem som syntesen [[limitations-in-aied-research|Begränsningar i AIEd-forskning]] behandlar som återkommande. Hur effekter varierar över utvecklingsstadium, disciplin, förkunskaper, funktionsnedsättning, språk och resursvillkor är fortfarande till stor del omätt.

Rättviseforskning måste också skilja på tillgång, färdigheter och utfall. Syntesen om [[digital-divide|den digitala klyftan]] är tydlig med att enheter och verktygstillgång inte fastställer lika förmåga att dra nytta. [[school-ai-education-readiness-gaps-agency-2026|Minskar skolbaserad AI-undervisning beredskapsklyftor?]] följde 752 elever i Hongkongs högstadium: psykologiska beredskapsklyftor minskade medan skillnaderna på ett objektivt AI-kompetenstest bestod. Varje grupp förbättrades, och ojämlikheten slöts inte. Förkunskapliga profiler var inte slumpmässigt tilldelade, så deras kausala roll förblir okänd.

Täckningen är tunn på specifika ställen. [[differential-effects-across-learner-groups|Differentiella effekter mellan elevgrupper]] räknar litteraturen per population: andraspråks- och flerspråkiga lärande och studenter med funktionsnedsättning är de djupaste strängarna, kön och neurodiversitet kommer därnäst, förstagenerationsstudenter och internationella studenter har en studie var i den här korpusen, begåvade och högpresterande studenter är i praktiken ostuderade, och flyktingar, invandrare och fördrivna lärande förekommer inte alls. En evidensbas med den formen kan inte svara på en rättvisefråga genom aggregering.

Kapaciteten varierar också inom ett enda nationellt system. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye m.fl. (2026)]] poängsatte AI-integration vid 45 nigerianska universitet och fann måttlig övergripande adoption (M = 4,79, intervall 1,83-7,83 på en 10-gradig skala), där institutionstyp inte förutsade integration när ålder och geografi kontrollerades (ålder β = 0,43; placering i sydväst β = 0,31). Interna kapaciteter korrelerade med varandra vid r = 0,79-0,80 och internationella samarbeten med branschpartnerskap vid r = 0,74, så sammankopplade institutioner ackumulerar förstärkande fördelar. Vilka kapacitetsuppbyggande designer som förändrar utfall vid nyare, mindre sammankopplade institutioner är oprövat.

Forskningsprioriteringen är att identifiera designer som minskar skillnader i demonstrerad förmåga, deltagande och [[agency|agens]], med delgruppsutfall och bördor redovisade vid sidan av genomsnittliga vinster. Tillgänglighet bär sin egen olösta fråga: huruvida en design tar bort ett hinder för deltagande eller ersätter en förmåga som den lärande är menad att utveckla. Se [[equity-in-ai-education|Rättvisa i AI-utbildning]] och [[accessibility|tillgänglighet]].

## Säg vem som har kontrollen, och när den förändras

När system planerar, initierar handlingar, håller minne och koordinerar verktyg blir den pedagogiska frågan vem som bör kontrollera vilka delar av lärprocessen, och när den kontrollen bör flyttas.

[[agentic-ai-education-scoping-review|Agentisk AI i utbildning: en scoping review]] kartlägger 474 studier och finner begränsad longitudinell validering, koncentration till [[higher-ed|högre utbildning]] och STEM, och svag integration av utbildningsteori: bara 29 % av de granskade studierna byggde uttryckligen på utbildningsteori, ett fynd om den korpusen snarare än om all AIED-forskning.

Öppna frågor följer. Ger elevinitierad hjälp andra utfall än agentinitierad hjälp? Kan stöd dras tillbaka i takt med att kompetensen utvecklas utan förlust? Behåller de lärande förmågan att utmana systemet? Synteserna om [[agentic-ai|agentisk AI]] och [[human-ai-collaboration|människa-AI-samarbete]] tillför [[teacher-role|lärarens]] ingripande och ansvarsskyldighet i multiagentsituationer, där ingen har fastställt vem som svarar för en agents beslut. Större autonomi är ett pedagogiskt designval med en evidensbas som ännu återstår att bygga.

## Testa säkerhetsfel mot verkliga studenter

Pedagogisk säkerhet sträcker sig förbi faktisk träffsäkerhet och förbjudna förfrågningar. En handledare kan ge ett korrekt svar samtidigt som den tar bort den lärandes möjlighet att resonera, förstärker en missuppfattning eller bygger beroende. [[pedagogical-safety|Pedagogisk säkerhet]] täcker konstruktet.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] identifierar fel inklusive överdrivet avslöjande av svar och övergivande av stöttning, med betydligt fler fel under testning över flera turer. Det är [[benchmark|benchmarkfynd]] under specificerade villkor, inte skattningar av hur ofta skada inträffar i klassrum.

Vad som händer när dessa fel möter verkliga studenter under varaktig användning är okänt. Vilka som ger tillfällig förvirring, vilka som ger bestående missuppfattningar, vilka som minskar motivationen och vilka som försvagar självständig förmåga har inte mätts. Inte heller har någon fastställt vilka skyddsåtgärder som minskar dessa risker utan att producera överdrivet avvisande eller frustration. Längre arbeten behöver också tillit, vilja att söka mänsklig hjälp, [[agency|elevens agens]] och relationer med kamrater och lärare som utfall. För barn kräver det utvecklingsmässigt lämpliga studier som kopplar systembeteende till utbildningsmässiga och relationella utfall.

## Skilj på införande och genomförande

Teknisk kapacitet fastställer inte att ett verktyg används väl, och kompetensutveckling når inte automatiskt studenterna. Den saknade länken går vanligen från lärarutbildning, via förändrad klassrumspraxis, till studentutfall.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogik först, teknik sedan]] är en flernivåstudie av 46 lärare och 2 832 studenter. Pedagogisk AI-kunskap var associerad med studenternas uppfattningar och avsikter, och ingen av de mätta lärarkunskapskomponenterna var direkt associerad med studenternas kunskapsvinster i AI. Associationer av det slaget fastställer inte att en utbildningsinsats skulle orsaka bättre lärande.

Den öppna frågan är vilka kombinationer av coachning, [[curriculum-design|läroplansanpassning]], granskningsrutiner, schemaläggning och institutionellt stöd som ger varaktig förbättring, och studier behöver observera faktiskt genomförd undervisning i stället för lärarnas självförtroende eller avsikt att införa. [[teacher-ai-competency|Lärarnas AI-kompetens]] och [[educational-development|Pedagogisk utveckling]] täcker terrängen.

Jämförande kostnadseffektivitet är en andra lucka. Utvärderingar bör räkna verifiering, korrigering, utbildning, handledning, underhåll och implementationstid vid sidan av prenumerations- och modellanvändningskostnader, och jämföra AI-stödd verksamhet med realistiska alternativ. Frågan värd att besvara är vilken utbildningsnytta det kompletta arrangemanget levererar för de resurser det tar.

## Räkna styrdokument som avsikter

[[ethics|Etiska]] principer och styrningsramverk är nödvändiga, och deras existens fastställer inte att de förändrar praktiken eller skyddar de lärande.

[[agarwal-ethical-values-norms-aied-2026|Agarwal m.fl.]] granskade 25 artiklar och fann slutanvändarna till stor del passiva i etiklitteraturen, med elevers röster i praktiken frånvarande, vid sidan av spänningar mellan värden och maktasymmetrier mellan intressenter. Det beskriver den granskade litteraturen. Det är inte ett påstående att elever aldrig deltar i AIED-design.

Det som saknas är evidens om vilka styrningsarrangemang som gör mätbar skillnad. Förändrar elev- och lärardeltagande upphandling, verktygsdesign, bedömningsregler eller gottgörelse efter ett misstag? Fångar rutiner för mänsklig granskning konsekvensbärande fel? Är alternativ till AI-användning genuint tillgängliga för dem som får höra att de ska använda den? Integritetsforskningen har en parallell lucka: utbildningsvärdet av ytterligare datainsamling antas vanligen, och dataminimerande designer har sällan jämförts med mer intrusiva på både lärande och den lärandes autonomi. Se [[governance|AI-styrning]] och [[privacy|integritet]].

## Gör studien återuppbyggbar

AIED har ett ovanligt svårt reproducerbarhetsproblem. Studier utelämnar promptar, modellversioner, inställningar, kod och instruktionsdetaljer, och proprietära system kan förändras under eller efter en intervention. [[limitations-in-aied-research|Begränsningar i AIEd-forskning]] dokumenterar mönstret.

Att bygga upp en studie igen innebär att beskriva det pedagogiska arrangemanget liksom modellen: lärandeuppgifter, innehållskällor, tillåtna handlingar, gränssnitt, lärarstöd, bedömningsvillkor och allt som förändrades under driftsättningen. Att reproducera en konfiguration och att testa om dess pedagogiska princip överförs till en annan är separata bedrifter, och rapporteringsvägledningen i [[research-methods-aied|Metoder för effektforskning]] tar upp båda.

Syntes behöver samma omsorg. [[meta-analysis-systematic-review|Metaanalys och systematisk översikt]] listar svaga primärstudier, publikationsbias, heterogena interventioner och inkompatibla utfall som gränser för sammanvägda slutsatser, och en enda genomsnittlig ”AI-effekt” döljer de distinktioner pedagoger behöver. Översikter bör skilja prestation med stöd från självständigt lärande, skilja interventionstyper och jämförelsevillkor, och göra kodningsbeslut granskningsbara.

Synteslitteraturen är i sig en lucka. [[oneill-presumed-effective-meta-analysis-2026|O'Neills (2026) forensiska granskning]] av 14 inflytelserika [[meta-analysis-systematic-review|metaanalyser]] fann att ingen gav en giltig grund för sina påståenden. Inget sammanhängande konstrukt: ett verktyg behandlat som en intervention, flerdimensionella utfall sammanslagna. Publikationsbias bedömdes ogiltigt i alla 14. Rapporterat I² löpte från 77,2 % till 94,4 % i varje analys som rapporterade det, med 12 av de 13 över 80 %. 61 % av slumpmässigt granskade primärstudier hade validitetsproblem. Dessa 14 analyser samlade fler än 2 000 citeringar på ungefär 16 månader, och en återkallad metaanalys citerades fortfarande som auktoritativ i 60 % av de citerande artiklarna efter återkallandet, utan att det nämndes. Av 14 artiklar som citerade en annan granskad metaanalys, vars abstract annonserade en stor effekt av ”AI-utbildning” som i själva verket mätte undervisning av studenter om AI, citerade bara 2 den på ett lämpligt sätt, 8 läste den som evidens för att integrering av AI förbättrar lärande, och 4 hade fel på andra sätt. Granskningen ber tidskrifter kräva full datatransparens för metaanalyser (sökprotokoll, kodade studiekarakteristika, extraherade statistikor, analytisk kod), ber redaktörer att inte behandla en publikationslista som bevis på granskningskompetens, och ber att återkallanden ska vara synliga varhelst en artikel upptäcks, exporteras eller citeras. Reproducerbarhet täcker synteskedjan, inte bara den enskilda studien.

Lärare som vill ha klassrumsversionen kan följa [[evaluating-ai-interventions-methods|att utvärdera AI-interventioner: metoder]].

## Vad forskare och lärare missförstår om detta

**Fältet saknar studier.** Det saknar specificerade sådana. Det finns flerplatsexperiment, randomiserade prövningar med tusentals studenter och 14 inflytelserika metaanalyser. Bara 21 % av de granskade jämförelserna definierade behandling, kontroll och utfall tillräckligt väl för att tillskriva en effekt.

**Att namnge en teori testar den.** En citering av en lärandeteori är ett inramningsbeslut. Ett test behöver en förutsägelse, ett systembeteende som implementerar den och ett processmått som skulle kunna falla ut åt andra hållet.

**En validerad automatiserad poäng är ett validerat utfall.** Samstämmighet med mänskliga kodare fastställer konsistens med de kodarna. Simulerade studenter förbättrades på ett trohetsmått utan att valideras mot mänskligt lärande, och kedjan från modellbeteende till utfall är fortfarande obyggd.

**Tillgång är rättvisa.** I Hongkongstudien minskade de psykologiska beredskapsklyftorna medan skillnaderna på objektiva test bestod, och varje grupp förbättrades utan att ojämlikheten slöts. Enheter och licenser förändrar vem som kan nå verktyget.

**Mer autonomi är framsteg.** Större agentoberoende är ett designval. Med 29 % av 474 agentiska studier som bygger på utbildningsteori och begränsad longitudinell validering har ingen visat att ett skifte av kontrollen till systemet förbättrar lärandet.

## Invändningarna du kommer att höra

**”Luckan är bara att vi behöver fler randomiserade prövningar.”** Det finns gott om dem nu, och problemet sitter uppströms designetiketterna: en prövning av ett paket som buntar ihop ny återkoppling, nya uppgifter och ett nytt gränssnitt kan inte tillskriva AI:n någonting. Jämförelsebetingelsen är där arbetet ligger.

**”Jag kan inte göra en uppföljning över flera år.”** Mät då ett fördröjt tillfälle utan stöd och säg vilket intervall det täcker. En vecka är ett verkligt fynd, och studien om behärskningsregeln fick sitt resultat vid en vecka genom att bädda in AI:n i arbetsflödet och koncentrera sig på övat material.

**”Randomisering är omöjlig i min kurs.”** Designbaserat och kvalitativt arbete svarar på genomförandefrågor som prövningar inte kan, och fältet behöver båda. Där slumpmässig tilldelning är möjlig bär den fortfarande det kausala påståendet.

**”Den sammanvägda effektstorleken säger mig redan vad som fungerar.”** De 14 granskade metaanalyserna definierade behandlingen som ett verktyg, slog samman inkompatibla utfall och rapporterade I² över 80 % i 12 av 13 analyser som angav det. Den sammanvägda siffran beskriver en uppsättning studier med ett konstruktproblem.

**”Simulerade studenter är billigare, så valideringen kan vänta.”** I inställsamhetsstudien släppte simulerade studenter missuppfattningar oavsett om återkopplingen tog itu med dem, vilket är det felfall som får en ineffektiv handledare att se effektiv ut.

## Vad du ska göra den här veckan

**1.** Skriv jämförelsebetingelsen i studien du planerar i en mening. Om den innebär att allt fortsätter som vanligt, revidera den innan du reviderar något annat.

**2.** Lägg till ett fördröjt mått utan stöd i designen och namnge intervallet i metodavsnittet.

**3.** Skriv populationsgränsen i designbeskrivningen och sedan i abstraktet, så att påståendet inte kan färdas längre än urvalet.

**4.** Ta det starkaste påståendet i ditt nuvarande utkast och stryk den version som ditt mått inte kan bära. Behåll meningen om taket.

**5.** För varje automatiserad poäng eller simulerad student i studien, namnge den mänskliga standarden och den som avgör innan datainsamlingen börjar.

## Vart du går härnäst

[[reporting-interpreting-aied-research|Att rapportera och tolka AIEd-forskning]] är rapporteringsmotstycket till den här sidan, och [[research-methods-aied|Forskningsmetoder inom AI i utbildning]] täcker designvalen bakom varje lucka. [[evaluating-ai-interventions-methods|Att utvärdera AI-interventioner: metoder]] hanterar mått och jämförelsedesigner, [[checking-whether-educational-ai-works|Att kontrollera om pedagogisk AI fungerar]] är den kortare versionen av effektfrågan, och [[does-ai-help-students-learn|Hjälper AI mina studenter att lära sig?]] samlar vad som är känt om varaktigt lärande. [[theory-development-aied|Teoriutveckling inom AI i utbildning]] och [[equity-ethics-pedagogical-safety-research|Forskning om rättvisa, etik och pedagogisk säkerhet]] för teorin och rättvisesträngarna vidare.
