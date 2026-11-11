---
title: "Vad bör utbildare undvika att göra med AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
contributors: [editor]
source_updated: "2026-11-10T22:10:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Det mesta av vägledningen om AI i utbildningen är formulerad som vad man kan prova. Den här sidan är den andra listan: de praktiker som evidensen säger att man ska sluta med, ordnade efter den roll som skulle behöva sluta. Den är medvetet inte en lista över felaktiga föreställningar – [[addressing-common-misconceptions-ai-education|FAQ:n om missuppfattningar]] hanterar dem, och begreppssidan [[misconceptions]] förklarar varför de består – och inte heller en lista över vad forskningen ännu inte kan säga dig, vilket [[limitations-in-aied-research|begränsningar i AIEd-forskningen]] täcker. Fokus här är steget efter en föreställning: vad människor faktiskt gör, vad det kostar och vad man ska göra i stället.

Tre misslyckanden återkommer i varje roll. **Substitution** – ett verktyg utför det tänkande som inläraren skulle göra, och resultatet bedöms som om inläraren hade gjort det. **Oförtjänt evidens** – en signal som är lätt att samla in (självförtroende, flyt, engagemang, en slutförandegrad) behandlas som bevis för något den inte kan visa. **Struktur lämnad åt uppmaningar** – en varning, en policymening eller en utbildningssession får göra det jobb som gränssnittsdesign, bedömningsdesign eller styrning måste göra.

## Kortversionen

**1.** Betygsätt, citera eller lyft aldrig ett resultat som bevis för den förmåga som producerade det.

**2.** Samla in det oassisterade måttet vid sidan av det assisterade, varje gång.

**3.** Behandla flyt, självförtroende och engagemang som egenskaper hos användningen, inte som lärande.

**4.** Lägg skyddet i arbetsflödet, inte i en varning.

**5.** Utgå från att alla data som verktyget kan se kommer att sparas, kombineras och läcka.

**6.** Om påståendet kommer med en demo men inte med en jämförelse är det marknadsföring.

## För inlärare

**Lämna inte över den del du ska öva på.** Skillnaden handlar inte om hur mycket du använder AI utan om vilket kognitivt arbete som flyttas. Att lägga ut läxan på andra höjer läxresultatet medan det sänker resultatet på en tenta utan hjälpmedel – en vinst på 18 % mot en förlust på 20 % i en studie på gymnasiet – eftersom den övning som bygger återhämtningsbar kunskap gick till verktyget ([[reducing-ai-misuse]]). Om övningen är poängen kan verktyget inte göra övningen.

**Läs inte flyt som korrekthet.** Flytande text är en språkmodells output vare sig innehållet är sant eller inte, och mekanismen som gör den övertygande är densamma som gör den fel ([[hallucination-risk]]). Verifiera det specifika påståendet, inte tonen i stycket. Verifieringsvanan uppstår sällan av sig själv: i en panel med 900 vuxna som fick en AI-sammanfattning följde läsarna en källa som citerades i den vid 1 % av besöken ([[trust-calibration]]).

**Acceptera inte instämmande som feedback.** Modeller bekräftar betydligt mer än människor – över 11 modeller bekräftade AI-svar användarna 49 % oftare än mänskliga svar – och överskottet är det som får interaktionen att kännas stödjande ([[ai-sycophancy]]). En handledare som aldrig säger emot dig har tagit bort den korrigerande signal du kom för. Be om invändningen, inte om bifallet.

**Byt inte ut en fråga mot ett svar när du kör fast.** Den produktiva kampen du hoppar över är lärandet; hjälpsökande som hämtar ett svar är ett annat beteende än hjälpsökande som hämtar en ledtråd ([[help-seeking]], [[desirable-difficulties]]). Använd verktyg som håller tillbaka det färdiga svaret.

**Klistra inte in personlig information, hälsoinformation eller familjeinformation i ett verktyg för att få ett bättre svar.** Verktyget har ingen skyldighet att glömma den, och integritetskostnaden syns inte i svarets kvalitet ([[privacy]]).

