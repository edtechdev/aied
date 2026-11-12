---
title: "conText (AIdeaText)"
created: "2026-11-12T11:29:00-05:00"
updated: "2026-11-12T12:12:00-05:00"
type: resource
summary: "En gratis nettveileder som leser et bilde av en notatbok, en PDF eller en tekst, og deretter snakker eleven gjennom det sokratisk på engelsk eller spansk mens den tegner en levende graf over idéene eleven kobler sammen mens de snakker."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

conText er den reneste lille demonstrasjonen av en retning [[intelligent-tutoring|AI-veiledning]] stort sett snakker om og sjelden implementerer: modellen svarer ikke på elevens spørsmål, den stiller det neste, og elevens idéer tegnes som en graf mens de snakker. Last opp et bilde av en notatbokside, en PDF eller en tekst, og verktøyet sier først hva det forsto, og starter deretter en talt [[socratic-method|sokratisk]] dialog. Hver idé eleven nevner, vises som en node i en levende [[knowledge-graph|kunnskapsgraf]]; kanter vises når samtalen kobler dem, og panelet rapporterer hvor mange idéer som forblir ukoblede.

## Hva du kan gjøre med den

Løkken er med vilje kort. Materiale går inn (opptil 10 MB, åtte PDF-sider eller 15 000 tegn tekst), veilederen leser det tilbake, og samtalen foregår med stemme – nettstedet sier at veilederen ikke vurderer og ikke skriver for eleven. Grafen er artefakten som gjør økten verdt noe etterpå: den viser hvilke idéer eleven faktisk satte i relasjon og hvilke som forble løse, noe som er en langt mer spesifikk ting å gjennomgå enn en chat-utskrift. Økten kan eksporteres som en graf-XML-fil og lastes opp igjen en annen dag for å fortsette, og sletteknappen sletter den umiddelbart; ellers slipper serveren den etter én time.

Den kombinasjonen – en veileder som holder tilbake svaret, pluss et visuelt spor av resonnementet – ligger rett innenfor det [[scaffolding|stillasbygging]] og [[metacognition|metakognitiv]] refleksjon prøver å oppnå, og den gir en lærer noe konkret å spørre om i stedet for et ferdig essay eller et riktig tall. Nettstedets egen innramming er at et riktig resultat ikke lenger beviser forståelse når generativ AI kan produsere det, så prosessen må være synlig.

## Hvem den er for

Studenter som arbeider seg gjennom en tekst eller et oppgavesett og vil bli stilt spørsmål ved i stedet for å få svar for seg, lærere som vil ha en sjekk med lav risiko på om en student kan koble idéer, og fakultetsutviklere som ser etter et konkret eksempel på prosessbevis. Lærere har en læreplanstilpasset guide på engelsk, spansk, portugisisk og fransk; selve verktøyet kjører på engelsk og spansk, og gjennomgangsvideoen er på spansk.

## Merknader og forbehold

Ingen pris eller konto publiseres for det elevrettede verktøyet, mens institusjonell distribusjon – sky, lokalt eller hybrid – tilbys via et skreddersydd forslag og et møte; behandle «gratis» som tilstanden til den offentlige demoen i november 2026, ikke en garanti. Tekst og bilder går til en hostet tjeneste drevet av Claude, og nettstedet sier selv til brukere at de skal fjerne navn, beløp, adresser og firmanavn før opplasting, noe som flytter avidentifiseringsbyrden til den som laster opp i stedet for til plattformen. Økter sletter seg selv etter én time med mindre de eksporteres. Selskapet bak markedsfører også en bredere vurderingsplattform for resonnementsgrafer til institusjoner, og påstandene om å skille deduktive, induktive, abduktive og analogiske grafer kommer fra fire referansetekster – nettstedet kaller det en demonstrasjon, med validering i skala som fortsatt gjenstår.

## Tilknyttede begreper

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
