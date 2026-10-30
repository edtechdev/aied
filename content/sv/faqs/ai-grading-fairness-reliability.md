---
title: "Kan jag använda AI för att bedöma studentarbeten rättvist och tillförlitligt?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Du har en bedömningsmatris du tror på, fler inlämningar än timmar och ett verktyg som returnerar en poäng plus flera självsäkra stycken på den tid det tar att läsa en uppsats. Du testar det på arbeten du redan har betygsatt. Hälften av poängerna ser rimliga ut. En är märkligt generös, en är märkligt sträng, och du kan ännu inte avgöra om det beror på verktyget eller på uppsatsen.

Kort svar att ge en kollega: AI-bedömning förtjänar en plats som granskande assistent eller andre läsare, på uppgifter där du har kontrollerat den mot arbete du redan har rättat. Samstämmighet överförs inte mellan bedömningstyper. I en farmaceutisk tentamen med sexton studenter fann [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat m.fl. (2026)]] närmast perfekt samstämmighet för objektiva uppgiftstyper och opålitlig samstämmighet för öppna svar. Vid tre engelska universitet fann [[opraise-automated-marking-ai-assessment-2026|OpRaise-projektet]] att AI-bedömare och mänskliga bedömare kom överens om betygsbandet mellan 35 % och 65 % av fallen beroende på lärosäte, med poäng som pressades mot mitten. En ledig motivering är inte evidens för att dina kriterier har tillämpats. Huruvida resultatet är [[assessment-validity|giltigt för ditt beslut]] är en lokal fråga som du själv måste besvara, och [[human-in-the-loop-ai|en människa står kvar som ansvarig]] för allt som blir ett registrerat betyg.

## Kortversionen

**1.** Namnge rollen innan du kör något: återkopplingsassistent, andre läsare eller primär bedömare. De kräver olika mycket evidens.

**2.** Börja med den roll som har minst konsekvenser och som löser ditt faktiska problem. Om en deterministisk facitlista gör jobbet tillför en LLM risk snarare än värde.

**3.** Kalibrera mot arbete du redan har betygsatt, inklusive starka, svaga, gränsfall och ovanligt strukturerade inlämningar. Bekväma exempel bevisar ingenting.

**4.** Håll kalibreringsmängden och testmängden åtskilda, annars mäter du hur bra du har trimmat verktyget mot bekanta uppsatser.

**5.** Rapportera exakt samstämmighet, poängskillnader och biasriktning, inte en korrelation. Kontrollera godkänt/underkänt-gränserna särskilt.

**6.** Berätta för studenterna vilken roll verktyget har, vem som beslutar betyget och hur de begär omprövning.

## Bestäm vad AI:n får göra

Tre arrangemang kallas "AI-bedömning", och de bär olika förpliktelser.

En **återkopplingsassistent** skriver utkast till kommentarer eller flaggar möjliga utelämnanden som du kan acceptera, skriva om eller kasta. Risken är begränsad till kommentarens kvalitet, och du läser allt innan det når en student. En **andre läsare** föreslår kriteriepoäng eller flaggar meningsskiljaktigheter för att strukturera din egen rättning. Dess fel måste vara användbara och inte bara felaktiga: en flagga som skickar tillbaka dig till en inlämning du annars hade rättat slarvigt är värd att ha. En **primär bedömare** producerar poäng som blir registrerade betyg. Det är det arrangemang som evidensen i den här kunskapsbasen inte stöder utanför snäva, lokalt validerade fall.

Välj det lägsta steget som adresserar din faktiska begränsning. Om din rättningsbörda kommer från att kontrollera ett fast facit är vanlig deterministisk poängsättning mer transparent och granskningsbar än en språkmodell, och farmacistudien antyder att LLM:ens fördel på objektiva uppgifter delvis var en artefakt av att den fick de korrekta svaren under bedömningen. Spara modellen till arbete som kräver tolkning, och kontrollera sedan tolkningen.

[[automated-assessment|Automatiserad bedömning]] täcker den vidare maskineriet för poängsättning, moderation och generering av återkoppling. Den här sidan är omdömesfrågan under allt detta.

## Vad evidensen faktiskt visar

