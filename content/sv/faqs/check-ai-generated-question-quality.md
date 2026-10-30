---
title: "Hur kontrollerar jag om AI-genererade quiz- och tentamensfrågor verkligen är bra?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Du ber om tjugo frågor utifrån dina föreläsningsanteckningar. Du får tillbaka dem med facit, förklaringar, svårighetsgrader och Bloom-taxonomiska kategorier, i ett formaterat dokument som ser färdigt ut. Ditt namn ska strax stå på det.

Kort svar att ge en kollega: genererade frågor är kandidater, inte en bedömning. Lös varje fråga själv, kontrollera vad uppgiften kräver att en student faktiskt gör, och ta reda på hur studenterna svarar på den innan den räknas. I de två största studierna i den här kunskapsbasen är den intressanta signalen inte att generering fungerar utan var den fallerar. Iterativ generering inuti ett kursanpassat arbetsflöde gav användbara flervalstentamina i 71 högskoleklasser ([[assessing-quality-ai-generated-exams-field-2025|Isley m.fl., 2025]]). I en datavetenskaplig granskning av 311 frågor i drift följde modellens svårighetsgrader nästan perfekt de Bloom-nivåer den hade genererat tillsammans med dem (Spearman ρ = 0,90) medan de följde vad studenterna faktiskt presterade med ρ = 0,06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An och Wang, 2026]]). Graderingen var en beskrivning av prompten, inte en mätning av frågan.

## Kortversionen

**1.** Skriv ned lärandemålet och vilken evidens ett tillfredsställande svar skulle ge innan du genererar något.

**2.** Bygg en blueprint så att du kan se vilka mål uppsättningen täcker och hur ofta.

**3.** Lös varje fråga själv innan du litar på facit, och läs förklaringen som ett påstående som ska kontrolleras.

**4.** Fråga vad en student måste göra för att svara. En fråga som säger "analysera" och kräver återgivning är en återgivningsfråga.

**5.** Behandla svårighetsgrader som promptmetadata, inte som psykometri.

**6.** Pilotpröva frågorna och granska hur de fungerar, och revidera sedan de svaga.

## Börja med det lärande du vill ha evidens för

Generering är billig nog att utdataformatet tyst blir specifikationen. Om dina anteckningar ger prydliga flervalsfrågor kommer du att mäta huruvida studenter kan välja mellan rimliga påståenden, oavsett vilket mål kursplanen påstår.

Specificera målet först, sedan den evidens ett tillfredsställande svar skulle ge, sedan den kunskap studenterna förväntas komma med. Ta med kursmaterialet, de missuppfattningar du förväntar dig, eventuella tillåtna verktyg och svarsformatet. Om du vill att studenter ska tolka evidens måste frågan kräva tolkning, och att lägga till ordet i en definitionsfråga gör det inte. Ett långt scenario kan fortfarande gå att svara på genom en enda bekant fras som avslöjar allt.

En bedömningsblueprint är en tabell med mål mot frågor, och dess värde är att den avslöjar luckor innan studenterna gör det. Den synliggör också avvägningen: varje fråga du genererar från det enklaste materialet är en fråga du inte lade på det mål du bryr dig mest om.

## Granska varje fråga utifrån sex dimensioner

Börja med facit. Är det försvarbart mot auktoritativt kursinnehåll, och håller förklaringen när du kontrollerar den självständigt? Facit och förklaring kommer ofta från samma bristfälliga steg, så att kontrollera det ena kontrollerar inte det andra.

Fråga sedan vad det att svara på frågan faktiskt kräver att en student gör mellan läsandet och valet. Det är här genererade frågor oftast fallerar, och där graderingen är minst pålitlig.

Kontrollera sedan alignment: ger svaret evidens för det avsedda målet, eller för något angränsande och lättare att bedöma?

Läs formuleringen som en student skulle göra. Finns den nödvändiga informationen där, och har oklarheter som inte hör till din konstrukt tagits bort?

Granska alternativen och poängreglerna tillsammans. Är distraktorerna rimliga och åtskilda från varandra och från facit, och erkänner facit legitima alternativa svar som din matris skulle ge poäng för?

