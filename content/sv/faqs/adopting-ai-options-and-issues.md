---
title: "Vilka alternativ och frågor bör man överväga när man inför AI-verktyg?"
created: "2026-11-12T11:22:00-05:00"
updated: "2026-11-14T04:15:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-14T04:15:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

En prefekt har tre offerter på en plattform för [[intelligent-tutoring|AI-handledning]] och deadline på fredag. En [[teacher-role|lärare]] vill använda ett gratisverktyg som halva kollegiet redan använder. En IT-chef får frågan om institutionen borde driva en egen modell och kan inte säga vad det skulle kosta.

Det är samma fråga på tre nivåer. Alternativen är färre än en leverantörslista antyder, och frågorna håller längre än någon produkt.

Valet bör matcha det beslut som ligger framför dig. En enskild person beslutar vad som ska läggas in i ett verktyg. En institution beslutar vem som får använda vilken modell, på vilka data, till vilken kostnad, och vem som svarar när något går fel. De flesta dåliga införandebeslut kommer av att man besvarar den institutionella frågan med ett individuellt verktyg.

## Den korta versionen

Fem regler täcker det mesta.

1. Bestäm datagränsen först, för allt annat går att omförhandla och det går inte.
2. Välj den minsta form som passar: gratis eller utkontrakterade verktyg för en pilot, en plattform du driftar själv när du behöver datakontroll utan GPU:er, en gateway när du behöver kvoter och routning, och egen inferens bara när de tre andra inte räcker.
3. Jämför pris per plats och förbrukningsbaserat pris mot dina egna siffror, eftersom merparten av användningen oftast kommer från några få tunga användare.
4. Gör den godkända vägen snabbare än den icke godkända, eftersom EDUCAUSE fann att 94 % av personal och lärare använder AI i arbetet, 54 % känner till policyn och 56 % använder verktyg som institutionen inte tillhandahåller.
5. Bestäm sedan i förväg vilka bevis som skulle få dig att stoppa, för införande utan ett utträdestest blir permanent som standard.

## På individnivå

En lärare eller student fattar ett databeslut före ett undervisningsbeslut. Studenters namn, IEP-uppgifter, disciplinära anteckningar och opublicerad forskning skapar ansvaret, så avidentifiera först och kontrollera om verktyget fortfarande gör jobbet. Läs sedan villkoren: lagring, träning på dina indata och underleverantörer står oftast i ett dokument som ingen öppnar, och om svaret inte går att hitta på fem minuter ska det betraktas som okänt.

Vet vad verktyget är bra på. Genererad text är starkast på att skriva utkast, omstrukturera och sammanfatta, och svagast på aritmetik, källhänvisningar och allt som kräver aktuella fakta. Vet också vad det kostar dig. En gratisnivå är gratis eftersom användningen är produkten eller eftersom nivån kommer att ändras, och båda är skäl att ha en utväg i åtanke.

Två frågor återstår. Vilka fler berörs, eftersom ett verktyg som förändrar en kurs är ett beslut för studenterna på den. Och om det är tillåtet: läs policyn en gång om det finns en, och om det inte finns någon tyder evidensen kring [[shadow-ai]] på att du redan skapar policy som standard.

Den raka tumregeln: använd det godkända verktyget när det är inom räckhåll, och när det inte är det, skriv ner vad du gjorde och varför. Det är den anteckningen som skyddar dig om bedömningen ifrågasätts senare.

## På institutionsnivå

En institution köper en tjänst, ett dataflöde, en supportförpliktelse och ett politiskt åtagande i ett och samma köp. Sex former utgör den verkliga menyn, och de flesta institutioner befinner sig i två eller tre av dem utan att veta det.

Den enklaste starten är ett gratis utkontrakterat verktyg. AI Tutor Pro från Contact North kräver inget konto, och Playlab låter lärare bygga appar grundade i sin egen [[curriculum-design|läroplan]] medan leverantören driftar modellerna. Båda duger för en pilot och är dåliga som permanent lösning: ingen granskningslogg, ingen kvotkontroll och villkor som kan ändras.

