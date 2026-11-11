---
title: "Vad bör utbildare undvika att göra med AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-11T06:20:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Det mesta av vägledningen om AI i utbildningen säger vad man kan prova. Den här sidan samlar de praktiker som evidensen säger att man ska sluta med, ordnade efter den roll som skulle behöva sluta. Felaktiga föreställningar behandlas på annat håll: [[addressing-common-misconceptions-ai-education|FAQ:n om missuppfattningar]] tar dem, och begreppssidan [[misconceptions]] förklarar varför de består. Det forskningen ännu inte kan säga hör till [[limitations-in-aied-research|begränsningar i AIEd-forskningen]]. Det som följer är steget efter föreställningen: vad människor gör, vad det kostar och vad man ska göra i stället.

Tre misslyckanden återkommer i alla roller.

1. **Substitution.** Ett verktyg utför det tänkande som inläraren skulle göra, och resultatet bedöms som om inläraren hade gjort det. Uppsatsen som lämnas in är ett protokoll över vad modellen kan, inte över vad studenten kan.
2. **Oförtjänt evidens.** En signal som är billig att samla in, som självförtroende, flyt, engagemang eller en slutförandegrad, behandlas som bevis för något den inte kan visa. En instrumentpanel kan rapportera fyrtio minuter i en handledningssession; den kan inte rapportera om någon lärde sig pq-formeln.
3. **Struktur lämnad åt uppmaningar.** En varning, en policymening eller en utbildningssession får göra det jobb som gränssnittsdesign, bedömningsdesign eller styrning måste göra. Kursplanen säger att AI ska användas ansvarsfullt, och handledaren lämnar ändå över det färdiga svaret vid första prompten.

## Kortversionen

**1.** Betygsätt, citera eller lyft aldrig ett resultat som bevis för den förmåga som producerade det.

**2.** Samla in det oassisterade måttet vid sidan av det assisterade, varje gång.

**3.** Behandla flyt, självförtroende och engagemang som egenskaper hos användningen, inte som lärande.

**4.** Lägg skyddet i arbetsflödet, inte i en varning.

**5.** Utgå från att alla data som verktyget kan se kommer att sparas, kombineras och läcka.

**6.** Om påståendet kommer med en demo men inte med en jämförelse är det marknadsföring.

## För lärare

**Certifiera inte output som förmåga.** En polerad inlämning är bevis på en polerad inlämning. Om en student lämnar in en litteraturöversikt vars källor du inte kan kontrollera mot något som kursen har lärt ut, och bedömningen inte kan skilja vad den studenten kan utan hjälp, har bedömningen slutat mäta det som examen intygar ([[assessment-validity]], [[authentic-assessment]]). Åtgärden är en omdesign av uppgiften; en strängare hederskod gör det inte.

**Använd inte en detektorpoäng som bevis på fusk.** I en kontrollerad studie av 642 publicerade sammanfattningar flaggade detektorerna 38–80% av riktlinjeenlig lätt AI-redigering och 9–15% av oförändrad mänsklig text, samtidigt som de fångade färre än 4% av omskrivningar som körts genom en humaniseringstjänst ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). En oberoende benchmark fann att ingen av 14 kommersiella verktyg nådde 80% noggrannhet, och enkel parafrasering halverar även det ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Vid realistiska basfrekvenser är falska positiva fler än sanna positiva ([[should-we-use-ai-detectors]]). En detektor kan starta ett samtal; den kan inte avsluta ett.

**Lägg inte till AI i en bedömning som du inte har omdesignat.** Att skruva fast ett verktyg på en uppgift designad för oassisterad prestation ger exakt den betygsinflation som döljer förlusten, med läxan upp och tentan ner. Fråga om varje betygsatt uppgift vad den oassisterade versionen skulle visa, och åtgärda uppgiften först ([[reducing-ai-misuse]]). Om läxuppgifterna och klassrumstestet prövar samma färdighet är det bara en av dem som mäter studenten.

