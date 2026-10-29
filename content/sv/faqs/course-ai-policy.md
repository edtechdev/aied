---
title: "Hur skriver jag en AI-policy för kursen och kommunicerar den till studenterna?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [should-we-use-ai-detectors, redesign-assessment-ai-era, institutional-ai-policy, asynchronous-online-courses-ai]
weight: 70
type: faq
foundations: [academic-integrity, framing-ai-use-for-students, reducing-ai-misuse]
assessment: [assessment]
ethics: [ai-use-disclosure]
research_method: [literature review, survey]
audience: [instructors, curriculum designers]
level: [higher ed, secondary]
methods: [qualitative-research]
institutions: [educational-policy-ai]
updated: "2026-10-29T17:10:58-04:00"
translation_of: faqs/course-ai-policy
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Tre veckor före terminsstart har kursplanemallen en rad för ”AI-policy” och den lyder just nu: se universitetets regler för akademisk integritet. Eller så kom en kollegas kurs tillbaka med en hög inlämningar som ingen tror skrevs i rummet, och torsdagens programmöte slutar med en begäran att varje kurs skriftligt ska ange sin hållning. Eller så är policyn redan skriven och rättningsperioden visar vilka av dess meningar du faktiskt kan tillämpa.

Kortversionen: namnge de uppgifter du betygssätter, säg vad AI får göra i var och en, lägg deklarationen på ett enda ställe och genomdriv med underlag du kan se. Fem specifika tillstånd håller bättre än en sida förbud. En policy som förklarar sig själv gör både bedömningsdesign och kommunikationsarbete samtidigt, vilket är skälet till att den kostar en eftermiddag och sparar en termin av gräl.

Allt nedan gäller kursnivådokumentet för en modul, en kurs eller en programinriktning. Antagandet är att du har bestämt vad du bedömer; arbetet här är att säga det och få det att hålla.

## Kortversionen

**1.** Inventera de betygssatta uppgifterna och fråga för var och en vad du specifikt bedömer. Gränsen följer det svaret.

**2.** Skriv regeln på stegnivå: brainstorming tillåten, att formulera lärandemål inte. Urval av bilder tillåtet, utformning av budskapet på bildnivå inte.

**3.** Sätt sammanfattningen i kursplanen, den operativa formuleringen på uppgiftsbladet, och säg regeln högt en gång i det ögonblick den först blir tillämplig.

**4.** Namnge ett standardställe och en standardform för deklaration, och håll kostnaden för att deklarera lägre än kostnaden för att dölja.

**5.** Genomdriv med arbete du kan observera: en promptlogg, en övning i rummet, en muntlig redogörelse. Detektorpoäng stannar utanför genomdrivandets väg.

## Börja från de uppgifter du betygssätter

Den tydligaste genomarbetade metoden är [[mccorkle-aligned-genai-course-policy-2025|McCorkle (2025)]], som ersatte ett generellt förbud som studenterna inte trodde gällde dem. Läs det misslyckandet rätt: det var bristande samstämmighet snarare än trots, och studenterna såg sig inte som oärliga. En regel som de redan har bestämt inte handlar om dem går inte att argumentera mot, bara att ignorera.

McCorkles metod går i fyra pass. Inventera varje uppgift i terminens projekt, fråga för varje ”vad bedömer jag specifikt?”, para ihop varje uppgift med en sannolik professionell användning av [[generative-ai|generativ AI]], och avgör sedan uppgift för uppgift. Varje beslut väger behovet att bedöma en förmåga mot värdet av att bygga en kompetens som studenten kommer att använda i arbetslivet.

Resultatet är medvetet ojämnt. Brainstorming är tillåtet; att formulera specifika och mätbara lärandemål är inte det. Urval av bilder är tillåtet; utformning av budskapet på bildnivå är inte det. Manus och berättarröst är tillåtna, med krav på att utvärdera AI:ns utdata. Nedskriven ser listan godtycklig ut tills du läser skälet bredvid varje rad, vilket är skälet till att skälen följer med reglerna.

