---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Et open source-forfattersystem fra Whartons Generative AI Labs, der forvandler et struktureret interview med en underviser til en kørbar, adaptiv læringssimulation med egne mentor-, øvelses- og feedbackagenter."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**Primer** er et [[open-source|open source-system]] til at bygge en undervisnings[[simulation]] ved at beskrive en lektion for en AI i stedet for at programmere den. Underviserens vurdering fastlægger, hvad simulationen underviser i: et interview trækker frem, hvad underviseren ved om lektionen og de studerende, et designdokument gør den viden mulig at gennemgå, og intet bygges, før underviseren godkender det.

## Hvad du kan gøre med det

Interviewet kører ét spørgsmål ad gangen: lektionen, de studerendes niveau og forhåndsviden, almindelige misforståelser, underviserens tilgang og hvordan succes vil blive vurderet. Undervisere kan tale eller skrive og kan uploade pensum, lektionsplaner eller rubrikker. Det, der kommer tilbage, er et designdokument, der dækker mål, scenarieforløb, figurer, indsats og adaptionslogik, som underviseren reviderer og godkender, som de ville gøre med en lektionsplan. Derefter bygger fem agenter det: Intake, Design, Casting Director, Image Generation og Experience Builder, som samler resultatet for én studerende eller en hel klasse.

Under kørsel står tre agenter over for den studerende. En mentor aktiverer forhåndsviden og bringer misforståelser frem. En øvelsesagent spiller en modpart i rollespil eller en elev i en forklaringsøvelse, hvor den studerende forklarer et begreb og reviderer forklaringen, når der stilles spørgsmål. En feedbackagent arbejder ud fra transskriptionen og drøfter konkrete øjeblikke og hvordan læringen bæres videre ud over scenariet. Hver agent har en figur i verdenen og et undervisningslag, der følger mål og indsamler evidens, og underviseren får individuelle og samlede rapporter.

## Hvem det er til

Undervisere, undervisningsdesignere og fakultetsudviklere kan beskrive en lektion i detaljer uden at ville skrive kode til den. Forskere, der studerer forfatterskab med underviseren i løkken eller [[agentic-ai|multiagent-arbejdsgange]], får et fungerende system at undersøge, og udviklere kan udvide det, fordi prompter, skabeloner, tjeklister, orkestreringsmønstre og TypeScript-kode alle er open source.

## Noter og forbehold

Forfatterne kalder Primer en eksperimentel prototype frem for et afprøvet klasseværelsesprodukt. Det er ikke blevet evalueret som en læringsintervention i klasseværelser, og ingen har gennemgået det i forhold til FERPA, COPPA, staters love om studerendes privatliv eller distrikts politik, så en institution, der bruger det med studerende, ejer den gennemgang. Softwaren er MIT-licenseret og gratis, men at køre en simulation kræver modeladgang, og det koster penge. Fordi det er modelagnostisk og kører på lokale eller open-weight-modeller, kan det udrulles, hvor privatlivsreglerne er strammere. Et white paper om arkitekturen og prompterne er linket fra projektsiden. Repositoriet havde 98 stjerner og 16 forks, da det blev tjekket i november 2026.

## Relaterede begreper

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