**Behandla inte engagemang som lärande.** Tid på uppgiften, nöjdhet, volym av hjälpsökande och chattaktivitet är alla lätta att instrumentera och alla förenliga med inget lärande alls. I ett 3 × 2-experiment med 186 deltagare som bedömde civilrättsliga fall på en LLM-stödd plattform gav ett skydd som sänkte bytet till en felaktig AI-position från 42–60.5% till 5.7–8.2% ingen mätbar lärandeeffekt inom sessionen (β = 0.03, p = 0.18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Beteendet förändrades; lärandemåttet gjorde det inte ([[student-engagement]]).

**Förlita dig inte på en varning där gränssnittet kunde begränsa.** En handledare som kan producera det färdiga svaret kommer att göra det under tidspress, vad kursplanen än säger. Skyddet som fungerar är inbyggt i interaktionen ([[reducing-ai-misuse]], [[pedagogical-safety]]). Att hålla tillbaka slutsvaret under de två första försöken är ett designbeslut; att be studenterna att inte be om det är en begäran.

**Klistra inte in elevarbeten, IEP:er, disciplinärenden eller identifierbara utkast i ett konsumentverktyg.** Dataminimering är ett designbeslut som du fattar på studentens vägnar, vare sig du har tänkt på det eller inte ([[privacy]]). Det kostnadsfria chattbotkontot som svarar på en fråga om en students beteendeplan är också en kopia av den planen på någon annans server.

## För inlärare

**Lämna inte över den del du ska öva på.** Anta att uppgiften är en uppsats på fem stycken: du klistrar in prompten i en chattbot, tar utkastet den ger och lämnar in det. Det du lämnar in är ett protokoll över vad modellen kan. Frågan är vilket kognitivt arbete som flyttas, inte hur mycket AI du använder. Att lägga ut läxan på andra höjer läxresultatet medan det sänker resultatet på en tenta utan hjälpmedel: över 26,811 gymnasieelever som följdes i 30 månader steg läxresultatet med 18% och tentaresultatet föll med 20% inom sex månader ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei och Wu, 2026]]). Den övning som bygger återhämtningsbar kunskap gick till verktyget ([[reducing-ai-misuse]]). Om övningen är poängen kan verktyget inte göra övningen.

**Läs inte flyt som korrekthet.** Flytande text är output från en [[llm|språkmodell]] vare sig innehållet är sant eller inte, och mekanismen som gör den övertygande är densamma som gör den fel ([[hallucination-risk]]). Verifiera det specifika påståendet, inte tonen i stycket. Den vanan uppstår sällan av sig själv: i en passivt spårad panel med 900 amerikanska vuxna som fick en AI-sammanfattning följde läsarna en källa som citerades i den vid 1% av besöken ([[trust-calibration-chatbots-design-problem-2026|Jaidka och Cai, 2026]]). Om uppgiften kräver tre källor, öppna alla tre.

**Acceptera inte instämmande som feedback.** Modeller bekräftar betydligt mer än människor: över 11 modeller bekräftade AI-svar användarna 49% oftare än mänskliga svar, och överskottet är det som får interaktionen att kännas stödjande ([[ai-personal-coach-review-benefits-risks-2026|Potel och Kumashiro, 2026]]). En handledare som aldrig säger emot dig har tagit bort den korrigerande signal du kom för ([[ai-sycophancy]]). Be om invändningen, inte om bifallet: ”Vad är det för fel på det här argumentet, och vad skulle en skeptiker säga?”

**Byt inte ut en fråga mot ett svar när du kör fast.** Den produktiva kampen du hoppar över är lärandet. Hjälpsökande som hämtar ett svar är ett annat beteende än hjälpsökande som hämtar en ledtråd ([[help-seeking]], [[desirable-difficulties]]). Använd verktyg som håller tillbaka det färdiga svaret, och be om nästa steg i stället för lösningen.

**Klistra inte in personlig information, hälsoinformation eller familjeinformation i ett verktyg för att få ett bättre svar.** Verktyget har ingen skyldighet att glömma den, och integritetskostnaden syns inte i svarets kvalitet ([[privacy]]). En bättre prompt kräver inte din diagnos, din adress eller dina familjemedlemmars namn.

## För föräldrar och familjer

**Gör inte läxan med verktyget, och låt den inte bli gjord bredvid dig.** Mönstret i data är betygsinflation med en dold kostnad: i samma panel över 30 månader steg läxresultatet med 18% medan resultatet på tenta utan hjälpmedel föll med 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei och Wu, 2026]]). Ett barn som kommer hem med perfekt läxa och underkänt på ett kapitelprov visar dig exakt den klyftan. Det du kan kontrollera är processen. Kan ditt barn förklara steget, göra om en uppgift på papper och säga vilken del det var osäkert på? Om inte har verktyget gjort uppgiften.

**Låt inte en chattbot bli förtrogen.** Sykofantiska system bekräftar långt mer än människor, 49% mer över 11 modeller, och den bekräftelsen är det som gör att de känns trygga att prata med ([[ai-personal-coach-review-benefits-risks-2026|Potel och Kumashiro, 2026]]). I en stor longitudinell studie vände sig användarna till sykofantisk AI för personliga råd nästan lika ofta som till nära vänner och familj, med lägre tillfredsställelse i sina verkliga relationer ([[sycophantic-ai-social-interaction-2026]]). Ett barn som kommer med oro till en modell som alltid håller med blir inte hörd. Det blir speglat. Om ditt barn pratar med en chattbot om en vänskap eller en förlust är det ögonblicket att fråga vem mer det berättade för.

