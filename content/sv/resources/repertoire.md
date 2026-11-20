---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "En webbapplikation för att bygga stegvisa AI-uppgifter där läraren sätter modellens roll och grindarna för studenternas användning, och studentens identitet hålls utanför modellens kontext."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---
*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Ett verktyg för AI-integrerade uppgifter, byggt av Joseph Slade vid Oregon State University och drivet av AI Education Labs, Inc. Premissen är att alternativet till en chatbot utan begränsningar inte är förbud utan struktur: läraren definierar stegen en student går igenom, bestämmer vilken roll modellen spelar i varje steg och anger hur långt studenten får luta sig mot den. Uppgiften publiceras sedan som en anslutningslänk i stället för att delas ut som ett promptdokument.

## Vad du kan göra med den

- **Sätt modellens roll per uppgift.** Verktyget erbjuder förinställningar för handledare, sokratisk frågeställare, feedbackgivare och forskningsassistent, plus en egen prompt, så att assistenten beter sig som uppgiften kräver.
- **Sätt grindar mellan stegen.** Ett steg kan kräva att studenten förklarar sitt resonemang innan hen går vidare, och AI-hjälp kan begränsas till ett antal per steg — gränssnittet visar ett återstående antal i stället för obegränsad tillgång.
- **Välj arbetsyta.** Studenterna skriver på en dokumentsida med kommentarer i marginalen, med layouter för chatt och anteckningsbok tillgängliga där de passar uppgiften bättre än en sida.
- **Publicera och följ resonemang, inte bara resultat.** En anslutningslänk skriver in studenterna, framstegen sparas löpande och läraren kan läsa varje students transkript och exportera det som CSV eller Markdown.
- **Utkasta med AI, förfina sedan.** Konfigurationen kan utgå från några frågor, en uppladdad befintlig uppgift eller en tidigare uppgift, och en assistent på lärarsidan fyller i ett första utkast.

De publicerade exemplen antyder det avsedda spannet: en fysikuppgift om bevis och vittnesmål, en biologiövning som diagnostiserar resonemangsfelet i en AI-praktikants förklaring och en psykologiuppgift som kontrollerar om en nyhetsartikel beskriver en studies design.

## Vem den är för

Lärare inom högre utbildning som vill att [[learning-design|lärandedesign]] ska bära AI-policyn — det vill säga som hellre begränsar hur en modell får användas inuti en uppgift än att kontrollera om den har använts. Grindarna och rollinställningarna är ett uttryck för [[guardrails|skyddsräcken]] redan i designskedet, och appen riktar sig mot kursarbete snarare än institutionell chattdrift.

## Anteckningar och förbehåll

- **Pilotstadium.** Villkoren anger att tjänsten för närvarande tillhandahålls kostnadsfritt för piloter, att betalda planer kan införas efter avisering och att funktioner kan ändras eller dras in. Det finns ingen offentlig prissida; du når priserna först efter inloggning.
- **Integritetsanspråket är arkitektoniskt och värt att läsa noga.** Varje student får en slumpmässig sessionsidentifierare per uppgift, mappningen från studentkonto till session stannar på Repertoires server och modellen tar emot den anonyma sessionen, uppgiftens kontext och studentens text. Förbehållet finns i policyn själv: text som studenten skriver och som identifierar hen skickas som vilken annan text som helst, och kursläraren kan läsa transkripten.
- **Tredjepartsinferens.** Svaren genereras via Anthropics Claude API med OpenAI:s API som reserv, under kommersiella villkor som policyn säger utesluter träning på API:ns in- och utdata per september 2026. En institution bör bekräfta detta via sitt eget avtal snarare än via en webbsida.
- **Det är inte en betygssättare.** Både policyn och villkoren beskriver assistentens bedömningar, som "mål uppnått", som stöd till läraren; betyg och akademiska beslut stannar hos läraren och institutionen, och beslut om [[ai-use-disclosure|redovisning av AI-användning]] för studenterna lämnas till läraren.
- **Hostad i USA.** Data lagras i Google Cloud Firestore med Vercel som hosting, och policyn behandlar FERPA-skyldigheter där tjänsten hanterar utbildningsregister; användare utanför USA informeras om att deras data behandlas där.
