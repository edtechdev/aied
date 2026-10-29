---
title: "Vilka är de tio viktigaste rönen från forskningen om AI i utbildning som lärare bör känna till?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors]
updated: "2026-10-29T17:10:58-04:00"
translation_of: faqs/top-10-findings-ai-education-instructors
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

Det är veckan före terminsstart, eller veckan efter den första stora inlämningen, och någon har ställt en fråga du inte kan besvara utifrån erfarenhet: vad studenterna får göra med AI i den här uppgiften, och vad betyget då bevisar. Kanske kom en hemtenta tillbaka polerad på ett sätt som inte stämmer med studentens tidigare arbete. Kanske håller din institution på att skriva en AI-policy och vill att din kurs ska rätta sig efter den till fredag. Kanske överklagar en student ett betyg och du kan inte visa vad arbetet demonstrerar.

Den samlade slutsatsen från den forskning som den här kunskapsbasen har samlat: hur du bygger in [[generative-ai|generativ AI]] i aktiviteten avgör om den stärker tänkandet eller ersätter det. Spaken du själv rår över är uppgiftens utformning. Provet på varje utformning är vad studenterna fortfarande kan göra när verktyget är borta. De tio rön som sidan har fått sitt namn efter finns nedan, sorterade efter det beslut som var och ett av dem belyser.

## Kortversionen

**1.** Namnge det tänkande som uppgiften finns för att producera, och ge sedan AI ett jobb som inte utför just det tänkandet.

**2.** Sätt AI-regeln per uppgift i stället för per kurs, och skriv skälet bredvid den där studenterna läser det.

**3.** Lägg in minst ett betygssatt moment i varje momentblock som studenten genomför utan AI närvarande.

**4.** Bedöm aktiviteten efter vad studenterna kan göra veckor senare, utan hjälp, i stället för efter kvaliteten på det de lämnar in.

**5.** Fråga hur studenterna använde verktyget, och betygssätt verifieringen i stället för inloggningarna.

**6.** Titta på vilka studenter utformningen hjälper, för ett genomsnitt döljer dem den stjälper.

## Bestäm vad uppgiften är till för

Skriv en mening som namnger förmågan innan du rör verktyget: vad ska en student kunna göra i slutet av det här momentet som hen inte kunde i början? Svaret kan vara: bygga ett argument ur evidens, skriva ett bevis, komma fram till en diagnos, fatta ett designbeslut under restriktioner. Om du inte kan namnge det blir AI-regeln godtycklig och studenterna märker det.

Två forskningslinjer förklarar varför detta kommer först. [[productive-failure|Produktivt misslyckande]] är rönet att inlärare ofta behåller mer när de försöker lösa ett problem innan de får se hur, så friktion är ibland själva mekanismen och inte ett hinder att ta bort. [[icap-framework|ICAP-ramverket]] förutsäger olika lärande från passiv, aktiv, konstruktiv och interaktiv användning av samma material. Båda pekar mot en enda designfråga: vad gör studenten medan verktyget är öppet?

Den tydligaste illustrationen i materialet kommer från en jämförelse av en teoretiskt grundad chattbot som stöttade studenternas förklaringar mot vanlig ChatGPT och undervisning som vanligt. De omedelbara skillnaderna var inte signifikanta. Fyra veckor senare behöll den stöttade gruppen mer begreppslig kunskap. Det är en studie och ingen universell effekt, och det användbara innehållet är resultatets form: utformningen kan väga tyngre än modellens förmåga, eftersom det som skilde betingelserna åt var vad aktiviteten bad studenterna göra.

[[kumar-genai-computing-education-systematic-review-2026|den systematiska översikten över 72 peer review-granskade studier om datavetenskaplig utbildning]] kommer till samma skikt från andra hållet. Den kallar kritiskt engagemang med AI-output ”den gemensamma mekanism som förbinder varje effektiv intervention i materialet” och rekommenderar [[scaffolding|gradvis tillgång]], att generativ AI införs först sedan grundläggande kompetens har visats. Ingen av påståendena handlar om vilken produkt du licensierar.

## Ge AI ett jobb som inte är det tänkande du betygssätter

