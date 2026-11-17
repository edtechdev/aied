---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "En undervisers feltguide til at bygge et statisk uddannelsessite med en AI-kodeassistent: tre Markdown-instruktionsfiler til design, sikkerhed og elevprivatliv, med læsbare guider og en downloadbar bundle."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**Vibe-Coding Center** er Miguel Guhlins gratis feltguide til en lærer, der vil [[vibe-coding|vibe-kode]] et lille statisk uddannelsessite med en AI-kodeassistent — en exit ticket, en quiz, en klasseportfolio — uden at sende en blottet API-nøgle eller elevdata med.

## Hvad du kan gøre med det

Tre instruktionsfiler bærer vejledningen: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` og `securevcc.md`. Download dem ned i en projektrod, udfyld projektbrief-skabelonen, og bed derefter assistenten om at læse og anvende alle tre; guiden er udtrykkelig om, at tilstedeværelse ikke er aktivering, så filerne skal navngives i anmodningen. Læsbare guider forklarer hver af dem, herunder en gennemgang af »Three Essential Checks Before You Share«: indsaml færre elevdata, inspicér en blottet API-nøgle, og tilpas et værktøjs design til dets læringsopgave. Den komplette bundle tilføjer selve sitet, promptpakke, launch-gennemgang og genopbygningsscripts, med et SHA-256-manifest til downloadet.

Den ledsagende [EduSynth Hub-eksempelside](https://mguhlin.github.io/funquiz/examples.html) viser resultaterne som fungerende statiske værktøjer frem for skærmbilleder: en exit ticket-generator, der skriver et spørgsmål på et valgt SOLO Taxonomy-niveau, en studenterportfolio, der er én HTML-fil på GitHub Pages, og et søgbart bibliotek af faglige udviklingsressourcer, alle kørende klientside uden LMS-login.

## Hvem den er for

Lærere og [[learning-design|undervisningsdesignere]] i K-12 og videregående uddannelse, der kan beskrive det værktøj, de vil have, og er villige til at tjekke, hvad assistenten producerede. Den passer også til en afdeling, der vil have én fælles tjekliste, før nogen publicerer et elevvendt værktøj, og til undervisere, der underviser i [[ai-literacy|AI-kompetence]] gennem byggeri frem for gennem kritik.

## Noter og forbehold

Centeret er vejledning, ikke et compliance-produkt: sitet fremsætter ingen overensstemmelsespåstand for sit eget WCAG 2.2 AA-mål, svarer nej på »gør brugen af disse filer mit site compliant?« og siger, at en ingeniørgennemgang ikke erstatter skoleautorisation eller juridisk gennemgang. Sikkerhedshylden peger på axe-core, Gitleaks, ZAP og Playwright; de er referencer frem for medfølgende software, og de invasive er beregnet til et engangsmål eller et udtrykkeligt autoriseret mål. Læsning kræver ingen konto. Genopbygning af HTML-siderne kræver Python og `markdown-it-py`, hvilket er en buildafhængighed og ikke en besøgsafhængighed. Repositoriet er MIT-licenseret, mens tredjeparts artwork og de linkede projekter beholder deres egne vilkår, dokumenteret i `CREDITS.md`.

## Relaterede begreper

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
