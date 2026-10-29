---
title: "Vilka kompetenser behöver universitetslärare när det gäller AI?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [faculty-development-ai, ai-save-instructor-time, top-10-findings-ai-education-instructors]
weight: 70
foundations: [ai-literacy, educational-development, teacher-role, teacher-ai-competency]
audience: [faculty developers, instructors]
level: [adult learning]
updated: "2026-10-29T17:10:58-04:00"
translation_of: faqs/faculty-ai-competencies
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

Kommittén för lärarkompetensutveckling har en enda plats i januari och prorektorn vill att den ska handla om AI. Eller så leder du det universitetspedagogiska centret, och tre institutioner har bett om ”en AI-workshop” som visar sig betyda tre olika saker. Eller så har du använt de här verktygen i ett år och vill veta vad du fortfarande missar innan du bygger om en kurs runt dem.

Summan: promptteknik är den minsta delen av detta. Universitetslärare behöver kunna bedöma vad en modell kan och inte kan, designa uppgifter och bedömningar runt det omdömet, och veta när den ska hållas helt utanför en kurs. Tilltro är en dålig proxy för allt detta, så bygg programmet runt prestation och runt discipliner i stället för runt en verktygsdemonstration.

## Kortversionen

**1.** Definiera kompetensen i fyra dimensioner, och lägg till ett undervisningslager för alla som bedömer studenter.

**2.** Bedöm med prestation i stället för med en enkät. Självskattad kompetens och visad förmåga glider isär.

**3.** Sätt disciplinerna i rummet. Ämnesexpertis överförs inte till teknikintegrering.

**4.** Lär ut teknikdomänerna explicit, för det är de som mäter lågt även hos självsäkra lärare.

**5.** Behandla ”när man inte ska använda det här” som en kompetens, och ge lärarna täckning för att avstå.

## Definiera kompetensen innan du bokar rummet

Kunskapsbasens syntes om [[ai-literacy|AI-kompetens]] identifierar fyra dimensioner, och de är en användbar agenda eftersom var och en kräver ett annat slags session:

- **Grundläggande förståelse** för AI:s förmågor och begränsningar.
- **Praktisk kompetens** i att använda AI-verktyg.
- **[[critical-thinking|Kritisk värdering]]** av träffsäkerhet, bias, lämplighet och osäkerhet.
- **[[ethics|Etisk]] och institutionell medvetenhet** som rör frågor som integritet, dataskydd, [[equity-in-ai-education|rättvisa]] och [[governance|styrning]].

För lärare behöver dessa dimensioner ett pedagogiskt lager ovanpå. Universitetslärare ska kunna avgöra vilket kognitivt arbete studenter måste behålla, välja AI-användning som tjänar lärandemålen, designa giltig bedömning i AI-eran, lära studenter att verifiera och reglera sin egen användning, känna igen [[hallucination-risk|hallucination]], överberoende och [[ai-sycophancy|inställsamhet]], och veta när [[human-in-the-loop-ai|mänskligt omdöme]] ska gå före automatisering.

De behöver också tillräcklig systemförståelse för att kunna bedöma hur arbetsflöden som stöds av [[generative-ai|generativ AI]] hänger ihop. En workshop som lär ut ett verktyg isolerat ger lärare som kan demonstrera verktyget och inte kan säga vad som går sönder när det kopplas in i ett bedömningsarbetsflöde. [[teacher-ai-competency|Lärares AI-kompetens]] och [[educational-development|Kompetensutveckling för lärare]] innehåller den längre versionen av det argumentet.

Skriv ned listan innan du planerar sessionerna. Fyra dimensioner plus ett undervisningslager räcker för att motivera fyra sessioner i stället för en, och räcker för att säga till en prefekt vilken av de fyra deras förfrågan faktiskt handlar om.

## Bedöm prestation i stället för tilltro

[[self-report-measures|Självrapporterad]] AI-kompetens kan glida betydligt från visad förmåga, vilket är den enskilt mest praktiska varningen i den här litteraturen för den som driver lärarkompetensutveckling. En enkät om tilltro i slutet av en workshop mäter hur workshopen kändes.

Forskning om lärares [[agentic-ai|multiagent]]arbetsflöden ger ett andra skäl att testa i stället för att fråga: systemtänkande, pedagogiska övertygelser och [[self-efficacy|självtillit]] samverkar i AI-integreringen, så samma session landar olika hos två lärare med samma ämnesbakgrund. Det talar för differentierat program och emot den enda standardiserade verktygsworkshop som de flesta institutioner kör.

Den billiga versionen av prestationsbedömning är en uppgift, inte ett instrument. Be varje deltagare ta med en uppgift, revidera den med modellen under sessionen och sedan försvara revideringen för en kollega: vad ändrades, vad bedömer den nu, vad kan studenten inte längre betygsättas på. Det tar tjugo minuter och säger dig mer än någon skattningsskala i slutet av dagen.

