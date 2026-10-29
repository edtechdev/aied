---
title: "Hur kan AI hjälpa mig att ge bättre återkoppling i skala?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T17:10:58-04:00"
translation_of: faqs/ai-feedback-at-scale
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

Det är vecka sex. Du har en trave utkast, en bedömningsmatris du tror på och en växande misstanke om att en tredjedel av dina kommentarer skummas och glöms. En kollega nämner att ett verktyg nu kommenterar varje utkast inom timmen. Institutionsmötet behöver ett svar: är det här en uppgradering, eller ett snabbare sätt att producera text som ingen läser?

Kort svar att ge en kollega: AI-återkoppling förtjänar sin plats genom täckning, timing och konsekvens, inom ett snävt band. Språkarbete på korrekturläsningsnivå och matrisstyrda förstakommentarer är värda att automatisera. Räckvidden är det billiga. I ett klusterrandomiserat experiment med 1 176 förstaårsstudenter slog reflekterande och hybrida designer direkt AI-kritik på fördröjd [[transfer-of-learning|transfer]] utan AI. I ett randomiserat uppsatssexperiment med 70 studenter gav bättre betygsatt AI-återkoppling inte bättre revisioner än en erfaren lärares. Vad en student gör med en kommentar avgör utfallet, och [[feedback-literacy|återkopplingskompetens]] skiljer de studenter som vinner något från dem som kopierar.

## Kortversionen

**1.** Bestäm vad som räknas som en vinst innan du piloterar något: revisionskvalitet och fördröjd prestation utan stöd, inte kommentarernas flyt.

**2.** Sortera dina egna kommentarer i språkliga rättelser och bedömningsmässiga ställningstaganden. Bara den första kategorin är en kandidat för automatisering.

**3.** Trappa källorna. Självvärdering först, kamratåterkoppling sedan, AI-kritik sist. Två källor sida vid sida ger passivt upptag.

**4.** Ge modellen din bedömningsmatris och låt den resonera steg för steg. En bar instruktion ger generisk output.

**5.** Behåll det slutliga meddelandet, tonen och allt som blir ett protokoll hos en människa.

**6.** Budgetera timmarna du kommer att lägga på borttagning och kalibrering, och jämför dem med timmarna du frigjorde.

## Bestäm vad som räknas som en vinst innan du piloterar något

Det frestande måttet är kvaliteten på det modellen skriver. Det är också måttet som vilseleder.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia m.fl. (2026)]] randomiserade 70 studenter som skrev argumenterande uppsatser på persiska i tre grupper. Chain-of-thought-promptning gav signifikant högre betygsatt återkoppling (M = 12,90) än zero-shot-promptning (M = 11,25, p = 0,01) och än en erfaren mänsklig lärare (M = 11,20, p = 0,008). Chain-of-thought-gruppen reviderade inte sina uppsatser signifikant mer än gruppen med läraråterkoppling, som uppnådde jämförbara vinster. Bättre kommentarer, samma revisioner. Om ditt framgångskriterium är kommentarkvalitet läses den studien som en vinst. Om det är vad som förändrades i uppsatsen gör den inte det.

Två andra signaler smickrar en pilot som går dåligt, så bestäm dem i förväg. Studentnöjdhet är en. I Deakins universitetsövergripande pilot som rapporteras av [[tubino-adachi-ai-automated-feedback-literacy|Tubino och Adachi (2022)]] samexisterade positiva genomsnittsbetyg med fel som studenterna flaggade, så en leendeskalenkät är inte evidens för träffsäkerhet. Användning är den andra. Deakinverktyget var frivilligt, och användningen låg i genomsnitt på omkring 13 % av grundstudenterna och 12 % av studenterna på avancerad nivå trots att nästan 4 000 studenter hade tillgång. Proaktiva, högpresterande studenter använde det mer. Det är vad du får för att göra ett verktyg tillgängligt.

Det utfallsmått som håller är revisionskvalitet plus fördröjd prestation utan AI. Flera omlämningar samma dag är ett användbart spår av huruvida en student engagerade sig alls. De är inte evidens för att något lärdes.

## Sortera dina kommentarer innan du automatiserar dem

Ta din senaste uppsättning kommentarer och dela den i två: rättelser av meningar och ställningstaganden om tänkande. Delningen säger vad du ska automatisera, och den är snävare än leverantörerna antyder.

Deakin-piloten kördes 2021 med FeedbackFruits AI-verktyg för automatiserad återkoppling i 29 kursmoment och nästan 4 000 studenter. Det arbetar på textdrag på mikronivå: meningslängd, interpunktion, grammatik, textstruktur. Det stöder korrekturläsningssteget, där läraren sätter parametrarna, studenten använder verktyget självständigt och återkopplingen kommer i tid för att vara åtgärdsbar. Arbetsdelningen är det som skalar, inte modellen.

