---
title: "Hvordan kan AI hjelpe med å støtte studenters lesing og leseforståelse?"
created: "2026-11-06T01:45:00-05:00"
type: faq
connected_faqs: [ai-multilingual-learners, reducing-over-reliance]
weight: 62
foundations: [ai-education]
pedagogy: [scaffolding, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
ethics: [accessibility]
audience: [instructors, curriculum designers, instructional designers]
level: [higher ed, secondary, primary education]
updated: "2026-11-08T04:27:04-05:00"
translation_of: "faqs/ai-support-reading-comprehension"
source_updated: "2026-11-06T02:10:00-05:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Hvis du underviser i et hvilket som helst fag, velger du tekster, tilpasser tekster og avgjør om en kilde er for vanskelig for studentene dine. AI kan hjelpe med hver av disse oppgavene, men vanskelighetstallene den gir deg er ikke målinger av vanskelighetsgrad — de er anslag om en gjennomsnittstekst og en gjennomsnittsleser, og leserne du faktisk underviser kan være langt fra gjennomsnittet. Denne FAQ-en forteller deg hvor verktøyene virkelig hjelper, hvor de svikter, og hva du kan gjøre med det.

## Hva AI virkelig kan gjøre

**Finne og tilpasse tekster i stor skala.** AI er sterk på å lokalisere kilder, forenkle ordforråd, generere ordlister og gjøre et tekstutdrag om til en [[study-with-ai|studieveiledning eller oppsummering]]. Bruk det til de mekaniske delene av leseforberedelsen — skanne, nivåplassere, trekke ut nøkkelbegreper — og behold den menneskelige kontrollen på det som betyr noe.

**Modeller leseren i stedet for teksten.** Fordi leservariabler bærer mye av signalet i hvor vanskelig en tekst føles, predikerer verktøy som profilerer leseren opplevd vanskelighetsgrad bedre enn noen formel. I den største studien i kunnskapsbasen vurderte 193 tyske videregåendeelever 3 954 setninger, og profilbaserte modeller (beste ensemble-RMSE 0,822 mot en gjennomsnittsbaseline på 1,070) slo tekstenes Flesch-skårer, som vurderte samme materiale langt vanskeligere enn elevene opplevde det — 72,8 % av annotasjonene var lette eller svært lette ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck og Conrad, 2025]]). Den praktiske versjonen: noen få studenters vurderinger av et tekstutdrag slår etiketten fra enhver formel.

## Hvor AI kommer til kort

**Vanskelighetsetiketter er ikke målinger.** En etikett som «middels» eller en Flesch-skår beskriver tekstens overflate, ikke studentenes opplevelse. Leserkjennetegn — språk som snakkes hjemme, selvvurdert ferdighet, til og med kjønn — bar mer signal enn tekststatistikk i studien ovenfor, og samsvar mellom annotatører var lavt (Krippendorffs alfa = 0,23) nettopp fordi opplevd vanskelighetsgrad varierer mellom lesere. Behandle formler og etiketter som hypoteser, og kalibrer dem mot studentene som må lese teksten.

**Å be en AI om å stå inn for studentene dine virker heller ikke.** I samme studie kunne rollespill-promptede ChatGPT og Claude ikke gjenskape studentenes opplevelse av vanskelighetsgrad, selv med merkede eksempler — en språkmodell kan ikke [[simulating-students|simulere en leser]] godt nok til å vurdere en tekst for deg ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck og Conrad, 2025]]).

**AI-skrevet tekst leses annerledes enn menneskelig prosa.** På tvers av 14 modeller bruker AI-språk for mange sjeldne lavfrekvente ord og stablede substantiver, dropper valgfrie ord og har lengre dependensavstander sammenlignet med sjangerstilpasset menneskelig skriving; effektene er sterkere i samtaler med flere runder enn i essayer med én runde, noe forfatterne knytter til presset fra iterativ samtale ([[clark-ai-generated-language-readability-2026|Clark, Martin og Mahowald, 2026]]). Genererte forklaringer og generert lesemateriale bærer begge denne profilen, så en tekst skrevet av AI kan være vanskeligere å prosessere enn det målte lesenivået antyder.

**AI-oppsummeringer kan erstatte lesingen.** Et verktøy som gjør en artikkel om til en oppsummering er nyttig for triage, men hvis oppsummeringen erstatter teksten, mister studentene forståelsestreningen oppgaven fantes for å bygge — samme felle som [[reducing-over-reliance|overavhengighet]] andre steder.

## Hva du kan gjøre

**Før du gir en tekst,** skaff en uavhengig vurdering utenfor verktøyet: skum den selv, se etter AI-prosaprofilen ovenfor hvis den er generert, og — sterkeste evidens — be en eller to studenter prøve den. En 5-minutters pilot med ekte lesere scorer høyere enn noen vanskelighetsalgoritme.

**Når du tilpasser en tekst med AI,** hold tilpasningen synlig og gjennomgåelig. Original og forenklet versjon side om side lar studentene (og deg) se hva som ble endret, og gir flerspråklige elever et stillas som ikke skjuler originalen ([[ai-multilingual-learners|hvordan AI behandler flerspråklige elever]] dekker risikoene for språktilpasning).

**Når du vurderer et leseverktøy eller grensesnitt,** spør om det modellerer den enkelte leseren eller stempler ett globalt merke. For andrespråkslesere er forskjellen ofte hele historien. For forskere er det åpne problemet måling: siden [[reading-education|leseopplæring]] kartlegger fire forskningslinjer — støtte under lesing, vurdering av lesing, adaptiv tekst og målingsspørsmålet under alle tre ([[educational-measurement|måling]] er det svake leddet i kjeden) — og rapporterer evidensen som lovende men ujevn, så sterke påstander om et verktøys lesefordeler fortjener samme skepsis som enhver [[checking-whether-educational-ai-works|AI-læringspåstand]].
