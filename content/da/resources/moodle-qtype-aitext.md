---
title: "Moodle AI Text-spørgsmålstype"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: resource
summary: "En open source-Moodle-spørgsmålstype (GPL v3), der bedømmer fritekstsvar med en stor sprogmodel ud fra en prompt pr. spørgsmål og et valgfrit bedømmelsesskema, ved hjælp af OpenAI, Azure eller en selvhostet Ollama-model, og viser AI'ens feedback til en menneskelig bedømmer."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

De fleste AI-quizintegrationer sender hvert svar til et fast bedømmelseskald. Denne Moodle-spørgsmålstype gør det modsatte: underviseren skriver rubrikken. Hvert spørgsmål bærer en **prompt**, der fortæller modellen, hvordan svaret skal vurderes, og et valgfrit **bedømmelsesskema**, der beskriver, hvordan point tildeles, så et element som »skriv en sætning i datid« kan angive ti point for ingen fejl, nul for brudt grammatik og ét point fratrukket pr. stavefejl. Modellen returnerer en karakter og [[feedback|feedback]], og en underviser kan se den feedback ved siden af svaret, når der bedømmes manuelt.

## Hvad du kan gøre med det

Tilføj et AIText-spørgsmål til enhver Moodle-quiz, skriv prompten og bedømmelsesskemaet, og test prompts med en AJAX-**prompttester** i redigeringsformularen i stedet for at cykle gennem forhåndsvisningsforsøg. Bedømmelsen kører gennem to ledsagende spørgsmålsadfærd (øjeblikkelig og udskudt), som skal installeres sammen med spørgsmålstypen, hvilket holder AI-bedømmelsen isoleret fra Moodles kerneadfærd; eksisterende forsøg, der brugte den gamle `interactivecountback`-adfærd, migreres ved opgradering. Hvis modellen ikke kan nås, nedgraderes bedømmelsen i stedet for at fejle, så et forsøg ikke går tabt. Fordi spørgsmålet er en native quiztype, lander resultaterne i karakterbogen som ethvert andet element — hvilket er, hvad et kursteam har brug for, før det kan behandle [[automated-assessment|automatisk bedømmelse]] som en pilot i stedet for en demo.

Designet placerer også rubrikken der, hvor [[ai-feedback-quality|feedbackkvaliteten]] afgøres: i prompten, skrevet af underviseren, snarere end i en leverandørstandard. Det er den ærlige brug af værktøjet — kriterier, du kan inspicere og revidere — selvom det også betyder, at kvalitetsloftet er rubrikken, og en vag prompt giver vag bedømmelse. Institutioner griber efter det i de lavrisiko, hyppige tjek, som [[formative-assessment|formativ bedømmelse]] afhænger af, hvor et menneske ellers ville læse fyrre korte svar på en aften.

## Hvem den er til

Moodle-administratorer og -udviklere, der allerede driver sitet, undervisere, der vil have AI-bedømmelse uden en separat platform eller kommerciel licens, og forskere, der har brug for en kontrollerbar bedømmelsespipeline at studere. Den kræver Moodle 4.5 eller nyere og API-adgang til en model — enten OpenAI eller Azure gennem Moodles AI-subsystem eller en selvhostet Ollama-instans gennem Local AI Manager, hvilket holder studerendes tekst på lokal infrastruktur. Pluginnet vedligeholdes af Marcus Green, er på Moodle-plugin-markedet og havde 33 stjerner og 36 forks, da denne side blev verificeret.

## Noter og forbehold

Open source under GPL v3 eller nyere, men gratis betyder ikke gratis at køre: nogen betaler for model-API'et, og bedømmelsens kvalitet afhænger af modelvalg og promptdesign. Fritekstsvar forlader Moodle-serveren, når en fjernudbyder bruges, så institutionens dataaftale bestemmer, hvad der må sendes; den selvhostede Ollama-rute findes til sites, der ikke kan sende studerendes arbejde ud. Repositoriet angiver ingen offentliggjort nøjagtigheds- eller overensstemmelsesundersøgelse, så pluginnet bør ikke indføres ud fra den antagelse, at LLM-bedømmelse svarer til menneskelig bedømmelse — [[assessment-validity|validitet]] skal fastslås lokalt mod menneskelige scorer, før nogen karakter får vægt. De ledsagende adfærdsformer er en hård afhængighed: installerer man kun spørgsmålstypen, bliver spørgsmålene ubedømmelige.

## Relaterede begreper

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