Årtionden av [[intelligent-tutoring|forskning om intelligent handledning]] beskriver mönstret som fungerar: diagnostisera vad studenten förstår, ställ frågor, ge gradvisa ledtrådar, be dem förklara, ge återkoppling. Allt utom att lämna över lösningen. Nutida arbete med [[pedagogical-agent|pedagogiska agenter]] drar samma gräns mellan undervisande beteende och svarsproduktion, och [[thermomix-genai-education-analogy-2026|Thermomix-analogin]] gör det konkret. En hushållsmaskin kan laga maten åt dig, och då förlorar du färdigheten, eller den kan fungera som testpartner för idéer du fortfarande måste begripliggöra. De lägena motsvarar ICAP: passivt, aktivt, konstruktivt, interaktivt.

Smalare verktyg visar samma princip. En [[structrag-diagram-reasoning-ai-tutoring|handledare som läser ingenjörsdiagram strukturellt]] nådde 93,0 % F1 på kantnivå mot 89,3 % träffsäkerhet på hela diagrammet, vilket innebär att den kan peka ut de specifika saknade eller fellästa kopplingarna även när hela diagrammet är fel. Det är återkoppling en student kan agera på, i stället för godkänt eller underkänt.

Den svårare frågan är vad handledaren får rekommendera. När en [[tuo-armada-multi-agent-debate-overreliance-2026|debatt mellan flera agenter]] ersatte ”här är AI:ns svar” med en diskussion där den egna föredragna ståndpunkten hölls tillbaka, föll skadligt byte till en felaktig AI-position från 42-60,5 % till 5,7-8,2 %. Anammandet av en korrekt AI-position föll också, från 61,1-72,3 % till 22,1-33,3 %. Att hålla tillbaka en rekommendation skyddar studentens ursprungliga omdöme och lämnar korrigeringen åt överläggningen, så utformningen byter felkorrigering mot färre självsäkra felsteg. Bestäm vilket av de två du vill ha ut av utbytet innan du skriver prompten.

I klassrummet är detta billigt att genomföra. En [[socratic-method|sokratisk]] sekvens är mönstret att sikta på, med verktyget frågande i stället för svarande. Be studenterna begära ”en ledtråd”, ”ställ frågor till mig” eller ”kritisera mitt resonemang”, och gör ”lös det här” till undantaget. Du ändrar interaktionens standardverb, och det är den del som studenterna faktiskt styr över.

En gräns bör sägas rakt ut. Det mesta av evidensen kommer från korta uppgifter i en handfull kurser, och inget av det lovar att en handledare som ger ledtrådar höjer tentamensresultaten i din grupp. För den frågan behöver du den randomiserade prövning som diskuteras nedan, och dess resultat är nyktert.

## Sätt regeln på uppgiften, och säg varför

Ett användbart ramverk skiljer på tre fall. Begränsa AI när oberoende kompetens är det du mäter. Stötta den när avgränsad hjälp inte undergräver den kompetensen. Kräv den när skickligt samarbete mellan människa och AI i sig är det studenterna måste lära sig. De flesta kurser innehåller alla tre, under olika veckor, vilket är varför en enda regel på kursnivå gång på gång fallerar i kanterna.

[[zou-is-this-a-trap-student-teachers-genai-2026|den mixade studien av 85 lärarstudenter]] visar vad en regel utan skäl producerar. 62,4 % av urvalet avstod från att använda generativ AI även där det var tillåtet, och 41,5 % av dem som avstod angav rädsla för att bli anklagade för [[academic-integrity|plagiering]]. 9 av 11 intervjuade läste den tillåtande policyn i sig som en fälla. I samma studie använde bara 37,6 % tillåten generativ AI över huvud taget, deras val följde programkulturen och [[assessment|bedömningsutformningen]] mer än någon enskild kurs tillstånd, och deras egna deklarationer underrapporterade den faktiska användningen i varje kurs.

Läs de siffrorna som en designbrief. Ett tillstånd utan angivet syfte ser ut som en uppsättning fälla, och ett förbud utan angivet syfte ser ut som ett hinder att ta sig runt. Det studenterna reagerar på är resonemanget som är knutet till just den här uppgiften. Sätt regeln i uppgiftsbladet, en rad, och gör raden så specifik att en student kan avgöra om hjälpen hen är på väg att ta emot undergräver det du betygssätter.