Kommentarer på bedömningsnivå är där felfallen bor. [[learner-centered-feedback-ai|Aldino m.fl. (2026)]] samlade in problem på lärarsidan från 21 lärare i högre utbildning: inkonsekvent ton (n = 7), potentiell felinformation (n = 5) och tillitsproblem (n = 5). Deras revisionsarbete gick till att ta bort överdriven beröm och generiska förslag snarare än att lägga till innehåll. Den listan är ditt granskningsjobb, och det är där timmarna går.

## Trappa källorna i stället för att stapla dem

Det starkaste designevidensen kommer från ett fältexperiment på flera platser, klusterrandomiserat och longitudinellt: 1 176 förstaårsstudenter i 48 sektioner vid 4 universitet och 3 [[stem-education|vetenskapliga]] domäner, randomiserade på sektionsnivå till betingelserna enbart kamrater, direkt GenAI, reflekterande GenAI och hybrid ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Den reflekterande betingelsen krävde självvärdering före AI-kritik. Hybriden körde självvärdering, sedan kamratåterkoppling, sedan GenAI-kritik. Hybriden gav de största vinsterna i argumentkvalitet och den tydligaste fördelen i begreppsligt lärande. Reflekterande och hybrid gav båda starkare upptag av återkoppling och mer [[self-regulated-learning|självreglerat lärande]] än direkt GenAI, och båda överträffade den på fördröjd transfer utan AI. Direkt GenAI höjde den omedelbara argumentkvaliteten över kamratåterkoppling, vilket är den fördel den har, och den gjorde det med svagare transfer.

Mekanismen förklarar varför sekvenseringen spelar större roll än verktyget. Direkt kritik inbjuder till passivt upptag: studenten läser en dom och tillämpar den. Reflekterande och hybrida designer tvingar studenten att tolka kommentaren, jämföra den mot kriterier, bedöma dess relevans och sedan revidera. Utbildningsvärdet beror mindre på AI-tillgång än på huruvida återkopplingsmiljön bevarar [[agency|studentens agens]] och [[evaluative-judgment|bedömningsomdöme]] under revisionen.

Kamratåterkoppling förtjänar sin egen plats i sekvensen. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen och Yan (2026)]] körde två parallella engelskkurser (N = 118 förstaårsstudenter i Kina; GenAI n = 56, kamrater n = 62) genom tre självbedömningscykler under en termin. GenAI-stöttning förbättrade återkopplingskompetensen något men signifikant jämfört med mänsklig kamratgranskning (ANCOVA p = 0,049, ηp² = 0,03). GenAI-studenterna förfinade promptar iterativt och verifierade eller utmanade felaktig output. Studenterna i kamratgruppen valde källor efter social bekvämlighet och fick sitt bedömningsomdöme förvrängt av vänskapsbias. Kamratgranskning behöll ett distinkt värde för målgruppsmedvetenhet, vilket är varför författarna föreslår flerstegsdesigner med anonym kamratåterkoppling snarare än en ersättning.

Gu m.fl.:s fördel var liten, och de läste den som verklig men inte transformativ i sig. Lärarstöttning, promptriktlinjer och arbetsblad gjorde det bärande arbetet.

## Ge modellen en bedömningsmatris och låt den visa sina steg

Matrisrefererad generering är den automatiserbara delen.

Farrokhnia m.fl.:s kvalitetsvinst kom från en chain-of-thought-prompt som ledde modellen genom en steg-för-steg-utvärdering mot en argumentationsmatris, inte från en bar instruktion att ge återkoppling. Gu m.fl. gav sin GenAI-grupp ChatGPT-4o med förtränade matriser och promptriktlinjer, vilket är det som gjorde outputen kontrollerbar mot angivna kriterier. I båda fallen är prompten där dina kriterier kommer in i systemet, och resonemangsspåret är det som låter dig se om modellen tillämpade dem.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson och Yan (2025)]] gör promptkvaliteten till hela processens gångjärn. Vaga promptar ger generisk, oanvändbar output, och genererade kommentarer kan vara hallucinerade, partiska eller överlappande, vilket skjuter bedömningsomdömet tillbaka på läsaren. Kalibreringen är ännu skarpare. Hos Farrokhnia m.fl. var GenAI-återkopplingens kvalitet signifikant associerad med styrkan i en students första utkast, medan läraråterkopplingens kvalitet inte var det. Läraren kalibrerade mer konsekvent. Volym skalar. Kalibrering gör det inte.

## Behåll sista ordet och protokollet hos en människa

