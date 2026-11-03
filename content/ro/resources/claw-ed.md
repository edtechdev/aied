---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Un asistent didactic IA local-first care transformă propria ta programă în schițe de lecție editabile, materiale pentru elevi și slide-uri, folosind modelul pe care îl alegi."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**Claw-ED** este un asistent didactic local-first care schițează lecții pornind de la propriile tale materiale de programă. Un profesor își importă sursele, cere o lecție și primește schițe editabile împreună cu materiale pentru elevi și slide-uri, generate cu modelul pe care îl alege profesorul, nu cu un singur furnizor fix.

## Ce poți face cu el

Fluxul merge de la import prin schițare, revizuire și export, iar schițele sunt tratate ca puncte de plecare pe care profesorul le editează, nu ca fișe gata de predat. Sarcinile de lecție sunt puse în coadă și pot fi reluate, așa că o generare lungă care eșuează poate fi continuată în loc să fie repornită, iar artefactele generate pot fi descărcate. De asemenea, își expune instrumentele unui [[agentic-ai|agent]] printr-un server MCP și se poate conecta la Google Drive, astfel încât o școală să îl lege de stocarea și programarea existente.

Proiectul este deliberat agnostic față de model. Documentează modele Ollama locale, rute OpenRouter economice și opțiuni găzduite una lângă alta, iar ghidul său de modele este datat, ceea ce arată clar că recomandările sunt puncte de plecare bazate pe catalog, nu judecăți de calitate punctate de profesori.

## Note și precauții

Software-ul este gratuit și [[open-source|cu sursă deschisă]] sub licența MIT pentru codul original, deși componentele terțe își păstrează propriii termeni, iar rularea lui înseamnă să plătești propria inferență dacă folosești un model găzduit. Proiectul se etichetează drept beta revizuit de profesori și spune deschis în README că trecerea testelor sale CI nu stabilește calitatea didactică pe modele reale, ceea ce este modul corect de a citi o suită de teste verde în acest domeniu: verifică software-ul, nu [[pedagogy|pedagogia]]. Este întreținut de MacxLabs și acceptă lecții-exemplu revizuite de profesori ca contribuții.

## Concepte conexe
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