## Bestäm hur strikt du ska vara, med vetskap om vad alla andra gör

Två datapunkter säger vad en normal policy ser ut som i år, och båda är värda att bära med sig in i mötet där någon föreslår ett förbud.

En innehållsanalys av **116 institutionella policyer för generativ AI** från 131 amerikanska R1-universitet och **98 kursplaner i datavetenskap** från 54 av dem fann att institutionerna i stort är för användning: 63 % uppmuntrar användning av generativ AI, 41 % erbjuder detaljerad vägledning för klassrummet, 27 % avråder. Hälften av kursplanerna (50 %) förbjuder den helt, 41 % tillåter delvis användning för angivna aktiviteter och 7 % förmedlar uppmuntran. [[genai-policies-higher-ed-computing|Ganguly m.fl. (2026)]] kallar detta gapet mellan top-down och bottom-up. 92 % av kursplanerna ger uttryckliga riktlinjer, ändå driver lokala regler iväg från institutionens vägledning, och bara 47 institutioner hade båda nivåerna identifierbara. Citat är det enda krav båda nivåerna är ense om, i 83 % av kursplanerna.

[[chirikov-regulate-ai-syllabi-2026|Chirikov (2026)]] följde över 31 000 kursplaner vid ett stort offentligt forskningsuniversitet i Texas från 2021 till 2025. Regleringen steg från nära noll före ChatGPT till 55 % av kurserna hösten 2025, medan fullt restriktiva policyer föll med omkring 5 procentenheter per år. Hösten 2025 begränsade lärarna oftast textproduktion och revidering (79 %) samt resonemang och [[problem-solving|problemlösning]] (65 %). De tillät oftast redigering och korrekturläsning (83 %), stöd i studier och sammanställning (80 %) och kodning (75 %). Idégenerering var den mest omstridda användningen, med 46 % tillåtet och 54 % begränsat.

Formuleringarna flyttade sig med siffrorna. Hänvisningar till akademisk integritet föll från 63 % till 49 %, referenser till AI:s effekt på lärande steg från 1 % till 29 %, och krav på att ange upphov steg från 16 % till 43 %. Fältet skiftar från ”fuska inte” mot ”här är varför den här gränsen skyddar ditt lärande”, och det är den andra versionen en student kan agera på.

Två konsekvenser för ditt dokument. Att vara striktare än din institution är normalt, och det är ett åtagande du tar på egen hand, eftersom genomdrivandekostnaden landar på dig. Ett citatkrav är nästan gratis, eftersom fyra femtedelar av fältet redan begär det och ingen student behöver gissa vad du menar.

## Sätt varje regel där studenten möter den

Tre dokument, tre jobb.

**Kursplanen** bär den korta sammanfattningen: uppgifterna, vad som är tillåtet i var och en, hur deklarationen fungerar och konsekvensen av en överträdd gräns. En skärm, ingen filosofi.

**Uppgiftsbladet** bär det konkreta beskedet. En enda sammanfattning är för grov för ett komplext projekt, och det är här McCorkles formulering gjorde sitt arbete, i en motivering riktad till studenterna i andra person som namngav bedömningen bakom varje begränsning.

**Rummet** bär det första muntliga uttalandet. Säg regeln en gång, i det ögonblick den först blir tillämplig, knuten till arbetet framför dem. En regel som en student möter ensam är en regel hen tolkar ensam.

Deklarationsmekaniken behöver ett eget stycke, och det bör vara det mest konkreta på sidan. Studenter som tillsammans utformade en kursregel genom vägledd undersökning prioriterade utbildning för studenter och lärare, **standardiserade deklarationsrutiner**, starkare institutionellt stöd och större inflytande över beslut om AI ([[guided-inquiry-genai-course-policy-2026|Hingle och Johri (2026)]]). Säg hur, var och i vilken form en student deklarerar användning, och säg det en gång.