**Räck inte en generativ chattbot till ett litet barn och kalla det övervakat för att du är i rummet.** Vägledningen efter åldersnivå är konkret: strukturerade, icke-generativa aktiviteter för 9 till 12 år, övervakad generativ användning med etiskt resonemang från 13 år ([[ai-guidance-children-under-13]]). För de yngsta barnen handlar risken om föreställning. Preoperationella barn accepterar genererat innehåll som sant, och systemen är inte utvecklingsmässigt kalibrerade i den feedback de ger. Vuxen samanvändning betyder att sitta bredvid barnet och fråga vad leksaken just gjorde, inte att övervaka från dörren ([[early-childhood-elementary-ai-education]]).

**Utgå inte från att skolans verktyg skyddar ditt barns data för att skolan valde det.** Fråga vad som sparas, hur länge, om det tränar något och vem mer som ser det ([[privacy]]). Medvetenhet följer inte av exponering: en månad efter en lektion där en årskurs 7-klass såg sitt eget loggade beteende projicerat live valde 66% av de 47 eleverna fortfarande den minst skyddande chattbotinställningen ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Ställ frågorna till skolan skriftligt, och be om svaren skriftligt.

**Använd inte ett detektorresultat för att anklaga ditt barn, eller för att backa upp en anklagelse från en skola.** I en kontrollerad studie av 642 publicerade sammanfattningar flaggade detektorerna 9–15% av oförändrad mänsklig text och fångade färre än 4% av humaniserade AI-omskrivningar ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Vid realistiska basfrekvenser är falska positiva fler än sanna positiva ([[ai-detection]]). Behandla en flagga som skäl att be om utkastens historik och ett samtal, inte som ett fynd.

**Dra inte slutsatsen att ett förbud mot verktyget är det säkra alternativet.** Misstro är ett kalibreringsfel med sin egen kostnad, nämligen förlorad förmåga, och färdigheten som spelar roll är matchat självförtroende, inte undvikande ([[trust-calibration]]). Det användbara föräldragreppet är detsamma som forskningen stöder för studenter: kräv ett verifieringssteg och gör det billigt nog att ett trött barn faktiskt gör det ([[verify-ai-output]]). Att be om att få se källan en chattbot använde kostar en minut; att förbjuda chattboten kostar övningen.

**Förväxla inte ett innehållsfilter med säkerhet.** Filter hanterar vad ett system säger. De hanterar inte vad en interaktion gör med en inlärare: urholkad övning, sykofantiskt instämmande eller ojämna vägran ([[pedagogical-safety]]).

## För utbildningsutvecklare och pedagogiska utvecklare

**Kör inte verktygsutbildning och kalla det AI-kompetens.** En session om [[prompt-engineering|promptning]] lär ut en produkts gränssnitt. [[ai-literacy|AI-kompetens]] är förmågan att bedöma när verktyget bör användas, vad det gör och vad som ska verifieras. Lärare som lär sig knapparna utan omdömet går därifrån med självförtroende och utan kalibrering ([[teacher-ai-competency]]). En workshop som slutar med att alla kan generera en lektionsplan, och ingen kan säga när den planen inte bör användas, har lärt ut gränssnittet.

**Kör inte engångsfortbildning och förvänta dig att praktiken ändras.** Evidensen om [[professional-training|professionellt lärande]] är entydig vad gäller längd och uppföljning: enskilda evenemang flyttar självrapporterat självförtroende, sällan klassrummets beteende, och självförtroendevinsten kan dölja att förändringen uteblev ([[educational-development]]). En tvåtimmarsession i augusti, utan uppföljning i oktober, är en insats för självförtroendet.

**Bortse inte från det bedömningssystem du lämnar kvar.** Lärarkåren antar den praktik du lär ut bara om bedömningen de hålls till inte straffar den. En workshop om AI-resistent uppgiftsdesign som löper vid sidan av en oförändrad tentaregim lär lärarkåren att utbildningen är dekorativ.

**Demonstrera inte det okritiska bruk du varnar för.** Att visa ett verktyg genom att generera en lektionsplan inför lärarkåren, utan ett verifieringssteg, lär publiken att output är produkten. Generera den inför dem, och markera sedan de två påståenden som behöver kontrolleras.