## Betygssätt något studenten gjorde utan verktyget

Det här är steget som gör jobbet, och evidensen här är den minst tvetydiga på sidan.

Översikten över 72 studier fann att generativ AI tillförlitligt höjde kortsiktig slutförandegrad och kortade tiden på uppgiften i 36 studier, vilket författarna behandlar som det bäst replikerade resultatet i materialet, och att de effektivitetsvinsterna ”inte överförs till oberoende prestation” i 21 studier. En [[yan-cognitive-outsourcing-genai-assessments-2026|tänka-högt-studie av 38 studenter på grundnivå]] visar hur det går till i det vanliga fallet. [[cognitive-offloading|Kognitiv avlastning]] är svårast för lärandet när AI:n utför det resonemang som studenten skulle öva. Där stannade 76,32 % i ett mönster med en enda tur, fråga, svar, stopp, och bara 21,06 % varvade AI-användning med egen läsning och skrivande. Den största gruppen, 31 av 38, beskrev målsättningar om bemästring, arbetade i fragmenterade enstaka turer och rapporterade sedan överberoende, mental bekvämlighet och snabb glömska; en av dem uttryckte det som ”den hastighet med vilken du glömmer det är också mycket hög”. En [[critical-thinking-paradox-genai-learning-2026|2026 års ramverksartikel]] ger mönstret dess namn. Betyg och produkter stiger medan det mentala arbete som ger varaktigt lärande faller.

Den randomiserade prövningen avgör argumentet för åtminstone en miljö. En [[bassner-performance-learning-dissociation-ai-programming-2026|trearmad RCT med 275 studenter på en introduktionskurs i programmering]] jämförde en handledare som gav ledtrådar och höll tillbaka fullständiga lösningar, obegränsad ChatGPT och traditionella webbresurser. Övningspoängen skilde sig skarpt: 71,84 % för ChatGPT mot 29,85 % för kontrollgruppen utan AI, med den ledtrådgivande handledaren på 57,50 %. Begreppskunskapsvinsterna skilde sig inte alls mellan de tre armarna, på 0,83, 0,71 och 0,85 poäng (tid × grupp p = 0,773). Båda AI-betingelserna sänkte frustration och ovidkommande belastning, och bara den ledtrådgivande handledaren höjde den inre motivationen. Det verktyg som studenterna skattade som mer hjälpsamt och lättare var också det som mest minskade den bearbetning som ger lärande.

Notera vad den utformningen inte kan stödja. Det är en kurs, en termin, ett språk, och övningspoängen är assisterad prestation per konstruktion, vilket är precis det mått som studien varnar för att lita på. Den visar inte att handledare är värdelösa. Den visar att det utfall du väljer att mäta avgör det svar du får, och att studenternas preferens inte är ett lärandemått.

Betygssätt därför den ohjälpta versionen. En uppgift per moment där studenterna hämtar fram, förklarar, löser eller försvarar idéer utan AI närvarande, och sätt riktiga poäng på den. Validitetsargumentet bakom detta finns i [[assessment-validity|bedömningsvaliditet]]: en polerad hemtenta visar inte längre att personen som lämnade in den har den kompetens som produkten uppvisar. [[redesign-assessment-ai-era|Att göra om bedömningen i AI-eran]] arbetar igenom hela arkitekturen, inklusive det billiga autentiserade steget för stora kurser.

## Ändra uppgiften du redan har, inte hela kursen

De flesta lärare som ställer den här frågan bygger inte en ny kurs. De har ett terminsarbete, en laborationsrapport eller en problemuppsättning som har fungerat i åratal, och de vill veta var de ska lägga sömmen. Ta isär uppgiften steg för steg, fråga för varje steg vad du bedömer där, och låt svaret sätta gränsen. Det är metoden på uppgiftsnivå som dokumenteras i [[mccorkle-aligned-genai-course-policy-2025|McCorkles arbete med samstämd kursregel]], och en genomgång av din mest omtvistade uppgift räcker oftast för att se formen.

