---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "En nettapplikasjon for å bygge trinnvise AI-oppgaver der underviseren setter modellens rolle og sperrene for studentbruk, og studentidentiteten holdes utenfor modellens kontekst."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

En builder for AI-integrerte oppgaver, bygget av Joseph Slade ved Oregon State University og drevet av AI Education Labs, Inc. Premisset er at alternativet til en chatbot der alt er lov ikke er forbud, men struktur: underviseren definerer trinnene studenten går gjennom, bestemmer hvilken rolle modellen spiller i hvert trinn, og setter hvor langt studenten kan lene seg på den. Oppgaven publiseres deretter som en deltakelseslenke i stedet for å distribueres som et promptdokument.

## Hva du kan gjøre med den

- **Sett modellens rolle per oppgave.** Builderen tilbyr forhåndsinnstillinger som tutor, sokratisk spørsmålsstiller, feedbackgiver og forskningsassistent, pluss en egendefinert prompt, slik at assistenten oppfører seg slik oppgaven krever.
- **Sett sperrer mellom trinn.** Et trinn kan kreve at studenten forklarer resonneringen sin før studenten går videre, og AI-hjelp kan begrenses per trinn — grensesnittet viser et gjenstående antall i stedet for ubegrenset tilgang.
- **Velg arbeidsflaten.** Studenter skriver på en dokumentside med kommentarer i margen, med chat- og notatbokoppsett tilgjengelig der de passer oppgaven bedre enn en side.
- **Publiser og følg resonneringen, ikke bare resultatet.** En deltakelseslenke melder studenter på, fremdrift lagres underveis, og underviseren kan lese hver students transkripsjon og eksportere den som CSV eller Markdown.
- **Lag utkast med AI, og finpuss deretter.** Oppsettet kan starte fra noen få spørsmål, en opplastet eksisterende oppgave eller en tidligere oppgave, med en assistent på undervisersiden som fyller ut et første utkast.

De publiserte eksemplene antyder det tiltenkte spennet: en fysikkoppgave om bevis og vitnesbyrd, en biologiøvelse som diagnostiserer resonneringsfeilen i forklaringen til en AI-intern, og en psykologioppgave som sjekker om en nyhetssak beskriver designet til en studie.

## Hvem den er for

Undervisere i høyere utdanning som vil at [[learning-design|læringsdesign]] skal bære AI-policyen — det vil si, som heller vil begrense hvordan en modell kan brukes inne i en oppgave enn å kontrollere om den ble brukt. Sperrene og rolleinnstillingene er et uttrykk for [[guardrails|sikkerhetsmekanismer]] på designstadiet, og appen er rettet mot kursarbeid snarere enn institusjonell chat-implementering.

## Merknader og forbehold

- **Pilotfase.** Vilkårene sier at tjenesten for tiden tilbys uten kostnad for piloter, og at betalte planer kan innføres med varsel, og at funksjoner kan endres eller trekkes tilbake. Det finnes ingen offentlig prisside; du når prisene først etter innlogging.
- **Personvernpåstanden er arkitektonisk, og verdt å lese nøye.** Hver student får en tilfeldig sesjonsidentifikator per oppgave, koblingen fra studentkonto til sesjon blir værende på Repertoires server, og modellen mottar den anonyme sesjonen, oppgavekonteksten og studentens skriving. Forbeholdet ligger i policyen selv: tekst studenten skriver som identifiserer vedkommende, sendes som all annen tekst, og underviseren i kurset kan lese transkripsjonene.
- **Tredjepartsinferens.** Svar genereres gjennom Anthropics Claude-API med OpenAIs API som reserve, under kommersielle vilkår som policyen sier utelukker trening på API-input og -output per September 2026. En institusjon bør bekrefte dette gjennom sin egen avtale snarere enn gjennom en nettside.
- **Den er ikke en karaktergiver.** Både policyen og vilkårene beskriver assistentens vurderinger, som «mål nådd», som hjelpemidler for underviseren; karakterer og akademiske beslutninger blir hos underviseren og institusjonen, og beslutninger om [[ai-use-disclosure|deklarasjon av AI-bruk]] overfor studentene overlates til underviseren.
- **USA-hostet.** Data ligger i Google Cloud Firestore med Vercel-hosting, og policyen adresserer FERPA-forpliktelser der tjenesten håndterer utdanningsregistre; brukere utenfor USA får beskjed om at dataene deres behandles der.
