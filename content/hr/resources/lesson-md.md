---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Otvoren format običnog teksta za e-učenje u blokovima, uz agentnu vještinu koja u tom formatu piše lekcije, ocjenjivanja i cijele pakete kolegija."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**LESSON.md** otvoren je format za e-učenje temeljeno na blokovima: Markdown datoteka s YAML frontmatterom i direktivama `:::` za tekst, slike i provjere znanja, čitljiva osobi i obradiva svakom alatu. Postoji zato što je sadržaj kolegija obično zaključan u jednom alatu za izradu i zato što [[llm|veliki jezični modeli]] mogu pomoći samo s lekcijama koje doista mogu pročitati.

## Što možete raditi s tim
Napišite lekciju u bilo kojem uređivaču teksta i uvezite je u bilo koji alat koji podržava format, bez kopiranja i preoblikovanja. Interaktivni dijelovi — provjere znanja s višestrukim odabirom, s ograničenim brojem pokušaja i povratnom informacijom na razini odgovora — izraženi su jednostavnim svojstvima, a ne grafičkim sučeljem. Popratna datoteka `ASSESSMENT.md` u korijenu paketa postaje ocjenjivani [[assessment|način ocjenjivanja]] kolegija. Projekt isporučuje i vještinu `lesson-md` koja uči Claude, Codex ili drugog [[agentic-ai|agenta]] formatu, pa opis kolegija običnim jezikom vraća lekcije, ocjenjivanja i cijeli paket.

## Za koga je

Dizajneri nastave i izrađivači kolegija koji žele da njihov sadržaj preživi promjenu alata, dobavljači e-učenja koji žele format uvoza i izvoza koji njihovi korisnici već razumiju, i svatko tko gradi autorski rad uz pomoć umjetne inteligencije na čitljivom formatu. Među suradnicima je Dan Bashaw iz LXD Integrala, a format ima javni popis promjena do v1.8.

## Povezani pojmovi

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