Ett tiosidigt terminsarbete delar vanligen upp sig så här. Ämnesval och källsökning är där omdömet bor, så ett verktyg som föreslår en tes eller sätter ihop läslistan har utfört den del du betygssätter. Syntesen och argumentet är konstruktet i sig. Citatteknik, referenskontroll och språkredigering är steg där verktygsanvändning är osynlig för ditt konstrukt, och att förbjuda det där ger dig ingenting annat än irritation. Säg det i uppgiftsbladet, steg för steg, i en kort tabell om du vill.

Gör sedan mellansteget synligt. Be om en en-sidig kommenterad motivering, inlämnad med arbetet, som namnger två källor studenten förkastade och varför, ett påstående hen reviderade efter kontroll, och var hen valde att inte följa ett förslag. Betygssätt den med samma specificitet som du använder för prosan. En motivering väger bara något om en student som hoppar över den förlorar mer än hen vinner på att hoppa över den, så ge den tillräckligt många poäng för att aritmetiken ska vara uppenbar.

En problemuppsättning är enklare och sömmen sitter på ett annat ställe. Svaren är inte konstruktet; metodval och feldiagnos är det. Kräv att första steget i varje problem formuleras med studentens egna ord innan något verktyg öppnas, och kör ett problem ur uppsättningen i klassrummet utan några hjälpmedel. Det är en mindre förändring än det låter, och den förvandlar uppsättningen från en produkt du inte kan verifiera till ett spår av hur studenten tänkte.

För en laborationsrapport är sömmen oftast datatolkningen och felanalysen. Låt verktyget formatera tabellen och kontrollera enheterna. Behåll tolkningen, valet av vad som räknas som avvikande och förklaringen av avvikelsen från det förväntade resultatet hos studenten, och betygssätt dem med poäng knutna.

Mönstret generaliserar: hitta steget där förmågan bor, skydda det steget, frigör resten, och placera beviset på process där poängen finns. Det du undviker är den omdesign som ändrar hur arbetet produceras utan att ändra vad betyget kan stödja.

## Bedöm återkopplings- och betygsverktyg efter senare prestation

[[ai-feedback-quality|AI-återkoppling]] kan vara snabb, specifik, skalbar och acceptabel för studenterna, även inom [[higher-ed|högre utbildning]]. Om den undervisar beror på träffsäkerhet, [[pedagogy|pedagogisk]] passform och studenternas [[feedback-literacy|återkopplingskompetens]], deras förmåga att bedöma återkoppling och agera på den. Om du väger den för återkoppling eller betygssättning är siffrorna nedan dem du tar med till upphandlingssamtalet.

En [[mcinnes-salvaging-constructive-alignment-genai-2026|kritisk analys av 14 institutionella vägledningsdokument]] fann att generiska prompter producerar mål, aktiviteter och bedömningar isolerade från varandra. Verktyget kan inte veta hur sammankopplat ett ämne är, så dess återkoppling förblir allmän i stället för diagnostiskt precis.

Konfigurationen flyttar kvaliteten, mätbart. I en [[teacher-ai-literacy-prompt-feedback-quality-2026|studie av AI-återkoppling om lärandemål]] förklarade modellen ensam 26,9 % av variationen i återkopplingskvalitet och med prompten tillagd steg den till 42,8 %, alltså ytterligare 15,9 %. Den enda promptegenskap som spelade roll var ämnesspecifik terminologi; att byta ut den mot vardagliga omskrivningar gjorde återkopplingen betydligt sämre. Modellvalet spelade också roll: Claude 3 och Gemini Advanced gav betydligt lägre skattad återkoppling än ChatGPT-4.

Betygssättningen är ännu skakigare. En [[llm-automated-grading-programming-comparison-2026|jämförelse av 18 språkmodeller som betygssatte 6 081 programmeringsinlämningar]] fann genomsnittliga betyg från 0,290 till 0,608 beroende på modell, med exakt överensstämmelse så låg som 0,20 för somliga och 0,74 som bäst. Två studenter med identiskt arbete kan få olika betyg beroende på vilken modell institutionen licensierade.