Att köpa platser i en kommersiell tenant, vare sig [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot eller Google Gemini for Education, ger snabb upphandling, SSO och en administratörskonsol, och lämnar modellval och lagring till leverantören.

En plattform som du driftar själv håller data närmare. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) distribueras till ditt eget AWS-konto, och Vanderbilts pilot rapporterade cirka \$3 per användare och månad vid 1 300 användare, varav hälften under \$1 i tokens. Det köper datakontroll utan GPU:er.

En gateway över blandade leverantörer sätter en enda entré framför flera. Den bär kvoter, SSO, loggning och regional routning; Fontys drev en för 300 användare under ett månadstak på \$500 som aldrig överskreds, och [MindRouter](/aied/resources/mindrouter/) tillför rollviktad schemaläggning och energimätning.

Egen inferens är den dyraste formen och den mest oberoende. Purdues två tjänster nådde över 1000 användare på 10+ [[open-source]]-modeller för ungefär \$100 000 i hårdvara, före bemanning. Det svarar en tillsynsmyndighet utan att fråga en leverantör om lov.

Den sista formen är AI inbyggt i verktyg du redan kör: en Moodle-frågetyp, en diskussionsplattforms AI-partner, ett verktyg för uppsatsåterkoppling. Låg insats och förändring kurs för kurs, med lite lärande i centrum.

## Frågorna som inte försvinner

[[privacy|Dataskydd]] kommer först. Det som spelar roll är vilken post som nu finns och inte fanns tidigare, var den ligger och vem som kan hämta den. Ett verktyg som tar emot en klasslista har skapat en institutionell post oavsett vad avtalet säger.

Identitet och åtkomst kommer sedan. Allt som används i skala behöver SSO, rollbaserad åtkomst och avslut, och ett verktyg som inte kan avetablera en anställd som slutar lämnar ett kvarstående konto med dina data i.

Kostnader beror på hur priset räknas. Pris per plats belönar antal personer och förbrukningsbaserat pris belönar användning. Eftersom en liten andel av användarna oftast genererar merparten av tokens ser pris per plats billigt ut tills de tunga användarna går någon annanstans.

Mätning är oftast den saknade pusselbiten. EDUCAUSE fann att 92 % hade en arbetsrelaterad AI-strategi och 13 % mätte avkastningen på investeringen. Om du inte kan säga vad verktyget ersatte kan du inte försvara förnyelsen.

[[equity-in-ai-education|Rättvisa]] och tillgänglighet hör hemma i upphandlingen snarare än i en senare åtgärd. Ett verktyg som kräver snabb uppkoppling, en betald nivå eller engelsk flyt sprider sin nytta ojämnt.

[[academic-integrity|Akademisk integritet]] förändrar vad bedömningen mäter. När ett verktyg kan slutföra uppgiften är det uppgiften som behöver revideras.

Bemanning och leverantörsberoende spelar lika stor roll som priset. Varje form ovan utom den gratis behöver en ägare, och det vanliga misslyckandet är att köpa den fjärde eller femte formen och bemanna den med den som redan var upptagen. Fråga vad som händer vid förnyelse, vid en prisändring och vid en modellavveckling; gateway-formerna finns för att svaret ska bli en ändrad routning i stället för en migrering.

## Hur ett bra första år ser ut

Välj två eller tre mått innan något lanseras: vem som använde det, till vad, vad det kostade per aktiv användare och vad som förändrades i arbetet. En pilot som inte kan ta fram de siffrorna är en demo med budget.

Kontrollera randvillkoren samtidigt. Om verktyget rörde studentregister, stämde dataflödet med det du sade till integritetskontoret? Om användningen inte mättes, berodde det på att verktyget inte kunde rapportera eller på att ingen frågade?

Håll den godkända vägen kort. EDUCAUSE-siffrorna tyder på att människor går runt styrningen eftersom den godkända vägen tar längre tid än uppgiften. En gateway med ett modellkort och åtkomst samma dag är ett styrinstrument lika mycket som en IT-bekvämlighet.

## Vanliga misstag

Att köpa en plattform innan problemet har namngivits ger användningsstatistik och lite annat. Att behandla gratis som en strategi fungerar för en pilot och misslyckas som infrastruktur. En lokal modell ändrar vem som kan bli föremål för en domstolsorder; den avgör inte om promptar sparas. Att mäta nöjdhet i stället för effekt gör ”lärarna gillade det” till ett resultat det inte är. Och en policy som publiceras utan en fungerande väg beskriver preferenser snarare än regler.