Fråga slutligen vem frågan utesluter. Läsmängd, kulturell kontext, bilder och formatering kan ställa krav som inte hör till målet. För en flerspråkig student eller en student med funktionsnedsättning mäter en fråga som belönar snabb läsning något du inte avsåg, och [[differential-effects-across-learner-groups|delgruppers prestation]] är där det syns.

En andra modell kan hjälpa dig att hitta problem, och samstämmighet mellan två modeller är inte oberoende verifiering av korrekthet. De delar träningsdata och felmönster. Lös frågan, och låt sedan en kvalificerad person titta på dem som ska räknas.

## Låt inte svårighetsgraderingen avgöra

Litteraturen om [[automated-question-generation|frågegenerering]] är mer användbar när det gäller graderingarnas misslyckande än genereringens framgång. [[student-llm-use-ai-question-difficulty-data-science-2026|An och Wang (2026)]] granskade 378 författade frågor i datavetenskapliga kurser, varav 311 användes med 54 studenter över 7 888 svar. Modellens graderingar lätt, medel och svår korrelerade med dess egna samtidigt genererade Bloom-nivåer med ρ = 0,90 och med empirisk frågesvårighet med ρ = 0,06. Ungefär 70 % av frågorna i drift besvarades korrekt av varje student, vilket lämnade nästan ingen variation för en svårighetsgradering att följa ens i princip.

Två lärdomar följer. För det första är svårighet en egenskap hos interaktionen mellan en fråga och en population, så ingen gradering som produceras innan frågan administreras kan litas på som ett uppmätt värde. För det andra är en frågebank som alla svarar korrekt på inte en lätt bedömning, den är en värdelös sådan: den bär nästan ingen information om vem som kan vad.

Det positiva fallet är snävare än leverantörernas påståenden och värt att känna till exakt. [[assessing-quality-ai-generated-exams-field-2025|Isley m.fl. (2025)]] genererade flervalstentamina med tio frågor för 71 högskoleklasser, ungefär 1 200 studenter, med en loop som genererar, bedömer och reviderar varje fråga betingat på varje kurs eget lärartillhandahållna material, och jämförde sedan frågorna mot människoskrivna tentamina. Det är ett arbetsflöde med en granskare inuti, kört per kurs, inte en enda prompt över generiskt innehåll. Stödet gäller arbetsflödet under de betingelserna, och det sträcker sig inte till vad samma modell producerar från en inklistrad oredigerad anteckning.

## Kör en cykel: generera, granska, pilotpröva, revidera

Generera mot en blueprint, och be om det avsedda målet, facit, en kort lösning och den missuppfattning varje distraktor är tänkt att fånga. Annotationerna gör designen granskningsbar. De är inte evidens för att designen är sund.

Reparera innan du ackumulerar. Ta bort ostödda påståenden, dubbla frågor, oavsiktliga ledtrådar i stamtexten, flera försvarbara facit och komplexitet som inte hör till konstrukten, och notera vad du ändrade, eftersom reparationsmönstret berättar vilken del av prompten du ska fixa.

Pilotpröva där en pilot är proportionerlig. Lågriskövning, eller en hanterad pilot inuti bedömningen, ger dig svarsdata. Berätta för studenterna hur de rapporterar en oklar eller felaktig fråga och läs de rapporterna, eftersom de är din mest informativa felsignal.

Granska sedan hur frågorna fungerar: andelen som svarar korrekt, vilka distraktorer som drar till sig svar, och huruvida framgång på frågan följer med prestation på resten av bedömningen. En fråga där starka studenter misslyckas och svaga lyckas är en defekt snarare än en svår fråga. I en liten klass är de här statistiken instabil, så kombinera dem med innehållsgranskning och studenternas förklaringar i stället för att behandla en procentsats som en dom.

Revidera, och behåll protokollet: den godkända versionen, målet den tjänar, facit, motiveringen, granskningsanteckningarna och administrationshistoriken. För stora eller högriskbärande banker är det här bedömningsspecialister och ordentliga psykometriska metoder hör hemma, och expertis inom [[educational-measurement|mätning]] är inget en noggrann läsning kan ersätta.

