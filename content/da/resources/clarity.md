---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "En open source-agentfærdighed og en privat browsereditor, der gør atten regler for klarere skrivning til tilstandene kladde, omskrivning og gennemlæsning for prosa."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**Clarity** parrer en agentfærdighed med en browsereditor, begge bygget op omkring atten regler for skrivning, der »gør sig fortjent til sin læser«. Færdigheden installeres i kodeagenter som Claude Code og Codex med `npx skills add addyosmani/clarity` og arbejder derefter i tre tilstande: gennemlæsningstilstand kritiserer en kladde og lader filen være urørt, omskrivningstilstand redigerer en kladde på stedet, og interviewtilstand stiller skribenten spørgsmål først og skriver med ud fra svarene. Den [[feedback]], en skribent får, sigter mod indhold før stil. Reglerne spørger, hvem teksten er for, og hvad de allerede ved, presser på for påstande frem for emner og det konkrete frem for abstraktioner og behandler fyld som et problem med ikke at vide, hvad teksten er til, snarere end et ordforrådsproblem.

Browsereditoren kører lokalt i siden og uploader ikke en kladde. Den rapporterer kendetegnene ved maskinskrevet prosa, læsbarhed og huller i indholdet, hvilket gør den brugbar til at gennemlæse tekst, som en [[generative-ai|generativ AI]] har produceret, før den når en læser. Projektet siger udtrykkeligt, at målet er skrivning, der forbliver genkendeligt forfatterens egen, snarere end prosa konstrueret til at bestå [[ai-detection|AI-detektion]] — en forskel undervisere vil genkende, når de fastlægger en politik for AI-assisteret [[writing-education|skrivning]].

## Det skal du vide, før du tager det i brug

Repositoriet offentliggør en evalueringsprotokol, før-og-efter-eksempler i `samples/` og referencefiler bag færdigheden, så en bedømmer kan undersøge, hvordan reglerne opfører sig, i stedet for at stole på en påstand; siden her gengiver ikke noget målt resultat. Forfatteren er Addy Osmani, licensen er MIT, og arbejdet er uafhængigt snarere end et produkt af en institution. Det er ungt og aktivt: oprettet i august 2026, 54 commits, tre udgivelser med den seneste som version 0.2.1 i september og omkring 250 stjerner, da det blev tjekket i september 2026. Tre bidragydere har fået ændringer igennem. Færdighedsinstruktioner indlæses i en agent, læseren allerede kører, så de sædvanlige forbehold om [[prompt-engineering|prompt engineering]] gælder: kvaliteten af kritikken afhænger af den kladde, den får.

## Relaterede begreper
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
