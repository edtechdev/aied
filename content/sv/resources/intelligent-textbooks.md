---
title: "Att bygga intelligenta läroböcker"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Dan McCrearys öppna guide till intelligenta läroböcker: onlineläroböcker med sökning, navigering, ordlistor, quiz, begreppsgrafer och inbäddade simuleringar, byggda med MkDocs Material och generativ AI, med ett bibliotek av MicroSims."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Sajten **Intelligent Textbooks** är Dan McCrearys steg-för-steg-guide till att bygga *intelligenta läroböcker* – onlineläroböcker som går längre än statiska PDF:er genom att lägga till sökning, webbplatsnavigering, en ordlista över begrepp, en innehållsförteckning, quizhantering, renderade formler, förhandsvisningar för sociala medier, länkkontroll och en lätt visualiserad **begreppsgraf** som visar alla begrepp i en kurs och deras beroenden. Guiden argumenterar för att många kurser i dag kan dra nytta av onlineläroböcker av hög kvalitet med dessa funktioner, och den visar hur man bygger dem med byggsystemet [MkDocs](http://mkdocs.com/) tillsammans med Material-temat och generativ AI för att skapa och underhålla innehållet.

Det avgörande draget är att läroboken *författas i Markdown och genereras av AI*, ett konkret exempel på mönstret [[vibe-coding|AI-stött författande]] tillämpat på [[curriculum-design|kursinnehåll]]: i stället för att underhålla en stor sajt för hand beskriver du kursen och låter generativ AI producera och underhålla sidorna, medan verktygskedjan sköter navigering, sökning och begreppsgrafen. Ett medföljande bibliotek med [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) uppges automatisera över 90 % av de uppgifter som krävs för att bygga en lärobok på nivå 2 utifrån en kursbeskrivning.

## En följdresurs: MicroSims

Den naturliga följeslagaren till den här guiden är McCrearys bibliotek **MicroSims** på <https://dmccreary.github.io/microsims/> (källkod: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), som levererar de interaktiva simuleringar en intelligent lärobok bäddar in. En *MicroSim* (micro-simulering) är en enkel interaktiv simulering genererad med AI för att hjälpa lärare förklara ett begrepp, och den kan bäddas in i en intelligent lärobok eller vilken sajt som helst som accepterar en `iframe`. MicroSims är särpräglade av tre skäl: **AI-stödd generering** (standardiserade designmönster förvandlar en naturlig språkbeskrivning av en simulering till en delbar tillgång), **universell inbäddning** (ett enda HTML-element av typen `iframe` placerar en i vilken sida som helst) och **transparent, modifierbar kod** (ingen svart låda – ett klick öppnar simuleringen i en webbredigerare, och en Creative Commons-licens låter de flesta lärare använda dem utan licensavgifter). Termen myntades av Valerie Lockhart 2023 efter att hon sett att lärare och studenter kunde bygga simuleringar med JavaScript-biblioteket p5.js med liten eller ingen utbildning.

Projektet publicerar också ett JSON Schema för MicroSim-metadata så att AI-verktyg kan generera sökbara beskrivningar, med ett fasettindelat MicroSim-register på färdplanen. En forskningsartikel som beskriver ramverket – *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* – finns på arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Exempel på simuleringar är Bouncing Ball, Projectile Motion, String Harmonics, Conways Game of Life, Eulers formel och ett diagram över aktiemarknadens avkastning, alla körande live på sajten.

## Vem den är för

Lärare och instruktionsdesigners som vill bygga eller underhålla en kurslärobok, särskilt inom högre utbildning och yrkesutbildning, samt pedagogiska utvecklare och alla som använder generativ AI för att författa pedagogiskt innehåll. Den passar lärare som är bekväma med ett arbetsflöde i Markdown och Git (eller villiga att lära sig det) och som vill att AI:n ska sköta sajtens rör – sökning, navigering, begreppsgraf – så att de kan fokusera på pedagogiken.

## Anteckningar och förbehåll

Detta är en praktikers guide och verktygskedja, inte en peer-reviewad studie – den presenterar ett arbetsflöde och sin egen pedagogiska motivering (”intelligenta läroböcker vägleder studenter genom begrepp på deras jakt på kunskap”) snarare än evidens för läranderesultat. MicroSim-forskningsartikeln är det närmaste empiriskt stöd som finns, och den är självpublicerad på arXiv. Båda projekten är öppen källkod (förrådet intelligent-textbooks anger MIT-licens och 38 stjärnor; MicroSims anger en Creative Commons-licens och 13 stjärnor) och aktivt underhållna. Begreppsgrafer och en ordliste-först-struktur är genuint användbara för upptäckbarhet, men guiden förutsätter ett ganska tekniskt författararbetsflöde – MkDocs, Git och verktyg för generativ AI – vilket kan vara ett hinder för en del lärare. Vid intagningen ligger registret för MicroSims fortfarande bara på färdplanen, så att hitta en specifik befintlig simulering bygger på sajtens egen sökning och navigering.

## Anslutna begrepp

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
