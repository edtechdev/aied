---
title: "Vilka är de 10 viktigaste rönen från forskningen om AI i utbildning som lärare bör känna till?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
updated: "2026-11-14T18:10:00-05:00"
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

De här tio studierna berör direkt beslut som lärare fattar: vad man ska ge för uppgift, hur man ska bedöma den, vilka verktyg man ska köpa, hur man ska bygga dem och hur man ska avgöra om lärande faktiskt skedde. Varje post anger studien, dess resultat och den praktik den förändrar.

## De tio studierna

**1. Tillgång till en vanlig chattbot sänkte provresultaten med 17 % ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Nästan 1 000 gymnasieelever i Turkiet, i omkring 50 klasser, arbetade sig igenom tre matematikpass med samma innehåll. En grupp hade ett vanligt GPT-4-chattfönster under övningen. En hade en handledare byggd på samma modell med [[guardrails|skyddsregler]] skrivna av läraren: tips i stället för svar, med den korrekta lösningen och vanliga misstag inbäddade i prompten. Kontrollgruppen hade ingen AI. Varje pass avslutades med ett [[summative-assessment|prov utan hjälpmedel]] på liknande problem, med verktyget borttaget.

Gruppen med vanlig chatt fick 48 % högre resultat än kontrollen under övningen och 17 % lägre på provet. Elever som aldrig rörde AI presterade bättre än de. Den skyddade gruppen ökade med 127 % i övningen och gick jämnt ut på provet. Skadan försvann, och ingen lärandefördel uppstod i dess ställe. Chattloggarna förklarar uppdelningen: den oskyddade gruppen bad om svar och slutade, medan den skyddade gruppen försökte lösa problem, bad om tips och förbättrades redan under det första passet.

För lärare är ”AI tillåtet” ingen policy. Gränssnittet avgör om verktyget blir en tipskanal eller en svarsmaskin, och en allmän chattbot lutar mot det senare. Ett chattfönster som lämnas öppet under övningen kostar de elever som lutar sig mest mot det.

Skolledare kan ställa samma resultat mot upphandlingspåståendet att en starkare modell löser pedagogiken. Modellen var identisk i båda armarna.

Se även: [[training-ai-tutors-to-guide-rather-than-answer|Att träna en handledare att vägleda i stället för att svara]]

**2. En handledare byggd på kursens egen pedagogik slog den aktivt lärande klassen, på kortare tid ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 är Harvards introduktionskurs i fysik för studenter på livsvetenskapsprogrammet. Under hösten 2023 mötte 194 studenter i en crossover-studie två lektioner två gånger, en gång i kursens klass för [[active-learning|aktivt lärande]] och en gång genom en handledare byggd för kursen, med förtest och eftertest kring varje version.

Studenterna lärde sig mer med handledaren. Medianen på eftertestet var 4,5 mot 3,5, medianen för [[learning-gains|lärandevinster]] var mer än dubbelt så stor som klassens, och kvantiluppskattningarna av effekten låg mellan 0,73 och 1,3 standardavvikelser. De tillbringade en median på 49 minuter med handledaren mot ungefär 60 minuter i klassrummet, och 83 % bedömde dess förklaringar som lika bra eller bättre än sina lärares. Skattningarna av engagemang och motivation steg. Glädje och tillväxttänkande skilde sig inte.

Resultatet vilar på utformningen. Handledaren gjorde samma drag som klassen: genomarbetade exempel, gradvisa tips, uppmaningar till självförklaring, en sekvensering som följer forskningen om hur fysik lärs in. Jämförelsen var mot aktivt lärande, inte mot föreläsning, så den vanliga invändningen att vad som helst slår en föreläsning gäller inte här.

Lärarutvecklare har här det starkaste tillgängliga argumentet för att handledarens utformning är kursplaneutveckling, inte upphandling. För produktteam är ribban konkret: matcha ett klassrum med aktivt lärande, på kortare tid, med samma undervisningsdrag.

Se även: [[developing-ai-tutor|Bästa praxis för att utveckla en AI-handledare]]

**3. AI-handledning motsvarade mänskliga experthandledare ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench slog samman 2 469 handledningstillfällen med 2 383 vuxna som förberedde sig för GRE, med 13 AI-handledare byggda på 12 modeller, levande mänskliga handledare och en videokontroll. Utfallet var lärandevinst på kvantitativa och verbala uppgifter.

Sammanlagd AI-handledning var statistiskt likvärdig med experthandledning av människor, inom en fjärdedel av en standardavvikelse, och båda slog kontrollen med ungefär sex procentenheter: 6,86 i kvantitativ och 5,47 i verbal del, eller ungefär ett och ett halvt till två extra rätta svar per sektion. AI-handledarna bedömdes svagare i lektionsplanering och i att skapa övningsproblem, vilket de mänskliga handledarna gjorde bättre.

