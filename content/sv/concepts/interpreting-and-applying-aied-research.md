---
title: "Att tolka och tillämpa AIEd-forskning"
created: "2026-09-19T05:41:27-04:00"
type: concept
foundations: [limitations-in-aied-research]
research_method: [literature review]
methods: [ai-ed-evaluation, benchmark, research-methods-aied, meta-analysis-systematic-review, quantitative-research]
assessment: [assessment-validity, educational-measurement, self-report-measures, learning-gains]
ethics: [ai-use-disclosure]
audience: [instructors, administrators, instructional designers, software developers, researchers]
page_kind: [evaluation, framework]
confidence: high
connected_faqs: [reporting-interpreting-aied-research, research-gaps-aied, how-can-ai-assist-with-educational-research]
updated: "2026-11-08T07:46:14-05:00"
translation_of: "concepts/interpreting-and-applying-aied-research"
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

> **Att tolka och tillämpa AIEd-forskning** — hur du avgör om ett resultat om AI i utbildningen är värt att agera på, oavsett om du undervisar, driver ett program, designar en kurs eller bygger programvara. Du behöver inte statistik för att använda den här sidan. Den börjar med frågan en praktiker faktiskt har — *bör jag göra detta?* — arbetar sig igenom det fåtal saker som besvarar den, och håller den tekniska detaljrikedomen i ett senare avsnitt för den som vill eller behöver den. Kortversionen: ett resultat är värt att agera på när du vet vad som jämfördes, vad som mättes, vilka som studerades och huruvida verktyget fortfarande finns i den form som studerades. De flesta påståenden som når lärare, skolledare och utvecklare fallerar på en av dessa fyra punkter.

## Frågor att fundera över

- En leverantör, en nyhetsartikel eller en kollega säger att ett AI-verktyg förbättrade lärandet. Vad är det enda du skulle vilja se innan du provar det i din egen kurs — och skulle du veta var du skulle leta efter det?
- Varje artikelsida i den här kunskapsbasen har nu ett avsnitt **Vad detta betyder för praktiken**, och de flesta har ett avsnitt **Begränsningar**. När du läser de två tillsammans, vad säger var och en som den andra inte säger?
- Elever övar med ett AI-verktyg och presterar bättre på övningsarbetet, men sämre på den [[summative-assessment|salstentamen]]. Vilket tal är det lärandemål som din kurs bryr sig om — och skulle dina nuvarande bedömningar fånga skillnaden?
- En studie utlovar en stor förbättring, men den följde 30 studenter i en kurs vid en institution, och den version av verktyget som studerades är inte längre den version någon använder. Vilket av de två fakta oroar dig mer, och varför?
- Många AI-verktyg ökar hur mycket elever använder dem utan att öka hur mycket de lär sig. Om du måste välja mellan ett verktyg som höjer engagemanget och ett som höjer prestationen utan stöd, vilken evidens skulle avgöra saken?
- Du ombeds godkänna eller köpa ett verktyg med stöd av leverantörens egna effektivitetstal. Vad skulle du vilja att det redovisades om hur dessa tal togs fram?

## Introduktion

Den här sidan är för människor som måste besluta något: en lärare som funderar på att ändra en uppgift, en [[administrator]] som väger en pilot, en lärandedesigner som bygger en kurs, en mjukvaruutvecklare som avgör vad en funktion ska göra, eller en forskare som förklarar ett resultat för någon av dem.

Två vanor gör skillnaden, och ingen av dem kräver forskarutbildning.

**Läs de två avsnitt som är skrivna för dig först.** Varje artikelsida här har nu ett avsnitt **Vad detta betyder för praktiken** — vanligen tre till fem konkreta åtgärder härledda ur studien — och de flesta har ett avsnitt **Begränsningar** som anger vad studien inte kan stödja. Läs dem före studiens resultat, inte efter. Praktikavsnittet säger vad studien är bra för; begränsningsavsnittet säger var den slutar. Om praktikavsnittet saknas eller är vagt bör du behandla sidan som ofullbordad snarare än som evidens.

**Bedöm påståendet, inte påståendets säkerhet.** Påståenden om [[ai-education|AI i utbildningen]] är vanligen korrekta om *något* och vilseledande om det du bryr dig om, eftersom en studie och ditt klassrum skiljer sig på fyra sätt: vad den jämfördes mot, vad den mätte, vilka som deltog och vilken version av verktyget som användes. Resten av den här sidan ger dig kontrollerna på klarspråk och sedan evidensen bakom var och en för läsare som vill ha den.