## För föräldrar och familjer

**Gör inte läxan med verktyget, och låt den inte bli gjord bredvid dig.** Mönstret som syns i data är betygsinflation med en dold kostnad: läxresultat upp 18 % medan resultat på tenta utan hjälpmedel faller 20 % ([[reducing-ai-misuse]]). Det du kan kontrollera är processen – kan ditt barn förklara steget, göra om det på papper och säga vad det var osäkert på? Om inte gjorde verktyget uppgiften.

**Låt inte en chattbot bli förtrogen.** Sykofantiska system bekräftar långt mer än människor – 49 % mer över 11 modeller – och bekräftelsen är mekanismen som gör att det känns tryggt att prata med dem ([[ai-sycophancy]]). I en stor longitudinell studie vände sig användarna till sykofantisk AI för personliga råd nästan lika ofta som till nära vänner och familj, med lägre tillfredsställelse i sina verkliga relationer ([[sycophantic-ai-social-interaction-2026]]). Ett barn som kommer med oro till en modell som alltid håller med blir inte hörd; det blir speglat.

**Räck inte en generativ chattbot till ett litet barn och kalla det övervakat för att du är i rummet.** Vägledningen efter åldersnivå är konkret: strukturerade, icke-generativa aktiviteter för 9 till 12 år, övervakad generativ användning med etiskt resonemang från 13 år ([[ai-guidance-children-under-13]]). För de yngsta barnen är risken föreställning – preoperativa barn accepterar genererat innehåll som sant, och systemen är inte utvecklingsmässigt kalibrerade i den feedback de ger. Vuxen samanvändning betyder att fråga vad leksaken just gjorde, inte att övervaka från dörren ([[early-childhood-elementary-ai-education]]).

**Utgå inte från att skolans verktyg skyddar ditt barns data för att skolan valde det.** Fråga vad som sparas, hur länge, om det tränar något och vem mer som ser det ([[privacy]]). Medvetenhet följer inte av exponering: en månad efter en lektion där eleverna såg sitt eget loggade beteende projicerat live valde 66 % av eleverna i årskurs 7 fortfarande den minst skyddande chattbotinställningen ([[privacy]]).

**Använd inte ett detektorresultat för att anklaga ditt barn, eller för att backa upp en anklagelse från en skola.** I det starkaste kontrollerade testet flaggade detektorerna 9–15 % av oförändrad mänsklig text och fångade färre än 4 % av humaniserade AI-omskrivningar; vid realistiska basfrekvenser är falska positiva fler än sanna positiva ([[ai-detection]]). Behandla en flagga som skäl att be om utkastens historik och ett samtal, inte som ett fynd.

**Dra inte slutsatsen att ett förbud mot verktyget är det säkra alternativet.** Misstro är ett kalibreringsfel med sin egen kostnad – förlorad förmåga – och färdigheten som spelar roll är matchat självförtroende, inte undvikande ([[trust-calibration]]). Det användbara föräldragreppet är detsamma som forskningen stöder för studenter: kräv ett verifieringssteg och gör det billigt nog att ett trött barn faktiskt gör det ([[verify-ai-output]]).

**Förväxla inte ett innehållsfilter med säkerhet.** Filter hanterar vad ett system säger; de hanterar inte vad en interaktion gör med en inlärare – urholkad övning, sykofantiskt instämmande eller ojämna vägran ([[pedagogical-safety]]).

## För lärare

**Certifiera inte output som förmåga.** En polerad inlämning är bevis på en polerad inlämning. Om bedömningen inte kan skilja vad studenten kan göra utan hjälp har bedömningen slutat mäta det som examen intygar ([[assessment-validity]], [[authentic-assessment]]). Åtgärden är en omdesign av uppgiften, inte en strängare hederskod.

