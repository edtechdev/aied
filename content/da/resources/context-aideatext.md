---
title: "conText (AIdeaText)"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: resource
summary: "En gratis browsertutor, der læser et foto af en notesbog, en PDF eller en tekst og derefter taler den studerende igennem det sokratisk på engelsk eller spansk, mens den tegner en levende graf over de idéer, de forbinder, mens de taler."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

conText er den reneste lille demonstration af en retning, som [[intelligent-tutoring|AI-tutoring]] mest taler om og sjældent implementerer: modellen besvarer ikke den studerendes spørgsmål, den stiller det næste, og den studerendes idéer tegnes som en graf, mens de taler. Upload et foto af en notesbogsside, en PDF eller en tekst, og værktøjet siger først, hvad det har forstået, og begynder derefter en talt [[socratic-method|sokratisk]] dialog. Hver idé, den studerende nævner, vises som en node i en levende [[knowledge-graph|vidensgraf]]; kanter vises, efterhånden som samtalen forbinder dem, og panelet rapporterer, hvor mange idéer der stadig er uforbundne.

## Hvad du kan gøre med det

Løkken er med vilje kort. Materiale kommer ind (op til 10 MB, otte PDF-sider eller 15.000 tegn tekst), tutoren læser det tilbage, og samtalen foregår med stemme — siden siger, at tutoren ikke giver karakter og ikke skriver for den studerende. Grafen er det artefakt, der gør sessionen værdifuld bagefter: den viser, hvilke idéer den studerende faktisk satte i relation, og hvilke der forblev løse, hvilket er en langt mere specifik ting at gennemgå end en chattransskription. Sessionen kan eksporteres som en graf-XML-fil og uploades igen en anden dag for at fortsætte, og sletteknappen sletter den med det samme; ellers kasserer serveren den efter en time.

Den kombination — en tutor, der tilbageholder svaret, plus en visuel registrering af ræsonnementet — ligger lige inden for det, [[scaffolding|støttestrukturer]] og [[metacognition|metakognitiv]] refleksion forsøger at opnå, og den giver en lærer noget konkret at spørge om i stedet for et færdigt essay eller et korrekt tal. Sidens egen ramme er, at et korrekt resultat ikke længere beviser forståelse, når generativ AI kan producere det, så processen skal være synlig.

## Hvem den er til

Studerende, der arbejder sig gennem en læsning eller et opgavesæt og vil udspørges i stedet for at få svaret, lærere, der vil have et lavrisikotjek af, om en studerende kan forbinde idéer, og fakultetsudviklere, der leder efter et konkret eksempel på procesbevis. Lærere har en læseplansaligneret guide på engelsk, spansk, portugisisk og fransk; selve værktøjet kører på engelsk og spansk, og gennemgangsvideoen er på spansk.

## Noter og forbehold

Der er ikke offentliggjort nogen pris eller konto til det værktøj, de studerende bruger, mens institutionel installation — cloud, on-premises eller hybrid — tilbydes via et skræddersyet tilbud og et møde; tag »gratis« som den offentlige demos tilstand i november 2026, ikke som en garanti. Tekst og billeder sendes til en hostet tjeneste drevet af Claude, og siden fortæller selv brugerne at fjerne navne, beløb, adresser og firmanavne før upload, hvilket flytter byrden med deidentificering til den, der uploader, snarere end til platformen. Sessioner sletter sig selv efter en time, medmindre de eksporteres. Virksomheden bag markedsfører også en bredere platform til vurdering af ræsonnementsgrafer til institutioner, og dens påstande om at skelne deduktive, induktive, abduktive og analoge grafer kommer fra fire referencetekster — siden kalder det en demonstration, hvor validering i stor skala stadig mangler.

## Relaterede begreper

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
