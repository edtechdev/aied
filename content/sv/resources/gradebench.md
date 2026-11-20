---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "En offentlig topplista för frontiermodeller som bedömer verkliga handskrivna universitetssvar i STEM mot de matrispunkter som läraren valt."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

GradeBench ställer en smal och användbar fråga om [[automated-assessment|automatisk bedömning]]: givet en students handskrivna svar, lärarens bedömningsmatris, en referenslösning och de matrispunkter som läraren faktiskt valt – väljer en frontiermodell samma punkter? Guldetiketterna är faktiska val av matrispunkter gjorda av lärare och undervisningsassistenter på tentor och quiz, inte ombedömda modellutdata.

## Vad du kan göra med den

Läs topplistan innan du litar på något betygsättningsföretags noggrannhetsanspråk, och läs uppgiftskonstruktionen innan du litar på topplistan. [[benchmark|Benchmarket]] omfattar 464 uppgifter från 125 frågor fördelade på 45 [[higher-ed|universitetskurser]] vid mer än tio institutioner, begränsat till tentamens- och quizfrågor med fritt svar som en professor eller undervisningsassistent granskat rad för rad, med tyngdpunkt på delpoäng – uppgifter med full poäng och noll poäng är begränsade till 5 % vardera eftersom modeller tycker att de är lätta.

Den nuvarande topplistan når som bäst en bra bit under mänsklig överensstämmelse: den bästa modellen når 57,3 % exakt överensstämmelse med matrisen, och webbplatsen visar noggrannhet mot kostnad per 1 000 svar, där en modell som ligger 0,8 poäng efter kostar ungefär en sjundedel så mycket. Den kostnadsaxeln är den praktiskt användbara delen, eftersom betygsättning är en volymoperation.

För ett andra, oberoende konstruerat instrument, se [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) från Learning Design Alliance, som är paketerat som ett öppet repositorium i stället för en hostad topplista och sammanfattas i [[porcaro-ai-grading-benchmark-2026|Porcaros studie]].

## Vem den är för

Lärare som beslutar om ett betygsättningsverktyg ska få lämna ut betyg utan granskning, bedömningsexperter som skriver upphandlingskrav, och forskare som behöver ett mål på matrisnivå snarare än en korrelation för essäpoängsättning.

## Anteckningar och förbehåll

GradeBench publiceras av Pensive, en kommersiell AI-betygsättningsplattform, så benchmarket och produkten har samma ägare; uppgiftskonstruktionen är dokumenterad och försvarbar, men behandla inramningen som leverantörens. Det täcker STEM-tentor med matriser på minst fyra punkter, vilket utesluter essäer, kortsvar och diskussionsinlägg – de format där merparten av bedömningen inom [[humanities-education|humaniora]] sker. Exakt överensstämmelse med matrisen är ett strikt mått: två bedömare kan vara oense om en punkt och båda ha rätt om studenten. Poängen beskriver modellversioner som var tillgängliga i november 2026 och kommer att ändras.