**Använd inte en detektorpoäng som bevis på fusk.** Det starkaste kontrollerade testet flaggar 38–80 % av lätt AI-redigering som följer riktlinjerna och 9–15 % av oförändrad mänsklig text, samtidigt som det fångar färre än 4 % av omskrivningar som körts genom en humaniseringstjänst; 14 kommersiella verktyg i en oberoende benchmark låg alla under 80 % noggrannhet, och vid realistiska basfrekvenser är falska positiva fler än sanna positiva ([[ai-detection]], [[should-we-use-ai-detectors]]). En detektor kan starta ett samtal; den kan inte avsluta ett.

**Lägg inte till AI i en bedömning du inte har omdesignat.** Att lägga ett verktyg ovanpå en uppgift designad för oassisterad prestation ger exakt den betygsinflation som döljer förlusten – läxan upp, tentan ner. Fråga om varje betygsatt uppgift vad den oassisterade versionen skulle visa, och åtgärda uppgiften först ([[reducing-ai-misuse]]).

**Behandla inte engagemang som lärande.** Tid på uppgiften, nöjdhet, volym av hjälpsökande och chattaktivitet är alla lätta att instrumentera och alla förenliga med inget lärande alls. Ett skydd som sänkte elevernas byte till en felaktig AI-position från 42–60,5 % till 5,7–8,2 % gav ingen mätbar lärandeeffekt inom sessionen (β = 0,03, p = 0,18). Beteendet hölls kvar; lärandet rörde sig inte ([[student-engagement]]).

**Förlita dig inte på en varning där gränssnittet kunde begränsa.** En handledare som kan producera det färdiga svaret kommer att göra det under tidspress. Skyddet som fungerar är det som är inbyggt i interaktionen, inte meningen i kursplanen ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Klistra inte in elevarbeten, IEP:er, disciplinregister eller identifierbara utkast i ett konsumentverktyg.** Dataminimering är ett designbeslut du fattar på studentens vägnar vare sig du har tänkt på det eller inte ([[privacy]]).

## För utbildningsutvecklare och pedagogiska utvecklare

**Kör inte verktygsutbildning och kalla det AI-kompetens.** En session om promptning lär ut en produkts gränssnitt; [[ai-literacy]] är förmågan att bedöma när verktyget bör användas, vad det gör och vad som ska verifieras. Lärare som lär sig knapparna utan omdömet går därifrån med självförtroende och utan kalibrering ([[teacher-ai-competency]]).

**Kör inte engångsfortbildning och förvänta dig att praktiken ändras.** Evidensen om [[professional-training|professionellt lärande]] är entydig vad gäller duration och uppföljning: enskilda evenemang flyttar självrapporterat självförtroende, sällan klassrummets beteende, och självförtroendevinsten kan dölja att förändringen uteblev ([[educational-development]]).

**Bortse inte från det bedömningssystem du lämnar kvar.** Lärarkåren kommer att anta praktiken du lär ut bara om bedömningen de hålls till inte straffar den. En workshop om AI-resistent uppgiftsdesign som löper vid sidan av en oförändrad tentaregim lär lärarkåren att utbildningen är dekorativ.

**Demonstrera inte det okritiska bruk du varnar för.** Att visa ett verktyg genom att generera en lektionsplan inför lärarkåren, utan ett verifieringssteg, lär publiken att output är produkten.

**Acceptera inte en leverantörsdemo som bevis på effektivitet.** Påståendet du utvärderar handlar om lärande, och en demo visar förmåga. Be om oassisterade utfall, delgruppsresultat och säkerhetstestning över flera turer ([[checking-whether-educational-ai-works]]).

## För utvecklare av utbildningsprogramvara

**Optimera inte det mått som är lätt att logga.** Sessionslängd, antal meddelanden och nöjdhetsbetyg förbättras under nästan varje förändring; lärandet gör det ofta inte. Samma team som levererar ett skydd kan leverera en instrumentpanel som belönar interaktionsvolym, och de två pekar i motsatta riktningar ([[learning-analytics]], [[student-engagement]]).