Sedan finns frågan som studenterna bryr sig om, nämligen huruvida återkopplingen förändrar vad de kan göra senare. En [[llm-feedback-handwritten-mathematics-exam-performance-2026|terminlång utplacering i en grundkurs i matematik]] med 343 engelskspråkiga och 236 nederländskspråkiga studenter genererade individualiserade kommentarer och övningsuppgifter från fotograferade svarsblad. Granskarna skattade övningsuppgifterna högst och diagnostisk specificitet och klarhet lägst. Den randomiserade crossover-prövningen på kopplade tentamensfrågor fann ingen statistiskt signifikant skillnad efter justering (pHolm = 0,104), och närvaron följde tentamensresultaten mycket tydligare än exponeringen för återkoppling gjorde (ρ = 0,49 och 0,54, båda p < 0,001). Återkoppling som studenterna värderar och agerar på är inte samma sak som återkoppling som ger mätbart lärande.

Det finns ytterligare en fälla om du låter en modell betygssätta. I en [[llm-grading-self-preference-bias-2026|studie av 1 426 psykologiuppsatser över tio akademiska år]] gav alla fyra AI-bedömarna studenterskrivet arbete lägst och AI-skrivet arbete högst. 10 av 16 jämförelser var så stora att skillnader av den storleken är sällsynta i utbildningsforskning, upp till den största observerade klyftan, och biasen var starkast för helt AI-genererad text. En bedömare kan belöna text för att den är maskinlik även när instruktionerna säger att den ska bedöma innehåll.

## Skilj på de studenter utformningen hjälper och dem den stjälper

En genomsnittlig förbättring kan dölja en kurs där de starka blir starkare och de svaga får en sämre deal. Den [[digital-divide|digitala klyftan]] går nu längs minst tre linjer: tillgång till verktyg, färdighet i att använda dem, och vem som faktiskt får ett användbart resultat. Promptfärdighet ensam skapar ett ”promptprivilegium” där mer erfarna användare får bättre output ur samma system.

Översikten över 72 studier skiljer på två mekanismer. En färdighetsklyfta uppstår där studenter med starkare [[prior-knowledge|förkunskaper]] omvandlar hjälp till varaktiga vinster medan sämre förberedda studenter ersätter övning med den. En resursklyfta uppstår där tillförlitligt internet och betald åtkomst upprätthåller bättre verktygsanvändning mellan institutioner. Bara sex studier i materialet undersökte likvärdighet direkt, vilket författarna behandlar som problemet snarare än en fotnot; [[equity-in-ai-education|likvärdighet i AI-utbildning]] är där argumentet utvecklas.

Hjälp kan sluta en klyfta när de studenter som behöver den är de som engagerar sig. En [[co-learning-ai-agent-hidden-rules-2026|studie med fyra experiment där inlärare upptäcker dolda regler med hjälp av en AI-agent]] fann att hjälpen minskade antalet drag som behövdes med 33-52 %, och vinsten koncentrerades till de svagaste medan starkare inlärare i stort sett var opåverkade. Det är den hoppfulla versionen, och den förutsätter att de studenter som mest behöver hjälpen är de som använder den väl, vilket färdighetsklyftan antyder att de inte klarar utan undervisning.

## Låt de avgörande besluten ligga hos en människa

Lärarnas AI-kompetens är inte där policydebatten antar att den är. Bland [[science-educators-ai-literacy-postqualification-2026|naturvetenskapslärare som redan hade genomfört AI-utbildning]] var den genomsnittliga AI-kompetensen 16,7 av 30, under referensurvalets 18,79, och den var orelaterad till ålder, kön, tjänsteår eller hur mycket de hade använt AI. En [[ai-tpack-mathematics-teacher-education-2026|enkät med 412 blivande matematiklärare]] fann beredskap i ett tidigt skede, med undervisningsuppfattningar högst på ett medelvärde av 5,24 på en 7-gradig skala och teknisk AI-kunskap lägst på 4,23.

Det är ett argument för avgränsade verktyg, inte autonoma. Analysen av vägledningsdokumenten föreslår en institutionellt konfigurerad [[rag|retrievalförstärkt]] agent som vägleder tänkande utan att leverera svar, flaggar missanpassning och eskalerar till en människa i kanterna, med befogenhet beskriven som ”härledd och avgränsad”. Det finns direkta belägg för att hålla människor i loopen snarare än framför den: ett [[instructional-agents-multi-agent-course-gen|system för att generera kursmaterial]] fick bättre poäng när människor var involverade, där läget med mest mänsklig insats höjde granskarnas poäng med 0,5-0,9 poäng över det helt autonoma läget. Dess autonoma granskare klustrade tätt kring 2,9-3,1 medan mänskliga utvärderare spreds mer och diskriminerade bättre, så författarna behöll det mänskliga omdömet som den primära kvalitetssignalen.