Samstämmigheten beror på uppgiftstypen. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat m.fl. (2026)]] bedömde en farmaceutisk tentamen i blandat format som 16 studenter hade gjort och rapporterade överensstämmelse med lärarnas bedömning mellan 0,935 och 1,000 för flervalsfrågor, "välj alla som stämmer" och lucktext. Samstämmigheten för subjektiva öppna svar var opålitlig. Två detaljer spelar större roll än rubriken. De korrekta svaren tillhandahölls under bedömningen, vilket smickrar resultaten för objektiva uppgifter, och att lägga till en bedömningsmatris förbättrade inte samstämmigheten konsekvent, vilket undergräver det vanliga antagandet att en bra matris förvandlar en LLM till en konsekvent bedömare. Sexton studenter kan inte bära ett påstående om din kurs. Variationen inom en och samma tentamen är det överförbara fyndet: ett system som klarar din flervalsdel säger ingenting om dina uppsatser.

Bandsamstämmigheten är måttlig och ojämn. [[opraise-automated-marking-ai-assessment-2026|OpRaise-rapporten]] undersökte autentiska psykologiuppsatser på grundnivå och fann samstämmighet mellan AI-bedömare och mänskliga bedömare om brittiskt betygsband på 63 % vid Cambridge, 53 % vid Nottingham och 35 % vid Manchester Metropolitan. Poängen pressades mot mitten, och svansarna bedömdes minst träffsäkert: en uppsats som en människa gav 75 fick flera poäng lägre av varje AI-system, och en uppsats som fick 50 fick flera poäng högre. Den kompressionen är felet att vaka över, eftersom den skadar precis de studenter som ligger högst och lägst i din fördelning medan mitten ser bra ut. Det här är en projektrapport och inte en peer-reviewad studie, och den är den mest användbara varningen i evidensbasen.

Dina egna poäng är en ofullkomlig referens. Lärare är oense med varandra, och din tidigare poäng på en liknande uppsats är ett omdöme, inte en grundsanning. Samstämmighet med en bedömare etablerar konsekvens med den bedömaren, vilket inte är samma sak som rättvisa. Använd en andre kvalificerad läsare för att avgöra svåra fall där insatserna motiverar det, och behandla en oenighet mellan AI:n och en mänsklig bedömare som en anledning att läsa om arbetet snarare än som en dom över vilken sida som har rätt.

Konsekvens och sunt omdöme går isär. En modell kan returnera närmast identiska poäng vid en omkörning och samtidigt tillämpa dina kriterier dåligt, eftersom repeterbarhet mäter stabilitet, inte validitet. OpRaise-svansarna visar mönstret: systemet var stadigt och hade fel om de uppsatser som betydde mest.

## Validera proceduren innan den rör ett betyg

Arbeta igenom detta på tidigare bedömda, lämpligt skyddade inlämningar som spänner över de svar du faktiskt får: starka, svaga, gränsfall, ofullständiga, ovanligt strukturerade och korrekta svar uttryckta på ett obekant sätt.

**1. Specificera kriterier och kräv evidens.** Ge uppgiften, bedömningsmatrisen, poängreglerna och exempel på hur legitima alternativa svar får poäng. Be om korta motiveringar på kriterienivå kopplade till identifierbara textställen. Kontrollera sedan de motiveringarna mot inlämningen själv.

**2. Skilj kalibrering från utvärdering.** Trimma på en mängd, testa på en annan. Utan den uppdelningen kan du inte skilja en validerad procedur från en väl anpassad.

**3. Mät de beslut som betyder något.** Registrera exakt samstämmighet, storleken och riktningen på poängskillnader och huruvida modellen systematiskt ger högre eller lägre poäng. Granska godkänt/underkänt och andra konsekvensbärande gränser för sig. En hög korrelation kan vila ovanpå en systematisk förskjutning.

**4. Testa repeterbarhet och beteende i delgrupper.** Kör om en delmängd under identiska inställningar. Leta efter fel på kriterienivå och efter att språk, formatering eller legitim stil tas för svagare förståelse. Små delgruppsantal stöder försiktighet, inte ett rättvisepåstående.

**5. Skriv eskalatorregeln.** Bestäm vilka fall som alltid får mänsklig rättning och hur oenigheter löses. Låt inte modellens angivna säkerhet avgöra; säkerhet måste valideras mot observerade fel innan den kan väga något.

**6. Skydda arbetsflödet.** Använd en godkänd miljö, minimera identifierande uppgifter och håll matris och instruktioner åtskilda från det inlämnade innehållet. Den separationen gör manipulation svårare att dölja. Den gör den inte omöjlig.

