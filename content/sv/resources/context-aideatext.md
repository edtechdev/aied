---
title: "conText (AIdeaText)"
created: "2026-11-12T11:28:00-05:00"
updated: "2026-11-12T12:11:00-05:00"
type: resource
summary: "En gratis webbhandledare som läser ett foto av ett anteckningsblock, en PDF eller en text och sedan samtalar eleven igenom det sokratiskt på engelska eller spanska medan den ritar en levande graf över idéerna eleven kopplar samman när de talar."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

conText är den renaste lilla demonstrationen av en riktning som [[intelligent-tutoring|AI-handledning]] mest talar om och sällan implementerar: modellen svarar inte på elevens fråga, den ställer nästa, och elevens idéer ritas som en graf medan de talar. Ladda upp ett foto av en anteckningssida, en PDF eller en text, och verktyget säger först vad det förstod och börjar sedan en talad [[socratic-method|sokratisk]] dialog. Varje idé eleven nämner visas som en nod i en levande [[knowledge-graph|kunskapsgraf]]; kanter uppstår när samtalet förbinder dem, och panelen rapporterar hur många idéer som förblir okopplade.

## Vad du kan göra med den

Loopen är medvetet kort. Material går in (upp till 10 MB, åtta PDF-sidor eller 15 000 tecken text), handledaren läser tillbaka det, och samtalet sker med röst – sajten säger att handledaren inte betygsätter och inte skriver åt eleven. Grafen är artefakten som gör sessionen värd något efteråt: den visar vilka idéer eleven faktiskt satte i relation och vilka som förblev lösa, vilket är en långt mer specifik sak att granska än en chattutskrift. Sessionen kan exporteras som en graf-XML-fil och laddas upp igen en annan dag för att fortsätta, och raderaknappen tar bort den omedelbart; annars släpper servern den efter en timme.

Den kombinationen – en handledare som håller tillbaka svaret plus ett visuellt spår av resonemanget – ligger rakt inom det som [[scaffolding|stöttning]] och [[metacognition|metakognitiv]] reflektion försöker uppnå, och den ger en lärare något konkret att fråga om i stället för en färdig uppsats eller ett korrekt tal. Sajtens egen inramning är att ett korrekt resultat inte längre bevisar förståelse när generativ AI kan producera det, så processen måste vara synlig.

## Vem den är för

Studenter som arbetar sig igenom en text eller en problemuppsättning och vill bli ifrågasatta i stället för att få svar åt sig, lärare som vill ha en kontroll med låg risk av om en student kan koppla samman idéer, och fakultetsutvecklare som söker ett konkret exempel på processbevis. Lärare har en läroplansanpassad guide på engelska, spanska, portugisiska och franska; själva verktyget körs på engelska och spanska, och genomgångsvideon är på spanska.

## Noteringar och förbehåll

Inget pris eller konto publiceras för det elevvända verktyget, medan institutionell driftsättning – moln, lokalt eller hybrid – erbjuds via ett skräddarsytt förslag och ett möte; betrakta ”gratis” som läget för den publika demon i november 2026, inte som en garanti. Text och bilder går till en hostad tjänst som drivs av Claude, och sajten säger själv till användare att ta bort namn, belopp, adresser och företagsnamn före uppladdning, vilket flyttar avidentifieringsbördan till den som laddar upp i stället för till plattformen. Sessioner raderar sig själva efter en timme om de inte exporteras. Det bakomliggande företaget marknadsför också en bredare bedömningsplattform för resonemangsgrafer till institutioner, och dess påståenden om att skilja deduktiva, induktiva, abduktiva och analogiska grafer kommer från fyra referenstexter – sajten kallar det en demonstration, med validering i skala som ännu återstår.

## Anslutna begrepp

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