[[becerra-aicofe-feedback-2026|Becerra, Palma och Cobos (2026)]] beskriver AICoFE, som kör tre oberoende finjusterade modeller (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) över matrispoäng och kvalitativa observationer för att producera oberoende utkastkommentarer. Läraren sammanställer sedan det slutliga meddelandet genom att välja meningar eller stycken, med en förklaring som visar vilken modell som bidrog med vad. Modellen skriver utkastet. Läraren levererar, och det levererade undertecknas av en person som läste utkastet.

Aldino m.fl. finner samma mönster med stöd först och verifiering sedan i vanlig praktik. Maskininlärningskomponenten flaggade oftast ”Uppfyller lärandemålet” som saknat (20 av 21 lärare hade utelämnat det; 16 accepterade flaggan) och ”Elev-lärarrelation” (14 utelämnade; 12 accepterade). Lärarna avgjorde varje förslag med professionellt omdöme, vilket är poängen med att sätta dem i loopen.

Tolv av Aldino m.fl.:s 21 lärare gjorde ytterligare revisioner på meningsnivå, och det dominerande mönstret var att kalibrera tonen: skriva ned beröm (f = 11), ta bort förslag (f = 9), ta bort uppmuntran (f = 8). Revisionerna klustrade i den relationella dimensionen, särskilt Elev-lärarrelation (f = 24). De skyddade autenticitet och professionell röst, och det arbetet automatiseras inte.

## Lär studenterna att läsa kommentaren

Återkopplingskompetens är en förutsättning, och den är ojämnt fördelad.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths och Lodge (2026)]] lät 32 psykologistudenter göra en skärminspelad uppgift på 25 minuter med obegränsad tillgång till ChatGPT och sedan se inspelningen igen i en videostimulerad intervju. Återkopplingskompetens var den enda signifikanta positiva prediktorn för uppsatsbetyg (β = 0,46, p = 0,017). Frekvensen av GenAI-användning, [[trust|källans tillförlitlighet]] och [[prior-knowledge|förkunskaper]] förutsade inte prestationen, en poäng som [[feedback-futures-genai|Zhan, Wood, Carless och Yan (2026)]] också gör i sin ledare för temanumret. Färre än en tredjedel av studenterna jämförde AI-output mot en annan internetkälla. Hälften uttryckte medvetet AI-undvikande för [[academic-integrity|akademisk integritet]] eller för att de ville ha uppsatsen i egna ord. De flesta efterfrågade återkoppling på uppgiftsnivå, vilket överförs dåligt till andra uppgifter.

Extremerna syns i det par IELTS-skribenter som Zhan m.fl. beskriver. En student med låg kompetens skrev en vag prompt, fick generisk återkoppling, litade på den eller kopierade den alltför mycket och engagerade sig ytligt. En student med hög kompetens skrev en kriterierefererad prompt, följde upp, korskontrollerade källor och övervakade revisionerna. Skillnaden var undervisning och vana, inte verktygstillgång.

Säg direkt till studenterna att modellkommentarer kan vara hallucinerade, partiska eller överlappande, och att studenten äger revisionen. Ramma in outputen som ett utkast till åsikt som ska bedömas snarare än ett svar som ska kopieras. Be sedan om jämförelsen, för färre än en tredjedel av studenterna gör den spontant.

## Vad lärare missförstår om detta

Fler kommentarer betyder mer återkoppling. Kommentarer är billiga att producera och dyra att absorbera, och begränsningen sitter på studentens sida av loopen. Farrokhnia m.fl.:s högre betygsatta AI-kommentarer gav inte mer revision än lärarkommentarerna gjorde.

En bättre modell kommer att fixa den generiska outputen. Deakinverktygets misslyckanden var omfattningsmisslyckanden: textdrag på meningsnivå, ett snävt korrekturläsningsband. Zhan m.fl. lokaliserar åtgärden till prompten, matrisen eller människan, inte till en större modell. Paret IELTS-skribenter är demonstrationen; samma verktyg, olika vanor, olika resultat.

Att göra verktyget tillgängligt är interventionen. Användningen låg på omkring 13 % av grundstudenterna och 12 % av studenterna på avancerad nivå när verktyget var frivilligt. Resten av designfrågan är vad som händer för de andra 87 %.

Tidsbesparingen är automatisk. Tillfrågade om vad AI-återkopplingsverktyget gav dem nämnde 21 lärare tidsbesparing bara sällan (n = 2). De nämnde reflektion (n = 14), förbättrat språk och struktur (n = 11) och identifiering av saknade komponenter (n = 10) långt oftare. Redigering (f = 32) och borttagning (f = 27) dominerade deras revisionsarbete, med tillägg sällan (f = 8). Det som uppträder är ett utkast och en diagnostisk prompt. Det som också uppträder är gransknings-, kalibrerings- och verifieringsarbete. [[ai-save-instructor-time|Arbetsbelastningsfrågan]] är den som oftast lovas bort, och GenAI omfördelar lärararbetet snarare än tar bort det.