[[teaching-intro-ai-course-redesign-bill-of-rights-2026|Pisan (2026)]] fann en starkare version av samma drag: gör promptloggen till den betygssatta artefakten. När en modell gör produktionen är prompten och interaktionsprotokollet det som är värt att versionshantera, så deklarationen slutar vara pappersarbete och blir underlag som studenten bygger upp.

## Skriv bara regler du kan tillämpa under en rättningscykel

En regel som kräver övervakning uppgift för uppgift, eller en bedömning av när en examination ”börjar”, kommer att tillämpas inkonsekvent i en klass och mellan två bedömare. Inkonsekvens är ett rättviseproblem innan det är ett administrativt problem. Ett system byggt på detektorer lägger till en övervakningskostnad som landar ojämnt, tillsammans med [[remote-proctoring|övervakning på distans]] och frågor om datalagring som du kanske inte kan svara på på kursnivå.

[[nash-preservice-teachers-classroom-ai-policies-2026|Nash och Burriss (2026)]] analyserade 27 klassrumspolicyer för AI skrivna av lärarstudenter i engelska. **26 av 27 tillät viss AI-användning**, nästan alltid på lärarens angivna villkor, tider och platser; en förbjöd den helt. Idégenerering var den mest allmänt tillåtna användningen (22 av 27) och den mest tvetydiga. 22 förbjöd eller lämnade oklart AI:s formulering av meningar, stycken eller uppsatser. 16 tillät grammatikkontroll och korrekturläsning medan 16 förbjöd produktion av stora AI-genererade textmängder. Och **22 av 27 tog inte upp läsning alls**.

Det återkommande misslyckandet var operationalisering. En policy tillät AI ”för att få igång ditt tänkande” och slog fast ”här ska gränsen dras” utan att säga var gränsen gick. Den tvetydigheten lämnar studenter oförmögna att följa regeln och dig oförmögen att tillämpa en konsekvent standard. Det är en brist, inte en kompromiss.

Chirikovs fynd om betydande variation mellan discipliner och uppgifter talar för ramverk som ger lärare autonomi inom sin egen domän snarare än ett påbud för alla, vilket också är den ärliga beskrivningen av vad en kursregel är: en lokal bedömning inom en vidare regel.

Det finns en [[equity-in-ai-education|rättvise]]dimension här. Ogenomskinliga policyer förutsätter delad bakgrundskunskap om författarskap, upphovsangivelse och normerna för akademiskt arbete, så de drabbar hårdast de studenter som kommer utan den. McCorkles fall är att transparens monterar ned en del av den dolda läroplanen och minskar risken att ett regelbrott blir ett disciplinärende.

Den billigaste versionen av allt detta är få och specifik: de uppgifter du bedömer, de användningar som är tillåtna i var och en, deklarationsmekaniken och konsekvensen av en överträdd gräns, var och en med sitt skäl bifogat.

## Säg det högt, och se vad du själv förebildar

Deklarationsregler fungerar inte som regelefterlevnadsmekanismer i sig, och att behandla dem som om de gjorde det är det vanligaste designfelet. I en mixad studie av 409 studenter på grundnivå fann [[qu-wang-disclose-or-not-genai-2026|Qu och Wang (2026)]] att utebliven deklaration var **strategisk anpassning till upplevda kamratnormer och låg [[trust|tillit]] till hur lärare tolkar det**, snarare än moralisk försumlighet. Upplevd kamratdeklaration och trygghet med läraren var de starkaste prediktorerna för studenternas egen deklaration; moralisk distansering hade svagare effekter.

Det lämnar dig med två hävstänger du faktiskt kontrollerar: vad studenterna tror att deras kamrater gör, och om de litar på att du läser en deklaration rättvist. Båda svarar på hur du talar om regeln under första veckan. Ingen av dem svarar på hur sträng formuleringen är.