## Hur det ser ut i en kurs

I en introduktionskurs i sociologi kan målet vara att skilja en strukturell förklaring från en individuell. En svag fråga ber studenterna definiera "strukturell", vilket mäter ordförrådsigenkänning. En starkare kandidat ger ett kort scenario om en familj och ett anställningsbeslut och frågar sedan vilken förklaring som bäst identifierar en strukturell begränsning, med distraktorer som representerar rimliga men olika tolkningar.

Läraren kontrollerar att scenariot verkligen stöder facit, att inga två alternativ uttrycker samma idé och att svaret inte beror på terminologi som kursen aldrig har introducerat. En enradig följdfråga, "vilken detalj stöder ditt val?", synliggör det resonemang som det valda alternativet döljer. Anpassningen är oprövad som frågeformat, och dess värde är snävare: granskningsfrågorna ovan kan besvaras innan en fråga administreras, och ett dåligt facit kan repareras innan studenterna ser det.

För studenter som genererar sina egna övningsfrågor gäller samma regel på deras nivå: försök lösa frågan, kontrollera förklaringen mot kurskällorna och ta de fall som inte går att lösa till någon som kan ämnet. [[study-with-ai|Studiepraktik]] som tränar studenter att okritiskt acceptera genererade facit lär ut fel vana.

## Vad som kommer att slå tillbaka mot dig

**"Den gav ett svar och en förklaring."** Båda kan upprepa samma misstag, och förklaringen skapar förtroende just för att den är ledig. Verifiera resonemanget mot ditt material, inte mot dess egen omskrivning.

**"Det här är bara övningsfrågor."** Övning lär ut missuppfattningar när felaktiga facit inte rättas, och studenter repeterar felet lika beredvilligt som det korrekta svaret. Lägre insatser ändrar hur mycket granskning som är proportionerlig. De ändrar inte huruvida korrekthet spelar roll.

**"Studenterna gillade quizet."** Uppskattning är evidens om upplevelsen. Ett lätt quiz som alla avslutar bekvämt känns bra och mäter lite, och den datavetenskapliga granskningen fann att frågornas popularitet inte åtföljdes av någon användbar svårighetssignal.

**"Matrisen eller Bloom-taggarna visar att det träffar målen."** Bloom-etiketter som tillhandahålls av samma genereringssteg är den minst oberoende evidens som finns. ρ = 0,90 mot etiketterna och ρ = 0,06 mot studenternas prestation är exakt hur det ser ut när det mäts.

## Vad du ska göra den här veckan

**1.** Välj ett mål och skriv vilken evidens ett tillfredsställande svar skulle ge. Generera sedan fem frågor mot det, och be om facit, lösning och den avsedda missuppfattningen bakom varje distraktor.

**2.** Lös alla fem utan att titta på facit, och logga dem där du och modellen inte är överens.

**3.** Be en kollega granska de två starkaste kandidaterna för alignment och oklarhet, och ta bort allt som ingen av er kan försvara.

**4.** Pilotpröva de överlevande med en kort följdfråga där studenterna får ange vilken detalj som stöder deras val.

**5.** Registrera vad du ändrade och varför, så att nästa omgång börjar från en bättre prompt i stället för samma.

## Vart du går härnäst

[[automated-question-generation]] är begreppssidan för genereringsmetoder och deras uppmätta kvalitet, och [[educational-measurement]] täcker frågeanalys, reliabilitet och den psykometri som en pilot bara antyder. Båda ligger under [[assessment-validity|bedömningsvaliditet]], som är den standard hela cykeln tjänar.

Omdömes sidan av samma problem hör till [[ai-grading-fairness-reliability|AI-bedömning]], eftersom en bra fråga som bedöms dåligt inte är bättre än en dålig fråga som bedöms väl. För den vidare frågan om vad ett betyg bör representera när studenter kan använda AI, se [[redesign-assessment-ai-era|att designa om bedömning i AI-eran]].