**Leverera inte en detektor utan en valideringsstudie mot konstruktet.** En modell som får 0,98 i F1 på en läckt delning kan falla till 0,60 vid oberoende validering i ett nytt försök, och en leendedetektor kan gå *negativt* mot observatörsbedömd empati eftersom den saknar den kontext en mänsklig bedömare har ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publicera valideringsprotokollet, inte bara rubriken.

**Slut dig inte till affekt, uppmärksamhet eller ”engagemang” från ansikten och kroppar utan samtycke och ett angivet syfte.** Risken över flera turer är inte risken i en tur: skadefrekvensen i en översikt ökade från omkring 18 % i utvärderingar med en tur till omkring 78 % med flera turer, så ett system som certifierats på isolerade prompter är certifierat på en interaktion studenterna inte har ([[pedagogical-safety]], [[privacy]]).

**Dölj inte överlämnandet.** En student som inte kan avgöra när en handledare genererar kontra hämtar, eller när en människa är i loopen, kan inte kalibrera sitt förtroende för den, och automatiseringsbias verkar renast när systemet har rätt och människan har slutat kontrollera ([[automation-bias]], [[trust-calibration]]).

**Designa inte för benchmarken och påstå sedan klassrummet.** Benchmarkprestanda är en egenskap hos benchmarken. Redovisa de användningsvillkor du testade, populationen och uppgifterna; annars läses siffran som ett löfte om en annan miljö ([[limitations-in-aied-research]]).

**Gör inte verktyget till den enda vägen till hjälp.** Om en students tillgång till feedback beror på en modells tillgänglighet, kvot eller licens är rättvisefrågan redan avgjord av upphandlingen ([[equity-in-ai-education]]).

## För utbildningsadministratörer

**Köp inte kapacitetspåståenden som utfallsbevis.** Leverantörer kan demonstrera en produkt; bara en utvärdering kan demonstrera lärande. Kräv oassisterade utfall, delgruppsresultat, bortfall och en plan för vad som händer när piloten slutar ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Inför inte övervakning för att den är tillgänglig.** System för tentamensövervakning fångar ansiktsbilder, identitetshandlingar, rumsavskanningar inklusive 360-graderssvep och mikrofonljud, och en översikt av 80 studier fann att bara 25 % klarade rapporteringskravet för de frågor en institution behöver besvara före driftsättning ([[privacy]], [[remote-proctoring]]). Kostnaden landar på studenterna; evidensbasen är tunnare än kontraktet antyder.

**Skriv inte en policy som bara förbjuder och kalla den styrning.** Ett förbud utan omdesignad bedömning, utan stöd och utan överklagandeväg flyttar beteendet i stället för att förhindra det, och det straffar de studenter som har svårast att bestrida en falsk anklagelse. Policyn måste också omfatta bedömaren: två av fem indirekta promptinjektionsstrategier inbäddade i en inlämning höjde betyget på en underkänd uppsats ([[institutional-ai-policy]], [[course-ai-policy]]).

**Jämställ inte införande med förbättring.** En instrumentpanel som rapporterar användning, nöjdhet och slutförande kommer att se ut som framgång medan lärandemåttet ligger stilla. Bestäm i förväg vilket utfall som skulle få dig att säga upp kontraktet ([[ai-ed-evaluation]]).

**Låt inte tillgänglighet anlända som en begäran om anpassning.** I en översikt av 40 studier om digitala hjälpmedel för neurodivergenta studenter gjorde 28 en formell diagnos till ett villkor för deltagande – en diagnosgrindad modell som utesluter varje inlärare med behov och utan etikett ([[accessibility]], [[universal-design-for-learning]]).

## För utbildningsforskare