Den praktiska versionen för en kurs: låt AI utkasta, sortera och flagga. Behåll träffsäkerhet, rättvisa, integritet och varje beslut om en students progression under [[human-in-the-loop-ai|meningsfull mänsklig tillsyn]]. Riskerna som gör detta nödvändigt är den bekanta uppsättningen: bias, integritet, transparens, inlärarens [[agency|autonomi]], ansvarsskyldighet och [[pedagogical-safety|pedagogisk säkerhet]]. Den listan är varför [[teacher-ai-competency|pedagogisk AI-kompetens]] betyder mer än teknisk förtrogenhet.

## Vad lärare missförstår om detta

**”Det polerade arbetet framför mig är bevis för att studenten kan det.”** Det är bevis för att arbetet är polerat. Spridningen 71,84 % mot 29,85 % på övningspoäng, med begreppsvinsterna platta i samma prövning, och de 36 studierna i översikten som fann effektivitet utan överföring, beskriver alla avståndet mellan assisterad prestation och förmåga. Om produkten är det enda du betygssätter är produkten allt du har mätt.

**”Om AI:n är en handledare står den på rätt sida av linjen.”** Etiketten bär ingen garanti. I programmeringsprövningen undvek den ledtrådgivande handledaren den skada som obegränsad ChatGPT gjorde på övningarna, och gav ändå ingen begreppsmässig fördel gentemot ingen AI alls. Att hålla tillbaka det slutliga svaret är inte samma sak som att hålla tillbaka resonemanget, och en handledare kan göra det andra medan den ser ut att bara göra det första.

**”En detektor, eller en strängare regel, löser integritetsproblemet.”** Detektion hanterar en av flera reaktioner. Lärarstudentstudien fann att rädsla för anklagelse dämpade tillåten användning, att programkulturen förutsade beteendet bättre än någon kursregel, och att egenrapporterna underrapporterade användningen i varje kurs. En strängare regel ändrar vad studenterna döljer, inte vad de lär sig.

**”En AI-regel för hela kursen är rättvisare och enklare.”** Enklare, ja. Evidensen talar för regler satta per uppgift, eftersom de tre fallen, begränsa, stötta och kräva, samexisterar i de flesta kurser och samma tillstånd betyder olika saker i en laborationsrapport och i en reflektion. Helhetshållningar är också dem studenterna lättast tar sig runt.

**”Studenter som säger att verktyget hjälper lär sig av det.”** Tillfredsställelse är ett [[self-report-measures|självrapporterat mått]], och i programmeringsprövningen var den högst skattade betingelsen den som mest minskade bearbetningen bakom lärandet. Matematikutplaceringen fann samma delning: återkoppling som studenterna värderade, ingen signifikant tentamensskillnad.

**”AI-kompetens är promptfärdighet, och studenterna plockar upp den genom att använda verktyget.”** Ramverk behandlar [[ai-literacy|AI-kompetens]] som begreppslig förståelse, operativ färdighet, [[critical-thinking|kritisk värdering]], [[ethics|etiskt]] omdöme och medvetenhet om gränser. Översikten säger uttryckligen att [[prompt-engineering|promptteknik]], verifiering av output och analys av AI-fel är undervisbara färdigheter som inte utvecklas genom exponering. De utbildade naturvetenskapslärarna som skattade 16,7 av 30 är den empiriska versionen av det påståendet.

**”Likvärdighetsproblemet är tillgång.”** Tillgång är en av tre linjer. Färdighet och vem som får ett användbart resultat är de andra två, och bara sex studier i materialet undersökte något av det direkt. Att ge varje student en licens löser den enklaste tredjedelen.

## Vad som kommer att slå tillbaka mot dig

**”Mina studenter säger att AI hjälper dem.”** Den hjälper oftast med arbetet framför dem, och rönet handlar om vad som återstår efteråt. Fråga vad de fortfarande kan utan hjälp och du får ett annat svar, vilket är anledningen till att det ohjälpta betygssatta steget finns.