För skolledare förändras bemanningsaritmetiken för väldefinierad testförberedelse. När en licensierad handledare matchar en mänsklig handledare inom en fjärdedel av en standardavvikelse handlar beslutet om kostnad och täckning, och effektivitet upphör att vara frågan. Forskare noterar gränsen: likvärdighet är inte överlägsenhet, och ett standardiserat test är det enklaste utfallet för en maskin att matcha.

Lärarutvecklare kan titta på var de mänskliga handledarna behöll ett försprång: att diagnosticera vad en elev behöver härnäst och att bygga sekvensen som följer av det.

Se även: [[intelligent-tutoring|Intelligent handledning]]

**4. Att skriva anteckningar slog att fråga en chattbot, tre dagar senare ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes och kollegor genomförde ett förregistrerat experiment i sju engelska sekundärskolor. 405 elever i årskurs 10 arbetade igenom två av tre betingelser på en historietext: en chattbot som kunde svara på frågor om den, anteckningsskrivande eller båda. Tre dagar senare skrev de prov utan hjälpmedel på ordagrann retention, förståelse och [[retrieval-spacing-interleaving|fri återgivning]].

Anteckningar slog chattboten på alla tre måtten, med ungefär en halv standardavvikelse på retention och nära fyra tiondelar på förståelse. Anteckningar plus chattbot slog chattboten ensam på två av tre och gjorde ingenting för fri återgivning, och anteckningar ensamma var starkare än kombinationen. I den kombinerade betingelsen kopierade ungefär en fjärdedel av eleverna chattbotens utdata till sina anteckningar. Eleverna skattade ändå chattboten som lättare, mer hjälpsam och roligare än att skriva.

Lärare har här direkta bevis för att en läsassistent kan ersätta läsningen. Om poängen med uppgiften är att förstå en text är [[writing-education|skrivandet själva förståelsen]], och ett verktyg som svarar på frågor om texten tar bort övningen. Behåll anteckningarna. Om du tillåter chattboten, begär något den inte kan leverera: en jämförelse, en utmaning av texten eller en sammanfattning skriven efter att verktyget stängts.

Se även: [[ai-support-reading-comprehension|AI-stöd för läsförståelse]]

**5. Studietiden föll med 27 %, och retentionen föll med den ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

En tioårig panel från ALEKS-plattformen, som omfattar 3,2 miljoner inlärningsinteraktioner och 12,2 miljoner svarstider i placeringsbedömning, visar vad eleverna gjorde efter att ChatGPT kom. Utformningen jämför problemtyper som kan klistras in i en chattbot (textbaserade ordproblem) med typer som kräver att man manipulerar en graf inuti plattformen, inom samma läroplan.

Tiden på de AI-känsliga problemen föll med 2,8 % per kvartal bland collegestudenter, 26,9 % över elva kvartal. Gymnasieelever föll med 31,3 %, högstadieelever med 9,0 %, och femteklassare visade ingen mätbar förändring. Nedgången försvann helt under [[remote-proctoring|proktorövervakning]], vilket är det avgörande testet: när verktyget inte var tillgängligt lade eleverna den gamla tiden. Proktorövervakade retentionuppgifter visade en kumulativ nedgång på 25 % i oddset för ett korrekt svar.

Åldersgradienten är en designsignal för produktteam. Övningstiden är variabeln som rör sig, och den rör sig mest där uppgiften är lättast att lämna över. För lärare är tid på uppgift en billig tidig varning: en kull som klarar samma problem mycket snabbare lär sig förmodligen inte samma sak.

Se även: [[reducing-over-reliance|Att minska överberoendet av AI]]

**6. Läxresultaten steg med 18 % medan proven utan hjälpmedel föll med 20 % ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26 811 elever i årskurs 7 till 12 i Kina, följda i 30 månader, med generativ AI införd vid olika tidpunkter i olika kullar. Läxresultaten steg med 18 % och slutförandetiden föll med 30 %, från 64 till 45 minuter. Månatliga prov utan hjälpmedel föll med 20 % av baslinjemedelvärdet inom sex månader, och avgörande inträdesprov föll med 18 % till 24 % efter ungefär två år.

Tidpunkten visar mekanismen. Ungefär 81 % av AI-användarna gjorde klart läxan snabbare än den snabbaste eleven utan AI och presterade sedan dåligt på proven. Den minoritet som höll läxtiden jämförbar med icke-användarna lärde sig lika bra som alla andra. Förlusterna var störst i samhällsvetenskap, sedan i STEM, sedan i språk, och större för högpresterande elever.

