---
title: "Hur kan jag minska AI-fusk i min kurs?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [should-we-use-ai-detectors, redesign-assessment-ai-era, addressing-common-misconceptions-ai-education, top-10-findings-ai-education-instructors]
weight: 88
audience: [instructors, assessment designers]
foundations: [academic-integrity, ai-literacy, reducing-ai-misuse]
assessment: [assessment]
updated: "2026-10-29T17:10:58-04:00"
translation_of: faqs/reduce-ai-cheating
source_updated: "2026-10-28T11:06:17-04:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Det är vecka sex. En hemtentamen kommer tillbaka flytande och ihålig och du kan inte avgöra om studenten skrev den. Eller så delar fyra inlämningar en form som ingen i rummet producerade i september, och integritetskontoret vill ha en skriftlig redogörelse för vad uppgiften mätte. Eller så röstade din institution förra månaden för att begränsa [[generative-ai|generativ AI]] i kärnkurser och lämnade dig att göra begränsningen meningsfull.

Svaret du ger en kollega: sluta försöka bevisa vem som skrev arbetet och ändra villkoren under vilka det skrivs. Detektering är den svagaste hävstången du har. De hävstänger som håller är en uppgift där genvägen lämnar ett spår, ett enda oassisterat steg du kan observera, och en kort undervisad sekvens som håller studenterna kvar i det kognitiva arbetet.

## Kortversionen

**1.** Ta detekteringen bort från den kritiska vägen. Underlaget nedan visar att den slår fel på tillåten redigering och missar avsiktlig undandragning.

**2.** Lägg in ett oassisterat, observerbart steg i varje [[assessment|bedömning]] med höga insatser och ge det verklig vikt.

**3.** Sätt AI-gränsen per uppgiftssteg, inte per kurs, så att den följer det du betygssätter.

**4.** Om AI är tillåtet, konfigurera det att antyda i stället för att svara, och kräv ett försök från studenten innan det svarar.

**5.** Gör deklarationen specifik och straffri. Vaga regler och straffande regler driver båda studenterna mot att dölja.

## Detektering bär inte ärendet

Syntesen [[academic-integrity|Akademisk integritet]] rapporterar betydande begränsningar i AI-textdetektering och argumenterar för att integritet i den generativa AI-eran i allt högre grad är ett bedömningsdesignproblem snarare än bara ett detekteringsproblem. Bär med dig siffrorna in i mötet där du ska motivera detta för någon som redan har köpt en licens.

I en kontrollerad studie av 642 publicerade engelska abstract flaggade två kommersiella detektorer riktlinjeenlig lätt AI-*redigering* i 38 till 80 % av fallen. De flaggade oförändrade original från 2023 till 2025 i 9 till 15 %, med arbete utanför [[stem-education|STEM]] långt över STEM på p < 0,001. Efter AI-”humanisering” fångade samma verktyg färre än 4 % av AI-märkta omskrivningar ([[karr-ai-detection-humanization-2026|Karr m.fl.]]). Läs de tre i ordning. Tillåten användning flaggades oftare än förbjuden, och förbjuden användning var mestadels osynlig när någon hade kört den genom en omskrivare. Det är integritetens moment 22: detektorn straffar ärlig assistans och möjliggör avsiktlig undandragning.

Fältbevisen pekar åt samma håll. I en hemlig studie gick 94 % av helt AI-genererade inlämningar som injicerades i skarpa nätbaserade tentor i fem psykologimoduler oupptäckta, och AI-arbetet fick i genomsnitt högre poäng än de riktiga studenterna ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann m.fl.]]). Vanderbilt University stängde av sin licensierade detektor efter att inte ha kunnat validera en utlovad falskpositivfrekvens på 1 %, en frekvens som skulle innebära ungefär 750 felmärkta studenter bland 75 000 årliga inlämningar.

Inget av det visar att detektering aldrig fungerar. Det visar den felprofil du måste leva med. En flaggad student är en person med en överklagan, och resultatet från de 642 abstracten säger att flaggan landar hårdast på studenter som gjorde det tillåtna. Det fullständiga argumentet för varför detta ändrar vad ett betyg kan stödja finns i [[redesign-assessment-ai-era|att göra om bedömningen i AI-eran]].