**7. Registrera vad som skulle ogiltigförklara kontrollen.** Behåll modell och version, prompt, matris och inställningar. En modelluppdatering eller en matrisrevision är en anledning att upprepa de representativa kontrollerna snarare än att anta kontinuitet.

## Synliggör arrangemanget för studenterna

Studenter har rätt att veta vilken roll verktyget har, vem som beslutar och hur de kan bestrida ett resultat. Vag information skapar misstro; konkret information skapar en fungerande relation. Ungefär så här: "Ett godkänt AI-verktyg kan skriva utkast till matriskommentarer på ditt utkast. Jag granskar varje kommentar och fastställer ditt betyg. Hör av dig om en kommentar missrepresenterar ditt arbete." Se sedan till att det stämmer.

Två felriktningar behöver separat uppmärksamhet. Överdrivna avdrag är de som studenterna rapporterar, och de dominerar överklagandena. Oförtjänta poäng är den som förblir onämnd och tyst fördärvar protokollet. Ta stickprov på båda, och räkna in dina verifieringstimmar när du bedömer om arbetsflödet sparade dig något.

## Vad som kommer att slå tillbaka mot dig

**"Människor är också partiska."** Det är de, och därför behöver jämförelsen uttalade kriterier i stället för en enskild bedömares poäng som standard. OpRaises spridning mellan lärosäten är argumentet här: om mänskliga bedömare vid tre universitet producerade så olika bandsamstämmighet med samma system, är den mänskliga referensen en del av det som måste specificeras, inte en fast måttstock.

**"Bedömningsmatrisen gör det objektivt."** En matris gör förväntningarna uttalade. Att tillämpa den är fortfarande tolkning, och farmacistudien fann att en medföljande matris inte förbättrade samstämmigheten konsekvent. Vad matrisen ger dig är en kontrollerbar standard för motiveringarna, inte en garanti för poängen.

**"Då måste jag kontrollera allt, vilket förstör poängen."** För vissa uppgifter är det rätt slutsats, och svaret är att snäva in jobbet. Att skriva utkast till kommentarer från dina egna rättningsanteckningar lämnar omdömet hos dig och tar bort skrivandet. Andreläsarflaggor på gränsfall koncentrerar din uppmärksamhet där den ändrar ett utfall.

**"Min kollega testade det och det fungerade bra."** Fråga vad de mätte. Positiva betyg samexisterar rutinmässigt med fel i den här litteraturen, och en kollega som har läst några rimliga utdata har gjort en demonstration, inte en validering. Frågan är vad deras procedur skulle göra med de uppsatser du skulle märka sist.

## Vad du ska göra den här veckan

**1.** Välj en bedömning och skriv ned den enda roll som AI:n skulle spela. Skriv ned vilken evidens som skulle låta dig flytta den ett steg upp.

**2.** Kör den på fem inlämningar du redan har betygsatt, utvalda så att de omfattar en stark, en svag, ett gränsfall och en med en ovanlig men legitim struktur.

**3.** Logga varje oenighet med arbetet och kriteriet, och namnge de fel du skulle betrakta som oacceptabla och inte bara felaktiga.

**4.** Testa om poängskillnaderna går i en konsekvent riktning, och kontrollera din godkänt/underkänt-gräns separat.

**5.** Skriv utkastet till den studentvända informationsparagrafen och vägen till omprövning, och jämför din verifieringstid med den rättningstid du undvek.

## Vart du går härnäst

[[assessment-validity|Bedömningsvaliditet]] är begreppet som avgör de här frågorna: huruvida evidensen stöder den slutledning du vill göra. [[automated-assessment]] täcker tekniken och dess uppmätta prestanda över format, och [[ai-feedback-at-scale]] hanterar det angränsande problemet med genererade kommentarer och huruvida studenter agerar på dem.

För vad ett betyg bör representera när studenter använder AI, inklusive konstruktsubstitution och autentiserad processevidens, se [[redesign-assessment-ai-era|att designa om bedömning i AI-eran]]. För huruvida detektion kan ersätta en försvarbar uppgiftsdesign, se [[should-we-use-ai-detectors|om AI-detektorer bör användas]]. För utvärderingsfrågan under allt detta, se [[checking-whether-educational-ai-works|att kontrollera om en pedagogisk AI fungerar]].