**Acceptera inte en leverantörsdemo som bevis på effektivitet.** Påståendet du utvärderar handlar om lärande, och en demo visar förmåga. Be om oassisterade utfall, delgruppsresultat och säkerhetstestning över flera turer ([[checking-whether-educational-ai-works]]).

## För utvecklare av utbildningsprogramvara

**Optimera inte det mått som är lätt att logga.** Sessionslängd, antal meddelanden och nöjdhetsbetyg förbättras under nästan varje förändring; lärandet gör det ofta inte. Samma team som levererar ett skydd kan leverera en instrumentpanel som belönar interaktionsvolym, och de två pekar i motsatta riktningar ([[learning-analytics]], [[student-engagement]]). Om ditt framgångsmått är meddelanden per session har du byggt en produkt som belönar studenter för att stanna i chatten.

**Leverera inte en detektor utan en valideringsstudie mot konstruktet.** En benchmark med femton EEG-modeller nådde 0.9853 i F1 under stratifierad korsvalidering; trialoberoende Group K-Fold, som respekterar trialgränserna, sänkte toppen till 0.6038 mot en slumpnivå på 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara och Halloluwa, 2026]]). En leendedetektor kan gå *negativt* mot observatörsbedömd empati eftersom den saknar den kontext en mänsklig bedömare har ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publicera valideringsprotokollet vid sidan av rubriksiffran.

**Slut dig inte till affekt, uppmärksamhet eller ”engagemang” från ansikten och kroppar utan samtycke och ett angivet syfte.** Risken över flera turer är inte risken i en tur: i en översikt om pedagogisk säkerhet eskalerade felen från 17.7% vid utvärderingar med en tur till 77.8% vid dem med flera turer ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Ett system som certifierats på isolerade prompter är certifierat på en interaktion som studenterna inte har ([[pedagogical-safety]], [[privacy]]).

**Dölj inte överlämnandet.** En student som inte kan avgöra när en handledare genererar kontra hämtar, eller när en människa är i loopen, kan inte kalibrera sitt förtroende för den. [[automation-bias|Automatiseringsbias]] verkar renast när systemet har rätt och människan har slutat kontrollera ([[trust-calibration]]). Säg i gränssnittet när en person kommer att läsa arbetet.

**Designa inte för benchmarken och påstå sedan klassrummet.** Benchmarkprestanda är en egenskap hos benchmarken. Redovisa de användningsvillkor du testade, populationen och uppgifterna; annars läses siffran som ett löfte om en annan miljö ([[limitations-in-aied-research]]).

**Gör inte verktyget till den enda vägen till hjälp.** Om en students tillgång till [[feedback|återkoppling]] beror på en modells tillgänglighet, kvot eller licens är rättvisefrågan redan avgjord av upphandlingen ([[equity-in-ai-education]]).

## För utbildningsadministratörer

**Köp inte kapacitetspåståenden som utfallsbevis.** Leverantörer kan demonstrera en produkt; bara en utvärdering kan demonstrera lärande. Kräv oassisterade utfall, delgruppsresultat, bortfall och en plan för vad som händer när piloten slutar ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). En demo visar handledaren lösa ett problem; den visar inte en student lösa nästa.

**Inför inte övervakning för att den är tillgänglig.** System för tentamensövervakning fångar ansiktsbilder, identitetshandlingar, rumsavskanningar inklusive 360-graderssvep och mikrofonljud. En översikt av 80 studier fann att bara 25% tog upp etiska frågor alls, 35% redovisade inte sitt dataset och 30% gick inte att reproducera ([[automated-online-exam-proctoring-decade-review-2026|Malhotra och Chhabra, 2026]]). Kostnaden landar på studenterna, och evidensbasen är tunnare än kontraktet antyder ([[privacy]], [[remote-proctoring]]).

**Skriv inte en policy som bara förbjuder och kalla den styrning.** Ett förbud utan omdesignad bedömning, utan stöd och utan överklagandeväg flyttar beteendet i stället för att förhindra det, och det straffar de studenter som har svårast att bestrida en falsk anklagelse. [[governance|Policy]] måste också omfatta bedömaren: i ett red-team-test av ett vardagligt bedömningsflöde flyttade två av fem promptinjektionsstrategier gömda i en inlämning en underkänd uppsats till godkänt med 100% och 94% framgång över filtyper ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). En policy som begränsar studenter men inte bedömningskedjan är halv en policy.

**Jämställ inte införande med förbättring.** En instrumentpanel som rapporterar användning, nöjdhet och slutförande kommer att se ut som framgång medan lärandemåttet ligger stilla. Bestäm i förväg vilket utfall som skulle få dig att säga upp kontraktet ([[ai-ed-evaluation]]). Skriv ner den siffran innan piloten börjar.