Det som följer ersätter inte heller sina grannar. [[research-methods-aied|Forskningsmetoder inom AI i utbildningen]] täcker hur designer byggs, [[limitations-in-aied-research|Begränsningar i AIEd-forskning]] katalogiserar litteraturens återkommande svagheter, [[ai-ed-evaluation|AIEd-utvärdering]] täcker hur system och utdata utvärderas, och [[differential-effects-across-learner-groups|Differentiella effekter mellan elevgrupper]] täcker vem ett resultat omfattar och inte omfattar.

## Fyra frågor som avgör de flesta påståenden

Ställ dessa innan du lägger tid, pengar eller en termin på något.

**1. Vad jämfördes det mot, och var jämförelsen rättvis?** "Elever som använde AI presterade bättre än elever som inte gjorde det" säger bara något om de andra eleverna faktiskt gjorde något verkligt. Om jämförelsen var business as usual — eller ingenting — buntar resultatet ihop verktyget med extra tid, extra uppmärksamhet och nyhetseffekt. Vad du ska leta efter: en **kontrollgrupp** som fick ett trovärdigt alternativ, och slumpmässig tilldelning till de två villkoren.

**2. Vad mätte de exakt?** Det är här de flesta spännande påståenden tyst fallerar. Testpoäng, hemarbetets kvalitet, [[motivation]], attityder och [[student-engagement|engagemang]] slås samman till ett enda tal för "prestation", eller ett mått på prestation *med verktyget närvarande* rapporteras som lärande. Lärande som beror på att verktyget finns är inte samma sak som lärande som består. Vad du ska leta efter: vad instrumentet mätte, huruvida det validerades för den populationen och huruvida ett utfall mättes **utan** AI i rummet.

**3. Vilka studerades, hur många och hur länge?** Trettio studenter i en kurs är en signal, inte ett resultat. En fyra veckor lång intervention kan inte säga något om ett år. Och en studie av elever som inte liknar dina är fortfarande användbar — den är en hypotes om din miljö, inte en förutsägelse. Vad du ska leta efter: urvalsstorlek, hur deltagarna rekryterades, en enda plats, varaktighet och huruvida någon undergrupp var tillräckligt stor för att analysera.

**4. Är verktyget fortfarande det verktyg som studerades?** AI-förmåga rör sig snabbare än publiceringen. Ett resultat från 2025 beskriver 2025 års modellgeneration — ibland en specifik version, ibland en konfiguration som ingen använder nu. Det gör inte resultatet falskt; det gör det daterat, och det innebär att påståendet bör kontrolleras igen snarare än ärvas. Vad du ska leta efter: modellversion och datainsamlingsfönstret.

## Vad evidensen säger om AI-påståenden i allmänhet

Om du bara minns en sak från den här sidan, minns att rubriksiffran vanligen är uppblåst och jämförelsen vanligen svag. Det är ingen marginalåsikt — det är vad granskningar av fältet självt rapporterar. Flera välgjorda studier visar verkliga vinster; poängen är att bevisbördan ligger hos påståendet.

