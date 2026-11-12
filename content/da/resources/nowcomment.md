---
title: "NowComment"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: resource
summary: "En gratis kontobaseret annotationsplatform, hvor trådet diskussion knytter sig til bestemte sætninger, billedområder og videotidsstempler, og hvor OpenAI-baserede »AI Thinking Partners« kan skrive et udkast til svar på en valgt passage, som den studerende redigerer, før det postes."
url: https://nowcomment.com/
author: "Paul Allison"
author_url: https://youtube.com/@paulallison
resource_type: [software, collection of activities]
access: [free with account]
last_verified: "2026-11-12"
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [collaborative-learning, student-ai-interaction]
assessment: [peer-assessment, ai-feedback-quality, formative-assessment]
audience: [instructors, learners, faculty developers]
level: [k 12, higher ed]
translation_of: resources/nowcomment
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

NowComment gør en tekst, et billede eller en video til en diskussionsflade: kommentarer er trådet mod den præcise sætning, det afsnit, det billedområde eller det tidsstempel, de svarer på, så en klassekonversation forbliver forankret i evidens i stedet for at drive ud i et kommentarfeed. Det, der adskiller den fra et almindeligt annotationsværktøj, er det AI-lag, vedligeholderen har bygget ind i samme flade — en [OpenAI-baseret](https://nowcomment.com/) »AI Thinking Partner« kan spørges om en passage, læseren har valgt, og resultatet kommer som et redigerbart udkast i stedet for som svaret.

## Hvad du kan gøre med det

Upload et dokument, inviter læsere, og enhver valgt passage kan bære flere samtaler, vist i en sidekolonne eller inline. Oven på det er AI-funktionerne grunden til at se på den nu. **Ask AI** på en dobbeltklikket sætning eller et afsnit åbner en parnervælger: læseren vælger en *GPT Thinking Partner*, skriver et spørgsmål, tilføjer en valgfri note om læseren og kan trykke **Resubmit** igen og igen, indtil outputtet er nyttigt. Svaret redigeres derefter på stedet, før det postes, hvilket gør den studerende til medforfatter af AI-teksten i stedet for dens videresender. Et katalog over gennemgåede partnere står ved siden af brugerbyggede, og sidens hjælpematerialer indeholder [[prompt-engineering|prompt]]guider, der holder en assistent til at bede læseren planlægge en revision i stedet for at producere en. Et ledsagende *GPT Dialogue Notebook*-mønster samler ugentlige skriftlige logs plus de læsninger, billeder og videoer, de knytter sig til, med [[privacy|privatliv]] sat pr. dokument, så AI-dialogen akkumuleres gennem et semester i stedet for at nulstilles hver session. Indbygget analyse tæller kommentarer og besøg pr. dokument og eksporterer til CSV.

Selve annotationsløkken er et [[collaborative-learning|kollaborativt lærings]]design i den ældre betydning: læsere svarer på den samme evidens, og tråden registrerer, hvem der sagde hvad om hvilken sætning. Fordi svar kan være fra peers eller AI, fungerer den også som en lavrisikoflade for [[peer-assessment|peer-bedømmelse]], og partnerprompterne kan rettes mod kvaliteterne i [[ai-feedback-quality|nyttig AI-feedback]] i stedet for mod svar.

## Hvem den er til

Lærere, der kører close reading, dokumentstudier eller medieanalyse i K-12 eller videregående uddannelse, og fakultetsudviklere, der vil have studerende til at forhandle en tekst med en assistent i det åbne i stedet for i et privat chatvindue. Vedligeholderen, Paul Allison, optager regelmæssige gennemgange og klasseværelseseksempler på [sin YouTube-kanal](https://youtube.com/@paulallison), herunder en serie om AI thinking partners i skriveklasser, hvilket er den praktiske måde at se partnerarbejdsgangen på, før man binder en klasse til den.

## Noter og forbehold

Konti er gratis, og dokumenter kan være offentlige eller deles med en inviteret gruppe. AI-partnerne kører på store OpenAI-sprogmodeller, så valgte passager og spørgsmål forlader platformens egen hosting og er underlagt udbyderens vilkår — et distrikt bør læse databehandlingsaftalen, før det bruges med mindreårige. Output er begrænset af en tokengrænse, som siden siger, den stadig udvider, partnerkataloget ligger bag et login, og AI-fladerne er en hurtigt bevægelig del af produktet: behandl enhver funktion beskrevet her som sidens tilstand i november 2026, ikke et fastlagt funktionssæt.

## Relaterede begreper

- [[collaborative-learning]]
- [[peer-assessment]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[human-ai-collaboration]]
- [[student-ai-interaction]]