Att göra klart läxan är en dålig proxy för måluppfyllelse, och gapet syns inom sex månader, långt innan inträdesprovsresultaten rör sig. Lärare kan agera tidigare: håll betygsgrundande underlag utan hjälpmedel och behandla hemarbete som övning vars slutförandetid är synlig.

Se även: [[checking-whether-educational-ai-works|Att kontrollera om pedagogisk AI fungerar]]

**7. Varje testad handledare misslyckades med pedagogiken, och misslyckades värre under ett samtal ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors testade 11 handledare, från öppna modeller på 3,8B till 72B plus GPT-5-mini, inom matematik, fysik och kemi, mot en taxonomi med 11 dimensioner och 48 delrisker hämtade från [[learning-theories|lärandevetenskap]]. Dess felkategorier är pedagogiska: överdrivet avslöjande av svar, förstärkning av missuppfattningar och övergivande av [[scaffolding|stöttning]]. Var och en av dem ser hjälpsam ut i stunden, eftersom eleven snabbt får ett korrekt svar.

Varje modell uppvisade bred pedagogisk skada. Större modeller var inte tillförlitligt säkrare, och allmän hjälpsamhet korrelerade bara svagt med pedagogisk säkerhet. Skadefrekvensen steg från 17,7 % i enstaka turer till 77,8 % i samtal på fem till åtta turer.

Utvärderingar med en enda tur är inte bevis på en säker handledare, och produktteam bör utforma sin testning kring det. En modell som klarar en engångskontroll av hjälpsamhet och säkerhet kan misslyckas i större delen av ett verkligt samtal. Skolledare som köper en handledare behöver tre svar: håller den inne lösningar, prövar den missuppfattningar och håller den över en hel session. En leverantörsdemo med en enda tur ger inget av dem.

Se även: [[pedagogical-safety|Pedagogisk säkerhet]]

**8. Fall av regelbrott vilar på tunnare bevis än anklagelserna antyder ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz och kollegor kodade varje regelbrottsfall kopplat till generativ AI vid ett australiensiskt universitet under tre år: 1 162 fall med 1 855 bevisposter, var och en bedömd för relevans, trovärdighet och beviskraft.

Anklagelser om generativ AI steg från 11,9 % av regelbrottsfallen 2023 till 36,9 % 2025, medan den totala ärendevolymen låg still. 58 fall, 5 % av GenAI-totalen, vilade enbart på ett påstående utan någon bevispost alls. Detektorutdata var sällsynt och svagt: Turnitin- eller likhetsrapporter hade ingen beviskraft i 73 poster, och fristående GPTZero-utdata hade låg trovärdighet i 69. De starkaste bevisen kom från utredningen snarare än anklagelsen, med muntliga erkännanden i intervjuer i 410 poster med 97,2 % stark styrka. [[hallucination-risk|Påhittade referenser]] var den största strukturella förskjutningen, 22,3 % av posterna, med en ökning från 10,4 % 2023 till 30,0 % 2025.

För skolledare är lärdomen procedurell. Ett fall byggt på en detektorpoäng överlever inte ett överklagande, och en utredning som börjar med verktyget i stället för intervjun producerar svaga akter. Lärare kan agera på den artefakt som ständigt dyker upp: påhittade referenser är vanliga, och en referenskontroll är billig.

Se även: [[should-we-use-ai-detectors|Att använda AI-detektorer]]

**9. Lärarnas tilltro till sin egen AI-kompetens följer knappt deras uppmätta färdighet ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 lärare i grund- och gymnasieskola genomförde en självrapporterad enkät om AI-kompetens och ett objektivt prestationsmått byggt på samma ramverk: koncept, användning, utvärdering och etik. Korrelationerna mellan de två låg mellan 0,07 och 0,24.

Latent profilanalys fann sex grupper. 43 lärare skattade sig genomgående högt men fick lägre poäng på det objektiva måttet. 59 visade det motsatta. Resten klustrade nära medelvärdet eller delades upp efter tidigare erfarenhet av AI.

För lärarutvecklare är [[self-assessment|självskattning]] inte en behovsanalys. En enkät som frågar lärare hur säkra de är kommer att överfinansiera de säkra och underbetjäna de tysta, och de grupperna är inte de kompetenta och de kämpande. Korta prestationsuppgifter skiljer dem åt. Forskare bör behandla de låga korrelationerna som en mätvarning: varje studie av [[ai-literacy|AI-kompetens]] som bygger på [[self-report-measures|självrapportering]] mäter tilltro.