- **Ungefär två tredjedelar av den genomsnittliga effekten försvinner** när man korrigerar för att imponerande resultat publiceras och ointressanta inte gör det. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš m.fl. (2026)]] slog samman 1,840 effektstorlekar från 67 genomgångar och fann att det korrigerade genomsnittet var ungefär en tredjedel av den publicerade medianen — SMD 0.196 mot 0.67.
- **Ett produktnamn är inte en undervisningsmetod.** Vid granskning av jämförelserna bakom en framträdande metaanalys fann [[weidlich-chatgpt-effect-search-cause-2025|Weidlich m.fl. (2025)]] att bara **21%** hade en väldefinierad behandling, en kontrollgrupp och ett giltigt lärandemått — och den rapporterade fördelen för "att använda ChatGPT" blev större än för specialbyggda [[intelligent-tutoring|intelligenta handledningssystem]] (g = 0.7 mot 0.66), vilket är en varningssignal snarare än en triumf.
- **Prestation med verktyget förväxlas rutinmässigt med lärande.** I en [[k-12|K-12]]-studie i matematik fick elever som övade med en allmän [[conversational-ai|chattbot]] bättre övningsbetyg och presterade sedan **cirka 17% sämre** än kamrater utan AI-tillgång på den slutliga salstentamen ([[stanford-evidence-base-ai-k12-2026|Stanfords evidensbas för AI i K-12]]).
- **Fältets egna genomgångar klarar inte granskning.** [[oneill-presumed-effective-meta-analysis-2026|O'Neills (2026)]] granskning av **14 peer-reviewed metaanalyser** som hävdar att AI förbättrar utbildning fann att **ingen** gav ett giltigt underlag för de påståenden den framförde, och bland 46 slumpmässigt valda primärstudier uppvisade **61%** validitetsproblem. Problemet är inte en dålig artikel; det är en rapporteringskultur.
- **En genomgång kan kvantifiera rapporteringssnedvridningen i sitt eget material.** En systematisk genomgång av 155 högskolestudier fann att 117 (75.5%) rapporterade framgångsrik implementering, 124 (80.0%) bara täckte kortvarig påverkan och endast 23 (14.8%) rapporterade om misslyckanden inom [[ethics|etik]], rättvisa eller styrning — den obalans kontrollerna ovan beskriver, mätt på genomgångens egen evidensbas ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga (2026)]]).
- **Självskattningar smickrar alla.** Människor skattar sina egna [[ai-literacy|AI-färdigheter]] cirka **40%** högre än prestationsmått visar, vilket är varför nöjdhets- och självförtroendeenkäter är den svagaste evidens du kan agera på ([[self-report-measures|Självskattningsmått]], [[educational-measurement|Utbildningsmätning]]).
- **De flesta produkter som redan finns i klassrum har ingen oberoende evidens alls.** [[instruction-partners-ai-in-action-learning-tour-2026|Instruction Partners 2025–26 lärandeturné]] kartlade 20 elevvända AI-produkter och fann att av de 16 med fullständiga profiler hade bara sju en oberoende granskning som undersökte [[learning-gains|elevprestationer]] över elevgrupper i USA; två studerades bara utomlands, fyra hade studier pågående och tre byggde enbart på interna data. Författarna hävdar att oberoende kausala studier som täcker prioriterade grupper bör vara förväntan för alla elevvända produkter — ännu inte normen för verktyg som skolor redan använder.

## Att göra ett forskningsresultat till ett beslut

Sekvensen som sparar mest bortkastad ansträngning, i ordning.

1. **Skriv ner ditt utfall först.** Inte "använd AI mer" utan "eleverna kan göra X utan verktyget". Om ditt utfall är prestation utan stöd är en studie som mätte prestation med stöd närliggande evidens, inte direkt evidens.
2. **Hitta jämförelsen och måttet** — i studien eller i praktikavsnittet på dess artikelsida. Om något av dem saknas, behandla påståendet som en demo snarare än ett resultat.
3. **Läs begränsningsavsnittet som instruktioner, inte som friskrivningar.** "En enda kurs, självrapporterade utfall, fyra veckor" säger exakt vilka av dina antaganden studien inte täcker.
4. **Kontrollera versionen och datumet.** Om studien använde en modellgeneration som är två år gammal, planera att testa igen i stället för att anta.
5. **Namnge de möjliggörande villkoren.** Kostnad, licenser, personaltid, dataregler och huruvida eleverna måste betala för den nivå som faktiskt fungerar. Studier bär sällan dessa, och de avgör huruvida en intervention överlever en termin. I [[chick-faculty-development-ethical-ai-2026|en fakultetsutvecklingsstudie med tio deltagare]] sa alla att de skulle fortsätta använda AI, medan samma personer beskrev personliga prenumerationer för verktygsåtkomst och ingen tidsresurs för de omdesigner de hade planerat.
6. **Pilota smått, och mät det ostödda villkoret.** En kort före/efter-mätning med en bedömning gjord utan verktyget slår en nöjdhetsenkät. Smått och ärligt slår stort och retoriskt. Se [[learning-design|Lärandedesign]] för var detta passar i kursdesignen.
7. **Boka ett granskningsdatum, och var beredd att överge påståendet.** När en studies premiss är en förmåga som inte längre finns är det ärliga draget att pensionera påståendet snarare än att citera det i evighet — samma disciplin som denna kunskapsbas tillämpar på sina egna sidor.

## Ord du möter i forskningen

Enkla översättningar, så att du kan skumma en studie eller en leverantörssida utan metodbakgrund.

