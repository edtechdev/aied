---
title: "OnMicro.AI"
created: "2026-09-23T17:45:00-04:00"
type: resource
summary: "En kodeløs bygger som lar undervisere lage fokuserte AI-apper, publisere dem via lenke, bygge dem inn i et LMS gjennom LTI og se hvordan studentene bruker dem."
url: https://onmicro.ai/
source_code: https://github.com/onmicroai/micro_ai
author: "The OnMicro.AI project"
resource_type: [software, collection of tools]
access: [freemium]
license: "AGPL-3.0"
last_verified: "2026-09-23"
foundations: [ai-literacy, ai-education]
pedagogy: [scaffolding, active-learning]
technology: [open-source, edtech-platform]
audience: [instructors, instructional designers, administrators]
level: [higher ed]
confidence: high
connected_resources: [vibes-diy]
translation_of: resources/onmicro-ai
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**OnMicro.AI** er en kodeløs bygger for utdanning som lager smale, formålsbygde AI-apper snarere enn åpen samtale. En underviser utformer en strukturert arbeidsflyt, styrer hva appen tar imot og returnerer, publiserer den som en lenke studentene kan åpne uten kontoer eller lisenser, og ser deretter samlet bruk, kostnad, tilfredshet og nøyaktighet for selve appen.

## Hva du kan gjøre med den

Apper kan bygges inn i Canvas, Moodle, Blackboard eller en hvilken som helst [[edtech-platform|LTI-kompatibel plattform]], der karakterer og tilgang kan synkroniseres; de publiserte eksemplene omfatter en [[simulation|simulering]] av pasientkommunikasjon, en app for tilbakemelding på casearbeid som scorer forståelse før studenten går videre, og en kort språkøvingsutfordring. Bruksanalyse er grunnen prosjektet oppgir for å foretrekke apper framfor egenbygde [[conversational-ai|chatboter]]: en utformet flyt kan observeres og revideres, mens en åpen samtale ikke kan. Modeller fra de store leverandørene kan velges, og plattformen sporer hva hver app koster å kjøre.

## Hvem den er for

Den passer for undervisere og læringsdesignere som vil ha avgrensede, repeterbare interaksjoner, og for administratorer som trenger en støttet distribusjonsvei. Det er en hostet kommersiell tjeneste som dette repoet dokumenterer: kildekoden er åpen, og plattformen selges også som abonnement.

## Merknader og forbehold

Gratisnivået er begrenset til 10 000 AI-kreditter og tre apper; ubegrensede apper og avanserte modeller starter på Pro-nivået, og LTI-integrasjon, enkel pålogging og avansert analyse er listet på Enterprise-nivået, så funksjonene en institusjon trenger mest, er de som koster. Repoet er lisensiert **AGPL-3.0** ifølge `LICENSE`-filen, noe som betyr noe for alle som vil selvhoste eller endre det, og README-en sier fortsatt LGPL fra før endringen, så les lisensfilen snarere enn README-en. Institusjoner bør også bekrefte egne vilkår for databehandling før de ruter studentarbeid gjennom en hostet tredjepartstjeneste.

## Tilknyttede begreper

[[teacher-ai-competency]], [[learning-design]], [[open-source]], [[intelligent-tutoring]], [[scaffolding]], [[ai-literacy]], [[edtech-platform]]