## Ändra vad uppgiften gör enkelt

Syntesen [[reducing-ai-misuse|Minska AI-missbruk]] rangordnar omdesign som nivå 1 av ett strukturellt skäl: den fungerar oavsett om studenten väljer rätt beteende, eftersom den begränsar miljön i stället för att bero på motivation.

Börja med en etikett. [[ai-assessment-scale-reform|AI Assessment Scale (AIAS)]] ger varje uppgift en AI-användningsnivå, från ”ingen AI” via ”AI endast för brainstorming” och ”AI-assistans med upphovsangivelse” till ”full AI-användning”, så att förväntan blir uttrycklig och genomförbar i stället för underförstådd.

Ändra sedan artefakten. En [[meta-analysis-systematic-review|systematisk översikt]] av 72 studier om generativ AI i [[cs-education|datavetenskaplig utbildning]] bedömer omdesign som både genomförbar och mest hävstångseffektiv, och pekar ut ett drag: lägg till ett muntligt eller på annat sätt processynligt inslag i minst en bedömning med höga insatser per kurs. Den kallar det den enskilt mest effektiva interventionen i korpusen. Detektering är det tunnaste område översikten täcker, med bara 3 studier, mot att 60 till 80 % av datavetenskapsstudenterna rapporterar generativ AI-användning i kursarbete, oftast utan uttryckligt lärartillstånd, och att 70 % av ett nationellt lärarurval uttryckligen ber om utbildning i AI-resistent bedömningsdesign ([[kumar-genai-computing-education-systematic-review-2026|Kumar m.fl.]]).

Menyn, ungefär i ordning efter hur väl varje alternativ klarar en stor klass.

Oassisterat, i rummet, slutna böcker: övervakade tentor, quiz, tidsbegränsat skrivande. Ge dem större vikt än du brukade, eftersom hemarbete är den artefakt AI blåser upp. Muntliga tentor och försvar fungerar av samma skäl, eftersom realtidsdialog är svår att lägga ut ([[fenton-oral-exams-ai-authentic-assessment-2025|Fenton m.fl.]]).

Processartefakter: utkast, resonemangsspår, annoterade ”visa ditt tänkande”, revideringsloggar, så att *processen* blir synlig i stället för bara produkten ([[authentic-products-authenticated-processes-2026|Autentiska produkter, autentiserade processer]]). Autentiska uppgifter arbetar vid sidan av dem: lokala fall, praktikmaterial, studentens egna data, allt som är svårt att delegera ([[kirsanov-beyond-detection-ai-online-assessments-2026|Kirsanov m.fl.]]).

Uppgiftsvariation per student, där varje student får en version som skiljer sig på ytan men är ekvivalent i konstruktet, gör kopiering strukturellt meningslös. Behandla garantin som beroende av förmåga: [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA]] fann att frontlinjegeneratorer bara nådde 0,81 till 0,88 på en samlad integritetspoäng medan modeller utanför frontlinjen faller till 0,50 till 0,55. Om dina varianter inte är ekvivalenta har du köpt skydd mot delning till priset av orättvisa mellan studenter.

## Täpp gapet mellan övning och tenta

Det här är delen som lärare hoppar över, och det är där de kausala bevisen är starkast.

I en fält-[[rct|randomiserad kontrollerad studie]] höjde en oskyddad ChatGPT-liknande handledare resultatet i assisterad övning med 48 % och sänkte resultatet på oassisterad tenta med 17 %. En version med skyddsräcken, som antydde i stället för att svara och var försedd med probleminformation skriven av [[teacher-role|läraren]], tog bort skadan helt ([[generative-ai-guardrails-harm-learning|Skyddsräcken i generativ AI och skada på lärandet]]). I större skala fann en studie av 26 811 studenter att utläggning av hemarbete höjde hemarbetspoängen med 18 % medan den sänkte resultaten på [[summative-assessment|salstenta]] med 20 % inom sex månader ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg m.fl.]]).

Notera formen på båda resultaten. Vinsten och förlusten landar på olika mått, och bara ett av dem är det du intygar. En enskild RCT kan inte ge dig effektens storlek i din kurs. Den ger dig riktningen, och båda studierna pekar åt samma håll.