- **Effektstorlek** — hur stor skillnaden var, på en skala där 0 är ingenting. Behandla små värden som "en knuff", inte som "en omvandling".
- **Statistiskt signifikant** — osannolikt att det är ren slump *i detta urval*. Det säger ingenting om huruvida effekten är stor, eller huruvida den kommer att inträffa i din klass.
- **Konfidensintervall** — intervallet av resultat som data inte kan utesluta. Om intervallet innehåller noll kan resultatet vara ingenting alls, hur intressant rubriken än är.
- **[[meta-analysis-systematic-review|Metaanalys]]** — en studie som slår samman många studier. Kraftfull, och bara så bra som det material den slog samman, vilket är varför genomgångar granskas.
- **Publikationsbias** — intressanta resultat publiceras och tråkiga inte, så litteraturens genomsnitt ser rosenrödare ut än verkligheten.
- **Självskattning** — människor som beskriver sig själva. Användbart för attityder, svagt för kompetens eller beteende.
- **Kontrollgrupp** — jämförelsevillkoret. Det enskilt viktigaste att leta efter.
- **Före/efter** — mätt före och efter utan jämförelsegrupp. Suggestivt, aldrig avgörande.
- **Undergruppsanalys** — resultat för en del av urvalet. Vanligen med för låg statistisk styrka, så behandla det som en hypotes.
- **Replikering** — någon annan fick samma resultat. Sällsynt, och den starkaste evidens som finns.
- **[[benchmark|Benchmark]]** — en fast uppgiftsuppsättning för att poängsätta system. Poängen rör sig när målet rör sig, så kontrollera datumet.

## När du ändå bör sakta ner

- **Påståendet kommer från leverantören, på leverantörens mätvärden.** Det kan fortfarande vara informativt — en leverantör av [[intelligent-tutoring|AI-handledning]] rapporterar ett engagemangsmått kalibrerat mot mänskliga experter vid F1 0.83, med förbättringar från över 40 experiment på fem månader ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi m.fl., 2026]]) — men begreppet, bedömarna och måttet är leverantörens val. Be om jämförelsegruppen och utfallet utan stöd.
- **Automatisk bedömning behandlas som löst.** Hög överensstämmelse med mänskliga bedömare är reliabilitet, inte kvalitet. I en bedömningsstudie överensstämde mänskliga bedömare med multibedömarnas konsensus vid ungefär r = 0.88, så automatiska poäng nära r = 0.85 låg redan vid uppgiftens eget mättak ([[know-when-to-trust-ai-scoring-reliability-2026|När du kan lita på AI-bedömning]]).
- **Referenslistan gör tungt arbete.** Trettio referensposter med verifierbart fabricerad bibliografisk information bekräftades i 14 artiklar inom [[cs-education|datavetenskapsutbildning]], alla från 2025 och 2026 ([[citation-errors-hallucinations-computing-education-2026|Denny m.fl., 2026]]). Om ett påstående vilar på en citering, kontrollera citeringen.
- **Ingen mätte det beteende som din policy bygger på.** Över 493 avdubblade poster och 14 prioriterade studier mätte ingen studie huruvida verifiering lyckades *och* vad eleven sedan gjorde med den, bedömt mot en oberoende standard för utdatakvalitet ([[verification-quality-reliance-calibration-genai-2026|verifiering och beroendekalibrering]]). Kursregler beror på exakt det beteendet.

## Om du bygger eller köper ett verktyg

Samma kontroller inverteras till designkrav, och kunskapsbasens utvärderingssidor bär detaljerna ([[ai-ed-evaluation|AIEd-utvärdering]], [[automated-assessment|Automatiserad bedömning]]).

- **Gör jämförelsen till en del av funktionsspecifikationen.** Bestäm vad en elev annars skulle göra, och kunna säga varför ditt verktyg slår det — inte varför det slår ingenting.
- **Mät det ostödda villkoret.** Om ditt utfall är lärande, inkludera en uppgift som slutförs utan verktyget; prestation med stöd enbart vilseleder dig lika mycket som den vilseleder dina köpare.
- **Redovisa hur dina automatiska bedömningar validerades** — guldstandarden, kalibreringsmålet, vem som avgjorde oenigheter — och redovisa det som reliabilitet snarare än kvalitet.
- **Namnge versionen och datumet** i varje effektivitetspåstående, eftersom din nästa version ogiltigförklarar det.
- **Visa motvikterna:** kostnad per elev, [[accessibility|tillgänglighet]], datahantering och vad som händer med elever på gratisnivån. Se [[ai-use-disclosure|Redovisning av AI-användning]], [[privacy]] och [[governance]].