Se även: [[faculty-development-ai|Lärarutveckling som förändrar praktiken]]

**10. AI-bedömning missgynnar elever som skriver sämre ([[ai-scoring-language-bias-physics|Feser och Tschisgale, 2026]]).**

116 gymnasieelevers fysikförklaringar bedömdes av 9 maskininlärningsansatser och 2 ansatser med stora språkmodeller och jämfördes sedan med mänskliga expertbedömningar. Överensstämmelsen med experterna låg mellan 67,2 % och 78,4 %, vilket låter godtagbart tills felen bryts ned.

Varje ansats underskattade begreppslig förståelse för förklaringar av lägre språklig kvalitet. Biasen gick åt ett håll: starkare skrivande blåstes inte upp. Mönstret speglar det som rapporterats för fysiklärare själva, vilket tyder på att svårigheten ligger i att sluta sig till förståelse från prosa, för människor lika mycket som för modeller.

Bedömningspersonal och produktteam behöver rapportera underskattningsfrekvenser efter språklig kvalitet, inte bara den totala överensstämmelsen med experter, eftersom genomsnittet döljer gruppen som drabbas. Den som bedömer [[multilingual-learning|flerspråkiga elever]] bör skicka svar av låg språklig kvalitet till [[human-in-the-loop-ai|mänsklig granskning]] eller utforma uppgifter som inte beror på prosa.

Se även: [[ai-grading-fairness-reliability|Rättvis och tillförlitlig AI-bedömning]]

## Vad de tio har gemensamt

Tre av studierna mäter två saker samtidigt: vad eleverna producerar med verktyget och vad de kan utan det. Bastani, Rismanchian och Strömberg finner alla att de två divergerar, och bara det oassisterade måttet beter sig som lärande. Fyra hänger på ett designval snarare än på modellen: skyddsreglerna hos Bastani, pedagogiken inbyggd i Kestins handledare, skrivandet som Kreijkes behöll i uppgiften och den flertursinställning som SafeTutors testade. Tre undersöker systemet kring verktyget, det vill säga bevisen som används i regelbrottsfall, sättet lärarkompetens mäts på och de språkliga antagandena i [[automated-assessment|automatisk bedömning]]. StudentBench fastställer likvärdighet på ett standardiserat test, det enda utfallet där en maskin lättast kan matcha en människa. Bastani återkommer i två grupper eftersom den levererar både gapet och designfixen.

Det lämnar tre frågor värda att bära med sig in i varje kurs- eller produktbeslut. Vad bör eleven kunna när verktyget är borta? Vad ber aktiviteten dem att göra medan det är öppet? Vilka bevis skulle visa skillnaden en månad senare?

## Var bevisen är tunna

Dessa studier delar [[limitations-in-aied-research|begränsningarna i AIEd-forskningen]] som helhet. Två av de största är förlagda till Turkiet och Kina, tre till USA, en till England, en till Australien och bedömningsstudien till Tyskland. En är ett riktmärke för kommersiella modeller snarare än en fältstudie. Matematik på gymnasiet dominerar, med fysik och datavetenskap därefter. Mycket få studier undersöker [[humanities-education|skrivande i humaniora]] i stor skala, yrkesutbildning eller elever med funktionsnedsättning.

Bara den kinesiska panelen och ALEKS-panelen följer elever i mer än två år efter införandet, och de kinesiska författarna argumenterar för att kortare studier systematiskt underskattar den långsiktiga bestraffningen. Sex av resultaten är preprint eller arbetspapper som inte genomgått peer review: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang och Feser. Studierna av Bastani, Kestin, Kreijkes och Munoz är publicerade i peer review-granskade tidskrifter.

Nollresultat och negativa resultat är sällsynta i den här litteraturen, så det publicerade underlaget överdriver förmodligen hur ofta AI hjälper. Dessa studier är den bästa nuvarande vägledningen för tio beslut, och ingen av dem avgör en fråga.

## Vart du går härnäst

[[does-ai-help-students-learn|Hjälper AI mina studenter att lära sig?]] är den bredare evidensgenomgången bakom påståendena. [[redesign-assessment-ai-era|Hur bör bedömningen göras om för AI-eran?]] tar bedömningshalvan vidare. För integritetsfallen täcker [[reduce-ai-cheating|Hur minskar jag AI-fusk?]] processbevis och policy. För rönen om kompetensutveckling är [[faculty-ai-competencies|Vilka AI-kompetenser behöver lärare?]] följesidan, och [[addressing-common-misconceptions-ai-education|Hur kan vi bemöta vanliga missuppfattningar om AI i utbildning?]] hanterar de invändningar du sannolikt hör från kollegor.