Om du ska låta studenterna använda en handledare, konfigurera den före terminen i stället för efter första klagomålet:

**1.** Ställ in den att ge stegvisa, [[socratic-method|sokratiska]] antydningar i stället för nästa svarssteg.

**2.** Förse den med korrekta lösningar och vanliga [[misconceptions|missuppfattningar]] så att den kan rikta sig mot fel i stället för att upprepa innehåll.

**3.** Kräv ett försök innan någon utdata visas.

**4.** Tillämpa regeln om [[brcic-effortless-trap-productive-struggle-2026|den ansträngningslösa fällan]]: om AI-insläppet får uppgiften att kännas ansträngningslös står det på fel plats.

Den sista regeln är också där [[scaffolding|stöttning]] och [[guardrails|skyddsräcken]] förtjänar sitt värde, och där en [[simulating-students|simulerad student]] är användbar för att testa din egen prompt innan riktiga studenter möter den.

## Be studenterna visa vad de kan

Du kommer aldrig att fastställa hur en fil producerades. Du kan billigt fastställa om studenten kan göra det som filen tycks visa.

[[best-response-student-ai-dialog-2026|”Det bästa svaret på studenters AI-användning är inte detektering, det är dialog”]] beskriver mekanismerna: en tvåminuters förklaring en mot en eller en inspelad förklaring av en inlämnad text, ett kort uppföljningsquiz på samma material utan verktyg, och en begäran att revidera ett urval av sitt eget arbete och förklara ändringarna. Källan är en praktikers redogörelse, så behandla den som en lovande praktik snarare än bevis för effekt.

Verifieringen avgör också om din process för misstänkt oredlighet överlever en överklagan. [[munoz-misconduct-allegation-evidence-2026|Munoz m.fl. (2026)]] analyserade faktiska akter om misstankar om oredlighet med generativ AI och fann att rättssäkerhet kräver att studenten får veta anklagelsen och får en chans att svara *innan* något avgörande, oftast i ett utredande möte eller en panelintervju, och att det hen säger förs in i bevisningen. Deras bevissägenheter förklarar varför detta måste byggas in i kursen: systemregistrerade beteendespår finns bara i övervakad bedömning, och svagare processbevis som utkast, handledningsmöten och presentationer finns bara där de redan var rutin. En verifieringsvana blir underlag du kan lita på senare.

Skriv regeln exakt också. [[wright-transcription-not-generation-2026|Wright (2026)]] visar att förbud som behandlar tal-till-text-transkribering och generativ textproduktion som samma ”AI-användning” är för breda och riskerar att bestraffa studenter som inte gjorde det förbjudna. Det är ett rättviseproblem innan det är ett juridiskt, och [[legal-issues-and-risks|juridiska frågor och risker]] täcker resten.

## Håll studenterna kvar i arbetet medan de arbetar

Att förbjuda verktyget och att tillåta det utan struktur ger samma utfall, nämligen studenter som står utanför det kognitiva arbetet.

Syntesen Minska AI-missbruk lägger fram åtta designprinciper för den tillåtna versionen, bland dem: bevara [[desirable-difficulties|kognitiv friktion]], positionera AI som en provisorisk tankepartner snarare än en auktoritet, bygg in utvärderingskontrollpunkter och kräv [[metacognition|metakognitiv]] journalföring och promptloggar.

Sekvensen som bär de principerna är kort nog att trycka på ett uppgiftsblad:

**1.** Tänk först. Studenterna brainstormar, skissar eller skriver utkast självständigt innan de öppnar något.

**2.** AI sedan. De använder det för att kritisera, utvidga eller generera alternativ mot tänkande de redan har.

**3.** Reflektera sist. De loggar vad de använde det till, vad de accepterade och förkastade, och varför. En prompt plus en revideringslogg räcker.

## Gör deklarationen specifik, och billig att fylla i

Byt ut kryssrutan ”jag använde AI” mot ett [[discipline-specific-aied|ämnesspecifikt]] deklarationsramverk som kopplar användning till kognitiva steg, som strukturell planering kontra innehållsgenerering ([[genai-declaration-frameworks-higher-education|ramverk för AI-deklaration i högre utbildning]]). Ett försättsblad som frågar vilka steg, vilket verktyg, vilka prompter och hur utdata utvärderades gör mer arbete än ett ja eller nej.