[[student-rationalization-ai-writing|Kim m.fl. (2026)]] fann **fem olika platser** där en kurs verkliga policy lever: lärarens avsikt, den formella policyn, studentens tolkning, studentens egen policy och studentens praktik. Gapen mellan dem är systemiska. De katalogiserade också **23 rationaliseringar i sex klasser** som studenter använde för att rättfärdiga AI-användning i akademiskt skrivande, från ”ingen mänsklig offer” till ”lärarens likgiltighet”. Rationaliseringarna var ad hoc och efterhandsbyggda: studenterna förklarade beteenden som redan hade hänt i stället för att resonera i förväg, vilket är skälet till att tydligare formuleringar och hårdare detektering inte stänger gapet på egen hand.

En deltagare som ville lyda en strikt regel om ingen AI fortsatte att använda AI och sa att förbudet ”skapar konflikt för mig, eftersom jag bryter mot reglerna”. Förbudet skärpte den moraliska konflikten utan att förhindra användningen. En regel som producerar skuld utan regelefterlevnad urholkar den relation du behöver för att få deklarationer.

Se också vad du själv förebildar. De flesta uppgifter i Pisans kurs redovisade vilken prompt som använts för att ta fram dem, och en student läste den transparensen som **tillstånd**: ”beroendet av ai från läraren för betygssättning och skapande av uppgifter gjorde det också svårt att inte använda ai för uppgifter på samma sätt”. Att förebilda en norm är en del av policyn så som studenterna erfar den, vad kursplanen än säger.

Ett uttalande du kan anpassa:

> **AI-användning i den här kursen.** Jag vill att du ska lämna kursen med förmågan att göra X själv, så jag bedömer X direkt. Du får använda AI för [tillåtna användningar] på [uppgiftslista]; du får inte använda det för [begränsade användningar], eftersom det är det jag betygssätter. Om du använder AI någonstans i ditt arbete ska du berätta i [ett enda namngivet ställe, till exempel en deklarationsrad i varje inlämning] vad du använde det till och klistra in prompterna. Att deklarera sänker aldrig ditt betyg. Att inte deklarera en användning är det som får konsekvenser. Om du är osäker på om en användning är tillåten ska du fråga mig innan du lämnar in, inte efter.

Den sista meningen flyttar beslutspunkten till före arbetet, vilket är den enda punkt där frågan är billig att svara på.

## Planera för de fyra samtalen innan de händer

**Studenten som använde AI och inte sa det.** Hantera det som en processfråga, inte en karaktärsfråga. [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed och Temimi (2026)]] modellerar bedömning som ett problem med ofullständig information: studenten vet hur arbetet producerades, och institutionen ser artefakten plus ofullständiga spår. Deras svarsregionsmodell jämför tre svar, ingen AI-användning, [[ai-use-disclosure|deklarerad]] användning och dold användning, och frågar vilket av dem varje mekanism gör mest attraktivt. Förbud sätter den formella gränsen och lämnar dold användning attraktiv när studenterna ser detekteringen som svag. Övervakning höjer den förväntade kostnaden för dold användning utan att höja deklarationen, så studenterna blir försiktiga utan att bli transparenta. Tillåtelse med deklaration gör ärlig rapportering möjlig bara så länge kostnaden för ärlighet hålls låg.

I rummet betyder det att fråga vad arbetet var tänkt att bedöma, be studenten redogöra för sin process, och läsa en sen deklaration som information snarare än bekännelse.

**Studenten som anger AI som källa till allt.** Det är oftast en färdighetslucka i regelefterlevnadskostym. Krav på upphovsangivelse steg från 16 % till 43 % av kursplanerna medan hänvisningar till akademisk integritet föll från 63 % till 49 %, så fältet ber om citat snarare än bekännelse. Ange formatet en gång, på uppgiftsbladet i stället för i en fotnot i kursplanen. Säg hur tillräcklig upphovsangivelse ser ut i din disciplin och ge ett genomarbetat exempel. Där det verkliga problemet är att studenten ännu inte kan göra det underliggande arbetet utan modellen är svaret uppgiftens design.