**”Jag undervisar 200 studenter. Jag kan inte läsa utkast eller göra muntliga kontroller.”** Du behöver inte läsa allt. En tillämpning i klassrummet eller en kort inspelad förklaring i den mest avgörande uppgiften, plus en stickprovskontroll på arbete som ser inkonsekvent ut med tidigare inlämningar, täcker det mesta av risken. Etappvisa inlämningar, kommenterade motiveringar och process[[eportfolio|portföljer]] skalar; det gör också betygssättning av verifieringen av en medvetet bristfällig AI-output.

**”Detektion är allt vi har.”** Detektorer har dokumenterade tillförlitlighets- och rättviseproblem, och validiteten är det svårare problemet: en polerad hemtenteprodukt visar inte längre att personen som lämnade in den har kompetensen. Processbevis är billigare än en kapprustning och producerar något du kan försvara i ett överklagande.

**”Att förbjuda det är enklare.”** Enklare, och det misslyckas oftast. Anammandet i lärarstudentstudien följde programkulturen snarare än någon enskild kurs policy, och deklarationerna underrapporterade den faktiska användningen i varje kurs. Ett förbud tar också bort din möjlighet att se hur studenterna skulle använda verktyget när de lämnar utbildningen.

**”Jag undervisar inte i AI. Det här är inte mitt ämne.”** Rönen handlar om ditt ämne. När AI utför den övning som din kurs finns för att ge, är det precis då den stör, och störningen syns i dina bedömningar vare sig du nämner verktyget eller inte.

**”Evidensen är för ny att agera på.”** Delvis sant, och det skär åt båda hållen. Mycket av materialet är korta interventioner, [[self-report-measures|självrapporteringsstudier]], enskilda discipliner eller arbete från 2025 och 2026, och påståenden från mogen [[intelligent-tutoring|forskning om intelligent handledning]] är starkare än påståenden om obegränsade allmänna [[conversational-ai|chattbotar]]. Där ett påstående nu har en randomiserad prövning bakom sig, dissociationen mellan prestation och lärande i programmeringsprövningen och återkopplingsresultatet i matematikutplaceringen, citeras den prövningen här. Där det inte finns någon, behandla rönet som bästa tillgängliga vägledning snarare än fastslagen lag, och var mest skeptisk mot resultat som bara visar tillfredsställelse, uppgiftshastighet, outputkvalitet eller omedelbar assisterad prestation.

## Vad du ska göra den här veckan

**1.** Välj den uppgift du är minst bekväm med att försvara. Skriv förmågemeningen högst upp i uppgiftsbladet.

**2.** Lägg till ett steg som körs utan AI närvarande: en femminuters tillämpning i klassrummet, en kort inspelad förklaring eller ett stycke skrivet i rummet. Ge det riktiga poäng.

**3.** Ange AI-villkoret för den uppgiften och lägg till en rad med skäl. Om uppgiften blandar steg, säg vilka steg som är vilka.

**4.** Skriv om en prompt du ger studenterna från ”lös det här” till ”ge mig en ledtråd och ställ en fråga till mig”, och berätta varför.

**5.** Innan terminen börjar, ta förändringen till din programansvarige och till den som godkänner anpassningar, så att det första överklagandet inte också blir det första samtalet.

## Vart du går härnäst

För versionen av dessa missförstånd uppdelad per intressent, se [[addressing-common-misconceptions-ai-education|att ta itu med vanliga missuppfattningar om AI i utbildning]]. För de designkrav som likvärdighets- och människoomdömesrönen antyder, se [[equity-ethics-pedagogical-safety-research|likvärdighet, etik och pedagogisk säkerhet i forskningen]]. [[redesign-assessment-ai-era|Att göra om bedömningen i AI-eran]] tar bedömningshalvan längre, och [[does-ai-help-students-learn|Hjälper AI studenter att lära sig?]] är den evidensöversikt som ligger bakom påståendena på den här sidan. Om du väljer mellan omdesign och kontroll, är [[reduce-ai-cheating|Att minska AI-fusk]] och [[course-ai-policy|AI-policy för kursen]] följedsidorna.