Två villkor gör den ärlig. Deklarationen måste vara säker, eftersom straffande eller vaga policyer aktivt driver fram döljande ([[gonsalves-student-non-compliance-ai-declarations-2025|Gonsalves m.fl.]]), och studenterna väger risken att berätta mot risken att inte göra det ([[chang-should-i-tell-my-teacher-ai-disclosure-2026|Chang m.fl.]]).

Aritmetiken måste också tala för att berätta. [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed och Temimi]] modellerar detta som ett problem med ofullständig information snarare än moral. Deklaration är attraktiv bara så länge kostnaden för ärlighet hålls låg, och eftersom en detektors falska positiva också drabbar ärliga studenter kan starkare övervakning göra döljandet relativt mer attraktivt när extra känslighet ger fler nya falska positiva än nya sanna positiva. Läs en deklarerad användning som sammanhang snarare än bekännelse, och designa för den student som är mest frestad att dölja.

## Undervisa i den kompetens du betygssätter

Syntesen Minska AI-missbruk rangordnar undervisning i [[ai-literacy|AI-kompetens]] och [[prompt-engineering|promptning]] som nivå 2, under strukturell förändring.

Det uppmätta exemplet är en [[k-12|K-12]]-modul med scenariobaserad promptövning och en [[llm|LLM]]-automatbedömare. Den förbättrade den faktiska promptförmågan och höjde tilltron till att använda AI för lärande med 10,4 %, och 87 % uppgav att de hade lärt sig använda AI ansvarsfullt ([[aaai2026-prompting-literacy-k12|AAAI 2026]]).

Vad studenterna faktiskt tror är mindre cyniskt än paniken antyder. Bland 504 sociologistudenter hade 65 % använt generativ AI i kursarbete, men bara 3 % för att generera uppgiftstext och 2 % för att generera ett helt utkast. 81 % hade fått någon vägledning om AI och bara 46 % tyckte att den var mycket tydlig ([[student-genai-use-views-writing|Studenters syn på generativ AI och skrivande]]). Tvetydighet, inte trots, är det praktiska problemet, vilket är skälet till att en tydlig regel plus en undervisad sekvens förändrar mer beteende än en varning gör. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa och Mezgebu (2026)]] beskriver studenter som frågar om generativ AI är ett verktyg som underlättar fusk eller en partner som stöder lärande, och den frågan är vad dina förväntningar bör svara på.

Skadan som är värd att undervisa om uttryckligen är [[ai-misuse-learning-harm|gapet mellan prestation och lärande]]: prestationen stiger nu, lärandet faller senare, och studenten upplever bara det första. [[ai-tools-academic-work-cheating-2026|AI-verktyg i akademiskt arbete]] och [[student-rationalization-ai-writing|studenters rationaliseringar kring AI-skrivande]] täcker kamratnorm- och rationaliseringssidan, inklusive försvaret ”alla gör det” som en tydlig norm punkterar. För hur stark den basen är, se [[ai-literacy-evidence|underlaget för AI-kompetens]] och [[top-10-findings-ai-education-instructors|de tio viktigaste fynden för lärare]].

## Vad lärare missförstår om detta

En detektor är en försäkring. Räkna vad premien täcker: i den frekvens Vanderbilt inte kunde validera är 1 % av 75 000 årliga inlämningar 750 felmärkta studenter, och studien av de 642 abstracten visar att flaggorna klumpar sig på tillåten redigering.

Ett förbud avgör frågan. Ett förbud skrivet i språket ”AI-användning” fångar transkribering tillsammans med textproduktion, vilket betyder att du kan bestraffa en student för att ha dikterat sin egen mening ([[wright-transcription-not-generation-2026|Wright, 2026]]). Det säger dig heller ingenting om vad den studenten kan.

Fusk är ett motivationsproblem, så straff är verktyget. Motivation är verklig, och det är inte den hävstång som har bäst underlag. Omdesign rankas som nivå 1 eftersom den inte kräver att studenten väljer väl, och svarsregionsmodellen säger att du ska designa för den student som är mest frestad att dölja.