Nöjdhetsbetyg säger dig att kommentarerna är träffsäkra. I Deakin-piloten samexisterade positiva genomsnittsbetyg med fel som studenterna flaggade. Ta stickprov på outputen mot din egen läsning av samma utkast och logga var modellen var generisk, fel eller smickrande.

## Vad som kommer att slå tillbaka mot dig

**”AI-återkoppling är inte personlig.”** Ofta sant, och det är skälet att behålla sista ordet hos en människa. AICoFE finns för att generisk modellprosa inte är vad en student bör få: läraren väljer, redigerar och undertecknar det slutliga meddelandet. De 21 lärarna hos Aldino m.fl. skrev om tonen av samma skäl. Personaliseringen är ditt jobb i den här designen, och modellen gör förarbetet.

**”Mina studenter läser ändå inte återkoppling.”** De läser mindre än vi hoppas, och evidensen säger att åtgärden är design snarare än volym. Upptaget i Deakin-piloten låg på omkring 13 % och 12 %. Farrokhnia m.fl.:s högre betygsatta kommentarer gav ingen extra revision. Det som flyttade nålen var sekvensering som tvingar fram engagemang, självvärdering sedan kamratåterkoppling sedan AI-kritik, plus tre revisionscykler under en termin som gav mätbara skillnader i återkopplingskompetens.

**”Det här är inte vad studenterna betalar för.”** Se då till att AI:n inte blir den enda röst de hör från dig. Den försvarbara versionen ger studenterna fler återkopplingstillfällen medan du lägger dina timmar på de omdömesintensiva delarna: sista ordet, kalibreringen, kommentarerna som bär din auktoritet. Det studenterna förlorar vid slarvig driftsättning är sammanhanget mellan kriterier, kommentarer och utfall. Specificera komplementariteten genom sekvensering, jämförelse, redigering och styrning, och invändningen förlorar sin kraft. Lämna två källor sida vid sida, och den gör det inte.

**”Jag har inte tid att granska allt modellen skriver.”** Granska då inte allt. Automatisera bandet där fel är billiga att fånga, språkarbete på meningsnivå, och ta stickprov på outputen på bedömningsnivå mot utkast du redan har betygsatt. Aldino-siffrorna säger vad du ska leta efter: ton, felinformation, överdriven beröm, överlappning.

## Vad du ska göra den här veckan

**1.** Sortera din egen senaste uppsättning kommentarer i språkliga rättelser och bedömningsmässiga ställningstaganden, och räkna varje hög.

**2.** Skriv den matrisrefererade prompten steg för steg som du skulle ge en modell, och testa den mot tre utkast du redan har betygsatt.

**3.** Ta stickprov på outputen mot dina egna kommentarer och logga var modellen var generisk, fel eller smickrande.

**4.** Trappa en uppgift som självvärdering, sedan kamratåterkoppling, sedan AI-kritik, och säg till studenterna att AI:n är ett utkast till åsikt som de förväntas utmana.

**5.** Be om en jämförelse mot en andra källa eller mot kriterierna, eftersom färre än en tredjedel av studenterna gör detta spontant.

**6.** Logga hur mycket av den slutliga återkopplingen som kom från modellen och hur mycket du ändrade. AICoFEs spårning av urvalet är modellen för det protokollet.

**7.** Håll koll på expert-novis-delningen. Lärare med mer än fem års erfarenhet rapporterade fler problem med verktygets output än mindre erfarna kollegor, som värderade stöttningen. Om dina erfarna kollegor ser fler misslyckanden än du gör, är det information om din egen kalibrering.

## Vart du går härnäst

[[feedback|Återkoppling]] är paraplybegreppet för hela systemet: tillhandahållande, loop, upptag och bedömningskontext. [[ai-feedback-quality|AI-återkopplingens kvalitet]] täcker vad som gör genererade kommentarer träffsäkra, användbara, lägliga och pedagogiskt hållbara, och den här sidan är den praktiska mitten, om vilka kombinationer av dessa delar som ger bättre återkoppling i skala.

Frågor om vad ett betyg ska betyda när AI är inblandat, inklusive konstruktsubstitution, autentiserad processevidens och integritetsregler, hör till [[redesign-assessment-ai-era|att designa om bedömning i AI-eran]] och [[assessment-validity|bedömningsvaliditet]] snarare än hit. För specialfallet skrivundervisning, se [[writing-instruction-ai-best-practices|bästa praxis för skrivundervisning i en AI-kontext]].