**Grupparbete.** Fem studenter kan bära fem tolkningar av en mening, och en inlämning betygssätts. För varje gruppleverans, bestäm och publicera om AI-användning är tillåten, vem som deklarerar den och vad som händer när en medlem går utanför regeln. Gör det innan projektet börjar, medan det är en planeringsfråga. Om du inte kan ange det individuella bidrag som en medlem är ansvarig för, betygssätt uppgiften som enbart grupparbete i stället för att döma om författarskap i efterhand.

**Deklaration du inte kan verifiera.** Vissa deklarationer blir ofullständiga och vissa utelämnanden omöjliga att motbevisa. [[bassett-ai-detectors-education-2026|Bassett m.fl. (2026)]] argumenterar för att AI-detektering inte bör användas i utbildning alls, på tre grunder som rör formuleringar. Detektorutdata är en probabilistisk skattning som inte kan verifieras oberoende, eftersom verkligt textursprung är okänt, så valideringen vilar på cirkelresonemang. Detektorpoäng når inte det beviskrav som en utredning om [[academic-integrity|akademisk integritet]] kräver. Och dikotomin människa mot AI är meningslös för arbete som skapats med snarare än av AI. Deras slutsats är att detektering ”inte skyddar akademisk integritet; den undergräver den”.

De pekar på ett formuleringsproblem värt att kopiera in i din revideringsrunda. Regler som begränsar AI-användning ”i examination” anger inte när en examination börjar, så AI-assisterad research, planering eller redigering kan vara eller inte vara en överträdelse beroende på vem som läser. Namnge processbevis du kan observera i stället: en inlämnad prompt och interaktionslogg, en övning producerad i rummet, en muntlig förklaring. Om din institution ändå kör en detektor gäller deras varningar om datalagring, gallring och kommersiell användning av studentarbete, och den [[privacy|integritets]]invändning som två lärarstudenter reste är den invändning dina studenter kommer att resa.

## Vad lärare missförstår om detta

En striktare policy är en säkrare policy. Att vara striktare än din institution är vanligt och försvarbart, men genomdrivandekostnaden är din, och en regel du inte kan tillämpa konsekvent under en rättningscykel är ett rättviseproblem. Skär bort de regler du inte kan driva.

Ett förbud är det kortaste budskapet som finns. I de 27 policyerna från lärarstudenter satt tvetydigheten mest i de tillåtande, och 22 av 27 tog aldrig upp läsning, så studenterna lämnades att sluta sig till. Kim m.fl.:s deltagare lydde ett förbud genom att bryta mot det och må dåligt över det.

Deklaration är en regelefterlevnadsmekanism. Det är en signal, och signaler beror på tillit. Qu och Wang fann att kamratnormer och trygghet med läraren förutsade deklaration bättre än moraliskt resonemang gjorde.

En detektorpoäng avgör ett omtvistat ärende. Den når inte det beviskrav en integritetsutredning måste uppfylla, och den kan inte skilja arbete gjort med AI från arbete gjort av AI. Bygg ärendet på arbete du har observerat.

Att skriva policyn är kommunikationen. Kim m.fl. fann fem platser där den verkliga policyn lever, och ditt dokument är en av dem. Den version studenterna agerar på sätts ihop av vad du säger i klassrummet och vad du gör med ditt eget material.

## Vad som kommer att slå tillbaka mot dig

**”Studenterna kommer bara att dölja det.”** Några kommer att göra det, och designfrågan är vilka studenter din regel frestar. Avskräckning går via en detektors **diskriminationsförmåga** mellan dold användning och legitimt arbete, snarare än dess råa träffsäkerhet. När extra känslighet ger fler nya falska positiva än nya sanna positiva kan **starkare övervakning göra döljandet relativt mer attraktivt**, eftersom ärliga studenter straffas snabbare än dolda användare identifieras. Tillåtelse och deklaration är separata hävstänger: tillåtelse flyttar gränsen för acceptabel användning, deklaration ändrar synligheten. Diagnostisera var din uppgift drar den student som är mest frestad att dölja, och designa för den studenten.