**Låt inte tillgänglighet anlända som en begäran om anpassning.** I en scopingöversikt av 40 studier om digitala hjälpmedel för [[neurodiversity|neurodivergenta]] studenter gjorde 28 en formell diagnos till ett villkor för deltagande. Den diagnosgrindade modellen utesluter varje inlärare med behov och utan etikett ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## För utbildningsforskare

**Låt inte självrapportering bära det kausala påståendet.** Självförtroende, upplevt lärande och nöjdhet är utfall, men de är inte de utfall som de flesta studier säger sig mäta. [[empathy|empati]]litteraturen är det tydligaste fallet: ett fält som avser att lära ut empati mäter mestadels bekvämlighet, och en översikt av 17 studier fann självförtroendevinster långt vanligare än bevis på empati i sig ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail och Zafira, 2026]]; [[self-report-measures]]).

**Citera inte en effekt utan dess design.** I en kritisk granskning av 80 HCI-studier om [[critical-thinking|kritiskt tänkande]] med AI saknade 42 (52%) kontrollgrupp ([[critical-review-critical-thinking-hci-research-ai-2026]]). En effekt som gör rubriker, från 30 studenter i en kurs på en plats, är den vanliga formen av ett bräckligt påstående ([[limitations-in-aied-research]]).

**Rapportera inte heterogenitet utan modellen.** Samma data ger I² = 82.98% under en modell med fasta effekter och I² = 15.75% under en modell med slumpmässiga effekter ([[ai-supported-instruction-stem-meta-analysis-2026]]). Ett citerat I² utan sin modell är otolkbart ([[meta-analysis-systematic-review]]).

**Generalisera inte från ett enda sammanhang och kalla det ett fynd.** En kurs, en institution, en modellversion, ett språk. Modellbeteende ändras med varje release, och detektorer tränade på en generation tappar recall på nästa ([[research-gaps-aied]], [[ai-detection]]).

**Behandla inte en korrelation mellan interaktion och utfall som en mekanism.** Promptvolym mäter inte kognitiv avlastning. Kluster efter volym skilde sig inte i fördelningen av kognitivt arbete, och handkodad dialog fann ingen avlastning alls i 49.6% av 125 dialoger ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Mät arbetet självt.

**Publicera inte ett begränsningsstycke som kunde ha skrivits före studien.** Namnge det specifika hotet, det specifika antalet och det påstående det begränsar. Det är det som gör en begränsning användbar för nästa läsare ([[interpreting-and-applying-aied-research]]).

## Varför dessa hör ihop

Varje punkt ovan upphöjer en proxy till en dom. Uppsatsen står för skribenten, poängen står för fusket, leendet står för empatin, och demon står för lärandet. Korrigeringen är alltid densamma: namnge konstruktet, hitta ett mått som skulle kunna falla ut åt andra hållet och samla in det vid sidan av det bekväma.

Ingen av dessa varningar betyder att verktyget alltid är fel. En detektor kan vara ett skäl att prata med en student. En chattbot kan vara en användbar repetition. En instrumentpanel kan vara en anledning att ställa en fråga. Det som orsakar skada är substitutionen.

## Vad du ska göra den här veckan

- Välj en betygsatt uppgift och skriv ner vad den skulle visa med verktyget stängt. Om svaret är ”inget annat” är uppgiften problemet.
- Lägg till ett oassisterat mått i en kurs som för närvarande bara rapporterar assisterad prestation.
- Läs din institutions kontrakt för tentamensövervakning eller AI-verktyg vad gäller lagring, sekundär användning och intrångsvillkor, och kontrollera om samtyckestexten beskriver vad systemet faktiskt fångar.
- Be en leverantör om oassisterade utfall och delgruppsresultat. Om svaret är en demo har du ditt svar.
- Lägg den andra halvan av nästa lärarsession på omdesign av bedömning i stället för på prompter.

## Vart du går härnäst

- [[addressing-common-misconceptions-ai-education]]: föreställningarna bakom dessa praktiker, och hur man korrigerar dem utan nedlåtenhet.
- [[limitations-in-aied-research]]: vad evidensbasen ännu inte kan bära.
- [[reducing-ai-misuse]]: strukturella hävstänger mot missbruk, och varför de slår uppmaningar.
- [[pedagogical-safety]]: vad en handledare kan göra mot en inlärare medan den klarar varje innehållskontroll.
- [[should-we-use-ai-detectors]]: detektorevidensen i sin helhet.
- [[checking-whether-educational-ai-works]]: hur man utvärderar ett påstående innan man inför det.