**Låt inte självrapportering bära det kausala påståendet.** Självförtroende, upplevt lärande och nöjdhet är utfall, men de är inte de utfall som de flesta studier säger sig mäta. [[empathy|empati]]litteraturen är det tydligaste fallet: ett fält som avser att lära ut empati mäter mestadels bekvämlighet, och den starkaste översikten av 17 studier fann självförtroendevinster långt vanligare än bevis på empati i sig ([[self-report-measures]], [[empathy]]).

**Citera inte en effekt utan dess design.** I en kritisk granskning av 80 HCI-studier om kritiskt tänkande med AI saknade 42 en kontrollgrupp. En effekt som gör rubriker, från 30 studenter i en kurs på en plats, är den vanliga formen av ett bräckligt påstående ([[limitations-in-aied-research]]).

**Rapportera inte heterogenitet utan modellen.** Samma data ger I² = 82,98 % under en modell med fasta effekter och 15,75 % under en modell med slumpmässiga effekter; ett citerat I² utan sin modell är otolkbart ([[meta-analysis-systematic-review]]).

**Generalisera inte från ett enda sammanhang och kalla det ett fynd.** En kurs, en institution, en modellversion, ett språk. Modellbeteende ändras med varje release, och detektorer tränade på en generation tappar recall på nästa ([[research-gaps-aied]], [[ai-detection]]).

**Behandla inte en korrelation mellan interaktion och utfall som en mekanism.** Promptvolym mäter inte kognitiv avlastning – kluster efter volym skilde sig inte i fördelningen av kognitivt arbete, och handkodad dialog fann ingen avlastning alls i 49,6 % av 125 dialoger ([[cognitive-offloading]]). Mät arbetet, inte dess synliga spår.

**Publicera inte ett begränsningsstycke som kunde ha skrivits före studien.** Namnge det specifika hotet, det specifika antalet och det påstående det begränsar. Det är det som gör en begränsning användbar för nästa läsare ([[interpreting-and-applying-aied-research]]).

## Varför dessa hör ihop

Varje punkt ovan är ett fall där en proxy befordrats till en dom: uppsatsen står för skribenten, poängen står för fusket, leendet står för empatin, demon står för lärandet, policyn står för styrningen. Korrigeringen är alltid samma drag – namnge konstruktet, hitta ett mått som skulle kunna falla ut åt andra hållet och samla in det vid sidan av det bekväma.

Det är också därför dessa varningar inte är en lista över saker som alltid är fel. En detektor kan vara ett skäl att prata med en student. En chattbot kan vara en användbar repetition. En instrumentpanel kan vara en anledning att ställa en fråga. Skadan ligger i substitutionen, inte i verktyget.

## Vad du ska göra den här veckan

- Välj en betygsatt uppgift och skriv ner vad den skulle visa med verktyget stängt. Om svaret är ”inget annat” är uppgiften problemet.
- Lägg till ett oassisterat mått i en kurs som för närvarande bara rapporterar assisterad prestation.
- Läs din institutions kontrakt för proctoring eller AI-verktyg vad gäller lagring, sekundär användning och intrångsvillkor – och kontrollera om samtyckestexten beskriver vad systemet faktiskt fångar.
- Be en leverantör om oassisterade utfall och delgruppsresultat. Om svaret är en demo har du ditt svar.
- Lägg den andra halvan av nästa lärarsession på omdesign av bedömning i stället för på prompter.

## Vart du går härnäst

- [[addressing-common-misconceptions-ai-education]] — föreställningarna bakom dessa praktiker, och hur man korrigerar dem utan nedlåtenhet.
- [[limitations-in-aied-research]] — vad evidensbasen ännu inte kan bära.
- [[reducing-ai-misuse]] — strukturella hävstänger mot missbruk, och varför de slår uppmaningar.
- [[pedagogical-safety]] — vad en handledare kan göra mot en inlärare medan den klarar varje innehållskontroll.
- [[should-we-use-ai-detectors]] — detektorevidensen i sin helhet.
- [[checking-whether-educational-ai-works]] — hur man utvärderar ett påstående innan man inför det.
