---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "O bibliotecă de 165 de competențe de agent fundamentate pe dovezi, acoperind pedagogie, știința învățării, curriculum și evaluare, ambalate pentru Claude, Codex și Hermes."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**Education Agent Skills** este o bibliotecă de 165 de competențe de agent pentru profesori, lideri școlari și oameni care construiesc instrumente educaționale. Competențele sunt grupate în douăzeci de domenii care acoperă pedagogia, știința învățării, [[curriculum-design|curriculumul]], evaluarea și regenerarea, iar fiecare este scrisă pentru a fi încărcată de un [[agentic-ai|agent]], nu citită ca document.

## Ce poți face cu ea

Competențele se instalează în Claude Code, Codex și Hermes, fie ca plugin, fie prin copierea dosarelor, astfel încât aceeași bibliotecă funcționează pe mai multe suprafețe de agent. Un server MCP găzduit expune colecția ca instrumente pentru agenții care nu pot instala skill-uri local, iar depozitul livrează atât un registru, cât și un pachet preconstruit, ca serverul să poată servi colecția fără a citi fișierele individuale la momentul implementării.

Afirmația distinctivă a proiectului este fundamentarea: competențele citează dovezile pe care se sprijină, iar istoricul depozitului arată disciplina impusă, nu doar declarată, inclusiv o corecție integrată care a eliminat o atribuire nesprijinită și a corectat descrierea unei protecții testate dintr-un studiu citat.

## Note și precauții

Competențele educaționale, documentația și materialele curriculare sunt licențiate CC BY-SA 4.0, deci reutilizarea și adaptarea sunt deschise, iar derivatele trebuie să poarte aceeași licență. Două detalii operaționale contează dacă îl implementezi. Endpointul MCP găzduit cere tokenuri în loc să fie deschis oricui, iar pentru că serverul servește un instantaneu comis, nu fișierele SKILL.md, o competență adăugată fără reconstruirea și commit-ul pachetului nu va apărea pe serverul live nici după o reimplementare. Biblioteca este construită de Gareth Manning, educator și designer de curriculum, iar termenii de licențiere se aplică specific conținutului educațional.

## Concepte conexe

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]], [[educational-development]]