**”Jag vill inte förbjuda verktyg jag inte kan upptäcka.”** Det behöver du inte. Förbud är ett av fyra designsvar, vid sidan av övervakning, tillåten användning med deklaration och omdesign. Omdesign ändrar vad uppgiften belönar, och förblir kosmetisk om bedömningsmatrisen fortfarande betygssätter mest slutprodukten. [[teaching-intro-ai-course-redesign-bill-of-rights-2026|Pisan (2026)]] visar nivåerna uttryckligen: AI är uteslutet i den inledande programmeringskursen, eftersom att lägga ut de första looparna tar bort det som undervisas; uppmuntras i projekt i datastrukturer (Copilot tillåtet) och är uteslutet i skriftliga tentor; ett studie- och repetitionsstöd i systemkursen på högre nivå; och **obligatoriskt** i själva AI-kursen, där en gräns bar det mesta av vikten. Modellen får skriva kod, och reflektionerna måste vara i studentens egen röst. Tentamina togs bort helt, och bedömningen flyttades till arbete som en modell inte tyst kan spökskriva.

**”Min institutions policy täcker redan det här.”** Mindre än du tror. Gapet går åt båda håll: 92 % av kursplanerna ger uttryckliga riktlinjer, lokala regler driver iväg från institutionens vägledning, och bara 47 institutioner hade båda nivåerna identifierbara. Upphandling, data och granskningscykler hör till [[institutional-ai-policy|Hur skriver och inför vi en institutionell AI-policy?]], men översättningen till klassrummet är din. Nash och Burriss drar slutsatsen att institutioner måste rusta lärare att både motstå och införa, med den vägledning och [[educational-development|kompetensutveckling]] som låter en lärare avstå från en specifik AI-användning utan att framställas som efter sin tid. Deltagarnas teknodeterminism motsade deras egna [[pedagogy|pedagogiska]] övertygelser. En institutionell policy är inget skydd för din egen bedömning.

**”Jag har inte tid att skriva om kursplanen den här månaden.”** Kör inventeringen en gång, på uppgiften som oroar dig, och ta resultatet rakt in i uppgiftsbladet. Kursplanemeningen kan vänta till nästa revideringscykel. Studenterna agerar på uppgiftsbladet ändå.

## Vad du ska göra den här veckan

**1.** Inventera de betygssatta uppgifterna och skriv ”vad bedömer jag specifikt?” bredvid var och en, innan du bestämmer något om AI.

**2.** Bestäm uppgift för uppgift, och kontrollera vilket svar varje beslut gör mest attraktivt för den student som är mest frestad att dölja.

**3.** Skriv deklarationsmeningen: ett ställe, ett format, ett genomarbetat exempel på tillräcklig upphovsangivelse.

**4.** Namnge det underlag du kommer att acceptera i en tvist (promptlogg, arbete gjort i rummet, en muntlig redogörelse), och stryk varje regel du inte kan pröva mot det.

**5.** Säg regeln högt i nästa lektion, i det ögonblick den först blir tillämplig, med en motivering bredvid varje begränsning.

## Vart du går härnäst

Styrning, datapolicy, upphandling och granskningscykler hör till [[institutional-ai-policy|Hur skriver och inför vi en institutionell AI-policy?]]; påbjudna institutionella regler och distriktsregler ligger hos [[educational-policy-ai|utbildningspolitik]] och [[governance|styrning]]. Att bygga om uppgiften så att ett betyg fortfarande stöder en försvarbar slutsats hör till [[redesign-assessment-ai-era|att göra om bedömningen i AI-eran]], genomdrivandeargumentet finns i [[reduce-ai-cheating|att minska AI-fusk]], detektorbeslutet i [[should-we-use-ai-detectors|bör vi använda AI-detektorer]] och betygsskaleschemat i [[ai-assessment-scale-reform|reform av AI-bedömningsskalan]].