## Räkna med att svagheten är integreringen

Ny forskning om högre utbildning sätter siffror på var lärarkompetensen är stark och var den brister. [[sutedjo-faculty-genai-tpack-21-2026|En enkät med 127 universitetslärare vid ett stort amerikanskt forskningsuniversitet]] som använde instrumentet [[tpack|TPACK]]-21 fann självupplevd [[pedagogy|pedagogisk]] ämneskunskap hög (M = 4,70) och [[tpack|ämneskunskap]] nära taket (M = 5,15). De teknikintegrerade domänerna var markant lägre: teknisk pedagogisk kunskap (M = 2,62), teknisk ämneskunskap (M = 2,75) och holistisk TPACK (M = 2,55, lägst av sju).

Läs gapet rätt. Det här är människor som kan sitt ämne och kan undervisa i det, och som inte vet hur man gör en modell till en del av något av det. Ämnesexpertis förutsade inte kunskap om GenAI-integrering (korrelationer för ämneskunskap r = 0,11 till 0,15, alla icke-signifikanta), så ett program kan inte utgå från att ämnesbehärskning överförs. Det måste bygga kompetens genom medvetet, [[discipline-specific-aied|disciplinspecifikt]] arbete.

Ett fynd till formar designen. De tre teknikintegrerade domänerna korrelerade r = 0,81 till 0,91, vilket antyder att de kan fungera som en enda kapacitet för GenAI-integrering. Om det håller, lär ut det som en gemensam grund i stället för som tre separata färdigheter med tre separata sessioner.

## Designa sessioner runt en verklig kurs

Vad träning kan och inte kan syns tydligt i en [[pishtari-teacher-ai-training-learning-design-2026|studie med upprepade mätningar av 13 lärare i högre utbildning]]. Att ge lärarna en [[conversational-ai|chattbot]] förbättrade signifikant kvaliteten i deras [[learning-design|kursdesign]], med andelen som nådde två eller fler Bloom-uppgifter av högre ordning stigande från **41,7 % till 91,7 %** (p = 0,01). Upplevd kognitiv ansträngning sjönk kraftigt, median 6,33 till 3,33 (p = 0,004). Den pedagogiska [[prompt-engineering|promptträningen]] som lades ovanpå **förbättrade inte kvaliteten ytterligare** och höjde ansträngningen något.

Tre saker följer, och den tredje är den programmen hoppar över.

Tillgång ändrar [[teacher-role|lärarbeteende]] beredvilligt. Ge lärarna en kapabel modell och en verklig uppgift, och arbetet framför dem förbättras inom en session.

Djupare förmåga kräver mer än en workshop. Promptlagret lade till ansträngning och ingen mätbar kvalitet. Att lära människor skriva bättre prompts är en färdighet, och på den här evidensen är den inte begränsningen för bättre design.

Kvalitetsvinster bevisar inte att praktiken internaliserats. Tretton lärare designade om en uppgift väl med verktyget öppet. Huruvida de kunde göra det en termin senare, utan verktyget, är en annan fråga, och studien svarar inte på den. Bygg in en uppföljning i programmet i stället för att utgå från att vinsten bestod.

## Täck rollens delar utanför undervisningen

Kompetens är också en institutionell fråga, och de flesta ramverk svarar bara på en del av den. [[crompton-faculty-technology-integration-standards-2026|Designbaserad forskning med 114 deltagare vid 28 amerikanska institutioner och i 11 länder]] tog fram sex standarder för lärares teknikbruk som spänner över hela den akademiska rollen: lärare, koordinator, ledare, forskare, studerande och bidragsgivare. Författarnas skäl att bygga dem är det användbara. Befintliga ramverk ([[tpack|TPACK]], [[samr-model|SAMR]]) och lärarstandarder (ISTE, UNESCO, DigCompEdu) riktar sig till [[k-12|grund- och gymnasieskolans]] lärare eller täcker bara undervisningsdimensionen.

För en lärarkompetensutvecklare ramar det om förfrågan. En institution som ber om en AI-workshop för sina lärare frågar om en av sex roller. Samma institutions koordinatorer fattar beslut på programnivå, dess forskare skriver med de här verktygen, och dess ledare godkänner inköp. En session kan inte tjäna alla, och att låtsas annat är hur ett program slutar med högt deltagande och ingen förändring i praktiken.

## Ge utrymme för att avstå

Införande står emot en rent teknisk inramning, och motståndet är ofta ett omdöme snarare än en lucka. [[dai-genai-frenemy-teaching-autonomy-2026|En enkät med 287 lärare i 27 länder]] fann en förfinad modell som förklarade **79,8 % av variansen** i beteendeintention. Upplevd artificiell [[agency|autonomi]] påverkade intentionen bara indirekt, via användbarhet. **Riskaversion var en signifikant negativ prediktor** (−0,163), och lärarna oroade sig långt mer för studenternas risker med [[cognitive-offloading|överberoende]] och [[academic-integrity|integritet]] än för sin egen användning.