Om jag tillåter AI upphör missbruket att vara mitt problem. Tillåtelse utan skyddsräcken gav 48 % vinst i övning och 17 % förlust på tentan i samma studie. Sätt tillbaka skyddsräcket och skadan försvann.

Studenterna vet redan var gränsen går. 81 % hade fått vägledning och färre än hälften tyckte att den var tydlig. Siffrorna 3 % och 2 % säger att de flesta inte genererar hela uppgifter; de 46 % säger att de gissar om resten.

En kryssruta är en deklaration. En kryssruta registrerar att en student klickade. En stegvis deklaration berättar vad de gjorde i varje steg, vilket är den enda versionen som hjälper dig eller dem.

## Vad som kommer att slå tillbaka mot dig

**”Jag har inte tid att göra om en kurs den här terminen.”** Gör inte om kursen. Gör om en uppgift: ett oassisterat steg, en rad i bedömningsmatrisen med poäng. Det är en tvåtimmarsförändring, och det är förändringen som översikten med 72 studier pekar ut.

**”Muntliga försvar är omöjliga med 300 studenter.”** Kör då inte 300 av dem. Vikta den slutna bokens del, kräv processartefakter och ta stickprov på muntliga kontroller av de inlämningar som ser inkonsekventa ut mot tidigare arbete. Trehundra studenter behöver inte 300 samtal för att kalkylen ska ändras.

**”Jag behöver något att visa integritetskontoret.”** Processbevis är starkare än en detektorpoäng, eftersom Munoz m.fl. fann att svarsmöjligheten och kursens egna dokument är det akten vilar på. En flaggad procentandel är en anklagelse. En inspelad förklaring är ett underlag.

**”Krav på deklaration belastar bara de ärliga.”** Det gör det, om deklarationen inbjuder till misstanke. Håll kostnaden för ärlighet nära noll: inget straff för en deklarerad användning, och en deklaration som läses som sammanhang. Modellen förutsäger döljande precis när ärligheten blir dyr.

**”Studenterna kommer att använda AI ändå.”** Det kommer de att göra, och den användbara frågan är vilket svar din uppgift gör enklast. I en klass där 65 % rapporterar användning och 2 % rapporterar att de genererat ett helt utkast är det mesta av trafiken assistans du skulle kunna undervisa om i stället för bedrägeri du behöver fånga.

**”Skärpta regler kommer att fånga studenter som inte gjorde något fel.”** Det är det dokumenterade misslyckandet, inte en hypotes. Precision är skyddet: namnge den förbjudna handlingen, inte verktyget.

## Vad du ska göra den här veckan

**1.** Skriv om AI-klausulen i din mest omstridda uppgift så att den namnger specifika steg och specifika handlingar, och stryk den generella formuleringen.

**2.** Lägg till ett oassisterat steg i den uppgiften och ge det tillräcklig vikt för att betyda något.

**3.** Sätt en processartefakt i bedömningsmatrisen med poäng kopplade till den, och beskriv hur bra ser ut lika exakt som du beskriver produkten.

**4.** Om du tillåter en handledare, kontrollera dess konfiguration den här veckan mot de fyra inställningarna ovan.

**5.** Säg till studenterna, skriftligt, att en deklarerad användning inte kommer att bestraffas, och mena det.

## Vart du går härnäst

[[redesign-assessment-ai-era|Att göra om bedömningen i AI-eran]] är bedömningsdesignens följeslagare, och stället att börja på om din fråga är vad betyget är bevis på. [[should-we-use-ai-detectors|Bör vi använda AI-detektorer]] hanterar detektorbeslutet direkt, [[course-ai-policy|AI-policy för kursen]] täcker formuleringarna studenterna faktiskt läser, och [[ai-assessment-scale-reform|reform av AI-bedömningsskalan]] levererar etikettschemat. På undervisningssidan täcker [[ai-literacy-evidence|underlaget för AI-kompetens]] och [[ai-misuse-learning-harm|skadan av AI-missbruk på lärandet]] vad kompetensarbetet är värt och varför skadan uppstår.