## För läsare som vill se evidensen

Kontrollerna ovan är inte folkvisdom; de kommer från dokumenterade misslyckanden i denna litteratur. Det här avsnittet behåller detaljerna för den som granskar en artikel, försvarar ett beslut eller argumenterar för att ett verktyg bör utvärderas ordentligt.

**Validitetsmisslyckandena har en fördelning, inte bara en förekomst.** I [[oneill-presumed-effective-meta-analysis-2026|O'Neills (2026)]] 46 granskade studier var missmatchning i beroende variabel det vanligaste problemet (n = 15) — måttet fångade inte det som påståendet hävdade — följt av missmatchning i oberoende variabel (n = 11), experimentdesignproblem (n = 7), datautvinningsproblem (n = 6), avsaknad av kontrollgrupp (n = 6) och icke-slumpmässig grupptilldelning (n = 6). Av de 14 metaanalyserna behandlade tolv flera effektstorlekar från samma primärstudie som oberoende, vilket blåser upp den skenbara evidensbasen.

**Undergruppspåståenden är vanligen oavgörbara i de studier som gör dem.** [[ai-tutoring-micro-rct-gcse-science-2026|GCSE-mikro-RCT:n i naturvetenskap]] rapporterar en behandling-×-status-interaktion på **0.57 poäng (95% CI -2.25 till 3.39)**, med stratifierade uppskattningar på **g = 0.28 (95% CI -0.04 till 0.59)** för en grupp och **g = 0.35 (95% CI 0.18 till 0.52)** för den andra. Ett intervall som korsar noll är inte ett [[equity-in-ai-education|rättvise]]resultat; det är en fråga för en lokal pilot.

**En syntes kan uppfylla sitt eget protokoll och ändå slå samman kvalitet utan viktning.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan m.fl. (2026)]] anger uttryckligen att de inte använde något formellt verktyg för kvalitetsbedömning och behandlade sina inklusionskriterier som strikthetströskeln, så en kvasi-experimentell studie och en randomiserad bidrog lika mycket — och deras heterogenitet läses som **I² = 82.98% under en modell med fasta effekter men 15.75% under modellen med slumpmässiga effekter**, vilket är varför en heterogenitetssiffra som citeras utan sin modell inte kan säga hur inkonsekvent materialet är.

**[[assessment-validity|Validering]] av automatisk bedömning är en del av resultatet.** Överensstämmelse med mänskliga kodare är ett reliabilitetspåstående, och taket ovan visar varför det inte är samma sak som kvalitet ([[machines-misread-pedagogical-quality|maskiner missläser pedagogisk kvalitet]]).

**Verktygets ålder är en förstklassig begränsning.** En genomgång av AI-assisterad bedömning noterar att dess egna resultat speglar specifika modellversioner vid specifika tidpunkter, och att fältets rörelse gör varje redogörelse för modellförmågor potentiellt föråldrad inom månader ([[ai-assisted-assessment-instruction-higher-ed-2026|AI-assisterad bedömning och undervisning i högre utbildning]]). Avgränsa påståenden till sin generation: "[[generative-ai|generativ AI]] förbättrade X" är inte överförbart, medan "GPT-4-erans verktyg, i denna uppgift, med denna [[scaffolding|strukturering]]" är det.

**Benchmarkmål rör sig**, så ett resultat som ett system mättar eller misslyckas med idag kan inverteras med nästa version; mättnads- och kontaminationskontroller hör hemma vid varje benchmarkbaserat påstående.

**Att läsa denna litteratur vid sidan av dess egna kritiker är normal praxis här.** Rapporteringschecklistorna för författare och granskare finns i [[reporting-interpreting-aied-research|FAQ:n om att rapportera och tolka AI-forskning]], och bedömningsvanorna på den här sidan paras med [[theory-development-aied|Teoriutveckling inom AI i utbildningen]] när ett påstående är teoretiskt snarare än empiriskt.

## En kort checklista

1. Ange ditt utfall i en mening, inklusive huruvida verktyget ingår i det.
2. Hitta jämförelsen. Ingen trovärdig jämförelse, inget beslut.
3. Matcha måttet mot ditt påstående, och föredra ett utfall utan stöd.
4. Deflatera talet: läs den bias-korrigerade effekten, inte rubriken.
5. Kontrollera modellversionen och studiens datum.
6. Läs begränsningsavsnittet som instruktioner för vad du fortfarande inte vet.
7. Beräkna kostnaden: licenser, nivåer, personaltid, dataregler.
8. Pilota smått med ett mått utan stöd, besluta sedan.
9. Boka ett granskningsdatum ett år framåt, och var redo att pensionera påståendet.