[[ai-integrated-teaching-identity-tensions|Intervjuer med två erfarna akademiker]] beskriver hur den oron känns inifrån: återkommande **identitetsspänningar** mellan pedagogik och plattform, mellan utbildare och facilitator, mellan omsorg och regelefterlevnad, navigerade genom principiell selektivitet grundad i [[pedagogy|pedagogiska]] värderingar.

Så kompetens inkluderar professionellt omdöme om när AI inte ska användas, och ett program som inte kan säga det högt kommer att läsas som en säljpitch av exakt de lärare vars omdöme du mest vill ha i rummet. Två erfarna akademiker är ett litet evidensunderlag för ett stort påstående; behandla identitetsfyndet som en beskrivning av en verklig spänning snarare än som en mätt effekt, och låt det forma tonen i sessionerna.

## Vad lärarkompetensutvecklare missförstår

En promptworkshop är ett program för AI-kompetens. Den täcker en av fyra dimensioner, och i studien med 13 lärare lade promptlagret till ansträngning utan att lägga till mätbar kvalitet.

Självsäkra lärare är kompetenta lärare. Självrapportering glider från visad förmåga, och enkäten med 127 lärare fann ämneskunskap nära taket bredvid holistisk TPACK på 2,55. Tilltro följer ämnesexpertis, vilket är det dessa lärare redan har.

Ämnesexperter kommer att lista ut integreringen själva. Ämneskunskap förutsade inte integreringskunskap i den enkäten. Korrelationen var icke-signifikant, vilket är fyndet som motiverar disciplinspecifikt program i stället för en allmän inbjudan.

Ett ramverk täcker alla. Standarden med sex roller finns för att TPACK, SAMR och de stora lärarstandarderna täcker K-12-lärare eller enbart undervisningsdimensionen.

Motstånd är en kunskapslucka att fylla. Riskaversion förutsade intentionen negativt, och identitetsarbetet beskriver lärare som resonerar utifrån pedagogiska värderingar. En del av det som ser ut som motvilja är en försvarbar ståndpunkt om studenters överberoende.

## Vad som kommer att slå tillbaka mot dig

**”Vi har inte personaltiden för prestationsbaserad utveckling.”** Bygg då inte ett program. Bygg en övning på uppgiftsnivå: ta med en uppgift, revidera den med modellen, försvara revideringen. Det är tjugominutersversionen, och den ger bevis på förmåga som en nöjdhetsenkät inte ger.

**”Våra lärare använder redan de här verktygen, så utbildningen ligger efter dem.”** Användning är inte konstruktet. Enkäten med 127 lärare beskriver människor med hög ämnes- och pedagogisk kunskap och låg teknikintegrerad kunskap, och studien med 13 lärare visar att designkvaliteten rörde sig med tillgången medan promptlagret inte lade till något. Inget av resultaten säger att lärarna framför dig har integrerat något.

**”Det här är ett IT-utbildningsproblem.”** Intensionsmodellen sätter användbarhet, inte teknisk förmåga, på vägen till införande, och riskaversion löper vid sidan av. Hindret är omdöme om studenter och om disciplinen, vilket är varför sessionerna hör till det universitetspedagogiska centret.

**”Kompetensramverk är byråkratisk överbyggnad.”** De är en karta för en plats i januari. De fyra dimensionerna säger vad du ska lämna bort, och de sex rollerna säger vilken målgrupp en förfrågan egentligen gäller.

## Vad du ska göra den här veckan

**1.** Skriv de fyra dimensionerna och undervisningslagret på en sida, och markera vilka av dem ditt nuvarande utbud täcker.

**2.** Byt ut nöjdhetsformuläret i slutet av sessionen mot en uppgift: en uppgift som reviderats och försvarats.

**3.** Be två institutioner om en verklig kurs och en verklig uppgift att arbeta med, i stället för en allmän inbjudan.

**4.** Lägg till ett segment om när AI ska hållas utanför en uppgift, och säg rakt ut att det är ett legitimt professionellt omdöme att avstå från en specifik användning.

**5.** Bestäm vilken av de sex rollerna din nästa session tjänar, och namnge målgruppen i inbjudan.

## Vart du går härnäst

Motstycket för studenter är [[incorporating-ai-literacy|Att bygga in AI-kompetens]], och [[ai-literacy-evidence|Evidensen för AI-kompetens]] täcker hur starkt det evidensunderlaget är. För den lärarvända sammanfattningen av forskningen, se [[top-10-findings-ai-education-instructors|Tio viktigaste fynd för lärare]]; [[teacher-ai-competency|Lärares AI-kompetens]] och [[educational-development|Kompetensutveckling för lärare]] bär ramverksmaterialet, och [[course-ai-policy|Kursens AI-policy]] är det dokument som det mesta av detta utvecklingsarbete till slut producerar.