## Vanliga missuppfattningar

**"En publicerad metaanalys är fastställd evidens om AI i utbildningen."** Fältets synteser har inte klarat granskning. [[oneill-presumed-effective-meta-analysis-2026|O'Neills (2026)]] granskning av **14 peer-reviewed metaanalyser** som hävdar att AI förbättrar utbildning fann att **ingen** gav ett giltigt underlag för den slutsatsen. En sammanvägd effektstorlek är bara så bra som studierna som slogs samman, och i denna litteratur har sammanvägningen rutinmässigt inkluderat designer som inte kunde tillskriva utfallet till AI. Innan du citerar ett metaanalytiskt tal, fråga vad det aggregerade.

**"Den större effektstorleken tillhör den bättre interventionen."** Ofta det motsatta. I den genomgångskontext den här sidan dokumenterar hade bara **21%** av studierna en väldefinierad behandling, en kontrollgrupp och ett giltigt lärandemått — och den rapporterade fördelen för "att använda ChatGPT" blev *större* än för specialbyggda [[intelligent-tutoring|intelligenta handledningssystem]]. Svagt specificerade behandlingar tenderar att ge uppblåsta effekter, eftersom jämförelsen är vagare och utfallsmåttet lösare. Ett större tal är ett skäl att titta på designen, inte ett skäl att föredra interventionen.

**"Högre betyg medan verktyget används visar att verktyget lärde ut mer."** I en [[k-12|K-12]]-studie i matematik fick elever som övade med en allmän [[conversational-ai|chattbot]] bättre övningsbetyg och presterade sedan **cirka 17% sämre** på bedömning utan stöd. Övningsprestation mätt med verktyget närvarande är det uppblåsta måttet; det utan stöd är utfallet, och bara ett av dem steg.

**"Om effekten är verklig spelar implementeringsdetaljerna inte så stor roll."** De *är* effekten. En studie som följde 30 studenter i en kurs vid en institution, på en version av verktyget som ingen använder nu, har producerat ett resultat om en konfiguration som inte längre finns. Behandlingsspecifikation, version och miljö är en del av påståendet snarare än kontext runt det.

## Anslutna begrepp

- [[limitations-in-aied-research]]
- [[learning-design]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[learning-gains]]
- [[differential-effects-across-learner-groups]]
- [[research-methods-aied]]
- [[ai-assisted-educational-research]] — AI-assisterad utbildningsforskning
- [[meta-analysis-systematic-review]]
- [[quantitative-research]]
- [[benchmark]]
- [[rct]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[ai-use-disclosure]]
- [[theory-development-aied]]

## Anslutna artiklar

- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensisk granskning av 14 AIEd-metaanalyser
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Publikationsbiasjusterade AI-effekter ungefär en tredjedel av rapporterad storlek
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT i utbildningen: en effekt på jakt efter en orsak
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Inklusionskriterier som strikthetströskel, och heterogenitet som ändras med modellen
- [[know-when-to-trust-ai-scoring-reliability-2026]] — När reliabiliteten hos automatisk bedömning möter uppgiftens mättak
- [[verification-quality-reliance-calibration-genai-2026]] — Vad litteraturen om verifiering och beroende inte mäter
- [[citation-errors-hallucinations-computing-education-2026]] — Fabricerade referenser som nådde tryck 2025–2026
- [[stanford-evidence-base-ai-k12-2026]] — Övningsvinster, tentaförluster: problemet med att ta bort stödet i K-12-matematik
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Undergruppseffekter vars konfidensintervall korsar noll
- [[chick-faculty-development-ethical-ai-2026]] — Möjliggörande villkor: policysignaler, personliga prenumerationer, ingen tid
- [[ai-tutoring-quality-k12-methodologies-2026]] — Leverantörsmått med kalibrering och antal experiment redovisade
- [[ai-assisted-assessment-instruction-higher-ed-2026]] — Resultat knutna till modellversioner, och fältets omsättning
- [[instruction-partners-ai-in-action-learning-tour-2026]] — Antal oberoende evidens för 16 elevvända AI-produkter som redan används
- [[ai-higher-ed-service-delivery-systematic-review-2026]] — En genomgång kan kvantifiera rapporteringssnedvridningen i sitt eget material
